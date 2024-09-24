const teamMemberImageAttributes = {
	teamMemberImageMediaUrl: {
		type: 'string',
		default: ''
	},
	teamMemberImageBackgroundColor : {
		type: "string",
		default: ""
	},
	// Padding
	teamMemberImagePaddingUnits : {
		type: "string",
		default: "px"
	},
	desktopteamMemberImagePadding: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageDesktopPadding: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageTabPadding: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageMobilePadding: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImagePaddingLink : {
		type : "boolean",
		default: true
	},
	// margin
	teamMemberImageMarginUnits : {
		type: "string",
		default: "px"
	},
	desktopteamMemberImageMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
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




	spacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'em',
			Mobile: 'px'
		}
	},
	// spacingUnits: {
	// 	type: 'object',
	// 	default: {
	// 		top: 50,
	// 		right: 30,
	// 		bottom: 20,
	// 		left: 10
	// 	}
	// },
	TestimonialDesktopPadding: {
		type: 'object',
		default: {
			top: 30,
			bottom: 30,
			left: 30,
			right: 30,
		},
	},
	TestimonialTabPadding: {
		type: 'object',
		default: {
			top: 20,
			bottom: 20,
			left: 20,
			right: 20,
		},
	},
	TestimonialMobilePadding: {
		type: 'object',
		default: {
			top: 20,
			bottom: 10,
			left: 20,
			right: 20,
		},
	},
	FeatureMarginLink: {
		type: 'boolean',
		default: true
	},

};

export default teamMemberImageAttributes;
