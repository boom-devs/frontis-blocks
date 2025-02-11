const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    deviceType: {
        type: "string",
        default: "Desktop"
    },
    blockStyle: {
        type: 'string',
        default: '',
    },
    videoGlobalZIndex : {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: '',
        }
    },
    videoURL: {
        type: "string",
        default: "https://www.youtube.com/watch?v=WZdCL4Y5EBY",
    },
    autoPlaySwitcher: {
        type: "boolean",
        default: false,
    },
    muteSwitcher: {
        type: "boolean",
        default: false,
    },
    loopSwitcher: {
        type: "boolean",
        default: false,
    },
    showControlsSwitcher: {
        type: "boolean",
        default: false,
    },

    /** Start Image Settings */
    imageOverlaySwitcher: {
        type: "boolean",
        default: false,
    },
    previewImageUrl: {
        type: "string",
        default: ""
    },
    previewImageAlt: {
        type: "string",
        default: ""
    },
    previewImageID: {
        type: "string",
        default: ""
    },
    previewImagePosition: {
        type: "string",
        default: ""
    },
    previewImageAttachment: {
        type: "string",
        default: ""
    },
    previewImageRepeat: {
        type: "string",
        default: ""
    },
    previewImageSize: {
        type: "string",
        default: ""
    },
    /** End Image Settings */
    videoPlayIcon: {
		type: 'string',
		default: 'play',
	},

    /** Start Video Play Icon */
    videoPlayIconSize: {
        type: 'object',
        default: {
            Desktop: 20,
            Tablet: 20,
            Mobile: 20
        }
    },
    videoPlayIconSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    videoPlayIconColorSwitcher: {
        type: "string",
        default: "normal"
    },
    videoPlayIconColor: {
        type: "string",
        default: "#fff"
    },
    videoPlayIconHoverColor: {
        type: 'string',
        default: "#fff"
    },

    videoPlayIconBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    videoPlayIconBgColor : {
        type: "string",
        default: ""
    },
    videoPlayIconBgHoverColor: {
        type: 'string',
        default: ""
    },
    videoPlayIconBorder: {
        type: 'string',
        default: "solid",
    },
    videoPlayIconBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    videoPlayIconBorderColor: {
        type: 'string',
        default: "#fff"
    },
    videoPlayIconBorderHoverColor: {
        type: 'string',
    },
    videoPlayIconBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    videoPlayIconBorderDesktop: {
        type: "object", 
        default: {
            top: '1',
            bottom: '1',
            left: '1',
            right: '1',
        },
    },
    videoPlayIconBorderTablet: {
        type: "object", 
        default: {
            top: '1',
            bottom: '1',
            left: '1',
            right: '1',
        },
    },
    videoPlayIconBorderMobile: {
        type: "object", 
        default: {
            top: '1',
            bottom: '1',
            left: '1',
            right: '1',
        },
    },
    videoPlayIconBorderLink : {
        type : "boolean",
        default: true
    },
    videoPlayIconBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    videoPlayIconBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: '50',
            bottom: '50',
            left: '50',
            right: '50',
        },
    },
    videoPlayIconBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '50', 
            bottom: '50',
            left: '50',
            right: '50',
        },
    },
    videoPlayIconBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '50',
            bottom: '50',
            left: '50',
            right: '50',
        },
    },
    videoPlayIconBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    videoPlayIconPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    videoPlayIconPaddingDesktop: {
        type: "object", 
        default: {
            top: '20',
            bottom: '20',
            left: '20',
            right: '20',
        },
    },
    videoPlayIconPaddingTablet: {
        type: "object", 
        default: {
            top: '20', 
            bottom: '20',
            left: '20',
            right: '20',
        },
    },
    videoPlayIconPaddingMobile: {
        type: "object", 
        default: {
            top: '20',
            bottom: '20',
            left: '20',
            right: '20',
        },
    },
    videoPlayIconPaddingLink : {
        type : "boolean",
        default: true
    },
    /** End Video Play Icon */


    /** Start Style Settings */
    videoWidth: {
        type: 'object',
        default: {
            Desktop: '100',
            Tablet: '100',
            Mobile: '100'
        }
    },
    videoWidthUnits: {
        type: 'object',
        default: {
            Desktop: '%',
            Tablet: '%',
            Mobile: '%',
        }
    },


    /** Start Border */
    videoBorder: {
        type: 'string',
        default: "none",
    },
    videoBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    videoBorderColor: {
        type: 'string',
    },
    videoBorderHoverColor: {
        type: 'string',
    },
    videoBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    videoBorderDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    videoBorderTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    videoBorderMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    videoBorderLink : {
        type : "boolean",
        default: true
    },
    videoBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    videoBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    videoBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    videoBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    videoBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    /** End Border */

    /** Start Global Style */

    videoGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    videoGlobalPaddingDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    videoGlobalPaddingTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    videoGlobalPaddingMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    videoGlobalPaddingLink : {
        type : "boolean",
        default: true
    },
    videoGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    videoGlobalMarginDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    videoGlobalMarginTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    videoGlobalMarginMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    videoGlobalMarginLink : {
        type : "boolean",
        default: true
    },
    videoGlobalBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    videoGlobalBgColor : {
        type: "string",
    },
    videoGlobalBgHoverColor: {
        type: 'string',
    },


    videoGlobalBorder: {
        type: 'string',
        default: "none",
    },
    videoGlobalBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    videoGlobalBorderColor: {
        type: 'string',
    },
    videoGlobalBorderHoverColor: {
        type: 'string',
    },
    videoGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    videoGlobalBorderDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    videoGlobalBorderTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    videoGlobalBorderMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    videoGlobalBorderLink : {
        type : "boolean",
        default: true
    },
    videoGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    videoGlobalBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
        },
    },
    videoGlobalBorderRadiusTablet: {
        type: "object", 
        default: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
        },
    },
    videoGlobalBorderRadiusMobile: {
        type: "object", 
        default: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
        },
    },
    videoGlobalBorderRadiusLink : {
        type : "boolean",
        default: true
    },

    /** Start Box Shadow */
    videoGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    videoGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    videoGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    videoGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    videoGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */

    /** Start Global Setting */
    videoGlobalWraperID : {
        type: "string",
        default: ""
    },
    videoGlobalWraperClass : {
        type: "string",
        default: ""
    },
};

export default attributes;
