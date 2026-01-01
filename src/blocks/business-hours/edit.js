import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useState, useEffect, useCallback, lazy, Suspense } from '@wordpress/element';
import './editor.scss';

const Inspector = lazy(() => import('./inspector'));

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		blockStyle,
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
		showStatusSwitcher,
		alignment,
		weekendMessage,
		holidayMessage,
		useCustomLocation,
		showTimezoneOffset,
		showRemainingTime,
		remainingTimeLabel,
		remainingTimeFormat
	} = attributes;

	// State for real-time updates
	const [currentTime, setCurrentTime] = useState('');
	const [displayMessage, setDisplayMessage] = useState('');
	const [currentStatus, setCurrentStatus] = useState('');

	const blockProps = useBlockProps({
		className: `frontis-block fb-timezone-main-wrapper ${blockID} ${
			timezoneDesktopSwitcher ? 'fb-desktop-responsive' : ''
		} ${timezoneTabletSwitcher ? 'fb-tablet-responsive' : ''} ${
			timezoneMobileSwitcher ? 'fb-mobile-responsive' : ''
			} ${alignment ? `align-${alignment}` : ''}`,
	});

	// Get timezone offset only
	const getTimezoneOffset = useCallback((timezoneToFormat) => {
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
			// Fallback with brackets
			return useUTCTimezoneFormat ? '(UTC+06:00)' : '(GMT+6)';
		}
		return '';
	}, [useUTCTimezoneFormat]);

	// Get timezone location name only (without offset)
	const getTimezoneLocationName = useCallback((timezoneToFormat) => {
		try {
			const getCountryFromTimezone = (tz) => {
				const countryMap = {
					'Asia/Dhaka': 'Bangladesh',
					'Asia/Kolkata': 'India',
					'Asia/Tokyo': 'Japan',
					'Asia/Singapore': 'Singapore',
					'Asia/Dubai': 'UAE',
					'Asia/Riyadh': 'Saudi Arabia',
					'America/New_York': 'USA',
					'America/Los_Angeles': 'USA',
					'America/Chicago': 'USA',
					'Europe/London': 'UK',
					'Europe/Paris': 'France',
					'Europe/Berlin': 'Germany',
					'Australia/Sydney': 'Australia',
					'Pacific/Auckland': 'New Zealand'
				};
				return countryMap[tz] || tz.split('/')[0];
			};

			const country = getCountryFromTimezone(timezoneToFormat);
			const city = timezoneToFormat.split('/').pop().replace(/_/g, ' ');
			return `${country} - ${city}`;
		} catch (error) {
			const city = timezoneToFormat?.split('/').pop()?.replace(/_/g, ' ') || 'Local Time';
			return `Bangladesh - ${city}`;
		}
	}, []);

	// Get effective timezone
	const getEffectiveTimezone = useCallback(() => {
		try {
			return timezoneMode === 'auto' ? Intl.DateTimeFormat().resolvedOptions().timeZone : timezone;
		} catch (error) {
			return 'Asia/Dhaka';
		}
	}, [timezoneMode, timezone]);

	// Get current time in timezone
	const getCurrentTimeInTimezone = useCallback(() => {
		const effectiveTimezone = getEffectiveTimezone();
		if (!effectiveTimezone) return 'Time Unavailable';

		try {
			const now = new Date();
			const formatConfig = {
				'hh:mm:ss A': { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true },
				'HH:mm:ss': { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false },
				'HH:mm': { hour: '2-digit', minute: '2-digit', hour12: false },
				'hh:mm A': { hour: '2-digit', minute: '2-digit', hour12: true }
			};

			const config = formatConfig[timeFormat] || formatConfig['hh:mm A'];
			return now.toLocaleTimeString('en-US', {
				timeZone: effectiveTimezone,
				...config
			});
		} catch (error) {
			return 'Time Unavailable';
		}
	}, [getEffectiveTimezone, timeFormat]);

	// Monthly schedule hours
	const getEffectiveOfficeHours = useCallback(() => {
		if (useMonthlySchedule && monthlySchedules?.length > 0) {
			const currentMonth = new Date().getMonth().toString();
			const currentSchedule = monthlySchedules.find(schedule => schedule.month === currentMonth);
			if (currentSchedule) {
				return { startTime: currentSchedule.startTime, endTime: currentSchedule.endTime };
			}
		}
		return { startTime: startTime || '09:00', endTime: endTime || '17:00' };
	}, [useMonthlySchedule, monthlySchedules, startTime, endTime]);

	// Format time for display
	const formatTimeForDisplay = useCallback((time) => {
		if (!time) return '';
		const [hours, minutes] = time.split(':').map(Number);
		if (isNaN(hours) || isNaN(minutes)) return '';

		if (timeFormat === 'HH:mm' || timeFormat === 'HH:mm:ss') {
			// 24-hour format
			return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
		} else {
			// 12-hour format
			const period = hours >= 12 ? 'PM' : 'AM';
			const displayHours = hours % 12 || 12;
			return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
		}
	}, [timeFormat]);

	// Remaining time calculation
	const getRemainingTime = useCallback(() => {
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

			// Format based on selected option
			switch (remainingTimeFormat) {
				case 'short':
					if (hours > 0 && minutes > 0) {
						return `${hours}h ${minutes}m`;
					} else if (hours > 0) {
						return `${hours}h`;
					} else {
						return `${minutes}m`;
					}

				case 'minutes-only':
					return `${remainingMinutes} minutes`;

				case 'decimal':
					const decimalHours = (remainingMinutes / 60).toFixed(2);
					return `${decimalHours} hours`;

				case 'hours-minutes':
				default:
					if (hours > 0 && minutes > 0) {
						return `${hours} hour${hours !== 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}`;
					} else if (hours > 0) {
						return `${hours} hour${hours !== 1 ? 's' : ''}`;
					} else {
						return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
					}
			}
		} catch (error) {
			return '';
		}
	}, [getEffectiveTimezone, getEffectiveOfficeHours, remainingTimeFormat]);

	// Weekend/Holiday check
	const isWeekendOrHoliday = useCallback((dayOfWeek, todayDate) => {
		const weekendDaysArray = weekendDays || [];
		if (weekendDaysArray.includes(dayOfWeek.toString())) return 'Weekend';
		if (holidays && holidays.includes(todayDate)) return 'Holiday';
		return null;
	}, [weekendDays, holidays]);

	// Time status calculation
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

	// Get next weekday after weekend
	const getNextWeekdayName = useCallback(() => {
		const now = new Date();
		let next = new Date(now);
		const weekends = weekendDays || [];
		do {
			next.setDate(next.getDate() + 1);
		} while (weekends.includes(next.getDay().toString()));
		return next.toLocaleDateString('en-US', { weekday: 'long' });
	}, [weekendDays]);

	// Get next date after holiday
	const getNextDateAfterHoliday = useCallback(() => {
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
	}, [weekendDays, holidays]);

	// Get current office status
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
				timeZone: effectiveTimezone,
				hour: '2-digit',
				minute: '2-digit',
				hour12: false
			});

			return calculateTimeStatus(currentTimeStr, effectiveStartTime, effectiveEndTime);
		} catch (error) {
			return 'Closed';
		}
	}, [getEffectiveTimezone, getEffectiveOfficeHours, isWeekendOrHoliday, calculateTimeStatus]);

	// Get display message
	const getDisplayMessage = useCallback(() => {
		try {
			const effectiveTimezone = getEffectiveTimezone();
			const now = new Date();
			const dayOfWeek = now.getDay();
			const todayDate = now.toISOString().split('T')[0];

			// Check for weekend
			if (weekendDays?.includes(dayOfWeek.toString())) {
				const nextWeekday = getNextWeekdayName();
				return `${weekendMessage || 'Weekend'}. ${beforeTimeText || 'Will start at'} ${formatTimeForDisplay(getEffectiveOfficeHours().startTime)}, ${nextWeekday}`;
			}

			// Check for holiday
			if (holidays?.includes(todayDate)) {
				const nextDate = getNextDateAfterHoliday();
				return `${holidayMessage || 'Holiday'}. ${beforeTimeText || 'Will start at'} ${formatTimeForDisplay(getEffectiveOfficeHours().startTime)}, ${nextDate}`;
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
				return `${afterTimeText || 'Will close at'} ${formatTimeForDisplay(effectiveEndTime)}${showRemainingTime && remaining ? `, ${remainingTimeLabel}${remaining}` : ''}`;
			} else {
				return `${beforeTimeText || 'Will start at'} ${formatTimeForDisplay(effectiveStartTime)}${showRemainingTime && remaining ? `, ${remainingTimeLabel}${remaining}` : ''}`;
			}
		} catch (error) {
			return 'Status unavailable';
		}
	}, [
		getEffectiveTimezone,
		weekendDays,
		holidays,
		weekendMessage,
		holidayMessage,
		beforeTimeText,
		afterTimeText,
		getNextWeekdayName,
		getNextDateAfterHoliday,
		formatTimeForDisplay,
		getEffectiveOfficeHours,
		calculateTimeStatus,
		getRemainingTime,
		showRemainingTime,
		remainingTimeLabel
	]);

	useEffect(() => {
		const updateDisplay = () => {
			setCurrentTime(getCurrentTimeInTimezone());
			setCurrentStatus(getCurrentOfficeStatus());
			setDisplayMessage(getDisplayMessage());
		};

		updateDisplay();
		const interval = setInterval(updateDisplay, 1000);
		return () => clearInterval(interval);
	}, [
		getCurrentTimeInTimezone,
		getCurrentOfficeStatus,
		getDisplayMessage,
		showRemainingTime,
		remainingTimeLabel,
		remainingTimeFormat
	]);

	// Display values
	const effectiveTimezone = getEffectiveTimezone();

	// Timezone offset (GMT+6 / UTC+06:00)
	const timezoneOffset = timezoneMode === 'auto' ?
		getTimezoneOffset(Intl.DateTimeFormat().resolvedOptions().timeZone) :
		getTimezoneOffset(timezone);

	// Timezone location name (Bangladesh - Dhaka)
	const timezoneLocation = timezoneMode === 'auto' ?
		getTimezoneLocationName(Intl.DateTimeFormat().resolvedOptions().timeZone) :
		getTimezoneLocationName(timezone);

	// Display location
	const displayLocation = useCustomLocation && location ? location : timezoneLocation;

	const displaySeparator = separator || ' | ';
	const statusType = currentStatus.toLowerCase();
	const statusText = currentStatus === 'Open' ?
		(openStatusText || 'Open') :
		(currentStatus === 'Weekend' ? (weekendMessage || 'Weekend') :
			(currentStatus === 'Holiday' ? (holidayMessage || 'Holiday') :
				(closedStatusText || 'Closed')));

	return (
		<>

			<Suspense fallback={null}>
				<Inspector attributes={attributes} setAttributes={setAttributes} clientId={clientId} />
			</Suspense>

			<div {...blockProps}>
				<div className={`fb-timezone-container ${timezoneGlobalWraperClass}`} id={timezoneGlobalWraperID}>
					<div className='fb-timezone-wrapper'>
						<div className='fb-location-timezone'>
							{useCustomLocation ? (
								<RichText
									tagName="span"
									value={displayLocation}
									onChange={(value) => setAttributes({ location: value })}
									placeholder={timezoneLocation}
									className="fb-location-name"
									allowedFormats={[]}
								/>
							) : (
								<span className="fb-location-name">{displayLocation}</span>
							)}

							{showSeparatorSwitcher && (
								<span className='fb-timezone-separator'>{displaySeparator}</span>
							)}

							{/* Current Time */}
							<span className='fb-current-time'>{currentTime}</span>

							{showTimezoneOffset && (
								<span className='fb-timezone-offset'>{timezoneOffset}</span>
							)}
						</div>
					</div>

					{showStatusSwitcher && (
						<div className='fb-timezone-status-wrapper'>
							<div className={`fb-timezone-status-info-box ${statusType}`}>
								<div className={`fb-time-pulse fb-time-pulse-${statusType}`}>
									<span className='fb-timezone-status'>{statusText}</span>
								</div>
								<div className='fb-timezone-status-info'>
									<span className='fb-timezone-info-noted'>{displayMessage}</span>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
}