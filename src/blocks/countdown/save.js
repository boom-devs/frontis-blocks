import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save({ attributes }) {
	const {
		blockID,
		countDownLabelDay,
		countDownLabelHour,
		countDownLabelMinute,
		countDownLabelSecond,
	} = attributes;

	const blockProps = useBlockProps.save({ id: blockID });

	return (
		<>
			<div {...blockProps} data-target-date={targetDate}>
				<div className={`fb-count-down-wrapper ${blockID}`}>
					<div className={`fb-count-down-item`}>
						<span className={`fb-count-down-time days`}>0</span>
						<span className={`fb-count-down-label`}>
						{countDownLabelDay || __('Days', 'woomni-blocks')}
					</span>
					</div>
					<div className={`fb-count-down-item`}>
						<span className={`fb-count-down-time hours`}>0</span>
						<span className={`fb-count-down-label`}>
						{countDownLabelHour || __('Hours', 'woomni-blocks')}
					</span>
					</div>
					<div className={`fb-count-down-item`}>
						<span className={`fb-count-down-time minutes`}>0</span>
						<span className={`fb-count-down-label`}>
						{countDownLabelMinute || __('Minutes', 'woomni-blocks')}
					</span>
					</div>
					<div className={`fb-count-down-item`}>
						<span className={`fb-count-down-time seconds`}>0</span>
						<span className={`fb-count-down-label`}>
						{countDownLabelSecond || __('Seconds', 'woomni-blocks')}
					</span>
					</div>
				</div>
			</div>
		</>
	);
}
