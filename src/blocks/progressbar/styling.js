/**
 * Progressbar Block-Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes-Block attributes
 * @returns {string} CSS string
 */
const generateProgressbarStyle = (attributes) => {

    const {
		blockID,
		// deviceType,
        progressGlobalZIndex,
        progressbarOverflow,
        progressbarType,
		progressTextPosition,
        progressNumberPosition,
		progressNumber,
        progressbarVrAlignment,


        progressNumberColorSwitcher,
		progressNumberColor,
        progressNumberHoverColor,
        

        // progress color
        progressZebraTrackSwitcher,
        progressZebraTrackWidth,
        progressColorSwitcher,
        progressColorType,
        progressColor,
        progressGradientColor,
        progressCustomGradientSwitcher,
        progressCustomGradientInputValue,
        progressImageUrl,
        progressImageAlt,
        progressImageID,
        progressImagePosition,
        progressImageAttachment,
        progressImageRepeat,
        progressImageSize,

        // progress Background
        progressBgZebraTrackSwitcher,
        progressBgZebraTrackWidth,
        progressBgColorSwitcher,
        progressBgColorType,
        progressBgColor,
        progressBgGradientColor,
        progressBgCustomGradientSwitcher,
        progressBgCustomGradientInputValue,
        progressBgImageUrl,
        progressBgImageAlt,
        progressBgImageID,
        progressBgImagePosition,
        progressBgImageAttachment,
        progressBgImageRepeat,
        progressBgImageSize,

		progressTitle,
		progressHeadingTag,
		progressBarHeight,
        progressBarHeightUnits,
        progressBarWidth,
        progressBarWidthUnits,

        progressTitleColorSwitcher,
        progressTitleColor,
        progressTitleHoverColor,

        // progress Border
        progressBorderStyle,
        progressBorderColor,
        progressBorderHoverColor,
        progressBorderColorSwitcher,

		progressBorderWidthUnits,
		progressBorderWidthDesktop,
		progressBorderWidthTablet,
		progressBorderWidthMobile,
		progressBorderWidthLink,

		progressBorderRadiusUnits,
		progressBorderRadiusDesktop,
		progressBorderRadiusTablet,
		progressBorderRadiusMobile,
		progressBorderRadiusLink,

        // progress Background Border
        progressBgBorderStyle,
        progressBgBorderColor,
        progressBgBorderHoverColor,
        progressBgBorderColorSwitcher,

        progressBgBorderWidthUnits,
		progressBgBorderWidthDesktop,
		progressBgBorderWidthTablet,
		progressBgBorderWidthMobile,
		progressBgBorderWidthLink,

		progressBgBorderRadiusUnits,
		progressBgBorderRadiusDesktop,
		progressBgBorderRadiusTablet,
		progressBgBorderRadiusMobile,
		progressBgBorderRadiusLink,

        progressTitleGlobalTypoSwitcher,
        progressTitleGlobalTypographyData,
        progressTitleGlobalTypoType,
        progressTitleGlobalTypoOption,
        progressTitleFontFamily,
        progressTitleFontSize,
        progressTitleFontSizeUnits,
        progressTitleFontWeight,
        progressTitleFontStyle,
        progressTitleTextTransform,
        progressTitleTextDecoration,
        progressTitleLetterSpacing,
        progressTitleLetterSpacingUnits,
        progressTitleLineHeight,
        progressTitleLineHeightUnits,

        progressNumberGlobalTypoSwitcher,
        progressNumberGlobalTypographyData,
        progressNumberGlobalTypoType,
        progressNumberGlobalTypoOption,
        progressNumberFontFamily,
        progressNumberFontSize,
        progressNumberFontSizeUnits,
        progressNumberFontWeight,
        progressNumberFontStyle,
        progressNumberTextTransform,
        progressNumberTextDecoration,
        progressNumberLetterSpacing,
        progressNumberLetterSpacingUnits,
        progressNumberLineHeight,
        progressNumberLineHeightUnits,

        blockStyle,

        progressbarDesktopSwitcher,
		progressbarTabletSwitcher,
		progressbarMobileSwitcher,

        progressGlobalCustomCSS,
        progressGlobalWraperID,
		progressGlobalWraperClass,

        // Position
        progressbarPositionType,
        progressbarHZOrientationType,
        progressbarVROrientationType,
        progressbarHZLeftOffset,
        progressbarHZLeftOffsetUnits,
        progressbarHZRightOffset,
        progressbarHZRightOffsetUnits,
        progressbarVRTopOffset,
        progressbarVRTopOffsetUnits,
        progressbarVRBottomOffset,
        progressbarVRBottomOffsetUnits,

        progressTitleMarginUnits,
        progressTitleMarginDesktop,
        progressTitleMarginTablet,
        progressTitleMarginMobile,
        progressTitleMarginLink,

        progressNumberMarginUnits,
        progressNumberMarginDesktop,
        progressNumberMarginTablet,
        progressNumberMarginMobile,
        progressNumberMarginLink,

        // Background
        progressbarGlobalBgColorSwitcher,
        progressbarGlobalBgType,
        progressbarGlobalBgClassicColor,
        progressbarGlobalBgGradientColor,
        progressbarGlobalBgCustomGradientSwitcher,
        progressbarGlobalBgCustomGradientInputValue,
        progressbarGlobalBgImageUrl,
        progressbarGlobalBgImageAlt,
        progressbarGlobalBgImageID,
        progressbarGlobalBgImagePosition,
        progressbarGlobalBgImageAttachment,
        progressbarGlobalBgImageRepeat,
        progressbarGlobalBgImageSize,
        progressbarGlobalBgHoverType,
        progressbarGlobalBgHoverClassicColor,
        progressbarGlobalBgHoverGradientColor,
        progressbarGlobalBgHoverCustomGradientSwitcher,
        progressbarGlobalBgHoverCustomGradientInputValue,
        progressbarGlobalBgHoverImageUrl,
        progressbarGlobalBgHoverImageAlt,
        progressbarGlobalBgHoverImageID,
        progressbarGlobalBgHoverImagePosition,
        progressbarGlobalBgHoverImageAttachment,
        progressbarGlobalBgHoverImageRepeat,
        progressbarGlobalBgHoverImageSize,

        // padding
        progressbarGlobalPaddingUnits,
        progressbarGlobalPaddingDesktop,
        progressbarGlobalPaddingTablet,
        progressbarGlobalPaddingMobile,
        progressbarGlobalPaddingLink,

        // margin
        progressbarGlobalMarginUnits,
        progressbarGlobalMarginDesktop,
        progressbarGlobalMarginTablet,
        progressbarGlobalMarginMobile,
        progressbarGlobalMarginLink,

        // border
        progressbarGlobalBorder,
        progressbarGlobalBorderColor,
        progressbarGlobalBorderHoverColor,
        progressbarGlobalBorderColorSwitcher,
        progressbarGlobalBorderUnits,
        progressbarGlobalDesktopBorder,
        progressbarGlobalTabletBorder,
        progressbarGlobalMobileBorder,
        progressbarGlobalBorderLink,

        // border radius
        progressbarGlobalBorderRadiusUnits,
        progressbarGlobalDesktopBorderRadius,
        progressbarGlobalTabletBorderRadius,
        progressbarGlobalMobileBorderRadius,
        progressbarGlobalBorderRadiusLink,

        // box shadow
        progressbarGlobalBoxShadowSwitcher,
        progressbarGlobalBoxShadowValues,
        progressbarGlobalBoxShadowCssValue,
        progressbarGlobalHoverBoxShadowValues,
        progressbarGlobalHoverBoxShadowCssValue,

        // title
        showProgressTitle,
        showProgressNumber

	} = attributes;

    /** Default border for Progress */
    const progressBorderWidthDesktopGet = `${progressBorderWidthDesktop?.top}${progressBorderWidthUnits?.Desktop} ${progressBorderWidthDesktop?.right}${progressBorderWidthUnits?.Desktop} ${progressBorderWidthDesktop?.bottom}${progressBorderWidthUnits?.Desktop} ${progressBorderWidthDesktop?.left}${progressBorderWidthUnits?.Desktop}`;
    const progressBorderWidthTabletGet = `${progressBorderWidthTablet?.top}${progressBorderWidthUnits?.Tablet} ${progressBorderWidthTablet?.right}${progressBorderWidthUnits?.Tablet} ${progressBorderWidthTablet?.bottom}${progressBorderWidthUnits?.Tablet} ${progressBorderWidthTablet?.left}${progressBorderWidthUnits?.Tablet}`;
    const progressBorderWidthMobileGet = `${progressBorderWidthMobile?.top}${progressBorderWidthUnits?.Mobile} ${progressBorderWidthMobile?.right}${progressBorderWidthUnits?.Mobile} ${progressBorderWidthMobile?.bottom}${progressBorderWidthUnits?.Mobile} ${progressBorderWidthMobile?.left}${progressBorderWidthUnits?.Mobile}`;
    /** End Progress Border Radius */

    /** Default border radius for Progress */
    const progressBorderRadiusDesktopGet = `${progressBorderRadiusDesktop?.top}${progressBorderRadiusUnits?.Desktop} ${progressBorderRadiusDesktop?.right}${progressBorderRadiusUnits?.Desktop} ${progressBorderRadiusDesktop?.bottom}${progressBorderRadiusUnits?.Desktop} ${progressBorderRadiusDesktop?.left}${progressBorderRadiusUnits?.Desktop}`;
    const progressBorderRadiusTabletGet = `${progressBorderRadiusTablet?.top}${progressBorderRadiusUnits?.Tablet} ${progressBorderRadiusTablet?.right}${progressBorderRadiusUnits?.Tablet} ${progressBorderRadiusTablet?.bottom}${progressBorderRadiusUnits?.Tablet} ${progressBorderRadiusTablet?.left}${progressBorderRadiusUnits?.Tablet}`;
    const progressBorderRadiusMobileGet = `${progressBorderRadiusMobile?.top}${progressBorderRadiusUnits?.Mobile} ${progressBorderRadiusMobile?.right}${progressBorderRadiusUnits?.Mobile} ${progressBorderRadiusMobile?.bottom}${progressBorderRadiusUnits?.Mobile} ${progressBorderRadiusMobile?.left}${progressBorderRadiusUnits?.Mobile}`;
    /** End Progress Border Radius */

    /** Default border for Progress Background */
    const progressBgBorderWidthDesktopGet = `${progressBgBorderWidthDesktop?.top}${progressBgBorderWidthUnits?.Desktop} ${progressBgBorderWidthDesktop?.right}${progressBgBorderWidthUnits?.Desktop} ${progressBgBorderWidthDesktop?.bottom}${progressBgBorderWidthUnits?.Desktop} ${progressBgBorderWidthDesktop?.left}${progressBgBorderWidthUnits?.Desktop}`;
    const progressBgBorderWidthTabletGet = `${progressBgBorderWidthTablet?.top}${progressBgBorderWidthUnits?.Tablet} ${progressBgBorderWidthTablet?.right}${progressBgBorderWidthUnits?.Tablet} ${progressBgBorderWidthTablet?.bottom}${progressBgBorderWidthUnits?.Tablet} ${progressBgBorderWidthTablet?.left}${progressBgBorderWidthUnits?.Tablet}`;
    const progressBgBorderWidthMobileGet = `${progressBgBorderWidthMobile?.top}${progressBgBorderWidthUnits?.Mobile} ${progressBgBorderWidthMobile?.right}${progressBgBorderWidthUnits?.Mobile} ${progressBgBorderWidthMobile?.bottom}${progressBgBorderWidthUnits?.Mobile} ${progressBgBorderWidthMobile?.left}${progressBgBorderWidthUnits?.Mobile}`;
    /** End Progress Background Border Radius */

    /** Default border radius for Progress Background */
    const progressBgBorderRadiusDesktopGet = `${progressBgBorderRadiusDesktop?.top}${progressBgBorderRadiusUnits?.Desktop} ${progressBgBorderRadiusDesktop?.right}${progressBgBorderRadiusUnits?.Desktop} ${progressBgBorderRadiusDesktop?.bottom}${progressBgBorderRadiusUnits?.Desktop} ${progressBgBorderRadiusDesktop?.left}${progressBgBorderRadiusUnits?.Desktop}`;
    const progressBgBorderRadiusTabletGet = `${progressBgBorderRadiusTablet?.top}${progressBgBorderRadiusUnits?.Tablet} ${progressBgBorderRadiusTablet?.right}${progressBgBorderRadiusUnits?.Tablet} ${progressBgBorderRadiusTablet?.bottom}${progressBgBorderRadiusUnits?.Tablet} ${progressBgBorderRadiusTablet?.left}${progressBgBorderRadiusUnits?.Tablet}`;
    const progressBgBorderRadiusMobileGet = `${progressBgBorderRadiusMobile?.top}${progressBgBorderRadiusUnits?.Mobile} ${progressBgBorderRadiusMobile?.right}${progressBgBorderRadiusUnits?.Mobile} ${progressBgBorderRadiusMobile?.bottom}${progressBgBorderRadiusUnits?.Mobile} ${progressBgBorderRadiusMobile?.left}${progressBgBorderRadiusUnits?.Mobile}`;
    /** End Progress Background Border Radius */


    /** Progress Number Margin */
    const progressNumberMarginDesktopGet = `${progressNumberMarginDesktop?.top}${progressNumberMarginUnits?.Desktop} ${progressNumberMarginDesktop?.right}${progressNumberMarginUnits?.Desktop} ${progressNumberMarginDesktop?.bottom}${progressNumberMarginUnits?.Desktop} ${progressNumberMarginDesktop?.left}${progressNumberMarginUnits?.Desktop}`;
    const progressNumberMarginTabletGet = `${progressNumberMarginTablet?.top}${progressNumberMarginUnits?.Tablet} ${progressNumberMarginTablet?.right}${progressNumberMarginUnits?.Tablet} ${progressNumberMarginTablet?.bottom}${progressNumberMarginUnits?.Tablet} ${progressNumberMarginTablet?.left}${progressNumberMarginUnits?.Tablet}`;
    const progressNumberMarginMobileGet = `${progressNumberMarginMobile?.top}${progressNumberMarginUnits?.Mobile} ${progressNumberMarginMobile?.right}${progressNumberMarginUnits?.Mobile} ${progressNumberMarginMobile?.bottom}${progressNumberMarginUnits?.Mobile} ${progressNumberMarginMobile?.left}${progressNumberMarginUnits?.Mobile}`;
    /** Progress Number Margin */

    /** Progress Title Margin */
    const progressTitleMarginDesktopGet = `${progressTitleMarginDesktop?.top}${progressTitleMarginUnits?.Desktop} ${progressTitleMarginDesktop?.right}${progressTitleMarginUnits?.Desktop} ${progressTitleMarginDesktop?.bottom}${progressTitleMarginUnits?.Desktop} ${progressTitleMarginDesktop?.left}${progressTitleMarginUnits?.Desktop}`;
    const progressTitleMarginTabletGet = `${progressTitleMarginTablet?.top}${progressTitleMarginUnits?.Tablet} ${progressTitleMarginTablet?.right}${progressTitleMarginUnits?.Tablet} ${progressTitleMarginTablet?.bottom}${progressTitleMarginUnits?.Tablet} ${progressTitleMarginTablet?.left}${progressTitleMarginUnits?.Tablet}`;
    const progressTitleMarginMobileGet = `${progressTitleMarginMobile?.top}${progressTitleMarginUnits?.Mobile} ${progressTitleMarginMobile?.right}${progressTitleMarginUnits?.Mobile} ${progressTitleMarginMobile?.bottom}${progressTitleMarginUnits?.Mobile} ${progressTitleMarginMobile?.left}${progressTitleMarginUnits?.Mobile}`;
    /** Progress Title Margin */

    /** Progressbar Global Padding */
    const progressbarGlobalPaddingDesktopGet = `${progressbarGlobalPaddingDesktop?.top}${progressbarGlobalPaddingUnits?.Desktop} ${progressbarGlobalPaddingDesktop?.right}${progressbarGlobalPaddingUnits?.Desktop} ${progressbarGlobalPaddingDesktop?.bottom}${progressbarGlobalPaddingUnits?.Desktop} ${progressbarGlobalPaddingDesktop?.left}${progressbarGlobalPaddingUnits?.Desktop}`;
    const progressbarGlobalPaddingTabletGet = `${progressbarGlobalPaddingTablet?.top}${progressbarGlobalPaddingUnits?.Tablet} ${progressbarGlobalPaddingTablet?.right}${progressbarGlobalPaddingUnits?.Tablet} ${progressbarGlobalPaddingTablet?.bottom}${progressbarGlobalPaddingUnits?.Tablet} ${progressbarGlobalPaddingTablet?.left}${progressbarGlobalPaddingUnits?.Tablet}`;
    const progressbarGlobalPaddingMobileGet = `${progressbarGlobalPaddingMobile?.top}${progressbarGlobalPaddingUnits?.Mobile} ${progressbarGlobalPaddingMobile?.right}${progressbarGlobalPaddingUnits?.Mobile} ${progressbarGlobalPaddingMobile?.bottom}${progressbarGlobalPaddingUnits?.Mobile} ${progressbarGlobalPaddingMobile?.left}${progressbarGlobalPaddingUnits?.Mobile}`;
    /** End Progressbar Global Padding */

    /** Progressbar Global Margin */
    const progressbarGlobalMarginDesktopGet = `${progressbarGlobalMarginDesktop?.top}${progressbarGlobalMarginUnits?.Desktop} ${progressbarGlobalMarginDesktop?.right}${progressbarGlobalMarginUnits?.Desktop} ${progressbarGlobalMarginDesktop?.bottom}${progressbarGlobalMarginUnits?.Desktop} ${progressbarGlobalMarginDesktop?.left}${progressbarGlobalMarginUnits?.Desktop}`;
    const progressbarGlobalMarginTabletGet = `${progressbarGlobalMarginTablet?.top}${progressbarGlobalMarginUnits?.Tablet} ${progressbarGlobalMarginTablet?.right}${progressbarGlobalMarginUnits?.Tablet} ${progressbarGlobalMarginTablet?.bottom}${progressbarGlobalMarginUnits?.Tablet} ${progressbarGlobalMarginTablet?.left}${progressbarGlobalMarginUnits?.Tablet}`;
    const progressbarGlobalMarginMobileGet = `${progressbarGlobalMarginMobile?.top}${progressbarGlobalMarginUnits?.Mobile} ${progressbarGlobalMarginMobile?.right}${progressbarGlobalMarginUnits?.Mobile} ${progressbarGlobalMarginMobile?.bottom}${progressbarGlobalMarginUnits?.Mobile} ${progressbarGlobalMarginMobile?.left}${progressbarGlobalMarginUnits?.Mobile}`;
    /** End Progressbar Global Margin */

    /** Progressbar Global Border */
    const progressbarGlobalDesktopBorderGet = `${progressbarGlobalDesktopBorder?.top}${progressbarGlobalBorderUnits?.Desktop} ${progressbarGlobalDesktopBorder?.right}${progressbarGlobalBorderUnits?.Desktop} ${progressbarGlobalDesktopBorder?.bottom}${progressbarGlobalBorderUnits?.Desktop} ${progressbarGlobalDesktopBorder?.left}${progressbarGlobalBorderUnits?.Desktop}`;
    const progressbarGlobalTabletBorderGet = `${progressbarGlobalTabletBorder?.top}${progressbarGlobalBorderUnits?.Tablet} ${progressbarGlobalTabletBorder?.right}${progressbarGlobalBorderUnits?.Tablet} ${progressbarGlobalTabletBorder?.bottom}${progressbarGlobalBorderUnits?.Tablet} ${progressbarGlobalTabletBorder?.left}${progressbarGlobalBorderUnits?.Tablet}`;
    const progressbarGlobalMobileBorderGet = `${progressbarGlobalMobileBorder?.top}${progressbarGlobalBorderUnits?.Mobile} ${progressbarGlobalMobileBorder?.right}${progressbarGlobalBorderUnits?.Mobile} ${progressbarGlobalMobileBorder?.bottom}${progressbarGlobalBorderUnits?.Mobile} ${progressbarGlobalMobileBorder?.left}${progressbarGlobalBorderUnits?.Mobile}`;
    /** End Progressbar Global Border */

    /** Progressbar Global Border Radius */
    const progressbarGlobalDesktopBorderRadiusGet = `${progressbarGlobalDesktopBorderRadius?.top}${progressbarGlobalBorderRadiusUnits?.Desktop} ${progressbarGlobalDesktopBorderRadius?.right}${progressbarGlobalBorderRadiusUnits?.Desktop} ${progressbarGlobalDesktopBorderRadius?.bottom}${progressbarGlobalBorderRadiusUnits?.Desktop} ${progressbarGlobalDesktopBorderRadius?.left}${progressbarGlobalBorderRadiusUnits?.Desktop}`;
    const progressbarGlobalTabletBorderRadiusGet = `${progressbarGlobalTabletBorderRadius?.top}${progressbarGlobalBorderRadiusUnits?.Tablet} ${progressbarGlobalTabletBorderRadius?.right}${progressbarGlobalBorderRadiusUnits?.Tablet} ${progressbarGlobalTabletBorderRadius?.bottom}${progressbarGlobalBorderRadiusUnits?.Tablet} ${progressbarGlobalTabletBorderRadius?.left}${progressbarGlobalBorderRadiusUnits?.Tablet}`;
    const progressbarGlobalMobileBorderRadiusGet = `${progressbarGlobalMobileBorderRadius?.top}${progressbarGlobalBorderRadiusUnits?.Mobile} ${progressbarGlobalMobileBorderRadius?.right}${progressbarGlobalBorderRadiusUnits?.Mobile} ${progressbarGlobalMobileBorderRadius?.bottom}${progressbarGlobalBorderRadiusUnits?.Mobile} ${progressbarGlobalMobileBorderRadius?.left}${progressbarGlobalBorderRadiusUnits?.Mobile}`;
    /** End Progressbar Global Border Radius */

    /**
     * Get all block style
     */
    const progressbarBlockStyle = `

        .${blockID}.fb-progressbar-main-wrapper {
            width: 100%;
            ${progressbarPositionType === 'default' ? `position: relative;` : ''}
            ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' ? `width: 100%;` : ''}
            ${progressbarPositionType !== 'default' ? `position: ${progressbarPositionType};` : ''}
            ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarHZOrientationType === 'left' && progressbarHZLeftOffset?.Desktop !== undefined ? `left: ${progressbarHZLeftOffset?.Desktop}${progressbarHZLeftOffsetUnits?.Desktop};` : ''}
            ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarHZOrientationType === 'right' && progressbarHZRightOffset?.Desktop !== undefined ? `right: ${progressbarHZRightOffset?.Desktop}${progressbarHZRightOffsetUnits?.Desktop};` : ''}
            ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarVROrientationType === 'top' && progressbarVRTopOffset?.Desktop !== undefined ? `top: ${progressbarVRTopOffset?.Desktop}${progressbarVRTopOffsetUnits?.Desktop};` : ''}
            ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarVROrientationType === 'bottom' && progressbarVRBottomOffset?.Desktop !== undefined ? `bottom: ${progressbarVRBottomOffset?.Desktop}${progressbarVRBottomOffsetUnits?.Desktop};` : ''}
            ${progressGlobalZIndex.Desktop ? `z-index: ${progressGlobalZIndex.Desktop};` : ''}
            ${progressbarOverflow !== 'default' ? `overflow: ${progressbarOverflow};` : ''}
        }
        
        .${blockID} .fb-progressbar-wrapper {
            position: relative;
            overflow: hidden;
            ${progressbarGlobalPaddingDesktop?.top ? `padding: ${progressbarGlobalPaddingDesktopGet};` : ''}
            ${progressbarGlobalMarginDesktop?.top ? `margin: ${progressbarGlobalMarginDesktopGet};` : ''}
            ${progressbarGlobalBorder ? `border-style: ${progressbarGlobalBorder};` : ''}
            ${progressbarGlobalBorderColor ? `border-color: ${progressbarGlobalBorderColor};` : ''}
            ${progressbarGlobalDesktopBorder?.top ? `border-width: ${progressbarGlobalDesktopBorderGet};` : ''}
            ${progressbarGlobalDesktopBorderRadius?.top ? `border-radius: ${progressbarGlobalDesktopBorderRadiusGet};` : ''}
            ${
                progressbarGlobalBgType === "gradient"
                    ? `background: ${
                        progressbarGlobalBgCustomGradientSwitcher && progressbarGlobalBgCustomGradientInputValue
                        ? progressbarGlobalBgCustomGradientInputValue
                        : progressbarGlobalBgGradientColor
                    };`
                    : progressbarGlobalBgImageUrl !== undefined && progressbarGlobalBgImageUrl !== null && progressbarGlobalBgImageUrl !== ""
                    ? `
                    ${progressbarGlobalBgImageUrl !== undefined ? `background-image: url(${progressbarGlobalBgImageUrl});` : ''}
                    ${progressbarGlobalBgImagePosition !== undefined ? `background-position: ${progressbarGlobalBgImagePosition};` : ''}
                    ${progressbarGlobalBgImageAttachment !== undefined ? `background-attachment: ${progressbarGlobalBgImageAttachment};` : ''}
                    ${progressbarGlobalBgImageRepeat !== undefined ? `background-repeat: ${progressbarGlobalBgImageRepeat};` : ''}
                    ${progressbarGlobalBgImageSize !== undefined ? `background-size: ${progressbarGlobalBgImageSize};` : ''}
                    `
                    : progressbarGlobalBgClassicColor ? `background: ${progressbarGlobalBgClassicColor};` : ''
            }
            ${progressbarGlobalBoxShadowCssValue ? `box-shadow: ${progressbarGlobalBoxShadowCssValue};` : ''}
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item {
            display: flex;
            flex-direction: column;
            ${progressbarType === 'vertical' && progressbarVrAlignment?.Desktop === 'left' ? `align-items: flex-start;` : ''}
            ${progressbarType === 'vertical' && progressbarVrAlignment?.Desktop === 'center' ? `align-items: center;` : ''}
            ${progressbarType === 'vertical' && progressbarVrAlignment?.Desktop === 'right' ? `align-items: flex-end;` : ''}
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-content .fb-progressbar-label {
            ${progressTitleColor ? `color: ${progressTitleColor};` : ''}

            ${progressTitleGlobalTypoSwitcher?.fontFamily === true && progressTitleGlobalTypographyData?.fontFamily ? `font-family: ${progressTitleGlobalTypographyData?.fontFamily};` : ''}
            ${progressTitleGlobalTypoSwitcher?.fontSize === true && progressTitleGlobalTypographyData?.fontSize ? `font-size: ${progressTitleGlobalTypographyData?.fontSize};` : ''}
            ${progressTitleGlobalTypoSwitcher?.fontWeight === true && progressTitleGlobalTypographyData?.fontWeight ? `font-weight: ${progressTitleGlobalTypographyData?.fontWeight};` : ''}
            ${progressTitleGlobalTypoSwitcher?.fontStyle === true && progressTitleGlobalTypographyData?.fontStyle ? `font-style: ${progressTitleGlobalTypographyData?.fontStyle};` : ''}
            ${progressTitleGlobalTypoSwitcher?.textTransform === true && progressTitleGlobalTypographyData?.textTransform ? `text-transform: ${progressTitleGlobalTypographyData?.textTransform};` : ''}
            ${progressTitleGlobalTypoSwitcher?.textDecoration === true && progressTitleGlobalTypographyData?.textDecoration ? `text-decoration: ${progressTitleGlobalTypographyData?.textDecoration};` : ''}
            ${progressTitleGlobalTypoSwitcher?.letterSpacing === true && progressTitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${progressTitleGlobalTypographyData?.letterSpacing};` : ''}
            ${progressTitleGlobalTypoSwitcher?.lineHeight === true && progressTitleGlobalTypographyData?.lineHeight ? `line-height: ${progressTitleGlobalTypographyData?.lineHeight};` : ''}

            ${progressTitleGlobalTypoSwitcher?.fontFamily === false && progressTitleFontFamily && progressTitleFontFamily !== 'Default' ? `font-family: ${progressTitleFontFamily};` : ''}
            ${progressTitleGlobalTypoSwitcher?.fontSize === false && progressTitleFontSize?.Desktop && progressTitleFontSizeUnits?.Desktop ? `font-size: ${progressTitleFontSize?.Desktop}${progressTitleFontSizeUnits?.Desktop};` : ''}
            ${progressTitleGlobalTypoSwitcher?.fontWeight === false && progressTitleFontWeight ? `font-weight: ${progressTitleFontWeight};` : ''}
            ${progressTitleGlobalTypoSwitcher?.fontStyle === false && progressTitleFontStyle ? `font-style: ${progressTitleFontStyle};` : ''}
            ${progressTitleGlobalTypoSwitcher?.textTransform === false && progressTitleTextTransform ? `text-transform: ${progressTitleTextTransform};` : ''}
            ${progressTitleGlobalTypoSwitcher?.textDecoration === false && progressTitleTextDecoration ? `text-decoration: ${progressTitleTextDecoration};` : ''}
            ${progressTitleGlobalTypoSwitcher?.letterSpacing === false && progressTitleLetterSpacing?.Desktop && progressTitleLetterSpacingUnits?.Desktop ? `letter-spacing: ${progressTitleLetterSpacing?.Desktop}${progressTitleLetterSpacingUnits?.Desktop};` : ''}
            ${progressTitleGlobalTypoSwitcher?.lineHeight === false && progressTitleLineHeight?.Desktop && progressTitleLineHeightUnits?.Desktop ? `line-height: ${progressTitleLineHeight?.Desktop}${progressTitleLineHeightUnits?.Desktop};` : ''}
        
            ${progressTitleMarginDesktop?.top ? `margin: ${progressTitleMarginDesktopGet};` : ''}
            transition: all 0.5s ease-in-out;
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item:hover .fb-progressbar-content .fb-progressbar-label {
            ${progressTitleHoverColor ? `color: ${progressTitleHoverColor};` : ''}
            transition: all 0.5s ease-in-out;
        }

        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-line-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            ${
                progressBgZebraTrackSwitcher === false && progressBgColorType === "gradient"
                    ? `background: ${
                        progressBgCustomGradientSwitcher && progressBgCustomGradientInputValue
                        ? progressBgCustomGradientInputValue
                        : progressBgGradientColor
                    };`
                    : progressBgImageUrl !== undefined && progressBgImageUrl !== null && progressBgImageUrl !== ""
                    ? `
                    ${progressBgImageUrl !== undefined ? `background-image: url(${progressBgImageUrl});` : ''}
                    ${progressBgImagePosition !== undefined ? `background-position: ${progressBgImagePosition};` : ''}
                    ${progressBgImageAttachment !== undefined ? `background-attachment: ${progressBgImageAttachment};` : ''}
                    ${progressBgImageRepeat !== undefined ? `background-repeat: ${progressBgImageRepeat};` : ''}
                    ${progressBgImageSize !== undefined ? `background-size: ${progressBgImageSize};` : ''}
                    `
                    : progressBgColor ? `background: ${progressBgColor};` : ''
            }
            ${progressBgZebraTrackSwitcher === true ? `background: repeating-linear-gradient(-45deg, ${progressBgColor}, ${progressBgColor} ${progressBgZebraTrackWidth?.Desktop}px, transparent ${progressBgZebraTrackWidth?.Desktop}px, transparent calc(${progressBgZebraTrackWidth?.Desktop * 2}px));` : ''};
            ${progressBgBorderStyle ? `border-style: ${progressBgBorderStyle};` : ''}
            ${progressBgBorderColor ? `border-color: ${progressBgBorderColor};` : ''}
            ${progressBgBorderWidthDesktop?.top ? `border-width: ${progressBgBorderWidthDesktopGet};` : ''}
            ${progressBgBorderRadiusDesktop?.top ? `border-radius: ${progressBgBorderRadiusDesktopGet};` : ''}
            ${progressBarHeight?.Desktop ? `height: ${progressBarHeight?.Desktop}${progressBarHeightUnits?.Desktop};` : ''}
            ${progressbarType === 'vertical' && progressBarWidth?.Desktop ? `width: ${progressBarWidth?.Desktop}${progressBarWidthUnits?.Desktop};` : ''}
            overflow: hidden;
            position: relative;
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item:hover .fb-progressbar-line-wrapper {
            ${progressBgBorderHoverColor ? `border-color: ${progressBgBorderHoverColor};` : ''}
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-line-wrapper .fb-progressbar-content {
            position: relative;
            z-index: 5;
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-line-wrapper .fb-progressbar-line {
            position: absolute;
            left: 0;
            bottom: 0;
            ${
                progressZebraTrackSwitcher === false && progressColorType === "gradient"
                    ? `background: ${
                        progressCustomGradientSwitcher && progressCustomGradientInputValue
                        ? progressCustomGradientInputValue
                        : progressGradientColor
                    };`
                    : progressImageUrl !== undefined && progressImageUrl !== null && progressImageUrl !== ""
                    ? `
                    ${progressImageUrl !== undefined ? `background-image: url(${progressImageUrl});` : ''}
                    ${progressImagePosition !== undefined ? `background-position: ${progressImagePosition};` : ''}
                    ${progressImageAttachment !== undefined ? `background-attachment: ${progressImageAttachment};` : ''}
                    ${progressImageRepeat !== undefined ? `background-repeat: ${progressImageRepeat};` : ''}
                    ${progressImageSize !== undefined ? `background-size: ${progressImageSize};` : ''}
                    `
                    : progressColor ? `background: ${progressColor};` : ''
            }
            ${progressZebraTrackSwitcher === true ? `background: repeating-linear-gradient(-45deg, ${progressColor}, ${progressColor} ${progressZebraTrackWidth?.Desktop}px, transparent ${progressZebraTrackWidth?.Desktop}px, transparent calc(${progressZebraTrackWidth?.Desktop * 2}px));` : ''};
            ${progressBorderStyle ? `border-style: ${progressBorderStyle};` : ''}
            ${progressBorderColor ? `border-color: ${progressBorderColor};` : ''}
            ${progressBorderWidthDesktop?.top ? `border-width: ${progressBorderWidthDesktopGet};` : ''}
            ${progressBorderRadiusDesktop?.top ? `border-radius: ${progressBorderRadiusDesktopGet};` : ''}
            box-sizing: border-box;
            transition: ${progressbarType === 'vertical' ? 'height' : 'width'} 1.5s ease-in-out;
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item:hover .fb-progressbar-line-wrapper .fb-progressbar-line {
            ${progressBorderHoverColor ? `border-color: ${progressBorderHoverColor};` : ''}
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-line-wrapper .fb-progressbar-line .fb-progressbar-number {
            position: absolute;
            ${progressbarType === 'horizontal' && progressTextPosition === 'text-outSide' && progressNumberPosition === 'with-progressbar' ? `top: 0; right: 0;` : ''}
            ${progressbarType === 'horizontal' && progressTextPosition === 'text-inSide' && progressNumberPosition === 'with-progressbar' ? `right: 0; top: 50%; transform: translateY(-50%);` : ''}
            ${progressbarType === 'vertical' && progressNumberPosition === 'with-progressbar' ? `top: 0; left: 50%; transform: translateX(-50%);` : ''}
            transition: ${progressbarType === 'vertical' ? 'top' : 'left'} 1.5s ease-in-out;
            z-index: 10;
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-number {
            ${progressNumberGlobalTypoSwitcher?.fontFamily === true && progressNumberGlobalTypographyData?.fontFamily ? `font-family: ${progressNumberGlobalTypographyData?.fontFamily};` : ''}
            ${progressNumberGlobalTypoSwitcher?.fontSize === true && progressNumberGlobalTypographyData?.fontSize ? `font-size: ${progressNumberGlobalTypographyData?.fontSize};` : ''}
            ${progressNumberGlobalTypoSwitcher?.fontWeight === true && progressNumberGlobalTypographyData?.fontWeight ? `font-weight: ${progressNumberGlobalTypographyData?.fontWeight};` : ''}
            ${progressNumberGlobalTypoSwitcher?.fontStyle === true && progressNumberGlobalTypographyData?.fontStyle ? `font-style: ${progressNumberGlobalTypographyData?.fontStyle};` : ''}
            ${progressNumberGlobalTypoSwitcher?.textTransform === true && progressNumberGlobalTypographyData?.textTransform ? `text-transform: ${progressNumberGlobalTypographyData?.textTransform};` : ''}
            ${progressNumberGlobalTypoSwitcher?.textDecoration === true && progressNumberGlobalTypographyData?.textDecoration ? `text-decoration: ${progressNumberGlobalTypographyData?.textDecoration};` : ''}
            ${progressNumberGlobalTypoSwitcher?.letterSpacing === true && progressNumberGlobalTypographyData?.letterSpacing ? `letter-spacing: ${progressNumberGlobalTypographyData?.letterSpacing};` : ''}
            ${progressNumberGlobalTypoSwitcher?.lineHeight === true && progressNumberGlobalTypographyData?.lineHeight ? `line-height: ${progressNumberGlobalTypographyData?.lineHeight};` : ''}

            ${progressNumberGlobalTypoSwitcher?.fontFamily === false && progressNumberFontFamily && progressNumberFontFamily !== 'Default' ? `font-family: ${progressNumberFontFamily};` : ''}
            ${progressNumberGlobalTypoSwitcher?.fontSize === false && progressNumberFontSize?.Desktop && progressNumberFontSizeUnits?.Desktop ? `font-size: ${progressNumberFontSize?.Desktop}${progressNumberFontSizeUnits?.Desktop};` : ''}
            ${progressNumberGlobalTypoSwitcher?.fontWeight === false && progressNumberFontWeight ? `font-weight: ${progressNumberFontWeight};` : ''}
            ${progressNumberGlobalTypoSwitcher?.fontStyle === false && progressNumberFontStyle ? `font-style: ${progressNumberFontStyle};` : ''}
            ${progressNumberGlobalTypoSwitcher?.textTransform === false && progressNumberTextTransform ? `text-transform: ${progressNumberTextTransform};` : ''}
            ${progressNumberGlobalTypoSwitcher?.textDecoration === false && progressNumberTextDecoration ? `text-decoration: ${progressNumberTextDecoration};` : ''}
            ${progressNumberGlobalTypoSwitcher?.letterSpacing === false && progressNumberLetterSpacing?.Desktop && progressNumberLetterSpacingUnits?.Desktop ? `letter-spacing: ${progressNumberLetterSpacing?.Desktop}${progressNumberLetterSpacingUnits?.Desktop};` : ''}
            ${progressNumberGlobalTypoSwitcher?.lineHeight === false && progressNumberLineHeight?.Desktop && progressNumberLineHeightUnits?.Desktop ? `line-height: ${progressNumberLineHeight?.Desktop}${progressNumberLineHeightUnits?.Desktop};` : ''}
        
            ${progressNumberMarginDesktop?.top ? `margin: ${progressNumberMarginDesktopGet};` : ''}
            ${progressNumberColor ? `color: ${progressNumberColor};` : ''}
            transition: all 0.5s ease-in-out;
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item:hover .fb-progressbar-number {
            ${progressNumberHoverColor ? `color: ${progressNumberHoverColor};` : ''}
            transition: all 0.5s ease-in-out;
        }

        @media only screen and (max-width: 1024px) {

            .${blockID}.fb-progressbar-main-wrapper {
                ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarHZOrientationType === 'left' && progressbarHZLeftOffset?.Tablet !== undefined ? `left: ${progressbarHZLeftOffset?.Tablet}${progressbarHZLeftOffsetUnits?.Tablet};` : ''}
                ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarHZOrientationType === 'right' && progressbarHZRightOffset?.Tablet !== undefined ? `right: ${progressbarHZRightOffset?.Tablet}${progressbarHZRightOffsetUnits?.Tablet};` : ''}
                ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarVROrientationType === 'top' && progressbarVRTopOffset?.Tablet !== undefined ? `top: ${progressbarVRTopOffset?.Tablet}${progressbarVRTopOffsetUnits?.Tablet};` : ''}
                ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarVROrientationType === 'bottom' && progressbarVRBottomOffset.Tablet !== undefined ? `bottom: ${progressbarVRBottomOffset.Tablet}${progressbarVRBottomOffsetUnits.Tablet};` : ''}
                ${progressGlobalZIndex?.Tablet ? `z-index: ${progressGlobalZIndex?.Tablet};` : ''}
            }

            .${blockID} .fb-progressbar-wrapper {
                ${progressbarGlobalPaddingTablet?.top ? `padding: ${progressbarGlobalPaddingTabletGet};` : ''}
                ${progressbarGlobalMarginTablet?.top ? `margin: ${progressbarGlobalMarginTabletGet};` : ''}
                ${progressbarGlobalTabletBorder?.top ? `border-width: ${progressbarGlobalTabletBorderGet};` : ''}
                ${progressbarGlobalTabletBorderRadius?.top ? `border-radius: ${progressbarGlobalTabletBorderRadiusGet};` : ''}
            }
            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item {
                ${progressbarType === 'vertical' && progressbarVrAlignment?.Tablet === 'left' ? `align-items: flex-start;` : ''}
                ${progressbarType === 'vertical' && progressbarVrAlignment?.Tablet === 'center' ? `align-items: center;` : ''}
                ${progressbarType === 'vertical' && progressbarVrAlignment?.Tablet === 'right' ? `align-items: flex-end;` : ''}
            }
            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-content .fb-progressbar-label {
                ${progressTitleGlobalTypoSwitcher?.fontSize === false && progressTitleFontSize?.Tablet && progressTitleFontSizeUnits?.Tablet ? `font-size: ${progressTitleFontSize?.Tablet}${progressTitleFontSizeUnits?.Tablet};` : ''}
                ${progressTitleGlobalTypoSwitcher?.letterSpacing === false && progressTitleLetterSpacing?.Tablet && progressTitleLetterSpacingUnits?.Tablet ? `letter-spacing: ${progressTitleLetterSpacing?.Tablet}${progressTitleLetterSpacingUnits?.Tablet};` : ''}
                ${progressTitleGlobalTypoSwitcher?.lineHeight === false && progressTitleLineHeight?.Tablet && progressTitleLineHeightUnits?.Tablet ? `line-height: ${progressTitleLineHeight?.Tablet}${progressTitleLineHeightUnits?.Tablet};` : ''}
            
                ${progressTitleMarginTablet?.top ? `margin: ${progressTitleMarginTabletGet};` : ''}
            }

            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-line-wrapper {
                ${progressBgZebraTrackSwitcher === true ? `background: repeating-linear-gradient(-45deg, ${progressBgColor}, ${progressBgColor} ${progressBgZebraTrackWidth?.Tablet}px, transparent ${progressBgZebraTrackWidth?.Tablet}px, transparent calc(${progressBgZebraTrackWidth?.Tablet * 2}px));` : ''};
                ${progressBgBorderWidthTablet?.top ? `border-width: ${progressBgBorderWidthTabletGet};` : ''}
                ${progressBgBorderRadiusTablet?.top ? `border-radius: ${progressBgBorderRadiusTabletGet};` : ''}
                ${progressBarHeight.Tablet ? `height: ${progressBarHeight.Tablet}${progressBarHeightUnits.Tablet};` : ''}
                ${progressbarType === 'vertical' && progressBarWidth?.Tablet ? `width: ${progressBarWidth?.Tablet}${progressBarWidthUnits?.Tablet};` : ''}
            }
            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-line-wrapper .fb-progressbar-line {
                ${progressZebraTrackSwitcher === true ? `background: repeating-linear-gradient(-45deg, ${progressColor}, ${progressColor} ${progressZebraTrackWidth?.Tablet}px, transparent ${progressZebraTrackWidth?.Tablet}px, transparent calc(${progressZebraTrackWidth?.Tablet * 2}px));` : ''};
                ${progressBorderWidthTablet?.top ? `border-width: ${progressBorderWidthTabletGet};` : ''}
                ${progressBorderRadiusTablet?.top ? `border-radius: ${progressBorderRadiusTabletGet};` : ''}
            }
            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-number {
                ${progressNumberGlobalTypoSwitcher?.fontSize === false && progressNumberFontSize?.Tablet && progressNumberFontSizeUnits?.Tablet ? `font-size: ${progressNumberFontSize?.Tablet}${progressNumberFontSizeUnits?.Tablet};` : ''}
                ${progressNumberGlobalTypoSwitcher?.letterSpacing === false && progressNumberLetterSpacing?.Tablet && progressNumberLetterSpacingUnits?.Tablet ? `letter-spacing: ${progressNumberLetterSpacing?.Tablet}${progressNumberLetterSpacingUnits?.Tablet};` : ''}
                ${progressNumberGlobalTypoSwitcher?.lineHeight === false && progressNumberLineHeight?.Tablet && progressNumberLineHeightUnits?.Tablet ? `line-height: ${progressNumberLineHeight?.Tablet}${progressNumberLineHeightUnits?.Tablet};` : ''}
            
                ${progressNumberMarginTablet?.top ? `margin: ${progressNumberMarginTabletGet};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {

            .${blockID}.fb-progressbar-main-wrapper {
                ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarHZOrientationType === 'left' && progressbarHZLeftOffset?.Mobile !== undefined ? `left: ${progressbarHZLeftOffset?.Mobile}${progressbarHZLeftOffsetUnits?.Mobile};` : ''}
                ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarHZOrientationType === 'right' && progressbarHZRightOffset?.Mobile !== undefined ? `right: ${progressbarHZRightOffset?.Mobile}${progressbarHZRightOffsetUnits?.Mobile};` : ''}
                ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarVROrientationType === 'top' && progressbarVRTopOffset?.Mobile !== undefined ? `top: ${progressbarVRTopOffset?.Mobile}${progressbarVRTopOffsetUnits?.Mobile};` : ''}
                ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarVROrientationType === 'bottom' && progressbarVRBottomOffset?.Mobile !== undefined ? `bottom: ${progressbarVRBottomOffset?.Mobile}${progressbarVRBottomOffsetUnits?.Mobile};` : ''} 
                ${progressGlobalZIndex?.Mobile ? `z-index: ${progressGlobalZIndex?.Mobile};` : ''}
            }

            .${blockID} .fb-progressbar-wrapper {
                ${progressbarGlobalPaddingMobile?.top ? `padding: ${progressbarGlobalPaddingMobileGet};` : ''}
                ${progressbarGlobalMarginMobile?.top ? `margin: ${progressbarGlobalMarginMobileGet};` : ''}
                ${progressbarGlobalMobileBorder?.top ? `border-width: ${progressbarGlobalMobileBorderGet};` : ''}
                ${progressbarGlobalMobileBorderRadius?.top ? `border-radius: ${progressbarGlobalMobileBorderRadiusGet};` : ''}
            }
            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item {
                ${progressbarType === 'vertical' && progressbarVrAlignment?.Mobile === 'left' ? `align-items: flex-start;` : ''}
                ${progressbarType === 'vertical' && progressbarVrAlignment?.Mobile === 'center' ? `align-items: center;` : ''}
                ${progressbarType === 'vertical' && progressbarVrAlignment?.Mobile === 'right' ? `align-items: flex-end;` : ''}
            }
            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-content .fb-progressbar-label {
                ${progressTitleGlobalTypoSwitcher?.fontSize === false && progressTitleFontSize?.Mobile && progressTitleFontSizeUnits?.Mobile ? `font-size: ${progressTitleFontSize?.Mobile}${progressTitleFontSizeUnits?.Mobile};` : ''}
                ${progressTitleGlobalTypoSwitcher?.letterSpacing === false && progressTitleLetterSpacing?.Mobile && progressTitleLetterSpacingUnits?.Mobile ? `letter-spacing: ${progressTitleLetterSpacing?.Mobile}${progressTitleLetterSpacingUnits?.Mobile};` : ''}
                ${progressTitleGlobalTypoSwitcher?.lineHeight === false && progressTitleLineHeight?.Mobile && progressTitleLineHeightUnits?.Mobile ? `line-height: ${progressTitleLineHeight?.Mobile}${progressTitleLineHeightUnits?.Mobile};` : ''}
            
                ${progressTitleMarginTablet?.top ? `margin: ${progressTitleMarginTabletGet};` : ''}
            }

            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-line-wrapper {
                ${progressBgZebraTrackSwitcher === true ? `background: repeating-linear-gradient(-45deg, ${progressBgColor}, ${progressBgColor} ${progressBgZebraTrackWidth?.Mobile}px, transparent ${progressBgZebraTrackWidth?.Mobile}px, transparent calc(${progressBgZebraTrackWidth?.Mobile * 2}px));` : ''};
                ${progressBgBorderWidthMobile?.top ? `border-width: ${progressBgBorderWidthMobileGet};` : ''}
                ${progressBgBorderRadiusMobile?.top ? `border-radius: ${progressBgBorderRadiusMobileGet};` : ''}
                ${progressBarHeight?.Mobile ? `height: ${progressBarHeight?.Mobile}${progressBarHeightUnits?.Mobile};` : ''}
                ${progressbarType === 'vertical' && progressBarWidth?.Mobile ? `width: ${progressBarWidth?.Mobile}${progressBarWidthUnits?.Mobile};` : ''}
            }
            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-line-wrapper .fb-progressbar-line {
                ${progressZebraTrackSwitcher === true ? `background: repeating-linear-gradient(-45deg, ${progressColor}, ${progressColor} ${progressZebraTrackWidth?.Mobile}px, transparent ${progressZebraTrackWidth?.Mobile}px, transparent calc(${progressZebraTrackWidth?.Mobile * 2}px));` : ''};
                ${progressBorderWidthMobile?.top ? `border-width: ${progressBorderWidthMobileGet};` : ''}
                ${progressBorderRadiusMobile?.top ? `border-radius: ${progressBorderRadiusMobileGet};` : ''}
            }
            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-number {
                ${progressNumberGlobalTypoSwitcher?.fontSize === false && progressNumberFontSize?.Mobile && progressNumberFontSizeUnits?.Mobile ? `font-size: ${progressNumberFontSize?.Mobile}${progressNumberFontSizeUnits?.Mobile};` : ''}
                ${progressNumberGlobalTypoSwitcher?.letterSpacing === false && progressNumberLetterSpacing?.Mobile && progressNumberLetterSpacingUnits?.Mobile ? `letter-spacing: ${progressNumberLetterSpacing?.Mobile}${progressNumberLetterSpacingUnits?.Mobile};` : ''}
                ${progressNumberGlobalTypoSwitcher?.lineHeight === false && progressNumberLineHeight?.Mobile && progressNumberLineHeightUnits?.Mobile ? `line-height: ${progressNumberLineHeight?.Mobile}${progressNumberLineHeightUnits?.Mobile};` : ''}
            
                ${progressNumberMarginMobile?.top ? `margin: ${progressNumberMarginMobileGet};` : ''}
            }
        }

    `;

    const customCss = getCustomCss(progressGlobalCustomCSS, `.${blockID} `);
    return `${progressbarBlockStyle} ${customCss} `.replace(/\s+/g, ' ').trim();
}
export default generateProgressbarStyle;