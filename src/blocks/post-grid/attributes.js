// attributes.js
const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
	blockStyle: {
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
		type: "string",
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
	orderBy: {
		type: "string",
		default: "date"
	},
	sortOrder: {
		type: "string",
		default: "desc"
	},
	columnsPerSection: {
		type: "string",
		default: "3"
	}
};

export default attributes;
