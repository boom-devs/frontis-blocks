import { __ } from "@wordpress/i18n";
import {
	Button,
	TextControl,
	__experimentalNavigatorProvider as NavigatorProvider,
	__experimentalNavigatorScreen as NavigatorScreen,
	__experimentalNavigatorButton as NavigatorButton,
	__experimentalNavigatorBackButton as NavigatorBackButton,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { useEffect, useState, useCallback, useMemo } from "@wordpress/element";
import { useDeviceType } from "@Config/displayType";
import FB_SidebarTypography from "./SidebarTypography";
import { loadGoogleFont, toastSuccess, toastError } from "../helper";
import { updateGlobalStyle } from "../fetch";
import FrontPreview from "./FontPreview";
import generateCSSVariables from "./GenerateRootCss";

const typographyElements = {
	body: 'Body',
	link: 'Link',
	heading: 'Headings',
	captions: 'Captions',
	button: 'Button',
};

const TypographyHeadingElements = {
	all: 'ALL',
	h1: 'H1',
	h2: 'H2',
	h3: 'H3',
	h4: 'H4',
	h5: 'H5',
	h6: 'H6',
};

const TypographySettings = (props) => {
	const [typography, setTypography] = useState(props.typography);
	const [customTypography, setCustomTypography] = useState(props.customTypography || {});
	const [selectedHeading, setSelectedHeading] = useState('all');
	const [isMount, setIsMount] = useState(false);
	const [fontFamilies, setFontFamilies] = useState({});
	const [globalTypography, setGlobalTypography] = useState(() => {
		try {
			const stored = localStorage.getItem("fb_globaltypo");
			if (stored && stored !== 'null') return JSON.parse(stored);
		} catch (e) {}
		return props.typography;
	});
	const [selectCustomTypo, setSelectCustomTypo] = useState(false);
	const [isSaving, setIsSaving] = useState(false);
	const deviceType = useDeviceType();

	// Sync state when props change
	useEffect(() => {
		if (props.typography) setTypography(props.typography);
	}, [props.typography]);

	useEffect(() => {
		if (props.customTypography) setCustomTypography(props.customTypography);
	}, [props.customTypography]);

	// Initial load of global typography from localStorage if available
	useEffect(() => {
		try {
			const globalTypoData = localStorage.getItem("fb_globaltypo");
			if (globalTypoData && globalTypoData !== 'null') {
				setGlobalTypography(JSON.parse(globalTypoData));
			}
		} catch (e) {}
	}, []);

	// Debounced generate root css variables whenever globalTypography or deviceType changes
	useEffect(() => {
		if (!globalTypography) return;
		const timer = setTimeout(() => {
			generateCSSVariables(globalTypography, deviceType);
		}, 60);
		return () => clearTimeout(timer);
	}, [globalTypography, deviceType]);

	const isHeadingSaved = useCallback(() => {
		const typoKeys = typography ? Object.keys(typography) : [];
		if (typoKeys.length > 0) {
			return typoKeys.some((str) => str.startsWith('h'));
		}
		return false;
	}, [typography]);

	const changeCustomTypoName = useCallback((key, value) => {
		setCustomTypography((prev) => ({
			...prev,
			[key]: {
				...prev[key],
				name: value,
			},
		}));
		setIsMount(true);
	}, []);

	const deleteItem = useCallback((item) => {
		setCustomTypography((prev) => {
			const updated = { ...prev };
			delete updated[item];
			return updated;
		});
		setGlobalTypography((prev) => {
			const updated = { ...prev };
			delete updated[item];
			return updated;
		});
		setIsMount(true);
	}, []);

	// Unified field updater for standard items, headings, and custom typography
	const updateTypographyField = useCallback((type, item, field, value) => {
		const isHeading = type === 'heading';
		const isCustom = type === 'custom';
		const targetKey = isHeading ? selectedHeading : item;

		// 1. Update typography / customTypography state
		if (isCustom) {
			setCustomTypography((prev) => {
				const current = prev?.[item] || {};
				let updatedField;

				if (field === 'fontSize') {
					updatedField = { ...current.fontSize, [deviceType]: parseInt(value[deviceType], 10) || 0 };
				} else if (field === 'fontSizeUnit') {
					updatedField = { ...current.fontSizeUnit, [deviceType]: value[deviceType] };
				} else if (field === 'letterSpacing') {
					updatedField = { ...current.letterSpacing, [deviceType]: value[deviceType] };
				} else if (field === 'letterSpacingUnit') {
					updatedField = { ...current.letterSpacingUnit, [deviceType]: value[deviceType] };
				} else if (field === 'lineHeight') {
					updatedField = { ...current.lineHeight, [deviceType]: value[deviceType] };
				} else if (field === 'lineHeightUnits') {
					updatedField = { ...current.lineHeightUnits, [deviceType]: value[deviceType] };
				} else {
					updatedField = value;
				}

				return {
					...prev,
					[item]: {
						...current,
						[field]: updatedField,
					},
				};
			});
		} else {
			setTypography((prev) => {
				const currentItem = prev?.[item] || {};

				if (isHeading) {
					const currentHeading = currentItem?.[selectedHeading] || {};
					let updatedField;

					if (field === 'fontSize') {
						updatedField = { ...currentHeading.fontSize, [deviceType]: parseInt(value[deviceType], 10) || 0 };
					} else if (field === 'fontSizeUnit') {
						updatedField = { ...currentHeading.fontSizeUnit, [deviceType]: value[deviceType] };
					} else if (field === 'letterSpacing') {
						updatedField = { ...currentHeading.letterSpacing, [deviceType]: value[deviceType] };
					} else if (field === 'letterSpacingUnit') {
						updatedField = { ...currentHeading.letterSpacingUnit, [deviceType]: value[deviceType] };
					} else if (field === 'lineHeight') {
						updatedField = { ...currentHeading.lineHeight, [deviceType]: value[deviceType] };
					} else if (field === 'lineHeightUnits') {
						updatedField = { ...currentHeading.lineHeightUnits, [deviceType]: value[deviceType] };
					} else {
						updatedField = value;
					}

					return {
						...prev,
						[item]: {
							...currentItem,
							[selectedHeading]: {
								...currentHeading,
								[field]: updatedField,
							},
						},
					};
				}

				let updatedField;
				if (field === 'fontSize') {
					updatedField = { ...currentItem.fontSize, [deviceType]: parseInt(value[deviceType], 10) || 0 };
				} else if (field === 'fontSizeUnit') {
					updatedField = { ...currentItem.fontSizeUnit, [deviceType]: value[deviceType] };
				} else if (field === 'letterSpacing') {
					updatedField = { ...currentItem.letterSpacing, [deviceType]: value[deviceType] };
				} else if (field === 'letterSpacingUnit') {
					updatedField = { ...currentItem.letterSpacingUnit, [deviceType]: value[deviceType] };
				} else if (field === 'lineHeight') {
					updatedField = { ...currentItem.lineHeight, [deviceType]: value[deviceType] };
				} else if (field === 'lineHeightUnits') {
					updatedField = { ...currentItem.lineHeightUnits, [deviceType]: value[deviceType] };
				} else {
					updatedField = value;
				}

				return {
					...prev,
					[item]: {
						...currentItem,
						[field]: updatedField,
					},
				};
			});
		}

		// 2. Extra side-effects (e.g. font loading)
		if (field === 'fontFamily' && value) {
			loadGoogleFont(value);
			if (isHeading) {
				setFontFamilies((prev) => ({
					...prev,
					heading: { ...(prev?.heading || {}), [selectedHeading]: value },
				}));
			} else {
				setFontFamilies((prev) => ({
					...prev,
					[item]: value,
				}));
			}
		}

		// 3. Update globalTypography state for CSS variable generation
		setGlobalTypography((prev) => {
			const currentTarget = prev?.[targetKey] || {};

			if (field === 'fontFamily') {
				return {
					...prev,
					[targetKey]: {
						...currentTarget,
						fontFamily: {
							variable: `--fb-global-${targetKey}--font-family`,
							value: value,
						},
					},
				};
			}

			if (field === 'fontSize') {
				return {
					...prev,
					[targetKey]: {
						...currentTarget,
						fontSize: {
							...(currentTarget.fontSize || {}),
							variable: `--fb-global-${targetKey}--font-size`,
							value: value,
							unit: currentTarget.fontSize?.unit || { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
						},
					},
				};
			}

			if (field === 'fontSizeUnit') {
				return {
					...prev,
					[targetKey]: {
						...currentTarget,
						fontSize: {
							...(currentTarget.fontSize || {}),
							unit: value,
						},
					},
				};
			}

			if (field === 'fontWeight') {
				return {
					...prev,
					[targetKey]: {
						...currentTarget,
						fontWeight: {
							variable: `--fb-global-${targetKey}--font-weight`,
							value: value,
						},
					},
				};
			}

			if (field === 'fontStyle') {
				return {
					...prev,
					[targetKey]: {
						...currentTarget,
						fontStyle: {
							variable: `--fb-global-${targetKey}--font-style`,
							value: value,
						},
					},
				};
			}

			if (field === 'textDecoration') {
				return {
					...prev,
					[targetKey]: {
						...currentTarget,
						textDecoration: {
							variable: `--fb-global-${targetKey}--text-decoration`,
							value: value,
						},
					},
				};
			}

			if (field === 'textTransform') {
				return {
					...prev,
					[targetKey]: {
						...currentTarget,
						textTransform: {
							variable: `--fb-global-${targetKey}--text-transform`,
							value: value,
						},
					},
				};
			}

			if (field === 'letterSpacing') {
				return {
					...prev,
					[targetKey]: {
						...currentTarget,
						letterSpacing: {
							...(currentTarget.letterSpacing || {}),
							variable: `--fb-global-${targetKey}--letter-spacing`,
							value: value,
							unit: currentTarget.letterSpacing?.unit || { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
						},
					},
				};
			}

			if (field === 'letterSpacingUnit') {
				return {
					...prev,
					[targetKey]: {
						...currentTarget,
						letterSpacing: {
							...(currentTarget.letterSpacing || {}),
							unit: value,
						},
					},
				};
			}

			if (field === 'lineHeight') {
				return {
					...prev,
					[targetKey]: {
						...currentTarget,
						lineHeight: {
							...(currentTarget.lineHeight || {}),
							variable: `--fb-global-${targetKey}--line-height`,
							value: value,
							unit: currentTarget.lineHeight?.unit || { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
						},
					},
				};
			}

			if (field === 'lineHeightUnits') {
				return {
					...prev,
					[targetKey]: {
						...currentTarget,
						lineHeight: {
							...(currentTarget.lineHeight || {}),
							unit: value,
						},
					},
				};
			}

			return prev;
		});

		setIsMount(true);
	}, [deviceType, selectedHeading]);

	// Helper to bind all handlers cleanly for FB_SidebarTypography
	const getHandlers = useCallback((type, item) => ({
		onChangeFontFamily: (val) => updateTypographyField(type, item, 'fontFamily', val),
		onChangeFontSize: (val) => updateTypographyField(type, item, 'fontSize', val),
		onChangeFontSizeUnit: (val) => updateTypographyField(type, item, 'fontSizeUnit', val),
		onChangeFontWeight: (val) => updateTypographyField(type, item, 'fontWeight', val),
		onChangeFontStyle: (val) => updateTypographyField(type, item, 'fontStyle', val),
		onChangeTextTransform: (val) => updateTypographyField(type, item, 'textTransform', val),
		onChangeTextDecoration: (val) => updateTypographyField(type, item, 'textDecoration', val),
		onChangeLetterSpacing: (val) => updateTypographyField(type, item, 'letterSpacing', val),
		onChangeLetterSpacingUnit: (val) => updateTypographyField(type, item, 'letterSpacingUnit', val),
		onChangeLineHeight: (val) => updateTypographyField(type, item, 'lineHeight', val),
		onChangeLineHeightUnit: (val) => updateTypographyField(type, item, 'lineHeightUnits', val),
	}), [updateTypographyField]);

	// Parallel saving of all typography options
	const handleManualSave = useCallback(async () => {
		try {
			setIsSaving(true);
			const savePromises = [];

			if (typography) {
				savePromises.push(
					updateGlobalStyle(typography, 'fb_update_typography').then((res) => {
						if (res?.success) {
							setTypography(res.data.data);
							try { localStorage.setItem('fb_typography', JSON.stringify(res.data.data)); } catch (e) {}
						}
					})
				);
			}

			if (customTypography) {
				savePromises.push(
					updateGlobalStyle(customTypography, 'fb_update_custom_typography').then((res) => {
						if (res?.success) {
							setCustomTypography(res.data.data || {});
							try { localStorage.setItem('fb_custom_typography', JSON.stringify(res.data.data)); } catch (e) {}
						}
					})
				);
			}

			if (globalTypography) {
				savePromises.push(
					updateGlobalStyle(globalTypography, 'fb_update_globaltypo').then((res) => {
						if (res?.success) {
							setGlobalTypography(res.data.data);
							try { localStorage.setItem('fb_globaltypo', JSON.stringify(res.data.data)); } catch (e) {}
						}
					})
				);
			}

			if (fontFamilies && Object.keys(fontFamilies).length > 0) {
				savePromises.push(
					updateGlobalStyle(fontFamilies, 'fb_update_fontfamilies').then((res) => {
						if (res?.success) {
							setFontFamilies(res.data.data);
							try { localStorage.setItem('fb_fontFamilies', JSON.stringify(res.data.data)); } catch (e) {}
						}
					})
				);
			}

			await Promise.all(savePromises);
			setIsMount(false);
			toastSuccess(__("Typography settings saved successfully", "frontis-blocks"));
		} catch (error) {
			console.error("Error saving typography settings:", error);
			toastError(__("Failed to save typography settings", "frontis-blocks"));
		} finally {
			setIsSaving(false);
		}
	}, [typography, customTypography, globalTypography, fontFamilies]);

	return (
		<>
			<div className="fb-typography-panel">
				{/* Typography Elements Section */}
				<div className="fb-panel-section">
					<h3 className="fb-panel-heading">Element</h3>
					<div className={'fb-global-typo-elements'}>
						<div className="fb-global-typo-elements-wrap">
							<NavigatorProvider initialPath="/">
								<NavigatorScreen path="/">
									{Object.keys(typographyElements).map((item, index) => (
										<div
											key={index}
											className="fb-custom-element fb-global-typography-element"
										>
											<NavigatorButton path={`/${item}`}>
												<span className="font_preview">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

								{Object.keys(typographyElements).map((item, index) => (
									<div
										key={index}
										className="fb-global-typography-element-content"
									>
										<NavigatorScreen path={`/${item}`}>
											<NavigatorBackButton className="fb-global-back">
												<span>
													<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10.5 13.5L5.5 8.5L10.5 3.5" stroke="currentcolor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
													</svg>
												</span> {typographyElements[item]}
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
														{Object.keys(TypographyHeadingElements).map((heading, headingIndex) => (
															<ToggleGroupControlOption
																key={headingIndex}
																className={`fb-global-typography-element-heading ${(typography?.[heading] || typography?.[item]?.[heading]) ? 'edited' : ''}`}
																label={TypographyHeadingElements[heading]}
																value={heading}
															/>
														))}
														<span className="fb-global-typography-empty-heading"></span>
													</ToggleGroupControl>

													{/* Render only active selectedHeading controls for 7x render speedup */}
													<div className="fb-typography-settings">
														<FB_SidebarTypography
															key={selectedHeading}
															fontFamily={typography?.[item]?.[selectedHeading]?.fontFamily}
															fontSize={typography?.[item]?.[selectedHeading]?.fontSize}
															fontSizeUnits={typography?.[item]?.[selectedHeading]?.fontSizeUnit}
															fontWeight={typography?.[item]?.[selectedHeading]?.fontWeight}
															fontStyle={typography?.[item]?.[selectedHeading]?.fontStyle}
															textTransform={typography?.[item]?.[selectedHeading]?.textTransform}
															textDecoration={typography?.[item]?.[selectedHeading]?.textDecoration}
															letterSpacing={typography?.[item]?.[selectedHeading]?.letterSpacing}
															letterSpacingUnits={typography?.[item]?.[selectedHeading]?.letterSpacingUnit}
															lineHeight={typography?.[item]?.[selectedHeading]?.lineHeight}
															lineHeightUnits={typography?.[item]?.[selectedHeading]?.lineHeightUnits}
															deviceType={deviceType}
															heading={selectedHeading}
															{...getHandlers('heading', 'heading')}
														/>
													</div>
												</>
											)}

											{/* Non-Heading Typography option */}
											{item !== 'heading' && (
												<div className="fb-typography-settings">
													<FrontPreview fontProps={typography?.[item]} deviceType={deviceType} fontSize={true} />
													<FB_SidebarTypography
														key={item}
														fontFamily={typography?.[item]?.fontFamily}
														fontSize={typography?.[item]?.fontSize}
														fontSizeUnits={typography?.[item]?.fontSizeUnit}
														fontWeight={typography?.[item]?.fontWeight}
														fontStyle={typography?.[item]?.fontStyle}
														textTransform={typography?.[item]?.textTransform}
														textDecoration={typography?.[item]?.textDecoration}
														letterSpacing={typography?.[item]?.letterSpacing}
														letterSpacingUnits={typography?.[item]?.letterSpacingUnit}
														lineHeight={typography?.[item]?.lineHeight}
														lineHeightUnits={typography?.[item]?.lineHeightUnits}
														deviceType={deviceType}
														{...getHandlers('standard', item)}
													/>
												</div>
											)}
										</NavigatorScreen>
									</div>
								))}
							</NavigatorProvider>
						</div>
					</div>
				</div>

				{/* Custom Typography Section */}
				<div className="fb-panel-section">
					<div className="fb-panel-heading-wrapper">
						<h3 className="fb-panel-heading">Custom</h3>
						{!selectCustomTypo && (
							<div className="add-custom-color">
								<Button
									className="add-custom-color-btn"
									onClick={() => setCustomTypography({
										...customTypography,
										[`fb_customtypo_${Math.random().toString(36).substring(2, 7)}`]: {
											name: `Custom Typography`,
											fontFamily: "default",
											lineHeight: { Desktop: '', Tablet: '', Mobile: '' },
											lineHeightUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
											fontSize: { Desktop: '', Tablet: '', Mobile: '' },
											fontSizeUnit: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
											fontWeight: '',
											fontStyle: '',
											textTransform: '',
											textDecoration: '',
											letterSpacing: { Desktop: '', Tablet: '', Mobile: '' },
											letterSpacingUnit: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
										},
									})}
								>
									<span>
										<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M7.5 0.75V13.25M13.75 7L1.25 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</span>
								</Button>
							</div>
						)}
					</div>

					<div className={'fb-global-typo-elements'}>
						<div className="fb-global-typo-elements-wrap">
							{customTypography && typeof customTypography === 'object' && (
								<NavigatorProvider initialPath="/">
									<NavigatorScreen path="/">
										{Object.keys(customTypography || {}).length > 0 && (
											<div className="fb-custom-element-wrapper">
												{Object.keys(customTypography).map((item, index) => (
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
																<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
																	<path d="M13 4.16675L12.5869 10.8501C12.4813 12.5577 12.4285 13.4115 12.0005 14.0253C11.7889 14.3288 11.5165 14.5849 11.2005 14.7774C10.5614 15.1667 9.706 15.1667 7.99513 15.1667C6.28208 15.1667 5.42553 15.1667 4.78603 14.7767C4.46987 14.5839 4.19733 14.3273 3.98579 14.0233C3.55792 13.4085 3.5063 12.5535 3.40307 10.8435L3 4.16675" stroke="#E43242" strokeLinecap="round" />
																	<path d="M2 4.16659H14M10.7038 4.16659L10.2487 3.22774C9.9464 2.60409 9.7952 2.29227 9.53447 2.09779C9.47667 2.05465 9.4154 2.01628 9.35133 1.98305C9.0626 1.83325 8.71607 1.83325 8.023 1.83325C7.31253 1.83325 6.95733 1.83325 6.66379 1.98933C6.59873 2.02393 6.53665 2.06385 6.47819 2.1087C6.21443 2.31105 6.06709 2.63429 5.77241 3.28076L5.36861 4.16659" stroke="#E43242" strokeLinecap="round" />
																	<path d="M6.3335 11.5V7.5" stroke="#E43242" strokeLinecap="round" />
																	<path d="M9.6665 11.5V7.5" stroke="#E43242" strokeLinecap="round" />
																</svg>
															</span>
														</Button>
													</div>
												))}
											</div>
										)}
									</NavigatorScreen>

									{Object.keys(customTypography).map((item, index) => (
										<div
											key={index}
											className="fb-global-typography-element-content"
										>
											<NavigatorScreen path={`/${item}`}>
												<NavigatorBackButton onClick={() => setSelectCustomTypo(false)}>
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
														<path d="M10.5 13.5L5.5 8.5L10.5 3.5" stroke="currentcolor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
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
														key={item}
														fontFamily={customTypography?.[item]?.fontFamily}
														fontSize={customTypography?.[item]?.fontSize}
														fontSizeUnits={customTypography?.[item]?.fontSizeUnit}
														fontWeight={customTypography?.[item]?.fontWeight}
														fontStyle={customTypography?.[item]?.fontStyle}
														textTransform={customTypography?.[item]?.textTransform}
														textDecoration={customTypography?.[item]?.textDecoration}
														letterSpacing={customTypography?.[item]?.letterSpacing}
														letterSpacingUnits={customTypography?.[item]?.letterSpacingUnit}
														lineHeight={customTypography?.[item]?.lineHeight}
														lineHeightUnits={customTypography?.[item]?.lineHeightUnits}
														deviceType={deviceType}
														{...getHandlers('custom', item)}
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
				<div className="fb-save-settings-wrapper">
					<Button
						isPrimary
						isBusy={isSaving}
						disabled={isSaving}
						onClick={handleManualSave}
						className="fb-save-settings-btn"
					>
						{isSaving ? __('Saving Typography...', 'frontis-blocks') : __('Save Typography Settings', 'frontis-blocks')}
					</Button>
				</div>
			</div>
		</>
	);
};

export default TypographySettings;
