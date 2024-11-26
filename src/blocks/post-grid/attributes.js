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
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},
	postImageTabletBorder: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},
	postImageMobileBorder: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
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
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},
	postImageTabletBorderRadius: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},
	postImageMobileBorderRadius: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},
	postImageBorderRadiusLink: {
		type: "boolean",
		default: true
	},
	/** End Image */

	/** Start Title */
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
			Desktop: '',
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
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	postTitleMarginTablet: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	postTitleMarginMobile: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
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
	postDescriptionFontFamily: {
		type: "string",
		default: "inherit",
	},
	postDescriptionFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '16',
			Mobile: '16'
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
			Desktop: '',
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
	/** End Description */

};

export default attributes;
