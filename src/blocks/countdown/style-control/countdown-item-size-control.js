import { __ } from '@wordpress/i18n';

import FB_Range from "@Components/range";
export default function CountDownItemSizeControl ({ attributes, setAttributes}) {

	const {
		DeviceType,
		countDownItemSize,
		countDownItemSizeUnits,

	} = attributes;


	const countDownItemSizeHandler = (value) => {
		setAttributes({ countDownItemSize: value });
	};

	const countDownItemSizeUnitsHandler = (value) => {
		setAttributes({ countDownItemSizeUnits: value });
	};


	return (
	<>
		<FB_Range
			min={1}
			max={300}
			label={__("Item Size", "frontis-blocks")}
			rangeValue={countDownItemSize}
			onChangeHandler={countDownItemSizeHandler}
			rangeUnitHandler={countDownItemSizeUnitsHandler}
			deviceType={DeviceType}
			units={countDownItemSizeUnits}
			setAttributes={setAttributes}
			rangeStep={1}
			resetFallbackValue={25}
		/>
	</>
	);
};
