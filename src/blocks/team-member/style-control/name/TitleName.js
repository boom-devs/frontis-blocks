import { __ } from "@wordpress/i18n";

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
	ColorPalette,
} from "@wordpress/components";

import React from "react";
import FB_Spacing from "../../../../components/spacing";
import FB_ResponsiveControl from "../../../../components/responsive-control";
import { FONT_FAMILYS, NORMAL_HOVER, UNIT_TYPES } from "../../constants/constants";

const TitleName = ({ attributes, setAttributes }) => {
	const {
		DeviceType,

		teamMemberNameColorSwitcher,
		teamMemberNameColor,
		teamMemberNameHoverColor,

		teamMemberNameFontFamily,
		teamMemberNameFontWeight,
		teamMemberNameFontStyle,
		teamMemberNameTextTransform,
		teamMemberNameTextDecoration,
		teamMemberNameFontSizeUnits,
		teamMemberNameLineHeightUnits,
		teamMemberNameFontSize,
		teamMemberNameFontSizeTablet,
		teamMemberNameFontSizeMobile,
		teamMemberNameLineHeightDesktop,
		teamMemberNameLineHeightTablet,
		teamMemberNameLineHeightMobile,
		teamMemberNameLetterSpacingDesktop,
		teamMemberNameLetterSpacingTablet,
		teamMemberNameLetterSpacingMobile,
		teamMemberNameLetterSpacingUnits,
		teamMemberNameLoadGoogleFonts,

		teamMemberNameMarginUnits,
		teamMemberNameMarginDesktop,
		teamMemberNameMarginTab,
		teamMemberNameMarginMobile,
		teamMemberNameMarginLink,
	} = attributes;

	// Button Margin Functionb
	const handleNameMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (teamMemberNameMarginLink) {
			switch (DeviceType) {
				case "Desktop":
					setAttributes({
						teamMemberNameMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						teamMemberNameMarginTab: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						teamMemberNameMarginMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (DeviceType) {
				case "Desktop":
					setAttributes({
						teamMemberNameMarginDesktop: {
							...teamMemberNameMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						teamMemberNameMarginTab: {
							...teamMemberNameMarginTab,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						teamMemberNameMarginMobile: {
							...teamMemberNameMarginMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleNameMarginCombineBtn = () => {
		setAttributes({ teamMemberNameMarginLink: !teamMemberNameMarginLink });
	};

	const handleNmeMarginUnitsHandler = (unit) => {
		setAttributes({
			teamMemberNameMarginUnits: {
				...teamMemberNameMarginUnits,
				[DeviceType]: unit,
			},
		});
	};

	return (
		<PanelBody
			title={__("Name", "frontis-blocks")}
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
										value={teamMemberNameFontFamily}
										onChange={(value) =>
											setAttributes({ teamMemberNameFontFamily: value })
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
																teamMemberNameFontSizeUnits: item.value,
															})
														}
														className={`fb-setting-fontsize-units-switcher ${
															teamMemberNameFontSizeUnits === item.value
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
													? teamMemberNameFontSize
													: DeviceType === "Tablet"
													? teamMemberNameFontSizeTablet
													: teamMemberNameFontSizeMobile
											}
											onChange={(value) => {
												if (DeviceType === "Desktop") {
													setAttributes({ teamMemberNameFontSize: value });
												} else if (DeviceType === "Tablet") {
													setAttributes({
														teamMemberNameFontSizeTablet: value,
													});
												} else if (DeviceType === "Mobile") {
													setAttributes({
														teamMemberNameFontSizeMobile: value,
													});
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
										value={teamMemberNameFontWeight}
										onChange={(value) =>
											setAttributes({ teamMemberNameFontWeight: value })
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
										value={teamMemberNameFontStyle}
										onChange={(value) =>
											setAttributes({ teamMemberNameFontStyle: value })
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
										value={teamMemberNameTextTransform}
										onChange={(value) =>
											setAttributes({ teamMemberNameTextTransform: value })
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
										value={teamMemberNameTextDecoration}
										onChange={(value) =>
											setAttributes({ teamMemberNameTextDecoration: value })
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
																teamMemberNameLetterSpacingUnits: item.value,
															})
														}
														className={`fb-setting-letterspacing-units-switcher ${
															teamMemberNameLetterSpacingUnits === item.value
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
												? teamMemberNameLetterSpacingDesktop
												: DeviceType === "Tablet"
												? teamMemberNameLetterSpacingTablet
												: teamMemberNameLetterSpacingMobile
										}
										onChange={(value) => {
											if (DeviceType === "Desktop") {
												setAttributes({
													teamMemberNameLetterSpacingDesktop: value,
												});
											} else if (DeviceType === "Tablet") {
												setAttributes({
													teamMemberNameLetterSpacingTablet: value,
												});
											} else if (DeviceType === "Mobile") {
												setAttributes({
													teamMemberNameLetterSpacingMobile: value,
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
																teamMemberNameLineHeightUnits: item.value,
															})
														}
														className={`fb-setting-lineheight-units-switcher ${
															teamMemberNameLineHeightUnits === item.value
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
												? teamMemberNameLineHeightDesktop
												: DeviceType === "Tablet"
												? teamMemberNameLineHeightTablet
												: teamMemberNameLineHeightMobile
										}
										onChange={(value) => {
											if (DeviceType === "Desktop") {
												setAttributes({
													teamMemberNameLineHeightDesktop: value,
												});
											} else if (DeviceType === "Tablet") {
												setAttributes({
													teamMemberNameLineHeightTablet: value,
												});
											} else if (DeviceType === "Mobile") {
												setAttributes({
													teamMemberNameLineHeightMobile: value,
												});
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
				className="fb-setting-color-panel-wrapper"
			>
				<ButtonGroup className="fb-setting-color-panel-btn">
					{NORMAL_HOVER.map((item, key) => (
						<Button
							key={key}
							onClick={() =>
								setAttributes({ teamMemberNameColorSwitcher: item.value })
							}
							className={`fb-setting-color-panel-btn-switchr ${
								teamMemberNameColorSwitcher === item.value ? "active" : ""
							}`}
						>
							{item.label}
						</Button>
					))}
				</ButtonGroup>
			</BaseControl>

			{teamMemberNameColorSwitcher === "normal" && (
				<BaseControl
					label={__("Nomal Color", "frontis-blocks")}
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
											color={teamMemberNameColor}
											onChange={(value) =>
												setAttributes({ teamMemberNameColor: value })
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
											value={teamMemberNameColor}
											onChange={(value) =>
												setAttributes({ teamMemberNameColor: value })
											}
										/>
									</div>
								</BaseControl>
							</div>
						)}
					/>
				</BaseControl>
			)}

			{teamMemberNameColorSwitcher === "hover" && (
				<BaseControl
					label={__("Hover Color", "frontis-blocks")}
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
											color={teamMemberNameHoverColor}
											onChange={(value) =>
												setAttributes({ teamMemberNameHoverColor: value })
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
											value={teamMemberNameHoverColor}
											onChange={(value) =>
												setAttributes({ teamMemberNameHoverColor: value })
											}
										/>
									</div>
								</BaseControl>
							</div>
						)}
					/>
				</BaseControl>
			)}

			<FB_Spacing
				label={__("Margin", "frontis-blocks")}
				DeviceType={DeviceType}
				spacingUnitsHandler={handleNmeMarginUnitsHandler}
				spacingUnits={teamMemberNameMarginUnits}
				spacingDesktop={teamMemberNameMarginDesktop}
				spacingTablet={teamMemberNameMarginTab}
				spacingMobile={teamMemberNameMarginMobile}
				handleSpacingUnitHandler={handleNameMarginUnitChange}
				spacingCombineBtn={teamMemberNameMarginLink}
				spacingCombineBtnHandler={handleNameMarginCombineBtn}
				setAttributes={setAttributes}
			/>
		</PanelBody>
	);
};

export default TitleName;
