document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.fb-timezone-container');
    if (!container) return;
    
    const timeDisplay = container.querySelector('.fb-timezone-time-display');
    const timezoneDisplay = container.querySelector('.fb-timezone-timezone');
    const statusIcon = container.querySelector('.fb-timezone-status-icon');
    const statusBadge = container.querySelector('.fb-timezone-status');
    
    const location = container.dataset.location || 'Dhaka, Bangladesh';
    const officeHours = parseInt(container.dataset.officeHours || '8', 10);
    const startTime = container.dataset.startTime || '9:00';
    
    function updateTime() {
        const currentTime = new Date();
        
        // Format time
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();
        
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        const time = `${hours}:${minutes} ${ampm}`;
        timeDisplay.textContent = `${location} • ${time}`;
        
        // Calculate timezone
        const offset = currentTime.getTimezoneOffset() * -1 / 60;
        const sign = offset >= 0 ? '+' : '';
        timezoneDisplay.textContent = `(UTC ${sign}${offset})`;
        
        // Calculate office status
        const startParts = startTime.split(':');
        const startHour = parseInt(startParts[0], 10);
        const startMinute = parseInt(startParts[1] || '0', 10);
        
        const currentHour = currentTime.getHours();
        const currentMinute = currentTime.getMinutes();
        
        const totalOfficeMinutes = officeHours * 60;
        const endTimeMinutes = startHour * 60 + startMinute + totalOfficeMinutes;
        const endHour = Math.floor(endTimeMinutes / 60) % 24;
        const endMinute = endTimeMinutes % 60;
        
        const formattedEndHour = endHour < 10 ? '0' + endHour : endHour;
        const formattedEndMinute = endMinute < 10 ? '0' + endMinute : endMinute;
        
        const currentTimeMinutes = currentHour * 60 + currentMinute;
        const isOpen = currentTimeMinutes >= (startHour * 60 + startMinute) && 
            currentTimeMinutes < endTimeMinutes;
        
        if (isOpen) {
            const minutesLeft = endTimeMinutes - currentTimeMinutes;
            const hoursLeft = Math.floor(minutesLeft / 60);
            const remainingMinutes = minutesLeft % 60;
            
            statusBadge.classList.remove('close');
            statusBadge.classList.add('open');
            statusBadge.querySelector('.fb-timezone-status-badge span').innerHTML = '<div class="circle pulse open"></div> Open';
            statusIcon.textContent = `Will be finished in ${hoursLeft}:${remainingMinutes < 10 ? '0' + remainingMinutes : remainingMinutes} Hrs`;
        } else {
            statusBadge.classList.remove('open');
            statusBadge.classList.add('close');
            statusBadge.querySelector('.fb-timezone-status-badge span').innerHTML = '<div class="circle pulse close"></div> Close';
            statusIcon.textContent = `Office is closed. Opens at ${startHour}:${startMinute < 10 ? '0' + startMinute : startMinute}`;
        }
    }
    
    // Initial update
    updateTime();
    
    // // Update every second
    setInterval(updateTime, 1000);
});