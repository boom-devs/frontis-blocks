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
	imageHotspotImageBorderWidthDesktop: { 
		type: "object", 
		default: { 
			top: '', 
			right: '', 
			bottom: '', 
			left: '' 
		} 
	},
	imageHotspotImageBorderWidthTablet: { 
		type: "object", 
		default: { 
			top: '', 
			right: '', 
			bottom: '', 
			left: '' 
		} 
	},
	imageHotspotImageBorderWidthMobile: { 
		type: "object", 
		default: { 
			top: '', 
			right: '', 
			bottom: '', 
			left: '' 
		} 
	},
	imageHotspotImageBorderWidthUnits: {
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
	imageHotspotImageBorderWidthLink: {
		type: "boolean",
		default: true
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
		default: { top: '', 
			right: '', 
			bottom: '', 
			left: '' 
		} 
	},
	imageHotspotPopoverPaddingTablet: { 
		type: "object", 
		default: { top: '', 
			right: '', 
			bottom: '', 
			left: '' 
		} 
	},
	imageHotspotPopoverPaddingMobile: { 
		type: "object", 
		default: { top: '', 
			right: '', 
			bottom: '', 
			left: '' 
		} 
	},
	imageHotspotPopoverPaddingLink: { 
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
		default: { top: '', 
			right: '', 
			bottom: '', 
			left: '' 
		} 
	},
	imageHotspotPopoverBorderWidthTablet: { 
		type: "object", 
		default: { top: '', 
			right: '', 
			bottom: '', 
			left: '' 
		} 
	},
	imageHotspotPopoverBorderWidthMobile: { 
		type: "object", 
		default: { top: '', 
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

	imageHotspotShowPopoverImage: {
		type: "boolean",
		default: true
	},
	imageHotspotCategoryColor: {
		type: "string",
		default: "#999999"
	},
	imageHotspotPriceColor: {
		type: "string",
		default: "#333333"
	},
}

export default attributes;
