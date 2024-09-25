const teamMemberSocialProfileAttribute = {
	blockID: {
		type: "string",
		default: ""
	},
	DeviceType: {
		type: "string",
		default: "Desktop"
	},
	teamMemberSocialItems: {
		type: "array",
		default: [
			// You can define some default items if needed
			{
				id: 'item-1',
				Title: 'Facebook',
				teamMemberSocialIcon: 'facebook',
			},
			{
				id: 'item-2',
				Title: 'Twitter',
				teamMemberSocialIcon: 'twitter',
			},
		],
		items: {
			type: "object",
			properties: {
				id: {
					type: "string",
					default: ""
				},
				Title: {
					type: "string",
					default: ""
				},
				Description: {
					type: "string",
					default: ""
				},
				teamMemberSocialIcon: {
					type: 'string',
					default: 'check',
				},
				teamMemberSocialIconAlign: {
					type: "string",
					default: "icon",
				},
			}
		}
	},
	teamMemberSocialTag: {
		type : "string",
		default: "h3"
	},
	teamMemberSocialIconShape: {
		type: "string",
		default: "circle"
	},
	teamMemberSocialAlignment: {
		type: "string",
		default: "left",
	},
	teamMemberSocialIconAlignment: {
		type: "string",
		default: "left",
	},

	teamMemberSocialListGapDesktop: {
		type: "number",
		default: 20
	},
	teamMemberSocialListGapTablet: {
		type: "number",
		default: 15
	},
	teamMemberSocialListGapMobile: {
		type: "number",
		default: 10
	},
	teamMemberSocialListGapUnits: {
		type: "string",
		default: "px"
	},

	teamMemberSocialIconColorSwitcher : {
		type: "string",
		default: "normal"
	},
	teamMemberSocialIconColor : {
		type: "string",
		default: "#fff"
	},
	teamMemberSocialIconHoverColor: {
		type: 'string',
		default: "#fff"
	},

	teamMemberSocialIconBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	teamMemberSocialIconBgColor : {
		type: "string",
		default: "#000"
	},
	teamMemberSocialIconBgHoverColor: {
		type: 'string',
		default: "#000"
	},

	teamMemberSocialIconSizeDesktop: {
		type: "number",
		default: 25
	},
	teamMemberSocialIconSizeTablet: {
		type: "number",
		default: 25
	},
	teamMemberSocialIconSizeMobile: {
		type: "number",
		default: 25
	},
	teamMemberSocialIconSizeUnits: {
		type: "string",
		default: "px"
	},
	teamMemberSocialIconBgSizeDesktop: {
		type: "number",
		default: 60
	},
	teamMemberSocialIconBgSizeTablet: {
		type: "number",
		default: 60
	},
	teamMemberSocialIconBgSizeMobile: {
		type: "number",
		default: 60
	},
	teamMemberSocialIconBgSizeUnits: {
		type: "string",
		default: "px"
	},

	teamMemberSocialIconSpacingDesktop: {
		type: "number",
		default: 20
	},
	teamMemberSocialIconSpacingTablet: {
		type: "number",
		default: 20
	},
	teamMemberSocialIconSpacingMobile: {
		type: "number",
		default: 20
	},
	teamMemberSocialIconSpacingUnits: {
		type: "string",
		default: "px"
	},




	teamMemberSocialTitleFontFamily: {
		type: "string",
		default: "inherit",
	},
	teamMemberSocialTitleFontSizeDesktop: {
		type: "number",
		default: 18
	},
	teamMemberSocialTitleFontSizeTablet: {
		type: "number",
		default: 18
	},
	teamMemberSocialTitleFontSizeMobile: {
		type: "number",
		default: 18
	},
	teamMemberSocialTitleFontSizeUnits: {
		type: "string",
		default: "px"
	},
	teamMemberSocialTitleFontWeight : {
		type: "string",
		default: "600"
	},
	teamMemberSocialTitleFontStyle : {
		type: "string",
		default: "normal"
	},
	teamMemberSocialTitleTextTransform : {
		type: "string",
		default: "none"
	},
	teamMemberSocialTitleTextDecoration : {
		type: "string",
		default: "none"
	},
	teamMemberSocialTitleLetterSpacingDesktop: {
		type: "number",
		default: 0
	},
	teamMemberSocialTitleLetterSpacingTablet: {
		type: "number",
		default: 0
	},
	teamMemberSocialTitleLetterSpacingMobile: {
		type: "number",
		default: 0
	},
	teamMemberSocialTitleLetterSpacingUnits : {
		type: "string",
		default: "px"
	},
	teamMemberSocialTitleLineHeightDesktop: {
		type: "number",
		default: "inherit",
	},
	teamMemberSocialTitleLineHeightTablet: {
		type: "number",
		default: "inherit",
	},
	teamMemberSocialTitleLineHeightMobile: {
		type: "number",
		default: "inherit",
	},
	teamMemberSocialTitleLineHeightUnits : {
		type: "string",
		default: "px"
	},
	teamMemberSocialTitleColorSwitcher : {
		type: "string",
		default: "normal"
	},
	teamMemberSocialTitleColor : {
		type: "string",
		default: "#000"
	},
	teamMemberSocialTitleHoverColor: {
		type: 'string',
		default: "#000"
	},

	teamMemberSocialDescFontFamily: {
		type: "string",
		default: "inherit",
	},
	teamMemberSocialDescFontSizeDesktop: {
		type: "number",
		default: 14
	},
	teamMemberSocialDescFontSizeTablet: {
		type: "number",
		default: 14
	},
	teamMemberSocialDescFontSizeMobile: {
		type: "number",
		default: 14
	},
	teamMemberSocialDescFontSizeUnits: {
		type: "string",
		default: "px"
	},
	teamMemberSocialDescFontWeight : {
		type: "string",
		default: "400"
	},
	teamMemberSocialDescFontStyle : {
		type: "string",
		default: "normal"
	},
	teamMemberSocialDescTextTransform : {
		type: "string",
		default: "none"
	},
	teamMemberSocialDescTextDecoration : {
		type: "string",
		default: "none"
	},
	teamMemberSocialDescLetterSpacingDesktop : {
		type: "number",
	},
	teamMemberSocialDescLetterSpacingTablet : {
		type: "number",
	},
	teamMemberSocialDescLetterSpacingMobile : {
		type: "number",
	},
	teamMemberSocialDescLetterSpacingUnits : {
		type: "string",
		default: "px"
	},
	teamMemberSocialDescLineHeightDesktop : {
		type: "number",
		default: "inherit",
	},
	teamMemberSocialDescLineHeightTablet : {
		type: "number",
		default: "inherit",
	},
	teamMemberSocialDescLineHeightMobile : {
		type: "number",
		default: "inherit",
	},
	teamMemberSocialDescLineHeightUnits : {
		type: "string",
		default: "px"
	},
	teamMemberSocialDescColorSwitcher : {
		type: "string",
		default: "normal"
	},
	teamMemberSocialDescColor : {
		type: "string",
		default: "#000"
	},
	teamMemberSocialDescHoverColor: {
		type: 'string',
		default: "#000"
	},


	teamMemberSocialZIndex : {
		type: "number",
	},
	teamMemberSocialPaddingUnits : {
		type: "string",
		default: "px"
	},
	teamMemberSocialDesktopPadding: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialTabPadding: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialMobilePadding: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialPaddingLink : {
		type : "boolean",
		default: true
	},
	teamMemberSocialMarginUnits : {
		type: "string",
		default: "px"
	},
	teamMemberSocialDesktopMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialTabMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialMobileMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialMarginLink : {
		type : "boolean",
		default: true
	},
	teamMemberSocialBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	teamMemberSocialBgColor : {
		type: "string"
	},
	teamMemberSocialBgHoverColor: {
		type: 'string',
	},


	teamMemberSocialBorder: {
		type: 'string',
		default: "none",
	},
	teamMemberSocialBorderColor: {
		type: 'string',
	},
	teamMemberSocialBorderHoverColor: {
		type: 'string',
	},
	teamMemberSocialBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	teamMemberSocialBorderUnits : {
		type: "string",
		default: "px"
	},
	teamMemberSocialDesktopBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialTabBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialMobileBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialBorderLink : {
		type : "boolean",
		default: true
	},
	teamMemberSocialBorderRadiusUnits : {
		type: "string",
		default: "px"
	},
	teamMemberSocialDesktopBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialTabBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialMobileBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	teamMemberSocialDesktopSwitcher: {
		type: "boolean",
		default: false,
	},
	teamMemberSocialTabletSwitcher: {
		type: "boolean",
		default: false,
	},
	teamMemberSocialMobileSwitcher: {
		type: "boolean",
		default: false,
	},

};

export default teamMemberSocialProfileAttribute;
