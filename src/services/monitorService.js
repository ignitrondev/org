const NETDATA_URL = 'http://100.104.183.126:19999';
const UPDATE_INTERVAL = 3000; // 3 seconds

async function fetchNetdataMetric(chart) {
    try {
        const response = await fetch(`${NETDATA_URL}/api/v1/data?chart=${chart}&points=1&format=json`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching metric:', error);
        return null;
    }
}

async function updateMonitorStats() {
    try {
        // CPU
        const cpuData = await fetchNetdataMetric('system.cpu');
        if (cpuData && cpuData.data && cpuData.data[0]) {
            const cpuValues = cpuData.data[0].slice(1);
            const cpuUsage = cpuValues.reduce((a, b) => a + b, 0);
            document.getElementById('cpuValue').textContent = cpuUsage.toFixed(1) + '%';
            document.getElementById('cpuCores').textContent = cpuValues.length + ' cores';
            const cpuBar = document.getElementById('cpuBar');
            cpuBar.style.width = cpuUsage + '%';
            cpuBar.className = 'progress-fill' + (cpuUsage > 80 ? ' danger' : cpuUsage > 60 ? ' warning' : '');
        }

        // RAM
        const ramData = await fetchNetdataMetric('system.ram');
        if (ramData && ramData.data && ramData.data[0]) {
            const ramValues = ramData.data[0].slice(1);
            const free = ramValues[0] || 0;
            const used = ramValues[1] || 0;
            const total = used + free;
            const usedPercent = total > 0 ? (used / total * 100) : 0;
            document.getElementById('ramValue').textContent = usedPercent.toFixed(1) + '%';
            document.getElementById('ramDetails').textContent = 
                'Used: ' + (used / 1024).toFixed(1) + ' GB | Free: ' + (free / 1024).toFixed(1) + ' GB';
            const ramBar = document.getElementById('ramBar');
            ramBar.style.width = usedPercent + '%';
            ramBar.className = 'progress-fill' + (usedPercent > 80 ? ' danger' : usedPercent > 60 ? ' warning' : '');
        }

        // Disk - try multiple possible chart names
        let diskData = await fetchNetdataMetric('disk_space._');
        if (!diskData || !diskData.data || !diskData.data[0]) {
            diskData = await fetchNetdataMetric('disk_space./');
        }
        if (!diskData || !diskData.data || !diskData.data[0]) {
            diskData = await fetchNetdataMetric('disk.space');
        }
        
        if (diskData && diskData.data && diskData.data[0]) {
            const diskValues = diskData.data[0].slice(1);
            // Try different index combinations
            let avail = diskValues[0] || 0;
            let used = diskValues[1] || 0;
            
            // If avail is negative, swap them
            if (avail < 0) {
                [avail, used] = [used, avail];
            }
            
            const total = Math.abs(used) + Math.abs(avail);
            const usedPercent = total > 0 ? (Math.abs(used) / total * 100) : 0;
            document.getElementById('diskValue').textContent = usedPercent.toFixed(1) + '%';
            document.getElementById('diskDetails').textContent = 
                'Used: ' + (Math.abs(used) / 1024).toFixed(1) + ' GB | Free: ' + (Math.abs(avail) / 1024).toFixed(1) + ' GB';
            const diskBar = document.getElementById('diskBar');
            diskBar.style.width = usedPercent + '%';
            diskBar.className = 'progress-fill' + (usedPercent > 80 ? ' danger' : usedPercent > 60 ? ' warning' : '');
        }

        // Network
        const netData = await fetchNetdataMetric('system.net');
        if (netData && netData.data && netData.data[0]) {
            const netValues = netData.data[0].slice(1);
            const received = Math.abs(netValues[0] || 0);
            const sent = Math.abs(netValues[1] || 0);
            document.getElementById('netIn').textContent = (received / 1024).toFixed(1) + ' KB/s';
            document.getElementById('netOut').textContent = (sent / 1024).toFixed(1) + ' KB/s';
        }

        // Update status
        const statusBadge = document.getElementById('serverStatus');
        if (statusBadge) {
            statusBadge.classList.remove('offline');
            statusBadge.querySelector('span').textContent = 'Online';
        }

        // Update timestamp
        const now = new Date();
        const lastUpdated = document.getElementById('lastUpdated');
        if (lastUpdated) {
            lastUpdated.textContent = 'Last updated: ' + now.toLocaleTimeString();
        }

    } catch (error) {
        console.error('Update error:', error);
        const statusBadge = document.getElementById('serverStatus');
        if (statusBadge) {
            statusBadge.classList.add('offline');
            statusBadge.querySelector('span').textContent = 'Offline';
        }
    }
}

// Initialize monitor when DOM is ready
function initMonitor() {
    updateMonitorStats();
    setInterval(updateMonitorStats, UPDATE_INTERVAL);
}

// Auto-init if on monitor page
if (window.location.pathname.includes('monitor')) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMonitor);
    } else {
        initMonitor();
    }
}

export { updateMonitorStats, initMonitor };
