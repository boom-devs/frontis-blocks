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
	paddingTop: {
		type: "number",
		default: 0,
	},
	paddingRight: {
		type: "number",
		default: 0,
	},
	paddingBottom: {
		type: "number",
		default: 0,
	},
	paddingLeft: {
		type: "number",
		default: 0,
	},
	marginTop: {
		type: "number",
		default: 0,
	},
	marginRight: {
		type: "number",
		default: 0,
	},
	marginBottom: {
		type: "number",
		default: 0,
	},
	marginLeft: {
		type: "number",
		default: 0,
	},
};
