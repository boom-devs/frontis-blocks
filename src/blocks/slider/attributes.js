const slideCount = 3;
const slideContent = [];

for ( let i = 1; i <= slideCount; i++ ) {
	slideContent.push( {
		isPreview: false,
	} );
}

const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    slideContent: {
        type: "array",
		default: slideContent
    },
    slideItem: {
        type: "number",
        default: slideCount
    },
	transitionSpeed: {
		type: 'number',
		default: 800,
	},
    displayArrows: {
		type: 'boolean',
		default: true,
	},
	displayDots: {
		type: 'boolean',
		default: true,
	},
};

export default attributes;
