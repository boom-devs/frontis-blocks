import { __ } from '@wordpress/i18n';
import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
	InspectorControls, RichText,
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
	ResponsiveWrapper, __experimentalHStack as HStack, TextareaControl,
} from '@wordpress/components';
import {useEffect, useRef, useState} from '@wordpress/element';
import './editor.scss';
import {mediaType, BORDER_STYLES, FONT_FAMILYS, UNIT_TYPES, SELECT_TYPE, iconType} from "./constants/constants";
import FBIconPicker from "../../components/icon-picker";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import ResponsiveControl from "../../components/responsivecontrol";
import {HEADING} from "../info-box/constants/constants";

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		flipBoxTypeSwitcher,
		flipBoxFrontIcon,
		mediaSwitcher,
		flipBoxFrontIconMediaUrl,

		DeviceType,

		flipBoxBackMediaSwitcher,
		flipBoxBackIconMediaUrl,
		flipBoxBackIcon,
		flipBoxBackIconColor,

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

		flipBoxFrontTitle,
		flipBoxFrontTitleHeadingTag,
		flipBoxFrontTitleFontFamily,
		flipBoxFrontTitleFontSize,
		flipBoxFrontTitleFontSizeUnits,
		flipBoxFrontTitleFontWeight,
		flipBoxFrontTitleFontStyle,
		flipBoxFrontTitleTextTransform,
		flipBoxFrontTitleTextDecoration,
		flipBoxFrontTitleLetterSpacing,
		flipBoxFrontTitleLetterSpacingUnits,
		flipBoxFrontTitleLineHeight,
		flipBoxFrontTitleLineHeightUnits,
		flipBoxFrontTitleColor,

		flipBoxBackTitle,
		flipBoxBackTitleHeadingTag,
		flipBoxBackTitleFontFamily,
		flipBoxBackTitleFontSize,
		flipBoxBackTitleFontSizeUnits,
		flipBoxBackTitleFontWeight,
		flipBoxBackTitleFontStyle,
		flipBoxBackTitleTextTransform,
		flipBoxBackTitleTextDecoration,
		flipBoxBackTitleLetterSpacing,
		flipBoxBackTitleLetterSpacingUnits,
		flipBoxBackTitleLineHeight,
		flipBoxBackTitleLineHeightUnits,
		flipBoxBackTitleColor,

		flipBoxFrontContent,
		flipBoxFrontContentFontFamily,
		flipBoxFrontContentFontSize,
		flipBoxFrontContentFontSizeUnits,
		flipBoxFrontContentFontWeight,
		flipBoxFrontContentFontStyle,
		flipBoxFrontContentTextTransform,
		flipBoxFrontContentTextDecoration,
		flipBoxFrontContentLetterSpacing,
		flipBoxFrontContentLetterSpacingUnits,
		flipBoxFrontContentLineHeight,
		flipBoxFrontContentLineHeightUnits,
		flipBoxFrontContentColor,

		flipBoxBackContent,
		flipBoxBackContentFontFamily,
		flipBoxBackContentFontSize,
		flipBoxBackContentFontSizeUnits,
		flipBoxBackContentFontWeight,
		flipBoxBackContentFontStyle,
		flipBoxBackContentTextTransform,
		flipBoxBackContentTextDecoration,
		flipBoxBackContentLetterSpacing,
		flipBoxBackContentLetterSpacingUnits,
		flipBoxBackContentLineHeight,
		flipBoxBackContentLineHeightUnits,
		flipBoxBackContentColor


	} = attributes;

	// Icon media remove handler
	const removeFlipBoxFrontIconMedia = () => {
		setAttributes({
			flipBoxFrontIconMediaID: '',
			flipBoxFrontIconMediaUrl: ''
		});
	}
	const removeFlipBoxBackIconMedia = () => {
		setAttributes({
			flipBoxBackIconMediaID: '',
			flipBoxBackIconMediaUrl: ''
		});
	}
	const flipBoxFrontIconHandler = (iconName) => {
		setAttributes({flipBoxFrontIcon: iconName})
	}
	const flipBoxBackIconHandler = (iconName) => {
		setAttributes({flipBoxBackIcon: iconName})
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
		if (flipBoxFrontTitleFontFamily) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${flipBoxFrontTitleFontFamily.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [flipBoxFrontTitleFontFamily]);

	useEffect(() => {
		if (flipBoxBackTitleFontFamily) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${flipBoxBackTitleFontFamily.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [flipBoxBackTitleFontFamily]);

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
									<PanelBody title={__("Flipbox Content", "frontis-blocks")} initialOpen={true}>

										<BaseControl
											label={__("Select Type", "frontis-block")}
											className="fb-setting-color-panel-wrapper"
										>
											<ButtonGroup className="fb-setting-color-panel-btn">
												{SELECT_TYPE.map((item, key) => (
													<Button
														key={key}
														onClick={() => setAttributes({flipBoxTypeSwitcher: item.value})}
														className={`fb-setting-color-panel-btn-switchr ${flipBoxTypeSwitcher === item.value ? 'active' : ''}`}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>

										{flipBoxTypeSwitcher === 'front' && (
											<>
												<TextControl
													tagName={flipBoxFrontTitleHeadingTag}
													label={__('Title', 'frontis-blocks')}
													value={flipBoxFrontTitle}
													onChange={(value) => setAttributes({ flipBoxFrontTitle: value })}
													placeholder={__('Flip Box Front Title', 'frontis-block')}
												/>
												<BaseControl
													label={__("Heading Tag", "frontis-block")}
													className="fb-setting-tag-wrapper"
												>
													<ButtonGroup
														className="fb-setting-tag-inner-wrapper"
													>
														{HEADING.map((item, key) => (
															<Button
																key={key}
																onClick={() => setAttributes({flipBoxFrontTitleHeadingTag: item.value})}
																className={`fb-setting-tag-single-btn ${flipBoxFrontTitleHeadingTag === item.value ? 'active' : ''}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
												</BaseControl>
												<TextareaControl
													label={__('Description', 'frontis-blocks')}
													value={flipBoxFrontContent}
													onChange={(value) => setAttributes({ flipBoxFrontContent: value })}
												/>
												<BaseControl className="fb-sub-heading-position">
													<SelectControl
														label={__("Front Icon: Media Type", "frontis-block")}
														value={mediaSwitcher}
														options={mediaType}
														onChange={(value) => setAttributes({mediaSwitcher: value})}
													/>
												</BaseControl>

												<div className='fb-image-upload-field-wrapper'>
													{mediaSwitcher === 'image' && attributes.flipBoxFrontIconMediaUrl && (
														<BaseControl>
															<MediaUploadCheck>
																<MediaUpload
																	onSelect={(media) => {
																		setAttributes({
																			flipBoxFrontIconMediaID: media['id'],
																			flipBoxFrontIconMediaUrl: media['url'],
																			flipBoxFrontIconMediaWidth: media['width'],
																			flipBoxFrontIconMediaHeight: media['height']
																		});
																	}}
																	type="image"
																	value={attributes.flipBoxFrontIconMediaID}
																	render={({open}) => {
																		return (
																			<Button
																				className={attributes.flipBoxFrontIconMediaID == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
																				onClick={open}
																			>
																				{attributes.flipBoxFrontIconMediaID == 0 && __('Select Icon Image', 'frontis-blocks')}
																				{attributes.flipBoxFrontIconMediaID != 0 &&
																					<ResponsiveWrapper
																						naturalWidth={attributes.flipBoxFrontIconMediaWidth}
																						naturalHeight={attributes.flipBoxFrontIconMediaHeight}>
																						<img
																							src={attributes.flipBoxFrontIconMediaUrl}/>
																					</ResponsiveWrapper>
																				}
																			</Button>
																		);
																	}}
																/>
															</MediaUploadCheck>
															{attributes.flipBoxFrontIconMediaID != 0 &&
																<HStack className='editor-post-featured-image__actions'>
																	<Button
																		className='editor-post-featured-image__action'
																		onClick={() => removeFlipBoxFrontIconMedia()}>{__('Remove', 'frontis-block')}</Button>
																	<MediaUploadCheck>
																		<MediaUpload
																			title={__('Replace image', 'frontis-block')}
																			value={attributes.flipBoxFrontIconMediaID}
																			onSelect={(media) => {
																				setAttributes({
																					flipBoxFrontIconMediaID: media['id'],
																					flipBoxFrontIconMediaUrl: media['url'],
																					flipBoxFrontIconMediaWidth: media['width'],
																					flipBoxFrontIconMediaHeight: media['height']
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
															<FBIconPicker value={flipBoxFrontIcon} setIconHandler={flipBoxFrontIconHandler}/>
														</BaseControl>
													)}
												</div>
											</>
										)}
										{flipBoxTypeSwitcher === 'back' && (
											<>
												<TextControl
													tagName={flipBoxBackTitleHeadingTag}
													label={__('Title', 'frontis-blocks')}
													value={flipBoxBackTitle}
													onChange={(value) => setAttributes({ flipBoxBackTitle: value })}
													placeholder={__('Flip Box Back Title', 'frontis-block')}
												/>
												<BaseControl
													label={__("Heading Tag", "frontis-block")}
													className="fb-setting-tag-wrapper"
												>
													<ButtonGroup
														className="fb-setting-tag-inner-wrapper"
													>
														{HEADING.map((item, key) => (
															<Button
																key={key}
																onClick={() => setAttributes({flipBoxBackTitleHeadingTag: item.value})}
																className={`fb-setting-tag-single-btn ${flipBoxBackTitleHeadingTag === item.value ? 'active' : ''}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
												</BaseControl>
												<TextareaControl
													label={__('Description', 'frontis-blocks')}
													value={flipBoxBackContent}
													onChange={(value) => setAttributes({ flipBoxBackContent: value })}
												/>
												<BaseControl className="fb-sub-heading-position">
													<SelectControl
														label={__("Back Icon: Media Type", "frontis-block")}
														value={flipBoxBackMediaSwitcher}
														options={mediaType}
														onChange={(value) => setAttributes({flipBoxBackMediaSwitcher: value})}
													/>
												</BaseControl>

												<div className='fb-image-upload-field-wrapper'>
													{flipBoxBackMediaSwitcher === 'image' && attributes.flipBoxBackIconMediaUrl && (
														<BaseControl>
															<MediaUploadCheck>
																<MediaUpload
																	onSelect={(media) => {
																		setAttributes({
																			flipBoxBackIconMediaID: media['id'],
																			flipBoxBackIconMediaUrl: media['url'],
																			flipBoxBackIconMediaWidth: media['width'],
																			flipBoxBackIconMediaHeight: media['height']
																		});
																	}}
																	type="image"
																	value={attributes.flipBoxBackIconMediaID}
																	render={({open}) => {
																		return (
																			<Button
																				className={attributes.flipBoxBackIconMediaID == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
																				onClick={open}
																			>
																				{attributes.flipBoxBackIconMediaID == 0 && __('Select Icon Image', 'frontis-blocks')}
																				{attributes.flipBoxBackIconMediaID != 0 &&
																					<ResponsiveWrapper
																						naturalWidth={attributes.flipBoxBackIconMediaWidth}
																						naturalHeight={attributes.flipBoxBackIconMediaHeight}>
																						<img
																							src={attributes.flipBoxBackIconMediaUrl}/>
																					</ResponsiveWrapper>
																				}
																			</Button>
																		);
																	}}
																/>
															</MediaUploadCheck>
															{attributes.flipBoxBackIconMediaID != 0 &&
																<HStack className='editor-post-featured-image__actions'>
																	<Button
																		className='editor-post-featured-image__action'
																		onClick={() => removeFlipBoxBackIconMedia()}>{__('Remove', 'frontis-block')}</Button>
																	<MediaUploadCheck>
																		<MediaUpload
																			title={__('Replace image', 'frontis-block')}
																			value={attributes.flipBoxBackIconMediaID}
																			onSelect={(media) => {
																				setAttributes({
																					flipBoxBackIconMediaID: media['id'],
																					flipBoxBackIconMediaUrl: media['url'],
																					flipBoxBackIconMediaWidth: media['width'],
																					flipBoxBackIconMediaHeight: media['height']
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

													{flipBoxBackMediaSwitcher === 'icon' && (
														<BaseControl>
															<FBIconPicker value={flipBoxBackIcon} setIconHandler={flipBoxBackIconHandler}/>
														</BaseControl>
													)}
												</div>
											</>
										)}

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
																		color={flipBoxFrontTitleColor}
																		onChange={(value) => setAttributes({ flipBoxFrontTitleColor: value })}
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
																		value={flipBoxFrontTitleColor}
																		onChange={(value) => setAttributes({ flipBoxFrontTitleColor: value })}
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
																		value={attributes.flipBoxFrontTitleFontFamily}
																		onChange={(value) => setAttributes({ flipBoxFrontTitleFontFamily: value })}
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
																						onClick={() => setAttributes({ flipBoxFrontTitleFontSizeUnits: item.value })}
																						className={`fb-setting-fontsize-units-switcher ${attributes.flipBoxFrontTitleFontSizeUnits === item.value ? 'active' : ''}`}
																					>
																						{item.label}
																					</Button>
																				))}
																			</ButtonGroup>
																		</div>
																	</div>
																	<div className="fb-setting-fontsize-rangecontrol">
																		<RangeControl
																			value={attributes.flipBoxFrontTitleFontSize}
																			onChange={(value) => setAttributes({ flipBoxFrontTitleFontSize: value })}
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
																		value={attributes.flipBoxFrontTitleFontWeight}
																		onChange={(value) => setAttributes({ flipBoxFrontTitleFontWeight: value })}
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
																		color={flipBoxBackTitleColor}
																		onChange={(value) => setAttributes({ flipBoxBackTitleColor: value })}
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
																		value={flipBoxBackTitleColor}
																		onChange={(value) => setAttributes({ flipBoxBackTitleColor: value })}
																	/>
																</div>
															</BaseControl>
														</div>
													)}
												/>
											</BaseControl>

											{/* Flip Box Front Title Thypography Start */}
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
																		value={attributes.flipBoxBackTitleFontFamily}
																		onChange={(value) => setAttributes({ flipBoxBackTitleFontFamily: value })}
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
																						onClick={() => setAttributes({ flipBoxBackTitleFontSizeUnits: item.value })}
																						className={`fb-setting-fontsize-units-switcher ${attributes.flipBoxBackTitleFontSizeUnits === item.value ? 'active' : ''}`}
																					>
																						{item.label}
																					</Button>
																				))}
																			</ButtonGroup>
																		</div>
																	</div>
																	<div className="fb-setting-fontsize-rangecontrol">
																		<RangeControl
																			value={attributes.flipBoxBackTitleFontSize}
																			onChange={(value) => setAttributes({ flipBoxBackTitleFontSize: value })}
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
																		value={attributes.flipBoxBackTitleFontWeight}
																		onChange={(value) => setAttributes({ flipBoxBackTitleFontWeight: value })}
																	/>
																</div>

																{/* Other typography settings: Font Style, Text Transform, Text Decoration, etc. */}
																{/* Similar structure for other controls */}
															</BaseControl>
														</div>
													)}
												/>
											</BaseControl>
											{/* Flip Box Front Title Typography End */}
										</PanelBody>
									</>
								)}
							</div>
						)}
					</TabPanel>
				</div>
			</InspectorControls>

			<div {...blockProps} id={blockID}>

				<div className={`fb-flip-box-wrapper ${blockID}`}>
					<div className="fb-flip-box-item">
						<div className="fb-flip-box-front">
							<div className="fb-flip-box-content">
								<div className="fb-flip-box-content-inner">
									<div className={`fb-flip-box-icon-wrapper`}>
										{mediaSwitcher === 'image' && attributes.flipBoxFrontIconMediaUrl && (
											<img src={attributes.flipBoxFrontIconMediaUrl}/>
										)}
										{mediaSwitcher === 'icon' && (
											<div className="fb-flip-box-icon">{renderSVG(flipBoxFrontIcon)}</div>
										)}
									</div>
									<RichText
										tagName={flipBoxFrontTitleHeadingTag}
										value={flipBoxFrontTitle}
										onChange={(value) => setAttributes({flipBoxFrontTitle: value})}
										placeholder={__('Flib Box Front Title', 'frontis-block')}
										className="fb-flip-box-title"
									/>
									<p>{flipBoxFrontContent}</p>
								</div>
							</div>
						</div>
						<div className="fb-flip-box-back">
							<div className="fb-flip-box-content">
								<div className="fb-flip-box-content-inner">
									<div className={`fb-flip-box-icon-wrapper`}>
										{flipBoxBackMediaSwitcher === 'image' && attributes.flipBoxBackIconMediaUrl && (
											<img src={attributes.flipBoxBackIconMediaUrl}/>
										)}
										{flipBoxBackMediaSwitcher === 'icon' && (
											<div className="fb-flip-box-icon">{renderSVG(flipBoxBackIcon)}</div>
										)}
									</div>
									<RichText
										tagName={flipBoxBackTitleHeadingTag}
										value={flipBoxBackTitle}
										onChange={(value) => setAttributes({flipBoxBackTitle: value})}
										placeholder={__('Flip Box Back Title', 'frontis-block')}
										className="fb-flip-box-title"
									/>
									<p>{flipBoxBackContent}</p>
									<a href={`#`} className="fb-flip-box-button">Read More</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
