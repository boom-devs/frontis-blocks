import { useState, useEffect } from 'react';
import {__} from '@wordpress/i18n';
import {
	Button,
	ButtonGroup,
	RangeControl
} from '@wordpress/components';
// eslint-disable-next-line import/no-unresolved
import FB_ResponsiveControl from '@Components/responsive-control';

const Range = ({min, max, label, rangeValue, onChangeHandler,  rangeUnitHandler, DeviceType, units, setAttributes }) => {
	const [rangeStateValue, setRangeStateValue] = useState(rangeValue[DeviceType]);

	// Units
	const UNIT_TYPES = [
		{ label: 'px', value: 'px' },
		{ label: '%', value: '%' },
		{ label: 'em', value: 'em' },
	];

	
	// Get range value
	const getRangeValue = (  ) => {
		if ( DeviceType === 'Desktop' ) {
			return rangeValue[DeviceType];
		} else if ( DeviceType === 'Tablet' ) {
			return rangeValue[DeviceType];
		}

		return rangeValue[DeviceType];
	};

	const setRangeUnit = (unit) => {
		rangeUnitHandler(unit);
	}

	const setRangeValue = (value) => {
		onChangeHandler(value);
		setRangeStateValue(value);
	}

	useEffect( () => {
		setRangeStateValue(rangeValue[DeviceType]);
	}, DeviceType)
    return(
		<>
			<div className="fb-setting-spacing-container">
				<div className="fb-setting-spacing-inner-container">
					{/* Margin */}
					<div className="fb-setting-spacing-label-container">
						{/*eslint-disable-next-line @wordpress/i18n-no-variables*/}
						<FB_ResponsiveControl
							labelText={ __( label, 'frontis-blocks' )}
							device={DeviceType}
							deviceHandler={( newDevice ) => setAttributes( {DeviceType: newDevice} )}
						/>
						<div className="fb-setting-units-type">
							<ButtonGroup className="fb-setting-units-type-wrap">
								{UNIT_TYPES.map( ( item, key ) => (
									<Button
										key={key}
										onClick={() => setRangeUnit(item.value)}
										className={`fb-setting-units-type-switcher ${units[DeviceType] === item.value ? 'active' : ''}`}
									>
										{item.label}
									</Button>
								) )}
							</ButtonGroup>
						</div>
					</div>
					<RangeControl
						__nextHasNoMarginBottom
						value={ rangeStateValue }
						onChange={ ( value ) => setRangeValue( value ) }
						min={ min }
						max={ max }
					/>
				</div>
			</div>
		</>
    );
};

export default Range;