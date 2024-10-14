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
import CounterItemSizeControl from "@Blocks/counter-number/style-control/counter-item-size-control";
import CounterItemBgColorControl from "@Blocks/counter-number/style-control/counter-item-bg-color-control";
import CounterItemBorderTypeControl from "@Blocks/counter-number/style-control/counter-item-border-type-control";
import CounterItemBorderRadiusControl from "@Blocks/counter-number/style-control/counter-item-border-radius-control";
import CounterNumberTypographyControl from "@Blocks/counter-number/style-control/counter-number-typograpy-control";
import CounterNumberMarginControl from "@Blocks/counter-number/style-control/counter-number-margin-control";

// import CounterNumberTitleTypographyControl from "@Blocks/counter-number/style-control/counter-number-title-typograpy-control";
// import CounterNumberTitleMarginControl from "@Blocks/counter-number/style-control/counter-number-title-margin-control";


export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		DeviceType,
		counterNumber,
		counterPrefix,
		counterSuffix,
		counterTitle,
		showThousandsSeparator,
		icon,
		mediaSwitcher,
		counterMediaUrl,


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
		counterNumberMarginTab,
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
		counterNumberTitleMarginTab,
		counterNumberTitleMarginMobile,
		counterNumberTitleMarginLink,


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
		setAttributes({icon: iconName || 'star' })
	}

	const blockProps = useBlockProps();


	{/* Inspector Controls */}

	/* Counter Number */
	const counterNumberMarginGetDesktop = `${counterNumberMarginDesktop.top}${counterNumberMarginUnits[DeviceType]} ${counterNumberMarginDesktop.right}${counterNumberMarginUnits[DeviceType]} ${counterNumberMarginDesktop.bottom}${counterNumberMarginUnits[DeviceType]} ${counterNumberMarginDesktop.left}${counterNumberMarginUnits[DeviceType]}`;
	const counterNumberMarginGetTab = `${counterNumberMarginTab.top}${counterNumberMarginUnits[DeviceType]} ${counterNumberMarginTab.right}${counterNumberMarginUnits[DeviceType]} ${counterNumberMarginTab.bottom}${counterNumberMarginUnits[DeviceType]} ${counterNumberMarginTab.left}${counterNumberMarginUnits[DeviceType]}`;
	const counterNumberMarginGetMobile = `${counterNumberMarginMobile.top}${counterNumberMarginUnits[DeviceType]} ${counterNumberMarginMobile.right}${counterNumberMarginUnits[DeviceType]} ${counterNumberMarginMobile.bottom}${counterNumberMarginUnits[DeviceType]} ${counterNumberMarginMobile.left}${counterNumberMarginUnits[DeviceType]}`;



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
		if (counterNumberTitleFontFamily) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${counterNumberTitleFontFamily.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [counterNumberTitleFontFamily]);

	
	return (
		<>
			<style>
				{`
                .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number,
                .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-prefix,
                .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-suffix{
               		font-family: ${counterNumberFontFamily !== 'default' ? counterNumberFontFamily : counterNumberFontFamily};
                    font-size: ${counterNumberFontSize !== undefined ? `${counterNumberFontSize}${counterNumberFontSizeUnits}` : ''};
                    font-weight: ${counterNumberFontWeight};
                    font-style: ${counterNumberFontStyle};
                    text-transform: ${counterNumberTextTransform};
                    text-decoration: ${counterNumberTextDecoration};
                    ${counterNumberLetterSpacing !== undefined ? `letter-spacing: ${counterNumberLetterSpacing}${counterNumberLetterSpacingUnits};` : ''}
                    ${counterNumberLineHeight !== undefined ? `line-height: ${counterNumberLineHeight}${counterNumberLineHeightUnits};` : ''}
                    margin: ${counterNumberMarginGetDesktop};
                }
                .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-title{
               		font-family: ${counterNumberTitleFontFamily !== 'default' ? counterNumberTitleFontFamily : counterNumberTitleFontFamily};
                    font-size: ${counterNumberTitleFontSize !== undefined ? `${counterNumberTitleFontSize}${counterNumberTitleFontSizeUnits}` : ''};
                    font-weight: ${counterNumberTitleFontWeight};
                    font-style: ${counterNumberTitleFontStyle};
                    text-transform: ${counterNumberTitleTextTransform};
                    text-decoration: ${counterNumberTitleTextDecoration};
                    ${counterNumberTitleLetterSpacing !== undefined ? `letter-spacing: ${counterNumberTitleLetterSpacing}${counterNumberTitleLetterSpacingUnits};` : ''}
                    ${counterNumberTitleLineHeight !== undefined ? `line-height: ${counterNumberTitleLineHeight}${counterNumberTitleLineHeightUnits};` : ''}
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
											{/*<CounterNumberTitleTypographyControl*/}
											{/*	attributes={attributes}*/}
											{/*	setAttributes={setAttributes}*/}
											{/*	clientId ={clientId}*/}
											{/*/>*/}
											{/*<CounterNumberTitleMarginControl*/}
											{/*	attributes={attributes}*/}
											{/*	setAttributes={setAttributes}*/}
											{/*	clientId ={clientId}*/}
											{/*/>*/}
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
