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

export default function TeamMemberContentMarginControl ({ attributes, setAttributes}) {

	const {
		teamMemberContentMarginUnits,
		desktopteamMemberContentMargin,
		teamMemberContentDesktopMargin,
		teamMemberContentTabMargin,
		teamMemberContentMobileMargin,
		teamMemberContentMarginLink,
		DeviceType,


	} = attributes;


	/** Start Margin */
	const [previousMargin, setPreviousMargin] = useState(teamMemberContentDesktopMargin);
	/** Function to update all margin values */
	const updateAllMargin = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					teamMemberContentDesktopMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					teamMemberContentTabMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					teamMemberContentMobileMargin: {
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
				setAttributes({ teamMemberContentDesktopMargin: { ...teamMemberContentDesktopMargin, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ teamMemberContentTabMargin: { ...teamMemberContentTabMargin, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ teamMemberContentMobileMargin: { ...teamMemberContentMobileMargin, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all margin values if marginLink is true */
		if (teamMemberContentMarginLink) {
			updateAllMargin(value, DeviceType);
		}
	};

	/** Function to handle marginLink toggle */
	const handleMarginLinkToggle = () => {
		if (!teamMemberContentMarginLink) {
			setAttributes({ teamMemberContentDesktopMargin: previousMargin });
		}
		/** setmarginLink(!marginLink) */
		setAttributes({teamMemberContentMarginLink: !teamMemberContentMarginLink})
	};

	/** Update previousMargin state when margin changes */
	useEffect(() => {
		setPreviousMargin(teamMemberContentDesktopMargin);
	}, [teamMemberContentDesktopMargin]);

	/** Function to handle device click for margin */
	const handleMarginDeviceClick = (device) => {
		setAttributes({ DeviceType: device });
	};

	/** Default margin for desktop (using desktop_margin) */
	const teamMemberContentMargin = `${teamMemberContentDesktopMargin.top}${teamMemberContentMarginUnits} ${teamMemberContentDesktopMargin.right}${teamMemberContentMarginUnits} ${teamMemberContentDesktopMargin.bottom}${teamMemberContentMarginUnits} ${teamMemberContentDesktopMargin.left}${teamMemberContentMarginUnits}`;
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
										onClick={() => setAttributes({ teamMemberContentMarginUnits: item.value })}
										className={`fb-setting-units-type-switcher ${ teamMemberContentMarginUnits === item.value ? 'active' : ''}`}
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
								value={DeviceType === 'Desktop' ? teamMemberContentDesktopMargin.top : DeviceType === 'Tablet' ? teamMemberContentTabMargin.top : teamMemberContentMobileMargin.top}
								onChange={(e) => handleMarginInputChange(e, 'top')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
							<input
								type="number"
								name="right"
								value={DeviceType === 'Desktop' ? teamMemberContentDesktopMargin.right : DeviceType === 'Tablet' ? teamMemberContentTabMargin.right : teamMemberContentMobileMargin.right}
								onChange={(e) => handleMarginInputChange(e, 'right')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
							<input
								type="number"
								name="bottom"
								value={DeviceType === 'Desktop' ? teamMemberContentDesktopMargin.bottom : DeviceType === 'Tablet' ? teamMemberContentTabMargin.bottom : teamMemberContentMobileMargin.bottom}
								onChange={(e) => handleMarginInputChange(e, 'bottom')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
							<input
								type="number"
								name="left"
								value={DeviceType === 'Desktop' ? teamMemberContentDesktopMargin.left : DeviceType === 'Tablet' ? teamMemberContentTabMargin.left : teamMemberContentMobileMargin.left}
								onChange={(e) => handleMarginInputChange(e, 'left')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label"></label>
							<span
								className={`dashicons ${teamMemberContentMarginLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${teamMemberContentMarginLink ? 'is-checked' : ''}`}
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
