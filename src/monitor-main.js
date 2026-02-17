import './style.css';
import { Navbar } from './components/Navbar';
import { Monitor } from './components/Monitor';
import { Footer } from './components/Footer';
import { ping, getStats, getVPSStats } from './services/monitorService';

// Use environment variable for API Base
const API_BASE = import.meta.env.VITE_MONITOR_API_BASE || 'http://localhost:3000';
const WS_BASE = API_BASE.replace('http', 'ws');

// 1. Inject UI Components
const app = document.querySelector('#app');
if (app) {
    app.innerHTML = `
        ${Navbar()}
        ${Monitor()}
        ${Footer()}
    `;
}

// 2. Monitoring Logic
const POLL_RATE = 1000; // Update every 1 second

async function refreshStats() {
    try {
        // Fetch both basic and advanced stats in parallel
        const [basicRes, vpsRes] = await Promise.all([
            getStats(),
            getVPSStats()
        ]);

        if (basicRes.success && basicRes.data) {
            updateUI(basicRes.data, vpsRes.success ? vpsRes.data : null);

            const statusEl = document.getElementById('serverStatus');
            if (statusEl) {
                statusEl.classList.remove('offline');
                statusEl.querySelector('span').textContent = 'Live (Enhanced)';
            }
            document.getElementById('errorMessage').style.display = 'none';
        } else {
            throw new Error('Invalid API response');
        }
    } catch (e) {
        console.error('Monitoring error:', e);
        const statusEl = document.getElementById('serverStatus');
        if (statusEl) {
            statusEl.classList.add('offline');
            statusEl.querySelector('span').textContent = 'Offline';
        }
        document.getElementById('errorMessage').style.display = 'block';
    }
}

