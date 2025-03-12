document.addEventListener('DOMContentLoaded', () => {
    const initializeMarqueeCarousels = () => {
        // Select all marquee carousel containers
        const carousels = document.querySelectorAll('.fb-marquee-carousel-container');
        
        carousels.forEach((carouselContainer) => {
            try {
                // Get the container ID and slider type
                const containerId = carouselContainer.classList[1]; // The blockId class
                const sliderType = carouselContainer.dataset.sliderType || 'slider';
                
                // Check if it's a marquee type
                if (sliderType === 'marquee') {
                    const swiperElement = carouselContainer.querySelector('.swiper');
                    
                    // Get settings from data attribute or use defaults
                    let settings = {
                        slidesPerView: 'auto',
                        spaceBetween: 30,
                        loop: true,
                        speed: 5000,
                        autoplay: {
                            delay: 0,
                            disableOnInteraction: false,
                        },
                        allowTouchMove: false,
                    };
                    
                    try {
                        // Try to get custom settings if available
                        const customSettings = carouselContainer.dataset.swiperSettings;
                        if (customSettings) {
                            const parsedSettings = JSON.parse(customSettings);
                            settings = { ...settings, ...parsedSettings };
                            
                            // For marquee, we always want these specific settings
                            if (settings.autoplay) {
                                settings.autoplay.delay = 0;
                            }
                            settings.speed = settings.speed || 5000;
                        }
                    } catch (error) {
                        console.error('Error parsing swiper settings:', error);
                    }
                    
                    // Create duplicate slides for seamless marquee effect when in marquee mode
                    if (sliderType === 'marquee') {
                        const swiperWrapper = swiperElement.querySelector('.swiper-wrapper');
                        const slides = swiperWrapper.querySelectorAll('.swiper-slide');
                        
                        // Clone slides to ensure continuous loop
                        slides.forEach(slide => {
                            const clone = slide.cloneNode(true);
                            swiperWrapper.appendChild(clone);
                        });
                    }
                    
                    // Initialize Swiper with marquee settings
                    new Swiper(swiperElement, settings);
                    
                    // Handle pause on hover if enabled
                    if (carouselContainer.dataset.pauseOnHover === 'true') {
                        const swiper = swiperElement.swiper;
                        
                        swiperElement.addEventListener('mouseenter', () => {
                            swiper.autoplay.stop();
                        });
                        
                        swiperElement.addEventListener('mouseleave', () => {
                            swiper.autoplay.start();
                        });
                    }
                } else {
                    // Regular slider initialization from your existing code
                    const swiperSettings = carouselContainer.dataset.swiperSettings;
                    
                    if (swiperSettings) {
                        const settings = JSON.parse(swiperSettings);
                        new Swiper(carouselContainer.querySelector('.swiper'), settings);
                    }
                }
            } catch (error) {
                console.error('Error initializing carousel:', error);
            }
        });
    };
    
    // Initialize carousels on page load
    initializeMarqueeCarousels();
    
    // Re-initialize when new blocks are added
    if (window.wp && window.wp.hooks) {
        window.wp.hooks.addAction('blocks.blockRendered', 'frontis-blocks', () => {
            initializeMarqueeCarousels();
        });
    }
});