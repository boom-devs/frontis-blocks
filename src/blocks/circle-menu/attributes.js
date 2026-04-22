const attributes = {
	blockID: {
		type: "string",
		default: "",
	},
	menuPosition: {
		type: "string",
		default: "bottom-right",
	},
	menuPreset: {
		type: "string",
		default: "half-circular-menu",
	},
	menuItems: {
		type: "array",
		default: [
			{
				id: "item-1",
				title: "Phone",
				icon: "fas fa-phone",
				link: "#",
			},
			{
				id: "item-2",
				title: "Message",
				icon: "fas fa-envelope",
				link: "#",
			},
			{
				id: "item-3",
				title: "Cart",
				icon: "fas fa-cart-shopping",
				link: "#",
			},
		],
	},
	submenuSpace: {
		type: "object",
		default: {
			Desktop: 0,
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
			Desktop: 0,
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
	mainMenuOpenType: {
		type: "string",
		default: "icon",
	},
	mainMenuCloseType: {
		type: "string",
		default: "icon",
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
		default: "", // URL to image
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
	triggerType: {
		type: "string",
		default: "hover",
	},

	// Key style offsets corresponding to --pea-cm-offset-h and --pea-cm-offset-v
	offsetH: {
		type: "object",
		default: { Desktop: 40, Tablet: "", Mobile: "" },
	},
	offsetV: {
		type: "object",
		default: { Desktop: 40, Tablet: "", Mobile: "" },
	},
	activeOffsetH: {
		type: "number",
		default: 40, // Typically varies in elementor
	},
	activeOffsetV: {
		type: "number",
		default: 40,
	},

	// Main Menu Style
	mainMenuSize: {
		type: "object",
		default: { Desktop: 72, Tablet: "", Mobile: "" },
	},
	mainMenuBgColor: {
		type: "string",
		default: "#CD9B44",
	},
	mainMenuTextColor: {
		type: "string",
		default: "#ffffff",
	},
	mainMenuIconSize: {
		type: "object",
		default: { Desktop: 32, Tablet: "", Mobile: "" },
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

	// Sub Menu Style
	submenuShowTitleOnHover: {
		type: "boolean",
		default: false,
	},
	submenuSize: {
		type: "object",
		default: { Desktop: 62, Tablet: "", Mobile: "" },
	},
	submenuBgColor: {
		type: "string",
		default: "rgba(17, 19, 22, 0.4)",
	},
	submenuIconSize: {
		type: "object",
		default: { Desktop: 24, Tablet: "", Mobile: "" },
	},
	submenuIconColor: {
		type: "string",
		default: "#F9E3BC",
	},
	circleMenuGlobalZIndex: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	circleMenuOverflow: { type: "string", default: "default" },
	circleMenuPositionType: { type: "string", default: "default" },
	circleMenuHZOrientationType: { type: "string", default: "left" },
	circleMenuVROrientationType: { type: "string", default: "top" },
	circleMenuHZLeftOffset: {
		type: "object",
		default: { Desktop: "", Tablet: "", Mobile: "" },
	},
	circleMenuHZLeftOffsetUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	circleMenuHZRightOffset: {
		type: "object",
		default: { Desktop: "", Tablet: "", Mobile: "" },
	},
	circleMenuHZRightOffsetUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	circleMenuVRTopOffset: {
		type: "object",
		default: { Desktop: "", Tablet: "", Mobile: "" },
	},
	circleMenuVRTopOffsetUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	circleMenuVRBottomOffset: {
		type: "object",
		default: { Desktop: "", Tablet: "", Mobile: "" },
	},
	circleMenuVRBottomOffsetUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	circleMenuGlobalWraperID: { type: "string", default: "" },
	circleMenuGlobalWraperClass: { type: "string", default: "" },
	circleMenuGlobalPaddingUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	circleMenuGlobalPaddingDesktop: {
		type: "object",
		default: { top: "", right: "", bottom: "", left: "" },
	},
	circleMenuGlobalPaddingTablet: {
		type: "object",
		default: { top: "", right: "", bottom: "", left: "" },
	},
	circleMenuGlobalPaddingMobile: {
		type: "object",
		default: { top: "", right: "", bottom: "", left: "" },
	},
	circleMenuGlobalPaddingLink: { type: "boolean", default: false },
	circleMenuGlobalMarginUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	circleMenuGlobalMarginDesktop: {
		type: "object",
		default: { top: "", right: "", bottom: "", left: "" },
	},
	circleMenuGlobalMarginTablet: {
		type: "object",
		default: { top: "", right: "", bottom: "", left: "" },
	},
	circleMenuGlobalMarginMobile: {
		type: "object",
		default: { top: "", right: "", bottom: "", left: "" },
	},
	circleMenuGlobalMarginLink: { type: "boolean", default: false },
	circleMenuGlobalBgColorSwitcher: { type: "string", default: "normal" },
	circleMenuGlobalBgColor: { type: "string", default: "" },
	circleMenuGlobalBgHoverColor: { type: "string", default: "" },
	circleMenuGlobalBorder: { type: "string", default: "none" },
	circleMenuGlobalBorderColorSwitcher: { type: "string", default: "normal" },
	circleMenuGlobalBorderColor: { type: "string", default: "" },
	circleMenuGlobalBorderHoverColor: { type: "string", default: "" },
	circleMenuGlobalBorderUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	circleMenuGlobalBorderDesktop: {
		type: "object",
		default: { top: "", right: "", bottom: "", left: "" },
	},
	circleMenuGlobalBorderTablet: {
		type: "object",
		default: { top: "", right: "", bottom: "", left: "" },
	},
	circleMenuGlobalBorderMobile: {
		type: "object",
		default: { top: "", right: "", bottom: "", left: "" },
	},
	circleMenuGlobalBorderLink: { type: "boolean", default: false },
	circleMenuGlobalBoxShadowSwitcher: { type: "string", default: "normal" },
	circleMenuGlobalBoxShadowValues: {
		type: "object",
		default: { color: "", x: "", y: "", blur: "", spread: "", style: "" },
	},
	circleMenuGlobalBoxShadowCssValue: { type: "string", default: "" },
	circleMenuGlobalBoxShadowHoverValues: {
		type: "object",
		default: { color: "", x: "", y: "", blur: "", spread: "", style: "" },
	},
	circleMenuGlobalBoxShadowHoverCssValue: { type: "string", default: "" },
	circleMenuDesktopSwitcher: { type: "boolean", default: false },
	circleMenuTabletSwitcher: { type: "boolean", default: false },
	circleMenuMobileSwitcher: { type: "boolean", default: false },
	circleMenuGlobalCustomCSS: { type: "string", default: "" },
	blockStyle: { type: "string", default: "" },
};

export default attributes;
