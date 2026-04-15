import { __ } from "@wordpress/i18n";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/editor";
import { useViewportMatch } from '@wordpress/compose';
import {
	__experimentalNavigatorProvider as NavigatorProvider,
	__experimentalNavigatorScreen as NavigatorScreen,
	__experimentalNavigatorButton as NavigatorButton,
	__experimentalPaletteEdit as PaletteEdit,
} from "@wordpress/components";
import { useEffect, useState, useCallback, useMemo, useRef } from "@wordpress/element";
import TypographySettings from "./components/TypographySettings";
import { useDeviceType } from "@Config/displayType";
import { loadGoogleFont } from "./helper";
import { getGlobalStyle, updateGlobalStyle } from "./fetch";
import generateCSSVariables from "./components/GenerateRootCss";
import generateColorsVariables from "./components/GenerateColorRoot";
import FrontisMetaBox from "./theme-settings/editor";
import FrontisThemeSiteEditor from "./theme-settings/site-editor";
import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
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

const getStoredSetting = (key, fallback) => {
	try {
		const storedValue = window.localStorage.getItem(key);
		if (storedValue === null) {
			return fallback;
		}

		const parsedValue = JSON.parse(storedValue);
		return parsedValue ?? fallback;
	} catch (error) {
		return fallback;
	}
};

const setStoredSetting = (key, value) => {
	try {
		window.localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		// Ignore localStorage write failures and keep the in-memory state.
	}
};

const normalizePaletteItems = (value, fallback = []) => {
	if (Array.isArray(value)) {
		return value;
	}

	return Array.isArray(fallback) ? fallback : [];
};

const getThemeOwnedStorageHashKey = (key) => `${key}__theme_palette_hash`;

const getStoredThemeOwnedSetting = (key, fallback, themePaletteHash) => {
	const storedValue = getStoredSetting(key, fallback);

	if (!themePaletteHash) {
		return storedValue;
	}

	const storedThemePaletteHash = getStoredSetting(
		getThemeOwnedStorageHashKey(key),
		"",
	);

	if (storedThemePaletteHash !== themePaletteHash) {
		return fallback;
	}

	return storedValue;
};

const setStoredThemeOwnedSetting = (key, value, themePaletteHash) => {
	setStoredSetting(key, value);
	setStoredSetting(getThemeOwnedStorageHashKey(key), themePaletteHash || "");
};

