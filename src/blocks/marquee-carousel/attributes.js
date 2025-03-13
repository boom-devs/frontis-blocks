const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    blockStyle: {
        type: "string",
        default: ""
    },
    sliderItems: {
        type: "array",
        default: [
            {
                id: 'item-1',
                title: 'Slider Item 1',
            },
            {
                id: 'item-2',
                title: 'Slider Item 2',
            },
            {
                id: 'item-3',
                title: 'Slider Item 3',
            },
        ],
        items: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    default: ""
                },
                title: {
                    type: "string",
                    default: "Slider Item"
                },
            }
        }
    },

    speed: {
        type: 'number',
        default: 800,
    },
    autoplay: {
        type: 'boolean',
        default: false,
    },
    autoplayDelay: {
        type: 'number',
        default: 1000,
    },
    infiniteLoop: {
        type: 'boolean',
        default: true,
    },
    allowTouchMove: {
        type: 'boolean',
        default: true,
    },
    pauseOnHover: {
        "type": "boolean",
        "default": false
    },
    showNavigation: {
		type: 'boolean',
		default: false,
	},
	showPagination: {
		type: 'boolean',
		default: false,
	},
    
};

export default attributes;
