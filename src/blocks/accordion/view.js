

document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.fb-accordion-item-wrapper');

    accordions.forEach((accordion) => {
        const titleWrapper = accordion.querySelector('.fb-accordion-item-title-wrapper');
        const contentWrapper = accordion.querySelector('.fb-accordion-content-wrapper');

        titleWrapper.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent event from bubbling up to parent accordions

            // Toggle the 'active' class
            const isActive = titleWrapper.classList.contains('active');
            titleWrapper.classList.toggle('active', !isActive);
            contentWrapper.classList.toggle('active', !isActive);

            // Close only sibling accordions (accordions at the same level)
            let parentAccordion = accordion.parentNode.closest('.fb-accordion-item-wrapper');
            const siblingAccordions = parentAccordion 
                ? parentAccordion.querySelectorAll(':scope > .fb-accordion-item-wrapper')
                : document.querySelectorAll('.fb-accordion-item-wrapper');

            siblingAccordions.forEach((sibling) => {
                if (sibling !== accordion) {
                    const siblingTitle = sibling.querySelector('.fb-accordion-item-title-wrapper');
                    const siblingContent = sibling.querySelector('.fb-accordion-content-wrapper');
                    siblingTitle.classList.remove('active');
                    siblingContent.classList.remove('active');
                }
            });
        });
    });
});
