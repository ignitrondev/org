import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';
const DESKTOP = '(min-width: 768px)';
const STAGGER_CONTAINERS = [
    '.engineering-grid',
    '.work-grid',
    '.focus-grid',
    '.catalog-list',
    '.bp-grid',
].join(',');

function initAnimations() {
    const reducedMotion = window.matchMedia(REDUCED_MOTION);
    if (reducedMotion.matches) return;
    const isDesktop = window.matchMedia(DESKTOP).matches;

    const cleanups: Array<() => void> = [];
    const context = gsap.context(() => {
        const hero = document.querySelector('main > section:first-child');
        if (hero) {
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
