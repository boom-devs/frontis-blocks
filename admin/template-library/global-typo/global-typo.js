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
	Popover,
	Dropdown,
	BaseControl,
	ColorPalette
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
import "./scss/global-typo.scss";

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
				Tablet: "FsiGbTypography.jsx",
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

function FsiGbTypography() {
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

	// New state for color picker modal
	const [colorPickerModal, setColorPickerModal] = useState(false);
	const [selectedColorIndex, setSelectedColorIndex] = useState(null);
	const [selectedColorType, setSelectedColorType] = useState(null); 
	const [anchorEl, setAnchorEl] = useState(null);

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

	// Handle color click to open picker modal
	const handleColorClick = useCallback((index, type) => {
		setSelectedColorIndex(index);
		setSelectedColorType(type);
		setAnchorEl(event.currentTarget);
		setColorPickerModal(true);
	}, []);

	// Handle color change from picker modal
	const handleColorChange = useCallback((newColor) => {
		if (selectedColorType === 'global') {
			setGlobalColor(selectedColorIndex, newColor);
		} else if (selectedColorType === 'custom') {
			setCustomColor(selectedColorIndex, newColor);
		}
	}, [selectedColorIndex, selectedColorType, setGlobalColor, setCustomColor]);

	// Get current selected color
	const getCurrentColor = useCallback(() => {
		if (selectedColorType === 'global' && selectedColorIndex !== null) {
			return globalColors[selectedColorIndex]?.color || '#000000';
		} else if (selectedColorType === 'custom' && selectedColorIndex !== null) {
			return customColors[selectedColorIndex]?.color || '#000000';
		}
		return '#000000';
	}, [selectedColorIndex, selectedColorType, globalColors, customColors]);

	return (
		<>
			<div className="fb-panel-control">
				<div className="fb-color-options-vertical">
					{/* Solid Colors Section */}
					<div className="fb-color-section">
						<h2 className="fb-section-title">{__("Select Color", "frontis-blocks")}</h2>

						{/* Custom Color Display */}
						<div className="fb-color-grid" style={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: '12px',
							marginBottom: '24px',
							padding: '12px',
							border: '1px solid #E1E3E8',
							borderRadius: '4px'
						}}>
							{globalColors.map((colorObj, index) => (
								<div
									key={`global-${index}`}
									className="fb-color-item"
									style={{
										width: '32px',
										height: '32px',
										borderRadius: '50%',
										backgroundColor: colorObj.color,
										border: '1px solid #ddd',
										cursor: 'pointer',
									}}
									onClick={(e) => handleColorClick(index, 'global', e)}
									title={colorObj.name}
								/>
							))}
							{customColors.map((colorObj, index) => (
								<div
									key={`custom-${index}`}
									className="fb-color-item"
									style={{
										width: '32px',
										height: '32px',
										borderRadius: '50%',
										backgroundColor: colorObj.color,
										border: '1px solid #ddd',
										cursor: 'pointer',
										boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
									}}
									onClick={() => handleColorClick(index, 'custom')}
									title={colorObj.name}
								/>
							))}
						</div>
					</div>
				</div>
				<TypographySettings
					typography={typography}
					isAfterSave={isAfterSave}
				/>
			</div>

			{colorPickerModal && (
				<Popover
					className="fb-color-picker-modal"
					onRequestClose={() => setColorPickerModal(false)}
					placement="right-start"
					focusOnMount={false}
				>
					<div className="fb-setting-color-setting-icon-popup"
						style = {{
							width: '300px',
							padding: '12px'
						}}
					>
						<BaseControl
							label={
								selectedColorType === 'global'
									? globalColors[selectedColorIndex]?.name
									: customColors[selectedColorIndex]?.name
							}
						>
							<ColorPalette
								colors={selectedColorType === 'global' ? globalColors : customColors}
								value={getCurrentColor()}
								onChange={handleColorChange}
								disableCustomColors={false}
							/>
						</BaseControl>
						<div
							className="fb-modal-actions"
							style={{ marginTop: '20px', textAlign: 'right' }}
						>
							<Button variant="primary" onClick={() => setColorPickerModal(false)}>
								{__("Done", "frontis-blocks")}
							</Button>
						</div>
					</div>
				</Popover>
			)}

		</>
	);
}

export default FsiGbTypography;