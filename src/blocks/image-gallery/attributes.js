const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    DeviceType: {
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
            // You can define some default items if needed
            { id: 'image-1', title: 'Image 1', desc: '', column: {desktop: 0, tablet: 0, mobile: 0}, row: {desktop: 0, tablet: 0, mobile: 0}, image: {id: 0, url: '', alt: '', width: '', height: ''} },
            { id: 'image-2', title: 'Image 2', desc: '', column: {desktop: 0, tablet: 0, mobile: 0}, row: {desktop: 0, tablet: 0, mobile: 0}, image: {id: 0, url: '', alt: '', width: '', height: ''} },
            { id: 'image-3', title: 'Image 3', desc: '', column: {desktop: 0, tablet: 0, mobile: 0}, row: {desktop: 0, tablet: 0, mobile: 0}, image: {id: 0, url: '', alt: '', width: '', height: ''} },
        ],
    },

    
    GalleryItemHeightDesktop: {
        type: "number",
        default: 200,
    },
    GalleryItemHeightTablet: {
        type: "number",
        default: 200,
    },
    GalleryItemHeightMobile: {
        type: "number",
        default: 200,
    },
    GalleryItemHeightUnits: {
        type: "string",
        default: "px"
    },

    ImageWidthDesktop: {
        type: "number",
        default: 100,
    },
    ImageWidthTab: {
        type: "number",
        default: 100,
    },
    ImageWidthMobile: {
        type: "number",
        default: 100,
    },
    ImageWidthUnits: {
        type: "string",
        default: "%",
    },

    ImageHeightDesktop: {
        type: "number",
        default: 100,
    },
    ImageHeightTab: {
        type: "number",
        default: 100,
    },
    ImageHeightMobile: {
        type: "number",
        default: 100,
    },
    ImageHeightUnits: {
        type: "string",
        default: "%",
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

    GalleryImageGapDesktop: {
        type: "number",
        default: 20
    },
    GalleryImageGapTablet: {
        type: "number",
        default: 15
    },
    GalleryImageGapMobile: {
        type: "number",
        default: 10
    },
    GalleryImageGapUnits: {
        type: "string",
        default: "px"
    },

    ImageAlignment: {
        type: "string",
        default: "left"
    },
    ImageFitCover: {
        type: "boolan",
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
        default: "inherit",
    },
    GalleryButtonFontSizeDesktop: {
        type: "number",
        default: 18
    },
    GalleryButtonFontSizeTablet: {
        type: "number",
        default: 18
    },
    GalleryButtonFontSizeMobile: {
        type: "number",
        default: 18
    },
    GalleryButtonFontSizeUnits: {
        type: "string",
        default: "px"
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
    GalleryButtonLetterSpacingDesktop: {
        type: "number",
        default: 0
    },
    GalleryButtonLetterSpacingTablet: {
        type: "number",
        default: 0
    },
    GalleryButtonLetterSpacingMobile: {
        type: "number",
        default: 0
    },
    GalleryButtonLetterSpacingUnits : {
        type: "string",
        default: "px"
    },
    GalleryButtonLineHeightDesktop: {
        type: "number",
        default: "inherit",
    },
    GalleryButtonLineHeightTablet: {
        type: "number",
        default: "inherit",
    },
    GalleryButtonLineHeightMobile: {
        type: "number",
        default: "inherit",
    },
    GalleryButtonLineHeightUnits : {
        type: "string",
        default: "px"
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonTabPadding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonMobilePadding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonTabMargin: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonMobileMargin: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonTabBorderWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonMobileBorderWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    

    GalleryIconColorSwitcher : {
        type: "string",
        default: "normal"
    },
    GalleryIconColor : {
        type: "string",
        default: "#fff"
    },
    GalleryIconHoverColor: {
        type: 'string',
        default: "#fff"
    },


    GalleryIconBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    GalleryIconBgColor : {
        type: "string",
        default: "#000"
    },
    GalleryIconBgHoverColor: {
        type: 'string',
        default: "#000"
    },


    GalleryIconSizeDesktop: {
        type: "number",
        default: 25
    },
    GalleryIconSizeTablet: {
        type: "number",
        default: 25
    },
    GalleryIconSizeMobile: {
        type: "number",
        default: 25
    },
    GalleryIconSizeUnits: {
        type: "string",
        default: "px"
    },

    GalleryIconBgSizeDesktop: {
        type: "number",
        default: 60
    },
    GalleryIconBgSizeTablet: {
        type: "number",
        default: 60
    },
    GalleryIconBgSizeMobile: {
        type: "number",
        default: 60
    },
    GalleryIconBgSizeUnits: {
        type: "string",
        default: "px"
    },


    GalleryIconSpacingDesktop: {
        type: "number",
        default: 20
    },
    GalleryIconSpacingTablet: {
        type: "number",
        default: 20
    },
    GalleryIconSpacingMobile: {
        type: "number",
        default: 20
    },
    GalleryIconSpacingUnits: {
        type: "string",
        default: "px"
    },





    GalleryTitleFontFamily: {
        type: "string",
        default: "inherit",
    },
    GalleryTitleFontSizeDesktop: {
        type: "number",
        default: 18
    },
    GalleryTitleFontSizeTablet: {
        type: "number",
        default: 18
    },
    GalleryTitleFontSizeMobile: {
        type: "number",
        default: 18
    },
    GalleryTitleFontSizeUnits: {
        type: "string",
        default: "px"
    },
    GalleryTitleFontWeight : {
        type: "string",
        default: "600"
    },
    GalleryTitleFontStyle : {
        type: "string",
        default: "normal"
    },
    GalleryTitleTextTransform : {
        type: "string",
        default: "none"
    },
    GalleryTitleTextDecoration : {
        type: "string",
        default: "none"
    },
    GalleryTitleLetterSpacingDesktop: {
        type: "number",
        default: 0
    },
    GalleryTitleLetterSpacingTablet: {
        type: "number",
        default: 0
    },
    GalleryTitleLetterSpacingMobile: {
        type: "number",
        default: 0
    },
    GalleryTitleLetterSpacingUnits : {
        type: "string",
        default: "px"
    },
    GalleryTitleLineHeightDesktop: {
        type: "number",
        default: "inherit",
    },
    GalleryTitleLineHeightTablet: {
        type: "number",
        default: "inherit",
    },
    GalleryTitleLineHeightMobile: {
        type: "number",
        default: "inherit",
    },
    GalleryTitleLineHeightUnits : {
        type: "string",
        default: "px"
    },

    GalleryTitleColorSwitcher : {
        type: "string",
        default: "normal"
    },
    GalleryTitleColor : {
        type: "string",
        default: "#000"
    },
    GalleryTitleHoverColor: {
        type: 'string',
        default: "#000"
    },


    GalleryDescFontFamily: {
        type: "string",
        default: "inherit",
    },
    GalleryDescFontSizeDesktop: {
        type: "number",
        default: 14
    },
    GalleryDescFontSizeTablet: {
        type: "number",
        default: 14
    },
    GalleryDescFontSizeMobile: {
        type: "number",
        default: 14
    },
    GalleryDescFontSizeUnits: {
        type: "string",
        default: "px"
    },
    GalleryDescFontWeight : {
        type: "string",
        default: "400"
    },
    GalleryDescFontStyle : {
        type: "string",
        default: "normal"
    },
    GalleryDescTextTransform : {
        type: "string",
        default: "none"
    },
    GalleryDescTextDecoration : {
        type: "string",
        default: "none"
    },
    GalleryDescLetterSpacingDesktop : {
        type: "number",
    },
    GalleryDescLetterSpacingTablet : {
        type: "number",
    },
    GalleryDescLetterSpacingMobile : {
        type: "number",
    },
    GalleryDescLetterSpacingUnits : {
        type: "string",
        default: "px"
    },
    GalleryDescLineHeightDesktop : {
        type: "number",
        default: "inherit",
    },
    GalleryDescLineHeightTablet : {
        type: "number",
        default: "inherit",
    },
    GalleryDescLineHeightMobile : {
        type: "number",
        default: "inherit",
    },
    GalleryDescLineHeightUnits : {
        type: "string",
        default: "px"
    },

    GalleryDescColorSwitcher : {
        type: "string",
        default: "normal"
    },
    GalleryDescColor : {
        type: "string",
        default: "#000"
    },
    GalleryDescHoverColor: {
        type: 'string',
        default: "#000"
    },



    GalleryZIndex : {
        type: "number",
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    GalleryTabPadding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    GalleryMobilePadding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    GalleryTabMargin: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    GalleryMobileMargin: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    GalleryTabBorderWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    GalleryMobileBorderWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
    GalleryDesktopBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    GalleryTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    GalleryMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
    
};

export default attributes;
