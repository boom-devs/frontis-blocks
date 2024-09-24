import { __ } from '@wordpress/i18n';
import {
	BaseControl,
	Button,
	ButtonGroup,
	HStack,
	TextControl,
	TextareaControl,
	ResponsiveWrapper,
	MediaUpload,
	MediaUploadCheck,
	PanelBody, SelectControl, Dropdown, Dashicon, ColorPicker, ColorPalette,
} from '@wordpress/components';
import {useEffect, useState} from "@wordpress/element";
import {BORDER_STYLES, UNIT_TYPES} from "../../constants/constants";
import ResponsiveControl from "../../../../components/responsivecontrol";

export default function PricingTableHeaderNameMarginControl ({ attributes, setAttributes}) {

	const {
		DeviceType,
		pricingTableHeaderNameMarginUnits,
		desktoppricingTableHeaderNameMargin,
		pricingTableHeaderNameDesktopMargin,
		pricingTableHeaderNameTabMargin,
		pricingTableHeaderNameMobileMargin,
		pricingTableHeaderNameMarginLink,

	} = attributes;


	/** Start Margin */
	const [previousMargin, setPreviousMargin] = useState(pricingTableHeaderNameDesktopMargin);
	/** Function to update all margin values */
	const updateAllMargin = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					pricingTableHeaderNameDesktopMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					pricingTableHeaderNameTabMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					pricingTableHeaderNameMobileMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			default:
				break;
		}
	};

	/** Function to handle input change */
	const handleMarginInputChange = (e, direction) => {
		const value = e.target.value;
		switch(DeviceType) {
			case 'Desktop':
				setAttributes({ pricingTableHeaderNameDesktopMargin: { ...pricingTableHeaderNameDesktopMargin, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ pricingTableHeaderNameTabMargin: { ...pricingTableHeaderNameTabMargin, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ pricingTableHeaderNameMobileMargin: { ...pricingTableHeaderNameMobileMargin, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all margin values if marginLink is true */
		if (pricingTableHeaderNameMarginLink) {
			updateAllMargin(value, DeviceType);
		}
	};

	/** Function to handle marginLink toggle */
	const handleMarginLinkToggle = () => {
		if (!pricingTableHeaderNameMarginLink) {
			setAttributes({ pricingTableHeaderNameDesktopMargin: previousMargin });
		}
		/** setmarginLink(!marginLink) */
		setAttributes({pricingTableHeaderNameMarginLink: !pricingTableHeaderNameMarginLink})
	};

	/** Update previousMargin state when margin changes */
	useEffect(() => {
		setPreviousMargin(pricingTableHeaderNameDesktopMargin);
	}, [pricingTableHeaderNameDesktopMargin]);

	/** Function to handle device click for margin */
	const handleMarginDeviceClick = (device) => {
		setAttributes({ DeviceType: device });
	};

	/** Default margin for desktop (using desktop_margin) */
	const pricingTableHeaderNameMargin = `${pricingTableHeaderNameDesktopMargin.top}${pricingTableHeaderNameMarginUnits} ${pricingTableHeaderNameDesktopMargin.right}${pricingTableHeaderNameMarginUnits} ${pricingTableHeaderNameDesktopMargin.bottom}${pricingTableHeaderNameMarginUnits} ${pricingTableHeaderNameDesktopMargin.left}${pricingTableHeaderNameMarginUnits}`;
	/** End Margin */


	return (
		<>
			<div className="fb-setting-spacing-container">
				<div className="fb-setting-spacing-inner-container">
					{/* Margin */}
					<div className="fb-setting-spacing-label-container">
						<ResponsiveControl labelText={__('Margin', 'frontis-block')} device={DeviceType} deviceHandler={handleMarginDeviceClick}/>
						<div className="fb-setting-units-type">
							<ButtonGroup className="fb-setting-units-type-wrap">
								{UNIT_TYPES.map((item, key) => (
									<Button
										key={key}
										onClick={() => setAttributes({ pricingTableHeaderNameMarginUnits: item.value })}
										className={`fb-setting-units-type-switcher ${ pricingTableHeaderNameMarginUnits === item.value ? 'active' : ''}`}
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
								value={DeviceType === 'Desktop' ? pricingTableHeaderNameDesktopMargin.top : DeviceType === 'Tablet' ? pricingTableHeaderNameTabMargin.top : pricingTableHeaderNameMobileMargin.top}
								onChange={(e) => handleMarginInputChange(e, 'top')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
							<input
								type="number"
								name="right"
								value={DeviceType === 'Desktop' ? pricingTableHeaderNameDesktopMargin.right : DeviceType === 'Tablet' ? pricingTableHeaderNameTabMargin.right : pricingTableHeaderNameMobileMargin.right}
								onChange={(e) => handleMarginInputChange(e, 'right')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
							<input
								type="number"
								name="bottom"
								value={DeviceType === 'Desktop' ? pricingTableHeaderNameDesktopMargin.bottom : DeviceType === 'Tablet' ? pricingTableHeaderNameTabMargin.bottom : pricingTableHeaderNameMobileMargin.bottom}
								onChange={(e) => handleMarginInputChange(e, 'bottom')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
							<input
								type="number"
								name="left"
								value={DeviceType === 'Desktop' ? pricingTableHeaderNameDesktopMargin.left : DeviceType === 'Tablet' ? pricingTableHeaderNameTabMargin.left : pricingTableHeaderNameMobileMargin.left}
								onChange={(e) => handleMarginInputChange(e, 'left')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label"></label>
							<span
								className={`dashicons ${pricingTableHeaderNameMarginLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${pricingTableHeaderNameMarginLink ? 'is-checked' : ''}`}
								onClick={handleMarginLinkToggle}
							>
                                                            </span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
