import { useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { Button, ButtonGroup, RangeControl } from '@wordpress/components';
// eslint-disable-next-line import/no-unresolved
import FB_ResponsiveControl from '@Components/responsive-control';

const FB_Range = ({ min, max, label, rangeValue, onChangeHandler, rangeUnitHandler, DeviceType, units, setAttributes, rangeStep, resetFallbackValue }) => {

	const UNIT_TYPES = [
		{ label: 'px', value: 'px' },
		{ label: '%', value: '%' },
		{ label: 'em', value: 'em' },
	];

	// Ensure default/fallback value for the current DeviceType
	useEffect(() => {
		if (rangeValue[DeviceType] === undefined) {
			const newRangeValue = { ...rangeValue, [DeviceType]: resetFallbackValue };
			onChangeHandler(newRangeValue);
		}
	}, [DeviceType, rangeValue, onChangeHandler, resetFallbackValue]);

	const setRangeValue = (value) => {
		const newRangeValue = { ...rangeValue, [DeviceType]: value || resetFallbackValue };
		onChangeHandler(newRangeValue);
	};

	const setRangeUnit = (unit) => {
		const newUnits = { ...units, [DeviceType]: unit };
		rangeUnitHandler(newUnits);
	};

	return (
		<div className="fb-setting-spacing-container">
			<div className="fb-setting-spacing-inner-container">
				<div className="fb-setting-spacing-label-container">
					<FB_ResponsiveControl
						labelText={ __( label, 'frontis-blocks' )}
						device={ DeviceType }
						deviceHandler={( newDevice ) => setAttributes({ DeviceType: newDevice })}
					/>
					<div className="fb-setting-units-type">
						<ButtonGroup className="fb-setting-units-type-wrap">
							{UNIT_TYPES.map((item, key) => (
								<Button
									key={key}
									onClick={() => setRangeUnit(item.value)}
									className={`fb-setting-units-type-switcher ${units[DeviceType] === item.value ? 'active' : ''}`}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
					</div>
				</div>
				<RangeControl
					__nextHasNoMarginBottom
					value={ rangeValue[DeviceType] }
					onChange={ setRangeValue }
					min={ min }
					max={ max }
					step={ rangeStep }
					allowReset
					resetFallbackValue={resetFallbackValue}
				/>
			</div>
		</div>
	);
};

export default FB_Range;
