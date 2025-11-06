// attributes.js
const attributes = {
	blockId: {
		type: "string",
		default: "",
	},
	blockStyle: {
		type: "string",
		default: "",
	},
	premadeStyle: {
		type: "string",
		default: "style-1",
	},
	taxonomyType: {
		type: "string",
		default: "", // Default taxonomy
	},
	showCount: {
		type: "boolean",
		default: true,
	},
	showDescription: {
		type: "boolean",
		default: true,
	},
	showEmpty: {
		type: "boolean",
		default: false,
	},
	showChildCategories: {
		type: "boolean",
		default: false,
	},
	includeTaxonomies: {
		type: "array",
		default: [],
	},
	excludeTaxonomies: {
		type: "array",
		default: [],
	},
	selectionType: {
		type: "string",
		default: "none", // 'none', 'include', 'exclude'
	},
	orderBy: {
		type: "string",
		default: "name", // 'name', 'count', 'slug', 'term_id'
	},
	sortOrder: {
		type: "string",
		default: "asc", // 'asc', 'desc'
	},
	perPage: {
		type: "number",
		default: 6,
	},

	// Layout settings with responsive values
	layoutType: {
		type: "string",
		default: "grid", // 'grid', 'list'
	},
	gridColumns: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: 2,
			Mobile: 1,
		},
	},
	gridGapUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	gridRowGap: {
		type: "object",
		default: {
			Desktop: 20,
			Tablet: 15,
			Mobile: 10,
		},
	},
	gridColumnGap: {
		type: "object",
		default: {
			Desktop: 20,
			Tablet: 15,
			Mobile: 10,
		},
	},
	listStyle: {
		type: "string",
		default: "bullet", // 'none', 'bullet', 'number'
	},
	listIndentation: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	listIndentationUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	readMoreSwitcher: {
		type: "boolean",
		default: false,
	},
	readMoreText: {
		type: "string",
		default: "View All",
	},
	readMoreIconAlign: {
		type: "string",
		default: "none",
	},
	readMoreIcon: {
		type: "string",
		default: "arrow-right",
	},
	readMoreIconFrontend: {
		type: "string",
	},
	readMoreIconImageUrl: {
		type: "string",
		default: "",
	},
	readMoreIconImageAlt: {
		type: "string",
		default: "",
	},
	readMoreIconImageID: {
		type: "string",
		default: "",
	},

	readMoreIconImagedisplay: {
		type: "string",
		default: "cover",
	},

	/**  ===================================================================== */

	taxonomyHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},

	taxonomyHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	/** Start Padding */
	postCategoryPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postCategoryPaddingDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCategoryPaddingTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCategoryPaddingMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCategoryPaddingLink: {
		type: "boolean",
		default: true,
	},
	/** End Padding */

	/** Start Margin */
	postCategoryMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postCategoryMarginDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCategoryMarginTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCategoryMarginMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCategoryMarginLink: {
		type: "boolean",
		default: true,
	},
	/** End Margin */

	/** Start Border */
	postCategoryBorder: {
		type: "string",
		default: "none",
	},
	postCategoryBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	postCategoryBorderColor: {
		type: "string",
		default: "",
	},
	postCategoryBorderHoverColor: {
		type: "string",
	},
	postCategoryBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postCategoryBorderDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCategoryBorderTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCategoryBorderMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCategoryBorderLink: {
		type: "boolean",
		default: true,
	},
	/** End Border */

	/** Start Border Radius */
	postCategoryBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postCategoryBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCategoryBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCategoryBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCategoryBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	/** End Border Radius */

	/** Start Box Shadow */
	postCategoryBoxShadowSwitcher: {
		type: "string",
		default: "normal",
	},
	postCategoryBoxShadowValues: {
		type: "array",
		default: [],
	},
	postCategoryBoxShadowCssValue: {
		type: "string",
		default: "",
	},
	postCategoryBoxShadowHoverValues: {
		type: "array",
		default: [],
	},
	postCategoryBoxShadowHoverCssValue: {
		type: "string",
		default: "",
	},
	/** End Box Shadow */

	/** Start Background */
	postCategoryBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	postCategoryNormalBackgroundType: {
		type: "string",
		default: "classic",
	},
	postCategoryNormalClassicColor: {
		type: "string",
		default: "",
	},
	postCategoryNormalGradientColor: {
		type: "string",
		default: null,
	},
	postCategoryNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	postCategoryNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	postCategoryHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	postCategoryHoverClassicColor: {
		type: "string",
		default: "",
	},
	postCategoryHoverGradientColor: {
		type: "string",
		default: null,
	},
	postCategoryHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	postCategoryHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Background */

	/** Start Title */
	postTitleGlobalTypographyData: {
		type: "object",
		default: {},
	},
	postTitleGlobalTypoSwitcher: {
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
	postTitleGlobalTypoType: {
		type: "string",
		default: "default",
	},
	postTitleGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	postTitleFontFamily: {
		type: "string",
		default: "Onest",
	},
	postTitleFontSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postTitleFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postTitleFontWeight: {
		type: "string",
		default: "",
	},
	postTitleFontStyle: {
		type: "string",
		default: "normal",
	},
	postTitleTextTransform: {
		type: "string",
		default: "none",
	},
	postTitleTextDecoration: {
		type: "string",
		default: "none",
	},
	postTitleLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postTitleLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postTitleLineHeight: {
		type: "object",
		default: {
			Desktop: "30",
			Tablet: "",
			Mobile: "",
		},
	},
	postTitleLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	postTitleColorSwitcher: {
		type: "string",
		default: "normal",
	},
	postTitleColor: {
		type: "string",
		default: "",
	},
	postTitleHoverColor: {
		type: "string",
		default: "",
	},

	/** End Title */

	/** Start Description */
	postDescriptionGlobalTypographyData: {
		type: "object",
		default: {},
	},
	postDescriptionGlobalTypoSwitcher: {
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
	postDescriptionGlobalTypoType: {
		type: "string",
		default: "default",
	},
	postDescriptionGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	postDescriptionFontFamily: {
		type: "string",
		default: "Work Sans",
	},
	postDescriptionFontSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postDescriptionFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postDescriptionFontWeight: {
		type: "string",
		default: "400",
	},
	postDescriptionFontStyle: {
		type: "string",
		default: "normal",
	},
	postDescriptionTextTransform: {
		type: "string",
		default: "none",
	},
	postDescriptionTextDecoration: {
		type: "string",
		default: "none",
	},
	postDescriptionLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postDescriptionLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postDescriptionLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postDescriptionLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	postDescriptionColorSwitcher: {
		type: "string",
		default: "normal",
	},
	postDescriptionColor: {
		type: "string",
		default: "",
	},
	postDescriptionHoverColor: {
		type: "string",
		default: "",
	},

	postDescriptionSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postDescriptionSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	postDescriptionExcerptLength: {
		type: "number",
		default: 10,
	},
	/** End Description */

	/** Start Count */
	postCountGlobalTypographyData: {
		type: "object",
		default: {},
	},
	postCountGlobalTypoSwitcher: {
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
	postCountGlobalTypoType: {
		type: "string",
		default: "default",
	},
	postCountGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	postCountFontFamily: {
		type: "string",
		default: "Manrope",
	},
	postCountFontSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postCountFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postCountFontWeight: {
		type: "string",
		default: "",
	},
	postCountFontStyle: {
		type: "string",
		default: "normal",
	},
	postCountTextTransform: {
		type: "string",
		default: "none",
	},
	postCountTextDecoration: {
		type: "string",
		default: "none",
	},
	postCountLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postCountLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postCountLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postCountLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	postCountColorSwitcher: {
		type: "string",
		default: "normal",
	},
	postCountColor: {
		type: "string",
		default: "",
	},
	postCountHoverColor: {
		type: "string",
		default: "",
	},
	postCountSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		}
	},
	postCountSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		}
	},
	/** End Count */

	/** Start Button Text Style */
	buttonWidth: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	buttonWidthUnits: {
		type: "object",
		default: {
			Desktop: "%",
			Tablet: "%",
			Mobile: "%",
		},
	},

	buttonGlobalTypographyData: {
		type: "object",
		default: {},
	},
	buttonGlobalTypoSwitcher: {
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
	buttonGlobalTypoType: {
		type: "string",
		default: "default",
	},
	buttonGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	buttonFontFamily: {
		type: "string",
		default: "Onest",
	},
	buttonFontSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	buttonFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	buttonFontWeight: {
		type: "string",
		default: "500",
	},
	buttonFontStyle: {
		type: "string",
		default: "",
	},
	buttonTextTransform: {
		type: "string",
		default: "",
	},
	buttonTextDecoration: {
		type: "string",
		default: "",
	},
	buttonLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	buttonLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	buttonLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	buttonLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	buttonColorSwitcher: {
		type: "string",
		default: "normal",
	},
	buttonColor: {
		type: "string",
		default: "",
	},
	buttonHoverColor: {
		type: "string",
	},
	buttonBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	buttonBgColor: {
		type: "string",
		default: "",
	},
	buttonBgHoverColor: {
		type: "string",
	},
	buttonBorder: {
		type: "string",
		default: "",
	},
	buttonBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	buttonBorderColor: {
		type: "string",
		default: "",
	},
	buttonBorderHoverColor: {
		type: "string",
	},
	buttonBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	buttonDesktopBorderWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonTabBorderWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonMobileBorderWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonBorderLink: {
		type: "boolean",
		default: true,
	},
	buttonBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	buttonDesktopBorderRadiusWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonTabBorderRadiusWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonMobileBorderRadiusWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	buttonBoxShadowSwitcher: {
		type: "string",
		default: "normal",
	},
	buttonBoxShadowValues: {
		type: "array",
		default: [],
	},
	buttonBoxShadowCssValue: {
		type: "string",
		default: "",
	},
	buttonBoxShadowHoverValues: {
		type: "array",
		default: [],
	},
	buttonBoxShadowHoverCssValue: {
		type: "string",
		default: "",
	},
	buttonPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	buttonDesktopPadding: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonTabPadding: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonMobilePadding: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonPaddingLink: {
		type: "boolean",
		default: true,
	},
	buttonMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	buttonDesktopMargin: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonTabMargin: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonMobileMargin: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonMarginLink: {
		type: "boolean",
		default: true,
	},
	/** End Style */

	/** Icon Styles */
	buttonIconSize: {
		type: "object",
		default: {
			Desktop: "16",
			Tablet: "",
			Mobile: "",
		},
	},
	buttonIconSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	buttonIconColorSwitcher: {
		type: "string",
		default: "normal",
	},
	buttonIconColor: {
		type: "string",
		default: "",
	},
	buttonIconHoverColor: {
		type: "string",
		default: "",
	},

	buttonIconBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	buttonIconBgColor: {
		type: "string",
		default: "",
	},
	buttonIconBgHoverColor: {
		type: "string",
		default: "",
	},
	buttonIconBorder: {
		type: "string",
		default: "",
	},
	buttonIconBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	buttonIconBorderColor: {
		type: "string",
	},
	buttonIconBorderHoverColor: {
		type: "string",
	},
	buttonIconBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	buttonIconBorderDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonIconBorderTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonIconBorderMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonIconBorderLink: {
		type: "boolean",
		default: true,
	},
	buttonIconBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	buttonIconBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonIconBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonIconBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonIconBorderRadiusLink: {
		type: "boolean",
		default: true,
	},

	buttonIconPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	buttonIconDesktopPadding: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonIconTabPadding: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonIconMobilePadding: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	buttonIconPaddingLink: {
		type: "boolean",
		default: true,
	},

	buttonIconGapSize: {
		type: "object",
		default: {
			Desktop: "10",
			Tablet: "",
			Mobile: "",
		},
	},
	buttonIconGapUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	buttonIconRotateSwitcher: {
		type: "string",
		default: "normal",
	},
	buttonIconRotate: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	buttonIconRotateHover: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},

	buttonImageRotateSwitcher: {
		type: "string",
		default: "normal",
	},
	buttonImageRotate: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	buttonImageRotateHover: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},

	buttonIconImageWidth: {
		type: "object",
		default: {
			Desktop: "20",
			Tablet: "",
			Mobile: "",
		},
	},
	buttonIconImageWidthUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	buttonIconImageHeight: {
		type: "object",
		default: {
			Desktop: "20",
			Tablet: "",
			Mobile: "",
		},
	},
	buttonIconImageHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	/** End Icon Styles */

	/** Layout Type List Styles */

	/** Bullet/Numbers Color */
	postListTypeColorSwitcher: {
		type: "string",
		default: "normal",
	},
	postListTypeColor: {
		type: "string",
		default: "",
	},
	postListTypeHoverColor: {
		type: "string",
		default: "",
	},

	postListItemSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},

	postListItemSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	/** Separator */
	separatorStyle: {
		type: "string",
		default: "none",
	},
	separatorWidth: {
		type: "object",
		default: {
			Desktop: "100",
			Tablet: "",
			Mobile: "",
		},
	},
	separatorWidthUnits: {
		type: "object",
		default: {
			Desktop: "%",
			Tablet: "%",
			Mobile: "%",
		},
	},
	separatorThickness: {
		type: "object",
		default: {
			Desktop: "1",
			Tablet: "",
			Mobile: "",
		},
	},
	separatorThicknessUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	separatorColorSwitcher: {
		type: "string",
		default: "normal",
	},
	separatorColor: {
		type: "string",
	},
	separatorHoverColor: {
		type: "string",
	},

	/** Start Background */
	postCountBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	postCountNormalBackgroundType: {
		type: "string",
		default: "classic",
	},
	postCountNormalClassicColor: {
		type: "string",
		default: "",
	},
	postCountNormalGradientColor: {
		type: "string",
		default: null,
	},
	postCountNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	postCountNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	postCountHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	postCountHoverClassicColor: {
		type: "string",
		default: "",
	},
	postCountHoverGradientColor: {
		type: "string",
		default: null,
	},
	postCountHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	postCountHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Background */

	/** Start Padding */
	postCountPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postCountPaddingDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCountPaddingTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCountPaddingMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCountPaddingLink: {
		type: "boolean",
		default: true,
	},
	/** End Padding */

	/** Start Border */
	postCountBorder: {
		type: "string",
		default: "none",
	},
	postCountBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	postCountBorderColor: {
		type: "string",
		default: "",
	},
	postCountBorderHoverColor: {
		type: "string",
	},
	postCountBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postCountBorderDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCountBorderTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCountBorderMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCountBorderLink: {
		type: "boolean",
		default: true,
	},
	/** End Border */

	/** Start Border Radius */
	postCountBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postCountBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCountBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCountBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postCountBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	/** End Border Radius */

	/** Start Box Shadow */
	postCountBoxShadowSwitcher: {
		type: "string",
		default: "normal",
	},
	postCountBoxShadowValues: {
		type: "array",
		default: [],
	},
	postCountBoxShadowCssValue: {
		type: "string",
		default: "",
	},
	postCountBoxShadowHoverValues: {
		type: "array",
		default: "",
	},
	postCountBoxShadowHoverCssValue: {
		type: "string",
		default: "",
	},
	/** End Box Shadow */
	/** End Layout Type List Styles */

	/** Start Class & ID Setting */
	postCategoryGlobalCustomCSS: {
		type: "string",
		default: "",
	},
	postCategoryGlobalWraperID: {
		type: "string",
		default: "",
	},

	postCategoryGlobalWraperClass: {
		type: "string",
		default: "",
	},
	/** End Class & ID Setting */

	/** Start Global Setting */
	postGlobalZIndex: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postCategoryOverflow: {
		type: "string",
		default: "default",
	},

	/** position */
	postCategoryPositionType: {
		type: "string",
		default: "default",
	},
	postCategoryHZOrientationType: {
		type: "string",
		default: "left",
	},
	postCategoryVROrientationType: {
		type: "string",
		default: "top",
	},
	postCategoryHZLeftOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postCategoryHZLeftOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postCategoryHZRightOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postCategoryHZRightOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postCategoryVRTopOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postCategoryVRTopOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postCategoryVRBottomOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postCategoryVRBottomOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

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

	/** Responsive Control */
	postCategoryDesktopSwitcher: {
		type: "boolean",
		default: false,
	},
	postCategoryTabletSwitcher: {
		type: "boolean",
		default: false,
	},
	postCategoryMobileSwitcher: {
		type: "boolean",
		default: false,
	},
};

export default attributes;
