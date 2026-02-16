export function DeploymentTicker() {
    return `
    <div class="deployment-ticker">
        <div class="ticker-content" id="deployment-ticker-content">
            <div class="ticker-item"><span>[LOG]</span> Pushed v2.4.1 core update to Jakarta-Node-01...</div>
            <div class="ticker-item"><span>[LOG]</span> Shenzhen-R&D: Hardware integration test passed for FactorySense v3...</div>
            <div class="ticker-item"><span>[LOG]</span> New client instance "GlobalLogistics" deployed on ShipRadar...</div>
            <div class="ticker-item"><span>[LOG]</span> SG-West server uptime verified: 99.999% over last 30 days...</div>
            <div class="ticker-item"><span>[LOG]</span> Encrypted data tunnel JKT-SHZ established (256-bit AES)...</div>
            <div class="ticker-item"><span>[LOG]</span> Automated security patch applied to all partner-facing APIs...</div>
            <!-- Duplicate for seamless loop -->
            <div class="ticker-item"><span>[LOG]</span> Pushed v2.4.1 core update to Jakarta-Node-01...</div>
            <div class="ticker-item"><span>[LOG]</span> Shenzhen-R&D: Hardware integration test passed for FactorySense v3...</div>
            <div class="ticker-item"><span>[LOG]</span> New client instance "GlobalLogistics" deployed on ShipRadar...</div>
            <div class="ticker-item"><span>[LOG]</span> SG-West server uptime verified: 99.999% over last 30 days...</div>
            <div class="ticker-item"><span>[LOG]</span> Encrypted data tunnel JKT-SHZ established (256-bit AES)...</div>
            <div class="ticker-item"><span>[LOG]</span> Automated security patch applied to all partner-facing APIs...</div>
        </div>
    </div>
    `;
}
