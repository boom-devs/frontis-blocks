const attributes = {
	blockId: {
		type: 'string',
		default: ''
	},
    deviceType: {
        type: 'string',
        default: 'Desktop'
    },
	blockStyle: {
		type: 'string',
		default: ''
	},
	/** Start General Settings */

	/** Start Top Section */

	/** Start Background */
	pricingTopSectionBgColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	pricingTopSectionNormalBackgroundType: { 
		type: 'string',
		default: 'classic',
	},
	pricingTopSectionNormalClassicColor: {
		type: 'string',
		default: '#399CFF',
	},
	pricingTopSectionNormalGradientColor: {
		type: 'string',
		default: null,
	},
	pricingTopSectionNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	pricingTopSectionNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	pricingTopSectionHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	pricingTopSectionHoverClassicColor: {
		type: 'string',
		default: '',
	},
	pricingTopSectionHoverGradientColor: {
		type: 'string',
		default: null,
	},
	pricingTopSectionHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	pricingTopSectionHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
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
		type: 'object', 
		default: {
			top: '5',
			bottom: '5',
			left: '5',
			right: '5',
		},
	},
	pricingTopSectionTabletPadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingTopSectionMobilePadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingTopSectionPaddingLink: {
		type: 'boolean',
		default: true
	},
	pricingTopSectionBorder: {
		type: 'string',
		default: 'none',
	},
	pricingTopSectionBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
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
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingTopSectionBorderTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingTopSectionBorderMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingTopSectionBorderLink: {
		type: 'boolean',
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
		type: 'object', 
		default: {
			top: '30',
			bottom: '30',
			left: '30',
			right: '30',
		},
	},
	pricingTopSectionBorderRadiusTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingTopSectionBorderRadiusMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingTopSectionBorderRadiusLink: {
		type : 'boolean',
		default: true
	},

	/** Start Text */
	pricingTopSectionTextColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	pricingTopSectionTextColor: {
		type: 'string',
		default: '#FFFFFF',
	},
	pricingTopSectionTextHoverColor: {
		type: 'string',
		default: '',
	},
	pricingTopSectionTextGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	pricingTopSectionTextGlobalTypoSwitcher: {
		type: 'object',
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
	pricingTopSectionTextGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	pricingTopSectionTextGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	pricingTopSectionTextFontFamily: {
		type: 'string',
		default: 'Default',
	},
	pricingTopSectionTextFontSize: {
		type: 'object',
		default: {
			Desktop: '24',
			Tablet: '',
			Mobile: '',
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
			Tablet: '',
			Mobile: '',
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
		type: 'object', 
		default: {
			top: '20',
			bottom: '20',
			left: '0',
			right: '0',
		},
	},
	pricingTopSectionTextTabletPadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingTopSectionTextMobilePadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingTopSectionTextPaddingLink: {
		type: 'boolean',
		default: true
	},
	/** End Top Section */

	/** Start Header */
	pricingSectionTopSwitcher: {
		type: 'boolean',
		default: false
	},
	pricingSectionTopText: {
		type: 'string',
		default: 'Best Deal'
	},
	pricingTitleTag: {
		type: 'string',
		default: 'h2'
	},
	pricingTitle: {
		type: 'string',
		default: 'Basic Plan'
	},
	pricingSubTitleSwitcher: {
		type: 'boolean',
		default: true
	},
	pricingSubTitleTag: { 
		type: 'string',
		default: 'span'
	},
	pricingSubTitle: {
		type: 'string',
		default: 'Best for Business Owners.'
	},
	pricingIconAlign: {
        type: 'string',
        default: 'none',
    },
    pricingIcon: {
		type: 'string',
		default: 'bookmark',
	},
	/** End Header */

	/** Start Pricing */
	normalPrice :{
		type: 'string',
		default: '49.00'
	},
	salePriceSwitcher :{
		type: 'boolean',
		default: false
	},
	salePrice :{
		type: 'string',
		default: '45.00'
	},
	priceCurrency :{
		type: 'string',
		default: '$'
	},
	priceCurrencyPosition :{
		type: 'string',
		default: 'left'
	},
	pricePeriod :{
		type: 'string',
		default: 'month'
	},
	pricePeriodSeparator :{
		type: 'string',
		default: '/'
	},
	/** End Pricing */

	/** Start Price list Features */
	priceHideFeaturesSwitcher: {
		type: 'boolean',
		default: true
	},
	priceFeatureIconSwitcher: {
		type: 'boolean',
		default: true
	},
	priceFeatureItems: {
        type: 'array',
        default: [
            // You can define some default items if needed
            { id: 'item-1', Title: 'Feature Item 1', FeatureIcon: 'check', },
            { id: 'item-2', Title: 'Feature Item 2', FeatureIcon: 'check', },
            { id: 'item-3', Title: 'Feature Item 3', FeatureIcon: 'check', },
        ],
        items: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    default: ''
                },
                Title: {
                    type: 'string',
                    default: ''
                },
                FeatureIcon: {
                    type: 'string',
                    default: 'check',
                },
                FeatureIconAlign: {
                    type: 'string',
                    default: 'icon',
                },
            }
        }
    },
	/** End Price list Features */

	/** Start Button */
	priceButtonSwitcher: {
		type: 'boolean',
		default: true
	},
    priceButtonText: {
        type: 'string',
        default: 'Select Plan',
    },
    priceButtonUrl: {
        type: 'string',
        default: '',
    },
    priceButtonTargetUrl: {
        type: 'boolean',
    },
	priceButtonIconAlign: {
        type: 'string',
        default: 'none',
    },
    priceButtonIcon: {
		type: 'string',
		default: 'arrow-right',
	},
	priceButtonIconPosition :{
		type: 'string',
		default: 'right'
	},
	priceButtonIconSpacing: {
		type: 'object',
		default: {
			Desktop: '10',
			Tablet: '',
			Mobile: '',
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
		type: 'string',
		default: 'normal'
	},
	pricingHeaderBgColor: {
		type: 'string',
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
		type: 'object', 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	pricingHeaderTabletPadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingHeaderMobilePadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingHeaderPaddingLink: {
		type: 'boolean',
		default: true
	},
	/** End Padding */
	/** Start Border */
	pricingHeaderBorder: {
		type: 'string',
		default: 'none',
	},
	pricingHeaderBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
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
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingHeaderBorderTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingHeaderBorderMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingHeaderBorderLink : {
		type : 'boolean',
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
		type: 'object', 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	pricingHeaderBorderRadiusTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingHeaderBorderRadiusMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingHeaderBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/**End Header */

	/** Start Icon */
	pricingIconAlignment: {
		type: 'string',
		default: 'left',
	},
	priceIconColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	priceIconColor : { 
		type: 'string',
		default: '#399CFF'
	},
	priceIconHoverColor: {
		type: 'string',
		default: ''
	},
	priceIconBgColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	priceIconBgColor : {
		type: 'string',
		default: ''
	},
	priceIconBgHoverColor: {
		type: 'string',
		default: ''
	},
	priceIconSize: {
		type: 'object',
		default: {
			Desktop: '30',
			Tablet: '',
			Mobile: ''
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
			Tablet: '',
			Mobile: '',
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
		type: 'boolean',
		default: false
	},
	priceIconPositionTop: {
		type: 'object',
		default: {
			Desktop: '5',
			Tablet: '',
			Mobile: '',
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
		type: 'object',
		default: {
			Desktop: '90',
			Tablet: '',
			Mobile: '',
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
		default: 'none',
	},
	priceIconBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
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
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceIconBorderTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceIconBorderMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceIconBorderLink : {
		type : 'boolean',
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
		type: 'object', 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	priceIconBorderRadiusTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceIconBorderRadiusMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceIconBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/** End Icon */
	/** End Style Settings */


	/** Start Pricing Style */
	pricingAlignment: {
		type: 'string',
		default: 'left'
	},
	normalPricingGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	normalPricingGlobalTypoSwitcher: {
		type: 'object',
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
	normalPricingGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	normalPricingGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	normalPricingFontFamily: {
        type: 'string',
        default: 'Default',
    },
	normalPricingFontSize: {
		type: 'object',
		default: {
			Desktop: '40',
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
        type: 'string',
        default: '700'
    },
	normalPricingFontStyle: {
        type: 'string',
        default: ''
    },
	normalPricingTextTransform: {
        type: 'string',
        default: ''
    },
	normalPricingTextDecoration: {
        type: 'string',
        default: ''
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
		type: 'string',
		default: 'normal'
	},
	normalPricingColor: {
		type: 'string',
		default: '#399CFF'
	},
	normalPricingHoverColor: {
		type: 'string',
		default: ''
	},

	salePricingGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	salePricingGlobalTypoSwitcher: {
		type: 'object',
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
	salePricingGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	salePricingGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	salePricingFontFamily: {
        type: 'string',
        default: 'Default',
    },
	salePricingFontSize: {
		type: 'object',
		default: {
			Desktop: '42',
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
        type: 'string',
        default: '700',
    },
	salePricingFontStyle: {
        type: 'string',
        default: '',
    },
	salePricingTextTransform: {
        type: 'string',
        default: '',
    },
	salePricingTextDecoration: {
        type: 'string',
        default: '',
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
		type: 'string',
		default: 'normal'
	},
	salePricingColor: {
		type: 'string',
		default: '#15171C'
	},
	salePricingHoverColor: {
		type: 'string',
		default: ''
	},

	priceCurrencyGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	priceCurrencyGlobalTypoSwitcher: {
		type: 'object',
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
	priceCurrencyGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	priceCurrencyGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
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

	pricePeriodGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	pricePeriodGlobalTypoSwitcher: {
		type: 'object',
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
	pricePeriodGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	pricePeriodGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	pricePeriodFontFamily: {
		type: 'string',
		default: 'Default'
	},
	pricePeriodFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
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
		type: 'string',
		default: '400'
	},
	pricePeriodFontStyle: {
		type: 'string',
		default: ''
	},
	pricePeriodTextTransform: {
		type: 'string',
		default: ''
	},
	pricePeriodTextDecoration: {
		type: 'string',
		default: ''
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
		type: 'string',
		default: 'normal'
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
		type: 'object', 
		default: {
			top: '32',
			bottom: '42',
			left: '0',
			right: '0',
		},
	},
	priceTabletPadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceMobilePadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricePaddingLink: {
		type: 'boolean',
		default: true
	},


	/** End Pricing Style */

	/**Start Title and Subtitle Style */
	pricingTitleAlignment: {
		type: 'string',
		default: 'left'
	},
	pricingTitleColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	pricingTitleColor: {
		type: 'string',
		default: '#15171C'
	},
	pricingTitleHoverColor: {
		type: 'string',
		default: ''
	},
	pricingTitleGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	pricingTitleGlobalTypoSwitcher: {
		type: 'object',
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
	pricingTitleGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	pricingTitleGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	pricingTitleFontFamily: {
		type: 'string',
		default: 'Default',
	},
	pricingTitleFontSize: {
		type: 'object',
		default: {
			Desktop: '24',
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
		type: 'string',
		default: '600'
	},
	pricingTitleFontStyle: {
		type: 'string',
		default: ''
	},
	pricingTitleTextTransform: {
		type: 'string',
		default: ''
	},
	pricingTitleTextDecoration: {
		type: 'string',
		default: ''
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

	pricingTitlePaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	pricingTitleDesktopPadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingTitleTabletPadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingTitleMobilePadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingTitlePaddingLink: {
		type: 'boolean',
		default: true
	},

	pricingTitleMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	pricingTitleDesktopMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingTitleTabletMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingTitleMobileMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingTitleMarginLink: {
		type: 'boolean',
		default: true
	},

	pricingSubtitleColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	pricingSubtitleColor: {
		type: 'string',
		default: '#6A758E'
	},
	pricingSubtitleHoverColor: {
		type: 'string',
		default: ''
	},
	pricingSubtitleGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	pricingSubtitleGlobalTypoSwitcher: {
		type: 'object',
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
	pricingSubtitleGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	pricingSubtitleGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	pricingSubtitleFontFamily: {
		type: 'string',
		default: 'Default',
	},
	pricingSubtitleFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
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
		type: 'string',
		default: '500'
	},
	pricingSubtitleFontStyle: {
		type: 'string',
		default: ''
	},
	pricingSubtitleTextTransform: {
		type: 'string',
		default: ''
	},
	pricingSubtitleTextDecoration: {
		type: 'string',
		default: ''
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
	pricingSubtitlePaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	pricingSubtitleDesktopPadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingSubtitleTabletPadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingSubtitleMobilePadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingSubtitlePaddingLink: {
		type: 'boolean',
		default: true
	},

	pricingSubtitleMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	pricingSubtitleDesktopMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingSubtitleTabletMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingSubtitleMobileMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingSubtitleMarginLink: {
		type: 'boolean',
		default: true
	},
	/**end Title and Subtitle Style */

	/** Start Feature Icon */
	priceFeatureAlignment: {
		type: 'string',
		default: 'left'
	},
	priceFeatureIconColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	priceFeatureIconColor: {
		type: 'string',
		default: '#6A758E'
	},
	priceFeatureIconHoverColor: {
		type: 'string',
		default: ''
	},
	priceFeatureIconSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: ''
		}
	},
	priceFeatureIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	/** End Feature Icon */

	/** Start Feature Title */
	pricingfeatureTitleColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	pricingfeatureTitleColor: {
		type: 'string',
		default: '#6A758E'
	},
	pricingfeatureTitleHoverColor: {
		type: 'string',
		default: ''
	},
	pricingfeatureTitleGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	pricingfeatureTitleGlobalTypoSwitcher: {
		type: 'object',
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
	pricingfeatureTitleGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	pricingfeatureTitleGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	pricingfeatureTitleFontFamily: {
		type: 'string',
		default: 'Default'
	},
	pricingfeatureTitleFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: ''
		}
	},
	pricingfeatureTitleFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	pricingfeatureTitleFontWeight: {
		type: 'string',
		default: ''
	},
	pricingfeatureTitleFontStyle: {
		type: 'string',
		default: ''
	},
	pricingfeatureTitleTextTransform: {
		type: 'string',
		default: ''
	},
	pricingfeatureTitleTextDecoration: {
		type: 'string',
		default: ''
	},
	pricingfeatureTitleLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	pricingfeatureTitleLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	pricingfeatureTitleLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	pricingfeatureTitleLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
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
		type: 'object', 
		default: {
			top: '10',
			bottom: '10',
			left: '0',
			right: '0',
		},
	},
	priceFeatureItemTabPadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceFeatureItemMobilePadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceFeatureItemPaddingLink: {
		type: 'boolean',
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
		type: 'object', 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	priceFeatureItemTabMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceFeatureItemMobileMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceFeatureItemMarginLink: {
		type: 'boolean',
		default: true
	},
	/** End Feature Margin */

	/** Start Feature Border */
	priceFeatureItemBorderBottom: {
		type: 'boolean',
		default: true
	},
	priceFeatureItemBorder: {
		type: 'string',
		default: 'solid',
	},
	priceFeatureItemBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	priceFeatureItemBorderColor: {
		type: 'string',
		default: '#E1E3E8'
	},
	priceFeatureItemBorderHoverColor: {
		type: 'string',
		default: ''
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
		type: 'object', 
		default: {
			top: '0',
			bottom: '1',
			left: '0',
			right: '0',
		},
	},
	priceFeatureItemTabBorder: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceFeatureItemMobileBorder: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceFeatureItemBorderLink: {
		type: 'boolean',
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
		type: 'object', 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	priceFeatureItemTabBorderRadius: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceFeatureItemMobileBorderRadius: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceFeatureItemBorderRadiusLink: {
		type: 'boolean',
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
		type: 'object', 
		default: {
			top: '0',
			bottom: '42',
			left: '0',
			right: '0',
		},
	},
	priceFeatureTabPadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceFeatureMobilePadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceFeaturePaddingLink: {
		type: 'boolean',
		default: true
	},

	/** End feature Title */

	/** Start price Button */
	priceButtonAlignment: {
		type: 'string',
		default: 'center',
	},
	priceButtonWidth: {
		type: 'object',
		default: {
			Desktop: '100',
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

	priceButtonGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	priceButtonGlobalTypoSwitcher: {
		type: 'object',
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
	priceButtonGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	priceButtonGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	priceButtonFontFamily: {
		type: 'string',
		default: 'Default',
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
		type: 'string',
		default: ''
	},
	priceButtonFontStyle: {
		type: 'string',
		default: ''
	},
	priceButtonTextTransform: {
		type: 'string',
		default: ''
	},
	priceButtonTextDecoration: {
		type: 'string',
		default: ''
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
		type: 'string',
		default: 'normal'
	},
	priceButtonColor: {
		type: 'string',
		default: '#fff',
	},
	priceButtonHoverColor: {
		type: 'string',
	},

	priceButtonBackgroundColorSwitcher : {  
		type: 'string',
		default: 'normal'
	},
	priceButtonNormalBackgroundType: {   
		type: 'string',
		default: 'classic',
	},
	priceButtonNormalClassicColor: {
		type: 'string',
		default: '#15171C',
	},
	priceButtonNormalGradientColor: {
		type: 'string',
		default: null,
	},
	priceButtonNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	priceButtonNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	priceButtonHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	priceButtonHoverClassicColor: {
		type: 'string',
		default: '',
	},
	priceButtonHoverGradientColor: {
		type: 'string',
		default: null,
	},
	priceButtonHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	priceButtonHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
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
		type: 'object', 
		default: {
			top: '20',
			bottom: '20',
			left: '20',
			right: '20',
		},
	},
	priceButtonTabPadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceButtonMobilePadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceButtonPaddingLink: {
		type: 'boolean',
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
		type: 'object', 
		default: {
			top: '40',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	priceButtonTabMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceButtonMobileMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceButtonMarginLink: {
		type: 'boolean',
		default: true
	},
	priceButtonBorder: {
		type: 'string',
		default: 'none',
	},
	priceButtonBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
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
		type: 'object', 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	priceButtonTabBorderWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceButtonMobileBorderWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceButtonBorderLink: {
		type: 'boolean',
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
		type: 'object', 
		default: {
			top: '5',
			bottom: '5',
			left: '5',
			right: '5',
		},
	},
	priceButtonTabBorderRadiusWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceButtonMobileBorderRadiusWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceButtonBorderRadiusLink: {
		type: 'boolean',
		default: true
	},

	priceButtonIconColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	priceButtonIconColor: {
		type: 'string',
		default: '#FFFFFF'
	},
	priceButtonIconHoverColor: {
		type: 'string',
		default: ''
	},
	priceButtonIconSize: {
		type: 'object',
		default: {
			Desktop: '20',
			Tablet: '',
			Mobile: ''
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
		type: 'string',
		default: 'normal'
	},
	priceRibbonColor: {
		type: 'string',
		default: '#fff'
	},
	priceRibbonHoverColor: {
		type: 'string',
		default: ''
	},
	priceRibbonBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	priceRibbonBgColor: {
		type: 'string',
		default: '#f00'
	},
	priceRibbonBgHoverColor: {
		type: 'string',
		default: ''
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
			Tablet: '',
			Mobile: ''
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
			Tablet: '',
			Mobile: ''
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
			Tablet: '',
			Mobile: ''
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
        type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
    },
	pricingTableOverflow: {
        type: 'string',
        default: 'default',
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
		type: 'object', 
		default: {
			top: '30',
			bottom: '30',
			left: '30',
			right: '30',
		},
	},
	priceGlobalPaddingTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceGlobalPaddingMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceGlobalPaddingLink : {
		type : 'boolean',
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
		type: 'object', 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	priceGlobalMarginTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceGlobalMarginMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceGlobalMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Margin */

	/** Start Background */
	priceGlobalBackgroundColorSwitcher : { 
		type: 'string',
		default: 'normal'
	},
	priceGlobalNormalBackgroundType: {  
		type: 'string',
		default: 'classic',
	},
	priceGlobalNormalClassicColor: {
		type: 'string',
		default: '#EBF5FF',
	},
	priceGlobalNormalGradientColor: {
		type: 'string',
		default: null,
	},
	priceGlobalNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	priceGlobalNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	priceGlobalHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	priceGlobalHoverClassicColor: {
		type: 'string',
		default: '#EBF5FF',
	},
	priceGlobalHoverGradientColor: {
		type: 'string',
		default: null,
	},
	priceGlobalHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	priceGlobalHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** End Background */

	/** Start Border */
	priceGlobalBorder: {
		type: 'string',
		default: 'solid',
	},
	priceGlobalBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	priceGlobalBorderColor: {
		type: 'string',
		default: ''
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
		type: 'object', 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	priceGlobalBorderTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceGlobalBorderMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceGlobalBorderLink : {
		type : 'boolean',
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
		type: 'object', 
		default: {
			top: '24',
			bottom: '24',
			left: '24',
			right: '24',
		},
	},
	priceGlobalBorderRadiusTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceGlobalBorderRadiusMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceGlobalBorderRadiusLink : {
		type : 'boolean',
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
		type: 'boolean',
		default: true
	},
	priceAfterText: {
		type: 'string',
		default: 'What Value Add For Your Business'
	},
	priceAfterTextGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	priceAfterTextGlobalTypoSwitcher: {
		type: 'object',
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
	priceAfterTextGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	priceAfterTextGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	priceAfterTextFontFamily: {
		type: 'string',
		default: 'Default',
	},
	priceAfterTextFontSize: {
		type: 'object',
		default: {
			Desktop: '14',
			Tablet: '',
			Mobile: ''
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
		type: 'string',
		default: ''
	},
	priceAfterTextFontStyle: {
		type: 'string',
		default: ''
	},
	priceAfterTextTextTransform: {
		type: 'string',
		default: ''
	},
	priceAfterTextTextDecoration: {
		type: 'string',
		default: ''
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
		type: 'string',
		default: 'normal'
	},
	priceAfterTextColor: {
		type: 'string',
		default: '#6A758E'
	},
	priceAfterTextHoverColor: {
		type: 'string',
		default: ''
	},

	priceAfterTextBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	priceAfterTextBgColor: {
		type: 'string',
		default: '#FFFFFF'
	},
	priceAfterTextBgHoverColor: {
		type: 'string',
		default: ''
	},
	priceAfterTextBgColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    priceAfterTextNormalBackgroundType: {
        type: 'string',
        default: 'classic',
    },
    priceAfterTextNormalClassicColor: {
        type: 'string',
        default: '#FFFFFF',
    },
    priceAfterTextNormalGradientColor: {
        type: 'string',
        default: null,
    },
    priceAfterTextNormalCustomGradientSwitcher: {
        type: 'boolean',
        default: false,
    },
    priceAfterTextNormalCustomGradientInputValue: {
        type: 'string',
        default: '',
    },
    
    priceAfterTextHoverBackgroundType: {
        type: 'string',
        default: 'classic',
    },
    priceAfterTextHoverClassicColor: {
        type: 'string',
        default: '',
    },
    priceAfterTextHoverGradientColor: {
        type: 'string',
        default: null,
    },
    priceAfterTextHoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false,
    },
    priceAfterTextHoverCustomGradientInputValue: {
        type: 'string',
        default: '',
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
		type: 'object', 
		default: {
			top: '5',
			bottom: '5',
			left: '10',
			right: '10',
		},
	},
	priceAfterTextPaddingTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceAfterTextPaddingMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceAfterTextPaddingLink : {
		type : 'boolean',
		default: true
	},
	/** End Padding */

	/** Start Border */
	priceAfterTextBorder: {
		type: 'string',
		default: 'none',
	},
	priceAfterTextBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	priceAfterTextBorderColor: { 
		type: 'string',
		default: ''
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
		type: 'object', 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	priceAfterTextBorderTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceAfterTextBorderMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceAfterTextBorderLink : {
		type : 'boolean',
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
		type: 'object', 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	priceAfterTextBorderRadiusTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceAfterTextBorderRadiusMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceAfterTextBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/** End Border Radius */
	/** End Price After Text */

	/** Start Price Feature After Text */
	priceFeatureAfterTextSwitcher: {
		type: 'boolean',
		default: true
	},
	priceFeatureAfterText: { 
		type: 'string',
		default: 'Billed every year Popular amongst entrepeneurs $497 per year'
	},

	priceFeatureAfterTextGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	priceFeatureAfterTextGlobalTypoSwitcher: {
		type: 'object',
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
	priceFeatureAfterTextGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	priceFeatureAfterTextGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	priceFeatureAfterTextFontFamily: {
		type: 'string',
		default: 'Default',
	},
	priceFeatureAfterTextFontSize: { 
		type: 'object',
		default: {
			Desktop: '18',
			Tablet: '',
			Mobile: ''
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
		type: 'string',
		default: '400'
	},
	priceFeatureAfterTextFontStyle: {
		type: 'string',
		default: ''
	},
	priceFeatureAfterTextTextTransform: {
		type: 'string',
		default: ''
	},
	priceFeatureAfterTextTextDecoration: {
		type: 'string',
		default: ''
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
		type: 'string',
		default: 'normal'
	},
	priceFeatureAfterTextColor: {
		type: 'string',
		default: '#15171C'
	},
	priceFeatureAfterTextHoverColor: {
		type: 'string',
		default: ''
	},
	/** End Price Feature After Text */

	pricingTableDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    pricingTableTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    pricingTableMobileSwitcher: {
        type: 'boolean',
        default: false,
    },

	/** Start Global Setting */
	pricingTableGlobalCustomCSS : {
        type: 'string',
        default: '',
    },
	pricingTableGlobalWraperID : {
		type: 'string',
		default: ''
	},
	pricingTableGlobalWraperClass : {
		type: 'string',
		default: ''
	},

	pricingTablePositionType: {
        type: 'string',
        default: 'default'
    },
    pricingTableHZOrientationType: {
        type: 'string',
        default: 'left'
    },
    pricingTableVROrientationType: {
        type: 'string',
        default: 'top'
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
