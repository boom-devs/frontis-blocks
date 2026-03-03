import { __ } from "@wordpress/i18n";
import { useMemo, memo, useEffect } from "@wordpress/element";
import {
	PanelBody,
	BaseControl,
	ToggleControl,
	SelectControl,
} from "@wordpress/components";
import {
	IMAGE_SIZES,
	OVERFLOW_OP,
	BORDER_STYLES,
	IMAGE_AUTO_FIT,
} from "@Constants/fbConstants";
import getCustomCss from "@Utils/getCustomCss";
import { useDeviceType } from "@Config/displayType";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_ResponsiveAlignmentControl from "@Components/responsive-alignment-control";
import FB_InputControl from "@Components/input-control";
import FB_VisibilityControl from "@Components/visibility-control";
import FB_Range from "@Components/range";
import FB_PositionControl from "@Components/position-control";
import FB_Spacing from "@Components/spacing";
import FB_BackgroundColorControl from "@Components/background-color-control";
import FB_SwitcherControl from "@Components/switcher-control";
import FB_ColorControl from "@Components/color-control";
import FB_BoxShadowControl from "@Components/box-shadow";

import './editor.scss';

const Inspector = ({ attributes, setAttributes }) => {
	const {
		blockID,
		/** Start General Settings */
		isLink,
		rel,
		linkTarget,
		useFirstImage,
		imageSize,
		imageAlignment,

		/** Start Style Settings */
		mediaHeight,
		mediaSize,
		mediaSizeUnits,
		mediaHeightUnits,
		autoHeightSwitch,
		autoFitSwitch,
		imageFit,
		imageBorder,
		imageBorderColorSwitcher,
		imageBorderColor,
		imageBorderHoverColor,
		imageBorderUnits,
		imageBorderDesktop,
		imageBorderTablet,
		imageBorderMobile,
		imageBorderLink,
		imageBorderRadiusUnits,
		imageBorderRadiusDesktop,
		imageBorderRadiusTablet,
		imageBorderRadiusMobile,
		imageBorderRadiusLink,
		imageBoxShadowValues,
		imageBoxShadowCssValue,
		/** End Style Settings */

		/** Start Advanced Attributes */
		wrapperId,
		wrapperClass,

		featuredImageDesktopSwitcher,
		featuredImageTabletSwitcher,
		featuredImageMobileSwitcher,

		featuredImageGlobalCustomCSS,

		postGlobalZIndex,
		postGlobalOverflow,
		postGlobalPositionType,
		postGlobalHZOrientationType,
		postGlobalVROrientationType,
		postGlobalHZLeftOffset,
		postGlobalHZLeftOffsetUnits,
		postGlobalHZRightOffset,
		postGlobalHZRightOffsetUnits,
		postGlobalVRTopOffset,
		postGlobalVRTopOffsetUnits,
		postGlobalVRBottomOffset,
		postGlobalVRBottomOffsetUnits,

		postGlobalPaddingUnits,
		postGlobalPaddingDesktop,
		postGlobalPaddingTablet,
		postGlobalPaddingMobile,
		postGlobalPaddingLink,

		postGlobalMarginUnits,
		postGlobalMarginDesktop,
		postGlobalMarginTablet,
		postGlobalMarginMobile,
		postGlobalMarginLink,

		postGlobalBgColorSwitcher,
		postGlobalNormalBackgroundType,
		postGlobalNormalClassicColor,
		postGlobalNormalGradientColor,
		postGlobalNormalCustomGradientSwitcher,
		postGlobalNormalCustomGradientInputValue,

		postGlobalHoverBackgroundType,
		postGlobalHoverClassicColor,
		postGlobalHoverGradientColor,
		postGlobalHoverCustomGradientSwitcher,
		postGlobalHoverCustomGradientInputValue,

		postGlobalBorder,
		postGlobalBorderColorSwitcher,
		postGlobalBorderColor,
		postGlobalBorderHoverColor,

		postGlobalBorderUnits,
		postGlobalBorderDesktop,
		postGlobalBorderTablet,
		postGlobalBorderMobile,
		postGlobalBorderLink,

		postGlobalBorderRadiusUnits,
		postGlobalBorderRadiusDesktop,
		postGlobalBorderRadiusTablet,
		postGlobalBorderRadiusMobile,
		postGlobalBorderRadiusLink,

		postGlobalBoxShadowSwitcher,
		postGlobalBoxShadowValues,
		postGlobalBoxShadowCssValue,
		postGlobalBoxShadowHoverValues,
		postGlobalBoxShadowHoverCssValue,

		/** End Global Setting */

		/** End Advanced Attributes */
	} = attributes;

	const deviceType = useDeviceType();

	/** Start Image Border */
	const handleImageBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (imageBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageBorderMobile: {
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
				case "Desktop":
					setAttributes({
						imageBorderDesktop: { ...imageBorderDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						imageBorderTablet: { ...imageBorderTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						imageBorderMobile: { ...imageBorderMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleImageBorderCombineBtn = () => {
		setAttributes({ imageBorderLink: !imageBorderLink });
	};

	const handleImageBorderUnitsHandler = (unit) => {
		setAttributes({
			imageBorderUnits: {
				...imageBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Image Border */

	/** Start Image Border Radius */
	const handleImageBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (imageBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageBorderRadiusMobile: {
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
				case "Desktop":
					setAttributes({
						imageBorderRadiusDesktop: {
							...imageBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageBorderRadiusTablet: {
							...imageBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageBorderRadiusMobile: {
							...imageBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleImageBorderRadiusCombineBtn = () => {
		setAttributes({ imageBorderRadiusLink: !imageBorderRadiusLink });
	};

	const handleImageBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			imageBorderRadiusUnits: {
				...imageBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Image Border Radius */

	/* ======================================================================= */

	/* Start Global Padding */
	const handleGlobalPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (postGlobalPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalPaddingMobile: {
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
				case "Desktop":
					setAttributes({
						postGlobalPaddingDesktop: {
							...postGlobalPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalPaddingTablet: {
							...postGlobalPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalPaddingMobile: {
							...postGlobalPaddingMobile,
							[position]: value,
						},
					});
				default:
					break;
			}
		}
	};

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes({ postGlobalPaddingLink: !postGlobalPaddingLink });
	};

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes({
			postGlobalPaddingUnits: {
				...postGlobalPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	/* End Global Padding */

	/* Start Global Margin */
	const handleGlobalMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (postGlobalMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalMarginMobile: {
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
				case "Desktop":
					setAttributes({
						postGlobalMarginDesktop: {
							...postGlobalMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalMarginTablet: {
							...postGlobalMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalMarginMobile: {
							...postGlobalMarginMobile,
							[position]: value,
						},
					});
				default:
					break;
			}
		}
	};

	const handleGlobalMarginCombineBtn = () => {
		setAttributes({ postGlobalMarginLink: !postGlobalMarginLink });
	};

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes({
			postGlobalMarginUnits: {
				...postGlobalMarginUnits,
				[deviceType]: unit,
			},
		});
	};
	/* End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (postGlobalBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalBorderMobile: {
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
				case "Desktop":
					setAttributes({
						postGlobalBorderDesktop: {
							...postGlobalBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalBorderTablet: {
							...postGlobalBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalBorderMobile: {
							...postGlobalBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalBorderCombineBtn = () => {
		setAttributes({ postGlobalBorderLink: !postGlobalBorderLink });
	};

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes({
			postGlobalBorderUnits: {
				...postGlobalBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Global Border */

	/** Start Global Border Radius*/
	const handleGlobalBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (postGlobalBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalBorderRadiusMobile: {
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
				case "Desktop":
					setAttributes({
						postGlobalBorderRadiusDesktop: {
							...postGlobalBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalBorderRadiusTablet: {
							...postGlobalBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalBorderRadiusMobile: {
							...postGlobalBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes({ postGlobalBorderRadiusLink: !postGlobalBorderRadiusLink });
	};

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			postGlobalBorderRadiusUnits: {
				...postGlobalBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Global Border */

	// General Controls
	const generalControls = (
		<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
			<BaseControl
				label={__("Element Visibility", "frontis-blocks")}
				className="fb-setting-show-hide-elements"
			>
				<ToggleControl
					label={__("Enable Link", "frontis-blocks")}
					checked={isLink}
					onChange={(value) => setAttributes({ isLink: value })}
				/>

				{isLink && (
					<>
						<ToggleControl
							label={__("Open in new tab", "frontis-blocks")}
							checked={linkTarget === "_blank"}
							onChange={(value) =>
								setAttributes({
									linkTarget: value ? "_blank" : "_self",
								})
							}
						/>

						<FB_InputControl
							label={__("Link Rel", "frontis-blocks")}
							value={rel}
							onChangeValue={(value) => setAttributes({ rel: value })}
						/>

						<p className="fb-control-help">
							{__("For example: nofollow, noreferrer, etc.", "frontis-blocks")}
						</p>

						<div className="fb-control-divider"></div>
					</>
				)}

				<ToggleControl
					label={__("Image from post content", "frontis-blocks")}
					checked={useFirstImage}
					onChange={(value) => setAttributes({ useFirstImage: value })}
				/>

				<p
					className="fb-control-help"
					style={{
						marginTop: "8px",
						marginBottom: "20px",
					}}
				>
					{__(
						"Use the first image from post content when no featured image is available.",
						"frontis-blocks",
					)}
				</p>
			</BaseControl>

			<div className="fb-control-divider"></div>

			{
				<SelectControl
					label={__("Image Dimensions", "frontis-blocks")}
					value={imageSize}
					options={IMAGE_SIZES}
					onChange={(value) => setAttributes({ imageSize: value })}
				/>

				
			}
				<p className="fb-control-help"
					style={{
						marginTop: "8px",
						marginBottom: "20px",
					}}
				>
					{__(
						"Only effective if a featured image is assigned to the post.",
						"frontis-blocks",
					)}
				</p>


			<FB_ResponsiveAlignmentControl
				label={__("Image Alignment", "frontis-blocks")}
				globalAlignment={imageAlignment}
				setGlobalAlignment={(value) => setAttributes({ imageAlignment: value })}
				deviceType={deviceType}
				setAttributes={setAttributes}
			/>
		</PanelBody>
	);

	const styleControls = (
		<PanelBody title={__("Image Style", "frontis-blocks")} initialOpen={true}>
			<FB_Range
				min={1}
				max={mediaSizeUnits[deviceType] === "%" ? 100 : 1400}
				label={__("Width", "frontis-blocks")}
				rangeValue={mediaSize}
				onChangeHandler={(value) => setAttributes({ mediaSize: value })}
				rangeUnitHandler={(value) => setAttributes({ mediaSizeUnits: value })}
				deviceType={deviceType}
				units={mediaSizeUnits}
				setAttributes={setAttributes}
				rangeStep={1}
				resetFallbackValue={""}
			/>
			<FB_Range
				min={1}
				max={mediaHeightUnits[deviceType] === "%" ? 100 : 1400}
				label={__("Height", "frontis-block")}
				rangeValue={mediaHeight}
				onChangeHandler={(value) => setAttributes({ mediaHeight: value })}
				rangeUnitHandler={(value) => setAttributes({ mediaHeightUnits: value })}
				deviceType={deviceType}
				units={mediaHeightUnits}
				setAttributes={setAttributes}
				rangeStep={1}
				resetFallbackValue={""}
				disabled={autoHeightSwitch}
			/>

			{autoHeightSwitch && (
				<p className="fb-control-help"
					style={{
						marginTop: "-14px",
						marginBottom: "20px",
					}}
				>
					{__(
						"Disabling custom height adjustments while Auto Height is enabled.",
						"frontis-blocks",
					)}
				</p>
			)}

			{/* Auto Height */}
			<ToggleControl
				__nextHasNoMarginBottom
				label={__("Auto Height", "frontis-block")}
				checked={autoHeightSwitch}
				onChange={(newValue) => {
					setAttributes({ autoHeightSwitch: newValue });
				}}
			/>

			{/* Auto Fit Image */}
			{!autoHeightSwitch && (
				<ToggleControl
					__nextHasNoMarginBottom
					label={__("Auto Fit Image?", "frontis-block")}
					checked={autoFitSwitch}
					onChange={(newValue) => {
						setAttributes({ autoFitSwitch: newValue });
					}}
				/>
			)}

			{/* Image Fit Options */}
			{!autoHeightSwitch && autoFitSwitch && (
				<SelectControl
					label={__("Image Fit Options", "frontis-blocks")}
					value={imageFit || "cover"}
					options={IMAGE_AUTO_FIT}
					onChange={(size) => setAttributes({ imageFit: size })}
					__nextHasNoMarginBottom
				/>
			)}

			<SelectControl
				label={__("Border Style", "frontis-blocks")}
				value={imageBorder}
				options={BORDER_STYLES}
				onChange={(value) => setAttributes({ imageBorder: value })}
			/>

			<FB_SwitcherControl
				label={__("Border Color", "frontis-blocks")}
				globalSwitcher={imageBorderColorSwitcher}
				setGlobalSwitcher={(value) =>
					setAttributes({ imageBorderColorSwitcher: value })
				}
			/>

			{imageBorderColorSwitcher === "normal" && (
				<FB_ColorControl
					label={__("Normal Color", "frontis-blocks")}
					globalColor={imageBorderColor}
					setGlobalColor={(value) =>
						setAttributes({
							imageBorderColor: value === undefined ? "" : value,
						})
					}
				/>
			)}

			{imageBorderColorSwitcher === "hover" && (
				<FB_ColorControl
					label={__("Hover Color", "frontis-blocks")}
					globalColor={imageBorderHoverColor}
					setGlobalColor={(value) =>
						setAttributes({
							imageBorderHoverColor: value === undefined ? "" : value,
						})
					}
				/>
			)}

			<FB_Spacing
				label={__("Border Width", "frontis-blocks")}
				deviceType={deviceType}
				spacingUnitsHandler={handleImageBorderUnitsHandler}
				spacingUnits={imageBorderUnits}
				spacingDesktop={imageBorderDesktop}
				spacingTablet={imageBorderTablet}
				spacingMobile={imageBorderMobile}
				handleSpacingUnitHandler={handleImageBorderUnitChange}
				spacingCombineBtn={imageBorderLink}
				spacingCombineBtnHandler={handleImageBorderCombineBtn}
				setAttributes={setAttributes}
			/>

			<FB_Spacing
				label={__("Border Radius", "frontis-blocks")}
				deviceType={deviceType}
				spacingUnitsHandler={handleImageBorderRadiusUnitsHandler}
				spacingUnits={imageBorderRadiusUnits}
				spacingDesktop={imageBorderRadiusDesktop}
				spacingTablet={imageBorderRadiusTablet}
				spacingMobile={imageBorderRadiusMobile}
				handleSpacingUnitHandler={handleImageBorderRadiusUnitChange}
				spacingCombineBtn={imageBorderRadiusLink}
				spacingCombineBtnHandler={handleImageBorderRadiusCombineBtn}
				setAttributes={setAttributes}
			/>

			<FB_BoxShadowControl
				onBoxShadowChange={(value) =>
					setAttributes({ imageBoxShadowValues: value })
				}
				initialShadowValue={imageBoxShadowValues}
				onBoxShadowStyleChange={(value) =>
					setAttributes({ imageBoxShadowCssValue: value })
				}
			/>
		</PanelBody>
	);

	const advancedControls = (
		<>
			<PanelBody title={__("Layout", "frontis-blocks")} initialOpen={true}>
				<FB_Range
					min={0}
					max={10000000}
					label={__("Z Index", "frontis-blocks")}
					rangeValue={postGlobalZIndex}
					onChangeHandler={(value) =>
						setAttributes({
							postGlobalZIndex: value === 0 ? undefined : value,
						})
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
					isRangeUnit={false}
				/>

				<SelectControl
					label={__("Overflow", "frontis-blocks")}
					value={postGlobalOverflow}
					options={OVERFLOW_OP}
					onChange={(value) => setAttributes({ postGlobalOverflow: value })}
				/>

				<FB_PositionControl
					deviceType={deviceType}
					positionType={postGlobalPositionType}
					setPositionType={(value) =>
						setAttributes({ postGlobalPositionType: value })
					}
					HZOrientationType={postGlobalHZOrientationType}
					setHZOrientationType={(value) =>
						setAttributes({ postGlobalHZOrientationType: value })
					}
					VROrientationType={postGlobalVROrientationType}
					setVROrientationType={(value) =>
						setAttributes({ postGlobalVROrientationType: value })
					}
					HZLeftOffset={postGlobalHZLeftOffset}
					setHZLeftOffset={(value) =>
						setAttributes({ postGlobalHZLeftOffset: value })
					}
					HZLeftOffsetUnits={postGlobalHZLeftOffsetUnits}
					setHZLeftOffsetUnits={(value) =>
						setAttributes({ postGlobalHZLeftOffsetUnits: value })
					}
					HZRightOffset={postGlobalHZRightOffset}
					setHZRightOffset={(value) =>
						setAttributes({ postGlobalHZRightOffset: value })
					}
					HZRightOffsetUnits={postGlobalHZRightOffsetUnits}
					setHZRightOffsetUnits={(value) =>
						setAttributes({ postGlobalHZRightOffsetUnits: value })
					}
					VRTopOffset={postGlobalVRTopOffset}
					setVRTopOffset={(value) =>
						setAttributes({ postGlobalVRTopOffset: value })
					}
					VRTopOffsetUnits={postGlobalVRTopOffsetUnits}
					setVRTopOffsetUnits={(value) =>
						setAttributes({ postGlobalVRTopOffsetUnits: value })
					}
					VRBottomOffset={postGlobalVRBottomOffset}
					setVRBottomOffset={(value) =>
						setAttributes({ postGlobalVRBottomOffset: value })
					}
					VRBottomOffsetUnits={postGlobalVRBottomOffsetUnits}
					setVRBottomOffsetUnits={(value) =>
						setAttributes({ postGlobalVRBottomOffsetUnits: value })
					}
					setAttributes={setAttributes}
				/>

				<FB_InputControl
					label={__("CSS ID", "frontis-blocks")}
					value={wrapperId}
					onChangeValue={(value) => setAttributes({ wrapperId: value })}
					helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
				/>

				<FB_InputControl
					label={__("CSS Class", "frontis-blocks")}
					value={wrapperClass}
					onChangeValue={(value) => setAttributes({ wrapperClass: value })}
					helpText={__("Separate with spaces key.", "frontis-blocks")}
				/>
			</PanelBody>

			<PanelBody
				title={__("Padding and Margin", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
					spacingUnits={postGlobalPaddingUnits}
					spacingDesktop={postGlobalPaddingDesktop}
					spacingTablet={postGlobalPaddingTablet}
					spacingMobile={postGlobalPaddingMobile}
					handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
					spacingCombineBtn={postGlobalPaddingLink}
					spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleGlobalMarginUnitsHandler}
					spacingUnits={postGlobalMarginUnits}
					spacingDesktop={postGlobalMarginDesktop}
					spacingTablet={postGlobalMarginTablet}
					spacingMobile={postGlobalMarginMobile}
					handleSpacingUnitHandler={handleGlobalMarginUnitChange}
					spacingCombineBtn={postGlobalMarginLink}
					spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
					setAttributes={setAttributes}
				/>
			</PanelBody>

			<PanelBody title="Background Color" initialOpen={false}>
				<FB_BackgroundColorControl
					label={__("Background Color", "frontis-blocks")}
					bgColorSwitcher={postGlobalBgColorSwitcher}
					setBgColorSwitcher={(value) =>
						setAttributes({ postGlobalBgColorSwitcher: value })
					}
					normalBackgroundType={postGlobalNormalBackgroundType}
					setNormalBackgroundType={(value) =>
						setAttributes({ postGlobalNormalBackgroundType: value })
					}
					normalClassicColor={postGlobalNormalClassicColor}
					setNormalClassicColor={(value) =>
						setAttributes({
							postGlobalNormalClassicColor: value === undefined ? "" : value,
						})
					}
					normalGradientColor={postGlobalNormalGradientColor}
					setNormalGradientColor={(value) =>
						setAttributes({
							postGlobalNormalGradientColor: value === undefined ? "" : value,
						})
					}
					normalCustomGradientSwitcher={postGlobalNormalCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(value) =>
						setAttributes({ postGlobalNormalCustomGradientSwitcher: value })
					}
					normalCustomGradientInputValue={
						postGlobalNormalCustomGradientInputValue
					}
					setNormalCustomGradientInputValue={(value) =>
						setAttributes({
							postGlobalNormalCustomGradientInputValue: value,
						})
					}
					hoverBackgroundType={postGlobalHoverBackgroundType}
					setHoverBackgroundType={(value) =>
						setAttributes({ postGlobalHoverBackgroundType: value })
					}
					hoverClassicColor={postGlobalHoverClassicColor}
					setHoverClassicColor={(value) =>
						setAttributes({
							postGlobalHoverClassicColor: value === undefined ? "" : value,
						})
					}
					hoverGradientColor={postGlobalHoverGradientColor}
					setHoverGradientColor={(value) =>
						setAttributes({
							postGlobalHoverGradientColor: value === undefined ? "" : value,
						})
					}
					hoverCustomGradientSwitcher={postGlobalHoverCustomGradientSwitcher}
					setHoverCustomGradientSwitcher={(value) =>
						setAttributes({ postGlobalHoverCustomGradientSwitcher: value })
					}
					hoverCustomGradientInputValue={
						postGlobalHoverCustomGradientInputValue
					}
					setHoverCustomGradientInputValue={(value) =>
						setAttributes({
							postGlobalHoverCustomGradientInputValue: value,
						})
					}
					isBackgroundImage={false}
				/>
			</PanelBody>

			<PanelBody
				title={__("Border and Shadow", "frontis-blocks")}
				initialOpen={false}
			>
				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={postGlobalBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ postGlobalBorder: value })}
				/>

				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={postGlobalBorderColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ postGlobalBorderColorSwitcher: value })
					}
				/>

				{postGlobalBorderColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={postGlobalBorderColor}
						setGlobalColor={(value) =>
							setAttributes({
								postGlobalBorderColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				{postGlobalBorderColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={postGlobalBorderHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								postGlobalBorderHoverColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				<FB_Spacing
					label={__("Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleGlobalBorderUnitsHandler}
					spacingUnits={postGlobalBorderUnits}
					spacingDesktop={postGlobalBorderDesktop}
					spacingTablet={postGlobalBorderTablet}
					spacingMobile={postGlobalBorderMobile}
					handleSpacingUnitHandler={handleGlobalBorderUnitChange}
					spacingCombineBtn={postGlobalBorderLink}
					spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
					spacingUnits={postGlobalBorderRadiusUnits}
					spacingDesktop={postGlobalBorderRadiusDesktop}
					spacingTablet={postGlobalBorderRadiusTablet}
					spacingMobile={postGlobalBorderRadiusMobile}
					handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
					spacingCombineBtn={postGlobalBorderRadiusLink}
					spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Box Shadow", "frontis-blocks")}
					globalSwitcher={postGlobalBoxShadowSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ postGlobalBoxShadowSwitcher: value })
					}
				/>

				{postGlobalBoxShadowSwitcher === "normal" && (
					<FB_BoxShadowControl
						label={__("Normal Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) =>
							setAttributes({ postGlobalBoxShadowValues: value })
						}
						initialShadowValue={postGlobalBoxShadowValues}
						onBoxShadowStyleChange={(value) =>
							setAttributes({ postGlobalBoxShadowCssValue: value })
						}
					/>
				)}

				{postGlobalBoxShadowSwitcher === "hover" && (
					<FB_BoxShadowControl
						label={__("Hover Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) =>
							setAttributes({ postGlobalBoxShadowHoverValues: value })
						}
						initialShadowValue={postGlobalBoxShadowHoverValues}
						onBoxShadowStyleChange={(value) =>
							setAttributes({ postGlobalBoxShadowHoverCssValue: value })
						}
					/>
				)}
			</PanelBody>

			<PanelBody
				title={__("Responsive Control", "frontis-blocks")}
				initialOpen={false}
				className="fb-setting-responsive-control-wrapper"
			>
				<FB_VisibilityControl
					desktopValue={featuredImageDesktopSwitcher}
					setDesktopValue={(value) =>
						setAttributes({
							featuredImageDesktopSwitcher: value,
						})
					}
					tabletValue={featuredImageTabletSwitcher}
					setTabletValue={(value) =>
						setAttributes({
							featuredImageTabletSwitcher: value,
						})
					}
					mobileValue={featuredImageMobileSwitcher}
					setMobileValue={(value) =>
						setAttributes({
							featuredImageMobileSwitcher: value,
						})
					}
				/>
			</PanelBody>

			<PanelBody title={__("Custom CSS", "frontis-blocks")} initialOpen={false}>
				<FB_CustomCSSEditor
					value={featuredImageGlobalCustomCSS}
					onChangeValue={(value) =>
						setAttributes({ featuredImageGlobalCustomCSS: value })
					}
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
export default memo(Inspector);