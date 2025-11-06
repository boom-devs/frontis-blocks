import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Save({ attributes }) {
	const {
		location,
		timezone,
		officeHours,
		officeStatus,
		closedMessage,
		completionMessage,
		timezoneMode,
		useUTCTimezoneFormat,
		startTime,
		endTime,
		useMonthlySchedule,
		monthlySchedules,
		weekendDays,
		holidays
	} = attributes;

	// Helper function to format timezone display
	const getFormattedTimezone = (timezone) => {
		if (!timezone) return '(UTC+6) Dhaka';
		
		try {
			const now = new Date();
			
			if (useUTCTimezoneFormat) {
				// UTC format
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

	// Calculate if office is currently open
	const getCurrentOfficeStatus = () => {
		const effectiveTimezone = timezoneMode === 'auto' ? 
			Intl.DateTimeFormat().resolvedOptions().timeZone : timezone;
		
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

			// Check weekend
			const weekendDaysArray = weekendDays || [];
			if (weekendDaysArray.includes(dayOfWeek.toString())) return 'Weekend';

			// Check holidays
			if (holidays && holidays.includes(todayDate)) return 'Holiday';

			// Check time
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

			return currentTotal >= startTotal && currentTotal <= endTotal ? 'Open' : 'Closed';
		} catch (error) {
			return 'Closed';
		}
	};

	// Calculate remaining time when open
	const getRemainingTime = () => {
		const effectiveTimezone = timezoneMode === 'auto' ? 
			Intl.DateTimeFormat().resolvedOptions().timeZone : timezone;
		
		const effectiveHours = getEffectiveOfficeHours();
		const { endTime: effectiveEndTime } = effectiveHours;

		// Validate time format
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

	// Format messages with dynamic values
	const formatClosedMessage = () => {
		if (!closedMessage) return 'Office is closed. Opens at {startTime}';
		
		const effectiveHours = getEffectiveOfficeHours();
		const startTimeDisplay = formatTimeForDisplay(effectiveHours.startTime);
		
		if (!startTimeDisplay) {
			return closedMessage.replace('{startTime}', '--:-- --');
		}
		
		return closedMessage.replace('{startTime}', startTimeDisplay);
	};

	const formatCompletionMessage = () => {
		if (!completionMessage) return 'Office will be finished at {totalTime}';
		
		const effectiveHours = getEffectiveOfficeHours();
		const endTimeDisplay = formatTimeForDisplay(effectiveHours.endTime);
		const remainingTime = getRemainingTime();
		
		// Calculate total duration
		const calculateDuration = () => {
			const { startTime: effectiveStartTime, endTime: effectiveEndTime } = getEffectiveOfficeHours();
			
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
		};

		const displayDuration = calculateDuration();
		const displayEndTime = endTimeDisplay || '--:-- --';
		const displayRemainingTime = remainingTime || '--';
		
		return completionMessage
			.replace('{totalTime}', displayDuration)
			.replace('{endTime}', displayEndTime)
			.replace('{remainingTime}', displayRemainingTime);
	};

	// Get current time in timezone for frontend display
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

	// Get display values
	const displayLocation = location || 'Dhaka, Bangladesh';
	const displayTimezone = timezoneMode === 'auto' ? 
		getFormattedTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone) : 
		getFormattedTimezone(timezone);
	const currentTime = getCurrentTimeInTimezone();
	const currentStatus = getCurrentOfficeStatus();
	const isOpen = currentStatus === 'Open';
	const closedMessageDisplay = formatClosedMessage();
	const completionMessageDisplay = formatCompletionMessage();

	return (
		<div {...useBlockProps.save()}>
			<div className='fb-timezone-container'>
				<div className='fb-timezone-wrapper'>
					<div className='fb-timezone-current-time'>
						<span>{displayLocation} | </span>
						<span>{currentTime} </span>
						<span>{displayTimezone}</span>
					</div>
				</div>
				<div className='fb-timezone-status'>
					<div className='fb-timezone-status-wrapper'>
						{isOpen ? (
							<div className="fb-time-pulse-open">
								<span>Open</span>
							</div>
						) : (
							<div className="fb-time-pulse-close">
								<span>Closed</span>
							</div>
						)}
						
						<div className='fb-timezone-status-text'>
							{!isOpen && (
								<span>{closedMessageDisplay}</span>
							)}
							{isOpen && (
								<span>{completionMessageDisplay}</span>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}