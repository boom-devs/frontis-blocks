const attributes = {
	blockId: {
		type: "string",
		default: ""
	},
	/** Icon Settings */
	offCanvasIconAlign: {
		type: "string",
		default: "icon-text",
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
            Desktop: '16',
            Tablet: '16',
            Mobile: '16'
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
        default: "#fff"
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
        default: "#399CFF"
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
            top: '15',
            bottom: '15',
            left: '20',
            right: '20',
        },
    },
    offCanvasIconPaddingTablet: {
        type: "object", 
        default: {
            top: '15', 
            bottom: '15',
            left: '20',
            right: '20',
        },
    },
    offCanvasIconPaddingMobile: {
        type: "object", 
        default: {
            top: '15',
            bottom: '15',
            left: '20',
            right: '20',
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
            top: '10',
            bottom: '10',
            left: '10',
            right: '10',
        },
    },
    offCanvasIconBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '10', 
            bottom: '10',
            left: '10',
            right: '10',
        },
    },
    offCanvasIconBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '10',
            bottom: '10',
            left: '10',
            right: '10',
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