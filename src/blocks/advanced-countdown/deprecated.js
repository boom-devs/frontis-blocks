import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import attributes from './attributes.js';

const v1_0_3 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
        const {
            blockID,
            countDownLabelDay,
            countDownLabelHour,
            countDownLabelMinute,
            countDownLabelSecond,
            targetDate,
            showDays,
            showHours,
            showMinutes,
            showSeconds,
            countDownGlobalWraperID,
            countDownGlobalWraperClass,
            countDownDesktopSwitcher,
            countDownTabletSwitcher,
            countDownMobileSwitcher,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-count-down-main-wrapper ${blockID} ${countDownDesktopSwitcher && 'fb-desktop-responsive'} ${countDownTabletSwitcher && 'fb-tablet-responsive'} ${countDownMobileSwitcher && 'fb-mobile-responsive'}`,
        });

        return (
            <>
                <div {...blockProps} data-target-date={targetDate}>
                    <div className={`fb-parent-wrapper fb-count-down-wrapper ${blockID} ${countDownGlobalWraperClass}`} id={countDownGlobalWraperID}>
                        {showDays && (
                            <div className={`fb-count-down-item`}>
                                <span className={`fb-count-down-time days`}>00</span>
                                <span className={`fb-count-down-label`}>
                                    {countDownLabelDay || __('Days', 'frontis-blocks')}
                                </span>
                            </div>
                        )}
                        {showHours && (
                            <div className={`fb-count-down-item`}>
                                <span className={`fb-count-down-time hours`}>00</span>
                                <span className={`fb-count-down-label`}>
                                    {countDownLabelHour || __('Hours', 'frontis-blocks')}
                                </span>
                            </div>
                        )}
                        {showMinutes && (
                            <div className={`fb-count-down-item`}>
                                <span className={`fb-count-down-time minutes`}>00</span>
                                <span className={`fb-count-down-label`}>
                                    {countDownLabelMinute || __('Minutes', 'frontis-blocks')}
                                </span>
                            </div>
                        )}
                        {showSeconds && (
                            <div className={`fb-count-down-item`}>
                                <span className={`fb-count-down-time seconds`}>00</span>
                                <span className={`fb-count-down-label`}>
                                    {countDownLabelSecond || __('Seconds', 'frontis-blocks')}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </>
        );
    },
};

const v1_1_8 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
        const {
            blockID,
            advancedCountdownPresetStyle,
            advancedCountdownLabelDays,
            advancedCountdownLabelHours,
            advancedCountdownLabelMinutes,
            advancedCountdownTargetDate,
            showDays,
            showHours,
            showMinutes,
            showSeconds,
            advancedCountdownCustomID,
            advancedCountdownCustomClass,
            advancedCountdownDesktopSwitcher,
            advancedCountdownTabletSwitcher,
            advancedCountdownMobileSwitcher,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-advanced-countdown-main-wrapper ${blockID} ${advancedCountdownDesktopSwitcher && 'fb-desktop-responsive'} ${advancedCountdownTabletSwitcher && 'fb-tablet-responsive'} ${advancedCountdownMobileSwitcher && 'fb-mobile-responsive'}`,
        });

        return (
            <>
                <div {...blockProps} data-target-date={advancedCountdownTargetDate}>
                    <div 
                        className={`fb-advanced-countdown-wrapper ${blockID} ${advancedCountdownCustomClass}`} 
                        id={advancedCountdownCustomID}
                    >
                        {showDays && (
                            <div className={`fb-count-down-item`}>
                                <span className={`fb-count-down-time days`}>00</span>
                                <span className={`fb-count-down-label`}>
                                    {advancedCountdownLabelDays || __('Days', 'frontis-blocks')}
                                </span>
                            </div>
                        )}
                        {showHours && (
                            <div className={`fb-count-down-item`}>
                                <span className={`fb-count-down-time hours`}>00</span>
                                <span className={`fb-count-down-label`}>
                                    {advancedCountdownLabelHours || __('Hours', 'frontis-blocks')}
                                </span>
                            </div>
                        )}
                        {showMinutes && (
                            <div className={`fb-count-down-item`}>
                                <span className={`fb-count-down-time minutes`}>00</span>
                                <span className={`fb-count-down-label`}>
                                    {advancedCountdownLabelMinutes || __('Minutes', 'frontis-blocks')}
                                </span>
                            </div>
                        )}
                        {showSeconds && (
                            <div className={`fb-count-down-item`}>
                                <span className={`fb-count-down-time seconds`}>00</span>
                                <span className={`fb-count-down-label`}>
                                    {countDownLabelSecond || __('Seconds', 'frontis-blocks')}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </>
        );
    },
};

export default [v1_0_3, v1_1_8];