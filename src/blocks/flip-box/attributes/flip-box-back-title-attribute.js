const flipBoxBackTitleAttributes = {
	flipBoxBackTitle: {
		type: "string",
		default: "Back Title Here"
	},
	flipBoxBackTitleHeadingTag: {
		type : "string",
		default: "h3"
	},

	/** Start Color */
	flipBoxBackTitleFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	flipBoxBackTitleFontColor: {
		type: "string",
		default: "#ffffff"
	},
	flipBoxBackTitleFontHoverColor: {
		type: 'string',
		default: "#ffffff"
	},
	/** End Color */

	/** Start Typography */
	flipBoxBackTitleFontFamily: {
		type: 'string',
		default: 'inherit'
	},
	flipBoxBackTitleFontSize: {
		type: 'object',
		default: {
			Desktop: '32',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxBackTitleFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxBackTitleFontWeight: {
		type: 'string',
		default: '600'
	},
	flipBoxBackTitleFontStyle: {
		type: 'string',
		default: ''
	},
	flipBoxBackTitleTextTransform: {
		type: 'string',
		default: ''
	},
	flipBoxBackTitleTextDecoration: {
		type: 'string',
		default: ''
	},
	flipBoxBackTitleLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxBackTitleLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxBackTitleLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxBackTitleLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	/** End Typography */

	/** Start Margin */
	flipBoxBackTitleMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxBackTitleMarginDesktop: {
		type: "object",
		default: {
			top: 20,
			bottom: 20,
			left: 0,
			right: 0,
		},
	},
	flipBoxBackTitleMarginTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxBackTitleMarginMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxBackTitleMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

};

export default flipBoxBackTitleAttributes;
