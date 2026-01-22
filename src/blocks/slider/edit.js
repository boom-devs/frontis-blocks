import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    BlockControls,
    useInnerBlocksProps,
    store as blockEditorStore
} from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { withSelect, withDispatch, useDispatch, useSelect } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
import { useState, useMemo, useEffect, useRef } from "@wordpress/element";
import { compose } from '@wordpress/compose';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import Inspector from './inspector';
import { Swiper } from 'swiper/react';
import { useDeviceType } from "@Config/displayType";
import {
    Navigation,
    Pagination,
    Autoplay,
    Manipulation,
    Mousewheel,
    EffectFade,
    EffectCube,
    EffectCoverflow,
    EffectFlip,
    EffectCreative,
    EffectCards,
    Keyboard
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-creative';

const ALLOWED_BLOCKS = ['frontis-blocks/slider-item'];

const Edit = (props) => {
    const {
        attributes,
        setAttributes,
        clientId,
        block,
        blockParents,
        insertBlock,
    } = props;

    const {
        blockId,
        slideContent,
        slideItem,
        transitionSpeed,
        displayArrows,
        displayDots,
        autoplay,
        autoplaySpeed,
        loop,
        allowTouchMove,
        pauseOnHover,
        stopOnLastSlide,
        reverseDirection,
        enableMouseWheel,
        enableKeyboardNavigation,
        paginationType,
        sliderType,
        slideEffect,
        carouselEffect,
        carouselPerColumn,
        carouselPerColumnGap,

        sliderArrowPositionType,
        sliderArrowPosition,

        sliderArrowsIconSwitcher,

        sliderArrowsIconLeftAlign,
        sliderArrowsIconLeft,
        sliderArrowsIconLeftImageUrl,
        sliderArrowsIconLeftImageAlt,

        sliderArrowsIconRightAlign,
        sliderArrowsIconRight,
        sliderArrowsIconRightImageUrl,
        sliderArrowsIconRightImageAlt,

        sliderGlobalWraperClass,

        sliderDesktopSwitcher,
        sliderTabletSwitcher,
        sliderMobileSwitcher,
    } = attributes;

    useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockId: "fb-slider-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

    const deviceType = useDeviceType();

    const swiperRef = useRef();
    const sliderNavPrevRef = useRef();
    const sliderNavNextRef = useRef();

    const [swiperInstance, setSwiperInstance] = useState(null);
    const { selectBlock } = useDispatch(blockEditorStore);

    // A key to force re-mounting of <Swiper> when critical settings change
    const [swiperKey, setSwiperKey] = useState(0);

    const { isListViewOpen, hasChildren } = useSelect((select) => {
        const getStore = select('core/editor') || select('core/edit-widgets');

        return {
            isListViewOpen: getStore?.isListViewOpened ? getStore.isListViewOpened() : false,
            hasChildren: 0 !== select('core/block-editor')?.getBlocks(clientId).length,
        };
    }, [clientId]);

    const hasChildrenClass = hasChildren ? 'fb-slider-has-children' : '';
    const listViewClass = isListViewOpen ? 'fb-list-view-enabled' : '';
    const blockProps = useBlockProps({
        className: `${blockId} ${hasChildrenClass} ${listViewClass} fb-slider-container fb-slider-editor-wrap ${displayArrows ? sliderArrowPositionType : ''} ${sliderArrowPosition}  fb-editor-preview-mode-${deviceType.toLowerCase()} ${sliderGlobalWraperClass} ${sliderDesktopSwitcher && 'fb-desktop-responsive'} ${sliderTabletSwitcher && 'fb-tablet-responsive'} ${sliderMobileSwitcher && 'fb-mobile-responsive'}`,
    });



    const getSliderTemplate = useMemo(() => [
        ['frontis-blocks/slider-item'],
        ['frontis-blocks/slider-item'],
        ['frontis-blocks/slider-item'],
        ['frontis-blocks/slider-item'],
    ], [slideItem, slideContent]);

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: `swiper-wrapper fb-swiper-wrapper`,
            slot: 'container-start',
        },
        {
            allowedBlocks: ALLOWED_BLOCKS,
            template: getSliderTemplate,
            renderAppender: false,
            orientation: 'horizontal',
        }
    );

    // First, move settings into a useMemo to avoid unnecessary recalculations
    const settings = useMemo(() => ({
        autoplay: autoplay ? {
            delay: autoplaySpeed,
            disableOnInteraction: false,
            stopOnLastSlide: stopOnLastSlide,
            reverseDirection: reverseDirection,
        } : false,
        speed: transitionSpeed,
        loop: loop,
        effect: sliderType === 'carousel' ? carouselEffect : slideEffect,

        ...(sliderType === 'carousel' && {
            breakpoints: {
                0: {
                    slidesPerView: carouselPerColumn?.Mobile || 1,
                    spaceBetween: carouselPerColumnGap?.Mobile || 10,
                },
                768: {
                    slidesPerView: carouselPerColumn?.Tablet || 2,
                    spaceBetween: carouselPerColumnGap?.Tablet || 15,
                },
                1025: {
                    slidesPerView: carouselPerColumn?.Desktop || 3,
                    spaceBetween: carouselPerColumnGap?.Desktop || 20,
                },
            },
        }),
        pagination: displayDots
            ? {
                type: paginationType,
                clickable: true,
            }
            : false,

        ...(slideEffect === 'creative' && {
            creativeEffect: {
                prev: { shadow: true, translate: [0, 0, -400] },
                next: { translate: ['100%', 0, 0] },
            },
        }),

        allowTouchMove: allowTouchMove,
        mousewheel: enableMouseWheel,

        keyboard: enableKeyboardNavigation ? {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: false,
        } : false,

        onBeforeInit(swiperInst) {
            swiperRef.current = swiperInst;
            setSwiperInstance(swiperInst);
        },
    }), [
        deviceType,
        autoplay,
        autoplaySpeed,
        stopOnLastSlide,
        reverseDirection,
        transitionSpeed,
        loop,
        carouselEffect,
        slideEffect,
        allowTouchMove,
        enableMouseWheel,
        enableKeyboardNavigation,
        sliderType,
        carouselPerColumn,
        carouselPerColumnGap,
        sliderArrowPositionType,
        sliderArrowPosition,
        paginationType,
        displayDots,
    ]);

    /* Dynamic Swiper Key */
    useEffect(() => {
        setSwiperKey(prevKey => prevKey + 1);
    }, [
        sliderType,
        carouselEffect,
        slideEffect,
        carouselPerColumn?.Desktop,
        carouselPerColumn?.Tablet,
        carouselPerColumn?.Mobile,
        carouselPerColumnGap?.Desktop,
        carouselPerColumnGap?.Tablet,
        carouselPerColumnGap?.Mobile,
        transitionSpeed,
        loop,
        autoplay,
        autoplaySpeed,
        stopOnLastSlide,
        reverseDirection,
        allowTouchMove,
        enableMouseWheel,
        enableKeyboardNavigation,
        paginationType,
        displayDots,
        displayArrows,
        sliderArrowsIconSwitcher,
        sliderArrowPositionType,
        sliderArrowPosition,
        sliderArrowsIconLeft,
        sliderArrowsIconRight,
    ]);

    // Add useEffect to update Swiper when settings change
    useEffect(() => {
        if (swiperInstance) {

            // Update carousel settings
            if (sliderType === 'carousel') {
                swiperInstance.params.slidesPerView = deviceType === 'Desktop' ? carouselPerColumn.Desktop : deviceType === 'Tablet' ? carouselPerColumn.Tablet : carouselPerColumn.Mobile;
                swiperInstance.params.spaceBetween = deviceType === 'Desktop' ? carouselPerColumnGap.Desktop : deviceType === 'Tablet' ? carouselPerColumnGap.Tablet : carouselPerColumnGap.Mobile;
            }

            swiperInstance.params.speed = transitionSpeed;
            swiperInstance.params.loop = loop;
            swiperInstance.params.allowTouchMove = allowTouchMove;

            // Handle autoplay settings
            if (autoplay) {
                swiperInstance.params.autoplay = {
                    delay: autoplaySpeed,
                    disableOnInteraction: false,
                    stopOnLastSlide: stopOnLastSlide,
                    reverseDirection: reverseDirection,
                };

                // Only start autoplay if we're not on the last slide when stopOnLastSlide is true
                if (!stopOnLastSlide || (stopOnLastSlide && swiperInstance.activeIndex !== swiperInstance.slides.length - 1)) {
                    swiperInstance.autoplay.start();
                }
            } else {
                swiperInstance.autoplay.stop();
            }

            // Keyboard toggle
            if (enableKeyboardNavigation && swiperInstance.keyboard) {
                swiperInstance.params.keyboard = {
                    enabled: true,
                    onlyInViewport: true,
                    pageUpDown: false,
                };
                swiperInstance.keyboard.enable();
            } else if (swiperInstance.keyboard) {
                swiperInstance.keyboard.disable();
            }

            // Update the Swiper instance with new parameters
            swiperInstance.update();

            // If loop setting changed, need to re-initialize
            if (swiperInstance.params.loop !== loop) {
                swiperInstance.loopDestroy();
                if (loop) {
                    swiperInstance.loopCreate();
                }
            }

            // Reset event listeners
            swiperInstance.off('reachEnd');
            if (stopOnLastSlide && !loop && autoplay) {
                swiperInstance.on('reachEnd', () => {
                    swiperInstance.autoplay.stop();
                });
            }
        }
    }, [
        deviceType,
        swiperInstance,
        autoplay,
        autoplaySpeed,
        stopOnLastSlide,
        reverseDirection,
        transitionSpeed,
        loop,
        allowTouchMove,
        sliderType,
        carouselPerColumn,
        carouselPerColumnGap,
        enableKeyboardNavigation,
    ]);

    // Add this new useEffect for pause on hover
    useEffect(() => {
        if (swiperInstance && autoplay && pauseOnHover) {
            const swiperEl = swiperInstance.el;

            const handleMouseEnter = () => {
                if (swiperInstance.autoplay.running) {
                    swiperInstance.autoplay.stop();
                }
            };

            const handleMouseLeave = () => {
                if (autoplay && !stopOnLastSlide) {
                    swiperInstance.autoplay.start();
                }
            };

            swiperEl.addEventListener('mouseenter', handleMouseEnter);
            swiperEl.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                swiperEl.removeEventListener('mouseenter', handleMouseEnter);
                swiperEl.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [swiperInstance, autoplay, pauseOnHover, stopOnLastSlide]);

    /** 
     * Unlimited Updates (useEffect dependency): edit.js e ekta useEffect silo jar dependency silo [props]. React e props object protibar render e notun hoy (change na holeo react mone kore change hoyese). Tai useEffect ta bar bar run hos silo.
     * Responsive mode e gele Gutenberg props update kore, r tokhoni oi loop ta infinite hoye jeto.
     * Unnecessary Attribute Change: onSwiper event er moddhe setAttributes({ currentSlideIndex: ... }) call kora hos silo. currentSlideIndex attribute list eo nai. Ota bar bar call howar karone block ta bar bar re-render hos silo.
    */
    // useEffect(() => {
    //     if (swiperInstance) {
    //         swiperInstance.update();
    //     }
    // }, [props]);

    /* Custom Icon */
    useEffect(() => {
        if (!swiperInstance || !displayArrows) return;

        const prevEl = sliderNavPrevRef.current;
        const nextEl = sliderNavNextRef.current;

        if (prevEl && nextEl && swiperInstance.navigation) {
            swiperInstance.params.navigation.prevEl = prevEl;
            swiperInstance.params.navigation.nextEl = nextEl;

            setTimeout(() => {
                // Check again in case swiperInstance.navigation was reloaded in the meantime
                if (swiperInstance.navigation) {
                    swiperInstance.navigation.destroy();
                    swiperInstance.navigation.init();
                    swiperInstance.navigation.update();
                }
            }, 100);
        }
    }, [
        swiperInstance,
        displayArrows,
        sliderArrowsIconSwitcher,
        sliderArrowPositionType,
        sliderArrowPosition,
        sliderArrowsIconLeft,
        sliderArrowsIconRight,
        sliderArrowsIconLeftAlign,
        sliderArrowsIconRightAlign,
        sliderArrowsIconLeftImageUrl,
        sliderArrowsIconRightImageUrl
    ]);

    useEffect(() => {
        if (swiperInstance && swiperInstance.slides) {
            const slidesCount = swiperInstance.slides.length;

            // Slide to the slide index more than number of slides, this will reset slider UI.
            swiperInstance.slideTo(slidesCount + 1, transitionSpeed, false);

            setTimeout(() => {
                // Reset Slider to first slide to avoid UI break.
                swiperInstance.slideTo(0, 0, false);
            }, 100);

            const sliderBlocks = ['frontis-blocks/slider', 'frontis-blocks/slider-item'];
            let hasSliderParent = false;

            for (let index = 0; index < blockParents.length; index++) {
                if (sliderBlocks.includes(blockParents[index].name)) {
                    hasSliderParent = true;
                    break;
                }
            }

            if (hasSliderParent) {
                selectBlock(block.clientId);
            }
        }
    }, [isListViewOpen]);

    const getBlockControls = () => {
        return (
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon="insert"
                        label={__('Add Slide', 'ultimate-addons-for-gutenberg')}
                        onClick={() => {
                            insertBlock(createBlock('frontis-blocks/slider-item'), block.innerBlocks.length, block.clientId);

                            setAttributes({ slideItem: attributes.slideItem + 1 });
                            swiperInstance.activeIndex = attributes.slideItem + 1;
                        }}
                    />
                </ToolbarGroup>
            </BlockControls>
        );
    };

    return (
        <>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            {getBlockControls()}

            <div {...blockProps}>
                <Swiper
                    key={swiperKey}
                    ref={swiperRef}
                    {...settings}
                    modules={[
                        Navigation,
                        Pagination,
                        Autoplay,
                        Manipulation,
                        Mousewheel,
                        Keyboard,
                        EffectFade,
                        EffectCube,
                        EffectCoverflow,
                        EffectFlip,
                        EffectCreative,
                        EffectCards
                    ]}
                    navigation={
                        displayArrows
                            ? {
                                nextEl: '#block-' + clientId + ' .swiper-button-next',
                                prevEl: '#block-' + clientId + ' .swiper-button-prev',
                            }
                            : false
                    }
                    onSwiper={(swiper) => {
                        setSwiperInstance(swiper);
                        swiper.on('slideChange', () => {
                            // setAttributes({ currentSlideIndex: swiper.activeIndex }); 
                        });

                        // Add reach end handler for stopOnLastSlide
                        swiper.on('reachEnd', () => {
                            if (stopOnLastSlide && !loop && autoplay) {
                                swiper.autoplay.stop();
                            }
                        });
                    }}
                    onReachEnd={() => {
                        if (stopOnLastSlide && !loop && autoplay) {
                            swiperInstance?.autoplay.stop();
                        }
                    }}
                >
                    <div {...innerBlocksProps} />

                    {displayArrows && !sliderArrowsIconSwitcher && sliderArrowPositionType === 'inside' && (
                        <>
                            <div className={`fb-slider-default-icon-wrapper ${sliderArrowPositionType} ${sliderArrowPosition}`}>
                                <div className="swiper-button-prev" ref={sliderNavPrevRef} aria-label="Previous slide" title='Previous slide'></div>
                                <div className="swiper-button-next" ref={sliderNavNextRef} aria-label="Next slide" title='Next slide'></div>
                            </div>
                        </>
                    )}

                    {sliderArrowsIconSwitcher && sliderArrowPositionType === 'inside' && (sliderArrowsIconLeftAlign === 'icon' || sliderArrowsIconRightAlign === 'icon') && (
                        <div className={`fb-slider-custom-icon-wrapper ${sliderArrowPositionType} ${sliderArrowPosition}`}>
                            <div className="swiper-button-prev" ref={sliderNavPrevRef} aria-label="Previous slide" title='Previous slide'>{renderSVG(sliderArrowsIconLeft)}</div>
                            <div className="swiper-button-next" ref={sliderNavNextRef} aria-label="Next slide" title='Next slide'>{renderSVG(sliderArrowsIconRight)}</div>
                        </div>
                    )}

                    {sliderArrowsIconSwitcher && sliderArrowPositionType === 'inside' && (sliderArrowsIconLeftAlign === 'image' || sliderArrowsIconRightAlign === 'image') && (sliderArrowsIconLeftImageUrl || sliderArrowsIconRightImageUrl) && (
                        <div className={`fb-slider-custom-icon-wrapper ${sliderArrowPositionType} ${sliderArrowPosition}`}>
                            <div className="swiper-button-prev" ref={sliderNavPrevRef} aria-label="Previous slide" title='Previous slide'>
                                <img src={sliderArrowsIconLeftImageUrl} alt={sliderArrowsIconLeftImageAlt} />
                            </div>
                            <div className="swiper-button-next" ref={sliderNavNextRef} aria-label="Next slide" title='Next slide'>
                                <img src={sliderArrowsIconRightImageUrl} alt={sliderArrowsIconRightImageAlt} />
                            </div>
                        </div>
                    )}
                </Swiper>

                {displayArrows && !sliderArrowsIconSwitcher && sliderArrowPositionType === 'outside' && (
                    <>
                        <div className={`fb-slider-default-icon-wrapper ${sliderArrowPositionType} ${sliderArrowPosition}`}>
                            <div className="swiper-button-prev" ref={sliderNavPrevRef} aria-label="Previous slide" title='Previous slide'></div>
                            <div className="swiper-button-next" ref={sliderNavNextRef} aria-label="Next slide" title='Next slide'></div>
                        </div>
                    </>
                )}

                {sliderArrowsIconSwitcher && sliderArrowPositionType === 'outside' && (sliderArrowsIconLeftAlign === 'icon' || sliderArrowsIconRightAlign === 'icon') && (
                    <div className={`fb-slider-custom-icon-wrapper ${sliderArrowPositionType} ${sliderArrowPosition}`}>
                        <div className="swiper-button-prev" ref={sliderNavPrevRef} aria-label="Previous slide" title='Previous slide'>{renderSVG(sliderArrowsIconLeft)}</div>
                        <div className="swiper-button-next" ref={sliderNavNextRef} aria-label="Next slide" title='Next slide'>{renderSVG(sliderArrowsIconRight)}</div>
                    </div>
                )}

                {sliderArrowsIconSwitcher && sliderArrowPositionType === 'outside' && (sliderArrowsIconLeftAlign === 'image' || sliderArrowsIconRightAlign === 'image') && (sliderArrowsIconLeftImageUrl || sliderArrowsIconRightImageUrl) && (
                    <div className={`fb-slider-custom-icon-wrapper ${sliderArrowPositionType} ${sliderArrowPosition}`}>
                        <div className="swiper-button-prev" ref={sliderNavPrevRef} aria-label="Previous slide" title='Previous slide'>
                            <img src={sliderArrowsIconLeftImageUrl} alt={sliderArrowsIconLeftImageAlt} />
                        </div>
                        <div className="swiper-button-next" ref={sliderNavNextRef} aria-label="Next slide" title='Next slide'>
                            <img src={sliderArrowsIconRightImageUrl} alt={sliderArrowsIconRightImageAlt} />
                        </div>
                    </div>
                )}

            </div>
        </>
    );
};

export default compose(
    withSelect((select, props) => {
        const { getSelectedBlock, getBlockParents } = select('core/block-editor');
        const selectedBlock = getSelectedBlock();
        const parentBlockIds = getBlockParents(selectedBlock?.clientId);
        const blockParents = select('core/block-editor').getBlocksByClientId(parentBlockIds);

        return {
            block: select('core/block-editor').getBlock(props.clientId),
            blockParents,
        };
    }),
    withDispatch((dispatch) => {
        const { insertBlock } = dispatch('core/block-editor');
        return {
            insertBlock,
        };
    })
)(Edit);