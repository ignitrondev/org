const blogPosts = [
    {
        id: 1,
        category: 'story',
        categoryLabel: '💛 Our Story',
        date: 'May 10, 2026',
        dateISO: '2026-05-10',
        title: '4 Years of LDR: The Story Behind IgnitronDev',
        excerpt: 'IgnitronDev was not just built from code — it was built from distance, patience, and love. This is the story of Bima Adam Nugraha and Ririn Setiawati, co-founders and partners in life, who have been in a long-distance relationship since December 2021.',
        color: '#f38ba8',
        featured: true,
    },
    {
        id: 2,
        category: 'company',
        categoryLabel: 'Company',
        date: 'April 20, 2026',
        dateISO: '2026-04-20',
        title: 'Introducing Our Co-Founder: Ririn Setiawati',
        excerpt: 'Meet Ririn Setiawati, Co-Founder of IgnitronDev. Born on November 28, 2007 in Narmada, Lombok Barat — she is the heart and inspiration behind everything we build at IgnitronDev.',
        color: '#cba6f7',
        featured: false,
    },
    {
        id: 3,
        category: 'technology',
        categoryLabel: 'Technology',
        date: 'October 15, 2024',
        dateISO: '2024-10-15',
        title: 'Top Technology Trends Shaping 2025',
        excerpt: 'Explore the emerging technologies that will revolutionize industries in the coming year and how IgnitronDev is preparing for these changes.',
        color: '#89b4fa',
        featured: false,
    },
    {
        id: 4,
        category: 'innovation',
        categoryLabel: 'AI & Innovation',
        date: 'September 28, 2024',
        dateISO: '2024-09-28',
        title: 'How AI is Transforming Our Solutions',
        excerpt: 'Discover how artificial intelligence is being integrated into our products to deliver more efficient and intelligent solutions for our clients.',
        color: '#cba6f7',
        featured: false,
    },
    {
        id: 5,
        category: 'technology',
        categoryLabel: 'Security',
        date: 'August 5, 2024',
        dateISO: '2024-08-05',
        title: 'Cybersecurity in the Age of IoT',
        excerpt: 'Understanding the security challenges in an increasingly connected world and how we\'re addressing them in our solutions.',
        color: '#f38ba8',
        featured: false,
    },
    {
        id: 6,
        category: 'innovation',
        categoryLabel: 'Data Analytics',
        date: 'July 12, 2024',
        dateISO: '2024-07-12',
        title: 'Transforming Data into Actionable Insights',
        excerpt: 'Learn how our analytics platform helps businesses make data-driven decisions that improve efficiency and profitability.',
        color: '#fab387',
        featured: false,
    },
    {
        id: 7,
        category: 'company',
        categoryLabel: 'Team',
        date: 'June 18, 2024',
        dateISO: '2024-06-18',
        title: 'Building a Culture of Innovation',
        excerpt: 'How we foster creativity and innovation within our team to drive breakthrough solutions for our clients.',
        color: '#74c7ec',
        featured: false,
    },
];

