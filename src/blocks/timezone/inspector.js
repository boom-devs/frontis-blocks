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

import { useEffect, useState, useMemo, useCallback } from '@wordpress/element';
import { TIMEZONE, WEEKENDDAY } from '@Constants/fbConstants';
import Select2 from "react-select";
import FB_InspectorControls from '@Components/InspectorControls';
import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_Range from '@Components/range';
import {useDeviceType} from "@Config/displayType";
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_ColorControl from '@Components/color-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import FB_SwitcherControl from '@Components/switcher-control';


import './editor.scss';



export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
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
		showSeparatorSwitcher,
		separatorColorSwitcher,
		separatorColor,
		separatorHoverColor,
		separatorSize,
		separatorFontUnits,
		openStatusText,
		closedStatusText,
		beforeTimeText,
		afterTimeText,
		
		timezoneLocationTextGlobalTypoSwitcher,
		timezoneLocationTextGlobalTypographyData,
		timezoneLocationTextGlobalTypoType,
		timezoneLocationTextGlobalTypoOption,
		timezoneLocationTextFontFamily,
		timezoneLocationTextFontSize,
		timezoneLocationTextFontSizeUnits,
		timezoneLocationTextFontWeight,
		timezoneLocationTextFontStyle,
		timezoneLocationTextTransform,
		timezoneLocationTextDecoration,
		timezoneLocationTextLetterSpacing,
		timezoneLocationTextLetterSpacingUnits,
		timezoneLocationTextLineHeight,
		timezoneLocationTextLineHeightUnits,
		
		timezoneTimeTextGlobalTypoSwitcher,
		timezoneTimeTextGlobalTypographyData,
		timezoneTimeTextGlobalTypoType,
		timezoneTimeTextGlobalTypoOption,
		timezoneTimeTextFontFamily,
		timezoneTimeTextFontSize,
		timezoneTimeTextFontSizeUnits,
		timezoneTimeTextFontWeight,
		timezoneTimeTextFontStyle,
		timezoneTimeTextTransform,
		timezoneTimeTextDecoration,
		timezoneTimeTextLetterSpacing,
		timezoneTimeTextLetterSpacingUnits,
		timezoneTimeTextLineHeight,
		timezoneTimeTextLineHeightUnits,

		locationNameTextColorTypeSwitcher,
        locationNameTextColorType,
        locationNameTextHoverColorType,
        locationNameTextColor,
        locationNameTextHoverColor,
        locationNameTextGradientColor,
        locationNameTextHoverGradientColor,
        locationNameTextCustomGradientColorSwitcher,
        locationNameTextCustomGradientColor,
        locationNameTextHoverCustomGradientColorSwitcher,
        locationNameTextHoverCustomGradientColor,

		timezoneTextAlignment,
		timezoneLocationTextSpacing,
		timezoneLocationTextSpacingUnits,


	} = attributes;

	const deviceType= useDeviceType();

	useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-timezone-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

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

	//Show timezone name when auto mode
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

	const allBlockStyle = useMemo(() => `
		.${blockID} .fb-timezone-container .fb-location-timezone .fb-location-name{
			${timezoneLocationTextGlobalTypoSwitcher?.fontFamily === true && timezoneLocationTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneLocationTextGlobalTypographyData?.fontFamily};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.fontSize === true && timezoneLocationTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneLocationTextGlobalTypographyData?.fontSize};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.fontWeight === true && timezoneLocationTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneLocationTextGlobalTypographyData?.fontWeight};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.fontStyle === true && timezoneLocationTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneLocationTextGlobalTypographyData?.fontStyle};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.textTransform === true && timezoneLocationTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneLocationTextGlobalTypographyData?.textTransform};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.textDecoration === true && timezoneLocationTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneLocationTextGlobalTypographyData?.textDecoration};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.letterSpacing === true && timezoneLocationTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneLocationTextGlobalTypographyData?.letterSpacing};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.lineHeight === true && timezoneLocationTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneLocationTextGlobalTypographyData?.lineHeight};` : ''}

            ${timezoneLocationTextGlobalTypoSwitcher?.fontFamily === false && timezoneLocationTextFontFamily && timezoneLocationTextFontFamily !== 'Default' ? `font-family: ${timezoneLocationTextFontFamily};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.fontSize === false && timezoneLocationTextFontSize?.Desktop && timezoneLocationTextFontSizeUnits?.Desktop ? `font-size: ${timezoneLocationTextFontSize?.Desktop}${timezoneLocationTextFontSizeUnits?.Desktop};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.fontWeight === false && timezoneLocationTextFontWeight ? `font-weight: ${timezoneLocationTextFontWeight};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.fontStyle === false && timezoneLocationTextFontStyle ? `font-style: ${timezoneLocationTextFontStyle};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.textTransform === false && timezoneLocationTextTransform ? `text-transform: ${timezoneLocationTextTransform};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.textDecoration === false && timezoneLocationTextDecoration ? `text-decoration: ${timezoneLocationTextDecoration};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.letterSpacing === false && timezoneLocationTextLetterSpacing?.Desktop && timezoneLocationTextLetterSpacingUnits?.Desktop ? `letter-spacing: ${timezoneLocationTextLetterSpacing?.Desktop}${timezoneLocationTextLetterSpacingUnits?.Desktop};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.lineHeight === false && timezoneLocationTextLineHeight?.Desktop && timezoneLocationTextLineHeightUnits?.Desktop ? `line-height: ${timezoneLocationTextLineHeight?.Desktop}${timezoneLocationTextLineHeightUnits?.Desktop};` : ''}

			${locationNameTextColor ? `color: ${locationNameTextColor};` : ''}

            ${locationNameTextColorType === 'gradient' ? `
                background: ${locationNameTextCustomGradientColorSwitcher && locationNameTextCustomGradientColor ? locationNameTextCustomGradientColor : locationNameTextGradientColor};
                ${locationNameTextCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${locationNameTextGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}

			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-location-timezone .fb-location-name:hover{
			${locationNameTextHoverColor ? `color: ${locationNameTextHoverColor};` : ''}

			${locationNameTextHoverColorType === 'gradient' ? `
				background: ${locationNameTextHoverCustomGradientColorSwitcher && locationNameTextHoverCustomGradientColor ? locationNameTextHoverCustomGradientColor : locationNameTextHoverGradientColor};
				${locationNameTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
				${locationNameTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
			` : ''}
			
			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-location-timezone{
			position: relative;
			display: flex;
			${timezoneTextAlignment?.Desktop ? `justify-content: ${timezoneTextAlignment?.Desktop};` : ''}
			align-items: center;
			gap: ${timezoneLocationTextSpacing?.Desktop}${timezoneLocationTextSpacingUnits?.Desktop};
			transition: all .3s ease-in-out;
		}
		
		.${blockID} .fb-timezone-container .fb-timezone-separator {
			font-size: ${separatorSize?.Desktop}${separatorFontUnits?.Desktop};
			line-height: 100%;
			${separatorColor ? `color: ${separatorColor};` : ''}
		}

		.${blockID} .fb-timezone-container .fb-location-timezone .fb-current-time{
			${timezoneTimeTextGlobalTypoSwitcher?.fontFamily === true && timezoneTimeTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneTimeTextGlobalTypographyData?.fontFamily};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.fontSize === true && timezoneTimeTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneTimeTextGlobalTypographyData?.fontSize};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.fontWeight === true && timezoneTimeTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneTimeTextGlobalTypographyData?.fontWeight};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.fontStyle === true && timezoneTimeTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneTimeTextGlobalTypographyData?.fontStyle};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.textTransform === true && timezoneTimeTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneTimeTextGlobalTypographyData?.textTransform};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.textDecoration === true && timezoneTimeTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneTimeTextGlobalTypographyData?.textDecoration};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.letterSpacing === true && timezoneTimeTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneTimeTextGlobalTypographyData?.letterSpacing};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.lineHeight === true && timezoneTimeTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneTimeTextGlobalTypographyData?.lineHeight};` : ''}

            ${timezoneTimeTextGlobalTypoSwitcher?.fontFamily === false && timezoneTimeTextFontFamily && timezoneTimeTextFontFamily !== 'Default' ? `font-family: ${timezoneTimeTextFontFamily};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.fontSize === false && timezoneTimeTextFontSize?.Desktop && timezoneTimeTextFontSizeUnits?.Desktop ? `font-size: ${timezoneTimeTextFontSize?.Desktop}${timezoneTimeTextFontSizeUnits?.Desktop};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.fontWeight === false && timezoneTimeTextFontWeight ? `font-weight: ${timezoneTimeTextFontWeight};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.fontStyle === false && timezoneTimeTextFontStyle ? `font-style: ${timezoneTimeTextFontStyle};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.textTransform === false && timezoneTimeTextTransform ? `text-transform: ${timezoneTimeTextTransform};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.textDecoration === false && timezoneTimeTextDecoration ? `text-decoration: ${timezoneTimeTextDecoration};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.letterSpacing === false && timezoneTimeTextLetterSpacing?.Desktop && timezoneTimeTextLetterSpacingUnits?.Desktop ? `letter-spacing: ${timezoneTimeTextLetterSpacing?.Desktop}${timezoneTimeTextLetterSpacingUnits?.Desktop};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.lineHeight === false && timezoneTimeTextLineHeight?.Desktop && timezoneTimeTextLineHeightUnits?.Desktop ? `line-height: ${timezoneTimeTextLineHeight?.Desktop}${timezoneTimeTextLineHeightUnits?.Desktop};` : ''}

			transition: all .3s ease-in-out;
		}
	
	`, [

		blockID,
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
		showSeparatorSwitcher,
		separatorColorSwitcher,
		separatorColor,
		separatorHoverColor,
		separatorSize,
		separatorFontUnits,
		openStatusText,
		closedStatusText,
		beforeTimeText,
		afterTimeText,

		timezoneLocationTextGlobalTypoSwitcher,
		timezoneLocationTextGlobalTypographyData,
		timezoneLocationTextGlobalTypoType,
		timezoneLocationTextGlobalTypoOption,
		timezoneLocationTextFontFamily,
		timezoneLocationTextFontSize,
		timezoneLocationTextFontSizeUnits,
		timezoneLocationTextFontWeight,
		timezoneLocationTextFontStyle,
		timezoneLocationTextTransform,
		timezoneLocationTextDecoration,
		timezoneLocationTextLetterSpacing,
		timezoneLocationTextLetterSpacingUnits,
		timezoneLocationTextLineHeight,
		timezoneLocationTextLineHeightUnits,

		timezoneTimeTextGlobalTypoSwitcher,
		timezoneTimeTextGlobalTypographyData,
		timezoneTimeTextGlobalTypoType,
		timezoneTimeTextGlobalTypoOption,
		timezoneTimeTextFontFamily,
		timezoneTimeTextFontSize,
		timezoneTimeTextFontSizeUnits,
		timezoneTimeTextFontWeight,
		timezoneTimeTextFontStyle,
		timezoneTimeTextTransform,
		timezoneTimeTextDecoration,
		timezoneTimeTextLetterSpacing,
		timezoneTimeTextLetterSpacingUnits,
		timezoneTimeTextLineHeight,
		timezoneTimeTextLineHeightUnits,

		locationNameTextColorTypeSwitcher,
        locationNameTextColorType,
        locationNameTextHoverColorType,
        locationNameTextColor,
        locationNameTextHoverColor,
        locationNameTextGradientColor,
        locationNameTextHoverGradientColor,
        locationNameTextCustomGradientColorSwitcher,
        locationNameTextCustomGradientColor,
        locationNameTextHoverCustomGradientColorSwitcher,
        locationNameTextHoverCustomGradientColor,

		timezoneTextAlignment,
		timezoneLocationTextSpacing,
		timezoneLocationTextSpacingUnits,

	]);

	useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle] );

    const editorStyle = `${allBlockStyle}`.replace(/\s+/g, ' ').trim();

	 /**
	 * Inspector General Controls
	 */
    const generalControls = (
		<>
			{/* Location & Basic Settings */}
			<PanelBody title="Location & Basic Settings" initialOpen={true}>
				<BaseControl>
					<ToggleControl
						label="Use UTC Timezone Format"
						checked={!!useUTCTimezoneFormat}
						onChange={(value) => setAttributes({ useUTCTimezoneFormat: value })}
					/>
				</BaseControl>
				<TextControl
					label="Location Name"
					value={location || ''}
					onChange={(value) => setAttributes({ location: value })}
					placeholder="e.g., Dhaka, Bangladesh"
					className="fb-custom-location"
				/>

				<ToggleControl
					label={__("Show Separator", "frontis-blocks")}
					checked={showSeparatorSwitcher}
					onChange={(value) => setAttributes({ showSeparatorSwitcher: value })}
				/>

				{showSeparatorSwitcher && (
					<TextControl
						label="Separator"
						value={separator || ''}
						onChange={(value) => {
							const hasInvalidChars = /[a-zA-Z0-9]/.test(value);
							
							if (hasInvalidChars) {
								const cleanedValue = value.replace(/[a-zA-Z0-9]/g, '');
								setAttributes({ separator: cleanedValue });
							} else {
								setAttributes({ separator: value });
							}
						}}
						placeholder="e.g., | , - , • , etc."
						help="Allowed symbols only."
					/>
				)}
				
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
    );

	 /**
	 * Inspector Style Controls
	 */
    const styleControls = (
        <>
			{/* Style settings will go here */}
			<PanelBody initialOpen={true}>
				<FB_ResponsiveAlignmentControl
					label={__("Alignment", "frontis-blocks")}
					globalAlignment={timezoneTextAlignment}
					setGlobalAlignment={(value) => setAttributes({ timezoneTextAlignment: value })}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>
				<FB_Range
					min={0}
					max={timezoneLocationTextSpacingUnits === '%' ? 100 : 200}
					label={__("Gap", "frontis-blocks")}
					rangeValue={timezoneLocationTextSpacing}
					onChangeHandler={(value) => setAttributes({ timezoneLocationTextSpacing: value })}
					rangeUnitHandler={(value) => setAttributes({ timezoneLocationTextSpacingUnits: value })}
					deviceType={deviceType}
					units={timezoneLocationTextSpacingUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={''}
				/>
			</PanelBody>

			<PanelBody 
				title={__("Location", "frontis-blocks")} 
				initialOpen={false}
			>
				<FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={timezoneLocationTextGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ timezoneLocationTextGlobalTypographyData: value })}

                    globalTypoType={timezoneLocationTextGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            timezoneLocationTextGlobalTypoType: value,
                            timezoneLocationTextGlobalTypoSwitcher: value === 'default' ? {...timezoneLocationTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...timezoneLocationTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={timezoneLocationTextGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ timezoneLocationTextGlobalTypoOption: value })}

                    fontFamily={timezoneLocationTextFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ timezoneLocationTextFontFamily: value, timezoneLocationTextGlobalTypoSwitcher: {...timezoneLocationTextGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={timezoneLocationTextFontSize}
                    onChangeFontSize={(value) => setAttributes({ timezoneLocationTextFontSize: value, timezoneLocationTextGlobalTypoSwitcher: {...timezoneLocationTextGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={timezoneLocationTextFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ timezoneLocationTextFontSizeUnits: value })}

                    fontWeight={timezoneLocationTextFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ timezoneLocationTextFontWeight: value, timezoneLocationTextGlobalTypoSwitcher: {...timezoneLocationTextGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={timezoneLocationTextFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ timezoneLocationTextFontStyle: value, timezoneLocationTextGlobalTypoSwitcher: {...timezoneLocationTextGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={timezoneLocationTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ timezoneLocationTextTransform: value, timezoneLocationTextGlobalTypoSwitcher: {...timezoneLocationTextGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={timezoneLocationTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ timezoneLocationTextDecoration: value, timezoneLocationTextGlobalTypoSwitcher: {...timezoneLocationTextGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={timezoneLocationTextLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ timezoneLocationTextLetterSpacing: value, timezoneLocationTextGlobalTypoSwitcher: {...timezoneLocationTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={timezoneLocationTextLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ timezoneLocationTextLetterSpacingUnits: value })}

                    lineHeight={timezoneLocationTextLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ timezoneLocationTextLineHeight: value, timezoneLocationTextGlobalTypoSwitcher: {...timezoneLocationTextGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={timezoneLocationTextLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ timezoneLocationTextLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

				<FB_BackgroundColorControl
					label={__("Text Color", "frontis-blocks")}
					bgColorSwitcher={locationNameTextColorTypeSwitcher}
					setBgColorSwitcher={(value) => setAttributes({ locationNameTextColorTypeSwitcher: value })}

                    normalLabel={__("Text Color Type", "frontis-blocks")}
					normalBackgroundType={locationNameTextColorType}
					setNormalBackgroundType={(value) => setAttributes({ locationNameTextColorType: value })}
					normalClassicColor={locationNameTextColor}
					setNormalClassicColor={(value) => setAttributes({ locationNameTextColor: value === undefined ? '' : value })}
					normalGradientColor={locationNameTextGradientColor}
					setNormalGradientColor={(value) => setAttributes({ locationNameTextGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={locationNameTextCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ locationNameTextCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={locationNameTextCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ locationNameTextCustomGradientColor: value === undefined ? null : value })}

                    hoverLabel={__("Text Color Type", "frontis-blocks")}
					hoverBackgroundType={locationNameTextHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ locationNameTextHoverColorType: value })}
					hoverClassicColor={locationNameTextHoverColor}
					setHoverClassicColor={(value) => setAttributes({ locationNameTextHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={locationNameTextHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ locationNameTextHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={locationNameTextHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ locationNameTextHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={locationNameTextHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ locationNameTextHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}

				/>

			</PanelBody>

			
			{showSeparatorSwitcher && (
				<PanelBody title={__("Separator", "frontis-blocks")} initialOpen={false}>
					<FB_Range
						min={0}
						max={separatorFontUnits === '%' ? 100 : 200}
						label={__("Size", "frontis-blocks")}
						rangeValue={separatorSize}
						onChangeHandler={(value) => setAttributes({ separatorSize: value })}
						rangeUnitHandler={(value) => setAttributes({ separatorFontUnits: value })}
						deviceType={deviceType}
						units={separatorFontUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={''}
					/>
					<FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        globalSwitcher={separatorColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ separatorColorSwitcher: value })}
                    />
					{separatorColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={separatorColor}
                            setGlobalColor={(value) => setAttributes({ separatorColor: value === undefined ? '' : value })}
                        />
                    )}

                    {separatorColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={separatorHoverColor}
                            setGlobalColor={(value) => setAttributes({ separatorHoverColor: value === undefined ? '' : value })}
                        />
                    )}
				</PanelBody>
			)}

			<PanelBody 
				title={__("Timezone Time", "frontis-blocks")} 
				initialOpen={false}
			>
				<FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={timezoneTimeTextGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ timezoneTimeTextGlobalTypographyData: value })}

                    globalTypoType={timezoneTimeTextGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            timezoneTimeTextGlobalTypoType: value,
                            timezoneTimeTextGlobalTypoSwitcher: value === 'default' ? {...timezoneTimeTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...timezoneTimeTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={timezoneTimeTextGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ timezoneTimeTextGlobalTypoOption: value })}

                    fontFamily={timezoneTimeTextFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ timezoneTimeTextFontFamily: value, timezoneTimeTextGlobalTypoSwitcher: {...timezoneTimeTextGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={timezoneTimeTextFontSize}
                    onChangeFontSize={(value) => setAttributes({ timezoneTimeTextFontSize: value, timezoneTimeTextGlobalTypoSwitcher: {...timezoneTimeTextGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={timezoneTimeTextFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ timezoneTimeTextFontSizeUnits: value })}

                    fontWeight={timezoneTimeTextFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ timezoneTimeTextFontWeight: value, timezoneTimeTextGlobalTypoSwitcher: {...timezoneTimeTextGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={timezoneTimeTextFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ timezoneTimeTextFontStyle: value, timezoneTimeTextGlobalTypoSwitcher: {...timezoneTimeTextGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={timezoneTimeTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ timezoneTimeTextTransform: value, timezoneTimeTextGlobalTypoSwitcher: {...timezoneTimeTextGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={timezoneTimeTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ timezoneTimeTextDecoration: value, timezoneTimeTextGlobalTypoSwitcher: {...timezoneTimeTextGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={timezoneTimeTextLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ timezoneTimeTextLetterSpacing: value, timezoneTimeTextGlobalTypoSwitcher: {...timezoneTimeTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={timezoneTimeTextLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ timezoneTimeTextLetterSpacingUnits: value })}

                    lineHeight={timezoneTimeTextLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ timezoneTimeTextLineHeight: value, timezoneTimeTextGlobalTypoSwitcher: {...timezoneTimeTextGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={timezoneTimeTextLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ timezoneTimeTextLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

				{/* <FB_BackgroundColorControl
					label={__("Color", "frontis-blocks")}
					bgColorSwitcher={locationNameTextColorTypeSwitcher}
					setBgColorSwitcher={(value) => setAttributes({ locationNameTextColorTypeSwitcher: value })}

                    normalLabel={__("Color Type", "frontis-blocks")}
					normalBackgroundType={locationNameTextColorType}
					setNormalBackgroundType={(value) => setAttributes({ locationNameTextColorType: value })}
					normalClassicColor={locationNameTextColor}
					setNormalClassicColor={(value) => setAttributes({ locationNameTextColor: value === undefined ? '' : value })}
					normalGradientColor={locationNameTextGradientColor}
					setNormalGradientColor={(value) => setAttributes({ locationNameTextGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={locationNameTextCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ locationNameTextCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={locationNameTextCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ locationNameTextCustomGradientColor: value === undefined ? null : value })}

                    hoverLabel={__("Color Type", "frontis-blocks")}
					hoverBackgroundType={locationNameTextHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ locationNameTextHoverColorType: value })}
					hoverClassicColor={locationNameTextHoverColor}
					setHoverClassicColor={(value) => setAttributes({ locationNameTextHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={locationNameTextHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ locationNameTextHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={locationNameTextHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ locationNameTextHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={locationNameTextHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ locationNameTextHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}

				/> */}

			</PanelBody>
			
        </>
    );

	/**
	 * Inspector Advanced Controls
	 */
    const advancedControls = (
        <>

        </>
    );

	return (
        <>
			<style>
                {editorStyle}
            </style>
            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
	);
}