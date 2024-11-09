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

    /** Start Icon Color */
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
    /** End Icon Color */

    /** Start Icon Background Color */
    FeatureIconBgColorSwitcher: {
        type: "string",
        default: "normal",
    },
    FeatureIconNormalBackgroundType: {
        type: "string",
        default: "classic",
    },
    FeatureIconNormalClassicColor: {
        type: "string",
        default: "#399CFF",
    },
    FeatureIconNormalGradientColor: {
        type: "string",
        default: null,
    },
    FeatureIconNormalCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    FeatureIconNormalCustomGradientInputValue: {
        type: "string",
        default: "",
    },
    
    FeatureIconHoverBackgroundType: {
        type: "string",
        default: "classic",
    },
    FeatureIconHoverClassicColor: {
        type: "string",
        default: "#399CFF",
    },
    FeatureIconHoverGradientColor: {
        type: "string",
        default: null,
    },
    FeatureIconHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    FeatureIconHoverCustomGradientInputValue: {
        type: "string",
        default: "",
    },
    /** End Icon Background Color */

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




    /** Start Global Setting */
	FeatureGlobalZIndex : {
        type: "number",
    },
	/** Start Padding */
	FeatureGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	FeatureGlobalPaddingDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	FeatureGlobalPaddingTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	FeatureGlobalPaddingMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	FeatureGlobalPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Margin */
	FeatureGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	FeatureGlobalMarginDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	FeatureGlobalMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	FeatureGlobalMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	FeatureGlobalMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */



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


    FeatureGlobalNormalBackgroundImageUrl: { 
        type: "string",
        default: ""
    },

    FeatureGlobalNormalBackgroundImageAlt: {
        type: "string",
        default: ""
    },

    FeatureGlobalNormalBackgroundImageID: {
        type: "string",
        default: ""
    },

    FeatureGlobalNormalBackgroundImagePosition: {
        type: "string",
        default: ""
    },

    FeatureGlobalNormalBackgroundImageAttachment: {
        type: "string",
        default: ""
    },

    FeatureGlobalNormalBackgroundImageRepeat: {
        type: "string",
        default: ""
    },

    FeatureGlobalNormalBackgroundImageSize: {
        type: "string",
        default: ""
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

    FeatureGlobalHoverBackgroundImageUrl: {
        type: "string",
        default: ""
    },

    FeatureGlobalHoverBackgroundImageAlt: {
        type: "string",
        default: ""
    },

    FeatureGlobalHoverBackgroundImageID: {
        type: "string",
        default: ""
    },

    FeatureGlobalHoverBackgroundImagePosition: {
        type: "string",
        default: ""
    },

    FeatureGlobalHoverBackgroundImageAttachment: {
        type: "string",
        default: ""
    },

    FeatureGlobalHoverBackgroundImageRepeat: {
        type: "string",
        default: ""
    },

    FeatureGlobalHoverBackgroundImageSize: {
        type: "string",
        default: ""
    },
    /** End Background Color */



	/** Start Border */
	FeatureGlobalBorder: {
		type: 'string',
		default: "none",
	},
	FeatureGlobalBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	FeatureGlobalBorderColor: {
		type: 'string',
		default: ""
	},
	FeatureGlobalBorderHoverColor: {
		type: 'string',
	},
	FeatureGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	FeatureGlobalBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	FeatureGlobalBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	FeatureGlobalBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	FeatureGlobalBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	FeatureGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	FeatureGlobalBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	FeatureGlobalBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	FeatureGlobalBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	FeatureGlobalBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
	FeatureGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    FeatureGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */
    
};

export default attributes;
