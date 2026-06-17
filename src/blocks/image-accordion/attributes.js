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
		default: {
			top: "50",
			bottom: "50",
			left: "50",
			right: "50",
		},
	},
	imageAccordionItemBorderRadiusTablet: {
		type: "object",
		default: {
			top: "50",
			bottom: "50",
			left: "50",
			right: "50",
		},
	},
	imageAccordionItemBorderRadiusMobile: {
		type: "object",
		default: {
			top: "16",
			bottom: "16",
			left: "16",
			right: "16",
		},
	},
	imageAccordionItemBorderRadiusLink: {
		type: "boolean",
		default: true,
	},

	imageAccordionItemActiveBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "25",
			bottom: "25",
			left: "25",
			right: "25",
		},
	},
	imageAccordionItemActiveBorderRadiusTablet: {
		type: "object",
		default: {
			top: "16",
			bottom: "16",
			left: "16",
			right: "16",
		},
	},
	imageAccordionItemActiveBorderRadiusMobile: {
		type: "object",
		default: {
			top: "16",
			bottom: "16",
			left: "16",
			right: "16",
		},
	},
	imageAccordionItemActiveBorderRadiusLink: {
		type: "boolean",
		default: true,
	},

	imageAccordionOverlayColor: {
		type: "string",
		default: "rgba(0,0,0,0.55)",
	},
	imageAccordionShowTitle: {
		type: "boolean",
		default: true,
	},
	imageAccordionShowIcon: {
		type: "boolean",
		default: true,
	},
	imageAccordionShowSubtitle: {
		type: "boolean",
		default: true,
	},
	imageAccordionShowButton: {
		type: "boolean",
		default: true,
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
		default: {
			Desktop: "16",
			Tablet: "14",
			Mobile: "12",
		},
	},
	imageAccordionDotSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
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
		default: {
			Desktop: "13",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionNumberFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
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
		default: {
			Desktop: "18",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionIconSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",

			Mobile: "px",
		},
	},
	imageAccordionIconCircleBgColor: {
		type: "string",
		default: "#ffffff",
	},
	imageAccordionIconCircleSize: {
		type: "object",
		default: {
			Desktop: "44",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionIconCircleSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
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
		default: {
			Desktop: "18",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionTitleFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionTitleFontWeight: {
		type: "string",
		default: "600",
	},
	imageAccordionTitleLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionTitleLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionTitleFontFamily: {
		type: "string",
		default: "Default",
	},
	imageAccordionTitleFontStyle: {
		type: "string",
		default: "",
	},
	imageAccordionTitleTransform: {
		type: "string",
		default: "",
	},
	imageAccordionTitleDecoration: {
		type: "string",
		default: "",
	},
	imageAccordionTitleLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionTitleLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionTitleGlobalTypographyData: {
		type: "object",
		default: {},
	},
	imageAccordionTitleTypoType: {
		type: "string",
		default: "default",
	},
	imageAccordionTitleTypoOption: {
		type: "object",
		default: {
			label: "Default",
			value: "default",
		},
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
		default: {
			Desktop: "13",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionSubtitleFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionSubtitleFontWeight: {
		type: "string",
		default: "",
	},
	imageAccordionSubtitleLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionSubtitleLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionSubtitleFontFamily: {
		type: "string",
		default: "Default",
	},
	imageAccordionSubtitleFontStyle: {
		type: "string",
		default: "",
	},
	imageAccordionSubtitleTransform: {
		type: "string",
		default: "",
	},
	imageAccordionSubtitleDecoration: {
		type: "string",
		default: "",
	},
	imageAccordionSubtitleLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionSubtitleLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionSubtitleGlobalTypographyData: {
		type: "object",
		default: {},
	},
	imageAccordionSubtitleTypoType: {
		type: "string",
		default: "default",
	},
	imageAccordionSubtitleTypoOption: {
		type: "object",
		default: {
			label: "Default",
			value: "default",
		},
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
		default: {
			top: "1",
			bottom: "1",
			left: "1",
			right: "1",
		},
	},
	imageAccordionBtnBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionBtnBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "6",
			bottom: "6",
			left: "6",
			right: "6",
		},
	},
	imageAccordionBtnPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionBtnPaddingDesktop: {
		type: "object",
		default: {
			top: "8",
			bottom: "8",
			left: "18",
			right: "18",
		},
	},
	imageAccordionBtnFontSize: {
		type: "object",
		default: {
			Desktop: "13",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionBtnFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionBtnFontWeight: {
		type: "string",
		default: "",
	},
	imageAccordionBtnLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionBtnLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionBtnFontFamily: {
		type: "string",
		default: "Default",
	},
	imageAccordionBtnFontStyle: {
		type: "string",
		default: "",
	},
	imageAccordionBtnTransform: {
		type: "string",
		default: "",
	},
	imageAccordionBtnDecoration: {
		type: "string",
		default: "",
	},
	imageAccordionBtnLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionBtnLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionBtnGlobalTypographyData: {
		type: "object",
		default: {},
	},
	imageAccordionBtnTypoType: {
		type: "string",
		default: "default",
	},
	imageAccordionBtnTypoOption: {
		type: "object",
		default: {
			label: "Default",
			value: "default",
		},
	},

	imageAccordionPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionPaddingDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionPaddingTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionPaddingMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionPaddingLink: {
		type: "boolean",
		default: true,
	},

	// item padding unit

	imageAccordionItemPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionItemPaddingDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionItemPaddingTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionItemPaddingMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionItemPaddingLink: {
		type: "boolean",
		default: true,
	},

	imageAccordionMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionMarginDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionMarginTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionMarginMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionMarginLink: {
		type: "boolean",
		default: true,
	},

	// item margin unit

	imageAccordionItemMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionItemMarginDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionItemMarginTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionItemMarginMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionItemMarginLink: {
		type: "boolean",
		default: true,
	},

	imageAccordionGlobalZIndex: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
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

	imageAccordionBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	imageAccordionBackgroundType: {
		type: "string",
		default: "classic",
	},
	imageAccordionClassicColor: {
		type: "string",
		default: "",
	},
	imageAccordionGradientColor: {
		type: "string",
	},
	imageAccordionCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	imageAccordionCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	imageAccordionBackgroundImageUrl: {
		type: "string",
		default: "",
	},
	imageAccordionBackgroundImageAlt: {
		type: "string",
		default: "",
	},
	imageAccordionBackgroundImageID: {
		type: "string",
		default: "",
	},
	imageAccordionBackgroundImagePosition: {
		type: "string",
		default: "",
	},
	imageAccordionBackgroundImageAttachment: {
		type: "string",
		default: "",
	},
	imageAccordionBackgroundImageSize: {
		type: "string",
		default: "",
	},
	imageAccordionBackgroundImageRepeat: {
		type: "string",
		default: "",
	},
	imageAccordionHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	imageAccordionHoverClassicColor: {
		type: "string",
	},
	imageAccordionHoverGradientColor: {
		type: "string",
	},
	imageAccordionHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	imageAccordionHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	imageAccordionHoverBackgroundImageUrl: {
		type: "string",
		default: "",
	},
	imageAccordionHoverBackgroundImageAlt: {
		type: "string",
		default: "",
	},
	imageAccordionHoverBackgroundImageID: {
		type: "string",
		default: "",
	},
	imageAccordionHoverBackgroundImagePosition: {
		type: "string",
		default: "",
	},
	imageAccordionHoverBackgroundImageAttachment: {
		type: "string",
		default: "",
	},
	imageAccordionHoverBackgroundImageSize: {
		type: "string",
		default: "",
	},
	imageAccordionHoverBackgroundImageRepeat: {
		type: "string",
		default: "",
	},
	imageAccordionWrapperBorder: {
		type: "string",
		default: "none",
	},
	imageAccordionOverlayColorSwitcher: {
		type: "string",
		default: "normal",
	},
	imageAccordionTitleColorSwitcher: {
		type: "string",
		default: "normal",
	},
	imageAccordionIconColorSwitcher: {
		type: "string",
		default: "normal",
	},
	imageAccordionNumberColorSwitcher: {
		type: "string",
		default: "normal",
	},
	imageAccordionBtnColorSwitcher: {
		type: "string",
		default: "normal",
	},
	imageAccordionWrapperBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	imageAccordionWrapperBorderColor: {
		type: "string",
		default: "",
	},
	imageAccordionWrapperBorderHoverColor: {
		type: "string",
	},
	imageAccordionWrapperBorderTypeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionWrapperBorderTypeDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionWrapperBorderTypeTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionWrapperBorderTypeMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionWrapperBorderTypeLink: {
		type: "boolean",
		default: true,
	},
	imageAccordionWrapperBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionWrapperBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionWrapperBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionWrapperBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	imageAccordionWrapperBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	imageAccordionPositionType: {
		type: "string",
		default: "default",
	},
	imageAccordionHZOrientationType: {
		type: "string",
		default: "left",
	},
	imageAccordionVROrientationType: {
		type: "string",
		default: "top",
	},
	imageAccordionHZLeftOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionHZLeftOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionHZRightOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionHZRightOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionVRTopOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionVRTopOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionVRBottomOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	imageAccordionVRBottomOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	imageAccordionOverflow: {
		type: "string",
		default: "default",
	},
};

export default attributes;
