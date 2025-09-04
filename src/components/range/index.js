import { useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { BaseControl, Button, ButtonGroup, Dropdown, RangeControl, SelectControl } from '@wordpress/components';
import FB_ResponsiveControl from '@Components/responsive-control';
import FB_RangeUnitsType from '@Components/unit-control';

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
	globalTypographyType = null,
	globalTypographyValue = 'none',
	setGlobalTypographyValue = null,
	globalReset = false,
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

	// if(globalReset === true) {
	// 	setRangeValue(resetFallbackValue);
	// }

	const handleGlobalTypographyValue = (value) => {
		setGlobalTypographyValue(value);
	};

	const globalTypo = FrontisBlocksData.global_typography;
	const GB_TYPO = [{ label: 'None', value: 'none' }];

	const storedData = localStorage.getItem("fb_custom_typography");
	const customTypoData = storedData ? JSON.parse(storedData) : {};

	// Convert object to array
	const customTypoArray = Object.keys(customTypoData).map(key => ({
		id: key,
		name: customTypoData[key].name
	}));


	Object.entries(globalTypo).forEach(([label, properties]) => {
		let updatedValue = null;
	
		if (globalTypographyType === 'fontSize' && properties?.fontSize?.variable !== undefined) {
			updatedValue = `var(${properties?.fontSize?.variable})`;
		}
		if (globalTypographyType === 'lineHeight' && properties?.lineHeight?.variable !== undefined) {
			updatedValue = `var(${properties?.lineHeight?.variable})`;
		}
		if (globalTypographyType === 'letterSpacing' && properties?.letterSpacing?.variable !== undefined) {
			updatedValue = `var(${properties?.letterSpacing?.variable})`;
		}
	
		if (updatedValue !== null) {
			let newLabel =
				label === 'body' ? 'Body' :
				label === 'captions' ? 'Captions' :
				label === 'button' ? 'Button' :
				label === 'link' ? 'Link' :
				label === 'h1' ? 'Heading One' :
				label === 'h2' ? 'Heading Two' :
				label === 'h3' ? 'Heading Three' :
				label === 'h4' ? 'Heading Four' :
				label === 'h5' ? 'Heading Five' :
				label === 'h6' ? 'Heading Six' :
				label;
		
			GB_TYPO.push({ label: newLabel, value: updatedValue });
		}
	});
	
	GB_TYPO.forEach(item => {
		const matchedTypo = customTypoArray.find(typo => typo.id === item.label);
		if (matchedTypo) {
			item.label = matchedTypo.name;
		}
	});
	
	return (
		<div className="fb-setting-spacing-container">
			<div className="fb-setting-spacing-inner-container">
				<div className="fb-setting-spacing-label-container">
					<FB_ResponsiveControl
						labelText={__(label, 'frontis-blocks')}
						device={deviceType}
					/>
					
					<div className="fb-unit-wrapper">
						{rangeValue[deviceType] && (
							<div className="fb-reset-control-container" onClick={resetRangeValue}>
								<button className="fb-reset-button fb-reset-has-value">
								<svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.6817 6.23162H14.0101V6.23044M1.98926 13.0956V9.76718M1.98926 9.76718L5.31768 9.76718M1.98926 9.76718L4.10985 11.8892C4.7702 12.5507 5.60824 13.0527 6.57607 13.312C9.51014 14.0982 12.526 12.357 13.3122 9.42292M2.68699 6.57591C3.47317 3.64184 6.48902 1.90064 9.42308 2.68682C10.3909 2.94615 11.229 3.4481 11.8893 4.10969L14.0101 6.23044M14.0101 2.90322V6.23044" stroke="#555E72"></path></svg>
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

					{globalIcon === true && <Dropdown
							className="fb-setting-global-icon-wrapper"
							contentClassName="fb-setting-global-icon-content"
							popoverProps={{ placement: 'bottom-start' }}
							renderToggle={({ isOpen, onToggle }) => (
							<Button
								variant="primary"
								onClick={onToggle}
								aria-expanded={isOpen}
								className={`fb-setting-global-icon-btn ${globalTypographyValue !== 'none' && 'global-active'}`}
							>
								<svg width="16px" height="16px" viewBox="0 0 25 25" xmlns="https://www.w3.org/2000/svg">
									<g>
										<path class="st0" d="M12.5,21.8c-4.5,0-8.3-3-9.4-7.3c0,0,0,0,0,0c-0.2-0.8-0.3-1.6-0.3-2.4c0-1.7,0.4-3.3,1.2-4.8c0,0,0,0,0,0
										c1.7-3.1,5-5,8.5-5c3.5,0,6.8,1.9,8.5,5c0,0,0,0,0,0c0.8,1.4,1.2,3.1,1.2,4.8c0,0.8-0.1,1.6-0.3,2.4c0,0,0,0,0,0
										C20.8,18.7,17,21.8,12.5,21.8z M9.6,17c0.7,2,1.9,3.2,2.9,3.2s2.2-1.2,2.9-3.2C13.5,17.3,11.5,17.3,9.6,17z M17.1,16.7
										c-0.3,1.1-0.7,2.1-1.3,2.9c1.7-0.8,3.1-2.1,4-3.8C19,16.1,18.1,16.4,17.1,16.7z M5.1,15.8c0.9,1.7,2.3,3,4,3.8
										c-0.5-0.8-0.9-1.8-1.3-2.9C6.9,16.4,6,16.1,5.1,15.8z M9.1,15.4c2.2,0.4,4.6,0.4,6.8,0c0.2-1,0.4-2.2,0.4-3.4c0-0.4,0-0.9,0-1.3
										c-2.4,0.7-5,0.7-7.4,0c0,0.4,0,0.9,0,1.3C8.8,13.2,8.9,14.4,9.1,15.4z M17.7,10.2c0.1,0.6,0.1,1.2,0.1,1.8c0,1.1-0.1,2.1-0.2,3
										c1.1-0.3,2.1-0.7,3.1-1.3c0.1-0.6,0.2-1.2,0.2-1.8c0-1.1-0.2-2.2-0.7-3.3C19.3,9.3,18.5,9.8,17.7,10.2z M4.4,13.8
										c1,0.5,2,0.9,3.1,1.3c-0.2-0.9-0.2-2-0.2-3c0-0.6,0-1.2,0.1-1.8C6.5,9.8,5.7,9.3,4.9,8.8c-0.4,1-0.7,2.1-0.7,3.3
										C4.2,12.6,4.3,13.2,4.4,13.8z M9,9.2c2.3,0.7,4.8,0.7,7,0c-0.6-3.3-2.1-5.4-3.5-5.4S9.6,5.9,9,9.2z M5.6,7.4
										c0.6,0.5,1.2,0.9,1.9,1.2C7.9,7,8.4,5.6,9.1,4.5C7.7,5.1,6.5,6.1,5.6,7.4z M15.9,4.5c0.7,1.1,1.2,2.5,1.6,4.1
										c0.7-0.3,1.3-0.7,1.9-1.2C18.5,6.1,17.3,5.1,15.9,4.5z"/>
									</g>
								</svg>

							</Button>
						)}
						renderContent={() => (
							<div className="fb-setting-typography-popup">
								<BaseControl className="fb-setting-typography-popup-inner">
									<SelectControl
										label={__("Global Styles", "frontis-blocks")}
										className="fb-setting-global-typo-select"
										options={GB_TYPO}
										value={globalTypographyValue}
										onChange={handleGlobalTypographyValue}
									/>
								</BaseControl>
							</div>
						)}
					/>}
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