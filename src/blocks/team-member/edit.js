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
import FB_ResponsiveControl from '@Components/responsive-control';
import {HEADING} from "../info-box/constants/constants";

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		teamMemberImage,
		teamMemberImageMediaUrl,
		profile,
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


		teamMemberName,
		teamMemberNameHeadingTag,
		teamMemberNameFontFamily,
		teamMemberNameFontSize,
		teamMemberNameFontSizeUnits,
		teamMemberNameFontWeight,
		teamMemberNameFontStyle,
		teamMemberNameTextTransform,
		teamMemberNameTextDecoration,
		teamMemberNameLetterSpacing,
		teamMemberNameLetterSpacingUnits,
		teamMemberNameLineHeight,
		teamMemberNameLineHeightUnits,
		teamMemberNameColor,

		teamMemberDesignation,
		teamMemberDesignationHeadingTag,
		teamMemberDesignationFontFamily,
		teamMemberDesignationFontSize,
		teamMemberDesignationFontSizeUnits,
		teamMemberDesignationFontWeight,
		teamMemberDesignationFontStyle,
		teamMemberDesignationTextTransform,
		teamMemberDesignationTextDecoration,
		teamMemberDesignationLetterSpacing,
		teamMemberDesignationLetterSpacingUnits,
		teamMemberDesignationLineHeight,
		teamMemberDesignationLineHeightUnits,
		teamMemberDesignationColor,

		teamMemberContent,
		teamMemberContentHeadingTag,
		teamMemberContentFontFamily,
		teamMemberContentFontSize,
		teamMemberContentFontSizeUnits,
		teamMemberContentFontWeight,
		teamMemberContentFontStyle,
		teamMemberContentTextTransform,
		teamMemberContentTextDecoration,
		teamMemberContentLetterSpacing,
		teamMemberContentLetterSpacingUnits,
		teamMemberContentLineHeight,
		teamMemberContentLineHeightUnits,
		teamMemberContentColor

	} = attributes;



	const addProfile = () => {
		const newProfiles = [...profiles, { platform: '', url: '' }];
		setAttributes({ profiles: newProfiles });
	};

	const removeProfile = (index) => {
		const newProfiles = profiles.filter((_, i) => i !== index);
		setAttributes({ profiles: newProfiles });
	};

	const updateProfile = (index, field, value) => {
		const newProfiles = profiles.map((profile, i) => {
			if (i === index) {
				return { ...profile, [field]: value };
			}
			return profile;
		});
		setAttributes({ profiles: newProfiles });
	};

	// Icon media remove handler
	const removeTeamMemberImageMedia = () => {
		setAttributes({
			teamMemberImageMediaID: '',
			teamMemberImageMediaUrl: ''
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
		if (teamMemberNameFontFamily) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${teamMemberNameFontFamily.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [teamMemberNameFontFamily]);

	useEffect(() => {
		if (teamMemberDesignationFontFamily) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${teamMemberDesignationFontFamily.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [teamMemberDesignationFontFamily]);

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
									<PanelBody title={__("Content", "frontis-blocks")} initialOpen={true}>
										<BaseControl
											label={__("Photo", "frontis-block")}
											className="fb-setting-tag-wrapper"
										>
											<MediaUploadCheck>
												<MediaUpload
													onSelect={(media) => {
														setAttributes({
															teamMemberImageMediaID: media['id'],
															teamMemberImageMediaUrl: media['url'],
															teamMemberImageMediaWidth: media['width'],
															teamMemberImageMediaHeight: media['height']
														});
													}}
													type="image"
													value={attributes.teamMemberImageMediaID}
													render={({open}) => {
														return (
															<Button
																className={attributes.teamMemberImageMediaID == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
																onClick={open}
															>
																{attributes.teamMemberImageMediaID == 0 && __('Select Icon Image', 'frontis-blocks')}
																{attributes.teamMemberImageMediaID != 0 &&
																	<ResponsiveWrapper
																		naturalWidth={attributes.teamMemberImageMediaWidth}
																		naturalHeight={attributes.teamMemberImageMediaHeight}>
																		<img
																			src={attributes.teamMemberImageMediaUrl}/>
																	</ResponsiveWrapper>
																}
															</Button>
														);
													}}
												/>
											</MediaUploadCheck>
											{attributes.teamMemberImageMediaID != 0 &&
												<HStack className='editor-post-featured-image__actions'>
													<Button
														className='editor-post-featured-image__action'
														onClick={() => removeTeamMemberImageMedia()}>{__('Remove', 'frontis-block')}</Button>
													<MediaUploadCheck>
														<MediaUpload
															title={__('Replace image', 'frontis-block')}
															value={attributes.teamMemberImageMediaID}
															onSelect={(media) => {
																setAttributes({
																	teamMemberImageMediaID: media['id'],
																	teamMemberImageMediaUrl: media['url'],
																	teamMemberImageMediaWidth: media['width'],
																	teamMemberImageMediaHeight: media['height']
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

										<TextControl
											tagName={teamMemberNameHeadingTag}
											label={__('Name', 'frontis-blocks')}
											value={teamMemberName}
											onChange={(value) => setAttributes({ teamMemberName: value })}
											placeholder={__('Wade Warren', 'frontis-block')}
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
														onClick={() => setAttributes({teamMemberNameHeadingTag: item.value})}
														className={`fb-setting-tag-single-btn ${teamMemberNameHeadingTag === item.value ? 'active' : ''}`}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>
										<TextControl
											label={__('Designation', 'frontis-blocks')}
											value={teamMemberDesignation}
											onChange={(value) => setAttributes({ teamMemberDesignation: value })}
										/>
										<TextareaControl
											label={__('Short Bio', 'frontis-blocks')}
											value={teamMemberContent}
											onChange={(value) => setAttributes({ teamMemberContent: value })}
										/>

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
															<FB_ResponsiveControl labelText={__('Border', 'frontis-block')} device={DeviceType} deviceHandler={handleBorderWidthDeviceClick}/>
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
															<FB_ResponsiveControl labelText={__('Border Radius', 'frontis-block')} device={DeviceType} deviceHandler={handleBorderRadiusWidthDeviceClick}/>
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

									</>
								)}
							</div>
						)}
					</TabPanel>
				</div>
			</InspectorControls>

			<div {...blockProps} id={blockID}>
				<div className={`fb-team-member-wrapper ${blockID}`}>
					<div className={`fb-team-member-item`}>
						<div className={`fb-team-member-image-wrapper`}>
							<div className={`fb-team-member-image-overlay`}></div>
							{attributes.teamMemberImageMediaUrl && (
								<img src={attributes.teamMemberImageMediaUrl}/>
							)}
						</div>
						<div className={`fb-team-member-content`}>
							<RichText
								tagName={teamMemberNameHeadingTag}
								value={teamMemberName}
								onChange={(value) => setAttributes({teamMemberName: value})}
								placeholder={__('Enter Team Member Name', 'frontis-block')}
								className="fb-team-member-name"
							/>
							<div className={`fb-team-member-designation`}>{teamMemberDesignation}</div>
							<div class={`fb-team-member-social-profile`}>
								<a href={`#`}>
									<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
										<path d="M4.7191 14V7.61441H6.86161L7.18305 5.12509H4.7191V3.53603C4.7191 2.81554 4.91835 2.32453 5.9527 2.32453L7.26978 2.32399V0.097461C7.04201 0.0678617 6.26015 0 5.35016 0C3.44994 0 2.14901 1.15988 2.14901 3.28949V5.12509H0V7.61441H2.14901V14H4.7191Z" fill="white"/>
									</svg>
								</a>
								<a href={`#`}>
									<svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
										<path d="M13.335 3.4863C12.709 2.41387 11.8599 1.56477 10.7874 0.938816C9.71501 0.312896 8.54381 0 7.27371 0C6.0037 0 4.83244 0.312896 3.76002 0.938816C2.68744 1.56467 1.83833 2.41378 1.21241 3.4863C0.586334 4.55888 0.273438 5.73004 0.273438 7.00008C0.273438 8.41595 0.65925 9.70128 1.43097 10.8556C2.20266 12.0103 3.21439 12.864 4.46617 13.417C4.44184 12.7668 4.48137 12.2291 4.58458 11.8037L5.487 7.99355C5.33504 7.69572 5.25909 7.32536 5.25909 6.88157C5.25909 6.36519 5.38963 5.93376 5.65097 5.58731C5.9123 5.24092 6.23127 5.06776 6.60804 5.06776C6.91178 5.06776 7.14569 5.16801 7.30982 5.36849C7.47397 5.56908 7.5558 5.82122 7.5558 6.12511C7.5558 6.31334 7.52071 6.54282 7.4508 6.81322C7.38095 7.08366 7.28986 7.39659 7.17746 7.7521C7.06505 8.10749 6.98447 8.39175 6.93591 8.60424C6.8509 8.97483 6.92072 9.29232 7.14556 9.55682C7.37038 9.82109 7.66824 9.95342 8.03892 9.95342C8.68907 9.95342 9.22221 9.5919 9.63858 8.86887C10.0548 8.14561 10.2628 7.26755 10.2628 6.23462C10.2628 5.43847 10.0061 4.79129 9.49252 4.29317C8.97901 3.79485 8.26354 3.54558 7.34592 3.54558C6.31919 3.54558 5.48815 3.87527 4.85316 4.53455C4.21814 5.19393 3.90065 5.98241 3.90065 6.8999C3.90065 7.44684 4.05561 7.90569 4.36548 8.27625C4.46875 8.39775 4.50221 8.52839 4.46572 8.66825C4.45356 8.70474 4.4293 8.79586 4.39281 8.94159C4.35647 9.08733 4.33205 9.18173 4.31998 9.22416C4.27143 9.41862 4.15589 9.47937 3.9736 9.40639C3.50577 9.21213 3.15022 8.87477 2.90724 8.39472C2.66417 7.91467 2.5426 7.35856 2.5426 6.72677C2.5426 6.31963 2.60795 5.91253 2.73862 5.50545C2.86916 5.09822 3.07281 4.70484 3.34921 4.32503C3.62578 3.94512 3.95693 3.60937 4.34281 3.31783C4.72853 3.02619 5.19798 2.79228 5.75095 2.61606C6.30393 2.43983 6.89936 2.35172 7.53744 2.35172C8.40044 2.35172 9.17503 2.54311 9.86158 2.92592C10.5483 3.30876 11.0723 3.80392 11.4339 4.41161C11.7956 5.01933 11.9762 5.66955 11.9762 6.36225C11.9762 7.27368 11.8183 8.09396 11.5024 8.82322C11.1865 9.55235 10.7398 10.1251 10.1624 10.5412C9.58514 10.9576 8.92895 11.1657 8.19347 11.1657C7.82291 11.1657 7.47656 11.079 7.15437 10.906C6.83241 10.7327 6.61056 10.5278 6.48909 10.2907C6.21562 11.3661 6.05153 12.0073 5.99681 12.2138C5.88137 12.6451 5.64442 13.1435 5.28584 13.7085C5.93606 13.903 6.59834 14 7.27285 14C8.54285 14 9.71415 13.6871 10.7866 13.0611C11.8591 12.4353 12.7082 11.5862 13.334 10.5138C13.9599 9.44112 14.2728 8.26986 14.2728 6.99995C14.2731 5.73004 13.9607 4.55872 13.335 3.4863Z" fill="white"/>
									</svg>
								</a>
								<a href={`#`}>
									<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
										<path d="M11.4646 11.5955V7.4935C11.4646 5.4775 11.0306 3.9375 8.67856 3.9375C7.54456 3.9375 6.78856 4.5535 6.48056 5.1415H6.45256V4.1195H4.22656V11.5955H6.55056V7.8855C6.55056 6.9055 6.73256 5.9675 7.93656 5.9675C9.12656 5.9675 9.14056 7.0735 9.14056 7.9415V11.5815H11.4646V11.5955Z" fill="white"/>
										<path d="M0.445312 4.125H2.76931V11.601H0.445312V4.125Z" fill="white"/>
										<path d="M1.60962 0.398438C0.867625 0.398438 0.265625 1.00044 0.265625 1.74244C0.265625 2.48444 0.867625 3.10044 1.60962 3.10044C2.35162 3.10044 2.95362 2.48444 2.95362 1.74244C2.95362 1.00044 2.35162 0.398438 1.60962 0.398438Z" fill="white"/>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
