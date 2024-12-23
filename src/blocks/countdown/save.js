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


		// Countdown item

		countDownItemSize,
		countDownItemSizeUnits,

		countDownItemGap,
		countDownItemGapUnits,

		countDownItemBgColor,

		// Team Image Border Type
		countDownItemBorder,
		countDownItemBorderColor,
		countDownItemBackgroundColor,

		countDownItemBorderTypeUnits,
		countDownItemBorderTypeDesktop,
		countDownItemBorderTypeTab,
		countDownItemBorderTypeMobile,
		countDownItemBorderTypeLink,

		// Team Image Border Radius
		countDownItemBorderRadiusUnits,
		countDownItemBorderRadiusDesktop,
		countDownItemBorderRadiusTab,
		countDownItemBorderRadiusMobile,
		countDownItemBorderRadiusLink,

		digitFontColor,
		digitFontFamily,
		digitFontSize,
		digitFontSizeUnits,
		digitFontWeight,
		digitFontStyle,
		digitTextTransform,
		digitTextDecoration,
		digitLetterSpacing,
		digitLetterSpacingUnits,
		digitLineHeight,
		digitLineHeightUnits,

		labelFontColor,
		labelFontFamily,
		labelFontSize,
		labelFontSizeUnits,
		labelFontWeight,
		labelFontStyle,
		labelTextTransform,
		labelTextDecoration,
		labelLetterSpacing,
		labelLetterSpacingUnits,
		labelLineHeight,
		labelLineHeightUnits,
	} = attributes;

	const blockProps = useBlockProps.save({ id: blockID });

	{/* Inspector Controls */}
	return (
		<>
			<h1>Hello world</h1>

			<div {...blockProps} data-target-date={targetDate}>
				<div className={`fb-parent-wrapper fb-count-down-wrapper ${blockID}`}>
					<div className={`fb-count-down-item`}>
						<span className={`fb-count-down-time days`}>0</span>
						<span className={`fb-count-down-label`}>
							{countDownLabelDay || __('Days', 'frontis-blocks')}
						</span>
					</div>
					<div className={`fb-count-down-item`}>
						<span className={`fb-count-down-time hours`}>0</span>
						<span className={`fb-count-down-label`}>
							{countDownLabelHour || __('Hours', 'frontis-blocks')}
						</span>
					</div>
					<div className={`fb-count-down-item`}>
						<span className={`fb-count-down-time minutes`}>0</span>
						<span className={`fb-count-down-label`}>
							{countDownLabelMinute || __('Minutes', 'frontis-blocks')}
						</span>
					</div>
					<div className={`fb-count-down-item`}>
						<span className={`fb-count-down-time seconds`}>0</span>
						<span className={`fb-count-down-label`}>
							{countDownLabelSecond || __('Seconds', 'frontis-blocks')}
						</span>
					</div>
				</div>
			</div>

			
		</>
	);
}
