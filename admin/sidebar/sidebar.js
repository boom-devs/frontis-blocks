import {__} from "@wordpress/i18n";
import {PluginSidebar, PluginSidebarMoreMenuItem} from "@wordpress/editor";
import {
	PanelBody,
	PanelRow,
	Button,
	TabPanel,
	Dashicon,
	TextareaControl
} from "@wordpress/components";
import {
	PanelColorSettings,
} from "@wordpress/block-editor";
import FB_TypographyControl from '@Components/typography-control';
import GradientColorPallet from './components/GradientColorPallet';
import ColorPalletWrapper from './components/ColorPalletWrapper';
import {useState, useEffect} from "@wordpress/element";
// import {useSelect, useDispatch, withSelect, dispatch, select} from "@wordpress/data";
import "./sidebar.scss";
import CustomGradientColorPallet from "./components/CustomGradientPallet";
import {getFbLocalStorage, setFbLocalStorage, useAfterSave} from "./helper";
import {updateSettings} from "./api";
import {updateGlobalStyle} from "./fetch";
import TypographySettings from "./components/TypographySettings";

const defaultsColors = [
	{
		"name": __("Primary Color", "frontis-blocks"),
		"color": '#f00000',
		"slug": 'primary-color',
	},
	{
		"name": __("Secondary Color", "frontis-blocks"),
		"color": '#0f0',
		"slug": 'secondary-color',
	},
	{
		"name": __("Tertiary Color", "frontis-blocks"),
		"color": '#00f',
		"slug": 'tertiary-color',
	},
	{
		"name": __("Accent Color", "frontis-blocks"),
		"color": "#00f",
		"slug": 'accent-color',
	},
	{
		"name": __("Text Color", "frontis-blocks"),
		"color": '#000',
		"slug": 'text-color',
	},
	{
		"name": __("Link Color", "frontis-blocks"),
		"color": '#00f',
		"slug": 'link-color',
	},
	{
		"name": __("Link Hover Color", "frontis-blocks"),
		"color": '#00f',
		"slug": 'link-hover-color',
	},
	{
		"name": __("Background Color", "frontis-blocks"),
		"color": '#000',
		"slug": 'background-color',
	},
	{
		"name": __("Button Color", "frontis-blocks"),
		"color": '#FFFFFF',
		"slug": 'button-color',
	},
	{
		"name": __("Button Background Color", "frontis-blocks"),
		"color": '#000',
		"slug": 'button-background-color',
	}

];

const gradientDefaults = [
	{
		"color": "linear-gradient(90deg, hsla(259, 84%, 78%, 1) 0%, hsla(206, 67%, 75%, 1) 100%)",
		"name": "Primary Color",
		"slug": "gradientPrimary",
		"var": "--fb-gradient-primary-color"
	},
	{
		"color": "linear-gradient(90deg, hsla(18, 76%, 85%, 1) 0%, hsla(203, 69%, 84%, 1) 100%)",
		"name": "Secondary Color",
		"slug": "gradientSecondary",
		"var": "--fb-gradient-secondary-color"
	},
	{
		"color": "linear-gradient(90deg, hsla(248, 21%, 15%, 1) 0%, hsla(250, 14%, 61%, 1) 100%)",
		"name": "Tertiary Color",
		"slug": "gradientTertiary",
		"var": "--fb-gradient-tertiary-color"
	},
	{
		"color": "linear-gradient(90deg, rgb(250, 250, 250) 0%, rgb(233, 233, 233) 49%, rgb(244, 243, 243) 100%)",
		"name": "Background Color",
		"slug": "gradientBackground",
		"var": "--fb-gradient-background-color"
	}
];

