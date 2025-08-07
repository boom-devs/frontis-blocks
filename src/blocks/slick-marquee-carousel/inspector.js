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
        sliderItems,
        blockStyle,
        
        autoplayDirection,
        speed,
        reverseDirection,
        showNavigation,
        showPagination,


        slideWidth,
        slideWidthUnits,
        slideHeight,
        slideHeightUnits,
        
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
                initialOpen={false}
            >
                <RangeControl
                    label={__("Transition Speed (ms)", "frontis-blocks")}
                    value={speed}
                    onChange={(value) => setAttributes({ speed: value })}
                    min={100}
                    max={20000}
                    step={100}
                />
                <ToggleControl
                    label={__("Reverse Direction", "frontis-blocks")}
                    checked={reverseDirection}
                    onChange={(value) => setAttributes({ reverseDirection: value })}
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
