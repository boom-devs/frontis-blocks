const pricingTablePricePrefixAttributes = {
	pricingTablePricePrefix: {
		type: "string",
		default: "$"
	},
	pricingTablePricePrefixFontFamily: {
		type: "string",
		default: "inherit",
	},
	pricingTablePricePrefixFontSize: {
		type: "number",
	},
	pricingTablePricePrefixFontSizeUnits: {
		type: "string",
		default: "px"
	},
	pricingTablePricePrefixFontWeight : {
		type: "string",
		default: "700"
	},
	pricingTablePricePrefixFontStyle : {
		type: "string",
		default: "normal"
	},
	pricingTablePricePrefixTextTransform : {
		type: "string",
		default: "none"
	},
	pricingTablePricePrefixTextDecoration : {
		type: "string",
		default: "none"
	},
	pricingTablePricePrefixLetterSpacing : {
		type: "number",
	},
	pricingTablePricePrefixLetterSpacingUnits : {
		type: "string",
		default: "px"
	},
	pricingTablePricePrefixLineHeight : {
		type: "number",
	},
	pricingTablePricePrefixLineHeightUnits : {
		type: "string",
		default: "px"
	},
	pricingTablePricePrefixColor : {
		type: "string",
		default: "#0D173B"
	},

	// margin
	pricingTablePricePrefixMarginUnits : {
		type: "string",
		default: "px"
	},
	desktoppricingTablePricePrefixMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTablePricePrefixDesktopMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTablePricePrefixTabMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTablePricePrefixMobileMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTablePricePrefixMarginLink : {
		type : "boolean",
		default: true
	},
};

export default pricingTablePricePrefixAttributes;
