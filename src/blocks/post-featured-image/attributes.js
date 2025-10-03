const attributes = {
    blockId: {
        type: "string",
        default: "",
    },

		// Internal
    blockStyle: {
        type: "string",
        default: "",
    },
    
    /** ============== General Settings ============== */
    isLink: {
        type: "boolean",
        default: false,
    },
    rel: {
        type: "string",
        default: "",
    },
    linkTarget: {
        type: "string",
        default: "_self",
    },
    useFirstImage: {
        type: "boolean",
        default: false,
    },
    
    // Image Settings
    imageSize: {
        type: "string",
        default: "large",
    },
    imageAlignment: {
        type: "object",
        default: {
            Desktop: "left",
            Tablet: "",
            Mobile: "",
        },
    },
    
    /** ============== Style Settings ============== */
    imageWidth: {
        type: "object",
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        },
    },
    imageHeight: {
        type: "object",
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        },
    },
    imageObjectFit: {
        type: "string",
        default: "cover",
    },
    imageBorderRadius: {
        type: "object",
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        },
    },
    

    /** ============== Advanced Settings ============== */
    wrapperId: {
        type: "string",
        default: "",
    },
    wrapperClass: {
        type: "string",
        default: "",
    },
    featuredImageGlobalCustomCSS: {
        type: "string",
        default: "",
    },

		// Responsive Control
    featuredImageDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    featuredImageTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    featuredImageMobileSwitcher: {
        type: "boolean",
        default: false,
    },


		// Global
		postGlobalZIndex: {
        type: "object",
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        },
    },
    
		postGlobalOverflow: {
			type: "string",
			default: "default",
		},

    /** Start Position */
    postGlobalPositionType: {
        type: "string",
        default: "default",
    },
    postGlobalHZOrientationType: {
		type: "string",
		default: "left",
	},
	postGlobalVROrientationType: {
		type: "string",
		default: "top",
	},
	postGlobalHZLeftOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postGlobalHZLeftOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postGlobalHZRightOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postGlobalHZRightOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postGlobalVRTopOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postGlobalVRTopOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postGlobalVRBottomOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postGlobalVRBottomOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
    /** End Position */


};

export default attributes;