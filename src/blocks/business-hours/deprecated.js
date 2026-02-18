import { useBlockProps } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import attributes from './attributes.js';

/**
 * v1_1_8 - Old version with inline script and hardcoded ID
 * This is the oldest version that used inline scripts
 */
const v1_1_8 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
        const {
            blockID,
            location,
            timezone,
            timezoneMode,
            useUTCTimezoneFormat,
            timeFormat,
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
            remainingTimeFormat,
        } = attributes;
    
        const blockProps = useBlockProps.save({
            className: `frontis-block fb-timezone-main-wrapper ${blockID} ${
                timezoneDesktopSwitcher ? 'fb-desktop-responsive' : ''
            } ${timezoneTabletSwitcher ? 'fb-tablet-responsive' : ''} ${
                timezoneMobileSwitcher ? 'fb-mobile-responsive' : ''
            } ${alignment ? `align-${alignment}` : ''}`,
            id: timezoneGlobalWraperID || ''
        });
    
        // helper functions
        const getTimezoneLocationName = (timezoneToFormat) => {
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
                        'Pacific/Auckland': 'New Zealand',
                        'Australia/Eucla': 'Australia'
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
        };
    
        const getEffectiveTimezone = () => {
            try {
                return timezoneMode === 'auto' ? Intl.DateTimeFormat().resolvedOptions().timeZone : timezone;
            } catch (error) {
                return 'Asia/Dhaka';
            }
        };
    
        const getTimezoneOffset = (timezoneToFormat) => {
            try {
                //offset
                if (useUTCTimezoneFormat) {
                    return '(UTC+00:00)';
                } else {
                    return '(GMT+0)';
                }
            } catch (error) {
                return useUTCTimezoneFormat ? '(UTC+06:00)' : '(GMT+6)';
            }
        };
    
        const effectiveTimezone = getEffectiveTimezone();
        const timezoneLocation = timezoneMode === 'auto' ? 
            getTimezoneLocationName(Intl.DateTimeFormat().resolvedOptions().timeZone) : 
            getTimezoneLocationName(timezone);
        
        const timezoneOffset = timezoneMode === 'auto' ? 
            getTimezoneOffset(Intl.DateTimeFormat().resolvedOptions().timeZone) : 
            getTimezoneOffset(timezone);
    
        const displayLocation = useCustomLocation && location ? location : timezoneLocation;
        const displaySeparator = separator || ' | ';
    
        return (
            <div {...blockProps} 
                data-timezone={timezone}
                data-timezone-mode={timezoneMode}
                data-use-utc={useUTCTimezoneFormat}
                data-time-format={timeFormat}
                data-start-time={startTime}
                data-end-time={endTime}
                data-use-monthly-schedule={useMonthlySchedule}
                data-monthly-schedules={JSON.stringify(monthlySchedules)}
                data-weekend-days={JSON.stringify(weekendDays)}
                data-holidays={JSON.stringify(holidays)}
                data-show-remaining-time={showRemainingTime}
                data-remaining-time-label={remainingTimeLabel}
                data-remaining-time-format={remainingTimeFormat}
                data-before-time-text={beforeTimeText}
                data-after-time-text={afterTimeText}
                data-weekend-message={weekendMessage}
                data-holiday-message={holidayMessage}
                data-open-status-text={openStatusText}
                data-closed-status-text={closedStatusText}
            >
                <div className={`fb-timezone-container ${timezoneGlobalWraperClass}`}>
                    <div className='fb-timezone-wrapper'>
                        <div className='fb-location-timezone'>
                            {useCustomLocation ? (
                                <RichText.Content
                                    tagName="span"
                                    value={displayLocation}
                                    className="fb-location-name"
                                />
                            ) : (
                                <span className="fb-location-name">{displayLocation}</span>
                            )}
                            
                            {showSeparatorSwitcher && (
                                <span className='fb-timezone-separator'>{displaySeparator}</span>
                            )}
                            
                            <span className='fb-current-time'>Loading time...</span>
                            
                            {showTimezoneOffset && (
                                <span className='fb-timezone-offset'>{timezoneOffset}</span>
                            )}
                        </div>
                    </div>
                    
                    {showStatusSwitcher && (
                        <div className='fb-timezone-status-wrapper'>
                            <div className={'fb-timezone-status-info-box'}>
                                <div className="fb-time-pulse">
                                    <span className='fb-timezone-status'>Loading...</span>
                                </div>
                                <div className='fb-timezone-status-info'>
                                    <span className='fb-timezone-info-noted'>Loading status information...</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    },
};

// Export in reverse chronological order (newest first)
export default [v1_1_8];