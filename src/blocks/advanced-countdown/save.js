import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		blockID,
		countDownLabelDay,
		countDownLabelHour,
		countDownLabelMinute,
		countDownLabelSecond,
		targetDate,
		showDays,
		showHours,
		showMinutes,
		showSeconds,
		countDownGlobalWraperID,
		countDownPresetStyle,
		until_text, // This is the footer text
		show_sun_icon,
		sun_icon,
		advancedCountdownStyle3TimeGap,
		advancedCountdownLabelAlignmentStyle4,
		days_total_dots,
		hours_total_dots,
		minutes_total_dots,
		advancedCountdownDotsGlowEffect,
		advancedCountdownGlowIntensity,
		advancedCountdownActiveDotColor,
		advancedCountdownInactiveDotColor,
		countDownGlobalWraperClass,
		advancedCountdownLabelDays,
		advancedCountdownLabelHours,
		advancedCountdownLabelMinutes,
		advancedCountdownDotsThickness,
		countDownDesktopSwitcher,
		countDownTabletSwitcher,
		countDownMobileSwitcher,
		advancedCountdownStartDate,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-count-down-main-wrapper ${blockID} ${
			countDownDesktopSwitcher && "fb-desktop-responsive"
		} ${countDownTabletSwitcher && "fb-tablet-responsive"} ${
			countDownMobileSwitcher && "fb-mobile-responsive"
		}`,
	});

	return (
		<div
			{...blockProps}
			data-target-date={targetDate}
			data-start={advancedCountdownStartDate}
		>
			<div
				// The PHP render function adds 'pea-countdown-wrapper' and 'preset_styles' to the wrapper.
				// In Gutenberg, the main block wrapper already has the blockID and responsive classes.
				// The inner div should have the specific preset style class for styling.
				// The PHP render also adds data-due and data-start to the wrapper, which we've moved to the outer blockProps.
				// So, this inner div primarily needs the preset style class and any custom classes/ID.
				className={`fb-parent-wrapper fb-count-down-wrapper ${blockID} ${countDownGlobalWraperClass} ${countDownPresetStyle}`}
				id={countDownGlobalWraperID}
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
									{/* Icon is rendered by JS on frontend, so just a div here */}
								</div>
							)}

							<div className="content-inner">
								<div className="time-display">
									<div className="hours_tab count_tab">
										<span className="time-val hours">00</span>
										<span className="label">Hour</span>
									</div>
									<span className="seperator"></span>
									<div className="minutes_tab count_tab">
										<span className="time-val minutes">00</span>
										<span className="label">Minute</span>
									</div>
									<span className="seperator"></span>
									<div className="seconds_tab count_tab">
										<span className="time-val seconds">00</span>
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
					<div className="fb-countdown-items-container style-2-layout">
						{" "}
						{/* Matches PHP's outer div */}
						<div className="dotted-item seconds style_2_container">
							<div className="svg-container">
								<svg viewBox="0 0 100 100" className="style-2-countdown-preset">
									<defs>
										{/* PHP calculates $c, $total_dashes, $dash_width, $dash_gap, $mask_id */}
										{/* For save.js, we need to replicate these calculations or use fixed values if they are constant */}
										{/* Assuming $c = 3 * M_PI * $r; where $r = 45, so $c = 3 * Math.PI * 45 = 424.115 */}
										{/* Assuming $total_dashes = 60, $dash_width = 2 */}
										{/* $dash_gap = ($c / $total_dashes) - $dash_width; */}
										<mask id={`mask-style-2-${blockID}`}>
											<circle
												className="progress-mask-circle"
												cx="50"
												cy="50"
												r="45"
												data-circumference={2 * Math.PI * 45}
												data-dots={60} // Fixed value from PHP
												style={{
													fill: "none",
													stroke: "#fff",
													strokeDasharray: 2 * Math.PI * 45,
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
											strokeDasharray: (2 * Math.PI * 45) / 60 - 2,
										}}
									></circle>
									<circle
										className="progress-circle"
										cx="50"
										cy="50"
										r="45"
										mask={`url(#mask-style-2-${blockID})`} // Apply mask
									></circle>
								</svg>

								<div className="count-content">
									<span className="time-val hours">00</span>
									<span className="seperator"></span>
									<span className="time-val minutes">00</span>
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
							// PHP uses $settings['style3_time_gap'] which maps to advancedCountdownStyle3TimeGap
							gap:
								advancedCountdownStyle3TimeGap.Desktop +
								advancedCountdownStyle3TimeGap.unit,
						}}
					>
						<div className="time-box">
							<span className="start-time-display"></span>
						</div>{" "}
						{/* Populated by JS on frontend */}
						<div className="progress-track-wrapper">
							<div className="dash-track-base"></div>
							<div className="dash-track-progress"></div>
							<div className="progress-indicator">
								<span className="current-remaining-time"></span>
							</div>{" "}
							{/* Populated by JS on frontend */}
						</div>{" "}
						{/* End progress-track-wrapper */}
						<div className="time-box">
							<span className="end-time-display"></span>
						</div>
					</div>
				)}

				{countDownPresetStyle === "style-4" && (
					<div
						className={`countdown-items fb-label-align-${advancedCountdownLabelAlignmentStyle4}`}
					>
						<div className="count_tab">
							<div className="item-box">
								<span className="time-val days">00</span>
								<span className="label">Days</span>
							</div>
						</div>
						<div className="count_tab">
							<div className="item-box">
								<span className="time-val hours">00</span>
								<span className="label">Hours</span>
							</div>
						</div>
						<div className="count_tab">
							<div className="item-box">
								<span className="time-val minutes">00</span>
								<span className="label">Minutes</span>
							</div>
						</div>
						<div className="count_tab">
							<div className="item-box">
								<span className="time-val seconds">00</span>
								<span className="label">Sec</span>
							</div>
						</div>
					</div>
				)}

				{countDownPresetStyle === "style-5" && (
					<div
						className={`fb-count-down-wrapper style-6 style-5-container ${
							advancedCountdownDotsGlowEffect === "yes"
								? `dots-glow-enabled dots-glow-intensity-${advancedCountdownGlowIntensity.Desktop}`
								: ""
						}`}
						data-due={targetDate}
						data-start={advancedCountdownStartDate}
						data-glow-enabled={advancedCountdownDotsGlowEffect}
						data-glow-intensity={advancedCountdownGlowIntensity.Desktop}
						style={
							advancedCountdownGlowColor
								? { "--glow-clr": advancedCountdownGlowColor }
								: {}
						} // Pass glow color as CSS variable
					>
						{Object.entries({
							days: {
								label: advancedCountdownLabelDays || "Days",
							},
							hours: {
								label: advancedCountdownLabelHours || "Hours",
								dots: advancedCountdownHoursTotalDots.Desktop || 24,
							},
							minutes: {
								label: advancedCountdownLabelMinutes || "Minutes",
								dots: advancedCountdownMinutesTotalDots.Desktop || 30,
							},
						}).map(([unit, info]) => {
							// Loop through days, hours, minutes
							const r = 45;
							const c_unit = 2 * Math.PI * r;
							// Use the actual dots count from attributes for each unit
							const dots_count =
								unit === "days"
									? advancedCountdownDaysTotalDots.Desktop || 12
									: unit === "hours"
									? advancedCountdownHoursTotalDots.Desktop || 24
									: advancedCountdownMinutesTotalDots.Desktop || 30;
							const user_gap = advancedCountdownDotsGap.Desktop || 1; // Use Desktop value for save
							const gap =
								(c_unit / (dots_count > 0 ? dots_count : 1)) * user_gap;
							const mask_id_unit = `countdown-mask-${unit}-${blockID}`;

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
														data-circumference={c_unit}
														data-dots={dots_count}
														style={{
															fill: "none", // No fill
															stroke: "#fff", // White stroke for mask
															strokeWidth: `${
																(advancedCountdownDotsThickness.Desktop || 5) +
																2
															}px`, // Thickness + a little extra for mask
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
													stroke: advancedCountdownInactiveDotColor, // Inactive color
													strokeWidth: `${
														advancedCountdownDotsThickness.Desktop || 5
													}px`, // Thickness
													strokeLinecap: "round",
												}}
											></circle>

											<circle
												className="dots-progress"
												cx="50"
												cy="50"
												r="45"
												mask={`url(#${mask_id_unit})`}
												style={{
													strokeDasharray: `0.1 ${gap}`,
													fill: "none",
													stroke: advancedCountdownActiveDotColor, // Active color
													strokeWidth: `${
														advancedCountdownDotsThickness.Desktop || 5
													}px`, // Thickness
													strokeLinecap: "round",
												}}
											></circle>
										</svg>

										<div className="count-content">
											<span className={`time-val ${unit}`}>00</span>
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
								<span className={`fb-count-down-time days`}>00</span>
								<span className={`fb-count-down-label`}>
									{countDownLabelDay || __("Days", "frontis-blocks")}
								</span>
							</div>
						)}
						{showHours && (
							<div className={`fb-count-down-item`}>
								<span className={`fb-count-down-time hours`}>00</span>
								<span className={`fb-count-down-label`}>
									{countDownLabelHour || __("Hours", "frontis-blocks")}
								</span>
							</div>
						)}
						{showMinutes && (
							<div className={`fb-count-down-item`}>
								<span className={`fb-count-down-time minutes`}>00</span>
								<span className={`fb-count-down-label`}>
									{countDownLabelMinute || __("Minutes", "frontis-blocks")}
								</span>
							</div>
						)}
						{showSeconds && (
							<div className={`fb-count-down-item`}>
								<span className={`fb-count-down-time seconds`}>00</span>
								<span className={`fb-count-down-label`}>
									{countDownLabelSecond || __("Seconds", "frontis-blocks")}
								</span>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
}
