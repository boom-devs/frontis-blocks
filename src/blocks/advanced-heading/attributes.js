import { separator } from '@wordpress/icons';

const attributes = {
    blockID: {
        type: 'string',
        default: ''
    },

    headingAlignment: {
        type: 'object',
        default: {
            Desktop: 'left',
            Tablet: '',
            Mobile: '',
        },
    },

    headingText: {
        type : 'string',
        default: 'Advanced Heading'
    },
	dynamicAttrs: {
		type: 'object',
		default: {
			dataSource: '',
			selectPost: '',
			sourceField: '',
		}
	},

    headingTag: {
        type : 'string',
        default: 'h2'
    },
    highlightColor: {
        type: 'string',
        default: '',
    },
    hoverHighlightColor: {
        type: 'string',
        default: '',
    },

    /** Start Dynamic Text */
    dynamicTextEnabled : {
        type: 'boolean',
        default: false
    },
    dynamicTextSource: {
        type: 'string',
        default: 'current_post'
    },
    dynamicTextPostId: {
        type: 'number',
        default: 0
    },
    dynamicTextPostType: {
        type: 'string',
        default: ''
    },
    dynamicTextPostLabel: {
        type: 'string',
        default: ''
    },
    dynamicTextField: {
        type: 'string',
        default: 'post_title'
    },
    dynamicFeaturedImageField:{
        type: 'string',
        default: 'title'
    },
    dynamicTextDateType: {
        type: 'string',
        default: 'published'
    },
    dynamicTextDateFormat: {
        type: 'string',
        default: 'default'
    },
    dynamicTextTimeType: {
        type: 'string',
        default: 'published'
    },
    dynamicTextTimeFormat: {
        type: 'string',
        default: 'default'
    },
    dynamicTextCommentsZeroText: {
        type: 'string',
        default: 'No Response',
    },
    dynamicTextCommentsOneText: {
        type: 'string',
        default: 'One Response',
    },
    dynamicTextCommentsManyText: {
        type: 'string',
        default: '{num} Response',
    },   
    dynamicTextTermsTaxonomy: {
        type: 'string',
        default: 'category',
    },
    dynamicTextTermsSeparator: {
        type: 'string',
        default: ', ',
    },
    dynamicTextEnableLink: {
        type: 'boolean',
        default: false
    },
    dynamicTextLinkSource: {
        type: 'string',
        default: 'post_permalink',
    },
    /** End Dynamic Text */

    /** Start Dynamic Sub Heading Text */
    dynamicSubHeadingTextEnabled : {
        type: 'boolean',
        default: false
    },
    dynamicSubHeadingTextSource: {
        type: 'string',
        default: 'current_post'
    },
    dynamicSubHeadingTextPostId: {
        type: 'number',
        default: 0
    },
    dynamicSubHeadingTextPostType: {
        type: 'string',
        default: ''
    },
    dynamicSubHeadingTextPostLabel: {
        type: 'string',
        default: ''
    },
    dynamicSubHeadingTextField: {
        type: 'string',
        default: 'post_title'
    },
    dynamicSubHeadingFeaturedImageField:{
        type: 'string',
        default: 'title'
    },
    dynamicSubHeadingTextDateType: {
        type: 'string',
        default: 'published'
    },
    dynamicSubHeadingTextDateFormat: {
        type: 'string',
        default: 'default'
    },
    dynamicSubHeadingTextTimeType: {
        type: 'string',
        default: 'published'
    },
    dynamicSubHeadingTextTimeFormat: {
        type: 'string',
        default: 'default'
    },
    dynamicSubHeadingTextCommentsZeroText: {
        type: 'string',
        default: 'No Response',
    },
    dynamicSubHeadingTextCommentsOneText: {
        type: 'string',
        default: 'One Response',
    },
    dynamicSubHeadingTextCommentsManyText: {
        type: 'string',
        default: '{num} Response',
    },   
    dynamicSubHeadingTextTermsTaxonomy: {
        type: 'string',
        default: 'category',
    },
    dynamicSubHeadingTextTermsSeparator: {
        type: 'string',
        default: ', ',
    },
    dynamicSubHeadingTextEnableLink: {
        type: 'boolean',
        default: false
    },
    dynamicSubHeadingTextLinkSource: {
        type: 'string',
        default: 'post_permalink',
    },
    /** End Dynamic Sub Heading Text */


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
			Desktop: '',
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
        default: 'none'
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
    headingTextColorTypeSwitcher: {
        type: 'string',
        default: 'normal',
    },
    headingTextColorType: {
        type: 'string',
        default: 'classic',
    },
    headingTextHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    headingTextShadowValues: {
        type: 'array',
        default: [],
    },
    headingTextShadowCssValue: {
        type: 'string',
        default: '',
    },
    headingTextStroke: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    headingTextStrokeColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    headingTextStrokeColor: {
        type: 'string',
        default: '#399CFF',
    },
    headingTextStrokeHoverColor: {
        type: 'string',
        default: '',
    },

    headingHighlightColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    headingHighlightColor: {
        type: 'string',
    },
    headingHighlightHoverColor: {
        type: 'string',
    },

    headingColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    headingColor : {
        type: 'string'
    },
    headingHoverColor: {
        type: 'string',
    },
    headingTextGradientColor: {
        type: 'string',
        default: null
    },
    headingTextHoverGradientColor: {
        type: 'string',
        default: null
    },
    headingTextCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    headingTextCustomGradientColor: {
        type: 'string',
        default: ''
    },
    headingTextHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    headingTextHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },

    headingBgColorTypeSwitcher: {
        type: 'string',
        default: 'normal'
    },
    headingBgColorType: {
        type: 'string',
        default: 'classic',
    },
    headingBgHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    headingBgColor: {
        type: 'string',
    },
    headingBgHoverColor: {
        type: 'string',
    },
    headingBgGradientColor: {
        type: 'string',
        default: null
    },
    headingBgHoverGradientColor: {
        type: 'string',
        default: null
    },
    headingBgCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    headingBgCustomGradientColor: {
        type: 'string',
        default: ''
    },
    headingBgHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    headingBgHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },

    /** End Heading Style */

    /** Start Heading Border */
    headingBorder: {
        type: 'string',
        default: 'none',
    },
    headingBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    headingBorderColor: {
        type: 'string',
    },
    headingBorderHoverColor: {
        type: 'string',
    },
    headingBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
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
    headingTabletBorder: {
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
    headingBorderLink : {
        type : 'boolean',
        default: true
    },
    headingBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    headingDesktopBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    headingTabBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    headingMobileBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    headingBorderRadiusLink : {
        type : 'boolean',
        default: true
    },
    /** End Heading Border */

    /** Start Heading Box Shadow */
    headingBoxShadowValues: {
        type: 'array',
        default: [],
    },
    headingBoxShadowCssValue: {
        type: 'string',
        default: '',
    },

    headingPaddingUnits: {
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
            top: '',
            bottom: '',
            left: '',
            right: '',
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
    headingMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    headingDesktopMargin: {
        type: 'object',
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
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
    headingMarginLink : {
        type : 'boolean',
        default: true
    },
    /** End Heading Style */

    /** Start Sub Heading */
    subHeadingText: {
        type: 'string',
        default: 'Advanced Sub Heading'
    },
    subHeadingTag: {
        type : 'string',
        default: 'p'
    },
    subHeadingSwitcher: {
        type: 'boolean',
        default: false,
    },
    subHeadingPosition: {
        type: 'string',
        default: 'bottom',
    },

    /** Start Sub Heading Style */
    subHeadingGlobalTypographyData: {
        type: 'object',
        default: {}
    },
    subHeadingGlobalTypoSwitcher: {
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
    subHeadingGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    subHeadingGlobalTypoOption: {
        type: 'object',
        default: {label: 'Default', value: 'default'},
    },
    subHeadingFontFamily: {
        type: 'string',
        default: 'Default',
    },
    subHeadingFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
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
        type: 'string',
        default: ''
    },
    subHeadingFontStyle: {
        type: 'string',
        default: ''
    },
    subHeadingTextTransform: {
        type: 'string',
        default: ''
    },
    subHeadingTextDecoration: {
        type: 'string',
        default: 'none'
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
    subHeadingTextShadowValues: {
        type: 'array',
        default: [],
    },
    subHeadingTextShadowCssValue: {
        type: 'string',
        default: '',
    },
    subHeadingTextStroke: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    subHeadingTextStrokeColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    subHeadingTextStrokeColor: {
        type: 'string',
        default: '',
    },
    subHeadingTextStrokeHoverColor: {
        type: 'string',
        default: '',
    },

    subHeadingTextColorTypeSwitcher: {
        type: 'string',
        default: 'normal'
    },
    subHeadingTextColorType: {
        type: 'string',
        default: 'classic',
    },
    subHeadingTextHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    subHeadingColor: {
        type: 'string',
    },
    subHeadingHoverColor: {
        type: 'string',
    },
    subHeadingTextGradientColor: {
        type: 'string',
        default: null
    },
    subHeadingTextHoverGradientColor: {
        type: 'string',
        default: null
    },
    subHeadingTextCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    subHeadingTextCustomGradientColor: {
        type: 'string',
        default: ''
    },
    subHeadingTextHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    subHeadingTextHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },

    subHeadingBgColorTypeSwitcher: {
        type: 'string',
        default: 'normal'
    },
    subHeadingBgColorType: {
        type: 'string',
        default: 'classic',
    },
    subHeadingBgHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    subHeadingBgColor: {
        type: 'string',
    },
    subHeadingBgHoverColor: {
        type: 'string',
    },
    subHeadingBgGradientColor: {
        type: 'string',
        default: null
    },
    subHeadingBgHoverGradientColor: {
        type: 'string',
        default: null
    },
    subHeadingBgCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    subHeadingBgCustomGradientColor: {
        type: 'string',
        default: ''
    },
    subHeadingBgHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    subHeadingBgHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },


    /** Start Sub Heading Border */
    subHeadingBorder: {
        type: 'string',
        default: 'none',
    },
    subHeadingBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    subHeadingBorderColor: {
        type: 'string',
    },
    subHeadingBorderHoverColor: {
        type: 'string',
    },
    subHeadingBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    subHeadingDesktopBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    subHeadingTabBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    subHeadingMobileBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    subHeadingBorderLink : {
        type : 'boolean',
        default: true
    },
    subHeadingBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    subHeadingDesktopBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    subHeadingTabBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    subHeadingMobileBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    subHeadingBorderRadiusLink : {
        type : 'boolean',
        default: true
    },
    /** End Sub Heading Border */

    /** Start Sub Heading Box Shadow */
    subHeadingBoxShadowValues: {
        type: 'array',
        default: [],
    },
    subHeadingBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    /** End Sub Heading Box Shadow */

    /** Start Sub Heading Spacing */
    subHeadingPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    subHeadingDesktopPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    subHeadingTabPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    subHeadingMobilePadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    subHeadingPaddingLink : {
        type : 'boolean',
        default: true
    },
    subHeadingMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    subHeadingDesktopMargin: {
        type: 'object',
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    subHeadingTabMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    subHeadingMobileMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    subHeadingMarginLink : {
        type : 'boolean',
        default: true
    },
    /** End Sub Heading Spacing */
    /** End Sub Heading Style */

    separator: {
        type: 'string',
        default: 'solid',
    },
    showSeparatorSwitcher: {
        type: 'boolean',
        default: false,
    },
    separatorPosition: {
        type: 'string',
        default: 'bottom',
    },
    separatorColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    separatorColor: {
        type: 'string',
        default: '#399CFF',
    },
    separatorHoverColor: {
        type: 'string',
        default: '',
    },
    separatorWidth: {
        type: 'object',
        default: {
            Desktop: '100',
            Tablet: '',
            Mobile: ''
        }
    },
    separatorWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
    separatorHeight: {
        type: 'object',
        default: {
            Desktop: '2',
            Tablet: '',
            Mobile: ''
        }
    },
	separatorHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    separatorSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    separatorSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},


    /** Start Icon */
    headingIconSwitcher: {
        type: 'boolean',
        default: false,
    },
    headingIconAlign: {
        type: 'string',
        default: 'icon',
    },
    headingIcon: {
		type: 'string',
		default: 'bookmark',
	},
    headingIconFrontend:{
        type: 'string',
    },
    headingIconSize: {
        type: 'object',
        default: {
            Desktop: '30',
            Tablet: '',
            Mobile: ''
        }
    },
    headingIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    headingIconBgSize: {
        type: 'object',
        default: {
            Desktop: '50',
            Tablet: '',
            Mobile: ''
        }
    },
    headingIconBgSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    headingIconColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    headingIconColor : {
        type: 'string',
        default: '#399CFF',
    },
    headingIconHoverColor: {
        type: 'string',
        default: ''
    },
    headingIconBgColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    headingIconBgColor : {
        type: 'string',
        default: ''
    },
    headingIconBgHoverColor: {
        type: 'string',
        default: ''
    },

    headingIconBorder: {
		type: 'string',
		default: 'none',
	},
	headingIconBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	headingIconBorderColor: {
		type: 'string',
	},
	headingIconBorderHoverColor: {
		type: 'string',
	},
	headingIconBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	headingIconBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingIconBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingIconBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingIconBorderLink : {
		type : 'boolean',
		default: true
	},

    //spacing padding for icon
    headingIconPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    headingIconDesktopPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    headingIconTabletPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    headingIconMobilePadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    headingIconPaddingLink : {
        type : 'boolean',
        default: true
    },
	/** End Border */

	/** Start Border Radius */
	headingIconBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	headingIconBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingIconBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingIconBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingIconBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
    /** End Icon */

	/** Start Global Setting */
	headingGlobalZIndex : {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    advancedHeadingOverflow: {
        type: 'string',
        default: 'default',
    },
    headingGlobalWraperID : {
        type: 'string',
        default: ''
    },

    headingGlobalWraperClass : {
        type: 'string',
        default: ''
    },

	/** Start Padding */
	headingGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	headingGlobalPaddingDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalPaddingTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalPaddingMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalPaddingLink : {
		type : 'boolean',
		default: true
	},
	/** End Padding */

	/** Start Margin */
	headingGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	headingGlobalMarginDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Margin */

	headingGlobalBgColor : {
		type: 'string',
	},
	headingGlobalBgHoverColor: {
		type: 'string',
	},

    /** Start Background Normal for fb heading */
	headingGlobalBgColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	headingGlobalBgNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	headingGlobalBgNormalClassicColor: {
		type: 'string',
		default: '',
	},
	headingGlobalBgNormalGradientColor: {
		type: 'string',
		default: null,
	},
	headingGlobalBgNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	headingGlobalBgNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Bg Normal Image for fb container */
	headingGlobalBgNormalBackgroundImageUrl: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    headingGlobalBgNormalBackgroundImagePosition: {
        type: 'object',
        default: {
            Desktop: { x: '0.5', y: '0.5' },
            Tablet: { x: '', y: '' },
            Mobile: { x: '', y: '' }
        }
    },
    headingGlobalBgNormalBackgroundImageAttachment: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    headingGlobalBgNormalBackgroundImageRepeat: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    headingGlobalBgNormalBackgroundImageSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },


	/**Bg Hover for fb heading */
	headingGlobalBgHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	headingGlobalBgHoverClassicColor: {
		type: 'string',
		default: '',
	},
	headingGlobalBgHoverGradientColor: {
		type: 'string',
		default: null,
	},
	headingGlobalBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	headingGlobalBgHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Hover Image for fb heading */
	headingGlobalBgHoverBackgroundImageUrl: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	headingGlobalBgHoverBackgroundImagePosition: {
		type: 'object',
		default: {
			Desktop: { x: '0.5', y: '0.5' },
			Tablet: { x: '', y: '' },
			Mobile: { x: '', y: '' }
		}
	},
	headingGlobalBgHoverBackgroundImageAttachment: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	headingGlobalBgHoverBackgroundImageRepeat: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	headingGlobalBgHoverBackgroundImageSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	/** End Background for fb heading */





	/** End Background */

	/** Start Border */
	headingGlobalBorder: {
		type: 'string',
		default: 'none',
	},
	headingGlobalBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	headingGlobalBorderColor: {
		type: 'string',
		default: ''
	},
	headingGlobalBorderHoverColor: {
		type: 'string',
	},
	headingGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	headingGlobalBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalBorderLink : {
		type : 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	headingGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	headingGlobalBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
    headingGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	headingGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    headingGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    headingGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    headingGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */


    /** Start Background Image */
    headingBackgroundImageEnabled: {
        type: 'boolean',
        default: false,
    },
    headingBackgroundImageUrl: {
        type: 'string',
    },
    headingBackgroundImageAlt: {
        type: 'string',
    },
    headingBackgroundImageID: {
        type: 'number',
    },
    /** End Background Image */

    headingPresetStyle: {
        type: 'string',
        default: 'preset-1',
    },
    activeLineSwitcher: {
        type: 'boolean',
        default: false,
    },
    activeLineAfterWidth: {
        type: 'object',
        default: {
            Desktop: '100',
            Tablet: '',
            Mobile: ''
        }
    },
    activeLineAfterWidthUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%'
		}
	},
    activeLineAfterHeight: {
        type: 'object',
        default: {
            Desktop: '1',
            Desktop: '2',
            Tablet: '',
            Mobile: ''
        }
    },
    activeLineAfterHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    activeLineAfterColor: {
        type: 'string',
        default: '#B0D7FF',
    },

    activeLineBeforeWidth: {
        type: 'object',
        default: {
            Desktop: '30',
            Tablet: '',
            Mobile: ''
        }
    },
    activeLineBeforeWidthUnits: {
        type: 'object',
        default: {
            Desktop: '%',
            Tablet: '%',
            Mobile: '%'
        }
    },
    activeLineBeforeHeight: {
        type: 'object',
        default: {
            Desktop: '3',
            Tablet: '',
            Mobile: ''
        }
    },
    activeLineBeforeHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    activeLineBeforeColor: {
        type: 'string',
        default: '#399CFF',
    },
    blockStyle: {
        type: 'string',
        default: '',
    },

    advancedHeadingDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    advancedHeadingTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    advancedHeadingMobileSwitcher: {
        type: 'boolean',
        default: false,
    },
    advancedHeadingCustomCSS : {
        type: 'string',
        default: '',
    },

    advancedHeadingPositionType: {
        type: 'string',
        default: 'default'
    },
    advancedHeadingHZOrientationType: {
        type: 'string',
        default: 'left'
    },
    advancedHeadingVROrientationType: {
        type: 'string',
        default: 'top'
    },
    advancedHeadingHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    advancedHeadingHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    advancedHeadingHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    advancedHeadingHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    advancedHeadingVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    advancedHeadingVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    advancedHeadingVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    advancedHeadingVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    /** End Advanced Heading Position */

    /** Start Before After */
    headingBeforeAfterSwitcher: {
        type: 'boolean',
        default: false,
    },

    headingBeforeAfterWidth: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    headingBeforeAfterWidthUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },

    headingBeforeAfterHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    headingBeforeAfterHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },

    headingBeforeAfterGap: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    headingBeforeAfterGapUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    headingBeforeAfterMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    headingBeforeAfterDesktopMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    headingBeforeAfterTabletMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    headingBeforeAfterMobileMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    headingBeforeAfterMarginLink : {
        type : 'boolean',
        default: true
    },

    headingBeforeAfterBorder: {
        type: 'string',
        default: 'none',
    },
    headingBeforeAfterBorderColor: {
        type: 'string',
        default: '',
    },
    headingBeforeAfterBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    headingBeforeAfterDesktopBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    headingBeforeAfterTabletBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    headingBeforeAfterMobileBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    headingBeforeAfterBorderLink : {
        type : 'boolean',
        default: true
    },
    headingBeforeAfterBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    headingBeforeAfterDesktopBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    headingBeforeAfterTabletBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    headingBeforeAfterMobileBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    headingBeforeAfterBorderRadiusLink : {
        type : 'boolean',
        default: true
    },

    /** End Before After */
}
export default attributes;
