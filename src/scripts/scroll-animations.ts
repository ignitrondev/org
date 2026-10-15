import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';
const DESKTOP = '(min-width: 768px)';
const STAGGER_CONTAINERS = [
    '.practice-grid',
    '.work-grid',
    '.engage-grid',
    '.focus-grid',
    '.process',
    '.catalog-list',
    '.bp-grid',
].join(',');

// Homepage hero intro: copy slides in from the right, the 3D logo eases in beside it.
// The `hero-intro` class (set inline in <head>) keeps these hidden until GSAP takes over,
// so there is no flash of the final state before the animation starts.
function animateHomeHero(hero: Element) {
    const copy = Array.from(hero.querySelectorAll('.hero-copy > *'));
    const visual = hero.querySelector('.hero-visual');
    const stats = Array.from(hero.querySelectorAll('.hero-stats > div'));
    const clearProps = 'opacity,visibility,transform';

    gsap.set(copy, { autoAlpha: 0, x: 64 });
    if (visual) gsap.set(visual, { autoAlpha: 0, scale: 0.96 });
    gsap.set(stats, { autoAlpha: 0, y: 16 });
    document.documentElement.classList.remove('hero-intro');

    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    timeline.to(copy, { autoAlpha: 1, x: 0, duration: 1.1, stagger: 0.12, clearProps });
    if (visual) timeline.to(visual, { autoAlpha: 1, scale: 1, duration: 1.4, clearProps }, 0.3);
    timeline.to(stats, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.08, clearProps }, 0.7);
}

function initAnimations() {
    const reducedMotion = window.matchMedia(REDUCED_MOTION);
    if (reducedMotion.matches) return;
    const isDesktop = window.matchMedia(DESKTOP).matches;

    const cleanups: Array<() => void> = [];
    const context = gsap.context(() => {
        const hero = document.querySelector('main > section:first-child');
        if (hero?.classList.contains('hero')) {
            animateHomeHero(hero);
        } else if (hero) {
            const heroContent = hero.querySelector('.container') ?? hero;
            gsap.from(Array.from(heroContent.children), {
                autoAlpha: 0,
                y: 24,
                duration: 0.65,
                ease: 'power3.out',
                stagger: 0.08,
                clearProps: 'opacity,transform,visibility',
            });
        }

        document.querySelectorAll<HTMLElement>('main > section:not(:first-child)').forEach((section) => {
            gsap.from(section, {
                autoAlpha: 0,
                y: isDesktop ? 36 : 18,
                duration: 0.6,
                ease: 'power2.out',
                clearProps: 'opacity,transform,visibility',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    once: true,
                },
            });
        });

        gsap.matchMedia().add(DESKTOP, () => {
            document.querySelectorAll<HTMLElement>(STAGGER_CONTAINERS).forEach((container) => {
                const items = Array.from(container.children);
                if (items.length < 2) return;

                gsap.from(items, {
                    autoAlpha: 0,
                    y: 30,
                    duration: 0.5,
                    ease: 'power2.out',
                    stagger: 0.07,
                    clearProps: 'opacity,transform,visibility',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top 80%',
                        once: true,
                    },
                });
            });
        });
    });
    cleanups.push(() => context.revert());

    if (isDesktop) {
        const lenis = new Lenis({
            duration: 1.05,
            smoothWheel: true,
            touchMultiplier: 1,
        });
        const updateScrollTrigger = () => ScrollTrigger.update();
        const raf = (time: number) => lenis.raf(time * 1000);

        lenis.on('scroll', updateScrollTrigger);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);
        cleanups.push(() => {
            gsap.ticker.remove(raf);
            lenis.off('scroll', updateScrollTrigger);
            lenis.destroy();
        });
    }

    const disableAnimations = (event: MediaQueryListEvent) => {
        if (!event.matches) return;
        cleanups.splice(0).reverse().forEach((cleanup) => cleanup());
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
    reducedMotion.addEventListener('change', disableAnimations, { once: true });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations, { once: true });
} else {
    initAnimations();
}
