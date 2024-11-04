const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    deviceType: {
        type: "string",
        default: "Desktop"
    },
    socialTitleSwitcher: {
        type: "boolean",
        default: false,
    },
    socialItems: {
        type: "array",
        default: [
            {
                id: 'item-1',
                socialIcon: 'facebook-f',
                socialIconUrl: '#',
                socialIconTitle: 'Facebook',
                socialIconTargetUrl: false,
                socialIconColorSwitcher: 'normal',
                socialIconColor: '',
                socialIconHoverColor: '',
                socialIconBgColor: '',
                socialIconHoverBgColor: '',

                socialItemBgColorSwitcher: 'normal',

                normalItemBackgroundType: 'classic',
                normalItemClassicColor: '',
                normalItemGradientColor: null,
                normalItemCustomGradientSwitcher: false,
                normalItemCustomGradientInputValue: '',

                hoverItemBackgroundType: 'classic',
                hoverItemClassicColor: '',
                hoverItemGradientColor: null,
                hoverItemCustomGradientSwitcher: false,
                hoverItemCustomGradientInputValue: '',
            },
            {
                id: 'item-2',
                socialIcon: 'x-twitter',
                socialIconUrl: '#',
                socialIconTitle: 'Twitter',
                socialIconTargetUrl: false,
                socialIconColorSwitcher: 'normal',
                socialIconColor: '',
                socialIconHoverColor: '',
                socialIconBgColor: '',
                socialIconHoverBgColor: '',

                socialItemBgColorSwitcher: 'normal',

                normalItemBackgroundType: 'classic',
                normalItemClassicColor: '',
                normalItemGradientColor: null,
                normalItemCustomGradientSwitcher: false,
                normalItemCustomGradientInputValue: '',

                hoverItemBackgroundType: 'classic',
                hoverItemClassicColor: '',
                hoverItemGradientColor: null,
                hoverItemCustomGradientSwitcher: false,
                hoverItemCustomGradientInputValue: '',
            },
            {
                id: 'item-3',
                socialIcon: 'youtube',
                socialIconUrl: '#',
                socialIconTitle: 'Youtube',
                socialIconTargetUrl: false,
                socialIconColorSwitcher: 'normal',
                socialIconColor: '',
                socialIconHoverColor: '',
                socialIconBgColor: '',
                socialIconHoverBgColor: '',

                socialItemBgColorSwitcher: 'normal',

                normalItemBackgroundType: 'classic',
                normalItemClassicColor: '',
                normalItemGradientColor: null,
                normalItemCustomGradientSwitcher: false,
                normalItemCustomGradientInputValue: '',

                hoverItemBackgroundType: 'classic',
                hoverItemClassicColor: '',
                hoverItemGradientColor: null,
                hoverItemCustomGradientSwitcher: false,
                hoverItemCustomGradientInputValue: '',
            },
            {
                id: 'item-4',
                socialIcon: 'behance',
                socialIconUrl: '#',
                socialIconTitle: 'Behance',
                socialIconTargetUrl: false,
                socialIconColorSwitcher: 'normal',
                socialIconColor: '',
                socialIconHoverColor: '',
                socialIconBgColor: '',
                socialIconHoverBgColor: '',

                socialItemBgColorSwitcher: 'normal',

                normalItemBackgroundType: 'classic',
                normalItemClassicColor: '',
                normalItemGradientColor: null,
                normalItemCustomGradientSwitcher: false,
                normalItemCustomGradientInputValue: '',

                hoverItemBackgroundType: 'classic',
                hoverItemClassicColor: '',
                hoverItemGradientColor: null,
                hoverItemCustomGradientSwitcher: false,
                hoverItemCustomGradientInputValue: '',
            },
        ],
        items: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    default: ""
                },
                socialIconTitle: {
                    type: "string",
                    default: "Title"
                },
                socialIcon: {
                    type: 'string',
                    default: 'behance',
                },
                socialIconUrl: {
                    type: "string",
                    default: "",
                },
                socialIconTargetUrl: {
                    type: "boolean",
                },

                socialIconColorSwitcher: {
                    type: "string",
                    default: "normal",
                },
                socialIconColor: {
                    type: "string",
                    default: "",
                },
                socialIconHoverColor: {
                    type: "string",
                    default: "",
                },
                socialIconBgColor: {
                    type: "string",
                    default: "",
                },
                socialIconHoverBgColor: {
                    type: "string",
                    default: "",
                },

                socialItemBgColorSwitcher: {
                    type: "string",
                    default: "normal",
                },

                normalItemBackgroundType: {
                    type: "string",
                    default: "classic",
                },
                normalItemClassicColor: {
                    type: "string",
                    default: "",
                },
                normalItemGradientColor: {
                    type: "string",
                    default: null,
                },
                normalItemCustomGradientSwitcher: {
                    type: "boolean",
                    default: false,
                },
                normalItemCustomGradientInputValue: {
                    type: "string",
                    default: "",
                },

                hoverItemBackgroundType: {
                    type: "string",
                    default: "classic",
                },
                hoverItemClassicColor: {
                    type: "string",
                    default: "",
                },
                hoverItemGradientColor: {
                    type: "string",
                    default: null,
                },
                hoverItemCustomGradientSwitcher: {
                    type: "boolean",
                    default: false,
                },
                hoverItemCustomGradientInputValue: {
                    type: "string",
                    default: "",
                },
            }
        }
    },

    singleItemColorStyle: {
        type: "string",
        default: "",
    },

    socialIconsPresetStyle: {
        type: "string",
        default: "preset-1",
    },
    
    socialAlignment: {
        type: "string",
        default: "left",
    },
    /** Icon Styles */
    socialIconSize: {
		type: 'object',
		default: {
			Desktop: 20,
			Tablet: 20,
			Mobile: 20
		}
	},
	socialIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    socialIconGlobalColorSwitcher: {
        type: "string",
        default: "normal"
    },
    socialIconGlobalColor: {
        type: "string",
        default: "#399CFF"
    },
    socialIconGlobalHoverColor: {
        type: 'string',
        default: "#399CFF"
    },
    socialIconBgGlobalColorSwitcher : {
        type: "string",
        default: "normal"
    },
    socialIconBgGlobalColor : {
        type: "string",
    },
    socialIconBgGlobalHoverColor: {
        type: 'string',
    },
    socialIconBorder: {
        type: 'string',
        default: "solid",
    },
    socialIconBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    socialIconBorderColor: {
        type: 'string',
        default: "#E1E3E8"
    },
    socialIconBorderHoverColor: {
        type: 'string',
    },
    socialIconBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    socialIconBorderDesktop: {
        type: "object", 
        default: {
            top: '1',
            bottom: '1',
            left: '1',
            right: '1',
        },
    },
    socialIconBorderTablet: {
        type: "object", 
        default: {
            top: '1',
            bottom: '1',
            left: '1',
            right: '1',
        },
    },
    socialIconBorderMobile: {
        type: "object", 
        default: {
            top: '1',
            bottom: '1',
            left: '1',
            right: '1',
        },
    },
    socialIconBorderLink : {
        type : "boolean",
        default: true
    },
    socialIconBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%'
		}
    },
    socialIconBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: '50',
            bottom: '50',
            left: '50',
            right: '50',
        },
    },
    socialIconBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '50', 
            bottom: '50',
            left: '50',
            right: '50',
        },
    },
    socialIconBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '50',
            bottom: '50',
            left: '50',
            right: '50',
        },
    },
    socialIconBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    socialIconGapSize: {
		type: 'object',
		default: {
			Desktop: 20,
			Tablet: 15,
			Mobile: 15
		}
	},
	socialIconGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    socialIconPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    socialIconPaddingDesktop: {
        type: "object", 
        default: {
            top: '15',
            bottom: '15',
            left: '15',
            right: '15',
        },
    },
    socialIconPaddingTablet: {
        type: "object", 
        default: {
            top: '15',
            bottom: '15',
            left: '15',
            right: '15',
        },
    },
    socialIconPaddingMobile: {
        type: "object", 
        default: {
            top: '15',
            bottom: '15',
            left: '15',
            right: '15',
        },
    },
    /*End Icon Styles */


    /** Background Styles */
    socialBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    socialBgColor : {
        type: "string",
    },
    socialBgHoverColor: {
        type: 'string',
    },
    
    /*End Background Styles */

    socialBorder: {
        type: 'string',
        default: "none",
    },
    socialBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    socialBorderColor: {
        type: 'string',
    },
    socialBorderHoverColor: {
        type: 'string',
    },
    socialBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    socialBorderDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialBorderTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialBorderMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialBorderLink : {
        type : "boolean",
        default: true
    },
    socialBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    socialBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '', 
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    socialPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    socialPaddingDesktop: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    socialPaddingTablet: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    socialPaddingMobile: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    socialPaddingLink : {
        type : "boolean",
        default: true
    },

    socialMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    socialMarginDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialMarginTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialMarginMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialMarginLink : {
        type : "boolean",
        default: true
    },

    socialGapSize: {
        type: 'object',
        default: {
            Desktop: 20,
            Tablet: 15,
            Mobile: 15
        }
    },
    socialGapUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },



    /*Global Styles */
    socialGlobalZIndex : {
        type: "number",
    },
    socialGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    socialGlobalPaddingDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialGlobalPaddingTablet: {
        type: "object", 
        default: {
            top: '', 
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialGlobalPaddingMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialGlobalPaddingLink : {
        type : "boolean",
        default: true
    },
    socialGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    socialGlobalMarginDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialGlobalMarginTablet: {
        type: "object", 
        default: {
            top: '', 
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialGlobalMarginMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialGlobalMarginLink : {
        type : "boolean",
        default: true
    },
    socialGlobalBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    socialGlobalBgColor : {
        type: "string",
    },
    socialGlobalBgHoverColor: {
        type: 'string',
    },
    socialGlobalBorder: { 
        type: 'string',
        default: "none",
    },
    socialGlobalBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    socialGlobalBorderColor: {
        type: 'string',
    },
    socialGlobalBorderHoverColor: {
        type: 'string',
    },
    socialGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    socialGlobalBorderDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialGlobalBorderTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialGlobalBorderMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialGlobalBorderLink : {
        type : "boolean",
        default: true
    },
    socialGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    socialGlobalBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialGlobalBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '', 
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialGlobalBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    socialGlobalBorderRadiusLink : {
        type : "boolean",
        default: true
    },

    	/** Start Box Shadow */
	socialGlobalBoxShadowValues: { 
        type: 'array',
        default: [],
    },
    socialGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    /*End Global Styles */

};

export default attributes;