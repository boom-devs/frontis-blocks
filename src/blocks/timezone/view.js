// frontend.js
document.addEventListener('DOMContentLoaded', function() {
    const timezoneBlocks = document.querySelectorAll('.fb-timezone-main-wrapper');
    
    timezoneBlocks.forEach(block => {
        updateBlockTime(block);
        setInterval(() => updateBlockTime(block), 1000);
    });
});

function updateBlockTime(block) {
    const currentTimeEl = block.querySelector('.fb-current-time');
    const timezoneEl = block.querySelector('.fb-current-timezone');
    const statusNoteEl = block.querySelector('.fb-timezone-info-noted');
    
    if (currentTimeEl) {
        const now = new Date();
        currentTimeEl.textContent = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    }
    
    // Add your real-time logic here for timezone and status updates
}