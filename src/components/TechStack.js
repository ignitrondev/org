export function TechStack() {
    return `
    <section class="tech-stack-section">
        <div class="container text-center">
            <div class="section-badge">Platform Architecture</div>
            <h2 class="section-title">Inside the <span class="text-gradient">Engine</span></h2>
            <p class="section-subtitle">We use industrial-grade technology to ensure your business remains unbreakable and scalable.</p>

            <div class="tech-grid">
                <div class="tech-item">
                    <div class="tech-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <div class="tech-label">Core Rust (Since 2019)</div>
                    <div class="tech-desc">Our foundational stack since Day 1. Memory-safe backend for zero downtime operation.</div>
                    <div id="github-pulse" style="margin-top: 12px; font-family: var(--mono-font); font-size: 10px; color: var(--cyber-cyan); opacity: 0.8;">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 4px;">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        PULSE: <span id="gh-activity">Connecting...</span>
                    </div>
                </div>
                <div class="tech-item">
                    <div class="tech-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                            <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>
                    </div>
                    <div class="tech-label">WebAssembly</div>
                    <div class="tech-desc">High-performance browser-based data processing.</div>
                </div>
                <div class="tech-item">
                    <div class="tech-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    </div>
                    <div class="tech-label">IoT Sensor Lab</div>
                    <div class="tech-desc">Direct Shenzhen hardware-level R&D integration.</div>
                </div>
                <div class="tech-item">
                    <div class="tech-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                    </div>
                    <div class="tech-label">AES-256 Auth</div>
                    <div class="tech-desc">Bank-level security for your clients' critical data.</div>
                </div>
                <div class="tech-item">
                    <div class="tech-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                            <path d="M2 12h20" />
                        </svg>
                    </div>
                    <div class="tech-label">Edge Gateway</div>
                    <div class="tech-desc">Distributed compute nodes for ultra-low latency.</div>
                </div>
                <div class="tech-item">
                    <div class="tech-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                            <rect x="9" y="9" width="6" height="6" />
                            <line x1="9" y1="1" x2="9" y2="4" />
                            <line x1="15" y1="1" x2="15" y2="4" />
                            <line x1="9" y1="20" x2="9" y2="23" />
                            <line x1="15" y1="20" x2="15" y2="23" />
                            <line x1="20" y1="9" x2="23" y2="9" />
                            <line x1="20" y1="15" x2="23" y2="15" />
                            <line x1="1" y1="9" x2="4" y2="9" />
                            <line x1="1" y1="15" x2="4" y2="15" />
                        </svg>
                    </div>
                    <div class="tech-label">Auto-Scaling</div>
                    <div class="tech-desc">Infrastructure that grows as your reseller business grows.</div>
                </div>
            </div>
        </div>
    </section>
    `;
}
