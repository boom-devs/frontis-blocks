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

export default function TeamMemberImageMarginControl ({ attributes, setAttributes}) {

	const {
		blockID,
		teamMemberImageMediaUrl,
		teamMemberImagePaddingUnits,
		desktopteamMemberImagePadding,
		teamMemberImageDesktopPadding,
		teamMemberImageTabPadding,
		teamMemberImageMobilePadding,
		teamMemberImagePaddingLink,

		teamMemberImageMarginUnits,
		desktopteamMemberImageMargin,
		teamMemberImageDesktopMargin,
		teamMemberImageTabMargin,
		teamMemberImageMobileMargin,
		teamMemberImageMarginLink,

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


	/** Start Margin */
	const [previousMargin, setPreviousMargin] = useState(teamMemberImageDesktopMargin);
	/** Function to update all margin values */
	const updateAllMargin = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					teamMemberImageDesktopMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					teamMemberImageTabMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					teamMemberImageMobileMargin: {
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
				setAttributes({ teamMemberImageDesktopMargin: { ...teamMemberImageDesktopMargin, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ teamMemberImageTabMargin: { ...teamMemberImageTabMargin, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ teamMemberImageMobileMargin: { ...teamMemberImageMobileMargin, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all margin values if marginLink is true */
		if (teamMemberImageMarginLink) {
			updateAllMargin(value, DeviceType);
		}
	};

	/** Function to handle marginLink toggle */
	const handleMarginLinkToggle = () => {
		if (!teamMemberImageMarginLink) {
			setAttributes({ teamMemberImageDesktopMargin: previousMargin });
		}
		/** setmarginLink(!marginLink) */
		setAttributes({teamMemberImageMarginLink: !teamMemberImageMarginLink})
	};

	/** Update previousMargin state when margin changes */
	useEffect(() => {
		setPreviousMargin(teamMemberImageDesktopMargin);
	}, [teamMemberImageDesktopMargin]);

	/** Function to handle device click for margin */
	const handleMarginDeviceClick = (device) => {
		setAttributes({ DeviceType: device });
	};

	/** Default margin for desktop (using desktop_margin) */
	const teamMemberImageMargin = `${teamMemberImageDesktopMargin.top}${teamMemberImageMarginUnits} ${teamMemberImageDesktopMargin.right}${teamMemberImageMarginUnits} ${teamMemberImageDesktopMargin.bottom}${teamMemberImageMarginUnits} ${teamMemberImageDesktopMargin.left}${teamMemberImageMarginUnits}`;
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
										onClick={() => setAttributes({ teamMemberImageMarginUnits: item.value })}
										className={`fb-setting-units-type-switcher ${ teamMemberImageMarginUnits === item.value ? 'active' : ''}`}
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
								value={DeviceType === 'Desktop' ? teamMemberImageDesktopMargin.top : DeviceType === 'Tablet' ? teamMemberImageTabMargin.top : teamMemberImageMobileMargin.top}
								onChange={(e) => handleMarginInputChange(e, 'top')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
							<input
								type="number"
								name="right"
								value={DeviceType === 'Desktop' ? teamMemberImageDesktopMargin.right : DeviceType === 'Tablet' ? teamMemberImageTabMargin.right : teamMemberImageMobileMargin.right}
								onChange={(e) => handleMarginInputChange(e, 'right')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
							<input
								type="number"
								name="bottom"
								value={DeviceType === 'Desktop' ? teamMemberImageDesktopMargin.bottom : DeviceType === 'Tablet' ? teamMemberImageTabMargin.bottom : teamMemberImageMobileMargin.bottom}
								onChange={(e) => handleMarginInputChange(e, 'bottom')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
							<input
								type="number"
								name="left"
								value={DeviceType === 'Desktop' ? teamMemberImageDesktopMargin.left : DeviceType === 'Tablet' ? teamMemberImageTabMargin.left : teamMemberImageMobileMargin.left}
								onChange={(e) => handleMarginInputChange(e, 'left')}
							/>
						</div>
						<div className="fb-setting-spacing-input-wrapper">
							<label className="fb-setting-spacing-input-label"></label>
							<span
								className={`dashicons ${teamMemberImageMarginLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${teamMemberImageMarginLink ? 'is-checked' : ''}`}
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
