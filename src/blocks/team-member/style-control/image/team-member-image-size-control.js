import { __ } from "@wordpress/i18n";

import FB_ResponsiveControl from "../../../../components/responsive-control";
import { Button, ButtonGroup, RangeControl } from "@wordpress/components";
import { separator_UNIT_TYPES } from "../../constants/constants";


export default function TeamMemberImageSizeControl({
	attributes,
	setAttributes,
}) {

	const { 

		DeviceType,

		teamMemberImageSizeWidthUnits,
		teamMemberImageSizeWidthDesktop,
		teamMemberImageSizeWidthTab,
		teamMemberImageSizeWidthMobile,
		teamMemberImageSizeHeightUnits,
		teamMemberImageSizeHeightDesktop,
		teamMemberImageSizeHeightTab,
		teamMemberImageSizeHeightMobile,

	 } = attributes;

	return (
		<>
			<div className="fb-setting-spacing-container">
				<div className="fb-setting-spacing-inner-container">
					<div className="fb-setting-spacing-label-container">
						<FB_ResponsiveControl
							labelText={__("Width", "frontis-blocks")}
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
										onClick={() => {
											if (DeviceType === "Desktop") {
												setAttributes({ teamMemberImageSizeWidthUnits: {...teamMemberImageSizeWidthUnits, Desktop: item.value} });
											} else if (DeviceType === "Tablet") {
												setAttributes({ teamMemberImageSizeWidthUnits: {...teamMemberImageSizeWidthUnits, Tablet: item.value} });
											} else if (DeviceType === "Mobile") {
												setAttributes({ teamMemberImageSizeWidthUnits: {...teamMemberImageSizeWidthUnits, Mobile: item.value} });
											}
										}}
										className={`fb-setting-units-type-switcher ${
											teamMemberImageSizeWidthUnits[DeviceType] === item.value ? "active" : ""
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
								? teamMemberImageSizeWidthDesktop
								: DeviceType === "Tablet"
								? teamMemberImageSizeWidthTab
								: teamMemberImageSizeWidthMobile
						}
						onChange={(value) => {
							if (DeviceType === "Desktop") {
								setAttributes({ teamMemberImageSizeWidthDesktop: value });
							} else if (DeviceType === "Tablet") {
								setAttributes({ teamMemberImageSizeWidthTab: value });
							} else if (DeviceType === "Mobile") {
								setAttributes({ teamMemberImageSizeWidthMobile: value });
							}
						}}
						min={1}
						max={teamMemberImageSizeWidthUnits[DeviceType] === '%' ? 100 : 1000}
						allowReset
						resetFallbackValue={250}
					/>
				</div>
			</div>

			<div className="fb-setting-spacing-container">
				<div className="fb-setting-spacing-inner-container">
					<div className="fb-setting-spacing-label-container">
						<FB_ResponsiveControl
							labelText={__("Height", "frontis-blocks")}
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
										onClick={() => {
											if (DeviceType === "Desktop") {
												setAttributes({ teamMemberImageSizeHeightUnits: {...teamMemberImageSizeHeightUnits, Desktop: item.value} });
											} else if (DeviceType === "Tablet") {
												setAttributes({ teamMemberImageSizeHeightUnits: {...teamMemberImageSizeHeightUnits, Tablet: item.value} });
											} else if (DeviceType === "Mobile") {
												setAttributes({ teamMemberImageSizeHeightUnits: {...teamMemberImageSizeHeightUnits, Mobile: item.value} });
											}
										}}
										className={`fb-setting-units-type-switcher ${
											teamMemberImageSizeHeightUnits[DeviceType] === item.value ? "active" : ""
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
								? teamMemberImageSizeHeightDesktop
								: DeviceType === "Tablet"
								? teamMemberImageSizeHeightTab
								: teamMemberImageSizeHeightMobile
						}
						onChange={(value) => {
							if (DeviceType === "Desktop") {
								setAttributes({ teamMemberImageSizeHeightDesktop: value });
							} else if (DeviceType === "Tablet") {
								setAttributes({ teamMemberImageSizeHeightTab: value });
							} else if (DeviceType === "Mobile") {
								setAttributes({ teamMemberImageSizeHeightMobile: value });
							}
						}}
						min={1}
						max={teamMemberImageSizeHeightUnits[DeviceType] === '%' ? 100 : 1000}
						allowReset
						resetFallbackValue={250}
					/>
				</div>
			</div>

		</>
	);
}
