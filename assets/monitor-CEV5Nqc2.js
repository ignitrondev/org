import"./modulepreload-polyfill-B5Qt9EMX.js";import{N as u,F as y}from"./Footer-BwxLpDTt.js";function h(){return`
    <main class="dashboard-container">
        <div class="dashboard-header">
            <div>
                <h1 class="dashboard-title">System <span class="text-gradient">Monitor</span></h1>
                <div class="last-updated" id="lastUpdated">Last updated: Never</div>
            </div>
            <div class="server-status" id="serverStatus">
                <div class="status-dot"></div>
                <span>Online</span>
            </div>
        </div>

        <div class="error-message" id="errorMessage">
            Failed to connect to monitoring server. Retrying...
        </div>

        <div class="stats-grid">
            <!-- CPU Card -->
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-title">CPU Usage</span>
                    <div class="stat-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                            <rect x="9" y="9" width="6" height="6"></rect>
                            <line x1="9" y1="1" x2="9" y2="4"></line>
                            <line x1="15" y1="1" x2="15" y2="4"></line>
                            <line x1="9" y1="20" x2="9" y2="23"></line>
                            <line x1="15" y1="20" x2="15" y2="23"></line>
                        </svg>
                    </div>
                </div>
                <div class="stat-value" id="cpuValue">0%</div>
                <div class="stat-subtext" id="cpuModel">Loading...</div>
                <div class="progress-bar">
                    <div class="progress-fill" id="cpuBar" style="width: 0%"></div>
                </div>
            </div>

            <!-- RAM Card -->
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-title">RAM Usage</span>
                    <div class="stat-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                            <path d="M6 19v-3M10 19v-3M14 19v-3M18 19v-3"></path>
                        </svg>
                    </div>
                </div>
                <div class="stat-value" id="ramValue">0%</div>
                <div class="stat-subtext" id="ramDetails">0 GB / 0 GB</div>
                <div class="progress-bar">
                    <div class="progress-fill" id="ramBar" style="width: 0%"></div>
                </div>
            </div>

            <!-- Network Stats Card (New) -->
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-title">Network I/O</span>
                    <div class="stat-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    </div>
                </div>
                <div class="os-info">
                    <div class="os-detail">
                        <span>Incoming</span>
                        <span id="netIn">0 MB</span>
                    </div>
                    <div class="os-detail">
                        <span>Outgoing</span>
                        <span id="netOut">0 MB</span>
                    </div>
                </div>
            </div>

            <!-- OS/System Card -->
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-title">System Info</span>
                    <div class="stat-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                        </svg>
                    </div>
                </div>
                <div class="os-info" id="osInfo">
                    <div class="os-detail">
                        <span>Host</span>
                        <span id="osHost">...</span>
                    </div>
                    <div class="os-detail">
                        <span>Distro</span>
                        <span id="osPlatform">...</span>
                    </div>
                    <div class="os-detail">
                        <span>Uptime</span>
                        <span id="osUptime">...</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Services Grid (New) -->
        <div class="tools-section">
            <h2 class="section-title" style="font-size: 1.5rem; margin-bottom: 24px;">System <span class="text-gradient">Services</span></h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px;" id="servicesGrid">
                <!-- Services will be injected here -->
                <div class="stat-card" style="text-align: center; color: var(--steel-silver);">Loading services...</div>
            </div>
        </div>

        <!-- Processes & Docker Row -->
        <div class="tools-section" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 32px;">
            <div>
                <h2 class="section-title" style="font-size: 1.5rem; margin-bottom: 24px;">Top <span class="text-gradient">Processes</span></h2>
                <div class="stat-card" style="padding: 0; overflow: hidden;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.875rem;" id="processTable">
                        <thead>
                            <tr style="background: rgba(255,255,255,0.03); text-align: left; color: var(--steel-silver);">
                                <th style="padding: 12px 16px;">Process</th>
                                <th style="padding: 12px 16px;">CPU</th>
                                <th style="padding: 12px 16px;">RAM</th>
                            </tr>
                        </thead>
                        <tbody id="processList">
                            <tr><td colspan="3" style="padding: 20px; text-align: center; color: var(--steel-silver);">Scanning processes...</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div>
                <h2 class="section-title" style="font-size: 1.5rem; margin-bottom: 24px;">Container <span class="text-gradient">Status</span></h2>
                <div class="stats-grid" id="dockerStatsGrid" style="grid-template-columns: 1fr; gap: 16px;">
                    <div class="stat-card" style="text-align: center; color: var(--steel-silver);">Scanning containers...</div>
                </div>
            </div>
        </div>

        <div class="tools-section">
            <h2 class="section-title" style="font-size: 1.5rem; margin-bottom: 24px;">Network <span class="text-gradient">Tools</span></h2>
            <div class="tool-card">
                <h3 style="margin-bottom: 16px;">Remote Ping</h3>
                <div class="ping-input-group">
                    <input type="text" id="pingHost" class="ping-input" placeholder="Enter hostname" value="google.com">
                    <button class="btn btn-primary" id="pingBtn">
                        Ping
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    </button>
                </div>
                <div class="ping-console" id="pingOutput">// Output console...</div>
            </div>
        </div>
    </main>
    `}const d="https://ririn-server.pygora-cobia.ts.net";async function f(t=""){try{const e=t?`${d}/api/ping?host=${encodeURIComponent(t)}`:`${d}/api/ping`;return await(await fetch(e)).json()}catch(e){return console.error("Ping failed:",e),{success:!1,error:e.message}}}async function x(){try{return await(await fetch(`${d}/api/all`)).json()}catch(t){return console.error("Fetch stats failed:",t),{success:!1,error:t.message}}}async function w(){try{return await(await fetch(`${d}/api/vps`)).json()}catch(t){return console.error("Fetch VPS stats failed:",t),{success:!1,error:t.message}}}const p=document.querySelector("#app");p&&(p.innerHTML=`
        ${u()}
        ${h()}
        ${y()}
    `);const b=3e3,B=3;let v=0,g=null;async function m(){try{const t=v%B===0,e=await x();let r=null;if(t&&(r=await w(),r.success&&(g=r.data)),e.success&&e.data){I(e.data,g);const l=document.getElementById("serverStatus");l&&(l.classList.remove("offline"),l.querySelector("span").textContent="Live (Optimized)"),document.getElementById("errorMessage").style.display="none"}else throw new Error("Invalid API response");v++}catch(t){console.error("Monitoring error:",t);const e=document.getElementById("serverStatus");e&&(e.classList.add("offline"),e.querySelector("span").textContent="Offline"),document.getElementById("errorMessage").style.display="block"}}function I(t,e){const r=new Date,l=document.getElementById("lastUpdated");if(l&&(l.textContent=`Last updated: ${r.toLocaleTimeString()}`),t.cpu){const i=document.getElementById("cpuValue"),a=document.getElementById("cpuBar"),s=document.getElementById("cpuModel"),o=typeof t.cpu.usage=="number"?t.cpu.usage:0;i&&(i.textContent=`${o}%`),a&&(a.style.width=`${o}%`,a.className="progress-fill"+(o>90?" critical":o>70?" high":"")),s&&(s.textContent=`${t.cpu.cores||0} Cores Active`)}if(t.memory){const i=document.getElementById("ramValue"),a=document.getElementById("ramBar"),s=document.getElementById("ramDetails"),o=t.memory.usedPercent||0;i&&(i.textContent=`${o}%`),a&&(a.style.width=`${o}%`,a.className="progress-fill"+(o>90?" critical":o>70?" high":"")),s&&(s.textContent=`${t.memory.used||"0B"} / ${t.memory.total||"0B"}`)}if(e){const i=document.getElementById("servicesGrid");i&&e.services&&(i.innerHTML=e.services.map(s=>`
                <div class="stat-card" style="padding: 16px; border-color: ${s.running?"rgba(166,227,161,0.3)":"rgba(243,139,168,0.3)"}">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span style="font-weight: 600; font-size: 0.875rem;">${s.service.toUpperCase()}</span>
                        <div class="status-dot" style="width: 6px; height: 6px; background-color: ${s.running?"var(--success)":"var(--danger)"}; animation: ${s.running?"pulse-dot 2s infinite":"none"}"></div>
                    </div>
                </div>
            `).join(""));const a=document.getElementById("processList");if(a&&e.processes&&(a.innerHTML=e.processes.slice(0,10).map(s=>`
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.03);">
                    <td style="padding: 10px 16px; font-weight: 500;">${s.name}</td>
                    <td style="padding: 10px 16px; color: ${s.cpu>20?"var(--warning)":"var(--white)"}">${s.cpu}%</td>
                    <td style="padding: 10px 16px; color: var(--steel-silver);">${s.memoryPercent.toFixed(1)}%</td>
                </tr>
            `).join("")),e.network){const s=e.network.find(o=>o.active)||e.network[0];if(s){const o=document.getElementById("netIn"),c=document.getElementById("netOut");o&&(o.textContent=s.rx_bytes_formatted),c&&(c.textContent=s.tx_bytes_formatted)}}}if(t.system){const i=document.getElementById("osHost"),a=document.getElementById("osPlatform"),s=document.getElementById("osUptime");i&&(i.textContent=t.system.hostname||"Unknown"),a&&(a.textContent=t.system.distro||t.system.platform||"Unknown"),s&&(s.textContent=t.system.uptime||"Unknown")}const n=document.getElementById("dockerStatsGrid");t.docker&&t.docker.available&&t.docker.containers&&t.docker.containers.length>0?n&&(n.innerHTML=t.docker.containers.map(i=>`
                <div class="stat-card" style="padding: 16px;">
                    <div class="stat-header" style="margin-bottom: 8px;">
                        <span class="stat-title" style="font-size: 0.75rem;">${i.name}</span>
                        <div style="font-size: 10px; color: var(--success); background: rgba(166,227,161,0.1); padding: 2px 6px; border-radius: 4px;">RUNNING</div>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--steel-silver);">
                        <span>CPU: ${i.cpu}</span>
                        <span>MEM: ${i.memoryPercent}</span>
                    </div>
                </div>
            `).join("")):n&&t.docker&&(n.innerHTML='<div class="stat-card" style="text-align: center; color: var(--steel-silver);">No Docker containers.</div>')}async function E(){const t=document.getElementById("pingHost"),e=document.getElementById("pingOutput"),r=document.getElementById("pingBtn");if(!t||!e||!r)return;const l=t.value;if(l){e.textContent+=`
> Pinging ${l}...
`,r.disabled=!0;try{const n=await f(l);n.success&&n.data?e.textContent+=`Host: ${n.data.host} | Alive: ${n.data.alive} | Latency: ${n.data.time}ms | Loss: ${n.data.packetLoss}
`:e.textContent+=`Error: ${n.error||"Failed to ping"}
`}catch(n){e.textContent+=`Error: ${n.message}
`}finally{r.disabled=!1,e.scrollTop=e.scrollHeight}}}m();setInterval(m,b);document.getElementById("pingBtn")?.addEventListener("click",E);
