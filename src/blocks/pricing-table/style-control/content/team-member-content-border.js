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

export default function TeamMemberContentBorderControl ({ attributes, setAttributes}) {

	const {
		teamMemberContentBorder,
		teamMemberContentBorderColor,
		teamMemberContentBorderUnits,
		teamMemberContentDesktopBorderWidth,
		teamMemberContentTabBorderWidth,
		teamMemberContentMobileBorderWidth,
		teamMemberContentActiveBorderDevice,
		teamMemberContentBorderLink,
		teamMemberContentBorderRadiusUnits,
		teamMemberContentDesktopBorderRadiusWidth,
		teamMemberContentTabBorderRadiusWidth,
		teamMemberContentMobileBorderRadiusWidth,
		teamMemberContentActiveBorderRadiusDevice,
		teamMemberContentBorderRadiusLink,
		teamMemberContentBackgroundColor,
		DeviceType,


	} = attributes;


	/** Start Border Width */
	const [previousBorderWidth, setPreviousBorderWidth] = useState(teamMemberContentDesktopBorderWidth);
	/** Function to update all Border Width values */
	const updateAllBorderWidth = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					teamMemberContentDesktopBorderWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					teamMemberContentTabBorderWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					teamMemberContentMobileBorderWidth: {
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
	const handleBorderWidthInputChange = (e, direction) => {
		const value = e.target.value;
		switch(DeviceType) {
			case 'Desktop':
				setAttributes({ teamMemberContentDesktopBorderWidth: { ...teamMemberContentDesktopBorderWidth, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ teamMemberContentTabBorderWidth: { ...teamMemberContentTabBorderWidth, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ teamMemberContentMobileBorderWidth: { ...teamMemberContentMobileBorderWidth, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all padding values if teamMemberContentBorderLink is true */
		if (teamMemberContentBorderLink) {
			updateAllBorderWidth(value, DeviceType);
		}
	};

	/** Function to handle teamMemberContentBorderLink toggle */
	const handleBorderWidthLinkToggle = () => {
		if (!teamMemberContentBorderLink) {
			setAttributes({ teamMemberContentDesktopBorderWidth: previousBorderWidth });
		}
		/** setteamMemberContentBorderLinkLink(!teamMemberContentBorderLink) */
		setAttributes({teamMemberContentBorderLink: !teamMemberContentBorderLink})
	};

	/** Update previousborderWidth state when Border Width changes */
	useEffect(() => {
		setPreviousBorderWidth(teamMemberContentDesktopBorderWidth);
	}, [teamMemberContentDesktopBorderWidth]);

	/** Function to handle device click for Border Width */
	const handleBorderWidthDeviceClick = (device) => {
		setAttributes({ DeviceType: device });
	};

	/** Default Border Width for desktop (using teamMemberContentDesktopBorderWidth) */
	const teamMemberContentBorderWidth = `${teamMemberContentDesktopBorderWidth.top}${teamMemberContentBorderUnits} ${teamMemberContentDesktopBorderWidth.right}${teamMemberContentBorderUnits} ${teamMemberContentDesktopBorderWidth.bottom}${teamMemberContentBorderUnits} ${teamMemberContentDesktopBorderWidth.left}${teamMemberContentBorderUnits}`;
	/** End Border Width */

	/** Start Border Radius Width */
	const [previousBorderRadiusWidth, setPreviousBorderRadiusWidth] = useState(teamMemberContentDesktopBorderRadiusWidth);
	/** Function to update all Border Width values */
	const updateAllBorderRadiusWidth = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					teamMemberContentDesktopBorderRadiusWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					teamMemberContentTabBorderRadiusWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					teamMemberContentMobileBorderRadiusWidth: {
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
	const handleBorderRadiusWidthInputChange = (e, direction) => {
		const value = e.target.value;
		switch(DeviceType) {
			case 'Desktop':
				setAttributes({ teamMemberContentDesktopBorderRadiusWidth: { ...teamMemberContentDesktopBorderRadiusWidth, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ teamMemberContentTabBorderRadiusWidth: { ...teamMemberContentTabBorderRadiusWidth, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ teamMemberContentMobileBorderRadiusWidth: { ...teamMemberContentMobileBorderRadiusWidth, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all padding values if teamMemberContentBorderRadiusLink is true */
		if (teamMemberContentBorderRadiusLink) {
			updateAllBorderRadiusWidth(value, DeviceType);
		}
	};

	/** Function to handle teamMemberContentBorderRadiusLink toggle */
	const handleBorderRadiusWidthLinkToggle = () => {
		if (!teamMemberContentBorderRadiusLink) {
			setAttributes({ teamMemberContentDesktopBorderRadiusWidth: previousBorderRadiusWidth });
		}
		/** setteamMemberContentBorderRadiusLinkLink(!teamMemberContentBorderRadiusLink) */
		setAttributes({teamMemberContentBorderRadiusLink: !teamMemberContentBorderRadiusLink})
	};

	/** Update previousBorderRadiusWidth state when Border Width changes */
	useEffect(() => {
		setPreviousBorderRadiusWidth(teamMemberContentDesktopBorderRadiusWidth);
	}, [teamMemberContentDesktopBorderRadiusWidth]);

	/** Function to handle device click for Border Width */
	const handleBorderRadiusWidthDeviceClick = (device) => {
		setAttributes({ DeviceType: device });
	};

	/** Default Border Width for desktop (using teamMemberContentDesktopBorderWidth) */
	const teamMemberContentBorderRadiusWidth = `${teamMemberContentDesktopBorderRadiusWidth.top}${teamMemberContentBorderRadiusUnits} ${teamMemberContentDesktopBorderRadiusWidth.right}${teamMemberContentBorderRadiusUnits} ${teamMemberContentDesktopBorderRadiusWidth.bottom}${teamMemberContentBorderRadiusUnits} ${teamMemberContentDesktopBorderRadiusWidth.left}${teamMemberContentBorderRadiusUnits}`;
	/** End Border Radius Width */



	return (
	<>
		<SelectControl
			label={__("Border Style", "frontis-blocks")}
			value={teamMemberContentBorder}
			options={BORDER_STYLES}
			onChange={(value) => setAttributes({ teamMemberContentBorder: value })}
		/>
		<BaseControl
			label={__("Border Color", "frontis-blocks")}
			className="fb-setting-color-setting-wrapper"
		>
			<Dropdown
				className="fb-setting-color-setting-icon-dropdown"
				contentClassName="fb-setting-color-setting-icon-dropdown-content"
				popoverProps={{ placement: 'bottom-start' }}
				renderToggle={({ isOpen, onToggle }) => (
					<Button
						variant="primary"
						onClick={onToggle}
						aria-expanded={isOpen}
						aria-label={__("Toggle Typography Settings", "frontis-blocks")}
						className="fb-setting-color-setting-icon-btn"
					>
						<Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
					</Button>
				)}
				renderContent={() => (
					<div className="fb-setting-color-setting-icon-popup">
						<BaseControl className="fb-setting-color-setting-icon-popup-inner">
							<div className="fb-setting-normal-color">
								<ColorPicker
									color={teamMemberContentBorderColor}
									onChange={(value) => setAttributes({ teamMemberContentBorderColor: value })}
									enableAlpha={true}
								/>
								<div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
								<ColorPalette
									colors={[
										{ color: '#F72585' },
										{ color: '#7209B7' },
										{ color: '#3A0CA3' },
										{ color: '#4361EE' },
										{ color: '#4CC9F0' },
									]}
									disableCustomColors={true}
									value={teamMemberContentBorderColor}
									onChange={(value) => setAttributes({ teamMemberContentBorderColor: value })}
								/>
							</div>
						</BaseControl>
					</div>
				)}
			/>
		</BaseControl>
		<div className="fb-setting-spacing-container">
			<div className="fb-setting-spacing-inner-container">
				{/* Border Width */}
				<div className="fb-setting-spacing-label-container">
					<ResponsiveControl labelText={__('Border', 'frontis-block')} device={DeviceType} deviceHandler={handleBorderWidthDeviceClick}/>
					<div className="fb-setting-units-type">
						<ButtonGroup className="fb-setting-units-type-wrap">
							{UNIT_TYPES.map((item, key) => (
								<Button
									key={key}
									onClick={() => setAttributes({ teamMemberContentBorderUnits: item.value })}
									className={`fb-setting-units-type-switcher ${ teamMemberContentBorderUnits === item.value ? 'active' : ''}`}
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
							value={DeviceType === 'Desktop' ? teamMemberContentDesktopBorderWidth.top : DeviceType === 'Tablet' ? teamMemberContentTabBorderWidth.top : teamMemberContentMobileBorderWidth.top}
							onChange={(e) => handleBorderWidthInputChange(e, 'top')}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
						<input
							type="number"
							name="right"
							value={DeviceType === 'Desktop' ? teamMemberContentDesktopBorderWidth.right : DeviceType === 'Tablet' ? teamMemberContentTabBorderWidth.right : teamMemberContentMobileBorderWidth.right}
							onChange={(e) => handleBorderWidthInputChange(e, 'right')}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
						<input
							type="number"
							name="bottom"
							value={DeviceType === 'Desktop' ? teamMemberContentDesktopBorderWidth.bottom : DeviceType === 'Tablet' ? teamMemberContentTabBorderWidth.bottom : teamMemberContentMobileBorderWidth.bottom}
							onChange={(e) => handleBorderWidthInputChange(e, 'bottom')}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
						<input
							type="number"
							name="left"
							value={DeviceType === 'Desktop' ? teamMemberContentDesktopBorderWidth.left : DeviceType === 'Tablet' ? teamMemberContentTabBorderWidth.left : teamMemberContentMobileBorderWidth.left}
							onChange={(e) => handleBorderWidthInputChange(e, 'left')}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label"></label>
						<span
							className={`dashicons ${teamMemberContentBorderLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${teamMemberContentBorderLink ? 'is-checked' : ''}`}
							onClick={handleBorderWidthLinkToggle}
						>
                                                            </span>
					</div>
				</div>
			</div>
		</div>
		<div className="fb-setting-spacing-container">
			<div className="fb-setting-spacing-inner-container">
				{/* Border radius Width */}
				<div className="fb-setting-spacing-label-container">
					<ResponsiveControl labelText={__('Border Radius', 'frontis-block')} device={DeviceType} deviceHandler={handleBorderRadiusWidthDeviceClick}/>
					<div className="fb-setting-units-type">
						<ButtonGroup className="fb-setting-units-type-wrap">
							{UNIT_TYPES.map((item, key) => (
								<Button
									key={key}
									onClick={() => setAttributes({ teamMemberContentBorderRadiusUnits: item.value })}
									className={`fb-setting-units-type-switcher ${ teamMemberContentBorderRadiusUnits === item.value ? 'active' : ''}`}
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
							value={DeviceType === 'Desktop' ? teamMemberContentDesktopBorderRadiusWidth.top : DeviceType === 'Tablet' ? teamMemberContentTabBorderRadiusWidth.top : teamMemberContentMobileBorderRadiusWidth.top}
							onChange={(e) => handleBorderRadiusWidthInputChange(e, 'top')}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
						<input
							type="number"
							name="right"
							value={DeviceType === 'Desktop' ? teamMemberContentDesktopBorderRadiusWidth.right : DeviceType === 'Tablet' ? teamMemberContentTabBorderRadiusWidth.right : teamMemberContentMobileBorderRadiusWidth.right}
							onChange={(e) => handleBorderRadiusWidthInputChange(e, 'right')}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
						<input
							type="number"
							name="bottom"
							value={DeviceType === 'Desktop' ? teamMemberContentDesktopBorderRadiusWidth.bottom : DeviceType === 'Tablet' ? teamMemberContentTabBorderRadiusWidth.bottom : teamMemberContentMobileBorderRadiusWidth.bottom}
							onChange={(e) => handleBorderRadiusWidthInputChange(e, 'bottom')}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
						<input
							type="number"
							name="left"
							value={DeviceType === 'Desktop' ? teamMemberContentDesktopBorderRadiusWidth.left : DeviceType === 'Tablet' ? teamMemberContentTabBorderRadiusWidth.left : teamMemberContentMobileBorderRadiusWidth.left}
							onChange={(e) => handleBorderRadiusWidthInputChange(e, 'left')}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label"></label>
						<span
							className={`dashicons ${teamMemberContentBorderRadiusLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${teamMemberContentBorderRadiusLink ? 'is-checked' : ''}`}
							onClick={handleBorderRadiusWidthLinkToggle}
						>
                                                            </span>
					</div>
				</div>
			</div>
		</div>
		<BaseControl
			label={__("Background Color", "frontis-blocks")}
			className="fb-setting-color-setting-wrapper"
		>
			<Dropdown
				className="fb-setting-color-setting-icon-dropdown"
				contentClassName="fb-setting-color-setting-icon-dropdown-content"
				popoverProps={{ placement: 'bottom-start' }}
				renderToggle={({ isOpen, onToggle }) => (
					<Button
						variant="primary"
						onClick={onToggle}
						aria-expanded={isOpen}
						aria-label={__("Toggle Typography Settings", "frontis-blocks")}
						className="fb-setting-color-setting-icon-btn"
					>
						<Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
					</Button>
				)}
				renderContent={() => (
					<div className="fb-setting-color-setting-icon-popup">
						<BaseControl className="fb-setting-color-setting-icon-popup-inner">
							<div className="fb-setting-normal-color">
								<ColorPicker
									color={teamMemberContentBorderColor}
									onChange={(value) => setAttributes({ teamMemberContentBackgroundColor: value })}
									enableAlpha={true}
								/>
								<div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
								<ColorPalette
									colors={[
										{ color: '#F72585' },
										{ color: '#7209B7' },
										{ color: '#3A0CA3' },
										{ color: '#4361EE' },
										{ color: '#4CC9F0' },
									]}
									disableCustomColors={true}
									value={teamMemberContentBorderColor}
									onChange={(value) => setAttributes({ teamMemberContentBackgroundColor: value })}
								/>
							</div>
						</BaseControl>
					</div>
				)}
			/>
		</BaseControl>
	</>
	);
};
