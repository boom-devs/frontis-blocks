import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect, useMemo } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { 
    PanelBody, 
    TabPanel, 
    BaseControl, 
    Button, 
    ButtonGroup,
    SelectControl,
    RangeControl,
    ToggleControl
} from '@wordpress/components';
import { BORDER_STYLES } from "./constants/constants";
import FB_Range from '@Components/range';
import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import {useDeviceType} from "@Config/displayType";
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import FB_InspectorControls from '@Components/InspectorControls';
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
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
        arrows,
        dots,
        pauseOnHover,
        pauseOnFocus,
        variableWidth,
        touchMove,
        draggable,
        swipe,
        swipeToSlide,
        waitForAnimate,
        
    } = attributes;

    useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockId: "marquee-carousel-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

    const deviceType = useDeviceType();

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
        <>
            <PanelBody 
                title={__("General Settings", "frontis-blocks")} 
                initialOpen={true}
            >
                <ToggleControl
                    label={ __( 'Autoplay', 'frontis-blocks' ) }
                    checked={ autoplay }
                    onChange={(value) => setAttributes({ autoplay: value })}
                />

                <ToggleControl
                    label={ __( 'Infinite', 'frontis-blocks' ) }
                    checked={ infinite }
                    onChange={(value) => setAttributes({ infinite: value })}
                />
                <ToggleControl
                    label={ __( 'Center Mode', 'frontis-blocks' ) }
                    checked={ centerMode }
                    onChange={(value) => setAttributes({ centerMode: value })}
                />

                <ToggleControl
                    label={ __( 'Arrows', 'frontis-blocks' ) }
                    checked={ arrows }
                    onChange={(value) => setAttributes({ arrows: value })}
                />

                <ToggleControl
                    label={ __( 'Dots', 'frontis-blocks' ) }
                    checked={ dots }
                    onChange={(value) => setAttributes({ dots: value })}
                />
                
                <ToggleControl
                    label={ __( 'Pause on Hover', 'frontis-blocks' ) }
                    checked={ pauseOnHover }
                    onChange={(value) => setAttributes({ pauseOnHover: value })}
                />

                <ToggleControl
                    label={ __( 'Pause on Focus', 'frontis-blocks' ) }
                    checked={ pauseOnFocus }
                    onChange={(value) => setAttributes({ pauseOnFocus: value })}
                />

                <ToggleControl
                    label={ __( 'Variable Width', 'frontis-blocks' ) }
                    checked={ variableWidth }
                    onChange={(value) => setAttributes({ variableWidth: value })}
                />

                <ToggleControl
                    label={ __( 'Touch Move', 'frontis-blocks' ) }
                    checked={ touchMove }
                    onChange={(value) => setAttributes({ touchMove: value })}
                />

                <ToggleControl
                    label={ __( 'Draggable', 'frontis-blocks' ) }
                    checked={ draggable }
                    onChange={(value) => setAttributes({ draggable: value })}
                />

                <ToggleControl
                    label={ __( 'Swipe', 'frontis-blocks' ) }
                    checked={ swipe }
                    onChange={(value) => setAttributes({ swipe: value })}
                />

                <ToggleControl
                    label={ __( 'Swipe to Slide', 'frontis-blocks' ) }
                    checked={ swipeToSlide }
                    onChange={(value) => setAttributes({ swipeToSlide: value })}
                />
                
                <ToggleControl
                    label={ __( 'Wait for Animate', 'frontis-blocks' ) }
                    checked={ waitForAnimate }
                    onChange={(value) => setAttributes({ waitForAnimate: value })}
                />

                <RangeControl
                    label={__('Speed (ms)', 'frontis-blocks')}
                    value={speed}
                    onChange={(value) => setAttributes({ speed: value })}
                    min={100}
                    max={10000}
                    step={100}
                    initialPosition={2000}
                />
                <RangeControl
                    label={__('Slides to Show', 'frontis-blocks')}
                    value={slidesToShow}
                    onChange={(value) => setAttributes({ slidesToShow: value })}
                    min={1}
                    max={100}
                    step={1}
                    initialPosition={6}
                />
                <RangeControl
                    label={__('Slides to Scroll', 'frontis-blocks')}
                    value={slidesToScroll}
                    onChange={(value) => setAttributes({ slidesToScroll: value })}
                    min={1}
                    max={20}
                    step={1}
                    initialPosition={1}
                />
                <RangeControl
                    label={__('Slides to Scroll', 'frontis-blocks')}
                    value={autoplaySpeed}
                    onChange={(value) => setAttributes({ autoplaySpeed: value })}
                    min={0}
                    max={10000}
                    step={100}
                    initialPosition={0}
                />

            </PanelBody>
        </>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
        <>
        style
        </>
	);
		
	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
        <>
            Advanced
        </>
	);


    return (

        <>
            <style>
            	{/* {editorStyle} */}
            </style>

            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}
