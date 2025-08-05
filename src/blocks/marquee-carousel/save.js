import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const {
        blockId,
        sliderItems,

        slideWidth,
        slideWidthUnits,
        slideHeight,
        slideHeightUnits,

        autoplay,
        autoplayDirection,
        reverseDirection,
        speed,
        showNavigation,
        showPagination,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-marquee-carousel-container ${blockId}`,
    });

    // Prepare Swiper settings based on slider type
    const swiperSettings = JSON.stringify({
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: false,
        speed: speed,
        // autoplay: false,
        autoplay: {
            delay: 1,
            reverseDirection: reverseDirection,
            disableOnInteraction: false,
        },
        allowTouchMove: false,
    
        navigation: showNavigation ? {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        } : false,
    
        pagination: showPagination ? {
            el: '.swiper-pagination',
            clickable: true,
        } : false,
    });

    const frontendSlideWidth = slideWidth.Desktop && slideWidthUnits.Desktop ? `${slideWidth.Desktop}${slideWidthUnits.Desktop}` : '';
    const frontendSlideHeight = slideHeight.Desktop && slideHeightUnits.Desktop ? `${slideHeight.Desktop}${slideHeightUnits.Desktop}` : '';

    return (
        <div {...blockProps} data-swiper-settings={swiperSettings}>
            <div className="swiper swiper-container">
                <div className={`swiper-wrapper fb-marquee-carousel-wrapper`}>
                    {sliderItems.map((item) => (
                        <div key={item.id} className={`swiper-slide ${blockId} fb-marquee-carousel-item`}   style={{
                            ...(frontendSlideWidth ? { width: frontendSlideWidth } : {}),
                            ...(frontendSlideHeight ? { height: frontendSlideHeight } : {}),
                          }}>
                            {item.marqueeCarouselImageUrl && (
                                <div className="fb-marquee-carousel-image-wrapper">
                                    <img src={item.marqueeCarouselImageUrl} alt={item.marqueeCarouselImageAlt} />
                                </div>
                            )}
                                {item.showContentSwitcher && (
                                    <>
                                        <div className="fb-marquee-carousel-content-wrapper">
                                            <div className="fb-marquee-carousel-content">
                                                {item.marqueeCarouselText && (
                                                    <RichText.Content
                                                        className="fb-marquee-carousel-text"
                                                        tagName="div"
                                                        value={item.marqueeCarouselText}
                                                    />
                                                )}
                                                {item.marqueeCarouseHoverText && (
                                                    <RichText.Content
                                                        className="fb-marquee-carousel-hover-text"
                                                        tagName="div"
                                                        value={item.marqueeCarouseHoverText}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </>
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