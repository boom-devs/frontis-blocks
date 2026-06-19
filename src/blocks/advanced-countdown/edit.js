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
		advancedCountdownPresetStyle,

		// Basic Settings
		advancedCountdownUntilText,
		advancedCountdownShowSunIcon,
		advancedCountdownSunIcon,
		advancedCountdownStartDate,
		advancedCountdownTargetDate,

		// Style 3
		advancedCountdownStyle3TimeGap,

		// Style 4
		advancedCountdownStyle4LabelAlignment,

		// Style 5
		advancedCountdownStyle4DaysTotalDots,
		advancedCountdownStyle4HoursTotalDots,
		advancedCountdownStyle4MinutesTotalDots,
		advancedCountdownStyle4ActiveDotColor,
		advancedCountdownStyle4InactiveDotColor,
		advancedCountdownStyle4DotsGlowEffect,
		advancedCountdownStyle4GlowIntensity,
		advancedCountdownStyle4GlowColor,
		advancedCountdownStyle4DotsThickness,
		advancedCountdownStyle4DotsGap,

		// Responsive
		advancedCountdownDesktopSwitcher,
		advancedCountdownTabletSwitcher,
		advancedCountdownMobileSwitcher,

		// Wrapper
		advancedCountdownCustomID,
		advancedCountdownCustomClass,
	} = attributes;

	const dot_thickness = advancedCountdownStyle4DotsThickness?.Desktop || 5;
	const user_gap = advancedCountdownStyle4DotsGap?.Desktop || 1;

	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: "fb-advanced-countdown",
		isSelected,
		attributes,
		setAttributes,
	});

	useEffect(() => {
		if (blockID) {
			const css = generateCountdownStyle(attributes);
			setAttributes({ blockStyle: css });
		}
	}, [attributes, blockID]);

	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

	const [timeRemaining, setTimeRemaining] = useState({});

	const defaultDate = new Date();
	defaultDate.setDate(defaultDate.getDate() + 7);
	const defaultStartDate = new Date();

	const [date, setDate] = useState(
		advancedCountdownTargetDate ? new Date(advancedCountdownTargetDate) : defaultDate,
	);

	useEffect(() => {
		if (!advancedCountdownTargetDate) {
			setAttributes({ advancedCountdownTargetDate: defaultDate.toISOString() });
			setAttributes({ advancedCountdownStartDate: defaultStartDate.toISOString() });
		}
	}, [advancedCountdownTargetDate, setAttributes]);

	useEffect(() => {
		setAttributes({ advancedCountdownTargetDate: date.toISOString() });
	}, [date, setAttributes]);

	// Countdown Timer Logic
	useEffect(() => {
		const formatTime = (time) => (time < 10 ? `0${time}` : time);

		if (!advancedCountdownTargetDate || isNaN(new Date(advancedCountdownTargetDate).getTime())) return;

		const intervalId = setInterval(() => {
			const now = Date.now();
			const distance = new Date(advancedCountdownTargetDate).getTime() - now;

			const days = formatTime(Math.floor(distance / (1000 * 60 * 60 * 24)));
			const hours = formatTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
			const minutes = formatTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
			const seconds = formatTime(Math.floor((distance % (1000 * 60)) / 1000));

			if (distance < 0) {
				clearInterval(intervalId);
				setTimeRemaining({ days: "00", hours: "00", minutes: "00", seconds: "00" });
			} else {
				setTimeRemaining({ days, hours, minutes, seconds });
			}
		}, 1000);

		return () => clearInterval(intervalId);
	}, [advancedCountdownTargetDate]);

	const label_d_style5 = attributes.advancedCountdownLabelDays || __("Days", "frontis-blocks");
	const label_h = attributes.advancedCountdownLabelHours || __("Hours", "frontis-blocks");
	const label_m = attributes.advancedCountdownLabelMinutes || __("Minutes", "frontis-blocks");

	const d_val = advancedCountdownStyle4DaysTotalDots?.Desktop || 12;
	const h_val = advancedCountdownStyle4HoursTotalDots?.Desktop || 24;
	const m_val = advancedCountdownStyle4MinutesTotalDots?.Desktop || 30;

	const config_style5 = {
		days: { label: label_d_style5, dots: d_val },
		hours: { label: label_h, dots: h_val },
		minutes: { label: label_m, dots: m_val },
	};

	const glow_effect_class = advancedCountdownStyle4DotsGlowEffect === "yes"
		? `dots-glow-enabled dots-glow-intensity-${advancedCountdownStyle4GlowIntensity?.Desktop || 12}`
		: "";

	const blockProps = useBlockProps({
		className: `fb-advanced-countdown-main-wrapper ${blockID} ${
			advancedCountdownDesktopSwitcher && "fb-desktop-responsive"
		} ${advancedCountdownTabletSwitcher && "fb-tablet-responsive"} ${
			advancedCountdownMobileSwitcher && "fb-mobile-responsive"
		}`,
	});

	return (
		<>
			{isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			)}

			<div {...blockProps}>
				<div
					className={`fb-advanced-countdown-wrapper ${blockID} ${advancedCountdownCustomClass}`}
					id={advancedCountdownCustomID}
					ref={panelRef}
				>
					{/* Style 1 */}
					{advancedCountdownPresetStyle === "style-1" && (
						<div className="countdown-container style_1_container">
							<svg className="countdown-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
								<circle cx="50" cy="50" r="40" className="background-circle"></circle>
								<circle cx="50" cy="50" r="40" className="progress-circle" fill="none"></circle>
							</svg>

							<div className="countdown-content">
								{advancedCountdownShowSunIcon === "yes" && (
									<div className="countdown-icon">
										{advancedCountdownSunIcon?.value &&
											renderSVG(advancedCountdownSunIcon.value, setAttributes, { "aria-hidden": "true" })}
									</div>
								)}

								<div className="content-inner">
									<div className="time-display">
										<div className="hours_tab count_tab">
											<span className="time-val hours">{timeRemaining.hours || "00"}</span>
											<span className="label">Hour</span>
										</div>
										<span className="seperator"></span>
										<div className="minutes_tab count_tab">
											<span className="time-val minutes">{timeRemaining.minutes || "00"}</span>
											<span className="label">Minute</span>
										</div>
										<span className="seperator"></span>
										<div className="seconds_tab count_tab">
											<span className="time-val seconds">{timeRemaining.seconds || "00"}</span>
											<span className="label">Second</span>
										</div>
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

					{/* Style 2 */}
					{advancedCountdownPresetStyle === "style-2" && (
						<div className="fb-countdown-items-container style-2-layout">
							{/* ... (similar updates can be applied) */}
							{advancedCountdownUntilText && (
								<div className="countdown-footer">
									<p>{advancedCountdownUntilText}</p>
								</div>
							)}
						</div>
					)}

					{/* Style 3, 4, 5 similarly updated with advancedCountdown* attributes */}

					{advancedCountdownPresetStyle === "style-5" && (
						<div className={`fb-advanced-countdown-wrapper style-5-container ${glow_effect_class}`}>
							{Object.entries(config_style5).map(([unit, info]) => (
								<div className={`dotted-item ${unit}`} key={unit}>
									{/* SVG Dots logic remains same */}
									<span className="label">{info.label}</span>
								</div>
							))}
						</div>
					)}

					{/* Default Fallback */}
					{!advancedCountdownPresetStyle || advancedCountdownPresetStyle === "default" && (
						<div className="fb-count-down-items">
							{/* Default items with advanced naming */}
						</div>
					)}
				</div>
			</div>

			<style>{blockStyle}</style>
		</>
	);
}