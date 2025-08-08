import { __ } from '@wordpress/i18n';
import {
    RichText,
    useBlockProps,
    BlockControls,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useState, useEffect, useRef, useMemo } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
import Inspector from './inspector';

import './editor.scss';

const ALLOWED_BLOCKS = ['frontis-blocks/marquee-carousel-item'];

export default function Edit({ attributes, setAttributes, clientId }) {

	const {
        blockId,
        blockStyle,
        speed,
        infinite,
        slidesToShow,
        autoplay,
        centerMode,
        pauseOnHover,
        variableWidth,
        touchMove,
        draggable,
        swipe,
        swipeToSlide,
        waitForAnimate,
        sliderGlobalWraperID,
        sliderGlobalWraperClass,
    } = attributes;

    const { insertBlock, duplicateBlocks } = useDispatch('core/block-editor');
    
    const { getSelectedBlockClientIds, getBlocks } = useSelect('core/block-editor');
    
    const innerBlocks = useSelect(
        (select) => select('core/block-editor').getBlocks(clientId),
        [clientId]
    );

	const blockProps = useBlockProps({
		className: `fb-marquee-slider-container ${blockId}`,
	});

	const getSliderTemplate = useMemo(() => [
        ['frontis-blocks/marquee-carousel-item'],
        ['frontis-blocks/marquee-carousel-item'],
		['frontis-blocks/marquee-carousel-item'],
		['frontis-blocks/marquee-carousel-item'],
    ], []);

	const slickRef = useRef(null);
    const timer = useRef(null);

    // Helper function to get responsive value
    const getResponsiveValue = (responsiveObj, fallbackValue = 1) => {
        if (typeof responsiveObj === 'object' && responsiveObj !== null) {
            // Return Desktop value first, then fallback to default
            return responsiveObj.Desktop || fallbackValue;
        }
        // If it's a number (old format), return as is
        return responsiveObj || fallbackValue;
    };

    // Generate responsive breakpoints for Slick
    const getResponsiveSettings = () => {
        if (typeof slidesToShow === 'object' && slidesToShow !== null) {
            const settings = [];
            
            // Tablet breakpoint
            if (slidesToShow.Tablet !== '' && slidesToShow.Tablet !== undefined) {
                settings.push({
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: parseInt(slidesToShow.Tablet) || 1,
                        slidesToScroll: 1
                    }
                });
            }
            
            // Mobile breakpoint
            if (slidesToShow.Mobile !== '' && slidesToShow.Mobile !== undefined) {
                settings.push({
                    breakpoint: 767,
                    settings: {
                        slidesToShow: parseInt(slidesToShow.Mobile) || 1,
                        slidesToScroll: 1
                    }
                });
            }
            
            return settings;
        }
        
        return [];
    };

    // Slick initialization function
    const initializeSlick = (immediate = false) => {
        if (!window.jQuery || !slickRef.current) return;
        const $ = window.jQuery;
        const $slider = $(slickRef.current);

        // Clear any existing timer
        if (timer.current) {
            clearTimeout(timer.current);
        }

        const reinitialize = () => {
            if ($slider.hasClass('slick-initialized')) {
                $slider.slick('unslick');
            }

            const desktopSlidesToShow = getResponsiveValue(slidesToShow, 1);
            const responsiveSettings = getResponsiveSettings();

            $slider.slick({
                speed: speed,
                infinite: infinite,
                slidesToShow: parseInt(desktopSlidesToShow) || 1,
                slidesToScroll: 1,
                autoplay: autoplay,
                autoplaySpeed: 0,
                centerMode: centerMode,
                cssEase: 'linear',
                pauseOnHover: pauseOnHover,
                pauseOnFocus: false,
                variableWidth: variableWidth,
                touchMove: touchMove,
                draggable: draggable,
                swipe: swipe,
                swipeToSlide: swipeToSlide,
                waitForAnimate: waitForAnimate,
                arrows: false,
                dots: false,
                initialSlide: 0,

                // Responsive settings
                responsive: responsiveSettings,

                // Core settings for smooth infinite scroll
                useCSS: true,
                useTransform: true,
                accessibility: false,
                focusOnSelect: false,
                // No CSS interference - let slick handle everything
                fade: false,
                vertical: false,
                rtl: false,
                respondTo: 'window'
            });
        };

        if (immediate) {
            // For immediate initialization (when adding slides)
            reinitialize();
        } else {
            // Small delay for normal initialization
            timer.current = setTimeout(reinitialize, 100);
        }
    };

	useEffect(() => {
        initializeSlick();

        return () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            if (window.jQuery && slickRef.current) {
                const $ = window.jQuery;
                const $slider = $(slickRef.current);
                if ($slider.hasClass('slick-initialized')) {
                    $slider.slick('unslick');
                }
            }
        };
	}, [
        speed,
        infinite,
        slidesToShow, // This will now trigger on responsive changes
        autoplay,
        centerMode,
        pauseOnHover,
        variableWidth,
        touchMove,
        draggable,
        swipe,
        swipeToSlide,
        waitForAnimate,
    ]);

    // Re-initialize slick when inner blocks change
    useEffect(() => {
        if (innerBlocks.length > 0) {
            // Use requestAnimationFrame for better timing
            requestAnimationFrame(() => {
                initializeSlick(true); // Immediate initialization
            });
        }
    }, [innerBlocks.length]);

    const innerBlocksProps = useInnerBlocksProps(
		{
			className: `fb-marquee-carousel-wrapper`,
			ref: slickRef,
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: getSliderTemplate,
			renderAppender: false,
			orientation: 'horizontal',
		}
	);

    // Add new slide function
    const addNewSlide = () => {
        const newBlock = createBlock('frontis-blocks/marquee-carousel-item');
        insertBlock(newBlock, innerBlocks.length, clientId);
        
        // Force immediate re-initialization after adding
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                initializeSlick(true);
            });
        });
    };

    // Duplicate slide function
    const duplicateSlide = () => {
        const selectedBlocks = getSelectedBlockClientIds();
        let blockToDuplicate = null;
        
        if (selectedBlocks.length > 0) {
            // Get the selected block that's a child of this carousel
            blockToDuplicate = innerBlocks.find(innerBlock => 
                selectedBlocks.includes(innerBlock.clientId)
            );
        }
        
        // If no selected block found, use the last slide
        if (!blockToDuplicate && innerBlocks.length > 0) {
            blockToDuplicate = innerBlocks[innerBlocks.length - 1];
        }
        
        if (blockToDuplicate) {
            // Create a new block with same attributes and inner blocks
            const duplicatedBlock = createBlock(
                blockToDuplicate.name,
                { ...blockToDuplicate.attributes },
                blockToDuplicate.innerBlocks?.map(innerBlock => 
                    createBlock(
                        innerBlock.name,
                        { ...innerBlock.attributes },
                        innerBlock.innerBlocks || []
                    )
                ) || []
            );
            
            // Insert the duplicated block
            insertBlock(duplicatedBlock, innerBlocks.length, clientId);
            
            // Force immediate re-initialization after duplicating
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    initializeSlick(true);
                });
            });
        }
    };

	const renderSliderToolbarControls = () => {
        return (
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon="plus"
                        label={ __( 'Add New Slide', 'frontis-blocks' ) } 
                        onClick={addNewSlide}
                    />
                    <ToolbarButton
                        icon="admin-page"
                        label={ __( 'Duplicate Slide', 'frontis-blocks' ) } 
                        onClick={duplicateSlide}
                    />
                </ToolbarGroup>
            </BlockControls>
        );
    };
	
	return (
		<>
		    <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />

			{renderSliderToolbarControls()}

			<div {...blockProps} >

				<div className={`fb-marquee-image-gallery ${sliderGlobalWraperClass}`} id={sliderGlobalWraperID} style={{ visibility: 'visible' }}>
					<div className="fb-marquee-carousel-gallery-layout">
                        <div {...innerBlocksProps} />
					</div>
				</div>
			</div>
		</>
	);
}