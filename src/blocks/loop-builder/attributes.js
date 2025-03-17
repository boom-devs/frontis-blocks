const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	transitionSpeed: {
		type: 'number',
		default: 500,
	},
	autoplay: {
		type: 'boolean',
		default: false,
	},
	autoplaySpeed: {
		type: 'number',
		default: 2000,
	},
	loop: {
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
	stopOnLastSlide: {
		"type": "boolean",
		"default": false
	},
	reverseDirection: {
		"type": "boolean",
		"default": false
	},
	enableKeyboardControl: {
		"type": "boolean",
		"default": true
	},
	enableMouseWheel: {
		"type": "boolean",
		"default": false
	},
	effect: {
		type: 'string',
		default: 'slide'
	},
	displayArrows: {
		type: 'boolean',
		default: true,
	},
	displayDots: {
		type: 'boolean',
		default: true,
	},
	paginationType: {
		type: "string",
		default: "bullets"
	},
	featuredImageSwitcher: {
		type: "boolean",
		default: false
	},

};

export default attributes;