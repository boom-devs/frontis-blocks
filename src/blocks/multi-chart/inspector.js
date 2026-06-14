import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	Button,
} from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { memo, useState } from "@wordpress/element";
import { useDeviceType } from "@Config/displayType";

import FB_Spacing from "@Components/spacing";
import FB_Range from "@Components/range";
import FB_ColorControl from "@Components/color-control";
import FB_Color from "@Components/color";
import FB_InputControl from "@Components/input-control";
import FB_IconPicker from "@Components/icon-picker";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import FB_PositionControl from "@Components/position-control";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_VisibilityControl from "@Components/visibility-control";
import FB_BackgroundColorControl from "@Components/background-color-control";
import FB_ResponsiveAlignmentControl from "@Components/responsive-alignment-control";
import FB_TypographyControl from "@Components/typography-control";
import FB_SwitcherControl from "@Components/switcher-control";

import SortableItem from "./sortableItem";
import { BORDER_STYLES, OVERFLOW_OP } from "@Constants/fbConstants";

import { Panel } from "@wordpress/components";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		chartType,
		barVariant,
		chartTitle,
		chartDescription,
		chartHeight,
		chartHeightUnits,
		filterList,
		chartDatasets,
		chartLabels,

		canvasWidth,
		canvasWidthUnits,
		canvasHeight,
		canvasHeightUnits,
		canvasBgColorSwitcher,
		canvasNormalBackgroundType,
		canvasNormalColor,
		canvasNormalGradientColor,
		canvasNormalCustomGradientSwitcher,
		canvasNormalCustomGradientInputValue,
		canvasHoverBackgroundType,
		canvasHoverColor,
		canvasHoverGradientColor,
		canvasHoverCustomGradientSwitcher,
		canvasHoverCustomGradientInputValue,
		canvasBorderHoverColor,
		canvasBorderRadiusUnits,
		canvasBorderRadiusDesktop,
		canvasBorderRadiusLink,
		canvasPaddingUnits,
		canvasPaddingDesktop,
		canvasPaddingLink,
		canvasMarginUnits,
		canvasMarginDesktop,
		canvasMarginLink,

		chartBodyWidth,
		chartBodyWidthUnits,
		chartBodyHeight,
		chartBodyHeightUnits,
		chartBodyNormalColor,
		chartBodyBgColorSwitcher,
		chartBodyNormalBackgroundType,
		chartBodyNormalGradientColor,
		chartBodyNormalCustomGradientSwitcher,
		chartBodyNormalCustomGradientInputValue,
		chartBodyHoverBackgroundType,
		chartBodyHoverGradientColor,
		chartBodyHoverCustomGradientSwitcher,
		chartBodyHoverCustomGradientInputValue,

		chartBodyHoverColor,
		chartBodyBorderRadiusUnits,
		chartBodyBorderRadiusDesktop,
		chartBodyBorderRadiusLink,
		chartBodyPaddingDesktop,
		chartBodyPaddingLink,

		chartTitleColor,
		chartTitleHoverColor,
		chartHeaderPaddingDesktop,
		chartHeaderPaddingLink,

		toggleBtnColor,
		toggleBtnBgColor,
		toggleBtnHoverColor,
		toggleBtnHoverBgColor,
		toggleBtnPaddingUnits,
		toggleBtnPaddingDesktop,
		toggleBtnPaddingTablet,
		toggleBtnPaddingMobile,
		toggleBtnBorderRadiusDesktop,
		toggleBtnBorderRadiusTablet,
		toggleBtnBorderRadiusMobile,
		toggleBtnBorderRadiusLink,

		filterIcon,
		filterIconSize,
		filterIconSizeUnits,
		filterIconColor,
		filterIconHoverColor,

		showChartHeader,
		showChartFilters,
		showChartLegend,
		showChartFooter,
		showGrid,
		gridColor,
		gridLineWidth,
		xAxisNormalColor,
		xAxisNormalFontSize,
		xAxisNormalFontWeight,
		xAxisNormalFontFamily,
		yAxisNormalColor,
		yAxisNormalFontSize,
		yAxisNormalFontWeight,
		yAxisNormalFontFamily,
		tooltipBg,
		tooltipColor,

		legendTextAlignment,
		legendGap,
		legendDotSize,
		legendDotRadius,
		legendTextColor,

		footerTextAlignment,
		footerTitleNormalColor,
		footerTitleColorSwitcher,
		footerDescColorSwitcher,
		footerTitleGlobalTypoSwitcher,
		footerTitleGlobalTypographyData,
		footerTitleGlobalTypoType,
		footerTitleGlobalTypoOption,
		footerTitleFontFamily,
		footerTitleFontSize,
		footerTitleFontSizeUnits,
		footerTitleFontWeight,
		footerTitleFontStyle,
		footerTitleTextTransform,
		footerTitleTextDecoration,
		footerTitleLetterSpacing,
		footerTitleLetterSpacingUnits,
		footerTitleLineHeight,
		footerTitleLineHeightUnits,
		footerTitleHoverColor,
		footerDescNormalColor,
		footerDescGlobalTypoSwitcher,
		footerDescGlobalTypographyData,
		footerDescGlobalTypoType,
		footerDescGlobalTypoOption,
		footerDescFontFamily,
		footerDescFontSize,
		footerDescFontSizeUnits,
		footerDescFontWeight,
		footerDescFontStyle,
		footerDescTextTransform,
		footerDescTextDecoration,
		footerDescLetterSpacing,
		footerDescLetterSpacingUnits,
		footerDescLineHeight,
		footerDescLineHeightUnits,
		footerDescHoverColor,
		footerPaddingDesktop,
		footerPaddingLink,

		multiChartBgColorSwitcher,
		multiChartBackgroundType,
		multiChartClassicColor,
		multiChartGradientColor,
		multiChartCustomGradientSwitcher,
		multiChartCustomGradientInputValue,
		multiChartBackgroundImageUrl,
		multiChartBackgroundImageAlt,
		multiChartBackgroundImageID,
		multiChartBackgroundImagePosition,
		multiChartBackgroundImageAttachment,
		multiChartBackgroundImageRepeat,
		multiChartBackgroundImageSize,
		multiChartHoverBackgroundType,
		multiChartHoverClassicColor,
		multiChartHoverGradientColor,
		multiChartHoverCustomGradientSwitcher,
		multiChartHoverCustomGradientInputValue,
		multiChartHoverBackgroundImageUrl,
		multiChartHoverBackgroundImageAlt,
		multiChartHoverBackgroundImageID,
		multiChartHoverBackgroundImagePosition,
		multiChartHoverBackgroundImageAttachment,
		multiChartHoverBackgroundImageRepeat,
		multiChartHoverBackgroundImageSize,

		multiChartWrapperBorder,
		multiChartWrapperBorderColorSwitcher,
		multiChartWrapperBorderColor,
		multiChartWrapperBorderHoverColor,
		multiChartWrapperBorderTypeUnits,
		multiChartWrapperBorderTypeDesktop,
		multiChartWrapperBorderTypeTablet,
		multiChartWrapperBorderTypeMobile,
		multiChartWrapperBorderTypeLink,
		multiChartWrapperBorderRadiusUnits,
		multiChartWrapperBorderRadiusDesktop,
		multiChartWrapperBorderRadiusTablet,
		multiChartWrapperBorderRadiusMobile,
		multiChartWrapperBorderRadiusLink,

		multiChartPaddingUnits,
		multiChartPaddingDesktop,
		multiChartPaddingTablet,
		multiChartPaddingMobile,
		multiChartPaddingLink,
		multiChartMarginUnits,
		multiChartMarginDesktop,
		multiChartMarginTablet,
		multiChartMarginMobile,
		multiChartMarginLink,

		multiChartGlobalZIndex,
		multiChartCustomCSS,
		multiChartWrapperID,
		multiChartWrapperClass,
		multiChartDesktopSwitcher,
		multiChartTabletSwitcher,
		multiChartMobileSwitcher,

		multiChartPositionType,
		multiChartHZOrientationType,
		multiChartVROrientationType,
		multiChartHZLeftOffset,
		multiChartHZLeftOffsetUnits,
		multiChartHZRightOffset,
		multiChartHZRightOffsetUnits,
		multiChartVRTopOffset,
		multiChartVRTopOffsetUnits,
		multiChartVRBottomOffset,
		multiChartVRBottomOffsetUnits,
		multiChartOverflow,
		footerPaddingUnits,
		footerPaddingTablet,
		footerPaddingMobile,
		footerMarginUnits,
		footerMarginTablet,
		footerMarginMobile,
		footerMarginDesktop,
		footerMarginLink,

		toggleBtnPaddingLink,
		toggleBtnBorderRadiusUnits,
		xAxisTypography,
		yAxisTypography,

		canvasPaddingTablet,
		canvasPaddingMobile,
		canvasMarginTablet,
		canvasMarginMobile,
		canvasBorderRadiusTablet,
		canvasBorderRadiusMobile,
		chartBodyBorderRadiusTablet,
		chartBodyBorderRadiusMobile,
		chartHeaderPaddingTablet,
		chartHeaderPaddingMobile,
		legendDotSizeUnits,
	} = attributes;

	const deviceType = useDeviceType();

	/** Helper: Handle spacing units */
	const handleSpacingUnits = (attr, unit) => {
		setAttributes({ [attr]: { ...attributes[attr], [deviceType]: unit } });
	};

	/** Helper: Handle spacing values (Border Width/Radius, Padding, Margin) */
	const handleGranularSpacing = (attrPrefix, event, position, isLinked) => {
		const value = event.target.value;
		const attrName = `${attrPrefix}${deviceType}`;
		if (isLinked) {
			setAttributes({
				[attrName]: { top: value, right: value, bottom: value, left: value },
			});
		} else {
			setAttributes({
				[attrName]: { ...attributes[attrName], [position]: value },
			});
		}
	};

	// Wrapper Border Width Handlers
	const multiChartWrapperBorderTypeUnitsHandler = (v) =>
		handleSpacingUnits("multiChartWrapperBorderTypeUnits", v);
	const handleMultiChartWrapperBorderUnitHandler = (e, pos) =>
		handleGranularSpacing(
			"multiChartWrapperBorderType",
			e,
			pos,
			multiChartWrapperBorderTypeLink,
		);

	// Wrapper Border Radius Handlers
	const multiChartWrapperBorderRadiusUnitsHandler = (v) =>
		handleSpacingUnits("multiChartWrapperBorderRadiusUnits", v);
	const handleMultiChartWrapperBorderRadiusUnitHandler = (e, pos) =>
		handleGranularSpacing(
			"multiChartWrapperBorderRadius",
			e,
			pos,
			multiChartWrapperBorderRadiusLink,
		);

	// Wrapper Padding Handlers
	const multiChartPaddingUnitsHandler = (v) =>
		handleSpacingUnits("multiChartPaddingUnits", v);
	const handleMultiChartPaddingUnitHandler = (e, pos) =>
		handleGranularSpacing("multiChartPadding", e, pos, multiChartPaddingLink);

	// Wrapper Margin Handlers
	const multiChartMarginUnitsHandler = (v) =>
		handleSpacingUnits("multiChartMarginUnits", v);
	const handleMultiChartMarginUnitHandler = (e, pos) =>
		handleGranularSpacing("multiChartMargin", e, pos, multiChartMarginLink);

	/* =================
       REPEATER HANDLERS
    ================= */
	const updateFilter = (id, key, value) => {
		const newList = filterList.map((item, index) =>
			(item.id || index) === id ? { ...item, [key]: value } : item,
		);
		setAttributes({ filterList: newList });
	};

	const handleSpacingChange = (attrPrefix, event, position, isLinked) => {
		const value = event.target.value;
		const attrName = `${attrPrefix}${deviceType}`;
		if (isLinked) {
			setAttributes({
				[attrName]: { top: value, right: value, bottom: value, left: value },
			});
		} else {
			setAttributes({
				[attrName]: { ...attributes[attrName], [position]: value },
			});
		}
	};

	const updateDataset = (id, key, value) => {
		const newList = chartDatasets.map((item, index) =>
			(item.id || index) === id ? { ...item, [key]: value } : item,
		);
		setAttributes({ chartDatasets: newList });
	};

	const handleFilterDragEnd = (event) => {
		const { active, over } = event;
		if (active && over && active.id !== over.id) {
			const oldIndex = filterList.findIndex(
				(i, index) => (i.id || index) === active.id,
			);
			const newIndex = filterList.findIndex(
				(i, index) => (i.id || index) === over.id,
			);
			setAttributes({ filterList: arrayMove(filterList, oldIndex, newIndex) });
		}
	};

	const handleDatasetDragEnd = (event) => {
		const { active, over } = event;
		if (active && over && active.id !== over.id) {
			const oldIndex = chartDatasets.findIndex(
				(i, index) => (i.id || index) === active.id,
			);
			const newIndex = chartDatasets.findIndex(
				(i, index) => (i.id || index) === over.id,
			);
			setAttributes({
				chartDatasets: arrayMove(chartDatasets, oldIndex, newIndex),
			});
		}
	};

	const addFilter = () => {
		const newItem = {
			id: "filter-" + Date.now(),
			filter_label: __("New Filter", "frontis-blocks"),
			filter_icon: "fas fa-calendar",
		};
		setAttributes({ filterList: [...filterList, newItem] });
	};

	const addDataset = () => {
		const newItem = {
			id: "ds-" + Date.now(),
			series_name: __("Series Name", "frontis-blocks"),
			values: "10,20,30",
			color: "#3b82f6",
		};
		setAttributes({ chartDatasets: [...chartDatasets, newItem] });
	};

	const removeFilter = (id) => {
		const newList = filterList.filter(
			(item, index) => (item.id || index) !== id,
		);
		setAttributes({ filterList: newList });
	};

	const removeDataset = (id) => {
		const newList = chartDatasets.filter(
			(item, index) => (item.id || index) !== id,
		);
		setAttributes({ chartDatasets: newList });
	};

	const duplicateItem = (listName, id) => {
		const list = attributes[listName];
		const itemToDuplicate = list.find(
			(item, index) => (item.id || index) === id,
		);
		if (!itemToDuplicate) return;
		const newItem = {
			...itemToDuplicate,
			id: (listName === "filterList" ? "filter-" : "ds-") + Date.now(),
		};
		setAttributes({ [listName]: [...list, newItem] });
	};

	const generalControls = (
		<>
			<PanelBody title={__("Chart Type", "frontis-blocks")} initialOpen={true}>
				<SelectControl
					label={__("Chart Type", "frontis-blocks")}
					value={chartType}
					options={[
						{ label: __("Line Chart", "frontis-blocks"), value: "line" },
						{ label: __("Bar Chart", "frontis-blocks"), value: "bar" },
						{
							label: __("Horizontal Bar", "frontis-blocks"),
							value: "horizontalBar",
						},
						{ label: __("Area Chart", "frontis-blocks"), value: "areaChart" },
						{ label: __("Pie", "frontis-blocks"), value: "pie" },
						{ label: __("Doughnut", "frontis-blocks"), value: "doughnut" },
						{ label: __("Radar", "frontis-blocks"), value: "radar" },
						{ label: __("Polar Area", "frontis-blocks"), value: "polarArea" },
					]}
					onChange={(value) => {
						setAttributes({ chartType: value });
					}}
				/>
				{chartType === "bar" && (
					<SelectControl
						label={__("Bar Variant", "frontis-blocks")}
						value={barVariant}
						options={[
							{ label: __("Default", "frontis-blocks"), value: "default" },
							{ label: __("Stacked", "frontis-blocks"), value: "stacked" },
						]}
						onChange={(value) => setAttributes({ barVariant: value })}
					/>
				)}
				<FB_InputControl
					label={__("Chart Labels", "frontis-blocks")}
					value={chartLabels}
					onChangeValue={(value) => setAttributes({ chartLabels: value })}
					helpText={__(
						"Comma-separated labels (e.g., Jan, Feb, Mar)",
						"frontis-blocks",
					)}
				/>
				<FB_Range
					label={__("Chart Height", "frontis-blocks")}
					min={0}
					max={2000}
					rangeValue={chartHeight}
					units={chartHeightUnits}
					deviceType={deviceType}
					onChangeHandler={(v) => setAttributes({ chartHeight: v })}
					rangeUnitHandler={(v) => setAttributes({ chartHeightUnits: v })}
					setAttributes={setAttributes}
					isRangeUnit={true}
					resetFallbackValue={270}
				/>
				<ToggleControl
					label={__("Show Header", "frontis-blocks")}
					checked={showChartHeader}
					onChange={(v) => setAttributes({ showChartHeader: v })}
				/>
				{showChartHeader && (
					<ToggleControl
						label={__("Show Filters", "frontis-blocks")}
						checked={showChartFilters}
						onChange={(v) => setAttributes({ showChartFilters: v })}
					/>
				)}
				<ToggleControl
					label={__("Show Legend", "frontis-blocks")}
					checked={showChartLegend}
					onChange={(v) => setAttributes({ showChartLegend: v })}
				/>
				<ToggleControl
					label={__("Show Footer", "frontis-blocks")}
					checked={showChartFooter}
					onChange={(v) => setAttributes({ showChartFooter: v })}
				/>
			</PanelBody>

			<PanelBody
				title={__("Label Dropdown", "frontis-blocks")}
				initialOpen={false}
			>
				<div className="fb-feature-wrapper">
					<DndContext
						collisionDetection={closestCenter}
						onDragEnd={handleFilterDragEnd}
					>
						<SortableContext
							items={filterList.map((item, index) => item.id || index)}
						>
							<ul className="dnd-items-wrapper">
								{filterList.map((item, index) => (
									<SortableItem
										key={item.id || index}
										id={item.id || index}
										item={item}
										index={index}
										type="filter"
										updateItem={updateFilter}
										removeItem={removeFilter}
										duplicateItem={(id) => duplicateItem("filterList", id)}
									/>
								))}
							</ul>
						</SortableContext>
					</DndContext>
				</div>
				<Button
					variant="secondary"
					onClick={addFilter}
					className="fb-add-item-btn"
					icon="plus"
				>
					{__("Add Filter Option", "frontis-blocks")}
				</Button>
			</PanelBody>

			<PanelBody
				title={__("Chart Series Data", "frontis-blocks")}
				initialOpen={true}
			>
				<div className="fb-feature-wrapper">
					<DndContext
						collisionDetection={closestCenter}
						onDragEnd={handleDatasetDragEnd}
					>
						<SortableContext
							items={chartDatasets.map((item, index) => item.id || index)}
						>
							<ul className="dnd-items-wrapper">
								{chartDatasets.map((item, index) => (
									<SortableItem
										key={item.id || index}
										id={item.id || index}
										item={item}
										index={index}
										type="dataset"
										updateItem={updateDataset}
										removeItem={removeDataset}
										duplicateItem={(id) => duplicateItem("chartDatasets", id)}
									/>
								))}
							</ul>
						</SortableContext>
					</DndContext>
				</div>
				<Button
					variant="secondary"
					onClick={addDataset}
					className="fb-add-item-btn"
					icon="plus"
				>
					{__("Add Data Series", "frontis-blocks")}
				</Button>
			</PanelBody>

			<PanelBody
				title={__("Footer Text", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_InputControl
					label={__("Title", "frontis-blocks")}
					value={chartTitle}
					onChangeValue={(v) => setAttributes({ chartTitle: v })}
				/>
				<FB_InputControl
					label={__("Description", "frontis-blocks")}
					value={chartDescription}
					onChangeValue={(v) => setAttributes({ chartDescription: v })}
				/>
				<FB_ResponsiveAlignmentControl
					label={__("Alignment", "frontis-blocks")}
					globalAlignment={footerTextAlignment}
					setGlobalAlignment={(v) => setAttributes({ footerTextAlignment: v })}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>
			</PanelBody>
		</>
	);

	const styleControls = (
		<>
			<PanelBody
				title={__("Container Canvas", "frontis-blocks")}
				initialOpen={true}
			>
				<FB_Range
					label={__("Width", "frontis-blocks")}
					rangeValue={canvasWidth}
					units={canvasWidthUnits}
					deviceType={deviceType}
					onChangeHandler={(v) => setAttributes({ canvasWidth: v })}
					rangeUnitHandler={(v) => setAttributes({ canvasWidthUnits: v })}
					setAttributes={setAttributes}
					min={0}
					max={2000}
					resetFallbackValue=""
				/>
				{showChartLegend && (
					<FB_Range
						label={__("Height", "frontis-blocks")}
						rangeValue={canvasHeight}
						units={canvasHeightUnits}
						deviceType={deviceType}
						onChangeHandler={(v) => setAttributes({ canvasHeight: v })}
						rangeUnitHandler={(v) => setAttributes({ canvasHeightUnits: v })}
						setAttributes={setAttributes}
						min={0}
						max={2000}
						resetFallbackValue=""
					/>
				)}
				<FB_BackgroundColorControl
					label={__("Background", "frontis-blocks")}
					bgColorSwitcher={canvasBgColorSwitcher}
					setBgColorSwitcher={(v) =>
						setAttributes({ canvasBgColorSwitcher: v })
					}
					normalBackgroundType={canvasNormalBackgroundType}
					setNormalBackgroundType={(v) =>
						setAttributes({ canvasNormalBackgroundType: v })
					}
					normalClassicColor={canvasNormalColor}
					setNormalClassicColor={(v) => setAttributes({ canvasNormalColor: v })}
					normalGradientColor={canvasNormalGradientColor}
					setNormalGradientColor={(v) =>
						setAttributes({ canvasNormalGradientColor: v })
					}
					normalCustomGradientSwitcher={canvasNormalCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(v) =>
						setAttributes({ canvasNormalCustomGradientSwitcher: v })
					}
					normalCustomGradientInputValue={canvasNormalCustomGradientInputValue}
					setNormalCustomGradientInputValue={(v) =>
						setAttributes({ canvasNormalCustomGradientInputValue: v })
					}
					hoverBackgroundType={canvasHoverBackgroundType}
					setHoverBackgroundType={(v) =>
						setAttributes({ canvasHoverBackgroundType: v })
					}
					hoverClassicColor={canvasHoverColor}
					setHoverClassicColor={(v) => setAttributes({ canvasHoverColor: v })}
					hoverGradientColor={canvasHoverGradientColor}
					setHoverGradientColor={(v) =>
						setAttributes({ canvasHoverGradientColor: v })
					}
					hoverCustomGradientSwitcher={canvasHoverCustomGradientSwitcher}
					setHoverCustomGradientSwitcher={(v) =>
						setAttributes({ canvasHoverCustomGradientSwitcher: v })
					}
					isBackgroundImage={false}
				/>
				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnits={canvasPaddingUnits}
					spacingUnitsHandler={(v) => setAttributes({ canvasPaddingUnits: v })}
					spacingDesktop={canvasPaddingDesktop}
					spacingTablet={canvasPaddingTablet}
					spacingMobile={canvasPaddingMobile}
					handleSpacingUnitHandler={(e, pos) =>
						handleSpacingChange("canvasPadding", e, pos, canvasPaddingLink)
					}
					spacingCombineBtn={canvasPaddingLink}
					spacingCombineBtnHandler={() =>
						setAttributes({ canvasPaddingLink: !canvasPaddingLink })
					}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnits={canvasMarginUnits}
					spacingUnitsHandler={(v) => setAttributes({ canvasMarginUnits: v })}
					spacingDesktop={canvasMarginDesktop}
					spacingTablet={canvasMarginTablet}
					spacingMobile={canvasMarginMobile}
					handleSpacingUnitHandler={(e, pos) =>
						handleSpacingChange("canvasMargin", e, pos, canvasMarginLink)
					}
					spacingCombineBtn={canvasMarginLink}
					spacingCombineBtnHandler={() =>
						setAttributes({ canvasMarginLink: !canvasMarginLink })
					}
					setAttributes={setAttributes}
				/>
			</PanelBody>
			<PanelBody title={__("Chart Body", "frontis-blocks")} initialOpen={false}>
				<FB_BackgroundColorControl
					label={__("Background", "frontis-blocks")}
					bgColorSwitcher={chartBodyBgColorSwitcher}
					setBgColorSwitcher={(v) =>
						setAttributes({ chartBodyBgColorSwitcher: v })
					}
					normalBackgroundType={chartBodyNormalBackgroundType}
					setNormalBackgroundType={(v) =>
						setAttributes({ chartBodyNormalBackgroundType: v })
					}
					normalClassicColor={chartBodyNormalColor}
					setNormalClassicColor={(v) =>
						setAttributes({ chartBodyNormalColor: v })
					}
					normalGradientColor={chartBodyNormalGradientColor}
					setNormalGradientColor={(v) =>
						setAttributes({ chartBodyNormalGradientColor: v })
					}
					normalCustomGradientSwitcher={chartBodyNormalCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(v) =>
						setAttributes({ chartBodyNormalCustomGradientSwitcher: v })
					}
					normalCustomGradientInputValue={
						chartBodyNormalCustomGradientInputValue
					}
					setNormalCustomGradientInputValue={(v) =>
						setAttributes({ chartBodyNormalCustomGradientInputValue: v })
					}
					hoverBackgroundType={chartBodyHoverBackgroundType}
					setHoverBackgroundType={(v) =>
						setAttributes({ chartBodyHoverBackgroundType: v })
					}
					hoverClassicColor={chartBodyHoverColor}
					setHoverClassicColor={(v) =>
						setAttributes({ chartBodyHoverColor: v })
					}
					hoverGradientColor={chartBodyHoverGradientColor}
					setHoverGradientColor={(v) =>
						setAttributes({ chartBodyHoverGradientColor: v })
					}
					hoverCustomGradientSwitcher={chartBodyHoverCustomGradientSwitcher}
					setHoverCustomGradientSwitcher={(v) =>
						setAttributes({ chartBodyHoverCustomGradientSwitcher: v })
					}
					hoverCustomGradientInputValue={chartBodyHoverCustomGradientInputValue}
					setHoverCustomGradientInputValue={(v) =>
						setAttributes({ chartBodyHoverCustomGradientInputValue: v })
					}
					isBackgroundImage={false}
				/>
				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnits={chartBodyBorderRadiusUnits}
					spacingUnitsHandler={(v) =>
						setAttributes({ chartBodyBorderRadiusUnits: v })
					}
					spacingDesktop={chartBodyBorderRadiusDesktop}
					spacingTablet={chartBodyBorderRadiusTablet}
					spacingMobile={chartBodyBorderRadiusMobile}
					handleSpacingUnitHandler={(e, pos) =>
						handleSpacingChange(
							"chartBodyBorderRadius",
							e,
							pos,
							chartBodyBorderRadiusLink,
						)
					}
					spacingCombineBtn={chartBodyBorderRadiusLink}
					spacingCombineBtnHandler={() =>
						setAttributes({
							chartBodyBorderRadiusLink: !chartBodyBorderRadiusLink,
						})
					}
					setAttributes={setAttributes}
				/>
			</PanelBody>
			<PanelBody
				title={__("Filter Toggle Button", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_ColorControl
					label={__("Text Color", "frontis-blocks")}
					globalColor={toggleBtnColor}
					setGlobalColor={(v) => setAttributes({ toggleBtnColor: v })}
				/>
				<FB_ColorControl
					label={__("BG Color", "frontis-blocks")}
					globalColor={toggleBtnBgColor}
					setGlobalColor={(v) => setAttributes({ toggleBtnBgColor: v })}
				/>
				<FB_ColorControl
					label={__("Hover Text Color", "frontis-blocks")}
					globalColor={toggleBtnHoverColor}
					setGlobalColor={(v) => setAttributes({ toggleBtnHoverColor: v })}
				/>
				<FB_ColorControl
					label={__("Hover BG Color", "frontis-blocks")}
					globalColor={toggleBtnHoverBgColor}
					setGlobalColor={(v) => setAttributes({ toggleBtnHoverBgColor: v })}
				/>
				<FB_IconPicker
					value={filterIcon.value}
					setIconHandler={(v) =>
						setAttributes({ filterIcon: { ...filterIcon, value: v } })
					}
				/>
				<FB_Range
					label={__("Icon Size", "frontis-blocks")}
					min={1}
					max={100}
					rangeValue={filterIconSize}
					onChangeHandler={(v) => setAttributes({ filterIconSize: v })}
					rangeUnitHandler={(v) => setAttributes({ filterIconSizeUnits: v })}
					deviceType={deviceType}
					units={filterIconSizeUnits}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnits={toggleBtnPaddingUnits}
					spacingUnitsHandler={(v) =>
						setAttributes({ toggleBtnPaddingUnits: v })
					}
					spacingDesktop={toggleBtnPaddingDesktop}
					spacingTablet={toggleBtnPaddingTablet}
					spacingMobile={toggleBtnPaddingMobile}
					handleSpacingUnitHandler={(e, pos) =>
						handleSpacingChange(
							"toggleBtnPadding",
							e,
							pos,
							toggleBtnPaddingLink,
						)
					}
					spacingCombineBtn={toggleBtnPaddingLink}
					spacingCombineBtnHandler={() =>
						setAttributes({ toggleBtnPaddingLink: !toggleBtnPaddingLink })
					}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnits={toggleBtnBorderRadiusUnits}
					spacingUnitsHandler={(v) =>
						setAttributes({ toggleBtnBorderRadiusUnits: v })
					}
					spacingDesktop={toggleBtnBorderRadiusDesktop}
					spacingTablet={toggleBtnBorderRadiusTablet}
					spacingMobile={toggleBtnBorderRadiusMobile}
					handleSpacingUnitHandler={(e, pos) =>
						handleSpacingChange(
							"toggleBtnBorderRadius",
							e,
							pos,
							toggleBtnBorderRadiusLink,
						)
					}
					spacingCombineBtn={toggleBtnBorderRadiusLink}
					spacingCombineBtnHandler={() =>
						setAttributes({
							toggleBtnBorderRadiusLink: !toggleBtnBorderRadiusLink,
						})
					}
					setAttributes={setAttributes}
				/>
			</PanelBody>
			<PanelBody
				title={__("Grid & Axis Style", "frontis-blocks")}
				initialOpen={false}
			>
				<ToggleControl
					label={__("Show Grid Lines", "frontis-blocks")}
					checked={showGrid}
					onChange={(v) => setAttributes({ showGrid: v })}
				/>
				{showGrid && (
					<FB_ColorControl
						label={__("Grid Color", "frontis-blocks")}
						globalColor={gridColor}
						setGlobalColor={(v) => setAttributes({ gridColor: v })}
					/>
				)}
				<FB_ColorControl
					label={__("X-Axis Color", "frontis-blocks")}
					globalColor={xAxisNormalColor}
					setGlobalColor={(v) => setAttributes({ xAxisNormalColor: v })}
				/>
				<FB_ColorControl
					label={__("Y-Axis Color", "frontis-blocks")}
					globalColor={yAxisNormalColor}
					setGlobalColor={(v) => setAttributes({ yAxisNormalColor: v })}
				/>
				<FB_ColorControl
					label={__("Tooltip Background", "frontis-blocks")}
					globalColor={tooltipBg}
					setGlobalColor={(v) => setAttributes({ tooltipBg: v })}
				/>
			</PanelBody>
			<PanelBody
				title={__("Legend Style", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_ResponsiveAlignmentControl
					label={__("Alignment", "frontis-blocks")}
					deviceType={deviceType}
					setAttributes={setAttributes}
					globalAlignment={legendTextAlignment}
					setGlobalAlignment={(v) => setAttributes({ legendTextAlignment: v })}
				/>
				<FB_Range
					label={__("Dot Size", "frontis-blocks")}
					rangeValue={legendDotSize}
					units={legendDotSizeUnits}
					rangeUnitHandler={(v) => setAttributes({ legendDotSizeUnits: v })}
					deviceType={deviceType}
					onChangeHandler={(v) => setAttributes({ legendDotSize: v })}
					setAttributes={setAttributes}
				/>
				<FB_ColorControl
					label={__("Text Color", "frontis-blocks")}
					globalColor={legendTextColor}
					setGlobalColor={(v) => setAttributes({ legendTextColor: v })}
				/>
			</PanelBody>

			<PanelBody title={__("Title", "frontis-blocks")} initialOpen={true}>
				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={footerTitleGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) =>
						setAttributes({ footerTitleGlobalTypographyData: value })
					}
					globalTypoType={footerTitleGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							footerTitleGlobalTypoType: value,
							footerTitleGlobalTypoSwitcher:
								value === "default"
									? {
											...footerTitleGlobalTypoSwitcher,
											fontFamily: false,
											fontSize: false,
											fontWeight: false,
											fontStyle: false,
											textTransform: false,
											textDecoration: false,
											letterSpacing: false,
											lineHeight: false,
									  }
									: {
											...footerTitleGlobalTypoSwitcher,
											fontFamily: true,
											fontSize: true,
											fontWeight: true,
											fontStyle: true,
											textTransform: true,
											textDecoration: true,
											letterSpacing: true,
											lineHeight: true,
									  },
						});
					}}
					globalTypoOption={footerTitleGlobalTypoOption}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({ footerTitleGlobalTypoOption: value })
					}
					fontFamily={footerTitleFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({
							footerTitleFontFamily: value,
							footerTitleGlobalTypoSwitcher: {
								...footerTitleGlobalTypoSwitcher,
								fontFamily: value && false,
							},
						})
					}
					fontSize={footerTitleFontSize}
					onChangeFontSize={(value) =>
						setAttributes({
							footerTitleFontSize: value,
							footerTitleGlobalTypoSwitcher: {
								...footerTitleGlobalTypoSwitcher,
								fontSize: value && false,
							},
						})
					}
					fontSizeUnits={footerTitleFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({ footerTitleFontSizeUnits: value })
					}
					fontWeight={footerTitleFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({
							footerTitleFontWeight: value,
							footerTitleGlobalTypoSwitcher: {
								...footerTitleGlobalTypoSwitcher,
								fontWeight: value && false,
							},
						})
					}
					fontStyle={footerTitleFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({
							footerTitleFontStyle: value,
							footerTitleGlobalTypoSwitcher: {
								...footerTitleGlobalTypoSwitcher,
								fontStyle: value && false,
							},
						})
					}
					textTransform={footerTitleTextTransform}
					onChangeTextTransform={(value) =>
						setAttributes({
							footerTitleTextTransform: value,
							footerTitleGlobalTypoSwitcher: {
								...footerTitleGlobalTypoSwitcher,
								textTransform: value && false,
							},
						})
					}
					textDecoration={footerTitleTextDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({
							footerTitleTextDecoration: value,
							footerTitleGlobalTypoSwitcher: {
								...footerTitleGlobalTypoSwitcher,
								textDecoration: value && false,
							},
						})
					}
					letterSpacing={footerTitleLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({
							footerTitleLetterSpacing: value,
							footerTitleGlobalTypoSwitcher: {
								...footerTitleGlobalTypoSwitcher,
								letterSpacing: value && false,
							},
						})
					}
					letterSpacingUnits={footerTitleLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({ footerTitleLetterSpacingUnits: value })
					}
					lineHeight={footerTitleLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({
							footerTitleLineHeight: value,
							footerTitleGlobalTypoSwitcher: {
								...footerTitleGlobalTypoSwitcher,
								lineHeight: value && false,
							},
						})
					}
					lineHeightUnits={footerTitleLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({ footerTitleLineHeightUnits: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>
				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={footerTitleColorSwitcher}
					setGlobalSwitcher={(v) =>
						setAttributes({ footerTitleColorSwitcher: v })
					}
				/>
				{footerTitleColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={footerTitleNormalColor}
						setGlobalColor={(v) => setAttributes({ footerTitleNormalColor: v })}
					/>
				)}
				{footerTitleColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={footerTitleHoverColor}
						setGlobalColor={(v) => setAttributes({ footerTitleHoverColor: v })}
					/>
				)}
			</PanelBody>

			<PanelBody title={__("Description", "frontis-blocks")} initialOpen={true}>
				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={footerDescGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) =>
						setAttributes({ footerDescGlobalTypographyData: value })
					}
					globalTypoType={footerDescGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							footerDescGlobalTypoType: value,
							footerDescGlobalTypoSwitcher:
								value === "default"
									? {
											...footerDescGlobalTypoSwitcher,
											fontFamily: false,
											fontSize: false,
											fontWeight: false,
											fontStyle: false,
											textTransform: false,
											textDecoration: false,
											letterSpacing: false,
											lineHeight: false,
									  }
									: {
											...footerDescGlobalTypoSwitcher,
											fontFamily: true,
											fontSize: true,
											fontWeight: true,
											fontStyle: true,
											textTransform: true,
											textDecoration: true,
											letterSpacing: true,
											lineHeight: true,
									  },
						});
					}}
					globalTypoOption={footerDescGlobalTypoOption}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({ footerDescGlobalTypoOption: value })
					}
					fontFamily={footerDescFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({
							footerDescFontFamily: value,
							footerDescGlobalTypoSwitcher: {
								...footerDescGlobalTypoSwitcher,
								fontFamily: value && false,
							},
						})
					}
					fontSize={footerDescFontSize}
					onChangeFontSize={(value) =>
						setAttributes({
							footerDescFontSize: value,
							footerDescGlobalTypoSwitcher: {
								...footerDescGlobalTypoSwitcher,
								fontSize: value && false,
							},
						})
					}
					fontSizeUnits={footerDescFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({ footerDescFontSizeUnits: value })
					}
					fontWeight={footerDescFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({
							footerDescFontWeight: value,
							footerDescGlobalTypoSwitcher: {
								...footerDescGlobalTypoSwitcher,
								fontWeight: value && false,
							},
						})
					}
					fontStyle={footerDescFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({
							footerDescFontStyle: value,
							footerDescGlobalTypoSwitcher: {
								...footerDescGlobalTypoSwitcher,
								fontStyle: value && false,
							},
						})
					}
					textTransform={footerDescTextTransform}
					onChangeTextTransform={(value) =>
						setAttributes({
							footerDescTextTransform: value,
							footerDescGlobalTypoSwitcher: {
								...footerDescGlobalTypoSwitcher,
								textTransform: value && false,
							},
						})
					}
					textDecoration={footerDescTextDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({
							footerDescTextDecoration: value,
							footerDescGlobalTypoSwitcher: {
								...footerDescGlobalTypoSwitcher,
								textDecoration: value && false,
							},
						})
					}
					letterSpacing={footerDescLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({
							footerDescLetterSpacing: value,
							footerDescGlobalTypoSwitcher: {
								...footerDescGlobalTypoSwitcher,
								letterSpacing: value && false,
							},
						})
					}
					letterSpacingUnits={footerDescLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({ footerDescLetterSpacingUnits: value })
					}
					lineHeight={footerDescLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({
							footerDescLineHeight: value,
							footerDescGlobalTypoSwitcher: {
								...footerDescGlobalTypoSwitcher,
								lineHeight: value && false,
							},
						})
					}
					lineHeightUnits={footerDescLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({ footerDescLineHeightUnits: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>
				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={footerDescColorSwitcher}
					setGlobalSwitcher={(v) =>
						setAttributes({ footerDescColorSwitcher: v })
					}
				/>
				{footerDescColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={footerDescNormalColor}
						setGlobalColor={(v) => setAttributes({ footerDescNormalColor: v })}
					/>
				)}
				{footerDescColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={footerDescHoverColor}
						setGlobalColor={(v) => setAttributes({ footerDescHoverColor: v })}
					/>
				)}
			</PanelBody>
		</>
	);

	const advancedControls = (
		<>
			<PanelBody title={__("Layout", "frontis-blocks")} initialOpen={true}>
				<FB_Range
					min={0}
					max={10000000}
					label={__("Z Index", "frontis-blocks")}
					rangeValue={multiChartGlobalZIndex}
					onChangeHandler={(value) =>
						setAttributes({
							multiChartGlobalZIndex: value === 0 ? undefined : value,
						})
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
					isRangeUnit={false}
				/>
				<SelectControl
					label={__("Overflow", "frontis-blocks")}
					value={multiChartOverflow}
					options={OVERFLOW_OP}
					onChange={(value) => setAttributes({ multiChartOverflow: value })}
				/>
				<FB_PositionControl
					deviceType={deviceType}
					positionType={multiChartPositionType}
					setPositionType={(v) => setAttributes({ multiChartPositionType: v })}
					HZOrientationType={multiChartHZOrientationType}
					setHZOrientationType={(v) =>
						setAttributes({ multiChartHZOrientationType: v })
					}
					VROrientationType={multiChartVROrientationType}
					setVROrientationType={(v) =>
						setAttributes({ multiChartVROrientationType: v })
					}
					HZLeftOffset={multiChartHZLeftOffset}
					setHZLeftOffset={(v) => setAttributes({ multiChartHZLeftOffset: v })}
					HZLeftOffsetUnits={multiChartHZLeftOffsetUnits}
					setHZLeftOffsetUnits={(v) =>
						setAttributes({ multiChartHZLeftOffsetUnits: v })
					}
					HZRightOffset={multiChartHZRightOffset}
					setHZRightOffset={(v) =>
						setAttributes({ multiChartHZRightOffset: v })
					}
					HZRightOffsetUnits={multiChartHZRightOffsetUnits}
					setHZRightOffsetUnits={(v) =>
						setAttributes({ multiChartHZRightOffsetUnits: v })
					}
					VRTopOffset={multiChartVRTopOffset}
					setVRTopOffset={(v) => setAttributes({ multiChartVRTopOffset: v })}
					VRTopOffsetUnits={multiChartVRTopOffsetUnits}
					setVRTopOffsetUnits={(v) =>
						setAttributes({ multiChartVRTopOffsetUnits: v })
					}
					VRBottomOffset={multiChartVRBottomOffset}
					setVRBottomOffset={(v) =>
						setAttributes({ multiChartVRBottomOffset: v })
					}
					VRBottomOffsetUnits={multiChartVRBottomOffsetUnits}
					setVRBottomOffsetUnits={(v) =>
						setAttributes({ multiChartVRBottomOffsetUnits: v })
					}
					setAttributes={setAttributes}
				/>
				<FB_InputControl
					label={__("CSS ID", "frontis-blocks")}
					value={multiChartWrapperID}
					onChangeValue={(v) => setAttributes({ multiChartWrapperID: v })}
					helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
				/>
				<FB_InputControl
					label={__("CSS Class", "frontis-blocks")}
					value={multiChartWrapperClass}
					onChangeValue={(v) => setAttributes({ multiChartWrapperClass: v })}
					helpText={__("Separate with spaces key.", "frontis-blocks")}
				/>
			</PanelBody>

			<PanelBody title={__("Background", "frontis-blocks")} initialOpen={false}>
				<FB_BackgroundColorControl
					bgColorSwitcher={multiChartBgColorSwitcher}
					setBgColorSwitcher={(v) =>
						setAttributes({ multiChartBgColorSwitcher: v })
					}
					normalBackgroundType={multiChartBackgroundType}
					setNormalBackgroundType={(v) =>
						setAttributes({ multiChartBackgroundType: v })
					}
					normalClassicColor={multiChartClassicColor}
					setNormalClassicColor={(v) =>
						setAttributes({
							multiChartClassicColor: v === undefined ? "" : v,
						})
					}
					normalGradientColor={multiChartGradientColor}
					setNormalGradientColor={(v) =>
						setAttributes({
							multiChartGradientColor: v === undefined ? null : v,
						})
					}
					normalCustomGradientSwitcher={multiChartCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(v) =>
						setAttributes({ multiChartCustomGradientSwitcher: v })
					}
					normalCustomGradientInputValue={multiChartCustomGradientInputValue}
					setNormalCustomGradientInputValue={(v) =>
						setAttributes({ multiChartCustomGradientInputValue: v })
					}
					normalBackgroundImageUrl={multiChartBackgroundImageUrl}
					setNormalBackgroundImageUrl={(v) =>
						setAttributes({ multiChartBackgroundImageUrl: v })
					}
					normalBackgroundImageAlt={multiChartBackgroundImageAlt}
					setNormalBackgroundImageAlt={(v) =>
						setAttributes({ multiChartBackgroundImageAlt: v })
					}
					normalBackgroundImageID={multiChartBackgroundImageID}
					setNormalBackgroundImageID={(v) =>
						setAttributes({ multiChartBackgroundImageID: v })
					}
					normalBackgroundImagePosition={multiChartBackgroundImagePosition}
					setNormalBackgroundImagePosition={(v) =>
						setAttributes({ multiChartBackgroundImagePosition: v })
					}
					normalBackgroundImageAttachment={multiChartBackgroundImageAttachment}
					setNormalBackgroundImageAttachment={(v) =>
						setAttributes({ multiChartBackgroundImageAttachment: v })
					}
					normalBackgroundImageRepeat={multiChartBackgroundImageRepeat}
					setNormalBackgroundImageRepeat={(v) =>
						setAttributes({ multiChartBackgroundImageRepeat: v })
					}
					normalBackgroundImageSize={multiChartBackgroundImageSize}
					setNormalBackgroundImageSize={(v) =>
						setAttributes({ multiChartBackgroundImageSize: v })
					}
					hoverBackgroundType={multiChartHoverBackgroundType}
					setHoverBackgroundType={(v) =>
						setAttributes({ multiChartHoverBackgroundType: v })
					}
					hoverClassicColor={multiChartHoverClassicColor}
					setHoverClassicColor={(v) =>
						setAttributes({
							multiChartHoverClassicColor: v === undefined ? "" : v,
						})
					}
					hoverGradientColor={multiChartHoverGradientColor}
					setHoverGradientColor={(v) =>
						setAttributes({
							multiChartHoverGradientColor: v === undefined ? null : v,
						})
					}
					hoverCustomGradientSwitcher={multiChartHoverCustomGradientSwitcher}
					setHoverCustomGradientSwitcher={(v) =>
						setAttributes({ multiChartHoverCustomGradientSwitcher: v })
					}
					hoverCustomGradientInputValue={
						multiChartHoverCustomGradientInputValue
					}
					setHoverCustomGradientInputValue={(v) =>
						setAttributes({ multiChartHoverCustomGradientInputValue: v })
					}
					hoverBackgroundImageUrl={multiChartHoverBackgroundImageUrl}
					setHoverBackgroundImageUrl={(v) =>
						setAttributes({ multiChartHoverBackgroundImageUrl: v })
					}
					hoverBackgroundImageAlt={multiChartHoverBackgroundImageAlt}
					setHoverBackgroundImageAlt={(v) =>
						setAttributes({ multiChartHoverBackgroundImageAlt: v })
					}
					hoverBackgroundImageID={multiChartHoverBackgroundImageID}
					setHoverBackgroundImageID={(v) =>
						setAttributes({ multiChartHoverBackgroundImageID: v })
					}
					hoverBackgroundImagePosition={multiChartHoverBackgroundImagePosition}
					setHoverBackgroundImagePosition={(v) =>
						setAttributes({ multiChartHoverBackgroundImagePosition: v })
					}
					hoverBackgroundImageAttachment={
						multiChartHoverBackgroundImageAttachment
					}
					setHoverBackgroundImageAttachment={(v) =>
						setAttributes({ multiChartHoverBackgroundImageAttachment: v })
					}
					hoverBackgroundImageRepeat={multiChartHoverBackgroundImageRepeat}
					setHoverBackgroundImageRepeat={(v) =>
						setAttributes({ multiChartHoverBackgroundImageRepeat: v })
					}
					hoverBackgroundImageSize={multiChartHoverBackgroundImageSize}
					setHoverBackgroundImageSize={(v) =>
						setAttributes({ multiChartHoverBackgroundImageSize: v })
					}
				/>
			</PanelBody>

			<PanelBody title={__("Border", "frontis-blocks")} initialOpen={false}>
				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={multiChartWrapperBorder}
					options={BORDER_STYLES}
					onChange={(v) => setAttributes({ multiChartWrapperBorder: v })}
				/>
				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={multiChartWrapperBorderColorSwitcher}
					setGlobalSwitcher={(v) =>
						setAttributes({ multiChartWrapperBorderColorSwitcher: v })
					}
				/>
				{multiChartWrapperBorderColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={multiChartWrapperBorderColor}
						setGlobalColor={(v) =>
							setAttributes({
								multiChartWrapperBorderColor: v === undefined ? "" : v,
							})
						}
					/>
				)}
				{multiChartWrapperBorderColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={multiChartWrapperBorderHoverColor}
						setGlobalColor={(v) =>
							setAttributes({
								multiChartWrapperBorderHoverColor: v === undefined ? "" : v,
							})
						}
					/>
				)}
				<FB_Spacing
					label={__("Border Width", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={multiChartWrapperBorderTypeUnitsHandler}
					spacingUnits={multiChartWrapperBorderTypeUnits}
					spacingDesktop={multiChartWrapperBorderTypeDesktop}
					spacingTablet={multiChartWrapperBorderTypeTablet}
					spacingMobile={multiChartWrapperBorderTypeMobile}
					handleSpacingUnitHandler={handleMultiChartWrapperBorderUnitHandler}
					spacingCombineBtn={multiChartWrapperBorderTypeLink}
					spacingCombineBtnHandler={() =>
						setAttributes({
							multiChartWrapperBorderTypeLink: !multiChartWrapperBorderTypeLink,
						})
					}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={multiChartWrapperBorderRadiusUnitsHandler}
					spacingUnits={multiChartWrapperBorderRadiusUnits}
					spacingDesktop={multiChartWrapperBorderRadiusDesktop}
					spacingTablet={multiChartWrapperBorderRadiusTablet}
					spacingMobile={multiChartWrapperBorderRadiusMobile}
					handleSpacingUnitHandler={
						handleMultiChartWrapperBorderRadiusUnitHandler
					}
					spacingCombineBtn={multiChartWrapperBorderRadiusLink}
					spacingCombineBtnHandler={() =>
						setAttributes({
							multiChartWrapperBorderRadiusLink:
								!multiChartWrapperBorderRadiusLink,
						})
					}
					setAttributes={setAttributes}
				/>
			</PanelBody>

			<PanelBody
				title={__("Padding/Margin", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={multiChartPaddingUnitsHandler}
					spacingUnits={multiChartPaddingUnits}
					spacingDesktop={multiChartPaddingDesktop}
					spacingTablet={multiChartPaddingTablet}
					spacingMobile={multiChartPaddingMobile}
					handleSpacingUnitHandler={handleMultiChartPaddingUnitHandler}
					spacingCombineBtn={multiChartPaddingLink}
					spacingCombineBtnHandler={() =>
						setAttributes({ multiChartPaddingLink: !multiChartPaddingLink })
					}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={multiChartMarginUnitsHandler}
					spacingUnits={multiChartMarginUnits}
					spacingDesktop={multiChartMarginDesktop}
					spacingTablet={multiChartMarginTablet}
					spacingMobile={multiChartMarginMobile}
					handleSpacingUnitHandler={handleMultiChartMarginUnitHandler}
					spacingCombineBtn={multiChartMarginLink}
					spacingCombineBtnHandler={() =>
						setAttributes({ multiChartMarginLink: !multiChartMarginLink })
					}
					setAttributes={setAttributes}
				/>
			</PanelBody>

			<PanelBody
				title={__("Responsive Control", "frontis-blocks")}
				initialOpen={false}
				className="fb-setting-responsive-control-wrapper"
			>
				<FB_VisibilityControl
					desktopValue={multiChartDesktopSwitcher}
					setDesktopValue={(value) =>
						setAttributes({ multiChartDesktopSwitcher: value })
					}
					tabletValue={multiChartTabletSwitcher}
					setTabletValue={(value) =>
						setAttributes({ multiChartTabletSwitcher: value })
					}
					mobileValue={multiChartMobileSwitcher}
					setMobileValue={(value) =>
						setAttributes({ multiChartMobileSwitcher: value })
					}
				/>
			</PanelBody>

			<PanelBody title={__("Custom CSS", "frontis-blocks")} initialOpen={false}>
				<FB_CustomCSSEditor
					value={multiChartCustomCSS}
					onChangeValue={(value) =>
						setAttributes({ multiChartCustomCSS: value })
					}
				/>
			</PanelBody>

			{/* <PanelBody title={__("Custom CSS", "frontis-blocks")} initialOpen={false}>
				<FB_CustomCSSEditor
					value={advancedImageCustomCSS}
					onChangeValue={(value) =>
						setAttributes({ advancedImageCustomCSS: value })
					}
				/>
			</PanelBody> */}
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
