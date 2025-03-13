import { __ } from '@wordpress/i18n';
import {
    RichText,
    useBlockProps,
    BlockControls,
} from '@wordpress/block-editor';
import {
    Toolbar,
    ToolbarGroup,
    ToolbarButton
} from '@wordpress/components';
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

            // Common settings
            // slidesPerView: 4,
            // spaceBetween: 30,
            // loop: infiniteLoop,
            // effect: 'slide',
            // autoplay: autoplay ? {
            //     delay: autoplayDelay,
            //     pauseOnMouseEnter: pauseOnHover,
            //     disableOnInteraction: false,
            // } : false,
            // speed: speed,
            // allowTouchMove: allowTouchMove,


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
                    slide.style.width = '300px'; // Set a fixed width or use percentage
                });
                },
            },
            // navigation: showNavigation ? {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // } : false,

            // pagination: showPagination ? {
            //     el: '.swiper-pagination',
            //     clickable: true,
            // } : false,
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

    const handleAddItem = () => {
        const newItem = {
            id: `item-${sliderItems.length + 1}`,
            title: `Slider Item ${sliderItems.length + 1}`,
        };
        setAttributes({ sliderItems: [...sliderItems, newItem] });

        // Ensure Swiper updates with new slides
        setTimeout(() => {
            if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.update(); 
                swiperRef.current.swiper.pagination.update();
                swiperRef.current.swiper.navigation.update();
            }
        }, 100);
    };

    const renderSliderToolbarControls = () => {
        return (
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon="plus"
                        label={ __( 'Add New Slide', 'gutenslider-blocks' ) }
                        onClick={handleAddItem}
                    />
                </ToolbarGroup>
            </BlockControls>
        );
    };

    // Add this function inside the Edit component
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
                onAddItem={handleAddItem}
            />

            {renderSliderToolbarControls()}

            <div {...blockProps}>
                <div className="swiper swiper-container" ref={swiperRef}>
                    <div className={`swiper-wrapper fb-marquee-carousel-wrapper`}>
                        {sliderItems.map((item, index) => (
                            <div key={item.id} className={`swiper-slide`}>
                                <div className={`${blockId} fb-marquee-carousel-content-wrapper ${item.id}`}>
                                    <div className="fb-marquee-carousel-content-inner-wrapper">
                                        <div className="fb-marquee-carousel-list-item">
                                            <div className="fb-marquee-carousel-list-content">
                                                <div className="fb-marquee-carousel-title-wrapper">
                                                    <RichText
                                                        tagName="p"
                                                        className="fb-marquee-carousel-title"
                                                        value={item.title}
                                                        onChange={(value) => updateItem(index, 'title', value)}
                                                        placeholder="Enter title"
                                                    />
                                                </div>
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
        </>
    );
}