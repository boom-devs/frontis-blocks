const pricingTableHeaderNameAttributes = {
	pricingTableHeaderName: {
		type: "string",
		default: "Starter Plan"
	},
	pricingTableHeaderNameHeadingTag: {
		type : "string",
		default: "h2"
	},
	pricingTableHeaderNameFontFamily: {
		type: "string",
		default: "inherit",
	},
	pricingTableHeaderNameFontSize: {
		type: "number",
	},
	pricingTableHeaderNameFontSizeUnits: {
		type: "string",
		default: "px"
	},
	pricingTableHeaderNameFontWeight : {
		type: "string",
		default: "700"
	},
	pricingTableHeaderNameFontStyle : {
		type: "string",
		default: "normal"
	},
	pricingTableHeaderNameTextTransform : {
		type: "string",
		default: "none"
	},
	pricingTableHeaderNameTextDecoration : {
		type: "string",
		default: "none"
	},
	pricingTableHeaderNameLetterSpacing : {
		type: "number",
	},
	pricingTableHeaderNameLetterSpacingUnits : {
		type: "string",
		default: "px"
	},
	pricingTableHeaderNameLineHeight : {
		type: "number",
	},
	pricingTableHeaderNameLineHeightUnits : {
		type: "string",
		default: "px"
	},
	pricingTableHeaderNameColor : {
		type: "string",
		default: "#0D173B"
	},

	// margin
	pricingTableHeaderNameMarginUnits : {
		type: "string",
		default: "px"
	},
	desktoppricingTableHeaderNameMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTableHeaderNameDesktopMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTableHeaderNameTabMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTableHeaderNameMobileMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTableHeaderNameMarginLink : {
		type : "boolean",
		default: true
	},
};

export default pricingTableHeaderNameAttributes;
