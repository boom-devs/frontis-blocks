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
	/** Start Icon */
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
	offCanvasCustomCSS : {
        type: 'string',
        default: '',
    },
};

export default attributes;