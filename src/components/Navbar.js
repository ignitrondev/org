export function Navbar() {
    return `
    <nav class="nav" id="nav">
        <div class="nav-container">
            <a href="#" class="nav-logo">
                <div class="nav-logo-icon">
                    <img src="images/ignitron.png" alt="IgnitronDev">
                </div>
                <div class="nav-logo-text">
                    <span class="nav-logo-name">Ignitron<span>Dev</span></span>
                    <span class="nav-logo-tagline">PLATFORM FACTORY</span>
                </div>
            </a>

            <button class="nav-mobile-toggle" id="mobileToggle">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div class="nav-links">
                <a href="#platforms">Platforms</a>
                <a href="#why-whitelabel">Why White-Label</a>
                <a href="#calculator">Calculator</a>
                <a href="#partners">Partnership</a>
                <a href="monitor.html">Monitor</a>
            </div>

            <button class="btn btn-primary nav-cta" onclick="scrollToSection('contact')">
                Become a Partner
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </button>

        </div>
    </nav>
    `;
}
