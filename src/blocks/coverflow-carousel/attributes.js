const attributes = {
	blockID: {
		type: 'string',
		default: ''
	},
	blockStyle: {
		type: 'string',
		default: '',
	},

	showNavigation: {
		type: 'boolean',
		default: true,
	},

	showPagination: {
		type: 'boolean',
		default: true,
	},

	paginationType: {
		type: 'string',
		default: 'bullets'
	},

	CarouselWidth: {
		type: 'object',
		default: {
			Desktop: '450',
			Tablet: '',
			Mobile: ''
		}
	},
	CarouselWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	CarouselHeight: {
		type: 'object',
		default: {
			Desktop: '300',
			Tablet: '',
			Mobile: ''
		}
	},
	CarouselHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},

	carouselItemTranslateSwitcher: {
		type: 'string',
		default: 'X'
	},
	carouselItemRotateSwitcher: {
		type: 'string',
		default: 'X'
	},

	carouselItemTranslateX: {
		type: 'object',
		default: {
			Desktop: '260',
			Tablet: '',
			Mobile: ''
		}
	},
	carouselItemTranslateXUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},

	carouselItemTranslateY: {
		type: 'object',
		default: {
			Desktop: '0',
			Tablet: '',
			Mobile: ''
		}
	},
	carouselItemTranslateYUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},

	carouselItemTranslateZ: {
		type: 'object',
		default: {
			Desktop: '-100',
			Tablet: '',
			Mobile: ''
		}
	},
	carouselItemTranslateZUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},

	carouselItemRotateY: {
		type: 'object',
		default: {
			Desktop: '55',
			Tablet: '',
			Mobile: ''
		}
	},
	carouselItemRotateYUnits: {
		type: 'object',
		default: {
			Desktop: 'deg',
			Tablet: 'deg',
			Mobile: 'deg'
		}
	},

	carouselItemRotateX: {
		type: 'object',
		default: {
			Desktop: '0',
			Tablet: '',
			Mobile: ''
		}
	},
	carouselItemRotateXUnits: {
		type: 'object',
		default: {
			Desktop: 'deg',
			Tablet: 'deg',
			Mobile: 'deg'
		}
	},

	carouselItemRotateZ: {
		type: 'object',
		default: {
			Desktop: '0',
			Tablet: '',
			Mobile: ''
		}
	},
	carouselItemRotateZUnits: {
		type: 'object',
		default: {
			Desktop: 'deg',
			Tablet: 'deg',
			Mobile: 'deg'
		}
	},

	carouselPerspective: {
		type: 'object',
		default: {
			Desktop: '2000',
			Tablet: '',
			Mobile: ''
		}
	},
	carouselPerspectiveUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},

	carouselItemScale: {
		type: 'object',
		default: {
			Desktop: '0.85',
			Tablet: '',
			Mobile: ''
		}
	},
	carouselItemScaleUnits: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},

	transitionSpeed: {
		type: 'number',
		default: 1000,
	},
	carouselReflection: {
		type: 'boolean',
		default: false,
	},
	carouselReflectionGap: {
		type: 'number',
		default: 2,
	},
	carouselReflectionOpacity: {
		type: 'number',
		default: 8,
	},
	carouselTransitionEasing: {
		type: 'string',
		default: 'cubic-bezier(0.16, 1, 0.3, 1)',
	},
	autoplay: {
		type: 'boolean',
		default: true,
	},
	autoplaySpeed: {
		type: 'number',
		default: 2000,
	},
	loop: {
		type: 'boolean',
		default: true,
	},
	allowTouchMove: {
		type: 'boolean',
		default: true,
	},
	pauseOnHover: {
		'type': 'boolean',
		'default': false
	},
	stopOnLastSlide: {
		'type': 'boolean',
		'default': false
	},
	reverseDirection: {
		'type': 'boolean',
		'default': false
	},
	enableKeyboardControl: {
		'type': 'boolean',
		'default': true
	},
	enableMouseWheel: {
		'type': 'boolean',
		'default': false
	},
	enableKeyboardNavigation: {
		type: 'boolean',
		default: false
	},
	carouselArrowPositionType: {
		type: 'string',
		default: 'outside',
	},

	carouselArrowPosition: {
		type: 'string',
		default: 'center',
	},
	carouselArrowDirection: {
		type: 'string',
		default: 'row',
	},
	carouselArrowPositionTopOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	carouselArrowPositionTopOffsetUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		},
	},
	carouselArrowPositionLeftOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	carouselArrowPositionLeftOffsetUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		},
	},
	carouselArrowPositionRightOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	carouselArrowPositionRightOffsetUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		},
	},
	carouselArrowPositionBottomOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	carouselArrowPositionBottomOffsetUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		},
	},
	carouselArrowPositionOutsidePadding: {
		type: 'object',
		default: {
			Desktop: '50',
			Tablet: '',
			Mobile: '',
		},
	},
	carouselArrowPositionOutsidePaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	carouselArrowGap: {
		type: 'object',
		default: {
			Desktop: '10',
			Tablet: '',
			Mobile: '',
		},
	},
	carouselArrowGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},

	carouselArrowsIconSwitcher: {
		type: 'boolean',
		default: false,
	},

	carouselArrowsIconLeftAlign: {
		type: 'string',
		default: 'icon',
	},

	carouselArrowsIconLeft: {
		type: 'string',
		default: 'arrow-left',
	},

	carouselArrowsIconLeftImageUrl: {
		type: 'string',
		default: '',
	},
	carouselArrowsIconLeftImageAlt: {
		type: 'string',
		default: '',
	},
	carouselArrowsIconLeftImageID: {
		type: 'string',
		default: '',
	},

	carouselArrowsIconRightAlign: {
		type: 'string',
		default: 'icon',
	},

	carouselArrowsIconRight: {
		type: 'string',
		default: 'arrow-right',
	},

	carouselArrowsIconRightImageUrl: {
		type: 'string',
		default: '',
	},
	carouselArrowsIconRightImageAlt: {
		type: 'string',
		default: '',
	},
	carouselArrowsIconRightImageID: {
		type: 'string',
		default: '',
	},

	/** Start Background */
	coverflowCarouselItemBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	coverflowCarouselItemBgType: {
		type: 'string',
		default: 'classic'
	},
	coverflowCarouselItemBgClassicColor: {
		type: 'string',
		default: ''
	},
	coverflowCarouselItemBgGradientColor: {
		type: 'string',
	},
	coverflowCarouselItemBgCustomGradientSwitcher: {
		type: 'boolean',
		default: false
	},
	coverflowCarouselItemBgCustomGradientInputValue: {
		type: 'string',
		default: ''
	},
	coverflowCarouselItemBgColorStyle: {
		type: 'string',
		default: ''
	},
	coverflowCarouselItemBgImageUrl: {
		type: 'string',
		default: ''
	},
	coverflowCarouselItemBgImageAlt: {
		type: 'string',
		default: ''
	},
	coverflowCarouselItemBgImageID: {
		type: 'string',
		default: ''
	},
	coverflowCarouselItemBgImagePosition: {
		type: 'string',
		default: ''
	},
	coverflowCarouselItemBgImageAttachment: {
		type: 'string',
		default: ''
	},
	coverflowCarouselItemBgImageSize: {
		type: 'string',
		default: ''
	},
	coverflowCarouselItemBgImageRepeat: {
		type: 'string',
		default: ''
	},
	coverflowCarouselItemHoverBgType: {
		type: 'string',
		default: 'classic'
	},
	coverflowCarouselItemBgHoverClassicColor: {
		type: 'string',
	},
	coverflowCarouselItemBgHoverGradientColor: {
		type: 'string',
	},
	coverflowCarouselItemBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false
	},
	coverflowCarouselItemBgHoverCustomGradientInputValue: {
		type: 'string',
		default: ''
	},
	coverflowCarouselItemHoverBgImageUrl: {
		type: 'string',
		default: ''
	},
	coverflowCarouselItemHoverBgImageAlt: {
		type: 'string',
		default: ''
	},
	coverflowCarouselItemHoverBgImageID: {
		type: 'string',
		default: ''
	},
	coverflowCarouselItemHoverBgImagePosition: {
		type: 'string',
		default: ''
	},
	coverflowCarouselItemHoverBgImageAttachment: {
		type: 'string',
		default: ''
	},
	coverflowCarouselItemHoverBgImageSize: {
		type: 'string',
		default: ''
	},
	coverflowCarouselItemHoverBgImageRepeat: {
		type: 'string',
		default: ''
	},
	/** End Background */

	/** Start Padding */
	coverflowCarouselItemPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	coverflowCarouselItemPaddingDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselItemPaddingTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselItemPaddingMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselItemPaddingLink: {
		type: 'boolean',
		default: true
	},
	/** End Padding */

	/** Start Margin */
	coverflowCarouselItemMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	coverflowCarouselItemMarginDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselItemMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselItemMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselItemMarginLink: {
		type: 'boolean',
		default: true
	},
	/** End Margin */

	/** Start Border */
	coverflowCarouselItemBorder: {
		type: 'string',
		default: 'none',
	},
	coverflowCarouselItemBorderColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	coverflowCarouselItemBorderColor: {
		type: 'string',
		default: '',
	},
	coverflowCarouselItemBorderHoverColor: {
		type: 'string',
		default: '',
	},
	coverflowCarouselItemBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	coverflowCarouselItemBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselItemBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselItemBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselItemBorderLink: {
		type: 'boolean',
		default: true,
	},
	/** End Border */

	/** Start Border Radius */
	coverflowCarouselItemBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	coverflowCarouselItemBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselItemBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselItemBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselItemBorderRadiusLink: {
		type: 'boolean',
		default: true,
	},
	/** End Border Radius */

	/** Start Arrows Style */
	carouselArrowsSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: '',
		},
	},
	carouselArrowsSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	carouselArrowsColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	carouselArrowsColor: {
		type: 'string',
		default: '#333333',
	},
	carouselArrowsColorHover: {
		type: 'string',
		default: '',
	},

	/** Start Background */
	carouselArrowsBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	carouselArrowsBgColor: {
		type: 'string',
		default: '#efefef',
	},
	carouselArrowsBgColorHover: {
		type: 'string',
		default: '',
	},
	/** End Background */

	carouselArrowsWidth: {
		type: 'object',
		default: {
			Desktop: '46',
			Tablet: '',
			Mobile: '',
		},
	},
	carouselArrowsWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	carouselArrowsHeight: {
		type: 'object',
		default: {
			Desktop: '46',
			Tablet: '',
			Mobile: '',
		},
	},
	carouselArrowsHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},

	/** Start Border */
	carouselArrowsBorder: {
		type: 'string',
		default: 'none',
	},
	carouselArrowsBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	carouselArrowsBorderColor: {
		type: 'string',
		default: ''
	},
	carouselArrowsBorderHoverColor: {
		type: 'string',
	},
	carouselArrowsBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	carouselArrowsBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	carouselArrowsBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	carouselArrowsBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	carouselArrowsBorderLink: {
		type: 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	carouselArrowsBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	carouselArrowsBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	carouselArrowsBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	carouselArrowsBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	carouselArrowsBorderRadiusLink: {
		type: 'boolean',
		default: true
	},

	/** Start Box Shadow */
	carouselArrowsBoxShadowSwitcher: {
		type: 'string',
		default: 'normal',
	},
	carouselArrowsBoxShadowValues: {
		type: 'array',
		default: [],
	},
	carouselArrowsBoxShadowCssValue: {
		type: 'string',
		default: '',
	},
	carouselArrowsBoxShadowHoverValues: {
		type: 'array',
		default: [],
	},
	carouselArrowsBoxShadowHoverCssValue: {
		type: 'string',
		default: '',
	},
	/** End Box Shadow */

	/** Start Dots Style */
	carouselDotsMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	carouselDotsMarginDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	carouselDotsMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	carouselDotsMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	carouselDotsMarginLink: {
		type: 'boolean',
		default: true
	},

	carouselDotsPosition: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	carouselDotsPositionUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		},
	},

	carouselDotsSwitcher: {
		type: 'string',
		default: 'normal',
	},
	carouselNormalDotsBgColor: {
		type: 'string',
		default: '#333333',
	},
	carouselActiveDotsBgColor: {
		type: 'string',
		default: '',
	},
	carouselNormalDotsWidth: {
		type: 'object',
		default: {
			Desktop: '8',
			Tablet: '',
			Mobile: '',
		},
	},
	carouselNormalDotsWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	carouselNormalDotsHeight: {
		type: 'object',
		default: {
			Desktop: '8',
			Tablet: '',
			Mobile: '',
		},
	},
	carouselNormalDotsHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},

	/** Start Border */
	carouselNormalDotsBorder: {
		type: 'string',
		default: 'none',
	},
	carouselNormalDotsBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	carouselNormalDotsBorderColor: {
		type: 'string',
		default: ''
	},
	carouselNormalDotsBorderHoverColor: {
		type: 'string',
	},
	carouselNormalDotsBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	carouselNormalDotsBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	carouselNormalDotsBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	carouselNormalDotsBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	carouselNormalDotsBorderLink: {
		type: 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	carouselNormalDotsBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	carouselNormalDotsBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	carouselNormalDotsBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	carouselNormalDotsBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	carouselNormalDotsBorderRadiusLink: {
		type: 'boolean',
		default: true
	},

	carouselActiveDotsWidth: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	carouselActiveDotsWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	carouselActiveDotsHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	carouselActiveDotsHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},

	/** Start Border */
	carouselActiveDotsBorder: {
		type: 'string',
		default: 'none',
	},
	carouselActiveDotsBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	carouselActiveDotsBorderColor: {
		type: 'string',
		default: ''
	},
	carouselActiveDotsBorderHoverColor: {
		type: 'string',
	},
	carouselActiveDotsBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	carouselActiveDotsBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	carouselActiveDotsBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	carouselActiveDotsBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	carouselActiveDotsBorderLink: {
		type: 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	carouselActiveDotsBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	carouselActiveDotsBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	carouselActiveDotsBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	carouselActiveDotsBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	carouselActiveDotsBorderRadiusLink: {
		type: 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Fraction */
	carouselFractionColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	carouselFractionColor: {
		type: 'string',
		default: '',
	},
	carouselFractionHoverColor: {
		type: 'string',
	},

	carouselFractionGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	carouselFractionGlobalTypoSwitcher: {
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
	carouselFractionGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	carouselFractionGlobalTypoOption: {
		type: 'object',
		default: { label: 'Default', value: 'default' },
	},

	carouselFractionFontFamily: {
		type: 'string',
		default: 'Default',
	},
	carouselFractionFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: ''
		}
	},
	carouselFractionFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	carouselFractionFontWeight: {
		type: 'string',
		default: ''
	},
	carouselFractionFontStyle: {
		type: 'string',
		default: ''
	},
	carouselFractionTextTransform: {
		type: 'string',
		default: ''
	},
	carouselFractionTextDecoration: {
		type: 'string',
		default: ''
	},
	carouselFractionLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	carouselFractionLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	carouselFractionLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	carouselFractionLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Fraction */

	/** Start Progressbar */
	carouselProgressbarBGColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	carouselProgressbarBGColor: {
		type: 'string',
		default: '#f5f5f5',
	},
	carouselProgressbarBGActiveColor: {
		type: 'string',
		default: '#000000',
	},
	carouselProgressbarHeight: {
		type: 'object',
		default: {
			Desktop: '5',
			Tablet: '',
			Mobile: '',
		},
	},
	carouselProgressbarHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	carouselProgressbarWidth: {
		type: 'object',
		default: {
			Desktop: '100',
			Tablet: '',
			Mobile: '',
		},
	},
	carouselProgressbarWidthUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		},
	},
	/** End Progressbar */


	/** End Dots Style */

	/** Start Global Setting */
	coverflowCarouselGlobalZIndex: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	coverflowCarouselOverflow: {
		type: 'string',
		default: 'default',
	},
	/** Start Padding */
	coverflowCarouselGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	coverflowCarouselGlobalPaddingDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalPaddingTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalPaddingMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalPaddingLink: {
		type: 'boolean',
		default: true
	},
	/** End Padding */

	/** Start Margin */
	coverflowCarouselGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	coverflowCarouselGlobalMarginDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalMarginLink: {
		type: 'boolean',
		default: true
	},
	/** End Margin */

	/** Start Background */
	coverflowCarouselGlobalBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	coverflowCarouselGlobalBackgroundType: {
		type: 'string',
		default: 'classic'
	},
	coverflowCarouselGlobalClassicColor: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalGradientColor: {
		type: 'string',
	},
	coverflowCarouselGlobalCustomGradientSwitcher: {
		type: 'boolean',
		default: false
	},
	coverflowCarouselGlobalCustomGradientInputValue: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalBackgroundColorStyle: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalBackgroundImageUrl: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalBackgroundImageAlt: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalBackgroundImageID: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalBackgroundImagePosition: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalBackgroundImageAttachment: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalBackgroundImageSize: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalBackgroundImageRepeat: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalBghoverBackgroundType: {
		type: 'string',
		default: 'classic'
	},
	coverflowCarouselGlobalBgHoverClassicColor: {
		type: 'string',
	},
	coverflowCarouselGlobalHoverGradientColor: {
		type: 'string',
	},
	coverflowCarouselGlobalHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false
	},
	coverflowCarouselGlobalHoverCustomGradientInputValue: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalHoverBackgroundImageUrl: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalHoverBackgroundImageAlt: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalHoverBackgroundImageID: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalHoverBackgroundImagePosition: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalHoverBackgroundImageAttachment: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalHoverBackgroundImageSize: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalHoverBackgroundImageRepeat: {
		type: 'string',
		default: ''
	},
	/** End Background */

	/** Start Border */
	coverflowCarouselGlobalBorder: {
		type: 'string',
		default: 'none',
	},
	coverflowCarouselGlobalBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	coverflowCarouselGlobalBorderColor: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalBorderHoverColor: {
		type: 'string',
	},
	coverflowCarouselGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	coverflowCarouselGlobalBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalBorderLink: {
		type: 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	coverflowCarouselGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	coverflowCarouselGlobalBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalBorderRadiusLink: {
		type: 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
	coverflowCarouselGlobalBoxShadowValues: {
		type: 'array',
		default: [],
	},
	coverflowCarouselGlobalBoxShadowCssValue: {
		type: 'string',
		default: '',
	},
	/** End Global Style */

	coverflowCarouselDesktopSwitcher: {
		type: 'boolean',
		default: false,
	},
	coverflowCarouselTabletSwitcher: {
		type: 'boolean',
		default: false,
	},
	coverflowCarouselMobileSwitcher: {
		type: 'boolean',
		default: false,
	},

	coverflowCarouselPositionType: {
		type: 'string',
		default: 'default'
	},
	coverflowCarouselHZOrientationType: {
		type: 'string',
		default: 'left'
	},
	coverflowCarouselVROrientationType: {
		type: 'string',
		default: 'top'
	},
	coverflowCarouselHZLeftOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	coverflowCarouselHZLeftOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	coverflowCarouselHZRightOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	coverflowCarouselHZRightOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	coverflowCarouselVRTopOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	coverflowCarouselVRTopOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	coverflowCarouselVRBottomOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	coverflowCarouselVRBottomOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	/** Start Class & ID Setting */
	coverflowCarouselGlobalWraperCustomCSS: {
		type: 'string',
		default: '',
	},
	coverflowCarouselGlobalWraperID: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalWraperClass: {
		type: 'string',
		default: ''
	},
	/** End Class & ID Setting */
};

export default attributes;
