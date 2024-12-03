
// jQuery(document).ready(function() {
//     // fb-accordion-item-main-wrapper
//     jQuery(document).on('click', '.fb-accordion-item-title-wrapper', function() {
//         var $accordionItemWrapper = jQuery(this).parent('.fb-accordion-item-wrapper');
//         var $accordionTitle = $accordionItemWrapper.find('.fb-accordion-item-title-wrapper').first();
//         var $accordionContent = $accordionItemWrapper.find('.fb-accordion-content-wrapper').first();

//         // Check if the clicked item is already active
//         var isActive = $accordionContent.hasClass('active');

//         // Close all accordion items
//         jQuery('.fb-accordion-item-title-wrapper').removeClass('active');
//         jQuery('.fb-accordion-content-wrapper').removeClass('active');

//         // If the clicked item was not active, open it
//         if (!isActive) {
//             $accordionTitle.addClass('active');
//             $accordionContent.addClass('active');
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     document.addEventListener('click', function(event) {
//         // Check if the clicked element is an accordion title
//         if (event.target.closest('.fb-accordion-item-title-wrapper')) {
//             var accordionItemWrapper = event.target.closest('.fb-accordion-item-wrapper');
//             var accordionTitle = accordionItemWrapper.querySelector('.fb-accordion-item-title-wrapper');
//             var accordionContent = accordionItemWrapper.querySelector('.fb-accordion-content-wrapper');

//             // Remove 'active' class from all other items
//             document.querySelectorAll('.fb-accordion-item-wrapper').forEach(function(item) {
//                 item.querySelector('.fb-accordion-item-title-wrapper').classList.remove('active');
//                 item.querySelector('.fb-accordion-content-wrapper').classList.remove('active');
//             });

//             // Add 'active' class to the clicked item
//             accordionTitle.classList.add('active');
//             accordionContent.classList.add('active');
//         }
//     });
// });



// document.addEventListener("DOMContentLoaded", function() {
//     document.addEventListener('click', function(event) {
//         const $clickedTitleWrapper = event.target.closest('.fb-accordion-item-title-wrapper');
        
//         if ($clickedTitleWrapper) {
//             // document.querySelector('.fb-accordion-content-wrapper').classList.remove('active');
//             // document.querySelector('.fb-accordion-item-title-wrapper').classList.remove('active');

//             const $accordionItemWrapper = $clickedTitleWrapper.parentNode;
//             const blockID = $accordionItemWrapper.getAttribute('data-id');
//             const $accordionContent = $accordionItemWrapper.querySelector('.fb-accordion-content-wrapper');
//             const $accordionTitle = $accordionItemWrapper.querySelector('.fb-accordion-item-title-wrapper');

//             console.log(blockID);

//             const isActive = $accordionContent.classList.contains('active');

//             // Remove active class from all siblings
//             const allItems = $accordionItemWrapper.parentNode.children;
//             console.log(allItems);

//             // console.log(allItems)
//             Array.from(allItems).forEach(item => {

//                 // console.log(item);
//                 // console.log("|")
//                 // console.log($accordionItemWrapper)
//                 // if (item !== $accordionItemWrapper) {
//                 //     const siblingContent = item.querySelector('.fb-accordion-content-wrapper');
//                 //     const siblingTitle = item.querySelector('.fb-accordion-item-title-wrapper');

//                 //     siblingTitle.classList.remove('active');
//                 //     siblingContent.classList.remove('active');
//                 // }
//                 const blockID = item.getAttribute('data-id');
//                 const siblingContentParent = item.querySelector('.fb-accordion-content-wrapper').parentNode;
//                 const removeActiveFromSibling = item.querySelectorAll(`.fb-accordion-item-title-wrapper`);
//                 const removeActiveFromSiblingContent = item.querySelectorAll(`.fb-accordion-content-wrapper`);
//                 // console.log(siblingContentParent);
//                 Array.from(removeActiveFromSibling).forEach(childEl => {
//                     if(childEl.classList.contains('active')){
//                         childEl.classList.remove('active');
//                     } else {
//                         // console.log(childEl)
//                     }
//                 })

//                 Array.from(removeActiveFromSiblingContent).forEach(childEl => {
//                     if(childEl.classList.contains('active')){
//                         childEl.classList.remove('active');
//                     } else {
//                         // console.log(childEl)
//                     }
//                 })


//                 // const siblingTitle = item.querySelector('.fb-accordion-item-title-wrapper');

//                 // siblingTitle.classList.remove('active');
//                 // siblingContent.classList.remove('active');
//             });

//             // If the clicked item is not active, activate it
//             if (!isActive) {
//                 $accordionTitle.classList.add('active');
//                 $accordionContent.classList.add('active');
//             }
//         }
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const accordionWrappers = document.querySelectorAll('.fb-accordion-item-wrapper');

//     accordionWrappers.forEach((accordionWrapper) => {
//         const blockID = accordionWrapper.getAttribute('data-id'); // Get the blockID
//         const titleWrapper = accordionWrapper.querySelector('.fb-accordion-item-title-wrapper');
//         const contentWrapper = accordionWrapper.querySelector('.fb-accordion-content-wrapper');

//         titleWrapper.addEventListener('click', () => {
//             // Close all other accordion items by their blockID
//             accordionWrappers.forEach((sibling) => {
//                 if (sibling !== accordionWrapper) {
//                     const siblingBlockID = sibling.getAttribute('data-id'); // Get the sibling's blockID
//                     const siblingContent = sibling.querySelector(`.fb-accordion-content-wrapper.${siblingBlockID}`);
//                     const siblingTitle = sibling.querySelector(`.fb-accordion-item-title-wrapper.${siblingBlockID}`);

//                     // Remove 'active' class from sibling items and hide their content
//                     if (siblingContent !== contentWrapper) {
//                         siblingContent.classList.remove('active');
//                     } else {
//                         siblingContent.classList.add('active');
//                     }
//                     if (siblingTitle !== titleWrapper) {
//                         siblingTitle.classList.remove('active');
//                     } else {
//                         siblingTitle.classList.add('active');
//                     }
//                 }
//             });

//             // Toggle the clicked item
//             const isOpen = contentWrapper.classList.contains('active');
//             if (!isOpen) {
//                 contentWrapper.classList.add('active');  // Show the clicked content
//                 titleWrapper.classList.add('active');     // Highlight the clicked title
//             } else {
//                 // If already open, close it (for toggle behavior)
//                 contentWrapper.classList.remove('active'); // Hide the content
//                 titleWrapper.classList.remove('active');    // Remove highlight from title
//             }
//         });
//     });
// });

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
