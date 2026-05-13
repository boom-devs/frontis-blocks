import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
} from '@wordpress/block-editor';

import {
    TabPanel,
    PanelBody,
    TextControl,
    ColorPicker,
    BaseControl,
    RangeControl,
    ToggleControl,
    DateTimePicker,
    Dropdown,
    Button,
    Dashicon,
    SelectControl,
    ButtonGroup,
    ResponsiveWrapper, __experimentalHStack as HStack,
} from '@wordpress/components';

import { useEffect, useRef, memo } from '@wordpress/element';
import './editor.scss';
import { 
    mediaType, 
    BORDER_STYLES, 
    OVERFLOW_OP, 
    separatorType,
    ITEM_POSITION 
} from '@Constants/fbConstants';
import FBIconPicker from "../../components/icon-picker";
import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_TypographyControl from '@Components/typography-control';
import { useDeviceType } from "@Config/displayType";
import FB_ImageControl from '@Components/image-control';
import FB_PositionControl from '@Components/position-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_Presets from '@Components/presets';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        blockID,

        //Global attributes
        coverflowCarouselGlobalZIndex,
        coverflowCarouselOverflow,
        coverflowCarouselGlobalPaddingUnits,
        coverflowCarouselGlobalPaddingDesktop,
        coverflowCarouselGlobalPaddingTablet,
        coverflowCarouselGlobalPaddingMobile,
        coverflowCarouselGlobalPaddingLink,
        coverflowCarouselGlobalMarginUnits,
        coverflowCarouselGlobalMarginDesktop,
        coverflowCarouselGlobalMarginTablet,
        coverflowCarouselGlobalMarginMobile,
        coverflowCarouselGlobalMarginLink,
        coverflowCarouselGlobalBgColorSwitcher,
        coverflowCarouselGlobalBgColor,
        coverflowCarouselGlobalBgHoverColor,
        coverflowCarouselGlobalBorder,
        coverflowCarouselGlobalBorderColorSwitcher,
        coverflowCarouselGlobalBorderColor,
        coverflowCarouselGlobalBorderHoverColor,
        coverflowCarouselGlobalBorderUnits,
        coverflowCarouselGlobalBorderDesktop,
        coverflowCarouselGlobalBorderTablet,
        coverflowCarouselGlobalBorderMobile,
        coverflowCarouselGlobalBorderLink,
        coverflowCarouselGlobalBorderRadiusUnits,
        coverflowCarouselGlobalBorderRadiusDesktop,
        coverflowCarouselGlobalBorderRadiusTablet,
        coverflowCarouselGlobalBorderRadiusMobile,
        coverflowCarouselGlobalBorderRadiusLink,
        coverflowCarouselGlobalBoxShadowValues,
        coverflowCarouselGlobalBoxShadowCssValue,

        coverflowCarouselDesktopSwitcher,
        coverflowCarouselTabletSwitcher,
        coverflowCarouselMobileSwitcher,

        // Position
        coverflowCarouselPositionType,
        coverflowCarouselHZOrientationType,
        coverflowCarouselVROrientationType,
        coverflowCarouselHZLeftOffset,
        coverflowCarouselHZLeftOffsetUnits,
        coverflowCarouselHZRightOffset,
        coverflowCarouselHZRightOffsetUnits,
        coverflowCarouselVRTopOffset,
        coverflowCarouselVRTopOffsetUnits,
        coverflowCarouselVRBottomOffset,
        coverflowCarouselVRBottomOffsetUnits,

        coverflowCarouselGlobalWraperCustomCSS,
        coverflowCarouselGlobalWraperID,
        coverflowCarouselGlobalWraperClass,
        coverflowCarouselPresetStyle
    } = attributes;

    const deviceType = useDeviceType();

    const blockProps = useBlockProps();

    /** Start Global padding */
    const handleGlobalPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (coverflowCarouselGlobalPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        coverflowCarouselGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        coverflowCarouselGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        coverflowCarouselGlobalPaddingMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        coverflowCarouselGlobalPaddingDesktop: {
                            ...coverflowCarouselGlobalPaddingDesktop,
                            [position]: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        coverflowCarouselGlobalPaddingTablet: {
                            ...coverflowCarouselGlobalPaddingTablet,
                            [position]: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        coverflowCarouselGlobalPaddingMobile: {
                            ...coverflowCarouselGlobalPaddingMobile,
                            [position]: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        }
    };

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes({ coverflowCarouselGlobalPaddingLink: !coverflowCarouselGlobalPaddingLink });
    };

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes({
            coverflowCarouselGlobalPaddingUnits: {
                ...coverflowCarouselGlobalPaddingUnits,
                [deviceType]: unit,
            },
        });
    };
    /** End Global Padding */

    /** Start Global Margin */
    const handleGlobalMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (coverflowCarouselGlobalMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        coverflowCarouselGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        coverflowCarouselGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        coverflowCarouselGlobalMarginMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        coverflowCarouselGlobalMarginDesktop: {
                            ...coverflowCarouselGlobalMarginDesktop,
                            [position]: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        coverflowCarouselGlobalMarginTablet: {
                            ...coverflowCarouselGlobalMarginTablet,
                            [position]: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        coverflowCarouselGlobalMarginMobile: {
                            ...coverflowCarouselGlobalMarginMobile,
                            [position]: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        }
    };

    const handleGlobalMarginCombineBtn = () => {
        setAttributes({ coverflowCarouselGlobalMarginLink: !coverflowCarouselGlobalMarginLink });
    };

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes({
            coverflowCarouselGlobalMarginUnits: {
                ...coverflowCarouselGlobalMarginUnits,
                [deviceType]: unit,
            },
        });
    };
    /** End Global Margin */

    const handleGlobalBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (coverflowCarouselGlobalBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        coverflowCarouselGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        coverflowCarouselGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        coverflowCarouselGlobalBorderMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ coverflowCarouselGlobalBorderDesktop: { ...coverflowCarouselGlobalBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ coverflowCarouselGlobalBorderTablet: { ...coverflowCarouselGlobalBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ coverflowCarouselGlobalBorderMobile: { ...coverflowCarouselGlobalBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes({ coverflowCarouselGlobalBorderLink: !coverflowCarouselGlobalBorderLink });
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes({
            coverflowCarouselGlobalBorderUnits: {
                ...coverflowCarouselGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Border */

    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (coverflowCarouselGlobalBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        coverflowCarouselGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        coverflowCarouselGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        coverflowCarouselGlobalBorderRadiusMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ coverflowCarouselGlobalBorderRadiusDesktop: { ...coverflowCarouselGlobalBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ coverflowCarouselGlobalBorderRadiusTablet: { ...coverflowCarouselGlobalBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ coverflowCarouselGlobalBorderRadiusMobile: { ...coverflowCarouselGlobalBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes({ coverflowCarouselGlobalBorderRadiusLink: !coverflowCarouselGlobalBorderRadiusLink });
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            coverflowCarouselGlobalBorderRadiusUnits: {
                ...coverflowCarouselGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Border Radius */

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
            <div className="fb-setting-advanced-tab-wrapper">
                <div className="fb-setting-inner-wrapper">
                    <PanelBody
                        title={__("Layout", "frontis-blocks")}
                        initialOpen={true}
                        className='fb-setting-layout-header'
                    >
                        <FB_Range
                            min={0}
                            max={10000000}
                            label={__("Z Index", "frontis-blocks")}
                            rangeValue={coverflowCarouselGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ coverflowCarouselGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}
                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={coverflowCarouselOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ coverflowCarouselOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={coverflowCarouselPositionType}
                            setPositionType={(value) => setAttributes({ coverflowCarouselPositionType: value })}

                            HZOrientationType={coverflowCarouselHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ coverflowCarouselHZOrientationType: value })
                            }
                            VROrientationType={coverflowCarouselVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ coverflowCarouselVROrientationType: value })
                            }

                            HZLeftOffset={coverflowCarouselHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ coverflowCarouselHZLeftOffset: value })}
                            HZLeftOffsetUnits={coverflowCarouselHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ coverflowCarouselHZLeftOffsetUnits: value })}
                            HZRightOffset={coverflowCarouselHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ coverflowCarouselHZRightOffset: value })}
                            HZRightOffsetUnits={coverflowCarouselHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ coverflowCarouselHZRightOffsetUnits: value })}

                            VRTopOffset={coverflowCarouselVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ coverflowCarouselVRTopOffset: value })}
                            VRTopOffsetUnits={coverflowCarouselVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ coverflowCarouselVRTopOffsetUnits: value })}
                            VRBottomOffset={coverflowCarouselVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ coverflowCarouselVRBottomOffset: value })}
                            VRBottomOffsetUnits={coverflowCarouselVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ coverflowCarouselVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={coverflowCarouselGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ coverflowCarouselGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={coverflowCarouselGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ coverflowCarouselGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />
                    </PanelBody>

                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                            spacingUnits={coverflowCarouselGlobalPaddingUnits}
                            spacingDesktop={coverflowCarouselGlobalPaddingDesktop}
                            spacingTablet={coverflowCarouselGlobalPaddingTablet}
                            spacingMobile={coverflowCarouselGlobalPaddingMobile}
                            handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                            spacingCombineBtn={coverflowCarouselGlobalPaddingLink}
                            spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                            spacingUnits={coverflowCarouselGlobalMarginUnits}
                            spacingDesktop={coverflowCarouselGlobalMarginDesktop}
                            spacingTablet={coverflowCarouselGlobalMarginTablet}
                            spacingMobile={coverflowCarouselGlobalMarginMobile}
                            handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                            spacingCombineBtn={coverflowCarouselGlobalMarginLink}
                            spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                            setAttributes={setAttributes}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Background Color", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_SwitcherControl
                            label={__("Background Color", "frontis-blocks")}
                            globalSwitcher={coverflowCarouselGlobalBgColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ coverflowCarouselGlobalBgColorSwitcher: value })}
                        />

                        {coverflowCarouselGlobalBgColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={coverflowCarouselGlobalBgColor}
                                setGlobalColor={(value) => setAttributes({ coverflowCarouselGlobalBgColor: value === undefined ? '' : value })}
                            />
                        )}

                        {coverflowCarouselGlobalBgColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={coverflowCarouselGlobalBgHoverColor}
                                setGlobalColor={(value) => setAttributes({ coverflowCarouselGlobalBgHoverColor: value === undefined ? '' : value })}
                            />
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Border and Shadow", "frontis-blocks")}
                        initialOpen={false}
                    >

                        <SelectControl
                            label={__("Border Style", "frontis-blocks")}
                            value={coverflowCarouselGlobalBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ coverflowCarouselGlobalBorder: value })}
                        />

                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={coverflowCarouselGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ coverflowCarouselGlobalBorderColorSwitcher: value })}
                        />

                        {coverflowCarouselGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={coverflowCarouselGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ coverflowCarouselGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {coverflowCarouselGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={coverflowCarouselGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ coverflowCarouselGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                            spacingUnits={coverflowCarouselGlobalBorderUnits}
                            spacingDesktop={coverflowCarouselGlobalBorderDesktop}
                            spacingTablet={coverflowCarouselGlobalBorderTablet}
                            spacingMobile={coverflowCarouselGlobalBorderMobile}
                            handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                            spacingCombineBtn={coverflowCarouselGlobalBorderLink}
                            spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                            spacingUnits={coverflowCarouselGlobalBorderRadiusUnits}
                            spacingDesktop={coverflowCarouselGlobalBorderRadiusDesktop}
                            spacingTablet={coverflowCarouselGlobalBorderRadiusTablet}
                            spacingMobile={coverflowCarouselGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={coverflowCarouselGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_BoxShadowControl
                            onBoxShadowChange={(value) => setAttributes({ coverflowCarouselGlobalBoxShadowValues: value })}
                            initialShadowValue={coverflowCarouselGlobalBoxShadowValues}
                            onBoxShadowStyleChange={(value) => setAttributes({ coverflowCarouselGlobalBoxShadowCssValue: value })}
                        />

                    </PanelBody>

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={coverflowCarouselDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ coverflowCarouselDesktopSwitcher: value })}

                            tabletValue={coverflowCarouselTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ coverflowCarouselTabletSwitcher: value })}

                            mobileValue={coverflowCarouselMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ coverflowCarouselMobileSwitcher: value })}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor
                            value={coverflowCarouselGlobalWraperCustomCSS}
                            onChangeValue={(value) => setAttributes({ coverflowCarouselGlobalWraperCustomCSS: value })}
                        />
                    </PanelBody>
                </div>
            </div>
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
export default memo(Inspector);