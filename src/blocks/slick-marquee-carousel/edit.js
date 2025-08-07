import { __ } from '@wordpress/i18n';
import {
    RichText,
    useBlockProps,
    BlockControls,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useState, useEffect, useRef, useMemo } from '@wordpress/element';
import { arrayMove } from '@dnd-kit/sortable';
import Inspector from './inspector';

import './editor.scss';

const ALLOWED_BLOCKS = ['frontis-blocks/marquee-carousel-item'];

export default function Edit({ attributes, setAttributes, clientId }) {

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

	const blockProps = useBlockProps({
		className: `fb-marquee-slider-container ${blockId}`,
	});

	const getSliderTemplate = useMemo(() => [
        ['frontis-blocks/marquee-carousel-item'],
        ['frontis-blocks/marquee-carousel-item'],
		['frontis-blocks/marquee-carousel-item'],
		['frontis-blocks/marquee-carousel-item'],
		['frontis-blocks/marquee-carousel-item'],
		['frontis-blocks/marquee-carousel-item'],
    ], []);

	const slickRef = useRef(null);

	useEffect(() => {
		if (!window.jQuery || !slickRef.current) return;
		const $ = window.jQuery;
		const $slider = $(slickRef.current);

		if ($slider.hasClass('slick-initialized')) {
			$slider.slick('unslick');
		}

		$slider.slick({
            speed: 2000,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            centerMode: true,
            cssEase: 'linear',
            arrows: false,
            dots: false,
            pauseOnHover: false,
            pauseOnFocus: false,
            variableWidth: false,
            touchMove: false,
            draggable: false,
            swipe: false,
            swipeToSlide: false,
            waitForAnimate: false 
		});

		return () => {
			if ($slider.hasClass('slick-initialized')) {
				$slider.slick('unslick');
			}
		};
	}, []);

    const innerBlocksProps = useInnerBlocksProps(
		{
			className: `uagb-slick-carousel`,
			ref: slickRef,
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: getSliderTemplate,
			renderAppender: false,
			orientation: 'horizontal',
		}
	);


	const renderSliderToolbarControls = () => {
        return (
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon="plus"
                        label={ __( 'Add New Slide', 'frontis-blocks' ) } 
                        onClick={{}}
                    />
                    <ToolbarButton
                        icon="admin-page"
                        label={ __( 'Duplicate Slide', 'frontis-blocks' ) } 
                        onClick={{}}
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

			<div {...blockProps}>

				<div className="wp-block-uagb-image-gallery" style={{ visibility: 'visible' }}>
					<div className="spectra-image-gallery spectra-image-gallery__layout--carousel">
                        <div {...innerBlocksProps} />
					</div>
				</div>
			</div>
		</>
	);
}
