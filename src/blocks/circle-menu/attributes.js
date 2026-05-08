const attributes = {
	/** Core Block Identifiers & Structure */
	blockID: {
		type: "string",
		default: "",
	},
	/** Menu Presets & Positions */
	menuPosition: {
		type: "string",
		default: "bottom-right",
	},
	menuPreset: {
		type: "string",
		default: "half-circular-menu",
	},
	/** Sub Menu Items Content (Repeater Data) */
	menuItems: {
		type: "array",
		default: [
			{
				id: "item-1",
				title: "Phone",
				contentType: "icon",
				icon: "fas fa-phone",
				image: "",
				imageAlt: "",
				imageID: undefined,
				imageSize: "cover",
				link: "#",
			},
			{
				id: "item-2",
				title: "Message",
				contentType: "icon",
				icon: "fas fa-envelope",
				image: "",
				imageAlt: "",
				imageID: undefined,
				imageSize: "cover",
				link: "#",
			},
			{
				id: "item-3",
				title: "Cart",
				contentType: "icon",
				icon: "fas fa-cart-shopping",
				image: "",
				imageAlt: "",
				imageID: undefined,
				imageSize: "cover",
				link: "#",
			},
		],
	},
	/** Sub Menu Spacing (Circular & Horizontal) */
	submenuSpace: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	submenuSpaceUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	submenuHorizontalSpace: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	submenuHorizontalSpaceUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	submenuHorizontalAlign: {
		type: "string",
		default: "horizontal",
	},
	/** Main Menu Toggle Content (Open/Close) */
	mainMenuOpenType: {
		type: "string",
		default: "icon",
	},
	mainMenuCloseType: {
		type: "string",
		default: "icon",
	},
	mainMenuContentType: {
		type: "string",
		default: "icon",
	},
	mainMenuOpenText: {
		type: "string",
		default: "Open",
	},
	mainMenuCloseText: {
		type: "string",
		default: "Close",
	},
	mainMenuIcon: {
		type: "string",
		default: "fas fa-ellipsis",
	},
	mainMenuCloseIcon: {
		type: "string",
		default: "fas fa-xmark",
	},
	mainMenuImage: {
		type: "string",
		default: "",
	},
	mainMenuImageAlt: {
		type: "string",
		default: "",
	},
	mainMenuImageID: {
		type: "number",
		default: null,
	},
	mainMenuImageSize: {
		type: "string",
		default: "cover",
	},
	mainMenuCloseImage: {
		type: "string",
		default: "",
	},
	mainMenuCloseImageAlt: {
		type: "string",
		default: "",
	},
	mainMenuCloseImageID: {
		type: "number",
		default: null,
	},
	mainMenuCloseImageSize: {
		type: "string",
		default: "cover",
	},
	/** Action Triggers & General Offsets */
	triggerType: {
		type: "string",
		default: "hover",
	},

	offsetH: {
		type: "object",
		default: {
			Desktop: 40,
			Tablet: 40,
			Mobile: 40,
		},
	},
	offsetV: {
		type: "object",
		default: {
			Desktop: 40,
			Tablet: 40,
			Mobile: 40,
		},
	},
	activeOffsetH: {
		type: "object",
		default: {
			Desktop: 40,
			Tablet: 40,
			Mobile: 40,
		},
	},
	activeOffsetV: {
		type: "object",
		default: {
			Desktop: 40,
			Tablet: 40,
			Mobile: 40,
		},
	},
	/** Main Menu Styling (Size, Color, Background) */
	mainMenuSize: {
		type: "object",
		default: {
			Desktop: 72,
			Tablet: "",
			Mobile: "",
		},
	},
	mainMenuBgColor: {
		type: "string",
		default: "#399CFF",
	},
	mainMenuTextColor: {
		type: "string",
		default: "#FFFFFF",
	},
	mainMenuIconSize: {
		type: "object",
		default: {
			Desktop: 32,
			Tablet: "",
			Mobile: "",
		},
	},
	mainMenuBgHoverColor: {
		type: "string",
		default: "",
	},
	mainMenuTextHoverColor: {
		type: "string",
		default: "",
	},
	mainMenuBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	mainMenuTextColorSwitcher: {
		type: "string",
		default: "normal",
	},
	/** Main Menu Typography */
	mainMenuTextGlobalTypographyData: {
		type: "object",
		default: {},
	},
	mainMenuTextGlobalTypoSwitcher: {
		type: "object",
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
	mainMenuTextGlobalTypoType: {
		type: "string",
		default: "default",
	},
	mainMenuTextGlobalTypoOption: {
		type: "object",
		default: {
			label: "Default",
			value: "default",
		},
	},
	mainMenuTextFontFamily: {
		type: "string",
		default: "Default",
	},
	mainMenuTextFontSize: {
		type: "object",
		default: {
			Desktop: 16,
			Tablet: "",
			Mobile: "",
		},
	},
	mainMenuTextFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	mainMenuTextFontWeight: {
		type: "string",
		default: "400",
	},
	mainMenuTextFontStyle: {
		type: "string",
		default: "",
	},
	mainMenuTextTransform: {
		type: "string",
		default: "",
	},
	mainMenuTextDecoration: {
		type: "string",
		default: "",
	},
	mainMenuTextLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	mainMenuTextLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	mainMenuTextLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	mainMenuTextLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	/** Sub Menu Styling (Size, Color, Hover) */
	submenuShowTitleOnHover: {
		type: "boolean",
		default: false,
	},
	submenuSize: {
		type: "object",
		default: {
			Desktop: 62,
			Tablet: "",
			Mobile: "",
		},
	},
	submenuBgColor: {
		type: "string",
		default: "#D7EBFF",
	},
	submenuIconSize: {
		type: "object",
		default: {
			Desktop: 24,
			Tablet: "",
			Mobile: "",
		},
	},
	submenuIconColor: {
		type: "string",
		default: "#15171C",
	},
	submenuBgHoverColor: {
		type: "string",
		default: "",
	},
	submenuIconHoverColor: {
		type: "string",
		default: "",
	},
	submenuBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	submenuIconColorSwitcher: {
		type: "string",
		default: "normal",
	},
	/** Sub Menu Tooltip/Typography */
	submenuTextGlobalTypographyData: {
		type: "object",
		default: {},
	},
	submenuTextGlobalTypoSwitcher: {
		type: "object",
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
	submenuTextGlobalTypoType: {
		type: "string",
		default: "default",
	},
	submenuTextGlobalTypoOption: {
		type: "object",
		default: {
			label: "Default",
			value: "default",
		},
	},
	submenuTextFontFamily: {
		type: "string",
		default: "Default",
	},
	submenuTextFontSize: {
		type: "object",
		default: {
			Desktop: 14,
			Tablet: "",
			Mobile: "",
		},
	},
	submenuTextFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	submenuTextFontWeight: {
		type: "string",
		default: "400",
	},
	submenuTextFontStyle: {
		type: "string",
		default: "",
	},
	submenuTextTransform: {
		type: "string",
		default: "",
	},
	submenuTextDecoration: {
		type: "string",
		default: "",
	},
	submenuTextLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	submenuTextLetterSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	submenuTextLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	submenuTextLineHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	submenuTitleColor: {
		type: "string",
		default: "#FFFFFF",
	},
	submenuTitleBgColor: {
		type: "string",
		default: "#15171C",
	},
	submenuTitleBgGradientColor: {
		type: "string",
		default: null,
	},
	submenuTitleBgColorType: {
		type: "string",
		default: "classic",
	},
	submenuTitleBgCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	submenuTitleBgCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	submenuTitlePosition: {
		type: "string",
		default: "top",
	},
	/** Advanced Backgrounds (Main Menu) */
	mainMenuNormalBackgroundType: {
		type: "string",
		default: "classic",
	},
	mainMenuNormalGradientColor: {
		type: "string",
		default: null,
	},
	mainMenuNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	mainMenuNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	mainMenuHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	mainMenuHoverGradientColor: {
		type: "string",
		default: null,
	},
	mainMenuHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	mainMenuHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** Advanced Backgrounds (Sub Menu) */
	submenuNormalBackgroundType: {
		type: "string",
		default: "classic",
	},
	submenuNormalGradientColor: {
		type: "string",
		default: null,
	},
	submenuNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	submenuNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	submenuHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	submenuHoverGradientColor: {
		type: "string",
		default: null,
	},
	submenuHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	submenuHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** Border & Radius Settings (Main Menu) */
	mainMenuBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "%",
			Tablet: "%",
			Mobile: "%",
		},
	},
	mainMenuBorderRadiusDesktop: {
		type: "object",
		default: {
			top: 50,
			right: 50,
			bottom: 50,
			left: 50,
		},
	},
	mainMenuBorderRadiusTablet: {
		type: "object",
		default: {
			top: 50,
			right: 50,
			bottom: 50,
			left: 50,
		},
	},
	mainMenuBorderRadiusMobile: {
		type: "object",
		default: {
			top: 50,
			right: 50,
			bottom: 50,
			left: 50,
		},
	},
	mainMenuBorderRadiusLink: {
		type: "boolean",
		default: true,
	},

	/** Main Menu Border */
	mainMenuBorder: {
		type: "string",
		default: "none",
	},
	mainMenuBorderColor: {
		type: "string",
		default: "",
	},
	mainMenuBorderHoverColor: {
		type: "string",
		default: "",
	},
	mainMenuBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	mainMenuBorderDesktop: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},
	mainMenuBorderTablet: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},
	mainMenuBorderMobile: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},
	mainMenuBorderLink: {
		type: "boolean",
		default: true,
	},

	/** Main Menu Box Shadow */
	mainMenuBoxShadowSwitcher: {
		type: "string",
		default: "normal",
	},
	mainMenuBoxShadowValues: {
		type: "array",
		default: [],
	},
	mainMenuBoxShadowCssValue: {
		type: "string",
		default: "",
	},
	mainMenuBoxShadowHoverValues: {
		type: "array",
		default: [],
	},
	mainMenuBoxShadowHoverCssValue: {
		type: "string",
		default: "",
	},
	/** Border & Radius Settings (Sub Menu) */
	submenuBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "%",
			Tablet: "% ",
			Mobile: "%",
		},
	},
	submenuBorderRadiusDesktop: {
		type: "object",
		default: {
			top: 50,
			right: 50,
			bottom: 50,
			left: 50,
		},
	},
	submenuBorderRadiusTablet: {
		type: "object",
		default: {
			top: 50,
			right: 50,
			bottom: 50,
			left: 50,
		},
	},
	submenuBorderRadiusMobile: {
		type: "object",
		default: {
			top: 50,
			right: 50,
			bottom: 50,
			left: 50,
		},
	},
	submenuBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	/** Sub Menu Border */
	submenuBorder: {
		type: "string",
		default: "none",
	},
	submenuBorderColor: {
		type: "string",
		default: "",
	},
	submenuBorderHoverColor: {
		type: "string",
		default: "",
	},
	submenuBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	submenuBorderDesktop: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},
	submenuBorderTablet: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},
	submenuBorderMobile: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},
	submenuBorderLink: {
		type: "boolean",
		default: true,
	},
	/** Sub Menu Box Shadow */
	submenuBoxShadowSwitcher: {
		type: "string",
		default: "normal",
	},
	submenuBoxShadowValues: {
		type: "array",
		default: [],
	},
	submenuBoxShadowCssValue: {
		type: "string",
		default: "",
	},
	submenuBoxShadowHoverValues: {
		type: "array",
		default: [],
	},
	submenuBoxShadowHoverCssValue: {
		type: "string",
		default: "",
	},
	/** Global Positioning & Spacing */
	circleMenuGlobalZIndex: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	circleMenuOverflow: {
		type: "string",
		default: "default",
	},
	circleMenuPositionType: {
		type: "string",
		default: "default",
	},
	circleMenuHZOrientationType: {
		type: "string",
		default: "left",
	},
	circleMenuVROrientationType: {
		type: "string",
		default: "top",
	},
	circleMenuHZLeftOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	circleMenuHZLeftOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	circleMenuHZRightOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	circleMenuHZRightOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	circleMenuVRTopOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	circleMenuVRTopOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	circleMenuVRBottomOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	circleMenuVRBottomOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	circleMenuGlobalWraperID: {
		type: "string",
		default: "",
	},
	circleMenuGlobalWraperClass: {
		type: "string",
		default: "",
	},
	circleMenuGlobalPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	circleMenuGlobalPaddingDesktop: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},
	circleMenuGlobalPaddingTablet: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},
	circleMenuGlobalPaddingMobile: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},
	circleMenuGlobalPaddingLink: {
		type: "boolean",
		default: false,
	},
	circleMenuGlobalMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	circleMenuGlobalMarginDesktop: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},
	circleMenuGlobalMarginTablet: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},
	circleMenuGlobalMarginMobile: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},
	circleMenuGlobalMarginLink: {
		type: "boolean",
		default: false,
	},
	circleMenuGlobalBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	/** Global Background Settings */
	circleMenuGlobalBgColor: {
		type: "string",
		default: "",
	},
	circleMenuGlobalBgHoverColor: {
		type: "string",
		default: "",
	},
	circleMenuGlobalNormalBackgroundType: {
		type: "string",
		default: "classic",
	},
	circleMenuGlobalNormalGradientColor: {
		type: "string",
		default: null,
	},
	circleMenuGlobalNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	circleMenuGlobalNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	circleMenuGlobalHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	circleMenuGlobalHoverGradientColor: {
		type: "string",
		default: null,
	},
	circleMenuGlobalHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	circleMenuGlobalHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	circleMenuGlobalBorder: {
		type: "string",
		default: "none",
	},
	circleMenuGlobalBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	circleMenuGlobalBorderColor: {
		type: "string",
		default: "",
	},
	circleMenuGlobalBorderHoverColor: {
		type: "string",
		default: "",
	},
	circleMenuGlobalBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	circleMenuGlobalBorderDesktop: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},
	circleMenuGlobalBorderTablet: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},
	circleMenuGlobalBorderMobile: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},
	circleMenuGlobalBorderLink: {
		type: "boolean",
		default: false,
	},
	circleMenuGlobalBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	circleMenuGlobalBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},
	circleMenuGlobalBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},
	circleMenuGlobalBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},
	circleMenuGlobalBorderRadiusLink: {
		type: "boolean",
		default: false,
	},
	/** Global Background Images & Shadows */
	circleMenuGlobalBgImageUrl: {
		type: "string",
		default: "",
	},
	circleMenuGlobalBgImageAlt: {
		type: "string",
		default: "",
	},
	circleMenuGlobalBgImageID: {
		type: "number",
		default: 0,
	},
	circleMenuGlobalBgImagePosition: {
		type: "string",
		default: "",
	},
	circleMenuGlobalBgImageAttachment: {
		type: "string",
		default: "",
	},
	circleMenuGlobalBgImageRepeat: {
		type: "string",
		default: "",
	},
	circleMenuGlobalBgImageSize: {
		type: "string",
		default: "",
	},
	circleMenuGlobalBgHoverImageUrl: {
		type: "string",
		default: "",
	},
	circleMenuGlobalBgHoverImageAlt: {
		type: "string",
		default: "",
	},
	circleMenuGlobalBgHoverImageID: {
		type: "number",
		default: 0,
	},
	circleMenuGlobalBgHoverImagePosition: {
		type: "string",
		default: "",
	},
	circleMenuGlobalBgHoverImageAttachment: {
		type: "string",
		default: "",
	},
	circleMenuGlobalBgHoverImageRepeat: {
		type: "string",
		default: "",
	},
	circleMenuGlobalBgHoverImageSize: {
		type: "string",
		default: "",
	},
	circleMenuGlobalBoxShadowSwitcher: {
		type: "string",
		default: "normal",
	},
	circleMenuGlobalBoxShadowValues: {
		type: "object",
		default: {
			color: "",
			x: "",
			y: "",
			blur: "",
			spread: "",
			style: "",
		},
	},
	circleMenuGlobalBoxShadowCssValue: {
		type: "string",
		default: "",
	},
	circleMenuGlobalBoxShadowHoverValues: {
		type: "object",
		default: {
			color: "",
			x: "",
			y: "",
			blur: "",
			spread: "",
			style: "",
		},
	},
	circleMenuGlobalBoxShadowHoverCssValue: {
		type: "string",
		default: "",
	},
	circleMenuDesktopSwitcher: {
		type: "boolean",
		default: false,
	},
	circleMenuTabletSwitcher: {
		type: "boolean",
		default: false,
	},
	circleMenuMobileSwitcher: {
		type: "boolean",
		default: false,
	},
	circleMenuGlobalCustomCSS: {
		type: "string",
		default: "",
	},
	blockStyle: {
		type: "string",
		default: "",
	},
};

export default attributes;
