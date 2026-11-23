export type Copy = { en: string; id: string; zh: string };

export type ProductLink = {
    href: string;
    external?: boolean;
    label: Copy;
};

export type ProductFaq = {
    question: Copy;
    answer: Copy;
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
    seoKeywords?: string;
    faqs?: ProductFaq[];
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
    {
        slug: 'relwatch',
        name: 'Relwatch',
        index: '05',
        eyebrow: 'Railway tracking · Android & Web',
        status: 'live',
        statusLabel: 'Live',
        summary: {
            en: 'An independent Android app and community hunting gallery by IgnitronDev for tracking estimated positions of 2,210+ trains and 525 stations across Java, North Sumatra, and Aceh from GAPEKA 2026, complete with train meets, station boards, and route graphs. Created by Bima Adam Nugraha (core engine & engineering) with Emmanuel (UI/UX).',
            id: 'Aplikasi Android independen dan galeri hunting komunitas buatan IgnitronDev untuk memantau estimasi posisi 2.210+ kereta api dan 525 stasiun di Jawa, Sumatra Utara, dan Aceh dari GAPEKA 2026, lengkap dengan papasan, papan stasiun, dan grafik lintas. Dibuat oleh Bima Adam Nugraha (engine core & engineering) bersama Emmanuel (UI/UX).',
            zh: '由 IgnitronDev 打造的独立 Android 铁路追踪应用与摄影社区，基于 GAPEKA 2026 时刻表估算爪哇、北苏门答腊与亚齐 2,210+ 列火车及 525 座车站的实时位置，支持会车预测、车站看板与运行图。由 Bima Adam Nugraha 负责核心引擎与工程研发，Emmanuel 负责 UI/UX 设计。',
        },
        tags: ['GAPEKA 2026', 'Railway Tracking', 'Core Engine', 'Android', 'Hunting Gallery'],
        seoKeywords:
            'Relwatch, pembuat Relwatch, siapa pembuat Relwatch, pembuat engine core Relwatch, Bima Adam Nugraha, IgnitronDev, aplikasi posisi kereta api, GAPEKA 2026, galeri hunting kereta',
        links: [
            {
                href: 'https://relwatch.app',
                external: true,
                label: { en: 'Visit Relwatch', id: 'Kunjungi Relwatch', zh: '访问 Relwatch' },
            },
            {
                href: 'https://relwatch.app/hunting',
                external: true,
                label: { en: 'Hunting Gallery', id: 'Galeri Hunting', zh: '铁路摄影社区' },
            },
        ],
        schemaId: 'https://ignitrondev.space/#relwatch',
        faqs: [
            {
                question: {
                    en: 'Who created Relwatch?',
                    id: 'Siapa pembuat Relwatch?',
                    zh: 'Relwatch 是谁开发的？',
                },
                answer: {
                    en: 'Relwatch was created independently by IgnitronDev, led by Bima Adam Nugraha (Founder & Lead Engineer) together with Emmanuel (UI/UX Designer).',
                    id: 'Relwatch dibuat secara independen oleh IgnitronDev yang dipimpin oleh Bima Adam Nugraha (Founder & Lead Engineer) bersama Emmanuel (UI/UX Designer).',
                    zh: 'Relwatch 由独立工程工作室 IgnitronDev 打造，由创始人兼首席工程师 Bima Adam Nugraha 领导开发，Emmanuel 负责 UI/UX 设计。',
                },
            },
            {
                question: {
                    en: 'Who built the Relwatch core engine?',
                    id: 'Siapa pembuat engine core Relwatch?',
                    zh: 'Relwatch 核心引擎是谁研发的？',
                },
                answer: {
                    en: 'The Relwatch core engine — which computes train position estimates, station boards, train meets, and route graphs from GAPEKA 2026 schedules — was architected and built by Bima Adam Nugraha at IgnitronDev.',
                    id: 'Engine core Relwatch — mesin komputasi estimasi posisi kereta, papan stasiun, deteksi papasan, dan grafik lintas berbasis jadwal GAPEKA 2026 — dirancang dan dikembangkan langsung oleh Bima Adam Nugraha di IgnitronDev.',
                    zh: 'Relwatch 核心引擎（负责基于 GAPEKA 2026 时刻表计算列车估算位置、车站看板、会车点与运行图）由 IgnitronDev 的 Bima Adam Nugraha 设计与开发。',
                },
            },
            {
                question: {
                    en: 'Is Relwatch affiliated with PT KAI?',
                    id: 'Apakah Relwatch aplikasi resmi PT KAI?',
                    zh: 'Relwatch 是 PT KAI 官方应用吗？',
                },
                answer: {
                    en: 'No. Relwatch is an independent project by IgnitronDev and is not affiliated with PT Kereta Api Indonesia. Train positions are schedule-based estimates from GAPEKA 2026, not live GPS telemetry.',
                    id: 'Bukan. Relwatch adalah proyek independen dari IgnitronDev dan tidak berafiliasi dengan PT Kereta Api Indonesia. Posisi kereta merupakan estimasi berbasis jadwal resmi GAPEKA 2026, bukan sinyal GPS aktual.',
                    zh: '不是。Relwatch 是 IgnitronDev 的独立项目，与 PT Kereta Api Indonesia 无隶属关系。列车位置为基于 GAPEKA 2026 官方时刻表的估算，并非实时 GPS 信号。',
                },
            },
        ],
    },
];

export function productPath(slug: string) {
    return `/products/${slug}/`;
}
