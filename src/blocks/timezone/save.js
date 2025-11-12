import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Save({ attributes }) {
	const {
		blockID,
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
		showSeparatorSwitcher,
		openStatusText,
		closedStatusText,
		beforeTimeText,
		afterTimeText
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `frontis-block fb-timezone-main-wrapper ${blockID}`,
	});

	// Helper: format timezone for display
	const getFormattedTimezone = (timezone) => {
		try {
			const now = new Date();
			if (useUTCTimezoneFormat) {
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
				const offset = now.toLocaleString('en-US', {
					timeZone: timezone,
					timeZoneName: 'shortOffset'
				}).split(' ').pop();
				const timezoneName = timezone.split('/').pop().replace(/_/g, ' ');
				return `${timezoneName} (${offset})`;
			}
		} catch {
			const timezoneName = timezone?.split('/').pop()?.replace(/_/g, ' ') || 'Local Time';
			return useUTCTimezoneFormat ? `${timezoneName} (UTC+06:00)` : `${timezoneName} (GMT+6)`;
		}
	};

	// Helper: get effective monthly schedule
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

	// Helper: format time to readable format
	const formatTimeForDisplay = (time) => {
		if (!time) return '';
		const [hours, minutes] = time.split(':').map(Number);
		if (isNaN(hours) || isNaN(minutes)) return '';
		const period = hours >= 12 ? 'PM' : 'AM';
		const displayHours = hours % 12 || 12;
		return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
	};

	// Helper: remaining time
	const getRemainingTime = () => {
		const effectiveTimezone = timezoneMode === 'auto'
			? Intl.DateTimeFormat().resolvedOptions().timeZone
			: timezone;
		const { endTime: effectiveEndTime } = getEffectiveOfficeHours();
		if (!effectiveTimezone || !effectiveEndTime) return '';
		try {
			const now = new Date();
			const currentTimeStr = now.toLocaleTimeString('en-US', {
				timeZone: effectiveTimezone,
				hour: '2-digit',
				minute: '2-digit',
				hour12: false
			});
			const [ch, cm] = currentTimeStr.split(':').map(Number);
			const [eh, em] = effectiveEndTime.split(':').map(Number);
			let currentTotal = ch * 60 + cm;
			let endTotal = eh * 60 + em;
			if (endTotal < currentTotal) endTotal += 24 * 60;
			const remaining = endTotal - currentTotal;
			if (remaining <= 0) return '';
			const h = Math.floor(remaining / 60);
			const m = remaining % 60;
			return h > 0 ? `${h} hr ${m > 0 ? `${m} min` : ''}` : `${m} min`;
		} catch {
			return '';
		}
	};

	// Helper: next working day after weekend
	const getNextWeekdayName = () => {
		const now = new Date();
		let next = new Date(now);
		const weekends = weekendDays || [];
		do {
			next.setDate(next.getDate() + 1);
		} while (weekends.includes(next.getDay().toString()));
		return next.toLocaleDateString('en-US', { weekday: 'long' });
	};

	// Helper: next working date after holiday
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

	// Helper: main display message
	const getDisplayMessage = () => {
		try {
			const effectiveTimezone =
				timezoneMode === 'auto'
					? Intl.DateTimeFormat().resolvedOptions().timeZone
					: timezone;
			const now = new Date();
			const day = now.getDay();
			const today = now.toISOString().split('T')[0];
			const weekends = weekendDays || [];
			const holidaysArr = holidays || [];

			if (weekends.includes(day.toString())) {
				const nextWeekday = getNextWeekdayName();
				return `${weekendMessage || 'Closed for weekend'}. ${beforeTimeText || 'Office will start at'} ${formatTimeForDisplay(getEffectiveOfficeHours().startTime)}, ${nextWeekday}`;
			}

			if (holidaysArr.includes(today)) {
				const nextDate = getNextDateAfterHoliday();
				return `${holidayMessage || 'Closed for holiday'}. ${beforeTimeText || 'Office will start at'} ${formatTimeForDisplay(getEffectiveOfficeHours().startTime)}, ${nextDate}`;
			}

			const { startTime, endTime } = getEffectiveOfficeHours();
			const nowTime = now.toLocaleTimeString('en-US', {
				timeZone: effectiveTimezone,
				hour: '2-digit',
				minute: '2-digit',
				hour12: false
			});
			const [ch, cm] = nowTime.split(':').map(Number);
			const [sh, sm] = startTime.split(':').map(Number);
			const [eh, em] = endTime.split(':').map(Number);
			let currentTotal = ch * 60 + cm;
			let startTotal = sh * 60 + sm;
			let endTotal = eh * 60 + em;
			if (endTotal < startTotal) endTotal += 24 * 60;
			const isOpen = currentTotal >= startTotal && currentTotal <= endTotal;
			const remaining = getRemainingTime();
			if (isOpen) {
				return `${completionMessage || 'Office is open'}. ${afterTimeText || 'Office will close at'} ${formatTimeForDisplay(endTime)}, Remaining time: ${remaining}`;
			}
			return `${closedMessage || 'Office is closed'}. ${beforeTimeText || 'Office will start at'} ${formatTimeForDisplay(startTime)}, Remaining time: ${remaining}`;
		} catch {
			return closedMessage || 'Office is closed';
		}
	};

	// Static output
	const displayLocation = location || 'Set Location Manually';
	const displayTimezone =
		timezoneMode === 'auto'
			? getFormattedTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone)
			: getFormattedTimezone(timezone);
	const currentTime = new Date().toLocaleTimeString('en-US', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: true
	});
	const displaySeparator = separator || ' | ';
	const statusType = officeStatus === 'Open' ? 'open' : 'closed';
	const statusText =
		officeStatus === 'Open'
			? openStatusText || 'Open'
			: closedStatusText || 'Closed';
	const displayMessage = getDisplayMessage();

	return (
		<div {...blockProps}>
			<div className='fb-timezone-container'>
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
				<div className='fb-timezone-status-wrapper'>
					<div className='fb-timezone-status-info-box'>
						<div
							className={ statusType === 'open' ? 'fb-time-pulse-open' : 'fb-time-pulse-close'}
						>
							<span className='fb-timezone-status'>{statusText}</span>
						</div>
						<div className='fb-timezone-status-info'>
							<span className='fb-timezone-info-noted'>
								{displayMessage}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}