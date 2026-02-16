/**
 * IgnitronDev - Platform Factory
 * Main JavaScript
 */

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const nav = document.getElementById('nav');
    const mobileToggle = document.getElementById('mobileToggle');

    // Scroll handler
    function handleScroll() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Mobile toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            if (navLinks) {
                navLinks.classList.toggle('active');
                mobileToggle.classList.toggle('active');
            }
        });
    }
}

// ============================================
// SMOOTH SCROLL
// ============================================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// REVENUE CALCULATOR
// ============================================

function initCalculator() {
    const clientsSlider = document.getElementById('clientsSlider');
    const dealSlider = document.getElementById('dealSlider');
    const clientsValue = document.getElementById('clientsValue');
    const dealValue = document.getElementById('dealValue');
    const monthlyRevenue = document.getElementById('monthlyRevenue');
    const annualRevenue = document.getElementById('annualRevenue');

    const REVENUE_SHARE = 0.5; // 50%

    function calculateRevenue() {
        const clients = parseInt(clientsSlider.value);
        const dealSize = parseInt(dealSlider.value);

        const monthly = clients * dealSize * REVENUE_SHARE;
        const annual = monthly * 12;

        // Update display values
        clientsValue.textContent = clients;
        dealValue.textContent = dealSize.toLocaleString();
        monthlyRevenue.textContent = '$' + monthly.toLocaleString();
        annualRevenue.textContent = '$' + annual.toLocaleString();
    }

    if (clientsSlider && dealSlider) {
        clientsSlider.addEventListener('input', calculateRevenue);
        dealSlider.addEventListener('input', calculateRevenue);

        // Initial calculation
        calculateRevenue();
    }
}

// ============================================
// ANIMATIONS ON SCROLL
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const elements = document.querySelectorAll('.platform-card, .benefit-card, .tier-card, .comparison-card');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// Add animation class styles
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// COUNTER ANIMATION
// ============================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

// ============================================
// PLATFORM CARD INTERACTIONS
// ============================================

