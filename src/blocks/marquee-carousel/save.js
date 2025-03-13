import { RichText, useBlockProps } from '@wordpress/block-editor';
import { SLIDER_TYPE } from "./constants/constants";

export default function Save({ attributes }) {
    const {
        blockId,
        sliderItems,
        sliderType,
        marqueeSpeed,
        marqueeDirection,
        spaceBetween,
        speed,
        autoplay,
        autoplayDelay,
        infiniteLoop,
        allowTouchMove,
        pauseOnHover,
        blockStyle,
    } = attributes;

    // Prepare Swiper settings based on slider type
    const getSwiperSettings = () => {
        let settings = {
            spaceBetween: spaceBetween,
            loop: infiniteLoop,
            speed: speed
        };

        if (sliderType === SLIDER_TYPE.MARQUEE) {
            settings = {
                ...settings,
                slidesPerView: 'auto',
                speed: marqueeSpeed,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                },
                allowTouchMove: false,
                loop: true
            };

            // Set direction based on marqueeDirection
            if (marqueeDirection === 'right') {
                settings.autoplay.reverseDirection = true;
            }
        } else {
            // Regular slider settings
            settings = {
                ...settings,
                slidesPerView: 1,
                allowTouchMove: allowTouchMove
            };

            if (autoplay) {
                settings.autoplay = {
                    delay: autoplayDelay,
                    disableOnInteraction: true
                };
            }
        }

        return JSON.stringify(settings);
    };

    const blockProps = useBlockProps.save({
        className: `fb-marquee-carousel-container ${blockId} ${blockStyle} slider-type-${sliderType}`,
        'data-slider-type': sliderType,
        'data-swiper-settings': getSwiperSettings(),
        'data-pause-on-hover': pauseOnHover
    });

    return (
        <div {...blockProps}>
            <div className="swiper">
                <div className={`swiper-wrapper fb-marquee-carousel-wrapper ${sliderType === SLIDER_TYPE.MARQUEE ? 'marquee-effect' : ''}`}>
                    {sliderItems.map((item) => (
                        <div key={item.id} className={`swiper-slide ${sliderType === SLIDER_TYPE.MARQUEE ? 'marquee-slide' : ''}`}>
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
            </div>
        </div>
    );
}