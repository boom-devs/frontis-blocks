const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    deviceType: {
        type: "string",
        default: "Desktop"
    },
    highlightColor: {
        type: 'string',
        default: '',
    },
    hoverHighlightColor: {
        type: 'string',
        default: '',
    },
    flipBoxPresetStyle: {
        type: "string",
        default: "preset-1",
    },
    flipBoxAlignment: {
        type: 'object',
        default: {
            Desktop: 'left',
            Tablet: '',
            Mobile: '',
        },
    },
    flipBoxBg: {
        type: 'string',
        default: '#EBF5FF'
    },
    mediaSwitcher: {
        type: "string",
        default: "icon"
    },
    Sub_Heading_Switcher: {
        type: "boolean",
        default: false
    },
    isHover: {
        type: "boolean",
        default: false,
    },
    flipSelectedSide: {
        type: "string",
        default: "front"
    },
    flipAnimationType: {
        type: "string",
        default: "flip-left"
    },
    flipMediaUrl: {
        type: 'string',
        default: ''
    },
    flipMediaAlt: {
        type: "string",
    },
    flipMediaID: {
        type: "number",
    },
    mediaSize: {
        type: 'object',
        default: {
            Desktop: '25',
            Tablet: '20',
            Mobile: '15'
        }
    },
    mediaSizeDesktop: {
        type: "number",
        default: 20
    },
    mediaSizeSizeTablet: {
        type: "number",
        default: 20
    },
    mediaSizeSizeMobile: {
        type: "number",
        default: 20
    },
    mediaSizeUnitsSave: {
        type: "string",
        default: "px"
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
        type: "string",
        default: ''
    },
    mediaBgWidth: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
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
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    mediaBgHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    btnIconSize: {
        type: 'object',
        default: {
            Desktop: '16',
            Tablet: '16',
            Mobile: '16'
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
    btnIconGap: {
        type: 'object',
        default: {
            Desktop: '8',
            Tablet: '8',
            Mobile: '8'
        }
    },
    btnIconGapUnits: {
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
        default: '#555E72'
    },
    btnIconHoverColor: {
        type: 'string',
        default: ''
    },
    buttonIconRotateSwitcher: {
        type: 'string',
        default: 'normal',
    },
    buttonIconRotate: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "", 
            Mobile: "",
        }
    },
    buttonIconRotateHover: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        }
    },
    mediaIconColor: {
        type: 'string',
        default: '#ffffff'
    },
    mediaIconHoverColor: {
        type: 'string',
        default: ""
    },
    mediaIconColorSwitcher: {
        type: "string",
        default: "normal"
    },
    btnIconPosition: {
        type: 'string',
        default: 'right'
    },
    flipIconPosition: {
        type: 'string',
        default: 'top'
    },
    flipIconVerticalPosition: {
        type: 'string',
        default: 'top'
    },
    flipCardAlignment: {
        type: 'string',
        default: 'start'
    },
    height: {
        type: 'number',
        default: 50
    },
    width: {
        type: 'number',
        default: 50
    },
    iconBack: {
        type: 'string',
        default: 'swatchbook',
    },
    btnIcon: {
        type: 'string',
        default: 'arrow-right',
    },
    boxBgColor: {
        type: 'string',
        default: '#fff'
    },
    boxBgHoverColor: {
        type: 'string',
    },
    boxBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    titleColor: {
        type: 'string',
        default: '#15171C'
    },
    borderRadius: {
        type: 'number',
        default: 0,
    },
    titleText: {
        type: 'string',
        default: 'Icon Box title',
    },
    mediaAlignmentFront: {
        type: "string",
        default: "center",
    },
    mediaAlignmentBack: {
        type: "string",
        default: "center",
    },
    contentAlignment: {
        type: "string",
        default: "left",
    },
    descAlignment: {
        type: "string",
        default: "center",
    },
    buttonAlignment: {
        type: "string",
        default: "center",
    },
    buttonAlignmentBack: {
        type: "string",
        default: "center",
    },
    Alignment: {
        type: "string",
        default: "center",
    },
    Heading_Text: {
        type: "string",
        default: "Web Design"
    },
    headingTextBack: {
        type: "string",
        default: "Branding"
    },
    headingTag: {
        type: "string",
        default: "h2"
    },
    headingTagBack: {
        type: "string",
        default: "h2"
    },
    /** Start Heading Style **/
    headingGlobalTypographyData: {
        type: "object",
        default: {}
    },
    headingGlobalTypoSwitcher: {
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
    headingGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    headingGlobalTypoOption: {
        type: "object",
        default: { label: 'Default', value: 'default' },
    },
    headingFontFamily: {
        type: "string",
        default: "Default",
    },
    headingFontSize: {
        type: 'object',
        default: {
            Desktop: '24',
            Tablet: '18',
            Mobile: '16'
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
    headingFontWeight: {
        type: "string",
        default: "600"
    },
    headingFontStyle: {
        type: "string",
        default: ""
    },
    headingTextTransform: {
        type: "string",
        default: ""
    },
    headingTextDecoration: {
        type: "string",
        default: ""
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
    /** Heading Color **/
    Heading_Color_Switcher: {
        type: "string",
        default: "normal"
    },
    Heading_Color: {
        type: "string",
        default: "#15171C"
    },
    Heading_Hover_Color: {
        type: 'string',
        default: ""
    },
    Heading_Background_Color: {
        type: 'string',
    },
    Heading_Border: {
        type: 'string',
        default: "none",
    },
    Heading_Border_Color: {
        type: 'string',
    },
    Heading_Border_Hover_Color: {
        type: 'string',
    },
    Heading_Border_Color_Switcher: {
        type: "string",
        default: "normal"
    },
    Heading_Border_units: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    Heading_Desktop_Border_Width: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    Heading_Tab_Border_Width: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    Heading_Mobile_Border_Width: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    borderLink: {
        type: "boolean",
        default: true
    },

    Heading_Border_radius_units: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    Heading_Desktop_Border_radius_Width: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    Heading_Tab_Border_radius_Width: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    Heading_Mobile_Border_radius_Width: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    borderRadiusLink: {
        type: "boolean",
        default: true
    },

    Heading_padding_units: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    Heading_Desktop_padding: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    Heading_Tab_padding: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    Heading_Mobile_padding: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    paddingLink: {
        type: "boolean",
        default: true
    },
    //Margin
    Heading_Margin_Units: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    Heading_Desktop_Margin: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    Heading_Tab_Margin: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    Heading_Mobile_Margin: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    Heading_Margin_Link: {
        type: "boolean",
        default: true
    },

    /** Start Sub Heading Style */
    subHeadingGlobalTypographyData: {
        type: "object",
        default: {}
    },
    subHeadingGlobalTypoSwitcher: {
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
    subHeadingGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    subHeadingGlobalTypoOption: {
        type: "object",
        default: { label: 'Default', value: 'default' },
    },
    subHeadingFontFamily: {
        type: "string",
        default: "Default",
    },
    subHeadingFontSize: {
        type: 'object',
        default: {
            Desktop: '18',
            Tablet: '18',
            Mobile: '18'
        }
    },
    subHeadingFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    subHeadingFontWeight: {
        type: "string",
        default: ""
    },
    subHeadingFontStyle: {
        type: "string",
        default: ""
    },
    subHeadingTextTransform: {
        type: "string",
        default: ""
    },
    subHeadingTextDecoration: {
        type: "string",
        default: ""
    },
    subHeadingLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    subHeadingLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    subHeadingLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    subHeadingLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    SubHeadingColorSwitcher: {
        type: "string",
        default: "normal"
    },
    SubHeadingColor: {
        type: "string",
        default: "#555E72"
    },
    SubHeadingHoverColor: {
        type: "string",
        default: ""
    },
    Sub_Heading_Text: {
        type: "string",
        default: "Contrary to popular belief, Lorem Ipsum is not simply random text." +
            " It has roots in a piece of classical Latin"
    },
    Sub_Heading_Tag: {
        type: "string",
        default: "p"
    },
    flipBackContent: {
        type: "string",
        default: "Corrupti non maiores atque. Repellendus ratione omnis numquam minima ut harum eaque."
    },
    flipBackContentTag: {
        type: "string",
        default: "p"
    },
    descSwitcher: {
        type: "boolean",
        default: false,
    },
    titleSwitcher: {
        type: "boolean",
        default: true,
    },
    Sub_Heading_Position: {
        type: "string",
        default: "bottom",
    },
    SubHeadingPaddingUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    SubHeadingDesktopPadding: {
        type: "object",
        default: {
            top: '15',
            bottom: '15',
            left: '0',
            right: '0',
        },
    },
    SubHeadingTabPadding: {
        type: "object",
        default: {
            top: '15',
            bottom: '15',
            left: '0',
            right: '0',
        },
    },
    SubHeadingMobilePadding: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    SubHeadingPaddingLink: {
        type: "boolean",
        default: true
    },

    //Margin
    descMarginUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    descDesktopMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    descTabMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    descMobileMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    descMarginLink: {
        type: "boolean",
        default: true
    },

    //flip Button
    flip_Button_Text: {
        type: "string",
        default: "Learn More"
    },
    flip_Button_Switcher: {
        type: "boolean",
        default: false,
    },
    buttonIconSwitcher: {
        type: "boolean",
        default: true,
    },
    buttonBackIconSwitcher: {
        type: "boolean",
        default: true,
    },
    flipButtonLink: {
        type: "string",
        default: ""
    },
    flipbtnTargetUrl: {
        type: "boolean",
    },
    flipButtonPaddingUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipButtonDesktopPadding: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipButtonTabPadding: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipButtonMobilePadding: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipButtonPaddingLink: {
        type: "boolean",
        default: true
    },

    //Button Margin
    flipButtonMarginUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipButtonDesktopMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipButtonTabMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipButtonMobileMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipButtonMarginLink: {
        type: "boolean",
        default: true
    },

    //flip Button Border
    flipButtonBorderColorSwitcher: {
        type: "string",
        default: "normal"
    },
    flipButtonBorder: {
        type: 'string',
        default: "none",
    },
    flipButtonBorderColor: {
        type: 'string',
    },
    flipButtonHoverBorderColor: {
        type: 'string',
    },
    flipButtonBorderUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipButtonDesktopBorderWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipButtonTabBorderWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipButtonMobileBorderWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipButtonBorderLink: {
        type: "boolean",
        default: true
    },

    //Button Border Radius
    flipBtnBorderradiusUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipBtnDesktopBorderradiusWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBtnTabBorderradiusWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBtnMobileBorderradiusWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    btnBorderRadiusLink: {
        type: "boolean",
        default: true
    },

    // Flip back button
    flipButtonBackPaddingUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipButtonBackDesktopPadding: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipButtonBackTabPadding: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipButtonBackMobilePadding: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipButtonBackPaddingLink: {
        type: "boolean",
        default: true
    },

    //Button Margin
    flipButtonBackMarginUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipButtonBackDesktopMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipButtonBackTabMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipButtonBackMobileMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipButtonBackMarginLink: {
        type: "boolean",
        default: true
    },

    //flip Button Border
    flipButtonBackBorderColorSwitcher: {
        type: "string",
        default: "normal"
    },
    flipButtonBackBorder: {
        type: 'string',
        default: "none",
    },
    flipButtonBackBorderColor: {
        type: 'string',
    },
    flipButtonBackHoverBorderColor: {
        type: 'string',
    },
    flipButtonBackBorderUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipButtonBackDesktopBorderWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipButtonBackTabBorderWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipButtonBackMobileBorderWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipButtonBackBorderLink: {
        type: "boolean",
        default: true
    },

    //Button Border Radius
    flipBtnBackBorderradiusUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipBtnBackDesktopBorderradiusWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBtnBackTabBorderradiusWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBtnBackMobileBorderradiusWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    btnBorderRadiusLink: {
        type: "boolean",
        default: true
    },
    // Flip box padding
    flipBoxPaddingUnits: {
        type: "string",
        default: "px"
    },
    flipBoxDesktopPadding: {
        type: "object",
        default: {
            top: '40',
            bottom: '40',
            left: '40',
            right: '40',
        },
    },
    flipBoxTabPadding: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBoxMobilePadding: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    // flip box margin
    flipBoxMarginUnits: {
        type: "string",
        default: "px"
    },
    flipBoxDesktopMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBoxTabMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBoxMobileMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBoxActiveMarginDevice: {
        type: "string",
        default: "desktop"
    },
    flipBoxMarginLink: {
        type: "boolean",
        default: true
    },
    // flip Box Border
    flipBoxBorder: {
        type: 'string',
        default: "none",
    },
    flipBoxBorderColor: {
        type: 'string',
    },
    flipBoxBorderHoverColor: {
        type: 'string',
    },
    flipBoxBorderColorSwitcher: {
        type: "string",
        default: "normal"
    },
    flipBoxBorderUnits: {
        type: "string",
        default: "px"
    },
    flipBoxDesktopBorderWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBoxTabBorderWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBoxMobileBorderWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    // 	flip Box Border Radius
    flipBoxBorderRadiusUnits: {
        type: "string",
        default: "px"
    },
    flipBoxDesktopBorderRadiusWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBoxTabBorderRadiusWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBoxMobileBorderRadiusWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    // Button
    buttonGlobalTypographyData: {
        type: "object",
        default: {}
    },
    buttonGlobalTypoSwitcher: {
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
    buttonGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    buttonGlobalTypoOption: {
        type: "object",
        default: { label: 'Default', value: 'default' },
    },
    buttonFontFamily: {
        type: "string",
        default: "Default",
    },
    buttonFontSize: {
        type: 'object',
        default: {
            Desktop: '18',
            Tablet: '18',
            Mobile: '18'
        }
    },
    buttonFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    buttonFontWeight: {
        type: "string",
        default: "400"
    },
    buttonFontStyle: {
        type: "string",
        default: "normal"
    },
    buttonTextTransform: {
        type: "string",
        default: "none"
    },
    buttonTextDecoration: {
        type: "string",
        default: "none"
    },
    buttonLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    buttonLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    buttonLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    buttonLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    // Button Color
    buttonColorSwitcher: {
        type: "string",
        default: "normal"
    },
    buttonTextColor: {
        type: "string",
        default: '#555E72'
    },
    buttonTextHoverColor: {
        type: "string",
        default: ""
    },
    buttonBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    buttonBgColor: {
        type: "string",
        default: ''
    },
    buttonBgHoverColor: {
        type: "string"
    },
    globalZIndex: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: '',
        }
    },
    flipBoxOverflow: {
        type: 'string',
        default: "default",
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
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    globalPaddingTablet: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    globalPaddingMobile: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    globalPaddingLink: {
        type: "boolean",
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
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    globalMarginTablet: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    globalMarginMobile: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    globalMarginLink: {
        type: "boolean",
        default: true
    },
    globalBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    globalBgColor: {
        type: "string",
        default: '#FEEBD5'
    },
    globalBgHoverColor: {
        type: "string",
        default: "#F89B2E"
    },
    globalBorder: {
        type: 'string',
        default: "none",
    },
    globalBorderColorSwitcher: {
        type: "string",
        default: "normal"
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
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    globalBorderTablet: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    globalBorderMobile: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    globalBorderLink: {
        type: "boolean",
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
        type: "object",
        default: {
            top: '6',
            bottom: '6',
            left: '6',
            right: '6',
        },
    },
    globalBorderRadiusTablet: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    globalBorderRadiusMobile: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    globalBorderRadiusLink: {
        type: "boolean",
        default: true
    },
    //Back side
    mediaBackPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    mediaBackPaddingDesktop: {
        type: "object",
        default: {
            top: '15',
            bottom: '15',
            left: '15',
            right: '15',
        },
    },
    mediaBackPaddingTablet: {
        type: "object",
        default: {
            top: '15',
            bottom: '15',
            left: '15',
            right: '15',
        },
    },
    mediaBackPaddingMobile: {
        type: "object",
        default: {
            top: '15',
            bottom: '15',
            left: '15',
            right: '15',
        },
    },
    mediaBackPaddingLink: {
        type: "boolean",
        default: true
    },
    mediaBackMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    mediaBackMarginDesktop: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    mediaBackMarginTablet: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    mediaBackMarginMobile: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    mediaBackMarginLink: {
        type: "boolean",
        default: true
    },
    mediaBackBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    mediaBackBgColor: {
        type: "string",
        default: "#399CFF"
    },
    bgType: {
        type: "string",
        default: "color",
    },
    mediaBackBgHoverColor: {
        type: "string",
        default: "#ffffff"
    },
    mediaBackBorder: {
        type: "string",
        default: "none",
    },
    mediaBackBorderColorSwitcher: {
        type: "string",
        default: "normal"
    },
    mediaBackBorderColor: {
        type: "string",
    },
    mediaBackBorderHoverColor: {
        type: "string",
    },
    mediaBackBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    mediaBackBorderDesktop: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    mediaBackBorderTablet: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    mediaBackBorderMobile: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    mediaBackBorderLink: {
        type: "boolean",
        default: true
    },
    mediaBackBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    mediaBackBorderRadiusDesktop: {
        type: "object",
        default: {
            top: '50',
            bottom: '50',
            left: '50',
            right: '50',
        },
    },
    mediaBackBorderRadiusTablet: {
        type: "object",
        default: {
            top: '50',
            bottom: '50',
            left: '50',
            right: '50',
        },
    },
    mediaBackBorderRadiusMobile: {
        type: "object",
        default: {
            top: '50',
            bottom: '50',
            left: '50',
            right: '50',
        },
    },
    mediaBackBorderRadiusLink: {
        type: "boolean",
        default: true
    },

    flipMediaBackgroundImageUrl: {
        type: "string",
    },
    flipMediaBackgroundImageAlt: {
        type: "string",
    },
    flipMediaBackgroundImageID: {
        type: "number",
    },
    boxGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    boxGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    boxGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    boxGlobalHoverBoxShadowValues: {
        type: 'array',
        default: [],
    },
    boxGlobalHoverBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    mediaColorSwitcher: {
        type: "string",
        default: "normal"
    },
    mediaBackgroundType: {
        type: "string",
        default: "classic"
    },
    mediaClassicColor: {
        type: "string",
        default: "#F89B2E"
    },
    mediaGradientColor: {
        type: "string",
    },
    mediaCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    mediaCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    mediaBackgroundColorStyle: {
        type: "string",
        default: ""
    },
    mediaBackgroundImageUrl: {
        type: "string",
        default: ""
    },
    mediaBackgroundImageAlt: {
        type: "string",
        default: ""
    },
    mediaBackgroundImageID: {
        type: "string",
        default: ""
    },
    mediaBackgroundImagePosition: {
        type: "string",
        default: ""
    },
    mediaBackgroundImageAttachment: {
        type: "string",
        default: ""
    },
    mediaBackgroundImageSize: {
        type: "string",
        default: ""
    },
    mediaBackgroundImageRepeat: {
        type: "string",
        default: ""
    },
    mediaHoverBackgroundType: {
        type: "string",
        default: "classic"
    },
    mediaHoverClassicColor: {
        type: "string",
        default: ""
    },
    mediaHoverGradientColor: {
        type: "string",
    },
    mediaHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    mediaHoverCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    mediaHoverBackgroundColorStyle: {
        type: "string",
        default: ""
    },
    mediaHoverBackgroundImageUrl: {
        type: "string",
        default: ""
    },
    mediaHoverBackgroundImageAlt: {
        type: "string",
        default: ""
    },
    mediaHoverBackgroundImageID: {
        type: "string",
        default: ""
    },
    mediaHoverBackgroundImagePosition: {
        type: "string",
        default: ""
    },
    mediaHoverBackgroundImageAttachment: {
        type: "string",
        default: ""
    },
    mediaHoverBackgroundImageSize: {
        type: "string",
        default: ""
    },
    mediaHoverBackgroundImageRepeat: {
        type: "string",
        default: ""
    },
    blockStyle: {
        type: "string",
        default: "",
    },

    flipBoxDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    flipBoxTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    flipBoxMobileSwitcher: {
        type: "boolean",
        default: false,
    },

    /** Start Class & ID Setting */
    flipBoxGlobalCustomCSS: {
        type: "string",
        default: "",
    },
    flipBoxGlobalWraperID: {
        type: "string",
        default: ""
    },

    flipBoxGlobalWraperClass: {
        type: "string",
        default: ""
    },

    /** End Class & ID Setting */

    flipBoxPositionType: {
        type: "string",
        default: "default"
    },
    flipBoxHZOrientationType: {
        type: "string",
        default: "left"
    },
    flipBoxVROrientationType: {
        type: "string",
        default: "top"
    },
    flipBoxHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    flipBoxHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    flipBoxHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    flipBoxHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    flipBoxVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    flipBoxVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    flipBoxVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    flipBoxVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    flipBackBoxPresetStyle: {
        type: "string",
        default: "preset-1",
    },
    flipBackBoxBg: {
        type: 'string',
        default: '#EBF5FF'
    },
    mediaSwitcherBack: {
        type: "string",
        default: "icon"
    },
    Sub_Heading_Switcher: {
        type: "boolean",
        default: false
    },
    flipBackSelectedSide: {
        type: "string",
        default: "front"
    },
    flipBackMediaUrl: {
        type: 'string',
        default: ''
    },
    flipBackMediaAlt: {
        type: "string",
    },
    flipBackMediaID: {
        type: "number",
    },

    mediaBackSize: {
        type: 'object',
        default: {
            Desktop: '25',
            Tablet: '20',
            Mobile: '15'
        }
    },
    mediaBackSizeDesktop: {
        type: "number",
        default: 20
    },
    mediaBackSizeSizeTablet: {
        type: "number",
        default: 20
    },
    mediaBackSizeSizeMobile: {
        type: "number",
        default: 20
    },
    mediaBackSizeUnitsSave: {
        type: "string",
        default: "px"
    },
    mediaBackSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    mediaBackBgTypeImage: {
        type: "string",
        default: ''
    },
    mediaBackBgWidth: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    mediaBackBgWidthUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    mediaBackBgHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    mediaBackBgHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    btnBackIconSize: {
        type: 'object',
        default: {
            Desktop: '16',
            Tablet: '16',
            Mobile: '16'
        }
    },
    btnBackIconSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    btnBackIconGap: {
        type: 'object',
        default: {
            Desktop: '8',
            Tablet: '8',
            Mobile: '8'
        }
    },
    btnBackIconGapUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    btnBackIconColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    btnBackIconColor: {
        type: 'string',
        default: '#FFFFFF'
    },
    btnBackIconHoverColor: {
        type: 'string',
        default: ''
    },
    buttonBackIconRotateSwitcher: {
        type: 'string',
        default: 'normal',
    },
    buttonBackIconRotate: {
        type: 'object',
        default: {
            Desktop: "45",
            Tablet: "45", 
            Mobile: "45",
        }
    },
    buttonBackIconRotateHover: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        }
    },
    mediaBackIconColor: {
        type: 'string',
        default: '#F89B2E'
    },
    mediaBackIconHoverColor: {
        type: 'string',
        default: ""
    },
    mediaBackIconColorSwitcher: {
        type: "string",
        default: "normal"
    },
    btnIconPosition: {
        type: 'string',
        default: 'right'
    },
    // Flip box front
    flipBoxFrontWidth: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    flipBoxFrontWidthUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    flipBoxFrontHeight: {
        type: 'object',
        default: {
            Desktop: '366',
            Tablet: '366',
            Mobile: '366'
        }
    },
    flipBoxFrontHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    //Flip Box Front background
    flipBoxFrontBackColorSwitcher: {
        type: "string",
        default: "normal"
    },
    flipBoxFrontBackgroundType: {
        type: "string",
        default: "classic"
    },
    flipBoxFrontClassicColor: {
        type: "string",
        default: "#FEEBD5"
    },
    flipBoxFrontGradientColor: {
        type: "string",
    },
    flipBoxFrontCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    flipBoxFrontCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    flipBoxFrontBackgroundColorStyle: {
        type: "string",
        default: ""
    },
    flipBoxFrontBackgroundImageUrl: {
        type: "string",
        default: ""
    },
    flipBoxFrontBackgroundImageAlt: {
        type: "string",
        default: ""
    },
    flipBoxFrontBackgroundImageID: {
        type: "string",
        default: ""
    },
    flipBoxFrontBackgroundImagePosition: {
        type: "string",
        default: ""
    },
    flipBoxFrontBackgroundImageAttachment: {
        type: "string",
        default: ""
    },
    flipBoxFrontBackgroundImageSize: {
        type: "string",
        default: ""
    },
    flipBoxFrontBackgroundImageRepeat: {
        type: "string",
        default: ""
    },
    // Flip box front hover background
    flipBoxFrontHoverBackgroundType: {
        type: "string",
        default: "classic"
    },
    flipBoxFrontHoverClassicColor: {
        type: "string",
        default: ""
    },
    flipBoxFrontHoverGradientColor: {
        type: "string",
    },
    flipBoxFrontHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    flipBoxFrontHoverCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    flipBoxFrontHoverBackgroundColorStyle: {
        type: "string",
        default: ""
    },
    flipBoxFrontHoverBackgroundImageUrl: {
        type: "string",
        default: ""
    },
    flipBoxFrontHoverBackgroundImageAlt: {
        type: "string",
        default: ""
    },
    flipBoxFrontHoverBackgroundImageID: {
        type: "string",
        default: ""
    },
    flipBoxFrontHoverBackgroundImagePosition: {
        type: "string",
        default: ""
    },
    flipBoxFrontHoverBackgroundImageAttachment: {
        type: "string",
        default: ""
    },
    flipBoxFrontHoverBackgroundImageSize: {
        type: "string",
        default: ""
    },
    flipBoxFrontHoverBackgroundImageRepeat: {
        type: "string",
        default: ""
    },
    // Flip box back
    flipBoxBackWidth: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    flipBoxBackWidthUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    flipBoxBackHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    flipBoxBackHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    //Flip Box Front background
    flipBoxBackColorSwitcher: {
        type: "string",
        default: "normal"
    },
    flipBoxBackBackgroundType: {
        type: "string",
        default: "classic"
    },
    flipBoxBackClassicColor: {
        type: "string",
        default: "#F89B2E"
    },
    flipBoxBackGradientColor: {
        type: "string",
    },
    flipBoxBackCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    flipBoxBackCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    flipBoxBackBackgroundColorStyle: {
        type: "string",
        default: ""
    },
    flipBoxBackBackgroundImageUrl: {
        type: "string",
        default: ""
    },
    flipBoxBackBackgroundImageAlt: {
        type: "string",
        default: ""
    },
    flipBoxBackBackgroundImageID: {
        type: "string",
        default: ""
    },
    flipBoxBackBackgroundImagePosition: {
        type: "string",
        default: ""
    },
    flipBoxBackBackgroundImageAttachment: {
        type: "string",
        default: ""
    },
    flipBoxBackBackgroundImageSize: {
        type: "string",
        default: ""
    },
    flipBoxBackBackgroundImageRepeat: {
        type: "string",
        default: ""
    },
    flipBoxBackHoverBackgroundType: {
        type: "string",
        default: "classic"
    },
    flipBoxBackHoverClassicColor: {
        type: "string",
        default: ""
    },
    flipBoxBackHoverGradientColor: {
        type: "string",
    },
    flipBoxBackHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    flipBoxBackHoverCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    flipBoxBackHoverBackgroundColorStyle: {
        type: "string",
        default: ""
    },
    flipBoxBackHoverBackgroundImageUrl: {
        type: "string",
        default: ""
    },
    flipBoxBackHoverBackgroundImageAlt: {
        type: "string",
        default: ""
    },
    flipBoxBackHoverBackgroundImageID: {
        type: "string",
        default: ""
    },
    flipBoxBackHoverBackgroundImagePosition: {
        type: "string",
        default: ""
    },
    flipBoxBackHoverBackgroundImageAttachment: {
        type: "string",
        default: ""
    },
    flipBoxBackHoverBackgroundImageSize: {
        type: "string",
        default: ""
    },
    flipBoxBackHoverBackgroundImageRepeat: {
        type: "string",
        default: ""
    },

    flipBackIconPosition: {
        type: 'string',
        default: 'top'
    },
    flipBackIconVerticalPosition: {
        type: 'string',
        default: 'top'
    },
    flipBackCardAlignment: {
        type: 'string',
        default: 'start'
    },
    height: {
        type: 'number',
        default: 50
    },
    width: {
        type: 'number',
        default: 50
    },
    icon: {
        type: 'string',
        default: 'bolt',
    },
    btnIconBack: {
        type: 'string',
        default: 'arrow-up',
    },
    boxBgColor: {
        type: 'string',
        default: '#fff'
    },
    boxBgHoverColor: {
        type: 'string',
    },
    boxBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    titleColor: {
        type: 'string',
        default: '#15171C'
    },
    borderRadius: {
        type: 'number',
        default: 0,
    },
    titleText: {
        type: 'string',
        default: 'Icon Box title',
    },
    wrapperAlignment: {
        type: "string",
        default: "center",
    },
    contentAlignment: {
        type: "string",
        default: "left",
    },
    descAlignmentBack: {
        type: "string",
        default: "center",
    },
    buttonAlignment: {
        type: "string",
        default: "center",
    },
    Alignment: {
        type: "string",
        default: "center",
    },
    titleAlignmentBack: {
        type: "string",
        default: "center",
    },
    Heading_Text: {
        type: "string",
        default: "Web Design"
    },
    headingTag: {
        type: "string",
        default: "h2"
    },
    /** Start Heading Style **/
    headingBackGlobalTypographyData: {
        type: "object",
        default: {}
    },
    headingBackGlobalTypoSwitcher: {
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
    headingBackGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    headingBackGlobalTypoOption: {
        type: "object",
        default: { label: 'Default', value: 'default' },
    },
    headingBackFontFamily: {
        type: "string",
        default: "Default",
    },
    headingBackFontSize: {
        type: 'object',
        default: {
            Desktop: '24',
            Tablet: '18',
            Mobile: '16'
        }
    },
    headingBackFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    headingBackFontWeight: {
        type: "string",
        default: "600"
    },
    headingBackFontStyle: {
        type: "string",
        default: ""
    },
    headingBackTextTransform: {
        type: "string",
        default: ""
    },
    headingBackTextDecoration: {
        type: "string",
        default: ""
    },
    headingBackLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    headingBackLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    headingBackLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    headingBackLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    /** Heading Back Color **/
    headingBackColorSwitcher: {
        type: "string",
        default: "normal"
    },
    headingBackColor: {
        type: "string",
        default: "#ffffff"
    },
    headingBackHoverColor: {
        type: 'string',
        default: ""
    },
    headingBack_Background_Color: {
        type: 'string',
    },
    headingBack_Border: {
        type: 'string',
        default: "none",
    },
    headingBack_Border_Color: {
        type: 'string',
    },
    headingBack_Border_Hover_Color: {
        type: 'string',
    },
    headingBack_Border_Color_Switcher: {
        type: "string",
        default: "normal"
    },
    headingBack_Border_units: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    headingBack_Desktop_Border_Width: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    headingBack_Tab_Border_Width: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    headingBack_Mobile_Border_Width: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    borderLink: {
        type: "boolean",
        default: true
    },

    headingBack_Border_radius_units: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    headingBack_Desktop_Border_radius_Width: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    headingBack_Tab_Border_radius_Width: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    headingBack_Mobile_Border_radius_Width: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    borderRadiusLink: {
        type: "boolean",
        default: true
    },

    headingBack_padding_units: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    headingBack_Desktop_padding: {
        type: "object",
        default: {
            top: "24",
            bottom: "0",
            left: "32",
            right: "32",
        },
    },
    headingBack_Tab_padding: {
        type: "object",
        default: {
            top: "24",
            bottom: "0",
            left: "32",
            right: "32",
        },
    },
    headingBack_Mobile_padding: {
        type: "object",
        default: {
            top: "24",
            bottom: "0",
            left: "32",
            right: "32",
        },
    },
    paddingLink: {
        type: "boolean",
        default: true
    },
    //Margin
    headingBack_Margin_Units: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    headingBack_Desktop_Margin: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    headingBack_Tab_Margin: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    headingBack_Mobile_Margin: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    headingBack_Margin_Link: {
        type: "boolean",
        default: true
    },

    /** Start Sub Heading Style */
    subHeadingBackGlobalTypographyData: {
        type: "object",
        default: {}
    },
    subHeadingBackGlobalTypoSwitcher: {
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
    subHeadingBackGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    subHeadingBackGlobalTypoOption: {
        type: "object",
        default: { label: 'Default', value: 'default' },
    },
    subHeadingBackFontFamily: {
        type: "string",
        default: "Default",
    },
    subHeadingBackFontSize: {
        type: 'object',
        default: {
            Desktop: '18',
            Tablet: '16',
            Mobile: '16'
        }
    },
    subHeadingBackFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    subHeadingBackFontWeight: {
        type: "string",
        default: ""
    },
    subHeadingBackFontStyle: {
        type: "string",
        default: ""
    },
    subHeadingBackTextTransform: {
        type: "string",
        default: ""
    },
    subHeadingBackTextDecoration: {
        type: "string",
        default: ""
    },
    subHeadingBackLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    subHeadingBackLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    subHeadingBackLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    subHeadingBackLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    subHeadingBackColorSwitcher: {
        type: "string",
        default: "normal"
    },
    subHeadingBackColor: {
        type: "string",
        default: "#FFFBF5"
    },
    subHeadingBackHoverColor: {
        type: "string",
        default: ""
    },
    subHeadingBack_Text: {
        type: "string",
        default: "Contrary to popular belief, Lorem Ipsum is not simply random text." +
            " It has roots in a piece of classical Latin"
    },
    subHeadingBack_Tag: {
        type: "string",
        default: "p"
    },
    descSwitcherBack: {
        type: "boolean",
        default: true,
    },
    titleSwitcherBack: {
        type: "boolean",
        default: true,
    },
    subHeadingBack_Position: {
        type: "string",
        default: "bottom",
    },
    subHeadingBackPaddingUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    subHeadingBackDesktopPadding: {
        type: "object",
        default: {
            top: '32',
            bottom: '32',
            left: '32',
            right: '32',
        },
    },
    subHeadingBackTabPadding: {
        type: "object",
        default: {
            top: '32',
            bottom: '32',
            left: '32',
            right: '32',
        },
    },
    subHeadingBackMobilePadding: {
        type: "object",
        default: {
            top: '24',
            bottom: '24',
            left: '0',
            right: '0',
        },
    },
    subHeadingBackPaddingLink: {
        type: "boolean",
        default: true
    },

    //Margin
    descBackMarginUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    descBackDesktopMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    descBackTabMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    descBackMobileMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    descBackMarginLink: {
        type: "boolean",
        default: true
    },

    //Flip Back Button
    flipBack_Button_Text: {
        type: "string",
        default: "Read More"
    },
    flipBack_Button_Switcher: {
        type: "boolean",
        default: true,
    },
    buttonIconSwitcherBack: {
        type: "boolean",
        default: true,
    },
    flipBackButtonLink: {
        type: "string",
        default: ""
    },
    flipBackbtnTargetUrl: {
        type: "boolean",
    },
    flipBackButtonPaddingUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipBackButtonDesktopPadding: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBackButtonTabPadding: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBackButtonMobilePadding: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBackButtonPaddingLink: {
        type: "boolean",
        default: true
    },

    //Button Margin
    flipBackButtonMarginUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipBackButtonDesktopMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBackButtonTabMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBackButtonMobileMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBackButtonMarginLink: {
        type: "boolean",
        default: true
    },

    //flipBack Button Border
    flipBackButtonBorderColorSwitcher: {
        type: "string",
        default: "normal"
    },
    flipBackButtonBorder: {
        type: 'string',
        default: "none",
    },
    flipBackButtonBorderColor: {
        type: 'string',
    },
    flipBackButtonHoverBorderColor: {
        type: 'string',
    },
    flipBackButtonBorderUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipBackButtonDesktopBorderWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBackButtonTabBorderWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBackButtonMobileBorderWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBackButtonBorderLink: {
        type: "boolean",
        default: true
    },

    //Button Border Radius
    flipBackBtnBorderradiusUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipBackBtnDesktopBorderradiusWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBackBtnTabBorderradiusWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBackBtnMobileBorderradiusWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    btnBackBorderRadiusLink: {
        type: "boolean",
        default: true
    },
    //flipBack box padding
    flipBackBoxPaddingUnits: {
        type: "string",
        default: "px"
    },
    flipBackBoxDesktopPadding: {
        type: "object",
        default: {
            top: '40',
            bottom: '40',
            left: '40',
            right: '40',
        },
    },
    flipBackBoxTabPadding: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBackBoxMobilePadding: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    // flipBack box margin
    flipBackBoxMarginUnits: {
        type: "string",
        default: "px"
    },
    flipBackBoxDesktopMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBackBoxTabMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBackBoxMobileMargin: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBackBoxActiveMarginDevice: {
        type: "string",
        default: "desktop"
    },
    flipBackBoxMarginLink: {
        type: "boolean",
        default: true
    },
    // flipBack Box Border
    flipBackBoxBorder: {
        type: 'string',
        default: "none",
    },
    flipBackBoxBorderColor: {
        type: 'string',
    },
    flipBackBoxBorderHoverColor: {
        type: 'string',
    },
    flipBackBoxBorderColorSwitcher: {
        type: "string",
        default: "normal"
    },
    flipBackBoxBorderUnits: {
        type: "string",
        default: "px"
    },
    flipBackBoxDesktopBorderWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBackBoxTabBorderWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBackBoxMobileBorderWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    // 	flipBack Box Border Radius
    flipBackBoxBorderRadiusUnits: {
        type: "string",
        default: "px"
    },
    flipBackBoxDesktopBorderRadiusWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBackBoxTabBorderRadiusWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBackBoxMobileBorderRadiusWidth: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    // Button
    buttonBackGlobalTypographyData: {
        type: "object",
        default: {}
    },
    buttonBackGlobalTypoSwitcher: {
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
    buttonBackGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    buttonBackGlobalTypoOption: {
        type: "object",
        default: { label: 'Default', value: 'default' },
    },
    buttonBackFontFamily: {
        type: "string",
        default: "Default",
    },
    buttonBackFontSize: {
        type: 'object',
        default: {
            Desktop: '18',
            Tablet: '16',
            Mobile: '16'
        }
    },
    buttonBackFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    buttonBackFontWeight: {
        type: "string",
        default: "400"
    },
    buttonBackFontStyle: {
        type: "string",
        default: "normal"
    },
    buttonBackTextTransform: {
        type: "string",
        default: "none"
    },
    buttonBackTextDecoration: {
        type: "string",
        default: "none"
    },
    buttonBackLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    buttonBackLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    buttonBackLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    buttonBackLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    // Button Color
    buttonBackColorSwitcher: {
        type: "string",
        default: "normal"
    },
    buttonBackTextColor: {
        type: "string",
        default: '#FFFFFF'
    },
    buttonBackTextHoverColor: {
        type: "string",
        default: ""
    },
    buttonBackBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    buttonBackBgColor: {
        type: "string",
        default: ''
    },
    buttonBackBgHoverColor: {
        type: "string"
    },
    globalZIndex: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: '',
        }
    },
    flipBackBoxOverflow: {
        type: 'string',
        default: "default",
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
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    globalPaddingTablet: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    globalPaddingMobile: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    globalPaddingLink: {
        type: "boolean",
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
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    globalMarginTablet: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    globalMarginMobile: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    globalMarginLink: {
        type: "boolean",
        default: true
    },
    globalBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    globalBgColor: {
        type: "string",
        default: ""
    },
    globalBgHoverColor: {
        type: "string",
        default: ""
    },
    globalBorder: {
        type: 'string',
        default: "none",
    },
    globalBorderColorSwitcher: {
        type: "string",
        default: "normal"
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
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    globalBorderTablet: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    globalBorderMobile: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    globalBorderLink: {
        type: "boolean",
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
        type: "object",
        default: {
            top: '6',
            bottom: '6',
            left: '6',
            right: '6',
        },
    },
    globalBorderRadiusTablet: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    globalBorderRadiusMobile: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    globalBorderRadiusLink: {
        type: "boolean",
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
        type: "object",
        default: {
            top: '15',
            bottom: '15',
            left: '15',
            right: '15',
        },
    },
    mediaPaddingTablet: {
        type: "object",
        default: {
            top: '15',
            bottom: '15',
            left: '15',
            right: '15',
        },
    },
    mediaPaddingMobile: {
        type: "object",
        default: {
            top: '15',
            bottom: '15',
            left: '15',
            right: '15',
        },
    },
    mediaPaddingLink: {
        type: "boolean",
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
        type: "object",
        default: {
            top: '0',
            bottom: '24',
            left: '0',
            right: '0',
        },
    },
    mediaMarginTablet: {
        type: "object",
        default: {
            top: '0',
            bottom: '20',
            left: '0',
            right: '0',
        },
    },
    mediaMarginMobile: {
        type: "object",
        default: {
            top: '0',
            bottom: '16',
            left: '0',
            right: '0',
        },
    },
    mediaMarginLink: {
        type: "boolean",
        default: true
    },
    mediaBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    mediaBgColor: {
        type: "string",
        default: "#399CFF"
    },
    bgType: {
        type: "string",
        default: "color",
    },
    mediaBgHoverColor: {
        type: "string",
        default: "#ffffff"
    },
    mediaBorder: {
        type: "string",
        default: "none",
    },
    mediaBorderColorSwitcher: {
        type: "string",
        default: "normal"
    },
    mediaBorderColor: {
        type: "string",
    },
    mediaBorderHoverColor: {
        type: "string",
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
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    mediaBorderTablet: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    mediaBorderMobile: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    mediaBorderLink: {
        type: "boolean",
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
        type: "object",
        default: {
            top: '50',
            bottom: '50',
            left: '50',
            right: '50',
        },
    },
    mediaBorderRadiusTablet: {
        type: "object",
        default: {
            top: '50',
            bottom: '50',
            left: '50',
            right: '50',
        },
    },
    mediaBorderRadiusMobile: {
        type: "object",
        default: {
            top: '50',
            bottom: '50',
            left: '50',
            right: '50',
        },
    },
    mediaBorderRadiusLink: {
        type: "boolean",
        default: true
    },
    //Flip box Front dimensions
    flipBoxFrontPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipBoxFrontPaddingDesktop: {
        type: "object",
        default: {
            top: '32',
            bottom: '32',
            left: '32',
            right: '32',
        },
    },
    flipBoxFrontPaddingTablet: {
        type: "object",
        default: {
            top: '32',
            bottom: '32',
            left: '32',
            right: '32',
        },
    },
    flipBoxFrontPaddingMobile: {
        type: "object",
        default: {
            top: '24',
            bottom: '24',
            left: '24',
            right: '24',
        },
    },
    flipBoxFrontPaddingLink: {
        type: "boolean",
        default: true
    },
    flipBoxFrontMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipBoxFrontMarginDesktop: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBoxFrontMarginTablet: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBoxFrontMarginMobile: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBoxFrontMarginLink: {
        type: "boolean",
        default: true
    },
    flipBoxFrontBorder: {
        type: "string",
        default: "none",
    },
    flipBoxFrontBorderColorSwitcher: {
        type: "string",
        default: "normal"
    },
    flipBoxFrontBorderColor: {
        type: "string",
    },
    flipBoxFrontBorderHoverColor: {
        type: "string",
    },
    flipBoxFrontBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipBoxFrontBorderDesktop: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    flipBoxFrontBorderTablet: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    flipBoxFrontBorderMobile: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    flipBoxFrontBorderLink: {
        type: "boolean",
        default: true
    },
    flipBoxFrontBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipBoxFrontBorderRadiusDesktop: {
        type: "object",
        default: {
            top: '24',
            bottom: '24',
            left: '24',
            right: '24',
        },
    },
    flipBoxFrontBorderRadiusTablet: {
        type: "object",
        default: {
            top: '24',
            bottom: '24',
            left: '24',
            right: '24',
        },
    },
    flipBoxFrontBorderRadiusMobile: {
        type: "object",
        default: {
            top: '24',
            bottom: '24',
            left: '24',
            right: '24',
        },
    },
    flipBoxFrontBorderRadiusLink: {
        type: "boolean",
        default: true
    },
    //Flip Box Back Dimensions
    flipBoxBackPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipBoxBackPaddingDesktop: {
        type: "object",
        default: {
            top: '32',
            bottom: '32',
            left: '32',
            right: '32',
        },
    },
    flipBoxBackPaddingTablet: {
        type: "object",
        default: {
            top: '32',
            bottom: '32',
            left: '32',
            right: '32',
        },
    },
    flipBoxBackPaddingMobile: {
        type: "object",
        default: {
            top: '24',
            bottom: '24',
            left: '24',
            right: '24',
        },
    },
    flipBoxBackPaddingLink: {
        type: "boolean",
        default: true
    },
    flipBoxBackMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipBoxBackMarginDesktop: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBoxBackMarginTablet: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBoxBackMarginMobile: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    flipBoxBackMarginLink: {
        type: "boolean",
        default: true
    },
    flipBoxBackBorder: {
        type: "string",
        default: "none",
    },
    flipBoxBackBorderColorSwitcher: {
        type: "string",
        default: "normal"
    },
    flipBoxBackBorderColor: {
        type: "string",
    },
    flipBoxBackBorderHoverColor: {
        type: "string",
    },
    flipBoxBackBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipBoxBackBorderDesktop: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    flipBoxBackBorderTablet: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    flipBoxBackBorderMobile: {
        type: "object",
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    flipBoxBackBorderLink: {
        type: "boolean",
        default: true
    },
    flipBoxBackBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    flipBoxBackBorderRadiusDesktop: {
        type: "object",
        default: {
            top: '24',
            bottom: '24',
            left: '24',
            right: '24',
        },
    },
    flipBoxBackBorderRadiusTablet: {
        type: "object",
        default: {
            top: '24',
            bottom: '24',
            left: '24',
            right: '24',
        },
    },
    flipBoxBackBorderRadiusMobile: {
        type: "object",
        default: {
            top: '24',
            bottom: '24',
            left: '24',
            right: '24',
        },
    },
    flipBoxBackBorderRadiusLink: {
        type: "boolean",
        default: true
    },

    flipBackMediaBackgroundImageUrl: {
        type: "string",
    },
    flipBackMediaBackgroundImageAlt: {
        type: "string",
    },
    flipBackMediaBackgroundImageID: {
        type: "number",
    },
    boxGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    boxGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    boxGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    boxGlobalHoverBoxShadowValues: {
        type: 'array',
        default: [],
    },
    boxGlobalHoverBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    mediaBackColorSwitcher: {
        type: "string",
        default: "normal"
    },
    /* Media Back Side */
    mediaBackBackgroundType: {
        type: "string",
        default: "classic"
    },
    mediaBackClassicColor: {
        type: "string",
        default: "#FFFFFF"
    },
    mediaBackGradientColor: {
        type: "string",
    },
    mediaBackCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    mediaBackCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    mediaBackBackgroundColorStyle: {
        type: "string",
        default: ""
    },
    mediaBackBackgroundImageUrl: {
        type: "string",
        default: ""
    },
    mediaBackBackgroundImageAlt: {
        type: "string",
        default: ""
    },
    mediaBackBackgroundImageID: {
        type: "string",
        default: ""
    },
    mediaBackBackgroundImagePosition: {
        type: "string",
        default: ""
    },
    mediaBackBackgroundImageAttachment: {
        type: "string",
        default: ""
    },
    mediaBackBackgroundImageSize: {
        type: "string",
        default: ""
    },
    mediaBackBackgroundImageRepeat: {
        type: "string",
        default: ""
    },
    mediaBackHoverBackgroundType: {
        type: "string",
        default: "classic"
    },
    mediaBackHoverClassicColor: {
        type: "string",
        default: ""
    },
    mediaBackHoverGradientColor: {
        type: "string",
    },
    mediaBackHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    mediaBackHoverCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    mediaBackHoverBackgroundColorStyle: {
        type: "string",
        default: ""
    },
    mediaBackHoverBackgroundImageUrl: {
        type: "string",
        default: ""
    },
    mediaBackHoverBackgroundImageAlt: {
        type: "string",
        default: ""
    },
    mediaBackHoverBackgroundImageID: {
        type: "string",
        default: ""
    },
    mediaBackHoverBackgroundImagePosition: {
        type: "string",
        default: ""
    },
    mediaBackHoverBackgroundImageAttachment: {
        type: "string",
        default: ""
    },
    mediaBackHoverBackgroundImageSize: {
        type: "string",
        default: ""
    },
    mediaBackHoverBackgroundImageRepeat: {
        type: "string",
        default: ""
    },

    blockStyle: {
        type: "string",
        default: "",
    },

    flipBackBoxDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    flipBackBoxTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    flipBackBoxMobileSwitcher: {
        type: "boolean",
        default: false,
    },

    /** Start Class & ID Setting */
    flipBackBoxGlobalCustomCSS: {
        type: "string",
        default: "",
    },
    flipBackBoxGlobalWraperID: {
        type: "string",
        default: ""
    },

    flipBackBoxGlobalWraperClass: {
        type: "string",
        default: ""
    },

    /** End Class & ID Setting */

    flipBackBoxPositionType: {
        type: "string",
        default: "default"
    },
    flipBackBoxHZOrientationType: {
        type: "string",
        default: "left"
    },
    flipBackBoxVROrientationType: {
        type: "string",
        default: "top"
    },
    flipBackBoxHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    flipBackBoxHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    flipBackBoxHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    flipBackBoxHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    flipBackBoxVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    flipBackBoxVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    flipBackBoxVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    flipBackBoxVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
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
	/** End Dynamic Title Text */

	/** Start Dynamic Description Text */
	dynamicDescriptionEnabled : {
		type: 'boolean',
		default: false
	},
	dynamicDescriptionSource: {
		type: 'string',
		default: 'current_post'
	},
	dynamicDescriptionPostId: {
		type: 'number',
		default: 0
	},
	dynamicDescriptionPostType: {
		type: 'string',
		default: ''
	},
	dynamicDescriptionPostLabel: {
		type: 'string',
		default: ''
	},
	dynamicDescriptionField: {
		type: 'string',
		default: 'post_title'
	},
	dynamicDescriptionFeaturedImageField:{
		type: 'string',
		default: 'title'
	},
	dynamicDescriptionDateType: {
		type: 'string',
		default: 'published'
	},
	dynamicDescriptionDateFormat: {
		type: 'string',
		default: 'default'
	},
	dynamicDescriptionTimeType: {
		type: 'string',
		default: 'published'
	},
	dynamicDescriptionTimeFormat: {
		type: 'string',
		default: 'default'
	},
	dynamicDescriptionCommentsZeroText: {
		type: 'string',
		default: 'No Response',
	},
	dynamicDescriptionCommentsOneText: {
		type: 'string',
		default: 'One Response',
	},
	dynamicDescriptionCommentsManyText: {
		type: 'string',
		default: '{num} Response',
	},   
	dynamicDescriptionTermsTaxonomy: {
		type: 'string',
		default: 'category',
	},
	dynamicDescriptionTermsSeparator: {
		type: 'string',
		default: ', ',
	},
	dynamicDescriptionEnableLink: {
		type: 'boolean',
		default: false
	},
	dynamicDescriptionLinkSource: {
		type: 'string',
		default: 'post_permalink',
	},
	/** End Dynamic Description Text */

	/** Start Dynamic btn Text */
	dynamicBtnEnabled : {
		type: 'boolean',
		default: false
	},
	dynamicBtnSource: {
		type: 'string',
		default: 'current_post'
	},
	dynamicBtnPostId: {
		type: 'number',
		default: 0
	},
	dynamicBtnPostType: {
		type: 'string',
		default: ''
	},
	dynamicBtnPostLabel: {
		type: 'string',
		default: ''
	},
	dynamicBtnField: {
		type: 'string',
		default: 'post_title'
	},
	dynamicBtnFeaturedImageField:{
		type: 'string',
		default: 'title'
	},
	dynamicBtnDateType: {
		type: 'string',
		default: 'published'
	},
	dynamicBtnDateFormat: {
		type: 'string',
		default: 'default'
	},
	dynamicBtnTimeType: {
		type: 'string',
		default: 'published'
	},
	dynamicBtnTimeFormat: {
		type: 'string',
		default: 'default'
	},
	dynamicBtnCommentsZeroText: {
		type: 'string',
		default: 'No Response',
	},
	dynamicBtnCommentsOneText: {
		type: 'string',
		default: 'One Response',
	},
	dynamicBtnCommentsManyText: {
		type: 'string',
		default: '{num} Response',
	},   
	dynamicBtnTermsTaxonomy: {
		type: 'string',
		default: 'category',
	},
	dynamicBtnTermsSeparator: {
		type: 'string',
		default: ', ',
	},
	dynamicBtnEnableLink: { 
		type: 'boolean',
		default: false
	},
	dynamicBtnLinkSource: {
		type: 'string',
		default: 'post_permalink',
	},
	/** End Dynamic btn Text */


    /** Start Dynamic Back Title Text */
	dynamicBackTitleEnabled : {
		type: 'boolean',
		default: false
	},
	dynamicBackTitleSource: {
		type: 'string',
		default: 'current_post'
	},
	dynamicBackTitlePostId: {
		type: 'number',
		default: 0
	},
	dynamicBackTitlePostType: {
		type: 'string',
		default: ''
	},
	dynamicBackTitlePostLabel: {
		type: 'string',
		default: ''
	},
	dynamicBackTitleField: {
		type: 'string',
		default: 'post_title'
	},
	dynamicBackTitleFeaturedImageField:{
		type: 'string',
		default: 'title'
	},
	dynamicBackTitleDateType: {
		type: 'string',
		default: 'published'
	},
	dynamicBackTitleDateFormat: {
		type: 'string',
		default: 'default'
	},
	dynamicBackTitleTimeType: {
		type: 'string',
		default: 'published'
	},
	dynamicBackTitleTimeFormat: {
		type: 'string',
		default: 'default'
	},
	dynamicBackTitleCommentsZeroText: {
		type: 'string',
		default: 'No Response',
	},
	dynamicBackTitleCommentsOneText: {
		type: 'string',
		default: 'One Response',
	},
	dynamicBackTitleCommentsManyText: {
		type: 'string',
		default: '{num} Response',
	},   
	dynamicBackTitleTermsTaxonomy: {
		type: 'string',
		default: 'category',
	},
	dynamicBackTitleTermsSeparator: {
		type: 'string',
		default: ', ',
	},
	dynamicBackTitleEnableLink: {
		type: 'boolean',
		default: false
	},
	dynamicBackTitleLinkSource: {
		type: 'string',
		default: 'post_permalink',
	},
	/** End Dynamic Back Title Text */

	/** Start Dynamic Back Description Text */
	dynamicBackDescriptionEnabled : {
		type: 'boolean',
		default: false
	},
	dynamicBackDescriptionSource: {
		type: 'string',
		default: 'current_post'
	},
	dynamicBackDescriptionPostId: {
		type: 'number',
		default: 0
	},
	dynamicBackDescriptionPostType: {
		type: 'string',
		default: ''
	},
	dynamicBackDescriptionPostLabel: {
		type: 'string',
		default: ''
	},
	dynamicBackDescriptionField: {
		type: 'string',
		default: 'post_title'
	},
	dynamicBackDescriptionFeaturedImageField:{
		type: 'string',
		default: 'title'
	},
	dynamicBackDescriptionDateType: {
		type: 'string',
		default: 'published'
	},
	dynamicBackDescriptionDateFormat: {
		type: 'string',
		default: 'default'
	},
	dynamicBackDescriptionTimeType: {
		type: 'string',
		default: 'published'
	},
	dynamicBackDescriptionTimeFormat: {
		type: 'string',
		default: 'default'
	},
	dynamicBackDescriptionCommentsZeroText: {
		type: 'string',
		default: 'No Response',
	},
	dynamicBackDescriptionCommentsOneText: {
		type: 'string',
		default: 'One Response',
	},
	dynamicBackDescriptionCommentsManyText: {
		type: 'string',
		default: '{num} Response',
	},   
	dynamicBackDescriptionTermsTaxonomy: {
		type: 'string',
		default: 'category',
	},
	dynamicBackDescriptionTermsSeparator: {
		type: 'string',
		default: ', ',
	},
	dynamicBackDescriptionEnableLink: {
		type: 'boolean',
		default: false
	},
	dynamicBackDescriptionLinkSource: {
		type: 'string',
		default: 'post_permalink',
	},
	/** End Dynamic Back Description Text */

	/** Start Dynamic Back btn Text */
	dynamicBackBtnEnabled : {
		type: 'boolean',
		default: false
	},
	dynamicBackBtnSource: {
		type: 'string',
		default: 'current_post'
	},
	dynamicBackBtnPostId: {
		type: 'number',
		default: 0
	},
	dynamicBackBtnPostType: {
		type: 'string',
		default: ''
	},
	dynamicBackBtnPostLabel: {
		type: 'string',
		default: ''
	},
	dynamicBackBtnField: {
		type: 'string',
		default: 'post_title'
	},
	dynamicBackBtnFeaturedImageField:{
		type: 'string',
		default: 'title'
	},
	dynamicBackBtnDateType: {
		type: 'string',
		default: 'published'
	},
	dynamicBackBtnDateFormat: {
		type: 'string',
		default: 'default'
	},
	dynamicBackBtnTimeType: {
		type: 'string',
		default: 'published'
	},
	dynamicBackBtnTimeFormat: {
		type: 'string',
		default: 'default'
	},
	dynamicBackBtnCommentsZeroText: {
		type: 'string',
		default: 'No Response',
	},
	dynamicBackBtnCommentsOneText: {
		type: 'string',
		default: 'One Response',
	},
	dynamicBackBtnCommentsManyText: {
		type: 'string',
		default: '{num} Response',
	},   
	dynamicBackBtnTermsTaxonomy: {
		type: 'string',
		default: 'category',
	},
	dynamicBackBtnTermsSeparator: {
		type: 'string',
		default: ', ',
	},
	dynamicBackBtnEnableLink: { 
		type: 'boolean',
		default: false
	},
	dynamicBackBtnLinkSource: {
		type: 'string',
		default: 'post_permalink',
	},
	/** End Dynamic Back btn Text */
}
//
export default attributes;
