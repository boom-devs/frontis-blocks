const countDownItemSizeAttributes = {
	countDownItemSize: {
		type: 'object',
		default: {
			Desktop: 25,
			Tablet: 25,
			Mobile: 25
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
