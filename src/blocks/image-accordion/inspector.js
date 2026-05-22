import { __ } from "@wordpress/i18n";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	RangeControl,
	Button,
	ButtonGroup,
	BaseControl,
	TextControl,
	SelectControl,
} from "@wordpress/components";

import { useState, memo } from "@wordpress/element";

import "./editor.scss";
import FBIconPicker from "@Components/icon-picker";
import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import FB_ColorControl from "@Components/color-control";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_InputControl from "@Components/input-control";
import FB_Presets from "@Components/presets";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import FB_VisibilityControl from "@Components/visibility-control";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_SwitcherControl from "@Components/switcher-control";
import { useDeviceType } from "@Config/displayType";
import { imageAccordionPresets } from "./presets";
import * as fbConstants from "@Constants/fbConstants";

const TRIGGER_OPTIONS = [
	{ label: "Hover", value: "hover" },
	{ label: "Click", value: "click" },
];

const Inspector = ({ attributes, setAttributes }) => {
	const {
		blockID,
		accordionPresetStyle,
		accordionTrigger,
		accordionItems,
		accordionActiveIndex,
		accordionShowTitle,
		accordionShowSubtitle,
		accordionShowNumber,
		accordionShowButton,
		accordionShowIcon,
		accordionShowOverlay,

		accordionHeight,
		accordionHeightUnits,
		accordionActiveWidth,
		accordionActiveWidthUnits,
		accordionGap,
		accordionGapUnits,
		accordionTransitionSpeed,

		accordionItemBorderRadiusUnits,
		accordionItemBorderRadiusDesktop,
		accordionItemBorderRadiusTablet,
		accordionItemBorderRadiusMobile,
		accordionItemBorderRadiusLink,

		accordionOverlayColor,
		accordionOverlayActiveColor,

		accordionTitleColor,
		accordionTitleFontSize,
		accordionTitleFontSizeUnits,
		accordionTitleFontWeight,
		accordionTitleTag,

		accordionSubtitleColor,
		accordionSubtitleFontSize,
		accordionSubtitleFontSizeUnits,

		accordionNumberColor,
		accordionNumberFontSize,
		accordionNumberFontSizeUnits,

		accordionIconSize,
		accordionIconSizeUnits,
		accordionIconColor,
		accordionIconBgColor,

		accordionButtonColor,
		accordionButtonBgColor,
		accordionButtonHoverColor,
		accordionButtonHoverBgColor,
		accordionButtonBorderRadius,
		accordionButtonFontSize,
		accordionButtonFontSizeUnits,

		accordionPaddingUnits,
		accordionPaddingDesktop,
		accordionPaddingTablet,
		accordionPaddingMobile,
		accordionPaddingLink,

		accordionMarginUnits,
		accordionMarginDesktop,
		accordionMarginTablet,
		accordionMarginMobile,
		accordionMarginLink,

		accordionBoxShadowSwitcher,
		accordionBoxShadowValues,
		accordionBoxShadowCssValue,
		accordionBoxShadowHoverValues,
		accordionBoxShadowHoverCssValue,

		accordionGlobalZIndex,
		accordionCustomCSS,
		accordionWraperID,
		accordionWraperClass,

		accordionDesktopSwitcher,
		accordionTabletSwitcher,
		accordionMobileSwitcher,
	} = attributes;

	const deviceType = useDeviceType();
	const [activeItemIndex, setActiveItemIndex] = useState(0);

	/** Start border radius helpers */
	const handleBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (accordionItemBorderRadiusLink) {
			setAttributes({
				accordionItemBorderRadiusDesktop: {
					top: value,
					right: value,
					bottom: value,
					left: value,
				},
				accordionItemBorderRadiusTablet: {
					top: value,
					right: value,
					bottom: value,
					left: value,
				},
				accordionItemBorderRadiusMobile: {
					top: value,
					right: value,
					bottom: value,
					left: value,
				},
			});
		} else {
			const targetAttr = `accordionItemBorderRadius${deviceType}`;
			setAttributes({
				[targetAttr]: { ...attributes[targetAttr], [position]: value },
			});
		}
	};
	const handleBorderRadiusCombineBtn = () =>
		setAttributes({
			accordionItemBorderRadiusLink: !accordionItemBorderRadiusLink,
		});
	const handleBorderRadiusUnitsHandler = (unit) =>
		setAttributes({
			accordionItemBorderRadiusUnits: {
				...accordionItemBorderRadiusUnits,
				[deviceType]: unit,
			},
		});

	/** Start Global padding helpers */
	const handleGlobalPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (accordionPaddingLink) {
			setAttributes({
				accordionPaddingDesktop: {
					top: value,
					right: value,
					bottom: value,
					left: value,
				},
				accordionPaddingTablet: {
					top: value,
					right: value,
					bottom: value,
					left: value,
				},
				accordionPaddingMobile: {
					top: value,
					right: value,
					bottom: value,
					left: value,
				},
			});
		} else {
			const targetAttr = `accordionPadding${deviceType}`;
			setAttributes({
				[targetAttr]: { ...attributes[targetAttr], [position]: value },
			});
		}
	};
	const handleGlobalPaddingCombineBtn = () =>
		setAttributes({ accordionPaddingLink: !accordionPaddingLink });
	const handleGlobalPaddingUnitsHandler = (unit) =>
		setAttributes({
			accordionPaddingUnits: { ...accordionPaddingUnits, [deviceType]: unit },
		});

	/** Start Global margin helpers */
	const handleGlobalMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (accordionMarginLink) {
			setAttributes({
				accordionMarginDesktop: {
					top: value,
					right: value,
					bottom: value,
					left: value,
				},
				accordionMarginTablet: {
					top: value,
					right: value,
					bottom: value,
					left: value,
				},
				accordionMarginMobile: {
					top: value,
					right: value,
					bottom: value,
					left: value,
				},
			});
		} else {
			const targetAttr = `accordionMargin${deviceType}`;
			setAttributes({
				[targetAttr]: { ...attributes[targetAttr], [position]: value },
			});
		}
	};
	const handleGlobalMarginCombineBtn = () =>
		setAttributes({ accordionMarginLink: !accordionMarginLink });
	const handleGlobalMarginUnitsHandler = (unit) =>
		setAttributes({
			accordionMarginUnits: { ...accordionMarginUnits, [deviceType]: unit },
		});

	/** Update a specific item in the accordionItems array */
	const updateItem = (index, key, value) => {
		const updated = accordionItems.map((item, i) => {
			if (i === index) return { ...item, [key]: value };
			return item;
		});
		setAttributes({ accordionItems: updated });
	};

	/** Add a new item */
	const addItem = () => {
		const newItem = {
			id: `item-${Date.now()}`,
			imageUrl: "",
			imageAlt: "",
			imageID: 0,
			icon: "",
			frontendIcon: "",
			title: "New Item",
			subtitle: "Subtitle here",
			number: `0${accordionItems.length + 1}`,
			buttonText: "Get Started",
			buttonUrl: "",
			buttonTarget: false,
		};
		setAttributes({ accordionItems: [...accordionItems, newItem] });
		setActiveItemIndex(accordionItems.length);
	};

	/** Remove an item */
	const removeItem = (index) => {
		const updated = accordionItems.filter((_, i) => i !== index);
		setAttributes({ accordionItems: updated });
		if (activeItemIndex >= updated.length) {
			setActiveItemIndex(Math.max(0, updated.length - 1));
		}
	};

	const generalControls = (
		<>
			<PanelBody
				title={__("Accordion Settings", "frontis-blocks")}
				initialOpen={true}
			>
				<FB_Presets
					label={__("Preset Style", "frontis-blocks")}
					presets={imageAccordionPresets}
					value={accordionPresetStyle}
					onChangeValue="accordionPresetStyle"
					setAttributes={setAttributes}
				/>
				<BaseControl label={__("Interaction Trigger", "frontis-blocks")}>
					<ButtonGroup className="fb-setting-switcher-panel-btn">
						{TRIGGER_OPTIONS.map((opt) => (
							<Button
								key={opt.value}
								isPrimary={accordionTrigger === opt.value}
								isSecondary={accordionTrigger !== opt.value}
								onClick={() => setAttributes({ accordionTrigger: opt.value })}
							>
								{opt.label}
							</Button>
						))}
					</ButtonGroup>
				</BaseControl>

				<ToggleControl
					label={__("Show Title", "frontis-blocks")}
					checked={accordionShowTitle}
					onChange={(val) => setAttributes({ accordionShowTitle: val })}
				/>
				<ToggleControl
					label={__("Show Subtitle", "frontis-blocks")}
					checked={accordionShowSubtitle}
					onChange={(val) => setAttributes({ accordionShowSubtitle: val })}
				/>
				<ToggleControl
					label={__("Show Number", "frontis-blocks")}
					checked={accordionShowNumber}
					onChange={(val) => setAttributes({ accordionShowNumber: val })}
				/>
				<ToggleControl
					label={__("Show Button", "frontis-blocks")}
					checked={accordionShowButton}
					onChange={(val) => setAttributes({ accordionShowButton: val })}
				/>
				<ToggleControl
					label={__("Show Icon", "frontis-blocks")}
					checked={accordionShowIcon}
					onChange={(val) => setAttributes({ accordionShowIcon: val })}
				/>
				<ToggleControl
					label={__("Show Overlay", "frontis-blocks")}
					checked={accordionShowOverlay}
					onChange={(val) => setAttributes({ accordionShowOverlay: val })}
				/>
			</PanelBody>

			<PanelBody
				title={__("Accordion Items", "frontis-blocks")}
				initialOpen={true}
			>
				<BaseControl label={__("Select Item", "frontis-blocks")}>
					<ButtonGroup
						className="fb-setting-switcher-panel-btn"
						style={{ flexWrap: "wrap", gap: "4px" }}
					>
						{accordionItems.map((item, index) => (
							<Button
								key={item.id || index}
								isPrimary={activeItemIndex === index}
								isSecondary={activeItemIndex !== index}
								onClick={() => setActiveItemIndex(index)}
								style={{ minWidth: "36px" }}
							>
								{index + 1}
							</Button>
						))}
					</ButtonGroup>
				</BaseControl>

				{accordionItems[activeItemIndex] &&
					(() => {
						const item = accordionItems[activeItemIndex];
						return (
							<>
								<BaseControl label={__("Background Image", "frontis-blocks")}>
									<MediaUploadCheck>
										<MediaUpload
											onSelect={(media) => {
												updateItem(activeItemIndex, "imageUrl", media.url);
												updateItem(
													activeItemIndex,
													"imageAlt",
													media.alt || "",
												);
												updateItem(activeItemIndex, "imageID", media.id);
											}}
											allowedTypes={["image"]}
											value={item.imageID}
											render={({ open }) => (
												<div>
													{item.imageUrl ? (
														<div style={{ position: "relative" }}>
															<img
																src={item.imageUrl}
																alt={item.imageAlt}
																style={{
																	width: "100%",
																	borderRadius: "4px",
																	marginBottom: "8px",
																}}
															/>
															<Button
																isDestructive
																isSmall
																onClick={() => {
																	updateItem(activeItemIndex, "imageUrl", "");
																	updateItem(activeItemIndex, "imageAlt", "");
																	updateItem(activeItemIndex, "imageID", 0);
																}}
															>
																{__("Remove Image", "frontis-blocks")}
															</Button>
															<Button
																isSecondary
																isSmall
																onClick={open}
																style={{ marginLeft: "6px" }}
															>
																{__("Replace", "frontis-blocks")}
															</Button>
														</div>
													) : (
														<Button
															isPrimary
															onClick={open}
															style={{ width: "100%" }}
														>
															{__("Upload Image", "frontis-blocks")}
														</Button>
													)}
												</div>
											)}
										/>
									</MediaUploadCheck>
								</BaseControl>

								{accordionShowIcon && (
									<BaseControl label={__("Icon", "frontis-blocks")}>
										<FBIconPicker
											value={item.icon}
											setIconHandler={(val) => {
												updateItem(activeItemIndex, "icon", val);
											}}
										/>
									</BaseControl>
								)}

								{accordionShowNumber && (
									<TextControl
										label={__("Number", "frontis-blocks")}
										value={item.number}
										onChange={(val) =>
											updateItem(activeItemIndex, "number", val)
										}
									/>
								)}
								{accordionShowTitle && (
									<TextControl
										label={__("Title", "frontis-blocks")}
										value={item.title}
										onChange={(val) =>
											updateItem(activeItemIndex, "title", val)
										}
									/>
								)}
								{accordionShowSubtitle && (
									<TextControl
										label={__("Subtitle", "frontis-blocks")}
										value={item.subtitle}
										onChange={(val) =>
											updateItem(activeItemIndex, "subtitle", val)
										}
									/>
								)}

								{accordionShowButton && (
									<>
										<TextControl
											label={__("Button Text", "frontis-blocks")}
											value={item.buttonText}
											onChange={(val) =>
												updateItem(activeItemIndex, "buttonText", val)
											}
										/>
										<TextControl
											label={__("Button URL", "frontis-blocks")}
											value={item.buttonUrl}
											onChange={(val) =>
												updateItem(activeItemIndex, "buttonUrl", val)
											}
										/>
										<ToggleControl
											label={__("Open in New Tab", "frontis-blocks")}
											checked={item.buttonTarget}
											onChange={(val) =>
												updateItem(activeItemIndex, "buttonTarget", val)
											}
										/>
									</>
								)}

								{accordionItems.length > 1 && (
									<Button
										isDestructive
										onClick={() => removeItem(activeItemIndex)}
										style={{ marginTop: "8px" }}
									>
										{__("Remove This Item", "frontis-blocks")}
									</Button>
								)}
							</>
						);
					})()}

				<Button
					isPrimary
					onClick={addItem}
					style={{ width: "100%", marginTop: "12px", justifyContent: "center" }}
				>
					{__("+ Add Item", "frontis-blocks")}
				</Button>
			</PanelBody>
		</>
	);

	const styleControls = (
		<>
			<PanelBody title={__("Layout", "frontis-blocks")} initialOpen={true}>
				<FB_Range
					label={__("Container Height", "frontis-blocks")}
					rangeValue={accordionHeight}
					onChangeHandler={(val) => setAttributes({ accordionHeight: val })}
					rangeUnitHandler={(val) =>
						setAttributes({ accordionHeightUnits: val })
					}
					deviceType={deviceType}
					units={accordionHeightUnits}
					setAttributes={setAttributes}
					min={100}
					max={1000}
					resetFallbackValue=""
				/>
				<FB_Range
					label={__("Active Item Width", "frontis-blocks")}
					rangeValue={accordionActiveWidth}
					onChangeHandler={(val) =>
						setAttributes({ accordionActiveWidth: val })
					}
					rangeUnitHandler={(val) =>
						setAttributes({ accordionActiveWidthUnits: val })
					}
					deviceType={deviceType}
					units={accordionActiveWidthUnits}
					setAttributes={setAttributes}
					min={20}
					max={90}
					resetFallbackValue=""
				/>
				<FB_Range
					label={__("Gap Between Items", "frontis-blocks")}
					rangeValue={accordionGap}
					onChangeHandler={(val) => setAttributes({ accordionGap: val })}
					rangeUnitHandler={(val) => setAttributes({ accordionGapUnits: val })}
					deviceType={deviceType}
					units={accordionGapUnits}
					setAttributes={setAttributes}
					min={0}
					max={50}
					resetFallbackValue=""
				/>
				<RangeControl
					label={__("Transition Speed (ms)", "frontis-blocks")}
					value={accordionTransitionSpeed}
					onChange={(val) => setAttributes({ accordionTransitionSpeed: val })}
					min={100}
					max={2000}
					step={50}
				/>
			</PanelBody>

			<PanelBody
				title={__("Border Radius", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleBorderRadiusUnitsHandler}
					spacingUnits={accordionItemBorderRadiusUnits}
					spacingDesktop={accordionItemBorderRadiusDesktop}
					spacingTablet={accordionItemBorderRadiusTablet}
					spacingMobile={accordionItemBorderRadiusMobile}
					handleSpacingUnitHandler={handleBorderRadiusUnitChange}
					spacingCombineBtn={accordionItemBorderRadiusLink}
					spacingCombineBtnHandler={handleBorderRadiusCombineBtn}
					setAttributes={setAttributes}
				/>
			</PanelBody>

			<PanelBody title={__("Overlay", "frontis-blocks")} initialOpen={false}>
				<FB_ColorControl
					label={__("Overlay Color", "frontis-blocks")}
					globalColor={accordionOverlayColor}
					setGlobalColor={(val) =>
						setAttributes({ accordionOverlayColor: val })
					}
				/>
				<FB_ColorControl
					label={__("Overlay Color (Active)", "frontis-blocks")}
					globalColor={accordionOverlayActiveColor}
					setGlobalColor={(val) =>
						setAttributes({ accordionOverlayActiveColor: val })
					}
				/>
			</PanelBody>

			<PanelBody title={__("Title", "frontis-blocks")} initialOpen={false}>
				<FB_ColorControl
					label={__("Title Color", "frontis-blocks")}
					globalColor={accordionTitleColor}
					setGlobalColor={(val) => setAttributes({ accordionTitleColor: val })}
				/>
				<FB_Range
					label={__("Font Size", "frontis-blocks")}
					rangeValue={accordionTitleFontSize}
					onChangeHandler={(val) =>
						setAttributes({ accordionTitleFontSize: val })
					}
					rangeUnitHandler={(val) =>
						setAttributes({ accordionTitleFontSizeUnits: val })
					}
					deviceType={deviceType}
					units={accordionTitleFontSizeUnits}
					setAttributes={setAttributes}
					min={10}
					max={72}
					resetFallbackValue=""
				/>
				<SelectControl
					label={__("Font Weight", "frontis-blocks")}
					value={accordionTitleFontWeight}
					options={fbConstants.FONT_WEIGHT}
					onChange={(val) => setAttributes({ accordionTitleFontWeight: val })}
				/>
			</PanelBody>

			<PanelBody title={__("Subtitle", "frontis-blocks")} initialOpen={false}>
				<FB_ColorControl
					label={__("Subtitle Color", "frontis-blocks")}
					globalColor={accordionSubtitleColor}
					setGlobalColor={(val) =>
						setAttributes({ accordionSubtitleColor: val })
					}
				/>
				<FB_Range
					label={__("Font Size", "frontis-blocks")}
					rangeValue={accordionSubtitleFontSize}
					onChangeHandler={(val) =>
						setAttributes({ accordionSubtitleFontSize: val })
					}
					rangeUnitHandler={(val) =>
						setAttributes({ accordionSubtitleFontSizeUnits: val })
					}
					deviceType={deviceType}
					units={accordionSubtitleFontSizeUnits}
					setAttributes={setAttributes}
					min={10}
					max={36}
					resetFallbackValue=""
				/>
			</PanelBody>

			<PanelBody title={__("Number", "frontis-blocks")} initialOpen={false}>
				<FB_ColorControl
					label={__("Number Color", "frontis-blocks")}
					globalColor={accordionNumberColor}
					setGlobalColor={(val) => setAttributes({ accordionNumberColor: val })}
				/>
				<FB_Range
					label={__("Font Size", "frontis-blocks")}
					rangeValue={accordionNumberFontSize}
					onChangeHandler={(val) =>
						setAttributes({ accordionNumberFontSize: val })
					}
					rangeUnitHandler={(val) =>
						setAttributes({ accordionNumberFontSizeUnits: val })
					}
					deviceType={deviceType}
					units={accordionNumberFontSizeUnits}
					setAttributes={setAttributes}
					min={10}
					max={48}
					resetFallbackValue=""
				/>
			</PanelBody>

			<PanelBody title={__("Icon", "frontis-blocks")} initialOpen={false}>
				<FB_Range
					label={__("Icon Size", "frontis-blocks")}
					rangeValue={accordionIconSize}
					onChangeHandler={(val) => setAttributes({ accordionIconSize: val })}
					rangeUnitHandler={(val) =>
						setAttributes({ accordionIconSizeUnits: val })
					}
					deviceType={deviceType}
					units={accordionIconSizeUnits}
					setAttributes={setAttributes}
					min={12}
					max={80}
					resetFallbackValue=""
				/>
				<FB_ColorControl
					label={__("Icon Color", "frontis-blocks")}
					globalColor={accordionIconColor}
					setGlobalColor={(val) => setAttributes({ accordionIconColor: val })}
				/>
				<FB_ColorControl
					label={__("Icon Background", "frontis-blocks")}
					globalColor={accordionIconBgColor}
					setGlobalColor={(val) => setAttributes({ accordionIconBgColor: val })}
				/>
			</PanelBody>

			<PanelBody title={__("Button", "frontis-blocks")} initialOpen={false}>
				<FB_ColorControl
					label={__("Button Text Color", "frontis-blocks")}
					globalColor={accordionButtonColor}
					setGlobalColor={(val) => setAttributes({ accordionButtonColor: val })}
				/>
				<FB_ColorControl
					label={__("Button Background", "frontis-blocks")}
					globalColor={accordionButtonBgColor}
					setGlobalColor={(val) =>
						setAttributes({ accordionButtonBgColor: val })
					}
				/>
				<FB_ColorControl
					label={__("Button Text Color (Hover)", "frontis-blocks")}
					globalColor={accordionButtonHoverColor}
					setGlobalColor={(val) =>
						setAttributes({ accordionButtonHoverColor: val })
					}
				/>
				<FB_ColorControl
					label={__("Button Background (Hover)", "frontis-blocks")}
					globalColor={accordionButtonHoverBgColor}
					setGlobalColor={(val) =>
						setAttributes({ accordionButtonHoverBgColor: val })
					}
				/>
				<FB_Range
					label={__("Button Font Size", "frontis-blocks")}
					rangeValue={accordionButtonFontSize}
					onChangeHandler={(val) =>
						setAttributes({ accordionButtonFontSize: val })
					}
					rangeUnitHandler={(val) =>
						setAttributes({ accordionButtonFontSizeUnits: val })
					}
					deviceType={deviceType}
					units={accordionButtonFontSizeUnits}
					setAttributes={setAttributes}
					min={10}
					max={32}
					resetFallbackValue=""
				/>
			</PanelBody>

			<PanelBody title={__("Box Shadow", "frontis-blocks")} initialOpen={false}>
				<FB_SwitcherControl
					label={__("Box Shadow", "frontis-blocks")}
					globalSwitcher={accordionBoxShadowSwitcher}
					setGlobalSwitcher={(val) =>
						setAttributes({ accordionBoxShadowSwitcher: val })
					}
				/>
				{accordionBoxShadowSwitcher === "normal" && (
					<FB_BoxShadowControl
						label={__("Normal Shadow", "frontis-blocks")}
						initialShadowValue={accordionBoxShadowValues}
						onBoxShadowChange={(val) =>
							setAttributes({ accordionBoxShadowValues: val })
						}
						onBoxShadowStyleChange={(val) =>
							setAttributes({ accordionBoxShadowCssValue: val })
						}
					/>
				)}
				{accordionBoxShadowSwitcher === "hover" && (
					<FB_BoxShadowControl
						label={__("Hover Shadow", "frontis-blocks")}
						initialShadowValue={accordionBoxShadowHoverValues}
						onBoxShadowChange={(val) =>
							setAttributes({ accordionBoxShadowHoverValues: val })
						}
						onBoxShadowStyleChange={(val) =>
							setAttributes({ accordionBoxShadowHoverCssValue: val })
						}
					/>
				)}
			</PanelBody>
		</>
	);

	const advancedControls = (
		<>
			<PanelBody title={__("Padding", "frontis-blocks")} initialOpen={false}>
				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
					spacingUnits={accordionPaddingUnits}
					spacingDesktop={accordionPaddingDesktop}
					spacingTablet={accordionPaddingTablet}
					spacingMobile={accordionPaddingMobile}
					handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
					spacingCombineBtn={accordionPaddingLink}
					spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
					setAttributes={setAttributes}
				/>
			</PanelBody>

			<PanelBody title={__("Margin", "frontis-blocks")} initialOpen={false}>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleGlobalMarginUnitsHandler}
					spacingUnits={accordionMarginUnits}
					spacingDesktop={accordionMarginDesktop}
					spacingTablet={accordionMarginTablet}
					spacingMobile={accordionMarginMobile}
					handleSpacingUnitHandler={handleGlobalMarginUnitChange}
					spacingCombineBtn={accordionMarginLink}
					spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
					setAttributes={setAttributes}
				/>
			</PanelBody>

			<PanelBody
				title={__("Responsive Visibility", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_VisibilityControl
					desktopValue={accordionDesktopSwitcher}
					setDesktopValue={(val) =>
						setAttributes({ accordionDesktopSwitcher: val })
					}
					tabletValue={accordionTabletSwitcher}
					setTabletValue={(val) =>
						setAttributes({ accordionTabletSwitcher: val })
					}
					mobileValue={accordionMobileSwitcher}
					setMobileValue={(val) =>
						setAttributes({ accordionMobileSwitcher: val })
					}
				/>
			</PanelBody>

			<PanelBody title={__("Z-Index", "frontis-blocks")} initialOpen={false}>
				<FB_Range
					label={__("Z-Index", "frontis-blocks")}
					rangeValue={accordionGlobalZIndex}
					onChangeHandler={(val) =>
						setAttributes({ accordionGlobalZIndex: val })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
					min={0}
					max={9999}
					resetFallbackValue=""
					isRangeUnit={false}
				/>
			</PanelBody>

			<PanelBody title={__("Custom CSS", "frontis-blocks")} initialOpen={false}>
				<FB_CustomCSSEditor
					value={accordionCustomCSS}
					onChangeValue={(val) => setAttributes({ accordionCustomCSS: val })}
				/>
			</PanelBody>

			<PanelBody
				title={__("CSS Class & ID", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_InputControl
					label={__("HTML Anchor (ID)", "frontis-blocks")}
					value={accordionWraperID}
					onChangeValue={(val) => setAttributes({ accordionWraperID: val })}
				/>
				<FB_InputControl
					label={__("Additional CSS Class", "frontis-blocks")}
					value={accordionWraperClass}
					onChangeValue={(val) => setAttributes({ accordionWraperClass: val })}
				/>
			</PanelBody>
		</>
	);

	return (
		<FB_InspectorControls
			generalControls={generalControls}
			styleControls={styleControls}
			advancedControls={advancedControls}
		/>
	);
};

export default memo(Inspector);
