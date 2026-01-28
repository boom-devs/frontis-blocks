/**
 * Styling utility functions for Testimonial block
 * These helpers compute margin/padding/border strings from attributes
 */

/**
 * Compute 4-sided spacing string (margin/padding/border)
 * @param {Object} values - Object with top, right, bottom, left properties
 * @param {string} unit - CSS unit (px, em, %, etc.)
 * @returns {string} CSS spacing value
 */
export const computeSpacing = (values, unit = 'px') => {
    if (!values || values.top === undefined) return '';
    return `${values.top}${unit} ${values.right}${unit} ${values.bottom}${unit} ${values.left}${unit}`;
};

/**
 * Compute responsive spacing for a specific device
 * @param {Object} values - Device-specific values object
 * @param {Object} units - Device-specific units object  
 * @param {string} device - 'Desktop' | 'Tablet' | 'Mobile'
 * @returns {string} CSS spacing value
 */
export const computeResponsiveSpacing = (values, units, device) => {
    if (!values || !units) return '';
    const unit = units[device] || 'px';
    return computeSpacing(values, unit);
};

/**
 * Generate CSS rule only if value exists
 * @param {string} property - CSS property name
 * @param {*} value - CSS value
 * @param {string} unit - Optional unit
 * @returns {string} CSS declaration or empty string
 */
export const cssRule = (property, value, unit = '') => {
    if (value === undefined || value === null || value === '') return '';
    return `${property}: ${value}${unit};`;
};

/**
 * Generate CSS rule with condition
 * @param {boolean} condition - Whether to include rule
 * @param {string} rule - CSS rule string
 * @returns {string} CSS rule or empty string
 */
export const conditionalRule = (condition, rule) => {
    return condition ? rule : '';
};
