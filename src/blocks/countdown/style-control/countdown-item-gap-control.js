import { __ } from '@wordpress/i18n';

import FB_Range from "@Components/range";
export default function CountDownItemGapControl ({ attributes, setAttributes}) {

	const {
		DeviceType,
		countDownItemGap,
		countDownItemGapUnits,

	} = attributes;


	const countDownItemGapHandler = (value) => {
		setAttributes({ countDownItemGap: value });
	};

	const countDownItemGapUnitsHandler = (value) => {
		setAttributes({ countDownItemGapUnits: value });
	};


	return (
	<>
		<FB_Range
			min={1}
			max={300}
			label={__("Item Space Between", "frontis-blocks")}
			rangeValue={countDownItemGap}
			onChangeHandler={countDownItemGapHandler}
			rangeUnitHandler={countDownItemGapUnitsHandler}
			DeviceType={DeviceType}
			units={countDownItemGapUnits}
			setAttributes={setAttributes}
			rangeStep={1}
			resetFallbackValue={25}
		/>
	</>
	);
};
