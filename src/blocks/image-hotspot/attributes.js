const attributes = {
	blockID: {
		type: "string",
		default: "",
	},
	blockStyle: {
		type: "string",
		default: "",
	},
	imageHotspotImageUrl: {
		type: "string",
		default: "",
	},
	imageHotspotImageId: {
		type: "string",
		default: ""
	},
	imageHotspotImageAlt: {
		type: "string",
		default: ""
	},
	imageHotspotImageSize: {
		type: "string",
		default: "cover"
	},
	imageHotspotImageHeight: {
		type: "object",
		default: {
			Desktop: '500',
			Tablet: '500',
			Mobile: '400'
		}
	},
	imageHotspotImageHeightUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotImageBorderColor: {
		type: "string",
		default: ""
	},
	imageHotspotImageBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotImageBorderRadiusTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotImageBorderRadiusMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotImageBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotImageBorderRadiusLink: {
		type: "boolean",
		default: true
	},

	imageHotspotPresetStyle: {
		type: "string",
		default: "preset-1",
	},
	imageHotspotMarkerSvg: {
		type: "string",
		default: "preset-1",
	},

	imageHotspotHotspots: {
		type: "array",
		default: [
			{
				id: "hotspot-default-1",
				title: "Hotspot 1",
				description: "",
				icon: "plus",
				top: "25",
				left: "25",
				popoverPosition: "top",
				animation: "none",
				autoplay: true,
			},
			{
				id: "hotspot-default-2",
				title: "Hotspot 2",
				description: "",
				icon: "plus",
				top: "25",
				left: "75",
				popoverPosition: "top",
				animation: "none",
				autoplay: true,
			},
			{
				id: "hotspot-default-3",
				title: "Hotspot 3",
				description: "",
				icon: "plus",
				top: "75",
				left: "50",
				popoverPosition: "top",
				animation: "none",
				autoplay: true,
			},
		]
	},
	imageHotspotSelectedHotspotId: {
		type: "string",
		default: ""
	},

	imageHotspotDeviceType: {
		type: "string",
		default: "Desktop"
	},
	imageHotspotContainerShadowValues: {
		type: "array",
		default: [0, 0, 0, 0, '', '#00000000']
	},
	imageHotspotContainerShadowCssValue: {
		type: "string",
		default: ""
	},

	// Hotspot marker styles
	imageHotspotMarkerSize: {
		type: "object",
		default: {
			Desktop: '35',
			Tablet: '32',
			Mobile: '30'
		}
	},
	imageHotspotMarkerSizeUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotMarkerHoverSize: {
		type: "object",
		default: {
			Desktop: '40',
			Tablet: '37',
			Mobile: '35'
		}
	},
	imageHotspotMarkerHoverSizeUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	// End Marker Size

	imageHotspotMarkerColor: {
		type: "string",
		default: ""
	},
	imageHotspotMarkerHoverColor: {
		type: "string",
		default: ""
	},
	imageHotspotMarkerColorSwitcher: {
		type: "string",
		default: "normal"
	},
	imageHotspotMarkerSizeSwitcher: {
		type: "string",
		default: "normal"
	},
	imageHotspotMarkerBorderWidth: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspotMarkerBorderWidthUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotMarkerBorderColor: {
		type: "string",
		default: "transparent"
	},
	imageHotspotMarkerBorderRadius: {
		type: "object",
		default: {
			Desktop: '50',
			Tablet: '50',
			Mobile: '50'
		}
	},
	imageHotspotMarkerBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%'
		}
	},

	// Popover styles
	imageHotspotPopoverBgColor: {
		type: "string",
		default: "#ffffff"
	},
	imageHotspotPopoverBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	imageHotspotPopoverBgHoverColor: {
		type: "string",
		default: ""
	},
	imageHotspotPopoverWidth: {
		type: "object",
		default: {
			Desktop: '250',
			Tablet: '225',
			Mobile: '200'
		}
	},
	imageHotspotPopoverWidthUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotPopoverPadding: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspotPopoverPaddingUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotPopoverPaddingDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPopoverPaddingTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPopoverPaddingMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPopoverPaddingLink: {
		type: "boolean",
		default: true
	},
	imageHotspotPopoverMarginDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPopoverMarginTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPopoverMarginMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPopoverMarginUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotPopoverMarginLink: {
		type: "boolean",
		default: true
	},
	imageHotspotPopoverBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotPopoverBorderRadiusTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotPopoverBorderRadiusMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotPopoverBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotPopoverBorderRadiusLink: {
		type: "boolean",
		default: true
	},
	imageHotspotPopoverBorderWidthDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPopoverBorderWidthTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPopoverBorderWidthMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPopoverBorderWidthUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotPopoverBorderColor: {
		type: "string",
		default: ""
	},
	imageHotspotPopoverBorderWidthLink: {
		type: "boolean",
		default: true
	},
	imageHotspotPopoverImageBorderWidthDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotPopoverImageBorderWidthTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotPopoverImageBorderWidthMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotPopoverImageBorderWidthUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotPopoverImageBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotPopoverImageBorderRadiusTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotPopoverImageBorderRadiusMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotPopoverImageBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotPopoverImageBorderColor: {
		type: "string",
		default: ""
	},
	imageHotspotPopoverImageBorderWidthLink: {
		type: "boolean",
		default: true
	},
	imageHotspotPopoverImageBorderRadiusLink: {
		type: "boolean",
		default: true
	},
	imageHotspotPopoverShadowValues: {
		type: "object",
		default: [0, 4, 12, 0, '', 'rgba(0,0,0,0.15)']
	},
	imageHotspotPopoverShadowCssValue: {
		type: "string",
		default: ""
	},

	// Title typography
	imageHotspotTitleFontFamily: {
		type: "string",
		default: ""
	},
	imageHotspotTitleFontSize: {
		type: "object",
		default: {
			Desktop: '1.1',
			Tablet: '1.1',
			Mobile: '1.1'
		}
	},
	imageHotspotTitleFontSizeUnits: {
		type: "object",
		default: {
			Desktop: 'rem',
			Tablet: 'rem',
			Mobile: 'rem'
		}
	},
	imageHotspotTitleFontWeight: {
		type: "string",
		default: "600"
	},
	imageHotspotTitleFontStyle: {
		type: "string",
		default: "normal"
	},
	imageHotspotTitleColor: {
		type: "string",
		default: "#333333"
	},
	imageHotspotTitleHoverColor: {
		type: "string",
		default: ""
	},
	imageHotspotTitleColorSwitcher: {
		type: "string",
		default: "normal"
	},
	imageHotspotTitleMargin: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspotTitleMarginUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotTitlePaddingDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotTitlePaddingTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotTitlePaddingMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotTitlePaddingUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotTitlePaddingLink: {
		type: "boolean",
		default: true
	},
	imageHotspotTitleMarginDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotTitleMarginTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotTitleMarginMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotTitleMarginLink: {
		type: "boolean",
		default: true
	},
	imageHotspotTitleBorderWidthDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotTitleBorderWidthTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotTitleBorderWidthMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotTitleBorderWidthUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotTitleBorderWidthLink: {
		type: "boolean",
		default: true
	},
	imageHotspotTitleBorderColor: {
		type: "string",
		default: ""
	},
	imageHotspotTitleBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotTitleBorderRadiusTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotTitleBorderRadiusMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotTitleBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotTitleBorderRadiusLink: {
		type: "boolean",
		default: true
	},

	// Description typography
	imageHotspotDescFontFamily: {
		type: "string",
		default: ""
	},
	imageHotspotDescFontSize: {
		type: "object",
		default: {
			Desktop: '1',
			Tablet: '1',
			Mobile: '1'
		}
	},
	imageHotspotDescFontSizeUnits: {
		type: "object",
		default: {
			Desktop: 'rem',
			Tablet: 'rem',
			Mobile: 'rem'
		}
	},
	imageHotspotDescFontWeight: {
		type: "string",
		default: "400"
	},
	imageHotspotDescFontStyle: {
		type: "string",
		default: "normal"
	},
	imageHotspotDescColor: {
		type: "string",
		default: "#666666"
	},
	imageHotspotDescMargin: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspotDescMarginUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},

	// Title additional typography (missing from current attributes)
	imageHotspotTitleTextTransform: {
		type: "string",
		default: "none"
	},
	imageHotspotTitleTextDecoration: {
		type: "string",
		default: "none"
	},
	imageHotspotTitleLetterSpacing: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspotTitleLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotTitleLineHeight: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspotTitleLineHeightUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},

	// Description additional typography (missing from current attributes)
	imageHotspotDescTextTransform: {
		type: "string",
		default: "none"
	},
	imageHotspotDescTextDecoration: {
		type: "string",
		default: "none"
	},
	imageHotspotDescLetterSpacing: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspotDescLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotDescLineHeight: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspotDescLineHeightUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotDescHoverColor: {
		type: "string",
		default: ""
	},
	imageHotspotDescColorSwitcher: {
		type: "string",
		default: "normal"
	},
	imageHotspotDescPaddingDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotDescPaddingTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotDescPaddingMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotDescPaddingUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotDescPaddingLink: {
		type: "boolean",
		default: true
	},
	imageHotspotDescMarginDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotDescMarginTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotDescMarginMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotDescMarginLink: {
		type: "boolean",
		default: true
	},
	imageHotspotDescBorderWidthDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotDescBorderWidthTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotDescBorderWidthMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotDescBorderWidthUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotDescBorderWidthLink: {
		type: "boolean",
		default: true
	},
	imageHotspotDescBorderColor: {
		type: "string",
		default: ""
	},
	imageHotspotDescBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotDescBorderRadiusTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotDescBorderRadiusMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotDescBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotDescBorderRadiusLink: {
		type: "boolean",
		default: true
	},

	// Icon styles
	imageHotspotIconSize: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspotIconSizeUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotIconColor: {
		type: "string",
		default: "#ffffff"
	},
	imageHotspotIconColorSwitcher: {
		type: "string",
		default: "normal"
	},
	imageHotspotSocialLinkIconColorSwitcher: {
		type: "string",
		default: "normal"
	},

	// Padding
	imageHotspotPaddingUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotPaddingDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPaddingTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPaddingMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPaddingLink: {
		type: "boolean",
		default: true
	},

	// Margin
	imageHotspotMarginUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotMarginDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotMarginTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotMarginMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotMarginLink: {
		type: "boolean",
		default: true
	},

	// Border
	imageHotspotBorderUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotBorderDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotBorderTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotBorderMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotBorderLink: {
		type: "boolean",
		default: true
	},

	// Border Radius
	imageHotspotBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotBorderRadiusTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotBorderRadiusMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotBorderRadiusLink: {
		type: "boolean",
		default: true
	},
	imageHotspotDesktopSwitcher: {
		type: "boolean",
		default: false
	},
	imageHotspotTabletSwitcher: {
		type: "boolean",
		default: false
	},
	imageHotspotMobileSwitcher: {
		type: "boolean",
		default: false
	},

	// Custom CSS
	imageHotspotCustomCSS: {
		type: "string",
		default: ""
	},

	imageHotspotGlobalWraperID: {
		type: "string",
		default: ""
	},

	imageHotspotGlobalWraperClass: {
		type: "string",
		default: ""
	},
	imageHotspotCategoryFontFamily: {
		type: "string",
		default: ""
	},
	imageHotspotCategoryFontSize: {
		type: "object",
		default: {
			Desktop: '0.75',
			Tablet: '0.75',
			Mobile: '0.75'
		}
	},
	imageHotspotCategoryFontSizeUnits: {
		type: "object",
		default: {
			Desktop: 'rem',
			Tablet: 'rem',
			Mobile: 'rem'
		}
	},
	imageHotspotCategoryFontWeight: {
		type: "string",
		default: "600"
	},
	imageHotspotCategoryFontStyle: {
		type: "string",
		default: "normal"
	},
	imageHotspotCategoryColor: {
		type: "string",
		default: "#999999"
	},
	imageHotspotCategoryHoverColor: {
		type: "string",
		default: ""
	},
	imageHotspotCategoryColorSwitcher: {
		type: "string",
		default: "normal"
	},
	imageHotspotCategoryTextTransform: {
		type: "string",
		default: "uppercase"
	},
	imageHotspotCategoryTextDecoration: {
		type: "string",
		default: "none"
	},
	imageHotspotCategoryLetterSpacing: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspotCategoryLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotCategoryLineHeight: {
		type: "object",
		default: {
			Desktop: '1.4',
			Tablet: '1.4',
			Mobile: '1.4'
		}
	},
	imageHotspotCategoryLineHeightUnits: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspotCategoryPaddingDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotCategoryPaddingTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotCategoryPaddingMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotCategoryPaddingUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotCategoryPaddingLink: {
		type: "boolean",
		default: true
	},
	imageHotspotCategoryMarginDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '6',
			left: ''
		}
	},
	imageHotspotCategoryMarginTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotCategoryMarginMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotCategoryMarginUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotCategoryMarginLink: {
		type: "boolean",
		default: true
	},
	imageHotspotCategoryBorderColor: {
		type: "string",
		default: ""
	},
	imageHotspotPriceFontFamily: {
		type: "string",
		default: ""
	},
	imageHotspotPriceFontSize: {
		type: "object",
		default: {
			Desktop: '1',
			Tablet: '1',
			Mobile: '1'
		}
	},
	imageHotspotPriceFontSizeUnits: {
		type: "object",
		default: {
			Desktop: 'rem',
			Tablet: 'rem',
			Mobile: 'rem'
		}
	},
	imageHotspotPriceFontWeight: {
		type: "string",
		default: "600"
	},
	imageHotspotPriceFontStyle: {
		type: "string",
		default: "normal"
	},
	imageHotspotPriceColor: {
		type: "string",
		default: "#333333"
	},
	imageHotspotPriceHoverColor: {
		type: "string",
		default: ""
	},
	imageHotspotPriceColorSwitcher: {
		type: "string",
		default: "normal"
	},
	imageHotspotPriceTextTransform: {
		type: "string",
		default: "none"
	},
	imageHotspotPriceTextDecoration: {
		type: "string",
		default: "none"
	},
	imageHotspotPriceLetterSpacing: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspotPriceLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotPriceLineHeight: {
		type: "object",
		default: {
			Desktop: '1.4',
			Tablet: '1.4',
			Mobile: '1.4'
		}
	},
	imageHotspotPriceLineHeightUnits: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspotPricePaddingDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPricePaddingTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPricePaddingMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPricePaddingUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotPricePaddingLink: {
		type: "boolean",
		default: true
	},
	imageHotspotPriceMarginDesktop: {
		type: "object",
		default: {
			top: '8',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPriceMarginTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPriceMarginMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPriceMarginUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotPriceMarginLink: {
		type: "boolean",
		default: true
	},
	// Global Settings
	globalZIndex: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},
	imageHotspotOverflow: {
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
			top: '32',
			bottom: '32',
			left: '16',
			right: '16',
		},
	},
	globalPaddingTablet: {
		type: "object",
		default: {
			top: '32',
			bottom: '32',
			left: '16',
			right: '16',
		},
	},
	globalPaddingMobile: {
		type: "object",
		default: {
			top: '32',
			bottom: '32',
			left: '16',
			right: '16',
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
	imageHotspotGlobalimageHotspotShadowSwitcher: {
		type: 'string',
		default: 'normal',
	},
	imageHotspotGlobalimageHotspotShadowValues: {
		type: 'array',
		default: [],
	},
	imageHotspotGlobalimageHotspotShadowCssValue: {
		type: 'string',
		default: '',
	},
	imageHotspotGlobalHoverimageHotspotShadowValues: {
		type: 'array',
		default: [],
	},
	imageHotspotGlobalHoverimageHotspotShadowCssValue: {
		type: 'string',
		default: '',
	},
	imageHotspotPositionType: {
		type: "string",
		default: "default"
	},
	imageHotspotHZOrientationType: {
		type: "string",
		default: "left"
	},
	imageHotspotVROrientationType: {
		type: "string",
		default: "top"
	},
	imageHotspotHZLeftOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspotHZLeftOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	imageHotspotHZRightOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspotHZRightOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	imageHotspotVRTopOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspotVRTopOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	imageHotspotVRBottomOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspotVRBottomOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	imageHotspotSocialLinksGap: {
		type: "object",
		default: {
			Desktop: "5",
			Tablet: "5",
			Mobile: "5",
		},
	},
	imageHotspotSocialLinksGapUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	imageHotspotSocialLinksIconSize: {
		type: "object",
		default: {
			Desktop: "24",
			Tablet: "24",
			Mobile: "24",
		},
	},
	imageHotspotSocialLinksIconSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	imageHotspotBoxShadowSwitcher: {
		type: 'string',
		default: 'normal',
	},
	imageHotspotBoxShadowValues: {
		type: 'array',
		default: [],
	},
	imageHotspotBoxShadowCssValue: {
		type: 'string',
		default: '',
	},
	imageHotspotHoverBoxShadowValues: {
		type: 'array',
		default: [],
	},
	imageHotspotHoverBoxShadowCssValue: {
		type: 'string',
		default: '',
	},

	imageHotspotsPopoverBoxShadowCssValue: {
		type: "string",
		default: "",
	},
	imageHotspotsPopoverBoxShadowHoverCssValue: {
		type: "string",
		default: "",
	},

	/** Start Margin */
	imageHotspotsPopoverMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotsPopoverMarginDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	imageHotspotsPopoverMarginTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	imageHotspotsPopoverMarginMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	imageHotspotsPopoverMarginLink: {
		type: "boolean",
		default: true
	},
	/** End Margin */

	/** Start Border */
	imageHotspotsPopoverBorder: {
		type: "string",
		default: "none",
	},
	imageHotspotsPopoverBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	imageHotspotsPopoverBorderColor: {
		type: "string",
		default: "",
	},
	imageHotspotsPopoverBorderHoverColor: {
		type: "string",
		default: "",
	},
	imageHotspotsPopoverBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageHotspotsPopoverBorderDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotsPopoverBorderTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotsPopoverBorderMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotsPopoverBorderLink: {
		type: "boolean",
		default: true,
	},
	/** End Border */

	/** Start Border Radius */
	imageHotspotsPopoverBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageHotspotsPopoverBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotsPopoverBorderRadiusTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotsPopoverBorderRadiusMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotsPopoverBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	/** End Border Radius */

	/** Start Box Shadow */
	imageHotspotsPopoverBoxShadowSwitcher: {
		type: "string",
		default: "normal",
	},
	imageHotspotsPopoverBoxShadowValues: {
		type: "array",
		default: [],
	},
	imageHotspotsPopoverBoxShadowCssValue: {
		type: "string",
		default: "",
	},
	imageHotspotsPopoverBoxShadowHoverValues: {
		type: "array",
		default: [],
	},
	imageHotspotsPopoverBoxShadowHoverCssValue: {
		type: "string",
		default: "",
	},
	/** End Box Shadow */

	/** Start Hotspot Popover Padding (new) */
	imageHotspotsPopoverPaddingUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	imageHotspotsPopoverPaddingDesktop: {
		type: "object",
		default: {
			top: '12',
			right: '12',
			bottom: '12',
			left: '12'
		},
	},
	imageHotspotsPopoverPaddingTablet: {
		type: "object",
		default: {
			top: '12',
			right: '12',
			bottom: '12',
			left: '12'
		},
	},
	imageHotspotsPopoverPaddingMobile: {
		type: "object",
		default: {
			top: '12',
			right: '12',
			bottom: '12',
			left: '12'
		},
	},
	imageHotspotsPopoverPaddingLink: {
		type: "boolean",
		default: true,
	},
	/** End Hotspot Popover Padding (new) */

	/** Start Hotspot Popover Margin (new) */
	imageHotspotsPopoverMarginUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	imageHotspotsPopoverMarginDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotsPopoverMarginTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotsPopoverMarginMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotsPopoverMarginLink: {
		type: "boolean",
		default: true,
	},
	/** End Hotspot Popover Margin (new) */

	/** Start Hotspot Popover Border (new) */
	imageHotspotsPopoverBorder: {
		type: "string",
		default: "none",
	},
	imageHotspotsPopoverBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	imageHotspotsPopoverBorderColor: {
		type: "string",
		default: "",
	},
	imageHotspotsPopoverBorderHoverColor: {
		type: "string",
		default: "",
	},
	imageHotspotsPopoverBorderUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	imageHotspotsPopoverBorderDesktop: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotsPopoverBorderTablet: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotsPopoverBorderMobile: {
		type: "object",
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
	},
	imageHotspotsPopoverBorderLink: {
		type: "boolean",
		default: true,
	},
	/** End Hotspot Popover Border (new) */

	/** Start Hotspot Popover Border Radius (new) */
	imageHotspotsPopoverBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	imageHotspotsPopoverBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '10',
			right: '10',
			bottom: '10',
			left: '10'
		},
	},
	imageHotspotsPopoverBorderRadiusTablet: {
		type: "object",
		default: {
			top: '10',
			right: '10',
			bottom: '10',
			left: '10'
		},
	},
	imageHotspotsPopoverBorderRadiusMobile: {
		type: "object",
		default: {
			top: '10',
			right: '10',
			bottom: '10',
			left: '10'
		},
	},
	imageHotspotsPopoverBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	/** End Hotspot Popover Border Radius (new) */

	/** Start Hotspot Popover Box Shadow (new) */
	imageHotspotsPopoverBoxShadowSwitcher: {
		type: "string",
		default: "normal",
	},
	imageHotspotsPopoverBoxShadowValues: {
		type: "array",
		default: [0, 4, 12, 0, '', 'rgba(0,0,0,0.15)'],
	},
	imageHotspotsPopoverBoxShadowHoverValues: {
		type: "string",
		default: "",
	},
	/** End Hotspot Popover Box Shadow (new) */

	/** Start Background */
	imgotsHpotsPopoverBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	imgotsHpotsPopoverNormalBackgroundType: {
		type: "string",
		default: "classic",
	},
	imgotsHpotsPopoverNormalClassicColor: {
		type: "string",
		default: "#399CFF",
	},
	imgotsHpotsPopoverNormalGradientColor: {
		type: "string",
		default: null,
	},
	imgotsHpotsPopoverNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	imgotsHpotsPopoverNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	imgotsHpotsPopoverHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	imgotsHpotsPopoverHoverClassicColor: {
		type: "string",
		default: "",
	},
	imgotsHpotsPopoverHoverGradientColor: {
		type: "string",
		default: null,
	},
	imgotsHpotsPopoverHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	imgotsHpotsPopoverHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Background */

	/** Start imageHotspotsGlobalBg Background */
	imageHotspotsGlobalBgBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	imageHotspotsGlobalBgBgType: {
		type: 'string',
		default: 'classic'
	},
	imageHotspotsGlobalBgBgClassicColor: {
		type: 'string',
	},
	imageHotspotsGlobalBgBgGradientColor: {
		type: 'string',
	},
	imageHotspotsGlobalBgBgCustomGradientSwitcher: {
		type: 'boolean',
		default: false
	},
	imageHotspotsGlobalBgBgCustomGradientInputValue: {
		type: 'string',
		default: ''
	},
	imageHotspotsGlobalBgBgColorStyle: {
		type: 'string',
		default: ''
	},
	imageHotspotsGlobalBgBgImageUrl: {
		type: 'string',
		default: ''
	},
	imageHotspotsGlobalBgBgImageAlt: {
		type: 'string',
		default: ''
	},
	imageHotspotsGlobalBgBgImageID: {
		type: 'string',
		default: ''
	},
	imageHotspotsGlobalBgBgImagePosition: {
		type: 'string',
		default: ''
	},
	imageHotspotsGlobalBgBgImageAttachment: {
		type: 'string',
		default: ''
	},
	imageHotspotsGlobalBgBgImageSize: {
		type: 'string',
		default: ''
	},
	imageHotspotsGlobalBgBgImageRepeat: {
		type: 'string',
		default: ''
	},
	imageHotspotsGlobalBgBgHoverType: {
		type: 'string',
		default: 'classic'
	},
	imageHotspotsGlobalBgBgHoverClassicColor: {
		type: 'string',
	},
	imageHotspotsGlobalBgBgHoverGradientColor: {
		type: 'string',
	},
	imageHotspotsGlobalBgBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false
	},
	imageHotspotsGlobalBgBgHoverCustomGradientInputValue: {
		type: 'string',
		default: ''
	},
	imageHotspotsGlobalBgBgHoverColorStyle: {
		type: 'string',
		default: ''
	},
	imageHotspotsGlobalBgBgHoverImageUrl: {
		type: 'string',
		default: ''
	},
	imageHotspotsGlobalBgBgHoverImageAlt: {
		type: 'string',
		default: ''
	},
	imageHotspotsGlobalBgBgHoverImageID: {
		type: 'string',
		default: ''
	},
	imageHotspotsGlobalBgBgHoverImagePosition: {
		type: 'string',
		default: ''
	},
	imageHotspotsGlobalBgBgHoverImageAttachment: {
		type: 'string',
		default: ''
	},
	imageHotspotsGlobalBgBgHoverImageSize: {
		type: 'string',
		default: ''
	},
	imageHotspotsGlobalBgBgHoverImageRepeat: {
		type: 'string',
		default: ''
	},
	/** End imageHotspotsGlobalBg Background */

	/** Start imageHotspotsGlobal Border */
	imageHotspotsGlobalBorder: {
		type: 'string',
		default: "none",
	},
	imageHotspotsGlobalBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	imageHotspotsGlobalBorderColor: {
		type: 'string',
		default: ""
	},
	imageHotspotsGlobalBorderHoverColor: {
		type: 'string',
	},
	imageHotspotsGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotsGlobalBorderDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	imageHotspotsGlobalBorderTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	imageHotspotsGlobalBorderMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	imageHotspotsGlobalBorderLink: {
		type: "boolean",
		default: true
	},
	/** End imageHotspotsGlobal Border */

	/** Start imageHotspotsGlobal Border Units */
	imageHotspotsGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotsGlobalBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	imageHotspotsGlobalBorderRadiusTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	imageHotspotsGlobalBorderRadiusMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	imageHotspotsGlobalBorderRadiusLink: {
		type: "boolean",
		default: true
	},
	/** End imageHotspotsGlobal Border Units */

	/** Start imageHotspotsGlobal Border Radius */
	imageHotspotsGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotsGlobalBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '0',
			right: '0',
			bottom: '0',
			left: '0'
		}
	},
	imageHotspotsGlobalBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '0',
			right: '0',
			bottom: '0',
			left: '0'
		}
	},
	imageHotspotsGlobalBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '0',
			right: '0',
			bottom: '0',
			left: '0'
		}
	},
	imageHotspotsGlobalBorderRadiusLink: {
		type: 'boolean',
		default: true
	},
	/** End imageHotspotsGlobal Border Radius */

	/** Start Box Shadow */
	imageHotspotsGlobalBoxShadowSwitcher: {
		type: 'string',
		default: 'normal',
	},
	imageHotspotsGlobalBoxShadowValues: {
		type: 'array',
		default: [],
	},
	imageHotspotsGlobalBoxShadowCssValue: {
		type: 'string',
		default: '',
	},
	imageHotspotsGlobalBoxShadowHoverValues: {
		type: 'array',
		default: [],
	},
	imageHotspotsGlobalBoxShadowHoverCssValue: {
		type: 'string',
		default: '',
	},
	/** End Box Shadow */

}

export default attributes;
