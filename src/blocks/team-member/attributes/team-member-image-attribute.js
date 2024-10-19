const teamMemberImageAttribute = {
	teamMemberImageMediaUrl: {
		type: 'string',
		default: ''
	},
	teamMemberImageBackgroundColor : {
		type: "string",
		default: "#0000005e"
	},

	// Image Width Size
	teamMemberImageSizeWidthUnits : {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%'
		}
	},
	teamMemberImageSizeWidthDesktop: {
		type: "number",
		default: 100
	},
	teamMemberImageSizeWidthTab: {
		type: "number",
		default: 100
	},
	teamMemberImageSizeWidthMobile: {
		type: "number",
		default: 100
	},

	// Image Height Size
	teamMemberImageSizeHeightUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberImageSizeHeightDesktop: {
		type: "number",
		default: 416
	},
	teamMemberImageSizeHeightTab: {
		type: "number",
		default: 416
	},
	teamMemberImageSizeHeightMobile: {
		type: "number",
		default: 416
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
	teamMemberImageMarginDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageMarginTab: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageMarginMobile: {
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
			top: 8,
			bottom: 8,
			left: 8,
			right: 8,
		},
	},
	teamMemberImageBorderRadiusTab: {
		type: "object",
		default: {
			top: 8,
			bottom: 8,
			left: 8,
			right: 8,
		},
	},
	teamMemberImageBorderRadiusMobile: {
		type: "object",
		default: {
			top: 8,
			bottom: 8,
			left: 8,
			right: 8,
		},
	},
	teamMemberImageBorderRadiusLink : {
		type : "boolean",
		default: true
	},


};

export default teamMemberImageAttribute;
