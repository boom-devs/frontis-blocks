import { __ } from '@wordpress/i18n';

import FB_Range from "@Components/range";
import {BaseControl, Button, ButtonGroup, Dashicon, Dropdown, RangeControl, SelectControl} from "@wordpress/components";
import {FONT_FAMILYS, UNIT_TYPES} from "@Blocks/advanced-heading/constants/constants";
import FB_Color from "@Components/color";
export default function CountDownDigitTypographyControl ({ attributes, setAttributes}) {

	const {
		digitFontColorSwitcher,
		digitFontColor,
		digitFontHoverColor,

		digitFontFamily,
		digitFontSize,
		digitFontSizeUnits,
		digitFontWeight,
		digitFontStyle,
		digitTextTransform,
		digitTextDecoration,
		digitLetterSpacing,
		digitLetterSpacingUnits,
		digitLineHeight,
		digitLineHeightUnits,


	} = attributes;


	const handleColorSwitcherChange = (value) => {
		setAttributes({ digitFontColorSwitcher: value });
	};
	const handleGlobalColorChange = (value) => {
		setAttributes({ digitFontColor: value });
	};
	const handleGlobalHoverColorChange = (value) => {
		setAttributes({ digitFontHoverColor: value });
	};



	return (
		<>

			<FB_Color
				label={__(" Color", "frontis-blocks")}
				globalColorSwitcher={digitFontColorSwitcher}
				globalColor={digitFontColor}
				globalHoverColor={digitFontHoverColor}
				handleColorSwitcherChange={handleColorSwitcherChange}
				handleGlobalColorChange={handleGlobalColorChange}
				handleGlobalHoverColorChange={handleGlobalHoverColorChange}
			/>


			{/* Digit Thypography Start */}
			<BaseControl
				label={__("Typography", "frontis-blocks")}
				className="fb-setting-typography"
			>
				<Dropdown
					className="fb-setting-typography-icon-dropdown"
					contentClassName="fb-setting-typography-dropdown-content"
					popoverProps={{ placement: 'bottom-start' }}
					renderToggle={({ isOpen, onToggle }) => (
						<Button
							variant="primary"
							onClick={onToggle}
							aria-expanded={isOpen}
							aria-label={__("Toggle Typography Settings", "frontis-blocks")}
							className="fb-setting-typography-icon-btn"
						>
							<Dashicon icon="edit" className="fb-setting-typography-icon" />
						</Button>
					)}
					renderContent={() => (
						<div className="fb-setting-typography-popup">
							<BaseControl className="fb-setting-typography-popup-inner">
								{/* Font Family */}
								<div className="fb-setting-fontfamily-wrapper">
									<SelectControl
										label={__("Font Family", "frontis-blocks")}
										options={FONT_FAMILYS} // Ensure you have FONT_FAMILYS defined.
										value={attributes.digitFontFamily}
										onChange={(value) => setAttributes({ digitFontFamily: value })}
									/>
								</div>

								{/* Font Size */}
								<div className="fb-setting-fontsize-wrapper">
									<div className="fb-setting-fontsize-header">
										<div className="fb-setting-fontsize-label">
											<span>{__("Font Size", "frontis-blocks")}</span>
										</div>
										<div className="fb-setting-fontsize-units">
											<ButtonGroup className="fb-setting-fontsize-units-wrap">
												{UNIT_TYPES.map((item, key) => (
													<Button
														key={key}
														onClick={() => setAttributes({ digitFontSizeUnits: item.value })}
														className={`fb-setting-fontsize-units-switcher ${attributes.digitFontSizeUnits === item.value ? 'active' : ''}`}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>
										</div>
									</div>
									<div className="fb-setting-fontsize-rangecontrol">
										<RangeControl
											value={attributes.digitFontSize}
											onChange={(value) => setAttributes({ digitFontSize: value })}
											min={1}
											max={200}
											allowReset
											resetFallbackValue={undefined}
										/>
									</div>
								</div>

								{/* Font Weight */}
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
										value={attributes.digitFontWeight}
										onChange={(value) => setAttributes({ digitFontWeight: value })}
									/>
								</div>

								{/* Other typography settings: Font Style, Text Transform, Text Decoration, etc. */}
								{/* Similar structure for other controls */}
							</BaseControl>
						</div>
					)}
				/>
			</BaseControl>
			{/* Digit Thypography End */}
		</>
	);
};
