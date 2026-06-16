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
import FB_BackgroundColorControl from "@Components/background-color-control";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import FB_PositionControl from "@Components/position-control";
import FB_VisibilityControl from "@Components/visibility-control";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_TypographyControl from "@Components/typography-control";
import FB_Presets from "@Components/presets";
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

const Inspector = ({ attributes, setAttributes, clientId }) => {
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

		imageAccordionShowTitle,
		imageAccordionShowSubtitle,
		imageAccordionShowIcon,
		imageAccordionShowButton,
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

		imageAccordionTitleFontFamily,
		imageAccordionTitleFontStyle,
		imageAccordionTitleTransform,
		imageAccordionTitleDecoration,
		imageAccordionTitleLetterSpacing,
		imageAccordionTitleLetterSpacingUnits,
		imageAccordionTitleGlobalTypographyData,
		imageAccordionTitleTypoType,
		imageAccordionTitleTypoOption,

		imageAccordionSubtitleColor,
		imageAccordionSubtitleHoverColor,
		imageAccordionSubtitleFontSize,
		imageAccordionSubtitleFontSizeUnits,
		imageAccordionSubtitleFontWeight,
		imageAccordionSubtitleLineHeight,
		imageAccordionSubtitleLineHeightUnits,

		imageAccordionSubtitleFontFamily,
		imageAccordionSubtitleFontStyle,
		imageAccordionSubtitleTransform,
		imageAccordionSubtitleDecoration,
		imageAccordionSubtitleLetterSpacing,
		imageAccordionSubtitleLetterSpacingUnits,
		imageAccordionSubtitleGlobalTypographyData,
		imageAccordionSubtitleTypoType,
		imageAccordionSubtitleTypoOption,

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
		imageAccordionBtnLineHeight,
		imageAccordionBtnLineHeightUnits,

		imageAccordionBtnFontFamily,
		imageAccordionBtnFontStyle,
		imageAccordionBtnTransform,
		imageAccordionBtnDecoration,
		imageAccordionBtnLetterSpacing,
		imageAccordionBtnLetterSpacingUnits,
		imageAccordionBtnGlobalTypographyData,
		imageAccordionBtnTypoType,
		imageAccordionBtnTypoOption,

		imageAccordionPaddingUnits,
		imageAccordionPaddingDesktop,
		imageAccordionPaddingTablet,
		imageAccordionPaddingMobile,
		imageAccordionPaddingLink,

		imageAccordionItemPaddingUnits,
		imageAccordionItemPaddingDesktop,
		imageAccordionItemPaddingTablet,
		imageAccordionItemPaddingMobile,
		imageAccordionItemPaddingLink,

		imageAccordionMarginUnits,
		imageAccordionMarginDesktop,
		imageAccordionMarginTablet,
		imageAccordionMarginMobile,
		imageAccordionMarginLink,

		imageAccordionItemMarginUnits,
		imageAccordionItemMarginDesktop,
		imageAccordionItemMarginTablet,
		imageAccordionItemMarginMobile,
		imageAccordionItemMarginLink,

		imageAccordionBgColorSwitcher,
		imageAccordionBackgroundType,
		imageAccordionClassicColor,
		imageAccordionGradientColor,
		imageAccordionCustomGradientSwitcher,
		imageAccordionCustomGradientInputValue,
		imageAccordionBackgroundImageUrl,
		imageAccordionBackgroundImageAlt,
		imageAccordionBackgroundImageID,
		imageAccordionBackgroundImagePosition,
		imageAccordionBackgroundImageAttachment,
		imageAccordionBackgroundImageRepeat,
		imageAccordionBackgroundImageSize,
		imageAccordionHoverBackgroundType,
		imageAccordionHoverClassicColor,
		imageAccordionHoverGradientColor,
		imageAccordionHoverCustomGradientSwitcher,
		imageAccordionHoverCustomGradientInputValue,
		imageAccordionHoverBackgroundImageUrl,
		imageAccordionHoverBackgroundImageAlt,
		imageAccordionHoverBackgroundImageID,
		imageAccordionHoverBackgroundImagePosition,
		imageAccordionHoverBackgroundImageAttachment,
		imageAccordionHoverBackgroundImageRepeat,
		imageAccordionHoverBackgroundImageSize,

		imageAccordionWrapperBorder,
		imageAccordionWrapperBorderColorSwitcher,
		imageAccordionWrapperBorderColor,
		imageAccordionWrapperBorderHoverColor,
		imageAccordionWrapperBorderTypeUnits,
		imageAccordionWrapperBorderTypeDesktop,
		imageAccordionWrapperBorderTypeTablet,
		imageAccordionWrapperBorderTypeMobile,
		imageAccordionWrapperBorderTypeLink,
		imageAccordionWrapperBorderRadiusUnits,
		imageAccordionWrapperBorderRadiusDesktop,
		imageAccordionWrapperBorderRadiusTablet,
		imageAccordionWrapperBorderRadiusMobile,
		imageAccordionWrapperBorderRadiusLink,

		imageAccordionGlobalZIndex,
		imageAccordionCustomCSS,
		imageAccordionWraperID,
		imageAccordionWraperClass,

		imageAccordionPositionType,
		imageAccordionHZOrientationType,
		imageAccordionVROrientationType,
		imageAccordionHZLeftOffset,
		imageAccordionHZLeftOffsetUnits,
		imageAccordionHZRightOffset,
		imageAccordionHZRightOffsetUnits,
		imageAccordionVRTopOffset,
		imageAccordionVRTopOffsetUnits,
		imageAccordionVRBottomOffset,
		imageAccordionVRBottomOffsetUnits,
		imageAccordionOverflow,

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
	const [subtitleColorTab, setSubtitleColorTab] = useState("normal");

	/** Item handlers */
	const updateItem = (id, keyOrUpdates, value) => {
		const latestAttributes = wp.data
			.select("core/block-editor")
			.getBlockAttributes(clientId);
		const latestItems =
			latestAttributes?.imageAccordionItems || imageAccordionItems;

		const newItems = latestItems.map((item) => {
			if (item.id === id) {
				if (typeof keyOrUpdates === "object") {
					return { ...item, ...keyOrUpdates };
				}
				const key = keyOrUpdates;
				const updatedValue =
					typeof value === "object" && !Array.isArray(value) && item[key]
						? { ...item[key], ...value }
						: value;
				return { ...item, [key]: updatedValue };
			}
			return item;
		});
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
				alt: "",
				position: "center center",
				attachment: "scroll",
				repeat: "no-repeat",
				size: "cover",
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

	/** Item Padding handlers */
	const handleItemPaddingUnitHandler = (event, position) => {
		const value = event.target.value;
		const update = imageAccordionItemPaddingLink
			? { top: value, right: value, bottom: value, left: value }
			: {
					...attributes[`imageAccordionItemPadding${deviceType}`],
					[position]: value,
			  };
		setAttributes({ [`imageAccordionItemPadding${deviceType}`]: update });
	};

	const itemPaddingCombineBtnHandler = () => {
		setAttributes({
			imageAccordionItemPaddingLink: !imageAccordionItemPaddingLink,
		});
	};

	const itemPaddingUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionItemPaddingUnits: {
				...imageAccordionItemPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Item Margin handlers */
	const handleItemMarginUnitHandler = (event, position) => {
		const value = event.target.value;
		const update = imageAccordionItemMarginLink
			? { top: value, right: value, bottom: value, left: value }
			: {
					...attributes[`imageAccordionItemMargin${deviceType}`],
					[position]: value,
			  };
		setAttributes({ [`imageAccordionItemMargin${deviceType}`]: update });
	};

	const itemMarginCombineBtnHandler = () => {
		setAttributes({
			imageAccordionItemMarginLink: !imageAccordionItemMarginLink,
		});
	};

	const itemMarginUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionItemMarginUnits: {
				...imageAccordionItemMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Wrapper Padding handlers */
	const handleWrapperPaddingUnitHandler = (event, position) => {
		const value = event.target.value;
		const update = imageAccordionPaddingLink
			? { top: value, right: value, bottom: value, left: value }
			: {
					...attributes[`imageAccordionPadding${deviceType}`],
					[position]: value,
			  };
		setAttributes({ [`imageAccordionPadding${deviceType}`]: update });
	};

	const wrapperPaddingCombineBtnHandler = () => {
		setAttributes({ imageAccordionPaddingLink: !imageAccordionPaddingLink });
	};

	const wrapperPaddingUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionPaddingUnits: {
				...imageAccordionPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Wrapper Margin handlers */
	const handleWrapperMarginUnitHandler = (event, position) => {
		const value = event.target.value;
		const update = imageAccordionMarginLink
			? { top: value, right: value, bottom: value, left: value }
			: {
					...attributes[`imageAccordionMargin${deviceType}`],
					[position]: value,
			  };
		setAttributes({ [`imageAccordionMargin${deviceType}`]: update });
	};

	const wrapperMarginCombineBtnHandler = () => {
		setAttributes({ imageAccordionMarginLink: !imageAccordionMarginLink });
	};

	const wrapperMarginUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionMarginUnits: {
				...imageAccordionMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Border Radius handlers */
	const handleBorderRadiusUnitHandler = (event, position) => {
		const value = event.target.value;
		const update = imageAccordionItemBorderRadiusLink
			? { top: value, right: value, bottom: value, left: value }
			: {
					...attributes[`imageAccordionItemBorderRadius${deviceType}`],
					[position]: value,
			  };
		setAttributes({ [`imageAccordionItemBorderRadius${deviceType}`]: update });
	};

	const borderRadiusCombineBtnHandler = () => {
		setAttributes({
			imageAccordionItemBorderRadiusLink: !imageAccordionItemBorderRadiusLink,
		});
	};

	const borderRadiusUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionItemBorderRadiusUnits: {
				...imageAccordionItemBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Wrapper Border Type handlers */
	const handleWrapperBorderUnitHandler = (event, position) => {
		const value = event.target.value;
		const update = imageAccordionWrapperBorderTypeLink
			? { top: value, right: value, bottom: value, left: value }
			: {
					...attributes[`imageAccordionWrapperBorderType${deviceType}`],
					[position]: value,
			  };
		setAttributes({ [`imageAccordionWrapperBorderType${deviceType}`]: update });
	};

	const wrapperBorderCombineBtnHandler = () => {
		setAttributes({
			imageAccordionWrapperBorderTypeLink: !imageAccordionWrapperBorderTypeLink,
		});
	};

	const wrapperBorderUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionWrapperBorderTypeUnits: {
				...imageAccordionWrapperBorderTypeUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Wrapper Border Radius handlers */
	const handleWrapperBorderRadiusUnitHandler = (event, position) => {
		const value = event.target.value;
		const update = imageAccordionWrapperBorderRadiusLink
			? { top: value, right: value, bottom: value, left: value }
			: {
					...attributes[`imageAccordionWrapperBorderRadius${deviceType}`],
					[position]: value,
			  };
		setAttributes({
			[`imageAccordionWrapperBorderRadius${deviceType}`]: update,
		});
	};

	const wrapperBorderRadiusCombineBtnHandler = () => {
		setAttributes({
			imageAccordionWrapperBorderRadiusLink:
				!imageAccordionWrapperBorderRadiusLink,
		});
	};

	const wrapperBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionWrapperBorderRadiusUnits: {
				...imageAccordionWrapperBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const generalControls = (
		<>
			<PanelBody
				title={__("Preset Style", "frontis-blocks")}
				initialOpen={true}
			>
				<FB_Presets
					className="fb-image-accordion-presets"
					label={__("Select Preset", "frontis-blocks")}
					presets={imageAccordionPresets}
					value={imageAccordionPreset}
					onChangeValue="imageAccordionPreset"
					defaultPresetValue="preset-1"
					setAttributes={setAttributes}
				/>
				<ToggleControl
					label={__("Show Title", "frontis-blocks")}
					checked={imageAccordionShowTitle}
					onChange={(value) =>
						setAttributes({ imageAccordionShowTitle: value })
					}
				/>
				<ToggleControl
					label={__("Show Subtitle", "frontis-blocks")}
					checked={imageAccordionShowSubtitle}
					onChange={(value) =>
						setAttributes({ imageAccordionShowSubtitle: value })
					}
				/>
				{imageAccordionPreset === "preset-3" && (
					<ToggleControl
						label={__("Show Button", "frontis-blocks")}
						checked={imageAccordionShowButton}
						onChange={(value) =>
							setAttributes({ imageAccordionShowButton: value })
						}
					/>
				)}
				{imageAccordionPreset === "preset-1" && (
					<ToggleControl
						label={__("Show Icon", "frontis-blocks")}
						checked={imageAccordionShowIcon}
						onChange={(value) =>
							setAttributes({ imageAccordionShowIcon: value })
						}
					/>
				)}
				{imageAccordionPreset === "preset-2" && (
					<ToggleControl
						label={__("Show Dots", "frontis-blocks")}
						checked={imageAccordionShowDots}
						onChange={(value) =>
							setAttributes({ imageAccordionShowDots: value })
						}
					/>
				)}
				{(imageAccordionPreset === "preset-2" ||
					imageAccordionPreset === "preset-4") && (
					<ToggleControl
						label={__("Show Number", "frontis-blocks")}
						checked={imageAccordionShowNumber}
						onChange={(value) =>
							setAttributes({ imageAccordionShowNumber: value })
						}
					/>
				)}
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
				{/* Gap hide for preset-2 (seamless) */}
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

				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={itemPaddingUnitsHandler}
					spacingUnits={imageAccordionItemPaddingUnits}
					spacingDesktop={imageAccordionItemPaddingDesktop}
					spacingTablet={imageAccordionItemPaddingTablet}
					spacingMobile={imageAccordionItemPaddingMobile}
					handleSpacingUnitHandler={handleItemPaddingUnitHandler}
					spacingCombineBtn={imageAccordionItemPaddingLink}
					spacingCombineBtnHandler={itemPaddingCombineBtnHandler}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={itemMarginUnitsHandler}
					spacingUnits={imageAccordionItemMarginUnits}
					spacingDesktop={imageAccordionItemMarginDesktop}
					spacingTablet={imageAccordionItemMarginTablet}
					spacingMobile={imageAccordionItemMarginMobile}
					handleSpacingUnitHandler={handleItemMarginUnitHandler}
					spacingCombineBtn={imageAccordionItemMarginLink}
					spacingCombineBtnHandler={itemMarginCombineBtnHandler}
					setAttributes={setAttributes}
				/>
			</PanelBody>
			{/* Item Style */}
			<PanelBody title={__("Item", "frontis-blocks")} initialOpen={false}>
				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={borderRadiusUnitsHandler}
					spacingUnits={imageAccordionItemBorderRadiusUnits}
					spacingDesktop={imageAccordionItemBorderRadiusDesktop}
					spacingTablet={imageAccordionItemBorderRadiusTablet}
					spacingMobile={imageAccordionItemBorderRadiusMobile}
					handleSpacingUnitHandler={handleBorderRadiusUnitHandler}
					spacingCombineBtn={imageAccordionItemBorderRadiusLink}
					spacingCombineBtnHandler={borderRadiusCombineBtnHandler}
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
			{/* Title */}
			{imageAccordionShowTitle && (
				<PanelBody title={__("Title", "frontis-blocks")} initialOpen={false}>
					<FB_TypographyControl
						label={__("Typography", "frontis-blocks")}
						fontFamily={imageAccordionTitleFontFamily}
						onChangeFontFamily={(value) =>
							setAttributes({ imageAccordionTitleFontFamily: value })
						}
						fontSize={imageAccordionTitleFontSize}
						onChangeFontSize={(value) =>
							setAttributes({ imageAccordionTitleFontSize: value })
						}
						fontSizeUnits={imageAccordionTitleFontSizeUnits}
						onChangeFontSizeUnit={(value) =>
							setAttributes({ imageAccordionTitleFontSizeUnits: value })
						}
						fontWeight={imageAccordionTitleFontWeight}
						onChangeFontWeight={(value) =>
							setAttributes({ imageAccordionTitleFontWeight: value })
						}
						fontStyle={imageAccordionTitleFontStyle}
						onChangeFontStyle={(value) =>
							setAttributes({ imageAccordionTitleFontStyle: value })
						}
						textTransform={imageAccordionTitleTransform}
						onChangeTextTransform={(value) =>
							setAttributes({ imageAccordionTitleTransform: value })
						}
						textDecoration={imageAccordionTitleDecoration}
						onChangeTextDecoration={(value) =>
							setAttributes({ imageAccordionTitleDecoration: value })
						}
						letterSpacing={imageAccordionTitleLetterSpacing}
						onChangeLetterSpacing={(value) =>
							setAttributes({ imageAccordionTitleLetterSpacing: value })
						}
						letterSpacingUnits={imageAccordionTitleLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) =>
							setAttributes({ imageAccordionTitleLetterSpacingUnits: value })
						}
						lineHeight={imageAccordionTitleLineHeight}
						onChangeLineHeight={(value) =>
							setAttributes({ imageAccordionTitleLineHeight: value })
						}
						lineHeightUnits={imageAccordionTitleLineHeightUnits}
						onChangeLineHeightUnit={(value) =>
							setAttributes({ imageAccordionTitleLineHeightUnits: value })
						}
						globalTypoType={imageAccordionTitleTypoType}
						onChangeGlobalTypoType={(value) =>
							setAttributes({ imageAccordionTitleTypoType: value })
						}
						globalTypoOption={imageAccordionTitleTypoOption}
						onChangeGlobalTypoOption={(value) =>
							setAttributes({ imageAccordionTitleTypoOption: value })
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
						globalTypoControlActive={true}
						storeGlobalTypographyData={(value) =>
							setAttributes({ imageAccordionTitleGlobalTypographyData: value })
						}
					/>
					<FB_SwitcherControl
						label={__("Color", "frontis-blocks")}
						globalSwitcher={titleColorTab}
						setGlobalSwitcher={setTitleColorTab}
					/>
					{titleColorTab === "normal" && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
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
				</PanelBody>
			)}
			{/* Subtitle */}
			<PanelBody title={__("Subtitle", "frontis-blocks")} initialOpen={false}>
				<FB_TypographyControl
					label={__("Typography", "frontis-blocks")}
					fontFamily={imageAccordionSubtitleFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({ imageAccordionSubtitleFontFamily: value })
					}
					fontSize={imageAccordionSubtitleFontSize}
					onChangeFontSize={(value) =>
						setAttributes({ imageAccordionSubtitleFontSize: value })
					}
					fontSizeUnits={imageAccordionSubtitleFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({ imageAccordionSubtitleFontSizeUnits: value })
					}
					fontWeight={imageAccordionSubtitleFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({ imageAccordionSubtitleFontWeight: value })
					}
					fontStyle={imageAccordionSubtitleFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({ imageAccordionSubtitleFontStyle: value })
					}
					textTransform={imageAccordionSubtitleTransform}
					onChangeTextTransform={(value) =>
						setAttributes({ imageAccordionSubtitleTransform: value })
					}
					textDecoration={imageAccordionSubtitleDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({ imageAccordionSubtitleDecoration: value })
					}
					letterSpacing={imageAccordionSubtitleLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({ imageAccordionSubtitleLetterSpacing: value })
					}
					letterSpacingUnits={imageAccordionSubtitleLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({ imageAccordionSubtitleLetterSpacingUnits: value })
					}
					lineHeight={imageAccordionSubtitleLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({ imageAccordionSubtitleLineHeight: value })
					}
					lineHeightUnits={imageAccordionSubtitleLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({ imageAccordionSubtitleLineHeightUnits: value })
					}
					globalTypoType={imageAccordionSubtitleTypoType}
					onChangeGlobalTypoType={(value) =>
						setAttributes({ imageAccordionSubtitleTypoType: value })
					}
					globalTypoOption={imageAccordionSubtitleTypoOption}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({ imageAccordionSubtitleTypoOption: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
					globalTypoControlActive={true}
					storeGlobalTypographyData={(value) =>
						setAttributes({ imageAccordionSubtitleGlobalTypographyData: value })
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
					<FB_TypographyControl
						label={__("Button Typography", "frontis-blocks")}
						fontFamily={imageAccordionBtnFontFamily}
						onChangeFontFamily={(value) =>
							setAttributes({ imageAccordionBtnFontFamily: value })
						}
						fontSize={imageAccordionBtnFontSize}
						onChangeFontSize={(value) =>
							setAttributes({ imageAccordionBtnFontSize: value })
						}
						fontSizeUnits={imageAccordionBtnFontSizeUnits}
						onChangeFontSizeUnit={(value) =>
							setAttributes({ imageAccordionBtnFontSizeUnits: value })
						}
						fontWeight={imageAccordionBtnFontWeight}
						onChangeFontWeight={(value) =>
							setAttributes({ imageAccordionBtnFontWeight: value })
						}
						fontStyle={imageAccordionBtnFontStyle}
						onChangeFontStyle={(value) =>
							setAttributes({ imageAccordionBtnFontStyle: value })
						}
						textTransform={imageAccordionBtnTransform}
						onChangeTextTransform={(value) =>
							setAttributes({ imageAccordionBtnTransform: value })
						}
						textDecoration={imageAccordionBtnDecoration}
						onChangeTextDecoration={(value) =>
							setAttributes({ imageAccordionBtnDecoration: value })
						}
						letterSpacing={imageAccordionBtnLetterSpacing}
						onChangeLetterSpacing={(value) =>
							setAttributes({ imageAccordionBtnLetterSpacing: value })
						}
						letterSpacingUnits={imageAccordionBtnLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) =>
							setAttributes({ imageAccordionBtnLetterSpacingUnits: value })
						}
						lineHeight={imageAccordionBtnLineHeight}
						onChangeLineHeight={(value) =>
							setAttributes({ imageAccordionBtnLineHeight: value })
						}
						globalTypoType={imageAccordionBtnTypoType}
						onChangeGlobalTypoType={(value) =>
							setAttributes({ imageAccordionBtnTypoType: value })
						}
						globalTypoOption={imageAccordionBtnTypoOption}
						onChangeGlobalTypoOption={(value) =>
							setAttributes({ imageAccordionBtnTypoOption: value })
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
						globalTypoControlActive={true}
						storeGlobalTypographyData={(value) =>
							setAttributes({ imageAccordionBtnGlobalTypographyData: value })
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
						spacingCombineBtn={imageAccordionItemBorderRadiusLink}
						spacingCombineBtnHandler={borderRadiusCombineBtnHandler}
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
						spacingCombineBtn={imageAccordionItemPaddingLink}
						spacingCombineBtnHandler={itemPaddingCombineBtnHandler}
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
			<div className="fb-setting-advanced-tab-wrapper">
				<div className="fb-setting-inner-wrapper">
					<PanelBody
						title={__("Layout", "frontis-blocks")}
						initialOpen={true}
						className="fb-setting-layout-header"
					>
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

						{/* <SelectControl
							label={__("Overflow", "frontis-blocks")}
							value={imageAccordionOverflow}
							options={OVERFLOW_OP}
							onChange={(value) =>
								setAttributes({ imageAccordionOverflow: value })
							}
						/> */}

						<FB_PositionControl
							deviceType={deviceType}
							positionType={imageAccordionPositionType}
							setPositionType={(value) =>
								setAttributes({ imageAccordionPositionType: value })
							}
							HZOrientationType={imageAccordionHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ imageAccordionHZOrientationType: value })
							}
							VROrientationType={imageAccordionVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ imageAccordionVROrientationType: value })
							}
							HZLeftOffset={imageAccordionHZLeftOffset}
							setHZLeftOffset={(value) =>
								setAttributes({ imageAccordionHZLeftOffset: value })
							}
							HZLeftOffsetUnits={imageAccordionHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) =>
								setAttributes({ imageAccordionHZLeftOffsetUnits: value })
							}
							HZRightOffset={imageAccordionHZRightOffset}
							setHZRightOffset={(value) =>
								setAttributes({ imageAccordionHZRightOffset: value })
							}
							HZRightOffsetUnits={imageAccordionHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) =>
								setAttributes({ imageAccordionHZRightOffsetUnits: value })
							}
							VRTopOffset={imageAccordionVRTopOffset}
							setVRTopOffset={(value) =>
								setAttributes({ imageAccordionVRTopOffset: value })
							}
							VRTopOffsetUnits={imageAccordionVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) =>
								setAttributes({ imageAccordionVRTopOffsetUnits: value })
							}
							VRBottomOffset={imageAccordionVRBottomOffset}
							setVRBottomOffset={(value) =>
								setAttributes({ imageAccordionVRBottomOffset: value })
							}
							VRBottomOffsetUnits={imageAccordionVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) =>
								setAttributes({ imageAccordionVRBottomOffsetUnits: value })
							}
							setAttributes={setAttributes}
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
							helpText={__("Separate with spaces key.", "frontis-blocks")}
						/>
					</PanelBody>
					<PanelBody
						title={__("Background", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_BackgroundColorControl
							bgColorSwitcher={imageAccordionBgColorSwitcher}
							setBgColorSwitcher={(value) =>
								setAttributes({ imageAccordionBgColorSwitcher: value })
							}
							normalBackgroundType={imageAccordionBackgroundType}
							setNormalBackgroundType={(value) =>
								setAttributes({ imageAccordionBackgroundType: value })
							}
							normalClassicColor={imageAccordionClassicColor}
							setNormalClassicColor={(value) =>
								setAttributes({
									imageAccordionClassicColor: value === undefined ? "" : value,
								})
							}
							normalGradientColor={imageAccordionGradientColor}
							setNormalGradientColor={(value) =>
								setAttributes({
									imageAccordionGradientColor:
										value === undefined ? null : value,
								})
							}
							normalCustomGradientSwitcher={
								imageAccordionCustomGradientSwitcher
							}
							setNormalCustomGradientSwitcher={(value) =>
								setAttributes({ imageAccordionCustomGradientSwitcher: value })
							}
							normalCustomGradientInputValue={
								imageAccordionCustomGradientInputValue
							}
							setNormalCustomGradientInputValue={(value) =>
								setAttributes({ imageAccordionCustomGradientInputValue: value })
							}
							normalBackgroundImageUrl={imageAccordionBackgroundImageUrl}
							setNormalBackgroundImageUrl={(value) =>
								setAttributes({ imageAccordionBackgroundImageUrl: value })
							}
							normalBackgroundImageAlt={imageAccordionBackgroundImageAlt}
							setNormalBackgroundImageAlt={(value) =>
								setAttributes({ imageAccordionBackgroundImageAlt: value })
							}
							normalBackgroundImageID={imageAccordionBackgroundImageID}
							setNormalBackgroundImageID={(value) =>
								setAttributes({ imageAccordionBackgroundImageID: value })
							}
							normalBackgroundImagePosition={
								imageAccordionBackgroundImagePosition
							}
							setNormalBackgroundImagePosition={(value) =>
								setAttributes({ imageAccordionBackgroundImagePosition: value })
							}
							normalBackgroundImageAttachment={
								imageAccordionBackgroundImageAttachment
							}
							setNormalBackgroundImageAttachment={(value) =>
								setAttributes({
									imageAccordionBackgroundImageAttachment: value,
								})
							}
							normalBackgroundImageRepeat={imageAccordionBackgroundImageRepeat}
							setNormalBackgroundImageRepeat={(value) =>
								setAttributes({ imageAccordionBackgroundImageRepeat: value })
							}
							normalBackgroundImageSize={imageAccordionBackgroundImageSize}
							setNormalBackgroundImageSize={(value) =>
								setAttributes({ imageAccordionBackgroundImageSize: value })
							}
							hoverBackgroundType={imageAccordionHoverBackgroundType}
							setHoverBackgroundType={(value) =>
								setAttributes({ imageAccordionHoverBackgroundType: value })
							}
							hoverClassicColor={imageAccordionHoverClassicColor}
							setHoverClassicColor={(value) =>
								setAttributes({
									imageAccordionHoverClassicColor:
										value === undefined ? "" : value,
								})
							}
							hoverGradientColor={imageAccordionHoverGradientColor}
							setHoverGradientColor={(value) =>
								setAttributes({
									imageAccordionHoverGradientColor:
										value === undefined ? null : value,
								})
							}
							hoverCustomGradientSwitcher={
								imageAccordionHoverCustomGradientSwitcher
							}
							setHoverCustomGradientSwitcher={(value) =>
								setAttributes({
									imageAccordionHoverCustomGradientSwitcher: value,
								})
							}
							hoverCustomGradientInputValue={
								imageAccordionHoverCustomGradientInputValue
							}
							setHoverCustomGradientInputValue={(value) =>
								setAttributes({
									imageAccordionHoverCustomGradientInputValue: value,
								})
							}
							hoverBackgroundImageUrl={imageAccordionHoverBackgroundImageUrl}
							setHoverBackgroundImageUrl={(value) =>
								setAttributes({ imageAccordionHoverBackgroundImageUrl: value })
							}
							hoverBackgroundImageAlt={imageAccordionHoverBackgroundImageAlt}
							setHoverBackgroundImageAlt={(value) =>
								setAttributes({ imageAccordionHoverBackgroundImageAlt: value })
							}
							hoverBackgroundImageID={imageAccordionHoverBackgroundImageID}
							setHoverBackgroundImageID={(value) =>
								setAttributes({ imageAccordionHoverBackgroundImageID: value })
							}
							hoverBackgroundImagePosition={
								imageAccordionHoverBackgroundImagePosition
							}
							setHoverBackgroundImagePosition={(value) =>
								setAttributes({
									imageAccordionHoverBackgroundImagePosition: value,
								})
							}
							hoverBackgroundImageAttachment={
								imageAccordionHoverBackgroundImageAttachment
							}
							setHoverBackgroundImageAttachment={(value) =>
								setAttributes({
									imageAccordionHoverBackgroundImageAttachment: value,
								})
							}
							hoverBackgroundImageRepeat={
								imageAccordionHoverBackgroundImageRepeat
							}
							setHoverBackgroundImageRepeat={(value) =>
								setAttributes({
									imageAccordionHoverBackgroundImageRepeat: value,
								})
							}
							hoverBackgroundImageSize={imageAccordionHoverBackgroundImageSize}
							setHoverBackgroundImageSize={(value) =>
								setAttributes({ imageAccordionHoverBackgroundImageSize: value })
							}
						/>
					</PanelBody>
					<PanelBody title={__("Border", "frontis-blocks")} initialOpen={false}>
						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={imageAccordionWrapperBorder}
							options={BORDER_STYLES}
							onChange={(value) =>
								setAttributes({ imageAccordionWrapperBorder: value })
							}
						/>
						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={imageAccordionWrapperBorderColorSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({
									imageAccordionWrapperBorderColorSwitcher: value,
								})
							}
						/>

						{imageAccordionWrapperBorderColorSwitcher === "normal" && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={imageAccordionWrapperBorderColor}
								setGlobalColor={(value) =>
									setAttributes({
										imageAccordionWrapperBorderColor:
											value === undefined ? "" : value,
									})
								}
							/>
						)}

						{imageAccordionWrapperBorderColorSwitcher === "hover" && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={imageAccordionWrapperBorderHoverColor}
								setGlobalColor={(value) =>
									setAttributes({
										imageAccordionWrapperBorderHoverColor:
											value === undefined ? "" : value,
									})
								}
							/>
						)}
						<FB_Spacing
							label={"Border Width"}
							deviceType={deviceType}
							spacingUnitsHandler={wrapperBorderUnitsHandler}
							spacingUnits={imageAccordionWrapperBorderTypeUnits}
							spacingDesktop={imageAccordionWrapperBorderTypeDesktop}
							spacingTablet={imageAccordionWrapperBorderTypeTablet}
							spacingMobile={imageAccordionWrapperBorderTypeMobile}
							handleSpacingUnitHandler={handleWrapperBorderUnitHandler}
							spacingCombineBtn={imageAccordionWrapperBorderTypeLink}
							spacingCombineBtnHandler={wrapperBorderCombineBtnHandler}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={"Border Radius"}
							deviceType={deviceType}
							spacingUnitsHandler={wrapperBorderRadiusUnitsHandler}
							spacingUnits={imageAccordionWrapperBorderRadiusUnits}
							spacingDesktop={imageAccordionWrapperBorderRadiusDesktop}
							spacingTablet={imageAccordionWrapperBorderRadiusTablet}
							spacingMobile={imageAccordionWrapperBorderRadiusMobile}
							handleSpacingUnitHandler={handleWrapperBorderRadiusUnitHandler}
							spacingCombineBtn={imageAccordionWrapperBorderRadiusLink}
							spacingCombineBtnHandler={wrapperBorderRadiusCombineBtnHandler}
							setAttributes={setAttributes}
						/>
					</PanelBody>
					<PanelBody
						title={__("Padding/Margin", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_Spacing
							label={"Padding"}
							deviceType={deviceType}
							spacingUnitsHandler={wrapperPaddingUnitsHandler}
							spacingUnits={imageAccordionPaddingUnits}
							spacingDesktop={imageAccordionPaddingDesktop}
							spacingTablet={imageAccordionPaddingTablet}
							spacingMobile={imageAccordionPaddingMobile}
							handleSpacingUnitHandler={handleWrapperPaddingUnitHandler}
							spacingCombineBtn={imageAccordionPaddingLink}
							spacingCombineBtnHandler={wrapperPaddingCombineBtnHandler}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={"Margin"}
							deviceType={deviceType}
							spacingUnitsHandler={wrapperMarginUnitsHandler}
							spacingUnits={imageAccordionMarginUnits}
							spacingDesktop={imageAccordionMarginDesktop}
							spacingTablet={imageAccordionMarginTablet}
							spacingMobile={imageAccordionMarginMobile}
							handleSpacingUnitHandler={handleWrapperMarginUnitHandler}
							spacingCombineBtn={imageAccordionMarginLink}
							spacingCombineBtnHandler={wrapperMarginCombineBtnHandler}
							setAttributes={setAttributes}
						/>
					</PanelBody>

					<PanelBody
						title={__("Responsive Control", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-responsive-control-wrapper"
					>
						<FB_VisibilityControl
							desktopValue={imageAccordionDesktopSwitcher}
							setDesktopValue={(value) =>
								setAttributes({ imageAccordionDesktopSwitcher: value })
							}
							tabletValue={imageAccordionTabletSwitcher}
							setTabletValue={(value) =>
								setAttributes({ imageAccordionTabletSwitcher: value })
							}
							mobileValue={imageAccordionMobileSwitcher}
							setMobileValue={(value) =>
								setAttributes({ imageAccordionMobileSwitcher: value })
							}
						/>
					</PanelBody>

					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor
							value={imageAccordionCustomCSS}
							onChangeValue={(value) =>
								setAttributes({ imageAccordionCustomCSS: value })
							}
						/>
					</PanelBody>
				</div>
			</div>
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
