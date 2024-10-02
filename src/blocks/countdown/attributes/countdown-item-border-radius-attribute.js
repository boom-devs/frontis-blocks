const countDownItemBorderRadiusAttributes = {
	// Border Radius
	countDownItemBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	countDownItemBorderRadiusDesktop: {
		type: "object",
		default: {
			top: 500,
			bottom: 500,
			left: 500,
			right: 500,
		},
	},
	countDownItemBorderRadiusTab: {
		type: "object",
		default: {
			top: 500,
			bottom: 500,
			left: 500,
			right: 500,
		},
	},
	countDownItemBorderRadiusMobile: {
		type: "object",
		default: {
			top: 500,
			bottom: 500,
			left: 500,
			right: 500,
		},
	},
	countDownItemBorderRadiusLink : {
		type : "boolean",
		default: true
	},
};

export default countDownItemBorderRadiusAttributes;
