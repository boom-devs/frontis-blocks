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
import FB_InputControl from "@Components/input-control";
import FB_IconPicker from "@Components/icon-picker";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_VisibilityControl from "@Components/visibility-control";
import FB_BackgroundColorControl from "@Components/background-color-control";
import FB_ResponsiveAlignmentControl from "@Components/responsive-alignment-control";
import FB_TypographyControl from "@Components/typography-control";
import FB_SwitcherControl from "@Components/switcher-control";
import SortableItem from "./sortableItem";
import { BORDER_STYLES } from "@Constants/fbConstants";
import { Panel } from "@wordpress/components";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		chartType,
		barVariant,
		chartTitle,
		chartDescription,
		chartHeight,
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
		toggleBtnPaddingDesktop,
		toggleBtnBorderRadiusDesktop,
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
		footerTitleTypography,
		footerTitleHoverColor,
		footerDescNormalColor,
		footerDescTypography,
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
		footerPaddingUnits,
		footerPaddingTablet,
		footerPaddingMobile,
		footerMarginUnits,
		footerMarginTablet,
		footerMarginMobile,
		footerMarginDesktop,
		footerMarginLink,
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
	const [footerTab, setFooterTab] = useState("normal");
	const [axisTab, setAxisTab] = useState("normal");

	const wrapperBorderTypeChange = (event, position) => {
		const value = event.target.value;
		if (multiChartWrapperBorderTypeLink) {
			const val = { top: value, right: value, bottom: value, left: value };
			if (deviceType === "Desktop")
				setAttributes({ multiChartWrapperBorderTypeDesktop: val });
			else if (deviceType === "Tablet")
				setAttributes({ multiChartWrapperBorderTypeTablet: val });
			else setAttributes({ multiChartWrapperBorderTypeMobile: val });
		} else {
			if (deviceType === "Desktop")
				setAttributes({
					multiChartWrapperBorderTypeDesktop: {
						...multiChartWrapperBorderTypeDesktop,
						[position]: value,
					},
				});
			else if (deviceType === "Tablet")
				setAttributes({
					multiChartWrapperBorderTypeTablet: {
						...multiChartWrapperBorderTypeTablet,
						[position]: value,
					},
				});
			else
				setAttributes({
					multiChartWrapperBorderTypeMobile: {
						...multiChartWrapperBorderTypeMobile,
						[position]: value,
					},
				});
		}
	};

	const wrapperBorderRadiusChange = (event, position) => {
		const value = event.target.value;
		if (multiChartWrapperBorderRadiusLink) {
			const val = { top: value, right: value, bottom: value, left: value };
			if (deviceType === "Desktop")
				setAttributes({ multiChartWrapperBorderRadiusDesktop: val });
			else if (deviceType === "Tablet")
				setAttributes({ multiChartWrapperBorderRadiusTablet: val });
			else setAttributes({ multiChartWrapperBorderRadiusMobile: val });
		} else {
			if (deviceType === "Desktop")
				setAttributes({
					multiChartWrapperBorderRadiusDesktop: {
						...multiChartWrapperBorderRadiusDesktop,
						[position]: value,
					},
				});
			else if (deviceType === "Tablet")
				setAttributes({
					multiChartWrapperBorderRadiusTablet: {
						...multiChartWrapperBorderRadiusTablet,
						[position]: value,
					},
				});
			else
				setAttributes({
					multiChartWrapperBorderRadiusMobile: {
						...multiChartWrapperBorderRadiusMobile,
						[position]: value,
					},
				});
		}
	};

	/* =============================================
       REPEATER HANDLERS
    ============================================= */
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
						// {
						// 	label: __("Waterfall (Bar)", "frontis-blocks"),
						// 	value: "waterfall",
						// },
						// { label: __("Bubble", "frontis-blocks"), value: "bubble" },
						// { label: __("Scatter", "frontis-blocks"), value: "scatter" },
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
					min={100}
					max={800}
					rangeValue={{ Desktop: chartHeight }}
					onChangeHandler={(value) =>
						setAttributes({ chartHeight: value.Desktop })
					}
					deviceType="Desktop"
					setAttributes={setAttributes}
					isRangeUnit={false}
					resetFallbackValue={280}
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
					label={__("Typography", "frontis-blocks")}
					globalTypography={footerTitleTypography}
					setGlobalTypography={(v) =>
						setAttributes({ footerTitleTypography: v })
					}
				/>
				<FB_ColorControl
					label={__("Normal Color", "frontis-blocks")}
					globalColor={footerTitleNormalColor}
					setGlobalColor={(v) => setAttributes({ footerTitleNormalColor: v })}
				/>
				<FB_ColorControl
					label={__("Hover Color", "frontis-blocks")}
					globalColor={footerTitleHoverColor}
					setGlobalColor={(v) => setAttributes({ footerTitleHoverColor: v })}
				/>
			</PanelBody>
			<PanelBody title={__("Description", "frontis-blocks")} initialOpen={true}>
				<FB_TypographyControl
					label={__("Typography", "frontis-blocks")}
					globalTypography={footerDescTypography}
					setGlobalTypography={(v) =>
						setAttributes({ footerDescTypography: v })
					}
				/>
				<FB_ColorControl
					label={__("Normal Color", "frontis-blocks")}
					globalColor={footerDescNormalColor}
					setGlobalColor={(v) => setAttributes({ footerDescNormalColor: v })}
				/>
				<FB_ColorControl
					label={__("Hover Color", "frontis-blocks")}
					globalColor={footerDescHoverColor}
					setGlobalColor={(v) => setAttributes({ footerDescHoverColor: v })}
				/>
			</PanelBody>
		</>
	);

	const advancedControls = (
		<>
			<PanelBody title={__("Layout", "frontis-blocks")} initialOpen={true}>
				<FB_Range
					min={0}
					max={1000}
					label={__("Z Index", "frontis-blocks")}
					rangeValue={multiChartGlobalZIndex}
					onChangeHandler={(value) =>
						setAttributes({ multiChartGlobalZIndex: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
					isRangeUnit={false}
				/>
				<FB_InputControl
					label={__("CSS ID", "frontis-blocks")}
					value={multiChartWrapperID}
					onChangeValue={(value) =>
						setAttributes({ multiChartWrapperID: value })
					}
				/>
				<FB_InputControl
					label={__("CSS Class", "frontis-blocks")}
					value={multiChartWrapperClass}
					onChangeValue={(value) =>
						setAttributes({ multiChartWrapperClass: value })
					}
				/>
			</PanelBody>

			<PanelBody
				title={__("Responsive Visibility", "frontis-blocks")}
				initialOpen={false}
				className="fb-setting-responsive-control-wrapper"
			>
				<FB_VisibilityControl
					desktopValue={multiChartDesktopSwitcher}
					setDesktopValue={(v) =>
						setAttributes({ multiChartDesktopSwitcher: v })
					}
					tabletValue={multiChartTabletSwitcher}
					setTabletValue={(v) => setAttributes({ multiChartTabletSwitcher: v })}
					mobileValue={multiChartMobileSwitcher}
					setMobileValue={(v) => setAttributes({ multiChartMobileSwitcher: v })}
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

			{/* <PanelBody
				title={__("Padding and Margin", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={multiChartGlobalPaddingUnits}
					spacingUnits={globalPaddingUnits}
					spacingDesktop={multiChartGlobalPaddingDesktop}
					spacingTablet={multiChartGlobalPaddingTablet}
					spacingMobile={multiChartGlobalPaddingMobile}
					handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
					spacingCombineBtn={multiChartGlobalPaddingLink}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleGlobalMarginUnitsHandler}
					spacingUnits={globalMarginUnits}
					spacingDesktop={globalMarginDesktop}
					spacingTablet={globalMarginTablet}
					spacingMobile={globalMarginMobile}
					handleSpacingUnitHandler={handleGlobalMarginUnitChange}
					spacingCombineBtn={globalMarginLink}
					spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
					setAttributes={setAttributes}
				/>
			</PanelBody>

			<PanelBody title="Background" initialOpen={false}>
				<FB_BackgroundColorControl
					bgColorSwitcher={testBgColorSwitcher}
					setBgColorSwitcher={(value) =>
						setAttributes({ testBgColorSwitcher: value })
					}
					normalBackgroundType={testBackgroundType}
					setNormalBackgroundType={(value) =>
						setAttributes({ testBackgroundType: value })
					}
					normalClassicColor={testClassicColor}
					setNormalClassicColor={(value) =>
						setAttributes({
							testClassicColor: value === undefined ? "" : value,
						})
					}
					normalGradientColor={testGradientColor}
					setNormalGradientColor={(value) =>
						setAttributes({
							testGradientColor: value === undefined ? null : value,
						})
					}
					normalCustomGradientSwitcher={testCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(value) =>
						setAttributes({ testCustomGradientSwitcher: value })
					}
					normalCustomGradientInputValue={testCustomGradientInputValue}
					setNormalCustomGradientInputValue={(value) =>
						setAttributes({ testCustomGradientInputValue: value })
					}
					normalBackgroundImageUrl={testBackgroundImageUrl}
					setNormalBackgroundImageUrl={(value) =>
						setAttributes({ testBackgroundImageUrl: value })
					}
					normalBackgroundImageAlt={testBackgroundImageAlt}
					setNormalBackgroundImageAlt={(value) =>
						setAttributes({ testBackgroundImageAlt: value })
					}
					normalBackgroundImageID={testBackgroundImageID}
					setNormalBackgroundImageID={(value) =>
						setAttributes({ testBackgroundImageID: value })
					}
					normalBackgroundImagePosition={testBackgroundImagePosition}
					setNormalBackgroundImagePosition={(value) =>
						setAttributes({ testBackgroundImagePosition: value })
					}
					normalBackgroundImageAttachment={testBackgroundImageAttachment}
					setNormalBackgroundImageAttachment={(value) =>
						setAttributes({ testBackgroundImageAttachment: value })
					}
					normalBackgroundImageRepeat={testBackgroundImageRepeat}
					setNormalBackgroundImageRepeat={(value) =>
						setAttributes({ testBackgroundImageRepeat: value })
					}
					normalBackgroundImageSize={testBackgroundImageSize}
					setNormalBackgroundImageSize={(value) =>
						setAttributes({ testBackgroundImageSize: value })
					}
					hoverBackgroundType={hoverBackgroundType}
					setHoverBackgroundType={(value) =>
						setAttributes({ hoverBackgroundType: value })
					}
					hoverClassicColor={hoverClassicColor}
					setHoverClassicColor={(value) =>
						setAttributes({
							hoverClassicColor: value === undefined ? "" : value,
						})
					}
					hoverGradientColor={hoverGradientColor}
					setHoverGradientColor={(value) =>
						setAttributes({
							hoverGradientColor: value === undefined ? null : value,
						})
					}
					hoverCustomGradientSwitcher={hoverCustomGradientSwitcher}
					setHoverCustomGradientSwitcher={(value) =>
						setAttributes({ hoverCustomGradientSwitcher: value })
					}
					hoverCustomGradientInputValue={hoverCustomGradientInputValue}
					setHoverCustomGradientInputValue={(value) =>
						setAttributes({ hoverCustomGradientInputValue: value })
					}
					hoverBackgroundImageUrl={hoverBackgroundImageUrl}
					setHoverBackgroundImageUrl={(value) =>
						setAttributes({ hoverBackgroundImageUrl: value })
					}
					hoverBackgroundImageAlt={hoverBackgroundImageAlt}
					setHoverBackgroundImageAlt={(value) =>
						setAttributes({ hoverBackgroundImageAlt: value })
					}
					hoverBackgroundImageID={hoverBackgroundImageID}
					setHoverBackgroundImageID={(value) =>
						setAttributes({ hoverBackgroundImageID: value })
					}
					hoverBackgroundImagePosition={hoverBackgroundImagePosition}
					setHoverBackgroundImagePosition={(value) =>
						setAttributes({ hoverBackgroundImagePosition: value })
					}
					hoverBackgroundImageAttachment={hoverBackgroundImageAttachment}
					setHoverBackgroundImageAttachment={(value) =>
						setAttributes({ hoverBackgroundImageAttachment: value })
					}
					hoverBackgroundImageRepeat={hoverBackgroundImageRepeat}
					setHoverBackgroundImageRepeat={(value) =>
						setAttributes({ hoverBackgroundImageRepeat: value })
					}
					hoverBackgroundImageSize={hoverBackgroundImageSize}
					setHoverBackgroundImageSize={(value) =>
						setAttributes({ hoverBackgroundImageSize: value })
					}
				/>
			</PanelBody> */}
			{/* <PanelBody
				title={__("Border and Shadow", "frontis-blocks")}
				initialOpen={false}
			>
				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={globalBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ globalBorder: value })}
				/>

				<FB_Color
					label={__("Border Color", "frontis-blocks")}
					globalColorSwitcher={globalBorderColorSwitcher}
					globalColor={globalBorderColor}
					globalHoverColor={globalBorderHoverColor}
					handleColorSwitcherChange={handleGlobalBorderColorSwitcherChange}
					handleGlobalColorChange={handleGlobalBorderColorChange}
					handleGlobalHoverColorChange={handleGlobalBorderHoverColorChange}
				/>

				<FB_Spacing
					label={__("Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleGlobalBorderUnitsHandler}
					spacingUnits={globalBorderUnits}
					spacingDesktop={globalBorderDesktop}
					spacingTablet={globalBorderTablet}
					spacingMobile={globalBorderMobile}
					handleSpacingUnitHandler={handleGlobalBorderUnitChange}
					spacingCombineBtn={globalBorderLink}
					spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
					spacingUnits={globalBorderRadiusUnits}
					spacingDesktop={globalBorderRadiusDesktop}
					spacingTablet={globalBorderRadiusTablet}
					spacingMobile={globalBorderRadiusMobile}
					handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
					spacingCombineBtn={globalBorderRadiusLink}
					spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
					setAttributes={setAttributes}
				/>
				<FB_BoxShadowControl
					onBoxShadowChange={(value) =>
						setAttributes({ boxGlobalBoxShadowValues: value })
					}
					initialShadowValue={boxGlobalBoxShadowValues}
					onBoxShadowStyleChange={(value) =>
						setAttributes({
							boxGlobalBoxShadowCssValue: value,
						})
					}
				/>
			</PanelBody> */}

			{/* <PanelBody
				title={__("Responsive Control", "frontis-blocks")}
				initialOpen={false}
				className="fb-setting-responsive-control-wrapper"
			>
				<FB_VisibilityControl
					desktopValue={advancedImageDesktopSwitcher}
					setDesktopValue={(value) =>
						setAttributes({ advancedImageDesktopSwitcher: value })
					}
					tabletValue={advancedImageTabletSwitcher}
					setTabletValue={(value) =>
						setAttributes({ advancedImageTabletSwitcher: value })
					}
					mobileValue={advancedImageMobileSwitcher}
					setMobileValue={(value) =>
						setAttributes({ advancedImageMobileSwitcher: value })
					}
				/>
			</PanelBody> */}
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
