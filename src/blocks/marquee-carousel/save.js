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
        blockStyle,
    } = attributes;

    // Prepare Swiper settings based on slider type
    const getSwiperSettings = () => {
        const swiperOptions = {
            // Common settings
            loop: infiniteLoop,
            effect: 'slide',
            autoplay: autoplay ? {
                delay: autoplayDelay,
                pauseOnMouseEnter: pauseOnHover,
                disableOnInteraction: false,
            } : false,
            speed: speed,
            allowTouchMove: allowTouchMove,

            navigation: showNavigation ? {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            } : false,

            pagination: showPagination ? {
                el: '.swiper-pagination',
                clickable: true,
            } : false,
        };

        return JSON.stringify(swiperOptions);
    };

    const blockProps = useBlockProps.save({
        className: `fb-marquee-carousel-container ${blockId}`,
        'data-swiper-settings': getSwiperSettings(),
    });

    return (
        <div {...blockProps}>
            <div className="swiper">
                <div className={`swiper-wrapper fb-marquee-carousel-wrapper`}>
                    {sliderItems.map((item) => (
                        <div key={item.id} className={`swiper-slide`}>
                            <div className={`${blockId} fb-marquee-carousel-content-wrapper ${item.id}`}>
                                <div className="fb-marquee-carousel-content-inner-wrapper">
                                    <div className="fb-marquee-carousel-list-item">
                                        <div className="fb-marquee-carousel-list-content">
                                            {item.subTitle && (
                                                <div className="fb-marquee-carousel-subtitle-wrapper">
                                                    <RichText.Content
                                                        tagName="span"
                                                        className="fb-marquee-carousel-subtitle"
                                                        value={item.subTitle}
                                                    />
                                                </div>
                                            )}
                                            {item.title && (
                                                <div className="fb-marquee-carousel-title-wrapper">
                                                    <RichText.Content
                                                        tagName="h3"
                                                        className="fb-marquee-carousel-title"
                                                        value={item.title}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
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