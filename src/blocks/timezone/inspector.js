import { __ } from '@wordpress/i18n';
import {
	InspectorControls
} from '@wordpress/block-editor';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import {
	PanelBody,
	TabPanel,
	TextControl,
	SelectControl,
	ToggleControl, 
	DatePicker,
	Button,
	BaseControl
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
		startTime,
		endTime,
		officeHours,
		title,
		officeStatus,
		weekendDays,
		holidays,
		useMonthlySchedule,
		monthlySchedules,
		timezoneMode,
		countdownMessage,
		entityType 
	} = attributes;

	const [selectedDate, setSelectedDate] = useState('');
	const [currentTime, setCurrentTime] = useState('');
	const [selectedMonth, setSelectedMonth] = useState('');

	// Generate time options from 5:00 AM to 11:30PM in 30-minute intervals
	const generateTimeOptions = () => {
		const options = [];

		// Morning Hours (5:00 AM - 11:30 AM)
		for (let hour = 5; hour < 12; hour++) {
			options.push({
				label: `${hour}:00 AM`,
				value: `${hour.toString().padStart(2, '0')}:00`,
			});
			options.push({
				label: `${hour}:30 AM`,
				value: `${hour.toString().padStart(2, '0')}:30`,
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

		// Afternoon/Evening Hours (1:00 PM - 11:30 PM)
		for (let hour = 13; hour < 24; hour++) {
			const displayHour = hour > 12 ? hour - 12 : hour;
			const period = 'PM';

			options.push({
				label: `${displayHour}:00 ${period}`,
				value: `${hour.toString().padStart(2, '0')}:00`,
			});

			if(hour < 23) {
				options.push({
					label: `${displayHour}:30 ${period}`,
					value: `${hour.toString().padStart(2, '0')}:30`,
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

	// Helper function to get full weekday name from number
	const getWeekdayName = (dayNumber) => {
		const days = {
			'0': 'Sunday',
			'1': 'Monday', 
			'2': 'Tuesday',
			'3': 'Wednesday',
			'4': 'Thursday',
			'5': 'Friday',
			'6': 'Saturday'
		};
		return days[dayNumber] || '';
	}

	// Get All Timezones with UTC offsets - FIXED: changed 'timezone' to 'timeZone'
	const getAllTimezones = () => {
		try {
			const timezoneList = Intl.supportedValuesOf('timeZone'); // FIXED: 'timeZone' not 'timezone'
			const options = [];

			timezoneList.forEach(tz => {
				try{
					const now = new Date();
					const offset = now.toLocaleString('en-US', { // FIXED: 'en-US' not 'en-us'
						timeZone: tz,
						timeZoneName: 'shortOffset'
					}).split(' ').pop();

					// Format timezone name
					const timezoneName = tz.split('/').map(part => part.replace(/_/g, ' ')).join(' - ');

					const label = `${timezoneName} (${offset})`;

					options.push({
						label: label,
						value: tz
					});
				} catch (e) {
					// Fallback without offset
					const timezoneName = tz.split('/').map(part => part.replace(/_/g, ' ')).join(' - ');

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

	// Get Auto Timezone - FIXED: Return only IANA string for calculations
	const getAutoTimezone = () => {
		try {
			return Intl.DateTimeFormat().resolvedOptions().timeZone;
		} catch (error) {
			return 'Asia/Dhaka';
		}
	}

	// Get formatted timezone for display
	const getFormattedTimezone = (timezone) => {
		try {
			const now = new Date();
			const offset = now.toLocaleString('en-US', { 
				timeZone: timezone, 
				timeZoneName: 'shortOffset' 
			}).split(' ').pop();
			
			const cityName = timezone.split('/').pop().replace(/_/g, ' ');
			
			return `(${offset}) ${cityName}`;
		} catch (error) {
			return '(UTC+6) Dhaka';
		}
	}

		// Improved office hours calculation
		const getOfficeHoursString = () => {
			// If monthly schedule is enabled
			if (useMonthlySchedule) {
				const currentSchedule = getCurrentMonthSchedule();
				if (currentSchedule && currentSchedule.startTime && currentSchedule.endTime) {
					const startOption = timeOptions.find(option => option.value === currentSchedule.startTime);
					const endOption = timeOptions.find(option => option.value === currentSchedule.endTime);
					if (startOption && endOption) {
						return `${startOption.label} - ${endOption.label}`;
					}
				}
				// Fallback to default hours
				if (startTime && endTime) {
					const startOption = timeOptions.find(option => option.value === startTime);
					const endOption = timeOptions.find(option => option.value === endTime);
					if (startOption && endOption) {
						return `${startOption.label} - ${endOption.label} (Default)`;
					}
				}
				return 'No schedule set';
			}

			// Regular schedule
			if (startTime && endTime) {
				const startOption = timeOptions.find(option => option.value === startTime);
				const endOption = timeOptions.find(option => option.value === endTime);
				if (startOption && endOption) {
					return `${startOption.label} - ${endOption.label}`;
				}
			}
			
			return 'Set start and end time';
		};

	// Calculate Duration in hours - FIXED: Use effective hours
	const calculateDuration = () => {
		const effectiveHours = getEffectiveOfficeHours();
		const effectiveStartTime = effectiveHours.startTime;
		const effectiveEndTime = effectiveHours.endTime;

		if(!effectiveStartTime || !effectiveEndTime) return 0;

		const [startHours, startMinutes] = effectiveStartTime.split(':').map(Number);
		const [endHours, endMinutes] = effectiveEndTime.split(':').map(Number);

		let startTotal = startHours * 60 + startMinutes;
		let endTotal = endHours * 60 + endMinutes;

		// Handle Overnight (end time next day)
		if(endTotal < startTotal) {
			endTotal += 24 * 60;
		}

		const durationMinutes = endTotal - startTotal;
		return (durationMinutes / 60).toFixed(1);    
	};

	// Add Holiday
	const addHoliday = (date) => {
		if(!date) return;

		const holidayDate = new Date(date).toISOString().split('T')[0];

		// Check if already exists
		if ( holidays && holidays.includes(holidayDate)){
			return;
		}

		const updatedHolidays = [...(holidays || []), holidayDate];
		setAttributes({holidays: updatedHolidays});
		setSelectedDate('');
	};

	// Remove Holiday
	const removeHoliday = (dateToRemove) => {
		const updatedHolidays = (holidays || []).filter(date => date !== dateToRemove);
		setAttributes({holidays: updatedHolidays});
	}

	// Add Monthly Schedule 
	const addMonthlySchedule = () => {
		if(!selectedMonth) return;
		
		const existingMonth = (monthlySchedules || []).find(schedule => schedule.month === selectedMonth);
		if(existingMonth) {
			alert('This month already has a schedule!');
			return;
		} 

		const monthlySchedule = {
			month: selectedMonth,
			startTime: startTime || '09:00', // FIXED: Changed to 09:00 for consistency
			endTime: endTime || '17:00'      // FIXED: Changed to 17:00 for consistency
		};
		const updatedSchedules = [...(monthlySchedules || []), monthlySchedule];
		setAttributes({
			monthlySchedules: updatedSchedules
		});
		setSelectedMonth('');
	};

	// Remove Monthly Schedule
	const removeMonthlySchedule = (monthToRemove) => {
		const updatedSchedules = (monthlySchedules || []).filter(schedule => schedule.month !== monthToRemove);
		setAttributes({
			monthlySchedules: updatedSchedules
		});
	};

	// Update Monthly Schedule - FIXED: Function name typo
	const updateMonthlySchedule = (month, field, value) => { // FIXED: 'updateMonthlySchedule' not 'updatedMonthlySchedule'
		const updatedSchedules = (monthlySchedules || []).map(schedule => {
			if(schedule.month === month) {
				return { ...schedule, [field]: value };
			}
			return schedule;
		});

		setAttributes({
			monthlySchedules: updatedSchedules
		});
	};

	// Get Current Time in selected timezone - FIXED: Use IANA timezone
	const getCurrentTimeInTimezone = () => {
		const effectiveTimezone = timezoneMode === 'auto' ? getAutoTimezone() : timezone;

		if(!effectiveTimezone) return '';

		try{
			return new Date().toLocaleTimeString('en-US', { // FIXED: 'en-US' not 'en-us'
				timeZone: effectiveTimezone,
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true
			});
		}catch(error){
			return 'Time Unavailable';
		}
	};

	// Get Current Month Schedule
	const getCurrentMonthSchedule = () => {
		if (!useMonthlySchedule || !monthlySchedules || monthlySchedules.length === 0) {
			return null;
		}

		const now = new Date();
		const currentMonth = now.getMonth().toString();

		return monthlySchedules.find(schedule => schedule.month === currentMonth);
	};

	// Get Effective Start and End Time Monthly Schedule
	const getEffectiveOfficeHours = () => {
		if (useMonthlySchedule) {
			const currentSchedule = getCurrentMonthSchedule();
			if(currentSchedule) {
				return {
					startTime: currentSchedule.startTime,
					endTime: currentSchedule.endTime
				};
			}
		}

		return {
			startTime: startTime,
			endTime: endTime
		}
	};

	// Check if office is open right now based on current time - FIXED: Use IANA timezone
	const getCurrentOfficeStatus = () => {
		const effectiveTimezone = timezoneMode === 'auto' ? getAutoTimezone() : timezone;
		
		if(!effectiveTimezone) return 'Closed';

		const effectiveHours = getEffectiveOfficeHours();
		const effectiveStartTime = effectiveHours.startTime;
		const effectiveEndTime = effectiveHours.endTime;

		if(!effectiveStartTime || !effectiveEndTime) return 'Closed';

		try {
			const now = new Date();
			const dayOfWeek = now.getDay();
			const todayDate = now.toISOString().split('T')[0];

			// Check if today is holiday - FIXED: Moved holiday check before weekend
			if(holidays && holidays.includes(todayDate)){
				return 'Holiday';
			}

			// Check if today is weekend
			const weekendDaysArray = weekendDays || [0, 6];
			if(weekendDaysArray.includes(dayOfWeek)){
				return 'Weekend';
			}

			// Get current time in the selected timezone
			const currentTimeStr = now.toLocaleTimeString('en-US', { // FIXED: 'en-US' not 'en-us'
				timeZone: effectiveTimezone,
				hour: '2-digit',
				minute: '2-digit',
				hour12: false
			});

			const [currentHours, currentMinutes] = currentTimeStr.split(':').map(Number);
			
			const [startHours, startMinutes] = effectiveStartTime.split(':').map(Number);

			const [endHours, endMinutes] = effectiveEndTime.split(':').map(Number);

			let currentTotal = currentHours * 60 + currentMinutes;
			let startTotal = startHours * 60 + startMinutes;
			let endTotal = endHours * 60 + endMinutes;

			// Handle Overnight hours
			if(endTotal < startTotal) {
				endTotal += 24 * 60;
				
				if(currentTotal < startTotal) {
					currentTotal += 24 * 60;
				}
			}

			const isOpenNow = currentTotal >= startTotal && currentTotal <= endTotal;
			return isOpenNow ? 'Open' : 'Closed';

		}catch (error){
			console.error('Error calculating office status:', error);
			return 'Closed';
		}
	};

	// Helper function for monthly schedule duration - FIXED: Parameter and variable names
	const calculateDurationForTimes = (startTime, endTime) => { // FIXED: Added parameters
		if(!startTime || !endTime) return 0;

		const [startHours, startMinutes] = startTime.split(':').map(Number); // FIXED: Number not 'number'
		const [endHours, endMinutes] = endTime.split(':').map(Number); // FIXED: Number not 'number'

		let startTotal = startHours * 60 + startMinutes;
		let endTotal = endHours * 60 + endMinutes;

		if(endTotal < startTotal) {
			endTotal += 24 * 60;
		}

		const durationMinutes = endTotal - startTotal;
		return (durationMinutes/60).toFixed(1);
	}

	const timeOptions = generateTimeOptions();

	// Initialize timezones and set default times
	useEffect(() => {
		if(!timezones || timezones.length === 0) {
			const allTimezones = getAllTimezones();
			setAttributes({
				timezones: allTimezones,
				timezone: timezone || 'Asia/Dhaka',
				timezoneMode: timezoneMode || 'auto'
			});
		}

		// Set Default start and end time if not set 
		if(!startTime) {
			setAttributes({
				startTime: '09:00', // FIXED: Consistent time format
				endTime: '17:00'    // FIXED: Consistent time format
			});
		}

		// Set Default weekend days if not set
		if(!weekendDays) {
			setAttributes({
				weekendDays: [0, 6]
			});
		}

		// Initialize useMonthlySchedule if not set
		if(useMonthlySchedule === undefined) {
			setAttributes({
				useMonthlySchedule: false
			});
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
		if(startTime && endTime) {
			setAttributes({
				officeHours: getOfficeHoursString()
			});
		}
	}, [startTime, endTime, useMonthlySchedule, monthlySchedules]); // FIXED: Added dependencies

	// Update office status based on current time (every 10 second)
	useEffect(() => {
		const updateStatus = () => {
			const currentStatus = getCurrentOfficeStatus();
			setAttributes({
				officeStatus: currentStatus 
			});
		};

		updateStatus();
		const interval = setInterval(updateStatus, 10000);

		return () => clearInterval(interval);
	}, [weekendDays, holidays, startTime, endTime, timezone, currentTime, useMonthlySchedule, monthlySchedules, timezoneMode]);

	const duration = calculateDuration();
	const currentStatus = getCurrentOfficeStatus();
	const effectiveTimezone = timezoneMode === 'auto' ? getAutoTimezone() : timezone;
	const displayTimezone = timezoneMode === 'auto' ? getFormattedTimezone(getAutoTimezone()) : getFormattedTimezone(timezone);
	const currentMonthSchedule = getCurrentMonthSchedule();

	

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
												label="Location"
												value={location || ''}
												onChange={(value) => setAttributes({ location: value })}
												placeholder="e.g., Dhaka Office, Bangladesh"
											/>
											
											{/* Timezone Settings with Select2 */}
											<BaseControl label={__("Timezone Setting", "frontis-blocks")} help="Choose how to set your timezone">
												<Select2
													options={[
														{ label: 'Auto', value: 'auto' },
														{ label: 'Manual', value: 'manual' }
													]}
													value={timezoneMode || 'auto'}
													onChange={(opt) => setAttributes({ timezoneMode: opt?.value || 'auto' })}
													isClearable={false}
													className="fb-select2-control"
												/>
											</BaseControl>

											{timezoneMode === 'auto' ? (
												<TextControl
													label="Actual/Present Timezone"
													value={displayTimezone || 'Detecting...'}
													readOnly
													help="Timezone automatically detected from your browser"
												/>
											) : (
												<BaseControl label={__("Select Timezone", "frontis-blocks")} help="Choose your timezone from the list">
													<Select2
														options={timezones || []}
														value={timezone}
														onChange={(opt) => setAttributes({ timezone: opt?.value || 'Asia/Dhaka' })}
														isClearable={false}
														className="fb-select2-control"
													/>
												</BaseControl>
											)}

											{effectiveTimezone && (
												<TextControl
													label="Current Time"
													value={currentTime || 'Loading...'}
													readOnly
													help={`Live clock in ${timezoneMode === 'auto' ? 'auto-detected' : 'selected'} timezone`}
												/>
											)}

											{/* Monthly Schedule Toggle */}
											<BaseControl>
												<ToggleControl
													label="Set Monthly"
													checked={!!useMonthlySchedule}
													onChange={(value) => setAttributes({ useMonthlySchedule: value })}
													help="Enable to set different hours for each month"
												/>
											</BaseControl>

											{!useMonthlySchedule ? (
												<>
													<BaseControl label={__("Start Time", "frontis-blocks")} help="Select opening time">
														<Select2
															options={timeOptions}
															value={startTime}
															onChange={(opt) => setAttributes({ startTime: opt?.value || '09:00' })}
															isClearable={false}
															className="fb-select2-control"
														/>
													</BaseControl>

													<BaseControl label={__("End Time", "frontis-blocks")} help="Select closing time">
														<Select2
															options={timeOptions}
															value={endTime}
															onChange={(opt) => setAttributes({ endTime: opt?.value || '17:00' })}
															isClearable={false}
															className="fb-select2-control"
														/>
													</BaseControl>
												</>
											) : (
												<TextControl
													label="Default Hours"
													value={startTime && endTime ? 
														`${timeOptions.find(t => t.value === startTime)?.label || startTime} - ${timeOptions.find(t => t.value === endTime)?.label || endTime}` : 
														'set start and end time'
													}
													readOnly
													help="Default hours used when monthly schedule is not set"
												/>
											)}

											<TextControl
												label="Operating Hours"
												value={officeHours || 'Set start and end time'}
												readOnly
												help={useMonthlySchedule && currentMonthSchedule ? 
													`Current month: ${monthOptions.find(m => m.value === currentMonthSchedule.month)?.label}` : 
													`Duration: ${duration} hours`}
											/>
										</PanelBody>

										{useMonthlySchedule && (
											<PanelBody title="Monthly Schedule" initialOpen={true}>
												<div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
													<BaseControl 
														label={__("Add New Monthly Schedule", "frontis-blocks")} 
														help="Select a month and add its schedule"
													>
														
															<Select2
																options={[{ label: 'Choose a month...', value: '' }, ...monthOptions]}
																value={selectedMonth}
																onChange={(opt) => setSelectedMonth(opt?.value || '')}
																isClearable={false}
																className="fb-select2-control"
															/>
															<Button 
																onClick={addMonthlySchedule}
																disabled={!selectedMonth}
															>
																{__("Add Schedule", "frontis-blocks")}
															</Button>
														
													</BaseControl>
												</div>
												
												{monthlySchedules && monthlySchedules.length > 0 ? (
													<div>
														<strong>{__("Monthly Schedules", "frontis-blocks")} ({monthlySchedules.length}/12):</strong>
														<div style={{ 
															maxHeight: '200px', 
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
																			{__("Remove", "frontis-blocks")}
																		</Button>
																	</div>
																	<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
																		<BaseControl label={__("Start Time", "frontis-blocks")}>
																			<Select2
																				options={timeOptions}
																				value={schedule.startTime}
																				onChange={(opt) => updateMonthlySchedule(schedule.month, 'startTime', opt?.value || '09:00')}
																				isClearable={false}
																				className="fb-select2-control"
																			/>
																		</BaseControl>
																		<BaseControl label={__("End Time", "frontis-blocks")}>
																			<Select2
																				options={timeOptions}
																				value={schedule.endTime}
																				onChange={(opt) => updateMonthlySchedule(schedule.month, 'endTime', opt?.value || '17:00')}
																				isClearable={false}
																				className="fb-select2-control"
																			/>
																		</BaseControl>
																	</div>
																	<div style={{ marginTop: '10px', fontSize: '0.9em', color: '#666', textAlign: 'center' }}>
																		{__("Duration", "frontis-blocks")}: {calculateDurationForTimes(schedule.startTime, schedule.endTime)} {__("hours", "frontis-blocks")}
																	</div>
																</div>
															))}
														</div>
													</div>
												) : (
													<div style={{ padding: '40px 20px', textAlign: 'center', border: '2px dashed #ddd', borderRadius: '4px' }}>
														<p style={{ fontSize: '1.1em', marginBottom: '10px' }}>{__("No monthly schedules added yet", "frontis-blocks")}</p>
														<p style={{ fontSize: '0.9em', color: '#666' }}>{__("Add months above to set custom hours for each month", "frontis-blocks")}</p>
													</div>
												)}
											</PanelBody>
											
										)}

										<PanelBody title={__("Closed Days Settings", "frontis-blocks")} initialOpen={false}>
											<BaseControl 
												label={__("Select Closed Days", "frontis-blocks")} 
												help={__("Choose which days are closed (multiple selection available)", "frontis-blocks")}
											>
												<Select2
													options={[
														{ label: 'Sunday', value: '0' },
														{ label: 'Monday', value: '1' },
														{ label: 'Tuesday', value: '2' },
														{ label: 'Wednesday', value: '3' },
														{ label: 'Thursday', value: '4' },
														{ label: 'Friday', value: '5' },
														{ label: 'Saturday', value: '6' }
													]}
													value={weekendDays ? weekendDays.map(day => ({ 
														label: getWeekdayName(day), 
														value: day 
													})) : []}
													onChange={(selectedOptions) => {
														console.log('Weekend Days Selected:', selectedOptions); // Debug
														const daysArray = Array.isArray(selectedOptions) 
															? selectedOptions.map(opt => opt.value).filter(Boolean)
															: [];
														setAttributes({ weekendDays: daysArray });
													}}
													isMulti={true}
													isClearable={true}
													className="fb-select2-control"
												/>
											</BaseControl>
											
											{weekendDays && weekendDays.length > 0 && (
												<div style={{ marginTop: '15px' }}>
													<strong>{__("Selected Closed Days", "frontis-blocks")}:</strong>
													<div style={{ 
														display: 'flex', 
														flexWrap: 'wrap', 
														gap: '8px', 
														marginTop: '8px',
														padding: '10px',
														backgroundColor: '#f8f9fa',
														borderRadius: '4px',
														border: '1px solid #e0e0e0'
													}}>
														{weekendDays.map(day => (
															<span 
																key={day}
																style={{
																	backgroundColor: '#007cba',
																	color: 'white',
																	padding: '6px 12px',
																	borderRadius: '15px',
																	fontSize: '12px',
																	fontWeight: '600',
																	display: 'inline-flex',
																	alignItems: 'center'
																}}
															>
																{getWeekdayName(day)}
																<button 
																	onClick={() => {
																		const updatedDays = weekendDays.filter(d => d !== day);
																		setAttributes({ weekendDays: updatedDays });
																	}}
																	style={{ 
																		background: 'none', 
																		border: 'none', 
																		color: 'white', 
																		cursor: 'pointer',
																		fontWeight: 'bold',
																		marginLeft: '5px',
																		fontSize: '14px'
																	}}
																>
																	×
																</button>
															</span>
														))}
													</div>
												</div>
											)}
										</PanelBody>

										<PanelBody title={__("Holidays & Special Closures", "frontis-blocks")} initialOpen={false}>
    										<BaseControl
												label={__("Add Holiday Date", "frontis-blocks")}
												help={__("Select a date to add as holiday", "frontis-blocks")}
											>
												<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', marginTop: '5px' }}>
													<DatePicker
														currentDate={selectedDate}
														onChange={(date) => {
															setSelectedDate(date);
														}}
													/>
													<Button 
														onClick={() => {
															if (selectedDate) {
																addHoliday(selectedDate);
															}
														}}
														disabled={!selectedDate}
													>
														{__("Add Holiday", "frontis-blocks")}
													</Button>
												</div>
											</BaseControl>
											
											{holidays && holidays.length > 0 && (
												<div style={{ marginTop: '15px' }}>
													<strong>{__("Holidays", "frontis-blocks")} ({holidays.length}):</strong>
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
																padding: '10px',
																borderBottom: '1px solid #f0f0f0',
																backgroundColor: '#fff'
															}}>
																<div>
																	<span style={{ fontWeight: '600', display: 'block' }}>
																		{new Date(holiday).toLocaleDateString('en-US', { 
																			weekday: 'long', 
																			year: 'numeric', 
																			month: 'long', 
																			day: 'numeric' 
																		})}
																	</span>
																	<span style={{ fontSize: '0.8em', color: '#666' }}>
																		{new Date(holiday).toLocaleDateString()}
																	</span>
																</div>
																<Button 
																	isDestructive
																	isSmall
																	onClick={() => {
																		console.log('Removing holiday:', holiday); // Debug
																		removeHoliday(holiday);
																	}}
																>
																	{__("Remove", "frontis-blocks")}
																</Button>
															</div>
														))}
													</div>
												</div>
											)}
										</PanelBody>

									<PanelBody title={__("General Settings", "frontis-blocks")}>
										<TextControl
											label={__("Current Status", "frontis-blocks")}
											value={currentStatus}
											readOnly
											help={__("Automatically updates based on current time, closed days and holidays", "frontis-blocks")}
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