import {__} from "@wordpress/i18n";
import {PluginSidebar, PluginSidebarMoreMenuItem} from "@wordpress/editor";
import {useDispatch, useSelect} from '@wordpress/data';

import {Button, PanelBody, TabPanel} from "@wordpress/components";
import {PanelColorSettings,} from "@wordpress/block-editor";
import GradientColorPallet from './components/GradientColorPallet';
import ColorPalletWrapper from './components/ColorPalletWrapper';
import {useEffect, useState} from "@wordpress/element";
import "./sidebar.scss";
import CustomGradientColorPallet from "./components/CustomGradientPallet";
import {getFbLocalStorage, loadGoogleFont, useAfterSave} from "./helper";
import {getGlobalStyle, updateGlobalStyle} from "./fetch";
import TypographySettings from "./components/TypographySettings";

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

	// Set state
	const [customColors, setCustomColors] = useState([]);
	const [activeTab, setActiveTab] = useState("solid");
	const [gradientColors, setGradientColors] = useState([]);
	const [customGradientColors, setCustomGradientColors] = useState([]);
	const [globalColors, setGlobalColors] = useState([]);
	const [customCSS, setCustomCSS] = useState('');
	const [fbGlobalSettingsLoading, setFbGlobalSettingsLoading] = useState(false);
	const [typography, setTypography] = useState({
		body: {
			fontFamily: 'Default',
			lineHeight: {
				Desktop: '',
				Tablet: '',
				Mobile: ''
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
			fontWeight: '',
			fontStyle: '',
			textTransform: '',
			textDecoration: '',
			letterSpacing: {
				Desktop: '',
				Tablet: '',
				Mobile: ''
			},
			letterSpacingUnit: {
				Desktop: 'px',
				Tablet: 'px',
				Mobile: 'px'
			}
		},
		link: {
			fontFamily: 'Default',
			lineHeight: {
				Desktop: '',
				Tablet: '',
				Mobile: ''
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
			fontWeight: '',
			fontStyle: '',
			textTransform: '',
			textDecoration: '',
			letterSpacing: {
				Desktop: '',
				Tablet: '',
				Mobile: ''
			},
			letterSpacingUnit: {
				Desktop: 'px',
				Tablet: 'px',
				Mobile: 'px'
			}
		},
		button: {
			fontFamily: 'inherit',
			lineHeight: {
				Desktop: '',
				Tablet: '',
				Mobile: ''
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
			fontWeight: '',
			fontStyle: '',
			textTransform: '',
			textDecoration: '',
			letterSpacing: {
				Desktop: '',
				Tablet: '',
				Mobile: ''
			},
			letterSpacingUnit: {
				Desktop: 'px',
				Tablet: 'px',
				Mobile: 'px'
			}
		},
		heading: {
			h1: {
				fontFamily: "Default",
				lineHeight: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
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
				fontWeight: '',
				fontStyle: '',
				textTransform: '',
				textDecoration: '',
				letterSpacing: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
				},
				letterSpacingUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
				}
			},
			h2: {
				fontFamily: "Default",
				lineHeight: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
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
				fontWeight: '',
				fontStyle: '',
				textTransform: '',
				textDecoration: '',
				letterSpacing: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
				},
				letterSpacingUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
				}
			},
			h3: {
				fontFamily: "Default",
				lineHeight: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
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
				fontWeight: '',
				fontStyle: '',
				textTransform: '',
				textDecoration: '',
				letterSpacing: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
				},
				letterSpacingUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
				}
			},
			h4: {
				fontFamily: "Default",
				lineHeight: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
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
				fontWeight: '',
				fontStyle: '',
				textTransform: '',
				textDecoration: '',
				letterSpacing: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
				},
				letterSpacingUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
				}
			},
			h5: {
				fontFamily: "Default",
				lineHeight: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
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
				fontWeight: '',
				fontStyle: '',
				textTransform: '',
				textDecoration: '',
				letterSpacing: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
				},
				letterSpacingUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
				}
			},
			h6: {
				fontFamily: "Default",
				lineHeight: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
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
				fontWeight: '',
				fontStyle: '',
				textTransform: '',
				textDecoration: '',
				letterSpacing: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
				},
				letterSpacingUnit: {
					Desktop: 'px',
					Tablet: 'px',
					Mobile: 'px'
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
			'fb_fontfamilies'
		];

		const handleUpdateState = async () => {
			try {
				for (const key of localStorageKeys) {
					const localStorageData = getFbLocalStorage(key);

					if(key === 'fb_global_colors') {
						if(localStorageData.length < 1) {
							const res = await getGlobalStyle('fb_get_global_colors');
							console.log("before console log")
							console.log(res)
							console.log("after console log")
							if(!res.success) {
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
					if(key === 'fb_custom_colors') {
						if(localStorageData.length < 1) {
							const res = await getGlobalStyle('fb_get_custom_colors');
							if(!res.success) {
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
					if(key === 'fb_gradient_colors') {
						if(localStorageData.length < 1) {
							const res = await getGlobalStyle('fb_get_gradient_colors');
							if(!res.success) {
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
					if(key === 'fb_custom_gradient_colors') {
						if(localStorageData.length < 1) {
							const res = await getGlobalStyle('fb_get_custom_gradient_colors');
							if(!res.success) {
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
					if(key === 'fb_typography') {
						if(localStorageData.length < 1) {
							const res = await getGlobalStyle('fb_get_typography');
							if(!res.success) {
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
					if(key === 'fb_custom_typography') {
						if(localStorageData.length < 1) {
							const res = await getGlobalStyle('fb_get_custom_typography');
							if(!res.success) {
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
					if(key === 'fb_fontfamilies') {
						if(localStorageData.length < 1) {
							const res = await getGlobalStyle('fb_get_fontfamilies');
							if(!res.success) {
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
						if(key === 'fb_update_global_colors') {
							const response = await updateGlobalStyle(globalColors, key);
							if(response.success) {
								setGlobalColors(response.data.data);
								localStorage.setItem('fb_global_colors', JSON.stringify(response.data.data));
							}
						}

						if(key === 'fb_update_custom_colors') {
							const response = await updateGlobalStyle(customColors, key);
							if(response.success) {
								setCustomColors(response.data.data);
								localStorage.setItem('fb_custom_colors', JSON.stringify(response.data.data));
							}
						}

						if(key === 'fb_update_gradient_colors') {
							const response = await updateGlobalStyle(gradientColors, key);
							if(response.success) {
								setGradientColors(response.data.data);
								localStorage.setItem('fb_gradient_colors', JSON.stringify(response.data.data));
							}
						}

						if(key === 'fb_update_custom_gradient_colors') {
							const response = await updateGlobalStyle(customGradientColors, key);
							if(response.success) {
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
						<PanelBody title={__("Global Color", "frontis-blocks")} initialOpen={ false }>
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
												<GradientColorPallet
													title={"Gradient Colors"}
													colors={gradientColors}
													setColor={setGradientColor}
													setColors={setGradientColors}
													wrapperClass={"fb-gradient-color-panel"}
													resetAction={true}
												/>

												{customGradientColors.length > 0 &&
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

												}

												<div className="add-custom-color">
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
												</div>
											</>
										)}
									</div>
								)}
							</TabPanel>
						</PanelBody>
						<PanelBody title={__("Global Typography", "frontis-blocks")} initialOpen={ false }>
							{/* Global Typography settings */}
							<TypographySettings typography={typography} customTypography={customTypography}/>
						</PanelBody>
						{/*<PanelBody title={__("Custom CSS", "frontis-blocks")} initialOpen={ false }>*/}
						{/*	<TextareaControl*/}
						{/*		value={customCSS}*/}
						{/*		onChange={(value) => setCustomCSS(value)}*/}
						{/*	/>*/}
						{/*</PanelBody>*/}
					</div>
				</PluginSidebar>
			</div>
		</>
	);
};

export default FrontisBlocksSidebar;
