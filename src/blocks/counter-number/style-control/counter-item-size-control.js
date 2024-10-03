import { __ } from '@wordpress/i18n';

import FB_Range from "@Components/range";
export default function CounterItemSizeControl ({ attributes, setAttributes}) {

	const {
		DeviceType,
		counterItemSize,
		counterItemSizeUnits,

	} = attributes;


	const counterItemSizeHandler = (value) => {
		setAttributes({ counterItemSize: value });
	};

	const counterItemSizeUnitsHandler = (value) => {
		setAttributes({ counterItemSizeUnits: value });
	};


	return (
	<>
		<FB_Range
			min={1}
			max={300}
			label={__("Item Size", "frontis-blocks")}
			rangeValue={counterItemSize}
			onChangeHandler={counterItemSizeHandler}
			rangeUnitHandler={counterItemSizeUnitsHandler}
			DeviceType={DeviceType}
			units={counterItemSizeUnits}
			setAttributes={setAttributes}
			rangeStep={1}
			resetFallbackValue={25}
		/>
	</>
	);
};
