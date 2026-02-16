export function Calculator() {
    return `
    <section class="section calculator" id="calculator">
        <div class="container container-sm">
            <div class="section-header">
                <span class="section-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" x2="16" y1="6" y2="6" />
                    </svg>
                    Revenue Calculator
                </span>
                <h2 class="section-title">Calculate Your <span class="text-gradient">Earnings</span></h2>
            </div>

            <div class="calculator-card">
                <div class="calculator-input">
                    <div class="calculator-label">
                        <span>Clients per Month</span>
                        <span class="calculator-value" id="clientsValue">3</span>
                    </div>
                    <input type="range" class="calculator-slider" id="clientsSlider" min="1" max="20" value="3">
                    <div class="calculator-slider-labels"><span>1</span><span>20</span></div>
                </div>

                <div class="calculator-input">
                    <div class="calculator-label">
                        <span>Average Deal Size</span>
                        <span class="calculator-value">$<span id="dealValue">10,000</span></span>
                    </div>
                    <input type="range" class="calculator-slider" id="dealSlider" min="5000" max="50000" value="10000" step="1000">
                    <div class="calculator-slider-labels"><span>$5,000</span><span>$50,000</span></div>
                </div>

                <div class="calculator-results">
                    <div class="calculator-result">
                        <div class="calculator-result-label">Monthly Revenue</div>
                        <div class="calculator-result-value" id="monthlyRevenue">$15,000</div>
                    </div>
                    <div class="calculator-result calculator-result-highlight">
                        <div class="calculator-result-label">Annual Potential</div>
                        <div class="calculator-result-value" id="annualRevenue">$180,000</div>
                    </div>
                </div>

                <p class="calculator-disclaimer">* Based on 50% revenue share as White-Label Partner</p>
            </div>
        </div>
    </section>
    `;
}
