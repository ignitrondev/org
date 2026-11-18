export type Copy = { en: string; id: string; zh: string };

export type ProductLink = {
    href: string;
    external?: boolean;
    label: Copy;
};

export type Product = {
    slug: string;
    name: string;
    index: string;
    eyebrow: string;
    status: 'live' | 'alpha' | 'stable';
    statusLabel: string;
    summary: Copy;
    tags: string[];
    links: ProductLink[];
    schemaId: string;
};

export const products: Product[] = [
    {
        slug: 'shipradar',
        name: 'ShipRadar',
        index: '01',
        eyebrow: 'Maritime software',
        status: 'live',
        statusLabel: 'Live',
        summary: {
            en: 'A maritime vessel-tracking platform for monitoring ships, routes, and fleet activity through a focused operational interface.',
            id: 'Platform pelacakan kapal untuk memantau kapal, rute, dan aktivitas armada melalui interface operasional yang terfokus.',
            zh: '面向船舶、航线与船队活动监控的海事追踪平台，提供专注的运营界面。',
        },
        tags: ['Vessel tracking', 'AIS data', 'Fleet operations'],
        links: [
            {
                href: 'https://radarship.ignitrondev.space',
                external: true,
                label: { en: 'Visit ShipRadar', id: 'Kunjungi ShipRadar', zh: '访问 ShipRadar' },
            },
        ],
        schemaId: 'https://ignitrondev.space/#shipradar',
    },
    {
        slug: 'clinical-ui',
        name: 'Ignitron Clinical UI',
        index: '02',
        eyebrow: 'Clinical software infrastructure',
        status: 'alpha',
        statusLabel: 'Alpha',
        summary: {
            en: 'Reusable React components for difficult clinical workflows, built around explicit data contracts and clear integration boundaries.',
            id: 'Komponen React reusable untuk workflow klinis yang sulit, dibangun di atas kontrak data eksplisit dan batas integrasi yang jelas.',
            zh: '面向复杂临床工作流的可复用 React 组件，采用显式数据契约与清晰集成边界。',
        },
        tags: ['React', 'TypeScript', 'Clinical data', 'Apache-2.0'],
        links: [
            {
                href: 'https://ignitron-medic-ui.pages.dev/',
                external: true,
                label: { en: 'Read the docs', id: 'Buka dokumentasi', zh: '阅读文档' },
            },
            {
                href: 'https://www.npmjs.com/package/@ignitrondev/odontogram',
                external: true,
                label: { en: 'npm package', id: 'Paket npm', zh: 'npm 包' },
            },
            {
                href: '/foundry/',
                label: { en: 'Component catalog', id: 'Katalog komponen', zh: '组件目录' },
            },
        ],
        schemaId: 'https://ignitrondev.space/#clinical-ui',
    },
    {
        slug: 'ign-volcano',
        name: 'IGN Volcano',
        index: '03',
        eyebrow: 'Volcano observatory',
        status: 'live',
        statusLabel: 'Live',
        summary: {
            en: 'A focused observatory for tracking volcanic activity across Indonesia, with an interactive map, current alert levels, and weather at each volcano location.',
            id: 'Observatorium terfokus untuk memantau aktivitas gunung api di Indonesia, dengan peta interaktif, level status terkini, dan cuaca di tiap lokasi gunung.',
            zh: '一个专注于追踪印度尼西亚火山活动的观测平台，提供交互地图、当前警戒等级与各火山位置天气。',
        },
        tags: ['Volcano monitoring', 'Interactive map', 'Activity status', 'Indonesia'],
        links: [
            {
                href: 'https://magma.ignitrondev.space',
                external: true,
                label: { en: 'Open IGN Volcano', id: 'Buka IGN Volcano', zh: '打开 IGN Volcano' },
            },
        ],
        schemaId: 'https://ignitrondev.space/#volcano',
    },
    {
        slug: 'focusflow',
        name: 'FocusFlow',
        index: '04',
        eyebrow: 'Pomodoro timer · Android',
        status: 'stable',
        statusLabel: 'Stable',
        summary: {
            en: 'A minimalist Pomodoro timer that keeps time with the app closed or the phone restarted. Weekly statistics, 13 achievement badges, and a story card to share your week. No account, no ads, no internet permission.',
            id: 'Timer Pomodoro minimalis yang tetap akurat walau aplikasi ditutup atau HP di-restart. Statistik mingguan, 13 badge achievement, dan kartu story untuk membagikan minggumu. Tanpa akun, tanpa iklan, tanpa izin internet.',
            zh: '一款极简番茄钟，即使关闭应用或重启手机也能准确计时。提供每周统计、13 枚成就徽章，以及可分享一周专注成果的快拍卡片。无需账户，无广告，不申请联网权限。',
        },
        tags: ['Kotlin Multiplatform', 'Compose', 'Offline-first', 'Apache-2.0'],
        links: [
            {
                href: 'https://github.com/ignitrondev/FocusFlow/releases/latest',
                external: true,
                label: { en: 'Download for Android', id: 'Unduh untuk Android', zh: '下载 Android 版' },
            },
            {
                href: 'https://github.com/ignitrondev/FocusFlow',
                external: true,
                label: { en: 'GitHub', id: 'GitHub', zh: 'GitHub' },
            },
        ],
        schemaId: 'https://ignitrondev.space/#focusflow',
    },
];

export function productPath(slug: string) {
    return `/products/${slug}/`;
}
