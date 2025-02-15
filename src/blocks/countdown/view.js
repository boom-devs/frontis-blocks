
document.addEventListener("DOMContentLoaded", () => {
	// Find all countdown blocks on the page
	const countdownBlocks = document.querySelectorAll("[data-target-date]");

	countdownBlocks.forEach((block) => {
		const targetDate = block.getAttribute("data-target-date");

		if (!targetDate) return;

		const daysElem = block.querySelector(".fb-count-down-time.days");
		const hoursElem = block.querySelector(".fb-count-down-time.hours");
		const minutesElem = block.querySelector(".fb-count-down-time.minutes");
		const secondsElem = block.querySelector(".fb-count-down-time.seconds");

		const formatTime = (time) => (time < 10 ? `0${time}` : time);

		const updateCountdown = () => {
			const now = new Date().getTime();
			const distance = new Date(targetDate).getTime() - now;

			if (distance < 0) {
				// Countdown expired
				daysElem.textContent = "00";
				hoursElem.textContent = "00";
				minutesElem.textContent = "00";
				secondsElem.textContent = "00";
				return;
			}

			const days = formatTime(Math.floor(distance / (1000 * 60 * 60 * 24)));
			const hours = formatTime(
				Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
			);
			const minutes = formatTime(
				Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
			);
			const seconds = formatTime(Math.floor((distance % (1000 * 60)) / 1000));

			if (daysElem) daysElem.textContent = days;
			if (hoursElem) hoursElem.textContent = hours;
			if (minutesElem) minutesElem.textContent = minutes;
			if (secondsElem) secondsElem.textContent = seconds;
		};

		// Update countdown every second
		setInterval(updateCountdown, 1000);
		updateCountdown();
	});
});
