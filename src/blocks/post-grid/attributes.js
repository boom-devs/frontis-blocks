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
		type: "string",
		default: ""
	},
	placeholders: {
		type: "array",
		default: [1, 2, 3, 4, 5, 6, 7, 8, 9],
	},
};

export default attributes;
