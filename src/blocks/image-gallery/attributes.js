const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    blockStyle: {
        type: "string",
        default: "",
    },
    deviceType: {
        type: "string",
        default: "Desktop"
    },
    GalleryType: {
        type: "string",
        default: "grid"
    },
    GalleryItems: {
        type: "array",
        default: [
            { id: 'image-1', title: 'Image 1', column: {desktop: 0, tablet: 0, mobile: 0}, row: {desktop: 0, tablet: 0, mobile: 0}, image: {id: 0, url: '', alt: '', width: '', height: ''} },
            { id: 'image-2', title: 'Image 2', column: {desktop: 0, tablet: 0, mobile: 0}, row: {desktop: 0, tablet: 0, mobile: 0}, image: {id: 0, url: '', alt: '', width: '', height: ''} },
            { id: 'image-3', title: 'Image 3', column: {desktop: 0, tablet: 0, mobile: 0}, row: {desktop: 0, tablet: 0, mobile: 0}, image: {id: 0, url: '', alt: '', width: '', height: ''} },
        ],
    },

    GalleryPresetStyle: {
        type: "string",
        default: "none",
    },

    GalleryItemHeight: {
        type: "object",
        default: {
			Desktop: 200,
			Tablet: 200,
			Mobile: 200
		}
    },
    GalleryItemHeightUnits: {
        type: "object",
        default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },

    ImageWidth: {
        type: "object",
        default: {
            Desktop: 100,
			Tablet: 100,
			Mobile: 100
        },
    },
    ImageWidthUnits: {
        type: "object",
        default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%'
		}
    },

    ImageHeight: {
        type: "object",
        default: {
            Desktop: 100,
			Tablet: 100,
			Mobile: 100
        },
    },
    ImageHeightUnits: {
        type: "object",
        default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%'
		}
    },

    ImageOverlayStyle: {
        type: "string",
        default: "none",
    },
    ImageOverlayStyleType: {
        type: "string",
        default: "top",
    },
    ImageOverlayColor: {
        type: "string",
        default: "rgba(0 0 0 / 0.7)",
    },

    lightboxIconSwitcher: {
        type: "boolean",
        default: true,
    },
    lightboxIcon: {
        type: "string",
        default: "plus",
    },

    lightboxIconSize: {
        type: "object",
        default: {
            Desktop: 24,
			Tablet: 24,
			Mobile: 24
        },
    },
    lightboxIconSizeUnits: {
        type: "object",
        default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },

    lightboxColorSwitcher : {
        type: "string",
        default: "normal"
    },
    lightboxColor : {
        type: "string",
        default: "#000"
    },
    lightboxHoverColor: {
        type: 'string',
        default: "#000"
    },
    
    lightboxBGColorSwitcher : {
        type: "string",
        default: "normal"
    },
    lightboxBGColor: {
        type: "string",
        default: "#fff"
    },
    lightboxBGHoverColor: {
        type: 'string',
        default: "#fff"
    },
    
    lightboxBorder: {
        type: 'string',
        default: "none",
    },
    lightboxBorderColor: {
        type: 'string',
        default: "#000"
    },
    lightboxBorderHoverColor: {
        type: 'string',
        default: "#000"
    },
    lightboxBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    
    
    lightboxPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    lightboxDesktopPadding: {
        type: "object", 
        default: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
        },
    },
    lightboxTabPadding: {
        type: "object", 
        default: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
        },
    },
    lightboxMobilePadding: {
        type: "object", 
        default: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
        },
    },
    lightboxPaddingLink : {
        type : "boolean",
        default: true
    },
    
    lightboxBorderUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    lightboxDesktopBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    lightboxTabBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    lightboxMobileBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    lightboxBorderLink : {
        type : "boolean",
        default: true
    },
    
    lightboxBorderRadiusUnits : {
        type: 'object',
        default: {
            Desktop: '%',
            Tablet: '%',
            Mobile: '%'
        }
    },
    lightboxDesktopBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 50,
            bottom: 50,
            left: 50,
            right: 50,
        },
    },
    lightboxTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 50,
            bottom: 50,
            left: 50,
            right: 50,
        },
    },
    lightboxMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 50,
            bottom: 50,
            left: 50,
            right: 50,
        },
    },
    lightboxBorderRadiusLink : {
        type : "boolean",
        default: true
    },

    GalleryColumnNumber: {
        type: "object",
        default: {
			Desktop: 3,
			Tablet: 2,
			Mobile: 1
		}
    },
    GalleryColumnNumberDesktop: {
        type: "number",
        default: 3
    },
    GalleryColumnNumberTablet: {
        type: "number",
        default: 2
    },
    GalleryColumnNumberMobile: {
        type: "number",
        default: 1
    },

    GalleryImageGap: {
        type: "object",
        default: {
			Desktop: 20,
			Tablet: 15,
			Mobile: 10
		}
    },
    GalleryImageGapUnits: {
        type: "object",
        default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },

    ImageAlignment: {
        type: "string",
        default: "left"
    },
    ImageFitCover: {
        type: "boolean",
        default: true
    },

    GalleryButtonSwitcher: {
        type: "boolean",
        default: false
    },
    GalleryButtonText: {
        type: "string",
        default: 'See More'
    },
    GalleryButtonLink: {
        type: "string",
        default: '#'
    },


    GalleryButtonAlignment: {
        type: "string",
        default: "center",
    },
    GalleryButtonFontFamily: {
        type: "string",
        default: "Default",
    },
    GalleryButtonFontSize: {
        type: "object",
        default: {
			Desktop: '18',
			Tablet: '18',
			Mobile: '18'
		}
    },
    GalleryButtonFontSizeUnits: {
        type: "object",
        default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    GalleryButtonFontWeight : {
        type: "string",
        default: "600"
    },
    GalleryButtonFontStyle : {
        type: "string",
        default: "normal"
    },
    GalleryButtonTextTransform : {
        type: "string",
        default: "none"
    },
    GalleryButtonTextDecoration : {
        type: "string",
        default: "none"
    },
    GalleryButtonLetterSpacing: {
        type: "object",
        default: {
			Desktop: '0',
			Tablet: '0',
			Mobile: '0'
		}
    },
    GalleryButtonLetterSpacingUnits : {
        type: "object",
        default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    GalleryButtonLineHeight: {
        type: "object",
        default: {
			Desktop: 'inherit',
			Tablet: 'inherit',
			Mobile: 'inherit'
		}
    },
    GalleryButtonLineHeightUnits : {
        type: "object",
        default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },

    
    GalleryButtonColorSwitcher : {
        type: "string",
        default: "normal"
    },
    GalleryButtonColor : {
        type: "string",
        default: "#000"
    },
    GalleryButtonHoverColor: {
        type: 'string',
        default: "#000"
    },

    GalleryButtonBGColorSwitcher : {
        type: "string",
        default: "normal"
    },
    GalleryButtonBGColor : {
        type: "string",
        default: "transparent"
    },
    GalleryButtonBGHoverColor: {
        type: 'string',
        default: "transparent"
    },

    ButtonBorder: {
        type: 'string',
        default: "none",
    },
    ButtonBorderColor: {
        type: 'string',
    },
    ButtonBorderHoverColor: {
        type: 'string',
    },
    ButtonBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },

    
    ButtonPaddingUnits: {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    ButtonDesktopPadding: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    ButtonTabPadding: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    ButtonMobilePadding: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    ButtonPaddingLink : {
        type : "boolean",
        default: true
    },
    
    ButtonMarginUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    ButtonDesktopMargin: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    ButtonTabMargin: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    ButtonMobileMargin: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    ButtonMarginLink : {
        type : "boolean",
        default: true
    },
    
    
    ButtonBorderUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    ButtonDesktopBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    ButtonTabBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    ButtonMobileBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    ButtonBorderLink : {
        type : "boolean",
        default: true
    },
    
    ButtonBorderRadiusUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    ButtonDesktopBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    ButtonTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    ButtonMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    ButtonBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    
    GalleryZIndex : {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    

    GalleryPaddingUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    GalleryDesktopPadding: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    GalleryTabPadding: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    GalleryMobilePadding: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    GalleryPaddingLink : {
        type : "boolean",
        default: true
    },

    GalleryMarginUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    GalleryDesktopMargin: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    GalleryTabMargin: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    GalleryMobileMargin: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    GalleryMarginLink : {
        type : "boolean",
        default: true
    },

    GalleryBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    GalleryBgColor : {
        type: "string"
    },
    GalleryBgHoverColor: {
        type: 'string',
    },



    GalleryBorder: {
        type: 'string',
        default: "none",
    },
    GalleryBorderColor: {
        type: 'string',
    },
    GalleryBorderHoverColor: {
        type: 'string',
    },
    GalleryBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },

    GalleryBorderUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    GalleryDesktopBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    GalleryTabBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    GalleryMobileBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    GalleryBorderLink : {
        type : "boolean",
        default: true
    },

    GalleryBorderRadiusUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    GalleryBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    GalleryBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    GalleryBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    GalleryBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    GalleryDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    GalleryTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    GalleryMobileSwitcher: {
        type: "boolean",
        default: false,
    },
    
    imageBorder: {
        type: 'string',
        default: "none",
    },
    imageBorderColor: {
        type: 'string',
    },
    imageBorderHoverColor: {
        type: 'string',
    },
    imageBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },

    imageBorderUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    imageDesktopBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    imageTabBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    imageMobileBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    imageBorderLink : {
        type : "boolean",
        default: true
    },

    imageBorderRadiusUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    imageDesktopBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    imageTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    imageMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    imageBorderRadiusLink : {
        type : "boolean",
        default: true
    },
};

export default attributes;
