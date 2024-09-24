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


export default function TeamMemberImageBorderControl ({ attributes, setAttributes}) {

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
		teamMemberImageBackgroundColor,
		DeviceType,

	} = attributes;


	/** Start Border Width */
	const [previousBorderWidth, setPreviousBorderWidth] = useState(teamMemberImageDesktopBorderWidth);
	/** Function to update all Border Width values */
	const updateAllBorderWidth = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					teamMemberImageDesktopBorderWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					teamMemberImageTabBorderWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					teamMemberImageMobileBorderWidth: {
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
				setAttributes({ teamMemberImageDesktopBorderWidth: { ...teamMemberImageDesktopBorderWidth, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ teamMemberImageTabBorderWidth: { ...teamMemberImageTabBorderWidth, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ teamMemberImageMobileBorderWidth: { ...teamMemberImageMobileBorderWidth, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all padding values if teamMemberImageBorderLink is true */
		if (teamMemberImageBorderLink) {
			updateAllBorderWidth(value, DeviceType);
		}
	};

	/** Function to handle teamMemberImageBorderLink toggle */
	const handleBorderWidthLinkToggle = () => {
		if (!teamMemberImageBorderLink) {
			setAttributes({ teamMemberImageDesktopBorderWidth: previousBorderWidth });
		}
		/** setteamMemberImageBorderLinkLink(!teamMemberImageBorderLink) */
		setAttributes({teamMemberImageBorderLink: !teamMemberImageBorderLink})
	};

	/** Update previousborderWidth state when Border Width changes */
	useEffect(() => {
		setPreviousBorderWidth(teamMemberImageDesktopBorderWidth);
	}, [teamMemberImageDesktopBorderWidth]);

	/** Function to handle device click for Border Width */
	const handleBorderWidthDeviceClick = (device) => {
		setAttributes({ DeviceType: device });
	};

	/** Default Border Width for desktop (using teamMemberImageDesktopBorderWidth) */
	const teamMemberImageBorderWidth = `${teamMemberImageDesktopBorderWidth.top}${teamMemberImageBorderUnits} ${teamMemberImageDesktopBorderWidth.right}${teamMemberImageBorderUnits} ${teamMemberImageDesktopBorderWidth.bottom}${teamMemberImageBorderUnits} ${teamMemberImageDesktopBorderWidth.left}${teamMemberImageBorderUnits}`;
	/** End Border Width */

	/** Start Border Radius Width */
	const [previousBorderRadiusWidth, setPreviousBorderRadiusWidth] = useState(teamMemberImageDesktopBorderRadiusWidth);
	/** Function to update all Border Width values */
	const updateAllBorderRadiusWidth = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					teamMemberImageDesktopBorderRadiusWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					teamMemberImageTabBorderRadiusWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					teamMemberImageMobileBorderRadiusWidth: {
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
				setAttributes({ teamMemberImageDesktopBorderRadiusWidth: { ...teamMemberImageDesktopBorderRadiusWidth, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ teamMemberImageTabBorderRadiusWidth: { ...teamMemberImageTabBorderRadiusWidth, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ teamMemberImageMobileBorderRadiusWidth: { ...teamMemberImageMobileBorderRadiusWidth, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all padding values if teamMemberImageBorderRadiusLink is true */
		if (teamMemberImageBorderRadiusLink) {
			updateAllBorderRadiusWidth(value, DeviceType);
		}
	};

	/** Function to handle teamMemberImageBorderRadiusLink toggle */
	const handleBorderRadiusWidthLinkToggle = () => {
		if (!teamMemberImageBorderRadiusLink) {
			setAttributes({ teamMemberImageDesktopBorderRadiusWidth: previousBorderRadiusWidth });
		}
		/** setteamMemberImageBorderRadiusLinkLink(!teamMemberImageBorderRadiusLink) */
		setAttributes({teamMemberImageBorderRadiusLink: !teamMemberImageBorderRadiusLink})
	};

	/** Update previousBorderRadiusWidth state when Border Width changes */
	useEffect(() => {
		setPreviousBorderRadiusWidth(teamMemberImageDesktopBorderRadiusWidth);
	}, [teamMemberImageDesktopBorderRadiusWidth]);

	/** Function to handle device click for Border Width */
	const handleBorderRadiusWidthDeviceClick = (device) => {
		setAttributes({ DeviceType: device });
	};

	/** Default Border Width for desktop (using teamMemberImageDesktopBorderWidth) */
	const teamMemberImageBorderRadiusWidth = `${teamMemberImageDesktopBorderRadiusWidth.top}${teamMemberImageBorderRadiusUnits} ${teamMemberImageDesktopBorderRadiusWidth.right}${teamMemberImageBorderRadiusUnits} ${teamMemberImageDesktopBorderRadiusWidth.bottom}${teamMemberImageBorderRadiusUnits} ${teamMemberImageDesktopBorderRadiusWidth.left}${teamMemberImageBorderRadiusUnits}`;
	/** End Border Radius Width */



	return (
	<>



		<SelectControl
			label={__("Border Style", "frontis-blocks")}
			value={teamMemberImageBorder}
			options={BORDER_STYLES}
			onChange={(value) => setAttributes({ teamMemberImageBorder: value })}
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
									color={teamMemberImageBorderColor}
									onChange={(value) => setAttributes({ teamMemberImageBorderColor: value })}
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
									value={teamMemberImageBorderColor}
									onChange={(value) => setAttributes({ teamMemberImageBorderColor: value })}
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
									onClick={() => setAttributes({ teamMemberImageBorderUnits: item.value })}
									className={`fb-setting-units-type-switcher ${ teamMemberImageBorderUnits === item.value ? 'active' : ''}`}
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
							value={DeviceType === 'Desktop' ? teamMemberImageDesktopBorderWidth.top : DeviceType === 'Tablet' ? teamMemberImageTabBorderWidth.top : teamMemberImageMobileBorderWidth.top}
							onChange={(e) => handleBorderWidthInputChange(e, 'top')}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
						<input
							type="number"
							name="right"
							value={DeviceType === 'Desktop' ? teamMemberImageDesktopBorderWidth.right : DeviceType === 'Tablet' ? teamMemberImageTabBorderWidth.right : teamMemberImageMobileBorderWidth.right}
							onChange={(e) => handleBorderWidthInputChange(e, 'right')}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
						<input
							type="number"
							name="bottom"
							value={DeviceType === 'Desktop' ? teamMemberImageDesktopBorderWidth.bottom : DeviceType === 'Tablet' ? teamMemberImageTabBorderWidth.bottom : teamMemberImageMobileBorderWidth.bottom}
							onChange={(e) => handleBorderWidthInputChange(e, 'bottom')}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
						<input
							type="number"
							name="left"
							value={DeviceType === 'Desktop' ? teamMemberImageDesktopBorderWidth.left : DeviceType === 'Tablet' ? teamMemberImageTabBorderWidth.left : teamMemberImageMobileBorderWidth.left}
							onChange={(e) => handleBorderWidthInputChange(e, 'left')}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label"></label>
						<span
							className={`dashicons ${teamMemberImageBorderLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${teamMemberImageBorderLink ? 'is-checked' : ''}`}
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
									onClick={() => setAttributes({ teamMemberImageBorderRadiusUnits: item.value })}
									className={`fb-setting-units-type-switcher ${ teamMemberImageBorderRadiusUnits === item.value ? 'active' : ''}`}
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
							value={DeviceType === 'Desktop' ? teamMemberImageDesktopBorderRadiusWidth.top : DeviceType === 'Tablet' ? teamMemberImageTabBorderRadiusWidth.top : teamMemberImageMobileBorderRadiusWidth.top}
							onChange={(e) => handleBorderRadiusWidthInputChange(e, 'top')}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
						<input
							type="number"
							name="right"
							value={DeviceType === 'Desktop' ? teamMemberImageDesktopBorderRadiusWidth.right : DeviceType === 'Tablet' ? teamMemberImageTabBorderRadiusWidth.right : teamMemberImageMobileBorderRadiusWidth.right}
							onChange={(e) => handleBorderRadiusWidthInputChange(e, 'right')}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
						<input
							type="number"
							name="bottom"
							value={DeviceType === 'Desktop' ? teamMemberImageDesktopBorderRadiusWidth.bottom : DeviceType === 'Tablet' ? teamMemberImageTabBorderRadiusWidth.bottom : teamMemberImageMobileBorderRadiusWidth.bottom}
							onChange={(e) => handleBorderRadiusWidthInputChange(e, 'bottom')}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
						<input
							type="number"
							name="left"
							value={DeviceType === 'Desktop' ? teamMemberImageDesktopBorderRadiusWidth.left : DeviceType === 'Tablet' ? teamMemberImageTabBorderRadiusWidth.left : teamMemberImageMobileBorderRadiusWidth.left}
							onChange={(e) => handleBorderRadiusWidthInputChange(e, 'left')}
						/>
					</div>
					<div className="fb-setting-spacing-input-wrapper">
						<label className="fb-setting-spacing-input-label"></label>
						<span
							className={`dashicons ${teamMemberImageBorderRadiusLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${teamMemberImageBorderRadiusLink ? 'is-checked' : ''}`}
							onClick={handleBorderRadiusWidthLinkToggle}
						>
                                                            </span>
					</div>
				</div>
			</div>
		</div>
		<BaseControl
			label={__("Overlay Color", "frontis-blocks")}
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
									color={teamMemberImageBorderColor}
									onChange={(value) => setAttributes({ teamMemberImageBackgroundColor: value })}
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
									value={teamMemberImageBorderColor}
									onChange={(value) => setAttributes({ teamMemberImageBackgroundColor: value })}
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
