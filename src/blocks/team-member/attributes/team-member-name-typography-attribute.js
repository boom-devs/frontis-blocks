const teamMemberNameTypographyAttribute = {
	teamMemberName: {
		type: "string",
		default: "Wade Warren"
	},
	teamMemberNameHeadingTag: {
		type : "string",
		default: "h2"
	},
	teamMemberNameColor : {
		type: "string",
		default: "#0D173B"
	},

	// Typography
	teamMemberNameFontFamily: {
		type: 'string',
		default: 'Default',
	},
	teamMemberNameFontWeight: {
		type: 'string',
	},
	teamMemberNameFontStyle: {
		type: 'string',
		default: 'normal',
	},
	teamMemberNameTextTransform: {
		type: 'string',
	},
	teamMemberNameTextDecoration: {
		type: 'string',
	},
	teamMemberNameFontSizeType: {
		type: 'string',
		default: 'px',
	},
	teamMemberNameFontSizeTypeMobile: {
		type: 'string',
		default: 'px',
	},
	teamMemberNameFontSizeTypeTablet: {
		type: 'string',
		default: 'px',
	},
	teamMemberNameLineHeightType: {
		type: 'string',
		default: 'em',
	},
	teamMemberNameFontSize: {
		type: 'number',
	},
	teamMemberNameFontSizeTablet: {
		type: 'number',
	},
	teamMemberNameFontSizeMobile: {
		type: 'number',
	},
	teamMemberNameLineHeight: {
		type: 'number',
	},
	teamMemberNameLineHeightTablet: {
		type: 'number',
	},
	teamMemberNameLineHeightMobile: {
		type: 'number',
	},
	teamMemberNameLetterSpacing: {
		type: 'number',
	},
	teamMemberNameLetterSpacingTablet: {
		type: 'number',
	},
	teamMemberNameLetterSpacingMobile: {
		type: 'number',
	},
	teamMemberNameLetterSpacingType: {
		type: 'string',
		default: 'px',
	},
	teamMemberNameLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},

	// margin
	teamMemberNameMarginUnits : {
		type: "string",
		default: "px"
	},
	teamMemberNameDesktopMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberNameTabMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberNameMobileMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberNameMarginLink : {
		type : "boolean",
		default: true
	},
};

export default teamMemberNameTypographyAttribute;
