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
                marqueeCarouselImageUrl:'',
                marqueeCarouselImageAlt: '',
                marqueeCarouselImageID: '',
                showContentSwitcher: true,
                marqueeCarouselText: 'Carousel Text',
                marqueeCarouseHoverText: '',
            },
            {
                id: 'item-2',
                marqueeCarouselImageUrl:'',
                marqueeCarouselImageAlt: '',
                marqueeCarouselImageID: '',
                showContentSwitcher: true,
                marqueeCarouselText: 'Carousel Text',
                marqueeCarouseHoverText: '',
            },
            {
                id: 'item-3',
                marqueeCarouselImageUrl: '',
                marqueeCarouselImageAlt: '',
                marqueeCarouselImageID: '',
                showContentSwitcher: true,
                marqueeCarouselText: 'Carousel Text',
                marqueeCarouseHoverText: '',
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
                    default: ''
                },
                marqueeCarouselImageAlt: {
                    type: "string",
                    default: ""
                },
                marqueeCarouselImageID: {
                    type: "number",
                    default: ""
                },
                showContentSwitcher: {
                    type: "boolean",
                    default: true
                },
                marqueeCarouselText    : {
                    type: "string",
                    default: "Carousel Text"
                },
                marqueeCarouseHoverText: {
                    type: "string",
                    default: ""
                },
            }
        }
    },

    speed: {
        type: 'number',
        default: 1500,
    },
    autoplay: {
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
    
};

export default attributes;
