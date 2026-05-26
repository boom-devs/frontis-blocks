const attributes = {
	blockID: {
        type: 'string',
        default: ''
    },
    deviceType: {
        type: 'string',
        default: 'Desktop'
    },
	blockStyle: {
        type: 'string',
        default: '',
    },
	stackCardsPresetStyle: {
        type: 'string',
        default: 'stack-top',
    },
	stackCardsDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    stackCardsTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    stackCardsMobileSwitcher: {
        type: 'boolean',
        default: false,
    },
	stackCardsCustomCSS : {
        type: 'string',
        default: '',
    },
	stackCardsGlobalWraperID : {
		type: 'string',
		default: ''
	},
	stackCardsGlobalWraperClass : {
		type: 'string',
		default: ''
	},

	stackCardsOffsetTop: {
		type: 'object',
		default: {
			Desktop: '100',
			Tablet: '80',
			Mobile: '60',
		}
	},
	stackCardsOffsetTopUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	stackCardsItemOffsetTop: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},

	stackCardsItemOffsetTopSwitcher: {
		type: 'boolean',
		default: false
	},
	stackCardsItemScale: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},

	stackCardsCardItemGap: {
		type: 'object',
		default: {
			Desktop: '20',
			Tablet: '15',
			Mobile: '10',
		}
	},
	stackCardsCardItemGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	stackCardsPresetFourCardWidth: {
		type: 'object',
		default: {
			Desktop: '620',
			Tablet: '520',
			Mobile: '320',
		}
	},
	stackCardsPresetFourCardWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	stackCardsPresetFourOutDistance: {
		type: 'object',
		default: {
			Desktop: '100',
			Tablet: '80',
			Mobile: '60',
		}
	},
	stackCardsPresetFourMinScale: {
		type: 'object',
		default: {
			Desktop: '0.7',
			Tablet: '0.7',
			Mobile: '0.7',
		}
	},
	stackCardsPresetFourScaleStep: {
		type: 'object',
		default: {
			Desktop: '0.02',
			Tablet: '0.02',
			Mobile: '0.02',
		}
	},
	stackCardsPresetFourScaleYStep: {
		type: 'object',
		default: {
			Desktop: '0.10',
			Tablet: '0.10',
			Mobile: '0.10',
		}
	},
	stackCardsPresetFourOpacityStep: {
		type: 'object',
		default: {
			Desktop: '0.02',
			Tablet: '0.02',
			Mobile: '0.02',
		}
	},
	stackCardsPresetFourVisibleLayers: {
		type: 'object',
		default: {
			Desktop: '3',
			Tablet: '3',
			Mobile: '3',
		}
	},
	stackCardsPresetFourAutoPlayDelay: {
		type: 'object',
		default: {
			Desktop: '2500',
			Tablet: '2500',
			Mobile: '2500',
		}
	},
	stackCardsPresetFourAnimationSpeed: {
		type: 'object',
		default: {
			Desktop: '0.45',
			Tablet: '0.45',
			Mobile: '0.45',
		}
	},
	stackCardsPresetFourActiveBorder: {
		type: 'boolean',
		default: false,
	},
	stackCardsPresetFourActiveBorderWidth: {
		type: 'object',
		default: {
			Desktop: '3',
			Tablet: '3',
			Mobile: '2',
		}
	},
	stackCardsPresetFourActiveBorderWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	stackCardsPresetFourActiveBorderColor: {
		type: 'string',
		default: '#000000',
	},
	stackCardsPresetFourShowNavigation: {
		type: 'boolean',
		default: false,
	},
	stackCardsPresetFourButtonVerticalAlign: {
		type: 'string',
		default: 'center',
	},
	stackCardsPresetFourButtonVerticalOffset: {
		type: 'object',
		default: {
			Desktop: '50',
			Tablet: '50',
			Mobile: '50',
		}
	},
	stackCardsPresetFourButtonVerticalOffsetUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		}
	},
	stackCardsPresetFourButtonSideOffset: {
		type: 'object',
		default: {
			Desktop: '0',
			Tablet: '0',
			Mobile: '0',
		}
	},
	stackCardsPresetFourButtonSideOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	previousButtonText: {
		type: 'string',
		default: 'Previous',
	},
	nextButtonText: {
		type: 'string',
		default: 'Next',
	},
	previousButtonIconAlign: {
		type: 'string',
		default: 'none',
	},
	nextButtonIconAlign: {
		type: 'string',
		default: 'none',
	},
	previousButtonIcon: {
		type: 'string',
		default: 'angle-left',
	},
	nextButtonIcon: {
		type: 'string',
		default: 'angle-right',
	},
	previousButtonIconPosition: {
		type: 'string',
		default: 'left',
	},
	nextButtonIconPosition: {
		type: 'string',
		default: 'right',
	},
	stackCardsPresetFourAutoPlay: {
		type: 'boolean',
		default: true,
	},
	stackCardsPresetFourKeyboardNavigation: {
		type: 'boolean',
		default: true,
	},
	stackCardsPresetFourCardClickToActive: {
		type: 'boolean',
		default: true,
	},
	stackCardsPresetFourShowAllLayers: {
		type: 'boolean',
		default: false,
	},
	stackCardsPresetTwoLeftOffsetStep: {
		type: 'object',
		default: {
			Desktop: '24',
			Tablet: '24',
			Mobile: '18',
		},
	},
	stackCardsPresetTwoCardWidth: {
		type: 'object',
		default: {
			Desktop: '620',
			Tablet: '520',
			Mobile: '320',
		},
	},
	stackCardsPresetTwoCardWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	stackCardsPresetTwoOutDistance: {
		type: 'object',
		default: {
			Desktop: '110',
			Tablet: '90',
			Mobile: '70',
		},
	},
	stackCardsPresetTwoMinScale: {
		type: 'object',
		default: {
			Desktop: '0.7',
			Tablet: '0.7',
			Mobile: '0.7',
		},
	},
	stackCardsPresetTwoScaleStep: {
		type: 'object',
		default: {
			Desktop: '0.035',
			Tablet: '0.03',
			Mobile: '0.025',
		},
	},
	stackCardsPresetTwoScaleYStep: {
		type: 'object',
		default: {
			Desktop: '0.02',
			Tablet: '0.02',
			Mobile: '0.015',
		},
	},
	stackCardsPresetTwoOpacityStep: {
		type: 'object',
		default: {
			Desktop: '0.12',
			Tablet: '0.12',
			Mobile: '0.1',
		},
	},
	stackCardsPresetTwoVisibleLayers: {
		type: 'object',
		default: {
			Desktop: '3',
			Tablet: '3',
			Mobile: '3',
		},
	},
	stackCardsPresetTwoAutoPlay: {
		type: 'boolean',
		default: true,
	},
	stackCardsPresetTwoAutoPlayDelay: {
		type: 'object',
		default: {
			Desktop: '2500',
			Tablet: '2500',
			Mobile: '2500',
		},
	},
	stackCardsPresetTwoAnimationSpeed: {
		type: 'object',
		default: {
			Desktop: '0.45',
			Tablet: '0.45',
			Mobile: '0.45',
		},
	},
	stackCardsPresetTwoKeyboardNavigation: {
		type: 'boolean',
		default: false,
	},
	stackCardsPresetTwoCardClickToActive: {
		type: 'boolean',
		default: true,
	},
	stackCardsPresetTwoShowAllLayers: {
		type: 'boolean',
		default: false,
	},
	stackCardsPresetThreeFrameHeight: {
		type: 'object',
		default: {
			Desktop: '400',
			Tablet: '400',
			Mobile: '400',
		},
	},
	stackCardsPresetThreeFrameHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	stackCardsPresetThreeFrameWidth: {
		type: 'object',
		default: {
			Desktop: '400',
			Tablet: '400',
			Mobile: '400',
		},
	},
	stackCardsPresetThreeFrameWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	stackCardsPresetThreeItemWidth: {
		type: 'object',
		default: {
			Desktop: '300',
			Tablet: '300',
			Mobile: '300',
		},
	},
	stackCardsPresetThreeItemWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	stackCardsPresetThreeOffsetStep: {
		type: 'object',
		default: {
			Desktop: '24',
			Tablet: '24',
			Mobile: '20',
		},
	},
	stackCardsPresetThreeVisibleLayers: {
		type: 'object',
		default: {
			Desktop: '3',
			Tablet: '3',
			Mobile: '3',
		},
	},
	stackCardsPresetThreeAutoPlay: {
		type: 'boolean',
		default: true,
	},
	stackCardsPresetThreeAutoPlayDelay: {
		type: 'object',
		default: {
			Desktop: '2500',
			Tablet: '2500',
			Mobile: '2500',
		},
	},
	stackCardsPresetThreeKeyboardNavigation: {
		type: 'boolean',
		default: true,
	},
	stackCardsPresetThreeCardClickToActive: {
		type: 'boolean',
		default: true,
	},
	stackCardsPresetThreeShowAllLayers: {
		type: 'boolean',
		default: false,
	},
	stackCardsPresetThreeAnimationSpeed: {
		type: 'object',
		default: {
			Desktop: '0.45',
			Tablet: '0.45',
			Mobile: '0.45',
		},
	},

	/** Start Global Setting */
	stackCardsGlobalZIndex : {
        type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
    },
    stackCardsOverflow: {
        type: 'string',
        default: 'default',
    },
	
	/** Start Padding */
	stackCardsGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	stackCardsGlobalPaddingDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalPaddingTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalPaddingMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalPaddingLink : {
		type : 'boolean',
		default: true
	},
	/** End Padding */

	/** Start Margin */
	stackCardsGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	stackCardsGlobalMarginDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalMarginTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalMarginMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Margin */


    /** Start Background */
	stackCardsGlobalBgColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	stackCardsGlobalBgNormalBackgroundType: {  
		type: 'string',
		default: 'classic',
	},
	stackCardsGlobalBgNormalClassicColor: {
		type: 'string',
		default: '',
	},
	stackCardsGlobalBgNormalGradientColor: {
		type: 'string',
		default: null,
	},
	stackCardsGlobalBgNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	stackCardsGlobalBgNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	stackCardsGlobalBgHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	stackCardsGlobalBgHoverClassicColor: {
		type: 'string',
		default: '',
	},
	stackCardsGlobalBgHoverGradientColor: {
		type: 'string',
		default: null,
	},
	stackCardsGlobalBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	stackCardsGlobalBgHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** End Background */

	/** Start Border */
	stackCardsGlobalBorder: {
		type: 'string',
		default: 'none',
	},
	stackCardsGlobalBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	stackCardsGlobalBorderColor: {
		type: 'string',
		default: ''
	},
	stackCardsGlobalBorderHoverColor: {
		type: 'string',
	},
	stackCardsGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	stackCardsGlobalBorderDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalBorderTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalBorderMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalBorderLink : {
		type : 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	stackCardsGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	stackCardsGlobalBorderRadiusDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalBorderRadiusTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalBorderRadiusMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
    stackCardsGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	stackCardsGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    stackCardsGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    stackCardsGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    stackCardsGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */
    
    stackCardsGlobalDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    stackCardsGlobalTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    stackCardsGlobalMobileSwitcher: {
        type: 'boolean',
        default: false,
    },

    /** Start Global Setting */
    stackCardsGlobalCustomCSS : {
        type: 'string',
        default: '',
    },

    stackCardsPositionType: {
        type: 'string',
        default: 'default'
    },
    stackCardsHZOrientationType: {
        type: 'string',
        default: 'left'
    },
    stackCardsVROrientationType: {
        type: 'string',
        default: 'top'
    },
    stackCardsHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    stackCardsHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    stackCardsHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    stackCardsHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    stackCardsVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    stackCardsVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    stackCardsVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    stackCardsVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

	/** Navigation button */
	stackCardsNavigationButtonGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	stackCardsNavigationButtonGlobalTypoSwitcher: {
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
	stackCardsNavigationButtonGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	stackCardsNavigationButtonGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	stackCardsNavigationButtonFontFamily: {
		type: 'string',
		default: 'Default',
	},
	stackCardsNavigationButtonFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	stackCardsNavigationButtonFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	stackCardsNavigationButtonFontWeight: {
		type: 'string',
		default: ''
	},
	stackCardsNavigationButtonFontStyle: {
		type: 'string',
		default: ''
	},
	stackCardsNavigationButtonTextTransform: {
		type: 'string',
		default: ''
	},
	stackCardsNavigationButtonTextDecoration: {
		type: 'string',
		default: ''
	},
	stackCardsNavigationButtonLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	stackCardsNavigationButtonLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	stackCardsNavigationButtonLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	stackCardsNavigationButtonLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	stackCardsNavigationButtonColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	stackCardsNavigationButtonColor: {
		type: 'string',
		default: '#fff',
	},
	stackCardsNavigationButtonHoverColor: {
		type: 'string',
	},

	stackCardsNavigationButtonBackgroundColorSwitcher : {  
		type: 'string',
		default: 'normal'
	},
	stackCardsNavigationButtonNormalBackgroundType: {   
		type: 'string',
		default: 'classic',
	},
	stackCardsNavigationButtonNormalClassicColor: {
		type: 'string',
		default: '#15171C',
	},
	stackCardsNavigationButtonNormalGradientColor: {
		type: 'string',
		default: null,
	},
	stackCardsNavigationButtonNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	stackCardsNavigationButtonNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	stackCardsNavigationButtonHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	stackCardsNavigationButtonHoverClassicColor: {
		type: 'string',
		default: '',
	},
	stackCardsNavigationButtonHoverGradientColor: {
		type: 'string',
		default: null,
	},
	stackCardsNavigationButtonHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	stackCardsNavigationButtonHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	stackCardsNavigationButtonPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	stackCardsNavigationButtonDesktopPadding: {
		type: 'object', 
		default: {
			top: '20',
			bottom: '20',
			left: '20',
			right: '20',
		},
	},
	stackCardsNavigationButtonTabPadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsNavigationButtonMobilePadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsNavigationButtonPaddingLink: {
		type: 'boolean',
		default: true
	},

	stackCardsNavigationButtonBorder: {
		type: 'string',
		default: 'none',
	},
	stackCardsNavigationButtonBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	stackCardsNavigationButtonBorderColor: {
		type: 'string',
	},
	stackCardsNavigationButtonBorderHoverColor: {
		type: 'string',
	},
	stackCardsNavigationButtonBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	stackCardsNavigationButtonDesktopBorderWidth: {
		type: 'object', 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	stackCardsNavigationButtonTabBorderWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsNavigationButtonMobileBorderWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsNavigationButtonBorderLink: {
		type: 'boolean',
		default: true
	},
	stackCardsNavigationButtonBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	stackCardsNavigationButtonDesktopBorderRadiusWidth: {
		type: 'object', 
		default: {
			top: '5',
			bottom: '5',
			left: '5',
			right: '5',
		},
	},
	stackCardsNavigationButtonTabBorderRadiusWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsNavigationButtonMobileBorderRadiusWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsNavigationButtonBorderRadiusLink: {
		type: 'boolean',
		default: true
	},

	stackCardsNavigationButtonIconColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	stackCardsNavigationButtonIconColor: {
		type: 'string',
		default: '#FFFFFF'
	},
	stackCardsNavigationButtonIconHoverColor: {
		type: 'string',
		default: ''
	},
	stackCardsNavigationButtonIconSize: {
		type: 'object',
		default: {
			Desktop: '20',
			Tablet: '',
			Mobile: ''
		}
	},
	stackCardsNavigationButtonIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	stackCardsNavigationButtonIconSpacing: {
		type: 'object',
		default: {
			Desktop: '10',
			Tablet: '',
			Mobile: '',
		}
	},
	stackCardsNavigationButtonIconSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Button */
	/** End stackCardsNavigation Button Icon */
};
export default attributes;