function updateUI(data, advancedData) {
    const now = new Date();
    const lastUpdated = document.getElementById('lastUpdated');
    if (lastUpdated) lastUpdated.textContent = `Last updated: ${now.toLocaleTimeString()}`;

    // 1. CPU
    if (data.cpu) {
        const cpuValue = document.getElementById('cpuValue');
        const cpuBar = document.getElementById('cpuBar');
        const cpuModel = document.getElementById('cpuModel');
        const usage = typeof data.cpu.usage === 'number' ? data.cpu.usage : 0;

        if (cpuValue) cpuValue.textContent = `${usage}%`;
        if (cpuBar) {
            cpuBar.style.width = `${usage}%`;
            cpuBar.className = 'progress-fill' + (usage > 90 ? ' critical' : usage > 70 ? ' high' : '');
        }
        if (cpuModel) cpuModel.textContent = `${data.cpu.cores || 0} Cores Active`;
    }

    // 2. RAM
    if (data.memory) {
        const ramValue = document.getElementById('ramValue');
        const ramBar = document.getElementById('ramBar');
        const ramDetails = document.getElementById('ramDetails');
        const usagePercent = data.memory.usedPercent || 0;

        if (ramValue) ramValue.textContent = `${usagePercent}%`;
        if (ramBar) {
            ramBar.style.width = `${usagePercent}%`;
            ramBar.className = 'progress-fill' + (usagePercent > 90 ? ' critical' : usagePercent > 70 ? ' high' : '');
        }
        if (ramDetails) ramDetails.textContent = `${data.memory.used || '0B'} / ${data.memory.total || '0B'}`;
    }

    // 3. Advanced VPS Data (Services & Processes)
    if (advancedData) {
        // Services
        const servicesGrid = document.getElementById('servicesGrid');
        if (servicesGrid && advancedData.services) {
            servicesGrid.innerHTML = advancedData.services.map(s => `
                <div class="stat-card" style="padding: 16px; border-color: ${s.running ? 'rgba(166,227,161,0.3)' : 'rgba(243,139,168,0.3)'}">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span style="font-weight: 600; font-size: 0.875rem;">${s.service.toUpperCase()}</span>
                        <div class="status-dot" style="width: 6px; height: 6px; background-color: ${s.running ? 'var(--success)' : 'var(--danger)'}; animation: ${s.running ? 'pulse-dot 2s infinite' : 'none'}"></div>
                    </div>
                </div>
            `).join('');
        }

        // Top Processes
        const processList = document.getElementById('processList');
        if (processList && advancedData.processes) {
            processList.innerHTML = advancedData.processes.slice(0, 10).map(p => `
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.03);">
                    <td style="padding: 10px 16px; font-weight: 500;">${p.name}</td>
                    <td style="padding: 10px 16px; color: ${p.cpu > 20 ? 'var(--warning)' : 'var(--white)'}">${p.cpu}%</td>
                    <td style="padding: 10px 16px; color: var(--steel-silver);">${p.memoryPercent.toFixed(1)}%</td>
                </tr>
            `).join('');
        }

        // Network
        if (advancedData.network) {
            const activeNet = advancedData.network.find(n => n.active) || advancedData.network[0];
            if (activeNet) {
                const netIn = document.getElementById('netIn');
                const netOut = document.getElementById('netOut');
                if (netIn) netIn.textContent = activeNet.rx_bytes_formatted;
                if (netOut) netOut.textContent = activeNet.tx_bytes_formatted;
            }
        }
    }

    // 4. OS info
    if (data.system) {
        const osHost = document.getElementById('osHost');
        const osPlatform = document.getElementById('osPlatform');
        const osUptime = document.getElementById('osUptime');
        if (osHost) osHost.textContent = data.system.hostname || 'Unknown';
        if (osPlatform) osPlatform.textContent = data.system.distro || data.system.platform || 'Unknown';
        if (osUptime) osUptime.textContent = data.system.uptime || 'Unknown';
    }

    // 5. Docker Containers
    const dockerGrid = document.getElementById('dockerStatsGrid');
    if (data.docker && data.docker.available && data.docker.containers && data.docker.containers.length > 0) {
        if (dockerGrid) {
            dockerGrid.innerHTML = data.docker.containers.map(container => `
                <div class="stat-card" style="padding: 16px;">
                    <div class="stat-header" style="margin-bottom: 8px;">
                        <span class="stat-title" style="font-size: 0.75rem;">${container.name}</span>
                        <div style="font-size: 10px; color: var(--success); background: rgba(166,227,161,0.1); padding: 2px 6px; border-radius: 4px;">RUNNING</div>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--steel-silver);">
                        <span>CPU: ${container.cpu}</span>
                        <span>MEM: ${container.memoryPercent}</span>
                    </div>
                </div>
            `).join('');
        }
    } else if (dockerGrid && data.docker) {
        dockerGrid.innerHTML = `<div class="stat-card" style="text-align: center; color: var(--steel-silver);">No Docker containers.</div>`;
    }
}


// Ping Tool Logic
async function runPing() {
    const hostEl = document.getElementById('pingHost');
    const outputEl = document.getElementById('pingOutput');
    const btn = document.getElementById('pingBtn');
    if (!hostEl || !outputEl || !btn) return;

    const host = hostEl.value;
    if (!host) return;

    outputEl.textContent += `\n> Pinging ${host}...\n`;
    btn.disabled = true;

    try {
        const result = await ping(host);
        if (result.success && result.data) {
            outputEl.textContent += `Host: ${result.data.host} | Alive: ${result.data.alive} | Latency: ${result.data.time}ms | Loss: ${result.data.packetLoss}\n`;
        } else {
            outputEl.textContent += `Error: ${result.error || 'Failed to ping'}\n`;
        }
    } catch (e) {
        outputEl.textContent += `Error: ${e.message}\n`;
    } finally {
        btn.disabled = false;
        outputEl.scrollTop = outputEl.scrollHeight;
    }
}

// Initial Call & Event Listeners
refreshStats();
setInterval(refreshStats, POLL_RATE);
document.getElementById('pingBtn')?.addEventListener('click', runPing);
