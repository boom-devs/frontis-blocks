import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
	const {
		blockID,
		blockStyle,
		chartType,
		barVariant,
		chartTitle,
		chartDescription,
		chartHeight,
		filterList,
		chartDatasets,
		chartLabels,
		filterIcon,
		showGrid,
		gridColor,
		xAxisNormalColor,
		yAxisNormalColor,
		showChartHeader,
		showChartFilters,
		showChartLegend,
		showChartFooter,
		tooltipBg,
		tooltipColor,
		multiChartDesktopSwitcher,
		multiChartTabletSwitcher,
		multiChartMobileSwitcher,
		multiChartWrapperID,
		multiChartWrapperClass,
		xAxisTypography,
		yAxisTypography,
	} = attributes;

	const chartConfig = {
		type: chartType,
		index_axis: chartType === "horizontalBar" ? "y" : "x",
		height: chartHeight,
		bar_variant: barVariant,
		labels: chartLabels ? chartLabels.split(",").map((l) => l.trim()) : [],
		datasets: (chartDatasets || []).map((ds) => ({
			name: ds.series_name || __("Content", "frontis-blocks"),
			values: ds.values ? ds.values.split(",").map((v) => parseFloat(v)) : [],
			color: ds.color || "#3b82f6",
		})),
		show_grid: showGrid ? "yes" : "no",
		grid_color: gridColor,
		x_axis_color: xAxisNormalColor,
		y_axis_color: yAxisNormalColor,
		tooltip_bg_color: tooltipBg,
		tooltip_color: tooltipColor,
		x_axis_font_size: xAxisTypography?.fontSize?.Desktop,
		x_axis_font_family: xAxisTypography?.fontFamily,
		x_axis_font_weight: xAxisTypography?.fontWeight,
		y_axis_font_size: yAxisTypography?.fontSize?.Desktop,
		y_axis_font_family: yAxisTypography?.fontFamily,
		y_axis_font_weight: yAxisTypography?.fontWeight,
	};

	const blockProps = useBlockProps.save({
		className: `fb-elegant-chart-block fb-chart-type-${chartType} ${blockID} ${
			multiChartDesktopSwitcher ? "fb-desktop-responsive" : ""
		} ${multiChartTabletSwitcher ? "fb-tablet-responsive" : ""} ${
			multiChartMobileSwitcher ? "fb-mobile-responsive" : ""
		}`.trim(),
		id: multiChartWrapperID,
		"data-chart-config": JSON.stringify(chartConfig),
		"data-block-id": blockID,
	});

	const typeMap = {
		line: __("Line Chart", "frontis-blocks"),
		bar: __("Bar Chart", "frontis-blocks"),
		pie: __("Pie Chart", "frontis-blocks"),
		doughnut: __("Donut Chart", "frontis-blocks"),
		radar: __("Radar Chart", "frontis-blocks"),
		polarArea: __("Polar Chart", "frontis-blocks"),
		areaChart: __("Area Chart", "frontis-blocks"),
	};
	const dynamicTitle =
		chartTitle || typeMap[chartType] || __("Chart", "frontis-blocks");

	return (
		<>
			<div {...blockProps}>
				<div className={`fb-chart-card ${multiChartWrapperClass}`}>
					<div className="fb-chart-body-wrapper">
						{showChartHeader && (
							<div className="fb-chart-header">
								<div className="fb-chart-title-group">
									<p className="fb-chart-label">{dynamicTitle}</p>
								</div>
								{showChartFilters && (
									<div className="fb-chart-period fb-chart-filter">
										<span className="fb-current-filter">
											{filterList[0]?.filter_label ||
												__("This Week", "frontis-blocks")}
										</span>
										<span className="fb-filter-icon">
											{renderSVG(filterIcon?.value || "fas fa-chevron-down")}
										</span>
										<ul className="fb-dropdown-list">
											{filterList &&
												filterList.map((item, index) => (
													<li
														key={index}
														className={`fb-dropdown-item ${
															0 === index ? "fb-item-active" : ""
														}`}
														data-index={index}
													>
														{item.filter_label || __("Item", "frontis-blocks")}
													</li>
												))}
										</ul>
									</div>
								)}
							</div>
						)}

						<div className="fb-chart-card-body">
							<div
								className="fb-canvas-wrapper"
								style={{ height: `${chartHeight}px` }}
							>
								<canvas></canvas>
							</div>
							{showChartLegend && <div className="fb-chart-legend"></div>}
						</div>
					</div>

					{showChartFooter && (
						<div className="fb-chart-footer">
							<h2 className="fb-footer-title">{dynamicTitle}</h2>
							{chartDescription && (
								<p className="fb-chart-description">{chartDescription}</p>
							)}
						</div>
					)}
				</div>
			</div>
			{blockStyle && <style>{blockStyle}</style>}
		</>
	);
}
