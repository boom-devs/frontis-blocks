const pricingTablePricePeriodAttributes = {
	pricingTablePricePeriod: {
		type: "string",
		default: "/month"
	},
	pricingTablePricePeriodFontFamily: {
		type: "string",
		default: "inherit",
	},
	pricingTablePricePeriodFontSize: {
		type: "number",
	},
	pricingTablePricePeriodFontSizeUnits: {
		type: "string",
		default: "px"
	},
	pricingTablePricePeriodFontWeight : {
		type: "string",
		default: "700"
	},
	pricingTablePricePeriodFontStyle : {
		type: "string",
		default: "normal"
	},
	pricingTablePricePeriodTextTransform : {
		type: "string",
		default: "none"
	},
	pricingTablePricePeriodTextDecoration : {
		type: "string",
		default: "none"
	},
	pricingTablePricePeriodLetterSpacing : {
		type: "number",
	},
	pricingTablePricePeriodLetterSpacingUnits : {
		type: "string",
		default: "px"
	},
	pricingTablePricePeriodLineHeight : {
		type: "number",
	},
	pricingTablePricePeriodLineHeightUnits : {
		type: "string",
		default: "px"
	},
	pricingTablePricePeriodColor : {
		type: "string",
		default: "#0D173B"
	},

	// margin
	pricingTablePricePeriodMarginUnits : {
		type: "string",
		default: "px"
	},
	desktoppricingTablePricePeriodMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTablePricePeriodDesktopMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTablePricePeriodTabMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTablePricePeriodMobileMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTablePricePeriodMarginLink : {
		type : "boolean",
		default: true
	},
};

export default pricingTablePricePeriodAttributes;
