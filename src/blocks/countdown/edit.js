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
import FB_ResponsiveControl from '@Components/responsive-control';




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
		boxWidth,
		boxHeight,
		boxSpaceBetween,
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
		if (digitFontFamily) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${digitFontFamily.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [digitFontFamily]);

	useEffect(() => {
		if (labelFontFamily) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${labelFontFamily.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [labelFontFamily]);

	return (
		<>
			<style>
				{`
                .fb-count-down-wrapper.${blockID}{
           			gap: ${boxSpaceBetween}px;
                }
                .fb-count-down-wrapper.${blockID} .fb-count-down-item {
                    border: ${BoxBorder};
                    border-width: ${borderWidth};
                    border-radius: ${borderRadiusWidth};
                    width: ${boxWidth}px;
                    height: ${boxHeight}px;
                    ${BoxBorderColor !== undefined ? `border-color: ${BoxBorderColor};` : ''}
                }
                .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time{
               		font-family: ${digitFontFamily !== 'default' ? digitFontFamily : digitFontFamily};
                    font-size: ${digitFontSize !== undefined ? `${digitFontSize}${digitFontSize}` : ''}px;
                    font-weight: ${digitFontWeight};
                    font-style: ${digitFontStyle};
                    text-transform: ${digitTextTransform};
                    text-decoration: ${digitTextDecoration};
                    ${digitLetterSpacing !== undefined ? `letter-spacing: ${digitLetterSpacing}${digitLetterSpacing};` : ''}
                    ${digitLineHeight !== undefined ? `line-height: ${digitLineHeight}${digitLineHeight};` : ''}
                }
                .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label{
               		font-family: ${labelFontFamily !== 'default' ? labelFontFamily : labelFontFamily};
                    font-size: ${labelFontSize !== undefined ? `${labelFontSize}${labelFontSize}` : ''}px;
                    font-weight: ${labelFontWeight};
                    font-style: ${labelFontStyle};
                    text-transform: ${labelTextTransform};
                    text-decoration: ${labelTextDecoration};
                    ${labelLetterSpacing !== undefined ? `letter-spacing: ${labelLetterSpacing}${labelLetterSpacing};` : ''}
                    ${labelLineHeight !== undefined ? `line-height: ${labelLineHeight}${labelLineHeight};` : ''}
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
											title={__("Box", "frontis-blocks")}
											initialOpen={true}
										>
											<RangeControl
												label={__("Box Width", "frontis-blocks")}
												value={boxWidth}
												onChange={(value) => setAttributes({ boxWidth: value === 0 ? undefined : value })}
												min={1}
												max={1000}
												step={1}
												allowReset
												resetFallbackValue={undefined}
											/>
											<RangeControl
												label={__("Box Height", "frontis-blocks")}
												value={boxHeight}
												onChange={(value) => setAttributes({ boxHeight: value === 0 ? undefined : value })}
												min={1}
												max={1000}
												step={1}
												allowReset
												resetFallbackValue={undefined}
											/>
											<RangeControl
												label={__("Box Space Between", "frontis-blocks")}
												value={boxSpaceBetween}
												onChange={(value) => setAttributes({ boxSpaceBetween: value === 0 ? undefined : value })}
												min={1}
												max={1000}
												step={1}
												allowReset
												resetFallbackValue={undefined}
											/>

											{/* Digit Thypography Start */}
											<BaseControl
												label={__("Digit Typography", "frontis-blocks")}
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
																		value={attributes.digitFontFamily}
																		onChange={(value) => setAttributes({ digitFontFamily: value })}
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
																						onClick={() => setAttributes({ digitFontSizeUnits: item.value })}
																						className={`fb-setting-fontsize-units-switcher ${attributes.digitFontSizeUnits === item.value ? 'active' : ''}`}
																					>
																						{item.label}
																					</Button>
																				))}
																			</ButtonGroup>
																		</div>
																	</div>
																	<div className="fb-setting-fontsize-rangecontrol">
																		<RangeControl
																			value={attributes.digitFontSize}
																			onChange={(value) => setAttributes({ digitFontSize: value })}
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
																		value={attributes.digitFontWeight}
																		onChange={(value) => setAttributes({ digitFontWeight: value })}
																	/>
																</div>

																{/* Other typography settings: Font Style, Text Transform, Text Decoration, etc. */}
																{/* Similar structure for other controls */}
															</BaseControl>
														</div>
													)}
												/>
											</BaseControl>
											{/* Digit Thypography End */}

											{/* Label Typography Start */}
											<BaseControl
												label={__("Label Typography", "frontis-blocks")}
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
																		value={attributes.labelFontFamily}
																		onChange={(value) => setAttributes({ labelFontFamily: value })}
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
																						onClick={() => setAttributes({ labelFontSizeUnits: item.value })}
																						className={`fb-setting-fontsize-units-switcher ${attributes.labelFontSizeUnits === item.value ? 'active' : ''}`}
																					>
																						{item.label}
																					</Button>
																				))}
																			</ButtonGroup>
																		</div>
																	</div>
																	<div className="fb-setting-fontsize-rangecontrol">
																		<RangeControl
																			value={attributes.labelFontSize}
																			onChange={(value) => setAttributes({ labelFontSize: value })}
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
																		value={attributes.labelFontWeight}
																		onChange={(value) => setAttributes({ labelFontWeight: value })}
																	/>
																</div>

																{/* Other typography settings: Font Style, Text Transform, Text Decoration, etc. */}
																{/* Similar structure for other controls */}
															</BaseControl>
														</div>
													)}
												/>
											</BaseControl>

											{/* Label Typography End */}



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

										<PanelBody
											title={__("Border", "frontis-blocks")}
											initialOpen={false}
											className="fb-setting-border-setting-wrapper"
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
				<div className={`fb-count-down-wrapper ${blockID}`}>
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
