export function Partners() {
    return `
    <section class="section partners" id="partners">
        <div class="container">
            <div class="section-header">
                <span class="section-badge">Partner Program</span>
                <h2 class="section-title">Choose Your <span class="text-gradient">Partnership Level</span></h2>
                <p class="section-subtitle">Start free, upgrade as you grow. No minimum commitments.</p>
            </div>

            <div class="tiers-grid">
                <!-- Reseller -->
                <div class="tier-card">
                    <div class="tier-icon" style="--tier-color: #CD7F32;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                    <h3 class="tier-name">Reseller</h3>
                    <div class="tier-price">Free</div>
                    <div class="tier-commission">20-30% Revenue Share</div>
                    <ul class="tier-features">
                        <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>Sell under IgnitronDev brand</li>
                        <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>Marketing materials</li>
                        <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>Demo access</li>
                    </ul>
                    <button class="btn btn-secondary btn-block">Start as Reseller</button>
                </div>

                <!-- White-Label Partner -->
                <div class="tier-card tier-card-popular">
                    <div class="tier-badge">MOST POPULAR</div>
                    <div class="tier-icon" style="--tier-color: #C0C0C0;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /><path d="M2 4l20 16" /><path d="M2 20 22 4" />
                        </svg>
                    </div>
                    <h3 class="tier-name">White-Label Partner</h3>
                    <div class="tier-price">$2,500<span>/year</span></div>
                    <div class="tier-commission tier-commission-highlight">50% Revenue Share</div>
                    <ul class="tier-features">
                        <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>Your brand, your domain</li>
                        <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>Custom branding</li>
                        <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>Revenue share 50/50</li>
                    </ul>
                    <button class="btn btn-primary btn-block">Become Partner</button>
                </div>

                <!-- Tech Partner -->
                <div class="tier-card">
                    <div class="tier-icon" style="--tier-color: #FFD700;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                        </svg>
                    </div>
                    <h3 class="tier-name">Technology Partner</h3>
                    <div class="tier-price">$10,000<span>/year</span></div>
                    <div class="tier-commission">60% Revenue Share</div>
                    <ul class="tier-features">
                        <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>Source code access</li>
                        <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>Exclusive territory</li>
                        <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>Revenue share 60/40</li>
                    </ul>
                    <button class="btn btn-secondary btn-block">Contact Sales</button>
                </div>
            </div>
        </div>
    </section>
    `;
}
