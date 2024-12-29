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
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionIconBorderTablet: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionIconBorderMobile: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
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
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionIconBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionIconBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionIconBorderRadiusLink : {
        type : "boolean",
        default: true
    },

    accordionItemGap: {
		type: 'object',
		default: {
			Desktop: '20',
			Tablet: '15',
			Mobile: '15'
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
            top: '20',
            bottom: '20',
            left: '20',
            right: '20',
        },
    },
    accordionIconPaddingTablet: {
        type: "object", 
        default: {
            top: '20',
            bottom: '20',
            left: '20',
            right: '20',
        },
    },
    accordionIconPaddingMobile: {
        type: "object", 
        default: {
            top: '20',
            bottom: '20',
            left: '20',
            right: '20',
        },
    },
    accordionIconPaddingLink : {
        type : "boolean",
        default: true
    },

    titleSpacing: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '16',
			Mobile: '16'
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
			Desktop: '20',
			Tablet: '15',
			Mobile: '15'
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
			Desktop: '22',
			Tablet: '20',
			Mobile: '18'
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
			Desktop: '22',
			Tablet: '20',
			Mobile: '18'
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
			Desktop: '22',
			Tablet: '20',
			Mobile: '18'
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
        default: "angle-right",
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
        default: "angle-down",
    },

    /** Start expanded Image */
    expandedImageUrl: {
        type: "string",
        default: ""
    },
    expandedImageAlt: {
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
        default: "#FFFFFF",
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
        default: "#FFFFFF",
    },

    tagName: {
        type: "string",
        default: "h4",
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
            top: '20',
            bottom: '20',
            left: '20',
            right: '20',
        },
    },
    accordionItemsTabPadding: {
        type: "object", 
        default: {
            top: '20',
            bottom: '20',
            left: '20',
            right: '20',
        },
    },
    accordionItemsMobilePadding: {
        type: "object", 
        default: {
            top: '20',
            bottom: '20',
            left: '20',
            right: '20',
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
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionItemsTabBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionItemsMobileBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
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
            top: '8',
            bottom: '8',
            left: '8',
            right: '8',
        },
    },
    accordionItemsTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '8',
            bottom: '8',
            left: '8',
            right: '8',
        },
    },
    accordionItemsMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '8',
            bottom: '8',
            left: '8',
            right: '8',
        },
    },
    accordionItemsBorderRadiusLink : {
        type : "boolean",
        default: true
    },

    accordionZIndex : {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
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
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionTabPadding: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionMobilePadding: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
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
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionTabMargin: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionMobileMargin: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
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
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionTabBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionMobileBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
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
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    accordionMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
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
    accordionBgClassicColor: {
        type: "string",
    },
    accordionBgGradientColor: {
        type: "string",
    },
    accordionBgCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    accordionBgCustomGradientInputValue: {
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
    accordionBgHoverClassicColor: {
        type: "string",
    },
    accordionBgHoverGradientColor: {
        type: "string",
    },
    accordionBgHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    accordionBgHoverCustomGradientInputValue: {
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
    titleBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    titleBgType: {
        type: "string",
        default: "classic"
    },
    titleBgClassicColor: {
        type: "string",
        default: "#EBF5FF"
    },
    titleBgGradientColor: {
        type: "string",
    },
    titleBgCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    titleBgCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    titleBgColorStyle: {
        type: "string",
        default: ""
    },
    titleBgImageUrl: {
        type: "string",
        default: ""
    },
    titleBgImageAlt: {
        type: "string",
        default: ""
    },
    titleBgImageID: {
        type: "string",
        default: ""
    },
    titleBgImagePosition: {
        type: "string",
        default: ""
    },
    titleBgImageAttachment: {
        type: "string",
        default: ""
    },
    titleBgImageSize: {
        type: "string",
        default: ""
    },
    titleBgImageRepeat: {
        type: "string",
        default: ""
    },
    titleBgHoverType: {
        type: "string",
        default: "classic"
    },
    titleBgHoverClassicColor: {
        type: "string",
        default: "#399CFF"
    },
    titleBgHoverGradientColor: {
        type: "string",
    },
    titleBgHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    titleBgHoverCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    titleBgHoverColorStyle: {
        type: "string",
        default: ""
    },
    titleBgHoverImageUrl: {
        type: "string",
        default: ""
    },
    titleBgHoverImageAlt: {
        type: "string",
        default: ""
    },
    titleBgHoverImageID: {
        type: "string",
        default: ""
    },
    titleBgHoverImagePosition: {
        type: "string",
        default: ""
    },
    titleBgHoverImageAttachment: {
        type: "string",
        default: ""
    },
    titleBgHoverImageSize: {
        type: "string",
        default: ""
    },
    titleBgHoverImageRepeat: {
        type: "string",
        default: ""
    },

    contentPaddingUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    contentDesktopPadding: {
        type: "object", 
        default: {
            top: '20',
            bottom: '20',
            left: '20',
            right: '20',
        },
    },
    contentTabPadding: {
        type: "object", 
        default: {
            top: '20',
            bottom: '20',
            left: '20',
            right: '20',
        },
    },
    contentMobilePadding: {
        type: "object", 
        default: {
            top: '20',
            bottom: '20',
            left: '20',
            right: '20',
        },
    },
    contentPaddingLink : {
        type : "boolean",
        default: true
    },
    
    contentMarginUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    contentDesktopMargin: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    contentTabMargin: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    contentMobileMargin: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    contentMarginLink : {
        type : "boolean",
        default: true
    },
    
    
    contentBorder: {
        type: 'string',
        default: "none",
    },
    contentBorderColor: {
        type: 'string',
    },
    contentBorderHoverColor: {
        type: 'string',
    },
    contentBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    
    contentBorderUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    contentDesktopBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    contentTabBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    contentMobileBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    contentBorderLink : {
        type : "boolean",
        default: true
    },
    
    contentBorderRadiusUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    contentDesktopBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    contentTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    contentMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    contentBorderRadiusLink : {
        type : "boolean",
        default: true
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
    
    contentBoxShadowValues: {
        type: 'array',
        default: [],
    },
    contentBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    contentBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    contentBgType: {
        type: "string",
        default: "classic"
    },
    contentBgClassicColor: {
        type: "string",
    },
    contentBgGradientColor: {
        type: "string",
    },
    contentBgCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    contentBgCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    contentBgColorStyle: {
        type: "string",
        default: ""
    },
    contentBgImageUrl: {
        type: "string",
        default: ""
    },
    contentBgImageAlt: {
        type: "string",
        default: ""
    },
    contentBgImageID: {
        type: "string",
        default: ""
    },
    contentBgImagePosition: {
        type: "string",
        default: ""
    },
    contentBgImageAttachment: {
        type: "string",
        default: ""
    },
    contentBgImageSize: {
        type: "string",
        default: ""
    },
    contentBgImageRepeat: {
        type: "string",
        default: ""
    },
    contentBgHoverType: {
        type: "string",
        default: "classic"
    },
    contentBgHoverClassicColor: {
        type: "string",
    },
    contentBgHoverGradientColor: {
        type: "string",
    },
    contentBgHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    contentBgHoverCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    contentBgHoverColorStyle: {
        type: "string",
        default: ""
    },
    contentBgHoverImageUrl: {
        type: "string",
        default: ""
    },
    contentBgHoverImageAlt: {
        type: "string",
        default: ""
    },
    contentBgHoverImageID: {
        type: "string",
        default: ""
    },
    contentBgHoverImagePosition: {
        type: "string",
        default: ""
    },
    contentBgHoverImageAttachment: {
        type: "string",
        default: ""
    },
    contentBgHoverImageSize: {
        type: "string",
        default: ""
    },
    contentBgHoverImageRepeat: {
        type: "string",
        default: ""
    },
};

export default attributes;
