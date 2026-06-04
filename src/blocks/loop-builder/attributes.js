// attributes.js
const attributes = {
    blockID: {
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
		type: "number",
		default: 6
	},
	postOffset : {
		type: "number",
		default: 0
	},
	postSwitcher: {
		type: "string",
		default: "grid"
	},
	highlightColor: {
		type: 'string',
		default: '',
	},
	hoverHighlightColor: {
		type: 'string',
		default: '',
	},

	/** Start Core Query */
	queryId: {
		type: "number"
	},
	query: {
		type: "object",
		default: {
			perPage: 6,
			pages: 0,
			offset: 0,
			postType: "post",
			order: "desc",
			orderBy: "date",
			author: "",
			search: "",
			exclude: [],
			sticky: "",
			inherit: false,
			taxQuery: null,
			parents: [],
			format: [],

			/** Start author */
			selectedAuthorSwitcher: {
				type: "string",
				default: "include"
			},
			selectedAuthor: {
				type: "array",
				default: []
			},
			deSelectedAuthor: {
				type: "array",
				default: []
			},
			/** End author */

			/** Start category */
			selectedCatSwitcher: {
				type: "string",
				default: "include"
			},
			selectedCat: {
				type: "array",
				default: []
			},
			deSelectedCat: {
				type: "array",
				default: []
			},
			/** End category */

			/** Start tag */
			selectedTagSwitcher: {
				type: "string",
				default: "include"
			},
			selectedTag: {
				type: "array",
				default: []
			},
			deSelectedTag: {
				type: "array",
				default: []
			},
			/** End tag */
		}
	},
	tagName: {
		type: "string",
		default: "div"
	},
	namespace: {
		type: "string"
	},
	enhancedPagination: {
		type: "boolean",
		default: false
	},
	/** End Core Query */

	/** Start author */
	selectedAuthorSwitcher: {
		type: "string",
		default: "include"
	},
	selectedAuthor: {
		type: "array",
		default: []
	},
	deSelectedAuthor: {
		type: "array",
		default: []
	},
	/** End author */

	/** Start category */
	selectedCatSwitcher: {
		type: "string",
		default: "include"
	},
	selectedCat: {
		type: "array",
		default: []
	},
	deSelectedCat: {
		type: "array",
		default: []
	},
	/** End category */

	/** Start tag */
	selectedTagSwitcher: {
		type: "string",
		default: "include"
	},
	selectedTag: {
		type: "array",
		default: []
	},
	deSelectedTag: {
		type: "array",
		default: []
	},
	/** End tag */

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
	gridColumnsPerSection: {
		type: "object",
		default: {
			Desktop: "3",
			Tablet: "2",
			Mobile: "1"
		}
	},
	gridGapUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	listGapUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	gridRowGap: {
		type: "object",
		default: {
			Desktop: "30",
			Tablet: "30",
			Mobile: "30"
		}
	},
	gridColumnGap: {
		type: "object",
		default: {
			Desktop: "30",
			Tablet: "30",
			Mobile: "30"
		}
	},

	listRowGap: {
		type: "object",
		default: {
			Desktop: "30",
			Tablet: "30",
			Mobile: "30"
		}
	},
	listImageSpacing: {
		type: "object",
		default: {
			Desktop: "40",
			Tablet: "30",
			Mobile: "0"
		}
	},
};

export default attributes;
