const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    postType: {
        type: "string",
        default: "post"
    },
    postPerPage: {
        type: "number",
        default: 5
    },
    orderBy: {
        type: "string",
        default: "date"
    },
    sortOrder: {
        type: "string",
        default: "desc"
    },
};

export default attributes;
