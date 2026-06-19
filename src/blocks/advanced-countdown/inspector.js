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

		//  Preset & Basic Settings
		advancedCountdownPresetStyle,
		advancedCountdownStartDate,
		advancedCountdownTargetDate,
		advancedCountdownUntilText,
		advancedCountdownShowSunIcon,
		advancedCountdownSunIcon,

		// Layout & Sizing 
		advancedCountdownContainerSize,
		advancedCountdownSvgProgressSize,
		advancedCountdownStyle2ProgressBarSize,
		advancedCountdownContainerSizeStyle3,
		advancedCountdownContainerSizeStyle3Inner,
		advancedCountdownContainerSizeStyle5,
		advancedCountdownLayoutAlignment,

		//  Global Background 
		advancedCountdownGlobalBgColorSwitcher,
		advancedCountdownGlobalBackgroundType,
		advancedCountdownGlobalClassicColor,
		advancedCountdownGlobalGradientColor,
		advancedCountdownGlobalCustomGradientSwitcher,
		advancedCountdownGlobalCustomGradientInputValue,
		advancedCountdownGlobalBackgroundImageUrl,
		advancedCountdownGlobalBackgroundImageAlt,
		advancedCountdownGlobalBackgroundImageID,
		advancedCountdownGlobalBackgroundImagePosition,
		advancedCountdownGlobalBackgroundImageAttachment,
		advancedCountdownGlobalBackgroundImageSize,
		advancedCountdownGlobalBackgroundImageRepeat,

		//  Hover Background 
		advancedCountdownHoverBackgroundType,
		advancedCountdownHoverClassicColor,
		advancedCountdownHoverGradientColor,
		advancedCountdownHoverCustomGradientSwitcher,
		advancedCountdownHoverCustomGradientInputValue,
		advancedCountdownHoverBackgroundImageUrl,
		advancedCountdownHoverBackgroundImageAlt,
		advancedCountdownHoverBackgroundImageID,
		advancedCountdownHoverBackgroundImagePosition,
		advancedCountdownHoverBackgroundImageAttachment,
		advancedCountdownHoverBackgroundImageSize,
		advancedCountdownHoverBackgroundImageRepeat,

		//  Hover / Transition 
		advancedCountdownContainerHoverTransition,
		advancedCountdownBorderHoverColor,
		advancedCountdownBorderHoverTransition,

		//  Item Wrapper Border 
		advancedCountdownItemWrapperBorder,
		advancedCountdownItemWrapperBorderColorSwitcher,
		advancedCountdownItemWrapperBorderColor,
		advancedCountdownItemWrapperBorderTypeUnits,
		advancedCountdownItemWrapperBorderTypeDesktop,
		advancedCountdownItemWrapperBorderTypeTablet,
		advancedCountdownItemWrapperBorderTypeMobile,
		advancedCountdownItemWrapperBorderTypeLink,

		//  Item Wrapper Border Radius 
		advancedCountdownItemWrapperBorderRadiusUnits,
		advancedCountdownItemWrapperBorderRadiusDesktop,
		advancedCountdownItemWrapperBorderRadiusTablet,
		advancedCountdownItemWrapperBorderRadiusMobile,
		advancedCountdownItemWrapperBorderRadiusLink,

		//  Item Wrapper Padding / Margin 
		advancedCountdownItemWrapperPaddingUnits,
		advancedCountdownItemWrapperPaddingDesktop,
		advancedCountdownItemWrapperPaddingTablet,
		advancedCountdownItemWrapperPaddingMobile,
		advancedCountdownItemWrapperPaddingLink,
		advancedCountdownItemWrapperMarginUnits,
		advancedCountdownItemWrapperMarginDesktop,
		advancedCountdownItemWrapperMarginTablet,
		advancedCountdownItemWrapperMarginMobile,
		advancedCountdownItemWrapperMarginLink,

		//  Style 2: Dashed Progress Bar 
		advancedCountdownStyle2ProgressBarColor,
		advancedCountdownStyle2DashCount,

		//  Style 3 Progress & Indicator 
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

		//  Style 4 Dots 
		advancedCountdownStyle4LabelAlignment,
		advancedCountdownStyle4LabelTypoGlobalTypoSwitcher,
		advancedCountdownStyle4LabelTypoGlobalTypographyData,
		advancedCountdownStyle4LabelTypoGlobalTypoType,
		advancedCountdownStyle4LabelTypoGlobalTypoOption,
		advancedCountdownStyle4LabelTypoFontFamily,
		advancedCountdownStyle4LabelTypoFontSize,
		advancedCountdownStyle4LabelTypoFontSizeUnits,
		advancedCountdownStyle4LabelTypoFontWeight,
		advancedCountdownStyle4LabelTypoFontStyle,
		advancedCountdownStyle4LabelTypoTextTransform,
		advancedCountdownStyle4LabelTypoTextDecoration,
		advancedCountdownStyle4LabelTypoLetterSpacing,
		advancedCountdownStyle4LabelTypoLetterSpacingUnits,
		advancedCountdownStyle4LabelTypoLineHeight,
		advancedCountdownStyle4LabelTypoLineHeightUnits,
		advancedCountdownStyle4LabelDigitColor,
		advancedCountdownStyle4DashGap,
		advancedCountdownStyle4DashColor,
		advancedCountdownStyle4DashSize,

		//  Style 5 Dots Configuration 
		advancedCountdownStyle4DaysTotalDots,
		advancedCountdownStyle4HoursTotalDots,
		advancedCountdownStyle4MinutesTotalDots,
		advancedCountdownStyle4ActiveDotColor,
		advancedCountdownStyle4InactiveDotColor,
		advancedCountdownStyle4DotsThickness,
		advancedCountdownStyle4DotsGap,
		advancedCountdownStyle4DotsGlowEffect,
		advancedCountdownStyle4GlowIntensity,
		advancedCountdownStyle4GlowColor,

		//  Style 5 Countdown Text 
		advancedCountdownLabelDays,
		advancedCountdownLabelHours,
		advancedCountdownLabelMinutes,
		advancedCountdownStyle5LabelColorMultiple,
		advancedCountdownStyle5TimeValLabelColor,
		advancedCountdownStyle5CountdownTypoGlobalTypoSwitcher,
		advancedCountdownStyle5CountdownTypoGlobalTypographyData,
		advancedCountdownStyle5CountdownTypoGlobalTypoType,
		advancedCountdownStyle5CountdownTypoGlobalTypoOption,
		advancedCountdownStyle5CountdownTypoFontFamily,
		advancedCountdownStyle5CountdownTypoFontSize,
		advancedCountdownStyle5CountdownTypoFontSizeUnits,
		advancedCountdownStyle5CountdownTypoFontWeight,
		advancedCountdownStyle5CountdownTypoFontStyle,
		advancedCountdownStyle5CountdownTypoTextTransform,
		advancedCountdownStyle5CountdownTypoTextDecoration,
		advancedCountdownStyle5CountdownTypoLetterSpacing,
		advancedCountdownStyle5CountdownTypoLetterSpacingUnits,
		advancedCountdownStyle5CountdownTypoLineHeight,
		advancedCountdownStyle5CountdownTypoLineHeightUnits,
		advancedCountdownStyle5TimeValTypoGlobalTypoSwitcher,
		advancedCountdownStyle5TimeValTypoGlobalTypographyData,
		advancedCountdownStyle5TimeValTypoGlobalTypoType,
		advancedCountdownStyle5TimeValTypoGlobalTypoOption,
		advancedCountdownStyle5TimeValTypoFontFamily,
		advancedCountdownStyle5TimeValTypoFontSize,
		advancedCountdownStyle5TimeValTypoFontSizeUnits,
		advancedCountdownStyle5TimeValTypoFontWeight,
		advancedCountdownStyle5TimeValTypoFontStyle,
		advancedCountdownStyle5TimeValTypoTextTransform,
		advancedCountdownStyle5TimeValTypoTextDecoration,
		advancedCountdownStyle5TimeValTypoLetterSpacing,
		advancedCountdownStyle5TimeValTypoLetterSpacingUnits,
		advancedCountdownStyle5TimeValTypoLineHeight,
		advancedCountdownStyle5TimeValTypoLineHeightUnits,

		//  Separator
		advancedCountdownSeparatorTypoGlobalTypoSwitcher,
		advancedCountdownSeparatorTypoGlobalTypographyData,
		advancedCountdownSeparatorTypoGlobalTypoType,
		advancedCountdownSeparatorTypoGlobalTypoOption,
		advancedCountdownSeparatorTypoFontFamily,
		advancedCountdownSeparatorTypoFontSize,
		advancedCountdownSeparatorTypoFontSizeUnits,
		advancedCountdownSeparatorTypoFontWeight,
		advancedCountdownSeparatorTypoFontStyle,
		advancedCountdownSeparatorTypoTextTransform,
		advancedCountdownSeparatorTypoTextDecoration,
		advancedCountdownSeparatorTypoLetterSpacing,
		advancedCountdownSeparatorTypoLetterSpacingUnits,
		advancedCountdownSeparatorTypoLineHeight,
		advancedCountdownSeparatorTypoLineHeightUnits,
		advancedCountdownSeparatorColor,
		advancedCountdownSeparatorHoverColor,
		advancedCountdownSeparatorSpacing,

		//  Style 1 Overlay 
		advancedCountdownStyle1SvgBgOverlayColor,
		advancedCountdownStyle1SvgBgOverlayOpacity,
		advancedCountdownStyle1ProgressCircleActiveColor,
		advancedCountdownStyle1ProgressCircleInactiveColor,
		advancedCountdownStyle1SvgStrokeWidth,

		//  Style 2 SVG Progress Bar 
		advancedCountdownStyle2ProgressColor,
		advancedCountdownStyle2SvgStrokeWidth,
		advancedCountdownStyle2TextColor,

		//  Style 3 Text Color 
		advancedCountdownStyle3TextColor,

		//  Icon 
		advancedCountdownIconSize,
		advancedCountdownIconColorNormal,
		advancedCountdownIconBgColorNormal,
		advancedCountdownIconColorHover,
		advancedCountdownIconBgColorHover,

		//  Footer 
		advancedCountdownFooterTypoGlobalTypoSwitcher,
		advancedCountdownFooterTypoGlobalTypographyData,
		advancedCountdownFooterTypoGlobalTypoType,
		advancedCountdownFooterTypoGlobalTypoOption,
		advancedCountdownFooterTypoFontFamily,
		advancedCountdownFooterTypoFontSize,
		advancedCountdownFooterTypoFontSizeUnits,
		advancedCountdownFooterTypoFontWeight,
		advancedCountdownFooterTypoFontStyle,
		advancedCountdownFooterTypoTextTransform,
		advancedCountdownFooterTypoTextDecoration,
		advancedCountdownFooterTypoLetterSpacing,
		advancedCountdownFooterTypoLetterSpacingUnits,
		advancedCountdownFooterTypoLineHeight,
		advancedCountdownFooterTypoLineHeightUnits,
		advancedCountdownFooterTextColor,
		advancedCountdownFooterBgColor,
		advancedCountdownFooterTextColorHover,
		advancedCountdownFooterBgColorHover,
		advancedCountdownFooterBgCustomStyle2,
		advancedCountdownFooterPadding,
		advancedCountdownFooterPaddingLink,
		advancedCountdownFooterMargin,
		advancedCountdownFooterMarginLink,

		// ─── Advanced -──────────
		advancedCountdownCustomCSS,
		advancedCountdownCustomID,
		advancedCountdownCustomClass,
		advancedCountdownDesktopSwitcher,
		advancedCountdownTabletSwitcher,
		advancedCountdownMobileSwitcher,
		advancedCountdownZIndex,
		advancedCountdownOverflow,
		advancedCountdownPositionType,
		advancedCountdownHZOrientationType,
		advancedCountdownVROrientationType,
		advancedCountdownHZLeftOffset,
		advancedCountdownHZLeftOffsetUnits,
		advancedCountdownHZRightOffset,
		advancedCountdownHZRightOffsetUnits,
		advancedCountdownVRTopOffset,
		advancedCountdownVRTopOffsetUnits,
		advancedCountdownVRBottomOffset,
		advancedCountdownVRBottomOffsetUnits,
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
		advancedCountdownTargetDate
			? new Date(advancedCountdownTargetDate)
			: defaultDate,
	);

	useEffect(() => {
		if (!advancedCountdownTargetDate) {
			setAttributes({ advancedCountdownTargetDate: defaultDate.toISOString() });
		}
		if (!advancedCountdownStartDate) {
			setAttributes({ advancedCountdownStartDate: new Date().toISOString() });
		}
	}, [advancedCountdownTargetDate, setAttributes, defaultDate, advancedCountdownStartDate]);

	useEffect(() => {
		setAttributes({ advancedCountdownTargetDate: date.toISOString() });
	}, [date, setAttributes]);

	useEffect(() => {
		setAttributes({ advancedCountdownStartDate: startDate.toISOString() });
	}, [startDate, setAttributes]);

	/** Start Item Wrapper Border Width */
	const handleItemWrapperBorderUnitHandler = (event, position) => {
		const value = event.target.value;
		if (advancedCountdownItemWrapperBorderTypeLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						advancedCountdownItemWrapperBorderTypeDesktop: {
							top: value, right: value, bottom: value, left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						advancedCountdownItemWrapperBorderTypeTablet: {
							top: value, right: value, bottom: value, left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						advancedCountdownItemWrapperBorderTypeMobile: {
							top: value, right: value, bottom: value, left: value,
						},
					});
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
			}
		}
	};

	const itemWrapperBorderTypeUnitsHandler = (unit) => {
		setAttributes({
			advancedCountdownItemWrapperBorderTypeUnits: {
				...advancedCountdownItemWrapperBorderTypeUnits,
				[deviceType]: unit,
			},
		});
	};

	const itemWrapperBorderCombineBtnHandler = () => {
		setAttributes({
			advancedCountdownItemWrapperBorderTypeLink:
				!advancedCountdownItemWrapperBorderTypeLink,
		});
	};
	/** End Item Wrapper Border Width */

	/** Start Item Wrapper Border Radius */
	const handleItemWrapperBorderRadiusUnitHandler = (event, position) => {
		const value = event.target.value;
		if (advancedCountdownItemWrapperBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						advancedCountdownItemWrapperBorderRadiusDesktop: {
							top: value, right: value, bottom: value, left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						advancedCountdownItemWrapperBorderRadiusTablet: {
							top: value, right: value, bottom: value, left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						advancedCountdownItemWrapperBorderRadiusMobile: {
							top: value, right: value, bottom: value, left: value,
						},
					});
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
			}
		}
	};

	const itemWrapperBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			advancedCountdownItemWrapperBorderRadiusUnits: {
				...advancedCountdownItemWrapperBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const itemWrapperBorderRadiusCombineBtnHandler = () => {
		setAttributes({
			advancedCountdownItemWrapperBorderRadiusLink:
				!advancedCountdownItemWrapperBorderRadiusLink,
		});
	};
	/** End Item Wrapper Border Radius */

	/** Start Item Wrapper Padding */
	const handleItemWrapperPaddingUnitHandler = (event, position) => {
		const value = event.target.value;
		if (advancedCountdownItemWrapperPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						advancedCountdownItemWrapperPaddingDesktop: {
							top: value, right: value, bottom: value, left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						advancedCountdownItemWrapperPaddingTablet: {
							top: value, right: value, bottom: value, left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						advancedCountdownItemWrapperPaddingMobile: {
							top: value, right: value, bottom: value, left: value,
						},
					});
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
			}
		}
	};

	const itemWrapperPaddingUnitsHandler = (unit) => {
		setAttributes({
			advancedCountdownItemWrapperPaddingUnits: {
				...advancedCountdownItemWrapperPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const itemWrapperPaddingCombineBtnHandler = () => {
		setAttributes({
			advancedCountdownItemWrapperPaddingLink:
				!advancedCountdownItemWrapperPaddingLink,
		});
	};
	/** End Item Wrapper Padding */

	/** Start Item Wrapper Margin */
	const handleItemWrapperMarginUnitHandler = (event, position) => {
		const value = event.target.value;
		if (advancedCountdownItemWrapperMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						advancedCountdownItemWrapperMarginDesktop: {
							top: value, right: value, bottom: value, left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						advancedCountdownItemWrapperMarginTablet: {
							top: value, right: value, bottom: value, left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						advancedCountdownItemWrapperMarginMobile: {
							top: value, right: value, bottom: value, left: value,
						},
					});
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
			}
		}
	};

	const itemWrapperMarginUnitsHandler = (unit) => {
		setAttributes({
			advancedCountdownItemWrapperMarginUnits: {
				...advancedCountdownItemWrapperMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const itemWrapperMarginCombineBtnHandler = () => {
		setAttributes({
			advancedCountdownItemWrapperMarginLink:
				!advancedCountdownItemWrapperMarginLink,
		});
	};
	/** End Item Wrapper Margin */

	/** Start Separator Spacing */
	const handleSeparatorSpacingUnitHandler = (event, position) => {
		const value = event.target.value;
		setAttributes({
			advancedCountdownSeparatorSpacing: {
				...advancedCountdownSeparatorSpacing,
				[deviceType]: value,
			},
		});
	};

	const separatorSpacingUnitsHandler = (unit) => {
		setAttributes({
			advancedCountdownSeparatorSpacing: {
				...advancedCountdownSeparatorSpacing,
				[deviceType]: unit,
			},
		});
	};
	/** End Separator Spacing */

	/** Start Icon Size */
	const handleIconSizeUnitHandler = (event, position) => {
		const value = event.target.value;
		setAttributes({
			advancedCountdownIconSize: {
				...advancedCountdownIconSize,
				[deviceType]: value,
			},
		});
	};

	const iconSizeUnitsHandler = (unit) => {
		setAttributes({
			advancedCountdownIconSize: {
				...advancedCountdownIconSize,
				[deviceType]: unit,
			},
		});
	};
	/** End Icon Size */

	/** Start Footer Padding */
	const handleFooterPaddingUnitHandler = (event, position) => {
		const value = event.target.value;
		if (advancedCountdownFooterPaddingLink) {
			setAttributes({
				advancedCountdownFooterPadding: {
					...advancedCountdownFooterPadding,
					top: value, right: value, bottom: value, left: value,
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

	const footerPaddingUnitsHandler = (unit) => {
		setAttributes({
			advancedCountdownFooterPadding: {
				...advancedCountdownFooterPadding,
				[deviceType]: unit,
			},
		});
	};

	const footerPaddingCombineBtnHandler = () => {
		setAttributes({
			advancedCountdownFooterPaddingLink: !advancedCountdownFooterPaddingLink,
		});
	};
	/** End Footer Padding */

	/** Start Footer Margin */
	const handleFooterMarginUnitHandler = (event, position) => {
		const value = event.target.value;
		if (advancedCountdownFooterMarginLink) {
			setAttributes({
				advancedCountdownFooterMargin: {
					...advancedCountdownFooterMargin,
					top: value, right: value, bottom: value, left: value,
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

	const footerMarginUnitsHandler = (unit) => {
		setAttributes({
			advancedCountdownFooterMargin: {
				...advancedCountdownFooterMargin,
				[deviceType]: unit,
			},
		});
	};

	const footerMarginCombineBtnHandler = () => {
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
					value={advancedCountdownPresetStyle}
					onChangeValue="advancedCountdownPresetStyle"
					defaultPresetValue="style-1"
					setAttributes={setAttributes}
				/>

				<DateTimePicker
					currentDate={advancedCountdownTargetDate}
					onChange={(newDate) =>
						setAttributes({ advancedCountdownTargetDate: newDate })
					}
					is12Hour={true}
					dateFormat="Y-m-d H:i"
					time_24hr={true}
					label={__("Due Date & Time", "frontis-blocks")}
				/>

				<DateTimePicker
					currentDate={advancedCountdownStartDate}
					onChange={(newDate) =>
						setAttributes({ advancedCountdownStartDate: newDate })
					}
					is12Hour={true}
					dateFormat="Y-m-d H:i"
					time_24hr={true}
					label={__("Start Date & Time", "frontis-blocks")}
				/>

				{["style-1", "style-2"].includes(advancedCountdownPresetStyle) && (
					<TextControl
						label={__("Footer Text", "frontis-blocks")}
						value={advancedCountdownUntilText}
						onChange={(value) =>
							setAttributes({ advancedCountdownUntilText: value })
						}
					/>
				)}

				{advancedCountdownPresetStyle === "style-1" && (
					<>
						<ToggleControl
							label={__("Show Icon", "frontis-blocks")}
							checked={advancedCountdownShowSunIcon === "yes"}
							onChange={(value) =>
								setAttributes({
									advancedCountdownShowSunIcon: value ? "yes" : "no",
								})
							}
						/>
						{advancedCountdownShowSunIcon === "yes" && (
							<FB_IconPicker
								label={__("Icon", "frontis-blocks")}
								value={advancedCountdownSunIcon?.value}
								setIconHandler={(value) =>
									setAttributes({
										advancedCountdownSunIcon: {
											...advancedCountdownSunIcon,
											value,
										},
									})
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
			<PanelBody title={__("Container", "frontis-blocks")} initialOpen={true}>
				{["style-1", "style-2", "style-4"].includes(
					advancedCountdownPresetStyle,
				) && (
					<FB_Range
						label={__("Size", "frontis-blocks")}
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
						units={{
							Desktop: advancedCountdownContainerSize.unit,
							Tablet: advancedCountdownContainerSize.unit,
							Mobile: advancedCountdownContainerSize.unit,
						}}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={100}
					/>
				)}

				{advancedCountdownPresetStyle === "style-1" && (
					<FB_Range
						label={__("Progress Bar Size", "frontis-blocks")}
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

				{advancedCountdownPresetStyle === "style-2" && (
					<FB_Range
						label={__("Progress Bar Size", "frontis-blocks")}
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

				{advancedCountdownPresetStyle === "style-3" && (
					<>
						<FB_Range
							label={__("Size", "frontis-blocks")}
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
							label={__("Container Size", "frontis-blocks")}
							min={0}
							max={700}
							rangeValue={advancedCountdownContainerSizeStyle3Inner}
							onChangeHandler={(value) =>
								setAttributes({
									advancedCountdownContainerSizeStyle3Inner: {
										...advancedCountdownContainerSizeStyle3Inner,
										[deviceType]: value,
									},
								})
							}
							rangeUnitHandler={(value) =>
								setAttributes({
									advancedCountdownContainerSizeStyle3Inner: {
										...advancedCountdownContainerSizeStyle3Inner,
										[deviceType]: value,
									},
								})
							}
							deviceType={deviceType}
							units={advancedCountdownContainerSizeStyle3Inner.unit}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={530}
						/>
					</>
				)}

				{advancedCountdownPresetStyle === "style-5" && (
					<FB_Range
						label={__("Size", "frontis-blocks")}
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
					label={__("Background", "frontis-blocks")}
					bgColorSwitcher={advancedCountdownGlobalBgColorSwitcher}
					setBgColorSwitcher={(value) =>
						setAttributes({ advancedCountdownGlobalBgColorSwitcher: value })
					}
					normalBackgroundType={advancedCountdownGlobalBackgroundType}
					setNormalBackgroundType={(value) =>
						setAttributes({ advancedCountdownGlobalBackgroundType: value })
					}
					normalClassicColor={advancedCountdownGlobalClassicColor}
					setNormalClassicColor={(value) =>
						setAttributes({
							advancedCountdownGlobalClassicColor:
								value === undefined ? "" : value,
						})
					}
					normalGradientColor={advancedCountdownGlobalGradientColor}
					setNormalGradientColor={(value) =>
						setAttributes({
							advancedCountdownGlobalGradientColor:
								value === undefined ? null : value,
						})
					}
					normalCustomGradientSwitcher={
						advancedCountdownGlobalCustomGradientSwitcher
					}
					setNormalCustomGradientSwitcher={(value) =>
						setAttributes({
							advancedCountdownGlobalCustomGradientSwitcher: value,
						})
					}
					normalCustomGradientInputValue={
						advancedCountdownGlobalCustomGradientInputValue
					}
					setNormalCustomGradientInputValue={(value) =>
						setAttributes({
							advancedCountdownGlobalCustomGradientInputValue: value,
						})
					}
					normalBackgroundImageUrl={advancedCountdownGlobalBackgroundImageUrl}
					setNormalBackgroundImageUrl={(value) =>
						setAttributes({
							advancedCountdownGlobalBackgroundImageUrl: value,
						})
					}
					normalBackgroundImageAlt={advancedCountdownGlobalBackgroundImageAlt}
					setNormalBackgroundImageAlt={(value) =>
						setAttributes({
							advancedCountdownGlobalBackgroundImageAlt: value,
						})
					}
					normalBackgroundImageID={advancedCountdownGlobalBackgroundImageID}
					setNormalBackgroundImageID={(value) =>
						setAttributes({
							advancedCountdownGlobalBackgroundImageID: value,
						})
					}
					normalBackgroundImagePosition={
						advancedCountdownGlobalBackgroundImagePosition
					}
					setNormalBackgroundImagePosition={(value) =>
						setAttributes({
							advancedCountdownGlobalBackgroundImagePosition: value,
						})
					}
					normalBackgroundImageAttachment={
						advancedCountdownGlobalBackgroundImageAttachment
					}
					setNormalBackgroundImageAttachment={(value) =>
						setAttributes({
							advancedCountdownGlobalBackgroundImageAttachment: value,
						})
					}
					normalBackgroundImageRepeat={
						advancedCountdownGlobalBackgroundImageRepeat
					}
					setNormalBackgroundImageRepeat={(value) =>
						setAttributes({
							advancedCountdownGlobalBackgroundImageRepeat: value,
						})
					}
					normalBackgroundImageSize={advancedCountdownGlobalBackgroundImageSize}
					setNormalBackgroundImageSize={(value) =>
						setAttributes({
							advancedCountdownGlobalBackgroundImageSize: value,
						})
					}
					hoverBackgroundType={advancedCountdownHoverBackgroundType}
					setHoverBackgroundType={(value) =>
						setAttributes({ advancedCountdownHoverBackgroundType: value })
					}
					hoverClassicColor={advancedCountdownHoverClassicColor}
					setHoverClassicColor={(value) =>
						setAttributes({
							advancedCountdownHoverClassicColor:
								value === undefined ? "" : value,
						})
					}
					hoverGradientColor={advancedCountdownHoverGradientColor}
					setHoverGradientColor={(value) =>
						setAttributes({
							advancedCountdownHoverGradientColor:
								value === undefined ? null : value,
						})
					}
					hoverCustomGradientSwitcher={
						advancedCountdownHoverCustomGradientSwitcher
					}
					setHoverCustomGradientSwitcher={(value) =>
						setAttributes({
							advancedCountdownHoverCustomGradientSwitcher: value,
						})
					}
					hoverCustomGradientInputValue={
						advancedCountdownHoverCustomGradientInputValue
					}
					setHoverCustomGradientInputValue={(value) =>
						setAttributes({
							advancedCountdownHoverCustomGradientInputValue: value,
						})
					}
					hoverBackgroundImageUrl={advancedCountdownHoverBackgroundImageUrl}
					setHoverBackgroundImageUrl={(value) =>
						setAttributes({ advancedCountdownHoverBackgroundImageUrl: value })
					}
					hoverBackgroundImageAlt={advancedCountdownHoverBackgroundImageAlt}
					setHoverBackgroundImageAlt={(value) =>
						setAttributes({ advancedCountdownHoverBackgroundImageAlt: value })
					}
					hoverBackgroundImageID={advancedCountdownHoverBackgroundImageID}
					setHoverBackgroundImageID={(value) =>
						setAttributes({ advancedCountdownHoverBackgroundImageID: value })
					}
					hoverBackgroundImagePosition={
						advancedCountdownHoverBackgroundImagePosition
					}
					setHoverBackgroundImagePosition={(value) =>
						setAttributes({
							advancedCountdownHoverBackgroundImagePosition: value,
						})
					}
					hoverBackgroundImageAttachment={
						advancedCountdownHoverBackgroundImageAttachment
					}
					setHoverBackgroundImageAttachment={(value) =>
						setAttributes({
							advancedCountdownHoverBackgroundImageAttachment: value,
						})
					}
					hoverBackgroundImageRepeat={advancedCountdownHoverBackgroundImageRepeat}
					setHoverBackgroundImageRepeat={(value) =>
						setAttributes({
							advancedCountdownHoverBackgroundImageRepeat: value,
						})
					}
					hoverBackgroundImageSize={advancedCountdownHoverBackgroundImageSize}
					setHoverBackgroundImageSize={(value) =>
						setAttributes({ advancedCountdownHoverBackgroundImageSize: value })
					}
				/>

				<FB_Range
					label={__("Transition Duration", "frontis-blocks")}
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
					label={__("Border Style", "frontis-blocks")}
					value={advancedCountdownItemWrapperBorder}
					options={BORDER_STYLES}
					onChange={(value) =>
						setAttributes({ advancedCountdownItemWrapperBorder: value })
					}
				/>

				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={advancedCountdownItemWrapperBorderColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({
							advancedCountdownItemWrapperBorderColorSwitcher: value,
						})
					}
				/>

				{advancedCountdownItemWrapperBorderColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
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
						label={__("Hover Color", "frontis-blocks")}
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
					label={__("Border Hover Transition", "frontis-blocks")}
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
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={itemWrapperBorderRadiusUnitsHandler}
					spacingUnits={advancedCountdownItemWrapperBorderRadiusUnits}
					spacingDesktop={advancedCountdownItemWrapperBorderRadiusDesktop}
					spacingTablet={advancedCountdownItemWrapperBorderRadiusTablet}
					spacingMobile={advancedCountdownItemWrapperBorderRadiusMobile}
					handleSpacingUnitHandler={handleItemWrapperBorderRadiusUnitHandler}
					spacingCombineBtn={advancedCountdownItemWrapperBorderRadiusLink}
					spacingCombineBtnHandler={itemWrapperBorderRadiusCombineBtnHandler}
					setAttributes={setAttributes}
				/>

				{advancedCountdownPresetStyle === "style-5" && (
					<FB_Range
						label={__("Gap", "frontis-blocks")}
						min={0}
						max={100}
						rangeValue={advancedCountdownStyle4DashGap}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownStyle4DashGap: {
									...advancedCountdownStyle4DashGap,
									[deviceType]: value,
								},
							})
						}
						rangeUnitHandler={(value) =>
							setAttributes({
								advancedCountdownStyle4DashGap: {
									...advancedCountdownStyle4DashGap,
									[deviceType]: value,
								},
							})
						}
						deviceType={deviceType}
						units={{
							Desktop: advancedCountdownStyle4DashGap.unit,
							Tablet: advancedCountdownStyle4DashGap.unit,
							Mobile: advancedCountdownStyle4DashGap.unit,
						}}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={62}
					/>
				)}

				{advancedCountdownPresetStyle === "style-4" && (
					<FB_Range
						label={__("Gap", "frontis-blocks")}
						min={5}
						max={100}
						rangeValue={advancedCountdownStyle4DashGap}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownStyle4DashGap: {
									...advancedCountdownStyle4DashGap,
									[deviceType]: value,
								},
							})
						}
						rangeUnitHandler={(value) =>
							setAttributes({
								advancedCountdownStyle4DashGap: {
									...advancedCountdownStyle4DashGap,
									[deviceType]: value,
								},
							})
						}
						deviceType={deviceType}
						units={{
							Desktop: advancedCountdownStyle4DashGap.unit,
							Tablet: advancedCountdownStyle4DashGap.unit,
							Mobile: advancedCountdownStyle4DashGap.unit,
						}}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={10}
					/>
				)}

				<BaseControl
					label={__("Alignment", "frontis-blocks")}
					id="fb-setting-text-alignment"
					className="fb-setting-text-alignment"
				>
					<ButtonGroup className="fb-setting-text-alignment-group-btn">
						{LAYOUT_ALIGNMENT.map((item) => (
							<Button
								key={item.value}
								onClick={() =>
									setAttributes({
										advancedCountdownLayoutAlignment: item.value,
									})
								}
								className={`fb-setting-text-alignment-single-btn ${
									advancedCountdownLayoutAlignment === item.value ? "active" : ""
								}`}
							>
								{item.label}
							</Button>
						))}
					</ButtonGroup>
				</BaseControl>

				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={itemWrapperMarginUnitsHandler}
					spacingUnits={advancedCountdownItemWrapperMarginUnits}
					spacingDesktop={advancedCountdownItemWrapperMarginDesktop}
					spacingTablet={advancedCountdownItemWrapperMarginTablet}
					spacingMobile={advancedCountdownItemWrapperMarginMobile}
					handleSpacingUnitHandler={handleItemWrapperMarginUnitHandler}
					spacingCombineBtn={advancedCountdownItemWrapperMarginLink}
					spacingCombineBtnHandler={itemWrapperMarginCombineBtnHandler}
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={itemWrapperPaddingUnitsHandler}
					spacingUnits={advancedCountdownItemWrapperPaddingUnits}
					spacingDesktop={advancedCountdownItemWrapperPaddingDesktop}
					spacingTablet={advancedCountdownItemWrapperPaddingTablet}
					spacingMobile={advancedCountdownItemWrapperPaddingMobile}
					handleSpacingUnitHandler={handleItemWrapperPaddingUnitHandler}
					spacingCombineBtn={advancedCountdownItemWrapperPaddingLink}
					spacingCombineBtnHandler={itemWrapperPaddingCombineBtnHandler}
					setAttributes={setAttributes}
				/>
			</PanelBody>

			{advancedCountdownPresetStyle === "style-2" && (
				<PanelBody
					title={__("Dashed Progress Bar", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_ColorControl
						label={__("Bar Color", "frontis-blocks")}
						globalColor={advancedCountdownStyle2ProgressBarColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle2ProgressBarColor:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_Range
						label={__("Dash Spacing", "frontis-blocks")}
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

			{advancedCountdownPresetStyle === "style-5" && (
				<PanelBody
					title={__("Dots Configuration", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_Range
						label={__("Days Dots", "frontis-blocks")}
						min={12}
						max={30}
						rangeValue={advancedCountdownStyle4DaysTotalDots}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownStyle4DaysTotalDots: {
									...advancedCountdownStyle4DaysTotalDots,
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
						label={__("Hours Dots", "frontis-blocks")}
						min={12}
						max={30}
						rangeValue={advancedCountdownStyle4HoursTotalDots}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownStyle4HoursTotalDots: {
									...advancedCountdownStyle4HoursTotalDots,
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
						label={__("Minutes Dots", "frontis-blocks")}
						min={12}
						max={30}
						rangeValue={advancedCountdownStyle4MinutesTotalDots}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownStyle4MinutesTotalDots: {
									...advancedCountdownStyle4MinutesTotalDots,
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

			{advancedCountdownPresetStyle === "style-3" && (
				<PanelBody
					title={__("Progress & Indicator", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_ColorControl
						label={__("Background", "frontis-blocks")}
						globalColor={advancedCountdownStyle3ContainerBg}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle3ContainerBg:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_ColorControl
						label={__("Time Box Background", "frontis-blocks")}
						globalColor={advancedCountdownStyle3TimeboxBg}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle3TimeboxBg:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_ColorControl
						label={__("Indicator Color", "frontis-blocks")}
						globalColor={advancedCountdownStyle3IndicatorColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle3IndicatorColor:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_ColorControl
						label={__("Text Color", "frontis-blocks")}
						globalColor={advancedCountdownStyle3IndicatorTextColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle3IndicatorTextColor:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_Range
						label={__("Time Gap", "frontis-blocks")}
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
						units={{
							Desktop: advancedCountdownStyle3TimeGap.unit,
							Tablet: advancedCountdownStyle3TimeGap.unit,
							Mobile: advancedCountdownStyle3TimeGap.unit,
						}}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={10}
					/>
					<FB_ColorControl
						label={__("Highlighted Dash Color", "frontis-blocks")}
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
							setAttributes({ advancedCountdownStyle3TextGlobalTypoType: value })
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
							setAttributes({ advancedCountdownStyle3TextTextDecoration: value })
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
							setAttributes({ advancedCountdownStyle3TextLineHeightUnits: value })
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
					/>
				</PanelBody>
			)}

			{advancedCountdownPresetStyle === "style-5" && (
				<PanelBody title={__("Dots", "frontis-blocks")} initialOpen={false}>
					<FB_ColorControl
						label={__("Active Dot Color", "frontis-blocks")}
						globalColor={advancedCountdownStyle4ActiveDotColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle4ActiveDotColor:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_ColorControl
						label={__("Inactive Dot Color", "frontis-blocks")}
						globalColor={advancedCountdownStyle4InactiveDotColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle4InactiveDotColor:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_Range
						label={__("Dots Size", "frontis-blocks")}
						min={1}
						max={20}
						rangeValue={advancedCountdownStyle4DotsThickness}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownStyle4DotsThickness: {
									...advancedCountdownStyle4DotsThickness,
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
						label={__("Dots Gap", "frontis-blocks")}
						min={1}
						max={3}
						rangeValue={advancedCountdownStyle4DotsGap}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownStyle4DotsGap: {
									...advancedCountdownStyle4DotsGap,
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
						label={__("Dots Glow Effect", "frontis-blocks")}
						checked={advancedCountdownStyle4DotsGlowEffect === "yes"}
						onChange={(value) =>
							setAttributes({
								advancedCountdownStyle4DotsGlowEffect: value ? "yes" : "no",
							})
						}
					/>
					{advancedCountdownStyle4DotsGlowEffect === "yes" && (
						<>
							<FB_Range
								label={__("Glow Intensity", "frontis-blocks")}
								min={5}
								max={40}
								rangeValue={advancedCountdownStyle4GlowIntensity}
								onChangeHandler={(value) =>
									setAttributes({
										advancedCountdownStyle4GlowIntensity: {
											...advancedCountdownStyle4GlowIntensity,
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
								label={__("Glow Color", "frontis-blocks")}
								globalColor={advancedCountdownStyle4GlowColor}
								setGlobalColor={(value) =>
									setAttributes({
										advancedCountdownStyle4GlowColor:
											value === undefined ? "" : value,
									})
								}
							/>
						</>
					)}
				</PanelBody>
			)}

			{advancedCountdownPresetStyle === "style-4" && (
				<PanelBody
					title={__("Dash Pattern", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_ColorControl
						label={__("Dash Color", "frontis-blocks")}
						globalColor={advancedCountdownStyle4DashColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle4DashColor:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_Range
						label={__("Dash Size", "frontis-blocks")}
						min={1}
						max={20}
						rangeValue={advancedCountdownStyle4DashSize}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownStyle4DashSize: {
									...advancedCountdownStyle4DashSize,
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

			{advancedCountdownPresetStyle === "style-4" && (
				<PanelBody
					title={__("Label Alignment", "frontis-blocks")}
					initialOpen={false}
				>
					<BaseControl
						label={__("Alignment", "frontis-blocks")}
						id="fb-setting-text-alignment"
						className="fb-setting-text-alignment"
					>
						<ButtonGroup className="fb-setting-text-alignment-group-btn">
							{[
								{ label: "Left Top", value: "left_top" },
								{ label: "Right Top", value: "right_top" },
								{ label: "Left Bottom", value: "left_bottom" },
								{ label: "Right Bottom", value: "right_bottom" },
							].map((item) => (
								<Button
									key={item.value}
									onClick={() =>
										setAttributes({
											advancedCountdownStyle4LabelAlignment: item.value,
										})
									}
									className={`fb-setting-text-alignment-single-btn ${
										advancedCountdownStyle4LabelAlignment === item.value
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
						globalTypoSwitcher={advancedCountdownStyle4LabelTypoGlobalTypoSwitcher}
						storeGlobalTypographyData={(value) =>
							setAttributes({
								advancedCountdownStyle4LabelTypoGlobalTypographyData: value,
							})
						}
						globalTypoType={advancedCountdownStyle4LabelTypoGlobalTypoType}
						onChangeGlobalTypoType={(value) =>
							setAttributes({
								advancedCountdownStyle4LabelTypoGlobalTypoType: value,
							})
						}
						globalTypoOption={advancedCountdownStyle4LabelTypoGlobalTypoOption}
						onChangeGlobalTypoOption={(value) =>
							setAttributes({
								advancedCountdownStyle4LabelTypoGlobalTypoOption: value,
							})
						}
						fontFamily={advancedCountdownStyle4LabelTypoFontFamily}
						onChangeFontFamily={(value) =>
							setAttributes({ advancedCountdownStyle4LabelTypoFontFamily: value })
						}
						fontSize={advancedCountdownStyle4LabelTypoFontSize}
						onChangeFontSize={(value) =>
							setAttributes({ advancedCountdownStyle4LabelTypoFontSize: value })
						}
						fontSizeUnits={advancedCountdownStyle4LabelTypoFontSizeUnits}
						onChangeFontSizeUnit={(value) =>
							setAttributes({
								advancedCountdownStyle4LabelTypoFontSizeUnits: value,
							})
						}
						fontWeight={advancedCountdownStyle4LabelTypoFontWeight}
						onChangeFontWeight={(value) =>
							setAttributes({ advancedCountdownStyle4LabelTypoFontWeight: value })
						}
						fontStyle={advancedCountdownStyle4LabelTypoFontStyle}
						onChangeFontStyle={(value) =>
							setAttributes({ advancedCountdownStyle4LabelTypoFontStyle: value })
						}
						textTransform={advancedCountdownStyle4LabelTypoTextTransform}
						onChangeTextTransform={(value) =>
							setAttributes({
								advancedCountdownStyle4LabelTypoTextTransform: value,
							})
						}
						textDecoration={advancedCountdownStyle4LabelTypoTextDecoration}
						onChangeTextDecoration={(value) =>
							setAttributes({
								advancedCountdownStyle4LabelTypoTextDecoration: value,
							})
						}
						letterSpacing={advancedCountdownStyle4LabelTypoLetterSpacing}
						onChangeLetterSpacing={(value) =>
							setAttributes({
								advancedCountdownStyle4LabelTypoLetterSpacing: value,
							})
						}
						letterSpacingUnits={
							advancedCountdownStyle4LabelTypoLetterSpacingUnits
						}
						onChangeLetterSpacingUnit={(value) =>
							setAttributes({
								advancedCountdownStyle4LabelTypoLetterSpacingUnits: value,
							})
						}
						lineHeight={advancedCountdownStyle4LabelTypoLineHeight}
						onChangeLineHeight={(value) =>
							setAttributes({ advancedCountdownStyle4LabelTypoLineHeight: value })
						}
						lineHeightUnits={advancedCountdownStyle4LabelTypoLineHeightUnits}
						onChangeLineHeightUnit={(value) =>
							setAttributes({
								advancedCountdownStyle4LabelTypoLineHeightUnits: value,
							})
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
					/>
					<FB_ColorControl
						label={__("Label Color", "frontis-blocks")}
						globalColor={advancedCountdownStyle4LabelDigitColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle4LabelDigitColor:
									value === undefined ? "" : value,
							})
						}
					/>
				</PanelBody>
			)}

			{advancedCountdownPresetStyle === "style-1" &&
				advancedCountdownShowSunIcon === "yes" && (
					<PanelBody title={__("Icon", "frontis-blocks")} initialOpen={false}>
						<FB_Range
							label={__("Icon Size", "frontis-blocks")}
							min={5}
							max={200}
							rangeValue={advancedCountdownIconSize}
							onChangeHandler={handleIconSizeUnitHandler}
							rangeUnitHandler={iconSizeUnitsHandler}
							deviceType={deviceType}
							units={{
								Desktop: advancedCountdownIconSize.unit,
								Tablet: advancedCountdownIconSize.unit,
								Mobile: advancedCountdownIconSize.unit,
							}}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={60}
						/>
						<FB_SwitcherControl
							label={__("Color", "frontis-blocks")}
							globalSwitcher={advancedCountdownItemWrapperBorderColorSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({
									advancedCountdownItemWrapperBorderColorSwitcher: value,
								})
							}
						/>
						{advancedCountdownItemWrapperBorderColorSwitcher === "normal" && (
							<>
								<FB_ColorControl
									label={__("Icon Color", "frontis-blocks")}
									globalColor={advancedCountdownIconColorNormal}
									setGlobalColor={(value) =>
										setAttributes({
											advancedCountdownIconColorNormal:
												value === undefined ? "" : value,
										})
									}
								/>
								<FB_ColorControl
									label={__("Background Color", "frontis-blocks")}
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
									label={__("Icon Color", "frontis-blocks")}
									globalColor={advancedCountdownIconColorHover}
									setGlobalColor={(value) =>
										setAttributes({
											advancedCountdownIconColorHover:
												value === undefined ? "" : value,
										})
									}
								/>
								<FB_ColorControl
									label={__("Background Color", "frontis-blocks")}
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
				title={__("Countdown Text", "frontis-blocks")}
				initialOpen={false}
			>
				{advancedCountdownPresetStyle === "style-5" && (
					<>
						<TextControl
							label={__("Days Label", "frontis-blocks")}
							value={advancedCountdownLabelDays}
							onChange={(value) =>
								setAttributes({ advancedCountdownLabelDays: value })
							}
						/>
						<TextControl
							label={__("Hours Label", "frontis-blocks")}
							value={advancedCountdownLabelHours}
							onChange={(value) =>
								setAttributes({ advancedCountdownLabelHours: value })
							}
						/>
						<TextControl
							label={__("Minutes Label", "frontis-blocks")}
							value={advancedCountdownLabelMinutes}
							onChange={(value) =>
								setAttributes({ advancedCountdownLabelMinutes: value })
							}
						/>
					</>
				)}

				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={advancedCountdownStyle5CountdownTypoGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) =>
						setAttributes({
							advancedCountdownStyle5CountdownTypoGlobalTypographyData: value,
						})
					}
					globalTypoType={advancedCountdownStyle5CountdownTypoGlobalTypoType}
					onChangeGlobalTypoType={(value) =>
						setAttributes({
							advancedCountdownStyle5CountdownTypoGlobalTypoType: value,
						})
					}
					globalTypoOption={advancedCountdownStyle5CountdownTypoGlobalTypoOption}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({
							advancedCountdownStyle5CountdownTypoGlobalTypoOption: value,
						})
					}
					fontFamily={advancedCountdownStyle5CountdownTypoFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({ advancedCountdownStyle5CountdownTypoFontFamily: value })
					}
					fontSize={advancedCountdownStyle5CountdownTypoFontSize}
					onChangeFontSize={(value) =>
						setAttributes({ advancedCountdownStyle5CountdownTypoFontSize: value })
					}
					fontSizeUnits={advancedCountdownStyle5CountdownTypoFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({
							advancedCountdownStyle5CountdownTypoFontSizeUnits: value,
						})
					}
					fontWeight={advancedCountdownStyle5CountdownTypoFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({ advancedCountdownStyle5CountdownTypoFontWeight: value })
					}
					fontStyle={advancedCountdownStyle5CountdownTypoFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({ advancedCountdownStyle5CountdownTypoFontStyle: value })
					}
					textTransform={advancedCountdownStyle5CountdownTypoTextTransform}
					onChangeTextTransform={(value) =>
						setAttributes({
							advancedCountdownStyle5CountdownTypoTextTransform: value,
						})
					}
					textDecoration={advancedCountdownStyle5CountdownTypoTextDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({
							advancedCountdownStyle5CountdownTypoTextDecoration: value,
						})
					}
					letterSpacing={advancedCountdownStyle5CountdownTypoLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({
							advancedCountdownStyle5CountdownTypoLetterSpacing: value,
						})
					}
					letterSpacingUnits={
						advancedCountdownStyle5CountdownTypoLetterSpacingUnits
					}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({
							advancedCountdownStyle5CountdownTypoLetterSpacingUnits: value,
						})
					}
					lineHeight={advancedCountdownStyle5CountdownTypoLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({ advancedCountdownStyle5CountdownTypoLineHeight: value })
					}
					lineHeightUnits={advancedCountdownStyle5CountdownTypoLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({
							advancedCountdownStyle5CountdownTypoLineHeightUnits: value,
						})
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				{["style-1", "style-5"].includes(advancedCountdownPresetStyle) && (
					<FB_ColorControl
						label={__("Label Color", "frontis-blocks")}
						globalColor={advancedCountdownStyle5LabelColorMultiple}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle5LabelColorMultiple:
									value === undefined ? "" : value,
							})
						}
					/>
				)}

				{advancedCountdownPresetStyle === "style-5" && (
					<>
						<FB_TypographyControl
							label={__("Typography", "frontis-blocks")}
							globalTypoControlActive={true}
							globalTypoSwitcher={
								advancedCountdownStyle5TimeValTypoGlobalTypoSwitcher
							}
							storeGlobalTypographyData={(value) =>
								setAttributes({
									advancedCountdownStyle5TimeValTypoGlobalTypographyData: value,
								})
							}
							globalTypoType={advancedCountdownStyle5TimeValTypoGlobalTypoType}
							onChangeGlobalTypoType={(value) =>
								setAttributes({
									advancedCountdownStyle5TimeValTypoGlobalTypoType: value,
								})
							}
							globalTypoOption={
								advancedCountdownStyle5TimeValTypoGlobalTypoOption
							}
							onChangeGlobalTypoOption={(value) =>
								setAttributes({
									advancedCountdownStyle5TimeValTypoGlobalTypoOption: value,
								})
							}
							fontFamily={advancedCountdownStyle5TimeValTypoFontFamily}
							onChangeFontFamily={(value) =>
								setAttributes({
									advancedCountdownStyle5TimeValTypoFontFamily: value,
								})
							}
							fontSize={advancedCountdownStyle5TimeValTypoFontSize}
							onChangeFontSize={(value) =>
								setAttributes({
									advancedCountdownStyle5TimeValTypoFontSize: value,
								})
							}
							fontSizeUnits={advancedCountdownStyle5TimeValTypoFontSizeUnits}
							onChangeFontSizeUnit={(value) =>
								setAttributes({
									advancedCountdownStyle5TimeValTypoFontSizeUnits: value,
								})
							}
							fontWeight={advancedCountdownStyle5TimeValTypoFontWeight}
							onChangeFontWeight={(value) =>
								setAttributes({
									advancedCountdownStyle5TimeValTypoFontWeight: value,
								})
							}
							fontStyle={advancedCountdownStyle5TimeValTypoFontStyle}
							onChangeFontStyle={(value) =>
								setAttributes({
									advancedCountdownStyle5TimeValTypoFontStyle: value,
								})
							}
							textTransform={advancedCountdownStyle5TimeValTypoTextTransform}
							onChangeTextTransform={(value) =>
								setAttributes({
									advancedCountdownStyle5TimeValTypoTextTransform: value,
								})
							}
							textDecoration={advancedCountdownStyle5TimeValTypoTextDecoration}
							onChangeTextDecoration={(value) =>
								setAttributes({
									advancedCountdownStyle5TimeValTypoTextDecoration: value,
								})
							}
							letterSpacing={advancedCountdownStyle5TimeValTypoLetterSpacing}
							onChangeLetterSpacing={(value) =>
								setAttributes({
									advancedCountdownStyle5TimeValTypoLetterSpacing: value,
								})
							}
							letterSpacingUnits={
								advancedCountdownStyle5TimeValTypoLetterSpacingUnits
							}
							onChangeLetterSpacingUnit={(value) =>
								setAttributes({
									advancedCountdownStyle5TimeValTypoLetterSpacingUnits: value,
								})
							}
							lineHeight={advancedCountdownStyle5TimeValTypoLineHeight}
							onChangeLineHeight={(value) =>
								setAttributes({
									advancedCountdownStyle5TimeValTypoLineHeight: value,
								})
							}
							lineHeightUnits={advancedCountdownStyle5TimeValTypoLineHeightUnits}
							onChangeLineHeightUnit={(value) =>
								setAttributes({
									advancedCountdownStyle5TimeValTypoLineHeightUnits: value,
								})
							}
							deviceType={deviceType}
							setAttributes={setAttributes}
						/>
						<FB_ColorControl
							label={__("Color", "frontis-blocks")}
							globalColor={advancedCountdownStyle5TimeValLabelColor}
							setGlobalColor={(value) =>
								setAttributes({
									advancedCountdownStyle5TimeValLabelColor:
										value === undefined ? "" : value,
								})
							}
						/>
					</>
				)}

				{advancedCountdownPresetStyle === "style-4" && (
					<FB_ColorControl
						label={__("Label Color", "frontis-blocks")}
						globalColor={advancedCountdownStyle4LabelDigitColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle4LabelDigitColor:
									value === undefined ? "" : value,
							})
						}
					/>
				)}

				{advancedCountdownPresetStyle === "style-2" && (
					<FB_ColorControl
						label={__("Text Color", "frontis-blocks")}
						globalColor={advancedCountdownStyle2TextColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle2TextColor:
									value === undefined ? "" : value,
							})
						}
					/>
				)}

				{advancedCountdownPresetStyle === "style-3" && (
					<FB_ColorControl
						label={__("Text Color", "frontis-blocks")}
						globalColor={advancedCountdownStyle3TextColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle3TextColor:
									value === undefined ? "" : value,
							})
						}
					/>
				)}
			</PanelBody>

			{["style-1", "style-2"].includes(advancedCountdownPresetStyle) && (
				<PanelBody
					title={__("Separator", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_TypographyControl
						globalTypoControlActive={true}
						globalTypoSwitcher={advancedCountdownSeparatorTypoGlobalTypoSwitcher}
						storeGlobalTypographyData={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypoGlobalTypographyData: value,
							})
						}
						globalTypoType={advancedCountdownSeparatorTypoGlobalTypoType}
						onChangeGlobalTypoType={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypoGlobalTypoType: value,
							})
						}
						globalTypoOption={advancedCountdownSeparatorTypoGlobalTypoOption}
						onChangeGlobalTypoOption={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypoGlobalTypoOption: value,
							})
						}
						fontFamily={advancedCountdownSeparatorTypoFontFamily}
						onChangeFontFamily={(value) =>
							setAttributes({ advancedCountdownSeparatorTypoFontFamily: value })
						}
						fontSize={advancedCountdownSeparatorTypoFontSize}
						onChangeFontSize={(value) =>
							setAttributes({ advancedCountdownSeparatorTypoFontSize: value })
						}
						fontSizeUnits={advancedCountdownSeparatorTypoFontSizeUnits}
						onChangeFontSizeUnit={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypoFontSizeUnits: value,
							})
						}
						fontWeight={advancedCountdownSeparatorTypoFontWeight}
						onChangeFontWeight={(value) =>
							setAttributes({ advancedCountdownSeparatorTypoFontWeight: value })
						}
						fontStyle={advancedCountdownSeparatorTypoFontStyle}
						onChangeFontStyle={(value) =>
							setAttributes({ advancedCountdownSeparatorTypoFontStyle: value })
						}
						textTransform={advancedCountdownSeparatorTypoTextTransform}
						onChangeTextTransform={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypoTextTransform: value,
							})
						}
						textDecoration={advancedCountdownSeparatorTypoTextDecoration}
						onChangeTextDecoration={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypoTextDecoration: value,
							})
						}
						letterSpacing={advancedCountdownSeparatorTypoLetterSpacing}
						onChangeLetterSpacing={(value) =>
							setAttributes({ advancedCountdownSeparatorTypoLetterSpacing: value })
						}
						letterSpacingUnits={advancedCountdownSeparatorTypoLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypoLetterSpacingUnits: value,
							})
						}
						lineHeight={advancedCountdownSeparatorTypoLineHeight}
						onChangeLineHeight={(value) =>
							setAttributes({ advancedCountdownSeparatorTypoLineHeight: value })
						}
						lineHeightUnits={advancedCountdownSeparatorTypoLineHeightUnits}
						onChangeLineHeightUnit={(value) =>
							setAttributes({
								advancedCountdownSeparatorTypoLineHeightUnits: value,
							})
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
					/>
					<FB_SwitcherControl
						label={__("Color", "frontis-blocks")}
						globalSwitcher={advancedCountdownItemWrapperBorderColorSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({
								advancedCountdownItemWrapperBorderColorSwitcher: value,
							})
						}
					/>
					{advancedCountdownItemWrapperBorderColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Color", "frontis-blocks")}
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
							label={__("Hover Color", "frontis-blocks")}
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
						label={__("Gap", "frontis-blocks")}
						min={0}
						max={100}
						rangeValue={advancedCountdownSeparatorSpacing}
						onChangeHandler={handleSeparatorSpacingUnitHandler}
						rangeUnitHandler={separatorSpacingUnitsHandler}
						deviceType={deviceType}
						units={{
							Desktop: advancedCountdownSeparatorSpacing.unit,
							Tablet: advancedCountdownSeparatorSpacing.unit,
							Mobile: advancedCountdownSeparatorSpacing.unit,
						}}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={8}
					/>
				</PanelBody>
			)}

			{["style-1", "style-2"].includes(advancedCountdownPresetStyle) && (
				<PanelBody
					title={__("Overlay Bg", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_ColorControl
						label={__("Background Color", "frontis-blocks")}
						globalColor={advancedCountdownStyle1SvgBgOverlayColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle1SvgBgOverlayColor:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_Range
						label={__("Opacity", "frontis-blocks")}
						min={0}
						max={1}
						rangeValue={advancedCountdownStyle1SvgBgOverlayOpacity}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownStyle1SvgBgOverlayOpacity: {
									...advancedCountdownStyle1SvgBgOverlayOpacity,
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

			{advancedCountdownPresetStyle === "style-1" && (
				<PanelBody
					title={__("SVG Progress Bar", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_ColorControl
						label={__("Active Color", "frontis-blocks")}
						globalColor={advancedCountdownStyle1ProgressCircleActiveColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle1ProgressCircleActiveColor:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_ColorControl
						label={__("In Active Color", "frontis-blocks")}
						globalColor={advancedCountdownStyle1ProgressCircleInactiveColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle1ProgressCircleInactiveColor:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_Range
						label={__("Stroke Width", "frontis-blocks")}
						min={0}
						max={100}
						rangeValue={advancedCountdownStyle1SvgStrokeWidth}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownStyle1SvgStrokeWidth: {
									...advancedCountdownStyle1SvgStrokeWidth,
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

			{advancedCountdownPresetStyle === "style-2" && (
				<PanelBody
					title={__("SVG Progress Bar", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_ColorControl
						label={__("Progress Color", "frontis-blocks")}
						globalColor={advancedCountdownStyle2ProgressColor}
						setGlobalColor={(value) =>
							setAttributes({
								advancedCountdownStyle2ProgressColor:
									value === undefined ? "" : value,
							})
						}
					/>
					<FB_Range
						label={__("Stroke Width", "frontis-blocks")}
						min={5}
						max={20}
						rangeValue={advancedCountdownStyle2SvgStrokeWidth}
						onChangeHandler={(value) =>
							setAttributes({
								advancedCountdownStyle2SvgStrokeWidth: {
									...advancedCountdownStyle2SvgStrokeWidth,
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

			{["style-1", "style-2"].includes(advancedCountdownPresetStyle) && (
				<PanelBody
					title={__("Footer Text", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_TypographyControl
						globalTypoControlActive={true}
						globalTypoSwitcher={advancedCountdownFooterTypoGlobalTypoSwitcher}
						storeGlobalTypographyData={(value) =>
							setAttributes({
								advancedCountdownFooterTypoGlobalTypographyData: value,
							})
						}
						globalTypoType={advancedCountdownFooterTypoGlobalTypoType}
						onChangeGlobalTypoType={(value) =>
							setAttributes({ advancedCountdownFooterTypoGlobalTypoType: value })
						}
						globalTypoOption={advancedCountdownFooterTypoGlobalTypoOption}
						onChangeGlobalTypoOption={(value) =>
							setAttributes({
								advancedCountdownFooterTypoGlobalTypoOption: value,
							})
						}
						fontFamily={advancedCountdownFooterTypoFontFamily}
						onChangeFontFamily={(value) =>
							setAttributes({ advancedCountdownFooterTypoFontFamily: value })
						}
						fontSize={advancedCountdownFooterTypoFontSize}
						onChangeFontSize={(value) =>
							setAttributes({ advancedCountdownFooterTypoFontSize: value })
						}
						fontSizeUnits={advancedCountdownFooterTypoFontSizeUnits}
						onChangeFontSizeUnit={(value) =>
							setAttributes({ advancedCountdownFooterTypoFontSizeUnits: value })
						}
						fontWeight={advancedCountdownFooterTypoFontWeight}
						onChangeFontWeight={(value) =>
							setAttributes({ advancedCountdownFooterTypoFontWeight: value })
						}
						fontStyle={advancedCountdownFooterTypoFontStyle}
						onChangeFontStyle={(value) =>
							setAttributes({ advancedCountdownFooterTypoFontStyle: value })
						}
						textTransform={advancedCountdownFooterTypoTextTransform}
						onChangeTextTransform={(value) =>
							setAttributes({ advancedCountdownFooterTypoTextTransform: value })
						}
						textDecoration={advancedCountdownFooterTypoTextDecoration}
						onChangeTextDecoration={(value) =>
							setAttributes({ advancedCountdownFooterTypoTextDecoration: value })
						}
						letterSpacing={advancedCountdownFooterTypoLetterSpacing}
						onChangeLetterSpacing={(value) =>
							setAttributes({ advancedCountdownFooterTypoLetterSpacing: value })
						}
						letterSpacingUnits={advancedCountdownFooterTypoLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) =>
							setAttributes({
								advancedCountdownFooterTypoLetterSpacingUnits: value,
							})
						}
						lineHeight={advancedCountdownFooterTypoLineHeight}
						onChangeLineHeight={(value) =>
							setAttributes({ advancedCountdownFooterTypoLineHeight: value })
						}
						lineHeightUnits={advancedCountdownFooterTypoLineHeightUnits}
						onChangeLineHeightUnit={(value) =>
							setAttributes({ advancedCountdownFooterTypoLineHeightUnits: value })
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
					/>
					<FB_SwitcherControl
						label={__("Color", "frontis-blocks")}
						globalSwitcher={advancedCountdownItemWrapperBorderColorSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({
								advancedCountdownItemWrapperBorderColorSwitcher: value,
							})
						}
					/>
					{advancedCountdownItemWrapperBorderColorSwitcher === "normal" && (
						<>
							<FB_ColorControl
								label={__("Text Color", "frontis-blocks")}
								globalColor={advancedCountdownFooterTextColor}
								setGlobalColor={(value) =>
									setAttributes({
										advancedCountdownFooterTextColor:
											value === undefined ? "" : value,
									})
								}
							/>
							<FB_ColorControl
								label={__("Background Color", "frontis-blocks")}
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
								label={__("Text Color", "frontis-blocks")}
								globalColor={advancedCountdownFooterTextColorHover}
								setGlobalColor={(value) =>
									setAttributes({
										advancedCountdownFooterTextColorHover:
											value === undefined ? "" : value,
									})
								}
							/>
							<FB_ColorControl
								label={__("Background Color", "frontis-blocks")}
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
					{advancedCountdownPresetStyle === "style-2" && (
						<FB_ColorControl
							label={__("Background Gradient", "frontis-blocks")}
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
						label={__("Padding", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={footerPaddingUnitsHandler}
						spacingUnits={advancedCountdownFooterPadding.unit}
						spacingDesktop={advancedCountdownFooterPadding}
						handleSpacingUnitHandler={handleFooterPaddingUnitHandler}
						spacingCombineBtn={advancedCountdownFooterPaddingLink}
						spacingCombineBtnHandler={footerPaddingCombineBtnHandler}
						setAttributes={setAttributes}
					/>
					<FB_Spacing
						label={__("Margin", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={footerMarginUnitsHandler}
						spacingUnits={advancedCountdownFooterMargin.unit}
						spacingDesktop={advancedCountdownFooterMargin}
						handleSpacingUnitHandler={handleFooterMarginUnitHandler}
						spacingCombineBtn={advancedCountdownFooterMarginLink}
						spacingCombineBtnHandler={footerMarginCombineBtnHandler}
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
					rangeValue={advancedCountdownZIndex}
					onChangeHandler={(value) =>
						setAttributes({
							advancedCountdownZIndex: value === 0 ? undefined : value,
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
					value={advancedCountdownOverflow}
					options={["default", "auto", "hidden", "scroll", "clip"].map(
						(val) => ({ label: val, value: val }),
					)}
					onChange={(value) =>
						setAttributes({ advancedCountdownOverflow: value })
					}
				/>

				<FB_PositionControl
					deviceType={deviceType}
					positionType={advancedCountdownPositionType}
					setPositionType={(value) =>
						setAttributes({ advancedCountdownPositionType: value })
					}
					HZOrientationType={advancedCountdownHZOrientationType}
					setHZOrientationType={(value) =>
						setAttributes({ advancedCountdownHZOrientationType: value })
					}
					VROrientationType={advancedCountdownVROrientationType}
					setVROrientationType={(value) =>
						setAttributes({ advancedCountdownVROrientationType: value })
					}
					HZLeftOffset={advancedCountdownHZLeftOffset}
					setHZLeftOffset={(value) =>
						setAttributes({ advancedCountdownHZLeftOffset: value })
					}
					HZLeftOffsetUnits={advancedCountdownHZLeftOffsetUnits}
					setHZLeftOffsetUnits={(value) =>
						setAttributes({ advancedCountdownHZLeftOffsetUnits: value })
					}
					HZRightOffset={advancedCountdownHZRightOffset}
					setHZRightOffset={(value) =>
						setAttributes({ advancedCountdownHZRightOffset: value })
					}
					HZRightOffsetUnits={advancedCountdownHZRightOffsetUnits}
					setHZRightOffsetUnits={(value) =>
						setAttributes({ advancedCountdownHZRightOffsetUnits: value })
					}
					VRTopOffset={advancedCountdownVRTopOffset}
					setVRTopOffset={(value) =>
						setAttributes({ advancedCountdownVRTopOffset: value })
					}
					VRTopOffsetUnits={advancedCountdownVRTopOffsetUnits}
					setVRTopOffsetUnits={(value) =>
						setAttributes({ advancedCountdownVRTopOffsetUnits: value })
					}
					VRBottomOffset={advancedCountdownVRBottomOffset}
					setVRBottomOffset={(value) =>
						setAttributes({ advancedCountdownVRBottomOffset: value })
					}
					VRBottomOffsetUnits={advancedCountdownVRBottomOffsetUnits}
					setVRBottomOffsetUnits={(value) =>
						setAttributes({ advancedCountdownVRBottomOffsetUnits: value })
					}
					setAttributes={setAttributes}
				/>

				<FB_InputControl
					label={__("CSS ID", "frontis-blocks")}
					value={advancedCountdownCustomID}
					onChangeValue={(value) =>
						setAttributes({ advancedCountdownCustomID: value })
					}
					helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
				/>

				<FB_InputControl
					label={__("CSS Class", "frontis-blocks")}
					value={advancedCountdownCustomClass}
					onChangeValue={(value) =>
						setAttributes({ advancedCountdownCustomClass: value })
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
					desktopValue={advancedCountdownDesktopSwitcher}
					setDesktopValue={(value) =>
						setAttributes({ advancedCountdownDesktopSwitcher: value })
					}
					tabletValue={advancedCountdownTabletSwitcher}
					setTabletValue={(value) =>
						setAttributes({ advancedCountdownTabletSwitcher: value })
					}
					mobileValue={advancedCountdownMobileSwitcher}
					setMobileValue={(value) =>
						setAttributes({ advancedCountdownMobileSwitcher: value })
					}
				/>
			</PanelBody>

			<PanelBody title={__("Custom CSS", "frontis-blocks")} initialOpen={false}>
				<FB_CustomCSSEditor
					value={advancedCountdownCustomCSS}
					onChangeValue={(value) =>
						setAttributes({ advancedCountdownCustomCSS: value })
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