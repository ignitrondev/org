export function Leadership() {
    return `
    <section class="section leadership" id="leadership">
        <div class="container container-sm">
            <div class="section-header">
                <span class="section-badge">Leadership</span>
                <h2 class="section-title">Meet the <span class="text-gradient">CEO</span></h2>
            </div>
            <div class="leadership-card" style="background: rgba(15, 39, 68, 0.5); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 48px; text-align: center; position: relative; overflow: hidden;">
                <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 70%); pointer-events: none;"></div>
                <div class="leadership-avatar" style="width: 120px; height: 120px; background: linear-gradient(135deg, var(--cyber-cyan), var(--deep-space-light)); border-radius: 50%; margin: 0 auto 24px; display: flex; align-items: center; justify-content: center; font-size: 40px; font-weight: 700; color: var(--deep-space); border: 4px solid rgba(0,245,255,0.2);">BA</div>
                <h3 style="font-size: 28px; font-weight: 700; margin-bottom: 8px; color: var(--white);">Bima Adam Nugraha</h3>
                <p style="color: var(--cyber-cyan); font-weight: 600; font-size: 16px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Chief Executive Officer</p>
                <p style="color: var(--steel-silver); font-size: 14px; margin-bottom: 32px;">(Bima Adam)</p>
                <blockquote style="font-size: 18px; color: var(--steel-silver); font-style: italic; line-height: 1.8; max-width: 80%; margin: 0 auto;">"Our mission is to bridge the technological gap between China's advanced hardware ecosystem and Southeast Asia's digital potential."</blockquote>
                <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); display: inline-flex; gap: 16px; opacity: 0.7;">
                    <span style="font-size: 14px; color: var(--steel-silver);">Request intro: <a href="mailto:ceo@ignitrondev.com" style="color: var(--cyber-cyan);">ceo@ignitrondev.com</a></span>
                </div>
            </div>
        </div>
    </section>
    `;
}
