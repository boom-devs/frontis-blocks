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
import {memo} from "react";

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
			result = {
				...(font.fontFamily && { fontFamily: font.fontFamily }),
				...(font.fontWeight && { fontWeight: font.fontWeight }),
				...(font.textTransform && { textTransform: font.textTransform }),
				...(font.fontStyle && { fontStyle: font.fontStyle }),
				...(font.textDecoration && { textDecoration: font.textDecoration }),
				...(font.letterSpacing && { letterSpacing: `${font.letterSpacing[deviceType]}${font.letterSpacingUnit[deviceType] || 'px'}` }),
				...((size && font.fontSize) && { fontSize: `${font.fontSize[deviceType]}${font.fontSizeUnit[deviceType] || 'px'}` })
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
	});

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

	console.log(typography)

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
																		{/*<FB_SidebarTypography*/}
																		{/*	fontFamily={typography?.[item]?.[selectedHeading]?.fontFamily}*/}
																		{/*	onChangeFontFamily={(value) => setAttributes({*/}
																		{/*		typography: {*/}
																		{/*			...typography,*/}
																		{/*			[item]: {*/}
																		{/*				...typography[item],*/}
																		{/*				[selectedHeading]: {*/}
																		{/*					...typography[item][selectedHeading],*/}
																		{/*					fontFamily: value,*/}
																		{/*				}*/}
																		{/*			},*/}
																		{/*		},*/}
																		{/*	})}*/}

																		{/*	fontSize={typography?.[item]?.[selectedHeading]?.fontSize}*/}
																		{/*	onChangeFontSize={(value) =>*/}
																		{/*		setAttributes({*/}
																		{/*			typography: {*/}
																		{/*				...typography,*/}
																		{/*				[item]: {*/}
																		{/*					...typography[item],*/}
																		{/*					[selectedHeading]: {*/}
																		{/*						...typography[item][selectedHeading],*/}
																		{/*						fontSize: {*/}
																		{/*							...typography[item][selectedHeading]?.fontSize, // Retain existing sizes*/}
																		{/*							[deviceType]: value[deviceType], // Update only the current device type*/}
																		{/*						},*/}
																		{/*					},*/}
																		{/*				},*/}
																		{/*			},*/}
																		{/*		})*/}
																		{/*	}*/}

																		{/*	fontSizeUnits={typography?.[item]?.[selectedHeading]?.fontSizeUnit}*/}
																		{/*	onChangeFontSizeUnit={(value) =>  setAttributes({*/}
																		{/*		typography: {*/}
																		{/*			...typography,*/}
																		{/*			[item]: {*/}
																		{/*				...typography[item],*/}
																		{/*				[selectedHeading]: {*/}
																		{/*					...typography[item][selectedHeading],*/}
																		{/*					fontSizeUnit: {*/}
																		{/*						...typography[item][selectedHeading]?.fontSizeUnit,*/}
																		{/*						[deviceType]: value[deviceType],*/}
																		{/*					},*/}
																		{/*				},*/}
																		{/*			},*/}
																		{/*		},*/}
																		{/*	})}*/}

																		{/*	fontWeight={typography?.[item]?.[selectedHeading]?.fontWeight}*/}
																		{/*	onChangeFontWeight={(value) => setAttributes({*/}
																		{/*		typography: {*/}
																		{/*			...typography,*/}
																		{/*			[item]: {*/}
																		{/*				...typography[item],*/}
																		{/*				[selectedHeading]: {*/}
																		{/*					...typography[item][selectedHeading],*/}
																		{/*					fontWeight: value,*/}
																		{/*				},*/}
																		{/*			},*/}
																		{/*		},*/}
																		{/*	})}*/}

																		{/*	fontStyle={typography?.[item]?.[selectedHeading]?.fontStyle}*/}
																		{/*	onChangeFontStyle={(value) => setAttributes({*/}
																		{/*		typography: {*/}
																		{/*			...typography,*/}
																		{/*			[item]: {*/}
																		{/*				...typography[item],*/}
																		{/*				[selectedHeading]: {*/}
																		{/*					...typography[item][selectedHeading],*/}
																		{/*					fontStyle: value,*/}
																		{/*				},*/}
																		{/*			},*/}
																		{/*		},*/}
																		{/*	})}*/}

																		{/*	textTransform={typography?.[item]?.[selectedHeading]?.textTransform}*/}
																		{/*	onChangeTextTransform={(value) => setAttributes({*/}
																		{/*		typography: {*/}
																		{/*			...typography,*/}
																		{/*			[item]: {*/}
																		{/*				...typography[item],*/}
																		{/*				[selectedHeading]: {*/}
																		{/*					...typography[item][selectedHeading],*/}
																		{/*					textTransform: value,*/}
																		{/*				},*/}
																		{/*			},*/}
																		{/*		},*/}
																		{/*	})}*/}

																		{/*	textDecoration={typography?.[item]?.[selectedHeading]?.textDecoration}*/}
																		{/*	onChangeTextDecoration={(value) => setAttributes({*/}
																		{/*		typography: {*/}
																		{/*			...typography,*/}
																		{/*			[item]: {*/}
																		{/*				...typography[item],*/}
																		{/*				[selectedHeading]: {*/}
																		{/*					...typography[item][selectedHeading],*/}
																		{/*					textDecoration: value,*/}
																		{/*				},*/}
																		{/*			},*/}
																		{/*		},*/}
																		{/*	})}*/}

																		{/*	letterSpacing={typography?.[item]?.[selectedHeading]?.letterSpacing}*/}
																		{/*	onChangeLetterSpacing={(value) => setAttributes({*/}
																		{/*		typography: {*/}
																		{/*			...typography,*/}
																		{/*			[item]: {*/}
																		{/*				...typography[item],*/}
																		{/*				[selectedHeading]: {*/}
																		{/*					...typography[item][selectedHeading],*/}
																		{/*					letterSpacing: {*/}
																		{/*						...typography[item][selectedHeading]?.letterSpacing,*/}
																		{/*						[deviceType]: value[deviceType],*/}
																		{/*					},*/}
																		{/*				},*/}
																		{/*			},*/}
																		{/*		},*/}
																		{/*	})}*/}

																		{/*	letterSpacingUnits={typography?.[item]?.[selectedHeading]?.letterSpacingUnit}*/}
																		{/*	onChangeLetterSpacingUnit={(value) => setAttributes({*/}
																		{/*		typography: {*/}
																		{/*			...typography,*/}
																		{/*			[item]: {*/}
																		{/*				...typography[item],*/}
																		{/*				[selectedHeading]: {*/}
																		{/*					...typography[item][selectedHeading],*/}
																		{/*					letterSpacingUnit: {*/}
																		{/*						...typography[item][selectedHeading]?.letterSpacingUnit,*/}
																		{/*						[deviceType]: value[deviceType],*/}
																		{/*					},*/}
																		{/*				},*/}
																		{/*			},*/}
																		{/*		},*/}
																		{/*	})}*/}

																		{/*	lineHeight={typography?.[item]?.[selectedHeading]?.lineHeight}*/}
																		{/*	onChangeLineHeight={(value) => setAttributes({*/}
																		{/*		typography: {*/}
																		{/*			...typography,*/}
																		{/*			[item]: {*/}
																		{/*				...typography[item],*/}
																		{/*				[selectedHeading]: {*/}
																		{/*					...typography[item][selectedHeading],*/}
																		{/*					lineHeight: {*/}
																		{/*						...typography[item][selectedHeading]?.lineHeight,*/}
																		{/*						[deviceType]: value[deviceType],*/}
																		{/*					},*/}
																		{/*				},*/}
																		{/*			},*/}
																		{/*		},*/}
																		{/*	})}*/}

																		{/*	lineHeightUnits={typography?.[item]?.[selectedHeading]?.lineHeightUnits}*/}
																		{/*	onChangeLineHeightUnit={(value) => setAttributes({*/}
																		{/*		typography: {*/}
																		{/*			...typography,*/}
																		{/*			[item]: {*/}
																		{/*				...typography[item],*/}
																		{/*				[selectedHeading]: {*/}
																		{/*					...typography[item][selectedHeading],*/}
																		{/*					lineHeightUnits: {*/}
																		{/*						...typography[item][selectedHeading]?.lineHeightUnits,*/}
																		{/*						[deviceType]: value[deviceType],*/}
																		{/*					},*/}
																		{/*				},*/}
																		{/*			},*/}
																		{/*		},*/}
																		{/*	})}*/}

																		{/*	deviceType={deviceType}*/}
																		{/*	setAttributes={setAttributes}*/}
																		{/*/>*/}
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
																{/*<FB_SidebarTypography*/}
																{/*	fontFamily={typography[item]?.fontFamily}*/}
																{/*	onChangeFontFamily={(value) => setAttributes({*/}
																{/*		typography: {*/}
																{/*			...typography,*/}
																{/*			[item]: {*/}
																{/*				...typography[item],*/}
																{/*				fontFamily: value,*/}
																{/*			},*/}
																{/*		},*/}
																{/*	})}*/}

																{/*	fontSize={typography[item]?.fontSize[deviceType]}*/}
																{/*	onChangeFontSize={(value) => setAttributes({*/}
																{/*		typography: {*/}
																{/*			...typography,*/}
																{/*			[item]: {*/}
																{/*				...typography[item],*/}
																{/*				fontSize: {*/}
																{/*					...typography[item].fontSize,*/}
																{/*					[deviceType]: value[deviceType],*/}
																{/*				},*/}
																{/*			},*/}
																{/*		},*/}
																{/*	})}*/}

																{/*	fontSizeUnits={typography[item]?.fontSizeUnit[deviceType]}*/}
																{/*	onChangeFontSizeUnit={(value) =>  setAttributes({*/}
																{/*		typography: {*/}
																{/*			...typography,*/}
																{/*			[item]: {*/}
																{/*				...typography[item],*/}
																{/*				fontSizeUnits: {*/}
																{/*					...typography[item]?.fontSizeUnit,*/}
																{/*					[deviceType]: value[deviceType],*/}
																{/*				},*/}
																{/*			},*/}
																{/*		},*/}
																{/*	})}*/}

																{/*	fontWeight={typography[item]?.fontWeight}*/}
																{/*	onChangeFontWeight={(value) => setAttributes({*/}
																{/*		typography: {*/}
																{/*			...typography,*/}
																{/*			[item]: {*/}
																{/*				...typography[item],*/}
																{/*				fontWeight: value,*/}
																{/*			},*/}
																{/*		},*/}
																{/*	})}*/}

																{/*	fontStyle={typography[item]?.fontStyle}*/}
																{/*	onChangeFontStyle={(value) => setAttributes({*/}
																{/*		typography: {*/}
																{/*			...typography,*/}
																{/*			[item]: {*/}
																{/*				...typography[item],*/}
																{/*				fontStyle: value,*/}
																{/*			},*/}
																{/*		},*/}
																{/*	})}*/}

																{/*	textTransform={typography[item]?.textTransform}*/}
																{/*	onChangeTextTransform={(value) => setAttributes({*/}
																{/*		typography: {*/}
																{/*			...typography,*/}
																{/*			[item]: {*/}
																{/*				...typography[item],*/}
																{/*				textTransform: value,*/}
																{/*			},*/}
																{/*		},*/}
																{/*	})}*/}

																{/*	textDecoration={typography[item]?.textDecoration}*/}
																{/*	onChangeTextDecoration={(value) => setAttributes({*/}
																{/*		typography: {*/}
																{/*			...typography,*/}
																{/*			[item]: {*/}
																{/*				...typography[item],*/}
																{/*				textDecoration: value,*/}
																{/*			},*/}
																{/*		},*/}
																{/*	})}*/}

																{/*	letterSpacing={typography[item]?.letterSpacing[deviceType]}*/}
																{/*	onChangeLetterSpacing={(value) => setAttributes({*/}
																{/*		typography: {*/}
																{/*			...typography,*/}
																{/*			[item]: {*/}
																{/*				...typography[item],*/}
																{/*				letterSpacing: {*/}
																{/*					...typography[item]?.letterSpacing,*/}
																{/*					[deviceType]: value[deviceType],*/}
																{/*				},*/}
																{/*			},*/}
																{/*		},*/}
																{/*	})}*/}

																{/*	letterSpacingUnits={typography[item]?.letterSpacingUnit[deviceType]}*/}
																{/*	onChangeLetterSpacingUnit={(value) => setAttributes({*/}
																{/*		typography: {*/}
																{/*			...typography,*/}
																{/*			[item]: {*/}
																{/*				...typography[item],*/}
																{/*				letterSpacingUnit: {*/}
																{/*					...typography[item]?.letterSpacing,*/}
																{/*					[deviceType]: value[deviceType],*/}
																{/*				},*/}
																{/*			},*/}
																{/*		},*/}
																{/*	})}*/}

																{/*	lineHeight={typography[item]?.lineHeight[deviceType]}*/}
																{/*	onChangeLineHeight={(value) => setAttributes({*/}
																{/*		typography: {*/}
																{/*			...typography,*/}
																{/*			[item]: {*/}
																{/*				...typography[item],*/}
																{/*				lineHeight: {*/}
																{/*					...typography[item]?.lineHeight,*/}
																{/*					[deviceType]: value[deviceType],*/}
																{/*				},*/}
																{/*			},*/}
																{/*		},*/}
																{/*	})}*/}

																{/*	lineHeightUnits={typography[item]?.lineHeightUnits[deviceType]}*/}
																{/*	onChangeLineHeightUnit={(value) => setAttributes({*/}
																{/*		typography: {*/}
																{/*			...typography,*/}
																{/*			[item]: {*/}
																{/*				...typography[item],*/}
																{/*				lineHeightUnits: {*/}
																{/*					...typography[item]?.lineHeightUnits,*/}
																{/*					[deviceType]: value[deviceType],*/}
																{/*				},*/}
																{/*			},*/}
																{/*		},*/}
																{/*	})}*/}

																{/*	deviceType={deviceType}*/}
																{/*	setAttributes={setAttributes}*/}
																{/*/>*/}
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

export default memo(TypographySettings);
