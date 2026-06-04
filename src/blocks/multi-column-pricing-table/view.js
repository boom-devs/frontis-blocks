(function() {
    'use strict';

    /**
     * Multi-Column Pricing Table Block Frontend Script
     * Handles interactive features on the frontend
     */

    document.addEventListener('DOMContentLoaded', function() {
        // Initialize pricing table interactions
        const pricingTables = document.querySelectorAll('.fb-multi-column-pricing-table-wrapper');

        pricingTables.forEach(function(pricingTable) {
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
    });
})();