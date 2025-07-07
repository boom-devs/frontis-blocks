import { __ } from "@wordpress/i18n";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/editor";
import { useViewportMatch } from '@wordpress/compose';
import {
	__experimentalNavigatorProvider as NavigatorProvider,
	__experimentalNavigatorScreen as NavigatorScreen,
	__experimentalNavigatorButton as NavigatorButton,
	__experimentalPaletteEdit as PaletteEdit,
} from "@wordpress/components";
import { useEffect, useState, useCallback, useMemo } from "@wordpress/element";
import TypographySettings from "./components/TypographySettings";
import { useDeviceType } from "@Config/displayType";
import { loadGoogleFont, useAfterSave } from "./helper";
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
	const isAfterSave = useAfterSave();

	// State management
	const [globalColors, setGlobalColors] = useState(frontisBlocksAdmin?.global_colors);
	const [customColors, setCustomColors] = useState([]);
	const [gradientColors, setGradientColors] = useState(frontisBlocksAdmin?.gradients_colors);
	const [customGradientColors, setCustomGradientColors] = useState([]);
	const [typography, setTypography] = useState(defaultTypography);
	const [customTypography, setCustomTypography] = useState({});
	const [fontFamilies, setFontFamilies] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	// Memoized theme colors
	const themeColors = useMemo(
		() => frontisBlocksAdmin?.theme_colors || defaultColors,
		[],
	);

	const isMobileViewport = useViewportMatch( 'small', '<' );
	const popoverProps = isMobileViewport ? mobilePopoverProps : undefined;

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
				defaultValue: frontisBlocksAdmin?.gradients_colors,
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
					setter(globalColors ?? themeColors);
					localStorage.setItem(key, JSON.stringify(globalColors ?? themeColors));
					if (postProcess) setTimeout(() => postProcess(globalColors ?? themeColors), 1000);
				} else {
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
			...(customColors ?? []),
			...(customGradientColors ?? []),
			...(gradientColors ?? []),
			...(globalColors ?? (Array.isArray(themeColors) ? themeColors : [])),
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

			setIsLoading(false);
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

	useEffect(() => {
		console.log(isLoading)
		if (!isLoading) {
			setIsLoading(true);
			wp.data.dispatch('core/editor').editPost({ meta: { _dummy: new Date().getTime() } });
		}
	}, [customColors, globalColors, gradientColors, customGradientColors]);

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
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<path d="M6.9 7L3 17.8H4.7L5.7 15H9.8L10.8 17.8H12.5L8.6 7H6.9ZM6.2 13.6L7.7 9.3L9.2 13.6H6.2ZM21.6 17C21.5 17.1 21.4 17.2 21.3 17.2C21.2 17.3 21.1 17.3 20.9 17.3C20.7 17.3 20.6 17.2 20.5 17.1C20.4 17 20.4 16.8 20.4 16.5V12C20.4 11.5 20.4 11 20.3 10.6C20.2 10.2 20 9.9 19.8 9.6C19.6 9.4 19.3 9.2 18.9 9.1C18.5 9.1 18.1 9 17.6 9C17.1 9 16.6 9.1 16.2 9.2C15.8 9.3 15.5 9.5 15.2 9.6C15 9.8 14.8 9.9 14.6 10.1C14.5 10.3 14.4 10.5 14.4 10.8C14.4 11.1 14.5 11.3 14.6 11.6C14.8 11.8 15 11.9 15.4 11.9C15.7 11.9 16 11.8 16.2 11.6C16.4 11.4 16.5 11.2 16.5 10.9C16.5 10.6 16.4 10.4 16.3 10.2C16.1 10 15.9 9.9 15.7 9.8C15.9 9.6 16.1 9.5 16.4 9.4C16.7 9.3 17 9.3 17.2 9.3C17.5 9.3 17.8 9.3 18 9.4C18.2 9.5 18.4 9.7 18.5 9.9C18.6 10.1 18.7 10.4 18.7 10.8V11.9C18.7 12.2 18.6 12.4 18.4 12.5C18.2 12.7 17.9 12.8 17.5 12.9C17.2 13 16.8 13.2 16.4 13.3C16 13.4 15.6 13.6 15.3 13.8C15 14 14.7 14.2 14.5 14.5C14.3 14.8 14.2 15.2 14.2 15.7C14.2 16.3 14.4 16.8 14.7 17.1C15 17.5 15.6 17.6 16.3 17.6C16.8 17.6 17.3 17.5 17.7 17.3C18.1 17.1 18.5 16.7 18.8 16.2C18.8 16.6 18.9 16.9 19.1 17.2C19.3 17.5 19.7 17.6 20.3 17.6C20.7 17.6 21 17.5 21.2 17.4C21.4 17.3 21.7 17.1 21.9 17H21.6ZM18.6 16.1C18.4 16.5 18.1 16.8 17.8 16.9C17.5 17.1 17.2 17.1 17 17.1C16.6 17.1 16.4 17 16.1 16.8C15.9 16.6 15.8 16.2 15.8 15.7C15.8 15.2 15.9 14.8 16.1 14.5C16.3 14.2 16.6 14 16.9 13.8C17.2 13.6 17.6 13.5 17.9 13.3C18.2 13.2 18.5 13 18.6 12.7V16.1Z" fill="#15171C" />
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
								{/* Remove TabPanel and display options vertically */}
								<div className="fb-color-options-vertical">
									{/* Solid Colors Section */}
									<div className="fb-color-section">
										<PaletteEdit
											canReset={ globalColors || themeColors }
											canOnlyChangeValues
											colors={ globalColors || themeColors }
											onChange={ setGlobalColors }
											paletteLabel={ __( 'Solid' ) }
											paletteLabelHeadingLevel={ 3 }
											popoverProps={ popoverProps }
										/>
										<PaletteEdit
											colors={ customColors }
											onChange={ setCustomColors }
											paletteLabel={ __( 'Custom' ) }
											paletteLabelHeadingLevel={ 3 }
											slugPrefix="custom-"
											popoverProps={ popoverProps }
										/>

									</div>

									{/* Gradient Section */}
									<div className="fb-color-section">
										<PaletteEdit
											canReset={true}
											canOnlyChangeValues
											gradients={ gradientColors || frontisBlocksAdmin?.gradients_colors }
											onChange={ setGradientColors }
											paletteLabel={ __( 'Gradient' ) }
											paletteLabelHeadingLevel={ 3 }
											popoverProps={ popoverProps }
										/>
										<PaletteEdit
											gradients={ customGradientColors }
											onChange={ setCustomGradientColors }
											paletteLabel={ __( 'Custom Gradient Colors' ) }
											paletteLabelHeadingLevel={ 3 }
											slugPrefix="custom-"
											popoverProps={ popoverProps }
										/>
									</div>
								</div>
							</NavigatorScreen>
						</NavigatorProvider>
					</div>
				</PluginSidebar>
			</div>
		</>
	);
}

export default FrontisBlocksSidebar;
