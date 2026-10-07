import { addFilter } from '@wordpress/hooks';

// Global Pro status filters
addFilter(
  'frontisblocks/is-pro-plugin-active',
  'frontis-blocks/is-pro-plugin-active',
  () => true
);
addFilter(
  'frontisblocks/is-pro-active',
  'frontis-blocks/is-pro-active',
  () => true
);

// Register availability filters for all pro blocks
const proAvailableHooks = [
  'frontisblocks-advanced-megamenu-available',
  'frontisblocks-circle-menu-available',
  'frontisblocks-coverflow-carousel-available',
  'frontisblocks-critical-css-available',
  'frontisblocks-grid-layout-pro-available',
  'frontisblocks-image-accordion-available',
  'frontisblocks-image-comparison-available',
  'frontisblocks-image-hotspot-available',
  'frontisblocks-loop-builder-available',
  'frontisblocks-multi-column-pricing-table-available',
  'frontisblocks-stack-card-pro-available',
  'frontisblocks-vertical-timeline-available',
];

proAvailableHooks.forEach((hook) => {
  addFilter(hook, `frontis-blocks/${hook}`, () => true);
});

/**
 * Returns a boolean: isProActive (always true to unlock all features)
 */
export default function getProActive() {
  return true;
}

/**
 * Clear the cached license result (no-op)
 */
export function clearProActiveCache() {}