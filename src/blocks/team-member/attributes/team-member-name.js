const teamMemberNameAttributes = {
	teamMemberName: {
		type: "string",
		default: "Wade Warren"
	},
	teamMemberNameHeadingTag: {
		type : "string",
		default: "h2"
	},
	teamMemberNameFontFamily: {
		type: "string",
		default: "inherit",
	},
	teamMemberNameFontSize: {
		type: "number",
	},
	teamMemberNameFontSizeUnits: {
		type: "string",
		default: "px"
	},
	teamMemberNameFontWeight : {
		type: "string",
		default: "700"
	},
	teamMemberNameFontStyle : {
		type: "string",
		default: "normal"
	},
	teamMemberNameTextTransform : {
		type: "string",
		default: "none"
	},
	teamMemberNameTextDecoration : {
		type: "string",
		default: "none"
	},
	teamMemberNameLetterSpacing : {
		type: "number",
	},
	teamMemberNameLetterSpacingUnits : {
		type: "string",
		default: "px"
	},
	teamMemberNameLineHeight : {
		type: "number",
	},
	teamMemberNameLineHeightUnits : {
		type: "string",
		default: "px"
	},
	teamMemberNameColor : {
		type: "string",
		default: "#0D173B"
	},

	// margin
	teamMemberNameMarginUnits : {
		type: "string",
		default: "px"
	},
	desktopteamMemberNameMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
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

export default teamMemberNameAttributes;
