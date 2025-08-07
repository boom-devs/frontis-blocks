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
        default: 2000,
    },
    infinite: {
        type: 'boolean',
        default: true,
    },
    slidesToShow: {
        type: 'number',
        default: 6,
    },
    slidesToScroll: {
        type: 'number',
        default: 1,
    },
    autoplay: {
        type: 'boolean',
        default: true,
    },
    autoplaySpeed: {
        type: 'number',
        default: 0,
    },
    centerMode: {
        type: 'boolean',
        default: true,
    },

    pauseOnHover: {
        type: 'boolean',
        default: false,
    },
    pauseOnFocus: {
        type: 'boolean',
        default: false,
    },
    variableWidth: {
        type: 'boolean',
        default: false,
    },
    touchMove: {
        type: 'boolean',
        default: false,
    },
    draggable: {
        type: 'boolean',
        default: false,
    },
    swipe: {
        type: 'boolean',
        default: false,
    },
    swipeToSlide: {
        type: 'boolean',
        default: false,
    },
    waitForAnimate: {
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
