const attributes = {
    // the following 4 attributes is must required for responsive options and asset generation for frontend
    // responsive control attributes ⬇
    deviceType: {
        type: "string",
        default: "Desktop",
    },
    // blockID attribute for making unique className and other uniqueness ⬇
    blockID: {
        type: "string",
    },
    blockStyle: {
        type: "string",
        default: "",
    },
    blockStyleTwo: {
        type: "string",
        default: "",
    },
    blockRoot: {
        type: "string",
        default: "frontis_block",
    },
    // blockMeta is for keeping all the styles ⬇
    blockMeta: {
        type: "object",
    },

    itemId: {
        type: "string",
    },
    title: {
        type: "string",
    },

    clickable: {
        type: "boolean",
        default: false,
    },
    toggleClick: {
        type: "boolean",
        default: false,
    },

    accordionItemColorSwitcher: {
        type: "string",
        default: "normal"
    },
    accordionItemColor: {
        type: "string",
        default: "antiquewhite"
    },
    accordionItemHoverColor: {
        type: 'string',
        default: "antiquewhite"
    },

    iconColorSwitcher: {
        type: "string",
        default: "normal"
    },
    iconColor: {
        type: "string",
        default: "#000000"
    },
    iconHoverColor: {
        type: 'string',
        default: "#000000"
    },

    inheritedAccordionType: {
        type: "string",
        default: "accordion",
    },
    inheritedTagName: {
        type: "string",
        default: "h3",
    },
    inheritedDisplayIcon: {
        type: "boolean",
        default: true,
    },
    inheritedTabIconSwitcher: {
        type: "string",
    },
    inheritedTabIcon: {
        type: "string",
    },
    inheritedTabImageUrl: {
        type: "string",
    },
    inheritedExpandedIconSwitcher: {
        type: "string",
    },
    inheritedExpandedIcon: {
        type: "string",
    },
    inheritedExpandedImageUrl: {
        type: "string",
    },
    faqSchema: {
        type: "boolean",
        default: false,
    },
    parentBlockID: {
        type: "string",
    },
    titlePrefixType: {
        type: "string",
        default: "none",
    },

    titlePrefixColorSwitcher: {
        type: "string",
        default: "normal"
    },
    titlePrefixColor: {
        type: "string",
        default: "#000"
    },
    titlePrefixHoverColor: {
        type: 'string',
        default: "#000"
    },

    titlePrefixImgUrl: {
        type: "string",
        default: ""
    },
    titlePrefixImgAlt: {
        type: "string",
        default: ""
    },
    titlePrefixImgID: {
        type: "string",
        default: ""
    },
    titlePrefixImgPosition: {
        type: "string",
        default: ""
    },
    titlePrefixImgAttachment: {
        type: "string",
        default: ""
    },
    titlePrefixImgRepeat: {
        type: "string",
        default: ""
    },
    titlePrefixImgSize: {
        type: "string",
        default: ""
    },

    titleSuffixType: {
        type: "string",
        default: "none",
    },

    titleSuffixColorSwitcher: {
        type: "string",
        default: "normal"
    },
    titleSuffixColor: {
        type: "string",
        default: "#000"
    },
    titleSuffixHoverColor: {
        type: 'string',
        default: "#000"
    },

    titleSuffixImgUrl: {
        type: "string",
        default: ""
    },
    titleSuffixImgAlt: {
        type: "string",
        default: ""
    },
    titleSuffixImgID: {
        type: "string",
        default: ""
    },
    titleSuffixImgPosition: {
        type: "string",
        default: ""
    },
    titleSuffixImgAttachment: {
        type: "string",
        default: ""
    },
    titleSuffixImgRepeat: {
        type: "string",
        default: ""
    },
    titleSuffixImgSize: {
        type: "string",
        default: ""
    },
    
    
    titlePrefixIcon: {
        type: "string",
        default: "quote-left",
    },
    titleSuffixIcon: {
        type: "string",
        default: "quote-left",
    },

    accordionItemZIndex : {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
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
        type: "object", 
        default: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
        },
    },
    accordionItemTabPadding: {
        type: "object", 
        default: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
        },
    },
    accordionItemMobilePadding: {
        type: "object", 
        default: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
        },
    },
    accordionItemPaddingLink : {
        type : "boolean",
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
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionItemTabMargin: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionItemMobileMargin: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionItemMarginLink : {
        type : "boolean",
        default: true
    },


    accordionItemBorder: {
        type: 'string',
        default: "none",
    },
    accordionItemBorderColor: {
        type: 'string',
    },
    accordionItemBorderHoverColor: {
        type: 'string',
    },
    accordionItemBorderColorSwitcher : {
        type: "string",
        default: "normal"
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
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionItemTabBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionItemMobileBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionItemBorderLink : {
        type : "boolean",
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
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionItemTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionItemMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionItemBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    accordionItemDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    accordionItemTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    accordionItemMobileSwitcher: {
        type: "boolean",
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
        type: "string",
        default: "normal"
    },
    accordionItemBgType: {
        type: "string",
        default: "classic"
    },
    accordionItemBgClassicColor: {
        type: "string",
    },
    accordionItemBgGradientColor: {
        type: "string",
    },
    accordionItemBgCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    accordionItemBgCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    accordionItemBgColorStyle: {
        type: "string",
        default: ""
    },
    accordionItemBgImageUrl: {
        type: "string",
        default: ""
    },
    accordionItemBgImageAlt: {
        type: "string",
        default: ""
    },
    accordionItemBgImageID: {
        type: "string",
        default: ""
    },
    accordionItemBgImagePosition: {
        type: "string",
        default: ""
    },
    accordionItemBgImageAttachment: {
        type: "string",
        default: ""
    },
    accordionItemBgImageSize: {
        type: "string",
        default: ""
    },
    accordionItemBgImageRepeat: {
        type: "string",
        default: ""
    },
    accordionItemBgHoverType: {
        type: "string",
        default: "classic"
    },
    accordionItemBgHoverClassicColor: {
        type: "string",
    },
    accordionItemBgHoverGradientColor: {
        type: "string",
    },
    accordionItemBgHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    accordionItemBgHoverCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    accordionItemBgHoverColorStyle: {
        type: "string",
        default: ""
    },
    accordionItemBgHoverImageUrl: {
        type: "string",
        default: ""
    },
    accordionItemBgHoverImageAlt: {
        type: "string",
        default: ""
    },
    accordionItemBgHoverImageID: {
        type: "string",
        default: ""
    },
    accordionItemBgHoverImagePosition: {
        type: "string",
        default: ""
    },
    accordionItemBgHoverImageAttachment: {
        type: "string",
        default: ""
    },
    accordionItemBgHoverImageSize: {
        type: "string",
        default: ""
    },
    accordionItemBgHoverImageRepeat: {
        type: "string",
        default: ""
    },
};

export default attributes;
