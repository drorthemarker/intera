/**
 * INTERA CABINET DOORS - Master JavaScript Module
 * Handles Navigation, Sliders, Swatches, Lightboxes, Modals & ADA Features
 */

document.addEventListener('DOMContentLoaded', function () {
    // 1. Mobile Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            const isOpen = hamburger.classList.toggle('open');
            navMenu.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', isOpen);
        });

        // Close menu when clicking any link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navMenu.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // 2. Hero Image Slider (Homepage)
    const sliderContainer = document.getElementById('mainSlider');
    if (sliderContainer) {
        const slides = sliderContainer.querySelectorAll('img');
        const dots = sliderContainer.querySelectorAll('.slider-dot');
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }

        function nextSlide() {
            let next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }

        window.setSlide = function (index) {
            showSlide(index);
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 3500);
        };

        slideInterval = setInterval(nextSlide, 3500);
    }

    // 3. Desktop Image Magnifier Effect on Products
    if (window.innerWidth > 768) {
        document.querySelectorAll('.zoom-container').forEach(container => {
            const img = container.querySelector('img');
            if (!img) return;

            container.addEventListener('mousemove', (e) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const xPercent = (x / rect.width) * 100;
                const yPercent = (y / rect.height) * 100;

                img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
                img.style.transform = 'scale(1.8)';
            });

            container.addEventListener('mouseleave', () => {
                img.style.transformOrigin = 'center center';
                img.style.transform = 'scale(1)';
            });
        });
    }

    // 4. Quick View Lightbox & Video Modal Functionality
    const modalBackdrop = document.getElementById('universalModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalMediaContainer = document.getElementById('modalMediaContainer');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    let lastActiveElement = null;

    window.openImageModal = function (imageSrc, title, description) {
        if (!modalBackdrop) return;
        lastActiveElement = document.activeElement;

        modalMediaContainer.innerHTML = `<img src="${imageSrc}" alt="${title}" id="modalImage">`;
        if (modalTitle) modalTitle.textContent = title || '';
        if (modalDesc) modalDesc.textContent = description || '';

        modalBackdrop.classList.add('active');
        modalBackdrop.setAttribute('aria-hidden', 'false');
        if (modalCloseBtn) modalCloseBtn.focus();
        document.body.style.overflow = 'hidden';
    };

    window.openVideoModal = function (videoSrc, title, description) {
        if (!modalBackdrop) return;
        lastActiveElement = document.activeElement;

        modalMediaContainer.innerHTML = `
            <video controls autoplay playsinline style="max-width: 100%; max-height: 60vh; width: 100%;">
                <source src="${videoSrc}" type="video/mp4">
                <source src="${videoSrc}" type="video/quicktime">
                Your browser does not support HTML5 video playback.
            </video>
        `;
        if (modalTitle) modalTitle.textContent = title || '';
        if (modalDesc) modalDesc.textContent = description || '';

        modalBackdrop.classList.add('active');
        modalBackdrop.setAttribute('aria-hidden', 'false');
        if (modalCloseBtn) modalCloseBtn.focus();
        document.body.style.overflow = 'hidden';
    };

    window.closeModal = function () {
        if (!modalBackdrop) return;
        modalBackdrop.classList.remove('active');
        modalBackdrop.setAttribute('aria-hidden', 'true');
        modalMediaContainer.innerHTML = '';
        document.body.style.overflow = '';
        if (lastActiveElement) lastActiveElement.focus();
    };

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', window.closeModal);
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                window.closeModal();
            }
        });
    }

    // Keyboard navigation for Modal (ESC to close)
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
            window.closeModal();
        }
    });

    // 5. Palette Swatch Preview Hover / Focus
    window.changeSwatch = function (mainSwatchId, newBgUrl) {
        const target = document.getElementById(mainSwatchId);
        if (target) {
            target.style.backgroundImage = `url('${newBgUrl}')`;
        }
    };

    // 6. Cookie Consent Management
    const cookieBanner = document.getElementById('cookieBanner');
    if (cookieBanner) {
        if (!localStorage.getItem('intera_cookies_consent')) {
            setTimeout(() => {
                cookieBanner.classList.add('show');
            }, 1200);
        }
    }

    window.acceptCookies = function () {
        localStorage.setItem('intera_cookies_consent', 'accepted');
        if (cookieBanner) cookieBanner.classList.remove('show');
    };

    window.declineCookies = function () {
        localStorage.setItem('intera_cookies_consent', 'declined');
        if (cookieBanner) cookieBanner.classList.remove('show');
    };

    // 7. Scroll to Top Visibility
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 400) {
                scrollTopBtn.style.opacity = '1';
                scrollTopBtn.style.pointerEvents = 'auto';
            } else {
                scrollTopBtn.style.opacity = '0';
                scrollTopBtn.style.pointerEvents = 'none';
            }
        });
    }
});