function BlogCard(post) {
    if (post.featured) {
        return `
        <article class="blog-card blog-card-featured" data-category="${post.category}" itemscope itemtype="http://schema.org/BlogPosting">
            <div class="blog-card-accent" style="background: linear-gradient(90deg, ${post.color}, #cba6f7);"></div>
            <div class="blog-card-body">
                <div class="blog-card-meta">
                    <span class="blog-card-category" style="color: ${post.color}; border-color: ${post.color}40; background: ${post.color}15;">
                        ${post.categoryLabel}
                    </span>
                    <span class="blog-featured-badge">✦ Featured</span>
                    <time class="blog-card-date" itemprop="datePublished" datetime="${post.dateISO}">${post.date}</time>
                </div>
                <h2 class="blog-card-title blog-card-title-featured" itemprop="headline">${post.title}</h2>
                <p class="blog-card-excerpt" itemprop="description">${post.excerpt}</p>

                <!-- LDR Story Content -->
                <div class="blog-ldr-story" itemprop="articleBody">
                    <div class="blog-ldr-timeline">
                        <div class="blog-ldr-event">
                            <div class="blog-ldr-dot" style="background: #89b4fa;"></div>
                            <div>
                                <strong>December 2021</strong>
                                <p>Bima Adam Nugraha and Ririn Setiawati started their relationship. Two people from different worlds — a developer building platforms, and a girl from Narmada, Lombok Barat who would become his biggest inspiration.</p>
                            </div>
                        </div>
                        <div class="blog-ldr-event">
                            <div class="blog-ldr-dot" style="background: #cba6f7;"></div>
                            <div>
                                <strong>2022 – 2023</strong>
                                <p>Distance never stopped them. While Bima was deep in code — building fullstack systems, learning IoT, and dreaming of a platform factory — Ririn was the constant reminder of why it all mattered. Every late-night session had a purpose.</p>
                            </div>
                        </div>
                        <div class="blog-ldr-event">
                            <div class="blog-ldr-dot" style="background: #fab387;"></div>
                            <div>
                                <strong>2024</strong>
                                <p>IgnitronDev was born. Bima officially named Ririn as Co-Founder — not just as a title, but as recognition that behind every line of code, every platform shipped, and every partner onboarded, her presence and support made it possible.</p>
                            </div>
                        </div>
                        <div class="blog-ldr-event">
                            <div class="blog-ldr-dot" style="background: #a6e3a1;"></div>
                            <div>
                                <strong>2026 — Still Going Strong</strong>
                                <p>4+ years of LDR. Still together. Still building. Ririn Setiawati, born November 28, 2007 in Narmada, Lombok Barat, is the Co-Founder of IgnitronDev and the person who proves that the best partnerships are built on trust, patience, and love — not just proximity.</p>
                            </div>
                        </div>
                    </div>

                    <div class="blog-ldr-quote">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="color: #f38ba8; opacity: 0.6; flex-shrink: 0;">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                        <p>"Distance is just a test to see how far love can travel. Ours has been traveling since December 2021 — and it's still going."</p>
                        <span>— Bima Adam Nugraha, Founder</span>
                    </div>
                </div>

                <div class="blog-card-footer">
                    <div class="blog-founders-tag">
                        <span class="blog-founder-chip" style="border-color: rgba(137,180,250,0.3); color: #89b4fa;">✦ Bima Adam Nugraha · Founder</span>
                        <span class="blog-founder-chip" style="border-color: rgba(203,166,247,0.3); color: #cba6f7;">♡ Ririn Setiawati · Co-Founder</span>
                    </div>
                </div>
            </div>
        </article>
        `;
    }

    return `
    <article class="blog-card" data-category="${post.category}" itemscope itemtype="http://schema.org/BlogPosting">
        <div class="blog-card-accent" style="background: ${post.color};"></div>
        <div class="blog-card-body">
            <div class="blog-card-meta">
                <span class="blog-card-category" style="color: ${post.color}; border-color: ${post.color}20; background: ${post.color}10;">
                    ${post.categoryLabel}
                </span>
                <time class="blog-card-date" itemprop="datePublished" datetime="${post.dateISO}">${post.date}</time>
            </div>
            <h2 class="blog-card-title" itemprop="headline">${post.title}</h2>
            <p class="blog-card-excerpt" itemprop="description">${post.excerpt}</p>
            <div class="blog-card-footer">
                <span class="blog-read-more">
                    Read more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </span>
            </div>
        </div>
    </article>
    `;
}

export function Blog() {
    return `
    <section class="blog-hero-section">
        <div class="blog-hero-bg">
            <div class="blog-hero-grid"></div>
        </div>
        <div class="container">
            <div class="blog-hero-content">
                <div class="section-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                    </svg>
                    Latest Updates
                </div>
                <h1 class="blog-hero-title">IgnitronDev <span class="text-gradient">Blog</span></h1>
                <p class="blog-hero-subtitle">Insights, news, and stories about technology, innovation, and our journey building the platform factory.</p>
            </div>
        </div>
    </section>

    <section class="blog-main section">
        <div class="container">
            <!-- Filters -->
            <div class="blog-filters">
                <button class="blog-filter-btn active" data-filter="all">All Posts</button>
                <button class="blog-filter-btn" data-filter="story">💛 Our Story</button>
                <button class="blog-filter-btn" data-filter="technology">Technology</button>
                <button class="blog-filter-btn" data-filter="innovation">Innovation</button>
                <button class="blog-filter-btn" data-filter="company">Company</button>
            </div>

            <!-- Posts Grid -->
            <div class="blog-grid" id="blogGrid">
                ${blogPosts.map(BlogCard).join('')}
            </div>

            <!-- Empty state -->
            <div class="blog-empty" id="blogEmpty" style="display: none;">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <p>No posts found in this category.</p>
            </div>
        </div>
    </section>

    <!-- Newsletter -->
    <section class="blog-newsletter section">
        <div class="container container-sm">
            <div class="blog-newsletter-card">
                <div class="blog-newsletter-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                    </svg>
                </div>
                <h2 class="blog-newsletter-title">Stay in the Loop</h2>
                <p class="blog-newsletter-subtitle">Get the latest posts and platform updates delivered to your inbox.</p>
                <form class="blog-newsletter-form" id="newsletterForm">
                    <input type="email" class="blog-newsletter-input" placeholder="your@email.com" required>
                    <button type="submit" class="btn btn-primary">Subscribe</button>
                </form>
            </div>
        </div>
    </section>
    `;
}

export function initBlog() {
    // Filter logic
    document.querySelectorAll('.blog-filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.blog-filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            const posts = document.querySelectorAll('.blog-card');
            let visible = 0;

            posts.forEach(post => {
                const match = filter === 'all' || post.getAttribute('data-category') === filter;
                post.style.display = match ? 'flex' : 'none';
                if (match) visible++;
            });

            const empty = document.getElementById('blogEmpty');
            if (empty) empty.style.display = visible === 0 ? 'flex' : 'none';
        });
    });

    // Newsletter
    const form = document.getElementById('newsletterForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const btn = this.querySelector('button');
            btn.textContent = 'Subscribed!';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = 'Subscribe';
                btn.disabled = false;
                this.reset();
            }, 3000);
        });
    }
}
