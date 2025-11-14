const attributes = {
    blockID: {
        type: 'string',
        default: '',
    },
    blockStyle: {
        type: "string",
        default: "",
    },
    highlightColor: {
        type: 'string',
        default: '',
    },
    hoverHighlightColor: {
        type: 'string',
        default: '',
    },
    shareNetworks: {
        type: 'array',
        default: [
            { id: 'facebook', enabled: true, label: 'Facebook' },
            { id: 'twitter', enabled: true, label: 'Twitter' },
            { id: 'linkedin', enabled: true, label: 'LinkedIn' },
            { id: 'whatsapp', enabled: true, label: 'Whatsapp' },
            { id: 'pinterest', enabled: false, label: 'Pinterest' },
            { id: 'reddit', enabled: false, label: 'Reddit' },
        ]
    },
    iconSize: {
        type: 'number',
        default: 20
    },
    displayStyle: {
        type: 'string',
        default: 'icon'
    },
    alignment: {
        type: 'string',
        default: 'left'
    },
    socialIcon: {
		type: 'string',
		default: '',
	},
    iconFontSize: {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '18',
            Mobile: '16'
        }
    },
    iconFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    iconSpacing: {
        type: 'object',
        default: {
            Desktop: '12',
            Tablet: '10',
            Mobile: '10'
        }
    },
    iconSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    iconAlignment: {
        type: "object",
        default: {
            Desktop: "left",
            Tablet: "left",
            Mobile: "left",
        },
    },
    // Label typography
    socialShareGlobalTypographyData: {
        type: 'object',
        default: {}
    },
    socialShareGlobalTypoSwitcher: {
        type: 'object',
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
    socialShareGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    socialShareGlobalTypoOption: {
        type: 'object',
        default: {label: 'Default', value: 'default'},
    },
    socialShareFontFamily: {
        type: 'string',
        default: 'Default',
    },
    socialShareFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    socialShareFontWeight : {
        type: 'string',
        default: ''
    },
    socialShareFontStyle : {
        type: 'string',
        default: ''
    },
    socialShareTextTransform : {
        type: 'string',
        default: ''
    },
    socialShareTextDecoration : {
        type: 'string',
        default: 'none'
    },
    socialShareLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    socialShareLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    socialShareLabelColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    socialShareLabelColor: {
        type: 'string',
    },
    socialShareLabelHoverColor: {
        type: 'string',
    },
    socialShareLabelBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    socialShareLabelBgColor: {
        type: 'string',
    },
    socialShareLabelHoverBgColor: {
        type: 'string',
    },
    
    /** Start Global Setting */
    socialShareCustomCSS : {
        type: 'string',
        default: '',
    },
    socialShareDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    socialShareTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    socialShareMobileSwitcher: {
        type: 'boolean',
        default: false,
    },
	socialShareGlobalZIndex : {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    socialShareOverflow: {
        type: 'string',
        default: 'default',
    },
    socialShareGlobalWraperID : {
        type: 'string',
        default: ''
    },

    socialShareGlobalWraperClass : {
        type: 'string',
        default: ''
    },

	/** Start Padding */
	socialShareGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialShareGlobalPaddingDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareGlobalPaddingTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareGlobalPaddingMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareGlobalPaddingLink : {
		type : 'boolean',
		default: true
	},
	/** End Padding */

	/** Start Margin */
	socialShareGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialShareGlobalMarginDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareGlobalMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareGlobalMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareGlobalMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Margin */

	socialShareGlobalBgColor : {
		type: 'string',
	},
	socialShareGlobalBgHoverColor: {
		type: 'string',
	},

    /** Start Background Normal for fb socialShare */
	socialShareGlobalBgColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	socialShareGlobalBgNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	socialShareGlobalBgNormalClassicColor: {
		type: 'string',
		default: '',
	},
	socialShareGlobalBgNormalGradientColor: {
		type: 'string',
		default: null,
	},
	socialShareGlobalBgNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	socialShareGlobalBgNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Bg Normal Image for fb container */
	socialShareGlobalBgNormalBackgroundImageUrl: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    socialShareGlobalBgNormalBackgroundImagePosition: {
        type: 'object',
        default: {
            Desktop: { x: '0.5', y: '0.5' },
            Tablet: { x: '', y: '' },
            Mobile: { x: '', y: '' }
        }
    },
    socialShareGlobalBgNormalBackgroundImageAttachment: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    socialShareGlobalBgNormalBackgroundImageRepeat: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    socialShareGlobalBgNormalBackgroundImageSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },


	/**Bg Hover for fb socialShare */
	socialShareGlobalBgHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	socialShareGlobalBgHoverClassicColor: {
		type: 'string',
		default: '',
	},
	socialShareGlobalBgHoverGradientColor: {
		type: 'string',
		default: null,
	},
	socialShareGlobalBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	socialShareGlobalBgHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Hover Image for fb socialShare */
	socialShareGlobalBgHoverBackgroundImageUrl: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareGlobalBgHoverBackgroundImagePosition: {
		type: 'object',
		default: {
			Desktop: { x: '0.5', y: '0.5' },
			Tablet: { x: '', y: '' },
			Mobile: { x: '', y: '' }
		}
	},
	socialShareGlobalBgHoverBackgroundImageAttachment: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareGlobalBgHoverBackgroundImageRepeat: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareGlobalBgHoverBackgroundImageSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	/** End Background for fb socialShare */





	/** End Background */

	/** Start Border */
	socialShareGlobalBorder: {
		type: 'string',
		default: 'none',
	},
	socialShareGlobalBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	socialShareGlobalBorderColor: {
		type: 'string',
		default: ''
	},
	socialShareGlobalBorderHoverColor: {
		type: 'string',
	},
	socialShareGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialShareGlobalBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareGlobalBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareGlobalBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareGlobalBorderLink : {
		type : 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	socialShareGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialShareGlobalBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareGlobalBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareGlobalBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareGlobalBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
    socialShareGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	socialShareGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    socialShareGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    socialShareGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    socialShareGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    socialSharePositionType: {
        type: 'string',
        default: 'default'
    },
    socialShareHZOrientationType: {
        type: 'string',
        default: 'left'
    },
    socialShareVROrientationType: {
        type: 'string',
        default: 'top'
    },
    socialShareHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    socialShareHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    socialShareHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    socialShareHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    socialShareVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    socialShareVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    socialShareVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    socialShareVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    /** End Global Style */
};

export default attributes;