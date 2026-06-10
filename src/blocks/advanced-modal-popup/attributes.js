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
	position: {
		type: "string",
		default: "left"
	},
    toggleImageUrl : {
		type: 'string',
		default: '',
	},
	toggleImageId: {
		type: 'string',
		default: '',
	},
	toggleImageAlt: {
		type: 'string',
		default: ''
	}, 
    /** Start toggle Button */
    toggleButtonAlignment: {
        type: "string",
        default: "left",
    },
    toggleButtonTextSwitcher: {
        type: "boolean",
        default: true,
    },
    toggleButtonText: {
        type: 'string',
        default: 'Click Me',
    },
    toggleButtonUrl: {
        type: 'string',
        default: '',
    },
    toggleButtonTargetUrl: {
        type: 'boolean',
    },
	toggleButtonIconAlign: {
        type: 'string',
        default: 'none',
    },
    toggleButtonIcon: {
		type: 'string',
		default: 'arrow-right',
	},
    modalCloseIcon: {
		type: 'string',
		default: 'xmark',
	},
	toggleButtonIconPosition :{
		type: 'string',
		default: 'right'
	},
	toggleButtonIconSpacing: {
		type: 'object',
		default: {
			Desktop: '10',
			Tablet: '',
			Mobile: '',
		}
	},
	toggleButtonIconSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Button */
	toggleType: {
		type: 'string',
		default: 'button'
	},
	/** Page Load Trigger */
	pageLoadDelay: {
		type: 'number',
		default: 3,
	},
	pageLoadCookieEnable: {
		type: 'boolean',
		default: false,
	},
	pageLoadCookieExpiry: {
		type: 'number',
		default: 1,
	},
	/**Toggle Button*/
    toggleButtonWidth: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    toggleButtonWidthUnits: {
        type: 'object',
        default: {
            Desktop: '%',
            Tablet: '%',
            Mobile: '%',
        }
    },
	toggleButtonGlobalTypographyData: {
        type: "object",
        default: {}
    },
    toggleButtonGlobalTypoSwitcher: {
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
    toggleButtonGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    toggleButtonGlobalTypoOption: {
        type: "object",
        default: { label: 'Default', value: 'default' },
    },
    toggleButtonFontFamily: {
        type: "string",
        default: "Default",
    },
    toggleButtonFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    toggleButtonFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    toggleButtonFontWeight: {
        type: "string",
        default: ""
    },
    toggleButtonFontStyle: {
        type: "string",
        default: ""
    },
    toggleButtonTextTransform: {
        type: "string",
        default: ""
    },
    toggleButtonTextDecoration: {
        type: "string",
        default: "none"
    },
    toggleButtonLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    toggleButtonLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    toggleButtonLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    toggleButtonLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
	toggleButtonColorSwitcher: {
        type: "string",
        default: "normal"
    },
    toggleButtonColor: {
        type: "string",
        default: "#000000"
    },
    toggleButtonHoverColor: {
        type: 'string',
    },

    /** Icon Styles */
    toggleButtonIconSize: {
        type: 'object',
        default: {
            Desktop: '16',
            Tablet: '16',
            Mobile: '16'
        }
    },
    toggleButtonIconSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    toggleButtonIconColorSwitcher: {
        type: "string",
        default: "normal"
    },
    toggleButtonIconColor: {
        type: "string",
        default: "#000000"
    },
    toggleButtonIconHoverColor: {
        type: 'string',
        default: ""
    },

    /** Close Icon Styles */
    modalCloseIconColorSwitcher: {
        type: "string",
        default: "normal"
    },
    modalCloseIconColor: {
        type: "string",
        default: "#000000"
    },
    modalCloseIconHoverColor: {
        type: 'string',
        default: ""
    },

    toggleButtonIconGapSize: {
        type: 'object',
        default: {
            Desktop: '10',
            Tablet: '10',
            Mobile: '10'
        }
    },
    toggleButtonIconGapUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    toggleButtonIconRotateSwitcher: {
        type: 'string',
        default: 'normal',
    },
    toggleButtonIconRotate: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        }
    },
    toggleButtonIconRotateHover: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        }
    },

    /** Start Background */
    toggleButtonBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    toggleButtonNormalBackgroundType: {
        type: "string",
        default: "classic",
    },
    toggleButtonBgColor: {
        type: "string",
        default: "#399CFF",
    },
    toggleButtonNormalGradientColor: {
        type: "string",
        default: null,
    },
    toggleButtonNormalCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    toggleButtonNormalCustomGradientInputValue: {
        type: "string",
        default: "",
    },

    toggleButtonHoverBackgroundType: {
        type: "string",
        default: "classic",
    },
    toggleButtonBgHoverColor: {
        type: "string",
        default: "",
    },
    toggleButtonHoverGradientColor: {
        type: "string",
        default: null,
    },
    toggleButtonHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    toggleButtonHoverCustomGradientInputValue: {
        type: "string",
        default: "",
    },
    /** End Background */

    /** Toggle Button Padding */
    toggleButtonPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    toggleButtonDesktopPadding: {
        type: "object",
        default: {
            top: '12',
            bottom: '12',
            left: '24',
            right: '24',
        },
    },
    toggleButtonTabPadding: {
        type: "object",
        default: {
            top: '12',
            bottom: '12',
            left: '24',
            right: '24',
        },
    },
    toggleButtonMobilePadding: {
        type: "object",
        default: {
            top: '12',
            bottom: '12',
            left: '24',
            right: '24',
        },
    },
    toggleButtonPaddingLink: {
        type: "boolean",
        default: true
    },

    toggleButtonMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    toggleButtonDesktopMargin: {
        type: "object",
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    toggleButtonTabMargin: {
        type: "object",
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    toggleButtonMobileMargin: {
        type: "object",
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    toggleButtonMarginLink: {
        type: "boolean",
        default: true
    },

    toggleButtonBorder: {
        type: 'string',
        default: "none",
    },
    toggleButtonBorderColorSwitcher: {
        type: "string",
        default: "normal"
    },
    toggleButtonBorderColor: {
        type: 'string',
    },
    toggleButtonBorderHoverColor: {
        type: 'string',
    },
    toggleButtonBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    toggleButtonDesktopBorderWidth: {
        type: "object",
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    toggleButtonTabBorderWidth: {
        type: "object",
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    toggleButtonMobileBorderWidth: {
        type: "object",
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    toggleButtonBorderLink: {
        type: "boolean",
        default: true
    },
    toggleButtonBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    toggleButtonDesktopBorderRadiusWidth: {
        type: "object",
        default: {
            top: "4",
            bottom: "4",
            left: "4",
            right: "4",
        },
    },
    toggleButtonTabBorderRadiusWidth: {
        type: "object",
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    toggleButtonMobileBorderRadiusWidth: {
        type: "object",
        default: {
            top: "4",
            bottom: "4",
            left: "4",
            right: "4",
        },
    },
    toggleButtonBorderRadiusLink: {
        type: "boolean",
        default: true
    },

    /** Image Size */
	toggleImageSize: {
		type: 'object',
		default: {
			Desktop: '100',
			Tablet: '100',
			Mobile: '100'
		}
	},
	toggleImageHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	toggleImageSizeUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		}
	},
	toggleImageHeightUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		}
	},
    
	contentType: {
		type: 'string',
		default: 'pattern'
	},

	modalPopupPanelWidth: {
        type: 'object',
        default: {
            Desktop: '600',
            Tablet: '',
            Mobile: ''
        }
    },
    modalPopupPanelWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	modalPopupPanelHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    modalPopupPanelHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/**Close Icon */
	modalCloseIconWidth: {
        type: 'object',
        default: {
            Desktop: '16',
            Tablet: '16',
            Mobile: '16'
        }
    },
    modalCloseIconWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	modalCloseIconHeight: {
        type: 'object',
        default: {
            Desktop: '16',
            Tablet: '16',
            Mobile: '16'
        }
    },
    modalCloseIconHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	modalCloseIconPositionTop: {
        type: 'object',
        default: {
            Desktop: '-54',
            Tablet: '',
            Mobile: ''
        }
    },
    modalCloseIconPositionTopUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	modalCloseIconPositionRight: {
        type: 'object',
        default: {
            Desktop: '-54',
            Tablet: '',
            Mobile: ''
        }
    },
    modalCloseIconPositionRightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	//off canvas panel
	modalPopupPanelPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    modalPopupPanelDesktopPadding: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    modalPopupPanelTabPadding: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    modalPopupPanelMobilePadding: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    modalPopupPanelPaddingLink: {
        type: "boolean",
        default: true
    },
    modalPopupPanelMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    modalPopupPanelDesktopMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    modalPopupPanelTabMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    modalPopupPanelMobileMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    modalPopupPanelMarginLink: {
        type: "boolean",
        default: true
    },
	modalPopupPanelBorder: {
        type: 'string',
        default: "none",
    },
    modalPopupPanelBorderColorSwitcher: {
        type: "string",
        default: "normal"
    },
    modalPopupPanelBorderColor: {
        type: 'string',
    },
    modalPopupPanelBorderHoverColor: {
        type: 'string',
    },
    modalPopupPanelBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    modalPopupPanelDesktopBorderWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    modalPopupPanelTabBorderWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    modalPopupPanelMobileBorderWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    modalPopupPanelBorderLink: {
        type: "boolean",
        default: true
    },
    modalPopupPanelBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    modalPopupPanelDesktopBorderRadiusWidth: {
        type: "object", 
        default: {
            top: "4",
            bottom: "4",
            left: "4",
            right: "4",
        },
    },
    modalPopupPanelTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    modalPopupPanelMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: "4",
            bottom: "4",
            left: "4",
            right: "4",
        },
    },
    modalPopupPanelBorderRadiusLink: {
        type: "boolean",
        default: true
    },
    modalPopupPanelBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    modalPopupPanelBoxShadowValues: { 
        type: 'array',
        default: [],
    },
    modalPopupPanelBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    modalPopupPanelBoxShadowHoverValues: { 
        type: 'array',
        default: [],
    },
    modalPopupPanelBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
	modalPopupPanelBgColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	modalPopupPanelBgNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	modalPopupPanelBgNormalClassicColor: {
		type: 'string',
		default: '#ffffff',
	},
	modalPopupPanelBgNormalGradientColor: {
		type: 'string',
		default: null,
	},
	modalPopupPanelBgNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	modalPopupPanelBgNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Bg Normal Image for fb container */
	modalPopupPanelBgNormalBackgroundImageUrl: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    modalPopupPanelBgNormalBackgroundImagePosition: {
        type: 'object',
        default: {
            Desktop: { x: '0.5', y: '0.5' },
            Tablet: { x: '', y: '' },
            Mobile: { x: '', y: '' }
        }
    },
    modalPopupPanelBgNormalBackgroundImageAttachment: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    modalPopupPanelBgNormalBackgroundImageRepeat: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    modalPopupPanelBgNormalBackgroundImageSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },


	/**Bg Hover for fb heading */
	modalPopupPanelBgHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	modalPopupPanelBgHoverClassicColor: {
		type: 'string',
		default: '',
	},
	modalPopupPanelBgHoverGradientColor: {
		type: 'string',
		default: null,
	},
	modalPopupPanelBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	modalPopupPanelBgHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Hover Image for fb heading */
	modalPopupPanelBgHoverBackgroundImageUrl: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	modalPopupPanelBgHoverBackgroundImagePosition: {
		type: 'object',
		default: {
			Desktop: { x: '0.5', y: '0.5' },
			Tablet: { x: '', y: '' },
			Mobile: { x: '', y: '' }
		}
	},
	modalPopupPanelBgHoverBackgroundImageAttachment: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	modalPopupPanelBgHoverBackgroundImageRepeat: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	modalPopupPanelBgHoverBackgroundImageSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},  
	
    //Overlay
    modalPopupOverlaySwitcher: {
        type: 'boolean',
        default: true
    },
    modalPopupOverlayBackgroundColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    modalPopupOverlayBackgroundColor: {
        type: 'string'
    },
    modalPopupOverlayBackgroundHoverColor: {
        type: 'string',
    },
    modalPopupOverlayBackgroundGradientColor: {
        type: 'string',
        default: null
    },
    modalPopupOverlayBackgroundHoverGradientColor: {
        type: 'string',
        default: null
    },
    modalPopupOverlayBackgroundCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    modalPopupOverlayBackgroundCustomGradientColor: {
        type: 'string',
        default: ''
    },
    modalPopupOverlayBackgroundHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    modalPopupOverlayBackgroundHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },
   
    modalPopupOverlayBgColorType: {
        type: 'string',
        default: 'classic',
    },
    modalPopupOverlayBgHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    modalPopupOverlayColorTypeSwitcher: {
        type: 'string',
        default: 'normal',
    },
    modalPopupOverlayColorType: {
        type: 'string',
        default: 'classic',
    },
    modalPopupOverlayHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    modalPopupOverlayGradientColor: {
        type: 'string',
        default: null
    },
    modalPopupOverlayHoverGradientColor: {
        type: 'string',
        default: null
    },
    modalPopupOverlayCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    modalPopupOverlayCustomGradientColor: {
        type: 'string',
        default: ''
    },
    modalPopupOverlayHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    modalPopupOverlayHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },
    modalPopupOverlayOpacity: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    modalPopupOverlayOpacityUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	}, 
    // Extra
	modalPopupGlobalZIndex : {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
	modalPopupOverflow: {
        type: 'string',
        default: 'default',
    },
	modalPopupPositionType: {
        type: 'string',
        default: 'default'
    },
    modalPopupHZOrientationType: {
        type: 'string',
        default: 'left'
    },
    modalPopupVROrientationType: {
        type: 'string',
        default: 'top'
    },
    modalPopupHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    modalPopupHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    modalPopupHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    modalPopupHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    modalPopupVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    modalPopupVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    modalPopupVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    modalPopupVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

	modalPopupGlobalWraperID : {
        type: 'string',
        default: ''
    },
    modalPopupGlobalWraperClass : {
        type: 'string',
        default: ''
    },

	/** Start Padding */
	modalPopupGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	modalPopupGlobalPaddingDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	modalPopupGlobalPaddingTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	modalPopupGlobalPaddingMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	modalPopupGlobalPaddingLink : {
		type : 'boolean',
		default: true
	},
	/** End Padding */

	/** Start Margin */
	modalPopupGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	modalPopupGlobalMarginDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	modalPopupGlobalMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	modalPopupGlobalMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	modalPopupGlobalMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Margin */

	/** Start Background Normal for fb modalPopup */
	modalPopupGlobalBgColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	modalPopupGlobalBgNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	modalPopupGlobalBgNormalClassicColor: {
		type: 'string',
		default: '',
	},
	modalPopupGlobalBgNormalGradientColor: {
		type: 'string',
		default: null,
	},
	modalPopupGlobalBgNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	modalPopupGlobalBgNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Bg Normal Image for fb container */
	modalPopupGlobalBgNormalBackgroundImageUrl: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
	modalPopupGlobalBgNormalBackgroundImageAlt: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
	modalPopupGlobalBgNormalBackgroundImageID: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    modalPopupGlobalBgNormalBackgroundImagePosition: {
        type: 'object',
        default: {
            Desktop: { x: '0.5', y: '0.5' },
            Tablet: { x: '', y: '' },
            Mobile: { x: '', y: '' }
        }
    },
    modalPopupGlobalBgNormalBackgroundImageAttachment: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    modalPopupGlobalBgNormalBackgroundImageRepeat: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    modalPopupGlobalBgNormalBackgroundImageSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },


	/**Bg Hover for fb modalPopup */
	modalPopupGlobalBgHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	modalPopupGlobalBgHoverClassicColor: {
		type: 'string',
		default: '',
	},
	modalPopupGlobalBgHoverGradientColor: {
		type: 'string',
		default: null,
	},
	modalPopupGlobalBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	modalPopupGlobalBgHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Hover Image for fb modalPopup */
	modalPopupGlobalBgHoverBackgroundImageUrl: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	modalPopupGlobalBgHoverBackgroundImagePosition: {
		type: 'object',
		default: {
			Desktop: { x: '0.5', y: '0.5' },
			Tablet: { x: '', y: '' },
			Mobile: { x: '', y: '' }
		}
	},
	modalPopupGlobalBgHoverBackgroundImageAttachment: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	modalPopupGlobalBgHoverBackgroundImageRepeat: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	modalPopupGlobalBgHoverBackgroundImageSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	/** End Background for fb modalPopup */

	/** Start Border */
	modalPopupGlobalBorder: {
		type: 'string',
		default: 'none',
	},
	modalPopupGlobalBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	modalPopupGlobalBorderColor: {
		type: 'string',
		default: ''
	},
	modalPopupGlobalBorderHoverColor: {
		type: 'string',
	},
	modalPopupGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	modalPopupGlobalBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	modalPopupGlobalBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	modalPopupGlobalBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	modalPopupGlobalBorderLink : {
		type : 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	modalPopupGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	modalPopupGlobalBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	modalPopupGlobalBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	modalPopupGlobalBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	modalPopupGlobalBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
    modalPopupGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	modalPopupGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    modalPopupGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    modalPopupGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    modalPopupGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */

	modalPopupDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    modalPopupTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    modalPopupMobileSwitcher: {
        type: 'boolean',
        default: false,
    },
	modalPopupCustomCSS : {
        type: 'string',
        default: '',
    },
};

export default attributes;