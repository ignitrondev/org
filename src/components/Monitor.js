export function Monitor() {
    return `
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
    `;
}
