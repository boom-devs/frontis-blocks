const attributes = {
	blockID: {
		type: 'string',
		default: ''
	},
	deviceType: {
		type: 'string',
		default: 'Desktop'
	},
	advancedImagePresetStyle: {
        type: 'string',
        default: 'preset-1',
    },
	imageStyle: {
		type: 'string',
		default: ''
	},
	highlightColor: {
		type: 'string',
		default: '',
	},
	hoverHighlightColor: {
		type: 'string',
		default: '',
	},
	/** Image URL and ID and alt */
	advancedImageUrl : {
		type: 'string',
		default: '',
	},
	advancedImageId: {
		type: 'string',
		default: '',
	},
	advancedImageAlt: {
		type: 'string',
		default: 'Image'
	},
	advancedImageDefaultWidth: {
		type: 'number',
		default: 0,
	},
	advancedImageDefaultHeight: {
		type: 'number',
		default: 0,
	},
	advancedImageSrcSet: {
		type: 'string',
		default: '',
	},
	/** Image Size */
	maskImageUrl : {
		type: 'string',
		default: '',
	},
	maskImageSize : {
		type: 'string',
		default: 'cover',
	},
	maskImagePosition : {
		type: 'string',
		default: 'center',
	},
	maskImageRepeat : {
		type: 'string',
		default: 'no-repeat',
	},
	/** Image Size */
	mediaSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	mediaHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	mediaSizeUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		}
	},
	mediaHeightUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		}
	},
	imageSize: {
		type: 'string',
	},
	imageFit: {
		type: 'string',
		default: 'cover',
	},
	imageHover: {
		type: 'string',
	},
	imageCaption: {
		type: 'string',
	},
	/** Image Border **/
	imageBorder: {
		type: 'string',
		default: 'none',
	},
	imageBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	imageBorderColor: {
		type: 'string',
	},
	imageBorderHoverColor: {
		type: 'string',
	},
	imageBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	imageBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	imageBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	imageBorderLink: {
		type: 'boolean',
		default: true
	},
	imageBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	imageBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	imageBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	imageBorderRadiusLink: {
		type: 'boolean',
		default: true
	},
	/** Image Box Shadow **/
	imageBoxShadowValues: {
        type: 'array',
        default: [],
    },
    imageBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
	captionPosition: {
		type: 'string',
	},
	captionAlignment: {
		type: 'string',
		default: 'left',
	},
	selectedImgIndex: {
		type: 'number',
	},
	showOverlay: {
		type: 'boolean',
		default: false,
	},
	displayCaption: {
		type: 'boolean',
		default: false,
	},
	displayTitle: {
		type: 'boolean',
		default: false,
	},
	titleText: {
		type: 'string',
		default: 'Fly in the sky'
	},
	titleTag: {
		type : 'string',
		default: 'h2'
	},
	titlePosition: {
		type: 'string',
		default: 'center'
	},
	titleHoverEffects: {
		type: 'string',
		default: 'tilt'
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
        default: 'inherit',
    },
    headingFontSize: {
		type: 'object',
		default: {
			Desktop: '48',
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
        default: ''
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

	HeadingColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	HeadingColor : {
		type: 'string',
		default: '#ffffff'
	},
	HeadingHoverColor: {
		type: 'string',
	},
	HeadingBackgroundColor: {
		type: 'string',
	},
	HeadingBorder: {
		type: 'string',
		default: 'none',
	},
	HeadingBorderColor: {
		type: 'string',
	},
	HeadingBorderHoverColor: {
		type: 'string',
	},
	HeadingBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	HeadingBorderUnits : {
		type: 'string',
		default: 'px'
	},
	HeadingDesktopBorderWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	HeadingTabBorderWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	HeadingMobileBorderWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	HeadingBorderLink : {
		type : 'boolean',
		default: true
	},
	HeadingBorderRadiusUnits : {
		type: 'string',
		default: 'px'
	},
	HeadingDesktopBorderRadiusWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	HeadingTabBorderRadiusWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	HeadingMobileBorderRadiusWidth: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	HeadingBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	HeadingPaddingUnits : {
		type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
	},
	HeadingDesktopPadding: {
		type: 'object',
		default: {
			top: '20',
			bottom: '20',
			left: '20',
			right: '20',
		},
	},
	HeadingTabPadding: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	HeadingMobilePadding: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	HeadingPaddingLink : {
		type : 'boolean',
		default: true
	},
	HeadingMarginUnits : {
		type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
	},
	HeadingDesktopMargin: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	HeadingTabMargin: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	HeadingMobileMargin: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	HeadingMarginLink : {
		type : 'boolean',
		default: true
	},
	autoHeightSwitch: {
		type: 'boolean',
		default: false,
	},
	autoFitSwitch: {
		type: 'boolean',
		default: false,
	},
	linkSwitch: {
		type: 'boolean',
		default: false,
	},
	linkUrl: {
		type: 'string',
		default: '',
	},
	linkTargetUrl: {
		type: 'boolean',
	},
	captionColor: {
		type: 'string',
		default: 'var(--eb-global-primary-color)',
	},
	captionBGColor: {
		type: 'string',
		default: 'var(--eb-global-background-color)',
	},
	horizontalAlign: {
		type: 'string',
		default: 'center',
	},
	verticalAlign: {
		type: 'string',
		default: 'bottom',
	},
	verticalAlignCap2: {
		type: 'string',
		default: 'bottom',
	},
	hoverEffect: {
		type: 'string',
		default: 'no-effect',
	},
	stylePreset: {
		type: 'string',
		default: 'rounded',
	},
	complexStyle: {
		type: 'boolean',
		default: false,
	},
	captionStyle: {
		type: 'string',
		default: 'caption-style-1',
	},
	autoFit: {
		type: 'boolean',
		default: true,
	},
	fitStyles: {
		type: 'string',
		default: 'cover',
	},
	enableLink: {
		type: 'boolean',
		default: false,
	},
	openInNewTab: {
		type: 'boolean',
		default: false,
	},
	autoHeight: {
		type: 'boolean',
		default: true,
	},
	borderType: {
		type: 'string',
		default: 'normal'
	},
	borderStyle: {
		type: 'string',
		default: 'none',
	},
	normalBorderColor: {
		type: 'string'
	},
	normalBorderRadUnit: {
		type: 'string',
		default: 'px'
	},
	normalBorderRad: {
		type: 'object',
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	normalBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	boxGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    boxGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },

	/** Global Background Control **/
	testBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    testBackgroundType: {
        type: 'string',
        default: 'classic'
    },
    testClassicColor: {
        type: 'string',
    },
    testGradientColor: {
        type: 'string',
    },
    testCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    testCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    testBackgroundColorStyle: {
        type: 'string',
        default: ''
    },
    testBackgroundImageUrl: {
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
    testBackgroundImagePosition: {
        type: 'string',
        default: ''
    },
    testBackgroundImageAttachment: {
        type: 'string',
        default: ''
    },
    testBackgroundImageSize: {
        type: 'string',
        default: ''
    },
    testBackgroundImageRepeat: {
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
    hoverBackgroundColorStyle: {
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

	/** Image Overlay **/
	overlayBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	overlayBackgroundType: {
		type: 'string',
		default: 'classic'
	},
	overlayClassicColor: {
		type: 'string',
	},
	overlayGradientColor: {
		type: 'string',
	},
	overlayCustomGradientSwitcher: {
		type: 'boolean',
		default: false
	},
	overlayCustomGradientInputValue: {
		type: 'string',
		default: ''
	},
	overlayBackgroundImageUrl: {
		type: 'string',
		default: ''
	},
	overlayBackgroundImagePosition: {
		type: 'string',
		default: ''
	},
	overlayBackgroundImageAttachment: {
		type: 'string',
		default: ''
	},
	overlayBackgroundImageSize: {
		type: 'string',
		default: ''
	},
	overlayBackgroundImageRepeat: {
		type: 'string',
		default: ''
	},
	/** Hover **/
	overlayHoverBackgroundType: {
		type: 'string',
		default: 'classic'
	},
	overlayHoverClassicColor: {
		type: 'string',
	},
	overlayHoverGradientColor: {
		type: 'string',
	},
	overlayHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false
	},
	overlayHoverCustomGradientInputValue: {
		type: 'string',
		default: ''
	},
	overlayHoverBackgroundColorStyle: {
		type: 'string',
		default: ''
	},
	overlayHoverBackgroundImageUrl: {
		type: 'string',
		default: ''
	},
	overlayHoverBackgroundImageAlt: {
		type: 'string',
		default: ''
	},
	overlayHoverBackgroundImageID: {
		type: 'string',
		default: ''
	},
	overlayHoverBackgroundImagePosition: {
		type: 'string',
		default: ''
	},
	overlayHoverBackgroundImageAttachment: {
		type: 'string',
		default: ''
	},
	overlayHoverBackgroundImageSize: {
		type: 'string',
		default: ''
	},
	overlayHoverBackgroundImageRepeat: {
		type: 'string',
		default: ''
	},

	/** Overlay opacity **/
	overlayOpacity: {
        type: 'number',
    },
    overlayOpacityUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
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
            top: '',
            bottom: '',
            left: '',
            right: '',
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
            top: '',
            bottom: '',
            left: '',
            right: '',
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
            top: '',
            bottom: '',
            left: '',
            right: '',
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
            top: '',
            bottom: '',
            left: '',
            right: '',
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
	globalZIndex : {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
	advancedImageOverflow: {
        type: 'string',
        default: 'default',
    },
	blockStyle: {
        type: 'string',
        default: '',
    },

	advancedImageDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    advancedImageTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    advancedImageMobileSwitcher: {
        type: 'boolean',
        default: false,
    },

	/** Start Class & ID Setting */
	advancedImageGlobalWraperID : {
		type: 'string',
		default: ''
	},
	advancedImageGlobalWraperClass : {
		type: 'string',
		default: ''
	},
	/** End Class & ID Setting */

	advancedImagePositionType: {
		type: 'string',
		default: 'default'
	},
	advancedImageHZOrientationType: {
		type: 'string',
		default: 'left'
	},
	advancedImageVROrientationType: {
		type: 'string',
		default: 'top'
	},
	advancedImageHZLeftOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	advancedImageHZLeftOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	advancedImageHZRightOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	advancedImageHZRightOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	advancedImageVRTopOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	advancedImageVRTopOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	advancedImageVRBottomOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	advancedImageVRBottomOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	advancedImageCustomCSS : {
        type: 'string',
        default: '',
    },

	advancedImageLazyLoadSwitcher: {
		type: 'boolean',
		default: false,
	},
	smartLazyLoadSwitcher: {
		type: 'boolean',
		default: false,
	},
	smartLazyLoadImageUrl : {
		type: 'string',
		default: '',
	},
	smartLazyLoadImageId: {
		type: 'string',
		default: '',
	},
	smartLazyLoadImageAlt: {
		type: 'string',
		default: ''
	},
}
export default attributes;
