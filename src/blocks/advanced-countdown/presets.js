/**
 * presets.js — React render for all 5 countdown presets
 * Used by edit.js (live preview) and save.js (frontend static)
 */
import {
	pad2,
	getTimeLeft,
	getProgress,
	formatTime12,
} from "./countdown-utils";

/* ===================
   PRESET 1 — SVG circle progress + icon
   ====================== */
export function renderPreset1(attributes, timeData) {
	const {
		progressBarSize,
		showIcon,
		iconUrl,
		iconSize,
		svgActiveColor,
		svgInactiveColor,
		svgStrokeWidth,
		footerText,
		dueDateTime,
		startDateTime,
	} = attributes;

	const { hours, minutes, seconds } = timeData;
	const totalHours = timeData.days * 24 + hours;

	const progress = getProgress(startDateTime, dueDateTime);
	const size = progressBarSize;
	const r = (size - svgStrokeWidth * 2) / 2;
	const cx = size / 2;
	const cy = size / 2;
	const circ = 2 * Math.PI * r;
	const dash = circ * (1 - progress);

	const unit = (val, lbl) => (
		<div className="acd-unit">
			<span className="acd-num">{val}</span>
			<span className="acd-label">{lbl}</span>
		</div>
	);

	return (
		<div className="acd-preset1-wrap" style={{ width: size, height: size }}>
			{/* SVG circle */}
			<svg width={size} height={size} className="acd-svg-canvas">
				{/* Inactive track */}
				<circle
					cx={cx}
					cy={cy}
					r={r}
					fill="none"
					stroke={svgInactiveColor}
					strokeWidth={svgStrokeWidth}
				/>
				{/* Active progress */}
				<circle
					cx={cx}
					cy={cy}
					r={r}
					fill="none"
					stroke={svgActiveColor}
					strokeWidth={svgStrokeWidth}
					strokeDasharray={circ}
					strokeDashoffset={dash}
					strokeLinecap="round"
					style={{
						transform: "rotate(-90deg)",
						transformOrigin: "50% 50%",
						transition: "stroke-dashoffset 1s linear",
					}}
				/>
			</svg>

			{/* Inner content */}
			<div className="acd-inner-content">
				{/* Icon */}
				{showIcon && (
					<div
						className="acd-icon-wrap"
						style={{ width: iconSize, height: iconSize }}
					>
						{iconUrl ? (
							<img src={iconUrl} alt="" />
						) : (
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
								<path d="M12 6v6l4 2" />
							</svg>
						)}
					</div>
				)}

				{/* Time digits */}
				<div className="acd-time-wrap">
					{unit(String(totalHours).padStart(3, " "), "Hour")}
					<span className="acd-sep">:</span>
					{unit(pad2(minutes), "Minute")}
					<span className="acd-sep">:</span>
					{unit(pad2(seconds), "Second")}
				</div>

				{/* Footer text */}
				{footerText && <div className="acd-footer">{footerText}</div>}
			</div>
		</div>
	);
}

/* ======================
   PRESET 2 — Dashed circle progress
   ======================= */
