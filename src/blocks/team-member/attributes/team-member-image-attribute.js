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
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
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

	// Border Type
	teamMemberImageBorderTypeUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberImageBorderTypeDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageBorderTypeTab: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageBorderTypeMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageBorderTypeLink : {
		type : "boolean",
		default: true
	},

	// Border Radius
	teamMemberImageBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'em',
			Mobile: 'px'
		}
	},
	teamMemberImageBorderRadiusDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageBorderRadiusTab: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageBorderRadiusMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageBorderRadiusLink : {
		type : "boolean",
		default: true
	},


};

export default teamMemberImageAttribute;
