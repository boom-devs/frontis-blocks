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
	BaseControl
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
		useUTCTimezoneFormat
	} = attributes;

	// State variables
	const [selectedDate, setSelectedDate] = useState('');
	const [currentTime, setCurrentTime] = useState('');
	const [selectedMonth, setSelectedMonth] = useState('');
	const [holidayInput, setHolidayInput] = useState('');

	// Constants
	const monthOptions = useMemo(() => [
		{ label: 'January', value: '0' }, { label: 'February', value: '1' }, { label: 'March', value: '2' },
		{ label: 'April', value: '3' }, { label: 'May', value: '4' }, { label: 'June', value: '5' },
		{ label: 'July', value: '6' }, { label: 'August', value: '7' }, { label: 'September', value: '8' },
		{ label: 'October', value: '9' }, { label: 'November', value: '10' }, { label: 'December', value: '11' }
	], []);

	// Helper functions
	const getWeekdayName = useCallback((dayNumber) => {
		const days = { '0': 'Sunday', '1': 'Monday', '2': 'Tuesday', '3': 'Wednesday', '4': 'Thursday', '5': 'Friday', '6': 'Saturday' };
		return days[dayNumber] || '';
	}, []);

	const getAutoTimezone = useCallback(() => {
		try { return Intl.DateTimeFormat().resolvedOptions().timeZone; } 
		catch (error) { return 'Asia/Dhaka'; }
	}, []);

	// FIXED: UTC/GMT timezone format with proper offset calculation for each timezone
	const getFormattedTimezone = useCallback((timezone) => {
		try {
			const now = new Date();
			
			if (useUTCTimezoneFormat) {
				// UTC format - calculate offset for the specific timezone
				const formatter = new Intl.DateTimeFormat('en-US', {
					timeZone: timezone,
					timeZoneName: 'longOffset'
				});
				const parts = formatter.formatToParts(now);
				const offsetPart = parts.find(part => part.type === 'timeZoneName');
				
				if (offsetPart && offsetPart.value.startsWith('GMT')) {
					const offset = offsetPart.value.replace('GMT', '').replace('UTC', '');
					const cityName = timezone.split('/').pop().replace(/_/g, ' ');
					return `UTC${offset} ${cityName}`;
				}
				
				// Fallback calculation
				const offsetMinutes = new Date(now.toLocaleString('en-US', { timeZone: timezone })).getTimezoneOffset();
				const offsetHours = Math.abs(Math.floor(offsetMinutes / 60));
				const offsetMinutesRemainder = Math.abs(offsetMinutes % 60);
				const sign = offsetMinutes <= 0 ? '+' : '-';
				const offsetString = `${sign}${offsetHours.toString().padStart(2, '0')}:${offsetMinutesRemainder.toString().padStart(2, '0')}`;
				
				const cityName = timezone.split('/').pop().replace(/_/g, ' ');
				return `UTC${offsetString} ${cityName}`;
			} else {
				// GMT format (default)
				const offset = now.toLocaleString('en-US', { 
					timeZone: timezone, 
					timeZoneName: 'shortOffset' 
				}).split(' ').pop();
				
				const cityName = timezone.split('/').pop().replace(/_/g, ' ');
				return `(${offset}) ${cityName}`;
			}
		} catch (error) {
			return useUTCTimezoneFormat ? 'UTC+06:00 Dhaka' : '(UTC+6) Dhaka';
		}
	}, [useUTCTimezoneFormat]);

	// FIXED: Get all timezones with proper UTC/GMT format for each timezone
	const getAllTimezones = useCallback(() => {
		try {
			const timezoneList = Intl.supportedValuesOf('timeZone');
			const options = timezoneList.map(tz => {
				try {
					const now = new Date();
					
					if (useUTCTimezoneFormat) {
						// UTC format - calculate offset for each specific timezone
						const formatter = new Intl.DateTimeFormat('en-US', {
							timeZone: tz,
							timeZoneName: 'longOffset'
						});
						const parts = formatter.formatToParts(now);
						const offsetPart = parts.find(part => part.type === 'timeZoneName');
						
						let offsetString = '';
						if (offsetPart && offsetPart.value.startsWith('GMT')) {
							offsetString = offsetPart.value.replace('GMT', '').replace('UTC', '');
						} else {
							// Fallback calculation
							const offsetMinutes = new Date(now.toLocaleString('en-US', { timeZone: tz })).getTimezoneOffset();
							const offsetHours = Math.abs(Math.floor(offsetMinutes / 60));
							const offsetMinutesRemainder = Math.abs(offsetMinutes % 60);
							const sign = offsetMinutes <= 0 ? '+' : '-';
							offsetString = `${sign}${offsetHours.toString().padStart(2, '0')}:${offsetMinutesRemainder.toString().padStart(2, '0')}`;
						}
						
						const timezoneName = tz.split('/').map(part => part.replace(/_/g, ' ')).join(' - ');
						return { label: `${timezoneName} (UTC${offsetString})`, value: tz };
					} else {
						// GMT format (default)
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
				{ label: 'Asia - Dhaka (UTC+6)', value: 'Asia/Dhaka' }, 
				{ label: 'UTC (UTC+0)', value: 'UTC' },
				{ label: 'America - New York (UTC-5)', value: 'America/New_York' }, 
				{ label: 'America - Los Angeles (UTC-8)', value: 'America/Los_Angeles' },
				{ label: 'Europe - London (UTC+0)', value: 'Europe/London' }, 
				{ label: 'Asia - Kolkata (UTC+5:30)', value: 'Asia/Kolkata' },
				{ label: 'Asia - Singapore (UTC+8)', value: 'Asia/Singapore' }, 
				{ label: 'Asia - Tokyo (UTC+9)', value: 'Asia/Tokyo' }
			];
			
			// Apply UTC format if enabled
			if (useUTCTimezoneFormat) {
				return fallbackTimezones.map(tz => ({
					...tz,
					label: tz.label.replace(/UTC([+-]\d+(?::\d+)?)/g, (match, offset) => {
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

	// FIXED: Get office hours string with proper time validation
	const getOfficeHoursString = useCallback(() => {
		const effectiveHours = getEffectiveOfficeHours();
		const { startTime: effectiveStartTime, endTime: effectiveEndTime } = effectiveHours;
		
		// Validate time format to prevent NaN issues
		const isValidTime = (time) => {
			if (!time) return false;
			const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
			return timeRegex.test(time);
		};

		if (!isValidTime(effectiveStartTime) || !isValidTime(effectiveEndTime)) {
			return 'Set start and end time';
		}

		// Convert 24h to 12h format for display
		const formatTimeForDisplay = (time) => {
			if (!time || !isValidTime(time)) return '';
			const [hours, minutes] = time.split(':').map(Number);
			const period = hours >= 12 ? 'PM' : 'AM';
			const displayHours = hours % 12 || 12;
			return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
		};

		const startDisplay = formatTimeForDisplay(effectiveStartTime);
		const endDisplay = formatTimeForDisplay(effectiveEndTime);

		if (!startDisplay || !endDisplay) return 'Set start and end time';

		return `${startDisplay} - ${endDisplay}`;
	}, [getEffectiveOfficeHours]);

	// FIXED: Calculate total duration with proper validation
	const calculateDuration = useCallback(() => {
		const effectiveHours = getEffectiveOfficeHours();
		const { startTime: effectiveStartTime, endTime: effectiveEndTime } = effectiveHours;
		
		// Validate time format
		const isValidTime = (time) => {
			if (!time) return false;
			const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
			return timeRegex.test(time);
		};

		if (!isValidTime(effectiveStartTime) || !isValidTime(effectiveEndTime)) {
			return '0 hours';
		}

		const [startHours, startMinutes] = effectiveStartTime.split(':').map(Number);
		const [endHours, endMinutes] = effectiveEndTime.split(':').map(Number);

		let startTotal = startHours * 60 + startMinutes;
		let endTotal = endHours * 60 + endMinutes;

		if (endTotal < startTotal) endTotal += 24 * 60;
		const durationMinutes = endTotal - startTotal;
		
		const hours = Math.floor(durationMinutes / 60);
		const minutes = durationMinutes % 60;
		
		if (minutes === 0) {
			return `${hours} hour${hours !== 1 ? 's' : ''}`;
		} else {
			return `${hours} hour${hours !== 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}`;
		}
	}, [getEffectiveOfficeHours]);

	// FIXED: Calculate remaining time with proper validation
	const getRemainingTime = useCallback(() => {
		const effectiveTimezone = getEffectiveTimezone();
		const effectiveHours = getEffectiveOfficeHours();
		const { startTime: effectiveStartTime, endTime: effectiveEndTime } = effectiveHours;

		// Validate time format
		const isValidTime = (time) => {
			if (!time) return false;
			const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
			return timeRegex.test(time);
		};

		if (!effectiveTimezone || !isValidTime(effectiveStartTime) || !isValidTime(effectiveEndTime)) {
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

			// Handle overnight hours
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
		
		// Validate time format
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

	// FIXED: Custom TimePicker Component with proper validation
	const TimePickerField = useCallback(({ label, value, onChange }) => {
		// Validate and format time for input
		const formatTimeForInput = (time) => {
			if (!time) return '09:00';
			
			// If already in HH:mm format, return as is
			if (time.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
				return time;
			}
			
			// Convert from 12h to 24h format
			const timeMatch = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
			if (timeMatch) {
				let [_, hours, minutes, period] = timeMatch;
				hours = parseInt(hours);
				minutes = parseInt(minutes);
				
				if (period.toUpperCase() === 'PM' && hours < 12) {
					hours += 12;
				} else if (period.toUpperCase() === 'AM' && hours === 12) {
					hours = 0;
				}
				
				return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
			}
			
			return '09:00'; // Default fallback
		};

		const [timeValue, setTimeValue] = useState(formatTimeForInput(value));

		const handleTimeChange = (newValue) => {
			setTimeValue(newValue);
			// Only update if valid HH:mm format
			if (newValue.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
				onChange(newValue);
			}
		};

		const formatTimeForDisplay = (time) => {
			if (!time) return '';
			const [hours, minutes] = time.split(':').map(Number);
			const period = hours >= 12 ? 'PM' : 'AM';
			const displayHours = hours % 12 || 12;
			return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
		};

		// Update local state when prop changes
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
						step="300" // 5 minute steps
					/>
					{timeValue && (
						<div style={{ 
							padding: '6px 10px', 
							backgroundColor: '#f0f8ff', 
							borderRadius: '4px',
							border: '1px solid #b3d9ff',
							fontSize: '0.9em',
							textAlign: 'center'
						}}>
							<strong>Selected: </strong>
							{formatTimeForDisplay(timeValue)}
						</div>
					)}
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

	// Initialize attributes with proper default values
	useEffect(() => {
		const updates = {};
		
		if (!timezones || timezones.length === 0) {
			updates.timezones = getAllTimezones();
			updates.timezone = timezone || 'Asia/Dhaka';
			updates.timezoneMode = timezoneMode || 'auto';
		}

		// FIXED: Set proper default time values to prevent NaN issues
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

		// FIXED: Initialize message fields with proper placeholders
		if (!closedMessage) {
			updates.closedMessage = 'Office is closed. Opens at {startTime}';
		}

		if (!completionMessage) {
			updates.completionMessage = 'Office will be finished at {totalTime}';
		}

		// Initialize UTC format toggle
		if (useUTCTimezoneFormat === undefined) {
			updates.useUTCTimezoneFormat = false;
		}

		if (Object.keys(updates).length > 0) {
			setAttributes(updates);
		}
	}, []);

	// FIXED: Update office hours when time changes
	useEffect(() => {
		const updatedOfficeHours = getOfficeHoursString();
		if (officeHours !== updatedOfficeHours) {
			setAttributes({ officeHours: updatedOfficeHours });
		}
	}, [startTime, endTime, useMonthlySchedule, monthlySchedules, getOfficeHoursString]);

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
	const duration = calculateDuration();
	const remainingTime = getRemainingTime();
	const currentStatus = getCurrentOfficeStatus();
	const effectiveTimezone = getEffectiveTimezone();
	const displayTimezone = timezoneMode === 'auto' ? getFormattedTimezone(getAutoTimezone()) : getFormattedTimezone(timezone);
	const currentMonthSchedule = getCurrentMonthSchedule();

	// FIXED: Format messages with proper time validation
	const formatTimeForDisplay = useCallback((time) => {
		if (!time) return '';
		const [hours, minutes] = time.split(':').map(Number);
		// Validate hours and minutes to prevent NaN
		if (isNaN(hours) || isNaN(minutes)) return '';
		const period = hours >= 12 ? 'PM' : 'AM';
		const displayHours = hours % 12 || 12;
		return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
	}, []);

	const formatClosedMessage = useCallback(() => {
		if (!closedMessage) return 'Office is closed. Opens at {startTime}';
		
		const effectiveHours = getEffectiveOfficeHours();
		const startTimeDisplay = formatTimeForDisplay(effectiveHours.startTime);
		
		// If time is invalid, show placeholder text
		if (!startTimeDisplay) {
			return closedMessage.replace('{startTime}', '--:-- --');
		}
		
		return closedMessage.replace('{startTime}', startTimeDisplay);
	}, [closedMessage, getEffectiveOfficeHours, formatTimeForDisplay]);

	const formatCompletionMessage = useCallback(() => {
		if (!completionMessage) return 'Office will be finished at {totalTime}';
		
		const effectiveHours = getEffectiveOfficeHours();
		const endTimeDisplay = formatTimeForDisplay(effectiveHours.endTime);
		
		// If values are invalid, show appropriate placeholders
		const displayDuration = duration === '0 hours' ? '-- hours' : duration;
		const displayEndTime = endTimeDisplay || '--:-- --';
		const displayRemainingTime = remainingTime || '--';
		
		return completionMessage
			.replace('{totalTime}', displayDuration)
			.replace('{endTime}', displayEndTime)
			.replace('{remainingTime}', displayRemainingTime);
	}, [completionMessage, getEffectiveOfficeHours, formatTimeForDisplay, duration, remainingTime]);

	// UTC/GMT Toggle Component
	const TimezoneFormatToggle = useCallback(() => (
		<BaseControl>
			<ToggleControl
				label="Use UTC Format"
				checked={!!useUTCTimezoneFormat}
				onChange={(value) => setAttributes({ useUTCTimezoneFormat: value })}
			/>
		</BaseControl>
	), [useUTCTimezoneFormat, setAttributes]);

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
										{/* UTC/GMT Toggle Panel */}
										<PanelBody title="Timezone Format" initialOpen={false}>
											<TimezoneFormatToggle />
											<div style={{ 
												marginTop: '10px', 
												padding: '8px 12px', 
												backgroundColor: '#f0f8ff', 
												borderRadius: '4px',
												border: '1px solid #b3d9ff',
												fontSize: '0.9em'
											}}>
												<strong>Current Format: </strong>
												{useUTCTimezoneFormat ? 'UTC' : 'GMT'}
											</div>
										</PanelBody>

										{/* Location & Time Settings */}
										<PanelBody title="Location & Time Settings" initialOpen={true}>
											<TextControl
												label="Current Status"
												value={currentStatus}
												readOnly
											/>
											<TextControl
												label="Location"
												value={location || ''}
												onChange={(value) => setAttributes({ location: value })}
												placeholder="e.g., Dhaka Office, Bangladesh"
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
											<BaseControl>
												<ToggleControl
													label="Set Schedule Monthly"
													checked={!!useMonthlySchedule}
													onChange={(value) => setAttributes({ useMonthlySchedule: value })}
												/>
											</BaseControl>

											{/* Time Picker Fields */}
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

											<TextControl
												label="Operating Hours"
												value={officeHours || 'Set start and end time'}
												readOnly
											/>
										</PanelBody>

										{useMonthlySchedule && (
											<PanelBody title="Monthly Schedule" initialOpen={true}>
												<div style={{ marginBottom: '15px', padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
													<BaseControl label="Add Month">
														<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
															<div style={{ flex: 1 }}>
																<Select2
																	options={[{ label: 'Choose', value: '' }, ...monthOptions]}
																	value={getSelectedOption([{ label: 'Choose', value: '' }, ...monthOptions], selectedMonth)}
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

										{/* Common Settings */}
										<PanelBody title="Weekend Days" initialOpen={false}>
											<BaseControl label="Select Days">
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

										<PanelBody title="Set Manually Holidays" initialOpen={false}>
											<BaseControl label="Add Date">
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

											{/* Holiday List with Remove Buttons */}
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

										{/* Custom Messages Panel */}
										<PanelBody title="Custom Messages" initialOpen={false}>
											<div style={{ marginBottom: '20px' }}>
												<TextControl
													label="Closed Message"
													value={closedMessage || ''}
													onChange={(value) => setAttributes({ closedMessage: value })}
													placeholder="Office is closed. Opens at {startTime}"
												/>
												<div style={{ 
													display: 'flex',
													flexDirection: 'column',
													gap: '6px'
												}}>
													<div style={{ 
														padding: '6px', 
														backgroundColor: '#f8f9fa', 
														borderRadius: '4px',
														border: '1px solid #e9ecef',
														fontSize: '0.9em'
													}}>
														<strong>Preview: </strong>
														{formatClosedMessage()}
													</div>
													<TextControl
														label="Start Time"
														value={formatTimeForDisplay(startTime)}
														readOnly
													/>
												</div>
											</div>

											<div style={{ marginBottom: '20px' }}>
												<TextControl
													label="Completion Message"
													value={completionMessage || ''}
													onChange={(value) => setAttributes({ completionMessage: value })}
													placeholder="Office will be finished at {totalTime}"
												/>
												<div style={{ 
													display: 'flex',
													flexDirection: 'column',
													gap: '6px'
												}}>
													<div style={{ 
														padding: '8px 12px', 
														backgroundColor: '#f8f9fa', 
														borderRadius: '4px',
														border: '1px solid #e9ecef',
														fontSize: '0.9em'
													}}>
														<strong>Preview: </strong>
														{formatCompletionMessage()}
													</div>
													<TextControl
														label="Remaining Time"
														value={remainingTime || 'N/A'}
														readOnly
													/>
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
		</>
	);
}