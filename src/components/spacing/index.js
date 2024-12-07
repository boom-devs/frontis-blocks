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

export default function FB_Spacing( {label, deviceType, spacingUnitsHandler, spacingUnits, spacingDesktop, spacingTablet, spacingMobile, handleSpacingUnitHandler, spacingCombineBtn, spacingCombineBtnHandler, setAttributes} ) {

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

	return (
		<div className="fb-setting-spacing-container">
			<div className="fb-setting-spacing-inner-container">
				<div className="fb-setting-spacing-label-container">
					<FB_ResponsiveControl
						labelText={ __( label, 'frontis-blocks' )}
						device={deviceType}
						deviceHandler={( newDevice ) => setAttributes( {deviceType: newDevice} )}
					/>
					<FB_RangeUnitsType
						currentUnit={spacingUnits[deviceType]}
						unitTypes={UNIT_TYPES}
						onUnitChange={setSpacingUnit}
					/>
				</div>
				<div className="fb-setting-spacing-input-container">
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__( 'Top', 'frontis-blocks' )}</label>
						<input
							type="number"
							name="top"
							value={getSpacingValue( 'top' )}
							onChange={( e ) => handleSpacingUnit( e, 'top' )}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__( 'Right', 'frontis-blocks' )}</label>
						<input
							type="number"
							name="right"
							value={getSpacingValue( 'right' )}
							onChange={( e ) => handleSpacingUnit( e, 'right' )}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__( 'Bottom', 'frontis-blocks' )}</label>
						<input
							type="number"
							name="bottom"
							value={getSpacingValue( 'bottom' )}
							onChange={( e ) => handleSpacingUnit( e, 'bottom' )}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__( 'Left', 'frontis-blocks' )}</label>
						<input
							type="number"
							name="left"
							value={getSpacingValue( 'left' )}
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