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



export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		countDownLabelDay,
		countDownLabelHour,
		countDownLabelMinute,
		countDownLabelSecond,
		countDownLabelBgColorDay,
		countDownLabelBgColorHour,
		countDownLabelBgColorMinute,
		countDownLabelBgColorSecond,
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

										<PanelBody
											title={__("Box", "frontis-blocks")}
											initialOpen={true}
										>
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
															<BaseControl className="fb-setting-typography-popup-inner" >
																<div className="fb-setting-fontfamily-wrapper">
																	<SelectControl
																		label={__("Font Family", "frontis-blocks")}
																		// options={FONT_FAMILYS}
																		// value={HeadingFontFamily}
																		// onChange={(value) => setAttributes({ HeadingFontFamily: value })}
																	/>
																</div>
																<div className="fb-setting-fontsize-wrapper">
																	<div className="fb-setting-fontsize-header">
																		<div className="fb-setting-fontsize-label">
																			<span>{__("Font Size", "frontis-blocks")}</span>
																		</div>
																		<div className="fb-setting-fontsize-units">
																			{/*<ButtonGroup className="fb-setting-fontsize-units-wrap">*/}
																			{/*	{UNIT_TYPES.map((item, key) => (*/}
																			{/*		<Button*/}
																			{/*			key={key}*/}
																			{/*			onClick={() => setAttributes({ HeadingFontSizeUnits: item.value })}*/}
																			{/*			className={`fb-setting-fontsize-units-switcher ${ HeadingFontSizeUnits === item.value ? 'active' : ''}`}*/}
																			{/*		>*/}
																			{/*			{item.label}*/}
																			{/*		</Button>*/}
																			{/*	))}*/}
																			{/*</ButtonGroup>*/}
																		</div>
																	</div>
																	<div className="fb-setting-fontsize-rangecontrol">
																		{/*<RangeControl*/}
																		{/*	value={HeadingFontSize}*/}
																		{/*	onChange={(value) => setAttributes({ HeadingFontSize: value })}*/}
																		{/*	min={1}*/}
																		{/*	max={200}*/}
																		{/*	allowReset*/}
																		{/*	resetFallbackValue={undefined}*/}
																		{/*/>*/}
																	</div>
																</div>
																<div className="fb-setting-fontweight-wrapper">
																	{/*<SelectControl*/}
																	{/*	label={__("Font Weight", "frontis-blocks")}*/}
																	{/*	options={[*/}
																	{/*		{ label: __("Default", "frontis-blocks"), value: "700" },*/}
																	{/*		{ label: __("100", "frontis-blocks"), value: "100" },*/}
																	{/*		{ label: __("200", "frontis-blocks"), value: "200" },*/}
																	{/*		{ label: __("300", "frontis-blocks"), value: "300" },*/}
																	{/*		{ label: __("400", "frontis-blocks"), value: "400" },*/}
																	{/*		{ label: __("500", "frontis-blocks"), value: "500" },*/}
																	{/*		{ label: __("600", "frontis-blocks"), value: "600" },*/}
																	{/*		{ label: __("700", "frontis-blocks"), value: "700" },*/}
																	{/*		{ label: __("800", "frontis-blocks"), value: "800" },*/}
																	{/*		{ label: __("900", "frontis-blocks"), value: "900" },*/}
																	{/*	]}*/}
																	{/*	value={HeadingFontWeight}*/}
																	{/*	onChange={(value) => setAttributes({ HeadingFontWeight: value })}*/}
																	{/*/>*/}
																</div>
																<div className="fb-setting-fontstyle-wrapper">
																	{/*<SelectControl*/}
																	{/*	label={__("Font Style", "frontis-blocks")}*/}
																	{/*	options={[*/}
																	{/*		{ label: __("Default", "frontis-blocks"), value: "normal" },*/}
																	{/*		{ label: __("Normal", "frontis-blocks"), value: "normal" },*/}
																	{/*		{ label: __("Italic", "frontis-blocks"), value: "italic" },*/}
																	{/*		{ label: __("Oblique", "frontis-blocks"), value: "oblique" },*/}
																	{/*	]}*/}
																	{/*	value={HeadingFontStyle}*/}
																	{/*	onChange={(value) => setAttributes({ HeadingFontStyle: value })}*/}
																	{/*/>*/}
																</div>
																<div className="fb-setting-texttransform-wrapper">
																	{/*<SelectControl*/}
																	{/*	label={__("Text Transform", "frontis-blocks")}*/}
																	{/*	options={[*/}
																	{/*		{ label: __("Default", "frontis-blocks"), value: "none" },*/}
																	{/*		{ label: __("None", "frontis-blocks"), value: "none" },*/}
																	{/*		{ label: __("Capitalize", "frontis-blocks"), value: "capitalize" },*/}
																	{/*		{ label: __("Uppercase", "frontis-blocks"), value: "uppercase" },*/}
																	{/*		{ label: __("Lowercase", "frontis-blocks"), value: "lowercase" },*/}
																	{/*	]}*/}
																	{/*	value={HeadingTextTransform}*/}
																	{/*	onChange={(value) => setAttributes({ HeadingTextTransform: value })}*/}
																	{/*/>*/}
																</div>
																<div className="fb-setting-textdecoration-wrapper">
																	{/*<SelectControl*/}
																	{/*	label={__("Text Decoration", "frontis-blocks")}*/}
																	{/*	options={[*/}
																	{/*		{ label: __("Default", "frontis-blocks"), value: "none" },*/}
																	{/*		{ label: __("None", "frontis-blocks"), value: "none" },*/}
																	{/*		{ label: __("Underline", "frontis-blocks"), value: "underline" },*/}
																	{/*		{ label: __("Overline", "frontis-blocks"), value: "overline" },*/}
																	{/*		{ label: __("Line Through", "frontis-blocks"), value: "line-through" },*/}
																	{/*	]}*/}
																	{/*	value={HeadingTextDecoration}*/}
																	{/*	onChange={(value) => setAttributes({ HeadingTextDecoration: value })}*/}
																	{/*/>*/}
																</div>
																<div className="fb-setting-letterspacing-wrapper">
																	<div className="fb-setting-letterspacing-header">
																		<div className="fb-setting-letterspacing-label">
																			<span>{__("Letter Spacing", "frontis-blocks")}</span>
																		</div>
																		<div className="fb-setting-letterspacing-units">
																			{/*<ButtonGroup className="fb-setting-letterspacing-units-wrap">*/}
																			{/*	{UNIT_TYPES.map((item, key) => (*/}
																			{/*		<Button*/}
																			{/*			key={key}*/}
																			{/*			onClick={() => setAttributes({ HeadingLetterSpacingUnits: item.value })}*/}
																			{/*			className={`fb-setting-letterspacing-units-switcher ${ HeadingLetterSpacingUnits === item.value ? 'active' : ''}`}*/}
																			{/*		>*/}
																			{/*			{item.label}*/}
																			{/*		</Button>*/}
																			{/*	))}*/}
																			{/*</ButtonGroup>*/}
																		</div>
																	</div>
																	{/*<RangeControl*/}
																	{/*	value={HeadingLetterSpacing}*/}
																	{/*	onChange={(value) => setAttributes({ HeadingLetterSpacing: value === 0 ? undefined : value })}*/}
																	{/*	min={1}*/}
																	{/*	max={100}*/}
																	{/*	step={1}*/}
																	{/*	allowReset*/}
																	{/*	resetFallbackValue={undefined}*/}
																	{/*/>*/}
																</div>
																<div className="fb-setting-lineheight-wrapper">
																	<div className="fb-setting-lineheight-header">
																		<div className="fb-setting-lineheight-label">
																			<span>{__("Line Height", "frontis-blocks")}</span>
																		</div>
																		<div className="fb-setting-lineheight-units">
																			{/*<ButtonGroup className="fb-setting-lineheight-units-wrap">*/}
																			{/*	{UNIT_TYPES.map((item, key) => (*/}
																			{/*		<Button*/}
																			{/*			key={key}*/}
																			{/*			onClick={() => setAttributes({ HeadingLineHeightUnits: item.value })}*/}
																			{/*			className={`fb-setting-lineheight-units-switcher ${ HeadingLineHeightUnits === item.value ? 'active' : ''}`}*/}
																			{/*		>*/}
																			{/*			{item.label}*/}
																			{/*		</Button>*/}
																			{/*	))}*/}
																			{/*</ButtonGroup>*/}
																		</div>
																	</div>
																	{/*<RangeControl*/}
																	{/*	value={HeadingLineHeight}*/}
																	{/*	onChange={(value) => setAttributes({ HeadingLineHeight: value === 1 ? undefined : value })}*/}
																	{/*	min={1}*/}
																	{/*	max={100}*/}
																	{/*	step={1}*/}
																	{/*	allowReset*/}
																	{/*	resetFallbackValue={undefined}*/}
																	{/*/>*/}
																</div>
															</BaseControl>
														</div>
													)}
												/>
											</BaseControl>

											{/* Label Background Color Start */}
											<BaseControl
												label={__("Day Box Background", "frontis-blocks")}
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
																		color={countDownLabelBgColorDay}
																		onChange={(value) => setAttributes({ countDownLabelBgColorDay: value })}
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
																		value={countDownLabelBgColorDay}
																		onChange={(value) => setAttributes({ countDownLabelBgColorDay: value })}
																	/>
																</div>
															</BaseControl>
														</div>
													)}
												/>
											</BaseControl>

											<BaseControl
												label={__("Hour Box Background", "frontis-blocks")}
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
																		color={countDownLabelBgColorHour}
																		onChange={(value) => setAttributes({ countDownLabelBgColorHour: value })}
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
																		value={countDownLabelBgColorHour}
																		onChange={(value) => setAttributes({ countDownLabelBgColorHour: value })}
																	/>
																</div>
															</BaseControl>
														</div>
													)}
												/>
											</BaseControl>

											<BaseControl
												label={__("Minute Box Background", "frontis-blocks")}
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
																		color={countDownLabelBgColorMinute}
																		onChange={(value) => setAttributes({ countDownLabelBgColorMinute: value })}
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
																		value={countDownLabelBgColorMinute}
																		onChange={(value) => setAttributes({ countDownLabelBgColorMinute: value })}
																	/>
																</div>
															</BaseControl>
														</div>
													)}
												/>
											</BaseControl>

											<BaseControl
												label={__("Second Box Background", "frontis-blocks")}
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
																		color={countDownLabelBgColorSecond}
																		onChange={(value) => setAttributes({ countDownLabelBgColorSecond: value })}
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
																		value={countDownLabelBgColorSecond}
																		onChange={(value) => setAttributes({ countDownLabelBgColorSecond: value })}
																	/>
																</div>
															</BaseControl>
														</div>
													)}
												/>
											</BaseControl>
											{/* Label Background Color End */}

										</PanelBody>

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
