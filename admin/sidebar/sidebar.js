import { __ } from "@wordpress/i18n";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/editor";
import { useDispatch } from "@wordpress/data";
import {
	Button,
	Modal,
	TextControl,
	TabPanel,
	__experimentalNavigatorProvider as NavigatorProvider,
	__experimentalNavigatorScreen as NavigatorScreen,
	__experimentalNavigatorButton as NavigatorButton,
} from "@wordpress/components";
import { PanelColorSettings } from "@wordpress/block-editor";
import { useEffect, useState, useCallback, useMemo } from "@wordpress/element";
import GradientColorPallet from "./components/GradientColorPallet";
import ColorPalletWrapper from "./components/ColorPalletWrapper";
import CustomGradientColorPallet from "./components/CustomGradientPallet";
import TypographySettings from "./components/TypographySettings";
import { useDeviceType } from "@Config/displayType";
import { getFbLocalStorage, loadGoogleFont, useAfterSave } from "./helper";
import { getGlobalStyle, updateGlobalStyle } from "./fetch";
import generateCSSVariables from "./components/GenerateRootCss";
import generateColorsVariables from "./components/GenerateColorRoot";
import "./sidebar.scss";

// Default color and gradient configurations
const defaultColors = [
	{
		name: __("Primary Color", "frontis-blocks"),
		color: "#399CFF",
		slug: "primary-color",
	},
	{
		name: __("Secondary Color", "frontis-blocks"),
		color: "#f00000",
		slug: "secondary-color",
	},
	{
		name: __("Tertiary Color", "frontis-blocks"),
		color: "#F72585",
		slug: "tertiary-color",
	},
	{
		name: __("Accent Color", "frontis-blocks"),
		color: "#7209B7",
		slug: "accent-color",
	},
	{
		name: __("Text Color", "frontis-blocks"),
		color: "#3A0CA3",
		slug: "text-color",
	},
	{
		name: __("Link Color", "frontis-blocks"),
		color: "#4361EE",
		slug: "link-color",
	},
	{
		name: __("Link Hover Color", "frontis-blocks"),
		color: "#4CC9F0",
		slug: "link-hover-color",
	},
	{
		name: __("White Color", "frontis-blocks"),
		color: "#FFFFFF",
		slug: "white-color",
	},
	{
		name: __("Black Color", "frontis-blocks"),
		color: "#000000",
		slug: "black-color",
	},
	{
		name: __("Gray Color", "frontis-blocks"),
		color: "#808080",
		slug: "gray-color",
	},
];

const gradientDefaults = [
	{
		color:
			"linear-gradient(135deg, rgba(33,150,243,1) 0%, rgba(156,39,176,1) 100%)",
		name: "Primary Color",
		slug: "gradientPrimary",
	},
	{
		color:
			"linear-gradient(135deg, rgba(0,200,83,1) 0%, rgba(255,193,7,1) 100%)",
		name: "Secondary Color",
		slug: "gradientSecondary",
	},
	{
		color:
			"linear-gradient(135deg, rgba(244,67,54,1) 0%, rgba(233,30,99,1) 100%)",
		name: "Tertiary Color",
		slug: "gradientTertiary",
	},
	{
		color:
			"linear-gradient(135deg, rgba(3,169,244,1) 0%, rgba(0,150,136,1) 100%)",
		name: "Accent Color",
		slug: "gradientAccent",
	},
	{
		color:
			"linear-gradient(135deg, rgba(96,125,139,1) 0%, rgba(224,224,224,1) 100%)",
		name: "Neutral Background",
		slug: "gradientBackground",
	},
	{
		color:
			"linear-gradient(135deg, rgba(255,87,34,1) 0%, rgba(255,235,59,1) 100%)",
		name: "Vibrant Glow",
		slug: "gradientGradient",
	},
	{
		color:
			"linear-gradient(135deg, rgba(255,0,150,1) 0%, rgba(255,255,0,1) 100%)",
		name: "Sunset Bliss",
		slug: "gradientSunsetBliss",
	},
	{
		color:
			"linear-gradient(135deg, rgba(0,255,222,1) 0%, rgba(0,102,255,1) 100%)",
		name: "Ocean Breeze",
		slug: "gradientOceanBreeze",
	},
	{
		color:
			"linear-gradient(135deg, rgba(255,153,0,1) 0%, rgba(255,94,0,1) 100%)",
		name: "Tangerine Dream",
		slug: "gradientTangerineDream",
	},
	{
		color:
			"linear-gradient(135deg, rgba(102,51,153,1) 0%, rgba(255,102,204,1) 100%)",
		name: "Lavender Kiss",
		slug: "gradientLavenderKiss",
	},
	{
		color: "linear-gradient(220.55deg, #FFE70B 0%, #27B643 100%)",
		name: "Minty Fresh",
		slug: "gradientMintyFresh",
	},
	{
		color: "linear-gradient(180deg, #12C0DB, #EF04F6)",
		name: "Halloween",
		slug: "gradientHalloween",
	},
];

