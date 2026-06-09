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
		advancedCountdownUntilText,
		advancedCountdownShowSunIcon,
		advancedCountdownSunIcon,
		advancedCountdownStyle3TimeGap,
		advancedCountdownLabelAlignmentStyle4,
		advancedCountdownDaysTotalDots,
		advancedCountdownHoursTotalDots,
		advancedCountdownMinutesTotalDots,
		advancedCountdownDotsGlowEffect,
		advancedCountdownGlowIntensity,
		advancedCountdownActiveDotColor,
		advancedCountdownInactiveDotColor,
		countDownGlobalWraperClass,
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
							{advancedCountdownShowSunIcon === "yes" && (
								<div className="countdown-icon">
									{/* Render icon here if needed, but for save it's usually just markup */}
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

							{advancedCountdownUntilText && (
								<div className="countdown-footer">
									<p>{advancedCountdownUntilText}</p>
								</div>
							)}
						</div>
					</div>
				)}

				{countDownPresetStyle === "style-2" && (
					<div className="pea-countdown-items-container style-2-layout">
						<div className="dotted-item seconds style_2_container">
							<div className="svg-container">
								<svg viewBox="0 0 100 100" className="style-2-countdown-preset">
									<defs>
										<mask id={`mask-style-2-${blockID}`}>
											<circle
												className="progress-mask-circle"
												cx="50"
												cy="50"
												r="45"
												data-circumference={2 * Math.PI * 45}
												data-dots={60}
												style={{
													fill: "none",
													stroke: "#fff",
													strokeDasharray: 2 * Math.PI * 45,
												}}
											></circle>
										</mask>
									</defs>

									<circle className="dash-bg" cx="50" cy="50" r="45"></circle>
									<circle
										className="progress-circle"
										cx="50"
										cy="50"
										r="45"
										mask={`url(#mask-style-2-${blockID})`}
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
							gap:
								advancedCountdownStyle3TimeGap.Desktop +
								advancedCountdownStyle3TimeGap.unit,
						}}
					>
						<div className="time-box">
							<span className="start-time-display"></span>
						</div>
						<div className="progress-track-wrapper">
							<div className="dash-track-base"></div>
							<div className="dash-track-progress"></div>
							<div className="progress-indicator">
								<span className="current-remaining-time"></span>
							</div>
						</div>
						<div className="time-box">
							<span className="end-time-display"></span>
						</div>
					</div>
				)}

				{countDownPresetStyle === "style-4" && (
					<div
						className={`countdown-items pea-label-align-${advancedCountdownLabelAlignmentStyle4}`}
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
						className={`pea-countdown-wrapper style-6 style-5-container ${
							advancedCountdownDotsGlowEffect === "yes"
								? `dots-glow-enabled dots-glow-intensity-${advancedCountdownGlowIntensity.Desktop}`
								: ""
						}`}
						data-due={targetDate}
						data-start={advancedCountdownStartDate}
						data-glow-enabled={advancedCountdownDotsGlowEffect}
						data-glow-intensity={advancedCountdownGlowIntensity.Desktop}
					>
						{Object.entries({
							days: {
								label: advancedCountdownLabelDays || "Days",
								dots: advancedCountdownDaysTotalDots.Desktop || 12,
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
							const r = 45;
							const c_unit = 2 * Math.PI * r;
							const dots_count = parseInt(info.dots);
							const user_gap = advancedCountdownDotsGap.Desktop || 1;
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
															fill: "none",
															stroke: "#fff",
															strokeWidth: `${
																attributes.advancedCountdownDotsThickness
																	.Desktop + 2
															}px`,
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
													stroke: advancedCountdownActiveDotColor,
													strokeWidth: `${attributes.advancedCountdownDotsThickness.Desktop}px`,
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
