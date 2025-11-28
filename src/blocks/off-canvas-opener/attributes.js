const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	blockStyle: {
        type: 'string',
        default: '',
    },
	selectedTemplate: {
		type: "string",
		default: ""
	},
	menuType: {
		type: "string",
		default: "icon"
	},
	closeMenuType: {
		type: "string",
		default: "icon"
	},
	menuPosition: {
		type: "string",
		default: "left"
	},
	hamburgerIcon: {
		type: 'string',
		default: 'align-justify',
	},
	hamburgerText: {
		type: 'string',
		default: 'Menu',
	},
	closeMenuIcon: {
		type: 'string',
		default: 'x',
	},
	closeMenuText: {
		type: 'string',
		default: 'Close',
	},
	iconStyle: {
		type: "string",
		default: "hamburger"
	},
	animation: {
		type: "string",
		default: "fade"
	},
	highlightColor: {
		type: 'string',
		default: '',
	},
	hoverHighlightColor: {
		type: 'string',
		default: '',
	},
	offCanvasPanelWidth: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    offCanvasPanelWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	offCanvasPanelHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    offCanvasPanelHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	//off canvas panel
	offCanvasPanelPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    offCanvasPanelDesktopPadding: {
        type: "object", 
        default: {
            top: '12',
            bottom: '12',
            left: '24',
            right: '24',
        },
    },
    offCanvasPanelTabPadding: {
        type: "object", 
        default: {
            top: '12',
            bottom: '12',
            left: '24',
            right: '24',
        },
    },
    offCanvasPanelMobilePadding: {
        type: "object", 
        default: {
            top: '12',
            bottom: '12',
            left: '24',
            right: '24',
        },
    },
    offCanvasPanelPaddingLink: {
        type: "boolean",
        default: true
    },
    offCanvasPanelMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    offCanvasPanelDesktopMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    offCanvasPanelTabMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    offCanvasPanelMobileMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    offCanvasPanelMarginLink: {
        type: "boolean",
        default: true
    },
	offCanvasPanelBorder: {
        type: 'string',
        default: "none",
    },
    offCanvasPanelBorderColorSwitcher: {
        type: "string",
        default: "normal"
    },
    offCanvasPanelBorderColor: {
        type: 'string',
    },
    offCanvasPanelBorderHoverColor: {
        type: 'string',
    },
    offCanvasPanelBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    offCanvasPanelDesktopBorderWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    offCanvasPanelTabBorderWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    offCanvasPanelMobileBorderWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    offCanvasPanelBorderLink: {
        type: "boolean",
        default: true
    },
    offCanvasPanelBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    offCanvasPanelDesktopBorderRadiusWidth: {
        type: "object", 
        default: {
            top: "4",
            bottom: "4",
            left: "4",
            right: "4",
        },
    },
    offCanvasPanelTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    offCanvasPanelMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: "4",
            bottom: "4",
            left: "4",
            right: "4",
        },
    },
    offCanvasPanelBorderRadiusLink: {
        type: "boolean",
        default: true
    },
    offCanvasPanelBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    offCanvasPanelBoxShadowValues: { 
        type: 'array',
        default: [],
    },
    offCanvasPanelBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    offCanvasPanelBoxShadowHoverValues: { 
        type: 'array',
        default: [],
    },
    offCanvasPanelBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
	offCanvasPanelBgColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	offCanvasPanelBgNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	offCanvasPanelBgNormalClassicColor: {
		type: 'string',
		default: '',
	},
	offCanvasPanelBgNormalGradientColor: {
		type: 'string',
		default: null,
	},
	offCanvasPanelBgNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	offCanvasPanelBgNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Bg Normal Image for fb container */
	offCanvasPanelBgNormalBackgroundImageUrl: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    offCanvasPanelBgNormalBackgroundImagePosition: {
        type: 'object',
        default: {
            Desktop: { x: '0.5', y: '0.5' },
            Tablet: { x: '', y: '' },
            Mobile: { x: '', y: '' }
        }
    },
    offCanvasPanelBgNormalBackgroundImageAttachment: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    offCanvasPanelBgNormalBackgroundImageRepeat: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    offCanvasPanelBgNormalBackgroundImageSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },


	/**Bg Hover for fb heading */
	offCanvasPanelBgHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	offCanvasPanelBgHoverClassicColor: {
		type: 'string',
		default: '',
	},
	offCanvasPanelBgHoverGradientColor: {
		type: 'string',
		default: null,
	},
	offCanvasPanelBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	offCanvasPanelBgHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Hover Image for fb heading */
	offCanvasPanelBgHoverBackgroundImageUrl: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	offCanvasPanelBgHoverBackgroundImagePosition: {
		type: 'object',
		default: {
			Desktop: { x: '0.5', y: '0.5' },
			Tablet: { x: '', y: '' },
			Mobile: { x: '', y: '' }
		}
	},
	offCanvasPanelBgHoverBackgroundImageAttachment: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	offCanvasPanelBgHoverBackgroundImageRepeat: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	offCanvasPanelBgHoverBackgroundImageSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	/** Start Icon */
	menuIconTypeSwitcher: {
        type: 'string',
        default: 'opener',
    },
	offCanvasHamburgerIconWidth: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    offCanvasHamburgerIconWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	//Icon bg width
	offCanvasHamburgerIconBgWidth: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    offCanvasHamburgerIconBgWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	offCanvashamburgerIconColorSwitcher: {
        type: "string",
        default: "normal"
    },
    offCanvashamburgerIconColor: {
        type: 'string',
    },
    offCanvashamburgerIconHoverColor: {
        type: 'string',
    },
	offCanvashamburgerIconBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    offCanvashamburgerIconBgColor: {
        type: 'string',
    },
    offCanvashamburgerIconBgHoverColor: {
        type: 'string',
    },
	offCanvashamburgerIconBorder: {
        type: 'string',
        default: "none",
    },
    offCanvashamburgerIconBorderColorSwitcher: {
        type: "string",
        default: "normal"
    },
    offCanvashamburgerIconBorderColor: {
        type: 'string',
    },
    offCanvashamburgerIconBorderHoverColor: {
        type: 'string',
    },
    offCanvashamburgerIconBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    offCanvashamburgerIconDesktopBorderWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    offCanvashamburgerIconTabBorderWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    offCanvashamburgerIconMobileBorderWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    offCanvashamburgerIconBorderLink: {
        type: "boolean",
        default: true
    },
    offCanvashamburgerIconBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    offCanvashamburgerIconDesktopBorderRadiusWidth: {
        type: "object", 
        default: {
            top: "4",
            bottom: "4",
            left: "4",
            right: "4",
        },
    },
    offCanvashamburgerIconTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    offCanvashamburgerIconMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: "4",
            bottom: "4",
            left: "4",
            right: "4",
        },
    },
    offCanvashamburgerIconBorderRadiusLink: {
        type: "boolean",
        default: true
    },
	// Start Mega Menu Padding
    offCanvasHamburgerIconPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },
    offCanvasHamburgerIconDesktopPadding: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    offCanvasHamburgerIconTabletPadding: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    offCanvasHamburgerIconMobilePadding: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    offCanvasHamburgerIconPaddingLink: {
        type: 'boolean',
        default: true,
    },

    // Start Mega Menu Margin
    offCanvasHamburgerIconMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },
    offCanvasHamburgerIconDesktopMargin: {
        type: 'object',
        default: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
        },
    },
    offCanvasHamburgerIconTabletMargin: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    offCanvasHamburgerIconMobileMargin: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    offCanvasHamburgerIconMarginLink: {
        type: 'boolean',
        default: true,
    },
	//Start close icon
	menuIconTypeSwitcher: {
        type: 'string',
        default: 'opener',
    },
	offCanvasCloseIconWidth: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    offCanvasCloseIconWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	//Icon bg width
	offCanvasCloseIconBgWidth: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    offCanvasCloseIconBgWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	offCanvasCloseIconColorSwitcher: {
        type: "string",
        default: "normal"
    },
    offCanvasCloseIconColor: {
        type: 'string',
    },
    offCanvasCloseIconHoverColor: {
        type: 'string',
    },
	offCanvasCloseIconBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    offCanvasCloseIconBgColor: {
        type: 'string',
    },
    offCanvasCloseIconBgHoverColor: {
        type: 'string',
    },
	offCanvasCloseIconBorder: {
        type: 'string',
        default: "none",
    },
    offCanvasCloseIconBorderColorSwitcher: {
        type: "string",
        default: "normal"
    },
    offCanvasCloseIconBorderColor: {
        type: 'string',
    },
    offCanvasCloseIconBorderHoverColor: {
        type: 'string',
    },
    offCanvasCloseIconBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    offCanvasCloseIconDesktopBorderWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    offCanvasCloseIconTabBorderWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    offCanvasCloseIconMobileBorderWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    offCanvasCloseIconBorderLink: {
        type: "boolean",
        default: true
    },
    offCanvasCloseIconBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    offCanvasCloseIconDesktopBorderRadiusWidth: {
        type: "object", 
        default: {
            top: "4",
            bottom: "4",
            left: "4",
            right: "4",
        },
    },
    offCanvasCloseIconTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    offCanvasCloseIconMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: "4",
            bottom: "4",
            left: "4",
            right: "4",
        },
    },
    offCanvasCloseIconBorderRadiusLink: {
        type: "boolean",
        default: true
    },
	// Start Mega Menu Padding
    offCanvasCloseIconPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },
    offCanvasCloseIconDesktopPadding: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    offCanvasCloseIconTabletPadding: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    offCanvasCloseIconMobilePadding: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    offCanvasCloseIconPaddingLink: {
        type: 'boolean',
        default: true,
    },

    // Start Mega Menu Margin
    offCanvasCloseIconMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },
    offCanvasCloseIconDesktopMargin: {
        type: 'object',
        default: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
        },
    },
    offCanvasCloseIconTabletMargin: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    offCanvasCloseIconMobileMargin: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    offCanvasCloseIconMarginLink: {
        type: 'boolean',
        default: true,
    },
    //Start Text
    menuTextTypeSwitcher: {
        type: 'string',
        default: 'opener',
    },
    //Item Typography
	menuOpenerTextGlobalTypographyData: {
        type: "object",
        default: {}
    },
    menuOpenerTextGlobalTypoSwitcher: {
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
    menuOpenerTextGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    menuOpenerTextGlobalTypoOption: {
        type: "object",
        default: {label: 'Default', value: 'default'},
    },
    menuOpenerTextFontFamily: {
        type: "string",
        default: "Default",
    },
    menuOpenerTextFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	menuOpenerTextFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    menuOpenerTextFontWeight: {
        type: "string",
        default: ""
    },
    menuOpenerTextFontStyle: {
        type: "string",
        default: ""
    },
    menuOpenerTextTextTransform: {
        type: "string",
        default: ""
    },
    menuOpenerTextTextDecoration: {
        type: "string",
        default: ""
    },
    menuOpenerTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	menuOpenerTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    menuOpenerTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	menuOpenerTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    //Color
	menuOpenerTextColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    menuOpenerTextColor: {
        type: 'string',
    },
    menuOpenerTextHoverColor: {
        type: 'string',
    },
	menuOpenerTextBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    menuOpenerTextBgColor: {
        type: 'string',
    },
    menuOpenerTextBgHoverColor: {
        type: 'string',
    },
	menuOpenerTextGap: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    menuOpenerTextGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    menuOpenerTextBorder: {
        type: 'string',
        default: 'none',
    },
    menuOpenerTextBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    menuOpenerTextBorderColor: {
        type: 'string',
    },
    menuOpenerTextBorderHoverColor: {
        type: 'string',
    },
    menuOpenerTextBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    menuOpenerTextDesktopBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuOpenerTextTabletBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuOpenerTextMobileBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuOpenerTextBorderLink : {
        type : 'boolean',
        default: true
    },
    menuOpenerTextBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    menuOpenerTextDesktopBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuOpenerTextTabBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuOpenerTextMobileBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuOpenerTextBorderRadiusLink : {
        type : 'boolean',
        default: true
    },
    menuOpenerTextBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    menuOpenerTextBoxShadowValues: {
        type: 'array',
        default: [],
    },
    menuOpenerTextBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    menuOpenerTextBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    menuOpenerTextBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },

    menuOpenerTextPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    menuOpenerTextDesktopPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuOpenerTextTabPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuOpenerTextMobilePadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuOpenerTextPaddingLink : {
        type : 'boolean',
        default: true
    },
    menuOpenerTextMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    menuOpenerTextDesktopMargin: {
        type: 'object',
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    menuOpenerTextTabMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuOpenerTextMobileMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuOpenerTextMarginLink : {
        type : 'boolean',
        default: true
    },
    //Menu close Text
    //Item Typography
	menuCloserTextGlobalTypographyData: {
        type: "object",
        default: {}
    },
    menuCloserTextGlobalTypoSwitcher: {
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
    menuCloserTextGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    menuCloserTextGlobalTypoOption: {
        type: "object",
        default: {label: 'Default', value: 'default'},
    },
    menuCloserTextFontFamily: {
        type: "string",
        default: "Default",
    },
    menuCloserTextFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	menuCloserTextFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    menuCloserTextFontWeight: {
        type: "string",
        default: ""
    },
    menuCloserTextFontStyle: {
        type: "string",
        default: ""
    },
    menuCloserTextTextTransform: {
        type: "string",
        default: ""
    },
    menuCloserTextTextDecoration: {
        type: "string",
        default: ""
    },
    menuCloserTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	menuCloserTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    menuCloserTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	menuCloserTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    //Color
	menuCloserTextColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    menuCloserTextColor: {
        type: 'string',
    },
    menuCloserTextHoverColor: {
        type: 'string',
    },
	menuCloserTextBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    menuCloserTextBgColor: {
        type: 'string',
    },
    menuCloserTextBgHoverColor: {
        type: 'string',
    },
	menuCloserTextGap: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    menuCloserTextGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    menuCloserTextBorder: {
        type: 'string',
        default: 'none',
    },
    menuCloserTextBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    menuCloserTextBorderColor: {
        type: 'string',
    },
    menuCloserTextBorderHoverColor: {
        type: 'string',
    },
    menuCloserTextBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    menuCloserTextDesktopBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuCloserTextTabletBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuCloserTextMobileBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuCloserTextBorderLink : {
        type : 'boolean',
        default: true
    },
    menuCloserTextBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    menuCloserTextDesktopBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuCloserTextTabBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuCloserTextMobileBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuCloserTextBorderRadiusLink : {
        type : 'boolean',
        default: true
    },
    menuCloserTextBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    menuCloserTextBoxShadowValues: {
        type: 'array',
        default: [],
    },
    menuCloserTextBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    menuCloserTextBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    menuCloserTextBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },

    menuCloserTextPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    menuCloserTextDesktopPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuCloserTextTabPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuCloserTextMobilePadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuCloserTextPaddingLink : {
        type : 'boolean',
        default: true
    },
    menuCloserTextMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    menuCloserTextDesktopMargin: {
        type: 'object',
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    menuCloserTextTabMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuCloserTextMobileMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    menuCloserTextMarginLink : {
        type : 'boolean',
        default: true
    },
    // Extra
	offCanvasGlobalZIndex : {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
	offCanvasOverflow: {
        type: 'string',
        default: 'default',
    },
	offCanvasPositionType: {
        type: 'string',
        default: 'default'
    },
    offCanvasHZOrientationType: {
        type: 'string',
        default: 'left'
    },
    offCanvasVROrientationType: {
        type: 'string',
        default: 'top'
    },
    offCanvasHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    offCanvasHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    offCanvasHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    offCanvasHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    offCanvasVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    offCanvasVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    offCanvasVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    offCanvasVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

	offCanvasGlobalWraperID : {
        type: 'string',
        default: ''
    },
    offCanvasGlobalWraperClass : {
        type: 'string',
        default: ''
    },

	/** Start Padding */
	offCanvasGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	offCanvasGlobalPaddingDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	offCanvasGlobalPaddingTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	offCanvasGlobalPaddingMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	offCanvasGlobalPaddingLink : {
		type : 'boolean',
		default: true
	},
	/** End Padding */

	/** Start Margin */
	offCanvasGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	offCanvasGlobalMarginDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	offCanvasGlobalMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	offCanvasGlobalMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	offCanvasGlobalMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Margin */

	/** Start Background Normal for fb offCanvas */
	offCanvasGlobalBgColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	offCanvasGlobalBgNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	offCanvasGlobalBgNormalClassicColor: {
		type: 'string',
		default: '',
	},
	offCanvasGlobalBgNormalGradientColor: {
		type: 'string',
		default: null,
	},
	offCanvasGlobalBgNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	offCanvasGlobalBgNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Bg Normal Image for fb container */
	offCanvasGlobalBgNormalBackgroundImageUrl: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
	offCanvasGlobalBgNormalBackgroundImageAlt: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
	offCanvasGlobalBgNormalBackgroundImageID: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    offCanvasGlobalBgNormalBackgroundImagePosition: {
        type: 'object',
        default: {
            Desktop: { x: '0.5', y: '0.5' },
            Tablet: { x: '', y: '' },
            Mobile: { x: '', y: '' }
        }
    },
    offCanvasGlobalBgNormalBackgroundImageAttachment: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    offCanvasGlobalBgNormalBackgroundImageRepeat: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    offCanvasGlobalBgNormalBackgroundImageSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },


	/**Bg Hover for fb offCanvas */
	offCanvasGlobalBgHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	offCanvasGlobalBgHoverClassicColor: {
		type: 'string',
		default: '',
	},
	offCanvasGlobalBgHoverGradientColor: {
		type: 'string',
		default: null,
	},
	offCanvasGlobalBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	offCanvasGlobalBgHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Hover Image for fb offCanvas */
	offCanvasGlobalBgHoverBackgroundImageUrl: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	offCanvasGlobalBgHoverBackgroundImagePosition: {
		type: 'object',
		default: {
			Desktop: { x: '0.5', y: '0.5' },
			Tablet: { x: '', y: '' },
			Mobile: { x: '', y: '' }
		}
	},
	offCanvasGlobalBgHoverBackgroundImageAttachment: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	offCanvasGlobalBgHoverBackgroundImageRepeat: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	offCanvasGlobalBgHoverBackgroundImageSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	/** End Background for fb offCanvas */

	/** Start Border */
	offCanvasGlobalBorder: {
		type: 'string',
		default: 'none',
	},
	offCanvasGlobalBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	offCanvasGlobalBorderColor: {
		type: 'string',
		default: ''
	},
	offCanvasGlobalBorderHoverColor: {
		type: 'string',
	},
	offCanvasGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	offCanvasGlobalBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	offCanvasGlobalBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	offCanvasGlobalBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	offCanvasGlobalBorderLink : {
		type : 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	offCanvasGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	offCanvasGlobalBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	offCanvasGlobalBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	offCanvasGlobalBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	offCanvasGlobalBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
    offCanvasGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	offCanvasGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    offCanvasGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    offCanvasGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    offCanvasGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */

	offCanvasDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    offCanvasTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    offCanvasMobileSwitcher: {
        type: 'boolean',
        default: false,
    },
	offCanvasCustomCSS : {
        type: 'string',
        default: '',
    },
};

export default attributes;