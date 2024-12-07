// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import {__} from '@wordpress/i18n';
import {
	Button,
	ButtonGroup
} from '@wordpress/components';
// eslint-disable-next-line import/no-unresolved
import FB_ResponsiveControl from '@Components/responsive-control';
import FB_RangeUnitsType from '@Components/unit-control';
import './editor.lazy.scss';

export default function FB_Spacing( {
	label,
	deviceType,
	spacingUnitsHandler,
	spacingUnits,
	spacingDesktop,
	spacingTablet,
	spacingMobile,
	handleSpacingUnitHandler,
	spacingCombineBtn,
	spacingCombineBtnHandler,
	setAttributes
} ) {

	const handleSpacingUnit = ( event, position ) => {
		handleSpacingUnitHandler( event, position );
	}

	const handleMarginLinkToggle = () => {
		spacingCombineBtnHandler()
	};

	const UNIT_TYPES = [
		{ label: 'px', value: 'px' },
		{ label: '%', value: '%' },
		{ label: 'em', value: 'em' },
	];

	// Get spacing value
	const getSpacingValue = ( position ) => {
		if ( deviceType === 'Desktop' ) {
			return spacingDesktop[position];
		} else if ( deviceType === 'Tablet' ) {
			return spacingTablet[position];
		}

		return spacingMobile[position];
	};

	const setSpacingUnit = (unit) => {
		spacingUnitsHandler(unit);
	}

	// Reset spacing values to default
	const resetSpacingValue = () => {
		const defaultSpacing = { top: '', right: '', bottom: '', left: '' };
	
		switch (deviceType) {
			case 'Desktop':
				setAttributes((prevAttributes) => ({
					...prevAttributes,
					spacingDesktop: defaultSpacing,
				}));
				break;
			case 'Tablet':
				setAttributes((prevAttributes) => ({
					...prevAttributes,
					spacingTablet: defaultSpacing,
				}));
				break;
			case 'Mobile':
				setAttributes((prevAttributes) => ({
					...prevAttributes,
					spacingMobile: defaultSpacing,
				}));
				break;
			default:
				break;
		}
	};

	return (
		<div className="fb-setting-spacing-container">
			<div className="fb-setting-spacing-inner-container">
				<div className="fb-setting-spacing-label-container">
					<FB_ResponsiveControl
						labelText={ __( label, 'frontis-blocks' )}
						device={deviceType}
						deviceHandler={( newDevice ) => setAttributes( {deviceType: newDevice} )}
					/>
					<div className="fb-unit-wrapper">
						<div className="fb-reset-control-container" onClick={resetSpacingValue}>
							<button className="fb-reset-button fb-reset-has-value">
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M2.75 2C3.16421 2 3.5 2.33579 3.5 2.75V6.5H7.25C7.66421 6.5 8 6.83579 8 7.25C8 7.66421 7.66421 8 7.25 8H2.75C2.33579 8 2 7.66421 2 7.25V2.75C2 2.33579 2.33579 2 2.75 2Z" fill="#4d4d4d" />
									<path fillRule="evenodd" clipRule="evenodd" d="M8.29365 3.75C6.56527 3.75 5.07807 4.79769 4.42654 6.30028C4.26196 6.67984 3.82318 6.8531 3.4465 6.68726C3.06981 6.52143 2.89787 6.07929 3.06245 5.69972C3.94232 3.6705 5.95253 2.25 8.29365 2.25C11.4452 2.25 14 4.82436 14 8C14 11.1756 11.4452 13.75 8.29365 13.75C6.42651 13.75 4.76879 12.8456 3.72895 11.451C3.48203 11.1198 3.54828 10.6497 3.87693 10.4009C4.20558 10.1521 4.67217 10.2188 4.91909 10.55C5.68985 11.5837 6.91443 12.25 8.29365 12.25C10.623 12.25 12.5114 10.3472 12.5114 8C12.5114 5.65279 10.623 3.75 8.29365 3.75Z" fill="#4d4d4d" />
								</svg>
							</button>
						</div>
						<FB_RangeUnitsType
							currentUnit={spacingUnits[deviceType]}
							unitTypes={UNIT_TYPES}
							onUnitChange={setSpacingUnit}
						/>
					</div>
				</div>
				<div className="fb-setting-spacing-input-container">
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__( 'Top', 'frontis-blocks' )}</label>
						<input
							type="number"
							name="top"
							value={getSpacingValue( 'top' ) || ''}
							onChange={( e ) => handleSpacingUnit( e, 'top' )}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__( 'Right', 'frontis-blocks' )}</label>
						<input
							type="number"
							name="right"
							value={getSpacingValue( 'right' ) || ''}
							onChange={( e ) => handleSpacingUnit( e, 'right' )}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__( 'Bottom', 'frontis-blocks' )}</label>
						<input
							type="number"
							name="bottom"
							value={getSpacingValue( 'bottom' ) || ''}
							onChange={( e ) => handleSpacingUnit( e, 'bottom' )}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__( 'Left', 'frontis-blocks' )}</label>
						<input
							type="number"
							name="left"
							value={getSpacingValue( 'left' ) || ''}
							onChange={( e ) => handleSpacingUnit( e, 'left' )}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label"></label>
						<span
							className={`dashicons ${spacingCombineBtn ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${spacingCombineBtn ? 'is-checked' : ''}`}
							onClick={handleMarginLinkToggle}
						>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}