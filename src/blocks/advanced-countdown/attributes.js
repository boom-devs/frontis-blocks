const attributes = {
	blockID: {
		type: "string",
		default: "",
	},

	//  Preset & Basic Settings
	advancedCountdownPresetStyle: {
		type: "string",
		default: "style-1",
	},
	advancedCountdownStartDate: {
		type: "string",
		default: "",
	},
	advancedCountdownUntilText: {
		type: "string",
		default: "Until Morning Digest",
	},
	advancedCountdownShowSunIcon: {
		type: "string",
		default: "yes",
	},
	advancedCountdownSunIcon: {
		type: "object",
		default: { value: "far fa-sun", library: "fa-regular" },
	},
	advancedCountdownTargetDate: {
		type: "string",
	},
	advancedCountdownDeviceType: {
		type: "string",
		default: "Desktop",
	},

	// Show/Hide Unit Labels 
	advancedCountdownShowDays: {
		type: "boolean",
		default: true,
	},
	advancedCountdownShowHours: {
		type: "boolean",
		default: true,
	},
	advancedCountdownShowMinutes: {
		type: "boolean",
		default: true,
	},
	advancedCountdownShowSeconds: {
		type: "boolean",
		default: true,
	},

	//  Layout & Sizing 
	advancedCountdownContainerSize: {
		type: "object",
		default: { unit: "%", Desktop: 100 },
	},
	advancedCountdownSvgProgressSize: {
		type: "object",
		default: { unit: "px", Desktop: 524 },
	},
	advancedCountdownStyle2ProgressBarSize: {
		type: "object",
		default: { unit: "px", Desktop: 200 },
	},
	advancedCountdownContainerSizeStyle3: {
		type: "object",
		default: { unit: "px", Desktop: 570 },
	},
	advancedCountdownContainerSizeStyle3Inner: {
		type: "object",
		default: { unit: "px", Desktop: 530 },
	},
	advancedCountdownContainerSizeStyle5: {
		type: "object",
		default: { unit: "px", Desktop: 771 },
	},
	advancedCountdownLayoutType: {
		type: "string",
		default: "flex",
	},
	advancedCountdownLayoutAlignment: {
		type: "string",
		default: "center",
	},
	advancedCountdownFlexWrap: {
		type: "boolean",
		default: true,
	},
	advancedCountdownGrid: {
		type: "object",
		default: {
			Desktop: "4",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedCountdownOverflow: {
		type: "string",
		default: "default",
	},
	advancedCountdownZIndex: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},

	//  Item Gap 
	advancedCountdownItemGap: {
		type: "object",
		default: {
			Desktop: "72",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedCountdownItemGapUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	//  Item Size 
	advancedCountdownItemSizeHeightAuto: {
		type: "boolean",
		default: true,
	},
	advancedCountdownItemSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedCountdownItemSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	//  Hover / Transition 
	advancedCountdownContainerHoverTransition: {
		type: "object",
		default: { Desktop: 0.4 },
	},
	advancedCountdownBorderHoverColor: {
		type: "string",
		default: "",
	},
	advancedCountdownBorderHoverTransition: {
		type: "object",
		default: { Desktop: 0.35 },
	},

	//  Main Container Border Radius 
	advancedCountdownBorderRadius: {
		type: "object",
		default: {
			top: "12",
			right: "12",
			bottom: "12",
			left: "12",
			unit: "px",
			isLinked: true,
		},
	},

	//  Global Background 
	advancedCountdownGlobalBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	advancedCountdownGlobalBackgroundType: {
		type: "string",
		default: "classic",
	},
	advancedCountdownGlobalClassicColor: {
		type: "string",
		default: "#399CFF",
	},
	advancedCountdownGlobalGradientColor: {
		type: "string",
	},
	advancedCountdownGlobalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	advancedCountdownGlobalCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	advancedCountdownGlobalBackgroundColorStyle: {
		type: "string",
		default: "",
	},
	advancedCountdownGlobalBackgroundImageUrl: {
		type: "string",
		default: "",
	},
	advancedCountdownGlobalBackgroundImageAlt: {
		type: "string",
		default: "",
	},
	advancedCountdownGlobalBackgroundImageID: {
		type: "string",
		default: "",
	},
	advancedCountdownGlobalBackgroundImagePosition: {
		type: "string",
		default: "",
	},
	advancedCountdownGlobalBackgroundImageAttachment: {
		type: "string",
		default: "",
	},
	advancedCountdownGlobalBackgroundImageSize: {
		type: "string",
		default: "",
	},
	advancedCountdownGlobalBackgroundImageRepeat: {
		type: "string",
		default: "",
	},

	//  Hover Background 
	advancedCountdownHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	advancedCountdownHoverClassicColor: {
		type: "string",
	},
	advancedCountdownHoverGradientColor: {
		type: "string",
	},
	advancedCountdownHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	advancedCountdownHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	advancedCountdownHoverBackgroundImageUrl: {
		type: "string",
		default: "",
	},
	advancedCountdownHoverBackgroundImageAlt: {
		type: "string",
		default: "",
	},
	advancedCountdownHoverBackgroundImageID: {
		type: "string",
		default: "",
	},
	advancedCountdownHoverBackgroundImagePosition: {
		type: "string",
		default: "",
	},
	advancedCountdownHoverBackgroundImageAttachment: {
		type: "string",
		default: "",
	},
	advancedCountdownHoverBackgroundImageSize: {
		type: "string",
		default: "",
	},
	advancedCountdownHoverBackgroundImageRepeat: {
		type: "string",
		default: "",
	},

	// Item Background 
	advancedCountdownItemBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	advancedCountdownItemBgColor: {
		type: "string",
		default: "",
	},
	advancedCountdownItemBgHoverColor: {
		type: "string",
		default: "",
	},

	// Item Background Image 
	advancedCountdownItemBgImageEnabled: {
		type: "boolean",
		default: false,
	},
	advancedCountdownItemBgImageUrl: {
		type: "string",
	},
	advancedCountdownItemBgImageAlt: {
		type: "string",
	},
	advancedCountdownItemBgImageID: {
		type: "number",
	},
	advancedCountdownItemBgImagePositionType: {
		type: "string",
		default: "center center",
	},
	advancedCountdownItemBgImageAttachmentType: {
		type: "string",
		default: "scroll",
	},
	advancedCountdownItemBgImageRepeatType: {
		type: "string",
		default: "no-repeat",
	},
	advancedCountdownItemBgImageSizeType: {
		type: "string",
		default: "auto",
	},

	//  Item Border 
	advancedCountdownItemBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	advancedCountdownItemBorder: {
		type: "string",
		default: "none",
	},
	advancedCountdownItemBorderColor: {
		type: "string",
	},
	advancedCountdownItemBorderHoverColor: {
		type: "string",
		default: "",
	},
	advancedCountdownItemBorderTypeUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownItemBorderTypeDesktop: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownItemBorderTypeTablet: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownItemBorderTypeMobile: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownItemBorderTypeLink: {
		type: "boolean",
		default: true,
	},

	//  Item Border Radius 
	advancedCountdownItemBorderRadiusUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownItemBorderRadiusDesktop: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownItemBorderRadiusTablet: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownItemBorderRadiusMobile: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownItemBorderRadiusLink: {
		type: "boolean",
		default: true,
	},

	//  Item Wrapper Background 
	advancedCountdownItemWrapperBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	advancedCountdownItemWrapperBgColor: {
		type: "string",
		default: "",
	},
	advancedCountdownItemWrapperBgHoverColor: {
		type: "string",
		default: "",
	},

	//  Item Wrapper Background Image
	advancedCountdownItemWrapperBgImageEnabled: {
		type: "boolean",
		default: false,
	},
	advancedCountdownItemWrapperBgImageUrl: {
		type: "string",
	},
	advancedCountdownItemWrapperBgImageAlt: {
		type: "string",
	},
	advancedCountdownItemWrapperBgImageID: {
		type: "number",
	},
	advancedCountdownItemWrapperBgImagePositionType: {
		type: "string",
		default: "center center",
	},
	advancedCountdownItemWrapperBgImageAttachmentType: {
		type: "string",
		default: "scroll",
	},
	advancedCountdownItemWrapperBgImageRepeatType: {
		type: "string",
		default: "no-repeat",
	},
	advancedCountdownItemWrapperBgImageSizeType: {
		type: "string",
		default: "auto",
	},

	//  Item Wrapper Border 
	advancedCountdownItemWrapperBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	advancedCountdownItemWrapperBorderColor: {
		type: "string",
		default: "",
	},
	advancedCountdownItemWrapperBorderHoverColor: {
		type: "string",
	},
	advancedCountdownItemWrapperBorder: {
		type: "string",
		default: "none",
	},
	advancedCountdownItemWrapperBorderTypeUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownItemWrapperBorderTypeDesktop: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownItemWrapperBorderTypeTablet: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownItemWrapperBorderTypeMobile: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownItemWrapperBorderTypeLink: {
		type: "boolean",
		default: true,
	},

	// Item Wrapper Border Radius 
	advancedCountdownItemWrapperBorderRadiusUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownItemWrapperBorderRadiusDesktop: {
		type: "object",
		default: { top: "14", bottom: "14", left: "14", right: "14" },
	},
	advancedCountdownItemWrapperBorderRadiusTablet: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownItemWrapperBorderRadiusMobile: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownItemWrapperBorderRadiusLink: {
		type: "boolean",
		default: true,
	},

	// Item Wrapper Box Shadow
	advancedCountdownItemWrapperBoxShadowValues: {
		type: "array",
		default: [],
	},
	advancedCountdownItemWrapperBoxShadowCssValue: {
		type: "string",
		default: "",
	},

	// Item Wrapper Padding 
	advancedCountdownItemWrapperPaddingUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownItemWrapperPaddingDesktop: {
		type: "object",
		default: { top: "24", bottom: "24", left: "42", right: "42" },
	},
	advancedCountdownItemWrapperPaddingTablet: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownItemWrapperPaddingMobile: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownItemWrapperPaddingLink: {
		type: "boolean",
		default: true,
	},

	// Item Wrapper Margin
	advancedCountdownItemWrapperMarginUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownItemWrapperMarginDesktop: {
		type: "object",
		default: { top: "0", bottom: "", left: "", right: "" },
	},
	advancedCountdownItemWrapperMarginTablet: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownItemWrapperMarginMobile: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownItemWrapperMarginLink: {
		type: "boolean",
		default: true,
	},

	// Digit Typography & Color 
	advancedCountdownDigitFontColorSwitcher: {
		type: "string",
		default: "normal",
	},
	advancedCountdownDigitFontColor: {
		type: "string",
		default: "#FFFFFF",
	},
	advancedCountdownDigitFontHoverColor: {
		type: "string",
		default: "",
	},
	advancedCountdownDigitGlobalTypographyData: {
		type: "object",
		default: {},
	},
	advancedCountdownDigitGlobalTypoSwitcher: {
		type: "object",
		default: {
			fontFamily: false,
			fontSize: false,
			fontWeight: false,
			fontStyle: false,
			textTransform: false,
			textDecoration: false,
			letterSpacing: false,
			lineHeight: false,
		},
	},
	advancedCountdownDigitGlobalTypoType: {
		type: "string",
		default: "default",
	},
	advancedCountdownDigitGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	advancedCountdownDigitFontFamily: {
		type: "string",
		default: "inherit",
	},
	advancedCountdownDigitFontSize: {
		type: "object",
		default: { Desktop: "62", Tablet: "", Mobile: "" },
	},
	advancedCountdownDigitFontSizeUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownDigitFontWeight: {
		type: "string",
		default: "500",
	},
	advancedCountdownDigitFontStyle: {
		type: "string",
		default: "",
	},
	advancedCountdownDigitTextTransform: {
		type: "string",
		default: "",
	},
	advancedCountdownDigitTextDecoration: {
		type: "string",
		default: "",
	},
	advancedCountdownDigitLetterSpacing: {
		type: "object",
		default: { Desktop: "", Tablet: "", Mobile: "" },
	},
	advancedCountdownDigitLetterSpacingUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownDigitLineHeight: {
		type: "object",
		default: { Desktop: "80", Tablet: "", Mobile: "" },
	},
	advancedCountdownDigitLineHeightUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},

	// Per-Unit Digit Colors 
	advancedCountdownSingleDigitFontColorSwitcher: {
		type: "boolean",
		default: false,
	},
	advancedCountdownDaysDigitFontColorSwitcher: {
		type: "string",
		default: "normal",
	},
	advancedCountdownDaysDigitFontColor: {
		type: "string",
		default: "",
	},
	advancedCountdownDaysDigitFontHoverColor: {
		type: "string",
		default: "",
	},
	advancedCountdownHoursDigitFontColorSwitcher: {
		type: "string",
		default: "normal",
	},
	advancedCountdownHoursDigitFontColor: {
		type: "string",
		default: "",
	},
	advancedCountdownHoursDigitFontHoverColor: {
		type: "string",
		default: "",
	},
	advancedCountdownMinutesDigitFontColorSwitcher: {
		type: "string",
		default: "normal",
	},
	advancedCountdownMinutesDigitFontColor: {
		type: "string",
		default: "",
	},
	advancedCountdownMinutesDigitFontHoverColor: {
		type: "string",
		default: "",
	},
	advancedCountdownSecondsDigitFontColorSwitcher: {
		type: "string",
		default: "normal",
	},
	advancedCountdownSecondsDigitFontColor: {
		type: "string",
		default: "",
	},
	advancedCountdownSecondsDigitFontHoverColor: {
		type: "string",
		default: "",
	},

	//  Digit Box
	advancedCountdownDigitBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	advancedCountdownDigitBgColor: {
		type: "string",
		default: "",
	},
	advancedCountdownDigitBgHoverColor: {
		type: "string",
		default: "",
	},
	advancedCountdownDigitBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	advancedCountdownDigitBorderColor: {
		type: "string",
		default: "",
	},
	advancedCountdownDigitBorderHoverColor: {
		type: "string",
	},
	advancedCountdownDigitBorder: {
		type: "string",
		default: "none",
	},
	advancedCountdownDigitBorderTypeUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownDigitBorderTypeDesktop: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownDigitBorderTypeTablet: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownDigitBorderTypeMobile: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownDigitBorderTypeLink: {
		type: "boolean",
		default: true,
	},
	advancedCountdownDigitBorderRadiusUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownDigitBorderRadiusDesktop: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownDigitBorderRadiusTablet: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownDigitBorderRadiusMobile: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownDigitBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	advancedCountdownDigitMarginUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownDigitMarginDesktop: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownDigitMarginTablet: {
		type: "object",
		default: { top: "", bottom: "0", left: "", right: "" },
	},
	advancedCountdownDigitMarginMobile: {
		type: "object",
		default: { top: "", bottom: "0", left: "", right: "" },
	},
	advancedCountdownDigitMarginLink: {
		type: "boolean",
		default: true,
	},
	advancedCountdownDigitWidth: {
		type: "object",
		default: { Desktop: "100", Tablet: "", Mobile: "" },
	},
	advancedCountdownDigitWidthUnits: {
		type: "object",
		default: { Desktop: "%", Tablet: "%", Mobile: "%" },
	},
	advancedCountdownDigitHeight: {
		type: "object",
		default: { Desktop: "", Tablet: "", Mobile: "" },
	},
	advancedCountdownDigitHeightUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownDigitAlignmentHz: {
		type: "string",
		default: "center",
	},
	advancedCountdownDigitAlignmentVr: {
		type: "string",
		default: "center",
	},

	//  Label Typography & Color 
	advancedCountdownLabelFontColorSwitcher: {
		type: "string",
		default: "normal",
	},
	advancedCountdownLabelFontColor: {
		type: "string",
		default: "#FFFFFF",
	},
	advancedCountdownLabelFontHoverColor: {
		type: "string",
		default: "",
	},
	advancedCountdownLabelBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	advancedCountdownLabelBgColor: {
		type: "string",
		default: "",
	},
	advancedCountdownLabelBgHoverColor: {
		type: "string",
		default: "",
	},
	advancedCountdownLabelGlobalTypographyData: {
		type: "object",
		default: {},
	},
	advancedCountdownLabelGlobalTypoSwitcher: {
		type: "object",
		default: {
			fontFamily: false,
			fontSize: false,
			fontWeight: false,
			fontStyle: false,
			textTransform: false,
			textDecoration: false,
			letterSpacing: false,
			lineHeight: false,
		},
	},
	advancedCountdownLabelGlobalTypoType: {
		type: "string",
		default: "default",
	},
	advancedCountdownLabelGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	advancedCountdownLabelFontFamily: {
		type: "string",
		default: "inherit",
	},
	advancedCountdownLabelFontSize: {
		type: "object",
		default: { Desktop: "18", Tablet: "", Mobile: "" },
	},
	advancedCountdownLabelFontSizeUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownLabelFontWeight: {
		type: "string",
		default: "",
	},
	advancedCountdownLabelFontStyle: {
		type: "string",
		default: "",
	},
	advancedCountdownLabelTextTransform: {
		type: "string",
		default: "",
	},
	advancedCountdownLabelTextDecoration: {
		type: "string",
		default: "",
	},
	advancedCountdownLabelLetterSpacing: {
		type: "object",
		default: { Desktop: "", Tablet: "", Mobile: "" },
	},
	advancedCountdownLabelLetterSpacingUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownLabelLineHeight: {
		type: "object",
		default: { Desktop: "24", Tablet: "", Mobile: "" },
	},
	advancedCountdownLabelLineHeightUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},

	// Label Box 
	advancedCountdownLabelBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	advancedCountdownLabelBorderColor: {
		type: "string",
		default: "",
	},
	advancedCountdownLabelBorderHoverColor: {
		type: "string",
	},
	advancedCountdownLabelBorder: {
		type: "string",
		default: "none",
	},
	advancedCountdownLabelBorderTypeUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownLabelBorderTypeDesktop: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownLabelBorderTypeTablet: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownLabelBorderTypeMobile: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownLabelBorderTypeLink: {
		type: "boolean",
		default: true,
	},
	advancedCountdownLabelBorderRadiusUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownLabelBorderRadiusDesktop: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownLabelBorderRadiusTablet: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownLabelBorderRadiusMobile: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownLabelBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	advancedCountdownLabelMarginUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownLabelMarginDesktop: {
		type: "object",
		default: { top: "10", bottom: "0", left: "0", right: "0" },
	},
	advancedCountdownLabelMarginTablet: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownLabelMarginMobile: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	advancedCountdownLabelMarginLink: {
		type: "boolean",
		default: true,
	},
	advancedCountdownLabelWidth: {
		type: "object",
		default: { Desktop: "100", Tablet: "", Mobile: "" },
	},
	advancedCountdownLabelWidthUnits: {
		type: "object",
		default: { Desktop: "%", Tablet: "%", Mobile: "%" },
	},
	advancedCountdownLabelHeight: {
		type: "object",
		default: { Desktop: "", Tablet: "", Mobile: "" },
	},
	advancedCountdownLabelHeightUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownLabelAlignmentHz: {
		type: "string",
		default: "center",
	},
	advancedCountdownLabelAlignmentVr: {
		type: "string",
		default: "center",
	},

	// Custom Label Text
	advancedCountdownLabelDays: {
		type: "string",
		default: "Days",
	},
	advancedCountdownLabelHours: {
		type: "string",
		default: "Hours",
	},
	advancedCountdownLabelMinutes: {
		type: "string",
		default: "Minutes",
	},

	//  Separator
	advancedCountdownSeparatorEnabled: {
		type: "boolean",
		default: true,
	},
	advancedCountdownSeparatorType: {
		type: "string",
		default: "colon",
	},
	advancedCountdownSeparatorCustom: {
		type: "string",
		default: "",
	},
	advancedCountdownSeparatorFontColorSwitcher: {
		type: "string",
		default: "normal",
	},
	advancedCountdownSeparatorFontColor: {
		type: "string",
		default: "#ffffff",
	},
	advancedCountdownSeparatorFontHoverColor: {
		type: "string",
		default: "",
	},
	advancedCountdownSeparatorGlobalTypographyData: {
		type: "object",
		default: {},
	},
	advancedCountdownSeparatorGlobalTypoSwitcher: {
		type: "object",
		default: {
			fontFamily: false,
			fontSize: false,
			fontWeight: false,
			fontStyle: false,
			textTransform: false,
			textDecoration: false,
			letterSpacing: false,
			lineHeight: false,
		},
	},
	advancedCountdownSeparatorGlobalTypoType: {
		type: "string",
		default: "default",
	},
	advancedCountdownSeparatorGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	advancedCountdownSeparatorFontFamily: {
		type: "string",
		default: "inherit",
	},
	advancedCountdownSeparatorFontSize: {
		type: "object",
		default: { Desktop: "48", Tablet: "", Mobile: "" },
	},
	advancedCountdownSeparatorFontSizeUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownSeparatorFontWeight: {
		type: "string",
		default: "",
	},
	advancedCountdownSeparatorFontStyle: {
		type: "string",
		default: "",
	},
	advancedCountdownSeparatorTextTransform: {
		type: "string",
		default: "",
	},
	advancedCountdownSeparatorTextDecoration: {
		type: "string",
		default: "",
	},
	advancedCountdownSeparatorLetterSpacing: {
		type: "object",
		default: { Desktop: "", Tablet: "", Mobile: "" },
	},
	advancedCountdownSeparatorLetterSpacingUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownSeparatorLineHeight: {
		type: "object",
		default: { Desktop: "", Tablet: "", Mobile: "" },
	},
	advancedCountdownSeparatorLineHeightUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownSeparatorHorizontalGap: {
		type: "object",
		default: { Desktop: "40", Tablet: "", Mobile: "" },
	},
	advancedCountdownSeparatorHorizontalGapUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownSeparatorVerticalGap: {
		type: "object",
		default: { Desktop: "40", Tablet: "", Mobile: "" },
	},
	advancedCountdownSeparatorVerticalGapUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},

	// Style 1 
	advancedCountdownStyle1SvgBgOverlayColor: {
		type: "string",
		default: "rgba(0, 0, 0, 0.9)",
	},
	advancedCountdownStyle1SvgBgOverlayOpacity: {
		type: "object",
		default: { unit: "px", Desktop: 0.4 },
	},
	advancedCountdownStyle1ProgressCircleActiveColor: {
		type: "string",
		default: "#FF8C00",
	},
	advancedCountdownStyle1ProgressCircleInactiveColor: {
		type: "string",
		default: "rgba(255, 255, 255, 0.1)",
	},
	advancedCountdownStyle1SvgStrokeWidth: {
		type: "object",
		default: { Desktop: "" },
	},

	// Style 2 
	advancedCountdownStyle2ProgressBarColor: {
		type: "string",
		default: "rgb(180, 176, 167)",
	},
	advancedCountdownStyle2DashCount: {
		type: "object",
		default: { Desktop: "5" },
	},
	advancedCountdownStyle2ProgressColor: {
		type: "string",
		default: "#ff8c00",
	},
	advancedCountdownStyle2SvgStrokeWidth: {
		type: "object",
		default: { unit: "px", Desktop: 15 },
	},
	advancedCountdownStyle2TextColor: {
		type: "string",
		default: "#0B0C0E",
	},

	//  Style 3 
	advancedCountdownStyle3ContainerBg: {
		type: "string",
		default: "#f3f3f3",
	},
	advancedCountdownStyle3TimeboxBg: {
		type: "string",
		default: "#ffffff",
	},
	advancedCountdownStyle3IndicatorColor: {
		type: "string",
		default: "#ff9800",
	},
	advancedCountdownStyle3IndicatorTextColor: {
		type: "string",
		default: "#fff",
	},
	advancedCountdownStyle3TimeGap: {
		type: "object",
		default: { unit: "px", Desktop: 10 },
	},
	advancedCountdownStyle3DashHighlight: {
		type: "string",
		default: "#888888",
	},
	advancedCountdownStyle3TextColor: {
		type: "string",
		default: "#000",
	},
	advancedCountdownStyle3TextGlobalTypoSwitcher: {
		type: "object",
		default: {
			fontFamily: false,
			fontSize: false,
			fontWeight: false,
			fontStyle: false,
			textTransform: false,
			textDecoration: false,
			letterSpacing: false,
			lineHeight: false,
		},
	},
	advancedCountdownStyle3TextGlobalTypographyData: {
		type: "object",
		default: {},
	},
	advancedCountdownStyle3TextGlobalTypoType: {
		type: "string",
		default: "default",
	},
	advancedCountdownStyle3TextGlobalTypoOption: {
		type: "object",
		default: { 
               label: "Default",
               value: "default" },
	},
	advancedCountdownStyle3TextFontFamily: {
		type: "string",
		default: "inherit",
	},
	advancedCountdownStyle3TextFontSize: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownStyle3TextFontSizeUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownStyle3TextFontWeight: { 
          type: "string",
          default: "" },
	advancedCountdownStyle3TextFontStyle: { 
          type: "string",
          default: "" },
	advancedCountdownStyle3TextTextTransform: { 
          type: "string",
          default: "" },
	advancedCountdownStyle3TextTextDecoration: { 
          type: "string", 
          default: "" },
	advancedCountdownStyle3TextLetterSpacing: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownStyle3TextLetterSpacingUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownStyle3TextLineHeight: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownStyle3TextLineHeightUnits: {
		type: "object",
		default: { Desktop: "px" },
	},

	// Style 4 
	advancedCountdownStyle4LabelAlignment: {
		type: "string",
		default: "right_bottom",
	},
	advancedCountdownStyle4LabelDigitColor: {
		type: "string",
		default: "#000",
	},
	advancedCountdownStyle4LabelTypoGlobalTypoSwitcher: {
		type: "object",
		default: {
			fontFamily: false,
			fontSize: false,
			fontWeight: false,
			fontStyle: false,
			textTransform: false,
			textDecoration: false,
			letterSpacing: false,
			lineHeight: false,
		},
	},
	advancedCountdownStyle4LabelTypoGlobalTypographyData: {
		type: "object",
		default: {},
	},
	advancedCountdownStyle4LabelTypoGlobalTypoType: {
		type: "string",
		default: "default",
	},
	advancedCountdownStyle4LabelTypoGlobalTypoOption: {
		type: "object",
		default: { 
               label: "Default",
               value: "default" },
	},
	advancedCountdownStyle4LabelTypoFontFamily: {
		type: "string",
		default: "inherit",
	},
	advancedCountdownStyle4LabelTypoFontSize: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownStyle4LabelTypoFontSizeUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
     advancedCountdownStyle4LabelTypoFontWeight: {
          type: "string",
          default: ""
     },
     advancedCountdownStyle4LabelTypoFontStyle: {
          type: "string",
          default: ""
     },
	advancedCountdownStyle4LabelTypoTextTransform: { 
          type: "string",
          default: "" },
	advancedCountdownStyle4LabelTypoTextDecoration: { 
          type: "string",
          default: "" },
	advancedCountdownStyle4LabelTypoLetterSpacing: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownStyle4LabelTypoLetterSpacingUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownStyle4LabelTypoLineHeight: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownStyle4LabelTypoLineHeightUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownStyle4DashGap: {
		type: "object",
		default: { unit: "px", Desktop: 10 },
	},
	advancedCountdownStyle4DaysTotalDots: {
		type: "object",
		default: { Desktop: 12 },
	},
	advancedCountdownStyle4HoursTotalDots: {
		type: "object",
		default: { Desktop: 24 },
	},
	advancedCountdownStyle4MinutesTotalDots: {
		type: "object",
		default: { Desktop: 30 },
	},
	advancedCountdownStyle4ActiveDotColor: {
		type: "string",
		default: "#ffffff",
	},
	advancedCountdownStyle4InactiveDotColor: {
		type: "string",
		default: "rgba(255, 255, 255, 0.18)",
	},
	advancedCountdownStyle4DotsThickness: {
		type: "object",
		default: { Desktop: 5 },
	},
	advancedCountdownStyle4DotsGap: {
		type: "object",
		default: { unit: "px", Desktop: 1 },
	},
	advancedCountdownStyle4DotsGlowEffect: {
		type: "string",
		default: "yes",
	},
	advancedCountdownStyle4GlowIntensity: {
		type: "object",
		default: { Desktop: 12 },
	},
	advancedCountdownStyle4GlowColor: {
		type: "string",
		default: "#ffffff",
	},
	advancedCountdownStyle4DashColor: {
		type: "string",
		default: "rgba(0,0,0,0.05)",
	},
	advancedCountdownStyle4DashSize: {
		type: "object",
		default: { unit: "px", Desktop: 4 },
	},

	// Style 5 
	advancedCountdownStyle5LabelColorMultiple: {
		type: "string",
		default: "#fff",
	},
	advancedCountdownStyle5TimeValLabelColor: {
		type: "string",
		default: "#fff",
	},
	advancedCountdownStyle5CountdownTypoGlobalTypoSwitcher: {
		type: "object",
		default: {
			fontFamily: false,
			fontSize: false,
			fontWeight: false,
			fontStyle: false,
			textTransform: false,
			textDecoration: false,
			letterSpacing: false,
			lineHeight: false,
		},
	},
	advancedCountdownStyle5CountdownTypoGlobalTypographyData: {
		type: "object",
		default: {},
	},
	advancedCountdownStyle5CountdownTypoGlobalTypoType: {
		type: "string",
		default: "default",
	},
	advancedCountdownStyle5CountdownTypoGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	advancedCountdownStyle5CountdownTypoFontFamily: {
		type: "string",
		default: "inherit",
	},
	advancedCountdownStyle5CountdownTypoFontSize: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownStyle5CountdownTypoFontSizeUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownStyle5CountdownTypoFontWeight: { type: "string", default: "" },
	advancedCountdownStyle5CountdownTypoFontStyle: { type: "string", default: "" },
	advancedCountdownStyle5CountdownTypoTextTransform: { type: "string", default: "" },
	advancedCountdownStyle5CountdownTypoTextDecoration: { type: "string", default: "" },
	advancedCountdownStyle5CountdownTypoLetterSpacing: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownStyle5CountdownTypoLetterSpacingUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownStyle5CountdownTypoLineHeight: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownStyle5CountdownTypoLineHeightUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownStyle5TimeValTypoGlobalTypoSwitcher: {
		type: "object",
		default: {
			fontFamily: false,
			fontSize: false,
			fontWeight: false,
			fontStyle: false,
			textTransform: false,
			textDecoration: false,
			letterSpacing: false,
			lineHeight: false,
		},
	},
	advancedCountdownStyle5TimeValTypoGlobalTypographyData: {
		type: "object",
		default: {},
	},
	advancedCountdownStyle5TimeValTypoGlobalTypoType: {
		type: "string",
		default: "default",
	},
	advancedCountdownStyle5TimeValTypoGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	advancedCountdownStyle5TimeValTypoFontFamily: {
		type: "string",
		default: "inherit",
	},
	advancedCountdownStyle5TimeValTypoFontSize: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownStyle5TimeValTypoFontSizeUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownStyle5TimeValTypoFontWeight: { type: "string", default: "" },
	advancedCountdownStyle5TimeValTypoFontStyle: { type: "string", default: "" },
	advancedCountdownStyle5TimeValTypoTextTransform: { type: "string", default: "" },
	advancedCountdownStyle5TimeValTypoTextDecoration: { type: "string", default: "" },
	advancedCountdownStyle5TimeValTypoLetterSpacing: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownStyle5TimeValTypoLetterSpacingUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownStyle5TimeValTypoLineHeight: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownStyle5TimeValTypoLineHeightUnits: {
		type: "object",
		default: { Desktop: "px" },
	},

	//  Separator Typography 
	advancedCountdownSeparatorTypoGlobalTypoSwitcher: {
		type: "object",
		default: {
			fontFamily: false,
			fontSize: false,
			fontWeight: false,
			fontStyle: false,
			textTransform: false,
			textDecoration: false,
			letterSpacing: false,
			lineHeight: false,
		},
	},
	advancedCountdownSeparatorTypoGlobalTypographyData: {
		type: "object",
		default: {},
	},
	advancedCountdownSeparatorTypoGlobalTypoType: {
		type: "string",
		default: "default",
	},
	advancedCountdownSeparatorTypoGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	advancedCountdownSeparatorTypoFontFamily: {
		type: "string",
		default: "inherit",
	},
	advancedCountdownSeparatorTypoFontSize: {
		type: "object",
		default: { Desktop: 3 },
	},
	advancedCountdownSeparatorTypoFontSizeUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownSeparatorTypoFontWeight: {
		type: "string",
		default: "400",
	},
	advancedCountdownSeparatorTypoFontStyle: { type: "string", default: "" },
	advancedCountdownSeparatorTypoTextTransform: { type: "string", default: "" },
	advancedCountdownSeparatorTypoTextDecoration: { type: "string", default: "" },
	advancedCountdownSeparatorTypoLetterSpacing: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownSeparatorTypoLetterSpacingUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownSeparatorTypoLineHeight: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownSeparatorTypoLineHeightUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownSeparatorColor: {
		type: "string",
		default: "#ffffff",
	},
	advancedCountdownSeparatorHoverColor: {
		type: "string",
		default: "",
	},
	advancedCountdownSeparatorSpacing: {
		type: "object",
		default: { unit: "px", Desktop: 8 },
	},

	// Icon 
	advancedCountdownIconSize: {
		type: "object",
		default: { unit: "px", Desktop: 60 },
	},
	advancedCountdownIconColorNormal: {
		type: "string",
		default: "#ffffff",
	},
	advancedCountdownIconBgColorNormal: {
		type: "string",
		default: "",
	},
	advancedCountdownIconColorHover: {
		type: "string",
		default: "",
	},
	advancedCountdownIconBgColorHover: {
		type: "string",
		default: "",
	},

	// Footer 
	advancedCountdownFooterTypoGlobalTypoSwitcher: {
		type: "object",
		default: {
			fontFamily: false,
			fontSize: false,
			fontWeight: false,
			fontStyle: false,
			textTransform: false,
			textDecoration: false,
			letterSpacing: false,
			lineHeight: false,
		},
	},
	advancedCountdownFooterTypoGlobalTypographyData: {
		type: "object",
		default: {},
	},
	advancedCountdownFooterTypoGlobalTypoType: {
		type: "string",
		default: "default",
	},
	advancedCountdownFooterTypoGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	advancedCountdownFooterTypoFontFamily: {
		type: "string",
		default: "inherit",
	},
	advancedCountdownFooterTypoFontSize: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownFooterTypoFontSizeUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownFooterTypoFontWeight: { type: "string", default: "" },
	advancedCountdownFooterTypoFontStyle: { type: "string", default: "" },
	advancedCountdownFooterTypoTextTransform: { type: "string", default: "" },
	advancedCountdownFooterTypoTextDecoration: { type: "string", default: "" },
	advancedCountdownFooterTypoLetterSpacing: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownFooterTypoLetterSpacingUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownFooterTypoLineHeight: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownFooterTypoLineHeightUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownFooterTextColor: {
		type: "string",
		default: "#ffffff",
	},
	advancedCountdownFooterBgColor: {
		type: "string",
		default: "",
	},
	advancedCountdownFooterTextColorHover: {
		type: "string",
		default: "",
	},
	advancedCountdownFooterBgColorHover: {
		type: "string",
		default: "",
	},
	advancedCountdownFooterBgCustomStyle2: {
		type: "string",
		default: "rgba(255, 135, 1, 0.2)",
	},
	advancedCountdownFooterPadding: {
		type: "object",
		default: {
			top: "8",
			right: "0",
			bottom: "8",
			left: "0",
			unit: "px",
			isLinked: false,
		},
	},
	advancedCountdownFooterPaddingLink: {
		type: "boolean",
		default: false,
	},
	advancedCountdownFooterMargin: {
		type: "object",
		default: {
			top: "25",
			right: "0",
			bottom: "25",
			left: "0",
			unit: "px",
			isLinked: false,
		},
	},
	advancedCountdownFooterMarginLink: {
		type: "boolean",
		default: false,
	},

	// Responsive Visibility
	advancedCountdownDesktopSwitcher: {
		type: "boolean",
		default: false,
	},
	advancedCountdownTabletSwitcher: {
		type: "boolean",
		default: false,
	},
	advancedCountdownMobileSwitcher: {
		type: "boolean",
		default: false,
	},

	// Advanced: Position
	advancedCountdownPositionType: {
		type: "string",
		default: "default",
	},
	advancedCountdownHZOrientationType: {
		type: "string",
		default: "left",
	},
	advancedCountdownVROrientationType: {
		type: "string",
		default: "top",
	},
	advancedCountdownHZLeftOffset: {
		type: "object",
		default: { Desktop: "", Tablet: "", Mobile: "" },
	},
	advancedCountdownHZLeftOffsetUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownHZRightOffset: {
		type: "object",
		default: { Desktop: "", Tablet: "", Mobile: "" },
	},
	advancedCountdownHZRightOffsetUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownVRTopOffset: {
		type: "object",
		default: { Desktop: "", Tablet: "", Mobile: "" },
	},
	advancedCountdownVRTopOffsetUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	advancedCountdownVRBottomOffset: {
		type: "object",
		default: { Desktop: "", Tablet: "", Mobile: "" },
	},
	advancedCountdownVRBottomOffsetUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},

	// Advanced
	advancedCountdownCustomCSS: {
		type: "string",
		default: "",
	},
	advancedCountdownCustomID: {
		type: "string",
		default: "",
	},
	advancedCountdownCustomClass: {
		type: "string",
		default: "",
	},
};

export default attributes;