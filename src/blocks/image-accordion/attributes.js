const attributes = {
	/** Core */
	blockID: {
		type: "string",
		default: "",
	},
	blockStyle: {
		type: "string",
		default: "",
	},
	deviceType: {
		type: "string",
		default: "Desktop",
	},

	/** Preset Style: style-1, style-2, style-3, style-4 */
	accordionPresetStyle: {
		type: "string",
		default: "style-1",
	},

	/** Interaction: hover | click */
	accordionTrigger: {
		type: "string",
		default: "hover",
	},

	/** Layout direction: horizontal | vertical */
	accordionDirection: {
		type: "string",
		default: "horizontal",
	},

	/** Items array — each item holds its own image/icon/text */
	accordionItems: {
		type: "array",
		default: [
			{
				id: "item-1",
				imageUrl: "",
				imageAlt: "",
				imageID: 0,
				icon: "",
				frontendIcon: "",
				title: "The Journal.",
				subtitle: "Discover unique perspectives on urban design",
				number: "01",
				buttonText: "Get Started",
				buttonUrl: "",
				buttonTarget: false,
			},
			{
				id: "item-2",
				imageUrl: "",
				imageAlt: "",
				imageID: 0,
				icon: "",
				frontendIcon: "",
				title: "Wild River.",
				subtitle: "Discover unique perspectives",
				number: "02",
				buttonText: "Get Started",
				buttonUrl: "",
				buttonTarget: false,
			},
			{
				id: "item-3",
				imageUrl: "",
				imageAlt: "",
				imageID: 0,
				icon: "",
				frontendIcon: "",
				title: "Night Sky.",
				subtitle: "Discover unique perspectives",
				number: "03",
				buttonText: "Get Started",
				buttonUrl: "",
				buttonTarget: false,
			},
			{
				id: "item-4",
				imageUrl: "",
				imageAlt: "",
				imageID: 0,
				icon: "",
				frontendIcon: "",
				title: "Cold Mist.",
				subtitle: "Discover unique perspectives",
				number: "04",
				buttonText: "Get Started",
				buttonUrl: "",
				buttonTarget: false,
			},
			{
				id: "item-5",
				imageUrl: "",
				imageAlt: "",
				imageID: 0,
				icon: "",
				frontendIcon: "",
				title: "Sharp Peaks.",
				subtitle: "Discover unique perspectives",
				number: "05",
				buttonText: "Get Started",
				buttonUrl: "",
				buttonTarget: false,
			},
		],
	},

	/** Default active item index */
	accordionActiveIndex: {
		type: "number",
		default: 0,
	},

	/** Show/hide controls */
	accordionShowTitle: {
		type: "boolean",
		default: true,
	},
	accordionShowSubtitle: {
		type: "boolean",
		default: true,
	},
	accordionShowNumber: {
		type: "boolean",
		default: true,
	},
	accordionShowButton: {
		type: "boolean",
		default: false,
	},
	accordionShowIcon: {
		type: "boolean",
		default: false,
	},
	accordionShowOverlay: {
		type: "boolean",
		default: true,
	},

	/** Accordion Container Size */
	accordionHeight: {
		type: "object",
		default: {
			Desktop: "500",
			Tablet: "400",
			Mobile: "300",
		},
	},
	accordionHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	/** Active item expanded width (for horizontal) */
	accordionActiveWidth: {
		type: "object",
		default: {
			Desktop: "60",
			Tablet: "60",
			Mobile: "60",
		},
	},
	accordionActiveWidthUnits: {
		type: "object",
		default: {
			Desktop: "%",
			Tablet: "%",
			Mobile: "%",
		},
	},

	/** Gap between items */
	accordionGap: {
		type: "object",
		default: {
			Desktop: "8",
			Tablet: "6",
			Mobile: "4",
		},
	},
	accordionGapUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	/** Border Radius */
	accordionItemBorderRadiusUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	accordionItemBorderRadiusDesktop: {
		type: "object",
		default: { top: "16", bottom: "16", left: "16", right: "16" },
	},
	accordionItemBorderRadiusTablet: {
		type: "object",
		default: { top: "12", bottom: "12", left: "12", right: "12" },
	},
	accordionItemBorderRadiusMobile: {
		type: "object",
		default: { top: "8", bottom: "8", left: "8", right: "8" },
	},
	accordionItemBorderRadiusLink: {
		type: "boolean",
		default: true,
	},

	/** Transition speed */
	accordionTransitionSpeed: {
		type: "number",
		default: 500,
	},

	/** Overlay color */
	accordionOverlayColor: {
		type: "string",
		default: "rgba(0,0,0,0.45)",
	},
	accordionOverlayActiveColor: {
		type: "string",
		default: "rgba(0,0,0,0.2)",
	},

	/** Title Typography */
	accordionTitleColor: {
		type: "string",
		default: "#ffffff",
	},
	accordionTitleFontSize: {
		type: "object",
		default: { Desktop: "22", Tablet: "18", Mobile: "16" },
	},
	accordionTitleFontSizeUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	accordionTitleFontWeight: {
		type: "string",
		default: "700",
	},
	accordionTitleTag: {
		type: "string",
		default: "h3",
	},

	/** Subtitle Typography */
	accordionSubtitleColor: {
		type: "string",
		default: "#eeeeee",
	},
	accordionSubtitleFontSize: {
		type: "object",
		default: { Desktop: "14", Tablet: "13", Mobile: "12" },
	},
	accordionSubtitleFontSizeUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},

	/** Number Typography */
	accordionNumberColor: {
		type: "string",
		default: "#ffffff",
	},
	accordionNumberFontSize: {
		type: "object",
		default: { Desktop: "16", Tablet: "14", Mobile: "12" },
	},
	accordionNumberFontSizeUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},

	/** Icon size */
	accordionIconSize: {
		type: "object",
		default: { Desktop: "32", Tablet: "28", Mobile: "24" },
	},
	accordionIconSizeUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	accordionIconColor: {
		type: "string",
		default: "#ffffff",
	},
	accordionIconBgColor: {
		type: "string",
		default: "rgba(255,255,255,0.2)",
	},

	/** Button */
	accordionButtonColor: {
		type: "string",
		default: "#333333",
	},
	accordionButtonBgColor: {
		type: "string",
		default: "#ffffff",
	},
	accordionButtonHoverColor: {
		type: "string",
		default: "#ffffff",
	},
	accordionButtonHoverBgColor: {
		type: "string",
		default: "#333333",
	},
	accordionButtonBorderRadius: {
		type: "string",
		default: "6px",
	},
	accordionButtonFontSize: {
		type: "object",
		default: { Desktop: "14", Tablet: "13", Mobile: "12" },
	},
	accordionButtonFontSizeUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},

	/** Global Wrapper */
	accordionWraperID: {
		type: "string",
		default: "",
	},
	accordionWraperClass: {
		type: "string",
		default: "",
	},

	/** Global Padding */
	accordionPaddingUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	accordionPaddingDesktop: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	accordionPaddingTablet: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	accordionPaddingMobile: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	accordionPaddingLink: {
		type: "boolean",
		default: true,
	},

	/** Global Margin */
	accordionMarginUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	accordionMarginDesktop: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	accordionMarginTablet: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	accordionMarginMobile: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	accordionMarginLink: {
		type: "boolean",
		default: true,
	},

	/** Box Shadow */
	accordionBoxShadowSwitcher: {
		type: "string",
		default: "normal",
	},
	accordionBoxShadowValues: {
		type: "array",
		default: [],
	},
	accordionBoxShadowCssValue: {
		type: "string",
		default: "",
	},
	accordionBoxShadowHoverValues: {
		type: "array",
		default: [],
	},
	accordionBoxShadowHoverCssValue: {
		type: "string",
		default: "",
	},

	/** Global Z-Index */
	accordionGlobalZIndex: {
		type: "object",
		default: { Desktop: "", Tablet: "", Mobile: "" },
	},

	/** Custom CSS */
	accordionCustomCSS: {
		type: "string",
		default: "",
	},

	/** Responsive Visibility */
	accordionDesktopSwitcher: {
		type: "boolean",
		default: false,
	},
	accordionTabletSwitcher: {
		type: "boolean",
		default: false,
	},
	accordionMobileSwitcher: {
		type: "boolean",
		default: false,
	},
};

export default attributes;
