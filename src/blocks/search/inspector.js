import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TabPanel,
	SelectControl,
	BaseControl,
	ButtonGroup,
	Button,
} from '@wordpress/components';

import { BORDER_STYLES, ICON_ALIGN } from '@Constants/fbConstants';
import { memo } from '@wordpress/element';
import FB_Range from '@Components/range';
import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_ImageControl from '@Components/image-control';
import FB_InputControl from '@Components/input-control';
import FBIconPicker from "../../components/icon-picker";
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import {useDeviceType} from "@Config/displayType";
import './editor.scss';

const Inspector = ({ attributes, setAttributes }) => {
	const {
		blockID,
		searchButtonWidth,
		searchButtonWidthUnits,
		searchButtonInputFieldWidth,
		searchButtonInputFieldWidthUnits,
		searchIconGap,
		searchIconGapUnits,

		buttonTextGlobalTypographyData,
		buttonTextGlobalTypoSwitcher,
		buttonTextGlobalTypoType,
		buttonTextGlobalTypoOption,
		buttonTextFontFamily,
		buttonTextFontSize,
		buttonTextFontSizeUnits,
		buttonTextFontWeight,
		buttonTextFontStyle,
		buttonTextTransform,
		buttonTextDecoration,
		buttonTextLetterSpacing,
		buttonTextLetterSpacingUnits,
		buttonTextLineHeight,
		buttonTextLineHeightUnits,
		
		buttonTextColorSwitcher,
		buttonTextColor,
		buttonTextColorHover,

		buttonBorder,
		buttonBorderColorSwitcher,
		buttonBorderColor,
		buttonBorderColorHover,

		buttonBorderUnits,
		buttonBorderDesktop,
		buttonBorderTablet,
		buttonBorderMobile,
		buttonBorderLink,

		buttonBorderRadiusUnits,
		buttonBorderRadiusDesktop,
		buttonBorderRadiusTablet,
		buttonBorderRadiusMobile,
		buttonBorderRadiusLink,

		buttonPaddingUnits,
		buttonPaddingDesktop,
		buttonPaddingTablet,
		buttonPaddingMobile,
		buttonPaddingLink,

		searchIconAlign,
		searchIcon,
		searchIconImageUrl,
		searchIconImageAlt,
		searchIconImageID,
		searchIconImageWidth,
		searchIconImageWidthUnits,
		searchIconImageHeight,
		searchIconImageHeightUnits,
		searchIconImageDisplay,

		/** Start Icon Styles */
		searchIconSize,
		searchIconSizeUnits,
		searchIconColorSwitcher,
		searchIconColor,
		searchIconHoverColor,

		searchIconRotateSwitcher,
		searchIconRotate,
		searchIconRotateHover,
		searchIconImageRotateSwitcher,
		searchIconImageRotate,
		searchIconImageRotateHover,
		/** End Icon Styles */

		/** Start Input Field Typography */
		inputFieldTextGlobalTypographyData,
		inputFieldTextGlobalTypoSwitcher,
		inputFieldTextGlobalTypoType,
		inputFieldTextGlobalTypoOption,
		inputFieldTextFontFamily,
		inputFieldTextFontSize,
		inputFieldTextFontSizeUnits,
		inputFieldTextFontWeight,
		inputFieldTextFontStyle,
		inputFieldTextTransform,
		inputFieldTextDecoration,
		inputFieldTextLetterSpacing,
		inputFieldTextLetterSpacingUnits,
		inputFieldTextLineHeight,
		inputFieldTextLineHeightUnits,
		
		inputFieldTextColorSwitcher,
		inputFieldTextColor,
		inputFieldTextColorHover,

		inputFieldBorder,
		inputFieldBorderColorSwitcher,
		inputFieldBorderColor,
		inputFieldBorderColorHover,

		inputFieldBorderUnits,
		inputFieldBorderDesktop,
		inputFieldBorderTablet,
		inputFieldBorderMobile,
		inputFieldBorderLink,

		inputFieldBorderRadiusUnits,
		inputFieldBorderRadiusDesktop,
		inputFieldBorderRadiusTablet,
		inputFieldBorderRadiusMobile,
		inputFieldBorderRadiusLink,

		inputFieldPaddingUnits,
		inputFieldPaddingDesktop,
		inputFieldPaddingTablet,
		inputFieldPaddingMobile,
		inputFieldPaddingLink,

		searchIconZIndex,
		searchGlobalWraperID,
		searchGlobalWraperClass,
		searchCustomCSS,	
	} = attributes;

	const deviceType = useDeviceType();
	
	/** Start Button Border */
	const handleButtonBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( buttonBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						buttonBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						buttonBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						buttonBorderMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {buttonBorderDesktop: {...buttonBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {buttonBorderTablet: {...buttonBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {buttonBorderMobile: {...buttonBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleButtonBorderCombineBtn = () => {
		setAttributes( {buttonBorderLink: !buttonBorderLink} );
	}

	const handleButtonBorderUnitsHandler = (unit) => {
		setAttributes( {
			buttonBorderUnits: {
				...buttonBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Border */

	/** Start Button Border Radius*/
	const handleButtonBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( buttonBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						buttonBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						buttonBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						buttonBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {buttonBorderRadiusDesktop: {...buttonBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {buttonBorderRadiusTablet: {...buttonBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {buttonBorderRadiusMobile: {...buttonBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleButtonBorderRadiusCombineBtn = () => {
		setAttributes( {buttonBorderRadiusLink: !buttonBorderRadiusLink} );
	}

	const handleButtonBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			buttonBorderRadiusUnits: {
				...buttonBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Button Border Radius */

	/** Start Button Padding*/
	const handleButtonPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( buttonPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						buttonPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						buttonPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						buttonPaddingMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {buttonPaddingDesktop: {...buttonPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {buttonPaddingTablet: {...buttonPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {buttonPaddingMobile: {...buttonPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleButtonPaddingCombineBtn = () => {
		setAttributes( {buttonPaddingLink: !buttonPaddingLink} );
	}

	const handleButtonPaddingUnitsHandler = (unit) => {
		setAttributes( {
			buttonPaddingUnits: {
				...buttonPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Button Padding */

	/** Start Input Field Border */
	const handleInputFieldBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( inputFieldBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						inputFieldBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						inputFieldBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						inputFieldBorderMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {inputFieldBorderDesktop: {...inputFieldBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {inputFieldBorderTablet: {...inputFieldBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {inputFieldBorderMobile: {...inputFieldBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleInputFieldBorderCombineBtn = () => {
		setAttributes( {inputFieldBorderLink: !inputFieldBorderLink} );
	}

	const handleInputFieldBorderUnitsHandler = (unit) => {
		setAttributes( {
			inputFieldBorderUnits: {
				...inputFieldBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Input Field Border */

	/** Start Input Field Border Radius*/
	const handleInputFieldBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( inputFieldBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						inputFieldBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						inputFieldBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						inputFieldBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {inputFieldBorderRadiusDesktop: {...inputFieldBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {inputFieldBorderRadiusTablet: {...inputFieldBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {inputFieldBorderRadiusMobile: {...inputFieldBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleInputFieldBorderRadiusCombineBtn = () => {
		setAttributes( {inputFieldBorderRadiusLink: !inputFieldBorderRadiusLink} );
	}

	const handleInputFieldBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			inputFieldBorderRadiusUnits: {
				...inputFieldBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Input Field Border Radius */

	/** Start Input Field Padding*/
	const handleInputFieldPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( inputFieldPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						inputFieldPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						inputFieldPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						inputFieldPaddingMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {inputFieldPaddingDesktop: {...inputFieldPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {inputFieldPaddingTablet: {...inputFieldPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {inputFieldPaddingMobile: {...inputFieldPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleInputFieldPaddingCombineBtn = () => {
		setAttributes( {inputFieldPaddingLink: !inputFieldPaddingLink} );
	}

	const handleInputFieldPaddingUnitsHandler = (unit) => {
		setAttributes( {
			inputFieldPaddingUnits: {
				...inputFieldPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Input Field Padding */

	/** Start Icon Handler */
	const iconHandler = (IconName) => {
		setAttributes({searchIcon: IconName})
	}
	/** End Icon Handler */

	return (
		<>
			<InspectorControls key="controls">
				<div className="fb-inspector-control">
					<TabPanel
						className="fb-parent-tab-panel"
						activeClass="active-tab"
						tabs={[
							{
								name: "general",
								title: "General",
								className: "fb-tab general",
							},
							{
								name: "styles",
								title: "Style",
								className: "fb-tab styles",
							},
							{
								name: "advanced",
								title: "Advanced",
								className: "fb-tab advance",
							},
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls " + tab.name}>
								{tab.name === 'general' && (
									<>
										<PanelBody title={__("General Settings", "frontis-blocks")} initialOpen={true}>
											<FB_Range
												min={1}
												max={1000}
												label={__("Button Width", "frontis-blocks")}
												rangeValue={searchButtonWidth}
												onChangeHandler={(value) => setAttributes({ searchButtonWidth: value })}
												rangeUnitHandler={(value) => setAttributes({ searchButtonWidthUnits: value })}
												deviceType={deviceType}
												units={searchButtonWidthUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={"88"}
											/>

											<FB_Range
												min={1}
												max={1500}
												label={__("Search Field Width", "frontis-blocks")}
												rangeValue={searchButtonInputFieldWidth}
												onChangeHandler={(value) => setAttributes({ searchButtonInputFieldWidth: value })}
												rangeUnitHandler={(value) => setAttributes({ searchButtonInputFieldWidthUnits: value })}
												deviceType={deviceType}
												units={searchButtonInputFieldWidthUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={"1080"}
											/>

											<FB_Range
												min={1}
												max={100}
												label={__("Icon Gap", "frontis-blocks")}
												rangeValue={searchIconGap}
												onChangeHandler={(value) => setAttributes({ searchIconGap: value })}
												rangeUnitHandler={(value) => setAttributes({ searchIconGapUnits: value })}
												deviceType={deviceType}
												units={searchIconGapUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={"5"}
											/>


											<BaseControl
												label={__("Icon", "frontis-blocks")}
													id="fb-setting-text-alignment"
													className="fb-setting-text-alignment"
											>
												<ButtonGroup
													className="fb-setting-text-alignment-group-btn"
												>
													{ICON_ALIGN.map((item, key) => (
														<Button
															key={key}
															onClick={() => setAttributes({ searchIconAlign: item.value })} 
															className={`fb-setting-text-alignment-single-btn ${searchIconAlign === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
												{(searchIconAlign === 'icon-text') && (
													<FBIconPicker value={searchIcon} setIconHandler={iconHandler} /> 
												)}

												{(searchIconAlign === 'image') && (
													<FB_ImageControl 
														globalImageUrl={searchIconImageUrl}
														setglobalImageUrl={(value) => setAttributes({ searchIconImageUrl: value })}
														globalImageAlt={searchIconImageAlt}
														setglobalImageAlt={(value) => setAttributes({ searchIconImageAlt: value })}
														globalImageID={searchIconImageID}
														setglobalImageID={(value) => setAttributes({ searchIconImageID: value })}
														globalImageSize={searchIconImageDisplay}
														setglobalImageSize={(value) => setAttributes({ searchIconImageDisplay: value })}
													/>
												)}

											</BaseControl>
										</PanelBody>
									</>
								)}
								{tab.name === "styles" && (
									<>
										<PanelBody title={__("Search Button", "frontis-blocks")} initialOpen={true}>
											<FB_TypographyControl
                                                globalTypoControlActive={true}
                                                globalTypoSwitcher={buttonTextGlobalTypoSwitcher}
                                                storeGlobalTypographyData={(value) => setAttributes({ buttonTextGlobalTypographyData: value })}

                                                globalTypoType={buttonTextGlobalTypoType}
                                                onChangeGlobalTypoType={(value) => {
                                                    setAttributes({ 
                                                        buttonTextGlobalTypoType: value, 
                                                        buttonTextGlobalTypoSwitcher: value === 'default' ? {...buttonTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...buttonTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                                                    })
                                                }}

                                                globalTypoOption={buttonTextGlobalTypoOption}
												onChangeGlobalTypoOption={(value) => setAttributes({ buttonTextGlobalTypoOption: value })}

                                                fontFamily={buttonTextFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ buttonTextFontFamily: value, buttonTextGlobalTypoSwitcher: {...buttonTextGlobalTypoSwitcher, fontFamily: value && false} })}

                                                fontSize={buttonTextFontSize}
                                                onChangeFontSize={(value) => setAttributes({ buttonTextFontSize: value, buttonTextGlobalTypoSwitcher: {...buttonTextGlobalTypoSwitcher, fontSize: value && false} })}

                                                fontSizeUnits={buttonTextFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ buttonTextFontSizeUnits: value })}

                                                fontWeight={buttonTextFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ buttonTextFontWeight: value, buttonTextGlobalTypoSwitcher: {...buttonTextGlobalTypoSwitcher, fontWeight: value && false} })}

                                                fontStyle={buttonTextFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ buttonTextFontStyle: value, buttonTextGlobalTypoSwitcher: {...buttonTextGlobalTypoSwitcher, fontStyle: value && false} })}

                                                textTransform={buttonTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ buttonTextTransform: value, buttonTextGlobalTypoSwitcher: {...buttonTextGlobalTypoSwitcher, textTransform: value && false} })}

                                                textDecoration={buttonTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ buttonTextDecoration: value, buttonTextGlobalTypoSwitcher: {...buttonTextGlobalTypoSwitcher, textDecoration: value && false} })}

                                                letterSpacing={buttonTextLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ buttonTextLetterSpacing: value, buttonTextGlobalTypoSwitcher: {...buttonTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                                                letterSpacingUnits={buttonTextLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ buttonTextLetterSpacingUnits: value })}

                                                lineHeight={buttonTextLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ buttonTextLineHeight: value, buttonTextGlobalTypoSwitcher: {...buttonTextGlobalTypoSwitcher, lineHeight: value && false} })}

                                                lineHeightUnits={buttonTextLineHeightUnits}
                                                onChangeLineHeightUnit={(value) => setAttributes({ buttonTextLineHeightUnits: value })}

                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />

											<FB_SwitcherControl
                                                label={__("Text Color", "frontis-blocks")}
                                                globalSwitcher={buttonTextColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ buttonTextColorSwitcher: value })}
                                            />

                                            {buttonTextColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={buttonTextColor}
                                                    setGlobalColor={(value) => setAttributes({ buttonTextColor: value === undefined ? '' : value })}
                                                />
                                            )}

                                            {buttonTextColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={buttonTextColorHover}
                                                    setGlobalColor={(value) => setAttributes({ buttonTextColorHover: value })}
                                                />
                                            )}

											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={buttonBorder}
												options={BORDER_STYLES}
												onChange={(value) => setAttributes({ buttonBorder: value })}
											/>

											<FB_SwitcherControl
												label={__("Border Color", "frontis-blocks")}
												globalSwitcher={buttonBorderColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ buttonBorderColorSwitcher: value })}
											/>

											{buttonBorderColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={buttonBorderColor}
													setGlobalColor={(value) => setAttributes({ buttonBorderColor: value === undefined ? '' : value })}
												/>
											)}

											{buttonBorderColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={buttonBorderColorHover}
													setGlobalColor={(value) => setAttributes({ buttonBorderColorHover: value })}
												/>
											)}

											<FB_Spacing
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleButtonBorderUnitsHandler}
												spacingUnits={buttonBorderUnits}
												spacingDesktop={buttonBorderDesktop}
												spacingTablet={buttonBorderTablet}
												spacingMobile={buttonBorderMobile}
												handleSpacingUnitHandler={handleButtonBorderUnitChange}
												spacingCombineBtn={buttonBorderLink}
												spacingCombineBtnHandler={handleButtonBorderCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleButtonBorderRadiusUnitsHandler}
												spacingUnits={buttonBorderRadiusUnits}
												spacingDesktop={buttonBorderRadiusDesktop}
												spacingTablet={buttonBorderRadiusTablet}
												spacingMobile={buttonBorderRadiusMobile}
												handleSpacingUnitHandler={handleButtonBorderRadiusUnitChange}  
												spacingCombineBtn={buttonBorderRadiusLink}
												spacingCombineBtnHandler={handleButtonBorderRadiusCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleButtonPaddingUnitsHandler}
												spacingUnits={buttonPaddingUnits}
												spacingDesktop={buttonPaddingDesktop}
												spacingTablet={buttonPaddingTablet}
												spacingMobile={buttonPaddingMobile}
												handleSpacingUnitHandler={handleButtonPaddingUnitChange}  
												spacingCombineBtn={buttonPaddingLink}
												spacingCombineBtnHandler={handleButtonPaddingCombineBtn}
												setAttributes={setAttributes}
											/>
										</PanelBody>

										{(searchIconAlign === 'icon-text') && (
											<PanelBody
												title={__("Icon Styles", "frontis-blocks")}
												initialOpen={true}
											>
												<FB_Range
													min={1}
													max={200}
													label={__("Icon Size", "frontis-blocks")}
													rangeValue={searchIconSize}
													onChangeHandler={(value) => setAttributes({ searchIconSize: value })}
													rangeUnitHandler={(value) => setAttributes({ searchIconSizeUnits: value })}
													deviceType={deviceType}
													units={searchIconSizeUnits}
													setAttributes={setAttributes}
													rangeStep={1}
													resetFallbackValue={25}
												/>

												<FB_SwitcherControl
													label={__("Icon Color", "frontis-blocks")}
													globalSwitcher={searchIconColorSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ searchIconColorSwitcher: value })}
												/>

												{searchIconColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={searchIconColor}
														setGlobalColor={(value) => setAttributes({ searchIconColor: value === undefined ? '' : value })}
													/>
												)}

												{searchIconColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={searchIconHoverColor}
														setGlobalColor={(value) => setAttributes({ searchIconHoverColor: value === undefined ? '' : value })}
													/>
												)}

												<FB_SwitcherControl
													label={__("Icon Rotation", "frontis-blocks")}
													globalSwitcher={searchIconRotateSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ searchIconRotateSwitcher: value })}
												/>

												{searchIconRotateSwitcher === 'normal' && (
													<FB_Range 
														min={-360}
														max={360}
														label={__("Icon Rotation", "frontis-blocks")}
														rangeValue={searchIconRotate}
														onChangeHandler={(value) => setAttributes({ searchIconRotate: value === 0 ? undefined : value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														isRangeUnit={false}

													/>
												)}

												{searchIconRotateSwitcher === 'hover' && (
													<FB_Range
														min={-360}
														max={360}
														label={__("Icon Rotation", "frontis-blocks")}
														rangeValue={searchIconRotateHover}
														onChangeHandler={(value) => setAttributes({ searchIconRotateHover: value === 0 ? undefined : value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														isRangeUnit={false}
													/>
												)}

											</PanelBody>
										)}
										{(searchIconAlign === 'image') &&(
											<PanelBody
												title={__("Image Styles", "frontis-blocks")}
												initialOpen={true}
											>
												<FB_Range
													min={1}
													max={200}
													label={__("Image Width", "frontis-blocks")}
													rangeValue={searchIconImageWidth}
													onChangeHandler={(value) => setAttributes({ searchIconImageWidth: value })}
													rangeUnitHandler={(value) => setAttributes({ searchIconImageWidthUnits: value })}
													deviceType={deviceType}
													units={searchIconImageWidthUnits}
													setAttributes={setAttributes}
													rangeStep={1}
													resetFallbackValue={20}
												/>

												<FB_Range
													min={1}
													max={200}
													label={__("Image Height", "frontis-blocks")}
													rangeValue={searchIconImageHeight}
													onChangeHandler={(value) => setAttributes({ searchIconImageHeight: value })}
													rangeUnitHandler={(value) => setAttributes({ searchIconImageHeightUnits: value })}
													deviceType={deviceType}
													units={searchIconImageHeightUnits}
													setAttributes={setAttributes}
													rangeStep={1}
													resetFallbackValue={20}
												/>

												<FB_SwitcherControl
													label={__("Image Rotation", "frontis-blocks")}
													globalSwitcher={searchIconImageRotateSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ searchIconImageRotateSwitcher: value })}
												/>

												{searchIconImageRotateSwitcher === 'normal' && ( 
													<FB_Range 
														min={-360}
														max={360}
														label={__("Image Rotation", "frontis-blocks")}
														rangeValue={searchIconImageRotate}
														onChangeHandler={(value) => setAttributes({ searchIconImageRotate: value === 0 ? undefined : value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														isRangeUnit={false}

													/>
												)}

												{searchIconImageRotateSwitcher === 'hover' && (
													<FB_Range
														min={-360}
														max={360}
														label={__("Image Rotation", "frontis-blocks")}
														rangeValue={searchIconImageRotateHover}
														onChangeHandler={(value) => setAttributes({ searchIconImageRotateHover: value === 0 ? undefined : value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														isRangeUnit={false}
													/>
												)}
											</PanelBody>
										)}

										<PanelBody title={__("Search Field", "frontis-blocks")} initialOpen={false}>

											<FB_TypographyControl
                                                globalTypoControlActive={true}
                                                globalTypoSwitcher={inputFieldTextGlobalTypoSwitcher}
                                                storeGlobalTypographyData={(value) => setAttributes({ inputFieldTextGlobalTypographyData: value })}

                                                globalTypoType={inputFieldTextGlobalTypoType}
                                                onChangeGlobalTypoType={(value) => {
                                                    setAttributes({ 
                                                        inputFieldTextGlobalTypoType: value, 
                                                        inputFieldTextGlobalTypoSwitcher: value === 'default' ? {...inputFieldTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...inputFieldTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                                                    })
                                                }}

                                                globalTypoOption={inputFieldTextGlobalTypoOption}
												onChangeGlobalTypoOption={(value) => setAttributes({ inputFieldTextGlobalTypoOption: value })}

                                                fontFamily={inputFieldTextFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ inputFieldTextFontFamily: value, inputFieldTextGlobalTypoSwitcher: {...inputFieldTextGlobalTypoSwitcher, fontFamily: value && false} })}

                                                fontSize={inputFieldTextFontSize}
                                                onChangeFontSize={(value) => setAttributes({ inputFieldTextFontSize: value, inputFieldTextGlobalTypoSwitcher: {...inputFieldTextGlobalTypoSwitcher, fontSize: value && false} })}

                                                fontSizeUnits={inputFieldTextFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ inputFieldTextFontSizeUnits: value })}

                                                fontWeight={inputFieldTextFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ inputFieldTextFontWeight: value, inputFieldTextGlobalTypoSwitcher: {...inputFieldTextGlobalTypoSwitcher, fontWeight: value && false} })}

                                                fontStyle={inputFieldTextFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ inputFieldTextFontStyle: value, inputFieldTextGlobalTypoSwitcher: {...inputFieldTextGlobalTypoSwitcher, fontStyle: value && false} })}

                                                textTransform={inputFieldTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ inputFieldTextTransform: value, inputFieldTextGlobalTypoSwitcher: {...inputFieldTextGlobalTypoSwitcher, textTransform: value && false} })}

                                                textDecoration={inputFieldTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ inputFieldTextDecoration: value, inputFieldTextGlobalTypoSwitcher: {...inputFieldTextGlobalTypoSwitcher, textDecoration: value && false} })}

                                                letterSpacing={inputFieldTextLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ inputFieldTextLetterSpacing: value, inputFieldTextGlobalTypoSwitcher: {...inputFieldTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                                                letterSpacingUnits={inputFieldTextLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ inputFieldTextLetterSpacingUnits: value })}

                                                lineHeight={inputFieldTextLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ inputFieldTextLineHeight: value, inputFieldTextGlobalTypoSwitcher: {...inputFieldTextGlobalTypoSwitcher, lineHeight: value && false} })}

                                                lineHeightUnits={inputFieldTextLineHeightUnits}
                                                onChangeLineHeightUnit={(value) => setAttributes({ inputFieldTextLineHeightUnits: value })}

                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />

											<FB_SwitcherControl
                                                label={__("Text Color", "frontis-blocks")}
                                                globalSwitcher={inputFieldTextColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ inputFieldTextColorSwitcher: value })}
                                            />

                                            {inputFieldTextColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={inputFieldTextColor}
                                                    setGlobalColor={(value) => setAttributes({ inputFieldTextColor: value === undefined ? '' : value })}
                                                />
                                            )}

                                            {inputFieldTextColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={inputFieldTextColorHover}
                                                    setGlobalColor={(value) => setAttributes({ inputFieldTextColorHover: value })}
                                                />
                                            )}

											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={inputFieldBorder}
												options={BORDER_STYLES}
												onChange={(value) => setAttributes({ inputFieldBorder: value })}
											/>

											<FB_SwitcherControl
												label={__("Border Color", "frontis-blocks")}
												globalSwitcher={inputFieldBorderColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ inputFieldBorderColorSwitcher: value })}
											/>

											{inputFieldBorderColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={inputFieldBorderColor}
													setGlobalColor={(value) => setAttributes({ inputFieldBorderColor: value === undefined ? '' : value })}
												/>
											)}

											{inputFieldBorderColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={inputFieldBorderColorHover}
													setGlobalColor={(value) => setAttributes({ inputFieldBorderColorHover: value })}
												/>
											)}

											<FB_Spacing
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleInputFieldBorderUnitsHandler}
												spacingUnits={inputFieldBorderUnits}
												spacingDesktop={inputFieldBorderDesktop}
												spacingTablet={inputFieldBorderTablet}
												spacingMobile={inputFieldBorderMobile}
												handleSpacingUnitHandler={handleInputFieldBorderUnitChange}
												spacingCombineBtn={inputFieldBorderLink}
												spacingCombineBtnHandler={handleInputFieldBorderCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleInputFieldBorderRadiusUnitsHandler}
												spacingUnits={inputFieldBorderRadiusUnits}
												spacingDesktop={inputFieldBorderRadiusDesktop}
												spacingTablet={inputFieldBorderRadiusTablet}
												spacingMobile={inputFieldBorderRadiusMobile}
												handleSpacingUnitHandler={handleInputFieldBorderRadiusUnitChange}  
												spacingCombineBtn={inputFieldBorderRadiusLink}
												spacingCombineBtnHandler={handleInputFieldBorderRadiusCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleInputFieldPaddingUnitsHandler}
												spacingUnits={inputFieldPaddingUnits}
												spacingDesktop={inputFieldPaddingDesktop}
												spacingTablet={inputFieldPaddingTablet}
												spacingMobile={inputFieldPaddingMobile}
												handleSpacingUnitHandler={handleInputFieldPaddingUnitChange}  
												spacingCombineBtn={inputFieldPaddingLink}
												spacingCombineBtnHandler={handleInputFieldPaddingCombineBtn}
												setAttributes={setAttributes}
											/>
										</PanelBody>
									</>
								)}
								{tab.name === "advanced" && (
									<>
										<div className="fb-setting-advanced-tab-wrapper">
											<div className="fb-setting-inner-wrapper">
												<PanelBody
													title={__("Layout", "frontis-blocks")}
													initialOpen={true}
													className='fb-setting-layout-header' 
												>
													<FB_Range
                                                        min={0}
                                                        max={10000000}
                                                        label={__("Z Index", "frontis-blocks")}
                                                        rangeValue={searchIconZIndex}
                                                        onChangeHandler={(value) => setAttributes({ searchIconZIndex: value === 0 ? undefined : value })}
                                                        deviceType={deviceType}
                                                        setAttributes={setAttributes}
                                                        rangeStep={1}
                                                        resetFallbackValue={""}
                                                        isRangeUnit={false}

                                                    />
													<FB_InputControl
                                                        label={__("CSS ID", "frontis-blocks")}
                                                        value={searchGlobalWraperID}
                                                        onChangeValue={(value) => setAttributes({ searchGlobalWraperID: value })}
                                                        helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                                                    />

                                                    <FB_InputControl
                                                        label={__("CSS Class", "frontis-blocks")}
                                                        value={searchGlobalWraperClass}
                                                        onChangeValue={(value) => setAttributes({ searchGlobalWraperClass: value })}
                                                        helpText={__("Separate with spaces key.", "frontis-blocks")}
                                                    />
												</PanelBody>
												<PanelBody
													title={__("Custom CSS", "frontis-blocks")}
													initialOpen={false}
												>
													<FB_CustomCSSEditor  
														value={searchCustomCSS}
														onChangeValue={(value) => setAttributes({ searchCustomCSS: value })}
													/>
												</PanelBody>
											</div>
										</div>
									</>
								)}
							</div>
						)}
					</TabPanel>
				</div>
			</InspectorControls>
		</>
	);
}
export default memo(Inspector);