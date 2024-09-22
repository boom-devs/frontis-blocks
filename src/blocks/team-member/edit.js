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

import TeamMemberContentBorderControl from './style-control/content/team-member-content-border.js';
import TeamMemberContentMarginControl from './style-control/content/team-member-content-margin.js';
import TeamMemberContentPaddingControl from './style-control/content/team-member-content-padding.js';


import TeamMemberImageBorderControl from './style-control/image/team-member-image-border.js';
import TeamMemberImagePaddingControl from './style-control/image/team-member-image-padding.js';
import TeamMemberImageMarginControl from './style-control/image/team-member-image-margin.js';
import TeamMemberNameControl from './style-control/name/team-member-name.js';
import TeamMemberNameMarginControl from './style-control/name/team-member-name-margin.js';
import TeamMemberDesignationControl from './style-control/designation/team-member-designation.js';
import TeamMemberDesignationMarginControl from './style-control/designation/team-member-designation-margin.js';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		teamMemberImageMediaUrl,
		teamMemberImagePaddingUnits,
		desktopteamMemberImagePadding,
		teamMemberImageDesktopPadding,
		teamMemberImageTabPadding,
		teamMemberImageMobilePadding,
		teamMemberImagePaddingLink,

		teamMemberImageMarginUnits,
		desktopteamMemberImageMargin,
		teamMemberImageDesktopMargin,
		teamMemberImageTabMargin,
		teamMemberImageMobileMargin,
		teamMemberImageMarginLink,

		teamMemberImageBorder,
		teamMemberImageBorderColor,
		teamMemberImageBorderUnits,
		teamMemberImageDesktopBorderWidth,
		teamMemberImageTabBorderWidth,
		teamMemberImageMobileBorderWidth,
		teamMemberImageActiveBorderDevice,
		teamMemberImageBorderLink,
		teamMemberImageBorderRadiusUnits,
		teamMemberImageDesktopBorderRadiusWidth,
		teamMemberImageTabBorderRadiusWidth,
		teamMemberImageMobileBorderRadiusWidth,
		teamMemberImageActiveBorderRadiusDevice,
		teamMemberImageBorderRadiusLink,
		teamMemberImageBackgroundColor,

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

		teamMemberNameMarginUnits,
		desktopteamMemberNameMargin,
		teamMemberNameDesktopMargin,
		teamMemberNameTabMargin,
		teamMemberNameMobileMargin,
		teamMemberNameMarginLink,


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

		teamMemberDesignationMarginUnits,
		desktopteamMemberDesignationMargin,
		teamMemberDesignationDesktopMargin,
		teamMemberDesignationTabMargin,
		teamMemberDesignationMobileMargin,
		teamMemberDesignationMarginLink,

		teamMemberContentBackgroundColor,
		teamMemberContentPaddingUnits,
		desktopteamMemberContentPadding,
		teamMemberContentDesktopPadding,
		teamMemberContentTabPadding,
		teamMemberContentMobilePadding,
		teamMemberContentPaddingLink,

		teamMemberContentMarginUnits,
		desktopteamMemberContentMargin,
		teamMemberContentDesktopMargin,
		teamMemberContentTabMargin,
		teamMemberContentMobileMargin,
		teamMemberContentMarginLink,

		teamMemberContentBorder,
		teamMemberContentBorderColor,
		teamMemberContentBorderUnits,
		teamMemberContentDesktopBorderWidth,
		teamMemberContentTabBorderWidth,
		teamMemberContentMobileBorderWidth,
		teamMemberContentActiveBorderDevice,
		teamMemberContentBorderLink,
		teamMemberContentBorderRadiusUnits,
		teamMemberContentDesktopBorderRadiusWidth,
		teamMemberContentTabBorderRadiusWidth,
		teamMemberContentMobileBorderRadiusWidth,
		teamMemberContentActiveBorderRadiusDevice,
		teamMemberContentBorderRadiusLink

	} = attributes;

	// Set blockID if it doesn't exist

	useEffect(() => {
		if (clientId && typeof clientId === 'string') {
			setAttributes({
				blockID: "fb-team-member-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	const blockProps = useBlockProps();

	{/* Team Member Content Control */}
	const teamMemberContentBorderRadiusWidth = `${teamMemberContentDesktopBorderRadiusWidth.top}${teamMemberContentBorderRadiusUnits} ${teamMemberContentDesktopBorderRadiusWidth.right}${teamMemberContentBorderRadiusUnits} ${teamMemberContentDesktopBorderRadiusWidth.bottom}${teamMemberContentBorderRadiusUnits} ${teamMemberContentDesktopBorderRadiusWidth.left}${teamMemberContentBorderRadiusUnits}`;
	const teamMemberContentBorderWidth = `${teamMemberContentDesktopBorderWidth.top}${teamMemberContentBorderUnits} ${teamMemberContentDesktopBorderWidth.right}${teamMemberContentBorderUnits} ${teamMemberContentDesktopBorderWidth.bottom}${teamMemberContentBorderUnits} ${teamMemberContentDesktopBorderWidth.left}${teamMemberContentBorderUnits}`;

	const teamMemberContentMargin = `${teamMemberContentDesktopMargin.top}${teamMemberContentMarginUnits} ${teamMemberContentDesktopMargin.right}${teamMemberContentMarginUnits} ${teamMemberContentDesktopMargin.bottom}${teamMemberContentMarginUnits} ${teamMemberContentDesktopMargin.left}${teamMemberContentMarginUnits}`;


	const teamMemberContentPadding = `${teamMemberContentDesktopPadding.top}${teamMemberContentPaddingUnits} ${teamMemberContentDesktopPadding.right}${teamMemberContentPaddingUnits} ${teamMemberContentDesktopPadding.bottom}${teamMemberContentPaddingUnits} ${teamMemberContentDesktopPadding.left}${teamMemberContentPaddingUnits}`;

	{/* Team Member Image Control */}
	const teamMemberImageBorderWidth = `${teamMemberImageDesktopBorderWidth.top}${teamMemberImageBorderUnits} ${teamMemberImageDesktopBorderWidth.right}${teamMemberImageBorderUnits} ${teamMemberImageDesktopBorderWidth.bottom}${teamMemberImageBorderUnits} ${teamMemberImageDesktopBorderWidth.left}${teamMemberImageBorderUnits}`;
	const teamMemberImageBorderRadiusWidth = `${teamMemberImageDesktopBorderRadiusWidth.top}${teamMemberImageBorderRadiusUnits} ${teamMemberImageDesktopBorderRadiusWidth.right}${teamMemberImageBorderRadiusUnits} ${teamMemberImageDesktopBorderRadiusWidth.bottom}${teamMemberImageBorderRadiusUnits} ${teamMemberImageDesktopBorderRadiusWidth.left}${teamMemberImageBorderRadiusUnits}`;
	const teamMembberImagePadding = `${teamMemberImageDesktopPadding.top}${teamMemberImagePaddingUnits} ${teamMemberImageDesktopPadding.right}${teamMemberImagePaddingUnits} ${teamMemberImageDesktopPadding.bottom}${teamMemberImagePaddingUnits} ${teamMemberImageDesktopPadding.left}${teamMemberImagePaddingUnits}`;

	const teamMemberImageMargin = `${teamMemberImageDesktopMargin.top}${teamMemberImageMarginUnits} ${teamMemberImageDesktopMargin.right}${teamMemberImageMarginUnits} ${teamMemberImageDesktopMargin.bottom}${teamMemberImageMarginUnits} ${teamMemberImageDesktopMargin.left}${teamMemberImageMarginUnits}`;

	{/* Team Member Name Control */}
	const teamMemberNameMargin = `${teamMemberNameDesktopMargin.top}${teamMemberNameMarginUnits} ${teamMemberNameDesktopMargin.right}${teamMemberNameMarginUnits} ${teamMemberNameDesktopMargin.bottom}${teamMemberNameMarginUnits} ${teamMemberNameDesktopMargin.left}${teamMemberNameMarginUnits}`;

	useEffect(() => {
		if (teamMemberNameFontFamily) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${teamMemberNameFontFamily.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [teamMemberNameFontFamily]);


	{/* Team Member Designation Control */}
	const teamMemberDesignationMargin = `${teamMemberDesignationDesktopMargin.top}${teamMemberDesignationMarginUnits} ${teamMemberDesignationDesktopMargin.right}${teamMemberDesignationMarginUnits} ${teamMemberDesignationDesktopMargin.bottom}${teamMemberDesignationMarginUnits} ${teamMemberDesignationDesktopMargin.left}${teamMemberDesignationMarginUnits}`;

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
			<style>
				{`
                .fb-team-member-wrapper.${blockID} .fb-team-member-image-wrapper {
                    border: ${teamMemberImageBorder};
                    border-color: ${teamMemberImageBorderColor};
                    border-width: ${teamMemberImageBorderWidth};
                    border-radius: ${teamMemberImageBorderRadiusWidth};
                    margin: ${teamMemberImageMargin};
                }
                .fb-team-member-wrapper.${blockID} .fb-team-member-content {
                    border: ${teamMemberContentBorder};
                    border-color: ${teamMemberContentBorderColor};
                    border-width: ${teamMemberContentBorderWidth};
                    border-radius: ${teamMemberContentBorderRadiusWidth};
                    margin: ${teamMemberContentMargin};
                    padding: ${teamMemberContentPadding};
                    background: ${teamMemberContentBackgroundColor};
                }
                .fb-team-member-wrapper.${blockID} .fb-team-member-image-wrapper .fb-team-member-image-overlay {
                    background: ${teamMemberImageBackgroundColor};
                }
         		.fb-team-member-wrapper.${blockID} .fb-team-member-name {
         		    font-family: ${teamMemberNameFontFamily !== 'default' ? teamMemberNameFontFamily : teamMemberNameFontFamily};
                    font-size: ${teamMemberNameFontSize !== undefined ? `${teamMemberNameFontSize}${teamMemberNameFontSizeUnits}` : ''};
                    font-weight: ${teamMemberNameFontWeight};
                    font-style: ${teamMemberNameFontStyle};
                    text-transform: ${teamMemberNameTextTransform};
                    text-decoration: ${teamMemberNameTextDecoration};
                    ${teamMemberNameLetterSpacing !== undefined ? `letter-spacing: ${teamMemberNameLetterSpacing}${teamMemberNameLetterSpacingUnits};` : ''}
                    ${teamMemberNameLineHeight !== undefined ? `line-height: ${teamMemberNameLineHeight}${teamMemberNameLineHeightUnits};` : ''}
         			color: ${teamMemberNameColor};
         			margin: ${teamMemberNameMargin};
         		}
         		.fb-team-member-wrapper.${blockID} .fb-team-member-designation {
         		    font-family: ${teamMemberDesignationFontFamily !== 'default' ? teamMemberDesignationFontFamily : teamMemberDesignationFontFamily};
                    font-size: ${teamMemberDesignationFontSize !== undefined ? `${teamMemberDesignationFontSize}${teamMemberDesignationFontSizeUnits}` : ''};
                    font-weight: ${teamMemberDesignationFontWeight};
                    font-style: ${teamMemberDesignationFontStyle};
                    text-transform: ${teamMemberDesignationTextTransform};
                    text-decoration: ${teamMemberDesignationTextDecoration};
                    ${teamMemberDesignationLetterSpacing !== undefined ? `letter-spacing: ${teamMemberDesignationLetterSpacing}${teamMemberDesignationLetterSpacingUnits};` : ''}
                    ${teamMemberDesignationLineHeight !== undefined ? `line-height: ${teamMemberDesignationLineHeight}${teamMemberDesignationLineHeightUnits};` : ''}
         			color: ${teamMemberDesignationColor};
         			margin: ${teamMemberDesignationMargin};
         		}

             	 @media only screen and (max-width: 1024px) {
                    .fb-team-member-wrapper.${blockID} .fb-team-member-image-wrapper {
                        margin: ${teamMemberImageTabMargin.top}${teamMemberImageMarginUnits} ${teamMemberImageTabMargin.right}${teamMemberImageMarginUnits} ${teamMemberImageTabMargin.bottom}${teamMemberImageMarginUnits} ${teamMemberImageTabMargin.left}${teamMemberImageMarginUnits} !important;
                        border-width: ${teamMemberImageTabBorderWidth.top}${teamMemberImageBorderUnits} ${teamMemberImageTabBorderWidth.right}${teamMemberImageBorderUnits} ${teamMemberImageTabBorderWidth.bottom}${teamMemberImageBorderUnits} ${teamMemberImageTabBorderWidth.left}${teamMemberImageBorderUnits} !important;
                        border-radius: ${teamMemberImageTabBorderRadiusWidth.top}${teamMemberImageBorderRadiusUnits} ${teamMemberImageTabBorderRadiusWidth.right}${teamMemberImageBorderRadiusUnits} ${teamMemberImageTabBorderRadiusWidth.bottom}${teamMemberImageBorderRadiusUnits} ${teamMemberImageTabBorderRadiusWidth.left}${teamMemberImageBorderRadiusUnits} !important;
                    }
					 .fb-team-member-wrapper.${blockID} .fb-team-member-content {
                        margin: ${teamMemberContentTabMargin.top}${teamMemberContentMarginUnits} ${teamMemberContentTabMargin.right}${teamMemberContentMarginUnits} ${teamMemberContentTabMargin.bottom}${teamMemberContentMarginUnits} ${teamMemberContentTabMargin.left}${teamMemberContentMarginUnits} !important;
                        padding: ${teamMemberContentTabPadding.top}${teamMemberContentPaddingUnits} ${teamMemberContentTabPadding.right}${teamMemberContentPaddingUnits} ${teamMemberContentTabPadding.bottom}${teamMemberContentPaddingUnits} ${teamMemberContentTabPadding.left}${teamMemberContentPaddingUnits} !important;
                        border-width: ${teamMemberContentTabBorderWidth.top}${teamMemberContentBorderUnits} ${teamMemberContentTabBorderWidth.right}${teamMemberContentBorderUnits} ${teamMemberContentTabBorderWidth.bottom}${teamMemberContentBorderUnits} ${teamMemberContentTabBorderWidth.left}${teamMemberContentBorderUnits} !important;
                        border-radius: ${teamMemberContentTabBorderRadiusWidth.top}${teamMemberContentBorderRadiusUnits} ${teamMemberContentTabBorderRadiusWidth.right}${teamMemberContentBorderRadiusUnits} ${teamMemberContentTabBorderRadiusWidth.bottom}${teamMemberContentBorderRadiusUnits} ${teamMemberContentTabBorderRadiusWidth.left}${teamMemberContentBorderRadiusUnits} !important;
					}
                }

                @media only screen and (max-width: 767px) {
                    .fb-team-member-wrapper.${blockID} .fb-team-member-image-wrapper {
                        margin: ${teamMemberImageMobileMargin.top}${teamMemberImageMarginUnits} ${teamMemberImageMobileMargin.right}${teamMemberImageMarginUnits} ${teamMemberImageMobileMargin.bottom}${teamMemberImageMarginUnits} ${teamMemberImageMobileMargin.left}${teamMemberImageMarginUnits} !important;
                        border-width: ${teamMemberImageMobileBorderWidth.top}${teamMemberImageBorderUnits} ${teamMemberImageMobileBorderWidth.right}${teamMemberImageBorderUnits} ${teamMemberImageMobileBorderWidth.bottom}${teamMemberImageBorderUnits} ${teamMemberImageMobileBorderWidth.left}${teamMemberImageBorderUnits} !important;
                        border-radius: ${teamMemberImageMobileBorderRadiusWidth.top}${teamMemberImageBorderRadiusUnits} ${teamMemberImageMobileBorderRadiusWidth.right}${teamMemberImageBorderRadiusUnits} ${teamMemberImageMobileBorderRadiusWidth.bottom}${teamMemberImageBorderRadiusUnits} ${teamMemberImageMobileBorderRadiusWidth.left}${teamMemberImageBorderRadiusUnits} !important;
                    }

                   .fb-team-member-wrapper.${blockID} .fb-team-member-content {
                        margin: ${teamMemberContentMobileMargin.top}${teamMemberContentMarginUnits} ${teamMemberContentMobileMargin.right}${teamMemberContentMarginUnits} ${teamMemberContentMobileMargin.bottom}${teamMemberContentMarginUnits} ${teamMemberContentMobileMargin.left}${teamMemberContentMarginUnits} !important;
                        padding: ${teamMemberContentMobilePadding.top}${teamMemberContentPaddingUnits} ${teamMemberContentMobilePadding.right}${teamMemberContentPaddingUnits} ${teamMemberContentMobilePadding.bottom}${teamMemberContentPaddingUnits} ${teamMemberContentMobilePadding.left}${teamMemberContentPaddingUnits} !important;
                        border-width: ${teamMemberContentMobileBorderWidth.top}${teamMemberContentBorderUnits} ${teamMemberContentMobileBorderWidth.right}${teamMemberContentBorderUnits} ${teamMemberContentMobileBorderWidth.bottom}${teamMemberContentBorderUnits} ${teamMemberContentMobileBorderWidth.left}${teamMemberContentBorderUnits} !important;
                        border-radius: ${teamMemberContentMobileBorderRadiusWidth.top}${teamMemberContentBorderRadiusUnits} ${teamMemberContentMobileBorderRadiusWidth.right}${teamMemberContentBorderRadiusUnits} ${teamMemberContentMobileBorderRadiusWidth.bottom}${teamMemberContentBorderRadiusUnits} ${teamMemberContentMobileBorderRadiusWidth.left}${teamMemberContentBorderRadiusUnits} !important;
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
										<PanelBody title={__("Content", "frontis-blocks")} initialOpen={true}>
											<BaseControl label={__("Photo", "frontis-block")} className="fb-setting-tag-wrapper">
												<MediaUploadCheck>
													<MediaUpload
														onSelect={(media) => {
															setAttributes({
																teamMemberImageMediaID: media.id,
																teamMemberImageMediaUrl: media.url,
																teamMemberImageMediaWidth: media.width,
																teamMemberImageMediaHeight: media.height,
															});
														}}
														type="image"
														value={attributes.teamMemberImageMediaID}
														render={({ open }) => {
															return (
																<Button
																	className={
																		attributes.teamMemberImageMediaID == 0
																			? 'editor-post-featured-image__toggle'
																			: 'editor-post-featured-image__preview'
																	}
																	onClick={open}
																>
																	{attributes.teamMemberImageMediaID == 0 &&
																		__('Select Icon Image', 'frontis-blocks')}
																	{attributes.teamMemberImageMediaID != 0 && (
																		<ResponsiveWrapper
																			naturalWidth={attributes.teamMemberImageMediaWidth}
																			naturalHeight={attributes.teamMemberImageMediaHeight}
																		>
																			<img src={attributes.teamMemberImageMediaUrl} />
																		</ResponsiveWrapper>
																	)}
																</Button>
															);
														}}
													/>
												</MediaUploadCheck>
												{attributes.teamMemberImageMediaID != 0 && (
													<HStack className="editor-post-featured-image__actions">
														<Button
															className="editor-post-featured-image__action"
															onClick={() => removeTeamMemberImageMedia()}
														>
															{__('Remove', 'frontis-block')}
														</Button>
														<MediaUploadCheck>
															<MediaUpload
																title={__('Replace image', 'frontis-block')}
																value={attributes.teamMemberImageMediaID}
																onSelect={(media) => {
																	setAttributes({
																		teamMemberImageMediaID: media.id,
																		teamMemberImageMediaUrl: media.url,
																		teamMemberImageMediaWidth: media.width,
																		teamMemberImageMediaHeight: media.height,
																	});
																}}
																type="image"
																render={({ open }) => (
																	<Button className="editor-post-featured-image__action" onClick={open}>
																		{__('Replace', 'frontis-block')}
																	</Button>
																)}
															/>
														</MediaUploadCheck>
													</HStack>
												)}
											</BaseControl>

											<TextControl
												tagName={attributes.teamMemberNameHeadingTag}
												label={__('Name', 'frontis-blocks')}
												value={attributes.teamMemberName}
												onChange={(value) => setAttributes({ teamMemberName: value })}
												placeholder={__('Wade Warren', 'frontis-block')}
											/>
											<BaseControl label={__("Heading Tag", "frontis-block")} className="fb-setting-tag-wrapper">
												<ButtonGroup className="fb-setting-tag-inner-wrapper">
													{HEADING.map((item, key) => (
														<Button
															key={key}
															onClick={() => setAttributes({ teamMemberNameHeadingTag: item.value })}
															className={`fb-setting-tag-single-btn ${
																attributes.teamMemberNameHeadingTag === item.value ? 'active' : ''
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											<TextControl
												label={__('Designation', 'frontis-blocks')}
												value={attributes.teamMemberDesignation}
												onChange={(value) => setAttributes({ teamMemberDesignation: value })}
											/>
											{/*<TextareaControl*/}
											{/*	label={__('Short Bio', 'frontis-blocks')}*/}
											{/*	value={attributes.teamMemberContent}*/}
											{/*	onChange={(value) => setAttributes({ teamMemberContent: value })}*/}
											{/*/>*/}
										</PanelBody>
									</>
								)}

								{tab.name === "styles" && (
									<>
										<PanelBody
											title={__("Content", "frontis-blocks")}
											initialOpen={true}
										>
											<TeamMemberContentBorderControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<TeamMemberContentMarginControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<TeamMemberContentPaddingControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
										</PanelBody>

										<PanelBody
											title={__("Photo", "frontis-blocks")}
											initialOpen={false}
											className="fb-setting-border-setting-wrapper"
										>
											<TeamMemberImageBorderControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>

											<TeamMemberImageMarginControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
										</PanelBody>


										<PanelBody
											title={__("Name", "frontis-blocks")}
											initialOpen={false}
										>
											<TeamMemberNameControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<TeamMemberNameMarginControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>

										</PanelBody>

										<PanelBody
											title={__("Designation", "frontis-blocks")}
											initialOpen={false}
										>
											<TeamMemberDesignationControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<TeamMemberDesignationMarginControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
										</PanelBody>


										{/*<PanelBody*/}
										{/*	title={__("Social Profile", "frontis-blocks")}*/}
										{/*	initialOpen={false}*/}
										{/*>*/}

										{/*</PanelBody>*/}

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
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
