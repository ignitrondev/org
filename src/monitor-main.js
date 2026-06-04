import './style.css';
import { Navbar } from './components/Navbar';
import { Monitor } from './components/Monitor';
import { Footer } from './components/Footer';
import { initMonitor } from './services/monitorService';

// 1. Inject UI Components
const app = document.querySelector('#app');
if (app) {
    app.innerHTML = `
        ${Navbar()}
        ${Monitor()}
        ${Footer()}
    `;
}

// 2. Initialize Monitor
initMonitor();