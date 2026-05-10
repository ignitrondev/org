export function Leadership() {
    return `
    <section class="section leadership" id="leadership">
        <div class="container">
            <div class="section-header">
                <span class="section-badge">Leadership</span>
                <h2 class="section-title">Meet the <span class="text-gradient">Founders</span></h2>
                <p class="section-subtitle">The people behind IgnitronDev</p>
            </div>

            <div class="leadership-grid">

                <!-- Founder -->
                <div class="leadership-card" itemscope itemtype="https://schema.org/Person">
                    <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(137,180,250,0.05) 0%, transparent 70%); pointer-events: none;"></div>
                    <div class="leadership-avatar" style="background: linear-gradient(135deg, var(--cyber-cyan), var(--deep-space-light)); border-color: rgba(137,180,250,0.3);">BA</div>
                    <h3 class="leadership-name" itemprop="name">Bima Adam Nugraha</h3>
                    <p class="leadership-role" style="color: var(--cyber-cyan);" itemprop="jobTitle">Founder & Fullstack Engineer</p>
                    <p class="leadership-bio" itemprop="description">
                        Currently building EMR systems at <span style="color: var(--cyber-cyan);">Gantha Studio</span><br>
                        <span style="font-size: 13px; opacity: 0.8;">Working on: EMR RSIA Gladiool</span>
                    </p>
                    <blockquote class="leadership-quote">"Bridging China's hardware innovation with Southeast Asia's digital transformation. Building platforms that scale."</blockquote>
                    <div class="leadership-status">
                        <span class="live-dot" style="width: 8px; height: 8px; background: #10b981; border-radius: 50%; animation: pulse 2s infinite; flex-shrink: 0;"></span>
                        <span style="font-size: 13px; color: var(--steel-silver);">Currently coding at Gantha Studio</span>
                    </div>
                    <div class="leadership-links">
                        <a href="https://instagram.com/bima_yadan27" target="_blank" rel="noopener noreferrer" class="leadership-social" itemprop="sameAs">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                            @bima_yadan27
                        </a>
                        <a href="mailto:ignitron@gmail.com" class="leadership-social" itemprop="email">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                            founder@ignitrondev.com
                        </a>
                    </div>
                </div>

                <!-- Co-Founder -->
                <div class="leadership-card" itemscope itemtype="https://schema.org/Person">
                    <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(203,166,247,0.05) 0%, transparent 70%); pointer-events: none;"></div>
                    <div class="leadership-avatar" style="background: linear-gradient(135deg, #cba6f7, #f38ba8); border-color: rgba(203,166,247,0.3);">RS</div>
                    <h3 class="leadership-name" itemprop="name">Ririn Setiawati</h3>
                    <p class="leadership-role" style="color: #cba6f7;" itemprop="jobTitle">Co-Founder</p>
                    <p class="leadership-bio" itemprop="description">
                        Born <span style="color: #cba6f7;">November 28, 2007</span> · Narmada, Lombok Barat 🇮🇩<br>
                        <span style="font-size: 13px; opacity: 0.8;">The heart and inspiration behind IgnitronDev</span>
                    </p>
                    <blockquote class="leadership-quote" style="border-color: rgba(203,166,247,0.3);">"Behind every great platform is a greater story. Distance is just a number when the vision is shared."</blockquote>
                    <div class="leadership-status">
                        <span style="width: 8px; height: 8px; background: #cba6f7; border-radius: 50%; flex-shrink: 0; box-shadow: 0 0 8px #cba6f7;"></span>
                        <span style="font-size: 13px; color: var(--steel-silver);">Lombok Barat, Indonesia 🌴</span>
                    </div>
                    <div class="leadership-ldr-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                        LDR since December 2021 · 4+ years strong
                    </div>
                </div>

            </div>
        </div>
    </section>
    
    <style>
        .leadership-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 24px;
            max-width: 900px;
            margin: 0 auto;
        }

        .leadership-card {
            background: rgba(15, 39, 68, 0.5);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-lg);
            padding: 40px 32px;
            text-align: center;
            position: relative;
            overflow: hidden;
            transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .leadership-card:hover {
            border-color: rgba(137, 180, 250, 0.3);
            transform: translateY(-4px);
        }

        .leadership-avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            font-weight: 700;
            color: var(--deep-space);
            border: 3px solid;
        }

        .leadership-name {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 6px;
            color: var(--white);
        }

        .leadership-role {
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .leadership-bio {
            color: var(--steel-silver);
            font-size: 14px;
            margin-bottom: 16px;
            line-height: 1.6;
        }

        .leadership-quote {
            font-size: 15px;
            color: var(--steel-silver);
            font-style: italic;
            line-height: 1.7;
            margin: 0 auto 20px;
            padding: 16px;
            border-left: 2px solid rgba(137, 180, 250, 0.3);
            text-align: left;
            background: rgba(0,0,0,0.2);
            border-radius: 0 4px 4px 0;
        }

        .leadership-status {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            background: rgba(0,0,0,0.3);
            border: 1px solid var(--border-color);
            border-radius: 100px;
            margin-bottom: 20px;
        }

        .leadership-links {
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding-top: 20px;
            border-top: 1px solid rgba(255,255,255,0.08);
        }

        .leadership-social {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            color: var(--cyber-cyan);
            font-size: 13px;
            text-decoration: none;
            transition: opacity 0.2s;
        }

        .leadership-social:hover {
            opacity: 0.7;
        }

        .leadership-ldr-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            background: rgba(203, 166, 247, 0.1);
            border: 1px solid rgba(203, 166, 247, 0.3);
            border-radius: 100px;
            font-size: 12px;
            font-weight: 600;
            color: #cba6f7;
            margin-top: 4px;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.2); }
        }

        @media (max-width: 768px) {
            .leadership-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
    `;
}
