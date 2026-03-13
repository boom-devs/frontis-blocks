import { __ } from "@wordpress/i18n";

import { InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";

import {
	SelectControl,
	PanelBody,
	TabPanel,
	BaseControl,
	riveAnimation,
	riveAnimationGroup,
	ToggleControl,
	TextControl,
	TextareaControl,
	Dropdown,
	Dashicon,
	RangeControl,
	Button,
	ColorPicker,
	ColorPalette,
} from "@wordpress/components";

/**
 * Internal depencencies
 */
import {
	ICON_ALIGN,
	BORDER_STYLES,
	ICON_POSITION,
	PRESETS,
	OVERFLOW_OP,
	RIVE_RENDER_TYPE,
} from "../../fbConstants/fbConstants";

import { useState, useEffect, useMemo, memo } from "@wordpress/element";
import "./editor.scss";
import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_ImageControl from '@Components/image-control';
import FB_UrlControl from '@Components/url-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import getProToggleControls from '@Utils/getProToggleControls';
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import generateSvgIcon from '@Utils/generateSvgIcon';
import getProActive from '@Utils/getProActive';

const Inspector = ({ attributes, setAttributes }) => {
	const {
		blockID,
		riveAnimationJsonTypeSwitcher,
		riveAnimationImageUrl,
		riveAnimationImageAlt,
		riveAnimationImageID,
		riveAnimationJsonUrl,
		riveAnimationJsonTargetUrl,
		riveAnimationGlobalWraperCustomCSS,
		riveRenderer,
		riveLoop,
		riveAutoplay,
		riveAnimationSpeed,
		riveEffectsOnHover,
		riveAnimationReverse,
		riveAnimationGlobalWraperClass,
		riveAnimationGlobalWraperID,
		riveAnimationMobileSwitcher,
		riveAnimationTabletSwitcher,
		riveAnimationDesktopSwitcher,
		riveAnimationGlobalZIndex,
		riveAnimationOverflow,
		riveAnimationContainerHeight,
		riveAnimationContainerHeightUnits,
		riveAnimationContainerWidth,
		riveAnimationContainerWidthUnits,
		riveAnimationNormalOpacity,
		riveAnimationHoverOpacity,
		riveOpacitySwitcher,
		// Padding
		riveAnimationGlobalPaddingUnits,
		riveAnimationGlobalPaddingDesktop,
		riveAnimationGlobalPaddingTablet,
		riveAnimationGlobalPaddingMobile,
		riveAnimationGlobalPaddingLink,

		// Margin
		riveAnimationGlobalMarginUnits,
		riveAnimationGlobalMarginDesktop,
		riveAnimationGlobalMarginTablet,
		riveAnimationGlobalMarginMobile,
		riveAnimationGlobalMarginLink,

		// Background
		riveAnimationGlobalBgColorSwitcher,
		riveAnimationGlobalNormalBackgroundType,
		riveAnimationGlobalNormalClassicColor,
		riveAnimationGlobalNormalGradientColor,
		riveAnimationGlobalNormalCustomGradientSwitcher,
		riveAnimationGlobalNormalCustomGradientInputValue,

		riveAnimationGlobalHoverBackgroundType,
		riveAnimationGlobalHoverClassicColor,
		riveAnimationGlobalHoverGradientColor,
		riveAnimationGlobalHoverCustomGradientSwitcher,
		riveAnimationGlobalHoverCustomGradientInputValue,

		// Border
		riveAnimationGlobalBorder,
		riveAnimationGlobalBorderColorSwitcher,
		riveAnimationGlobalBorderColor,
		riveAnimationGlobalBorderHoverColor,
		riveAnimationGlobalBorderUnits,
		riveAnimationGlobalBorderDesktop,
		riveAnimationGlobalBorderTablet,
		riveAnimationGlobalBorderMobile,
		riveAnimationGlobalBorderLink,

		// Border Radius
		riveAnimationGlobalBorderRadiusUnits,
		riveAnimationGlobalBorderRadiusDesktop,
		riveAnimationGlobalBorderRadiusTablet,
		riveAnimationGlobalBorderRadiusMobile,
		riveAnimationGlobalBorderRadiusLink,

		// Box Shadow
		riveAnimationGlobalBoxShadowSwitcher,
		riveAnimationGlobalBoxShadowValues,
		riveAnimationGlobalBoxShadowCssValue,
		riveAnimationGlobalBoxShadowHoverValues,
		riveAnimationGlobalBoxShadowHoverCssValue,
		riveAnimationPositionType,
		riveAnimationHZOrientationType,
		riveAnimationVROrientationType,

		riveAnimationHZLeftOffset,
		riveAnimationHZLeftOffsetUnits,

		riveAnimationHZRightOffset,
		riveAnimationHZRightOffsetUnits,

		riveAnimationVRTopOffset,
		riveAnimationVRTopOffsetUnits,

		riveAnimationVRBottomOffset,
		riveAnimationVRBottomOffsetUnits,

		//canvas width and height
		riveAnimationCanvasWidth,
		riveAnimationCanvasHeight,
		riveAnimationCanvasHeightUnits,
		riveAnimationCanvasWidthUnits,
	} = attributes;

	const deviceType = useDeviceType();

	/** Start Global padding */
	const handleGlobalPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (riveAnimationGlobalPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						riveAnimationGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						riveAnimationGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						riveAnimationGlobalPaddingMobile: {
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
					setAttributes({ riveAnimationGlobalPaddingDesktop: { ...riveAnimationGlobalPaddingDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ riveAnimationGlobalPaddingTablet: { ...riveAnimationGlobalPaddingTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ riveAnimationGlobalPaddingMobile: { ...riveAnimationGlobalPaddingMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes({ riveAnimationGlobalPaddingLink: !riveAnimationGlobalPaddingLink });
	}

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes({
			riveAnimationGlobalPaddingUnits: {
				...riveAnimationGlobalPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Global Padding */

	/** Start Global Margin */
	const handleGlobalMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (riveAnimationGlobalMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						riveAnimationGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						riveAnimationGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						riveAnimationGlobalMarginMobile: {
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
					setAttributes({ riveAnimationGlobalMarginDesktop: { ...riveAnimationGlobalMarginDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ riveAnimationGlobalMarginTablet: { ...riveAnimationGlobalMarginTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ riveAnimationGlobalMarginMobile: { ...riveAnimationGlobalMarginMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalMarginCombineBtn = () => {
		setAttributes({ riveAnimationGlobalMarginLink: !riveAnimationGlobalMarginLink });
	}

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes({
			riveAnimationGlobalMarginUnits: {
				...riveAnimationGlobalMarginUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (riveAnimationGlobalBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						riveAnimationGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						riveAnimationGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						riveAnimationGlobalBorderMobile: {
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
					setAttributes({ riveAnimationGlobalBorderDesktop: { ...riveAnimationGlobalBorderDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ riveAnimationGlobalBorderTablet: { ...riveAnimationGlobalBorderTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ riveAnimationGlobalBorderMobile: { ...riveAnimationGlobalBorderMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderCombineBtn = () => {
		setAttributes({ riveAnimationGlobalBorderLink: !riveAnimationGlobalBorderLink });
	}

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes({
			riveAnimationGlobalBorderUnits: {
				...riveAnimationGlobalBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Border */

	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (riveAnimationGlobalBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						riveAnimationGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						riveAnimationGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						riveAnimationGlobalBorderRadiusMobile: {
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
					setAttributes({ riveAnimationGlobalBorderRadiusDesktop: { ...riveAnimationGlobalBorderRadiusDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ riveAnimationGlobalBorderRadiusTablet: { ...riveAnimationGlobalBorderRadiusTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ riveAnimationGlobalBorderRadiusMobile: { ...riveAnimationGlobalBorderRadiusMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes({ riveAnimationGlobalBorderRadiusLink: !riveAnimationGlobalBorderRadiusLink });
	}

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			riveAnimationGlobalBorderRadiusUnits: {
				...riveAnimationGlobalBorderRadiusUnits,
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
			<div className="fb-dual-riveAnimation-pressets">
				<PanelBody
					title={__("Rive", "frontis-blocks")}
					initialOpen={true}
				>
					<FB_ImageControl
						globalImageUrl={riveAnimationImageUrl}
						setglobalImageUrl={(value) => setAttributes({ riveAnimationImageUrl: value })}
						globalImageAlt={riveAnimationImageAlt}
						setglobalImageAlt={(value) => setAttributes({ riveAnimationImageAlt: value })}
						globalImageID={riveAnimationImageID}
						setglobalImageID={(value) => setAttributes({ riveAnimationImageID: value })}
						isImageSize={false}
						showThumbnail={false}
						allowedExtension="riv"
						allowedTypes={['application/octet-stream']}
					/>
					<BaseControl className="fb-sub-heading-position">
						<SelectControl
							label={__("Render Type", "frontis-block")}
							value={riveRenderer}
							options={RIVE_RENDER_TYPE}
							onChange={(value) =>
								setAttributes({ riveRenderer: value })
							}
						/>
					</BaseControl>
					<ToggleControl
						label={__("Loop Animation", "frontis-block")}
						checked={riveLoop}
						onChange={(value) =>
							setAttributes({ riveLoop: value })
						}
					/>

					<ToggleControl
						label={__("Autoplay", "frontis-block")}
						checked={riveAutoplay}
						onChange={(value) =>
							setAttributes({ riveAutoplay: value })
						}
					/>
				</PanelBody>

			</div>

		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
			<PanelBody
				title={__("Rive", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_Range
					min={0}
					max={2000}
					label={__("Width", "frontis-blocks")}
					rangeValue={riveAnimationCanvasWidth}
					onChangeHandler={(value) =>
						setAttributes({ riveAnimationCanvasWidth: value })
					}
					isRangeUnit={false}
					deviceType={deviceType}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
				<FB_Range
					min={0}
					max={2000}
					label={__("Height", "frontis-blocks")}
					rangeValue={riveAnimationCanvasHeight}
					onChangeHandler={(value) =>
						setAttributes({ riveAnimationCanvasHeight: value })
					}
					isRangeUnit={false}
					deviceType={deviceType}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
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
							rangeValue={riveAnimationGlobalZIndex}
							onChangeHandler={(value) => setAttributes({ riveAnimationGlobalZIndex: value === 0 ? undefined : value })}
							deviceType={deviceType}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
							isRangeUnit={false}

						/>

						<SelectControl
							label={__("Overflow", "frontis-blocks")}
							value={riveAnimationOverflow}
							options={OVERFLOW_OP}
							onChange={(value) => setAttributes({ riveAnimationOverflow: value })}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={riveAnimationPositionType}
							setPositionType={(value) => setAttributes({ riveAnimationPositionType: value })}

							HZOrientationType={riveAnimationHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ riveAnimationHZOrientationType: value })
							}
							VROrientationType={riveAnimationVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ riveAnimationVROrientationType: value })
							}

							HZLeftOffset={riveAnimationHZLeftOffset}
							setHZLeftOffset={(value) => setAttributes({ riveAnimationHZLeftOffset: value })}
							HZLeftOffsetUnits={riveAnimationHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) => setAttributes({ riveAnimationHZLeftOffsetUnits: value })}
							HZRightOffset={riveAnimationHZRightOffset}
							setHZRightOffset={(value) => setAttributes({ riveAnimationHZRightOffset: value })}
							HZRightOffsetUnits={riveAnimationHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) => setAttributes({ riveAnimationHZRightOffsetUnits: value })}

							VRTopOffset={riveAnimationVRTopOffset}
							setVRTopOffset={(value) => setAttributes({ riveAnimationVRTopOffset: value })}
							VRTopOffsetUnits={riveAnimationVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) => setAttributes({ riveAnimationVRTopOffsetUnits: value })}
							VRBottomOffset={riveAnimationVRBottomOffset}
							setVRBottomOffset={(value) => setAttributes({ riveAnimationVRBottomOffset: value })}
							VRBottomOffsetUnits={riveAnimationVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) => setAttributes({ riveAnimationVRBottomOffsetUnits: value })}

							setAttributes={setAttributes}
						/>

						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={riveAnimationGlobalWraperID}
							onChangeValue={(value) => setAttributes({ riveAnimationGlobalWraperID: value })}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={riveAnimationGlobalWraperClass}
							onChangeValue={(value) => setAttributes({ riveAnimationGlobalWraperClass: value })}
							helpText={__("Separate with spaces key.", "frontis-blocks")}
						/>
					</PanelBody>

					<PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
						<FB_Spacing
							label={__("Padding", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
							spacingUnits={riveAnimationGlobalPaddingUnits}
							spacingDesktop={riveAnimationGlobalPaddingDesktop}
							spacingTablet={riveAnimationGlobalPaddingTablet}
							spacingMobile={riveAnimationGlobalPaddingMobile}
							handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
							spacingCombineBtn={riveAnimationGlobalPaddingLink}
							spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={__("Margin", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalMarginUnitsHandler}
							spacingUnits={riveAnimationGlobalMarginUnits}
							spacingDesktop={riveAnimationGlobalMarginDesktop}
							spacingTablet={riveAnimationGlobalMarginTablet}
							spacingMobile={riveAnimationGlobalMarginMobile}
							handleSpacingUnitHandler={handleGlobalMarginUnitChange}
							spacingCombineBtn={riveAnimationGlobalMarginLink}
							spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
							setAttributes={setAttributes}
						/>
					</PanelBody>

					<PanelBody title="Background Color" initialOpen={false} >

						<FB_BackgroundColorControl
							label={__("Background Color", "frontis-blocks")}
							bgColorSwitcher={riveAnimationGlobalBgColorSwitcher}
							setBgColorSwitcher={(value) => setAttributes({ riveAnimationGlobalBgColorSwitcher: value })}

							normalBackgroundType={riveAnimationGlobalNormalBackgroundType}
							setNormalBackgroundType={(value) => setAttributes({ riveAnimationGlobalNormalBackgroundType: value })}
							normalClassicColor={riveAnimationGlobalNormalClassicColor}
							setNormalClassicColor={(value) => setAttributes({ riveAnimationGlobalNormalClassicColor: value === undefined ? '' : value })}
							normalGradientColor={riveAnimationGlobalNormalGradientColor}
							setNormalGradientColor={(value) => setAttributes({ riveAnimationGlobalNormalGradientColor: value === undefined ? null : value })}
							normalCustomGradientSwitcher={riveAnimationGlobalNormalCustomGradientSwitcher}
							setNormalCustomGradientSwitcher={(value) => setAttributes({ riveAnimationGlobalNormalCustomGradientSwitcher: value })}
							normalCustomGradientInputValue={riveAnimationGlobalNormalCustomGradientInputValue}
							setNormalCustomGradientInputValue={(value) => setAttributes({ riveAnimationGlobalNormalCustomGradientInputValue: value })}

							hoverBackgroundType={riveAnimationGlobalHoverBackgroundType}
							setHoverBackgroundType={(value) => setAttributes({ riveAnimationGlobalHoverBackgroundType: value })}
							hoverClassicColor={riveAnimationGlobalHoverClassicColor}
							setHoverClassicColor={(value) => setAttributes({ riveAnimationGlobalHoverClassicColor: value === undefined ? '' : value })}
							hoverGradientColor={riveAnimationGlobalHoverGradientColor}
							setHoverGradientColor={(value) => setAttributes({ riveAnimationGlobalHoverGradientColor: value === undefined ? null : value })}
							hoverCustomGradientSwitcher={riveAnimationGlobalHoverCustomGradientSwitcher}
							setHoverCustomGradientSwitcher={(value) => setAttributes({ riveAnimationGlobalHoverCustomGradientSwitcher: value })}
							hoverCustomGradientInputValue={riveAnimationGlobalHoverCustomGradientInputValue}
							setHoverCustomGradientInputValue={(value) => setAttributes({ riveAnimationGlobalHoverCustomGradientInputValue: value })}

							isBackgroundImage={false}

						/>
					</PanelBody>
					<PanelBody
						title={__("Border and Shadow", "frontis-blocks")}
						initialOpen={false}
					>

						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={riveAnimationGlobalBorder}
							options={BORDER_STYLES}
							onChange={(value) => setAttributes({ riveAnimationGlobalBorder: value })}
						/>

						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={riveAnimationGlobalBorderColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ riveAnimationGlobalBorderColorSwitcher: value })}
						/>

						{riveAnimationGlobalBorderColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={riveAnimationGlobalBorderColor}
								setGlobalColor={(value) => setAttributes({ riveAnimationGlobalBorderColor: value === undefined ? '' : value })}
							/>
						)}

						{riveAnimationGlobalBorderColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={riveAnimationGlobalBorderHoverColor}
								setGlobalColor={(value) => setAttributes({ riveAnimationGlobalBorderHoverColor: value === undefined ? '' : value })}
							/>
						)}

						<FB_Spacing
							label={__("Border", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderUnitsHandler}
							spacingUnits={riveAnimationGlobalBorderUnits}
							spacingDesktop={riveAnimationGlobalBorderDesktop}
							spacingTablet={riveAnimationGlobalBorderTablet}
							spacingMobile={riveAnimationGlobalBorderMobile}
							handleSpacingUnitHandler={handleGlobalBorderUnitChange}
							spacingCombineBtn={riveAnimationGlobalBorderLink}
							spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_Spacing
							label={__("Border Radius", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
							spacingUnits={riveAnimationGlobalBorderRadiusUnits}
							spacingDesktop={riveAnimationGlobalBorderRadiusDesktop}
							spacingTablet={riveAnimationGlobalBorderRadiusTablet}
							spacingMobile={riveAnimationGlobalBorderRadiusMobile}
							handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
							spacingCombineBtn={riveAnimationGlobalBorderRadiusLink}
							spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_SwitcherControl
							label={__("Box Shadow", "frontis-blocks")}
							globalSwitcher={riveAnimationGlobalBoxShadowSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ riveAnimationGlobalBoxShadowSwitcher: value })}
						/>

						{riveAnimationGlobalBoxShadowSwitcher === 'normal' && (
							<FB_BoxShadowControl
								label={__("Normal Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) => setAttributes({ riveAnimationGlobalBoxShadowValues: value })}
								initialShadowValue={riveAnimationGlobalBoxShadowValues}
								onBoxShadowStyleChange={(value) => setAttributes({ riveAnimationGlobalBoxShadowCssValue: value })}
							/>
						)}

						{riveAnimationGlobalBoxShadowSwitcher === 'hover' && (
							<FB_BoxShadowControl
								label={__("Hover Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) => setAttributes({ riveAnimationGlobalBoxShadowHoverValues: value })}
								initialShadowValue={riveAnimationGlobalBoxShadowHoverValues}
								onBoxShadowStyleChange={(value) => setAttributes({ riveAnimationGlobalBoxShadowHoverCssValue: value })}
							/>
						)}
					</PanelBody>

					<PanelBody
						title={__("Responsive Control", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-responsive-control-wrapper"
					>
						<FB_VisibilityControl
							desktopValue={riveAnimationDesktopSwitcher}
							setDesktopValue={(value) => setAttributes({ riveAnimationDesktopSwitcher: value })}

							tabletValue={riveAnimationTabletSwitcher}
							setTabletValue={(value) => setAttributes({ riveAnimationTabletSwitcher: value })}

							mobileValue={riveAnimationMobileSwitcher}
							setMobileValue={(value) => setAttributes({ riveAnimationMobileSwitcher: value })}
						/>
					</PanelBody>

					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor
							value={riveAnimationGlobalWraperCustomCSS}
							onChangeValue={(value) => setAttributes({ riveAnimationGlobalWraperCustomCSS: value })}
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