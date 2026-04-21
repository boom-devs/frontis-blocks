import { __, sprintf } from '@wordpress/i18n';
import { useState, useEffect, memo } from '@wordpress/element';

import {
    SelectControl,
    PanelBody,
    TabPanel,
    BaseControl,
    Button,
    ButtonGroup,
    ToggleControl,
    TextControl,
    TextareaControl,
    Dropdown,
    Dashicon,
    RangeControl,
    ColorPicker,
    ColorPalette,
} from '@wordpress/components';

import {
    TEXT_ALIGN,
    ICON_IMAGE_ALIGN,
    FLEX_ALIGN,
    BORDER_STYLES,
    OVERFLOW_OP,
    IMAGE_OBJECT_FIT,
} from '@Constants/fbConstants';

import FB_Range from '@Components/range';
import FB_Spacing from '@Components/spacing';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_ColorControl from '@Components/color-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import getProToggleControls from '@Utils/getProToggleControls';
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import getProActive from '@Utils/getProActive';
import './editor.scss';

const Inspector = ({ attributes, setAttributes, handleAddCardItem, cardItemCount = 0 }) => {
	const {
		blockID,
		blockStyle,

		stackCardsDesktopSwitcher,
		stackCardsTabletSwitcher,
		stackCardsMobileSwitcher,

		stackCardsCustomCSS,
		stackCardsGlobalWraperID,
		stackCardsGlobalWraperClass,

		stackCardsGlobalZIndex,
        stackCardsOverflow,
        stackCardsGlobalPaddingUnits,
        stackCardsGlobalPaddingDesktop,
        stackCardsGlobalPaddingTablet,
        stackCardsGlobalPaddingMobile,
        stackCardsGlobalPaddingLink,
        stackCardsGlobalMarginUnits,
        stackCardsGlobalMarginDesktop,
        stackCardsGlobalMarginTablet,
        stackCardsGlobalMarginMobile,
        stackCardsGlobalMarginLink,

        stackCardsGlobalBgColorSwitcher,
        stackCardsGlobalBgNormalBackgroundType,
        stackCardsGlobalBgNormalClassicColor,
        stackCardsGlobalBgNormalGradientColor,
        stackCardsGlobalBgNormalCustomGradientSwitcher,
        stackCardsGlobalBgNormalCustomGradientInputValue,
        stackCardsGlobalBgHoverBackgroundType,
        stackCardsGlobalBgHoverClassicColor,
        stackCardsGlobalBgHoverGradientColor,
        stackCardsGlobalBgHoverCustomGradientSwitcher,
        stackCardsGlobalBgHoverCustomGradientInputValue,

        stackCardsGlobalBorder,
        stackCardsGlobalBorderColor,
        stackCardsGlobalBorderHoverColor,
        stackCardsGlobalBorderColorSwitcher,

        stackCardsGlobalBorderUnits,
        stackCardsGlobalBorderDesktop,
        stackCardsGlobalBorderTablet,
        stackCardsGlobalBorderMobile,
        stackCardsGlobalBorderLink,

        stackCardsGlobalBorderRadiusUnits,
        stackCardsGlobalBorderRadiusDesktop,
        stackCardsGlobalBorderRadiusTablet,
        stackCardsGlobalBorderRadiusMobile,
        stackCardsGlobalBorderRadiusLink,

        stackCardsGlobalBoxShadowSwitcher,
        stackCardsGlobalBoxShadowValues,
        stackCardsGlobalBoxShadowCssValue,
        stackCardsGlobalBoxShadowHoverValues,
        stackCardsGlobalBoxShadowHoverCssValue,

        // Position
        stackCardsPositionType,
        stackCardsHZOrientationType,
        stackCardsVROrientationType,
        stackCardsHZLeftOffset,
        stackCardsHZLeftOffsetUnits,
        stackCardsHZRightOffset,
        stackCardsHZRightOffsetUnits,
        stackCardsVRTopOffset,
        stackCardsVRTopOffsetUnits,
        stackCardsVRBottomOffset,
        stackCardsVRBottomOffsetUnits,

	} = attributes;

	const deviceType = useDeviceType();

	/** Start Global padding */
    const handleGlobalPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (stackCardsGlobalPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        stackCardsGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        stackCardsGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        stackCardsGlobalPaddingMobile: {
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
                    setAttributes({ stackCardsGlobalPaddingDesktop: { ...stackCardsGlobalPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ stackCardsGlobalPaddingTablet: { ...stackCardsGlobalPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ stackCardsGlobalPaddingMobile: { ...stackCardsGlobalPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes({ stackCardsGlobalPaddingLink: !stackCardsGlobalPaddingLink });
    }

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes({
            stackCardsGlobalPaddingUnits: {
                ...stackCardsGlobalPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global Padding */

	/** Start Global Margin */
    const handleGlobalMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (stackCardsGlobalMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        stackCardsGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        stackCardsGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        stackCardsGlobalMarginMobile: {
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
                    setAttributes({ stackCardsGlobalMarginDesktop: { ...stackCardsGlobalMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ stackCardsGlobalMarginTablet: { ...stackCardsGlobalMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ stackCardsGlobalMarginMobile: { ...stackCardsGlobalMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalMarginCombineBtn = () => {
        setAttributes({ stackCardsGlobalMarginLink: !stackCardsGlobalMarginLink });
    }

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes({
            stackCardsGlobalMarginUnits: {
                ...stackCardsGlobalMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global Margin */

    /** Start Global border */
    const handleGlobalBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (stackCardsGlobalBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        stackCardsGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        stackCardsGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        stackCardsGlobalBorderMobile: {
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
                    setAttributes({ stackCardsGlobalBorderDesktop: { ...stackCardsGlobalBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ stackCardsGlobalBorderTablet: { ...stackCardsGlobalBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ stackCardsGlobalBorderMobile: { ...stackCardsGlobalBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes({ stackCardsGlobalBorderLink: !stackCardsGlobalBorderLink });
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes({
            stackCardsGlobalBorderUnits: {
                ...stackCardsGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global border */

    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (stackCardsGlobalBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        stackCardsGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        stackCardsGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        stackCardsGlobalBorderRadiusMobile: {
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
                    setAttributes({ stackCardsGlobalBorderRadiusDesktop: { ...stackCardsGlobalBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ stackCardsGlobalBorderRadiusTablet: { ...stackCardsGlobalBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ stackCardsGlobalBorderRadiusMobile: { ...stackCardsGlobalBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes({ stackCardsGlobalBorderRadiusLink: !stackCardsGlobalBorderRadiusLink });
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            stackCardsGlobalBorderRadiusUnits: {
                ...stackCardsGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */

	/**
     * Inspector General Controls
     */
	const generalControls = (
		<>
			<div className="fb-setting-general-tab-wrapper">
				<div className="fb-setting-inner-wrapper">
					<PanelBody
						title={__("Card Items", "frontis-blocks")}
						initialOpen={true}
					>
						<p className="fb-stack-cards-inspector-note">
							{sprintf(
								/* translators: %d: current card item count */
								__('%d card items are currently available in the editor.', 'frontis-blocks'),
								cardItemCount
							)}
						</p>
						<Button
							variant="primary"
							className="fb-stack-cards-add-item-button"
							onClick={handleAddCardItem}
						>
							{__("Add New Card Item", "frontis-blocks")}
						</Button>
					</PanelBody>
				</div>
			</div>
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
                            rangeValue={stackCardsGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ stackCardsGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}
                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={stackCardsOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ stackCardsOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={stackCardsPositionType}
                            setPositionType={(value) => setAttributes({ stackCardsPositionType: value })}

                            HZOrientationType={stackCardsHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ stackCardsHZOrientationType: value })
                            }
                            VROrientationType={stackCardsVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ stackCardsVROrientationType: value })
                            }

                            HZLeftOffset={stackCardsHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ stackCardsHZLeftOffset: value })}
                            HZLeftOffsetUnits={stackCardsHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ stackCardsHZLeftOffsetUnits: value })}
                            HZRightOffset={stackCardsHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ stackCardsHZRightOffset: value })}
                            HZRightOffsetUnits={stackCardsHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ stackCardsHZRightOffsetUnits: value })}

                            VRTopOffset={stackCardsVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ stackCardsVRTopOffset: value })}
                            VRTopOffsetUnits={stackCardsVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ stackCardsVRTopOffsetUnits: value })}
                            VRBottomOffset={stackCardsVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ stackCardsVRBottomOffset: value })}
                            VRBottomOffsetUnits={stackCardsVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ stackCardsVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={stackCardsGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ stackCardsGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={stackCardsGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ stackCardsGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Background Color", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_BackgroundColorControl
                            label={__("Background Color", "frontis-blocks")}
                            bgColorSwitcher={stackCardsGlobalBgColorSwitcher}
                            setBgColorSwitcher={(value) => setAttributes({ stackCardsGlobalBgColorSwitcher: value })}

                            normalBackgroundType={stackCardsGlobalBgNormalBackgroundType}
                            setNormalBackgroundType={(value) => setAttributes({ stackCardsGlobalBgNormalBackgroundType: value })}
                            normalClassicColor={stackCardsGlobalBgNormalClassicColor}
                            setNormalClassicColor={(value) => setAttributes({ stackCardsGlobalBgNormalClassicColor: value === undefined ? '' : value })}
                            normalGradientColor={stackCardsGlobalBgNormalGradientColor}
                            setNormalGradientColor={(value) => setAttributes({ stackCardsGlobalBgNormalGradientColor: value === undefined ? '' : value })}
                            normalCustomGradientSwitcher={stackCardsGlobalBgNormalCustomGradientSwitcher}
                            setNormalCustomGradientSwitcher={(value) => setAttributes({ stackCardsGlobalBgNormalCustomGradientSwitcher: value })}
                            normalCustomGradientInputValue={stackCardsGlobalBgNormalCustomGradientInputValue}
                            setNormalCustomGradientInputValue={(value) => setAttributes({ stackCardsGlobalBgNormalCustomGradientInputValue: value })}

                            hoverBackgroundType={stackCardsGlobalBgHoverBackgroundType}
                            setHoverBackgroundType={(value) => setAttributes({ stackCardsGlobalBgHoverBackgroundType: value })}
                            hoverClassicColor={stackCardsGlobalBgHoverClassicColor}
                            setHoverClassicColor={(value) => setAttributes({ stackCardsGlobalBgHoverClassicColor: value === undefined ? '' : value })}
                            hoverGradientColor={stackCardsGlobalBgHoverGradientColor}
                            setHoverGradientColor={(value) => setAttributes({ stackCardsGlobalBgHoverGradientColor: value === undefined ? '' : value })}
                            hoverCustomGradientSwitcher={stackCardsGlobalBgHoverCustomGradientSwitcher}
                            setHoverCustomGradientSwitcher={(value) => setAttributes({ stackCardsGlobalBgHoverCustomGradientSwitcher: value })}
                            hoverCustomGradientInputValue={stackCardsGlobalBgHoverCustomGradientInputValue}
                            setHoverCustomGradientInputValue={(value) => setAttributes({ stackCardsGlobalBgHoverCustomGradientInputValue: value })}

                            isBackgroundImage={false}
                        />
                    </PanelBody>

                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                            spacingUnits={stackCardsGlobalPaddingUnits}
                            spacingDesktop={stackCardsGlobalPaddingDesktop}
                            spacingTablet={stackCardsGlobalPaddingTablet}
                            spacingMobile={stackCardsGlobalPaddingMobile}
                            handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                            spacingCombineBtn={stackCardsGlobalPaddingLink}
                            spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                            spacingUnits={stackCardsGlobalMarginUnits}
                            spacingDesktop={stackCardsGlobalMarginDesktop}
                            spacingTablet={stackCardsGlobalMarginTablet}
                            spacingMobile={stackCardsGlobalMarginMobile}
                            handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                            spacingCombineBtn={stackCardsGlobalMarginLink}
                            spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                            setAttributes={setAttributes}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Border and Shadow", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Border Style", "frontis-blocks")}
                            value={stackCardsGlobalBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ stackCardsGlobalBorder: value })}
                        />

                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={stackCardsGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ stackCardsGlobalBorderColorSwitcher: value })}
                        />

                        {stackCardsGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={stackCardsGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ stackCardsGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {stackCardsGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={stackCardsGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ stackCardsGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                            spacingUnits={stackCardsGlobalBorderUnits}
                            spacingDesktop={stackCardsGlobalBorderDesktop}
                            spacingTablet={stackCardsGlobalBorderTablet}
                            spacingMobile={stackCardsGlobalBorderMobile}
                            handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                            spacingCombineBtn={stackCardsGlobalBorderLink}
                            spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                            spacingUnits={stackCardsGlobalBorderRadiusUnits}
                            spacingDesktop={stackCardsGlobalBorderRadiusDesktop}
                            spacingTablet={stackCardsGlobalBorderRadiusTablet}
                            spacingMobile={stackCardsGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={stackCardsGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={stackCardsGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ stackCardsGlobalBoxShadowSwitcher: value })}
                        />

                        {stackCardsGlobalBoxShadowSwitcher === 'normal' && (
                            <FB_BoxShadowControl
                                label={__("Normal Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ stackCardsGlobalBoxShadowValues: value })}
                                initialShadowValue={stackCardsGlobalBoxShadowValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ stackCardsGlobalBoxShadowCssValue: value })}
                            />
                        )}

                        {stackCardsGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ stackCardsGlobalBoxShadowHoverValues: value })}
                                initialShadowValue={stackCardsGlobalBoxShadowHoverValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ stackCardsGlobalBoxShadowHoverCssValue: value })}
                            />
                        )}

                    </PanelBody>

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={stackCardsDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ stackCardsDesktopSwitcher: value })}

                            tabletValue={stackCardsTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ stackCardsTabletSwitcher: value })}

                            mobileValue={stackCardsMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ stackCardsMobileSwitcher: value })}
                        />

                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor
                            value={stackCardsCustomCSS}
                            onChangeValue={(value) => setAttributes({ stackCardsCustomCSS: value })}
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
