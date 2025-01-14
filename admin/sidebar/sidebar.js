import {__} from "@wordpress/i18n";
import {PluginSidebar, PluginSidebarMoreMenuItem} from "@wordpress/editor";
import {useDispatch, useSelect} from '@wordpress/data';
import {
	Button, 
	PanelBody, 
	TabPanel,
	__experimentalNavigatorProvider as NavigatorProvider,
	__experimentalNavigatorScreen as NavigatorScreen,
	__experimentalNavigatorButton as NavigatorButton,
	__experimentalNavigatorBackButton as NavigatorBackButton,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack
} from "@wordpress/components";
import {useEffect, useState} from "@wordpress/element";
import "./sidebar.scss";
import {loadGoogleFont} from "./helper";
import { getGlobalColors, updateGlobalColors } from "./fetch";

import TypographySettings from "./components/TypographySettings";
import { Coloricon, Typographyicon, Blockicon, ChevronRight, ChevronLeft } from "./../icons";
import FbColorPanel from "./components/FbColorPanel";
import ColorPalletWrapper from "./components/ColorPalletWrapper";
import { STORE_NAME } from './store';

const defaultsColors = [
	{
		"name": __("Primary Color", "frontis-blocks"),
		"color": '#399CFF',
		"slug": 'primary-color',
		"var": '--fb-primary-color'
	},
	{
		"name": __("Secondary Color", "frontis-blocks"),
		"color": '#f00000',
		"slug": 'secondary-color',
		"var": '--fb-secondary-color'
	},
	{
		"name": __("Tertiary Color", "frontis-blocks"),
		"color": '#F72585',
		"slug": 'tertiary-color',
		"var": '--fb-tertiary-color'
	},
	{
		"name": __("Accent Color", "frontis-blocks"),
		"color": "#7209B7",
		"slug": 'accent-color',
		"var": '--fb-accent-color'
	},
	{
		"name": __("Text Color", "frontis-blocks"),
		"color": '#3A0CA3',
		"slug": 'text-color',
		"var": '--fb-text-color'
	},
	{
		"name": __("Link Color", "frontis-blocks"),
		"color": '#4361EE',
		"slug": 'link-color',
		"var": '--fb-link-color'
	},
	{
		"name": __("Link Hover Color", "frontis-blocks"),
		"color": '#4CC9F0',
		"slug": 'link-hover-color',
		"var": '--fb-link-hover-color'
	},
	{
		"name": __("White Color", "frontis-blocks"),
		"color": '#FFFFFF',
		"slug": 'white-color',
		"var": '--fb-white-color'
	},
	{
		"name": __("Black Color", "frontis-blocks"),
		"color": '#000000',
		"slug": 'black-color',
		"var": '--fb-black-color'
	},
	{
		"name": __("Gray Color", "frontis-blocks"),
		"color": '#808080',
		"slug": 'gray-color',
		"var": '--fb-gray-color'
	}
];