export function renderPreset2(attributes, timeData) {
	const {
		p2CircleSize,
		p2DashActiveColor,
		p2DashInactiveColor,
		p2DashStrokeWidth,
		p2DashGap,
		p2SvgActiveColor,
		p2SvgInactiveColor,
		p2SvgStrokeWidth,
		countdownColor,
		countdownFontSize,
		countdownFontWeight,
		separatorColor,
		separatorFontSize,
		separatorGap,
		footerText,
		footerColor,
		footerFontSize,
		footerFontWeight,
		footerBgColor,
		footerBorderRadius,
		footerPaddingY,
		footerPaddingX,
		dueDateTime,
		startDateTime,
	} = attributes;

	const { hours, minutes, seconds } = timeData;
	const totalHours = timeData.days * 24 + hours;
	const progress = getProgress(startDateTime, dueDateTime);

	const size = p2CircleSize;
	const r = (size - p2DashStrokeWidth * 2) / 2;
	const cx = (cy = size / 2);
	const circ = 2 * Math.PI * r;

	// Dashed stroke: each dash = stroke, gap = gap
	const dashUnit = p2DashStrokeWidth + p2DashGap;
	const totalDashes = Math.floor(circ / dashUnit);
	const activeDashes = Math.round(totalDashes * (1 - progress));

	const numStyle = {
		color: countdownColor,
		fontSize: `${countdownFontSize * 0.6}px`,
		fontWeight: countdownFontWeight,
		lineHeight: 1,
	};
	const sepStyle = {
		color: separatorColor,
		fontSize: `${separatorFontSize * 0.6}px`,
		margin: `0 ${separatorGap * 0.5}px`,
		alignSelf: "flex-end",
		paddingBottom: 4,
	};

	return (
		<div
			className="acd-preset2-wrap"
			style={{
				position: "relative",
				width: size,
				height: size,
				margin: "0 auto",
			}}
		>
			<svg
				width={size}
				height={size}
				style={{ position: "absolute", top: 0, left: 0 }}
			>
				<circle
					cx={cx}
					cy={cy}
					r={r}
					fill="none"
					stroke={p2DashInactiveColor}
					strokeWidth={p2DashStrokeWidth}
					strokeDasharray={`${p2DashStrokeWidth} ${p2DashGap}`}
				/>
				<circle
					cx={cx}
					cy={cy}
					r={r}
					fill="none"
					stroke={p2DashActiveColor}
					strokeWidth={p2DashStrokeWidth}
					strokeDasharray={`${p2DashStrokeWidth} ${p2DashGap}`}
					strokeDashoffset={circ * progress}
					style={{
						transform: "rotate(-90deg)",
						transformOrigin: "50% 50%",
						transition: "stroke-dashoffset 1s linear",
					}}
				/>
			</svg>
			<div
				style={{
					position: "absolute",
					inset: 0,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					gap: 4,
				}}
			>
				<div style={{ display: "flex", alignItems: "center" }}>
					<span style={numStyle}>{String(totalHours).padStart(3, " ")}</span>
					<span style={sepStyle}>:</span>
					<span style={numStyle}>{pad2(seconds)}</span>
				</div>
				{footerText && (
					<div
						style={{
							color: footerColor,
							fontSize: `${footerFontSize * 0.7}px`,
							fontWeight: footerFontWeight,
							background: footerBgColor,
							borderRadius: `${footerBorderRadius}px`,
							padding: `${footerPaddingY * 0.7}px ${footerPaddingX * 0.7}px`,
							marginTop: 4,
						}}
					>
						{footerText}
					</div>
				)}
			</div>
		</div>
	);
}

/* ======================
   PRESET 3 — Timeline bar
   ======================== */
