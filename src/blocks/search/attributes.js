const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	blockStyle: {
		type: 'string',
		default: ''
	},
	highlightColor: {
		type: 'string',
		default: '',
	},
	hoverHighlightColor: {
		type: 'string',
		default: '',
	},
	searchActive: {
		type: 'boolean',
		default: false
	},
	searchButtonWidth: {
		type: 'object',
		default: {
			Desktop: '88',
			Tablet: '88',
			Mobile: '88'
		}
	},
	searchButtonWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	searchButtonInputFieldWidth: {
		type: 'object',
		default: {
			Desktop: '1080',
			Tablet: '1080',
			Mobile: '1080'
		}
	},
	searchButtonInputFieldWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	searchIconGap: {
		type: 'object',
		default: {
			Desktop: '5',
			Tablet: '5',
			Mobile: '5'
		}
	},
	searchIconGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},

	showPlaceholderSwitcher: {
		type: 'boolean',
		default: false,
	},
	placeholderText: {
		type: 'string',
		default: 'Search'
	},
	showButtonSwitcher: {
		type: 'boolean',
		default: false,
	},
	searchButtonText: {
		type: 'string',
		default: 'Search'
	},
	searchAppearance: {
		type: 'string',
		default: 'button-and-search'
	},
	/** Start Typography */
	buttonTextGlobalTypographyData: {
		type: "object",
		default: {}
	},
	buttonTextGlobalTypoSwitcher: {
		type: "object",
		default: {
			fontFamily: false,
			fontSize: false,
			fontWeight: false,
			fontStyle: false,
			textTransform: false,
			textDecoration: false,
			letterSpacing: false,
			lineHeight: false,
		},
	},
	buttonTextGlobalTypoType: {
		type: "string",
		default: 'default',
	},
	buttonTextGlobalTypoOption: {
		type: "object",
		default: { label: 'Default', value: 'default' },
	},
	buttonTextFontFamily: {
		type: "string",
		default: "Default",
	},
	buttonTextFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonTextFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	buttonTextFontWeight: {
		type: "string",
		default: ""
	},
	buttonTextFontStyle: {
		type: "string",
		default: ""
	},
	buttonTextTransform: {
		type: "string",
		default: ""
	},
	buttonTextDecoration: {
		type: "string",
		default: ""
	},
	buttonTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	buttonTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Typography */

	/** Start Button Text Color */
	buttonTextColorSwitcher: {
		type: "string",
		default: "normal",
	},
	buttonTextColor: {
		type: "string",
		default: "",
	},
	buttonTextColorHover: {
		type: "string",
		default: "",
	},
	/** End Button Text Color */

	/** Start Button Border */
	buttonBorder: {
		type: 'string',
		default: "solid",
	},
	buttonBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	buttonBorderColor: {
		type: 'string',
		default: "#A4A7AE"
	},
	buttonBorderColorHover: {
		type: 'string',
		default: ""
	},
	buttonBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	buttonBorderDesktop: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	buttonBorderTablet: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	buttonBorderMobile: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	buttonBorderLink: {
		type: "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	buttonBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	buttonBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	buttonBorderRadiusTablet: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	buttonBorderRadiusMobile: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	buttonBorderRadiusLink: {
		type: "boolean",
		default: true
	},
	/** End Border Radius */


	/** Start Padding */
	buttonPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	buttonPaddingDesktop: {
		type: "object",
		default: {
			top: '12',
			bottom: '12',
			left: '24',
			right: '24',
		},
	},
	buttonPaddingTablet: {
		type: "object",
		default: {
			top: '12',
			bottom: '12',
			left: '24',
			right: '24',
		},
	},
	buttonPaddingMobile: {
		type: "object",
		default: {
			top: '12',
			bottom: '12',
			left: '24',
			right: '24',
		},
	},
	buttonPaddingLink: {
		type: "boolean",
		default: true
	},
	/** End Padding */

	/** Icon Settings */
	searchIconAlign: {
		type: "string",
		default: "none",
	},
	searchIcon: {
		type: 'string',
		default: 'arrow-right',
	},
	/** End Icon Settings */

	searchIconImageUrl: {
		type: 'string',
		default: '',
	},
	searchIconImageAlt: {
		type: 'string',
		default: '',
	},
	searchIconImageID: {
		type: 'number',
	},
	searchIconImageWidth: {
		type: 'object',
		default: {
			Desktop: '20',
			Tablet: '20',
			Mobile: '20',
		}
	},
	searchIconImageWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	searchIconImageHeight: {
		type: 'object',
		default: {
			Desktop: '20',
			Tablet: '20',
			Mobile: '20',
		}
	},
	searchIconImageHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	searchIconImageDisplay: {
		type: 'string',
		default: 'none',
	},

	/** Icon Styles */
	searchIconSize: {
		type: 'object',
		default: {
			Desktop: '50',
			Tablet: '50',
			Mobile: '30'
		}
	},
	searchIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	searchIconColorSwitcher: {
		type: "string",
		default: "normal"
	},
	searchIconColor: {
		type: "string",
		default: "#000"
	},
	searchIconHoverColor: {
		type: 'string',
		default: ""
	},

	searchIconRotateSwitcher: {
		type: 'string',
		default: 'normal',
	},
	searchIconRotate: {
		type: 'object',
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		}
	},
	searchIconRotateHover: {
		type: 'object',
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		}
	},

	searchIconImageRotateSwitcher: {
		type: 'string',
		default: 'normal',
	},
	searchIconImageRotate: {
		type: 'object',
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		}
	},
	searchIconImageRotateHover: {
		type: 'object',
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		}
	},
	/** End Icon Styles */

	/** Start Typography */
	inputFieldTextGlobalTypographyData: {
		type: "object",
		default: {}
	},
	inputFieldTextGlobalTypoSwitcher: {
		type: "object",
		default: {
			fontFamily: false,
			fontSize: false,
			fontWeight: false,
			fontStyle: false,
			textTransform: false,
			textDecoration: false,
			letterSpacing: false,
			lineHeight: false,
		},
	},
	inputFieldTextGlobalTypoType: {
		type: "string",
		default: 'default',
	},
	inputFieldTextGlobalTypoOption: {
		type: "object",
		default: { label: 'Default', value: 'default' },
	},
	inputFieldTextFontFamily: {
		type: "string",
		default: "Default",
	},
	inputFieldTextFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	inputFieldTextFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	inputFieldTextFontWeight: {
		type: "string",
		default: ""
	},
	inputFieldTextFontStyle: {
		type: "string",
		default: ""
	},
	inputFieldTextTransform: {
		type: "string",
		default: ""
	},
	inputFieldTextDecoration: {
		type: "string",
		default: ""
	},
	inputFieldTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	inputFieldTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	inputFieldTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	inputFieldTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Input Field Typography */

	/** Start Input Field Text Color */
	inputFieldTextColorSwitcher: {
		type: "string",
		default: "normal",
	},
	inputFieldTextColor: {
		type: "string",
		default: "",
	},
	inputFieldTextColorHover: {
		type: "string",
		default: "",
	},
	/** End Input Field Text Color */

	/** Start Input Field Border */
	inputFieldBorder: {
		type: 'string',
		default: "solid",
	},
	inputFieldBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	inputFieldBorderColor: {
		type: 'string',
		default: "#A4A7AE"
	},
	inputFieldBorderColorHover: {
		type: 'string',
		default: ""
	},
	inputFieldBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	inputFieldBorderDesktop: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	inputFieldBorderTablet: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	inputFieldBorderMobile: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	inputFieldBorderLink: {
		type: "boolean",
		default: true
	},
	/** End Input Field Border */

	/** Start Input Field Border Radius */
	inputFieldBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	inputFieldBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	inputFieldBorderRadiusTablet: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	inputFieldBorderRadiusMobile: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	inputFieldBorderRadiusLink: {
		type: "boolean",
		default: true
	},
	/** End Input Field Border Radius */


	/** Start Padding */
	inputFieldPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	inputFieldPaddingDesktop: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	inputFieldPaddingTablet: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	inputFieldPaddingMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	inputFieldPaddingLink: {
		type: "boolean",
		default: true
	},

	/** Start Search Result Styling */
	searchFieldTextGlobalTypographyData: {
		type: "object",
		default: {}
	},
	searchFieldTextGlobalTypoSwitcher: {
		type: "object",
		default: {
			fontFamily: false,
			fontSize: false,
			fontWeight: false,
			fontStyle: false,
			textTransform: false,
			textDecoration: false,
			letterSpacing: false,
			lineHeight: false,
		},
	},
	searchFieldTextGlobalTypoType: {
		type: "string",
		default: 'default',
	},
	searchFieldTextGlobalTypoOption: {
		type: "object",
		default: { label: 'Default', value: 'default' },
	},
	searchFieldTextFontFamily: {
		type: "string",
		default: "Default",
	},
	searchFieldTextFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	searchFieldTextFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	searchFieldTextFontWeight: {
		type: "string",
		default: ""
	},
	searchFieldTextFontStyle: {
		type: "string",
		default: ""
	},
	searchFieldTextTransform: {
		type: "string",
		default: ""
	},
	searchFieldTextDecoration: {
		type: "string",
		default: ""
	},
	searchFieldTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	searchFieldTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	searchFieldTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	searchFieldTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Input Field Typography */

	/** Start Input Field Text Color */
	searchFieldBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	searchFieldBgColor: {
		type: "string",
		default: "",
	},
	searchFieldBgColorHover: {
		type: "string",
		default: "",
	},
	searchFieldTextColorSwitcher: {
		type: "string",
		default: "normal",
	},
	searchFieldTextColor: {
		type: "string",
		default: "",
	},
	searchFieldTextColorHover: {
		type: "string",
		default: "",
	},
	/** End Input Field Text Color */

	/** Start Input Field Border */
	searchFieldBorder: {
		type: 'string',
		default: "solid",
	},
	searchFieldBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	searchFieldBorderColor: {
		type: 'string',
		default: "#A4A7AE"
	},
	searchFieldBorderColorHover: {
		type: 'string',
		default: ""
	},
	searchFieldBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	searchFieldBorderDesktop: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	searchFieldBorderTablet: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	searchFieldBorderMobile: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	searchFieldBorderLink: {
		type: "boolean",
		default: true
	},
	/** End Input Field Border */

	/** Start Input Field Border Radius */
	searchFieldBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	searchFieldBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	searchFieldBorderRadiusTablet: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	searchFieldBorderRadiusMobile: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	searchFieldBorderRadiusLink: {
		type: "boolean",
		default: true
	},
	/** End Input Field Border Radius */

	/** Start Padding */
	searchFieldPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	searchFieldPaddingDesktop: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	searchFieldPaddingTablet: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	searchFieldPaddingMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	searchFieldPaddingLink: {
		type: "boolean",
		default: true
	},
	/** Start Search Result Item Styling */
	searchFieldItemColorSwitcher: {
		type: "string",
		default: "normal",
	},
	searchFieldItemColor: {
		type: "string",
		default: "",
	},
	searchFieldItemColorHover: {
		type: "string",
		default: "",
	},

	searchFieldItemBorder: {
		type: 'string',
		default: "solid",
	},
	searchFieldItemBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	searchFieldItemBorderColor: {
		type: 'string',
		default: "#A4A7AE"
	},
	searchFieldItemBorderColorHover: {
		type: 'string',
		default: ""
	},
	searchFieldItemBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	searchFieldItemBorderDesktop: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	searchFieldItemBorderTablet: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	searchFieldItemBorderMobile: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	searchFieldItemBorderLink: {
		type: "boolean",
		default: true
	},
	/** End Input Field Border */

	/** Start Input Field Border Radius */
	searchFieldItemBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	searchFieldItemBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	searchFieldItemBorderRadiusTablet: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	searchFieldItemBorderRadiusMobile: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	searchFieldItemBorderRadiusLink: {
		type: "boolean",
		default: true
	},
	/** End Input Field Border Radius */

	/** Start Padding */
	searchFieldItemPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	searchFieldItemPaddingDesktop: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	searchFieldItemPaddingTablet: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	searchFieldItemPaddingMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	searchFieldItemPaddingLink: {
		type: "boolean",
		default: true
	},

	/** Start Search Result Item Title Styling */
	/** Start Typography */
	searchFieldItemTitleGlobalTypographyData: {
		type: "object",
		default: {}
	},
	searchFieldItemTitleGlobalTypoSwitcher: {
		type: "object",
		default: {
			fontFamily: false,
			fontSize: false,
			fontWeight: false,
			fontStyle: false,
			textTransform: false,
			textDecoration: false,
			letterSpacing: false,
			lineHeight: false,
		},
	},
	searchFieldItemTitleGlobalTypoType: {
		type: "string",
		default: 'default',
	},
	searchFieldItemTitleGlobalTypoOption: {
		type: "object",
		default: { label: 'Default', value: 'default' },
	},
	searchFieldItemTitleFontFamily: {
		type: "string",
		default: "Default",
	},
	searchFieldItemTitleFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	searchFieldItemTitleFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	searchFieldItemTitleFontWeight: {
		type: "string",
		default: ""
	},
	searchFieldItemTitleFontStyle: {
		type: "string",
		default: ""
	},
	searchFieldItemTitleTransform: {
		type: "string",
		default: ""
	},
	searchFieldItemTitleDecoration: {
		type: "string",
		default: ""
	},
	searchFieldItemTitleLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	searchFieldItemTitleLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	searchFieldItemTitleLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	searchFieldItemTitleLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Input Field Typography */
	searchFieldItemTitleColorSwitcher: {
		type: "string",
		default: "normal",
	},
	searchFieldItemTitleColor: {
		type: "string",
		default: "",
	},
	searchFieldItemTitleColorHover: {
		type: "string",
		default: "",
	},

	searchFieldItemTitleBorder: {
		type: 'string',
		default: "solid",
	},
	searchFieldItemTitleBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	searchFieldItemTitleBorderColor: {
		type: 'string',
		default: "#A4A7AE"
	},
	searchFieldItemTitleBorderColorHover: {
		type: 'string',
		default: ""
	},
	searchFieldItemTitleBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	searchFieldItemTitleBorderDesktop: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	searchFieldItemTitleBorderTablet: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	searchFieldItemTitleBorderMobile: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	searchFieldItemTitleBorderLink: {
		type: "boolean",
		default: true
	},
	/** End Input Field Border */

	/** Start Input Field Border Radius */
	searchFieldItemTitleBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	searchFieldItemTitleBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	searchFieldItemTitleBorderRadiusTablet: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	searchFieldItemTitleBorderRadiusMobile: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	searchFieldItemTitleBorderRadiusLink: {
		type: "boolean",
		default: true
	},
	/** End Input Field Border Radius */

	/** Start Padding */
	searchFieldItemTitlePaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	searchFieldItemTitlePaddingDesktop: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	searchFieldItemTitlePaddingTablet: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	searchFieldItemTitlePaddingMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	searchFieldItemTitlePaddingLink: {
		type: "boolean",
		default: true
	},

	/** Start Search Result Item Title Styling */
	/** Start Typography */
	searchFieldItemMetaGlobalTypographyData: {
		type: "object",
		default: {}
	},
	searchFieldItemMetaGlobalTypoSwitcher: {
		type: "object",
		default: {
			fontFamily: false,
			fontSize: false,
			fontWeight: false,
			fontStyle: false,
			textTransform: false,
			textDecoration: false,
			letterSpacing: false,
			lineHeight: false,
		},
	},
	searchFieldItemMetaGlobalTypoType: {
		type: "string",
		default: 'default',
	},
	searchFieldItemMetaGlobalTypoOption: {
		type: "object",
		default: { label: 'Default', value: 'default' },
	},
	searchFieldItemMetaFontFamily: {
		type: "string",
		default: "Default",
	},
	searchFieldItemMetaFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	searchFieldItemMetaFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	searchFieldItemMetaFontWeight: {
		type: "string",
		default: ""
	},
	searchFieldItemMetaFontStyle: {
		type: "string",
		default: ""
	},
	searchFieldItemMetaTransform: {
		type: "string",
		default: ""
	},
	searchFieldItemMetaDecoration: {
		type: "string",
		default: ""
	},
	searchFieldItemMetaLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	searchFieldItemMetaLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	searchFieldItemMetaLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	searchFieldItemMetaLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Input Field Typography */
	searchFieldItemMetaColorSwitcher: {
		type: "string",
		default: "normal",
	},
	searchFieldItemMetaColor: {
		type: "string",
		default: "",
	},
	searchFieldItemMetaColorHover: {
		type: "string",
		default: "",
	},

	searchFieldItemMetaBorder: {
		type: 'string',
		default: "solid",
	},
	searchFieldItemMetaBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	searchFieldItemMetaBorderColor: {
		type: 'string',
		default: "#A4A7AE"
	},
	searchFieldItemMetaBorderColorHover: {
		type: 'string',
		default: ""
	},
	searchFieldItemMetaBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	searchFieldItemMetaBorderDesktop: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	searchFieldItemMetaBorderTablet: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	searchFieldItemMetaBorderMobile: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	searchFieldItemMetaBorderLink: {
		type: "boolean",
		default: true
	},
	/** End Input Field Border */

	/** Start Input Field Border Radius */
	searchFieldItemMetaBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	searchFieldItemMetaBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	searchFieldItemMetaBorderRadiusTablet: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	searchFieldItemMetaBorderRadiusMobile: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	searchFieldItemMetaBorderRadiusLink: {
		type: "boolean",
		default: true
	},
	/** End Input Field Border Radius */

	/** Start Padding */
	searchFieldItemMetaPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	searchFieldItemMetaPaddingDesktop: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	searchFieldItemMetaPaddingTablet: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	searchFieldItemMetaPaddingMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	searchFieldItemMetaPaddingLink: {
		type: "boolean",
		default: true
	},

	resultMetaGap: {
		type: 'object',
		default: {
			Desktop: '24',
			Tablet: '',
			Mobile: ''
		}
	},
	resultMetaGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** Meta Divider */
	metaDividerSize: {
		type: 'object',
		default: {
			Desktop: '24',
			Tablet: '',
			Mobile: ''
		}
	},
	metaDividerSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	metaDividerColorSwitcher: {
		type: "string",
		default: "normal",
	},
	metaDividerColor: {
		type: "string",
		default: "",
	},
	metaDividerColorHover: {
		type: "string",
		default: "",
	},

	/** Start Search View All Result Styling */
	SearchViewAllResultsGlobalTypographyData: {
		type: "object",
		default: {}
	},
	SearchViewAllResultsGlobalTypoSwitcher: {
		type: "object",
		default: {
			fontFamily: false,
			fontSize: false,
			fontWeight: false,
			fontStyle: false,
			textTransform: false,
			textDecoration: false,
			letterSpacing: false,
			lineHeight: false,
		},
	},
	SearchViewAllResultsGlobalTypoType: {
		type: "string",
		default: 'default',
	},
	SearchViewAllResultsGlobalTypoOption: {
		type: "object",
		default: { label: 'Default', value: 'default' },
	},
	SearchViewAllResultsFontFamily: {
		type: "string",
		default: "Default",
	},
	SearchViewAllResultsFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	SearchViewAllResultsFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	SearchViewAllResultsFontWeight: {
		type: "string",
		default: ""
	},
	SearchViewAllResultsFontStyle: {
		type: "string",
		default: ""
	},
	SearchViewAllResultsTransform: {
		type: "string",
		default: ""
	},
	SearchViewAllResultsDecoration: {
		type: "string",
		default: ""
	},
	SearchViewAllResultsLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	SearchViewAllResultsLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	SearchViewAllResultsLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	SearchViewAllResultsLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Input Field Typography */
	SearchViewAllResultsColorSwitcher: {
		type: "string",
		default: "normal",
	},
	SearchViewAllResultsColor: {
		type: "string",
		default: "",
	},
	SearchViewAllResultsColorHover: {
		type: "string",
		default: "",
	},

	SearchViewAllResultsBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	SearchViewAllResultsBgColor: {
		type: "string",
		default: "",
	},
	SearchViewAllResultsBgColorHover: {
		type: "string",
		default: "",
	},
	SearchViewAllResultsBorder: {
		type: 'string',
		default: "solid",
	},
	SearchViewAllResultsBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	SearchViewAllResultsBorderColor: {
		type: 'string',
		default: "#A4A7AE"
	},
	SearchViewAllResultsBorderColorHover: {
		type: 'string',
		default: ""
	},
	SearchViewAllResultsBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	SearchViewAllResultsBorderDesktop: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	SearchViewAllResultsBorderTablet: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	SearchViewAllResultsBorderMobile: {
		type: "object",
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	SearchViewAllResultsBorderLink: {
		type: "boolean",
		default: true
	},
	/** End Input Field Border */

	/** Start Input Field Border Radius */
	SearchViewAllResultsBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	SearchViewAllResultsBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	SearchViewAllResultsBorderRadiusTablet: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	SearchViewAllResultsBorderRadiusMobile: {
		type: "object",
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	SearchViewAllResultsBorderRadiusLink: {
		type: "boolean",
		default: true
	},
	/** End Input Field Border Radius */

	/** Start Padding */
	SearchViewAllResultsPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	SearchViewAllResultsPaddingDesktop: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	SearchViewAllResultsPaddingTablet: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	SearchViewAllResultsPaddingMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	SearchViewAllResultsPaddingLink: {
		type: "boolean",
		default: true
	},
	/** End Search View All Result Styling */
	searchIconZIndex: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},
	searchGlobalWraperID: {
		type: "string",
		default: ""
	},

	searchGlobalWraperClass: {
		type: "string",
		default: ""
	},
	searchCustomCSS: {
		type: "string",
		default: "",
	},

};

export default attributes;