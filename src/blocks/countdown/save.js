import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save({ attributes }) {
	const {
		blockID,
		countDownLabelDay,
		countDownLabelHour,
		countDownLabelMinute,
		countDownLabelSecond,
		countDownBgColor,
		countDownTitleColor,
		countDownTextColor,
		countDownTitleFontSize,
		countDown_Text_Font_Size,
		targetDate,
		countDownLabelBgColorDay,
		countDownLabelBgColorHour,
		countDownLabelBgColorMinute,
		countDownLabelBgColorSecond,
	} = attributes;

	const blockProps = useBlockProps.save({ id: blockID });

	return (
		<>
			<div {...blockProps} data-target-date={targetDate}>
				<div className={`fb-count-down-wrapper ${blockID}`} style={{ backgroundColor: countDownBgColor }}>
					<div className={`fb-count-down-item`} style={{ backgroundColor: countDownLabelBgColorDay }}>
						<span className={`fb-count-down-time days`} style={{ color: countDownTitleColor, fontSize: `${countDownTitleFontSize}px` }}>0</span>
						<span className={`fb-count-down-label`} style={{ color: countDownTextColor, fontSize: `${countDown_Text_Font_Size}px` }}>
						{countDownLabelDay || __('Days', 'woomni-blocks')}
					</span>
					</div>
					<div className={`fb-count-down-item`} style={{ backgroundColor: countDownLabelBgColorHour }}>
						<span className={`fb-count-down-time hours`} style={{ color: countDownTitleColor, fontSize: `${countDownTitleFontSize}px` }}>0</span>
						<span className={`fb-count-down-label`} style={{ color: countDownTextColor, fontSize: `${countDown_Text_Font_Size}px` }}>
						{countDownLabelHour || __('Hours', 'woomni-blocks')}
					</span>
					</div>
					<div className={`fb-count-down-item`} style={{ backgroundColor: countDownLabelBgColorMinute }}>
						<span className={`fb-count-down-time minutes`} style={{ color: countDownTitleColor, fontSize: `${countDownTitleFontSize}px` }}>0</span>
						<span className={`fb-count-down-label`} style={{ color: countDownTextColor, fontSize: `${countDown_Text_Font_Size}px` }}>
						{countDownLabelMinute || __('Minutes', 'woomni-blocks')}
					</span>
					</div>
					<div className={`fb-count-down-item`} style={{ backgroundColor: countDownLabelBgColorSecond }}>
						<span className={`fb-count-down-time seconds`} style={{ color: countDownTitleColor, fontSize: `${countDownTitleFontSize}px` }}>0</span>
						<span className={`fb-count-down-label`} style={{ color: countDownTextColor, fontSize: `${countDown_Text_Font_Size}px` }}>
						{countDownLabelSecond || __('Seconds', 'woomni-blocks')}
					</span>
					</div>
				</div>
			</div>
		</>
	);
}
