import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect, useMemo } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { 
    PanelBody, 
    TabPanel, 
    Dashicon,
    BaseControl, 
    Button, 
    ButtonGroup,
    SelectControl,
    RangeControl,
    ToggleControl,
    Dropdown,
} from '@wordpress/components';
/**
 * Internal depencencies
 */
import { 
    BORDER_STYLES,
    BACKGROUND_TYPES,
} from '@Constants/fbConstants';

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
import FB_InputControl from '@Components/input-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const { 
        blockId,
        blockStyle,
        speed,
        reverseDirection,
        pauseOnHover,

        slideWidth,
        slideWidthUnits,
        slideHeight,
        slideHeightUnits,

        slidePaddingUnits,
        slidePaddingDesktop,
        slidePaddingTablet,
        slidePaddingMobile,
        slidePaddingLink,

        sliderOverlaySwitcher,
        sliderOverlayStartColor,
        sliderOverlayEndColor,
        sliderOverlayWidth,
        sliderOverlayWidthUnits,

        sliderGlobalZIndex,
        sliderGlobalWraperID,
        sliderGlobalWraperClass,

        sliderGlobalPaddingUnits,
        sliderGlobalPaddingDesktop,
        sliderGlobalPaddingTablet,
        sliderGlobalPaddingMobile,
        sliderGlobalPaddingLink,

        sliderGlobalMarginUnits,
        sliderGlobalMarginDesktop,
        sliderGlobalMarginTablet,
        sliderGlobalMarginMobile,
        sliderGlobalMarginLink,

        sliderGlobalBgColorSwitcher,
        sliderGlobalBgNormalBackgroundType,
        sliderGlobalBgNormalClassicColor,
        sliderGlobalBgNormalGradientColor,
        sliderGlobalBgNormalCustomGradientSwitcher,
        sliderGlobalBgNormalCustomGradientInputValue,
        sliderGlobalBgNormalBackgroundImageUrl,
        sliderGlobalBgNormalBackgroundImagePosition,
        sliderGlobalBgNormalBackgroundImageAttachment,
        sliderGlobalBgNormalBackgroundImageRepeat,
        sliderGlobalBgNormalBackgroundImageSize,

        sliderGlobalBgHoverBackgroundType,
        sliderGlobalBgHoverClassicColor,
        sliderGlobalBgHoverGradientColor,
        sliderGlobalBgHoverCustomGradientSwitcher,
        sliderGlobalBgHoverCustomGradientInputValue,
        sliderGlobalBgHoverBackgroundImageUrl,
        sliderGlobalBgHoverBackgroundImagePosition,
        sliderGlobalBgHoverBackgroundImageAttachment,
        sliderGlobalBgHoverBackgroundImageRepeat,
        sliderGlobalBgHoverBackgroundImageSize,

        sliderGlobalBorder,
        sliderGlobalBorderColorSwitcher,
        sliderGlobalBorderColor,
        sliderGlobalBorderHoverColor,
        sliderGlobalBorderUnits,
        sliderGlobalBorderDesktop,
        sliderGlobalBorderTablet,
        sliderGlobalBorderMobile,
        sliderGlobalBorderLink,

        sliderGlobalBorderRadiusUnits,
        sliderGlobalBorderRadiusDesktop,
        sliderGlobalBorderRadiusTablet,
        sliderGlobalBorderRadiusMobile,
        sliderGlobalBorderRadiusLink,

        sliderGlobalBoxShadowSwitcher,
        sliderGlobalBoxShadowValues,
        sliderGlobalBoxShadowCssValue,
        sliderGlobalBoxShadowHoverValues,
        sliderGlobalBoxShadowHoverCssValue,

        sliderGlobalCustomCSS,
        
    } = attributes;

    useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockId: "marquee-carousel-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

    const deviceType = useDeviceType();

    /** Start slide padding */
	const handleSlidePaddingUnitChange = ( event, position ) => {  
		const value = event.target.value;
		if ( slidePaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						slidePaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						slidePaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						slidePaddingMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {slidePaddingDesktop: {...slidePaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {slidePaddingTablet: {...slidePaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {slidePaddingMobile: {...slidePaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSlidePaddingCombineBtn = () => {
		setAttributes( {slidePaddingLink: !slidePaddingLink} );
	}

	const handleSlidePaddingUnitsHandler = (unit) => {
		setAttributes( {
			slidePaddingUnits: {
				...slidePaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const slideDesktopPaddingWidth    = `${slidePaddingDesktop.top}${slidePaddingUnits.Desktop} ${slidePaddingDesktop.right}${slidePaddingUnits.Desktop} ${slidePaddingDesktop.bottom}${slidePaddingUnits.Desktop} ${slidePaddingDesktop.left}${slidePaddingUnits.Desktop}`;
	const slideTabletPaddingWidth     = `${slidePaddingTablet.top}${slidePaddingUnits.Tablet} ${slidePaddingTablet.right}${slidePaddingUnits.Tablet} ${slidePaddingTablet.bottom}${slidePaddingUnits.Tablet} ${slidePaddingTablet.left}${slidePaddingUnits.Tablet}`;
	const slideMobilePaddingWidth     = `${slidePaddingMobile.top}${slidePaddingUnits.Mobile} ${slidePaddingMobile.right}${slidePaddingUnits.Mobile} ${slidePaddingMobile.bottom}${slidePaddingUnits.Mobile} ${slidePaddingMobile.left}${slidePaddingUnits.Mobile}`;
	/** End slide Padding */

    /** Start Global padding */
	const handleSliderGlobalPaddingUnitChange = ( event, position ) => {  
		const value = event.target.value;
		if ( sliderGlobalPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						sliderGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						sliderGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						sliderGlobalPaddingMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {sliderGlobalPaddingDesktop: {...sliderGlobalPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {sliderGlobalPaddingTablet: {...sliderGlobalPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {sliderGlobalPaddingMobile: {...sliderGlobalPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSliderGlobalPaddingCombineBtn = () => {
		setAttributes( {sliderGlobalPaddingLink: !sliderGlobalPaddingLink} );
	}

	const handleSliderGlobalPaddingUnitsHandler = (unit) => {
		setAttributes( {
			sliderGlobalPaddingUnits: {
				...sliderGlobalPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopPaddingWidth    = `${sliderGlobalPaddingDesktop.top}${sliderGlobalPaddingUnits.Desktop} ${sliderGlobalPaddingDesktop.right}${sliderGlobalPaddingUnits.Desktop} ${sliderGlobalPaddingDesktop.bottom}${sliderGlobalPaddingUnits.Desktop} ${sliderGlobalPaddingDesktop.left}${sliderGlobalPaddingUnits.Desktop}`;
	const globalTabletPaddingWidth     = `${sliderGlobalPaddingTablet.top}${sliderGlobalPaddingUnits.Tablet} ${sliderGlobalPaddingTablet.right}${sliderGlobalPaddingUnits.Tablet} ${sliderGlobalPaddingTablet.bottom}${sliderGlobalPaddingUnits.Tablet} ${sliderGlobalPaddingTablet.left}${sliderGlobalPaddingUnits.Tablet}`;
	const globalMobilePaddingWidth     = `${sliderGlobalPaddingMobile.top}${sliderGlobalPaddingUnits.Mobile} ${sliderGlobalPaddingMobile.right}${sliderGlobalPaddingUnits.Mobile} ${sliderGlobalPaddingMobile.bottom}${sliderGlobalPaddingUnits.Mobile} ${sliderGlobalPaddingMobile.left}${sliderGlobalPaddingUnits.Mobile}`;
	/** End Global Padding */

	/** Start Global Margin */
	const handleSliderGlobalMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( sliderGlobalMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						sliderGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						sliderGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						sliderGlobalMarginMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {sliderGlobalMarginDesktop: {...sliderGlobalMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {sliderGlobalMarginTablet: {...sliderGlobalMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {sliderGlobalMarginMobile: {...sliderGlobalMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSliderGlobalMarginCombineBtn = () => {
		setAttributes( {sliderGlobalMarginLink: !sliderGlobalMarginLink} );
	}

	const handleSliderGlobalMarginUnitsHandler = (unit) => {
		setAttributes( {
			sliderGlobalMarginUnits: {
				...sliderGlobalMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const globalDesktopMarginWidth = `${sliderGlobalMarginDesktop.top}${sliderGlobalMarginUnits.Desktop} ${sliderGlobalMarginDesktop.right}${sliderGlobalMarginUnits.Desktop} ${sliderGlobalMarginDesktop.bottom}${sliderGlobalMarginUnits.Desktop} ${sliderGlobalMarginDesktop.left}${sliderGlobalMarginUnits.Desktop}`;
	const globalTabletMarginWidth = `${sliderGlobalMarginTablet.top}${sliderGlobalMarginUnits.Tablet} ${sliderGlobalMarginTablet.right}${sliderGlobalMarginUnits.Tablet} ${sliderGlobalMarginTablet.bottom}${sliderGlobalMarginUnits.Tablet} ${sliderGlobalMarginTablet.left}${sliderGlobalMarginUnits.Tablet}`;
	const globalMobileMarginWidth = `${sliderGlobalMarginMobile.top}${sliderGlobalMarginUnits.Mobile} ${sliderGlobalMarginMobile.right}${sliderGlobalMarginUnits.Mobile} ${sliderGlobalMarginMobile.bottom}${sliderGlobalMarginUnits.Mobile} ${sliderGlobalMarginMobile.left}${sliderGlobalMarginUnits.Mobile}`;
	/** End Global Margin */

	/** Start Global border */
	const handleSliderGlobalBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( sliderGlobalBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						sliderGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						sliderGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						sliderGlobalBorderMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {sliderGlobalBorderDesktop: {...sliderGlobalBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {sliderGlobalBorderTablet: {...sliderGlobalBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {sliderGlobalBorderMobile: {...sliderGlobalBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSliderGlobalBorderCombineBtn = () => {
		setAttributes( {sliderGlobalBorderLink: !sliderGlobalBorderLink} );
	}

	const handleSliderGlobalBorderUnitsHandler = (unit) => {
		setAttributes( {
			sliderGlobalBorderUnits: {
				...sliderGlobalBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopBorderWidth = `${sliderGlobalBorderDesktop.top}${sliderGlobalBorderUnits.Desktop} ${sliderGlobalBorderDesktop.right}${sliderGlobalBorderUnits.Desktop} ${sliderGlobalBorderDesktop.bottom}${sliderGlobalBorderUnits.Desktop} ${sliderGlobalBorderDesktop.left}${sliderGlobalBorderUnits.Desktop}`;
	const globalTabletBorderWidth = `${sliderGlobalBorderTablet.top}${sliderGlobalBorderUnits.Tablet} ${sliderGlobalBorderTablet.right}${sliderGlobalBorderUnits.Tablet} ${sliderGlobalBorderTablet.bottom}${sliderGlobalBorderUnits.Tablet} ${sliderGlobalBorderTablet.left}${sliderGlobalBorderUnits.Tablet}`;
	const globalMobileBorderWidth = `${sliderGlobalBorderMobile.top}${sliderGlobalBorderUnits.Mobile} ${sliderGlobalBorderMobile.right}${sliderGlobalBorderUnits.Mobile} ${sliderGlobalBorderMobile.bottom}${sliderGlobalBorderUnits.Mobile} ${sliderGlobalBorderMobile.left}${sliderGlobalBorderUnits.Mobile}`;
	/** End Border */

	/** Start Global border radius*/
	const handleSliderGlobalBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( sliderGlobalBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						sliderGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						sliderGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						sliderGlobalBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {sliderGlobalBorderRadiusDesktop: {...sliderGlobalBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {sliderGlobalBorderRadiusTablet: {...sliderGlobalBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {sliderGlobalBorderRadiusMobile: {...sliderGlobalBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSliderGlobalBorderRadiusCombineBtn = () => {
		setAttributes( {sliderGlobalBorderRadiusLink: !sliderGlobalBorderRadiusLink} );
	}

	const handleSliderGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			sliderGlobalBorderRadiusUnits: {
				...sliderGlobalBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border radius */

	/** Start Global Border Radius */
	const globalDesktopBorderRadiusWidth = `${sliderGlobalBorderRadiusDesktop.top}${sliderGlobalBorderRadiusUnits.Desktop} ${sliderGlobalBorderRadiusDesktop.right}${sliderGlobalBorderRadiusUnits.Desktop} ${sliderGlobalBorderRadiusDesktop.bottom}${sliderGlobalBorderRadiusUnits.Desktop} ${sliderGlobalBorderRadiusDesktop.left}${sliderGlobalBorderRadiusUnits.Desktop}`;
	const globalTabletBorderRadiusWidth = `${sliderGlobalBorderRadiusTablet.top}${sliderGlobalBorderRadiusUnits.Tablet} ${sliderGlobalBorderRadiusTablet.right}${sliderGlobalBorderRadiusUnits.Tablet} ${sliderGlobalBorderRadiusTablet.bottom}${sliderGlobalBorderRadiusUnits.Tablet} ${sliderGlobalBorderRadiusTablet.left}${sliderGlobalBorderRadiusUnits.Tablet}`;
	const globalMobileBorderRadiusWidth = `${sliderGlobalBorderRadiusMobile.top}${sliderGlobalBorderRadiusUnits.Mobile} ${sliderGlobalBorderRadiusMobile.right}${sliderGlobalBorderRadiusUnits.Mobile} ${sliderGlobalBorderRadiusMobile.bottom}${sliderGlobalBorderRadiusUnits.Mobile} ${sliderGlobalBorderRadiusMobile.left}${sliderGlobalBorderRadiusUnits.Mobile}`;
	/** End Global Border Radius */

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
                    label={__("Pause on Hover", "frontis-blocks")}
                    checked={pauseOnHover}
                    onChange={(value) => setAttributes({ pauseOnHover: value })}
                />
                <ToggleControl
                    label={__("Reverse Direction", "frontis-blocks")}
                    checked={reverseDirection}
                    onChange={(value) => setAttributes({ reverseDirection: value })}
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

            </PanelBody>
        </>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
        <>
            <PanelBody 
                title={__("Style", "frontis-blocks")} 
                initialOpen={true}
            >
                <FB_Range
                    min={1}
                    max={1000}
                    label={__("Slide Width", "frontis-blocks")}
                    rangeValue={slideWidth}
                    onChangeHandler={(value) => setAttributes({ slideWidth: value })}
                    rangeUnitHandler={(value) => setAttributes({ slideWidthUnits: value })}
                    deviceType={deviceType}
                    units={slideWidthUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />

                <FB_Range
                    min={1}
                    max={1000}
                    label={__("Slide Height", "frontis-blocks")}
                    rangeValue={slideHeight}
                    onChangeHandler={(value) => setAttributes({ slideHeight: value })}
                    rangeUnitHandler={(value) => setAttributes({ slideHeightUnits: value })}
                    deviceType={deviceType}
                    units={slideHeightUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />

                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleSlidePaddingUnitsHandler}
                    spacingUnits={slidePaddingUnits}
                    spacingDesktop={slidePaddingDesktop}
                    spacingTablet={slidePaddingTablet}
                    spacingMobile={slidePaddingMobile}
                    handleSpacingUnitHandler={handleSlidePaddingUnitChange}
                    spacingCombineBtn={slidePaddingLink}
                    spacingCombineBtnHandler={handleSlidePaddingCombineBtn}
                    setAttributes={setAttributes}
                />

                <ToggleControl
                    label={__("Overlay", "frontis-blocks")}
                    checked={sliderOverlaySwitcher}
                    onChange={(value) => setAttributes({ sliderOverlaySwitcher: value })}
                />
                {sliderOverlaySwitcher && (
                    <>
                        <FB_ColorControl
                            label={__("Start Color", "frontis-blocks")}
                            globalColor={sliderOverlayStartColor}
                            setGlobalColor={(value) => setAttributes({ sliderOverlayStartColor: value === undefined ? '' : value })}
                        />
                        <FB_ColorControl 
                            label={__("End Color", "frontis-blocks")}
                            globalColor={sliderOverlayEndColor}
                            setGlobalColor={(value) => setAttributes({ sliderOverlayEndColor: value === undefined ? '' : value })}
                        />
                        <FB_Range
                            min={1}
                            max={sliderOverlayWidthUnits[deviceType] === "%" ? 100 : 1000}
                            label={__("Width", "frontis-blocks")}
                            rangeValue={sliderOverlayWidth}
                            onChangeHandler={(value) => setAttributes({ sliderOverlayWidth: value })}
                            rangeUnitHandler={(value) => setAttributes({ sliderOverlayWidthUnits: value })}
                            deviceType={deviceType}
                            units={sliderOverlayWidthUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={"100"}
                        />
                    </>
                )}
            </PanelBody>
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
                            rangeValue={sliderGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ sliderGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={sliderGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ sliderGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={sliderGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ sliderGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />

                    </PanelBody>

                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleSliderGlobalPaddingUnitsHandler}
                            spacingUnits={sliderGlobalPaddingUnits}
                            spacingDesktop={sliderGlobalPaddingDesktop}
                            spacingTablet={sliderGlobalPaddingTablet}
                            spacingMobile={sliderGlobalPaddingMobile}
                            handleSpacingUnitHandler={handleSliderGlobalPaddingUnitChange}
                            spacingCombineBtn={sliderGlobalPaddingLink}
                            spacingCombineBtnHandler={handleSliderGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleSliderGlobalMarginUnitsHandler}
                            spacingUnits={sliderGlobalMarginUnits}
                            spacingDesktop={sliderGlobalMarginDesktop}
                            spacingTablet={sliderGlobalMarginTablet}
                            spacingMobile={sliderGlobalMarginMobile}
                            handleSpacingUnitHandler={handleSliderGlobalMarginUnitChange}
                            spacingCombineBtn={sliderGlobalMarginLink}
                            spacingCombineBtnHandler={handleSliderGlobalMarginCombineBtn}
                            setAttributes={setAttributes}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Background", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_SwitcherControl
                            label={__("Background Type", "frontis-blocks")}
                            globalSwitcher={sliderGlobalBgColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ sliderGlobalBgColorSwitcher: value })}
                        />

                        {sliderGlobalBgColorSwitcher === 'normal' && ( 
                            <BaseControl
                                className="fb-setting-background-color-setting-wrapper"
                                label={__("Normal Background Type", "frontis-blocks")}
                            >
                                <Dropdown
                                    className="fb-setting-background-color-setting-icon-dropdown"
                                    contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
                                    popoverProps={{ placement: 'bottom-start' }}
                                    renderToggle={({ isOpen, onToggle }) => (
                                        <Button
                                            variant="primary"
                                            onClick={onToggle}
                                            aria-expanded={isOpen}
                                            className="fb-setting-background-color-setting-icon-btn"
                                        >
                                            <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M2.66699 14.666H13.3337" stroke="#1C274C"/>
                                                <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C"/>
                                            </svg>
                                        </Button>
                                    )}
                                    renderContent={() => (
                                        <div className="fb-setting-background-color-popup-wrapper">
                                            <BaseControl
                                                className="fb-setting-background-color-popup-inner-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-background-color-panel-btn">
                                                    {BACKGROUND_TYPES.map((item) => (
                                                        <Button
                                                            key={item.value}
                                                            onClick={() => setAttributes({ sliderGlobalBgNormalBackgroundType: item.value })}
                                                            className={`fb-setting-background-color-panel-btn-switcher ${sliderGlobalBgNormalBackgroundType === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {sliderGlobalBgNormalBackgroundType === 'classic' && (

                                                <>
                                                    <FB_ColorControl
                                                        label={__("Color", "frontis-blocks")}
                                                        globalColor={sliderGlobalBgNormalClassicColor}
                                                        setGlobalColor={(value) => setAttributes({ sliderGlobalBgNormalClassicColor: value === undefined ? '' : value })}
                                                    />

                                                    <FB_ResponsiveBackgroundImageControl
                                                        deviceType={deviceType}
                                                        globalBackgroundImageUrl={sliderGlobalBgNormalBackgroundImageUrl}
                                                        setGlobalBackgroundImageUrl={(value) => setAttributes({ sliderGlobalBgNormalBackgroundImageUrl: value })}
                                                        globalBackgroundImagePosition={sliderGlobalBgNormalBackgroundImagePosition}
                                                        setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ sliderGlobalBgNormalBackgroundImagePosition: newPosition })}
                                                        globalBackgroundImageAttachment={sliderGlobalBgNormalBackgroundImageAttachment}
                                                        setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ sliderGlobalBgNormalBackgroundImageAttachment: newAttachment })}
                                                        globalBackgroundImageRepeat={sliderGlobalBgNormalBackgroundImageRepeat}
                                                        setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ sliderGlobalBgNormalBackgroundImageRepeat: newRepeat })}
                                                        globalBackgroundImageSize={sliderGlobalBgNormalBackgroundImageSize}
                                                        setGlobalBackgroundImageSize={(newSize) => setAttributes({ sliderGlobalBgNormalBackgroundImageSize: newSize })}
                                                        setAttributes={setAttributes}
                                                    />

                                                </>
                                            )}

                                            {sliderGlobalBgNormalBackgroundType === 'gradient' && (
                                                <FB_GradientColorControl
                                                    globalCustomGradientSwitcher={sliderGlobalBgNormalCustomGradientSwitcher}
                                                    setGlobalCustomGradientSwitcher={(value) => setAttributes({ sliderGlobalBgNormalCustomGradientSwitcher: value })}
                                                    globalCustomGradientInputValue={sliderGlobalBgNormalCustomGradientInputValue}
                                                    setGlobalCustomGradientInputValue={(value) => setAttributes({ sliderGlobalBgNormalCustomGradientInputValue: value })}
                                                    globalGradientColor={sliderGlobalBgNormalGradientColor}
                                                    setGlobalGradientColor={(value) => setAttributes({ sliderGlobalBgNormalGradientColor: value === undefined ? null : value })}
                                                />
                                            )}
                                        </div>
                                    )}
                                />
                            </BaseControl>

                        )}

                        {sliderGlobalBgColorSwitcher === 'hover' && (
                            <BaseControl
                                className="fb-setting-background-color-setting-wrapper"
                                label={__("Hover Background Type", "frontis-blocks")}
                            >
                                <Dropdown
                                    className="fb-setting-background-color-setting-icon-dropdown"
                                    contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
                                    popoverProps={{ placement: 'bottom-start' }}
                                    renderToggle={({ isOpen, onToggle }) => (
                                        <Button
                                            variant="primary"
                                            onClick={onToggle}
                                            aria-expanded={isOpen}
                                            className="fb-setting-background-color-setting-icon-btn"
                                        >
                                            <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M2.66699 14.666H13.3337" stroke="#1C274C"/>
                                                <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C"/>
                                            </svg>
                                        </Button>
                                    )}
                                    renderContent={() => (
                                        <div className="fb-setting-background-color-popup-wrapper">
                                            <BaseControl
                                                className="fb-setting-background-color-popup-inner-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-background-color-panel-btn">
                                                    {BACKGROUND_TYPES.map((item) => (
                                                        <Button
                                                            key={item.value}
                                                            onClick={() => setAttributes({ sliderGlobalBgHoverBackgroundType: item.value })}
                                                            className={`fb-setting-background-color-panel-btn-switcher ${sliderGlobalBgHoverBackgroundType === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {sliderGlobalBgHoverBackgroundType === 'classic' && (

                                                <>
                                                    <FB_ColorControl
                                                        label={__("Color", "frontis-blocks")}
                                                        globalColor={sliderGlobalBgHoverClassicColor}
                                                        setGlobalColor={(value) => setAttributes({ sliderGlobalBgHoverClassicColor: value === undefined ? '' : value })}
                                                    />

                                                    <FB_ResponsiveBackgroundImageControl
                                                        deviceType={deviceType}
                                                        globalBackgroundImageUrl={sliderGlobalBgHoverBackgroundImageUrl}
                                                        setGlobalBackgroundImageUrl={(value) => setAttributes({ sliderGlobalBgHoverBackgroundImageUrl: value })}
                                                        globalBackgroundImagePosition={sliderGlobalBgHoverBackgroundImagePosition}
                                                        setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ sliderGlobalBgHoverBackgroundImagePosition: newPosition })}
                                                        globalBackgroundImageAttachment={sliderGlobalBgHoverBackgroundImageAttachment}
                                                        setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ sliderGlobalBgHoverBackgroundImageAttachment: newAttachment })}
                                                        globalBackgroundImageRepeat={sliderGlobalBgHoverBackgroundImageRepeat}
                                                        setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ sliderGlobalBgHoverBackgroundImageRepeat: newRepeat })}
                                                        globalBackgroundImageSize={sliderGlobalBgHoverBackgroundImageSize}
                                                        setGlobalBackgroundImageSize={(newSize) => setAttributes({ sliderGlobalBgHoverBackgroundImageSize: newSize })}
                                                        setAttributes={setAttributes}
                                                    />

                                                </>
                                            )}

                                            {sliderGlobalBgHoverBackgroundType === 'gradient' && (
                                                <FB_GradientColorControl
                                                    globalCustomGradientSwitcher={sliderGlobalBgHoverCustomGradientSwitcher}
                                                    setGlobalCustomGradientSwitcher={(value) => setAttributes({ sliderGlobalBgHoverCustomGradientSwitcher: value })}
                                                    globalCustomGradientInputValue={sliderGlobalBgHoverCustomGradientInputValue}
                                                    setGlobalCustomGradientInputValue={(value) => setAttributes({ sliderGlobalBgHoverCustomGradientInputValue: value })}
                                                    globalGradientColor={sliderGlobalBgHoverGradientColor}
                                                    setGlobalGradientColor={(value) => setAttributes({ sliderGlobalBgHoverGradientColor: value === undefined ? null : value })}
                                                />
                                            )}
                                        </div>
                                    )}
                                />
                            </BaseControl>
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Border and Shadow", "frontis-blocks")}
                        initialOpen={false}
                    >

                        <SelectControl
                                label={__("Border Style", "frontis-blocks")}
                                value={sliderGlobalBorder}
                                options={BORDER_STYLES}
                                onChange={(value) => setAttributes({ sliderGlobalBorder: value })}
                        />


                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={sliderGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ sliderGlobalBorderColorSwitcher: value })}
                        />

                        {sliderGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={sliderGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ sliderGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {sliderGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={sliderGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ sliderGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleSliderGlobalBorderUnitsHandler}
                            spacingUnits={sliderGlobalBorderUnits}
                            spacingDesktop={sliderGlobalBorderDesktop}
                            spacingTablet={sliderGlobalBorderTablet}
                            spacingMobile={sliderGlobalBorderMobile}
                            handleSpacingUnitHandler={handleSliderGlobalBorderUnitChange}
                            spacingCombineBtn={sliderGlobalBorderLink}
                            spacingCombineBtnHandler={handleSliderGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleSliderGlobalBorderRadiusUnitsHandler}
                            spacingUnits={sliderGlobalBorderRadiusUnits}
                            spacingDesktop={sliderGlobalBorderRadiusDesktop}
                            spacingTablet={sliderGlobalBorderRadiusTablet}
                            spacingMobile={sliderGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleSliderGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={sliderGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleSliderGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={sliderGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ sliderGlobalBoxShadowSwitcher: value })}
                        />

                        {sliderGlobalBoxShadowSwitcher === 'normal' && (
                            <FB_BoxShadowControl
                                label={__("Normal Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ sliderGlobalBoxShadowValues: value })}
                                initialShadowValue={sliderGlobalBoxShadowValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ sliderGlobalBoxShadowCssValue: value })}
                            />
                        )}

                        {sliderGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ sliderGlobalBoxShadowHoverValues: value })}
                                initialShadowValue={sliderGlobalBoxShadowHoverValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ sliderGlobalBoxShadowHoverCssValue: value })}
                            />
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor
                            value={sliderGlobalCustomCSS}
                            onChangeValue={(value) => setAttributes({ sliderGlobalCustomCSS: value })}
                        />
                    </PanelBody>
                </div>
            </div>
		</>
	);



    /**
     * Get background normal styles
     */
	const getBackgroundNormalStyles = (device) => {
		const bgType = sliderGlobalBgNormalBackgroundType; 
		const bgColor = sliderGlobalBgNormalClassicColor;
		const bgGradient = sliderGlobalBgNormalGradientColor;
		const customGradient = sliderGlobalBgNormalCustomGradientInputValue;
		const customGradientEnabled = sliderGlobalBgNormalCustomGradientSwitcher;

		const bgImageUrl = sliderGlobalBgNormalBackgroundImageUrl?.[device];
		const bgImagePosition = sliderGlobalBgNormalBackgroundImagePosition?.[device];
		const bgAttachment = sliderGlobalBgNormalBackgroundImageAttachment?.[device];
		const bgRepeat = sliderGlobalBgNormalBackgroundImageRepeat?.[device];
		const bgSize = sliderGlobalBgNormalBackgroundImageSize?.[device];

		if (bgType === 'gradient') {
			return {
				background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
			};
		}

		let styles = { background: bgColor };

		if (bgType !== 'gradient' && bgImageUrl) {
			styles = {
				...styles,
				'background-image': `url(${bgImageUrl})`,
				'background-position': bgImagePosition
					? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
					: "50% 50%",
				'background-attachment': bgAttachment || undefined,
				'background-repeat': bgRepeat || undefined,
				'background-size': bgSize || undefined,
			};
		}

		return styles;
	};

	/**
	 * Get background hover styles
	 */
	const getBackgroundHoverStyles = (device) => {
		const bgType = sliderGlobalBgHoverBackgroundType;
		const bgColor = sliderGlobalBgHoverClassicColor;
		const bgGradient = sliderGlobalBgHoverGradientColor;
		const customGradient = sliderGlobalBgHoverCustomGradientInputValue;
		const customGradientEnabled = sliderGlobalBgHoverCustomGradientSwitcher;

		const bgImageUrl = sliderGlobalBgHoverBackgroundImageUrl?.[device];
		const bgImagePosition = sliderGlobalBgHoverBackgroundImagePosition?.[device];
		const bgAttachment = sliderGlobalBgHoverBackgroundImageAttachment?.[device];
		const bgRepeat = sliderGlobalBgHoverBackgroundImageRepeat?.[device];
		const bgSize = sliderGlobalBgHoverBackgroundImageSize?.[device];

		if (bgType === 'gradient') {
			return {
				background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
			};
		}

		let styles = { background: bgColor };

		if (bgType !== 'gradient' && bgImageUrl) {
			styles = {
				...styles,
				'background-image': `url(${bgImageUrl})`,
				'background-position': bgImagePosition
					? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
					: "50% 50%",
				'background-attachment': bgAttachment || undefined,
				'background-repeat': bgRepeat || undefined,
				'background-size': bgSize || undefined,
			};
		}

		return styles;
	};


    /**
     * Convert object to string
     */
    const backgroundStyleObjectToString = (styleObj) =>
        Object.entries(styleObj)
          .map(([key, value]) => `${key}: ${value};`)
          .join(' ');


    const desktopBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Desktop'));
    const desktopBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Desktop'));
    const tabletBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Tablet'));
    const tabletBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Tablet'));
    const mobileBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Mobile'));
    const mobileBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Mobile'));

    /** Start All Block Style */
    const allBlockStyle = useMemo(() => `

        .${blockId}.fb-marquee-slider-container {
            width: 100%;
            ${desktopBackgroundNormalStyles}
            ${globalDesktopPaddingWidth && sliderGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPaddingWidth};` : ''} 
            ${globalDesktopMarginWidth && sliderGlobalMarginDesktop?.top ? `margin: ${globalDesktopMarginWidth};` : ''} 
            ${sliderGlobalBorder ? `border: ${sliderGlobalBorder};` : ''} 
            ${globalDesktopBorderWidth && sliderGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''} 
            ${globalDesktopBorderRadiusWidth && sliderGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''} 
            ${sliderGlobalBorderColor ? `border-color: ${sliderGlobalBorderColor};` : ''}
            ${sliderGlobalBoxShadowCssValue ? `box-shadow: ${sliderGlobalBoxShadowCssValue};` : ''}
            ${sliderGlobalZIndex.Desktop ? `z-index: ${sliderGlobalZIndex.Desktop};` : ''}
            transition: all .3s ease-in-out;
            position: relative;
        }
        .${blockId}.fb-marquee-slider-container:hover {
            ${desktopBackgroundHoverStyles}
            ${sliderGlobalBorderHoverColor ? `border-color: ${sliderGlobalBorderHoverColor};` : ''}
            ${sliderGlobalBoxShadowHoverCssValue ? `box-shadow: ${sliderGlobalBoxShadowHoverCssValue};` : ''}
        }

        .${blockId} .fb-marquee-swiper .swiper-wrapper .swiper-slide{
          ${slideWidth.Desktop && slideWidthUnits.Desktop ? `width: ${slideWidth.Desktop}${slideWidthUnits.Desktop} !important;` : ''}  
          ${slideHeight.Desktop && slideHeightUnits.Desktop ? `height: ${slideHeight.Desktop}${slideHeightUnits.Desktop} !important;` : ''}
          ${slideDesktopPaddingWidth && slidePaddingDesktop?.top ? `padding: ${slideDesktopPaddingWidth} !important;` : ''}
        }

        ${sliderOverlaySwitcher ? `
        .${blockId} .fb-marquee-swiper::before {
            left: 0;
            background: linear-gradient(to right, ${sliderOverlayStartColor} 0%, ${sliderOverlayEndColor} 100%) !important;
            width: ${sliderOverlayWidth.Desktop}${sliderOverlayWidthUnits.Desktop} !important;
        }

        .${blockId} .fb-marquee-swiper::after {
            right: 0;
            background: linear-gradient(to left, ${sliderOverlayStartColor} 0%, ${sliderOverlayEndColor} 100%) !important;
            width: ${sliderOverlayWidth.Desktop}${sliderOverlayWidthUnits.Desktop} !important;
        }
        ` : ''}

        @media only screen and (max-width: 1024px) {

            .${blockId}.fb-marquee-slider-container { 
                ${tabletBackgroundNormalStyles}
                ${globalTabletPaddingWidth && sliderGlobalPaddingTablet?.top ? `padding: ${globalTabletPaddingWidth};` : ''}  
                ${globalTabletMarginWidth && sliderGlobalMarginTablet?.top ? `margin: ${globalTabletMarginWidth};` : ''} 
                ${globalTabletBorderWidth && sliderGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''} 
                ${sliderGlobalZIndex.Tablet ? `z-index: ${sliderGlobalZIndex.Tablet};` : ''}
            }
            .${blockId}.fb-marquee-slider-container:hover { 
                ${tabletBackgroundHoverStyles}
            }
 
            .${blockId} .swiper-slide { 
                ${slideWidth.Tablet && slideWidthUnits.Tablet ? `width: ${slideWidth.Tablet}${slideWidthUnits.Tablet} !important;` : ''}  
                ${slideHeight.Tablet && slideHeightUnits.Tablet ? `height: ${slideHeight.Tablet}${slideHeightUnits.Tablet} !important;` : ''}
                ${slideTabletPaddingWidth && slidePaddingTablet?.top ? `padding: ${slideTabletPaddingWidth} !important;` : ''}
            }
        }
        @media only screen and (max-width: 767px) {
            .${blockId}.fb-marquee-slider-container { 
                ${mobileBackgroundNormalStyles}
                ${globalMobilePaddingWidth && sliderGlobalPaddingMobile?.top ? `padding: ${globalMobilePaddingWidth};` : ''}  
                ${globalMobileMarginWidth && sliderGlobalMarginMobile?.top ? `margin: ${globalMobileMarginWidth};` : ''} 
                ${globalMobileBorderWidth && sliderGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''} 
                ${sliderGlobalZIndex.Mobile ? `z-index: ${sliderGlobalZIndex.Mobile};` : ''}
            }
            .${blockId}.fb-marquee-slider-container:hover { 
                ${mobileBackgroundHoverStyles}
            }

            .${blockId} .swiper-slide {
                ${slideWidth.Mobile && slideWidthUnits.Mobile ? `width: ${slideWidth.Mobile}${slideWidthUnits.Mobile} !important;` : ''}  
                ${slideHeight.Mobile && slideHeightUnits.Mobile ? `height: ${slideHeight.Mobile}${slideHeightUnits.Mobile} !important;` : ''}
                ${slideMobilePaddingWidth && slidePaddingMobile?.top ? `padding: ${slideMobilePaddingWidth} !important;` : ''}
            }
        }
    `, [
        blockId,
        slideWidth,
        slideWidthUnits,
        slideHeight,
        slideHeightUnits,

        slidePaddingUnits,
        slidePaddingDesktop,
        slidePaddingTablet,
        slidePaddingMobile,
        slidePaddingLink,
        slideDesktopPaddingWidth,
        slideTabletPaddingWidth,
        slideMobilePaddingWidth,

        sliderOverlaySwitcher,
        sliderOverlayStartColor,
        sliderOverlayEndColor,
        sliderOverlayWidth,
        sliderOverlayWidthUnits,

        sliderGlobalZIndex,
        sliderGlobalWraperID,
        sliderGlobalWraperClass,

        sliderGlobalPaddingUnits,
        sliderGlobalPaddingDesktop,
        sliderGlobalPaddingTablet,
        sliderGlobalPaddingMobile,
        sliderGlobalPaddingLink,
        globalDesktopPaddingWidth,
        globalTabletPaddingWidth,
        globalMobilePaddingWidth,

        sliderGlobalMarginUnits,
        sliderGlobalMarginDesktop,
        sliderGlobalMarginTablet,
        sliderGlobalMarginMobile,
        sliderGlobalMarginLink,
        globalDesktopMarginWidth,
        globalTabletMarginWidth,
        globalMobileMarginWidth,

        sliderGlobalBgColorSwitcher,
        sliderGlobalBgNormalBackgroundType,
        sliderGlobalBgNormalClassicColor,
        sliderGlobalBgNormalGradientColor,
        sliderGlobalBgNormalCustomGradientSwitcher,
        sliderGlobalBgNormalCustomGradientInputValue,
        sliderGlobalBgNormalBackgroundImageUrl,
        sliderGlobalBgNormalBackgroundImagePosition,
        sliderGlobalBgNormalBackgroundImageAttachment,
        sliderGlobalBgNormalBackgroundImageRepeat,
        sliderGlobalBgNormalBackgroundImageSize,

        sliderGlobalBgHoverBackgroundType,
        sliderGlobalBgHoverClassicColor,
        sliderGlobalBgHoverGradientColor,
        sliderGlobalBgHoverCustomGradientSwitcher,
        sliderGlobalBgHoverCustomGradientInputValue,
        sliderGlobalBgHoverBackgroundImageUrl,
        sliderGlobalBgHoverBackgroundImagePosition,
        sliderGlobalBgHoverBackgroundImageAttachment,
        sliderGlobalBgHoverBackgroundImageRepeat,
        sliderGlobalBgHoverBackgroundImageSize,

        sliderGlobalBorder,
        sliderGlobalBorderColorSwitcher,
        sliderGlobalBorderColor,
        sliderGlobalBorderHoverColor,
        sliderGlobalBorderUnits,
        sliderGlobalBorderDesktop,
        sliderGlobalBorderTablet,
        sliderGlobalBorderMobile,
        sliderGlobalBorderLink,
        globalDesktopBorderWidth,
        globalTabletBorderWidth,
        globalMobileBorderWidth,

        sliderGlobalBorderRadiusUnits,
        sliderGlobalBorderRadiusDesktop,
        sliderGlobalBorderRadiusTablet,
        sliderGlobalBorderRadiusMobile,
        sliderGlobalBorderRadiusLink,
        globalDesktopBorderRadiusWidth,
        globalTabletBorderRadiusWidth,
        globalMobileBorderRadiusWidth,

        sliderGlobalBoxShadowSwitcher,
        sliderGlobalBoxShadowValues,
        sliderGlobalBoxShadowCssValue,
        sliderGlobalBoxShadowHoverValues,
        sliderGlobalBoxShadowHoverCssValue,

        sliderGlobalCustomCSS,

    ]);

    const customCss = getCustomCss(sliderGlobalCustomCSS, `.${blockId}`);
    
    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim()}); 
    }, [allBlockStyle, customCss]);

    const editorStyle = `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();


    return (

        <>
            <style>
            	{editorStyle}
            </style>

            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}
