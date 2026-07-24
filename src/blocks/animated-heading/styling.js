/**
 * Animated Heading Block - Style Generation
 * Returns Dynamic Generated CSS
 */
import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateAnimatedHeadingStyle = (attributes) => {
    const {
        blockID,
        blockStyle,
        animationType,
        animatedHeadingAlignment,
        animatedHeadingMainTag,
        animatedHeadingGap,
        animatedHeadingGapUnits,
        animatedHeadingPrefix,
        animatedHeadingItems,
        animatedHeadingCursorSwitch,
        animatedHeadingCursor,
        animatedHeadingSuffix,

        animatedHeadingProgressBarWidth,
        animatedHeadingProgressBarWidthUnits,
        animatedHeadingProgressBarHeight,
        animatedHeadingProgressBarHeightUnits,

        animatedHeadingProgressBarBorderRadiusUnits,
        animatedHeadingProgressBarDesktopBorderRadius,
        animatedHeadingProgressBarTabletBorderRadius,
        animatedHeadingProgressBarMobileBorderRadius,
        animatedHeadingProgressBarBorderRadiusLink,

        animatedHeadingProgressBgColorType,
        animatedHeadingProgressBgHoverColorType,
        animatedHeadingProgressBgColorTypeSwitcher,
        animatedHeadingProgressBgColor,
        animatedHeadingProgressBgHoverColor,
        animatedHeadingProgressBgGradientColor,
        animatedHeadingProgressBgHoverGradientColor,
        animatedHeadingProgressBgCustomGradientColorSwitcher,
        animatedHeadingProgressBgCustomGradientColor,
        animatedHeadingProgressBgHoverCustomGradientColorSwitcher,
        animatedHeadingProgressBgHoverCustomGradientColor,

        animatedHeadingProgressBgFillColorType,
        animatedHeadingProgressBgFillHoverColorType,
        animatedHeadingProgressBgFillColorTypeSwitcher,
        animatedHeadingProgressBgFillColor,
        animatedHeadingProgressBgFillHoverColor,
        animatedHeadingProgressBgFillGradientColor,
        animatedHeadingProgressBgFillHoverGradientColor,
        animatedHeadingProgressBgFillCustomGradientColorSwitcher,
        animatedHeadingProgressBgFillCustomGradientColor,
        animatedHeadingProgressBgFillHoverCustomGradientColorSwitcher,
        animatedHeadingProgressBgFillHoverCustomGradientColor,

        // Normal Text Style
        animatedHeadingNormalTextGlobalTypographyData,
        animatedHeadingNormalTextGlobalTypoSwitcher,
        animatedHeadingNormalTextGlobalTypoType,
        animatedHeadingNormalTextGlobalTypoOption,
        animatedHeadingNormalTextFontFamily,
        animatedHeadingNormalTextFontSize,
        animatedHeadingNormalTextFontSizeUnits,
        animatedHeadingNormalTextFontWeight,
        animatedHeadingNormalTextFontStyle,
        animatedHeadingNormalTextTransform,
        animatedHeadingNormalTextDecoration,
        animatedHeadingNormalTextLetterSpacing,
        animatedHeadingNormalTextLetterSpacingUnits,
        animatedHeadingNormalTextLineHeight,
        animatedHeadingNormalTextLineHeightUnits,

        animatedHeadingNormalTextColorSwitcher,
        animatedHeadingNormalTextColor,
        animatedHeadingNormalTextHoverColor,
        animatedHeadingNormalTextBgColorSwitcher,
        animatedHeadingNormalTextBgColor,
        animatedHeadingNormalTextBgColorHover,

        // Animated Text Style
        animatedHeadingAnimationTextGlobalTypographyData,
        animatedHeadingAnimationTextGlobalTypoSwitcher,
        animatedHeadingAnimationTextGlobalTypoType,
        animatedHeadingAnimationTextGlobalTypoOption,
        animatedHeadingAnimationTextFontFamily,
        animatedHeadingAnimationTextFontSize,
        animatedHeadingAnimationTextFontSizeUnits,
        animatedHeadingAnimationTextFontWeight,
        animatedHeadingAnimationTextFontStyle,
        animatedHeadingAnimationTextTransform,
        animatedHeadingAnimationTextDecoration,
        animatedHeadingAnimationTextLetterSpacing,
        animatedHeadingAnimationTextLetterSpacingUnits,
        animatedHeadingAnimationTextLineHeight,
        animatedHeadingAnimationTextLineHeightUnits,

        animatedHeadingAnimationTextColorSwitcher,
        animatedHeadingAnimationTextColor,
        animatedHeadingAnimationTextHoverColor,
        animatedHeadingAnimationTextBgColorSwitcher,
        animatedHeadingAnimationTextBgColor,
        animatedHeadingAnimationTextBgColorHover,

        animatedHeadingAnimatedTextPaddingUnits,
        animatedHeadingAnimatedTextDesktopPadding,
        animatedHeadingAnimatedTextTabletPadding,
        animatedHeadingAnimatedTextMobilePadding,
        animatedHeadingAnimatedTextPaddingLink,

        animatedHeadingAnimatedTextMarginUnits,
        animatedHeadingAnimatedTextDesktopMargin,
        animatedHeadingAnimatedTextTabletMargin,
        animatedHeadingAnimatedTextMobileMargin,
        animatedHeadingAnimatedTextMarginLink,

        animatedHeadingAnimatedTextBorder,
        animatedHeadingAnimatedTextBorderColorSwitcher,
        animatedHeadingAnimatedTextBorderColor,
        animatedHeadingAnimatedTextBorderHoverColor,
        animatedHeadingAnimatedTextBorderUnits,
        animatedHeadingAnimatedTextDesktopBorder,
        animatedHeadingAnimatedTextTabletBorder,
        animatedHeadingAnimatedTextMobileBorder,
        animatedHeadingAnimatedTextBorderLink,
        animatedHeadingAnimatedTextBorderRadiusUnits,
        animatedHeadingAnimatedTextDesktopBorderRadius,
        animatedHeadingAnimatedTextTabletBorderRadius,
        animatedHeadingAnimatedTextMobileBorderRadius,
        animatedHeadingAnimatedTextBorderRadiusLink,

        animatedHeadingRevealDirection,

        // Global Z-Index Attributes
        animatedHeadingGlobalZIndex,

        // Global Class & ID Attributes
        animatedHeadingGlobalWraperID,
        animatedHeadingGlobalWraperClass,
        animatedHeadingCustomCSS,

        // Global Padding Attributes
        animatedHeadingGlobalPaddingUnits,
        animatedHeadingGlobalDesktopPadding,
        animatedHeadingGlobalTabletPadding,
        animatedHeadingGlobalMobilePadding,
        animatedHeadingGlobalPaddingLink,

        // Global Margin Attributes
        animatedHeadingGlobalMarginUnits,
        animatedHeadingGlobalDesktopMargin,
        animatedHeadingGlobalTabletMargin,
        animatedHeadingGlobalMobileMargin,
        animatedHeadingGlobalMarginLink,

        // Global Background Color Attributes
        animatedHeadingGlobalBgColorSwitcher,
        animatedHeadingGlobalBgColor,
        animatedHeadingGlobalBgColorHover,

        // Global Border Attributes
        animatedHeadingGlobalBorder,
        animatedHeadingGlobalBorderColorSwitcher,
        animatedHeadingGlobalBorderColor,
        animatedHeadingGlobalBorderHoverColor,
        animatedHeadingGlobalBorderUnits,
        animatedHeadingGlobalDesktopBorder,
        animatedHeadingGlobalTabletBorder,
        animatedHeadingGlobalMobileBorder,
        animatedHeadingGlobalBorderLink,
        animatedHeadingGlobalBorderRadiusUnits,
        animatedHeadingGlobalDesktopBorderRadius,
        animatedHeadingGlobalTabletBorderRadius,
        animatedHeadingGlobalMobileBorderRadius,
        animatedHeadingGlobalBorderRadiusLink,

    } = attributes;

    //progress bar border radius
    const animatedHeadingProgressBarDesktopBorderRadiusWidth = `${animatedHeadingProgressBarDesktopBorderRadius.top}${animatedHeadingProgressBarBorderRadiusUnits.Desktop} ${animatedHeadingProgressBarDesktopBorderRadius.right}${animatedHeadingProgressBarBorderRadiusUnits.Desktop} ${animatedHeadingProgressBarDesktopBorderRadius.bottom}${animatedHeadingProgressBarBorderRadiusUnits.Desktop} ${animatedHeadingProgressBarDesktopBorderRadius.left}${animatedHeadingProgressBarBorderRadiusUnits.Desktop}`;
    const animatedHeadingProgressBarTabletBorderRadiusWidth = `${animatedHeadingProgressBarTabletBorderRadius.top}${animatedHeadingProgressBarBorderRadiusUnits.Tablet} ${animatedHeadingProgressBarTabletBorderRadius.right}${animatedHeadingProgressBarBorderRadiusUnits.Tablet} ${animatedHeadingProgressBarTabletBorderRadius.bottom}${animatedHeadingProgressBarBorderRadiusUnits.Tablet} ${animatedHeadingProgressBarTabletBorderRadius.left}${animatedHeadingProgressBarBorderRadiusUnits.Tablet}`;
    const animatedHeadingProgressBarMobileBorderRadiusWidth = `${animatedHeadingProgressBarMobileBorderRadius.top}${animatedHeadingProgressBarBorderRadiusUnits.Mobile} ${animatedHeadingProgressBarMobileBorderRadius.right}${animatedHeadingProgressBarBorderRadiusUnits.Mobile} ${animatedHeadingProgressBarMobileBorderRadius.bottom}${animatedHeadingProgressBarBorderRadiusUnits.Mobile} ${animatedHeadingProgressBarMobileBorderRadius.left}${animatedHeadingProgressBarBorderRadiusUnits.Mobile}`;

    /** Default border for AnimatedText */
    const animatedHeadingAnimatedTextDesktopBorderWidth = `${animatedHeadingAnimatedTextDesktopBorder.top}${animatedHeadingAnimatedTextBorderUnits.Desktop} ${animatedHeadingAnimatedTextDesktopBorder.right}${animatedHeadingAnimatedTextBorderUnits.Desktop} ${animatedHeadingAnimatedTextDesktopBorder.bottom}${animatedHeadingAnimatedTextBorderUnits.Desktop} ${animatedHeadingAnimatedTextDesktopBorder.left}${animatedHeadingAnimatedTextBorderUnits.Desktop}`;
    const animatedHeadingAnimatedTextTabletBorderWidth = `${animatedHeadingAnimatedTextTabletBorder.top}${animatedHeadingAnimatedTextBorderUnits.Tablet} ${animatedHeadingAnimatedTextTabletBorder.right}${animatedHeadingAnimatedTextBorderUnits.Tablet} ${animatedHeadingAnimatedTextTabletBorder.bottom}${animatedHeadingAnimatedTextBorderUnits.Tablet} ${animatedHeadingAnimatedTextTabletBorder.left}${animatedHeadingAnimatedTextBorderUnits.Tablet}`;
    const animatedHeadingAnimatedTextMobileBorderWidth = `${animatedHeadingAnimatedTextMobileBorder.top}${animatedHeadingAnimatedTextBorderUnits.Mobile} ${animatedHeadingAnimatedTextMobileBorder.right}${animatedHeadingAnimatedTextBorderUnits.Mobile} ${animatedHeadingAnimatedTextMobileBorder.bottom}${animatedHeadingAnimatedTextBorderUnits.Mobile} ${animatedHeadingAnimatedTextMobileBorder.left}${animatedHeadingAnimatedTextBorderUnits.Mobile}`;

    /** Default border radius for AnimatedText */
    const animatedHeadingAnimatedTextDesktopBorderRadiusWidth = `${animatedHeadingAnimatedTextDesktopBorderRadius.top}${animatedHeadingAnimatedTextBorderRadiusUnits.Desktop} ${animatedHeadingAnimatedTextDesktopBorderRadius.right}${animatedHeadingAnimatedTextBorderRadiusUnits.Desktop} ${animatedHeadingAnimatedTextDesktopBorderRadius.bottom}${animatedHeadingAnimatedTextBorderRadiusUnits.Desktop} ${animatedHeadingAnimatedTextDesktopBorderRadius.left}${animatedHeadingAnimatedTextBorderRadiusUnits.Desktop}`;
    const animatedHeadingAnimatedTextTabletBorderRadiusWidth = `${animatedHeadingAnimatedTextTabletBorderRadius.top}${animatedHeadingAnimatedTextBorderRadiusUnits.Tablet} ${animatedHeadingAnimatedTextTabletBorderRadius.right}${animatedHeadingAnimatedTextBorderRadiusUnits.Tablet} ${animatedHeadingAnimatedTextTabletBorderRadius.bottom}${animatedHeadingAnimatedTextBorderRadiusUnits.Tablet} ${animatedHeadingAnimatedTextTabletBorderRadius.left}${animatedHeadingAnimatedTextBorderRadiusUnits.Tablet}`;
    const animatedHeadingAnimatedTextMobileBorderRadiusWidth = `${animatedHeadingAnimatedTextMobileBorderRadius.top}${animatedHeadingAnimatedTextBorderRadiusUnits.Mobile} ${animatedHeadingAnimatedTextMobileBorderRadius.right}${animatedHeadingAnimatedTextBorderRadiusUnits.Mobile} ${animatedHeadingAnimatedTextMobileBorderRadius.bottom}${animatedHeadingAnimatedTextBorderRadiusUnits.Mobile} ${animatedHeadingAnimatedTextMobileBorderRadius.left}${animatedHeadingAnimatedTextBorderRadiusUnits.Mobile}`;

    /** padding for Animated Text */
    const animatedHeadingAnimatedTextDesktopPaddingWidth = `${animatedHeadingAnimatedTextDesktopPadding.top}${animatedHeadingAnimatedTextPaddingUnits.Desktop} ${animatedHeadingAnimatedTextDesktopPadding.right}${animatedHeadingAnimatedTextPaddingUnits.Desktop} ${animatedHeadingAnimatedTextDesktopPadding.bottom}${animatedHeadingAnimatedTextPaddingUnits.Desktop} ${animatedHeadingAnimatedTextDesktopPadding.left}${animatedHeadingAnimatedTextPaddingUnits.Desktop}`;
    const animatedHeadingAnimatedTextTabletPaddingWidth = `${animatedHeadingAnimatedTextTabletPadding.top}${animatedHeadingAnimatedTextPaddingUnits.Tablet} ${animatedHeadingAnimatedTextTabletPadding.right}${animatedHeadingAnimatedTextPaddingUnits.Tablet} ${animatedHeadingAnimatedTextTabletPadding.bottom}${animatedHeadingAnimatedTextPaddingUnits.Tablet} ${animatedHeadingAnimatedTextTabletPadding.left}${animatedHeadingAnimatedTextPaddingUnits.Tablet}`;
    const animatedHeadingAnimatedTextMobilePaddingWidth = `${animatedHeadingAnimatedTextMobilePadding.top}${animatedHeadingAnimatedTextPaddingUnits.Mobile} ${animatedHeadingAnimatedTextMobilePadding.right}${animatedHeadingAnimatedTextPaddingUnits.Mobile} ${animatedHeadingAnimatedTextMobilePadding.bottom}${animatedHeadingAnimatedTextPaddingUnits.Mobile} ${animatedHeadingAnimatedTextMobilePadding.left}${animatedHeadingAnimatedTextPaddingUnits.Mobile}`;

    /** margin for Animated Text */
    const animatedHeadingAnimatedTextDesktopMarginWidth = `${animatedHeadingAnimatedTextDesktopMargin.top}${animatedHeadingAnimatedTextMarginUnits.Desktop} ${animatedHeadingAnimatedTextDesktopMargin.right}${animatedHeadingAnimatedTextMarginUnits.Desktop} ${animatedHeadingAnimatedTextDesktopMargin.bottom}${animatedHeadingAnimatedTextMarginUnits.Desktop} ${animatedHeadingAnimatedTextDesktopMargin.left}${animatedHeadingAnimatedTextMarginUnits.Desktop}`;
    const animatedHeadingAnimatedTextTabletMarginWidth = `${animatedHeadingAnimatedTextTabletMargin.top}${animatedHeadingAnimatedTextMarginUnits.Tablet} ${animatedHeadingAnimatedTextTabletMargin.right}${animatedHeadingAnimatedTextMarginUnits.Tablet} ${animatedHeadingAnimatedTextTabletMargin.bottom}${animatedHeadingAnimatedTextMarginUnits.Tablet} ${animatedHeadingAnimatedTextTabletMargin.left}${animatedHeadingAnimatedTextMarginUnits.Tablet}`;
    const animatedHeadingAnimatedTextMobileMarginWidth = `${animatedHeadingAnimatedTextMobileMargin.top}${animatedHeadingAnimatedTextMarginUnits.Mobile} ${animatedHeadingAnimatedTextMobileMargin.right}${animatedHeadingAnimatedTextMarginUnits.Mobile} ${animatedHeadingAnimatedTextMobileMargin.bottom}${animatedHeadingAnimatedTextMarginUnits.Mobile} ${animatedHeadingAnimatedTextMobileMargin.left}${animatedHeadingAnimatedTextMarginUnits.Mobile}`;

    /** Default padding for Typing Text */
    const animatedHeadingGlobalDesktopPaddingWidth = `${animatedHeadingGlobalDesktopPadding.top}${animatedHeadingGlobalPaddingUnits.Desktop} ${animatedHeadingGlobalDesktopPadding.right}${animatedHeadingGlobalPaddingUnits.Desktop} ${animatedHeadingGlobalDesktopPadding.bottom}${animatedHeadingGlobalPaddingUnits.Desktop} ${animatedHeadingGlobalDesktopPadding.left}${animatedHeadingGlobalPaddingUnits.Desktop}`;
    const animatedHeadingGlobalTabletPaddingWidth = `${animatedHeadingGlobalTabletPadding.top}${animatedHeadingGlobalPaddingUnits.Tablet} ${animatedHeadingGlobalTabletPadding.right}${animatedHeadingGlobalPaddingUnits.Tablet} ${animatedHeadingGlobalTabletPadding.bottom}${animatedHeadingGlobalPaddingUnits.Tablet} ${animatedHeadingGlobalTabletPadding.left}${animatedHeadingGlobalPaddingUnits.Tablet}`;
    const animatedHeadingGlobalMobilePaddingWidth = `${animatedHeadingGlobalMobilePadding.top}${animatedHeadingGlobalPaddingUnits.Mobile} ${animatedHeadingGlobalMobilePadding.right}${animatedHeadingGlobalPaddingUnits.Mobile} ${animatedHeadingGlobalMobilePadding.bottom}${animatedHeadingGlobalPaddingUnits.Mobile} ${animatedHeadingGlobalMobilePadding.left}${animatedHeadingGlobalPaddingUnits.Mobile}`;

    /** Default margin for Global */
    const animatedHeadingGlobalDesktopMarginWidth = `${animatedHeadingGlobalDesktopMargin.top}${animatedHeadingGlobalMarginUnits.Desktop} ${animatedHeadingGlobalDesktopMargin.right}${animatedHeadingGlobalMarginUnits.Desktop} ${animatedHeadingGlobalDesktopMargin.bottom}${animatedHeadingGlobalMarginUnits.Desktop} ${animatedHeadingGlobalDesktopMargin.left}${animatedHeadingGlobalMarginUnits.Desktop}`;
    const animatedHeadingGlobalTabletMarginWidth = `${animatedHeadingGlobalTabletMargin.top}${animatedHeadingGlobalMarginUnits.Tablet} ${animatedHeadingGlobalTabletMargin.right}${animatedHeadingGlobalMarginUnits.Tablet} ${animatedHeadingGlobalTabletMargin.bottom}${animatedHeadingGlobalMarginUnits.Tablet} ${animatedHeadingGlobalTabletMargin.left}${animatedHeadingGlobalMarginUnits.Tablet}`;
    const animatedHeadingGlobalMobileMarginWidth = `${animatedHeadingGlobalMobileMargin.top}${animatedHeadingGlobalMarginUnits.Mobile} ${animatedHeadingGlobalMobileMargin.right}${animatedHeadingGlobalMarginUnits.Mobile} ${animatedHeadingGlobalMobileMargin.bottom}${animatedHeadingGlobalMarginUnits.Mobile} ${animatedHeadingGlobalMobileMargin.left}${animatedHeadingGlobalMarginUnits.Mobile}`;

    /** Default border for Global */
    const animatedHeadingGlobalDesktopBorderWidth = `${animatedHeadingGlobalDesktopBorder.top}${animatedHeadingGlobalBorderUnits.Desktop} ${animatedHeadingGlobalDesktopBorder.right}${animatedHeadingGlobalBorderUnits.Desktop} ${animatedHeadingGlobalDesktopBorder.bottom}${animatedHeadingGlobalBorderUnits.Desktop} ${animatedHeadingGlobalDesktopBorder.left}${animatedHeadingGlobalBorderUnits.Desktop}`;
    const animatedHeadingGlobalTabletBorderWidth = `${animatedHeadingGlobalTabletBorder.top}${animatedHeadingGlobalBorderUnits.Tablet} ${animatedHeadingGlobalTabletBorder.right}${animatedHeadingGlobalBorderUnits.Tablet} ${animatedHeadingGlobalTabletBorder.bottom}${animatedHeadingGlobalBorderUnits.Tablet} ${animatedHeadingGlobalTabletBorder.left}${animatedHeadingGlobalBorderUnits.Tablet}`;
    const animatedHeadingGlobalMobileBorderWidth = `${animatedHeadingGlobalMobileBorder.top}${animatedHeadingGlobalBorderUnits.Mobile} ${animatedHeadingGlobalMobileBorder.right}${animatedHeadingGlobalBorderUnits.Mobile} ${animatedHeadingGlobalMobileBorder.bottom}${animatedHeadingGlobalBorderUnits.Mobile} ${animatedHeadingGlobalMobileBorder.left}${animatedHeadingGlobalBorderUnits.Mobile}`;

    /** Default border radius for Global */
    const animatedHeadingGlobalDesktopBorderRadiusWidth = `${animatedHeadingGlobalDesktopBorderRadius.top}${animatedHeadingGlobalBorderRadiusUnits.Desktop} ${animatedHeadingGlobalDesktopBorderRadius.right}${animatedHeadingGlobalBorderRadiusUnits.Desktop} ${animatedHeadingGlobalDesktopBorderRadius.bottom}${animatedHeadingGlobalBorderRadiusUnits.Desktop} ${animatedHeadingGlobalDesktopBorderRadius.left}${animatedHeadingGlobalBorderRadiusUnits.Desktop}`;
    const animatedHeadingGlobalTabletBorderRadiusWidth = `${animatedHeadingGlobalTabletBorderRadius.top}${animatedHeadingGlobalBorderRadiusUnits.Tablet} ${animatedHeadingGlobalTabletBorderRadius.right}${animatedHeadingGlobalBorderRadiusUnits.Tablet} ${animatedHeadingGlobalTabletBorderRadius.bottom}${animatedHeadingGlobalBorderRadiusUnits.Tablet} ${animatedHeadingGlobalTabletBorderRadius.left}${animatedHeadingGlobalBorderRadiusUnits.Tablet}`;
    const animatedHeadingGlobalMobileBorderRadiusWidth = `${animatedHeadingGlobalMobileBorderRadius.top}${animatedHeadingGlobalBorderRadiusUnits.Mobile} ${animatedHeadingGlobalMobileBorderRadius.right}${animatedHeadingGlobalBorderRadiusUnits.Mobile} ${animatedHeadingGlobalMobileBorderRadius.bottom}${animatedHeadingGlobalBorderRadiusUnits.Mobile} ${animatedHeadingGlobalMobileBorderRadius.left}${animatedHeadingGlobalBorderRadiusUnits.Mobile}`;

    function getRevealTransform(direction) {
        switch (direction) {
            case 'up': return 'translateY(60px)';
            case 'down': return 'translateY(-60px)';
            case 'left': return 'translateX(60px)';
            case 'right': return 'translateX(-60px)';
            case 'none': return 'none';
            default: return 'translateY(60px)';
        }
    }

    function getHideTransform(direction) {
        switch (direction) {
            case 'up': return 'translateY(-60px) scale(0.3) rotateX(20deg)';
            case 'down': return 'translateY(60px) scale(0.3) rotateX(20deg)';
            case 'left': return 'translateX(-60px) scale(0.3) rotateX(20deg)';
            case 'right': return 'translateX(60px) scale(0.3) rotateX(20deg)';
            case 'none': return 'scale(0.3) rotateX(20deg)';
            default: return 'translateY(-40px) scale(0.3) rotateX(20deg)';
        }
    }

    let initialTransform = 'none';
    let hideTransform = 'translateY(-40px) scale(0.3) rotateX(20deg)';
    if (animationType === 'reveal') {
        const revealTransform = getRevealTransform(animatedHeadingRevealDirection);
        initialTransform = revealTransform === 'none' ? 'scale(0.5) rotateX(30deg)' : `${revealTransform} scale(0.5) rotateX(30deg)`;
        hideTransform = getHideTransform(animatedHeadingRevealDirection);
    }

    const animatedHeadingBlockStyle = `
    
        .${blockID}.fb-animated-heading-main-wrapper {
            position: relative;
            ${animatedHeadingGlobalZIndex.Desktop ? `z-index: ${animatedHeadingGlobalZIndex.Desktop};` : ''}
        }

        .${blockID} .fb-animated-heading-wrapper {
            ${animatedHeadingGlobalBgColor ? `background-color: ${animatedHeadingGlobalBgColor};` : ''}
            ${animatedHeadingGlobalDesktopPaddingWidth && animatedHeadingGlobalDesktopPadding?.top ? `padding: ${animatedHeadingGlobalDesktopPaddingWidth};` : ''}
            ${animatedHeadingGlobalDesktopMarginWidth && animatedHeadingGlobalDesktopMargin?.top ? `margin: ${animatedHeadingGlobalDesktopMarginWidth};` : ''}
            ${animatedHeadingGlobalBorder ? `border: ${animatedHeadingGlobalBorder};` : ''}
            ${animatedHeadingGlobalDesktopBorderWidth && animatedHeadingGlobalDesktopBorder?.top ? `border-width: ${animatedHeadingGlobalDesktopBorderWidth};` : ''}
            ${animatedHeadingGlobalDesktopBorderRadiusWidth && animatedHeadingGlobalDesktopBorderRadius?.top ? `border-radius: ${animatedHeadingGlobalDesktopBorderRadiusWidth};` : ''}
            ${animatedHeadingGlobalBorderColor ? `border-color: ${animatedHeadingGlobalBorderColor};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID} .fb-animated-heading-wrapper:hover {
            ${animatedHeadingGlobalBgColorHover ? `background-color: ${animatedHeadingGlobalBgColorHover};` : ''}
            ${animatedHeadingGlobalBorderHoverColor ? `border-color: ${animatedHeadingGlobalBorderHoverColor};` : ''}
        }

        .${blockID} .fb-animated-heading-wrapper.animated-type-progress,
        .${blockID} .fb-animated-heading-wrapper.animated-type-flip,
        .${blockID} .fb-animated-heading-wrapper.animated-type-zoom,
        .${blockID} .fb-animated-heading-wrapper.animated-type-typing,
        .${blockID} .fb-animated-heading-wrapper.animated-type-highlight,
        .${blockID} .fb-animated-heading-wrapper.animated-type-reveal {
            display: flex;
            align-items: center;
            ${animatedHeadingGap.Desktop && animatedHeadingGapUnits.Desktop ? `gap: ${animatedHeadingGap.Desktop}${animatedHeadingGapUnits.Desktop};` : ''}
            ${animatedHeadingAlignment.Desktop ? `justify-content: ${animatedHeadingAlignment.Desktop};` : ''}
        }
        
        .${blockID} .fb-animated-heading-wrapper.animated-type-progress {
            align-items: flex-start;
        }

        ${animationType === 'reveal' ? `
            .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-char {
                transform: ${initialTransform};
            }
            .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-char.fb-animated-heading-char-appear {
                transform: translateY(0) scale(1) rotateX(0);
            }
            .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-char.fb-animated-heading-char-hide {
                transform: ${hideTransform};
            }
        ` : ''}

        .${blockID} .fb-animated-heading-wrapper.animated-type-swirl {
            display: block;
            ${animatedHeadingAlignment.Desktop ? `text-align: ${animatedHeadingAlignment.Desktop};` : ''}
        }

        .${blockID} .fb-animated-heading-wrapper .fb-animated-headings:empty {
            display: none;
        }

        .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-prefix,
        .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-suffix {
            ${animatedHeadingNormalTextColor ? `color: ${animatedHeadingNormalTextColor};` : ''}
            ${animatedHeadingNormalTextBgColor ? `background-color: ${animatedHeadingNormalTextBgColor};` : ''}

            ${animatedHeadingNormalTextGlobalTypoSwitcher.fontFamily === true && animatedHeadingNormalTextGlobalTypographyData.fontFamily ? `font-family: ${animatedHeadingNormalTextGlobalTypographyData.fontFamily};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.fontSize === true && animatedHeadingNormalTextGlobalTypographyData.fontSize ? `font-size: ${animatedHeadingNormalTextGlobalTypographyData.fontSize};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.fontWeight === true && animatedHeadingNormalTextGlobalTypographyData.fontWeight ? `font-weight: ${animatedHeadingNormalTextGlobalTypographyData.fontWeight};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.fontStyle === true && animatedHeadingNormalTextGlobalTypographyData.fontStyle ? `font-style: ${animatedHeadingNormalTextGlobalTypographyData.fontStyle};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.textTransform === true && animatedHeadingNormalTextGlobalTypographyData.textTransform ? `text-transform: ${animatedHeadingNormalTextGlobalTypographyData.textTransform};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.textDecoration === true && animatedHeadingNormalTextGlobalTypographyData.textDecoration ? `text-decoration: ${animatedHeadingNormalTextGlobalTypographyData.textDecoration};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.letterSpacing === true && animatedHeadingNormalTextGlobalTypographyData.letterSpacing ? `letter-spacing: ${animatedHeadingNormalTextGlobalTypographyData.letterSpacing};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.lineHeight === true && animatedHeadingNormalTextGlobalTypographyData.lineHeight ? `line-height: ${animatedHeadingNormalTextGlobalTypographyData.lineHeight};` : ''}
                
            ${animatedHeadingNormalTextGlobalTypoSwitcher.fontFamily === false && animatedHeadingNormalTextFontFamily && animatedHeadingNormalTextFontFamily !== 'Default' ? `font-family: ${animatedHeadingNormalTextFontFamily};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.fontSize === false && animatedHeadingNormalTextFontSize.Desktop && animatedHeadingNormalTextFontSizeUnits.Desktop ? `font-size: ${animatedHeadingNormalTextFontSize.Desktop}${animatedHeadingNormalTextFontSizeUnits.Desktop};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.fontWeight === false && animatedHeadingNormalTextFontWeight ? `font-weight: ${animatedHeadingNormalTextFontWeight};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.fontStyle === false && animatedHeadingNormalTextFontStyle ? `font-style: ${animatedHeadingNormalTextFontStyle};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.textTransform === false && animatedHeadingNormalTextTransform ? `text-transform: ${animatedHeadingNormalTextTransform};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.textDecoration === false && animatedHeadingNormalTextDecoration ? `text-decoration: ${animatedHeadingNormalTextDecoration};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.letterSpacing === false && animatedHeadingNormalTextLetterSpacing.Desktop && animatedHeadingNormalTextLetterSpacingUnits.Desktop ? `letter-spacing: ${animatedHeadingNormalTextLetterSpacing.Desktop}${animatedHeadingNormalTextLetterSpacingUnits.Desktop};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.lineHeight === false && animatedHeadingNormalTextLineHeight.Desktop && animatedHeadingNormalTextLineHeightUnits.Desktop ? `line-height: ${animatedHeadingNormalTextLineHeight.Desktop}${animatedHeadingNormalTextLineHeightUnits.Desktop};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-prefix:hover,
        .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-suffix:hover {
            ${animatedHeadingNormalTextHoverColor ? `color: ${animatedHeadingNormalTextHoverColor};` : ''}
            ${animatedHeadingNormalTextBgColorHover ? `background-color: ${animatedHeadingNormalTextBgColorHover};` : ''}
        }

        .${blockID} .fb-animated-heading-wrapper .fb-animated-headings,
        .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-cursor,
        .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-reveal-wrapper,
        .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-swap-wrapper .fb-animated-heading-swap-word,
        .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-progress-wrapper .fb-animated-heading-progress-word,
        .${blockID} .fb-animated-heading-dynamic-wrapper .fb-animated-heading-dynamic-text {
            ${animatedHeadingAnimationTextColor ? `color: ${animatedHeadingAnimationTextColor};` : ''}
            ${animatedHeadingAnimationTextBgColor ? `background-color: ${animatedHeadingAnimationTextBgColor};` : ''} 
            ${animatedHeadingAnimatedTextDesktopPaddingWidth && animatedHeadingAnimatedTextDesktopPadding?.top ? `padding: ${animatedHeadingAnimatedTextDesktopPaddingWidth};` : ''}
            ${animatedHeadingAnimatedTextDesktopMarginWidth && animatedHeadingAnimatedTextDesktopMargin?.top ? `margin: ${animatedHeadingAnimatedTextDesktopMarginWidth};` : ''}
            ${animatedHeadingAnimatedTextBorder ? `border: ${animatedHeadingAnimatedTextBorder};` : ''}
            ${animatedHeadingAnimatedTextDesktopBorderWidth && animatedHeadingAnimatedTextDesktopBorder?.top ? `border-width: ${animatedHeadingAnimatedTextDesktopBorderWidth};` : ''}
            ${animatedHeadingAnimatedTextDesktopBorderRadiusWidth && animatedHeadingAnimatedTextDesktopBorderRadius?.top ? `border-radius: ${animatedHeadingAnimatedTextDesktopBorderRadiusWidth};` : ''}
            ${animatedHeadingAnimatedTextBorderColor ? `border-color: ${animatedHeadingAnimatedTextBorderColor};` : ''}
            
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontFamily === true && animatedHeadingAnimationTextGlobalTypographyData.fontFamily ? `font-family: ${animatedHeadingAnimationTextGlobalTypographyData.fontFamily};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontSize === true && animatedHeadingAnimationTextGlobalTypographyData.fontSize ? `font-size: ${animatedHeadingAnimationTextGlobalTypographyData.fontSize};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontWeight === true && animatedHeadingAnimationTextGlobalTypographyData.fontWeight ? `font-weight: ${animatedHeadingAnimationTextGlobalTypographyData.fontWeight};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontStyle === true && animatedHeadingAnimationTextGlobalTypographyData.fontStyle ? `font-style: ${animatedHeadingAnimationTextGlobalTypographyData.fontStyle};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.textTransform === true && animatedHeadingAnimationTextGlobalTypographyData.textTransform ? `text-transform: ${animatedHeadingAnimationTextGlobalTypographyData.textTransform};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.textDecoration === true && animatedHeadingAnimationTextGlobalTypographyData.textDecoration ? `text-decoration: ${animatedHeadingAnimationTextGlobalTypographyData.textDecoration};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.letterSpacing === true && animatedHeadingAnimationTextGlobalTypographyData.letterSpacing ? `letter-spacing: ${animatedHeadingAnimationTextGlobalTypographyData.letterSpacing};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.lineHeight === true && animatedHeadingAnimationTextGlobalTypographyData.lineHeight ? `line-height: ${animatedHeadingAnimationTextGlobalTypographyData.lineHeight};` : ''}
                
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontFamily === false && animatedHeadingAnimationTextFontFamily && animatedHeadingAnimationTextFontFamily !== 'Default' ? `font-family: ${animatedHeadingAnimationTextFontFamily};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontSize === false && animatedHeadingAnimationTextFontSize.Desktop && animatedHeadingAnimationTextFontSizeUnits.Desktop ? `font-size: ${animatedHeadingAnimationTextFontSize.Desktop}${animatedHeadingAnimationTextFontSizeUnits.Desktop};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontWeight === false && animatedHeadingAnimationTextFontWeight ? `font-weight: ${animatedHeadingAnimationTextFontWeight};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontStyle === false && animatedHeadingAnimationTextFontStyle ? `font-style: ${animatedHeadingAnimationTextFontStyle};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.textTransform === false && animatedHeadingAnimationTextTransform ? `text-transform: ${animatedHeadingAnimationTextTransform};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.textDecoration === false && animatedHeadingAnimationTextDecoration ? `text-decoration: ${animatedHeadingAnimationTextDecoration};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.letterSpacing === false && animatedHeadingAnimationTextLetterSpacing.Desktop && animatedHeadingAnimationTextLetterSpacingUnits.Desktop ? `letter-spacing: ${animatedHeadingAnimationTextLetterSpacing.Desktop}${animatedHeadingAnimationTextLetterSpacingUnits.Desktop};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.lineHeight === false && animatedHeadingAnimationTextLineHeight.Desktop && animatedHeadingAnimationTextLineHeightUnits.Desktop ? `line-height: ${animatedHeadingAnimationTextLineHeight.Desktop}${animatedHeadingAnimationTextLineHeightUnits.Desktop};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-animated-heading-wrapper .fb-animated-headings:hover,
        .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-cursor:hover,
        .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-reveal-wrapper:hover,
        .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-swap-wrapper .fb-animated-heading-swap-word:hover,
        .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-progress-wrapper .fb-animated-heading-progress-word:hover,
        .${blockID} .fb-animated-heading-dynamic-wrapper .fb-animated-heading-dynamic-text:hover {
            ${animatedHeadingAnimationTextHoverColor ? `color: ${animatedHeadingAnimationTextHoverColor};` : ''}
            ${animatedHeadingAnimationTextBgColorHover ? `background-color: ${animatedHeadingAnimationTextBgColorHover};` : ''}
            ${animatedHeadingAnimatedTextBorderHoverColor ? `border-color: ${animatedHeadingAnimatedTextBorderHoverColor};` : ''}
        }

        .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-progress-wrapper .fb-animated-heading-progress-track, 
        .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-progress-wrapper.fb-animated-heading-progress-fill {
            ${animatedHeadingProgressBarWidth.Desktop && animatedHeadingProgressBarWidthUnits.Desktop ? `width: ${animatedHeadingProgressBarWidth.Desktop}${animatedHeadingProgressBarWidthUnits.Desktop};` : ''}
            ${animatedHeadingProgressBarHeight.Desktop && animatedHeadingProgressBarHeightUnits.Desktop ? `height: ${animatedHeadingProgressBarHeight.Desktop}${animatedHeadingProgressBarHeightUnits.Desktop};` : ''}
            ${animatedHeadingProgressBarDesktopBorderRadiusWidth && animatedHeadingProgressBarDesktopBorderRadius?.top ? `border-radius: ${animatedHeadingProgressBarDesktopBorderRadiusWidth};` : ''}
        }

        .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-progress-wrapper .fb-animated-heading-progress-track {
            ${animatedHeadingProgressBgColorTypeSwitcher ? `
                ${animatedHeadingProgressBgColorType === 'gradient' ? `   	
                    ${animatedHeadingProgressBgCustomGradientColorSwitcher && animatedHeadingProgressBgCustomGradientColor ? `background: ${animatedHeadingProgressBgCustomGradientColor};` : `background: ${animatedHeadingProgressBgGradientColor};`}
                `: `
                    ${animatedHeadingProgressBgColor ? `background: ${animatedHeadingProgressBgColor};` : ''}
                `}
            ` : ''} 
        }

        .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-progress-wrapper:hover .fb-animated-heading-progress-track {
            ${animatedHeadingProgressBgColorTypeSwitcher ? `
                ${animatedHeadingProgressBgHoverColorType === 'gradient' ? `   	
                    ${animatedHeadingProgressBgHoverCustomGradientColorSwitcher && animatedHeadingProgressBgHoverCustomGradientColor ? `background: ${animatedHeadingProgressBgHoverCustomGradientColor};` : `background: ${animatedHeadingProgressBgHoverGradientColor};`}
                `: `
                    ${animatedHeadingProgressBgHoverColor ? `background: ${animatedHeadingProgressBgHoverColor};` : ''}
                `}
            ` : ''} 
        }
        
        .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-progress-wrapper .fb-animated-heading-progress-fill {
            ${animatedHeadingProgressBgFillColorTypeSwitcher ? `
                ${animatedHeadingProgressBgFillColorType === 'gradient' ? `   	
                    ${animatedHeadingProgressBgFillCustomGradientColorSwitcher && animatedHeadingProgressBgFillCustomGradientColor ? `background: ${animatedHeadingProgressBgFillCustomGradientColor};` : `background: ${animatedHeadingProgressBgFillGradientColor};`}
                `: `
                    ${animatedHeadingProgressBgFillColor ? `background: ${animatedHeadingProgressBgFillColor};` : ''}
                `}
            ` : ''} 
        }

        .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-progress-wrapper:hover .fb-animated-heading-progress-fill {
            ${animatedHeadingProgressBgFillColorTypeSwitcher ? `
                ${animatedHeadingProgressBgFillHoverColorType === 'gradient' ? `   	
                    ${animatedHeadingProgressBgFillHoverCustomGradientColorSwitcher && animatedHeadingProgressBgFillHoverCustomGradientColor ? `background: ${animatedHeadingProgressBgFillHoverCustomGradientColor};` : `background: ${animatedHeadingProgressBgFillHoverGradientColor};`}
                `: `
                    ${animatedHeadingProgressBgFillHoverColor ? `background: ${animatedHeadingProgressBgFillHoverColor};` : ''}
                `}
            ` : ''} 
        }

        @media only screen and (max-width: 1024px) {

            .${blockID}.fb-animated-heading-main-wrapper {
                ${animatedHeadingGlobalZIndex.Tablet ? `z-index: ${animatedHeadingGlobalZIndex.Tablet};` : ''}
            }

            .${blockID} .fb-animated-heading-wrapper {
                ${animatedHeadingGap.Tablet && animatedHeadingGapUnits.Tablet ? `gap: ${animatedHeadingGap.Tablet}${animatedHeadingGapUnits.Tablet};` : ''}
                ${animatedHeadingAlignment.Tablet ? `text-align: ${animatedHeadingAlignment.Tablet};` : ''}
                ${animatedHeadingGlobalTabletPaddingWidth && animatedHeadingGlobalTabletPadding?.top ? `padding: ${animatedHeadingGlobalTabletPaddingWidth};` : ''}
                ${animatedHeadingGlobalTabletMarginWidth && animatedHeadingGlobalTabletMargin?.top ? `margin: ${animatedHeadingGlobalTabletMarginWidth};` : ''}
                ${animatedHeadingGlobalTabletBorderWidth && animatedHeadingGlobalTabletBorder?.top ? `border-width: ${animatedHeadingGlobalTabletBorderWidth};` : ''}
                ${animatedHeadingGlobalTabletBorderRadiusWidth && animatedHeadingGlobalTabletBorderRadius?.top ? `border-radius: ${animatedHeadingGlobalTabletBorderRadiusWidth};` : ''}
            }

            .${blockID} .fb-animated-heading-wrapper.animated-type-progress,
            .${blockID} .fb-animated-heading-wrapper.animated-type-flip,
            .${blockID} .fb-animated-heading-wrapper.animated-type-zoom,
            .${blockID} .fb-animated-heading-wrapper.animated-type-typing,
            .${blockID} .fb-animated-heading-wrapper.animated-type-highlight,
            .${blockID} .fb-animated-heading-wrapper.animated-type-reveal {
                ${animatedHeadingGap.Tablet && animatedHeadingGapUnits.Tablet ? `gap: ${animatedHeadingGap.Tablet}${animatedHeadingGapUnits.Tablet};` : ''}
                ${animatedHeadingAlignment.Tablet ? `justify-content: ${animatedHeadingAlignment.Tablet};` : ''}
            }
            .${blockID} .fb-animated-heading-wrapper.animated-type-swirl {
                ${animatedHeadingAlignment.Tablet ? `text-align: ${animatedHeadingAlignment.Tablet};` : ''}
            }

            .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-prefix,
            .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-suffix {
                ${animatedHeadingNormalTextGlobalTypoSwitcher.fontSize === false && animatedHeadingNormalTextFontSize.Tablet && animatedHeadingNormalTextFontSizeUnits.Tablet ? `font-size: ${animatedHeadingNormalTextFontSize.Tablet}${animatedHeadingNormalTextFontSizeUnits.Tablet};` : ''}
                ${animatedHeadingNormalTextGlobalTypoSwitcher.letterSpacing === false && animatedHeadingNormalTextLetterSpacing.Tablet && animatedHeadingNormalTextLetterSpacingUnits.Tablet ? `letter-spacing: ${animatedHeadingNormalTextLetterSpacing.Tablet}${animatedHeadingNormalTextLetterSpacingUnits.Tablet};` : ''}
                ${animatedHeadingNormalTextGlobalTypoSwitcher.lineHeight === false && animatedHeadingNormalTextLineHeight.Tablet && animatedHeadingNormalTextLineHeightUnits.Tablet ? `line-height: ${animatedHeadingNormalTextLineHeight.Tablet}${animatedHeadingNormalTextLineHeightUnits.Tablet};` : ''}
            }

            .${blockID} .fb-animated-heading-wrapper .fb-animated-headings,
            .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-cursor,
            .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-reveal-wrapper,
            .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-swap-wrapper .fb-animated-heading-swap-word,
            .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-progress-wrapper .fb-animated-heading-progress-word,
            .${blockID} .fb-animated-heading-dynamic-wrapper .fb-animated-heading-dynamic-text {  
                ${animatedHeadingAnimatedTextTabletPaddingWidth && animatedHeadingAnimatedTextTabletPadding?.top ? `padding: ${animatedHeadingAnimatedTextTabletPaddingWidth};` : ''}
                ${animatedHeadingAnimatedTextTabletMarginWidth && animatedHeadingAnimatedTextTabletMargin?.top ? `margin: ${animatedHeadingAnimatedTextTabletMarginWidth};` : ''}
                ${animatedHeadingAnimatedTextTabletBorderWidth && animatedHeadingAnimatedTextTabletBorder?.top ? `border-width: ${animatedHeadingAnimatedTextTabletBorderWidth};` : ''}
                ${animatedHeadingAnimatedTextTabletBorderRadiusWidth && animatedHeadingAnimatedTextTabletBorderRadius?.top ? `border-radius: ${animatedHeadingAnimatedTextTabletBorderRadiusWidth};` : ''}
                
                ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontSize === false && animatedHeadingAnimationTextFontSize.Tablet && animatedHeadingAnimationTextFontSizeUnits.Tablet ? `font-size: ${animatedHeadingAnimationTextFontSize.Tablet}${animatedHeadingAnimationTextFontSizeUnits.Tablet};` : ''}
                ${animatedHeadingAnimationTextGlobalTypoSwitcher.letterSpacing === false && animatedHeadingAnimationTextLetterSpacing.Tablet && animatedHeadingAnimationTextLetterSpacingUnits.Tablet ? `letter-spacing: ${animatedHeadingAnimationTextLetterSpacing.Tablet}${animatedHeadingAnimationTextLetterSpacingUnits.Tablet};` : ''}
                ${animatedHeadingAnimationTextGlobalTypoSwitcher.lineHeight === false && animatedHeadingAnimationTextLineHeight.Tablet && animatedHeadingAnimationTextLineHeightUnits.Tablet ? `line-height: ${animatedHeadingAnimationTextLineHeight.Tablet}${animatedHeadingAnimationTextLineHeightUnits.Tablet};` : ''}
            }

            .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-progress-wrapper .fb-animated-heading-progress-track, 
            .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-progress-wrapper.fb-animated-heading-progress-fill {
                ${animatedHeadingProgressBarWidth.Tablet && animatedHeadingProgressBarWidthUnits.Tablet ? `width: ${animatedHeadingProgressBarWidth.Tablet}${animatedHeadingProgressBarWidthUnits.Tablet};` : ''}
                ${animatedHeadingProgressBarHeight.Tablet && animatedHeadingProgressBarHeightUnits.Tablet ? `height: ${animatedHeadingProgressBarHeight.Tablet}${animatedHeadingProgressBarHeightUnits.Tablet};` : ''}
                ${animatedHeadingProgressBarTabletBorderRadiusWidth && animatedHeadingProgressBarTabletBorderRadius?.top ? `border-radius: ${animatedHeadingProgressBarTabletBorderRadiusWidth};` : ''}
            }

        }

        @media only screen and (max-width: 767px) {

            .${blockID}.fb-animated-heading-main-wrapper {
                ${animatedHeadingGlobalZIndex.Mobile ? `z-index: ${animatedHeadingGlobalZIndex.Mobile};` : ''}
            }

            .${blockID} .fb-animated-heading-wrapper {
                ${animatedHeadingGap.Mobile && animatedHeadingGapUnits.Mobile ? `gap: ${animatedHeadingGap.Mobile}${animatedHeadingGapUnits.Mobile};` : ''}
                ${animatedHeadingAlignment.Mobile ? `text-align: ${animatedHeadingAlignment.Mobile};` : ''}
                ${animatedHeadingGlobalMobilePaddingWidth && animatedHeadingGlobalMobilePadding?.top ? `padding: ${animatedHeadingGlobalMobilePaddingWidth};` : ''}
                ${animatedHeadingGlobalMobileMarginWidth && animatedHeadingGlobalMobileMargin?.top ? `margin: ${animatedHeadingGlobalMobileMarginWidth};` : ''}
                ${animatedHeadingGlobalMobileBorderWidth && animatedHeadingGlobalMobileBorder?.top ? `border-width: ${animatedHeadingGlobalMobileBorderWidth};` : ''}
                ${animatedHeadingGlobalMobileBorderRadiusWidth && animatedHeadingGlobalMobileBorderRadius?.top ? `border-radius: ${animatedHeadingGlobalMobileBorderRadiusWidth};` : ''}
            }

            .${blockID} .fb-animated-heading-wrapper.animated-type-progress,
            .${blockID} .fb-animated-heading-wrapper.animated-type-flip,
            .${blockID} .fb-animated-heading-wrapper.animated-type-zoom,
            .${blockID} .fb-animated-heading-wrapper.animated-type-typing,
            .${blockID} .fb-animated-heading-wrapper.animated-type-highlight,
            .${blockID} .fb-animated-heading-wrapper.animated-type-reveal {
                ${animatedHeadingGap.Mobile && animatedHeadingGapUnits.Mobile ? `gap: ${animatedHeadingGap.Mobile}${animatedHeadingGapUnits.Mobile};` : ''}
                ${animatedHeadingAlignment.Mobile ? `justify-content: ${animatedHeadingAlignment.Mobile};` : ''}
            }

            .${blockID} .fb-animated-heading-wrapper.animated-type-swirl {
                ${animatedHeadingAlignment.Mobile ? `text-align: ${animatedHeadingAlignment.Mobile};` : ''}
            }

            .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-prefix,
            .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-suffix {
                ${animatedHeadingNormalTextGlobalTypoSwitcher.fontSize === false && animatedHeadingNormalTextFontSize.Mobile && animatedHeadingNormalTextFontSizeUnits.Mobile ? `font-size: ${animatedHeadingNormalTextFontSize.Mobile}${animatedHeadingNormalTextFontSizeUnits.Mobile};` : ''}
                ${animatedHeadingNormalTextGlobalTypoSwitcher.letterSpacing === false && animatedHeadingNormalTextLetterSpacing.Mobile && animatedHeadingNormalTextLetterSpacingUnits.Mobile ? `letter-spacing: ${animatedHeadingNormalTextLetterSpacing.Mobile}${animatedHeadingNormalTextLetterSpacingUnits.Mobile};` : ''}
                ${animatedHeadingNormalTextGlobalTypoSwitcher.lineHeight === false && animatedHeadingNormalTextLineHeight.Mobile && animatedHeadingNormalTextLineHeightUnits.Mobile ? `line-height: ${animatedHeadingNormalTextLineHeight.Mobile}${animatedHeadingNormalTextLineHeightUnits.Mobile};` : ''}
            }

            .${blockID} .fb-animated-heading-wrapper .fb-animated-headings,
            .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-cursor,
            .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-reveal-wrapper,
            .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-swap-wrapper .fb-animated-heading-swap-word,
            .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-progress-wrapper .fb-animated-heading-progress-word,
            .${blockID} .fb-animated-heading-dynamic-wrapper .fb-animated-heading-dynamic-text {  
                ${animatedHeadingAnimatedTextMobilePaddingWidth && animatedHeadingAnimatedTextMobilePadding?.top ? `padding: ${animatedHeadingAnimatedTextMobilePaddingWidth};` : ''}
                ${animatedHeadingAnimatedTextMobileMarginWidth && animatedHeadingAnimatedTextMobileMargin?.top ? `margin: ${animatedHeadingAnimatedTextMobileMarginWidth};` : ''}
                ${animatedHeadingAnimatedTextMobileBorderWidth && animatedHeadingAnimatedTextMobileBorder?.top ? `border-width: ${animatedHeadingAnimatedTextMobileBorderWidth};` : ''}
                ${animatedHeadingAnimatedTextMobileBorderRadiusWidth && animatedHeadingAnimatedTextMobileBorderRadius?.top ? `border-radius: ${animatedHeadingAnimatedTextMobileBorderRadiusWidth};` : ''}
                
                ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontSize === false && animatedHeadingAnimationTextFontSize.Mobile && animatedHeadingAnimationTextFontSizeUnits.Mobile ? `font-size: ${animatedHeadingAnimationTextFontSize.Mobile}${animatedHeadingAnimationTextFontSizeUnits.Mobile};` : ''}
                ${animatedHeadingAnimationTextGlobalTypoSwitcher.letterSpacing === false && animatedHeadingAnimationTextLetterSpacing.Mobile && animatedHeadingAnimationTextLetterSpacingUnits.Mobile ? `letter-spacing: ${animatedHeadingAnimationTextLetterSpacing.Mobile}${animatedHeadingAnimationTextLetterSpacingUnits.Mobile};` : ''}
                ${animatedHeadingAnimationTextGlobalTypoSwitcher.lineHeight === false && animatedHeadingAnimationTextLineHeight.Mobile && animatedHeadingAnimationTextLineHeightUnits.Mobile ? `line-height: ${animatedHeadingAnimationTextLineHeight.Mobile}${animatedHeadingAnimationTextLineHeightUnits.Mobile};` : ''}
            }

            .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-progress-wrapper .fb-animated-heading-progress-track, 
            .${blockID} .fb-animated-heading-wrapper .fb-animated-heading-progress-wrapper.fb-animated-heading-progress-fill {
                ${animatedHeadingProgressBarWidth.Mobile && animatedHeadingProgressBarWidthUnits.Mobile ? `width: ${animatedHeadingProgressBarWidth.Mobile}${animatedHeadingProgressBarWidthUnits.Mobile};` : ''}
                ${animatedHeadingProgressBarHeight.Mobile && animatedHeadingProgressBarHeightUnits.Mobile ? `height: ${animatedHeadingProgressBarHeight.Mobile}${animatedHeadingProgressBarHeightUnits.Mobile};` : ''}
                ${animatedHeadingProgressBarMobileBorderRadiusWidth && animatedHeadingProgressBarMobileBorderRadius?.top ? `border-radius: ${animatedHeadingProgressBarMobileBorderRadiusWidth};` : ''}
            }
        }
    `;

    const customCss = getCustomCss(animatedHeadingCustomCSS, `.${blockID}`);
    return `${animatedHeadingBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateAnimatedHeadingStyle;