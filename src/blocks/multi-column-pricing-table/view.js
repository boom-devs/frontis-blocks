(function() {
    'use strict';

    /**
     * Multi-Column Pricing Table Block Frontend Script
     * Handles interactive features on the frontend
     */

    function initPricingTable() {
        // Initialize pricing table interactions
        const pricingTables = document.querySelectorAll('.fb-multi-column-pricing-table-wrapper');

        pricingTables.forEach(function(pricingTable) {
            // Prevent multiple initializations
            if (pricingTable.hasAttribute('data-pricing-initialized')) return;
            pricingTable.setAttribute('data-pricing-initialized', 'true');

            // Add hover effects
            const columns = pricingTable.querySelectorAll('.fb-pricing-column');

            columns.forEach(function(column) {
                // Mouse enter effect
                column.addEventListener('mouseenter', function() {
                    columns.forEach(function(otherColumn) {
                        if (otherColumn !== column) {
                            otherColumn.style.opacity = '0.7';
                        }
                    });
                });

                // Mouse leave effect
                column.addEventListener('mouseleave', function() {
                    columns.forEach(function(otherColumn) {
                        otherColumn.style.opacity = '1';
                    });
                });
            });

            // Button click tracking (optional analytics)
            const buttons = pricingTable.querySelectorAll('.fb-pricing-button');
            buttons.forEach(function(button) {
                button.addEventListener('click', function(e) {
                    // You can add analytics tracking here
                    console.log('Pricing button clicked:', button.textContent.trim());
                });
            });
        });
    }

    function setupPricingTable() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initPricingTable);
        } else {
            initPricingTable();
        }

        // Handle dynamic content changes (crucial for Next.js / SPA route transitions)
        if (typeof MutationObserver !== 'undefined') {
            var domObserver = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.addedNodes.length || mutation.removedNodes.length) {
                        initPricingTable();
                    }
                });
            });

            domObserver.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
    }

    // Expose re-initialization function
    window.reinitPricingTable = initPricingTable;

    setupPricingTable();
})();