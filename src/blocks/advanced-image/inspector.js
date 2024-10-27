import {__} from '@wordpress/i18n';
import {
	InspectorControls
} from '@wordpress/block-editor';

import {
	SelectControl,
	PanelBody,
	TabPanel,
	BaseControl,
	Button,
	ButtonGroup,
	ToggleControl,
	TextareaControl,
	Dropdown,
	Dashicon,
	RangeControl,
	ColorPicker,
	ColorPalette, TextControl
} from '@wordpress/components';

import {useState, useEffect} from "@wordpress/element";
import FB_ResponsiveControl from '@Components/responsive-control';
import './editor.scss';
import {BORDER_STYLES, NORMAL_HOVER, UNIT_TYPES} from "../advanced-button/constants/constants";
import {FONT_FAMILYS, HEADING, TEXT_ALIGN} from "@Blocks/advanced-heading/constants/constants";
import FB_Range from "@Components/range";

export default function Inspector({attributes, setAttributes, clientId}) {
	const {
		blockID,
		deviceType,
		DeviceType,
		imageStyle,
		displayCaption,
		imageSize,
		imageWidth,
		horizontalAlign,
		borderType,
		normalBorderColor,
		borderStyle,
		normalBorderRadUnit,
		normalBorderRad,
		normalBorderRadiusLink,
		autoHeightSwitch,
		autoFitSwitch,
		linkSwitch,
		captionAlignment,
		mediaHeight,
		mediaSize,
		mediaSizeUnits,
		mediaHeightUnits,
		linkUrl,
		linkTargetUrl,
		imageHover,
		imageFit,
		displayTitle,
		titleText,
		titleTag,
		HeadingFontFamily,
		HeadingFontSize,
		HeadingFontSizeUnits,
		HeadingFontWeight,
		HeadingFontStyle,
		HeadingTextTransform,
		HeadingTextDecoration,
		HeadingLetterSpacing,
		HeadingLetterSpacingUnits,
		HeadingLineHeight,
		HeadingLineHeightUnits,
		HeadingColorSwitcher,
		HeadingColor,
		HeadingHoverColor,
		HeadingBackgroundColor,
		HeadingBorder,
		HeadingBorderColor,
		HeadingBorderHoverColor,
		HeadingBorderColorSwitcher,
		HeadingBorderUnits,
		HeadingDesktopBorderWidth,
		HeadingTabBorderWidth,
		HeadingMobileBorderWidth,
		HeadingBorderLink,
		HeadingBorderRadiusUnits,
		HeadingDesktopBorderRadiusWidth,
		HeadingTabBorderRadiusWidth,
		HeadingMobileBorderRadiusWidth,
		HeadingBorderRadiusLink,
		HeadingPaddingUnits,
		HeadingDesktopPadding,
		HeadingTabPadding,
		HeadingMobilePadding,
		HeadingPaddingLink,
		HeadingMarginUnits,
		HeadingDesktopMargin,
		HeadingTabMargin,
		HeadingMobileMargin,
		HeadingMarginLink,
		titlePosition,
		titleHoverEffects
	} = attributes;


	useEffect(() => {
		if (clientId && typeof clientId === 'string') {
			setAttributes({
				blockID: "fb-advanced-image-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	// Handle device
	const handleDevice = (device) => {
		setAttributes({deviceType: device})
	}

	const mediaSizeHandler = (value) => {
		setAttributes({mediaSize: value});
	};
	const mediaHeightHandler = (value) => {
		setAttributes({mediaHeight: value});
	};

	const mediaSizeUnitsHandler = (value) => {
		setAttributes({mediaSizeUnits: value});
	};
	const mediaHeightUnitsHandler = (value) => {
		setAttributes({mediaHeightUnits: value});
	};

	/** Function to handle ButtonBorderRadiusLink toggle */
	const handleImageBorderRadiusWidthLinkToggle = () => {
		setAttributes({normalBorderRadiusLink: !normalBorderRadiusLink})
	};

	/** Function to handle input change */
	const handleBorderRadius = (e, direction) => {
		const value = e.target.value;
		switch (DeviceType) {
			case 'Desktop':
				setAttributes({normalBorderRad: {...normalBorderRad, [direction]: value}});
				break;
			case 'Tablet':
				setAttributes({normalBorderRad: {...normalBorderRad, [direction]: value}});
				break;
			case 'Mobile':
				setAttributes({normalBorderRad: {...normalBorderRad, [direction]: value}});
				break;
			default:
				break;
		}

		/** if ButtonBorderRadiusLink is true */
		if (normalBorderRadiusLink) {
			updateAllBorderRadiusWidth(value, DeviceType);
		}
	};

	/** Function to update all Border Width values */
	const updateImageBorderRadiusWidth = (value, device) => {
		switch (device) {
			case 'Desktop':
				setAttributes({
					ButtonDesktopBorderRadiusWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					ButtonTabBorderRadiusWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					ButtonMobileBorderRadiusWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			default:
				break;
		}
	};

	/** Start Padding */
	const [previousPadding, setPreviousPadding] = useState(HeadingDesktopPadding);
	/** Function to update all padding values */
	const updateAllPadding = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					HeadingDesktopPadding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					HeadingTabPadding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					HeadingMobilePadding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			default:
				break;
		}
	};

	/** Function to handle input change */
	const handlePaddingInputChange = (e, direction) => {
		const value = e.target.value;
		switch(DeviceType) {
			case 'Desktop':
				setAttributes({ HeadingDesktopPadding: { ...HeadingDesktopPadding, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ HeadingTabPadding: { ...HeadingTabPadding, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ HeadingMobilePadding: { ...HeadingMobilePadding, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all padding values if HeadingPaddingLink is true */
		if (HeadingPaddingLink) {
			updateAllPadding(value, DeviceType);
		}
	};

	/** Function to handle HeadingPaddingLink toggle */
	const handleHeadingPaddingLinkToggle = () => {
		if (!HeadingPaddingLink) {
			setAttributes({ HeadingDesktopPadding: previousPadding });
		}
		/** setHeadingPaddingLink(!HeadingPaddingLink) */
		setAttributes({HeadingPaddingLink: !HeadingPaddingLink})
	};

	/** Update previousPadding state when padding changes */
	useEffect(() => {
		setPreviousPadding(HeadingDesktopPadding);
	}, [HeadingDesktopPadding]);

	/** Function to handle device click for padding */
	const handlePaddingDeviceClick = (device) => {
		setAttributes({ DeviceType: device });
	};

	/** Default padding for desktop (using desktop_padding) */
	const padding = `${HeadingDesktopPadding.top}${HeadingPaddingUnits} ${HeadingDesktopPadding.right}${HeadingPaddingUnits} ${HeadingDesktopPadding.bottom}${HeadingPaddingUnits} ${HeadingDesktopPadding.left}${HeadingPaddingUnits}`;
	/** End Padding */

	/** Start Margin */
	const [previousMargin, setPreviousMargin] = useState(HeadingDesktopMargin);
	/** Function to update all margin values */
	const updateAllMargin = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					HeadingDesktopMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					HeadingTabMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					HeadingMobileMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			default:
				break;
		}
	};

	/** Function to handle input change */
	const handleMarginInputChange = (e, direction) => {
		const value = e.target.value;
		switch(DeviceType) {
			case 'Desktop':
				setAttributes({ HeadingDesktopMargin: { ...HeadingDesktopMargin, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ HeadingTabMargin: { ...HeadingTabMargin, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ HeadingMobileMargin: { ...HeadingMobileMargin, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all margin values if marginLink is true */
		if (HeadingMarginLink) {
			updateAllMargin(value, DeviceType);
		}
	};

	/** Function to handle marginLink toggle */
	const handleMarginLinkToggle = () => {
		if (!HeadingMarginLink) {
			setAttributes({ HeadingDesktopMargin: previousMargin });
		}
		/** setmarginLink(!marginLink) */
		setAttributes({HeadingMarginLink: !HeadingMarginLink})
	};

	/** Update previousMargin state when margin changes */
	useEffect(() => {
		setPreviousMargin(HeadingDesktopMargin);
	}, [HeadingDesktopMargin]);

	/** Function to handle device click for margin */
	const handleMarginDeviceClick = (device) => {
		setAttributes({ DeviceType: device });
	};

	/** Default margin for desktop (using desktop_margin) */
	const margin = `${HeadingDesktopMargin.top}${HeadingPaddingUnits} ${HeadingDesktopMargin.right}${HeadingPaddingUnits} ${HeadingDesktopMargin.bottom}${HeadingPaddingUnits} ${HeadingDesktopMargin.left}${HeadingPaddingUnits}`;
	/** End Margin */

	/** Start Border Width */
	const [previousBorderWidth, setPreviousBorderWidth] = useState(HeadingDesktopBorderWidth);
	/** Function to update all Border Width values */
	const updateAllBorderWidth = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					HeadingDesktopBorderWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					HeadingTabBorderWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					HeadingMobileBorderWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			default:
				break;
		}
	};

	/** Function to handle input change */
	const handleBorderWidthInputChange = (e, direction) => {
		const value = e.target.value;
		switch(DeviceType) {
			case 'Desktop':
				setAttributes({ HeadingDesktopBorderWidth: { ...HeadingDesktopBorderWidth, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ HeadingTabBorderWidth: { ...HeadingTabBorderWidth, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ HeadingMobileBorderWidth: { ...HeadingMobileBorderWidth, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all padding values if HeadingBorderLink is true */
		if (HeadingBorderLink) {
			updateAllBorderWidth(value, DeviceType);
		}
	};

	/** Function to handle HeadingBorderLink toggle */
	const handleBorderWidthLinkToggle = () => {
		if (!HeadingBorderLink) {
			setAttributes({ HeadingDesktopBorderWidth: previousBorderWidth });
		}
		/** setHeadingBorderLinkLink(!HeadingBorderLink) */
		setAttributes({HeadingBorderLink: !HeadingBorderLink})
	};

	/** Update previousborderWidth state when Border Width changes */
	useEffect(() => {
		setPreviousBorderWidth(HeadingDesktopBorderWidth);
	}, [HeadingDesktopBorderWidth]);

	/** Function to handle device click for Border Width */
	const handleBorderWidthDeviceClick = (device) => {
		setAttributes({ DeviceType: device });
	};

	/** Default Border Width for desktop (using HeadingDesktopBorderWidth) */
	const borderWidth = `${HeadingDesktopBorderWidth.top}${HeadingBorderUnits} ${HeadingDesktopBorderWidth.right}${HeadingBorderUnits} ${HeadingDesktopBorderWidth.bottom}${HeadingBorderUnits} ${HeadingDesktopBorderWidth.left}${HeadingBorderUnits}`;
	/** End Border Width */

	/** Start Border Radius Width */
	const [previousBorderRadiusWidth, setPreviousBorderRadiusWidth] = useState(HeadingDesktopBorderRadiusWidth);
	/** Function to update all Border Width values */
	const updateAllBorderRadiusWidth = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					HeadingDesktopBorderRadiusWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					HeadingTabBorderRadiusWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					HeadingMobileBorderRadiusWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			default:
				break;
		}
	};

	/** Function to handle input change */
	const handleBorderRadiusWidthInputChange = (e, direction) => {
		const value = e.target.value;
		switch(DeviceType) {
			case 'Desktop':
				setAttributes({ HeadingDesktopBorderRadiusWidth: { ...HeadingDesktopBorderRadiusWidth, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ HeadingTabBorderRadiusWidth: { ...HeadingTabBorderRadiusWidth, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ HeadingMobileBorderRadiusWidth: { ...HeadingMobileBorderRadiusWidth, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all padding values if HeadingBorderRadiusLink is true */
		if (HeadingBorderRadiusLink) {
			updateAllBorderRadiusWidth(value, DeviceType);
		}
	};

	/** Function to handle HeadingBorderRadiusLink toggle */
	const handleBorderRadiusWidthLinkToggle = () => {
		if (!HeadingBorderRadiusLink) {
			setAttributes({ HeadingDesktopBorderRadiusWidth: previousBorderRadiusWidth });
		}
		/** setHeadingBorderRadiusLinkLink(!HeadingBorderRadiusLink) */
		setAttributes({HeadingBorderRadiusLink: !HeadingBorderRadiusLink})
	};

	/** Update previousBorderRadiusWidth state when Border Width changes */
	useEffect(() => {
		setPreviousBorderRadiusWidth(HeadingDesktopBorderRadiusWidth);
	}, [HeadingDesktopBorderRadiusWidth]);

	/** Function to handle device click for Border Width */
	const handleBorderRadiusWidthDeviceClick = (device) => {
		setAttributes({ DeviceType: device });
	};

	/** Default Border Width for desktop (using HeadingDesktopBorderWidth) */
	const borderRadiusWidth = `${HeadingDesktopBorderRadiusWidth.top}${HeadingBorderRadiusUnits} ${HeadingDesktopBorderRadiusWidth.right}${HeadingBorderRadiusUnits} ${HeadingDesktopBorderRadiusWidth.bottom}${HeadingBorderRadiusUnits} ${HeadingDesktopBorderRadiusWidth.left}${HeadingBorderRadiusUnits}`;
	/** End Border Radius Width */

	return (
		<>
			<style>
				{`
				.fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-inner {
                    width: ${mediaSize.Desktop}${mediaSizeUnits.Desktop};
                    ${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Desktop}${mediaHeightUnits.Desktop}`};
                }
                @media all and (max-width: 1024px){
                .fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-inner {
                    width: ${mediaSize.Tablet}${mediaSizeUnits.Tablet};
                    ${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Tablet}${mediaHeightUnits.Tablet}`};
                }
                }
                @media all and (max-width: 767px){
                .fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-inner {
                    width: ${mediaSize.Mobile}${mediaSizeUnits.Mobile};
                    ${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Mobile}${mediaHeightUnits.Mobile}`};
                }
                }
                .fb-advanced-image-wrapper.${blockID} .fb-advanced-image-caption figcaption {
                    text-align: ${captionAlignment};
                }
                .fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-title .fb-advanced-title{
                    ${HeadingColor !== undefined ? `color: ${HeadingColor};` : ''}
                    ${HeadingBackgroundColor !== undefined ? `background-color: ${HeadingBackgroundColor};` : ''}
                    font-family: ${HeadingFontFamily !== 'default' ? HeadingFontFamily : HeadingFontFamily};
                    font-size: ${HeadingFontSize !== undefined ? `${HeadingFontSize}${HeadingFontSizeUnits}` : ''};
                    font-weight: ${HeadingFontWeight};
                    font-style: ${HeadingFontStyle};
                    text-transform: ${HeadingTextTransform};
                    text-decoration: ${HeadingTextDecoration};
                    ${HeadingLetterSpacing !== undefined ? `letter-spacing: ${HeadingLetterSpacing}${HeadingLetterSpacingUnits};` : ''}
                    ${HeadingLineHeight !== undefined ? `line-height: ${HeadingLineHeight}${HeadingLineHeightUnits};` : ''}
                    transition: all .3s ease-in-out;
                    padding: ${padding};
                    margin: ${margin};
                    border: ${HeadingBorder};
                    border-width: ${borderWidth};
                    border-radius: ${borderRadiusWidth};
                    ${HeadingBorderColor !== undefined ? `border-color: ${HeadingBorderColor};` : ''}
                }
                @media all and (max-width: 1024px){
                .fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-title .fb-advanced-title{
                    width: ${mediaSize.Tablet}${mediaSizeUnits.Tablet};
                    ${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Tablet}${mediaHeightUnits.Tablet}`};
                }
                }
                @media all and (max-width: 767px){
                .fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-title .fb-advanced-title{
                    width: ${mediaSize.Mobile}${mediaSizeUnits.Mobile};
                    ${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Mobile}${mediaHeightUnits.Mobile}`};
                }
                }

            `}
			</style>
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
								className: "fb-tab advanced",
							},
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls" + tab.name}>
								{tab.name === 'general' && (
									<>
										<div className="fb-advanced-wrapper">
											<PanelBody
												title={__("General", "frontis-blocks")}
												initialOpen={true}
											>
												<SelectControl
													label={__("Styles", "frontis-blocks")}
													value={imageStyle || 'square'}
													options={[
														{label: __("Circle", "frontis-blocks"), value: "circle"},
														{label: __("Square", "frontis-blocks"), value: "square"},
														{label: __("Rounded", "frontis-blocks"), value: "rounded"},
														{label: __("Octagon", "frontis-blocks"), value: "octagon"},
														{label: __("Triangle", "frontis-blocks"), value: "triangle"},
														{label: __("Rhombus", "frontis-blocks"), value: "rhombus"},
														{label: __("Hexagon", "frontis-blocks"), value: "hexagon"},
														{label: __("Bevel", "frontis-blocks"), value: "bevel"},
														{label: __("Abstract", "frontis-blocks"), value: "abstract"},
														{label: __("Container", "frontis-blocks"), value: "container"},
														{
															label: __("Aesthetic Blob", "frontis-blocks"),
															value: "aesthetic-blob"
														},
														{
															label: __("Aesthetic Blob 2", "frontis-blocks"),
															value: "aesthetic-blob-2"
														},
														{
															label: __("Aesthetic Blob 3", "frontis-blocks"),
															value: "aesthetic-blob-3"
														},
														{
															label: __("Aesthetic Blob 4", "frontis-blocks"),
															value: "aesthetic-blob-4"
														},
														{
															label: __("Irregular Blob", "frontis-blocks"),
															value: "irregular-blob"
														},
														{
															label: __("Triangle Blob", "frontis-blocks"),
															value: "triangle-blob"
														},
														{
															label: __("Overlaped Blob", "frontis-blocks"),
															value: "overlaped-blob"
														},{
															label: __("Seperate Blob", "frontis-blocks"),
															value: "seperate-blob"
														},
														{
															label: __("Pattern", "frontis-blocks"),
															value: "pattern"
														},
														{
															label: __("Overlay", "frontis-blocks"),
															value: "overlay-simple"
														},
													]}
													onChange={(newStyle) => setAttributes({imageStyle: newStyle})}
													__nextHasNoMarginBottom
												/>

												{/* Display Caption */}
												<ToggleControl
													__nextHasNoMarginBottom
													label={__('Display Caption', 'frontis-block')}
													checked={displayCaption}
													onChange={(newValue) => {
														setAttributes({displayCaption: newValue});
													}}
												/>

												{displayCaption && (
													<>
														<BaseControl
															label={__("Caption Alignment", "frontis-blocks")}
															id="fb-setting-text-alignment"
															className="fb-setting-text-alignment"
														>
															<ButtonGroup
																className="fb-setting-text-alignment-group-btn"
															>
																{TEXT_ALIGN.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({captionAlignment: item.value})}
																		className={`fb-setting-text-alignment-single-btn ${captionAlignment === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</BaseControl>

													</>
												)}
												{/* Title */}
												<ToggleControl
													__nextHasNoMarginBottom
													label={__('Display Title', 'frontis-block')}
													checked={displayTitle}
													onChange={(newValue) => {
														setAttributes({displayTitle: newValue});
													}}
												/>
												{displayTitle && (
													<>
													<TextControl
														value={titleText}
														onChange={(value) => setAttributes({titleText: value})}
														className="fb-advance-title"
														placeholder={__('Enter Title', 'frontis-blocks')}
													/>
														<BaseControl
															label={__("Title Tag", "frontis-blocks")}
															id="fb-setting-text-alignment"
															className="fb-setting-text-alignment"
														>
															<ButtonGroup
																className="fb-setting-text-alignment-group-btn"
															>
																{HEADING.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({ titleTag: item.value })}
																		className={`fb-setting-text-alignment-single-btn ${ titleTag === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</BaseControl>
														<SelectControl
															label={__("Title Position", "frontis-blocks")}
															value={titlePosition || 'center'}
															options={[
																{label: __("Center", "frontis-blocks"), value: "center"},
																{label: __("Center Left", "frontis-blocks"), value: "center-left"},
																{label: __("Center Right", "frontis-blocks"), value: "center-right"},
																{label: __("Top Left", "frontis-blocks"), value: "top-left"},
																{label: __("Top Center", "frontis-blocks"), value: "top-center"},
																{label: __("Top Right", "frontis-blocks"), value: "top-right"},
																{label: __("Bottom Left", "frontis-blocks"), value: "bottom-left"},
																{label: __("Bottom Center", "frontis-blocks"), value: "bottom-center"},
																{label: __("Bottom Right", "frontis-blocks"), value: "bottom-right"},
																{label: __("Vertically Center", "frontis-blocks"), value: "vertical-center"},
															]}
															onChange={(value) => setAttributes({titlePosition: value})}
															__nextHasNoMarginBottom
														/>

													</>
												)}

												{/* Image Size */}
												<SelectControl
													label={__("Image Size", "frontis-blocks")}
													value={imageSize || 'default'}
													options={[
														{label: __("Default", "frontis-blocks"), value: "default"},
														{label: __("Thumbnail", "frontis-blocks"), value: "thumbnail"},
														{label: __("Medium", "frontis-blocks"), value: "medium"},
														{label: __("Large", "frontis-blocks"), value: "large"},
														{label: __("Full Size", "frontis-blocks"), value: "full-size"},
														{label: __("Custom", "frontis-blocks"), value: "custom"}
													]}
													onChange={(size) => setAttributes({imageSize: size})}
													__nextHasNoMarginBottom
												/>

												{/*Width control*/}

												{imageSize === 'custom' && (
													<>
														<FB_Range
															min={1}
															max={1400}
															label={__("Width", "frontis-blocks")}
															rangeValue={mediaSize}
															onChangeHandler={mediaSizeHandler}
															rangeUnitHandler={mediaSizeUnitsHandler}
															DeviceType={DeviceType}
															units={mediaSizeUnits}
															setAttributes={setAttributes}
															rangeStep={1}
															resetFallbackValue={200}
														/>
														<FB_Range
															min={1}
															max={1400}
															label={__("Height", "frontis-blocks")}
															rangeValue={mediaHeight}
															onChangeHandler={mediaHeightHandler}
															rangeUnitHandler={mediaHeightUnitsHandler}
															DeviceType={DeviceType}
															units={mediaHeightUnits}
															setAttributes={setAttributes}
															rangeStep={1}
															resetFallbackValue={200}
														/>
													</>
												)}
												{/* Auto Height */}
												<ToggleControl
													__nextHasNoMarginBottom
													label={__('Auto Height', 'frontis-block')}
													checked={autoHeightSwitch}
													onChange={(newValue) => {
														setAttributes({autoHeightSwitch: newValue});
													}}
												/>

												{/* Auto Fit Image */}
												<ToggleControl
													__nextHasNoMarginBottom
													label={__('Auto Fit Image?', 'frontis-block')}
													checked={autoFitSwitch}
													onChange={(newValue) => {
														setAttributes({autoFitSwitch: newValue});
													}}
												/>

												{/* Image Fit Options */}
												{autoFitSwitch && (
													<SelectControl
														label={__("Image Fit Options", "frontis-blocks")}
														value={imageFit || 'cover'}
														options={[
															{label: __("Cover", "frontis-blocks"), value: "cover"},
															{label: __("Fill", "frontis-blocks"), value: "fill"},
															{label: __("Contain", "frontis-blocks"), value: "contain"},
														]}
														onChange={(size) => setAttributes({imageFit: size})}
														__nextHasNoMarginBottom
													/>
												)}


												{/* Enable Link? */}
												<ToggleControl
													__nextHasNoMarginBottom
													label={__('Enable Link?', 'frontis-block')}
													checked={linkSwitch}
													onChange={(newValue) => {
														setAttributes({linkSwitch: newValue});
													}}
												/>

												{linkSwitch && (
													<div className="fb-link-control-wrapper">
														<BaseControl
															label={__("URL", "frontis-blocks")}
														>
															<div className="fb-link-control-inner-wrapper">
																<TextControl
																	value={linkUrl}
																	onChange={(value) => setAttributes({linkUrl: value})}
																	className="fb-link-control-url"
																	placeholder={__('https://', 'frontis-blocks')}
																/>
																<Dropdown
																	className="fb-setting-dropdown-icon-wrapper"
																	contentClassName="fb-setting-dropdown-icon-content"
																	popoverProps={{placement: 'bottom-start'}}
																	renderToggle={({isOpen, onToggle}) => (
																		<Button
																			variant="primary"
																			onClick={onToggle}
																			aria-expanded={isOpen}
																			aria-label={__("Toggle Typography Settings", "frontis-blocks")}
																			className="fb-setting-dropdown-icon-btn"
																		>
																			<Dashicon icon="color-picker"
																					  className="fb-setting-dropdown-icon"/>
																		</Button>
																	)}
																	renderContent={() => (
																		<div className="fb-link-control-icon-popup">
																			<BaseControl
																				className="fb-link-control-icon-popup-inner">
																				<ToggleControl
																					label={__("Open in new tab", "frontis-blocks")}
																					checked={linkTargetUrl}
																					onChange={(value) => setAttributes({linkTargetUrl: value})}
																				/>
																			</BaseControl>
																		</div>
																	)}
																/>
															</div>
														</BaseControl>
													</div>
												)}
												{/*	Hover Effect */}
												<SelectControl
													label={__("Hover Effect", "frontis-blocks")}
													value={imageHover}
													options={[
														{label: __("No Effect", "frontis-blocks"), value: "no-effect"},
														{label: __("Zoom In", "frontis-blocks"), value: "zoom-in"},
														{label: __("Zoom Out", "frontis-blocks"), value: "zoom-out"},
														{label: __("Slide", "frontis-blocks"), value: "slide"},
														{label: __("Blur", "frontis-blocks"), value: "blur"},
														{label: __("Overlay", "frontis-blocks"), value: "overlay"},
														{label: __("Tilt", "frontis-blocks"), value: "tilt"},
														{label: __("Skew", "frontis-blocks"), value: "skew"},
													]}
													onChange={(size) => setAttributes({imageHover: size})}
													__nextHasNoMarginBottom
												/>

											</PanelBody>
										</div>
									</>
								)}

								{tab.name === "styles" && (
									<>
										<PanelBody
											title={__("Image", "frontis-blocks")}
											initialOpen={true}
										>

											{/*	Image Align */}
											<FB_ResponsiveControl labelText={__('Image Align', 'frontis-block')}
																  device={DeviceType} deviceHandler={handleDevice}/>
											<div className={'fb-setting-color-panel-wrapper'}>
												<ButtonGroup className="fb-setting-color-panel-btn">
													<Button
														onClick={() => setAttributes({horizontalAlign: 'left'})}
														className={`fb-setting-color-panel-btn-switchr ${horizontalAlign === 'left' ? 'active' : ''}`}>
														{__('Left', 'frontis-block')}
													</Button>
													<Button
														onClick={() => setAttributes({horizontalAlign: 'center'})}
														className={`fb-setting-color-panel-btn-switchr ${horizontalAlign === 'center' ? 'active' : ''}`}>
														{__('Center', 'frontis-block')}
													</Button>
													<Button
														onClick={() => setAttributes({horizontalAlign: 'right'})}
														className={`fb-setting-color-panel-btn-switchr ${horizontalAlign === 'right' ? 'active' : ''}`}>
														{__('Right', 'frontis-block')}
													</Button>
													<span className="dashicons dashicons-image-rotate"></span>
												</ButtonGroup>
											</div>

											{/* Border control*/}
											<BaseControl
												label={__("Border", "frontis-blocks")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													<Button
														onClick={() => setAttributes({borderType: 'normal'})}
														className={`fb-setting-color-panel-btn-switchr ${borderType === 'normal' ? 'active' : ''}`}>
														{__('Normal', 'frontis-block')}
													</Button>
													<Button
														onClick={() => setAttributes({borderType: 'hover'})}
														className={`fb-setting-color-panel-btn-switchr ${borderType === 'hover' ? 'active' : ''}`}>
														{__('Hover', 'frontis-block')}
													</Button>
													<span className="dashicons dashicons-image-rotate"></span>
												</ButtonGroup>
											</BaseControl>

											{/*Normal border control*/}
											{borderType === 'normal' ? (
												<>
													<SelectControl
														label={__("Border Style", "frontis-blocks")}
														value={borderStyle}
														options={BORDER_STYLES}
														onChange={(value) => setAttributes({borderStyle: value})}
													/>
													{borderStyle !== 'none' &&
														<>
															<BaseControl
																label={__("Normal Color", "frontis-blocks")}
																className="fb-setting-color-setting-wrapper"
															>
																<Dropdown
																	className="fb-setting-color-setting-icon-dropdown"
																	contentClassName="fb-setting-color-setting-icon-dropdown-content"
																	popoverProps={{placement: 'bottom-start'}}
																	renderToggle={({isOpen, onToggle}) => (
																		<Button
																			variant="primary"
																			onClick={onToggle}
																			label={__("Color", "frontis-blocks")}
																			aria-expanded={isOpen}
																			className="fb-setting-color-setting-icon-btn"
																		>
																			<Dashicon icon="color-picker"
																					  className="fb-setting-color-setting-icon"/>
																		</Button>
																	)}
																	renderContent={() => (
																		<div
																			className="fb-setting-color-setting-icon-popup">
																			<BaseControl
																				className="fb-setting-color-setting-icon-popup-inner">
																				<div
																					className="fb-setting-normal-color">
																					<ColorPicker
																						color={normalBorderColor}
																						onChange={(value) => setAttributes({normalBorderColor: value})}
																						enableAlpha={true}
																					/>
																					<div
																						className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
																					<ColorPalette
																						colors={[
																							{color: '#F72585'},
																							{color: '#7209B7'},
																							{color: '#3A0CA3'},
																							{color: '#4361EE'},
																							{color: '#4CC9F0'},
																						]}
																						disableCustomColors={true}
																						value={normalBorderColor}
																						onChange={(value) => setAttributes({normalBorderColor: value})}
																					/>
																				</div>
																			</BaseControl>
																		</div>
																	)}
																/>
															</BaseControl>
															<div className="fb-setting-spacing-container">
																<div className="fb-setting-spacing-inner-container">
																	{/* Border radius Width */}
																	<div className="fb-setting-spacing-label-container">
																		<FB_ResponsiveControl
																			labelText={__('Border Radius', 'frontis-block')}
																			device={DeviceType}
																			deviceHandler={handleDevice}/>
																		<div className="fb-setting-units-type">
																			<ButtonGroup
																				className="fb-setting-units-type-wrap">
																				{UNIT_TYPES.map((item, key) => (
																					<Button
																						key={key}
																						onClick={() => setAttributes({normalBorderRadUnit: item.value})}
																						className={`fb-setting-units-type-switcher ${normalBorderRadUnit === item.value ? 'active' : ''}`}
																					>
																						{item.label}
																					</Button>
																				))}
																			</ButtonGroup>
																		</div>
																	</div>
																	<div className="fb-setting-spacing-input-container">
																		<div
																			className="fb-setting-spacing-input-wrapper">
																			<label
																				className="fb-setting-spacing-input-label">{__("Top", "frontis-blocks")}</label>
																			<input
																				type="number"
																				name="top"
																				value={DeviceType === 'Desktop' ? normalBorderRad.top : DeviceType === 'Tablet' ? normalBorderRad.top : normalBorderRad.top}
																				onChange={(e) => handleBorderRadius(e, 'top')}
																			/>
																		</div>
																		<div
																			className="fb-setting-spacing-input-wrapper">
																			<label
																				className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
																			<input
																				type="number"
																				name="right"
																				value={DeviceType === 'Desktop' ? normalBorderRad.right : DeviceType === 'Tablet' ? normalBorderRad.right : normalBorderRad.right}
																				onChange={(e) => handleBorderRadius(e, 'right')}
																			/>
																		</div>
																		<div
																			className="fb-setting-spacing-input-wrapper">
																			<label
																				className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
																			<input
																				type="number"
																				name="bottom"
																				value={DeviceType === 'Desktop' ? normalBorderRad.bottom : DeviceType === 'Tablet' ? normalBorderRad.bottom : normalBorderRad.bottom}
																				onChange={(e) => handleBorderRadius(e, 'bottom')}
																			/>
																		</div>
																		<div
																			className="fb-setting-spacing-input-wrapper">
																			<label
																				className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
																			<input
																				type="number"
																				name="left"
																				value={DeviceType === 'Desktop' ? normalBorderRad.left : DeviceType === 'Tablet' ? normalBorderRad.left : normalBorderRad.left}
																				onChange={(e) => handleBorderRadius(e, 'left')}
																			/>
																		</div>
																		<div
																			className="fb-setting-spacing-input-wrapper">
																			<label
																				className="fb-setting-spacing-input-label"></label>
																			<span
																				className={`dashicons ${normalBorderRadiusLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${normalBorderRadiusLink ? 'is-checked' : ''}`}
																				onClick={handleBorderRadiusWidthLinkToggle}
																			>
																	</span>
																		</div>
																	</div>
																</div>
															</div>
														</>
													}
												</>
											) : (
												<div>
													HOver
												</div>
											)}

										</PanelBody>

									{/*	Title */}
										<PanelBody
											title={__("Title", "frontis-blocks")}
											initialOpen={true}
										>
											<BaseControl
												label={__("Typography", "frontis-blocks")}
												className="fb-setting-typography"
											>
												<Dropdown
													className="fb-setting-dropdown-icon-wrapper"
													contentClassName="fb-setting-dropdown-icon-content"
													popoverProps={{ placement: 'bottom-start' }}
													renderToggle={({ isOpen, onToggle }) => (
														<Button
															variant="primary"
															onClick={onToggle}
															aria-expanded={isOpen}
															aria-label={__("Toggle Typography Settings", "frontis-blocks")}
															className="fb-setting-dropdown-icon-btn"
														>
															<Dashicon icon="edit" className="fb-setting-dropdown-icon" />
														</Button>
													)}
													renderContent={() => (
														<div className="fb-setting-typography-popup">
															<BaseControl className="fb-setting-typography-popup-inner" >
																<div className="fb-setting-fontfamily-wrapper">
																	<SelectControl
																		label={__("Font Family", "frontis-blocks")}
																		options={FONT_FAMILYS}
																		value={HeadingFontFamily}
																		onChange={(value) => setAttributes({ HeadingFontFamily: value })}
																	/>
																</div>
																<div className="fb-setting-fontsize-wrapper">
																	<div className="fb-setting-fontsize-header">
																		<div className="fb-setting-fontsize-label">
																			<span>{__("Font Size", "frontis-blocks")}</span>
																		</div>
																		<div className="fb-setting-fontsize-units">
																			<ButtonGroup className="fb-setting-fontsize-units-wrap">
																				{UNIT_TYPES.map((item, key) => (
																					<Button
																						key={key}
																						onClick={() => setAttributes({ HeadingFontSizeUnits: item.value })}
																						className={`fb-setting-fontsize-units-switcher ${ HeadingFontSizeUnits === item.value ? 'active' : ''}`}
																					>
																						{item.label}
																					</Button>
																				))}
																			</ButtonGroup>
																		</div>
																	</div>
																	<div className="fb-setting-fontsize-rangecontrol">
																		<RangeControl
																			value={HeadingFontSize}
																			onChange={(value) => setAttributes({ HeadingFontSize: value })}
																			min={1}
																			max={200}
																			allowReset
																			resetFallbackValue={undefined}
																		/>
																	</div>
																</div>
																<div className="fb-setting-fontweight-wrapper">
																	<SelectControl
																		label={__("Font Weight", "frontis-blocks")}
																		options={[
																			{ label: __("Default", "frontis-blocks"), value: "700" },
																			{ label: __("100", "frontis-blocks"), value: "100" },
																			{ label: __("200", "frontis-blocks"), value: "200" },
																			{ label: __("300", "frontis-blocks"), value: "300" },
																			{ label: __("400", "frontis-blocks"), value: "400" },
																			{ label: __("500", "frontis-blocks"), value: "500" },
																			{ label: __("600", "frontis-blocks"), value: "600" },
																			{ label: __("700", "frontis-blocks"), value: "700" },
																			{ label: __("800", "frontis-blocks"), value: "800" },
																			{ label: __("900", "frontis-blocks"), value: "900" },
																		]}
																		value={HeadingFontWeight}
																		onChange={(value) => setAttributes({ HeadingFontWeight: value })}
																	/>
																</div>
																<div className="fb-setting-fontstyle-wrapper">
																	<SelectControl
																		label={__("Font Style", "frontis-blocks")}
																		options={[
																			{ label: __("Default", "frontis-blocks"), value: "normal" },
																			{ label: __("Normal", "frontis-blocks"), value: "normal" },
																			{ label: __("Italic", "frontis-blocks"), value: "italic" },
																			{ label: __("Oblique", "frontis-blocks"), value: "oblique" },
																		]}
																		value={HeadingFontStyle}
																		onChange={(value) => setAttributes({ HeadingFontStyle: value })}
																	/>
																</div>
																<div className="fb-setting-texttransform-wrapper">
																	<SelectControl
																		label={__("Text Transform", "frontis-blocks")}
																		options={[
																			{ label: __("Default", "frontis-blocks"), value: "none" },
																			{ label: __("None", "frontis-blocks"), value: "none" },
																			{ label: __("Capitalize", "frontis-blocks"), value: "capitalize" },
																			{ label: __("Uppercase", "frontis-blocks"), value: "uppercase" },
																			{ label: __("Lowercase", "frontis-blocks"), value: "lowercase" },
																		]}
																		value={HeadingTextTransform}
																		onChange={(value) => setAttributes({ HeadingTextTransform: value })}
																	/>
																</div>
																<div className="fb-setting-textdecoration-wrapper">
																	<SelectControl
																		label={__("Text Decoration", "frontis-blocks")}
																		options={[
																			{ label: __("Default", "frontis-blocks"), value: "none" },
																			{ label: __("None", "frontis-blocks"), value: "none" },
																			{ label: __("Underline", "frontis-blocks"), value: "underline" },
																			{ label: __("Overline", "frontis-blocks"), value: "overline" },
																			{ label: __("Line Through", "frontis-blocks"), value: "line-through" },
																		]}
																		value={HeadingTextDecoration}
																		onChange={(value) => setAttributes({ HeadingTextDecoration: value })}
																	/>
																</div>
																<div className="fb-setting-letterspacing-wrapper">
																	<div className="fb-setting-letterspacing-header">
																		<div className="fb-setting-letterspacing-label">
																			<span>{__("Letter Spacing", "frontis-blocks")}</span>
																		</div>
																		<div className="fb-setting-letterspacing-units">
																			<ButtonGroup className="fb-setting-letterspacing-units-wrap">
																				{UNIT_TYPES.map((item, key) => (
																					<Button
																						key={key}
																						onClick={() => setAttributes({ HeadingLetterSpacingUnits: item.value })}
																						className={`fb-setting-letterspacing-units-switcher ${ HeadingLetterSpacingUnits === item.value ? 'active' : ''}`}
																					>
																						{item.label}
																					</Button>
																				))}
																			</ButtonGroup>
																		</div>
																	</div>
																	<RangeControl
																		value={HeadingLetterSpacing}
																		onChange={(value) => setAttributes({ HeadingLetterSpacing: value === 0 ? undefined : value })}
																		min={1}
																		max={100}
																		step={1}
																		allowReset
																		resetFallbackValue={undefined}
																	/>
																</div>
																<div className="fb-setting-lineheight-wrapper">
																	<div className="fb-setting-lineheight-header">
																		<div className="fb-setting-lineheight-label">
																			<span>{__("Line Height", "frontis-blocks")}</span>
																		</div>
																		<div className="fb-setting-lineheight-units">
																			<ButtonGroup className="fb-setting-lineheight-units-wrap">
																				{UNIT_TYPES.map((item, key) => (
																					<Button
																						key={key}
																						onClick={() => setAttributes({ HeadingLineHeightUnits: item.value })}
																						className={`fb-setting-lineheight-units-switcher ${ HeadingLineHeightUnits === item.value ? 'active' : ''}`}
																					>
																						{item.label}
																					</Button>
																				))}
																			</ButtonGroup>
																		</div>
																	</div>
																	<RangeControl
																		value={HeadingLineHeight}
																		onChange={(value) => setAttributes({ HeadingLineHeight: value === 1 ? undefined : value })}
																		min={1}
																		max={100}
																		step={1}
																		allowReset
																		resetFallbackValue={undefined}
																	/>
																</div>
															</BaseControl>
														</div>
													)}
												/>
											</BaseControl>
											<BaseControl
												label={__("Text Color", "frontis-blocks")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{NORMAL_HOVER.map((item, key) => (
														<Button
															key={key}
															onClick={() => setAttributes({ HeadingColorSwitcher: item.value })}
															className={`fb-setting-color-panel-btn-switchr ${HeadingColorSwitcher === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{HeadingColorSwitcher === 'normal' && (
												<BaseControl
													label={__("Nomal Color", "frontis-blocks")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{ placement: 'bottom-start' }}
														renderToggle={({ isOpen, onToggle }) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__("Toggle Typography Settings", "frontis-blocks")}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-normal-color">
																		<ColorPicker
																			color={HeadingColor}
																			onChange={(value) => setAttributes({ HeadingColor: value })}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
																		<ColorPalette
																			colors={[
																				{ color: '#F72585' },
																				{ color: '#7209B7' },
																				{ color: '#3A0CA3' },
																				{ color: '#4361EE' },
																				{ color: '#4CC9F0' },
																			]}
																			disableCustomColors={true}
																			value={HeadingColor}
																			onChange={(value) => setAttributes({ HeadingColor: value })}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{HeadingColorSwitcher === 'hover' && (
												<BaseControl
													label={__("Hover Color", "frontis-blocks")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{ placement: 'bottom-start' }}
														renderToggle={({ isOpen, onToggle }) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__("Toggle Typography Settings", "frontis-blocks")}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-hover-color">
																		<ColorPicker
																			color={HeadingHoverColor}
																			onChange={(value) => setAttributes({ HeadingHoverColor: value })}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
																		<ColorPalette
																			colors={[
																				{ color: '#F72585' },
																				{ color: '#7209B7' },
																				{ color: '#3A0CA3' },
																				{ color: '#4361EE' },
																				{ color: '#4CC9F0' },
																			]}
																			disableCustomColors={true}
																			value={HeadingHoverColor}
																			onChange={(value) => setAttributes({ HeadingHoverColor: value })}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}
										</PanelBody>

										<PanelBody title="Spacing" initialOpen={false}>
											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Padding */}
													<div className="fb-setting-spacing-label-container">
														<FB_ResponsiveControl labelText={__('Padding', 'frontis-block')} device={DeviceType} deviceHandler={handlePaddingDeviceClick}/>
														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({ HeadingPaddingUnits: item.value })}
																		className={`fb-setting-units-type-switcher ${ HeadingPaddingUnits === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">{__("Top", "frontis-blocks")}</label>
															<input
																type="number"
																name="top"
																value={DeviceType === 'Desktop' ? HeadingDesktopPadding.top : DeviceType === 'Tablet' ? HeadingTabPadding.top : HeadingMobilePadding.top}
																onChange={(e) => handlePaddingInputChange(e, 'top')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
															<input
																type="number"
																name="right"
																value={DeviceType === 'Desktop' ? HeadingDesktopPadding.right : DeviceType === 'Tablet' ? HeadingTabPadding.right : HeadingMobilePadding.right}
																onChange={(e) => handlePaddingInputChange(e, 'right')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
															<input
																type="number"
																name="bottom"
																value={DeviceType === 'Desktop' ? HeadingDesktopPadding.bottom : DeviceType === 'Tablet' ? HeadingTabPadding.bottom : HeadingMobilePadding.bottom}
																onChange={(e) => handlePaddingInputChange(e, 'bottom')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
															<input
																type="number"
																name="left"
																value={DeviceType === 'Desktop' ? HeadingDesktopPadding.left : DeviceType === 'Tablet' ? HeadingTabPadding.left : HeadingMobilePadding.left}
																onChange={(e) => handlePaddingInputChange(e, 'left')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${HeadingPaddingLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${HeadingPaddingLink ? 'is-checked' : ''}`}
																onClick={handleHeadingPaddingLinkToggle}
															>
                                                            </span>
														</div>
													</div>
												</div>
											</div>
											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Margin */}
													<div className="fb-setting-spacing-label-container">
														<FB_ResponsiveControl labelText={__('Margin', 'frontis-block')} device={DeviceType} deviceHandler={handleMarginDeviceClick}/>
														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({ HeadingMarginUnits: item.value })}
																		className={`fb-setting-units-type-switcher ${ HeadingMarginUnits === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">{__("Top", "frontis-blocks")}</label>
															<input
																type="number"
																name="top"
																value={DeviceType === 'Desktop' ? HeadingDesktopMargin.top : DeviceType === 'Tablet' ? HeadingTabMargin.top : HeadingMobileMargin.top}
																onChange={(e) => handleMarginInputChange(e, 'top')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
															<input
																type="number"
																name="right"
																value={DeviceType === 'Desktop' ? HeadingDesktopMargin.right : DeviceType === 'Tablet' ? HeadingTabMargin.right : HeadingMobileMargin.right}
																onChange={(e) => handleMarginInputChange(e, 'right')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
															<input
																type="number"
																name="bottom"
																value={DeviceType === 'Desktop' ? HeadingDesktopMargin.bottom : DeviceType === 'Tablet' ? HeadingTabMargin.bottom : HeadingMobileMargin.bottom}
																onChange={(e) => handleMarginInputChange(e, 'bottom')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
															<input
																type="number"
																name="left"
																value={DeviceType === 'Desktop' ? HeadingDesktopMargin.left : DeviceType === 'Tablet' ? HeadingTabMargin.left : HeadingMobileMargin.left}
																onChange={(e) => handleMarginInputChange(e, 'left')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${HeadingMarginLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${HeadingMarginLink ? 'is-checked' : ''}`}
																onClick={handleMarginLinkToggle}
															>
                                                            </span>
														</div>
													</div>
												</div>
											</div>
										</PanelBody>

									</>
								)}
								{tab.name === "advanced" && (
									<>
										<div className="fb-setting-advanced-tab-wrapper">
											<div className="fb-setting-z-index-wrapper">
												<PanelBody
													title={__("Z Index", "frontis-blocks")}
													initialOpen={true}
													className='fb-setting-z-index-header'
												>

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
