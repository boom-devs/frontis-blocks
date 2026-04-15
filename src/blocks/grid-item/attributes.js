const attributes = {
	blockID: {
		type: "string",
		default: "",
	},
	blockStyle: {
		type: "string",
		default: "",
	},
	id: {
		type: "string",
		default: "",
	},
	backgroundColor: {
		type: "string",
		default: "",
	},
	borderRadius: {
		type: "number",
	},
	padding: {
		type: "number",
	},
	minHeight: {
		type: "number",
	},
	zIndex: {
		type: "number",
	},
	isStatic: {
		type: "boolean",
		default: false,
	},
	gridColumnStart: {
		type: "number",
		default: 0,
	},
	gridRowStart: {
		type: "number",
		default: 0,
	},
	gridColumnSpan: {
		type: "number",
		default: 4,
	},
	gridRowSpan: {
		type: "number",
		default: 4,
	},
};

export default attributes;
