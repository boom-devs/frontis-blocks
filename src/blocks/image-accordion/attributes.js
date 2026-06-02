const pluginURL =
	typeof frontis_blocks_params !== "undefined"
		? frontis_blocks_params.plugin_url
		: typeof FrontisBlocksData !== "undefined"
		? FrontisBlocksData.pluginUrl
		: "";

const attributes = {
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

	imageAccordionPreset: {
		type: "string",
		default: "preset-1",
	},

	imageAccordionTrigger: {
		type: "string",
		default: "hover",
	},

	imageAccordionItems: {
		type: "array",
		default: [
			{
				id: "item-1",
				image: {
					url: `${pluginURL}assets/images/preset-bg.jpg`,
					id: "",
					alt: "",
					position: "center center",
					attachment: "scroll",
					repeat: "no-repeat",
					size: "cover",
				},
				title: "Discover Unique",
				subTitle: "Explore amazing places",
				mediaType: "icon",
				selectedIcon: "heart",
				selectedImage: { url: "", id: "" },
				buttonText: "Read More",
				buttonUrl: "#",
				buttonTarget: false,
				buttonNofollow: false,
			},
			{
				id: "item-2",
				image: {
					url: `${pluginURL}assets/images/preset-bg.jpg`,
					id: "",
					alt: "",
					position: "center center",
					attachment: "scroll",
					repeat: "no-repeat",
					size: "cover",
				},
				title: "Discover Unique",
				subTitle: "Explore amazing places",
				mediaType: "icon",
				selectedIcon: "heart",
				selectedImage: { url: "", id: "" },
				buttonText: "Read More",
				buttonUrl: "#",
				buttonTarget: false,
				buttonNofollow: false,
			},
			{
				id: "item-3",
				image: {
					url: `${pluginURL}assets/images/preset-bg.jpg`,
					id: "",
					alt: "",
					position: "center center",
					attachment: "scroll",
					repeat: "no-repeat",
					size: "cover",
				},
				title: "Discover Unique",
				subTitle: "Explore amazing places",
				mediaType: "icon",
				selectedIcon: "heart",
				selectedImage: { url: "", id: "" },
				buttonText: "Read More",
				buttonUrl: "#",
				buttonTarget: false,
				buttonNofollow: false,
			},
			{
				id: "item-4",
				image: {
					url: `${pluginURL}assets/images/preset-bg.jpg`,
					id: "",
					alt: "",
					position: "center center",
					attachment: "scroll",
					repeat: "no-repeat",
					size: "cover",
				},
				title: "Discover Unique",
				subTitle: "Explore amazing places",
				mediaType: "icon",
				selectedIcon: "heart",
				selectedImage: { url: "", id: "" },
				buttonText: "Read More",
				buttonUrl: "#",
				buttonTarget: false,
				buttonNofollow: false,
			},
			{
				id: "item-5",
				image: {
					url: `${pluginURL}assets/images/preset-bg.jpg`,
					id: "",
					alt: "",
					position: "center center",
					attachment: "scroll",
					repeat: "no-repeat",
					size: "cover",
				},
				title: "Discover Unique",
				subTitle: "Explore amazing places",
				mediaType: "icon",
				selectedIcon: "heart",
				selectedImage: { url: "", id: "" },
				buttonText: "Read More",
				buttonUrl: "#",
				buttonTarget: false,
				buttonNofollow: false,
			},
		],
	},

	imageAccordionWidth: {
		type: "object",
		default: {
			Desktop: "100",
			Tablet: "100",
			Mobile: "100",
		},
	},
	imageAccordionWidthUnits: {
		type: "object",
		default: {
			Desktop: "%",
			Tablet: "%",
			Mobile: "%",
		},
	},
	imageAccordionHeight: {
		type: "object",
		default: {
			Desktop: "500",
			Tablet: "400",
			Mobile: "300",
		},
	},
	imageAccordionHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	imageAccordionGap: {
		type: "object",
		default: {
			Desktop: "12",
			Tablet: "12",
			Mobile: "8",
		},
	},
	imageAccordionGapUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	imageAccordionItemBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionItemBorderRadiusDesktop: {
		type: "object",
		default: { top: "50", bottom: "50", left: "50", right: "50" },
	},
	imageAccordionItemBorderRadiusTablet: {
		type: "object",
		default: { top: "50", bottom: "50", left: "50", right: "50" },
	},
	imageAccordionItemBorderRadiusMobile: {
		type: "object",
		default: { top: "16", bottom: "16", left: "16", right: "16" },
	},
	imageAccordionItemBorderRadiusLink: {
		type: "boolean",
		default: true,
	},

	imageAccordionItemActiveBorderRadiusDesktop: {
		type: "object",
		default: { top: "25", bottom: "25", left: "25", right: "25" },
	},
	imageAccordionItemActiveBorderRadiusTablet: {
		type: "object",
		default: { top: "16", bottom: "16", left: "16", right: "16" },
	},
	imageAccordionItemActiveBorderRadiusMobile: {
		type: "object",
		default: { top: "16", bottom: "16", left: "16", right: "16" },
	},
	imageAccordionItemActiveBorderRadiusLink: {
		type: "boolean",
		default: true,
	},

	imageAccordionOverlayColor: {
		type: "string",
		default: "rgba(0,0,0,0.55)",
	},
	imageAccordionOverlayHoverColor: {
		type: "string",
		default: "",
	},

	imageAccordionShowDots: {
		type: "boolean",
		default: true,
	},
	imageAccordionDotColor: {
		type: "string",
		default: "#ffffff",
	},
	imageAccordionDotSize: {
		type: "object",
		default: { Desktop: "16", Tablet: "14", Mobile: "12" },
	},
	imageAccordionDotSizeUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},

	imageAccordionShowNumber: {
		type: "boolean",
		default: true,
	},
	imageAccordionNumberColor: {
		type: "string",
		default: "#ffffff",
	},
	imageAccordionNumberHoverColor: {
		type: "string",
		default: "",
	},
	imageAccordionNumberFontSize: {
		type: "object",
		default: { Desktop: "13", Tablet: "", Mobile: "" },
	},
	imageAccordionNumberFontSizeUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	imageAccordionNumberFontWeight: {
		type: "string",
		default: "",
	},

	imageAccordionIconColor: {
		type: "string",
		default: "#0875FF",
	},
	imageAccordionIconHoverColor: {
		type: "string",
		default: "#3b82f6",
	},
	imageAccordionIconSize: {
		type: "object",
		default: { Desktop: "18", Tablet: "", Mobile: "" },
	},
	imageAccordionIconSizeUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	imageAccordionIconCircleBgColor: {
		type: "string",
		default: "#ffffff",
	},
	imageAccordionIconCircleSize: {
		type: "object",
		default: { Desktop: "44", Tablet: "", Mobile: "" },
	},
	imageAccordionIconCircleSizeUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},

	imageAccordionTitleColor: {
		type: "string",
		default: "#ffffff",
	},
	imageAccordionTitleHoverColor: {
		type: "string",
		default: "",
	},
	imageAccordionTitleFontSize: {
		type: "object",
		default: { Desktop: "18", Tablet: "", Mobile: "" },
	},
	imageAccordionTitleFontSizeUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	imageAccordionTitleFontWeight: {
		type: "string",
		default: "600",
	},
	imageAccordionTitleLineHeight: {
		type: "object",
		default: { Desktop: "", Tablet: "", Mobile: "" },
	},
	imageAccordionTitleLineHeightUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},

	imageAccordionSubtitleColor: {
		type: "string",
		default: "rgba(255,255,255,0.8)",
	},
	imageAccordionSubtitleHoverColor: {
		type: "string",
		default: "",
	},
	imageAccordionSubtitleFontSize: {
		type: "object",
		default: { Desktop: "13", Tablet: "", Mobile: "" },
	},
	imageAccordionSubtitleFontSizeUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	imageAccordionSubtitleFontWeight: {
		type: "string",
		default: "",
	},

	imageAccordionBtnTextColor: {
		type: "string",
		default: "#ffffff",
	},
	imageAccordionBtnHoverTextColor: {
		type: "string",
		default: "",
	},
	imageAccordionBtnBgColor: {
		type: "string",
		default: "rgba(255,255,255,0.18)",
	},
	imageAccordionBtnHoverBgColor: {
		type: "string",
		default: "rgba(255,255,255,0.32)",
	},
	imageAccordionBtnBorderColor: {
		type: "string",
		default: "rgba(255,255,255,0.35)",
	},
	imageAccordionBtnBorder: {
		type: "string",
		default: "solid",
	},
	imageAccordionBtnBorderWidthDesktop: {
		type: "object",
		default: { top: "1", bottom: "1", left: "1", right: "1" },
	},
	imageAccordionBtnBorderRadiusUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	imageAccordionBtnBorderRadiusDesktop: {
		type: "object",
		default: { top: "6", bottom: "6", left: "6", right: "6" },
	},
	imageAccordionBtnPaddingUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	imageAccordionBtnPaddingDesktop: {
		type: "object",
		default: { top: "8", bottom: "8", left: "18", right: "18" },
	},
	imageAccordionBtnFontSize: {
		type: "object",
		default: { Desktop: "13", Tablet: "", Mobile: "" },
	},
	imageAccordionBtnFontSizeUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	imageAccordionBtnFontWeight: {
		type: "string",
		default: "",
	},

	imageAccordionPaddingUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	imageAccordionPaddingDesktop: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	imageAccordionPaddingTablet: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	imageAccordionPaddingMobile: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	imageAccordionPaddingLink: {
		type: "boolean",
		default: true,
	},

	imageAccordionMarginUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	imageAccordionMarginDesktop: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	imageAccordionMarginTablet: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	imageAccordionMarginMobile: {
		type: "object",
		default: { top: "", bottom: "", left: "", right: "" },
	},
	imageAccordionMarginLink: {
		type: "boolean",
		default: true,
	},

	imageAccordionGlobalZIndex: {
		type: "object",
		default: { Desktop: "", Tablet: "", Mobile: "" },
	},
	imageAccordionCustomCSS: {
		type: "string",
		default: "",
	},
	imageAccordionWraperID: {
		type: "string",
		default: "",
	},
	imageAccordionWraperClass: {
		type: "string",
		default: "",
	},

	imageAccordionDesktopSwitcher: {
		type: "boolean",
		default: false,
	},
	imageAccordionTabletSwitcher: {
		type: "boolean",
		default: false,
	},
	imageAccordionMobileSwitcher: {
		type: "boolean",
		default: false,
	},
};

export default attributes;
