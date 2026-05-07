const attributes = {
	blockID: {
		type: "string",
		default: "",
	},
	blockStyle: {
		type: "string",
		default: "",
	},
	pdfUrl: {
		type: "string",
		default: "",
	},
	pdfId: {
		type: "number",
		default: 0,
	},
	height: {
		type: "number",
		default: 600,
	},
	showToolbar: {
		type: "boolean",
		default: true,
	},
	themeColor: {
		type: "string",
		default: "#000000",
	},

	deviceType: {
		type: "string",
		default: "Desktop",
	},
};

export default attributes;
