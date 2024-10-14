const attributes = {
	blockId: {
		type: "string",
		default: ""
	},
    deviceType: {
        type: "string",
        default: "Desktop"
    },
	/** Start General Settings */
	/** Start Header */
	pricingTitle: {
		type: "string",
		default: "Startup"
	},
	pricingSubTitleSwitcher: {
		type: "boolean",
		default: false
	},
	pricingSubTitle: {
		type: "string",
		default: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
	},
	pricingIconAlign: {
        type: "string",
        default: "icon",
    },
    pricingIcon: {
		type: 'string',
		default: 'circle-check',
	},
	/** End Header */

	/** Start Pricing */
	normalPrice :{
		type: "string",
		default: "99"
	},
	salePriceSwitcher :{
		type: "boolean",
		default: false
	},
	salePrice :{
		type: "string",
		default: "90"
	},
	priceCurrency :{
		type: "string",
		default: "$"
	},
	priceCurrencyPosition :{
		type: "string",
		default: "left"
	},
	pricePeriod :{
		type: "string",
		default: "month"
	},
	pricePeriodSeparator :{
		type: "string",
		default: "/"
	},
	/** End Pricing */

	/** Start Price list Features */
	priceHideFeaturesSwitcher: {
		type: "boolean",
		default: false
	},
	priceFeatureShowLineSwitcher: {
		type: "boolean",
		default: true
	},
	priceFeatureIconSwitcher: {
		type: "boolean",
		default: true
	},
	priceFeatureItems: {
        type: "array",
        default: [
            // You can define some default items if needed
            { id: 'item-1', Title: 'Feature Item 1', FeatureIcon: 'check', },
            { id: 'item-2', Title: 'Feature Item 2', FeatureIcon: 'check', },
            { id: 'item-3', Title: 'Feature Item 3', FeatureIcon: 'check', },
        ],
        items: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    default: ""
                },
                Title: {
                    type: "string",
                    default: ""
                },
                FeatureIcon: {
                    type: 'string',
                    default: 'check',
                },
                FeatureIconAlign: {
                    type: "string",
                    default: "icon",
                },
            }
        }
    },
	/** End Price list Features */

	/** Start Button */
	priceButtonSwitcher: {
		type: "boolean",
		default: true
	},
    priceButtonText: {
        type: "string",
        default: "Choose Plan",
    },
    priceButtonUrl: {
        type: "string",
        default: "",
    },
    priceButtonTargetUrl: {
        type: "boolean",
    },
	priceButtonIconAlign: {
        type: "string",
        default: "no-icon",
    },
    priceButtonIcon: {
		type: 'string',
		default: 'circle-check',
	},
	priceButtonIconPosition :{
		type: "string",
		default: "left"
	},
	priceButtonIconSpacing: {
		type: "number",
		default: 10
	},
	/** End Button */
	/** Start Ribbon */	
	priceRibbonSwitcher: {
		type: "boolean",
		default: false
	},
	priceRibbonText: {
		type: "string",
		default: "Featured"
	},
	priceRibbonPosition: {
		type: "string",
		default: "right"
	},
	/** End Ribbon */
	/** End General Settings */


	/** Start Style Settings */
	pricingHeaderBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	pricingHeaderBgColor: {
		type: "string",
		default: "#399CFF"
	},
	pricingHeaderBgHoverColor: {
		type: 'string',
	},
	/** Start Padding */
	pricingHeaderPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	pricingHeaderDesktopPadding: {
		type: "object", 
		default: {
			top: '30',
			bottom: '30',
			left: '30',
			right: '30',
		},
	},
	pricingHeaderTabletPadding: {
		type: "object", 
		default: {
			top: '30',
			bottom: '30',
			left: '30',
			right: '30',
		},
	},
	pricingHeaderMobilePadding: {
		type: "object", 
		default: {
			top: '20',
			bottom: '20',
			left: '20',
			right: '20',
		},
	},
	pricingHeaderPaddingLink: {
		type: "boolean",
		default: true
	},
	/** End Padding */
	/** Start Border */
	pricingHeaderBorder: {
		type: 'string',
		default: "none",
	},
	pricingHeaderBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	pricingHeaderBorderColor: {
		type: 'string',
	},
	pricingHeaderBorderHoverColor: {
		type: 'string',
	},
	pricingHeaderBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	pricingHeaderBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingHeaderBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingHeaderBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingHeaderBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	pricingHeaderBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	pricingHeaderBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingHeaderBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingHeaderBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingHeaderBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/**End Header */

	/** Start Icon */
	pricingIconAlignment: {
		type: "string",
		default: "center",
	},
	priceIconColorSwitcher : {
		type: "string",
		default: "normal"
	},
	priceIconColor : { 
		type: "string",
		default: ""
	},
	priceIconHoverColor: {
		type: 'string',
		default: ""
	},
	priceIconBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	priceIconBgColor : {
		type: "string",
		default: ""
	},
	priceIconBgHoverColor: {
		type: 'string',
		default: ""
	},
	priceIconSize: {
		type: 'object',
		default: {
			Desktop: '70',
			Tablet: '70',
			Mobile: '70'
		}
	},
	priceIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	priceIconBgSize: {
		type: 'object',
		default: {
			Desktop: '100',
			Tablet: '100',
			Mobile: '100',
		}
	},
	priceIconBgSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	/** Start Border */
	priceIconBorder: {
		type: 'string',
		default: "none",
	},
	priceIconBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	priceIconBorderColor: {
		type: 'string',
	},
	priceIconBorderHoverColor: {
		type: 'string',
	},
	priceIconBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceIconBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceIconBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceIconBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceIconBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	priceIconBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceIconBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceIconBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceIconBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceIconBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Icon */
	/** End Style Settings */


	/** Start Pricing Style */
	pricingAlignment: {
		type: "string",
		default: "center"
	},
	normalPricingFontFamily: {
        type: "string",
        default: "inherit",
    },
	normalPricingFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	normalPricingFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	normalPricingFontWeight: {
        type: "string",
        default: ""
    },
	normalPricingFontStyle: {
        type: "string",
        default: ""
    },
	normalPricingTextTransform: {
        type: "string",
        default: ""
    },
	normalPricingTextDecoration: {
        type: "string",
        default: ""
    },
	normalPricingLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	normalPricingLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    normalPricingLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	normalPricingLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	normalPricingColorSwitcher: {
		type: "string",
		default: "normal"
	},
	normalPricingColor: {
		type: 'string',
		default: ''
	},
	normalPricingHoverColor: {
		type: 'string',
		default: ''
	},

	salePricingFontFamily: {
        type: "string",
        default: "",
    },
	salePricingFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	salePricingFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	salePricingFontWeight: {
        type: "string",
        default: "",
    },
	salePricingFontStyle: {
        type: "string",
        default: "",
    },
	salePricingTextTransform: {
        type: "string",
        default: "",
    },
	salePricingTextDecoration: {
        type: "string",
        default: "",
    },
	salePricingLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	salePricingLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	salePricingLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	salePricingLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	salePricingColorSwitcher: {
		type: "string",
		default: "normal"
	},
	salePricingColor: {
		type: 'string',
		default: ''
	},
	salePricingHoverColor: {
		type: 'string',
		default: ''
	},

	priceCurrencyFontFamily: {
		type: 'string',
		default: 'inherit'
	},
	priceCurrencyFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	priceCurrencyFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceCurrencyFontWeight: {
		type: 'string',
		default: ''
	},
	priceCurrencyFontStyle: {
		type: 'string',
		default: ''
	},
	priceCurrencyTextTransform: {
		type: 'string',
		default: ''
	},
	priceCurrencyTextDecoration: {
		type: 'string',
		default: ''
	},
	priceCurrencyLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	priceCurrencyLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceCurrencyLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	priceCurrencyLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceCurrencyColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	priceCurrencyColor: {
		type: 'string',
		default: ''
	},
	priceCurrencyHoverColor: {
		type: 'string',
		default: ''
	},

	pricePeriodFontFamily: {
		type: "string",
		default: "inherit"
	},
	pricePeriodFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	pricePeriodFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	pricePeriodFontWeight: {
		type: "string",
		default: ""
	},
	pricePeriodFontStyle: {
		type: "string",
		default: ""
	},
	pricePeriodTextTransform: {
		type: "string",
		default: ""
	},
	pricePeriodTextDecoration: {
		type: "string",
		default: ""
	},
	pricePeriodLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	pricePeriodLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	pricePeriodLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	pricePeriodLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	pricePeriodColorSwitcher: {
		type: "string",
		default: "normal"
	},
	pricePeriodColor: {
		type: 'string',
		default: ''
	},
	pricePeriodHoverColor: {
		type: 'string',
		default: ''
	},
	/** End Pricing Style */

	/**Start Title and Subtitle Style */
	pricingTitleAlignment: {
		type: "string",
		default: "center"
	},
	pricingTitleColorSwitcher: {
		type: "string",
		default: "normal"
	},
	pricingTitleColor: {
		type: 'string',
		default: ''
	},
	pricingTitleHoverColor: {
		type: 'string',
		default: ''
	},
	pricingTitleFontFamily: {
		type: "string",
		default: "",
	},
	pricingTitleFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	pricingTitleFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	pricingTitleFontWeight: {
		type: "string",
		default: ""
	},
	pricingTitleFontStyle: {
		type: "string",
		default: ""
	},
	pricingTitleTextTransform: {
		type: "string",
		default: ""
	},
	pricingTitleTextDecoration: {
		type: "string",
		default: ""
	},
	pricingTitleLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	pricingTitleLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	pricingTitleLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	pricingTitleLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	pricingSubtitleColorSwitcher: {
		type: "string",
		default: "normal"
	},
	pricingSubtitleColor: {
		type: 'string',
		default: ''
	},
	pricingSubtitleHoverColor: {
		type: 'string',
		default: ''
	},
	pricingSubtitleFontFamily: {
		type: "string",
		default: "",
	},
	pricingSubtitleFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	pricingSubtitleFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	pricingSubtitleFontWeight: {
		type: "string",
		default: ""
	},
	pricingSubtitleFontStyle: {
		type: "string",
		default: ""
	},
	pricingSubtitleTextTransform: {
		type: "string",
		default: ""
	},
	pricingSubtitleTextDecoration: {
		type: "string",
		default: ""
	},
	pricingSubtitleLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	pricingSubtitleLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	pricingSubtitleLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	pricingSubtitleLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/**end Title and Subtitle Style */

	/** Start Feature Icon */
	priceFeatureAlignment: {
		type: "string",
		default: "center"
	},
	priceFeatureIconColorSwitcher: {
		type: "string",
		default: "normal"
	},
	priceFeatureIconColor: {
		type: "string",
		default: ""
	},
	priceFeatureIconHoverColor: {
		type: "string",
		default: ""
	},
	priceFeatureIconSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: ""
		}
	},
	priceFeatureIconSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px"
		}
	},
	/** End Feature Icon */

	/** Start Feature Title */
	pricingfeatureTitleColorSwitcher: {
		type: "string",
		default: "normal"
	},
	pricingfeatureTitleColor: {
		type: "string",
		default: ""
	},
	pricingfeatureTitleHoverColor: {
		type: "string",
		default: ""
	},
	pricingfeatureTitleFontFamily: {
		type: "string",
		default: ""
	},
	pricingfeatureTitleFontSize: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: ""
		}
	},
	pricingfeatureTitleFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px"
		}
	},
	pricingfeatureTitleFontWeight: {
		type: "string",
		default: ""
	},
	pricingfeatureTitleFontStyle: {
		type: "string",
		default: ""
	},
	pricingfeatureTitleTextTransform: {
		type: "string",
		default: ""
	},
	pricingfeatureTitleTextDecoration: {
		type: "string",
		default: ""
	},
	pricingfeatureTitleLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: ""
		}
	},
	pricingfeatureTitleLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px"
		}
	},
	pricingfeatureTitleLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: ""
		}
	},
	pricingfeatureTitleLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px"
		}
	},
	/** End feature Title */

	/** Start price Button */
	priceButtonAlignment: {
		type: "string",
		default: "left",
	},
	priceButtonWidth: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	priceButtonWidthUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		}
	},
	priceButtonFontFamily: {
		type: "string",
		default: "inherit",
	},
	priceButtonFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	priceButtonFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	priceButtonFontWeight: {
		type: "string",
		default: ""
	},
	priceButtonFontStyle: {
		type: "string",
		default: ""
	},
	priceButtonTextTransform: {
		type: "string",
		default: ""
	},
	priceButtonTextDecoration: {
		type: "string",
		default: ""
	},
	priceButtonLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	priceButtonLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	priceButtonLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	priceButtonLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	priceButtonColorSwitcher: {
		type: "string",
		default: "normal"
	},
	priceButtonColor: {
		type: "string"
	},
	priceButtonHoverColor: {
		type: 'string',
	},
	priceButtonBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	priceButtonBgColor: {
		type: "string"
	},
	priceButtonBgHoverColor: {
		type: 'string',
	},
	priceButtonPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceButtonDesktopPadding: {
		type: "object", 
		default: {
			top: 12,
			bottom: 12,
			left: 24,
			right: 24,
		},
	},
	priceButtonTabPadding: {
		type: "object", 
		default: {
			top: 12,
			bottom: 12,
			left: 24,
			right: 24,
		},
	},
	priceButtonMobilePadding: {
		type: "object", 
		default: {
			top: 12,
			bottom: 12,
			left: 24,
			right: 24,
		},
	},
	priceButtonPaddingLink: {
		type: "boolean",
		default: true
	},
	priceButtonMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceButtonDesktopMargin: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	priceButtonTabMargin: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	priceButtonMobileMargin: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	priceButtonMarginLink: {
		type: "boolean",
		default: true
	},
	priceButtonBorder: {
		type: 'string',
		default: "none",
	},
	priceButtonBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	priceButtonBorderColor: {
		type: 'string',
	},
	priceButtonBorderHoverColor: {
		type: 'string',
	},
	priceButtonBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceButtonDesktopBorderWidth: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	priceButtonTabBorderWidth: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	priceButtonMobileBorderWidth: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	priceButtonBorderLink: {
		type: "boolean",
		default: true
	},
	priceButtonBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceButtonDesktopBorderRadiusWidth: {
		type: "object", 
		default: {
			top: "4",
			bottom: "4",
			left: "4",
			right: "4",
		},
	},
	priceButtonTabBorderRadiusWidth: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	priceButtonMobileBorderRadiusWidth: {
		type: "object", 
		default: {
			top: "4",
			bottom: "4",
			left: "4",
			right: "4",
		},
	},
	priceButtonBorderRadiusLink: {
		type: "boolean",
		default: true
	},

	priceButtonIconColorSwitcher: {
		type: "string",
		default: "normal"
	},
	priceButtonIconColor: {
		type: "string",
		default: ""
	},
	priceButtonIconHoverColor: {
		type: 'string',
		default: ""
	},
	priceButtonIconSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '14',
			Mobile: '12'
		}
	},
	priceButtonIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End price Button Icon */


	/** Start Global Setting */
	priceGlobalZIndex : {
        type: "number",
    },
	/** Start Padding */
	priceGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceGlobalPaddingDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceGlobalPaddingTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceGlobalPaddingMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceGlobalPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Margin */
	priceGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceGlobalMarginDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceGlobalMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceGlobalMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceGlobalMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

	/** Start Background */
	priceGlobalBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	priceGlobalBgColor : {
		type: "string",
	},
	priceGlobalBgHoverColor: {
		type: 'string',
	},
	/** End Background */

	/** Start Border */
	priceGlobalBorder: {
		type: 'string',
		default: "solid",
	},
	priceGlobalBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	priceGlobalBorderColor: {
		type: 'string',
		default: "#ddd"
	},
	priceGlobalBorderHoverColor: {
		type: 'string',
	},
	priceGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceGlobalBorderDesktop: {
		type: "object", 
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	priceGlobalBorderTablet: {
		type: "object", 
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	priceGlobalBorderMobile: {
		type: "object", 
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	priceGlobalBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	priceGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceGlobalBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	priceGlobalBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	priceGlobalBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	priceGlobalBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
	priceGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    priceGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
	/** End Box Shadow */
	/** End Global Setting */
}

export default attributes;
