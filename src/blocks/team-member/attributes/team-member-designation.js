const teamMemberDesignationAttributes = {
	teamMemberDesignation: {
		type: "string",
		default: "Back Title Here"
	},
	teamMemberDesignationHeadingTag: {
		type : "string",
		default: "h2"
	},
	teamMemberDesignationFontFamily: {
		type: "string",
		default: "inherit",
	},
	teamMemberDesignationFontSize: {
		type: "number",
	},
	teamMemberDesignationFontSizeUnits: {
		type: "string",
		default: "px"
	},
	teamMemberDesignationFontWeight : {
		type: "string",
		default: "700"
	},
	teamMemberDesignationFontStyle : {
		type: "string",
		default: "normal"
	},
	teamMemberDesignationTextTransform : {
		type: "string",
		default: "none"
	},
	teamMemberDesignationTextDecoration : {
		type: "string",
		default: "none"
	},
	teamMemberDesignationLetterSpacing : {
		type: "number",
	},
	teamMemberDesignationLetterSpacingUnits : {
		type: "string",
		default: "px"
	},
	teamMemberDesignationLineHeight : {
		type: "number",
	},
	teamMemberDesignationLineHeightUnits : {
		type: "string",
		default: "px"
	},
	teamMemberDesignationColor : {
		type: "string",
		default: "#0D173B"
	},

	// margin
	teamMemberDesignationMarginUnits : {
		type: "string",
		default: "px"
	},
	desktopteamMemberDesignationMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberDesignationDesktopMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberDesignationTabMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberDesignationMobileMargin: {
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

export default teamMemberDesignationAttributes;
