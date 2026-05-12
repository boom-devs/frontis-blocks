(function () {
	"use strict";

	function pad2(n) {
		return String(n).padStart(2, "0");
	}

	function getTimeLeft(due) {
		const now = Date.now();
		const d = due ? new Date(due).getTime() : now + 86400000 * 15;
		const diff = Math.max(0, d - now);
		return {
			days: Math.floor(diff / 86400000),
			hours: Math.floor((diff % 86400000) / 3600000),
			minutes: Math.floor((diff % 3600000) / 60000),
			seconds: Math.floor((diff % 60000) / 1000),
			totalMs: diff,
		};
	}

	function getProgress(start, due) {
		const now = Date.now();
		const s = start ? new Date(start).getTime() : now - 86400000;
		const d = due ? new Date(due).getTime() : now + 86400000 * 15;
		const total = Math.max(1, d - s);
		return Math.max(0, Math.min(1, (now - s) / total));
	}

	function formatTime12(str) {
		if (!str) return "--:-- --";
		const d = new Date(str);
		let h = d.getHours();
		const m = String(d.getMinutes()).padStart(2, "0");
		const ap = h >= 12 ? "PM" : "AM";
		h = h % 12 || 12;
		return `${String(h).padStart(2, "0")}:${m} ${ap}`;
	}

	function renderPreset1(el, attrs, t) {
		const size = attrs.progressBarSize || 524;
		const sw = attrs.svgStrokeWidth || 6;
		const r = (size - sw * 2) / 2;
		const cx = (cy = size / 2);
		const circ = 2 * Math.PI * r;
		const prog = getProgress(attrs.startDateTime, attrs.dueDateTime);
		const dash = circ * (1 - prog);
		const totalHours = t.days * 24 + t.hours;

		el.innerHTML = `
	<div style="position:relative;width:${size}px;height:${size}px;margin:0 auto">
		<svg width="${size}" height="${size}" style="position:absolute;top:0;left:0">
			<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${
				attrs.svgInactiveColor || "rgba(255,255,255,0.2)"
			}" stroke-width="${sw}"/>
			<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${
				attrs.svgActiveColor || "#f0a500"
			}" stroke-width="${sw}"
				stroke-dasharray="${circ}" stroke-dashoffset="${dash}" stroke-linecap="round"
				style="transform:rotate(-90deg);transform-origin:50% 50%;transition:stroke-dashoffset 1s linear"/>
		</svg>
		<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px">
			${
				attrs.showIcon && attrs.iconUrl
					? `<img src="${attrs.iconUrl}" style="width:${
							attrs.iconSize || 60
					  }px;height:${attrs.iconSize || 60}px;object-fit:contain;color:${
							attrs.iconColor || "#fff"
					  }" />`
					: ""
			}
			<div style="display:flex;align-items:center">
				<div style="display:flex;flex-direction:column;align-items:center">
					<span style="color:${attrs.countdownColor || "#fff"};font-size:${
						attrs.countdownFontSize || 72
					}px;font-weight:${
						attrs.countdownFontWeight || 700
					};line-height:1">${totalHours}</span>
					<span style="color:${attrs.labelColor || "#fff"};font-size:${
						attrs.labelFontSize || 14
					}px;margin-top:4px">Hour</span>
				</div>
				<span style="color:${attrs.separatorColor || "#fff"};font-size:${
					attrs.separatorFontSize || 48
				}px;margin:0 ${
					attrs.separatorGap || 8
				}px;align-self:flex-end;padding-bottom:8px">:</span>
				<div style="display:flex;flex-direction:column;align-items:center">
					<span style="color:${attrs.countdownColor || "#fff"};font-size:${
						attrs.countdownFontSize || 72
					}px;font-weight:${
						attrs.countdownFontWeight || 700
					};line-height:1">${pad2(t.minutes)}</span>
					<span style="color:${attrs.labelColor || "#fff"};font-size:${
						attrs.labelFontSize || 14
					}px;margin-top:4px">Minute</span>
				</div>
				<span style="color:${attrs.separatorColor || "#fff"};font-size:${
					attrs.separatorFontSize || 48
				}px;margin:0 ${
					attrs.separatorGap || 8
				}px;align-self:flex-end;padding-bottom:8px">:</span>
				<div style="display:flex;flex-direction:column;align-items:center">
					<span style="color:${attrs.countdownColor || "#fff"};font-size:${
						attrs.countdownFontSize || 72
					}px;font-weight:${
						attrs.countdownFontWeight || 700
					};line-height:1">${pad2(t.seconds)}</span>
					<span style="color:${attrs.labelColor || "#fff"};font-size:${
						attrs.labelFontSize || 14
					}px;margin-top:4px">Second</span>
				</div>
			</div>
			${
				attrs.footerText
					? `<div style="color:${attrs.footerColor || "#fff"};font-size:${
							attrs.footerFontSize || 16
					  }px;font-weight:${attrs.footerFontWeight || 600};background:${
							attrs.footerBgColor || "transparent"
					  };border-radius:${attrs.footerBorderRadius || 4}px;padding:${
							attrs.footerPaddingY || 4
					  }px ${attrs.footerPaddingX || 12}px">${attrs.footerText}</div>`
					: ""
			}
		</div>
	</div>`;
	}

	function renderPreset2(el, attrs, t) {
		const size = attrs.p2CircleSize || 200;
		const sw = attrs.p2DashStrokeWidth || 6;
		const gap = attrs.p2DashGap || 4;
		const r = (size - sw * 2) / 2;
		const cx = (cy = size / 2);
		const circ = 2 * Math.PI * r;
		const prog = getProgress(attrs.startDateTime, attrs.dueDateTime);
		const totalHours = t.days * 24 + t.hours;
		el.innerHTML = `
	<div style="position:relative;width:${size}px;height:${size}px;margin:0 auto">
		<svg width="${size}" height="${size}" style="position:absolute;top:0;left:0">
			<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${
				attrs.p2DashInactiveColor || "rgba(255,255,255,0.25)"
			}" stroke-width="${sw}" stroke-dasharray="${sw} ${gap}"/>
			<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${
				attrs.p2DashActiveColor || "#f0a500"
			}" stroke-width="${sw}"
				stroke-dasharray="${sw} ${gap}" stroke-dashoffset="${circ * prog}"
				style="transform:rotate(-90deg);transform-origin:50% 50%;transition:stroke-dashoffset 1s linear"/>
		</svg>
		<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px">
			<span style="color:${attrs.countdownColor || "#fff"};font-size:${
				(attrs.countdownFontSize || 72) * 0.6
			}px;font-weight:${
				attrs.countdownFontWeight || 700
			};line-height:1">${totalHours}:${pad2(t.seconds)}</span>
			${
				attrs.footerText
					? `<div style="color:${attrs.footerColor || "#fff"};font-size:${
							(attrs.footerFontSize || 16) * 0.7
					  }px;margin-top:4px">${attrs.footerText}</div>`
					: ""
			}
		</div>
	</div>`;
	}

	function renderPreset3(el, attrs, t) {
		const prog = getProgress(attrs.startDateTime, attrs.dueDateTime);
		const startStr = formatTime12(attrs.startDateTime);
		const dueStr = formatTime12(attrs.dueDateTime);
		const ticks = Array.from(
			{ length: 20 },
			(_, i) =>
				`<div style="width:2px;height:${
					i % 5 === 0 ? 18 : 10
				}px;border-radius:1px;background:${
					i / 20 <= prog ? attrs.p3IndicatorBgColor || "#f0a500" : "#ccc"
				};flex-shrink:0"></div>`,
		).join("");
		el.innerHTML = `
	<div style="width:100%;max-width:480px;margin:0 auto;position:relative">
		<div style="position:absolute;top:-14px;left:${
			prog * 100
		}%;transform:translateX(-50%);background:${
			attrs.p3IndicatorBgColor || "#f0a500"
		};border-radius:${
			attrs.p3IndicatorBorderRadius || 50
		}px;padding:4px 10px;white-space:nowrap;z-index:2">
			<span style="color:${attrs.p3CountdownColor || "#fff"};font-size:${
				attrs.p3CountdownFontSize || 13
			}px;font-weight:${attrs.p3CountdownFontWeight || 700}">${
				t.days
			}days ${pad2(t.hours)}h ${pad2(t.minutes)}m ${pad2(t.seconds)}s</span>
		</div>
		<div style="background:${attrs.p3BarBgColor || "#fff"};border-radius:${
			attrs.p3BarBorderRadius || 50
		}px;padding:8px 16px;display:flex;align-items:center;gap:12px;margin-top:14px">
			<span style="color:${attrs.p3TimeColor || "#333"};font-size:${
				attrs.p3TimeFontSize || 14
			}px;font-weight:${attrs.p3TimeFontWeight || 600}">${startStr}</span>
			<div style="flex:1;display:flex;align-items:center;gap:2px">${ticks}</div>
			<span style="color:${attrs.p3TimeColor || "#333"};font-size:${
				attrs.p3TimeFontSize || 14
			}px;font-weight:${attrs.p3TimeFontWeight || 600}">${dueStr}</span>
		</div>
	</div>`;
	}

	function renderPreset4(el, attrs, t) {
		const dashBg = () => {
			switch (attrs.p4DashPattern) {
				case "diagonal":
					return "repeating-linear-gradient(45deg,rgba(0,0,0,.05) 0px,rgba(0,0,0,.05) 1px,transparent 1px,transparent 8px)";
				case "dots":
					return "radial-gradient(circle,rgba(0,0,0,.08) 1px,transparent 1px) 0 0/8px 8px";
				case "lines":
					return "repeating-linear-gradient(0deg,rgba(0,0,0,.05) 0px,rgba(0,0,0,.05) 1px,transparent 1px,transparent 8px)";
				default:
					return "none";
			}
		};
		const units = [
			{ v: pad2(t.days), l: "DAYS" },
			{ v: pad2(t.hours), l: "HOURS" },
			{ v: pad2(t.minutes), l: "MINUTES" },
			{ v: pad2(t.seconds), l: "SEC" },
		];
		const la = attrs.p4LabelAlignment || "bottom";
		const tiles = units
			.map(
				(u) => `
		<div style="display:flex;flex-direction:column;align-items:center;gap:0">
			${
				la === "top"
					? `<span style="color:${attrs.p4LabelColor || "#111"};font-size:${
							attrs.p4LabelFontSize || 11
					  }px;font-weight:${
							attrs.p4LabelFontWeight || 600
					  };letter-spacing:.05em;margin-bottom:4px">${u.l}</span>`
					: ""
			}
			<div style="background:${attrs.p4TileBgColor || "#fff"};border-radius:${
				attrs.p4TileBorderRadius || 8
			}px;padding:16px 20px;min-width:80px;text-align:center;background-image:${dashBg()};position:relative">
				${
					la === "inside"
						? `<div style="position:absolute;bottom:6px;right:8px;color:${
								attrs.p4LabelColor || "#111"
						  };font-size:${(attrs.p4LabelFontSize || 11) - 1}px;opacity:.6">${
								u.l
						  }</div>`
						: ""
				}
				<span style="color:${attrs.p4NumberColor || "#111"};font-size:${
					attrs.p4NumberFontSize || 60
				}px;font-weight:${attrs.p4NumberFontWeight || 800};line-height:1">${
					u.v
				}</span>
			</div>
			${
				la === "bottom" || !la
					? `<span style="color:${attrs.p4LabelColor || "#111"};font-size:${
							attrs.p4LabelFontSize || 11
					  }px;font-weight:${
							attrs.p4LabelFontWeight || 600
					  };letter-spacing:.05em;margin-top:6px">${u.l}</span>`
					: ""
			}
		</div>`,
			)
			.join("");
		el.innerHTML = `<div style="display:flex;align-items:flex-end;gap:${
			attrs.p4TileGap || 12
		}px;justify-content:center;flex-wrap:wrap">${tiles}</div>`;
	}

	function renderPreset5(el, attrs, t) {
		const units = [
			{ val: t.days, lbl: "Days", max: 30 },
			{ val: t.hours, lbl: "Hours", max: 24 },
			{ val: t.minutes, lbl: "Minutes", max: 60 },
		];
		const size = attrs.p5CircleSize || 160;
		const dc = attrs.p5DotCount || 36;
		const ds = attrs.p5DotSize || 8;
		const r = size / 2 - ds;
		const cx = (cy = size / 2);

		const rings = units
			.map((u) => {
				const active = Math.round((u.val / u.max) * dc);
				const dots = Array.from({ length: dc }, (_, i) => {
					const angle = (i / dc) * 2 * Math.PI - Math.PI / 2;
					const x = cx + r * Math.cos(angle);
					const y = cy + r * Math.sin(angle);
					const act = i < active;
					const op = act ? 1 : (1 - i / dc) * 0.6 + 0.15;
					return `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${
						ds / 2
					}" fill="${
						act
							? attrs.p5DotActiveColor || "#fff"
							: attrs.p5DotInactiveColor || "rgba(255,255,255,0.25)"
					}" opacity="${op.toFixed(2)}"/>`;
				}).join("");
				return `
		<div style="position:relative;width:${size}px;height:${size}px">
			<svg width="${size}" height="${size}" style="position:absolute;inset:0">${dots}</svg>
			<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px">
				<span style="color:${attrs.p5NumberColor || "#fff"};font-size:${
					attrs.p5NumberFontSize || 48
				}px;font-weight:${
					attrs.p5NumberFontWeight || 300
				};line-height:1">${pad2(u.val)}</span>
				<span style="color:${attrs.p5LabelColor || "#fff"};font-size:${
					attrs.p5LabelFontSize || 13
				}px">${u.lbl}</span>
			</div>
		</div>`;
			})
			.join("");
		el.innerHTML = `<div style="display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:${
			attrs.p5Gap || 32
		}px">${rings}</div>`;
	}

	function initBlock(container) {
		const inner = container.querySelector(".acd-inner");
		if (!inner) return;
		const preset = container.dataset.preset || "preset-1";
		const due = container.dataset.due || "";
		const start = container.dataset.start || "";
		let attrs = {};
		try {
			attrs = JSON.parse(container.dataset.attrs || "{}");
		} catch (e) {}
		attrs.dueDateTime = due;
		attrs.startDateTime = start;

		function tick() {
			const t = getTimeLeft(due);
			switch (preset) {
				case "preset-2":
					renderPreset2(inner, attrs, t);
					break;
				case "preset-3":
					renderPreset3(inner, attrs, t);
					break;
				case "preset-4":
					renderPreset4(inner, attrs, t);
					break;
				case "preset-5":
					renderPreset5(inner, attrs, t);
					break;
				default:
					renderPreset1(inner, attrs, t);
			}
		}
		tick();
		setInterval(tick, 1000);
	}

	function init() {
		document.querySelectorAll(".acd-block .acd-container").forEach(initBlock);
	}

	if (document.readyState === "loading")
		document.addEventListener("DOMContentLoaded", init);
	else init();
})();
