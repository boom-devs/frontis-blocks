/**
 * Image Hotspot Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

const generateImageHotspotStyle = (attributes) => {
    const {
        blockId,
        
        // Hotspot marker styles
        markerSize,
        markerSizeUnits,
        markerColor,
        markerHoverColor,
        markerBorderWidth,
        markerBorderWidthUnits,
        markerBorderColor,
        markerBorderRadius,
        markerBorderRadiusUnits,
        
        // Popover styles
        popoverBgColor,
        popoverWidth,
        popoverWidthUnits,
        popoverPadding,
        popoverPaddingUnits,
        popoverBorderRadius,
        popoverBorderRadiusUnits,
        popoverShadow,
        
        // Title typography
        titleFontFamily,
        titleFontSize,
        titleFontSizeUnits,
        titleFontWeight,
        titleFontStyle,
        titleColor,
        titleMargin,
        titleMarginUnits,
        
        // Description typography
        descFontFamily,
        descFontSize,
        descFontSizeUnits,
        descFontWeight,
        descFontStyle,
        descColor,
        descMargin,
        descMarginUnits,
        
        // Icon styles
        iconSize,
        iconSizeUnits,
        iconColor,
        
        // Custom CSS
        customCSS,
    } = attributes;

    // Marker size with unit
    const markerSizeValue = markerSize?.Desktop ? `${markerSize.Desktop}${markerSizeUnits?.Desktop || 'px'}` : '24px';
    const markerSizeTablet = markerSize?.Tablet ? `${markerSize.Tablet}${markerSizeUnits?.Tablet || 'px'}` : markerSizeValue;
    const markerSizeMobile = markerSize?.Mobile ? `${markerSize.Mobile}${markerSizeUnits?.Mobile || 'px'}` : markerSizeValue;
    
    // Marker border width
    const markerBorderWidthValue = markerBorderWidth?.Desktop ? `${markerBorderWidth.Desktop}${markerBorderWidthUnits?.Desktop || 'px'}` : '2px';
    const markerBorderWidthTablet = markerBorderWidth?.Tablet ? `${markerBorderWidth.Tablet}${markerBorderWidthUnits?.Tablet || 'px'}` : markerBorderWidthValue;
    const markerBorderWidthMobile = markerBorderWidth?.Mobile ? `${markerBorderWidth.Mobile}${markerBorderWidthUnits?.Mobile || 'px'}` : markerBorderWidthValue;
    
    // Marker border radius
    const markerBorderRadiusValue = markerBorderRadius?.Desktop ? `${markerBorderRadius.Desktop}${markerBorderRadiusUnits?.Desktop || '%'}` : '50%';
    const markerBorderRadiusTablet = markerBorderRadius?.Tablet ? `${markerBorderRadius.Tablet}${markerBorderRadiusUnits?.Tablet || '%'}` : markerBorderRadiusValue;
    const markerBorderRadiusMobile = markerBorderRadius?.Mobile ? `${markerBorderRadius.Mobile}${markerBorderRadiusUnits?.Mobile || '%'}` : markerBorderRadiusValue;
    
    // Popover width
    const popoverWidthValue = popoverWidth?.Desktop ? `${popoverWidth.Desktop}${popoverWidthUnits?.Desktop || 'px'}` : '200px';
    const popoverWidthTablet = popoverWidth?.Tablet ? `${popoverWidth.Tablet}${popoverWidthUnits?.Tablet || 'px'}` : popoverWidthValue;
    const popoverWidthMobile = popoverWidth?.Mobile ? `${popoverWidth.Mobile}${popoverWidthUnits?.Mobile || 'px'}` : popoverWidthValue;
    
    // Popover padding
    const popoverPaddingValue = popoverPadding?.Desktop ? `${popoverPadding.Desktop}${popoverPaddingUnits?.Desktop || 'px'}` : '12px';
    const popoverPaddingTablet = popoverPadding?.Tablet ? `${popoverPadding.Tablet}${popoverPaddingUnits?.Tablet || 'px'}` : popoverPaddingValue;
    const popoverPaddingMobile = popoverPadding?.Mobile ? `${popoverPadding.Mobile}${popoverPaddingUnits?.Mobile || 'px'}` : popoverPaddingValue;
    
    // Popover border radius
    const popoverBorderRadiusValue = popoverBorderRadius?.Desktop ? `${popoverBorderRadius.Desktop}${popoverBorderRadiusUnits?.Desktop || 'px'}` : '8px';
    const popoverBorderRadiusTablet = popoverBorderRadius?.Tablet ? `${popoverBorderRadius.Tablet}${popoverBorderRadiusUnits?.Tablet || 'px'}` : popoverBorderRadiusValue;
    const popoverBorderRadiusMobile = popoverBorderRadius?.Mobile ? `${popoverBorderRadius.Mobile}${popoverBorderRadiusUnits?.Mobile || 'px'}` : popoverBorderRadiusValue;
    
    // Title font size
    const titleFontSizeValue = titleFontSize?.Desktop ? `${titleFontSize.Desktop}${titleFontSizeUnits?.Desktop || 'px'}` : '16px';
    const titleFontSizeTablet = titleFontSize?.Tablet ? `${titleFontSize.Tablet}${titleFontSizeUnits?.Tablet || 'px'}` : titleFontSizeValue;
    const titleFontSizeMobile = titleFontSize?.Mobile ? `${titleFontSize.Mobile}${titleFontSizeUnits?.Mobile || 'px'}` : titleFontSizeValue;
    
    // Description font size
    const descFontSizeValue = descFontSize?.Desktop ? `${descFontSize.Desktop}${descFontSizeUnits?.Desktop || 'px'}` : '14px';
    const descFontSizeTablet = descFontSize?.Tablet ? `${descFontSize.Tablet}${descFontSizeUnits?.Tablet || 'px'}` : descFontSizeValue;
    const descFontSizeMobile = descFontSize?.Mobile ? `${descFontSize.Mobile}${descFontSizeUnits?.Mobile || 'px'}` : descFontSizeValue;
    
    // Icon size
    const iconSizeValue = iconSize?.Desktop ? `${iconSize.Desktop}${iconSizeUnits?.Desktop || 'px'}` : '14px';
    const iconSizeTablet = iconSize?.Tablet ? `${iconSize.Tablet}${iconSizeUnits?.Tablet || 'px'}` : iconSizeValue;
    const iconSizeMobile = iconSize?.Mobile ? `${iconSize.Mobile}${iconSizeUnits?.Mobile || 'px'}` : iconSizeValue;

    // Title margin
    const titleMarginValue = titleMargin?.Desktop ? `${titleMargin.Desktop}${titleMarginUnits?.Desktop || 'px'}` : '0 0 8px 0';
    const titleMarginTablet = titleMargin?.Tablet ? `${titleMargin.Tablet}${titleMarginUnits?.Tablet || 'px'}` : titleMarginValue;
    const titleMarginMobile = titleMargin?.Mobile ? `${titleMargin.Mobile}${titleMarginUnits?.Mobile || 'px'}` : titleMarginValue;

    // Description margin
    const descMarginValue = descMargin?.Desktop ? `${descMargin.Desktop}${descMarginUnits?.Desktop || 'px'}` : '0';
    const descMarginTablet = descMargin?.Tablet ? `${descMargin.Tablet}${descMarginUnits?.Tablet || 'px'}` : descMarginValue;
    const descMarginMobile = descMargin?.Mobile ? `${descMargin.Mobile}${descMarginUnits?.Mobile || 'px'}` : descMarginValue;

    const style = `
        .wp-block-frontis-blocks-image-hotspot.${blockId} {
            position: relative;
            display: inline-block;
            width: 100%;
        }

        /* Hotspot Marker */
        .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-marker {
            position: absolute;
            transform: translate(-50%, -50%);
            z-index: 10;
        }

        .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-trigger {
            width: ${markerSizeValue};
            height: ${markerSizeValue};
            background-color: ${markerColor};
            border-radius: ${markerBorderRadiusValue};
            border-width: ${markerBorderWidthValue};
            border-color: ${markerBorderColor};
            border-style: solid;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-trigger:hover {
            background-color: ${markerHoverColor || markerColor};
            transform: scale(1.15);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        /* Hotspot Icon */
        .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-icon {
            width: ${iconSizeValue};
            height: ${iconSizeValue};
            color: ${iconColor};
            display: inline-block;
        }

        .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-icon svg {
            width: 100%;
            height: 100%;
            fill: currentColor;
        }

        /* Popover */
        .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-popover {
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 10px;
            background-color: ${popoverBgColor};
            width: ${popoverWidthValue};
            padding: ${popoverPaddingValue};
            border-radius: ${popoverBorderRadiusValue};
            box-shadow: ${popoverShadow};
            z-index: 20;
            display: none;
        }

        .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-marker:hover .fb-hotspot-popover {
            display: block;
        }

        /* Popover Arrow */
        .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-popover::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-width: 8px;
            border-style: solid;
            border-color: ${popoverBgColor} transparent transparent transparent;
        }

        /* Popover Title */
        .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-popover-title {
            font-family: ${titleFontFamily || 'inherit'};
            font-size: ${titleFontSizeValue};
            font-weight: ${titleFontWeight};
            font-style: ${titleFontStyle};
            color: ${titleColor};
            margin: ${titleMarginValue};
            line-height: 1.4;
        }

        /* Popover Description */
        .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-popover-description {
            font-family: ${descFontFamily || 'inherit'};
            font-size: ${descFontSizeValue};
            font-weight: ${descFontWeight};
            font-style: ${descFontStyle};
            color: ${descColor};
            margin: ${descMarginValue};
            line-height: 1.5;
        }

        /* Responsive - Tablet */
        @media only screen and (max-width: 1024px) {
            .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-trigger {
                width: ${markerSizeTablet};
                height: ${markerSizeTablet};
                border-width: ${markerBorderWidthTablet};
                border-radius: ${markerBorderRadiusTablet};
            }

            .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-popover {
                width: ${popoverWidthTablet};
                padding: ${popoverPaddingTablet};
                border-radius: ${popoverBorderRadiusTablet};
            }

            .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-icon {
                width: ${iconSizeTablet};
                height: ${iconSizeTablet};
            }

            .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-popover-title {
                font-size: ${titleFontSizeTablet};
                margin: ${titleMarginTablet};
            }

            .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-popover-description {
                font-size: ${descFontSizeTablet};
                margin: ${descMarginTablet};
            }
        }

        /* Responsive - Mobile */
        @media only screen and (max-width: 767px) {
            .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-trigger {
                width: ${markerSizeMobile};
                height: ${markerSizeMobile};
                border-width: ${markerBorderWidthMobile};
                border-radius: ${markerBorderRadiusMobile};
            }

            .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-popover {
                width: ${popoverWidthMobile};
                padding: ${popoverPaddingMobile};
                border-radius: ${popoverBorderRadiusMobile};
            }

            .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-icon {
                width: ${iconSizeMobile};
                height: ${iconSizeMobile};
            }

            .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-popover-title {
                font-size: ${titleFontSizeMobile};
                margin: ${titleMarginMobile};
            }

            .wp-block-frontis-blocks-image-hotspot.${blockId} .fb-hotspot-popover-description {
                font-size: ${descFontSizeMobile};
                margin: ${descMarginMobile};
            }
        }
    `;

    const customCssOutput = getCustomCss(customCSS, `.${blockId}`);
    return `${style} ${customCssOutput}`.replace(/\s+/g, ' ').trim();
};

export default generateImageHotspotStyle;