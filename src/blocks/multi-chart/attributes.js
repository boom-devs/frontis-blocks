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

	chartType: {
		type: "string",
		default: "line",
	},
	barVariant: {
		type: "string",
		default: "default",
	},
	chartTitle: {
		type: "string",
		default: "",
	},
	chartDescription: {
		type: "string",
		default:
			"Exhibit trends and variations over time by enabling a clear depiction of data fluctuations.",
	},
	chartHeight: {
		type: "object",
		default: {
			Desktop: "270",
			Tablet: "",
			Mobile: "",
		},
	},
	chartHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	filterList: {
		type: "array",
		default: [
			{
				id: "f1",
				filter_label: "This Week",
				filter_icon: "fas fa-calendar-week",
			},
			{
				id: "f2",
				filter_label: "Last Month",
				filter_icon: "fas fa-calendar-alt",
			},
		],
	},
	chartDatasets: {
		type: "array",
		default: [
			{
				id: "ds1",
				series_name: "Content 1",
				values: "28,20,22,30,21,25,10",
				color: "#3b82f6",
			},
			{
				id: "ds2",
				series_name: "Content 2",
				values: "15,30,21,34,16,28,12",
				color: "#f59e0b",
			},
			{
				id: "ds3",
				series_name: "Content 3",
				values: "-15,40,23,10,21,25,10",
				color: "#10b981",
			},
		],
	},
	chartLabels: {
		type: "string",
		default: "Jan,Feb,Mar,Apr,May,Jun,Jul",
	},

	canvasWidth: {
		type: "object",
		default: {
			Desktop: "100",
			Tablet: "100",
			Mobile: "100",
		},
	},
	canvasWidthUnits: {
		type: "object",
		default: {
			Desktop: "%",
			Tablet: "%",
			Mobile: "%",
		},
	},
	canvasHeight: {
		type: "object",
		default: {
			Desktop: "310",
			Tablet: "",
			Mobile: "",
		},
	},
	canvasHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	canvasNormalColor: {
		type: "string",
		default: "#EBF5FF",
	},
	canvasHoverGradientColor: {
		type: "string",
		default: null,
	},
	canvasHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	canvasHoverColor: {
		type: "string",
		default: "",
	},
	canvasBorderHoverColor: {
		type: "string",
		default: "",
	},
	canvasBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	canvasBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "24",

			bottom: "24",

			left: "24",

			right: "24",
		},
	},
	canvasBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",

			bottom: "",

			left: "",

			right: "",
		},
	},
	canvasBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",

			bottom: "",

			left: "",

			right: "",
		},
	},
	canvasBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	canvasPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",

			Tablet: "px",

			Mobile: "px",
		},
	},
	canvasPaddingDesktop: {
		type: "object",
		default: {
			top: "24",

			bottom: "24",

			left: "24",

			right: "24",
		},
	},
	canvasPaddingTablet: {
		type: "object",
		default: {
			top: "",

			bottom: "",

			left: "",

			right: "",
		},
	},
	canvasPaddingMobile: {
		type: "object",
		default: {
			top: "",

			bottom: "",

			left: "",

			right: "",
		},
	},
	canvasPaddingLink: {
		type: "boolean",
		default: true,
	},
	canvasMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	canvasMarginDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	canvasMarginTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	canvasMarginMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	canvasMarginLink: {
		type: "boolean",
		default: true,
	},

	chartBodyWidth: {
		type: "object",
		default: {
			Desktop: "100",
			Tablet: "100",
			Mobile: "100",
		},
	},
	chartBodyWidthUnits: {
		type: "object",
		default: {
			Desktop: "%",
			Tablet: "%",
			Mobile: "%",
		},
	},
	chartBodyHeight: {
		type: "object",
		default: {
			Desktop: "430",
			Tablet: "",
			Mobile: "",
		},
	},
	chartBodyHeightUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	chartBodyNormalColor: {
		type: "string",
		default: "#ffffff",
	},
	chartBodyBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	chartBodyNormalBackgroundType: {
		type: "string",
		default: "classic",
	},
	chartBodyNormalGradientColor: {
		type: "string",
		default: null,
	},
	chartBodyNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	chartBodyNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	chartBodyHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	chartBodyHoverGradientColor: {
		type: "string",
		default: null,
	},
	chartBodyHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	chartBodyHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	chartBodyHoverColor: {
		type: "string",
		default: "",
	},
	chartBodyBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	chartBodyBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "24",
			bottom: "24",
			left: "24",
			right: "24",
		},
	},
	chartBodyBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	chartBodyBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	chartBodyBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	chartBodyPaddingDesktop: {
		type: "object",
		default: {
			top: "24",
			bottom: "24",
			left: "24",
			right: "24",
		},
	},
	chartHeaderPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	chartBodyPaddingTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	chartBodyPaddingMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	chartBodyPaddingLink: {
		type: "boolean",
		default: true,
	},
	chartBodyPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	chartBodyMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	chartBodyMarginDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	chartBodyMarginTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	chartBodyMarginMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	chartBodyMarginLink: {
		type: "boolean",
		default: true,
	},
	filterIconSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	chartTitleColor: {
		type: "string",
		default: "#0f172a",
	},
	chartTitleHoverColor: {
		type: "string",
		default: "",
	},
	chartHeaderPaddingDesktop: {
		type: "object",
		default: {
			top: "0",
			bottom: "24",
			left: "0",
			right: "0",
		},
	},
	showChartHeader: {
		type: "boolean",
		default: true,
	},
	showChartFilters: {
		type: "boolean",
		default: false,
	},
	showChartLegend: {
		type: "boolean",
		default: true,
	},
	showChartFooter: {
		type: "boolean",
		default: true,
	},

	chartHeaderPaddingTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	chartHeaderPaddingMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	chartHeaderPaddingLink: {
		type: "boolean",
		default: false,
	},

	toggleBtnColor: {
		type: "string",
		default: "#0f172a",
	},
	toggleBtnBgColor: {
		type: "string",
		default: "#ffffff",
	},
	toggleBtnHoverColor: {
		type: "string",
		default: "",
	},
	toggleBtnHoverBgColor: {
		type: "string",
		default: "",
	},
	toggleBtnPaddingDesktop: {
		type: "object",
		default: {
			top: "9",
			bottom: "9",
			left: "18",
			right: "18",
		},
	},
	toggleBtnPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	toggleBtnPaddingTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	toggleBtnPaddingMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	toggleBtnPaddingLink: {
		type: "boolean",
		default: true,
	},
	toggleBtnBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "999",
			bottom: "999",
			left: "999",
			right: "999",
		},
	},
	toggleBtnBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	toggleBtnBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	toggleBtnBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	toggleBtnBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	filterIcon: {
		type: "object",
		default: {
			value: "fas fa-chevron-down",
			library: "solid",
		},
	},
	filterIconSize: {
		type: "object",
		default: {
			Desktop: "13",
			Tablet: "",
			Mobile: "",
		},
	},
	filterIconSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	filterIconColor: {
		type: "string",
		default: "",
	},
	filterIconHoverColor: {
		type: "string",
		default: "",
	},

	legendItemPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	legendItemPaddingDesktop: {
		type: "object",
		default: {
			top: "5",
			bottom: "5",
			left: "10",
			right: "10",
		},
	},
	legendItemMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	legendItemMarginDesktop: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	footerTitleTypography: {
		type: "object",
		default: {
			fontFamily: "",
			fontSize: {
				Desktop: "24",
				Tablet: "",
				Mobile: "",
			},
			fontWeight: "600",
			textTransform: "",
			lineHeight: {
				Desktop: "",
				Tablet: "",
				Mobile: "",
			},
		},
	},
	footerDescTypography: {
		type: "object",
		default: {
			fontFamily: "",
			fontSize: {
				Desktop: "16",
				Tablet: "",
				Mobile: "",
			},
			fontWeight: "400",
			textTransform: "",
			lineHeight: {
				Desktop: "",
				Tablet: "",
				Mobile: "",
			},
		},
	},
	footerPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	footerPaddingDesktop: {
		type: "object",
		default: {
			top: "24",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	footerPaddingTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	footerPaddingMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	footerMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	footerMarginDesktop: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	footerMarginTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	footerMarginMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},

	xAxisTypography: {
		type: "object",
		default: {
			fontSize: {
				Desktop: "12",
				Tablet: "",
				Mobile: "",
			},
			fontWeight: "normal",
			fontFamily: "",
		},
	},
	yAxisTypography: {
		type: "object",
		default: {
			fontSize: {
				Desktop: "12",
				Tablet: "",
				Mobile: "",
			},
			fontWeight: "normal",
			fontFamily: "",
		},
	},

	legendDotSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},

	showGrid: {
		type: "boolean",
		default: true,
	},
	gridColor: {
		type: "string",
		default: "rgba(148,163,184,0.15)",
	},
	gridLineWidth: {
		type: "object",
		default: {
			Desktop: "1",
			Tablet: "",
			Mobile: "",
		},
	},

	xAxisNormalColor: {
		type: "string",
		default: "#94a3b8",
	},
	xAxisNormalFontSize: {
		type: "object",
		default: {
			Desktop: "12",
			Tablet: "",
			Mobile: "",
		},
	},
	xAxisNormalFontWeight: {
		type: "string",
		default: "normal",
	},
	xAxisNormalFontFamily: {
		type: "string",
		default: "",
	},

	yAxisNormalColor: {
		type: "string",
		default: "#94a3b8",
	},
	yAxisNormalFontSize: {
		type: "object",
		default: {
			Desktop: "12",
			Tablet: "",
			Mobile: "",
		},
	},
	yAxisNormalFontWeight: {
		type: "string",
		default: "normal",
	},
	yAxisNormalFontFamily: {
		type: "string",
		default: "",
	},

	tooltipBg: {
		type: "string",
		default: "#1e293b",
	},
	tooltipColor: {
		type: "string",
		default: "#ffffff",
	},

	legendTextAlignment: {
		type: "object",
		default: {
			Desktop: "center",
			Tablet: "",
			Mobile: "",
		},
	},
	legendGap: {
		type: "object",
		default: {
			Desktop: "10",
			Tablet: "",
			Mobile: "",
		},
	},
	legendDotSize: {
		type: "object",
		default: {
			Desktop: "10",
			Tablet: "",
			Mobile: "",
		},
	},
	legendDotRadius: {
		type: "object",
		default: {
			Desktop: "50",
			Tablet: "",
			Mobile: "",
		},
	},
	legendTextColor: {
		type: "string",
		default: "",
	},

	footerTextAlignment: {
		type: "object",
		default: {
			Desktop: "left",
			Tablet: "",
			Mobile: "",
		},
	},
	footerTitleNormalColor: {
		type: "string",
		default: "#0f172a",
	},
	footerTitleColorSwitcher: {
		type: "string",
		default: "normal",
	},
	footerTitleGlobalTypoSwitcher: {
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
	footerTitleGlobalTypographyData: {
		type: "object",
		default: {},
	},
	footerTitleGlobalTypoType: {
		type: "string",
		default: "default",
	},
	footerTitleGlobalTypoOption: {
		type: "object",
		default: {
			label: "Default",
			value: "default",
		},
	},
	footerTitleFontFamily: {
		type: "string",
		default: "Default",
	},
	footerTitleFontSize: {
		type: "object",
		default: {
			Desktop: "24",
			Tablet: "",
			Mobile: "",
		},
	},
	footerTitleFontSizeUnits: {
		type: "string",
		default: "px",
	},
	footerTitleFontWeight: {
		type: "string",
		default: "600",
	},
	footerTitleFontStyle: {
		type: "string",
		default: "",
	},
	footerTitleTextTransform: {
		type: "string",
		default: "",
	},
	footerTitleTextDecoration: {
		type: "string",
		default: "",
	},
	footerTitleLetterSpacing: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	footerTitleLetterSpacingUnits: {
		type: "string",
		default: "px",
	},
	footerTitleLineHeight: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	footerTitleLineHeightUnits: {
		type: "string",
		default: "px",
	},
	footerDescGlobalTypoSwitcher: {
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
	footerDescGlobalTypographyData: {
		type: "object",
		default: {},
	},
	footerDescGlobalTypoType: {
		type: "string",
		default: "default",
	},
	footerDescGlobalTypoOption: {
		type: "object",
		default: {
			label: "Default",
			value: "default",
		},
	},
	footerDescFontFamily: {
		type: "string",
		default: "Default",
	},
	footerDescFontSize: {
		type: "object",
		default: {
			Desktop: "16",
			Tablet: "",
			Mobile: "",
		},
	},
	footerDescFontSizeUnits: {
		type: "string",
		default: "px",
	},
	footerDescFontWeight: {
		type: "string",
		default: "400",
	},
	footerDescFontStyle: {
		type: "string",
		default: "",
	},
	footerDescTextTransform: {
		type: "string",
		default: "",
	},
	footerDescTextDecoration: {
		type: "string",
		default: "",
	},
	footerDescLetterSpacing: {
		type: "object",
		default: { Desktop: "", Tablet: "", Mobile: "" },
	},
	footerDescLetterSpacingUnits: {
		type: "string",
		default: "px",
	},
	footerDescLineHeight: {
		type: "object",
		default: { Desktop: "", Tablet: "", Mobile: "" },
	},
	footerDescLineHeightUnits: {
		type: "string",
		default: "px",
	},
	footerDescColorSwitcher: {
		type: "string",
		default: "normal",
	},
	footerTitleHoverColor: {
		type: "string",
		default: "#0f172a",
	},
	footerDescNormalColor: {
		type: "string",
		default: "#64748b",
	},
	footerDescHoverColor: {
		type: "string",
		default: "#64748b",
	},
	footerPaddingDesktop: {
		type: "object",
		default: {
			top: "24",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	footerPaddingLink: {
		type: "boolean",
		default: false,
	},

	multiChartGlobalZIndex: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	multiChartCustomCSS: {
		type: "string",
		default: "",
	},
	multiChartWrapperID: {
		type: "string",
		default: "",
	},
	multiChartWrapperClass: {
		type: "string",
		default: "",
	},
	multiChartDesktopSwitcher: {
		type: "boolean",
		default: false,
	},
	multiChartTabletSwitcher: {
		type: "boolean",
		default: false,
	},
	multiChartMobileSwitcher: {
		type: "boolean",
		default: false,
	},

	multiChartBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	multiChartBackgroundType: {
		type: "string",
		default: "classic",
	},
	multiChartClassicColor: {
		type: "string",
		default: "",
	},
	multiChartGradientColor: {
		type: "string",
	},
	multiChartCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	multiChartCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	multiChartBackgroundImageUrl: {
		type: "string",
		default: "",
	},
	multiChartBackgroundImageAlt: {
		type: "string",
		default: "",
	},
	multiChartBackgroundImageID: {
		type: "string",
		default: "",
	},
	multiChartBackgroundImagePosition: {
		type: "string",
		default: "",
	},
	multiChartBackgroundImageAttachment: {
		type: "string",
		default: "",
	},
	multiChartBackgroundImageSize: {
		type: "string",
		default: "",
	},
	multiChartBackgroundImageRepeat: {
		type: "string",
		default: "",
	},
	multiChartHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	multiChartHoverClassicColor: {
		type: "string",
	},
	multiChartHoverGradientColor: {
		type: "string",
	},
	multiChartHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	multiChartHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	multiChartHoverBackgroundImageUrl: {
		type: "string",
		default: "",
	},
	multiChartHoverBackgroundImageAlt: {
		type: "string",
		default: "",
	},
	multiChartHoverBackgroundImageID: {
		type: "string",
		default: "",
	},
	multiChartHoverBackgroundImagePosition: {
		type: "string",
		default: "",
	},
	multiChartHoverBackgroundImageAttachment: {
		type: "string",
		default: "",
	},
	multiChartHoverBackgroundImageSize: {
		type: "string",
		default: "",
	},
	multiChartHoverBackgroundImageRepeat: {
		type: "string",
		default: "",
	},
	multiChartWrapperBorder: {
		type: "string",
		default: "none",
	},
	multiChartWrapperBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	multiChartWrapperBorderColor: {
		type: "string",
		default: "",
	},
	multiChartWrapperBorderHoverColor: {
		type: "string",
	},
	multiChartWrapperBorderTypeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	multiChartWrapperBorderTypeDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	multiChartWrapperBorderTypeTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	multiChartWrapperBorderTypeMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	multiChartWrapperBorderTypeLink: {
		type: "boolean",
		default: true,
	},
	multiChartWrapperBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	multiChartWrapperBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	multiChartWrapperBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	multiChartWrapperBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	multiChartWrapperBorderRadiusLink: {
		type: "boolean",
		default: true,
	},

	multiChartPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	multiChartPaddingDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	multiChartPaddingTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	multiChartPaddingMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	multiChartPaddingLink: {
		type: "boolean",
		default: true,
	},
	multiChartMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	multiChartMarginDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	multiChartMarginTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	multiChartMarginMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	multiChartMarginLink: {
		type: "boolean",
		default: true,
	},
	multiChartPositionType: {
		type: "string",
		default: "default",
	},
	multiChartHZOrientationType: {
		type: "string",
		default: "left",
	},
	multiChartVROrientationType: {
		type: "string",
		default: "top",
	},
	multiChartHZLeftOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	multiChartHZLeftOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",

			Mobile: "px",
		},
	},
	multiChartHZRightOffset: {
		type: "object",
		default: {
			Desktop: "",

			Tablet: "",
			Mobile: "",
		},
	},
	multiChartHZRightOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",

			Tablet: "px",

			Mobile: "px",
		},
	},
	multiChartVRTopOffset: {
		type: "object",
		default: {
			Desktop: "",

			Tablet: "",

			Mobile: "",
		},
	},
	multiChartVRTopOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",

			Tablet: "px",

			Mobile: "px",
		},
	},
	multiChartVRBottomOffset: {
		type: "object",
		default: {
			Desktop: "",

			Tablet: "",

			Mobile: "",
		},
	},
	multiChartVRBottomOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",

			Tablet: "px",

			Mobile: "px",
		},
	},
	multiChartOverflow: {
		type: "string",
		default: "default",
	},
};

export default attributes;