// Default typography configuration
const defaultTypography = {
	body: {
		fontFamily: "Default",
		lineHeight: { Desktop: "", Tablet: "", Mobile: "" },
		lineHeightUnits: { Desktop: "px", Tablet: "px", Mobile: "px" },
		fontSize: { Desktop: "", Tablet: "", Mobile: "" },
		fontSizeUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
		fontWeight: "Default",
		fontStyle: "Default",
		textTransform: "Default",
		textDecoration: "Default",
		letterSpacing: { Desktop: "", Tablet: "", Mobile: "" },
		letterSpacingUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	link: {
		fontFamily: "Default",
		lineHeight: { Desktop: "", Tablet: "", Mobile: "" },
		lineHeightUnits: { Desktop: "px", Tablet: "px", Mobile: "px" },
		fontSize: { Desktop: "", Tablet: "", Mobile: "" },
		fontSizeUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
		fontWeight: "Default",
		fontStyle: "Default",
		textTransform: "Default",
		textDecoration: "Default",
		letterSpacing: { Desktop: "", Tablet: "", Mobile: "" },
		letterSpacingUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	button: {
		fontFamily: "Default",
		lineHeight: { Desktop: "", Tablet: "", Mobile: "" },
		lineHeightUnits: { Desktop: "px", Tablet: "px", Mobile: "px" },
		fontSize: { Desktop: "", Tablet: "", Mobile: "" },
		fontSizeUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
		fontWeight: "Default",
		fontStyle: "Default",
		textTransform: "Default",
		textDecoration: "Default",
		letterSpacing: { Desktop: "Default", Tablet: "Default", Mobile: "Default" },
		letterSpacingUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	captions: {
		fontFamily: "Default",
		lineHeight: { Desktop: "", Tablet: "", Mobile: "" },
		lineHeightUnits: { Desktop: "px", Tablet: "px", Mobile: "px" },
		fontSize: { Desktop: "", Tablet: "", Mobile: "" },
		fontSizeUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
		fontWeight: "Default",
		fontStyle: "Default",
		textTransform: "Default",
		textDecoration: "Default",
		letterSpacing: { Desktop: "", Tablet: "", Mobile: "" },
		letterSpacingUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	heading: {
		all: {
			fontFamily: "Default",
			lineHeight: { Desktop: "", Tablet: "", Mobile: "" },
			lineHeightUnits: { Desktop: "px", Tablet: "px", Mobile: "px" },
			fontSize: { Desktop: "", Tablet: "", Mobile: "" },
			fontSizeUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
			fontWeight: "Default",
			fontStyle: "Default",
			textTransform: "Default",
			textDecoration: "Default",
			letterSpacing: { Desktop: "", Tablet: "", Mobile: "" },
			letterSpacingUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
		},
		h1: {
			fontFamily: "Default",
			lineHeight: { Desktop: "", Tablet: "", Mobile: "" },
			lineHeightUnits: { Desktop: "px", Tablet: "px", Mobile: "px" },
			fontSize: { Desktop: "", Tablet: "", Mobile: "" },
			fontSizeUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
			fontWeight: "Default",
			fontStyle: "Default",
			textTransform: "Default",
			textDecoration: "Default",
			letterSpacing: { Desktop: "", Tablet: "", Mobile: "" },
			letterSpacingUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
		},
		h2: {
			fontFamily: "Default",
			lineHeight: { Desktop: "", Tablet: "", Mobile: "" },
			lineHeightUnits: { Desktop: "px", Tablet: "px", Mobile: "px" },
			fontSize: { Desktop: "", Tablet: "", Mobile: "" },
			fontSizeUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
			fontWeight: "Default",
			fontStyle: "Default",
			textTransform: "Default",
			textDecoration: "Default",
			letterSpacing: { Desktop: "", Tablet: "", Mobile: "" },
			letterSpacingUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
		},
		h3: {
			fontFamily: "Default",
			lineHeight: { Desktop: "", Tablet: "", Mobile: "" },
			lineHeightUnits: { Desktop: "px", Tablet: "px", Mobile: "px" },
			fontSize: { Desktop: "", Tablet: "", Mobile: "" },
			fontSizeUnit: {
				Desktop: "px",
				Tablet: "FrontisBlocksSidebar.jsx",
				Mobile: "px",
			},
			fontWeight: "Default",
			fontStyle: "Default",
			textTransform: "Default",
			textDecoration: "Default",
			letterSpacing: { Desktop: "", Tablet: "", Mobile: "" },
			letterSpacingUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
		},
		h4: {
			fontFamily: "Default",
			lineHeight: { Desktop: "", Tablet: "", Mobile: "" },
			lineHeightUnits: { Desktop: "px", Tablet: "px", Mobile: "px" },
			fontSize: { Desktop: "", Tablet: "", Mobile: "" },
			fontSizeUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
			fontWeight: "Default",
			fontStyle: "Default",
			textTransform: "Default",
			textDecoration: "Default",
			letterSpacing: { Desktop: "", Tablet: "", Mobile: "" },
			letterSpacingUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
		},
		h5: {
			fontFamily: "Default",
			lineHeight: { Desktop: "", Tablet: "", Mobile: "" },
			lineHeightUnits: { Desktop: "px", Tablet: "px", Mobile: "px" },
			fontSize: { Desktop: "", Tablet: "", Mobile: "" },
			fontSizeUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
			fontWeight: "Default",
			fontStyle: "Default",
			textTransform: "Default",
			textDecoration: "Default",
			letterSpacing: { Desktop: "", Tablet: "", Mobile: "" },
			letterSpacingUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
		},
		h6: {
			fontFamily: "Default",
			lineHeight: { Desktop: "", Tablet: "", Mobile: "" },
			lineHeightUnits: { Desktop: "px", Tablet: "px", Mobile: "px" },
			fontSize: { Desktop: "", Tablet: "", Mobile: "" },
			fontSizeUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
			fontWeight: "Default",
			fontStyle: "Default",
			textTransform: "Default",
			textDecoration: "Default",
			letterSpacing: { Desktop: "", Tablet: "", Mobile: "" },
			letterSpacingUnit: { Desktop: "px", Tablet: "px", Mobile: "px" },
		},
	},
};

function FrontisBlocksSidebar() {
	const deviceType = useDeviceType();
	const { editPost } = useDispatch("core/editor");
	const isAfterSave = useAfterSave();

	// State management
	const [globalColors, setGlobalColors] = useState(defaultColors);
	const [customColors, setCustomColors] = useState([]);
	const [gradientColors, setGradientColors] = useState(gradientDefaults);
	const [customGradientColors, setCustomGradientColors] = useState([]);
	const [typography, setTypography] = useState(defaultTypography);
	const [customTypography, setCustomTypography] = useState({});
	const [fontFamilies, setFontFamilies] = useState({});
	const [activeTab, setActiveTab] = useState("solid");
	const [colorModalOpen, setColorModalOpen] = useState(false);
	const [colorName, setColorName] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	// Memoized theme colors
	const themeColors = useMemo(
		() => frontisBlocksAdmin?.theme_colors || defaultColors,
		[],
	);

	// Utility to extract font families
	const getAllFontFamilies = useCallback((fontsObject) => {
		const fontFamilies = [];
		const extractFonts = (obj) => {
			Object.values(obj).forEach((value) => {
				if (typeof value === "string") fontFamilies.push(value);
				else if (typeof value === "object") extractFonts(value);
			});
		};
		extractFonts(fontsObject);
		const fontsString = fontFamilies.join(",");
		loadGoogleFont(fontsString);
	}, []);

	const handleUpdateState = useCallback(async () => {
		console.log("Initial loaded");
		setIsLoading(true);
		const localStorageKeys = [
			{
				key: "fb_global_colors",
				setter: setGlobalColors,
				defaultValue: themeColors,
				api: "fb_get_global_colors",
			},
			{
				key: "fb_custom_colors",
				setter: setCustomColors,
				defaultValue: [],
				api: "fb_get_custom_colors",
			},
			{
				key: "fb_gradient_colors",
				setter: setGradientColors,
				defaultValue: gradientDefaults,
				api: "fb_get_gradient_colors",
			},
			{
				key: "fb_custom_gradient_colors",
				setter: setCustomGradientColors,
				defaultValue: [],
				api: "fb_get_custom_gradient_colors",
			},
			{
				key: "fb_typography",
				setter: setTypography,
				defaultValue: defaultTypography,
				api: "fb_get_typography",
			},
			{
				key: "fb_custom_typography",
				setter: setCustomTypography,
				defaultValue: [],
				api: "fb_get_custom_typography",
			},
			{
				key: "fb_fontfamilies",
				setter: setFontFamilies,
				defaultValue: [],
				api: "fb_get_fontfamilies",
				postProcess: getAllFontFamilies,
			},
			{
				key: "fb_globaltypo",
				setter: null,
				defaultValue: null,
				api: "fb_get_globaltypo",
				postProcess: (data) => generateCSSVariables(data, deviceType),
			},
		];

		try {
			for (const {
				key,
				setter,
				defaultValue,
				api,
				postProcess,
			} of localStorageKeys) {
				if (key === "fb_global_colors") {
					// Forcefully set fb_global_colors to themeColors
					setter(themeColors);
					localStorage.setItem(key, JSON.stringify(themeColors));
					if (postProcess) setTimeout(() => postProcess(themeColors), 1000);
				} else {
					const localData = getFbLocalStorage(key);
					// if (!localData || localData.length < 1) {
					// 	const res = await getGlobalStyle(api);
					// 	const data = res.success ? res.data : defaultValue;
					// 	if (setter) setter(data);
					// 	localStorage.setItem(key, JSON.stringify(data));
					// 	if (postProcess) setTimeout(() => postProcess(data), 1000);
					// } else {
					// 	if (setter) setter(localData);
					// 	if (postProcess) setTimeout(() => postProcess(localData), 1000);
					// }
					const res = await getGlobalStyle(api);
					const data = res.success ? res.data : defaultValue;
					if (setter) setter(data);
					localStorage.setItem(key, JSON.stringify(data));
					if (postProcess) setTimeout(() => postProcess(data), 1000);
				}
			}
		} catch (error) {
			console.error("Error fetching global settings:", error);
		} finally {
			setIsLoading(false);
		}
	}, [deviceType, themeColors, getAllFontFamilies]);

	// Initialize on mount and device type change
	useEffect(() => {
		handleUpdateState();
	}, [handleUpdateState]);

	// Generate color variables
	useEffect(() => {
		const mergedColors = [
			...customColors,
			...globalColors,
			...customGradientColors,
			...gradientColors,
		];
		setTimeout(() => generateColorsVariables(mergedColors, deviceType), 1000);
	}, [
		globalColors,
		customColors,
		customGradientColors,
		gradientColors,
		deviceType,
	]);

	// Save settings after post save
	const handleUpdateSettings = useCallback(async () => {
		if (!isAfterSave || !isLoading) return;
		const settings = [
			{
				key: "fb_update_global_colors",
				data: globalColors,
				setter: setGlobalColors,
				storeKey: "fb_global_colors",
			},
			{
				key: "fb_update_custom_colors",
				data: customColors,
				setter: setCustomColors,
				storeKey: "fb_custom_colors",
			},
			{
				key: "fb_update_gradient_colors",
				data: gradientColors,
				setter: setGradientColors,
				storeKey: "fb_gradient_colors",
			},
			{
				key: "fb_update_custom_gradient_colors",
				data: customGradientColors,
				setter: setCustomGradientColors,
				storeKey: "fb_custom_gradient_colors",
			},
		];

		try {
			for (const { key, data, setter, storeKey } of settings) {
				const response = await updateGlobalStyle(data, key);
				if (response.success) {
					setter(response.data.data);
					localStorage.setItem(storeKey, JSON.stringify(response.data.data));
				}
			}
		} catch (error) {
			console.error("Error updating settings:", error);
		}
	}, [
		isAfterSave,
		isLoading,
		globalColors,
		customColors,
		gradientColors,
		customGradientColors,
	]);

	useEffect(() => {
		handleUpdateSettings();
	}, [handleUpdateSettings]);

	// Color panel array generator
	const colorPanelArray = useCallback((colors, setColor, defaults = []) => {
		if (!Array.isArray(colors)) return [];
		return colors.map((colorObj, index) => ({
			label: colorObj.name || "Color",
			value: colorObj.color,
			onChange: (newColor) =>
				setColor(index, newColor || defaults[index]?.color || "#000"),
		}));
	}, []);

	// Color update handlers
	const setGlobalColor = useCallback((index, color) => {
		setGlobalColors((prev) => {
			const colors = [...prev];
			colors[index].color = color;
			return colors;
		});
		setIsLoading(true);
	}, []);

	const setGradientColor = useCallback((index, color) => {
		setGradientColors((prev) => {
			const colors = [...prev];
			colors[index].color = color;
			return colors;
		});
		setIsLoading(true);
	}, []);

	const setCustomGradientColor = useCallback((index, color) => {
		setCustomGradientColors((prev) => {
			const colors = [...prev];
			colors[index].color = color;
			return colors;
		});
		setIsLoading(true);
	}, []);

	const setCustomColor = useCallback((index, color) => {
		setCustomColors((prev) => {
			const colors = [...prev];
			colors[index].color = color;
			return colors;
		});
		setIsLoading(true);
	}, []);

	// Custom color and gradient handlers
	const addCustomColor = useCallback(() => {
		setColorModalOpen(true);
		setIsLoading(true);
	}, []);

	const deleteCustomGradientColor = useCallback((index) => {
		setCustomGradientColors((prev) => {
			const colors = [...prev];
			colors.splice(index, 1);
			return colors;
		});
		setIsLoading(true);
	}, []);

	const addCustomGradientColor = useCallback(() => {
		setCustomGradientColors((prev) => [
			...prev,
			{
				color: "#000000",
				name: `Gradient Color ${prev.length + 1}`,
				slug: `custom-gradient-color-${prev.length + 1}`,
				var: `--fb-custom-gradient-color-${prev.length + 1}`,
			},
		]);
		setIsLoading(true);
	}, []);

	// Handle modal close and new color addition
	useEffect(() => {
		if (!colorModalOpen && colorName) {
			setCustomColors((prev) => [
				...prev,
				{
					color: "#000000",
					name: colorName || `Custom Color ${prev.length + 1}`,
					slug: colorName
						? colorName.replace(/\s+/g, "-").toLowerCase()
						: `custom-color-${prev.length + 1}`,
				},
			]);
			setColorName("");
		}
	}, [colorModalOpen, colorName]);

	return (
		<>
			<PluginSidebarMoreMenuItem target="fb_plugin_sidebar">
				{__("FB Global Settings", "frontis-blocks")}
			</PluginSidebarMoreMenuItem>
			<div className="fb_plugin_sidebar">
				<PluginSidebar
					name="frontis-blocks-sidebar"
					title={__("FB Global Settings", "frontis-blocks")}
					className="fb-global-controls"
				>
					<div className="fb-panel-control">
						<NavigatorProvider initialPath="/">
							<NavigatorScreen path="/">
								<div className="fb-blocks-tabs">
									<div className="fb-tab-element">
										<NavigatorButton path="/typography">
											<div className="fb-tab-wrapper">
												<span className="fb-tab-icon">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														width="24"
														height="24"
													>
														<path
															fill="currentcolor"
															d="M6.9 7L3 17.8h1.7l1-2.8h4.1l1 2.8h1.7L8.6 7H6.9zm-.7 6.6l1.5-4.3 1.5 4.3h-3zM21.6 17c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1s-.3-.1-.4-.2c-.1-.1-.1-.3-.1-.6V12c0-.5 0-1-.1-1.4-.1-.4-.3-.7-.5-1-.2-.2-.5-.4-.9-.5-.4 0-.8-.1-1.3-.1s-1 .1-1.4.2c-.4.1-.7.3-1 .4-.2.2-.4.3-.6.5-.1.2-.2.4-.2.7 0 .3.1.5.2.8.2.2.4.3.8.3.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.6-.4.2-.2.4-.3.7-.4.3-.1.6-.1. BUDDHA 8-.1.3 0 .6 0 .8.1.2.1.4.3.5.5.1.2.2.5.2.9v1.1c0 .3-.1.5-.3.6-.2.2-.5.3-.9.4-.3.1-.7.3-1.1.4-.4.1-.8.3-1.1.5-.3.2-.6.4-.8.7-.2.3-.3.7-.3 1.2 0 .6.2 1.1.5 1.4.3.4.9.5 1.6.5.5 0 1-.1 1.4-.3.4-.2.8-.6 1.1-1.1 0 .4.1.7.3 1 .2.3.6.4 1.2.4.4 0 .7-.1.9-.2.2-.1.5-.3.7-.4h-.3zm-3-.9c-.2.4-.5.7-.8.8-.3.2-.6.2-.8.2-.4 0-.6-.1-.9-.3-.2-.2-.3-.6-.3-1.1 0-.5.1-.9.3-1.2s.5-.5.8-.7c.3-.2.7-.3 1-.5.3-.1.6-.3.7-.6v3.4z"
														/>
													</svg>
												</span>
												<span className="fb-tab-title">
													{__("Typography", "frontis-blocks")}
												</span>
											</div>
										</NavigatorButton>
									</div>
									<div className="fb-tab-element">
										<NavigatorButton path="/colors">
											<div className="fb-tab-wrapper">
												<span className="fb-tab-icon">
													<svg
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
														width="24"
														height="24"
													>
														<path
															fill="currentcolor"
															d="M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"
														/>
													</svg>
												</span>
												<span className="fb-tab-title">
													{__("Colors", "frontis-blocks")}
												</span>
											</div>
										</NavigatorButton>
									</div>
								</div>
							</NavigatorScreen>

							<NavigatorScreen path="/typography">
								<div className="fb-global-header-inner-wrapper">
									<NavigatorButton path="/" className="back-button">
										<span>
											<svg
												width="16"
												height="17"
												viewBox="0 0 16 17"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M10.5 13.5L5.5 8.5L10.5 3.5"
													stroke="#404655"
													strokeWidth="1.2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</span>
									</NavigatorButton>
									<div className="fb-global-header-inner">
										<h3>{__("Typography", "frontis-blocks")}</h3>
										<p>
											{__(
												"Available fonts, typographic styles, application of those styles.",
												"frontis-blocks",
											)}
										</p>
									</div>
								</div>
								<TypographySettings
									typography={typography}
									customTypography={customTypography}
									isAfterSave={isAfterSave}
								/>
							</NavigatorScreen>

							<NavigatorScreen path="/colors">
								<div className="fb-global-header-inner-wrapper">
									<NavigatorButton path="/" className="back-button">
										<span>
											<svg
												width="16"
												height="17"
												viewBox="0 0 16 17"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M10.5 13.5L5.5 8.5L10.5 3.5"
													stroke="#404655"
													strokeWidth="1.2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</span>
									</NavigatorButton>
									<div className="fb-global-header-inner">
										<h3>{__("Color", "frontis-blocks")}</h3>
										<p>
											{__(
												"Available texts, links, Button, Headings global colors",
												"frontis-blocks",
											)}
										</p>
									</div>
								</div>
								<TabPanel
									className="fb-blocks-color-tabs"
									activeClass="active-tab"
									onSelect={setActiveTab}
									tabs={[
										{ name: "solid", title: __("Solid", "frontis-blocks") },
										{
											name: "gradient",
											title: __("Gradient", "frontis-blocks"),
										},
									]}
								>
									{(tab) => (
										<div>
											{tab.name === "solid" && (
												<>
													<PanelColorSettings
														title={__("Global Colors", "frontis-blocks")}
														className="fb-color-panel fb-global-color-panel"
														initialOpen
														disableAlpha
														disableCustomGradients={false}
														colorSettings={colorPanelArray(
															globalColors,
															setGlobalColor,
															themeColors,
														)}
													/>
													{customColors.length > 0 && (
														<ColorPalletWrapper
															colorPanelArray={colorPanelArray}
															customColors={customColors}
															setCustomColor={setCustomColor}
															setCustomColors={setCustomColors}
														/>
													)}
													{colorModalOpen && (
														<Modal
															title={__("Add Color name", "frontis-blocks")}
															onRequestClose={() => setColorModalOpen(false)}
														>
															<TextControl
																__nextHasNoMarginBottom
																__next40pxDefaultSize
																label={__("Color Name", "frontis-blocks")}
																value={colorName}
																onChange={setColorName}
															/>
															<Button
																className="fb-custom-color-btn"
																onClick={() => setColorModalOpen(false)}
															>
																{__("Save", "frontis-blocks")}
															</Button>
														</Modal>
													)}
													<div className="add-custom-color">
														<Button
															className="add-custom-color-btn"
															onClick={addCustomColor}
														>
															{__("Add Custom Color", "frontis-blocks")}{" "}
															<span>
																<svg
																	width="15"
																	height="14"
																	viewBox="0 0 15 14"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M7.5 0.75V13.25M13.75 7L1.25 7"
																		stroke="white"
																		strokeWidth="1.5"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																	/>
																</svg>
															</span>
														</Button>
													</div>
												</>
											)}
											{tab.name === "gradient" && (
												<>
													<GradientColorPallet
														title={__("Gradient Colors", "frontis-blocks")}
														colors={gradientColors}
														setColor={setGradientColor}
														setColors={setGradientColors}
														wrapperClass="fb-gradient-color-panel"
														resetAction
													/>
													{customGradientColors.length > 0 && (
														<CustomGradientColorPallet
															title={__(
																"Custom Gradient Colors",
																"frontis-blocks",
															)}
															colors={customGradientColors}
															setColor={setCustomGradientColor}
															setColors={setCustomGradientColors}
															wrapperClass="fb-gradient-color-panel"
															resetAction={false}
															deleteAction
															onDelete={deleteCustomGradientColor}
														/>
													)}
													<div className="add-custom-color">
														<Button
															className="add-custom-color-btn"
															onClick={addCustomGradientColor}
														>
															{__("Add Custom Color", "frontis-blocks")}{" "}
															<span>
																<svg
																	width="15"
																	height="14"
																	viewBox="0 0 15 14"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M7.5 0.75V13.25M13.75 7L1.25 7"
																		stroke="white"
																		strokeWidth="1.5"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																	/>
																</svg>
															</span>
														</Button>
													</div>
												</>
											)}
										</div>
									)}
								</TabPanel>
							</NavigatorScreen>
						</NavigatorProvider>
					</div>
				</PluginSidebar>
			</div>
		</>
	);
}

export default FrontisBlocksSidebar;
