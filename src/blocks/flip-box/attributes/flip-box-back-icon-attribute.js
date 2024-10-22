const flipBoxBackIconAttributes = {

	flipBoxBackMediaSwitcher : {
		type: "string",
		default: "icon"
	},
	flipBoxBackIconMediaUrl: {
		type: 'string',
		default: ''
	},
	flipBoxBackIcon: {
		type: 'string',
		default: 'lightbulb',
	},

	// Icon Size
	flipBoxBackIconSize: {
		type: 'object',
		default: {
			Desktop: '40',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxBackIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},


	/** Start Color */
	flipBoxBackIconFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	flipBoxBackIconFontColor: {
		type: "string",
		default: "#F97255"
	},
	flipBoxBackIconFontHoverColor: {
		type: 'string',
		default: "#F97255"
	},
	/** End Color */

	/** Start BG Color */
	flipBoxBackIconBgFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	flipBoxBackIconBgFontColor: {
		type: "string",
		default: "#ffffff"
	},
	flipBoxBackIconBgFontHoverColor: {
		type: 'string',
		default: "#ffffff"
	},
	/** End BG Color */

	/** Start Margin */
	flipBoxBackIconMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxBackIconMarginDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxBackIconMarginTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxBackIconMarginMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxBackIconMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

	/** Start Padding */
	flipBoxBackIconPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxBackIconPaddingDesktop: {
		type: "object",
		default: {
			top: '20',
			bottom: '20',
			left: '20',
			right: '20',
		},
	},
	flipBoxBackIconPaddingTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxBackIconPaddingMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxBackIconPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Border Type */
	flipBoxBackIconBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	flipBoxBackIconBorderColor: {
		type: "string",
		default: ""
	},
	flipBoxBackIconBorderHoverColor: {
		type: 'string',
	},
	flipBoxBackIconBorder: {
		type: 'string',
		default: "none",
	},
	flipBoxBackIconBorderTypeUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxBackIconBorderTypeDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxBackIconBorderTypeTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxBackIconBorderTypeMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxBackIconBorderTypeLink : {
		type : "boolean",
		default: true
	},
	/** End Border Type */

	/** Start Border Radius */
	flipBoxBackIconBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxBackIconBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '500',
			bottom: '500',
			left: '500',
			right: '500',
		},
	},
	flipBoxBackIconBorderRadiusTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxBackIconBorderRadiusMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxBackIconBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

};

export default flipBoxBackIconAttributes;
