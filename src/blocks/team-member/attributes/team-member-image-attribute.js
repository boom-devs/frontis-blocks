const teamMemberImageAttribute = {
	teamMemberImageMediaUrl: {
		type: 'string',
		default: ''
	},
	teamMemberImageBackgroundColor : {
		type: "string",
		default: ""
	},

	// margin
	teamMemberImageMarginUnits : {
		type: "string",
		default: "px"
	},
	teamMemberImageDesktopMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageTabMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageMobileMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageMarginLink : {
		type : "boolean",
		default: true
	},
	// Border
	teamMemberImageBorder: {
		type: 'string',
		default: "none",
	},
	teamMemberImageBorderColor: {
		type: 'string',
	},
	teamMemberImageBorderUnits : {
		type: "string",
		default: "px"
	},
	teamMemberImageDesktopBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageTabBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageMobileBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageActiveBorderDevice: {
		type: "string",
		default: "Desktop"
	},
	teamMemberImageBorderLink : {
		type : "boolean",
		default: true
	},
	teamMemberImageBorderRadiusUnits : {
		type: "string",
		default: "px"
	},
	teamMemberImageDesktopBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageTabBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageMobileBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageActiveBorderRadiusDevice: {
		type: "string",
		default: "Desktop"
	},
	teamMemberImageBorderRadiusLink : {
		type : "boolean",
		default: true
	},

};

export default teamMemberImageAttribute;
