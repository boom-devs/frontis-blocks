const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    counterNumber: {
        type: "number",
        default: 100
    },
	counterPrefix: {
		type: "string",
		default: "+"
	},
	counterSuffix: {
		type: "string",
		default: "M"
	},
    counterTitle: {
        type: "string",
        default: "Happy Clients"
    },
    counterColor: {
        type: "string",
        default: ""
    },
    titleColor: {
        type: "string",
        default: ""
    },
    counterBgColor: {
        type: "string",
        default: ""
    },
    showThousandsSeparator: {
        type: "boolean",
        default: true
    }
};

export default attributes;
