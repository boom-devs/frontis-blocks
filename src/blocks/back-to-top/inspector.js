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
import FBIconPicker from '@Components/icon-picker';
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
import FB_ImageControl from '@Components/image-control';

import './editor.scss';

const Inspector = ({ attributes, setAttributes }) => {

    const {
        backToTopPresetType,
        backToTopPosition,
        backToTopEntranceAnimation,
        backToTopContentType,
        backToTopIcon,
        backToTopIconType,
        backToTopImage,
        backToTopImageAlt,
        backToTopText,
        backToTopImageID } = attributes;

    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
            <PanelBody
                title={__("General", "frontis-blocks")}
                initialOpen={true}
            >

                {/* <SelectControl
                    label={__('Preset', 'frontis-blocks')}
                    value={backToTopPresetType}
                    options={[
                        { label: __('Default', 'frontis-blocks'), value: '0' },
                        { label: __('Preset 1', 'frontis-blocks'), value: '1' },
                        { label: __('Preset 2', 'frontis-blocks'), value: '2' },
                        { label: __('Preset 3', 'frontis-blocks'), value: '3' },
                        { label: __('Preset 4', 'frontis-blocks'), value: '4' },
                        { label: __('Preset 5', 'frontis-blocks'), value: '5' },
                    ]}
                    onChange={(value) => setAttributes({ backToTopPresetType: value })}
                /> */}

                <SelectControl
                    label={__('Position', 'frontis-blocks')}
                    value={backToTopPosition}
                    options={[
                        { label: __('Bottom Left', 'frontis-blocks'), value: 'bottom-left' },
                        { label: __('Bottom Right', 'frontis-blocks'), value: 'bottom-right' },
                        { label: __('Top Left', 'frontis-blocks'), value: 'top-left' },
                        { label: __('Top Right', 'frontis-blocks'), value: 'top-right' },
                    ]}
                    onChange={(value) => setAttributes({ backToTopPosition: value })}
                />

                <SelectControl

                    label={__('Entrance Animation', 'frontis-blocks')}
                    value={backToTopEntranceAnimation}
                    options={[
                        { label: __('Fade', 'frontis-blocks'), value: 'fade' },
                        { label: __('Slide Up', 'frontis-blocks'), value: 'slide-up' },
                        { label: __('Zoom In', 'frontis-blocks'), value: 'zoom-in' },
                        { label: __('Bounce In', 'frontis-blocks'), value: 'bounce-in' },

                    ]}
                    onChange={(value) => setAttributes({ backToTopEntranceAnimation: value })}
                />

            </PanelBody>

            <PanelBody
                title={__("Content", "frontis-blocks")}
                initialOpen={false}
            >

                <SelectControl

                    label={__('Content Type', 'frontis-blocks')}
                    value={backToTopContentType}
                    options={[
                        { label: __('Icon', 'frontis-blocks'), value: 'icon' },
                        { label: __('Text', 'frontis-blocks'), value: 'text' },
                        { label: __('Text & Icon', 'frontis-blocks'), value: 'text-icon' },

                    ]}
                    onChange={(value) => setAttributes({ backToTopContentType: value })}
                />

                {
                    backToTopContentType !== "text" && (
                        <SelectControl
                            label={__('Icon Type', 'frontis-blocks')}
                            value={backToTopIconType}
                            options={[
                                { label: __('Icon', 'frontis-blocks'), value: 'icon' },
                                { label: __('Image', 'frontis-blocks'), value: 'image' },

                            ]}
                            onChange={(value) => setAttributes({ backToTopIconType: value })}
                        />
                    )
                }

                {
                    backToTopIconType === "icon" && (
                        <FBIconPicker
                            value={backToTopIcon}
                            setIconHandler={(value) => setAttributes({ backToTopIcon: value })}
                        />
                    )
                }


                {
                    backToTopIconType === "image" && (
                        <FB_ImageControl
                            label={__("Select Image", "frontis-blocks")}
                            globalImageUrl={backToTopImage}
                            setglobalImageUrl={(value) => setAttributes({ backToTopImage: value })}
                            globalImageAlt={backToTopImageAlt}
                            setglobalImageAlt={(value) => setAttributes({ backToTopImageAlt: value })}
                            globalImageID={backToTopImageID}
                            setglobalImageID={(value) => setAttributes({ backToTopImageID: value })}
                            isImageSize={false}
                        />
                    )
                }

                {
                    (backToTopContentType === "text" || backToTopContentType === "text-icon") && (
                        <TextControl
                            label={__("Text", "frontis-blocks")}
                            value={backToTopText}
                            onChange={(value) => setAttributes({ backToTopText: value })}
                            className="fb-back-to-top-text-control"
                            help={__('Enter the back to top button text ', 'frontis-blocks')}
                        />
                    )
                }


            </PanelBody>

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

        </>
    );


    return (
        <>

            <FB_InspectorControls
                generalControls={generalControls}
            // styleControls={styleControls}
            // advancedControls={advancedControls}
            />

        </>
    );

}

export default Inspector;