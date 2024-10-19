const teamMemberContentAttribute = {
	teamMemberContentAlignment: {
		type: "string",
		default: "left"
	},
	teamMemberContentBackgroundColor : {
		type: "string",
		default: ""
	},

	// Padding
	teamMemberContentPaddingUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberContentPaddingDesktop: {
		type: "object",
		default: {
			top: 30,
			bottom: 30,
			left: 30,
			right: 30,
		},
	},
	teamMemberContentPaddingTab: {
		type: "object",
		default: {
			top: 30,
			bottom: 30,
			left: 30,
			right: 30,
		},
	},
	teamMemberContentPaddingMobile: {
		type: "object",
		default: {
			top: 30,
			bottom: 30,
			left: 30,
			right: 30,
		},
	},
	teamMemberContentPaddingLink : {
		type : "boolean",
		default: true
	},

	// margin
	teamMemberContentMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberContentMarginDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberContentMarginTab: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberContentMarginMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberContentMarginLink : {
		type : "boolean",
		default: true
	},

	// Border
	teamMemberContentBorder: {
		type: 'string',
		default: "none",
	},
	teamMemberContentBorderColor: {
		type: 'string',
	},

	// Border Type
	teamMemberContentBorderTypeUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberContentBorderTypeDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberContentBorderTypeTab: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberContentBorderTypeMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberContentBorderTypeLink : {
		type : "boolean",
		default: true
	},

	// Border Radius
	teamMemberContentBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'em',
			Mobile: 'px'
		}
	},
	teamMemberContentBorderRadiusDesktop: {
		type: "object",
		default: {
			top: 8,
			bottom: 8,
			left: 8,
			right: 8,
		},
	},
	teamMemberContentBorderRadiusTab: {
		type: "object",
		default: {
			top: 8,
			bottom: 8,
			left: 8,
			right: 8,
		},
	},
	teamMemberContentBorderRadiusMobile: {
		type: "object",
		default: {
			top: 8,
			bottom: 8,
			left: 8,
			right: 8,
		},
	},
	teamMemberContentBorderRadiusLink : {
		type : "boolean",
		default: true
	},

};

export default teamMemberContentAttribute;
