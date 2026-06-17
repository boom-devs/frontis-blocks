import { __ } from "@wordpress/i18n";

import { useBlockProps, InspectorControls } from "@wordpress/block-editor";

import {
	PanelBody,
	DateTimePicker,
	TextControl,
	ToggleControl,
	SelectControl,
	ColorPicker,
	BaseControl,
} from "@wordpress/components";
import { useEffect, useState, memo } from "@wordpress/element";

import {
	BORDER_STYLES,
	LAYOUT_ALIGNMENT,
	TEXT_ALIGNMENT,
	SELECT_SEPARATOR_TYPE,
} from "@Constants/fbConstants";

import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import FB_TypographyControl from "@Components/typography-control";
import FB_SwitcherControl from "@Components/switcher-control";
import FB_ColorControl from "@Components/color-control";
import FB_BackgroundColorControl from "@Components/background-color-control";
import { useDeviceType } from "@Config/displayType";
import "./editor.scss";
import { ButtonGroup } from "@wordpress/components";
import { Button } from "@wordpress/components";
import FB_InputControl from "@Components/input-control";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import FB_AlignmentControl from "@Components/alignment-control";
import FB_PositionControl from "@Components/position-control";
import FB_VisibilityControl from "@Components/visibility-control";
import FB_IconPicker from "@Components/icon-picker";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_Presets from "@Components/presets";
import { countdownPresets } from "./presets";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		blockID,
		countDownPresetStyle,
		advancedCountdownStartDate,
		targetDate,
		until_text,
		advancedCountdownShowSunIcon,
		advancedCountdownSunIcon,

		// Style Tab: Container
		advancedCountdownContainerSize,
		advancedCountdownSvgProgressSize,
		advancedCountdownStyle2ProgressBarSize,
		advancedCountdownContainerSizeStyle3,
		advancedCountdownContainerSizeStyle3Container,
		advancedCountdownContainerSizeStyle5,
		globalBgColorSwitcher,
		globalBackgroundType,
		globalClassicColor,
		globalGradientColor,
		globalCustomGradientSwitcher,
		globalCustomGradientInputValue,
		globalBackgroundImageUrl,
		globalBackgroundImageAlt,
		globalBackgroundImageID,
		globalBackgroundImagePosition,
		globalBackgroundImageAttachment,
		globalBackgroundImageSize,
		globalBackgroundImageRepeat,
		hoverBackgroundType,
		hoverClassicColor,
		hoverGradientColor,
		hoverCustomGradientSwitcher,
		hoverCustomGradientInputValue,
		hoverBackgroundImageUrl,
		hoverBackgroundImageAlt,
		hoverBackgroundImageID,
		hoverBackgroundImagePosition,
		hoverBackgroundImageAttachment,
		hoverBackgroundImageSize,
		hoverBackgroundImageRepeat,
		advancedCountdownContainerHoverTransition,
		advancedCountdownItemWrapperBorder, // This is the main border style
		advancedCountdownItemWrapperBorderColorSwitcher,
		advancedCountdownItemWrapperBorderColor,
		advancedCountdownBorderHoverColor,
		advancedCountdownBorderHoverTransition,
		advancedCountdownItemWrapperBorderTypeUnits,
		advancedCountdownItemWrapperBorderTypeDesktop,
		advancedCountdownItemWrapperBorderTypeTablet,
		advancedCountdownItemWrapperBorderTypeMobile,
		advancedCountdownItemWrapperBorderTypeLink,
		advancedCountdownBorderRadius, // This is the main border radius
		advancedCountdownItemWrapperBorderRadiusUnits,
		advancedCountdownItemWrapperBorderRadiusDesktop,
		advancedCountdownItemWrapperBorderRadiusTablet,
		advancedCountdownItemWrapperBorderRadiusMobile,
		advancedCountdownItemWrapperBorderRadiusLink,
		advancedCountdownPreset5DashGap,
		advancedCountdownPreset4DashGap,
		countDownLayoutAlignment, // Renamed from container_alignment
		advancedCountdownItemWrapperMarginUnits,
		advancedCountdownItemWrapperMarginDesktop,
		advancedCountdownItemWrapperMarginTablet,
		advancedCountdownItemWrapperMarginMobile,
		advancedCountdownItemWrapperMarginLink,
		advancedCountdownItemWrapperPaddingUnits,
		advancedCountdownItemWrapperPaddingDesktop,
		advancedCountdownItemWrapperPaddingTablet,
		advancedCountdownItemWrapperPaddingMobile,
		advancedCountdownItemWrapperPaddingLink,
		advancedCountdownFooterPadding, // Renamed from container_padding
		advancedCountdownFooterPaddingLink, // Renamed from container_padding_link

		// Style Tab: Dashed Progress Bar (Style 2)
		advancedCountdownStyle2ProgressBarColor,
		advancedCountdownStyle2DashCount,

		// Style Tab: Dots Configuration (Style 5)
		advancedCountdownDaysTotalDots,
		advancedCountdownHoursTotalDots,
		advancedCountdownMinutesTotalDots,

		// Style Tab: Progress & Indicator (Style 3)
		advancedCountdownStyle3ContainerBg,
		advancedCountdownStyle3TimeboxBg,
		advancedCountdownStyle3IndicatorColor,
		advancedCountdownStyle3IndicatorTextColor,
		advancedCountdownStyle3TimeGap,
		advancedCountdownStyle3DashHighlight,
		advancedCountdownStyle3TextGlobalTypoSwitcher,
		advancedCountdownStyle3TextGlobalTypographyData,
		advancedCountdownStyle3TextGlobalTypoType,
		advancedCountdownStyle3TextGlobalTypoOption,
		advancedCountdownStyle3TextFontFamily,
		advancedCountdownStyle3TextFontSize,
		advancedCountdownStyle3TextFontSizeUnits,
		advancedCountdownStyle3TextFontWeight,
		advancedCountdownStyle3TextFontStyle,
		advancedCountdownStyle3TextTextTransform,
		advancedCountdownStyle3TextTextDecoration,
		advancedCountdownStyle3TextLetterSpacing,
		advancedCountdownStyle3TextLetterSpacingUnits,
		advancedCountdownStyle3TextLineHeight,
		advancedCountdownStyle3TextLineHeightUnits,

		// Style Tab: Dots Style (Style 5)
		advancedCountdownActiveDotColor,
		advancedCountdownInactiveDotColor,
		advancedCountdownDotsThickness,
		advancedCountdownDotsGap,
		advancedCountdownDotsGlowEffect,
		advancedCountdownGlowIntensity,
		advancedCountdownGlowColor,

		// Style Tab: Dash Pattern (Style 4)
		advancedCountdownDashColor,
		advancedCountdownDashSize,

		// Style Tab: Label Alignment (Style 4)
		advancedCountdownLabelAlignmentStyle4,
		advancedCountdownLabelTypographyStyle4GlobalTypoSwitcher,
		advancedCountdownLabelTypographyStyle4GlobalTypographyData,
		advancedCountdownLabelTypographyStyle4GlobalTypoType,
		advancedCountdownLabelTypographyStyle4GlobalTypoOption,
		advancedCountdownLabelTypographyStyle4FontFamily,
		advancedCountdownLabelTypographyStyle4FontSize,
		advancedCountdownLabelTypographyStyle4FontSizeUnits,
		advancedCountdownLabelTypographyStyle4FontWeight,
		advancedCountdownLabelTypographyStyle4FontStyle,
		advancedCountdownLabelTypographyStyle4TextTransform,
		advancedCountdownLabelTypographyStyle4TextDecoration,
		advancedCountdownLabelTypographyStyle4LetterSpacing,
		advancedCountdownLabelTypographyStyle4LetterSpacingUnits,
		advancedCountdownLabelTypographyStyle4LineHeight,
		advancedCountdownLabelTypographyStyle4LineHeightUnits,
		advancedCountdownLabelColorStyle4,

		// Style Tab: Icon (Preset 1)
		advancedCountdownIconSize,
		advancedCountdownIconColorNormal,
		advancedCountdownIconBgColorNormal,
		advancedCountdownIconColorHover,
		advancedCountdownIconBgColorHover,

		// Style Tab: Countdown Text
		advancedCountdownLabelDays,
		advancedCountdownLabelHours,
		advancedCountdownLabelMinutes,
		advancedCountdownCountdownTypographyGlobalTypoSwitcher,
		advancedCountdownCountdownTypographyGlobalTypographyData,
		advancedCountdownCountdownTypographyGlobalTypoType,
		advancedCountdownCountdownTypographyGlobalTypoOption,
		advancedCountdownCountdownTypographyFontFamily,
		advancedCountdownCountdownTypographyFontSize,
		advancedCountdownCountdownTypographyFontSizeUnits,
		advancedCountdownCountdownTypographyFontWeight,
		advancedCountdownCountdownTypographyFontStyle,
		advancedCountdownCountdownTypographyTextTransform,
		advancedCountdownCountdownTypographyTextDecoration,
		advancedCountdownCountdownTypographyLetterSpacing,
		advancedCountdownCountdownTypographyLetterSpacingUnits,
		advancedCountdownCountdownTypographyLineHeight,
		advancedCountdownCountdownTypographyLineHeightUnits,
		advancedCountdownLabelColorStyleMultiple,
		advancedCountdownTimeValTypographyGlobalTypoSwitcher,
		advancedCountdownTimeValTypographyGlobalTypographyData,
		advancedCountdownTimeValTypographyGlobalTypoType,
		advancedCountdownTimeValTypographyGlobalTypoOption,
		advancedCountdownTimeValTypographyFontFamily,
		advancedCountdownTimeValTypographyFontSize,
		advancedCountdownTimeValTypographyFontSizeUnits,
		advancedCountdownTimeValTypographyFontWeight,
		advancedCountdownTimeValTypographyFontStyle,
		advancedCountdownTimeValTypographyTextTransform,
		advancedCountdownTimeValTypographyTextDecoration,
		advancedCountdownTimeValTypographyLetterSpacing,
		advancedCountdownTimeValTypographyLetterSpacingUnits,
		advancedCountdownTimeValTypographyLineHeight,
		advancedCountdownTimeValTypographyLineHeightUnits,
		advancedCountdownTimeValLabelColor,
		advancedCountdownLabelColorStyle4Digit,
		advancedCountdownTextColorStyle2,
		advancedCountdownTextColorStyle3,

		// Style Tab: Separator
		advancedCountdownSeparatorTypographyGlobalTypoSwitcher,
		advancedCountdownSeparatorTypographyGlobalTypographyData,
		advancedCountdownSeparatorTypographyGlobalTypoType,
		advancedCountdownSeparatorTypographyGlobalTypoOption,
		advancedCountdownSeparatorTypographyFontFamily,
		advancedCountdownSeparatorTypographyFontSize,
		advancedCountdownSeparatorTypographyFontSizeUnits,
		advancedCountdownSeparatorTypographyFontWeight,
		advancedCountdownSeparatorTypographyFontStyle,
		advancedCountdownSeparatorTypographyTextTransform,
		advancedCountdownSeparatorTypographyTextDecoration,
		advancedCountdownSeparatorTypographyLetterSpacing,
		advancedCountdownSeparatorTypographyLetterSpacingUnits,
		advancedCountdownSeparatorTypographyLineHeight,
		advancedCountdownSeparatorTypographyLineHeightUnits,
		advancedCountdownSeparatorColor,
		advancedCountdownSeparatorHoverColor,
		advancedCountdownSeparatorSpacing,

		// Style Tab: Overlay Bg
		advancedCountdownSvgBgOverlayColor,
		advancedCountdownSvgBgOverlayOpacity,

		// Style Tab: SVG Progress Bar (Style 1)
		advancedCountdownProgressCircleActiveColor,
		advancedCountdownProgressCircleInactiveColor,
		advancedCountdownSvgStrokeWidth,

		// Style Tab: SVG Progress Bar (Style 2)
		advancedCountdownProgressColorStyle2,
		advancedCountdownSvgStrokeWidthStyle2,

		// Style Tab: Footer Text
		advancedCountdownFooterTypographyGlobalTypoSwitcher,
		advancedCountdownFooterTypographyGlobalTypographyData,
		advancedCountdownFooterTypographyGlobalTypoType,
		advancedCountdownFooterTypographyGlobalTypoOption,
		advancedCountdownFooterTypographyFontFamily,
		advancedCountdownFooterTypographyFontSize,
		advancedCountdownFooterTypographyFontSizeUnits,
		advancedCountdownFooterTypographyFontWeight,
		advancedCountdownFooterTypographyFontStyle,
		advancedCountdownFooterTypographyTextTransform,
		advancedCountdownFooterTypographyTextDecoration,
		advancedCountdownFooterTypographyLetterSpacing,
		advancedCountdownFooterTypographyLetterSpacingUnits,
		advancedCountdownFooterTypographyLineHeight,
		advancedCountdownFooterTypographyLineHeightUnits,
		advancedCountdownFooterTextColor,
		advancedCountdownFooterBgColor,
		advancedCountdownFooterTextColorHover,
		advancedCountdownFooterBgColorHover,
		advancedCountdownFooterBgCustomStyle2,
		advancedCountdownFooterMargin,
		advancedCountdownFooterMarginLink,

		// Global Settings
		countDownGlobalWraperCustomCSS,
		countDownGlobalWraperID,
		countDownGlobalWraperClass,
		countDownDesktopSwitcher,
		countDownTabletSwitcher,
		countDownMobileSwitcher,
		countDownZIndex,
		countDownOverflow,
		countDownPositionType,
		countDownHZOrientationType,
		countDownVROrientationType,
		countDownHZLeftOffset,
		countDownHZLeftOffsetUnits,
		countDownHZRightOffset,
		countDownHZRightOffsetUnits,
		countDownVRTopOffset,
		countDownVRTopOffsetUnits,
		countDownVRBottomOffset,
		countDownVRBottomOffsetUnits,
	} = attributes;

	const deviceType = useDeviceType();

	// Set default date to one week from today
	const defaultDate = new Date();
	defaultDate.setDate(defaultDate.getDate() + 7);

	const [startDate, setStartDate] = useState(
		advancedCountdownStartDate
			? new Date(advancedCountdownStartDate)
			: new Date(),
	);
	const [date, setDate] = useState(
		targetDate ? new Date(targetDate) : defaultDate,
	);

	// Sync date with attributes if not already set
	useEffect(() => {
		if (!targetDate) {
			setAttributes({ targetDate: defaultDate.toISOString() });
		}
		if (!advancedCountdownStartDate) {
			setAttributes({ advancedCountdownStartDate: new Date().toISOString() });
		}
	}, [targetDate, setAttributes, defaultDate, advancedCountdownStartDate]);

	// Update target date when date changes
	useEffect(() => {
		setAttributes({ targetDate: date.toISOString() });
	}, [date, setAttributes]);

	// Update advancedCountdownStartDate when startDate changes
	useEffect(() => {
		setAttributes({ advancedCountdownStartDate: startDate.toISOString() });
	}, [startDate, setAttributes]);

	/** Start Item Wrapper Border Width */
	const handleAdvancedCountdownItemWrapperBorderUnitHandlerFn = (
		event,
		position,
	) => {
		const value = event.target.value;
		if (advancedCountdownItemWrapperBorderTypeLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						advancedCountdownItemWrapperBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						advancedCountdownItemWrapperBorderTypeTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						advancedCountdownItemWrapperBorderTypeMobile: {
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
						advancedCountdownItemWrapperBorderTypeDesktop: {
							...advancedCountdownItemWrapperBorderTypeDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						advancedCountdownItemWrapperBorderTypeTablet: {
							...advancedCountdownItemWrapperBorderTypeTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						advancedCountdownItemWrapperBorderTypeMobile: {
							...advancedCountdownItemWrapperBorderTypeMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const advancedCountdownItemWrapperBorderTypeUnitsHandler = (unit) => {
		setAttributes({
			advancedCountdownItemWrapperBorderTypeUnits: {
				...advancedCountdownItemWrapperBorderTypeUnits,
				[deviceType]: unit,
			},
		});
	};

	const advancedCountdownItemWrapperBorderCombineBtnHandlerFn = () => {
		setAttributes({
			advancedCountdownItemWrapperBorderTypeLink:
				!advancedCountdownItemWrapperBorderTypeLink,
		});
	};
	/** End Item Wrapper Border Width */

	/** Start Item Wrapper Border Radius */
	const advancedCountdownItemWrapperHandleSpacingUnitHandlerFn = (
		event,
		position,
	) => {
		const value = event.target.value;
		if (advancedCountdownItemWrapperBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						advancedCountdownItemWrapperBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						advancedCountdownItemWrapperBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						advancedCountdownItemWrapperBorderRadiusMobile: {
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
						advancedCountdownItemWrapperBorderRadiusDesktop: {
							...advancedCountdownItemWrapperBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						advancedCountdownItemWrapperBorderRadiusTablet: {
							...advancedCountdownItemWrapperBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						advancedCountdownItemWrapperBorderRadiusMobile: {
							...advancedCountdownItemWrapperBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const advancedCountdownItemWrapperBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			advancedCountdownItemWrapperBorderRadiusUnits: {
				...advancedCountdownItemWrapperBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const advancedCountdownItemWrapperCombineBtnHandlerFn = () => {
		setAttributes({
			advancedCountdownItemWrapperBorderRadiusLink:
				!advancedCountdownItemWrapperBorderRadiusLink,
		});
	};
	/** End Item Wrapper Border Radius */

	/** Start Item Wrapper Padding */
	const advancedCountdownItemWrapperPaddingHandleSpacingUnitHandler = (
		event,
		position,
	) => {
		const value = event.target.value;
		if (advancedCountdownItemWrapperPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						advancedCountdownItemWrapperPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						advancedCountdownItemWrapperPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						advancedCountdownItemWrapperPaddingMobile: {
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
						advancedCountdownItemWrapperPaddingDesktop: {
							...advancedCountdownItemWrapperPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						advancedCountdownItemWrapperPaddingTablet: {
							...advancedCountdownItemWrapperPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						advancedCountdownItemWrapperPaddingMobile: {
							...advancedCountdownItemWrapperPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const advancedCountdownItemWrapperPaddingSpacingUnitsHandler = (unit) => {
		setAttributes({
			advancedCountdownItemWrapperPaddingUnits: {
				...advancedCountdownItemWrapperPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const advancedCountdownItemWrapperPaddingSpacingCombineBtnHandlerFn = () => {
		setAttributes({
			advancedCountdownItemWrapperPaddingLink:
				!advancedCountdownItemWrapperPaddingLink,
		});
	};
	/** End Item Wrapper Padding */

	/** Start Item Wrapper Margin */
	const advancedCountdownItemWrapperMarginHandleSpacingUnitHandler = (
		event,
		position,
	) => {
		const value = event.target.value;
		if (advancedCountdownItemWrapperMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						advancedCountdownItemWrapperMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						advancedCountdownItemWrapperMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						advancedCountdownItemWrapperMarginMobile: {
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
						advancedCountdownItemWrapperMarginDesktop: {
							...advancedCountdownItemWrapperMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						advancedCountdownItemWrapperMarginTablet: {
							...advancedCountdownItemWrapperMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						advancedCountdownItemWrapperMarginMobile: {
							...advancedCountdownItemWrapperMarginMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const advancedCountdownItemWrapperMarginSpacingUnitsHandler = (unit) => {
		setAttributes({
			advancedCountdownItemWrapperMarginUnits: {
				...advancedCountdownItemWrapperMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const advancedCountdownItemWrapperMarginSpacingCombineBtnHandlerFn = () => {
		setAttributes({
			advancedCountdownItemWrapperMarginLink:
				!advancedCountdownItemWrapperMarginLink,
		});
	};
	/** End Item Wrapper Margin */

	/** Start Separator Spacing */
	const advancedCountdownSeparatorSpacingHandleSpacingUnitHandler = (
		event,
		position,
	) => {
		const value = event.target.value;
		setAttributes({
			advancedCountdownSeparatorSpacing: {
				...advancedCountdownSeparatorSpacing,
				[deviceType]: value,
			},
		});
	};

	const advancedCountdownSeparatorSpacingUnitsHandler = (unit) => {
		setAttributes({
			advancedCountdownSeparatorSpacing: {
				...advancedCountdownSeparatorSpacing,
				[deviceType]: unit,
			},
		});
	};
	/** End Separator Spacing */

	/** Start Icon Size */
	const advancedCountdownIconSizeHandleSpacingUnitHandler = (
		event,
		position,
	) => {
		const value = event.target.value;
		setAttributes({
			advancedCountdownIconSize: {
				...advancedCountdownIconSize,
				[deviceType]: value,
			},
		});
	};

	const advancedCountdownIconSizeUnitsHandler = (unit) => {
		setAttributes({
			advancedCountdownIconSize: {
				...advancedCountdownIconSize,
				[deviceType]: unit,
			},
		});
	};
	/** End Icon Size */

	/** Start Footer Padding */
	const advancedCountdownFooterPaddingHandleSpacingUnitHandler = (
		event,
		position,
	) => {
		const value = event.target.value;
		if (advancedCountdownFooterPaddingLink) {
			setAttributes({
				advancedCountdownFooterPadding: {
					...advancedCountdownFooterPadding,
					top: value,
					right: value,
					bottom: value,
					left: value,
				},
			});
		} else {
			setAttributes({
				advancedCountdownFooterPadding: {
					...advancedCountdownFooterPadding,
					[position]: value,
				},
			});
		}
	};

	const advancedCountdownFooterPaddingSpacingUnitsHandler = (unit) => {
		setAttributes({
			advancedCountdownFooterPadding: {
				...advancedCountdownFooterPadding,
				[deviceType]: unit,
			},
		});
	};

	const advancedCountdownFooterPaddingSpacingCombineBtnHandlerFn = () => {
		setAttributes({
			advancedCountdownFooterPaddingLink: !advancedCountdownFooterPaddingLink,
		});
	};
	/** End Footer Padding */

	/** Start Footer Margin */
	const advancedCountdownFooterMarginHandleSpacingUnitHandler = (
		event,
		position,
	) => {
		const value = event.target.value;
		if (advancedCountdownFooterMarginLink) {
			setAttributes({
				advancedCountdownFooterMargin: {
					...advancedCountdownFooterMargin,
					top: value,
					right: value,
					bottom: value,
					left: value,
				},
			});
		} else {
			setAttributes({
				advancedCountdownFooterMargin: {
					...advancedCountdownFooterMargin,
					[position]: value,
				},
			});
		}
	};

	const advancedCountdownFooterMarginSpacingUnitsHandler = (unit) => {
		setAttributes({
			advancedCountdownFooterMargin: {
				...advancedCountdownFooterMargin,
				[deviceType]: unit,
			},
		});
	};

	const advancedCountdownFooterMarginSpacingCombineBtnHandlerFn = () => {
		setAttributes({
			advancedCountdownFooterMarginLink: !advancedCountdownFooterMarginLink,
		});
	};
	/** End Footer Margin */

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
				<FB_Presets
					className="fb-countdown-presets"
					label={__("Layout Style", "frontis-blocks")}
					presets={countdownPresets}
					value={countDownPresetStyle}
					onChangeValue="countDownPresetStyle"
					defaultPresetValue="style-1"
					setAttributes={setAttributes}
				/>

				<DateTimePicker
					currentDate={targetDate}
					onChange={(newDate) => setAttributes({ targetDate: newDate })}
					is12Hour={true}
					dateFormat="Y-m-d H:i"
					time_24hr={true}
					label={__("Due Date & Time", "prime-elementor-addons-pro")}
				/>

				<DateTimePicker
					currentDate={advancedCountdownStartDate}
					onChange={(newDate) =>
						setAttributes({ advancedCountdownStartDate: newDate })
					}
					is12Hour={true}
					dateFormat="Y-m-d H:i"
					time_24hr={true}
					label={__("Start Date & Time", "prime-elementor-addons-pro")}
				/>

				{["style-1", "style-2"].includes(countDownPresetStyle) && (
					<TextControl
						label={__("Footer Text", "prime-elementor-addons-pro")}
						value={until_text}
						onChange={(value) => setAttributes({ until_text: value })}
					/>
				)}

				{countDownPresetStyle === "style-1" && (
					<>
						<ToggleControl
							label={__("Show Icon", "prime-elementor-addons-pro")}
							checked={advancedCountdownShowSunIcon === "yes"}
							onChange={(value) =>
								setAttributes({
									advancedCountdownShowSunIcon: value ? "yes" : "no",
								})
							}
						/>
						{advancedCountdownShowSunIcon === "yes" && (
							<FB_IconPicker
								label={__("Icon", "prime-elementor-addons-pro")}
								value={advancedCountdownSunIcon}
								setIconHandler={(value) =>
									setAttributes({ advancedCountdownSunIcon: value })
								}
							/>
						)}
					</>
				)}
			</PanelBody>
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
			<PanelBody
				title={__("Container", "prime-elementor-addons-pro")}
				initialOpen={true}
			>
				{["style-1", "style-2", "style-4"].includes(countDownPresetStyle) && (
					<FB_Range
						label={__("Size", "prime-elementor-addons-pro")}
						min={200}
						max={1200}
						rangeValue={advancedCountdownContainerSize}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownContainerSize: {
									...advancedCountdownContainerSize,
									[deviceType]: value,
								},
							})
						}
						rangeUnitHandler={(value) =>
							setAttributes({
								advancedCountdownContainerSize: {
									...advancedCountdownContainerSize,
									unit: value,
								},
							})
						}
						deviceType={deviceType}
						units={advancedCountdownContainerSize.unit}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={100}
					/>
				)}
				{countDownPresetStyle === "style-1" && (
					<FB_Range
						label={__("Progress Bar Size", "prime-elementor-addons-pro")}
						min={414}
						max={1000}
						rangeValue={advancedCountdownSvgProgressSize}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownSvgProgressSize: {
									...advancedCountdownSvgProgressSize,
									[deviceType]: value,
								},
							})
						}
						rangeUnitHandler={(value) =>
							setAttributes({
								advancedCountdownSvgProgressSize: {
									...advancedCountdownSvgProgressSize,
									unit: value,
								},
							})
						}
						deviceType={deviceType}
						units={advancedCountdownSvgProgressSize.unit}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={524}
					/>
				)}
				{countDownPresetStyle === "style-2" && (
					<FB_Range
						label={__("Progress Bar Size", "prime-elementor-addons-pro")}
						min={200}
						max={1000}
						rangeValue={advancedCountdownStyle2ProgressBarSize}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownStyle2ProgressBarSize: {
									...advancedCountdownStyle2ProgressBarSize,
									[deviceType]: value,
								},
							})
						}
						rangeUnitHandler={(value) =>
							setAttributes({
								advancedCountdownStyle2ProgressBarSize: {
									...advancedCountdownStyle2ProgressBarSize,
									unit: value,
								},
							})
						}
						deviceType={deviceType}
						units={advancedCountdownStyle2ProgressBarSize.unit}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={200}
					/>
				)}
				{countDownPresetStyle === "style-3" && (
					<>
						<FB_Range
							label={__("Size", "prime-elementor-addons-pro")}
							min={400}
							max={700}
							rangeValue={advancedCountdownContainerSizeStyle3}
							onChangeHandler={(value) =>
								setAttributes({
									advancedCountdownContainerSizeStyle3: {
										...advancedCountdownContainerSizeStyle3,
										[deviceType]: value,
									},
								})
							}
							rangeUnitHandler={(value) =>
								setAttributes({
									advancedCountdownContainerSizeStyle3: {
										...advancedCountdownContainerSizeStyle3,
										[deviceType]: value,
									},
								})
							}
							deviceType={deviceType}
							units={advancedCountdownContainerSizeStyle3.unit}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={570}
						/>
						<FB_Range
							label={__("Container Size", "prime-elementor-addons-pro")}
							min={0}
							max={700}
							rangeValue={advancedCountdownContainerSizeStyle3Container}
							onChangeHandler={(value) =>
								setAttributes({
									advancedCountdownContainerSizeStyle3Container: {
										...advancedCountdownContainerSizeStyle3Container,
										[deviceType]: value,
									},
								})
							}
							rangeUnitHandler={(value) =>
								setAttributes({
									advancedCountdownContainerSizeStyle3Container: {
										...advancedCountdownContainerSizeStyle3Container,
										[deviceType]: value,
									},
								})
							}
							deviceType={deviceType}
							units={advancedCountdownContainerSizeStyle3Container.unit}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={530}
						/>
					</>
				)}
				{countDownPresetStyle === "style-5" && (
					<FB_Range
						label={__("Size", "prime-elementor-addons-pro")}
						min={300}
						max={1200}
						rangeValue={advancedCountdownContainerSizeStyle5}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownContainerSizeStyle5: {
									...advancedCountdownContainerSizeStyle5,
									[deviceType]: value,
								},
							})
						}
						rangeUnitHandler={(value) =>
							setAttributes({
								advancedCountdownContainerSizeStyle5: {
									...advancedCountdownContainerSizeStyle5,
									[deviceType]: value,
								},
							})
						}
						deviceType={deviceType}
						units={advancedCountdownContainerSizeStyle5.unit}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={771}
					/>
				)}

				<FB_BackgroundColorControl
					label={__("Background", "prime-elementor-addons-pro")}
					bgColorSwitcher={globalBgColorSwitcher}
					setBgColorSwitcher={(value) =>
						setAttributes({ globalBgColorSwitcher: value })
					}
					normalBackgroundType={globalBackgroundType}
					setNormalBackgroundType={(value) =>
						setAttributes({ globalBackgroundType: value })
					}
					normalClassicColor={globalClassicColor}
					setNormalClassicColor={(value) =>
						setAttributes({
							globalClassicColor: value === undefined ? "" : value,
						})
					}
					normalGradientColor={globalGradientColor}
					setNormalGradientColor={(value) =>
						setAttributes({
							globalGradientColor: value === undefined ? null : value,
						})
					}
					normalCustomGradientSwitcher={globalCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(value) =>
						setAttributes({ globalCustomGradientSwitcher: value })
					}
					normalCustomGradientInputValue={globalCustomGradientInputValue}
					setNormalCustomGradientInputValue={(value) =>
						setAttributes({ globalCustomGradientInputValue: value })
					}
					normalBackgroundImageUrl={globalBackgroundImageUrl}
					setNormalBackgroundImageUrl={(value) =>
						setAttributes({ globalBackgroundImageUrl: value })
					}
					normalBackgroundImageAlt={globalBackgroundImageAlt}
					setNormalBackgroundImageAlt={(value) =>
						setAttributes({ globalBackgroundImageAlt: value })
					}
					normalBackgroundImageID={globalBackgroundImageID}
					setNormalBackgroundImageID={(value) =>
						setAttributes({ globalBackgroundImageID: value })
					}
					normalBackgroundImagePosition={globalBackgroundImagePosition}
					setNormalBackgroundImagePosition={(value) =>
						setAttributes({ globalBackgroundImagePosition: value })
					}
					normalBackgroundImageAttachment={globalBackgroundImageAttachment}
					setNormalBackgroundImageAttachment={(value) =>
						setAttributes({ globalBackgroundImageAttachment: value })
					}
					normalBackgroundImageRepeat={globalBackgroundImageRepeat}
					setNormalBackgroundImageRepeat={(value) =>
						setAttributes({ globalBackgroundImageRepeat: value })
					}
					normalBackgroundImageSize={globalBackgroundImageSize}
					setNormalBackgroundImageSize={(value) =>
						setAttributes({ globalBackgroundImageSize: value })
					}
					hoverBackgroundType={hoverBackgroundType}
					setHoverBackgroundType={(value) =>
						setAttributes({ hoverBackgroundType: value })
					}
					hoverClassicColor={hoverClassicColor}
					setHoverClassicColor={(value) =>
						setAttributes({
							hoverClassicColor: value === undefined ? "" : value,
						})
					}
					hoverGradientColor={hoverGradientColor}
					setHoverGradientColor={(value) =>
						setAttributes({
							hoverGradientColor: value === undefined ? null : value,
						})
					}
					hoverCustomGradientSwitcher={hoverCustomGradientSwitcher}
					setHoverCustomGradientSwitcher={(value) =>
						setAttributes({ hoverCustomGradientSwitcher: value })
					}
					hoverCustomGradientInputValue={hoverCustomGradientInputValue}
					setHoverCustomGradientInputValue={(value) =>
						setAttributes({ hoverCustomGradientInputValue: value })
					}
					hoverBackgroundImageUrl={hoverBackgroundImageUrl}
					setHoverBackgroundImageUrl={(value) =>
						setAttributes({ hoverBackgroundImageUrl: value })
					}
					hoverBackgroundImageAlt={hoverBackgroundImageAlt}
					setHoverBackgroundImageAlt={(value) =>
						setAttributes({ hoverBackgroundImageAlt: value })
					}
					hoverBackgroundImageID={hoverBackgroundImageID}
					setHoverBackgroundImageID={(value) =>
						setAttributes({ hoverBackgroundImageID: value })
					}
					hoverBackgroundImagePosition={hoverBackgroundImagePosition}
					setHoverBackgroundImagePosition={(value) =>
						setAttributes({ hoverBackgroundImagePosition: value })
					}
					hoverBackgroundImageAttachment={hoverBackgroundImageAttachment}
					setHoverBackgroundImageAttachment={(value) =>
						setAttributes({ hoverBackgroundImageAttachment: value })
					}
					hoverBackgroundImageRepeat={hoverBackgroundImageRepeat}
					setHoverBackgroundImageRepeat={(value) =>
						setAttributes({ hoverBackgroundImageRepeat: value })
					}
					hoverBackgroundImageSize={hoverBackgroundImageSize}
					setHoverBackgroundImageSize={(value) =>
						setAttributes({ hoverBackgroundImageSize: value })
					}
				/>

				<FB_Range
					label={__("Transition Duration", "prime-elementor-addons-pro")}
					min={0}
					max={3}
					rangeValue={advancedCountdownContainerHoverTransition}
					onChangeHandler={(value) =>
						setAttributes({
							advancedCountdownContainerHoverTransition: {
								...advancedCountdownContainerHoverTransition,
								[deviceType]: value,
							},
						})
					}
					deviceType={deviceType}
					units="s"
					setAttributes={setAttributes}
					rangeStep={0.1}
					resetFallbackValue={0.4}
				/>

				<SelectControl
					label={__("Border Style", "prime-elementor-addons-pro")}
					value={advancedCountdownItemWrapperBorder}
					options={BORDER_STYLES}
					onChange={(value) =>
						setAttributes({ advancedCountdownItemWrapperBorder: value })
					}
				/>

				<FB_SwitcherControl
					label={__("Border Color", "prime-elementor-addons-pro")}
					globalSwitcher={advancedCountdownItemWrapperBorderColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({
							advancedCountdownItemWrapperBorderColorSwitcher: value,
						})
					}
				/>

				{advancedCountdownItemWrapperBorderColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownItemWrapperBorderColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownItemWrapperBorderColor:
									value === undefined ? "" : value,
							})
						}
					/>
				)}

				{advancedCountdownItemWrapperBorderColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownBorderHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownBorderHoverColor:
									value === undefined ? "" : value,
							})
						}
					/>
				)}

				<FB_Range
					label={__("Transition Duration", "prime-elementor-addons-pro")}
					min={0}
					max={3}
					rangeValue={advancedCountdownBorderHoverTransition}
					onChangeHandler={(value) =>
						setAttributes({
							advancedCountdownBorderHoverTransition: {
								...advancedCountdownBorderHoverTransition,
								[deviceType]: value,
							},
						})
					}
					deviceType={deviceType}
					units="s"
					setAttributes={setAttributes}
					rangeStep={0.1}
					resetFallbackValue={0.35}
				/>

				<FB_Spacing
					label={__("Border Radius", "prime-elementor-addons-pro")}
					deviceType={deviceType}
					spacingUnitsHandler={
						advancedCountdownItemWrapperBorderRadiusUnitsHandler
					}
					spacingUnits={advancedCountdownItemWrapperBorderRadiusUnits}
					spacingDesktop={advancedCountdownItemWrapperBorderRadiusDesktop}
					spacingTablet={advancedCountdownItemWrapperBorderRadiusTablet}
					spacingMobile={advancedCountdownItemWrapperBorderRadiusMobile}
					handleSpacingUnitHandler={
						advancedCountdownItemWrapperHandleSpacingUnitHandlerFn
					}
					spacingCombineBtn={advancedCountdownItemWrapperBorderRadiusLink}
					spacingCombineBtnHandler={
						advancedCountdownItemWrapperCombineBtnHandlerFn
					}
					setAttributes={setAttributes}
				/>

				{countDownPresetStyle === "style-5" && (
					<FB_Range
						label={__("Gap", "prime-elementor-addons-pro")}
						min={0}
						max={100}
						rangeValue={advancedCountdownPreset5DashGap}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownPreset5DashGap: {
									...advancedCountdownPreset5DashGap,
									[deviceType]: value,
								},
							})
						}
						rangeUnitHandler={(value) =>
							setAttributes({
								advancedCountdownPreset5DashGap: {
									...advancedCountdownPreset5DashGap,
									[deviceType]: value,
								},
							})
						}
						deviceType={deviceType}
						units={advancedCountdownPreset5DashGap.unit}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={62}
					/>
				)}

				{countDownPresetStyle === "style-4" && (
					<FB_Range
						label={__("Gap", "prime-elementor-addons-pro")}
						min={5}
						max={100}
						rangeValue={advancedCountdownPreset4DashGap}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownPreset4DashGap: {
									...advancedCountdownPreset4DashGap,
									[deviceType]: value,
								},
							})
						}
						rangeUnitHandler={(value) =>
							setAttributes({
								advancedCountdownPreset4DashGap: {
									...advancedCountdownPreset4DashGap,
									[deviceType]: value,
								},
							})
						}
						deviceType={deviceType}
						units={advancedCountdownPreset4DashGap.unit}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={10}
					/>
				)}

				<BaseControl
					label={__("Alignment", "prime-elementor-addons-pro")}
					id="fb-setting-text-alignment"
					className="fb-setting-text-alignment"
				>
					<ButtonGroup className="fb-setting-text-alignment-group-btn">
						{LAYOUT_ALIGNMENT.map((item) => (
							<Button
								key={item.value}
								onClick={() =>
									setAttributes({ countDownLayoutAlignment: item.value })
								}
								className={`fb-setting-text-alignment-single-btn ${
									countDownLayoutAlignment === item.value ? "active" : ""
								}`}
							>
								{item.label}
							</Button>
						))}
					</ButtonGroup>
				</BaseControl>

				<FB_Spacing
					label={__("Margin", "prime-elementor-addons-pro")}
					deviceType={deviceType}
					spacingUnitsHandler={
						advancedCountdownItemWrapperMarginSpacingUnitsHandler
					}
					spacingUnits={advancedCountdownItemWrapperMarginUnits}
					spacingDesktop={advancedCountdownItemWrapperMarginDesktop}
					spacingTablet={advancedCountdownItemWrapperMarginTablet}
					spacingMobile={advancedCountdownItemWrapperMarginMobile}
					handleSpacingUnitHandler={
						advancedCountdownItemWrapperMarginHandleSpacingUnitHandler
					}
					spacingCombineBtn={advancedCountdownItemWrapperMarginLink}
					spacingCombineBtnHandler={
						advancedCountdownItemWrapperMarginSpacingCombineBtnHandlerFn
					}
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={__("Padding", "prime-elementor-addons-pro")}
					deviceType={deviceType}
					spacingUnitsHandler={
						advancedCountdownItemWrapperPaddingSpacingUnitsHandler
					}
					spacingUnits={advancedCountdownItemWrapperPaddingUnits}
					spacingDesktop={advancedCountdownItemWrapperPaddingDesktop}
					spacingTablet={advancedCountdownItemWrapperPaddingTablet}
					spacingMobile={advancedCountdownItemWrapperPaddingMobile}
					handleSpacingUnitHandler={
						advancedCountdownItemWrapperPaddingHandleSpacingUnitHandler
					}
					spacingCombineBtn={advancedCountdownItemWrapperPaddingLink}
					spacingCombineBtnHandler={
						advancedCountdownItemWrapperPaddingSpacingCombineBtnHandlerFn
					}
					setAttributes={setAttributes}
				/>
			</PanelBody>

			{countDownPresetStyle === "style-2" && (
				<PanelBody
					title={__("Dashed Progress Bar", "prime-elementor-addons-pro")}
					initialOpen={false}
				>
					<FB_ColorControl
						label={__("Bar Color", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownStyle2ProgressBarColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle2ProgressBarColor:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_Range
						label={__("Dash Spacing", "prime-elementor-addons-pro")}
						min={1}
						max={20}
						rangeValue={advancedCountdownStyle2DashCount}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownStyle2DashCount: {
									...advancedCountdownStyle2DashCount,
									[deviceType]: value,
								},
							})
						}
						deviceType={deviceType}
						units="px"
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={5}
					/>
				</PanelBody>
			)}

			{countDownPresetStyle === "style-5" && (
				<PanelBody
					title={__("Dots Configuration", "prime-elementor-addons-pro")}
					initialOpen={false}
				>
					<FB_Range
						label={__("Days Dots", "prime-elementor-addons-pro")}
						min={12}
						max={30}
						rangeValue={advancedCountdownDaysTotalDots}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownDaysTotalDots: {
									...advancedCountdownDaysTotalDots,
									[deviceType]: value,
								},
							})
						}
						deviceType={deviceType}
						units="px"
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={12}
					/>
					<FB_Range
						label={__("Hours Dots", "prime-elementor-addons-pro")}
						min={12}
						max={30}
						rangeValue={advancedCountdownHoursTotalDots}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownHoursTotalDots: {
									...advancedCountdownHoursTotalDots,
									[deviceType]: value,
								},
							})
						}
						deviceType={deviceType}
						units="px"
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={24}
					/>
					<FB_Range
						label={__("Minutes Dots", "prime-elementor-addons-pro")}
						min={12}
						max={30}
						rangeValue={advancedCountdownMinutesTotalDots}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownMinutesTotalDots: {
									...advancedCountdownMinutesTotalDots,
									[deviceType]: value,
								},
							})
						}
						deviceType={deviceType}
						units="px"
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={30}
					/>
				</PanelBody>
			)}

			{countDownPresetStyle === "style-3" && (
				<PanelBody
					title={__("Progress & Indicator", "prime-elementor-addons-pro")}
					initialOpen={false}
				>
					<FB_ColorControl
						label={__("Background", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownStyle3ContainerBg}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle3ContainerBg:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_ColorControl
						label={__("Time Box Background", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownStyle3TimeboxBg}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle3TimeboxBg:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_ColorControl
						label={__("Indicator Color", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownStyle3IndicatorColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle3IndicatorColor:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_ColorControl
						label={__("Text Color", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownStyle3IndicatorTextColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle3IndicatorTextColor:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_Range
						label={__("Time Gap", "prime-elementor-addons-pro")}
						min={10}
						max={50}
						rangeValue={advancedCountdownStyle3TimeGap}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownStyle3TimeGap: {
									...advancedCountdownStyle3TimeGap,
									[deviceType]: value,
								},
							})
						}
						rangeUnitHandler={(value) =>
							setAttributes({
								advancedCountdownStyle3TimeGap: {
									...advancedCountdownStyle3TimeGap,
									[deviceType]: value,
								},
							})
						}
						deviceType={deviceType}
						units={advancedCountdownStyle3TimeGap.unit}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={10}
					/>
					<FB_ColorControl
						label={__("Highlighted Dash Color", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownStyle3DashHighlight}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle3DashHighlight:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_TypographyControl
						globalTypoControlActive={true}
						globalTypoSwitcher={advancedCountdownStyle3TextGlobalTypoSwitcher}
						storeGlobalTypographyData={(value) =>
							setAttributes({
								advancedCountdownStyle3TextGlobalTypographyData: value,
							})
						}
						globalTypoType={advancedCountdownStyle3TextGlobalTypoType}
						onChangeGlobalTypoType={(value) =>
							setAttributes({
								advancedCountdownStyle3TextGlobalTypoType: value,
							})
						}
						globalTypoOption={advancedCountdownStyle3TextGlobalTypoOption}
						onChangeGlobalTypoOption={(value) =>
							setAttributes({
								advancedCountdownStyle3TextGlobalTypoOption: value,
							})
						}
						fontFamily={advancedCountdownStyle3TextFontFamily}
						onChangeFontFamily={(value) =>
							setAttributes({ advancedCountdownStyle3TextFontFamily: value })
						}
						fontSize={advancedCountdownStyle3TextFontSize}
						onChangeFontSize={(value) =>
							setAttributes({ advancedCountdownStyle3TextFontSize: value })
						}
						fontSizeUnits={advancedCountdownStyle3TextFontSizeUnits}
						onChangeFontSizeUnit={(value) =>
							setAttributes({ advancedCountdownStyle3TextFontSizeUnits: value })
						}
						fontWeight={advancedCountdownStyle3TextFontWeight}
						onChangeFontWeight={(value) =>
							setAttributes({ advancedCountdownStyle3TextFontWeight: value })
						}
						fontStyle={advancedCountdownStyle3TextFontStyle}
						onChangeFontStyle={(value) =>
							setAttributes({ advancedCountdownStyle3TextFontStyle: value })
						}
						textTransform={advancedCountdownStyle3TextTextTransform}
						onChangeTextTransform={(value) =>
							setAttributes({ advancedCountdownStyle3TextTextTransform: value })
						}
						textDecoration={advancedCountdownStyle3TextTextDecoration}
						onChangeTextDecoration={(value) =>
							setAttributes({
								advancedCountdownStyle3TextTextDecoration: value,
							})
						}
						letterSpacing={advancedCountdownStyle3TextLetterSpacing}
						onChangeLetterSpacing={(value) =>
							setAttributes({ advancedCountdownStyle3TextLetterSpacing: value })
						}
						letterSpacingUnits={advancedCountdownStyle3TextLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) =>
							setAttributes({
								advancedCountdownStyle3TextLetterSpacingUnits: value,
							})
						}
						lineHeight={advancedCountdownStyle3TextLineHeight}
						onChangeLineHeight={(value) =>
							setAttributes({ advancedCountdownStyle3TextLineHeight: value })
						}
						lineHeightUnits={advancedCountdownStyle3TextLineHeightUnits}
						onChangeLineHeightUnit={(value) =>
							setAttributes({
								advancedCountdownStyle3TextLineHeightUnits: value,
							})
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
					/>
				</PanelBody>
			)}

			{countDownPresetStyle === "style-5" && (
				<PanelBody
					title={__("Dots", "prime-elementor-addons-pro")}
					initialOpen={false}
				>
					<FB_ColorControl
						label={__("Active Dot Color", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownActiveDotColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownActiveDotColor:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_ColorControl
						label={__("Inactive Dot Color", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownInactiveDotColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownInactiveDotColor:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_Range
						label={__("Dots Size", "prime-elementor-addons-pro")}
						min={1}
						max={20}
						rangeValue={advancedCountdownDotsThickness}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownDotsThickness: {
									...advancedCountdownDotsThickness,
									[deviceType]: value,
								},
							})
						}
						deviceType={deviceType}
						units="px"
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={5}
					/>
					<FB_Range
						label={__("Dots Gap", "prime-elementor-addons-pro")}
						min={1}
						max={3}
						rangeValue={advancedCountdownDotsGap}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownDotsGap: {
									...advancedCountdownDotsGap,
									[deviceType]: value,
								},
							})
						}
						deviceType={deviceType}
						units="px"
						setAttributes={setAttributes}
						rangeStep={0.1}
						resetFallbackValue={1}
					/>
					<ToggleControl
						label={__("Dots Glow Effect", "prime-elementor-addons-pro")}
						checked={advancedCountdownDotsGlowEffect === "yes"}
						onChange={(value) =>
							setAttributes({
								advancedCountdownDotsGlowEffect: value ? "yes" : "no",
							})
						}
					/>
					{advancedCountdownDotsGlowEffect === "yes" && (
						<>
							<FB_Range
								label={__("Glow Intensity", "prime-elementor-addons-pro")}
								min={5}
								max={40}
								rangeValue={advancedCountdownGlowIntensity}
								onChangeHandler={(value) =>
									setAttributes({
										advancedCountdownGlowIntensity: {
											...advancedCountdownGlowIntensity,
											[deviceType]: value,
										},
									})
								}
								deviceType={deviceType}
								units="px"
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={12}
							/>
							<FB_ColorControl
								label={__("Glow Color", "prime-elementor-addons-pro")}
								globalColor={advancedCountdownGlowColor}
								setGlobalColor={(value) =>
									setAttributes({
										advancedCountdownGlowColor:
											value === undefined ? "" : value,
									})
								}
							/>
						</>
					)}
				</PanelBody>
			)}

			{countDownPresetStyle === "style-4" && (
				<PanelBody
					title={__("Dash Pattern", "prime-elementor-addons-pro")}
					initialOpen={false}
				>
					<FB_ColorControl
						label={__("Dash Color", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownDashColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownDashColor: value === undefined ? "" : value,
							})
						}
					/>
					<FB_Range
						label={__("Dash Size", "prime-elementor-addons-pro")}
						min={1}
						max={20}
						rangeValue={advancedCountdownDashSize}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownDashSize: {
									...advancedCountdownDashSize,
									[deviceType]: value,
								},
							})
						}
						deviceType={deviceType}
						units="px"
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={4}
					/>
				</PanelBody>
			)}

			{countDownPresetStyle === "style-4" && (
				<PanelBody
					title={__("Label Alignment", "prime-elementor-addons-pro")}
					initialOpen={false}
				>
					<BaseControl
						label={__("Alignment", "prime-elementor-addons-pro")}
						id="fb-setting-text-alignment"
						className="fb-setting-text-alignment"
					>
						<ButtonGroup className="fb-setting-text-alignment-group-btn">
							{[
								{
									label: "Left Top",
									value: "left_top",
									icon: "eicon-v-align-top eicon-h-align-left",
								},
								{
									label: "Right Top",
									value: "right_top",
									icon: "eicon-v-align-top eicon-h-align-right",
								},
								{
									label: "Left Bottom",
									value: "left_bottom",
									icon: "eicon-v-align-bottom eicon-h-align-left",
								},
								{
									label: "Right Bottom",
									value: "right_bottom",
									icon: "eicon-v-align-bottom eicon-h-align-right",
								},
							].map((item) => (
								<Button
									key={item.value}
									onClick={() =>
										setAttributes({
											advancedCountdownLabelAlignmentStyle4: item.value,
										})
									}
									className={`fb-setting-text-alignment-single-btn ${
										advancedCountdownLabelAlignmentStyle4 === item.value
											? "active"
											: ""
									}`}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>
					<FB_TypographyControl
						globalTypoControlActive={true}
						globalTypoSwitcher={
							advancedCountdownLabelTypographyStyle4GlobalTypoSwitcher
						}
						storeGlobalTypographyData={(value) =>
							setAttributes({
								advancedCountdownLabelTypographyStyle4GlobalTypographyData:
									value,
							})
						}
						globalTypoType={
							advancedCountdownLabelTypographyStyle4GlobalTypoType
						}
						onChangeGlobalTypoType={(value) =>
							setAttributes({
								advancedCountdownLabelTypographyStyle4GlobalTypoType: value,
							})
						}
						globalTypoOption={
							advancedCountdownLabelTypographyStyle4GlobalTypoOption
						}
						onChangeGlobalTypoOption={(value) =>
							setAttributes({
								advancedCountdownLabelTypographyStyle4GlobalTypoOption: value,
							})
						}
						fontFamily={advancedCountdownLabelTypographyStyle4FontFamily}
						onChangeFontFamily={(value) =>
							setAttributes({
								advancedCountdownLabelTypographyStyle4FontFamily: value,
							})
						}
						fontSize={advancedCountdownLabelTypographyStyle4FontSize}
						onChangeFontSize={(value) =>
							setAttributes({
								advancedCountdownLabelTypographyStyle4FontSize: value,
							})
						}
						fontSizeUnits={advancedCountdownLabelTypographyStyle4FontSizeUnits}
						onChangeFontSizeUnit={(value) =>
							setAttributes({
								advancedCountdownLabelTypographyStyle4FontSizeUnits: value,
							})
						}
						fontWeight={advancedCountdownLabelTypographyStyle4FontWeight}
						onChangeFontWeight={(value) =>
							setAttributes({
								advancedCountdownLabelTypographyStyle4FontWeight: value,
							})
						}
						fontStyle={advancedCountdownLabelTypographyStyle4FontStyle}
						onChangeFontStyle={(value) =>
							setAttributes({
								advancedCountdownLabelTypographyStyle4FontStyle: value,
							})
						}
						textTransform={advancedCountdownLabelTypographyStyle4TextTransform}
						onChangeTextTransform={(value) =>
							setAttributes({
								advancedCountdownLabelTypographyStyle4TextTransform: value,
							})
						}
						textDecoration={
							advancedCountdownLabelTypographyStyle4TextDecoration
						}
						onChangeTextDecoration={(value) =>
							setAttributes({
								advancedCountdownLabelTypographyStyle4TextDecoration: value,
							})
						}
						letterSpacing={advancedCountdownLabelTypographyStyle4LetterSpacing}
						onChangeLetterSpacing={(value) =>
							setAttributes({
								advancedCountdownLabelTypographyStyle4LetterSpacing: value,
							})
						}
						letterSpacingUnits={
							advancedCountdownLabelTypographyStyle4LetterSpacingUnits
						}
						onChangeLetterSpacingUnit={(value) =>
							setAttributes({
								advancedCountdownLabelTypographyStyle4LetterSpacingUnits: value,
							})
						}
						lineHeight={advancedCountdownLabelTypographyStyle4LineHeight}
						onChangeLineHeight={(value) =>
							setAttributes({
								advancedCountdownLabelTypographyStyle4LineHeight: value,
							})
						}
						lineHeightUnits={
							advancedCountdownLabelTypographyStyle4LineHeightUnits
						}
						onChangeLineHeightUnit={(value) =>
							setAttributes({
								advancedCountdownLabelTypographyStyle4LineHeightUnits: value,
							})
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
					/>
					<FB_ColorControl
						label={__("Label Color", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownLabelColorStyle4}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownLabelColorStyle4:
									value === undefined ? "" : value,
							})
						}
					/>
				</PanelBody>
			)}

			{countDownPresetStyle === "style-1" &&
				advancedCountdownShowSunIcon === "yes" && (
					<PanelBody
						title={__("Icon", "prime-elementor-addons-pro")}
						initialOpen={false}
					>
						<FB_Range
							label={__("Icon Size", "prime-elementor-addons-pro")}
							min={5}
							max={200}
							rangeValue={advancedCountdownIconSize}
							onChangeHandler={
								advancedCountdownIconSizeHandleSpacingUnitHandler
							}
							rangeUnitHandler={advancedCountdownIconSizeUnitsHandler}
							deviceType={deviceType}
							units={advancedCountdownIconSize.unit}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={60}
						/>
						<FB_SwitcherControl
							label={__("Color", "prime-elementor-addons-pro")}
							globalSwitcher={advancedCountdownItemWrapperBorderColorSwitcher} // Reusing switcher for simplicity, consider dedicated if needed
							setGlobalSwitcher={(value) =>
								setAttributes({
									advancedCountdownItemWrapperBorderColorSwitcher: value,
								})
							}
						/>
						{advancedCountdownItemWrapperBorderColorSwitcher === "normal" && (
							<>
								<FB_ColorControl
									label={__("Icon Color", "prime-elementor-addons-pro")}
									globalColor={advancedCountdownIconColorNormal}
									setGlobalColor={(value) =>
										setAttributes({
											advancedCountdownIconColorNormal:
												value === undefined ? "" : value,
										})
									}
								/>
								<FB_ColorControl
									label={__("Background Color", "prime-elementor-addons-pro")}
									globalColor={advancedCountdownIconBgColorNormal}
									setGlobalColor={(value) =>
										setAttributes({
											advancedCountdownIconBgColorNormal:
												value === undefined ? "" : value,
										})
									}
								/>
							</>
						)}
						{advancedCountdownItemWrapperBorderColorSwitcher === "hover" && (
							<>
								<FB_ColorControl
									label={__("Icon Color", "prime-elementor-addons-pro")}
									globalColor={advancedCountdownIconColorHover}
									setGlobalColor={(value) =>
										setAttributes({
											advancedCountdownIconColorHover:
												value === undefined ? "" : value,
										})
									}
								/>
								<FB_ColorControl
									label={__("Background Color", "prime-elementor-addons-pro")}
									globalColor={advancedCountdownIconBgColorHover}
									setGlobalColor={(value) =>
										setAttributes({
											advancedCountdownIconBgColorHover:
												value === undefined ? "" : value,
										})
									}
								/>
							</>
						)}
					</PanelBody>
				)}

			<PanelBody
				title={__("Countdown Text", "prime-elementor-addons-pro")}
				initialOpen={false}
			>
				{countDownPresetStyle === "style-5" && (
					<>
						<TextControl
							label={__("Days Label", "prime-elementor-addons-pro")}
							value={advancedCountdownLabelDays}
							onChange={(value) =>
								setAttributes({ advancedCountdownLabelDays: value })
							}
						/>
						<TextControl
							label={__("Hours Label", "prime-elementor-addons-pro")}
							value={advancedCountdownLabelHours}
							onChange={(value) =>
								setAttributes({ advancedCountdownLabelHours: value })
							}
						/>
						<TextControl
							label={__("Minutes Label", "prime-elementor-addons-pro")}
							value={advancedCountdownLabelMinutes}
							onChange={(value) =>
								setAttributes({ advancedCountdownLabelMinutes: value })
							}
						/>
					</>
				)}

				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={
						advancedCountdownCountdownTypographyGlobalTypoSwitcher
					}
					storeGlobalTypographyData={(value) =>
						setAttributes({
							advancedCountdownCountdownTypographyGlobalTypographyData: value,
						})
					}
					globalTypoType={advancedCountdownCountdownTypographyGlobalTypoType}
					onChangeGlobalTypoType={(value) =>
						setAttributes({
							advancedCountdownCountdownTypographyGlobalTypoType: value,
						})
					}
					globalTypoOption={
						advancedCountdownCountdownTypographyGlobalTypoOption
					}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({
							advancedCountdownCountdownTypographyGlobalTypoOption: value,
						})
					}
					fontFamily={advancedCountdownCountdownTypographyFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({
							advancedCountdownCountdownTypographyFontFamily: value,
						})
					}
					fontSize={advancedCountdownCountdownTypographyFontSize}
					onChangeFontSize={(value) =>
						setAttributes({
							advancedCountdownCountdownTypographyFontSize: value,
						})
					}
					fontSizeUnits={advancedCountdownCountdownTypographyFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({
							advancedCountdownCountdownTypographyFontSizeUnits: value,
						})
					}
					fontWeight={advancedCountdownCountdownTypographyFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({
							advancedCountdownCountdownTypographyFontWeight: value,
						})
					}
					fontStyle={advancedCountdownCountdownTypographyFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({
							advancedCountdownCountdownTypographyFontStyle: value,
						})
					}
					textTransform={advancedCountdownCountdownTypographyTextTransform}
					onChangeTextTransform={(value) =>
						setAttributes({
							advancedCountdownCountdownTypographyTextTransform: value,
						})
					}
					textDecoration={advancedCountdownCountdownTypographyTextDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({
							advancedCountdownCountdownTypographyTextDecoration: value,
						})
					}
					letterSpacing={advancedCountdownCountdownTypographyLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({
							advancedCountdownCountdownTypographyLetterSpacing: value,
						})
					}
					letterSpacingUnits={
						advancedCountdownCountdownTypographyLetterSpacingUnits
					}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({
							advancedCountdownCountdownTypographyLetterSpacingUnits: value,
						})
					}
					lineHeight={advancedCountdownCountdownTypographyLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({
							advancedCountdownCountdownTypographyLineHeight: value,
						})
					}
					lineHeightUnits={advancedCountdownCountdownTypographyLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({
							advancedCountdownCountdownTypographyLineHeightUnits: value,
						})
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				{["style-1", "style-5"].includes(countDownPresetStyle) && (
					<FB_ColorControl
						label={__("Label Color", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownLabelColorStyleMultiple}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownLabelColorStyleMultiple:
									value === undefined ? "" : value,
							})
						}
					/>
				)}

				{countDownPresetStyle === "style-5" && (
					<>
						<FB_TypographyControl
							label={__("Typography", "prime-elementor-addons-pro")}
							globalTypoControlActive={true}
							globalTypoSwitcher={
								advancedCountdownTimeValTypographyGlobalTypoSwitcher
							}
							storeGlobalTypographyData={(value) =>
								setAttributes({
									advancedCountdownTimeValTypographyGlobalTypographyData: value,
								})
							}
							globalTypoType={advancedCountdownTimeValTypographyGlobalTypoType}
							onChangeGlobalTypoType={(value) =>
								setAttributes({
									advancedCountdownTimeValTypographyGlobalTypoType: value,
								})
							}
							globalTypoOption={
								advancedCountdownTimeValTypographyGlobalTypoOption
							}
							onChangeGlobalTypoOption={(value) =>
								setAttributes({
									advancedCountdownTimeValTypographyGlobalTypoOption: value,
								})
							}
							fontFamily={advancedCountdownTimeValTypographyFontFamily}
							onChangeFontFamily={(value) =>
								setAttributes({
									advancedCountdownTimeValTypographyFontFamily: value,
								})
							}
							fontSize={advancedCountdownTimeValTypographyFontSize}
							onChangeFontSize={(value) =>
								setAttributes({
									advancedCountdownTimeValTypographyFontSize: value,
								})
							}
							fontSizeUnits={advancedCountdownTimeValTypographyFontSizeUnits}
							onChangeFontSizeUnit={(value) =>
								setAttributes({
									advancedCountdownTimeValTypographyFontSizeUnits: value,
								})
							}
							fontWeight={advancedCountdownTimeValTypographyFontWeight}
							onChangeFontWeight={(value) =>
								setAttributes({
									advancedCountdownTimeValTypographyFontWeight: value,
								})
							}
							fontStyle={advancedCountdownTimeValTypographyFontStyle}
							onChangeFontStyle={(value) =>
								setAttributes({
									advancedCountdownTimeValTypographyFontStyle: value,
								})
							}
							textTransform={advancedCountdownTimeValTypographyTextTransform}
							onChangeTextTransform={(value) =>
								setAttributes({
									advancedCountdownTimeValTypographyTextTransform: value,
								})
							}
							textDecoration={advancedCountdownTimeValTypographyTextDecoration}
							onChangeTextDecoration={(value) =>
								setAttributes({
									advancedCountdownTimeValTypographyTextDecoration: value,
								})
							}
							letterSpacing={advancedCountdownTimeValTypographyLetterSpacing}
							onChangeLetterSpacing={(value) =>
								setAttributes({
									advancedCountdownTimeValTypographyLetterSpacing: value,
								})
							}
							letterSpacingUnits={
								advancedCountdownTimeValTypographyLetterSpacingUnits
							}
							onChangeLetterSpacingUnit={(value) =>
								setAttributes({
									advancedCountdownTimeValTypographyLetterSpacingUnits: value,
								})
							}
							lineHeight={advancedCountdownTimeValTypographyLineHeight}
							onChangeLineHeight={(value) =>
								setAttributes({
									advancedCountdownTimeValTypographyLineHeight: value,
								})
							}
							lineHeightUnits={
								advancedCountdownTimeValTypographyLineHeightUnits
							}
							onChangeLineHeightUnit={(value) =>
								setAttributes({
									advancedCountdownTimeValTypographyLineHeightUnits: value,
								})
							}
							deviceType={deviceType}
							setAttributes={setAttributes}
						/>
						<FB_ColorControl
							label={__("Color", "prime-elementor-addons-pro")}
							globalColor={advancedCountdownTimeValLabelColor}
							setGlobalColor={(value) =>
								setAttributes({
									advancedCountdownTimeValLabelColor:
										value === undefined ? "" : value,
								})
							}
						/>
					</>
				)}

				{countDownPresetStyle === "style-4" && (
					<FB_ColorControl
						label={__("Label Color", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownLabelColorStyle4Digit}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownLabelColorStyle4Digit:
									value === undefined ? "" : value,
							})
						}
					/>
				)}

				{countDownPresetStyle === "style-2" && (
					<FB_ColorControl
						label={__("Text Color", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownTextColorStyle2}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownTextColorStyle2:
									value === undefined ? "" : value,
							})
						}
					/>
				)}

				{countDownPresetStyle === "style-3" && (
					<FB_ColorControl
						label={__("Text Color", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownTextColorStyle3}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownTextColorStyle3:
									value === undefined ? "" : value,
							})
						}
					/>
				)}
			</PanelBody>

			{["style-1", "style-2"].includes(countDownPresetStyle) && (
				<PanelBody
					title={__("Separator", "prime-elementor-addons-pro")}
					initialOpen={false}
				>
					<FB_TypographyControl
						globalTypoControlActive={true}
						globalTypoSwitcher={
							advancedCountdownSeparatorTypographyGlobalTypoSwitcher
						}
						storeGlobalTypographyData={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypographyGlobalTypographyData: value,
							})
						}
						globalTypoType={advancedCountdownSeparatorTypographyGlobalTypoType}
						onChangeGlobalTypoType={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypographyGlobalTypoType: value,
							})
						}
						globalTypoOption={
							advancedCountdownSeparatorTypographyGlobalTypoOption
						}
						onChangeGlobalTypoOption={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypographyGlobalTypoOption: value,
							})
						}
						fontFamily={advancedCountdownSeparatorTypographyFontFamily}
						onChangeFontFamily={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypographyFontFamily: value,
							})
						}
						fontSize={advancedCountdownSeparatorTypographyFontSize}
						onChangeFontSize={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypographyFontSize: value,
							})
						}
						fontSizeUnits={advancedCountdownSeparatorTypographyFontSizeUnits}
						onChangeFontSizeUnit={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypographyFontSizeUnits: value,
							})
						}
						fontWeight={advancedCountdownSeparatorTypographyFontWeight}
						onChangeFontWeight={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypographyFontWeight: value,
							})
						}
						fontStyle={advancedCountdownSeparatorTypographyFontStyle}
						onChangeFontStyle={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypographyFontStyle: value,
							})
						}
						textTransform={advancedCountdownSeparatorTypographyTextTransform}
						onChangeTextTransform={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypographyTextTransform: value,
							})
						}
						textDecoration={advancedCountdownSeparatorTypographyTextDecoration}
						onChangeTextDecoration={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypographyTextDecoration: value,
							})
						}
						letterSpacing={advancedCountdownSeparatorTypographyLetterSpacing}
						onChangeLetterSpacing={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypographyLetterSpacing: value,
							})
						}
						letterSpacingUnits={
							advancedCountdownSeparatorTypographyLetterSpacingUnits
						}
						onChangeLetterSpacingUnit={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypographyLetterSpacingUnits: value,
							})
						}
						lineHeight={advancedCountdownSeparatorTypographyLineHeight}
						onChangeLineHeight={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypographyLineHeight: value,
							})
						}
						lineHeightUnits={
							advancedCountdownSeparatorTypographyLineHeightUnits
						}
						onChangeLineHeightUnit={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypographyLineHeightUnits: value,
							})
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
					/>
					<FB_SwitcherControl
						label={__("Color", "prime-elementor-addons-pro")}
						globalSwitcher={advancedCountdownItemWrapperBorderColorSwitcher} // Reusing switcher
						setGlobalSwitcher={(value) =>
							setAttributes({
								advancedCountdownItemWrapperBorderColorSwitcher: value,
							})
						}
					/>
					{advancedCountdownItemWrapperBorderColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Color", "prime-elementor-addons-pro")}
							globalColor={advancedCountdownSeparatorColor}
							setGlobalColor={(value) =>
								setAttributes({
									advancedCountdownSeparatorColor:
										value === undefined ? "" : value,
								})
							}
						/>
					)}
					{advancedCountdownItemWrapperBorderColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "prime-elementor-addons-pro")}
							globalColor={advancedCountdownSeparatorHoverColor}
							setGlobalColor={(value) =>
								setAttributes({
									advancedCountdownSeparatorHoverColor:
										value === undefined ? "" : value,
								})
							}
						/>
					)}
					<FB_Range
						label={__("Gap", "prime-elementor-addons-pro")}
						min={0}
						max={100}
						rangeValue={advancedCountdownSeparatorSpacing}
						onChangeHandler={
							advancedCountdownSeparatorSpacingHandleSpacingUnitHandler
						}
						rangeUnitHandler={advancedCountdownSeparatorSpacingUnitsHandler}
						deviceType={deviceType}
						units={advancedCountdownSeparatorSpacing.unit}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={8}
					/>
				</PanelBody>
			)}

			{["style-1", "style-2"].includes(countDownPresetStyle) && (
				<PanelBody
					title={__("Overlay Bg", "prime-elementor-addons-pro")}
					initialOpen={false}
				>
					<FB_ColorControl
						label={__("Background Color", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownSvgBgOverlayColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownSvgBgOverlayColor:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_Range
						label={__("Opacity", "prime-elementor-addons-pro")}
						min={0}
						max={1}
						rangeValue={advancedCountdownSvgBgOverlayOpacity}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownSvgBgOverlayOpacity: {
									...advancedCountdownSvgBgOverlayOpacity,
									[deviceType]: value,
								},
							})
						}
						deviceType={deviceType}
						units="px"
						setAttributes={setAttributes}
						rangeStep={0.1}
						resetFallbackValue={0.4}
					/>
				</PanelBody>
			)}

			{countDownPresetStyle === "style-1" && (
				<PanelBody
					title={__("SVG Progress Bar", "prime-elementor-addons-pro")}
					initialOpen={false}
				>
					<FB_ColorControl
						label={__("Active Color", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownProgressCircleActiveColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownProgressCircleActiveColor:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_ColorControl
						label={__("In Active Color", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownProgressCircleInactiveColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownProgressCircleInactiveColor:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_Range
						label={__("Stroke Width", "prime-elementor-addons-pro")}
						min={0}
						max={100}
						rangeValue={advancedCountdownSvgStrokeWidth}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownSvgStrokeWidth: {
									...advancedCountdownSvgStrokeWidth,
									[deviceType]: value,
								},
							})
						}
						deviceType={deviceType}
						units="px"
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={0}
					/>
				</PanelBody>
			)}

			{countDownPresetStyle === "style-2" && (
				<PanelBody
					title={__("SVG Progress Bar", "prime-elementor-addons-pro")}
					initialOpen={false}
				>
					<FB_ColorControl
						label={__("Progress Color", "prime-elementor-addons-pro")}
						globalColor={advancedCountdownProgressColorStyle2}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownProgressColorStyle2:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_Range
						label={__("Stroke Width", "prime-elementor-addons-pro")}
						min={5}
						max={20}
						rangeValue={advancedCountdownSvgStrokeWidthStyle2}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownSvgStrokeWidthStyle2: {
									...advancedCountdownSvgStrokeWidthStyle2,
									[deviceType]: value,
								},
							})
						}
						deviceType={deviceType}
						units="px"
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={15}
					/>
				</PanelBody>
			)}

			{["style-1", "style-2"].includes(countDownPresetStyle) && (
				<PanelBody
					title={__("Footer Text", "prime-elementor-addons-pro")}
					initialOpen={false}
				>
					<FB_TypographyControl
						globalTypoControlActive={true}
						globalTypoSwitcher={
							advancedCountdownFooterTypographyGlobalTypoSwitcher
						}
						storeGlobalTypographyData={(value) =>
							setAttributes({
								advancedCountdownFooterTypographyGlobalTypographyData: value,
							})
						}
						globalTypoType={advancedCountdownFooterTypographyGlobalTypoType}
						onChangeGlobalTypoType={(value) =>
							setAttributes({
								advancedCountdownFooterTypographyGlobalTypoType: value,
							})
						}
						globalTypoOption={advancedCountdownFooterTypographyGlobalTypoOption}
						onChangeGlobalTypoOption={(value) =>
							setAttributes({
								advancedCountdownFooterTypographyGlobalTypoOption: value,
							})
						}
						fontFamily={advancedCountdownFooterTypographyFontFamily}
						onChangeFontFamily={(value) =>
							setAttributes({
								advancedCountdownFooterTypographyFontFamily: value,
							})
						}
						fontSize={advancedCountdownFooterTypographyFontSize}
						onChangeFontSize={(value) =>
							setAttributes({
								advancedCountdownFooterTypographyFontSize: value,
							})
						}
						fontSizeUnits={advancedCountdownFooterTypographyFontSizeUnits}
						onChangeFontSizeUnit={(value) =>
							setAttributes({
								advancedCountdownFooterTypographyFontSizeUnits: value,
							})
						}
						fontWeight={advancedCountdownFooterTypographyFontWeight}
						onChangeFontWeight={(value) =>
							setAttributes({
								advancedCountdownFooterTypographyFontWeight: value,
							})
						}
						fontStyle={advancedCountdownFooterTypographyFontStyle}
						onChangeFontStyle={(value) =>
							setAttributes({
								advancedCountdownFooterTypographyFontStyle: value,
							})
						}
						textTransform={advancedCountdownFooterTypographyTextTransform}
						onChangeTextTransform={(value) =>
							setAttributes({
								advancedCountdownFooterTypographyTextTransform: value,
							})
						}
						textDecoration={advancedCountdownFooterTypographyTextDecoration}
						onChangeTextDecoration={(value) =>
							setAttributes({
								advancedCountdownFooterTypographyTextDecoration: value,
							})
						}
						letterSpacing={advancedCountdownFooterTypographyLetterSpacing}
						onChangeLetterSpacing={(value) =>
							setAttributes({
								advancedCountdownFooterTypographyLetterSpacing: value,
							})
						}
						letterSpacingUnits={
							advancedCountdownFooterTypographyLetterSpacingUnits
						}
						onChangeLetterSpacingUnit={(value) =>
							setAttributes({
								advancedCountdownFooterTypographyLetterSpacingUnits: value,
							})
						}
						lineHeight={advancedCountdownFooterTypographyLineHeight}
						onChangeLineHeight={(value) =>
							setAttributes({
								advancedCountdownFooterTypographyLineHeight: value,
							})
						}
						lineHeightUnits={advancedCountdownFooterTypographyLineHeightUnits}
						onChangeLineHeightUnit={(value) =>
							setAttributes({
								advancedCountdownFooterTypographyLineHeightUnits: value,
							})
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
					/>
					<FB_SwitcherControl
						label={__("Color", "prime-elementor-addons-pro")}
						globalSwitcher={advancedCountdownItemWrapperBorderColorSwitcher} // Reusing switcher
						setGlobalSwitcher={(value) =>
							setAttributes({
								advancedCountdownItemWrapperBorderColorSwitcher: value,
							})
						}
					/>
					{advancedCountdownItemWrapperBorderColorSwitcher === "normal" && (
						<>
							<FB_ColorControl
								label={__("Text Color", "prime-elementor-addons-pro")}
								globalColor={advancedCountdownFooterTextColor}
								setGlobalColor={(value) =>
									setAttributes({
										advancedCountdownFooterTextColor:
											value === undefined ? "" : value,
									})
								}
							/>
							<FB_ColorControl
								label={__("Background Color", "prime-elementor-addons-pro")}
								globalColor={advancedCountdownFooterBgColor}
								setGlobalColor={(value) =>
									setAttributes({
										advancedCountdownFooterBgColor:
											value === undefined ? "" : value,
									})
								}
							/>
						</>
					)}
					{advancedCountdownItemWrapperBorderColorSwitcher === "hover" && (
						<>
							<FB_ColorControl
								label={__("Text Color", "prime-elementor-addons-pro")}
								globalColor={advancedCountdownFooterTextColorHover}
								setGlobalColor={(value) =>
									setAttributes({
										advancedCountdownFooterTextColorHover:
											value === undefined ? "" : value,
									})
								}
							/>
							<FB_ColorControl
								label={__("Background Color", "prime-elementor-addons-pro")}
								globalColor={advancedCountdownFooterBgColorHover}
								setGlobalColor={(value) =>
									setAttributes({
										advancedCountdownFooterBgColorHover:
											value === undefined ? "" : value,
									})
								}
							/>
						</>
					)}
					{countDownPresetStyle === "style-2" && (
						<FB_ColorControl
							label={__("Background Gradient", "prime-elementor-addons-pro")}
							globalColor={advancedCountdownFooterBgCustomStyle2}
							setGlobalColor={(value) =>
								setAttributes({
									advancedCountdownFooterBgCustomStyle2:
										value === undefined ? "" : value,
								})
							}
						/>
					)}
					<FB_Spacing
						label={__("Padding", "prime-elementor-addons-pro")}
						deviceType={deviceType}
						spacingUnitsHandler={
							advancedCountdownFooterPaddingSpacingUnitsHandler
						}
						spacingUnits={advancedCountdownFooterPadding.unit}
						spacingDesktop={advancedCountdownFooterPadding}
						handleSpacingUnitHandler={
							advancedCountdownFooterPaddingHandleSpacingUnitHandler
						}
						spacingCombineBtn={advancedCountdownFooterPaddingLink}
						spacingCombineBtnHandler={
							advancedCountdownFooterPaddingSpacingCombineBtnHandlerFn
						}
						setAttributes={setAttributes}
					/>
					<FB_Spacing
						label={__("Margin", "prime-elementor-addons-pro")}
						deviceType={deviceType}
						spacingUnitsHandler={
							advancedCountdownFooterMarginSpacingUnitsHandler
						}
						spacingUnits={advancedCountdownFooterMargin.unit}
						spacingDesktop={advancedCountdownFooterMargin}
						handleSpacingUnitHandler={
							advancedCountdownFooterMarginHandleSpacingUnitHandler
						}
						spacingCombineBtn={advancedCountdownFooterMarginLink}
						spacingCombineBtnHandler={
							advancedCountdownFooterMarginSpacingCombineBtnHandlerFn
						}
						setAttributes={setAttributes}
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
			<PanelBody title={__("Layout", "frontis-blocks")} initialOpen={true}>
				<FB_Range
					min={0}
					max={10000000}
					label={__("Z Index", "frontis-blocks")}
					rangeValue={countDownZIndex}
					onChangeHandler={(value) =>
						setAttributes({ countDownZIndex: value === 0 ? undefined : value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
					isRangeUnit={false}
				/>

				<SelectControl
					label={__("Overflow", "frontis-blocks")}
					value={countDownOverflow}
					options={["default", "auto", "hidden", "scroll", "clip"].map(
						(val) => ({ label: val, value: val }),
					)}
					onChange={(value) => setAttributes({ countDownOverflow: value })}
				/>

				<FB_PositionControl
					deviceType={deviceType}
					positionType={countDownPositionType}
					setPositionType={(value) =>
						setAttributes({ countDownPositionType: value })
					}
					HZOrientationType={countDownHZOrientationType}
					setHZOrientationType={(value) =>
						setAttributes({ countDownHZOrientationType: value })
					}
					VROrientationType={countDownVROrientationType}
					setVROrientationType={(value) =>
						setAttributes({ countDownVROrientationType: value })
					}
					HZLeftOffset={countDownHZLeftOffset}
					setHZLeftOffset={(value) =>
						setAttributes({ countDownHZLeftOffset: value })
					}
					HZLeftOffsetUnits={countDownHZLeftOffsetUnits}
					setHZLeftOffsetUnits={(value) =>
						setAttributes({ countDownHZLeftOffsetUnits: value })
					}
					HZRightOffset={countDownHZRightOffset}
					setHZRightOffset={(value) =>
						setAttributes({ countDownHZRightOffset: value })
					}
					HZRightOffsetUnits={countDownHZRightOffsetUnits}
					setHZRightOffsetUnits={(value) =>
						setAttributes({ countDownHZRightOffsetUnits: value })
					}
					VRTopOffset={countDownVRTopOffset}
					setVRTopOffset={(value) =>
						setAttributes({ countDownVRTopOffset: value })
					}
					VRTopOffsetUnits={countDownVRTopOffsetUnits}
					setVRTopOffsetUnits={(value) =>
						setAttributes({ countDownVRTopOffsetUnits: value })
					}
					VRBottomOffset={countDownVRBottomOffset}
					setVRBottomOffset={(value) =>
						setAttributes({ countDownVRBottomOffset: value })
					}
					VRBottomOffsetUnits={countDownVRBottomOffsetUnits}
					setVRBottomOffsetUnits={(value) =>
						setAttributes({ countDownVRBottomOffsetUnits: value })
					}
					setAttributes={setAttributes}
				/>

				<FB_InputControl
					label={__("CSS ID", "frontis-blocks")}
					value={countDownGlobalWraperID}
					onChangeValue={(value) =>
						setAttributes({ countDownGlobalWraperID: value })
					}
					helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
				/>

				<FB_InputControl
					label={__("CSS Class", "frontis-blocks")}
					value={countDownGlobalWraperClass}
					onChangeValue={(value) =>
						setAttributes({ countDownGlobalWraperClass: value })
					}
					helpText={__("Separate with spaces key.", "frontis-blocks")}
				/>
			</PanelBody>
			<PanelBody
				title={__("Responsive Control", "frontis-blocks")}
				initialOpen={false}
				className="fb-setting-responsive-control-wrapper"
			>
				<FB_VisibilityControl
					desktopValue={countDownDesktopSwitcher}
					setDesktopValue={(value) =>
						setAttributes({ countDownDesktopSwitcher: value })
					}
					tabletValue={countDownTabletSwitcher}
					setTabletValue={(value) =>
						setAttributes({ countDownTabletSwitcher: value })
					}
					mobileValue={countDownMobileSwitcher}
					setMobileValue={(value) =>
						setAttributes({ countDownMobileSwitcher: value })
					}
				/>
			</PanelBody>
			<PanelBody title={__("Custom CSS", "frontis-blocks")} initialOpen={false}>
				<FB_CustomCSSEditor
					value={countDownGlobalWraperCustomCSS}
					onChangeValue={(value) =>
						setAttributes({ countDownGlobalWraperCustomCSS: value })
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
};
export default memo(Inspector);
