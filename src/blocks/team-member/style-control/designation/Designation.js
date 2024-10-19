import { __ } from '@wordpress/i18n';

import { 
    BaseControl,
    PanelBody, 
    Dropdown, 
    SelectControl, 
    ButtonGroup, 
    Button, 
    RangeControl, 
    Dashicon,
	ColorPicker,
	ColorPalette
} from "@wordpress/components";

import React from "react";
import FB_Spacing from "../../../../components/spacing";
import FB_ResponsiveControl from "../../../../components/responsive-control";
import { FONT_FAMILYS, UNIT_TYPES } from '../../constants/constants';

const Designation = ({ attributes, setAttributes }) => {

    const {
        DeviceType,
        
        teamMemberDesignationColor,
        teamMemberDesignationFontFamily,
        teamMemberDesignationFontWeight,
        teamMemberDesignationFontStyle,
        teamMemberDesignationTextTransform,
        teamMemberDesignationTextDecoration,
        teamMemberDesignationFontSizeUnits,
        teamMemberDesignationFontSizeUnitsMobile,
        teamMemberDesignationFontSizeUnitsTablet,
        teamMemberDesignationLineHeightUnits,
        teamMemberDesignationFontSize,
        teamMemberDesignationFontSizeTablet,
        teamMemberDesignationFontSizeMobile,
        teamMemberDesignationLineHeightDesktop,
        teamMemberDesignationLineHeightTablet,
        teamMemberDesignationLineHeightMobile,
        teamMemberDesignationLetterSpacingDesktop,
        teamMemberDesignationLetterSpacingTablet,
        teamMemberDesignationLetterSpacingMobile,
        teamMemberDesignationLetterSpacingUnits,
        teamMemberDesignationLoadGoogleFonts,

        teamMemberDesignationMarginUnits,
        teamMemberDesignationMarginDesktop,
        teamMemberDesignationMarginTab,
        teamMemberDesignationMarginMobile,
        teamMemberDesignationMarginLink,
    } = attributes;

    // Button Margin Functionb
    const handleDesiMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( teamMemberDesignationMarginLink ) {
            switch ( DeviceType ) {
                case 'Desktop':
                    setAttributes( {
                        teamMemberDesignationMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        teamMemberDesignationMarginTab: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        teamMemberDesignationMarginMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( DeviceType ) {
                case 'Desktop':
                    setAttributes( {teamMemberDesignationMarginDesktop: {...teamMemberDesignationMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {teamMemberDesignationMarginTab: {...teamMemberDesignationMarginTab, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {teamMemberDesignationMarginMobile: {...teamMemberDesignationMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleDesiMarginCombineBtn = () => {
        setAttributes( {teamMemberDesignationMarginLink: !teamMemberDesignationMarginLink} );
    }

    const handleDesiMarginUnitsHandler = (unit) => {
        setAttributes( {
            teamMemberDesignationMarginUnits: {
                ...teamMemberDesignationMarginUnits,
                [DeviceType]: unit
            }
        })
    }

	return (
		<PanelBody
			title={__("Designation", "frontis-blocks")}
			initialOpen={false}
			className="fb-setting-gallery-button-wrapper"
		>
			<BaseControl
				label={__("Typography", "frontis-blocks")}
				className="fb-setting-typography"
			>
				<Dropdown
					className="fb-setting-dropdown-icon-wrapper"
					contentClassName="fb-setting-dropdown-icon-content"
					popoverProps={{ placement: "bottom-start" }}
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
							<BaseControl className="fb-setting-typography-popup-inner">
								<div className="fb-setting-fontfamily-wrapper">
									<SelectControl
										label={__("Font Family", "frontis-blocks")}
										options={FONT_FAMILYS}
										value={teamMemberDesignationFontFamily}
										onChange={(value) =>
											setAttributes({ teamMemberDesignationFontFamily: value })
										}
									/>
								</div>
								<div className="fb-setting-fontsize-wrapper">
									<div className="fb-setting-fontsize-header">
										<FB_ResponsiveControl
											labelText={__("Font Size", "frontis-blocks")}
											device={DeviceType}
											deviceHandler={(newDevice) =>
												setAttributes({ DeviceType: newDevice })
											}
										/>
										<div className="fb-setting-fontsize-units">
											<ButtonGroup className="fb-setting-fontsize-units-wrap">
												{UNIT_TYPES.map((item, key) => (
													<Button
														key={key}
														onClick={() =>
															setAttributes({
																teamMemberDesignationFontSizeUnits: item.value,
															})
														}
														className={`fb-setting-fontsize-units-switcher ${
															teamMemberDesignationFontSizeUnits === item.value
																? "active"
																: ""
														}`}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>
										</div>
									</div>
									<div className="fb-setting-fontsize-rangecontrol">
										<RangeControl
											value={
												DeviceType === "Desktop"
													? teamMemberDesignationFontSize
													: DeviceType === "Tablet"
													? teamMemberDesignationFontSizeTablet
													: teamMemberDesignationFontSizeMobile
											}
											onChange={(value) => {
												if (DeviceType === "Desktop") {
													setAttributes({ teamMemberDesignationFontSize: value, });
												} else if (DeviceType === "Tablet") {
													setAttributes({ teamMemberDesignationFontSizeTablet: value });
												} else if (DeviceType === "Mobile") {
													setAttributes({ teamMemberDesignationFontSizeMobile: value });
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
										value={teamMemberDesignationFontWeight}
										onChange={(value) =>
											setAttributes({ teamMemberDesignationFontWeight: value })
										}
									/>
								</div>
								<div className="fb-setting-fontstyle-wrapper">
									<SelectControl
										label={__("Font Style", "frontis-blocks")}
										options={[
											{
												label: __("Default", "frontis-blocks"),
												value: "normal",
											},
											{
												label: __("Normal", "frontis-blocks"),
												value: "normal",
											},
											{
												label: __("Italic", "frontis-blocks"),
												value: "italic",
											},
											{
												label: __("Oblique", "frontis-blocks"),
												value: "oblique",
											},
										]}
										value={teamMemberDesignationFontStyle}
										onChange={(value) =>
											setAttributes({ teamMemberDesignationFontStyle: value })
										}
									/>
								</div>
								<div className="fb-setting-texttransform-wrapper">
									<SelectControl
										label={__("Text Transform", "frontis-blocks")}
										options={[
											{ label: __("Default", "frontis-blocks"), value: "none" },
											{ label: __("None", "frontis-blocks"), value: "none" },
											{
												label: __("Capitalize", "frontis-blocks"),
												value: "capitalize",
											},
											{
												label: __("Uppercase", "frontis-blocks"),
												value: "uppercase",
											},
											{
												label: __("Lowercase", "frontis-blocks"),
												value: "lowercase",
											},
										]}
										value={teamMemberDesignationTextTransform}
										onChange={(value) =>
											setAttributes({ teamMemberDesignationTextTransform: value })
										}
									/>
								</div>
								<div className="fb-setting-textdecoration-wrapper">
									<SelectControl
										label={__("Text Decoration", "frontis-blocks")}
										options={[
											{ label: __("Default", "frontis-blocks"), value: "none" },
											{ label: __("None", "frontis-blocks"), value: "none" },
											{
												label: __("Underline", "frontis-blocks"),
												value: "underline",
											},
											{
												label: __("Overline", "frontis-blocks"),
												value: "overline",
											},
											{
												label: __("Line Through", "frontis-blocks"),
												value: "line-through",
											},
										]}
										value={teamMemberDesignationTextDecoration}
										onChange={(value) =>
											setAttributes({ teamMemberDesignationTextDecoration: value })
										}
									/>
								</div>
								<div className="fb-setting-letterspacing-wrapper">
									<div className="fb-setting-letterspacing-header">
										<FB_ResponsiveControl
											labelText={__("Letter Spacing", "frontis-blocks")}
											device={DeviceType}
											deviceHandler={(newDevice) =>
												setAttributes({ DeviceType: newDevice })
											}
										/>
										<div className="fb-setting-letterspacing-units">
											<ButtonGroup className="fb-setting-letterspacing-units-wrap">
												{UNIT_TYPES.map((item, key) => (
													<Button
														key={key}
														onClick={() =>
															setAttributes({
																teamMemberDesignationLetterSpacingUnits: item.value,
															})
														}
														className={`fb-setting-letterspacing-units-switcher ${
															teamMemberDesignationLetterSpacingUnits === item.value
																? "active"
																: ""
														}`}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>
										</div>
									</div>
									<RangeControl
										value={
											DeviceType === "Desktop"
												? teamMemberDesignationLetterSpacingDesktop
												: DeviceType === "Tablet"
												? teamMemberDesignationLetterSpacingTablet
												: teamMemberDesignationLetterSpacingMobile
										}
										onChange={(value) => {
											if (DeviceType === "Desktop") {
												setAttributes({
													teamMemberDesignationLetterSpacingDesktop: value,
												});
											} else if (DeviceType === "Tablet") {
												setAttributes({
													teamMemberDesignationLetterSpacingTablet: value,
												});
											} else if (DeviceType === "Mobile") {
												setAttributes({
													teamMemberDesignationLetterSpacingMobile: value,
												});
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
										<FB_ResponsiveControl
											labelText={__("Line Height", "frontis-blocks")}
											device={DeviceType}
											deviceHandler={(newDevice) =>
												setAttributes({ DeviceType: newDevice })
											}
										/>
										<div className="fb-setting-lineheight-units">
											<ButtonGroup className="fb-setting-lineheight-units-wrap">
												{UNIT_TYPES.map((item, key) => (
													<Button
														key={key}
														onClick={() =>
															setAttributes({
																teamMemberDesignationLineHeightUnits: item.value,
															})
														}
														className={`fb-setting-lineheight-units-switcher ${
															teamMemberDesignationLineHeightUnits === item.value
																? "active"
																: ""
														}`}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>
										</div>
									</div>
									<RangeControl
										value={
											DeviceType === "Desktop"
												? teamMemberDesignationLineHeightDesktop
												: DeviceType === "Tablet"
												? teamMemberDesignationLineHeightTablet
												: teamMemberDesignationLineHeightMobile
										}
										onChange={(value) => {
											if (DeviceType === "Desktop") {
												setAttributes({
													teamMemberDesignationLineHeightDesktop: value,
												});
											} else if (DeviceType === "Tablet") {
												setAttributes({ teamMemberDesignationLineHeightTablet: value });
											} else if (DeviceType === "Mobile") {
												setAttributes({ teamMemberDesignationLineHeightMobile: value });
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
					label={__("Color", "frontis-blocks")}
					className="fb-setting-color-setting-wrapper"
				>
					<Dropdown
						className="fb-setting-color-setting-icon-dropdown"
						contentClassName="fb-setting-color-setting-icon-dropdown-content"
						popoverProps={{ placement: "bottom-start" }}
						renderToggle={({ isOpen, onToggle }) => (
							<Button
								variant="primary"
								onClick={onToggle}
								aria-expanded={isOpen}
								aria-label={__("Toggle Typography Settings", "frontis-blocks")}
								className="fb-setting-color-setting-icon-btn"
							>
								<Dashicon
									icon="color-picker"
									className="fb-setting-color-setting-icon"
								/>
							</Button>
						)}
						renderContent={() => (
							<div className="fb-setting-color-setting-icon-popup">
								<BaseControl className="fb-setting-color-setting-icon-popup-inner">
									<div className="fb-setting-normal-color">
										<ColorPicker
											color={teamMemberDesignationColor}
											onChange={(value) =>
												setAttributes({ teamMemberDesignationColor: value })
											}
											enableAlpha={true}
										/>
										<div className="fb-setting-color-label">
											{__("Default Colors", "frontis-blocks")}
										</div>
										<ColorPalette
											colors={[
												{ color: "#F72585" },
												{ color: "#7209B7" },
												{ color: "#3A0CA3" },
												{ color: "#4361EE" },
												{ color: "#4CC9F0" },
											]}
											disableCustomColors={true}
											value={teamMemberDesignationColor}
											onChange={(value) =>
												setAttributes({ teamMemberDesignationColor: value })
											}
										/>
									</div>
								</BaseControl>
							</div>
						)}
					/>
				</BaseControl>


			<FB_Spacing
				label={__("Margin", "frontis-blocks")}
				DeviceType={DeviceType}
				spacingUnitsHandler={handleDesiMarginUnitsHandler}
				spacingUnits={teamMemberDesignationMarginUnits}
				spacingDesktop={teamMemberDesignationMarginDesktop}
				spacingTablet={teamMemberDesignationMarginTab}
				spacingMobile={teamMemberDesignationMarginMobile}
				handleSpacingUnitHandler={handleDesiMarginUnitChange}
				spacingCombineBtn={teamMemberDesignationMarginLink}
				spacingCombineBtnHandler={handleDesiMarginCombineBtn}
				setAttributes={setAttributes}
			/>
		</PanelBody>
	);
};

export default Designation;
