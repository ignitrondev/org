export function Hero() {
    return `
    <section class="hero" id="hero">
        <div class="hero-bg">
            <div class="hero-grid"></div>
            <div id="globeViz" class="hero-globe-bg"></div>
        </div>

        <div class="hero-content">
            <div class="hero-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                </svg>
                Platform Factory for Resellers & Partners
            </div>

            <h1 class="hero-title">
                Software Platforms<br>
                <span class="text-gradient">Ready to Deploy</span>
            </h1>

            <p class="hero-partners-subtitle" style="color: var(--cyber-cyan); font-size: 14px; margin-bottom: 16px; font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase;">
                <span style="opacity: 0.8">Strategic R&D Alliance:</span> Jakarta 🇮🇩 &nbsp;•&nbsp; Shenzhen 🇨🇳
            </p>

            <p class="hero-subtitle">
                White-label web applications for system integrators & resellers.
            </p>

            <p class="hero-highlight">
                Your brand. Your pricing. Your clients. We stay invisible.
            </p>

            <div class="server-ping-demo" style="margin-top: 40px; margin-bottom: 20px;">
                <div class="server-node">
                    <div class="server-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="2" width="20" height="8" rx="1" />
                            <rect x="2" y="14" width="20" height="8" rx="1" />
                        </svg>
                    </div>
                    <span style="font-family: var(--mono-font); font-size: 10px;">JKT_NODE</span>
                    <div id="jkt-time" style="font-family: var(--mono-font); font-size: 11px; color: var(--cyber-cyan); font-weight: 700;">--:--</div>
                </div>

                <div class="ping-conn-line">
                    <div class="ping-packet"></div>
                    <div class="ping-latency" id="hero-latency" style="font-family: var(--mono-font);">24ms</div>
                </div>

                <div class="server-node">
                    <div class="server-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="2" width="20" height="8" rx="1" />
                            <rect x="2" y="14" width="20" height="8" rx="1" />
                        </svg>
                    </div>
                    <span style="font-family: var(--mono-font); font-size: 10px;">SHZ_NODE</span>
                    <div id="sz-time" style="font-family: var(--mono-font); font-size: 11px; color: var(--cyber-cyan); font-weight: 700;">--:--:--</div>
                </div>
            </div>

            <div class="visitor-intel" id="visitor-intel" style="display: none; justify-content: center; align-items: center; gap: 8px; margin-bottom: 40px; font-family: var(--mono-font); font-size: 11px;">
                <span class="live-dot" style="width: 6px; height: 6px;"></span>
                <span id="visitor-info" style="color: var(--steel-silver);">VISITOR_READY: [SCANNING_NODE...]</span>
            </div>

            <div class="hero-cta">
                <a href="products.html" class="btn btn-primary btn-lg">View Live Dashboard</a>
                <a href="foundry.html" class="btn btn-outline btn-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    Explore The Foundry
                </a>
            </div>

            <div class="hero-stats">
                <div class="hero-stat">
                    <div class="hero-stat-value">3</div>
                    <div class="hero-stat-label">Ready Platforms</div>
                </div>
                <div class="hero-stat">
                    <div class="hero-stat-value">50%+</div>
                    <div class="hero-stat-label">Partner Revenue</div>
                </div>
                <div class="hero-stat">
                    <div class="hero-stat-value">2 Weeks</div>
                    <div class="hero-stat-label">Deploy Time</div>
                </div>
                <div class="hero-stat">
                    <div class="hero-stat-value">24/7</div>
                    <div class="hero-stat-label">Support</div>
                </div>
            </div>
        </div>

        <div class="hero-scroll">
            <span>Scroll to explore</span>
            <div class="hero-scroll-mouse">
                <div class="hero-scroll-dot"></div>
            </div>
        </div>
    </section>
    `;
}
