const attributes = {
	blockID: {
		type: 'string',
		default: '',
	},
	lottieAnimationJsonTypeSwitcher: {
        type: 'string',
        default: 'opener',
    },
	lottieAnimationImageUrl: {
		type: 'string',
		default: ''
	},
	lottieAnimationImageAlt: {
		type: 'string',
		default: ''
	},	
	lottieAnimationImageID: {
		type: 'string',
		default: ''
	},
	lottieAnimationJsonUrl: {
        type: "string",
        default: "",
    },
    lottieAnimationJsonTargetUrl: {
        type: "boolean",
    },
	lottieAnimationDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    lottieAnimationTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    lottieAnimationMobileSwitcher: {
        type: 'boolean',
        default: false,
    },
	lottieAnimationSpeed: {
        type: 'number',
    },
    lottieAnimationSpeedUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
	/** Start Class & ID Setting */
	lottieAnimationGlobalWraperCustomCSS : {
		type: 'string',
		default: '',
	},
	lottieAnimationGlobalWraperID : {
		type: 'string',
		default: ''
	},

	lottieAnimationGlobalWraperClass : {
		type: 'string',
		default: ''
	},
};
export default attributes;
