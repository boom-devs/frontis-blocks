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
import CounterIconControl from "@Blocks/counter-number/style-control/counter-icon-control";
import CounterItemSizeControl from "@Blocks/counter-number/style-control/counter-item-size-control";
import CounterItemBgColorControl from "@Blocks/counter-number/style-control/counter-item-bg-color-control";
import CounterItemBorderTypeControl from "@Blocks/counter-number/style-control/counter-item-border-type-control";
import CounterItemBorderRadiusControl from "@Blocks/counter-number/style-control/counter-item-border-radius-control";
import CounterNumberTypographyControl from "@Blocks/counter-number/style-control/counter-number-typograpy-control";
import CounterNumberMarginControl from "@Blocks/counter-number/style-control/counter-number-margin-control";
import CounterNumberTitleTypographyControl from "@Blocks/counter-number/style-control/counter-number-title-typograpy-control";
import CounterNumberTitleMarginControl from "@Blocks/counter-number/style-control/counter-number-title-margin-control";


export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		deviceType,
		counterNumber,
		counterPrefix,
		counterSuffix,
		counterTitle,
		showThousandsSeparator,
		icon,
		mediaSwitcher,
		counterMediaUrl,

		counterItemSize,
		counterItemSizeUnits,
		// Border Type
		counterItemBorder,
		counterItemBorderColor,
		counterItemBackgroundColor,

		counterItemBorderTypeUnits,
		counterItemBorderTypeDesktop,
		counterItemBorderTypeTablet,
		counterItemBorderTypeMobile,
		counterItemBorderTypeLink,

		// Border Radius
		counterItemBorderRadiusUnits,
		counterItemBorderRadiusDesktop,
		counterItemBorderRadiusTablet,
		counterItemBorderRadiusMobile,
		counterItemBorderRadiusLink,

		counterItemBgColorSwitcher,
		counterItemBgColor,
		counterItemBgHoverColor,

		counterIconColorSwitcher,
		counterIconColor,
		counterIconHoverColor,
		counterIconSize,
		counterIconSizeUnits,

		counterIconMarginUnits,
		counterIconMarginDesktop,
		counterIconMarginTablet,
		counterIconMarginMobile,
		counterIconMarginLink,


		counterNumberFontColorSwitcher,
		counterNumberFontColor,
		counterNumberFontHoverColor,

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

		counterNumberMarginUnits,
		counterNumberMarginDesktop,
		counterNumberMarginTablet,
		counterNumberMarginMobile,
		counterNumberMarginLink,


		counterNumberTitleFontColorSwitcher,
		counterNumberTitleFontColor,
		counterNumberTitleFontHoverColor,

		counterNumberTitleFontFamily,
		counterNumberTitleFontSize,
		counterNumberTitleFontSizeUnits,
		counterNumberTitleFontWeight,
		counterNumberTitleFontStyle,
		counterNumberTitleTextTransform,
		counterNumberTitleTextDecoration,
		counterNumberTitleLetterSpacing,
		counterNumberTitleLetterSpacingUnits,
		counterNumberTitleLineHeight,
		counterNumberTitleLineHeightUnits,

		counterNumberTitleMarginUnits,
		counterNumberTitleMarginDesktop,
		counterNumberTitleMarginTablet,
		counterNumberTitleMarginMobile,
		counterNumberTitleMarginLink,


	} = attributes;

	const counterRef = useRef(null);
	const observerRef = useRef(null);

	useEffect(() => {
		if (!blockID) {
			setAttributes({
				blockID: "counter-number" + clientId.slice(0, 8),
			});
		}
	}, [blockID, clientId, setAttributes]);


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
		setAttributes({icon: iconName || 'star' })
	}

	const blockProps = useBlockProps();


	{/* Inspector Controls */}
	{/* Counter Item Control */}
	const counterItemBorderTypeGetDesktop = `${counterItemBorderTypeDesktop.top}${counterItemBorderTypeUnits[deviceType]} ${counterItemBorderTypeDesktop.right}${counterItemBorderTypeUnits[deviceType]} ${counterItemBorderTypeDesktop.bottom}${counterItemBorderTypeUnits[deviceType]} ${counterItemBorderTypeDesktop.left}${counterItemBorderTypeUnits[deviceType]}`;
	const counterItemBorderTypeGetTablet = `${counterItemBorderTypeTablet.top}${counterItemBorderTypeUnits[deviceType]} ${counterItemBorderTypeTablet.right}${counterItemBorderTypeUnits[deviceType]} ${counterItemBorderTypeTablet.bottom}${counterItemBorderTypeUnits[deviceType]} ${counterItemBorderTypeTablet.left}${counterItemBorderTypeUnits[deviceType]}`;
	const counterItemBorderTypeGetMobile = `${counterItemBorderTypeMobile.top}${counterItemBorderTypeUnits[deviceType]} ${counterItemBorderTypeMobile.right}${counterItemBorderTypeUnits[deviceType]} ${counterItemBorderTypeMobile.bottom}${counterItemBorderTypeUnits[deviceType]} ${counterItemBorderTypeMobile.left}${counterItemBorderTypeUnits[deviceType]}`;


	const counterItemBorderRadiusGetDesktop = `${counterItemBorderRadiusDesktop.top}${counterItemBorderRadiusUnits[deviceType]} ${counterItemBorderRadiusDesktop.right}${counterItemBorderRadiusUnits[deviceType]} ${counterItemBorderRadiusDesktop.bottom}${counterItemBorderRadiusUnits[deviceType]} ${counterItemBorderRadiusDesktop.left}${counterItemBorderRadiusUnits[deviceType]}`;
	const counterItemBorderRadiusGetTablet = `${counterItemBorderRadiusTablet.top}${counterItemBorderRadiusUnits[deviceType]} ${counterItemBorderRadiusTablet.right}${counterItemBorderRadiusUnits[deviceType]} ${counterItemBorderRadiusTablet.bottom}${counterItemBorderRadiusUnits[deviceType]} ${counterItemBorderRadiusTablet.left}${counterItemBorderRadiusUnits[deviceType]}`;
	const counterItemBorderRadiusGetMobile = `${counterItemBorderRadiusMobile.top}${counterItemBorderRadiusUnits[deviceType]} ${counterItemBorderRadiusMobile.right}${counterItemBorderRadiusUnits[deviceType]} ${counterItemBorderRadiusMobile.bottom}${counterItemBorderRadiusUnits[deviceType]} ${counterItemBorderRadiusMobile.left}${counterItemBorderRadiusUnits[deviceType]}`;


	/* Counter Icon */
	const counterIconMarginGetDesktop = `${counterIconMarginDesktop.top}${counterIconMarginUnits[deviceType]} ${counterIconMarginDesktop.right}${counterIconMarginUnits[deviceType]} ${counterIconMarginDesktop.bottom}${counterIconMarginUnits[deviceType]} ${counterIconMarginDesktop.left}${counterIconMarginUnits[deviceType]}`;
	const counterIconMarginGetTablet = `${counterIconMarginTablet.top}${counterIconMarginUnits[deviceType]} ${counterIconMarginTablet.right}${counterIconMarginUnits[deviceType]} ${counterIconMarginTablet.bottom}${counterIconMarginUnits[deviceType]} ${counterIconMarginTablet.left}${counterIconMarginUnits[deviceType]}`;
	const counterIconMarginGetMobile = `${counterIconMarginMobile.top}${counterIconMarginUnits[deviceType]} ${counterIconMarginMobile.right}${counterIconMarginUnits[deviceType]} ${counterIconMarginMobile.bottom}${counterIconMarginUnits[deviceType]} ${counterIconMarginMobile.left}${counterIconMarginUnits[deviceType]}`;

	/* Counter Number */
	const counterNumberMarginGetDesktop = `${counterNumberMarginDesktop.top}${counterNumberMarginUnits[deviceType]} ${counterNumberMarginDesktop.right}${counterNumberMarginUnits[deviceType]} ${counterNumberMarginDesktop.bottom}${counterNumberMarginUnits[deviceType]} ${counterNumberMarginDesktop.left}${counterNumberMarginUnits[deviceType]}`;
	const counterNumberMarginGetTablet = `${counterNumberMarginTablet.top}${counterNumberMarginUnits[deviceType]} ${counterNumberMarginTablet.right}${counterNumberMarginUnits[deviceType]} ${counterNumberMarginTablet.bottom}${counterNumberMarginUnits[deviceType]} ${counterNumberMarginTablet.left}${counterNumberMarginUnits[deviceType]}`;
	const counterNumberMarginGetMobile = `${counterNumberMarginMobile.top}${counterNumberMarginUnits[deviceType]} ${counterNumberMarginMobile.right}${counterNumberMarginUnits[deviceType]} ${counterNumberMarginMobile.bottom}${counterNumberMarginUnits[deviceType]} ${counterNumberMarginMobile.left}${counterNumberMarginUnits[deviceType]}`;

	/* Counter Title */
	const counterNumberTitleMarginGetDesktop = `${counterNumberTitleMarginDesktop.top}${counterNumberTitleMarginUnits[deviceType]} ${counterNumberTitleMarginDesktop.right}${counterNumberTitleMarginUnits[deviceType]} ${counterNumberTitleMarginDesktop.bottom}${counterNumberTitleMarginUnits[deviceType]} ${counterNumberTitleMarginDesktop.left}${counterNumberTitleMarginUnits[deviceType]}`;
	const counterNumberTitleMarginGetTablet = `${counterNumberTitleMarginTablet.top}${counterNumberTitleMarginUnits[deviceType]} ${counterNumberTitleMarginTablet.right}${counterNumberTitleMarginUnits[deviceType]} ${counterNumberTitleMarginTablet.bottom}${counterNumberTitleMarginUnits[deviceType]} ${counterNumberTitleMarginTablet.left}${counterNumberTitleMarginUnits[deviceType]}`;
	const counterNumberTitleMarginGetMobile = `${counterNumberTitleMarginMobile.top}${counterNumberTitleMarginUnits[deviceType]} ${counterNumberTitleMarginMobile.right}${counterNumberTitleMarginUnits[deviceType]} ${counterNumberTitleMarginMobile.bottom}${counterNumberTitleMarginUnits[deviceType]} ${counterNumberTitleMarginMobile.left}${counterNumberTitleMarginUnits[deviceType]}`;


	return (
		<>
			<style>
				{`
				.fb-counter-wrapper.${blockID} .fb-counter-item {
				  	${counterItemBgColor ? `background: ${counterItemBgColor};` : ''}
					${counterItemSize.Desktop ? `width: ${counterItemSize.Desktop}${counterItemSizeUnits.Desktop};` : ''}
					${counterItemSize.Desktop ? `height: ${counterItemSize.Desktop}${counterItemSizeUnits.Desktop};` : ''}
					${counterItemBorder ? `border: ${counterItemBorder};` : ''}
					${counterItemBorderTypeGetDesktop ? `border-width: ${counterItemBorderTypeGetDesktop};` : ''}
					${counterItemBorderRadiusGetDesktop ? `border-radius: ${counterItemBorderRadiusGetDesktop};` : ''}
					${counterItemBorderColor ? `border-color: ${counterItemBorderColor};` : ''}
				}
				.fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon svg{
				  	${counterIconSize.Desktop ? `width: ${counterIconSize.Desktop}${counterIconSizeUnits.Desktop};` : ''}
				  	${counterIconColor ? `fill: ${counterIconColor};` : ''}
				  	${counterIconMarginGetDesktop ? `margin: ${counterIconMarginGetDesktop};` : ''}
				}
				.fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-wrapper {
				  ${counterNumberMarginGetDesktop ? `margin: ${counterNumberMarginGetDesktop};` : ''}
				}

				.fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number,
				.fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-prefix,
				.fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-suffix {
				  ${counterNumberFontColor ? `color: ${counterNumberFontColor};` : ''}
				  ${counterNumberFontFamily ? `font-family: ${counterNumberFontFamily};` : ''}
				  ${counterNumberFontSize.Desktop ? `font-size: ${counterNumberFontSize.Desktop}${counterNumberFontSizeUnits.Desktop};` : ''}
				  ${counterNumberFontWeight ? `font-weight: ${counterNumberFontWeight};` : ''}
				  ${counterNumberFontStyle ? `font-style: ${counterNumberFontStyle};` : ''}
				  ${counterNumberTextTransform ? `text-transform: ${counterNumberTextTransform};` : ''}
				  ${counterNumberTextDecoration ? `text-decoration: ${counterNumberTextDecoration};` : ''}
				  ${counterNumberLetterSpacing.Desktop ? `letter-spacing: ${counterNumberLetterSpacing.Desktop}${counterNumberLetterSpacingUnits.Desktop};` : ''}
				  ${counterNumberLineHeight.Desktop ? `line-height: ${counterNumberLineHeight.Desktop}${counterNumberLineHeightUnits.Desktop};` : ''}
				}

				.fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-title {
				  ${counterNumberTitleFontColor ? `color: ${counterNumberTitleFontColor};` : ''}
				  ${counterNumberTitleFontFamily ? `font-family: ${counterNumberTitleFontFamily};` : ''}
				  ${counterNumberTitleFontSize.Desktop ? `font-size: ${counterNumberTitleFontSize.Desktop}${counterNumberTitleFontSizeUnits.Desktop};` : ''}
				  ${counterNumberTitleFontWeight ? `font-weight: ${counterNumberTitleFontWeight};` : ''}
				  ${counterNumberTitleFontStyle ? `font-style: ${counterNumberTitleFontStyle};` : ''}
				  ${counterNumberTitleTextTransform ? `text-transform: ${counterNumberTitleTextTransform};` : ''}
				  ${counterNumberTitleTextDecoration ? `text-decoration: ${counterNumberTitleTextDecoration};` : ''}
				  ${counterNumberTitleLetterSpacing.Desktop ? `letter-spacing: ${counterNumberTitleLetterSpacing.Desktop}${counterNumberTitleLetterSpacingUnits.Desktop};` : ''}
				  ${counterNumberTitleLineHeight.Desktop ? `line-height: ${counterNumberTitleLineHeight.Desktop}${counterNumberTitleLineHeightUnits.Desktop};` : ''}
				  ${counterNumberTitleMarginGetDesktop ? `margin: ${counterNumberTitleMarginGetDesktop};` : ''}
				}

				@media only screen and (max-width: 1024px) {
					.fb-counter-wrapper.${blockID} .fb-counter-item {
						${counterItemSize.Tablet ? `width: ${counterItemSize.Tablet}${counterItemSizeUnits.Tablet};` : ''}
						${counterItemSize.Tablet ? `height: ${counterItemSize.Tablet}${counterItemSizeUnits.Tablet};` : ''}
						${counterItemBorderTypeGetTablet ? `border-width: ${counterItemBorderTypeGetTablet};` : ''}
						${counterItemBorderRadiusGetTablet ? `border-radius: ${counterItemBorderRadiusGetTablet};` : ''}
					}
					.fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon svg {
						${counterIconSize.Tablet ? `width: ${counterIconSize.Tablet}${counterIconSizeUnits.Tablet};` : ''}
						${counterIconMarginGetTablet ? `margin: ${counterIconMarginGetTablet};` : ''}
					}
				  .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-wrapper {
					${counterNumberMarginGetTablet ? `margin: ${counterNumberMarginGetTablet};` : ''}
				  }

				  .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number,
				  .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-prefix,
				  .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-suffix {
					${counterNumberFontSize.Tablet ? `font-size: ${counterNumberFontSize.Tablet}${counterNumberFontSizeUnits.Tablet};` : ''}
					${counterNumberLetterSpacing.Tablet ? `letter-spacing: ${counterNumberLetterSpacing.Tablet}${counterNumberLetterSpacingUnits.Tablet};` : ''}
					${counterNumberLineHeight.Tablet ? `line-height: ${counterNumberLineHeight.Tablet}${counterNumberLineHeightUnits.Tablet};` : ''}
				  }

				  .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-title {
					${counterNumberTitleMarginGetTablet ? `margin: ${counterNumberTitleMarginGetTablet};` : ''}
					${counterNumberTitleFontSize.Tablet ? `font-size: ${counterNumberTitleFontSize.Tablet}${counterNumberTitleFontSizeUnits.Tablet};` : ''}
					${counterNumberTitleLetterSpacing.Tablet ? `letter-spacing: ${counterNumberTitleLetterSpacing.Tablet}${counterNumberTitleLetterSpacingUnits.Tablet};` : ''}
					${counterNumberTitleLineHeight.Tablet ? `line-height: ${counterNumberTitleLineHeight.Tablet}${counterNumberTitleLineHeightUnits.Tablet};` : ''}
				  }
				}

				@media only screen and (max-width: 767px) {
					.fb-counter-wrapper.${blockID} .fb-counter-item {
						${counterItemSize.Mobile ? `width: ${counterItemSize.Mobile}${counterItemSizeUnits.Mobile};` : ''}
						${counterItemSize.Mobile ? `height: ${counterItemSize.Mobile}${counterItemSizeUnits.Mobile};` : ''}
						${counterItemBorderTypeGetTablet ? `border-width: ${counterItemBorderTypeGetTablet};` : ''}
						${counterItemBorderRadiusGetTablet ? `border-radius: ${counterItemBorderRadiusGetTablet};` : ''}
					}
					.fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon svg {
						${counterIconSize.Mobile ? `width: ${counterIconSize.Mobile}${counterIconSizeUnits.Mobile};` : ''}
						${counterIconMarginGetMobile ? `margin: ${counterIconMarginGetMobile};` : ''}
					}
				  .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-wrapper {
					${counterNumberMarginGetMobile ? `margin: ${counterNumberMarginGetMobile};` : ''}
				  }

				  .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number,
				  .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-prefix,
				  .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-suffix {
					${counterNumberFontSize.Mobile ? `font-size: ${counterNumberFontSize.Mobile}${counterNumberFontSizeUnits.Mobile};` : ''}
					${counterNumberLetterSpacing.Mobile ? `letter-spacing: ${counterNumberLetterSpacing.Mobile}${counterNumberLetterSpacingUnits.Mobile};` : ''}
					${counterNumberLineHeight.Mobile ? `line-height: ${counterNumberLineHeight.Mobile}${counterNumberLineHeightUnits.Mobile};` : ''}
				  }

				  .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-title {
					${counterNumberTitleMarginGetMobile ? `margin: ${counterNumberTitleMarginGetMobile};` : ''}
					${counterNumberTitleFontSize.Mobile ? `font-size: ${counterNumberTitleFontSize.Mobile}${counterNumberTitleFontSizeUnits.Mobile};` : ''}
					${counterNumberTitleLetterSpacing.Mobile ? `letter-spacing: ${counterNumberTitleLetterSpacing.Mobile}${counterNumberTitleLetterSpacingUnits.Mobile};` : ''}
					${counterNumberTitleLineHeight.Mobile ? `line-height: ${counterNumberTitleLineHeight.Mobile}${counterNumberTitleLineHeightUnits.Mobile};` : ''}
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
											title={__("Item", "frontis-blocks")}
											initialOpen={true}
										>
											<CounterItemSizeControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<CounterItemBgColorControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<CounterItemBorderTypeControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<CounterItemBorderRadiusControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>

										</PanelBody>

										<PanelBody
											title={__("Icon", "frontis-blocks")}
											initialOpen={false}
										>
											<CounterIconControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
										</PanelBody>
										<PanelBody
											title={__("Counter Number", "frontis-blocks")}
											initialOpen={false}
										>
											<CounterNumberTypographyControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<CounterNumberMarginControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
										</PanelBody>
										<PanelBody
											title={__("Counter Title", "frontis-blocks")}
											initialOpen={false}
										>
											<CounterNumberTitleTypographyControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<CounterNumberTitleMarginControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
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
