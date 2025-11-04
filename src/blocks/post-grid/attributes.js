// attributes.js
const attributes = {
    blockId: {
        type: 'string',
        default: ''
    },
	blockStyle: {
		type: 'string',
		default: ''
	},
	premadeStyle: {
		type: 'string',
		default: 'style-1',
	},
    deviceType: {
        type: 'string',
        default: 'Desktop'
    },
    postType: {
		type: 'string',
		default: 'post'
	},
	postPerPage: {
		type: 'number',
		default: 6
	},

	categoryKey: {
		type: 'string',
		default: 'category'
	},
	tagKey: {
		type: 'string',
		default: ''
	},

	postSwitcher: {
		type: 'string',
		default: 'grid'
	},
	highlightColor: {
		type: 'string',
		default: '',
	},
	hoverHighlightColor: {
		type: 'string',
		default: '',
	},
	/** Start category */
	selectedCatSwitcher: {
		type: 'string',
		default: 'include'
	},
	selectedCat: {
		type: 'array',
		default: []
	},
	deSelectedCat: {
		type: 'array',
		default: []
	},
	/** End category */

	/** Start tag */
	selectedTagSwitcher: {
		type: 'string',
		default: 'include'
	},
	selectedTag: {
		type: 'array',
		default: []
	},
	deSelectedTag: {
		type: 'array',
		default: []
	},
	/** End tag */

	/** Start author */
	selectedAuthorSwitcher: {
		type: 'string',
		default: 'include'
	},
	selectedAuthor: {
		type: 'array',
		default: []
	},
	deSelectedAuthor: {
		type: 'array',
		default: []
	},
	/** End author */

	placeholders: {
		type: 'array',
		default: [1, 2, 3, 4, 5, 6, 7, 8, 9],
	},
	orderBy: {
		type: 'string',
		default: 'date'
	},
	sortOrder: {
		type: 'string',
		default: 'desc'
	},
	gridColumnsPerSection: {
		type: 'object',
		default: {
			Desktop: '3',
			Tablet: '2',
			Mobile: '1'
		}
	},
	gridGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	listGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	gridRowGap: {
		type: 'object',
		default: {
			Desktop: '30',
			Tablet: '',
			Mobile: ''
		}
	},
	gridColumnGap: {
		type: 'object',
		default: {
			Desktop: '30',
			Tablet: '',
			Mobile: ''
		}
	},

	listRowGap: {
		type: 'object',
		default: {
			Desktop: '30',
			Tablet: '',
			Mobile: ''
		}
	},
	listImageSpacing: {
		type: 'object',
		default: {
			Desktop: '40',
			Tablet: '',
			Mobile: ''
		}
	},

	/** Start Post Grid */
	/** Start Padding */
	postGridPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	postGridPaddingDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridPaddingTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridPaddingMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridPaddingLink : {
		type : 'boolean',
		default: true
	},
	/** End Padding */

	/** Start Margin */
	postGridMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	postGridMarginDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridMarginTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridMarginMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Margin */

	/** Start Background */
	postGridBgColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	postGridNormalBackgroundType: {  
		type: 'string',
		default: 'classic',
	},
	postGridNormalClassicColor: {
		type: 'string',
		default: '',
	},
	postGridNormalGradientColor: {
		type: 'string',
		default: null,
	},
	postGridNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	postGridNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	postGridHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	postGridHoverClassicColor: {
		type: 'string',
		default: '',
	},
	postGridHoverGradientColor: {
		type: 'string',
		default: null,
	},
	postGridHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	postGridHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** End Background */

	/** Start Border */
	postGridBorder: {
		type: 'string',
		default: 'none',
	},
	postGridBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	postGridBorderColor: {
		type: 'string',
		default: ''
	},
	postGridBorderHoverColor: {
		type: 'string',
	},
	postGridBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	postGridBorderDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridBorderTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridBorderMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridBorderLink : {
		type : 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	postGridBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	postGridBorderRadiusDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridBorderRadiusTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridBorderRadiusMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
	postGridBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	postGridBoxShadowValues: {
        type: 'array',
        default: [],
    },
    postGridBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
	postGridBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    postGridBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
	/** End Box Shadow */
	/** End Post Grid */

	/** Start Image */
	postImageSize: {
		type: 'string',
		default: 'medium',
	},
	postImageWidth: {
		type: 'object',
		default: {
			Desktop: '100',
			Tablet: '',
			Mobile: ''
		}
	},
	postImageWidthUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%'
		}
	},
	postImageHeight: {
		type: 'object',
		default: {
			Desktop: '400',
			Tablet: '',
			Mobile: ''
		}
	},
	postImageHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	postImageBorder: {
		type: 'string',
		default: 'none',
	},
	postImageBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	postImageBorderColor: {
		type: 'string',
	},
	postImageBorderHoverColor: {
		type: 'string',
	},
	postImageBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postImageDesktopBorder: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postImageTabletBorder: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postImageMobileBorder: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postImageBorderLink: {
		type: 'boolean',
		default: true
	},

	postImageBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postImageDesktopBorderRadius: {
		type: 'object',
		default: {
			top: '16',
			right: '16',
			bottom: '16',
			left: '16',
		}
	},
	postImageTabletBorderRadius: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postImageMobileBorderRadius: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postImageBorderRadiusLink: {
		type: 'boolean',
		default: true
	},

	postImageMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	postImageMarginDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postImageMarginTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postImageMarginMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postImageMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Image */

	/** Start Title */
	postTitleTag: {
		type: 'string',
		default: 'h3'
	},
	postTitleGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	postTitleGlobalTypoSwitcher: {
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
	postTitleGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	postTitleGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	postTitleFontFamily: {
		type: 'string',
		default: 'inherit',
	},
	postTitleFontSize: {
		type: 'object',
		default: {
			Desktop: '24',
			Tablet: '',
			Mobile: ''
		}
	},
	postTitleFontSizeUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postTitleFontWeight: {
		type: 'string',
		default: '600'
	},
	postTitleFontStyle: {
		type: 'string',
		default: 'normal'
	},
	postTitleTextTransform: { 
		type: 'string',
		default: 'none'
	},
	postTitleTextDecoration: {
		type: 'string',
		default: 'none'
	},
	postTitleLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	postTitleLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postTitleLineHeight: {
		type: 'object',
		default: {
			Desktop: '30',
			Tablet: '',
			Mobile: ''
		}
	},
	postTitleLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	postTitleColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	postTitleColor : {
		type: 'string',
		default: ''
	},
	postTitleHoverColor: {
		type: 'string',
		default: ''
	},

	postTitleMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	postTitleMarginDesktop: {
		type: 'object', 
		default: {
			top: '24',
			bottom: '16',
			left: '0',
			right: '0',
		},
	},
	postTitleMarginTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postTitleMarginMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postTitleMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Title */


	/** Start Description */
	postDescriptionTag: {
		type: 'string',
		default: 'p'
	},
	postDescriptionGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	postDescriptionGlobalTypoSwitcher: {
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
	postDescriptionGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	postDescriptionGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	postDescriptionFontFamily: {
		type: 'string',
		default: 'inherit',
	},
	postDescriptionFontSize: {
		type: 'object',
		default: {
			Desktop: '18',
			Tablet: '',
			Mobile: ''
		}
	},
	postDescriptionFontSizeUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postDescriptionFontWeight: {
		type: 'string',
		default: '400'
	},
	postDescriptionFontStyle: {
		type: 'string',
		default: 'normal'
	},
	postDescriptionTextTransform: { 
		type: 'string',
		default: 'none'
	},
	postDescriptionTextDecoration: {
		type: 'string',
		default: 'none'
	},
	postDescriptionLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	postDescriptionLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postDescriptionLineHeight: {
		type: 'object',
		default: {
			Desktop: '25',
			Tablet: '',
			Mobile: ''
		}
	},
	postDescriptionLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	postDescriptionColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	postDescriptionColor : {
		type: 'string',
		default: ''
	},
	postDescriptionHoverColor: {
		type: 'string',
		default: ''
	},

	postDescriptionMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	postDescriptionMarginDesktop: {
		type: 'object', 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	postDescriptionMarginTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postDescriptionMarginMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postDescriptionMarginLink : {
		type : 'boolean',
		default: true
	},
	postDescriptionExcerptLength: {
		type: 'number',
		default: 10
	},
	/** End Description */


	/** Start Category */
	showCategorySwitcher: {
		type: 'boolean',
		default: false
	},
	postCategoryGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	postCategoryGlobalTypoSwitcher: {
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
	postCategoryGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	postCategoryGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	postCategoryFontFamily: {
		type: 'string',
		default: 'inherit',
	},
	postCategoryFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: ''
		}
	},
	postCategoryFontSizeUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postCategoryFontWeight: {
		type: 'string',
		default: '400'
	},
	postCategoryFontStyle: {
		type: 'string',
		default: 'normal'
	},
	postCategoryTextTransform: { 
		type: 'string',
		default: 'none'
	},
	postCategoryTextDecoration: {
		type: 'string',
		default: 'none'
	},
	postCategoryLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	postCategoryLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postCategoryLineHeight: {
		type: 'object',
		default: {
			Desktop: '22',
			Tablet: '',
			Mobile: ''
		}
	},
	postCategoryLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	postCategoryColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	postCategoryColor : {
		type: 'string',
		default: '#15171C'
	},
	postCategoryHoverColor: {
		type: 'string',
		default: ''
	},

	postCategoryBgColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	postCategoryBgColor : {
		type: 'string',
		default: '#dddddd9e'
	},
	postCategoryBgHoverColor: {
		type: 'string',
		default: ''
	},

	postCategoryBorder: {
		type: 'string',
		default: 'none',
	},
	postCategoryBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	postCategoryBorderColor: {
		type: 'string',
	},
	postCategoryBorderHoverColor: {
		type: 'string',
	},
	postCategoryBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postCategoryDesktopBorder: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postCategoryTabletBorder: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postCategoryMobileBorder: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postCategoryBorderLink: {
		type: 'boolean',
		default: true
	},

	postCategoryBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postCategoryDesktopBorderRadius: {
		type: 'object',
		default: {
			top: '6',
			right: '6',
			bottom: '6',
			left: '6',
		}
	},
	postCategoryTabletBorderRadius: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postCategoryMobileBorderRadius: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postCategoryBorderRadiusLink: {
		type: 'boolean',
		default: true
	},

	postCategoryPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	postCategoryPaddingDesktop: {
		type: 'object', 
		default: {
			top: '6',
			bottom: '6',
			left: '14',
			right: '14',
		},
	},
	postCategoryPaddingTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postCategoryPaddingMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postCategoryPaddingLink : {
		type : 'boolean',
		default: true
	},

	postCategoryMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	postCategoryMarginDesktop: {
		type: 'object', 
		default: {
			top: '24',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	postCategoryMarginTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postCategoryMarginMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postCategoryMarginLink : {
		type : 'boolean',
		default: true
	},
	postCategoryGap: {
		type: 'object',
		default: {
			Desktop: '10',
			Tablet: '',
			Mobile: ''
		}
	},
	postCategoryGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Category */

	/** Start Tag */
	showTagSwitcher: {
		type: 'boolean',
		default: false
	},
	postTagGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	postTagGlobalTypoSwitcher: {
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
	postTagGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	postTagGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	postTagFontFamily: {
		type: 'string',
		default: 'inherit',
	},
	postTagFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: ''
		}
	},
	postTagFontSizeUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postTagFontWeight: {
		type: 'string',
		default: '400'
	},
	postTagFontStyle: {
		type: 'string',
		default: 'normal'
	},
	postTagTextTransform: { 
		type: 'string',
		default: 'none'
	},
	postTagTextDecoration: {
		type: 'string',
		default: 'none'
	},
	postTagLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	postTagLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postTagLineHeight: {
		type: 'object',
		default: {
			Desktop: '22',
			Tablet: '',
			Mobile: ''
		}
	},
	postTagLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	postTagColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	postTagColor : {
		type: 'string',
		default: '#15171C'
	},
	postTagHoverColor: {
		type: 'string',
		default: ''
	},

	postTagBgColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	postTagBgColor : {
		type: 'string',
		default: '#dddddd9e' 
	},
	postTagBgHoverColor: {
		type: 'string',
		default: ''
	},

	postTagBorder: {
		type: 'string',
		default: 'none',
	},
	postTagBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	postTagBorderColor: {
		type: 'string',
	},
	postTagBorderHoverColor: {
		type: 'string',
	},
	postTagBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postTagDesktopBorder: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postTagTabletBorder: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postTagMobileBorder: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postTagBorderLink: {
		type: 'boolean',
		default: true
	},

	postTagBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postTagDesktopBorderRadius: {
		type: 'object',
		default: {
			top: '6',
			right: '6',
			bottom: '6',
			left: '6',
		}
	},
	postTagTabletBorderRadius: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postTagMobileBorderRadius: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postTagBorderRadiusLink: {
		type: 'boolean',
		default: true
	},

	postTagPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	postTagPaddingDesktop: {
		type: 'object', 
		default: {
			top: '6',
			bottom: '6',
			left: '14',
			right: '14',
		},
	},
	postTagPaddingTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postTagPaddingMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postTagPaddingLink : {
		type : 'boolean',
		default: true
	},

	postTagMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	postTagMarginDesktop: {
		type: 'object', 
		default: {
			top: '24',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	postTagMarginTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postTagMarginMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postTagMarginLink : {
		type : 'boolean',
		default: true
	},
	postTagGap: {
		type: 'object',
		default: {
			Desktop: '10',
			Tablet: '',
			Mobile: ''
		}
	},
	postTagGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Tag */

	/** Start Author */
	showAuthorSwitcher: {
		type: 'boolean',
		default: true
	},
	showExcerptSwitcher: {
		type: 'boolean',
		default: true
	},

	postAuthorGap: {
		type: 'object',
		default: {
			Desktop: '10',
			Tablet: '',
			Mobile: ''
		}
	},
	postAuthorGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	postAuthorAvatarSwitcher: {
		type: 'boolean',
		default: true
	},

	postAuthorAvatarWidth: {
		type: 'object',
		default: {
			Desktop: '40',
			Tablet: '',
			Mobile: ''
		}
	},
	postAuthorAvatarWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	postAuthorAvatarBorder: {
		type: 'string',
		default: 'none',
	},
	postAuthorAvatarBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	postAuthorAvatarBorderColor: {
		type: 'string',
	},
	postAuthorAvatarBorderHoverColor: {
		type: 'string',
	},
	postAuthorAvatarBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postAuthorAvatarDesktopBorder: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postAuthorAvatarTabletBorder: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postAuthorAvatarMobileBorder: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postAuthorAvatarBorderLink: {
		type: 'boolean',
		default: true
	},

	postAuthorAvatarBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		}
	},
	postAuthorAvatarDesktopBorderRadius: {
		type: 'object',
		default: {
			top: '50',
			right: '50',
			bottom: '50',
			left: '50',
		}
	},
	postAuthorAvatarTabletBorderRadius: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postAuthorAvatarMobileBorderRadius: {
		type: 'object',
		default: {
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	postAuthorAvatarBorderRadiusLink: {
		type: 'boolean',
		default: true
	},


	postAuthorMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	postAuthorMarginDesktop: {
		type: 'object', 
		default: {
			top: '32',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	postAuthorMarginTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postAuthorMarginMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postAuthorMarginLink : {
		type : 'boolean',
		default: true
	},

	postAuthorGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	postAuthorGlobalTypoSwitcher: {
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
	postAuthorGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	postAuthorGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	postAuthorFontFamily: {
		type: 'string',
		default: 'inherit',
	},
	postAuthorFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: ''
		}
	},
	postAuthorFontSizeUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postAuthorFontWeight: {
		type: 'string',
		default: '400'
	},
	postAuthorFontStyle: {
		type: 'string',
		default: 'normal'
	},
	postAuthorTextTransform: { 
		type: 'string',
		default: 'none'
	},
	postAuthorTextDecoration: {
		type: 'string',
		default: 'none'
	},
	postAuthorLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	postAuthorLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postAuthorLineHeight: {
		type: 'object',
		default: {
			Desktop: '22',
			Tablet: '',
			Mobile: ''
		}
	},
	postAuthorLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	postAuthorColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	postAuthorColor : {
		type: 'string',
		default: '#15171C'
	},
	postAuthorHoverColor: {
		type: 'string',
		default: ''
	},
	postAuthorPrefixSwitcher: {
		type: 'boolean',
		default: true
	},
	postAuthorPrefix: {
		type: 'string',
		default: 'Posted by'
	},
	
	postAuthorPrefixColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	postAuthorPrefixColor : {
		type: 'string',
		default: '#15171C'
	},
	postAuthorPrefixHoverColor: {
		type: 'string',
		default: ''
	},
	/** End Author */

	/** Start Date */
	showDateSwitcher: {
		type: 'boolean',
		default: true
	},

	postDateGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	postDateGlobalTypoSwitcher: {
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
	postDateGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	postDateGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	postDateFontFamily: {
		type: 'string',
		default: 'inherit',
	},
	postDateFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: ''
		}
	},
	postDateFontSizeUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postDateFontWeight: {
		type: 'string',
		default: '400'
	},
	postDateFontStyle: {
		type: 'string',
		default: 'normal'
	},
	postDateTextTransform: { 
		type: 'string',
		default: 'none'
	},
	postDateTextDecoration: {
		type: 'string',
		default: 'none'
	},
	postDateLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	postDateLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postDateLineHeight: {
		type: 'object',
		default: {
			Desktop: '22',
			Tablet: '',
			Mobile: ''
		}
	},
	postDateLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	postDateColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	postDateColor : {
		type: 'string',
		default: '#15171C'
	},
	postDateHoverColor: {
		type: 'string',
		default: ''
	},
	/** End Date */


	/** Start Global Setting */
	postGlobalZIndex : {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},
	postGridOverflow: {
        type: 'string',
        default: 'default',
    },
	/** Start Padding */
	postGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	postGlobalPaddingDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalPaddingTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalPaddingMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalPaddingLink : {
		type : 'boolean',
		default: true
	},
	/** End Padding */

	/** Start Margin */
	postGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	postGlobalMarginDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalMarginTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalMarginMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Margin */

	/** Start Background */
	postGlobalBgColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	postGlobalNormalBackgroundType: { 
		type: 'string',
		default: 'classic',
	},
	postGlobalNormalClassicColor: {
		type: 'string',
		default: '',
	},
	postGlobalNormalGradientColor: {
		type: 'string',
		default: null,
	},
	postGlobalNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	postGlobalNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	postGlobalHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	postGlobalHoverClassicColor: {
		type: 'string',
		default: '',
	},
	postGlobalHoverGradientColor: {
		type: 'string',
		default: null,
	},
	postGlobalHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	postGlobalHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** End Background */

	/** Start Border */
	postGlobalBorder: {
		type: 'string',
		default: 'none',
	},
	postGlobalBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	postGlobalBorderColor: {
		type: 'string',
		default: ''
	},
	postGlobalBorderHoverColor: {
		type: 'string',
	},
	postGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	postGlobalBorderDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalBorderTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalBorderMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalBorderLink : {
		type : 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	postGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	postGlobalBorderRadiusDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalBorderRadiusTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalBorderRadiusMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
	postGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	postGlobalBoxShadowValues: {
		type: 'array',
		default: [],
	},
	postGlobalBoxShadowCssValue: {
		type: 'string',
		default: '',
	},
	postGlobalBoxShadowHoverValues: {
		type: 'array',
		default: [],
	},
	postGlobalBoxShadowHoverCssValue: {
		type: 'string',
		default: '',
	},



	/** Start Load More */
	loadMoreSwitcher: {
		type: 'boolean',
		default: true
	},
	loadMoreType: {
		type: 'string',
		default: 'button'
	},
	loadMoreText: {
		type: 'string',
		default: 'Load More'
	},

	paginationPrevNextType: {
		type: 'string',
		default: 'icon'
	},

	paginationPrevTxt: {
		type: 'string',
		default: 'Prev'
	},
	paginationPrevIcon: {
		type: 'string',
		default: 'angle-left'
	},
	paginationNextTxt: {
		type: 'string',
		default: 'Next'
	},
	paginationNextIcon: {
		type: 'string',
		default: 'angle-right'
	},

	loadMoreIconAlign: {
        type: 'string',
        default: 'none',
    },
	loadMoreIcon: {
		type: 'string',
		default: 'angle-right',
	},

	loadMoreButtonBgColorSwitcher : {  
		type: 'string',
		default: 'normal'
	},
	loadMoreButtonNormalBackgroundType: {   
		type: 'string',
		default: 'classic',
	},
	loadMoreButtonNormalClassicColor: {
		type: 'string',
		default: '#15171C',
	},
	loadMoreButtonNormalGradientColor: {
		type: 'string',
		default: null,
	},
	loadMoreButtonNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	loadMoreButtonNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	loadMoreButtonHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	loadMoreButtonHoverClassicColor: {
		type: 'string',
		default: '',
	},
	loadMoreButtonHoverGradientColor: {
		type: 'string',
		default: null,
	},
	loadMoreButtonHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	loadMoreButtonHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	loadMoreButtonPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	loadMoreButtonDesktopPadding: {
		type: 'object', 
		default: {
			top: '16',
			bottom: '16',
			left: '24',
			right: '24',
		},
	},
	loadMoreButtonTabletPadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loadMoreButtonMobilePadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loadMoreButtonPaddingLink: {
		type: 'boolean',
		default: true
	},

	loadMoreButtonBorder: {
		type: 'string',
		default: 'none',
	},
	loadMoreButtonBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	loadMoreButtonBorderColor: {
		type: 'string',
	},
	loadMoreButtonBorderHoverColor: {
		type: 'string',
	},
	loadMoreButtonBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	loadMoreButtonDesktopBorder: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loadMoreButtonTabletBorder: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loadMoreButtonMobileBorder: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loadMoreButtonBorderLink: {
		type: 'boolean',
		default: true
	},
	loadMoreButtonBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	loadMoreButtonDesktopBorderRadius: {
		type: 'object', 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	loadMoreButtonTabletBorderRadius: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loadMoreButtonMobileBorderRadius: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loadMoreButtonBorderRadiusLink: {
		type: 'boolean',
		default: true
	},

	loadMoreTextGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	loadMoreTextGlobalTypoSwitcher: {
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
	loadMoreTextGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	loadMoreTextGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	loadMoreTextFontFamily: { 
		type: 'string',
		default: 'Default',
	},
	loadMoreTextFontSize: {
		type: 'object',
		default: {
			Desktop: '24',
			Tablet: '',
			Mobile: ''
		}
	},
	loadMoreTextFontSizeUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	loadMoreTextFontWeight: {
		type: 'string',
		default: '600'
	},
	loadMoreTextFontStyle: {
		type: 'string',
		default: 'normal'
	},
	loadMoreTextTransform: { 
		type: 'string',
		default: 'none'
	},
	loadMoreTextDecoration: {
		type: 'string',
		default: 'none'
	},
	loadMoreTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	loadMoreTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	loadMoreTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '30',
			Tablet: '',
			Mobile: ''
		}
	},
	loadMoreTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	loadMoreTextColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	loadMoreTextColor : {
		type: 'string',
		default: '#FFFFFF'
	},
	loadMoreTextHoverColor: {
		type: 'string',
		default: ''
	},
	loadMoreIconSize: {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '',
            Mobile: ''
        }
    },
    loadMoreIconSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    loadMoreIconColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    loadMoreIconColor: {
        type: 'string',
        default: '#FFFFFF'
    },
    loadMoreIconHoverColor: {
        type: 'string',
        default: ''
    },
	loadMoreIconMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	loadMoreIconDesktopMargin: {
		type: 'object', 
		default: {
			top: '0',
			bottom: '0',
			left: '5',
			right: '0',
		},
	},
	loadMoreIconTabletMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loadMoreIconMobileMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loadMoreIconMarginLink: {
		type: 'boolean',
		default: true
	},

	loadMoreloaderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	loadMoreloaderColor: {
		type: 'string',
		default: '#FFFFFF'
	},
	loadMoreloaderHoverColor: {
		type: 'string',
		default: ''
	},
	/** End Load More */

	/** Pagination Arrow */
	paginationArrowSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	paginationArrowSizeUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	paginationArrowBgColorSwitcher : {  
		type: 'string',
		default: 'normal'
	},
	paginationArrowNormalBackgroundType: {   
		type: 'string',
		default: 'classic',
	},
	paginationArrowNormalClassicColor: {
		type: 'string',
		default: '#E6E6E6',
	},
	paginationArrowNormalGradientColor: {
		type: 'string',
		default: null,
	},
	paginationArrowNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	paginationArrowNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	paginationArrowHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	paginationArrowHoverClassicColor: {
		type: 'string',
		default: '',
	},
	paginationArrowHoverGradientColor: {
		type: 'string',
		default: null,
	},
	paginationArrowHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	paginationArrowHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	paginationArrowBorder: {
		type: 'string',
		default: 'none',
	},
	paginationArrowBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	paginationArrowBorderColor: {
		type: 'string',
	},
	paginationArrowBorderHoverColor: {
		type: 'string',
	},
	paginationArrowBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	paginationArrowDesktopBorder: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationArrowTabletBorder: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationArrowMobileBorder: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationArrowBorderLink: {
		type: 'boolean',
		default: true
	},
	paginationArrowBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	paginationArrowDesktopBorderRadius: {
		type: 'object', 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	paginationArrowTabletBorderRadius: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationArrowMobileBorderRadius: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationArrowBorderRadiusLink: {
		type: 'boolean',
		default: true
	},

	paginationArrowTextGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	paginationArrowTextGlobalTypoSwitcher: {
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
	paginationArrowTextGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	paginationArrowTextGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	paginationArrowTextFontFamily: { 
		type: 'string',
		default: 'Default',
	},
	paginationArrowTextFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	paginationArrowTextFontSizeUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	paginationArrowTextFontWeight: {
		type: 'string',
		default: '400'
	},
	paginationArrowTextFontStyle: {
		type: 'string',
		default: 'normal'
	},
	paginationArrowTextTransform: { 
		type: 'string',
		default: 'none'
	},
	paginationArrowTextDecoration: {
		type: 'string',
		default: 'none'
	},
	paginationArrowTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	paginationArrowTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	paginationArrowTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	paginationArrowTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	paginationArrowTextColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	paginationArrowTextColor : {
		type: 'string',
		default: ''
	},
	paginationArrowTextHoverColor: {
		type: 'string',
		default: ''
	},
	paginationPrevNextWidth: {
        type: 'object',
        default: {
            Desktop: '36',
            Tablet: '',
            Mobile: ''
        }
    },
    paginationPrevNextWidthUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    paginationArrowIconColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    paginationArrowIconColor: {
        type: 'string',
        default: ''
    },
    paginationArrowIconHoverColor: {
        type: 'string',
        default: ''
    },
	// pagination arrow end

	/** Pagination Button Start */
	paginationBtnSize: {
		type: 'object',
		default: {
			Desktop: '36',
			Tablet: '',
			Mobile: ''
		}
	},
	paginationBtnSizeUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	paginationBtnGap: {
		type: 'object',
		default: {
			Desktop: '4',
			Tablet: '',
			Mobile: ''
		}
	},
	paginationBtnGapUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	paginationBtnBgColorSwitcher : {  
		type: 'string',
		default: 'normal'
	},
	paginationBtnNormalBackgroundType: {   
		type: 'string',
		default: 'classic',
	},
	paginationBtnNormalClassicColor: {
		type: 'string',
		default: '',
	},
	paginationBtnNormalGradientColor: {
		type: 'string',
		default: null,
	},
	paginationBtnNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	paginationBtnNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	paginationBtnHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	paginationBtnHoverClassicColor: {
		type: 'string',
		default: '',
	},
	paginationBtnHoverGradientColor: {
		type: 'string',
		default: null,
	},
	paginationBtnHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	paginationBtnHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},


	paginationActiveBtnTextColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	paginationActiveBtnTextColor : {
		type: 'string',
		default: ''
	},
	paginationActiveBtnTextHoverColor: {
		type: 'string',
		default: ''
	},
	paginationActiveBtnBgColorSwitcher : {  
		type: 'string',
		default: 'normal'
	},
	paginationActiveBtnNormalBackgroundType: {   	
		type: 'string',
		default: 'classic',
	},
	paginationActiveBtnNormalClassicColor: {
		type: 'string',
		default: '#E6E6E6',
	},
	paginationActiveBtnNormalGradientColor: {
		type: 'string',
		default: null,
	},
	paginationActiveBtnNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	paginationActiveBtnNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	paginationActiveBtnHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	paginationActiveBtnHoverClassicColor: {
		type: 'string',
		default: '#E6E6E6',
	},
	paginationActiveBtnHoverGradientColor: {
		type: 'string',
		default: null,
	},
	paginationActiveBtnHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	paginationActiveBtnHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	paginationBtnBorder: {
		type: 'string',
		default: 'none',
	},
	paginationBtnBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	paginationBtnBorderColor: {
		type: 'string',
	},
	paginationBtnBorderHoverColor: {
		type: 'string',
	},
	paginationBtnBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	paginationBtnDesktopBorder: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationBtnTabletBorder: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationBtnMobileBorder: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationBtnBorderLink: {
		type: 'boolean',
		default: true
	},
	paginationBtnBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	paginationBtnDesktopBorderRadius: {
		type: 'object', 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	paginationBtnTabletBorderRadius: {
		type: 'object', 
		default: {	
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationBtnMobileBorderRadius: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationBtnBorderRadiusLink: {
		type: 'boolean',
		default: true
	},

	paginationBtnTextGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	paginationBtnTextGlobalTypoSwitcher: {
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
	paginationBtnTextGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	paginationBtnTextGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	paginationBtnTextFontFamily: { 
		type: 'string',
		default: 'Default',
	},
	paginationBtnTextFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	paginationBtnTextFontSizeUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	paginationBtnTextFontWeight: {
		type: 'string',
		default: '400'
	},
	paginationBtnTextFontStyle: {
		type: 'string',
		default: 'normal'
	},
	paginationBtnTextTransform: { 
		type: 'string',
		default: 'none'
	},
	paginationBtnTextDecoration: {
		type: 'string',
		default: 'none'
	},
	paginationBtnTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	paginationBtnTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	paginationBtnTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	paginationBtnTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	paginationBtnTextColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	paginationBtnTextColor : {
		type: 'string',
		default: ''
	},
	paginationBtnTextHoverColor: {
		type: 'string',
		default: ''
	},
	// pagination btn end


	postGridDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    postGridTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    postGridMobileSwitcher: {
        type: 'boolean',
        default: false,
    },

	/** Start Class & ID Setting */
	postGridGlobalCustomCSS : {
        type: 'string',
        default: '',
    },
	postGridGlobalWraperID : {
		type: 'string',
		default: ''
	},

	postGridGlobalWraperClass : {
		type: 'string',
		default: ''
	},
	/** End Class & ID Setting */

	postGridPositionType: {
        type: 'string',
        default: 'default'
    },
    postGridHZOrientationType: {
        type: 'string',
        default: 'left'
    },
    postGridVROrientationType: {
        type: 'string',
        default: 'top'
    },
    postGridHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    postGridHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    postGridHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    postGridHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    postGridVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    postGridVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    postGridVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    postGridVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

	/** Start Filter By Taxonomy */
	showFilterByTaxonomy: {
		type: 'boolean',
		default: false,
	},
	filterSelectedTaxonomy: {
		type: 'string',
		default: 'category',
	},
	filterSelectedCat: {
		type: 'array',
		default: []
	},
	filterSelectedCatLabel: {
		type: 'array',
		default: []
	},
	filterSelectedTaxonomyCount: {
		type: 'array',
		default: []
	},
	filterSelectedTag: {
		type: 'array',
		default: []
	},
	filterSelectedTagLabel: {
		type: 'array',
		default: []
	},
	filterSelectedTagCount: {
		type: 'array',
		default: []
	},
	filterAllPostsCount: {
		type: 'array',
		default: []
	},
	filerselectedCountSwitcher: {
		type: 'boolean',
		default: false
	},
	/** End Filter By Taxonomy */

	/** Start Read More */
	readMoreSwitcher: {
		type: 'boolean',
		default: false
	},
	readMoreText: {
		type: 'string',
		default: 'Read More'
	},
	readMoreIconAlign: {
		type: 'string',
		default: 'none'
	},
	readMoreIcon: {
		type: 'string',
		default: 'arrow-right'
	},
	readMoreIconImageUrl: {
		type: 'string',
		default: ''
	},
	readMoreIconImageAlt: {
		type: 'string',
		default: ''
	},	
	readMoreIconImageID: {
		type: 'string',
		default: ''
	},
	
	/** End Read More */

	/** Start Button Text Style */
	buttonWidth: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonWidthUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		}
	},

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
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	buttonFontWeight: {
		type: 'string',
		default: '500'
	},
	buttonFontStyle: {
		type: 'string',
		default: ''
	},
	buttonTextTransform: {
		type: 'string',
		default: ''
	},
	buttonTextDecoration: {
		type: 'string',
		default: ''
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
			Mobile: 'px',
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
			Mobile: 'px',
		}
	},
	buttonColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	buttonColor: {
		type: 'string',
		default: '#15171C'
	},
	buttonHoverColor: {
		type: 'string',
	},
	buttonBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	buttonBgColor: {
		type: 'string',
		default: '#dddddd9e'
	},
	buttonBgHoverColor: {
		type: 'string',
	},
	buttonBorder: {
		type: 'string',
		default: 'none',
	},
	buttonBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	buttonBorderColor: {
		type: 'string',
	},
	buttonBorderHoverColor: {
		type: 'string',
	},
	buttonBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	buttonDesktopBorderWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonTabBorderWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonMobileBorderWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonBorderLink: {
		type: 'boolean',
		default: true
	},
	buttonBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	buttonDesktopBorderRadiusWidth: {
		type: 'object', 
		default: {
			top: '6',
			bottom: '6',
			left: '6',
			right: '6',
		},
	},
	buttonTabBorderRadiusWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonMobileBorderRadiusWidth: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonBorderRadiusLink: {
		type: 'boolean',
		default: true
	},
	buttonBoxShadowSwitcher: {
		type: 'string',
		default: 'normal',
	},
	buttonBoxShadowValues: { 
		type: 'array',
		default: [],
	},
	buttonBoxShadowCssValue: {
		type: 'string',
		default: '',
	},
	buttonBoxShadowHoverValues: { 
		type: 'array',
		default: [],
	},
	buttonBoxShadowHoverCssValue: {
		type: 'string',
		default: '',
	},
	buttonPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	buttonDesktopPadding: {
		type: 'object', 
		default: {
			top: '12',
			bottom: '12',
			left: '24',
			right: '24',
		},
	},
	buttonTabPadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonMobilePadding: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonPaddingLink: {
		type: 'boolean',
		default: true
	},
	buttonMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	buttonDesktopMargin: {
		type: 'object', 
		default: {
			top: '15',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	buttonTabMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonMobileMargin: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonMarginLink: {
		type: 'boolean',
		default: true
	},
	/** End Style */    

	/** Icon Styles */
	buttonIconSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	buttonIconColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	buttonIconColor: {
		type: 'string',
		default: '#15171C'
	},
	buttonIconHoverColor: {
		type: 'string',
		default: ''
	},

	buttonIconBgColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	buttonIconBgColor : {
		type: 'string',
		default: ''
	},
	buttonIconBgHoverColor: {
		type: 'string',
		default: ''
	},
	buttonIconBorder: {
		type: 'string',
		default: 'none',
	},
	buttonIconBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	buttonIconBorderColor: {
		type: 'string',
	},
	buttonIconBorderHoverColor: {
		type: 'string',
	},
	buttonIconBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	buttonIconBorderDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonIconBorderTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonIconBorderMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonIconBorderLink : {
		type : 'boolean',
		default: true
	},
	buttonIconBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	buttonIconBorderRadiusDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonIconBorderRadiusTablet: {
		type: 'object', 
		default: {
			top: '', 
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonIconBorderRadiusMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonIconBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	buttonIconGapSize: {
		type: 'object',
		default: {
			Desktop: '10',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonIconGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	buttonIconRotateSwitcher: {
		type: 'string',
		default: 'normal',
	},
	buttonIconRotate: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '', 
			Mobile: '',
		}
	},
	buttonIconRotateHover: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},

	buttonImageRotateSwitcher: {
		type: 'string',
		default: 'normal',
	},
	buttonImageRotate: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '', 
			Mobile: '',
		}
	},
	buttonImageRotateHover: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},

	buttonIconImageWidth : {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '',
            Mobile: ''
        }
    },
    buttonIconImageWidthUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    buttonIconImageHeight : {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '',
            Mobile: '',
        }
    },
    buttonIconImageHeightUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

	/** End Icon Styles */

	/** Start Post URL Settings */
	customPermalinkSwitcher: {
		type: 'boolean',
		default: false,
	},
	customPermalink: {
		type: 'string',
		default: '',
	},
	thumbnailLinkSwitcher: {
		type: 'boolean',
		default: true,
	},
	categoryLinkSwitcher: {
		type: 'boolean',
		default: true,
	},
	tagLinkSwitcher: {
		type: 'boolean',
		default: true,
	},
	authorLinkSwitcher: {
		type: 'boolean',
		default: true,
	},
	titleLinkSwitcher: {
		type: 'boolean',
		default: true,
	},
	/** End Post URL Settings */

	/** Start Post Grid Settings */
	postGridSkeletonBgColor: {
		type: 'string',
		default: '#f0f0f0',
	},
	postGridSkeletonHighlightBgColor: {
		type: 'string',
		default: '#e0e0e0',
	},
	/** End Post Grid Settings */
};

export default attributes;
