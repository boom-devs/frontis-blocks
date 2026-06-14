import Chart from "chart.js/auto";

(function ($) {
	"use strict";

	const initMultiChart = (wrapper) => {
		const $wrapper = $(wrapper);
		const $canvas = $wrapper.find("canvas");
		const $legendContainer = $wrapper.find(".fb-chart-legend");
		const $filterBtn = $wrapper.find(".fb-chart-period.fb-chart-filter");

		if (!$wrapper.length || !$canvas.length) return;

		const chartId =
			$wrapper.data("block-id") ||
			"fb-chart-" + Math.random().toString(36).substr(2, 9);
		$canvas.attr("id", chartId);

		const ctxEl = $canvas[0];
		const ctx = ctxEl.getContext("2d");

		if (typeof Chart === "undefined") {
			console.warn("Chart.js is not loaded.");
			return;
		}

		// Register datalabels plugin if available
		if (typeof ChartDataLabels !== "undefined") {
			Chart.register(ChartDataLabels);
		}

		// Read config from data attribute
		const config = $wrapper.data("chart-config");
		if (!config || typeof config !== "object") return;

		// Helpers
		const hexToRgba = (hex, opacity) => {
			hex = (hex || "#3b82f6").replace("#", "");
			if (hex.length === 3)
				hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
			const r = parseInt(hex.substring(0, 2), 16),
				g = parseInt(hex.substring(2, 4), 16),
				b = parseInt(hex.substring(4, 6), 16);
			return `rgba(${r},${g},${b},${opacity})`;
		};

		// Chart Type Flags
		let chartType = config.type;
		const isArea = chartType === "areaChart";
		const isHorizontal = chartType === "horizontalBar";
		const isCircular = ["pie", "doughnut", "polarArea"].includes(chartType);
		const isRadar = chartType === "radar";
		const isBar = ["bar", "horizontalBar", "waterfall"].includes(chartType);
		const isLine = chartType === "line";

		if (isArea) chartType = "line";
		if (isHorizontal) chartType = "bar";

		// Typography settings
		const xFont = {
			size: config.x_axis_font_size || 12,
			family: config.x_axis_font_family || "system-ui, sans-serif",
			weight: config.x_axis_font_weight || "normal",
		};
		const yFont = {
			size: config.y_axis_font_size || 12,
			family: config.y_axis_font_family || "system-ui, sans-serif",
			weight: config.y_axis_font_weight || "normal",
		};

		// Build Datasets
		const datasets = [];
		(config.datasets || []).forEach((series) => {
			const baseColor = series.color || "#3b82f6";
			const ds = {
				label: series.name || "Series",
				data: series.values || [],
				backgroundColor:
					isArea || isRadar ? hexToRgba(baseColor, 0.2) : baseColor,
				borderColor: baseColor,
				fill: isArea,
				borderWidth: 2,
				tension: isLine || isArea || isRadar ? 0.4 : 0,
				pointRadius: isBar ? 0 : 3,
			};

			datasets.push(ds);
		});

		// Options
		const showGrid = config.show_grid !== "no";
		const isStacked = isBar && config.bar_variant === "stacked";
		const gridColor = config.grid_color || "rgba(148,163,184,0.15)";

		const options = {
			responsive: true,
			maintainAspectRatio: false,
			indexAxis: config.index_axis || "x",
			animation: { duration: 600, easing: "easeInOutQuart" },
			plugins: {
				legend: { display: false },
				tooltip: {
					enabled: true,
					backgroundColor: config.tooltip_bg_color || "#1e293b",
					titleColor: config.tooltip_color || "#ffffff",
					bodyColor: config.tooltip_color || "#ffffff",
					padding: 12,
					cornerRadius: 8,
				},
				datalabels: {
					display: isCircular && chartType !== "polarArea",
					color: "#ffffff",
					font: { weight: "bold", size: 13 },
					formatter: (value, ctx2) => {
						const total = ctx2.chart.data.datasets[0].data.reduce(
							(a, b) => Number(a) + Number(b),
							0,
						);
						return total > 0
							? Math.round((Number(value) / total) * 100) + "%"
							: "";
					},
				},
			},
		};

		// Scales
		if (isRadar) {
			options.scales = {
				r: {
					angleLines: { display: showGrid, color: gridColor },
					grid: { display: showGrid, color: gridColor },
					pointLabels: { color: config.x_axis_color || "#94a3b8", font: xFont },
					ticks: {
						backdropColor: "transparent",
						color: config.y_axis_color || "#94a3b8",
						font: { size: yFont.size },
					},
				},
			};
		} else if (!isCircular) {
			options.scales = {
				y: {
					beginAtZero: true,
					stacked: isStacked,
					grid: {
						display: isArea ? false : showGrid,
						color: gridColor,
						drawBorder: false,
						borderDash: [4, 4],
					},
					ticks: {
						color: config.y_axis_color || "#94a3b8",
						font: yFont,
						padding: 10,
					},
				},
				x: {
					stacked: isStacked,
					grid: {
						display: isArea ? false : showGrid,
						color: gridColor,
						drawBorder: false,
					},
					ticks: {
						color: config.x_axis_color || "#94a3b8",
						font: xFont,
						padding: 10,
					},
				},
			};
		}

		if (chartType === "doughnut") options.cutout = "70%";

		// Destroy stale instance
		if (!window.fbCharts) window.fbCharts = {};
		if (window.fbCharts[chartId]) {
			window.fbCharts[chartId].destroy();
		}

		// Render Chart
		window.fbCharts[chartId] = new Chart(ctx, {
			type: chartType,
			data: {
				labels: config.labels || [],
				datasets: datasets,
			},
			options: options,
		});

		// Filter Dropdown Interaction
		$filterBtn.on("click", function (e) {
			const $item = $(e.target).closest(".fb-dropdown-item");

			if ($item.length) {
				e.preventDefault();
				e.stopPropagation();

				const idx = parseInt($item.attr("data-index"), 10) || 0;
				const $this = $(this);

				$this.find(".fb-dropdown-item").removeClass("fb-item-active");
				$item.addClass("fb-item-active");
				$this.find(".fb-current-filter").text($item.text().trim());

				const chart = window.fbCharts[chartId];
				if (chart && config.datasets) {
					chart.data.datasets.forEach((ds, di) => {
						const originalSource = config.datasets[di]?.values || [];
						if (originalSource.length > 0) {
							ds.data = originalSource
								.slice(idx)
								.concat(originalSource.slice(0, idx));
						}
					});
					chart.update();
				}
				$this.removeClass("fb-active");
			} else {
				e.stopPropagation();
				$(this).toggleClass("fb-active");
			}
		});

		$(document).on("click", function () {
			$(".fb-chart-filter").removeClass("fb-active");
		});

		if ($legendContainer.length) {
			$legendContainer.empty();
			config.datasets.forEach((series, i) => {
				const $item = $(`
					<div class="fb-legend-item" data-index="${i}">
						<span class="fb-legend-dot" style="background-color:${
							series.color || "#3b82f6"
						};"></span>
						<span class="fb-legend-text">${series.name || "Content"}</span>
					</div>
				`);
				$item.on("click", () => {
					const chart = window.fbCharts[chartId];
					if (!chart) return;
					if (isCircular) {
						const meta = chart.getDatasetMeta(0);
						if (meta.data[i]) meta.data[i].hidden = !meta.data[i].hidden;
					} else {
						chart.getDatasetMeta(i).hidden = !chart.getDatasetMeta(i).hidden;
					}
					chart.update();
					$item.toggleClass("fb-legend-hidden");
				});
				$legendContainer.append($item);
			});
		}
	};

	$(document).ready(() => {
		$(".fb-elegant-chart-block").each(function () {
			initMultiChart(this);
		});
	});
})(jQuery);
