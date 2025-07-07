const attributes = {
    blockId: {
        type: "string"
    },
    blockStyle: {
        type: 'string',
        default: '',
    },
    deviceType: {
        type: "string",
        default: "Desktop"
    },
    navigationLayout: {
        type: "string",
        default: "is-horizontal"
    },
    navigationHorizontalAlign: {
        type: "string",
        default: "items-justified-left"
    },
    navigationVerticalAlign: {
        type: "string",
        default: "items-justified-left"
    },
    hamburgerMenuIconType: {
        type: "string",
        default: "icon"
    },
    dropdownOpenOnClick: {
        type: "boolean",
        default: false
    },
    showDropdownIcon: {
        type: "boolean",
        default: true
    },
    navigationFlexWrapSwitcher: {
        type: "boolean",
        default: false
    },

	/** Start Navigation Typography */
    navigationGlobalTypographyData: {
        type: "object",
        default: {}
    },
    navigationGlobalTypoSwitcher: {
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
    navigationGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    navigationGlobalTypoOption: {
        type: "object",
        default: {label: 'Default', value: 'default'},
    },
    navigationFontFamily: {
        type: "string",
        default: "Default",
    },
    navigationFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	navigationFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    navigationFontWeight : {
        type: "string",
        default: ""
    },
    navigationFontStyle : {
        type: "string",
        default: ""
    },
    navigationTextTransform : {
        type: "string",
        default: ""
    },
    navigationTextDecoration : {
        type: "string",
        default: ""
    },
    navigationLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	navigationLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    navigationLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	navigationLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	
	/** End Navigation Typography */ 

	/** Start Navigation Color and active color */
	navigationColorSwitcher : {
        type: "string",
        default: "normal"
    },
    navigationColor : {
        type: "string"
    },
    navigationHoverColor: {
        type: 'string',
    },

	navigationActiveColorSwitcher : {
        type: "string",
        default: "normal"
    },
    navigationActiveColor : {
        type: "string"
    },
    navigationActiveHoverColor: {
        type: 'string',
    },
	/** End Navigation Color and active color */

	/** Start Navigation Background */
	navigationBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	navigationNormalBackgroundType: { 
		type: "string",
		default: "classic",
	},
	navigationNormalClassicColor: {
		type: "string",
		default: "",
	},
	navigationNormalGradientColor: {
		type: "string",
		default: null,
	},
	navigationNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	navigationNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	navigationHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	navigationHoverClassicColor: {
		type: "string",
		default: "",
	},
	navigationHoverGradientColor: {
		type: "string",
		default: null,
	},
	navigationHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	navigationHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Navigation Background */

	/** Start Navigation Padding and Margin */
	navigationPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    navigationDesktopPadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    navigationTabletPadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    navigationMobilePadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    navigationPaddingLink : {
        type : "boolean",
        default: true
    },
    navigationMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    navigationDesktopMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    navigationTabletMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    navigationMobileMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    navigationMarginLink : {
        type : "boolean",
        default: true
    },
    /** End Navigation Padding and Margin */

	/** Start Navigation Border */
	navigationBorder: {
		type: 'string',
		default: "none",
	},
	navigationBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	navigationBorderColor: {
		type: 'string',
	},
	navigationBorderHoverColor: {
		type: 'string',
	},
	navigationBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	navigationDesktopBorder: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	navigationTabletBorder: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	navigationMobileBorder: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	navigationBorderLink : {
		type : "boolean",
		default: true
	},
	navigationBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	navigationDesktopBorderRadius: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	navigationTabletBorderRadius: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	navigationMobileBorderRadius: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	navigationBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Navigation Border */

	/** Start Navigation Box Shadow */
	navigationBoxShadowSwitcher: {
		type: 'string',
		default: 'normal',
	},
	navigationBoxShadowValues: {
		type: 'array',
		default: [],
	},
	navigationBoxShadowCssValue: {
		type: 'string',
		default: '',
	},
	navigationBoxShadowHoverValues: {
		type: 'array',
		default: [],
	},
	navigationBoxShadowHoverCssValue: {
		type: 'string',
		default: '',
	},
	/** End Box Shadow */


	/** Start Dropdown Menu */
	dropDownWrapperMinWidth: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	dropDownWrapperMinWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},

	/** Start Dropdown Menu Background */
	dropDownBgColorSwitcher : { 
		type: "string",
		default: "normal"
	},
	dropDownNormalBackgroundType: { 
		type: "string",
		default: "classic",
	},
	dropDownNormalClassicColor: {
		type: "string",
		default: "",
	},
	dropDownNormalGradientColor: {
		type: "string",
		default: null,
	},
	dropDownNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	dropDownNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	dropDownHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	dropDownHoverClassicColor: {
		type: "string",
		default: "",
	},
	dropDownHoverGradientColor: {
		type: "string",
		default: null,
	},
	dropDownHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	dropDownHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Dropdown Menu Background */

	/** Start Dropdown Menu Padding and Margin */
	dropDownPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	dropDownDesktopPadding: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownTabletPadding: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownMobilePadding: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownPaddingLink : {
		type : "boolean",
		default: true
	},
	dropDownMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	dropDownDesktopMargin: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownTabletMargin: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownMobileMargin: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Dropdown Menu Padding and Margin */

	/** Start Dropdown Menu Border */
	dropDownBorder: {
		type: 'string',
		default: "none",
	},
	dropDownBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	dropDownBorderColor: {
		type: 'string',
	},
	dropDownBorderHoverColor: {
		type: 'string',
	},
	dropDownBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	dropDownDesktopBorder: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownTabletBorder: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownMobileBorder: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownBorderLink : {
		type : "boolean",
		default: true
	},
	dropDownBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	dropDownDesktopBorderRadius: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownTabletBorderRadius: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownMobileBorderRadius: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Dropdown Menu Border */

	/** Start Dropdown Menu Box Shadow */
	dropDownBoxShadowSwitcher: {
		type: 'string',
		default: 'normal',
	},
	dropDownBoxShadowValues: {
		type: 'array',
		default: [],
	},
	dropDownBoxShadowCssValue: {
		type: 'string',
		default: '',
	},
	dropDownBoxShadowHoverValues: {
		type: 'array',
		default: [],
	},
	dropDownBoxShadowHoverCssValue: {
		type: 'string',
		default: '',
	},
	/** End Dropdown Menu Box Shadow */

	/** Start Dropdown Menu Typography */
	dropDownItemTypographyData: {
		type: "object",
		default: {}
	},
	dropDownItemTypoSwitcher: {
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
	dropDownItemTypoType: {
		type: "string",
		default: 'default',
	},
	dropDownItemTypoOption: {
		type: "object",
		default: {label: 'Default', value: 'default'},
	},
	dropDownItemFontFamily: {
		type: "string",
		default: "Default",
	},
	dropDownItemFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	dropDownItemFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	dropDownItemFontWeight : {
		type: "string",
		default: ""
	},
	dropDownItemFontStyle : {
		type: "string",
		default: ""
	},
	dropDownItemTextTransform : {
		type: "string",
		default: ""
	},
	dropDownItemTextDecoration : {
		type: "string",
		default: ""
	},
	dropDownItemLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	dropDownItemLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	dropDownItemLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	dropDownItemLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	
	/** End Dropdown Menu Item Typography */ 

	/** Start Dropdown Menu Color and active color */
	dropDownItemColorSwitcher : {
		type: "string",
		default: "normal"
	},
	dropDownItemColor : {
		type: "string"
	},
	dropDownItemHoverColor: {
		type: 'string',
	},

	dropDownItemActiveColorSwitcher : {
		type: "string",
		default: "normal"
	},
	dropDownItemActiveColor : {
		type: "string"
	},
	dropDownItemActiveHoverColor: {
		type: 'string',
	},
	/** End Dropdown Menu Color and active color */

	/** Start Dropdown Menu Item Padding and Margin */
	dropDownItemPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	dropDownItemDesktopPadding: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownItemTabletPadding: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownItemMobilePadding: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownItemPaddingLink : {
		type : "boolean",
		default: true
	},

	dropDownItemMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	dropDownItemDesktopMargin: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownItemTabletMargin: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownItemMobileMargin: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownItemMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Dropdown Menu Item Padding and Margin */

	/** Start Dropdown Menu Item Border */
	dropDownItemBorder: {
		type: 'string',
		default: "none",
	},
	dropDownItemBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	dropDownItemBorderColor: {
		type: 'string',
	},
	dropDownItemBorderHoverColor: {
		type: 'string',
	},
	dropDownItemBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	dropDownItemDesktopBorder: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownItemTabletBorder: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownItemMobileBorder: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownItemBorderLink : {
		type : "boolean",
		default: true
	},
	dropDownItemBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	dropDownItemDesktopBorderRadius: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownItemTabletBorderRadius: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownItemMobileBorderRadius: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownItemBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Dropdown Menu Item Border */

	/** Start Dropdown Menu Icon */
	dropDownIconSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '16',
			Mobile: '16',
		}
	},
	dropDownIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	dropDownIconColorSwitcher : {
		type: "string",
		default: "normal"
	},
	dropDownIconColor: {
		type: 'string',
	},
	dropDownIconHoverColor: {
		type: 'string',
	},

	dropDownIconMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	dropDownIconDesktopMargin: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownIconTabletMargin: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownIconMobileMargin: {
		type: "object", 
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	dropDownIconMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Dropdown Menu Icon */

	/** Start Hamburger Menu */
	hamburgerMenuIconSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},
	hamburgerMenuIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	hamburgerMenuIconColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	hamburgerMenuIconColor: {
		type: 'string',
	},
	hamburgerMenuIconHoverColor: {
		type: 'string',
	},
	/** Start Padding */
	hamburgerMenuIconPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	hamburgerMenuIconDesktopPadding: {
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	hamburgerMenuIconTabletPadding: {
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	hamburgerMenuIconMobilePadding: { 
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	hamburgerMenuIconPaddingLink : { 
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Hamburger Menu Background */
	hamburgerMenuPopupBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	hamburgerMenuPopupNormalBackgroundType: { 
		type: "string",
		default: "classic",
	},
	hamburgerMenuPopupNormalClassicColor: {
		type: "string",
		default: "",
	},
	hamburgerMenuPopupNormalGradientColor: {
		type: "string",
		default: null,
	},
	hamburgerMenuPopupNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	hamburgerMenuPopupNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	hamburgerMenuPopupHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	hamburgerMenuPopupHoverClassicColor: {
		type: "string",
		default: "",
	},
	hamburgerMenuPopupHoverGradientColor: {
		type: "string",
		default: null,
	},
	hamburgerMenuPopupHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	hamburgerMenuPopupHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Hamburger Menu Background */

	/** Start Hamburger Menu Padding */
	hamburgerMenuPopupPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	hamburgerMenuPopupDesktopPadding: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	hamburgerMenuPopupTabletPadding: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	hamburgerMenuPopupMobilePadding: { 
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	hamburgerMenuPopupPaddingLink : { 
		type : "boolean",
		default: true
	},
	/** End Hamburger Menu Padding */

	/** Start Hamburger Menu Popup Typography */ 
	hamburgerMenuPopupGlobalTypographyData: { // Hamburger Menu Typography
		type: "object",
		default: {}
	},
	hamburgerMenuPopupGlobalTypoSwitcher: {
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
	hamburgerMenuPopupGlobalTypoType: {
		type: "string",
		default: 'default',
	},
	hamburgerMenuPopupGlobalTypoOption: {
		type: "object",
		default: {label: 'Default', value: 'default'},
	},
	hamburgerMenuPopupFontFamily: {
		type: "string",
		default: "Default",
	},
	hamburgerMenuPopupFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	hamburgerMenuPopupFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	hamburgerMenuPopupFontWeight : {
		type: "string",
		default: ""
	},
	hamburgerMenuPopupFontStyle : {
		type: "string",
		default: ""
	},
	hamburgerMenuPopupTextTransform : {
		type: "string",
		default: ""
	},
	hamburgerMenuPopupTextDecoration : {
		type: "string",
		default: ""
	},
	hamburgerMenuPopupLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	hamburgerMenuPopupLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	hamburgerMenuPopupLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	hamburgerMenuPopupLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	
	/** End Hamburger Menu Popup Typography */ 

	/** Start Hamburger Menu Popup Color */
	hamburgerMenuPopupColorSwitcher : {
		type: "string",
		default: "normal"
	},
	hamburgerMenuPopupColor : {
		type: "string"
	},
	hamburgerMenuPopupHoverColor: {
		type: 'string',
	},
	/** End Hamburger Menu Popup Color */

	/** Start Hamburger Menu close icon color */
	hamburgerMenuCloseIconSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},
	hamburgerMenuCloseIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	hamburgerMenuCloseIconColorSwitcher : {
		type: "string",
		default: "normal"
	},
	hamburgerMenuCloseIconColor : {
		type: "string"
	},
	hamburgerMenuCloseIconHoverColor: {
		type: 'string',
	},
	/** End Hamburger Menu close icon color */

	
	/** End Hamburger Menu */


    /** Start Global Setting */
	navigationGlobalZIndex : {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},
	navigationOverflow: {
        type: 'string',
        default: "default",
    },
    /** Start Position */
    navigationPositionType: {
        type: "string",
        default: "default"
    },
    navigationHZOrientationType: {
        type: "string",
        default: "left"
    },
    navigationVROrientationType: {
        type: "string",
        default: "top"
    },
    navigationHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    navigationHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    navigationHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    navigationHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    navigationVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    navigationVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    navigationVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    navigationVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    /** End Position */
	/** Start Padding */
	navigationGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	navigationGlobalPaddingDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalPaddingTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalPaddingMobile: { 
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalPaddingLink : { 
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Margin */
	navigationGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	navigationGlobalMarginDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

	/** Start Background */
	navigationGlobalBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	navigationGlobalNormalBackgroundType: { 
		type: "string",
		default: "classic",
	},
	navigationGlobalNormalClassicColor: {
		type: "string",
		default: "",
	},
	navigationGlobalNormalGradientColor: {
		type: "string",
		default: null,
	},
	navigationGlobalNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	navigationGlobalNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	navigationGlobalHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	navigationGlobalHoverClassicColor: {
		type: "string",
		default: "",
	},
	navigationGlobalHoverGradientColor: {
		type: "string",
		default: null,
	},
	navigationGlobalHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	navigationGlobalHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Background */

	/** Start Border */
	navigationGlobalBorder: {
		type: 'string',
		default: "none",
	},
	navigationGlobalBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	navigationGlobalBorderColor: {
		type: 'string',
		default: ""
	},
	navigationGlobalBorderHoverColor: {
		type: 'string',
	},
	navigationGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	navigationGlobalBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	navigationGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	navigationGlobalBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
	navigationGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	navigationGlobalBoxShadowValues: {
		type: 'array',
		default: [],
	},
	navigationGlobalBoxShadowCssValue: {
		type: 'string',
		default: '',
	},
	navigationGlobalBoxShadowHoverValues: {
		type: 'array',
		default: [],
	},
	navigationGlobalBoxShadowHoverCssValue: {
		type: 'string',
		default: '',
	},

    /** Start Responsive Control */

    navigationDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    navigationTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    navigationMobileSwitcher: {
        type: "boolean",
        default: false,
    },
    /** End Responsive Control */

	/** Start Class & ID Setting */
	navigationGlobalCustomCSS : {
        type: "string",
        default: "",
    },
	navigationGlobalWraperID : {
		type: "string",
		default: ""
	},

	navigationGlobalWraperClass : {
		type: "string",
		default: ""
	},
	/** End Class & ID Setting */
    
};

export default attributes;