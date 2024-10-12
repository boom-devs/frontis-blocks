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

export default function TeamMemberImagePaddingControl ({ attributes, setAttributes}) {

	const {
		blockID,
		teamMemberImageMediaUrl,
		teamMemberImagePaddingUnits,
		desktopteamMemberImagePadding,
		teamMemberImageDesktopPadding,
		teamMemberImageTabPadding,
		teamMemberImageMobilePadding,
		teamMemberImagePaddingLink,
		teamMemberImageBorder,
		teamMemberImageBorderColor,
		teamMemberImageBorderUnits,
		teamMemberImageDesktopBorderWidth,
		teamMemberImageTabBorderWidth,
		teamMemberImageMobileBorderWidth,
		teamMemberImageActiveBorderDevice,
		teamMemberImageBorderLink,
		teamMemberImageBorderRadiusUnits,
		teamMemberImageDesktopBorderRadiusWidth,
		teamMemberImageTabBorderRadiusWidth,
		teamMemberImageMobileBorderRadiusWidth,
		teamMemberImageActiveBorderRadiusDevice,
		teamMemberImageBorderRadiusLink,
		DeviceType,

		BoxBorder,
		BoxBorderColor,
		BoxBorderUnits,
		BoxDesktopBorderWidth,
		BoxTabBorderWidth,
		BoxMobileBorderWidth,
		BoxBorderLink,
		BoxBorderRadiusUnits,
		BoxDesktopBorderRadiusWidth,
		BoxTabBorderRadiusWidth,
		BoxMobileBorderRadiusWidth,
		BoxBorderRadiusLink,


		teamMemberName,
		teamMemberNameteamMemberImageTag,
		teamMemberNameFontFamily,
		teamMemberNameFontSize,
		teamMemberNameFontSizeUnits,
		teamMemberNameFontWeight,
		teamMemberNameFontStyle,
		teamMemberNameTextTransform,
		teamMemberNameTextDecoration,
		teamMemberNameLetterSpacing,
		teamMemberNameLetterSpacingUnits,
		teamMemberNameLineHeight,
		teamMemberNameLineHeightUnits,
		teamMemberNameColor,

		teamMemberDesignation,
		teamMemberDesignationteamMemberImageTag,
		teamMemberDesignationFontFamily,
		teamMemberDesignationFontSize,
		teamMemberDesignationFontSizeUnits,
		teamMemberDesignationFontWeight,
		teamMemberDesignationFontStyle,
		teamMemberDesignationTextTransform,
		teamMemberDesignationTextDecoration,
		teamMemberDesignationLetterSpacing,
		teamMemberDesignationLetterSpacingUnits,
		teamMemberDesignationLineHeight,
		teamMemberDesignationLineHeightUnits,
		teamMemberDesignationColor,

		teamMemberContent,
		teamMemberContentteamMemberImageTag,
		teamMemberContentFontFamily,
		teamMemberContentFontSize,
		teamMemberContentFontSizeUnits,
		teamMemberContentFontWeight,
		teamMemberContentFontStyle,
		teamMemberContentTextTransform,
		teamMemberContentTextDecoration,
		teamMemberContentLetterSpacing,
		teamMemberContentLetterSpacingUnits,
		teamMemberContentLineHeight,
		teamMemberContentLineHeightUnits,
		teamMemberContentColor

	} = attributes;

	/** Start Padding */
	const [previousPadding, setPreviousPadding] = useState(teamMemberImageDesktopPadding);
	/** Function to update all padding values */
	const updateAllPadding = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					teamMemberImageDesktopPadding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					teamMemberImageTabPadding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					teamMemberImageMobilePadding: {
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
				setAttributes({ teamMemberImageDesktopPadding: { ...teamMemberImageDesktopPadding, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ teamMemberImageTabPadding: { ...teamMemberImageTabPadding, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ teamMemberImageMobilePadding: { ...teamMemberImageMobilePadding, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all padding values if teamMemberImagePaddingLink is true */
		if (teamMemberImagePaddingLink) {
			updateAllPadding(value, DeviceType);
		}
	};

	/** Function to handle teamMemberImagePaddingLink toggle */
	const handleteamMemberImagePaddingLinkToggle = () => {
		if (!teamMemberImagePaddingLink) {
			setAttributes({ teamMemberImageDesktopPadding: previousPadding });
		}
		/** setteamMemberImagePaddingLink(!teamMemberImagePaddingLink) */
		setAttributes({teamMemberImagePaddingLink: !teamMemberImagePaddingLink})
	};

	/** Update previousPadding state when padding changes */
	useEffect(() => {
		setPreviousPadding(teamMemberImageDesktopPadding);
	}, [teamMemberImageDesktopPadding]);

	/** Function to handle device click for padding */
	const handlePaddingDeviceClick = (device) => {
		setAttributes({ DeviceType: device });
	};

	/** Default padding for desktop (using desktop_padding) */
	const teamMembberImagePadding = `${teamMemberImageDesktopPadding.top}${teamMemberImagePaddingUnits} ${teamMemberImageDesktopPadding.right}${teamMemberImagePaddingUnits} ${teamMemberImageDesktopPadding.bottom}${teamMemberImagePaddingUnits} ${teamMemberImageDesktopPadding.left}${teamMemberImagePaddingUnits}`;
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
										onClick={() => setAttributes({ teamMemberImagePaddingUnits: item.value })}
										className={`fb-setting-units-type-switcher ${ teamMemberImagePaddingUnits === item.value ? 'active' : ''}`}
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
								value={DeviceType === 'Desktop' ? teamMemberImageDesktopPadding.top : DeviceType === 'Tablet' ? teamMemberImageTabPadding.top : teamMemberImageMobilePadding.top}
								onChange={(e) => handlePaddingInputChange(e, 'top')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
							<input
								type="number"
								name="right"
								value={DeviceType === 'Desktop' ? teamMemberImageDesktopPadding.right : DeviceType === 'Tablet' ? teamMemberImageTabPadding.right : teamMemberImageMobilePadding.right}
								onChange={(e) => handlePaddingInputChange(e, 'right')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
							<input
								type="number"
								name="bottom"
								value={DeviceType === 'Desktop' ? teamMemberImageDesktopPadding.bottom : DeviceType === 'Tablet' ? teamMemberImageTabPadding.bottom : teamMemberImageMobilePadding.bottom}
								onChange={(e) => handlePaddingInputChange(e, 'bottom')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
							<input
								type="number"
								name="left"
								value={DeviceType === 'Desktop' ? teamMemberImageDesktopPadding.left : DeviceType === 'Tablet' ? teamMemberImageTabPadding.left : teamMemberImageMobilePadding.left}
								onChange={(e) => handlePaddingInputChange(e, 'left')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label"></label>
							<span
								className={`dashicons ${teamMemberImagePaddingLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${teamMemberImagePaddingLink ? 'is-checked' : ''}`}
								onClick={handleteamMemberImagePaddingLinkToggle}
							>
                                                            </span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
