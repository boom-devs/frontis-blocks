const flipBoxBackButtonAttributes = {
	flipBoxBackButtonText: {
		type: "string",
		default: "Click Here",
	},
	flipBoxBackButtonUrl: {
		type: "string",
		default: "",
	},
	flipBoxBackButtonTargetUrl: {
		type: "boolean",
	},

	/** Start Color */
	flipBoxBackButtonFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	flipBoxBackButtonFontColor: {
		type: "string",
		default: "#ffffff"
	},
	flipBoxBackButtonFontHoverColor: {
		type: 'string',
		default: "#ffffff"
	},
	/** End Color */

	/** Start BG Color */
	flipBoxBackButtonBgFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	flipBoxBackButtonBgFontColor: {
		type: "string",
		default: ""
	},
	flipBoxBackButtonBgFontHoverColor: {
		type: 'string',
		default: ""
	},
	/** End BG Color */

	/** Start Typography */
	flipBoxBackButtonFontFamily: {
		type: 'string',
		default: 'inherit'
	},
	flipBoxBackButtonFontSize: {
		type: 'object',
		default: {
			Desktop: '18',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxBackButtonFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxBackButtonFontWeight: {
		type: 'string',
		default: '400'
	},
	flipBoxBackButtonFontStyle: {
		type: 'string',
		default: ''
	},
	flipBoxBackButtonTextTransform: {
		type: 'string',
		default: ''
	},
	flipBoxBackButtonTextDecoration: {
		type: 'string',
		default: 'none'
	},
	flipBoxBackButtonLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxBackButtonLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxBackButtonLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxBackButtonLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	/** End Typography */

	/** Start Box Shadow */
	flipBoxBackButtonBoxShadowValues: {
		type: 'array',
		default: [],
	},
	flipBoxBackButtonBoxShadowCssValue: {
		type: 'string',
		default: '',
	},
	/** End Box Shadow */

	/** Start Margin */
	flipBoxBackButtonMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxBackButtonMarginDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxBackButtonMarginTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxBackButtonMarginMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxBackButtonMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

	/** Start Padding */
	flipBoxBackButtonPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxBackButtonPaddingDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxBackButtonPaddingTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxBackButtonPaddingMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxBackButtonPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Border Type */
	flipBoxBackButtonBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	flipBoxBackButtonBorderColor: {
		type: "string",
		default: ""
	},
	flipBoxBackButtonBorderHoverColor: {
		type: 'string',
	},
	flipBoxBackButtonBorder: {
		type: 'string',
		default: "none",
	},
	flipBoxBackButtonBorderTypeUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxBackButtonBorderTypeDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxBackButtonBorderTypeTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxBackButtonBorderTypeMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxBackButtonBorderTypeLink : {
		type : "boolean",
		default: true
	},
	/** End Border Type */

	/** Start Border Radius */
	flipBoxBackButtonBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxBackButtonBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxBackButtonBorderRadiusTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxBackButtonBorderRadiusMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxBackButtonBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

};

export default flipBoxBackButtonAttributes;
