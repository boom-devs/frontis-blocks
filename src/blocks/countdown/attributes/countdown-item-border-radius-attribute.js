const countDownItemBorderRadiusAttributes = {
	// Border Radius
	countDownItemBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'em',
			Mobile: 'px'
		}
	},
	countDownItemBorderRadiusDesktop: {
		type: "object",
		default: {
			top: 8,
			bottom: 8,
			left: 8,
			right: 8,
		},
	},
	countDownItemBorderRadiusTab: {
		type: "object",
		default: {
			top: 8,
			bottom: 8,
			left: 8,
			right: 8,
		},
	},
	countDownItemBorderRadiusMobile: {
		type: "object",
		default: {
			top: 8,
			bottom: 8,
			left: 8,
			right: 8,
		},
	},
	countDownItemBorderRadiusLink : {
		type : "boolean",
		default: true
	},
};

export default countDownItemBorderRadiusAttributes;
