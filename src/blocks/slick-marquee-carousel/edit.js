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
        blockStyle,
        speed,
        infinite,
        slidesToShow,
        slidesToScroll,
        autoplay,
        autoplaySpeed,
        centerMode,
        pauseOnHover,
        pauseOnFocus,
        variableWidth,
        touchMove,
        draggable,
        swipe,
        swipeToSlide,
        waitForAnimate,
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
            speed: speed,
            infinite: infinite,
            slidesToShow: slidesToShow,
            slidesToScroll: slidesToScroll,
            autoplay: autoplay,
            autoplaySpeed: autoplaySpeed,
            centerMode: centerMode,
            cssEase: 'linear',
            pauseOnHover: pauseOnHover,
            pauseOnFocus: pauseOnFocus,
            variableWidth: variableWidth,
            touchMove: touchMove,
            draggable: draggable,
            swipe: swipe,
            swipeToSlide: swipeToSlide,
            waitForAnimate: waitForAnimate,
            arrows: false,
            dots: false,
            initialSlide : 1,
		});

        return () => {
            clearTimeout(timer);
            if ($slider.hasClass('slick-initialized')) {
                $slider.slick('unslick');
            }
        };
	}, [
        speed,
        infinite,
        slidesToShow,
        slidesToScroll,
        autoplay,
        autoplaySpeed,
        centerMode,
        pauseOnHover,
        pauseOnFocus,
        variableWidth,
        touchMove,
        draggable,
        swipe,
        swipeToSlide,
        waitForAnimate,
    ]);

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

			<div {...blockProps} >

				<div className="fb-marquee-image-gallery" style={{ visibility: 'visible' }}>
					<div className="fb-marquee-carousel-gallery-layout">
                        <div {...innerBlocksProps} />
					</div>
				</div>
			</div>
		</>
	);
}