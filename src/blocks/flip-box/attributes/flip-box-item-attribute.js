const flipBoxItemAttributes = {
	/** Start Size */
	flipBoxItemSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxItemSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Size */

	/** Start Padding */
	flipBoxItemPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxItemPaddingDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxItemPaddingTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxItemPaddingMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxItemPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Border Type */
	flipBoxItemBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	flipBoxItemBorderColor: {
		type: "string",
		default: ""
	},
	flipBoxItemBorderHoverColor: {
		type: 'string',
	},
	flipBoxItemBorder: {
		type: 'string',
		default: "none",
	},
	flipBoxItemBorderTypeUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxItemBorderTypeDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxItemBorderTypeTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxItemBorderTypeMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxItemBorderTypeLink : {
		type : "boolean",
		default: true
	},
	/** End Border Type */

	/** Start Border Radius */
	flipBoxItemBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxItemBorderRadiusDesktop: {
		type: "object",
		default: {
			top: 500,
			bottom: 500,
			left: 500,
			right: 500,
		},
	},
	flipBoxItemBorderRadiusTablet: {
		type: "object",
		default: {
			top: 500,
			bottom: 500,
			left: 500,
			right: 500,
		},
	},
	flipBoxItemBorderRadiusMobile: {
		type: "object",
		default: {
			top: 500,
			bottom: 500,
			left: 500,
			right: 500,
		},
	},
	flipBoxItemBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

};

export default flipBoxItemAttributes;
