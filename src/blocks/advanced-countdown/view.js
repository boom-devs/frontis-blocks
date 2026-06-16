(function () {
	"use strict";

	const initCountdown = () => {
		const wrappers = document.querySelectorAll(
			".pea-countdown-wrapper, [data-target-date]",
		);

		wrappers.forEach(function (wrapper) {
			const dueDateStr =
				wrapper.getAttribute("data-due") ||
				wrapper.getAttribute("data-target-date");
			const startDateStr = wrapper.getAttribute("data-start");

			const isInvalidData =
				!dueDateStr || !startDateStr || dueDateStr === startDateStr;
			const now = new Date().getTime();

			let startDate = isInvalidData
				? now - 1800000
				: new Date(startDateStr.replace(/-/g, "/")).getTime();

			let dueDate = isInvalidData
				? now + 1800000
				: new Date(dueDateStr.replace(/-/g, "/")).getTime();

			const dayEl = wrapper.querySelector(
				".time-val.days, .fb-count-down-time.days",
			);
			const hourEl = wrapper.querySelector(
				".time-val.hours, .fb-count-down-time.hours",
			);
			const minuteEl = wrapper.querySelector(
				".time-val.minutes, .fb-count-down-time.minutes",
			);
			const secondEl = wrapper.querySelector(
				".time-val.seconds, .fb-count-down-time.seconds",
			);

			const progressCircle = wrapper.querySelector(".progress-circle");
			const isStyle2 = wrapper.classList.contains("style-2");
			const isStyle3 = wrapper.classList.contains("style-3");
			const isStyle4 = wrapper.classList.contains("style-4");
			const isStyle6 = wrapper.classList.contains("style-6");

			let actualTotalLength = progressCircle
				? progressCircle.getTotalLength()
				: 251.32;

			if (wrapper.countdownInterval) clearInterval(wrapper.countdownInterval);

			const startTimeEl = wrapper.querySelector(".start-time-display");
			const endTimeEl = wrapper.querySelector(".end-time-display");

			const updateCountdown = () => {
				const currentTime = new Date().getTime();
				const totalDuration = dueDate - startDate;
				const remaining = dueDate - currentTime;

				const twentyFourHours = 24 * 60 * 60 * 1000;

				// Start/End Time display logic
				if (startTimeEl && endTimeEl) {
					if (totalDuration >= twentyFourHours) {
						const timeOptions = {
							hour: "2-digit",
							minute: "2-digit",
							hour12: true,
						};
						startTimeEl.textContent = new Date(startDate).toLocaleTimeString(
							[],
							timeOptions,
						);
						endTimeEl.textContent = new Date(dueDate).toLocaleTimeString(
							[],
							timeOptions,
						);
					} else {
						startTimeEl.textContent = new Date(startDate)
							.toISOString()
							.split("T")[0];
						endTimeEl.textContent = new Date(dueDate)
							.toISOString()
							.split("T")[0];
					}
				}

				let d = 0,
					h = 0,
					m = 0,
					s = 0;

				if (remaining > 0 && !isInvalidData) {
					d = Math.floor(remaining / (1000 * 60 * 60 * 24));

					if (isStyle3 || isStyle4 || isStyle6) {
						h = Math.floor(
							(remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
						);
					} else {
						h = Math.floor(remaining / (1000 * 60 * 60));
					}

					m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
					s = Math.floor((remaining % (1000 * 60)) / 1000);
				}

				// Display update
				if (dayEl) dayEl.textContent = String(d).padStart(2, "0");
				if (hourEl) hourEl.textContent = String(h).padStart(2, "0");
				if (minuteEl) minuteEl.textContent = String(m).padStart(2, "0");
				if (secondEl) secondEl.textContent = String(s).padStart(2, "0");

				if (totalDuration > 0) {
					const elapsed = currentTime - startDate;
					let progressPercent = (elapsed / totalDuration) * 100;
					progressPercent = Math.max(0, Math.min(100, progressPercent));
					const progressRatio = isInvalidData ? 0.5 : remaining / totalDuration;

					// ============= Style 6 Logic =============
					if (isStyle6) {
						const maskCircles = wrapper.querySelectorAll(
							".progress-mask-circle",
						);
						const glowEnabled = wrapper.dataset.glowEnabled === "yes";
						const glowIntensity = parseInt(wrapper.dataset.glowIntensity) || 14;

						maskCircles.forEach((mask) => {
							const circumference = parseFloat(
								mask.getAttribute("data-circumference"),
							);
							const totalDots = parseInt(mask.getAttribute("data-dots")) || 60;
							let currentVal = 0;
							let maxVal = 60;

							if (mask.closest(".days")) {
								currentVal = d;
								const totalDays = Math.ceil(
									(dueDate - startDate) / (1000 * 60 * 60 * 24),
								);
								maxVal = totalDays > 0 ? totalDays : 1;
							} else if (mask.closest(".hours")) {
								currentVal = h;
								maxVal = 24;
							} else if (mask.closest(".minutes")) {
								currentVal = m;
								maxVal = 60;
							} else if (mask.closest(".seconds")) {
								currentVal = s;
								maxVal = 60;
							}

							const offsetPerDot = circumference / totalDots;
							const activeDotsCount = Math.round(
								(currentVal / maxVal) * totalDots,
							);
							const finalOffset =
								circumference - activeDotsCount * offsetPerDot;
							mask.style.strokeDashoffset = finalOffset;

							if (glowEnabled) {
								wrapper.classList.add("dots-glow-enabled");
								wrapper.classList.remove(
									"dots-glow-intensity-8",
									"dots-glow-intensity-14",
									"dots-glow-intensity-20",
									"dots-glow-intensity-30",
								);
								wrapper.classList.add(`dots-glow-intensity-${glowIntensity}`);
							} else {
								wrapper.classList.remove("dots-glow-enabled");
							}
						});
					}

					// Style 2 Logic
					if (isStyle2) {
						const maskCircles = wrapper.querySelectorAll(
							".progress-mask-circle",
						);
						maskCircles.forEach((mask) => {
							const circumference = parseFloat(
								mask.getAttribute("data-circumference"),
							);
							const totalDashes =
								parseInt(mask.getAttribute("data-dots")) || 60;
							let currentVal = s;
							let maxVal = 60;

							if (mask.closest(".days")) {
								currentVal = d;
								maxVal = 30;
							} else if (mask.closest(".hours")) {
								currentVal = h;
								maxVal = 24;
							} else if (mask.closest(".minutes")) {
								currentVal = m;
								maxVal = 60;
							}

							const offsetPerDash = circumference / totalDashes;
							const activeDashes = Math.round(
								(currentVal / maxVal) * totalDashes,
							);
							const finalOffset = circumference - activeDashes * offsetPerDash;
							mask.style.strokeDashoffset = finalOffset;
						});
					}
					// Style 3 Logic
					else if (isStyle3) {
						const progressTrack = wrapper.querySelector(".dash-track-progress");
						const remainingText = wrapper.querySelector(
							".current-remaining-time",
						);

						if (progressTrack) {
							const safePercent = Math.max(0, Math.min(100, progressPercent));
							progressTrack.style.setProperty("--mouse-x", `${safePercent}%`);
						}

						if (remainingText) {
							if (isInvalidData || remaining <= 0) {
								remainingText.innerHTML = `<span class="unit-box">0days</span> <span class="unit-box">0h</span> <span class="unit-box">0m</span> <span class="unit-box">0s</span>`;
							} else {
								remainingText.innerHTML = `<span class="unit-box">${d}days</span> <span class="unit-box">${h}h</span> <span class="unit-box">${m}m</span> <span class="unit-box">${s}s</span>`;
							}
						}
					}
					// Style 1 Logic
					else if (progressCircle) {
						const offset =
							actualTotalLength - progressRatio * actualTotalLength;
						progressCircle.style.strokeDasharray = actualTotalLength;
						progressCircle.style.strokeDashoffset = offset;
					}
				}
			};

			wrapper.countdownInterval = setInterval(updateCountdown, 1000);
			updateCountdown();
		});
	};

	if (
		document.readyState === "complete" ||
		document.readyState === "interactive"
	) {
		setTimeout(initCountdown, 100);
	} else {
		document.addEventListener("DOMContentLoaded", initCountdown);
	}

	if (typeof window !== "undefined") {
		let lastUrl = window.location.href;
		new MutationObserver(function () {
			if (lastUrl !== window.location.href) {
				lastUrl = window.location.href;
				setTimeout(initCountdown, 300);
			}
		}).observe(document.body, { childList: true, subtree: true });
	}

	window.reinitCountdown = initCountdown;
})();
