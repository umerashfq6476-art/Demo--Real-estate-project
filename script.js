document.addEventListener('DOMContentLoaded', () => {
    const refExcludeSelectors = ['.hero-section', '.page-hero', '.filter-bar', '.detail-breadcrumb-section', '.detail-gallery'];
    document.querySelectorAll('main > section').forEach((sec) => {
        const excluded = refExcludeSelectors.some((s) => sec.matches(s));
        if (!excluded) sec.classList.add('scroll-reveal');
    });

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-reveal--in');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

        document.querySelectorAll('.scroll-reveal').forEach((el) => revealObserver.observe(el));
    } else {
        document.querySelectorAll('.scroll-reveal').forEach((el) => el.classList.add('scroll-reveal--in'));
    }

    const PROPERTIES = {
        'NF-2024-001': { title: 'Executive Villa with Pool', meta: 'House &middot; F-7, Islamabad', location: 'F-7/2, Islamabad', price: 'PKR 8.5 Crore', priceFull: 'PKR 8,50,00,000', type: 'House', purpose: 'For Sale', beds: 4, baths: 3, areaNum: '500', areaLabel: 'sq yd', areaFull: '500 sq yd', image: 'photo-1600596542815-ffad4c1539a9', badge: 'For Sale', badgeClass: 'badge-sale' },
        'NF-2024-002': { title: 'Modern Apartment Residence', meta: 'Apartment &middot; DHA, Lahore', location: 'DHA, Lahore', price: 'PKR 1.8 Crore', priceFull: 'PKR 1,80,00,000', type: 'Apartment', purpose: 'For Sale', beds: 3, baths: 2, areaNum: '2,200', areaLabel: 'Sqft', areaFull: '2,200 sqft', image: 'photo-1522708323590-d24dbb6b0267', badge: 'For Sale', badgeClass: 'badge-sale' },
        'NF-2024-003': { title: 'Corporate Plaza Tower', meta: 'Plaza &middot; Blue Area, Islamabad', location: 'Blue Area, Islamabad', price: 'PKR 12 Crore', priceFull: 'PKR 12,00,00,000', type: 'Plaza', purpose: 'Commercial', beds: '—', baths: '—', areaNum: '15,000', areaLabel: 'Sqft', areaFull: '15,000 sqft', image: 'photo-1486325212027-8081e485255e', badge: 'Commercial', badgeClass: 'badge-commercial' },
        'NF-2024-004': { title: 'Luxury Penthouse Suite', meta: 'Penthouse &middot; Gulberg, Lahore', location: 'Gulberg, Lahore', price: 'PKR 85,000/month', priceFull: 'PKR 85,000/month', type: 'Penthouse', purpose: 'For Rent', beds: 3, baths: 3, areaNum: '3,500', areaLabel: 'Sqft', areaFull: '3,500 sqft', image: 'photo-1512917774080-9991f1c4c750', badge: 'For Rent', badgeClass: 'badge-rent' },
        'NF-2024-005': { title: 'Residential Corner Plot', meta: 'Plot &middot; Bahria Town, Islamabad', location: 'Bahria Town, Islamabad', price: 'PKR 3.2 Crore', priceFull: 'PKR 3,20,00,000', type: 'Plot', purpose: 'For Sale', beds: '—', baths: '—', areaNum: '10', areaLabel: 'Marla', areaFull: '10 Marla', image: 'photo-1500382017468-9049fed747ef', badge: 'For Sale', badgeClass: 'badge-sale' },
        'NF-2024-006': { title: 'Spacious Family Estate', meta: 'House &middot; G-13, Islamabad', location: 'G-13, Islamabad', price: 'PKR 4.5 Crore', priceFull: 'PKR 4,50,00,000', type: 'House', purpose: 'For Sale', beds: 5, baths: 4, areaNum: '1', areaLabel: 'Kanal', areaFull: '1 Kanal', image: 'photo-1568605114967-8130f3a36994', badge: 'For Sale', badgeClass: 'badge-sale' },
        'NF-2024-007': { title: 'Designer Villa with Pool', meta: 'Villa &middot; DHA Phase 5, Lahore', location: 'DHA Phase 5, Lahore', price: 'PKR 6.5 Crore', priceFull: 'PKR 6,50,00,000', type: 'Villa', purpose: 'For Sale', beds: 5, baths: 5, areaNum: '1', areaLabel: 'Kanal', areaFull: '1 Kanal', image: 'photo-1613490493576-7fde63acd811', badge: 'For Sale', badgeClass: 'badge-sale' },
        'NF-2024-008': { title: 'Smart Studio Apartment', meta: 'Apartment &middot; F-11, Islamabad', location: 'F-11, Islamabad', price: 'PKR 65 Lac', priceFull: 'PKR 65,00,000', type: 'Apartment', purpose: 'For Sale', beds: 1, baths: 1, areaNum: '650', areaLabel: 'Sqft', areaFull: '650 sqft', image: 'photo-1502672260266-1c1ef2d93688', badge: 'For Sale', badgeClass: 'badge-sale' },
        'NF-2024-009': { title: 'Premium Office Floor', meta: 'Office &middot; I-9, Islamabad', location: 'I-9, Islamabad', price: 'PKR 2.8 Crore', priceFull: 'PKR 2,80,00,000', type: 'Office', purpose: 'Commercial', beds: '—', baths: '—', areaNum: '8,000', areaLabel: 'Sqft', areaFull: '8,000 sqft', image: 'photo-1497366216548-37526070297c', badge: 'Commercial', badgeClass: 'badge-commercial' },
        'NF-2024-010': { title: 'Luxury Mansion', meta: 'Villa &middot; DHA Phase 6, Lahore', location: 'DHA Phase 6, Lahore', price: 'PKR 18 Crore', priceFull: 'PKR 18,00,00,000', type: 'Villa', purpose: 'For Sale', beds: 7, baths: 8, areaNum: '2', areaLabel: 'Kanal', areaFull: '2 Kanal', image: 'photo-1564013799919-ab600027ffc6', badge: 'For Sale', badgeClass: 'badge-sale' },
        'NF-2024-011': { title: 'Cozy Furnished Apartment', meta: 'Apartment &middot; Gulberg III, Lahore', location: 'Gulberg III, Lahore', price: 'PKR 1.25 Lac/month', priceFull: 'PKR 1,25,000/month', type: 'Apartment', purpose: 'For Rent', beds: 2, baths: 2, areaNum: '1,100', areaLabel: 'Sqft', areaFull: '1,100 sqft', image: 'photo-1493809842364-78817add7ffb', badge: 'For Rent', badgeClass: 'badge-rent' },
        'NF-2024-012': { title: '5 Marla Residential Plot', meta: 'Plot &middot; Bahria Town, Rawalpindi', location: 'Bahria Town, Rawalpindi', price: 'PKR 95 Lac', priceFull: 'PKR 95,00,000', type: 'Plot', purpose: 'For Sale', beds: '—', baths: '—', areaNum: '5', areaLabel: 'Marla', areaFull: '5 Marla', image: 'photo-1605276374104-dee2a0ed3cd6', badge: 'For Sale', badgeClass: 'badge-sale' },
        'NF-2024-013': { title: 'Stylish Townhouse', meta: 'House &middot; Bahria Town, Lahore', location: 'Bahria Town, Lahore', price: 'PKR 2.5 Crore', priceFull: 'PKR 2,50,00,000', type: 'House', purpose: 'For Sale', beds: 4, baths: 3, areaNum: '10', areaLabel: 'Marla', areaFull: '10 Marla', image: 'photo-1576941089067-2de3c901e126', badge: 'For Sale', badgeClass: 'badge-sale' },
        'NF-2024-014': { title: 'Sea View Apartment', meta: 'Apartment &middot; DHA Phase 8, Karachi', location: 'DHA Phase 8, Karachi', price: 'PKR 4 Crore', priceFull: 'PKR 4,00,00,000', type: 'Apartment', purpose: 'For Sale', beds: 3, baths: 3, areaNum: '2,800', areaLabel: 'Sqft', areaFull: '2,800 sqft', image: 'photo-1545324418-cc1a3fa10c00', badge: 'For Sale', badgeClass: 'badge-sale' },
        'NF-2024-015': { title: 'Hilltop Villa', meta: 'Villa &middot; Abbottabad', location: 'Abbottabad', price: 'PKR 1.8 Crore', priceFull: 'PKR 1,80,00,000', type: 'Villa', purpose: 'For Sale', beds: 3, baths: 2, areaNum: '1', areaLabel: 'Kanal', areaFull: '1 Kanal', image: 'photo-1518780664697-55e3ad937233', badge: 'For Sale', badgeClass: 'badge-sale' },
        'NF-2024-016': { title: 'Farm Estate', meta: 'Villa &middot; Bedian Road, Lahore', location: 'Bedian Road, Lahore', price: 'PKR 6 Crore', priceFull: 'PKR 6,00,00,000', type: 'Villa', purpose: 'For Sale', beds: 5, baths: 5, areaNum: '2', areaLabel: 'Kanal', areaFull: '2 Kanal', image: 'photo-1542621334-a254cf47733d', badge: 'For Sale', badgeClass: 'badge-sale' },
        'NF-2024-017': { title: 'Studio Loft', meta: 'Apartment &middot; Bahria Heights, Islamabad', location: 'Bahria Heights, Islamabad', price: 'PKR 45 Lac', priceFull: 'PKR 45,00,000', type: 'Apartment', purpose: 'For Sale', beds: 1, baths: 1, areaNum: '720', areaLabel: 'Sqft', areaFull: '720 sqft', image: 'photo-1502672023488-70e25813eb80', badge: 'For Sale', badgeClass: 'badge-sale' },
        'NF-2024-018': { title: 'Industrial Warehouse', meta: 'Commercial &middot; I-10, Islamabad', location: 'I-10, Islamabad', price: 'PKR 5.5 Crore', priceFull: 'PKR 5,50,00,000', type: 'Commercial', purpose: 'Commercial', beds: '—', baths: '—', areaNum: '12,000', areaLabel: 'Sqft', areaFull: '12,000 sqft', image: 'photo-1553413077-190dd305871c', badge: 'Commercial', badgeClass: 'badge-commercial' }
    };

    const TITLE_TO_ID = {};
    Object.entries(PROPERTIES).forEach(([id, p]) => { TITLE_TO_ID[p.title] = id; });

    document.querySelectorAll('.property-card').forEach((card, idx) => {
        const titleEl = card.querySelector('.property-title');
        const title = titleEl ? titleEl.textContent.trim() : '';
        const id = TITLE_TO_ID[title] || `NF-2024-${String(idx + 1).padStart(3, '0')}`;

        const imgWrap = card.querySelector('.property-image');
        if (imgWrap && !imgWrap.querySelector('.property-ref-badge')) {
            const badge = document.createElement('span');
            badge.className = 'property-ref-badge';
            badge.textContent = id;
            imgWrap.appendChild(badge);
        }

        const viewLink = card.querySelector('.property-view-btn');
        if (viewLink) {
            viewLink.href = `property-detail.html?id=${id}`;
        }
    });

    if (document.querySelector('.detail-title')) {
        const params = new URLSearchParams(window.location.search);
        const propId = params.get('id') || 'NF-2024-001';
        const p = PROPERTIES[propId] || PROPERTIES['NF-2024-001'];

        document.title = `${p.title} — ${p.location} | NestFinder`;

        const crumb = document.querySelector('.breadcrumb-current');
        if (crumb) crumb.textContent = p.title;

        const mainImg = document.getElementById('main-gallery-image');
        if (mainImg) {
            mainImg.src = `https://images.unsplash.com/${p.image}?auto=format&fit=crop&w=1400&q=80`;
            mainImg.alt = p.title;
        }

        const detailTitle = document.querySelector('.detail-title');
        if (detailTitle) detailTitle.textContent = p.title;

        const locEl = document.querySelector('.detail-location');
        if (locEl) {
            const svg = locEl.querySelector('svg');
            locEl.textContent = ' ' + p.location;
            if (svg) locEl.insertBefore(svg, locEl.firstChild);
        }

        const priceEl = document.querySelector('.detail-price');
        if (priceEl) priceEl.textContent = p.priceFull;

        const statStrongs = document.querySelectorAll('.detail-stat strong');
        const statSpans = document.querySelectorAll('.detail-stat span');
        if (statStrongs.length >= 3) {
            statStrongs[0].textContent = p.beds;
            statStrongs[1].textContent = p.baths;
            statStrongs[2].textContent = p.areaNum;
            if (statSpans[2]) statSpans[2].textContent = p.areaLabel;
        }

        const galleryBadge = document.querySelector('.gallery-badges .badge');
        if (galleryBadge) {
            galleryBadge.textContent = p.badge;
            galleryBadge.className = `badge ${p.badgeClass}`;
        }

        const summaryDds = document.querySelectorAll('.summary-list dd');
        if (summaryDds.length >= 6) {
            summaryDds[0].textContent = p.price;
            summaryDds[1].textContent = `${p.type} · ${p.purpose}`;
            summaryDds[2].textContent = p.areaFull;
            summaryDds[3].textContent = p.purpose;
            summaryDds[5].textContent = propId;
        }
    }


    const header = document.querySelector('.nav-header');
    if (header) {
        const onScroll = () => {
            if (window.scrollY > 8) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    const toggle = document.querySelector('.nav-toggle');
    const panel = document.querySelector('.nav-mobile-panel');
    const overlay = document.querySelector('.nav-mobile-overlay');
    const closeBtn = document.querySelector('.mobile-close');

    const openMenu = () => {
        panel?.classList.add('open');
        overlay?.classList.add('open');
        panel?.setAttribute('aria-hidden', 'false');
        toggle?.setAttribute('aria-expanded', 'true');
        document.body.classList.add('menu-open');
    };

    const closeMenu = () => {
        panel?.classList.remove('open');
        overlay?.classList.remove('open');
        panel?.setAttribute('aria-hidden', 'true');
        toggle?.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    };

    toggle?.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);
    overlay?.addEventListener('click', closeMenu);

    document.querySelectorAll('.nav-mobile-panel a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && panel?.classList.contains('open')) {
            closeMenu();
        }
    });

    const searchTabs = document.querySelectorAll('.search-tab');
    searchTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            searchTabs.forEach((t) => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    const filterTabs = document.querySelectorAll('.filter-tab');
    const propertyCards = document.querySelectorAll('.property-card');

    const applyFilter = (filter) => {
        propertyCards.forEach((card) => {
            const categories = (card.dataset.category || '').split(/\s+/);
            const shouldShow = filter === 'all' || categories.includes(filter);

            if (shouldShow) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.classList.remove('filtered-out');
                });
            } else {
                card.classList.add('filtered-out');
                setTimeout(() => {
                    if (card.classList.contains('filtered-out')) {
                        card.style.display = 'none';
                    }
                }, 350);
            }
        });
    };

    filterTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            filterTabs.forEach((t) => t.classList.remove('active'));
            tab.classList.add('active');
            applyFilter(tab.dataset.filter);
        });
    });

    document.querySelectorAll('.favorite-btn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.classList.toggle('active');
        });
    });

    const animateCounter = (el) => {
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        if (Number.isNaN(target)) return;

        const duration = 1800;
        const startTime = performance.now();

        const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.floor(target * eased);
            el.textContent = value.toLocaleString() + suffix;
            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                el.textContent = target.toLocaleString() + suffix;
            }
        };

        requestAnimationFrame(tick);
    };

    document.querySelectorAll('.stat-number').forEach(animateCounter);

    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        const onScrollTop = () => {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        };
        window.addEventListener('scroll', onScrollTop, { passive: true });
        onScrollTop();

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const listingsContainer = document.getElementById('listings-cards');
    if (listingsContainer) {
        const cards = Array.from(listingsContainer.querySelectorAll('.property-card'));
        const searchInput = document.getElementById('property-search');
        const searchBtn = document.getElementById('search-btn');
        const purposeSelect = document.getElementById('filter-purpose');
        const citySelect = document.getElementById('filter-city');
        const typeSelect = document.getElementById('filter-type');
        const priceSelect = document.getElementById('filter-price');
        const bedroomsSelect = document.getElementById('filter-bedrooms');
        const areaSelect = document.getElementById('filter-area');
        const sortSelect = document.getElementById('filter-sort');
        const agentSelect = document.getElementById('filter-agent');
        const priceSlider = document.getElementById('price-slider');
        const priceSliderValue = document.getElementById('price-slider-value');
        const areaSlider = document.getElementById('area-slider');
        const areaSliderValue = document.getElementById('area-slider-value');
        const resultsNum = document.getElementById('results-num');
        const noResults = document.getElementById('no-results');
        const featureBoxes = document.querySelectorAll('.feature-checkboxes input[type="checkbox"]');
        const resetBtn = document.getElementById('reset-filters');
        const noResultsReset = document.getElementById('no-results-reset');
        const loadMoreBtn = document.getElementById('load-more');
        const pageBtns = document.querySelectorAll('.page-btn');
        const mapToggle = document.querySelector('.map-toggle');

        const priceInRange = (price, range) => {
            if (range === 'all') return true;
            if (range === '0-50') return price < 50;
            if (range === '50-100') return price >= 50 && price < 100;
            if (range === '100-300') return price >= 100 && price < 300;
            if (range === '300-500') return price >= 300 && price < 500;
            if (range === '500+') return price >= 500;
            return true;
        };

        const areaInRange = (area, range) => {
            if (range === 'all') return true;
            if (range === '0-5') return area < 5;
            if (range === '5-10') return area >= 5 && area < 10;
            if (range === '10-20') return area >= 10 && area < 20;
            if (range === '20+') return area >= 20;
            return true;
        };

        const formatPriceSlider = (val) => {
            if (val >= 100) return `PKR ${(val / 100).toFixed(1)} Cr`;
            return `PKR ${val} Lac`;
        };

        const formatAreaSlider = (val) => {
            if (val >= 60) return '60+ Marla';
            return `${val} Marla`;
        };

        const getSelectedFeatures = () =>
            Array.from(featureBoxes).filter((c) => c.checked).map((c) => c.dataset.feature);

        const matchesFilters = (card) => {
            const d = card.dataset;
            const price = parseFloat(d.price);
            const area = parseFloat(d.area);
            const beds = parseInt(d.beds, 10) || 0;

            if (purposeSelect && purposeSelect.value !== 'all' && d.purpose !== purposeSelect.value) return false;
            if (citySelect && citySelect.value !== 'all' && d.city !== citySelect.value) return false;
            if (typeSelect && typeSelect.value !== 'all' && d.type !== typeSelect.value) return false;
            if (priceSelect && !priceInRange(price, priceSelect.value)) return false;

            if (bedroomsSelect && bedroomsSelect.value !== 'all') {
                if (bedroomsSelect.value === '5') {
                    if (beds < 5) return false;
                } else if (beds !== parseInt(bedroomsSelect.value, 10)) {
                    return false;
                }
            }

            if (areaSelect && !areaInRange(area, areaSelect.value)) return false;
            if (agentSelect && agentSelect.value !== 'all' && d.agent !== agentSelect.value) return false;

            const wantedFeatures = getSelectedFeatures();
            if (wantedFeatures.length) {
                const cardFeatures = (d.features || '').split(/\s+/);
                if (!wantedFeatures.every((f) => cardFeatures.includes(f))) return false;
            }

            if (priceSlider) {
                const maxPriceSlider = parseFloat(priceSlider.value);
                if (price > maxPriceSlider) return false;
            }
            if (areaSlider) {
                const maxAreaSlider = parseFloat(areaSlider.value);
                if (area > maxAreaSlider) return false;
            }

            if (searchInput) {
                const q = searchInput.value.trim().toLowerCase();
                if (q && !card.textContent.toLowerCase().includes(q)) return false;
            }

            return true;
        };

        const sortCards = () => {
            if (!sortSelect) return;
            const sortVal = sortSelect.value;
            const sorted = [...cards];
            if (sortVal === 'price-asc') {
                sorted.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
            } else if (sortVal === 'price-desc') {
                sorted.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
            } else if (sortVal === 'popular') {
                sorted.sort((a, b) => {
                    const aFeatured = a.querySelector('.badge-featured') ? 1 : 0;
                    const bFeatured = b.querySelector('.badge-featured') ? 1 : 0;
                    return bFeatured - aFeatured;
                });
            }
            sorted.forEach((c) => listingsContainer.appendChild(c));
        };

        let currentPage = 1;
        const PAGE_SIZE = 6;
        const paginationNav = document.querySelector('.pagination');

        const renderPagination = (totalPages) => {
            if (!paginationNav) return;
            paginationNav.innerHTML = '';
            if (totalPages <= 1) {
                paginationNav.style.display = 'none';
                return;
            }
            paginationNav.style.display = '';

            const mkBtn = (label, opts) => {
                const b = document.createElement('button');
                b.className = 'page-btn';
                if (opts.active) b.classList.add('active');
                if (opts.disabled) b.disabled = true;
                b.type = 'button';
                if (opts.aria) b.setAttribute('aria-label', opts.aria);
                b.innerHTML = label;
                if (opts.onClick && !opts.disabled) b.addEventListener('click', opts.onClick);
                return b;
            };

            paginationNav.appendChild(mkBtn('&lsaquo;', {
                aria: 'Previous page',
                disabled: currentPage === 1,
                onClick: () => goToPage(currentPage - 1)
            }));

            for (let i = 1; i <= totalPages; i++) {
                paginationNav.appendChild(mkBtn(String(i), {
                    active: i === currentPage,
                    onClick: () => goToPage(i)
                }));
            }

            paginationNav.appendChild(mkBtn('&rsaquo;', {
                aria: 'Next page',
                disabled: currentPage === totalPages,
                onClick: () => goToPage(currentPage + 1)
            }));
        };

        const goToPage = (p) => {
            currentPage = p;
            applyFilters();
            listingsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };

        const applyFilters = () => {
            sortCards();
            const matching = [];
            cards.forEach((card) => {
                if (matchesFilters(card)) {
                    matching.push(card);
                } else {
                    card.style.display = 'none';
                }
            });

            const totalPages = Math.max(1, Math.ceil(matching.length / PAGE_SIZE));
            if (currentPage > totalPages) currentPage = totalPages;
            const startIdx = (currentPage - 1) * PAGE_SIZE;
            const endIdx = startIdx + PAGE_SIZE;

            matching.forEach((card, idx) => {
                if (idx >= startIdx && idx < endIdx) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });

            if (resultsNum) resultsNum.textContent = matching.length;
            if (noResults) noResults.style.display = matching.length === 0 ? 'block' : 'none';

            renderPagination(totalPages);

            if (loadMoreBtn) {
                if (currentPage >= totalPages) {
                    loadMoreBtn.disabled = true;
                    loadMoreBtn.textContent = matching.length === 0 ? 'No Properties to Load' : 'All Properties Loaded';
                    loadMoreBtn.style.opacity = '0.55';
                    loadMoreBtn.style.cursor = 'not-allowed';
                } else {
                    loadMoreBtn.disabled = false;
                    loadMoreBtn.textContent = 'Load More Properties';
                    loadMoreBtn.style.opacity = '';
                    loadMoreBtn.style.cursor = '';
                }
            }
        };

        const applyFiltersReset = () => {
            currentPage = 1;
            applyFilters();
        };

        [purposeSelect, citySelect, typeSelect, priceSelect, bedroomsSelect, areaSelect, sortSelect, agentSelect].forEach((el) => {
            if (el) el.addEventListener('change', applyFiltersReset);
        });
        featureBoxes.forEach((c) => c.addEventListener('change', applyFiltersReset));

        if (searchInput) {
            searchInput.addEventListener('input', applyFiltersReset);
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    applyFiltersReset();
                }
            });
        }
        if (searchBtn) searchBtn.addEventListener('click', applyFiltersReset);

        if (priceSlider && priceSliderValue) {
            priceSlider.addEventListener('input', () => {
                priceSliderValue.textContent = formatPriceSlider(parseFloat(priceSlider.value));
                applyFiltersReset();
            });
            priceSliderValue.textContent = formatPriceSlider(parseFloat(priceSlider.value));
        }
        if (areaSlider && areaSliderValue) {
            areaSlider.addEventListener('input', () => {
                areaSliderValue.textContent = formatAreaSlider(parseFloat(areaSlider.value));
                applyFiltersReset();
            });
            areaSliderValue.textContent = formatAreaSlider(parseFloat(areaSlider.value));
        }

        const resetAllFilters = () => {
            if (searchInput) searchInput.value = '';
            [purposeSelect, citySelect, typeSelect, priceSelect, bedroomsSelect, areaSelect, agentSelect].forEach((s) => {
                if (s) s.value = 'all';
            });
            if (sortSelect) sortSelect.value = 'newest';
            if (priceSlider) {
                priceSlider.value = priceSlider.max;
                if (priceSliderValue) priceSliderValue.textContent = formatPriceSlider(parseFloat(priceSlider.value));
            }
            if (areaSlider) {
                areaSlider.value = areaSlider.max;
                if (areaSliderValue) areaSliderValue.textContent = formatAreaSlider(parseFloat(areaSlider.value));
            }
            featureBoxes.forEach((c) => { c.checked = false; });
            applyFiltersReset();
        };

        if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);
        if (noResultsReset) {
            noResultsReset.addEventListener('click', (e) => {
                e.preventDefault();
                resetAllFilters();
            });
        }

        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                if (loadMoreBtn.disabled) return;
                goToPage(currentPage + 1);
            });
        }

        applyFilters();

        if (mapToggle) {
            mapToggle.addEventListener('click', () => {
                mapToggle.classList.toggle('active');
                const isActive = mapToggle.classList.contains('active');
                mapToggle.innerHTML = isActive
                    ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg> Grid View'
                    : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg> Toggle Map View';
            });
        }
    }

    const detailTabs = document.querySelectorAll('.detail-tab');
    const tabPanels = document.querySelectorAll('.tab-panel');
    if (detailTabs.length) {
        detailTabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                const target = tab.dataset.tab;
                detailTabs.forEach((t) => t.classList.remove('active'));
                tabPanels.forEach((p) => p.classList.remove('active'));
                tab.classList.add('active');
                const panel = document.getElementById('tab-' + target);
                if (panel) panel.classList.add('active');
            });
        });
    }

    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxCounter = document.getElementById('lightbox-counter');
        const lightboxClose = document.getElementById('lightbox-close');
        const lightboxPrev = document.getElementById('lightbox-prev');
        const lightboxNext = document.getElementById('lightbox-next');
        const galleryMain = document.getElementById('main-gallery-image');
        const galleryThumbs = document.querySelectorAll('.gallery-thumb');
        const viewAllBtn = document.getElementById('view-all-photos');

        const photos = [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
            'https://images.unsplash.com/photo-1600210492493-0946911123c4?auto=format&fit=crop&w=1600&q=85'
        ];

        let currentIndex = 0;

        const updateLightbox = () => {
            lightboxImage.src = photos[currentIndex];
            lightboxCounter.textContent = `${currentIndex + 1} / ${photos.length}`;
        };

        const openLightbox = (index) => {
            currentIndex = Math.max(0, Math.min(index, photos.length - 1));
            updateLightbox();
            lightbox.classList.add('open');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        };

        const closeLightbox = () => {
            lightbox.classList.remove('open');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        };

        const showPrev = () => {
            currentIndex = (currentIndex - 1 + photos.length) % photos.length;
            updateLightbox();
        };

        const showNext = () => {
            currentIndex = (currentIndex + 1) % photos.length;
            updateLightbox();
        };

        if (galleryMain) galleryMain.addEventListener('click', () => openLightbox(0));
        galleryThumbs.forEach((thumb) => {
            thumb.addEventListener('click', () => {
                const idx = parseInt(thumb.dataset.index, 10) || 0;
                openLightbox(idx);
            });
        });
        if (viewAllBtn) viewAllBtn.addEventListener('click', (e) => { e.stopPropagation(); openLightbox(0); });

        lightboxClose.addEventListener('click', closeLightbox);
        lightboxPrev.addEventListener('click', showPrev);
        lightboxNext.addEventListener('click', showNext);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('open')) return;
            if (e.key === 'Escape') closeLightbox();
            else if (e.key === 'ArrowLeft') showPrev();
            else if (e.key === 'ArrowRight') showNext();
        });
    }

    const inquiryForm = document.getElementById('inquiry-form');
    const inquirySuccess = document.getElementById('inquiry-success');
    if (inquiryForm && inquirySuccess) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            inquiryForm.hidden = true;
            inquirySuccess.hidden = false;
        });
    }

    const contactFormMain = document.getElementById('contact-form-main');
    const contactFormSuccess = document.getElementById('contact-form-success');
    if (contactFormMain && contactFormSuccess) {
        contactFormMain.addEventListener('submit', (e) => {
            e.preventDefault();
            contactFormMain.hidden = true;
            contactFormSuccess.hidden = false;
        });
    }

    const valuationFormMain = document.getElementById('valuation-form-main');
    const valuationSuccess = document.getElementById('valuation-success');
    if (valuationFormMain && valuationSuccess) {
        valuationFormMain.addEventListener('submit', (e) => {
            e.preventDefault();
            valuationFormMain.hidden = true;
            valuationSuccess.hidden = false;
        });
    }

    const shareCopyBtn = document.getElementById('share-copy');
    const shareCopiedMsg = document.getElementById('share-copied');
    if (shareCopyBtn && shareCopiedMsg) {
        shareCopyBtn.addEventListener('click', async () => {
            const url = window.location.href;
            try {
                await navigator.clipboard.writeText(url);
            } catch (_) {
                const ta = document.createElement('textarea');
                ta.value = url;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
            }
            shareCopiedMsg.hidden = false;
            setTimeout(() => { shareCopiedMsg.hidden = true; }, 2500);
        });
    }
});
