const flipBoxFrontButtonAttributes = {
	flipBoxFrontButtonText: {
		type: "string",
		default: "Click Here",
	},
	flipBoxFrontButtonUrl: {
		type: "string",
		default: "",
	},
	flipBoxFrontButtonTargetUrl: {
		type: "boolean",
	},

	/** Start Color */
	flipBoxFrontButtonFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	flipBoxFrontButtonFontColor: {
		type: "string",
		default: "#0d173bb3"
	},
	flipBoxFrontButtonFontHoverColor: {
		type: 'string',
		default: "#0d173bb3"
	},
	/** End Color */

	/** Start Typography */
	flipBoxFrontButtonFontFamily: {
		type: 'string',
		default: 'inherit'
	},
	flipBoxFrontButtonFontSize: {
		type: 'object',
		default: {
			Desktop: '18',
			Tablet: '16',
			Mobile: '16'
		}
	},
	flipBoxFrontButtonFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxFrontButtonFontWeight: {
		type: 'string',
		default: '400'
	},
	flipBoxFrontButtonFontStyle: {
		type: 'string',
		default: ''
	},
	flipBoxFrontButtonTextTransform: {
		type: 'string',
		default: ''
	},
	flipBoxFrontButtonTextDecoration: {
		type: 'string',
		default: ''
	},
	flipBoxFrontButtonLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxFrontButtonLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxFrontButtonLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxFrontButtonLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	/** End Typography */

	/** Start Margin */
	flipBoxFrontButtonMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxFrontButtonMarginDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxFrontButtonMarginTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxFrontButtonMarginMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxFrontButtonMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */
};

export default flipBoxFrontButtonAttributes;
