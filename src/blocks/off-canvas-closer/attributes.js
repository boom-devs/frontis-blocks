const attributes = {
	blockId: {
		type: "string",
		default: ""
	},
    blockStyle: {
        type: 'string',
        default: '',
    },
	/** Icon Settings */
	offCanvasIconAlign: {
		type: "string",
		default: "none",
	},
	offCanvasIcon: {
		type: 'string',
		default: 'plus',
	},
	/** End Icon Settings */

	offCanvasIconImageUrl : {
        type: 'string',
        default: '',
    },
    offCanvasIconImageAlt : { 
        type: 'string',
        default: '',
    },
    offCanvasIconImageID : {
        type: 'number',
    },
    offCanvasIconImageWidth : {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '20',
            Mobile: '20',
        }
    },
    offCanvasIconImageWidthUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    offCanvasIconImageHeight : {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '20',
            Mobile: '20',
        }
    },
    offCanvasIconImageHeightUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    offCanvasIconImagedisplay : {
        type: 'string',
        default: 'none',
    },

    /** Icon Styles */
    offCanvasIconSize: {
        type: 'object',
        default: {
            Desktop: '50',
            Tablet: '50',
            Mobile: '30'
        }
    },
    offCanvasIconSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    offCanvasIconColorSwitcher: {
        type: "string",
        default: "normal"
    },
    offCanvasIconColor: {
        type: "string",
        default: "#000"
    },
    offCanvasIconHoverColor: {
        type: 'string',
        default: ""
    },

    offCanvasIconBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    offCanvasIconBgColor : {
        type: "string",
        default: ""
    },
    offCanvasIconBgHoverColor: {
        type: 'string',
        default: ""
    },


    offCanvasIconPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    offCanvasIconPaddingDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    offCanvasIconPaddingTablet: {
        type: "object", 
        default: {
            top: '', 
            bottom: '',
            left: '',
            right: '',
        },
    },
    offCanvasIconPaddingMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    offCanvasIconPaddingLink : {
        type : "boolean",
        default: true
    },


    offCanvasIconBorder: {
        type: 'string',
        default: "none",
    },
    offCanvasIconBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    offCanvasIconBorderColor: {
        type: 'string',
    },
    offCanvasIconBorderHoverColor: {
        type: 'string',
    },
    offCanvasIconBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    offCanvasIconBorderDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    offCanvasIconBorderTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    offCanvasIconBorderMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    offCanvasIconBorderLink : {
        type : "boolean",
        default: true
    },
    offCanvasIconBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    offCanvasIconBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    offCanvasIconBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '', 
            bottom: '',
            left: '',
            right: '',
        },
    },
    offCanvasIconBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    offCanvasIconBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    offCanvasIconRotateSwitcher: {
        type: 'string',
        default: 'normal',
    },
    offCanvasIconRotate: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "", 
            Mobile: "",
        }
    },
    offCanvasIconRotateHover: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        }
    },

    offCanvasIconImageRotateSwitcher: {
        type: 'string',
        default: 'normal',
    },
    offCanvasIconImageRotate: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "", 
            Mobile: "",
        }
    },
    offCanvasIconImageRotateHover: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        }
    },
    /** End Icon Styles */


	offCanvasIconZIndex : {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: '',
        }
    },
	
};

export default attributes;