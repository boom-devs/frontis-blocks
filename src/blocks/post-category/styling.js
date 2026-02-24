/**
 * Post Category Block-Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Helper function to calculate inner padding
 */
const calculateInnerPadding = (originalValue, unit) => {
    const calculatedValue = Math.max(10, (originalValue * 10) / 24);
    return `${calculatedValue}${unit}`;
};

/**
 * Generate block styles from attributes
 * @param {Object} attributes-Block attributes
 * @returns {string} CSS string
 */
const generatePostCategoryStyle = (attributes) => {
    const {
        blockID,
        blockStyle,
        premadeStyle,
        taxonomyType,
        showAuthor,
        authorAvatarSize,
        authorAvatarSizeUnits,
        authorAvatarGaps,
        authorAvatarGapUnits,
        showLabel,
        showCount,
        showDescription,
        showEmpty,
        showChildCategories,
        selectionType,
        includeTaxonomies,
        excludeTaxonomies,
        orderBy,
        sortOrder,
        perPage,

        layoutType,
        gridColumns,
        gridGapUnits,
        gridRowGap,
        gridColumnGap,
        listStyle,
        listIndentation,
        listIndentationUnits,
        postCategoryGlobalCustomCSS,

        readMoreSwitcher,
        readMoreText,
        readMoreIconAlign,
        readMoreIcon,
        readMoreIconFrontend,
        readMoreIconImageUrl,
        readMoreIconImageAlt,
        readMoreIconImageID,

        readMoreIconImagedisplay,

        /* Position */
        postCategoryPositionType,
        postCategoryHZOrientationType,
        postCategoryVROrientationType,
        postCategoryHZLeftOffset,
        postCategoryHZLeftOffsetUnits,
        postCategoryHZRightOffset,
        postCategoryHZRightOffsetUnits,
        postCategoryVRTopOffset,
        postCategoryVRTopOffsetUnits,
        postCategoryVRBottomOffset,
        postCategoryVRBottomOffsetUnits,

        /** Start Grid */

        taxonomyHeight,
        taxonomyHeightUnits,

        postCategoryPaddingUnits,
        postCategoryPaddingDesktop,
        postCategoryPaddingTablet,
        postCategoryPaddingMobile,
        postCategoryPaddingLink,

        postCategoryMarginUnits,
        postCategoryMarginDesktop,
        postCategoryMarginTablet,
        postCategoryMarginMobile,
        postCategoryMarginLink,

        /** Background */
        postCategoryBgColorSwitcher,
        postCategoryNormalBackgroundType,
        postCategoryNormalClassicColor,
        postCategoryNormalGradientColor,
        postCategoryNormalCustomGradientSwitcher,
        postCategoryNormalCustomGradientInputValue,
        postCategoryHoverBackgroundType,
        postCategoryHoverClassicColor,
        postCategoryHoverGradientColor,
        postCategoryHoverCustomGradientSwitcher,
        postCategoryHoverCustomGradientInputValue,

        /** Border */
        postCategoryBorder,
        postCategoryBorderColorSwitcher,
        postCategoryBorderColor,
        postCategoryBorderHoverColor,
        postCategoryBorderUnits,
        postCategoryBorderDesktop,
        postCategoryBorderTablet,
        postCategoryBorderMobile,
        postCategoryBorderLink,

        /** Border Radius */
        postCategoryBorderRadiusUnits,
        postCategoryBorderRadiusDesktop,
        postCategoryBorderRadiusTablet,
        postCategoryBorderRadiusMobile,
        postCategoryBorderRadiusLink,

        /** Box Shadow */
        postCategoryBoxShadowSwitcher,
        postCategoryBoxShadowValues,
        postCategoryBoxShadowCssValue,
        postCategoryBoxShadowHoverValues,
        postCategoryBoxShadowHoverCssValue,

        /** Start title     */
        postTitleGlobalTypoSwitcher,
        postTitleGlobalTypographyData,
        postTitleGlobalTypoType,
        postTitleGlobalTypoOption,
        postTitleFontFamily,
        postTitleFontSize,
        postTitleFontSizeUnits,
        postTitleFontWeight,
        postTitleFontStyle,
        postTitleTextTransform,
        postTitleTextDecoration,
        postTitleLetterSpacing,
        postTitleLetterSpacingUnits,
        postTitleLineHeight,
        postTitleLineHeightUnits,

        postTitleColorSwitcher,
        postTitleColor,
        postTitleHoverColor,
        /** End title */

        /** Start Author Name     */
        authorNameGlobalTypoSwitcher,
        authorNameGlobalTypographyData,
        authorNameGlobalTypoType,
        authorNameGlobalTypoOption,
        authorNameFontFamily,
        authorNameFontSize,
        authorNameFontSizeUnits,
        authorNameFontWeight,
        authorNameFontStyle,
        authorNameTextTransform,
        authorNameTextDecoration,
        authorNameLetterSpacing,
        authorNameLetterSpacingUnits,
        authorNameLineHeight,
        authorNameLineHeightUnits,

        authorNameColorSwitcher,
        authorNameColor,
        authorNameHoverColor,

        postAuthorMarginUnits,
        postAuthorMarginDesktop,
        postAuthorMarginTablet,
        postAuthorMarginMobile,
        postAuthorMarginLink,
        /** End Author Name */

        /** Start description     */
        postDescriptionGlobalTypoSwitcher,
        postDescriptionGlobalTypographyData,
        postDescriptionGlobalTypoType,
        postDescriptionGlobalTypoOption,
        postDescriptionFontFamily,
        postDescriptionFontSize,
        postDescriptionFontSizeUnits,
        postDescriptionFontWeight,
        postDescriptionFontStyle,
        postDescriptionTextTransform,
        postDescriptionTextDecoration,
        postDescriptionLetterSpacing,
        postDescriptionLetterSpacingUnits,
        postDescriptionLineHeight,
        postDescriptionLineHeightUnits,

        postDescriptionColorSwitcher,
        postDescriptionColor,
        postDescriptionHoverColor,

        postDescriptionSpacing,
        postDescriptionSpacingUnits,

        postDescriptionExcerptLength,
        /** End description */

        /** Start count     */
        postCountGlobalTypoSwitcher,
        postCountGlobalTypographyData,
        postCountGlobalTypoType,
        postCountGlobalTypoOption,
        postCountFontFamily,
        postCountFontSize,
        postCountFontSizeUnits,
        postCountFontWeight,
        postCountFontStyle,
        postCountTextTransform,
        postCountTextDecoration,
        postCountLetterSpacing,
        postCountLetterSpacingUnits,
        postCountLineHeight,
        postCountLineHeightUnits,

        postCountColorSwitcher,
        postCountColor,
        postCountHoverColor,

        postCountSpacing,
        postCountSpacingUnits,
        labelGaps,
        labelGapUnits,
        /** End count */

        /** Start Read More Button style */
        buttonWidth,
        buttonWidthUnits,

        buttonGlobalTypoSwitcher,
        buttonGlobalTypographyData,
        buttonGlobalTypoType,
        buttonGlobalTypoOption,
        buttonFontFamily,
        buttonFontSize,
        buttonFontSizeUnits,
        buttonFontWeight,
        buttonFontStyle,
        buttonTextTransform,
        buttonTextDecoration,
        buttonLetterSpacing,
        buttonLetterSpacingUnits,
        buttonLineHeight,
        buttonLineHeightUnits,

        buttonColorSwitcher,
        buttonColor,
        buttonHoverColor,
        buttonBgColorSwitcher,
        buttonBgColor,
        buttonBgHoverColor,
        buttonBorder,
        buttonBorderColorSwitcher,
        buttonBorderColor,
        buttonBorderHoverColor,

        buttonBorderUnits,
        buttonDesktopBorderWidth,
        buttonTabBorderWidth,
        buttonMobileBorderWidth,
        buttonBorderLink,

        buttonBorderRadiusUnits,
        buttonDesktopBorderRadiusWidth,
        buttonTabBorderRadiusWidth,
        buttonMobileBorderRadiusWidth,
        buttonBorderRadiusLink,

        buttonBoxShadowSwitcher,
        buttonBoxShadowValues,
        buttonBoxShadowCssValue,
        buttonBoxShadowHoverValues,
        buttonBoxShadowHoverCssValue,

        buttonPaddingUnits,
        buttonDesktopPadding,
        buttonTabPadding,
        buttonMobilePadding,
        buttonPaddingLink,

        buttonMarginUnits,
        buttonDesktopMargin,
        buttonTabMargin,
        buttonMobileMargin,
        buttonMarginLink,

        buttonIconSize,
        buttonIconSizeUnits,
        buttonIconColorSwitcher,
        buttonIconColor,
        buttonIconHoverColor,
        buttonIconBgColorSwitcher,
        buttonIconBgColor,
        buttonIconBgHoverColor,
        buttonIconBorder,
        buttonIconBorderColorSwitcher,
        buttonIconBorderColor,
        buttonIconBorderHoverColor,
        buttonIconBorderUnits,
        buttonIconBorderDesktop,
        buttonIconBorderTablet,
        buttonIconBorderMobile,
        buttonIconBorderLink,
        buttonIconBorderRadiusUnits,
        buttonIconBorderRadiusDesktop,
        buttonIconBorderRadiusTablet,
        buttonIconBorderRadiusMobile,
        buttonIconBorderRadiusLink,

        buttonIconPaddingUnits,
        buttonIconDesktopPadding,
        buttonIconTabPadding,
        buttonIconMobilePadding,
        buttonIconPaddingLink,

        buttonIconGapSize,
        buttonIconGapUnits,
        buttonIconRotateSwitcher,
        buttonIconRotate,
        buttonIconRotateHover,
        buttonImageRotateSwitcher,
        buttonImageRotate,
        buttonImageRotateHover,

        buttonIconImageWidth,
        buttonIconImageWidthUnits,
        buttonIconImageHeight,
        buttonIconImageHeightUnits,
        /** Read More Button */

        /** Start List Layout */
        postListTypeColorSwitcher,
        postListTypeColor,
        postListTypeHoverColor,

        postListItemSpacing,
        postListItemSpacingUnits,

        separatorStyle,
        separatorThickness,
        separatorThicknessUnits,
        separatorWidth,
        separatorWidthUnits,
        separatorColorSwitcher,
        separatorColor,
        separatorHoverColor,

        postCountBgColorSwitcher,
        postCountNormalBackgroundType,
        postCountNormalClassicColor,
        postCountNormalGradientColor,
        postCountNormalCustomGradientSwitcher,
        postCountNormalCustomGradientInputValue,
        postCountHoverBackgroundType,
        postCountHoverClassicColor,
        postCountHoverGradientColor,
        postCountHoverCustomGradientSwitcher,
        postCountHoverCustomGradientInputValue,

        postCountPaddingUnits,
        postCountPaddingDesktop,
        postCountPaddingTablet,
        postCountPaddingMobile,
        postCountPaddingLink,

        postCountBorder,
        postCountBorderColorSwitcher,
        postCountBorderColor,
        postCountBorderHoverColor,
        postCountBorderUnits,
        postCountBorderDesktop,
        postCountBorderTablet,
        postCountBorderMobile,
        postCountBorderLink,

        postCountBorderRadiusUnits,
        postCountBorderRadiusDesktop,
        postCountBorderRadiusTablet,
        postCountBorderRadiusMobile,
        postCountBorderRadiusLink,

        postCountBoxShadowSwitcher,
        postCountBoxShadowValues,
        postCountBoxShadowCssValue,
        postCountBoxShadowHoverValues,
        postCountBoxShadowHoverCssValue,
        /** End List Layout */

        /** Start Global Setting */
        postGlobalZIndex,
        postCategoryOverflow,
        postCategoryGlobalWraperID,
        postCategoryGlobalWraperClass,

        postGlobalPaddingUnits,
        postGlobalPaddingDesktop,
        postGlobalPaddingTablet,
        postGlobalPaddingMobile,
        postGlobalPaddingLink,

        postGlobalMarginUnits,
        postGlobalMarginDesktop,
        postGlobalMarginTablet,
        postGlobalMarginMobile,
        postGlobalMarginLink,

        postGlobalBgColorSwitcher,
        postGlobalNormalBackgroundType,
        postGlobalNormalClassicColor,
        postGlobalNormalGradientColor,
        postGlobalNormalCustomGradientSwitcher,
        postGlobalNormalCustomGradientInputValue,

        postGlobalHoverBackgroundType,
        postGlobalHoverClassicColor,
        postGlobalHoverGradientColor,
        postGlobalHoverCustomGradientSwitcher,
        postGlobalHoverCustomGradientInputValue,

        postGlobalBorder,
        postGlobalBorderColorSwitcher,
        postGlobalBorderColor,
        postGlobalBorderHoverColor,

        postGlobalBorderUnits,
        postGlobalBorderDesktop,
        postGlobalBorderTablet,
        postGlobalBorderMobile,
        postGlobalBorderLink,

        postGlobalBorderRadiusUnits,
        postGlobalBorderRadiusDesktop,
        postGlobalBorderRadiusTablet,
        postGlobalBorderRadiusMobile,
        postGlobalBorderRadiusLink,

        postGlobalBoxShadowSwitcher,
        postGlobalBoxShadowValues,
        postGlobalBoxShadowCssValue,
        postGlobalBoxShadowHoverValues,
        postGlobalBoxShadowHoverCssValue,
        /** End Global Setting */

        postCategoryDesktopSwitcher,
        postCategoryTabletSwitcher,
        postCategoryMobileSwitcher,
    } = attributes;

    const postAuthorMarginDesktopWidth = `${postAuthorMarginDesktop.top}${postAuthorMarginUnits.Desktop} ${postAuthorMarginDesktop.right}${postAuthorMarginUnits.Desktop} ${postAuthorMarginDesktop.bottom}${postAuthorMarginUnits.Desktop} ${postAuthorMarginDesktop.left}${postAuthorMarginUnits.Desktop}`;
    const postAuthorMarginTabletWidth = `${postAuthorMarginTablet.top}${postAuthorMarginUnits.Tablet} ${postAuthorMarginTablet.right}${postAuthorMarginUnits.Tablet} ${postAuthorMarginTablet.bottom}${postAuthorMarginUnits.Tablet} ${postAuthorMarginTablet.left}${postAuthorMarginUnits.Tablet}`;
    const postAuthorMarginMobileWidth = `${postAuthorMarginMobile.top}${postAuthorMarginUnits.Mobile} ${postAuthorMarginMobile.right}${postAuthorMarginUnits.Mobile} ${postAuthorMarginMobile.bottom}${postAuthorMarginUnits.Mobile} ${postAuthorMarginMobile.left}${postAuthorMarginUnits.Mobile}`;

    const postCategoryPaddingDesktopWidth = `${postCategoryPaddingDesktop.top}${postCategoryPaddingUnits.Desktop} ${postCategoryPaddingDesktop.right}${postCategoryPaddingUnits.Desktop} ${postCategoryPaddingDesktop.bottom}${postCategoryPaddingUnits.Desktop} ${postCategoryPaddingDesktop.left}${postCategoryPaddingUnits.Desktop}`;
    const postCategoryPaddingTabletWidth = `${postCategoryPaddingTablet.top}${postCategoryPaddingUnits.Tablet} ${postCategoryPaddingTablet.right}${postCategoryPaddingUnits.Tablet} ${postCategoryPaddingTablet.bottom}${postCategoryPaddingUnits.Tablet} ${postCategoryPaddingTablet.left}${postCategoryPaddingUnits.Tablet}`;
    const postCategoryPaddingMobileWidth = `${postCategoryPaddingMobile.top}${postCategoryPaddingUnits.Mobile} ${postCategoryPaddingMobile.right}${postCategoryPaddingUnits.Mobile} ${postCategoryPaddingMobile.bottom}${postCategoryPaddingUnits.Mobile} ${postCategoryPaddingMobile.left}${postCategoryPaddingUnits.Mobile}`;

    const postCategoryMarginDesktopWidth = `${postCategoryMarginDesktop.top}${postCategoryMarginUnits.Desktop} ${postCategoryMarginDesktop.right}${postCategoryMarginUnits.Desktop} ${postCategoryMarginDesktop.bottom}${postCategoryMarginUnits.Desktop} ${postCategoryMarginDesktop.left}${postCategoryMarginUnits.Desktop}`;
    const postCategoryMarginTabletWidth = `${postCategoryMarginTablet.top}${postCategoryMarginUnits.Tablet} ${postCategoryMarginTablet.right}${postCategoryMarginUnits.Tablet} ${postCategoryMarginTablet.bottom}${postCategoryMarginUnits.Tablet} ${postCategoryMarginTablet.left}${postCategoryMarginUnits.Tablet}`;
    const postCategoryMarginMobileWidth = `${postCategoryMarginMobile.top}${postCategoryMarginUnits.Mobile} ${postCategoryMarginMobile.right}${postCategoryMarginUnits.Mobile} ${postCategoryMarginMobile.bottom}${postCategoryMarginUnits.Mobile} ${postCategoryMarginMobile.left}${postCategoryMarginUnits.Mobile}`;

    const postCategoryBorderDesktopWidth = `${postCategoryBorderDesktop.top}${postCategoryBorderUnits.Desktop} ${postCategoryBorderDesktop.right}${postCategoryBorderUnits.Desktop} ${postCategoryBorderDesktop.bottom}${postCategoryBorderUnits.Desktop} ${postCategoryBorderDesktop.left}${postCategoryBorderUnits.Desktop}`
    const postCategoryBorderTabletWidth = `${postCategoryBorderTablet.top}${postCategoryBorderUnits.Tablet} ${postCategoryBorderTablet.right}${postCategoryBorderUnits.Tablet} ${postCategoryBorderTablet.bottom}${postCategoryBorderUnits.Tablet} ${postCategoryBorderTablet.left}${postCategoryBorderUnits.Tablet}`;
    const postCategoryBorderMobileWidth = `${postCategoryBorderMobile.top}${postCategoryBorderUnits.Mobile} ${postCategoryBorderMobile.right}${postCategoryBorderUnits.Mobile} ${postCategoryBorderMobile.bottom}${postCategoryBorderUnits.Mobile} ${postCategoryBorderMobile.left}${postCategoryBorderUnits.Mobile}`;

    const postCategoryBorderRadiusDesktopWidth = `${postCategoryBorderRadiusDesktop.top}${postCategoryBorderRadiusUnits.Desktop} ${postCategoryBorderRadiusDesktop.right}${postCategoryBorderRadiusUnits.Desktop} ${postCategoryBorderRadiusDesktop.bottom}${postCategoryBorderRadiusUnits.Desktop} ${postCategoryBorderRadiusDesktop.left}${postCategoryBorderRadiusUnits.Desktop}`;
    const postCategoryBorderRadiusTabletWidth = `${postCategoryBorderRadiusTablet.top}${postCategoryBorderRadiusUnits.Tablet} ${postCategoryBorderRadiusTablet.right}${postCategoryBorderRadiusUnits.Tablet} ${postCategoryBorderRadiusTablet.bottom}${postCategoryBorderRadiusUnits.Tablet} ${postCategoryBorderRadiusTablet.left}${postCategoryBorderRadiusUnits.Tablet}`;
    const postCategoryBorderRadiusMobileWidth = `${postCategoryBorderRadiusMobile.top}${postCategoryBorderRadiusUnits.Mobile} ${postCategoryBorderRadiusMobile.right}${postCategoryBorderRadiusUnits.Mobile} ${postCategoryBorderRadiusMobile.bottom}${postCategoryBorderRadiusUnits.Mobile} ${postCategoryBorderRadiusMobile.left}${postCategoryBorderRadiusUnits.Mobile}`;

    const buttonDesktopBorderWidthStr = `${buttonDesktopBorderWidth.top}${buttonBorderUnits.Desktop} ${buttonDesktopBorderWidth.right}${buttonBorderUnits.Desktop} ${buttonDesktopBorderWidth.bottom}${buttonBorderUnits.Desktop} ${buttonDesktopBorderWidth.left}${buttonBorderUnits.Desktop}`;
    const buttonTabletBorderWidthStr = `${buttonTabBorderWidth.top}${buttonBorderUnits.Tablet} ${buttonTabBorderWidth.right}${buttonBorderUnits.Tablet} ${buttonTabBorderWidth.bottom}${buttonBorderUnits.Tablet} ${buttonTabBorderWidth.left}${buttonBorderUnits.Tablet}`;
    const buttonMobileBorderWidthStr = `${buttonMobileBorderWidth.top}${buttonBorderUnits.Mobile} ${buttonMobileBorderWidth.right}${buttonBorderUnits.Mobile} ${buttonMobileBorderWidth.bottom}${buttonBorderUnits.Mobile} ${buttonMobileBorderWidth.left}${buttonBorderUnits.Mobile}`;

    const buttonDesktopBorderRadiusStr = `${buttonDesktopBorderRadiusWidth.top}${buttonBorderRadiusUnits.Desktop} ${buttonDesktopBorderRadiusWidth.right}${buttonBorderRadiusUnits.Desktop} ${buttonDesktopBorderRadiusWidth.bottom}${buttonBorderRadiusUnits.Desktop} ${buttonDesktopBorderRadiusWidth.left}${buttonBorderRadiusUnits.Desktop}`;
    const buttonTabletBorderRadiusStr = `${buttonTabBorderRadiusWidth.top}${buttonBorderRadiusUnits.Tablet} ${buttonTabBorderRadiusWidth.right}${buttonBorderRadiusUnits.Tablet} ${buttonTabBorderRadiusWidth.bottom}${buttonBorderRadiusUnits.Tablet} ${buttonTabBorderRadiusWidth.left}${buttonBorderRadiusUnits.Tablet}`;
    const buttonMobileBorderRadiusStr = `${buttonMobileBorderRadiusWidth.top}${buttonBorderRadiusUnits.Mobile} ${buttonMobileBorderRadiusWidth.right}${buttonBorderRadiusUnits.Mobile} ${buttonMobileBorderRadiusWidth.bottom}${buttonBorderRadiusUnits.Mobile} ${buttonMobileBorderRadiusWidth.left}${buttonBorderRadiusUnits.Mobile}`;

    const buttonDesktopPaddingStr = `${buttonDesktopPadding.top}${buttonPaddingUnits.Desktop} ${buttonDesktopPadding.right}${buttonPaddingUnits.Desktop} ${buttonDesktopPadding.bottom}${buttonPaddingUnits.Desktop} ${buttonDesktopPadding.left}${buttonPaddingUnits.Desktop}`;
    const buttonTabletPaddingStr = `${buttonTabPadding.top}${buttonPaddingUnits.Tablet} ${buttonTabPadding.right}${buttonPaddingUnits.Tablet} ${buttonTabPadding.bottom}${buttonPaddingUnits.Tablet} ${buttonTabPadding.left}${buttonPaddingUnits.Tablet}`;
    const buttonMobilePaddingStr = `${buttonMobilePadding.top}${buttonPaddingUnits.Mobile} ${buttonMobilePadding.right}${buttonPaddingUnits.Mobile} ${buttonMobilePadding.bottom}${buttonPaddingUnits.Mobile} ${buttonMobilePadding.left}${buttonPaddingUnits.Mobile}`;

    const buttonDesktopMarginStr = `${buttonDesktopMargin.top}${buttonMarginUnits.Desktop} ${buttonDesktopMargin.right}${buttonMarginUnits.Desktop} ${buttonDesktopMargin.bottom}${buttonMarginUnits.Desktop} ${buttonDesktopMargin.left}${buttonMarginUnits.Desktop}`;
    const buttonTabletMarginStr = `${buttonTabMargin.top}${buttonMarginUnits.Tablet} ${buttonTabMargin.right}${buttonMarginUnits.Tablet} ${buttonTabMargin.bottom}${buttonMarginUnits.Tablet} ${buttonTabMargin.left}${buttonMarginUnits.Tablet}`;
    const buttonMobileMarginStr = `${buttonMobileMargin.top}${buttonMarginUnits.Mobile} ${buttonMobileMargin.right}${buttonMarginUnits.Mobile} ${buttonMobileMargin.bottom}${buttonMarginUnits.Mobile} ${buttonMobileMargin.left}${buttonMarginUnits.Mobile}`;

    const buttonIconBorderDesktopWidth = `${buttonIconBorderDesktop.top}${buttonIconBorderUnits.Desktop} ${buttonIconBorderDesktop.right}${buttonIconBorderUnits.Desktop} ${buttonIconBorderDesktop.bottom}${buttonIconBorderUnits.Desktop} ${buttonIconBorderDesktop.left}${buttonIconBorderUnits.Desktop}`;
    const buttonIconBorderTabletWidth = `${buttonIconBorderTablet.top}${buttonIconBorderUnits.Tablet} ${buttonIconBorderTablet.right}${buttonIconBorderUnits.Tablet} ${buttonIconBorderTablet.bottom}${buttonIconBorderUnits.Tablet} ${buttonIconBorderTablet.left}${buttonIconBorderUnits.Tablet}`;
    const buttonIconBorderMobileWidth = `${buttonIconBorderMobile.top}${buttonIconBorderUnits.Mobile} ${buttonIconBorderMobile.right}${buttonIconBorderUnits.Mobile} ${buttonIconBorderMobile.bottom}${buttonIconBorderUnits.Mobile} ${buttonIconBorderMobile.left}${buttonIconBorderUnits.Mobile}`;

    const buttonIconBorderRadiusDesktopWidth = `${buttonIconBorderRadiusDesktop.top}${buttonIconBorderRadiusUnits.Desktop} ${buttonIconBorderRadiusDesktop.right}${buttonIconBorderRadiusUnits.Desktop} ${buttonIconBorderRadiusDesktop.bottom}${buttonIconBorderRadiusUnits.Desktop} ${buttonIconBorderRadiusDesktop.left}${buttonIconBorderRadiusUnits.Desktop}`;
    const buttonIconBorderRadiusTabletWidth = `${buttonIconBorderRadiusTablet.top}${buttonIconBorderRadiusUnits.Tablet} ${buttonIconBorderRadiusTablet.right}${buttonIconBorderRadiusUnits.Tablet} ${buttonIconBorderRadiusTablet.bottom}${buttonIconBorderRadiusUnits.Tablet} ${buttonIconBorderRadiusTablet.left}${buttonIconBorderRadiusUnits.Tablet}`;
    const buttonIconBorderRadiusMobileWidth = `${buttonIconBorderRadiusMobile.top}${buttonIconBorderRadiusUnits.Mobile} ${buttonIconBorderRadiusMobile.right}${buttonIconBorderRadiusUnits.Mobile} ${buttonIconBorderRadiusMobile.bottom}${buttonIconBorderRadiusUnits.Mobile} ${buttonIconBorderRadiusMobile.left}${buttonIconBorderRadiusUnits.Mobile}`;

    const buttonIconDesktopPaddingStr = `${buttonIconDesktopPadding.top}${buttonIconPaddingUnits.Desktop} ${buttonIconDesktopPadding.right}${buttonIconPaddingUnits.Desktop} ${buttonIconDesktopPadding.bottom}${buttonIconPaddingUnits.Desktop} ${buttonIconDesktopPadding.left}${buttonIconPaddingUnits.Desktop}`;
    const buttonIconTabletPaddingStr = `${buttonIconTabPadding.top}${buttonIconPaddingUnits.Tablet} ${buttonIconTabPadding.right}${buttonIconPaddingUnits.Tablet} ${buttonIconTabPadding.bottom}${buttonIconPaddingUnits.Tablet} ${buttonIconTabPadding.left}${buttonIconPaddingUnits.Tablet}`;
    const buttonIconMobilePaddingStr = `${buttonIconMobilePadding.top}${buttonIconPaddingUnits.Mobile} ${buttonIconMobilePadding.right}${buttonIconPaddingUnits.Mobile} ${buttonIconMobilePadding.bottom}${buttonIconPaddingUnits.Mobile} ${buttonIconMobilePadding.left}${buttonIconPaddingUnits.Mobile}`;

    const postCountPaddingDesktopWidth = `${postCountPaddingDesktop.top}${postCountPaddingUnits.Desktop} ${postCountPaddingDesktop.right}${postCountPaddingUnits.Desktop} ${postCountPaddingDesktop.bottom}${postCountPaddingUnits.Desktop} ${postCountPaddingDesktop.left}${postCountPaddingUnits.Desktop}`;
    const postCountPaddingTabletWidth = `${postCountPaddingTablet.top}${postCountPaddingUnits.Tablet} ${postCountPaddingTablet.right}${postCountPaddingUnits.Tablet} ${postCountPaddingTablet.bottom}${postCountPaddingUnits.Tablet} ${postCountPaddingTablet.left}${postCountPaddingUnits.Tablet}`;
    const postCountPaddingMobileWidth = `${postCountPaddingMobile.top}${postCountPaddingUnits.Mobile} ${postCountPaddingMobile.right}${postCountPaddingUnits.Mobile} ${postCountPaddingMobile.bottom}${postCountPaddingUnits.Mobile} ${postCountPaddingMobile.left}${postCountPaddingUnits.Mobile}`;

    const postCountBorderDesktopWidth = `${postCountBorderDesktop.top}${postCountBorderUnits.Desktop} ${postCountBorderDesktop.right}${postCountBorderUnits.Desktop} ${postCountBorderDesktop.bottom}${postCountBorderUnits.Desktop} ${postCountBorderDesktop.left}${postCountBorderUnits.Desktop}`;
    const postCountBorderTabletWidth = `${postCountBorderTablet.top}${postCountBorderUnits.Tablet} ${postCountBorderTablet.right}${postCountBorderUnits.Tablet} ${postCountBorderTablet.bottom}${postCountBorderUnits.Tablet} ${postCountBorderTablet.left}${postCountBorderUnits.Tablet}`;
    const postCountBorderMobileWidth = `${postCountBorderMobile.top}${postCountBorderUnits.Mobile} ${postCountBorderMobile.right}${postCountBorderUnits.Mobile} ${postCountBorderMobile.bottom}${postCountBorderUnits.Mobile} ${postCountBorderMobile.left}${postCountBorderUnits.Mobile}`;

    const postCountBorderRadiusDesktopWidth = `${postCountBorderRadiusDesktop.top}${postCountBorderRadiusUnits.Desktop} ${postCountBorderRadiusDesktop.right}${postCountBorderRadiusUnits.Desktop} ${postCountBorderRadiusDesktop.bottom}${postCountBorderRadiusUnits.Desktop} ${postCountBorderRadiusDesktop.left}${postCountBorderRadiusUnits.Desktop}`;
    const postCountBorderRadiusTabletWidth = `${postCountBorderRadiusTablet.top}${postCountBorderRadiusUnits.Tablet} ${postCountBorderRadiusTablet.right}${postCountBorderRadiusUnits.Tablet} ${postCountBorderRadiusTablet.bottom}${postCountBorderRadiusUnits.Tablet} ${postCountBorderRadiusTablet.left}${postCountBorderRadiusUnits.Tablet}`;
    const postCountBorderRadiusMobileWidth = `${postCountBorderRadiusMobile.top}${postCountBorderRadiusUnits.Mobile} ${postCountBorderRadiusMobile.right}${postCountBorderRadiusUnits.Mobile} ${postCountBorderRadiusMobile.bottom}${postCountBorderRadiusUnits.Mobile} ${postCountBorderRadiusMobile.left}${postCountBorderRadiusUnits.Mobile}`;

    const postGlobalDesktopPaddingWidth = `${postGlobalPaddingDesktop.top}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.right}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.bottom}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.left}${postGlobalPaddingUnits.Desktop}`;
    const postGlobalTabletPaddingWidth = `${postGlobalPaddingTablet.top}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.right}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.bottom}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.left}${postGlobalPaddingUnits.Tablet}`;
    const postGlobalMobilePaddingWidth = `${postGlobalPaddingMobile.top}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.right}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.bottom}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.left}${postGlobalPaddingUnits.Mobile}`;

    const postGlobalDesktopMarginWidth = `${postGlobalMarginDesktop.top}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.right}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.bottom}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.left}${postGlobalMarginUnits.Desktop}`;
    const postGlobalTabletMarginWidth = `${postGlobalMarginTablet.top}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.right}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.bottom}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.left}${postGlobalMarginUnits.Tablet}`;
    const postGlobalMobileMarginWidth = `${postGlobalMarginMobile.top}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.right}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.bottom}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.left}${postGlobalMarginUnits.Mobile}`;

    const postGlobalDesktopBorderWidth = `${postGlobalBorderDesktop.top}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.right}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.bottom}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.left}${postGlobalBorderUnits.Desktop}`;
    const postGlobalTabletBorderWidth = `${postGlobalBorderTablet.top}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.right}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.bottom}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.left}${postGlobalBorderUnits.Tablet}`;
    const postGlobalMobileBorderWidth = `${postGlobalBorderMobile.top}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.right}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.bottom}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.left}${postGlobalBorderUnits.Mobile}`;

    const postGlobalDesktopBorderRadiusWidth = `${postGlobalBorderRadiusDesktop.top}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.right}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.bottom}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.left}${postGlobalBorderRadiusUnits.Desktop}`;
    const postGlobalTabletBorderRadiusWidth = `${postGlobalBorderRadiusTablet.top}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.right}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.bottom}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.left}${postGlobalBorderRadiusUnits.Tablet}`;
    const postGlobalMobileBorderRadiusWidth = `${postGlobalBorderRadiusMobile.top}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.right}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.bottom}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.left}${postGlobalBorderRadiusUnits.Mobile}`;

    const postCategoryInnerPaddingDesktopWidth = `${calculateInnerPadding(
        postCategoryPaddingDesktop.top,
        postCategoryPaddingUnits.Desktop,
    )} ${calculateInnerPadding(
        postCategoryPaddingDesktop.right,
        postCategoryPaddingUnits.Desktop,
    )} ${calculateInnerPadding(
        postCategoryPaddingDesktop.bottom,
        postCategoryPaddingUnits.Desktop,
    )} ${calculateInnerPadding(
        postCategoryPaddingDesktop.left,
        postCategoryPaddingUnits.Desktop,
    )}`;

    const postCategoryInnerPaddingTabletWidth = `${calculateInnerPadding(
        postCategoryPaddingTablet.top,
        postCategoryPaddingUnits.Tablet,
    )} ${calculateInnerPadding(
        postCategoryPaddingTablet.right,
        postCategoryPaddingUnits.Tablet,
    )} ${calculateInnerPadding(
        postCategoryPaddingTablet.bottom,
        postCategoryPaddingUnits.Tablet,
    )} ${calculateInnerPadding(
        postCategoryPaddingTablet.left,
        postCategoryPaddingUnits.Tablet,
    )}`;

    const postCategoryInnerPaddingMobileWidth = `${calculateInnerPadding(
        postCategoryPaddingMobile.top,
        postCategoryPaddingUnits.Mobile,
    )} ${calculateInnerPadding(
        postCategoryPaddingMobile.right,
        postCategoryPaddingUnits.Mobile,
    )} ${calculateInnerPadding(
        postCategoryPaddingMobile.bottom,
        postCategoryPaddingUnits.Mobile,
    )} ${calculateInnerPadding(
        postCategoryPaddingMobile.left,
        postCategoryPaddingUnits.Mobile,
    )}`;

    const postCategoryBlockStyle = `
        .${blockID} .fb_post_category_container.single-item {
            margin:auto;
        }

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link-count{
            display: flex;
            flex-direction: column;
            ${premadeStyle === "style-1" ? "" : `gap: 32px;`}
        }

        .${blockID} .fb-taxonomy-list .fb-taxonomy-item .fb-taxonomy-link-count {
            flex-direction: row;
            align-items: center;
            gap: 16px;
        }

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link-count .fb-taxonomy-count{
            display: flex;
            flex-direction: row;
            ${labelGaps.Desktop ? `gap: ${labelGaps.Desktop}${labelGapUnits.Desktop};` : ""}
        }
        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-author-wrapper{
            ${authorAvatarGaps.Desktop ? `gap: ${authorAvatarGaps.Desktop}${authorAvatarGapUnits.Desktop};` : ""}
        }

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-more-info .fb-taxonomy-author-name {
            ${authorNameColor ? `color: ${authorNameColor};` : ""}
            ${authorNameGlobalTypoSwitcher.fontFamily === true && authorNameGlobalTypographyData.fontFamily ? `font-family: ${authorNameGlobalTypographyData.fontFamily};` : ""}
            ${authorNameGlobalTypoSwitcher.fontSize === true && authorNameGlobalTypographyData.fontSize ? `font-size: ${authorNameGlobalTypographyData.fontSize};` : ""}
            ${authorNameGlobalTypoSwitcher.fontWeight === true && authorNameGlobalTypographyData.fontWeight ? `font-weight: ${authorNameGlobalTypographyData.fontWeight};` : ""}
            ${authorNameGlobalTypoSwitcher.fontStyle === true && authorNameGlobalTypographyData.fontStyle ? `font-style: ${authorNameGlobalTypographyData.fontStyle};` : ""}
            ${authorNameGlobalTypoSwitcher.textTransform === true && authorNameGlobalTypographyData.textTransform ? `text-transform: ${authorNameGlobalTypographyData.textTransform};` : ""}
            ${authorNameGlobalTypoSwitcher.textDecoration === true && authorNameGlobalTypographyData.textDecoration ? `text-decoration: ${authorNameGlobalTypographyData.textDecoration};` : ""}
            ${authorNameGlobalTypoSwitcher.letterSpacing === true && authorNameGlobalTypographyData.letterSpacing ? `letter-spacing: ${authorNameGlobalTypographyData.letterSpacing};` : ""}
            ${authorNameGlobalTypoSwitcher.lineHeight === true && authorNameGlobalTypographyData.lineHeight ? `line-height: ${authorNameGlobalTypographyData.lineHeight};` : ""}

            ${authorNameGlobalTypoSwitcher.fontFamily === false && authorNameFontFamily ? `font-family: ${authorNameFontFamily};` : ""}
            ${authorNameGlobalTypoSwitcher.fontSize === false && authorNameFontSize.Desktop ? `font-size: ${authorNameFontSize.Desktop}${authorNameFontSizeUnits.Desktop};` : ""}
            ${authorNameGlobalTypoSwitcher.fontWeight === false && authorNameFontWeight ? `font-weight: ${authorNameFontWeight};` : ""}
            ${authorNameGlobalTypoSwitcher.fontStyle === false && authorNameFontStyle ? `font-style: ${authorNameFontStyle};` : ""}
            ${authorNameGlobalTypoSwitcher.textTransform === false && authorNameTextTransform ? `text-transform: ${authorNameTextTransform};` : ""}
            ${authorNameGlobalTypoSwitcher.textDecoration === false && authorNameTextDecoration ? `text-decoration: ${authorNameTextDecoration};` : ""}
            ${authorNameGlobalTypoSwitcher.letterSpacing === false && authorNameLetterSpacing.Desktop ? `letter-spacing: ${authorNameLetterSpacing.Desktop}${authorNameLetterSpacingUnits.Desktop};` : ""}
            ${authorNameGlobalTypoSwitcher.lineHeight === false && authorNameLineHeight.Desktop ? `line-height: ${authorNameLineHeight.Desktop}${authorNameLineHeightUnits.Desktop};` : ""}
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-author-name:hover {
            ${authorNameHoverColor ? `color: ${authorNameHoverColor};` : ""}
}
        
        .${blockID} .fb-taxonomy-author-avatar {
    width: ${authorAvatarSize.Desktop}${authorAvatarSizeUnits.Desktop};
    height: ${authorAvatarSize.Desktop}${authorAvatarSizeUnits.Desktop};
    border-radius: 50%;
    object-fit: cover;
}
        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-more-info{
            ${postAuthorMarginDesktopWidth && postAuthorMarginDesktop.top ? `margin: ${postAuthorMarginDesktopWidth};` : ""}
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link.fb-taxonomy-name{
            ${postTitleColor ? `color: ${postTitleColor};` : ''}
    line-height: 130%;
    letter-spacing: -2%;
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    width: fit-content;
}

        .${blockID}.fb-taxonomy-style-1 .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link:hover, 
        .${blockID}.fb-taxonomy-style-1 .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link.fb-taxonomy-name:hover{
    color: #399cff;
}

        .${blockID} .fb-taxonomy-list .fb-taxonomy-item .fb-taxonomy-link:hover,
        .${blockID} .fb-taxonomy-list .fb-taxonomy-item .fb-taxonomy-link.fb-taxonomy-name:hover {
            ${postTitleHoverColor ? `color: ${postTitleHoverColor};` : ''}
}

        .${blockID}.fb-taxonomy-style-2 .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link:hover, 
        .${blockID}.fb-taxonomy-style-2 .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link.fb-taxonomy-name:hover{
    text-decoration: underline;
}

        .${blockID}.fb-taxonomy-style-3 .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-link:hover{
    color: unset;
}

        .${blockID} .fb-taxonomy-description {
    color: #555E72;
    font-size: 18px;
    line-height: 140%;
    margin: 0;
    margin-top: 14px;
}

        .${blockID} .fb-taxonomy-count {
    width: fit-content;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 24px;
    color: #15171C;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 500;
    box-sizing: content-box;
}

        .${blockID} .fb-taxonomy-grid .fb-taxonomy-count,
        .${blockID} .single-item .fb-taxonomy-count {
    background: #D7E9FF;
    padding: 6px 14px;
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button {
    width: fit-content;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 18px;
    background-color: #0B0C0E;
    color: #FFFFFF;
    text-decoration: none;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -2%;
    box-sizing: border-box;
    z-index: 2;
    transition: all 0.3s ease;
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover{
    background-color: #3991FF;
    color: white;
    text-decoration: none;
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon-wrapper{
    display: flex;
    align-items: center;
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon {
    display: flex;
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon svg{
    width: 16px;
    height: 16px;
    fill: currentColor;
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon-image{
    width: 20px;
    height: 20px;
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
                    
        .${blockID} .fb-empty-indicator {
    color: #dc3545;
    font-size: 12px;
    font-style: italic;
    margin-left: 5px;
}

        .${blockID} .fb-no-taxonomies,
        .${blockID} .fb-taxonomy-error {
    text-align: center;
    color: #6c757d;
    font-style: italic;
    padding: 20px;
}

        .${blockID} .fb-taxonomy-list{
    margin: 0;
}

        .${blockID} .fb_taxonomy_sublist{
    display: flex;
    flex-direction: column;
}

        .${blockID} .fb_taxonomy_sublist .fb-taxonomy-item {
    margin-left: 62px;
}
        
        .${blockID} .fb-taxonomy-list .fb-taxonomy-item .fb-tax-separator{
    border-color: #e5e5e5;
}

        ${premadeStyle === "style-1"
            ? `
                .${blockID} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id="0"] {
                    margin-bottom: 10px;
                    margin-left: 0;
                }

                .${blockID} .fb_taxonomy_sublist {
                    padding-top: 10px;
                    padding-bottom: 10px;
                    padding-left: 0;
                    gap: 10px;
                }

                .${blockID} .fb-taxonomy-list .fb-taxonomy-count{
                    font-size: 24px;
                }

            `
            : ""
        }

        ${premadeStyle === "style-2"
            ? `
                .${blockID}.fb-taxonomy-style-2 .fb-taxonomy-list {
                    list-style-type: none;
                    padding-left: 0;
                }

                .${blockID} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id="0"] {
                    margin-bottom: 32px;
                }

                .${blockID} .fb_taxonomy_sublist {
                    padding-top: 32px;
                    padding-bottom: 32px;
                    gap: 32px;
                }

                .${blockID} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id="0"]  { 
                    border-left-style: solid;
                    border-left-width: 3px;
                    border-color: #3991FF;
                    padding-left: 24px;
                }

                .${blockID} .fb_taxonomy_sublist .fb-taxonomy-item{
                    border-left-style: solid;
                    border-left-width: 3px;
                    border-color: #0B0C0E;
                    padding-left: 24px;
                }

                .${blockID}.fb-taxonomy-style-2 .fb-taxonomy-list .fb-taxonomy-count {
                    background: #FAD6D9;
                    padding: 6px 14px;
                }

                .${blockID} .fb-taxonomy-list .fb-taxonomy-item .fb-taxonomy-read-more-button {
                    margin-top: 32px;
                }

                .${blockID}.fb-taxonomy-style-2 .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button{
                    padding: 6px 0px !important;
                    background: transparent !important;
                    border-top: 0 !important;
                    border-left: 0 !important;
                    border-right: 0 !important;
                    border-bottom-width: 1px;
                    border-bottom-style: solid;
                    border-color: #0B0C0E !important;
                    border-radius: inherit !important;
                    transition: all .3s ease;
                }

                .${blockID}.fb-taxonomy-style-2 .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-text{
                        color: #0B0C0E !important;
                }

                .${blockID}.fb-taxonomy-style-2 .fb-taxonomy-list .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon{
                    border: none !important;
                    background-color: unset !important;
                    padding: inherit !important;
                }

                .${blockID}.fb-taxonomy-style-2 .fb-taxonomy-list .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon svg{
                    fill: #0B0C0E !important;
                    transition: all .3s ease;
                }

                .${blockID}.fb-taxonomy-style-2 .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button:hover {
                    border-color: #3991FF !important;
                }

                .${blockID}.fb-taxonomy-style-2 .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button:hover .fb-taxonomy-read-more-text{
                    color: #3991FF !important;
                }

                .${blockID}.fb-taxonomy-style-2 .fb-taxonomy-list .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button:hover .fb-taxonomy-read-more-icon svg{
                    fill: #3991FF !important;
                }
            
            `
            : ""
        }
        
        ${premadeStyle === "style-1"
            ? `
                .${blockID} .fb-taxonomy-grid {
                    grid-template-columns: repeat(3, 1fr);
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item,
                .${blockID} .single-item .fb-taxonomy-item {
                    padding: 24px;
                    border-radius: 10px;
                }
    
                .${blockID} .fb-taxonomy-grid  .fb-taxonomy-item .fb-taxonomy-link-count,
                .${blockID} .single-item  .fb-taxonomy-item .fb-taxonomy-link-count{
                    gap: 42px;
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-link, 
                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-link .fb-taxonomy-name,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-link, 
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-link .fb-taxonomy-name{
                    font-size: 24px;
                    font-weight: 500;
                }
    
                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-read-more-button,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-read-more-button {
                    margin-top: 42px;
                }
            `
            : ""
        }

        ${premadeStyle === "style-2"
            ? `
                .${blockID} .fb-taxonomy-grid {
                    grid-template-columns: repeat(3, 1fr);
                }

                .${blockID}.fb-taxonomy-style-2 .fb-taxonomy-grid .fb-taxonomy-item, 
                .${blockID}.fb-taxonomy-style-2 .single-item .fb-taxonomy-item{
                    ${postCategoryBorderRadiusDesktopWidth && postCategoryBorderRadiusDesktop.top ? "" : "border-radius: 20px;"}
                    background: #FFFFFF;
                    padding: 10px;
                    padding-bottom: 24px;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.02), 0 0px 6px rgba(0, 0, 0, 0.02);
                }
    
                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-meta,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-meta {
                    ${postCategoryBorderRadiusDesktopWidth && postCategoryBorderRadiusDesktop.top ? "" : "border-radius: 10px;"}
                    height: 100%;
                    background: #EBF4FF;
                    padding: 24px;
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-link, 
                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-link .fb-taxonomy-name,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-link, 
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-link .fb-taxonomy-name{
                    font-size: 32px;
                    font-weight: 600;
                }
    
                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-read-more-button,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-read-more-button {
                    margin-left: 14px;
                    margin-top: 32px;
                }
            
            `
            : ""
        }

        ${premadeStyle === "style-3"
            ? `
                .${blockID} .fb-taxonomy-more-info {
                    flex-direction: column;
                    align-items: flex-start;
                }
                .${blockID} .fb-taxonomy-read-more-wrapper {
                    width: 100%;
                }

                .${blockID} .fb-taxonomy-author-name {
                    color: #FFFFFF;
                }

                .${blockID} .fb-taxonomy-grid {
                    grid-template-columns: repeat(3, 1fr);
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item,
                .${blockID} .single-item .fb-taxonomy-item {
                    position: relative;
                    min-height: 300px;
                    overflow: hidden;
                    padding: 20px;
                    border-radius: 8px;
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-count,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-count{
                    background: #FFFFFF;
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-image,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-image:before,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-image:before{
                    background: linear-gradient(45deg, rgba(0, 0, 0, .2), transparent);
                    content: "";
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-image img,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    vertical-align: middle;
                    transition: transform 0.4s cubic-bezier(0.33, 0.04, 0.63, 0.99),
                    filter 0.4s ease; /* Slightly longer duration for smoothness */
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item:hover .fb-taxonomy-image img,
                .${blockID} .single-item .fb-taxonomy-item:hover .fb-taxonomy-image img{
                    transform: scale(1.08) translateY(-8px);
                    filter: brightness(1.05);
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-link-count,
                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-meta,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-link-count,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-meta{
                    z-index: 2;
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-link, 
                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-link .fb-taxonomy-name,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-link, 
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-link .fb-taxonomy-name {
                    color: #FFFFFF;
                    font-size: 24px;
                    font-weight: 500;
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-description,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-description{
                    color: #F7F7F7;
                }

                .${blockID}.fb-taxonomy-style-3 .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-read-more-button,
                .${blockID}.fb-taxonomy-style-3 .single-item .fb-taxonomy-item .fb-taxonomy-read-more-button{
                    width: 100%;
                    margin-top: 24px;
                    border: solid;
                    border-width: 1px;
                    border-color: #FFFFFF4D;
                    border-radius: 8px;
                    background: transparent;
                    backdrop-filter: blur(10px);
                }

            `
            : ""
        }

        ${premadeStyle === "style-4"
            ? `
                .${blockID} .fb-taxonomy-more-info {
                    flex-direction: column;
                    align-items: flex-start;
                }

                .${blockID} .fb-taxonomy-grid {
                    grid-template-columns: repeat(2, 1fr);
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item,
                .${blockID} .single-item .fb-taxonomy-item {
                    padding: 32px;
                    border-radius: 14px;
                    flex-direction: row !important;
                    padding: 0 !important;
                    overflow: hidden;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.02), 0 0px 6px rgba(0, 0, 0, 0.02);
                }
                    
                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-count,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-count{
                    background: #F9F9F9;
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-image-container,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-image-container{
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-card-content,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-card-content{
                    width: 100%;
                    padding: 32px 24px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-image-container .fb-taxonomy-image,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-image-container .fb-taxonomy-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-image img,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    vertical-align: middle;
                    transition: transform 0.4s cubic-bezier(0.33, 0.04, 0.63, 0.99), filter 0.4s ease;
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item:hover .fb-taxonomy-image img,
                .${blockID} .single-item .fb-taxonomy-item:hover .fb-taxonomy-image img{
                    transform: scale(1.08) translateY(-8px);
                    filter: brightness(1.05);
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-read-more-button,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-read-more-button {
                    margin-top: 32px;
                }

                .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover{
                    background-color: #F89B2E;
                }

            `
            : ""
        }

        .${blockID} {
    width: 100%;
}

        .${blockID} .fb-taxonomy-grid {
    display: grid;
            ${gridColumns.Desktop ? `grid-template-columns: repeat(${gridColumns.Desktop}, 1fr);` : ''}
    row-gap: ${gridRowGap.Desktop}${gridGapUnits.Desktop};
    column-gap: ${gridColumnGap.Desktop}${gridGapUnits.Desktop};
}

        .${blockID} .fb-taxonomy-grid .fb-taxonomy-item, 
        .${blockID} .single-item .fb-taxonomy-item{


            ${premadeStyle === "style-4"
            ? `background: #FFFFFF;`
            : `${premadeStyle === "style-3"
                ? `background: #3991FF;` : "background: #EBF4FF;"}`
        }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    word -break: break-all;
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item{
    transition: all 0.3s ease;
}

        ${premadeStyle === "style-2"
            ? `
                .${blockID}.fb-taxonomy-style-2 .fb-taxonomy-grid .fb-taxonomy-item,
                .${blockID}.fb-taxonomy-style-2 .single-item .fb-taxonomy-item {					
                
                    ${postCategoryInnerPaddingDesktopWidth && postCategoryPaddingDesktop.top
                ? `
                            padding: ${postCategoryInnerPaddingDesktopWidth};
                        ` : ""
            }
                
                    ${postCategoryPaddingDesktopWidth && postCategoryPaddingDesktop.top
                ? `
                            padding-bottom: ${postCategoryPaddingDesktop.top}${postCategoryPaddingUnits.Desktop};
                        ` : ""
            }

                }				

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-meta,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-meta{
                
                    ${postCategoryNormalBackgroundType === "gradient"
                ? `  
                            ${postCategoryNormalCustomGradientSwitcher && postCategoryNormalCustomGradientInputValue
                    ? `
                                    background: ${postCategoryNormalCustomGradientInputValue};`
                    : `
                                    background: ${postCategoryNormalGradientColor};
                                `
                }
                        ` : `
                            ${postCategoryNormalClassicColor
                    ? `
                                    background: ${postCategoryNormalClassicColor};
                                ` : ""
                }
                        `
            }

                    ${postCategoryPaddingDesktopWidth && postCategoryPaddingDesktop.top
                ? `
                            padding: ${postCategoryPaddingDesktopWidth};
                        ` : ""
            }

                    ${postCategoryBorderRadiusDesktopWidth && postCategoryBorderRadiusDesktop.top
                ? `
                            border-radius: ${postCategoryBorderRadiusDesktop.top / 2}${postCategoryBorderRadiusUnits.Desktop} 
                            ${postCategoryBorderRadiusDesktop.right / 2}${postCategoryBorderRadiusUnits.Desktop} 
                            ${postCategoryBorderRadiusDesktop.bottom / 2}${postCategoryBorderRadiusUnits.Desktop} 
                            ${postCategoryBorderRadiusDesktop.left / 2}${postCategoryBorderRadiusUnits.Desktop};
                        ` : ""
            }

                }
            ` : ""
        }

        .${blockID} .fb-taxonomy-grid .fb-taxonomy-item,
        .${blockID} .single-item .fb-taxonomy-item {

            ${taxonomyHeight.Desktop
            ? `
                    min-height: ${taxonomyHeight.Desktop}${taxonomyHeightUnits.Desktop};
                ` : ""
        }

            ${postCategoryNormalBackgroundType === "gradient"
            ? `  
                    ${postCategoryNormalCustomGradientSwitcher && postCategoryNormalCustomGradientInputValue
                ? `
                            background: ${postCategoryNormalCustomGradientInputValue};
                        ` : `
                            background: ${postCategoryNormalGradientColor};
                        `
            }
                ` : `
                    ${postCategoryNormalClassicColor
                ? `
                            background: ${postCategoryNormalClassicColor};
                        ` : ""
            }
                `
        }

            ${postCategoryPaddingDesktopWidth && postCategoryPaddingDesktop.top
            ? `
                    padding: ${postCategoryPaddingDesktopWidth};
                ` : ""
        }

            ${postCategoryMarginDesktopWidth && postCategoryMarginDesktop.top
            ? `
                    margin: ${postCategoryMarginDesktopWidth};
                ` : ""
        }

            ${postCategoryBorder ? `border: ${postCategoryBorder};` : ""}

            ${postCategoryBorderDesktopWidth && postCategoryBorderDesktop.top
            ? `
                    border-width: ${postCategoryBorderDesktopWidth};
                ` : ""
        }

            ${postCategoryBorderRadiusDesktopWidth && postCategoryBorderRadiusDesktop.top
            ? `
                    border-radius: ${postCategoryBorderRadiusDesktopWidth};
                ` : ""
        }
            
            ${postCategoryBorderColor ? `border-color: ${postCategoryBorderColor};` : ""}
            ${postCategoryBoxShadowCssValue ? `box-shadow: ${postCategoryBoxShadowCssValue};` : ""}

    transition: background-color 0.3s ease, border-color 0.3s ease;
}

        .${blockID} .fb-taxonomy-grid .fb-taxonomy-item:hover,
        .${blockID} .single-item .fb-taxonomy-item:hover {
            ${postCategoryHoverBackgroundType === "gradient"
            ? `  
                    ${postCategoryHoverCustomGradientSwitcher && postCategoryHoverCustomGradientInputValue
                ? `
                            background: ${postCategoryHoverCustomGradientInputValue};
                        ` : `
                            background: ${postCategoryHoverGradientColor};
                        `
            }
                ` : `
                    ${postCategoryHoverClassicColor
                ? `
                            background: ${postCategoryHoverClassicColor};
                        ` : ""
            }
                `
        }
            ${postCategoryBorderHoverColor ? `border-color: ${postCategoryBorderHoverColor};` : ""}
            ${postCategoryBoxShadowHoverCssValue ? `box-shadow: ${postCategoryBoxShadowHoverCssValue};` : ""}
}

        ${premadeStyle === "style-4"
            ? `
                .${blockID}.fb-taxonomy-style-4 .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-card-content,
                .${blockID}.fb-taxonomy-style-4 .single-item .fb-taxonomy-item .fb-taxonomy-card-content{
                    ${postCategoryPaddingDesktopWidth && postCategoryPaddingDesktop.top
                ? `
                            padding: ${postCategoryPaddingDesktopWidth};
                        ` : ""
            }
                }
            ` : ""
        }

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link, 
        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link.fb-taxonomy-name {

            ${postTitleColor ? `color: ${postTitleColor};` : ""}
            ${postTitleGlobalTypoSwitcher.fontFamily === true && postTitleGlobalTypographyData.fontFamily ? `font-family: ${postTitleGlobalTypographyData.fontFamily};` : ""}
            ${postTitleGlobalTypoSwitcher.fontSize === true && postTitleGlobalTypographyData.fontSize ? `font-size: ${postTitleGlobalTypographyData.fontSize};` : ""}
            ${postTitleGlobalTypoSwitcher.fontWeight === true && postTitleGlobalTypographyData.fontWeight ? `font-weight: ${postTitleGlobalTypographyData.fontWeight};` : ""}
            ${postTitleGlobalTypoSwitcher.fontStyle === true && postTitleGlobalTypographyData.fontStyle ? `font-style: ${postTitleGlobalTypographyData.fontStyle};` : ""}
            ${postTitleGlobalTypoSwitcher.textTransform === true && postTitleGlobalTypographyData.textTransform ? `text-transform: ${postTitleGlobalTypographyData.textTransform};` : ""}
            ${postTitleGlobalTypoSwitcher.textDecoration === true && postTitleGlobalTypographyData.textDecoration ? `text-decoration: ${postTitleGlobalTypographyData.textDecoration};` : ""}
            ${postTitleGlobalTypoSwitcher.letterSpacing === true && postTitleGlobalTypographyData.letterSpacing ? `letter-spacing: ${postTitleGlobalTypographyData.letterSpacing};` : ""}
            ${postTitleGlobalTypoSwitcher.lineHeight === true && postTitleGlobalTypographyData.lineHeight ? `line-height: ${postTitleGlobalTypographyData.lineHeight};` : ""}

            ${postTitleGlobalTypoSwitcher.fontFamily === false && postTitleFontFamily ? `font-family: ${postTitleFontFamily};` : ""}
            ${postTitleGlobalTypoSwitcher.fontSize === false && postTitleFontSize.Desktop ? `font-size: ${postTitleFontSize.Desktop}${postTitleFontSizeUnits.Desktop};` : ""}
            ${postTitleGlobalTypoSwitcher.fontWeight === false && postTitleFontWeight ? `font-weight: ${postTitleFontWeight};` : ""}
            ${postTitleGlobalTypoSwitcher.fontStyle === false && postTitleFontStyle ? `font-style: ${postTitleFontStyle};` : ""}
            ${postTitleGlobalTypoSwitcher.textTransform === false && postTitleTextTransform ? `text-transform: ${postTitleTextTransform};` : ""}
            ${postTitleGlobalTypoSwitcher.textDecoration === false && postTitleTextDecoration ? `text-decoration: ${postTitleTextDecoration};` : ""}
            ${postTitleGlobalTypoSwitcher.letterSpacing === false && postTitleLetterSpacing.Desktop ? `letter-spacing: ${postTitleLetterSpacing.Desktop}${postTitleLetterSpacingUnits.Desktop};` : ""}
            ${postTitleGlobalTypoSwitcher.lineHeight === false && postTitleLineHeight.Desktop ? `line-height: ${postTitleLineHeight.Desktop}${postTitleLineHeightUnits.Desktop};` : ""}
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link:hover, 
        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link.fb-taxonomy-name:hover {
            ${postTitleHoverColor ? `color: ${postTitleHoverColor};` : ""}
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-description{
            ${postDescriptionColor ? `color: ${postDescriptionColor};` : ""}

            ${postDescriptionGlobalTypoSwitcher.fontFamily === true && postDescriptionGlobalTypographyData.fontFamily ? `font-family: ${postDescriptionGlobalTypographyData.fontFamily};` : ""}
            
            ${postDescriptionGlobalTypoSwitcher.fontSize === true && postDescriptionGlobalTypographyData.fontSize ? `font-size: ${postDescriptionGlobalTypographyData.fontSize};` : ""}
            
            ${postDescriptionGlobalTypoSwitcher.fontWeight === true && postDescriptionGlobalTypographyData.fontWeight ? `font-weight: ${postDescriptionGlobalTypographyData.fontWeight};` : ""}
            
            ${postDescriptionGlobalTypoSwitcher.fontStyle === true && postDescriptionGlobalTypographyData.fontStyle ? `font-style: ${postDescriptionGlobalTypographyData.fontStyle};` : ""}
            
            ${postDescriptionGlobalTypoSwitcher.textTransform === true && postDescriptionGlobalTypographyData.textTransform ? `text-transform: ${postDescriptionGlobalTypographyData.textTransform};` : ""}
            
            ${postDescriptionGlobalTypoSwitcher.textDecoration === true && postDescriptionGlobalTypographyData.textDecoration ? `text-decoration: ${postDescriptionGlobalTypographyData.textDecoration};` : ""}
            
            ${postDescriptionGlobalTypoSwitcher.letterSpacing === true && postDescriptionGlobalTypographyData.letterSpacing ? `letter-spacing: ${postDescriptionGlobalTypographyData.letterSpacing};` : ""}
            
            ${postDescriptionGlobalTypoSwitcher.lineHeight === true && postDescriptionGlobalTypographyData.lineHeight ? `line-height: ${postDescriptionGlobalTypographyData.lineHeight};` : ""}

            ${postDescriptionGlobalTypoSwitcher.fontFamily === false && postDescriptionFontFamily ? `font-family: ${postDescriptionFontFamily};` : ""}
            
            ${postDescriptionGlobalTypoSwitcher.fontSize === false && postDescriptionFontSize.Desktop ? `font-size: ${postDescriptionFontSize.Desktop}${postDescriptionFontSizeUnits.Desktop};` : ""}
            
            ${postDescriptionGlobalTypoSwitcher.fontWeight === false && postDescriptionFontWeight ? `font-weight: ${postDescriptionFontWeight};` : ""}
            ${postDescriptionGlobalTypoSwitcher.fontStyle === false && postDescriptionFontStyle ? `font-style: ${postDescriptionFontStyle};` : ""}
            ${postDescriptionGlobalTypoSwitcher.textTransform === false && postDescriptionTextTransform ? `text-transform: ${postDescriptionTextTransform};` : ""}
            ${postDescriptionGlobalTypoSwitcher.textDecoration === false && postDescriptionTextDecoration ? `text-decoration: ${postDescriptionTextDecoration};` : ""}
            
            ${postDescriptionGlobalTypoSwitcher.letterSpacing === false && postDescriptionLetterSpacing.Desktop ? `letter-spacing: ${postDescriptionLetterSpacing.Desktop}${postDescriptionLetterSpacingUnits.Desktop};` : ""}
            
            ${postDescriptionGlobalTypoSwitcher.lineHeight === false && postDescriptionLineHeight.Desktop ? `line-height: ${postDescriptionLineHeight.Desktop}${postDescriptionLineHeightUnits.Desktop};` : ""}

            ${postDescriptionSpacing.Desktop ? `margin-top: ${postDescriptionSpacing.Desktop}${postDescriptionSpacingUnits.Desktop};` : ""}

}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-description:hover{
                ${postDescriptionHoverColor ? `color: ${postDescriptionHoverColor};` : ""}
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link-count {
            ${postCountSpacing.Desktop ? `gap: ${postCountSpacing.Desktop}${postCountSpacingUnits.Desktop};` : ""}
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link-count.fb-taxonomy-count{
        
            ${postCountColor ? `color: ${postCountColor};` : ""}

            ${postCountGlobalTypoSwitcher.fontFamily === true && postCountGlobalTypographyData.fontFamily ? `font-family: ${postCountGlobalTypographyData.fontFamily};` : ""}
            ${postCountGlobalTypoSwitcher.fontSize === true && postCountGlobalTypographyData.fontSize ? `font-size: ${postCountGlobalTypographyData.fontSize};` : ""}
            ${postCountGlobalTypoSwitcher.fontWeight === true && postCountGlobalTypographyData.fontWeight ? `font-weight: ${postCountGlobalTypographyData.fontWeight};` : ""}
            ${postCountGlobalTypoSwitcher.fontStyle === true && postCountGlobalTypographyData.fontStyle ? `font-style: ${postCountGlobalTypographyData.fontStyle};` : ""}
            ${postCountGlobalTypoSwitcher.textTransform === true && postCountGlobalTypographyData.textTransform ? `text-transform: ${postCountGlobalTypographyData.textTransform};` : ""}
            ${postCountGlobalTypoSwitcher.textDecoration === true && postCountGlobalTypographyData.textDecoration ? `text-decoration: ${postCountGlobalTypographyData.textDecoration};` : ""}
            ${postCountGlobalTypoSwitcher.letterSpacing === true && postCountGlobalTypographyData.letterSpacing ? `letter-spacing: ${postCountGlobalTypographyData.letterSpacing};` : ""}
            ${postCountGlobalTypoSwitcher.lineHeight === true && postCountGlobalTypographyData.lineHeight ? `line-height: ${postCountGlobalTypographyData.lineHeight};` : ""}
            ${postCountGlobalTypoSwitcher.fontFamily === false && postCountFontFamily ? `font-family: ${postCountFontFamily};` : ""}
            ${postCountGlobalTypoSwitcher.fontSize === false && postCountFontSize.Desktop ? `font-size: ${postCountFontSize.Desktop}${postCountFontSizeUnits.Desktop};` : ""}
            ${postCountGlobalTypoSwitcher.fontWeight === false && postCountFontWeight ? `font-weight: ${postCountFontWeight};` : ""}
            ${postCountGlobalTypoSwitcher.fontStyle === false && postCountFontStyle ? `font-style: ${postCountFontStyle};` : ""}
            ${postCountGlobalTypoSwitcher.textTransform === false && postCountTextTransform ? `text-transform: ${postCountTextTransform};` : ""}
            ${postCountGlobalTypoSwitcher.textDecoration === false && postCountTextDecoration ? `text-decoration: ${postCountTextDecoration};` : ""}
            ${postCountGlobalTypoSwitcher.letterSpacing === false && postCountLetterSpacing.Desktop ? `letter-spacing: ${postCountLetterSpacing.Desktop}${postCountLetterSpacingUnits.Desktop};` : ""}
            ${postCountGlobalTypoSwitcher.lineHeight === false && postCountLineHeight.Desktop ? `line-height: ${postCountLineHeight.Desktop}${postCountLineHeightUnits.Desktop};` : ""}
            ${postCountNormalBackgroundType === "gradient"
            ? `
                    ${postCountNormalCustomGradientSwitcher && postCountNormalCustomGradientInputValue
                ? `
                            background: ${postCountNormalCustomGradientInputValue};
                        ` : `
                            background: ${postCountNormalGradientColor};
                        `
            }
                ` : `
                    ${postCountNormalClassicColor ? `background: ${postCountNormalClassicColor};` : ""}
                `
        }

            ${postCountPaddingDesktopWidth && postCountPaddingDesktop.top ? `padding: ${postCountPaddingDesktopWidth};` : ""}

            ${postCountBorder ? `border: ${postCountBorder};` : ""}
            ${postCountBorderDesktopWidth && postCountBorderDesktop.top ? `border-width: ${postCountBorderDesktopWidth};` : ""}
            ${postCountBorderRadiusDesktopWidth && postCountBorderRadiusDesktop.top ? `border-radius: ${postCountBorderRadiusDesktopWidth};` : ""}
            ${postCountBorderColor ? `border-color: ${postCountBorderColor};` : ""}
            ${postCountBoxShadowCssValue ? `box-shadow: ${postCountBoxShadowCssValue};` : ""}

    transition: background-color .3s ease, border-color .3s ease;
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item:hover.fb-taxonomy-count{
            ${postCountHoverColor ? `color: ${postCountHoverColor};` : ""}
            ${postCountHoverBackgroundType === "gradient"
            ? `  
                    ${postCountHoverCustomGradientSwitcher && postCountHoverCustomGradientInputValue
                ? `
                            background: ${postCountHoverCustomGradientInputValue};
                        ` : `
                            background: ${postCountHoverGradientColor};
                        `
            }
                ` : `
                    ${postCountHoverClassicColor ? `background: ${postCountHoverClassicColor};` : ""}
                `
        }
            ${postCountBorderHoverColor ? `border-color: ${postCountBorderHoverColor};` : ""}
            ${postCountBoxShadowHoverCssValue ? `box-shadow: ${postCountBoxShadowHoverCssValue};` : ""}
}

        .${blockID}.fb-post-category-area.fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button {

            ${buttonWidth.Desktop && buttonWidthUnits.Desktop ? `width: ${buttonWidth.Desktop}${buttonWidthUnits.Desktop};` : ""}
            ${buttonGlobalTypoSwitcher.fontFamily === true && buttonGlobalTypographyData.fontFamily ? `font-family: ${buttonGlobalTypographyData.fontFamily};` : ""}
            ${buttonGlobalTypoSwitcher.fontSize === true && buttonGlobalTypographyData.fontSize ? `font-size: ${buttonGlobalTypographyData.fontSize};` : ""}
            ${buttonGlobalTypoSwitcher.fontWeight === true && buttonGlobalTypographyData.fontWeight ? `font-weight: ${buttonGlobalTypographyData.fontWeight};` : ""}
            ${buttonGlobalTypoSwitcher.fontStyle === true && buttonGlobalTypographyData.fontStyle ? `font-style: ${buttonGlobalTypographyData.fontStyle};` : ""}
            ${buttonGlobalTypoSwitcher.textTransform === true && buttonGlobalTypographyData.textTransform ? `text-transform: ${buttonGlobalTypographyData.textTransform};` : ""}
            ${buttonGlobalTypoSwitcher.textDecoration === true && buttonGlobalTypographyData.textDecoration ? `text-decoration: ${buttonGlobalTypographyData.textDecoration};` : ""}
            ${buttonGlobalTypoSwitcher.letterSpacing === true && buttonGlobalTypographyData.letterSpacing ? `letter-spacing: ${buttonGlobalTypographyData.letterSpacing};` : ""}
            ${buttonGlobalTypoSwitcher.lineHeight === true && buttonGlobalTypographyData.lineHeight ? `line-height: ${buttonGlobalTypographyData.lineHeight};` : ""}
            
            ${buttonGlobalTypoSwitcher.fontFamily === false && buttonFontFamily && buttonFontFamily !== "Default" ? `font-family: ${buttonFontFamily};` : ""}
            ${buttonGlobalTypoSwitcher.fontSize === false && buttonFontSize.Desktop && buttonFontSizeUnits.Desktop ? `font-size: ${buttonFontSize.Desktop}${buttonFontSizeUnits.Desktop};` : ""}
            ${buttonGlobalTypoSwitcher.fontWeight === false && buttonFontWeight ? `font-weight: ${buttonFontWeight};` : ""}
            ${buttonGlobalTypoSwitcher.fontStyle === false && buttonFontStyle ? `font-style: ${buttonFontStyle};` : ""}
            ${buttonGlobalTypoSwitcher.textTransform === false && buttonTextTransform ? `text-transform: ${buttonTextTransform};` : ""}
            ${buttonGlobalTypoSwitcher.textDecoration === false && buttonTextDecoration ? `text-decoration: ${buttonTextDecoration};` : ""}
            ${buttonGlobalTypoSwitcher.letterSpacing === false && buttonLetterSpacing.Desktop && buttonLetterSpacingUnits.Desktop ? `letter-spacing: ${buttonLetterSpacing.Desktop}${buttonLetterSpacingUnits.Desktop};` : ""}
            ${buttonGlobalTypoSwitcher.lineHeight === false && buttonLineHeight.Desktop && buttonLineHeightUnits.Desktop ? `line-height: ${buttonLineHeight.Desktop}${buttonLineHeightUnits.Desktop};` : ""}

            ${buttonBgColor ? `background-color: ${buttonBgColor};` : ""}
            ${buttonBorder ? `border: ${buttonBorder};` : ""}
            ${buttonDesktopBorderWidthStr && buttonDesktopBorderWidth?.top ? `border-width: ${buttonDesktopBorderWidthStr};` : ""}
            ${buttonDesktopBorderRadiusStr && buttonDesktopBorderRadiusWidth?.top ? `border-radius: ${buttonDesktopBorderRadiusStr};` : ""}
            ${buttonBorderColor ? `border-color: ${buttonBorderColor};` : ""}
            ${buttonBoxShadowCssValue ? `box-shadow: ${buttonBoxShadowCssValue};` : ""} 
            ${buttonDesktopPaddingStr && buttonDesktopPadding?.top ? `padding: ${buttonDesktopPaddingStr};` : ""}
            ${buttonDesktopMarginStr && buttonDesktopMargin?.top ? `margin: ${buttonDesktopMarginStr};` : ""}
            ${buttonIconGapSize.Desktop ? `gap: ${buttonIconGapSize.Desktop}${buttonIconGapUnits.Desktop};` : ""}

    transition: all 0.3s ease;
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover{
            ${buttonBgHoverColor ? `background-color: ${buttonBgHoverColor};` : ""}
            ${buttonBorderHoverColor ? `border-color: ${buttonBorderHoverColor};` : ""}
            ${buttonBoxShadowHoverCssValue ? `box-shadow: ${buttonBoxShadowHoverCssValue};` : ""}
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-text{
            ${buttonColor ? `color: ${buttonColor};` : ""}
    transition: all 0.3s ease;
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover.fb-taxonomy-read-more-text {
            ${buttonHoverColor ? `color: ${buttonHoverColor};` : ""}
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon {
            ${buttonIconBgColor ? `background-color: ${buttonIconBgColor};` : ""}
            ${buttonIconBorder ? `border: ${buttonIconBorder};` : ""}
            ${buttonIconBorderColor ? `border-color: ${buttonIconBorderColor};` : ""}
            ${buttonIconBorderDesktopWidth && buttonIconBorderDesktop.top
            ? `border-width: ${buttonIconBorderDesktopWidth};`
            : ""
        }
            ${buttonIconBorderRadiusDesktopWidth !== buttonIconBorderRadiusDesktop.top ? `border-radius: ${buttonIconBorderRadiusDesktopWidth};` : ""}
            ${buttonIconDesktopPaddingStr && buttonIconDesktopPadding?.top ? `padding: ${buttonIconDesktopPaddingStr}` : ""}
}
        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover.fb-taxonomy-read-more-icon-wrapper {
            ${buttonIconBgHoverColor ? `background-color: ${buttonIconBgHoverColor};` : ""}
            ${buttonIconBorderHoverColor ? `border-color: ${buttonIconBorderHoverColor};` : ""}
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon svg{
            ${buttonIconSize.Desktop && buttonIconSizeUnits.Desktop ? `width: ${buttonIconSize.Desktop}${buttonIconSizeUnits.Desktop};` : ""}
            ${buttonIconSize.Desktop && buttonIconSizeUnits.Desktop ? `height: ${buttonIconSize.Desktop}${buttonIconSizeUnits.Desktop};` : ""}
            ${buttonIconColor ? `fill: ${buttonIconColor};` : ""}
            ${buttonIconRotate.Desktop ? `transform: rotate(${buttonIconRotate.Desktop}deg);` : ""}
    transition: all .3s ease -in -out;
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover.fb-taxonomy-read-more-icon svg{
            ${buttonIconHoverColor ? `fill: ${buttonIconHoverColor};` : ""}
            ${buttonIconRotateHover.Desktop ? `transform: rotate(${buttonIconRotateHover.Desktop}deg);` : ""}
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon-image{
            ${buttonIconImageWidth ? `width: ${buttonIconImageWidth.Desktop}${buttonIconImageWidthUnits.Desktop};` : ""}
            ${buttonIconImageHeight ? `height: ${buttonIconImageHeight.Desktop}${buttonIconImageHeightUnits.Desktop};` : ""}
            ${buttonImageRotate.Desktop ? `transform: rotate(${buttonImageRotate.Desktop}deg);` : ""}
    transition: all .3s ease -in -out;
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover.fb-taxonomy-read-more-icon-image {
            ${buttonImageRotateHover.Desktop ? `transform: rotate(${buttonImageRotateHover.Desktop}deg);` : ""}
}

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon-image img{
            ${readMoreIconImagedisplay ? `object-fit: ${readMoreIconImagedisplay};` : ""}
}
    

        ${layoutType === "list" && premadeStyle === "style-1"
            ? `
                .${blockID}.fb-taxonomy-style-1 .fb-taxonomy-list {
                    list-style: ${listStyle === "bullet" ? "disc" : listStyle === "number" ? "decimal" : "none"
            };

                    ${listStyle === "none" ? `padding-left: 0px;` : ""}
                }
            ` : ""
        }

        ${layoutType === "list" &&
            premadeStyle === "style-2"
            ? `
                .${blockID} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id="0"]{
                    ${postListTypeColor ? `border-color: ${postListTypeColor};` : ""}
                }

                ${buttonBgColor ? `
                    .${blockID}.fb-taxonomy-style-2 .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button{
                        border-color: ${buttonBgColor} !important;
                    }
                    .${blockID}.fb-taxonomy-style-2 .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-text{
                            color: ${buttonBgColor} !important;
                    }
                    .${blockID}.fb-taxonomy-style-2 .fb-taxonomy-list .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon svg{
                            fill: ${buttonBgColor} !important;
                    }

                ` : ""}

                ${buttonBgHoverColor ? `
                    .${blockID}.fb-taxonomy-style-2 .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button:hover {
                        border-color: ${buttonBgHoverColor} !important;
                    }
                    .${blockID}.fb-taxonomy-style-2 .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button:hover .fb-taxonomy-read-more-text{
                        color: ${buttonBgHoverColor} !important;
                    }
                    .${blockID}.fb-taxonomy-style-2 .fb-taxonomy-list .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button:hover .fb-taxonomy-read-more-icon svg{
                        fill: ${buttonBgHoverColor} !important;
                    }
                
                ` : ""}

            ` : ""
        }

        .${blockID} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id="0"] {
            ${postListItemSpacing.Desktop ? ` margin-bottom: ${postListItemSpacing.Desktop}${postListItemSpacingUnits.Desktop};` : ""}
}
        
        .${blockID} .fb_taxonomy_sublist {
            ${postListItemSpacing.Desktop
            ? `
                    padding-top: ${postListItemSpacing.Desktop}${postListItemSpacingUnits.Desktop};
                    padding-bottom: ${postListItemSpacing.Desktop}${postListItemSpacingUnits.Desktop};
                    gap: ${postListItemSpacing.Desktop}${postListItemSpacingUnits.Desktop}; 
                ` : ""
        }
}

        .${blockID} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id] {
            ${listIndentation.Desktop ? `padding-left: ${listIndentation.Desktop}${listIndentationUnits.Desktop};` : ""}
    transition: all .3s ease;
}

        .${blockID} .fb-taxonomy-list .fb-taxonomy-item::marker{
            ${postListTypeColor ? `color: ${postListTypeColor};` : ""}
            ${postTitleGlobalTypoSwitcher.fontSize === true && postTitleGlobalTypographyData.fontSize ? `font-size: ${postTitleGlobalTypographyData.fontSize};` : ""}
            ${postTitleGlobalTypoSwitcher.fontSize === false && postTitleFontSize.Desktop ? `font-size: ${postTitleFontSize.Desktop}${postTitleFontSizeUnits.Desktop};` : ""}
    transition: all .3s ease -in -out;
}

        .${blockID} .fb-taxonomy-list .fb-taxonomy-item:hover::marker{
            ${postListTypeHoverColor ? `color: ${postListTypeHoverColor};` : ""}
}

        .${blockID} .fb-taxonomy-list .fb-taxonomy-item .fb-tax-separator{
            ${separatorWidth.Desktop && separatorWidthUnits.Desktop ? `width: ${separatorWidth.Desktop}${separatorWidthUnits.Desktop};` : ""}
            ${separatorStyle ? `border-top-style: ${separatorStyle};` : ""}
            ${separatorThickness.Desktop && separatorThicknessUnits.Desktop ? `border-top-width: ${separatorThickness.Desktop}${separatorThicknessUnits.Desktop};` : ""}
            ${separatorColor ? `border-color: ${separatorColor};` : ""}

    transition: all .3s ease;
}

        .${blockID} .fb-taxonomy-list .fb-taxonomy-item:hover.fb-tax-separator{
            ${separatorHoverColor ? `border-color: ${separatorHoverColor};` : ""}
}

        .${blockID}.fb-post-category-area {
            ${postCategoryPositionType === "default" ? `position: relative;` : ""}
            ${postCategoryPositionType !== "default" && postCategoryPositionType !== "relative" ? `width: 100%;` : ""}
            ${postCategoryPositionType !== "default" ? `position: ${postCategoryPositionType};` : ""}
            
            ${postCategoryPositionType !== "default" &&
            postCategoryPositionType !== "relative" &&
            postCategoryHZOrientationType === "left" &&
            postCategoryHZLeftOffset.Desktop !== undefined
            ? `left: ${postCategoryHZLeftOffset.Desktop}${postCategoryHZLeftOffsetUnits.Desktop};` : ""
        }
            
            ${postCategoryPositionType !== "default" &&
            postCategoryPositionType !== "relative" &&
            postCategoryHZOrientationType === "right" &&
            postCategoryHZRightOffset.Desktop !== undefined
            ? `right: ${postCategoryHZRightOffset.Desktop}${postCategoryHZRightOffsetUnits.Desktop};` : ""
        }

            ${postCategoryPositionType !== "default" &&
            postCategoryPositionType !== "relative" &&
            postCategoryVROrientationType === "top" &&
            postCategoryVRTopOffset.Desktop !== undefined
            ? `top: ${postCategoryVRTopOffset.Desktop}${postCategoryVRTopOffsetUnits.Desktop};` : ""
        }
            
            ${postCategoryPositionType !== "default" &&
            postCategoryPositionType !== "relative" &&
            postCategoryVROrientationType === "bottom" &&
            postCategoryVRBottomOffset.Desktop !== undefined
            ? `bottom: ${postCategoryVRBottomOffset.Desktop}${postCategoryVRBottomOffsetUnits.Desktop};` : ""
        }

            ${postGlobalZIndex.Desktop ? `z-index: ${postGlobalZIndex.Desktop};` : ""}

            ${postGlobalDesktopPaddingWidth && postGlobalPaddingDesktop.top ? `padding: ${postGlobalDesktopPaddingWidth};` : ""}
            ${postGlobalDesktopMarginWidth && postGlobalMarginDesktop.top ? `margin: ${postGlobalDesktopMarginWidth};` : ""}
            ${postGlobalBorder ? `border: ${postGlobalBorder};` : ""} 
            ${postGlobalDesktopBorderWidth && postGlobalBorderDesktop.top ? `border-width: ${postGlobalDesktopBorderWidth};` : ""}
            ${postGlobalDesktopBorderRadiusWidth && postGlobalBorderRadiusDesktop.top ? `border-radius: ${postGlobalDesktopBorderRadiusWidth}!important;` : ""}
            ${postGlobalBorderColor ? `border-color: ${postGlobalBorderColor};` : ""}
            ${postGlobalBoxShadowCssValue ? `box-shadow: ${postGlobalBoxShadowCssValue};` : ""}
            ${postGlobalNormalBackgroundType === "gradient"
            ? `  
                    ${postGlobalNormalCustomGradientSwitcher && postGlobalNormalCustomGradientInputValue
                ? `background: ${postGlobalNormalCustomGradientInputValue};`
                : `background: ${postGlobalNormalGradientColor};`
            }
                ` : `
                    ${postGlobalNormalClassicColor ? `background: ${postGlobalNormalClassicColor};` : ""}
                `
        }

            ${postCategoryOverflow !== "default" ? `overflow: ${postCategoryOverflow};` : ""}

    transition: all 0.3s ease -in -out;

}

        .${blockID}.fb-post-category-area:hover {
            ${postGlobalHoverBackgroundType === "gradient"
            ? `  
                    ${postGlobalHoverCustomGradientSwitcher && postGlobalHoverCustomGradientInputValue
                ? `background: ${postGlobalHoverCustomGradientInputValue};`
                : `background: ${postGlobalHoverGradientColor};`
            }
                ` : `
                    ${postGlobalHoverClassicColor ? `background: ${postGlobalHoverClassicColor};` : ""}
                    ${postGlobalBorderHoverColor ? `border-color: ${postGlobalBorderHoverColor};` : ""}
                    ${postGlobalBoxShadowHoverCssValue ? `box-shadow: ${postGlobalBoxShadowHoverCssValue};` : ""}
                `
        }
}


@media only screen and(max-width: 1024px) {

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-author-wrapper{
            ${authorAvatarGaps.Tablet ? `gap: ${authorAvatarGaps.Tablet}${authorAvatarGapUnits.Tablet};` : ""}
    }
            
        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link-count.fb-taxonomy-count{
        display: flex;
        flex-direction: row;
            ${labelGaps.Tablet ? `gap: ${labelGaps.Tablet}${labelGapUnits.Tablet};` : ""}
    }

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-more-info{
            ${postAuthorMarginTabletWidth && postAuthorMarginTablet.top ? `margin: ${postAuthorMarginTabletWidth};` : ""}
    }

        .${blockID} .fb-taxonomy-grid {
        grid-template-columns: repeat(${gridColumns.Tablet}, 1fr);
        row-gap: ${gridRowGap.Tablet}${gridGapUnits.Tablet};
        column-gap: ${gridColumnGap.Tablet}${gridGapUnits.Tablet};
    }


        .${blockID} .fb-taxonomy-grid .fb-taxonomy-item,
        .${blockID} .single-item .fb-taxonomy-item {
            ${taxonomyHeight.Tablet ? `min-height: ${taxonomyHeight.Tablet}${taxonomyHeightUnits.Tablet};` : ""}
            ${postCategoryPaddingTabletWidth && postCategoryPaddingTablet.top ? `padding: ${postCategoryPaddingTabletWidth};` : ""}
            ${postCategoryMarginTabletWidth && postCategoryMarginTablet.top ? `margin: ${postCategoryMarginTabletWidth};` : ""}
            ${postCategoryBorderTabletWidth && postCategoryBorderTablet.top ? `border-width: ${postCategoryBorderTabletWidth};` : ""}
            ${postCategoryBorderRadiusTabletWidth && postCategoryBorderRadiusTablet.top ? `border-radius: ${postCategoryBorderRadiusTabletWidth};` : ""}
    }


        ${premadeStyle === "style-2"
            ? `
                .${blockID}.fb-taxonomy-style-2 .fb-taxonomy-grid .fb-taxonomy-item,
                .${blockID}.fb-taxonomy-style-2 .single-item .fb-taxonomy-item {			
                    ${postCategoryInnerPaddingTabletWidth && postCategoryPaddingTablet.top ? `padding: ${postCategoryInnerPaddingTabletWidth};` : ""}
                    ${postCategoryPaddingTabletWidth && postCategoryPaddingTablet.top ? `padding-bottom: ${postCategoryPaddingTablet.top}${postCategoryPaddingUnits.Tablet};` : ""}
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-meta,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-meta  {

                    ${postCategoryPaddingTabletWidth && postCategoryPaddingTablet.top ? `padding: ${postCategoryPaddingTabletWidth};` : ""}

                    ${postCategoryBorderRadiusTabletWidth && postCategoryBorderRadiusTablet.top
                ? `border-radius: ${postCategoryBorderRadiusTablet.top / 2
                }${postCategoryBorderRadiusUnits.Tablet} ${postCategoryBorderRadiusTablet.right / 2
                }${postCategoryBorderRadiusUnits.Tablet} ${postCategoryBorderRadiusTablet.bottom / 2
                }${postCategoryBorderRadiusUnits.Tablet} ${postCategoryBorderRadiusTablet.left / 2
                }${postCategoryBorderRadiusUnits.Tablet};`
                : ""
            }
                }
            ` : ""
        }						


        ${premadeStyle === "style-4"
            ? `
                .${blockID}.fb-taxonomy-style-4 .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-card-content,
                .${blockID}.fb-taxonomy-style-4 .single-item .fb-taxonomy-item .fb-taxonomy-card-content{
                    ${postCategoryPaddingTabletWidth && postCategoryPaddingTablet.top ? `padding: ${postCategoryPaddingTabletWidth};` : ""}
                }
            ` : ""
        }

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link, 
        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link.fb-taxonomy-name {
            
            ${postTitleGlobalTypoSwitcher.fontSize === false && postTitleFontSize.Tablet ? `font-size: ${postTitleFontSize.Tablet}${postTitleFontSizeUnits.Tablet};` : ""}
            
            ${postTitleGlobalTypoSwitcher.letterSpacing === false && postTitleLetterSpacing.Tablet ? `letter-spacing: ${postTitleLetterSpacing.Tablet}${postTitleLetterSpacingUnits.Tablet};` : ""}
            
            ${postTitleGlobalTypoSwitcher.lineHeight === false && postTitleLineHeight.Tablet ? `line-height: ${postTitleLineHeight.Tablet}${postTitleLineHeightUnits.Tablet};` : ""}
    }


        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-description{

            ${postDescriptionGlobalTypoSwitcher.fontSize === false && postDescriptionFontSize.Tablet
            ? `font-size: ${postDescriptionFontSize.Tablet}${postDescriptionFontSizeUnits.Tablet};` : ""
        }

            ${postDescriptionGlobalTypoSwitcher.letterSpacing === false && postDescriptionLetterSpacing.Tablet
            ? `letter-spacing: ${postDescriptionLetterSpacing.Tablet}${postDescriptionLetterSpacingUnits.Tablet};` : ""
        }

            ${postDescriptionGlobalTypoSwitcher.lineHeight === false && postDescriptionLineHeight.Tablet
            ? `line-height: ${postDescriptionLineHeight.Tablet}${postDescriptionLineHeightUnits.Tablet};` : ""
        }

            ${postDescriptionSpacing.Tablet
            ? `margin-top: ${postDescriptionSpacing.Tablet}${postDescriptionSpacingUnits.Tablet};` : ""
        }
    }

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link-count {
            ${postCountSpacing.Tablet ? `gap: ${postCountSpacing.Tablet}${postCountSpacingUnits.Tablet};` : ""}
    }

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link-count.fb-taxonomy-count{
            ${postCountGlobalTypoSwitcher.fontSize === false && postCountFontSize.Tablet ? `font-size: ${postCountFontSize.Tablet}${postCountFontSizeUnits.Tablet};` : ""}
            
            ${postCountGlobalTypoSwitcher.letterSpacing === false && postCountLetterSpacing.Tablet
            ? `letter-spacing: ${postCountLetterSpacing.Tablet}${postCountLetterSpacingUnits.Tablet};` : ""
        }

            ${postCountGlobalTypoSwitcher.lineHeight === false && postCountLineHeight.Tablet
            ? `line-height: ${postCountLineHeight.Tablet}${postCountLineHeightUnits.Tablet};` : ""
        }

            ${postCountPaddingTabletWidth && postCountPaddingTablet.top ? `padding: ${postCountPaddingTabletWidth};` : ""}
            ${postCountBorderTabletWidth && postCountBorderTablet.top ? `border-width: ${postCountBorderTabletWidth};` : ""}
            ${postCountBorderRadiusTabletWidth && postCountBorderRadiusTablet.top ? `border-radius: ${postCountBorderRadiusTabletWidth};` : ""}
    }

        .${blockID}.fb-post-category-area.fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button {
            ${buttonWidth.Tablet && buttonWidthUnits.Tablet ? `width: ${buttonWidth.Tablet}${buttonWidthUnits.Tablet};` : ""}
            ${buttonGlobalTypoSwitcher.fontSize === false && buttonFontSize.Tablet && buttonFontSizeUnits.Tablet
            ? `font-size: ${buttonFontSize.Tablet}${buttonFontSizeUnits.Tablet};` : ""
        }
            ${buttonGlobalTypoSwitcher.letterSpacing === false && buttonLetterSpacing.Tablet && buttonLetterSpacingUnits.Tablet
            ? `letter-spacing: ${buttonLetterSpacing.Tablet}${buttonLetterSpacingUnits.Tablet};` : ""
        }
            ${buttonGlobalTypoSwitcher.lineHeight === false && buttonLineHeight.Tablet && buttonLineHeightUnits.Tablet
            ? `line-height: ${buttonLineHeight.Tablet}${buttonLineHeightUnits.Tablet};` : ""
        }
            ${buttonTabletBorderWidthStr && buttonTabBorderWidth?.top ? `border-width: ${buttonTabletBorderWidthStr};` : ""}
            ${buttonTabletBorderRadiusStr && buttonTabBorderRadiusWidth?.top ? `border-radius: ${buttonTabletBorderRadiusStr};` : ""}
            ${buttonTabletPaddingStr && buttonTabPadding?.top ? `padding: ${buttonTabletPaddingStr};` : ""}  
            ${buttonTabletMarginStr && buttonTabMargin?.top ? `margin: ${buttonTabletMarginStr};` : ""} 

            ${buttonIconGapSize.Tablet ? `gap: ${buttonIconGapSize.Tablet}${buttonIconGapUnits.Tablet};` : ""}
    }

        .${blockID}.fb-post-category-area.fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon{
            ${buttonIconBorderTabletWidth !== buttonIconBorderTablet.top ? `border-width: ${buttonIconBorderTabletWidth};` : ""}
            ${buttonIconBorderRadiusTabletWidth !== buttonIconBorderRadiusTablet.top ? `border-radius: ${buttonIconBorderRadiusTabletWidth};` : ""}
            ${buttonIconTabletPaddingStr && buttonIconTabPadding?.top ? `padding: ${buttonIconTabletPaddingStr};` : ""}
    }

        .${blockID}.fb-post-category-area.fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon svg{
            ${buttonIconSize.Tablet && buttonIconSizeUnits.Tablet ? `width: ${buttonIconSize.Tablet}${buttonIconSizeUnits.Tablet};` : ""}
            ${buttonIconSize.Tablet && buttonIconSizeUnits.Tablet ? `height: ${buttonIconSize.Tablet}${buttonIconSizeUnits.Tablet};` : ""}
            ${buttonIconRotate.Tablet ? `transform: rotate(${buttonIconRotate.Tablet}deg);` : ""}
    }

        .${blockID}.fb-post-category-area.fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover.fb-taxonomy-read-more-icon svg{
            ${buttonIconRotateHover.Tablet ? `transform: rotate(${buttonIconRotateHover.Tablet}deg);` : ""}
    }

        .${blockID}.fb-post-category-area.fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon-image{
            ${buttonIconImageWidth ? `width: ${buttonIconImageWidth.Tablet}${buttonIconImageWidthUnits.Tablet};` : ""}
            ${buttonIconImageHeight ? `height: ${buttonIconImageHeight.Tablet}${buttonIconImageHeightUnits.Tablet};` : ""}
            ${buttonImageRotate.Tablet ? `transform: rotate(${buttonImageRotate.Tablet}deg);` : ""}
    }

        .${blockID}.fb-post-category-area.fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover.fb-taxonomy-read-more-icon-image{
            ${buttonImageRotateHover.Tablet ? `transform: rotate(${buttonImageRotateHover.Tablet}deg);` : ""}
    }
                
        .${blockID} .fb-taxonomy-list .fb-taxonomy-item::marker{
            ${postTitleGlobalTypoSwitcher.fontSize === false && postTitleFontSize.Tablet
            ? `font-size: ${postTitleFontSize.Tablet}${postTitleFontSizeUnits.Tablet};` : ""
        }
    }


        .${blockID} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id] {
            ${listIndentation.Tablet ? `padding-left: ${listIndentation.Tablet}${listIndentationUnits.Tablet};` : ""}
    }

        .${blockID} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id="0"] {
            ${postListItemSpacing.Tablet ? `margin-bottom: ${postListItemSpacing.Tablet}${postListItemSpacingUnits.Tablet};` : ""}
    }
        
        .${blockID} .fb_taxonomy_sublist {
            ${postListItemSpacing.Tablet
            ? `
                    padding-top: ${postListItemSpacing.Tablet}${postListItemSpacingUnits.Tablet};
                    padding-bottom: ${postListItemSpacing.Tablet}${postListItemSpacingUnits.Tablet};
                    gap: ${postListItemSpacing.Tablet}${postListItemSpacingUnits.Tablet}; 
                ` : ""
        }
    }

        .${blockID} .fb-taxonomy-list .fb-taxonomy-item .fb-tax-separator{
            ${separatorWidth.Tablet && separatorWidthUnits.Tablet ? `width: ${separatorWidth.Tablet}${separatorWidthUnits.Tablet};` : ""}
            ${separatorThickness.Tablet && separatorThicknessUnits.Tablet ? `border-top-width: ${separatorThickness.Tablet}${separatorThicknessUnits.Tablet};` : ""}
    }
                    
                    
        .${blockID}.fb-post-category-area {
            ${postCategoryPositionType !== "default" &&
            postCategoryPositionType !== "relative" &&
            postCategoryHZOrientationType === "left" &&
            postCategoryHZLeftOffset.Tablet !== undefined
            ? `left: ${postCategoryHZLeftOffset.Tablet}${postCategoryHZLeftOffsetUnits.Tablet};`
            : ""
        }
            ${postCategoryPositionType !== "default" &&
            postCategoryPositionType !== "relative" &&
            postCategoryHZOrientationType === "right" &&
            postCategoryHZRightOffset.Tablet !== undefined
            ? `right: ${postCategoryHZRightOffset.Tablet}${postCategoryHZRightOffsetUnits.Tablet};`
            : ""
        }
            ${postCategoryPositionType !== "default" &&
            postCategoryPositionType !== "relative" &&
            postCategoryVROrientationType === "top" &&
            postCategoryVRTopOffset.Tablet !== undefined
            ? `top: ${postCategoryVRTopOffset.Tablet}${postCategoryVRTopOffsetUnits.Tablet};`
            : ""
        }
            ${postCategoryPositionType !== "default" &&
            postCategoryPositionType !== "relative" &&
            postCategoryVROrientationType === "bottom" &&
            postCategoryVRBottomOffset.Tablet !== undefined
            ? `bottom: ${postCategoryVRBottomOffset.Tablet}${postCategoryVRBottomOffsetUnits.Tablet};`
            : ""
        }
            ${postGlobalZIndex.Tablet ? `z-index: ${postGlobalZIndex.Tablet}` : ""}

            ${postGlobalTabletPaddingWidth && postGlobalPaddingTablet.top ? `padding: ${postGlobalTabletPaddingWidth};` : ""}
            ${postGlobalTabletMarginWidth && postGlobalMarginTablet.top ? `margin: ${postGlobalTabletMarginWidth};` : ""}
            ${postGlobalBorder ? `border: ${postGlobalBorder};` : ""} 
            ${postGlobalTabletBorderWidth && postGlobalBorderTablet.top ? `border-width: ${postGlobalTabletBorderWidth};` : ""}
            ${postGlobalTabletBorderRadiusWidth && postGlobalBorderRadiusTablet.top ? `border-radius: ${postGlobalTabletBorderRadiusWidth}!important;` : ""}
    }

}

@media only screen and(max-width: 767px) {

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-author-wrapper{
            ${authorAvatarGaps.Mobile ? `gap: ${authorAvatarGaps.Mobile}${authorAvatarGapUnits.Mobile};` : ""}
    }
            
        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link-count.fb-taxonomy-count {
        display: flex;
        flex-direction: row;
            ${labelGaps.Mobile ? `gap: ${labelGaps.Mobile}${labelGapUnits.Mobile};` : ""}
    }

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-more-info{
            ${postAuthorMarginMobileWidth && postAuthorMarginMobile.top ? `margin: ${postAuthorMarginMobileWidth};` : ""}
    }
                
        .${blockID} .fb-taxonomy-grid {
        grid-template-columns: repeat(${gridColumns.Mobile}, 1fr);
        row-gap: ${gridRowGap.Mobile}${gridGapUnits.Mobile};
        column-gap: ${gridColumnGap.Mobile}${gridGapUnits.Mobile};
    }
                
        .${blockID} .fb-taxonomy-grid .fb-taxonomy-item,
        .${blockID} .single-item .fb-taxonomy-item {
            ${taxonomyHeight.Mobile
            ? `min-height: ${taxonomyHeight.Mobile}${taxonomyHeightUnits.Mobile};`
            : ""
        }
            ${postCategoryPaddingMobileWidth && postCategoryPaddingMobile.top
            ? `padding: ${postCategoryPaddingMobileWidth};`
            : ""
        }
            ${postCategoryMarginMobileWidth && postCategoryMarginMobile.top
            ? `margin: ${postCategoryMarginMobileWidth};`
            : ""
        }
            ${postCategoryBorderMobileWidth && postCategoryBorderMobile.top
            ? `border-width: ${postCategoryBorderMobileWidth};`
            : ""
        }
            ${postCategoryBorderRadiusMobileWidth &&
            postCategoryBorderRadiusMobile.top
            ? `border-radius: ${postCategoryBorderRadiusMobileWidth};`
            : ""
        }
    }

        ${premadeStyle === "style-2"
            ? `
                .${blockID}.fb-taxonomy-style-2 .fb-taxonomy-grid .fb-taxonomy-item,
                .${blockID}.fb-taxonomy-style-2 .single-item .fb-taxonomy-item {		
                    
                    ${postCategoryInnerPaddingMobileWidth && postCategoryPaddingMobile.top
                ? `padding: ${postCategoryInnerPaddingMobileWidth};` : ""
            }
                    
                    ${postCategoryPaddingMobileWidth && postCategoryPaddingMobile.top
                ? `padding-bottom: ${postCategoryPaddingMobile.top}${postCategoryPaddingUnits.Mobile};` : ""
            }
                }

                .${blockID} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-meta,
                .${blockID} .single-item .fb-taxonomy-item .fb-taxonomy-meta{

                    ${postCategoryPaddingMobileWidth && postCategoryPaddingMobile.top ? `padding: ${postCategoryPaddingMobileWidth};` : ""}

                    ${postCategoryBorderRadiusMobileWidth && postCategoryBorderRadiusMobile.top
                ? `border-radius: ${postCategoryBorderRadiusMobile.top / 2
                }${postCategoryBorderRadiusUnits.Mobile} ${postCategoryBorderRadiusMobile.right / 2
                }${postCategoryBorderRadiusUnits.Mobile} ${postCategoryBorderRadiusMobile.bottom / 2
                }${postCategoryBorderRadiusUnits.Mobile} ${postCategoryBorderRadiusMobile.left / 2
                }${postCategoryBorderRadiusUnits.Mobile};`
                : ""
            }
                }
            ` : ""
        }	

        ${premadeStyle === "style-4"
            ? `
                .${blockID}.fb-taxonomy-style-4 .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-card-content, 
                .${blockID}.fb-taxonomy-style-4 .single-item .fb-taxonomy-item .fb-taxonomy-card-content{
                    ${postCategoryPaddingMobileWidth && postCategoryPaddingMobile.top ? `padding: ${postCategoryPaddingMobileWidth};` : ""}
                }
            ` : ""
        }

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link, 
        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link.fb-taxonomy-name  {

            ${postTitleGlobalTypoSwitcher.fontSize === false && postTitleFontSize.Mobile
            ? `font-size: ${postTitleFontSize.Mobile}${postTitleFontSizeUnits.Mobile};` : ""
        }
            ${postTitleGlobalTypoSwitcher.letterSpacing === false && postTitleLetterSpacing.Mobile
            ? `letter-spacing: ${postTitleLetterSpacing.Mobile}${postTitleLetterSpacingUnits.Mobile};` : ""
        }
            ${postTitleGlobalTypoSwitcher.lineHeight === false && postTitleLineHeight.Mobile
            ? `line-height: ${postTitleLineHeight.Mobile}${postTitleLineHeightUnits.Mobile};` : ""
        }
    }


        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-description{
            ${postDescriptionGlobalTypoSwitcher.fontSize === false && postDescriptionFontSize.Mobile
            ? `font-size: ${postDescriptionFontSize.Mobile}${postDescriptionFontSizeUnits.Mobile};` : ""
        }
            ${postDescriptionGlobalTypoSwitcher.letterSpacing === false && postDescriptionLetterSpacing.Mobile
            ? `letter-spacing: ${postDescriptionLetterSpacing.Mobile}${postDescriptionLetterSpacingUnits.Mobile};` : ""
        }
            ${postDescriptionGlobalTypoSwitcher.lineHeight === false && postDescriptionLineHeight.Mobile
            ? `line-height: ${postDescriptionLineHeight.Mobile}${postDescriptionLineHeightUnits.Mobile};` : ""
        }
            ${postDescriptionSpacing.Mobile ? `margin-top: ${postDescriptionSpacing.Mobile}${postDescriptionSpacingUnits.Mobile};` : ""}
    }

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link-count {
            ${postCountSpacing.Mobile ? `gap: ${postCountSpacing.Mobile}${postCountSpacingUnits.Mobile};` : ""}
    }

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link-count.fb-taxonomy-count{
            ${postCountGlobalTypoSwitcher.fontSize === false && postCountFontSize.Mobile ? `font-size: ${postCountFontSize.Mobile}${postCountFontSizeUnits.Mobile};` : ""}
            ${postCountGlobalTypoSwitcher.letterSpacing === false && postCountLetterSpacing.Mobile
            ? `letter-spacing: ${postCountLetterSpacing.Mobile}${postCountLetterSpacingUnits.Mobile};` : ""
        }
            ${postCountGlobalTypoSwitcher.lineHeight === false && postCountLineHeight.Mobile
            ? `line-height: ${postCountLineHeight.Mobile}${postCountLineHeightUnits.Mobile};` : ""
        }
                
            ${postCountPaddingMobileWidth && postCountPaddingMobile.top ? `padding: ${postCountPaddingMobileWidth};` : ""}
            ${postCountBorderMobileWidth && postCountBorderMobile.top ? `border-width: ${postCountBorderMobileWidth};` : ""}
            ${postCountBorderRadiusMobileWidth && postCountBorderRadiusMobile.top ? `border-radius: ${postCountBorderRadiusMobileWidth};` : ""}
    }


        .${blockID}.fb-post-category-area.fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button {
            ${buttonWidth.Mobile && buttonWidthUnits.Mobile ? `width: ${buttonWidth.Mobile}${buttonWidthUnits.Mobile};` : ""}
            ${buttonGlobalTypoSwitcher.fontSize === false && buttonFontSize.Mobile && buttonFontSizeUnits.Mobile
            ? `font-size: ${buttonFontSize.Mobile}${buttonFontSizeUnits.Mobile};` : ""
        }
            ${buttonGlobalTypoSwitcher.letterSpacing === false && buttonLetterSpacing.Mobile && buttonLetterSpacingUnits.Mobile
            ? `letter-spacing: ${buttonLetterSpacing.Mobile}${buttonLetterSpacingUnits.Mobile};` : ""
        }
            ${buttonGlobalTypoSwitcher.lineHeight === false && buttonLineHeight.Mobile && buttonLineHeightUnits.Mobile
            ? `line-height: ${buttonLineHeight.Mobile}${buttonLineHeightUnits.Mobile};` : ""
        }
            
            ${buttonMobileBorderWidthStr && buttonMobileBorderWidth?.top ? `border-width: ${buttonMobileBorderWidthStr};` : ""}
            ${buttonMobileBorderRadiusStr && buttonMobileBorderRadiusWidth?.top ? `border-radius: ${buttonMobileBorderRadiusStr};` : ""}
            ${buttonMobilePaddingStr && buttonMobilePadding?.top ? `padding: ${buttonMobilePaddingStr};` : ""}  
            ${buttonMobileMarginStr && buttonMobileMargin?.top ? `margin: ${buttonMobileMarginStr};` : ""} 
            ${buttonIconGapSize.Mobile ? `gap: ${buttonIconGapSize.Mobile}${buttonIconGapUnits.Mobile};` : ""}
    }

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon {
            ${buttonIconBorderMobileWidth !== buttonIconBorderMobile.top ? `border-width: ${buttonIconBorderMobileWidth};` : ""} 
            ${buttonIconBorderRadiusMobileWidth !== buttonIconBorderRadiusMobile.top ? `border-radius: ${buttonIconBorderRadiusMobileWidth};` : ""}
            ${buttonIconMobilePaddingStr && buttonIconMobilePadding?.top ? `padding: ${buttonIconMobilePaddingStr};` : ""}
    }

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon svg{
            ${buttonIconSize.Mobile && buttonIconSizeUnits.Mobile ? `width: ${buttonIconSize.Mobile}${buttonIconSizeUnits.Mobile};` : ""}
            ${buttonIconSize.Mobile && buttonIconSizeUnits.Mobile ? `height: ${buttonIconSize.Mobile}${buttonIconSizeUnits.Mobile};` : ""}
            ${buttonIconRotate.Mobile ? `transform: rotate(${buttonIconRotate.Mobile}deg);` : ""}
    }

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover.fb-taxonomy-read-more-icon svg{
            ${buttonIconRotateHover.Mobile ? `transform: rotate(${buttonIconRotateHover.Mobile}deg);` : ""}
    }

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon-image{
            ${buttonIconImageWidth ? `width: ${buttonIconImageWidth.Mobile}${buttonIconImageWidthUnits.Mobile};` : ""}
            ${buttonIconImageHeight ? `height: ${buttonIconImageHeight.Mobile}${buttonIconImageHeightUnits.Mobile};` : ""}
            ${buttonImageRotate.Mobile ? `transform: rotate(${buttonImageRotate.Mobile}deg);` : ""}
    }

        .${blockID} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover.fb-taxonomy-read-more-icon-image{
            ${buttonImageRotateHover.Mobile ? `transform: rotate(${buttonImageRotateHover.Mobile}deg);` : ""}
    }
    
        .${blockID} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id="0"] {
            ${postListItemSpacing.Mobile ? `margin-bottom: ${postListItemSpacing.Mobile}${postListItemSpacingUnits.Mobile};` : ""}
    }

        .${blockID} .fb_taxonomy_sublist {
            ${postListItemSpacing.Mobile
            ? `
                    padding-top: ${postListItemSpacing.Mobile}${postListItemSpacingUnits.Mobile};
                    padding-bottom: ${postListItemSpacing.Mobile}${postListItemSpacingUnits.Mobile};
                    gap: ${postListItemSpacing.Mobile}${postListItemSpacingUnits.Mobile}; 
                ` : ""
        }
    }

        .${blockID} .fb-taxonomy-list .fb-taxonomy-item::marker{
            ${postTitleGlobalTypoSwitcher.fontSize === false && postTitleFontSize.Mobile ? `font-size: ${postTitleFontSize.Mobile}${postTitleFontSizeUnits.Mobile};` : ""}
    }

        .${blockID} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id] {
            ${listIndentation.Mobile
            ? ` padding-left: ${listIndentation.Mobile}${listIndentationUnits.Mobile};` : ""
        }
    }

        .${blockID} .fb-taxonomy-list .fb-taxonomy-item .fb-tax-separator{
            ${separatorWidth.Mobile && separatorWidthUnits.Mobile
            ? `width: ${separatorWidth.Mobile}${separatorWidthUnits.Mobile};` : ""
        }
            ${separatorThickness.Mobile && separatorThicknessUnits.Mobile
            ? `border-top-width: ${separatorThickness.Mobile}${separatorThicknessUnits.Mobile};` : ""
        }
    }

        .${blockID}.fb-post-category-area {
            ${postCategoryPositionType !== "default" &&
                postCategoryPositionType !== "relative" &&
                postCategoryHZOrientationType === "left" &&
                postCategoryHZLeftOffset.Mobile !== undefined
                ? `left: ${postCategoryHZLeftOffset.Mobile}${postCategoryHZLeftOffsetUnits.Mobile};` : ""
            }
            ${postCategoryPositionType !== "default" &&
                postCategoryPositionType !== "relative" &&
                postCategoryHZOrientationType === "right" &&
                postCategoryHZRightOffset.Mobile !== undefined
                ? `right: ${postCategoryHZRightOffset.Mobile}${postCategoryHZRightOffsetUnits.Mobile};` : ""
            }
            ${postCategoryPositionType !== "default" &&
                postCategoryPositionType !== "relative" &&
                postCategoryVROrientationType === "top" &&
                postCategoryVRTopOffset.Mobile !== undefined
                ? `top: ${postCategoryVRTopOffset.Mobile}${postCategoryVRTopOffsetUnits.Mobile};` : ""
            }
            ${postCategoryPositionType !== "default" &&
                postCategoryPositionType !== "relative" &&
                postCategoryVROrientationType === "bottom" &&
                postCategoryVRBottomOffset.Mobile !== undefined
                ? `bottom: ${postCategoryVRBottomOffset.Mobile}${postCategoryVRBottomOffsetUnits.Mobile};` : ""
            } 

            ${postGlobalZIndex.Mobile ? `z-index: ${postGlobalZIndex.Mobile}` : ""}

            ${postGlobalMobilePaddingWidth && postGlobalPaddingMobile.top ? `padding: ${postGlobalMobilePaddingWidth}` : ""}
            ${postGlobalMobileMarginWidth && postGlobalMarginMobile.top ? `margin: ${postGlobalMobileMarginWidth}` : ""}

            ${postGlobalBorder ? `border: ${postGlobalBorder};` : ""} 
            ${postGlobalMobileBorderWidth && postGlobalBorderMobile.top ? `border-width: ${postGlobalMobileBorderWidth};` : ""}
            ${postGlobalMobileBorderRadiusWidth && postGlobalBorderRadiusMobile.top ? `border-radius: ${postGlobalMobileBorderRadiusWidth}!important;` : ""}
        }

    } `;

    const customCss = getCustomCss(postCategoryGlobalCustomCSS, `.${blockID} `);
    return `${postCategoryBlockStyle} ${customCss} `.replace(/\s+/g, ' ').trim();
}
export default generatePostCategoryStyle;