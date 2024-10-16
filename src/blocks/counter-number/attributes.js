const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
	deviceType: {
		type: "string",
		default: "Desktop"
	},
	mediaSwitcher : {
		type: "string",
		default: "icon"
	},
	counterMediaUrl: {
		type: 'string',
		default: ''
	},
	icon: {
		type: 'string',
		default: 'star',
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
    showThousandsSeparator: {
        type: "boolean",
        default: true
    }
};

export default attributes;
