let defaultImageUrl = '';
if (typeof FrontisBlocksData !== 'undefined') {
    defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/preset-bg.jpg';
}

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
                marqueeCarouselImageUrl: defaultImageUrl,
                marqueeCarouselImageAlt: '',
                marqueeCarouselImageID: '',
            },
            {
                id: 'item-2',
                marqueeCarouselImageUrl: defaultImageUrl,
                marqueeCarouselImageAlt: '',
                marqueeCarouselImageID: '',
            },
            {
                id: 'item-3',
                marqueeCarouselImageUrl: defaultImageUrl,
                marqueeCarouselImageAlt: '',
                marqueeCarouselImageID: '',
            },
        ],
        items: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    default: ""
                },
                marqueeCarouselImageUrl: {
                    type: "string",
                    default: defaultImageUrl
                },
                marqueeCarouselImageAlt: {
                    type: "string",
                    default: ""
                },
                marqueeCarouselImageID: {
                    type: "number",
                    default: ""
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
