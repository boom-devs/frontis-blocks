document.addEventListener('DOMContentLoaded', function () {
    // Select all slider containers
    const sliders = document.querySelectorAll('.fb-slider-container');

    sliders.forEach(sliderContainer => {
        // Get the unique blockId from the data attribute
        const blockId = sliderContainer.dataset.blockId;

        // Define slider options dynamically based on blockId
        const sliderOptions = {
            navigation: {
                nextEl: `.fb-slider-container[data-block-id="${blockId}"] .swiper-button-next`,
                prevEl: `.fb-slider-container[data-block-id="${blockId}"] .swiper-button-prev`,
            },
            pagination: {
                el: `.fb-slider-container[data-block-id="${blockId}"] .swiper-pagination`,
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loop: true,
        };

        // Initialize Swiper for the current slider
        new Swiper(`.fb-slider-container[data-block-id="${blockId}"] .fb-swiper`, sliderOptions);
    });
});