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

        /** Start Progress Line */
        verticalTimelineItemlineColorSwitcher,
        verticalTimelineItemProgressLineColor,
        verticalTimelineItemBaseLineColor,
        /** End Progress Line */

        /** Start Base Line Size */
        verticalTimelineBaseLineWidth,
        verticalTimelineBaseLineWidthUnits,
        /** End Base Line Size */

        /** Start Progress Line Size */
        verticalTimelineProgressLineWidth,
        verticalTimelineProgressLineWidthUnits,
        /** End Progress Line Size */


        /** Start Class & ID Setting */
        verticalTimelineGlobalZIndex,
        verticalTimelineCustomCSS,
        verticalTimelineWrapperID,
        verticalTimelineWrapperClass,
        /** End Class & ID Setting */
    } = attributes;

    const verticalTimelineStyle = `

    .${blockID} .fb-vertical-timeline-inner:before {
        ${verticalTimelineBaseLineWidth?.Desktop ? `width: ${verticalTimelineBaseLineWidth?.Desktop}${verticalTimelineBaseLineWidthUnits?.Desktop};` : ''}
        ${verticalTimelineItemBaseLineColor ? `background: ${verticalTimelineItemBaseLineColor};` : ''}
    }

    .${blockID} .fb-vertical-timeline-inner:after {
        ${verticalTimelineProgressLineWidth?.Desktop ? `width: ${verticalTimelineProgressLineWidth?.Desktop}${verticalTimelineProgressLineWidthUnits?.Desktop};` : ''}
        ${verticalTimelineItemProgressLineColor ? `background: ${verticalTimelineItemProgressLineColor};` : ''}
    }

    .${blockID} .fb-vertical-timeline-wrapper {
        ${verticalTimelineGlobalZIndex?.Desktop ? `z-index: ${verticalTimelineGlobalZIndex?.Desktop};` : ''}
        box-sizing: border-box;
        transition: all .3s ease-in-out;
        position: relative;
    }

    @media only screen and (max-width: 1024px) {
        .${blockID} .fb-vertical-timeline-inner:before {
            ${verticalTimelineBaseLineWidth?.Tablet ? `width: ${verticalTimelineBaseLineWidth?.Tablet}${verticalTimelineBaseLineWidthUnits?.Tablet};` : ''}
        }

        .${blockID} .fb-vertical-timeline-inner:after {
            ${verticalTimelineProgressLineWidth?.Tablet ? `width: ${verticalTimelineProgressLineWidth?.Tablet}${verticalTimelineProgressLineWidthUnits?.Tablet};` : ''}
        }
    }

    @media only screen and (max-width: 767px) {
        .${blockID} .fb-vertical-timeline-inner:before {
            ${verticalTimelineBaseLineWidth?.Mobile ? `width: ${verticalTimelineBaseLineWidth?.Mobile}${verticalTimelineBaseLineWidthUnits?.Mobile};` : ''}
        }

        .${blockID} .fb-vertical-timeline-inner:after {
            ${verticalTimelineProgressLineWidth?.Mobile ? `width: ${verticalTimelineProgressLineWidth?.Mobile}${verticalTimelineProgressLineWidthUnits?.Mobile};` : ''}
        }
    }
    `;


    const customCss = getCustomCss(verticalTimelineCustomCSS, `.${blockID}`);
    return `${verticalTimelineStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}

export default generateVerticalTimelineStyle;
