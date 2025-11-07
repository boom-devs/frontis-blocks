import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TabPanel,
	TextControl,
	SelectControl,
	ToggleControl, 
	DatePicker,
	Button,
	BaseControl,
	TextareaControl
} from '@wordpress/components';
import Select2 from "react-select";
import './editor.scss';
import { useEffect, useState, useMemo, useCallback } from '@wordpress/element';
import { TIMEZONE, WEEKENDDAY } from '@Constants/fbConstants';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		location,        
		timezone,        
		timezones,       
		startTime,
		endTime,
		officeHours,
		officeStatus,
		weekendDays,
		holidays,
		useMonthlySchedule,
		monthlySchedules,
		timezoneMode,
		closedMessage,
		completionMessage,
		weekendMessage,
		holidayMessage,
		useUTCTimezoneFormat,
		separator,
		openStatusText,
		closedStatusText,
		beforeTimeText,
		afterTimeText
	} = attributes;

	// State variables
	const [selectedDate, setSelectedDate] = useState('');
	const [currentTime, setCurrentTime] = useState('');
	const [selectedMonth, setSelectedMonth] = useState('');

	// Initialize attributes with proper default values
	useEffect(() => {
		const updates = {};
		
		if (!timezones || timezones.length === 0) {
			updates.timezones = getAllTimezones();
			updates.timezone = timezone || 'Asia/Dhaka';
			updates.timezoneMode = timezoneMode || 'auto';
		}

		// Set proper default time values
		if (!startTime || !startTime.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
			updates.startTime = '09:00';
		}
		if (!endTime || !endTime.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
			updates.endTime = '17:00';
		}

		if (!weekendDays) {
			updates.weekendDays = ['0', '6'];
		}

		if (useMonthlySchedule === undefined) {
			updates.useMonthlySchedule = false;
		}
		
		if (useUTCTimezoneFormat === undefined) {
			updates.useUTCTimezoneFormat = false;
		}

		// Initialize default messages
		if (!closedMessage) {
			updates.closedMessage = 'Office is closed';
		}
		if (!completionMessage) {
			updates.completionMessage = 'Office is open';
		}
		if (!weekendMessage) {
			updates.weekendMessage = 'Closed for weekend';
		}
		if (!holidayMessage) {
			updates.holidayMessage = 'Closed for holiday';
		}

		// Initialize separator
		if (!separator) {
			updates.separator = ' | ';
		}

		// Initialize status texts
		if (!openStatusText) {
			updates.openStatusText = 'Open';
		}
		if (!closedStatusText) {
			updates.closedStatusText = 'Closed';
		}

		// Initialize time texts
		if (!beforeTimeText) {
			updates.beforeTimeText = 'Office will start at';
		}
		if (!afterTimeText) {
			updates.afterTimeText = 'Office will close at';
		}

		if (Object.keys(updates).length > 0) {
			setAttributes(updates);
		}
	}, []);

	// Helper functions
	const getWeekdayName = useCallback((dayNumber) => {
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
	}, []);

	const getAutoTimezone = useCallback(() => {
		try { return Intl.DateTimeFormat().resolvedOptions().timeZone; } 
		catch (error) { return 'Asia/Dhaka'; }
	}, []);

	// FIXED: Show timezone name when auto mode
	const getFormattedTimezone = useCallback((timezone) => {
		try {
			const now = new Date();
			
			if (useUTCTimezoneFormat) {
				// UTC format - show timezone name with offset
				const formatter = new Intl.DateTimeFormat('en-US', {
					timeZone: timezone,
					timeZoneName: 'longOffset'
				});
				const parts = formatter.formatToParts(now);
				const offsetPart = parts.find(part => part.type === 'timeZoneName');
				
				if (offsetPart && offsetPart.value.startsWith('GMT')) {
					const offset = offsetPart.value.replace('GMT', '').replace('UTC', '');
					const timezoneName = timezone.split('/').pop().replace(/_/g, ' ');
					return `${timezoneName} (UTC${offset})`;
				}
			} else {
				// GMT format (default) - show timezone name with offset
				const offset = now.toLocaleString('en-US', { 
					timeZone: timezone, 
					timeZoneName: 'shortOffset' 
				}).split(' ').pop();
				const timezoneName = timezone.split('/').pop().replace(/_/g, ' ');
				return `${timezoneName} (${offset})`;
			}
		} catch (error) {
			const timezoneName = timezone?.split('/').pop()?.replace(/_/g, ' ') || 'Local Time';
			return useUTCTimezoneFormat ? `${timezoneName} (UTC+06:00)` : `${timezoneName} (GMT+6)`;
		}
	}, [useUTCTimezoneFormat]);

	const getAllTimezones = useCallback(() => {
		try {
			const timezoneList = Intl.supportedValuesOf('timeZone');
			const options = timezoneList.map(tz => {
				try {
					const now = new Date();
					
					if (useUTCTimezoneFormat) {
						const formatter = new Intl.DateTimeFormat('en-US', {
							timeZone: tz,
							timeZoneName: 'longOffset'
						});
						const parts = formatter.formatToParts(now);
						const offsetPart = parts.find(part => part.type === 'timeZoneName');
						
						let offsetString = '';
						if (offsetPart && offsetPart.value.startsWith('GMT')) {
							offsetString = offsetPart.value.replace('GMT', '').replace('UTC', '');
						}
						
						const timezoneName = tz.split('/').map(part => part.replace(/_/g, ' ')).join(' - ');
						return { label: `${timezoneName} (UTC${offsetString})`, value: tz };
					} else {
						const offset = now.toLocaleString('en-US', { 
							timeZone: tz, 
							timeZoneName: 'shortOffset' 
						}).split(' ').pop();
						
						const timezoneName = tz.split('/').map(part => part.replace(/_/g, ' ')).join(' - ');
						return { label: `${timezoneName} (${offset})`, value: tz };
					}
				} catch (e) {
					const timezoneName = tz.split('/').map(part => part.replace(/_/g, ' ')).join(' - ');
					return { label: timezoneName, value: tz };
				}
			});
			return options.sort((a, b) => a.label.localeCompare(b.label));
		} catch (error) {
			const fallbackTimezones = [
				{ label: 'Asia - Dhaka (GMT+6)', value: 'Asia/Dhaka' }, 
				{ label: 'UTC (GMT+0)', value: 'UTC' },
				{ label: 'America - New York (GMT-5)', value: 'America/New_York' }, 
				{ label: 'America - Los Angeles (GMT-8)', value: 'America/Los_Angeles' },
				{ label: 'Europe - London (GMT+0)', value: 'Europe/London' }, 
				{ label: 'Asia - Kolkata (GMT+5:30)', value: 'Asia/Kolkata' },
				{ label: 'Asia - Singapore (GMT+8)', value: 'Asia/Singapore' }, 
				{ label: 'Asia - Tokyo (GMT+9)', value: 'Asia/Tokyo' }
			];
			
			if (useUTCTimezoneFormat) {
				return fallbackTimezones.map(tz => ({
					...tz,
					label: tz.label.replace(/GMT([+-]\d+(?::\d+)?)/g, (match, offset) => {
						if (offset.includes(':')) return `UTC${offset}`;
						const hours = parseInt(offset);
						return `UTC${offset}:00`;
					})
				})).sort((a, b) => a.label.localeCompare(b.label));
			}
			
			return fallbackTimezones.sort((a, b) => a.label.localeCompare(b.label));
		}
	}, [useUTCTimezoneFormat]);

	// Core business logic
	const getEffectiveTimezone = useCallback(() => {
		return timezoneMode === 'auto' ? getAutoTimezone() : timezone;
	}, [timezoneMode, timezone, getAutoTimezone]);

	const getCurrentTimeInTimezone = useCallback((timezoneToUse = null) => {
		const effectiveTimezone = timezoneToUse || getEffectiveTimezone();
		if (!effectiveTimezone) return '';
		try {
			return new Date().toLocaleTimeString('en-US', {
				timeZone: effectiveTimezone,
				hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
			});
		} catch (error) {
			return 'Time Unavailable';
		}
	}, [getEffectiveTimezone]);

	const getCurrentMonthSchedule = useCallback(() => {
		if (!useMonthlySchedule || !monthlySchedules || monthlySchedules.length === 0) return null;
		const currentMonth = new Date().getMonth().toString();
		return monthlySchedules.find(schedule => schedule.month === currentMonth);
	}, [useMonthlySchedule, monthlySchedules]);

	const getEffectiveOfficeHours = useCallback(() => {
		if (useMonthlySchedule) {
			const currentSchedule = getCurrentMonthSchedule();
			if (currentSchedule) return { startTime: currentSchedule.startTime, endTime: currentSchedule.endTime };
		}
		return { startTime, endTime };
	}, [useMonthlySchedule, getCurrentMonthSchedule, startTime, endTime]);

	// Calculate remaining time when open
	const getRemainingTime = useCallback(() => {
		const effectiveTimezone = getEffectiveTimezone();
		const effectiveHours = getEffectiveOfficeHours();
		const { endTime: effectiveEndTime } = effectiveHours;

		const isValidTime = (time) => {
			if (!time) return false;
			const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
			return timeRegex.test(time);
		};

		if (!effectiveTimezone || !isValidTime(effectiveEndTime)) {
			return '';
		}

		try {
			const now = new Date();
			const currentTimeStr = now.toLocaleTimeString('en-US', {
				timeZone: effectiveTimezone,
				hour: '2-digit', minute: '2-digit', hour12: false
			});

			const [currentHours, currentMinutes] = currentTimeStr.split(':').map(Number);
			const [endHours, endMinutes] = effectiveEndTime.split(':').map(Number);

			let currentTotal = currentHours * 60 + currentMinutes;
			let endTotal = endHours * 60 + endMinutes;

			if (endTotal < currentTotal) {
				endTotal += 24 * 60;
			}

			const remainingMinutes = endTotal - currentTotal;
			
			if (remainingMinutes <= 0) return '';

			const hours = Math.floor(remainingMinutes / 60);
			const minutes = remainingMinutes % 60;

			if (hours > 0 && minutes > 0) {
				return `${hours} hour${hours !== 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}`;
			} else if (hours > 0) {
				return `${hours} hour${hours !== 1 ? 's' : ''}`;
			} else {
				return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
			}
		} catch (error) {
			return '';
		}
	}, [getEffectiveTimezone, getEffectiveOfficeHours]);

	// Status calculation functions
	const isWeekendOrHoliday = useCallback((dayOfWeek, todayDate) => {
		const weekendDaysArray = weekendDays || [];
		if (weekendDaysArray.includes(dayOfWeek.toString())) return 'Weekend';
		if (holidays && holidays.includes(todayDate)) return 'Holiday';
		return null;
	}, [weekendDays, holidays]);

	const calculateTimeStatus = useCallback((currentTimeStr, startTime, endTime) => {
		const [currentHours, currentMinutes] = currentTimeStr.split(':').map(Number);
		const [startHours, startMinutes] = startTime.split(':').map(Number);
		const [endHours, endMinutes] = endTime.split(':').map(Number);

		let currentTotal = currentHours * 60 + currentMinutes;
		let startTotal = startHours * 60 + startMinutes;
		let endTotal = endHours * 60 + endMinutes;

		if (endTotal < startTotal) {
			endTotal += 24 * 60;
			if (currentTotal < startTotal) currentTotal += 24 * 60;
		}

		return currentTotal >= startTotal && currentTotal <= endTotal ? 'Open' : 'Closed';
	}, []);

	const getCurrentOfficeStatus = useCallback(() => {
		const effectiveTimezone = getEffectiveTimezone();
		if (!effectiveTimezone) return 'Closed';

		const effectiveHours = getEffectiveOfficeHours();
		const { startTime: effectiveStartTime, endTime: effectiveEndTime } = effectiveHours;
		
		const isValidTime = (time) => {
			if (!time) return false;
			const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
			return timeRegex.test(time);
		};

		if (!isValidTime(effectiveStartTime) || !isValidTime(effectiveEndTime)) {
			return 'Closed';
		}

		try {
			const now = new Date();
			const dayOfWeek = now.getDay();
			const todayDate = now.toISOString().split('T')[0];

			const closedReason = isWeekendOrHoliday(dayOfWeek, todayDate);
			if (closedReason) return closedReason;

			const currentTimeStr = now.toLocaleTimeString('en-US', {
				timeZone: effectiveTimezone, hour: '2-digit', minute: '2-digit', hour12: false
			});

			return calculateTimeStatus(currentTimeStr, effectiveStartTime, effectiveEndTime);
		} catch (error) {
			console.error('Error calculating office status:', error);
			return 'Closed';
		}
	}, [getEffectiveTimezone, getEffectiveOfficeHours, isWeekendOrHoliday, calculateTimeStatus]);

	// TimePicker Component
	const TimePickerField = useCallback(({ label, value, onChange }) => {
		const formatTimeForInput = (time) => {
			if (!time) return '09:00';
			if (time.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
				return time;
			}
			return '09:00';
		};

		const [timeValue, setTimeValue] = useState(formatTimeForInput(value));

		const handleTimeChange = (newValue) => {
			setTimeValue(newValue);
			if (newValue.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
				onChange(newValue);
			}
		};

		useEffect(() => {
			setTimeValue(formatTimeForInput(value));
		}, [value]);

		return (
			<BaseControl label={label}>
				<div style={{ display: 'grid', gap: '8px' }}>
					<TextControl
						type="time"
						value={timeValue}
						onChange={handleTimeChange}
						step="300"
					/>
				</div>
			</BaseControl>
		);
	}, []);

	// Action handlers
	const addHoliday = useCallback((date) => {
		if (!date) return;
		const holidayDate = new Date(date).toISOString().split('T')[0];
		if (holidays && holidays.includes(holidayDate)) return;
		const updatedHolidays = [...(holidays || []), holidayDate];
		setAttributes({ holidays: updatedHolidays });
		setSelectedDate('');
	}, [holidays, setAttributes]);

	const removeHoliday = useCallback((dateToRemove) => {
		const updatedHolidays = (holidays || []).filter(date => date !== dateToRemove);
		setAttributes({ holidays: updatedHolidays });
	}, [holidays, setAttributes]);

	const addMonthlySchedule = useCallback(() => {
		if (!selectedMonth) return;
		const existingMonth = (monthlySchedules || []).find(schedule => schedule.month === selectedMonth);
		if (existingMonth) {
			alert('This month already has a schedule!');
			return;
		}
		const monthlySchedule = { month: selectedMonth, startTime: startTime || '09:00', endTime: endTime || '17:00' };
		const updatedSchedules = [...(monthlySchedules || []), monthlySchedule];
		setAttributes({ monthlySchedules: updatedSchedules });
		setSelectedMonth('');
	}, [selectedMonth, monthlySchedules, startTime, endTime, setAttributes]);

	const removeMonthlySchedule = useCallback((monthToRemove) => {
		const updatedSchedules = (monthlySchedules || []).filter(schedule => schedule.month !== monthToRemove);
		setAttributes({ monthlySchedules: updatedSchedules });
	}, [monthlySchedules, setAttributes]);

	const updateMonthlySchedule = useCallback((month, field, value) => {
		const updatedSchedules = (monthlySchedules || []).map(schedule => 
			schedule.month === month ? { ...schedule, [field]: value } : schedule
		);
		setAttributes({ monthlySchedules: updatedSchedules });
	}, [monthlySchedules, setAttributes]);

	// Helper function for Select2
	const getSelectedOption = useCallback((options, value) => {
		return options?.find(opt => opt.value === value) || null;
	}, []);

	// Update current time and status
	useEffect(() => {
		const updateTimeAndStatus = () => {
			setCurrentTime(getCurrentTimeInTimezone());
			const currentStatus = getCurrentOfficeStatus();
			setAttributes({ officeStatus: currentStatus });
		};

		updateTimeAndStatus();
		const interval = setInterval(updateTimeAndStatus, 1000);
		return () => clearInterval(interval);
	}, [getCurrentTimeInTimezone, getCurrentOfficeStatus, setAttributes]);

	// Update timezones when UTC format changes
	useEffect(() => {
		if (timezones && timezones.length > 0) {
			const updatedTimezones = getAllTimezones();
			setAttributes({ timezones: updatedTimezones });
		}
	}, [useUTCTimezoneFormat, getAllTimezones, setAttributes]);

	// Calculated values
	const remainingTime = getRemainingTime();
	const currentStatus = getCurrentOfficeStatus();
	const effectiveTimezone = getEffectiveTimezone();
	const displayTimezone = timezoneMode === 'auto' ? getFormattedTimezone(getAutoTimezone()) : getFormattedTimezone(timezone);

	// Month options for React Select
	const monthOptions = useMemo(() => [
		{ label: 'January', value: '0' }, { label: 'February', value: '1' }, { label: 'March', value: '2' },
		{ label: 'April', value: '3' }, { label: 'May', value: '4' }, { label: 'June', value: '5' },
		{ label: 'July', value: '6' }, { label: 'August', value: '7' }, { label: 'September', value: '8' },
		{ label: 'October', value: '9' }, { label: 'November', value: '10' }, { label: 'December', value: '11' }
	], []);

	return (
		<>
			<InspectorControls key="controls">
				<div className="fb-inspector-control">
					<TabPanel
						className="fb-parent-tab-panel"
						activeClass="active-tab"
						tabs={[
							{ name: "general", title: "General", className: "fb-tab general" },
							{ name: "styles", title: "Style", className: "fb-tab styles" },
							{ name: "advanced", title: "Advanced", className: "fb-tab advance" },
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls " + tab.name}>
								{tab.name === 'general' && (
									<>
										{/* Location & Basic Settings */}
										<PanelBody title="Location & Basic Settings" initialOpen={true}>
											<TextControl
												label="Location Name"
												value={location || ''}
												onChange={(value) => setAttributes({ location: value })}
												placeholder="e.g., Dhaka, Bangladesh"
											/>

											<TextControl
												label="Separator"
												value={separator || ''}
												onChange={(value) => setAttributes({ separator: value })}
												placeholder="e.g., | , - , • , etc."
											/>

											<BaseControl label="Timezone Setting">
												<SelectControl
													options={TIMEZONE}
													value={timezoneMode}
													onChange={(value) => setAttributes({ timezoneMode: value })}
												/>
											</BaseControl>
											
											{timezoneMode === 'auto' ? (
												<TextControl 
													label="Current Timezone" 
													value={displayTimezone || 'Detecting...'} 
													readOnly 
												/>
											) : (
												<BaseControl label="Select Timezone">
													<Select2
														options={timezones || []}
														value={getSelectedOption(timezones, timezone)}
														onChange={(opt) => setAttributes({ timezone: opt?.value })}
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
												/>
											)}

											<TextControl
												label="Current Status"
												value={currentStatus}
												readOnly
											/>
										</PanelBody>

										{/* Status Text Settings */}
										<PanelBody title="Status Text Settings" initialOpen={true}>
											<TextControl
												label="Open Status Text"
												value={openStatusText || ''}
												onChange={(value) => setAttributes({ openStatusText: value })}
												placeholder="e.g., Open, Available, etc."
											/>
											
											<TextControl
												label="Closed Status Text"
												value={closedStatusText || ''}
												onChange={(value) => setAttributes({ closedStatusText: value })}
												placeholder="e.g., Closed, Unavailable, etc."
											/>
										</PanelBody>

										{/* Time Text Settings */}
										<PanelBody title="Time Display Text" initialOpen={true}>
											<TextControl
												label="Before Time Text"
												value={beforeTimeText || ''}
												onChange={(value) => setAttributes({ beforeTimeText: value })}
												placeholder="e.g., Office will start at, Opens at, etc."
											/>
											
											<TextControl
												label="After Time Text"
												value={afterTimeText || ''}
												onChange={(value) => setAttributes({ afterTimeText: value })}
												placeholder="e.g., Office will close at, Closes at, etc."
											/>
										</PanelBody>

										{/* Office Hours Schedule */}
										<PanelBody title="Office Hours Schedule" initialOpen={true}>
											<BaseControl>
												<ToggleControl
													label="Use Monthly Schedule"
													checked={!!useMonthlySchedule}
													onChange={(value) => setAttributes({ useMonthlySchedule: value })}
												/>
											</BaseControl>

											{!useMonthlySchedule && (
												<>
													<TimePickerField
														label="Start Time"
														value={startTime}
														onChange={(value) => setAttributes({ startTime: value })}
													/>
													<TimePickerField
														label="End Time"
														value={endTime}
														onChange={(value) => setAttributes({ endTime: value })}
													/>
												</>
											)}
										</PanelBody>

										{/* Monthly Schedule */}
										{useMonthlySchedule && (
											<PanelBody title="Monthly Schedule" initialOpen={true}>
												<div style={{ marginBottom: '15px', padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
													<BaseControl label="Add Month Schedule">
														<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
															<div style={{ flex: 1 }}>
																<Select2
																	options={[{ label: 'Choose Month', value: '' }, ...monthOptions]}
																	value={getSelectedOption([{ label: 'Choose Month', value: '' }, ...monthOptions], selectedMonth)}
																	onChange={(opt) => setSelectedMonth(opt?.value || '')}
																	isClearable={false}
																	className="fb-select2-control"
																/>
															</div>
															<Button onClick={addMonthlySchedule} disabled={!selectedMonth}>
																Add Schedule
															</Button>
														</div>
													</BaseControl>
												</div>
												{monthlySchedules && monthlySchedules.length > 0 ? (
													<div>
														<strong>Monthly Schedules ({monthlySchedules.length}/12):</strong>
														<div style={{ marginTop: '10px', borderRadius: '4px' }}>
															{monthlySchedules.map(schedule => (
																<div key={schedule.month} style={{ padding: '4px', margin: '5px 0', border: '1px solid #e0e0e0', backgroundColor: '#fff' }}>
																	<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
																		<strong style={{ fontSize: '1em', color: '#1e1e1e' }}>
																			{monthOptions.find(m => m.value === schedule.month)?.label}
																		</strong>
																		<Button isDestructive onClick={() => removeMonthlySchedule(schedule.month)}>
																			Remove
																		</Button>
																	</div>
																	<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
																		<BaseControl label="Start Time">
																			<TimePickerField
																				value={schedule.startTime}
																				onChange={(value) => updateMonthlySchedule(schedule.month, 'startTime', value)}
																			/>
																		</BaseControl>
																		<BaseControl label="End Time">
																			<TimePickerField
																				value={schedule.endTime}
																				onChange={(value) => updateMonthlySchedule(schedule.month, 'endTime', value)}
																			/>
																		</BaseControl>
																	</div>
																</div>
															))}
														</div>
													</div>
												) : (
													<div style={{ padding: '30px 20px', textAlign: 'center', border: '2px dashed #ddd', borderRadius: '4px', backgroundColor: 'rgb(248, 249, 250)' }}>
														<p style={{ marginBottom: '10px' }}>No monthly schedules added yet</p>
														<p style={{ fontSize: '0.9em', color: '#666' }}>Add months above to set custom hours for each month</p>
													</div>
												)}
											</PanelBody>
										)}

										{/* Weekend Settings */}
										<PanelBody title="Weekend Days" initialOpen={false}>
											<BaseControl label="Select Weekend Days">
												<Select2
													options={WEEKENDDAY}
													value={weekendDays ? weekendDays.map(day => ({ label: getWeekdayName(day), value: day })) : []}
													onChange={(selectedOptions) => {
														const daysArray = Array.isArray(selectedOptions) ? selectedOptions.map(opt => opt.value) : [];
														setAttributes({ weekendDays: daysArray });
													}}
													isMulti={true}
													isClearable={true}
													className="fb-select2-control"
												/>
											</BaseControl>
										</PanelBody>

										{/* Holiday Settings */}
										<PanelBody title="Holidays" initialOpen={false}>
											<BaseControl label="Add Holiday Date">
												<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
													<DatePicker 
														currentDate={selectedDate} 
														onChange={setSelectedDate}
														__nextRemoveHelpButton
														__nextRemoveResetButton
													/>
													<Button onClick={() => addHoliday(selectedDate)} disabled={!selectedDate}>
														Add Holiday
													</Button>
												</div>
											</BaseControl>

											{holidays && holidays.length > 0 && (
												<div style={{ marginTop: '15px' }}>
													<strong>Holidays ({holidays.length}):</strong>
													<div style={{ maxHeight: '150px', overflowY: 'auto', marginTop: '10px', border: '1px solid #ddd', padding: '10px', borderRadius: '4px' }}>
														{holidays.map(holiday => (
															<div key={holiday} style={{ 
																display: 'flex', 
																justifyContent: 'space-between', 
																alignItems: 'center', 
																padding: '8px',
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

										{/* Custom Messages */}
										<PanelBody title="Custom Messages" initialOpen={false}>
											<TextareaControl
												label="Closed Message"
												value={closedMessage || ''}
												onChange={(value) => setAttributes({ closedMessage: value })}
												placeholder="Office is closed"
												help="This message shows when office is closed during working hours"
											/>
											
											<TextareaControl
												label="Open Message"
												value={completionMessage || ''}
												onChange={(value) => setAttributes({ completionMessage: value })}
												placeholder="Office is open"
												help="This message shows when office is open"
											/>
											
											<TextareaControl
												label="Weekend Message"
												value={weekendMessage || ''}
												onChange={(value) => setAttributes({ weekendMessage: value })}
												placeholder="Closed for weekend"
												help="This message shows when office is closed for weekend"
											/>
											
											<TextareaControl
												label="Holiday Message"
												value={holidayMessage || ''}
												onChange={(value) => setAttributes({ holidayMessage: value })}
												placeholder="Closed for holiday"
												help="This message shows when office is closed for holiday"
											/>
										</PanelBody>
									</>
								)}

								{tab.name === 'styles' && (
									<>
										{/* Style settings will go here */}
										<PanelBody title="Style Settings" initialOpen={true}>
											<p>Style settings will be implemented here.</p>
										</PanelBody>
									</>
								)}

								{tab.name === 'advanced' && (
									<>
										{/* Advanced Settings */}
										<PanelBody title="Advanced Settings" initialOpen={true}>
											<BaseControl>
												<ToggleControl
													label="Use UTC Timezone Format"
													checked={!!useUTCTimezoneFormat}
													onChange={(value) => setAttributes({ useUTCTimezoneFormat: value })}
												/>
											</BaseControl>
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