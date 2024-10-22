const flipBoxItemBackAttributes = {
	/** Start Size */
	flipBoxItemBackSize: {
		type: 'object',
		default: {
			Desktop: '364',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxItemBackSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Size */
	/** Start BG Color */
	flipBoxItemBackBgFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	flipBoxItemBackBgFontColor: {
		type: "string",
		default: "#F97255"
	},
	flipBoxItemBackBgFontHoverColor: {
		type: 'string',
		default: "#F97255"
	},
	/** End BG Color */

	/** Start Border Type */
	flipBoxItemBackBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	flipBoxItemBackBorderColor: {
		type: "string",
		default: ""
	},
	flipBoxItemBackBorderHoverColor: {
		type: 'string',
	},
	flipBoxItemBackBorder: {
		type: 'string',
		default: "none",
	},
	flipBoxItemBackBorderTypeUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxItemBackBorderTypeDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxItemBackBorderTypeTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxItemBackBorderTypeMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxItemBackBorderTypeLink : {
		type : "boolean",
		default: true
	},
	/** End Border Type */

	/** Start Border Radius */
	flipBoxItemBackBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxItemBackBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '15',
			bottom: '15',
			left: '15',
			right: '15',
		},
	},
	flipBoxItemBackBorderRadiusTablet: {
		type: "object",
		default: {
			top: '15',
			bottom: '15',
			left: '15',
			right: '15',
		},
	},
	flipBoxItemBackBorderRadiusMobile: {
		type: "object",
		default: {
			top: '15',
			bottom: '15',
			left: '15',
			right: '15',
		},
	},
	flipBoxItemBackBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

	/** Start Padding */
	flipBoxItemBackPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxItemBackPaddingDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxItemBackPaddingTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxItemBackPaddingMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxItemBackPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Alignment */
	flipBoxItemBackAlignment: {
		type: "string",
		default: "center",
	},
	/** End Alignment */

};

export default flipBoxItemBackAttributes;
