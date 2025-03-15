document.addEventListener('DOMContentLoaded', () => {
    const initializeSliders = () => {
        const sliders = document.querySelectorAll('.fb-marquee-carousel-container');
        
        sliders.forEach((sliderContainer) => {
            try {
                const swiperSettings = sliderContainer.dataset.swiperSettings;
                
                if (swiperSettings) {
                    const settings = JSON.parse(swiperSettings);
                    
                    settings.on = {
                        init: function () {
                            const slides = sliderContainer.querySelectorAll('.swiper-slide');
                            slides.forEach(slide => {
                                slide.style.width = '150px';
                            });
                        }
                    };

                    new Swiper(sliderContainer.querySelector('.swiper'), settings);
                }
            } catch (error) {
                console.error('Error initializing slider:', error);
            }
        });
    };

    initializeSliders();

    if (window.wp && window.wp.hooks) {
        window.wp.hooks.addAction('blocks.blockRendered', 'frontis-marquee-carousel', () => {
            initializeSliders();
        });
    }
});
