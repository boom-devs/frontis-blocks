const attributes = {
	blockID: {
		type: "string",
		default: "",
	},
	countDownPresetStyle: {
		type: "string",
		default: "style-1",
	},
	advancedCountdownStartDate: {
		type: "string",
		default: "",
	},
	until_text: {
		type: "string",
		default: "Until Morning Digest",
	},
	show_sun_icon: {
		type: "string",
		default: "yes",
	},
	sun_icon: {
		type: "object",
		default: { value: "far fa-sun", library: "fa-regular" },
	},

	// Show Hide Label Attributes
	showDays: {
		type: "boolean",
		default: true,
	},
	showHours: {
		type: "boolean",
		default: true,
	},
	showMinutes: {
		type: "boolean",
		default: true,
	},
	showSeconds: {
		type: "boolean",
		default: true,
	},

	targetDate: {
		type: "string",
	},
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
	advancedCountdownContainerSizeStyle3Container: {
		type: "object",
		default: { unit: "px", Desktop: 530 },
	},
	advancedCountdownContainerSizeStyle5: {
		type: "object",
		default: { unit: "px", Desktop: 771 },
	},
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
	advancedCountdownPreset4DashGap: {
		type: "object",
		default: { unit: "px", Desktop: 10 },
	},
	countDownLayoutAlignment: {
		type: "string",
		default: "center",
	},
	advancedCountdownStyle2ProgressBarColor: {
		type: "string",
		default: "rgb(180, 176, 167)",
	},
	advancedCountdownStyle2DashCount: {
		type: "object",
		default: { Desktop: "5" },
	},
	days_total_dots: {
		type: "object",
		default: { Desktop: 12 },
	},
	hours_total_dots: {
		type: "object",
		default: { Desktop: 24 },
	},
	minutes_total_dots: {
		type: "object",
		default: { Desktop: 60 },
	},
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
		default: { label: "Default", value: "default" },
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
	advancedCountdownStyle3TextFontWeight: { type: "string", default: "" },
	advancedCountdownStyle3TextFontStyle: { type: "string", default: "" },
	advancedCountdownStyle3TextTextTransform: { type: "string", default: "" },
	advancedCountdownStyle3TextTextDecoration: { type: "string", default: "" },
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
	advancedCountdownActiveDotColor: {
		type: "string",
		default: "#ffffff",
	},
	advancedCountdownInactiveDotColor: {
		type: "string",
		default: "rgba(255, 255, 255, 0.18)",
	},
	advancedCountdownDotsThickness: {
		type: "object",
		default: { Desktop: 5 },
	},
	advancedCountdownDotsGap: {
		type: "object",
		default: { unit: "px", Desktop: 1 },
	},
	advancedCountdownDotsGlowEffect: {
		type: "string",
		default: "yes",
	},
	advancedCountdownGlowIntensity: {
		type: "object",
		default: { Desktop: 12 },
	},
	advancedCountdownGlowColor: {
		type: "string",
		default: "#ffffff",
	},
	advancedCountdownDashColor: {
		type: "string",
		default: "rgba(0,0,0,0.05)",
	},
	advancedCountdownDashSize: {
		type: "object",
		default: { unit: "px", Desktop: 4 },
	},
	advancedCountdownLabelAlignmentStyle4: {
		type: "string",
		default: "right_bottom",
	},
	advancedCountdownLabelTypographyStyle4GlobalTypoSwitcher: {
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
	advancedCountdownLabelTypographyStyle4GlobalTypographyData: {
		type: "object",
		default: {},
	},
	advancedCountdownLabelTypographyStyle4GlobalTypoType: {
		type: "string",
		default: "default",
	},
	advancedCountdownLabelTypographyStyle4GlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	advancedCountdownLabelTypographyStyle4FontFamily: {
		type: "string",
		default: "inherit",
	},
	advancedCountdownLabelTypographyStyle4FontSize: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownLabelTypographyStyle4FontSizeUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownLabelTypographyStyle4FontWeight: {
		type: "string",
		default: "",
	},
	advancedCountdownLabelTypographyStyle4FontStyle: {
		type: "string",
		default: "",
	},
	advancedCountdownLabelTypographyStyle4TextTransform: {
		type: "string",
		default: "",
	},
	advancedCountdownLabelTypographyStyle4TextDecoration: {
		type: "string",
		default: "",
	},
	advancedCountdownLabelTypographyStyle4LetterSpacing: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownLabelTypographyStyle4LetterSpacingUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownLabelTypographyStyle4LineHeight: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownLabelTypographyStyle4LineHeightUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownLabelColorStyle4: {
		type: "string",
		default: "rgba(0, 0, 0, 0.9)",
	},
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
	advancedCountdownCountdownTypographyGlobalTypoSwitcher: {
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
	advancedCountdownCountdownTypographyGlobalTypographyData: {
		type: "object",
		default: {},
	},
	advancedCountdownCountdownTypographyGlobalTypoType: {
		type: "string",
		default: "default",
	},
	advancedCountdownCountdownTypographyGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	advancedCountdownCountdownTypographyFontFamily: {
		type: "string",
		default: "inherit",
	},
	advancedCountdownCountdownTypographyFontSize: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownCountdownTypographyFontSizeUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownCountdownTypographyFontWeight: {
		type: "string",
		default: "",
	},
	advancedCountdownCountdownTypographyFontStyle: {
		type: "string",
		default: "",
	},
	advancedCountdownCountdownTypographyTextTransform: {
		type: "string",
		default: "",
	},
	advancedCountdownCountdownTypographyTextDecoration: {
		type: "string",
		default: "",
	},
	advancedCountdownCountdownTypographyLetterSpacing: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownCountdownTypographyLetterSpacingUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownCountdownTypographyLineHeight: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownCountdownTypographyLineHeightUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownLabelColorStyleMultiple: {
		type: "string",
		default: "#fff",
	},
	advancedCountdownTimeValTypographyGlobalTypoSwitcher: {
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
	advancedCountdownTimeValTypographyGlobalTypographyData: {
		type: "object",
		default: {},
	},
	advancedCountdownTimeValTypographyGlobalTypoType: {
		type: "string",
		default: "default",
	},
	advancedCountdownTimeValTypographyGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	advancedCountdownTimeValTypographyFontFamily: {
		type: "string",
		default: "inherit",
	},
	advancedCountdownTimeValTypographyFontSize: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownTimeValTypographyFontSizeUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownTimeValTypographyFontWeight: { type: "string", default: "" },
	advancedCountdownTimeValTypographyFontStyle: { type: "string", default: "" },
	advancedCountdownTimeValTypographyTextTransform: {
		type: "string",
		default: "",
	},
	advancedCountdownTimeValTypographyTextDecoration: {
		type: "string",
		default: "",
	},
	advancedCountdownTimeValTypographyLetterSpacing: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownTimeValTypographyLetterSpacingUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownTimeValTypographyLineHeight: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownTimeValTypographyLineHeightUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownTimeValLabelColor: {
		type: "string",
		default: "#fff",
	},
	advancedCountdownLabelColorStyle4Digit: {
		type: "string",
		default: "#000",
	},
	advancedCountdownTextColorStyle2: {
		type: "string",
		default: "#0B0C0E",
	},
	advancedCountdownTextColorStyle3: {
		type: "string",
		default: "#000",
	},
	advancedCountdownSeparatorTypographyGlobalTypoSwitcher: {
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
	advancedCountdownSeparatorTypographyGlobalTypographyData: {
		type: "object",
		default: {},
	},
	advancedCountdownSeparatorTypographyGlobalTypoType: {
		type: "string",
		default: "default",
	},
	advancedCountdownSeparatorTypographyGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	advancedCountdownSeparatorTypographyFontFamily: {
		type: "string",
		default: "inherit",
	},
	advancedCountdownSeparatorTypographyFontSize: {
		type: "object",
		default: { Desktop: 3 },
	},
	advancedCountdownSeparatorTypographyFontSizeUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownSeparatorTypographyFontWeight: {
		type: "string",
		default: "400",
	},
	advancedCountdownSeparatorTypographyFontStyle: {
		type: "string",
		default: "",
	},
	advancedCountdownSeparatorTypographyTextTransform: {
		type: "string",
		default: "",
	},
	advancedCountdownSeparatorTypographyTextDecoration: {
		type: "string",
		default: "",
	},
	advancedCountdownSeparatorTypographyLetterSpacing: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownSeparatorTypographyLetterSpacingUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownSeparatorTypographyLineHeight: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownSeparatorTypographyLineHeightUnits: {
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
	advancedCountdownSvgBgOverlayColor: {
		type: "string",
		default: "rgba(0,0,0,0.9)",
	},
	advancedCountdownSvgBgOverlayOpacity: {
		type: "object",
		default: { unit: "px", Desktop: 0.4 },
	},
	advancedCountdownProgressCircleActiveColor: {
		type: "string",
		default: "#FF8C00",
	},
	advancedCountdownProgressCircleInactiveColor: {
		type: "string",
		default: "rgba(255, 255, 255, 0.1)",
	},
	advancedCountdownSvgStrokeWidth: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownProgressColorStyle2: {
		type: "string",
		default: "#ff8c00",
	},
	advancedCountdownSvgStrokeWidthStyle2: {
		type: "object",
		default: { unit: "px", Desktop: 15 },
	},
	advancedCountdownFooterTypographyGlobalTypoSwitcher: {
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
	advancedCountdownFooterTypographyGlobalTypographyData: {
		type: "object",
		default: {},
	},
	advancedCountdownFooterTypographyGlobalTypoType: {
		type: "string",
		default: "default",
	},
	advancedCountdownFooterTypographyGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	advancedCountdownFooterTypographyFontFamily: {
		type: "string",
		default: "inherit",
	},
	advancedCountdownFooterTypographyFontSize: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownFooterTypographyFontSizeUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownFooterTypographyFontWeight: { type: "string", default: "" },
	advancedCountdownFooterTypographyFontStyle: { type: "string", default: "" },
	advancedCountdownFooterTypographyTextTransform: {
		type: "string",
		default: "",
	},
	advancedCountdownFooterTypographyTextDecoration: {
		type: "string",
		default: "",
	},
	advancedCountdownFooterTypographyLetterSpacing: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownFooterTypographyLetterSpacingUnits: {
		type: "object",
		default: { Desktop: "px" },
	},
	advancedCountdownFooterTypographyLineHeight: {
		type: "object",
		default: { Desktop: "" },
	},
	advancedCountdownFooterTypographyLineHeightUnits: {
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
	// Device Type
	deviceType: {
		type: "string",
		default: "Desktop",
	},

	//Item Bg Color
	advancedCountdownItemBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	advancedCountdownItemBgColor: {
		type: "string",
		default: "#399CFF",
	},
	advancedCountdownItemBgHoverColor: {
		type: "string",
		default: "",
	},

	/** Start Background Image */
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
	// Border Radius
	advancedCountdownItemBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedCountdownItemBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownItemBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownItemBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownItemBorderRadiusLink: {
		type: "boolean",
		default: true,
	},

	// Border Type
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
	advancedCountdownItemBorderTypeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedCountdownItemBorderTypeDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownItemBorderTypeTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownItemBorderTypeMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownItemBorderTypeLink: {
		type: "boolean",
		default: true,
	},

	advancedCountdownFlexWrap: {
		type: "boolean",
		default: true,
	},
	advancedCountdownLayoutType: {
		type: "string",
		default: "flex",
	},
	advancedCountdownLayoutAlignment: {
		type: "string",
		default: "center",
	},
	advancedCountdownGrid: {
		type: "object",
		default: {
			Desktop: "4",
			Tablet: "",
			Mobile: "",
		},
	},

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

	advancedCountdownItemSizeHeight: {
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
	/** Start BG Color */
	advancedCountdownItemWrapperBgFontColorSwitcher: {
		type: "string",
		default: "normal",
	},
	advancedCountdownItemWrapperBgFontColor: {
		type: "string",
		default: "",
	},
	advancedCountdownItemWrapperBgFontHoverColor: {
		type: "string",
		default: "",
	},
	/** End BG Color */

	/** Start Background Image */
	advancedCountdownItemWrapperBackgroundImageEnabled: {
		type: "boolean",
		default: false,
	},
	advancedCountdownItemWrapperBackgroundImageUrl: {
		type: "string",
	},
	advancedCountdownItemWrapperBackgroundImageAlt: {
		type: "string",
	},
	advancedCountdownItemWrapperBackgroundImageID: {
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

	/** End Background Image */

	/** Start Border Type */
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
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedCountdownItemWrapperBorderTypeDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownItemWrapperBorderTypeTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownItemWrapperBorderTypeMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownItemWrapperBorderTypeLink: {
		type: "boolean",
		default: true,
	},
	/** End Border Type */

	/** Start Border Radius */
	advancedCountdownItemWrapperBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedCountdownItemWrapperBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "14",
			bottom: "14",
			left: "14",
			right: "14",
		},
	},
	advancedCountdownItemWrapperBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownItemWrapperBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownItemWrapperBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	/** End Border Radius */

	/** Start Box Shadow */
	advancedCountdownItemWrapperBoxShadowValues: {
		type: "array",
		default: [],
	},
	advancedCountdownItemWrapperBoxShadowCssValue: {
		type: "string",
		default: "",
	},
	/** End Box Shadow */

	/** Start Padding */
	advancedCountdownItemWrapperPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedCountdownItemWrapperPaddingDesktop: {
		type: "object",
		default: {
			top: "24",
			bottom: "24",
			left: "42",
			right: "42",
		},
	},
	advancedCountdownItemWrapperPaddingTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownItemWrapperPaddingMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownItemWrapperPaddingLink: {
		type: "boolean",
		default: true,
	},
	/** End Padding */

	/** Start Margin */
	advancedCountdownItemWrapperMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedCountdownItemWrapperMarginDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownItemWrapperMarginTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownItemWrapperMarginMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownItemWrapperMarginLink: {
		type: "boolean",
		default: true,
	},
	/** End Margin */

	singleDigitFontColorSwitcher: {
		type: "boolean",
		default: false,
	},

	daysDigitFontColorSwitcher: {
		type: "string",
		default: "normal",
	},
	daysDigitFontColor: {
		type: "string",
		default: "",
	},
	daysDigitFontHoverColor: {
		type: "string",
		default: "",
	},

	hoursDigitFontColorSwitcher: {
		type: "string",
		default: "normal",
	},
	hoursDigitFontColor: {
		type: "string",
		default: "",
	},
	hoursDigitFontHoverColor: {
		type: "string",
		default: "",
	},

	minutesDigitFontColorSwitcher: {
		type: "string",
		default: "normal",
	},
	minutesDigitFontColor: {
		type: "string",
		default: "",
	},
	minutesDigitFontHoverColor: {
		type: "string",
		default: "",
	},

	secondsDigitFontColorSwitcher: {
		type: "string",
		default: "normal",
	},
	secondsDigitFontColor: {
		type: "string",
		default: "",
	},
	secondsDigitFontHoverColor: {
		type: "string",
		default: "",
	},

	digitFontColorSwitcher: {
		type: "string",
		default: "normal",
	},
	digitFontColor: {
		type: "string",
		default: "#FFFFFF",
	},
	digitFontHoverColor: {
		type: "string",
		default: "",
	},

	digitGlobalTypographyData: {
		type: "object",
		default: {},
	},
	digitGlobalTypoSwitcher: {
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
	digitGlobalTypoType: {
		type: "string",
		default: "default",
	},
	digitGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	digitFontFamily: {
		type: "string",
		default: "inherit",
	},
	digitFontSize: {
		type: "object",
		default: {
			Desktop: "62",
			Tablet: "",
			Mobile: "",
		},
	},
	digitFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	digitFontWeight: {
		type: "string",
		default: "500",
	},
	digitFontStyle: {
		type: "string",
		default: "",
	},
	digitTextTransform: {
		type: "string",
		default: "",
	},
	digitTextDecoration: {
		type: "string",
		default: "",
	},
	digitLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	digitLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	digitLineHeight: {
		type: "object",
		default: {
			Desktop: "80",
			Tablet: "",
			Mobile: "",
		},
	},
	digitLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	labelFontColorSwitcher: {
		type: "string",
		default: "normal",
	},
	labelFontColor: {
		type: "string",
		default: "#FFFFFF",
	},
	labelFontHoverColor: {
		type: "string",
		default: "",
	},
	labelBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	labelBgColor: {
		type: "string",
		default: "",
	},
	labelBgHoverColor: {
		type: "string",
		default: "",
	},
	labelGlobalTypographyData: {
		type: "object",
		default: {},
	},
	labelGlobalTypoSwitcher: {
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
	labelGlobalTypoType: {
		type: "string",
		default: "default",
	},
	labelGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	labelFontFamily: {
		type: "string",
		default: "inherit",
	},
	labelFontSize: {
		type: "object",
		default: {
			Desktop: "18",
			Tablet: "",
			Mobile: "",
		},
	},
	labelFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	labelFontWeight: {
		type: "string",
		default: "",
	},
	labelFontStyle: {
		type: "string",
		default: "",
	},
	labelTextTransform: {
		type: "string",
		default: "",
	},
	labelTextDecoration: {
		type: "string",
		default: "",
	},
	labelLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	labelLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	labelLineHeight: {
		type: "object",
		default: {
			Desktop: "24",
			Tablet: "",
			Mobile: "",
		},
	},
	labelLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
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
		default: {
			Desktop: "48",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedCountdownSeparatorFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
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
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedCountdownSeparatorLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedCountdownSeparatorLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedCountdownSeparatorLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	/** Start Horizontal Spacing */
	advancedCountdownSeparatorHorizontalGap: {
		type: "object",
		default: {
			Desktop: "40",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedCountdownSeparatorHorizontalGapUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	/** End Horizontal Spacing */

	/** Start Vertical Spacing */
	advancedCountdownSeparatorVerticalGap: {
		type: "object",
		default: {
			Desktop: "40",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedCountdownSeparatorVerticalGapUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	/** End Vertical Spacing */
	advancedCountdownZIndex: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedCountdownOverflow: {
		type: "string",
		default: "default",
	},
	globalBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	globalBackgroundType: {
		type: "string",
		default: "classic",
	},
	globalClassicColor: {
		type: "string",
		default: "#399CFF",
	},
	globalGradientColor: {
		type: "string",
	},
	globalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	globalCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	globalBackgroundColorStyle: {
		type: "string",
		default: "",
	},
	globalBackgroundImageUrl: {
		type: "string",
		default: "",
	},
	globalBackgroundImageAlt: {
		type: "string",
		default: "",
	},
	globalBackgroundImageID: {
		type: "string",
		default: "",
	},
	globalBackgroundImagePosition: {
		type: "string",
		default: "",
	},
	globalBackgroundImageAttachment: {
		type: "string",
		default: "",
	},
	globalBackgroundImageSize: {
		type: "string",
		default: "",
	},
	globalBackgroundImageRepeat: {
		type: "string",
		default: "",
	},
	hoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	hoverClassicColor: {
		type: "string",
	},
	hoverGradientColor: {
		type: "string",
	},
	hoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	hoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	hoverBackgroundImageUrl: {
		type: "string",
		default: "",
	},
	hoverBackgroundImageAlt: {
		type: "string",
		default: "",
	},
	hoverBackgroundImageID: {
		type: "string",
		default: "",
	},
	hoverBackgroundImagePosition: {
		type: "string",
		default: "",
	},
	hoverBackgroundImageAttachment: {
		type: "string",
		default: "",
	},
	hoverBackgroundImageSize: {
		type: "string",
		default: "",
	},
	hoverBackgroundImageRepeat: {
		type: "string",
		default: "",
	},

	/** Label Start Border Type */
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
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedCountdownLabelBorderTypeDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownLabelBorderTypeTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownLabelBorderTypeMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownLabelBorderTypeLink: {
		type: "boolean",
		default: true,
	},
	/** Label End Border Type */

	/** Label Start Border Radius */
	advancedCountdownLabelBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedCountdownLabelBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownLabelBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownLabelBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownLabelBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	/** Label End Border Radius */

	advancedCountdownLabelMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedCountdownLabelMarginDesktop: {
		type: "object",
		default: {
			top: "10",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	advancedCountdownLabelMarginTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownLabelMarginMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownLabelMarginLink: {
		type: "boolean",
		default: true,
	},

	advancedCountdownLabelWidth: {
		type: "object",
		default: {
			Desktop: "100",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedCountdownLabelWidthUnits: {
		type: "object",
		default: {
			Desktop: "%",
			Tablet: "%",
			Mobile: "%",
		},
	},
	advancedCountdownLabelHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedCountdownLabelHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedCountdownLabelAlignmentHz: {
		type: "string",
		default: "center",
	},
	advancedCountdownLabelAlignmentVr: {
		type: "string",
		default: "center",
	},
	/** Label End */

	/** Digit Start Border Type */
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
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedCountdownDigitBorderTypeDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownDigitBorderTypeTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownDigitBorderTypeMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownDigitBorderTypeLink: {
		type: "boolean",
		default: true,
	},
	/** Digit End Border Type */

	/** Digit Start Border Radius */
	advancedCountdownDigitBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedCountdownDigitBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownDigitBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownDigitBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownDigitBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	/** Digit End Border Radius */

	advancedCountdownDigitMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedCountdownDigitMarginDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownDigitMarginTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownDigitMarginMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	advancedCountdownDigitMarginLink: {
		type: "boolean",
		default: true,
	},

	advancedCountdownDigitWidth: {
		type: "object",
		default: {
			Desktop: "100",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedCountdownDigitWidthUnits: {
		type: "object",
		default: {
			Desktop: "%",
			Tablet: "%",
			Mobile: "%",
		},
	},
	advancedCountdownDigitHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedCountdownDigitHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedCountdownDigitAlignmentHz: {
		type: "string",
		default: "center",
	},
	advancedCountdownDigitAlignmentVr: {
		type: "string",
		default: "center",
	},
	/** Digit End */

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

	/** Start Class & ID Setting */
	advancedCountdownGlobalWraperCustomCSS: {
		type: "string",
		default: "",
	},
	advancedCountdownGlobalWraperID: {
		type: "string",
		default: "",
	},
	advancedCountdownGlobalWraperClass: {
		type: "string",
		default: "",
	},
	/** End Class & ID Setting */

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
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedCountdownHZLeftOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedCountdownHZRightOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedCountdownHZRightOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedCountdownVRTopOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedCountdownVRTopOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedCountdownVRBottomOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedCountdownVRBottomOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
};

export default attributes;
