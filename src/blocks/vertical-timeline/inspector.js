import { __ } from '@wordpress/i18n';

import {
    InspectorControls,
} from '@wordpress/block-editor';

import {
    SelectControl,
    PanelBody,
    TabPanel,
    BaseControl,
    Button,
    ButtonGroup,
    ToggleControl,
    TextControl,
    __experimentalInputControl as InputControl,
    TextareaControl,
    Dropdown,
    Dashicon,
    RangeControl,
    ColorPicker,
    ColorPalette,
    MediaUpload,
    MediaUploadCheck,
    Placeholder,
    PanelRow,
    Popover,
    MenuGroup,
    MenuItem
} from '@wordpress/components';

/**
 * Internal depencencies
 */
import {
    BORDER_STYLES,
} from '@Constants/fbConstants';

import { useState, useEffect, useMemo, memo } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_Range from '@Components/range';
import FBIconPicker from "../../components/icon-picker";
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_BackgroundColorControl from '@Components/background-color-control';

import './editor.scss';;

const Inspector = ({ attributes, setAttributes }) => {

    const deviceType = useDeviceType();
    const {
        /** Start Class & ID Setting */
        verticalTimelineGlobalZIndex,
        verticalTimelineCustomCSS,
        verticalTimelineWrapperID,
        verticalTimelineWrapperClass,
        /** End Class & ID Setting */
    } = attributes;

    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>

        </>
    );

    /**
     * Inspector Style Controls
     */
    const styleControls = (
        <>

        </>
    );

    /**
     * Inspector Advanced Controls
     */
    const advancedControls = (
        <>
            <PanelBody
                title={__("Layout", "frontis-blocks")}
                initialOpen={true}
            >
                <FB_Range
                    min={0}
                    max={10000000}
                    label={__("Z Index", "frontis-blocks")}
                    rangeValue={verticalTimelineGlobalZIndex}
                    onChangeHandler={(value) => setAttributes({ verticalTimelineGlobalZIndex: value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                    isRangeUnit={false}
                />

                <FB_InputControl
                    label={__("CSS ID", "frontis-blocks")}
                    value={verticalTimelineWrapperID}
                    onChangeValue={(value) => setAttributes({ verticalTimelineWrapperID: value })}
                    helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                />

                <FB_InputControl
                    label={__("CSS Class", "frontis-blocks")}
                    value={verticalTimelineWrapperClass}
                    onChangeValue={(value) => setAttributes({ verticalTimelineWrapperClass: value })}
                    helpText={__("Separate with spaces key.", "frontis-blocks")}
                />
            </PanelBody>

            <PanelBody
                title={__("Custom CSS", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_CustomCSSEditor
                    value={verticalTimelineCustomCSS}
                    onChangeValue={(value) => setAttributes({ verticalTimelineCustomCSS: value })}
                />
            </PanelBody>
        </>
    );

    return (
        <>
            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );

}

export default Inspector;
