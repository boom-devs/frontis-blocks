import React from 'react';
import { __ } from '@wordpress/i18n';
import { Button, ButtonGroup, RangeControl } from '@wordpress/components';
import FB_ResponsiveControl from '@Components/responsive-control';
import './editor.lazy.scss';

export default function FB_RangeControl({
	label,
	DeviceType,
	rangeUnitsHandler,
	rangeUnit,
	rangeDesktopValue,
	rangeTabletValue,
	rangeMobileValue,
	setAttributes,
}) {
	const UNIT_TYPES = [
		{ label: 'px', value: 'px' },
		{ label: '%', value: '%' },
		{ label: 'em', value: 'em' },
	];

	// Function to handle range unit change
	const setRangeUnit = (unit) => {
		rangeUnitsHandler(unit);
	};

	// Function to handle range value change based on DeviceType
	const handleRangeChange = (value) => {
		if (DeviceType === 'Desktop') {
			setAttributes({ rangeDesktopValue: value });
		} else if (DeviceType === 'Tablet') {
			setAttributes({ rangeTabletValue: value });
		} else if (DeviceType === 'Mobile') {
			setAttributes({ rangeMobileValue: value });
		}
	};

	// Get the current range value based on the DeviceType
	const getCurrentRangeValue = () => {
		if (DeviceType === 'Desktop') {
			return rangeDesktopValue;
		} else if (DeviceType === 'Tablet') {
			return rangeTabletValue;
		} else if (DeviceType === 'Mobile') {
			return rangeMobileValue;
		}
	};

	return (
		<div className="fb-setting-fontsize-wrapper">
			<div className="fb-setting-fontsize-header">
				<FB_ResponsiveControl
					labelText={__(label, 'frontis-blocks')}
					device={DeviceType}
					deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
				/>
				<div className="fb-setting-units-type">
					<ButtonGroup className="fb-setting-units-type-wrap">
						{UNIT_TYPES.map((item, key) => (
							<Button
								key={key}
								onClick={() => setRangeUnit(item.value)}
								className={`fb-setting-units-type-switcher ${
									rangeUnit[DeviceType] === item.value ? 'active' : ''
								}`}
							>
								{item.label}
							</Button>
						))}
					</ButtonGroup>
				</div>
			</div>
			<div className="fb-setting-fontsize-rangecontrol">
				<RangeControl
					value={getCurrentRangeValue}
					onChange={(e) => handleRangeChange(e)}
					min={1}
					max={100}
					allowReset
					resetFallbackValue={20}
				/>
			</div>
		</div>
	);
}
