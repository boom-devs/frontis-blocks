/**
 * Google Map Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateVerticalTimelineItemStyle = (attributes) => {
    const {
        blockID,
        /** Start Class & ID Setting */
        verticalTimelineItemGlobalZIndex,
        verticalTimelineItemCustomCSS,
        verticalTimelineItemWraperID,
        verticalTimelineItemWraperClass,
        /** End Class & ID Setting */
    } = attributes;

    const fbTimelineItemStyle = `
       .${blockID} .fb-vertical-timeline-item-wrapper {
            ${verticalTimelineItemGlobalZIndex?.Desktop ? `z-index: ${verticalTimelineItemGlobalZIndex?.Desktop};` : ''}
            box-sizing: border-box;
            transition: all .3s ease-in-out;
            position: relative;
       }
    `;

    const customCss = getCustomCss(verticalTimelineItemCustomCSS, `.${blockID}`);
    return `${fbTimelineItemStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}

export default generateVerticalTimelineItemStyle;
