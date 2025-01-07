// File: parent-block/view.js

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', function() {
    initializeSliders();
});

// Also reinitialize when new blocks are added dynamically
if (window.wp && window.wp.domReady) {
    window.wp.domReady(function () {
        initializeSliders();
    });
}

function initializeSliders() {
    const sliders = document.querySelectorAll('.fb-slider-main-wrapper');
    
    sliders.forEach(slider => {
        // Get settings from data attributes
        const config = {
            modules: [Navigation, Pagination, Autoplay],
            navigation: {
                enabled: slider.dataset.arrows === 'true',
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                enabled: slider.dataset.indicators === 'true',
                el: '.swiper-pagination',
                clickable: true,
                bulletActiveClass: 'swiper-pagination-bullet-active',
                bulletClass: 'swiper-pagination-bullet',
            },
            autoplay: slider.dataset.autoplay === 'true' ? {
                delay: parseInt(slider.dataset.autoplaySpeed) || 5000,
                disableOnInteraction: false,
            } : false,
            effect: slider.dataset.transition || 'slide',
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
        };

        // Initialize Swiper
        const swiperInstance = new Swiper(slider.querySelector('.swiper'), config);

        // Store the Swiper instance on the element for future reference
        slider.swiperInstance = swiperInstance;
    });
}

// Export the initialization function for reuse if needed
export { initializeSliders };