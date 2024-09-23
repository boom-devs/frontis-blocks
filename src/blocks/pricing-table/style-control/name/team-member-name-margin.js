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

export default function TeamMemberNameMarginControl ({ attributes, setAttributes}) {

	const {
		DeviceType,
		teamMemberNameMarginUnits,
		desktopteamMemberNameMargin,
		teamMemberNameDesktopMargin,
		teamMemberNameTabMargin,
		teamMemberNameMobileMargin,
		teamMemberNameMarginLink,

	} = attributes;


	/** Start Margin */
	const [previousMargin, setPreviousMargin] = useState(teamMemberNameDesktopMargin);
	/** Function to update all margin values */
	const updateAllMargin = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					teamMemberNameDesktopMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					teamMemberNameTabMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					teamMemberNameMobileMargin: {
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
				setAttributes({ teamMemberNameDesktopMargin: { ...teamMemberNameDesktopMargin, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ teamMemberNameTabMargin: { ...teamMemberNameTabMargin, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ teamMemberNameMobileMargin: { ...teamMemberNameMobileMargin, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all margin values if marginLink is true */
		if (teamMemberNameMarginLink) {
			updateAllMargin(value, DeviceType);
		}
	};

	/** Function to handle marginLink toggle */
	const handleMarginLinkToggle = () => {
		if (!teamMemberNameMarginLink) {
			setAttributes({ teamMemberNameDesktopMargin: previousMargin });
		}
		/** setmarginLink(!marginLink) */
		setAttributes({teamMemberNameMarginLink: !teamMemberNameMarginLink})
	};

	/** Update previousMargin state when margin changes */
	useEffect(() => {
		setPreviousMargin(teamMemberNameDesktopMargin);
	}, [teamMemberNameDesktopMargin]);

	/** Function to handle device click for margin */
	const handleMarginDeviceClick = (device) => {
		setAttributes({ DeviceType: device });
	};

	/** Default margin for desktop (using desktop_margin) */
	const teamMemberNameMargin = `${teamMemberNameDesktopMargin.top}${teamMemberNameMarginUnits} ${teamMemberNameDesktopMargin.right}${teamMemberNameMarginUnits} ${teamMemberNameDesktopMargin.bottom}${teamMemberNameMarginUnits} ${teamMemberNameDesktopMargin.left}${teamMemberNameMarginUnits}`;
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
										onClick={() => setAttributes({ teamMemberNameMarginUnits: item.value })}
										className={`fb-setting-units-type-switcher ${ teamMemberNameMarginUnits === item.value ? 'active' : ''}`}
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
								value={DeviceType === 'Desktop' ? teamMemberNameDesktopMargin.top : DeviceType === 'Tablet' ? teamMemberNameTabMargin.top : teamMemberNameMobileMargin.top}
								onChange={(e) => handleMarginInputChange(e, 'top')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
							<input
								type="number"
								name="right"
								value={DeviceType === 'Desktop' ? teamMemberNameDesktopMargin.right : DeviceType === 'Tablet' ? teamMemberNameTabMargin.right : teamMemberNameMobileMargin.right}
								onChange={(e) => handleMarginInputChange(e, 'right')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
							<input
								type="number"
								name="bottom"
								value={DeviceType === 'Desktop' ? teamMemberNameDesktopMargin.bottom : DeviceType === 'Tablet' ? teamMemberNameTabMargin.bottom : teamMemberNameMobileMargin.bottom}
								onChange={(e) => handleMarginInputChange(e, 'bottom')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
							<input
								type="number"
								name="left"
								value={DeviceType === 'Desktop' ? teamMemberNameDesktopMargin.left : DeviceType === 'Tablet' ? teamMemberNameTabMargin.left : teamMemberNameMobileMargin.left}
								onChange={(e) => handleMarginInputChange(e, 'left')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label"></label>
							<span
								className={`dashicons ${teamMemberNameMarginLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${teamMemberNameMarginLink ? 'is-checked' : ''}`}
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
