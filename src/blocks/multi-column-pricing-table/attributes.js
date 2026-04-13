import { pricingPresetStyles } from './presets';

const attributes = {
	blockID: {
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
    pricingPresetStyle: {
        type: 'string',
        default: 'default',
    },

	/** Start Column Data - 3 Columns */
	selectedColumn: {
		type: 'string',
		default: 'column-1'
	},
	/** End Column Data */

	/** Start Top Section */
	pricingSectionTopSwitcher: {
		type: 'boolean',
		default: false
	},
	pricingSectionTopText: {
		type: 'string',
		default: 'Personal Package'
	},
	pricingTitleTag: {
		type: 'string',
		default: 'h2'
	},
	pricingTitle: {
		type: 'string',
		default: 'Personal Package'
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
		default: 'Personal Package'
	},
	pricingIconAlign: {
		type: 'string',
		default: 'none'
	},
	pricingIcon: {
		type: 'string',
		default: 'bookmark'
	},
	normalPrice: {
		type: 'string',
		default: '49'
	},
	salePriceSwitcher: {
		type: 'boolean',
		default: false
	},
	salePrice: {
		type: 'string',
		default: '45'
	},
	priceCurrency: {
		type: 'string',
		default: '$'
	},
	priceCurrencyPosition: {
		type: 'string',
		default: 'left'
	},
	pricePeriod: {
		type: 'string',
		default: 'month'
	},
	pricePeriodSeparator: {
		type: 'string',
		default: '/'
	},
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
			{ id: 'item-1', Title: 'Support & Updates for 1 year', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
			{ id: 'item-2', Title: '25% Renewal Discount', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
			{ id: 'item-3', Title: '25% Renewal Discount', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
			{ id: 'item-4', Title: 'Custom Notification', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: true },
			{ id: 'item-5', Title: 'MailChimp Integrations', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: true },
			{ id: 'item-6', Title: 'Zapier Integration​', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: true },
			{ id: 'item-7', Title: 'Google Reviews', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: true },
		]
	},
	priceButtonUrl: {
		type: 'string',
		default: ''
	},
	priceButtonText: {
		type: 'string',
		default: 'Get Started'
	},
	priceButtonTargetUrl: {
		type: 'boolean',
		default: false
	},
	priceButtonIconAlign: {
		type: 'string',
		default: 'none'
	},
	priceButtonIcon: {
		type: 'string',
		default: 'arrow-right'
	},
	priceButtonIconPosition: {
		type: 'string',
		default: 'right'
	},

	/** Start Background */
	pricingGlobalStyleSwitcher: {
		type: 'boolean',
		default: false,
	},
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
		default: '#0B0C0E',
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
			top: '16',
			bottom: '16',
			left: '16',
			right: '16',
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
			top: '16',
			bottom: '0',
			left: '0',
			right: '16',
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
			Desktop: '16',
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
		default: '500',
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
			Desktop: '21',
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

	/** Start Global Style Settings - All remaining style attributes continue here */
	/** Start Header Style */
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
			top: '',
			bottom: '',
			left: '',
			right: '',
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
		default: 'solid',
	},
	pricingHeaderBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	pricingHeaderBorderColor: {
		type: 'string',
        default: '#E1E3E8',
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
			top: '0',
			bottom: '1',
			left: '0',
			right: '0',
		},
	},
	pricingHeaderBorderTablet: {
		type: 'object',
		default: {
			top: '0',
			bottom: '1',
			left: '0',
			right: '0',
		},
	},
	pricingHeaderBorderMobile: {
		type: 'object',
		default: {
			top: '0',
			bottom: '1',
			left: '0',
			right: '0',
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
			top: '',
			bottom: '',
			left: '',
			right: '',
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
			Desktop: '32',
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
		default: '#0B0C0E'
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
			Desktop: '32',
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
			Mobile: 'px',
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
			Mobile: 'px',
		}
	},
	priceCurrencyColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	priceCurrencyColor: {
		type: 'string',
		default: '#0B0C0E'
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
			Mobile: 'px',
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
			Mobile: 'px',
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
			Mobile: 'px',
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
			top: '0',
			bottom: '0',
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
		default: 'center'
	},
	pricingTitleColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	pricingTitleColor: {
		type: 'string',
		default: '#0B0C0E'
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
			Desktop: '18',
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
	FeatureListGap: {
		type: 'object',
		default: {
			Desktop: '24',
			Tablet: '',
			Mobile: ''
		}
	},
	FeatureListGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	priceFeatureAlignment: {
		type: 'string',
		default: 'center'
	},
	priceFeatureIconColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	priceFeatureIconColor: {
		type: 'string',
		default: '#0B0C0E'
	},
	priceFeatureIconHoverColor: {
		type: 'string',
		default: ''
	},
	priceFeatureIconSize: {
		type: 'object',
		default: {
			Desktop: '13',
			Tablet: '',
			Mobile: ''
		}
	},
	priceFeatureIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	priceFeatureDisabledOpacity: {
		type: 'object',
		default: {
			Desktop: '0.5',
			Tablet: '0.5',
			Mobile: '0.5',
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
		default: '#2A2F39'
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
			Desktop: '14',
			Tablet: '',
			Mobile: ''
		}
	},
	pricingfeatureTitleFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	pricingfeatureTitleFontWeight: {
		type: 'string',
		default: '400'
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
			Mobile: 'px',
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
			Mobile: 'px',
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
			top: '0',
			bottom: '0',
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
		default: 'none',
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
			bottom: '0',
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

	/** Start Feature Border Radius */
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
		type : 'boolean',
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
			top: '24',
			bottom: '32',
			left: '32',
			right: '32',
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
	/** End Feature Padding */

	/** Start Feature Margin */
	priceFeatureMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceFeatureDesktopMargin: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceFeatureTabMargin: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceFeatureMobileMargin: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceFeatureMarginLink: {
		type: 'boolean',
		default: true
	},
	/** End Feature Margin */

	/**Start Feature Area background */
	priceFeatureAreaBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
    priceFeatureAreaNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
    priceFeatureAreaNormalClassicColor: {
		type: 'string',
		default: '',
	},
    priceFeatureAreaNormalGradientColor: {
		type: 'string',
		default: null,
	},
    priceFeatureAreaNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
    priceFeatureAreaNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
    priceFeatureAreaHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
    priceFeatureAreaHoverClassicColor: {
		type: 'string',
		default: '',
	},
    priceFeatureAreaHoverGradientColor: {
		type: 'string',
		default: null,
	},
    priceFeatureAreaHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
    priceFeatureAreaHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/**End Feature Area background */

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

	/** Start price Button */
	headerAlignment: {
		type: 'string',
		default: ''
	},
	priceButtonSwitcher: {
		type: 'boolean',
		default: true
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
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
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
	priceButtonGlobalTypographyData: {
		type: 'object',
		default: {}
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
		default: 'Default'
	},
	priceButtonFontSize: {
		type: 'object',
		default: {
			Desktop: '14',
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
		default: '500'
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
		default: '#ffffff'
	},
	priceButtonHoverColor: {
		type: 'string',
		default: ''
	},
	priceButtonBgHoverColor: {
		type: 'string',
		default: ''
	},

	priceButtonBackgroundColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	priceButtonNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	priceButtonNormalClassicColor: {
		type: 'string',
		default: '#0B0C0E',
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
		default: '#6A758E',
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
			top: '16',
			bottom: '16',
			left: '32',
			right: '32',
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
			top: '16',
			bottom: '16',
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
	priceButtonBorderColorSwitcher : {
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
			top: '',
			bottom: '',
			left: '',
			right: '',
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
	priceButtonBorderLink : {
		type : 'boolean',
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
			top: '36',
			bottom: '36',
			left: '36',
			right: '36',
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
	priceButtonBorderRadiusLink : {
		type : 'boolean',
		default: true
	},

	priceButtonIconColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	priceButtonIconColor : {
		type: 'string',
		default: '#15171C'
	},
	priceButtonIconHoverColor: {
		type: 'string',
		default: ''
	},
	priceButtonIconSize: {
		type: 'object',
		default: {
			Desktop: '16',
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
	priceButtonIconSpacing: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: ''
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
	/** End price Button */

	/** Start price Column */
	priceColumnGap: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '24'
		}
	},
	priceColumnGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	priceColumnPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceColumnDesktopPadding: {
		type: 'object',
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	priceColumnTabletPadding: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceColumnMobilePadding: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceColumnPaddingLink: {
		type: 'boolean',
		default: true
	},

	priceColumnMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceColumnDesktopMargin: {
		type: 'object',
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	priceColumnTabletMargin: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceColumnMobileMargin: {
		type: 'object',
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	priceColumnMarginLink: {
		type: 'boolean',
		default: true
	},

	/** Start price Column One Background */
	priceColumnOneBackgroundColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	priceColumnOneNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	priceColumnOneNormalClassicColor: {
		type: 'string',
		default: '#f7f7f7',
	},
	priceColumnOneNormalGradientColor: {
		type: 'string',
		default: null,
	},
	priceColumnOneNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	priceColumnOneNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	priceColumnOneHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	priceColumnOneHoverClassicColor: {
		type: 'string',
		default: '',
	},
	priceColumnOneHoverGradientColor: {
		type: 'string',
		default: null,
	},
	priceColumnOneHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	priceColumnOneHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** End price Column One Background */

	/** Start price Column Two Background */
	priceColumnTwoBackgroundColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	priceColumnTwoNormalBackgroundType: {
		type: 'string',
		default: 'gradient',
	},
	priceColumnTwoNormalClassicColor: {
		type: 'string',
		default: '',
	},
	priceColumnTwoNormalGradientColor: {
		type: 'string',
		default: 'linear-gradient(180deg, #D0D0D0 0%, #F7F7F7 100%)',
	},
	priceColumnTwoNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: true,
	},
	priceColumnTwoNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	priceColumnTwoHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	priceColumnTwoHoverClassicColor: {
		type: 'string',
		default: '',
	},
	priceColumnTwoHoverGradientColor: {
		type: 'string',
		default: null,
	},
	priceColumnTwoHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	priceColumnTwoHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** End price Column Two Background */

	/** Start price Column Three Background */
	priceColumnThreeBackgroundColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	priceColumnThreeNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	priceColumnThreeNormalClassicColor: {
		type: 'string',
		default: '#f7f7f7',
	},
	priceColumnThreeNormalGradientColor: {
		type: 'string',
		default: null,
	},
	priceColumnThreeNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	priceColumnThreeNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	priceColumnThreeHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	priceColumnThreeHoverClassicColor: {
		type: 'string',
		default: '',
	},
	priceColumnThreeHoverGradientColor: {
		type: 'string',
		default: null,
	},
	priceColumnThreeHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	priceColumnThreeHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** End price Column Three Background */

	/** Start price Column Background */
	priceColumnBackgroundColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	priceColumnNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	priceColumnNormalClassicColor: {
		type: 'string',
		default: '#f7f7f7',
	},
	priceColumnNormalGradientColor: {
		type: 'string',
		default: null,
	},
	priceColumnNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	priceColumnNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	priceColumnHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	priceColumnHoverClassicColor: {
		type: 'string',
		default: '',
	},
	priceColumnHoverGradientColor: {
		type: 'string',
		default: null,
	},
	priceColumnHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	priceColumnHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** End price Column Three Background */

	/**Start price column border */
	priceColumnBorder: {
		type: 'string',
		default: 'none',
	},
	priceColumnBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	priceColumnBorderColor: {
		type: 'string',
	},
	priceColumnBorderHoverColor: {
		type: 'string',
	},

	priceColumnBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceColumnDesktopBorderWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceColumnTabletBorderWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceColumnMobileBorderWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceColumnBorderLink : {
		type : 'boolean',
		default: true
	},

	priceColumnBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	priceColumnDesktopBorderRadiusWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceColumnTabBorderRadiusWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceColumnMobileBorderRadiusWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	priceColumnBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/**End price column border */

	/** End price Column */

	/** Start Global Settings */
	priceGlobalZIndex: {
		type: 'string',
		default: ''
	},
	pricingTableOverflow: {
		type: 'string',
		default: 'visible'
	},
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
			top: '',
			bottom: '',
			left: '',
			right: '',
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
	priceGlobalPaddingLink: {
		type: 'boolean',
		default: true
	},
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
	priceGlobalMarginLink: {
		type: 'boolean',
		default: true
	},

	priceGlobalBackgroundColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	priceGlobalNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	priceGlobalNormalClassicColor: {
		type: 'string',
		default: '',
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
		default: '',
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

	priceGlobalBorder: {
		type: 'string',
		default: 'none',
	},
	priceGlobalBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	priceGlobalBorderColor: {
		type: 'string',
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
			top: '',
			bottom: '',
			left: '',
			right: '',
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
			top: '',
			bottom: '',
			left: '',
			right: '',
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
	priceGlobalBoxShadowSwitcher: {
		type: 'boolean',
		default: false
	},
	priceGlobalBoxShadowValues: {
		type: 'object',
		default: {
			hOffset: 0,
			vOffset: 0,
			blur: 0,
			spread: 0,
			color: '#000000',
			inset: false
		}
	},
	priceGlobalBoxShadowCssValue: {
		type: 'string',
		default: ''
	},
	priceGlobalBoxShadowHoverValues: {
		type: 'object',
		default: {
			hOffset: 0,
			vOffset: 0,
			blur: 0,
			spread: 0,
			color: '#000000',
			inset: false
		}
	},
	priceGlobalBoxShadowHoverCssValue: {
		type: 'string',
		default: ''
	},
	/** End Global Settings */

	/** Start Price Activation */
	activationContentAlignment: {
		type: 'string',
		default: 'center'
	},
	priceAfterTextSwitcher: {
		type: 'boolean',
		default: true
	},
	priceAfterText: {
		type: 'string',
		default: 'Activation on 1 Site'
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
		default: 'Default'
	},
	priceAfterTextFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
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
		default: '700'
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
		default: '#0B0C0E'
	},
	priceAfterTextHoverColor: {
		type: 'string',
		default: ''
	},

	priceAfterTextBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
    priceAfterTextNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
    priceAfterTextNormalClassicColor: {
		type: 'string',
		default: '',
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
			top: '32',
			bottom: '0',
			left: '0',
			right: '0',
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
			top: '',
			bottom: '',
			left: '',
			right: '',
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
			top: '',
			bottom: '',
			left: '',
			right: '',
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
	/** End Price Activation */

	/** Start Responsive */
	pricingTableDesktopSwitcher: {
		type: 'boolean',
		default: false
	},
	pricingTableTabletSwitcher: {
		type: 'boolean',
		default: false
	},
	pricingTableMobileSwitcher: {
		type: 'boolean',
		default: false
	},
	/** End Responsive */

	/** Start Custom CSS */
	pricingTableGlobalCustomCSS: {
		type: 'string',
		default: ''
	},
	pricingTableGlobalWraperID: {
		type: 'string',
		default: ''
	},
	pricingTableGlobalWraperClass: {
		type: 'string',
		default: ''
	},
	/** End Custom CSS */

	/** Start Position */
	pricingTablePositionType: {
		type: 'string',
		default: 'static'
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
			Mobile: '',
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
			Mobile: '',
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
			Mobile: '',
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
			Mobile: '',
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
	/** End Position */

	/** Start Pricing Grid */
	gridRowGap: {
		type: "object",
		default: {
			Desktop: '0',
			Tablet: '0',
			Mobile: '24',
		},
	},
	gridColumnGap: {
		type: "object",
		default: {
			Desktop: '0',
			Tablet: '',
			Mobile: '',
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
	pricingGridPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	pricingGridDesktopPadding: {
		type: 'object',
		default: {
			top: '58',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	pricingGridTabletPadding: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingGridMobilePadding: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingGridPaddingLink: {
		type: 'boolean',
		default: true
	},
	/** end padding */

	/** Start Pricing Grid margin */
	pricingGridMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	pricingGridDesktopMargin: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingGridTabletMargin: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingGridMobileMargin: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	pricingGridMarginLink: {
		type: 'boolean',
		default: true
	},
	/** end margin */

	/**Pricing Grid Background Style Start */
	priceGridBackgroundColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	priceGridNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	priceGridNormalClassicColor: {
		type: 'string',
		default: '',
	},
	priceGridNormalGradientColor: {
		type: 'string',
		default: null,
	},
	priceGridNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	priceGridNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	priceGridHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	priceGridHoverClassicColor: {
		type: 'string',
		default: '',
	},
	priceGridHoverGradientColor: {
		type: 'string',
		default: null,
	},
	priceGridHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	priceGridHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	/** Start Border */
	pricingGridBorder: {
		type: 'string',
		default: 'none',
	},
	pricingGridBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	pricingGridBorderColor: {
		type: 'string',
        default: '',
	},
	pricingGridBorderHoverColor: {
		type: 'string',
	},
	pricingGridBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	pricingGridBorderDesktop: {
		type: 'object',
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	pricingGridBorderTablet: {
		type: 'object',
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	pricingGridBorderMobile: {
		type: 'object',
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	pricingGridBorderLink : {
		type : 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	pricingGridBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	pricingGridBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '16',
			bottom: '16',
			left: '16',
			right: '16',
		},
	},
	pricingGridBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '16',
			bottom: '16',
			left: '16',
			right: '16',
		},
	},
	pricingGridBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	pricingGridBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/**End Header */
	/**Pricing Grid Background Style End */

	/** Start Feature Title */
	priceFeatureTitle: {
		type: 'string',
		default: 'All Premium Plans Include…'
	},
	priceFeatureTitleSwitcher: {
		type: 'boolean',
		default: true
	},
	featureTitleAlignment: {
		type: 'string',
		default: 'left'
	},

	featureTitleColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	featureTitleColor: {
		type: 'string',
		default: '#2A2F39'
	},
	featureTitleHoverColor: {
		type: 'string',
		default: ''
	},
	featureTitleGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	featureTitleGlobalTypoSwitcher: {
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
	featureTitleGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	featureTitleGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	featureTitleFontFamily: {
		type: 'string',
		default: 'Default'
	},
	featureTitleFontSize: {
		type: 'object',
		default: {
			Desktop: '32',
			Tablet: '',
			Mobile: ''
		}
	},
	featureTitleFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	featureTitleFontWeight: {
		type: 'string',
		default: '600'
	},
	featureTitleFontStyle: {
		type: 'string',
		default: ''
	},
	featureTitleTextTransform: {
		type: 'string',
		default: ''
	},
	featureTitleTextDecoration: {
		type: 'string',
		default: ''
	},
	featureTitleLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	featureTitleLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	featureTitleLineHeight: {
		type: 'object',
		default: {
			Desktop: '42',
			Tablet: '',
			Mobile: ''
		}
	},
	featureTitleLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Feature Title */
};

export default attributes;