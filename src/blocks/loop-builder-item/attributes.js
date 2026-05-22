const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    blockStyle: {
        type: "string",
        default: ""
    },
	postSwitcher: {
		type: "string",
		default: "grid"
	},

    gridColumnsPerSection: {
		type: "object",
		default: {
			Desktop: "3",
			Tablet: "2",
			Mobile: "1"
		}
	},
	gridGapUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	listGapUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	gridRowGap: {
		type: "object",
		default: {
			Desktop: "30",
			Tablet: "30",
			Mobile: "30"
		}
	},
	gridColumnGap: {
		type: "object",
		default: {
			Desktop: "16",
			Tablet: "16",
			Mobile: "16"
		}
	},

	listRowGap: {
		type: "object",
		default: {
			Desktop: "16",
			Tablet: "16",
			Mobile: "16"
		}
	},

     /** Start Global Setting */
	loopBuilderItemGlobalZIndex : {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },

	loopBuilderItemClass : {
		type: "string",
		default: ""
	},
    loopBuilderItemCustomCSS: {
        type: "string",
        default: ""
    },

	    /** Start Padding */
	loopBuilderItemPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	loopBuilderItemPaddingDesktop: { 
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loopBuilderItemPaddingTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loopBuilderItemPaddingMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loopBuilderItemPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Margin */
	loopBuilderItemMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	loopBuilderItemMarginDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loopBuilderItemMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loopBuilderItemMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loopBuilderItemMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */


    	/** Start Background */
	loopBuilderItemBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	loopBuilderItemNormalBackgroundType: { 
		type: "string",
		default: "classic",
	},
	loopBuilderItemNormalClassicColor: {
		type: "string",
		default: "",
	},
	loopBuilderItemNormalGradientColor: {
		type: "string",
		default: null,
	},
	loopBuilderItemNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	loopBuilderItemNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	loopBuilderItemHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	loopBuilderItemHoverClassicColor: {
		type: "string",
		default: "",
	},
	loopBuilderItemHoverGradientColor: {
		type: "string",
		default: null,
	},
	loopBuilderItemHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	loopBuilderItemHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Background */

        /** Start Border */
	loopBuilderItemBorder: {
		type: 'string',
		default: "none",
	},
	loopBuilderItemBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	loopBuilderItemBorderColor: {
		type: 'string',
		default: ""
	},
	loopBuilderItemBorderHoverColor: {
		type: 'string',
	},
	loopBuilderItemBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	loopBuilderItemBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loopBuilderItemBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loopBuilderItemBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loopBuilderItemBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	loopBuilderItemBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	loopBuilderItemBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loopBuilderItemBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loopBuilderItemBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loopBuilderItemBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
    loopBuilderItemBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	loopBuilderItemBoxShadowValues: {
        type: 'array',
        default: [],
    },
    loopBuilderItemBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    loopBuilderItemBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    loopBuilderItemBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Box Shadow */
};

export default attributes;
