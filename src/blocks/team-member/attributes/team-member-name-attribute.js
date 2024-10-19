const teamMemberNameAttribute = {
	teamMemberName: {
		type: "string",
		default: "Wade Warren"
	},
	teamMemberNameHeadingTag: {
		type : "string",
		default: "h2"
	},

	teamMemberImageMediaID: {
		type : "number",
		default: 0
	},
	teamMemberImageMediaUrl: {
		type : "string",
		default: ""
	},
	teamMemberImageMediaAlt: {
		type : "string",
		default: ""
	},
	teamMemberImageMediaWidth: {
		type : "number",
		default: 0
	},
	teamMemberImageMediaHeight: {
		type : "number",
		default: 0
	},


	teamMemberNameColorSwitcher: {
		type: "string",
		default: "normal"
	},
	teamMemberNameColor : {
		type: "string",
		default: "#FFFFFF"
	},
	teamMemberNameHoverColor : {
		type: "string",
		default: "#FFFFFF"
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
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberNameMarginDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberNameMarginTab: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberNameMarginMobile: {
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

export default teamMemberNameAttribute;
