const attributes = {
	blockID: {
		type: "string",
		default: "",
	},
	blockStyle: {
		type: "string",
		default: "",
	},
	deviceType: {
		type: "string",
		default: "Desktop",
	},

	highlightColor: {
		type: "string",
		default: "",
	},
	hoverHighlightColor: {
		type: "string",
		default: "",
	},

	imageAccordionIconBorder: {
		type: "string",
		default: "none",
	},
	imageAccordionIconBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	imageAccordionIconBorderColor: {
		type: "string",
	},
	imageAccordionIconBorderHoverColor: {
		type: "string",
	},
	imageAccordionIconBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionIconBorderDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionIconBorderTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionIconBorderMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionIconBorderLink: {
		type: "boolean",
		default: true,
	},
	imageAccordionIconBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionIconBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionIconBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionIconBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionIconBorderRadiusLink: {
		type: "boolean",
		default: true,
	},

	imageAccordionItemGap: {
		type: "object",
		default: {
			Desktop: "20",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionItemGapUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	imageAccordionIconPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionIconPaddingDesktop: {
		type: "object",
		default: {
			top: "20",
			bottom: "20",
			left: "20",
			right: "20",
		},
	},
	imageAccordionIconPaddingTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionIconPaddingMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionIconPaddingLink: {
		type: "boolean",
		default: true,
	},

	titleSpacing: {
		type: "object",
		default: {
			Desktop: "16",
			Tablet: "",
			Mobile: "",
		},
	},
	titleSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	prefixSuffixSpacing: {
		type: "object",
		default: {
			Desktop: "20",
			Tablet: "",
			Mobile: "",
		},
	},
	prefixSuffixSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	titleSuffixIconSize: {
		type: "object",
		default: {
			Desktop: "22",
			Tablet: "",
			Mobile: "",
		},
	},
	titleSuffixIconSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	titleIconSize: {
		type: "object",
		default: {
			Desktop: "22",
			Tablet: "",
			Mobile: "",
		},
	},
	titleIconSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	titlePrefixIconSize: {
		type: "object",
		default: {
			Desktop: "22",
			Tablet: "",
			Mobile: "",
		},
	},
	titlePrefixIconSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	titleGlobalTypographyData: {
		type: "object",
		default: {},
	},
	titleGlobalTypoSwitcher: {
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
	titleGlobalTypoType: {
		type: "string",
		default: "default",
	},
	titleGlobalTypoOption: {
		type: "object",
		default: { label: "Default", value: "default" },
	},
	titleFontFamily: {
		type: "string",
		default: "",
	},
	titleFontSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	titleFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	titleFontWeight: {
		type: "string",
		default: "",
	},
	titleFontStyle: {
		type: "string",
		default: "",
	},
	titleTextTransform: {
		type: "string",
		default: "",
	},
	titleTextDecoration: {
		type: "string",
		default: "",
	},
	titleLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	titleLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	titleLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	titleLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	imageAccordionType: {
		type: "string",
		source: "attribute",
		selector: ".fb-imageAccordion-container",
		attribute: "data-imageAccordion-type",
		default: "imageAccordion",
	},
	displayIcon: {
		type: "boolean",
		default: true,
	},
	tabIconSwitcher: {
		type: "string",
		default: "icon",
	},
	tabIcon: {
		type: "string",
		default: "angle-right",
	},

	/** Start Tab Image */
	tabImageUrl: {
		type: "string",
		default: "",
	},
	tabImageAlt: {
		type: "string",
		default: "",
	},
	tabImageID: {
		type: "string",
		default: "",
	},
	tabImagePosition: {
		type: "string",
		default: "",
	},
	tabImageAttachment: {
		type: "string",
		default: "",
	},
	tabImageRepeat: {
		type: "string",
		default: "",
	},
	tabImageSize: {
		type: "string",
		default: "",
	},
	/** End Tab Image */

	expandedIconSwitcher: {
		type: "string",
		default: "icon",
	},
	expandedIcon: {
		type: "string",
		default: "angle-down",
	},

	/** Start expanded Image */
	expandedImageUrl: {
		type: "string",
		default: "",
	},
	expandedImageAlt: {
		type: "string",
		default: "",
	},
	expandedImageID: {
		type: "string",
		default: "",
	},
	expandedImagePosition: {
		type: "string",
		default: "",
	},
	expandedImageAttachment: {
		type: "string",
		default: "",
	},
	expandedImageRepeat: {
		type: "string",
		default: "",
	},
	expandedImageSize: {
		type: "string",
		default: "",
	},
	/** End expanded Image */

	transitionDuration: {
		type: "number",
		default: 0.5,
	},

	contentAlign: {
		type: "string",
		default: "left",
	},
	titleAlignment: {
		type: "string",
		default: "between",
	},

	contentColor: {
		type: "string",
		default: "",
	},

	iconColor: {
		type: "string",
		default: "",
	},

	iconPosition: {
		type: "string",
		default: "right",
	},

	activeBgColor: {
		type: "string",
		default: "",
	},

	titleColorSwitcher: {
		type: "string",
		default: "normal",
	},
	titleColor: {
		type: "string",
		default: "#000000",
	},
	titleHoverColor: {
		type: "string",
		default: "#FFFFFF",
	},

	titleIconColorSwitcher: {
		type: "string",
		default: "normal",
	},
	titleIconColor: {
		type: "string",
		default: "#000000",
	},
	titleIconHoverColor: {
		type: "string",
		default: "#FFFFFF",
	},

	tagName: {
		type: "string",
		default: "h4",
	},
	imageAccordionChildCount: {
		type: "number",
		default: 3,
	},
	faqSchema: {
		type: "boolean",
		default: false,
	},

	imageAccordionItemsPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionItemsDesktopPadding: {
		type: "object",
		default: {
			top: "20",
			bottom: "20",
			left: "20",
			right: "20",
		},
	},
	imageAccordionItemsTabPadding: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionItemsMobilePadding: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionItemsPaddingLink: {
		type: "boolean",
		default: true,
	},

	imageAccordionItemsBorder: {
		type: "string",
		default: "none",
	},
	imageAccordionItemsBorderColor: {
		type: "string",
	},
	imageAccordionItemsBorderHoverColor: {
		type: "string",
	},
	imageAccordionItemsBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},

	imageAccordionItemsBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionItemsDesktopBorderWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionItemsTabBorderWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionItemsMobileBorderWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionItemsBorderLink: {
		type: "boolean",
		default: true,
	},

	imageAccordionItemsBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionItemsDesktopBorderRadiusWidth: {
		type: "object",
		default: {
			top: "8",
			bottom: "8",
			left: "8",
			right: "8",
		},
	},
	imageAccordionItemsTabBorderRadiusWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionItemsMobileBorderRadiusWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionItemsBorderRadiusLink: {
		type: "boolean",
		default: true,
	},

	imageAccordionZIndex: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},

	imageAccordionOverflow: {
		type: "string",
		default: "default",
	},

	imageAccordionPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionDesktopPadding: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionTabPadding: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionMobilePadding: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionPaddingLink: {
		type: "boolean",
		default: true,
	},

	imageAccordionMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionDesktopMargin: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionTabMargin: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionMobileMargin: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionMarginLink: {
		type: "boolean",
		default: true,
	},

	imageAccordionBorder: {
		type: "string",
		default: "none",
	},
	imageAccordionBorderColor: {
		type: "string",
	},
	imageAccordionBorderHoverColor: {
		type: "string",
	},
	imageAccordionBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},

	imageAccordionBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionDesktopBorderWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionTabBorderWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionMobileBorderWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionBorderLink: {
		type: "boolean",
		default: true,
	},

	imageAccordionBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionDesktopBorderRadiusWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionTabBorderRadiusWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionMobileBorderRadiusWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	imageAccordionDesktopSwitcher: {
		type: "boolean",
		default: false,
	},
	imageAccordionTabletSwitcher: {
		type: "boolean",
		default: false,
	},
	imageAccordionMobileSwitcher: {
		type: "boolean",
		default: false,
	},

	imageAccordionGlobalBoxShadowSwitcher: {
		type: "string",
		default: "normal",
	},
	imageAccordionGlobalBoxShadowValues: {
		type: "array",
		default: [],
	},
	imageAccordionGlobalBoxShadowCssValue: {
		type: "string",
		default: "",
	},
	imageAccordionGlobalHoverBoxShadowValues: {
		type: "array",
		default: [],
	},
	imageAccordionGlobalHoverBoxShadowCssValue: {
		type: "string",
		default: "",
	},

	imageAccordionBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	imageAccordionBgType: {
		type: "string",
		default: "classic",
	},
	imageAccordionBgClassicColor: {
		type: "string",
	},
	imageAccordionBgGradientColor: {
		type: "string",
	},
	imageAccordionBgCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	imageAccordionBgCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	imageAccordionBgColorStyle: {
		type: "string",
		default: "",
	},
	imageAccordionBgImageUrl: {
		type: "string",
		default: "",
	},
	imageAccordionBgImageAlt: {
		type: "string",
		default: "",
	},
	imageAccordionBgImageID: {
		type: "string",
		default: "",
	},
	imageAccordionBgImagePosition: {
		type: "string",
		default: "",
	},
	imageAccordionBgImageAttachment: {
		type: "string",
		default: "",
	},
	imageAccordionBgImageSize: {
		type: "string",
		default: "",
	},
	imageAccordionBgImageRepeat: {
		type: "string",
		default: "",
	},
	imageAccordionBgHoverType: {
		type: "string",
		default: "classic",
	},
	imageAccordionBgHoverClassicColor: {
		type: "string",
	},
	imageAccordionBgHoverGradientColor: {
		type: "string",
	},
	imageAccordionBgHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	imageAccordionBgHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	imageAccordionBgHoverColorStyle: {
		type: "string",
		default: "",
	},
	imageAccordionBgHoverImageUrl: {
		type: "string",
		default: "",
	},
	imageAccordionBgHoverImageAlt: {
		type: "string",
		default: "",
	},
	imageAccordionBgHoverImageID: {
		type: "string",
		default: "",
	},
	imageAccordionBgHoverImagePosition: {
		type: "string",
		default: "",
	},
	imageAccordionBgHoverImageAttachment: {
		type: "string",
		default: "",
	},
	imageAccordionBgHoverImageSize: {
		type: "string",
		default: "",
	},
	imageAccordionBgHoverImageRepeat: {
		type: "string",
		default: "",
	},

	imageAccordionItemBoxShadowSwitcher: {
		type: "string",
		default: "normal",
	},
	imageAccordionItemBoxShadowValues: {
		type: "array",
		default: [],
	},
	imageAccordionItemBoxShadowCssValue: {
		type: "string",
		default: "",
	},
	imageAccordionItemHoverBoxShadowValues: {
		type: "array",
		default: [],
	},
	imageAccordionItemHoverBoxShadowCssValue: {
		type: "string",
		default: "",
	},

	titleBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	titleBgType: {
		type: "string",
		default: "classic",
	},
	titleBgClassicColor: {
		type: "string",
		default: "#EBF5FF",
	},
	titleBgGradientColor: {
		type: "string",
	},
	titleBgCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	titleBgCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	titleBgColorStyle: {
		type: "string",
		default: "",
	},
	titleBgImageUrl: {
		type: "string",
		default: "",
	},
	titleBgImageAlt: {
		type: "string",
		default: "",
	},
	titleBgImageID: {
		type: "string",
		default: "",
	},
	titleBgImagePosition: {
		type: "string",
		default: "",
	},
	titleBgImageAttachment: {
		type: "string",
		default: "",
	},
	titleBgImageSize: {
		type: "string",
		default: "",
	},
	titleBgImageRepeat: {
		type: "string",
		default: "",
	},
	titleBgHoverType: {
		type: "string",
		default: "classic",
	},
	titleBgHoverClassicColor: {
		type: "string",
		default: "#399CFF",
	},
	titleBgHoverGradientColor: {
		type: "string",
	},
	titleBgHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	titleBgHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	titleBgHoverColorStyle: {
		type: "string",
		default: "",
	},
	titleBgHoverImageUrl: {
		type: "string",
		default: "",
	},
	titleBgHoverImageAlt: {
		type: "string",
		default: "",
	},
	titleBgHoverImageID: {
		type: "string",
		default: "",
	},
	titleBgHoverImagePosition: {
		type: "string",
		default: "",
	},
	titleBgHoverImageAttachment: {
		type: "string",
		default: "",
	},
	titleBgHoverImageSize: {
		type: "string",
		default: "",
	},
	titleBgHoverImageRepeat: {
		type: "string",
		default: "",
	},

	contentPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	contentDesktopPadding: {
		type: "object",
		default: {
			top: "20",
			bottom: "20",
			left: "20",
			right: "20",
		},
	},
	contentTabPadding: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	contentMobilePadding: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	contentPaddingLink: {
		type: "boolean",
		default: true,
	},

	contentMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	contentDesktopMargin: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	contentTabMargin: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	contentMobileMargin: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	contentMarginLink: {
		type: "boolean",
		default: true,
	},

	contentBorder: {
		type: "string",
		default: "none",
	},
	contentBorderColor: {
		type: "string",
	},
	contentBorderHoverColor: {
		type: "string",
	},
	contentBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},

	contentBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	contentDesktopBorderWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	contentTabBorderWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	contentMobileBorderWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	contentBorderLink: {
		type: "boolean",
		default: true,
	},

	contentBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	contentDesktopBorderRadiusWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	contentTabBorderRadiusWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	contentMobileBorderRadiusWidth: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	contentBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	contentDesktopSwitcher: {
		type: "boolean",
		default: false,
	},
	contentTabletSwitcher: {
		type: "boolean",
		default: false,
	},
	contentMobileSwitcher: {
		type: "boolean",
		default: false,
	},

	contentBoxShadowSwitcher: {
		type: "string",
		default: "normal",
	},
	contentBoxShadowValues: {
		type: "array",
		default: [],
	},
	contentBoxShadowCssValue: {
		type: "string",
		default: "",
	},
	contentHoverBoxShadowValues: {
		type: "array",
		default: [],
	},
	contentHoverBoxShadowCssValue: {
		type: "string",
		default: "",
	},

	contentBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	contentBgType: {
		type: "string",
		default: "classic",
	},
	contentBgClassicColor: {
		type: "string",
	},
	contentBgGradientColor: {
		type: "string",
	},
	contentBgCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	contentBgCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	contentBgColorStyle: {
		type: "string",
		default: "",
	},
	contentBgImageUrl: {
		type: "string",
		default: "",
	},
	contentBgImageAlt: {
		type: "string",
		default: "",
	},
	contentBgImageID: {
		type: "string",
		default: "",
	},
	contentBgImagePosition: {
		type: "string",
		default: "",
	},
	contentBgImageAttachment: {
		type: "string",
		default: "",
	},
	contentBgImageSize: {
		type: "string",
		default: "",
	},
	contentBgImageRepeat: {
		type: "string",
		default: "",
	},
	contentBgHoverType: {
		type: "string",
		default: "classic",
	},
	contentBgHoverClassicColor: {
		type: "string",
	},
	contentBgHoverGradientColor: {
		type: "string",
	},
	contentBgHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	contentBgHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	contentBgHoverColorStyle: {
		type: "string",
		default: "",
	},
	contentBgHoverImageUrl: {
		type: "string",
		default: "",
	},
	contentBgHoverImageAlt: {
		type: "string",
		default: "",
	},
	contentBgHoverImageID: {
		type: "string",
		default: "",
	},
	contentBgHoverImagePosition: {
		type: "string",
		default: "",
	},
	contentBgHoverImageAttachment: {
		type: "string",
		default: "",
	},
	contentBgHoverImageSize: {
		type: "string",
		default: "",
	},
	contentBgHoverImageRepeat: {
		type: "string",
		default: "",
	},

	/** Start Class & ID Setting */
	imageAccordionCustomCSS: {
		type: "string",
		default: "",
	},
	imageAccordionGlobalWraperID: {
		type: "string",
		default: "",
	},

	imageAccordionGlobalWraperClass: {
		type: "string",
		default: "",
	},
	/** End Class & ID Setting */

	imageAccordionPositionType: {
		type: "string",
		default: "default",
	},
	imageAccordionHZOrientationType: {
		type: "string",
		default: "left",
	},
	imageAccordionVROrientationType: {
		type: "string",
		default: "top",
	},
	imageAccordionHZLeftOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionHZLeftOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionHZRightOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionHZRightOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionVRTopOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionVRTopOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionVRBottomOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionVRBottomOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	imageAccordionPresetStyle: {
		type: "string",
		default: "preset-1",
	},
};

export default attributes;
