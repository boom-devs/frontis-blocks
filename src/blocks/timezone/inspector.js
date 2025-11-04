import { __ } from '@wordpress/i18n';
import {
	InspectorControls
} from '@wordpress/block-editor';
import {
	PanelBody,
	TabPanel,
	TextControl,
	SelectControl,
	ToggleControl, 
	DatePicker,
	Button,
} from '@wordpress/components';
import Select2 from "react-select";
import './editor.scss';

import { useEffect, useState, useMemo } from '@wordpress/element';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		location,
		timezone,
		timezones,
		officeHours,
		startTime,
		endTime,
		title,
		officeStatus,
		weekendDays,
		holidays,
		useMonthlySchedule,
		monthlySchedules,
		timezoneMode 
	} = attributes;

	// function getAllTimezones() {
		// This is using the Intl API to get timezone names
		// const timezonesSet = new Set();
		
		// Get the formatter which includes timezone info
		// const formatter = new Intl.DateTimeFormat();
		
		// Get all available timezone names
		// const timezones = Intl.supportedValuesOf('timeZone');
		
		// return timezones;
	// 	try {
	// 		const allTimezones = Intl.supportedValuesOf('timeZone').map(timezone => ({
	// 			label: formatTimezoneLabel(timezone),
	// 			value: timezone
	// 		}));
			
	// 		return allTimezones;
	// 		// console.log(allTimezones);
	// 	} catch (error) {
	// 		// Fallback for browsers that don't support supportedValuesOf
	// 		console.warn('Intl.supportedValuesOf not available, using fallback timezones');
	// 		return getFallbackTimezones();
	// 	}
		
	// }

	// Helper function to calculate duration for specific times
	function calculateDurationForTimes(startTime, endTime) {
		if (!startTime || !endTime) return 0;
		
		const [startHours, startMinutes] = startTime.split(':').map(Number);
		const [endHours, endMinutes] = endTime.split(':').map(Number);
		
		let startTotal = startHours * 60 + startMinutes;
		let endTotal = endHours * 60 + endMinutes;
		
		// Handle overnight (end time next day)
		if (endTotal < startTotal) {
			endTotal += 24 * 60;
		}
		
		const durationMinutes = endTotal - startTotal;
		return (durationMinutes / 60).toFixed(1);
	}

	const [selectedDate, setSelectedDate] = useState('');
	const [currentTime, setCurrentTime] = useState('');
	const [selectedMonth, setSelectedMonth] = useState('');

	// Generate time options from 5:00 AM to 11:30 PM in 30-minute intervals
	const generateTimeOptions = () => {
		const options = [];
		
		// Morning hours (5:00 AM - 11:30 AM)
		for (let hour = 5; hour < 12; hour++) {
			options.push({
				label: `${hour}:00 AM`,
				value: `${hour.toString().padStart(2, '0')}:00`
			});
			options.push({
				label: `${hour}:30 AM`,
				value: `${hour.toString().padStart(2, '0')}:30`
			});
		}
		
		// Noon
		options.push({
			label: '12:00 PM',
			value: '12:00'
		});
		options.push({
			label: '12:30 PM',
			value: '12:30'
		});
		
		// Afternoon/Evening hours (1:00 PM - 11:30 PM)
		for (let hour = 13; hour < 24; hour++) {
			const displayHour = hour > 12 ? hour - 12 : hour;
			const period = 'PM';
			options.push({
				label: `${displayHour}:00 ${period}`,
				value: `${hour.toString().padStart(2, '0')}:00`
			});
			if (hour < 23) {
				options.push({
					label: `${displayHour}:30 ${period}`,
					value: `${hour.toString().padStart(2, '0')}:30`
				});
			}
		}
		
		return options;
	};

	// Month options
	const monthOptions = [
		{ label: 'January', value: '0' },
		{ label: 'February', value: '1' },
		{ label: 'March', value: '2' },
		{ label: 'April', value: '3' },
		{ label: 'May', value: '4' },
		{ label: 'June', value: '5' },
		{ label: 'July', value: '6' },
		{ label: 'August', value: '7' },
		{ label: 'September', value: '8' },
		{ label: 'October', value: '9' },
		{ label: 'November', value: '10' },
		{ label: 'December', value: '11' }
	];

	// Function to get all timezones with UTC offsets
	const getAllTimezones = () => {
		try {
			const timezoneList = Intl.supportedValuesOf('timeZone');
			const options = [];
			
			timezoneList.forEach(tz => {
				try {
					const now = new Date();
					const offset = now.toLocaleString('en-US', { 
						timeZone: tz, 
						timeZoneName: 'shortOffset' 
					}).split(' ').pop();
					
					// Format timezone name nicely
					const timezoneName = tz.split('/')
						.map(part => part.replace(/_/g, ' '))
						.join(' - ');
					
					const label = `${timezoneName} (${offset})`;
					
					options.push({
						label: label,
						value: tz
					});
				} catch (e) {
					// Fallback without offset
					const timezoneName = tz.split('/')
						.map(part => part.replace(/_/g, ' '))
						.join(' - ');
					
					options.push({
						label: timezoneName,
						value: tz
					});
				}
			});
			
			return options.sort((a, b) => a.label.localeCompare(b.label));
		} catch (error) {
			return getFallbackTimezones();
		}
	};

	const getFallbackTimezones = () => {
		return [
			{ label: 'Asia - Dhaka (UTC+6)', value: 'Asia/Dhaka' },
			{ label: 'UTC (UTC+0)', value: 'UTC' },
			{ label: 'America - New York (UTC-5)', value: 'America/New_York' },
			{ label: 'America - Los Angeles (UTC-8)', value: 'America/Los_Angeles' },
			{ label: 'Europe - London (UTC+0)', value: 'Europe/London' },
			{ label: 'Asia - Kolkata (UTC+5:30)', value: 'Asia/Kolkata' },
			{ label: 'Asia - Singapore (UTC+8)', value: 'Asia/Singapore' },
			{ label: 'Asia - Tokyo (UTC+9)', value: 'Asia/Tokyo' }
		].sort((a, b) => a.label.localeCompare(b.label));
	};

	// Get auto timezone
	const getAutoTimezone = () => {
		try {
			return Intl.DateTimeFormat().resolvedOptions().timeZone;
		} catch (error) {
			return 'Asia/Dhaka'; // Fallback
		}
	};

	// Calculate office hours display string
	const getOfficeHoursString = () => {
		if (!startTime || !endTime) return '';
		
		const startOption = timeOptions.find(option => option.value === startTime);
		const endOption = timeOptions.find(option => option.value === endTime);
		
		if (startOption && endOption) {
			return `${startOption.label} - ${endOption.label}`;
		}
		
		return '';
	};

	// Calculate duration in hours
	const calculateDuration = () => {
		if (!startTime || !endTime) return 0;
		
		const [startHours, startMinutes] = startTime.split(':').map(Number);
		const [endHours, endMinutes] = endTime.split(':').map(Number);
		
		let startTotal = startHours * 60 + startMinutes;
		let endTotal = endHours * 60 + endMinutes;
		
		// Handle overnight (end time next day)
		if (endTotal < startTotal) {
			endTotal += 24 * 60;
		}
		
		const durationMinutes = endTotal - startTotal;
		return (durationMinutes / 60).toFixed(1);
	};

	// Add holiday
	const addHoliday = (date) => {
		if (!date) return;
		
		const holidayDate = new Date(date).toISOString().split('T')[0];
		
		// Check if already exists
		if (holidays && holidays.includes(holidayDate)) {
			return;
		}
		
		const updatedHolidays = [...(holidays || []), holidayDate];
		setAttributes({ holidays: updatedHolidays });
		setSelectedDate('');
	};

	// Remove holiday
	const removeHoliday = (dateToRemove) => {
		const updatedHolidays = (holidays || []).filter(date => date !== dateToRemove);
		setAttributes({ holidays: updatedHolidays });
	};

	// Add monthly schedule
	const addMonthlySchedule = () => {
		if (!selectedMonth) return;
		
		// Check if month already exists
		const existingMonth = (monthlySchedules || []).find(schedule => schedule.month === selectedMonth);
		if (existingMonth) {
			alert('This month already has a schedule!');
			return;
		}
		
		const monthSchedule = {
			month: selectedMonth,
			startTime: startTime || '09:00',
			endTime: endTime || '17:00'
		};
		
		const updatedSchedules = [...(monthlySchedules || []), monthSchedule];
		setAttributes({ monthlySchedules: updatedSchedules });
		setSelectedMonth('');
	};

	// Remove monthly schedule
	const removeMonthlySchedule = (monthToRemove) => {
		const updatedSchedules = (monthlySchedules || []).filter(schedule => schedule.month !== monthToRemove);
		setAttributes({ monthlySchedules: updatedSchedules });
	};

	// Update monthly schedule
	const updateMonthlySchedule = (month, field, value) => {
		const updatedSchedules = (monthlySchedules || []).map(schedule => {
			if (schedule.month === month) {
				return { ...schedule, [field]: value };
			}
			return schedule;
		});
		setAttributes({ monthlySchedules: updatedSchedules });
	};

	// Get current time in selected timezone
	const getCurrentTimeInTimezone = () => {
		const effectiveTimezone = timezoneMode === 'auto' ? getAutoTimezone() : timezone;
		if (!effectiveTimezone) return '';
		
		try {
			return new Date().toLocaleTimeString('en-US', {
				timeZone: effectiveTimezone,
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true
			});
		} catch (error) {
			return 'Time unavailable';
		}
	};

	// Get current month schedule
	const getCurrentMonthSchedule = () => {
		if (!useMonthlySchedule || !monthlySchedules || monthlySchedules.length === 0) {
			return null;
		}
		
		const now = new Date();
		const currentMonth = now.getMonth().toString(); // 0-11
		
		return monthlySchedules.find(schedule => schedule.month === currentMonth);
	};

	// Get effective start and end time (considering monthly schedule)
	const getEffectiveOfficeHours = () => {
		if (useMonthlySchedule) {
			const currentSchedule = getCurrentMonthSchedule();
			if (currentSchedule) {
				return {
					startTime: currentSchedule.startTime,
					endTime: currentSchedule.endTime
				};
			}
		}
		
		return {
			startTime: startTime,
			endTime: endTime
		};
	};

	// Check if office is open right now based on current time
	const getCurrentOfficeStatus = () => {
		const effectiveTimezone = timezoneMode === 'auto' ? getAutoTimezone() : timezone;
		if (!effectiveTimezone) return 'Closed';
		
		const effectiveHours = getEffectiveOfficeHours();
		const effectiveStartTime = effectiveHours.startTime;
		const effectiveEndTime = effectiveHours.endTime;
		
		if (!effectiveStartTime || !effectiveEndTime) return 'Closed';
		
		try {
			const now = new Date();
			const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
			const todayDate = now.toISOString().split('T')[0];
			
			// Check if today is holiday
			if (holidays && holidays.includes(todayDate)) {
				return 'Holiday';
			}
			
			// Check if today is weekend
			const weekendDaysArray = weekendDays || [0, 6]; // Default: Sunday (0) and Saturday (6)
			if (weekendDaysArray.includes(dayOfWeek)) {
				return 'Weekend';
			}
			
			// Get current time in the selected timezone
			const currentTimeStr = now.toLocaleTimeString('en-US', {
				timeZone: effectiveTimezone,
				hour: '2-digit',
				minute: '2-digit',
				hour12: false
			});
			
			const [currentHours, currentMinutes] = currentTimeStr.split(':').map(Number);
			const [startHours, startMinutes] = effectiveStartTime.split(':').map(Number);
			const [endHours, endMinutes] = effectiveEndTime.split(':').map(Number);
			
			const currentTotal = currentHours * 60 + currentMinutes;
			const startTotal = startHours * 60 + startMinutes;
			let endTotal = endHours * 60 + endMinutes;
			
			// Handle overnight hours
			if (endTotal < startTotal) {
				endTotal += 24 * 60;
				if (currentTotal < startTotal) {
					currentTotal += 24 * 60;
				}
			}
			
			const isOpenNow = currentTotal >= startTotal && currentTotal <= endTotal;
			return isOpenNow ? 'Open' : 'Closed';
			
		} catch (error) {
			console.error('Error calculating office status:', error);
			return 'Closed';
		}
	};

	const timeOptions = generateTimeOptions();

	// Initialize timezones and set default times
	useEffect(() => {
		if (!timezones || timezones.length === 0) {
			const allTimezones = getAllTimezones();
			setAttributes({ 
				timezones: allTimezones,
				timezone: timezone || 'Asia/Dhaka',
				timezoneMode: timezoneMode || 'auto' // Default to auto
			});
		}
		
		// Set default start and end time if not set
		if (!startTime) {
			setAttributes({ 
				startTime: '09:00',
				endTime: '17:00'
			});
		}
		
		// Set default weekend days if not set
		if (!weekendDays) {
			setAttributes({ weekendDays: [0, 6] });
		}

		// Initialize useMonthlySchedule if not set
		if (useMonthlySchedule === undefined) {
			setAttributes({ useMonthlySchedule: false });
		}
	}, []);

	// Update current time every second
	useEffect(() => {
		const updateTime = () => {
			setCurrentTime(getCurrentTimeInTimezone());
		};
		
		updateTime();
		const interval = setInterval(updateTime, 1000);
		
		return () => clearInterval(interval);
	}, [timezone, timezoneMode]);

	// Update office hours when start/end time changes
	useEffect(() => {
		if (startTime && endTime) {
			setAttributes({ officeHours: getOfficeHoursString() });
		}
	}, [startTime, endTime]);

	// Update office status based on current time (every 10 seconds)
	useEffect(() => {
		const updateStatus = () => {
			const currentStatus = getCurrentOfficeStatus();
			setAttributes({ officeStatus: currentStatus });
		};
		
		updateStatus();
		const interval = setInterval(updateStatus, 10000);
		
		return () => clearInterval(interval);
	}, [weekendDays, holidays, startTime, endTime, timezone, currentTime, useMonthlySchedule, monthlySchedules, timezoneMode]);

	const duration = calculateDuration();
	const currentStatus = getCurrentOfficeStatus();
	const effectiveHours = getEffectiveOfficeHours();
	const currentMonthSchedule = getCurrentMonthSchedule();
	const effectiveTimezone = timezoneMode === 'auto' ? getAutoTimezone() : timezone;


	const allBlockStyle = useMemo(() => `
	  	.fb-timezone-container {
			display: inline-block;
		}
		.fb-timezone-container .fb-timezone-time {
			width: auto;
			background: #252B37;
			display: inline-block;
			padding: 4px 12px;
			border-radius: 24px;
			color: #ffff;
			font-size: 16px;
			line-height: 22px;
			font-weight: 550;
			font-family: 'Inter';
			width: max-content;
			align-items: center;
			justify-content: center;
			display: flex;
			gap: 4px;
		}
		.fb-timezone-container .fb-timezone-time .fb-timezone-timezone {
			color: #A4A7AE;
		}
		.fb-timezone-container .fb-timezone-header {
			display: flex;
			width: fit-content;
			gap: 8px;
			flex-wrap: wrap;
		}
		.fb-timezone-status {
			display: flex;
			align-items: center;
			gap: 8px;
			font-size: 16px;
			line-height: 22px;
			font-weight: 550;
			color: #12B76A;
			border-radius: 24px;
			padding-right: 12px;
			overflow: hidden;
			font-family: 'Inter';
		}
		.fb-timezone-status .fb-timezone-status-badge {
			height: 100%;
			align-items: center;
			display: flex;
			padding: 3px 12px;
			border-radius: 24px;
			text-transform: uppercase;
		}

		.fb-timezone-status .fb-timezone-status-badge > span {
			display: flex;
			align-items: center;
			gap: 8px;
		}
		.fb-timezone-status.open {
			border: 1px solid #12B76A;
		}
		.fb-timezone-status.close {
			border: 1px solid #D92D20;
		}
		.fb-timezone-status.open .fb-timezone-status-badge {
			background-color: #D1FADF;
		}
		.fb-timezone-status.close .fb-timezone-status-badge {
			background-color: #FEE4E2;
		}

		.fb-timezone-status.close {
			color: #D92D20;
		}
		
	  `);


	  useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle}`});
    }, [allBlockStyle] );

	//   #F04438
	return (
		<>
			<style>
				{allBlockStyle}
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
							<div className={"fb-tab-controls " + tab.name}>
								{tab.name === 'general' && (
									<>
									
										<PanelBody title="Location & Time Settings" initialOpen={true}>
											<TextControl
												label="Location Name"
												value={location || ''}
												onChange={(value) => setAttributes({ location: value })}
												placeholder="e.g., Dhaka Office, Bangladesh"
											/>
											
											{/* Timezone Mode Tabs */}
											<div style={{ marginBottom: '15px' }}>
												<strong>Timezone Setting:</strong>
												<TabPanel
													className="timezone-tabs"
													activeClass="is-active"
													onSelect={(tabName) => setAttributes({ timezoneMode: tabName })}
													tabs={[
														{
															name: 'auto',
															title: 'Auto Timezone',
															className: 'tab-auto'
														},
														{
															name: 'manual',
															title: 'Manual Timezone',
															className: 'tab-manual'
														}
													]}
												>
													{(tab) => (
														<div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '4px', marginTop: '10px' }}>
															{tab.name === 'auto' ? (
																<div>
																	<p style={{ margin: '0 0 10px 0', fontWeight: '500' }}>
																		🌍 Auto-detected Timezone:
																	</p>
																	<TextControl
																		value={getAutoTimezone()}
																		readOnly
																		help="Timezone automatically detected from your browser/device"
																	/>
																</div>
															) : (
																<div>
																	<SelectControl
																		label="Select Timezone"
																		value={timezone}
																		options={timezones || []}
																		onChange={(value) => setAttributes({ timezone: value })}
																		help="Manually select your timezone"
																	/>
																</div>
															)}
														</div>
													)}
												</TabPanel>
											</div>

											{effectiveTimezone && (
												<TextControl
													label="Current Time"
													value={currentTime || 'Loading...'}
													readOnly
													help={`Live clock in ${timezoneMode === 'auto' ? 'auto-detected' : 'selected'} timezone`}
												/>
											)}

											{/* Fixed ToggleControl */}
											<div style={{ margin: '20px 0', padding: '15px', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
												<ToggleControl
													label={<strong>Use Monthly Schedule</strong>}
													checked={!!useMonthlySchedule}
													onChange={(value) => {
														console.log('Toggle changed to:', value);
														setAttributes({ useMonthlySchedule: value });
													}}
													help="Enable to set different office hours for each month"
												/>
											</div>

											{!useMonthlySchedule ? (
												<>
													<SelectControl
														label="Start Time"
														value={startTime}
														options={timeOptions}
														onChange={(value) => setAttributes({ startTime: value })}
													/>

													<SelectControl
														label="End Time"
														value={endTime}
														options={timeOptions}
														onChange={(value) => setAttributes({ endTime: value })}
													/>
												</>
											) : (
												<TextControl
													label="Default Hours"
													value={`${timeOptions.find(t => t.value === startTime)?.label} - ${timeOptions.find(t => t.value === endTime)?.label}`}
													readOnly
													help="These hours will be used for months without specific schedules"
												/>
											)}

											<TextControl
												label="Office Hours"
												value={officeHours || ''}
												readOnly
												help={`Duration: ${duration} hours`}
											/>
										</PanelBody>

										{useMonthlySchedule && (
											<PanelBody title="Monthly Schedule" initialOpen={true}>
												<div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
													<strong>Add New Monthly Schedule:</strong>
													<div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '10px', alignItems: 'end', marginTop: '10px' }}>
														<SelectControl
															label="Select Month"
															value={selectedMonth}
															options={[{ label: 'Choose a month...', value: '' }, ...monthOptions]}
															onChange={setSelectedMonth}
														/>
														<Button 
															isPrimary 
															onClick={addMonthlySchedule}
															disabled={!selectedMonth}
															style={{ marginBottom: '8px' }}
														>
															Add Schedule
														</Button>
													</div>
												</div>
												
												{monthlySchedules && monthlySchedules.length > 0 ? (
													<div>
														<strong>Monthly Schedules ({monthlySchedules.length}/12):</strong>
														<div style={{ 
															maxHeight: '400px', 
															overflowY: 'auto', 
															marginTop: '10px',
															border: '1px solid #ddd',
															borderRadius: '4px'
														}}>
															{monthlySchedules.map(schedule => (
																<div key={schedule.month} style={{ 
																	padding: '15px',
																	borderBottom: '1px solid #e0e0e0',
																	backgroundColor: '#fff'
																}}>
																	<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
																		<strong style={{ fontSize: '1.1em', color: '#1e1e1e' }}>
																			{monthOptions.find(m => m.value === schedule.month)?.label}
																		</strong>
																		<Button 
																			isDestructive
																			isSmall
																			onClick={() => removeMonthlySchedule(schedule.month)}
																		>
																			Remove
																		</Button>
																	</div>
																	<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
																		<SelectControl
																			label="Start Time"
																			value={schedule.startTime}
																			options={timeOptions}
																			onChange={(value) => updateMonthlySchedule(schedule.month, 'startTime', value)}
																		/>
																		<SelectControl
																			label="End Time"
																			value={schedule.endTime}
																			options={timeOptions}
																			onChange={(value) => updateMonthlySchedule(schedule.month, 'endTime', value)}
																		/>
																	</div>
																	<div style={{ marginTop: '10px', fontSize: '0.9em', color: '#666', textAlign: 'center' }}>
																		Duration: {calculateDurationForTimes(schedule.startTime, schedule.endTime)} hours
																	</div>
																</div>
															))}
														</div>
													</div>
												) : (
													<div style={{ padding: '40px 20px', textAlign: 'center', border: '2px dashed #ddd', borderRadius: '4px' }}>
														<p style={{ fontSize: '1.1em', marginBottom: '10px' }}>No monthly schedules added yet</p>
														<p style={{ fontSize: '0.9em', color: '#666' }}>Add months above to set custom office hours for each month</p>
													</div>
												)}
											</PanelBody>
										)}

										<PanelBody title="Weekend Settings" initialOpen={false}>
											<SelectControl
												label="Select Weekend Days"
												value={weekendDays ? weekendDays.join(',') : ''}
												options={[
													{ label: 'Saturday & Sunday', value: '0,6' },
													{ label: 'Friday & Saturday', value: '5,6' },
													{ label: 'Sunday Only', value: '0' },
													{ label: 'No Weekend', value: '' }
												]}
												onChange={(value) => {
													const daysArray = value ? value.split(',').map(Number) : [];
													setAttributes({ weekendDays: daysArray });
												}}
												help="Select which days are weekend (office closed)"
											/>
										</PanelBody>

										<PanelBody title="Holidays & Special Closures" initialOpen={false}>
											<div style={{ marginBottom: '15px' }}>
												<strong>Add Holiday Date:</strong>
												<div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '10px' }}>
													<DatePicker
														currentDate={selectedDate}
														onChange={setSelectedDate}
													/>
													<Button 
														isPrimary 
														onClick={() => addHoliday(selectedDate)}
														disabled={!selectedDate}
													>
														Add
													</Button>
												</div>
											</div>
											
											{holidays && holidays.length > 0 && (
												<div>
													<strong>Holidays ({holidays.length}):</strong>
													<div style={{ 
														maxHeight: '200px', 
														overflowY: 'auto', 
														marginTop: '10px',
														border: '1px solid #ddd',
														padding: '10px',
														borderRadius: '4px'
													}}>
														{holidays.map(holiday => (
															<div key={holiday} style={{ 
																display: 'flex', 
																justifyContent: 'space-between', 
																alignItems: 'center', 
																padding: '8px',
																borderBottom: '1px solid #f0f0f0'
															}}>
																<span style={{ fontWeight: '500' }}>
																	{new Date(holiday).toLocaleDateString('en-US', { 
																		weekday: 'long', 
																		year: 'numeric', 
																		month: 'long', 
																		day: 'numeric' 
																	})}
																</span>
																<Button 
																	isDestructive
																	isSmall
																	onClick={() => removeHoliday(holiday)}
																>
																	Remove
																</Button>
															</div>
														))}
													</div>
												</div>
											)}
										</PanelBody>

										<PanelBody title="General Settings">
											<TextControl
												label="Title"
												value={title || ''}
												onChange={(value) => setAttributes({ title: value })}
												placeholder="Office Hours"
											/>

											<TextControl
												label="Current Status"
												value={currentStatus}
												readOnly
												help="Automatically updates based on current time, weekend and holidays"
											/>
										</PanelBody>
									</>
								)}
								{tab.name === "styles" && (
									<>
										<PanelBody title={__("Menu Styling", "frontis-blocks")} initialOpen={true}>
											{/* Add styling controls here for the menu */}
										</PanelBody>

										<PanelBody title={__("Icon Styling", "frontis-blocks")} initialOpen={true}>
											{/* Add styling controls here for the icon */}
										</PanelBody>
									</>
								)}
								{tab.name === "advanced" && (
									<>
										<PanelBody title={__("Layout", "frontis-blocks")} initialOpen={true}>
											{/* Add advanced settings here */}
										</PanelBody>
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