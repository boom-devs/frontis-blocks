import { __ } from '@wordpress/i18n';
import {
    RichText,
    useBlockProps,
    BlockControls,
} from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useState, useEffect, useRef } from '@wordpress/element';
import { arrayMove } from '@dnd-kit/sortable';
import Inspector from './inspector';

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockId,
        sliderItems,

        slideWidth,
        slideWidthUnits,

        autoplay,
        autoplayDirection,
        reverseDirection,
        speed,
        showNavigation,
        showPagination,

    } = attributes;

    const blockProps = useBlockProps({
        className: `fb-marquee-carousel-container ${blockId}`,
    });

    const [sliderItemList, setSliderItemList] = useState(sliderItems);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = sliderItems.findIndex(item => item.id === active.id);
            const newIndex = sliderItems.findIndex(item => item.id === over.id);
            const updatedItems = arrayMove(sliderItems, oldIndex, newIndex);
            setAttributes({ sliderItems: updatedItems });
            setSliderItemList(updatedItems);
        }
    };

    const handleDuplicateItem = (id) => {
        const itemToDuplicate = sliderItems.find(item => item.id === id);
        if (itemToDuplicate) {
            const newItem = { ...itemToDuplicate, id: `item-${sliderItems.length + 1}` };
            setAttributes({ sliderItems: [...sliderItems, newItem] });
            setSliderItemList([...sliderItemList, newItem]);
        }
    };

    const handleAddItem = () => {
        const newItem = {
            id: `item-${sliderItems.length + 1}`,
            marqueeCarouselImageUrl: '',
            marqueeCarouselImageAlt: '',
            marqueeCarouselImageID: '',
            showContentSwitcher: true,
            marqueeCarouselText: 'Carousel Text',
            marqueeCarouseHoverText: '',
        };
        setAttributes({ sliderItems: [...sliderItems, newItem] });
        setSliderItemList([...sliderItemList, newItem]);
    };

    const handleChangeItem = (id, key, value) => {
        const updatedItems = sliderItemList.map(item => {
            if (item.id === id) {
                if (key === 'marqueeCarouselImageID') { 
                    // Get the full image data from WordPress media library
                    const image = wp.media.attachment(value).toJSON();
                    return {
                        ...item,
                        [key]: value,
                        'marqueeCarouselImageUrl': image.url, 
                        'marqueeCarouselImageAlt': image.alt || '',
                    };
                }
                return { ...item, [key]: value };
            }
            return item;
        });
        
        setSliderItemList(updatedItems);
        setAttributes({ sliderItems: updatedItems });
    };

    const handleDeleteItem = (id) => {
        const updatedItems = sliderItemList.filter(item => item.id !== id);
        setAttributes({ sliderItems: updatedItems });
        setSliderItemList(updatedItems);
    };

    //Sync sliderItemList with attributes.sliderItems
    useEffect(() => {
        setAttributes({ sliderItems: sliderItemList });
    }, [sliderItemList, setAttributes]);

    /**
     * Dynamically update the width of the slides
     */
    const updateSlideWidths = () => {
        if (!blockId) return;
    
        const slides = document.querySelectorAll(`.${blockId} .swiper-slide`);
        slides.forEach(slide => {
            slide.style.width = slideWidth.Desktop && slideWidthUnits.Desktop
                ? `${slideWidth.Desktop}${slideWidthUnits.Desktop}`
                : 'fit-content';
        });
    };

    /**
     * Manages tab button settings and switches to block settings on click
     */

    const swiperRef = useRef();
    const prevSwiperOptions = useRef(null);
    
    useEffect(() => {
        if (!swiperRef.current) return;
    
        const swiperOptions = {
           loop: true,
           slidesPerView:'auto',
           spaceBetween: 0,
           centeredSlides: false,
           speed: speed,
           autoplay: {
             delay: 0,
             reverseDirection: reverseDirection,
             disableOnInteraction: true,
           },
           allowTouchMove: false,

            on: {
                init: updateSlideWidths(),
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
        autoplay,
        autoplayDirection,
        reverseDirection,
        speed,
        showNavigation,
        showPagination,
        slideWidth,
        slideWidthUnits,
    ]);

    useEffect(() => {
        updateSlideWidths();
    }, [slideWidth, slideWidthUnits, blockId]);


    const renderSliderToolbarControls = () => {
        return (
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon="plus"
                        label={ __( 'Add New Slide', 'frontis-blocks' ) } 
                        onClick={handleAddItem}
                    />
                    <ToolbarButton
                        icon="admin-page"
                        label={ __( 'Duplicate Slide', 'frontis-blocks' ) } 
                        onClick={() => handleDuplicateItem(sliderItems[sliderItems.length - 1].id)}
                    />
                </ToolbarGroup>
            </BlockControls>
        );
    };

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
                handleDragEnd={handleDragEnd}
                handleAddItem={handleAddItem}
                handleChangeItem={handleChangeItem}
                handleDeleteItem={handleDeleteItem}
                handleDuplicateItem={handleDuplicateItem}
            />

            {renderSliderToolbarControls()}

            <div {...blockProps}>
                <div className="swiper swiper-container" ref={swiperRef}>
                    <div className={`swiper-wrapper fb-marquee-carousel-wrapper`}>
                        {sliderItems.map((item, index) => (
                            <div key={item.id} className={`swiper-slide ${blockId} fb-marquee-carousel-item`}>
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
                                                    <RichText
                                                        className="fb-marquee-carousel-text"
                                                        tagName="div"
                                                        value={item.marqueeCarouselText}
                                                        onChange={(value) => updateItem(index, 'marqueeCarouselText', value)}
                                                    />
                                                )}
                                                {item.marqueeCarouseHoverText && (
                                                    <RichText
                                                        className="fb-marquee-carousel-hover-text"
                                                        tagName="div"
                                                        value={item.marqueeCarouseHoverText}
                                                        onChange={(value) => updateItem(index, 'marqueeCarouseHoverText', value)}
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
        </>
    );
}