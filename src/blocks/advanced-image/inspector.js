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
	ColorPalette
} from '@wordpress/components';

import {useState, useEffect} from "@wordpress/element";
import ResponsiveControl from '../../components/responsivecontrol';
import './editor.scss';
import {BORDER_STYLES, NORMAL_HOVER, UNIT_TYPES} from "../advanced-button/constants/constants";

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
		normalBorderRadiusLink
	} = attributes;

	// Handle device
	const handleDevice = (device) => {
		setAttributes({deviceType: device})
	}

	/** Function to handle ButtonBorderRadiusLink toggle */
	const handleBorderRadiusWidthLinkToggle = () => {
		// if (!normalBorderRadiusLink) {
		// 	setAttributes({ normalBorderRadiusLink: previousBorderRadiusWidth });
		// }
		// /** setButtonBorderRadiusLinkLink(!ButtonBorderRadiusLink) */
		setAttributes({normalBorderRadiusLink: !normalBorderRadiusLink})
	};

	/** Function to handle input change */
	const handleBorderRadius = (e, direction) => {
		const value = e.target.value;
		switch(DeviceType) {
			case 'Desktop':
				setAttributes({ normalBorderRad: { ...normalBorderRad, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ normalBorderRad: { ...normalBorderRad, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ normalBorderRad: { ...normalBorderRad, [direction]: value } });
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
	const updateAllBorderRadiusWidth = (value, device) => {
		switch(device) {
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
													value={imageStyle}
													options={[
														{label: __("Abstract", "frontis-blocks"), value: "abstract"},
														{
															label: __("Abstract Bursh 1", "frontis-blocks"),
															value: "aesthetic-brush-1"
														},
														{
															label: __("Abstract Bursh 2", "frontis-blocks"),
															value: "aesthetic-brush-1"
														},
														{
															label: __("Aesthetic Blob", "frontis-blocks"),
															value: "aesthetic-blob"
														},
														{label: __("Comment", "frontis-blocks"), value: "comment"},
														{label: __("Brush", "frontis-blocks"), value: "brush"},
														{label: __("Container", "frontis-blocks"), value: "container"},
														{label: __("Hexagon", "frontis-blocks"), value: "hexagon"},
														{
															label: __("Hexagon Blob", "frontis-blocks"),
															value: "hexagon-blob"
														},
														{
															label: __("Hand Drawn Blob", "frontis-blocks"),
															value: "hand-drawn-blob"
														},
														{
															label: __("Irregular Blob", "frontis-blocks"),
															value: "irregular-blob"
														},
														{
															label: __("Minimal Round", "frontis-blocks"),
															value: "minimal-bound"
														},
														{label: __("Octagon", "frontis-blocks"), value: "octagon"},
														{
															label: __("Organic Blob", "frontis-blocks"),
															value: "organic-blob"
														},
														{label: __("Oval Blob", "frontis-blocks"), value: "oval-blob"},
														{label: __("Pattern", "frontis-blocks"), value: "pattern"},
														{label: __("Popup 1", "frontis-blocks"), value: "popup-1"},
														{label: __("Popup 2", "frontis-blocks"), value: "Popup 2"},
														{label: __("Brush", "frontis-blocks"), value: "brush"},
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

												{/* Image Size */}
												<SelectControl
													label={__("Image Size", "frontis-blocks")}
													value={imageSize}
													options={[
														{label: __("Default", "frontis-blocks"), value: "default"},
														{label: __("Thumbnail", "frontis-blocks"), value: "thumbnail"},
														{label: __("Medium", "frontis-blocks"), value: "medium"},
														{label: __("Large", "frontis-blocks"), value: "large"},
														{label: __("Full Size", "frontis-blocks"), value: "full-size"}
													]}
													onChange={(size) => setAttributes({imageSize: size})}
													__nextHasNoMarginBottom
												/>

												{/*Width control*/}
												<RangeControl
													__nextHasNoMarginBottom
													value={imageWidth}
													onChange={(value) => setAttributes({imageWidth: value})}
													min={0}
													max={2000}
												/>

												{/* Auto Height */}
												<ToggleControl
													__nextHasNoMarginBottom
													label={__('Auto Height', 'frontis-block')}
													checked={displayCaption}
													onChange={(newValue) => {
														setAttributes({displayCaption: newValue});
													}}
												/>

												{/* Auto Fit Image */}
												<ToggleControl
													__nextHasNoMarginBottom
													label={__('Auto Fit Image?', 'frontis-block')}
													checked={displayCaption}
													onChange={(newValue) => {
														setAttributes({displayCaption: newValue});
													}}
												/>

												{/* Image Fit Options */}
												<SelectControl
													label={__("Image Fit Options", "frontis-blocks")}
													value={imageSize}
													options={[
														{label: __("Cover", "frontis-blocks"), value: "cover"},
														{label: __("Fill", "frontis-blocks"), value: "fill"},
														{label: __("Contain", "frontis-blocks"), value: "contain"},
													]}
													onChange={(size) => setAttributes({imageSize: size})}
													__nextHasNoMarginBottom
												/>

												{/* Enable Link? */}
												<ToggleControl
													__nextHasNoMarginBottom
													label={__('Enable Link?', 'frontis-block')}
													checked={displayCaption}
													onChange={(newValue) => {
														setAttributes({displayCaption: newValue});
													}}
												/>

												{/*	Hover Effect */}
												<SelectControl
													label={__("Hover Effect", "frontis-blocks")}
													value={imageSize}
													options={[
														{label: __("No Effect", "frontis-blocks"), value: "no-effect"},
														{label: __("Zoom In", "frontis-blocks"), value: "zoom-in"},
														{label: __("Zoom Out", "frontis-blocks"), value: "zoom-out"},
														{label: __("Slide", "frontis-blocks"), value: "slide"},
														{label: __("Blur", "frontis-blocks"), value: "blur"},
													]}
													onChange={(size) => setAttributes({imageSize: size})}
													__nextHasNoMarginBottom
												/>

											</PanelBody>
										</div>
									</>
								)}

								{tab.name === "styles" && (
									<>
										<PanelBody
											title={__("Styles", "frontis-blocks")}
											initialOpen={true}
										>

											{/*	Image Align */}
											<ResponsiveControl device={'desktop'} deviceHandler={handleDevice}
															   labelText={__('Image Align', 'frontis-block')}/>
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
																	<div className="fb-setting-color-setting-icon-popup">
																		<BaseControl
																			className="fb-setting-color-setting-icon-popup-inner">
																			<div className="fb-setting-normal-color">
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
																	<ResponsiveControl
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
																	<div className="fb-setting-spacing-input-wrapper">
																		<label
																			className="fb-setting-spacing-input-label">{__("Top", "frontis-blocks")}</label>
																		<input
																			type="number"
																			name="top"
																			value={DeviceType === 'Desktop' ? normalBorderRad.top : DeviceType === 'Tablet' ? normalBorderRad.top : normalBorderRad.top}
																			onChange={(e) => handleBorderRadius(e, 'top')}
																		/>
																	</div>
																	<div className="fb-setting-spacing-input-wrapper">
																		<label
																			className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
																		<input
																			type="number"
																			name="right"
																			value={DeviceType === 'Desktop' ? normalBorderRad.right : DeviceType === 'Tablet' ? normalBorderRad.right : normalBorderRad.right}
																			onChange={(e) => handleBorderRadius(e, 'right')}
																		/>
																	</div>
																	<div className="fb-setting-spacing-input-wrapper">
																		<label
																			className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
																		<input
																			type="number"
																			name="bottom"
																			value={DeviceType === 'Desktop' ? normalBorderRad.bottom : DeviceType === 'Tablet' ? normalBorderRad.bottom : normalBorderRad.bottom}
																			onChange={(e) => handleBorderRadius(e, 'bottom')}
																		/>
																	</div>
																	<div className="fb-setting-spacing-input-wrapper">
																		<label
																			className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
																		<input
																			type="number"
																			name="left"
																			value={DeviceType === 'Desktop' ? normalBorderRad.left : DeviceType === 'Tablet' ? normalBorderRad.left : normalBorderRad.left}
																			onChange={(e) => handleBorderRadius(e, 'left')}
																		/>
																	</div>
																	<div className="fb-setting-spacing-input-wrapper">
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
													{/*<RangeControl*/}
													{/*	value={HeadingZIndex}*/}
													{/*	onChange={(value) => setAttributes({ HeadingZIndex: value === 0 ? undefined : value })}*/}
													{/*	min={1}*/}
													{/*	max={100}*/}
													{/*	step={1}*/}
													{/*	allowReset*/}
													{/*	resetFallbackValue={undefined}*/}
													{/*/>*/}
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
