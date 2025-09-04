const attributes = {
	blockID: {
		type: 'string',
		default: ''
	},
	blockStyle: {
        type: 'string',
        default: '',
    },
	deviceType: {
		type: 'string',
		default: 'Desktop'
	},
	highlightColor: {
		type: 'string',
		default: '',
	},
	hoverHighlightColor: {
		type: 'string',
		default: '',
	},

	teamMemberZIndex : {
        type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
    },
	teamMemberOverflow: {
        type: 'string',
        default: 'default',
    },

    teamMemberPaddingUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    teamMemberDesktopPadding: {
        type: 'object', 
        default: {
            top: '42',
            bottom: '42',
            left: '32',
            right: '32',
        },
    },
    teamMemberTabPadding: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    teamMemberMobilePadding: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    teamMemberPaddingLink : {
        type : 'boolean',
        default: true
    },

    teamMemberMarginUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    teamMemberDesktopMargin: {
        type: 'object', 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    teamMemberTabMargin: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    teamMemberMobileMargin: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    teamMemberMarginLink : {
        type : 'boolean',
        default: true
    },


	teamMemberBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    teamMemberBgType: {
        type: 'string',
        default: 'classic'
    },
    teamMemberBgClassicColor: {
        type: 'string',
        default: '#FFF'
    },
    teamMemberBgGradientColor: {
        type: 'string',
    },
    teamMemberBgCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    teamMemberBgCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    teamMemberBgColorStyle: {
        type: 'string',
        default: ''
    },
    teamMemberBgImageUrl: {
        type: 'string',
        default: ''
    },
    teamMemberBgImageAlt: {
        type: 'string',
        default: ''
    },
    teamMemberBgImageID: {
        type: 'string',
        default: ''
    },
    teamMemberBgImagePosition: {
        type: 'string',
        default: ''
    },
    teamMemberBgImageAttachment: {
        type: 'string',
        default: ''
    },
    teamMemberBgImageSize: {
        type: 'string',
        default: ''
    },
    teamMemberBgImageRepeat: {
        type: 'string',
        default: ''
    },
    teamMemberBgHoverType: {
        type: 'string',
        default: 'classic'
    },
    teamMemberBgHoverClassicColor: {
        type: 'string',
        default: '#EBF5FF'
    },
    teamMemberBgHoverGradientColor: {
        type: 'string',
    },
    teamMemberBgHoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    teamMemberBgHoverCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    teamMemberBgHoverColorStyle: {
        type: 'string',
        default: ''
    },
    teamMemberBgHoverImageUrl: {
        type: 'string',
        default: ''
    },
    teamMemberBgHoverImageAlt: {
        type: 'string',
        default: ''
    },
    teamMemberBgHoverImageID: {
        type: 'string',
        default: ''
    },
    teamMemberBgHoverImagePosition: {
        type: 'string',
        default: ''
    },
    teamMemberBgHoverImageAttachment: {
        type: 'string',
        default: ''
    },
    teamMemberBgHoverImageSize: {
        type: 'string',
        default: ''
    },
    teamMemberBgHoverImageRepeat: {
        type: 'string',
        default: ''
    },


    teamMemberBorder: {
        type: 'string',
        default: 'solid',
    },
    teamMemberBorderColor: {
        type: 'string',
		default: '#E1E3E8'
    },
    teamMemberBorderHoverColor: {
        type: 'string',
		default: '#EBF5FF'
    },
    teamMemberBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },

    teamMemberBorderUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    teamMemberDesktopBorderWidth: {
        type: 'object', 
        default: {
            top: '1',
            bottom: '1',
            left: '1',
            right: '1',
        },
    },
    teamMemberTabBorderWidth: {
        type: 'object', 
		default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    teamMemberMobileBorderWidth: {
        type: 'object', 
		default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    teamMemberBorderLink : {
        type : 'boolean',
        default: true
    },

    teamMemberBorderRadiusUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    teamMemberDesktopBorderRadiusWidth: {
        type: 'object', 
        default: {
            top: '16',
            bottom: '16',
            left: '16',
            right: '16',
        },
    },
    teamMemberTabBorderRadiusWidth: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    teamMemberMobileBorderRadiusWidth: {
        type: 'object', 
		default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    teamMemberBorderRadiusLink : {
        type : 'boolean',
        default: true
    },
    teamMemberDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    teamMemberTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    teamMemberMobileSwitcher: {
        type: 'boolean',
        default: false,
    },

    BoxBorder: {
		type: 'string',
		default: 'none',
	},
	BoxBorderColor: {
		type: 'string',
	},
	BoxBorderHoverColor: {
		type: 'string',
	},
	BoxBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	BoxBorderUnits : {
		type: 'string',
		default: 'px'
	},
	BoxDesktopBorderWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	BoxTabBorderWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	BoxMobileBorderWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	HeadingActiveBorderDevice: {
		type: 'string',
		default: 'Desktop'
	},
	BoxBorderLink : {
		type : 'boolean',
		default: true
	},
	BoxBorderRadiusUnits : {
		type: 'string',
		default: 'px'
	},
	BoxDesktopBorderRadiusWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	BoxTabBorderRadiusWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	BoxMobileBorderRadiusWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	HeadingActiveBorderRadiusDevice: {
		type: 'string',
		default: 'Desktop'
	},
	BoxBorderRadiusLink : {
		type : 'boolean',
		default: true
	},

    teamMemberContentPosition: {
		type: 'string',
		default: 'bottom'
	},

    teamMemberCardAlignment: {
		type: 'string',
		default: 'start'
	},

    teamMemberContentAlignment: {
		type: 'object',
		default: {
			Desktop: 'center',
			Tablet: '',
			Mobile: ''
		}
	},

	teamMemberContentBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	teamMemberContentBgType: {
		type: 'string',
		default: 'classic'
	},
	teamMemberContentBgClassicColor: {
		type: 'string',
		default: ''
	},
	teamMemberContentBgGradientColor: {
		type: 'string',
	},
	teamMemberContentBgCustomGradientSwitcher: {
		type: 'boolean',
		default: false
	},
	teamMemberContentBgCustomGradientInputValue: {
		type: 'string',
		default: ''
	},
	teamMemberContentBgColorStyle: {
		type: 'string',
		default: ''
	},
	teamMemberContentBgImageUrl: {
		type: 'string',
		default: ''
	},
	teamMemberContentBgImageAlt: {
		type: 'string',
		default: ''
	},
	teamMemberContentBgImageID: {
		type: 'string',
		default: ''
	},
	teamMemberContentBgImagePosition: {
		type: 'string',
		default: ''
	},
	teamMemberContentBgImageAttachment: {
		type: 'string',
		default: ''
	},
	teamMemberContentBgImageSize: {
		type: 'string',
		default: ''
	},
	teamMemberContentBgImageRepeat: {
		type: 'string',
		default: ''
	},
	teamMemberContentBgHoverType: {
		type: 'string',
		default: 'classic'
	},
	teamMemberContentBgHoverClassicColor: {
		type: 'string',
		default: ''
	},
	teamMemberContentBgHoverGradientColor: {
		type: 'string',
	},
	teamMemberContentBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false
	},
	teamMemberContentBgHoverCustomGradientInputValue: {
		type: 'string',
		default: ''
	},
	teamMemberContentBgHoverColorStyle: {
		type: 'string',
		default: ''
	},
	teamMemberContentBgHoverImageUrl: {
		type: 'string',
		default: ''
	},
	teamMemberContentBgHoverImageAlt: {
		type: 'string',
		default: ''
	},
	teamMemberContentBgHoverImageID: {
		type: 'string',
		default: ''
	},
	teamMemberContentBgHoverImagePosition: {
		type: 'string',
		default: ''
	},
	teamMemberContentBgHoverImageAttachment: {
		type: 'string',
		default: ''
	},
	teamMemberContentBgHoverImageSize: {
		type: 'string',
		default: ''
	},
	teamMemberContentBgHoverImageRepeat: {
		type: 'string',
		default: ''
	},

	// Padding
	teamMemberContentPaddingUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberContentPaddingDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberContentPaddingTab: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberContentPaddingMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberContentPaddingLink : {
		type : 'boolean',
		default: true
	},

	// margin
	teamMemberContentMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberContentMarginDesktop: {
		type: 'object',
		default: {
			top: '32',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberContentMarginTab: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberContentMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberContentMarginLink : {
		type : 'boolean',
		default: true
	},

	// Border
	teamMemberContentBorder: {
		type: 'string',
		default: 'none',
	},
	teamMemberContentBorderColorSwitcher: {
		type: 'string',
        default: 'normal'
	},
	teamMemberContentBorderColor: {
		type: 'string',
        default: ''
	},
	teamMemberContentBorderHoverColor: {
		type: 'string',
        default: ''
	},

	// Border Type
	teamMemberContentBorderUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberContentBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberContentBorderTab: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberContentBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberContentBorderLink : {
		type : 'boolean',
		default: true
	},

	// Border Radius
	teamMemberContentBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberContentBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '8',
			bottom: '8',
			left: '8',
			right: '8',
		},
	},
	teamMemberContentBorderRadiusTab: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberContentBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberContentBorderRadiusLink : {
		type : 'boolean',
		default: true
	},

    teamMemberDesignation: {
		type: 'string',
		default: 'Junior Developer'
	},
	teamMemberDesignationColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	teamMemberDesignationColor: {
		type: 'string',
		default: ''
	},
	teamMemberDesignationHoverColor: {
		type: 'string',
		default: ''
	},
	// Typography
	teamMemberDesignationGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	teamMemberDesignationGlobalTypoSwitcher: {
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
	teamMemberDesignationGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	teamMemberDesignationGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	teamMemberDesignationFontFamily: {
        type: 'string',
        default: 'Default',
    },
    teamMemberDesignationFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    teamMemberDesignationFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    teamMemberDesignationFontWeight: {
        type: 'string',
        default: '',
    },
    teamMemberDesignationFontStyle: {
        type: 'string',
        default: '',
    },
    teamMemberDesignationTextTransform: {
        type: 'string',
        default: '',
    },
    teamMemberDesignationTextDecoration: {
        type: 'string',
        default: '',
    },
    teamMemberDesignationLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    teamMemberDesignationLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    teamMemberDesignationLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    teamMemberDesignationLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
	teamMemberDesignationLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},


	// Designation margin
	teamMemberDesignationMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberDesignationMarginDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberDesignationMarginTab: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberDesignationMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberDesignationMarginLink : {
		type : 'boolean',
		default: true
	},

	/** team Image */
	teamMemberImageAlignment: {
		type : 'object',
		default: {
			Desktop: 'center',
			Tablet: '',
			Mobile: ''
		}
	},
    teamMemberImageUrl: {
        type: 'string',
        default: ''
    },
    teamMemberImageAlt: {
        type: 'string',
        default: ''
    },
    teamMemberImageID: {
        type: 'string',
        default: ''
    },
    teamMemberImagePosition: {
        type: 'string',
        default: ''
    },
    teamMemberImageAttachment: {
        type: 'string',
        default: ''
    },
    teamMemberImageRepeat: {
        type: 'string',
        default: ''
    },
    teamMemberImageSize: {
        type: 'string',
        default: ''
    },


	teamMemberImageOverlaySwitcher: {
		type: 'boolean',
		default: false
	},
	teamMemberImageBGColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	teamMemberImageBGColor: {
		type: 'string',
		default: '#0000005e'
	},
	teamMemberImageBGHoverColor: {
		type: 'string',
		default: ''
	},
	// teamMemberImageOverlayOpacity: {
	// 	type: 'string',
	// 	default: ''
	// },

	teamMemberImageOverlayOpacity : {
		type: 'object',
		default: {
			Desktop: '0.5',
			Tablet: '',
			Mobile: ''
		}
	},

	// Image Width Size
	teamMemberImageWidthUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberImageWidth: {
		type: 'object',
		default: {
			Desktop: '260',
			Tablet: '',
			Mobile: ''
		}
	},

	teamMemberImageHeightUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberImageHeight: {
		type: 'object',
		default: {
			Desktop: '260',
			Tablet: '',
			Mobile: ''
		}
	},


	// margin
	teamMemberImageMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberImageMarginDesktop: {
		type: 'object',
		default: {
			top: '0',
			bottom: '0',
			left: '20',
			right: '20',
		},
	},
	teamMemberImageMarginTab: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberImageMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberImageMarginLink : {
		type : 'boolean',
		default: true
	},
	// Border
	teamMemberImageBorder: {
		type: 'string',
		default: 'none',
	},
	teamMemberImageBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	teamMemberImageBorderColor: {
		type: 'string',
	},
	teamMemberImageBorderHoverColor: {
		type: 'string',
	},

	// Border Type
	teamMemberImageBorderUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberImageBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberImageBorderTab: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberImageBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberImageBorderLink : {
		type : 'boolean',
		default: true
	},

	// Border Radius
	teamMemberImageBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%'
		}
	},
	teamMemberImageBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	teamMemberImageBorderRadiusTab: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberImageBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberImageBorderRadiusLink: {
		type : 'boolean',
		default: true
	},

	// Badge
	teamMemberBadgeSwitcher: {
		type: 'boolean',
		default: false
	},
	teamMemberBadge: {
		type: 'string',
		default: 'New'
	},
	teamMemberBadgePosition: {
		type: 'string',
		default: 'image'
	},
	teamMemberBadgeAlignment: {
		type: 'string',
		default: 'center center'
	},

	teamMemberBadgeColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	teamMemberBadgeColor: {
		type: 'string',
		default: ''
	},
	teamMemberBadgeHoverColor: {
		type: 'string',
		default: ''
	},

	teamMemberBadgeBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	teamMemberBadgeBgColor: {
		type: 'string',
		default: ''
	},
	teamMemberBadgeBgHoverColor: {
		type: 'string',
		default: ''
	},

	teamMemberBadgeBorder: {
		type: 'string',
		default: 'none'
	},
	teamMemberBadgeBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	teamMemberBadgeBorderColor: {
		type: 'string',
		default: ''
	},
	teamMemberBadgeBorderHoverColor: {
		type: 'string',
		default: ''
	},


	teamMemberBadgeTypographyData: {
		type: 'object',
		default: {}
	},
	teamMemberBadgeTypoSwitcher: {
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
	teamMemberBadgeTypoType: {
		type: 'string',
		default: 'default',
	},	
	teamMemberBadgeTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	teamMemberBadgeFontFamily: {
		type: 'string',
		default: 'Default',
	},
	teamMemberBadgeFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',	
			Mobile: '',
		}
	},
	teamMemberBadgeFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	teamMemberBadgeFontWeight: {
		type: 'string',
		default: '',	
	},
	teamMemberBadgeFontStyle: {
		type: 'string',
		default: '',
	},
	teamMemberBadgeTextTransform: {	
		type: 'string',
		default: '',
	},
	teamMemberBadgeTextDecoration: {
		type: 'string',
		default: '',
	},	
	teamMemberBadgeLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},
	teamMemberBadgeLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	teamMemberBadgeLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},	
	teamMemberBadgeLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	teamMemberBadgeLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},

	// Margin
	teamMemberBadgeMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberBadgeMarginDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberBadgeMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberBadgeMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberBadgeMarginLink: {
		type: 'boolean',
		default: true
	},
	teamMemberBadgePaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},	
	teamMemberBadgePaddingDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberBadgePaddingTablet: {
		type: 'object',
		default: {	
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},	
	teamMemberBadgePaddingMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',	
			left: '',
			right: '',
		},
	},
	teamMemberBadgePaddingLink: {
		type: 'boolean',
		default: true
	},	
	teamMemberBadgeBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberBadgeBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberBadgeBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberBadgeBorderMobile: {	
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},	
	teamMemberBadgeBorderLink: {
		type: 'boolean',
		default: true
	},	
	teamMemberBadgeBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'	
		}
	},
	teamMemberBadgeBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '',	
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberBadgeBorderRadiusTablet: {
		type: 'object',	
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},	
	teamMemberBadgeBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',	
			left: '',
			right: '',
		},
	},	
	teamMemberBadgeBorderRadiusLink: {
		type: 'boolean',
		default: true	
	},

	// Name
	teamMemberName: {
		type: 'string',
		default: 'David John'
	},
	teamMemberNameHeadingTag: {
		type : 'string',
		default: 'h3'
	},


	teamMemberNameColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	teamMemberNameColor : {
		type: 'string',
		default: ''
	},
	teamMemberNameHoverColor: {
		type: 'string',
		default: ''
	},

	// Typography
	teamMemberNameGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	teamMemberNameGlobalTypoSwitcher: {
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
	teamMemberNameGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	teamMemberNameGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	teamMemberNameFontFamily: {
        type: 'string',
        default: 'Default',
    },
    teamMemberNameFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    teamMemberNameFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    teamMemberNameFontWeight: {
        type: 'string',
        default: '',
    },
    teamMemberNameFontStyle: {
        type: 'string',
        default: '',
    },
    teamMemberNameTextTransform: {
        type: 'string',
        default: '',
    },
    teamMemberNameTextDecoration: {
        type: 'string',
        default: '',
    },
    teamMemberNameLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    teamMemberNameLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    teamMemberNameLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    teamMemberNameLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
	teamMemberNameLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},

	// margin
	teamMemberNameMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberNameMarginDesktop: {
		type: 'object',
		default: {
			top: '0',
			bottom: '8',
			left: '0',
			right: '0',
		},
	},
	teamMemberNameMarginTab: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberNameMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberNameMarginLink: {
		type : 'boolean',
		default: true
	},

	teamMemberSocialProfileSwitcher: {
		type: 'boolean',
		default: true,
	},
	teamMemberSocialProfileSeparator: {
		type: 'boolean',
		default: true,
	},
	teamMemberSocialProfileSeparatorPosition: {
		type : 'string',
		default: 'top'
	},
	socialProfileSeparatorAlignment: {
		type : 'object',
		default: {
			Desktop: 'center',
			Tablet: '',
			Mobile: ''
		}
	},
	socialProfileSeparatorWidth: {
		type: 'object',
		default: {
			Desktop: '100',
			Tablet: '',
			Mobile: ''
		}
	},

	socialProfileSeparatorWidthUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%'
		}
	},
	socialProfileSeparatorHeight: {
		type: 'object',
		default: {
			Desktop: '1',
			Tablet: '',
			Mobile: ''
		}
	},
	socialProfileSeparatorHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialProfileSeparatorColorSwitcher: {
		type : 'string',
		default: 'normal'
	},
	socialProfileSeparatorColor: {
		type : 'string',
		default: '#E1E3E8'
	},
	socialProfileSeparatorHoverColor: {
		type : 'string',
		default: ''
	},
	socialProfileSeparatorMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialProfileSeparatorMarginDesktop: {
		type: 'object', 
		default: {
			top: '24',
			bottom: '24',
			left: '0',
			right: '0',
		},
	},
	socialProfileSeparatorMarginTab: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialProfileSeparatorMarginMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialProfileSeparatorMarginLink : {
		type : 'boolean',
		default: true
	},

	teamMemberSocialItems: {
		type: 'array',
		default: [
			{
				id: 'item-1',
				Title: 'Facebook',
				link: '#',
				teamMemberSocialIcon: 'facebook',
			},
			{
				id: 'item-2',
				Title: 'Twitter',
				link: '#',
				teamMemberSocialIcon: 'twitter',
			},
			{
				id: 'item-3',
				Title: 'Instagram',
				link: '#',
				teamMemberSocialIcon: 'instagram',
			},
			{
				id: 'item-4',
				Title: 'Linkedin',
				link: '#',
				teamMemberSocialIcon: 'linkedin',
			},
		]
	},

	teamMemberIconsAlignment: {
		type : 'object',
		default: {
			Desktop: 'center',
			Tablet: '',
			Mobile: ''
		}
	},

	teamMemberIconsSize: {
		type : 'object',
		default: {
			Desktop: '18',
			Tablet: '',
			Mobile: ''
		}
	},
	teamMemberIconsSizeUnits: {
		type : 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberIconsSpacing: {
		type : 'object',
		default: {
			Desktop: '29',
			Tablet: '',
			Mobile: ''
		}
	},
	teamMemberIconsSpacingUnits: {
		type : 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},



	teamMemberIconsColorSwitcher: {
		type : 'string',
		default: 'normal'
	},
	teamMemberIconsColor: {
		type : 'string',
		default: ''
	},
	teamMemberIconsHoverColor: {
		type : 'string',
		default: ''
	},


	teamMemberIconStyleSwitcher: {
		type: 'boolean',
		default: false
	},

	teamMemberIconsBGColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	teamMemberIconsBGColor: {
		type: 'string',
		default: ''
	},
	teamMemberIconsBGHoverColor: {
		type: 'string',
		default: ''
	},
	
	teamMemberIconsBorder: {
		type: 'string',
		default: 'none',
	},
	teamMemberIconsBorderColor: {
		type: 'string',
		default: ''
	},
	teamMemberIconsBorderHoverColor: {
		type: 'string',
		default: ''
	},
	teamMemberIconsBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},

	teamMemberSocialProfileBorder: {
		type: 'string',
		default: 'none',
	},
	teamMemberSocialProfileBorderColor: {
		type: 'string',
		default: ''
	},
	teamMemberSocialProfileBorderHoverColor: {
		type: 'string',
		default: ''
	},
	teamMemberSocialProfileBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	
	
	teamMemberIconsPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberIconsDesktopPadding: {
		type: 'object', 
		default: {
			top: '16',
			bottom: '16',
			left: '16',
			right: '16',
		},
	},
	teamMemberIconsTabPadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberIconsMobilePadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberIconsPaddingLink : {
		type : 'boolean',
		default: true
	},

	teamMemberIconsMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberIconsDesktopMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberIconsTabMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberIconsMobileMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberIconsMarginLink : {
		type : 'boolean',
		default: true
	},
	
	teamMemberIconsBorderUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberIconsDesktopBorderWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberIconsTabBorderWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberIconsMobileBorderWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberIconsBorderLink : {
		type : 'boolean',
		default: true
	},

	teamMemberSocialProfileBorderUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberSocialProfileDesktopBorderWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberSocialProfileTabBorderWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberSocialProfileMobileBorderWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberSocialProfileBorderLink : {
		type : 'boolean',
		default: true
	},
	
	teamMemberIconsBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberIconsDesktopBorderRadiusWidth: {
		type: 'object', 
		default: {
			top: '150',
			bottom: '150',
			left: '150',
			right: '150',
		},
	},
	teamMemberIconsTabBorderRadiusWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberIconsMobileBorderRadiusWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberIconsBorderRadiusLink : {
		type : 'boolean',
		default: true
	},


	teamMemberSocialType: {
		type : 'string',
		default: 'content'
	},
	teamMemberSocialPosition: {
		type : 'string',
		default: 'bottom'
	},
	teamMemberSocialAlignment: {
		type : 'string',
		default: 'center'
	},
	socialIconBtnSwitcher: {
		type : 'boolean',
		default: false
	},
	teamMemberSocialIconAnimationType: {
		type : 'string',
		default: 'default'
	},

	socialIconBtnIcon: {
		type: 'string',
		default: 'plus',
	},
	socialIconBtnIconSize: {
		type: 'object',
		default: {
			Desktop: '20',
			Tablet: '',
			Mobile: ''
		},
	},
	socialIconBtnIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	
	socialIconBtnColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	socialIconBtnColor : {
		type: 'string',
		default: ''
	},
	socialIconBtnHoverColor: {
		type: 'string',
		default: ''
	},
	
	socialIconBtnBGColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	socialIconBtnBGColor: {
		type: 'string',
		default: ''
	},
	socialIconBtnBGHoverColor: {
		type: 'string',
		default: ''
	},
	
	socialIconBtnBorder: {
		type: 'string',
		default: 'none',
	},
	socialIconBtnBorderColor: {
		type: 'string',
		default: ''
	},
	socialIconBtnBorderHoverColor: {
		type: 'string',
		default: ''
	},
	socialIconBtnBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	
	
	socialIconBtnPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialIconBtnDesktopPadding: {
		type: 'object', 
		default: {
			top: '20',
			bottom: '20',
			left: '20',
			right: '20',
		},
	},
	socialIconBtnTabPadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconBtnMobilePadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconBtnPaddingLink : {
		type : 'boolean',
		default: true
	},

	socialIconBtnMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialIconBtnDesktopMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconBtnTabMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconBtnMobileMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconBtnMarginLink : {
		type : 'boolean',
		default: true
	},
	
	socialIconBtnBorderUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialIconBtnDesktopBorderWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconBtnTabBorderWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconBtnMobileBorderWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconBtnBorderLink : {
		type : 'boolean',
		default: true
	},
	
	socialIconBtnBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%'
		}
	},
	socialIconBtnDesktopBorderRadiusWidth: {
		type: 'object', 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	socialIconBtnTabBorderRadiusWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconBtnMobileBorderRadiusWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconBtnBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	

	teamMemberSocialTag: {
		type : 'string',
		default: 'h3'
	},
	teamMemberteamMemberIconshape: {
		type: 'string',
		default: 'circle'
	},

	teamMemberSocialListGapDesktop: {
		type: 'number',
		default: 20
	},
	teamMemberSocialListGapTablet: {
		type: 'number',
	},
	teamMemberSocialListGapMobile: {
		type: 'number',
	},
	teamMemberSocialListGapUnits: {
		type: 'string',
		default: 'px'
	},

	teamMemberSocialIconColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	teamMemberSocialIconColor : {
		type: 'string',
		default: ''
	},
	teamMemberSocialIconHoverColor: {
		type: 'string',
		default: ''
	},

	teamMemberSocialIconBgColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	teamMemberSocialIconBgColor : {
		type: 'string',
		default: ''
	},
	teamMemberSocialIconBgHoverColor: {
		type: 'string',
		default: ''
	},

	teamMemberSocialIconBgSizeDesktop: {
		type: 'number',
		default: 60
	},
	teamMemberSocialIconBgSizeTablet: {
		type: 'number',
	},
	teamMemberSocialIconBgSizeMobile: {
		type: 'number',
	},
	teamMemberSocialIconBgSizeUnits: {
		type: 'string',
		default: 'px'
	},

	teamMemberteamMemberIconspacingDesktop: {
		type: 'number',
		default: 20
	},
	teamMemberteamMemberIconspacingTablet: {
		type: 'number',
	},
	teamMemberteamMemberIconspacingMobile: {
		type: 'number',
	},
	teamMemberteamMemberIconspacingUnits: {
		type: 'string',
		default: 'px'
	},



	teamMemberEmailSwitcher: {
		type: 'boolean',
		default: false,
	},
	teamMemberEmail: {
		type: 'string',
		default: 'test@test.com',
	},
	teamMemberEmailLink: {
		type: 'string',
		default: '',
	},
	teamMemberEmailMediaSwitcher: {
		type: 'boolean',
		default: false,
	},
	teamMemberEmailIconPosition : {
		type: 'string',
		default: 'left',
	},
	teamMemberEmailIconSwitcher: {
		type: 'string',
		default: 'icon',
	},
	teamMemberEmailIcon: {
		type: 'string',
		default: '',
	},
	teamMemberEmailImageUrl: {
		type: 'string',
		default: '',
	},
	teamMemberEmailImageAlt: {
		type: 'string',
		default: '',
	},
	teamMemberEmailImageID: {
		type: 'string',
		default: '',
	},

	teamMemberEmailIconColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	teamMemberEmailIconColor: {
		type: 'string',
		default: '',
	},	
	teamMemberEmailIconHoverColor: {
		type: 'string',
		default: '',
	},
	teamMemberEmailIconSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	teamMemberEmailIconSpacing: {
		type: 'object',
		default: {
			Desktop: '8',
			Tablet: '',
			Mobile: '',
		},
	},
	teamMemberEmailIconSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: '',
		},
	},
	teamMemberEmailIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},

	teamMemberEmailColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	teamMemberEmailColor: {
		type: 'string',
		default: '',
	},
	teamMemberEmailHoverColor: {
		type: 'string',
		default: '',
	},
	
	teamMemberEmailTypographyData: {
		type: 'object',
		default: {},
	},
	teamMemberEmailTypoSwitcher: {
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
	teamMemberEmailTypoType: {
		type: 'string',
		default: 'default',
	},
	teamMemberEmailTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},	
	teamMemberEmailFontFamily: {
		type: 'string',
		default: 'Default',
	},
	teamMemberEmailFontSize: {
		type: 'object',
		default: {
			Desktop: '',	
			Tablet: '',
			Mobile: '',
		},
	},
	teamMemberEmailFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	teamMemberEmailFontWeight: {
		type: 'string',
		default: '',	
	},
	teamMemberEmailFontStyle: {
		type: 'string',
		default: '',
	},	
	teamMemberEmailTextTransform: {
		type: 'string',
		default: '',
	},
	teamMemberEmailTextDecoration: {
		type: 'string',
		default: '',
	},
	teamMemberEmailLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},	
	teamMemberEmailLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	teamMemberEmailLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	teamMemberEmailLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	teamMemberEmailLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},

	teamMemberEmailMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},	
	teamMemberEmailMarginDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberEmailMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberEmailMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},	
	teamMemberEmailMarginLink: {
		type: 'boolean',
		default: true,
	},
	teamMemberEmailPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},	
	teamMemberEmailPaddingDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberEmailPaddingTablet: {
		type: 'object',
		default: {	
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},	
	teamMemberEmailPaddingMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},	
	teamMemberEmailPaddingLink: {
		type: 'boolean',
		default: true,
	},
	

	// Description
	teamMemberDescSwitcher: {
		type: 'boolean',
		default: false,
	},
	teamMemberDesc: {
		type: 'string',
		default: 'Lorem ipsum dolor sit amet consectetur Aliquam mauris bibendum.',
	},
	teamMemberDescColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	teamMemberDescColor : {
		type: 'string',
		default: ''
	},
	teamMemberDescHoverColor: {
		type: 'string',
		default: ''
	},
	// Typography
	teamMemberDescGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	teamMemberDescGlobalTypoSwitcher: {
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
	teamMemberDescGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	teamMemberDescGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	teamMemberDescFontFamily: {
		type: 'string',
		default: 'Default',
	},
	teamMemberDescFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	teamMemberDescFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	teamMemberDescFontWeight: {
		type: 'string',
		default: '',
	},
	teamMemberDescFontStyle: {
		type: 'string',
		default: '',
	},
	teamMemberDescTextTransform: {
		type: 'string',
		default: '',
	},
	teamMemberDescTextDecoration: {
		type: 'string',
		default: '',
	},
	teamMemberDescLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	teamMemberDescLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	teamMemberDescLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	teamMemberDescLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	teamMemberDescLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	
	
	// Desc margin
	teamMemberDescMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberDescMarginDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberDescMarginTab: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberDescMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberDescMarginLink : {
		type : 'boolean',
		default: true
	},


	teamMemberSocialPaddingUnits : {
		type: 'string',
		default: 'px'
	},
	teamMemberSocialDesktopPadding: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberSocialTabPadding: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberSocialMobilePadding: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberSocialPaddingLink : {
		type : 'boolean',
		default: true
	},
	teamMemberSocialMarginUnits : {
		type: 'string',
		default: 'px'
	},
	teamMemberSocialDesktopMargin: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberSocialTabMargin: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberSocialMobileMargin: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberSocialMarginLink : {
		type : 'boolean',
		default: true
	},
	teamMemberSocialBgColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	teamMemberSocialBgColor : {
		type: 'string'
	},
	teamMemberSocialBgHoverColor: {
		type: 'string',
	},


	teamMemberSocialBorder: {
		type: 'string',
		default: 'none',
	},
	teamMemberSocialBorderColor: {
		type: 'string',
	},
	teamMemberSocialBorderHoverColor: {
		type: 'string',
	},
	teamMemberSocialBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	teamMemberSocialBorderUnits : {
		type: 'string',
		default: 'px'
	},
	teamMemberSocialDesktopBorderWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberSocialTabBorderWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberSocialMobileBorderWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberSocialBorderLink : {
		type : 'boolean',
		default: true
	},
	teamMemberSocialBorderRadiusUnits : {
		type: 'string',
		default: 'px'
	},
	teamMemberSocialDesktopBorderRadiusWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberSocialTabBorderRadiusWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberSocialMobileBorderRadiusWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	teamMemberSocialBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	teamMemberSocialDesktopSwitcher: {
		type: 'boolean',
		default: false,
	},
	teamMemberSocialTabletSwitcher: {
		type: 'boolean',
		default: false,
	},
	teamMemberSocialMobileSwitcher: {
		type: 'boolean',
		default: false,
	},

	teamMemberPositionType: {
		type: 'string',
		default: 'default'
	},
	teamMemberHZOrientationType: {
		type: 'string',
		default: 'left'
	},
	teamMemberVROrientationType: {
		type: 'string',
		default: 'top'
	},
	teamMemberHZLeftOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	teamMemberHZLeftOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	teamMemberHZRightOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	teamMemberHZRightOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	teamMemberVRTopOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	teamMemberVRTopOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	teamMemberVRBottomOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	teamMemberVRBottomOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	/** Start Class & ID Setting */
	teamMemberGlobalWraperID : {
		type: 'string',
		default: ''
	},
	teamMemberGlobalWraperClass : {
		type: 'string',
		default: ''
	},
	/** End Class & ID Setting */

	teamMemberCustomCSS : {
        type: 'string',
        default: '',
    },
	teamMemberPresetStyle: {
        type: 'string',
        default: 'preset-0',
    },
};

export default attributes;
