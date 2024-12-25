const countDownItemBorderTypeAttributes = {
	// Border Type
	countDownItemBorder: {
		type: 'string',
		default: "none",
	},
	countDownItemBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	countDownItemBorderColor: {
		type: 'string',
	},
	countDownItemBorderHoverColor: {
		type: 'string',
	},
	countDownItemBorderColor: {
		type: 'string',
	},
	countDownItemBorderTypeUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	countDownItemBorderTypeDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	countDownItemBorderTypeTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	countDownItemBorderTypeMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	countDownItemBorderTypeLink : {
		type : "boolean",
		default: true
	},
};

export default countDownItemBorderTypeAttributes;
