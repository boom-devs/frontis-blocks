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
	ColorPalette
} from '@wordpress/components';

import { useEffect, useState } from '@wordpress/element';

import './editor.scss';


export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		countDownLabelDay,
		countDownLabelHour,
		countDownLabelMinute,
		countDownLabelSecond,
		countDownBgColor,
		countDownTitleColor,
		countDownTextColor,
		countDownTitleFontSize,
		countDown_Text_Font_Size,
		targetDate,
		showDays,
		showHours,
		showMinutes,
		showSeconds,

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


	return (
		<>
			<style>
				{`
				#${blockID} .fb-count-down-wrapper {
					background-color: ${countDownBgColor};
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
										<PanelBody title={__("Days", "frontis-blocks")} initialOpen={true}>

											<BaseControl className="fb-setting-color-setting-icon-popup-inner">
												<div className="fb-setting-normal-color">
													<ColorPicker
														color={countDownBgColor}
														onChange={(value) => setAttributes({ countDownBgColor: value })}
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
														value={countDownBgColor}
														onChange={(value) => setAttributes({ countDownBgColor: value })}
													/>
												</div>
											</BaseControl>

											<BaseControl label={__("Title Color", "frontis-blocks")} className="notic-color-setting-wrapper">
												<ColorPicker
													color={countDownTitleColor}
													onChange={(value) => setAttributes({ countDownTitleColor: value })}
													enableAlpha
												/>
											</BaseControl>

											<BaseControl label={__("Text Color", "frontis-blocks")} className="notic-color-setting-wrapper">
												<ColorPicker
													color={countDownTextColor}
													onChange={(value) => setAttributes({ countDownTextColor: value })}
													enableAlpha
												/>
											</BaseControl>

											<RangeControl
												label={__("Title Font Size", "frontis-blocks")}
												value={countDownTitleFontSize}
												onChange={(value) => setAttributes({ countDownTitleFontSize: value })}
												min={1}
												max={200}
											/>
											<RangeControl
												label={__("Text Font Size", "frontis-blocks")}
												value={countDown_Text_Font_Size}
												onChange={(value) => setAttributes({ countDown_Text_Font_Size: value })}
												min={1}
												max={200}
											/>

											<BaseControl label={__("Days Label Background Color", "frontis-blocks")} className="notic-color-setting-wrapper">
												<ColorPicker
													color={attributes.countDownLabelBgColorDay}
													onChange={(value) => setAttributes({ countDownLabelBgColorDay: value })}
													enableAlpha
												/>
											</BaseControl>

											<BaseControl label={__("Hours Label Background Color", "frontis-blocks")} className="notic-color-setting-wrapper">
												<ColorPicker
													color={attributes.countDownLabelBgColorHour}
													onChange={(value) => setAttributes({ countDownLabelBgColorHour: value })}
													enableAlpha
												/>
											</BaseControl>

											<BaseControl label={__("Minutes Label Background Color", "frontis-blocks")} className="notic-color-setting-wrapper">
												<ColorPicker
													color={attributes.countDownLabelBgColorMinute}
													onChange={(value) => setAttributes({ countDownLabelBgColorMinute: value })}
													enableAlpha
												/>
											</BaseControl>

											<BaseControl label={__("Seconds Label Background Color", "frontis-blocks")} className="notic-color-setting-wrapper">
												<ColorPicker
													color={attributes.countDownLabelBgColorSecond}
													onChange={(value) => setAttributes({ countDownLabelBgColorSecond: value })}
													enableAlpha
												/>
											</BaseControl>
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


			<div {...blockProps} id={blockID}>
				<div className={`fb-count-down-wrapper`}>
					{showDays && (
						<div className={`fb-count-down-item`} style={{ backgroundColor: attributes.countDownLabelBgColorDay }}>
							<span className={`fb-count-down-time`}>{timeRemaining.days || 0}</span>
							<span className={`fb-count-down-label`}>{countDownLabelDay || __('Days', 'frontis-blocks')}</span>
						</div>
					)}

					{showHours && (
						<div className={`fb-count-down-item`} style={{ backgroundColor: attributes.countDownLabelBgColorHour }}>
							<span className={`fb-count-down-time`}>{timeRemaining.hours || 0}</span>
							<span className={`fb-count-down-label`}>{countDownLabelHour || __('Hours', 'frontis-blocks')}</span>
						</div>
					)}

					{showMinutes && (
						<div className={`fb-count-down-item`} style={{ backgroundColor: attributes.countDownLabelBgColorMinute }}>
							<span className={`fb-count-down-time`}>{timeRemaining.minutes || 0}</span>
							<span className={`fb-count-down-label`}>{countDownLabelMinute || __('Minutes', 'frontis-blocks')}</span>
						</div>
					)}

					{showSeconds && (
						<div className={`fb-count-down-item`} style={{ backgroundColor: attributes.countDownLabelBgColorSecond }}>
							<span className={`fb-count-down-time`}>{timeRemaining.seconds || 0}</span>
							<span className={`fb-count-down-label`}>{countDownLabelSecond || __('Seconds', 'frontis-blocks')}</span>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
