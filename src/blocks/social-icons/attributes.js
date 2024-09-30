const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    DeviceType: {
        type: "string",
        default: "Desktop"
    },
    socialIconZIndex : {
        type: "number",
    },
    socialItems: {
        type: "array",
        default: [
            {
                id: 'item-1',
                socialIcon: 'facebook-f',
                // socialIconColorSwitcher: 'normal',
                // socialIconColor: '#3b5998',
                // socialIconHoverColor: '#3b5998',
                socialIconUrl: '#',
                socialIconTargetUrl: false,
            },
            {
                id: 'item-2',
                socialIcon: 'x-twitter',
                // socialIconColorSwitcher: 'normal',
                // socialIconColor: '#3b5998',
                // socialIconHoverColor: '#3b5998',
                socialIconUrl: '#',
                socialIconTargetUrl: false,
            },
            {
                id: 'item-3',
                socialIcon: 'youtube',
                // socialIconColorSwitcher: 'normal',
                // socialIconColor: '#3b5998',
                // socialIconHoverColor: '#3b5998',
                socialIconUrl: '#',
                socialIconTargetUrl: false,
            },
            {
                id: 'item-4',
                socialIcon: 'behance',
                // socialIconColorSwitcher: 'normal',
                // socialIconColor: '#3b5998',
                // socialIconHoverColor: '#3b5998',
                socialIconUrl: '#',
                socialIconTargetUrl: false,
            },
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
                socialIcon: {
                    type: 'string',
                    default: 'behance',
                },
                // socialIconColorSwitcher: {
                //     type: "string",
                //     default: "normal"
                // },
                // socialIconColor: {
                //     type: "string"
                // },
                // socialIconHoverColor: {
                //     type: 'string',
                // },
                socialIconUrl: {
                    type: "string",
                    default: "",
                },
                socialIconTargetUrl: {
                    type: "boolean",
                },
            }
        }
    },

    // socialIconSizeUnits: {
	// 	type: 'object',
	// 	default: {
	// 		Desktop: 'px',
	// 		Tablet: 'px',
	// 		Mobile: 'px'
	// 	}
    // },
    socialAlignment: {
        type: "string",
        default: "center",
    },

    socialIconSize: {
		type: 'object',
		default: {
			Desktop: 25,
			Tablet: 25,
			Mobile: 25
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

    socialIconColorSwitcher: {
        type: "string",
        default: "normal"
    },
    socialIconColor: {
        type: "string",
        default: "#fff"
    },
    socialIconHoverColor: {
        type: 'string',
        default: "#fff"
    },

    socialBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    socialBgColor : {
        type: "string",
        default: "#d2691e"
    },
    socialBgHoverColor: {
        type: 'string',
        default: "#d2691e"
    },


    socialIconBorder: {
        type: 'string',
        default: "none",
    },
    socialIconBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    socialIconBorderColor: {
        type: 'string',
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    socialIconBorderTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    socialIconBorderMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    socialIconBorderLink : {
        type : "boolean",
        default: true
    },


    socialIconBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    socialIconBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    socialIconBorderRadiusTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    socialIconBorderRadiusMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
        },
    },
    socialIconPaddingTablet: {
        type: "object", 
        default: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
        },
    },
    socialIconPaddingMobile: {
        type: "object", 
        default: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
        },
    },
    socialIconPaddingLink : {
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    socialPaddingTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    socialPaddingMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    socialMarginTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    socialMarginMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    socialMarginLink : {
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    socialBorderTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    socialBorderMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    socialBorderRadiusTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    socialBorderRadiusMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    socialBorderRadiusLink : {
        type : "boolean",
        default: true
    },



};

export default attributes;
