import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	RangeControl,
	__experimentalItemGroup as ItemGroup,
	__experimentalItem as Item,
	__experimentalHStack as HStack,
	Flex,
	FlexItem,
	Button,
	ButtonGroup,
	BaseControl,
	Dashicon,
	TextControl,
} from "@wordpress/components";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";

import { useState, memo } from "@wordpress/element";
import { useDeviceType } from "@Config/displayType";

import FB_Spacing from "@Components/spacing";
import FB_Range from "@Components/range";
import FB_ColorControl from "@Components/color-control";
import FB_SwitcherControl from "@Components/switcher-control";
import FB_InputControl from "@Components/input-control";
import FB_IconPicker from "@Components/icon-picker";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_TypographyControl from "@Components/typography-control";
import SortableItem from "./sortableItem";
import { BORDER_STYLES } from "@Constants/fbConstants";

import { imageAccordionPresets } from "./presets";
import "./editor.scss";

const pluginURL =
	typeof frontis_blocks_params !== "undefined"
		? frontis_blocks_params.plugin_url
		: typeof FrontisBlocksData !== "undefined"
		? FrontisBlocksData.pluginUrl
		: "";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		imageAccordionPreset,
		imageAccordionTrigger,
		imageAccordionItems,

		imageAccordionWidth,
		imageAccordionWidthUnits,
		imageAccordionHeight,
		imageAccordionHeightUnits,

		imageAccordionGap,
		imageAccordionGapUnits,

		imageAccordionItemBorderRadiusUnits,
		imageAccordionItemBorderRadiusDesktop,
		imageAccordionItemBorderRadiusTablet,
		imageAccordionItemBorderRadiusMobile,
		imageAccordionItemBorderRadiusLink,

		imageAccordionOverlayColor,
		imageAccordionOverlayHoverColor,

		imageAccordionShowDots,
		imageAccordionDotColor,
		imageAccordionDotSize,
		imageAccordionDotSizeUnits,

		imageAccordionShowNumber,
		imageAccordionNumberColor,
		imageAccordionNumberHoverColor,
		imageAccordionNumberFontSize,
		imageAccordionNumberFontSizeUnits,
		imageAccordionNumberFontWeight,

		imageAccordionIconColor,
		imageAccordionIconHoverColor,
		imageAccordionIconSize,
		imageAccordionIconSizeUnits,
		imageAccordionIconCircleBgColor,
		imageAccordionIconCircleSize,
		imageAccordionIconCircleSizeUnits,

		imageAccordionTitleColor,
		imageAccordionTitleHoverColor,
		imageAccordionTitleFontSize,
		imageAccordionTitleFontSizeUnits,
		imageAccordionTitleFontWeight,
		imageAccordionTitleLineHeight,
		imageAccordionTitleLineHeightUnits,

		imageAccordionSubtitleColor,
		imageAccordionSubtitleHoverColor,
		imageAccordionSubtitleFontSize,
		imageAccordionSubtitleFontSizeUnits,
		imageAccordionSubtitleFontWeight,

		imageAccordionBtnTextColor,
		imageAccordionBtnHoverTextColor,
		imageAccordionBtnBgColor,
		imageAccordionBtnHoverBgColor,
		imageAccordionBtnBorderColor,
		imageAccordionBtnBorder,
		imageAccordionBtnBorderRadiusUnits,
		imageAccordionBtnBorderRadiusDesktop,
		imageAccordionBtnPaddingUnits,
		imageAccordionBtnPaddingDesktop,
		imageAccordionBtnFontSize,
		imageAccordionBtnFontSizeUnits,
		imageAccordionBtnFontWeight,

		imageAccordionPaddingUnits,
		imageAccordionPaddingDesktop,
		imageAccordionPaddingTablet,
		imageAccordionPaddingMobile,
		imageAccordionPaddingLink,

		imageAccordionMarginUnits,
		imageAccordionMarginDesktop,
		imageAccordionMarginTablet,
		imageAccordionMarginMobile,
		imageAccordionMarginLink,

		imageAccordionGlobalZIndex,
		imageAccordionCustomCSS,
		imageAccordionWraperID,
		imageAccordionWraperClass,

		imageAccordionDesktopSwitcher,
		imageAccordionTabletSwitcher,
		imageAccordionMobileSwitcher,
	} = attributes;

	const deviceType = useDeviceType();
	const [openItemIndex, setOpenItemIndex] = useState(null);
	const [borderColorTab, setBorderColorTab] = useState("normal");
	const [btnColorTab, setBtnColorTab] = useState("normal");
	const [iconColorTab, setIconColorTab] = useState("normal");
	const [titleColorTab, setTitleColorTab] = useState("normal");
	const [overlayColorTab, setOverlayColorTab] = useState("normal");
	const [numberColorTab, setNumberColorTab] = useState("normal");

	/** Apply preset */
	const applyPreset = (preset) => {
		const presetData = imageAccordionPresets.find((p) => p.value === preset);
		if (!presetData) return;
		const newAttrs = { imageAccordionPreset: preset };
		presetData.attributes.forEach(({ label, value }) => {
			newAttrs[label] = value;
		});
		setAttributes(newAttrs);
	};

	/** Item handlers */
	const updateItem = (id, key, value) => {
		const newItems = imageAccordionItems.map((item) =>
			item.id === id ? { ...item, [key]: value } : item,
		);
		setAttributes({ imageAccordionItems: newItems });
	};

	const duplicateItem = (id) => {
		const itemToDuplicate = imageAccordionItems.find((i) => i.id === id);
		if (!itemToDuplicate) return;
		const newItem = { ...itemToDuplicate, id: "item-" + Date.now() };
		const newItems = [...imageAccordionItems, newItem];
		setAttributes({ imageAccordionItems: newItems });
	};

	const addItem = () => {
		const newItem = {
			id: "item-" + Date.now(),
			image: {
				url: `${pluginURL}assets/images/preset-bg.jpg`,
				id: "",
			},
			title: "New Item",
			subTitle: "",
			mediaType: "icon",
			selectedIcon: "star",
			selectedImage: { url: "", id: "" },
			buttonText: "Read More",
			buttonUrl: "#",
			buttonTarget: false,
			buttonNofollow: false,
		};
		setAttributes({ imageAccordionItems: [...imageAccordionItems, newItem] });
	};

	const removeItem = (id) => {
		const newItems = imageAccordionItems.filter((i) => i.id !== id);
		setAttributes({ imageAccordionItems: newItems });
	};

	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (active && over && active.id !== over.id) {
			const oldIndex = imageAccordionItems.findIndex((i) => i.id === active.id);
			const newIndex = imageAccordionItems.findIndex((i) => i.id === over.id);
			setAttributes({
				imageAccordionItems: arrayMove(imageAccordionItems, oldIndex, newIndex),
			});
		}
	};

	/** Padding handlers */
	const paddingUnitsChange = (event, position) => {
		const value = event.target.value;
		if (imageAccordionPaddingLink) {
			const padded = { top: value, right: value, bottom: value, left: value };
			if (deviceType === "Desktop")
				setAttributes({ imageAccordionPaddingDesktop: padded });
			else if (deviceType === "Tablet")
				setAttributes({ imageAccordionPaddingTablet: padded });
			else setAttributes({ imageAccordionPaddingMobile: padded });
		} else {
			if (deviceType === "Desktop")
				setAttributes({
					imageAccordionPaddingDesktop: {
						...imageAccordionPaddingDesktop,
						[position]: value,
					},
				});
			else if (deviceType === "Tablet")
				setAttributes({
					imageAccordionPaddingTablet: {
						...imageAccordionPaddingTablet,
						[position]: value,
					},
				});
			else
				setAttributes({
					imageAccordionPaddingMobile: {
						...imageAccordionPaddingMobile,
						[position]: value,
					},
				});
		}
	};

	const marginUnitsChange = (event, position) => {
		const value = event.target.value;
		if (imageAccordionMarginLink) {
			const margined = { top: value, right: value, bottom: value, left: value };
			if (deviceType === "Desktop")
				setAttributes({ imageAccordionMarginDesktop: margined });
			else if (deviceType === "Tablet")
				setAttributes({ imageAccordionMarginTablet: margined });
			else setAttributes({ imageAccordionMarginMobile: margined });
		} else {
			if (deviceType === "Desktop")
				setAttributes({
					imageAccordionMarginDesktop: {
						...imageAccordionMarginDesktop,
						[position]: value,
					},
				});
			else if (deviceType === "Tablet")
				setAttributes({
					imageAccordionMarginTablet: {
						...imageAccordionMarginTablet,
						[position]: value,
					},
				});
			else
				setAttributes({
					imageAccordionMarginMobile: {
						...imageAccordionMarginMobile,
						[position]: value,
					},
				});
		}
	};

	const borderRadiusChange = (event, position) => {
		const value = event.target.value;
		if (imageAccordionItemBorderRadiusLink) {
			const val = { top: value, right: value, bottom: value, left: value };
			if (deviceType === "Desktop")
				setAttributes({ imageAccordionItemBorderRadiusDesktop: val });
			else if (deviceType === "Tablet")
				setAttributes({ imageAccordionItemBorderRadiusTablet: val });
			else setAttributes({ imageAccordionItemBorderRadiusMobile: val });
		} else {
			if (deviceType === "Desktop")
				setAttributes({
					imageAccordionItemBorderRadiusDesktop: {
						...imageAccordionItemBorderRadiusDesktop,
						[position]: value,
					},
				});
			else if (deviceType === "Tablet")
				setAttributes({
					imageAccordionItemBorderRadiusTablet: {
						...imageAccordionItemBorderRadiusTablet,
						[position]: value,
					},
				});
			else
				setAttributes({
					imageAccordionItemBorderRadiusMobile: {
						...imageAccordionItemBorderRadiusMobile,
						[position]: value,
					},
				});
		}
	};

	const generalControls = (
		<>
			<PanelBody
				title={__("Preset Style", "frontis-blocks")}
				initialOpen={true}
			>
				<div className="fb-image-accordion-presets">
					{imageAccordionPresets.map((preset) => (
						<div
							key={preset.value}
							className={`fb-preset-item ${
								imageAccordionPreset === preset.value ? "is-active" : ""
							}`}
							onClick={() => applyPreset(preset.value)}
							title={preset.label}
						>
							<div
								className="fb-preset-icon"
								dangerouslySetInnerHTML={{ __html: preset.icon }}
							/>
							<span className="fb-preset-label">{preset.label}</span>
						</div>
					))}
				</div>
			</PanelBody>

			<PanelBody title={__("Settings", "frontis-blocks")} initialOpen={true}>
				<SelectControl
					label={__("Trigger On", "frontis-blocks")}
					value={imageAccordionTrigger}
					options={[
						{ label: __("Hover", "frontis-blocks"), value: "hover" },
						{ label: __("Click", "frontis-blocks"), value: "click" },
					]}
					onChange={(value) => setAttributes({ imageAccordionTrigger: value })}
				/>
			</PanelBody>

			{/* Accordion Items */}
			<PanelBody
				title={__("Accordion Items", "frontis-blocks")}
				initialOpen={true}
			>
				<div className="fb-feature-wrapper">
					<DndContext
						collisionDetection={closestCenter}
						onDragEnd={handleDragEnd}
					>
						<SortableContext items={imageAccordionItems.map((i) => i.id)}>
							<ul className="dnd-items-wrapper">
								{imageAccordionItems.map((item, index) => (
									<SortableItem
										key={item.id}
										id={item.id}
										item={item}
										index={index}
										imageAccordionPreset={imageAccordionPreset}
										updateItem={updateItem}
										removeItem={removeItem}
										duplicateItem={duplicateItem}
									/>
								))}
							</ul>
						</SortableContext>
					</DndContext>
				</div>
				<Button
					variant="secondary"
					onClick={addItem}
					className="fb-add-item-btn"
					icon="plus"
				>
					{__("Add Item", "frontis-blocks")}
				</Button>
			</PanelBody>
		</>
	);

	// ========================
	// STYLE TAB
	// ========================
	const styleControls = (
		<>
			{/* General / Container */}
			<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
				<FB_Range
					label={__("Width", "frontis-blocks")}
					min={0}
					max={imageAccordionWidthUnits[deviceType] === "%" ? 100 : 1600}
					rangeValue={imageAccordionWidth}
					onChangeHandler={(value) =>
						setAttributes({ imageAccordionWidth: value })
					}
					rangeUnitHandler={(value) =>
						setAttributes({ imageAccordionWidthUnits: value })
					}
					deviceType={deviceType}
					units={imageAccordionWidthUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
				<FB_Range
					label={__("Height", "frontis-blocks")}
					min={0}
					max={imageAccordionHeightUnits[deviceType] === "%" ? 100 : 1200}
					rangeValue={imageAccordionHeight}
					onChangeHandler={(value) =>
						setAttributes({ imageAccordionHeight: value })
					}
					rangeUnitHandler={(value) =>
						setAttributes({ imageAccordionHeightUnits: value })
					}
					deviceType={deviceType}
					units={imageAccordionHeightUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
				{/* Gap — hide for preset-2 (seamless) */}
				{imageAccordionPreset !== "preset-2" &&
					imageAccordionPreset !== "preset-4" && (
						<FB_Range
							label={__("Gap", "frontis-blocks")}
							min={0}
							max={100}
							rangeValue={imageAccordionGap}
							onChangeHandler={(value) =>
								setAttributes({ imageAccordionGap: value })
							}
							rangeUnitHandler={(value) =>
								setAttributes({ imageAccordionGapUnits: value })
							}
							deviceType={deviceType}
							units={imageAccordionGapUnits}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
						/>
					)}

				{/* Item Border Radius */}
				<FB_Spacing
					label={__("Item Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={(unit) =>
						setAttributes({
							imageAccordionItemBorderRadiusUnits: {
								...imageAccordionItemBorderRadiusUnits,
								[deviceType]: unit,
							},
						})
					}
					spacingUnits={imageAccordionItemBorderRadiusUnits}
					spacingDesktop={imageAccordionItemBorderRadiusDesktop}
					spacingTablet={imageAccordionItemBorderRadiusTablet}
					spacingMobile={imageAccordionItemBorderRadiusMobile}
					handleSpacingUnitHandler={borderRadiusChange}
					spacingCombineBtn={imageAccordionItemBorderRadiusLink}
					spacingCombineBtnHandler={() =>
						setAttributes({
							imageAccordionItemBorderRadiusLink:
								!imageAccordionItemBorderRadiusLink,
						})
					}
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={(unit) =>
						setAttributes({
							imageAccordionPaddingUnits: {
								...imageAccordionPaddingUnits,
								[deviceType]: unit,
							},
						})
					}
					spacingUnits={imageAccordionPaddingUnits}
					spacingDesktop={imageAccordionPaddingDesktop}
					spacingTablet={imageAccordionPaddingTablet}
					spacingMobile={imageAccordionPaddingMobile}
					handleSpacingUnitHandler={paddingUnitsChange}
					spacingCombineBtn={imageAccordionPaddingLink}
					spacingCombineBtnHandler={() =>
						setAttributes({
							imageAccordionPaddingLink: !imageAccordionPaddingLink,
						})
					}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={(unit) =>
						setAttributes({
							imageAccordionMarginUnits: {
								...imageAccordionMarginUnits,
								[deviceType]: unit,
							},
						})
					}
					spacingUnits={imageAccordionMarginUnits}
					spacingDesktop={imageAccordionMarginDesktop}
					spacingTablet={imageAccordionMarginTablet}
					spacingMobile={imageAccordionMarginMobile}
					handleSpacingUnitHandler={marginUnitsChange}
					spacingCombineBtn={imageAccordionMarginLink}
					spacingCombineBtnHandler={() =>
						setAttributes({
							imageAccordionMarginLink: !imageAccordionMarginLink,
						})
					}
					setAttributes={setAttributes}
				/>
			</PanelBody>

			{/* Overlay */}
			<PanelBody title={__("Overlay", "frontis-blocks")} initialOpen={false}>
				<FB_SwitcherControl
					label={__("Overlay Color", "frontis-blocks")}
					globalSwitcher={overlayColorTab}
					setGlobalSwitcher={setOverlayColorTab}
				/>
				{overlayColorTab === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={imageAccordionOverlayColor}
						setGlobalColor={(value) =>
							setAttributes({ imageAccordionOverlayColor: value ?? "" })
						}
					/>
				)}
				{overlayColorTab === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={imageAccordionOverlayHoverColor}
						setGlobalColor={(value) =>
							setAttributes({ imageAccordionOverlayHoverColor: value ?? "" })
						}
					/>
				)}
			</PanelBody>

			{/* Typography */}
			<PanelBody title={__("Typography", "frontis-blocks")} initialOpen={false}>
				{/* Title */}
				<p className="fb-section-label">
					<strong>{__("Title", "frontis-blocks")}</strong>
				</p>
				<FB_Range
					label={__("Font Size", "frontis-blocks")}
					min={0}
					max={100}
					rangeValue={imageAccordionTitleFontSize}
					onChangeHandler={(value) =>
						setAttributes({ imageAccordionTitleFontSize: value })
					}
					rangeUnitHandler={(value) =>
						setAttributes({ imageAccordionTitleFontSizeUnits: value })
					}
					deviceType={deviceType}
					units={imageAccordionTitleFontSizeUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
				<SelectControl
					label={__("Font Weight", "frontis-blocks")}
					value={imageAccordionTitleFontWeight}
					options={[
						{ label: "Default", value: "" },
						{ label: "400", value: "400" },
						{ label: "500", value: "500" },
						{ label: "600", value: "600" },
						{ label: "700", value: "700" },
						{ label: "800", value: "800" },
					]}
					onChange={(value) =>
						setAttributes({ imageAccordionTitleFontWeight: value })
					}
				/>
				<FB_SwitcherControl
					label={__("Title Color", "frontis-blocks")}
					globalSwitcher={titleColorTab}
					setGlobalSwitcher={setTitleColorTab}
				/>
				{titleColorTab === "normal" && (
					<FB_ColorControl
						label={__("Color", "frontis-blocks")}
						globalColor={imageAccordionTitleColor}
						setGlobalColor={(value) =>
							setAttributes({ imageAccordionTitleColor: value ?? "" })
						}
					/>
				)}
				{titleColorTab === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={imageAccordionTitleHoverColor}
						setGlobalColor={(value) =>
							setAttributes({ imageAccordionTitleHoverColor: value ?? "" })
						}
					/>
				)}

				{/* Subtitle */}
				<p className="fb-section-label" style={{ marginTop: "16px" }}>
					<strong>{__("Subtitle", "frontis-blocks")}</strong>
				</p>
				<FB_Range
					label={__("Font Size", "frontis-blocks")}
					min={0}
					max={100}
					rangeValue={imageAccordionSubtitleFontSize}
					onChangeHandler={(value) =>
						setAttributes({ imageAccordionSubtitleFontSize: value })
					}
					rangeUnitHandler={(value) =>
						setAttributes({ imageAccordionSubtitleFontSizeUnits: value })
					}
					deviceType={deviceType}
					units={imageAccordionSubtitleFontSizeUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
				<SelectControl
					label={__("Font Weight", "frontis-blocks")}
					value={imageAccordionSubtitleFontWeight}
					options={[
						{ label: "Default", value: "" },
						{ label: "400", value: "400" },
						{ label: "500", value: "500" },
						{ label: "600", value: "600" },
					]}
					onChange={(value) =>
						setAttributes({ imageAccordionSubtitleFontWeight: value })
					}
				/>
				<FB_ColorControl
					label={__("Subtitle Color", "frontis-blocks")}
					globalColor={imageAccordionSubtitleColor}
					setGlobalColor={(value) =>
						setAttributes({ imageAccordionSubtitleColor: value ?? "" })
					}
				/>
			</PanelBody>

			{/* Icon — Preset 1 only */}
			{imageAccordionPreset === "preset-1" && (
				<PanelBody title={__("Icon", "frontis-blocks")} initialOpen={false}>
					<FB_ColorControl
						label={__("Circle Background", "frontis-blocks")}
						globalColor={imageAccordionIconCircleBgColor}
						setGlobalColor={(value) =>
							setAttributes({ imageAccordionIconCircleBgColor: value ?? "" })
						}
					/>
					<FB_Range
						label={__("Circle Size", "frontis-blocks")}
						min={20}
						max={120}
						rangeValue={imageAccordionIconCircleSize}
						onChangeHandler={(value) =>
							setAttributes({ imageAccordionIconCircleSize: value })
						}
						rangeUnitHandler={(value) =>
							setAttributes({ imageAccordionIconCircleSizeUnits: value })
						}
						deviceType={deviceType}
						units={imageAccordionIconCircleSizeUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>
					<FB_SwitcherControl
						label={__("Icon Color", "frontis-blocks")}
						globalSwitcher={iconColorTab}
						setGlobalSwitcher={setIconColorTab}
					/>
					{iconColorTab === "normal" && (
						<FB_ColorControl
							label={__("Color", "frontis-blocks")}
							globalColor={imageAccordionIconColor}
							setGlobalColor={(value) =>
								setAttributes({ imageAccordionIconColor: value ?? "" })
							}
						/>
					)}
					{iconColorTab === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={imageAccordionIconHoverColor}
							setGlobalColor={(value) =>
								setAttributes({ imageAccordionIconHoverColor: value ?? "" })
							}
						/>
					)}
					<FB_Range
						label={__("Icon Size", "frontis-blocks")}
						min={10}
						max={100}
						rangeValue={imageAccordionIconSize}
						onChangeHandler={(value) =>
							setAttributes({ imageAccordionIconSize: value })
						}
						rangeUnitHandler={(value) =>
							setAttributes({ imageAccordionIconSizeUnits: value })
						}
						deviceType={deviceType}
						units={imageAccordionIconSizeUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>
				</PanelBody>
			)}

			{/* Dots — Preset 2 only */}
			{imageAccordionPreset === "preset-2" && (
				<PanelBody
					title={__("Overlay Dots", "frontis-blocks")}
					initialOpen={false}
				>
					<ToggleControl
						label={__("Show Dots", "frontis-blocks")}
						checked={imageAccordionShowDots}
						onChange={(value) =>
							setAttributes({ imageAccordionShowDots: value })
						}
					/>
					{imageAccordionShowDots && (
						<>
							<FB_ColorControl
								label={__("Dot Color", "frontis-blocks")}
								globalColor={imageAccordionDotColor}
								setGlobalColor={(value) =>
									setAttributes({ imageAccordionDotColor: value ?? "" })
								}
							/>
							<FB_Range
								label={__("Dot Size", "frontis-blocks")}
								min={4}
								max={50}
								rangeValue={imageAccordionDotSize}
								onChangeHandler={(value) =>
									setAttributes({ imageAccordionDotSize: value })
								}
								rangeUnitHandler={(value) =>
									setAttributes({ imageAccordionDotSizeUnits: value })
								}
								deviceType={deviceType}
								units={imageAccordionDotSizeUnits}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={""}
							/>
						</>
					)}
				</PanelBody>
			)}

			{/* Number — Preset 2 & 4 */}
			{(imageAccordionPreset === "preset-2" ||
				imageAccordionPreset === "preset-4") && (
				<PanelBody
					title={__("Item Number", "frontis-blocks")}
					initialOpen={false}
				>
					<ToggleControl
						label={__("Show Number", "frontis-blocks")}
						checked={imageAccordionShowNumber}
						onChange={(value) =>
							setAttributes({ imageAccordionShowNumber: value })
						}
					/>
					{imageAccordionShowNumber && (
						<>
							<FB_Range
								label={__("Font Size", "frontis-blocks")}
								min={8}
								max={72}
								rangeValue={imageAccordionNumberFontSize}
								onChangeHandler={(value) =>
									setAttributes({ imageAccordionNumberFontSize: value })
								}
								rangeUnitHandler={(value) =>
									setAttributes({ imageAccordionNumberFontSizeUnits: value })
								}
								deviceType={deviceType}
								units={imageAccordionNumberFontSizeUnits}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={""}
							/>
							<SelectControl
								label={__("Font Weight", "frontis-blocks")}
								value={imageAccordionNumberFontWeight}
								options={[
									{ label: "Default", value: "" },
									{ label: "400", value: "400" },
									{ label: "500", value: "500" },
									{ label: "600", value: "600" },
									{ label: "700", value: "700" },
								]}
								onChange={(value) =>
									setAttributes({ imageAccordionNumberFontWeight: value })
								}
							/>
							<FB_SwitcherControl
								label={__("Number Color", "frontis-blocks")}
								globalSwitcher={numberColorTab}
								setGlobalSwitcher={setNumberColorTab}
							/>
							{numberColorTab === "normal" && (
								<FB_ColorControl
									label={__("Color", "frontis-blocks")}
									globalColor={imageAccordionNumberColor}
									setGlobalColor={(value) =>
										setAttributes({ imageAccordionNumberColor: value ?? "" })
									}
								/>
							)}
							{numberColorTab === "hover" && (
								<FB_ColorControl
									label={__("Hover Color", "frontis-blocks")}
									globalColor={imageAccordionNumberHoverColor}
									setGlobalColor={(value) =>
										setAttributes({
											imageAccordionNumberHoverColor: value ?? "",
										})
									}
								/>
							)}
						</>
					)}
				</PanelBody>
			)}

			{/* Button — Preset 3 only */}
			{imageAccordionPreset === "preset-3" && (
				<PanelBody title={__("Button", "frontis-blocks")} initialOpen={false}>
					<FB_Range
						label={__("Font Size", "frontis-blocks")}
						min={8}
						max={48}
						rangeValue={imageAccordionBtnFontSize}
						onChangeHandler={(value) =>
							setAttributes({ imageAccordionBtnFontSize: value })
						}
						rangeUnitHandler={(value) =>
							setAttributes({ imageAccordionBtnFontSizeUnits: value })
						}
						deviceType={deviceType}
						units={imageAccordionBtnFontSizeUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>
					<SelectControl
						label={__("Font Weight", "frontis-blocks")}
						value={imageAccordionBtnFontWeight}
						options={[
							{ label: "Default", value: "" },
							{ label: "400", value: "400" },
							{ label: "500", value: "500" },
							{ label: "600", value: "600" },
						]}
						onChange={(value) =>
							setAttributes({ imageAccordionBtnFontWeight: value })
						}
					/>
					<FB_SwitcherControl
						label={__("Button Color", "frontis-blocks")}
						globalSwitcher={btnColorTab}
						setGlobalSwitcher={setBtnColorTab}
					/>
					{btnColorTab === "normal" && (
						<>
							<FB_ColorControl
								label={__("Text Color", "frontis-blocks")}
								globalColor={imageAccordionBtnTextColor}
								setGlobalColor={(value) =>
									setAttributes({ imageAccordionBtnTextColor: value ?? "" })
								}
							/>
							<FB_ColorControl
								label={__("Background Color", "frontis-blocks")}
								globalColor={imageAccordionBtnBgColor}
								setGlobalColor={(value) =>
									setAttributes({ imageAccordionBtnBgColor: value ?? "" })
								}
							/>
						</>
					)}
					{btnColorTab === "hover" && (
						<>
							<FB_ColorControl
								label={__("Text Hover Color", "frontis-blocks")}
								globalColor={imageAccordionBtnHoverTextColor}
								setGlobalColor={(value) =>
									setAttributes({
										imageAccordionBtnHoverTextColor: value ?? "",
									})
								}
							/>
							<FB_ColorControl
								label={__("Background Hover Color", "frontis-blocks")}
								globalColor={imageAccordionBtnHoverBgColor}
								setGlobalColor={(value) =>
									setAttributes({ imageAccordionBtnHoverBgColor: value ?? "" })
								}
							/>
						</>
					)}
					<SelectControl
						label={__("Border Style", "frontis-blocks")}
						value={imageAccordionBtnBorder}
						options={BORDER_STYLES}
						onChange={(value) =>
							setAttributes({ imageAccordionBtnBorder: value })
						}
					/>
					{imageAccordionBtnBorder !== "none" && (
						<FB_ColorControl
							label={__("Border Color", "frontis-blocks")}
							globalColor={imageAccordionBtnBorderColor}
							setGlobalColor={(value) =>
								setAttributes({ imageAccordionBtnBorderColor: value ?? "" })
							}
						/>
					)}
					<FB_Spacing
						label={__("Border Radius", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={(unit) =>
							setAttributes({
								imageAccordionBtnBorderRadiusUnits: {
									...imageAccordionBtnBorderRadiusUnits,
									[deviceType]: unit,
								},
							})
						}
						spacingUnits={imageAccordionBtnBorderRadiusUnits}
						spacingDesktop={imageAccordionBtnBorderRadiusDesktop}
						spacingTablet={imageAccordionBtnBorderRadiusDesktop}
						spacingMobile={imageAccordionBtnBorderRadiusDesktop}
						handleSpacingUnitHandler={(e, position) => {
							const value = e.target.value;
							setAttributes({
								imageAccordionBtnBorderRadiusDesktop: {
									...imageAccordionBtnBorderRadiusDesktop,
									[position]: value,
								},
							});
						}}
						spacingCombineBtn={true}
						spacingCombineBtnHandler={() => {}}
						setAttributes={setAttributes}
					/>
					<FB_Spacing
						label={__("Padding", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={(unit) =>
							setAttributes({
								imageAccordionBtnPaddingUnits: {
									...imageAccordionBtnPaddingUnits,
									[deviceType]: unit,
								},
							})
						}
						spacingUnits={imageAccordionBtnPaddingUnits}
						spacingDesktop={imageAccordionBtnPaddingDesktop}
						spacingTablet={imageAccordionBtnPaddingDesktop}
						spacingMobile={imageAccordionBtnPaddingDesktop}
						handleSpacingUnitHandler={(e, position) => {
							const value = e.target.value;
							setAttributes({
								imageAccordionBtnPaddingDesktop: {
									...imageAccordionBtnPaddingDesktop,
									[position]: value,
								},
							});
						}}
						spacingCombineBtn={false}
						spacingCombineBtnHandler={() => {}}
						setAttributes={setAttributes}
					/>
				</PanelBody>
			)}
		</>
	);

	// ========================
	// ADVANCED TAB
	// ========================
	const advancedControls = (
		<>
			<PanelBody title={__("Layout", "frontis-blocks")} initialOpen={true}>
				<FB_Range
					min={0}
					max={10000000}
					label={__("Z Index", "frontis-blocks")}
					rangeValue={imageAccordionGlobalZIndex}
					onChangeHandler={(value) =>
						setAttributes({
							imageAccordionGlobalZIndex: value === 0 ? undefined : value,
						})
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
					isRangeUnit={false}
				/>
				<FB_InputControl
					label={__("CSS ID", "frontis-blocks")}
					value={imageAccordionWraperID}
					onChangeValue={(value) =>
						setAttributes({ imageAccordionWraperID: value })
					}
					helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
				/>
				<FB_InputControl
					label={__("CSS Class", "frontis-blocks")}
					value={imageAccordionWraperClass}
					onChangeValue={(value) =>
						setAttributes({ imageAccordionWraperClass: value })
					}
					helpText={__("Separate with spaces.", "frontis-blocks")}
				/>
			</PanelBody>

			<PanelBody
				title={__("Responsive Visibility", "frontis-blocks")}
				initialOpen={false}
			>
				<ToggleControl
					label={__("Hide on Desktop", "frontis-blocks")}
					checked={imageAccordionDesktopSwitcher}
					onChange={(value) =>
						setAttributes({ imageAccordionDesktopSwitcher: value })
					}
				/>
				<ToggleControl
					label={__("Hide on Tablet", "frontis-blocks")}
					checked={imageAccordionTabletSwitcher}
					onChange={(value) =>
						setAttributes({ imageAccordionTabletSwitcher: value })
					}
				/>
				<ToggleControl
					label={__("Hide on Mobile", "frontis-blocks")}
					checked={imageAccordionMobileSwitcher}
					onChange={(value) =>
						setAttributes({ imageAccordionMobileSwitcher: value })
					}
				/>
			</PanelBody>

			<PanelBody title={__("Custom CSS", "frontis-blocks")} initialOpen={false}>
				<FB_CustomCSSEditor
					value={imageAccordionCustomCSS}
					onChangeValue={(value) =>
						setAttributes({ imageAccordionCustomCSS: value })
					}
				/>
			</PanelBody>
		</>
	);

	return (
		<>
			<FB_InspectorControls
				generalControls={generalControls}
				styleControls={styleControls}
				advancedControls={advancedControls}
			/>
		</>
	);
};

export default memo(Inspector);
