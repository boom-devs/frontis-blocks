import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    BlockControls,
    useInnerBlocksProps,
    InnerBlocks,
    store as blockEditorStore
} from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { withSelect, withDispatch, useDispatch, useSelect } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
import { useState, useMemo, useEffect, useRef } from "@wordpress/element";
import { compose, createHigherOrderComponent } from '@wordpress/compose';
import Inspector from './inspector';
import { Swiper, SwiperSlide } from 'swiper/react';
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
    EffectCards
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
        paginationType,
        sliderType,
        slideEffect,
        carouselEffect,
        carouselPerColumn,
        carouselPerColumnGap,

        sliderGlobalWraperClass,

        sliderDesktopSwitcher,
		sliderTabletSwitcher,
		sliderMobileSwitcher,
    } = attributes;


    const deviceType = useDeviceType();

    const swiperRef = useRef();
	const sliderPaginationRef = useRef();
	const sliderNavPrevRef = useRef();
	const sliderNavNextRef = useRef();

    const [swiperInstance, setSwiperInstance] = useState(null);
	const { selectBlock } = useDispatch( blockEditorStore );

    const hasChildrenClass = hasChildren ? 'fb-slider-has-children' : '';
	const listViewClass = isListViewOpen ? 'fb-list-view-enabled' : '';
	const blockProps = useBlockProps( {
		className: `${ blockId } ${ hasChildrenClass } ${ listViewClass } fb-slider-container fb-slider-editor-wrap fb-editor-preview-mode-${ deviceType.toLowerCase() } ${sliderGlobalWraperClass} ${sliderDesktopSwitcher && 'fb-desktop-responsive'} ${sliderTabletSwitcher && 'fb-tablet-responsive'} ${sliderMobileSwitcher && 'fb-mobile-responsive'}`,
	} );

    const { isListViewOpen, hasChildren } = useSelect( ( select ) => {
		const getStore = select( 'core/editor' ) || select( 'core/edit-widgets' );

		return {
			isListViewOpen: getStore?.isListViewOpened ? getStore.isListViewOpened() : false,
			hasChildren: 0 !== select( 'core/block-editor' )?.getBlocks( clientId ).length,
		};
	}, [] );

    const getSliderTemplate = useMemo(() => [
        ['frontis-blocks/slider-item'],
        ['frontis-blocks/slider-item'],
        ['frontis-blocks/slider-item'],
    ], [slideItem, slideContent]);

    const innerBlocksProps = useInnerBlocksProps(
		{
			className: `swiper-wrapper`,
			slot: 'container-start',
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: getSliderTemplate,
			renderAppender: false,
			orientation: 'horizontal',
		}
	);

    const setSwiperNavigationPagination = (swiperInst) => {
        if (swiperInst?.params?.navigation) {
            swiperInst.params.navigation.prevEl = sliderNavPrevRef.current;
            swiperInst.params.navigation.nextEl = sliderNavNextRef.current;

            // Remove default Swiper text when rendering in editor
            if (sliderNavPrevRef.current) sliderNavPrevRef.current.innerHTML = "";
            if (sliderNavNextRef.current) sliderNavNextRef.current.innerHTML = "";
    
            // Re-init navigation
            swiperInst.navigation.destroy();
            swiperInst.navigation.init();
            swiperInst.navigation.update();
        }
    
        if (swiperInst?.params?.pagination) {
            // First, completely destroy the pagination
            swiperInst.pagination.destroy();
            
            // Reset pagination container
            if (sliderPaginationRef.current) {
                // Clear existing content and classes
                sliderPaginationRef.current.innerHTML = '';
                // Reset to base class
                sliderPaginationRef.current.className = 'swiper-pagination';
            }
            
            // Set new pagination parameters
            swiperInst.params.pagination.el = sliderPaginationRef.current;
            swiperInst.params.pagination.clickable = true;
            swiperInst.params.pagination.type = paginationType;
            
            // Create and initialize pagination
            swiperInst.pagination.init();
            swiperInst.pagination.render();
            swiperInst.pagination.update();
        }
    };

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

        // Set effect based on sliderType
		effect: sliderType === 'carousel' ? carouselEffect : slideEffect,

        // Responsive breakpoints for Desktop, Tablet, and Mobile
        ...(sliderType === 'carousel' && {
            breakpoints: {
            // Mobile (e.g., screens < 768px)
            0: {
                slidesPerView: carouselPerColumn?.Mobile || 1,
                spaceBetween: carouselPerColumnGap?.Mobile || 10,
            },
            // Tablet (e.g., screens >= 768px)
            768: {
                slidesPerView: carouselPerColumn?.Tablet || 2,
                spaceBetween: carouselPerColumnGap?.Tablet || 15,
            },
            // Desktop (e.g., screens >= 1025px)
            1025: {
                slidesPerView: carouselPerColumn?.Desktop || 3,
                spaceBetween: carouselPerColumnGap?.Desktop || 20,
            },
            },
        }),

        // Creative effect settings if needed
        ...(slideEffect === 'creative' && {
            creativeEffect: {
                prev: { shadow: true, translate: [0, 0, -400] },
                next: { translate: ['100%', 0, 0] },
            },
        }),
        
        allowTouchMove: allowTouchMove,
        // Add mousewheel configuration
        mousewheel: enableMouseWheel ? {
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
        } : false,
        onBeforeInit(swiperInst) {
            swiperRef.current = swiperInst;
            setSwiperInstance(swiperInst);
        },
        onAfterInit(swiperInst) {
            setTimeout(() => {
                setSwiperNavigationPagination(swiperInst);
            });
        },
    }), [
        deviceType,
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
    ]);

    // Add useEffect to update Swiper when settings change
    useEffect(() => {
        if (swiperInstance) {
            // Update general settings
            // swiperInstance.params.slidesPerView = 1;

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

    // Add useEffect to handle mousewheel updates
    useEffect(() => {
        if (swiperInstance) {
            // Update mousewheel settings
            if (enableMouseWheel) {
                swiperInstance.mousewheel.enable();
            } else {
                swiperInstance.mousewheel.disable();
            }
            swiperInstance.update();
        }
    }, [swiperInstance, enableMouseWheel]);


    useEffect( () => {
		if ( swiperInstance ) {
			swiperInstance.update();
		}
	}, [ props ] );

    useEffect( () => {
		if ( swiperInstance ) {
			setSwiperNavigationPagination( swiperInstance );
		}
	}, [ displayArrows, displayDots, paginationType ] );

    useEffect( () => {
		if ( swiperInstance && swiperInstance.slides ) {
			const slidesCount = swiperInstance.slides.length;

			// Slide to the slide index more than number of slides, this will reset slider UI.
			swiperInstance.slideTo( slidesCount + 1, transitionSpeed, false );

			setTimeout( () => {
				// Reset Slider to first slide to avoid UI break.
				swiperInstance.slideTo( 0, 0, false );
			}, 100 );

			const sliderBlocks = [ 'frontis-blocks/slider', 'frontis-blocks/slider-item' ];
			let hasSliderParent = false;

			for ( let index = 0; index < blockParents.length; index++ ) {
				if ( sliderBlocks.includes( blockParents[ index ].name ) ) {
					hasSliderParent = true;
					break;
				}
			}

			if ( hasSliderParent ) {
				selectBlock( block.clientId );
			}
		}
	}, [ isListViewOpen ] );

    const getBlockControls = () => {
		return (
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="insert"
						label={ __( 'Add Slide', 'ultimate-addons-for-gutenberg' ) }
						onClick={ () => {
							insertBlock( createBlock( 'frontis-blocks/slider-item' ), block.innerBlocks.length, block.clientId );

							setAttributes( { slideItem: attributes.slideItem + 1 } );
							swiperInstance.activeIndex = attributes.slideItem + 1;
						} }
					/>
				</ToolbarGroup>
			</BlockControls>
		);
	};


    return (
        <>
            <Inspector attributes={attributes} setAttributes={setAttributes} clientId={clientId} />
            {getBlockControls()}

            <div {...blockProps}>
                <Swiper
                    ref={swiperRef}
                    {...settings}
                    modules={[
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
                    pagination={
                        displayDots
                            ? {
                                    el: '#block-' + clientId + ' .swiper-pagination',
                                    clickable: true,
                                    type: paginationType,
                            }
                            : false
                    }
                    onSwiper={(swiper) => {
                        setSwiperInstance(swiper);
                        swiper.on('slideChange', () => {
                            setAttributes({ currentSlideIndex: swiper.activeIndex });
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
                </Swiper>
                { displayDots && <div className="swiper-pagination" ref={ sliderPaginationRef }></div> }
                { displayArrows && (
                    <>
                        <div className="swiper-button-prev" ref={ sliderNavPrevRef }></div>
                        <div className="swiper-button-next" ref={ sliderNavNextRef }></div>
                    </>
                ) }
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