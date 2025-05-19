import { useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { BaseControl, Button, ButtonGroup, Dropdown, RangeControl, SelectControl } from '@wordpress/components';
import FB_ResponsiveControl from '@Components/responsive-control';
import FB_RangeUnitsType from '@Components/unit-control';

const FB_GBSelectControl = ({
	label,
	controlOptions,
	selectValue,
	setSelectValue,
	globalIcon = false,
	globalTypographyType = null,
	globalTypographyValue = 'none',
	setGlobalTypographyValue = null,
}) => {



	const handleSelectValue = (value) => {
		setSelectValue(value);
	};

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
	
		if (globalTypographyType === 'fontWeight' && properties?.fontWeight?.variable !== undefined) {
			updatedValue = `var(${properties?.fontWeight?.variable})`;
		}
		if (globalTypographyType === 'fontStyle' && properties?.fontStyle?.variable !== undefined) {
			updatedValue = `var(${properties?.fontStyle?.variable})`;
		}
		if (globalTypographyType === 'textDecoration' && properties?.textDecoration?.variable !== undefined) {
			updatedValue = `var(${properties?.textDecoration?.variable})`;
		}
		if (globalTypographyType === 'textTransform' && properties?.textTransform?.variable !== undefined) {
			updatedValue = `var(${properties?.textTransform?.variable})`;
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
					<span className="fb-setting-gb-select-control-label">{label}</span>
					<div className="fb-unit-wrapper">
						{globalIcon === true && <Dropdown
								className="fb-setting-global-icon-wrapper gb-select-control"
								contentClassName="fb-setting-global-icon-content"
								popoverProps={{ placement: 'bottom-start' }}
								renderToggle={({ isOpen, onToggle }) => (
								<Button
									variant="primary"
									onClick={onToggle}
									aria-expanded={isOpen}
									className={`fb-setting-global-icon-btn ${globalTypographyValue !== 'none' && 'global-active'}`}
								>
									<svg width="16px" height="16px" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
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
				<SelectControl
					options={controlOptions}
					value={selectValue}
					onChange={handleSelectValue}
				/>
			</div>
		</div>
	);
};

export default FB_GBSelectControl;
