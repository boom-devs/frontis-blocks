/**
 * Image Hotspot Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

const generateImageHotspotStyle = (attributes) => {
    const {
        blockID,
        imageHotspot_imageSize: imageSize,
        imageHotspot_imageHeight: imageHeight,
        imageHotspot_imageHeightUnits: imageHeightUnits,
        imageHotspot_hotspots: hotspots,
        
        // Hotspot marker styles
        imageHotspot_markerSize: markerSize,
        imageHotspot_markerSizeUnits: markerSizeUnits,
        imageHotspot_markerHoverSize: markerHoverSize,
        imageHotspot_markerHoverSizeUnits: markerHoverSizeUnits,
        imageHotspot_markerColor: markerColor,
        imageHotspot_markerHoverColor: markerHoverColor,
        imageHotspot_markerBorderWidth: markerBorderWidth,
        imageHotspot_markerBorderWidthUnits: markerBorderWidthUnits,
        imageHotspot_markerBorderColor: markerBorderColor,
        imageHotspot_markerBorderRadius: markerBorderRadius,
        imageHotspot_markerBorderRadiusUnits: markerBorderRadiusUnits,
        imageHotspot_markerAnimation: markerAnimation,
        imageHotspot_containerShadowCssValue: containerShadowCssValue,
        
        // Popover styles
        imageHotspot_popoverBgColor: popoverBgColor,
        imageHotspot_popoverWidth: popoverWidth,
        imageHotspot_popoverWidthUnits: popoverWidthUnits,
        imageHotspot_popoverPadding: popoverPadding,
        imageHotspot_popoverPaddingUnits: popoverPaddingUnits,
        imageHotspot_popoverBorderRadius: popoverBorderRadius,
        imageHotspot_popoverBorderRadiusUnits: popoverBorderRadiusUnits,
        imageHotspot_popoverShadow: popoverShadow,
        
        // Title typography
        imageHotspot_titleFontFamily: titleFontFamily,
        imageHotspot_titleFontSize: titleFontSize,
        imageHotspot_titleFontSizeUnits: titleFontSizeUnits,
        imageHotspot_titleFontWeight: titleFontWeight,
        imageHotspot_titleFontStyle: titleFontStyle,
        imageHotspot_titleColor: titleColor,
        imageHotspot_titleMargin: titleMargin,
        imageHotspot_titleMarginUnits: titleMarginUnits,
        
        // Description typography
        imageHotspot_descFontFamily: descFontFamily,
        imageHotspot_descFontSize: descFontSize,
        imageHotspot_descFontSizeUnits: descFontSizeUnits,
        imageHotspot_descFontWeight: descFontWeight,
        imageHotspot_descFontStyle: descFontStyle,
        imageHotspot_descColor: descColor,
        imageHotspot_descMargin: descMargin,
        imageHotspot_descMarginUnits: descMarginUnits,
        
        // Icon styles
        imageHotspot_iconSize: iconSize,
        imageHotspot_iconSizeUnits: iconSizeUnits,
        imageHotspot_iconColor: iconColor,
        
        // Custom CSS
        imageHotspot_customCSS: customCSS,
    } = attributes;

    // Image height control
    const imageHeightDesktop = imageHeight?.Desktop ? `${imageHeight.Desktop}${imageHeightUnits?.Desktop || 'px'}` : '500px';
    const imageHeightTablet = imageHeight?.Tablet ? `${imageHeight.Tablet}${imageHeightUnits?.Tablet || 'px'}` : imageHeightDesktop;
    const imageHeightMobile = imageHeight?.Mobile ? `${imageHeight.Mobile}${imageHeightUnits?.Mobile || 'px'}` : imageHeightDesktop;

    // Marker size with unit
    const markerSizeValue = markerSize?.Desktop ? `${markerSize.Desktop}${markerSizeUnits?.Desktop || 'px'}` : '35px';
    const markerSizeTablet = markerSize?.Tablet ? `${markerSize.Tablet}${markerSizeUnits?.Tablet || 'px'}` : markerSizeValue;
    const markerSizeMobile = markerSize?.Mobile ? `${markerSize.Mobile}${markerSizeUnits?.Mobile || 'px'}` : markerSizeValue;

    // Marker hover size with unit
    const markerHoverSizeValue = markerHoverSize?.Desktop ? `${markerHoverSize.Desktop}${markerHoverSizeUnits?.Desktop || 'px'}` : markerSizeValue;
    const markerHoverSizeTablet = markerHoverSize?.Tablet ? `${markerHoverSize.Tablet}${markerHoverSizeUnits?.Tablet || 'px'}` : markerHoverSizeValue;
    const markerHoverSizeMobile = markerHoverSize?.Mobile ? `${markerHoverSize.Mobile}${markerHoverSizeUnits?.Mobile || 'px'}` : markerHoverSizeValue;
    
    // Marker border width
    const markerBorderWidthValue = markerBorderWidth?.Desktop ? `${markerBorderWidth.Desktop}${markerBorderWidthUnits?.Desktop || 'px'}` : '0px';
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
    const iconSizeValue = iconSize?.Desktop ? `${iconSize.Desktop}${iconSizeUnits?.Desktop || 'px'}` : '50%';
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
    const hotspotHoverStyles = (hotspots || []).map((hotspot) => `
        ${hotspot.hoverBackgroundColor ? `
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-trigger {
                background-color: ${hotspot.hoverBackgroundColor} !important;
            }
        ` : ''}
        ${hotspot.iconHoverColor ? `
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-icon {
                color: ${hotspot.iconHoverColor} !important;
            }
        ` : ''}
    `).join('');
    const getResponsiveSize = (size, units, fallback) => {
        const desktop = size?.Desktop ? `${size.Desktop}${units?.Desktop || 'px'}` : fallback.Desktop;
        const tablet = size?.Tablet ? `${size.Tablet}${units?.Tablet || 'px'}` : fallback.Tablet;
        const mobile = size?.Mobile ? `${size.Mobile}${units?.Mobile || 'px'}` : fallback.Mobile;

        return { desktop, tablet, mobile };
    };
    const hotspotSizeStyles = (hotspots || []).map((hotspot) => {
        const normalSize = getResponsiveSize(
            hotspot.markerSize,
            hotspot.markerSizeUnits,
            {
                Desktop: markerSizeValue,
                Tablet: markerSizeTablet,
                Mobile: markerSizeMobile
            }
        );
        const hoverSize = getResponsiveSize(
            hotspot.markerHoverSize,
            hotspot.markerHoverSizeUnits,
            {
                Desktop: normalSize.desktop,
                Tablet: normalSize.tablet,
                Mobile: normalSize.mobile
            }
        );

        return `
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-trigger {
                width: ${normalSize.desktop};
                height: ${normalSize.desktop};
            }

            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] {
                width: ${normalSize.desktop};
                height: ${normalSize.desktop};
            }

            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-trigger:hover {
                width: ${hoverSize.desktop};
                height: ${hoverSize.desktop};
            }

            @media only screen and (max-width: 1024px) {
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-trigger {
                    width: ${normalSize.tablet};
                    height: ${normalSize.tablet};
                }

                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] {
                    width: ${normalSize.tablet};
                    height: ${normalSize.tablet};
                }

                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-trigger:hover {
                    width: ${hoverSize.tablet};
                    height: ${hoverSize.tablet};
                }
            }

            @media only screen and (max-width: 767px) {
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-trigger {
                    width: ${normalSize.mobile};
                    height: ${normalSize.mobile};
                }

                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] {
                    width: ${normalSize.mobile};
                    height: ${normalSize.mobile};
                }

                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-trigger:hover {
                    width: ${hoverSize.mobile};
                    height: ${hoverSize.mobile};
                }
            }
        `;
    }).join('');

    const hotspotAnimationStyles = (hotspots || []).map((hotspot) => {
        const animation = hotspot.animation || 'none';
        if (animation === 'none' || hotspot.autoplay === false) {
            return '';
        }

        const activeDuration = animation === 'pulse' ? 1.9 : animation === 'glow' ? 1.8 : 2.2;
        const interval = Number(hotspot.animationInterval) || 2;
        const totalDuration = activeDuration + Math.max(interval, 0);
        const endPercent = ((activeDuration / totalDuration) * 100).toFixed(4);
        const midPercent = (endPercent / 2).toFixed(4);
        const animationId = `${blockID}-${hotspot.id}`.replace(/[^a-zA-Z0-9_-]/g, '');
        const markerColorValue = hotspot.backgroundColor || '#011f4b';

        const keyframes = {
            pulse: `
                @keyframes fb-hotspot-pulse-${animationId} {
                    0%, ${endPercent}%, 100% { transform: scale(1); }
                    ${midPercent}% { transform: scale(1.12); }
                }
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"].animation-pulse .fb-hotspot-trigger {
                    position: relative;
                    color: ${markerColorValue};
                    animation: fb-hotspot-pulse-${animationId} ${totalDuration}s ease-in-out infinite;
                }
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"].animation-pulse .fb-hotspot-trigger::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    z-index: -1;
                    background: currentColor;
                    opacity: 0.18;
                    border-radius: inherit;
                    pointer-events: none;
                    animation: fb-hotspot-pulse-${animationId} ${totalDuration}s ease-in-out infinite;
                }
            `,
            glow: `
                @keyframes fb-hotspot-glow-${animationId} {
                    0% { transform: scale(1); opacity: 1; }
                    ${endPercent}%, 100% { transform: scale(1.6); opacity: 0; }
                }
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"].animation-glow .fb-hotspot-trigger {
                    position: relative;
                    color: ${markerColorValue};
                    animation: none;
                }
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"].animation-glow .fb-hotspot-trigger::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    z-index: -1;
                    background: currentColor;
                    opacity: 0;
                    border-radius: inherit;
                    pointer-events: none;
                    animation: fb-hotspot-glow-${animationId} ${totalDuration}s ease-out infinite;
                }
            `,
            float: `
                @keyframes fb-hotspot-float-${animationId} {
                    0%, ${endPercent}%, 100% { transform: translateY(0); }
                    ${midPercent}% { transform: translateY(-4px); }
                }
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"].animation-float .fb-hotspot-trigger {
                    animation: fb-hotspot-float-${animationId} ${totalDuration}s ease-in-out infinite;
                }
            `,
        };

        return keyframes[animation] || '';
    }).join('');

    const hotspotPopoverStyles = (hotspots || []).map((hotspot) => {
        const pos = hotspot.popoverPosition || 'top';
        const gap = '18px';

        const placements = {
            top: {
                position: `left: 50%; bottom: calc(50% + ${gap});`,
                hiddenTransform: 'translateX(-50%) translateY(8px)',
                visibleTransform: 'translateX(-50%) translateY(0)',
                notch: `top: 100%; left: 50%; transform: translateX(-50%); border-color: ${popoverBgColor} transparent transparent transparent;`,
            },
            bottom: {
                position: `left: 50%; top: calc(50% + ${gap});`,
                hiddenTransform: 'translateX(-50%) translateY(-8px)',
                visibleTransform: 'translateX(-50%) translateY(0)',
                notch: `bottom: 100%; left: 50%; transform: translateX(-50%); border-color: transparent transparent ${popoverBgColor} transparent;`,
            },
            left: {
                position: `right: calc(50% + ${gap}); top: 50%;`,
                hiddenTransform: 'translateY(-50%) translateX(8px)',
                visibleTransform: 'translateY(-50%) translateX(0)',
                notch: `top: 50%; left: 100%; transform: translateY(-50%); border-color: transparent transparent transparent ${popoverBgColor};`,
            },
            right: {
                position: `left: calc(50% + ${gap}); top: 50%;`,
                hiddenTransform: 'translateY(-50%) translateX(-8px)',
                visibleTransform: 'translateY(-50%) translateX(0)',
                notch: `top: 50%; right: 100%; transform: translateY(-50%); border-color: transparent ${popoverBgColor} transparent transparent;`,
            },
            'top-left': {
                position: `right: calc(50% + ${gap}); bottom: calc(50% + ${gap});`,
                hiddenTransform: 'translateY(8px)',
                visibleTransform: 'translateY(0)',
            },
            'top-right': {
                position: `left: calc(50% + ${gap}); bottom: calc(50% + ${gap});`,
                hiddenTransform: 'translateY(8px)',
                visibleTransform: 'translateY(0)',
            },
            'bottom-left': {
                position: `right: calc(50% + ${gap}); top: calc(50% + ${gap});`,
                hiddenTransform: 'translateY(-8px)',
                visibleTransform: 'translateY(0)',
            },
            'bottom-right': {
                position: `left: calc(50% + ${gap}); top: calc(50% + ${gap});`,
                hiddenTransform: 'translateY(-8px)',
                visibleTransform: 'translateY(0)',
            },
        };
        const placement = placements[pos] || placements.top;

        return `
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-popover {
                position: absolute;
                inset: auto;
                margin: 0;
                ${placement.position}
                transform: ${placement.hiddenTransform};
                transform-origin: center;
                background-color: ${popoverBgColor};
                width: ${popoverWidthValue};
                padding: ${popoverPaddingValue};
                border-radius: ${popoverBorderRadiusValue};
                box-shadow: ${popoverShadow};
                z-index: 20;
                display: block;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
            }

            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-popover,
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"].locked .fb-hotspot-popover {
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
                transform: ${placement.visibleTransform};
            }

            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-popover::after {
                ${placement.notch ? `
                    content: '';
                    position: absolute;
                    inset: auto;
                    width: 0;
                    height: 0;
                    margin: 0;
                    border-width: 8px;
                    border-style: solid;
                    ${placement.notch}
                ` : `
                    content: none;
                    display: none;
                `}
            }
        `;
    }).join('');

    const style = `
        .${blockID} {
            position: relative;
            display: block;
            width: 100%;
        }

        .${blockID} .fb-hotspot-container {
            ${containerShadowCssValue ? `box-shadow: ${containerShadowCssValue};` : ''}
        }

        .${blockID} .fb-hotspot-base-image {
            width: 100%;
            height: ${imageHeightDesktop};
            display: block;
            object-fit: ${imageSize || 'cover'};
        }

        .${blockID} .fb-hotspot-marker {
            position: absolute;
            transform: translate(-50%, -50%);
            z-index: 10;
            width: ${markerSizeValue};
            height: ${markerSizeValue};
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .${blockID} .fb-hotspot-trigger {
            box-sizing: border-box;
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
            line-height: 0;
            font-size: 0;
        }

        .${blockID} .fb-hotspot-trigger:hover {
            width: ${markerHoverSizeValue};
            height: ${markerHoverSizeValue};
            background-color: ${markerHoverColor || markerColor};
            transform: scale(1.15);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .${blockID} .fb-hotspot-icon {
            width: ${iconSizeValue};
            height: ${iconSizeValue};
            color: ${iconColor};
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
        }

        .${blockID} .fb-hotspot-icon svg {
            width: 100%;
            height: 100%;
            fill: currentColor;
        }

        ${hotspotHoverStyles}
        ${hotspotSizeStyles}
        ${hotspotAnimationStyles}

        ${hotspotPopoverStyles}

        .${blockID} .fb-hotspot-popover-title {
            font-family: ${titleFontFamily || 'inherit'};
            font-size: ${titleFontSizeValue};
            font-weight: ${titleFontWeight};
            font-style: ${titleFontStyle};
            color: ${titleColor};
            margin: ${titleMarginValue};
            line-height: 1.4;
        }

        .${blockID} .fb-hotspot-popover-description {
            font-family: ${descFontFamily || 'inherit'};
            font-size: ${descFontSizeValue};
            font-weight: ${descFontWeight};
            font-style: ${descFontStyle};
            color: ${descColor};
            margin: ${descMarginValue};
            line-height: 1.5;
        }

        @media only screen and (max-width: 1024px) {

            .${blockID} .fb-hotspot-base-image {
                height: ${imageHeightTablet};
            }

            .${blockID} .fb-hotspot-trigger {
                width: ${markerSizeTablet};
                height: ${markerSizeTablet};
                border-width: ${markerBorderWidthTablet};
                border-radius: ${markerBorderRadiusTablet};
            }

            .${blockID} .fb-hotspot-marker {
                width: ${markerSizeTablet};
                height: ${markerSizeTablet};
            }

            .${blockID} .fb-hotspot-popover {
                width: ${popoverWidthTablet};
                padding: ${popoverPaddingTablet};
                border-radius: ${popoverBorderRadiusTablet};
            }

            .${blockID} .fb-hotspot-icon {
                width: ${iconSizeTablet};
                height: ${iconSizeTablet};
            }

            .${blockID} .fb-hotspot-popover-title {
                font-size: ${titleFontSizeTablet};
                margin: ${titleMarginTablet};
            }

            .${blockID} .fb-hotspot-popover-description {
                font-size: ${descFontSizeTablet};
                margin: ${descMarginTablet};
            }
        }

        @media only screen and (max-width: 767px) {

            .${blockID} .fb-hotspot-base-image {
                height: ${imageHeightMobile};
            }

            .${blockID} .fb-hotspot-trigger {
                width: ${markerSizeMobile};
                height: ${markerSizeMobile};
                border-width: ${markerBorderWidthMobile};
                border-radius: ${markerBorderRadiusMobile};
            }

            .${blockID} .fb-hotspot-marker {
                width: ${markerSizeMobile};
                height: ${markerSizeMobile};
            }

            .${blockID} .fb-hotspot-popover {
                width: ${popoverWidthMobile};
                padding: ${popoverPaddingMobile};
                border-radius: ${popoverBorderRadiusMobile};
            }

            .${blockID} .fb-hotspot-icon {
                width: ${iconSizeMobile};
                height: ${iconSizeMobile};
            }

            .${blockID} .fb-hotspot-popover-title {
                font-size: ${titleFontSizeMobile};
                margin: ${titleMarginMobile};
            }

            .${blockID} .fb-hotspot-popover-description {
                font-size: ${descFontSizeMobile};
                margin: ${descMarginMobile};
            }
        }
    `;

    const customCssOutput = getCustomCss(customCSS, `.${blockID}`);
    return `${style} ${customCssOutput}`.replace(/\s+/g, ' ').trim();
};

export default generateImageHotspotStyle;
