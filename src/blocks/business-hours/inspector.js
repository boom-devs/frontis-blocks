import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	TabPanel,
	TextControl,
	SelectControl,
	ToggleControl, 
	DatePicker,
	Button,
	BaseControl,
	TextareaControl,
    Dropdown,
    ButtonGroup,
} from '@wordpress/components';

import { useEffect, useState, useMemo, memo, useCallback } from '@wordpress/element';
import { TIMEZONE, WEEKENDDAY, timeFormatOptions, monthOptions, BORDER_STYLES, OVERFLOW_OP, BACKGROUND_TYPES } from '@Constants/fbConstants';
import FB_VisibilityControl from '@Components/visibility-control';
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
import FB_PositionControl from '@Components/position-control';
import FB_InputControl from '@Components/input-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_AlignmentControl from '@Components/alignment-control';

import './editor.scss';

const Inspector = ({ attributes, setAttributes, clientId }) => {
	const {
		blockID,
        countries,
        selectedCountry,
        useCustomLocation,
		location,
        showTimezoneOffset,   
        showRemainingTime,
        remainingTimeLabel,
        remainingTimeFormat,     
		timezone,        
		timezones,       
		startTime,
		endTime,
		officeHours,
		officeStatus,
        timeFormat,
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

        showStatusSwitcher,

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
		
		timezoneTextGlobalTypoSwitcher,
		timezoneTextGlobalTypographyData,
		timezoneTextGlobalTypoType,
		timezoneTextGlobalTypoOption,
		timezoneTextFontFamily,
		timezoneTextFontSize,
		timezoneTextFontSizeUnits,
		timezoneTextFontWeight,
		timezoneTextFontStyle,
		timezoneTextTransform,
		timezoneTextDecoration,
		timezoneTextLetterSpacing,
		timezoneTextLetterSpacingUnits,
		timezoneTextLineHeight,
		timezoneTextLineHeightUnits,

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
		
		timezoneTimeTextColorTypeSwitcher,
        timezoneTimeTextColorType,
        timezoneTimeTextHoverColorType,
        timezoneTimeTextColor,
        timezoneTimeTextHoverColor,
        timezoneTimeTextGradientColor,
        timezoneTimeTextHoverGradientColor,
        timezoneTimeTextCustomGradientColorSwitcher,
        timezoneTimeTextCustomGradientColor,
        timezoneTimeTextHoverCustomGradientColorSwitcher,
        timezoneTimeTextHoverCustomGradientColor,

		timezoneTextColorTypeSwitcher,
        timezoneTextColorType,
        timezoneTextHoverColorType,
        timezoneTextColor,
        timezoneTextHoverColor,
        timezoneTextGradientColor,
        timezoneTextHoverGradientColor,
        timezoneTextCustomGradientColorSwitcher,
        timezoneTextCustomGradientColor,
        timezoneTextHoverCustomGradientColorSwitcher,
        timezoneTextHoverCustomGradientColor,

		alignment,
		spacing,
		spacingUnits,

		timezoneTextAlignment,
		timezoneLocationTextSpacing,
		timezoneLocationTextSpacingUnits,
		timezoneCardAlignment,
		timezoneCardSpacing,
		timezoneCardSpacingUnits,

		locationTimezoneBgColorTypeSwitcher,
        locationTimezoneBgColorType,
        locationTimezoneBgHoverColorType,
        locationTimezoneBgColor,
        locationTimezoneBgHoverColor,
        locationTimezoneBgGradientColor,
        locationTimezoneBgHoverGradientColor,
        locationTimezoneBgCustomGradientColorSwitcher,
        locationTimezoneBgCustomGradientColor,
        locationTimezoneBgHoverCustomGradientColorSwitcher,
        locationTimezoneBgHoverCustomGradientColor,

		locationTimezoneBorder,
        locationTimezoneBorderColor,
        locationTimezoneBorderHoverColor,
        locationTimezoneBorderColorSwitcher,

        locationTimezoneBorderUnits,
        locationTimezoneDesktopBorder,
        locationTimezoneTabletBorder,
        locationTimezoneMobileBorder,
        locationTimezoneBorderLink,

        locationTimezoneBorderRadiusUnits,
        locationTimezoneDesktopBorderRadius,
        locationTimezoneTabBorderRadius,
        locationTimezoneMobileBorderRadius,
        locationTimezoneBorderRadiusLink,
        locationTimezoneBoxShadowValues,
        locationTimezoneBoxShadowCssValue,

		locationTimezonePaddingUnits,
        locationTimezoneDesktopPadding,
        locationTimezoneTabPadding,
        locationTimezoneMobilePadding,
        locationTimezonePaddingLink,
        locationTimezoneMarginUnits,
        locationTimezoneDesktopMargin,
        locationTimezoneTabMargin,
        locationTimezoneMobileMargin,
        locationTimezoneMarginLink,

		infoBoxBgColorTypeSwitcher,
        infoBoxBgColorType,
        infoBoxBgHoverColorType,
        infoBoxBgColor,
        infoBoxBgHoverColor,
        infoBoxBgGradientColor,
        infoBoxBgHoverGradientColor,
        infoBoxBgCustomGradientColorSwitcher,
        infoBoxBgCustomGradientColor,
        infoBoxBgHoverCustomGradientColorSwitcher,
        infoBoxBgHoverCustomGradientColor,

		infoBoxOffStatusBgColorTypeSwitcher,
        infoBoxOffStatusBgColorType,
        infoBoxOffStatusBgHoverColorType,
        infoBoxOffStatusBgColor,
        infoBoxOffStatusBgHoverColor,
        infoBoxOffStatusBgGradientColor,
        infoBoxOffStatusBgHoverGradientColor,
        infoBoxOffStatusBgCustomGradientColorSwitcher,
        infoBoxOffStatusBgCustomGradientColor,
        infoBoxOffStatusBgHoverCustomGradientColorSwitcher,
        infoBoxOffStatusBgHoverCustomGradientColor,

		infoBoxBorder,
        infoBoxBorderColor,
        infoBoxBorderHoverColor,
        infoBoxBorderColorSwitcher,
        infoBoxOffStatusBorderColor,
        infoBoxOffStatusBorderHoverColor,
        infoBoxOffStatusBorderColorSwitcher,

        infoBoxBorderUnits,
        infoBoxDesktopBorder,
        infoBoxTabletBorder,
        infoBoxMobileBorder,
        infoBoxBorderLink,

        infoBoxBorderRadiusUnits,
        infoBoxDesktopBorderRadius,
        infoBoxTabBorderRadius,
        infoBoxMobileBorderRadius,
        infoBoxBorderRadiusLink,
        infoBoxBoxShadowValues,
        infoBoxBoxShadowCssValue,
        infoBoxOffStatusBoxShadowValues,
        infoBoxOffStatusBoxShadowCssValue,

		infoBoxPaddingUnits,
        infoBoxDesktopPadding,
        infoBoxTabPadding,
        infoBoxMobilePadding,
        infoBoxPaddingLink,
        infoBoxMarginUnits,
        infoBoxDesktopMargin,
        infoBoxTabMargin,
        infoBoxMobileMargin,
        infoBoxMarginLink,

		statusTextGlobalTypoSwitcher,
		statusTextGlobalTypographyData,
		statusTextGlobalTypoType,
		statusTextGlobalTypoOption,
		statusTextFontFamily,
		statusTextFontSize,
		statusTextFontSizeUnits,
		statusTextFontWeight,
		statusTextFontStyle,
		statusTextTransform,
		statusTextDecoration,
		statusTextLetterSpacing,
		statusTextLetterSpacingUnits,
		statusTextLineHeight,
		statusTextLineHeightUnits,

		statusPaddingUnits,
        statusDesktopPadding,
        statusTabPadding,
        statusMobilePadding,
        statusPaddingLink,

		statusOpenColorSwitcher,
		statusOpenColor,
		statusOpenHoverColor,
		statusCloseColorSwitcher,
		statusCloseColor,
		statusCloseHoverColor,
		
		statusOpenBgColorSwitcher,
		statusOpenBgColor,
		statusOpenHoverBgColor,
		statusCloseBgColorSwitcher,
		statusCloseBgColor,
		statusCloseHoverBgColor,

		statusOpenBorder,
        statusOpenBorderColor,
        statusOpenBorderHoverColor,
        statusOpenBorderColorSwitcher,

        statusOpenBorderUnits,
        statusOpenDesktopBorder,
        statusOpenTabletBorder,
        statusOpenMobileBorder,
        statusOpenBorderLink,

        statusOpenBorderRadiusUnits,
        statusOpenDesktopBorderRadius,
        statusOpenTabBorderRadius,
        statusOpenMobileBorderRadius,
        statusOpenBorderRadiusLink,

		statusCloseBorder,
        statusCloseBorderColor,
        statusCloseBorderHoverColor,
        statusCloseBorderColorSwitcher,

        statusCloseBorderUnits,
        statusCloseDesktopBorder,
        statusCloseTabletBorder,
        statusCloseMobileBorder,
        statusCloseBorderLink,

        statusCloseBorderRadiusUnits,
        statusCloseDesktopBorderRadius,
        statusCloseTabBorderRadius,
        statusCloseMobileBorderRadius,
        statusCloseBorderRadiusLink,

		noticeTextGlobalTypoSwitcher,
		noticeTextGlobalTypographyData,
		noticeTextGlobalTypoType,
		noticeTextGlobalTypoOption,
		noticeTextFontFamily,
		noticeTextFontSize,
		noticeTextFontSizeUnits,
		noticeTextFontWeight,
		noticeTextFontStyle,
		noticeTextTransform,
		noticeTextDecoration,
		noticeTextLetterSpacing,
		noticeTextLetterSpacingUnits,
		noticeTextLineHeight,
		noticeTextLineHeightUnits,
        
        noticeTextColorSwitcher,
		noticeTextColor,
		noticeTextHoverColor,
        statusOffNoticeTextColorSwitcher,
		statusOffNoticeTextColor,
		statusOffNoticeTextHoverColor,

        timezoneGlobalZIndex,
        timezoneOverflow,

        // Position
        timezonePositionType,
        timezoneHZOrientationType,
        timezoneVROrientationType,
        timezoneHZLeftOffset,
        timezoneHZLeftOffsetUnits,
        timezoneHZRightOffset,
        timezoneHZRightOffsetUnits,
        timezoneVRTopOffset,
        timezoneVRTopOffsetUnits,
        timezoneVRBottomOffset,
        timezoneVRBottomOffsetUnits,

        timezoneGlobalWraperClass,
        timezoneGlobalWraperID,

        timezonePaddingUnits,
        timezoneDesktopPadding,
        timezoneTabPadding,
        timezoneMobilePadding,
        timezonePaddingLink,
        timezoneMarginUnits,
        timezoneDesktopMargin,
        timezoneTabMargin,
        timezoneMobileMargin,
        timezoneMarginLink,

        /** Start Background */
        timezoneGlobalBgColorSwitcher,
        timezoneGlobalBgNormalBackgroundType,
        timezoneGlobalBgNormalClassicColor,
        timezoneGlobalBgNormalGradientColor,
        timezoneGlobalBgNormalCustomGradientSwitcher,
        timezoneGlobalBgNormalCustomGradientInputValue,
        timezoneGlobalBgNormalBackgroundImageUrl,
        timezoneGlobalBgNormalBackgroundImagePosition,
        timezoneGlobalBgNormalBackgroundImageAttachment,
        timezoneGlobalBgNormalBackgroundImageRepeat,
        timezoneGlobalBgNormalBackgroundImageSize,

        timezoneGlobalBgHoverBackgroundType,
        timezoneGlobalBgHoverClassicColor,
        timezoneGlobalBgHoverGradientColor,
        timezoneGlobalBgHoverCustomGradientSwitcher,
        timezoneGlobalBgHoverCustomGradientInputValue,
        timezoneGlobalBgHoverBackgroundImageUrl,
        timezoneGlobalBgHoverBackgroundImagePosition,
        timezoneGlobalBgHoverBackgroundImageAttachment,
        timezoneGlobalBgHoverBackgroundImageRepeat,
        timezoneGlobalBgHoverBackgroundImageSize,

        timezoneGlobalBorder,
        timezoneGlobalBorderColorSwitcher,
        timezoneGlobalBorderColor,
        timezoneGlobalBorderHoverColor,
        timezoneGlobalBorderUnits,
        timezoneGlobalBorderDesktop,
        timezoneGlobalBorderTablet,
        timezoneGlobalBorderMobile,
        timezoneGlobalBorderLink,

        timezoneGlobalBorderRadiusUnits,
        timezoneGlobalBorderRadiusDesktop,
        timezoneGlobalBorderRadiusTablet,
        timezoneGlobalBorderRadiusMobile,
        timezoneGlobalBorderRadiusLink,

        timezoneGlobalBoxShadowSwitcher,
        timezoneGlobalBoxShadowValues,
        timezoneGlobalBoxShadowCssValue,
        timezoneGlobalBoxShadowHoverValues,
        timezoneGlobalBoxShadowHoverCssValue,

        timezoneDesktopSwitcher,
		timezoneTabletSwitcher,
		timezoneMobileSwitcher,

        timezoneCustomCSS,
        blockStyle
        /** End Global Style */

	} = attributes;

	const deviceType= useDeviceType();

	useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-timezone-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    useEffect(() => {
        if (timezoneLocationTextFontFamily !== 'Default') {
            loadGoogleFont(timezoneLocationTextFontFamily);
        }
        if (timezoneTimeTextFontFamily !== 'Default') {
            loadGoogleFont(timezoneTimeTextFontFamily);
        }
        if (timezoneTextFontFamily !== 'Default') {
            loadGoogleFont(timezoneTextFontFamily);
        }
        if (statusTextFontFamily !== 'Default') {
            loadGoogleFont(statusTextFontFamily);
        }
        if (noticeTextFontFamily !== 'Default') {
            loadGoogleFont(noticeTextFontFamily);
        }
    }, [
        timezoneLocationTextFontFamily, 
        timezoneTimeTextFontFamily, 
        timezoneTextFontFamily, 
        statusTextFontFamily, 
        noticeTextFontFamily
    ]);

	// State variables
    const [selectedDate, setSelectedDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');

    // Initialize attributes with proper default values
    useEffect(() => {
        const updates = {};
        
        // Initialize timezones
        if (!timezones || timezones.length === 0) {
            updates.timezones = getAllTimezones();
            updates.timezone = timezone || 'Asia/Dhaka';
            updates.timezoneMode = timezoneMode || 'auto';
        }

        // Set default time values
        const isValidTime = (time) => time && time.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/);
        
        if (!isValidTime(startTime)) updates.startTime = '09:00';
        if (!isValidTime(endTime)) updates.endTime = '17:00';

        // Set default values
        const defaults = {
            weekendDays: ['0', '6'],
            useMonthlySchedule: false,
            useUTCTimezoneFormat: false,
            weekendMessage: 'Weekend',
            holidayMessage: 'Holiday',
            separator: ' | ',
            openStatusText: 'Open',
            closedStatusText: 'Closed',
            beforeTimeText: 'Will start at',
            afterTimeText: 'Will close at',
            timeFormat: 'hh:mm A',
            useCustomLocation: true,
            showTimezoneOffset: true,
            showRemainingTime: true,
            remainingTimeLabel: 'Remaining: ',
            remainingTimeFormat: 'hours-minutes'
        };

        Object.keys(defaults).forEach(key => {
            if (attributes[key] === undefined || attributes[key] === null) {
                updates[key] = defaults[key];
            }
        });

        if (beforeTimeText === 'Wll start at') {
            updates.beforeTimeText = 'Will start at';
        }

        if (Object.keys(updates).length > 0) {
            setAttributes(updates);
        }
    }, [attributes, setAttributes]);

    // Helper functions
    const getWeekdayName = useCallback((dayNumber) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[dayNumber] || '';
    }, []);

    const getAutoTimezone = useCallback(() => {
        try { 
            return Intl.DateTimeFormat().resolvedOptions().timeZone; 
        } catch (error) { 
            return 'Asia/Dhaka'; 
        }
    }, []);

    // Timezone formatting
    const getFormattedTimezone = useCallback((timezone) => {
        try {
            const now = new Date();
            
            // Get country name from timezone
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

            const country = getCountryFromTimezone(timezone);
            const city = timezone.split('/').pop().replace(/_/g, ' ');
            
            if (useUTCTimezoneFormat) {
                const formatter = new Intl.DateTimeFormat('en-US', {
                    timeZone: timezone,
                    timeZoneName: 'longOffset'
                });
                const parts = formatter.formatToParts(now);
                const offsetPart = parts.find(part => part.type === 'timeZoneName');
                
                if (offsetPart && offsetPart.value.startsWith('GMT')) {
                    const offset = offsetPart.value.replace('GMT', '').replace('UTC', '');
                    return `${country} - ${city} (UTC${offset})`;
                }
            } else {
                const offset = now.toLocaleString('en-US', { 
                    timeZone: timezone, 
                    timeZoneName: 'shortOffset' 
                }).split(' ').pop();
                
                return `${country} - ${city} (${offset})`;
            }
        } catch (error) {
            const city = timezone?.split('/').pop()?.replace(/_/g, ' ') || 'Local Time';
            return useUTCTimezoneFormat ? `Bangladesh - ${city} (UTC+06:00)` : `Bangladesh - ${city} (GMT+6)`;
        }
        
        return 'Unknown Timezone';
    }, [useUTCTimezoneFormat]);

    const getAllTimezones = useCallback(() => {
        try {
            const timezoneList = Intl.supportedValuesOf('timeZone');
            const options = timezoneList.map(tz => {
                try {
                    const now = new Date();
                    
                    // Get country name from timezone
                    const getCountryFromTimezone = (timezone) => {
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
                            'America/Toronto': 'Canada',
                            'Europe/London': 'UK',
                            'Europe/Paris': 'France',
                            'Europe/Berlin': 'Germany',
                            'Europe/Moscow': 'Russia',
                            'Australia/Sydney': 'Australia',
                            'Pacific/Auckland': 'New Zealand',
                            'Africa/Cairo': 'Egypt',
                            'Africa/Johannesburg': 'South Africa'
                        };
                        
                        return countryMap[timezone] || timezone.split('/')[0];
                    };

                    const country = getCountryFromTimezone(tz);
                    const city = tz.split('/').pop().replace(/_/g, ' ');
                    
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
                        
                        return { label: `${country} - ${city} (UTC${offsetString})`, value: tz };
                    } else {
                        const offset = now.toLocaleString('en-US', { 
                            timeZone: tz, 
                            timeZoneName: 'shortOffset' 
                        }).split(' ').pop();
                        
                        return { label: `${country} - ${city} (${offset})`, value: tz };
                    }
                } catch (e) {
                    const country = tz.split('/')[0];
                    const city = tz.split('/').pop().replace(/_/g, ' ');
                    return { label: `${country} - ${city}`, value: tz };
                }
            });
            
            return options.sort((a, b) => a.label.localeCompare(b.label));
        } catch (error) {
            const fallbackTimezones = [
                { label: 'Bangladesh - Dhaka (GMT+6)', value: 'Asia/Dhaka' }, 
                { label: 'UTC (GMT+0)', value: 'UTC' },
                { label: 'USA - New York (GMT-5)', value: 'America/New_York' },
                { label: 'USA - Los Angeles (GMT-8)', value: 'America/Los_Angeles' },
                { label: 'UK - London (GMT+0)', value: 'Europe/London' },
                { label: 'India - Kolkata (GMT+5:30)', value: 'Asia/Kolkata' },
                { label: 'Singapore - Singapore (GMT+8)', value: 'Asia/Singapore' },
                { label: 'Japan - Tokyo (GMT+9)', value: 'Asia/Tokyo' }
            ];
            
            if (useUTCTimezoneFormat) {
                return fallbackTimezones.map(tz => ({
                    ...tz,
                    label: tz.label.replace(/GMT([+-]\d+(?::\d+)?)/g, (match, offset) => {
                        return offset.includes(':') ? `UTC${offset}` : `UTC${offset}:00`;
                    })
                }));
            }
            
            return fallbackTimezones;
        }
    }, [useUTCTimezoneFormat]);

    // Core business logic
    const getEffectiveTimezone = useCallback(() => {
        return timezoneMode === 'auto' ? getAutoTimezone() : timezone;
    }, [timezoneMode, timezone, getAutoTimezone]);

    const getCurrentTimeInTimezone = useCallback(() => {
        const effectiveTimezone = getEffectiveTimezone();
        if (!effectiveTimezone) return '';
        
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

    const getLocationDisplayName = useCallback(() => {
        if (useCustomLocation && location) {
            return location;
        }
        
        // Since removed countries, return location or default
        return location || 'Unknown Location';
    }, [useCustomLocation, location]);

    // Office hours and status logic
    const getCurrentMonthSchedule = useCallback(() => {
        if (!useMonthlySchedule || !monthlySchedules || monthlySchedules.length === 0) return null;
        return monthlySchedules.find(schedule => schedule.month === new Date().getMonth().toString());
    }, [useMonthlySchedule, monthlySchedules]);

    const getEffectiveOfficeHours = useCallback(() => {
        if (useMonthlySchedule) {
            const currentSchedule = getCurrentMonthSchedule();
            if (currentSchedule) {
                return { startTime: currentSchedule.startTime, endTime: currentSchedule.endTime };
            }
        }
        return { startTime, endTime };
    }, [useMonthlySchedule, getCurrentMonthSchedule, startTime, endTime]);

    const getRemainingTime = useCallback(() => {
        const effectiveTimezone = getEffectiveTimezone();
        const { endTime: effectiveEndTime } = getEffectiveOfficeHours();

        const isValidTime = (time) => time && time.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/);

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

            if (endTotal < currentTotal) endTotal += 24 * 60;

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

    // Status calculation
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
        
        const isValidTime = (time) => time && time.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/);

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

    /**
     * Inspector General Controls Start
    */
    const generalControls = (
        <>  
            <PanelBody title={__("Element Visibility", "frontis-blocks")} initialOpen={true}>
                <BaseControl 
                    className="fb-setting-show-hide-elements"
                >
                    <ToggleControl
                        label={__("Show Status", "frontis-blocks")}
                        checked={showStatusSwitcher}
                        onChange={(value) => setAttributes({ showStatusSwitcher: value })}
                    />
                    <ToggleControl
                        label="Monthly Schedule"
                        checked={!!useMonthlySchedule}
                        onChange={(value) => setAttributes({ useMonthlySchedule: value })}
                    />
                    {showStatusSwitcher && (
                        <ToggleControl
                            label="Remaining Time"
                            checked={!!showRemainingTime}
                            onChange={(value) => setAttributes({ showRemainingTime: value })}
                        />
                    )}
                    <ToggleControl
                        label="UTC Timezone"
                        checked={!!useUTCTimezoneFormat}
                        onChange={(value) => setAttributes({ useUTCTimezoneFormat: value })}
                    />
                    <ToggleControl
                        label="Timezone Offset"
                        checked={!!showTimezoneOffset}
                        onChange={(value) => setAttributes({ showTimezoneOffset: value })}
                    />
                    <ToggleControl
                        label="Show Separator"
                        checked={showSeparatorSwitcher}
                        onChange={(value) => setAttributes({ showSeparatorSwitcher: value })}
                    />
                </BaseControl>
            </PanelBody>
            
            <PanelBody title="Time" initialOpen={false}>
                <BaseControl label="Timezone Track">
                    <SelectControl
                        options={TIMEZONE}
                        value={timezoneMode}
                        onChange={(value) => setAttributes({ timezoneMode: value })}
                    />
                </BaseControl>

                {timezoneMode === 'auto' ? (
                    <TextControl 
                        label="Timezone" 
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

                <BaseControl>
                    <ToggleControl
                        label="Location Customize"
                        checked={!!useCustomLocation}
                        onChange={(value) => setAttributes({ useCustomLocation: value })}
                    />
                </BaseControl>

                {useCustomLocation ? (
                    <TextControl
                        value={location || ''}
                        onChange={(value) => setAttributes({ location: value })}
                        placeholder="e.g., Dhaka, Bangladesh"
                        className="fb-custom-location"
                    />
                ) : (
                    <TextControl
                        value={getLocationDisplayName()}
                        readOnly
                    />
                )}

                <BaseControl label="Select Format">
                    <Select2
                        options={timeFormatOptions}
                        value={getSelectedOption(timeFormatOptions, timeFormat || 'hh:mm A')}
                        onChange={(opt) => setAttributes({ timeFormat: opt?.value || 'hh:mm A' })}
                        isClearable={false}
                        className="fb-select2-control"
                    />
                </BaseControl>
                {effectiveTimezone && (
                    <TextControl
                        label="Formated Time"
                        value={currentTime || 'Loading...'}
                        readOnly
                    />
                )}

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
            
            </PanelBody>
            
            { showStatusSwitcher && (
                <>
                    <PanelBody title={`${useMonthlySchedule ? "Monthly" : "Current"} Schedule`} initialOpen={false}>
                        <TextControl
                            label="Current Status"
                            value={currentStatus}
                            readOnly
                        />
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

                        {useMonthlySchedule && (
                            <>
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
                                    <>
                                        <strong>Monthly Schedules ({monthlySchedules.length}/12):</strong>
                                        <div style={{ marginTop: '10px', borderRadius: '4px' }}>
                                            {monthlySchedules.map(schedule => (
                                                <div key={schedule.month} style={{ padding: '4px', margin: '5px 0 10px 0', border: '1px solid #e0e0e0', backgroundColor: '#fff' }}>
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
                                    </>
                                ) : (
                                    <div style={{ padding: '30px 20px', textAlign: 'center', border: '2px dashed #ddd', borderRadius: '4px', backgroundColor: 'rgb(248, 249, 250)' }}>
                                        <p style={{ marginBottom: '10px' }}>No monthly schedules added yet</p>
                                        <p style={{ fontSize: '0.9em', color: '#666' }}>Add months above to set custom hours for each month</p>
                                    </div>
                                )}
                            </>
                        )}

                        {showRemainingTime && (
                            <>
                                <TextControl
                                    label="Label"
                                    value={remainingTimeLabel || ''}
                                    onChange={(value) => setAttributes({ remainingTimeLabel: value })}
                                    placeholder="Remaining:"
                                />
                                
                                <BaseControl label="Time Format">
                                    <SelectControl
                                        options={[
                                            { label: 'hour minutes', value: 'hours-minutes' },
                                            { label: 'h m', value: 'short' },
                                            { label: 'minutes', value: 'minutes-only' },
                                            { label: 'hours', value: 'decimal' }
                                        ]}
                                        value={remainingTimeFormat || 'hours-minutes'}
                                        onChange={(value) => setAttributes({ remainingTimeFormat: value })}
                                    />
                                </BaseControl>
                            </>
                        )}
                    </PanelBody>
                        
                    <PanelBody title="Holiday & Weekend" initialOpen={false}>
                        <BaseControl label="Add Weekend">
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
                        <BaseControl>
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
                                                onClick={() => removeHoliday(holiday)}
                                                style={{padding: '6px 8px', height: 'auto'}}
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </PanelBody>
                    <PanelBody title="Text" initialOpen={false}>
                        <TextControl
                            label="Status ON"
                            value={openStatusText || ''}
                            onChange={(value) => setAttributes({ openStatusText: value })}
                            placeholder="e.g., Open, Available, etc."
                        />
                        <TextControl
                            label="Status OFF"
                            value={closedStatusText || ''}
                            onChange={(value) => setAttributes({ closedStatusText: value })}
                            placeholder="e.g., Closed, Off, etc."
                        />
                        <TextControl
                            label="ON Notice"
                            value={beforeTimeText || ''}
                            onChange={(value) => setAttributes({ beforeTimeText: value })}
                            placeholder="e.g., Start at, Opens at, etc."
                        />
                        <TextControl
                            label="OFF Notice"
                            value={afterTimeText || ''}
                            onChange={(value) => setAttributes({ afterTimeText: value })}
                            placeholder="e.g., Will close at, Closes at, etc."
                        />
                        <TextControl
                            label="Weekend Info"
                            value={weekendMessage || ''}
                            onChange={(value) => setAttributes({ weekendMessage: value })}
                            placeholder="Weekend"
                        />
                        <TextControl
                            label="Holiday Info"
                            value={holidayMessage || ''}
                            onChange={(value) => setAttributes({ holidayMessage: value })}
                            placeholder="Holiday"
                        />
                    </PanelBody>
                </>
            )}
            
        </>
    );
    // Inspector General Control End
	
	// locatoin timezone margin and padding style start
	//padding
	const locationTimezonePaddingUnitsHandler = (unit) => {
        setAttributes({
            locationTimezonePaddingUnits: {
                ...locationTimezonePaddingUnits,
                [deviceType]: unit
            }
        });
    };

	const locationTimezonePaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (locationTimezonePaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        locationTimezoneDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        locationTimezoneTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        locationTimezoneMobilePadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ locationTimezoneDesktopPadding: { ...locationTimezoneDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ locationTimezoneTabPadding: { ...locationTimezoneTabPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ locationTimezoneMobilePadding: { ...locationTimezoneMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

	const locationTimezonePaddingLinkBtn = () => {
        setAttributes({
            locationTimezonePaddingLink: !locationTimezonePaddingLink
        });
    };
	const locationTimezoneDesktopPaddingWidth = `${locationTimezoneDesktopPadding?.top}${locationTimezonePaddingUnits?.Desktop} ${locationTimezoneDesktopPadding?.right}${locationTimezonePaddingUnits?.Desktop} ${locationTimezoneDesktopPadding?.bottom}${locationTimezonePaddingUnits?.Desktop} ${locationTimezoneDesktopPadding?.left}${locationTimezonePaddingUnits?.Desktop}`;

    const locationTimezoneTabletPaddingWidth = `${locationTimezoneTabPadding?.top}${locationTimezonePaddingUnits?.Tablet} ${locationTimezoneTabPadding?.right}${locationTimezonePaddingUnits?.Tablet} ${locationTimezoneTabPadding?.bottom}${locationTimezonePaddingUnits?.Tablet} ${locationTimezoneTabPadding?.left}${locationTimezonePaddingUnits?.Tablet}`;
	
    const locationTimezoneMobilePaddingWidth = `${locationTimezoneMobilePadding?.top}${locationTimezonePaddingUnits?.Mobile} ${locationTimezoneMobilePadding?.right}${locationTimezonePaddingUnits?.Mobile} ${locationTimezoneMobilePadding?.bottom}${locationTimezonePaddingUnits?.Mobile} ${locationTimezoneMobilePadding?.left}${locationTimezonePaddingUnits?.Mobile}`;
	
	//margin
	const locationTimezoneMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (locationTimezoneMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        locationTimezoneDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        locationTimezoneTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        locationTimezoneMobileMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ locationTimezoneDesktopMargin: { ...locationTimezoneDesktopMargin, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ locationTimezoneTabMargin: { ...locationTimezoneTabMargin, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ locationTimezoneMobileMargin: { ...locationTimezoneMobileMargin, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };
	const locationTimezoneMarginLinkBtn = () => {
        setAttributes({
            locationTimezoneMarginLink: !locationTimezoneMarginLink
        });
    };
	const locationTimezoneMarginUnitsHandler = (unit) => {
        setAttributes({
            locationTimezoneMarginUnits: {
                ...locationTimezoneMarginUnits,
                [deviceType]: unit
            }
        });
    };
	const locationTimezoneDesktopMarginWidth = `${locationTimezoneDesktopMargin?.top}${locationTimezoneMarginUnits?.Desktop} ${locationTimezoneDesktopMargin?.right}${locationTimezoneMarginUnits?.Desktop} ${locationTimezoneDesktopMargin?.bottom}${locationTimezoneMarginUnits?.Desktop} ${locationTimezoneDesktopMargin?.left}${locationTimezoneMarginUnits?.Desktop}`;
    const locationTimezoneTabletMarginWidth = `${locationTimezoneTabMargin?.top}${locationTimezoneMarginUnits?.Tablet} ${locationTimezoneTabMargin?.right}${locationTimezoneMarginUnits?.Tablet} ${locationTimezoneTabMargin?.bottom}${locationTimezoneMarginUnits?.Tablet} ${locationTimezoneTabMargin?.left}${locationTimezoneMarginUnits?.Tablet}`;
    const locationTimezoneMobileMarginWidth = `${locationTimezoneMobileMargin?.top}${locationTimezoneMarginUnits?.Mobile} ${locationTimezoneMobileMargin?.right}${locationTimezoneMarginUnits?.Mobile} ${locationTimezoneMobileMargin?.bottom}${locationTimezoneMarginUnits?.Mobile} ${locationTimezoneMobileMargin?.left}${locationTimezoneMarginUnits?.Mobile}`;
	// locatoin timezone margin and padding style end

	// info box margin and padding style start
	//padding
	const infoBoxPaddingUnitsHandler = (unit) => {
        setAttributes({
            infoBoxPaddingUnits: {
                ...infoBoxPaddingUnits,
                [deviceType]: unit
            }
        });
    };

	const infoBoxPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (infoBoxPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        infoBoxDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        infoBoxTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        infoBoxMobilePadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ infoBoxDesktopPadding: { ...infoBoxDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ infoBoxTabPadding: { ...infoBoxTabPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ infoBoxMobilePadding: { ...infoBoxMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

	const infoBoxPaddingLinkBtn = () => {
        setAttributes({
            infoBoxPaddingLink: !infoBoxPaddingLink
        });
    };
	const infoBoxDesktopPaddingWidth = `${infoBoxDesktopPadding?.top}${infoBoxPaddingUnits?.Desktop} ${infoBoxDesktopPadding?.right}${infoBoxPaddingUnits?.Desktop} ${infoBoxDesktopPadding?.bottom}${infoBoxPaddingUnits?.Desktop} ${infoBoxDesktopPadding?.left}${infoBoxPaddingUnits?.Desktop}`;
    const infoBoxTabletPaddingWidth = `${infoBoxTabPadding?.top}${infoBoxPaddingUnits?.Tablet} ${infoBoxTabPadding?.right}${infoBoxPaddingUnits?.Tablet} ${infoBoxTabPadding?.bottom}${infoBoxPaddingUnits?.Tablet} ${infoBoxTabPadding?.left}${infoBoxPaddingUnits?.Tablet}`;
    const infoBoxMobilePaddingWidth = `${infoBoxMobilePadding?.top}${infoBoxPaddingUnits?.Mobile} ${infoBoxMobilePadding?.right}${infoBoxPaddingUnits?.Mobile} ${infoBoxMobilePadding?.bottom}${infoBoxPaddingUnits?.Mobile} ${infoBoxMobilePadding?.left}${infoBoxPaddingUnits?.Mobile}`;
	
	//margin
	const infoBoxMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (infoBoxMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        infoBoxDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        infoBoxTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        infoBoxMobileMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ infoBoxDesktopMargin: { ...infoBoxDesktopMargin, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ infoBoxTabMargin: { ...infoBoxTabMargin, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ infoBoxMobileMargin: { ...infoBoxMobileMargin, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };
	const infoBoxMarginLinkBtn = () => {
        setAttributes({
            infoBoxMarginLink: !infoBoxMarginLink
        });
    };
	const infoBoxMarginUnitsHandler = (unit) => {
        setAttributes({
            infoBoxMarginUnits: {
                ...infoBoxMarginUnits,
                [deviceType]: unit
            }
        });
    };
	const infoBoxDesktopMarginWidth = `${infoBoxDesktopMargin?.top}${infoBoxMarginUnits?.Desktop} ${infoBoxDesktopMargin?.right}${infoBoxMarginUnits?.Desktop} ${infoBoxDesktopMargin?.bottom}${infoBoxMarginUnits?.Desktop} ${infoBoxDesktopMargin?.left}${infoBoxMarginUnits?.Desktop}`;

    const infoBoxTabletMarginWidth = `${infoBoxTabMargin?.top}${infoBoxMarginUnits?.Tablet} ${infoBoxTabMargin?.right}${infoBoxMarginUnits?.Tablet} ${infoBoxTabMargin?.bottom}${infoBoxMarginUnits?.Tablet} ${infoBoxTabMargin?.left}${infoBoxMarginUnits?.Tablet}`;

    const infoBoxMobileMarginWidth = `${infoBoxMobileMargin?.top}${infoBoxMarginUnits?.Mobile} ${infoBoxMobileMargin?.right}${infoBoxMarginUnits?.Mobile} ${infoBoxMobileMargin?.bottom}${infoBoxMarginUnits?.Mobile} ${infoBoxMobileMargin?.left}${infoBoxMarginUnits?.Mobile}`;
	// info box margin and padding style end

	// Start locatoin timezone Border, radius, box-shadow style
	const locationTimezoneBorderUnitsHandler = (unit) => {
        setAttributes({
            locationTimezoneBorderUnits: {
                ...locationTimezoneBorderUnits,
                [deviceType]: unit
            }
        });
    };

	const locationTimezoneBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            locationTimezoneBorderRadiusUnits: {
                ...locationTimezoneBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };

	const locationTimezoneDesktopBorderRadiusWidth = `${locationTimezoneDesktopBorderRadius?.top}${locationTimezoneBorderRadiusUnits?.Desktop} ${locationTimezoneDesktopBorderRadius?.right}${locationTimezoneBorderRadiusUnits?.Desktop} ${locationTimezoneDesktopBorderRadius?.bottom}${locationTimezoneBorderRadiusUnits?.Desktop} ${locationTimezoneDesktopBorderRadius?.left}${locationTimezoneBorderRadiusUnits?.Desktop}`;

    const locationTimezoneTabletBorderRadiusWidth = `${locationTimezoneTabBorderRadius?.top}${locationTimezoneBorderRadiusUnits?.Tablet} ${locationTimezoneTabBorderRadius?.right}${locationTimezoneBorderRadiusUnits?.Tablet} ${locationTimezoneTabBorderRadius?.bottom}${locationTimezoneBorderRadiusUnits?.Tablet} ${locationTimezoneTabBorderRadius?.left}${locationTimezoneBorderRadiusUnits?.Tablet}`;
	
    const locationTimezoneMobileBorderRadiusWidth = `${locationTimezoneMobileBorderRadius?.top}${locationTimezoneBorderRadiusUnits?.Mobile} ${locationTimezoneMobileBorderRadius?.right}${locationTimezoneBorderRadiusUnits?.Mobile} ${locationTimezoneMobileBorderRadius?.bottom}${locationTimezoneBorderRadiusUnits?.Mobile} ${locationTimezoneMobileBorderRadius?.left}${locationTimezoneBorderRadiusUnits?.Mobile}`;

	const locationTimezoneBorderLinkBtn = () => {
        setAttributes({
            locationTimezoneBorderLink: !locationTimezoneBorderLink
        });
    };

	const locationTimezoneDesktopBorderWidth = `${locationTimezoneDesktopBorder?.top}${locationTimezoneBorderUnits?.Desktop} ${locationTimezoneDesktopBorder?.right}${locationTimezoneBorderUnits?.Desktop} ${locationTimezoneDesktopBorder?.bottom}${locationTimezoneBorderUnits?.Desktop} ${locationTimezoneDesktopBorder?.left}${locationTimezoneBorderUnits?.Desktop}`;
    
	const locationTimezoneTabletBorderWidth = `${locationTimezoneTabletBorder?.top}${locationTimezoneBorderUnits?.Tablet} ${locationTimezoneTabletBorder?.right}${locationTimezoneBorderUnits?.Tablet} ${locationTimezoneTabletBorder?.bottom}${locationTimezoneBorderUnits?.Tablet} ${locationTimezoneTabletBorder?.left}${locationTimezoneBorderUnits?.Tablet}`;
    
	const locationTimezoneMobileBorderWidth = `${locationTimezoneMobileBorder?.top}${locationTimezoneBorderUnits?.Mobile} ${locationTimezoneMobileBorder?.right}${locationTimezoneBorderUnits?.Mobile} ${locationTimezoneMobileBorder?.bottom}${locationTimezoneBorderUnits?.Mobile} ${locationTimezoneMobileBorder?.left}${locationTimezoneBorderUnits?.Mobile}`;

	const locationTimezoneBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (locationTimezoneBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        locationTimezoneDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        locationTimezoneTabletBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        locationTimezoneMobileBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ locationTimezoneDesktopBorder: { ...locationTimezoneDesktopBorder, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ locationTimezoneTabletBorder: { ...locationTimezoneTabletBorder, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ locationTimezoneMobileBorder: { ...locationTimezoneMobileBorder, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

	const locationTimezoneBorderRadiusLinkBtn = () => {
        setAttributes({
            locationTimezoneBorderRadiusLink: !locationTimezoneBorderRadiusLink
        });
    };

	const locationTimezoneBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (locationTimezoneBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        locationTimezoneDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        locationTimezoneTabBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        locationTimezoneMobileBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ locationTimezoneDesktopBorderRadius: { ...locationTimezoneDesktopBorderRadius, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ locationTimezoneTabBorderRadius: { ...locationTimezoneTabBorderRadius, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ locationTimezoneMobileBorderRadius: { ...locationTimezoneMobileBorderRadius, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };
	// End locatoin timezone Border, radius, box-shadow style

	// Start office info Box Border, radius, box-shadow style
	const infoBoxBorderUnitsHandler = (unit) => {
        setAttributes({
            infoBoxBorderUnits: {
                ...infoBoxBorderUnits,
                [deviceType]: unit
            }
        });
    };

	const infoBoxBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            infoBoxBorderRadiusUnits: {
                ...infoBoxBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };

	const infoBoxDesktopBorderRadiusWidth = `${infoBoxDesktopBorderRadius?.top}${infoBoxBorderRadiusUnits?.Desktop} ${infoBoxDesktopBorderRadius?.right}${infoBoxBorderRadiusUnits?.Desktop} ${infoBoxDesktopBorderRadius?.bottom}${infoBoxBorderRadiusUnits?.Desktop} ${infoBoxDesktopBorderRadius?.left}${infoBoxBorderRadiusUnits?.Desktop}`;

    const infoBoxTabletBorderRadiusWidth = `${infoBoxTabBorderRadius?.top}${infoBoxBorderRadiusUnits?.Tablet} ${infoBoxTabBorderRadius?.right}${infoBoxBorderRadiusUnits?.Tablet} ${infoBoxTabBorderRadius?.bottom}${infoBoxBorderRadiusUnits?.Tablet} ${infoBoxTabBorderRadius?.left}${infoBoxBorderRadiusUnits?.Tablet}`;

    const infoBoxMobileBorderRadiusWidth = `${infoBoxMobileBorderRadius?.top}${infoBoxBorderRadiusUnits?.Mobile} ${infoBoxMobileBorderRadius?.right}${infoBoxBorderRadiusUnits?.Mobile} ${infoBoxMobileBorderRadius?.bottom}${infoBoxBorderRadiusUnits?.Mobile} ${infoBoxMobileBorderRadius?.left}${infoBoxBorderRadiusUnits?.Mobile}`;

	const infoBoxBorderLinkBtn = () => {
        setAttributes({
            infoBoxBorderLink: !infoBoxBorderLink
        });
    };

	const infoBoxDesktopBorderWidth = `${infoBoxDesktopBorder?.top}${infoBoxBorderUnits?.Desktop} ${infoBoxDesktopBorder?.right}${infoBoxBorderUnits?.Desktop} ${infoBoxDesktopBorder?.bottom}${infoBoxBorderUnits?.Desktop} ${infoBoxDesktopBorder?.left}${infoBoxBorderUnits?.Desktop}`;
    
	const infoBoxTabletBorderWidth = `${infoBoxTabletBorder?.top}${infoBoxBorderUnits?.Tablet} ${infoBoxTabletBorder?.right}${infoBoxBorderUnits?.Tablet} ${infoBoxTabletBorder?.bottom}${infoBoxBorderUnits?.Tablet} ${infoBoxTabletBorder?.left}${infoBoxBorderUnits?.Tablet}`;
    
	const infoBoxMobileBorderWidth = `${infoBoxMobileBorder?.top}${infoBoxBorderUnits?.Mobile} ${infoBoxMobileBorder?.right}${infoBoxBorderUnits?.Mobile} ${infoBoxMobileBorder?.bottom}${infoBoxBorderUnits?.Mobile} ${infoBoxMobileBorder?.left}${infoBoxBorderUnits?.Mobile}`;

	const infoBoxBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (infoBoxBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        infoBoxDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        infoBoxTabletBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        infoBoxMobileBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ infoBoxDesktopBorder: { ...infoBoxDesktopBorder, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ infoBoxTabletBorder: { ...infoBoxTabletBorder, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ infoBoxMobileBorder: { ...infoBoxMobileBorder, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

	const infoBoxBorderRadiusLinkBtn = () => {
        setAttributes({
            infoBoxBorderRadiusLink: !infoBoxBorderRadiusLink
        });
    };

	const infoBoxBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (infoBoxBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        infoBoxDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        infoBoxTabBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        infoBoxMobileBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ infoBoxDesktopBorderRadius: { ...infoBoxDesktopBorderRadius, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ infoBoxTabBorderRadius: { ...infoBoxTabBorderRadius, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ infoBoxMobileBorderRadius: { ...infoBoxMobileBorderRadius, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };
	// End locatoin office info box Border, radius, box-shadow style

	//Status ON/OFF Text Padding
	const statusPaddingUnitsHandler = (unit) => {
        setAttributes({
            statusPaddingUnits: {
                ...statusPaddingUnits,
                [deviceType]: unit
            }
        });
    };

	const statusPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (statusPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        statusDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        statusTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        statusMobilePadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ statusDesktopPadding: { ...statusDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ statusTabPadding: { ...statusTabPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ statusMobilePadding: { ...statusMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

	const statusPaddingLinkBtn = () => {
        setAttributes({
            statusPaddingLink: !statusPaddingLink
        });
    };
	const statusDesktopPaddingWidth = `${statusDesktopPadding?.top}${statusPaddingUnits?.Desktop} ${statusDesktopPadding?.right}${statusPaddingUnits?.Desktop} ${statusDesktopPadding?.bottom}${statusPaddingUnits?.Desktop} ${statusDesktopPadding?.left}${statusPaddingUnits?.Desktop}`;

    const statusTabletPaddingWidth = `${statusTabPadding?.top}${statusPaddingUnits?.Tablet} ${statusTabPadding?.right}${statusPaddingUnits?.Tablet} ${statusTabPadding?.bottom}${statusPaddingUnits?.Tablet} ${statusTabPadding?.left}${locationTimezonePaddingUnits?.Tablet}`;
	
    const statusMobilePaddingWidth = `${statusMobilePadding?.top}${statusPaddingUnits?.Mobile} ${statusMobilePadding?.right}${statusPaddingUnits?.Mobile} ${statusMobilePadding?.bottom}${statusPaddingUnits?.Mobile} ${statusMobilePadding?.left}${statusPaddingUnits?.Mobile}`;

	//End Status ON/OFF Text Padding

	// Start ON Border, radius, box-shadow style
	const statusOpenBorderUnitsHandler = (unit) => {
        setAttributes({
            statusOpenBorderUnits: {
                ...statusOpenBorderUnits,
                [deviceType]: unit
            }
        });
    };

	const statusOpenBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            statusOpenBorderRadiusUnits: {
                ...statusOpenBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };

	const statusOpenDesktopBorderRadiusWidth = `${statusOpenDesktopBorderRadius?.top}${statusOpenBorderRadiusUnits?.Desktop} ${statusOpenDesktopBorderRadius?.right}${statusOpenBorderRadiusUnits?.Desktop} ${statusOpenDesktopBorderRadius?.bottom}${statusOpenBorderRadiusUnits?.Desktop} ${statusOpenDesktopBorderRadius?.left}${statusOpenBorderRadiusUnits?.Desktop}`;

    const statusOpenTabletBorderRadiusWidth = `${statusOpenTabBorderRadius?.top}${statusOpenBorderRadiusUnits?.Tablet} ${statusOpenTabBorderRadius?.right}${statusOpenBorderRadiusUnits?.Tablet} ${statusOpenTabBorderRadius?.bottom}${statusOpenBorderRadiusUnits?.Tablet} ${statusOpenTabBorderRadius?.left}${statusOpenBorderRadiusUnits?.Tablet}`;

    const statusOpenMobileBorderRadiusWidth = `${statusOpenMobileBorderRadius?.top}${statusOpenBorderRadiusUnits?.Mobile} ${statusOpenMobileBorderRadius?.right}${statusOpenBorderRadiusUnits?.Mobile} ${statusOpenMobileBorderRadius?.bottom}${statusOpenBorderRadiusUnits?.Mobile} ${statusOpenMobileBorderRadius?.left}${statusOpenBorderRadiusUnits?.Mobile}`;

	const statusOpenBorderLinkBtn = () => {
        setAttributes({
            statusOpenBorderLink: !statusOpenBorderLink
        });
    };

	const statusOpenDesktopBorderWidth = `${statusOpenDesktopBorder?.top}${statusOpenBorderUnits?.Desktop} ${statusOpenDesktopBorder?.right}${statusOpenBorderUnits?.Desktop} ${statusOpenDesktopBorder?.bottom}${statusOpenBorderUnits?.Desktop} ${statusOpenDesktopBorder?.left}${statusOpenBorderUnits?.Desktop}`;
    
	const statusOpenTabletBorderWidth = `${statusOpenTabletBorder?.top}${statusOpenBorderUnits?.Tablet} ${statusOpenTabletBorder?.right}${statusOpenBorderUnits?.Tablet} ${statusOpenTabletBorder?.bottom}${statusOpenBorderUnits?.Tablet} ${statusOpenTabletBorder?.left}${statusOpenBorderUnits?.Tablet}`;
    
	const statusOpenMobileBorderWidth = `${statusOpenMobileBorder?.top}${statusOpenBorderUnits?.Mobile} ${statusOpenMobileBorder?.right}${statusOpenBorderUnits?.Mobile} ${statusOpenMobileBorder?.bottom}${statusOpenBorderUnits?.Mobile} ${statusOpenMobileBorder?.left}${statusOpenBorderUnits?.Mobile}`;

	const statusOpenBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (statusOpenBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        statusOpenDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        statusOpenTabletBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        statusOpenMobileBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ statusOpenDesktopBorder: { ...statusOpenDesktopBorder, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ statusOpenTabletBorder: { ...statusOpenTabletBorder, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ statusOpenMobileBorder: { ...statusOpenMobileBorder, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

	const statusOpenBorderRadiusLinkBtn = () => {
        setAttributes({
            statusOpenBorderRadiusLink: !statusOpenBorderRadiusLink
        });
    };

	const statusOpenBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (statusOpenBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        statusOpenDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        statusOpenTabBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        statusOpenMobileBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ statusOpenDesktopBorderRadius: { ...statusOpenDesktopBorderRadius, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ statusOpenTabBorderRadius: { ...statusOpenTabBorderRadius, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ statusOpenMobileBorderRadius: { ...statusOpenMobileBorderRadius, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };
	// End Status ON Border, radius, box-shadow style

	// Start OFF Border, radius, box-shadow style
	const statusCloseBorderUnitsHandler = (unit) => {
        setAttributes({
            statusCloseBorderUnits: {
                ...statusCloseBorderUnits,
                [deviceType]: unit
            }
        });
    };

	const statusCloseBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            statusCloseBorderRadiusUnits: {
                ...statusCloseBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };

	const statusCloseDesktopBorderRadiusWidth = `${statusCloseDesktopBorderRadius?.top}${statusCloseBorderRadiusUnits?.Desktop} ${statusCloseDesktopBorderRadius?.right}${statusCloseBorderRadiusUnits?.Desktop} ${statusCloseDesktopBorderRadius?.bottom}${statusCloseBorderRadiusUnits?.Desktop} ${statusCloseDesktopBorderRadius?.left}${statusCloseBorderRadiusUnits?.Desktop}`;

    const statusCloseTabletBorderRadiusWidth = `${statusCloseTabBorderRadius?.top}${statusCloseBorderRadiusUnits?.Tablet} ${statusCloseTabBorderRadius?.right}${statusCloseBorderRadiusUnits?.Tablet} ${statusCloseTabBorderRadius?.bottom}${statusCloseBorderRadiusUnits?.Tablet} ${statusCloseTabBorderRadius?.left}${statusCloseBorderRadiusUnits?.Tablet}`;

    const statusCloseMobileBorderRadiusWidth = `${statusCloseMobileBorderRadius?.top}${statusCloseBorderRadiusUnits?.Mobile} ${statusCloseMobileBorderRadius?.right}${statusCloseBorderRadiusUnits?.Mobile} ${statusCloseMobileBorderRadius?.bottom}${statusCloseBorderRadiusUnits?.Mobile} ${statusCloseMobileBorderRadius?.left}${statusCloseBorderRadiusUnits?.Mobile}`;

	const statusCloseBorderLinkBtn = () => {
        setAttributes({
            statusCloseBorderLink: !statusCloseBorderLink
        });
    };

	const statusCloseDesktopBorderWidth = `${statusCloseDesktopBorder?.top}${statusCloseBorderUnits?.Desktop} ${statusCloseDesktopBorder?.right}${statusCloseBorderUnits?.Desktop} ${statusCloseDesktopBorder?.bottom}${statusCloseBorderUnits?.Desktop} ${statusCloseDesktopBorder?.left}${statusCloseBorderUnits?.Desktop}`;
    
	const statusCloseTabletBorderWidth = `${statusCloseTabletBorder?.top}${statusCloseBorderUnits?.Tablet} ${statusCloseTabletBorder?.right}${statusCloseBorderUnits?.Tablet} ${statusCloseTabletBorder?.bottom}${statusCloseBorderUnits?.Tablet} ${statusCloseTabletBorder?.left}${statusCloseBorderUnits?.Tablet}`;
    
	const statusCloseMobileBorderWidth = `${statusCloseMobileBorder?.top}${statusCloseBorderUnits?.Mobile} ${statusCloseMobileBorder?.right}${statusCloseBorderUnits?.Mobile} ${statusCloseMobileBorder?.bottom}${statusCloseBorderUnits?.Mobile} ${statusCloseMobileBorder?.left}${statusCloseBorderUnits?.Mobile}`;

	const statusCloseBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (statusCloseBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        statusCloseDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        statusCloseTabletBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        statusCloseMobileBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ statusCloseDesktopBorder: { ...statusCloseDesktopBorder, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ statusCloseTabletBorder: { ...statusCloseTabletBorder, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ statusCloseMobileBorder: { ...statusCloseMobileBorder, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

	const statusCloseBorderRadiusLinkBtn = () => {
        setAttributes({
            statusCloseBorderRadiusLink: !statusCloseBorderRadiusLink
        });
    };

	const statusCloseBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (statusCloseBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        statusCloseDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        statusCloseTabBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        statusCloseMobileBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ statusCloseDesktopBorderRadius: { ...statusCloseDesktopBorderRadius, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ statusCloseTabBorderRadius: { ...statusCloseTabBorderRadius, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ statusCloseMobileBorderRadius: { ...statusCloseMobileBorderRadius, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };
	// End Status ON Border, radius, box-shadow style

    // Timezone padding & margin style start
    //padding
	const handleTimezoneGlobalPaddingUnitsHandler = (unit) => {
        setAttributes({
            timezonePaddingUnits: {
                ...timezonePaddingUnits,
                [deviceType]: unit
            }
        });
    };

	const handleTimezoneGlobalPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (timezonePaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        timezoneDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        timezoneTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        timezoneMobilePadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ timezoneDesktopPadding: { ...timezoneDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ timezoneTabPadding: { ...timezoneTabPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ timezoneMobilePadding: { ...timezoneMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

	const handleTimezoneGlobalPaddingCombineBtn = () => {
        setAttributes({
            timezonePaddingLink: !timezonePaddingLink
        });
    };
	const timezoneDesktopPaddingWidth = `${timezoneDesktopPadding?.top}${timezonePaddingUnits?.Desktop} ${timezoneDesktopPadding?.right}${timezonePaddingUnits?.Desktop} ${timezoneDesktopPadding?.bottom}${timezonePaddingUnits?.Desktop} ${timezoneDesktopPadding?.left}${timezonePaddingUnits?.Desktop}`;
    const timezoneTabletPaddingWidth = `${timezoneTabPadding?.top}${timezonePaddingUnits?.Tablet} ${timezoneTabPadding?.right}${timezonePaddingUnits?.Tablet} ${timezoneTabPadding?.bottom}${timezonePaddingUnits?.Tablet} ${timezoneTabPadding?.left}${timezonePaddingUnits?.Tablet}`;
    const timezoneMobilePaddingWidth = `${timezoneMobilePadding?.top}${timezonePaddingUnits?.Mobile} ${timezoneMobilePadding?.right}${timezonePaddingUnits?.Mobile} ${timezoneMobilePadding?.bottom}${timezonePaddingUnits?.Mobile} ${timezoneMobilePadding?.left}${timezonePaddingUnits?.Mobile}`;

    //margin
    const handleTimezoneMarginUnits = (unit) => {
        setAttributes({
            timezoneMarginUnits: {
                ...timezoneMarginUnits,
                [deviceType]: unit
            }
        });
    };

	const handleTimezoneMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (timezoneMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        timezoneDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        timezoneTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        timezoneMobileMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ timezoneDesktopMargin: { ...timezoneDesktopMargin, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ timezoneTabMargin: { ...timezoneTabMargin, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ timezoneMobileMargin: { ...timezoneMobileMargin, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

	const handleTimezoneMarginLinkBtn = () => {
        setAttributes({
            timezoneMarginLink: !timezoneMarginLink
        });
    };

	const timezoneDesktopMarginWidth = `${timezoneDesktopMargin?.top}${timezoneMarginUnits?.Desktop} ${timezoneDesktopMargin?.right}${timezoneMarginUnits?.Desktop} ${timezoneDesktopMargin?.bottom}${timezoneMarginUnits?.Desktop} ${timezoneDesktopMargin?.left}${timezoneMarginUnits?.Desktop}`;

    const timezoneTabletMarginWidth = `${timezoneTabMargin?.top}${timezoneMarginUnits?.Tablet} ${timezoneTabMargin?.right}${timezoneMarginUnits?.Tablet} ${timezoneTabMargin?.bottom}${timezoneMarginUnits?.Tablet} ${timezoneTabMargin?.left}${timezoneMarginUnits?.Tablet}`;

    const timezoneMobileMarginWidth = `${timezoneMobileMargin?.top}${timezoneMarginUnits?.Mobile} ${timezoneMobileMargin?.right}${timezoneMarginUnits?.Mobile} ${timezoneMobileMargin?.bottom}${timezoneMarginUnits?.Mobile} ${timezoneMobileMargin?.left}${timezoneMarginUnits?.Mobile}`;

    // Timezone padding & margin style end

    /** Start Global border */
	const handleGlobalBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( timezoneGlobalBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						timezoneGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						timezoneGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						timezoneGlobalBorderMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {timezoneGlobalBorderDesktop: {...timezoneGlobalBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {timezoneGlobalBorderTablet: {...timezoneGlobalBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {timezoneGlobalBorderMobile: {...timezoneGlobalBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderCombineBtn = () => {
		setAttributes( {timezoneGlobalBorderLink: !timezoneGlobalBorderLink} );
	}

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes( {
			timezoneGlobalBorderUnits: {
				...timezoneGlobalBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopBorderWidth = `${timezoneGlobalBorderDesktop?.top}${timezoneGlobalBorderUnits?.Desktop} ${timezoneGlobalBorderDesktop?.right}${timezoneGlobalBorderUnits?.Desktop} ${timezoneGlobalBorderDesktop?.bottom}${timezoneGlobalBorderUnits?.Desktop} ${timezoneGlobalBorderDesktop?.left}${timezoneGlobalBorderUnits?.Desktop}`;
	const globalTabletBorderWidth = `${timezoneGlobalBorderTablet?.top}${timezoneGlobalBorderUnits?.Tablet} ${timezoneGlobalBorderTablet?.right}${timezoneGlobalBorderUnits?.Tablet} ${timezoneGlobalBorderTablet?.bottom}${timezoneGlobalBorderUnits?.Tablet} ${timezoneGlobalBorderTablet?.left}${timezoneGlobalBorderUnits?.Tablet}`;
	const globalMobileBorderWidth = `${timezoneGlobalBorderMobile?.top}${timezoneGlobalBorderUnits?.Mobile} ${timezoneGlobalBorderMobile?.right}${timezoneGlobalBorderUnits?.Mobile} ${timezoneGlobalBorderMobile?.bottom}${timezoneGlobalBorderUnits?.Mobile} ${timezoneGlobalBorderMobile?.left}${timezoneGlobalBorderUnits?.Mobile}`;
	/** End Border */

	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( timezoneGlobalBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						timezoneGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						timezoneGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						timezoneGlobalBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {timezoneGlobalBorderRadiusDesktop: {...timezoneGlobalBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {timezoneGlobalBorderRadiusTablet: {...timezoneGlobalBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {timezoneGlobalBorderRadiusMobile: {...timezoneGlobalBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes( {timezoneGlobalBorderRadiusLink: !timezoneGlobalBorderRadiusLink} );
	}

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			timezoneGlobalBorderRadiusUnits: {
				...timezoneGlobalBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */

	/** End Global Border Radius */
	const globalDesktopBorderRadiusWidth = `${timezoneGlobalBorderRadiusDesktop?.top}${timezoneGlobalBorderRadiusUnits?.Desktop} ${timezoneGlobalBorderRadiusDesktop?.right}${timezoneGlobalBorderRadiusUnits?.Desktop} ${timezoneGlobalBorderRadiusDesktop?.bottom}${timezoneGlobalBorderRadiusUnits?.Desktop} ${timezoneGlobalBorderRadiusDesktop?.left}${timezoneGlobalBorderRadiusUnits?.Desktop}`;
	const globalTabletBorderRadiusWidth = `${timezoneGlobalBorderRadiusTablet?.top}${timezoneGlobalBorderRadiusUnits?.Tablet} ${timezoneGlobalBorderRadiusTablet?.right}${timezoneGlobalBorderRadiusUnits?.Tablet} ${timezoneGlobalBorderRadiusTablet?.bottom}${timezoneGlobalBorderRadiusUnits?.Tablet} ${timezoneGlobalBorderRadiusTablet?.left}${timezoneGlobalBorderRadiusUnits?.Tablet}`;
	const globalMobileBorderRadiusWidth = `${timezoneGlobalBorderRadiusMobile?.top}${timezoneGlobalBorderRadiusUnits?.Mobile} ${timezoneGlobalBorderRadiusMobile?.right}${timezoneGlobalBorderRadiusUnits?.Mobile} ${timezoneGlobalBorderRadiusMobile?.bottom}${timezoneGlobalBorderRadiusUnits?.Mobile} ${timezoneGlobalBorderRadiusMobile?.left}${timezoneGlobalBorderRadiusUnits?.Mobile}`;
	/** End Border Radius */


     /**
     * Get background normal styles
     */
	const getBackgroundNormalStyles = (device) => {
		const bgType = timezoneGlobalBgNormalBackgroundType;
		const bgColor = timezoneGlobalBgNormalClassicColor;
		const bgGradient = timezoneGlobalBgNormalGradientColor;
		const customGradient =timezoneGlobalBgNormalCustomGradientInputValue;
		const customGradientEnabled = timezoneGlobalBgNormalCustomGradientSwitcher;

		const bgImageUrl = timezoneGlobalBgNormalBackgroundImageUrl?.[device];
		const bgImagePosition = timezoneGlobalBgNormalBackgroundImagePosition?.[device];
		const bgAttachment = timezoneGlobalBgNormalBackgroundImageAttachment?.[device];
		const bgRepeat = timezoneGlobalBgNormalBackgroundImageRepeat?.[device];
		const bgSize = timezoneGlobalBgNormalBackgroundImageSize?.[device];  

		if (bgType === 'gradient') {
			return {
				background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
			};
		}

		let styles = { background: bgColor };

		if (bgType !== 'gradient' && bgImageUrl) {
			styles = {
				...styles,
				'background-image': `url(${bgImageUrl})`,
				'background-position': bgImagePosition
					? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
					: "50% 50%",
				'background-attachment': bgAttachment || undefined,
				'background-repeat': bgRepeat || undefined,
				'background-size': bgSize || undefined,
			};
		}

		return styles;
	};

	/**
	 * Get background hover styles
	 */
	const getBackgroundHoverStyles = (device) => {
		const bgType = timezoneGlobalBgHoverBackgroundType;
		const bgColor = timezoneGlobalBgHoverClassicColor;
		const bgGradient = timezoneGlobalBgHoverGradientColor;
		const customGradient = timezoneGlobalBgHoverCustomGradientInputValue;
		const customGradientEnabled = timezoneGlobalBgHoverCustomGradientSwitcher;

		const bgImageUrl = timezoneGlobalBgHoverBackgroundImageUrl?.[device];
		const bgImagePosition = timezoneGlobalBgHoverBackgroundImagePosition?.[device];
		const bgAttachment = timezoneGlobalBgHoverBackgroundImageAttachment?.[device];
		const bgRepeat = timezoneGlobalBgHoverBackgroundImageRepeat?.[device];
		const bgSize = timezoneGlobalBgHoverBackgroundImageSize?.[device];

		if (bgType === 'gradient') {
			return {
				background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
			};
		}

		let styles = { background: bgColor };

		if (bgType !== 'gradient' && bgImageUrl) {
			styles = {
				...styles,
				'background-image': `url(${bgImageUrl})`,
				'background-position': bgImagePosition
					? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
					: "50% 50%",
				'background-attachment': bgAttachment || undefined,
				'background-repeat': bgRepeat || undefined,
				'background-size': bgSize || undefined,
			};
		}

		return styles;
	};


    /**
     * Convert object to string
     */
    const backgroundStyleObjectToString = (styleObj) =>
        Object.entries(styleObj)
          .map(([key, value]) => `${key}: ${value};`)
          .join(' ');


      const desktopBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Desktop'));
      const desktopBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Desktop'));
      const tabletBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Tablet'));
      const tabletBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Tablet'));
      const mobileBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Mobile'));
      const mobileBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Mobile'));

    /**
     * Convert object to string
    */
    const allBlockStyle = useMemo(() => `
        .${blockID}.fb-timezone-main-wrapper {
            ${timezonePositionType === 'default' ? `position: relative !important;` : ''}
            ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' ? `width: 100%;` : ''}
            ${timezonePositionType !== 'default' ? `position: ${timezonePositionType} !important;` : ''}
            ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneHZOrientationType === 'left' && timezoneHZLeftOffset?.Desktop ? `left: ${timezoneHZLeftOffset?.Desktop}${timezoneHZLeftOffsetUnits?.Desktop};` : ''} 
            ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneHZOrientationType === 'right' && timezoneHZRightOffset?.Desktop ? `right: ${timezoneHZRightOffset?.Desktop}${timezoneHZRightOffsetUnits?.Desktop};` : ''}
            ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneVROrientationType === 'top' && timezoneVRTopOffset?.Desktop ? `top: ${timezoneVRTopOffset?.Desktop}${timezoneVRTopOffsetUnits?.Desktop};` : ''}
            ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneVROrientationType === 'bottom' && timezoneVRBottomOffset?.Desktop ? `bottom: ${timezoneVRBottomOffset?.Desktop}${timezoneVRBottomOffsetUnits?.Desktop};` : ''}

            ${timezoneGlobalZIndex?.Desktop ? `z-index: ${timezoneGlobalZIndex?.Desktop};` : ''}
            ${timezoneOverflow !== 'default' ? `overflow: ${timezoneOverflow};` : ''}
        }
        
        .${blockID}.fb-timezone-main-wrapper .fb-timezone-container {
            gap: ${timezoneCardSpacing?.Desktop}${timezoneCardSpacingUnits?.Desktop};
            ${timezoneCardAlignment ? `justify-content: ${timezoneCardAlignment};` : ''}
            ${desktopBackgroundNormalStyles}
            ${timezoneDesktopPaddingWidth && timezoneDesktopPadding?.top ? `padding: ${timezoneDesktopPaddingWidth};` : ''}
            ${timezoneDesktopMarginWidth && timezoneDesktopMargin?.top ? `margin: ${timezoneDesktopMarginWidth};` : ''}
            ${timezoneGlobalBorder ? `border: ${timezoneGlobalBorder};` : ''}
            ${globalDesktopBorderWidth && timezoneGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && timezoneGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${timezoneGlobalBorderColor ? `border-color: ${timezoneGlobalBorderColor};` : ''}
            ${timezoneGlobalBoxShadowCssValue ? `box-shadow: ${timezoneGlobalBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID}.fb-timezone-main-wrapper .fb-timezone-container:hover {
            ${desktopBackgroundHoverStyles}
            ${timezoneGlobalBorderHoverColor ? `border-color: ${timezoneGlobalBorderHoverColor};` : ''}
            ${timezoneGlobalBoxShadowHoverCssValue ? `box-shadow: ${timezoneGlobalBoxShadowHoverCssValue};` : ''}
            transition: all .3s ease-in-out;
        }

		.${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone{
			position: relative;
			display: flex;
			align-items: center;
			gap: ${timezoneLocationTextSpacing?.Desktop}${timezoneLocationTextSpacingUnits?.Desktop};
			
			${ locationTimezoneBgColorType === "gradient" ? `background: ${ locationTimezoneBgCustomGradientColorSwitcher && locationTimezoneBgCustomGradientColor ? locationTimezoneBgCustomGradientColor : locationTimezoneBgGradientColor };` : locationTimezoneBgColor ?`background: ${locationTimezoneBgColor};` : '' }
			
			${locationTimezoneBorder ? `border: ${locationTimezoneBorder};` : ''}
            ${locationTimezoneDesktopBorderWidth && locationTimezoneDesktopBorder?.top ? `border-width: ${locationTimezoneDesktopBorderWidth};` : ''}
            ${locationTimezoneDesktopBorderRadiusWidth && locationTimezoneDesktopBorderRadius?.top ? `border-radius: ${locationTimezoneDesktopBorderRadiusWidth};` : ''}
            ${locationTimezoneBorderColor ? `border-color: ${locationTimezoneBorderColor};` : ''}
			${locationTimezoneBoxShadowCssValue ? `box-shadow: ${locationTimezoneBoxShadowCssValue};` : ''}

			${locationTimezoneDesktopPaddingWidth && locationTimezoneDesktopPadding?.top ? `padding: ${locationTimezoneDesktopPaddingWidth};` : ''}
            ${locationTimezoneDesktopMarginWidth && locationTimezoneDesktopMargin?.top ? `margin: ${locationTimezoneDesktopMarginWidth};` : ''}

			transition: all .3s ease-in-out;
		}
		.${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover{
			${ locationTimezoneBgHoverColorType === "gradient" ? `background: ${ locationTimezoneBgHoverCustomGradientColorSwitcher && locationTimezoneBgHoverCustomGradientColor ? locationTimezoneBgHoverCustomGradientColor : locationTimezoneBgHoverGradientColor };` : locationTimezoneBgHoverColor ? `background: ${locationTimezoneBgHoverColor};` : '' }

			${locationTimezoneBorderHoverColor ? `border-color: ${locationTimezoneBorderHoverColor};` : ''}

			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-location-name{
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

		.${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-location-name{

			${locationNameTextHoverColor ? `color: ${locationNameTextHoverColor};` : ''}
			${locationNameTextHoverColorType === 'gradient' ? `
				background: ${locationNameTextHoverCustomGradientColorSwitcher && locationNameTextHoverCustomGradientColor ? locationNameTextHoverCustomGradientColor : locationNameTextHoverGradientColor};
				${locationNameTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
				${locationNameTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
			` : ''}
			
			transition: all .3s ease-in-out;
		}
		
		.${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-timezone-separator {
			font-size: ${separatorSize?.Desktop}${separatorFontUnits?.Desktop};
			line-height: 100%;
			${separatorColor ? `color: ${separatorColor};` : ''}
			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-timezone-separator {
			${separatorHoverColor ? `color: ${separatorHoverColor};` : ''}
			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-current-time {
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

			${timezoneTimeTextColor ? `color: ${timezoneTimeTextColor};` : ''}

			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-current-time{
			${timezoneTimeTextHoverColor ? `color: ${timezoneTimeTextHoverColor};` : ''}

			${timezoneTimeTextHoverColorType === 'gradient' ? `
				background: ${timezoneTimeTextHoverCustomGradientColorSwitcher && timezoneTimeTextHoverCustomGradientColor ? timezoneTimeTextHoverCustomGradientColor : timezoneTimeTextHoverGradientColor};
				${timezoneTimeTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
				${timezoneTimeTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
			` : ''}
			
			transition: all .3s ease-in-out;
		}
		
		.${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-timezone-offset {
			${timezoneTextGlobalTypoSwitcher?.fontFamily === true && timezoneTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneTextGlobalTypographyData?.fontFamily};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.fontSize === true && timezoneTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneTextGlobalTypographyData?.fontSize};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.fontWeight === true && timezoneTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneTextGlobalTypographyData?.fontWeight};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.fontStyle === true && timezoneTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneTextGlobalTypographyData?.fontStyle};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.textTransform === true && timezoneTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneTextGlobalTypographyData?.textTransform};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.textDecoration === true && timezoneTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneTextGlobalTypographyData?.textDecoration};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.letterSpacing === true && timezoneTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneTextGlobalTypographyData?.letterSpacing};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.lineHeight === true && timezoneTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneTextGlobalTypographyData?.lineHeight};` : ''}

            ${timezoneTextGlobalTypoSwitcher?.fontFamily === false && timezoneTextFontFamily && timezoneTextFontFamily !== 'Default' ? `font-family: ${timezoneTextFontFamily};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.fontSize === false && timezoneTextFontSize?.Desktop && timezoneTextFontSizeUnits?.Desktop ? `font-size: ${timezoneTextFontSize?.Desktop}${timezoneTextFontSizeUnits?.Desktop};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.fontWeight === false && timezoneTextFontWeight ? `font-weight: ${timezoneTextFontWeight};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.fontStyle === false && timezoneTextFontStyle ? `font-style: ${timezoneTextFontStyle};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.textTransform === false && timezoneTextTransform ? `text-transform: ${timezoneTextTransform};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.textDecoration === false && timezoneTextDecoration ? `text-decoration: ${timezoneTextDecoration};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.letterSpacing === false && timezoneTextLetterSpacing?.Desktop && timezoneTextLetterSpacingUnits?.Desktop ? `letter-spacing: ${timezoneTextLetterSpacing?.Desktop}${timezoneTextLetterSpacingUnits?.Desktop};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.lineHeight === false && timezoneTextLineHeight?.Desktop && timezoneTextLineHeightUnits?.Desktop ? `line-height: ${timezoneTextLineHeight?.Desktop}${timezoneTextLineHeightUnits?.Desktop};` : ''}

			${timezoneTextColor ? `color: ${timezoneTextColor};` : ''}

			transition: all .3s ease-in-out;
		}
		
		.${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-timezone-offset{
			${timezoneTextHoverColor ? `color: ${timezoneTextHoverColor};` : ''}
			${timezoneTextHoverColorType === 'gradient' ? `
				background: ${timezoneTextHoverCustomGradientColorSwitcher && timezoneTextHoverCustomGradientColor ? timezoneTextHoverCustomGradientColor : timezoneTextHoverGradientColor};
				${timezoneTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
				${timezoneTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
			` : ''}
			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box {
            overflow: hidden;
            ${infoBoxBorder ? `border: ${infoBoxBorder};` : ''}
            ${infoBoxDesktopBorderWidth && infoBoxDesktopBorder?.top ? `border-width: ${infoBoxDesktopBorderWidth};` : ''}
            ${infoBoxDesktopBorderRadiusWidth && infoBoxDesktopBorderRadius?.top ? `border-radius: ${infoBoxDesktopBorderRadiusWidth};` : ''}
			${infoBoxDesktopPaddingWidth && infoBoxDesktopPadding?.top ? `padding: ${infoBoxDesktopPaddingWidth};` : ''}
		}

        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open {
            ${ infoBoxBgColorType === "gradient" ? `background: ${ infoBoxBgCustomGradientColorSwitcher && infoBoxBgCustomGradientColor ? infoBoxBgCustomGradientColor : infoBoxBgGradientColor };` : infoBoxBgColor ?`background: ${infoBoxBgColor};` : '' }
            ${infoBoxBorderColor ? `border-color: ${infoBoxBorderColor};` : ''}
			${infoBoxBoxShadowCssValue ? `box-shadow: ${infoBoxBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }

		.${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open:hover{
			${ infoBoxBgHoverColorType === "gradient" ? `background: ${ infoBoxBgHoverCustomGradientColorSwitcher && infoBoxBgHoverCustomGradientColor ? infoBoxBgHoverCustomGradientColor : infoBoxBgHoverGradientColor };` : infoBoxBgHoverColor ? `background: ${infoBoxBgHoverColor};` : '' }

			${infoBoxBorderHoverColor ? `border-color: ${infoBoxBorderHoverColor};` : ''}

			transition: all .3s ease-in-out;
		}
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed {
            ${ infoBoxOffStatusBgColorType === "gradient" ? `background: ${ infoBoxOffStatusBgCustomGradientColorSwitcher && infoBoxOffStatusBgCustomGradientColor ? infoBoxOffStatusBgCustomGradientColor : infoBoxOffStatusBgGradientColor };` : infoBoxOffStatusBgColor ?`background: ${infoBoxOffStatusBgColor};` : '' }
            ${infoBoxOffStatusBorderColor ? `border-color: ${infoBoxOffStatusBorderColor};` : ''}
			${infoBoxOffStatusBoxShadowCssValue ? `box-shadow: ${infoBoxOffStatusBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }

		.${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed:hover{
			${ infoBoxOffStatusBgHoverColorType === "gradient" ? `background: ${ infoBoxOffStatusBgHoverCustomGradientColorSwitcher && infoBoxOffStatusBgHoverCustomGradientColor ? infoBoxOffStatusBgHoverCustomGradientColor : infoBoxOffStatusBgHoverGradientColor };` : infoBoxOffStatusBgHoverColor ? `background: ${infoBoxOffStatusBgHoverColor};` : '' }

			${infoBoxOffStatusBorderHoverColor ? `border-color: ${infoBoxOffStatusBorderHoverColor};` : ''}

			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-open .fb-timezone-status, 
		.${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-weekend .fb-timezone-status, 
		.${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-holiday .fb-timezone-status, 
		.${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-closed .fb-timezone-status {
			${statusTextGlobalTypoSwitcher?.fontFamily === true && statusTextGlobalTypographyData?.fontFamily ? `font-family: ${statusTextGlobalTypographyData?.fontFamily};` : ''}
            ${statusTextGlobalTypoSwitcher?.fontSize === true && statusTextGlobalTypographyData?.fontSize ? `font-size: ${statusTextGlobalTypographyData?.fontSize};` : ''}
            ${statusTextGlobalTypoSwitcher?.fontWeight === true && statusTextGlobalTypographyData?.fontWeight ? `font-weight: ${statusTextGlobalTypographyData?.fontWeight};` : ''}
            ${statusTextGlobalTypoSwitcher?.fontStyle === true && statusTextGlobalTypographyData?.fontStyle ? `font-style: ${statusTextGlobalTypographyData?.fontStyle};` : ''}
            ${statusTextGlobalTypoSwitcher?.textTransform === true && statusTextGlobalTypographyData?.textTransform ? `text-transform: ${statusTextGlobalTypographyData?.textTransform};` : ''}
            ${statusTextGlobalTypoSwitcher?.textDecoration === true && statusTextGlobalTypographyData?.textDecoration ? `text-decoration: ${statusTextGlobalTypographyData?.textDecoration};` : ''}
            ${statusTextGlobalTypoSwitcher?.letterSpacing === true && statusTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${statusTextGlobalTypographyData?.letterSpacing};` : ''}
            ${statusTextGlobalTypoSwitcher?.lineHeight === true && statusTextGlobalTypographyData?.lineHeight ? `line-height: ${statusTextGlobalTypographyData?.lineHeight};` : ''}

            ${statusTextGlobalTypoSwitcher?.fontFamily === false && statusTextFontFamily && statusTextFontFamily !== 'Default' ? `font-family: ${statusTextFontFamily};` : ''}
            ${statusTextGlobalTypoSwitcher?.fontSize === false && statusTextFontSize?.Desktop && statusTextFontSizeUnits?.Desktop ? `font-size: ${statusTextFontSize?.Desktop}${statusTextFontSizeUnits?.Desktop};` : ''}
            ${statusTextGlobalTypoSwitcher?.fontWeight === false && statusTextFontWeight ? `font-weight: ${statusTextFontWeight};` : ''}
            ${statusTextGlobalTypoSwitcher?.fontStyle === false && statusTextFontStyle ? `font-style: ${statusTextFontStyle};` : ''}
            ${statusTextGlobalTypoSwitcher?.textTransform === false && statusTextTransform ? `text-transform: ${statusTextTransform};` : ''}
            ${statusTextGlobalTypoSwitcher?.textDecoration === false && statusTextDecoration ? `text-decoration: ${statusTextDecoration};` : ''}
            ${statusTextGlobalTypoSwitcher?.letterSpacing === false && statusTextLetterSpacing?.Desktop && statusTextLetterSpacingUnits?.Desktop ? `letter-spacing: ${statusTextLetterSpacing?.Desktop}${statusTextLetterSpacingUnits?.Desktop};` : ''}
            ${statusTextGlobalTypoSwitcher?.lineHeight === false && statusTextLineHeight?.Desktop && statusTextLineHeightUnits?.Desktop ? `line-height: ${statusTextLineHeight?.Desktop}${statusTextLineHeightUnits?.Desktop};` : ''}

			${statusDesktopPaddingWidth && statusDesktopPadding?.top ? `padding: ${statusDesktopPaddingWidth};` : ''}

			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-open .fb-timezone-status{
			${statusOpenColor ? `color: ${statusOpenColor};` : ''}
			${statusOpenBgColor ? `background-color: ${statusOpenBgColor};` : ''}
			${statusOpenBorder ? `border: ${statusOpenBorder};` : ''}
            ${statusOpenDesktopBorderWidth && statusOpenDesktopBorder?.top ? `border-width: ${statusOpenDesktopBorderWidth};` : ''}
            ${statusOpenDesktopBorderRadiusWidth && statusOpenDesktopBorderRadius?.top ? `border-radius: ${statusOpenDesktopBorderRadiusWidth};` : ''}
            ${statusOpenBorderColor ? `border-color: ${statusOpenBorderColor};` : ''}
			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-open .fb-timezone-status:hover{
			${statusOpenHoverColor ? `color: ${statusOpenHoverColor};` : ''}
			${statusOpenHoverBgColor ? `background-color: ${statusOpenHoverBgColor};` : ''}
			${statusOpenBorderHoverColor ? `border-color: ${statusOpenBorderHoverColor};` : ''}
			transition: all .3s ease-in-out;
		}
		.${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-closed .fb-timezone-status,
		.${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-weekend .fb-timezone-status,
		.${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-holiday .fb-timezone-status{
			${statusCloseColor ? `color: ${statusCloseColor};` : ''}
			${statusCloseBgColor ? `background-color: ${statusCloseBgColor};` : ''}
			${statusCloseBorder ? `border: ${statusCloseBorder};` : ''}
            ${statusCloseDesktopBorderWidth && statusCloseDesktopBorder?.top ? `border-width: ${statusCloseDesktopBorderWidth};` : ''}
            ${statusCloseDesktopBorderRadiusWidth && statusCloseDesktopBorderRadius?.top ? `border-radius: ${statusCloseDesktopBorderRadiusWidth};` : ''}
            ${statusCloseBorderColor ? `border-color: ${statusCloseBorderColor};` : ''}
			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-closed .fb-timezone-status:hover,
		.${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-weekend .fb-timezone-status:hover,
		.${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-holiday .fb-timezone-status:hover{
			${statusCloseHoverColor ? `color: ${statusCloseHoverColor};` : ''}
			${statusCloseHoverBgColor ? `background-color: ${statusCloseHoverBgColor};` : ''}
			${statusCloseBorderHoverColor ? `border-color: ${statusCloseBorderHoverColor};` : ''}
			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-timezone-status-info .fb-timezone-info-noted{
			${noticeTextGlobalTypoSwitcher?.fontFamily === true && noticeTextGlobalTypographyData?.fontFamily ? `font-family: ${noticeTextGlobalTypographyData?.fontFamily};` : ''}
            ${noticeTextGlobalTypoSwitcher?.fontSize === true && noticeTextGlobalTypographyData?.fontSize ? `font-size: ${noticeTextGlobalTypographyData?.fontSize};` : ''}
            ${noticeTextGlobalTypoSwitcher?.fontWeight === true && noticeTextGlobalTypographyData?.fontWeight ? `font-weight: ${noticeTextGlobalTypographyData?.fontWeight};` : ''}
            ${noticeTextGlobalTypoSwitcher?.fontStyle === true && noticeTextGlobalTypographyData?.fontStyle ? `font-style: ${noticeTextGlobalTypographyData?.fontStyle};` : ''}
            ${noticeTextGlobalTypoSwitcher?.textTransform === true && noticeTextGlobalTypographyData?.textTransform ? `text-transform: ${noticeTextGlobalTypographyData?.textTransform};` : ''}
            ${noticeTextGlobalTypoSwitcher?.textDecoration === true && noticeTextGlobalTypographyData?.textDecoration ? `text-decoration: ${noticeTextGlobalTypographyData?.textDecoration};` : ''}
            ${noticeTextGlobalTypoSwitcher?.letterSpacing === true && noticeTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${noticeTextGlobalTypographyData?.letterSpacing};` : ''}
            ${noticeTextGlobalTypoSwitcher?.lineHeight === true && noticeTextGlobalTypographyData?.lineHeight ? `line-height: ${noticeTextGlobalTypographyData?.lineHeight};` : ''}

            ${noticeTextGlobalTypoSwitcher?.fontFamily === false && noticeTextFontFamily && noticeTextFontFamily !== 'Default' ? `font-family: ${noticeTextFontFamily};` : ''}
            ${noticeTextGlobalTypoSwitcher?.fontSize === false && noticeTextFontSize?.Desktop && noticeTextFontSizeUnits?.Desktop ? `font-size: ${noticeTextFontSize?.Desktop}${noticeTextFontSizeUnits?.Desktop};` : ''}
            ${noticeTextGlobalTypoSwitcher?.fontWeight === false && noticeTextFontWeight ? `font-weight: ${noticeTextFontWeight};` : ''}
            ${noticeTextGlobalTypoSwitcher?.fontStyle === false && noticeTextFontStyle ? `font-style: ${noticeTextFontStyle};` : ''}
            ${noticeTextGlobalTypoSwitcher?.textTransform === false && noticeTextTransform ? `text-transform: ${noticeTextTransform};` : ''}
            ${noticeTextGlobalTypoSwitcher?.textDecoration === false && noticeTextDecoration ? `text-decoration: ${noticeTextDecoration};` : ''}
            ${noticeTextGlobalTypoSwitcher?.letterSpacing === false && noticeTextLetterSpacing?.Desktop && noticeTextLetterSpacingUnits?.Desktop ? `letter-spacing: ${noticeTextLetterSpacing?.Desktop}${noticeTextLetterSpacingUnits?.Desktop};` : ''}
            ${noticeTextGlobalTypoSwitcher?.lineHeight === false && noticeTextLineHeight?.Desktop && noticeTextLineHeightUnits?.Desktop ? `line-height: ${noticeTextLineHeight?.Desktop}${noticeTextLineHeightUnits?.Desktop};` : ''}
            
            ${infoBoxDesktopMarginWidth && infoBoxDesktopMargin?.top ? `margin: ${infoBoxDesktopMarginWidth};` : ''}

			transition: all .3s ease-in-out;
		}

        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open .fb-timezone-status-info .fb-timezone-info-noted{
            ${noticeTextColor ? `color: ${noticeTextColor};` : ''}
        }
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open .fb-timezone-status-info .fb-timezone-info-noted:hover{
            ${noticeTextHoverColor ? `color: ${noticeTextHoverColor};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed .fb-timezone-status-info .fb-timezone-info-noted,
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.holiday .fb-timezone-status-info .fb-timezone-info-noted,
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.weekend .fb-timezone-status-info .fb-timezone-info-noted{
            ${statusOffNoticeTextColor ? `color: ${statusOffNoticeTextColor};` : ''}
        }
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed .fb-timezone-status-info .fb-timezone-info-noted:hover,
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.holiday .fb-timezone-status-info .fb-timezone-info-noted:hover,
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.weekend .fb-timezone-status-info .fb-timezone-info-noted:hover{
            ${statusOffNoticeTextHoverColor ? `color: ${statusOffNoticeTextHoverColor};` : ''}
            transition: all .3s ease-in-out;
        }

            @media only screen and (max-width: 1024px) {
                .${blockID}.fb-timezone-main-wrapper {
                    ${timezonePositionType === 'default' ? `position: relative !important;` : ''}
                    ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' ? `width: 100%;` : ''}
                    ${timezonePositionType !== 'default' ? `position: ${timezonePositionType} !important;` : ''}
                    ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneHZOrientationType === 'left' && timezoneHZLeftOffset?.Tablet ? `left: ${timezoneHZLeftOffset?.Tablet}${timezoneHZLeftOffsetUnits?.Tablet};` : ''} 
                    ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneHZOrientationType === 'right' && timezoneHZRightOffset?.Tablet ? `right: ${timezoneHZRightOffset?.Tablet}${timezoneHZRightOffsetUnits?.Tablet};` : ''}
                    ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneVROrientationType === 'top' && timezoneVRTopOffset?.Tablet ? `top: ${timezoneVRTopOffset?.Tablet}${timezoneVRTopOffsetUnits?.Tablet};` : ''}
                    ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneVROrientationType === 'bottom' && timezoneVRBottomOffset?.Tablet ? `bottom: ${timezoneVRBottomOffset?.Tablet}${timezoneVRBottomOffsetUnits?.Tablet};` : ''}

                    ${timezoneGlobalZIndex?.Tablet ? `z-index: ${timezoneGlobalZIndex?.Tablet};` : ''}
                    ${timezoneOverflow !== 'default' ? `overflow: ${timezoneOverflow};` : ''}
                }
                
                .${blockID}.fb-timezone-main-wrapper .fb-timezone-container {
                    gap: ${timezoneCardSpacing?.Tablet}${timezoneCardSpacingUnits?.Tablet};
                    ${timezoneCardAlignment ? `justify-content: ${timezoneCardAlignment};` : ''}
                    ${tabletBackgroundNormalStyles}
                    ${timezoneTabletPaddingWidth && timezoneTabPadding?.top ? `padding: ${timezoneTabletPaddingWidth};` : ''}
                    ${timezoneTabletMarginWidth && timezoneTabMargin?.top ? `margin: ${timezoneTabletMarginWidth};` : ''}
                    ${timezoneGlobalBorder ? `border: ${timezoneGlobalBorder};` : ''}
                    ${globalTabletBorderWidth && timezoneGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                    ${globalTabletBorderRadiusWidth && timezoneGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
                    ${timezoneGlobalBorderColor ? `border-color: ${timezoneGlobalBorderColor};` : ''}
                    ${timezoneGlobalBoxShadowCssValue ? `box-shadow: ${timezoneGlobalBoxShadowCssValue};` : ''}
                    transition: all .3s ease-in-out;
                }

                .${blockID}.fb-timezone-main-wrapper .fb-timezone-container:hover {
                    ${tabletBackgroundHoverStyles}
                    ${timezoneGlobalBorderHoverColor ? `border-color: ${timezoneGlobalBorderHoverColor};` : ''}
                    ${timezoneGlobalBoxShadowHoverCssValue ? `box-shadow: ${timezoneGlobalBoxShadowHoverCssValue};` : ''}
                    transition: all .3s ease-in-out;
                }

                .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone{
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: ${timezoneLocationTextSpacing?.Tablet}${timezoneLocationTextSpacingUnits?.Tablet};
                    
                    ${ locationTimezoneBgColorType === "gradient" ? `background: ${ locationTimezoneBgCustomGradientColorSwitcher && locationTimezoneBgCustomGradientColor ? locationTimezoneBgCustomGradientColor : locationTimezoneBgGradientColor };` : locationTimezoneBgColor ?`background: ${locationTimezoneBgColor};` : '' }
                    
                    ${locationTimezoneBorder ? `border: ${locationTimezoneBorder};` : ''}
                    ${locationTimezoneTabletBorderWidth && locationTimezoneTabletBorder?.top ? `border-width: ${locationTimezoneTabletBorderWidth};` : ''}
                    ${locationTimezoneTabletBorderRadiusWidth && locationTimezoneTabBorderRadius?.top ? `border-radius: ${locationTimezoneTabletBorderRadiusWidth};` : ''}
                    ${locationTimezoneBorderColor ? `border-color: ${locationTimezoneBorderColor};` : ''}
                    ${locationTimezoneBoxShadowCssValue ? `box-shadow: ${locationTimezoneBoxShadowCssValue};` : ''}

                    ${locationTimezoneTabletPaddingWidth && locationTimezoneTabPadding?.top ? `padding: ${locationTimezoneTabletPaddingWidth};` : ''}
                    ${locationTimezoneTabletMarginWidth && locationTimezoneTabMargin?.top ? `margin: ${locationTimezoneTabletMarginWidth};` : ''}

                    transition: all .3s ease-in-out;
                }
                .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover{
                    ${ locationTimezoneBgHoverColorType === "gradient" ? `background: ${ locationTimezoneBgHoverCustomGradientColorSwitcher && locationTimezoneBgHoverCustomGradientColor ? locationTimezoneBgHoverCustomGradientColor : locationTimezoneBgHoverGradientColor };` : locationTimezoneBgHoverColor ? `background: ${locationTimezoneBgHoverColor};` : '' }

                    ${locationTimezoneBorderHoverColor ? `border-color: ${locationTimezoneBorderHoverColor};` : ''}

                    transition: all .3s ease-in-out;
                }

                .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-location-name{
                    ${timezoneLocationTextGlobalTypoSwitcher?.fontFamily === true && timezoneLocationTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneLocationTextGlobalTypographyData?.fontFamily};` : ''}
                    ${timezoneLocationTextGlobalTypoSwitcher?.fontSize === true && timezoneLocationTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneLocationTextGlobalTypographyData?.fontSize};` : ''}
                    ${timezoneLocationTextGlobalTypoSwitcher?.fontWeight === true && timezoneLocationTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneLocationTextGlobalTypographyData?.fontWeight};` : ''}
                    ${timezoneLocationTextGlobalTypoSwitcher?.fontStyle === true && timezoneLocationTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneLocationTextGlobalTypographyData?.fontStyle};` : ''}
                    ${timezoneLocationTextGlobalTypoSwitcher?.textTransform === true && timezoneLocationTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneLocationTextGlobalTypographyData?.textTransform};` : ''}
                    ${timezoneLocationTextGlobalTypoSwitcher?.textDecoration === true && timezoneLocationTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneLocationTextGlobalTypographyData?.textDecoration};` : ''}
                    ${timezoneLocationTextGlobalTypoSwitcher?.letterSpacing === true && timezoneLocationTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneLocationTextGlobalTypographyData?.letterSpacing};` : ''}
                    ${timezoneLocationTextGlobalTypoSwitcher?.lineHeight === true && timezoneLocationTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneLocationTextGlobalTypographyData?.lineHeight};` : ''}

                    ${timezoneLocationTextGlobalTypoSwitcher?.fontFamily === false && timezoneLocationTextFontFamily && timezoneLocationTextFontFamily !== 'Default' ? `font-family: ${timezoneLocationTextFontFamily};` : ''}
                    ${timezoneLocationTextGlobalTypoSwitcher?.fontSize === false && timezoneLocationTextFontSize?.Tablet && timezoneLocationTextFontSizeUnits?.Tablet ? `font-size: ${timezoneLocationTextFontSize?.Tablet}${timezoneLocationTextFontSizeUnits?.Tablet};` : ''}
                    ${timezoneLocationTextGlobalTypoSwitcher?.fontWeight === false && timezoneLocationTextFontWeight ? `font-weight: ${timezoneLocationTextFontWeight};` : ''}
                    ${timezoneLocationTextGlobalTypoSwitcher?.fontStyle === false && timezoneLocationTextFontStyle ? `font-style: ${timezoneLocationTextFontStyle};` : ''}
                    ${timezoneLocationTextGlobalTypoSwitcher?.textTransform === false && timezoneLocationTextTransform ? `text-transform: ${timezoneLocationTextTransform};` : ''}
                    ${timezoneLocationTextGlobalTypoSwitcher?.textDecoration === false && timezoneLocationTextDecoration ? `text-decoration: ${timezoneLocationTextDecoration};` : ''}
                    ${timezoneLocationTextGlobalTypoSwitcher?.letterSpacing === false && timezoneLocationTextLetterSpacing?.Tablet && timezoneLocationTextLetterSpacingUnits?.Tablet ? `letter-spacing: ${timezoneLocationTextLetterSpacing?.Tablet}${timezoneLocationTextLetterSpacingUnits?.Tablet};` : ''}
                    ${timezoneLocationTextGlobalTypoSwitcher?.lineHeight === false && timezoneLocationTextLineHeight?.Tablet && timezoneLocationTextLineHeightUnits?.Tablet ? `line-height: ${timezoneLocationTextLineHeight?.Tablet}${timezoneLocationTextLineHeightUnits?.Tablet};` : ''}

                    ${locationNameTextColor ? `color: ${locationNameTextColor};` : ''}

                    ${locationNameTextColorType === 'gradient' ? `
                        background: ${locationNameTextCustomGradientColorSwitcher && locationNameTextCustomGradientColor ? locationNameTextCustomGradientColor : locationNameTextGradientColor};
                        ${locationNameTextCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                        ${locationNameTextGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                    ` : ''}

                    transition: all .3s ease-in-out;
                }

                .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-location-name{

                    ${locationNameTextHoverColor ? `color: ${locationNameTextHoverColor};` : ''}
                    ${locationNameTextHoverColorType === 'gradient' ? `
                        background: ${locationNameTextHoverCustomGradientColorSwitcher && locationNameTextHoverCustomGradientColor ? locationNameTextHoverCustomGradientColor : locationNameTextHoverGradientColor};
                        ${locationNameTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                        ${locationNameTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                    ` : ''}
                    
                    transition: all .3s ease-in-out;
                }
                
                .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-timezone-separator {
                    font-size: ${separatorSize?.Tablet}${separatorFontUnits?.Tablet};
                    line-height: 100%;
                    ${separatorColor ? `color: ${separatorColor};` : ''}
                    transition: all .3s ease-in-out;
                }

                .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-timezone-separator {
                    ${separatorHoverColor ? `color: ${separatorHoverColor};` : ''}
                    transition: all .3s ease-in-out;
                }

                .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-current-time {
                    ${timezoneTimeTextGlobalTypoSwitcher?.fontFamily === true && timezoneTimeTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneTimeTextGlobalTypographyData?.fontFamily};` : ''}
                    ${timezoneTimeTextGlobalTypoSwitcher?.fontSize === true && timezoneTimeTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneTimeTextGlobalTypographyData?.fontSize};` : ''}
                    ${timezoneTimeTextGlobalTypoSwitcher?.fontWeight === true && timezoneTimeTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneTimeTextGlobalTypographyData?.fontWeight};` : ''}
                    ${timezoneTimeTextGlobalTypoSwitcher?.fontStyle === true && timezoneTimeTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneTimeTextGlobalTypographyData?.fontStyle};` : ''}
                    ${timezoneTimeTextGlobalTypoSwitcher?.textTransform === true && timezoneTimeTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneTimeTextGlobalTypographyData?.textTransform};` : ''}
                    ${timezoneTimeTextGlobalTypoSwitcher?.textDecoration === true && timezoneTimeTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneTimeTextGlobalTypographyData?.textDecoration};` : ''}
                    ${timezoneTimeTextGlobalTypoSwitcher?.letterSpacing === true && timezoneTimeTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneTimeTextGlobalTypographyData?.letterSpacing};` : ''}
                    ${timezoneTimeTextGlobalTypoSwitcher?.lineHeight === true && timezoneTimeTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneTimeTextGlobalTypographyData?.lineHeight};` : ''}

                    ${timezoneTimeTextGlobalTypoSwitcher?.fontFamily === false && timezoneTimeTextFontFamily && timezoneTimeTextFontFamily !== 'Default' ? `font-family: ${timezoneTimeTextFontFamily};` : ''}
                    ${timezoneTimeTextGlobalTypoSwitcher?.fontSize === false && timezoneTimeTextFontSize?.Tablet && timezoneTimeTextFontSizeUnits?.Tablet ? `font-size: ${timezoneTimeTextFontSize?.Tablet}${timezoneTimeTextFontSizeUnits?.Tablet};` : ''}
                    ${timezoneTimeTextGlobalTypoSwitcher?.fontWeight === false && timezoneTimeTextFontWeight ? `font-weight: ${timezoneTimeTextFontWeight};` : ''}
                    ${timezoneTimeTextGlobalTypoSwitcher?.fontStyle === false && timezoneTimeTextFontStyle ? `font-style: ${timezoneTimeTextFontStyle};` : ''}
                    ${timezoneTimeTextGlobalTypoSwitcher?.textTransform === false && timezoneTimeTextTransform ? `text-transform: ${timezoneTimeTextTransform};` : ''}
                    ${timezoneTimeTextGlobalTypoSwitcher?.textDecoration === false && timezoneTimeTextDecoration ? `text-decoration: ${timezoneTimeTextDecoration};` : ''}
                    ${timezoneTimeTextGlobalTypoSwitcher?.letterSpacing === false && timezoneTimeTextLetterSpacing?.Tablet && timezoneTimeTextLetterSpacingUnits?.Tablet ? `letter-spacing: ${timezoneTimeTextLetterSpacing?.Tablet}${timezoneTimeTextLetterSpacingUnits?.Tablet};` : ''}
                    ${timezoneTimeTextGlobalTypoSwitcher?.lineHeight === false && timezoneTimeTextLineHeight?.Tablet && timezoneTimeTextLineHeightUnits?.Tablet ? `line-height: ${timezoneTimeTextLineHeight?.Tablet}${timezoneTimeTextLineHeightUnits?.Tablet};` : ''}

                    ${timezoneTimeTextColor ? `color: ${timezoneTimeTextColor};` : ''}

                    transition: all .3s ease-in-out;
                }

                .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-current-time{
                    ${timezoneTimeTextHoverColor ? `color: ${timezoneTimeTextHoverColor};` : ''}

                    ${timezoneTimeTextHoverColorType === 'gradient' ? `
                        background: ${timezoneTimeTextHoverCustomGradientColorSwitcher && timezoneTimeTextHoverCustomGradientColor ? timezoneTimeTextHoverCustomGradientColor : timezoneTimeTextHoverGradientColor};
                        ${timezoneTimeTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                        ${timezoneTimeTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                    ` : ''}
                    
                    transition: all .3s ease-in-out;
                }
                
                .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-timezone-offset {
                    ${timezoneTextGlobalTypoSwitcher?.fontFamily === true && timezoneTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneTextGlobalTypographyData?.fontFamily};` : ''}
                    ${timezoneTextGlobalTypoSwitcher?.fontSize === true && timezoneTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneTextGlobalTypographyData?.fontSize};` : ''}
                    ${timezoneTextGlobalTypoSwitcher?.fontWeight === true && timezoneTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneTextGlobalTypographyData?.fontWeight};` : ''}
                    ${timezoneTextGlobalTypoSwitcher?.fontStyle === true && timezoneTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneTextGlobalTypographyData?.fontStyle};` : ''}
                    ${timezoneTextGlobalTypoSwitcher?.textTransform === true && timezoneTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneTextGlobalTypographyData?.textTransform};` : ''}
                    ${timezoneTextGlobalTypoSwitcher?.textDecoration === true && timezoneTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneTextGlobalTypographyData?.textDecoration};` : ''}
                    ${timezoneTextGlobalTypoSwitcher?.letterSpacing === true && timezoneTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneTextGlobalTypographyData?.letterSpacing};` : ''}
                    ${timezoneTextGlobalTypoSwitcher?.lineHeight === true && timezoneTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneTextGlobalTypographyData?.lineHeight};` : ''}

                    ${timezoneTextGlobalTypoSwitcher?.fontFamily === false && timezoneTextFontFamily && timezoneTextFontFamily !== 'Default' ? `font-family: ${timezoneTextFontFamily};` : ''}
                    ${timezoneTextGlobalTypoSwitcher?.fontSize === false && timezoneTextFontSize?.Tablet && timezoneTextFontSizeUnits?.Tablet ? `font-size: ${timezoneTextFontSize?.Tablet}${timezoneTextFontSizeUnits?.Tablet};` : ''}
                    ${timezoneTextGlobalTypoSwitcher?.fontWeight === false && timezoneTextFontWeight ? `font-weight: ${timezoneTextFontWeight};` : ''}
                    ${timezoneTextGlobalTypoSwitcher?.fontStyle === false && timezoneTextFontStyle ? `font-style: ${timezoneTextFontStyle};` : ''}
                    ${timezoneTextGlobalTypoSwitcher?.textTransform === false && timezoneTextTransform ? `text-transform: ${timezoneTextTransform};` : ''}
                    ${timezoneTextGlobalTypoSwitcher?.textDecoration === false && timezoneTextDecoration ? `text-decoration: ${timezoneTextDecoration};` : ''}
                    ${timezoneTextGlobalTypoSwitcher?.letterSpacing === false && timezoneTextLetterSpacing?.Tablet && timezoneTextLetterSpacingUnits?.Tablet ? `letter-spacing: ${timezoneTextLetterSpacing?.Tablet}${timezoneTextLetterSpacingUnits?.Tablet};` : ''}
                    ${timezoneTextGlobalTypoSwitcher?.lineHeight === false && timezoneTextLineHeight?.Tablet && timezoneTextLineHeightUnits?.Tablet ? `line-height: ${timezoneTextLineHeight?.Tablet}${timezoneTextLineHeightUnits?.Tablet};` : ''}

                    ${timezoneTextColor ? `color: ${timezoneTextColor};` : ''}

                    transition: all .3s ease-in-out;
                }
                
                .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-timezone-offset{
                    ${timezoneTextHoverColor ? `color: ${timezoneTextHoverColor};` : ''}
                    ${timezoneTextHoverColorType === 'gradient' ? `
                        background: ${timezoneTextHoverCustomGradientColorSwitcher && timezoneTextHoverCustomGradientColor ? timezoneTextHoverCustomGradientColor : timezoneTextHoverGradientColor};
                        ${timezoneTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                        ${timezoneTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                    ` : ''}
                    transition: all .3s ease-in-out;
                }

                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box {
                    overflow: hidden;
                    ${infoBoxBorder ? `border: ${infoBoxBorder};` : ''}
                    ${infoBoxTabletBorderWidth && infoBoxTabletBorder?.top ? `border-width: ${infoBoxTabletBorderWidth};` : ''}
                    ${infoBoxTabletBorderRadiusWidth && infoBoxTabBorderRadius?.top ? `border-radius: ${infoBoxTabletBorderRadiusWidth};` : ''}
                    ${infoBoxTabletPaddingWidth && infoBoxTabPadding?.top ? `padding: ${infoBoxTabletPaddingWidth};` : ''}
                }

                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open {
                    ${ infoBoxBgColorType === "gradient" ? `background: ${ infoBoxBgCustomGradientColorSwitcher && infoBoxBgCustomGradientColor ? infoBoxBgCustomGradientColor : infoBoxBgGradientColor };` : infoBoxBgColor ?`background: ${infoBoxBgColor};` : '' }
                    ${infoBoxBorderColor ? `border-color: ${infoBoxBorderColor};` : ''}
                    ${infoBoxBoxShadowCssValue ? `box-shadow: ${infoBoxBoxShadowCssValue};` : ''}
                    transition: all .3s ease-in-out;
                }

                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open:hover{
                    ${ infoBoxBgHoverColorType === "gradient" ? `background: ${ infoBoxBgHoverCustomGradientColorSwitcher && infoBoxBgHoverCustomGradientColor ? infoBoxBgHoverCustomGradientColor : infoBoxBgHoverGradientColor };` : infoBoxBgHoverColor ? `background: ${infoBoxBgHoverColor};` : '' }

                    ${infoBoxBorderHoverColor ? `border-color: ${infoBoxBorderHoverColor};` : ''}

                    transition: all .3s ease-in-out;
                }
                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed {
                    ${ infoBoxOffStatusBgColorType === "gradient" ? `background: ${ infoBoxOffStatusBgCustomGradientColorSwitcher && infoBoxOffStatusBgCustomGradientColor ? infoBoxOffStatusBgCustomGradientColor : infoBoxOffStatusBgGradientColor };` : infoBoxOffStatusBgColor ?`background: ${infoBoxOffStatusBgColor};` : '' }
                    ${infoBoxOffStatusBorderColor ? `border-color: ${infoBoxOffStatusBorderColor};` : ''}
                    ${infoBoxOffStatusBoxShadowCssValue ? `box-shadow: ${infoBoxOffStatusBoxShadowCssValue};` : ''}
                    transition: all .3s ease-in-out;
                }

                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed:hover{
                    ${ infoBoxOffStatusBgHoverColorType === "gradient" ? `background: ${ infoBoxOffStatusBgHoverCustomGradientColorSwitcher && infoBoxOffStatusBgHoverCustomGradientColor ? infoBoxOffStatusBgHoverCustomGradientColor : infoBoxOffStatusBgHoverGradientColor };` : infoBoxOffStatusBgHoverColor ? `background: ${infoBoxOffStatusBgHoverColor};` : '' }

                    ${infoBoxOffStatusBorderHoverColor ? `border-color: ${infoBoxOffStatusBorderHoverColor};` : ''}

                    transition: all .3s ease-in-out;
                }

                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-open .fb-timezone-status, 
                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-weekend .fb-timezone-status, 
                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-holiday .fb-timezone-status, 
                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-closed .fb-timezone-status {
                    ${statusTextGlobalTypoSwitcher?.fontFamily === true && statusTextGlobalTypographyData?.fontFamily ? `font-family: ${statusTextGlobalTypographyData?.fontFamily};` : ''}
                    ${statusTextGlobalTypoSwitcher?.fontSize === true && statusTextGlobalTypographyData?.fontSize ? `font-size: ${statusTextGlobalTypographyData?.fontSize};` : ''}
                    ${statusTextGlobalTypoSwitcher?.fontWeight === true && statusTextGlobalTypographyData?.fontWeight ? `font-weight: ${statusTextGlobalTypographyData?.fontWeight};` : ''}
                    ${statusTextGlobalTypoSwitcher?.fontStyle === true && statusTextGlobalTypographyData?.fontStyle ? `font-style: ${statusTextGlobalTypographyData?.fontStyle};` : ''}
                    ${statusTextGlobalTypoSwitcher?.textTransform === true && statusTextGlobalTypographyData?.textTransform ? `text-transform: ${statusTextGlobalTypographyData?.textTransform};` : ''}
                    ${statusTextGlobalTypoSwitcher?.textDecoration === true && statusTextGlobalTypographyData?.textDecoration ? `text-decoration: ${statusTextGlobalTypographyData?.textDecoration};` : ''}
                    ${statusTextGlobalTypoSwitcher?.letterSpacing === true && statusTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${statusTextGlobalTypographyData?.letterSpacing};` : ''}
                    ${statusTextGlobalTypoSwitcher?.lineHeight === true && statusTextGlobalTypographyData?.lineHeight ? `line-height: ${statusTextGlobalTypographyData?.lineHeight};` : ''}

                    ${statusTextGlobalTypoSwitcher?.fontFamily === false && statusTextFontFamily && statusTextFontFamily !== 'Default' ? `font-family: ${statusTextFontFamily};` : ''}
                    ${statusTextGlobalTypoSwitcher?.fontSize === false && statusTextFontSize?.Tablet && statusTextFontSizeUnits?.Tablet ? `font-size: ${statusTextFontSize?.Tablet}${statusTextFontSizeUnits?.Tablet};` : ''}
                    ${statusTextGlobalTypoSwitcher?.fontWeight === false && statusTextFontWeight ? `font-weight: ${statusTextFontWeight};` : ''}
                    ${statusTextGlobalTypoSwitcher?.fontStyle === false && statusTextFontStyle ? `font-style: ${statusTextFontStyle};` : ''}
                    ${statusTextGlobalTypoSwitcher?.textTransform === false && statusTextTransform ? `text-transform: ${statusTextTransform};` : ''}
                    ${statusTextGlobalTypoSwitcher?.textDecoration === false && statusTextDecoration ? `text-decoration: ${statusTextDecoration};` : ''}
                    ${statusTextGlobalTypoSwitcher?.letterSpacing === false && statusTextLetterSpacing?.Tablet && statusTextLetterSpacingUnits?.Tablet ? `letter-spacing: ${statusTextLetterSpacing?.Tablet}${statusTextLetterSpacingUnits?.Tablet};` : ''}
                    ${statusTextGlobalTypoSwitcher?.lineHeight === false && statusTextLineHeight?.Tablet && statusTextLineHeightUnits?.Tablet ? `line-height: ${statusTextLineHeight?.Tablet}${statusTextLineHeightUnits?.Tablet};` : ''}

                    ${statusTabletPaddingWidth && statusTabPadding?.top ? `padding: ${statusTabletPaddingWidth};` : ''}

                    transition: all .3s ease-in-out;
                }

                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-open .fb-timezone-status{
                    ${statusOpenColor ? `color: ${statusOpenColor};` : ''}
                    ${statusOpenBgColor ? `background-color: ${statusOpenBgColor};` : ''}
                    ${statusOpenBorder ? `border: ${statusOpenBorder};` : ''}
                    ${statusOpenTabletBorderWidth && statusOpenTabletBorder?.top ? `border-width: ${statusOpenTabletBorderWidth};` : ''}
                    ${statusOpenTabletBorderRadiusWidth && statusOpenTabBorderRadius?.top ? `border-radius: ${statusOpenTabletBorderRadiusWidth};` : ''}
                    ${statusOpenBorderColor ? `border-color: ${statusOpenBorderColor};` : ''}
                    transition: all .3s ease-in-out;
                }

                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-open .fb-timezone-status:hover{
                    ${statusOpenHoverColor ? `color: ${statusOpenHoverColor};` : ''}
                    ${statusOpenHoverBgColor ? `background-color: ${statusOpenHoverBgColor};` : ''}
                    ${statusOpenBorderHoverColor ? `border-color: ${statusOpenBorderHoverColor};` : ''}
                    transition: all .3s ease-in-out;
                }
                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-closed .fb-timezone-status,
                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-weekend .fb-timezone-status,
                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-holiday .fb-timezone-status{
                    ${statusCloseColor ? `color: ${statusCloseColor};` : ''}
                    ${statusCloseBgColor ? `background-color: ${statusCloseBgColor};` : ''}
                    ${statusCloseBorder ? `border: ${statusCloseBorder};` : ''}
                    ${statusCloseTabletBorderWidth && statusCloseTabletBorder?.top ? `border-width: ${statusCloseTabletBorderWidth};` : ''}
                    ${statusCloseTabletBorderRadiusWidth && statusCloseTabBorderRadius?.top ? `border-radius: ${statusCloseTabletBorderRadiusWidth};` : ''}
                    ${statusCloseBorderColor ? `border-color: ${statusCloseBorderColor};` : ''}
                    transition: all .3s ease-in-out;
                }

                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-closed .fb-timezone-status:hover
                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-weekend .fb-timezone-status:hover,
                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-holiday .fb-timezone-status:hover{
                    ${statusCloseHoverColor ? `color: ${statusCloseHoverColor};` : ''}
                    ${statusCloseHoverBgColor ? `background-color: ${statusCloseHoverBgColor};` : ''}
                    ${statusCloseBorderHoverColor ? `border-color: ${statusCloseBorderHoverColor};` : ''}
                    transition: all .3s ease-in-out;
                }

                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-timezone-status-info .fb-timezone-info-noted{
                    ${noticeTextGlobalTypoSwitcher?.fontFamily === true && noticeTextGlobalTypographyData?.fontFamily ? `font-family: ${noticeTextGlobalTypographyData?.fontFamily};` : ''}
                    ${noticeTextGlobalTypoSwitcher?.fontSize === true && noticeTextGlobalTypographyData?.fontSize ? `font-size: ${noticeTextGlobalTypographyData?.fontSize};` : ''}
                    ${noticeTextGlobalTypoSwitcher?.fontWeight === true && noticeTextGlobalTypographyData?.fontWeight ? `font-weight: ${noticeTextGlobalTypographyData?.fontWeight};` : ''}
                    ${noticeTextGlobalTypoSwitcher?.fontStyle === true && noticeTextGlobalTypographyData?.fontStyle ? `font-style: ${noticeTextGlobalTypographyData?.fontStyle};` : ''}
                    ${noticeTextGlobalTypoSwitcher?.textTransform === true && noticeTextGlobalTypographyData?.textTransform ? `text-transform: ${noticeTextGlobalTypographyData?.textTransform};` : ''}
                    ${noticeTextGlobalTypoSwitcher?.textDecoration === true && noticeTextGlobalTypographyData?.textDecoration ? `text-decoration: ${noticeTextGlobalTypographyData?.textDecoration};` : ''}
                    ${noticeTextGlobalTypoSwitcher?.letterSpacing === true && noticeTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${noticeTextGlobalTypographyData?.letterSpacing};` : ''}
                    ${noticeTextGlobalTypoSwitcher?.lineHeight === true && noticeTextGlobalTypographyData?.lineHeight ? `line-height: ${noticeTextGlobalTypographyData?.lineHeight};` : ''}

                    ${noticeTextGlobalTypoSwitcher?.fontFamily === false && noticeTextFontFamily && noticeTextFontFamily !== 'Default' ? `font-family: ${noticeTextFontFamily};` : ''}
                    ${noticeTextGlobalTypoSwitcher?.fontSize === false && noticeTextFontSize?.Tablet && noticeTextFontSizeUnits?.Tablet ? `font-size: ${noticeTextFontSize?.Tablet}${noticeTextFontSizeUnits?.Tablet};` : ''}
                    ${noticeTextGlobalTypoSwitcher?.fontWeight === false && noticeTextFontWeight ? `font-weight: ${noticeTextFontWeight};` : ''}
                    ${noticeTextGlobalTypoSwitcher?.fontStyle === false && noticeTextFontStyle ? `font-style: ${noticeTextFontStyle};` : ''}
                    ${noticeTextGlobalTypoSwitcher?.textTransform === false && noticeTextTransform ? `text-transform: ${noticeTextTransform};` : ''}
                    ${noticeTextGlobalTypoSwitcher?.textDecoration === false && noticeTextDecoration ? `text-decoration: ${noticeTextDecoration};` : ''}
                    ${noticeTextGlobalTypoSwitcher?.letterSpacing === false && noticeTextLetterSpacing?.Tablet && noticeTextLetterSpacingUnits?.Tablet ? `letter-spacing: ${noticeTextLetterSpacing?.Tablet}${noticeTextLetterSpacingUnits?.Tablet};` : ''}
                    ${noticeTextGlobalTypoSwitcher?.lineHeight === false && noticeTextLineHeight?.Tablet && noticeTextLineHeightUnits?.Tablet ? `line-height: ${noticeTextLineHeight?.Tablet}${noticeTextLineHeightUnits?.Tablet};` : ''}
                    
                    ${infoBoxTabletMarginWidth && infoBoxTabMargin?.top ? `margin: ${infoBoxTabletMarginWidth};` : ''}

                    transition: all .3s ease-in-out;
                }

                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open .fb-timezone-status-info .fb-timezone-info-noted{
                    ${noticeTextColor ? `color: ${noticeTextColor};` : ''}
                }
                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open .fb-timezone-status-info .fb-timezone-info-noted:hover{
                    ${noticeTextHoverColor ? `color: ${noticeTextHoverColor};` : ''}
                    transition: all .3s ease-in-out;
                }

                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed .fb-timezone-status-info .fb-timezone-info-noted,
                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.holiday .fb-timezone-status-info .fb-timezone-info-noted,
                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.weekend .fb-timezone-status-info .fb-timezone-info-noted{
                    ${statusOffNoticeTextColor ? `color: ${statusOffNoticeTextColor};` : ''}
                }
                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed .fb-timezone-status-info .fb-timezone-info-noted:hover,
                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.holiday .fb-timezone-status-info .fb-timezone-info-noted:hover,
                .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.weekend .fb-timezone-status-info .fb-timezone-info-noted:hover{
                    ${statusOffNoticeTextHoverColor ? `color: ${statusOffNoticeTextHoverColor};` : ''}
                    transition: all .3s ease-in-out;
                }
        
        }

        @media only screen and (max-width: 767px) {
            .${blockID}.fb-timezone-main-wrapper {
                ${timezonePositionType === 'default' ? `position: relative !important;` : ''}
                ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' ? `width: 100%;` : ''}
                ${timezonePositionType !== 'default' ? `position: ${timezonePositionType} !important;` : ''}
                ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneHZOrientationType === 'left' && timezoneHZLeftOffset?.Mobile ? `left: ${timezoneHZLeftOffset?.Mobile}${timezoneHZLeftOffsetUnits?.Mobile};` : ''} 
                ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneHZOrientationType === 'right' && timezoneHZRightOffset?.Mobile ? `right: ${timezoneHZRightOffset?.Mobile}${timezoneHZRightOffsetUnits?.Mobile};` : ''}
                ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneVROrientationType === 'top' && timezoneVRTopOffset?.Mobile ? `top: ${timezoneVRTopOffset?.Mobile}${timezoneVRTopOffsetUnits?.Mobile};` : ''}
                ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneVROrientationType === 'bottom' && timezoneVRBottomOffset?.Mobile ? `bottom: ${timezoneVRBottomOffset?.Mobile}${timezoneVRBottomOffsetUnits?.Mobile};` : ''}

                ${timezoneGlobalZIndex?.Mobile ? `z-index: ${timezoneGlobalZIndex?.Mobile};` : ''}
                ${timezoneOverflow !== 'default' ? `overflow: ${timezoneOverflow};` : ''}
            }
            
            .${blockID}.fb-timezone-main-wrapper .fb-timezone-container {
                gap: ${timezoneCardSpacing?.Mobile}${timezoneCardSpacingUnits?.Mobile};
                ${timezoneCardAlignment ? `justify-content: ${timezoneCardAlignment};` : ''}
                ${mobileBackgroundNormalStyles}
                ${timezoneMobilePaddingWidth && timezoneMobilePadding?.top ? `padding: ${timezoneMobilePaddingWidth};` : ''}
                ${timezoneMobileMarginWidth && timezoneMobileMargin?.top ? `margin: ${timezoneMobileMarginWidth};` : ''}
                ${timezoneGlobalBorder ? `border: ${timezoneGlobalBorder};` : ''}
                ${globalMobileBorderWidth && timezoneGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && timezoneGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
                ${timezoneGlobalBorderColor ? `border-color: ${timezoneGlobalBorderColor};` : ''}
                ${timezoneGlobalBoxShadowCssValue ? `box-shadow: ${timezoneGlobalBoxShadowCssValue};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID}.fb-timezone-main-wrapper .fb-timezone-container:hover {
                ${mobileBackgroundHoverStyles}
                ${timezoneGlobalBorderHoverColor ? `border-color: ${timezoneGlobalBorderHoverColor};` : ''}
                ${timezoneGlobalBoxShadowHoverCssValue ? `box-shadow: ${timezoneGlobalBoxShadowHoverCssValue};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone{
                position: relative;
                display: flex;
                align-items: center;
                gap: ${timezoneLocationTextSpacing?.Mobile}${timezoneLocationTextSpacingUnits?.Mobile};
                
                ${ locationTimezoneBgColorType === "gradient" ? `background: ${ locationTimezoneBgCustomGradientColorSwitcher && locationTimezoneBgCustomGradientColor ? locationTimezoneBgCustomGradientColor : locationTimezoneBgGradientColor };` : locationTimezoneBgColor ?`background: ${locationTimezoneBgColor};` : '' }
                
                ${locationTimezoneBorder ? `border: ${locationTimezoneBorder};` : ''}
                ${locationTimezoneMobileBorderWidth && locationTimezoneMobileBorder?.top ? `border-width: ${locationTimezoneMobileBorderWidth};` : ''}
                ${locationTimezoneMobileBorderRadiusWidth && locationTimezoneMobileBorderRadius?.top ? `border-radius: ${locationTimezoneMobileBorderRadiusWidth};` : ''}
                ${locationTimezoneBorderColor ? `border-color: ${locationTimezoneBorderColor};` : ''}
                ${locationTimezoneBoxShadowCssValue ? `box-shadow: ${locationTimezoneBoxShadowCssValue};` : ''}

                ${locationTimezoneMobilePaddingWidth && locationTimezoneMobilePadding?.top ? `padding: ${locationTimezoneMobilePaddingWidth};` : ''}
                ${locationTimezoneMobileMarginWidth && locationTimezoneMobileMargin?.top ? `margin: ${locationTimezoneMobileMarginWidth};` : ''}

                transition: all .3s ease-in-out;
            }
            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover{
                ${ locationTimezoneBgHoverColorType === "gradient" ? `background: ${ locationTimezoneBgHoverCustomGradientColorSwitcher && locationTimezoneBgHoverCustomGradientColor ? locationTimezoneBgHoverCustomGradientColor : locationTimezoneBgHoverGradientColor };` : locationTimezoneBgHoverColor ? `background: ${locationTimezoneBgHoverColor};` : '' }

                ${locationTimezoneBorderHoverColor ? `border-color: ${locationTimezoneBorderHoverColor};` : ''}

                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-location-name{
                ${timezoneLocationTextGlobalTypoSwitcher?.fontFamily === true && timezoneLocationTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneLocationTextGlobalTypographyData?.fontFamily};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.fontSize === true && timezoneLocationTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneLocationTextGlobalTypographyData?.fontSize};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.fontWeight === true && timezoneLocationTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneLocationTextGlobalTypographyData?.fontWeight};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.fontStyle === true && timezoneLocationTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneLocationTextGlobalTypographyData?.fontStyle};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.textTransform === true && timezoneLocationTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneLocationTextGlobalTypographyData?.textTransform};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.textDecoration === true && timezoneLocationTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneLocationTextGlobalTypographyData?.textDecoration};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.letterSpacing === true && timezoneLocationTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneLocationTextGlobalTypographyData?.letterSpacing};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.lineHeight === true && timezoneLocationTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneLocationTextGlobalTypographyData?.lineHeight};` : ''}

                ${timezoneLocationTextGlobalTypoSwitcher?.fontFamily === false && timezoneLocationTextFontFamily && timezoneLocationTextFontFamily !== 'Default' ? `font-family: ${timezoneLocationTextFontFamily};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.fontSize === false && timezoneLocationTextFontSize?.Mobile && timezoneLocationTextFontSizeUnits?.Mobile ? `font-size: ${timezoneLocationTextFontSize?.Mobile}${timezoneLocationTextFontSizeUnits?.Mobile};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.fontWeight === false && timezoneLocationTextFontWeight ? `font-weight: ${timezoneLocationTextFontWeight};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.fontStyle === false && timezoneLocationTextFontStyle ? `font-style: ${timezoneLocationTextFontStyle};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.textTransform === false && timezoneLocationTextTransform ? `text-transform: ${timezoneLocationTextTransform};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.textDecoration === false && timezoneLocationTextDecoration ? `text-decoration: ${timezoneLocationTextDecoration};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.letterSpacing === false && timezoneLocationTextLetterSpacing?.Mobile && timezoneLocationTextLetterSpacingUnits?.Mobile ? `letter-spacing: ${timezoneLocationTextLetterSpacing?.Mobile}${timezoneLocationTextLetterSpacingUnits?.Mobile};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.lineHeight === false && timezoneLocationTextLineHeight?.Mobile && timezoneLocationTextLineHeightUnits?.Mobile ? `line-height: ${timezoneLocationTextLineHeight?.Mobile}${timezoneLocationTextLineHeightUnits?.Mobile};` : ''}

                ${locationNameTextColor ? `color: ${locationNameTextColor};` : ''}

                ${locationNameTextColorType === 'gradient' ? `
                    background: ${locationNameTextCustomGradientColorSwitcher && locationNameTextCustomGradientColor ? locationNameTextCustomGradientColor : locationNameTextGradientColor};
                    ${locationNameTextCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                    ${locationNameTextGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ` : ''}

                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-location-name{

                ${locationNameTextHoverColor ? `color: ${locationNameTextHoverColor};` : ''}
                ${locationNameTextHoverColorType === 'gradient' ? `
                    background: ${locationNameTextHoverCustomGradientColorSwitcher && locationNameTextHoverCustomGradientColor ? locationNameTextHoverCustomGradientColor : locationNameTextHoverGradientColor};
                    ${locationNameTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                    ${locationNameTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ` : ''}
                
                transition: all .3s ease-in-out;
            }
            
            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-timezone-separator {
                font-size: ${separatorSize?.Mobile}${separatorFontUnits?.Mobile};
                line-height: 100%;
                ${separatorColor ? `color: ${separatorColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-timezone-separator {
                ${separatorHoverColor ? `color: ${separatorHoverColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-current-time {
                ${timezoneTimeTextGlobalTypoSwitcher?.fontFamily === true && timezoneTimeTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneTimeTextGlobalTypographyData?.fontFamily};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.fontSize === true && timezoneTimeTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneTimeTextGlobalTypographyData?.fontSize};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.fontWeight === true && timezoneTimeTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneTimeTextGlobalTypographyData?.fontWeight};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.fontStyle === true && timezoneTimeTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneTimeTextGlobalTypographyData?.fontStyle};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.textTransform === true && timezoneTimeTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneTimeTextGlobalTypographyData?.textTransform};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.textDecoration === true && timezoneTimeTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneTimeTextGlobalTypographyData?.textDecoration};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.letterSpacing === true && timezoneTimeTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneTimeTextGlobalTypographyData?.letterSpacing};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.lineHeight === true && timezoneTimeTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneTimeTextGlobalTypographyData?.lineHeight};` : ''}

                ${timezoneTimeTextGlobalTypoSwitcher?.fontFamily === false && timezoneTimeTextFontFamily && timezoneTimeTextFontFamily !== 'Default' ? `font-family: ${timezoneTimeTextFontFamily};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.fontSize === false && timezoneTimeTextFontSize?.Mobile && timezoneTimeTextFontSizeUnits?.Mobile ? `font-size: ${timezoneTimeTextFontSize?.Mobile}${timezoneTimeTextFontSizeUnits?.Mobile};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.fontWeight === false && timezoneTimeTextFontWeight ? `font-weight: ${timezoneTimeTextFontWeight};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.fontStyle === false && timezoneTimeTextFontStyle ? `font-style: ${timezoneTimeTextFontStyle};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.textTransform === false && timezoneTimeTextTransform ? `text-transform: ${timezoneTimeTextTransform};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.textDecoration === false && timezoneTimeTextDecoration ? `text-decoration: ${timezoneTimeTextDecoration};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.letterSpacing === false && timezoneTimeTextLetterSpacing?.Mobile && timezoneTimeTextLetterSpacingUnits?.Mobile ? `letter-spacing: ${timezoneTimeTextLetterSpacing?.Mobile}${timezoneTimeTextLetterSpacingUnits?.Mobile};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.lineHeight === false && timezoneTimeTextLineHeight?.Mobile && timezoneTimeTextLineHeightUnits?.Mobile ? `line-height: ${timezoneTimeTextLineHeight?.Mobile}${timezoneTimeTextLineHeightUnits?.Mobile};` : ''}

                ${timezoneTimeTextColor ? `color: ${timezoneTimeTextColor};` : ''}

                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-current-time{
                ${timezoneTimeTextHoverColor ? `color: ${timezoneTimeTextHoverColor};` : ''}

                ${timezoneTimeTextHoverColorType === 'gradient' ? `
                    background: ${timezoneTimeTextHoverCustomGradientColorSwitcher && timezoneTimeTextHoverCustomGradientColor ? timezoneTimeTextHoverCustomGradientColor : timezoneTimeTextHoverGradientColor};
                    ${timezoneTimeTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                    ${timezoneTimeTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ` : ''}
                
                transition: all .3s ease-in-out;
            }
            
            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-timezone-offset {
                ${timezoneTextGlobalTypoSwitcher?.fontFamily === true && timezoneTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneTextGlobalTypographyData?.fontFamily};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.fontSize === true && timezoneTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneTextGlobalTypographyData?.fontSize};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.fontWeight === true && timezoneTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneTextGlobalTypographyData?.fontWeight};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.fontStyle === true && timezoneTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneTextGlobalTypographyData?.fontStyle};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.textTransform === true && timezoneTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneTextGlobalTypographyData?.textTransform};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.textDecoration === true && timezoneTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneTextGlobalTypographyData?.textDecoration};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.letterSpacing === true && timezoneTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneTextGlobalTypographyData?.letterSpacing};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.lineHeight === true && timezoneTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneTextGlobalTypographyData?.lineHeight};` : ''}

                ${timezoneTextGlobalTypoSwitcher?.fontFamily === false && timezoneTextFontFamily && timezoneTextFontFamily !== 'Default' ? `font-family: ${timezoneTextFontFamily};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.fontSize === false && timezoneTextFontSize?.Mobile && timezoneTextFontSizeUnits?.Mobile ? `font-size: ${timezoneTextFontSize?.Mobile}${timezoneTextFontSizeUnits?.Mobile};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.fontWeight === false && timezoneTextFontWeight ? `font-weight: ${timezoneTextFontWeight};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.fontStyle === false && timezoneTextFontStyle ? `font-style: ${timezoneTextFontStyle};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.textTransform === false && timezoneTextTransform ? `text-transform: ${timezoneTextTransform};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.textDecoration === false && timezoneTextDecoration ? `text-decoration: ${timezoneTextDecoration};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.letterSpacing === false && timezoneTextLetterSpacing?.Mobile && timezoneTextLetterSpacingUnits?.Mobile ? `letter-spacing: ${timezoneTextLetterSpacing?.Mobile}${timezoneTextLetterSpacingUnits?.Mobile};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.lineHeight === false && timezoneTextLineHeight?.Mobile && timezoneTextLineHeightUnits?.Mobile ? `line-height: ${timezoneTextLineHeight?.Mobile}${timezoneTextLineHeightUnits?.Mobile};` : ''}

                ${timezoneTextColor ? `color: ${timezoneTextColor};` : ''}

                transition: all .3s ease-in-out;
            }
            
            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-timezone-offset{
                ${timezoneTextHoverColor ? `color: ${timezoneTextHoverColor};` : ''}
                ${timezoneTextHoverColorType === 'gradient' ? `
                    background: ${timezoneTextHoverCustomGradientColorSwitcher && timezoneTextHoverCustomGradientColor ? timezoneTextHoverCustomGradientColor : timezoneTextHoverGradientColor};
                    ${timezoneTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                    ${timezoneTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box {
                overflow: hidden;
                ${infoBoxBorder ? `border: ${infoBoxBorder};` : ''}
                ${infoBoxMobileBorderWidth && infoBoxMobileBorder?.top ? `border-width: ${infoBoxMobileBorderWidth};` : ''}
                ${infoBoxMobileBorderRadiusWidth && infoBoxMobileBorderRadius?.top ? `border-radius: ${infoBoxMobileBorderRadiusWidth};` : ''}
                ${infoBoxMobilePaddingWidth && infoBoxMobilePadding?.top ? `padding: ${infoBoxMobilePaddingWidth};` : ''}
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open {
                ${ infoBoxBgColorType === "gradient" ? `background: ${ infoBoxBgCustomGradientColorSwitcher && infoBoxBgCustomGradientColor ? infoBoxBgCustomGradientColor : infoBoxBgGradientColor };` : infoBoxBgColor ?`background: ${infoBoxBgColor};` : '' }
                ${infoBoxBorderColor ? `border-color: ${infoBoxBorderColor};` : ''}
                ${infoBoxBoxShadowCssValue ? `box-shadow: ${infoBoxBoxShadowCssValue};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open:hover{
                ${ infoBoxBgHoverColorType === "gradient" ? `background: ${ infoBoxBgHoverCustomGradientColorSwitcher && infoBoxBgHoverCustomGradientColor ? infoBoxBgHoverCustomGradientColor : infoBoxBgHoverGradientColor };` : infoBoxBgHoverColor ? `background: ${infoBoxBgHoverColor};` : '' }

                ${infoBoxBorderHoverColor ? `border-color: ${infoBoxBorderHoverColor};` : ''}

                transition: all .3s ease-in-out;
            }
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed {
                ${ infoBoxOffStatusBgColorType === "gradient" ? `background: ${ infoBoxOffStatusBgCustomGradientColorSwitcher && infoBoxOffStatusBgCustomGradientColor ? infoBoxOffStatusBgCustomGradientColor : infoBoxOffStatusBgGradientColor };` : infoBoxOffStatusBgColor ?`background: ${infoBoxOffStatusBgColor};` : '' }
                ${infoBoxOffStatusBorderColor ? `border-color: ${infoBoxOffStatusBorderColor};` : ''}
                ${infoBoxOffStatusBoxShadowCssValue ? `box-shadow: ${infoBoxOffStatusBoxShadowCssValue};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed:hover{
                ${ infoBoxOffStatusBgHoverColorType === "gradient" ? `background: ${ infoBoxOffStatusBgHoverCustomGradientColorSwitcher && infoBoxOffStatusBgHoverCustomGradientColor ? infoBoxOffStatusBgHoverCustomGradientColor : infoBoxOffStatusBgHoverGradientColor };` : infoBoxOffStatusBgHoverColor ? `background: ${infoBoxOffStatusBgHoverColor};` : '' }

                ${infoBoxOffStatusBorderHoverColor ? `border-color: ${infoBoxOffStatusBorderHoverColor};` : ''}

                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-open .fb-timezone-status, 
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-weekend .fb-timezone-status, 
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-holiday .fb-timezone-status, 
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-closed .fb-timezone-status {
                ${statusTextGlobalTypoSwitcher?.fontFamily === true && statusTextGlobalTypographyData?.fontFamily ? `font-family: ${statusTextGlobalTypographyData?.fontFamily};` : ''}
                ${statusTextGlobalTypoSwitcher?.fontSize === true && statusTextGlobalTypographyData?.fontSize ? `font-size: ${statusTextGlobalTypographyData?.fontSize};` : ''}
                ${statusTextGlobalTypoSwitcher?.fontWeight === true && statusTextGlobalTypographyData?.fontWeight ? `font-weight: ${statusTextGlobalTypographyData?.fontWeight};` : ''}
                ${statusTextGlobalTypoSwitcher?.fontStyle === true && statusTextGlobalTypographyData?.fontStyle ? `font-style: ${statusTextGlobalTypographyData?.fontStyle};` : ''}
                ${statusTextGlobalTypoSwitcher?.textTransform === true && statusTextGlobalTypographyData?.textTransform ? `text-transform: ${statusTextGlobalTypographyData?.textTransform};` : ''}
                ${statusTextGlobalTypoSwitcher?.textDecoration === true && statusTextGlobalTypographyData?.textDecoration ? `text-decoration: ${statusTextGlobalTypographyData?.textDecoration};` : ''}
                ${statusTextGlobalTypoSwitcher?.letterSpacing === true && statusTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${statusTextGlobalTypographyData?.letterSpacing};` : ''}
                ${statusTextGlobalTypoSwitcher?.lineHeight === true && statusTextGlobalTypographyData?.lineHeight ? `line-height: ${statusTextGlobalTypographyData?.lineHeight};` : ''}

                ${statusTextGlobalTypoSwitcher?.fontFamily === false && statusTextFontFamily && statusTextFontFamily !== 'Default' ? `font-family: ${statusTextFontFamily};` : ''}
                ${statusTextGlobalTypoSwitcher?.fontSize === false && statusTextFontSize?.Mobile && statusTextFontSizeUnits?.Mobile ? `font-size: ${statusTextFontSize?.Mobile}${statusTextFontSizeUnits?.Mobile};` : ''}
                ${statusTextGlobalTypoSwitcher?.fontWeight === false && statusTextFontWeight ? `font-weight: ${statusTextFontWeight};` : ''}
                ${statusTextGlobalTypoSwitcher?.fontStyle === false && statusTextFontStyle ? `font-style: ${statusTextFontStyle};` : ''}
                ${statusTextGlobalTypoSwitcher?.textTransform === false && statusTextTransform ? `text-transform: ${statusTextTransform};` : ''}
                ${statusTextGlobalTypoSwitcher?.textDecoration === false && statusTextDecoration ? `text-decoration: ${statusTextDecoration};` : ''}
                ${statusTextGlobalTypoSwitcher?.letterSpacing === false && statusTextLetterSpacing?.Mobile && statusTextLetterSpacingUnits?.Mobile ? `letter-spacing: ${statusTextLetterSpacing?.Mobile}${statusTextLetterSpacingUnits?.Mobile};` : ''}
                ${statusTextGlobalTypoSwitcher?.lineHeight === false && statusTextLineHeight?.Mobile && statusTextLineHeightUnits?.Mobile ? `line-height: ${statusTextLineHeight?.Mobile}${statusTextLineHeightUnits?.Mobile};` : ''}

                ${statusMobilePaddingWidth && statusMobilePadding?.top ? `padding: ${statusMobilePaddingWidth};` : ''}

                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-open .fb-timezone-status{
                ${statusOpenColor ? `color: ${statusOpenColor};` : ''}
                ${statusOpenBgColor ? `background-color: ${statusOpenBgColor};` : ''}
                ${statusOpenBorder ? `border: ${statusOpenBorder};` : ''}
                ${statusOpenMobileBorderWidth && statusOpenMobileBorder?.top ? `border-width: ${statusOpenMobileBorderWidth};` : ''}
                ${statusOpenMobileBorderRadiusWidth && statusOpenMobileBorderRadius?.top ? `border-radius: ${statusOpenMobileBorderRadiusWidth};` : ''}
                ${statusOpenBorderColor ? `border-color: ${statusOpenBorderColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-open .fb-timezone-status:hover{
                ${statusOpenHoverColor ? `color: ${statusOpenHoverColor};` : ''}
                ${statusOpenHoverBgColor ? `background-color: ${statusOpenHoverBgColor};` : ''}
                ${statusOpenBorderHoverColor ? `border-color: ${statusOpenBorderHoverColor};` : ''}
                transition: all .3s ease-in-out;
            }
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-closed .fb-timezone-status,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-weekend .fb-timezone-status,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-holiday .fb-timezone-status{
                ${statusCloseColor ? `color: ${statusCloseColor};` : ''}
                ${statusCloseBgColor ? `background-color: ${statusCloseBgColor};` : ''}
                ${statusCloseBorder ? `border: ${statusCloseBorder};` : ''}
                ${statusCloseMobileBorderWidth && statusCloseMobileBorder?.top ? `border-width: ${statusCloseMobileBorderWidth};` : ''}
                ${statusCloseMobileBorderRadiusWidth && statusCloseMobileBorderRadius?.top ? `border-radius: ${statusCloseMobileBorderRadiusWidth};` : ''}
                ${statusCloseBorderColor ? `border-color: ${statusCloseBorderColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-closed .fb-timezone-status:hover
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-weekend .fb-timezone-status:hover,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-holiday .fb-timezone-status:hover{
                ${statusCloseHoverColor ? `color: ${statusCloseHoverColor};` : ''}
                ${statusCloseHoverBgColor ? `background-color: ${statusCloseHoverBgColor};` : ''}
                ${statusCloseBorderHoverColor ? `border-color: ${statusCloseBorderHoverColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-timezone-status-info .fb-timezone-info-noted{
                ${noticeTextGlobalTypoSwitcher?.fontFamily === true && noticeTextGlobalTypographyData?.fontFamily ? `font-family: ${noticeTextGlobalTypographyData?.fontFamily};` : ''}
                ${noticeTextGlobalTypoSwitcher?.fontSize === true && noticeTextGlobalTypographyData?.fontSize ? `font-size: ${noticeTextGlobalTypographyData?.fontSize};` : ''}
                ${noticeTextGlobalTypoSwitcher?.fontWeight === true && noticeTextGlobalTypographyData?.fontWeight ? `font-weight: ${noticeTextGlobalTypographyData?.fontWeight};` : ''}
                ${noticeTextGlobalTypoSwitcher?.fontStyle === true && noticeTextGlobalTypographyData?.fontStyle ? `font-style: ${noticeTextGlobalTypographyData?.fontStyle};` : ''}
                ${noticeTextGlobalTypoSwitcher?.textTransform === true && noticeTextGlobalTypographyData?.textTransform ? `text-transform: ${noticeTextGlobalTypographyData?.textTransform};` : ''}
                ${noticeTextGlobalTypoSwitcher?.textDecoration === true && noticeTextGlobalTypographyData?.textDecoration ? `text-decoration: ${noticeTextGlobalTypographyData?.textDecoration};` : ''}
                ${noticeTextGlobalTypoSwitcher?.letterSpacing === true && noticeTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${noticeTextGlobalTypographyData?.letterSpacing};` : ''}
                ${noticeTextGlobalTypoSwitcher?.lineHeight === true && noticeTextGlobalTypographyData?.lineHeight ? `line-height: ${noticeTextGlobalTypographyData?.lineHeight};` : ''}

                ${noticeTextGlobalTypoSwitcher?.fontFamily === false && noticeTextFontFamily && noticeTextFontFamily !== 'Default' ? `font-family: ${noticeTextFontFamily};` : ''}
                ${noticeTextGlobalTypoSwitcher?.fontSize === false && noticeTextFontSize?.Mobile && noticeTextFontSizeUnits?.Mobile ? `font-size: ${noticeTextFontSize?.Mobile}${noticeTextFontSizeUnits?.Mobile};` : ''}
                ${noticeTextGlobalTypoSwitcher?.fontWeight === false && noticeTextFontWeight ? `font-weight: ${noticeTextFontWeight};` : ''}
                ${noticeTextGlobalTypoSwitcher?.fontStyle === false && noticeTextFontStyle ? `font-style: ${noticeTextFontStyle};` : ''}
                ${noticeTextGlobalTypoSwitcher?.textTransform === false && noticeTextTransform ? `text-transform: ${noticeTextTransform};` : ''}
                ${noticeTextGlobalTypoSwitcher?.textDecoration === false && noticeTextDecoration ? `text-decoration: ${noticeTextDecoration};` : ''}
                ${noticeTextGlobalTypoSwitcher?.letterSpacing === false && noticeTextLetterSpacing?.Mobile && noticeTextLetterSpacingUnits?.Mobile ? `letter-spacing: ${noticeTextLetterSpacing?.Mobile}${noticeTextLetterSpacingUnits?.Mobile};` : ''}
                ${noticeTextGlobalTypoSwitcher?.lineHeight === false && noticeTextLineHeight?.Mobile && noticeTextLineHeightUnits?.Mobile ? `line-height: ${noticeTextLineHeight?.Mobile}${noticeTextLineHeightUnits?.Mobile};` : ''}
                
                ${infoBoxMobileMarginWidth && infoBoxMobileMargin?.top ? `margin: ${infoBoxMobileMarginWidth};` : ''}

                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open .fb-timezone-status-info .fb-timezone-info-noted{
                ${noticeTextColor ? `color: ${noticeTextColor};` : ''}
            }
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open .fb-timezone-status-info .fb-timezone-info-noted:hover{
                ${noticeTextHoverColor ? `color: ${noticeTextHoverColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed .fb-timezone-status-info .fb-timezone-info-noted,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.holiday .fb-timezone-status-info .fb-timezone-info-noted,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.weekend .fb-timezone-status-info .fb-timezone-info-noted{
                ${statusOffNoticeTextColor ? `color: ${statusOffNoticeTextColor};` : ''}
            }
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed .fb-timezone-status-info .fb-timezone-info-noted:hover,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.holiday .fb-timezone-status-info .fb-timezone-info-noted:hover,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.weekend .fb-timezone-status-info .fb-timezone-info-noted:hover{
                ${statusOffNoticeTextHoverColor ? `color: ${statusOffNoticeTextHoverColor};` : ''}
                transition: all .3s ease-in-out;
            }
        }
	
	`, [attributes]);

    const customCss = getCustomCss(timezoneCustomCSS, `.${blockID}`);

	useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle}${customCss}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle, customCss] );

	
	/**
	* Inspector Style Controls
	*/
    const styleControls = (
        <>
			<PanelBody initialOpen={true}>
                <FB_AlignmentControl
                    label={__("Alignment", "frontis-blocks")}
                    globalAlignment={timezoneCardAlignment}
                    setGlobalAlignment={(value) => setAttributes({ timezoneCardAlignment: value })}
                />
				<FB_Range
					min={0}
					max={timezoneCardSpacingUnits === '%' ? 100 : 200}
					label={__("Gap", "frontis-blocks")}
					rangeValue={timezoneCardSpacing}
					onChangeHandler={(value) => setAttributes({ timezoneCardSpacing: value })}
					rangeUnitHandler={(value) => setAttributes({ timezoneCardSpacingUnits: value })}
					deviceType={deviceType}
					units={timezoneCardSpacingUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={'10'}
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
				title={__("Time", "frontis-blocks")} 
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

				<FB_BackgroundColorControl
					label={__("Color", "frontis-blocks")}
					bgColorSwitcher={timezoneTimeTextColorTypeSwitcher}
					setBgColorSwitcher={(value) => setAttributes({ timezoneTimeTextColorTypeSwitcher: value })}

                    normalLabel={__("Color Type", "frontis-blocks")}
					normalBackgroundType={timezoneTimeTextColorType}
					setNormalBackgroundType={(value) => setAttributes({ timezoneTimeTextColorType: value })}
					normalClassicColor={timezoneTimeTextColor}
					setNormalClassicColor={(value) => setAttributes({ timezoneTimeTextColor: value === undefined ? '' : value })}
					normalGradientColor={timezoneTimeTextGradientColor}
					setNormalGradientColor={(value) => setAttributes({ timezoneTimeTextGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={timezoneTimeTextCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ timezoneTimeTextCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={timezoneTimeTextCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ timezoneTimeTextCustomGradientColor: value === undefined ? null : value })}

                    hoverLabel={__("Color Type", "frontis-blocks")}
					hoverBackgroundType={timezoneTimeTextHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ timezoneTimeTextHoverColorType: value })}
					hoverClassicColor={timezoneTimeTextHoverColor}
					setHoverClassicColor={(value) => setAttributes({ timezoneTimeTextHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={timezoneTimeTextHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ timezoneTimeTextHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={timezoneTimeTextHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ timezoneTimeTextHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={timezoneTimeTextHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ timezoneTimeTextHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}
				/> 
			</PanelBody>

			<PanelBody 
				title={__("Timezone", "frontis-blocks")} 
				initialOpen={false}
			>
				<FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={timezoneTextGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ timezoneTextGlobalTypographyData: value })}

                    globalTypoType={timezoneTextGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            timezoneTextGlobalTypoType: value,
                            timezoneTimeTextGlobalTypoSwitcher: value === 'default' ? {...timezoneTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...timezoneTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={timezoneTextGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ timezoneTextGlobalTypoOption: value })}

                    fontFamily={timezoneTextFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ timezoneTextFontFamily: value, timezoneTextGlobalTypoSwitcher: {...timezoneTextGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={timezoneTextFontSize}
                    onChangeFontSize={(value) => setAttributes({ timezoneTextFontSize: value, timezoneTextGlobalTypoSwitcher: {...timezoneTextGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={timezoneTextFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ timezoneTextFontSizeUnits: value })}

                    fontWeight={timezoneTextFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ timezoneTextFontWeight: value, timezoneTextGlobalTypoSwitcher: {...timezoneTextGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={timezoneTimeTextFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ timezoneTextFontStyle: value, timezoneTextGlobalTypoSwitcher: {...timezoneTextGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={timezoneTimeTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ timezoneTextTransform: value, timezoneTextGlobalTypoSwitcher: {...timezoneTextGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={timezoneTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ timezoneTextDecoration: value, timezoneTextGlobalTypoSwitcher: {...timezoneTextGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={timezoneTextLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ timezoneTextLetterSpacing: value, timezoneTextGlobalTypoSwitcher: {...timezoneTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={timezoneTextLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ timezoneTextLetterSpacingUnits: value })}

                    lineHeight={timezoneTextLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ timezoneTextLineHeight: value, timezoneTextGlobalTypoSwitcher: {...timezoneTextGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={timezoneTextLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ timezoneTextLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

				<FB_BackgroundColorControl
					label={__("Color", "frontis-blocks")}
					bgColorSwitcher={timezoneTextColorTypeSwitcher}
					setBgColorSwitcher={(value) => setAttributes({ timezoneTextColorTypeSwitcher: value })}

                    normalLabel={__("Color Type", "frontis-blocks")}
					normalBackgroundType={timezoneTextColorType}
					setNormalBackgroundType={(value) => setAttributes({ timezoneTextColorType: value })}
					normalClassicColor={timezoneTextColor}
					setNormalClassicColor={(value) => setAttributes({ timezoneTextColor: value === undefined ? '' : value })}
					normalGradientColor={timezoneTextGradientColor}
					setNormalGradientColor={(value) => setAttributes({ timezoneTextGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={timezoneTextCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ timezoneTextCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={timezoneTextCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ timezoneTextCustomGradientColor: value === undefined ? null : value })}

                    hoverLabel={__("Color Type", "frontis-blocks")}
					hoverBackgroundType={timezoneTextHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ timezoneTextHoverColorType: value })}
					hoverClassicColor={timezoneTextHoverColor}
					setHoverClassicColor={(value) => setAttributes({ timezoneTextHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={timezoneTextHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ timezoneTextHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={timezoneTextHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ timezoneTextHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={timezoneTextHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ timezoneTextHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}

				/> 
			</PanelBody>

			<PanelBody title={__("Timezone Card", "frontis-blocks")} initialOpen={false}>

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
				<FB_BackgroundColorControl
					label={__("Background", "frontis-blocks")}
					bgColorSwitcher={locationTimezoneBgColorTypeSwitcher}
					setBgColorSwitcher={(value) => setAttributes({ locationTimezoneBgColorTypeSwitcher: value })}

					normalBackgroundType={locationTimezoneBgColorType}
					setNormalBackgroundType={(value) => setAttributes({ locationTimezoneBgColorType: value })}
					normalClassicColor={locationTimezoneBgColor}
					setNormalClassicColor={(value) => setAttributes({ locationTimezoneBgColor: value === undefined ? '' : value })}
					normalGradientColor={locationTimezoneBgGradientColor}
					setNormalGradientColor={(value) => setAttributes({ locationTimezoneBgGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={locationTimezoneBgCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ locationTimezoneBgCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={locationTimezoneBgCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ locationTimezoneBgCustomGradientColor: value === undefined ? null : value })}

					hoverBackgroundType={locationTimezoneBgHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ locationTimezoneBgHoverColorType: value })}
					hoverClassicColor={locationTimezoneBgHoverColor}
					setHoverClassicColor={(value) => setAttributes({ locationTimezoneBgHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={locationTimezoneBgHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ locationTimezoneBgHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={locationTimezoneBgHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ locationTimezoneBgHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={locationTimezoneBgHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ locationTimezoneBgHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}
				/>

				<FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={locationTimezonePaddingUnitsHandler}
                    spacingUnits={locationTimezonePaddingUnits}
                    spacingDesktop={locationTimezoneDesktopPadding}
                    spacingTablet={locationTimezoneTabPadding}
                    spacingMobile={locationTimezoneMobilePadding}
                    handleSpacingUnitHandler={locationTimezonePaddingUnitsChange}
                    spacingCombineBtn={locationTimezonePaddingLink}
                    spacingCombineBtnHandler={locationTimezonePaddingLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={locationTimezoneMarginUnitsHandler}
                    spacingUnits={locationTimezoneMarginUnits}
                    spacingDesktop={locationTimezoneDesktopMargin}
                    spacingTablet={locationTimezoneTabMargin}
                    spacingMobile={locationTimezoneMobileMargin}
                    handleSpacingUnitHandler={locationTimezoneMarginUnitsChange}
                    spacingCombineBtn={locationTimezoneMarginLink}
                    spacingCombineBtnHandler={locationTimezoneMarginLinkBtn}
                    setAttributes={setAttributes}
                />

				<SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={locationTimezoneBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ locationTimezoneBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={locationTimezoneBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ locationTimezoneBorderColorSwitcher: value })}
                />

                {locationTimezoneBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={locationTimezoneBorderColor}
                        setGlobalColor={(value) => setAttributes({ locationTimezoneBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {locationTimezoneBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={locationTimezoneBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ locationTimezoneBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={locationTimezoneBorderUnitsHandler}
                    spacingUnits={locationTimezoneBorderUnits}
                    spacingDesktop={locationTimezoneDesktopBorder}
                    spacingTablet={locationTimezoneTabletBorder}
                    spacingMobile={locationTimezoneMobileBorder}
                    handleSpacingUnitHandler={locationTimezoneBorderUnitsChange}
                    spacingCombineBtn={locationTimezoneBorderLink}
                    spacingCombineBtnHandler={locationTimezoneBorderLinkBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={locationTimezoneBorderRadiusUnitsHandler}
                    spacingUnits={locationTimezoneBorderRadiusUnits}
                    spacingDesktop={locationTimezoneDesktopBorderRadius}
                    spacingTablet={locationTimezoneTabBorderRadius}
                    spacingMobile={locationTimezoneMobileBorderRadius}
                    handleSpacingUnitHandler={locationTimezoneBorderRadiusUnitsChange}
                    spacingCombineBtn={locationTimezoneBorderRadiusLink}
                    spacingCombineBtnHandler={locationTimezoneBorderRadiusLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_BoxShadowControl
                    label={__("Box Shadow", "frontis-blocks")}
                    onBoxShadowChange={(value) => setAttributes({ locationTimezoneBoxShadowValues: value })}
                    initialShadowValue={locationTimezoneBoxShadowValues}
                    onBoxShadowStyleChange={(value) => setAttributes({ locationTimezoneBoxShadowCssValue: value })}
                />
			</PanelBody>

			<PanelBody title={__("Status ON/OFF", "frontis-blocks")} initialOpen={false}>
				<FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={statusTextGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ statusTextGlobalTypographyData: value })}

                    globalTypoType={statusTextGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            statusTextGlobalTypoType: value,
                            statusTextGlobalTypoSwitcher: value === 'default' ? {...statusTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...statusTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={statusTextGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ statusTextGlobalTypoOption: value })}

                    fontFamily={statusTextFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ statusTextFontFamily: value, statusTextGlobalTypoSwitcher: {...statusTextGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={statusTextFontSize}
                    onChangeFontSize={(value) => setAttributes({ statusTextFontSize: value, statusTextGlobalTypoSwitcher: {...statusTextGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={statusTextFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ statusTextFontSizeUnits: value })}

                    fontWeight={statusTextFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ statusTextFontWeight: value, statusTextGlobalTypoSwitcher: {...statusTextGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={statusTextFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ statusTextFontStyle: value, statusTextGlobalTypoSwitcher: {...statusTextGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={statusTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ statusTextTransform: value, statusTextGlobalTypoSwitcher: {...statusTextGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={statusTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ statusTextDecoration: value, statusTextGlobalTypoSwitcher: {...statusTextGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={statusTextLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ statusTextLetterSpacing: value, statusTextGlobalTypoSwitcher: {...statusTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={statusTextLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ statusTextLetterSpacingUnits: value })}

                    lineHeight={statusTextLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ statusTextLineHeight: value, statusTextGlobalTypoSwitcher: {...statusTextGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={statusTextLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ statusTextLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

				<FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={statusPaddingUnitsHandler}
                    spacingUnits={statusPaddingUnits}
                    spacingDesktop={statusDesktopPadding}
                    spacingTablet={statusTabPadding}
                    spacingMobile={statusMobilePadding}
                    handleSpacingUnitHandler={statusPaddingUnitsChange}
                    spacingCombineBtn={statusPaddingLink}
                    spacingCombineBtnHandler={statusPaddingLinkBtn}
                    setAttributes={setAttributes}
                />
				
			</PanelBody>

			{/* open */}
			<PanelBody title={__("Status On", "frontis-blocks")} initialOpen={false}>
				
				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={statusOpenColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ statusOpenColorSwitcher: value })}
				/>
				{statusOpenColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={statusOpenColor}
						setGlobalColor={(value) => setAttributes({ statusOpenColor: value === undefined ? '' : value })}
					/>
				)}
				{statusOpenColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={statusOpenHoverColor}
						setGlobalColor={(value) => setAttributes({ statusOpenHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_SwitcherControl
					label={__("Background", "frontis-blocks")}
					globalSwitcher={statusOpenBgColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ statusOpenBgColorSwitcher: value })}
				/>
				{statusOpenBgColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal BG", "frontis-blocks")}
						globalColor={statusOpenBgColor}
						setGlobalColor={(value) => setAttributes({ statusOpenBgColor: value === undefined ? '' : value })}
					/>
				)}
				{statusOpenBgColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover BG", "frontis-blocks")}
						globalColor={statusOpenHoverBgColor}
						setGlobalColor={(value) => setAttributes({ statusOpenHoverBgColor: value === undefined ? '' : value })}
					/>
				)}
				<SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={statusOpenBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ statusOpenBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={statusOpenBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ statusOpenBorderColorSwitcher: value })}
                />

                {statusOpenBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={statusOpenBorderColor}
                        setGlobalColor={(value) => setAttributes({ statusOpenBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {statusOpenBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={statusOpenBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ statusOpenBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}
                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={statusOpenBorderUnitsHandler}
                    spacingUnits={statusOpenBorderUnits}
                    spacingDesktop={statusOpenDesktopBorder}
                    spacingTablet={statusOpenTabletBorder}
                    spacingMobile={statusOpenMobileBorder}
                    handleSpacingUnitHandler={statusOpenBorderUnitsChange}
                    spacingCombineBtn={statusOpenBorderLink}
                    spacingCombineBtnHandler={statusOpenBorderLinkBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={statusOpenBorderRadiusUnitsHandler}
                    spacingUnits={statusOpenBorderRadiusUnits}
                    spacingDesktop={statusOpenDesktopBorderRadius}
                    spacingTablet={statusOpenTabBorderRadius}
                    spacingMobile={statusOpenMobileBorderRadius}
                    handleSpacingUnitHandler={statusOpenBorderRadiusUnitsChange}
                    spacingCombineBtn={statusOpenBorderRadiusLink}
                    spacingCombineBtnHandler={statusOpenBorderRadiusLinkBtn}
                    setAttributes={setAttributes}
                />
			</PanelBody>

			{/* close */}
			<PanelBody title={__("Status OFF", "frontis-blocks")} initialOpen={false}>
				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={statusCloseColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ statusCloseColorSwitcher: value })}
				/>
				{statusCloseColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={statusCloseColor}
						setGlobalColor={(value) => setAttributes({ statusCloseColor: value === undefined ? '' : value })}
					/>
				)}

				{statusCloseColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={statusCloseHoverColor}
						setGlobalColor={(value) => setAttributes({ statusCloseHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_SwitcherControl
					label={__("Background", "frontis-blocks")}
					globalSwitcher={statusCloseBgColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ statusCloseBgColorSwitcher: value })}
				/>
				{statusCloseBgColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal BG", "frontis-blocks")}
						globalColor={statusCloseBgColor}
						setGlobalColor={(value) => setAttributes({ statusCloseBgColor: value === undefined ? '' : value })}
					/>
				)}

				{statusCloseBgColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover BG", "frontis-blocks")}
						globalColor={statusCloseHoverBgColor}
						setGlobalColor={(value) => setAttributes({ statusCloseHoverBgColor: value === undefined ? '' : value })}
					/>
				)}
				<SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={statusCloseBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ statusCloseBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={statusCloseBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ statusCloseBorderColorSwitcher: value })}
                />

                {statusCloseBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={statusCloseBorderColor}
                        setGlobalColor={(value) => setAttributes({ statusCloseBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {statusCloseBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={statusCloseBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ statusCloseBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}
                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={statusCloseBorderUnitsHandler}
                    spacingUnits={statusCloseBorderUnits}
                    spacingDesktop={statusCloseDesktopBorder}
                    spacingTablet={statusCloseTabletBorder}
                    spacingMobile={statusCloseMobileBorder}
                    handleSpacingUnitHandler={statusCloseBorderUnitsChange}
                    spacingCombineBtn={statusCloseBorderLink}
                    spacingCombineBtnHandler={statusCloseBorderLinkBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={statusCloseBorderRadiusUnitsHandler}
                    spacingUnits={statusCloseBorderRadiusUnits}
                    spacingDesktop={statusCloseDesktopBorderRadius}
                    spacingTablet={statusCloseTabBorderRadius}
                    spacingMobile={statusCloseMobileBorderRadius}
                    handleSpacingUnitHandler={statusCloseBorderRadiusUnitsChange}
                    spacingCombineBtn={statusCloseBorderRadiusLink}
                    spacingCombineBtnHandler={statusCloseBorderRadiusLinkBtn}
                    setAttributes={setAttributes}
                />
			</PanelBody>
			
			<PanelBody title={__("Notice Info Box", "frontis-blocks")} initialOpen={false}>
				<FB_BackgroundColorControl
					label={__("On Status BG", "frontis-blocks")}
					bgColorSwitcher={infoBoxBgColorTypeSwitcher}
					setBgColorSwitcher={(value) => setAttributes({ infoBoxBgColorTypeSwitcher: value })}

					normalBackgroundType={infoBoxBgColorType}
					setNormalBackgroundType={(value) => setAttributes({ infoBoxBgColorType: value })}
					normalClassicColor={infoBoxBgColor}
					setNormalClassicColor={(value) => setAttributes({ infoBoxBgColor: value === undefined ? '' : value })}
					normalGradientColor={infoBoxBgGradientColor}
					setNormalGradientColor={(value) => setAttributes({ infoBoxBgGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={infoBoxBgCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ infoBoxBgCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={infoBoxBgCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ infoBoxBgCustomGradientColor: value === undefined ? null : value })}

					hoverBackgroundType={infoBoxBgHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ infoBoxBgHoverColorType: value })}
					hoverClassicColor={infoBoxBgHoverColor}
					setHoverClassicColor={(value) => setAttributes({ infoBoxBgHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={infoBoxBgHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ infoBoxBgHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={infoBoxBgHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ infoBoxBgHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={infoBoxBgHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ infoBoxBgHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}
				/>

				<FB_BackgroundColorControl
					label={__("Off Status BG", "frontis-blocks")}
					bgColorSwitcher={infoBoxOffStatusBgColorTypeSwitcher}
					setBgColorSwitcher={(value) => setAttributes({ infoBoxOffStatusBgColorTypeSwitcher: value })}

					normalBackgroundType={infoBoxOffStatusBgColorType}
					setNormalBackgroundType={(value) => setAttributes({ infoBoxOffStatusBgColorType: value })}
					normalClassicColor={infoBoxOffStatusBgColor}
					setNormalClassicColor={(value) => setAttributes({ infoBoxOffStatusBgColor: value === undefined ? '' : value })}
					normalGradientColor={infoBoxOffStatusBgGradientColor}
					setNormalGradientColor={(value) => setAttributes({ infoBoxOffStatusBgGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={infoBoxOffStatusBgCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ infoBoxOffStatusBgCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={infoBoxOffStatusBgCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ infoBoxOffStatusBgCustomGradientColor: value === undefined ? null : value })}

					hoverBackgroundType={infoBoxOffStatusBgHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ infoBoxOffStatusBgHoverColorType: value })}
					hoverClassicColor={infoBoxOffStatusBgHoverColor}
					setHoverClassicColor={(value) => setAttributes({ infoBoxOffStatusBgHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={infoBoxOffStatusBgHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ infoBoxOffStatusBgHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={infoBoxOffStatusBgHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ infoBoxOffStatusBgHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={infoBoxOffStatusBgHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ infoBoxOffStatusBgHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}
				/>

				<SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={infoBoxBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ infoBoxBorder: value })}
                />
                <FB_SwitcherControl
                    label={__("On Status Border Color", "frontis-blocks")}
                    globalSwitcher={infoBoxBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ infoBoxBorderColorSwitcher: value })}
                />
                {infoBoxBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={infoBoxBorderColor}
                        setGlobalColor={(value) => setAttributes({ infoBoxBorderColor: value === undefined ? '' : value })}
                    />
                )}
                {infoBoxBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={infoBoxBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ infoBoxBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}
                <FB_SwitcherControl
                    label={__("Off Status Border Color", "frontis-blocks")}
                    globalSwitcher={infoBoxOffStatusBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ infoBoxOffStatusBorderColorSwitcher: value })}
                />
                {infoBoxOffStatusBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={infoBoxOffStatusBorderColor}
                        setGlobalColor={(value) => setAttributes({ infoBoxOffStatusBorderColor: value === undefined ? '' : value })}
                    />
                )}
                {infoBoxOffStatusBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={infoBoxOffStatusBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ infoBoxOffStatusBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}
                <FB_Spacing
                    label={__("Border Width", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={infoBoxBorderUnitsHandler}
                    spacingUnits={infoBoxBorderUnits}
                    spacingDesktop={infoBoxDesktopBorder}
                    spacingTablet={infoBoxTabletBorder}
                    spacingMobile={infoBoxMobileBorder}
                    handleSpacingUnitHandler={infoBoxBorderUnitsChange}
                    spacingCombineBtn={infoBoxBorderLink}
                    spacingCombineBtnHandler={infoBoxBorderLinkBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={infoBoxBorderRadiusUnitsHandler}
                    spacingUnits={infoBoxBorderRadiusUnits}
                    spacingDesktop={infoBoxDesktopBorderRadius}
                    spacingTablet={infoBoxTabBorderRadius}
                    spacingMobile={infoBoxMobileBorderRadius}
                    handleSpacingUnitHandler={infoBoxBorderRadiusUnitsChange}
                    spacingCombineBtn={infoBoxBorderRadiusLink}
                    spacingCombineBtnHandler={infoBoxBorderRadiusLinkBtn}
                    setAttributes={setAttributes}
                />
                <FB_BoxShadowControl
                    label={__("On Status Box Shadow", "frontis-blocks")}
                    onBoxShadowChange={(value) => setAttributes({ infoBoxBoxShadowValues: value })}
                    initialShadowValue={infoBoxBoxShadowValues}
                    onBoxShadowStyleChange={(value) => setAttributes({ infoBoxBoxShadowCssValue: value })}
                />
                <FB_BoxShadowControl
                    label={__("Off Status Box Shadow", "frontis-blocks")}
                    onBoxShadowChange={(value) => setAttributes({ infoBoxOffStatusBoxShadowValues: value })}
                    initialShadowValue={infoBoxOffStatusBoxShadowValues}
                    onBoxShadowStyleChange={(value) => setAttributes({ infoBoxOffStatusBoxShadowCssValue: value })}
                />
                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={infoBoxPaddingUnitsHandler}
                    spacingUnits={infoBoxPaddingUnits}
                    spacingDesktop={infoBoxDesktopPadding}
                    spacingTablet={infoBoxTabPadding}
                    spacingMobile={infoBoxMobilePadding}
                    handleSpacingUnitHandler={infoBoxPaddingUnitsChange}
                    spacingCombineBtn={infoBoxPaddingLink}
                    spacingCombineBtnHandler={infoBoxPaddingLinkBtn}
                    setAttributes={setAttributes}
                />
			</PanelBody>

			<PanelBody title={__("Notice Text", "frontis-blocks")} initialOpen={false}>
				<FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={noticeTextGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ noticeTextGlobalTypographyData: value })}

                    globalTypoType={noticeTextGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            noticeTextGlobalTypoType: value,
                            noticeTextGlobalTypoSwitcher: value === 'default' ? {...noticeTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...noticeTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={noticeTextGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ noticeTextGlobalTypoOption: value })}

                    fontFamily={noticeTextFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ noticeTextFontFamily: value, noticeTextGlobalTypoSwitcher: {...noticeTextGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={noticeTextFontSize}
                    onChangeFontSize={(value) => setAttributes({ noticeTextFontSize: value, noticeTextGlobalTypoSwitcher: {...noticeTextGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={noticeTextFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ noticeTextFontSizeUnits: value })}

                    fontWeight={noticeTextFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ noticeTextFontWeight: value, noticeTextGlobalTypoSwitcher: {...noticeTextGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={noticeTextFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ noticeTextFontStyle: value, noticeTextGlobalTypoSwitcher: {...noticeTextGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={noticeTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ noticeTextTransform: value, noticeTextGlobalTypoSwitcher: {...noticeTextGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={noticeTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ noticeTextDecoration: value, noticeTextGlobalTypoSwitcher: {...noticeTextGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={noticeTextLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ noticeTextLetterSpacing: value, noticeTextGlobalTypoSwitcher: {...noticeTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={noticeTextLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ noticeTextLetterSpacingUnits: value })}

                    lineHeight={noticeTextLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ noticeTextLineHeight: value, noticeTextGlobalTypoSwitcher: {...noticeTextGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={noticeTextLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ noticeTextLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />
                <FB_SwitcherControl
					label={__("Status ON Color", "frontis-blocks")}
					globalSwitcher={noticeTextColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ noticeTextColorSwitcher: value })}
				/>
				{noticeTextColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={noticeTextColor}
						setGlobalColor={(value) => setAttributes({ noticeTextColor: value === undefined ? '' : value })}
					/>
				)}

				{noticeTextColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={noticeTextHoverColor}
						setGlobalColor={(value) => setAttributes({ noticeTextHoverColor: value === undefined ? '' : value })}
					/>
				)}
                <FB_SwitcherControl
					label={__("Status OFF Color", "frontis-blocks")}
					globalSwitcher={statusOffNoticeTextColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ statusOffNoticeTextColorSwitcher: value })}
				/>
				{statusOffNoticeTextColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={statusOffNoticeTextColor}
						setGlobalColor={(value) => setAttributes({ statusOffNoticeTextColor: value === undefined ? '' : value })}
					/>
				)}

				{statusOffNoticeTextColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={statusOffNoticeTextHoverColor}
						setGlobalColor={(value) => setAttributes({ statusOffNoticeTextHoverColor: value === undefined ? '' : value })}
					/>
				)}
                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={infoBoxMarginUnitsHandler}
                    spacingUnits={infoBoxMarginUnits}
                    spacingDesktop={infoBoxDesktopMargin}
                    spacingTablet={infoBoxTabMargin}
                    spacingMobile={infoBoxMobileMargin}
                    handleSpacingUnitHandler={infoBoxMarginUnitsChange}
                    spacingCombineBtn={infoBoxMarginLink}
                    spacingCombineBtnHandler={infoBoxMarginLinkBtn}
                    setAttributes={setAttributes}
                />
			</PanelBody>
			
        </>
    );

    /**
     * Inspector Advanced Controls
    */
    const advancedControls = (
        <>
            <div className="fb-setting-advanced-tab-wrapper">
                <div className="fb-setting-inner-wrapper">
                    <PanelBody
                        title={__("Layout", "frontis-blocks")}
                        initialOpen={true}
                        className='fb-setting-layout-header'
                    >
                        <FB_Range
                            min={0}
                            max={10000000}
                            label={__("Z Index", "frontis-blocks")}
                            rangeValue={timezoneGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ timezoneGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={timezoneOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ timezoneOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={timezonePositionType}
                            setPositionType={(value) => setAttributes({ timezonePositionType: value })}

                            HZOrientationType={timezoneHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ timezoneHZOrientationType: value })
                            }
                            VROrientationType={timezoneVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ timezoneVROrientationType: value })
                            }

                            HZLeftOffset={timezoneHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ timezoneHZLeftOffset: value })}
                            HZLeftOffsetUnits={timezoneHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ timezoneHZLeftOffsetUnits: value })}
                            HZRightOffset={timezoneHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ timezoneHZRightOffset: value })}
                            HZRightOffsetUnits={timezoneHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ timezoneHZRightOffsetUnits: value })}

                            VRTopOffset={timezoneVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ timezoneVRTopOffset: value })}
                            VRTopOffsetUnits={timezoneVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ timezoneVRTopOffsetUnits: value })}
                            VRBottomOffset={timezoneVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ timezoneVRBottomOffset: value })}
                            VRBottomOffsetUnits={timezoneVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ timezoneVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={timezoneGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ timezoneGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={timezoneGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ timezoneGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />

                    </PanelBody>

                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleTimezoneGlobalPaddingUnitsHandler}
                            spacingUnits={timezonePaddingUnits}
                            spacingDesktop={timezoneDesktopPadding}
                            spacingTablet={timezoneTabPadding}
                            spacingMobile={timezoneMobilePadding}
                            handleSpacingUnitHandler={handleTimezoneGlobalPaddingUnitChange}
                            spacingCombineBtn={timezonePaddingLink}
                            spacingCombineBtnHandler={handleTimezoneGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleTimezoneMarginUnits}
                            spacingUnits={timezoneMarginUnits}
                            spacingDesktop={timezoneDesktopMargin}
                            spacingTablet={timezoneTabMargin}
                            spacingMobile={timezoneMobileMargin}
                            handleSpacingUnitHandler={handleTimezoneMarginUnitsChange}
                            spacingCombineBtn={timezoneMarginLink}
                            spacingCombineBtnHandler={handleTimezoneMarginLinkBtn}
                            setAttributes={setAttributes}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Background", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_SwitcherControl
                            label={__("Background Type", "frontis-blocks")}
                            globalSwitcher={timezoneGlobalBgColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ timezoneGlobalBgColorSwitcher: value })}
                        />

                        {timezoneGlobalBgColorSwitcher === 'normal' && (
                            <BaseControl
                                className="fb-setting-background-color-setting-wrapper"
                                label={__("Normal Background Type", "frontis-blocks")}
                            >
                                <Dropdown
                                    className="fb-setting-background-color-setting-icon-dropdown"
                                    contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
                                    popoverProps={{ placement: 'bottom-start' }}
                                    renderToggle={({ isOpen, onToggle }) => (
                                        <Button
                                            variant="primary"
                                            onClick={onToggle}
                                            aria-expanded={isOpen}
                                            className="fb-setting-background-color-setting-icon-btn"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M2.66699 14.666H13.3337" stroke="#1C274C"/>
                                                <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C"/>
                                            </svg>
                                        </Button>
                                    )}
                                    renderContent={() => (
                                        <div className="fb-setting-background-color-popup-wrapper">
                                            <BaseControl
                                                className="fb-setting-background-color-popup-inner-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-background-color-panel-btn">
                                                    {BACKGROUND_TYPES.map((item) => (
                                                        <Button
                                                            key={item.value}
                                                            onClick={() => setAttributes({ timezoneGlobalBgNormalBackgroundType: item.value })}
                                                            className={`fb-setting-background-color-panel-btn-switcher ${timezoneGlobalBgNormalBackgroundType === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {timezoneGlobalBgNormalBackgroundType === 'classic' && (

                                                <>
                                                    <FB_ColorControl
                                                        label={__("Color", "frontis-blocks")}
                                                        globalColor={timezoneGlobalBgNormalClassicColor}
                                                        setGlobalColor={(value) => setAttributes({ timezoneGlobalBgNormalClassicColor: value === undefined ? '' : value })}
                                                    />

                                                    <FB_ResponsiveBackgroundImageControl
                                                        deviceType={deviceType}
                                                        globalBackgroundImageUrl={timezoneGlobalBgNormalBackgroundImageUrl}
                                                        setGlobalBackgroundImageUrl={(value) => setAttributes({ timezoneGlobalBgNormalBackgroundImageUrl: value })}
                                                        globalBackgroundImagePosition={timezoneGlobalBgNormalBackgroundImagePosition}
                                                        setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ timezoneGlobalBgNormalBackgroundImagePosition: newPosition })}
                                                        globalBackgroundImageAttachment={timezoneGlobalBgNormalBackgroundImageAttachment}
                                                        setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ timezoneGlobalBgNormalBackgroundImageAttachment: newAttachment })}
                                                        globalBackgroundImageRepeat={timezoneGlobalBgNormalBackgroundImageRepeat}
                                                        setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ timezoneGlobalBgNormalBackgroundImageRepeat: newRepeat })}
                                                        globalBackgroundImageSize={timezoneGlobalBgNormalBackgroundImageSize}
                                                        setGlobalBackgroundImageSize={(newSize) => setAttributes({ timezoneGlobalBgNormalBackgroundImageSize: newSize })}
                                                        setAttributes={setAttributes}
                                                    />

                                                </>
                                            )}

                                            {timezoneGlobalBgNormalBackgroundType === 'gradient' && (
                                                <FB_GradientColorControl
                                                    globalCustomGradientSwitcher={timezoneGlobalBgNormalCustomGradientSwitcher}
                                                    setGlobalCustomGradientSwitcher={(value) => setAttributes({ timezoneGlobalBgNormalCustomGradientSwitcher: value })}
                                                    globalCustomGradientInputValue={timezoneGlobalBgNormalCustomGradientInputValue}
                                                    setGlobalCustomGradientInputValue={(value) => setAttributes({ timezoneGlobalBgNormalCustomGradientInputValue: value })}
                                                    globalGradientColor={timezoneGlobalBgNormalGradientColor}
                                                    setGlobalGradientColor={(value) => setAttributes({ timezoneGlobalBgNormalGradientColor: value === undefined ? null : value })}
                                                />
                                            )}
                                        </div>
                                    )}
                                />
                            </BaseControl>

                        )}

                        {timezoneGlobalBgColorSwitcher === 'hover' && (
                            <BaseControl
                                className="fb-setting-background-color-setting-wrapper"
                                label={__("Hover Background Type", "frontis-blocks")}
                            >
                                <Dropdown
                                    className="fb-setting-background-color-setting-icon-dropdown"
                                    contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
                                    popoverProps={{ placement: 'bottom-start' }}
                                    renderToggle={({ isOpen, onToggle }) => (
                                        <Button
                                            variant="primary"
                                            onClick={onToggle}
                                            aria-expanded={isOpen}
                                            className="fb-setting-background-color-setting-icon-btn"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M2.66699 14.666H13.3337" stroke="#1C274C"/>
                                                <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C"/>
                                            </svg>
                                        </Button>
                                    )}
                                    renderContent={() => (
                                        <div className="fb-setting-background-color-popup-wrapper">
                                            <BaseControl
                                                className="fb-setting-background-color-popup-inner-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-background-color-panel-btn">
                                                    {BACKGROUND_TYPES.map((item) => (
                                                        <Button
                                                            key={item.value}
                                                            onClick={() => setAttributes({ timezoneGlobalBgHoverBackgroundType: item.value })}
                                                            className={`fb-setting-background-color-panel-btn-switcher ${timezoneGlobalBgHoverBackgroundType === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {timezoneGlobalBgHoverBackgroundType === 'classic' && (

                                                <>
                                                    <FB_ColorControl
                                                        label={__("Color", "frontis-blocks")}
                                                        globalColor={timezoneGlobalBgHoverClassicColor}
                                                        setGlobalColor={(value) => setAttributes({ timezoneGlobalBgHoverClassicColor: value === undefined ? '' : value })}
                                                    />

                                                    <FB_ResponsiveBackgroundImageControl
                                                        deviceType={deviceType}
                                                        globalBackgroundImageUrl={timezoneGlobalBgHoverBackgroundImageUrl}
                                                        setGlobalBackgroundImageUrl={(value) => setAttributes({ timezoneGlobalBgHoverBackgroundImageUrl: value })}
                                                        globalBackgroundImagePosition={timezoneGlobalBgHoverBackgroundImagePosition}
                                                        setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ timezoneGlobalBgHoverBackgroundImagePosition: newPosition })}
                                                        globalBackgroundImageAttachment={timezoneGlobalBgHoverBackgroundImageAttachment}
                                                        setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ timezoneGlobalBgHoverBackgroundImageAttachment: newAttachment })}
                                                        globalBackgroundImageRepeat={timezoneGlobalBgHoverBackgroundImageRepeat}
                                                        setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ timezoneGlobalBgHoverBackgroundImageRepeat: newRepeat })}
                                                        globalBackgroundImageSize={timezoneGlobalBgHoverBackgroundImageSize}
                                                        setGlobalBackgroundImageSize={(newSize) => setAttributes({ timezoneGlobalBgHoverBackgroundImageSize: newSize })}
                                                        setAttributes={setAttributes}
                                                    />

                                                </>
                                            )}

                                            {timezoneGlobalBgHoverBackgroundType === 'gradient' && (
                                                <FB_GradientColorControl
                                                    globalCustomGradientSwitcher={timezoneGlobalBgHoverCustomGradientSwitcher}
                                                    setGlobalCustomGradientSwitcher={(value) => setAttributes({ timezoneGlobalBgHoverCustomGradientSwitcher: value })}
                                                    globalCustomGradientInputValue={timezoneGlobalBgHoverCustomGradientInputValue}
                                                    setGlobalCustomGradientInputValue={(value) => setAttributes({ timezoneGlobalBgHoverCustomGradientInputValue: value })}
                                                    globalGradientColor={timezoneGlobalBgHoverGradientColor}
                                                    setGlobalGradientColor={(value) => setAttributes({ timezoneGlobalBgHoverGradientColor: value === undefined ? null : value })}
                                                />
                                            )}
                                        </div>
                                    )}
                                />
                            </BaseControl>
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Border and Shadow", "frontis-blocks")}
                        initialOpen={false}
                    >

                        <SelectControl
                                label={__("Border Style", "frontis-blocks")}
                                value={timezoneGlobalBorder}
                                options={BORDER_STYLES}
                                onChange={(value) => setAttributes({ timezoneGlobalBorder: value })}
                        />


                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={timezoneGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ timezoneGlobalBorderColorSwitcher: value })}
                        />

                        {timezoneGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={timezoneGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ timezoneGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {timezoneGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={timezoneGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ timezoneGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                            spacingUnits={timezoneGlobalBorderUnits}
                            spacingDesktop={timezoneGlobalBorderDesktop}
                            spacingTablet={timezoneGlobalBorderTablet}
                            spacingMobile={timezoneGlobalBorderMobile}
                            handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                            spacingCombineBtn={timezoneGlobalBorderLink}
                            spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                            spacingUnits={timezoneGlobalBorderRadiusUnits}
                            spacingDesktop={timezoneGlobalBorderRadiusDesktop}
                            spacingTablet={timezoneGlobalBorderRadiusTablet}
                            spacingMobile={timezoneGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={timezoneGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={timezoneGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ timezoneGlobalBoxShadowSwitcher: value })}
                        />

                        {timezoneGlobalBoxShadowSwitcher === 'normal' && (
                            <FB_BoxShadowControl
                                label={__("Normal Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ timezoneGlobalBoxShadowValues: value })}
                                initialShadowValue={timezoneGlobalBoxShadowValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ timezoneGlobalBoxShadowCssValue: value })}
                            />
                        )}

                        {timezoneGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ timezoneGlobalBoxShadowHoverValues: value })}
                                initialShadowValue={timezoneGlobalBoxShadowHoverValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ timezoneGlobalBoxShadowHoverCssValue: value })}
                            />
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={timezoneDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ timezoneDesktopSwitcher: value })}

                            tabletValue={timezoneTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ timezoneTabletSwitcher: value })}

                            mobileValue={timezoneMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ timezoneMobileSwitcher: value })}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor
                            value={timezoneCustomCSS}
                            onChangeValue={(value) => setAttributes({ timezoneCustomCSS: value })}
                        />
                    </PanelBody>
                </div>
            </div>
        </>
    );

	return (
        <>
            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
	);
}
export default memo(Inspector);