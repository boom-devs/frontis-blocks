const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	postType: {
        type: "string",
        default: "post"
    },
    highlightColor: {
        type: 'string',
        default: '',
    },
    hoverHighlightColor: {
        type: 'string',
        default: '',
    },
    postOrder: {
        type: "string",
        default: "desc"
    },
    postsToShow: {
        type: "number",
        default: 6
    },
    columns: {
        type: "number",
        default: 3
    },
    showImage: {
        type: "boolean",
        default: true
    },
    showAuthor: {
        type: "boolean",
        default: true
    },
    showRole: {
        type: "boolean",
        default: true
    },
    textColor: {
        type: "string",
        default: ""
    },
    backgroundColor: {
        type: "string",
        default: ""
    },
    itemBackgroundColor: {
        type: "string",
        default: "#f4f4f4"
    },
    animation: {
        type: "string",
        default: "none"
    }
};

export default attributes;