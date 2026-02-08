   // --- THEME TOGGLE ---
        function toggleTheme() {
            const html = document.documentElement;
            const isDark = html.classList.contains('dark');
            const text = document.getElementById('theme-text');
            
            if (isDark) {
                html.classList.remove('dark');
                text.innerText = 'Light';
            } else {
                html.classList.add('dark');
                text.innerText = 'Dark';
            }
        }

        // --- PING LOGIC (Server Status) ---
        // Konfigurasi Endpoint Rust Backend
        const API_URL = 'http://localhost:8080/api/ping'; 

        const pingBtn = document.getElementById('pingBtn');
        const btnText = document.getElementById('btnText');
        const btnLoader = document.getElementById('btnLoader');
        const latencyValue = document.getElementById('latencyValue');
        const statusIndicator = document.getElementById('statusIndicator');
        const ipValue = document.getElementById('ipValue');

        pingBtn.addEventListener('click', async () => {
            setLoading(true);
            
            try {
                await new Promise(r => setTimeout(r, 600)); // UX Delay
                const response = await fetch(API_URL);
                
                if (!response.ok) throw new Error('Network error');
                
                const data = await response.json();
                updateUI(data);

            } catch (error) {
                setErrorState();
            } finally {
                setLoading(false);
            }
        });

        function setLoading(isLoading) {
            pingBtn.disabled = isLoading;
            if (isLoading) {
                btnText.style.display = 'none';
                btnLoader.style.display = 'inline-block';
                latencyValue.style.opacity = '0.5';
                statusIndicator.className = 'status-dot';
            } else {
                btnText.style.display = 'inline';
                btnLoader.style.display = 'none';
                latencyValue.style.opacity = '1';
            }
        }

        function updateUI(data) {
            if(data.ip) ipValue.innerText = data.ip;
            
            if (data.status === 'online') {
                latencyValue.innerText = data.latency;
                statusIndicator.className = 'status-dot online';
            } else {
                latencyValue.innerText = 'TIMEOUT';
                statusIndicator.className = 'status-dot offline';
            }
        }

        function setErrorState() {
            latencyValue.innerText = 'ERR';
            statusIndicator.className = 'status-dot offline';
        }