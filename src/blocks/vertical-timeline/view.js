
document.addEventListener('DOMContentLoaded', () => {
    const updateTimelineLine = (wrapper) => {
        const icons = wrapper.querySelectorAll('.fb-vertical-timeline-icon');
        if (icons.length === 0) return;

        const firstIcon = icons[0];
        const lastIcon = icons[icons.length - 1];
        const wrapperRect = wrapper.getBoundingClientRect();
        const firstIconRect = firstIcon.getBoundingClientRect();
        const lastIconRect = lastIcon.getBoundingClientRect();
        const iconLeft = firstIconRect.left - wrapperRect.left + firstIconRect.width / 2;
        const lineTop = firstIconRect.top - wrapperRect.top + firstIconRect.height / 2;
        const lineBottom = wrapperRect.bottom - lastIconRect.bottom + lastIconRect.height / 2;

        wrapper.style.setProperty('--timeline-line-left', `${iconLeft}px`);
        wrapper.style.setProperty('--timeline-line-top', `${lineTop}px`);
        wrapper.style.setProperty('--timeline-line-bottom', `${lineBottom}px`);
    };

    const wrappers = document.querySelectorAll('.fb-vertical-timeline-inner');

    wrappers.forEach((wrapper) => {
        updateTimelineLine(wrapper);
        const observer = new ResizeObserver(() => {
            updateTimelineLine(wrapper);
        });
        observer.observe(wrapper);
    });
});