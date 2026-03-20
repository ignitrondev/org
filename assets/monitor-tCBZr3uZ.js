import{N as f,F as h}from"./Footer-G6a9ukAo.js";function b(){return`
    <main class="monitor-container">
        <div class="monitor-header">
            <div class="monitor-title">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                <span>Server <span class="text-gradient">Monitor</span></span>
            </div>
            <div style="display: flex; align-items: center; gap: 16px;">
                <div class="server-badge" id="serverStatus">
                    <div class="status-dot"></div>
                    <span>Checking...</span>
                </div>
                <a href="../" class="back-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    Back to Home
                </a>
            </div>
        </div>

        <div class="stats-grid">
            <!-- CPU Card -->
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-title">CPU Usage</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                        <rect x="9" y="9" width="6" height="6"></rect>
                    </svg>
                </div>
                <div class="stat-value" id="cpuValue">--</div>
                <div class="stat-subtext" id="cpuCores">-- cores</div>
                <div class="progress-bar">
                    <div class="progress-fill" id="cpuBar" style="width: 0%"></div>
                </div>
            </div>

            <!-- RAM Card -->
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-title">Memory Usage</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                        <path d="M6 19v-3M10 19v-3M14 19v-3M18 19v-3"></path>
                    </svg>
                </div>
                <div class="stat-value" id="ramValue">--</div>
                <div class="stat-subtext" id="ramDetails">-- / --</div>
                <div class="progress-bar">
                    <div class="progress-fill" id="ramBar" style="width: 0%"></div>
                </div>
            </div>

            <!-- Disk Card -->
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-title">Disk Usage</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 6v6l4 2"></path>
                    </svg>
                </div>
                <div class="stat-value" id="diskValue">--</div>
                <div class="stat-subtext" id="diskDetails">-- / --</div>
                <div class="progress-bar">
                    <div class="progress-fill" id="diskBar" style="width: 0%"></div>
                </div>
            </div>

            <!-- Network Card -->
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-title">Network I/O</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 8px;">
                    <div style="display: flex; justify-content: space-between;">
                        <span style="color: #64748b; font-size: 0.875rem;">↓ Download</span>
                        <span style="color: #00f5ff; font-weight: 600;" id="netIn">-- KB/s</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span style="color: #64748b; font-size: 0.875rem;">↑ Upload</span>
                        <span style="color: #0ea5e9; font-weight: 600;" id="netOut">-- KB/s</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="last-updated" id="lastUpdated">Last updated: Never</div>
    </main>
    
    <style>
        .monitor-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 80px 24px 40px;
        }

        .monitor-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
        }

        .monitor-title {
            font-size: 2rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .server-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.3);
            color: #10b981;
            border-radius: 20px;
            font-size: 0.875rem;
            font-weight: 600;
        }

        .server-badge.offline {
            background: rgba(239, 68, 68, 0.1);
            border-color: rgba(239, 68, 68, 0.3);
            color: #ef4444;
        }

        .status-dot {
            width: 8px;
            height: 8px;
            background: #10b981;
            border-radius: 50%;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.2); }
        }

        .back-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 20px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-size: 0.875rem;
            transition: all 0.3s ease;
        }

        .back-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(0, 245, 255, 0.3);
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
            margin-bottom: 32px;
        }

        .stat-card {
            background: rgba(17, 24, 39, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 24px;
            backdrop-filter: blur(10px);
        }

        .stat-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }

        .stat-title {
            font-size: 0.875rem;
            color: #94a3b8;
            font-weight: 500;
        }

        .stat-value {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #00f5ff, #0ea5e9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .stat-subtext {
            font-size: 0.875rem;
            color: #64748b;
        }

        .progress-bar {
            width: 100%;
            height: 8px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 100px;
            overflow: hidden;
            margin-top: 12px;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #00f5ff, #0ea5e9);
            border-radius: 100px;
            transition: width 0.5s ease;
            box-shadow: 0 0 10px rgba(0, 245, 255, 0.5);
        }

        .progress-fill.warning {
            background: linear-gradient(90deg, #f59e0b, #eab308);
        }

        .progress-fill.danger {
            background: linear-gradient(90deg, #ef4444, #dc2626);
        }

        .last-updated {
            text-align: center;
            color: #64748b;
            font-size: 0.875rem;
            margin-top: 32px;
        }

        @media (max-width: 768px) {
            .monitor-header {
                flex-direction: column;
                gap: 16px;
                align-items: flex-start;
            }
            
            .monitor-title {
                font-size: 1.5rem;
            }

            .stats-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
    `}const y="http://100.104.183.126:19999",w=3e3;async function o(n){try{return await(await fetch(`${y}/api/v1/data?chart=${n}&points=1&format=json`)).json()}catch(s){return console.error("Error fetching metric:",s),null}}async function m(){try{const n=await o("system.cpu");if(n&&n.data&&n.data[0]){const i=n.data[0].slice(1),t=i.reduce((d,r)=>d+r,0);document.getElementById("cpuValue").textContent=t.toFixed(1)+"%",document.getElementById("cpuCores").textContent=i.length+" cores";const e=document.getElementById("cpuBar");e.style.width=t+"%",e.className="progress-fill"+(t>80?" danger":t>60?" warning":"")}const s=await o("system.ram");if(s&&s.data&&s.data[0]){const i=s.data[0].slice(1),t=i[0]||0,e=i[1]||0,d=e+t,r=d>0?e/d*100:0;document.getElementById("ramValue").textContent=r.toFixed(1)+"%",document.getElementById("ramDetails").textContent="Used: "+(e/1024).toFixed(1)+" GB | Free: "+(t/1024).toFixed(1)+" GB";const l=document.getElementById("ramBar");l.style.width=r+"%",l.className="progress-fill"+(r>80?" danger":r>60?" warning":"")}let a=await o("disk_space._");if((!a||!a.data||!a.data[0])&&(a=await o("disk_space./")),(!a||!a.data||!a.data[0])&&(a=await o("disk.space")),a&&a.data&&a.data[0]){const i=a.data[0].slice(1);let t=i[0]||0,e=i[1]||0;t<0&&([t,e]=[e,t]);const d=Math.abs(e)+Math.abs(t),r=d>0?Math.abs(e)/d*100:0;document.getElementById("diskValue").textContent=r.toFixed(1)+"%",document.getElementById("diskDetails").textContent="Used: "+(Math.abs(e)/1024).toFixed(1)+" GB | Free: "+(Math.abs(t)/1024).toFixed(1)+" GB";const l=document.getElementById("diskBar");l.style.width=r+"%",l.className="progress-fill"+(r>80?" danger":r>60?" warning":"")}const c=await o("system.net");if(c&&c.data&&c.data[0]){const i=c.data[0].slice(1),t=Math.abs(i[0]||0),e=Math.abs(i[1]||0);document.getElementById("netIn").textContent=(t/1024).toFixed(1)+" KB/s",document.getElementById("netOut").textContent=(e/1024).toFixed(1)+" KB/s"}const p=document.getElementById("serverStatus");p&&(p.classList.remove("offline"),p.querySelector("span").textContent="Online");const x=new Date,u=document.getElementById("lastUpdated");u&&(u.textContent="Last updated: "+x.toLocaleTimeString())}catch(n){console.error("Update error:",n);const s=document.getElementById("serverStatus");s&&(s.classList.add("offline"),s.querySelector("span").textContent="Offline")}}function g(){m(),setInterval(m,w)}window.location.pathname.includes("monitor")&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g):g());const v=document.querySelector("#app");v&&(v.innerHTML=`
        ${f()}
        ${b()}
        ${h()}
    `);g();
