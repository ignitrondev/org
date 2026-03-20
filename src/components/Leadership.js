export function Leadership() {
    return `
    <section class="section leadership" id="leadership">
        <div class="container container-sm">
            <div class="section-header">
                <span class="section-badge">Leadership</span>
                <h2 class="section-title">Meet the <span class="text-gradient">Founder</span></h2>
            </div>
            <div class="leadership-card" style="background: rgba(15, 39, 68, 0.5); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 48px; text-align: center; position: relative; overflow: hidden;">
                <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 70%); pointer-events: none;"></div>
                <div class="leadership-avatar" style="width: 120px; height: 120px; background: linear-gradient(135deg, var(--cyber-cyan), var(--deep-space-light)); border-radius: 50%; margin: 0 auto 24px; display: flex; align-items: center; justify-content: center; font-size: 40px; font-weight: 700; color: var(--deep-space); border: 4px solid rgba(0,245,255,0.2);">BA</div>
                <h3 style="font-size: 28px; font-weight: 700; margin-bottom: 8px; color: var(--white);">Bima Adam Nugraha</h3>
                <p style="color: var(--cyber-cyan); font-weight: 600; font-size: 16px; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 1px;">Founder & Fullstack Engineer</p>
                <p style="color: var(--steel-silver); font-size: 14px; margin-bottom: 16px; line-height: 1.6;">
                    Currently building EMR systems at <span style="color: var(--cyber-cyan);">Gantha Studio</span><br>
                    <span style="font-size: 13px; opacity: 0.8;">Working on: EMR RSIA Gladiool</span>
                </p>
                <blockquote style="font-size: 18px; color: var(--steel-silver); font-style: italic; line-height: 1.8; max-width: 80%; margin: 0 auto 24px;">"Bridging China's hardware innovation with Southeast Asia's digital transformation. Building platforms that scale."</blockquote>
                
                <!-- Real-time Status -->
                <div style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: rgba(0,245,255,0.1); border-radius: 20px; margin-bottom: 24px;">
                    <span style="width: 8px; height: 8px; background: #10b981; border-radius: 50%; animation: pulse 2s infinite;"></span>
                    <span style="font-size: 13px; color: var(--steel-silver);">Currently coding at Gantha Studio</span>
                </div>

                <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
                    <div style="display: flex; justify-content: center; gap: 24px; margin-bottom: 16px;">
                        <a href="https://instagram.com/bima_yadan27" target="_blank" rel="noopener noreferrer" style="color: var(--cyber-cyan); text-decoration: none; display: flex; align-items: center; gap: 8px; transition: opacity 0.3s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                            <span style="font-size: 14px;">@bima_yadan27</span>
                        </a>
                    </div>
                    <p style="font-size: 13px; color: var(--steel-silver); opacity: 0.7;">Connect: <a href="mailto:founder@ignitrondev.com" style="color: var(--cyber-cyan); text-decoration: none;">founder@ignitrondev.com</a></p>
                </div>
            </div>
        </div>
    </section>
    
    <style>
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
    </style>
    `;
}
