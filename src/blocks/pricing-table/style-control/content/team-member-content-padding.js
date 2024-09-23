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

export default function TeamMemberContentPaddingControl ({ attributes, setAttributes}) {

	const {
		teamMemberContentPaddingUnits,
		desktopteamMemberContentPadding,
		teamMemberContentDesktopPadding,
		teamMemberContentTabPadding,
		teamMemberContentMobilePadding,
		teamMemberContentPaddingLink,
		DeviceType,


	} = attributes;

	/** Start Padding */
	const [previousPadding, setPreviousPadding] = useState(teamMemberContentDesktopPadding);
	/** Function to update all padding values */
	const updateAllPadding = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					teamMemberContentDesktopPadding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					teamMemberContentTabPadding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					teamMemberContentMobilePadding: {
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
	const handlePaddingInputChange = (e, direction) => {
		const value = e.target.value;
		switch(DeviceType) {
			case 'Desktop':
				setAttributes({ teamMemberContentDesktopPadding: { ...teamMemberContentDesktopPadding, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ teamMemberContentTabPadding: { ...teamMemberContentTabPadding, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ teamMemberContentMobilePadding: { ...teamMemberContentMobilePadding, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all padding values if teamMemberContentPaddingLink is true */
		if (teamMemberContentPaddingLink) {
			updateAllPadding(value, DeviceType);
		}
	};

	/** Function to handle teamMemberContentPaddingLink toggle */
	const handleteamMemberContentPaddingLinkToggle = () => {
		if (!teamMemberContentPaddingLink) {
			setAttributes({ teamMemberContentDesktopPadding: previousPadding });
		}
		/** setteamMemberContentPaddingLink(!teamMemberContentPaddingLink) */
		setAttributes({teamMemberContentPaddingLink: !teamMemberContentPaddingLink})
	};

	/** Update previousPadding state when padding changes */
	useEffect(() => {
		setPreviousPadding(teamMemberContentDesktopPadding);
	}, [teamMemberContentDesktopPadding]);

	/** Function to handle device click for padding */
	const handlePaddingDeviceClick = (device) => {
		setAttributes({ DeviceType: device });
	};

	/** Default padding for desktop (using desktop_padding) */
	const teamMemberContentPadding = `${teamMemberContentDesktopPadding.top}${teamMemberContentPaddingUnits} ${teamMemberContentDesktopPadding.right}${teamMemberContentPaddingUnits} ${teamMemberContentDesktopPadding.bottom}${teamMemberContentPaddingUnits} ${teamMemberContentDesktopPadding.left}${teamMemberContentPaddingUnits}`;
	/** End Padding */

	return (
		<>
			<div className="fb-setting-spacing-container">
				<div className="fb-setting-spacing-inner-container">
					{/* Padding */}
					<div className="fb-setting-spacing-label-container">
						<ResponsiveControl labelText={__('Padding', 'frontis-block')} device={DeviceType} deviceHandler={handlePaddingDeviceClick}/>
						<div className="fb-setting-units-type">
							<ButtonGroup className="fb-setting-units-type-wrap">
								{UNIT_TYPES.map((item, key) => (
									<Button
										key={key}
										onClick={() => setAttributes({ teamMemberContentPaddingUnits: item.value })}
										className={`fb-setting-units-type-switcher ${ teamMemberContentPaddingUnits === item.value ? 'active' : ''}`}
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
								value={DeviceType === 'Desktop' ? teamMemberContentDesktopPadding.top : DeviceType === 'Tablet' ? teamMemberContentTabPadding.top : teamMemberContentMobilePadding.top}
								onChange={(e) => handlePaddingInputChange(e, 'top')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
							<input
								type="number"
								name="right"
								value={DeviceType === 'Desktop' ? teamMemberContentDesktopPadding.right : DeviceType === 'Tablet' ? teamMemberContentTabPadding.right : teamMemberContentMobilePadding.right}
								onChange={(e) => handlePaddingInputChange(e, 'right')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
							<input
								type="number"
								name="bottom"
								value={DeviceType === 'Desktop' ? teamMemberContentDesktopPadding.bottom : DeviceType === 'Tablet' ? teamMemberContentTabPadding.bottom : teamMemberContentMobilePadding.bottom}
								onChange={(e) => handlePaddingInputChange(e, 'bottom')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
							<input
								type="number"
								name="left"
								value={DeviceType === 'Desktop' ? teamMemberContentDesktopPadding.left : DeviceType === 'Tablet' ? teamMemberContentTabPadding.left : teamMemberContentMobilePadding.left}
								onChange={(e) => handlePaddingInputChange(e, 'left')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label"></label>
							<span
								className={`dashicons ${teamMemberContentPaddingLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${teamMemberContentPaddingLink ? 'is-checked' : ''}`}
								onClick={handleteamMemberContentPaddingLinkToggle}
							>
                                                            </span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
