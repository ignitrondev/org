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
    
    // Mobile toggle (for future implementation)
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            // Add mobile menu functionality here
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
        button.addEventListener('click', function(e) {
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
    
    // Analytics (optional)
    // initAnalyticsTracking();
    
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
