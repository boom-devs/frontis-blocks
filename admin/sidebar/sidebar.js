import { __ } from "@wordpress/i18n";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/editor";
import { useDispatch, useSelect } from '@wordpress/data';

import {
	Button,
	PanelBody,
	TabPanel,
	__experimentalNavigatorProvider as NavigatorProvider,
	__experimentalNavigatorScreen as NavigatorScreen,
	__experimentalNavigatorButton as NavigatorButton,
	__experimentalNavigatorBackButton as NavigatorBackButton
} from "@wordpress/components";

import { PanelColorSettings, } from "@wordpress/block-editor";
import GradientColorPallet from './components/GradientColorPallet';
import ColorPalletWrapper from './components/ColorPalletWrapper';
import { useEffect, useState } from "@wordpress/element";
import {useDeviceType} from "@Config/displayType";
import CustomGradientColorPallet from "./components/CustomGradientPallet";
import { getFbLocalStorage, loadGoogleFont, useAfterSave } from "./helper";
import { getGlobalStyle, updateGlobalStyle } from "./fetch";
import TypographySettings from "./components/TypographySettings";
import {frontisExtractTypoValue, getFontFamily} from "./components/GetTypographyValue";
import generateCSSVariables from "./components/GenerateRootCss";
import "./sidebar.scss";

const defaultsColors = [
	{
		"name": __("Primary Color", "frontis-blocks"),
		"color": '#399CFF',
		"slug": 'primary-color',
	},
	{
		"name": __("Secondary Color", "frontis-blocks"),
		"color": '#f00000',
		"slug": 'secondary-color',
	},
	{
		"name": __("Tertiary Color", "frontis-blocks"),
		"color": '#F72585',
		"slug": 'tertiary-color',
	},
	{
		"name": __("Accent Color", "frontis-blocks"),
		"color": "#7209B7",
		"slug": 'accent-color',
	},
	{
		"name": __("Text Color", "frontis-blocks"),
		"color": '#3A0CA3',
		"slug": 'text-color',
	},
	{
		"name": __("Link Color", "frontis-blocks"),
		"color": '#4361EE',
		"slug": 'link-color',
	},
	{
		"name": __("Link Hover Color", "frontis-blocks"),
		"color": '#4CC9F0',
		"slug": 'link-hover-color',
	},
	{
		"name": __("White Color", "frontis-blocks"),
		"color": '#FFFFFF',
		"slug": 'white-color',
	},
	{
		"name": __("Black Color", "frontis-blocks"),
		"color": '#000000',
		"slug": 'black-color',
	},
	{
		"name": __("Gray Color", "frontis-blocks"),
		"color": '#808080',
		"slug": 'gray-color',
	}

];

const gradientDefaults = [
	{
		"color": "linear-gradient(135deg, rgba(33,150,243,1) 0%, rgba(156,39,176,1) 100%)",
		"name": "Primary Color",
		"slug": "gradientPrimary",
		"var": "--fb-gradient-primary-color"
	},
	{
		"color": "linear-gradient(135deg, rgba(0,200,83,1) 0%, rgba(255,193,7,1) 100%)",
		"name": "Secondary Color",
		"slug": "gradientSecondary",
		"var": "--fb-gradient-secondary-color"
	},
	{
		"color": "linear-gradient(135deg, rgba(244,67,54,1) 0%, rgba(233,30,99,1) 100%)",
		"name": "Tertiary Color",
		"slug": "gradientTertiary",
		"var": "--fb-gradient-tertiary-color"
	},
	{
		"color": "linear-gradient(135deg, rgba(3,169,244,1) 0%, rgba(0,150,136,1) 100%)",
		"name": "Accent Color",
		"slug": "gradientAccent",
		"var": "--fb-gradient-accent-color"
	},
	{
		"color": "linear-gradient(135deg, rgba(96,125,139,1) 0%, rgba(224,224,224,1) 100%)",
		"name": "Neutral Background",
		"slug": "gradientBackground",
		"var": "--fb-gradient-background-color"
	},
	{
		"color": "linear-gradient(135deg, rgba(255,87,34,1) 0%, rgba(255,235,59,1) 100%)",
		"name": "Vibrant Glow",
		"slug": "gradientGradient",
		"var": "--fb-gradient-gradient-color"
	},
	{
		"color": "linear-gradient(135deg, rgba(255,0,150,1) 0%, rgba(255,255,0,1) 100%)",
		"name": "Sunset Bliss",
		"slug": "gradientSunsetBliss",
		"var": "--fb-gradient-sunset-bliss"
	},
	{
		"color": "linear-gradient(135deg, rgba(0,255,222,1) 0%, rgba(0,102,255,1) 100%)",
		"name": "Ocean Breeze",
		"slug": "gradientOceanBreeze",
		"var": "--fb-gradient-ocean-breeze"
	},
	{
		"color": "linear-gradient(135deg, rgba(255,153,0,1) 0%, rgba(255,94,0,1) 100%)",
		"name": "Tangerine Dream",
		"slug": "gradientTangerineDream",
		"var": "--fb-gradient-tangerine-dream"
	},
	{
		"color": "linear-gradient(135deg, rgba(102,51,153,1) 0%, rgba(255,102,204,1) 100%)",
		"name": "Lavender Kiss",
		"slug": "gradientLavenderKiss",
		"var": "--fb-gradient-lavender-kiss"
	},
	{
		"color": "linear-gradient(220.55deg, #FFE70B 0%, #27B643 100%)",
		"name": "Minty Fresh",
		"slug": "gradientMintyFresh",
		"var": "--fb-gradient-minty-fresh"
	},
	{
		"color": "linear-gradient(180deg,#12C0DB, #EF04F6)",
		"name": "Halloween",
		"slug": "gradientHalloween",
		"var": "--fb-gradient-halloween"
	}


];

