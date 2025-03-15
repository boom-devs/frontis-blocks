document.addEventListener('DOMContentLoaded', function() {
    // Check if Swiper is available
    if (typeof Swiper === 'undefined') {
        console.error('Swiper library is not loaded');
        return;
    }

    // Initialize Swiper for all slider layouts
    const initializeSliders = () => {
        // Find all slider layouts
        const sliderLayouts = document.querySelectorAll('.layout-slider');
        
        sliderLayouts.forEach(sliderLayout => {
            // Find the post template with slider class
            const postTemplate = sliderLayout.querySelector('.wp-block-post-template.fb-slider-layout');
            if (!postTemplate) return;
            
            // Skip if already initialized
            if (postTemplate.classList.contains('swiper-initialized')) return;
            
            // Find the swiper container
            const swiperContainer = postTemplate.closest('.swiper');
            if (!swiperContainer) return;
            
            // Initialize Swiper
            new Swiper(swiperContainer, {
                slidesPerView: 3,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }
            });
            
            console.log('Swiper initialized for slider layout');
        });
    };
    
    // Run initialization
    initializeSliders();
});