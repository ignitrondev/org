
import './style.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnersStrip } from './components/PartnersStrip';
import { DeploymentTicker } from './components/DeploymentTicker';
import { TechStack } from './components/TechStack';
import { Roadmap } from './components/Roadmap';
import { Platforms } from './components/Platforms';
import { WhyWhitelabel } from './components/WhyWhitelabel';
import { Calculator } from './components/Calculator';
import { Partners } from './components/Partners';
import { Heritage } from './components/Heritage';
import { Leadership } from './components/Leadership';
import { Footer } from './components/Footer';

// 1. Inject Components
const app = document.querySelector('#app');
if (app) {
    app.innerHTML = `
        ${Navbar()}
        <main class="main-content">
            ${Hero()}
            ${PartnersStrip()}
            ${DeploymentTicker()}
            ${TechStack()}
            ${Roadmap()}
            ${Platforms()}
            ${WhyWhitelabel()}
            ${Calculator()}
            ${Partners()}
            ${Heritage()}
            ${Leadership()}
        </main>
        ${Footer()}
    `;
}

/**
 * IgnitronDev - Logic
 * Migrated from js/main.js
 */

function initNavigation() {
    const nav = document.getElementById('nav');
    const mobileToggle = document.getElementById('mobileToggle');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });

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

function initCalculator() {
    const clientsSlider = document.getElementById('clientsSlider');
    const dealSlider = document.getElementById('dealSlider');
    const clientsValue = document.getElementById('clientsValue');
    const dealValue = document.getElementById('dealValue');
    const monthlyRevenue = document.getElementById('monthlyRevenue');
    const annualRevenue = document.getElementById('annualRevenue');

    const REVENUE_SHARE = 0.5;

    function calculateRevenue() {
        if (!clientsSlider || !dealSlider) return;
        const clients = parseInt(clientsSlider.value);
        const dealSize = parseInt(dealSlider.value);
        const monthly = clients * dealSize * REVENUE_SHARE;
        const annual = monthly * 12;

        if (clientsValue) clientsValue.textContent = clients;
        if (dealValue) dealValue.textContent = dealSize.toLocaleString();
        if (monthlyRevenue) monthlyRevenue.textContent = '$' + monthly.toLocaleString();
        if (annualRevenue) annualRevenue.textContent = '$' + annual.toLocaleString();
    }

    if (clientsSlider && dealSlider) {
        clientsSlider.addEventListener('input', calculateRevenue);
        dealSlider.addEventListener('input', calculateRevenue);
        calculateRevenue();
    }
}

function initHeroGlobe() {
    const globeContainer = document.getElementById('globeViz');
    if (!globeContainer || typeof Globe === 'undefined') return;

    const colors = { blue: '#89b4fa', sapphire: '#74c7ec' };
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
        .arcsData([
            { startLat: 22.5431, startLng: 114.0579, endLat: -6.2088, endLng: 106.8456, color: [colors.sapphire, colors.blue] },
            { startLat: 22.5431, startLng: 114.0579, endLat: -6.2088, endLng: 106.8456, color: [colors.sapphire, colors.blue], altitude: 0.4 }
        ])
        .arcColor('color')
        .arcDashLength(0.5)
        .arcDashGap(2)
        .arcDashAnimateTime(2000)
        .arcStroke(1.2)
        .arcCurve(0.3)
        .ringsData([
            { lat: -6.2088, lng: 106.8456, color: colors.blue },
            { lat: 22.5431, lng: 114.0579, color: colors.sapphire }
        ])
        .ringColor(d => d.color)
        .ringMaxRadius(6)
        .ringPropagationSpeed(2)
        .ringRepeatPeriod(1200);

    GlobePlot.pointOfView({ lat: 15, lng: 110, altitude: 2.2 }, 0);
    const controls = GlobePlot.controls();
    if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.4;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.update();
    }
}

function updateNodeClocks() {
    const jktTime = new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit' });
    const szTime = new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const jktEl = document.getElementById('jkt-time');
    const szEl = document.getElementById('sz-time');
    if (jktEl) jktEl.innerText = jktTime;
    if (szEl) szEl.innerText = szTime;
}

async function fetchGitHubPulse() {
    const ghEl = document.getElementById('gh-activity');
    if (!ghEl) return;
    try {
        const response = await fetch('https://api.github.com/orgs/ignitrondev/repos?sort=updated&per_page=1');
        const [latestRepo] = await response.json();
        if (latestRepo) {
            const date = new Date(latestRepo.updated_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
            ghEl.innerText = `Active in "${latestRepo.name}" (Last push: ${date})`;
        }
    } catch (e) {
        ghEl.innerText = 'Operational (v2.4.0 Stable)';
    }
}

// 2. Initialize Everything
initNavigation();
initCalculator();
setInterval(updateNodeClocks, 1000);
updateNodeClocks();
fetchGitHubPulse();

// Optional: Initialize Globe after a short delay to ensure DOM is ready
setTimeout(initHeroGlobe, 500);

window.scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
};

console.log('IgnitronDev Modular Platform Initialized');
