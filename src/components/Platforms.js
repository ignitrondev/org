export function Platforms() {
    return `
    <section class="section platforms" id="platforms">
        <div class="container">
            <div class="section-header">
                <span class="section-badge">Platform Catalog</span>
                <h2 class="section-title">Choose Your <span class="text-gradient">Platform</span></h2>
                <p class="section-subtitle">Production-ready web applications. White-label. Deploy in 2 weeks.</p>
            </div>

            <div class="platforms-grid">
                <!-- ShipRadar -->
                <div class="platform-card" data-platform="shipradar">
                    <div class="platform-card-header">
                        <div class="platform-icon" style="--platform-color: #00D4FF;">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                                <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
                                <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
                                <path d="M12 10v4" /><path d="M12 2v3" />
                            </svg>
                        </div>
                        <span class="platform-status platform-status-live">● Live</span>
                    </div>
                    <h3 class="platform-name">
                        ShipRadar
                        <a href="https://shipradar.my.id" target="_blank" rel="noopener" class="platform-demo-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                        </a>
                    </h3>
                    <p class="platform-tagline">Maritime Vessel Tracking Platform</p>
                    <p class="platform-description">Real-time vessel tracking, AIS data integration, fleet management, and route optimization for maritime industry.</p>
                    <div class="platform-features">
                        <span class="platform-feature">Real-time Tracking</span>
                        <span class="platform-feature">AIS Integration</span>
                        <span class="platform-feature">Fleet Management</span>
                        <span class="platform-feature">Route Optimization</span>
                        <span class="platform-feature">+2 more</span>
                    </div>
                    <div class="platform-markets">
                        <strong>Markets:</strong> Maritime, Logistics, Port Authority, Shipping
                    </div>
                    <div class="platform-pricing">
                        <div class="platform-price">
                            <span class="platform-price-value">$5,000</span>
                            <span class="platform-price-label">setup</span>
                        </div>
                        <div class="platform-price-monthly">+ $500/month</div>
                        <button class="btn btn-primary btn-sm">Get Started</button>
                    </div>
                </div>

                <!-- FactorySense -->
                <div class="platform-card" data-platform="factorysense">
                    <div class="platform-card-header">
                        <div class="platform-icon" style="--platform-color: #00FF88;">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                                <path d="M17 18h1" /><path d="M12 18h1" /><path d="M7 18h1" />
                            </svg>
                        </div>
                        <span class="platform-status platform-status-soon">Coming Soon</span>
                    </div>
                    <h3 class="platform-name">FactorySense</h3>
                    <p class="platform-tagline">Smart Factory Monitoring Platform</p>
                    <p class="platform-description">Real-time production monitoring with direct integration to Shenzhen-manufactured IoT sensors.</p>
                    <div class="platform-features">
                        <span class="platform-feature">Production Monitoring</span>
                        <span class="platform-feature">IoT Sensors</span>
                        <span class="platform-feature">Shenzhen Certified</span>
                        <span class="platform-feature">+3 more</span>
                    </div>
                    <div class="platform-markets">
                        <strong>Markets:</strong> Manufacturing, Industrial, Automotive
                    </div>
                    <div class="platform-pricing">
                        <div class="platform-price">
                            <span class="platform-price-value">$8,000</span>
                            <span class="platform-price-label">setup</span>
                        </div>
                        <div class="platform-price-monthly">+ $800/month</div>
                        <button class="btn btn-secondary btn-sm" disabled>Notify Me</button>
                    </div>
                </div>

                <!-- AssetTrack -->
                <div class="platform-card" data-platform="assettrack">
                    <div class="platform-card-header">
                        <div class="platform-icon" style="--platform-color: #FF6B35;">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" />
                            </svg>
                        </div>
                        <span class="platform-status platform-status-soon">Coming Soon</span>
                    </div>
                    <h3 class="platform-name">AssetTrack</h3>
                    <p class="platform-tagline">Enterprise Asset Management Platform</p>
                    <p class="platform-description">Complete asset lifecycle management, inventory tracking, and maintenance analytics.</p>
                    <div class="platform-features">
                        <span class="platform-feature">Asset Lifecycle</span>
                        <span class="platform-feature">Inventory Tracking</span>
                        <span class="platform-feature">Maintenance Scheduling</span>
                        <span class="platform-feature">+3 more</span>
                    </div>
                    <div class="platform-markets">
                        <strong>Markets:</strong> Enterprise, Real Estate, Healthcare
                    </div>
                    <div class="platform-pricing">
                        <div class="platform-price">
                            <span class="platform-price-value">$6,000</span>
                            <span class="platform-price-label">setup</span>
                        </div>
                        <div class="platform-price-monthly">+ $600/month</div>
                        <button class="btn btn-secondary btn-sm" disabled>Notify Me</button>
                    </div>
                </div>

                <!-- Custom CDA -->
                <div class="custom-platform">
                    <div class="custom-platform-content">
                        <div class="custom-platform-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                            </svg>
                        </div>
                        <div class="custom-platform-text">
                            <h3>Need a Custom Platform?</h3>
                            <p>We build custom platforms for specific industries. Starting from $20,000.</p>
                        </div>
                    </div>
                    <button class="btn btn-primary">Discuss Your Project →</button>
                </div>
            </div>
        </div>
    </section>
    `;
}
