const counterItemSizeAttributes = {
	counterItemBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	counterItemBgColor: {
		type: "string",
		default: "#0D173B"
	},
	counterItemBgHoverColor: {
		type: 'string',
		default: "#0D173B"
	},

	counterItemSize: {
		type: 'object',
		default: {
			Desktop: 144,
			Tablet: 120,
			Mobile: 100
		}
	},
	counterItemSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
};

export default counterItemSizeAttributes;