function FrontisBlocksSidebar(props) {
	const [customColors, setCustomColors] = useState([]);
	const [activeTab, setActiveTab] = useState("solid");
	const [activeTabTypo, setActiveTabTypo] = useState("");
	const [gradientColors, setGradientColors] = useState([]);
	const [customGradientColors, setCustomGradientColors] = useState([]);
	const [globalColors, setGlobalColors] = useState([]);
	const [customCSS, setCustomCSS] = useState('');
	const [currentState, setCurrentState] = useState('');

	const [heading, setHeading] = useState({
		fontFamily: '',
		fontSize: '',
		fontSizeUnits: 'px',
		fontWeight: '',
		fontStyle: '',
		textTransform: '',
		textDecoration: '',
		letterSpacing: '',
		letterSpacingUnits: 'px',
		lineHeight: '',
		lineHeightUnits: '',
	});

	const [body, setBody] = useState({
		fontFamily: '',
		fontSize: '',
		fontSizeUnits: 'px',
		fontWeight: '',
		fontStyle: '',
		textTransform: '',
		textDecoration: '',
		letterSpacing: '',
		letterSpacingUnits: 'px',
		lineHeight: '',
		lineHeightUnits: '',
	});

	const [deviceType, setDeviceType] = useState('Desktop');
	useEffect(() => {

		const localStorageKeys = [
			'fb_update_global_colors',
			'fb_update_custom_colors',
			'fb_update_gradient_colors',
			'fb_update_custom_gradient_colors'
		];

		localStorageKeys.forEach((key) => {
			const localStorageData = getFbLocalStorage(key);

			switch (key) {
				case 'fb_update_global_colors':
					if (localStorageData.length > 0) {
						setGlobalColors(localStorageData);
					} else {
						setGlobalColors(defaultsColors); // Assuming `defaultsColors` is defined elsewhere
					}
					break;

				case 'fb_update_custom_colors':
					if (localStorageData.length > 0) {
						setCustomColors(localStorageData);
					} else {
						setCustomColors([]); // Default empty array
					}
					break;

				case 'fb_update_gradient_colors':
					if (localStorageData.length > 0) {
						setGradientColors(localStorageData);
					} else {
						setGradientColors(gradientDefaults); // Assuming `gradientDefaults` is defined elsewhere
					}
					break;

				case 'fb_update_custom_gradient_colors':
					if (localStorageData.length > 0) {
						setCustomGradientColors(localStorageData);
					} else {
						setCustomGradientColors([]); // Default empty array
					}
					break;

				default:
					console.warn(`Unhandled key: ${key}`);
			}
		});
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
		setCurrentState('fb_update_global_colors');
	};

	//Update Gradient Colors
	const setGradientColor = (index, color) => {
		const colors = [...gradientColors];
		colors[index].color = color;
		setGradientColors([...colors]);
		setCurrentState('fb_update_gradient_colors');
	};

	//Update Gradient Colors
	const setCustomGradientColor = (index, color) => {
		const colors = [...customGradientColors];
		colors[index].color = color;
		setCustomGradientColors([...colors]);
		setCurrentState('fb_update_custom_gradient_colors');
	};

	const setCustomColor = (index, color) => {
		const colors = [...customColors];
		colors[index].color = color;
		setCustomColors([...colors]);
		setCurrentState('fb_update_custom_colors');
	};

	// New custom color function
	const setNewCustomColorFn = () => {
		setCustomColors((prevColors) => {
			// Determine a unique index
			let index = prevColors.length + 1;
			while (
				prevColors.some(
					(color) =>
						color.name === `Custom Color ${index}` ||
						color.slug === `custom-color-${index}` ||
						color.var === `--fb-custom-color-${index}`
				)
				) {
				index++;
			}

			// Add the new color
			return [
				...prevColors,
				{
					color: '#000000',
					name: `Custom Color ${index}`,
					slug: `custom-color-${index}`,
					var: `--fb-custom-color-${index}`
				}
			];
		});

		setCurrentState('fb_update_custom_colors');
	}

	// Delete custom gradient color
	const deleteCustomGradientColor = (index, color) => {
		const colors = [...customGradientColors];
		console.log(colors)

		colors.splice(index, 1);
		setCustomGradientColors([...colors]);
		setCurrentState('fb_update_custom_gradient_colors');
	}

	const updateGradientColors = (colors) => {
		// console.log(colors)
	};

	// Save colors after post save
	const isAfterSave = useAfterSave();

	useEffect(() => {
		const handleUpdateSettings = async () => {
			if (isAfterSave) {
				try {
					let updatedColors = [];
					if (currentState === 'fb_update_global_colors') {
						updatedColors = globalColors;
					} else if (currentState === 'fb_update_custom_colors') {
						updatedColors = customColors;
					} else if (currentState === 'fb_update_gradient_colors') {
						updatedColors = gradientColors;
					} else if (currentState === 'fb_update_custom_gradient_colors') {
						updatedColors = customGradientColors;
					}

					// Update global styles
					const response = await updateGlobalStyle(updatedColors, currentState);

					if (currentState === 'fb_update_global_colors') {
						setGlobalColors(response.data.data);
					} else if (currentState === 'fb_update_custom_colors') {
						setCustomColors(response.data.data);
					} else if (currentState === 'fb_update_gradient_colors') {
						setGradientColors(response.data.data);
					} else if (currentState === 'fb_update_custom_gradient_colors') {
						setCustomGradientColors(response.data.data);
					}

					localStorage.setItem(currentState, JSON.stringify(response.data.data));
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
														setCurrentState={setCurrentState}
													/>
												)}
												<div className="add-custom-color">
													<Button
														className="add-custom-color-btn"
														onClick={() => setNewCustomColorFn()}
													>Add Custom Color <span>
														<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M7.5 0.75V13.25M13.75 7L1.25 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
															<path d="M7.5 0.75V13.25M13.75 7L1.25 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
							<TypographySettings />
						</PanelBody>
						<PanelBody title={__("Custom CSS", "frontis-blocks")} initialOpen={ false }>
							<TextareaControl
								value={customCSS}
								onChange={(value) => setCustomCSS(value)}
							/>
						</PanelBody>
					</div>
				</PluginSidebar>
			</div>
		</>
	);
};

export default FrontisBlocksSidebar;