export function renderPreset3(attributes, timeData) {
	const {
		p3BarBgColor,
		p3BarBorderRadius,
		p3IndicatorBgColor,
		p3IndicatorBorderRadius,
		p3TimeFontSize,
		p3TimeFontWeight,
		p3TimeColor,
		p3CountdownFontSize,
		p3CountdownFontWeight,
		p3CountdownColor,
		dueDateTime,
		startDateTime,
	} = attributes;

	const { days, hours, minutes, seconds } = timeData;
	const progress = getProgress(startDateTime, dueDateTime);
	const startStr = formatTime12(startDateTime);
	const dueStr = formatTime12(dueDateTime);

	const timeStyle = {
		color: p3TimeColor,
		fontSize: `${p3TimeFontSize}px`,
		fontWeight: p3TimeFontWeight,
	};
	const cdStyle = {
		color: p3CountdownColor,
		fontSize: `${p3CountdownFontSize}px`,
		fontWeight: p3CountdownFontWeight,
	};

	return (
		<div
			className="acd-preset3-wrap"
			style={{ width: "100%", maxWidth: 480, margin: "0 auto" }}
		>
			{/* Countdown badge + bar */}
			<div style={{ position: "relative", marginBottom: 0 }}>
				{/* Badge */}
				<div
					style={{
						position: "absolute",
						top: -14,
						left: `${progress * 100}%`,
						transform: "translateX(-50%)",
						background: p3IndicatorBgColor,
						borderRadius: `${p3IndicatorBorderRadius}px`,
						padding: "4px 10px",
						whiteSpace: "nowrap",
						zIndex: 2,
					}}
				>
					<span style={cdStyle}>
						{days}days {pad2(hours)}h {pad2(minutes)}m {pad2(seconds)}s
					</span>
				</div>

				{/* Bar */}
				<div
					style={{
						background: p3BarBgColor,
						borderRadius: `${p3BarBorderRadius}px`,
						padding: "8px 16px",
						display: "flex",
						alignItems: "center",
						gap: 12,
						marginTop: 14,
					}}
				>
					<span style={timeStyle}>{startStr}</span>
					{/* Tick marks */}
					<div
						style={{ flex: 1, display: "flex", alignItems: "center", gap: 2 }}
					>
						{Array.from({ length: 20 }).map((_, i) => (
							<div
								key={i}
								style={{
									width: 2,
									height: i % 5 === 0 ? 18 : 10,
									borderRadius: 1,
									background:
										i / 20 <= progress ? p3IndicatorBgColor : "#cccccc",
									flexShrink: 0,
								}}
							/>
						))}
					</div>
					<span style={timeStyle}>{dueStr}</span>
				</div>
			</div>
		</div>
	);
}

/* =====================
   PRESET 4 — Flip / tile cards
   ===================== */
export function renderPreset4(attributes, timeData) {
	const {
		p4TileBgColor,
		p4TileBorderRadius,
		p4DashPattern,
		p4LabelAlignment,
		p4NumberFontSize,
		p4NumberFontWeight,
		p4NumberColor,
		p4LabelFontSize,
		p4LabelFontWeight,
		p4LabelColor,
		p4TileGap,
	} = attributes;

	const { days, hours, minutes, seconds } = timeData;
	const units = [
		{ val: pad2(days), lbl: "DAYS" },
		{ val: pad2(hours), lbl: "HOURS" },
		{ val: pad2(minutes), lbl: "MINUTES" },
		{ val: pad2(seconds), lbl: "SEC" },
	];

	/* Dash pattern background */
	const dashBg = () => {
		switch (p4DashPattern) {
			case "diagonal":
				return "repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 8px)";
			case "dots":
				return "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px) 0 0 / 8px 8px";
			case "lines":
				return "repeating-linear-gradient(0deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 8px)";
			default:
				return "none";
		}
	};

	const numStyle = {
		color: p4NumberColor,
		fontSize: `${p4NumberFontSize}px`,
		fontWeight: p4NumberFontWeight,
		lineHeight: 1,
	};
	const lblStyle = {
		color: p4LabelColor,
		fontSize: `${p4LabelFontSize}px`,
		fontWeight: p4LabelFontWeight,
		letterSpacing: "0.05em",
	};

	const tile = ({ val, lbl }) => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 0,
			}}
		>
			{p4LabelAlignment === "top" && (
				<span style={{ ...lblStyle, marginBottom: 4 }}>{lbl}</span>
			)}
			<div
				style={{
					background: p4TileBgColor,
					borderRadius: `${p4TileBorderRadius}px`,
					padding: "16px 20px",
					minWidth: 80,
					textAlign: "center",
					backgroundImage: dashBg(),
					position: "relative",
				}}
			>
				{p4LabelAlignment === "inside" && (
					<div
						style={{
							position: "absolute",
							bottom: 6,
							right: 8,
							...lblStyle,
							fontSize: `${p4LabelFontSize - 1}px`,
							opacity: 0.6,
						}}
					>
						{lbl}
					</div>
				)}
				<span style={numStyle}>{val}</span>
			</div>
			{(p4LabelAlignment === "bottom" || !p4LabelAlignment) && (
				<span style={{ ...lblStyle, marginTop: 6 }}>{lbl}</span>
			)}
		</div>
	);

	return (
		<div
			className="acd-preset4-wrap"
			style={{
				display: "flex",
				alignItems: "flex-end",
				gap: `${p4TileGap}px`,
				justifyContent: "center",
				flexWrap: "wrap",
			}}
		>
			{units.map((u, i) => (
				<div key={i}>{tile(u)}</div>
			))}
		</div>
	);
}

