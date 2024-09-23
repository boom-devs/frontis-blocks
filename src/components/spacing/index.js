import React, {useState} from 'react';
import {__} from '@wordpress/i18n';
import {
	Button,
	ButtonGroup
} from '@wordpress/components';
import FB_ResponsiveControl from "@Components/responsive-control";
import './editor.lazy.scss';

export default function FB_Spacing({DeviceType, spacingUnits, spacingDesktop, spacingTablet, spacingMobile, handleSpacingUnitHandler, spacingCombineBtn, spacingCombineBtnHandler, setAttributes}) {

	const handleSpacingUnit = (event, position) => {
		handleSpacingUnitHandler(event, position);
	}

	const handleMarginLinkToggle = () => {
		spacingCombineBtnHandler()
	};

	const UNIT_TYPES = [
		{ label: "px", value: "px" },
		{ label: "%", value: "%" },
		{ label: "em", value: "em" },
	];

	return (
		<div className="fb-setting-spacing-container">
			<div className="fb-setting-spacing-inner-container">
				{/* Margin */}
				<div className="fb-setting-spacing-label-container">
					<FB_ResponsiveControl
						labelText={__('Margin', 'frontis-block')}
						device={DeviceType}
						deviceHandler={(newDevice) => setAttributes({DeviceType: newDevice})}
					/>
					<div className="fb-setting-units-type">
						<ButtonGroup className="fb-setting-units-type-wrap">
							{UNIT_TYPES.map((item, key) => (
								<Button
									key={key}
									onClick={() => setAttributes({
										spacingUnits: {
											...spacingUnits, // Spread the existing spacingUnits object
											[DeviceType]: item.value // Dynamically update the specific DeviceType
										}
									})}
									className={`fb-setting-units-type-switcher ${spacingUnits[DeviceType] === item.value ? 'active' : ''}`}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
					</div>
				</div>
				<div className="fb-setting-spacing-input-container">
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__("Top", "frontis-blocks")}</label>
						<input
							type="number"
							name="top"
							value={DeviceType === 'Desktop' ? spacingDesktop.top : DeviceType === 'Tablet' ? spacingTablet.top : spacingMobile.top}
							onChange={(e) => handleSpacingUnit(e, 'top')}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
						<input
							type="number"
							name="right"
							value={DeviceType === 'Desktop' ? spacingDesktop.right : DeviceType === 'Tablet' ? spacingTablet.right : spacingMobile.right}
							onChange={(e) => handleSpacingUnit(e, 'right')}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
						<input
							type="number"
							name="bottom"
							value={DeviceType === 'Desktop' ? spacingDesktop.bottom : DeviceType === 'Tablet' ? spacingTablet.bottom : spacingMobile.bottom}
							onChange={(e) => handleSpacingUnit(e, 'bottom')}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
						<input
							type="number"
							name="left"
							value={DeviceType === 'Desktop' ? spacingDesktop.left : DeviceType === 'Tablet' ? spacingTablet.left : spacingMobile.left}
							onChange={(e) => handleSpacingUnit(e, 'left')}
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
