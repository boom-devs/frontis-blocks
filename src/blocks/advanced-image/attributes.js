const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	deviceType: {
		type: "string",
		default: "desktop"
	},
	imageId: {
		"type": "number"
	},
	DeviceType: {
		type: "string",
		default: "Desktop"
	},
	imageAlt: {
		"type": "string",
		"source": "attribute",
		"selector": "img",
		"attribute": "alt",
		"default": ""
	},
	imageStyle: {
		type: "string",
		default: ""
	},
	image: {
		type: "object",
		default: {
			id: "",
			url: "",
			alt: "",
		},
	},
	imageWidth: {
		type: "number",
		default: 300
	},
	imageSize: {
		type: "string",
	},
	imageCaption: {
		type: "string",
	},
	selectedImgIndex: {
		type: "number",
	},
	displayCaption: {
		type: "boolean",
		default: false,
	},
	captionColor: {
		type: "string",
		default: "var(--eb-global-primary-color)",
	},
	captionBGColor: {
		type: "string",
		default: "var(--eb-global-background-color)",
	},
	horizontalAlign: {
		type: "string",
		default: "center",
	},
	verticalAlign: {
		type: "string",
		default: "bottom",
	},
	verticalAlignCap2: {
		type: "string",
		default: "bottom",
	},
	hoverEffect: {
		type: "string",
		default: "no-effect",
	},
	stylePreset: {
		type: "string",
		default: "rounded",
	},
	complexStyle: {
		type: "boolean",
		default: false,
	},
	captionStyle: {
		type: "string",
		default: "caption-style-1",
	},
	autoFit: {
		type: "boolean",
		default: true,
	},
	fitStyles: {
		type: "string",
		default: "cover",
	},
	enableLink: {
		type: "boolean",
		default: false,
	},
	imageLink: {
		type: "string",
		default: "",
	},
	openInNewTab: {
		type: "boolean",
		default: false,
	},
	autoHeight: {
		type: "boolean",
		default: true,
	},
	borderType: {
		type: "string",
		default: "normal"
	},
	borderStyle: {
		type: 'string',
		default: "none",
	},
	normalBorderColor: {
		type: "string"
	},
	normalBorderRadUnit: {
		type: "string",
		default: "px"
	},
	normalBorderRad: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	normalBorderRadiusLink : {
		type : "boolean",
		default: true
	}
}
export default attributes;
