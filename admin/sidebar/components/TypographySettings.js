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
import { loadGoogleFont } from "../helper";

const TypographySettings = () => {
	const [typography, setTypography] = useState({});
	const [customTypography, setCustomTypography] = useState({});
	const [selectedHeading, setSelectedHeading] = useState('h1');
	const [deviceType, setDeviceType] = useState('Desktop');
	const [isMount, setIsMount] = useState(false);

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

	const fontSizeUnits = {
		Desktop: 'px',
		Tablet: 'px',
		Mobile: 'px'
	}

	const letterSpacingUnits = {
		Desktop: 'px',
		Tablet: 'px',
		Mobile: 'px'
	}

	const lineHeightUnits = {
		Desktop: 'px',
		Tablet: 'px',
		Mobile: 'px'
	}

	const defaultTypos = {
		body: {
			fontFamily: 'default',
			lineHeight: {
				Desktop: 'default',
				Tablet: 'default',
				Mobile: 'default'
			},
			lineHeightUnits: {
				Desktop: 'px',
				Tablet: 'em',
				Mobile: '%'
			},
			fontSize: {
				Desktop: 'default',
				Tablet: 'default',
				Mobile: 'default'
			},
			fontSizeUnit: {
				Desktop: 'px',
				Tablet: 'em',
				Mobile: '%'
			},
			fontWeight: 'default',
			fontStyle: 'default',
			textTransform: 'default',
			textDecoration: 'default',
			letterSpacing: {
				Desktop: 'default',
				Tablet: 'default',
				Mobile: 'default'
			},
			letterSpacingUnit: {
				Desktop: 'px',
				Tablet: 'em',
				Mobile: '%'
			}
		},
		link: {
			fontFamily: 'default',
			lineHeight: {
				Desktop: 'default',
				Tablet: 'default',
				Mobile: 'default'
			},
			lineHeightUnits: {
				Desktop: 'px',
				Tablet: 'em',
				Mobile: '%'
			},
			fontSize: {
				Desktop: 'default',
				Tablet: 'default',
				Mobile: 'default'
			},
			fontSizeUnit: {
				Desktop: 'px',
				Tablet: 'em',
				Mobile: '%'
			},
			fontWeight: 'default',
			fontStyle: 'default',
			textTransform: 'default',
			textDecoration: 'default',
			letterSpacing: {
				Desktop: 'default',
				Tablet: 'default',
				Mobile: 'default'
			},
			letterSpacingUnit: {
				Desktop: 'px',
				Tablet: 'em',
				Mobile: '%'
			}
		},
		button: {
			fontFamily: 'default',
			lineHeight: {
				Desktop: 'default',
				Tablet: 'default',
				Mobile: 'default'
			},
			lineHeightUnits: {
				Desktop: 'px',
				Tablet: 'em',
				Mobile: '%'
			},
			fontSize: {
				Desktop: 'default',
				Tablet: 'default',
				Mobile: 'default'
			},
			fontSizeUnit: {
				Desktop: 'px',
				Tablet: 'em',
				Mobile: '%'
			},
			fontWeight: 'default',
			fontStyle: 'default',
			textTransform: 'default',
			textDecoration: 'default',
			letterSpacing: {
				Desktop: 'default',
				Tablet: 'default',
				Mobile: 'default'
			},
			letterSpacingUnit: {
				Desktop: 'px',
				Tablet: 'em',
				Mobile: '%'
			}
		},
		heading: {
			h1: {
				fontFamily: 'default',
				lineHeight: {
					Desktop: 'default',
					Tablet: 'default',
					Mobile: 'default'
				},
				lineHeightUnits: {
					Desktop: 'px',
					Tablet: 'em',
					Mobile: '%'
				},
				fontSize: {
					Desktop: 10,
					Tablet: 'default',
					Mobile: 'default'
				},
				fontSizeUnit: {
					Desktop: 'px',
					Tablet: 'em',
					Mobile: '%'
				},
				fontWeight: 'default',
				fontStyle: 'default',
				textTransform: 'default',
				textDecoration: 'default',
				letterSpacing: {
					Desktop: 'default',
					Tablet: 'default',
					Mobile: 'default'
				},
				letterSpacingUnit: {
					Desktop: 'px',
					Tablet: 'em',
					Mobile: '%'
				}
			},
			h2: {
				fontFamily: 'default',
				lineHeight: {
					Desktop: 'default',
					Tablet: 'default',
					Mobile: 'default'
				},
				lineHeightUnits: {
					Desktop: 'px',
					Tablet: 'em',
					Mobile: '%'
				},
				fontSize: {
					Desktop: 50,
					Tablet: 'default',
					Mobile: 'default'
				},
				fontSizeUnit: {
					Desktop: 'px',
					Tablet: 'em',
					Mobile: '%'
				},
				fontWeight: 'default',
				fontStyle: 'default',
				textTransform: 'default',
				textDecoration: 'default',
				letterSpacing: {
					Desktop: 'default',
					Tablet: 'default',
					Mobile: 'default'
				},
				letterSpacingUnit: {
					Desktop: 'px',
					Tablet: 'em',
					Mobile: '%'
				}
			},
			h3: {
				fontFamily: 'default',
				lineHeight: {
					Desktop: 'default',
					Tablet: 'default',
					Mobile: 'default'
				},
				lineHeightUnits: {
					Desktop: 'px',
					Tablet: 'em',
					Mobile: '%'
				},
				fontSize: {
					Desktop: 'default',
					Tablet: 'default',
					Mobile: 'default'
				},
				fontSizeUnit: {
					Desktop: 'px',
					Tablet: 'em',
					Mobile: '%'
				},
				fontWeight: 'default',
				fontStyle: 'default',
				textTransform: 'default',
				textDecoration: 'default',
				letterSpacing: {
					Desktop: 'default',
					Tablet: 'default',
					Mobile: 'default'
				},
				letterSpacingUnit: {
					Desktop: 'px',
					Tablet: 'em',
					Mobile: '%'
				}
			},
			h4: {
				fontFamily: 'default',
				lineHeight: {
					Desktop: 'default',
					Tablet: 'default',
					Mobile: 'default'
				},
				lineHeightUnits: {
					Desktop: 'px',
					Tablet: 'em',
					Mobile: '%'
				},
				fontSize: {
					Desktop: 'default',
					Tablet: 'default',
					Mobile: 'default'
				},
				fontSizeUnit: {
					Desktop: 'px',
					Tablet: 'em',
					Mobile: '%'
				},
				fontWeight: 'default',
				fontStyle: 'default',
				textTransform: 'default',
				textDecoration: 'default',
				letterSpacing: {
					Desktop: 'default',
					Tablet: 'default',
					Mobile: 'default'
				},
				letterSpacingUnit: {
					Desktop: 'px',
					Tablet: 'em',
					Mobile: '%'
				}
			},
			h5: {
				fontFamily: 'default',
				lineHeight: {
					Desktop: 'default',
					Tablet: 'default',
					Mobile: 'default'
				},
				lineHeightUnits: {
					Desktop: 'px',
					Tablet: 'em',
					Mobile: '%'
				},
				fontSize: {
					Desktop: 'default',
					Tablet: 'default',
					Mobile: 'default'
				},
				fontSizeUnit: {
					Desktop: 'px',
					Tablet: 'em',
					Mobile: '%'
				},
				fontWeight: 'default',
				fontStyle: 'default',
				textTransform: 'default',
				textDecoration: 'default',
				letterSpacing: {
					Desktop: 'default',
					Tablet: 'default',
					Mobile: 'default'
				},
				letterSpacingUnit: {
					Desktop: 'px',
					Tablet: 'em',
					Mobile: '%'
				}
			},
			h6: {
				fontFamily: 'default',
				lineHeight: {
					Desktop: 'default',
					Tablet: 'default',
					Mobile: 'default'
				},
				lineHeightUnits: {
					Desktop: 'px',
					Tablet: 'em',
					Mobile: '%'
				},
				fontSize: {
					Desktop: 'default',
					Tablet: 'default',
					Mobile: 'default'
				},
				fontSizeUnit: {
					Desktop: 'px',
					Tablet: 'em',
					Mobile: '%'
				},
				fontWeight: 'default',
				fontStyle: 'default',
				textTransform: 'default',
				textDecoration: 'default',
				letterSpacing: {
					Desktop: 'default',
					Tablet: 'default',
					Mobile: 'default'
				},
				letterSpacingUnit: {
					Desktop: 'px',
					Tablet: 'em',
					Mobile: '%'
				}
			}
		}
	}

	// Generate font object
	const generateFontObj = (font, size = false) => {
		let result = {}
		if (typeof font === 'object' && Object.keys(font).length > 0) {
			console.log(font)
			result = {
				...(font.fontFamily && { fontFamily: font.fontFamily }),
				...(font.fontWeight && { fontWeight: font.fontWeight }),
				...(font.textTransform && { textTransform: font.textTransform }),
				...(font.fontStyle && { fontStyle: font.fontStyle }),
				...(font.textDecoration && { textDecoration: font.textDecoration }),
				...(font.letterSpacing && { letterSpacing: `${font.letterSpacing[deviceType]}${font.letterSpacingUnit[deviceType] || 'px'}` }),
				...((size && font.fontSize) && { fontSize: `${font.fontSize[deviceType]}${font.fontSizeUnit[deviceType] || 'px'}` }),
				...((font.lineHeight) && { lineHeight: `${font.lineHeight[deviceType]}${font.lineHeightUnits[deviceType] || 'px'}` })
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
		const typography = { ...customTypography }
		delete typography[item]
		setCustomTypography({ ...typography })
	};

	useEffect(() => {
		setTypography(defaultTypos);
	}, []);

	const setAttributes = (attr) => {
		// Check if the input is an object
		if (typeof attr === "object" && attr !== null) {
			if (attr.typography) {
				setTypography(attr.typography);


				console.log(typography)
			} else if (attr.deviceType) {
				setDeviceType(attr.deviceType)
			} else {
				console.log("Unknown structure in attributes:", attr);
			}
		} else {
			console.log("Input is not a valid object:", attr);
		}
	}

	// Heading typography change
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

		loadGoogleFont(value)
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
	}

	const onChnageHeadingFontStyle = (value, item) => {
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
	}
	
	// Not heading item store

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
																			onChangeFontStyle={(value) => onChnageHeadingFontStyle(value, item)}
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
																	onChangeFontStyle={(value) => onChnageFontStyle(value, item)}
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
							{customTypography && typeof customTypography === 'object' && (
								<NavigatorProvider initialPath="/">
									<NavigatorScreen path="/">
										<div>
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
												</div>
											))}
										</div>

										<div className="add-custom-color">
											<Button
												className="add-custom-color-btn"
												onClick={() => setCustomTypography({
													...customTypography,
													[`fb_customtypo_${Math.random().toString(36).substring(2, 7)}`]: {
														name: `Custom Typography`,
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
													<Dashicon icon="arrow-left-alt2"/> {customTypography[item]?.name}
												</NavigatorBackButton>
												<p className="note">Typography Controls
													for <strong>{customTypography[item]?.name}</strong></p>

												<TextControl
													label="Typography Name"
													value={customTypography[item]?.name}
													onChange={(value) => changeCustomTypoName(item, value)}
												/>

												<div
													style={generateFontObj(customTypography[item], true)}
													className="font_preview_box"
												>Aa</div>
												{/*<FB_SidebarTypography*/}
												{/*	fontFamily={typography[item].fontFamily}*/}
												{/*	onChangeFontFamily={(value) => setAttributes({*/}
												{/*		typography: {*/}
												{/*			...typography,*/}
												{/*			[item]: {*/}
												{/*				...typography[item],*/}
												{/*				fontFamily: value,*/}
												{/*			},*/}
												{/*		},*/}
												{/*	})}*/}

												{/*	fontSize={typography[item].fontSize}*/}
												{/*	onChangeFontSize={(value) => setAttributes({*/}
												{/*		typography: {*/}
												{/*			...typography,*/}
												{/*			[item]: {*/}
												{/*				...typography[item],*/}
												{/*				fontSize: value,*/}
												{/*			},*/}
												{/*		},*/}
												{/*	})}*/}

												{/*	fontSizeUnits={typography[item].fontSizeUnit[deviceType]}*/}
												{/*	onChangeFontSizeUnit={(value) =>  setAttributes({*/}
												{/*		typography: {*/}
												{/*			...typography,*/}
												{/*			[item]: {*/}
												{/*				...typography[item],*/}
												{/*				fontSizeUnits: {*/}
												{/*					...typography[item]?.fontSizeUnit,*/}
												{/*					[deviceType]: value,*/}
												{/*				},*/}
												{/*			},*/}
												{/*		},*/}
												{/*	})}*/}

												{/*	fontWeight={typography[item].fontWeight}*/}
												{/*	onChangeFontWeight={(value) => setAttributes({*/}
												{/*		typography: {*/}
												{/*			...typography,*/}
												{/*			[item]: {*/}
												{/*				...typography[item],*/}
												{/*				fontWeight: value,*/}
												{/*			},*/}
												{/*		},*/}
												{/*	})}*/}

												{/*	fontStyle={typography[item].fontStyle}*/}
												{/*	onChangeFontStyle={(value) => setAttributes({*/}
												{/*		typography: {*/}
												{/*			...typography,*/}
												{/*			[item]: {*/}
												{/*				...typography[item],*/}
												{/*				fontStyle: value,*/}
												{/*			},*/}
												{/*		},*/}
												{/*	})}*/}

												{/*	textTransform={typography[item].textTransform}*/}
												{/*	onChangeTextTransform={(value) => setAttributes({*/}
												{/*		typography: {*/}
												{/*			...typography,*/}
												{/*			[item]: {*/}
												{/*				...typography[item],*/}
												{/*				textTransform: value,*/}
												{/*			},*/}
												{/*		},*/}
												{/*	})}*/}

												{/*	textDecoration={typography[item].textDecoration}*/}
												{/*	onChangeTextDecoration={(value) => setAttributes({*/}
												{/*		typography: {*/}
												{/*			...typography,*/}
												{/*			[item]: {*/}
												{/*				...typography[item],*/}
												{/*				textDecoration: value,*/}
												{/*			},*/}
												{/*		},*/}
												{/*	})}*/}

												{/*	letterSpacing={typography[item].letterSpacing}*/}
												{/*	onChangeLetterSpacing={(value) => setAttributes({*/}
												{/*		typography: {*/}
												{/*			...typography,*/}
												{/*			[item]: {*/}
												{/*				...typography[item],*/}
												{/*				letterSpacing: value,*/}
												{/*			},*/}
												{/*		},*/}
												{/*	})}*/}

												{/*	letterSpacingUnits={typography[item].fontSizeUnit[deviceType]}*/}
												{/*	onChangeLetterSpacingUnit={(value) => setAttributes({*/}
												{/*		typography: {*/}
												{/*			...typography,*/}
												{/*			[item]: {*/}
												{/*				...typography[item]?.fontSizeUnit,*/}
												{/*				[deviceType]: value,*/}
												{/*			},*/}
												{/*		},*/}
												{/*	})}*/}

												{/*	lineHeight={typography[item].lineHeight}*/}
												{/*	onChangeLineHeight={(value) => setAttributes({*/}
												{/*		typography: {*/}
												{/*			...typography,*/}
												{/*			[item]: {*/}
												{/*				...typography[item],*/}
												{/*				lineHeight: value,*/}
												{/*			},*/}
												{/*		},*/}
												{/*	})}*/}

												{/*	lineHeightUnits={typography[item].lineHeightUnits[deviceType]}*/}
												{/*	onChangeLineHeightUnit={(value) => setAttributes({*/}
												{/*		typography: {*/}
												{/*			...typography,*/}
												{/*			[item]: {*/}
												{/*				...typography[item],*/}
												{/*				fontSizeUnits: {*/}
												{/*					...typography[item]?.lineHeightUnits,*/}
												{/*					[deviceType]: value,*/}
												{/*				},*/}
												{/*			},*/}
												{/*		},*/}
												{/*	})}*/}

												{/*	deviceType={deviceType}*/}
												{/*	setAttributes={setAttributes}*/}
												{/*/>*/}
											</NavigatorScreen>
										</div>
									))}
								</NavigatorProvider >
							)}
						</>
					)}
				</div>
			)}
		</TabPanel>
	)
}

export default TypographySettings;
