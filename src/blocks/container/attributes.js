const attributes = {
	block_id: {
		type: "string",
	},
	htmlTag: {
		type: "string",
		default: "div",
	},
	layout: {
		type: "string",
		default: "",
	},
	containerWidth: {
		type: "string",
		default: "full-width",
	},
	contentBoxWidth: {
		type: "number",
		default: 1140,
	},
	minimumHeight: {
		type: "number",
		default: 0,
	},
	equalHeight: {
		type: "boolean",
		default: false,
	},
	overflow: {
		type: "string",
		default: "visible",
	},
	layoutType: {
		type: "string",
		default: "flex",
    },
    isChildBlock: {
        type: 'boolean',
        default: false,
      },
      placeholder: {
        type: 'boolean',
        default: false,
      },
	// Flex attributes
	flexDirection: {
		type: "string",
		default: "row",
	},
	flexWrap: {
		type: "string",
		default: "nowrap",
	},
	justifyContent: {
		type: "string",
		default: "flex-start",
	},
	alignItems: {
		type: "string",
		default: "stretch",
	},
	alignContent: {
		type: "string",
		default: "stretch",
	},
	// Grid attributes
	gridTemplateColumns: {
		type: "string",
		default: "repeat(3, 1fr)",
	},
	gridTemplateRows: {
		type: "string",
		default: "auto",
	},
	gridGap: {
		type: "string",
		default: "10px",
	},
	placeholder: {
		type: "boolean",
		default: false,
	},
	columns: {
		type: "number",
		default: 1,
	},
	rows: {
		type: "number",
		default: 1,
	},
	backgroundColor: {
		type: "string",
	},
	textColor: {
		type: "string",
	},
	padding: {
		type: "object",
		default: {
			top: "20px",
			right: "20px",
			bottom: "20px",
			left: "20px",
		},
	},
	margin: {
		type: "object",
		default: {
			top: "0px",
			right: "0px",
			bottom: "0px",
			left: "0px",
		},
	},
};
