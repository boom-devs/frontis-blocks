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
import './scss/global-settings.scss';
import ColorSettings from "./components/ColorSettings";
import { defaultColors, defaultTypography } from "./constants/constants";


function FsiGbTypography() {
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



	return (
		<>
			<div className="fb_template_library_sidebar">
					<div className="fb-panel-control">
						<NavigatorProvider initialPath="/">
								<ColorSettings
									globalColors={globalColors}
									setGlobalColors={setGlobalColors}
									customColors={customColors}
									setCustomColors={setCustomColors}
									gradientColors={gradientColors}
									setGradientColors={setGradientColors}
									customGradientColors={customGradientColors}
									setCustomGradientColors={setCustomGradientColors}
									deviceType={deviceType}
									isAfterSave={isAfterSave}
									isLoading={isLoading}
									setIsLoading={setIsLoading}
								/>

								<TypographySettings
									typography={typography}
									isAfterSave={isAfterSave}
								/>
						</NavigatorProvider>
					</div>
			</div>
		</>
	);
}

export default FsiGbTypography;

