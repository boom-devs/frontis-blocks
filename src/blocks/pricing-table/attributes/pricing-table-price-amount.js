const pricingTablePriceAmountAttributes = {
	pricingTablePriceAmount: {
		type: "string",
		default: "9.99"
	},
	pricingTablePriceAmountFontFamily: {
		type: "string",
		default: "inherit",
	},
	pricingTablePriceAmountFontSize: {
		type: "number",
	},
	pricingTablePriceAmountFontSizeUnits: {
		type: "string",
		default: "px"
	},
	pricingTablePriceAmountFontWeight : {
		type: "string",
		default: "700"
	},
	pricingTablePriceAmountFontStyle : {
		type: "string",
		default: "normal"
	},
	pricingTablePriceAmountTextTransform : {
		type: "string",
		default: "none"
	},
	pricingTablePriceAmountTextDecoration : {
		type: "string",
		default: "none"
	},
	pricingTablePriceAmountLetterSpacing : {
		type: "number",
	},
	pricingTablePriceAmountLetterSpacingUnits : {
		type: "string",
		default: "px"
	},
	pricingTablePriceAmountLineHeight : {
		type: "number",
	},
	pricingTablePriceAmountLineHeightUnits : {
		type: "string",
		default: "px"
	},
	pricingTablePriceAmountColor : {
		type: "string",
		default: "#0D173B"
	},

	// margin
	pricingTablePriceAmountMarginUnits : {
		type: "string",
		default: "px"
	},
	desktoppricingTablePriceAmountMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTablePriceAmountDesktopMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTablePriceAmountTabMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTablePriceAmountMobileMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTablePriceAmountMarginLink : {
		type : "boolean",
		default: true
	},
};

export default pricingTablePriceAmountAttributes;
