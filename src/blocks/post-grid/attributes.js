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
		default: 6
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
	columnsPerSection: {
		type: "object",
		default: {
			Desktop: 3,
			Tablet: 2,
			Mobile: 1
		}
	},
	gapUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	rowGap: {
		type: "object",
		default: {
			Desktop: 30,
			Tablet: 30,
			Mobile: 30
		}
	},
	columnGap: {
		type: "object",
		default: {
			Desktop: 30,
			Tablet: 30,
			Mobile: 30
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
	postGridBgColor : {
		type: "string",
	},
	postGridBgHoverColor: {
		type: 'string',
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
	postGridBoxShadowValues: {
        type: 'array',
        default: [],
    },
    postGridBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
	/** End Box Shadow */
	/** End Post Grid */

	/** Start Image */
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
			Tablet: '24',
			Mobile: '24'
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
			Tablet: '18',
			Mobile: '18'
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
		default: "#F7F7F7"
	},
	postCategoryBgHoverColor: {
		type: 'string',
		default: "#F7F7F7"
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
			Desktop: 10,
			Tablet: 10,
			Mobile: 10
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
		default: ""
	},
	postTagHoverColor: {
		type: 'string',
		default: ""
	},

	postTagBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	postTagBgColor : {
		type: "string",
		default: ""
	},
	postTagBgHoverColor: {
		type: 'string',
		default: ""
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
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postTagPaddingTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postTagPaddingMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
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
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postTagMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postTagMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	postTagMarginLink : {
		type : "boolean",
		default: true
	},
	postTagGap: {
		type: "object",
		default: {
			Desktop: 10,
			Tablet: 10,
			Mobile: 10
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
		default: false
	},
	/** End Author */

};

export default attributes;
