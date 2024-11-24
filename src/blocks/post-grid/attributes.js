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
		type: "array",
		default: []
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
		type: "object",
		default: {
			Desktop: 3,
			Tablet: 2,
			Mobile: 1
		}
	},
	gapUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	rowGap: {
		type: "object",
		default: {
			Desktop: 30,
			Tablet: 30,
			Mobile: 30
		}
	},
	columnGap: {
		type: "object",
		default: {
			Desktop: 30,
			Tablet: 30,
			Mobile: 30
		}
	}

};

export default attributes;
