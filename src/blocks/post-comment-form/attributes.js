const attributes = {
	blockId: {
		type: "string",
		default: "",
	},

	// Element Visibility
	showCommentTitle: {
		type: "boolean",
		default: true,
	},
	showCommentsCount: {
		type: "boolean",
		default: true,
	},
	showCommentForm: {
		type: "boolean",
		default: true,
	},

	// Form Text Customization
	formTitle: {
		type: "string",
		default: "",
	},
	cancelReplyText: {
		type: "string",
		default: "",
	},
	loginText: {
		type: "string",
		default: "",
	},
	logoutText: {
		type: "string",
		default: "",
	},
	buttonText: {
		type: "string",
		default: "",
	},

	// Style Attributes
	// commentFormWidth: {
	// 	type: "object",
	// 	default: {
	// 		Desktop: "",
	// 		Tablet: "",
	// 		Mobile: "",
	// 	},
	// },
	// commentGap: {
	// 	type: "object",
	// 	default: {
	// 		Desktop: "20px",
	// 		Tablet: "",
	// 		Mobile: "",
	// 	},
	// },
	// avatarSize: {
	// 	type: "object",
	// 	default: {
	// 		Desktop: "64px",
	// 		Tablet: "",
	// 		Mobile: "",
	// 	},
	// },

	/** ============== Style Attributes ============== */
	/** Start Heading */
	commentCountTitleGlobalTypographyData: {
		type: "object",
		default: {},
	},
	commentCountTitleGlobalTypoSwitcher: {
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
	commentCountTitleGlobalTypoType: {
		type: "string",
		default: "default",
	},
	commentCountTitleGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	commentCountTitleFontFamily: {
		type: "string",
		default: "",
	},
	commentCountTitleFontSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	commentCountTitleFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	commentCountTitleFontWeight: {
		type: "string",
		default: "600",
	},
	commentCountTitleFontStyle: {
		type: "string",
		default: "normal",
	},
	commentCountTitleTextTransform: {
		type: "string",
		default: "none",
	},
	commentCountTitleTextDecoration: {
		type: "string",
		default: "none",
	},
	commentCountTitleLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	commentCountTitleLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	commentCountTitleLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	commentCountTitleLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	commentCountTitleColorSwitcher: {
		type: "string",
		default: "normal",
	},
	commentCountTitleColor: {
		type: "string",
		default: "",
	},
	commentCountTitleHoverColor: {
		type: "string",
		default: "",
	},

	commentCountTitleSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		}
	},

	commentCountTitleSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		}
	},

	/** End Heading */

	/** ============== Advanced Attributes ============== */
	wrapperId: {
		type: "string",
		default: "",
	},
	wrapperClass: {
		type: "string",
		default: "",
	},
	commentFormGlobalCustomCSS: {
		type: "string",
		default: "",
	},

	// Responsive Control
	commentFormDesktopSwitcher: {
		type: "boolean",
		default: false,
	},
	commentFormTabletSwitcher: {
		type: "boolean",
		default: false,
	},
	commentFormMobileSwitcher: {
		type: "boolean",
		default: false,
	},

	// Global
	postGlobalZIndex: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},

	postGlobalOverflow: {
		type: "string",
		default: "default",
	},

	/** Start Position */
	postGlobalPositionType: {
		type: "string",
		default: "default",
	},
	postGlobalHZOrientationType: {
		type: "string",
		default: "left",
	},
	postGlobalVROrientationType: {
		type: "string",
		default: "top",
	},
	postGlobalHZLeftOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postGlobalHZLeftOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postGlobalHZRightOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postGlobalHZRightOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postGlobalVRTopOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postGlobalVRTopOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postGlobalVRBottomOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postGlobalVRBottomOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	/** End Position */
	/** Start Padding */
	postGlobalPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postGlobalPaddingDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalPaddingTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalPaddingMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalPaddingLink: {
		type: "boolean",
		default: true,
	},
	/** End Padding */

	/** Start Margin */
	postGlobalMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postGlobalMarginDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalMarginTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalMarginMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalMarginLink: {
		type: "boolean",
		default: true,
	},
	/** End Margin */

	/** Start Background */
	postGlobalBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	postGlobalNormalBackgroundType: {
		type: "string",
		default: "classic",
	},
	postGlobalNormalClassicColor: {
		type: "string",
		default: "",
	},
	postGlobalNormalGradientColor: {
		type: "string",
		default: null,
	},
	postGlobalNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	postGlobalNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	postGlobalHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	postGlobalHoverClassicColor: {
		type: "string",
		default: "",
	},
	postGlobalHoverGradientColor: {
		type: "string",
		default: null,
	},
	postGlobalHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	postGlobalHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Background */

	/** Start Border */
	postGlobalBorder: {
		type: "string",
		default: "none",
	},
	postGlobalBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	postGlobalBorderColor: {
		type: "string",
		default: "",
	},
	postGlobalBorderHoverColor: {
		type: "string",
	},
	postGlobalBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postGlobalBorderDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalBorderTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalBorderMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalBorderLink: {
		type: "boolean",
		default: true,
	},
	/** End Border */

	/** Start Border Radius */
	postGlobalBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postGlobalBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	/** End Border Radius */

	/** Start Box Shadow */
	postGlobalBoxShadowSwitcher: {
		type: "string",
		default: "normal",
	},
	postGlobalBoxShadowValues: {
		type: "array",
		default: [],
	},
	postGlobalBoxShadowCssValue: {
		type: "string",
		default: "",
	},
	postGlobalBoxShadowHoverValues: {
		type: "array",
		default: [],
	},
	postGlobalBoxShadowHoverCssValue: {
		type: "string",
		default: "",
	},

	// Internal
	blockStyle: {
		type: "string",
		default: "",
	},
};

export default attributes;
