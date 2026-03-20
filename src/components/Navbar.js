// Check if it's Lebaran period (Idul Fitri or Idul Adha)
function isLebaranPeriod() {
    const now = new Date();
    const year = now.getFullYear();
    
    // Approximate dates for Idul Fitri and Idul Adha (adjust yearly)
    // 2026: Idul Fitri ~March 20-22, Idul Adha ~May 27-29
    const lebaranDates = [
        { start: new Date(year, 2, 18), end: new Date(year, 2, 25), name: 'Idul Fitri' }, // March 18-25
        { start: new Date(year, 4, 25), end: new Date(year, 5, 2), name: 'Idul Adha' }    // May 25 - June 2
    ];
    
    for (const period of lebaranDates) {
        if (now >= period.start && now <= period.end) {
            return period.name;
        }
    }
    return null;
}

export function Navbar() {
    const lebaranName = isLebaranPeriod();
    const showLebaran = lebaranName !== null;
    
    return `
    <nav class="nav" id="nav">
        <div class="nav-container">
            <a href="#" class="nav-logo">
                <div class="nav-logo-icon">
                    <img src="${import.meta.env.BASE_URL}images/ignitron.png" alt="IgnitronDev">
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
    
    ${showLebaran ? `
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
    ` : ''}
    
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
    `;
}
