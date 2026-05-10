import './style.css';
import { Navbar } from './components/Navbar';
import { Blog, initBlog } from './components/Blog';
import { Footer } from './components/Footer';

// 1. Inject Components
const app = document.querySelector('#app');
if (app) {
    app.innerHTML = `
        ${Navbar()}
        <main class="main-content">
            ${Blog()}
        </main>
        ${Footer()}
    `;
}

// 2. Init Blog Logic
initBlog();

// 3. Init Navigation (scroll behavior)
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

initNavigation();

console.log('IgnitronDev Blog Initialized');