/* ===================
   PRESET 5 — Dot ring circles
   ===================== */
export function renderPreset5(attributes, timeData) {
	const {
		p5DotActiveColor,
		p5DotInactiveColor,
		p5DotSize,
		p5DotCount,
		p5CircleSize,
		p5NumberFontSize,
		p5NumberFontWeight,
		p5NumberColor,
		p5LabelFontSize,
		p5LabelColor,
		p5Gap,
	} = attributes;

	const { days, hours, minutes } = timeData;
	const units = [
		{ val: days, lbl: "Days", max: 30 },
		{ val: hours, lbl: "Hours", max: 24 },
		{ val: minutes, lbl: "Minutes", max: 60 },
	];

	const dotRing = ({ val, lbl, max }) => {
		const activeDots = Math.round((val / max) * p5DotCount);
		const r = p5CircleSize / 2 - p5DotSize;
		const cx = (cy = p5CircleSize / 2);

		const dots = Array.from({ length: p5DotCount }).map((_, i) => {
			const angle = (i / p5DotCount) * 2 * Math.PI - Math.PI / 2;
			const x = cx + r * Math.cos(angle);
			const y = cy + r * Math.sin(angle);
			const active = i < activeDots;
			return (
				<circle
					key={i}
					cx={x}
					cy={y}
					r={p5DotSize / 2}
					fill={active ? p5DotActiveColor : p5DotInactiveColor}
					opacity={active ? 1 : (1 - i / p5DotCount) * 0.6 + 0.15}
				/>
			);
		});

		return (
			<div
				style={{
					position: "relative",
					width: p5CircleSize,
					height: p5CircleSize,
				}}
			>
				<svg
					width={p5CircleSize}
					height={p5CircleSize}
					style={{ position: "absolute", inset: 0 }}
				>
					{dots}
				</svg>
				<div
					style={{
						position: "absolute",
						inset: 0,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: 4,
					}}
				>
					<span
						style={{
							color: p5NumberColor,
							fontSize: `${p5NumberFontSize}px`,
							fontWeight: p5NumberFontWeight,
							lineHeight: 1,
						}}
					>
						{pad2(val)}
					</span>
					<span
						style={{ color: p5LabelColor, fontSize: `${p5LabelFontSize}px` }}
					>
						{lbl}
					</span>
				</div>
			</div>
		);
	};

	return (
		<div
			className="acd-preset5-wrap"
			style={{
				display: "flex",
				flexWrap: "wrap",
				alignItems: "flex-start",
				justifyContent: "center",
				gap: `${p5Gap}px`,
			}}
		>
			{units.map((u, i) => (
				<div key={i}>{dotRing(u)}</div>
			))}
		</div>
	);
}

/* ====================
   Main renderCountdown()
   ======================== */
export function renderCountdown(attributes, timeData) {
	switch (attributes.presetStyle) {
		case "preset-2":
			return renderPreset2(attributes, timeData);
		case "preset-3":
			return renderPreset3(attributes, timeData);
		case "preset-4":
			return renderPreset4(attributes, timeData);
		case "preset-5":
			return renderPreset5(attributes, timeData);
		default:
			return renderPreset1(attributes, timeData);
	}
}
