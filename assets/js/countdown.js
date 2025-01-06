document.addEventListener('DOMContentLoaded', function() {
    const countdownElements = document.querySelectorAll('.fb-count-down-wrapper');

    countdownElements.forEach((wrapper) => {
        const targetDate = new Date(wrapper.parentElement.getAttribute('data-target-date')).getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                // Countdown is over
                wrapper.querySelector('.days').textContent = '00';
                wrapper.querySelector('.hours').textContent = '00';
                wrapper.querySelector('.minutes').textContent = '00';
                wrapper.querySelector('.seconds').textContent = '00';
                return;
            }
            const formatTime = (time) => (time < 10 ? `0${time}` : time);
            const days = formatTime(Math.floor(distance / (1000 * 60 * 60 * 24)));
            const hours = formatTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const minutes = formatTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            const seconds = formatTime(Math.floor((distance % (1000 * 60)) / 1000));

            wrapper.querySelector('.days').textContent = days;
            wrapper.querySelector('.hours').textContent = hours;
            wrapper.querySelector('.minutes').textContent = minutes;
            wrapper.querySelector('.seconds').textContent = seconds;
        }

        // Update countdown every second
        updateCountdown(); // Initial call
        setInterval(updateCountdown, 1000); // Repeat every second
    });
});
