(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function s(){const o=new Date,a=o.getFullYear(),n=[{start:new Date(a,2,18),end:new Date(a,2,25),name:"Idul Fitri"},{start:new Date(a,4,25),end:new Date(a,5,2),name:"Idul Adha"}];for(const r of n)if(o>=r.start&&o<=r.end)return r.name;return null}function l(){return`
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
                <a href="monitor/">Monitor</a>
            </div>

            <button class="btn btn-primary nav-cta" onclick="scrollToSection('contact')">
                Become a Partner
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </button>

        </div>
    </nav>
    
    ${s()!==null?`
    <div class="lebaran-floating" id="lebaranFloat">
        <div class="lebaran-content">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="mosque-icon">
                <path d="M12 2L10 6H14L12 2Z"/>
                <path d="M6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8H14C14 6.9 14.9 6 16 6C17.1 6 18 6.9 18 8H20V10H4V8H6Z"/>
                <path d="M4 11H20V22H16V18C16 16.9 15.1 16 14 16H10C8.9 16 8 16.9 8 18V22H4V11Z"/>
                <circle cx="7" cy="14" r="1"/>
                <circle cx="17" cy="14" r="1"/>
            </svg>
            <span class="lebaran-text">Minal Aidin<br>Wal Faizin</span>
        </div>
        <button class="lebaran-close" onclick="document.getElementById('lebaranFloat').style.display='none'">×</button>
    </div>
    `:""}
    
    <style>
        .lebaran-floating {
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px 20px;
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.95), rgba(5, 150, 105, 0.95));
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 50px;
            box-shadow: 0 8px 32px rgba(16, 185, 129, 0.4);
            animation: lebaranSlideIn 0.6s ease-out, lebaranFloat 3s ease-in-out infinite;
            cursor: pointer;
            transition: transform 0.3s ease;
        }
        
        .lebaran-floating:hover {
            transform: scale(1.05);
        }
        
        .lebaran-content {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .mosque-icon {
            color: #ffffff;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
            animation: mosqueRotate 4s ease-in-out infinite;
        }
        
        .lebaran-text {
            color: #ffffff;
            font-size: 13px;
            font-weight: 700;
            line-height: 1.3;
            text-shadow: 0 2px 4px rgba(0,0,0,0.2);
            letter-spacing: 0.3px;
        }
        
        .lebaran-close {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            font-size: 18px;
            line-height: 1;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.3s ease;
            margin-left: 8px;
        }
        
        .lebaran-close:hover {
            background: rgba(255, 255, 255, 0.3);
        }
        
        @keyframes lebaranSlideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes lebaranFloat {
            0%, 100% { 
                transform: translateY(0px);
                box-shadow: 0 8px 32px rgba(16, 185, 129, 0.4);
            }
            50% { 
                transform: translateY(-8px);
                box-shadow: 0 12px 40px rgba(16, 185, 129, 0.6);
            }
        }
        
        @keyframes mosqueRotate {
            0%, 100% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(-5deg) scale(1.1); }
            75% { transform: rotate(5deg) scale(1.1); }
        }
        
        @media (max-width: 768px) {
            .lebaran-floating {
                bottom: 16px;
                right: 16px;
                padding: 12px 16px;
                border-radius: 40px;
            }
            
            .lebaran-text {
                font-size: 11px;
            }
            
            .mosque-icon {
                width: 20px;
                height: 20px;
            }
        }
    </style>
    `}function c(){return`
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
                        <li class="footer-contact-item">
                            <a href="https://instagram.com/ignitrondev" target="_blank" rel="noopener noreferrer" style="color: var(--cyber-cyan); text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                                @ignitrondev
                            </a>
                        </li>
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
    `}export{c as F,l as N};
