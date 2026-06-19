(function () {
	"use strict";

	const initCountdown = () => {
		const wrappers = document.querySelectorAll(
			".fb-advanced-countdown-wrapper, .fb-count-down-wrapper, [data-target-date]",
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

			// Updated selectors for new class structure
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
			const isStyle1 = wrapper.closest(".style_1_container") || wrapper.classList.contains("style-1");
			const isStyle2 = wrapper.classList.contains("style-2");
			const isStyle3 = wrapper.classList.contains("style-3");
			const isStyle4 = wrapper.classList.contains("style-4");
			const isStyle5 = wrapper.classList.contains("style-5") || wrapper.classList.contains("style-6");

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

				// Start/End Time display for Style 3
				if (startTimeEl && endTimeEl) {
					if (totalDuration >= twentyFourHours) {
						const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
						startTimeEl.textContent = new Date(startDate).toLocaleTimeString([], timeOptions);
						endTimeEl.textContent = new Date(dueDate).toLocaleTimeString([], timeOptions);
					} else {
						startTimeEl.textContent = new Date(startDate).toISOString().split("T")[0];
						endTimeEl.textContent = new Date(dueDate).toISOString().split("T")[0];
					}
				}

				let d = 0, h = 0, m = 0, s = 0;

				if (remaining > 0 && !isInvalidData) {
					d = Math.floor(remaining / (1000 * 60 * 60 * 24));
					h = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
					s = Math.floor((remaining % (1000 * 60)) / 1000);
				}

				// Update time values
				if (dayEl) dayEl.textContent = String(d).padStart(2, "0");
				if (hourEl) hourEl.textContent = String(h).padStart(2, "0");
				if (minuteEl) minuteEl.textContent = String(m).padStart(2, "0");
				if (secondEl) secondEl.textContent = String(s).padStart(2, "0");

				if (totalDuration > 0) {
					const elapsed = currentTime - startDate;
					let progressPercent = (elapsed / totalDuration) * 100;
					progressPercent = Math.max(0, Math.min(100, progressPercent));
					const progressRatio = isInvalidData ? 0.5 : remaining / totalDuration;

					// Style 5 / Style 6 (Dots)
					if (isStyle5) {
						const maskCircles = wrapper.querySelectorAll(".progress-mask-circle");
						const glowEnabled = wrapper.classList.contains("dots-glow-enabled");
						const glowIntensity = wrapper.dataset.glowIntensity || 12;

						maskCircles.forEach((mask) => {
							const circumference = parseFloat(mask.getAttribute("data-circumference")) || 282;
							const totalDots = parseInt(mask.getAttribute("data-dots")) || 30;

							let currentVal = 0;
							let maxVal = 60;

							if (mask.closest(".days")) { currentVal = d; maxVal = Math.max(d, 1); }
							else if (mask.closest(".hours")) { currentVal = h; maxVal = 24; }
							else if (mask.closest(".minutes")) { currentVal = m; maxVal = 60; }

							const offsetPerDot = circumference / totalDots;
							const activeDotsCount = Math.round((currentVal / maxVal) * totalDots);
							const finalOffset = circumference - activeDotsCount * offsetPerDot;

							mask.style.strokeDashoffset = finalOffset;
						});
					}

					// Style 2
					if (isStyle2 && progressCircle) {
						const offset = actualTotalLength - progressRatio * actualTotalLength;
						progressCircle.style.strokeDashoffset = offset;
					}

					// Style 3
					if (isStyle3) {
						const progressTrack = wrapper.querySelector(".dash-track-progress");
						if (progressTrack) {
							progressTrack.style.setProperty("--mouse-x", `${progressPercent}%`);
						}
					}

					// Style 1
					if (isStyle1 && progressCircle) {
						const offset = actualTotalLength - progressRatio * actualTotalLength;
						progressCircle.style.strokeDasharray = actualTotalLength;
						progressCircle.style.strokeDashoffset = offset;
					}
				}
			};

			wrapper.countdownInterval = setInterval(updateCountdown, 1000);
			updateCountdown();
		});
	};

	// Initialize
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(initCountdown, 100);
	} else {
		document.addEventListener("DOMContentLoaded", initCountdown);
	}

	// Re-init on dynamic content changes (SPA support)
	if (typeof window !== "undefined") {
		let lastUrl = window.location.href;
		new MutationObserver(() => {
			if (lastUrl !== window.location.href) {
				lastUrl = window.location.href;
				setTimeout(initCountdown, 300);
			}
		}).observe(document.body, { childList: true, subtree: true });
	}

	window.reinitCountdown = initCountdown;
})();