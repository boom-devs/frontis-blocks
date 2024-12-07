import { useState } from 'react';

const FBRangeUnitsType = ({ currentUnit, unitTypes, onUnitChange }) => {
	// Default unit types
	const UNIT_TYPES = unitTypes || [
		{ label: 'px', value: 'px' },
		{ label: '%', value: '%' },
		{ label: 'em', value: 'em' },
	];

	// State to manage dropdown visibility
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen((prevState) => !prevState);
	};

	const selectUnit = (unit) => {
		onUnitChange(unit); // Notify parent of selected unit
		setDropdownOpen(false); // Close the dropdown
	};

	return (
		<div className="fb-setting-range-units-type">
			<div
				className="fb-setting-range-units-current"
				onClick={toggleDropdown}
			>
				{currentUnit}
			</div>
			{isDropdownOpen && (
				<div className="fb-setting-range-units-dropdown">
					{UNIT_TYPES.map((item, key) => (
						<div
							key={key}
							className={`fb-setting-range-units-option ${
								currentUnit === item.value ? 'active' : ''
							}`}
							onClick={() => selectUnit(item.value)}
						>
							{item.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default FBRangeUnitsType;