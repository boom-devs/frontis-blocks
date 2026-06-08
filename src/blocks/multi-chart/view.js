(function ($) {
	"use strict";

	const initMultiChart = (wrapper) => {
		const $wrapper = $(wrapper);
		const $canvas = $wrapper.find("canvas");
		const $legendContainer = $wrapper.find(".fb-chart-legend");
		const $filterBtn = $wrapper.find(".fb-chart-period.fb-chart-filter");

		if (!$wrapper.length || !$canvas.length) return;

		// Use blockID or unique identifier for tracking instance
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
		let config = $wrapper.attr("data-chart-config");
		if (typeof config === "string") {
			try {
				config = JSON.parse(config);
			} catch (e) {
				return;
			}
		}
		if (!config) return;

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
		const isCircular = ["pie", "doughnut", "polarArea"].includes(chartType);
		const isRadar = chartType === "radar";
		const isBar = chartType === "bar";
		const isLine = chartType === "line";

		if (isArea) chartType = "line";

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
		if (isCircular) {
			datasets.push({
				data: config.datasets.map((d) => d.values[0] || 0),
				backgroundColor: config.datasets.map((d) => d.color || "#3b82f6"),
				borderColor: "#ffffff",
				borderWidth: 3,
				hoverOffset: 8,
			});
		} else {
			config.datasets.forEach((series) => {
				const baseColor = series.color || "#3b82f6";
				const ds = {
					label: series.name || "Content",
					data: series.values || [],
					backgroundColor: baseColor,
					borderColor: baseColor,
					borderWidth: 2,
				};

				if (isArea) {
					const canvasH = ctxEl.clientHeight || config.height || 300;
					const grad = ctx.createLinearGradient(0, 0, 0, canvasH);
					grad.addColorStop(0, hexToRgba(baseColor, 0.35));
					grad.addColorStop(1, hexToRgba(baseColor, 0.0));
					ds.backgroundColor = grad;
					ds.fill = true;
					ds.tension = 0.4;
					ds.pointRadius = 0;
					ds.pointHoverRadius = 4;
					ds.borderWidth = 2.5;
				} else if (isLine) {
					ds.tension = 0.4;
					ds.pointRadius = 4;
					ds.pointBackgroundColor = baseColor;
					ds.pointBorderColor = "#fff";
					ds.pointBorderWidth = 2;
					ds.pointHoverRadius = 6;
					ds.fill = false;
				} else if (isRadar) {
					ds.backgroundColor = hexToRgba(baseColor, 0.18);
					ds.borderColor = baseColor;
					ds.borderWidth = 2;
					ds.pointRadius = 4;
					ds.pointBackgroundColor = baseColor;
					ds.pointBorderColor = "#fff";
					ds.pointBorderWidth = 2;
				} else if (isBar) {
					ds.borderSkipped = false;
					ds.maxBarThickness = 28;
					ds.barThickness = "flex";
					if (config.bar_variant === "rounded_pill") {
						ds.borderRadius = 999;
						ds.borderWidth = 0;
					} else {
						ds.borderRadius = 8;
					}
				}
				datasets.push(ds);
			});
		}

		// Options
		const showGrid = config.show_grid !== "no";
		const gridColor = config.grid_color || "rgba(148,163,184,0.15)";

		const options = {
			responsive: true,
			maintainAspectRatio: false,
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
					stacked: isBar && config.bar_variant === "stacked",
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
					stacked: isBar && config.bar_variant === "stacked",
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
				labels: isCircular
					? config.datasets.map((d) => d.name)
					: config.labels || [],
				datasets: datasets,
			},
			options: options,
		});

		// Filter Dropdown Interaction
		$filterBtn.on("click", function (e) {
			e.stopPropagation();
			$(this).toggleClass("fb-active");
		});

		$(document).on("click", () => $filterBtn.removeClass("fb-active"));

		$wrapper.on("click", ".fb-dropdown-item", function () {
			const $item = $(this);
			const idx = parseInt($item.data("index"), 10) || 0;

			$wrapper.find(".fb-dropdown-item").removeClass("fb-item-active");
			$item.addClass("fb-item-active");
			$wrapper.find(".fb-current-filter").text($item.text().trim());

			const chart = window.fbCharts[chartId];
			if (chart && !isCircular) {
				chart.data.datasets.forEach((ds, di) => {
					const original = config.datasets[di]?.values || [];
					ds.data = original.slice(idx).concat(original.slice(0, idx));
				});
				chart.update();
			}
		});

		// Legend Interaction
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
