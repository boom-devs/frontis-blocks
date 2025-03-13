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
import { SLIDER_TYPE } from "./constants/constants";

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockId,
        sliderItems,
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
        showNavigation,
        showPagination,
    } = attributes;

    const blockProps = useBlockProps({
        className: `guten-slider-container ${blockId}`,
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
        autoplay,
        autoplayDelay,
        pauseOnHover,
        speed,
        allowTouchMove,
        showNavigation,
        showPagination,
    ]);

    const handleAddItem = () => {
        const newItem = {
            id: `item-${sliderItems.length + 1}`,
            subTitle: 'Enter your subtitle here',
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

    const handleButtonClick = (event) => {
        event.preventDefault();
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
                <div className="swiper" ref={swiperRef}>
                    <div className={`swiper-wrapper fb-marquee-carousel-wrapper`}>
                        {sliderItems.map((item, index) => (
                            <div key={item.id} className={`swiper-slide`}>
                                <div className={`${blockId} fb-marquee-carousel-content-wrapper ${item.id}`}>
                                    <div className="fb-marquee-carousel-content-inner-wrapper">
                                        <div className="fb-marquee-carousel-list-item">
                                            <div className="fb-marquee-carousel-list-content">
                                                <div className="fb-marquee-carousel-subtitle-wrapper">
                                                    <RichText
                                                        tagName="span"
                                                        className="fb-marquee-carousel-subtitle"
                                                        value={item.subTitle}
                                                        onChange={(value) => updateItem(index, 'subTitle', value)}
                                                        placeholder="Enter subtitle"
                                                    />
                                                </div>
                                                <div className="fb-marquee-carousel-title-wrapper">
                                                    <RichText
                                                        tagName="h3"
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
                </div>
            </div>
        </>
    );
}