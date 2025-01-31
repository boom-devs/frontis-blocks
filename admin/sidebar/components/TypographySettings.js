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
	__experimentalHStack as HStack,
} from "@wordpress/components";
import {useEffect, useState} from "@wordpress/element";
import FB_TypographyControl from "@Components/typography-control";
import FB_SidebarTypography from "./SidebarTypography";
import {getFbLocalStorage, setFbLocalStorage, useAfterSave, loadGoogleFont} from "../helper";
import { getTypography, updateTypography } from "../fetch";
import { STORE_NAME } from "../store";
import { useDispatch, useSelect } from '@wordpress/data';


const TypographySettings = (props) => {
	const [typography, setTypography] = useState(props.typography);
	const [customTypography, setCustomTypography] = useState(props.customTypography);
	const [selectedHeading, setSelectedHeading] = useState('h1');
	const [deviceType, setDeviceType] = useState('Desktop');
	const [isMount, setIsMount] = useState(false);
	const [ fontFamilies, setFontFamilies ] = useState([]);
	const { setTypographies } = useDispatch(STORE_NAME);
	const typographies = useSelect(select => select(STORE_NAME).getTypographies(), []);

	// Fetch initial typography values
	useEffect(() => {
		const fetchTypographySettings = async () => {
			try {
				// Get typography settings
				const typographyResponse = await getTypography();
				console.log("Initial typography response:", typographyResponse);
				if (typographyResponse) {
					setTypography(typographyResponse);
					setTypographies(typographyResponse);
				}

				// Get custom typography settings
				const customTypographyResponse = await getTypography('fb_get_custom_typography');
				if (customTypographyResponse.success) {
					setCustomTypography(customTypographyResponse.data);
				}

				// Get font families
				const fontFamiliesResponse = await getTypography('fb_get_fontfamilies');
				if (fontFamiliesResponse.success) {
					setFontFamilies(fontFamiliesResponse.data);
				}
			} catch (error) {
				console.error('Error fetching typography settings:', error);
			}
		};

		fetchTypographySettings();
	}, []);

	// Typography elements
	const typographyElements = {
		body: 'Text',
		link: 'Link',
		heading: 'Headings',
		button: 'Button',
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

		// console.log(result);

		return result;
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
				// Ensure deviceType is valid
				const validDeviceTypes = ['Desktop', 'Tablet', 'Mobile'];
				if (validDeviceTypes.includes(attr.deviceType)) {
					setDeviceType(attr.deviceType);
				}
			} else {
				console.log("Unknown structure in attributes:", attr);
			}
		} else {
			console.log("Input is not a valid object:", attr);
		}
	}

	// Single handler for all typography changes
	const handleTypographyChange = (value, item, property, type = 'regular') => {
		const isHeading = type === 'heading';
		
		let updatedTypography = { ...typography };
		
		if (isHeading) {
			// For headings, update the specific heading (h1-h6) inside the heading object
			updatedTypography = {
				...typography,
				heading: {
					...typography.heading,
					[selectedHeading]: {
						...typography.heading?.[selectedHeading],
						[property]: value
					}
				}
			};
		} else {
			// For other elements (body, link, button)
			updatedTypography = {
				...typography,
				[item]: {
					...typography[item],
					[property]: value
				}
			};
		}

		console.log('Updating typography:', updatedTypography);
		setTypography(updatedTypography);
		setIsMount(true);

		// Load Google Font if needed
		if (property === 'fontFamily' && value) {
			loadGoogleFont(value);
		}
	};

	// Regular typography handlers
	const onChangeFontFamily = (value, item) => handleTypographyChange(value, item, 'fontFamily');
	const onChangeFontSize = (value, item) => handleTypographyChange(value, item, 'fontSize');
	const onChangeFontSizeUnit = (value, item) => handleTypographyChange(value, item, 'fontSizeUnit');
	const onChangeFontWeight = (value, item) => handleTypographyChange(value, item, 'fontWeight');
	const onChangeFontStyle = (value, item) => handleTypographyChange(value, item, 'fontStyle');
	const onChangeTextDecoration = (value, item) => handleTypographyChange(value, item, 'textDecoration');
	const onChangeTextTransform = (value, item) => handleTypographyChange(value, item, 'textTransform');
	const onChangeLetterSpacing = (value, item) => handleTypographyChange(value, item, 'letterSpacing');
	const onChangeLetterSpacingUnit = (value, item) => handleTypographyChange(value, item, 'letterSpacingUnit');
	const onChangeLineHeight = (value, item) => handleTypographyChange(value, item, 'lineHeight');
	const onChangeLineHeightUnit = (value, item) => handleTypographyChange(value, item, 'lineHeightUnits');

	// Heading typography handlers
	const onChangeHeadingFontFamily = (value, item) => handleTypographyChange(value, item, 'fontFamily', 'heading');
	const onChangeHeadingFontSize = (value, item) => handleTypographyChange(value, item, 'fontSize', 'heading');
	const onChangeHeadingFontSizeUnit = (value, item) => handleTypographyChange(value, item, 'fontSizeUnit', 'heading');
	const onChangeHeadingFontWeight = (value, item) => handleTypographyChange(value, item, 'fontWeight', 'heading');
	const onChangeHeadingFontStyle = (value, item) => handleTypographyChange(value, item, 'fontStyle', 'heading');
	const onChangeHeadingTextDecoration = (value, item) => handleTypographyChange(value, item, 'textDecoration', 'heading');
	const onChangeHeadingTextTransform = (value, item) => handleTypographyChange(value, item, 'textTransform', 'heading');
	const onChangeHeadingLetterSpacing = (value, item) => handleTypographyChange(value, item, 'letterSpacing', 'heading');
	const onChangeHeadingLetterSpacingUnit = (value, item) => handleTypographyChange(value, item, 'letterSpacingUnit', 'heading');
	const onChangeHeadingLineHeight = (value, item) => handleTypographyChange(value, item, 'lineHeight', 'heading');
	const onChangeHeadingLineHeightUnit = (value, item) => handleTypographyChange(value, item, 'lineHeightUnits', 'heading');

	// Custom typography handlers
	const onChangeCustomFontFamily = (value, item) => handleTypographyChange(value, item, 'fontFamily', 'custom');
	const onChangeCustomFontSize = (value, item) => handleTypographyChange(value, item, 'fontSize', 'custom');
	const onChangeCustomFontSizeUnit = (value, item) => handleTypographyChange(value, item, 'fontSizeUnit', 'custom');
	const onChangeCustomFontWeight = (value, item) => handleTypographyChange(value, item, 'fontWeight', 'custom');
	const onChangeCustomFontStyle = (value, item) => handleTypographyChange(value, item, 'fontStyle', 'custom');
	const onChangeCustomTextDecoration = (value, item) => handleTypographyChange(value, item, 'textDecoration', 'custom');
	const onChangeCustomTextTransform = (value, item) => handleTypographyChange(value, item, 'textTransform', 'custom');
	const onChangeCustomLetterSpacing = (value, item) => handleTypographyChange(value, item, 'letterSpacing', 'custom');
	const onChangeCustomLetterSpacingUnit = (value, item) => handleTypographyChange(value, item, 'letterSpacingUnit', 'custom');
	const onChangeCustomLineHeight = (value, item) => handleTypographyChange(value, item, 'lineHeight', 'custom');
	const onChangeCustomLineHeightUnit = (value, item) => handleTypographyChange(value, item, 'lineHeightUnits', 'custom');

	// Save to database

	// Save colors after post save
	const isAfterSave = useAfterSave();

	// Save typography after changes
	useEffect(() => {
		const saveTypography = async () => {
			if (isAfterSave && isMount && typography) {
				try {
					console.log('Saving typography:', typography);
					const response = await updateTypography(typography);
					if (response.success) {
						console.log('Typography saved successfully:', response.data);
						setTypography(response.data);
						setTypographies(response.data);
					}
				} catch (error) {
					console.error('Failed to save typography:', error);
				}
			}
		};

		saveTypography();
	}, [isAfterSave, isMount, typography]);

	// Initialize typography structure
	useEffect(() => {
		if (!typography) {
			const initialTypography = {
				body: {},
				link: {},
				heading: {
					h1: {},
					h2: {},
					h3: {},
					h4: {},
					h5: {},
					h6: {}
				},
				button: {}
			};
			setTypography(initialTypography);
		}
	}, []);

	// console.log("Checking device type inside typography settings")
	// console.log(deviceType)
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
														<HStack
															direction="row"
															justify="flex-start"
														>
															<span
																style={generateFontObj(typography[item])}
																className="font_preview"
															>
																Aa
															</span>
															<span>{ typographyElements[ item ] }
																	{(typography[item] || (item === 'heading' && isHeadingSaved())) && (
																	<span className="edit_indecator"></span>
																)}
															</span>
															
														</HStack>
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
