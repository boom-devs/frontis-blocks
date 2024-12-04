const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    blockStyle: {
        type: "string",
        default: "",
    },
    deviceType: {
        type: "string",
        default: "Desktop"
    },

    accordionIconBorder: {
        type: 'string',
        default: "none",
    },
    accordionIconBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    accordionIconBorderColor: {
        type: 'string',
    },
    accordionIconBorderHoverColor: {
        type: 'string',
    },
    accordionIconBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    accordionIconBorderDesktop: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionIconBorderTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionIconBorderMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionIconBorderLink : {
        type : "boolean",
        default: true
    },
    accordionIconBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    accordionIconBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionIconBorderRadiusTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionIconBorderRadiusMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionIconBorderRadiusLink : {
        type : "boolean",
        default: true
    },

    accordionItemGap: {
		type: 'object',
		default: {
			Desktop: 20,
			Tablet: 15,
			Mobile: 15
		}
	},
	accordionItemGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    
    accordionIconPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    accordionIconPaddingDesktop: {
        type: "object", 
        default: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
        },
    },
    accordionIconPaddingTablet: {
        type: "object", 
        default: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
        },
    },
    accordionIconPaddingMobile: {
        type: "object", 
        default: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
        },
    },
    accordionIconPaddingLink : {
        type : "boolean",
        default: true
    },

    titleSpacing: {
		type: 'object',
		default: {
			Desktop: 16,
			Tablet: 16,
			Mobile: 16
		}
	},
	titleSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    prefixSuffixSpacing: {
		type: 'object',
		default: {
			Desktop: 20,
			Tablet: 15,
			Mobile: 15
		}
	},
	prefixSuffixSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    titleSuffixIconSize: {
		type: 'object',
		default: {
			Desktop: 22,
			Tablet: 20,
			Mobile: 18
		}
	},
	titleSuffixIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    titleIconSize: {
		type: 'object',
		default: {
			Desktop: 22,
			Tablet: 20,
			Mobile: 18
		}
	},
	titleIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    titlePrefixIconSize: {
		type: 'object',
		default: {
			Desktop: 22,
			Tablet: 20,
			Mobile: 18
		}
	},
	titlePrefixIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    titleFontFamily: {
        type: "string",
        default: "",
    },
    titleFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	titleFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
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
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	titleLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    titleLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	titleLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    accordionType: {
        type: "string",
        source: "attribute",
        selector: ".fb-accordion-container",
        attribute: "data-accordion-type",
        default: "accordion",
    },
    displayIcon: {
        type: "boolean",
        default: true,
    },
    tabIconSwitcher : {
        type: "string",
        default: "icon"
    },
    tabIcon: {
        type: "string",
        default: "angles-right",
    },

    /** Start Tab Image */
    tabImageUrl: {
        type: "string",
        default: ""
    },
    tabImageAlt: {
        type: "string",
        default: ""
    },
    tabImageID: {
        type: "string",
        default: ""
    },
    tabImagePosition: {
        type: "string",
        default: ""
    },
    tabImageAttachment: {
        type: "string",
        default: ""
    },
    tabImageRepeat: {
        type: "string",
        default: ""
    },
    tabImageSize: {
        type: "string",
        default: ""
    },
    /** End Tab Image */

    expandedIconSwitcher: {
        type: "string",
        default: "icon"
    },
    expandedIcon: {
        type: "string",
        default: "angles-down",
    },

    /** Start expanded Image */
    expandedImageUrl: {
        type: "string",
        default: ""
    },
    taImageAlt: {
        type: "string",
        default: ""
    },
    expandedImageID: {
        type: "string",
        default: ""
    },
    expandedImagePosition: {
        type: "string",
        default: ""
    },
    expandedImageAttachment: {
        type: "string",
        default: ""
    },
    expandedImageRepeat: {
        type: "string",
        default: ""
    },
    expandedImageSize: {
        type: "string",
        default: ""
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
        default: "normal"
    },
    titleColor: {
        type: "string",
        default: "#000000",
    },
    titleHoverColor: {
        type: "string",
        default: "#000000",
    },

    titleBGColorSwitcher: {
        type: "string",
        default: "normal"
    },
    titleBGColor: {
        type: "string",
        default: "antiquewhite",
    },
    titleBGHoverColor: {
        type: "string",
        default: "antiquewhite",
    },

    titleIconColorSwitcher: {
        type: "string",
        default: "normal"
    },
    titleIconColor: {
        type: "string",
        default: "#000000",
    },
    titleIconHoverColor: {
        type: "string",
        default: "#000000",
    },

    tagName: {
        type: "string",
        default: "h3",
    },
    accordionChildCount: {
        type: "number",
        default: 3,
    },
    faqSchema: {
        type: "boolean",
        default: false,
    },

    accordionItemsPaddingUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    accordionItemsDesktopPadding: {
        type: "object", 
        default: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
        },
    },
    accordionItemsTabPadding: {
        type: "object", 
        default: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
        },
    },
    accordionItemsMobilePadding: {
        type: "object", 
        default: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
        },
    },
    accordionItemsPaddingLink : {
        type : "boolean",
        default: true
    },

    accordionItemsBorder: {
        type: 'string',
        default: "none",
    },
    accordionItemsBorderColor: {
        type: 'string',
    },
    accordionItemsBorderHoverColor: {
        type: 'string',
    },
    accordionItemsBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    
    accordionItemsBorderUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    accordionItemsDesktopBorderWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionItemsTabBorderWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionItemsMobileBorderWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionItemsBorderLink : {
        type : "boolean",
        default: true
    },
    
    accordionItemsBorderRadiusUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    accordionItemsDesktopBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 8,
            bottom: 8,
            left: 8,
            right: 8,
        },
    },
    accordionItemsTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 8,
            bottom: 8,
            left: 8,
            right: 8,
        },
    },
    accordionItemsMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 8,
            bottom: 8,
            left: 8,
            right: 8,
        },
    },
    accordionItemsBorderRadiusLink : {
        type : "boolean",
        default: true
    },


    accordionZIndex : {
        type: "number",
    },
    
    accordionPaddingUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    accordionDesktopPadding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionTabPadding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionMobilePadding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionPaddingLink : {
        type : "boolean",
        default: true
    },
    
    accordionMarginUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    accordionDesktopMargin: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionTabMargin: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionMobileMargin: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionMarginLink : {
        type : "boolean",
        default: true
    },
    
    
    accordionBorder: {
        type: 'string',
        default: "none",
    },
    accordionBorderColor: {
        type: 'string',
    },
    accordionBorderHoverColor: {
        type: 'string',
    },
    accordionBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    
    accordionBorderUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    accordionDesktopBorderWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionTabBorderWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionMobileBorderWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionBorderLink : {
        type : "boolean",
        default: true
    },
    
    accordionBorderRadiusUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    accordionDesktopBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    accordionBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    accordionDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    accordionTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    accordionMobileSwitcher: {
        type: "boolean",
        default: false,
    },


    accordionGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    accordionGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    accordionBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    accordionBgType: {
        type: "string",
        default: "classic"
    },
    accordionClassicColor: {
        type: "string",
    },
    accordionGradientColor: {
        type: "string",
    },
    accordionCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    accordionCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    accordionBgColorStyle: {
        type: "string",
        default: ""
    },
    accordionBgImageUrl: {
        type: "string",
        default: ""
    },
    accordionBgImageAlt: {
        type: "string",
        default: ""
    },
    accordionBgImageID: {
        type: "string",
        default: ""
    },
    accordionBgImagePosition: {
        type: "string",
        default: ""
    },
    accordionBgImageAttachment: {
        type: "string",
        default: ""
    },
    accordionBgImageSize: {
        type: "string",
        default: ""
    },
    accordionBgImageRepeat: {
        type: "string",
        default: ""
    },
    accordionBgHoverType: {
        type: "string",
        default: "classic"
    },
    accordionHoverClassicColor: {
        type: "string",
    },
    accordionHoverGradientColor: {
        type: "string",
    },
    accordionHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    accordionHoverCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    accordionBgHoverColorStyle: {
        type: "string",
        default: ""
    },
    accordionBgHoverImageUrl: {
        type: "string",
        default: ""
    },
    accordionBgHoverImageAlt: {
        type: "string",
        default: ""
    },
    accordionBgHoverImageID: {
        type: "string",
        default: ""
    },
    accordionBgHoverImagePosition: {
        type: "string",
        default: ""
    },
    accordionBgHoverImageAttachment: {
        type: "string",
        default: ""
    },
    accordionBgHoverImageSize: {
        type: "string",
        default: ""
    },
    accordionBgHoverImageRepeat: {
        type: "string",
        default: ""
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
    accordionItemClassicColor: {
        type: "string",
    },
    accordionItemGradientColor: {
        type: "string",
    },
    accordionItemCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    accordionItemCustomGradientInputValue: {
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
    accordionItemHoverClassicColor: {
        type: "string",
    },
    accordionItemHoverGradientColor: {
        type: "string",
    },
    accordionItemHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    accordionItemHoverCustomGradientInputValue: {
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