function FrontisBlocksSidebar() {
	const deviceType = useDeviceType();
	const defaultThemeColors = useMemo(
		() => normalizePaletteItems(frontisBlocksAdmin?.theme_colors, defaultColors),
		[],
	);
	const defaultGradientColors = useMemo(
		() => normalizePaletteItems(frontisBlocksAdmin?.gradients_colors),
		[],
	);
	const themeColorPaletteHash = frontisBlocksAdmin?.theme_color_palette_hash || "";
	const themeGradientPaletteHash = frontisBlocksAdmin?.theme_gradient_palette_hash || "";

	// State management
	const [globalColors, setGlobalColors] = useState(() =>
		normalizePaletteItems(
			getStoredThemeOwnedSetting(
				"fb_global_colors",
				frontisBlocksAdmin?.global_colors,
				themeColorPaletteHash,
			),
			defaultThemeColors,
		),
	);
	const [customColors, setCustomColors] = useState(() =>
		normalizePaletteItems(getStoredSetting("fb_custom_colors", [])),
	);
	const [gradientColors, setGradientColors] = useState(() =>
		normalizePaletteItems(
			getStoredThemeOwnedSetting(
				"fb_gradient_colors",
				frontisBlocksAdmin?.gradients_colors,
				themeGradientPaletteHash,
			),
			defaultGradientColors,
		),
	);
	const [customGradientColors, setCustomGradientColors] = useState(() =>
		normalizePaletteItems(getStoredSetting("fb_custom_gradient_colors", [])),
	);
	const [typography, setTypography] = useState(defaultTypography);
	const [customTypography, setCustomTypography] = useState({});
	const [fontFamilies, setFontFamilies] = useState({});
	const [hasLoadedSettings, setHasLoadedSettings] = useState(false);
	const lastSavedColorSettingsRef = useRef("");
	const queuedColorSettingsRef = useRef(null);
	const isSavingColorSettingsRef = useRef(false);
	const hasPendingLocalColorChangesRef = useRef(false);


	const mobilePopoverProps = { placement: 'bottom-start', offset: 8 };
	// Memoized theme colors
	const themeColors = useMemo(
		() => defaultThemeColors,
		[],
	);

	const isMobileViewport = useViewportMatch( 'small', '<' );
	const popoverProps = isMobileViewport ? mobilePopoverProps : undefined;

	const buildColorSettings = useCallback(() => ({
		globalColors: normalizePaletteItems(globalColors, themeColors),
		customColors: normalizePaletteItems(customColors),
		gradientColors: normalizePaletteItems(gradientColors, defaultGradientColors),
		customGradientColors: normalizePaletteItems(customGradientColors),
	}), [
		globalColors,
		customColors,
		gradientColors,
		customGradientColors,
		themeColors,
		defaultGradientColors,
	]);

	const handleGlobalColorsChange = useCallback((nextGlobalColors) => {
		const normalizedGlobalColors = normalizePaletteItems(nextGlobalColors, themeColors);
		hasPendingLocalColorChangesRef.current = true;
		setGlobalColors(normalizedGlobalColors);
		setStoredThemeOwnedSetting(
			"fb_global_colors",
			normalizedGlobalColors,
			themeColorPaletteHash,
		);
	}, [themeColors, themeColorPaletteHash]);

	const handleCustomColorsChange = useCallback((nextCustomColors) => {
		const normalizedCustomColors = normalizePaletteItems(nextCustomColors);
		hasPendingLocalColorChangesRef.current = true;
		setCustomColors(normalizedCustomColors);
		setStoredSetting("fb_custom_colors", normalizedCustomColors);
	}, []);

	const handleGradientColorsChange = useCallback((nextGradientColors) => {
		const normalizedGradientColors = normalizePaletteItems(nextGradientColors, defaultGradientColors);
		hasPendingLocalColorChangesRef.current = true;
		setGradientColors(normalizedGradientColors);
		setStoredThemeOwnedSetting(
			"fb_gradient_colors",
			normalizedGradientColors,
			themeGradientPaletteHash,
		);
	}, [defaultGradientColors, themeGradientPaletteHash]);

	const handleCustomGradientColorsChange = useCallback((nextCustomGradientColors) => {
		const normalizedCustomGradientColors = normalizePaletteItems(nextCustomGradientColors);
		hasPendingLocalColorChangesRef.current = true;
		setCustomGradientColors(normalizedCustomGradientColors);
		setStoredSetting("fb_custom_gradient_colors", normalizedCustomGradientColors);
	}, []);

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
		setHasLoadedSettings(false);
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
				const loadedSettings = {
					globalColors: normalizePaletteItems(
						getStoredThemeOwnedSetting(
							"fb_global_colors",
							frontisBlocksAdmin?.global_colors,
							themeColorPaletteHash,
						),
						themeColors,
					),
					customColors: normalizePaletteItems(getStoredSetting("fb_custom_colors", [])),
					gradientColors: normalizePaletteItems(
						getStoredThemeOwnedSetting(
							"fb_gradient_colors",
							frontisBlocksAdmin?.gradients_colors,
							themeGradientPaletteHash,
						),
						defaultGradientColors,
					),
				customGradientColors: normalizePaletteItems(
					getStoredSetting("fb_custom_gradient_colors", []),
				),
			};

			for (const {
				key,
				setter,
				defaultValue,
				api,
				postProcess,
				} of localStorageKeys) {
					if (key === "fb_global_colors") {
						const currentGlobalColors = loadedSettings.globalColors;
						if (!hasPendingLocalColorChangesRef.current) {
							setter(currentGlobalColors);
							setStoredThemeOwnedSetting(key, currentGlobalColors, themeColorPaletteHash);
						}
						loadedSettings.globalColors = currentGlobalColors;
						if (postProcess) setTimeout(() => postProcess(currentGlobalColors), 1000);
					} else {
					const res = await getGlobalStyle(api);
					const data = res.success ? res.data : defaultValue;

						if (key === "fb_custom_colors") {
							const normalizedCustomColors = normalizePaletteItems(data);
							if (setter && !hasPendingLocalColorChangesRef.current) {
								setter(normalizedCustomColors);
								setStoredSetting(key, normalizedCustomColors);
							}
							loadedSettings.customColors = normalizedCustomColors;
							if (postProcess) setTimeout(() => postProcess(normalizedCustomColors), 1000);
							continue;
					}

						if (key === "fb_gradient_colors") {
							const normalizedGradientColors = normalizePaletteItems(data, defaultGradientColors);
							if (setter && !hasPendingLocalColorChangesRef.current) {
								setter(normalizedGradientColors);
								setStoredThemeOwnedSetting(
									key,
									normalizedGradientColors,
									themeGradientPaletteHash,
								);
							}
							loadedSettings.gradientColors = normalizedGradientColors;
							if (postProcess) setTimeout(() => postProcess(normalizedGradientColors), 1000);
							continue;
					}

						if (key === "fb_custom_gradient_colors") {
							const normalizedCustomGradientColors = normalizePaletteItems(data);
							if (setter && !hasPendingLocalColorChangesRef.current) {
								setter(normalizedCustomGradientColors);
								setStoredSetting(key, normalizedCustomGradientColors);
							}
							loadedSettings.customGradientColors = normalizedCustomGradientColors;
							if (postProcess) setTimeout(() => postProcess(normalizedCustomGradientColors), 1000);
							continue;
					}

					if (setter) setter(data);
					setStoredSetting(key, data);
					if (postProcess) setTimeout(() => postProcess(data), 1000);
				}
			}
			lastSavedColorSettingsRef.current = JSON.stringify(loadedSettings);
		} catch (error) {
			console.error("Error fetching global settings:", error);
		} finally {
			setHasLoadedSettings(true);
		}
		}, [
			deviceType,
			themeColors,
			getAllFontFamilies,
			defaultGradientColors,
			themeColorPaletteHash,
			themeGradientPaletteHash,
		]);

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

	const flushQueuedColorSettings = useCallback(async () => {
		if (isSavingColorSettingsRef.current) {
			return;
		}

		isSavingColorSettingsRef.current = true;

		try {
			while (queuedColorSettingsRef.current) {
				const { settings, signature } = queuedColorSettingsRef.current;
				queuedColorSettingsRef.current = null;

				const settingsQueue = [
					{
						key: "fb_update_global_colors",
						data: normalizePaletteItems(settings.globalColors, themeColors),
						storeKey: "fb_global_colors",
						themePaletteHash: themeColorPaletteHash,
					},
					{
						key: "fb_update_custom_colors",
						data: normalizePaletteItems(settings.customColors),
						storeKey: "fb_custom_colors",
					},
					{
						key: "fb_update_gradient_colors",
						data: normalizePaletteItems(settings.gradientColors, defaultGradientColors),
						storeKey: "fb_gradient_colors",
						themePaletteHash: themeGradientPaletteHash,
					},
					{
						key: "fb_update_custom_gradient_colors",
						data: normalizePaletteItems(settings.customGradientColors),
						storeKey: "fb_custom_gradient_colors",
					},
				];

				for (const { key, data, storeKey, themePaletteHash } of settingsQueue) {
					const response = await updateGlobalStyle(data, key);
					if (!response.success) {
						throw new Error(`Failed to update ${key}`);
					}

					const normalizedStoredData = normalizePaletteItems(response.data?.data, data);

					if (themePaletteHash) {
						setStoredThemeOwnedSetting(storeKey, normalizedStoredData, themePaletteHash);
						continue;
					}

					setStoredSetting(storeKey, normalizedStoredData);
				}

				lastSavedColorSettingsRef.current = signature;
				hasPendingLocalColorChangesRef.current = false;
			}
		} catch (error) {
			console.error("Error updating settings:", error);
		} finally {
			isSavingColorSettingsRef.current = false;
			if (queuedColorSettingsRef.current) {
				flushQueuedColorSettings();
			}
		}
		}, [
			themeColors,
			defaultGradientColors,
			themeColorPaletteHash,
			themeGradientPaletteHash,
		]);

	useEffect(() => {
		if (!hasLoadedSettings) {
			return;
		}

		const currentSettings = buildColorSettings();
		const currentSignature = JSON.stringify(currentSettings);

		if (currentSignature === lastSavedColorSettingsRef.current) {
			return;
		}

		const saveTimeout = setTimeout(() => {
			queuedColorSettingsRef.current = {
				settings: currentSettings,
				signature: currentSignature,
			};
			flushQueuedColorSettings();
		}, 800);

		return () => clearTimeout(saveTimeout);
	}, [buildColorSettings, flushQueuedColorSettings, hasLoadedSettings]);

	useEffect(() => {
		if (globalColors === undefined) {
			setGlobalColors(themeColors);
		}
	}, [globalColors, themeColors]);


	function addCustomSettingsToCoreColumns( settings, name ) {
		if ( name !== 'core/template-part' ) {
		  return settings;
		}
	  
		return {
		  ...settings,
		  attributes: {
			...settings.attributes,
			isReverseDirection: {
			  type: 'boolean',
			  default: false,
			},
		  },
		  edit( props ) {
			const { attributes, setAttributes } = props;
			const { isReverseDirection } = attributes;
	  
			return (
			  <>
				<InspectorControls>
				  <PanelBody title="Custom Column Settings">
					<ToggleControl
					  label="Reverse Direction on Mobile"
					  checked={ isReverseDirection }
					  onChange={ ( value ) =>
						setAttributes( { isReverseDirection: value } )
					  }
					/>
				  </PanelBody>
				</InspectorControls>
				{ /* Rest of the edit function to use the attribute */ }
			  </>
			);
		  },
		};
	  }
	  
	  addFilter(
		'blocks.registerBlockType',
		'my-plugin/add-custom-settings',
		addCustomSettingsToCoreColumns
	  );

	const url = new URL(window.location.href);
	const pValue = url.searchParams.get('p');
	const canvas = url.searchParams.get('canvas');
	
	const isSiteEditor = window.location.href.includes('site-editor.php') && 
						pValue?.includes('wp_template') && 
						!pValue?.startsWith('/wp_template_part/');
	const isPagePost = window.location.href.includes('post.php');

	const onlyCanvasEditor = window.location.pathname.includes('site-editor.php') &&
	decodeURIComponent(pValue) === '/' &&
	canvas === 'edit';

	return (
		<>
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
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<path d="M16.816 10.6584C17.2519 9.87049 17.5 8.96422 17.5 8C17.5 4.96243 15.0376 2.5 12 2.5C8.96243 2.5 6.5 4.96243 6.5 8C6.5 8.96422 6.74812 9.87049 7.184 10.6584M16.816 10.6584C16.0838 11.9821 14.8217 12.9719 13.316 13.3416C12.8943 13.4451 12.4536 13.5 12 13.5C11.5464 13.5 11.1057 13.4451 10.684 13.3416M16.816 10.6584C19.2181 11.2482 21 13.416 21 16C21 19.0376 18.5376 21.5 15.5 21.5C14.1704 21.5 12.9509 21.0282 12 20.2428M7.184 10.6584C7.91622 11.9821 9.17827 12.9719 10.684 13.3416M7.184 10.6584C4.78193 11.2482 3 13.416 3 16C3 19.0376 5.46243 21.5 8.5 21.5C9.82963 21.5 11.0491 21.0282 12 20.2428M10.684 13.3416C10.2481 14.1295 10 15.0358 10 16C10 17.7079 10.7785 19.234 12 20.2428" stroke="#0B0C0E" stroke-width="1.4"/>
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
									<div className="fb-global-header-inner">
										<h3>
											<NavigatorButton path="/" className="back-button">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
													<path d="M10.5 13L5.5 8L10.5 3" stroke="#404655" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
												</svg>
											</NavigatorButton>
											{__("Typography", "frontis-blocks")}
										</h3>
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
									/>
								</NavigatorScreen>

							<NavigatorScreen path="/colors">
								<div className="fb-global-header-inner-wrapper">
									<div className="fb-global-header-inner">
										<h3>
											<NavigatorButton path="/" className="back-button">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
													<path d="M10.5 13L5.5 8L10.5 3" stroke="#404655" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
												</svg>
											</NavigatorButton>
											{__("Colors", "frontis-blocks")}
										</h3>
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
										<div className="fb-color-section-wrapper">
											<div className="fb-color-section">
												<div className="fb-palette-edit-panel fb-scrollable-palette fb-global-color-panel fb-solid-color-panel">
													<PaletteEdit
														canReset={ globalColors || themeColors }
														canOnlyChangeValues
														colors={ globalColors || themeColors }
														onChange={ handleGlobalColorsChange }
														paletteLabel={ __( 'Solid' ) }
														paletteLabelHeadingLevel={ 3 }
														popoverProps={ popoverProps }
													/>
												</div>
											</div>
											<div className="fb-color-section">
												<div className="fb-palette-edit-panel fb-scrollable-palette fb-custom-color-panel">
													<PaletteEdit
														colors={ customColors }
														onChange={ handleCustomColorsChange }
														paletteLabel={ __( 'Custom' ) }
														paletteLabelHeadingLevel={ 3 }
														slugPrefix="custom-"
														popoverProps={ popoverProps }
													/>
												</div>
											</div>
										</div>

										{/* Gradient Section */}
										<div className="fb-color-section-wrapper">
											{(gradientColors.length !== 0 || frontisBlocksAdmin?.gradients_colors.length !== 0) && (
												<div className="fb-color-section">
													<div className="fb-palette-edit-panel fb-scrollable-palette fb-gradient-color-panel">
														<PaletteEdit
															canReset={true}
															canOnlyChangeValues
															gradients={ gradientColors || frontisBlocksAdmin?.gradients_colors }
															onChange={ handleGradientColorsChange }
															paletteLabel={ __( 'Gradient' ) }
															paletteLabelHeadingLevel={ 3 }
															popoverProps={ popoverProps }
														/>
													</div>
												</div>
											)}
											<div className="fb-color-section">
												<div className="fb-palette-edit-panel fb-scrollable-palette fb-custom-gradient-color-panel">
													<PaletteEdit
														gradients={ customGradientColors }
														onChange={ handleCustomGradientColorsChange }
														paletteLabel={ __( 'Custom Gradients' ) }
														paletteLabelHeadingLevel={ 3 }
														slugPrefix="custom-"
														popoverProps={ popoverProps }
													/>
												</div>
											</div>
										</div>
									</div>
							</NavigatorScreen>
						</NavigatorProvider>

						<div className="fb-theme-settings-wrapper">
							{onlyCanvasEditor &&
								<FrontisThemeSiteEditor />
							}

							{(isPagePost || isSiteEditor) &&
								<FrontisMetaBox whichEditor={isPagePost ? 'post' : 'template'} />
							}
						</div>
					</div>
				</PluginSidebar>
			</div>
		</>
	);
}

export default FrontisBlocksSidebar;
