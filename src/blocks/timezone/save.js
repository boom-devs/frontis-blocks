import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Save({ attributes }) {
	const {
		blockID,
		location,
		timezone,
		timeFormat,
		timezoneMode,
		useUTCTimezoneFormat,
		startTime,
		endTime,
		useMonthlySchedule,
		monthlySchedules,
		weekendDays,
		holidays,
		separator,
		showSeparatorSwitcher,
		openStatusText,
		closedStatusText,
		beforeTimeText,
		afterTimeText,
		timezoneGlobalWraperID,
		timezoneGlobalWraperClass,
		timezoneDesktopSwitcher,
		timezoneTabletSwitcher,
		timezoneMobileSwitcher,
		showStatusSwitcher
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `frontis-block fb-timezone-main-wrapper ${blockID} ${timezoneDesktopSwitcher && 'fb-desktop-responsive'} ${timezoneTabletSwitcher && 'fb-tablet-responsive'} ${timezoneMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	// Helper function to format timezone display (only offset)
	const getFormattedTimezone = (timezoneToFormat) => {
		try {
			const now = new Date();
			if (useUTCTimezoneFormat) {
				const formatter = new Intl.DateTimeFormat('en-US', {
					timeZone: timezoneToFormat,
					timeZoneName: 'longOffset'
				});
				const parts = formatter.formatToParts(now);
				const offsetPart = parts.find(part => part.type === 'timeZoneName');
				if (offsetPart && offsetPart.value.startsWith('GMT')) {
					const offset = offsetPart.value.replace('GMT', '').replace('UTC', '');
					return `(UTC${offset})`;
				}
			} else {
				const offset = now.toLocaleString('en-US', { 
					timeZone: timezoneToFormat, 
					timeZoneName: 'shortOffset' 
				}).split(' ').pop();
				return `(${offset})`;
			}
		} catch (error) {
			return useUTCTimezoneFormat ? '(UTC+06:00)' : '(GMT+6)';
		}
	};

	// Get effective timezone
	const getEffectiveTimezone = () => {
		return timezoneMode === 'auto' ? Intl.DateTimeFormat().resolvedOptions().timeZone : timezone;
	};

	// Get current time in timezone
	const getCurrentTimeInTimezone = () => {
		const effectiveTimezone = getEffectiveTimezone();
		if (!effectiveTimezone) return '';
		try {
			return new Date().toLocaleTimeString('en-US', {
				timeZone: effectiveTimezone,
				hour: '2-digit', minute: '2-digit', hour12: true
			});
		} catch (error) {
			return 'Time Unavailable';
		}
	};

	// Monthly schedule hours
	const getEffectiveOfficeHours = () => {
		if (useMonthlySchedule && monthlySchedules?.length > 0) {
			const currentMonth = new Date().getMonth().toString();
			const currentSchedule = monthlySchedules.find(schedule => schedule.month === currentMonth);
			if (currentSchedule) {
				return { startTime: currentSchedule.startTime, endTime: currentSchedule.endTime };
			}
		}
		return { startTime, endTime };
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

	// Remaining time calculation
	const getRemainingTime = () => {
		const effectiveTimezone = getEffectiveTimezone();
		const { endTime: effectiveEndTime } = getEffectiveOfficeHours();
		
		if (!effectiveTimezone || !effectiveEndTime) return '';

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

	// Weekend/Holiday check
	const isWeekendOrHoliday = (dayOfWeek, todayDate) => {
		const weekendDaysArray = weekendDays || [];
		if (weekendDaysArray.includes(dayOfWeek.toString())) return 'Weekend';
		if (holidays && holidays.includes(todayDate)) return 'Holiday';
		return null;
	};

	// Time status calculation
	const calculateTimeStatus = (currentTimeStr, startTime, endTime) => {
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
	};

	// Get next weekday after weekend
	const getNextWeekdayName = () => {
		const now = new Date();
		let next = new Date(now);
		const weekends = weekendDays || [];
		do {
			next.setDate(next.getDate() + 1);
		} while (weekends.includes(next.getDay().toString()));
		return next.toLocaleDateString('en-US', { weekday: 'long' });
	};

	// Get next date after holiday
	const getNextDateAfterHoliday = () => {
		const now = new Date();
		let next = new Date(now);
		const weekends = weekendDays || [];
		const holidaysArr = holidays || [];
		do {
			next.setDate(next.getDate() + 1);
		} while (
			weekends.includes(next.getDay().toString()) || 
			holidaysArr.includes(next.toISOString().split('T')[0])
		);
		return next.toLocaleDateString('en-US', { 
			weekday: 'long', 
			month: 'long', 
			day: 'numeric' 
		});
	};

	// Get current office status
	const getCurrentOfficeStatus = () => {
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
				timeZone: effectiveTimezone, 
				hour: '2-digit', 
				minute: '2-digit', 
				hour12: false
			});

			return calculateTimeStatus(currentTimeStr, effectiveStartTime, effectiveEndTime);
		} catch (error) {
			return 'Closed';
		}
	};

	// Main dynamic message
	const getDisplayMessage = () => {
		try {
			const effectiveTimezone = getEffectiveTimezone();
			const now = new Date();
			const dayOfWeek = now.getDay();
			const todayDate = now.toISOString().split('T')[0];
			const weekends = weekendDays || [];
			const holidaysArr = holidays || [];

			// Check for weekend
			if (weekends.includes(dayOfWeek.toString())) {
				const nextWeekday = getNextWeekdayName();
				return `Weekend. ${beforeTimeText || 'Will start at'} ${formatTimeForDisplay(getEffectiveOfficeHours().startTime)}, ${nextWeekday}`;
			}

			// Check for holiday
			if (holidaysArr.includes(todayDate)) {
				const nextDate = getNextDateAfterHoliday();
				return `Holiday. ${beforeTimeText || 'Will start at'} ${formatTimeForDisplay(getEffectiveOfficeHours().startTime)}, ${nextDate}`;
			}

			// Regular office hours check
			const effectiveHours = getEffectiveOfficeHours();
			const { startTime: effectiveStartTime, endTime: effectiveEndTime } = effectiveHours;
			
			const currentTimeStr = now.toLocaleTimeString('en-US', { 
				timeZone: effectiveTimezone, 
				hour: '2-digit', 
				minute: '2-digit', 
				hour12: false 
			});
			
			const status = calculateTimeStatus(currentTimeStr, effectiveStartTime, effectiveEndTime);
			const remaining = getRemainingTime();
			
			if (status === 'Open') {
				return `${afterTimeText || 'Will close at'} ${formatTimeForDisplay(effectiveEndTime)}, Left: ${remaining}`;
			} else {
				return `${beforeTimeText || 'Will start at'} ${formatTimeForDisplay(effectiveStartTime)}, Left: ${remaining}`;
			}
		} catch (error) {
			return 'Not Found';
		}
	};

	// Calculate current values for static output
	const displayLocation = location || 'Set Location Manually';
	const effectiveTimezone = getEffectiveTimezone();
	const displayTimezone = timezoneMode === 'auto' ? 
		getFormattedTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone) : 
		getFormattedTimezone(timezone);
	
	const currentTime = getCurrentTimeInTimezone();
	const displaySeparator = separator || ' | ';
	const currentStatus = getCurrentOfficeStatus();
	const statusType = currentStatus === 'Open' ? 'open' : 'closed';
	const statusText = currentStatus === 'Open' ? 
		(openStatusText || 'Open') : 
		(closedStatusText || 'Closed');
	const displayMessage = getDisplayMessage();

	return (
		<div {...blockProps}>
			<div className={`fb-timezone-container ${timezoneGlobalWraperClass}`} id={timezoneGlobalWraperID}>
				<div className='fb-timezone-wrapper'>
					<div className='fb-location-timezone'>
						<RichText.Content
							tagName="span"
							value={displayLocation}
							className="fb-location-name"
						/>
						{showSeparatorSwitcher && (
							<span className='fb-timezone-separator'>{displaySeparator}</span>
						)}
						<span className='fb-current-time'>{currentTime}</span>
						<span className='fb-current-timezone'>{displayTimezone}</span>
					</div>
				</div>
				{showStatusSwitcher && (
					<div className='fb-timezone-status-wrapper'>
						<div className='fb-timezone-status-info-box'>
							<div className={statusType === 'open' ? 'fb-time-pulse-open' : 'fb-time-pulse-close'}>
								<span className='fb-timezone-status'>{statusText}</span>
							</div>
							<div className='fb-timezone-status-info'>
								<span className='fb-timezone-info-noted'>
									{displayMessage}
								</span>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}