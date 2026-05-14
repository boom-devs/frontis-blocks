const attributes = {
	blockId: {
		type: "string",
		default: "",
	},
	blockStyle: {
		type: "string",
		default: "",
	},

	imageUrl: {
		type: "string",
		default: "",
	},
	imageId: { 
		type: "number", 
		default: 0 
	},
	imageAlt: { 
		type: "string", 
		default: "" 
	},
	imageSize: { 
		type: "string", 
		default: "cover" 
	},

	hotspots: {
		type: "array",
		default: [],
	},

	boxShadow: { 
		type: "array", 
		default: [] 
	},

	link: { 
		type: "string", 
		default: "" 
	},

	openInNewTab: { 
		type: "boolean", 
		default: false 
	},

	fontFamily: { 
		type: "string", 
		default: "" 
	},
	fontSize: { 
		type: "object", 
		default: {} 
	},
	fontWeight: { 
		type: "string", 
		default: "" 
	},

	hideDesktop: { 
		type: "boolean", 
		default: false 
	},
	hideTablet: { 
		type: "boolean", 
		default: false 
	},
	hideMobile: { 
		type: "boolean", 
		default: false 
	}
}

export default attributes;