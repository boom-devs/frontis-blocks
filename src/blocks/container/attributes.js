const gridCssArray = [
	{
		default: 'custom', // This value will be either custom or minmax and in minmax value we will create css by combining min and max values.
		min:{
			unit: 'px',
			value: 10,
		},
		max:{
			unit: 'fr',
			value: 1,
		},
		custom:{
			unit: 'fr',
			value: 1,
		}
	}
];

const attributes = {
	block_id: {
		type: 'string',
	},
	p_block_id: {
		type: 'string',
	},
	// role:local — do NOT serialize into post content. Deep nesting (500+) with
	// full CSS in each block comment causes editor OOM during serialize caching.
	// Styles are synced to post meta `_frontis_container_block_styles` for frontend.
	//
	// Gutenberg docs (role / local):
	// https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/#role
	// — "Use `local` to mark the attribute as temporary and non-persistable.
	//    Attributes marked as `local` are ignored by the Block Serializer and
	//    never saved to post content."
	//
	// Introduced as __experimentalRole, later stabilized as `role`:
	// https://github.com/WordPress/gutenberg/pull/63076
	// https://github.com/WordPress/gutenberg/pull/65484
	// __experimentalRole kept for older WP that predates stable `role`.
	blockStyle: {
		type: 'string',
		role: 'local',
		__experimentalRole: 'local',
	},

	formContainerSwitcher: {
        type: 'boolean',
        default: false,
    },

	containerType: {
		type: 'string',
		default: 'full-width'
	},
	containerTypeFull: {
		type: 'string',
		default: 'boxed'
	},
	// Container wrapper tag name and link are not required in PHP as it is only used in render and save.
	htmlTag: {
		type: 'string',
		default: 'div',
	},
	htmlTagLink: {
		type: 'object',
		default: {
			url: '',
			opensInNewTab: false,
			noFollow: false,
		}
	},
	linkTarget: {
		type: 'boolean',
		default: false,
	},
	contentWidth: {
		type: 'string',
		default: 'alignfull',
	},
	innerContentWidth: {
		type: 'string',
		default: 'alignwide',
	},
	customWidth: {
		type: 'object',
		default: {
			Desktop: '100',
			Tablet: '100',
			Mobile: '100'
		}
	},
	containerCustomWidth: {
		type: 'object',
		default: {
			Desktop: '100',
			Tablet: '100',
			Mobile: '100'
		}
	},

	containerCustomWidthUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		}
	},
	isContainerGlobalPaddingOverride: {
		type: 'object',
		default: {
			Desktop: false,
			Tablet: false,
			Mobile: false
		}
	},
	customWidthUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		}
	},
	
	globalRowGap: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	rowGap: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},

	rowGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	containerRowGapHasEdited: {
		type: 'boolean',
		default: false,
	},

	globalColumnGap: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	columnGap: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},

	columnGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	containerColumnGapHasEdited: {
		type: 'boolean',
		default: false,
	},

	containerZIndex: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},

	resetFallBackCustomWidth: {
		type: 'object',
		default: {
			Desktop: '100',
			Tablet: '100',
			Mobile: '100'
		}
	},

	widthDesktop: {
		type: 'number',
		default: 100,
	},
	widthTablet: {
		type: 'number',
	},
	widthMobile: {
		type: 'number',
		default: 100,
	},
	widthType: {
		type: 'string',
		default: '%',
	},

	// Content boxed width
	fullWidthContentBoxedWidth: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	fullWidthContentBoxedWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	globalFullWidthContentBoxedWidth: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	fullWidthContentBoxedWidthHasEdited: {
		type: 'boolean',
		default: false,
	},
	// End content boxed width
	innerContentCustomWidthDesktop: {
		type: 'number',
		default: 1200,
	},
	innerContentCustomWidthTablet: {
		type: 'number',
		default: 1024,
	},
	innerContentCustomWidthMobile: {
		type: 'number',
		default: 767,
	},
	innerContentCustomWidthType: {
		type: 'string',
		default: 'px',
	},

	minHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},

	minHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	containerDirection: {
		type: 'object',
		default: {
			Desktop: 'row',
			Tablet: '',
			Mobile: '',
		}
	},
	containerLayout: {
		type: 'string',
		default: 'flex',
	},

	containerChildrenWidth: {
		type: 'string',
		default: 'default',
	},

	containerEqualHeight: {
		type: 'boolean',
		default: false,
	},


	containerColumnsItemList: {
		type: 'object',
		default: {
			Desktop: [
				{
					id: 'column-1',
					title: 'Column 1',
					type: 'custom',
					width: 1,
					widthUnits: 'fr',
					min: 10,
					minUnits: 'px',
					max: 1,
					maxUnits: 'fr',
				}
			],
			Tablet: [
				{
					id: 'column-1',
					title: 'Column 1',
					type: 'custom',
					width: 1,
					widthUnits: 'fr',
					min: 10,
					minUnits: 'px',
					max: 1,
					maxUnits: 'fr',
				}
			],
			Mobile: [
				{
					id: 'column-1',
					title: 'Column 1',
					type: 'custom',
					width: 1,
					widthUnits: 'fr',
					min: 10,
					minUnits: 'px',
					max: 1,
					maxUnits: 'fr',
				}
			],
		},
	},

	containerRowsItemList: {
		type: 'object',
		default: {
			Desktop: [
				{
					id: 'row-1',
					title: 'Row 1',
					type: 'custom',
					width: 1,
					widthUnits: 'fr',
					min: 10,
					minUnits: 'px',
					max: 1,
					maxUnits: 'fr',
				}
			],
			Tablet: [
				{
					id: 'row-1',
					title: 'Row 1',
					type: 'custom',
					width: 1,
					widthUnits: 'fr',
					min: 10,
					minUnits: 'px',
					max: 1,
					maxUnits: 'fr',
				}
			],
			Mobile: [
				{
					id: 'row-1',
					title: 'Row 1',
					type: 'custom',
					width: 1,
					widthUnits: 'fr',
					min: 10,
					minUnits: 'px',
					max: 1,
					maxUnits: 'fr',
				}
			],
		},
	},

	containerJustify: {
		type: 'object',
		default: {
			Desktop: 'center',
			Tablet: '',
			Mobile: '',
		}
	},
	containerGridAlignItems: {
		type: 'object',
		default: {
			Desktop: 'stretch',
			Tablet: '',
			Mobile: '',
		}
	},
	containerGridJustifyItems: {
		type: 'object',
		default: {
			Desktop: 'stretch',
			Tablet: '',
			Mobile: '',
		}
	},

	directionDesktop: {
		type: 'string',
		default: 'column',
	},
	directionTablet: {
		type: 'string',
	},
	directionMobile: {
		type: 'string',
	},
	containerAlignItems:{
		type: 'object',
		default: {
			Desktop: 'center',
			Tablet: '',
			Mobile: '',
		}
	},

	justifyContentDesktop: {
		type: 'string',
		default: 'center',
	},
	justifyContentTablet: {
		type: 'string',
		isGBSStyle: true,
	},
	justifyContentMobile: {
		type: 'string',
	},

	containerWrap: {
		type: 'object',
		default: {
			Desktop: 'wrap',
			Tablet: 'wrap',
			Mobile: 'wrap',
		}
	},

	// wrapDesktop: {
	// 	type: 'string',
	// 	default: 'nowrap',
	// },
	// wrapTablet: {
	// 	type: 'string',
	// },
	// wrapMobile: {
	// 	type: 'string',
	// 	default: 'wrap',
	// },
	alignContentDesktop: {
		type: 'string',
		default: '',
	},
	alignContentTablet: {
		type: 'string',
		isGBSStyle: true,
	},
	alignContentMobile: {
		type: 'string',
	},


	/** Start Background Normal for fb container */
	containerBgColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	containerBgNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	containerBgNormalClassicColor: {
		type: 'string',
		default: '',
	},
	containerBgNormalGradientColor: {
		type: 'string',
		default: null,
	},
	containerBgNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	containerBgNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Bg Normal Image for fb container */
	containerBgNormalBackgroundImageUrl: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    containerBgNormalBackgroundImagePosition: {
        type: 'object',
        default: {
            Desktop: { x: 0.5, y: 0.5 },
            Tablet: { x: 0.5, y: 0.5 },
            Mobile: { x: 0.5, y: 0.5 }
        }
    },
    containerBgNormalBackgroundImageAttachment: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    containerBgNormalBackgroundImageRepeat: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    containerBgNormalBackgroundImageSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },


	/**Bg Hover for fb container */
	containerBgHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	containerBgHoverClassicColor: {
		type: 'string',
		default: '',
	},
	containerBgHoverGradientColor: {
		type: 'string',
		default: null,
	},
	containerBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	containerBgHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Hover Image for fb container */
	containerBgHoverBackgroundImageUrl: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	containerBgHoverBackgroundImagePosition: {
		type: 'object',
		default: {
			Desktop: { x: 0.5, y: 0.5 },
			Tablet: { x: 0.5, y: 0.5 },
			Mobile: { x: 0.5, y: 0.5 }
		}
	},
	containerBgHoverBackgroundImageAttachment: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	containerBgHoverBackgroundImageRepeat: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	containerBgHoverBackgroundImageSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	/** End Background for fb container */

	/** Start Overlay for fb container */
	containerBgOverlaySwitcher: {
		type: 'boolean',
		default: false,
	},
	containerBgOverlayOpacity: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},

	containerBgOverlayColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	containerBgOverlayNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	containerBgOverlayNormalClassicColor: {
		type: 'string',
		default: '',
	},
	containerBgOverlayNormalGradientColor: {
		type: 'string',
		default: null,
	},
	containerBgOverlayNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	containerBgOverlayNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Bg Normal Image for fb container */
	containerBgOverlayNormalBackgroundImageUrl: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    containerBgOverlayNormalBackgroundImagePosition: {
        type: 'object',
        default: {
            Desktop: { x: 0.5, y: 0.5 },
            Tablet: { x: 0.5, y: 0.5 },
            Mobile: { x: 0.5, y: 0.5 }
        }
    },
    containerBgOverlayNormalBackgroundImageAttachment: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    containerBgOverlayNormalBackgroundImageRepeat: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    containerBgOverlayNormalBackgroundImageSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },


	/**Bg Hover for fb container */
	containerBgOverlayHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	containerBgOverlayHoverClassicColor: {
		type: 'string',
		default: '',
	},
	containerBgOverlayHoverGradientColor: {
		type: 'string',
		default: null,
	},
	containerBgOverlayHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	containerBgOverlayHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Hover Image for fb container */
	containerBgOverlayHoverBackgroundImageUrl: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	containerBgOverlayHoverBackgroundImagePosition: {
		type: 'object',
		default: {
			Desktop: { x: 0.5, y: 0.5 },
			Tablet: { x: 0.5, y: 0.5 },
			Mobile: { x: 0.5, y: 0.5 }
		}
	},
	containerBgOverlayHoverBackgroundImageAttachment: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	containerBgOverlayHoverBackgroundImageRepeat: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	containerBgOverlayHoverBackgroundImageSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},

	/** End Overlay for fb container */

	/** Start Padding */
	containerGlobalPadding: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	containerPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	containerDesktopPadding: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		}
	},
	containerTabletPadding: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		}
	},
	containerMobilePadding: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		}
	},
	containerPaddingLink : {
        type : 'boolean',
        default: true
    },
	
	/** Start Margin */
	containerMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    containerDesktopMargin: {
        type: 'object',
        default: {
			top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    containerTabletMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    containerMobileMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
			right: '',
        },
    },
	containerMarginLink : {
        type : 'boolean',
        default: true
    },
	variationSelected: {
		type: 'boolean',
		default: false,
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	isBlockRootParent: {
		type: 'boolean',
		default: false,
	},
	bottomType: {
		type: 'string',
		default: 'none',
	},
	bottomColor: {
		type: 'string',
		default: '#333',
	},
	bottomHeight: {
		type: 'number',
	},
	bottomHeightTablet: {
		type: 'number',
	},
	bottomHeightMobile: {
		type: 'number',
	},
	bottomWidth: {
		type: 'number',
		default: 100,
	},
	topType: {
		type: 'string',
		default: 'none',
	},
	topColor: {
		type: 'string',
		default: '#333',
	},
	topHeight: {
		type: 'number',
	},
	topHeightTablet: {
		type: 'number',
	},
	topHeightMobile: {
		type: 'number',
	},
	topWidth: {
		type: 'number',
		default: 100,
	},
	topFlip: {
		type: 'boolean',
		default: false,
	},
	bottomFlip: {
		type: 'boolean',
		default: false,
	},
	topInvert: {
		type: 'boolean',
		default: false,
	},
	bottomInvert: {
		type: 'boolean',
		default: true,
	},
	topContentAboveShape: {
		type: 'boolean',
		default: false,
	},
	bottomContentAboveShape: {
		type: 'boolean',
		default: false,
	},
	widthSetByUser: {
		type: 'boolean',
		default: false,
	},
	backgroundCustomSizeDesktop: {
		type: 'number',
		default: 100,
	},
	backgroundCustomSizeTablet: {
		type: 'number',
	},
	backgroundCustomSizeMobile: {
		type: 'number',
	},
	backgroundCustomSizeType: {
		type: 'string',
		default: '%',
	},
	overlayType: {
		type: 'string',
		default: 'none',
		isGBSStyle: true,
	},
	overlayOpacity: {
		type: 'number',
		default: 1,
	},
	overlayBlendMode: {
		type: 'string',
		default: 'normal',
	},
	overlayBlendModeTablet: {
		type: 'string',
		default: '',
	},
	overlayBlendModeMobile: {
		type: 'string',
		default: '',
	},
	// Background image position.
	centralizedPosition: {
		type: 'boolean',
		default: false,
	},
	customPosition: {
		type: 'string',
		default: 'default',
	},
	xPositionDesktop: {
		type: 'number',
		default: '',
	},
	xPositionTablet: {
		type: 'number',
	},
	xPositionMobile: {
		type: 'number',
	},
	xPositionType: {
		type: 'string',
		default: 'px',
	},
	xPositionTypeTablet: {
		type: 'string',
		default: 'px',
	},
	xPositionTypeMobile: {
		type: 'string',
		default: 'px',
	},

	yPositionDesktop: {
		type: 'number',
		default: '',
	},
	yPositionTablet: {
		type: 'number',
	},
	yPositionMobile: {
		type: 'number',
	},
	yPositionType: {
		type: 'string',
		default: 'px',
	},
	yPositionTypeTablet: {
		type: 'string',
		default: 'px',
	},
	yPositionTypeMobile: {
		type: 'string',
		default: 'px',
	},

	// Background image position.
	backgroundVideoColor: {
		type: 'string',
		default: '#FFFFFF75',
	},
	backgroundVideo: {
		type: 'object',
	},
	backgroundVideoOpacity: {
		type: 'number',
		default: 0.5,
	},
	textColor: {
		type: 'string',
	},
	linkColor: {
		type: 'string',
	},
	linkHoverColor: {
		type: 'string',
	},

	// responsive code
	innerContentCustomWidthTypeTablet: {
		type: 'string',
		default: 'px',
	},
	innerContentCustomWidthTypeMobile: {
		type: 'string',
		default: 'px',
	},

	widthTypeTablet: {
		type: 'string',
		default: '%',
	},
	widthTypeMobile: {
		type: 'string',
		default: '%',
	},

	// Need remove
	minHeightTypeTablet: {
		type: 'string',
		default: 'px',
	},
	minHeightTypeMobile: {
		type: 'string',
		default: 'px',
	},
	// End Need remove

	// correct formating
	topHeightType: {
		type: 'string',
		default: 'px',
	},
	topHeightTypeTablet: {
		type: 'string',
		default: 'px',
	},
	topHeightTypeMobile: {
		type: 'string',
		default: 'px',
	},
	bottomHeightType: {
		type: 'string',
		default: 'px',
	},
	bottomHeightTypeTablet: {
		type: 'string',
		default: 'px',
	},
	bottomHeightTypeMobile: {
		type: 'string',
		default: 'px',
	},
	overflow: {
		type: 'string',
		default: 'visible',
	},
	topDividerWidthType: {
		type: 'string',
		default: '%',
	},
	bottomDividerWidthType: {
		type: 'string',
		default: '%',
	},
	topDividerHeightType: {
		type: 'string',
		default: 'px',
	},
	bottomDividerHeightType: {
		type: 'string',
		default: 'px',
	},
	equalHeight: {
		type: 'boolean',
		default: false,
	},
	gradientColor1: {
		type: 'string',
		default: '#06558a',
	},
	gradientColor2: {
		type: 'string',
		default: '#0063A1',
	},
	gradientType: {
		type: 'string',
		default: 'linear',
	},
	selectGradient: {
		type: 'string',
		default: 'basic',
	},
	gradientLocation1: {
		type: 'number',
		default: 0,
	},
	gradientLocation2: {
		type: 'number',
		default: 100,
	},
	gradientAngle: {
		type: 'number',
		default: 0,
	},
	gradientOverlayAngle: {
		type: 'number',
		default: 0,
	},
	backgroundOverlayType: {
		type: 'string',
		default: 'none',
	},
	backgroundOverlayImageDesktop: {
		type: 'object',
	},
	backgroundOverlayImageTablet: {
		type: 'object',
	},
	backgroundOverlayImageMobile: {
		type: 'object',
	},
	backgroundPositionOverlayDesktop: {
		type: 'object',
		default: {
			x: 0.5,
			y: 0.5,
		},
	},
	backgroundPositionOverlayTablet: {
		type: 'object',
	},
	backgroundPositionOverlayMobile: {
		type: 'object',
	},
	backgroundSizeOverlayDesktop: {
		type: 'string',
		default: 'cover',
	},
	backgroundSizeOverlayTablet: {
		type: 'string',
	},
	backgroundSizeOverlayMobile: {
		type: 'string',
	},
	backgroundRepeatOverlayDesktop: {
		type: 'string',
		default: 'no-repeat',
	},
	backgroundRepeatOverlayTablet: {
		type: 'string',
	},
	backgroundRepeatOverlayMobile: {
		type: 'string',
	},
	backgroundAttachmentOverlayDesktop: {
		type: 'string',
		default: 'scroll',
	},
	backgroundAttachmentOverlayTablet: {
		type: 'string',
	},
	backgroundAttachmentOverlayMobile: {
		type: 'string',
	},
	backgroundOverlayColor: {
		type: 'string',
	},
	backgroundImageOverlayColor: {
		type: 'string',
		default: '#FFFFFF75',
	},
	backgroundOverlayImageColor: {
		type: 'string',
		default: '#FFFFFF75',
	},
	backgroundCustomSizeOverlayDesktop: {
		type: 'number',
		default: 100,
	},
	backgroundCustomSizeOverlayTablet: {
		type: 'number',
	},
	backgroundCustomSizeOverlayMobile: {
		type: 'number',
	},
	backgroundCustomOverlaySizeType: {
		type: 'string',
		default: '%',
	},
	customOverlayPosition: {
		type: 'string',
		default: 'default',
	},
	xPositionOverlayDesktop: {
		type: 'number',
		default: '',
	},
	xPositionOverlayTablet: {
		type: 'number',
	},
	xPositionOverlayMobile: {
		type: 'number',
	},
	xPositionOverlayType: {
		type: 'string',
		default: 'px',
	},
	xPositionOverlayTypeTablet: {
		type: 'string',
		default: 'px',
	},
	xPositionOverlayTypeMobile: {
		type: 'string',
		default: 'px',
	},

	yPositionOverlayDesktop: {
		type: 'number',
		default: '',
	},
	yPositionOverlayTablet: {
		type: 'number',
	},
	yPositionOverlayMobile: {
		type: 'number',
	},
	yPositionOverlayType: {
		type: 'string',
		default: 'px',
	},
	yPositionOverlayTypeTablet: {
		type: 'string',
		default: 'px',
	},
	yPositionOverlayTypeMobile: {
		type: 'string',
		default: 'px',
	},
	gradientOverlayColor1: {
		type: 'string',
		default: '#06558a',
	},
	gradientOverlayColor2: {
		type: 'string',
		default: '#0063A1',
	},
	gradientOverlayType: {
		type: 'string',
		default: 'linear',
	},
	selectOverlayGradient: {
		type: 'string',
		default: 'basic',
	},
	gradientOverlayLocation1: {
		type: 'number',
		default: 0,
	},
	gradientOverlayLocation2: {
		type: 'number',
		default: 100,
	},
	childrenWidthDesktop: {
		type: 'string',
	},
	childrenWidthTablet: {
		type: 'string',
	},
	childrenWidthMobile: {
		type: 'string',
	},

	// Special Animations Extension Attributes.
	// At the moment, these are only required for Container and hence these have only been declared here.
	UAGAnimationDelayInterval: {
		type: 'number',
		default: 200,
	},
	UAGAnimationDoNotApplyToContainer: {
		type: 'boolean',
		default: false,
	},
	UAGAnimationShowContainerAdvancedSettings: {
		type: 'boolean',
		default: false,
	},
	backgroundVideoFallbackImage: {
		type: 'object',
	},
	// --------------------------------------------------------------
	layout: { // Layout will be either grid or flex and by default it will be flex if not set.
		type: 'string',
		default: '',
	},
	gridColumnDesktop: {
		type:'array',
		default: [ ...gridCssArray ],
	},
	gridColumnTablet: {
		type:'array',
		default: [ ...gridCssArray ],
	},
	gridColumnMobile: {
		type:'array',
		default: [ ...gridCssArray ],
	},
	gridRowDesktop:{
		type: 'array',
		default: [ ...gridCssArray ],
	},
	gridRowTablet:{
		type: 'array',
		default: [ ...gridCssArray ],
	},
	gridRowMobile:{
		type: 'array',
		default: [ ...gridCssArray ],
	},
	gridAlignItemsDesktop: {
		type:'string',
		default: 'stretch',
	},
	gridAlignItemsTablet: {
		type:'string',
		default: 'stretch',
	},
	gridAlignItemsMobile: {
		type:'string',
		default: 'stretch',
	},
	gridJustifyItemsDesktop: {
		type:'string',
		default: 'stretch',
	},
	gridJustifyItemsTablet: {
		type:'string',
		default: 'stretch',
	},
	gridJustifyItemsMobile: {
		type:'string',
		default: 'stretch',
	},
	gridAlignContentDesktop: {
		type:'string',
		default: 'stretch',
	},
	gridAlignContentTablet: {
		type:'string',
		default: 'stretch',
	},
	gridAlignContentMobile: {
		type:'string',
		default: 'stretch',
	},
	gridJustifyContentDesktop: {
		type:'string',
		default: 'stretch',
	},
	gridJustifyContentTablet: {
		type:'string',
		default: 'stretch',
	},
	gridJustifyContentMobile: {
		type:'string',
		default: 'stretch',
	},
	orderDesktop: {
		type: 'string',
		default: 'initial',
	},
	orderTablet: {
		type: 'string',
		default: 'initial',
	},
	orderMobile: {
		type: 'string',
		default: 'initial',
	},
	customOrderDesktop: {
		type: 'number',
	},
	customOrderTablet: {
		type: 'number',
	},
	customOrderMobile: {
		type: 'number',
	},

	containerDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    containerTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    containerMobileSwitcher: {
        type: 'boolean',
        default: false,
    },

	containerOverflow: {
        type: 'string',
        default: 'default',
    },
	containerPositionType: {
        type: 'string',
        default: 'default'
    },
    containerHZOrientationType: {
        type: 'string',
        default: 'left'
    },
    containerVROrientationType: {
        type: 'string',
        default: 'top'
    },
    containerHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    containerHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    containerHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    containerHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    containerVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    containerVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    containerVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    containerVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

	containerBorder: {
        type: 'string',
        default: 'none',
    },
    containerBorderColor: {
        type: 'string',
    },
    containerBorderHoverColor: {
        type: 'string',
    },
    containerBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },

    containerBorderUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    containerDesktopBorderWidth: {
        type: 'object',
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    containerTabBorderWidth: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    containerMobileBorderWidth: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    containerBorderLink : {
        type : 'boolean',
        default: true
    },

    containerBorderRadiusUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    containerDesktopBorderRadiusWidth: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    containerTabBorderRadiusWidth: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    containerMobileBorderRadiusWidth: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    containerBorderRadiusLink : {
        type : 'boolean',
        default: true
    },

	containerGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    containerGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    containerGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    containerGlobalHoverBoxShadowValues: {
        type: 'array',
        default: [],
    },
    containerGlobalHoverBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
	containerGlobalCustomCSS : {
		type: 'string',
		default: '',
	},
	containerGlobalCustomCSSValue : {
		type: 'string',
		default: '',
	},
	containerGlobalCustomCSSID : {
		type: 'string',
		default: '',
	},
	containerGlobalCustomCSSClass : {
		type: 'string',
		default: '',
	},
	loopAutoApplied: {
		type: 'boolean',
		default: false,
	},
};

export default attributes;
