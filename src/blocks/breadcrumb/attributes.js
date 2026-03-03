const attributes = {
	blockID: {
		type: 'string',
		default: '',
	},
    blockStyle: {
        type: 'string',
        default: '',
    },
    breadcrumbAlignment:{
        type: 'object',
        default: {
            Desktop: 'left',
            Tablet: '',
            Mobile: '',
        },
    },
	// Separator Settings
	separatorType: {
		type: 'string',
		default: 'text',
	},
	separatorText: {
		type: 'string',
		default: '/',
	},
	separatorIcon: {
		type: 'string',
		default: 'angle-right',
	},
	separatorIconFrontend:{
		type: 'string',
		default: 'angle-right',
	},
	// Home Settings
    showHomePage:{
        type: 'boolean',
		default: true,
    },
    homeprefixSwitcher: {
        type: 'string',
        default: 'icon',
    },
    homeTextPrefix: {
        type: 'string',
        default: 'Browsing:',
    },
	showHomeIcon: {
		type: 'boolean',
		default: false,
	},
	homeIcon: {
		type: 'string',
		default: 'house',
	},
	homeText: {
		type: 'string',
		default: 'Home',
	},
	homeIconFrontend:{
        type: 'string',
		default: '',
    },
	// Item Settings
	showItemIcon: {
		type: 'boolean',
		default: false,
	},
	itemIcon: {
		type: 'string',
		default: 'file',
	},
	itemIconFrontend:{
		type: 'string',
		default: 'file',
	},
	// Style - Typography
	breadcrumbTypography: {
		type: 'object',
		default: {},
	},
	// Alignment
	align: {
		type: 'string',
		default: 'flex-start',
	},
	//Item Typography
	breadcrumbItemGlobalTypographyData: {
        type: "object",
        default: {}
    },
    breadcrumbItemGlobalTypoSwitcher: {
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
    breadcrumbItemGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    breadcrumbItemGlobalTypoOption: {
        type: "object",
        default: {label: 'Default', value: 'default'},
    },
    breadcrumbItemFontFamily: {
        type: "string",
        default: "Default",
    },
    breadcrumbItemFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	breadcrumbItemFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    breadcrumbItemFontWeight: {
        type: "string",
        default: ""
    },
    breadcrumbItemFontStyle: {
        type: "string",
        default: ""
    },
    breadcrumbItemTextTransform: {
        type: "string",
        default: ""
    },
    breadcrumbItemTextDecoration: {
        type: "string",
        default: ""
    },
    breadcrumbItemLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	breadcrumbItemLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    breadcrumbItemLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	breadcrumbItemLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	//Color
	breadcrumbItemColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    breadcrumbItemColor: {
        type: 'string',
    },
    breadcrumbItemHoverColor: {
        type: 'string',
    },
	breadcrumbItemBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    breadcrumbItemBgColor: {
        type: 'string',
    },
    breadcrumbItemBgHoverColor: {
        type: 'string',
    },
	breadcrumbItemGap: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbItemGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	//Current Item
	breadcrumbCurrentItemGlobalTypographyData: {
        type: "object",
        default: {}
    },
    breadcrumbCurrentItemGlobalTypoSwitcher: {
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
    breadcrumbCurrentItemGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    breadcrumbCurrentItemGlobalTypoOption: {
        type: "object",
        default: {label: 'Default', value: 'default'},
    },
    breadcrumbCurrentItemFontFamily: {
        type: "string",
        default: "Default",
    },
    breadcrumbCurrentItemFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	breadcrumbCurrentItemFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    breadcrumbCurrentItemFontWeight: {
        type: "string",
        default: ""
    },
    breadcrumbCurrentItemFontStyle: {
        type: "string",
        default: ""
    },
    breadcrumbCurrentItemTextTransform: {
        type: "string",
        default: ""
    },
    breadcrumbCurrentItemTextDecoration: {
        type: "string",
        default: ""
    },
    breadcrumbCurrentItemLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	breadcrumbCurrentItemLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    breadcrumbCurrentItemLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	breadcrumbCurrentItemLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	//Color
	breadcrumbCurrentItemColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    breadcrumbCurrentItemColor: {
        type: 'string',
    },
    breadcrumbCurrentItemHoverColor: {
        type: 'string',
    },
	breadcrumbCurrentItemBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    breadcrumbCurrentItemBgColor: {
        type: 'string',
    },
    breadcrumbCurrentItemBgHoverColor: {
        type: 'string',
    },
	//Spacing
	/** Start breadcrumbItem Border */
    breadcrumbItemBorder: {
        type: 'string',
        default: 'none',
    },
    breadcrumbItemBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    breadcrumbItemBorderColor: {
        type: 'string',
    },
    breadcrumbItemBorderHoverColor: {
        type: 'string',
    },
    breadcrumbItemBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    breadcrumbItemDesktopBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    breadcrumbItemTabletBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    breadcrumbItemMobileBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    breadcrumbItemBorderLink : {
        type : 'boolean',
        default: true
    },
    breadcrumbItemBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    breadcrumbItemDesktopBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    breadcrumbItemTabBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    breadcrumbItemMobileBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    breadcrumbItemBorderRadiusLink : {
        type : 'boolean',
        default: true
    },
    /** End breadcrumbItem Border */

    /** Start breadcrumbItem Box Shadow */
    breadcrumbItemBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    breadcrumbItemBoxShadowValues: {
        type: 'array',
        default: [],
    },
    breadcrumbItemBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    breadcrumbItemBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    breadcrumbItemBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },

    breadcrumbItemPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    breadcrumbItemDesktopPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    breadcrumbItemTabPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    breadcrumbItemMobilePadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    breadcrumbItemPaddingLink : {
        type : 'boolean',
        default: true
    },
    breadcrumbItemMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    breadcrumbItemDesktopMargin: {
        type: 'object',
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    breadcrumbItemTabMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    breadcrumbItemMobileMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    breadcrumbItemMarginLink : {
        type : 'boolean',
        default: true
    },
	//Home icon
    breadcrumbIconSize: {
        type: 'object',
        default: {
            Desktop: '16',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	breadcrumbHomeIconGap: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbHomeIconGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    breadcrumbIconBgSize: {
        type: 'object',
        default: {
            Desktop: '50',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbIconBgSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    breadcrumbIconColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    breadcrumbIconColor : {
        type: 'string',
        default: '',
    },
    breadcrumbIconHoverColor: {
        type: 'string',
        default: ''
    },
    breadcrumbIconBgColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    breadcrumbIconBgColor : {
        type: 'string',
        default: ''
    },
    breadcrumbIconBgHoverColor: {
        type: 'string',
        default: ''
    },
	//Seperator Icon
	breadcrumbSeperatorSize: {
        type: 'object',
        default: {
            Desktop: '16',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbSeperatorSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	breadcrumbSeperatorIconGap: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbSeperatorIconGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    breadcrumbSeperatorBgSize: {
        type: 'object',
        default: {
            Desktop: '50',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbSeperatorBgSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    breadcrumbSeperatorColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    breadcrumbSeperatorColor : {
        type: 'string',
        default: '',
    },
    breadcrumbSeperatorHoverColor: {
        type: 'string',
        default: ''
    },
    breadcrumbSeperatorBgColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    breadcrumbSeperatorBgColor : {
        type: 'string',
        default: ''
    },
    breadcrumbSeperatorBgHoverColor: {
        type: 'string',
        default: ''
    },
	//Item icon
	breadcrumbItemIconSize: {
        type: 'object',
        default: {
            Desktop: '16',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbItemIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	breadcrumbItemIconGap: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbItemIconGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    breadcrumbItemIconBgSize: {
        type: 'object',
        default: {
            Desktop: '50',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbItemIconBgSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    breadcrumbItemIconColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    breadcrumbItemIconColor : {
        type: 'string',
        default: '',
    },
    breadcrumbItemIconHoverColor: {
        type: 'string',
        default: ''
    },
    breadcrumbItemIconBgColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    breadcrumbItemIconBgColor : {
        type: 'string',
        default: ''
    },
    breadcrumbItemIconBgHoverColor: {
        type: 'string',
        default: ''
    },
	// Extra
	breadcrumbGlobalZIndex : {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
	breadcrumbOverflow: {
        type: 'string',
        default: 'default',
    },
	breadcrumbPositionType: {
        type: 'string',
        default: 'default'
    },
    breadcrumbHZOrientationType: {
        type: 'string',
        default: 'left'
    },
    breadcrumbVROrientationType: {
        type: 'string',
        default: 'top'
    },
    breadcrumbHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    breadcrumbHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    breadcrumbVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    breadcrumbVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

	breadcrumbGlobalWraperID : {
        type: 'string',
        default: ''
    },
    breadcrumbGlobalWraperClass : {
        type: 'string',
        default: ''
    },

	/** Start Padding */
	breadcrumbGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	breadcrumbGlobalPaddingDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalPaddingTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalPaddingMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalPaddingLink : {
		type : 'boolean',
		default: true
	},
	/** End Padding */

	/** Start Margin */
	breadcrumbGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	breadcrumbGlobalMarginDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Margin */

	/** Start Background Normal for fb breadcrumb */
	breadcrumbGlobalBgColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	breadcrumbGlobalBgNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	breadcrumbGlobalBgNormalClassicColor: {
		type: 'string',
		default: '',
	},
	breadcrumbGlobalBgNormalGradientColor: {
		type: 'string',
		default: null,
	},
	breadcrumbGlobalBgNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	breadcrumbGlobalBgNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Bg Normal Image for fb container */
	breadcrumbGlobalBgNormalBackgroundImageUrl: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
	breadcrumbGlobalBgNormalBackgroundImageAlt: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
	breadcrumbGlobalBgNormalBackgroundImageID: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbGlobalBgNormalBackgroundImagePosition: {
        type: 'object',
        default: {
            Desktop: { x: '0.5', y: '0.5' },
            Tablet: { x: '', y: '' },
            Mobile: { x: '', y: '' }
        }
    },
    breadcrumbGlobalBgNormalBackgroundImageAttachment: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbGlobalBgNormalBackgroundImageRepeat: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbGlobalBgNormalBackgroundImageSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },


	/**Bg Hover for fb breadcrumb */
	breadcrumbGlobalBgHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	breadcrumbGlobalBgHoverClassicColor: {
		type: 'string',
		default: '',
	},
	breadcrumbGlobalBgHoverGradientColor: {
		type: 'string',
		default: null,
	},
	breadcrumbGlobalBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	breadcrumbGlobalBgHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Hover Image for fb breadcrumb */
	breadcrumbGlobalBgHoverBackgroundImageUrl: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	breadcrumbGlobalBgHoverBackgroundImagePosition: {
		type: 'object',
		default: {
			Desktop: { x: '0.5', y: '0.5' },
			Tablet: { x: '', y: '' },
			Mobile: { x: '', y: '' }
		}
	},
	breadcrumbGlobalBgHoverBackgroundImageAttachment: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	breadcrumbGlobalBgHoverBackgroundImageRepeat: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	breadcrumbGlobalBgHoverBackgroundImageSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	/** End Background for fb breadcrumb */

	/** Start Border */
	breadcrumbGlobalBorder: {
		type: 'string',
		default: 'none',
	},
	breadcrumbGlobalBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	breadcrumbGlobalBorderColor: {
		type: 'string',
		default: ''
	},
	breadcrumbGlobalBorderHoverColor: {
		type: 'string',
	},
	breadcrumbGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	breadcrumbGlobalBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalBorderLink : {
		type : 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	breadcrumbGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	breadcrumbGlobalBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
    breadcrumbGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	breadcrumbGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    breadcrumbGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    breadcrumbGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    breadcrumbGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */

	breadcrumbDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    breadcrumbTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    breadcrumbMobileSwitcher: {
        type: 'boolean',
        default: false,
    },
    breadcrumbCustomCSS : {
        type: 'string',
        default: '',
    },
};
export default attributes;
