import { useEffect, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { Button, ButtonGroup, RangeControl } from '@wordpress/components';
import FB_ResponsiveControl from '@Components/responsive-control';
import FB_RangeUnitsType from '@Components/unit-control';
import './editor.lazy.scss';

const FB_Range = ({
	min,
	max,
	label,
	rangeValue,
	onChangeHandler,
	rangeUnitHandler,
	deviceType,
	units,
	setAttributes,
	rangeStep,
	resetFallbackValue,
	units_types_arr = null,
	isRangeUnit = true,
}) => {
	// Ensure default/fallback value for the current deviceType
	useEffect(() => {
		if (rangeValue[deviceType] === undefined) {
			const newRangeValue = { ...rangeValue, [deviceType]: resetFallbackValue };
			onChangeHandler(newRangeValue);
		}
	}, [deviceType, rangeValue, onChangeHandler, resetFallbackValue]);

	const setRangeValue = (value) => {
		const newRangeValue = { ...rangeValue, [deviceType]: value || resetFallbackValue };
		onChangeHandler(newRangeValue);
	};

	const setRangeUnit = (unit) => {
		const newUnits = { ...units, [deviceType]: unit };
		rangeUnitHandler(newUnits);
	};

	return (
		<div className="fb-setting-spacing-container">
			<div className="fb-setting-spacing-inner-container">
				<div className="fb-setting-spacing-label-container">
					<FB_ResponsiveControl
						labelText={__(label, 'frontis-blocks')}
						device={deviceType}
						deviceHandler={(newDevice) => setAttributes({ deviceType: newDevice })}
					/>
					{isRangeUnit && (
						<FB_RangeUnitsType
							currentUnit={units[deviceType]}
							unitTypes={units_types_arr}
							onUnitChange={setRangeUnit}
						/>
					)}
				</div>
				<RangeControl
					value={parseInt(rangeValue[deviceType])}
					onChange={setRangeValue}
					min={min}
					max={max}
					step={rangeStep}
					allowReset
					resetFallbackValue={resetFallbackValue}
				/>
			</div>
		</div>
	);
};

export default FB_Range;