function FrontisBlocksSidebar(props) {

	let deviceType = useDeviceType();
	const [customColors, setCustomColors] = useState([]);
	const [activeTab, setActiveTab] = useState("solid");
	const [gradientColors, setGradientColors] = useState([]);
	const [customGradientColors, setCustomGradientColors] = useState([]);
	const [globalColors, setGlobalColors] = useState([]);
	const [customCSS, setCustomCSS] = useState('');
	const [fbGlobalSettingsLoading, setFbGlobalSettingsLoading] = useState(false);
	
	// const globalTypographyElements = frontisBlocksAdmin?.global_styles;
	// const globalTypography = globalTypographyElements?.elements;

	// console.log("globalTypography.heading")
	// console.log(frontisBlocksAdmin?.global_styles);

	// console.log("frontisExtractTypoValue(globalTypography?.h2?.typography?.fontSize)?.unit")
	// console.log(frontisExtractTypoValue(globalTypography?.h2?.typography?.fontSize)?.value)
	// console.log(getFontFamily(globalTypographyElements?.typography?.fontFamily));

	const [typography, setTypography] = useState({
		body: {
			fontFamily: 'Default',
			lineHeight: {
				Desktop: 'Default',
				Tablet: 'Default',
				Mobile: 'Default'
			},
			lineHeightUnits: {
				Desktop: 'px',
				Tablet: 'px',
				Mobile: 'px'
			},
			fontSize: {
				Desktop: '',
				Tablet: '',
				Mobile: ''
			},
			fontSizeUnit: {
				Desktop: 'px',
				Tablet: 'px',
				Mobile: 'px'
			},
			fontWeight: 'Default',
			fontStyle: 'Default',
			textTransform: 'Default',
			textDecoration: 'Default',
			letterSpacing: {
				Desktop: '',
				Tablet: '',
				Mobile: '',
			},
			letterSpacingUnit: {
				Desktop: 'px',
				Tablet: 'px',
				Mobile: 'px',
			}
		},
		link: {
			fontFamily: 'Default',
			lineHeight: {
				Desktop: 'Default',
				Tablet: 'Default',
				Mobile: 'Default'
			},
			lineHeightUnits: {
				Desktop: 'px',
				Tablet: 'px',
				Mobile: 'px'
			},
			fontSize: {
				Desktop: '',
				Tablet: '',
				Mobile: ''
			},
			fontSizeUnit: {
				Desktop: 'px',
				Tablet: 'px',
				Mobile: 'px'
			},
			fontWeight: 'Default',
			fontStyle: 'Default',
			textTransform: 'Default',
			textDecoration: 'Default',
			letterSpacing: {
				Desktop: '',
				Tablet: '',
				Mobile: '',
			},
			letterSpacingUnit: {
				Desktop: 'px',
				Tablet: 'px',
				Mobile: 'px',
			}
		},
		button: {
			fontFamily: 'Default',
			lineHeight: {
				Desktop: 'Default',
				Tablet: 'Default',
				Mobile: 'Default'
			},
			lineHeightUnits: {
				Desktop: 'px',
				Tablet: 'px',
				Mobile: 'px'
			},
			fontSize: {
				Desktop: '',
				Tablet: '',
				Mobile: ''
			},
			fontSizeUnit: {
				Desktop: 'px',
				Tablet: 'px',
				Mobile: 'px'
			},
			fontWeight: 'Default',
			fontStyle: 'Default',
			textTransform: 'Default',
			textDecoration: 'Default',
			letterSpacing: {
				Desktop: '',
				Tablet: '',
				Mobile: '',
			},
			letterSpacingUnit: {
				Desktop: 'px',
				Tablet: 'px',
				Mobile: 'px',
			}
		},
		captions: {
			fontFamily: 'Default',
			lineHeight: {
				Desktop: 'Default',
				Tablet: 'Default',
				Mobile: 'Default'
			},
			lineHeightUnits: {
				Desktop: 'px',
				Tablet: 'px',
				Mobile: 'px'
			},
			fontSize: {
				Desktop: '',
				Tablet: '',
				Mobile: ''
			},
			fontSizeUnit: {
				Desktop: 'px',
				Tablet: 'px',
				Mobile: 'px'
			},
			fontWeight: 'Default',
			fontStyle: 'Default',
			textTransform: 'Default',
			textDecoration: 'Default',
			letterSpacing: {
				Desktop: '',
				Tablet: '',
				Mobile: '',
			},
			letterSpacingUnit: {
				Desktop: 'px',
				Tablet: 'px',
				Mobile: 'px',
			}
		},
		heading: {
			all: {
				fontFamily: 'Default',
				lineHeight: {
					Desktop: 'Default',
					Tablet: 'Default',
					Mobile: 'Default'
				},
				lineHeightUnits: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
				},
				fontSize: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
				},
				fontSizeUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
				},
				fontWeight: 'Default',
				fontStyle: 'Default',
				textTransform: 'Default',
				textDecoration: 'Default',
				letterSpacing: {
					Desktop: '',
					Tablet: '',
					Mobile: '',
				},
				letterSpacingUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px',
				}
			},
			h1: {
				fontFamily: 'Default',
				lineHeight: {
					Desktop: 'Default',
					Tablet: 'Default',
					Mobile: 'Default'
				},
				lineHeightUnits: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
				},
				fontSize: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
				},
				fontSizeUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
				},
				fontWeight: 'Default',
				fontStyle: 'Default',
				textTransform: 'Default',
				textDecoration: 'Default',
				letterSpacing: {
					Desktop: '',
					Tablet: '',
					Mobile: '',
				},
				letterSpacingUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px',
				}
			},
			h2: {
				fontFamily: 'Default',
				lineHeight: {
					Desktop: 'Default',
					Tablet: 'Default',
					Mobile: 'Default'
				},
				lineHeightUnits: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
				},
				fontSize: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
				},
				fontSizeUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
				},
				fontWeight: 'Default',
				fontStyle: 'Default',
				textTransform: 'Default',
				textDecoration: 'Default',
				letterSpacing: {
					Desktop: '',
					Tablet: '',
					Mobile: '',
				},
				letterSpacingUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px',
				}
			},
			h3: {
				fontFamily: 'Default',
				lineHeight: {
					Desktop: 'Default',
					Tablet: 'Default',
					Mobile: 'Default'
				},
				lineHeightUnits: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
				},
				fontSize: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
				},
				fontSizeUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
				},
				fontWeight: 'Default',
				fontStyle: 'Default',
				textTransform: 'Default',
				textDecoration: 'Default',
				letterSpacing: {
					Desktop: '',
					Tablet: '',
					Mobile: '',
				},
				letterSpacingUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px',
				}
			},
			h4: {
				fontFamily: 'Default',
				lineHeight: {
					Desktop: 'Default',
					Tablet: 'Default',
					Mobile: 'Default'
				},
				lineHeightUnits: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
				},
				fontSize: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
				},
				fontSizeUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
				},
				fontWeight: 'Default',
				fontStyle: 'Default',
				textTransform: 'Default',
				textDecoration: 'Default',
				letterSpacing: {
					Desktop: '',
					Tablet: '',
					Mobile: '',
				},
				letterSpacingUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px',
				}
			},
			h5: {
				fontFamily: 'Default',
				lineHeight: {
					Desktop: 'Default',
					Tablet: 'Default',
					Mobile: 'Default'
				},
				lineHeightUnits: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
				},
				fontSize: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
				},
				fontSizeUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
				},
				fontWeight: 'Default',
				fontStyle: 'Default',
				textTransform: 'Default',
				textDecoration: 'Default',
				letterSpacing: {
					Desktop: '',
					Tablet: '',
					Mobile: '',
				},
				letterSpacingUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px',
				}
			},
			h6: {
				fontFamily: 'Default',
				lineHeight: {
					Desktop: 'Default',
					Tablet: 'Default',
					Mobile: 'Default'
				},
				lineHeightUnits: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
				},
				fontSize: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
				},
				fontSizeUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
				},
				fontWeight: 'Default',
				fontStyle: 'Default',
				textTransform: 'Default',
				textDecoration: 'Default',
				letterSpacing: {
					Desktop: '',
					Tablet: '',
					Mobile: '',
				},
				letterSpacingUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px',
				}
			}
		}
	});
	const [customTypography, setCustomTypography] = useState({});
	const [fontfamilies, setFontfamilies] = useState({});

	// Extract all font families into a single string
	const getAllFontFamilies = (fontsObject) => {
		const fontFamilies = [];

		const extractFonts = (obj) => {
			Object.values(obj).forEach((value) => {
				if (typeof value === "string") {
					fontFamilies.push(value);
				} else if (typeof value === "object") {
					extractFonts(value); // Recursively extract nested objects
				}
			});
		};

		extractFonts(fontsObject);
		const regenerateFonts = fontFamilies.join(",");
		loadGoogleFont(regenerateFonts);
	};

	useEffect(() => {
		const localStorageKeys = [
			'fb_global_colors',
			'fb_custom_colors',
			'fb_gradient_colors',
			'fb_custom_gradient_colors',
			'fb_typography',
			'fb_custom_typography',
			'fb_fontfamilies',
			'fb_globaltypo'
		];

		const handleUpdateState = async () => {
			try {
				for (const key of localStorageKeys) {
					const localStorageData = getFbLocalStorage(key);

					if (key === 'fb_global_colors') {
						if (localStorageData.length < 1) {
							const res = await getGlobalStyle('fb_get_global_colors');
							if (!res.success) {
								setGlobalColors(defaultsColors);
								localStorage.setItem('fb_global_colors', JSON.stringify(defaultsColors));
							} else {
								setGlobalColors(res.data);
								localStorage.setItem('fb_global_colors', JSON.stringify(res.data));
							}
						} else {
							setGlobalColors(localStorageData);
						}
					}

					// Custom colors
					if (key === 'fb_custom_colors') {
						if (localStorageData.length < 1) {
							const res = await getGlobalStyle('fb_get_custom_colors');
							if (!res.success) {
								setCustomColors([]);
							} else {
								setCustomColors(res.data);
								localStorage.setItem('fb_custom_colors', JSON.stringify(res.data));
							}
						} else {
							setCustomColors(localStorageData);
						}
					}

					// Gradient colors
					if (key === 'fb_gradient_colors') {
						if (localStorageData.length < 1) {
							const res = await getGlobalStyle('fb_get_gradient_colors');
							if (!res.success) {
								setGradientColors(gradientDefaults);
								localStorage.setItem('fb_gradient_colors', JSON.stringify(gradientDefaults));
							} else {
								setGradientColors(res.data);
								localStorage.setItem('fb_gradient_colors', JSON.stringify(res.data));
							}
						} else {
							setGradientColors(localStorageData);
						}
					}

					// Custom Gradient colors
					if (key === 'fb_custom_gradient_colors') {
						if (localStorageData.length < 1) {
							const res = await getGlobalStyle('fb_get_custom_gradient_colors');
							if (!res.success) {
								setCustomGradientColors([]);
							} else {
								setCustomGradientColors(res.data);
								localStorage.setItem('fb_custom_gradient_colors', JSON.stringify(res.data));
							}
						} else {
							setCustomGradientColors(localStorageData);
						}
					}

					// Get global typography
					if (key === 'fb_typography') {
						if (localStorageData.length < 1) {
							const res = await getGlobalStyle('fb_get_typography');
							if (!res.success) {
								localStorage.setItem('fb_typography', JSON.stringify(typography));
							} else {
								setTypography(res.data);
								localStorage.setItem('fb_typography', JSON.stringify(res.data));
							}
						} else {
							setTypography(localStorageData);
						}
					}

					// Custom typography
					if (key === 'fb_custom_typography') {
						if (localStorageData.length < 1) {
							const res = await getGlobalStyle('fb_get_custom_typography');
							if (!res.success) {
								setCustomTypography([]);
							} else {
								setCustomTypography(res.data);
								localStorage.setItem('fb_custom_typography', JSON.stringify(res.data));
							}
						} else {
							setCustomTypography(localStorageData);
						}
					}

					// Add fontfamilies
					if (key === 'fb_fontfamilies') {
						if (localStorageData.length < 1) {
							const res = await getGlobalStyle('fb_get_fontfamilies');
							if (!res.success) {
								setFontfamilies([]);
							} else {
								setFontfamilies(res.data);
								getAllFontFamilies(res.data)
								localStorage.setItem('fb_fontFamilies', JSON.stringify(res.data));
							}
						} else {
							getAllFontFamilies(localStorageData)
							setFontfamilies(localStorageData);
						}
					}

					// Add globaltypo
					if (key === 'fb_globaltypo') {
						if (localStorageData.length < 1) {
							const res = await getGlobalStyle('fb_get_globaltypo');

							if(!res.success) {
								generateCSSVariables(res.data, deviceType);
								localStorage.setItem('fb_globaltypo', JSON.stringify(res.data));
							}
						} else {
							generateCSSVariables(localStorageData, deviceType);
						}
					}
				}
			} catch (error) {
				console.error("Error fetching global colors:", error);
			}
		}

		handleUpdateState();

	}, []);

	const colorPanelArray = (colors, setColor, defaults = []) => {
		if (typeof colors !== "object") {
			return [];
		}

		const colorArr = [];
		colors.map((colorObj, index) =>
			colorArr.push({
				label: colorObj.name || "Color",
				value: colorObj.color,
				onChange: (newColor) => {
					setColor(index, newColor || defaults[index]?.color || "#000");
				},
			}),
		);
		return colorArr;
	};

	//Update Global Colors
	const setGlobalColor = (index, color) => {
		const colors = [...globalColors];
		colors[index].color = color;
		setGlobalColors([...colors]);
		setFbGlobalSettingsLoading(true);


		// // Select the Save button and update its aria-disabled attribute
		// const saveButton = document.querySelector(
		// 	'button.components-button.editor-post-publish-button.editor-post-publish-button__button.is-primary.is-compact'
		// );

		// if (saveButton) {
		// 	// Set aria-disabled to false when color is updated
		// 	saveButton.setAttribute('aria-disabled', 'false');

		// 	// Add a click event listener to set aria-disabled back to true
		// 	saveButton.addEventListener('click', () => {
		// 		saveButton.setAttribute('aria-disabled', 'true');
		// 	});
		// }

	};

	//Update Gradient Colors
	const setGradientColor = (index, color) => {
		const colors = [...gradientColors];
		colors[index].color = color;
		setGradientColors([...colors]);
		setFbGlobalSettingsLoading(true);
	};

	//Update Gradient Colors
	const setCustomGradientColor = (index, color) => {
		const colors = [...customGradientColors];
		colors[index].color = color;
		setCustomGradientColors([...colors]);
		setFbGlobalSettingsLoading(true);
	};

	const setCustomColor = (index, color) => {
		const colors = [...customColors];
		colors[index].color = color;
		setCustomColors([...colors]);
		setFbGlobalSettingsLoading(true);
	};

	// New custom color function
	const setNewCustomColorFn = () => {
		setCustomColors(() => {
			// Determine a unique index
			let index = customColors.length + 1;

			// Add the new color
			return [
				...customColors,
				{
					color: '#000000',
					name: `Custom Color ${index}`,
					slug: `custom-color-${index}`,
					var: `--fb-custom-color-${index}`
				}
			];
		});

		setFbGlobalSettingsLoading(true);
	}

	// Delete custom gradient color
	const deleteCustomGradientColor = (index, color) => {
		const colors = [...customGradientColors];
		colors.splice(index, 1);
		setCustomGradientColors([...colors]);
		setFbGlobalSettingsLoading(true);
	}

	// Save colors after post save
	const isAfterSave = useAfterSave();

	useEffect(() => {
		const handleUpdateSettings = async () => {
			if (isAfterSave && fbGlobalSettingsLoading) {
				try {
					const settingsState = [
						'fb_update_global_colors',
						'fb_update_custom_colors',
						'fb_update_gradient_colors',
						'fb_update_custom_gradient_colors'
					];

					for (const key of settingsState) {
						if (key === 'fb_update_global_colors') {
							const response = await updateGlobalStyle(globalColors, key);
							if (response.success) {
								setGlobalColors(response.data.data);
								localStorage.setItem('fb_global_colors', JSON.stringify(response.data.data));
							}
						}

						if (key === 'fb_update_custom_colors') {
							const response = await updateGlobalStyle(customColors, key);
							if (response.success) {
								setCustomColors(response.data.data);
								localStorage.setItem('fb_custom_colors', JSON.stringify(response.data.data));
							}
						}

						if (key === 'fb_update_gradient_colors') {
							const response = await updateGlobalStyle(gradientColors, key);
							if (response.success) {
								setGradientColors(response.data.data);
								localStorage.setItem('fb_gradient_colors', JSON.stringify(response.data.data));
							}
						}

						if (key === 'fb_update_custom_gradient_colors') {
							const response = await updateGlobalStyle(customGradientColors, key);
							if (response.success) {
								setCustomGradientColors(response.data.data);
								localStorage.setItem('fb_custom_gradient_colors', JSON.stringify(response.data.data));
							}
						}
					}
				} catch (error) {
					console.error('Error updating settings:', error);
				}
			}
		};

		handleUpdateSettings();
	}, [isAfterSave]);

	const [activeStep, setActiveStep] = useState("solid");

	return (
		<>
			<PluginSidebarMoreMenuItem target="fb_plugin_sidebar">
				{__("FB Global Settings", "frontis-blocks")}
			</PluginSidebarMoreMenuItem>
			<div className={'fb_plugin_sidebar'}>
				<PluginSidebar
					name="frontis-blocks-sidebar"
					title={__("FB Global Settings", "frontis-blocks")}
					className="fb-global-controls"
				>
					<div className="fb-panel-control">
						{/*
						<PanelBody title={__("Colors", "frontis-blocks")} initialOpen={ false }>
							<TabPanel
								className="fb-blocks-color-tabs"
								activeClass="active-tab"
								onSelect={(tabName) => setActiveTab(tabName)}
								tabs={[
									{name: "solid", title: "Solid"},
									{name: "gradient", title: "Gradient"},
								]}
							>
								{(tab) => (
									<div>
										{tab.name === "solid" && (
											<>
												<PanelColorSettings
													title={__("Global Colors", "frontis-blocks")}
													className={"fb-color-panel fb-global-color-panel"}
													initialOpen={true}
													disableAlpha={true}
													disableCustomGradients={false}
													colorSettings={colorPanelArray(globalColors, setGlobalColor, defaultsColors)}
												/>
												{customColors && customColors.length > 0 && (
													<ColorPalletWrapper
														colorPanelArray={colorPanelArray}
														customColors={customColors}
														setCustomColor={setCustomColor}
														setCustomColors={setCustomColors}
													/>
												)}
												<div className="add-custom-color">
													<Button
														className="add-custom-color-btn"
														onClick={() => setNewCustomColorFn()}
													>Add Custom Color <span>
														<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M7.5 0.75V13.25M13.75 7L1.25 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
														</svg>
													</span>
													</Button>
												</div>
											</>
										)}
										{tab.name === "gradient" && (
											<>
												{/* Gradient Color Pallet */}
						{/* <GradientColorPallet
													title={"Gradient Colors"}
													colors={gradientColors}
													setColor={setGradientColor}
													setColors={setGradientColors}
													wrapperClass={"fb-gradient-color-panel"}
													resetAction={true}
												/> */}

						{/* {customGradientColors.length > 0 &&
													<CustomGradientColorPallet
														title={"Custom Gradient Colors"}
														colors={customGradientColors}
														setColor={setCustomGradientColor}
														setColors={setCustomGradientColors}
														wrapperClass={"fb-gradient-color-panel"}
														resetAction={false}
														deleteAction={true}
														onDelete={deleteCustomGradientColor}
													/>

												} */}

						{/* <div className="add-custom-color">
													<Button
														className="add-custom-color-btn"
														onClick={() => setCustomGradientColors([
															...customGradientColors,
															{
																color: '#000000',
																name: `Gradient Color ${customGradientColors.length + 1}`,
																slug: `custom-gradient-color-${customGradientColors.length + 1}`,
																var: `--fb-custom-gradient-color-${customGradientColors.length + 1}`
															}
														])}
													>Add Custom Color <span>
														<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M7.5 0.75V13.25M13.75 7L1.25 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
														</svg>
													</span>
													</Button>
												</div> */}
						{/* </>
										)}
									</div>
								)}
							</TabPanel>
						</PanelBody> */}

						{/* <PanelBody title={__("Global Typography", "frontis-blocks")} initialOpen={ false }>
							{/* Global Typography settings */}
						{/* <TypographySettings typography={typography} customTypography={customTypography}/>
						</PanelBody> */}

						{/*<PanelBody title={__("Custom CSS", "frontis-blocks")} initialOpen={ false }>*/}
						{/*	<TextareaControl*/}
						{/*		value={customCSS}*/}
						{/*		onChange={(value) => setCustomCSS(value)}*/}
						{/*	/>*/}
						{/*</PanelBody>*/}

						<NavigatorProvider initialPath="/">

							{/* Main Screen */}
							<NavigatorScreen path="/">
								<div className="fb-blocks-tabs">
									<div className="fb-tab-element">
										<NavigatorButton path="/typography">
											<div className="fb-tab-wrapper">
												<span className="fb-tab-icon">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="edit-site-global-styles-icon-with-current-color" aria-hidden="true" focusable="false"><path fill="currentcolor" d="M6.9 7L3 17.8h1.7l1-2.8h4.1l1 2.8h1.7L8.6 7H6.9zm-.7 6.6l1.5-4.3 1.5 4.3h-3zM21.6 17c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1s-.3-.1-.4-.2c-.1-.1-.1-.3-.1-.6V12c0-.5 0-1-.1-1.4-.1-.4-.3-.7-.5-1-.2-.2-.5-.4-.9-.5-.4 0-.8-.1-1.3-.1s-1 .1-1.4.2c-.4.1-.7.3-1 .4-.2.2-.4.3-.6.5-.1.2-.2.4-.2.7 0 .3.1.5.2.8.2.2.4.3.8.3.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.6-.4.2-.2.4-.3.7-.4.3-.1.6-.1.8-.1.3 0 .6 0 .8.1.2.1.4.3.5.5.1.2.2.5.2.9v1.1c0 .3-.1.5-.3.6-.2.2-.5.3-.9.4-.3.1-.7.3-1.1.4-.4.1-.8.3-1.1.5-.3.2-.6.4-.8.7-.2.3-.3.7-.3 1.2 0 .6.2 1.1.5 1.4.3.4.9.5 1.6.5.5 0 1-.1 1.4-.3.4-.2.8-.6 1.1-1.1 0 .4.1.7.3 1 .2.3.6.4 1.2.4.4 0 .7-.1.9-.2.2-.1.5-.3.7-.4h-.3zm-3-.9c-.2.4-.5.7-.8.8-.3.2-.6.2-.8.2-.4 0-.6-.1-.9-.3-.2-.2-.3-.6-.3-1.1 0-.5.1-.9.3-1.2s.5-.5.8-.7c.3-.2.7-.3 1-.5.3-.1.6-.3.7-.6v3.4z"></path></svg>
												</span>
												<span className="fb-tab-title">{__("Typography","frontis-blocks")}</span>
											</div>
										</NavigatorButton>
									</div>
									<div className="fb-tab-element">
										<NavigatorButton path="/colors">
											<div className="fb-tab-wrapper">
												<span className="fb-tab-icon">
													<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="edit-site-global-styles-icon-with-current-color" aria-hidden="true" focusable="false"><path fill="currentcolor" d="M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"></path></svg>
												</span>
												<span className="fb-tab-title">{__("Colors","frontis-blocks")}</span>
											</div>
										</NavigatorButton>
									</div>
									{/* <hr/>
									<div className="fb-tab-element">
										<p>{__("Customize the appearance of specific blocks for the whole site.", "frontis-blocks")}</p>
										<NavigatorButton path="/blocks">
											<div className="fb-tab-wrapper">
												<span className="fb-tab-icon">
													<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"> <path  d="M2.08301 5.41732C2.08301 3.84597 2.08301 3.0603 2.57116 2.57214C3.05932 2.08398 3.84499 2.08398 5.41634 2.08398C6.98769 2.08398 7.77336 2.08398 8.26152 2.57214C8.74967 3.0603 8.74967 3.84597 8.74967 5.41732C8.74967 6.98867 8.74967 7.77434 8.26152 8.2625C7.77336 8.75065 6.98769 8.75065 5.41634 8.75065C3.84499 8.75065 3.05932 8.75065 2.57116 8.2625C2.08301 7.77434 2.08301 6.98867 2.08301 5.41732Z" stroke="currentcolor" stroke-width="1.2" /> <path  d="M11.25 14.5833C11.25 13.012 11.25 12.2263 11.7382 11.7382C12.2263 11.25 13.012 11.25 14.5833 11.25C16.1547 11.25 16.9404 11.25 17.4285 11.7382C17.9167 12.2263 17.9167 13.012 17.9167 14.5833C17.9167 16.1547 17.9167 16.9404 17.4285 17.4285C16.9404 17.9167 16.1547 17.9167 14.5833 17.9167C13.012 17.9167 12.2263 17.9167 11.7382 17.4285C11.25 16.9404 11.25 16.1547 11.25 14.5833Z" stroke="currentcolor" stroke-width="1.2" /> <path  d="M2.08301 14.5833C2.08301 13.012 2.08301 12.2263 2.57116 11.7382C3.05932 11.25 3.84499 11.25 5.41634 11.25C6.98769 11.25 7.77336 11.25 8.26152 11.7382C8.74967 12.2263 8.74967 13.012 8.74967 14.5833C8.74967 16.1547 8.74967 16.9404 8.26152 17.4285C7.77336 17.9167 6.98769 17.9167 5.41634 17.9167C3.84499 17.9167 3.05932 17.9167 2.57116 17.4285C2.08301 16.9404 2.08301 16.1547 2.08301 14.5833Z" stroke="currentcolor" stroke-width="1.2" /> <path  d="M11.25 5.41732C11.25 3.84597 11.25 3.0603 11.7382 2.57214C12.2263 2.08398 13.012 2.08398 14.5833 2.08398C16.1547 2.08398 16.9404 2.08398 17.4285 2.57214C17.9167 3.0603 17.9167 3.84597 17.9167 5.41732C17.9167 6.98867 17.9167 7.77434 17.4285 8.2625C16.9404 8.75065 16.1547 8.75065 14.5833 8.75065C13.012 8.75065 12.2263 8.75065 11.7382 8.2625C11.25 7.77434 11.25 6.98867 11.25 5.41732Z" stroke="currentcolor" stroke-width="1.2" /> </svg>
												</span>
												<span className="fb-tab-title">{__("Blocks","frontis-blocks")}</span>
											</div>
										</NavigatorButton>
									</div>
									<hr/> */}
								</div>
							</NavigatorScreen>

							{/* Typography Screen */}
							<NavigatorScreen path="/typography">
								<>
									{/* Title and Description */}
									<div className="fb-global-header-inner-wrapper">
										<NavigatorButton path="/" className="back-button">
											<span>
												<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M10.5 13.5L5.5 8.5L10.5 3.5" stroke="#404655" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
												</svg>
											</span>
										</NavigatorButton>
										<div className="fb-global-header-inner">
											<h3>Typography</h3>
											<p>Available fonts, typographic styles, application of those styles.</p>
										</div>
									</div>
									<TypographySettings typography={typography} customTypography={customTypography} />

								</>
							</NavigatorScreen>

							{/* Colors Screen */}
							<NavigatorScreen path="/colors">
								<>
									<div className="fb-global-header-inner-wrapper">
										<NavigatorButton path="/" className="back-button">
											<span>
												<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M10.5 13.5L5.5 8.5L10.5 3.5" stroke="#404655" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
												</svg>
											</span>
										</NavigatorButton>
										<div className="fb-global-header-inner">
											<h3>Color</h3>
											<p>Available texts, links, Button, Headings global colors</p>
										</div>
									</div>
									<PanelColorSettings
										title={__("Colors", "frontis-blocks")}
										className={"fb-color-panel fb-global-color-panel"}
										initialOpen={true}
										disableAlpha={true}
										disableCustomGradients={false}
										colorSettings={colorPanelArray(globalColors, setGlobalColor, defaultsColors)}
									/>

								</>
							</NavigatorScreen>
							{/* Blocks Screen */}
							{/* <NavigatorScreen path="/blocks">
								<>
									<div className="fb-global-header-inner-wrapper">
										<NavigatorButton path="/" className="back-button">
											<span>
												<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M10.5 13.5L5.5 8.5L10.5 3.5" stroke="#404655" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
												</svg>
											</span>
										</NavigatorButton>
										<div className="fb-global-header-inner">
											<h3>Blocks</h3>
											<p>{__("Customize the appearance of specific blocks and for the whole site.", "")}</p>
										</div>
									</div>
								</>
							</NavigatorScreen> */}

						</NavigatorProvider>


					</div>
				</PluginSidebar>
			</div>
		</>
	);
};

export default FrontisBlocksSidebar;
