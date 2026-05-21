/**
 * Image Hotspot Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateImageHotspotStyle = (attributes) => {
    const {
        blockID,
        imageHotspotImageSize,
        imageHotspotImageHeight,
        imageHotspotImageHeightUnits,
        imageHotspotImageBorderWidth,
        imageHotspotImageBorderWidthUnits,
        imageHotspotImageBorderColor,
        imageHotspotImageBorderRadius,
        imageHotspotImageBorderRadiusUnits,
        imageHotspotHotspots,

        // Hotspot marker styles
        imageHotspotMarkerSize,
        imageHotspotMarkerSizeUnits,
        imageHotspotMarkerHoverSize,
        imageHotspotMarkerHoverSizeUnits,
        imageHotspotMarkerColor,
        imageHotspotMarkerHoverColor,
        imageHotspotMarkerBorderWidth,
        imageHotspotMarkerBorderWidthUnits,
        imageHotspotMarkerBorderColor,
        imageHotspotMarkerBorderRadius,
        imageHotspotMarkerBorderRadiusUnits,

        imageHotspotContainerShadowCssValue,

        // Popover styles
        imageHotspotPopoverBgColor,
        imageHotspotPopoverWidth,
        imageHotspotPopoverWidthUnits,

        imageHotspotPopoverPaddingDesktop,
        imageHotspotPopoverPaddingTablet,
        imageHotspotPopoverPaddingMobile,
        imageHotspotPopoverPaddingUnits,
        imageHotspotPopoverBorderRadius,
        imageHotspotPopoverBorderRadiusUnits,
        imageHotspotPopoverBorderWidth,
        imageHotspotPopoverBorderWidthUnits,
        imageHotspotPopoverBorderColor,
        imageHotspotPopoverImageBorderWidth,
        imageHotspotPopoverImageBorderWidthUnits,
        imageHotspotPopoverImageBorderRadius,
        imageHotspotPopoverImageBorderRadiusUnits,
        imageHotspotPopoverImageBorderColor,

        imageHotspotPopoverShadowCssValue,

        // Title typography
        imageHotspotTitleFontFamily,
        imageHotspotTitleFontSize,
        imageHotspotTitleFontSizeUnits,
        imageHotspotTitleFontWeight,
        imageHotspotTitleFontStyle,
        imageHotspotTitleColor,
        imageHotspotTitleHoverColor,

        imageHotspotTitleMargin,
        imageHotspotTitleMarginUnits,

        imageHotspotTitleTextTransform,
        imageHotspotTitleTextDecoration,
        imageHotspotTitleLetterSpacing,
        imageHotspotTitleLetterSpacingUnits,
        imageHotspotTitleLineHeight,
        imageHotspotTitleLineHeightUnits,

        // Description typography
        imageHotspotDescFontFamily,
        imageHotspotDescFontSize,
        imageHotspotDescFontSizeUnits,
        imageHotspotDescFontWeight,
        imageHotspotDescFontStyle,
        imageHotspotDescColor,

        imageHotspotDescMargin,
        imageHotspotDescMarginUnits,

        imageHotspotDescTextTransform,
        imageHotspotDescTextDecoration,
        imageHotspotDescLetterSpacing,
        imageHotspotDescLetterSpacingUnits,
        imageHotspotDescLineHeight,
        imageHotspotDescLineHeightUnits,

        // Icon styles
        imageHotspotIconSize,
        imageHotspotIconSizeUnits,
        imageHotspotIconColor,

        imageHotspotPaddingDesktop,
        imageHotspotPaddingTablet,
        imageHotspotPaddingMobile,
        imageHotspotPaddingUnits,
        imageHotspotMarginDesktop,
        imageHotspotMarginTablet,
        imageHotspotMarginMobile,
        imageHotspotMarginUnits,
        imageHotspotBorderDesktop,
        imageHotspotBorderTablet,
        imageHotspotBorderMobile,
        imageHotspotBorderUnits,
        imageHotspotBorderRadiusDesktop,
        imageHotspotBorderRadiusTablet,
        imageHotspotBorderRadiusMobile,
        imageHotspotBorderRadiusUnits,

        // Custom CSS
        imageHotspotCustomCSS,
    } = attributes;

    // ─── Helpers

    const buildFourSided = (obj, unit) => {
        if (!obj || (!obj.top && !obj.right && !obj.bottom && !obj.left)) return '';
        const u = unit || 'px';
        return `${obj.top || 0}${u} ${obj.right || 0}${u} ${obj.bottom || 0}${u} ${obj.left || 0}${u}`;
    };

    const buildResponsiveBoxValue = (obj, units, device, fallback = '') => {
        const value = obj?.[device];

        if (value && typeof value === 'object') {
            return buildFourSided(value, units?.[device]) || fallback;
        }

        return value ? `${value}${units?.[device] || 'px'}` : fallback;
    };

    const getResponsiveSize = (size, units, fallback) => {
        const desktop = size?.Desktop ? `${size.Desktop}${units?.Desktop || 'px'}` : fallback.Desktop;
        const tablet  = size?.Tablet  ? `${size.Tablet}${units?.Tablet   || 'px'}` : fallback.Tablet;
        const mobile  = size?.Mobile  ? `${size.Mobile}${units?.Mobile   || 'px'}` : fallback.Mobile;
        return { desktop, tablet, mobile };
    };

    const getScale = (normalSize, hoverSize) => {
        const normal = parseFloat(normalSize);
        const hover = parseFloat(hoverSize);

        if (!normal || !hover) {
            return 1.15;
        }

        return Number((hover / normal).toFixed(4));
    };

    // ─── Global shorthand values

    // Marker size
    const markerSizeDesktop = imageHotspotMarkerSize?.Desktop ? `${imageHotspotMarkerSize.Desktop}${imageHotspotMarkerSizeUnits?.Desktop || 'px'}` : '35px';
    const markerSizeTablet  = imageHotspotMarkerSize?.Tablet  ? `${imageHotspotMarkerSize.Tablet}${imageHotspotMarkerSizeUnits?.Tablet   || 'px'}` : markerSizeDesktop;
    const markerSizeMobile  = imageHotspotMarkerSize?.Mobile  ? `${imageHotspotMarkerSize.Mobile}${imageHotspotMarkerSizeUnits?.Mobile   || 'px'}` : markerSizeDesktop;

    // Marker hover size
    const markerHoverSizeDesktop = imageHotspotMarkerHoverSize?.Desktop ? `${imageHotspotMarkerHoverSize.Desktop}${imageHotspotMarkerHoverSizeUnits?.Desktop || 'px'}` : '40px';
    const markerHoverSizeTablet  = imageHotspotMarkerHoverSize?.Tablet  ? `${imageHotspotMarkerHoverSize.Tablet}${imageHotspotMarkerHoverSizeUnits?.Tablet   || 'px'}` : '37px';
    const markerHoverSizeMobile  = imageHotspotMarkerHoverSize?.Mobile  ? `${imageHotspotMarkerHoverSize.Mobile}${imageHotspotMarkerHoverSizeUnits?.Mobile   || 'px'}` : '35px';

    // Marker border width
    const markerBorderWidthDesktop = imageHotspotMarkerBorderWidth?.Desktop ? `${imageHotspotMarkerBorderWidth.Desktop}${imageHotspotMarkerBorderWidthUnits?.Desktop || 'px'}` : '';
    const markerBorderWidthTablet  = imageHotspotMarkerBorderWidth?.Tablet  ? `${imageHotspotMarkerBorderWidth.Tablet}${imageHotspotMarkerBorderWidthUnits?.Tablet   || 'px'}` : '';
    const markerBorderWidthMobile  = imageHotspotMarkerBorderWidth?.Mobile  ? `${imageHotspotMarkerBorderWidth.Mobile}${imageHotspotMarkerBorderWidthUnits?.Mobile   || 'px'}` : '';

    // Marker border radius
    const markerBorderRadiusDesktop = imageHotspotMarkerBorderRadius?.Desktop ? `${imageHotspotMarkerBorderRadius.Desktop}${imageHotspotMarkerBorderRadiusUnits?.Desktop || '%'}` : '50%';
    const markerBorderRadiusTablet  = imageHotspotMarkerBorderRadius?.Tablet  ? `${imageHotspotMarkerBorderRadius.Tablet}${imageHotspotMarkerBorderRadiusUnits?.Tablet   || '%'}` : markerBorderRadiusDesktop;
    const markerBorderRadiusMobile  = imageHotspotMarkerBorderRadius?.Mobile  ? `${imageHotspotMarkerBorderRadius.Mobile}${imageHotspotMarkerBorderRadiusUnits?.Mobile   || '%'}` : markerBorderRadiusDesktop;

    // Title margin
    const titleMarginDesktop = imageHotspotTitleMargin?.Desktop ? `${imageHotspotTitleMargin.Desktop}${imageHotspotTitleMarginUnits?.Desktop || 'px'}` : '';
    const titleMarginTablet  = imageHotspotTitleMargin?.Tablet  ? `${imageHotspotTitleMargin.Tablet}${imageHotspotTitleMarginUnits?.Tablet   || 'px'}` : '';
    const titleMarginMobile  = imageHotspotTitleMargin?.Mobile  ? `${imageHotspotTitleMargin.Mobile}${imageHotspotTitleMarginUnits?.Mobile   || 'px'}` : '';

    // Description margin
    const descMarginDesktop = imageHotspotDescMargin?.Desktop ? `${imageHotspotDescMargin.Desktop}${imageHotspotDescMarginUnits?.Desktop || 'px'}` : '';
    const descMarginTablet  = imageHotspotDescMargin?.Tablet  ? `${imageHotspotDescMargin.Tablet}${imageHotspotDescMarginUnits?.Tablet   || 'px'}` : '';
    const descMarginMobile  = imageHotspotDescMargin?.Mobile  ? `${imageHotspotDescMargin.Mobile}${imageHotspotDescMarginUnits?.Mobile   || 'px'}` : '';

    // Popover padding (four-sided objects)
    const popoverPaddingDesktop = buildFourSided(imageHotspotPopoverPaddingDesktop, imageHotspotPopoverPaddingUnits?.Desktop);
    const popoverPaddingTablet  = buildFourSided(imageHotspotPopoverPaddingTablet,  imageHotspotPopoverPaddingUnits?.Tablet);
    const popoverPaddingMobile  = buildFourSided(imageHotspotPopoverPaddingMobile,  imageHotspotPopoverPaddingUnits?.Mobile);

    const imageBorderWidthDesktop = buildResponsiveBoxValue(imageHotspotImageBorderWidth, imageHotspotImageBorderWidthUnits, 'Desktop');
    const imageBorderWidthTablet  = buildResponsiveBoxValue(imageHotspotImageBorderWidth, imageHotspotImageBorderWidthUnits, 'Tablet');
    const imageBorderWidthMobile  = buildResponsiveBoxValue(imageHotspotImageBorderWidth, imageHotspotImageBorderWidthUnits, 'Mobile');

    const imageBorderRadiusDesktop = buildResponsiveBoxValue(imageHotspotImageBorderRadius, imageHotspotImageBorderRadiusUnits, 'Desktop');
    const imageBorderRadiusTablet  = buildResponsiveBoxValue(imageHotspotImageBorderRadius, imageHotspotImageBorderRadiusUnits, 'Tablet');
    const imageBorderRadiusMobile  = buildResponsiveBoxValue(imageHotspotImageBorderRadius, imageHotspotImageBorderRadiusUnits, 'Mobile');

    // Popover width
    const popoverWidthDesktop = imageHotspotPopoverWidth?.Desktop ? `${imageHotspotPopoverWidth.Desktop}${imageHotspotPopoverWidthUnits?.Desktop || 'px'}` : '250';
    const popoverWidthTablet  = imageHotspotPopoverWidth?.Tablet  ? `${imageHotspotPopoverWidth.Tablet}${imageHotspotPopoverWidthUnits?.Tablet   || 'px'}` : popoverWidthDesktop;
    const popoverWidthMobile  = imageHotspotPopoverWidth?.Mobile  ? `${imageHotspotPopoverWidth.Mobile}${imageHotspotPopoverWidthUnits?.Mobile   || 'px'}` : popoverWidthDesktop;

    // Popover border radius
    const popoverBorderRadiusDesktop = buildResponsiveBoxValue(imageHotspotPopoverBorderRadius, imageHotspotPopoverBorderRadiusUnits, 'Desktop', '8px');
    const popoverBorderRadiusTablet  = buildResponsiveBoxValue(imageHotspotPopoverBorderRadius, imageHotspotPopoverBorderRadiusUnits, 'Tablet', popoverBorderRadiusDesktop);
    const popoverBorderRadiusMobile  = buildResponsiveBoxValue(imageHotspotPopoverBorderRadius, imageHotspotPopoverBorderRadiusUnits, 'Mobile', popoverBorderRadiusDesktop);

    const popoverBorderWidthDesktop = buildResponsiveBoxValue(imageHotspotPopoverBorderWidth, imageHotspotPopoverBorderWidthUnits, 'Desktop');
    const popoverBorderWidthTablet  = buildResponsiveBoxValue(imageHotspotPopoverBorderWidth, imageHotspotPopoverBorderWidthUnits, 'Tablet');
    const popoverBorderWidthMobile  = buildResponsiveBoxValue(imageHotspotPopoverBorderWidth, imageHotspotPopoverBorderWidthUnits, 'Mobile');

    const popoverImageBorderWidthDesktop = buildResponsiveBoxValue(imageHotspotPopoverImageBorderWidth, imageHotspotPopoverImageBorderWidthUnits, 'Desktop');
    const popoverImageBorderWidthTablet  = buildResponsiveBoxValue(imageHotspotPopoverImageBorderWidth, imageHotspotPopoverImageBorderWidthUnits, 'Tablet');
    const popoverImageBorderWidthMobile  = buildResponsiveBoxValue(imageHotspotPopoverImageBorderWidth, imageHotspotPopoverImageBorderWidthUnits, 'Mobile');

    const popoverImageBorderRadiusDesktop = buildResponsiveBoxValue(imageHotspotPopoverImageBorderRadius, imageHotspotPopoverImageBorderRadiusUnits, 'Desktop');
    const popoverImageBorderRadiusTablet  = buildResponsiveBoxValue(imageHotspotPopoverImageBorderRadius, imageHotspotPopoverImageBorderRadiusUnits, 'Tablet');
    const popoverImageBorderRadiusMobile  = buildResponsiveBoxValue(imageHotspotPopoverImageBorderRadius, imageHotspotPopoverImageBorderRadiusUnits, 'Mobile');

    // Block spacing
    const blockPaddingDesktop = buildFourSided(imageHotspotPaddingDesktop, imageHotspotPaddingUnits?.Desktop);
    const blockPaddingTablet  = buildFourSided(imageHotspotPaddingTablet,  imageHotspotPaddingUnits?.Tablet);
    const blockPaddingMobile  = buildFourSided(imageHotspotPaddingMobile,  imageHotspotPaddingUnits?.Mobile);

    const blockMarginDesktop  = buildFourSided(imageHotspotMarginDesktop,  imageHotspotMarginUnits?.Desktop);
    const blockMarginTablet   = buildFourSided(imageHotspotMarginTablet,   imageHotspotMarginUnits?.Tablet);
    const blockMarginMobile   = buildFourSided(imageHotspotMarginMobile,   imageHotspotMarginUnits?.Mobile);

    const blockBorderDesktop  = buildFourSided(imageHotspotBorderDesktop,  imageHotspotBorderUnits?.Desktop);
    const blockBorderTablet   = buildFourSided(imageHotspotBorderTablet,   imageHotspotBorderUnits?.Tablet);
    const blockBorderMobile   = buildFourSided(imageHotspotBorderMobile,   imageHotspotBorderUnits?.Mobile);

    const blockBorderRadiusDesktop = buildFourSided(imageHotspotBorderRadiusDesktop, imageHotspotBorderRadiusUnits?.Desktop);
    const blockBorderRadiusTablet  = buildFourSided(imageHotspotBorderRadiusTablet,  imageHotspotBorderRadiusUnits?.Tablet);
    const blockBorderRadiusMobile  = buildFourSided(imageHotspotBorderRadiusMobile,  imageHotspotBorderRadiusUnits?.Mobile);


    const hotspotBaseStyles = (imageHotspotHotspots || []).map((hotspot) => `
        .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] {
            ${hotspot.x !== undefined && hotspot.x !== '' ? `left: ${hotspot.x}%;` : ''}
            ${hotspot.y !== undefined && hotspot.y !== '' ? `top: ${hotspot.y}%;` : ''}
        }

        .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-trigger {
            ${hotspot.backgroundColor ? `background-color: ${hotspot.backgroundColor};` : ''}
            /* currentColor used by animation ::before pseudo-elements */
            ${hotspot.backgroundColor ? `color: ${hotspot.backgroundColor};` : ''}
        }

        .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-icon {
            ${hotspot.iconColor ? `color: ${hotspot.iconColor};` : ''}
        }

        ${hotspot.hoverBackgroundColor ? `
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-trigger {
                background-color: ${hotspot.hoverBackgroundColor} !important;
                color: ${hotspot.hoverBackgroundColor} !important;
            }
        ` : ''}

        ${hotspot.iconHoverColor ? `
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-icon {
                color: ${hotspot.iconHoverColor} !important;
            }
        ` : ''}
    `).join('');

    // ─── Per-hotspot: responsive sizes

    const hotspotSizeStyles = (imageHotspotHotspots || []).map((hotspot) => {
        const normalSize = getResponsiveSize(
            hotspot.markerSize,
            hotspot.markerSizeUnits,
            { Desktop: markerSizeDesktop, Tablet: markerSizeTablet, Mobile: markerSizeMobile }
        );
        const hoverSize = getResponsiveSize(
            hotspot.markerHoverSize,
            hotspot.markerHoverSizeUnits,
            { Desktop: markerHoverSizeDesktop, Tablet: markerHoverSizeTablet, Mobile: markerHoverSizeMobile }
        );

        return `
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"],
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-trigger {
                width: ${normalSize.desktop};
                height: ${normalSize.desktop};
                aspect-ratio: 1 / 1;
            }

            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-trigger {
                transform: scale(${getScale(normalSize.desktop, hoverSize.desktop)});
            }

            @media only screen and (max-width: 1024px) {
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"],
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-trigger {
                    width: ${normalSize.tablet};
                    height: ${normalSize.tablet};
                    aspect-ratio: 1 / 1;
                }

                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-trigger {
                    transform: scale(${getScale(normalSize.tablet, hoverSize.tablet)});
                }
            }

            @media only screen and (max-width: 767px) {
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"],
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-trigger {
                    width: ${normalSize.mobile};
                    height: ${normalSize.mobile};
                    aspect-ratio: 1 / 1;
                }

                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-trigger {
                    transform: scale(${getScale(normalSize.mobile, hoverSize.mobile)});
                }
            }
        `;
    }).join('');


    const hotspotAnimationStyles = (imageHotspotHotspots || []).map((hotspot) => {
        const animation = hotspot.animation || 'none';

        // Skip if no animation or explicitly disabled via autoplay toggle
        if (animation === 'none' || hotspot.autoplay === false) {
            return '';
        }

        // Active motion duration (seconds) per animation type
        const activeDuration = animation === 'pulse' ? 1.9
                             : animation === 'glow'  ? 1.8
                             :                         2.2; // float

        const interval      = Math.max(Number(hotspot.animationInterval) || 0, 0);
        const totalDuration = activeDuration + interval;

        // Percentage of the cycle that contains actual motion
        const endPct = ((activeDuration / totalDuration) * 100).toFixed(4);
        const midPct = (endPct / 2).toFixed(4);

        // Unique keyframe name — safe for use as a CSS identifier
        const animId = `${blockID}-${hotspot.id}`.replace(/[^a-zA-Z0-9_-]/g, '');

        const markerColor = hotspot.backgroundColor || '#011f4b';

        if (animation === 'pulse') {
            return `
                @keyframes fb-anim-pulse-${animId} {
                    0%, ${endPct}%, 100% { transform: scale(1); }
                    ${midPct}%           { transform: scale(1.12); }
                }
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"].animation-pulse .fb-hotspot-trigger {
                    position: relative;
                    color: ${markerColor};
                    animation: fb-anim-pulse-${animId} ${totalDuration}s ease-in-out infinite;
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
                    animation: fb-anim-pulse-${animId} ${totalDuration}s ease-in-out infinite;
                }
            `;
        }

        if (animation === 'glow') {
            return `
                @keyframes fb-anim-glow-${animId} {
                    0%                   { transform: scale(1);   opacity: 1; }
                    ${endPct}%, 100%     { transform: scale(1.6); opacity: 0; }
                }
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"].animation-glow .fb-hotspot-trigger {
                    position: relative;
                    color: ${markerColor};
                    animation: none;
                    isolation: isolate;
                }
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"].animation-glow .fb-hotspot-trigger::before {
                    content: '';
                    position: absolute;
                    inset: -4px;
                    z-index: -1;
                    background: ${markerColor};
                    opacity: 0;
                    border-radius: inherit;
                    pointer-events: none;
                    animation: fb-anim-glow-${animId} ${totalDuration}s ease-out infinite;
                }
            `;
        }

        if (animation === 'float') {
            return `
                @keyframes fb-anim-float-${animId} {
                    0%, ${endPct}%, 100% { transform: translateY(0px); }
                    ${midPct}%           { transform: translateY(-4px); }
                }
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"].animation-float .fb-hotspot-trigger {
                    animation: fb-anim-float-${animId} ${totalDuration}s ease-in-out infinite;
                }
            `;
        }

        return '';
    }).join('');


    const popoverBg = imageHotspotPopoverBgColor || '#ffffff';
    const gap       = '25px';

    const popoverPositions = {
        top: {
            position:         `left: 50%; bottom: calc(50% + ${gap});`,
            hiddenTransform:  'translateX(-50%) translateY(8px)',
            visibleTransform: 'translateX(-50%) translateY(0)',
            notch:            `top: 100%; left: 50%; transform: translateX(-50%); border-color: ${popoverBg} transparent transparent transparent;`,
        },
        bottom: {
            position:         `left: 50%; top: calc(50% + ${gap});`,
            hiddenTransform:  'translateX(-50%) translateY(-8px)',
            visibleTransform: 'translateX(-50%) translateY(0)',
            notch:            `bottom: 100%; left: 50%; transform: translateX(-50%); border-color: transparent transparent ${popoverBg} transparent;`,
        },
        left: {
            position:         `right: calc(50% + ${gap}); top: 50%;`,
            hiddenTransform:  'translateY(-50%) translateX(8px)',
            visibleTransform: 'translateY(-50%) translateX(0)',
            notch:            `top: 50%; left: 100%; transform: translateY(-50%); border-color: transparent transparent transparent ${popoverBg};`,
        },
        right: {
            position:         `left: calc(50% + ${gap}); top: 50%;`,
            hiddenTransform:  'translateY(-50%) translateX(-8px)',
            visibleTransform: 'translateY(-50%) translateX(0)',
            notch:            `top: 50%; right: 100%; transform: translateY(-50%); border-color: transparent ${popoverBg} transparent transparent;`,
        },
        'top-left': {
            position:         `right: calc(50% + ${gap}); bottom: calc(50% + ${gap});`,
            hiddenTransform:  'translateY(8px)',
            visibleTransform: 'translateY(0)',
            notch:            null,
        },
        'top-right': {
            position:         `left: calc(50% + ${gap}); bottom: calc(50% + ${gap});`,
            hiddenTransform:  'translateY(8px)',
            visibleTransform: 'translateY(0)',
            notch:            null,
        },
        'bottom-left': {
            position:         `right: calc(50% + ${gap}); top: calc(50% + ${gap});`,
            hiddenTransform:  'translateY(-8px)',
            visibleTransform: 'translateY(0)',
            notch:            null,
        },
        'bottom-right': {
            position:         `left: calc(50% + ${gap}); top: calc(50% + ${gap});`,
            hiddenTransform:  'translateY(-8px)',
            visibleTransform: 'translateY(0)',
            notch:            null,
        },
    };

    const hotspotPopoverStyles = (imageHotspotHotspots || []).map((hotspot) => {
        const placement = popoverPositions[hotspot.popoverPosition || 'top'] || popoverPositions.top;

        return `
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-popover {
                position: absolute;
                inset: auto;
                margin: 0;
                ${placement.position}
                transform: ${placement.hiddenTransform};
                transform-origin: center;
                background-color: ${popoverBg};
                width: ${popoverWidthDesktop};
                ${popoverPaddingDesktop ? `padding: ${popoverPaddingDesktop};` : 'padding: 12px;'}
                border-radius: ${popoverBorderRadiusDesktop};
                ${popoverBorderWidthDesktop ? `border-width: ${popoverBorderWidthDesktop};` : ''}
                ${popoverBorderWidthDesktop ? 'border-style: solid;' : ''}
                ${imageHotspotPopoverBorderColor ? `border-color: ${imageHotspotPopoverBorderColor};` : ''}
                ${imageHotspotPopoverShadowCssValue ? `box-shadow: ${imageHotspotPopoverShadowCssValue};` : ''}
                z-index: 20;
                min-width: ${imageHotspotPopoverWidth?.Desktop ? '250px' : 'auto'};
                word-wrap: break-word;
                white-space: normal;
                box-sizing: border-box;
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
                    border-width: 8px;
                    border-style: solid;
                    ${placement.notch}
                ` : `content: none; display: none;`}
            }
        `;
    }).join('');

    // ─── Main block styles

    const fbHotspotStyle = `

        .${blockID} {
            ${blockPaddingDesktop      ? `padding: ${blockPaddingDesktop};` : ''}
            ${blockMarginDesktop       ? `margin: ${blockMarginDesktop};` : ''}
            ${blockBorderDesktop       ? `border-width: ${blockBorderDesktop};` : ''}
            ${blockBorderRadiusDesktop ? `border-radius: ${blockBorderRadiusDesktop};` : ''}
            ${imageHotspotContainerShadowCssValue ? `box-shadow: ${imageHotspotContainerShadowCssValue};` : ''}
        }

        .${blockID} .fb-hotspot-base-image {
            width: 100%;
            display: block;
            box-sizing: border-box;
            ${imageHotspotImageHeight?.Desktop && imageHotspotImageHeightUnits?.Desktop
                ? `height: ${imageHotspotImageHeight.Desktop}${imageHotspotImageHeightUnits.Desktop};`
                : ''}
            ${imageHotspotImageSize ? `object-fit: ${imageHotspotImageSize};` : ''}
            ${imageBorderWidthDesktop ? `border-width: ${imageBorderWidthDesktop};` : ''}
            ${imageBorderWidthDesktop ? 'border-style: solid;' : ''}
            ${imageHotspotImageBorderColor ? `border-color: ${imageHotspotImageBorderColor};` : ''}
            ${imageBorderRadiusDesktop ? `border-radius: ${imageBorderRadiusDesktop};` : ''}
        }

        .${blockID} .fb-hotspot-marker {
            position: absolute;
            transform: translate(-50%, -50%);
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .${blockID} .fb-hotspot-trigger {
            box-sizing: border-box;
            width: ${markerSizeDesktop};
            height: ${markerSizeDesktop};
            ${imageHotspotMarkerColor ? `background-color: ${imageHotspotMarkerColor};` : ''}
            border-radius: ${markerBorderRadiusDesktop};
            ${markerBorderWidthDesktop ? `border-width: ${markerBorderWidthDesktop};` : ''}
            ${imageHotspotMarkerBorderColor ? `border-color: ${imageHotspotMarkerBorderColor};` : ''}
            border-style: solid;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            transform-origin: center;
            transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
            font-size: 0;
        }

        .${blockID} .fb-hotspot-trigger:hover {
            ${imageHotspotMarkerHoverColor ? `background-color: ${imageHotspotMarkerHoverColor};` : ''}
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .${blockID} .fb-hotspot-icon {
            ${imageHotspotIconSize?.Desktop && imageHotspotIconSizeUnits?.Desktop
                ? `width: ${imageHotspotIconSize.Desktop}${imageHotspotIconSizeUnits.Desktop};
                   height: ${imageHotspotIconSize.Desktop}${imageHotspotIconSizeUnits.Desktop};`
                : 'width: 50%; height: 50%;'}
            ${imageHotspotIconColor ? `color: ${imageHotspotIconColor};` : ''}
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

        .${blockID} .fb-hotspot-popover-image {
            display: block;
            width: 100%;
            height: auto;
            box-sizing: border-box;
            ${popoverImageBorderWidthDesktop ? `border-width: ${popoverImageBorderWidthDesktop};` : ''}
            ${popoverImageBorderWidthDesktop ? 'border-style: solid;' : ''}
            ${imageHotspotPopoverImageBorderColor ? `border-color: ${imageHotspotPopoverImageBorderColor};` : ''}
            ${popoverImageBorderRadiusDesktop ? `border-radius: ${popoverImageBorderRadiusDesktop};` : ''}
        }

        ${hotspotBaseStyles}
        ${hotspotSizeStyles}
        ${hotspotAnimationStyles}
        ${hotspotPopoverStyles}

        .${blockID} .fb-hotspot-popover-title {
            ${imageHotspotTitleFontFamily    ? `font-family: ${imageHotspotTitleFontFamily};` : ''}
            ${imageHotspotTitleFontSize?.Desktop && imageHotspotTitleFontSizeUnits?.Desktop
                ? `font-size: ${imageHotspotTitleFontSize.Desktop}${imageHotspotTitleFontSizeUnits.Desktop};` : ''}
            ${imageHotspotTitleFontWeight    ? `font-weight: ${imageHotspotTitleFontWeight};` : ''}
            ${imageHotspotTitleFontStyle     ? `font-style: ${imageHotspotTitleFontStyle};` : ''}
            ${imageHotspotTitleColor         ? `color: ${imageHotspotTitleColor};` : ''}
            ${imageHotspotTitleTextTransform ? `text-transform: ${imageHotspotTitleTextTransform};` : ''}
            ${imageHotspotTitleTextDecoration ? `text-decoration: ${imageHotspotTitleTextDecoration};` : ''}
            ${imageHotspotTitleLetterSpacing?.Desktop && imageHotspotTitleLetterSpacingUnits?.Desktop
                ? `letter-spacing: ${imageHotspotTitleLetterSpacing.Desktop}${imageHotspotTitleLetterSpacingUnits.Desktop};` : ''}
            ${imageHotspotTitleLineHeight?.Desktop && imageHotspotTitleLineHeightUnits?.Desktop
                ? `line-height: ${imageHotspotTitleLineHeight.Desktop}${imageHotspotTitleLineHeightUnits.Desktop};` : ''}
            ${titleMarginDesktop ? `margin: ${titleMarginDesktop};` : ''}
        }

        .${blockID} .fb-hotspot-popover-title a {
            color: inherit;
            text-decoration: inherit;
        }

        .${blockID} .fb-hotspot-popover-title:hover,
        .${blockID} .fb-hotspot-popover-title:focus-within {
            ${imageHotspotTitleHoverColor ? `color: ${imageHotspotTitleHoverColor};` : ''}
        }

        .${blockID} .fb-hotspot-popover-description {
            ${imageHotspotDescFontFamily    ? `font-family: ${imageHotspotDescFontFamily};` : ''}
            ${imageHotspotDescFontSize?.Desktop && imageHotspotDescFontSizeUnits?.Desktop
                ? `font-size: ${imageHotspotDescFontSize.Desktop}${imageHotspotDescFontSizeUnits.Desktop};` : ''}
            ${imageHotspotDescFontWeight    ? `font-weight: ${imageHotspotDescFontWeight};` : ''}
            ${imageHotspotDescFontStyle     ? `font-style: ${imageHotspotDescFontStyle};` : ''}
            ${imageHotspotDescColor         ? `color: ${imageHotspotDescColor};` : ''}
            ${imageHotspotDescTextTransform ? `text-transform: ${imageHotspotDescTextTransform};` : ''}
            ${imageHotspotDescTextDecoration ? `text-decoration: ${imageHotspotDescTextDecoration};` : ''}
            ${imageHotspotDescLetterSpacing?.Desktop && imageHotspotDescLetterSpacingUnits?.Desktop
                ? `letter-spacing: ${imageHotspotDescLetterSpacing.Desktop}${imageHotspotDescLetterSpacingUnits.Desktop};` : ''}
            ${imageHotspotDescLineHeight?.Desktop && imageHotspotDescLineHeightUnits?.Desktop
                ? `line-height: ${imageHotspotDescLineHeight.Desktop}${imageHotspotDescLineHeightUnits.Desktop};` : ''}
            ${descMarginDesktop ? `margin: ${descMarginDesktop};` : ''}
        }

        @media only screen and (max-width: 1024px) {

            .${blockID} {
                ${blockPaddingTablet      ? `padding: ${blockPaddingTablet};` : ''}
                ${blockMarginTablet       ? `margin: ${blockMarginTablet};` : ''}
                ${blockBorderTablet       ? `border-width: ${blockBorderTablet};` : ''}
                ${blockBorderRadiusTablet ? `border-radius: ${blockBorderRadiusTablet};` : ''}
            }

            .${blockID} .fb-hotspot-base-image {
                ${imageHotspotImageHeight?.Tablet && imageHotspotImageHeightUnits?.Tablet
                    ? `height: ${imageHotspotImageHeight.Tablet}${imageHotspotImageHeightUnits.Tablet};` : ''}
                ${imageBorderWidthTablet ? `border-width: ${imageBorderWidthTablet};` : ''}
                ${imageBorderRadiusTablet ? `border-radius: ${imageBorderRadiusTablet};` : ''}
            }

            .${blockID} .fb-hotspot-trigger {
                width: ${markerSizeTablet};
                height: ${markerSizeTablet};
                ${markerBorderWidthTablet  ? `border-width: ${markerBorderWidthTablet};`  : ''}
                ${markerBorderRadiusTablet !== markerBorderRadiusDesktop ? `border-radius: ${markerBorderRadiusTablet};` : ''}
            }

            .${blockID} .fb-hotspot-popover {
                ${popoverWidthTablet  ? `width: ${popoverWidthTablet};` : ''}
                ${popoverPaddingTablet ? `padding: ${popoverPaddingTablet};` : ''}
                ${popoverBorderRadiusTablet ? `border-radius: ${popoverBorderRadiusTablet};` : ''}
                ${popoverBorderWidthTablet ? `border-width: ${popoverBorderWidthTablet};` : ''}
            }

            .${blockID} .fb-hotspot-popover-image {
                box-sizing: border-box;
                ${popoverImageBorderWidthTablet ? `border-width: ${popoverImageBorderWidthTablet};` : ''}
                ${popoverImageBorderRadiusTablet ? `border-radius: ${popoverImageBorderRadiusTablet};` : ''}
            }

            .${blockID} .fb-hotspot-icon {
                ${imageHotspotIconSize?.Tablet && imageHotspotIconSizeUnits?.Tablet
                    ? `width: ${imageHotspotIconSize.Tablet}${imageHotspotIconSizeUnits.Tablet};
                       height: ${imageHotspotIconSize.Tablet}${imageHotspotIconSizeUnits.Tablet};` : ''}
            }

            .${blockID} .fb-hotspot-popover-title {
                ${imageHotspotTitleFontSize?.Tablet && imageHotspotTitleFontSizeUnits?.Tablet
                    ? `font-size: ${imageHotspotTitleFontSize.Tablet}${imageHotspotTitleFontSizeUnits.Tablet};` : ''}
                ${imageHotspotTitleLetterSpacing?.Tablet && imageHotspotTitleLetterSpacingUnits?.Tablet
                    ? `letter-spacing: ${imageHotspotTitleLetterSpacing.Tablet}${imageHotspotTitleLetterSpacingUnits.Tablet};` : ''}
                ${imageHotspotTitleLineHeight?.Tablet && imageHotspotTitleLineHeightUnits?.Tablet
                    ? `line-height: ${imageHotspotTitleLineHeight.Tablet}${imageHotspotTitleLineHeightUnits.Tablet};` : ''}
                ${titleMarginTablet ? `margin: ${titleMarginTablet};` : ''}
            }

            .${blockID} .fb-hotspot-popover-description {
                ${imageHotspotDescFontSize?.Tablet && imageHotspotDescFontSizeUnits?.Tablet
                    ? `font-size: ${imageHotspotDescFontSize.Tablet}${imageHotspotDescFontSizeUnits.Tablet};` : ''}
                ${imageHotspotDescLetterSpacing?.Tablet && imageHotspotDescLetterSpacingUnits?.Tablet
                    ? `letter-spacing: ${imageHotspotDescLetterSpacing.Tablet}${imageHotspotDescLetterSpacingUnits.Tablet};` : ''}
                ${imageHotspotDescLineHeight?.Tablet && imageHotspotDescLineHeightUnits?.Tablet
                    ? `line-height: ${imageHotspotDescLineHeight.Tablet}${imageHotspotDescLineHeightUnits.Tablet};` : ''}
                ${descMarginTablet ? `margin: ${descMarginTablet};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {

            .${blockID} {
                ${blockPaddingMobile      ? `padding: ${blockPaddingMobile};` : ''}
                ${blockMarginMobile       ? `margin: ${blockMarginMobile};` : ''}
                ${blockBorderMobile       ? `border-width: ${blockBorderMobile};`  : ''}
                ${blockBorderRadiusMobile ? `border-radius: ${blockBorderRadiusMobile};` : ''}
            }

            .${blockID} .fb-hotspot-base-image {
                ${imageHotspotImageHeight?.Mobile && imageHotspotImageHeightUnits?.Mobile
                    ? `height: ${imageHotspotImageHeight.Mobile}${imageHotspotImageHeightUnits.Mobile};` : ''}
                ${imageBorderWidthMobile ? `border-width: ${imageBorderWidthMobile};` : ''}
                ${imageBorderRadiusMobile ? `border-radius: ${imageBorderRadiusMobile};` : ''}
            }

            .${blockID} .fb-hotspot-trigger {
                width: ${markerSizeMobile};
                height: ${markerSizeMobile};
                ${markerBorderWidthMobile  ? `border-width: ${markerBorderWidthMobile};`  : ''}
                ${markerBorderRadiusMobile !== markerBorderRadiusDesktop ? `border-radius: ${markerBorderRadiusMobile};` : ''}
            }

            .${blockID} .fb-hotspot-popover {
                ${popoverWidthMobile  ? `width: ${popoverWidthMobile};` : ''}
                ${popoverPaddingMobile ? `padding: ${popoverPaddingMobile};` : ''}
                ${popoverBorderRadiusMobile ? `border-radius: ${popoverBorderRadiusMobile};` : ''}
                ${popoverBorderWidthMobile ? `border-width: ${popoverBorderWidthMobile};` : ''}
            }

            .${blockID} .fb-hotspot-popover-image {
                box-sizing: border-box;
                ${popoverImageBorderWidthMobile ? `border-width: ${popoverImageBorderWidthMobile};` : ''}
                ${popoverImageBorderRadiusMobile ? `border-radius: ${popoverImageBorderRadiusMobile};` : ''}
            }

            .${blockID} .fb-hotspot-icon {
                ${imageHotspotIconSize?.Mobile && imageHotspotIconSizeUnits?.Mobile
                    ? `width: ${imageHotspotIconSize.Mobile}${imageHotspotIconSizeUnits.Mobile};
                       height: ${imageHotspotIconSize.Mobile}${imageHotspotIconSizeUnits.Mobile};` : ''}
            }

            .${blockID} .fb-hotspot-popover-title {
                ${imageHotspotTitleFontSize?.Mobile && imageHotspotTitleFontSizeUnits?.Mobile
                    ? `font-size: ${imageHotspotTitleFontSize.Mobile}${imageHotspotTitleFontSizeUnits.Mobile};` : ''}
                ${imageHotspotTitleLetterSpacing?.Mobile && imageHotspotTitleLetterSpacingUnits?.Mobile
                    ? `letter-spacing: ${imageHotspotTitleLetterSpacing.Mobile}${imageHotspotTitleLetterSpacingUnits.Mobile};` : ''}
                ${imageHotspotTitleLineHeight?.Mobile && imageHotspotTitleLineHeightUnits?.Mobile
                    ? `line-height: ${imageHotspotTitleLineHeight.Mobile}${imageHotspotTitleLineHeightUnits.Mobile};` : ''}
                ${titleMarginMobile ? `margin: ${titleMarginMobile};` : ''}
            }

            .${blockID} .fb-hotspot-popover-description {
                ${imageHotspotDescFontSize?.Mobile && imageHotspotDescFontSizeUnits?.Mobile
                    ? `font-size: ${imageHotspotDescFontSize.Mobile}${imageHotspotDescFontSizeUnits.Mobile};` : ''}
                ${imageHotspotDescLetterSpacing?.Mobile && imageHotspotDescLetterSpacingUnits?.Mobile
                    ? `letter-spacing: ${imageHotspotDescLetterSpacing.Mobile}${imageHotspotDescLetterSpacingUnits.Mobile};` : ''}
                ${imageHotspotDescLineHeight?.Mobile && imageHotspotDescLineHeightUnits?.Mobile
                    ? `line-height: ${imageHotspotDescLineHeight.Mobile}${imageHotspotDescLineHeightUnits.Mobile};` : ''}
                ${descMarginMobile ? `margin: ${descMarginMobile};` : ''}
            }
        }
    `;

    const customCssOutput = getCustomCss(imageHotspotCustomCSS, `.${blockID}`);
    return `${fbHotspotStyle} ${customCssOutput}`.replace(/\s+/g, ' ').trim();
};

export default generateImageHotspotStyle;
