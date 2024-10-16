const countDownItemBorderTypeAttributes = {
	// Border Type
	countDownItemBorder: {
		type: 'string',
		default: "none",
	},
	countDownItemBorderBorderColor: {
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
	countDownItemBorderTypeTab: {
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
