import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const {
        blockId,
        sliderItems,

        infiniteLoop,
        allowTouchMove,
        pauseOnHover,
        autoplay,
        autoplayDelay,
        speed,
        showNavigation,
        showPagination,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-marquee-carousel-container ${blockId}`,
    });

    // Prepare Swiper settings based on slider type
    const swiperSettings = JSON.stringify({
           // Marquee style settings
           spaceBetween: 0,
           centeredSlides: true,
           speed: 2000,
           autoplay: {
             delay: 1,
           },
           loop: true,
           slidesPerView:'auto',
           allowTouchMove: false,
           disableOnInteraction: true,
            navigation: showNavigation ? {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            } : false,

            pagination: showPagination ? {
                el: '.swiper-pagination',
                clickable: true,
            } : false,
    });

    return (
        <div {...blockProps} data-swiper-settings={swiperSettings}>
            <div className="swiper">
                <div className={`swiper-wrapper fb-marquee-carousel-wrapper`}>
                    {sliderItems.map((item) => (
                        <div key={item.id} className={`swiper-slide ${blockId}`}>
                            {item.marqueeCarouselImageUrl && (
                                <div className="fb-marquee-carousel-image-wrapper">
                                    <img src={item.marqueeCarouselImageUrl} alt={item.marqueeCarouselImageAlt} />
                                </div>
                            )}
                            {item.marqueeCarouselTitle && (
                                <div className="fb-marquee-carousel-title-wrapper">
                                    <RichText.Content
                                        className="fb-marquee-carousel-title"
                                        tagName="p"
                                        value={item.marqueeCarouselTitle}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {showPagination && <div className="fb-marquee-carousel swiper-pagination"></div>}
                {showNavigation && 
                    <>
                        <div className="fb-marquee-carousel swiper-button-next" aria-label="Next slide"></div>
                        <div className="fb-marquee-carousel swiper-button-prev" aria-label="Previous slide"></div>
                    </>
                }
            </div>
        </div>
    );
}