function FrontisBlocksSidebar() {
	const [ fbGlobalSettingsLoading, setFbGlobalSettingsLoading ] = useState(false);

	const [customColors, setCustomColors] = useState([]);
	const [gradientColors, setGradientColors] = useState([]);
	const [customGradientColors, setCustomGradientColors] = useState([]);
	
	const { setColors } = useDispatch(STORE_NAME);
	const colors = useSelect(select => select(STORE_NAME).getColors(), []);

	// Initial load of settings
	useEffect(() => {
		const initializeSettings = async () => {
			try {
				// Get global colors from store API
				const fetchedColors = await getGlobalColors();
				if (fetchedColors && Array.isArray(fetchedColors)) {
					setColors(fetchedColors);
				} else {
					setColors(defaultsColors);
				}


			} catch (error) {
				console.error('Failed to fetch settings:', error);
				setColors(defaultsColors);
				setGradientColors(gradientDefaults);
			}
		};

		initializeSettings();
	}, []);

	// Save settings when loading state changes
	useEffect(() => {
		const saveSettings = async () => {
			if (fbGlobalSettingsLoading) {
				try {
					// Save global colors to store API
					await updateGlobalColors(colors);

					// Save other settings to localStorage
				
					setFbGlobalSettingsLoading(false);
				} catch (error) {
					console.error('Failed to save settings:', error);
					setFbGlobalSettingsLoading(false);
				}
			}
		};

		saveSettings();
	}, [ fbGlobalSettingsLoading, colors, customColors, gradientColors, customGradientColors ]);
	
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

	// New custom color function
	const setNewCustomColorFn = () => {
		setCustomColors(prevColors => {
			const index = prevColors.length + 1;
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
		setFbGlobalSettingsLoading(true);
	};

	// Delete custom gradient color
	const deleteCustomGradientColor = (index) => {
		setCustomGradientColors(prevColors => {
			const newColors = [...prevColors];
			newColors.splice(index, 1);
			return newColors;
		});
		setFbGlobalSettingsLoading(true);
	};
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
	const setCustomColor = (index, color) => {
		const colors = [...customColors];
		colors[index].color = color;
		setCustomColors([...colors]);
		setFbGlobalSettingsLoading(true);
	};

	return (
		<>
			<PluginSidebarMoreMenuItem target="fb_plugin_sidebar">
				{__("Frontis Global Settings", "frontis-blocks")}
			</PluginSidebarMoreMenuItem>
			<div className={'fb_plugin_sidebar'}>
				<PluginSidebar
					name="frontis-blocks-sidebar"
					title={__("FB Global Settings", "frontis-blocks")}
					className="fb-global-controls"
				>
					<div className="fb-panel-control">
						<NavigatorProvider initialPath="/">
							{/* Main Screen */}
							<NavigatorScreen path="/">
								<div className="fb-blocks-tabs">
									<div className="fb-tab-element">
										<NavigatorButton path="/typography">
											<HStack
												direction="row"
												justify="flex-start"
												className="fb-tab-wrapper"
											>
												<span className="fb-tab-icon">
													<Typographyicon />
												</span>
												<span className="fb-tab-title">{__("Typography", "frontis-blocks")}</span>
											</HStack>
										</NavigatorButton>
									</div>
									<div className="fb-tab-element">
										<NavigatorButton path="/colors">
											<HStack
												direction="row"
												justify="flex-start"
												className="fb-tab-wrapper"
											>
												<span className="fb-tab-icon">
													<Coloricon />
												</span>
												<span className="fb-tab-title">{__("Colors", "frontis-blocks")}</span>
											</HStack>
										</NavigatorButton>
									</div>
									<div className="fb-boder-full"></div>
									<div className="fb-tab-element">
										<p className="fb-tab-description">{__("Customize the appearance of specific blocks for the whole site.", "frontis-blocks")}</p>
										<NavigatorButton path="/blocks">
											<HStack
												direction="row"
												justify="space-between"
												className="fb-tab-wrapper"
											>
												<HStack direction="row" justify="flex-start">
													<span style={{width: '20px', height: '20px'}}>
														<Blockicon />
													</span>
													<span className="fb-tab-title">{__("Blocks", "frontis-blocks")}</span>
												</HStack>
												<span><ChevronRight /></span>
											</HStack>
										</NavigatorButton>
									</div>
								</div>
							</NavigatorScreen>

							{/* Typography Screen */}
							<NavigatorScreen path="/typography">
								<>
									<VStack direction="column" justify="flex-start">
										<HStack direction="row" justify="flex-start"
											alignment="stretch" className="fb-global-header-inner-wrapper">
											<NavigatorButton path="/" className="back-button">
												<ChevronLeft />
											</NavigatorButton>
											<div className="fb-global-header-inner">
												<h3>{__("Typography", "frontis-blocks")}</h3>
											</div>
										</HStack>
										<p>{__("Available fonts, typographic styles, application of those styles.", "frontis-blocks")}</p>
									</VStack>
									
									<TypographySettings typography={typography} customTypography={customTypography} />
								</>
							</NavigatorScreen>

							{/* Colors Screen */}
							<NavigatorScreen path="/colors">
								<>
									<VStack direction="column" justify="flex-start">
										<HStack direction="row" justify="flex-start"
											alignment="stretch" className="fb-global-header-inner-wrapper">
											<NavigatorButton path="/" className="back-button">
												<ChevronLeft />
											</NavigatorButton>
											<div className="fb-global-header-inner">
												<h3>{__("Color", "frontis-blocks")}</h3>
											</div>
										</HStack>
										<p>{__("Available texts, links, Button, Headings global colors", "frontis-blocks")}</p>
									</VStack>
									
									<FbColorPanel 
										title={__("Global Colors", "frontis-blocks")}
										colors={colors} 
										setFbGlobalSettingsLoading={setFbGlobalSettingsLoading}
									/>
									{/* {customColors && customColors.length > 0 && (
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
												</div> */}
								</>
							</NavigatorScreen>
							
							{/* Blocks Screen */}
							<NavigatorScreen path="/blocks">
								<>
									<VStack direction="column" justify="flex-start">
										<HStack direction="row" justify="flex-start"
											alignment="stretch" className="fb-global-header-inner-wrapper">
											<NavigatorButton path="/" className="back-button">
												<ChevronLeft />
											</NavigatorButton>
											<div className="fb-global-header-inner">
												<h3>{__("Blocks", "frontis-blocks")}</h3>
											</div>
										</HStack>
										<p>{__("Customize the appearance of specific blocks for the whole site.", "frontis-blocks")}</p>
									</VStack>
								</>
							</NavigatorScreen>
						</NavigatorProvider>
					</div>
				</PluginSidebar>
			</div>
		</>
	);
}

export default FrontisBlocksSidebar;
