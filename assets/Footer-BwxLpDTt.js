function a(){return`
    <nav class="nav" id="nav">
        <div class="nav-container">
            <a href="#" class="nav-logo">
                <div class="nav-logo-icon">
                    <img src="/org/images/ignitron.png" alt="IgnitronDev">
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
    `}function t(){return`
    <section class="section cta" id="contact">
        <div class="container container-sm">
            <div class="cta-card">
                <div class="cta-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                    </svg>
                </div>
                <h2 class="cta-title">Ready to Start Your Software Business?</h2>
                <p class="cta-subtitle">Join our partner program today. Deploy your first platform within 2 weeks.</p>
                <div class="cta-buttons">
                    <button class="btn btn-primary btn-lg">Schedule Partnership Call</button>
                    <button class="btn btn-outline btn-lg">Download Partner Kit</button>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="#" class="footer-logo">
                        <div class="footer-logo-icon"><img src="/org/images/ignitron.png" alt="IgnitronDev"></div>
                        <span>Ignitron<span>Dev</span></span>
                    </a>
                    <p class="footer-desc">Platform Factory for System Integrators & Resellers. Strategic Joint Venture with Chinese Technology Partners.</p>
                </div>
                <div class="footer-links">
                    <h4>Platforms</h4>
                    <ul><li><a href="#">ShipRadar</a></li><li><a href="#">FactorySense</a></li><li><a href="#">AssetTrack</a></li></ul>
                </div>
                <div class="footer-links">
                    <h4>Partnership</h4>
                    <ul><li><a href="#">Reseller Program</a></li><li><a href="#">White-Label Partner</a></li><li><a href="#">Technology Partner</a></li></ul>
                </div>
                <div class="footer-links">
                    <h4>Contact</h4>
                    <ul>
                        <li class="footer-contact-item">partners@ignitrondev.com</li>
                        <li class="footer-contact-item">WA: +62 xxx-xxxx-xxxx</li>
                        <li class="footer-contact-item">WeChat: ignitrondev</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>© 2024 IgnitronDev. All rights reserved.</p>
                <div class="footer-bottom-links">
                    <a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Partner Agreement</a>
                </div>
            </div>
        </div>
    </footer>
    `}export{t as F,a as N};
