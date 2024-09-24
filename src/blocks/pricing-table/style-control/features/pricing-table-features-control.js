import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';


import {
	NORMAL_HOVER,
	UNIT_TYPES,
	TEXT_ALIGN,
	HEADING,
	FONT_FAMILYS,
	BORDER_STYLES,
} from "../../constants/constants";



import {
	SelectControl,
	PanelBody,
	TabPanel,
	BaseControl,
	Button,
	ButtonGroup,
	ToggleControl,
	TextareaControl,
	Dropdown,
	Dashicon,
	RangeControl,
	ColorPicker,
	ColorPalette,
} from '@wordpress/components';

import ResponsiveControl from "../../../../components/responsivecontrol";



export default function PricingTableFeaturesControl ({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		DeviceType,
		FeatureItems,
		FeatureTag,
		FeatureAlignment,
		FeatureIconAlignment,

		FeatureListGapDesktop,
		FeatureListGapTablet,
		FeatureListGapMobile,
		FeatureListGapUnits,

		FeatureIconColorSwitcher,
		FeatureIconColor,
		FeatureIconHoverColor,

		FeatureIconBgColorSwitcher,
		FeatureIconBgColor,
		FeatureIconBgHoverColor,

		FeatureIconSizeDesktop,
		FeatureIconSizeTablet,
		FeatureIconSizeMobile,
		FeatureIconSizeUnits,

		FeatureIconBgSizeDesktop,
		FeatureIconBgSizeTablet,
		FeatureIconBgSizeMobile,
		FeatureIconBgSizeUnits,

		FeatureIconSpacingDesktop,
		FeatureIconSpacingTablet,
		FeatureIconSpacingMobile,
		FeatureIconSpacingUnits,



		FeatureTitleFontFamily,
		FeatureTitleFontSizeDesktop,
		FeatureTitleFontSizeTablet,
		FeatureTitleFontSizeMobile,
		FeatureTitleFontSizeUnits,
		FeatureTitleFontWeight,
		FeatureTitleFontStyle,
		FeatureTitleTextTransform,
		FeatureTitleTextDecoration,
		FeatureTitleLetterSpacingDesktop,
		FeatureTitleLetterSpacingTablet,
		FeatureTitleLetterSpacingMobile,
		FeatureTitleLetterSpacingUnits,
		FeatureTitleLineHeightDesktop,
		FeatureTitleLineHeightTablet,
		FeatureTitleLineHeightMobile,
		FeatureTitleLineHeightUnits,

		FeatureTitleColorSwitcher,
		FeatureTitleColor,
		FeatureTitleHoverColor,


		FeatureDescFontFamily,
		FeatureDescFontSizeDesktop,
		FeatureDescFontSizeTablet,
		FeatureDescFontSizeMobile,
		FeatureDescFontSizeUnits,
		FeatureDescFontWeight,
		FeatureDescFontStyle,
		FeatureDescTextTransform,
		FeatureDescTextDecoration,
		FeatureDescLetterSpacingDesktop,
		FeatureDescLetterSpacingTablet,
		FeatureDescLetterSpacingMobile,
		FeatureDescLetterSpacingUnits,
		FeatureDescLineHeightDesktop,
		FeatureDescLineHeightTablet,
		FeatureDescLineHeightMobile,
		FeatureDescLineHeightUnits,

		FeatureDescColorSwitcher,
		FeatureDescColor,
		FeatureDescHoverColor,


		FeatureZIndex,
		FeaturePaddingUnits,
		FeatureDesktopPadding,
		FeatureTabPadding,
		FeatureMobilePadding,
		FeaturePaddingLink,
		FeatureMarginUnits,
		FeatureDesktopMargin,
		FeatureTabMargin,
		FeatureMobileMargin,
		FeatureMarginLink,

		FeatureBgColorSwitcher,
		FeatureBgColor,
		FeatureBgHoverColor,

		FeatureBorder,
		FeatureBorderColor,
		FeatureBorderHoverColor,
		FeatureBorderColorSwitcher,
		FeatureBorderUnits,
		FeatureDesktopBorderWidth,
		FeatureTabBorderWidth,
		FeatureMobileBorderWidth,
		FeatureBorderLink,
		FeatureBorderRadiusUnits,
		FeatureDesktopBorderRadiusWidth,
		FeatureTabBorderRadiusWidth,
		FeatureMobileBorderRadiusWidth,
		FeatureBorderRadiusLink,

		FeatureDesktopSwitcher,
		FeatureTabletSwitcher,
		FeatureMobileSwitcher,

	} = attributes;


	/** Start Padding */
	const [previousPadding, setPreviousPadding] = useState(FeatureDesktopPadding);
	/** Function to update all padding values */
	const updateAllPadding = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					FeatureDesktopPadding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					FeatureTabPadding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					FeatureMobilePadding: {
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
				setAttributes({ FeatureDesktopPadding: { ...FeatureDesktopPadding, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ FeatureTabPadding: { ...FeatureTabPadding, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ FeatureMobilePadding: { ...FeatureMobilePadding, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all padding values if FeaturePaddingLink is true */
		if (FeaturePaddingLink) {
			updateAllPadding(value, DeviceType);
		}
	};

	/** Function to handle FeaturePaddingLink toggle */
	const handleFeaturePaddingLinkToggle = () => {
		if (!FeaturePaddingLink) {
			setAttributes({ FeatureDesktopPadding: previousPadding });
		}
		/** setFeaturePaddingLink(!FeaturePaddingLink) */
		setAttributes({FeaturePaddingLink: !FeaturePaddingLink})
	};

	/** Update previousPadding state when padding changes */
	useEffect(() => {
		setPreviousPadding(FeatureDesktopPadding);
	}, [FeatureDesktopPadding]);

	/** Default padding for desktop (using desktop_padding) */
	const DesktopPadding    = `${FeatureDesktopPadding.top}${FeaturePaddingUnits} ${FeatureDesktopPadding.right}${FeaturePaddingUnits} ${FeatureDesktopPadding.bottom}${FeaturePaddingUnits} ${FeatureDesktopPadding.left}${FeaturePaddingUnits}`;
	const TabPadding        = `${FeatureTabPadding.top}${FeaturePaddingUnits} ${FeatureTabPadding.right}${FeaturePaddingUnits} ${FeatureTabPadding.bottom}${FeaturePaddingUnits} ${FeatureTabPadding.left}${FeaturePaddingUnits}`;
	const MobilePadding     = `${FeatureMobilePadding.top}${FeaturePaddingUnits} ${FeatureMobilePadding.right}${FeaturePaddingUnits} ${FeatureMobilePadding.bottom}${FeaturePaddingUnits} ${FeatureMobilePadding.left}${FeaturePaddingUnits}`;
	/** End Padding */

	/** Start Margin */
	const [previousMargin, setPreviousMargin] = useState(FeatureDesktopMargin);
	/** Function to update all margin values */
	const updateAllMargin = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					FeatureDesktopMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					FeatureTabMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					FeatureMobileMargin: {
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
				setAttributes({ FeatureDesktopMargin: { ...FeatureDesktopMargin, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ FeatureTabMargin: { ...FeatureTabMargin, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ FeatureMobileMargin: { ...FeatureMobileMargin, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all margin values if marginLink is true */
		if (FeatureMarginLink) {
			updateAllMargin(value, DeviceType);
		}
	};

	/** Function to handle marginLink toggle */
	const handleMarginLinkToggle = () => {
		if (!FeatureMarginLink) {
			setAttributes({ FeatureDesktopMargin: previousMargin });
		}
		/** setmarginLink(!marginLink) */
		setAttributes({FeatureMarginLink: !FeatureMarginLink})
	};

	/** Update previousMargin state when margin changes */
	useEffect(() => {
		setPreviousMargin(FeatureDesktopMargin);
	}, [FeatureDesktopMargin]);

	/** Default margin for desktop (using desktop_margin) */
	const DesktopMargin     = `${FeatureDesktopMargin.top}${FeatureMarginUnits} ${FeatureDesktopMargin.right}${FeatureMarginUnits} ${FeatureDesktopMargin.bottom}${FeatureMarginUnits} ${FeatureDesktopMargin.left}${FeatureMarginUnits}`;
	const TabMargin         = `${FeatureTabMargin.top}${FeatureMarginUnits} ${FeatureTabMargin.right}${FeatureMarginUnits} ${FeatureTabMargin.bottom}${FeatureMarginUnits} ${FeatureTabMargin.left}${FeatureMarginUnits}`;
	const MobileMargin      = `${FeatureMobileMargin.top}${FeatureMarginUnits} ${FeatureMobileMargin.right}${FeatureMarginUnits} ${FeatureMobileMargin.bottom}${FeatureMarginUnits} ${FeatureMobileMargin.left}${FeatureMarginUnits}`;
	/** End Margin */


	/** Start Border Width */
	const [previousBorderWidth, setPreviousBorderWidth] = useState(FeatureDesktopBorderWidth);
	/** Function to update all Border Width values */
	const updateAllBorderWidth = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					FeatureDesktopBorderWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					FeatureTabBorderWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					FeatureMobileBorderWidth: {
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
				setAttributes({ FeatureDesktopBorderWidth: { ...FeatureDesktopBorderWidth, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ FeatureTabBorderWidth: { ...FeatureTabBorderWidth, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ FeatureMobileBorderWidth: { ...FeatureMobileBorderWidth, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all padding values if FeatureBorderLink is true */
		if (FeatureBorderLink) {
			updateAllBorderWidth(value, DeviceType);
		}
	};

	/** Function to handle FeatureBorderLink toggle */
	const handleBorderWidthLinkToggle = () => {
		if (!FeatureBorderLink) {
			setAttributes({ FeatureDesktopBorderWidth: previousBorderWidth });
		}
		/** setFeatureBorderLinkLink(!FeatureBorderLink) */
		setAttributes({FeatureBorderLink: !FeatureBorderLink})
	};

	/** Update previousborderWidth state when Border Width changes */
	useEffect(() => {
		setPreviousBorderWidth(FeatureDesktopBorderWidth);
	}, [FeatureDesktopBorderWidth]);

	/** Default Border Width for desktop (using FeatureDesktopBorderWidth) */
	const DesktopBorderWidth    = `${FeatureDesktopBorderWidth.top}${FeatureBorderUnits} ${FeatureDesktopBorderWidth.right}${FeatureBorderUnits} ${FeatureDesktopBorderWidth.bottom}${FeatureBorderUnits} ${FeatureDesktopBorderWidth.left}${FeatureBorderUnits}`;
	const TabBorderWidth        = `${FeatureTabBorderWidth.top}${FeatureBorderUnits} ${FeatureTabBorderWidth.right}${FeatureBorderUnits} ${FeatureTabBorderWidth.bottom}${FeatureBorderUnits} ${FeatureTabBorderWidth.left}${FeatureBorderUnits}`;
	const MobileBorderWidth     = `${FeatureMobileBorderWidth.top}${FeatureBorderUnits} ${FeatureMobileBorderWidth.right}${FeatureBorderUnits} ${FeatureMobileBorderWidth.bottom}${FeatureBorderUnits} ${FeatureMobileBorderWidth.left}${FeatureBorderUnits}`;
	/** End Border Width */

	/** Start Border Radius Width */
	const [previousBorderRadiusWidth, setPreviousBorderRadiusWidth] = useState(FeatureDesktopBorderRadiusWidth);
	/** Function to update all Border Width values */
	const updateAllBorderRadiusWidth = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					FeatureDesktopBorderRadiusWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					FeatureTabBorderRadiusWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					FeatureMobileBorderRadiusWidth: {
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
				setAttributes({ FeatureDesktopBorderRadiusWidth: { ...FeatureDesktopBorderRadiusWidth, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ FeatureTabBorderRadiusWidth: { ...FeatureTabBorderRadiusWidth, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ FeatureMobileBorderRadiusWidth: { ...FeatureMobileBorderRadiusWidth, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all padding values if FeatureBorderRadiusLink is true */
		if (FeatureBorderRadiusLink) {
			updateAllBorderRadiusWidth(value, DeviceType);
		}
	};

	/** Function to handle FeatureBorderRadiusLink toggle */
	const handleBorderRadiusWidthLinkToggle = () => {
		if (!FeatureBorderRadiusLink) {
			setAttributes({ FeatureDesktopBorderRadiusWidth: previousBorderRadiusWidth });
		}
		/** setFeatureBorderRadiusLinkLink(!FeatureBorderRadiusLink) */
		setAttributes({FeatureBorderRadiusLink: !FeatureBorderRadiusLink})
	};

	/** Update previousBorderRadiusWidth state when Border Width changes */
	useEffect(() => {
		setPreviousBorderRadiusWidth(FeatureDesktopBorderRadiusWidth);
	}, [FeatureDesktopBorderRadiusWidth]);

	/** Default Border Width for desktop (using FeatureDesktopBorderWidth) */
	const DesktopBorderRadiusWidth = `${FeatureDesktopBorderRadiusWidth.top}${FeatureBorderRadiusUnits} ${FeatureDesktopBorderRadiusWidth.right}${FeatureBorderRadiusUnits} ${FeatureDesktopBorderRadiusWidth.bottom}${FeatureBorderRadiusUnits} ${FeatureDesktopBorderRadiusWidth.left}${FeatureBorderRadiusUnits}`;
	const TabBorderRadiusWidth = `${FeatureTabBorderRadiusWidth.top}${FeatureBorderRadiusUnits} ${FeatureTabBorderRadiusWidth.right}${FeatureBorderRadiusUnits} ${FeatureTabBorderRadiusWidth.bottom}${FeatureBorderRadiusUnits} ${FeatureTabBorderRadiusWidth.left}${FeatureBorderRadiusUnits}`;
	const MobileBorderRadiusWidth = `${FeatureMobileBorderRadiusWidth.top}${FeatureBorderRadiusUnits} ${FeatureMobileBorderRadiusWidth.right}${FeatureBorderRadiusUnits} ${FeatureMobileBorderRadiusWidth.bottom}${FeatureBorderRadiusUnits} ${FeatureMobileBorderRadiusWidth.left}${FeatureBorderRadiusUnits}`;
	/** End Border Radius Width */





	return (
		<>
			<PanelBody
				title={__("Features", "frontis-blocks")}
				initialOpen={false}
				className="fb-setting-feature-list-wrapper"
			>
				<div className="fb-setting-fontsize-wrapper">
					<div className="fb-setting-fontsize-header">
						<ResponsiveControl
							labelText={__("List Gap", "frontis-blocks")}
							device={DeviceType}
							deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
						/>
						<div className="fb-setting-fontsize-units">
							<ButtonGroup className="fb-setting-fontsize-units-wrap">
								{UNIT_TYPES.map((item, key) => (
									<Button
										key={key}
										onClick={() => setAttributes({ FeatureListGapUnits: item.value })}
										className={`fb-setting-fontsize-units-switcher ${FeatureListGapUnits === item.value ? 'active' : ''}`}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</div>
					</div>
					<div className="fb-setting-fontsize-rangecontrol">
						<RangeControl
							value={DeviceType === "Desktop" ? FeatureListGapDesktop : DeviceType === "Tablet" ? FeatureListGapTablet : FeatureListGapMobile}
							onChange={(value) => {
								if (DeviceType === "Desktop") {
									setAttributes({ FeatureListGapDesktop: value });
								} else if (DeviceType === "Tablet") {
									setAttributes({ FeatureListGapTablet: value });
								} else if (DeviceType === "Mobile") {
									setAttributes({ FeatureListGapMobile: value });
								}
							}}
							min={1}
							max={100}
							allowReset
							resetFallbackValue={20}
						/>
					</div>
				</div>

				{/** Feature Icon */}
				<BaseControl
					label={__("Icon Color", "frontis-blocks")}
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
											color={FeatureIconColor}
											onChange={(value) => setAttributes({ FeatureIconColor: value })}
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
											value={FeatureIconColor}
											onChange={(value) => setAttributes({ FeatureIconColor: value })}
										/>
									</div>
								</BaseControl>
							</div>
						)}
					/>
				</BaseControl>

				<div className="fb-setting-fontsize-wrapper">
					<div className="fb-setting-fontsize-header">
						<ResponsiveControl
							labelText={__("Icon Size", "frontis-blocks")}
							device={DeviceType}
							deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
						/>
						<div className="fb-setting-fontsize-units">
							<ButtonGroup className="fb-setting-fontsize-units-wrap">
								{UNIT_TYPES.map((item, key) => (
									<Button
										key={key}
										onClick={() => setAttributes({ FeatureIconSizeUnits: item.value })}
										className={`fb-setting-fontsize-units-switcher ${FeatureIconSizeUnits === item.value ? 'active' : ''}`}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</div>
					</div>
					<div className="fb-setting-fontsize-rangecontrol">
						<RangeControl
							value={DeviceType === "Desktop" ? FeatureIconSizeDesktop : DeviceType === "Tablet" ? FeatureIconSizeTablet : FeatureIconSizeMobile}
							onChange={(value) => {
								if (DeviceType === "Desktop") {
									setAttributes({ FeatureIconSizeDesktop: value });
								} else if (DeviceType === "Tablet") {
									setAttributes({ FeatureIconSizeTablet: value });
								} else if (DeviceType === "Mobile") {
									setAttributes({ FeatureIconSizeMobile: value });
								}
							}}
							min={1}
							max={100}
							allowReset
							resetFallbackValue={20}
						/>
					</div>
				</div>

				<BaseControl
					label={__("Icon Background Color", "frontis-blocks")}
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
											color={FeatureIconBgColor}
											onChange={(value) => setAttributes({ FeatureIconBgColor: value })}
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
											value={FeatureIconBgColor}
											onChange={(value) => setAttributes({ FeatureIconBgColor: value })}
										/>
									</div>
								</BaseControl>
							</div>
						)}
					/>
				</BaseControl>


				<div className="fb-setting-fontsize-wrapper">
					<div className="fb-setting-fontsize-header">
						<ResponsiveControl
							labelText={__("Icon Background Size", "frontis-blocks")}
							device={DeviceType}
							deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
						/>
						<div className="fb-setting-fontsize-units">
							<ButtonGroup className="fb-setting-fontsize-units-wrap">
								{UNIT_TYPES.map((item, key) => (
									<Button
										key={key}
										onClick={() => setAttributes({ FeatureIconBgSizeUnits: item.value })}
										className={`fb-setting-fontsize-units-switcher ${FeatureIconBgSizeUnits === item.value ? 'active' : ''}`}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</div>
					</div>
					<div className="fb-setting-fontsize-rangecontrol">
						<RangeControl
							value={DeviceType === "Desktop" ? FeatureIconBgSizeDesktop : DeviceType === "Tablet" ? FeatureIconBgSizeTablet : FeatureIconBgSizeMobile}
							onChange={(value) => {
								if (DeviceType === "Desktop") {
									setAttributes({ FeatureIconBgSizeDesktop: value });
								} else if (DeviceType === "Tablet") {
									setAttributes({ FeatureIconBgSizeTablet: value });
								} else if (DeviceType === "Mobile") {
									setAttributes({ FeatureIconBgSizeMobile: value });
								}
							}}
							min={1}
							max={200}
							allowReset
							resetFallbackValue={60}
						/>
					</div>
				</div>

				<div className="fb-setting-fontsize-wrapper">
					<div className="fb-setting-fontsize-header">
						<ResponsiveControl
							labelText={__("Icon Spacing", "frontis-blocks")}
							device={DeviceType}
							deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
						/>
						<div className="fb-setting-fontsize-units">
							<ButtonGroup className="fb-setting-fontsize-units-wrap">
								{UNIT_TYPES.map((item, key) => (
									<Button
										key={key}
										onClick={() => setAttributes({ FeatureIconSpacingUnits: item.value })}
										className={`fb-setting-fontsize-units-switcher ${FeatureIconSpacingUnits === item.value ? 'active' : ''}`}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</div>
					</div>
					<div className="fb-setting-fontsize-rangecontrol">
						<RangeControl
							value={DeviceType === "Desktop" ? FeatureIconSpacingDesktop : DeviceType === "Tablet" ? FeatureIconSpacingTablet : FeatureIconSpacingMobile}
							onChange={(value) => {
								if (DeviceType === "Desktop") {
									setAttributes({ FeatureIconSpacingDesktop: value });
								} else if (DeviceType === "Tablet") {
									setAttributes({ FeatureIconSpacingTablet: value });
								} else if (DeviceType === "Mobile") {
									setAttributes({ FeatureIconSpacingMobile: value });
								}
							}}
							min={1}
							max={100}
							allowReset
							resetFallbackValue={20}
						/>
					</div>
				</div>

				{/*** Feature Title **/}
				<BaseControl
					label={__("Title Typography", "frontis-blocks")}
					className="fb-setting-typography"
				>
					<Dropdown
						className="fb-setting-dropdown-icon-wrapper"
						contentClassName="fb-setting-dropdown-icon-content"
						popoverProps={{ placement: 'bottom-start' }}
						renderToggle={({ isOpen, onToggle }) => (
							<Button
								variant="primary"
								onClick={onToggle}
								aria-expanded={isOpen}
								aria-label={__("Toggle Typography Settings", "frontis-blocks")}
								className="fb-setting-dropdown-icon-btn"
							>
								<Dashicon icon="edit" className="fb-setting-dropdown-icon" />
							</Button>
						)}
						renderContent={() => (
							<div className="fb-setting-typography-popup">
								<BaseControl className="fb-setting-typography-popup-inner" >
									<div className="fb-setting-fontfamily-wrapper">
										<SelectControl
											label={__("Font Family", "frontis-blocks")}
											options={FONT_FAMILYS}
											value={FeatureTitleFontFamily}
											onChange={(value) => setAttributes({ FeatureTitleFontFamily: value })}
										/>
									</div>
									<div className="fb-setting-fontsize-wrapper">
										<div className="fb-setting-fontsize-header">
											<ResponsiveControl
												labelText={__("Font Size", "frontis-blocks")}
												device={DeviceType}
												deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
											/>
											<div className="fb-setting-fontsize-units">
												<ButtonGroup className="fb-setting-fontsize-units-wrap">
													{UNIT_TYPES.map((item, key) => (
														<Button
															key={key}
															onClick={() => setAttributes({ FeatureTitleFontSizeUnits: item.value })}
															className={`fb-setting-fontsize-units-switcher ${FeatureTitleFontSizeUnits === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</div>
										</div>
										<div className="fb-setting-fontsize-rangecontrol">
											<RangeControl
												value={DeviceType === "Desktop" ? FeatureTitleFontSizeDesktop : DeviceType === "Tablet" ? FeatureTitleFontSizeTablet : FeatureTitleFontSizeMobile}
												onChange={(value) => {
													if (DeviceType === "Desktop") {
														setAttributes({ FeatureTitleFontSizeDesktop: value });
													} else if (DeviceType === "Tablet") {
														setAttributes({ FeatureTitleFontSizeTablet: value });
													} else if (DeviceType === "Mobile") {
														setAttributes({ FeatureTitleFontSizeMobile: value });
													}
												}}
												min={1}
												max={200}
												allowReset
												resetFallbackValue={18}
											/>
										</div>
									</div>

									<div className="fb-setting-fontweight-wrapper">
										<SelectControl
											label={__("Font Weight", "frontis-blocks")}
											options={[
												{ label: __("Default", "frontis-blocks"), value: "700" },
												{ label: __("100", "frontis-blocks"), value: "100" },
												{ label: __("200", "frontis-blocks"), value: "200" },
												{ label: __("300", "frontis-blocks"), value: "300" },
												{ label: __("400", "frontis-blocks"), value: "400" },
												{ label: __("500", "frontis-blocks"), value: "500" },
												{ label: __("600", "frontis-blocks"), value: "600" },
												{ label: __("700", "frontis-blocks"), value: "700" },
												{ label: __("800", "frontis-blocks"), value: "800" },
												{ label: __("900", "frontis-blocks"), value: "900" },
											]}
											value={FeatureTitleFontWeight}
											onChange={(value) => setAttributes({ FeatureTitleFontWeight: value })}
										/>
									</div>
									<div className="fb-setting-fontstyle-wrapper">
										<SelectControl
											label={__("Font Style", "frontis-blocks")}
											options={[
												{ label: __("Default", "frontis-blocks"), value: "normal" },
												{ label: __("Normal", "frontis-blocks"), value: "normal" },
												{ label: __("Italic", "frontis-blocks"), value: "italic" },
												{ label: __("Oblique", "frontis-blocks"), value: "oblique" },
											]}
											value={FeatureTitleFontStyle}
											onChange={(value) => setAttributes({ FeatureTitleFontStyle: value })}
										/>
									</div>
									<div className="fb-setting-texttransform-wrapper">
										<SelectControl
											label={__("Text Transform", "frontis-blocks")}
											options={[
												{ label: __("Default", "frontis-blocks"), value: "none" },
												{ label: __("None", "frontis-blocks"), value: "none" },
												{ label: __("Capitalize", "frontis-blocks"), value: "capitalize" },
												{ label: __("Uppercase", "frontis-blocks"), value: "uppercase" },
												{ label: __("Lowercase", "frontis-blocks"), value: "lowercase" },
											]}
											value={FeatureTitleTextTransform}
											onChange={(value) => setAttributes({ FeatureTitleTextTransform: value })}
										/>
									</div>
									<div className="fb-setting-textdecoration-wrapper">
										<SelectControl
											label={__("Text Decoration", "frontis-blocks")}
											options={[
												{ label: __("Default", "frontis-blocks"), value: "none" },
												{ label: __("None", "frontis-blocks"), value: "none" },
												{ label: __("Underline", "frontis-blocks"), value: "underline" },
												{ label: __("Overline", "frontis-blocks"), value: "overline" },
												{ label: __("Line Through", "frontis-blocks"), value: "line-through" },
											]}
											value={FeatureTitleTextDecoration}
											onChange={(value) => setAttributes({ FeatureTitleTextDecoration: value })}
										/>
									</div>
									<div className="fb-setting-letterspacing-wrapper">
										<div className="fb-setting-letterspacing-header">
											<ResponsiveControl
												labelText={__("Letter Spacing", "frontis-blocks")}
												device={DeviceType}
												deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
											/>
											<div className="fb-setting-letterspacing-units">
												<ButtonGroup className="fb-setting-letterspacing-units-wrap">
													{UNIT_TYPES.map((item, key) => (
														<Button
															key={key}
															onClick={() => setAttributes({ FeatureTitleLetterSpacingUnits: item.value })}
															className={`fb-setting-letterspacing-units-switcher ${FeatureTitleLetterSpacingUnits === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</div>
										</div>
										<RangeControl
											value={DeviceType === "Desktop" ? FeatureTitleLetterSpacingDesktop : DeviceType === "Tablet" ? FeatureTitleLetterSpacingTablet : FeatureTitleLetterSpacingMobile}
											onChange={(value) => {
												if (DeviceType === "Desktop") {
													setAttributes({ FeatureTitleLetterSpacingDesktop: value });
												} else if (DeviceType === "Tablet") {
													setAttributes({ FeatureTitleLetterSpacingTablet: value });
												} else if (DeviceType === "Mobile") {
													setAttributes({ FeatureTitleLetterSpacingMobile: value });
												}
											}}
											min={-10}
											max={100}
											step={1}
											allowReset
											resetFallbackValue={0}
										/>
									</div>

									<div className="fb-setting-lineheight-wrapper">
										<div className="fb-setting-lineheight-header">
											<ResponsiveControl
												labelText={__("Line Height", "frontis-blocks")}
												device={DeviceType}
												deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
											/>
											<div className="fb-setting-lineheight-units">
												<ButtonGroup className="fb-setting-lineheight-units-wrap">
													{UNIT_TYPES.map((item, key) => (
														<Button
															key={key}
															onClick={() => setAttributes({ FeatureTitleLineHeightUnits: item.value })}
															className={`fb-setting-lineheight-units-switcher ${FeatureTitleLineHeightUnits === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</div>
										</div>
										<RangeControl
											value={DeviceType === "Desktop" ? FeatureTitleLineHeightDesktop : DeviceType === "Tablet" ? FeatureTitleLineHeightTablet : FeatureTitleLineHeightMobile}
											onChange={(value) => {
												if (DeviceType === "Desktop") {
													setAttributes({ FeatureTitleLineHeightDesktop: value });
												} else if (DeviceType === "Tablet") {
													setAttributes({ FeatureTitleLineHeightTablet: value });
												} else if (DeviceType === "Mobile") {
													setAttributes({ FeatureTitleLineHeightMobile: value });
												}
											}}
											min={1}
											max={100}
											step={1}
											allowReset
											resetFallbackValue={undefined}
										/>
									</div>

								</BaseControl>
							</div>
						)}
					/>
				</BaseControl>


				<BaseControl
					label={__("Title Color", "frontis-blocks")}
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
											color={FeatureTitleColor}
											onChange={(value) => setAttributes({ FeatureTitleColor: value })}
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
											value={FeatureTitleColor}
											onChange={(value) => setAttributes({ FeatureTitleColor: value })}
										/>
									</div>
								</BaseControl>
							</div>
						)}
					/>
				</BaseControl>
			</PanelBody>
		</>
	);
}
