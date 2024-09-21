import { __ } from '@wordpress/i18n';
import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	TabPanel,
	PanelBody,
	TextControl,
	ColorPicker,
	BaseControl,
	RangeControl,
	ToggleControl,
	DateTimePicker,
	Dropdown,
	Button,
	Dashicon,
	SelectControl,
	ButtonGroup,
	ColorPalette,
	ResponsiveWrapper, __experimentalHStack as HStack,
} from '@wordpress/components';
import {useEffect, useRef, useState} from '@wordpress/element';
import './editor.scss';
import {mediaType, BORDER_STYLES, FONT_FAMILYS, UNIT_TYPES} from "./constants/constants";
import FBIconPicker from "../../components/icon-picker";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import ResponsiveControl from "../../components/responsivecontrol";

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		counterNumber,
		counterPrefix,
		counterSuffix,
		counterTitle,
		showThousandsSeparator,
		icon,
		counterIconColor,
		mediaSwitcher,

		DeviceType,

		BoxBorder,
		BoxBorderColor,
		BoxBorderUnits,
		BoxDesktopBorderWidth,
		BoxTabBorderWidth,
		BoxMobileBorderWidth,
		BoxBorderLink,
		BoxBorderRadiusUnits,
		BoxDesktopBorderRadiusWidth,
		BoxTabBorderRadiusWidth,
		BoxMobileBorderRadiusWidth,
		BoxBorderRadiusLink,



		counterNumberFontFamily,
		counterNumberFontSize,
		counterNumberFontSizeUnits,
		counterNumberFontWeight,
		counterNumberFontStyle,
		counterNumberTextTransform,
		counterNumberTextDecoration,
		counterNumberLetterSpacing,
		counterNumberLetterSpacingUnits,
		counterNumberLineHeight,
		counterNumberLineHeightUnits,
		counterNumberColor,

		counterTitleFontFamily,
		counterTitleFontSize,
		counterTitleFontSizeUnits,
		counterTitleFontWeight,
		counterTitleFontStyle,
		counterTitleTextTransform,
		counterTitleTextDecoration,
		counterTitleLetterSpacing,
		counterTitleLetterSpacingUnits,
		counterTitleLineHeight,
		counterTitleLineHeightUnits,
		counterTitleColor,

	} = attributes;

	const counterRef = useRef(null);
	const observerRef = useRef(null);

	// Generate unique block ID if not set
	useEffect(() => {
		if (!blockID) {
			setAttributes({ blockID: 'block-' + Math.random().toString(36).substr(2, 9) });
		}
	}, [blockID, setAttributes]);

	// Set up Intersection Observer and animation in the editor
	useEffect(() => {
		if (observerRef.current) observerRef.current.disconnect();

		observerRef.current = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					animateCounter();
				}
			});
		});

		if (counterRef.current) {
			observerRef.current.observe(counterRef.current);
		}

		return () => {
			if (observerRef.current) observerRef.current.disconnect();
		};
	}, [counterNumber, showThousandsSeparator]);

	const animateCounter = () => {
		let start = 0;
		const end = counterNumber;
		const duration = 2000; // Animation duration in milliseconds
		let startTime = null;

		const step = (timestamp) => {
			if (!startTime) startTime = timestamp;
			const progress = Math.min((timestamp - startTime) / duration, 1);
			const current = Math.floor(progress * (end - start) + start);

			counterRef.current.textContent = showThousandsSeparator
				? current.toLocaleString()
				: current;

			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};

		window.requestAnimationFrame(step);

	};


	// Icon media remove handler
	const removeCounterMedia = () => {
		setAttributes({
			counterMediaId: '',
			counterMediaUrl: ''
		});
	}
	const iconHandler = (iconName) => {
		setAttributes({icon: iconName})
	}

	const blockProps = useBlockProps();


	{/* Inspector Controls */}

	/** Start Border Width */
	const [previousBorderWidth, setPreviousBorderWidth] = useState(BoxDesktopBorderWidth);
	/** Function to update all Border Width values */
	const updateAllBorderWidth = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					BoxDesktopBorderWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					BoxTabBorderWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					BoxMobileBorderWidth: {
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
				setAttributes({ BoxDesktopBorderWidth: { ...BoxDesktopBorderWidth, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ BoxTabBorderWidth: { ...BoxTabBorderWidth, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ BoxMobileBorderWidth: { ...BoxMobileBorderWidth, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all padding values if BoxBorderLink is true */
		if (BoxBorderLink) {
			updateAllBorderWidth(value, DeviceType);
		}
	};

	/** Function to handle BoxBorderLink toggle */
	const handleBorderWidthLinkToggle = () => {
		if (!BoxBorderLink) {
			setAttributes({ BoxDesktopBorderWidth: previousBorderWidth });
		}
		/** setBoxBorderLinkLink(!BoxBorderLink) */
		setAttributes({BoxBorderLink: !BoxBorderLink})
	};

	/** Update previousborderWidth state when Border Width changes */
	useEffect(() => {
		setPreviousBorderWidth(BoxDesktopBorderWidth);
	}, [BoxDesktopBorderWidth]);

	/** Function to handle device click for Border Width */
	const handleBorderWidthDeviceClick = (device) => {
		setAttributes({ DeviceType: device });
	};

	/** Default Border Width for desktop (using BoxDesktopBorderWidth) */
	const borderWidth = `${BoxDesktopBorderWidth.top}${BoxBorderUnits} ${BoxDesktopBorderWidth.right}${BoxBorderUnits} ${BoxDesktopBorderWidth.bottom}${BoxBorderUnits} ${BoxDesktopBorderWidth.left}${BoxBorderUnits}`;
	/** End Border Width */

	/** Start Border Radius Width */
	const [previousBorderRadiusWidth, setPreviousBorderRadiusWidth] = useState(BoxDesktopBorderRadiusWidth);
	/** Function to update all Border Width values */
	const updateAllBorderRadiusWidth = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					BoxDesktopBorderRadiusWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					BoxTabBorderRadiusWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					BoxMobileBorderRadiusWidth: {
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
				setAttributes({ BoxDesktopBorderRadiusWidth: { ...BoxDesktopBorderRadiusWidth, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ BoxTabBorderRadiusWidth: { ...BoxTabBorderRadiusWidth, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ BoxMobileBorderRadiusWidth: { ...BoxMobileBorderRadiusWidth, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all padding values if BoxBorderRadiusLink is true */
		if (BoxBorderRadiusLink) {
			updateAllBorderRadiusWidth(value, DeviceType);
		}
	};

	/** Function to handle BoxBorderRadiusLink toggle */
	const handleBorderRadiusWidthLinkToggle = () => {
		if (!BoxBorderRadiusLink) {
			setAttributes({ BoxDesktopBorderRadiusWidth: previousBorderRadiusWidth });
		}
		/** setBoxBorderRadiusLinkLink(!BoxBorderRadiusLink) */
		setAttributes({BoxBorderRadiusLink: !BoxBorderRadiusLink})
	};

	/** Update previousBorderRadiusWidth state when Border Width changes */
	useEffect(() => {
		setPreviousBorderRadiusWidth(BoxDesktopBorderRadiusWidth);
	}, [BoxDesktopBorderRadiusWidth]);

	/** Function to handle device click for Border Width */
	const handleBorderRadiusWidthDeviceClick = (device) => {
		setAttributes({ DeviceType: device });
	};

	/** Default Border Width for desktop (using BoxDesktopBorderWidth) */
	const borderRadiusWidth = `${BoxDesktopBorderRadiusWidth.top}${BoxBorderRadiusUnits} ${BoxDesktopBorderRadiusWidth.right}${BoxBorderRadiusUnits} ${BoxDesktopBorderRadiusWidth.bottom}${BoxBorderRadiusUnits} ${BoxDesktopBorderRadiusWidth.left}${BoxBorderRadiusUnits}`;
	/** End Border Radius Width */

	/* set default values for the style attributes */
	useEffect(() => {
		if (counterNumberFontFamily) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${counterNumberFontFamily.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [counterNumberFontFamily]);

	useEffect(() => {
		if (counterTitleFontFamily) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${counterTitleFontFamily.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [counterTitleFontFamily]);

	return (
		<>
			<style>
				{`
                .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number,
                .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-prefix,
                .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-suffix{
               		font-family: ${counterNumberFontFamily !== 'default' ? counterNumberFontFamily : counterNumberFontFamily};
                    font-size: ${counterNumberFontSize !== undefined ? `${counterNumberFontSize}${counterNumberFontSize}` : ''}px;
                    font-weight: ${counterNumberFontWeight};
                    font-style: ${counterNumberFontStyle};
                    text-transform: ${counterNumberTextTransform};
                    text-decoration: ${counterNumberTextDecoration};
                    ${counterNumberLetterSpacing !== undefined ? `letter-spacing: ${counterNumberLetterSpacing}${counterNumberLetterSpacing};` : ''}
                    ${counterNumberLineHeight !== undefined ? `line-height: ${counterNumberLineHeight}${counterNumberLineHeight};` : ''}
                }
                .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-title{
               		font-family: ${counterTitleFontFamily !== 'default' ? counterTitleFontFamily : counterTitleFontFamily};
                    font-size: ${counterTitleFontSize !== undefined ? `${counterTitleFontSize}${counterTitleFontSize}` : ''}px;
                    font-weight: ${counterTitleFontWeight};
                    font-style: ${counterTitleFontStyle};
                    text-transform: ${counterTitleTextTransform};
                    text-decoration: ${counterTitleTextDecoration};
                    ${counterTitleLetterSpacing !== undefined ? `letter-spacing: ${counterTitleLetterSpacing}${counterTitleLetterSpacing};` : ''}
                    ${counterTitleLineHeight !== undefined ? `line-height: ${counterTitleLineHeight}${counterTitleLineHeight};` : ''}
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
								name:
									"styles",
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
							<div className={"fb-tab-controls" + tab.name}>
								{tab.name === 'general' && (
									<>
									<PanelBody title={__("general", "frontis-blocks")} initialOpen={true}>
										<RangeControl
											label={__('Counter Number', 'frontis-blocks')}
											value={counterNumber}
											onChange={(value) => setAttributes({ counterNumber: value })}
											min={0}
											max={10000}
										/>
										<TextControl
											label={__('Counter Title', 'frontis-blocks')}
											value={counterTitle}
											onChange={(value) => setAttributes({ counterTitle: value })}
										/>
										<TextControl
											label={__('Counter Prefix', 'frontis-blocks')}
											value={counterPrefix}
											onChange={(value) => setAttributes({ counterPrefix: value })}
										/>
										<TextControl
											label={__('Counter Suffix', 'frontis-blocks')}
											value={counterSuffix}
											onChange={(value) => setAttributes({ counterSuffix: value })}
										/>
										<ToggleControl
											label={__('Show Thousands Separator', 'frontis-blocks')}
											checked={showThousandsSeparator}
											onChange={(value) => setAttributes({ showThousandsSeparator: value })}
										/>

										<BaseControl className="fb-sub-heading-position">
											<SelectControl
												label={__("Counter Icon: Media Type", "frontis-block")}
												value={mediaSwitcher}
												options={mediaType}
												onChange={(value) => setAttributes({mediaSwitcher: value})}
											/>
										</BaseControl>


										<div className='fb-image-upload-field-wrapper'>
											{mediaSwitcher === 'image' && attributes.counterMediaUrl && (
												<BaseControl>
													<MediaUploadCheck>
														<MediaUpload
															onSelect={(media) => {
																setAttributes({
																	counterMediaId: media['id'],
																	counterMediaUrl: media['url'],
																	counterMediaWidth: media['width'],
																	counterMediaHeight: media['height']
																});
															}}
															type="image"
															value={attributes.counterMediaId}
															render={({open}) => {
																return (
																	<Button
																		className={attributes.counterMediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
																		onClick={open}
																	>
																		{attributes.counterMediaId == 0 && __('Select Icon Image', 'frontis-blocks')}
																		{attributes.counterMediaId != 0 &&
																			<ResponsiveWrapper
																				naturalWidth={attributes.counterMediaWidth}
																				naturalHeight={attributes.counterMediaHeight}>
																				<img
																					src={attributes.counterMediaUrl}/>
																			</ResponsiveWrapper>
																		}
																	</Button>
																);
															}}
														/>
													</MediaUploadCheck>
													{attributes.counterMediaId != 0 &&
														<HStack className='editor-post-featured-image__actions'>
															<Button
																className='editor-post-featured-image__action'
																onClick={() => removeCounterMedia()}>{__('Remove', 'frontis-block')}</Button>
															<MediaUploadCheck>
																<MediaUpload
																	title={__('Replace image', 'frontis-block')}
																	value={attributes.counterMediaId}
																	onSelect={(media) => {
																		setAttributes({
																			counterMediaId: media['id'],
																			counterMediaUrl: media['url'],
																			counterMediaWidth: media['width'],
																			counterMediaHeight: media['height']
																		});
																	}}
																	type="image"
																	render={({open}) => (
																		<Button
																			className='editor-post-featured-image__action'
																			onClick={open}>{__('Replace', 'frontis-block')}</Button>
																	)}
																/>
															</MediaUploadCheck>
														</HStack>
													}
												</BaseControl>
											)}

											{mediaSwitcher === 'icon' && (
												<BaseControl>
													<FBIconPicker value={icon} setIconHandler={iconHandler}/>
												</BaseControl>
											)}
										</div>
									</PanelBody>
									</>
								)}

								{tab.name === "styles" && (
									<>

										<PanelBody
											title={__("Container", "frontis-blocks")}
											initialOpen={true}
										>
												<SelectControl
													label={__("Border Style", "frontis-blocks")}
													value={BoxBorder}
													options={BORDER_STYLES}
													onChange={(value) => setAttributes({ BoxBorder: value })}
												/>


												<BaseControl
													label={__("Border Color", "frontis-blocks")}
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
																			color={BoxBorderColor}
																			onChange={(value) => setAttributes({ BoxBorderColor: value })}
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
																			value={BoxBorderColor}
																			onChange={(value) => setAttributes({ BoxBorderColor: value })}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>

												<div className="sh_heading_spacing_container">
													<div className="sh_heading_spacing_inner_container">
														{/* Border Width */}
														<div className="sh_heading_label_container">
															<ResponsiveControl labelText={__('Border', 'frontis-block')} device={DeviceType} deviceHandler={handleBorderWidthDeviceClick}/>
															<div className="fb-setting-units-type">
																<ButtonGroup className="fb-setting-units-type-wrap">
																	{UNIT_TYPES.map((item, key) => (
																		<Button
																			key={key}
																			onClick={() => setAttributes({ BoxBorderUnits: item.value })}
																			className={`fb-setting-units-type-switcher ${BoxBorderUnits === item.value ? 'active' : ''}`}
																		>
																			{item.label}
																		</Button>
																	))}
																</ButtonGroup>
															</div>

														</div>
														<div className="sh_heading_input_container">
															<div className="sh_heading_input_wrapper">
																<label className="sh_heading_spacing_input_label">{__("Top", "frontis-blocks")}</label>
																<input
																	type="number"
																	name="top"
																	value={DeviceType === 'Desktop' ? BoxDesktopBorderWidth.top : DeviceType === 'Tablet' ? BoxTabBorderWidth.top : BoxMobileBorderWidth.top}
																	onChange={(e) => handleBorderWidthInputChange(e, 'top')}
																/>
															</div>
															<div className="sh_heading_input_wrapper">
																<label className="sh_heading_spacing_input_label">{__("Right", "frontis-blocks")}</label>
																<input
																	type="number"
																	name="right"
																	value={DeviceType === 'Desktop' ? BoxDesktopBorderWidth.right : DeviceType === 'Tablet' ? BoxTabBorderWidth.right : BoxMobileBorderWidth.right}
																	onChange={(e) => handleBorderWidthInputChange(e, 'right')}
																/>
															</div>
															<div className="sh_heading_input_wrapper">
																<label className="sh_heading_spacing_input_label">{__("Bottom", "frontis-blocks")}</label>
																<input
																	type="number"
																	name="bottom"
																	value={DeviceType === 'Desktop' ? BoxDesktopBorderWidth.bottom : DeviceType === 'Tablet' ? BoxTabBorderWidth.bottom : BoxMobileBorderWidth.bottom}
																	onChange={(e) => handleBorderWidthInputChange(e, 'bottom')}
																/>
															</div>
															<div className="sh_heading_input_wrapper">
																<label className="sh_heading_spacing_input_label">{__("Left", "frontis-blocks")}</label>
																<input
																	type="number"
																	name="left"
																	value={DeviceType === 'Desktop' ? BoxDesktopBorderWidth.left : DeviceType === 'Tablet' ? BoxTabBorderWidth.left : BoxMobileBorderWidth.left}
																	onChange={(e) => handleBorderWidthInputChange(e, 'left')}
																/>
															</div>
															<div className="sh_heading_input_wrapper">
																<label className="sh_heading_spacing_input_label"></label>
																<span
																	className={`dashicons ${BoxBorderLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${BoxBorderLink ? 'is-checked' : ''}`}
																	onClick={handleBorderWidthLinkToggle}
																>
															</span>
															</div>
														</div>
													</div>
												</div>
												<div className="sh_heading_spacing_container">
													<div className="sh_heading_spacing_inner_container">
														{/* Border radius Width */}
														<div className="sh_heading_label_container">
															<ResponsiveControl labelText={__('Border Radius', 'frontis-block')} device={DeviceType} deviceHandler={handleBorderRadiusWidthDeviceClick}/>
															<div className="fb-setting-units-type">
																<ButtonGroup className="fb-setting-units-type-wrap">
																	{UNIT_TYPES.map((item, key) => (
																		<Button
																			key={key}
																			onClick={() => setAttributes({ BoxBorderRadiusUnits: item.value })}
																			className={`fb-setting-units-type-switcher ${BoxBorderRadiusUnits === item.value ? 'active' : ''}`}
																		>
																			{item.label}
																		</Button>
																	))}
																</ButtonGroup>
															</div>
														</div>
														<div className="sh_heading_input_container">
															<div className="sh_heading_input_wrapper">
																<label className="sh_heading_spacing_input_label">{__("Top", "frontis-blocks")}</label>
																<input
																	type="number"
																	name="top"
																	value={DeviceType === 'Desktop' ? BoxDesktopBorderRadiusWidth.top : DeviceType === 'Tablet' ? BoxTabBorderRadiusWidth.top : BoxMobileBorderRadiusWidth.top}
																	onChange={(e) => handleBorderRadiusWidthInputChange(e, 'top')}
																/>
															</div>
															<div className="sh_heading_input_wrapper">
																<label className="sh_heading_spacing_input_label">{__("Right", "frontis-blocks")}</label>
																<input
																	type="number"
																	name="right"
																	value={DeviceType === 'Desktop' ? BoxDesktopBorderRadiusWidth.right : DeviceType === 'Tablet' ? BoxTabBorderRadiusWidth.right : BoxMobileBorderRadiusWidth.right}
																	onChange={(e) => handleBorderRadiusWidthInputChange(e, 'right')}
																/>
															</div>
															<div className="sh_heading_input_wrapper">
																<label className="sh_heading_spacing_input_label">{__("Bottom", "frontis-blocks")}</label>
																<input
																	type="number"
																	name="bottom"
																	value={DeviceType === 'Desktop' ? BoxDesktopBorderRadiusWidth.bottom : DeviceType === 'Tablet' ? BoxTabBorderRadiusWidth.bottom : BoxMobileBorderRadiusWidth.bottom}
																	onChange={(e) => handleBorderRadiusWidthInputChange(e, 'bottom')}
																/>
															</div>
															<div className="sh_heading_input_wrapper">
																<label className="sh_heading_spacing_input_label">{__("Left", "frontis-blocks")}</label>
																<input
																	type="number"
																	name="left"
																	value={DeviceType === 'Desktop' ? BoxDesktopBorderRadiusWidth.left : DeviceType === 'Tablet' ? BoxTabBorderRadiusWidth.left : BoxMobileBorderRadiusWidth.left}
																	onChange={(e) => handleBorderRadiusWidthInputChange(e, 'left')}
																/>
															</div>
															<div className="sh_heading_input_wrapper">
																<label className="sh_heading_spacing_input_label"></label>
																<span
																	className={`dashicons ${BoxBorderRadiusLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${BoxBorderRadiusLink ? 'is-checked' : ''}`}
																	onClick={handleBorderRadiusWidthLinkToggle}
																>
															</span>
															</div>
														</div>
													</div>
												</div>
										</PanelBody>

										<PanelBody
											title={__("Icon", "frontis-blocks")}
											initialOpen={false}
										>
											<BaseControl
												label={__("Color", "frontis-blocks")}
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
																		color={counterIconColor}
																		onChange={(value) => setAttributes({ counterIconColor: value })}
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
																		value={counterIconColor}
																		onChange={(value) => setAttributes({ counterIconColor: value })}
																	/>
																</div>
															</BaseControl>
														</div>
													)}
												/>
											</BaseControl>
										</PanelBody>
										<PanelBody
											title={__("Counter", "frontis-blocks")}
											initialOpen={false}
										>
											<BaseControl
												label={__("Color", "frontis-blocks")}
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
																		color={counterNumberColor}
																		onChange={(value) => setAttributes({ counterNumberColor: value })}
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
																		value={counterNumberColor}
																		onChange={(value) => setAttributes({ counterNumberColor: value })}
																	/>
																</div>
															</BaseControl>
														</div>
													)}
												/>
											</BaseControl>

											{/* Counter Number Thypography Start */}
											<BaseControl
												label={__("Typography", "frontis-blocks")}
												className="fb-setting-typography"
											>
												<Dropdown
													className="fb-setting-typography-icon-dropdown"
													contentClassName="fb-setting-typography-dropdown-content"
													popoverProps={{ placement: 'bottom-start' }}
													renderToggle={({ isOpen, onToggle }) => (
														<Button
															variant="primary"
															onClick={onToggle}
															aria-expanded={isOpen}
															aria-label={__("Toggle Typography Settings", "frontis-blocks")}
															className="fb-setting-typography-icon-btn"
														>
															<Dashicon icon="edit" className="fb-setting-typography-icon" />
														</Button>
													)}
													renderContent={() => (
														<div className="fb-setting-typography-popup">
															<BaseControl className="fb-setting-typography-popup-inner">
																{/* Font Family */}
																<div className="fb-setting-fontfamily-wrapper">
																	<SelectControl
																		label={__("Font Family", "frontis-blocks")}
																		options={FONT_FAMILYS} // Ensure you have FONT_FAMILYS defined.
																		value={attributes.counterNumberFontFamily}
																		onChange={(value) => setAttributes({ counterNumberFontFamily: value })}
																	/>
																</div>

																{/* Font Size */}
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
																						onClick={() => setAttributes({ counterNumberFontSizeUnits: item.value })}
																						className={`fb-setting-fontsize-units-switcher ${attributes.counterNumberFontSizeUnits === item.value ? 'active' : ''}`}
																					>
																						{item.label}
																					</Button>
																				))}
																			</ButtonGroup>
																		</div>
																	</div>
																	<div className="fb-setting-fontsize-rangecontrol">
																		<RangeControl
																			value={attributes.counterNumberFontSize}
																			onChange={(value) => setAttributes({ counterNumberFontSize: value })}
																			min={1}
																			max={200}
																			allowReset
																			resetFallbackValue={undefined}
																		/>
																	</div>
																</div>

																{/* Font Weight */}
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
																		value={attributes.counterNumberFontWeight}
																		onChange={(value) => setAttributes({ counterNumberFontWeight: value })}
																	/>
																</div>

																{/* Other typography settings: Font Style, Text Transform, Text Decoration, etc. */}
																{/* Similar structure for other controls */}
															</BaseControl>
														</div>
													)}
												/>
											</BaseControl>
											{/* Counter Number Typography End */}
										</PanelBody>
										<PanelBody
											title={__("Title", "frontis-blocks")}
											initialOpen={false}
										>
											<BaseControl
												label={__("Color", "frontis-blocks")}
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
																		color={counterTitleColor}
																		onChange={(value) => setAttributes({ counterTitleColor: value })}
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
																		value={counterTitleColor}
																		onChange={(value) => setAttributes({ counterTitleColor: value })}
																	/>
																</div>
															</BaseControl>
														</div>
													)}
												/>
											</BaseControl>

											{/* Counter Title Thypography Start */}
											<BaseControl
												label={__("Typography", "frontis-blocks")}
												className="fb-setting-typography"
											>
												<Dropdown
													className="fb-setting-typography-icon-dropdown"
													contentClassName="fb-setting-typography-dropdown-content"
													popoverProps={{ placement: 'bottom-start' }}
													renderToggle={({ isOpen, onToggle }) => (
														<Button
															variant="primary"
															onClick={onToggle}
															aria-expanded={isOpen}
															aria-label={__("Toggle Typography Settings", "frontis-blocks")}
															className="fb-setting-typography-icon-btn"
														>
															<Dashicon icon="edit" className="fb-setting-typography-icon" />
														</Button>
													)}
													renderContent={() => (
														<div className="fb-setting-typography-popup">
															<BaseControl className="fb-setting-typography-popup-inner">
																{/* Font Family */}
																<div className="fb-setting-fontfamily-wrapper">
																	<SelectControl
																		label={__("Font Family", "frontis-blocks")}
																		options={FONT_FAMILYS} // Ensure you have FONT_FAMILYS defined.
																		value={attributes.counterTitleFontFamily}
																		onChange={(value) => setAttributes({ counterTitleFontFamily: value })}
																	/>
																</div>

																{/* Font Size */}
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
																						onClick={() => setAttributes({ counterTitleFontSizeUnits: item.value })}
																						className={`fb-setting-fontsize-units-switcher ${attributes.counterTitleFontSizeUnits === item.value ? 'active' : ''}`}
																					>
																						{item.label}
																					</Button>
																				))}
																			</ButtonGroup>
																		</div>
																	</div>
																	<div className="fb-setting-fontsize-rangecontrol">
																		<RangeControl
																			value={attributes.counterTitleFontSize}
																			onChange={(value) => setAttributes({ counterTitleFontSize: value })}
																			min={1}
																			max={200}
																			allowReset
																			resetFallbackValue={undefined}
																		/>
																	</div>
																</div>

																{/* Font Weight */}
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
																		value={attributes.counterTitleFontWeight}
																		onChange={(value) => setAttributes({ counterTitleFontWeight: value })}
																	/>
																</div>

																{/* Other typography settings: Font Style, Text Transform, Text Decoration, etc. */}
																{/* Similar structure for other controls */}
															</BaseControl>
														</div>
													)}
												/>
											</BaseControl>
											{/* Counter Title Typography End */}
										</PanelBody>
									</>
								)}
							</div>
						)}
					</TabPanel>
				</div>
			</InspectorControls>

			<div {...blockProps} id={blockID}>
				<div className={`fb-counter-wrapper ${blockID}`}>
					<div className="fb-counter-item">
						<div className={`fb-counter-icon-wrapper`}>
							{mediaSwitcher === 'image' && attributes.counterMediaUrl && (
								<img src={attributes.counterMediaUrl}/>
							)}
							{mediaSwitcher === 'icon' && (
								<div className="fb-counter-icon">{renderSVG(icon)}</div>
							)}
						</div>
						<div className={`fb-counter-number-wrapper`}>
							<span className={`fb-counter-number-prefix`}>{counterPrefix}</span>
							 <span ref={counterRef} className="fb-counter-number">
								{showThousandsSeparator
									? Number(0).toLocaleString()
									: 0
								}
                        	</span>
							<span className={`fb-counter-number-suffix`}>{counterSuffix}</span>
						</div>
						<span className="fb-counter-title">
                            {counterTitle}
                        </span>
					</div>
				</div>
			</div>
		</>
	);
}
