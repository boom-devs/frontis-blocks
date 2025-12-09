const attributes = {
    // the following 4 attributes is must required for responsive options and asset generation for frontend
    // responsive control attributes ⬇
    deviceType: {
        type: 'string',
        default: 'Desktop',
    },
    // blockID attribute for making unique className and other uniqueness ⬇
    blockID: {
        type: 'string',
    },
    blockStyle: {
        type: 'string',
        default: '',
    },
    blockStyleTwo: {
        type: 'string',
        default: '',
    },
    blockRoot: {
        type: 'string',
        default: 'frontis_block',
    },
    
    textFieldIconSwitcher: {
        type: 'boolean',
        default: false,
    },
    textFieldIconSwitcher: {
        type: 'boolean',
        default: false,
    },
    textFieldIconSwitcher: {
        type: 'boolean',
        default: false,
    },
    textFieldIconSwitcher: {
        type: 'boolean',
        default: false,
    },

    inheritedFieldType: {
        type: 'string',
    },
    inheritedFieldIconSwitcher: {
        type: 'boolean',
    },
    inheritedFieldLabelSwitcher: {
        type: 'boolean',
    },
    inheritedFieldLabel: {
        type: 'string',
    },
    inheritedFieldPlaceholderSwitcher: {
        type: 'boolean',
    },
    inheritedFieldPlaceholder: {
        type: 'string',
    },
    inheritedFieldRequiredFieldSwitcher: {
        type: 'boolean',
    },
    inheritedFieldRequiredSymbolSwitcher: {
        type: 'boolean',
    },
    inheritedFieldRequiredText: {
        type: 'string',
    },

    accordionItemPaddingUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    accordionItemDesktopPadding: {
        type: 'object', 
        default: {
            top: '20',
            bottom: '20',
            left: '20',
            right: '20',
        },
    },
    accordionItemTabPadding: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    accordionItemMobilePadding: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    accordionItemPaddingLink : {
        type : 'boolean',
        default: true
    },

    accordionItemMarginUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    accordionItemDesktopMargin: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    accordionItemTabMargin: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    accordionItemMobileMargin: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    accordionItemMarginLink : {
        type : 'boolean',
        default: true
    },


    accordionItemBorder: {
        type: 'string',
        default: 'none',
    },
    accordionItemBorderColor: {
        type: 'string',
    },
    accordionItemBorderHoverColor: {
        type: 'string',
    },
    accordionItemBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },

    accordionItemBorderUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    accordionItemDesktopBorderWidth: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    accordionItemTabBorderWidth: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    accordionItemMobileBorderWidth: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    accordionItemBorderLink : {
        type : 'boolean',
        default: true
    },

    accordionItemBorderRadiusUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    accordionItemDesktopBorderRadiusWidth: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    accordionItemTabBorderRadiusWidth: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    accordionItemMobileBorderRadiusWidth: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    accordionItemBorderRadiusLink : {
        type : 'boolean',
        default: true
    },
    accordionItemDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    accordionItemTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    accordionItemMobileSwitcher: {
        type: 'boolean',
        default: false,
    },

    accordionItemBoxShadowValues: {
        type: 'array',
        default: [],
    },
    accordionItemBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    accordionItemBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    accordionItemBgType: {
        type: 'string',
        default: 'classic'
    },
    accordionItemBgClassicColor: {
        type: 'string',
    },
    accordionItemBgGradientColor: {
        type: 'string',
    },
    accordionItemBgCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    accordionItemBgCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    accordionItemBgColorStyle: {
        type: 'string',
        default: ''
    },
    accordionItemBgImageUrl: {
        type: 'string',
        default: ''
    },
    accordionItemBgImageAlt: {
        type: 'string',
        default: ''
    },
    accordionItemBgImageID: {
        type: 'string',
        default: ''
    },
    accordionItemBgImagePosition: {
        type: 'string',
        default: ''
    },
    accordionItemBgImageAttachment: {
        type: 'string',
        default: ''
    },
    accordionItemBgImageSize: {
        type: 'string',
        default: ''
    },
    accordionItemBgImageRepeat: {
        type: 'string',
        default: ''
    },
    accordionItemBgHoverType: {
        type: 'string',
        default: 'classic'
    },
    accordionItemBgHoverClassicColor: {
        type: 'string',
    },
    accordionItemBgHoverGradientColor: {
        type: 'string',
    },
    accordionItemBgHoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    accordionItemBgHoverCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    accordionItemBgHoverColorStyle: {
        type: 'string',
        default: ''
    },
    accordionItemBgHoverImageUrl: {
        type: 'string',
        default: ''
    },
    accordionItemBgHoverImageAlt: {
        type: 'string',
        default: ''
    },
    accordionItemBgHoverImageID: {
        type: 'string',
        default: ''
    },
    accordionItemBgHoverImagePosition: {
        type: 'string',
        default: ''
    },
    accordionItemBgHoverImageAttachment: {
        type: 'string',
        default: ''
    },
    accordionItemBgHoverImageSize: {
        type: 'string',
        default: ''
    },
    accordionItemBgHoverImageRepeat: {
        type: 'string',
        default: ''
    },

    /** Start Class & ID Setting */
    accordionItemCustomCSS : {
        type: 'string',
        default: '',
    },
    accordionItemGlobalWraperID : {
		type: 'string',
		default: ''
	},

    accordionItemGlobalWraperClass : {
		type: 'string',
		default: ''
	},
    /** End Class & ID Setting */   
};

export default attributes;