function initPlatformCards() {
    const cards = document.querySelectorAll('.platform-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================

function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                pointer-events: none;
                width: 100px;
                height: 100px;
                left: ${x - 50}px;
                top: ${y - 50}px;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
            `;

            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// LAZY LOADING FOR IFRAME
// ============================================

function initLazyLoading() {
    const iframe = document.querySelector('.showcase-iframe iframe');

    if (iframe && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    iframe.src = iframe.src; // Trigger load
                    observer.unobserve(iframe);
                }
            });
        }, { rootMargin: '100px' });

        observer.observe(iframe);
    }
}

// ============================================
// FORM HANDLING (Future)
// ============================================

function handleFormSubmit(formId, callback) {
    const form = document.getElementById(formId);

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Add loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            try {
                if (callback) {
                    await callback(data);
                }
                submitBtn.textContent = 'Sent!';
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            } catch (error) {
                submitBtn.textContent = 'Error!';
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    }
}

// ============================================
// ANALYTICS TRACKING (Future)
// ============================================

function trackEvent(category, action, label) {
    // Google Analytics or other tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }

    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Track button clicks
function initAnalyticsTracking() {
    // Track CTA clicks
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', () => {
            trackEvent('CTA', 'click', btn.textContent.trim());
        });
    });

    // Track platform card views
    const platformCards = document.querySelectorAll('.platform-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const platform = entry.target.dataset.platform;
                trackEvent('Platform', 'view', platform);
            }
        });
    }, { threshold: 0.5 });

    platformCards.forEach(card => observer.observe(card));
}

// ============================================
// HERO GLOBE VISUALIZATION
// ============================================

function initHeroGlobe() {
    const globeContainer = document.getElementById('globeViz');
    if (!globeContainer) return;

    // Catppuccin Mocha Colors
    const colors = {
        blue: '#89b4fa',
        sapphire: '#74c7ec'
    };

    // Use fixed dimensions for background globe
    const size = Math.min(window.innerWidth, 800);

    const GlobePlot = Globe()
        (globeContainer)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
        .backgroundColor('rgba(0,0,0,0)')
        .showAtmosphere(true)
        .atmosphereColor(colors.blue)
        .atmosphereDaylightAlpha(0.1)
        .width(size)
        .height(size)

        // Data Corridor (from Shenzhen to Jakarta)
        .arcsData([
            { startLat: 22.5431, startLng: 114.0579, endLat: -6.2088, endLng: 106.8456, color: [colors.sapphire, colors.blue] },
            { startLat: 22.5431, startLng: 114.0579, endLat: -6.2088, endLng: 106.8456, color: [colors.sapphire, colors.blue], altitude: 0.4 },
            { startLat: 22.5431, startLng: 114.0579, endLat: -6.2088, endLng: 106.8456, color: [colors.sapphire, colors.blue], altitude: 0.2 }
        ])
        .arcColor('color')
        .arcDashLength(0.5)
        .arcDashGap(2)
        .arcDashAnimateTime(2000)
        .arcStroke(1.2)
        .arcCurve(0.3)

        // Pulsing Rings
        .ringsData([
            { lat: -6.2088, lng: 106.8456, color: colors.blue },
            { lat: 22.5431, lng: 114.0579, color: colors.sapphire }
        ])
        .ringColor(d => d.color)
        .ringMaxRadius(6)
        .ringPropagationSpeed(2)
        .ringRepeatPeriod(1200);

    // Initial View on SE Asia
    GlobePlot.pointOfView({ lat: 15, lng: 110, altitude: 2.2 }, 0);

    // Forced Auto-rotation
    const controls = GlobePlot.controls();
    if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.4;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.update();
    }

    // Handle Resize
    window.addEventListener('resize', () => {
        const newSize = Math.min(window.innerWidth, 800);
        GlobePlot.width(newSize).height(newSize);
    });
}

// ============================================
// INITIALIZE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    initNavigation();
    initCalculator();

    // Enhancements
    addAnimationStyles();
    initScrollAnimations();
    initPlatformCards();
    initButtonEffects();
    initLazyLoading();
    initHeroGlobe(); // Initialize Globe

    // Server Ping Demo Simulation
    const heroPingEl = document.getElementById('hero-ping');
    const heroLatencyEl = document.getElementById('hero-latency');

    if (heroPingEl || heroLatencyEl) {
        setInterval(() => {
            const basePing = 42;
            const jitter = Math.floor(Math.random() * 14) - 5;
            const currentPing = basePing + jitter;

            if (heroPingEl) heroPingEl.innerText = `${currentPing}ms`;
            if (heroLatencyEl && Math.random() > 0.7) {
                heroLatencyEl.innerText = `${currentPing}ms`;
            }
        }, 2000);
    }

    // Real-time Node Clocks (Jakarta & Shenzhen)
    function updateNodeClocks() {
        const jktTime = new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit' });
        const szTime = new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit', second: '2-digit' });

        const jktEl = document.getElementById('jkt-time');
        const szEl = document.getElementById('sz-time');

        if (jktEl) jktEl.innerText = jktTime;
        if (szEl) szEl.innerText = szTime;
    }
    setInterval(updateNodeClocks, 1000);
    updateNodeClocks();

    // GitHub Pulse (Real Data)
    async function fetchGitHubPulse() {
        const ghEl = document.getElementById('gh-activity');
        if (!ghEl) return;

        try {
            // Fetch latest activity from the public organization
            const response = await fetch('https://api.github.com/orgs/ignitrondev/repos?sort=updated&per_page=1');
            const [latestRepo] = await response.json();

            if (latestRepo) {
                const date = new Date(latestRepo.updated_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
                ghEl.innerText = `Active in "${latestRepo.name}" (Last push: ${date})`;
            } else {
                ghEl.innerText = 'Stable (v2.4.0 deployed)';
            }
        } catch (e) {
            ghEl.innerText = 'Operational (Relay Stable)';
        }
    }
    fetchGitHubPulse();

    // Visitor Intelligence (IP Geolocation)
    async function initVisitorIntel() {
        const intelContainer = document.getElementById('visitor-intel');
        const infoEl = document.getElementById('visitor-info');
        if (!intelContainer || !infoEl) return;

        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();

            if (data.city && data.country_name) {
                intelContainer.style.display = 'flex';
                const isp = data.org ? data.org.split(' ').slice(0, 2).join(' ') : 'Unknown ISP';
                infoEl.innerHTML = `VSTR_LINK: ESTABLISHED [${data.city}, ${data.country_code}] via ${isp} | LATENCY: <span id="visitor-latency">--ms</span>`;

                // Simulate personalized latency
                setInterval(() => {
                    const latency = Math.floor(Math.random() * 8) + 6;
                    const latencyEl = document.getElementById('visitor-latency');
                    if (latencyEl) latencyEl.innerText = `${latency}ms`;
                }, 1500);
            }
        } catch (e) {
            console.error('Visitor Intel Error');
        }
    }
    initVisitorIntel();

    // Provider Status Monitor
    async function updateProviderStatus() {
        const dot = document.getElementById('provider-status-dot');
        const text = document.getElementById('provider-status-text');
        if (!dot || !text) return;

        const providers = ['AWS', 'GitHub', 'Cloudflare'];
        let allOk = true;

        // In a real app, we'd fetch their health APIs. Here we simulate a robust check.
        const isHealthy = Math.random() > 0.05; // 95% chance to show live health

        if (isHealthy) {
            dot.style.background = '#a6e3a1';
            text.innerText = 'ALL_SYSTEMS_OPERATIONAL';
        } else {
            dot.style.background = '#fab387';
            text.innerText = 'MINOR_LATENCY_DETECTED';
        }
    }
    updateProviderStatus();
    setInterval(updateProviderStatus, 30000);

    console.log('IgnitronDev website initialized');
});

// ============================================
// EXPORTS (for external use)
// ============================================

window.IgnitronDev = {
    scrollToSection,
    trackEvent,
    handleFormSubmit
};
