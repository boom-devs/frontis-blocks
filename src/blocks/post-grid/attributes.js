// attributes.js
const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
	blockStyle: {
		type: "string",
		default: ""
	},
    deviceType: {
        type: "string",
        default: "Desktop"
    },
    postType: {
		type: "string",
		default: "post"
	},
	postPerPage: {
		type: "string",
		default: "6"
	},

	postSwitcher: {
		type: "string",
		default: "grid"
	},
	/** Start category */
	selectedCatSwitcher: {
		type: "string",
		default: "include"
	},
	selectedCat: {
		type: "array",
		default: []
	},
	deSelectedCat: {
		type: "array",
		default: []
	},
	/** End category */

	/** Start tag */
	selectedTagSwitcher: {
		type: "string",
		default: "include"
	},
	selectedTag: {
		type: "array",
		default: []
	},
	deSelectedTag: {
		type: "array",
		default: []
	},
	/** End tag */

	/** Start author */
	selectedAuthorSwitcher: {
		type: "string",
		default: "include"
	},
	selectedAuthor: {
		type: "array",
		default: []
	},
	deSelectedAuthor: {
		type: "array",
		default: []
	},
	/** End author */

	placeholders: {
		type: "array",
		default: [1, 2, 3, 4, 5, 6, 7, 8, 9],
	},
	orderBy: {
		type: "string",
		default: "date"
	},
	sortOrder: {
		type: "string",
		default: "desc"
	},
	gridColumnsPerSection: {
		type: "object",
		default: {
			Desktop: "3",
			Tablet: "2",
			Mobile: "1"
		}
	},
	gridGapUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	listGapUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	gridRowGap: {
		type: "object",
		default: {
			Desktop: "30",
			Tablet: "30",
			Mobile: "30"
		}
	},
	gridColumnGap: {
		type: "object",
		default: {
			Desktop: "30",
			Tablet: "30",
			Mobile: "30"
		}
	},

	listRowGap: {
		type: "object",
		default: {
			Desktop: "30",
			Tablet: "30",
			Mobile: "30"
		}
	},
	listImageSpacing: {
		type: "object",
		default: {
			Desktop: "40",
			Tablet: "30",
			Mobile: "0"
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
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridPaddingTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridPaddingMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridPaddingLink : {
		type : "boolean",
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
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

	/** Start Background */
	postGridBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	postGridNormalBackgroundType: {  
		type: "string",
		default: "classic",
	},
	postGridNormalClassicColor: {
		type: "string",
		default: "",
	},
	postGridNormalGradientColor: {
		type: "string",
		default: null,
	},
	postGridNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	postGridNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	postGridHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	postGridHoverClassicColor: {
		type: "string",
		default: "",
	},
	postGridHoverGradientColor: {
		type: "string",
		default: null,
	},
	postGridHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	postGridHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Background */

	/** Start Border */
	postGridBorder: {
		type: 'string',
		default: "none",
	},
	postGridBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	postGridBorderColor: {
		type: 'string',
		default: ""
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
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridBorderLink : {
		type : "boolean",
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
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGridBorderRadiusLink : {
		type : "boolean",
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
		type: "string",
		default: "large",
	},
	postImageWidth: {
		type: "object",
		default: {
			Desktop: '100',
			Tablet: '100',
			Mobile: '100'
		}
	},
	postImageWidthUnits: {
		type: "object",
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%'
		}
	},
	postImageHeight: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	postImageHeightUnits: {
		type: "object",
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%'
		}
	},
	postImageBorder: {
		type: 'string',
		default: "none",
	},
	postImageBorderColorSwitcher: {
		type: "string",
		default: "normal"
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
		type: "boolean",
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
			top: '16',
			right: '16',
			bottom: '16',
			left: '16',
		}
	},
	postImageMobileBorderRadius: {
		type: 'object',
		default: {
			top: '16',
			right: '16',
			bottom: '16',
			left: '16',
		}
	},
	postImageBorderRadiusLink: {
		type: "boolean",
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
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postImageMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postImageMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postImageMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Image */

	/** Start Title */
	postTitleTag: {
		type: "string",
		default: "h3"
	},
	postTitleFontFamily: {
		type: "string",
		default: "inherit",
	},
	postTitleFontSize: {
		type: 'object',
		default: {
			Desktop: '24',
			Tablet: '20',
			Mobile: '16'
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
		type: "string",
		default: "600"
	},
	postTitleFontStyle: {
		type: "string",
		default: "normal"
	},
	postTitleTextTransform: { 
		type: "string",
		default: "none"
	},
	postTitleTextDecoration: {
		type: "string",
		default: "none"
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
			Tablet: '30',
			Mobile: '30'
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
		type: "string",
		default: "normal"
	},
	postTitleColor : {
		type: "string",
		default: ""
	},
	postTitleHoverColor: {
		type: 'string',
		default: ""
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
		type: "object", 
		default: {
			top: '24',
			bottom: '16',
			left: '0',
			right: '0',
		},
	},
	postTitleMarginTablet: {
		type: "object", 
		default: {
			top: '24',
			bottom: '16',
			left: '0',
			right: '0',
		},
	},
	postTitleMarginMobile: {
		type: "object", 
		default: {
			top: '24',
			bottom: '16',
			left: '0',
			right: '0',
		},
	},
	postTitleMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Title */


	/** Start Description */
	postDescriptionTag: {
		type: "string",
		default: "p"
	},
	postDescriptionFontFamily: {
		type: "string",
		default: "inherit",
	},
	postDescriptionFontSize: {
		type: 'object',
		default: {
			Desktop: '18',
			Tablet: '16',
			Mobile: '14'
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
		type: "string",
		default: "400"
	},
	postDescriptionFontStyle: {
		type: "string",
		default: "normal"
	},
	postDescriptionTextTransform: { 
		type: "string",
		default: "none"
	},
	postDescriptionTextDecoration: {
		type: "string",
		default: "none"
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
			Tablet: '25',
			Mobile: '25'
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
		type: "string",
		default: "normal"
	},
	postDescriptionColor : {
		type: "string",
		default: ""
	},
	postDescriptionHoverColor: {
		type: 'string',
		default: ""
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
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	postDescriptionMarginTablet: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	postDescriptionMarginMobile: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	postDescriptionMarginLink : {
		type : "boolean",
		default: true
	},
	postDescriptionExcerptLength: {
		type: "number",
		default: 10
	},
	/** End Description */


	/** Start Category */
	showCategorySwitcher: {
		type: "boolean",
		default: false
	},
	postCategoryFontFamily: {
		type: "string",
		default: "inherit",
	},
	postCategoryFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '16',
			Mobile: '16'
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
		type: "string",
		default: "400"
	},
	postCategoryFontStyle: {
		type: "string",
		default: "normal"
	},
	postCategoryTextTransform: { 
		type: "string",
		default: "none"
	},
	postCategoryTextDecoration: {
		type: "string",
		default: "none"
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
			Tablet: '22',
			Mobile: '22'
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
		type: "string",
		default: "normal"
	},
	postCategoryColor : {
		type: "string",
		default: "#15171C"
	},
	postCategoryHoverColor: {
		type: 'string',
		default: "#15171C"
	},

	postCategoryBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	postCategoryBgColor : {
		type: "string",
		default: "#dddddd9e"
	},
	postCategoryBgHoverColor: {
		type: 'string',
		default: "#dddddd9e"
	},

	postCategoryBorder: {
		type: 'string',
		default: "none",
	},
	postCategoryBorderColorSwitcher: {
		type: "string",
		default: "normal"
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
		type: "boolean",
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
			top: '6',
			right: '6',
			bottom: '6',
			left: '6',
		}
	},
	postCategoryMobileBorderRadius: {
		type: 'object',
		default: {
			top: '6',
			right: '6',
			bottom: '6',
			left: '6',
		}
	},
	postCategoryBorderRadiusLink: {
		type: "boolean",
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
		type: "object", 
		default: {
			top: '6',
			bottom: '6',
			left: '14',
			right: '14',
		},
	},
	postCategoryPaddingTablet: {
		type: "object", 
		default: {
			top: '6',
			bottom: '6',
			left: '14',
			right: '14',
		},
	},
	postCategoryPaddingMobile: {
		type: "object", 
		default: {
			top: '6',
			bottom: '6',
			left: '14',
			right: '14',
		},
	},
	postCategoryPaddingLink : {
		type : "boolean",
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
		type: "object", 
		default: {
			top: '24',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	postCategoryMarginTablet: {
		type: "object", 
		default: {
			top: '24',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	postCategoryMarginMobile: {
		type: "object", 
		default: {
			top: '24',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	postCategoryMarginLink : {
		type : "boolean",
		default: true
	},
	postCategoryGap: {
		type: "object",
		default: {
			Desktop: '10',
			Tablet: '10',
			Mobile: '10'
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
		type: "boolean",
		default: false
	},
	postTagFontFamily: {
		type: "string",
		default: "inherit",
	},
	postTagFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '16',
			Mobile: '16'
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
		type: "string",
		default: "400"
	},
	postTagFontStyle: {
		type: "string",
		default: "normal"
	},
	postTagTextTransform: { 
		type: "string",
		default: "none"
	},
	postTagTextDecoration: {
		type: "string",
		default: "none"
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
			Tablet: '22',
			Mobile: '22'
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
		type: "string",
		default: "normal"
	},
	postTagColor : {
		type: "string",
		default: "#15171C"
	},
	postTagHoverColor: {
		type: 'string',
		default: "#15171C"
	},

	postTagBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	postTagBgColor : {
		type: "string",
		default: "#dddddd9e" 
	},
	postTagBgHoverColor: {
		type: 'string',
		default: "#dddddd9e"
	},

	postTagBorder: {
		type: 'string',
		default: "none",
	},
	postTagBorderColorSwitcher: {
		type: "string",
		default: "normal"
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
		type: "boolean",
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
			top: '6',
			right: '6',
			bottom: '6',
			left: '6',
		}
	},
	postTagMobileBorderRadius: {
		type: 'object',
		default: {
			top: '6',
			right: '6',
			bottom: '6',
			left: '6',
		}
	},
	postTagBorderRadiusLink: {
		type: "boolean",
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
		type: "object", 
		default: {
			top: '6',
			bottom: '6',
			left: '14',
			right: '14',
		},
	},
	postTagPaddingTablet: {
		type: "object", 
		default: {
			top: '6',
			bottom: '6',
			left: '14',
			right: '14',
		},
	},
	postTagPaddingMobile: {
		type: "object", 
		default: {
			top: '6',
			bottom: '6',
			left: '14',
			right: '14',
		},
	},
	postTagPaddingLink : {
		type : "boolean",
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
		type: "object", 
		default: {
			top: '24',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	postTagMarginTablet: {
		type: "object", 
		default: {
			top: '24',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	postTagMarginMobile: {
		type: "object", 
		default: {
			top: '24',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	postTagMarginLink : {
		type : "boolean",
		default: true
	},
	postTagGap: {
		type: "object",
		default: {
			Desktop: '10',
			Tablet: '10',
			Mobile: '10'
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
		type: "boolean",
		default: true
	},

	postAuthorGap: {
		type: "object",
		default: {
			Desktop: '10',
			Tablet: '10',
			Mobile: '10'
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
		type: "boolean",
		default: true
	},

	postAuthorAvatarWidth: {
		type: "object",
		default: {
			Desktop: '40',
			Tablet: '40',
			Mobile: '40'
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
		default: "none",
	},
	postAuthorAvatarBorderColorSwitcher: {
		type: "string",
		default: "normal"
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
		type: "boolean",
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
			top: '50',
			right: '50',
			bottom: '50',
			left: '50',
		}
	},
	postAuthorAvatarMobileBorderRadius: {
		type: 'object',
		default: {
			top: '50',
			right: '50',
			bottom: '50',
			left: '50',
		}
	},
	postAuthorAvatarBorderRadiusLink: {
		type: "boolean",
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
		type: "object", 
		default: {
			top: '32',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	postAuthorMarginTablet: {
		type: "object", 
		default: {
			top: '32',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	postAuthorMarginMobile: {
		type: "object", 
		default: {
			top: '32',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	postAuthorMarginLink : {
		type : "boolean",
		default: true
	},

	postAuthorFontFamily: {
		type: "string",
		default: "inherit",
	},
	postAuthorFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '16',
			Mobile: '16'
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
		type: "string",
		default: "400"
	},
	postAuthorFontStyle: {
		type: "string",
		default: "normal"
	},
	postAuthorTextTransform: { 
		type: "string",
		default: "none"
	},
	postAuthorTextDecoration: {
		type: "string",
		default: "none"
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
			Tablet: '22',
			Mobile: '22'
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
		type: "string",
		default: "normal"
	},
	postAuthorColor : {
		type: "string",
		default: "#15171C"
	},
	postAuthorHoverColor: {
		type: 'string',
		default: "#15171C"
	},
	postAuthorPrefixSwitcher: {
		type: "boolean",
		default: true
	},
	postAuthorPrefix: {
		type: "string",
		default: "Posted by"
	},
	
	postAuthorPrefixColorSwitcher : {
		type: "string",
		default: "normal"
	},
	postAuthorPrefixColor : {
		type: "string",
		default: "#15171C"
	},
	postAuthorPrefixHoverColor: {
		type: 'string',
		default: "#15171C"
	},
	/** End Author */

	/** Start Date */
	showDateSwitcher: {
		type: "boolean",
		default: true
	},

	postDateFontFamily: {
		type: "string",
		default: "inherit",
	},
	postDateFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '16',
			Mobile: '16'
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
		type: "string",
		default: "400"
	},
	postDateFontStyle: {
		type: "string",
		default: "normal"
	},
	postDateTextTransform: { 
		type: "string",
		default: "none"
	},
	postDateTextDecoration: {
		type: "string",
		default: "none"
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
			Tablet: '22',
			Mobile: '22'
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
		type: "string",
		default: "normal"
	},
	postDateColor : {
		type: "string",
		default: "#15171C"
	},
	postDateHoverColor: {
		type: 'string',
		default: "#15171C"
	},
	/** End Date */


	/** Start Global Setting */
	postGlobalZIndex : {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
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
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalPaddingTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalPaddingMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalPaddingLink : {
		type : "boolean",
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
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

	/** Start Background */
	postGlobalBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	postGlobalNormalBackgroundType: { 
		type: "string",
		default: "classic",
	},
	postGlobalNormalClassicColor: {
		type: "string",
		default: "",
	},
	postGlobalNormalGradientColor: {
		type: "string",
		default: null,
	},
	postGlobalNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	postGlobalNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	postGlobalHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	postGlobalHoverClassicColor: {
		type: "string",
		default: "",
	},
	postGlobalHoverGradientColor: {
		type: "string",
		default: null,
	},
	postGlobalHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	postGlobalHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Background */

	/** Start Border */
	postGlobalBorder: {
		type: 'string',
		default: "none",
	},
	postGlobalBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	postGlobalBorderColor: {
		type: 'string',
		default: ""
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
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalBorderLink : {
		type : "boolean",
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
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postGlobalBorderRadiusLink : {
		type : "boolean",
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
		type: "boolean",
		default: true
	},
	loadMoreText: {
		type: "string",
		default: "Load More"
	},
	loadMoreIconAlign: {
        type: "string",
        default: "none",
    },
	loadMoreIcon: {
		type: 'string',
		default: 'angle-right',
	},

	loadMoreButtonBgColorSwitcher : {  
		type: "string",
		default: "normal"
	},
	loadMoreButtonNormalBackgroundType: {   
		type: "string",
		default: "classic",
	},
	loadMoreButtonNormalClassicColor: {
		type: "string",
		default: "#15171C",
	},
	loadMoreButtonNormalGradientColor: {
		type: "string",
		default: null,
	},
	loadMoreButtonNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	loadMoreButtonNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	loadMoreButtonHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	loadMoreButtonHoverClassicColor: {
		type: "string",
		default: "",
	},
	loadMoreButtonHoverGradientColor: {
		type: "string",
		default: null,
	},
	loadMoreButtonHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	loadMoreButtonHoverCustomGradientInputValue: {
		type: "string",
		default: "",
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
		type: "object", 
		default: {
			top: '16',
			bottom: '16',
			left: '24',
			right: '24',
		},
	},
	loadMoreButtonTabletPadding: {
		type: "object", 
		default: {
			top: '16',
			bottom: '16',
			left: '24',
			right: '24',
		},
	},
	loadMoreButtonMobilePadding: {
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '16',
			right: '16',
		},
	},
	loadMoreButtonPaddingLink: {
		type: "boolean",
		default: true
	},

	loadMoreButtonBorder: {
		type: 'string',
		default: "none",
	},
	loadMoreButtonBorderColorSwitcher: {
		type: "string",
		default: "normal"
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
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loadMoreButtonTabletBorder: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loadMoreButtonMobileBorder: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	loadMoreButtonBorderLink: {
		type: "boolean",
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
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	loadMoreButtonTabletBorderRadius: {
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	loadMoreButtonMobileBorderRadius: {
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	loadMoreButtonBorderRadiusLink: {
		type: "boolean",
		default: true
	},

	loadMoreTextFontFamily: { 
		type: "string",
		default: "Default",
	},
	loadMoreTextFontSize: {
		type: 'object',
		default: {
			Desktop: '24',
			Tablet: '20',
			Mobile: '16'
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
		type: "string",
		default: "600"
	},
	loadMoreTextFontStyle: {
		type: "string",
		default: "normal"
	},
	loadMoreTextTransform: { 
		type: "string",
		default: "none"
	},
	loadMoreTextDecoration: {
		type: "string",
		default: "none"
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
			Tablet: '30',
			Mobile: '30'
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
		type: "string",
		default: "normal"
	},
	loadMoreTextColor : {
		type: "string",
		default: "#FFFFFF"
	},
	loadMoreTextHoverColor: {
		type: 'string',
		default: ""
	},
	loadMoreIconSize: {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '20',
            Mobile: '20'
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
        type: "string",
        default: "normal"
    },
    loadMoreIconColor: {
        type: "string",
        default: "#FFFFFF"
    },
    loadMoreIconHoverColor: {
        type: 'string',
        default: ""
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
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '5',
			right: '0',
		},
	},
	loadMoreIconTabletMargin: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '5',
			right: '0',
		},
	},
	loadMoreIconMobileMargin: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '5',
			right: '0',
		},
	},
	loadMoreIconMarginLink: {
		type: "boolean",
		default: true
	},

	loadMoreloaderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	loadMoreloaderColor: {
		type: "string",
		default: "#FFFFFF"
	},
	loadMoreloaderHoverColor: {
		type: "string",
		default: "#FFFFFF"
	},
	/** End Load More */

	postGridDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    postGridTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    postGridMobileSwitcher: {
        type: "boolean",
        default: false,
    },

	/** Start Class & ID Setting */
	postGridGlobalWraperID : {
		type: "string",
		default: ""
	},

	postGridGlobalWraperClass : {
		type: "string",
		default: ""
	},
	/** End Class & ID Setting */

	postGridPositionType: {
        type: "string",
        default: "default"
    },
    postGridHZOrientationType: {
        type: "string",
        default: "left"
    },
    postGridVROrientationType: {
        type: "string",
        default: "top"
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
};

export default attributes;
