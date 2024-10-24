const countDownItemBgColorAttributes = {
	countDownItemBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	countDownItemBgColor: {
		type: "string",
		default: "#F97255"
	},
	countDownItemBgHoverColor: {
		type: 'string',
		default: "#F97255"
	},

	/** Start Background Image */
	countDownItemBgImageEnabled: {
		type: "boolean",
		default: false,
	},
	countDownItemBgImageUrl: {
		type: "string",
	},
	countDownItemBgImageAlt: {
		type: "string",
	},
	countDownItemBgImageID: {
		type: "number",
	},
	countDownItemBgImagePositionType: {
		type: 'string',
		default: "center center",
	},
	countDownItemBgImageAttachmentType: {
		type: 'string',
		default: "scroll",
	},
	countDownItemBgImageRepeatType: {
		type: 'string',
		default: "no-repeat",
	},
	countDownItemBgImageSizeType: {
		type: 'string',
		default: "auto",
	},
	/** End Background Image */
};

export default countDownItemBgColorAttributes;
