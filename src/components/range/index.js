import { useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { Button, ButtonGroup, Dropdown, RangeControl, SelectControl } from '@wordpress/components';
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
	rangeStep,
	resetFallbackValue,
	units_types_arr = null,
	isRangeUnit = true,
	globalIcon = false,
	globalTypographyType,
}) => {
	// Ensure default/fallback value for the current deviceType
	useEffect(() => {
		if (rangeValue[deviceType] === undefined) {
			const newRangeValue = { ...rangeValue, [deviceType]: resetFallbackValue };
			onChangeHandler(newRangeValue);
		}
	}, [deviceType, rangeValue, onChangeHandler, resetFallbackValue]);

	// const setRangeValue = (value) => {
	// 	const newRangeValue = { ...rangeValue, [deviceType]: value || resetFallbackValue };
	// 	onChangeHandler(newRangeValue);
	// };

	const setRangeValue = (value) => {
		const newRangeValue = {...rangeValue, [deviceType]: value !== null ? String(value) : String(resetFallbackValue)};
		onChangeHandler(newRangeValue);
	};

	const setRangeUnit = (unit) => {
		const newUnits = { ...units, [deviceType]: unit };
		rangeUnitHandler(newUnits);
	};

	const resetRangeValue = () => {
		setRangeValue(resetFallbackValue);
	};

	const globalTypo = FrontisBlocksData.global_typography;
	const GB_TYPO = [];

    Object.entries(globalTypo).forEach(([label, properties]) => {

		if(globalTypographyType === 'fontSize') {
			GB_TYPO.push({ label: label, value: properties.fontSize });
		}
	});

	console.log(GB_TYPO);

	return (
		<div className="fb-setting-spacing-container">
			<div className="fb-setting-spacing-inner-container">
				<div className="fb-setting-spacing-label-container">
					<FB_ResponsiveControl
						labelText={__(label, 'frontis-blocks')}
						device={deviceType}
					/>
					{globalIcon === true && <Dropdown
							className="fb-setting-global-typo-setting-icon-dropdown"
							contentClassName="fb-setting-global-typo-setting-icon-dropdown-content"
							popoverProps={{ placement: 'bottom-start' }}
							renderToggle={({ isOpen, onToggle }) => (
							<Button
								variant="primary"
								onClick={onToggle}
								aria-expanded={isOpen}
								className="fb-setting-global-typo-setting-icon-btn"
							>
								<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M7 4.5L9.5 2M9.5 2L12 4.5M9.5 2V17M9.5 17L12 14.5M9.5 17L7 14.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M4.5 12L2 9.5M2 9.5L4.5 7M2 9.5L17 9.5M17 9.5L14.5 7M17 9.5L14.5 12" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</Button>
						)}
						renderContent={() => (
							<div className="fb-setting-global-typo-popup-wrapper">
								<SelectControl
									label={__("Select", "frontis-blocks")}
									options={GB_TYPO}
									// value={fontWeight}
									// onChange={handleFontWeightChange}
								/>		
							</div>
						)}
					/>}
					<div className="fb-unit-wrapper">
						{rangeValue[deviceType] && (
							<div className="fb-reset-control-container" onClick={resetRangeValue}>
								<button className="fb-reset-button fb-reset-has-value">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.6817 6.23162H14.0101V6.23044M1.98926 13.0956V9.76718M1.98926 9.76718L5.31768 9.76718M1.98926 9.76718L4.10985 11.8892C4.7702 12.5507 5.60824 13.0527 6.57607 13.312C9.51014 14.0982 12.526 12.357 13.3122 9.42292M2.68699 6.57591C3.47317 3.64184 6.48902 1.90064 9.42308 2.68682C10.3909 2.94615 11.229 3.4481 11.8893 4.10969L14.0101 6.23044M14.0101 2.90322V6.23044" stroke="#555E72"></path></svg>
								</button>
							</div>
						)}
						{isRangeUnit && (
							<FB_RangeUnitsType
								currentUnit={units[deviceType]}
								unitTypes={units_types_arr}
								onUnitChange={setRangeUnit}
							/>
						)}
					</div>
				</div>
				<RangeControl
					// value={rangeValue[deviceType] !== "" ? parseInt(rangeValue[deviceType]) : undefined}
					value={rangeValue[deviceType] !== "" ? Number(rangeValue[deviceType]) : undefined}
					onChange={setRangeValue}
					min={min}
					max={max}
					step={rangeStep}
					resetFallbackValue={resetFallbackValue}
				/>
			</div>
		</div>
	);
};

export default FB_Range;
