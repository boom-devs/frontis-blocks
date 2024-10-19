import { __ } from "@wordpress/i18n";
import FB_ResponsiveControl from "../../../../components/responsive-control";
import { CONTENT_ALIGN, NORMAL_HOVER, separator_UNIT_TYPES } from "../../constants/constants";
import { BaseControl, Button, ButtonGroup, ColorPalette, ColorPicker, Dashicon, Dropdown, PanelBody, RangeControl } from "@wordpress/components";

const SocialIcons = ({attributes, setAttributes}) => {

    const {
		DeviceType,

        teamMemberIconsSizeDesktop,
        teamMemberIconsSizeTablet,
        teamMemberIconsSizeMobile,
        teamMemberIconsSizeUnits,
        teamMemberIconsSpacingDesktop,
        teamMemberIconsSpacingTablet,
        teamMemberIconsSpacingMobile,
        teamMemberIconsSpacingUnits,

		teamMemberIconsColorSwitcher,
		teamMemberIconsColor,
		teamMemberIconsHoverColor,
	} = attributes;

	return (
		<PanelBody
			title={__("Social Icon", "frontis-blocks")}
			initialOpen={false}
			className="fb-setting-gallery-button-wrapper"
		>
			<div className="fb-setting-spacing-container">
				<div className="fb-setting-spacing-inner-container">
				<div className="fb-setting-spacing-label-container">
					<FB_ResponsiveControl
						labelText={__("Icon Size", "frontis-blocks")}
						device={DeviceType}
						deviceHandler={(newDevice) =>
							setAttributes({ DeviceType: newDevice })
						}
					/>
					<div className="fb-setting-units-type">
						<ButtonGroup className="fb-setting-units-type-wrap">
							{separator_UNIT_TYPES.map((item, key) => (
								<Button
									key={key}
									onClick={() =>
										setAttributes({ teamMemberIconsSizeUnits: item.value })
									}
									className={`fb-setting-units-type-switcher ${
										teamMemberIconsSizeUnits === item.value ? "active" : ""
									}`}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
					</div>
					</div>
				</div>
				<div className="fb-setting-image-gap-rangecontrol">
					<RangeControl
						value={
							DeviceType === "Desktop"
								? teamMemberIconsSizeDesktop
								: DeviceType === "Tablet"
								? teamMemberIconsSizeTablet
								: teamMemberIconsSizeMobile
						}
						onChange={(value) => {
							if (DeviceType === "Desktop") {
								setAttributes({ teamMemberIconsSizeDesktop: value });
							} else if (DeviceType === "Tablet") {
								setAttributes({ teamMemberIconsSizeTablet: value });
							} else if (DeviceType === "Mobile") {
								setAttributes({ teamMemberIconsSizeMobile: value });
							}
						}}
						min={1}
						max={teamMemberIconsSizeUnits === '%' ? 100 : 100}
						allowReset
						resetFallbackValue={20}
					/>
				</div>
			</div>

			<div className="fb-setting-spacing-container">
				<div className="fb-setting-spacing-inner-container">
					<div className="fb-setting-spacing-label-container">
					<FB_ResponsiveControl
						labelText={__("Icon Spacing", "frontis-blocks")}
						device={DeviceType}
						deviceHandler={(newDevice) =>
							setAttributes({ DeviceType: newDevice })
						}
					/>
					<div className="fb-setting-units-type">
						<ButtonGroup className="fb-setting-units-type-wrap">
							{separator_UNIT_TYPES.map((item, key) => (
								<Button
									key={key}
									onClick={() =>
										setAttributes({ teamMemberIconsSpacingUnits: item.value })
									}
									className={`fb-setting-units-type-switcher ${
										teamMemberIconsSpacingUnits === item.value ? "active" : ""
									}`}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
					</div>
					</div>
				</div>
				<div className="fb-setting-image-gap-rangecontrol">
					<RangeControl
						value={
							DeviceType === "Desktop"
								? teamMemberIconsSpacingDesktop
								: DeviceType === "Tablet"
								? teamMemberIconsSpacingTablet
								: teamMemberIconsSpacingMobile
						}
						onChange={(value) => {
							if (DeviceType === "Desktop") {
								setAttributes({ teamMemberIconsSpacingDesktop: value });
							} else if (DeviceType === "Tablet") {
								setAttributes({ teamMemberIconsSpacingTablet: value });
							} else if (DeviceType === "Mobile") {
								setAttributes({ teamMemberIconsSpacingMobile: value });
							}
						}}
						min={1}
						max={teamMemberIconsSpacingUnits === '%' ? 100 : 100}
						allowReset
						resetFallbackValue={16}
					/>
				</div>
			</div>

			<BaseControl
				label={__("Color", "frontis-blocks")}
				className="fb-setting-color-panel-wrapper"
			>
				<ButtonGroup className="fb-setting-color-panel-btn">
					{NORMAL_HOVER.map((item, key) => (
						<Button
							key={key}
							onClick={() =>
								setAttributes({ teamMemberIconsColorSwitcher: item.value })
							}
							className={`fb-setting-color-panel-btn-switchr ${
								teamMemberIconsColorSwitcher === item.value ? "active" : ""
							}`}
						>
							{item.label}
						</Button>
					))}
				</ButtonGroup>
			</BaseControl>

			{teamMemberIconsColorSwitcher === "normal" && (
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
											color={teamMemberIconsColor}
											onChange={(value) =>
												setAttributes({ teamMemberIconsColor: value })
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
											value={teamMemberIconsColor}
											onChange={(value) =>
												setAttributes({ teamMemberIconsColor: value })
											}
										/>
									</div>
								</BaseControl>
							</div>
						)}
					/>
				</BaseControl>
			)}

			{teamMemberIconsColorSwitcher === "hover" && (
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
											color={teamMemberIconsHoverColor}
											onChange={(value) =>
												setAttributes({ teamMemberIconsHoverColor: value })
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
											value={teamMemberIconsHoverColor}
											onChange={(value) =>
												setAttributes({ teamMemberIconsHoverColor: value })
											}
										/>
									</div>
								</BaseControl>
							</div>
						)}
					/>
				</BaseControl>
			)}
		</PanelBody>
	);
};

export default SocialIcons;
