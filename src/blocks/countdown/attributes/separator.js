const countDownSeparatorAttributes = {
	countDownSeparatorEnabled: {
		type: "boolean",
		default: false,
	},
	countDownSeparatorType: {
		type: 'string',
		default: ":",
	},
	countDownSeparatorFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	countDownSeparatorFontColor: {
		type: "string",
		default: "#15171C"
	},
	countDownSeparatorFontHoverColor: {
		type: 'string',
		default: "#15171C"
	},
	countDownSeparatorFontFamily: {
		type: 'string',
		default: 'inherit'
	},
	countDownSeparatorFontSize: {
		type: 'object',
		default: {
			Desktop: '48',
			Tablet: '42',
			Mobile: '38'
		}
	},
	countDownSeparatorFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	countDownSeparatorFontWeight: {
		type: 'string',
		default: ''
	},
	countDownSeparatorFontStyle: {
		type: 'string',
		default: ''
	},
	countDownSeparatorTextTransform: {
		type: 'string',
		default: ''
	},
	countDownSeparatorTextDecoration: {
		type: 'string',
		default: ''
	},
	countDownSeparatorLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	countDownSeparatorLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	countDownSeparatorLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	countDownSeparatorLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},

	/** Start Horizontal Spacing */
	countDownSeparatorHorizontalGap: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	countDownSeparatorHorizontalGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Horizontal Spacing */

	/** Start Vertical Spacing */
	countDownSeparatorVerticalGap: {
		type: 'object',
		default: {
			Desktop: '20',
			Tablet: '',
			Mobile: ''
		}
	},
	countDownSeparatorVerticalGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Vertical Spacing */
};

export default countDownSeparatorAttributes;
