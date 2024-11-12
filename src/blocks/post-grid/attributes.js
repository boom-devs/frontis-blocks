// attributes.js
const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    deviceType: {
        type: "string",
        default: "Desktop"
    },
    postType: {
		type: "string",
		default: "post"
	},
	postPerPage: {
		type: "number",
		default: 6
	},
	selectedCat: {
		type: "number",
	}
};

export default attributes;
