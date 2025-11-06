import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		location,
		timezone,
		officeHours,
		officeStatus,
		closedMessage,
		completionMessage,
		timezoneMode,
		useUTCTimezoneFormat
	} = attributes;

	// Helper function to format timezone display
	const getFormattedTimezone = (timezone) => {
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

	// Format messages with dynamic values
	const formatTimeForDisplay = (time) => {
		if (!time) return '';
		const [hours, minutes] = time.split(':').map(Number);
		if (isNaN(hours) || isNaN(minutes)) return '';
		const period = hours >= 12 ? 'PM' : 'AM';
		const displayHours = hours % 12 || 12;
		return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
	};

	const formatClosedMessage = () => {
		if (!closedMessage) return 'Office is closed. Opens at {startTime}';
		
		// Extract start time from officeHours or use default
		const startTimeMatch = officeHours?.match(/(\d+:\d+ [AP]M)/);
		const startTimeDisplay = startTimeMatch ? startTimeMatch[1] : '9:00 AM';
		
		return closedMessage.replace('{startTime}', startTimeDisplay);
	};

	const formatCompletionMessage = () => {
		if (!completionMessage) return 'Office will be finished at {totalTime}';
		
		// Extract end time from officeHours or use default
		const endTimeMatch = officeHours?.match(/- (\d+:\d+ [AP]M)/);
		const endTimeDisplay = endTimeMatch ? endTimeMatch[1] : '5:00 PM';
		
		return completionMessage
			.replace('{totalTime}', '8 hours')
			.replace('{endTime}', endTimeDisplay)
			.replace('{remainingTime}', '7 hours 30 minutes');
	};

	// Get display values
	const displayLocation = location || 'Dhaka, Bangladesh';
	const displayTimezone = timezoneMode === 'auto' ? 
		getFormattedTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone) : 
		getFormattedTimezone(timezone);
	const currentTime = getCurrentTimeInTimezone();
	const isOpen = officeStatus === 'Open';
	const closedMessageDisplay = formatClosedMessage();
	const completionMessageDisplay = formatCompletionMessage();

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
		</>
	);
}