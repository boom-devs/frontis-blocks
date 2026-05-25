import getCustomCss from '@Utils/getCustomCss';

const imageComparisonStyle = (attributes) => {
    const {
        blockID,
        imageComparisonCustomCSS,
        comparisonHeight,
        comparisonHeightUnits,
    } = attributes;

    const imageComparisonBlockStyle = `
        .${blockID} .fb-image-comparison-slider-wrapper {
            ${comparisonHeight?.Desktop ? `height: ${comparisonHeight.Desktop}${comparisonHeightUnits?.Desktop || 'px'};` : ''}
        }

        @media only screen and (max-width: 1024px) {
            .${blockID} .fb-image-comparison-slider-wrapper {
                ${comparisonHeight?.Tablet ? `height: ${comparisonHeight.Tablet}${comparisonHeightUnits?.Tablet || 'px'};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .${blockID} .fb-image-comparison-slider-wrapper {
                ${comparisonHeight?.Mobile ? `height: ${comparisonHeight.Mobile}${comparisonHeightUnits?.Mobile || 'px'};` : ''}
            }
        }
    `;

    const customCss = getCustomCss(imageComparisonCustomCSS, `.${blockID}`);
    return `${imageComparisonBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}

export default imageComparisonStyle;
