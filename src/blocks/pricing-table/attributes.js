const attributes = {
	blockId: {
		type: "string",
		default: ""
	},
    deviceType: {
        type: "string",
        default: "Desktop"
    },
	blockStyle: {
		type: "string",
		default: ""
	},
	/** Start General Settings */

	/** Start Top Section */

	/** Start Background */
	pricingTopSectionBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	pricingTopSectionNormalBackgroundType: { 
		type: "string",
		default: "classic",
	},
	pricingTopSectionNormalClassicColor: {
		type: "string",
		default: "#399CFF",
	},
	pricingTopSectionNormalGradientColor: {
		type: "string",
		default: null,
	},
	pricingTopSectionNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	pricingTopSectionNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	pricingTopSectionHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	pricingTopSectionHoverClassicColor: {
		type: "string",
		default: "",
	},
	pricingTopSectionHoverGradientColor: {
		type: "string",
		default: null,
	},
	pricingTopSectionHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	pricingTopSectionHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Background */
	
	pricingTopSectionPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	pricingTopSectionDesktopPadding: {
		type: "object", 
		default: {
			top: '5',
			bottom: '5',
			left: '5',
			right: '5',
		},
	},
	pricingTopSectionTabletPadding: {
		type: "object", 
		default: {
			top: '5',
			bottom: '5',
			left: '5',
			right: '5',
		},
	},
	pricingTopSectionMobilePadding: {
		type: "object", 
		default: {
			top: '5',
			bottom: '5',
			left: '5',
			right: '5',
		},
	},
	pricingTopSectionPaddingLink: {
		type: "boolean",
		default: true
	},
	pricingTopSectionBorder: {
		type: 'string',
		default: "none",
	},
	pricingTopSectionBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	pricingTopSectionBorderColor: {
		type: 'string',
	},
	pricingTopSectionBorderHoverColor: {
		type: 'string',
	},
	pricingTopSectionBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	pricingTopSectionBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingTopSectionBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingTopSectionBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingTopSectionBorderLink: {
		type: "boolean",
		default: true
	},
	pricingTopSectionBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	pricingTopSectionBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '30',
			bottom: '30',
			left: '30',
			right: '30',
		},
	},
	pricingTopSectionBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '30',
			bottom: '30',
			left: '30',
			right: '30',
		},
	},
	pricingTopSectionBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '30',
			bottom: '30',
			left: '30',
			right: '30',
		},
	},
	pricingTopSectionBorderRadiusLink: {
		type : "boolean",
		default: true
	},

	/** Start Text */
	pricingTopSectionTextColorSwitcher: {
		type: "string",
		default: "normal",
	},
	pricingTopSectionTextColor: {
		type: 'string',
		default: "#FFFFFF",
	},
	pricingTopSectionTextHoverColor: {
		type: 'string',
		default: "#FFFFFF",
	},
	pricingTopSectionTextFontFamily: {
		type: 'string',
		default: "Default",
	},
	pricingTopSectionTextFontSize: {
		type: 'object',
		default: {
			Desktop: '24',
			Tablet: '24',
			Mobile: '24',
		},
	},
	pricingTopSectionTextFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	pricingTopSectionTextFontWeight: {
		type: 'string',
		default: '600',
	},
	pricingTopSectionTextFontStyle: {
		type: 'string',
		default: 'normal',
	},
	pricingTopSectionTextTextTransform: {
		type: 'string',
		default: 'normal',
	},
	pricingTopSectionTextTextDecoration: {
		type: 'string',
		default: 'none',
	},
	pricingTopSectionTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	pricingTopSectionTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	pricingTopSectionTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '30',
			Tablet: '30',
			Mobile: '30',
		},
	},
	pricingTopSectionTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	pricingTopSectionTextPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	pricingTopSectionTextDesktopPadding: {
		type: "object", 
		default: {
			top: '20',
			bottom: '20',
			left: '0',
			right: '0',
		},
	},
	pricingTopSectionTextTabletPadding: {
		type: "object", 
		default: {
			top: '20',
			bottom: '20',
			left: '0',
			right: '0',
		},
	},
	pricingTopSectionTextMobilePadding: {
		type: "object", 
		default: {
			top: '20',
			bottom: '20',
			left: '0',
			right: '0',
		},
	},
	pricingTopSectionTextPaddingLink: {
		type: "boolean",
		default: true
	},
	/** End Top Section */

	/** Start Header */
	pricingSectionTopSwitcher: {
		type: "boolean",
		default: false
	},
	pricingSectionTopText: {
		type: "string",
		default: "Best Deal"
	},
	pricingTitleTag: {
		type: "string",
		default: "h2"
	},
	pricingTitle: {
		type: "string",
		default: "Basic Plan"
	},
	pricingSubTitleSwitcher: {
		type: "boolean",
		default: true
	},
	pricingSubTitleTag: { 
		type: "string",
		default: "span"
	},
	pricingSubTitle: {
		type: "string",
		default: "Best for Business Owners."
	},
	pricingIconAlign: {
        type: "string",
        default: "none",
    },
    pricingIcon: {
		type: 'string',
		default: 'bookmark',
	},
	/** End Header */

	/** Start Pricing */
	normalPrice :{
		type: "string",
		default: "49.00"
	},
	salePriceSwitcher :{
		type: "boolean",
		default: false
	},
	salePrice :{
		type: "string",
		default: "45.00"
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
        default: "Select Plan",
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
        default: "none",
    },
    priceButtonIcon: {
		type: 'string',
		default: 'arrow-right',
	},
	priceButtonIconPosition :{
		type: "string",
		default: "right"
	},
	priceButtonIconSpacing: {
		type: "object",
		default: {
			Desktop: '10',
			Tablet: '10',
			Mobile: '10',
		}
	},
	priceButtonIconSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Button */
	/** End General Settings */


	/** Start Style Settings */
	pricingHeaderBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	pricingHeaderBgColor: {
		type: "string",
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
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	pricingHeaderTabletPadding: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	pricingHeaderMobilePadding: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
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
		default: "left",
	},
	priceIconColorSwitcher : {
		type: "string",
		default: "normal"
	},
	priceIconColor : { 
		type: "string",
		default: "#399CFF"
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
			Desktop: '30',
			Tablet: '30',
			Mobile: '30'
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
			Desktop: '30',
			Tablet: '30',
			Mobile: '30',
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
	priceIconPositionSwitcher: {
		type: "boolean",
		default: false
	},
	priceIconPositionTop: {
		type: "object",
		default: {
			Desktop: '5',
			Tablet: '5',
			Mobile: '4',
		}
	},
	priceIconPositionTopUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		}
	},
	priceIconPositionLeft: {
		type: "object",
		default: {
			Desktop: '90',
			Tablet: '90',
			Mobile: '85',
		}
	},
	priceIconPositionLeftUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
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
		default: "left"
	},
	normalPricingFontFamily: {
        type: "string",
        default: "Default",
    },
	normalPricingFontSize: {
		type: 'object',
		default: {
			Desktop: '40',
			Tablet: '40',
			Mobile: '20'
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
        default: "700"
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
		default: '#399CFF'
	},
	normalPricingHoverColor: {
		type: 'string',
		default: ''
	},

	salePricingFontFamily: {
        type: "string",
        default: "Default",
    },
	salePricingFontSize: {
		type: 'object',
		default: {
			Desktop: '42',
			Tablet: '42',
			Mobile: '20'
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
        default: "700",
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
		default: '#15171C'
	},
	salePricingHoverColor: {
		type: 'string',
		default: ''
	},

	priceCurrencyFontFamily: {
		type: 'string',
		default: 'Default'
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
		default: "Default"
	},
	pricePeriodFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '16',
			Mobile: '16'
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
		default: "400"
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
		default: '#6A758E'
	},
	pricePeriodHoverColor: {
		type: 'string',
		default: ''
	},


	pricePaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceDesktopPadding: {
		type: "object", 
		default: {
			top: 32,
			bottom: 42,
			left: 0,
			right: 0,
		},
	},
	priceTabletPadding: {
		type: "object", 
		default: {
			top: 32,
			bottom: 42,
			left: 0,
			right: 0,
		},
	},
	priceMobilePadding: {
		type: "object", 
		default: {
			top: 32,
			bottom: 42,
			left: 0,
			right: 0,
		},
	},
	pricePaddingLink: {
		type: "boolean",
		default: true
	},


	/** End Pricing Style */

	/**Start Title and Subtitle Style */
	pricingTitleAlignment: {
		type: "string",
		default: "left"
	},
	pricingTitleColorSwitcher: {
		type: "string",
		default: "normal"
	},
	pricingTitleColor: {
		type: 'string',
		default: '#15171C'
	},
	pricingTitleHoverColor: {
		type: 'string',
		default: ''
	},
	pricingTitleFontFamily: {
		type: "string",
		default: "Default",
	},
	pricingTitleFontSize: {
		type: 'object',
		default: {
			Desktop: '24',
			Tablet: '24',
			Mobile: '20'
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
		default: "600"
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
		default: '#6A758E'
	},
	pricingSubtitleHoverColor: {
		type: 'string',
		default: ''
	},
	pricingSubtitleFontFamily: {
		type: "string",
		default: "Default",
	},
	pricingSubtitleFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '16',
			Mobile: '16'
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
		default: "500"
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
		default: "left"
	},
	priceFeatureIconColorSwitcher: {
		type: "string",
		default: "normal"
	},
	priceFeatureIconColor: {
		type: "string",
		default: "#6A758E"
	},
	priceFeatureIconHoverColor: {
		type: "string",
		default: ""
	},
	priceFeatureIconSize: {
		type: "object",
		default: {
			Desktop: "16",
			Tablet: "16",
			Mobile: "16"
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
		default: "#6A758E"
	},
	pricingfeatureTitleHoverColor: {
		type: "string",
		default: ""
	},
	pricingfeatureTitleFontFamily: {
		type: "string",
		default: "Default"
	},
	pricingfeatureTitleFontSize: {
		type: "object",
		default: {
			Desktop: "16",
			Tablet: "16",
			Mobile: "16"
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
	/** End Feature Title */

	/** Start Feature Item Padding */
	priceFeatureItemPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceFeatureItemDesktopPadding: {
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '0',
			right: '0',
		},
	},
	priceFeatureItemTabPadding: {
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '0',
			right: '0',
		},
	},
	priceFeatureItemMobilePadding: {
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '0',
			right: '0',
		},
	},
	priceFeatureItemPaddingLink: {
		type: "boolean",
		default: true
	},
	/** End Feature Item Padding */

	/** Start Feature Margin */
	priceFeatureItemMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceFeatureItemDesktopMargin: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceFeatureItemTabMargin: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceFeatureItemMobileMargin: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceFeatureItemMarginLink: {
		type: "boolean",
		default: true
	},
	/** End Feature Margin */

	/** Start Feature Border */
	priceFeatureItemBorderBottom: {
		type: "boolean",
		default: true
	},
	priceFeatureItemBorder: {
		type: 'string',
		default: "solid",
	},
	priceFeatureItemBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	priceFeatureItemBorderColor: {
		type: "string",
		default: "#E1E3E8"
	},
	priceFeatureItemBorderHoverColor: {
		type: "string",
		default: ""
	},
	/** End Feature Border */

	/** Start Feature Border */
	priceFeatureItemBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceFeatureItemDesktopBorder: {
		type: "object", 
		default: {
			top: '0',
			bottom: '1',
			left: '0',
			right: '0',
		},
	},
	priceFeatureItemTabBorder: {
		type: "object", 
		default: {
			top: '0',
			bottom: '1',
			left: '0',
			right: '0',
		},
	},
	priceFeatureItemMobileBorder: {
		type: "object", 
		default: {
			top: '0',
			bottom: '1',
			left: '0',
			right: '0',
		},
	},
	priceFeatureItemBorderLink: {
		type: "boolean",
		default: true
	},
	/** End Feature Border */

	/** Start Feature Border */
	priceFeatureItemBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceFeatureItemDesktopBorderRadius: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceFeatureItemTabBorderRadius: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceFeatureItemMobileBorderRadius: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceFeatureItemBorderRadiusLink: {
		type: "boolean",
		default: true
	},
	/** End Feature Border Radius */

	/** Start Feature Padding */
	priceFeaturePaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceFeatureDesktopPadding: {
		type: "object", 
		default: {
			top: '0',
			bottom: '42',
			left: '0',
			right: '0',
		},
	},
	priceFeatureTabPadding: {
		type: "object", 
		default: {
			top: '0',
			bottom: '42',
			left: '0',
			right: '0',
		},
	},
	priceFeatureMobilePadding: {
		type: "object", 
		default: {
			top: '0',
			bottom: '30',
			left: '0',
			right: '0',
		},
	},
	priceFeaturePaddingLink: {
		type: "boolean",
		default: true
	},

	/** End feature Title */

	/** Start price Button */
	priceButtonAlignment: {
		type: "string",
		default: "center",
	},
	priceButtonWidth: {
		type: 'object',
		default: {
			Desktop: '100',
			Tablet: '100',
			Mobile: '100'
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
		default: "Default",
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
		type: "string",
		default: "#fff",
	},
	priceButtonHoverColor: {
		type: 'string',
	},

	priceButtonBackgroundColorSwitcher : {  
		type: "string",
		default: "normal"
	},
	priceButtonNormalBackgroundType: {   
		type: "string",
		default: "classic",
	},
	priceButtonNormalClassicColor: {
		type: "string",
		default: "#15171C",
	},
	priceButtonNormalGradientColor: {
		type: "string",
		default: null,
	},
	priceButtonNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	priceButtonNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	priceButtonHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	priceButtonHoverClassicColor: {
		type: "string",
		default: "",
	},
	priceButtonHoverGradientColor: {
		type: "string",
		default: null,
	},
	priceButtonHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	priceButtonHoverCustomGradientInputValue: {
		type: "string",
		default: "",
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
			top: '20',
			bottom: '20',
			left: '20',
			right: '20',
		},
	},
	priceButtonTabPadding: {
		type: "object", 
		default: {
			top: '15',
			bottom: '15',
			left: '20',
			right: '20',
		},
	},
	priceButtonMobilePadding: {
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
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
			top: "40",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	priceButtonTabMargin: {
		type: "object", 
		default: {
			top: "40",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	priceButtonMobileMargin: {
		type: "object", 
		default: {
			top: "30",
			bottom: "0",
			left: "0",
			right: "0",
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
			top: "5",
			bottom: "5",
			left: "5",
			right: "5",
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
		default: "#FFFFFF"
	},
	priceButtonIconHoverColor: {
		type: 'string',
		default: ""
	},
	priceButtonIconSize: {
		type: 'object',
		default: {
			Desktop: '20',
			Tablet: '20',
			Mobile: '20'
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


	/** Start Ribbon Color Settings */
	priceRibbonColorSwitcher: {
		type: "string",
		default: "normal"
	},
	priceRibbonColor: {
		type: "string",
		default: "#fff"
	},
	priceRibbonHoverColor: {
		type: 'string',
		default: ""
	},
	priceRibbonBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	priceRibbonBgColor: {
		type: "string",
		default: "#f00"
	},
	priceRibbonBgHoverColor: {
		type: 'string',
		default: ""
	},

	priceRibbonTop: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	priceRibbonTopUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	priceRibbonLeft: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	priceRibbonLeftUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	priceRibbonRight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	priceRibbonRightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	priceRibbonWidth: {
		type: 'object',
		default: {
			Desktop: '180',
			Tablet: '180',
			Mobile: '180'
		}
	},
	priceRibbonWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	priceRibbonFontSize: {
		type: 'object',
		default: {
			Desktop: '14',
			Tablet: '14',
			Mobile: '14'
		}
	},
	priceRibbonFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	priceRibbonpadding: {
		type: 'object',
		default: {
			Desktop: '10',
			Tablet: '10',
			Mobile: '10'
		}
	},
	priceRibbonpaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Ribbon Color Settings */


	/** Start Global Setting */
	priceGlobalZIndex : {
        type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
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
			top: '30',
			bottom: '30',
			left: '30',
			right: '30',
		},
	},
	priceGlobalPaddingTablet: {
		type: "object", 
		default: {
			top: '30',
			bottom: '30',
			left: '30',
			right: '30',
		},
	},
	priceGlobalPaddingMobile: {
		type: "object", 
		default: {
			top: '20',
			bottom: '20',
			left: '20',
			right: '20',
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
	priceGlobalBackgroundColorSwitcher : { 
		type: "string",
		default: "normal"
	},
	priceGlobalNormalBackgroundType: {  
		type: "string",
		default: "classic",
	},
	priceGlobalNormalClassicColor: {
		type: "string",
		default: "#EBF5FF",
	},
	priceGlobalNormalGradientColor: {
		type: "string",
		default: null,
	},
	priceGlobalNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	priceGlobalNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	priceGlobalHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	priceGlobalHoverClassicColor: {
		type: "string",
		default: "#EBF5FF",
	},
	priceGlobalHoverGradientColor: {
		type: "string",
		default: null,
	},
	priceGlobalHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	priceGlobalHoverCustomGradientInputValue: {
		type: "string",
		default: "",
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
		default: ""
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
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	priceGlobalBorderTablet: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	priceGlobalBorderMobile: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
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
			top: '24',
			bottom: '24',
			left: '24',
			right: '24',
		},
	},
	priceGlobalBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '24',
			bottom: '24',
			left: '24',
			right: '24',
		},
	},
	priceGlobalBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '24',
			bottom: '24',
			left: '24',
			right: '24',
		},
	},
	priceGlobalBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
	priceGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	priceGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    priceGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
	priceGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    priceGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
	/** End Box Shadow */
	/** End Global Setting */


	/** Start Price After Text */
	priceAfterTextSwitcher: {
		type: "boolean",
		default: true
	},
	priceAfterText: {
		type: "string",
		default: "What Value Add For Your Business"
	},
	priceAfterTextFontFamily: {
		type: "string",
		default: "Default",
	},
	priceAfterTextFontSize: {
		type: 'object',
		default: {
			Desktop: '14',
			Tablet: '14',
			Mobile: '14'
		}
	},
	priceAfterTextFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	priceAfterTextFontWeight: {
		type: "string",
		default: ""
	},
	priceAfterTextFontStyle: {
		type: "string",
		default: ""
	},
	priceAfterTextTextTransform: {
		type: "string",
		default: ""
	},
	priceAfterTextTextDecoration: {
		type: "string",
		default: ""
	},
	priceAfterTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	priceAfterTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	priceAfterTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	priceAfterTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	priceAfterTextColorSwitcher: {
		type: "string",
		default: "normal"
	},
	priceAfterTextColor: {
		type: "string",
		default: "#6A758E"
	},
	priceAfterTextHoverColor: {
		type: 'string',
		default: ""
	},

	priceAfterTextBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	priceAfterTextBgColor: {
		type: "string",
		default: "#FFFFFF"
	},
	priceAfterTextBgHoverColor: {
		type: 'string',
		default: ""
	},
	priceAfterTextBgColorSwitcher: {
        type: "string",
        default: "normal",
    },
    priceAfterTextNormalBackgroundType: {
        type: "string",
        default: "classic",
    },
    priceAfterTextNormalClassicColor: {
        type: "string",
        default: "#FFFFFF",
    },
    priceAfterTextNormalGradientColor: {
        type: "string",
        default: null,
    },
    priceAfterTextNormalCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    priceAfterTextNormalCustomGradientInputValue: {
        type: "string",
        default: "",
    },
    
    priceAfterTextHoverBackgroundType: {
        type: "string",
        default: "classic",
    },
    priceAfterTextHoverClassicColor: {
        type: "string",
        default: "",
    },
    priceAfterTextHoverGradientColor: {
        type: "string",
        default: null,
    },
    priceAfterTextHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    priceAfterTextHoverCustomGradientInputValue: {
        type: "string",
        default: "",
    },

	/** Start Padding */
	priceAfterTextPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceAfterTextPaddingDesktop: {
		type: "object", 
		default: {
			top: '5',
			bottom: '5',
			left: '10',
			right: '10',
		},
	},
	priceAfterTextPaddingTablet: {
		type: "object", 
		default: {
			top: '5',
			bottom: '5',
			left: '10',
			right: '10',
		},
	},
	priceAfterTextPaddingMobile: {
		type: "object", 
		default: {
			top: '5',
			bottom: '5',
			left: '10',
			right: '10',
		},
	},
	priceAfterTextPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Border */
	priceAfterTextBorder: {
		type: 'string',
		default: "none",
	},
	priceAfterTextBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	priceAfterTextBorderColor: { 
		type: 'string',
		default: ""
	},
	priceAfterTextBorderHoverColor: {
		type: 'string',
	},
	priceAfterTextBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceAfterTextBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceAfterTextBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceAfterTextBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceAfterTextBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	priceAfterTextBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceAfterTextBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	priceAfterTextBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	priceAfterTextBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	priceAfterTextBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */
	/** End Price After Text */

	/** Start Price Feature After Text */
	priceFeatureAfterTextSwitcher: {
		type: "boolean",
		default: true
	},
	priceFeatureAfterText: { 
		type: "string",
		default: "Billed every year Popular amongst entrepeneurs $497 per year"
	},


	priceFeatureAfterTextFontFamily: {
		type: "string",
		default: "Default",
	},
	priceFeatureAfterTextFontSize: { 
		type: 'object',
		default: {
			Desktop: '18',
			Tablet: '18',
			Mobile: '16'
		}
	},
	priceFeatureAfterTextFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	priceFeatureAfterTextFontWeight: {
		type: "string",
		default: "400"
	},
	priceFeatureAfterTextFontStyle: {
		type: "string",
		default: ""
	},
	priceFeatureAfterTextTextTransform: {
		type: "string",
		default: ""
	},
	priceFeatureAfterTextTextDecoration: {
		type: "string",
		default: ""
	},
	priceFeatureAfterTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	priceFeatureAfterTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	priceFeatureAfterTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	priceFeatureAfterTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	priceFeatureAfterTextColorSwitcher: {
		type: "string",
		default: "normal"
	},
	priceFeatureAfterTextColor: {
		type: "string",
		default: "#15171C"
	},
	priceFeatureAfterTextHoverColor: {
		type: 'string',
		default: ""
	},
	/** End Price Feature After Text */

	pricingTableDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    pricingTableTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    pricingTableMobileSwitcher: {
        type: "boolean",
        default: false,
    },

	/** Start Global Setting */
	pricingTableGlobalCustomCSS : {
        type: "string",
        default: "",
    },
	pricingTableGlobalWraperID : {
		type: "string",
		default: ""
	},
	pricingTableGlobalWraperClass : {
		type: "string",
		default: ""
	},

	pricingTablePositionType: {
        type: "string",
        default: "default"
    },
    pricingTableHZOrientationType: {
        type: "string",
        default: "left"
    },
    pricingTableVROrientationType: {
        type: "string",
        default: "top"
    },
    pricingTableHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    pricingTableHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    pricingTableHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    pricingTableHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    pricingTableVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    pricingTableVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    pricingTableVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    pricingTableVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
}

export default attributes;
