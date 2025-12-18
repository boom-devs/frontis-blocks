const attributes = {
    // the following 4 attributes is must required for responsive options and asset generation for frontend
    // responsive control attributes ⬇
    deviceType: {
        type: 'string',
        default: 'Desktop',
    },
    // blockID attribute for making unique className and other uniqueness ⬇
    blockID: {
        type: 'string',
    },
    blockStyle: {
        type: 'string',
        default: '',
    },
    blockStyleTwo: {
        type: 'string',
        default: '',
    },
    blockRoot: {
        type: 'string',
        default: 'frontis_block',
    },

    fieldType: {
        type: 'string',
        default: 'text',
    },
    fieldLabel: {
        type: 'string',
        default: '',
    },
    fieldLabelSwitcher: {
        type: 'boolean',
        default: null,
    },
    fieldIcon: {
        type: 'string',
        default: '',
    },
    fieldIconSwitcher: {
        type: 'boolean',
        default: null,
    },
    fieldPlaceholder: {
        type: 'string',
        default: '',
    },
    fieldRequiredSwitcher: {
        type: 'boolean',
        default: null,
    },
    fieldRequiredSymbolSwitcher: {
        type: 'boolean',
        default: null,
    },
    fieldRequiredText: {
        type: 'string',
        default: '',
    },
    fieldDefaultValue: {
        type: 'string',
        default: '',
    },
    fieldCustomNameAttribute: {
        type: 'string',
        default: '',
    },

    fieldWidth: {
        type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
    },
    fieldWidthUnits: {
        type: 'object',
		default: {
			Desktop: '%',
			Tablet: '',
			Mobile: ''
		}
    },
    fieldMinHeight: {
        type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
    },
    fieldMinHeightUnits: {
        type: 'object',
		default: {
			Desktop: '%',
			Tablet: '',
			Mobile: ''
		}
    },

    inheritedFieldIconSwitcher: {
        type: 'boolean',
    },
    inheritedFieldLabelSwitcher: {
        type: 'boolean',
    },
    inheritedFieldRequiredFieldSwitcher: {
        type: 'boolean',
    },
    inheritedFieldRequiredSymbolSwitcher: {
        type: 'boolean',
    },

    inputFieldMaxWidth: {
		type: 'object',
		default: {
			Desktop: '100',
			Tablet: '',
			Mobile: ''
		}
	},
	inputFieldMaxWidthUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		}
	},
    inputFieldHeight: {
		type: 'object',
		default: {
			Desktop: '36',
			Tablet: '',
			Mobile: ''
		}
	},
	inputFieldHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    labelGlobalTypographyData: {
        type: 'object',
        default: {}
    },
    labelGlobalTypoSwitcher: {
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
    labelGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    labelGlobalTypoOption: {
        type: 'object',
        default: {label: 'Default', value: 'default'},
    },
    labelFontFamily: {
        type: 'string',
        default: '',
    },
    labelFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	labelFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    labelFontWeight: {
        type: 'string',
        default: '',
    },
    labelFontStyle: {
        type: 'string',
        default: '',
    },
    labelTextTransform: {
        type: 'string',
        default: '',
    },
    labelTextDecoration: {
        type: 'string',
        default: '',
    },
    labelLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	labelLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    labelLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	labelLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    inputFieldGlobalTypographyData: {
        type: 'object',
        default: {}
    },
    inputFieldGlobalTypoSwitcher: {
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
    inputFieldGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    inputFieldGlobalTypoOption: {
        type: 'object',
        default: {inputField: 'Default', value: 'default'},
    },
    inputFieldFontFamily: {
        type: 'string',
        default: '',
    },
    inputFieldFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	inputFieldFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    inputFieldFontWeight: {
        type: 'string',
        default: '',
    },
    inputFieldFontStyle: {
        type: 'string',
        default: '',
    },
    inputFieldTextTransform: {
        type: 'string',
        default: '',
    },
    inputFieldTextDecoration: {
        type: 'string',
        default: '',
    },
    inputFieldLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	inputFieldLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    inputFieldLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	inputFieldLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    labelColor: {
        type: 'string',
        default: '#000000',
    },
    labelRequiredColor: {
        type: 'string',
        default: '#FFFFFF',
    },

    inputFieldColor: {
        type: 'string',
        default: '',
    },
    inputFieldPlaceholderColor: {
        type: 'string',
        default: '',
    },
    inputFieldFocusColor: {
        type: 'string',
        default: '',
    },

    labelMarginUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    labelMarginDesktop: {
        type: 'object', 
        default: {
            top: '20',
            bottom: '20',
            left: '20',
            right: '20',
        },
    },
    labelMarginTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelMarginMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelMarginLink : {
        type : 'boolean',
        default: true
    },

    inputFieldMarginUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    inputFieldMarginDesktop: {
        type: 'object', 
        default: {
            top: '20',
            bottom: '20',
            left: '20',
            right: '20',
        },
    },
    inputFieldMarginTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    inputFieldMarginMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    inputFieldMarginLink : {
        type : 'boolean',
        default: true
    },

    inputFieldPaddingUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    inputFieldPaddingDesktop: {
        type: 'object', 
        default: {
            top: '20',
            bottom: '20',
            left: '20',
            right: '20',
        },
    },
    inputFieldPaddingTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    inputFieldPaddingMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    inputFieldPaddingLink : {
        type : 'boolean',
        default: true
    },

    inputFieldBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    inputFieldBgType: {
        type: 'string',
        default: 'classic'
    },
    inputFieldBgClassicColor: {
        type: 'string',
        default: '#EBF5FF'
    },
    inputFieldBgGradientColor: {
        type: 'string',
    },
    inputFieldBgCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    inputFieldBgCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    inputFieldBgColorStyle: {
        type: 'string',
        default: ''
    },
    inputFieldBgImageUrl: {
        type: 'string',
        default: ''
    },
    inputFieldBgImageAlt: {
        type: 'string',
        default: ''
    },
    inputFieldBgImageID: {
        type: 'string',
        default: ''
    },
    inputFieldBgImagePosition: {
        type: 'string',
        default: ''
    },
    inputFieldBgImageAttachment: {
        type: 'string',
        default: ''
    },
    inputFieldBgImageSize: {
        type: 'string',
        default: ''
    },
    inputFieldBgImageRepeat: {
        type: 'string',
        default: ''
    },
    inputFieldBgHoverType: {
        type: 'string',
        default: 'classic'
    },
    inputFieldBgHoverClassicColor: {
        type: 'string',
        default: '#399CFF'
    },
    inputFieldBgHoverGradientColor: {
        type: 'string',
    },
    inputFieldBgHoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    inputFieldBgHoverCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    inputFieldBgHoverColorStyle: {
        type: 'string',
        default: ''
    },
    inputFieldBgHoverImageUrl: {
        type: 'string',
        default: ''
    },
    inputFieldBgHoverImageAlt: {
        type: 'string',
        default: ''
    },
    inputFieldBgHoverImageID: {
        type: 'string',
        default: ''
    },
    inputFieldBgHoverImagePosition: {
        type: 'string',
        default: ''
    },
    inputFieldBgHoverImageAttachment: {
        type: 'string',
        default: ''
    },
    inputFieldBgHoverImageSize: {
        type: 'string',
        default: ''
    },
    inputFieldBgHoverImageRepeat: {
        type: 'string',
        default: ''
    },

    inputFieldBorder: {
        type: 'string',
        default: 'none',
    },
    inputFieldBorderColor: {
        type: 'string',
    },
    inputFieldBorderHoverColor: {
        type: 'string',
    },
    inputFieldBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    
    inputFieldBorderUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    inputFieldBorderDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    inputFieldBorderTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    inputFieldBorderMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    inputFieldBorderLink : {
        type : 'boolean',
        default: true
    },
    
    inputFieldBorderRadiusUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    inputFieldBorderRadiusDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    inputFieldBorderRadiusTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    inputFieldBorderRadiusMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    inputFieldBorderRadiusLink : {
        type : 'boolean',
        default: true
    },
    
    inputFieldBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    inputFieldBoxShadowValues: {
        type: 'array',
        default: [],
    },
    inputFieldBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    inputFieldBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    inputFieldBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },

    /** Start Class & ID Setting */
    fieldCustomCSS : {
        type: 'string',
        default: '',
    },
	fieldGlobalWraperID : {
		type: 'string',
		default: ''
	},

    fieldGlobalWraperClass : {
		type: 'string',
		default: ''
	},
    /** End Class & ID Setting */

    fieldPositionType: {
        type: 'string',
        default: 'default'
    },
    fieldHZOrientationType: {
        type: 'string',
        default: 'left'
    },
    fieldVROrientationType: {
        type: 'string',
        default: 'top'
    },
    fieldHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    fieldHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    fieldHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    fieldHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    fieldVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    fieldVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    fieldVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    fieldVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    fieldZIndex : {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },

    fieldOverflow: {
        type: 'string',
        default: 'default',
    },
    
    fieldPaddingUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    fieldPaddingDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fieldPaddingTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fieldPaddingMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fieldPaddingLink : {
        type : 'boolean',
        default: true
    },
    
    fieldMarginUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    fieldMarginDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fieldMarginTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fieldMarginMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fieldMarginLink : {
        type : 'boolean',
        default: true
    },
    
    
    fieldBorder: {
        type: 'string',
        default: 'none',
    },
    fieldBorderColor: {
        type: 'string',
    },
    fieldBorderHoverColor: {
        type: 'string',
    },
    fieldBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    
    fieldBorderUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    fieldBorderDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fieldBorderTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fieldBorderMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fieldBorderLink : {
        type : 'boolean',
        default: true
    },
    
    fieldBorderRadiusUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    fieldBorderRadiusDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fieldBorderRadiusTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fieldBorderRadiusMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fieldBorderRadiusLink : {
        type : 'boolean',
        default: true
    },
    fieldDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    fieldTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    fieldMobileSwitcher: {
        type: 'boolean',
        default: false,
    },


    fieldGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    fieldGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    fieldGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    fieldGlobalHoverBoxShadowValues: {
        type: 'array',
        default: [],
    },
    fieldGlobalHoverBoxShadowCssValue: {
        type: 'string',
        default: '',
    },

    fieldBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    fieldBgType: {
        type: 'string',
        default: 'classic'
    },
    fieldBgClassicColor: {
        type: 'string',
    },
    fieldBgGradientColor: {
        type: 'string',
    },
    fieldBgCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    fieldBgCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    fieldBgColorStyle: {
        type: 'string',
        default: ''
    },
    fieldBgImageUrl: {
        type: 'string',
        default: ''
    },
    fieldBgImageAlt: {
        type: 'string',
        default: ''
    },
    fieldBgImageID: {
        type: 'string',
        default: ''
    },
    fieldBgImagePosition: {
        type: 'string',
        default: ''
    },
    fieldBgImageAttachment: {
        type: 'string',
        default: ''
    },
    fieldBgImageSize: {
        type: 'string',
        default: ''
    },
    fieldBgImageRepeat: {
        type: 'string',
        default: ''
    },
    fieldBgHoverType: {
        type: 'string',
        default: 'classic'
    },
    fieldBgHoverClassicColor: {
        type: 'string',
    },
    fieldBgHoverGradientColor: {
        type: 'string',
    },
    fieldBgHoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    fieldBgHoverCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    fieldBgHoverColorStyle: {
        type: 'string',
        default: ''
    },
    fieldBgHoverImageUrl: {
        type: 'string',
        default: ''
    },
    fieldBgHoverImageAlt: {
        type: 'string',
        default: ''
    },
    fieldBgHoverImageID: {
        type: 'string',
        default: ''
    },
    fieldBgHoverImagePosition: {
        type: 'string',
        default: ''
    },
    fieldBgHoverImageAttachment: {
        type: 'string',
        default: ''
    },
    fieldBgHoverImageSize: {
        type: 'string',
        default: ''
    },
    fieldBgHoverImageRepeat: {
        type: 'string',
        default: ''
    },
};

export default attributes;
