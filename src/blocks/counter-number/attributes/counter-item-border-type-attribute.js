const counterItemBorderTypeAttributes = {
	// Border Type
	counterItemBorderBorder: {
		type: 'string',
		default: "none",
	},
	counterItemBorderBorderColor: {
		type: 'string',
	},
	counterItemBorderTypeUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterItemBorderTypeDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	counterItemBorderTypeTab: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	counterItemBorderTypeMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	counterItemBorderTypeLink : {
		type : "boolean",
		default: true
	},
};

export default counterItemBorderTypeAttributes;
