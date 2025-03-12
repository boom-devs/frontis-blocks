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
                subTitle: 'Sub Title',
                title: 'Slider Item 1',
            },
            {
                id: 'item-2',
                subTitle: 'Sub Title',
                title: 'Slider Item 2',
            },
            {
                id: 'item-3',
                subTitle: 'Sub Title',
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
                subTitle: {
                    type: "string",
                    default: "Sub Title"
                },
                title: {
                    type: "string",
                    default: "Slider Item"
                },
            }
        }
    },
    // Marquee specific settings
    marqueeSpeed: {
        type: 'number',
        default: 5000,
    },
    marqueeDirection: {
        type: 'string',
        default: 'left',
    },
    slidesPerView: {
        type: 'number',
        default: 'auto',
    },
    spaceBetween: {
        type: 'number',
        default: 30,
    },
    carouselPerColumn: {
        type: 'number',
        default: 2,
    },
    carouselPerColumnGap: {
        type: 'number',
        default: 20,
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
		default: true,
	},
	showPagination: {
		type: 'boolean',
		default: true,
	},
    
};

export default attributes;
