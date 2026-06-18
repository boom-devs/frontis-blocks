import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { useEffect, useState, useRef } from "@wordpress/element";
import Chart from "chart.js/auto";
import SwitchToBlockSettings from "@Utils/SwitchToBlockSettings";

import "./editor.scss";
import Inspector from "./inspector";
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import multiChartStyle from "./styling";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function Edit({
	attributes,
	setAttributes,
	clientId,
	isSelected,
}) {
	const {
		blockID,
		blockStyle,
		barVariant,
		chartType,
		chartTitle,
		chartDescription,
		chartHeight,
		filterList,
		filterIcon,
		chartDatasets,
		chartLabels,
		showGrid,
		gridColor,
		xAxisNormalColor,
		yAxisNormalColor,
		tooltipBg,
		showChartHeader,
		showChartFilters,
		showChartLegend,
		showChartFooter,
		multiChartDesktopSwitcher,
		multiChartTabletSwitcher,
		multiChartMobileSwitcher,
		multiChartWrapperID,
		multiChartWrapperClass,
		legendTextColor,
		legendDotSize,
		legendDotRadius,
		legendGap,
	} = attributes;

	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [activeFilterIndex, setActiveFilterIndex] = useState(0);
	const canvasRef = useRef(null);
	const chartInstance = useRef(null);

	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: "fb-multi-chart",
		isSelected,
		attributes,
		setAttributes,
	});

	/**
	 * Manages tab button settings on click
	 */
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

	useEffect(() => {
		if (blockID) {
			const css = multiChartStyle(attributes);
			setAttributes({ blockStyle: css });
		}
	}, [attributes, blockID]);

	useEffect(() => {
		if (!canvasRef.current) return;
		const ctx = canvasRef.current.getContext("2d");

		if (chartInstance.current) {
			chartInstance.current.destroy();
		}
		const labels = chartLabels
			? chartLabels.split(",").map((l) => l.trim())
			: [];

		const datasets = chartDatasets.map((ds) => {
			const isArea = chartType === "areaChart";
			const baseColor = ds.color || "#3b82f6";

			let data = ds.values
				? ds.values.split(",").map((v) => parseFloat(v))
				: [];

			if (activeFilterIndex > 0 && data.length > 0) {
				data = data
					.slice(activeFilterIndex)
					.concat(data.slice(0, activeFilterIndex));
			}

			const hexToRgba = (hex, opacity) => {
				const r = parseInt(hex.slice(1, 3), 16);
				const g = parseInt(hex.slice(3, 5), 16);
				const b = parseInt(hex.slice(5, 7), 16);
				return `rgba(${r}, ${g}, ${b}, ${opacity})`;
			};

			return {
				label: ds.series_name || __("Content", "frontis-blocks"),
				data: data,
				backgroundColor:
					isArea || chartType === "radar"
						? hexToRgba(baseColor, 0.2)
						: baseColor,
				borderColor: baseColor,
				fill: isArea,
				borderWidth: 2,
				tension:
					chartType === "line" || isArea || chartType === "radar" ? 0.4 : 0,
				pointRadius: chartType === "bar" ? 0 : 3,
			};
		});

		const isCircular = ["pie", "doughnut", "polarArea"].includes(chartType);
		const isRadar = chartType === "radar";

		try {
			const finalType =
				chartType === "areaChart"
					? "line"
					: chartType === "horizontalBar"
					? "bar"
					: chartType === "waterfall"
					? "bar"
					: chartType;

			chartInstance.current = new Chart(ctx, {
				type: finalType,
				data: {
					labels: labels,
					datasets: datasets,
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					indexAxis: chartType === "horizontalBar" ? "y" : "x",
					plugins: {
						legend: { display: false },
					},
					scales: isRadar
					? { r: { angleLines: { display: true } } }
					: isCircular
					? { x: { display: false }, y: { display: false } }
					: {
						y: {
							beginAtZero: true,
							stacked: barVariant === "stacked",
						},
						x: {
							stacked: barVariant === "stacked",
						},
					},
				},
			});
		} catch (e) {
			console.error("Chart initialization failed:", e);
		}

		return () => {
			if (chartInstance.current) {
				chartInstance.current.destroy();
			}
		};
	}, [
		chartType,
		chartLabels,
		chartDatasets,
		barVariant,
		chartHeight,
		showGrid,
		gridColor,
		xAxisNormalColor,
		yAxisNormalColor,
		tooltipBg,
		isFilterOpen,
		activeFilterIndex,
	]);

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

	const blockProps = useBlockProps({
		className: `fb-elegant-chart-block fb-chart-type-${chartType} ${blockID} ${
			multiChartDesktopSwitcher ? "fb-desktop-responsive" : ""
		} ${multiChartTabletSwitcher ? "fb-tablet-responsive" : ""} ${
			multiChartMobileSwitcher ? "fb-mobile-responsive" : ""
		}`.trim(),
		id: multiChartWrapperID,
	});

	return (
		<>
			{isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			)}

			<div {...blockProps}>
				<div
					className={`fb-chart-card ${multiChartWrapperClass}`}
					ref={panelRef}
				>
					<div className="fb-chart-body-wrapper">
						{showChartHeader && (
							<div className="fb-chart-header">
								<div className="fb-chart-title-group">
									<p className="fb-chart-label">{dynamicTitle}</p>
								</div>
								{showChartFilters && (
									<div
										className={`fb-chart-period fb-chart-filter ${
											isFilterOpen ? "fb-active" : ""
										}`}
										onClick={() => setIsFilterOpen(!isFilterOpen)}
									>
										<span className="fb-current-filter">
											{filterList[activeFilterIndex]?.filter_label ||
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
															activeFilterIndex === index
																? "fb-item-active"
																: ""
														}`}
														onClick={(e) => {
															e.stopPropagation();
															setActiveFilterIndex(index);
															setIsFilterOpen(false);
														}}
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
							<div className="fb-canvas-wrapper">
								{(!chartDatasets || chartDatasets.length === 0) && (
									<div className="fb-chart-preview-placeholder">
										{__("Chart Data Preview Area", "frontis-blocks")}
									</div>
								)}
								<canvas ref={canvasRef}></canvas>
							</div>
							{showChartLegend && (
								<div className="fb-chart-legend">
									{chartDatasets.map((series, i) => (
										<div key={i} className="fb-legend-item">
											<span
												className="fb-legend-dot"
												style={{ backgroundColor: series.color || "#3b82f6" }}
											></span>
											<span className="fb-legend-text">
												{series.series_name || __("Content", "frontis-blocks")}
											</span>
										</div>
									))}
								</div>
							)}
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
