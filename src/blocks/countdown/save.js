import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

export default function save({ attributes }) {
	const {
		blockID,
		deviceType,
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

	{/* Inspector Controls */}
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
}
