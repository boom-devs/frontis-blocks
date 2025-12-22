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

    formContainerSwitcher: {
        type: 'boolean',
        default: true,
    },

    fieldLabelSwitcher: {
        type: 'boolean',
        default: true,
    },
    fieldIconSwitcher: {
        type: 'boolean',
        default: false,
    },
    fieldRequiredSwitcher: {
        type: 'boolean',
        default: true,
    },
    fieldRequiredSymbolSwitcher: {
        type: 'boolean',
        default: true,
    },

    fieldColumnGap: {
		type: 'object',
		default: {
			Desktop: '24',
			Tablet: '',
			Mobile: ''
		}
	},
	fieldColumnGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    fieldRowGap: {
		type: 'object',
		default: {
			Desktop: '24',
			Tablet: '',
			Mobile: ''
		}
	},
	fieldRowGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    submitBtnLabel: {
        type: 'string',
        default: 'Submit Now',
    },
    submitBtnIconSwitcher: {
        type: 'boolean',
        default: false,
    },
    submitBtnIcon: {
        type: 'string',
        default: 'arrow-right',
    },
    submitBtnAlignment: {
        type: 'object',
        default: {
            Desktop: 'left',
            Tablet: '',
            Mobile: '',
        },
    },
    submitBtnIconPosition: {
        type: 'object',
        default: {
            Desktop: 'right',
            Tablet: '',
            Mobile: '',
        },
    },

    formTitle: {
        type: 'string',
        default: '',
    },
    formEmailTo: {
        type: 'string',
        default: '',
    },
    formCCEmail: {
        type: 'string',
        default: '',
    },
    formBCCEmail: {
        type: 'string',
        default: '',
    },
    formEmailSubject: {
        type: 'string',
        default: '',
    },
    formSuccessMessage: {
        type: 'string',
        default: '',
    },
    formFailMessage: {
        type: 'string',
        default: '',
    },
    formValidtionMessage: {
        type: 'string',
        default: '',
    },

    formIconBorder: {
        type: 'string',
        default: 'none',
    },
    formIconBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    formIconBorderColor: {
        type: 'string',
    },
    formIconBorderHoverColor: {
        type: 'string',
    },
    formIconBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    formIconBorderDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formIconBorderTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formIconBorderMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formIconBorderLink : {
        type : 'boolean',
        default: true
    },
    formIconBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    formIconBorderRadiusDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formIconBorderRadiusTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formIconBorderRadiusMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formIconBorderRadiusLink : {
        type : 'boolean',
        default: true
    },

    formItemGap: {
		type: 'object',
		default: {
			Desktop: '20',
			Tablet: '',
			Mobile: ''
		}
	},
	formItemGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    
    formIconPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    formIconPaddingDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formIconPaddingTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formIconPaddingMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formIconPaddingLink : {
        type : 'boolean',
        default: true
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
			Desktop: '16',
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
			Desktop: '14',
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
        default: '#b80606',
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
            top: '0',
            bottom: '12',
            left: '0',
            right: '0',
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
            top: '0',
            bottom: '8',
            left: '0',
            right: '0',
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
            top: '14',
            bottom: '14',
            left: '12',
            right: '12',
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
        default: '#f9f9f9'
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
        default: ''
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

    inputFieldIconSize: {
		type: 'object',
		default: {
			Desktop: '24',
			Tablet: '',
			Mobile: ''
		}
	},
	inputFieldIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    inputFieldIconGap: {
		type: 'object',
		default: {
			Desktop: '8',
			Tablet: '',
			Mobile: ''
		}
	},
	inputFieldIconGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    submitBtnGlobalTypographyData: {
        type: 'object',
        default: {}
    },
    submitBtnGlobalTypoSwitcher: {
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
    submitBtnGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    submitBtnGlobalTypoOption: {
        type: 'object',
        default: {submitBtn: 'Default', value: 'default'},
    },
    submitBtnFontFamily: {
        type: 'string',
        default: '',
    },
    submitBtnFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: ''
		}
	},
	submitBtnFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    submitBtnFontWeight: {
        type: 'string',
        default: '',
    },
    submitBtnFontStyle: {
        type: 'string',
        default: '',
    },
    submitBtnTextTransform: {
        type: 'string',
        default: '',
    },
    submitBtnTextDecoration: {
        type: 'string',
        default: '',
    },
    submitBtnLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	submitBtnLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    submitBtnLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	submitBtnLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    submitBtnColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    submitBtnColor: {
        type: 'string',
        default: '#ffffff'
    },
    submitBtnHoverColor: {
        type: 'string',
        default: ''
    },

    submitBtnBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    submitBtnBgType: {
        type: 'string',
        default: 'classic'
    },
    submitBtnBgClassicColor: {
        type: 'string',
        default: '#3f8efc'
    },
    submitBtnBgGradientColor: {
        type: 'string',
    },
    submitBtnBgCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    submitBtnBgCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    submitBtnBgColorStyle: {
        type: 'string',
        default: ''
    },
    submitBtnBgImageUrl: {
        type: 'string',
        default: ''
    },
    submitBtnBgImageAlt: {
        type: 'string',
        default: ''
    },
    submitBtnBgImageID: {
        type: 'string',
        default: ''
    },
    submitBtnBgImagePosition: {
        type: 'string',
        default: ''
    },
    submitBtnBgImageAttachment: {
        type: 'string',
        default: ''
    },
    submitBtnBgImageSize: {
        type: 'string',
        default: ''
    },
    submitBtnBgImageRepeat: {
        type: 'string',
        default: ''
    },
    submitBtnBgHoverType: {
        type: 'string',
        default: 'classic'
    },
    submitBtnBgHoverClassicColor: {
        type: 'string',
        default: ''
    },
    submitBtnBgHoverGradientColor: {
        type: 'string',
    },
    submitBtnBgHoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    submitBtnBgHoverCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    submitBtnBgHoverColorStyle: {
        type: 'string',
        default: ''
    },
    submitBtnBgHoverImageUrl: {
        type: 'string',
        default: ''
    },
    submitBtnBgHoverImageAlt: {
        type: 'string',
        default: ''
    },
    submitBtnBgHoverImageID: {
        type: 'string',
        default: ''
    },
    submitBtnBgHoverImagePosition: {
        type: 'string',
        default: ''
    },
    submitBtnBgHoverImageAttachment: {
        type: 'string',
        default: ''
    },
    submitBtnBgHoverImageSize: {
        type: 'string',
        default: ''
    },
    submitBtnBgHoverImageRepeat: {
        type: 'string',
        default: ''
    },

    submitBtnPaddingUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    submitBtnPaddingDesktop: {
        type: 'object', 
        default: {
            top: '14',
            bottom: '14',
            left: '30',
            right: '30',
        },
    },
    submitBtnPaddingTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    submitBtnPaddingMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    submitBtnPaddingLink : {
        type : 'boolean',
        default: true
    },

    submitBtnMarginUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    submitBtnMarginDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    submitBtnMarginTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    submitBtnMarginMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    submitBtnMarginLink : {
        type : 'boolean',
        default: true
    },

    submitBtnBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    submitBtnBoxShadowValues: {
        type: 'array',
        default: [],
    },
    submitBtnBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    submitBtnBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    submitBtnBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },

    submitBtnBorder: {
        type: 'string',
        default: 'none',
    },
    submitBtnBorderColor: {
        type: 'string',
    },
    submitBtnBorderHoverColor: {
        type: 'string',
    },
    submitBtnBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    
    submitBtnBorderUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    submitBtnBorderDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    submitBtnBorderTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    submitBtnBorderMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    submitBtnBorderLink : {
        type : 'boolean',
        default: true
    },
    
    submitBtnBorderRadiusUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    submitBtnBorderRadiusDesktop: {
        type: 'object', 
        default: {
            top: '4',
            bottom: '4',
            left: '4',
            right: '4',
        },
    },
    submitBtnBorderRadiusTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    submitBtnBorderRadiusMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    submitBtnBorderRadiusLink : {
        type : 'boolean',
        default: true
    },

    submitBtnIconSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: ''
		}
	},
	submitBtnIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    submitBtnIconGap: {
		type: 'object',
		default: {
			Desktop: '8',
			Tablet: '',
			Mobile: ''
		}
	},
	submitBtnIconGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    // Success Message Style Settings
    successMessageGlobalTypographyData: {
        type: 'object',
        default: {}
    },
    successMessageGlobalTypoSwitcher: {
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
    successMessageGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    successMessageGlobalTypoOption: {
        type: 'object',
        default: {successMessage: 'Default', value: 'default'},
    },
    successMessageFontFamily: {
        type: 'string',
        default: '',
    },
    successMessageFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	successMessageFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    successMessageFontWeight: {
        type: 'string',
        default: '',
    },
    successMessageFontStyle: {
        type: 'string',
        default: '',
    },
    successMessageTextTransform: {
        type: 'string',
        default: '',
    },
    successMessageTextDecoration: {
        type: 'string',
        default: '',
    },
    successMessageLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	successMessageLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    successMessageLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	successMessageLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    successMessageColor: {
        type: 'string',
        default: ''
    },

    successMessageBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    successMessageBgType: {
        type: 'string',
        default: 'classic'
    },
    successMessageBgClassicColor: {
        type: 'string',
        default: '#EBF5FF'
    },
    successMessageBgGradientColor: {
        type: 'string',
    },
    successMessageBgCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    successMessageBgCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    successMessageBgColorStyle: {
        type: 'string',
        default: ''
    },
    successMessageBgImageUrl: {
        type: 'string',
        default: ''
    },
    successMessageBgImageAlt: {
        type: 'string',
        default: ''
    },
    successMessageBgImageID: {
        type: 'string',
        default: ''
    },
    successMessageBgImagePosition: {
        type: 'string',
        default: ''
    },
    successMessageBgImageAttachment: {
        type: 'string',
        default: ''
    },
    successMessageBgImageSize: {
        type: 'string',
        default: ''
    },
    successMessageBgImageRepeat: {
        type: 'string',
        default: ''
    },
    successMessageBgHoverType: {
        type: 'string',
        default: 'classic'
    },
    successMessageBgHoverClassicColor: {
        type: 'string',
        default: '#399CFF'
    },
    successMessageBgHoverGradientColor: {
        type: 'string',
    },
    successMessageBgHoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    successMessageBgHoverCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    successMessageBgHoverColorStyle: {
        type: 'string',
        default: ''
    },
    successMessageBgHoverImageUrl: {
        type: 'string',
        default: ''
    },
    successMessageBgHoverImageAlt: {
        type: 'string',
        default: ''
    },
    successMessageBgHoverImageID: {
        type: 'string',
        default: ''
    },
    successMessageBgHoverImagePosition: {
        type: 'string',
        default: ''
    },
    successMessageBgHoverImageAttachment: {
        type: 'string',
        default: ''
    },
    successMessageBgHoverImageSize: {
        type: 'string',
        default: ''
    },
    successMessageBgHoverImageRepeat: {
        type: 'string',
        default: ''
    },

    successMessagePaddingUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    successMessagePaddingDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    successMessagePaddingTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    successMessagePaddingMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    successMessagePaddingLink : {
        type : 'boolean',
        default: true
    },

    successMessageMarginUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    successMessageMarginDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    successMessageMarginTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    successMessageMarginMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    successMessageMarginLink : {
        type : 'boolean',
        default: true
    },

    successMessageBorder: {
        type: 'string',
        default: 'none',
    },
    successMessageBorderColor: {
        type: 'string',
    },
    successMessageBorderHoverColor: {
        type: 'string',
    },
    successMessageBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    
    successMessageBorderUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    successMessageBorderDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    successMessageBorderTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    successMessageBorderMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    successMessageBorderLink : {
        type : 'boolean',
        default: true
    },
    
    successMessageBorderRadiusUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    successMessageBorderRadiusDesktop: {
        type: 'object', 
        default: {
            top: '8',
            bottom: '8',
            left: '8',
            right: '8',
        },
    },
    successMessageBorderRadiusTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    successMessageBorderRadiusMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    successMessageBorderRadiusLink : {
        type : 'boolean',
        default: true
    },

    errorMessageGlobalTypographyData: {
        type: 'object',
        default: {}
    },
    errorMessageGlobalTypoSwitcher: {
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
    errorMessageGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    errorMessageGlobalTypoOption: {
        type: 'object',
        default: {errorMessage: 'Default', value: 'default'},
    },
    errorMessageFontFamily: {
        type: 'string',
        default: '',
    },
    errorMessageFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	errorMessageFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    errorMessageFontWeight: {
        type: 'string',
        default: '',
    },
    errorMessageFontStyle: {
        type: 'string',
        default: '',
    },
    errorMessageTextTransform: {
        type: 'string',
        default: '',
    },
    errorMessageTextDecoration: {
        type: 'string',
        default: '',
    },
    errorMessageLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	errorMessageLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    errorMessageLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	errorMessageLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    errorMessageColor: {
        type: 'string',
        default: ''
    },

    errorMessageBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    errorMessageBgType: {
        type: 'string',
        default: 'classic'
    },
    errorMessageBgClassicColor: {
        type: 'string',
        default: '#EBF5FF'
    },
    errorMessageBgGradientColor: {
        type: 'string',
    },
    errorMessageBgCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    errorMessageBgCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    errorMessageBgColorStyle: {
        type: 'string',
        default: ''
    },
    errorMessageBgImageUrl: {
        type: 'string',
        default: ''
    },
    errorMessageBgImageAlt: {
        type: 'string',
        default: ''
    },
    errorMessageBgImageID: {
        type: 'string',
        default: ''
    },
    errorMessageBgImagePosition: {
        type: 'string',
        default: ''
    },
    errorMessageBgImageAttachment: {
        type: 'string',
        default: ''
    },
    errorMessageBgImageSize: {
        type: 'string',
        default: ''
    },
    errorMessageBgImageRepeat: {
        type: 'string',
        default: ''
    },
    errorMessageBgHoverType: {
        type: 'string',
        default: 'classic'
    },
    errorMessageBgHoverClassicColor: {
        type: 'string',
        default: '#399CFF'
    },
    errorMessageBgHoverGradientColor: {
        type: 'string',
    },
    errorMessageBgHoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    errorMessageBgHoverCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    errorMessageBgHoverColorStyle: {
        type: 'string',
        default: ''
    },
    errorMessageBgHoverImageUrl: {
        type: 'string',
        default: ''
    },
    errorMessageBgHoverImageAlt: {
        type: 'string',
        default: ''
    },
    errorMessageBgHoverImageID: {
        type: 'string',
        default: ''
    },
    errorMessageBgHoverImagePosition: {
        type: 'string',
        default: ''
    },
    errorMessageBgHoverImageAttachment: {
        type: 'string',
        default: ''
    },
    errorMessageBgHoverImageSize: {
        type: 'string',
        default: ''
    },
    errorMessageBgHoverImageRepeat: {
        type: 'string',
        default: ''
    },

    errorMessagePaddingUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    errorMessagePaddingDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    errorMessagePaddingTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    errorMessagePaddingMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    errorMessagePaddingLink : {
        type : 'boolean',
        default: true
    },

    errorMessageMarginUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    errorMessageMarginDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    errorMessageMarginTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    errorMessageMarginMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    errorMessageMarginLink : {
        type : 'boolean',
        default: true
    },

    errorMessageBorder: {
        type: 'string',
        default: 'none',
    },
    errorMessageBorderColor: {
        type: 'string',
    },
    errorMessageBorderHoverColor: {
        type: 'string',
    },
    errorMessageBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    
    errorMessageBorderUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    errorMessageBorderDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    errorMessageBorderTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    errorMessageBorderMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    errorMessageBorderLink : {
        type : 'boolean',
        default: true
    },
    
    errorMessageBorderRadiusUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    errorMessageBorderRadiusDesktop: {
        type: 'object', 
        default: {
            top: '8',
            bottom: '8',
            left: '8',
            right: '8',
        },
    },
    errorMessageBorderRadiusTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    errorMessageBorderRadiusMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    errorMessageBorderRadiusLink : {
        type : 'boolean',
        default: true
    },
    
    inputFieldBorder: {
        type: 'string',
        default: 'solid',
    },
    inputFieldBorderColor: {
        type: 'string',
        default: '#edededfe'
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
            top: '1',
            bottom: '1',
            left: '1',
            right: '1',
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
            top: '4',
            bottom: '4',
            left: '4',
            right: '4',
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
    formCustomCSS : {
        type: 'string',
        default: '',
    },
	formGlobalWraperID : {
		type: 'string',
		default: ''
	},

    formGlobalWraperClass : {
		type: 'string',
		default: ''
	},
    /** End Class & ID Setting */

    formPositionType: {
        type: 'string',
        default: 'default'
    },
    formHZOrientationType: {
        type: 'string',
        default: 'left'
    },
    formVROrientationType: {
        type: 'string',
        default: 'top'
    },
    formHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    formHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    formHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    formHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    formVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    formVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    formVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    formVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    formZIndex : {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },

    formOverflow: {
        type: 'string',
        default: 'default',
    },
    
    formPaddingUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    formPaddingDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formPaddingTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formPaddingMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formPaddingLink : {
        type : 'boolean',
        default: true
    },
    
    formMarginUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    formMarginDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formMarginTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formMarginMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formMarginLink : {
        type : 'boolean',
        default: true
    },
    
    
    formBorder: {
        type: 'string',
        default: 'none',
    },
    formBorderColor: {
        type: 'string',
    },
    formBorderHoverColor: {
        type: 'string',
    },
    formBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    
    formBorderUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    formBorderDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formBorderTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formBorderMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formBorderLink : {
        type : 'boolean',
        default: true
    },
    
    formBorderRadiusUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    formBorderRadiusDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formBorderRadiusTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formBorderRadiusMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    formBorderRadiusLink : {
        type : 'boolean',
        default: true
    },
    formDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    formTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    formMobileSwitcher: {
        type: 'boolean',
        default: false,
    },


    formGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    formGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    formGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    formGlobalHoverBoxShadowValues: {
        type: 'array',
        default: [],
    },
    formGlobalHoverBoxShadowCssValue: {
        type: 'string',
        default: '',
    },

    formBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    formBgType: {
        type: 'string',
        default: 'classic'
    },
    formBgClassicColor: {
        type: 'string',
    },
    formBgGradientColor: {
        type: 'string',
    },
    formBgCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    formBgCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    formBgColorStyle: {
        type: 'string',
        default: ''
    },
    formBgImageUrl: {
        type: 'string',
        default: ''
    },
    formBgImageAlt: {
        type: 'string',
        default: ''
    },
    formBgImageID: {
        type: 'string',
        default: ''
    },
    formBgImagePosition: {
        type: 'string',
        default: ''
    },
    formBgImageAttachment: {
        type: 'string',
        default: ''
    },
    formBgImageSize: {
        type: 'string',
        default: ''
    },
    formBgImageRepeat: {
        type: 'string',
        default: ''
    },
    formBgHoverType: {
        type: 'string',
        default: 'classic'
    },
    formBgHoverClassicColor: {
        type: 'string',
    },
    formBgHoverGradientColor: {
        type: 'string',
    },
    formBgHoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    formBgHoverCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    formBgHoverColorStyle: {
        type: 'string',
        default: ''
    },
    formBgHoverImageUrl: {
        type: 'string',
        default: ''
    },
    formBgHoverImageAlt: {
        type: 'string',
        default: ''
    },
    formBgHoverImageID: {
        type: 'string',
        default: ''
    },
    formBgHoverImagePosition: {
        type: 'string',
        default: ''
    },
    formBgHoverImageAttachment: {
        type: 'string',
        default: ''
    },
    formBgHoverImageSize: {
        type: 'string',
        default: ''
    },
    formBgHoverImageRepeat: {
        type: 'string',
        default: ''
    },

    transitionDuration: {
        type: 'number',
        default: 0.5,
    },
};

export default attributes;
