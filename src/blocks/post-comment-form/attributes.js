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
	/** Comments Count Title */
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
		},
	},

	commentCountTitleSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	/** End Comments Count Title **/

	/** Start Comment Item **/
	postCommentPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postCommentPaddingDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCommentPaddingTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCommentPaddingMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCommentPaddingLink: {
		type: "boolean",
		default: true,
	},

	/** Nested Item Indentation **/
	nestedIndentation: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},

	nestedIndentationUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	/** Nested Item Indentation **/

	/** Comment List Bottom Spacing **/
	commentListBottomSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	commentListBottomSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	/** Comment List Bottom Spacing **/

	/** Avatar */

	/** Gap */
	avatarGap: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},

	avatarGapUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	/** Size */
	avatarSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	avatarSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	/** Start Padding */
	avatarPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	avatarPaddingDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	avatarPaddingTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	avatarPaddingMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	avatarPaddingLink: {
		type: "boolean",
		default: true,
	},
	/** End Padding */

	/** Start Border */
	avatarBorder: {
		type: "string",
		default: "none",
	},
	// avatarBorderColorSwitcher: {
	// 	type: "string",
	// 	default: "normal",
	// },
	avatarBorderColor: {
		type: "string",
		default: "",
	},
	// avatarBorderHoverColor: {
	// 	type: "string",
	// },
	avatarBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	avatarBorderDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	avatarBorderTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	avatarBorderMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	avatarBorderLink: {
		type: "boolean",
		default: true,
	},
	/** End Border */

	/** Start Border Radius */
	avatarBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	avatarBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	avatarBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	avatarBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	avatarBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	/** End Border Radius */

	/** Start Box Shadow */
	// avatarBoxShadowSwitcher: {
	// 	type: "string",
	// 	default: "normal",
	// },
	avatarBoxShadowValues: {
		type: "array",
		default: [],
	},
	avatarBoxShadowCssValue: {
		type: "string",
		default: "",
	},
	// avatarBoxShadowHoverValues: {
	// 	type: "array",
	// 	default: "",
	// },
	avatarBoxShadowHoverCssValue: {
		type: "string",
		default: "",
	},
	/** End Box Shadow */
	/** End Avatar */

	/** Start Author */
	authorGlobalTypographyData: {
		type: "object",
		default: {},
	},
	authorGlobalTypoSwitcher: {
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
	authorGlobalTypoType: {
		type: "string",
		default: "default",
	},
	authorGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	authorFontFamily: {
		type: "string",
		default: "",
	},
	authorFontSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	authorFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	authorFontWeight: {
		type: "string",
		default: "",
	},
	authorFontStyle: {
		type: "string",
		default: "normal",
	},
	authorTextTransform: {
		type: "string",
		default: "none",
	},
	authorTextDecoration: {
		type: "string",
		default: "none",
	},
	authorLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	authorLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	authorLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	authorLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	authorColorSwitcher: {
		type: "string",
		default: "normal",
	},
	authorColor: {
		type: "string",
		default: "",
	},
	authorHoverColor: {
		type: "string",
		default: "",
	},
	/** End Author */

	/** Start Meta */
	commentMetaGlobalTypographyData: {
		type: "object",
		default: {},
	},
	commentMetaGlobalTypoSwitcher: {
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
	commentMetaGlobalTypoType: {
		type: "string",
		default: "default",
	},
	commentMetaGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	commentMetaFontFamily: {
		type: "string",
		default: "",
	},
	commentMetaFontSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	commentMetaFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	commentMetaFontWeight: {
		type: "string",
		default: "",
	},
	commentMetaFontStyle: {
		type: "string",
		default: "normal",
	},
	commentMetaTextTransform: {
		type: "string",
		default: "none",
	},
	commentMetaTextDecoration: {
		type: "string",
		default: "none",
	},
	commentMetaLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	commentMetaLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	commentMetaLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	commentMetaLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	commentMetaColorSwitcher: {
		type: "string",
		default: "normal",
	},
	commentMetaColor: {
		type: "string",
		default: "",
	},
	commentMetaHoverColor: {
		type: "string",
		default: "",
	},
	/** End Meta */

	/** Message */
	messageGlobalTypographyData: {
		type: "object",
		default: {},
	},
	messageGlobalTypoSwitcher: {
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
	messageGlobalTypoType: {
		type: "string",
		default: "default",
	},
	messageGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	messageFontFamily: {
		type: "string",
		default: "",
	},
	messageFontSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	messageFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	messageFontWeight: {
		type: "string",
		default: "300",
	},
	messageFontStyle: {
		type: "string",
		default: "normal",
	},
	messageTextTransform: {
		type: "string",
		default: "none",
	},
	messageTextDecoration: {
		type: "string",
		default: "none",
	},
	messageLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	messageLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	messageLineHeight: {
		type: "object",
		default: {
			Desktop: "29",
			Tablet: "",
			Mobile: "",
		},
	},
	messageLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	messageColor: {
		type: "string",
		default: "",
	},
	/** End Message */

	/** End Comment Item **/

	/** === Reply Button Attributes ========= */
	replyButtonGlobalTypographyData: {
		type: "object",
		default: {},
	},
	replyButtonGlobalTypoSwitcher: {
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
	replyButtonGlobalTypoType: {
		type: "string",
		default: "default",
	},
	replyButtonGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	replyButtonFontFamily: {
		type: "string",
		default: "",
	},
	replyButtonFontSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	replyButtonFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	replyButtonFontWeight: {
		type: "string",
		default: "",
	},
	replyButtonFontStyle: {
		type: "string",
		default: "normal",
	},
	replyButtonTextTransform: {
		type: "string",
		default: "none",
	},
	replyButtonTextDecoration: {
		type: "string",
		default: "none",
	},
	replyButtonLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	replyButtonLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	replyButtonLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	replyButtonLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	replyButtonColorSwitcher: {
		type: "string",
		default: "normal",
	},
	replyButtonColor: {
		type: "string",
		default: "",
	},
	replyButtonHoverColor: {
		type: "string",
		default: "",
	},

	/** Start Background */
	replyButtonBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	replyButtonNormalBackgroundType: {
		type: "string",
		default: "classic",
	},
	replyButtonNormalClassicColor: {
		type: "string",
		default: "",
	},
	replyButtonNormalGradientColor: {
		type: "string",
		default: null,
	},
	replyButtonNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	replyButtonNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	replyButtonHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	replyButtonHoverClassicColor: {
		type: "string",
		default: "",
	},
	replyButtonHoverGradientColor: {
		type: "string",
		default: null,
	},
	replyButtonHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	replyButtonHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Background */

	
	/** Start Padding */
	replyButtonPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	replyButtonPaddingDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	replyButtonPaddingTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	replyButtonPaddingMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	replyButtonPaddingLink: {
		type: "boolean",
		default: true,
	},
	/** End Padding */

	/** Start Border */
	replyButtonBorder: {
		type: "string",
		default: "none",
	},
	replyButtonBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	replyButtonBorderColor: {
		type: "string",
		default: "",
	},
	replyButtonBorderHoverColor: {
		type: "string",
	},
	replyButtonBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	replyButtonBorderDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	replyButtonBorderTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	replyButtonBorderMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	replyButtonBorderLink: {
		type: "boolean",
		default: true,
	},
	/** End Border */

	/** Start Border Radius */
	replyButtonBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	replyButtonBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	replyButtonBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	replyButtonBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	replyButtonBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	/** End Border Radius */

	/** Start Box Shadow */
	replyButtonBoxShadowSwitcher: {
		type: "string",
		default: "normal",
	},
	replyButtonBoxShadowValues: {
		type: "array",
		default: [],
	},
	replyButtonBoxShadowCssValue: {
		type: "string",
		default: "",
	},
	replyButtonBoxShadowHoverValues: {
		type: "array",
		default: "",
	},
	replyButtonBoxShadowHoverCssValue: {
		type: "string",
		default: "",
	},
	/** End Box Shadow */

	/** === End Reply Button Attributes ========= */

	/** === Start Comment Form Attributes ========= */
	/** Start Background */
	commentFormBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	commentFormNormalBackgroundType: {
		type: "string",
		default: "classic",
	},
	commentFormNormalClassicColor: {
		type: "string",
		default: "",
	},
	commentFormNormalGradientColor: {
		type: "string",
		default: null,
	},
	commentFormNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	commentFormNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	commentFormHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	commentFormHoverClassicColor: {
		type: "string",
		default: "",
	},
	commentFormHoverGradientColor: {
		type: "string",
		default: null,
	},
	commentFormHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	commentFormHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Background */

	
	/** Start Padding */
	commentFormPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	commentFormPaddingDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	commentFormPaddingTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	commentFormPaddingMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	commentFormPaddingLink: {
		type: "boolean",
		default: true,
	},
	/** End Padding */

	/** Start Border */
	commentFormBorder: {
		type: "string",
		default: "none",
	},

	commentFormBorderColor: {
		type: "string",
		default: "",
	},

	commentFormBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	commentFormBorderDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	commentFormBorderTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	commentFormBorderMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	commentFormBorderLink: {
		type: "boolean",
		default: true,
	},
	/** End Border */

	/** Start Border Radius */
	commentFormBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	commentFormBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	commentFormBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	commentFormBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	commentFormBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	/** End Border Radius */

	/** Start Box Shadow */
	commentFormBoxShadowValues: {
		type: "array",
		default: [],
	},
	commentFormBoxShadowCssValue: {
		type: "string",
		default: "",
	},
	/** End Box Shadow */

	/** === End Comment Form Attributes ========= */


	/** === Start Form Header Attributes ========= */
	/** ======= Form Title */
	formTitleGlobalTypographyData: {
		type: "object",
		default: {},
	},
	formTitleGlobalTypoSwitcher: {
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

	formTitleGlobalTypoType: {
		type: "string",
		default: "default",
	},
	formTitleGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	formTitleFontFamily: {
		type: "string",
		default: "",
	},
	formTitleFontSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	formTitleFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	formTitleFontWeight: {
		type: "string",
		default: "600",
	},
	formTitleFontStyle: {
		type: "string",
		default: "normal",
	},
	formTitleTextTransform: {
		type: "string",
		default: "none",
	},
	formTitleTextDecoration: {
		type: "string",
		default: "none",
	},
	formTitleLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	formTitleLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	formTitleLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	formTitleLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	formTitleColor: {
		type: "string",
		default: "",
	},

	formTitleSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},

	formTitleSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	/** === End Form Title */

	/** === Cancel Reply Link */
	cancelReplyGlobalTypographyData: {
		type: "object",
		default: {},
	},
	cancelReplyGlobalTypoSwitcher: {
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
	cancelReplyGlobalTypoType: {
		type: "string",
		default: "default",
	},
	cancelReplyGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	cancelReplyFontFamily: {
		type: "string",
		default: "",
	},
	cancelReplyFontSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	cancelReplyFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	cancelReplyFontWeight: {
		type: "string",
		default: "",
	},
	cancelReplyFontStyle: {
		type: "string",
		default: "normal",
	},
	cancelReplyTextTransform: {
		type: "string",
		default: "none",
	},
	cancelReplyTextDecoration: {
		type: "string",
		default: "none",
	},
	cancelReplyLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	cancelReplyLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	cancelReplyLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	cancelReplyLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	cancelReplyColorSwitcher: {
		type: "string",
		default: "normal",
	},
	cancelReplyColor: {
		type: "string",
		default: "",
	},
	cancelReplyHoverColor: {
		type: "string",
		default: "",
	},

	/** === End Form Header Attributes ========= */


	/** === Start Form Info Attributes ========= */
/** Start Logged In Text */
	loggedInTextGlobalTypographyData: {
		type: "object",
		default: {},
	},
	loggedInTextGlobalTypoSwitcher: {
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
	loggedInTextGlobalTypoType: {
		type: "string",
		default: "default",
	},
	loggedInTextGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	loggedInTextFontFamily: {
		type: "string",
		default: "",
	},
	loggedInTextFontSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	loggedInTextFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	loggedInTextFontWeight: {
		type: "string",
		default: "",
	},
	loggedInTextFontStyle: {
		type: "string",
		default: "normal",
	},
	loggedInTextTextTransform: {
		type: "string",
		default: "none",
	},
	loggedInTextTextDecoration: {
		type: "string",
		default: "none",
	},
	loggedInTextLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	loggedInTextLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	loggedInTextLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	loggedInTextLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	// loggedInTextColorSwitcher: {
	// 	type: "string",
	// 	default: "normal",
	// },
	loggedInTextColor: {
		type: "string",
		default: "",
	},

	loggedInLinkColorSwitcher: {
		type: "string",
		default: "normal", 
	}, 
	loggedInLinkColor: {
		type: "string", 
		default: "",
	}, 
	loggedInLinkHoverColor: {
		type: "string", 
		default: "", 
	},

	formInfoSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},

	formInfoSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	/** End LoggedIn Text **/

		/** Start Background */
	formInfoBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	formInfoNormalBackgroundType: {
		type: "string",
		default: "classic",
	},
	formInfoNormalClassicColor: {
		type: "string",
		default: "",
	},
	formInfoNormalGradientColor: {
		type: "string",
		default: null,
	},
	formInfoNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	formInfoNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	formInfoHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	formInfoHoverClassicColor: {
		type: "string",
		default: "",
	},
	formInfoHoverGradientColor: {
		type: "string",
		default: null,
	},
	formInfoHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	formInfoHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Background */

	
	/** Start Padding */
	formInfoPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	formInfoPaddingDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	formInfoPaddingTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	formInfoPaddingMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	formInfoPaddingLink: {
		type: "boolean",
		default: true,
	},
	/** End Padding */

	
	/** Start Border */
	formInfoBorder: {
		type: "string",
		default: "none",
	},

	formInfoBorderColor: {
		type: "string",
		default: "",
	},

	formInfoBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	formInfoBorderDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	formInfoBorderTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	formInfoBorderMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	formInfoBorderLink: {
		type: "boolean",
		default: true,
	},
	/** End Border */
	
	
	/** Start Border Radius */
	formInfoBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	formInfoBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	formInfoBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	formInfoBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	formInfoBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	/** End Border Radius */


	/** === End Form Info Attributes ========= */




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
