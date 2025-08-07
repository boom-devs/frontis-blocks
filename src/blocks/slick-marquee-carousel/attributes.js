const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    blockStyle: {
        type: "string",
        default: ""
    },

    speed: {
        type: 'number',
        default: 1500,
    },
    autoplay: {
        type: 'boolean',
        default: false,
    },
    reverseDirection: {
        type: 'boolean',
        default: false,
    },
    autoplayDirection: {
        type: 'string',
        default: false,
    },
    showNavigation: {
		type: 'boolean',
		default: false,
	},
	showPagination: {
		type: 'boolean',
		default: false,
	},

    /** Start Width */
    slideWidth: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	slideWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    slideHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	slideHeightUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    /** End Width */
    
};

export default attributes;
