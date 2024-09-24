const pricingTableButtonAttributes = {
	//Pricing Table Button
	pricingTableButtonText: {
		type: "string",
		default: "Button Text"
	},
	pricingTableButtonSwitcher: {
		type: "boolean",
		default: false,
	},
	pricingTableButtonLink: {
		type: "string",
		default: ""
	},
	buttonAlignment: {
		type: "string",
		default: "left",
	},
	pricingTableButtonPaddingUnits : {
		type: "string",
		default: "px"
	},
	pricingTableButtonDesktopPadding: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTableButtonTabPadding: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTableButtonMobilePadding: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	//Button Margin
	pricingTableButtonMarginUnits : {
		type: "string",
		default: "px"
	},
	pricingTableButtonDesktopMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTableButtonTabMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTableButtonMobileMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	pricingTableButtonActiveMarginDevice: {
		type: "string",
		default: "desktop"
	},
	pricingTableButtonMarginLink : {
		type : "boolean",
		default: true
	},

	// Button
	buttonFontFamily: {
		type: "string",
		default: "inherit",
	},
	buttonFontSize: {
		type: "number",
		default: 35
	},
	buttonFontSizeUnits: {
		type: "string",
		default: "px"
	},
	buttonFontWeight : {
		type: "string",
		default: "700"
	},
	buttonFontStyle : {
		type: "string",
		default: "normal"
	},
	buttonTextTransform : {
		type: "string",
		default: "none"
	},
	buttonTextDecoration : {
		type: "string",
		default: "none"
	},
	buttonLetterSpacing : {
		type: "number",
	},
	buttonLetterSpacingUnits : {
		type: "string",
		default: "px"
	},
	buttonLineHeight : {
		type: "number",
	},
	buttonLineHeightUnits : {
		type: "string",
		default: "px"
	},
	// Button Color
	buttonColorSwitcher : {
		type: "string",
		default: "normal"
	},
	buttonTextColor : {
		type: "string"
	},
	buttonTextHoverColor : {
		type: "string"
	},
	buttonBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	buttonBgColor : {
		type: "string"
	},
	buttonBgHoverColor : {
		type: "string"
	},

};
export default pricingTableButtonAttributes;
