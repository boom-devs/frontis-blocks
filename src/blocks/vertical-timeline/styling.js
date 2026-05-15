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
const generateVerticalTimelineStyle = (attributes) => {
    const {
        blockID,

        /** Start Class & ID Setting */
        verticalTimelineGlobalZIndex,
        verticalTimelineCustomCSS,
        verticalTimelineWrapperID,
        verticalTimelineWrapperClass,
        /** End Class & ID Setting */
    } = attributes;

    const verticalTimelineStyle = `
        .${blockID} .fb-vertical-timeline-wrapper {
          ${verticalTimelineGlobalZIndex?.Desktop ? `z-index: ${verticalTimelineGlobalZIndex?.Desktop};` : ''}
            box-sizing: border-box;
            transition: all .3s ease-in-out;
            position: relative;
        }
    `;

    const customCss = getCustomCss(verticalTimelineCustomCSS, `.${blockID}`);
    return `${verticalTimelineStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}

export default generateVerticalTimelineStyle;
