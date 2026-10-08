import { __ } from "@wordpress/i18n";

import { InspectorControls } from "@wordpress/block-editor";

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
} from "@wordpress/components";

import { useState, useEffect, useMemo, memo } from "@wordpress/element";
import {
	OVERFLOW_OP,
	BACKGROUND_TYPES,
	BORDER_STYLES,
} from '@Constants/fbConstants';
import FBIconPicker from "../../components/icon-picker";
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
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import generateSvgIcon from '@Utils/generateSvgIcon';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';

const Inspector = ({ attributes, setAttributes }) => {
	const {
		blockID,
		breadcrumbAlignment,
		separatorType,
		separatorText,
		separatorIcon,
		showHomePage,
		homeprefixSwitcher,
		homeTextPrefix,
		showHomeIcon,
		homeIcon,
		homeText,
		showItemIcon,
		itemIcon,
		breadcrumbTypography,
		align,
		//Items style
		breadcrumbItemGlobalTypographyData,
		breadcrumbItemGlobalTypoSwitcher,
		breadcrumbItemGlobalTypoType,
		breadcrumbItemGlobalTypoOption,
		breadcrumbItemFontFamily,
		breadcrumbItemFontSize,
		breadcrumbItemFontSizeUnits,
		breadcrumbItemFontWeight,
		breadcrumbItemFontStyle,
		breadcrumbItemTextTransform,
		breadcrumbItemTextDecoration,
		breadcrumbItemLetterSpacing,
		breadcrumbItemLetterSpacingUnits,
		breadcrumbItemLineHeight,
		breadcrumbItemLineHeightUnits,
		breadcrumbGlobalZIndex,
		breadcrumbOverflow,
		//Current item
		breadcrumbCurrentItemGlobalTypographyData,
		breadcrumbCurrentItemGlobalTypoSwitcher,
		breadcrumbCurrentItemGlobalTypoType,
		breadcrumbCurrentItemGlobalTypoOption,
		breadcrumbCurrentItemFontFamily,
		breadcrumbCurrentItemFontSize,
		breadcrumbCurrentItemFontSizeUnits,
		breadcrumbCurrentItemFontWeight,
		breadcrumbCurrentItemFontStyle,
		breadcrumbCurrentItemTextTransform,
		breadcrumbCurrentItemTextDecoration,
		breadcrumbCurrentItemLetterSpacing,
		breadcrumbCurrentItemLetterSpacingUnits,
		breadcrumbCurrentItemLineHeight,
		breadcrumbCurrentItemLineHeightUnits,
		breadcrumbCurrentItemColorSwitcher,
		breadcrumbCurrentItemColor,
		breadcrumbCurrentItemHoverColor,
		breadcrumbCurrentItemBgColorSwitcher,
		breadcrumbCurrentItemBgColor,
		breadcrumbCurrentItemBgHoverColor,
		//Item color
		breadcrumbItemColorSwitcher,
		breadcrumbItemColor,
		breadcrumbItemHoverColor,
		breadcrumbItemBgColorSwitcher,
		breadcrumbItemBgColor,
		breadcrumbItemBgHoverColor,
		breadcrumbItemGap,
		breadcrumbItemGapUnits,
		//Item Spacing
		breadcrumbItemBorder,
		breadcrumbItemBorderColorSwitcher,
		breadcrumbItemBorderColor,
		breadcrumbItemBorderHoverColor,
		breadcrumbItemBorderUnits,
		breadcrumbItemDesktopBorder,
		breadcrumbItemTabletBorder,
		breadcrumbItemMobileBorder,
		breadcrumbItemBorderLink,
		breadcrumbItemBorderRadiusUnits,
		breadcrumbItemDesktopBorderRadius,
		breadcrumbItemTabBorderRadius,
		breadcrumbItemMobileBorderRadius,
		breadcrumbItemBorderRadiusLink,
		breadcrumbItemBoxShadowSwitcher,
		breadcrumbItemBoxShadowValues,
		breadcrumbItemBoxShadowCssValue,
		breadcrumbItemBoxShadowHoverValues,
		breadcrumbItemBoxShadowHoverCssValue,
		breadcrumbItemPaddingUnits,
		breadcrumbItemDesktopPadding,
		breadcrumbItemTabPadding,
		breadcrumbItemMobilePadding,
		breadcrumbItemPaddingLink,
		breadcrumbItemMarginUnits,
		breadcrumbItemDesktopMargin,
		breadcrumbItemTabMargin,
		breadcrumbItemMobileMargin,
		breadcrumbItemMarginLink,
		breadcrumbIconSize,
		breadcrumbIconSizeUnits,
		breadcrumbHomeIconGap,
		breadcrumbHomeIconGapUnits,
		breadcrumbIconBgSize,
		breadcrumbIconBgSizeUnits,
		breadcrumbIconColorSwitcher,
		breadcrumbIconColor,
		breadcrumbIconHoverColor,
		breadcrumbIconBgColorSwitcher,
		breadcrumbIconBgColor,
		breadcrumbIconBgHoverColor,

		//seperator 
		breadcrumbSeperatorSize,
		breadcrumbSeperatorSizeUnits,
		breadcrumbSeperatorIconGap,
		breadcrumbSeperatorIconGapUnits,
		breadcrumbSeperatorBgSize,
		breadcrumbSeperatorBgSizeUnits,
		breadcrumbSeperatorColorSwitcher,
		breadcrumbSeperatorColor,
		breadcrumbSeperatorHoverColor,
		breadcrumbSeperatorBgColorSwitcher,
		breadcrumbSeperatorBgColor,
		breadcrumbSeperatorBgHoverColor,
		//Item Icon
		breadcrumbItemIconSize,
		breadcrumbItemIconSizeUnits,
		breadcrumbItemIconGap,
		breadcrumbItemIconGapUnits,
		breadcrumbItemIconBgSize,
		breadcrumbItemIconBgSizeUnits,
		breadcrumbItemIconColorSwitcher,
		breadcrumbItemIconColor,
		breadcrumbItemIconHoverColor,
		breadcrumbItemIconBgColorSwitcher,
		breadcrumbItemIconBgColor,
		breadcrumbItemIconBgHoverColor,
		//position
		breadcrumbPositionType,
		breadcrumbHZOrientationType,
		breadcrumbVROrientationType,
		breadcrumbHZLeftOffset,
		breadcrumbHZLeftOffsetUnits,
		breadcrumbHZRightOffset,
		breadcrumbHZRightOffsetUnits,
		breadcrumbVRTopOffset,
		breadcrumbVRTopOffsetUnits,
		breadcrumbVRBottomOffset,
		breadcrumbVRBottomOffsetUnits,

		breadcrumbGlobalWraperID,
		breadcrumbGlobalWraperClass,

		breadcrumbGlobalPaddingUnits,
		breadcrumbGlobalPaddingDesktop,
		breadcrumbGlobalPaddingTablet,
		breadcrumbGlobalPaddingMobile,
		breadcrumbGlobalPaddingLink,

		breadcrumbGlobalMarginUnits,
		breadcrumbGlobalMarginDesktop,
		breadcrumbGlobalMarginTablet,
		breadcrumbGlobalMarginMobile,
		breadcrumbGlobalMarginLink,

		/** Start Background */
		breadcrumbGlobalBgColorSwitcher,
		breadcrumbGlobalBgNormalBackgroundType,
		breadcrumbGlobalBgNormalClassicColor,
		breadcrumbGlobalBgNormalGradientColor,
		breadcrumbGlobalBgNormalCustomGradientSwitcher,
		breadcrumbGlobalBgNormalCustomGradientInputValue,
		breadcrumbGlobalBgNormalBackgroundImageUrl,
		breadcrumbGlobalBgNormalBackgroundImageAlt,
		breadcrumbGlobalBgNormalBackgroundImageID,
		breadcrumbGlobalBgNormalBackgroundImagePosition,
		breadcrumbGlobalBgNormalBackgroundImageAttachment,
		breadcrumbGlobalBgNormalBackgroundImageRepeat,
		breadcrumbGlobalBgNormalBackgroundImageSize,

		breadcrumbGlobalBgHoverBackgroundType,
		breadcrumbGlobalBgHoverClassicColor,
		breadcrumbGlobalBgHoverGradientColor,
		breadcrumbGlobalBgHoverCustomGradientSwitcher,
		breadcrumbGlobalBgHoverCustomGradientInputValue,
		breadcrumbGlobalBgHoverBackgroundImageUrl,
		breadcrumbGlobalBgHoverBackgroundImagePosition,
		breadcrumbGlobalBgHoverBackgroundImageAttachment,
		breadcrumbGlobalBgHoverBackgroundImageRepeat,
		breadcrumbGlobalBgHoverBackgroundImageSize,

		breadcrumbGlobalBorder,
		breadcrumbGlobalBorderColorSwitcher,
		breadcrumbGlobalBorderColor,
		breadcrumbGlobalBorderHoverColor,
		breadcrumbGlobalBorderUnits,
		breadcrumbGlobalBorderDesktop,
		breadcrumbGlobalBorderTablet,
		breadcrumbGlobalBorderMobile,
		breadcrumbGlobalBorderLink,

		breadcrumbGlobalBorderRadiusUnits,
		breadcrumbGlobalBorderRadiusDesktop,
		breadcrumbGlobalBorderRadiusTablet,
		breadcrumbGlobalBorderRadiusMobile,
		breadcrumbGlobalBorderRadiusLink,

		breadcrumbGlobalBoxShadowSwitcher,
		breadcrumbGlobalBoxShadowValues,
		breadcrumbGlobalBoxShadowCssValue,
		breadcrumbGlobalBoxShadowHoverValues,
		breadcrumbGlobalBoxShadowHoverCssValue,

		breadcrumbDesktopSwitcher,
		breadcrumbTabletSwitcher,
		breadcrumbMobileSwitcher,

		breadcrumbCustomCSS,
		blockStyle

	} = attributes;

	const deviceType = useDeviceType();

	const homeIconHandler = (IconName) => {
		setAttributes({ homeIcon: IconName })
	}
	const separatorIconHandler = (IconName) => {
		setAttributes({ separatorIcon: IconName })
	}
	const itemIconHandler = (IconName) => {
		setAttributes({ itemIcon: IconName })
	}

	/**
	 * Generate SVG Icons for Frontend
	 */
	useEffect(() => {
		setAttributes({
			homeIconFrontend: generateSvgIcon(homeIcon),
			separatorIconFrontend: generateSvgIcon(separatorIcon),
			itemIconFrontend: generateSvgIcon(itemIcon),
		})
	}, [homeIcon, separatorIcon, itemIcon]);

	/** Start breadcrumbItem Padding */
	const breadcrumbItemPaddingUnitsChange = (event, position) => {
		const value = event.target.value;
		if (breadcrumbItemPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						breadcrumbItemDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						breadcrumbItemTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						breadcrumbItemMobilePadding: {
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
					setAttributes({ breadcrumbItemDesktopPadding: { ...breadcrumbItemDesktopPadding, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ breadcrumbItemTabPadding: { ...breadcrumbItemTabPadding, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ breadcrumbItemMobilePadding: { ...breadcrumbItemMobilePadding, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const breadcrumbItemPaddingLinkBtn = () => {
		setAttributes({
			breadcrumbItemPaddingLink: !breadcrumbItemPaddingLink
		});
	};

	const breadcrumbItemPaddingUnitsHandler = (unit) => {
		setAttributes({
			breadcrumbItemPaddingUnits: {
				...breadcrumbItemPaddingUnits,
				[deviceType]: unit
			}
		});
	};
	/** End breadcrumbItem Padding */

	/** Start breadcrumbItem Margin */
	const breadcrumbItemMarginUnitsChange = (event, position) => {
		const value = event.target.value;
		if (breadcrumbItemMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						breadcrumbItemDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						breadcrumbItemTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						breadcrumbItemMobileMargin: {
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
					setAttributes({ breadcrumbItemDesktopMargin: { ...breadcrumbItemDesktopMargin, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ breadcrumbItemTabMargin: { ...breadcrumbItemTabMargin, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ breadcrumbItemMobileMargin: { ...breadcrumbItemMobileMargin, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const breadcrumbItemMarginLinkBtn = () => {
		setAttributes({
			breadcrumbItemMarginLink: !breadcrumbItemMarginLink
		});
	};

	const breadcrumbItemMarginUnitsHandler = (unit) => {
		setAttributes({
			breadcrumbItemMarginUnits: {
				...breadcrumbItemMarginUnits,
				[deviceType]: unit
			}
		});
	};
	/** End breadcrumbItem Margin */

	/** Start breadcrumbItem Border Radius */
	const breadcrumbItemBorderUnitsChange = (event, position) => {
		const value = event.target.value;
		if (breadcrumbItemBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						breadcrumbItemDesktopBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						breadcrumbItemTabletBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						breadcrumbItemMobileBorder: {
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
					setAttributes({ breadcrumbItemDesktopBorder: { ...breadcrumbItemDesktopBorder, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ breadcrumbItemTabletBorder: { ...breadcrumbItemTabletBorder, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ breadcrumbItemMobileBorder: { ...breadcrumbItemMobileBorder, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const breadcrumbItemBorderLinkBtn = () => {
		setAttributes({
			breadcrumbItemBorderLink: !breadcrumbItemBorderLink
		});
	};

	const breadcrumbItemBorderUnitsHandler = (unit) => {
		setAttributes({
			breadcrumbItemBorderUnits: {
				...breadcrumbItemBorderUnits,
				[deviceType]: unit
			}
		});
	};
	/** End breadcrumbItem Border */

	/** Start breadcrumbItem Border Radius */
	const breadcrumbItemBorderRadiusUnitsChange = (event, position) => {
		const value = event.target.value;
		if (breadcrumbItemBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						breadcrumbItemDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						breadcrumbItemTabBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						breadcrumbItemMobileBorderRadius: {
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
					setAttributes({ breadcrumbItemDesktopBorderRadius: { ...breadcrumbItemDesktopBorderRadius, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ breadcrumbItemTabBorderRadius: { ...breadcrumbItemTabBorderRadius, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ breadcrumbItemMobileBorderRadius: { ...breadcrumbItemMobileBorderRadius, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const breadcrumbItemBorderRadiusLinkBtn = () => {
		setAttributes({
			breadcrumbItemBorderRadiusLink: !breadcrumbItemBorderRadiusLink
		});
	};

	const breadcrumbItemBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			breadcrumbItemBorderRadiusUnits: {
				...breadcrumbItemBorderRadiusUnits,
				[deviceType]: unit
			}
		});
	};
	/** End breadcrumbItem Border Radius */

	/** Start Global padding */
	const handleGlobalPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (breadcrumbGlobalPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						breadcrumbGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						breadcrumbGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						breadcrumbGlobalPaddingMobile: {
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
					setAttributes({ breadcrumbGlobalPaddingDesktop: { ...breadcrumbGlobalPaddingDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ breadcrumbGlobalPaddingTablet: { ...breadcrumbGlobalPaddingTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ breadcrumbGlobalPaddingMobile: { ...breadcrumbGlobalPaddingMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes({ breadcrumbGlobalPaddingLink: !breadcrumbGlobalPaddingLink });
	}

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes({
			breadcrumbGlobalPaddingUnits: {
				...breadcrumbGlobalPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Global Padding */

	/** Start Global Margin */
	const handleGlobalMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (breadcrumbGlobalMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						breadcrumbGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						breadcrumbGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						breadcrumbGlobalMarginMobile: {
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
					setAttributes({ breadcrumbGlobalMarginDesktop: { ...breadcrumbGlobalMarginDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ breadcrumbGlobalMarginTablet: { ...breadcrumbGlobalMarginTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ breadcrumbGlobalMarginMobile: { ...breadcrumbGlobalMarginMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalMarginCombineBtn = () => {
		setAttributes({ breadcrumbGlobalMarginLink: !breadcrumbGlobalMarginLink });
	}

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes({
			breadcrumbGlobalMarginUnits: {
				...breadcrumbGlobalMarginUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (breadcrumbGlobalBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						breadcrumbGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						breadcrumbGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						breadcrumbGlobalBorderMobile: {
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
					setAttributes({ breadcrumbGlobalBorderDesktop: { ...breadcrumbGlobalBorderDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ breadcrumbGlobalBorderTablet: { ...breadcrumbGlobalBorderTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ breadcrumbGlobalBorderMobile: { ...breadcrumbGlobalBorderMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderCombineBtn = () => {
		setAttributes({ breadcrumbGlobalBorderLink: !breadcrumbGlobalBorderLink });
	}

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes({
			breadcrumbGlobalBorderUnits: {
				...breadcrumbGlobalBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Border */

	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (breadcrumbGlobalBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						breadcrumbGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						breadcrumbGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						breadcrumbGlobalBorderRadiusMobile: {
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
					setAttributes({ breadcrumbGlobalBorderRadiusDesktop: { ...breadcrumbGlobalBorderRadiusDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ breadcrumbGlobalBorderRadiusTablet: { ...breadcrumbGlobalBorderRadiusTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ breadcrumbGlobalBorderRadiusMobile: { ...breadcrumbGlobalBorderRadiusMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes({ breadcrumbGlobalBorderRadiusLink: !breadcrumbGlobalBorderRadiusLink });
	}

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			breadcrumbGlobalBorderRadiusUnits: {
				...breadcrumbGlobalBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */
	/** End Global Border Radius */
	/** End Border Radius */

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<PanelBody title={__("Home", "frontis-blocks")} initialOpen={true}>
				<ToggleControl
					label={__("Show Home Page", "frontis-blocks")}
					checked={showHomePage}
					onChange={(value) => setAttributes({ showHomePage: value })}
				/>

				<TextControl
					label={__("Home Text", "frontis-blocks")}
					value={homeText}
					onChange={(value) => setAttributes({ homeText: value })}
				/>

				{showHomePage === true && (
					<>
						<FB_SwitcherControl
							label={__("Show Prefix", "frontis-blocks")}
							options = {[
								{ label: "Icon", value: "icon" },
								{ label: "Text", value: "text" },
							]}
							globalSwitcher={homeprefixSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ homeprefixSwitcher: value })}
						/>
						{homeprefixSwitcher === "icon" && (
							<>
								<ToggleControl
									label={__("Show Home Icon", "frontis-blocks")}
									checked={showHomeIcon}
									onChange={(value) => setAttributes({ showHomeIcon: value })}
								/>
								{showHomeIcon && (
									<FBIconPicker
										value={homeIcon}
										setIconHandler={homeIconHandler}
									/>
								)}
							</>
						)}

						{homeprefixSwitcher === "text" && ( 
							<>
								<TextControl
									label={__("Prefix Text", "frontis-blocks")}
									value={homeTextPrefix}
									onChange={(value) => setAttributes({ homeTextPrefix: value })}
								/>
							</>
						)}
					</>
				)}
			</PanelBody>

			<PanelBody title={__("Separator", "frontis-blocks")} initialOpen={false}>
				<FB_SwitcherControl
					label={__("Separator Type", "frontis-blocks")}
					options = {[
						{ label: "Icon", value: "icon" },
						{ label: "Text", value: "text" },
					]}
					globalSwitcher={separatorType}
					setGlobalSwitcher={(value) => setAttributes({ separatorType: value })}
				/>

				{separatorType === "icon" && (
					<BaseControl
						label={__("Icon", "frontis-blocks")}
					>
						<FBIconPicker
							value={separatorIcon}
							setIconHandler={separatorIconHandler}
						/>
					</BaseControl>
				)}

				{separatorType === "text" && (
					<TextControl
						label={__("Text", "frontis-blocks")}
						value={separatorText}
						onChange={(value) => setAttributes({ separatorText: value })}
					/>
				)}

			</PanelBody>

			<PanelBody title={__("Item", "frontis-blocks")} initialOpen={false}>
				<ToggleControl
					label={__("Show Item Icon", "frontis-blocks")}
					checked={showItemIcon}
					onChange={(value) => setAttributes({ showItemIcon: value })}
					help={__("Show an icon before every breadcrumb item (except Home).", "frontis-blocks")}
				/>
				{showItemIcon && (

				<BaseControl
					label={__("Item Icon", "frontis-blocks")}
				>
					<FBIconPicker
						value={itemIcon}
						setIconHandler={itemIconHandler}
					/>
				</BaseControl>
				)}
			</PanelBody>
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
			<PanelBody title={__("Items", "frontis-blocks")} initialOpen={true}>

				<FB_ResponsiveAlignmentControl
					label={__("Alignment", "frontis-blocks")}
					globalAlignment={breadcrumbAlignment} 
					setGlobalAlignment={(value) => setAttributes({ breadcrumbAlignment: value })}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={breadcrumbItemGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) => setAttributes({ breadcrumbItemGlobalTypographyData: value })}

					globalTypoType={breadcrumbItemGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							breadcrumbItemGlobalTypoType: value,
							breadcrumbItemGlobalTypoSwitcher: value === 'default' ? { ...breadcrumbItemGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...breadcrumbItemGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
						})
					}}

					globalTypoOption={breadcrumbItemGlobalTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ breadcrumbItemGlobalTypoOption: value })}

					fontFamily={breadcrumbItemFontFamily}
					onChangeFontFamily={(value) => setAttributes({ breadcrumbItemFontFamily: value, breadcrumbItemGlobalTypoSwitcher: { ...breadcrumbItemGlobalTypoSwitcher, fontFamily: value && false } })}

					fontSize={breadcrumbItemFontSize}
					onChangeFontSize={(value) => setAttributes({ breadcrumbItemFontSize: value, breadcrumbItemGlobalTypoSwitcher: { ...breadcrumbItemGlobalTypoSwitcher, fontSize: value && false } })}

					fontSizeUnits={breadcrumbItemFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ breadcrumbItemFontSizeUnits: value })}

					fontWeight={breadcrumbItemFontWeight}
					onChangeFontWeight={(value) => setAttributes({ breadcrumbItemFontWeight: value, breadcrumbItemGlobalTypoSwitcher: { ...breadcrumbItemGlobalTypoSwitcher, fontWeight: value && false } })}

					fontStyle={breadcrumbItemFontStyle}
					onChangeFontStyle={(value) => setAttributes({ breadcrumbItemFontStyle: value, breadcrumbItemGlobalTypoSwitcher: { ...breadcrumbItemGlobalTypoSwitcher, fontStyle: value && false } })}

					textTransform={breadcrumbItemTextTransform}
					onChangeTextTransform={(value) => setAttributes({ breadcrumbItemTextTransform: value, breadcrumbItemGlobalTypoSwitcher: { ...breadcrumbItemGlobalTypoSwitcher, textTransform: value && false } })}

					textDecoration={breadcrumbItemTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ breadcrumbItemTextDecoration: value, breadcrumbItemGlobalTypoSwitcher: { ...breadcrumbItemGlobalTypoSwitcher, textDecoration: value && false } })}

					letterSpacing={breadcrumbItemLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ breadcrumbItemLetterSpacing: value, breadcrumbItemGlobalTypoSwitcher: { ...breadcrumbItemGlobalTypoSwitcher, letterSpacing: value && false } })}

					letterSpacingUnits={breadcrumbItemLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ breadcrumbItemLetterSpacingUnits: value })}

					lineHeight={breadcrumbItemLineHeight}
					onChangeLineHeight={(value) => setAttributes({ breadcrumbItemLineHeight: value, breadcrumbItemGlobalTypoSwitcher: { ...breadcrumbItemGlobalTypoSwitcher, lineHeight: value && false } })}

					lineHeightUnits={breadcrumbItemLineHeightUnits}
					onChangeLineHeightUnit={(value) => setAttributes({ breadcrumbItemLineHeightUnits: value })}

					deviceType={deviceType}
					setAttributes={setAttributes}
				/>
				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={breadcrumbItemColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ breadcrumbItemColorSwitcher: value })}
				/>

				{breadcrumbItemColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={breadcrumbItemColor}
						setGlobalColor={(value) => setAttributes({ breadcrumbItemColor: value === undefined ? '' : value })}
					/>
				)}

				{breadcrumbItemColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={breadcrumbItemHoverColor}
						setGlobalColor={(value) => setAttributes({ breadcrumbItemHoverColor: value === undefined ? '' : value })}
					/>
				)}
				<FB_SwitcherControl
					label={__("Background Color", "frontis-blocks")}
					globalSwitcher={breadcrumbItemBgColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ breadcrumbItemBgColorSwitcher: value })}
				/>

				{breadcrumbItemBgColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={breadcrumbItemBgColor}
						setGlobalColor={(value) => setAttributes({ breadcrumbItemBgColor: value === undefined ? '' : value })}
					/>
				)}

				{breadcrumbItemBgColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={breadcrumbItemBgHoverColor}
						setGlobalColor={(value) => setAttributes({ breadcrumbItemBgHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_Range
					min={1}
					max={200}
					label={__("Gap", "frontis-blocks")}
					rangeValue={breadcrumbItemGap}
					onChangeHandler={(value) => setAttributes({ breadcrumbItemGap: value })}
					rangeUnitHandler={(value) => setAttributes({ breadcrumbItemGapUnits: value })}
					deviceType={deviceType}
					units={breadcrumbItemGapUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={breadcrumbItemBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ breadcrumbItemBorder: value })}
				/>

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={breadcrumbItemBorderColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ breadcrumbItemBorderColorSwitcher: value })}
				/>

				{breadcrumbItemBorderColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={breadcrumbItemBorderColor}
						setGlobalColor={(value) => setAttributes({ breadcrumbItemBorderColor: value === undefined ? '' : value })}
					/>
				)}

				{breadcrumbItemBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={breadcrumbItemBorderHoverColor}
						setGlobalColor={(value) => setAttributes({ breadcrumbItemBorderHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_Spacing
					label={__("Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={breadcrumbItemBorderUnitsHandler}
					spacingUnits={breadcrumbItemBorderUnits}
					spacingDesktop={breadcrumbItemDesktopBorder}
					spacingTablet={breadcrumbItemTabletBorder}
					spacingMobile={breadcrumbItemMobileBorder}
					handleSpacingUnitHandler={breadcrumbItemBorderUnitsChange}
					spacingCombineBtn={breadcrumbItemBorderLink}
					spacingCombineBtnHandler={breadcrumbItemBorderLinkBtn}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={breadcrumbItemBorderRadiusUnitsHandler}
					spacingUnits={breadcrumbItemBorderRadiusUnits}
					spacingDesktop={breadcrumbItemDesktopBorderRadius}
					spacingTablet={breadcrumbItemTabBorderRadius}
					spacingMobile={breadcrumbItemMobileBorderRadius}
					handleSpacingUnitHandler={breadcrumbItemBorderRadiusUnitsChange}
					spacingCombineBtn={breadcrumbItemBorderRadiusLink}
					spacingCombineBtnHandler={breadcrumbItemBorderRadiusLinkBtn}
					setAttributes={setAttributes}
				/>



				<FB_SwitcherControl
					label={__("Box Shadow ", "frontis-blocks")}
					globalSwitcher={breadcrumbItemBoxShadowSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ breadcrumbItemBoxShadowSwitcher: value })}
				/>

				{breadcrumbItemBoxShadowSwitcher === 'normal' && (
					<FB_BoxShadowControl
						label={__("Normal Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) => setAttributes({ breadcrumbItemBoxShadowValues: value })}
						initialShadowValue={breadcrumbItemBoxShadowValues}
						onBoxShadowStyleChange={(value) => setAttributes({ breadcrumbItemBoxShadowCssValue: value })}
					/>
				)}

				{breadcrumbItemBoxShadowSwitcher === 'hover' && (
					<FB_BoxShadowControl
						label={__("Hover Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) => setAttributes({ breadcrumbItemBoxShadowHoverValues: value })}
						initialShadowValue={breadcrumbItemBoxShadowHoverValues}
						onBoxShadowStyleChange={(value) => setAttributes({ breadcrumbItemBoxShadowHoverCssValue: value })}
					/>
				)}


				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={breadcrumbItemPaddingUnitsHandler}
					spacingUnits={breadcrumbItemPaddingUnits}
					spacingDesktop={breadcrumbItemDesktopPadding}
					spacingTablet={breadcrumbItemTabPadding}
					spacingMobile={breadcrumbItemMobilePadding}
					handleSpacingUnitHandler={breadcrumbItemPaddingUnitsChange}
					spacingCombineBtn={breadcrumbItemPaddingLink}
					spacingCombineBtnHandler={breadcrumbItemPaddingLinkBtn}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={breadcrumbItemMarginUnitsHandler}
					spacingUnits={breadcrumbItemMarginUnits}
					spacingDesktop={breadcrumbItemDesktopMargin}
					spacingTablet={breadcrumbItemTabMargin}
					spacingMobile={breadcrumbItemMobileMargin}
					handleSpacingUnitHandler={breadcrumbItemMarginUnitsChange}
					spacingCombineBtn={breadcrumbItemMarginLink}
					spacingCombineBtnHandler={breadcrumbItemMarginLinkBtn}
					setAttributes={setAttributes}
				/>
			</PanelBody>
			<PanelBody title={__("Current Item", "frontis-blocks")} initialOpen={false}>
				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={breadcrumbCurrentItemGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) => setAttributes({ breadcrumbCurrentItemGlobalTypographyData: value })}

					globalTypoType={breadcrumbCurrentItemGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							breadcrumbCurrentItemGlobalTypoType: value,
							breadcrumbCurrentItemGlobalTypoSwitcher: value === 'default' ? { ...breadcrumbCurrentItemGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...breadcrumbCurrentItemGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
						})
					}}

					globalTypoOption={breadcrumbCurrentItemGlobalTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ breadcrumbCurrentItemGlobalTypoOption: value })}

					fontFamily={breadcrumbCurrentItemFontFamily}
					onChangeFontFamily={(value) => setAttributes({ breadcrumbCurrentItemFontFamily: value, breadcrumbCurrentItemGlobalTypoSwitcher: { ...breadcrumbCurrentItemGlobalTypoSwitcher, fontFamily: value && false } })}

					fontSize={breadcrumbCurrentItemFontSize}
					onChangeFontSize={(value) => setAttributes({ breadcrumbCurrentItemFontSize: value, breadcrumbCurrentItemGlobalTypoSwitcher: { ...breadcrumbCurrentItemGlobalTypoSwitcher, fontSize: value && false } })}

					fontSizeUnits={breadcrumbCurrentItemFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ breadcrumbCurrentItemFontSizeUnits: value })}

					fontWeight={breadcrumbCurrentItemFontWeight}
					onChangeFontWeight={(value) => setAttributes({ breadcrumbCurrentItemFontWeight: value, breadcrumbCurrentItemGlobalTypoSwitcher: { ...breadcrumbCurrentItemGlobalTypoSwitcher, fontWeight: value && false } })}

					fontStyle={breadcrumbCurrentItemFontStyle}
					onChangeFontStyle={(value) => setAttributes({ breadcrumbCurrentItemFontStyle: value, breadcrumbCurrentItemGlobalTypoSwitcher: { ...breadcrumbCurrentItemGlobalTypoSwitcher, fontStyle: value && false } })}

					textTransform={breadcrumbCurrentItemTextTransform}
					onChangeTextTransform={(value) => setAttributes({ breadcrumbCurrentItemTextTransform: value, breadcrumbCurrentItemGlobalTypoSwitcher: { ...breadcrumbCurrentItemGlobalTypoSwitcher, textTransform: value && false } })}

					textDecoration={breadcrumbCurrentItemTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ breadcrumbCurrentItemTextDecoration: value, breadcrumbCurrentItemGlobalTypoSwitcher: { ...breadcrumbCurrentItemGlobalTypoSwitcher, textDecoration: value && false } })}

					letterSpacing={breadcrumbCurrentItemLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ breadcrumbCurrentItemLetterSpacing: value, breadcrumbCurrentItemGlobalTypoSwitcher: { ...breadcrumbCurrentItemGlobalTypoSwitcher, letterSpacing: value && false } })}

					letterSpacingUnits={breadcrumbCurrentItemLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ breadcrumbCurrentItemLetterSpacingUnits: value })}

					lineHeight={breadcrumbCurrentItemLineHeight}
					onChangeLineHeight={(value) => setAttributes({ breadcrumbCurrentItemLineHeight: value, breadcrumbCurrentItemGlobalTypoSwitcher: { ...breadcrumbCurrentItemGlobalTypoSwitcher, lineHeight: value && false } })}

					lineHeightUnits={breadcrumbCurrentItemLineHeightUnits}
					onChangeLineHeightUnit={(value) => setAttributes({ breadcrumbCurrentItemLineHeightUnits: value })}

					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={breadcrumbCurrentItemColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ breadcrumbCurrentItemColorSwitcher: value })}
				/>

				{breadcrumbCurrentItemColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={breadcrumbCurrentItemColor}
						setGlobalColor={(value) => setAttributes({ breadcrumbCurrentItemColor: value === undefined ? '' : value })}
					/>
				)}

				{breadcrumbCurrentItemColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={breadcrumbCurrentItemHoverColor}
						setGlobalColor={(value) => setAttributes({ breadcrumbCurrentItemHoverColor: value === undefined ? '' : value })}
					/>
				)}
				<FB_SwitcherControl
					label={__("Background Color", "frontis-blocks")}
					globalSwitcher={breadcrumbCurrentItemBgColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ breadcrumbCurrentItemBgColorSwitcher: value })}
				/>

				{breadcrumbCurrentItemBgColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={breadcrumbCurrentItemBgColor}
						setGlobalColor={(value) => setAttributes({ breadcrumbCurrentItemBgColor: value === undefined ? '' : value })}
					/>
				)}

				{breadcrumbCurrentItemBgColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={breadcrumbCurrentItemBgHoverColor}
						setGlobalColor={(value) => setAttributes({ breadcrumbCurrentItemBgHoverColor: value === undefined ? '' : value })}
					/>
				)}
			</PanelBody>
			{showHomeIcon && (
				<PanelBody title={__("Home Icon", "frontis-blocks")} initialOpen={false}>
					<FB_Range
						min={1}
						max={200}
						label={__("Icon Size", "frontis-blocks")}
						rangeValue={breadcrumbIconSize}
						onChangeHandler={(value) => setAttributes({ breadcrumbIconSize: value })}
						rangeUnitHandler={(value) => setAttributes({ breadcrumbIconSizeUnits: value })}
						deviceType={deviceType}
						units={breadcrumbIconSizeUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={"100"}
					/>

					<FB_SwitcherControl
						label={__("Color", "frontis-blocks")}
						globalSwitcher={breadcrumbIconColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ breadcrumbIconColorSwitcher: value })}
					/>

					{breadcrumbIconColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={breadcrumbIconColor}
							setGlobalColor={(value) => setAttributes({ breadcrumbIconColor: value === undefined ? '' : value })}
						/>
					)}

					{breadcrumbIconColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={breadcrumbIconHoverColor}
							setGlobalColor={(value) => setAttributes({ breadcrumbIconHoverColor: value === undefined ? '' : value })}
						/>
					)}

					<FB_SwitcherControl
						label={__("Background Color", "frontis-blocks")}
						globalSwitcher={breadcrumbIconBgColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ breadcrumbIconBgColorSwitcher: value })}
					/>

					{breadcrumbIconBgColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={breadcrumbIconBgColor}
							setGlobalColor={(value) => setAttributes({ breadcrumbIconBgColor: value === undefined ? '' : value })}
						/>
					)}

					{breadcrumbIconBgColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={breadcrumbIconBgHoverColor}
							setGlobalColor={(value) => setAttributes({ breadcrumbIconBgHoverColor: value === undefined ? '' : value })}
						/>
					)}
					<FB_Range
						min={1}
						max={200}
						label={__("Gap", "frontis-blocks")}
						rangeValue={breadcrumbHomeIconGap}
						onChangeHandler={(value) => setAttributes({ breadcrumbHomeIconGap: value })}
						rangeUnitHandler={(value) => setAttributes({ breadcrumbHomeIconGapUnits: value })}
						deviceType={deviceType}
						units={breadcrumbHomeIconGapUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>
				</PanelBody>
			)}
			<PanelBody title={__("Separator", "frontis-blocks")} initialOpen={false}>
				<FB_Range
					min={1}
					max={200}
					label={__("Icon Size", "frontis-blocks")}
					rangeValue={breadcrumbSeperatorSize}
					onChangeHandler={(value) => setAttributes({ breadcrumbSeperatorSize: value })}
					rangeUnitHandler={(value) => setAttributes({ breadcrumbSeperatorSizeUnits: value })}
					deviceType={deviceType}
					units={breadcrumbSeperatorSizeUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={"100"}
				/>

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={breadcrumbSeperatorColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ breadcrumbSeperatorColorSwitcher: value })}
				/>

				{breadcrumbSeperatorColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={breadcrumbSeperatorColor}
						setGlobalColor={(value) => setAttributes({ breadcrumbSeperatorColor: value === undefined ? '' : value })}
					/>
				)}

				{breadcrumbSeperatorColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={breadcrumbSeperatorHoverColor}
						setGlobalColor={(value) => setAttributes({ breadcrumbSeperatorHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_SwitcherControl
					label={__("Background Color", "frontis-blocks")}
					globalSwitcher={breadcrumbSeperatorBgColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ breadcrumbSeperatorBgColorSwitcher: value })}
				/>

				{breadcrumbSeperatorBgColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={breadcrumbSeperatorBgColor}
						setGlobalColor={(value) => setAttributes({ breadcrumbSeperatorBgColor: value === undefined ? '' : value })}
					/>
				)}

				{breadcrumbSeperatorBgColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={breadcrumbSeperatorBgHoverColor}
						setGlobalColor={(value) => setAttributes({ breadcrumbSeperatorBgHoverColor: value === undefined ? '' : value })}
					/>
				)}
				<FB_Range
					min={1}
					max={200}
					label={__("Gap", "frontis-blocks")}
					rangeValue={breadcrumbSeperatorIconGap}
					onChangeHandler={(value) => setAttributes({ breadcrumbSeperatorIconGap: value })}
					rangeUnitHandler={(value) => setAttributes({ breadcrumbSeperatorIconGapUnits: value })}
					deviceType={deviceType}
					units={breadcrumbSeperatorIconGapUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
			</PanelBody>
			{showItemIcon && (
				<PanelBody title={__("Item Icons", "frontis-blocks")} initialOpen={false}>
					<FB_Range
						min={1}
						max={200}
						label={__("Icon Size", "frontis-blocks")}
						rangeValue={breadcrumbItemIconSize}
						onChangeHandler={(value) => setAttributes({ breadcrumbItemIconSize: value })}
						rangeUnitHandler={(value) => setAttributes({ breadcrumbItemIconSizeUnits: value })}
						deviceType={deviceType}
						units={breadcrumbItemIconSizeUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={"100"}
					/>

					<FB_SwitcherControl
						label={__("Color", "frontis-blocks")}
						globalSwitcher={breadcrumbItemIconColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ breadcrumbItemIconColorSwitcher: value })}
					/>

					{breadcrumbItemIconColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={breadcrumbItemIconColor}
							setGlobalColor={(value) => setAttributes({ breadcrumbItemIconColor: value === undefined ? '' : value })}
						/>
					)}

					{breadcrumbItemIconColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={breadcrumbItemIconHoverColor}
							setGlobalColor={(value) => setAttributes({ breadcrumbItemIconHoverColor: value === undefined ? '' : value })}
						/>
					)}

					<FB_SwitcherControl
						label={__("Background Color", "frontis-blocks")}
						globalSwitcher={breadcrumbItemIconBgColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ breadcrumbItemIconBgColorSwitcher: value })}
					/>

					{breadcrumbItemIconBgColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={breadcrumbItemIconBgColor}
							setGlobalColor={(value) => setAttributes({ breadcrumbItemIconBgColor: value === undefined ? '' : value })}
						/>
					)}

					{breadcrumbItemIconBgColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={breadcrumbItemIconBgHoverColor}
							setGlobalColor={(value) => setAttributes({ breadcrumbItemIconBgHoverColor: value === undefined ? '' : value })}
						/>
					)}
					<FB_Range
						min={1}
						max={200}
						label={__("Gap", "frontis-blocks")}
						rangeValue={breadcrumbItemIconGap}
						onChangeHandler={(value) => setAttributes({ breadcrumbItemIconGap: value })}
						rangeUnitHandler={(value) => setAttributes({ breadcrumbItemIconGapUnits: value })}
						deviceType={deviceType}
						units={breadcrumbItemIconGapUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>
				</PanelBody>
			)}
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
							rangeValue={breadcrumbGlobalZIndex}
							onChangeHandler={(value) => setAttributes({ breadcrumbGlobalZIndex: value === 0 ? undefined : value })}
							deviceType={deviceType}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
							isRangeUnit={false}
						/>

						<SelectControl
							label={__("Overflow", "frontis-blocks")}
							value={breadcrumbOverflow}
							options={OVERFLOW_OP}
							onChange={(value) => setAttributes({ breadcrumbOverflow: value })}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={breadcrumbPositionType}
							setPositionType={(value) => setAttributes({ breadcrumbPositionType: value })}

							HZOrientationType={breadcrumbHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ breadcrumbHZOrientationType: value })
							}
							VROrientationType={breadcrumbVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ breadcrumbVROrientationType: value })
							}

							HZLeftOffset={breadcrumbHZLeftOffset}
							setHZLeftOffset={(value) => setAttributes({ breadcrumbHZLeftOffset: value })}
							HZLeftOffsetUnits={breadcrumbHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) => setAttributes({ breadcrumbHZLeftOffsetUnits: value })}
							HZRightOffset={breadcrumbHZRightOffset}
							setHZRightOffset={(value) => setAttributes({ breadcrumbHZRightOffset: value })}
							HZRightOffsetUnits={breadcrumbHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) => setAttributes({ breadcrumbHZRightOffsetUnits: value })}

							VRTopOffset={breadcrumbVRTopOffset}
							setVRTopOffset={(value) => setAttributes({ breadcrumbVRTopOffset: value })}
							VRTopOffsetUnits={breadcrumbVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) => setAttributes({ breadcrumbVRTopOffsetUnits: value })}
							VRBottomOffset={breadcrumbVRBottomOffset}
							setVRBottomOffset={(value) => setAttributes({ breadcrumbVRBottomOffset: value })}
							VRBottomOffsetUnits={breadcrumbVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) => setAttributes({ breadcrumbVRBottomOffsetUnits: value })}

							setAttributes={setAttributes}
						/>

						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={breadcrumbGlobalWraperID}
							onChangeValue={(value) => setAttributes({ breadcrumbGlobalWraperID: value })}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={breadcrumbGlobalWraperClass}
							onChangeValue={(value) => setAttributes({ breadcrumbGlobalWraperClass: value })}
							helpText={__("Separate with spaces key.", "frontis-blocks")}
						/>

					</PanelBody>

					<PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
						<FB_Spacing
							label={__("Padding", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
							spacingUnits={breadcrumbGlobalPaddingUnits}
							spacingDesktop={breadcrumbGlobalPaddingDesktop}
							spacingTablet={breadcrumbGlobalPaddingTablet}
							spacingMobile={breadcrumbGlobalPaddingMobile}
							handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
							spacingCombineBtn={breadcrumbGlobalPaddingLink}
							spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={__("Margin", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalMarginUnitsHandler}
							spacingUnits={breadcrumbGlobalMarginUnits}
							spacingDesktop={breadcrumbGlobalMarginDesktop}
							spacingTablet={breadcrumbGlobalMarginTablet}
							spacingMobile={breadcrumbGlobalMarginMobile}
							handleSpacingUnitHandler={handleGlobalMarginUnitChange}
							spacingCombineBtn={breadcrumbGlobalMarginLink}
							spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
							setAttributes={setAttributes}
						/>
					</PanelBody>

					<PanelBody
						title={__("Background", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_SwitcherControl
							label={__("Background Type", "frontis-blocks")}
							globalSwitcher={breadcrumbGlobalBgColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ breadcrumbGlobalBgColorSwitcher: value })}
						/>

						{breadcrumbGlobalBgColorSwitcher === 'normal' && (
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
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
												<path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
												<path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
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
															onClick={() => setAttributes({ breadcrumbGlobalBgNormalBackgroundType: item.value })}
															className={`fb-setting-background-color-panel-btn-switcher ${breadcrumbGlobalBgNormalBackgroundType === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{breadcrumbGlobalBgNormalBackgroundType === 'classic' && (

												<>
													<FB_ColorControl
														label={__("Color", "frontis-blocks")}
														globalColor={breadcrumbGlobalBgNormalClassicColor}
														setGlobalColor={(value) => setAttributes({ breadcrumbGlobalBgNormalClassicColor: value === undefined ? '' : value })}
													/>

													<FB_ResponsiveBackgroundImageControl
														deviceType={deviceType}
														globalBackgroundImageUrl={breadcrumbGlobalBgNormalBackgroundImageUrl}
														setGlobalBackgroundImageUrl={(value) => setAttributes({ breadcrumbGlobalBgNormalBackgroundImageUrl: value })}
														globalBackgroundImageAlt={breadcrumbGlobalBgNormalBackgroundImageAlt}
														setGlobalBackgroundImageAlt={(value) => setAttributes({ breadcrumbGlobalBgNormalBackgroundImageAlt: value })}
														globalBackgroundImageID={breadcrumbGlobalBgNormalBackgroundImageID}
														setGlobalBackgroundImageID={(value) => setAttributes({ breadcrumbGlobalBgNormalBackgroundImageID: value })}
														globalBackgroundImagePosition={breadcrumbGlobalBgNormalBackgroundImagePosition}
														setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ breadcrumbGlobalBgNormalBackgroundImagePosition: newPosition })}
														globalBackgroundImageAttachment={breadcrumbGlobalBgNormalBackgroundImageAttachment}
														setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ breadcrumbGlobalBgNormalBackgroundImageAttachment: newAttachment })}
														globalBackgroundImageRepeat={breadcrumbGlobalBgNormalBackgroundImageRepeat}
														setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ breadcrumbGlobalBgNormalBackgroundImageRepeat: newRepeat })}
														globalBackgroundImageSize={breadcrumbGlobalBgNormalBackgroundImageSize}
														setGlobalBackgroundImageSize={(newSize) => setAttributes({ breadcrumbGlobalBgNormalBackgroundImageSize: newSize })}
														setAttributes={setAttributes}
													/>

												</>
											)}

											{breadcrumbGlobalBgNormalBackgroundType === 'gradient' && (
												<FB_GradientColorControl
													globalCustomGradientSwitcher={breadcrumbGlobalBgNormalCustomGradientSwitcher}
													setGlobalCustomGradientSwitcher={(value) => setAttributes({ breadcrumbGlobalBgNormalCustomGradientSwitcher: value })}
													globalCustomGradientInputValue={breadcrumbGlobalBgNormalCustomGradientInputValue}
													setGlobalCustomGradientInputValue={(value) => setAttributes({ breadcrumbGlobalBgNormalCustomGradientInputValue: value })}
													globalGradientColor={breadcrumbGlobalBgNormalGradientColor}
													setGlobalGradientColor={(value) => setAttributes({ breadcrumbGlobalBgNormalGradientColor: value === undefined ? null : value })}
												/>
											)}
										</div>
									)}
								/>
							</BaseControl>

						)}

						{breadcrumbGlobalBgColorSwitcher === 'hover' && (
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
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
												<path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
												<path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
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
															onClick={() => setAttributes({ breadcrumbGlobalBgHoverBackgroundType: item.value })}
															className={`fb-setting-background-color-panel-btn-switcher ${breadcrumbGlobalBgHoverBackgroundType === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{breadcrumbGlobalBgHoverBackgroundType === 'classic' && (

												<>
													<FB_ColorControl
														label={__("Color", "frontis-blocks")}
														globalColor={breadcrumbGlobalBgHoverClassicColor}
														setGlobalColor={(value) => setAttributes({ breadcrumbGlobalBgHoverClassicColor: value === undefined ? '' : value })}
													/>

													<FB_ResponsiveBackgroundImageControl
														deviceType={deviceType}
														globalBackgroundImageUrl={breadcrumbGlobalBgHoverBackgroundImageUrl}
														setGlobalBackgroundImageUrl={(value) => setAttributes({ breadcrumbGlobalBgHoverBackgroundImageUrl: value })}
														globalBackgroundImageAlt={breadcrumbGlobalBgNormalBackgroundImageAlt}
														setGlobalBackgroundImageAlt={(value) => setAttributes({ breadcrumbGlobalBgNormalBackgroundImageAlt: value })}
														globalBackgroundImageID={breadcrumbGlobalBgNormalBackgroundImageID}
														setGlobalBackgroundImageID={(value) => setAttributes({ breadcrumbGlobalBgNormalBackgroundImageID: value })}
														globalBackgroundImagePosition={breadcrumbGlobalBgHoverBackgroundImagePosition}
														setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ breadcrumbGlobalBgHoverBackgroundImagePosition: newPosition })}
														globalBackgroundImageAttachment={breadcrumbGlobalBgHoverBackgroundImageAttachment}
														setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ breadcrumbGlobalBgHoverBackgroundImageAttachment: newAttachment })}
														globalBackgroundImageRepeat={breadcrumbGlobalBgHoverBackgroundImageRepeat}
														setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ breadcrumbGlobalBgHoverBackgroundImageRepeat: newRepeat })}
														globalBackgroundImageSize={breadcrumbGlobalBgHoverBackgroundImageSize}
														setGlobalBackgroundImageSize={(newSize) => setAttributes({ breadcrumbGlobalBgHoverBackgroundImageSize: newSize })}
														setAttributes={setAttributes}
													/>

												</>
											)}

											{breadcrumbGlobalBgHoverBackgroundType === 'gradient' && (
												<FB_GradientColorControl
													globalCustomGradientSwitcher={breadcrumbGlobalBgHoverCustomGradientSwitcher}
													setGlobalCustomGradientSwitcher={(value) => setAttributes({ breadcrumbGlobalBgHoverCustomGradientSwitcher: value })}
													globalCustomGradientInputValue={breadcrumbGlobalBgHoverCustomGradientInputValue}
													setGlobalCustomGradientInputValue={(value) => setAttributes({ breadcrumbGlobalBgHoverCustomGradientInputValue: value })}
													globalGradientColor={breadcrumbGlobalBgHoverGradientColor}
													setGlobalGradientColor={(value) => setAttributes({ breadcrumbGlobalBgHoverGradientColor: value === undefined ? null : value })}
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
							value={breadcrumbGlobalBorder}
							options={BORDER_STYLES}
							onChange={(value) => setAttributes({ breadcrumbGlobalBorder: value })}
						/>


						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={breadcrumbGlobalBorderColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ breadcrumbGlobalBorderColorSwitcher: value })}
						/>

						{breadcrumbGlobalBorderColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={breadcrumbGlobalBorderColor}
								setGlobalColor={(value) => setAttributes({ breadcrumbGlobalBorderColor: value === undefined ? '' : value })}
							/>
						)}

						{breadcrumbGlobalBorderColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={breadcrumbGlobalBorderHoverColor}
								setGlobalColor={(value) => setAttributes({ breadcrumbGlobalBorderHoverColor: value === undefined ? '' : value })}
							/>
						)}

						<FB_Spacing
							label={__("Border", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderUnitsHandler}
							spacingUnits={breadcrumbGlobalBorderUnits}
							spacingDesktop={breadcrumbGlobalBorderDesktop}
							spacingTablet={breadcrumbGlobalBorderTablet}
							spacingMobile={breadcrumbGlobalBorderMobile}
							handleSpacingUnitHandler={handleGlobalBorderUnitChange}
							spacingCombineBtn={breadcrumbGlobalBorderLink}
							spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_Spacing
							label={__("Border Radius", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
							spacingUnits={breadcrumbGlobalBorderRadiusUnits}
							spacingDesktop={breadcrumbGlobalBorderRadiusDesktop}
							spacingTablet={breadcrumbGlobalBorderRadiusTablet}
							spacingMobile={breadcrumbGlobalBorderRadiusMobile}
							handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
							spacingCombineBtn={breadcrumbGlobalBorderRadiusLink}
							spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_SwitcherControl
							label={__("Box Shadow", "frontis-blocks")}
							globalSwitcher={breadcrumbGlobalBoxShadowSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ breadcrumbGlobalBoxShadowSwitcher: value })}
						/>

						{breadcrumbGlobalBoxShadowSwitcher === 'normal' && (
							<FB_BoxShadowControl
								label={__("Normal Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) => setAttributes({ breadcrumbGlobalBoxShadowValues: value })}
								initialShadowValue={breadcrumbGlobalBoxShadowValues}
								onBoxShadowStyleChange={(value) => setAttributes({ breadcrumbGlobalBoxShadowCssValue: value })}
							/>
						)}

						{breadcrumbGlobalBoxShadowSwitcher === 'hover' && (
							<FB_BoxShadowControl
								label={__("Hover Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) => setAttributes({ breadcrumbGlobalBoxShadowHoverValues: value })}
								initialShadowValue={breadcrumbGlobalBoxShadowHoverValues}
								onBoxShadowStyleChange={(value) => setAttributes({ breadcrumbGlobalBoxShadowHoverCssValue: value })}
							/>
						)}
					</PanelBody>

					<PanelBody
						title={__("Responsive Control", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-responsive-control-wrapper"
					>
						<FB_VisibilityControl
							desktopValue={breadcrumbDesktopSwitcher}
							setDesktopValue={(value) => setAttributes({ breadcrumbDesktopSwitcher: value })}

							tabletValue={breadcrumbTabletSwitcher}
							setTabletValue={(value) => setAttributes({ breadcrumbTabletSwitcher: value })}

							mobileValue={breadcrumbMobileSwitcher}
							setMobileValue={(value) => setAttributes({ breadcrumbMobileSwitcher: value })}
						/>
					</PanelBody>
					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor
							value={breadcrumbCustomCSS}
							onChangeValue={(value) => setAttributes({ breadcrumbCustomCSS: value })}
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