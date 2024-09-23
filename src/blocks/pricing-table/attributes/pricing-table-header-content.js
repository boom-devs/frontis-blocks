const pricingTableHeaderContentAttributes = {
	pricingTableHeaderContent: {
		type: "string",
		default: "Everything you need to get start building your website."
	},
	pricingTableHeaderContentFontFamily: {
		type: "string",
		default: "inherit",
	},
	pricingTableHeaderContentFontSize: {
		type: "number",
	},
	pricingTableHeaderContentFontSizeUnits: {
		type: "string",
		default: "px"
	},
	pricingTableHeaderContentFontWeight : {
		type: "string",
		default: "700"
	},
	pricingTableHeaderContentFontStyle : {
		type: "string",
		default: "normal"
	},
	pricingTableHeaderContentTextTransform : {
		type: "string",
		default: "none"
	},
	pricingTableHeaderContentTextDecoration : {
		type: "string",
		default: "none"
	},
	pricingTableHeaderContentLetterSpacing : {
		type: "number",
	},
	pricingTableHeaderContentLetterSpacingUnits : {
		type: "string",
		default: "px"
	},
	pricingTableHeaderContentLineHeight : {
		type: "number",
	},
	pricingTableHeaderContentLineHeightUnits : {
		type: "string",
		default: "px"
	},
	pricingTableHeaderContentColor : {
		type: "string",
		default: "#0D173B"
	},

	// margin
	pricingTableHeaderContentMarginUnits : {
		type: "string",
		default: "px"
	},
	desktoppricingTableHeaderContentMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTableHeaderContentDesktopMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTableHeaderContentTabMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTableHeaderContentMobileMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTableHeaderContentMarginLink : {
		type : "boolean",
		default: true
	},
};

export default pricingTableHeaderContentAttributes;
