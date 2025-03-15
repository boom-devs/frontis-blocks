import { __ } from '@wordpress/i18n';
import {
    RichText,
    useBlockProps,
    BlockControls,
} from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import Inspector from './inspector';

export default function Edit({ attributes, setAttributes, clientId }) {
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

    const blockProps = useBlockProps({
        className: `fb-marquee-carousel-container ${blockId}`,
    });

    /**
     * Manages tab button settings and switches to block settings on click
     */

    const swiperRef = useRef();
    const prevSwiperOptions = useRef(null);
    
    useEffect(() => {
        if (!swiperRef.current) return;
    
        const swiperOptions = {

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
           // Make sure slides have proper CSS width applied
           on: {
                init: function() {
                // Apply proper width to slides to ensure multiple are visible
                    const slides = document.querySelectorAll(`.${blockId} .swiper-slide`);
                    slides.forEach(slide => {
                        slide.style.width = 'fit-content'; 
                    });
                },
            },
            navigation: showNavigation ? {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            } : false,

            pagination: showPagination ? {
                el: '.swiper-pagination',
                clickable: true,
            } : false,
        };
    
        // If the Swiper is already initialized and the new options are the same as the previous options, do nothing.
        if (prevSwiperOptions.current && JSON.stringify(prevSwiperOptions.current) === JSON.stringify(swiperOptions)) {
            return;
        }
    
        try {
            if (swiperRef.current.swiper) {
                swiperRef.current.swiper.destroy(true, true);
            }
    
            swiperRef.current.swiper = new Swiper(swiperRef.current, swiperOptions);
            prevSwiperOptions.current = swiperOptions;
    
        } catch (error) {
            console.error('Swiper initialization error:', error);
        }
    }, [
        infiniteLoop,
        allowTouchMove,
        pauseOnHover,
        autoplay,
        autoplayDelay,
        speed,
        showNavigation,
        showPagination,
    ]);

    const updateItem = (index, field, value) => {
        const newItems = sliderItems.map((item, i) => {
            if (i === index) {
                return { ...item, [field]: value };
            }
            return item;
        });
        setAttributes({ sliderItems: newItems });
    };

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />

            <div {...blockProps}>
                <div className="swiper swiper-container" ref={swiperRef}>
                    <div className={`swiper-wrapper fb-marquee-carousel-wrapper`}>
                        {sliderItems.map((item, index) => (
                            <div key={item.id} className={`swiper-slide ${blockId}`}>
                                {item.marqueeCarouselImageUrl && (
                                    <div className="fb-marquee-carousel-image-wrapper">
                                        <img src={item.marqueeCarouselImageUrl} alt={item.marqueeCarouselImageAlt} />
                                    </div>
                                )}
                                {item.marqueeCarouselTitle && (
                                    <div className="fb-marquee-carousel-title-wrapper">
                                        <RichText
                                            className="fb-marquee-carousel-title"
                                            tagName="p"
                                            value={item.marqueeCarouselTitle}
                                            onChange={(value) => updateItem(index, 'marqueeCarouselTitle', value)}
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
        </>
    );
}