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
		{ label: 'rem', value: 'rem' },
		{ label: 'vh', value: 'vh' },
		{ label: 'vw', value: 'vw' },
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

		// Reset spacing values for all devices
		setAttributes({
			spacingDesktop: defaultSpacing,
			spacingTablet: defaultSpacing,
			spacingMobile: defaultSpacing,
		});

		// Reset the spacing unit to the default unit (e.g., 'px')
		spacingUnitsHandler('px');
		
		// Reset the individual handleSpacingUnit values
		Object.keys(defaultSpacing).forEach((position) => {
			handleSpacingUnitHandler({ target: { value: '' } }, position);
		});
	};

	return (
		<div className="fb-setting-spacing-container">
			<div className="fb-setting-spacing-inner-container">
				<div className="fb-setting-spacing-label-container">
					<FB_ResponsiveControl
						labelText={ __( label, 'frontis-blocks' )}
						device={deviceType}
					/>
					<div className="fb-unit-wrapper">
						{getSpacingValue('top') && getSpacingValue('right') && getSpacingValue('bottom') && getSpacingValue('left') && (
							<div className="fb-reset-control-container" onClick={resetSpacingValue}>
								<button className="fb-reset-button fb-reset-has-value">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M10.6817 6.23162H14.0101V6.23044M1.98926 13.0956V9.76718M1.98926 9.76718L5.31768 9.76718M1.98926 9.76718L4.10985 11.8892C4.7702 12.5507 5.60824 13.0527 6.57607 13.312C9.51014 14.0982 12.526 12.357 13.3122 9.42292M2.68699 6.57591C3.47317 3.64184 6.48902 1.90064 9.42308 2.68682C10.3909 2.94615 11.229 3.4481 11.8893 4.10969L14.0101 6.23044M14.0101 2.90322V6.23044" stroke="#555E72"/>
								</svg>
								</button>
							</div>
						)}
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