const slideCount = 3;
const slideContent = [];

for (let i = 1; i <= slideCount; i++) {
	slideContent.push({
		isPreview: false,
	});
}

const attributes = {
	blockId: {
		type: 'string',
		default: ''
	},
	blockStyle: {
		type: 'string',
		default: '',
	},
	highlightColor: {
		type: 'string',
		default: '',
	},
	hoverHighlightColor: {
		type: 'string',
		default: '',
	},
	slideContent: {
		type: 'array',
		default: slideContent
	},
	slideItem: {
		type: 'number',
		default: slideCount
	},

	slidePerView: {
		type: 'number',
		default: 1,
	},
	spaceBetween: {
		type: 'number',
		default: 0,
	},
	transitionSpeed: {
		type: 'number',
		default: 500,
	},
	autoplay: {
		type: 'boolean',
		default: false,
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
	effect: {
		type: 'string',
		default: 'slide'
	},
	displayArrows: {
		type: 'boolean',
		default: true,
	},
	displayDots: {
		type: 'boolean',
		default: true,
	},
	paginationType: {
		type: 'string',
		default: 'bullets'
	},
	sliderHeight: {
		type: 'object',
		default: {
			Desktop: '300',
			Tablet: '',
			Mobile: ''
		}
	},
	sliderHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},

	sliderType: {
		type: 'string',
		default: 'slider'
	},

	slideEffect: {
		'type': 'string',
		'default': 'slide'
	},
	carouselEffect: {
		'type': 'string',
		'default': 'slide'
	},

	carouselPerColumn: {
		type: 'object',
		default: {
			Desktop: '2',
			Tablet: '2',
			Mobile: '1',
		},
	},
	carouselPerColumnGap: {
		type: 'object',
		default: {
			Desktop: '20',
			Tablet: '10',
			Mobile: '10',
		},
	},
	carouselPerColumnGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},


	sliderArrowPositionType: {
		type: 'string',
		default: 'outside',
	},

	sliderArrowPosition: {
		type: 'string',
		default: 'center',
	},
	sliderArrowDirection: {
		type: 'string',
		default: 'row',
	},
	sliderArrowPositionTopOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	sliderArrowPositionTopOffsetUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		},
	},
	sliderArrowPositionLeftOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	sliderArrowPositionLeftOffsetUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		},
	},
	sliderArrowPositionRightOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	sliderArrowPositionRightOffsetUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		},
	},
	sliderArrowPositionBottomOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	sliderArrowPositionBottomOffsetUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		},
	},
	sliderArrowPositionOutsidePadding: {
		type: 'object',
		default: {
			Desktop: '50',
			Tablet: '',
			Mobile: '',
		},
	},
	sliderArrowPositionOutsidePaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	sliderArrowGap: {
		type: 'object',
		default: {
			Desktop: '10',
			Tablet: '',
			Mobile: '',
		},
	},
	sliderArrowGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},

	sliderArrowsIconSwitcher: {
		type: 'boolean',
		default: false,
	},

	sliderArrowsIconLeftAlign: {
		type: 'string',
		default: 'icon',
	},

	sliderArrowsIconLeft: {
		type: 'string',
		default: 'arrow-left',
	},

	sliderArrowsIconLeftImageUrl: {
		type: 'string',
		default: '',
	},
	sliderArrowsIconLeftImageAlt: {
		type: 'string',
		default: '',
	},
	sliderArrowsIconLeftImageID: {
		type: 'string',
		default: '',
	},

	sliderArrowsIconRightAlign: {
		type: 'string',
		default: 'icon',
	},

	sliderArrowsIconRight: {
		type: 'string',
		default: 'arrow-right',
	},

	sliderArrowsIconRightImageUrl: {
		type: 'string',
		default: '',
	},
	sliderArrowsIconRightImageAlt: {
		type: 'string',
		default: '',
	},
	sliderArrowsIconRightImageID: {
		type: 'string',
		default: '',
	},

	/** Start Arrows Style */
	sliderArrowsSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: '',
		},
	},
	sliderArrowsSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	sliderArrowsColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	sliderArrowsColor: {
		type: 'string',
		default: '#333333',
	},
	sliderArrowsColorHover: {
		type: 'string',
		default: '',
	},

	/** Start Background */
	sliderArrowsBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	sliderArrowsBgColor: {
		type: 'string',
		default: '#efefef',
	},
	sliderArrowsBgColorHover: {
		type: 'string',
		default: '',
	},
	/** End Background */

	sliderArrowsWidth: {
		type: 'object',
		default: {
			Desktop: '46',
			Tablet: '',
			Mobile: '',
		},
	},
	sliderArrowsWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	sliderArrowsHeight: {
		type: 'object',
		default: {
			Desktop: '46',
			Tablet: '',
			Mobile: '',
		},
	},
	sliderArrowsHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},

	/** Start Border */
	sliderArrowsBorder: {
		type: 'string',
		default: 'none',
	},
	sliderArrowsBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	sliderArrowsBorderColor: {
		type: 'string',
		default: ''
	},
	sliderArrowsBorderHoverColor: {
		type: 'string',
	},
	sliderArrowsBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderArrowsBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderArrowsBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderArrowsBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderArrowsBorderLink: {
		type: 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	sliderArrowsBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderArrowsBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	sliderArrowsBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderArrowsBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderArrowsBorderRadiusLink: {
		type: 'boolean',
		default: true
	},

	/** Start Box Shadow */
	sliderArrowsBoxShadowSwitcher: {
		type: 'string',
		default: 'normal',
	},
	sliderArrowsBoxShadowValues: {
		type: 'array',
		default: [],
	},
	sliderArrowsBoxShadowCssValue: {
		type: 'string',
		default: '',
	},
	sliderArrowsBoxShadowHoverValues: {
		type: 'array',
		default: [],
	},
	sliderArrowsBoxShadowHoverCssValue: {
		type: 'string',
		default: '',
	},
	/** End Box Shadow */

	/** Start Dots Style */
	sliderDotsMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderDotsMarginDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderDotsMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderDotsMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderDotsMarginLink: {
		type: 'boolean',
		default: true
	},

	sliderDotsPosition: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	sliderDotsPositionUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		},
	},

	sliderDotsSwitcher: {
		type: 'string',
		default: 'normal',
	},
	sliderNormalDotsBgColor: {
		type: 'string',
		default: '#333333',
	},
	sliderActiveDotsBgColor: {
		type: 'string',
		default: '',
	},
	sliderNormalDotsWidth: {
		type: 'object',
		default: {
			Desktop: '8',
			Tablet: '',
			Mobile: '',
		},
	},
	sliderNormalDotsWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	sliderNormalDotsHeight: {
		type: 'object',
		default: {
			Desktop: '8',
			Tablet: '',
			Mobile: '',
		},
	},
	sliderNormalDotsHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},

	/** Start Border */
	sliderNormalDotsBorder: {
		type: 'string',
		default: 'none',
	},
	sliderNormalDotsBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	sliderNormalDotsBorderColor: {
		type: 'string',
		default: ''
	},
	sliderNormalDotsBorderHoverColor: {
		type: 'string',
	},
	sliderNormalDotsBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderNormalDotsBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderNormalDotsBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderNormalDotsBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderNormalDotsBorderLink: {
		type: 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	sliderNormalDotsBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderNormalDotsBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	sliderNormalDotsBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderNormalDotsBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderNormalDotsBorderRadiusLink: {
		type: 'boolean',
		default: true
	},

	sliderActiveDotsWidth: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	sliderActiveDotsWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	sliderActiveDotsHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	sliderActiveDotsHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},

	/** Start Border */
	sliderActiveDotsBorder: {
		type: 'string',
		default: 'none',
	},
	sliderActiveDotsBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	sliderActiveDotsBorderColor: {
		type: 'string',
		default: ''
	},
	sliderActiveDotsBorderHoverColor: {
		type: 'string',
	},
	sliderActiveDotsBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderActiveDotsBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderActiveDotsBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderActiveDotsBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderActiveDotsBorderLink: {
		type: 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	sliderActiveDotsBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderActiveDotsBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderActiveDotsBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderActiveDotsBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderActiveDotsBorderRadiusLink: {
		type: 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Fraction */
	sliderFractionColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	sliderFractionColor: {
		type: 'string',
		default: '',
	},
	sliderFractionHoverColor: {
		type: 'string',
	},

	sliderFractionGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	sliderFractionGlobalTypoSwitcher: {
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
	sliderFractionGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	sliderFractionGlobalTypoOption: {
		type: 'object',
		default: { label: 'Default', value: 'default' },
	},

	sliderFractionFontFamily: {
		type: 'string',
		default: 'Default',
	},
	sliderFractionFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: ''
		}
	},
	sliderFractionFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	sliderFractionFontWeight: {
		type: 'string',
		default: ''
	},
	sliderFractionFontStyle: {
		type: 'string',
		default: ''
	},
	sliderFractionTextTransform: {
		type: 'string',
		default: ''
	},
	sliderFractionTextDecoration: {
		type: 'string',
		default: ''
	},
	sliderFractionLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	sliderFractionLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	sliderFractionLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	sliderFractionLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Fraction */

	/** Start Progressbar */
	sliderProgressbarBGColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	sliderProgressbarBGColor: {
		type: 'string',
		default: '',
	},
	sliderProgressbarBGActiveColor: {
		type: 'string',
	},
	sliderProgressbarHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	sliderProgressbarHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	/** End Progressbar */


	/** End Dots Style */

	/** Start Global Setting */
	sliderGlobalZIndex: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	sliderOverflow: {
		type: 'string',
		default: 'default',
	},
	/** Start Padding */
	sliderGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderGlobalPaddingDesktop: {
		type: 'object',
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	sliderGlobalPaddingTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalPaddingMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalPaddingLink: {
		type: 'boolean',
		default: true
	},
	/** End Padding */

	/** Start Margin */
	sliderGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderGlobalMarginDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalMarginLink: {
		type: 'boolean',
		default: true
	},
	/** End Margin */

	/** Start Background */
	sliderGlobalBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	sliderGlobalBgNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	sliderGlobalBgNormalClassicColor: {
		type: 'string',
		default: '',
	},
	sliderGlobalBgNormalGradientColor: {
		type: 'string',
		default: null,
	},
	sliderGlobalBgNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	sliderGlobalBgNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	sliderGlobalBgHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	sliderGlobalBgHoverClassicColor: {
		type: 'string',
		default: '',
	},
	sliderGlobalBgHoverGradientColor: {
		type: 'string',
		default: null,
	},
	sliderGlobalBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	sliderGlobalBgHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** End Background */

	/** Start Border */
	sliderGlobalBorder: {
		type: 'string',
		default: 'none',
	},
	sliderGlobalBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	sliderGlobalBorderColor: {
		type: 'string',
		default: ''
	},
	sliderGlobalBorderHoverColor: {
		type: 'string',
	},
	sliderGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderGlobalBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalBorderLink: {
		type: 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	sliderGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderGlobalBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	sliderGlobalBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalBorderRadiusLink: {
		type: 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
	sliderGlobalBoxShadowSwitcher: {
		type: 'string',
		default: 'normal',
	},
	sliderGlobalBoxShadowValues: {
		type: 'array',
		default: [],
	},
	sliderGlobalBoxShadowCssValue: {
		type: 'string',
		default: '',
	},
	sliderGlobalBoxShadowHoverValues: {
		type: 'array',
		default: [],
	},
	sliderGlobalBoxShadowHoverCssValue: {
		type: 'string',
		default: '',
	},

	sliderDesktopSwitcher: {
		type: 'boolean',
		default: false,
	},
	sliderTabletSwitcher: {
		type: 'boolean',
		default: false,
	},
	sliderMobileSwitcher: {
		type: 'boolean',
		default: false,
	},


	/** Start Class & ID Setting */
	sliderGlobalWraperClass: {
		type: 'string',
		default: ''
	},
	sliderGlobalCustomCSS: {
		type: 'string',
		default: '',
	},
	/** End Class & ID Setting */

	/** Start Position */
	sliderPositionType: {
		type: 'string',
		default: 'default'
	},
	sliderHZOrientationType: {
		type: 'string',
		default: 'left'
	},
	sliderVROrientationType: {
		type: 'string',
		default: 'top'
	},
	sliderHZLeftOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	sliderHZLeftOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	sliderHZRightOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	sliderHZRightOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	sliderVRTopOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	sliderVRTopOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	sliderVRBottomOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	sliderVRBottomOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Position */

	/** Start Dots Style */
	sliderDotsSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: '',
		},
	},
	sliderDotsSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
};

export default attributes;
