import { __ } from '@wordpress/i18n';
import {
	useBlockProps
} from '@wordpress/block-editor';
import Inspector from './inspector';
import { useEffect, useState } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const { blockID, location, officeHours, startTime, title, officeStatus } = attributes;
	const [currentTime, setCurrentTime] = useState(new Date());

	const blockProps = useBlockProps({
		className: `fb-timezone-block ${blockID}`,
	});

	// Update time every second with useEffect
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		// Cleanup interval on unmount
		return () => clearInterval(timer);
	}, []);

	const getTimezone = () => {
		const offset = currentTime.getTimezoneOffset() * -1 / 60; // Convert to positive for east, negative for west
		const sign = offset >= 0 ? '+' : '';
		return `(UTC ${sign}${offset})`;
	}

	const getCurrentTime = () => {
		let hours = currentTime.getHours();
		let minutes = currentTime.getMinutes();
		let seconds = currentTime.getSeconds();

		// Get PM or AM
		const ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12; // The hour '0' should be '12'

		// Format minutes and seconds with leading zeros
		minutes = minutes < 10 ? `0${minutes}` : minutes;
		seconds = seconds < 10 ? `0${seconds}` : seconds;

		// Use the location from attributes if available, otherwise default
		const displayLocation = attributes.location || 'Dhaka, Bangladesh';

		const time = `${hours}:${minutes} ${ampm}`;
		return `${displayLocation} • ${time}`;
	}

	// Fixed office hours calculation
	const getOfficeStatus = () => {
		// Parse office start time (assuming format like "9:00")
		const startParts = (startTime || "9:00").split(':');
		const startHour = parseInt(startParts[0], 10);
		const startMinute = parseInt(startParts[1] || "0", 10);

		// Current time
		const currentHour = currentTime.getHours();
		const currentMinute = currentTime.getMinutes();

		// Calculate total office minutes (from start time to end of day)
		const totalOfficeMinutes = (officeHours || 8) * 60;

		// Calculate end time
		const endTimeMinutes = startHour * 60 + startMinute + totalOfficeMinutes;
		const endHour = Math.floor(endTimeMinutes / 60) % 24;
		const endMinute = endTimeMinutes % 60;

		// Format end time
		const formattedEndHour = endHour < 10 ? `0${endHour}` : endHour;
		const formattedEndMinute = endMinute < 10 ? `0${endMinute}` : endMinute;

		// Current time in minutes since start of day
		const currentTimeMinutes = currentHour * 60 + currentMinute;

		// Check if office is open
		const isOpen = currentTimeMinutes >= (startHour * 60 + startMinute) &&
			currentTimeMinutes < endTimeMinutes;

		if (isOpen) {
			// Calculate minutes left
			const minutesLeft = endTimeMinutes - currentTimeMinutes;
			const hoursLeft = Math.floor(minutesLeft / 60);
			const remainingMinutes = minutesLeft % 60;

			setAttributes({ officeStatus: true });

			return `Will be finished in ${hoursLeft}:${remainingMinutes < 10 ? '0' + remainingMinutes : remainingMinutes} Hrs`;
		} else {
			setAttributes({ officeStatus: false });
			return `Office is closed. Opens at ${startHour}:${startMinute < 10 ? '0' + startMinute : startMinute}`;
		}
	}

	return (
		<div {...blockProps}>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>

			<div className="fb-timezone-container">
				<div className="fb-timezone-header">
					<div className="fb-timezone-time">
						{getCurrentTime()} <span className="fb-timezone-timezone">{getTimezone()}</span>
					</div>
					<div className={`fb-timezone-status ${officeStatus ? 'open' : 'close'}`}><span className="fb-timezone-status-badge">{officeStatus ? <span > <div className="circle pulse open"></div> Open</span> : <span> <div className="circle pulse close"></div>Close</span>}</span> <span className="fb-timezone-status-icon">{getOfficeStatus()}</span></div>
				</div>
			</div>
		</div>
	);
}