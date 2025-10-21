const attributes = {
    blockID: {
        type: 'string',
        default: ''
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
	ctaPresetStyle: {
        type: 'string',
        default: 'preset-1',
    },
	infoBoxBg: {
		type: 'string',
		default: '#EBF5FF'
	},
	mediaSwitcher : {
		type: 'string',
		default: 'icon'
	},
    infoMediaUrl: {
        type: 'string',
        default: ''
    },
	mediaSize: {
		type: 'object',
		default: {
			Desktop: '25',
			Tablet: '',
			Mobile: ''
		}
	},
	mediaSizeDesktop: {
		type: 'number',
		default: '20'
	},
	mediaSizeSizeTablet: {
		type: 'number',
		default: ''
	},
	mediaSizeSizeMobile: {
		type: 'number',
		default: ''
	},
	mediaSizeUnitsSave: {
		type: 'string',
		default: 'px'
	},
	mediaSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    mediaBgTypeImage: {
		type: 'string',
		default: ''
	},
    mediaBgWidth: {
		type: 'object',
		default: {
			Desktop: '50',
			Tablet: '',
			Mobile: ''
		}
	},
	mediaBgWidthDesktop: {
		type: 'number',
		default: '20'
	},
	mediaBgWidthTablet: {
		type: 'number',
		default: ''
	},
	mediaBgWidthMobile: {
		type: 'number',
		default: ''
	},
	mediaBgWidthUnitsSave: {
		type: 'string',
		default: 'px'
	},
	mediaBgWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    mediaBgHeight: {
		type: 'object',
		default: {
			Desktop: '50',
			Tablet: '',
			Mobile: ''
		}
	},
	mediaBgHeightDesktop: {
		type: 'number',
		default: '20'
	},
	mediaBgHeightTablet: {
		type: 'number',
		default: ''
	},
	mediaBgHeightMobile: {
		type: 'number',
		default: ''
	},
	mediaBgHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	btnIcon: {
		type: 'string',
		default: 'arrow-left',
	},
	btnIconSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: ''
		}
	},
	btnIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    btnIconColorSwitcher: {
		type: 'string',
        default: 'normal'
	},
    btnIconColor: {
		type: 'string',
        default: '#ffffff'
	},
    btnIconHoverColor: {
		type: 'string',
        default: ''
	},
	btnIconRotate: {
		type: 'object',
		default: {
			Desktop: '145',
			Tablet: '',
			Mobile: ''
		}
	},
	//Button two icon
	btnTwoIcon: {
		type: 'string',
		default: 'arrow-left',
	},
	btnTwoIconSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: ''
		}
	},
	btnTwoIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	btnTwoIconColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	btnTwoIconColor: {
		type: 'string',
		default: '#4361EE'
	},
	btnTwoIconHoverColor: {
		type: 'string',
		default: ''
	},
	btnTwoIconRotate: {
		type: 'object',
		default: {
			Desktop: '145',
			Tablet: '',
			Mobile: ''
		}
	},
    mediaIconColor: {
		type: 'string',
        default: '#ffffff'
	},
    mediaIconHoverColor: {
		type: 'string',
	},
	mediaIconColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
    btnIconPosition: {
		type: 'string',
        default: 'right'
	},
    infoIconPosition: {
		type: 'string',
        default: 'top'
	},
    height: {
        type: 'number',
        default: '50'
    },
    width: {
        type: 'number',
        default: '50'
    },
	icon: {
		type: 'string',
		default: 'face-smile',
	},
    boxBgColor: {
        type: 'string',
        default: '#fff'
    },
	boxBgHoverColor: {
		type: 'string',
	},
	boxBgColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
    mediaBgColor: {
        type: 'string',
        default: '#fff'
    },
	mediaBgHoverColor: {
		type: 'string',
	},
	mediaBgColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
    titleColor: {
        type: 'string',
        default: '#ffffff'
    },
    borderRadius: {
        type: 'number',
        default: '0',
    },
    titleText: {
        type: 'string',
        default: 'Icon Box title',
    },
    wrapperAlignment: {
        type: 'string',
        default: 'center',
    },
	contentAlignment: {
        type: 'string',
        default: 'center',
    },
	descAlignment: {
        type: 'string',
        default: 'center',
    },
	buttonAlignment: {
        type: 'string',
        default: 'center',
    },
	// Title 
    Alignment: {
        type: 'string',
        default: 'center',
    },
    Heading_Text: {
        type : 'string',
        default: 'We are help you to grow up'
    },
    headingTag: {
        type : 'string',
        default: 'h2'
    },
	//Sub Title
	subTitleAlignment: {
        type: 'string',
        default: 'center',
    },
    subTitleText: {
        type : 'string',
        default: '23k User  Our Customer Love us'
    },
    subTitleTag: {
        type : 'string',
        default: 'h4'
    },
    /** Start Heading Style */
	headingGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	headingGlobalTypoSwitcher: {
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
	headingGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	headingGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
    headingFontFamily: {
        type: 'string',
        default: 'Default',
    },
    headingFontSize: {
		type: 'object',
		default: {
			Desktop: '72',
			Tablet: '',
			Mobile: ''
		}
	},
	headingFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    headingFontWeight : {
        type: 'string',
        default: '600'
    },
    headingFontStyle : {
        type: 'string',
        default: ''
    },
    headingTextTransform : {
        type: 'string',
        default: ''
    },
    headingTextDecoration : {
        type: 'string',
        default: ''
    },
    headingLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	headingLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    headingLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	headingLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    headingColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    headingColor : {
        type: 'string',
		default: '#ffffff'
    },
    headingHoverColor: {
        type: 'string',
    },
    Heading_Background_Color: {
        type: 'string',
    },
    Heading_Border: {
        type: 'string',
        default: 'none',
    },
    headingBorderColor: {
        type: 'string',
    },
    headingBorderHoverColor: {
        type: 'string',
    },
    headingBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },

    /** Title Padding **/
    headingPaddingUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    headingDesktopPadding: {
        type: 'object',
        default: {
            top: '0',
            bottom: '24',
            left: '0',
            right: '0',
        },
    },
    headingTabPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    headingMobilePadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    headingPaddingLink : {
        type : 'boolean',
        default: true
    },

	/** Title Margin **/
    headingMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },
    headingDesktopMargin: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    headingTabMargin: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    headingMobileMargin: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    headingMarginLink: {
        type: 'boolean',
        default: true,
    },
    /** Title Border **/
    headingBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },
    headingDesktopBorder: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    headingTabBorder: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    headingMobileBorder: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    headingBorderLink: {
        type: 'boolean',
        default: true,
    },
    /** Title Border Radius **/    
    headingBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },
    headingDesktopBorderRadius: {
        type: 'object',	
        default: {
            topLeft: '',
            topRight: '',
            bottomLeft: '',
            bottomRight: '',
        },
    },
    headingTabBorderRadius: {
        type: 'object',
        default: {
            topLeft: '',
            topRight: '',
            bottomLeft: '',
            bottomRight: '',
        },
    },
    headingMobileBorderRadius: {
        type: 'object',
        default: {
            topLeft: '',
            topRight: '',
            bottomLeft: '',
            bottomRight: '',
        },
    },
    headingBorderRadiusLink: {
        type: 'boolean',
        default: true,
    },    

    //Sub Heading
	SubHeadingGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	SubHeadingGlobalTypoSwitcher: {
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
	SubHeadingGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	SubHeadingGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
    SubHeadingFontFamily: {
        type: 'string',
        default: 'Default',
    },
    SubHeadingFontSize: {
        type: 'object',
		default: {
			Desktop: '24',
			Tablet: '',
			Mobile: ''
		}
    },
    SubHeadingFontSizeUnits: {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    SubHeadingFontWeight : {
        type: 'string',
        default: '400'
    },
    SubHeadingFontStyle : {
        type: 'string',
        default: 'normal'
    },
    SubHeadingTextTransform : {
        type: 'string',
        default: 'none'
    },
    SubHeadingTextDecoration : {
        type: 'string',
        default: 'none'
    },
    SubHeadingLetterSpacing : {
        type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
    },
    SubHeadingLetterSpacingUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    SubHeadingLineHeight : {
        type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
    },
    SubHeadingLineHeightUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    SubHeadingColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    SubHeadingColor : {
        type: 'string',
		default: '#ffffff'
    },
    SubHeadingHoverColor : {
        type: 'string'
    },
    Sub_Heading_Text: {
        type: 'string',
        default: 'Lorem ipsum dolor sit amet consectetur. Ac aliquam mauris nulla non senectus mauris bibendum. Libero risus ultrices feugiat blandit quis justo vitae facilisi.'
    },
    Sub_Heading_Tag: {
        type : 'string',
        default: 'p'
    },
    descriptionSwitcher: {
        type: 'boolean',
        default: true,
    },
	subHeadingSwitcher: {
        type: 'boolean',
        default: true,
    },
	imageSwitcher: {
        type: 'boolean',
        default: true,
    },
    Sub_Heading_Position: {
        type: 'string',
        default: 'bottom',
    },
    /** Description Padding **/
    descPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    descDesktopPadding: {
        type: 'object',
        default: {
            top: '0',
            bottom: '42',
            left: '0',
            right: '0',
        },
    },
    descTabPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    descMobilePadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    descPaddingLink: {
        type: 'boolean',
        default: true
    },

    /** Description Margin **/
    descMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },
    descDesktopMargin: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    descTabMargin: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    descMobileMargin: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    descMarginLink: {
        type: 'boolean',
        default: true,
    },

    //Info Button
    info_Button_Text: {
        type: 'string',
        default: 'Learn More'
    },
    ctaBtnOneSwitcher: {
        type: 'boolean',
        default: true,
    },
    btnOneTargetUrl: {
        type: 'boolean',
    },
    buttonIconSwitcher: {
        type: 'boolean',
        default: true,
    },
    info_Button_Link: {
        type: 'string',
        default: ''
    },
    /** Button One Padding **/
	btnOnePaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    btnOneDesktopPadding: {
        type: 'object',
        default: {
            top: '12',
            bottom: '12',
            left: '20',
            right: '20',
        },
    },
    btnOneTabPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    btnOneMobilePadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    btnOnePaddingLink: {
        type: 'boolean',
        default: true
    },
    // Button Margin
    btnOneMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    btnOneDesktopMargin: {
        type: 'object',
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '10',
        },
    },
    btnOneTabMargin: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    btnOneMobileMargin: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    btnOneActiveMarginDevice: {
        type: 'string',
        default: 'desktop'
    },
    btnOneMarginLink: {
        type: 'boolean',
        default: true
    },
    
	/** Button One Border **/
    btnOneBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },
    btnOneDesktopBorder: {
        type: 'object',
        default: {
			top: '2',
			bottom: '2',
			left: '2',
			right: '2',
		},
    },
    btnOneTabBorder: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    btnOneMobileBorder: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    btnOneBorderLink: {
        type: 'boolean',
        default: true,
    },
    /** Button One Border Radius **/
	infoButtonBorder: {
        type: 'string',
		default: 'solid'
    },
	infoButtonBorderColor: {
        type: 'string',
		default: 'transparent'
    },
    infoButtonHoverBorderColor: {
        type: 'string',
    },
    infoButtonBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    btnOneBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },
    btnOneDesktopBorderRadius: {
        type: 'object',
        default: {
            top: '50',
            left: '50',
            bottom: '50',
            right: '50',
        },
    },
    btnOneTabBorderRadius: {
        type: 'object',
        default: {
            top: '',
            left: '',
            bottom: '',
            right: '',
        },
    },
    btnOneMobileBorderRadius: {
        type: 'object',
        default: {
            top: '',
            left: '',
            bottom: '',
            right: '',
        },
    },
    btnOneBorderRadiusLink: {
        type: 'boolean',
        default: true,
    },

	//Button Two
	buttonTwoGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	buttonTwoGlobalTypoSwitcher: {
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
	buttonTwoGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	buttonTwoGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	buttonTwoFontFamily: {
		type: 'string',
		default: 'Default',
	},
	buttonTwoFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonTwoFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	buttonTwoFontWeight: {
		type: 'string',
		default: '400'
	},
	buttonTwoFontStyle: {
		type: 'string',
		default: 'normal'
	},
	buttonTwoTextTransform: {
		type: 'string',
		default: 'none'
	},
	buttonTwoTextDecoration: {
		type: 'string',
		default: 'none'
	},
	buttonTwoLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonTwoLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	buttonTwoLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonTwoLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	// Button Color
	buttonTwoColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	buttonTwoTextColor: {
		type: 'string',
		default: '#4361EE'
	},
	buttonTwoTextHoverColor: {
		type: 'string'
	},
	buttonTwoBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	buttonTwoBgColor: {
		type: 'string',
		default: ''
	},
	buttonTwoBgHoverColor: {
		type: 'string'
	},	
	btnTwoText: {
		type: 'string',
		default: 'Learn More'
	},
	btnTwoSwitcher: {
		type: 'boolean',
		default: true,
	},
	buttonTwoIconSwitcher: {
		type: 'boolean',
		default: true,
	},
	btnTwoLink: {
		type: 'string',
		default: ''
	},
    btnTwoTargetUrl: {
		type: 'boolean',
	},
    /** Button Two Padding **/
	btnTwoPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	btnTwoDesktopPadding: {
		type: 'object',
		default: {
			top: '12',
			bottom: '12',
			left: '20',
			right: '20',
		},
	},
	btnTwoTabPadding: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	btnTwoMobilePadding: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	btnTwoPaddingLink : {
        type : 'boolean',
        default: true
    },
	//Button Margin
	btnTwoMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	btnTwoDesktopMargin: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	btnTwoTabMargin: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	btnTwoMobileMargin: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	btnTwoActiveMarginDevice: {
		type: 'string',
		default: 'desktop'
	},
	btnTwoMarginLink: {
		type: 'boolean',
		default: true
	},
	//Button Border
	btnTwoBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	btnTwoBorder: {
		type: 'string',
		default: 'solid',
	},
	btnTwoBorderColor: {
		type: 'string',
        default: '#4361EE'
	},
	btnTwoHoverBorderColor: {
		type: 'string',
	},
	btnTwoBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	btnTwoDesktopBorder: {
		type: 'object',
		default: {
			top: '2',
			bottom: '2',
			left: '2',
			right: '2'
		},
	},
	btnTwoTabBorder: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: ''
		},
	},
	btnTwoMobileBorder: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: ''
		},
	},
	btnTwoBorderLink : {
        type : 'boolean',
        default: true
    },
	//Button Border Radius
	btnTwoBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	btnTwoDesktopBorderRadius: {
		type: 'object',
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	btnTwoTabBorderRadius: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	btnTwoMobileBorderRadius: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	btnTwoBorderRadiusLink : {
        type : 'boolean',
        default: true
    },
	//Info box padding
	infoBoxPaddingUnits : {
		type: 'string',
		default: 'px'
	},
	infoBoxDesktopPadding: {
		type: 'object',
		default: {
			top: '40',
			bottom: '40',
			left: '40',
			right: '40',
		},
	},
	infoBoxTabPadding: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	infoBoxMobilePadding: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	// Info box margin
	infoBoxMarginUnits : {
		type: 'string',
		default: 'px'
	},
	infoBoxDesktopMargin: {
		type: 'object',
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	infoBoxTabMargin: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	infoBoxMobileMargin: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	infoBoxActiveMarginDevice: {
		type: 'string',
		default: 'desktop'
	},
	infoBoxMarginLink : {
		type : 'boolean',
		default: true
	},
	// Info Box Border
	infoBoxBorder: {
		type: 'string',
		default: 'none',
	},
	infoBoxBorderColor: {
		type: 'string',
	},
	infoBoxBorderHoverColor: {
		type: 'string',
	},
	infoBoxBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	infoBoxBorderUnits : {
		type: 'string',
		default: 'px'
	},
	infoBoxDesktopBorderWidth: {
		type: 'object',
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	infoBoxTabBorderWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	infoBoxMobileBorderWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	// 	Info Box Border Radius
	infoBoxBorderRadiusUnits : {
		type: 'string',
		default: 'px'
	},
	infoBoxDesktopBorderRadiusWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	infoBoxTabBorderRadiusWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	infoBoxMobileBorderRadiusWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	// Button One Typography
	buttonGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	buttonGlobalTypoSwitcher: {
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
	buttonGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	buttonGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	buttonFontFamily: {
		type: 'string',
		default: 'Default',
	},
	buttonFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonFontSizeUnits: {
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	buttonFontWeight : {
		type: 'string',
		default: '400'
	},
	buttonFontStyle : {
		type: 'string',
		default: 'normal'
	},
	buttonTextTransform : {
		type: 'string',
		default: 'none'
	},
	buttonTextDecoration : {
		type: 'string',
		default: 'none'
	},
	buttonLetterSpacing : {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonLetterSpacingUnits : {
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	buttonLineHeight : {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonLineHeightUnits : {
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	// Button Color
	buttonColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	buttonTextColor : {
		type: 'string',
		default: '#ffffff'
	},
	buttonTextHoverColor : {
		type: 'string'
	},
	buttonBgColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	buttonBgColor : {
		type: 'string',
		default: '#4361EE'
	},
	buttonBgHoverColor : {
		type: 'string'
	},
	globalZIndex : {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
	ctaOverflow: {
        type: 'string',
        default: 'default',
    },
	globalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    globalPaddingDesktop: {
        type: 'object',
        default: {
            top: '120',
            bottom: '120',
            left: '20',
            right: '20',
        },
    },
    globalPaddingTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    globalPaddingMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    globalPaddingLink : {
        type : 'boolean',
        default: true
    },
    globalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    globalMarginDesktop: {
        type: 'object',
        default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
    },
    globalMarginTablet: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    globalMarginMobile: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    globalMarginLink : {
        type : 'boolean',
        default: true
    },
    globalBgColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    globalBgColor : {
        type: 'string',
        default: '#15171C'
    },
    globalBgHoverColor: {
        type: 'string',
    },
    globalBorder: {
        type: 'string',
        default: 'none',
    },
    globalBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    globalBorderColor: {
        type: 'string',
    },
    globalBorderHoverColor: {
        type: 'string',
    },
    globalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    globalBorderDesktop: {
        type: 'object',
        default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
    },
    globalBorderTablet: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    globalBorderMobile: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    globalBorderLink : {
        type : 'boolean',
        default: true
    },
    globalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    globalBorderRadiusDesktop: {
        type: 'object',
        default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
    },
    globalBorderRadiusTablet: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    globalBorderRadiusMobile: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    globalBorderRadiusLink : {
        type : 'boolean',
        default: true
    },
    mediaPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    mediaPaddingDesktop: {
        type: 'object',
        default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
    },
    mediaPaddingTablet: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    mediaPaddingMobile: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    mediaPaddingLink: {
        type: 'boolean',
        default: true
    },
    mediaMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    mediaMarginDesktop: {
        type: 'object',
        default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
    },
    mediaMarginTablet: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    mediaMarginMobile: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    mediaMarginLink: {
        type: 'boolean',
        default: true
    },
    bgType: {
        type: 'string',
        default: 'color',
    },
    mediaBorder: {
        type: 'string',
        default: 'none',
    },
    mediaBorderColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    mediaBorderColor: {
        type: 'string',
    },
    mediaBorderHoverColor: {
        type: 'string',
    },
    mediaBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    mediaBorderDesktop: {
        type: 'object',
        default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
    },
    mediaBorderTablet: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    mediaBorderMobile: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    mediaBorderLink: {
        type: 'boolean',
        default: true
    },
    mediaBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    mediaBorderRadiusDesktop: {
        type: 'object',
        default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
    },
    mediaBorderRadiusTablet: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    mediaBorderRadiusMobile: {
        type: 'object',
        default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
    },
    mediaBorderRadiusLink: {
        type: 'boolean',
        default: true
    },
	globalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    globalBoxShadowValues: {
        type: 'array',
        default: [],
    },
	globalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    globalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    globalHoverBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
	testBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    ctaGlobalBackgroundType: {
        type: 'string',
        default: 'classic'
    },
    ctaGlobalClassicColor: {
        type: 'string',
        default: '#399CFF'
    },
    ctaGlobalGradientColor: {
        type: 'string',
    },
    ctaGlobalCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    ctaGlobalCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    testBackgroundColorStyle: {
        type: 'string',
        default: ''
    },
    ctaGlobalBackgroundImageUrl: {
        type: 'string',
        default: ''
    },
    testBackgroundImageAlt: {
        type: 'string',
        default: ''
    },
    testBackgroundImageID: {
        type: 'string',
        default: ''
    },
    ctaGlobalBackgroundImagePosition: {
        type: 'string',
        default: ''
    },
    ctaGlobalBackgroundImageAttachment: {
        type: 'string',
        default: ''
    },
    ctaGlobalBackgroundImageSize: {
        type: 'string',
        default: ''
    },
    ctaGlobalBackgroundImageRepeat: {
        type: 'string',
        default: ''
    },
    hoverBackgroundType: {
        type: 'string',
        default: 'classic'
    },
    hoverClassicColor: {
        type: 'string',
    },
    hoverGradientColor: {
        type: 'string',
    },
    hoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    hoverCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    hoverBackgroundImageUrl: {
        type: 'string',
        default: ''
    },
    hoverBackgroundImageAlt: {
        type: 'string',
        default: ''
    },
    hoverBackgroundImageID: {
        type: 'string',
        default: ''
    },
    hoverBackgroundImagePosition: {
        type: 'string',
        default: ''
    },
    hoverBackgroundImageAttachment: {
        type: 'string',
        default: ''
    },
    hoverBackgroundImageSize: {
        type: 'string',
        default: ''
    },
    hoverBackgroundImageRepeat: {
        type: 'string',
        default: ''
    },

    globalBackgroundImageUrl: {
        type: 'string',
        default: ''
    },

    globalBackgroundImageAlt: {
        type: 'string',
        default: ''
    },

    globalBackgroundImageID: {
        type: 'string',
        default: ''
    },

    globalBackgroundImagePosition: {
        type: 'string',
        default: ''
    },

    globalBackgroundImageAttachment: {
        type: 'string',
        default: ''
    },

    globalBackgroundImageRepeat: {
        type: 'string',
        default: ''
    },

    globalBackgroundImageSize: {
        type: 'string',
        default: ''
    },
    // Attributes added as per file context
    globalCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    globalCustomGradientInputValue: {
        type: 'string',
    },
    globalGradientColor: {
        type: 'string',
    },
    globalColor: {
        type: 'string',
    },
    globalSwitcher: {
        type: 'string',
        default: 'normal'
    },
    blockStyle: {
        type: 'string',
        default: '',
    },
	FeatureItems: {
		type: 'array',
		default: [
			{
				id: 'item-1',
				Title: 'Feature Item 1',
				teamMemberImageUrl: '',
				teamMemberImageAlt: '',
				teamMemberImageID: '',
				teamMemberImagePosition: '',
				teamMemberImageAttachment: '',
				teamMemberImageRepeat: '',
				teamMemberImageSize: '',
			},
			{
				id: 'item-2',
				Title: 'Feature Item 2',
				teamMemberImageUrl: '',
				teamMemberImageAlt: '',
				teamMemberImageID: '',
				teamMemberImagePosition: '',
				teamMemberImageAttachment: '',
				teamMemberImageRepeat: '',
				teamMemberImageSize: '',
			},
			{
				id: 'item-3',
				Title: 'Feature Item 3',
				teamMemberImageUrl: '',
				teamMemberImageAlt: '',
				teamMemberImageID: '',
				teamMemberImagePosition: '',
				teamMemberImageAttachment: '',
				teamMemberImageRepeat: '',
				teamMemberImageSize: '',
			},
		],
		items: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					default: '',
				},
				Title: {
					type: 'string',
					default: '',
				},
				teamMemberImageUrl: {
					type: 'string',
					default: '',
				},
				teamMemberImageAlt: {
					type: 'string',
					default: '',
				},
				teamMemberImageID: {
					type: 'string',
					default: '',
				},
				teamMemberImagePosition: {
					type: 'string',
					default: '',
				},
				teamMemberImageAttachment: {
					type: 'string',
					default: '',
				},
				teamMemberImageRepeat: {
					type: 'string',
					default: '',
				},
				teamMemberImageSize: {
					type: 'string',
					default: '',
				},
			},
		},
	},
	
	ctaDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    ctaTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    ctaMobileSwitcher: {
        type: 'boolean',
        default: false,
    },

	/** Start Class & ID Setting */
	ctaGlobalWraperID : {
		type: 'string',
		default: ''
	},
	ctaGlobalWraperClass : {
		type: 'string',
		default: ''
	},
	/** End Class & ID Setting */	

	ctaPositionType: {
		type: 'string',
		default: 'default'
	},
	ctaHZOrientationType: {
		type: 'string',
		default: 'left'
	},
	ctaVROrientationType: {
		type: 'string',
		default: 'top'
	},
	ctaHZLeftOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	ctaHZLeftOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	ctaHZRightOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	ctaHZRightOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	ctaVRTopOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	ctaVRTopOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	ctaVRBottomOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	ctaVRBottomOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	ctaCustomCSS : { 
        type: 'string',
        default: '',
    },



	/** Start Dynamic Title Text */
	dynamicTitleEnabled : {
		type: 'boolean',
		default: false
	},
	dynamicTitleSource: {
		type: 'string',
		default: 'current_post'
	},
	dynamicTitlePostId: {
		type: 'number',
		default: 0
	},
	dynamicTitlePostType: {
		type: 'string',
		default: ''
	},
	dynamicTitlePostLabel: {
		type: 'string',
		default: ''
	},
	dynamicTitleField: {
		type: 'string',
		default: 'post_title'
	},
	dynamicTitleFeaturedImageField:{
		type: 'string',
		default: 'title'
	},
	dynamicTitleDateType: {
		type: 'string',
		default: 'published'
	},
	dynamicTitleDateFormat: {
		type: 'string',
		default: 'default'
	},
	dynamicTitleTimeType: {
		type: 'string',
		default: 'published'
	},
	dynamicTitleTimeFormat: {
		type: 'string',
		default: 'default'
	},
	dynamicTitleCommentsZeroText: {
		type: 'string',
		default: 'No Response',
	},
	dynamicTitleCommentsOneText: {
		type: 'string',
		default: 'One Response',
	},
	dynamicTitleCommentsManyText: {
		type: 'string',
		default: '{num} Response',
	},   
	dynamicTitleTermsTaxonomy: {
		type: 'string',
		default: 'category',
	},
	dynamicTitleTermsSeparator: {
		type: 'string',
		default: ', ',
	},
	dynamicTitleEnableLink: {
		type: 'boolean',
		default: false
	},
	dynamicTitleLinkSource: {
		type: 'string',
		default: 'post_permalink',
	},
	/** Start Dynamic Text */
}
export default attributes;
