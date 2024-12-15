import {__} from "@wordpress/i18n";
import {
	Popover,
	Dashicon,
	GradientPicker,
	ColorIndicator,
	PanelRow,
	SelectControl,
	RangeControl,
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
import {useEffect, useState} from "@wordpress/element";
import FB_TypographyControl from "@Components/typography-control";
import FB_SidebarTypography from "./SidebarTypography";
import {getFbLocalStorage, setFbLocalStorage, useAfterSave, loadGoogleFont} from "../helper";
import {getGlobalStyle, updateGlobalStyle} from "../fetch";

const TypographySettings = (props) => {
	const [typography, setTypography] = useState(props.typography);
	const [customTypography, setCustomTypography] = useState(props.customTypography);
	const [selectedHeading, setSelectedHeading] = useState('h1');
	const [deviceType, setDeviceType] = useState('Desktop');
	const [isMount, setIsMount] = useState(false);
	const [fontFamilies, setFontFamilies] = useState([]);

	// Typography elements
	const typographyElements = {
		body: 'Text',
		link: 'Link',
		button: 'Button',
		heading: 'Headings',
	}

	const TypographyHeadingElements = {
		h1: 'H1',
		h2: 'H2',
		h3: 'H3',
		h4: 'H4',
		h5: 'H5',
		h6: 'H6',
	}

	// Generate font object
	const generateFontObj = (font, size = false) => {
		let result = {}
		if (typeof font === 'object' && Object.keys(font).length > 0) {
			result = {
				...(font.fontFamily && { fontFamily: font.fontFamily }),
				...(font.fontWeight && { fontWeight: font.fontWeight }),
				...(font.textTransform && { textTransform: font.textTransform }),
				...(font.fontStyle && { fontStyle: font.fontStyle }),
				...(font.textDecoration && { textDecoration: font.textDecoration }),
				...(font.letterSpacing && { letterSpacing: `${font.letterSpacing?.[deviceType]}${font.letterSpacingUnit?.[deviceType] || 'px'}` }),
				...((size && font.fontSize) && { fontSize: `${font.fontSize?.[deviceType]}${font.fontSizeUnit?.[deviceType] || 'px'}` }),
				...((font.lineHeight) && { lineHeight: `${font.lineHeight?.[deviceType]}${font.lineHeightUnits?.[deviceType] || 'px'}` })
			}
		}

		return result
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
		const tempTypography = { ...customTypography }
		delete tempTypography[item]
		setCustomTypography({ ...tempTypography })
	};

	const setAttributes = (attr) => {
		// Check if the input is an object
		if (typeof attr === "object" && attr !== null) {
			if (attr.typography) {
				setTypography(attr.typography);
			} else if (attr.deviceType) {
				setDeviceType(attr.deviceType)
			} else {
				console.log("Unknown structure in attributes:", attr);
			}
		} else {
			console.log("Input is not a valid object:", attr);
		}
	}

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
		setIsMount(true);
	}

	const onChangeTextTransform = (value,item) => {
		setTypography(prevTypography => ({
			...prevTypography,
			[item]: {
			  	...prevTypography[item],
				textTransform: value,
			},
		}));
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
		setIsMount(true);
	}

	const onChangeLineHeight = (value,item) => {
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
		setIsMount(true);
	}

	const onChangeHeadingTextTransform = (value,item) => {
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
		setIsMount(true);
	}

	const onChangeHeadingLineHeight = (value,item) => {
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
		setIsMount(true);
	}

	const onChangeCustomTextTransform = (value,item) => {
		setCustomTypography(prevTypography => ({
			...prevTypography,
			[item]: {
				...prevTypography[item],
				textTransform: value,
			},
		}));
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
		setIsMount(true);
	}

	const onChangeCustomLineHeight = (value,item) => {
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
		setIsMount(true);
	}

	// Save to database

	// Save colors after post save
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
						setCustomTypography(response.data.data);
						localStorage.setItem('fb_custom_typography', JSON.stringify(response.data.data));
					}
				}

				if(fontFamilies) {
					const response = await updateGlobalStyle(fontFamilies, 'fb_update_fontfamilies');
					if (response.success) {
						setFontFamilies(response.data.data);
						localStorage.setItem('fb_fontFamilies', JSON.stringify(response.data.data));
					}
				}
			}
		}

		handleUpdateSettings();
	}, [isAfterSave]);


	console.log("Checking device type inside typography settings")
	console.log(deviceType)
	return (
		<TabPanel
			className="fb-blocks-color-tabs"
			activeClass="active-tab"
			tabs={[
				{name: "elements", title: "Elements"},
				{name: "custom", title: "Custom"},
			]}
		>
			{(tab) => (
				<div>
					{tab.name === "elements" && (
						<>
							<div className={'fb-global-typo-elements'}>
								<div className="fb-global-typo-elements-wrap">
									<NavigatorProvider initialPath="/">
										<NavigatorScreen path="/">
											{/* <p>Select Element to set Typography</p> */}
											{typographyElements && Object.keys(typographyElements).map((item, index) => (
												<div
													key={index}
													className="fb-custom-element fb-global-typography-element"
												>
													<NavigatorButton
														path={`/${item}`}
													>
                                                    <span
														style={generateFontObj(typography[item])}
														className="font_preview"
													>Aa</span>
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
													<NavigatorBackButton>
														<Dashicon icon="arrow-left-alt2" /> {typographyElements[item]}
													</NavigatorBackButton>
													 {/*<p className="note">Typography Controls for <strong>{item}</strong></p>*/}

													{/* Heading Typography option */}
													{item === 'heading' && (
														<>
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
																		<div
																			style={generateFontObj(typography?.[item]?.[selectedHeading], true)}
																			className="font_preview_box"
																		>Aa
																		</div>
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
																			setAttributes={setAttributes}
																		/>

																	</div>
																</div>
															))}
														</>
													)}
													{/* End Heading Typography option */}

													{/*	Not Heading Typography option*/}
													{item !== 'heading' && (
														<>
															<div className="fb-typography-settings">
																<div
																	style={generateFontObj(typography[item], true)}
																	className="font_preview_box"
																>Aa
																</div>
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
																	setAttributes={setAttributes}
																/>
															</div>
														</>
													)}

													{/* End	Not Heading Typography option*/}
												</NavigatorScreen>
											</div>
										))}
									</NavigatorProvider >
								</div>
							</div>
						</>
					)}
					{tab.name === "custom" && (
						<>
							<div className={'fb-global-typo-elements'}>
								<div className="fb-global-typo-elements-wrap">
									{customTypography && typeof customTypography === 'object' && (
										<NavigatorProvider initialPath="/">
											<NavigatorScreen path="/">
												{Object.keys(customTypography).length > 0 && Object.keys(customTypography).map((item, index) => (
													<div
														key={index}
														className="fb-custom-element fb-global-typography-element"
													>
														<NavigatorButton
															path={`/${item}`}
														>
																<span
																	style={generateFontObj(customTypography[item])}
																	className="font_preview"
																>Aa</span>
															{customTypography[item]?.name}
														</NavigatorButton>
														<Button className="fb-delete-custom-typo">
															<span
																className={'fb-delete'}
																title="Delete"
																onClick={() => deleteItem(item)}
															><Dashicon icon={'trash'}/></span>
														</Button>
													</div>
												))}

												<div className="add-custom-color">
													<Button
														className="add-custom-color-btn"
														onClick={() => setCustomTypography({
															...customTypography,
															[`fb_customtypo_${Math.random().toString(36).substring(2, 7)}`]: {
																name: `Custom Typography`,
																fontFamily: "default",
																lineHeight: {
																	Desktop: 0,
																	Tablet: 0,
																	Mobile: 0
																},
																lineHeightUnits: {
																	Desktop: 'px',
																	Tablet: 'em',
																	Mobile: '%'
																},
																fontSize: {
																	Desktop: 0,
																	Tablet: 0,
																	Mobile: 0
																},
																fontSizeUnit: {
																	Desktop: 'px',
																	Tablet: 'em',
																	Mobile: '%'
																},
																fontWeight: 0,
																fontStyle: 0,
																textTransform: 0,
																textDecoration: 0,
																letterSpacing: {
																	Desktop: 0,
																	Tablet: 0,
																	Mobile: 0
																},
																letterSpacingUnit: {
																	Desktop: 'px',
																	Tablet: 'em',
																	Mobile: '%'
																}
															}
														})}
													>
														Add Custom Typography
														<span>
															<svg width="15" height="14" viewBox="0 0 15 14"
																 fill="none"
																 xmlns="http://www.w3.org/2000/svg">
																<path d="M7.5 0.75V13.25M13.75 7L1.25 7"
																	  stroke="white"
																	  strokeWidth="1.5" strokeLinecap="round"
																	  strokeLinejoin="round"/>
															</svg>
														</span>
													</Button>
												</div>
											</NavigatorScreen>

											{Object.keys(customTypography).length > 0 && Object.keys(customTypography).map((item, index) => (
												<div
													key={index}
													className="fb-global-typography-element-content"
												>
													<NavigatorScreen path={`/${item}`}>
														<NavigatorBackButton>
															<Dashicon
																icon="arrow-left-alt2"/> {customTypography[item]?.name}
														</NavigatorBackButton>

														<div className="fb-typography-settings">
															<div
																style={generateFontObj(customTypography[item], true)}
																className="font_preview_box"
															>Aa
															</div>
																<TextControl
																	label={__('Typography Name', 'frontis-blocks')}
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
																	setAttributes={setAttributes}
																/>
														</div>
													</NavigatorScreen>
												</div>
											))}
										</NavigatorProvider>
									)}
								</div>
							</div>
						</>
					)}
				</div>
			)}
		</TabPanel>
	)
}

export default TypographySettings;
