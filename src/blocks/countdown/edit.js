import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
	DateTimePicker,
	TextControl,
	ColorPicker,
	BaseControl,
	RangeControl,
	ToggleControl,
	TabPanel,
	ColorPalette, Dropdown, Button, Dashicon, SelectControl, ButtonGroup
} from '@wordpress/components';

import { useEffect, useState } from '@wordpress/element';

import './editor.scss';
import {BORDER_STYLES, FONT_FAMILYS, NORMAL_HOVER, UNIT_TYPES} from "../advanced-heading/constants/constants";
import ResponsiveControl from "../../components/responsivecontrol";

import CountDownItemSizeControl from "./style-control/countdown-item-size-control";
import CountDownItemGapControl from "./style-control/countdown-item-gap-control";
import CountDownItemBorderTypeControl from "./style-control/countdown-item-border-type-control";
import CountDownItemBorderRadiusControl from "./style-control/countdown-item-border-radius-control";
import CountDownDigitTypographyControl from "./style-control/countdown-digit-typograpy-control";
import CountDownLabelTypographyControl from "./style-control/countdown-label-typograpy-control";
import CountDownItemBgColorControl from "./style-control/countdown-item-bg-color-control";



export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		deviceType,
		countDownLabelDay,
		countDownLabelHour,
		countDownLabelMinute,
		countDownLabelSecond,

		targetDate,
		showDays,
		showHours,
		showMinutes,
		showSeconds,


		// Countdown item

		countDownItemSize,
		countDownItemSizeUnits,

		countDownItemGap,
		countDownItemGapUnits,

		countDownItemBgColor,

		// Team Image Border Type
		countDownItemBorder,
		countDownItemBorderColor,
		countDownItemBackgroundColor,

		countDownItemBorderTypeUnits,
		countDownItemBorderTypeDesktop,
		countDownItemBorderTypeTab,
		countDownItemBorderTypeMobile,
		countDownItemBorderTypeLink,

		// Team Image Border Radius
		countDownItemBorderRadiusUnits,
		countDownItemBorderRadiusDesktop,
		countDownItemBorderRadiusTab,
		countDownItemBorderRadiusMobile,
		countDownItemBorderRadiusLink,

		digitFontColor,
		digitFontFamily,
		digitFontSize,
		digitFontSizeUnits,
		digitFontWeight,
		digitFontStyle,
		digitTextTransform,
		digitTextDecoration,
		digitLetterSpacing,
		digitLetterSpacingUnits,
		digitLineHeight,
		digitLineHeightUnits,

		labelFontColor,
		labelFontFamily,
		labelFontSize,
		labelFontSizeUnits,
		labelFontWeight,
		labelFontStyle,
		labelTextTransform,
		labelTextDecoration,
		labelLetterSpacing,
		labelLetterSpacingUnits,
		labelLineHeight,
		labelLineHeightUnits,

	} = attributes;

	const [timeRemaining, setTimeRemaining] = useState({});

	// Set default date to one week from today
	const defaultDate = new Date();
	defaultDate.setDate(defaultDate.getDate() + 7);

	const [date, setDate] = useState(targetDate ? new Date(targetDate) : defaultDate);

	// Sync date with attributes if not already set
	useEffect(() => {
		if (!targetDate) {
			setAttributes({ targetDate: defaultDate.toISOString() });
		}
	}, [targetDate, setAttributes, defaultDate]);

	// Update target date when date changes
	useEffect(() => {
		setAttributes({ targetDate: date.toISOString() });
	}, [date, setAttributes]);

	// Generate unique block ID if not set
	useEffect(() => {
		if (!blockID) {
			setAttributes({
				blockID: "count-down-" + clientId.slice(0, 8),
			});
		}
	}, [blockID, clientId, setAttributes]);

	// Countdown Timer Logic
	useEffect(() => {
		// Helper function to format time with leading zero
		const formatTime = (time) => (time < 10 ? `0${time}` : time);

		if (!targetDate || isNaN(new Date(targetDate).getTime())) return;

		const intervalId = setInterval(() => {
			const now = Date.now();
			const distance = new Date(targetDate).getTime() - now;

			const days = formatTime(Math.floor(distance / (1000 * 60 * 60 * 24)));
			const hours = formatTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
			const minutes = formatTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
			const seconds = formatTime(Math.floor((distance % (1000 * 60)) / 1000));

			if (distance < 0) {
				clearInterval(intervalId);
				setTimeRemaining({ days: "00", hours: "00", minutes: "00", seconds: "00" });
			} else {
				setTimeRemaining({ days, hours, minutes, seconds });
			}
		}, 1000);

		return () => clearInterval(intervalId);
	}, [targetDate]);

	const blockProps = useBlockProps();


	{/* Inspector Controls */}

	{/* Countdown Item Control */}
	const countDownItemBorderTypeGetDesktop = `${countDownItemBorderTypeDesktop.top}${countDownItemBorderTypeUnits[deviceType]} ${countDownItemBorderTypeDesktop.right}${countDownItemBorderTypeUnits[deviceType]} ${countDownItemBorderTypeDesktop.bottom}${countDownItemBorderTypeUnits[deviceType]} ${countDownItemBorderTypeDesktop.left}${countDownItemBorderTypeUnits[deviceType]}`;
	const countDownItemBorderTypeGetTab = `${countDownItemBorderTypeTab.top}${countDownItemBorderTypeUnits[deviceType]} ${countDownItemBorderTypeTab.right}${countDownItemBorderTypeUnits[deviceType]} ${countDownItemBorderTypeTab.bottom}${countDownItemBorderTypeUnits[deviceType]} ${countDownItemBorderTypeTab.left}${countDownItemBorderTypeUnits[deviceType]}`;
	const countDownItemBorderTypeGetMobile = `${countDownItemBorderTypeMobile.top}${countDownItemBorderTypeUnits[deviceType]} ${countDownItemBorderTypeMobile.right}${countDownItemBorderTypeUnits[deviceType]} ${countDownItemBorderTypeMobile.bottom}${countDownItemBorderTypeUnits[deviceType]} ${countDownItemBorderTypeMobile.left}${countDownItemBorderTypeUnits[deviceType]}`;


	const countDownItemBorderRadiusGetDesktop = `${countDownItemBorderRadiusDesktop.top}${countDownItemBorderRadiusUnits[deviceType]} ${countDownItemBorderRadiusDesktop.right}${countDownItemBorderRadiusUnits[deviceType]} ${countDownItemBorderRadiusDesktop.bottom}${countDownItemBorderRadiusUnits[deviceType]} ${countDownItemBorderRadiusDesktop.left}${countDownItemBorderRadiusUnits[deviceType]}`;
	const countDownItemBorderRadiusGetTab = `${countDownItemBorderRadiusTab.top}${countDownItemBorderRadiusUnits[deviceType]} ${countDownItemBorderRadiusTab.right}${countDownItemBorderRadiusUnits[deviceType]} ${countDownItemBorderRadiusTab.bottom}${countDownItemBorderRadiusUnits[deviceType]} ${countDownItemBorderRadiusTab.left}${countDownItemBorderRadiusUnits[deviceType]}`;
	const countDownItemBorderRadiusGetMobile = `${countDownItemBorderRadiusMobile.top}${countDownItemBorderRadiusUnits[deviceType]} ${countDownItemBorderRadiusMobile.right}${countDownItemBorderRadiusUnits[deviceType]} ${countDownItemBorderRadiusMobile.bottom}${countDownItemBorderRadiusUnits[deviceType]} ${countDownItemBorderRadiusMobile.left}${countDownItemBorderRadiusUnits[deviceType]}`;


	return (
		<>

			<style>
				{`
             	.fb-count-down-wrapper.${blockID} {
					${countDownItemGap.Desktop ? `gap: ${countDownItemGap.Desktop}${countDownItemGapUnits.Desktop};` : ''}
				}

				.fb-count-down-wrapper.${blockID} .fb-count-down-item {
					${countDownItemBgColor ? `background: ${countDownItemBgColor};` : ''}
					${countDownItemSize.Desktop ? `width: ${countDownItemSize.Desktop}${countDownItemSizeUnits.Desktop};` : ''}
					${countDownItemSize.Desktop ? `height: ${countDownItemSize.Desktop}${countDownItemSizeUnits.Desktop};` : ''}
					${countDownItemBorder ? `border: ${countDownItemBorder};` : ''}
					${countDownItemBorderTypeGetDesktop ? `border-width: ${countDownItemBorderTypeGetDesktop};` : ''}
					${countDownItemBorderRadiusGetDesktop ? `border-radius: ${countDownItemBorderRadiusGetDesktop};` : ''}
					${countDownItemBorderColor ? `border-color: ${countDownItemBorderColor};` : ''}
				}

				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time {
					${digitFontColor ? `color: ${digitFontColor};` : ''}
					${digitFontFamily ? `font-family: ${digitFontFamily};` : ''}
					${digitFontSize.Desktop ? `font-size: ${digitFontSize.Desktop}${digitFontSizeUnits.Desktop};` : ''}
					${digitFontWeight ? `font-weight: ${digitFontWeight};` : ''}
					${digitFontStyle ? `font-style: ${digitFontStyle};` : ''}
					${digitTextTransform ? `text-transform: ${digitTextTransform};` : ''}
					${digitTextDecoration ? `text-decoration: ${digitTextDecoration};` : ''}
					${digitLetterSpacing.Desktop ? `letter-spacing: ${digitLetterSpacing.Desktop}${digitLetterSpacingUnits.Desktop};` : ''}
					${digitLineHeight.Desktop ? `line-height: ${digitLineHeight.Desktop}${digitLineHeightUnits.Desktop};` : ''}
				}

				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
					${labelFontColor ? `color: ${labelFontColor};` : ''}
					${labelFontFamily ? `font-family: ${labelFontFamily};` : ''}
					${labelFontSize.Desktop ? `font-size: ${labelFontSize.Desktop}${labelFontSizeUnits.Desktop};` : ''}
					${labelFontWeight ? `font-weight: ${labelFontWeight};` : ''}
					${labelFontStyle ? `font-style: ${labelFontStyle};` : ''}
					${labelTextTransform ? `text-transform: ${labelTextTransform};` : ''}
					${labelTextDecoration ? `text-decoration: ${labelTextDecoration};` : ''}
					${labelLetterSpacing.Desktop ? `letter-spacing: ${labelLetterSpacing.Desktop}${labelLetterSpacingUnits.Desktop};` : ''}
					${labelLineHeight.Desktop ? `line-height: ${labelLineHeight.Desktop}${labelLineHeightUnits.Desktop};` : ''}
				}

				@media only screen and (max-width: 1024px) {
					.fb-count-down-wrapper.${blockID} {
						${countDownItemGap.Tablet ? `gap: ${countDownItemGap.Tablet}${countDownItemGapUnits.Tablet};` : ''}
					}
					.fb-count-down-wrapper.${blockID} .fb-count-down-item {
						${countDownItemSize.Tablet ? `width: ${countDownItemSize.Tablet}${countDownItemSizeUnits.Tablet};` : ''}
						${countDownItemSize.Tablet ? `height: ${countDownItemSize.Tablet}${countDownItemSizeUnits.Tablet};` : ''}
						${countDownItemBorderTypeGetTab ? `border-width: ${countDownItemBorderTypeGetTab};` : ''}
						${countDownItemBorderRadiusGetTab ? `border-radius: ${countDownItemBorderRadiusGetTab};` : ''}
					}
					.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time {
						${digitFontSize.Tablet ? `font-size: ${digitFontSize.Tablet}${digitFontSizeUnits.Tablet};` : ''}
						${digitLetterSpacing.Tablet ? `letter-spacing: ${digitLetterSpacing.Tablet}${digitLetterSpacingUnits.Tablet};` : ''}
						${digitLineHeight.Tablet ? `line-height: ${digitLineHeight.Tablet}${digitLineHeightUnits.Tablet};` : ''}
					}
					.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
						${labelFontSize.Tablet ? `font-size: ${labelFontSize.Tablet}${labelFontSizeUnits.Tablet};` : ''}
						${labelLetterSpacing.Tablet ? `letter-spacing: ${labelLetterSpacing.Tablet}${labelLetterSpacingUnits.Tablet};` : ''}
						${labelLineHeight.Tablet ? `line-height: ${labelLineHeight.Tablet}${labelLineHeightUnits.Tablet};` : ''}
					}
				}

				@media only screen and (max-width: 767px) {
					.fb-count-down-wrapper.${blockID} {
						${countDownItemGap.Mobile ? `gap: ${countDownItemGap.Mobile}${countDownItemGapUnits.Mobile};` : ''}
					}
					.fb-count-down-wrapper.${blockID} .fb-count-down-item {
						${countDownItemSize.Mobile ? `width: ${countDownItemSize.Mobile}${countDownItemSizeUnits.Mobile};` : ''}
						${countDownItemSize.Mobile ? `height: ${countDownItemSize.Mobile}${countDownItemSizeUnits.Mobile};` : ''}
						${countDownItemBorderTypeGetMobile ? `border-width: ${countDownItemBorderTypeGetMobile};` : ''}
						${countDownItemBorderRadiusGetMobile ? `border-radius: ${countDownItemBorderRadiusGetMobile};` : ''}
					}
					.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time {
						${digitFontSize.Mobile ? `font-size: ${digitFontSize.Mobile}${digitFontSizeUnits.Mobile};` : ''}
						${digitLetterSpacing.Mobile ? `letter-spacing: ${digitLetterSpacing.Mobile}${digitLetterSpacingUnits.Mobile};` : ''}
						${digitLineHeight.Mobile ? `line-height: ${digitLineHeight.Mobile}${digitLineHeightUnits.Mobile};` : ''}
					}
					.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
						${labelFontSize.Mobile ? `font-size: ${labelFontSize.Mobile}${labelFontSizeUnits.Mobile};` : ''}
						${labelLetterSpacing.Mobile ? `letter-spacing: ${labelLetterSpacing.Mobile}${labelLetterSpacingUnits.Mobile};` : ''}
						${labelLineHeight.Mobile ? `line-height: ${labelLineHeight.Mobile}${labelLineHeightUnits.Mobile};` : ''}
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
										<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
											<DateTimePicker
												currentDate={date}
												onChange={(newDate) => setDate(new Date(newDate))}
												is12Hour={true}
												style={{ marginBottom: '20px' }}
											/>
											<ToggleControl
												label={__("Show Days", "frontis-blocks")}
												checked={showDays}
												onChange={(value) => setAttributes({ showDays: value })}
												style={{ marginTop: '20px' }}
											/>
											<ToggleControl
												label={__("Show Hours", "frontis-blocks")}
												checked={showHours}
												onChange={(value) => setAttributes({ showHours: value })}
											/>
											<ToggleControl
												label={__("Show Minutes", "frontis-blocks")}
												checked={showMinutes}
												onChange={(value) => setAttributes({ showMinutes: value })}
											/>
											<ToggleControl
												label={__("Show Seconds", "frontis-blocks")}
												checked={showSeconds}
												onChange={(value) => setAttributes({ showSeconds: value })}
											/>
										</PanelBody>

										<PanelBody title={__("Labels", "frontis-blocks")} initialOpen={false}>
											<TextControl
												label={__("Days", "frontis-blocks")}
												value={countDownLabelDay}
												onChange={(value) => setAttributes({ countDownLabelDay: value })}
											/>
											<TextControl
												label={__("Hours", "frontis-blocks")}
												value={countDownLabelHour}
												onChange={(value) => setAttributes({ countDownLabelHour: value })}
											/>
											<TextControl
												label={__("Minutes", "frontis-blocks")}
												value={countDownLabelMinute}
												onChange={(value) => setAttributes({ countDownLabelMinute: value })}
											/>
											<TextControl
												label={__("Seconds", "frontis-blocks")}
												value={countDownLabelSecond}
												onChange={(value) => setAttributes({ countDownLabelSecond: value })}
											/>
										</PanelBody>
									</>
								)}

								{tab.name === "styles" && (
									<>

										<PanelBody
											title={__("Item", "frontis-blocks")}
											initialOpen={true}
										>
											<CountDownItemSizeControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<CountDownItemGapControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<CountDownItemBgColorControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<CountDownItemBorderTypeControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<CountDownItemBorderRadiusControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
										</PanelBody>

										<PanelBody
											title={__("Digit", "frontis-blocks")}
											initialOpen={false}
										>
											<CountDownDigitTypographyControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
										</PanelBody>

										<PanelBody
											title={__("Label", "frontis-blocks")}
											initialOpen={false}
										>
											<CountDownLabelTypographyControl
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
				<div className={`fb-count-down-wrapper ${blockID}`}>
					{showDays && (
						<div className={`fb-count-down-item`}>
							<span className={`fb-count-down-time`}>{timeRemaining.days || 0}</span>
							<span className={`fb-count-down-label`}>{countDownLabelDay || __('Days', 'frontis-blocks')}</span>
						</div>
					)}

					{showHours && (
						<div className={`fb-count-down-item`}>
							<span className={`fb-count-down-time`}>{timeRemaining.hours || 0}</span>
							<span className={`fb-count-down-label`}>{countDownLabelHour || __('Hours', 'frontis-blocks')}</span>
						</div>
					)}

					{showMinutes && (
						<div className={`fb-count-down-item`}>
							<span className={`fb-count-down-time`}>{timeRemaining.minutes || 0}</span>
							<span className={`fb-count-down-label`}>{countDownLabelMinute || __('Minutes', 'frontis-blocks')}</span>
						</div>
					)}

					{showSeconds && (
						<div className={`fb-count-down-item`}>
							<span className={`fb-count-down-time`}>{timeRemaining.seconds || 0}</span>
							<span className={`fb-count-down-label`}>{countDownLabelSecond || __('Seconds', 'frontis-blocks')}</span>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
