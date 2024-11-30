const countDownItemSizeAttributes = {
	countDownItemBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	countDownItemBgColor: {
		type: "string",
		default: "#0D173B"
	},
	countDownItemBgHoverColor: {
		type: 'string',
		default: "#0D173B"
	},

	countDownItemSize: {
		type: 'object',
		default: {
			Desktop: 144,
			Tablet: 120,
			Mobile: 100
		}
	},
	countDownItemSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
};

export default countDownItemSizeAttributes;
