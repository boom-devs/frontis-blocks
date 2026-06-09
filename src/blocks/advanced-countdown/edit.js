import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

import { useEffect, useState, useRef } from "@wordpress/element";
import SwitchToBlockSettings from "@Utils/SwitchToBlockSettings";
import "./editor.scss";

import Inspector from "./inspector";
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import generateCountdownStyle from "./styling";
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
		countDownLabelDay,
		countDownLabelHour,
		countDownLabelMinute,
		countDownLabelSecond,
		targetDate,
		showDays,
		showHours,
		showMinutes,
		showSeconds,
		countDownPresetStyle,

		// Attributes for style-1
		sun_icon,
		show_sun_icon,
		advancedCountdownUntilText,

		// New attributes for style-3
		advancedCountdownStyle3TimeGap,
		advancedCountdownStyle3TextFontSize,
		advancedCountdownStyle3TextFontSizeUnits,
		advancedCountdownStyle3TextFontWeight,
		advancedCountdownStyle3TextLineHeight,
		advancedCountdownStyle3TextLineHeightUnits,

		// New attributes for style-4
		advancedCountdownLabelAlignmentStyle4,

		// New attributes for style-5
		until_text,

		// Attributes for style-5
		days_total_dots,
		hours_total_dots,
		minutes_total_dots,
		active_dot_color,
		advancedCountdownActiveDotColor,
		advancedCountdownInactiveDotColor,
		advancedCountdownDotsGlowEffect,
		advancedCountdownGlowIntensity,
		inactive_dot_color,

		countDownGlobalWraperID,
		countDownGlobalWraperClass,

		countDownDesktopSwitcher,
		countDownTabletSwitcher,
		countDownMobileSwitcher,
	} = attributes;

	// PHP calculations for style-5
	const dot_thickness = attributes.dots_size_thickness?.size || 5;
	const user_gap = attributes.dots_gap?.size || 1;

	// Handle block ID generation (handles duplication and initial ID)
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: "fb-countdown",
		isSelected,
		attributes,
		setAttributes,
	});

	/** Start Generate Block Style */
	useEffect(() => {
		if (blockID) {
			const css = generateCountdownStyle(attributes);
			setAttributes({ blockStyle: css });
		}
	}, [attributes, blockID]);
	/** End Generate Block Style */

	/**
	 * Manages tab button settings and switches to block settings on click
	 */
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

	const [timeRemaining, setTimeRemaining] = useState({});

	// Set default date to one week from today
	const defaultDate = new Date();
	defaultDate.setDate(defaultDate.getDate() + 7);
	const defaultStartDate = new Date();

	const [date, setDate] = useState(
		targetDate ? new Date(targetDate) : defaultDate,
	);

	// Sync date with attributes if not already set
	useEffect(() => {
		if (!targetDate) {
			setAttributes({ targetDate: defaultDate.toISOString() });
			setAttributes({
				advancedCountdownStartDate: defaultStartDate.toISOString(),
			});
		}
	}, [targetDate, setAttributes, defaultDate]);

	// Update target date when date changes
	useEffect(() => {
		setAttributes({ targetDate: date.toISOString() });
	}, [date, setAttributes]);

	// Countdown Timer Logic
	useEffect(() => {
		// Helper function to format time with leading zero
		const formatTime = (time) => (time < 10 ? `0${time}` : time);

		if (!targetDate || isNaN(new Date(targetDate).getTime())) return;
		// New: Use advancedCountdownStartDate for start date

		const intervalId = setInterval(() => {
			const now = Date.now();
			const distance = new Date(targetDate).getTime() - now;

			const days = formatTime(Math.floor(distance / (1000 * 60 * 60 * 24)));
			const hours = formatTime(
				Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
			);
			const minutes = formatTime(
				Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
			);
			const seconds = formatTime(Math.floor((distance % (1000 * 60)) / 1000));

			if (distance < 0) {
				clearInterval(intervalId);
				setTimeRemaining({
					days: "00",
					hours: "00",
					minutes: "00",
					seconds: "00",
				});
			} else {
				setTimeRemaining({ days, hours, minutes, seconds });
			}
		}, 1000);

		return () => clearInterval(intervalId);
	}, [targetDate]);

	const M_PI = Math.PI; // Math.PI for circle calculations
	const c = 2 * M_PI * 45; // Circumference for a circle with radius 45
	const total_dashes = 60; // Total dashes for style-2
	const dash_width = 2; // Width of each dash
	const dash_gap = c / total_dashes - dash_width; // Gap between dashes

	const mask_id_style2 = `mask-style-2-${blockID}`;

	const label_d = attributes.advancedCountdownLabelDays || "Days";
	const label_h = attributes.advancedCountdownLabelHours || "Hours";
	const label_m = attributes.advancedCountdownLabelMinutes || "Minutes";

	const d_val = days_total_dots?.size || 12;
	const h_val = hours_total_dots?.size || 24;
	const m_val = minutes_total_dots?.size || 60;

	const config_style5 = {
		days: { label: label_d, dots: d_val },
		hours: { label: label_h, dots: h_val },
		minutes: { label: label_m, dots: m_val },
	};

	const glow_effect_class =
		advancedCountdownDotsGlowEffect === "yes"
			? `dots-glow-enabled dots-glow-intensity-${advancedCountdownGlowIntensity.Desktop}`
			: "";
	const glow_color_var = advancedCountdownGlowColor
		? `--glow-clr: ${advancedCountdownGlowColor};`
		: "";

	// New: Use advancedCountdownStartDate for start date
	const start_ts = new Date(targetDate).getTime();
	const due_ts = new Date(targetDate).getTime();
	const diff = (due_ts - start_ts) / 1000;

	let start_label_style3 = "";
	let due_label_style3 = "";

	const blockProps = useBlockProps({
		className: `fb-count-down-main-wrapper ${blockID} ${
			countDownDesktopSwitcher && "fb-desktop-responsive"
		} ${countDownTabletSwitcher && "fb-tablet-responsive"} ${
			countDownMobileSwitcher && "fb-mobile-responsive"
		}`,
	});

	return (
		<>
			{isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			)}

			<div {...blockProps}>
				<div
					className={`fb-parent-wrapper fb-count-down-wrapper ${blockID} ${countDownGlobalWraperClass}`}
					id={countDownGlobalWraperID}
					ref={panelRef}
				>
					{countDownPresetStyle === "style-1" && (
						<div className="countdown-container style_1_container">
							<svg
								className="countdown-svg"
								viewBox="0 0 100 100"
								preserveAspectRatio="none"
							>
								<circle
									cx="50"
									cy="50"
									r="40"
									className="background-circle"
								></circle>
								<circle
									cx="50"
									cy="50"
									r="40"
									className="progress-circle"
									fill="none"
								></circle>
							</svg>

							<div className="countdown-content">
								{show_sun_icon === "yes" && (
									<div className="countdown-icon">
										{renderSVG(sun_icon, setAttributes, {
											"aria-hidden": "true",
										})}
									</div>
								)}

								<div className="content-inner">
									<div className="time-display">
										<div className="hours_tab count_tab">
											<span className="time-val hours">
												{timeRemaining.hours || "00"}
											</span>
											<span className="label">Hour</span>
										</div>
										<span className="seperator"></span>
										<div className="minutes_tab count_tab">
											<span className="time-val minutes">
												{timeRemaining.minutes || "00"}
											</span>
											<span className="label">Minute</span>
										</div>
										<span className="seperator"></span>
										<div className="seconds_tab count_tab">
											<span className="time-val seconds">
												{timeRemaining.seconds || "00"}
											</span>
											<span className="label">Second</span>
										</div>
									</div>
								</div>

								{until_text && (
									<div className="countdown-footer">
										<p>{until_text}</p>
									</div>
								)}
							</div>
						</div>
					)}

					{countDownPresetStyle === "style-2" && (
						<div className="pea-countdown-items-container style-2-layout">
							<div className="dotted-item seconds style_2_container">
								<div className="svg-container">
									<svg
										viewBox="0 0 100 100"
										className="style-2-countdown-preset"
									>
										<defs>
											<mask id={mask_id_style2}>
												<circle
													className="progress-mask-circle"
													cx="50"
													cy="50"
													r="45"
													data-circumference={c}
													data-dots={total_dashes}
													style={{
														fill: "none",
														stroke: "#fff",
														strokeDasharray: c,
													}}
												></circle>
											</mask>
										</defs>

										<circle
											className="dash-bg"
											cx="50"
											cy="50"
											r="45"
											style={{
												fill: "none",
												stroke: "rgb(180, 176, 167)",
												strokeDasharray: dash_gap,
											}}
										></circle>

										<circle
											className="progress-circle"
											cx="50"
											cy="50"
											r="45"
											mask={`url(#${mask_id_style2})`}
											style={{ fill: "none", strokeDasharray: dash_gap }}
										></circle>
									</svg>

									<div className="count-content">
										<span className="time-val hours">
											{timeRemaining.hours || "00"}
										</span>
										<span className="seperator"></span>
										<span className="time-val minutes">
											{timeRemaining.minutes || "00"}
										</span>
									</div>
								</div>
								{advancedCountdownUntilText && (
									<div className="countdown-footer">
										<p>{advancedCountdownUntilText}</p>
									</div>
								)}
							</div>
						</div>
					)}

					{countDownPresetStyle === "style-3" && (
						<div
							className="style-3-container"
							style={{
								gap:
									advancedCountdownStyle3TimeGap.Desktop +
									advancedCountdownStyle3TimeGap.unit,
							}}
						>
							<div className="time-box">
								<span className="start-time-display">{start_label_style3}</span>
							</div>
							<div className="progress-track-wrapper">
								<div className="dash-track-base"></div>
								<div className="dash-track-progress"></div>
								<div className="progress-indicator">
									<span className="current-remaining-time"></span>
								</div>
							</div>{" "}
							{/* End progress-track-wrapper */}
							<div className="time-box">
								<span className="end-time-display">{due_label_style3}</span>
							</div>
						</div>
					)}

					{countDownPresetStyle === "style-4" && (
						<div
							className={`countdown-items pea-label-align-${advancedCountdownLabelAlignmentStyle4}`}
						>
							<div className="count_tab">
								<div className="item-box">
									<span className="time-val days">
										{timeRemaining.days || "00"}
									</span>
									<span className="label">Days</span>
								</div>
							</div>
							<div className="count_tab">
								<div className="item-box">
									<span className="time-val hours">
										{timeRemaining.hours || "00"}
									</span>
									<span className="label">Hours</span>
								</div>
							</div>
							<div className="count_tab">
								<div className="item-box">
									<span className="time-val minutes">
										{timeRemaining.minutes || "00"}
									</span>
									<span className="label">Minutes</span>
								</div>
							</div>
							<div className="count_tab">
								<div className="item-box">
									<span className="time-val seconds">
										{timeRemaining.seconds || "00"}
									</span>
									<span className="label">Sec</span>
								</div>
							</div>
						</div>
					)}

					{countDownPresetStyle === "style-5" && (
						<div
							className={`pea-countdown-wrapper style-6 style-5-container ${glow_effect_class}`}
							data-due={targetDate}
							data-start={targetDate} // Assuming start_date is also targetDate for simplicity
						>
							{Object.entries(config_style5).map(([unit, info]) => {
								const r = 45;
								const c_unit = 2 * M_PI * r;
								const dots_count = parseInt(info.dots);
								const gap =
									(c_unit / (dots_count > 0 ? dots_count : 1)) * user_gap;
								const mask_id_unit = `countdown-mask-${unit}-${blockID}`; // Ensure unique mask ID

								return (
									<div className={`dotted-item ${unit}`} key={unit}>
										<div className="svg-container">
											<svg viewBox="0 0 100 100">
												<defs>
													<mask id={mask_id_unit}>
														<circle
															className="progress-mask-circle"
															cx="50"
															cy="50"
															r="45"
															data-dots={dots_count}
															data-circumference={c_unit}
															style={{
																fill: "none",
																stroke: "#fff",
																strokeWidth: `${dot_thickness + 2}px`,
																strokeDasharray: c_unit,
																strokeDashoffset: c_unit,
																strokeLinecap: "round",
															}}
														></circle>
													</mask>
												</defs>

												<circle
													className="dots-bg"
													cx="50"
													cy="50"
													r="45"
													style={{
														strokeDasharray: `0.1 ${gap}`,
														fill: "none",
														stroke: advancedCountdownInactiveDotColor,
														strokeWidth: `${attributes.advancedCountdownDotsThickness.Desktop}px`,
														strokeLinecap: "round",
														...(glow_color_var && {
															[glow_color_var.split(":")[0]]:
																glow_color_var.split(":")[1],
														}),
													}}
												></circle>

												<circle
													className="dots-progress"
													cx="50"
													cy="50"
													r="45"
													mask={`url(#${mask_id_unit})`}
													style={{
														strokeDasharray: `0.1 ${gap}`, // This is for the dashes
														fill: "none", // No fill for the progress circle
														stroke: advancedCountdownActiveDotColor, // Active color for the dots
														strokeWidth: `${attributes.advancedCountdownDotsThickness.Desktop}px`, // Thickness of the dots
														strokeLinecap: "round", // Round caps for the dots
														...(glow_color_var && {
															[glow_color_var.split(":")[0]]:
																glow_color_var.split(":")[1],
														}),
													}}
												></circle>
											</svg>

											<div className="count-content">
												<span className={`time-val ${unit}`}>
													{timeRemaining[unit] || "00"}
												</span>
											</div>
										</div>
										<span className="label">{info.label}</span>
									</div>
								);
							})}
						</div>
					)}

					{/* Default case if no preset matches or for generic display */}
					{countDownPresetStyle === "default" && (
						<>
							{showDays && (
								<div className={`fb-count-down-item`}>
									<span className={`fb-count-down-time days`}>
										{timeRemaining.days || 0}
									</span>
									<span className={`fb-count-down-label`}>
										{countDownLabelDay || __("Days", "frontis-blocks")}
									</span>
								</div>
							)}

							{showHours && (
								<div className={`fb-count-down-item`}>
									<span className={`fb-count-down-time hours`}>
										{timeRemaining.hours || 0}
									</span>
									<span className={`fb-count-down-label`}>
										{countDownLabelHour || __("Hours", "frontis-blocks")}
									</span>
								</div>
							)}

							{showMinutes && (
								<div className={`fb-count-down-item`}>
									<span className={`fb-count-down-time minutes`}>
										{timeRemaining.minutes || 0}
									</span>
									<span className={`fb-count-down-label`}>
										{countDownLabelMinute || __("Minutes", "frontis-blocks")}
									</span>
								</div>
							)}

							{showSeconds && (
								<div className={`fb-count-down-item`}>
									<span className={`fb-count-down-time seconds`}>
										{timeRemaining.seconds || 0}
									</span>
									<span className={`fb-count-down-label`}>
										{countDownLabelSecond || __("Seconds", "frontis-blocks")}
									</span>
								</div>
							)}
						</>
					)}
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
}
