const counterItemBorderRadiusAttributes = {
	// Border Radius
	counterItemBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterItemBorderRadiusDesktop: {
		type: "object",
		default: {
			top: 500,
			bottom: 500,
			left: 500,
			right: 500,
		},
	},
	counterItemBorderRadiusTablet: {
		type: "object",
		default: {
			top: 500,
			bottom: 500,
			left: 500,
			right: 500,
		},
	},
	counterItemBorderRadiusMobile: {
		type: "object",
		default: {
			top: 500,
			bottom: 500,
			left: 500,
			right: 500,
		},
	},
	counterItemBorderRadiusLink : {
		type : "boolean",
		default: true
	},
};

export default counterItemBorderRadiusAttributes;
