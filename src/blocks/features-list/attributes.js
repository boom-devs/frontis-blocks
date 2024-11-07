const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    deviceType: {
        type: "string",
        default: "Desktop"
    },
    FeatureItems: {
        type: "array",
        default: [
            // You can define some default items if needed
            { id: 'item-1', Title: 'Feature Item 1', Description: 'Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna', FeatureIcon: 'check', },
            { id: 'item-2', Title: 'Feature Item 2', Description: 'Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna', FeatureIcon: 'check', },
            { id: 'item-3', Title: 'Feature Item 3', Description: 'Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna', FeatureIcon: 'check', },
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
                Description: {
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
    FeatureTag: {
        type : "string",
        default: "h3"
    },
    FeatureIconShape: {
        type: "string",
        default: "circle"
    },
    FeatureAlignment: {
        type: "string",
        default: "left",
    },
    FeatureIconAlignment: {
        type: "string",
        default: "left",
    },

    FeatureListGap: {
		type: 'object',
		default: {
			Desktop: '20',
			Tablet: '15',
			Mobile: '10'
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

    /** Start Icon */
    FeatureIconColorSwitcher : {
        type: "string",
        default: "normal"
    },
    FeatureIconColor : {
        type: "string",
        default: "#fff"
    },
    FeatureIconHoverColor: {
        type: 'string',
        default: "#fff"
    },


    FeatureIconBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    FeatureIconBgColor : {
        type: "string",
        default: "#399CFF"
    },
    FeatureIconBgHoverColor: {
        type: 'string',
        default: "#399CFF"
    },


    FeatureIconSize: {
		type: 'object',
		default: {
			Desktop: '25',
			Tablet: '25',
			Mobile: '25'
		}
	},
	FeatureIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    FeatureIconBgSize: {
		type: 'object',
		default: {
			Desktop: '60',
			Tablet: '60',
			Mobile: '60'
		}
	},
	FeatureIconBgSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    FeatureIconSpacing: {
		type: 'object',
		default: {
			Desktop: '20',
			Tablet: '20',
			Mobile: '20'
		}
	},
	FeatureIconSpacingUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    /** Start Title */
    FeatureTitleFontFamily: {
        type: "string",
        default: "inherit",
    },
    FeatureTitleFontSize: {
		type: 'object',
		default: {
			Desktop: '18',
			Tablet: '18',
			Mobile: '18'
		}
	},
	FeatureTitleFontSizeUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    FeatureTitleFontWeight: {
        type: "string",
        default: "600"
    },
    FeatureTitleFontStyle: {
        type: "string",
        default: "normal"
    },
    FeatureTitleTextTransform: {
        type: "string",
        default: "none"
    },
    FeatureTitleTextDecoration: {
        type: "string",
        default: "none"
    },
    FeatureTitleLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	FeatureTitleLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    FeatureTitleLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	FeatureTitleLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    FeatureTitleColorSwitcher : {
        type: "string",
        default: "normal"
    },
    FeatureTitleColor : {
        type: "string",
        default: ""
    },
    FeatureTitleHoverColor: {
        type: 'string',
        default: ""
    },
    /** End Title */

    /** Start Description */
    FeatureDescFontFamily: {
        type: "string",
        default: "inherit",
    },
    FeatureDescFontSize: {
        type: 'object',
        default: {
            Desktop: 14,
            Tablet: 14,
            Mobile: 14
        }
    },
    FeatureDescFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    FeatureDescFontWeight: {
        type: "string",
        default: "400"
    },
    FeatureDescFontStyle: {
        type: "string",
        default: "normal"
    },
    FeatureDescTextTransform: {
        type: "string",
        default: "none"
    },
    FeatureDescTextDecoration: {
        type: "string",
        default: "none"
    },
    FeatureDescLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    FeatureDescLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    FeatureDescLineHeight: {
        type: 'object',
        default: {
            Desktop: 'inherit',
            Tablet: 'inherit',
            Mobile: 'inherit'
        }
    },
    FeatureDescLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    FeatureDescColorSwitcher : {
        type: "string",
        default: "normal"
    },
    FeatureDescColor : {
        type: "string",
        default: ""
    },
    FeatureDescHoverColor: {
        type: 'string',
        default: ""
    },
    /** End Description */


    FeatureZIndex : {
        type: "number",
    },

    FeaturePaddingUnits : {
        type: "string",
        default: "px"
    },
    FeatureDesktopPadding: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureTabPadding: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureMobilePadding: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeaturePaddingLink : {
        type : "boolean",
        default: true
    },
    FeatureMarginUnits : {
        type: "string",
        default: "px"
    },
    FeatureDesktopMargin: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureTabMargin: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureMobileMargin: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureMarginLink : {
        type : "boolean",
        default: true
    },



    /** Start Background Color */
    FeatureGlobalBgColorSwitcher: {
        type: "string",
        default: "normal",
    },
    FeatureGlobalNormalBackgroundType: {
        type: "string",
        default: "classic",
    },
    FeatureGlobalNormalClassicColor: {
        type: "string",
        default: "",
    },
    FeatureGlobalNormalGradientColor: {
        type: "string",
        default: null,
    },
    FeatureGlobalNormalCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    FeatureGlobalNormalCustomGradientInputValue: {
        type: "string",
        default: "",
    },

    FeatureGlobalHoverBackgroundType: {
        type: "string",
        default: "classic",
    },
    FeatureGlobalHoverClassicColor: {
        type: "string",
        default: "",
    },
    FeatureGlobalHoverGradientColor: {
        type: "string",
        default: null,
    },
    FeatureGlobalHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    FeatureGlobalHoverCustomGradientInputValue: {
        type: "string",
        default: "",
    },
    /** End Background Color */

    FeatureBorder: {
        type: 'string',
        default: "none",
    },
    FeatureBorderColor: {
        type: 'string',
    },
    FeatureBorderHoverColor: {
        type: 'string',
    },
    FeatureBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },

    FeatureBorderUnits : {
        type: "string",
        default: "px"
    },
    FeatureDesktopBorderWidth: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureTabBorderWidth: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureMobileBorderWidth: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureBorderLink : {
        type : "boolean",
        default: true
    },

    FeatureBorderRadiusUnits : {
        type: "string",
        default: "px"
    },
    FeatureDesktopBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    FeatureDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    FeatureTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    FeatureMobileSwitcher: {
        type: "boolean",
        default: false,
    },
    FeatureboxShadowValues: {
        type: 'array',
        default: [],
    },
    FeatureboxShadowCssValue: {
        type: 'string',
        default: '',
    },
    
};

export default attributes;
