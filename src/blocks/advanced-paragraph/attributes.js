const attributes = {
	blockId: {
		type: "string",
		default: "",
	},

	paragraphAlignment: {
		type: "object",
		default: {
			Desktop: "left",
			Tablet: "left",
			Mobile: "left",
		},
	},

	paragraphText: {
		type: "string",
		default: "",
	},
	dynamicContent: {
		type: "string",
		default: "",
	},
	paragraphTag: {
		type: "string",
		default: "p",
	},
	dropCap: {
		type: "boolean",
		default: false,
	},

	paragraphColumnCount: {
		type: "object",
		default: {
			Desktop: "1",
			Tablet: "",
			Mobile: "",
		},
	},

	paragraphColumnGap: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},

	paragraphColumnGapUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	// Start Link Appearance

	// start typography panel body
	linkGlobalTypoSwitcher: {
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

	linkGlobalTypographyData: {
		type: "object",
		default: {},
	},

	linkGlobalTypoType: {
		type: "string",
		default: "default",
	},

	linkGlobalTypoOption: {
		type: "object",
		default: {
			lable: "Default",
			value: "default",
		},
	},

	linkFontFamily: {
		type: "string",
		default: "Default",
	},

	linkFontSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},

	linkFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	linkFontWeight: {
		type: "string",
		default: "",
	},

	linkFontStyle: {
		type: "string",
		default: "",
	},

	linkTextTransform: {
		type: "string",
		default: "",
	},

	linkTextDecoration: {
		type: "string",
		default: "",
	},

	linkLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},

	linkLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	linkLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},

	linkLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	// color
	linkColorSwitcher: {
		type: "string",
		default: "normal",
	},
	linkColor: {
		type: "string",
	},
	linkHoverColor: {
		type: "string",
	},
	// background color
	linkBgColorSwitcher: {
		type: "string",
		default: "normal",
	},

	linkBgColor: {
		type: "string",
	},

	linkBgColorHover: {
		type: "string",
	},

	// padding

	linkPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	linkDesktopPadding: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},

	linkTabPadding: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},

	linkMobilePadding: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},

	linkPaddingLink: {
		type: "boolean",
		default: true,
	},

	// BORDER
	linkBorder: {
		type: "string",
		default: "none",
	},

	linkBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},

	linkBorderColor: {
		type: "string",
	},

	linkBorderHoverColor: {
		type: "string",
	},

	linkBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	linkDesktopBorder: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},

	linkTabletBorder: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},

	linkMobileBorder: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},

	linkBorderLink: {
		type: "boolean",
		default: true,
	},

	// BORDER RADIUS
	linkBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	linkDesktopBorderRadius: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},

	linkTabBorderRadius: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},

	linkMobileBorderRadius: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},

	linkBorderRadiusLink: {
		type: "boolean",
		defautl: true,
	},

	// Box Shadow
	linkBoxShadowValues: {
		type: "array",
		default: [],
	},
	linkBoxShadowCssValue: {
		type: "string",
		default: "",
	},

	// start dropcap typo style
	dropCapGlobalTypoSwitcher: {
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

	dropCapGlobalTypographyData: {
		type: "object",
		default: {},
	},

	dropCapGlobalTypoType: {
		type: "string",
		default: "default",
	},

	dropCapGlobalTypoOption: {
		type: "object",
		default: { lable: "Default", value: "default" },
	},

	dropCapFontFamily: {
		type: "string",
		default: "Default",
	},
	dropCapFontSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	dropCapFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	dropCapFontWeight: {
		type: "string",
		default: "",
	},
	dropCapFontStyle: {
		type: "string",
		default: "",
	},
	dropCapTextTransform: {
		type: "string",
		default: "",
	},
	dropCapTextDecoration: {
		type: "string",
		default: "",
	},
	dropCapLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	dropCapLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	dropCapLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	dropCapLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	dropCapTextShadowValues: {
		type: "array",
		default: [],
	},
	dropCapTextShadowCssValue: {
		type: "string",
		default: "",
	},
	dropCapTextStroke: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	dropCapTextStrokeColorSwitcher: {
		type: "string",
		default: "normal",
	},
	dropCapTextStrokeColor: {
		type: "string",
		default: "#399CFF",
	},
	dropCapTextStrokeHoverColor: {
		type: "string",
		default: "#399CFF",
	},
	dropCapColorSwitcher: {
		type: "string",
		default: "normal",
	},
	dropCapColor: {
		type: "string",
	},
	dropCapHoverColor: {
		type: "string",
	},
	dropCapBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	dropCapBgColor: {
		type: "string",
	},
	dropCapBgColorHover: {
		type: "string",
	},

	/** Start Paragraph Style */
	paragraphGlobalTypographyData: {
		type: "object",
		default: {},
	},
	paragraphGlobalTypoSwitcher: {
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
	paragraphGlobalTypoType: {
		type: "string",
		default: "default",
	},
	paragraphGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	paragraphFontFamily: {
		type: "string",
		default: "Default",
	},
	paragraphFontSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	paragraphFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	paragraphFontWeight: {
		type: "string",
		default: "",
	},
	paragraphFontStyle: {
		type: "string",
		default: "",
	},
	paragraphTextTransform: {
		type: "string",
		default: "",
	},
	paragraphTextDecoration: {
		type: "string",
		default: "",
	},
	paragraphLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	paragraphLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	paragraphLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	paragraphLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	paragraphTextShadowValues: {
		type: "array",
		default: [],
	},
	paragraphTextShadowCssValue: {
		type: "string",
		default: "",
	},
	paragraphTextStroke: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	paragraphTextStrokeColorSwitcher: {
		type: "string",
		default: "normal",
	},
	paragraphTextStrokeColor: {
		type: "string",
		default: "#399CFF",
	},
	paragraphTextStrokeHoverColor: {
		type: "string",
		default: "#399CFF",
	},

	paragraphColorSwitcher: {
		type: "string",
		default: "normal",
	},
	paragraphColor: {
		type: "string",
	},
	paragraphHoverColor: {
		type: "string",
	},
	paragraphBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	paragraphBgColor: {
		type: "string",
	},
	paragraphBgColorHover: {
		type: "string",
	},
	/** End paragraph Style */

	// start dropcap style
	dropCapColorSwitcher: {
		type: "string",
		default: "normal",
	},
	dropCapColor: {
		type: "string",
	},
	dropCapHoverColor: {
		type: "string",
	},

	dropCapPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	dropCapDesktopPadding: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropCapTabPadding: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropCapMobilePadding: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropCapPaddingLink: {
		type: "boolean",
		default: true,
	},
	dropCapMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	dropCapDesktopMargin: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},

	dropCapTabMargin: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},

	dropCapMobileMargin: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},

	dropCapMarginLink: {
		type: "boolean",
		default: true,
	},

	dropCapBorder: {
		type: "string",
		default: "none",
	},

	dropCapBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},

	dropCapBorderColor: {
		type: "string",
	},

	dropCapBorderHoverColor: {
		type: "string",
	},

	dropCapBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	dropCapDesktopBorder: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},

	dropCapTabletBorder: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},

	dropCapMobileBorder: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},

	dropCapBorderLink: {
		type: "boolean",
		default: true,
	},

	dropCapBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	dropCapDesktopBorderRadius: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},

	dropCapTabBorderRadius: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},

	dropCapMobileBorderRadius: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},

	dropCapBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	// end dropcap style

	/** Start Global Setting */
	paragraphGlobalZIndex: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedParagraphOverflow: {
		type: "string",
		default: "default",
	},
	paragraphGlobalWraperID: {
		type: "string",
		default: "",
	},

	paragraphGlobalWraperClass: {
		type: "string",
		default: "",
	},

	/** Start Padding */
	paragraphGlobalPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	paragraphGlobalPaddingDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	paragraphGlobalPaddingTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	paragraphGlobalPaddingMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	paragraphGlobalPaddingLink: {
		type: "boolean",
		default: true,
	},
	/** End Padding */

	/** Start Margin */
	paragraphGlobalMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	paragraphGlobalMarginDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	paragraphGlobalMarginTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	paragraphGlobalMarginMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	paragraphGlobalMarginLink: {
		type: "boolean",
		default: true,
	},
	/** End Margin */

	/** Start Background */
	paragraphGlobalBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	paragraphGlobalBgColor: {
		type: "string",
	},
	paragraphGlobalBgHoverColor: {
		type: "string",
	},
	/** End Background */

	/** Start Border */
	paragraphGlobalBorder: {
		type: "string",
		default: "none",
	},
	paragraphGlobalBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	paragraphGlobalBorderColor: {
		type: "string",
		default: "",
	},
	paragraphGlobalBorderHoverColor: {
		type: "string",
	},
	paragraphGlobalBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	paragraphGlobalBorderDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	paragraphGlobalBorderTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	paragraphGlobalBorderMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	paragraphGlobalBorderLink: {
		type: "boolean",
		default: true,
	},
	/** End Border */

	/** Start Border Radius */
	paragraphGlobalBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	paragraphGlobalBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	paragraphGlobalBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	paragraphGlobalBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	paragraphGlobalBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	/** End Border Radius */

	/** Start Box Shadow */
	paragraphGlobalBoxShadowSwitcher: {
		type: "string",
		default: "normal",
	},
	paragraphGlobalBoxShadowValues: {
		type: "array",
		default: [],
	},
	paragraphGlobalBoxShadowCssValue: {
		type: "string",
		default: "",
	},
	paragraphGlobalBoxShadowHoverValues: {
		type: "array",
		default: [],
	},
	paragraphGlobalBoxShadowHoverCssValue: {
		type: "string",
		default: "",
	},
	/** End Global Style */

	blockStyle: {
		type: "string",
		default: "",
	},

	advancedParagraphDesktopSwitcher: {
		type: "boolean",
		default: false,
	},
	advancedParagraphTabletSwitcher: {
		type: "boolean",
		default: false,
	},
	advancedParagraphMobileSwitcher: {
		type: "boolean",
		default: false,
	},
	advancedParagraphCustomCSS: {
		type: "string",
		default: "",
	},

	advancedParagraphPositionType: {
		type: "string",
		default: "default",
	},
	advancedParagraphHZOrientationType: {
		type: "string",
		default: "left",
	},
	advancedParagraphVROrientationType: {
		type: "string",
		default: "top",
	},
	advancedParagraphHZLeftOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedParagraphHZLeftOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedParagraphHZRightOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedParagraphHZRightOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedParagraphVRTopOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedParagraphVRTopOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	advancedParagraphVRBottomOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	advancedParagraphVRBottomOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	/** End Advanced Paragraph Position */
};
export default attributes;
