import { __ } from "@wordpress/i18n";
import {
	Dashicon,
	TabPanel,
	Button,
	TextControl,
	__experimentalNavigatorProvider as NavigatorProvider,
	__experimentalNavigatorScreen as NavigatorScreen,
	__experimentalNavigatorButton as NavigatorButton,
	__experimentalNavigatorBackButton as NavigatorBackButton,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { useDispatch, subscribe, select } from '@wordpress/data';
import { useEffect, useState } from "@wordpress/element";
import { useDeviceType } from "@Config/displayType";
import FB_SidebarTypography from "./SidebarTypography";
import { loadGoogleFont, useAfterSave } from "../helper";
import { updateGlobalStyle } from "../fetch";
import FrontPreview from "./FontPreview";
import generateCSSVariables from "./GenerateRootCss";

const TypographySettings = (props) => {
	const [typography, setTypography] = useState(props.typography);
	const [customTypography, setCustomTypography] = useState(props.customTypography);
	const [selectedHeading, setSelectedHeading] = useState('all');
	const [isSaving, setIsSaving] = useState(false);
	const [generateHeadingCss, setGenerateHeadingCss] = useState();
	const [isMount, setIsMount] = useState(false);
	const [fontFamilies, setFontFamilies] = useState([]);
	const [globalTypography, setGlobalTypography] = useState(typography);
	const [selectCustomTypo, setSelectCustomTypo] = useState(false);
	const deviceType = useDeviceType();

	const isFSE = wp.data.select('core').getCurrentTheme()?.is_block_theme || false;

	// Typography elements
	const typographyElements = {
		body: 'Text',
		link: 'Link',
		heading: 'Headings',
		captions: 'Captions',
		button: 'Button',
	}

	const TypographyHeadingElements = {
		all: 'ALL',
		h1: 'H1',
		h2: 'H2',
		h3: 'H3',
		h4: 'H4',
		h5: 'H5',
		h6: 'H6',
	}

	// Is heading saved
	const isHeadingSaved = () => {
		const typoKeys = typography ? Object.keys(typography) : []
		if (typoKeys.length > 0) {
			return typoKeys.some((str) => str.startsWith('h'));
		}
		return false
	}

	const changeCustomTypoName = (key, value) => {
		let typoObj = { ...customTypography }
		typoObj[key].name = value
		setCustomTypography({ ...typoObj })
	}

	const deleteItem = (item) => {
		const tempTypography = { ...customTypography };
		const tempGlobalTypography = { ...globalTypography };
	
		delete tempTypography[item];
		delete tempGlobalTypography[item];
	
		setCustomTypography(tempTypography);
		setGlobalTypography(tempGlobalTypography);
		setIsMount(true);
	};

	// Body link font typography
	const onChangeFontFamily = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				fontFamily: value,
			},
		}));

		loadGoogleFont(value);
		setFontFamilies({
			...fontFamilies,
			[item]: value
		});

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'fontFamily': {
					variable: `--fb-global-${item}--font-family`,
					value: value
				}
			}
		});

		setIsMount(true);
	}

	const onChangeFontSize = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				fontSize: {
					...typography[item]?.fontSize,
					[deviceType]: parseInt(value[deviceType]),
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'fontSize': {
					variable: `--fb-global-${item}--font-size`,
					value: value,
					unit: {
						"Desktop": "px",
						"Tablet": "px",
						"Mobile": "px"
					}
				}
			}
		});

		setIsMount(true);
	}

	const onChangeFontSizeUnit = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				fontSizeUnit: {
					...typography[item]?.fontSizeUnit,
					[deviceType]: value[deviceType],
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'fontSize': {
					...globalTypography[item]['fontSize'],
					unit: value
				}
			}
		});

		setIsMount(true);
	}

	const onChangeFontWeight = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				fontWeight: value,
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'fontWeight': {
					variable: `--fb-global-${item}--font-weight`,
					value: value
				}
			}
		});
		setIsMount(true);
	}

	const onChangeFontStyle = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				fontStyle: value,
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'fontStyle': {
					variable: `--fb-global-${item}--font-style`,
					value: value
				}
			}
		});

		setIsMount(true);
	}

	const onChangeTextDecoration = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				textDecoration: value,
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'textDecoration': {
					variable: `--fb-global-${item}--text-decoration`,
					value: value
				}
			}
		});
		setIsMount(true);
	}

	const onChangeTextTransform = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				textTransform: value,
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'textTransform': {
					variable: `--fb-global-${item}--text-transform`,
					value: value
				}
			}
		});
		setIsMount(true);
	}

	const onChangeLetterSpacing = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				letterSpacing: {
					...typography[item]?.letterSpacing,
					[deviceType]: value[deviceType],
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'letterSpacing': {
					variable: `--fb-global-${item}--letter-spacing`,
					value: value,
					unit: {
						'Desktop': 'px',
						'Tablet': 'px',
						'Mobile': 'px'
					}
				}
			}
		});
		setIsMount(true);
	}

	const onChangeLetterSpacingUnit = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				letterSpacingUnit: {
					...typography[item]?.letterSpacingUnit,
					[deviceType]: value[deviceType],
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'letterSpacing': {
					...globalTypography[item]['letterSpacing'],
					unit: value
				}
			}
		});
		setIsMount(true);
	}

	const onChangeLineHeight = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				lineHeight: {
					...typography[item]?.lineHeight,
					[deviceType]: value[deviceType],
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'lineHeight': {
					variable: `--fb-global-${item}--line-height`,
					value: value,
					unit: {
						'Desktop': 'px',
						'Tablet': 'px',
						'Mobile': 'px'
					}
				}
			}
		});
		setIsMount(true);
	}

	const onChangeLineHeightUnit = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				lineHeightUnits: {
					...typography[item]?.lineHeightUnits,
					[deviceType]: value[deviceType],
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'lineHeight': {
					...globalTypography[item]['lineHeight'],
					unit: value
				}
			}
		});
		setIsMount(true);
	}

	// Heading typography handler
	const onChangeHeadingFontFamily = (value, item) => {
		// Assuming typography is an object that looks like { item1: { h1: { fontFamily: ... }, h2: ... }, item2: ... }
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				[selectedHeading]: {
					...prevTypography[item][selectedHeading],
					fontFamily: value,
				},
			},
		}));

		loadGoogleFont(value);
		setIsMount(true);

		setGlobalTypography({
			...globalTypography,
			[selectedHeading]: {
				...globalTypography[selectedHeading],
				'fontFamily': {
					variable: `--fb-global-${selectedHeading}--font-family`,
					value: value
				}
			}
		});

		setFontFamilies({
			...fontFamilies,
			[item]: {
				...fontFamilies.heading,
				[selectedHeading]: value
			}
		});
	}

	const onChangeHeadingFontSize = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				[selectedHeading]: {
					...prevTypography[item][selectedHeading],
					fontSize: {
						...typography[item][selectedHeading]?.fontSize,
						[deviceType]: value[deviceType],
					},
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[selectedHeading]: {
				...globalTypography[selectedHeading],
				'fontSize': {
					variable: `--fb-global-${selectedHeading}--font-size`,
					value: value,
					unit: {
						'Desktop': 'px',
						'Tablet': 'px',
						'Mobile': 'px'
					}
				}
			}
		});

		setIsMount(true);
	}

	const onChangeHeadingFontSizeUnit = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				[selectedHeading]: {
					...prevTypography[item][selectedHeading],
					fontSizeUnit: {
						...typography[item][selectedHeading]?.fontSizeUnit,
						[deviceType]: value[deviceType],
					},
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[selectedHeading]: {
				...globalTypography[selectedHeading],
				'fontSize': {
					...globalTypography[selectedHeading]['fontSize'],
					unit: value
				}
			}
		});

		setIsMount(true);
	}

	const onChangeHeadingFontWeight = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				[selectedHeading]: {
					...prevTypography[item][selectedHeading],
					fontWeight: value,
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[selectedHeading]: {
				...globalTypography[selectedHeading],
				'fontWeight': {
					variable: `--fb-global-${selectedHeading}--font-weight`,
					value: value
				}
			}
		});
		setIsMount(true);
	}

	const onChangeHeadingFontStyle = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				[selectedHeading]: {
					...prevTypography[item][selectedHeading],
					fontStyle: value,
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[selectedHeading]: {
				...globalTypography[selectedHeading],
				'fontStyle': {
					variable: `--fb-global-${selectedHeading}--font-style`,
					value: value
				}
			}
		});
		setIsMount(true);
	}

	const onChangeHeadingTextDecoration = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				[selectedHeading]: {
					...prevTypography[item][selectedHeading],
					textDecoration: value,
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[selectedHeading]: {
				...globalTypography[selectedHeading],
				'textDecoration': {
					variable: `--fb-global-${selectedHeading}--font-decoration`,
					value: value
				}
			}
		});
		setIsMount(true);
	}

	const onChangeHeadingTextTransform = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				[selectedHeading]: {
					...prevTypography[item][selectedHeading],
					textTransform: value,
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[selectedHeading]: {
				...globalTypography[selectedHeading],
				'textTransform': {
					variable: `--fb-global-${selectedHeading}--font-transform`,
					value: value
				}
			}
		});
		setIsMount(true);
	}

	const onChangeHeadingLetterSpacing = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				[selectedHeading]: {
					...prevTypography[item][selectedHeading],
					letterSpacing: {
						...typography[item][selectedHeading]?.letterSpacing,
						[deviceType]: value[deviceType],
					},
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[selectedHeading]: {
				...globalTypography[selectedHeading],
				'letterSpacing': {
					variable: `--fb-global-${selectedHeading}--font-letter-spacing`,
					value: value,
					unit: {
						'Desktop': 'px',
						'Tablet': 'px',
						'Mobile': 'px',
					}
				}
			}
		});
		setIsMount(true);
	}

	const onChangeHeadingLetterSpacingUnit = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				[selectedHeading]: {
					...prevTypography[item][selectedHeading],
					letterSpacingUnit: {
						...typography[item][selectedHeading]?.letterSpacingUnit,
						[deviceType]: value[deviceType],
					},
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[selectedHeading]: {
				...globalTypography[selectedHeading],
				'letterSpacing': {
					...globalTypography[selectedHeading]['letterSpacing'],
					unit: value
				}
			}
		});
		setIsMount(true);
	}

	const onChangeHeadingLineHeight = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				[selectedHeading]: {
					...prevTypography[item][selectedHeading],
					lineHeight: {
						...typography[item][selectedHeading]?.lineHeight,
						[deviceType]: value[deviceType],
					},
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[selectedHeading]: {
				...globalTypography[selectedHeading],
				'lineHeight': {
					variable: `--fb-global-${selectedHeading}--font-line-height`,
					value: value,
					unit: {
						'Desktop': 'px',
						'Tablet': 'px',
						'Mobile': 'px',
					}
				}
			}
		});
		setIsMount(true);
	}

	const onChangeHeadingLineHeightUnit = (value, item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				[selectedHeading]: {
					...prevTypography[item][selectedHeading],
					lineHeightUnits: {
						...typography[item][selectedHeading]?.lineHeightUnits,
						[deviceType]: value[deviceType],
					},
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[selectedHeading]: {
				...globalTypography[selectedHeading],
				'lineHeight': {
					...globalTypography[selectedHeading]['lineHeight'],
					unit: value
				}
			}
		});
		setIsMount(true);
	}

	// Custom typography handler
	const onChangeCustomFontFamily = (value, item) => {
		setCustomTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				fontFamily: value,
			},
		}));

		setFontFamilies({
			...fontFamilies,
			[item]: value
		});

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'fontFamily': {
					variable: `--fb-global-${item}--font-family`,
					value: value
				}
			}
		});

		loadGoogleFont(value);
		setIsMount(true);
	}

	const onChangeCustomFontSize = (value, item) => {
		setCustomTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				fontSize: {
					...customTypography[item]?.fontSize,
					[deviceType]: value[deviceType],
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'fontSize': {
					variable: `--fb-global-${item}--font-size`,
					value: value,
					unit: {
						'Desktop': 'px',
						'Tablet': 'px',
						'Mobile': 'px'
					}
				}
			}
		});
		setIsMount(true);
	}

	const onChangeCustomFontSizeUnit = (value, item) => {
		setCustomTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				fontSizeUnit: {
					...customTypography[item]?.fontSizeUnit,
					[deviceType]: value[deviceType],
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'fontSize': {
					...globalTypography[item]['fontSize'],
					unit: value
				}
			}
		});
		setIsMount(true);
	}

	const onChangeCustomFontWeight = (value, item) => {
		setCustomTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				fontWeight: value,
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'fontWeight': {
					variable: `--fb-global-${item}--font-weight`,
					value: value
				}
			}
		});
		setIsMount(true);
	}

	const onChangeCustomFontStyle = (value, item) => {
		setCustomTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				fontStyle: value,
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'fontStyle': {
					variable: `--fb-global-${item}--font-style`,
					value: value
				}
			}
		});
		setIsMount(true);
	}

	const onChangeCustomTextDecoration = (value, item) => {
		setCustomTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				textDecoration: value,
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'textDecoration': {
					variable: `--fb-global-${item}--font-decoration`,
					value: value
				}
			}
		});
		setIsMount(true);
	}

	const onChangeCustomTextTransform = (value, item) => {
		setCustomTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				textTransform: value,
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'textTransform': {
					variable: `--fb-global-${item}--font-transform`,
					value: value
				}
			}
		});
		setIsMount(true);
	}

	const onChangeCustomLetterSpacing = (value, item) => {
		setCustomTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				letterSpacing: {
					...customTypography[item]?.letterSpacing,
					[deviceType]: value[deviceType],
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'letterSpacing': {
					variable: `--fb-global-${item}--font-letter-spacing`,
					value: value,
					unit: {
						'Desktop': 'px',
						'Tablet': 'px',
						'Mobile': 'px',
					}
				}
			}
		});
		setIsMount(true);
	}

	const onChangeCustomLetterSpacingUnit = (value, item) => {
		setCustomTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				letterSpacingUnit: {
					...customTypography[item]?.letterSpacingUnit,
					[deviceType]: value[deviceType],
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'letterSpacing': {
					...globalTypography[item]['letterSpacing'],
					unit: value
				}
			}
		});
		setIsMount(true);
	}

	const onChangeCustomLineHeight = (value, item) => {
		setCustomTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				lineHeight: {
					...customTypography[item]?.lineHeight,
					[deviceType]: value[deviceType],
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'lineHeight': {
					variable: `--fb-global-${item}--font-line-height`,
					value: value,
					unit: {
						'Desktop': 'px',
						'Tablet': 'px',
						'Mobile': 'px',
					}
				}
			}
		});
		setIsMount(true);
	}

	const onChangeCustomLineHeightUnit = (value, item) => {
		setCustomTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				lineHeightUnits: {
					...customTypography[item]?.lineHeightUnits,
					[deviceType]: value[deviceType],
				},
			},
		}));

		setGlobalTypography({
			...globalTypography,
			[item]: {
				...globalTypography[item],
				'lineHeight': {
					...globalTypography[item]['lineHeight'],
					unit: value
				}
			}
		});
		setIsMount(true);
	}

	const isAfterSave = useAfterSave();

	useEffect(() => {
		const handleUpdateSettings = async () => {
			if (isAfterSave && isMount) {
				if (typography) {
					const response = await updateGlobalStyle(typography, 'fb_update_typography');
					if (response.success) {
						setTypography(response.data.data);
						localStorage.setItem('fb_typography', JSON.stringify(response.data.data));
					}
				}

				if (customTypography) {
					const response = await updateGlobalStyle(customTypography, 'fb_update_custom_typography');
					if (response.success) {
						setCustomTypography(response.data.data || {});
						localStorage.setItem('fb_custom_typography', JSON.stringify(response.data.data));
					}
				}

				if (globalTypography) {
					const response = await updateGlobalStyle(globalTypography, 'fb_update_globaltypo');
					if (response.success) {
						setGlobalTypography(response.data.data);
						localStorage.setItem('fb_globaltypo', JSON.stringify(response.data.data));
					}
				}

				if (fontFamilies) {
					const response = await updateGlobalStyle(fontFamilies, 'fb_update_fontfamilies');
					if (response.success) {
						setFontFamilies(response.data.data);
						localStorage.setItem('fb_fontFamilies', JSON.stringify(response.data.data));
					}
				}
				setIsMount(false);
			}
		}

		handleUpdateSettings();
	}, [isAfterSave])

	useEffect(() => {
		if (isMount) {
			wp.data.dispatch('core/editor').editPost({ meta: { _dummy: new Date().getTime() } });
		}
	}, [isMount]);

	useEffect(() => {
		if (globalTypography) {
			generateCSSVariables(globalTypography, deviceType);
		}

	}, [globalTypography, deviceType]);

	// Load saved data and generate root css
	useEffect(() => {
		setTimeout(() => {
			let globalTypoData = localStorage.getItem("fb_globaltypo");
			if (globalTypoData !== 'null') {
				globalTypoData = JSON.parse(globalTypoData);
				setGlobalTypography(globalTypoData)
			}
		}, 1000);
	}, [deviceType]);


	return (
		<>
			<div className="fb-typography-panel">
				{/* Typography Elements Section */}
				<div className="fb-panel-section">
					<h3 className="fb-panel-heading">Typography</h3>
					<div className={'fb-global-typo-elements'}>
						<div className="fb-global-typo-elements-wrap">
							<NavigatorProvider initialPath="/">
								<NavigatorScreen path="/">
									{typographyElements && Object.keys(typographyElements).map((item, index) => (
										<div
											key={index}
											className="fb-custom-element fb-global-typography-element"
										>
											<NavigatorButton
												path={`/${item}`}
											>
												<span className="font_preview">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="https://www.w3.org/2000/svg">
														<path d="M6.9 7L3 17.8H4.7L5.7 15H9.8L10.8 17.8H12.5L8.6 7H6.9ZM6.2 13.6L7.7 9.3L9.2 13.6H6.2ZM21.6 17C21.5 17.1 21.4 17.2 21.3 17.2C21.2 17.3 21.1 17.3 20.9 17.3C20.7 17.3 20.6 17.2 20.5 17.1C20.4 17 20.4 16.8 20.4 16.5V12C20.4 11.5 20.4 11 20.3 10.6C20.2 10.2 20 9.9 19.8 9.6C19.6 9.4 19.3 9.2 18.9 9.1C18.5 9.1 18.1 9 17.6 9C17.1 9 16.6 9.1 16.2 9.2C15.8 9.3 15.5 9.5 15.2 9.6C15 9.8 14.8 9.9 14.6 10.1C14.5 10.3 14.4 10.5 14.4 10.8C14.4 11.1 14.5 11.3 14.6 11.6C14.8 11.8 15 11.9 15.4 11.9C15.7 11.9 16 11.8 16.2 11.6C16.4 11.4 16.5 11.2 16.5 10.9C16.5 10.6 16.4 10.4 16.3 10.2C16.1 10 15.9 9.9 15.7 9.8C15.9 9.6 16.1 9.5 16.4 9.4C16.7 9.3 17 9.3 17.2 9.3C17.5 9.3 17.8 9.3 18 9.4C18.2 9.5 18.4 9.7 18.5 9.9C18.6 10.1 18.7 10.4 18.7 10.8V11.9C18.7 12.2 18.6 12.4 18.4 12.5C18.2 12.7 17.9 12.8 17.5 12.9C17.2 13 16.8 13.2 16.4 13.3C16 13.4 15.6 13.6 15.3 13.8C15 14 14.7 14.2 14.5 14.5C14.3 14.8 14.2 15.2 14.2 15.7C14.2 16.3 14.4 16.8 14.7 17.1C15 17.5 15.6 17.6 16.3 17.6C16.8 17.6 17.3 17.5 17.7 17.3C18.1 17.1 18.5 16.7 18.8 16.2C18.8 16.6 18.9 16.9 19.1 17.2C19.3 17.5 19.7 17.6 20.3 17.6C20.7 17.6 21 17.5 21.2 17.4C21.4 17.3 21.7 17.1 21.9 17H21.6ZM18.6 16.1C18.4 16.5 18.1 16.8 17.8 16.9C17.5 17.1 17.2 17.1 17 17.1C16.6 17.1 16.4 17 16.1 16.8C15.9 16.6 15.8 16.2 15.8 15.7C15.8 15.2 15.9 14.8 16.1 14.5C16.3 14.2 16.6 14 16.9 13.8C17.2 13.6 17.6 13.5 17.9 13.3C18.2 13.2 18.5 13 18.6 12.7V16.1Z" fill="currentcolor" />
													</svg>
												</span>
												{typographyElements[item]}
												{(typography[item] || (item === 'heading' && isHeadingSaved())) && (
													<span className="edit_indecator"></span>
												)}
											</NavigatorButton>
										</div>
									))}
								</NavigatorScreen>

								{typographyElements && Object.keys(typographyElements).map((item, index) => (
									<div
										key={index}
										className="fb-global-typography-element-content"
									>
										<NavigatorScreen path={`/${item}`}>
											<NavigatorBackButton className="fb-global-back">
												<span><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M10.5 13.5L5.5 8.5L10.5 3.5" stroke="currentcolor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span> {typographyElements[item]}
											</NavigatorBackButton>

											{/* Heading Typography option */}
											{item === 'heading' && (
												<>
													<FrontPreview fontProps={typography?.[item]?.[selectedHeading]} deviceType={deviceType} fontSize={true} />
													<ToggleGroupControl
														__nextHasNoMarginBottom
														isBlock
														className={`fb-global-typography-headings-wrap`}
														label="Select Heading"
														value={selectedHeading}
														hideLabelFromVision={true}
														onChange={(value) => setSelectedHeading(value)}
													>
														{TypographyHeadingElements && Object.keys(TypographyHeadingElements).map((heading, headingIndex) => (
															<ToggleGroupControlOption
																key={headingIndex}
																className={`fb-global-typography-element-heading ${typography[heading] ? 'edited' : ''}`}
																label={TypographyHeadingElements[heading]}
																value={heading}
															/>
														))}
													</ToggleGroupControl>
													{TypographyHeadingElements && Object.keys(TypographyHeadingElements).map((heading, headingIndex) => (
														<div
															key={headingIndex}
															style={{ display: heading === selectedHeading ? 'block' : 'none' }}
														>
															<div className="fb-typography-settings">
																<FB_SidebarTypography
																	fontFamily={typography?.[item]?.[selectedHeading]?.fontFamily}
																	onChangeFontFamily={(value) => onChangeHeadingFontFamily(value, item)}
																	fontSize={typography?.[item]?.[selectedHeading]?.fontSize}
																	onChangeFontSize={(value) => onChangeHeadingFontSize(value, item)}
																	fontSizeUnits={typography?.[item]?.[selectedHeading]?.fontSizeUnit}
																	onChangeFontSizeUnit={(value) => onChangeHeadingFontSizeUnit(value, item)}
																	fontWeight={typography?.[item]?.[selectedHeading]?.fontWeight}
																	onChangeFontWeight={(value) => onChangeHeadingFontWeight(value, item)}
																	fontStyle={typography?.[item]?.[selectedHeading]?.fontStyle}
																	onChangeFontStyle={(value) => onChangeHeadingFontStyle(value, item)}
																	textTransform={typography?.[item]?.[selectedHeading]?.textTransform}
																	onChangeTextTransform={(value) => onChangeHeadingTextTransform(value, item)}
																	textDecoration={typography?.[item]?.[selectedHeading]?.textDecoration}
																	onChangeTextDecoration={(value) => onChangeHeadingTextDecoration(value, item)}
																	letterSpacing={typography?.[item]?.[selectedHeading]?.letterSpacing}
																	onChangeLetterSpacing={(value) => onChangeHeadingLetterSpacing(value, item)}
																	letterSpacingUnits={typography?.[item]?.[selectedHeading]?.letterSpacingUnit}
																	onChangeLetterSpacingUnit={(value) => onChangeHeadingLetterSpacingUnit(value, item)}
																	lineHeight={typography?.[item]?.[selectedHeading]?.lineHeight}
																	onChangeLineHeight={(value) => onChangeHeadingLineHeight(value, item)}
																	lineHeightUnits={typography?.[item]?.[selectedHeading]?.lineHeightUnits}
																	onChangeLineHeightUnit={(value) => onChangeHeadingLineHeightUnit(value, item)}
																	deviceType={deviceType}
																	heading={selectedHeading}
																/>
															</div>
														</div>
													))}
												</>
											)}

											{/* Not Heading Typography option */}
											{item !== 'heading' && (
												<>
													<div className="fb-typography-settings">
														<FrontPreview fontProps={typography[item]} deviceType={deviceType} fontSize={true} />
														<FB_SidebarTypography
															fontFamily={typography?.[item]?.fontFamily}
															onChangeFontFamily={(value) => onChangeFontFamily(value, item)}
															fontSize={typography?.[item]?.fontSize}
															onChangeFontSize={(value) => onChangeFontSize(value, item)}
															fontSizeUnits={typography?.[item]?.fontSizeUnit}
															onChangeFontSizeUnit={(value) => onChangeFontSizeUnit(value, item)}
															fontWeight={typography?.[item]?.fontWeight}
															onChangeFontWeight={(value) => onChangeFontWeight(value, item)}
															fontStyle={typography?.[item]?.fontStyle}
															onChangeFontStyle={(value) => onChangeFontStyle(value, item)}
															textTransform={typography?.[item]?.textTransform}
															onChangeTextTransform={(value) => onChangeTextTransform(value, item)}
															textDecoration={typography?.[item]?.textDecoration}
															onChangeTextDecoration={(value) => onChangeTextDecoration(value, item)}
															letterSpacing={typography?.[item]?.letterSpacing}
															onChangeLetterSpacing={(value) => onChangeLetterSpacing(value, item)}
															letterSpacingUnits={typography?.[item]?.letterSpacingUnit}
															onChangeLetterSpacingUnit={(value) => onChangeLetterSpacingUnit(value, item)}
															lineHeight={typography?.[item]?.lineHeight}
															onChangeLineHeight={(value) => onChangeLineHeight(value, item)}
															lineHeightUnits={typography?.[item]?.lineHeightUnits}
															onChangeLineHeightUnit={(value) => onChangeLineHeightUnit(value, item)}
															deviceType={deviceType}
														/>
													</div>
												</>
											)}
										</NavigatorScreen>
									</div>
								))}
							</NavigatorProvider>
						</div>
					</div>
				</div>

				{/* Custom Typography Section */}
				{Object.keys(customTypography || {}).length > 0 && (
				<div className="fb-panel-section">
					<div className="fb-panel-heading-wrapper">
						<h3 className="fb-panel-heading">Custom Typography</h3>
					</div>

					<div className={'fb-global-typo-elements'}>
						<div className="fb-global-typo-elements-wrap">
							{customTypography && typeof customTypography === 'object' && (
								<NavigatorProvider initialPath="/">
									<NavigatorScreen path="/">
										{Object.keys(customTypography || {}).length > 0 &&
											<div className="fb-custom-element-wrapper">
												{Object.keys(customTypography || {}).length > 0 && Object.keys(customTypography).map((item, index) => (
													<div
														key={index}
														className="fb-custom-element fb-global-typography-element"
													>
														<NavigatorButton
															path={`/${item}`}
															onClick={() => setSelectCustomTypo(true)}
														>
															{customTypography[item]?.name}
														</NavigatorButton>
														<Button className="fb-delete-custom-typo">
															<span
																className={'fb-delete'}
																title="Delete"
																onClick={() => deleteItem(item)}
															>
																<svg xmlns="https://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
																	<path d="M13 4.16675L12.5869 10.8501C12.4813 12.5577 12.4285 13.4115 12.0005 14.0253C11.7889 14.3288 11.5165 14.5849 11.2005 14.7774C10.5614 15.1667 9.706 15.1667 7.99513 15.1667C6.28208 15.1667 5.42553 15.1667 4.78603 14.7767C4.46987 14.5839 4.19733 14.3273 3.98579 14.0233C3.55792 13.4085 3.5063 12.5535 3.40307 10.8435L3 4.16675" stroke="#E43242" stroke-linecap="round" />
																	<path d="M2 4.16659H14M10.7038 4.16659L10.2487 3.22774C9.9464 2.60409 9.7952 2.29227 9.53447 2.09779C9.47667 2.05465 9.4154 2.01628 9.35133 1.98305C9.0626 1.83325 8.71607 1.83325 8.023 1.83325C7.31253 1.83325 6.95733 1.83325 6.66379 1.98933C6.59873 2.02393 6.53665 2.06385 6.47819 2.1087C6.21443 2.31105 6.06709 2.63429 5.77241 3.28076L5.36861 4.16659" stroke="#E43242" stroke-linecap="round" />
																	<path d="M6.3335 11.5V7.5" stroke="#E43242" stroke-linecap="round" />
																	<path d="M9.6665 11.5V7.5" stroke="#E43242" stroke-linecap="round" />
																</svg>
															</span>
														</Button>
													</div>
												))}
											</div>
										}

									</NavigatorScreen>

									{Object.keys(customTypography).length > 0 && Object.keys(customTypography).map((item, index) => (
										<div
											key={index}
											className="fb-global-typography-element-content"
										>
											<NavigatorScreen path={`/${item}`}>
												<NavigatorBackButton onClick={() => setSelectCustomTypo(false)}>
													<svg xmlns="https://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
														<path d="M10.5 13.5L5.5 8.5L10.5 3.5" stroke="currentcolor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
													</svg>
													{customTypography[item]?.name}
												</NavigatorBackButton>

												<div className="fb-typography-settings">
													<FrontPreview fontProps={customTypography[item]} deviceType={deviceType} fontSize={true} />
													<TextControl
														label={__('Typography Name', 'frontis-blocks')}
														className="fb-custom-typo-name"
														value={customTypography[item]?.name}
														onChange={(value) => changeCustomTypoName(item, value)}
													/>
													<FB_SidebarTypography
														fontFamily={customTypography?.[item]?.fontFamily}
														onChangeFontFamily={(value) => onChangeCustomFontFamily(value, item)}
														fontSize={customTypography?.[item]?.fontSize}
														onChangeFontSize={(value) => onChangeCustomFontSize(value, item)}
														fontSizeUnits={customTypography?.[item]?.fontSizeUnit}
														onChangeFontSizeUnit={(value) => onChangeCustomFontSizeUnit(value, item)}
														fontWeight={customTypography?.[item]?.fontWeight}
														onChangeFontWeight={(value) => onChangeCustomFontWeight(value, item)}
														fontStyle={customTypography?.[item]?.fontStyle}
														onChangeFontStyle={(value) => onChangeCustomFontStyle(value, item)}
														textTransform={customTypography?.[item]?.textTransform}
														onChangeTextTransform={(value) => onChangeCustomTextTransform(value, item)}
														textDecoration={customTypography?.[item]?.textDecoration}
														onChangeTextDecoration={(value) => onChangeCustomTextDecoration(value, item)}
														letterSpacing={customTypography?.[item]?.letterSpacing}
														onChangeLetterSpacing={(value) => onChangeCustomLetterSpacing(value, item)}
														letterSpacingUnits={customTypography?.[item]?.letterSpacingUnit}
														onChangeLetterSpacingUnit={(value) => onChangeCustomLetterSpacingUnit(value, item)}
														lineHeight={customTypography?.[item]?.lineHeight}
														onChangeLineHeight={(value) => onChangeCustomLineHeight(value, item)}
														lineHeightUnits={customTypography?.[item]?.lineHeightUnits}
														onChangeLineHeightUnit={(value) => onChangeCustomLineHeightUnit(value, item)}
														deviceType={deviceType}
													/>
												</div>
											</NavigatorScreen>
										</div>
									))}
								</NavigatorProvider>
							)}
						</div>
					</div>
				</div>
				)}
			</div>
		</>
	)
}

export default TypographySettings;
