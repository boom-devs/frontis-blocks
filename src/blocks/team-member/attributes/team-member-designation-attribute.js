const teamMemberDesignationAttribute = {
	teamMemberDesignation: {
		type: "string",
		default: "Creative Director"
	},
	teamMemberDesignationHeadingTag: {
		type : "string",
		default: "h2"
	},
	teamMemberDesignationColor : {
		type: "string",
		default: "#FFFFFF"
	},
	// Typography
	teamMemberDesignationFontFamily: {
		type: 'string',
		default: 'Default',
	},
	teamMemberDesignationFontWeight: {
		type: 'string',
	},
	teamMemberDesignationFontStyle: {
		type: 'string',
		default: 'normal',
	},
	teamMemberDesignationTextTransform: {
		type: 'string',
	},
	teamMemberDesignationTextDecoration: {
		type: 'string',
	},
	teamMemberDesignationFontSizeType: {
		type: 'string',
		default: 'px',
	},
	teamMemberDesignationFontSizeTypeMobile: {
		type: 'string',
		default: 'px',
	},
	teamMemberDesignationFontSizeTypeTablet: {
		type: 'string',
		default: 'px',
	},
	teamMemberDesignationLineHeightType: {
		type: 'string',
		default: 'em',
	},
	teamMemberDesignationFontSize: {
		type: 'number',
	},
	teamMemberDesignationFontSizeTablet: {
		type: 'number',
	},
	teamMemberDesignationFontSizeMobile: {
		type: 'number',
	},
	teamMemberDesignationLineHeight: {
		type: 'number',
	},
	teamMemberDesignationLineHeightTablet: {
		type: 'number',
	},
	teamMemberDesignationLineHeightMobile: {
		type: 'number',
	},
	teamMemberDesignationLetterSpacing: {
		type: 'number',
	},
	teamMemberDesignationLetterSpacingTablet: {
		type: 'number',
	},
	teamMemberDesignationLetterSpacingMobile: {
		type: 'number',
	},
	teamMemberDesignationLetterSpacingType: {
		type: 'string',
		default: 'px',
	},
	teamMemberDesignationLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},


	// margin
	teamMemberDesignationMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberDesignationMarginDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberDesignationMarginTab: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberDesignationMarginMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberDesignationMarginLink : {
		type : "boolean",
		default: true
	},

};

export default teamMemberDesignationAttribute;
