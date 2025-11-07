import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		location,
		timezone,
		officeStatus,
		closedMessage,
		completionMessage,
		weekendMessage,
		holidayMessage,
		timezoneMode,
		useUTCTimezoneFormat,
		startTime,
		endTime,
		useMonthlySchedule,
		monthlySchedules,
		weekendDays,
		holidays,
		separator,
		openStatusText,
		closedStatusText,
		beforeTimeText,
		afterTimeText
	} = attributes;

	// Helper function to format timezone display (with timezone name)
	const getFormattedTimezone = (timezone) => {
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
	};

	// Get effective office hours based on monthly schedule
	const getEffectiveOfficeHours = () => {
		if (useMonthlySchedule && monthlySchedules && monthlySchedules.length > 0) {
			const currentMonth = new Date().getMonth().toString();
			const currentSchedule = monthlySchedules.find(schedule => schedule.month === currentMonth);
			if (currentSchedule) {
				return { startTime: currentSchedule.startTime, endTime: currentSchedule.endTime };
			}
		}
		return { startTime, endTime };
	};

	// Calculate remaining time when open
	const getRemainingTime = () => {
		const effectiveTimezone = timezoneMode === 'auto' ? 
			Intl.DateTimeFormat().resolvedOptions().timeZone : timezone;
		
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
	};

	// Get current time in timezone
	const getCurrentTimeInTimezone = () => {
		const effectiveTimezone = timezoneMode === 'auto' ? 
			Intl.DateTimeFormat().resolvedOptions().timeZone : timezone;
		
		if (!effectiveTimezone) return 'Loading...';
		
		try {
			return new Date().toLocaleTimeString('en-US', {
				timeZone: effectiveTimezone,
				hour: '2-digit', minute: '2-digit', hour12: true
			});
		} catch (error) {
			return 'Time Unavailable';
		}
	};

	// Format time for display
	const formatTimeForDisplay = (time) => {
		if (!time) return '';
		const [hours, minutes] = time.split(':').map(Number);
		if (isNaN(hours) || isNaN(minutes)) return '';
		const period = hours >= 12 ? 'PM' : 'AM';
		const displayHours = hours % 12 || 12;
		return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
	};

	// Get next weekday name
	const getNextWeekdayName = () => {
		const now = new Date();
		let nextDay = new Date(now);
		nextDay.setDate(now.getDate() + 1);
		
		// Skip weekends
		const weekendDaysArray = weekendDays || [];
		while (weekendDaysArray.includes(nextDay.getDay().toString())) {
			nextDay.setDate(nextDay.getDate() + 1);
		}
		
		return nextDay.toLocaleDateString('en-US', { weekday: 'long' });
	};

	// Get next date after holiday
	const getNextDateAfterHoliday = () => {
		const now = new Date();
		let nextDay = new Date(now);
		nextDay.setDate(now.getDate() + 1);
		
		// Skip weekends and holidays
		const weekendDaysArray = weekendDays || [];
		while (weekendDaysArray.includes(nextDay.getDay().toString()) || 
			   holidays?.includes(nextDay.toISOString().split('T')[0])) {
			nextDay.setDate(nextDay.getDate() + 1);
		}
		
		return nextDay.toLocaleDateString('en-US', { 
			weekday: 'long',
			month: 'long',
			day: 'numeric'
		});
	};

	// Get display message with dynamic time and date
	const getDisplayMessage = () => {
		const effectiveTimezone = timezoneMode === 'auto' ? 
			Intl.DateTimeFormat().resolvedOptions().timeZone : timezone;
		
		if (!effectiveTimezone) return closedMessage || 'Office is closed';

		try {
			const now = new Date();
			const dayOfWeek = now.getDay();
			const todayDate = now.toISOString().split('T')[0];

			// Check weekend
			const weekendDaysArray = weekendDays || [];
			if (weekendDaysArray.includes(dayOfWeek.toString())) {
				const nextWeekday = getNextWeekdayName();
				const startTimeDisplay = formatTimeForDisplay(getEffectiveOfficeHours().startTime);
				return `${weekendMessage || 'Closed for weekend'}. ${beforeTimeText || 'Office will start at'} ${startTimeDisplay}, ${nextWeekday}`;
			}

			// Check holidays
			if (holidays && holidays.includes(todayDate)) {
				const nextDate = getNextDateAfterHoliday();
				const startTimeDisplay = formatTimeForDisplay(getEffectiveOfficeHours().startTime);
				return `${holidayMessage || 'Closed for holiday'}. ${beforeTimeText || 'Office will start at'} ${startTimeDisplay}, ${nextDate}`;
			}

			// Check time
			const effectiveHours = getEffectiveOfficeHours();
			const { startTime: effectiveStartTime, endTime: effectiveEndTime } = effectiveHours;
			
			const isValidTime = (time) => {
				if (!time) return false;
				const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
				return timeRegex.test(time);
			};

			if (!isValidTime(effectiveStartTime) || !isValidTime(effectiveEndTime)) {
				return closedMessage || 'Office is closed';
			}

			const currentTimeStr = now.toLocaleTimeString('en-US', {
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

			if (endTotal < startTotal) {
				endTotal += 24 * 60;
				if (currentTotal < startTotal) currentTotal += 24 * 60;
			}

			const isOpen = currentTotal >= startTotal && currentTotal <= endTotal;
			const remainingTime = getRemainingTime();
			const startTimeDisplay = formatTimeForDisplay(effectiveStartTime);
			const endTimeDisplay = formatTimeForDisplay(effectiveEndTime);
			
			if (isOpen) {
				return `${completionMessage || 'Office is open'}. ${afterTimeText || 'Office will close at'} ${endTimeDisplay}, Remaining time: ${remainingTime}`;
			} else {
				const nextDay = new Date(now);
				nextDay.setDate(now.getDate() + 1);
				const nextDate = nextDay.toLocaleDateString('en-US', { 
					weekday: 'long',
					month: 'long',
					day: 'numeric'
				});
				return `${closedMessage || 'Office is closed'}. ${beforeTimeText || 'Office will start at'} ${startTimeDisplay}, ${nextDate}, Remaining time: ${remainingTime}`;
			}
		} catch (error) {
			return closedMessage || 'Office is closed';
		}
	};

	// Get display values
	const displayLocation = location || 'Set Location Manually';
	const displayTimezone = timezoneMode === 'auto' ? 
		getFormattedTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone) : 
		getFormattedTimezone(timezone);
	const currentTime = getCurrentTimeInTimezone();
	const isOpen = officeStatus === 'Open';
	const displayMessage = getDisplayMessage();
	const displaySeparator = separator || ' | ';

	// Determine status display
	const getStatusDisplay = () => {
		return {
			text: isOpen ? (openStatusText || 'Open') : (closedStatusText || 'Closed'),
			type: isOpen ? 'open' : 'closed'
		};
	};

	const statusDisplay = getStatusDisplay();

	return (
		<>
			<Inspector 
				attributes={attributes} 
				setAttributes={setAttributes} 
				clientId={clientId} 
			/>
			<div {...useBlockProps()}>
				<div className='fb-timezone-container'>
					<div className='fb-timezone-wrapper'>
						<div className='fb-timezone-current-time'>
							<span>{displayLocation}</span>
							<span>{displaySeparator}</span>
							<span>{currentTime} </span>
							<span>{displayTimezone}</span>
						</div>
					</div>
					<div className='fb-timezone-status'>
						<div className='fb-timezone-status-wrapper'>
							<div className={statusDisplay.type === 'open' ? "fb-time-pulse-open" : "fb-time-pulse-close"}>
								<span>{statusDisplay.text}</span>
							</div>
							
							<div className='fb-timezone-status-text'>
								<span>{displayMessage}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}