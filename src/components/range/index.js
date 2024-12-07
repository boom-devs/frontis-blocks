import { useEffect, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { Button, ButtonGroup, RangeControl } from '@wordpress/components';
import FB_ResponsiveControl from '@Components/responsive-control';
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
	let UNIT_TYPES = [
		{ label: 'px', value: 'px' },
		{ label: '%', value: '%' },
		{ label: 'em', value: 'em' },
	];

	if (units_types_arr) {
		UNIT_TYPES = units_types_arr;
	}

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

	// State to manage dropdown visibility
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen((prevState) => !prevState);
	};

	const selectUnit = (unit) => {
		setRangeUnit(unit); // Set the selected unit
		setDropdownOpen(false); // Close the dropdown
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
						<div className="fb-setting-range-units-type">
							<div
								className="fb-setting-range-units-current"
								onClick={toggleDropdown}
							>
								{units[deviceType]}
							</div>
							{isDropdownOpen && (
								<div className="fb-setting-range-units-dropdown">
									{UNIT_TYPES.map((item, key) => (
										<div
											key={key}
											className={`fb-setting-range-units-option ${
												units[deviceType] === item.value ? 'active' : ''
											}`}
											onClick={() => selectUnit(item.value)}
										>
											{item.label}
										</div>
									))}
								</div>
							)}
						</div>
					)}
				</div>
				<RangeControl
					__nextHasNoMarginBottom
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
