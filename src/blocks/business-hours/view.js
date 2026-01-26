// frontend.js - Timezone Block Frontend Functionality (Corrected Version)
(function() {
    'use strict';

    class TimezoneBlock {
        constructor(blockElement) {
            this.block = blockElement;
            this.attributes = this.getAttributes();
            this.init();
        }

        getAttributes() {
            return {
                timezone: this.block.dataset.timezone || 'Asia/Dhaka',
                timezoneMode: this.block.dataset.timezoneMode || 'auto',
                useUTCTimezoneFormat: this.block.dataset.useUtc === 'true',
                timeFormat: this.block.dataset.timeFormat || 'hh:mm A',
                startTime: this.block.dataset.startTime || '09:00',
                endTime: this.block.dataset.endTime || '17:00',
                useMonthlySchedule: this.block.dataset.useMonthlySchedule === 'true',
                monthlySchedules: JSON.parse(this.block.dataset.monthlySchedules || '[]'),
                weekendDays: JSON.parse(this.block.dataset.weekendDays || '[]'),
                holidays: JSON.parse(this.block.dataset.holidays || '[]'),
                showRemainingTime: this.block.dataset.showRemainingTime === 'true',
                remainingTimeLabel: this.block.dataset.remainingTimeLabel || 'Left: ',
                remainingTimeFormat: this.block.dataset.remainingTimeFormat || 'hours-minutes',

                beforeTimeText: this.block.dataset.beforeTimeText || 'Start at',
                afterTimeText: this.block.dataset.afterTimeText || 'Close at',
                weekendMessage: this.block.dataset.weekendMessage || 'Weekend day',
                holidayMessage: this.block.dataset.holidayMessage || 'Holiday day',
                openStatusText: this.block.dataset.openStatusText || 'Open',
                closedStatusText: this.block.dataset.closedStatusText || 'Closed'
            };
        }

        init() {
            this.updateDisplay();
            // Update every second for real-time functionality
            this.interval = setInterval(() => this.updateDisplay(), 1000);
        }

        destroy() {
            if (this.interval) {
                clearInterval(this.interval);
            }
        }

        getEffectiveTimezone() {
            try {
                return this.attributes.timezoneMode === 'auto' ? 
                    Intl.DateTimeFormat().resolvedOptions().timeZone : 
                    this.attributes.timezone;
            } catch (error) {
                return 'Asia/Dhaka';
            }
        }

        getTimezoneOffset(timezoneToFormat) {
            try {
                const now = new Date();
                
                if (this.attributes.useUTCTimezoneFormat) {
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
                    return '(UTC+00:00)';
                } else {
                    const formatter = new Intl.DateTimeFormat('en-US', {
                        timeZone: timezoneToFormat,
                        timeZoneName: 'short'
                    });
                    const parts = formatter.formatToParts(now);
                    const offsetPart = parts.find(part => part.type === 'timeZoneName');
                    
                    if (offsetPart) {
                        return `(${offsetPart.value})`;
                    }
                    
                    // Fallback method
                    const offset = now.toLocaleString('en-US', { 
                        timeZone: timezoneToFormat, 
                        timeZoneName: 'short' 
                    }).split(' ').pop();
                    
                    return `(${offset})`;
                }
            } catch (error) {
                return this.attributes.useUTCTimezoneFormat ? '(UTC+06:00)' : '(GMT+6)';
            }
        }

        getCurrentTimeInTimezone() {
            const effectiveTimezone = this.getEffectiveTimezone();
            if (!effectiveTimezone) return 'Time Unavailable';
            
            try {
                const now = new Date();
                const formatConfig = {
                    'hh:mm:ss A': { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true },
                    'HH:mm:ss': { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false },
                    'HH:mm': { hour: '2-digit', minute: '2-digit', hour12: false },
                    'hh:mm A': { hour: '2-digit', minute: '2-digit', hour12: true }
                };
                
                const config = formatConfig[this.attributes.timeFormat] || formatConfig['hh:mm A'];
                return now.toLocaleTimeString('en-US', {
                    timeZone: effectiveTimezone,
                    ...config
                });
            } catch (error) {
                return 'Time Unavailable';
            }
        }

        getEffectiveOfficeHours() {
            if (this.attributes.useMonthlySchedule && this.attributes.monthlySchedules.length > 0) {
                const currentMonth = new Date().getMonth().toString();
                const currentSchedule = this.attributes.monthlySchedules.find(schedule => schedule.month === currentMonth);
                if (currentSchedule) {
                    return { startTime: currentSchedule.startTime, endTime: currentSchedule.endTime };
                }
            }
            return { 
                startTime: this.attributes.startTime || '09:00', 
                endTime: this.attributes.endTime || '17:00' 
            };
        }

        getRemainingTime() {
            const effectiveTimezone = this.getEffectiveTimezone();
            const { endTime: effectiveEndTime } = this.getEffectiveOfficeHours();
            
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

                switch (this.attributes.remainingTimeFormat) {
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
        }

        isWeekendOrHoliday(dayOfWeek, todayDate) {
            const weekendDaysArray = this.attributes.weekendDays || [];
            if (weekendDaysArray.includes(dayOfWeek.toString())) return 'Weekend';
            if (this.attributes.holidays && this.attributes.holidays.includes(todayDate)) return 'Holiday';
            return null;
        }

        calculateTimeStatus(currentTimeStr, startTime, endTime) {
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
        }

        getNextWeekdayName() {
            const now = new Date();
            let next = new Date(now);
            const weekends = this.attributes.weekendDays || [];
            do {
                next.setDate(next.getDate() + 1);
            } while (weekends.includes(next.getDay().toString()));
            return next.toLocaleDateString('en-US', { weekday: 'long' });
        }

        getNextDateAfterHoliday() {
            const now = new Date();
            let next = new Date(now);
            const weekends = this.attributes.weekendDays || [];
            const holidaysArr = this.attributes.holidays || [];
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
        }

        getCurrentOfficeStatus() {
            const effectiveTimezone = this.getEffectiveTimezone();
            if (!effectiveTimezone) return 'Closed';

            const effectiveHours = this.getEffectiveOfficeHours();
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

                const closedReason = this.isWeekendOrHoliday(dayOfWeek, todayDate);
                if (closedReason) return closedReason;

                const currentTimeStr = now.toLocaleTimeString('en-US', {
                    timeZone: effectiveTimezone, 
                    hour: '2-digit', 
                    minute: '2-digit', 
                    hour12: false
                });

                return this.calculateTimeStatus(currentTimeStr, effectiveStartTime, effectiveEndTime);
            } catch (error) {
                return 'Closed';
            }
        }

        getDisplayMessage() {
            try {
                const effectiveTimezone = this.getEffectiveTimezone();
                const now = new Date();
                const dayOfWeek = now.getDay();
                const todayDate = now.toISOString().split('T')[0];

                // Check for weekend
                if (this.attributes.weekendDays?.includes(dayOfWeek.toString())) {
                    const nextWeekday = this.getNextWeekdayName();
                    return `${this.attributes.weekendMessage || 'Weekend'}. ${this.attributes.beforeTimeText || 'Will start at'} ${this.getEffectiveOfficeHours().startTime}, ${nextWeekday}`;
                }

                // Check for holiday
                if (this.attributes.holidays?.includes(todayDate)) {
                    const nextDate = this.getNextDateAfterHoliday();
                    return `${this.attributes.holidayMessage || 'Holiday'}. ${this.attributes.beforeTimeText || 'Will start at'} ${this.getEffectiveOfficeHours().startTime}, ${nextDate}`;
                }

                // Regular office hours check
                const effectiveHours = this.getEffectiveOfficeHours();
                const { startTime: effectiveStartTime, endTime: effectiveEndTime } = effectiveHours;
                
                const currentTimeStr = now.toLocaleTimeString('en-US', { 
                    timeZone: effectiveTimezone, 
                    hour: '2-digit', 
                    minute: '2-digit', 
                    hour12: false 
                });
                
                const status = this.calculateTimeStatus(currentTimeStr, effectiveStartTime, effectiveEndTime);
                const remaining = this.getRemainingTime();
                
                if (status === 'Open') {
                    return `${this.attributes.afterTimeText || 'Will close at'} ${effectiveEndTime}${this.attributes.showRemainingTime && remaining ? `, ${this.attributes.remainingTimeLabel}${remaining}` : ''}`;
                } else {
                    return `${this.attributes.beforeTimeText || 'Will start at'} ${effectiveStartTime}${this.attributes.showRemainingTime && remaining ? `, ${this.attributes.remainingTimeLabel}${remaining}` : ''}`;
                }
            } catch (error) {
                return 'Status unavailable';
            }
        }

        updateDisplay() {
            const effectiveTimezone = this.getEffectiveTimezone();
            
            // Update current time
            const timeElement = this.block.querySelector('.fb-current-time');
            if (timeElement) {
                timeElement.textContent = this.getCurrentTimeInTimezone();
            }

            // Update timezone offset
            const offsetElement = this.block.querySelector('.fb-timezone-offset');
            if (offsetElement) {
                offsetElement.textContent = this.getTimezoneOffset(effectiveTimezone);
            }

            // Update status
            const statusElement = this.block.querySelector('.fb-timezone-status');
            const statusBox = this.block.querySelector('.fb-time-pulse');
            const statusInfoBox = this.block.querySelector('.fb-timezone-status-info-box');
            const messageElement = this.block.querySelector('.fb-timezone-info-noted');
            
            if (statusElement && statusBox && messageElement) {
                const currentStatus = this.getCurrentOfficeStatus();
                const statusType = currentStatus.toLowerCase();
                
                const statusText = currentStatus === 'Open' ? 
                    (this.attributes.openStatusText || 'Open') : 
                    (currentStatus === 'Weekend' ? (this.attributes.weekendMessage || 'Weekend') :
                    (currentStatus === 'Holiday' ? (this.attributes.holidayMessage || 'Holiday') :
                    (this.attributes.closedStatusText || 'Closed')));

                statusElement.textContent = statusText;
                statusInfoBox.className = `fb-timezone-status-info-box ${statusType}`;
                statusBox.className = `fb-time-pulse fb-time-pulse-${statusType}`;
                messageElement.textContent = this.getDisplayMessage();
            }
        }
    }

    // Initialize all timezone blocks
    document.addEventListener('DOMContentLoaded', function() {
        const timezoneBlocks = document.querySelectorAll('.fb-timezone-main-wrapper');
        timezoneBlocks.forEach(block => {
            try {
                new TimezoneBlock(block);
            } catch (error) {
                console.error('Error initializing timezone block:', error);
            }
        });
    });

})();