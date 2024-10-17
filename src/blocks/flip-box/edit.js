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
import FlipBoxItemFrontControl from "@Blocks/flip-box/style-control/flip-box-item-front-control";


export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		flipBoxTypeSwitcher,
		flipBoxFrontIcon,
		mediaSwitcher,
		flipBoxFrontIconMediaUrl,
		deviceType,

		/** Start Flip Box Item Front Attribute */
		flipBoxItemFrontSize,
		flipBoxItemFrontSizeUnits,
		flipBoxItemFrontBorderTypeUnits,
		flipBoxItemFrontBorderTypeDesktop,
		flipBoxItemFrontBorderTypeTablet,
		flipBoxItemFrontBorderTypeMobile,
		flipBoxItemFrontBorderTypeLink,
		flipBoxItemFrontBorder,
		flipBoxItemFrontBorderColorSwitcher,
		flipBoxItemFrontBorderColor,
		flipBoxItemFrontBorderHoverColor,
		flipBoxItemFrontBorderRadiusUnits,
		flipBoxItemFrontBorderRadiusDesktop,
		flipBoxItemFrontBorderRadiusTablet,
		flipBoxItemFrontBorderRadiusMobile,
		flipBoxItemFrontBorderRadiusLink,
		/** End Flip Box Item Front Attribute */


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

	useEffect(() => {
		if (!blockID) {
			setAttributes({
				blockID: "flip-box" + clientId.slice(0, 8),
			});
		}
	}, [blockID, clientId, setAttributes]);

	const blockProps = useBlockProps();


	{/* Inspector Controls */}
	/** Start Flip Box Item Front Control */
	const flipBoxItemFrontBorderTypeGetDesktop = `${flipBoxItemFrontBorderTypeDesktop.top}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeDesktop.right}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeDesktop.bottom}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeDesktop.left}${flipBoxItemFrontBorderTypeUnits[deviceType]}`;
	const flipBoxItemFrontBorderTypeGetTablet = `${flipBoxItemFrontBorderTypeTablet.top}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeTablet.right}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeTablet.bottom}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeTablet.left}${flipBoxItemFrontBorderTypeUnits[deviceType]}`;
	const flipBoxItemFrontBorderTypeGetMobile = `${flipBoxItemFrontBorderTypeMobile.top}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeMobile.right}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeMobile.bottom}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeMobile.left}${flipBoxItemFrontBorderTypeUnits[deviceType]}`;


	const flipBoxItemFrontBorderRadiusGetDesktop = `${flipBoxItemFrontBorderRadiusDesktop.top}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusDesktop.right}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusDesktop.bottom}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusDesktop.left}${flipBoxItemFrontBorderRadiusUnits[deviceType]}`;
	const flipBoxItemFrontBorderRadiusGetTablet = `${flipBoxItemFrontBorderRadiusTablet.top}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusTablet.right}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusTablet.bottom}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusTablet.left}${flipBoxItemFrontBorderRadiusUnits[deviceType]}`;
	const flipBoxItemFrontBorderRadiusGetMobile = `${flipBoxItemFrontBorderRadiusMobile.top}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusMobile.right}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusMobile.bottom}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusMobile.left}${flipBoxItemFrontBorderRadiusUnits[deviceType]}`;
	/** End Flip Box Item Front Control */


	return (
		<>
			<style>
				{`
				.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front {
					${flipBoxItemFrontSize.Desktop ? `min-height: ${flipBoxItemFrontSize.Desktop}${flipBoxItemFrontSizeUnits.Desktop};` : ''}
					${flipBoxItemFrontBorder ? `border: ${flipBoxItemFrontBorder};` : ''}
					${flipBoxItemFrontBorderTypeGetDesktop ? `border-width: ${flipBoxItemFrontBorderTypeGetDesktop};` : ''}
					${flipBoxItemFrontBorderRadiusGetDesktop ? `border-radius: ${flipBoxItemFrontBorderRadiusGetDesktop};` : ''}
					${flipBoxItemFrontBorderColor ? `border-color: ${flipBoxItemFrontBorderColor};` : ''}
				}


				@media only screen and (max-width: 1024px) {
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front {
						${flipBoxItemFrontSize.Tablet ? `min-height: ${flipBoxItemFrontSize.Tablet}${flipBoxItemFrontSizeUnits.Tablet};` : ''}
						${flipBoxItemFrontBorderTypeGetTablet ? `border-width: ${flipBoxItemFrontBorderTypeGetTablet};` : ''}
						${flipBoxItemFrontBorderRadiusGetTablet ? `border-radius: ${flipBoxItemFrontBorderRadiusGetTablet};` : ''}
					}

				}

				@media only screen and (max-width: 767px) {
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front{
						${flipBoxItemFrontSize.Mobile ? `min-height: ${flipBoxItemFrontSize.Mobile}${flipBoxItemFrontSizeUnits.Mobile};` : ''}
						${flipBoxItemFrontBorderTypeGetMobile ? `border-width: ${flipBoxItemFrontBorderTypeGetMobile};` : ''}
						${flipBoxItemFrontBorderRadiusGetMobile ? `border-radius: ${flipBoxItemFrontBorderRadiusGetMobile};` : ''}
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
											title={__("Item", "frontis-blocks")}
											initialOpen={true}
										>


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
													<FlipBoxItemFrontControl
														attributes={attributes}
														setAttributes={setAttributes}
														clientId ={clientId}
													/>
												</>
											)}
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
					<div className={`fb-flip-box-item ${flipBoxTypeSwitcher === 'back' ? 'active' : ''}`}>
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
										placeholder={__('Flip Box Front Title', 'frontis-block')}
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
