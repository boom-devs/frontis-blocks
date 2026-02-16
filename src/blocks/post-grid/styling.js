/**
 * Post Grid Block-Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes-Block attributes
 * @returns {string} CSS string
 */
const generatePostGridStyle = (attributes) => {

    const {
        blockID,
		// deviceType,
		blockStyle,
		premadeStyle,
		postType,
		postPerPage,
		selectedCatSwitcher,
		selectedCat,
		deSelectedCat,
		selectedTagSwitcher,
		selectedTag,
		deSelectedTag,
		selectedAuthorSwitcher,
		selectedAuthor,
		deSelectedAuthor,
		orderBy,
		sortOrder,
		gridColumnsPerSection,
		gridGapUnits,
		gridRowGap,
		gridColumnGap,
		listGapUnits,
		listRowGap,
		listImageSpacing,
		postSwitcher,

        /** Start grid */
        postGridPaddingUnits,
        postGridPaddingDesktop,
        postGridPaddingTablet,
        postGridPaddingMobile,
        postGridPaddingLink,

        postGridMarginUnits,
        postGridMarginDesktop,
        postGridMarginTablet,
        postGridMarginMobile,
        postGridMarginLink,

        postGridBgColorSwitcher,
        postGridNormalBackgroundType,
        postGridNormalClassicColor,
        postGridNormalGradientColor,
        postGridNormalCustomGradientSwitcher,
        postGridNormalCustomGradientInputValue,
        postGridHoverBackgroundType,
        postGridHoverClassicColor,
        postGridHoverGradientColor,
        postGridHoverCustomGradientSwitcher,
        postGridHoverCustomGradientInputValue,

        postGridBorder,
        postGridBorderColorSwitcher,
        postGridBorderColor,
        postGridBorderHoverColor,
        postGridBorderUnits,
        postGridBorderDesktop,
        postGridBorderTablet,
        postGridBorderMobile,
        postGridBorderLink,

        postGridBorderRadiusUnits,
        postGridBorderRadiusDesktop,
        postGridBorderRadiusTablet,
        postGridBorderRadiusMobile,
        postGridBorderRadiusLink,

        postGridBoxShadowSwitcher,
        postGridBoxShadowValues,
        postGridBoxShadowCssValue,
        postGridBoxShadowHoverValues,
        postGridBoxShadowHoverCssValue,
        /** End grid */ 

        /** Start Image */
        postImageSize,
        postImageWidth,
        postImageWidthUnits,
        postImageHeight,
        postImageHeightUnits,
        postImageBorder,
        postImageBorderColorSwitcher,
        postImageBorderColor,
        postImageBorderHoverColor,
        postImageBorderUnits,
        postImageDesktopBorder,
        postImageTabletBorder,
        postImageMobileBorder,
        postImageBorderLink,
        postImageBorderRadiusUnits,
        postImageDesktopBorderRadius,
        postImageTabletBorderRadius,
        postImageMobileBorderRadius,
        postImageBorderRadiusLink,

        postImageMarginUnits,
        postImageMarginDesktop,
        postImageMarginTablet,
        postImageMarginMobile,
        postImageMarginLink,
        /** End Image */

        /** Start title     */
        postTitleTag,
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

        postTitleMarginUnits,
        postTitleMarginDesktop,
        postTitleMarginTablet,
        postTitleMarginMobile,
        postTitleMarginLink,
        /** End title */

        /** Start description     */
        postDescriptionTag,
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

        postDescriptionMarginUnits,
        postDescriptionMarginDesktop,
        postDescriptionMarginTablet,
        postDescriptionMarginMobile,
        postDescriptionMarginLink,
        postDescriptionExcerptLength,
        showExcerptSwitcher,
        /** End description */

        /** Start category */
        showCategorySwitcher,
        postCategoryGlobalTypoSwitcher,
        postCategoryGlobalTypographyData,
        postCategoryGlobalTypoType,
        postCategoryGlobalTypoOption,
        postCategoryFontFamily,
        postCategoryFontSize,
        postCategoryFontSizeUnits,
        postCategoryFontWeight,
        postCategoryFontStyle,
        postCategoryTextTransform,
        postCategoryTextDecoration,
        postCategoryLetterSpacing,
        postCategoryLetterSpacingUnits,
        postCategoryLineHeight,
        postCategoryLineHeightUnits,

        postCategoryColorSwitcher,
        postCategoryColor,
        postCategoryHoverColor,

        postCategoryBgColorSwitcher,
        postCategoryBgColor,
        postCategoryBgHoverColor,

        postCategoryBorder,
        postCategoryBorderColorSwitcher,
        postCategoryBorderColor,
        postCategoryBorderHoverColor,
        postCategoryBorderUnits,
        postCategoryDesktopBorder,
        postCategoryTabletBorder,
        postCategoryMobileBorder,
        postCategoryBorderLink,

        postCategoryBorderRadiusUnits,
        postCategoryDesktopBorderRadius,
        postCategoryTabletBorderRadius,
        postCategoryMobileBorderRadius,
        postCategoryBorderRadiusLink,

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
        postCategoryGap,
        postCategoryGapUnits,
        /** End category */

        /** Start tag */
        showTagSwitcher,
        postTagGlobalTypoSwitcher,
        postTagGlobalTypographyData,
        postTagGlobalTypoType,
        postTagGlobalTypoOption,
        postTagFontFamily,
        postTagFontSize,
        postTagFontSizeUnits,
        postTagFontWeight,
        postTagFontStyle,
        postTagTextTransform,
        postTagTextDecoration,
        postTagLetterSpacing,
        postTagLetterSpacingUnits,
        postTagLineHeight,
        postTagLineHeightUnits,

        postTagColorSwitcher,
        postTagColor,
        postTagHoverColor,

        postTagBgColorSwitcher,
        postTagBgColor,
        postTagBgHoverColor,

        postTagBorder,
        postTagBorderColorSwitcher,
        postTagBorderColor,
        postTagBorderHoverColor,
        postTagBorderUnits,
        postTagDesktopBorder,
        postTagTabletBorder,
        postTagMobileBorder,
        postTagBorderLink,

        postTagBorderRadiusUnits,
        postTagDesktopBorderRadius,
        postTagTabletBorderRadius,
        postTagMobileBorderRadius,
        postTagBorderRadiusLink,

        postTagPaddingUnits,
        postTagPaddingDesktop,
        postTagPaddingTablet,
        postTagPaddingMobile,
        postTagPaddingLink,

        postTagMarginUnits,
        postTagMarginDesktop,
        postTagMarginTablet,
        postTagMarginMobile,
        postTagMarginLink,

        postTagGap,
        postTagGapUnits,
        /** End tag */

        /** Start author */
        showAuthorSwitcher,
        postAuthorGap,
        postAuthorGapUnits,
        postAuthorAvatarSwitcher,
        postAuthorAvatarWidth,
        postAuthorAvatarWidthUnits,

        postAuthorAvatarBorder,
        postAuthorAvatarBorderColorSwitcher,
        postAuthorAvatarBorderColor,
        postAuthorAvatarBorderHoverColor,

        postAuthorAvatarBorderUnits,
        postAuthorAvatarDesktopBorder,
        postAuthorAvatarTabletBorder,
        postAuthorAvatarMobileBorder,
        postAuthorAvatarBorderLink,
        
        postAuthorAvatarBorderRadiusUnits,
        postAuthorAvatarDesktopBorderRadius,
        postAuthorAvatarTabletBorderRadius,
        postAuthorAvatarMobileBorderRadius,
        postAuthorAvatarBorderRadiusLink,

        postAuthorMarginUnits,
        postAuthorMarginDesktop,
        postAuthorMarginTablet,
        postAuthorMarginMobile,
        postAuthorMarginLink,

        postAuthorGlobalTypoSwitcher,
        postAuthorGlobalTypographyData,
        postAuthorGlobalTypoType,
        postAuthorGlobalTypoOption,
        postAuthorFontFamily,
        postAuthorFontSize,
        postAuthorFontSizeUnits,
        postAuthorFontWeight,
        postAuthorFontStyle,
        postAuthorTextTransform,
        postAuthorTextDecoration,
        postAuthorLetterSpacing,
        postAuthorLetterSpacingUnits,
        postAuthorLineHeight,
        postAuthorLineHeightUnits,

        postAuthorColorSwitcher,
        postAuthorColor,
        postAuthorHoverColor,

        postAuthorPrefixSwitcher,
        postAuthorPrefix,
        postAuthorPrefixColorSwitcher,
        postAuthorPrefixColor,
        postAuthorPrefixHoverColor,
        /** End author */   

        /** Start date */
        showDateSwitcher,
        postDateGlobalTypoSwitcher,
        postDateGlobalTypographyData,
        postDateGlobalTypoType,
        postDateGlobalTypoOption,
        postDateFontFamily,
        postDateFontSize,
        postDateFontSizeUnits,
        postDateFontWeight,
        postDateFontStyle,
        postDateTextTransform,
        postDateTextDecoration,
        postDateLetterSpacing,
        postDateLetterSpacingUnits,
        postDateLineHeight,
        postDateLineHeightUnits,
        postDateColorSwitcher,
        postDateColor,
        postDateHoverColor,
        /** End date */

        /** Start Global Setting */
        postGlobalZIndex,
        postGridOverflow,
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

        /** Start Load More */
        loadMoreSwitcher,
        loadMoreText,
        loadMoreIconAlign,
        loadMoreIcon,

        loadMoreButtonBgColorSwitcher,
        loadMoreButtonNormalBackgroundType,
        loadMoreButtonNormalClassicColor,
        loadMoreButtonNormalGradientColor,
        loadMoreButtonNormalCustomGradientSwitcher,
        loadMoreButtonNormalCustomGradientInputValue,
        loadMoreButtonHoverBackgroundType,
        loadMoreButtonHoverClassicColor,
        loadMoreButtonHoverGradientColor,
        loadMoreButtonHoverCustomGradientSwitcher,
        loadMoreButtonHoverCustomGradientInputValue,

        loadMoreButtonPaddingUnits,
        loadMoreButtonDesktopPadding,
        loadMoreButtonTabletPadding,
        loadMoreButtonMobilePadding,
        loadMoreButtonPaddingLink,

        loadMoreButtonBorder,
        loadMoreButtonBorderColorSwitcher,
        loadMoreButtonBorderColor,
        loadMoreButtonBorderHoverColor,

        loadMoreButtonBorderUnits,
        loadMoreButtonDesktopBorder,
        loadMoreButtonTabletBorder,
        loadMoreButtonMobileBorder,
        loadMoreButtonBorderLink,

        loadMoreButtonBorderRadiusUnits,
        loadMoreButtonDesktopBorderRadius,
        loadMoreButtonTabletBorderRadius,
        loadMoreButtonMobileBorderRadius,
        loadMoreButtonBorderRadiusLink,

        loadMoreTextGlobalTypoSwitcher,
        loadMoreTextGlobalTypographyData,
        loadMoreTextGlobalTypoType,
        loadMoreTextGlobalTypoOption,
        loadMoreTextFontFamily,
        loadMoreTextFontSize,
        loadMoreTextFontSizeUnits,
        loadMoreTextFontWeight,
        loadMoreTextFontStyle,
        loadMoreTextTransform,
        loadMoreTextDecoration,
        loadMoreTextLetterSpacing,
        loadMoreTextLetterSpacingUnits,
        loadMoreTextLineHeight,
        loadMoreTextLineHeightUnits,

        loadMoreTextColorSwitcher,
        loadMoreTextColor,
        loadMoreTextHoverColor,
        loadMoreloaderColorSwitcher,
        loadMoreloaderColor,
        loadMoreloaderHoverColor,

        loadMoreIconSize,
        loadMoreIconSizeUnits,
        loadMoreIconColorSwitcher,
        loadMoreIconColor,
        loadMoreIconHoverColor,
        loadMoreIconMarginUnits,
        loadMoreIconDesktopMargin,
        loadMoreIconTabletMargin,
        loadMoreIconMobileMargin,
        loadMoreIconMarginLink,
        /** End Load More */

        postGridDesktopSwitcher,
		postGridTabletSwitcher,
		postGridMobileSwitcher,

        postGridGlobalCustomCSS,
        postGridGlobalWraperID,
        postGridGlobalWraperClass,

        // Position
        postGridPositionType,
        postGridHZOrientationType,
        postGridVROrientationType,
        postGridHZLeftOffset,
        postGridHZLeftOffsetUnits,
        postGridHZRightOffset,
        postGridHZRightOffsetUnits,
        postGridVRTopOffset,
        postGridVRTopOffsetUnits,
        postGridVRBottomOffset,
        postGridVRBottomOffsetUnits,

        /** Start Filter By Taxonomy */
        showFilterByTaxonomy,
        filterSelectedTaxonomy,
        filterSelectedCat,
        filterSelectedCatLabel,
        filterSelectedTag,
        filterSelectedTagLabel,
        filerselectedCountSwitcher,

        /** End Filter By Taxonomy */


        /** Start Pagination */
        loadMoreType,
        paginationPrevNextType,
        paginationPrevTxt,
        paginationPrevIcon, 
        paginationNextTxt,
        paginationNextIcon,
        /** End Pagination */

        /** Pagination Arrow */
        paginationArrowSize,
        paginationArrowSizeUnits,

        paginationArrowBgColorSwitcher,
        paginationArrowNormalBackgroundType,
        paginationArrowNormalClassicColor,
        paginationArrowNormalGradientColor,
        paginationArrowNormalCustomGradientSwitcher,
        paginationArrowNormalCustomGradientInputValue,
        paginationArrowHoverBackgroundType,
        paginationArrowHoverClassicColor,
        paginationArrowHoverGradientColor,
        paginationArrowHoverCustomGradientSwitcher,
        paginationArrowHoverCustomGradientInputValue,

        paginationArrowBorder,
        paginationArrowBorderColorSwitcher,
        paginationArrowBorderColor,
        paginationArrowBorderHoverColor,

        paginationArrowBorderUnits,
        paginationArrowDesktopBorder,
        paginationArrowTabletBorder,
        paginationArrowMobileBorder,
        paginationArrowBorderLink,

        paginationArrowBorderRadiusUnits,
        paginationArrowDesktopBorderRadius,
        paginationArrowTabletBorderRadius,
        paginationArrowMobileBorderRadius,
        paginationArrowBorderRadiusLink,

        paginationArrowTextGlobalTypoSwitcher,
        paginationArrowTextGlobalTypographyData,
        paginationArrowTextGlobalTypoType,
        paginationArrowTextGlobalTypoOption,
        paginationArrowTextFontFamily,
        paginationArrowTextFontSize,
        paginationArrowTextFontSizeUnits,
        paginationArrowTextFontWeight,
        paginationArrowTextFontStyle,
        paginationArrowTextTransform,
        paginationArrowTextDecoration,
        paginationArrowTextLetterSpacing,
        paginationArrowTextLetterSpacingUnits,
        paginationArrowTextLineHeight,
        paginationArrowTextLineHeightUnits,

        paginationArrowTextColorSwitcher,
        paginationArrowTextColor,
        paginationArrowTextHoverColor,

        paginationPrevNextWidth,
        paginationPrevNextWidthUnits,
        paginationArrowIconColorSwitcher,
        paginationArrowIconColor,
        paginationArrowIconHoverColor,

        /** Pagination Button */
        paginationBtnSize,
        paginationBtnSizeUnits,
        paginationBtnGap,
        paginationBtnGapUnits,

        paginationBtnBgColorSwitcher,
        paginationBtnNormalBackgroundType,
        paginationBtnNormalClassicColor,
        paginationBtnNormalGradientColor,
        paginationBtnNormalCustomGradientSwitcher,
        paginationBtnNormalCustomGradientInputValue,
        paginationBtnHoverBackgroundType,
        paginationBtnHoverClassicColor,
        paginationBtnHoverGradientColor,
        paginationBtnHoverCustomGradientSwitcher,
        paginationBtnHoverCustomGradientInputValue,

        paginationActiveBtnTextColorSwitcher,
        paginationActiveBtnTextColor,
        paginationActiveBtnTextHoverColor,

        paginationActiveBtnBgColorSwitcher,
        paginationActiveBtnNormalBackgroundType,
        paginationActiveBtnNormalClassicColor,
        paginationActiveBtnNormalGradientColor,
        paginationActiveBtnNormalCustomGradientSwitcher,
        paginationActiveBtnNormalCustomGradientInputValue,
        paginationActiveBtnHoverBackgroundType,
        paginationActiveBtnHoverClassicColor,
        paginationActiveBtnHoverGradientColor,
        paginationActiveBtnHoverCustomGradientSwitcher,
        paginationActiveBtnHoverCustomGradientInputValue,

        paginationBtnBorder,
        paginationBtnBorderColorSwitcher,
        paginationBtnBorderColor,
        paginationBtnBorderHoverColor,

        paginationBtnBorderUnits,
        paginationBtnDesktopBorder,
        paginationBtnTabletBorder,
        paginationBtnMobileBorder,
        paginationBtnBorderLink,

        paginationBtnBorderRadiusUnits,
        paginationBtnDesktopBorderRadius,
        paginationBtnTabletBorderRadius,
        paginationBtnMobileBorderRadius,
        paginationBtnBorderRadiusLink,

        paginationBtnTextGlobalTypoSwitcher,
        paginationBtnTextGlobalTypographyData,
        paginationBtnTextGlobalTypoType,
        paginationBtnTextGlobalTypoOption,
        paginationBtnTextFontFamily,
        paginationBtnTextFontSize,
        paginationBtnTextFontSizeUnits,
        paginationBtnTextFontWeight,
        paginationBtnTextFontStyle,
        paginationBtnTextTransform,
        paginationBtnTextDecoration,
        paginationBtnTextLetterSpacing,
        paginationBtnTextLetterSpacingUnits,
        paginationBtnTextLineHeight,
        paginationBtnTextLineHeightUnits,

        paginationBtnTextColorSwitcher,
        paginationBtnTextColor,
        paginationBtnTextHoverColor,

        /** Start Read More */
        readMoreSwitcher,
        readMoreText,
        readMoreIconAlign,
        readMoreIcon,
        readMoreIconImageUrl,
        readMoreIconImageAlt,
        readMoreIconImageID,
        /** End Read More */


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

        customPermalinkSwitcher,
        customPermalink,
        thumbnailLinkSwitcher,
        categoryLinkSwitcher,
        tagLinkSwitcher,
        authorLinkSwitcher,
        titleLinkSwitcher,

        /** Start Post Grid Settings */
        postGridSkeletonBgColor,
        postGridSkeletonHighlightBgColor,

        postWrapperLinkSwitcher,
        /** End Post Grid Settings */
	} = attributes;

    const postGridPaddingDesktopWidth = `${postGridPaddingDesktop?.top}${postGridPaddingUnits?.Desktop} ${postGridPaddingDesktop?.right}${postGridPaddingUnits?.Desktop} ${postGridPaddingDesktop?.bottom}${postGridPaddingUnits?.Desktop} ${postGridPaddingDesktop?.left}${postGridPaddingUnits?.Desktop}`;
    const postGridPaddingTabletWidth = `${postGridPaddingTablet?.top}${postGridPaddingUnits?.Tablet} ${postGridPaddingTablet?.right}${postGridPaddingUnits?.Tablet} ${postGridPaddingTablet?.bottom}${postGridPaddingUnits?.Tablet} ${postGridPaddingTablet?.left}${postGridPaddingUnits?.Tablet}`;
    const postGridPaddingMobileWidth = `${postGridPaddingMobile?.top}${postGridPaddingUnits?.Mobile} ${postGridPaddingMobile?.right}${postGridPaddingUnits?.Mobile} ${postGridPaddingMobile?.bottom}${postGridPaddingUnits?.Mobile} ${postGridPaddingMobile?.left}${postGridPaddingUnits?.Mobile}`;

    const postGridMarginDesktopWidth = `${postGridMarginDesktop?.top}${postGridMarginUnits?.Desktop} ${postGridMarginDesktop?.right}${postGridMarginUnits?.Desktop} ${postGridMarginDesktop?.bottom}${postGridMarginUnits?.Desktop} ${postGridMarginDesktop?.left}${postGridMarginUnits?.Desktop}`;
    const postGridMarginTabletWidth = `${postGridMarginTablet?.top}${postGridMarginUnits?.Tablet} ${postGridMarginTablet?.right}${postGridMarginUnits?.Tablet} ${postGridMarginTablet?.bottom}${postGridMarginUnits?.Tablet} ${postGridMarginTablet?.left}${postGridMarginUnits?.Tablet}`;
    const postGridMarginMobileWidth = `${postGridMarginMobile?.top}${postGridMarginUnits?.Mobile} ${postGridMarginMobile?.right}${postGridMarginUnits?.Mobile} ${postGridMarginMobile?.bottom}${postGridMarginUnits?.Mobile} ${postGridMarginMobile?.left}${postGridMarginUnits?.Mobile}`;

    const postGridBorderDesktopWidth = `${postGridBorderDesktop?.top}${postGridBorderUnits?.Desktop} ${postGridBorderDesktop?.right}${postGridBorderUnits?.Desktop} ${postGridBorderDesktop?.bottom}${postGridBorderUnits?.Desktop} ${postGridBorderDesktop?.left}${postGridBorderUnits?.Desktop}`;
    const postGridBorderTabletWidth = `${postGridBorderTablet?.top}${postGridBorderUnits?.Tablet} ${postGridBorderTablet?.right}${postGridBorderUnits?.Tablet} ${postGridBorderTablet?.bottom}${postGridBorderUnits?.Tablet} ${postGridBorderTablet?.left}${postGridBorderUnits?.Tablet}`;
    const postGridBorderMobileWidth = `${postGridBorderMobile?.top}${postGridBorderUnits?.Mobile} ${postGridBorderMobile?.right}${postGridBorderUnits?.Mobile} ${postGridBorderMobile?.bottom}${postGridBorderUnits?.Mobile} ${postGridBorderMobile?.left}${postGridBorderUnits?.Mobile}`;

    const postGridBorderRadiusDesktopWidth = `${postGridBorderRadiusDesktop?.top}${postGridBorderRadiusUnits?.Desktop} ${postGridBorderRadiusDesktop?.right}${postGridBorderRadiusUnits?.Desktop} ${postGridBorderRadiusDesktop?.bottom}${postGridBorderRadiusUnits?.Desktop} ${postGridBorderRadiusDesktop?.left}${postGridBorderRadiusUnits?.Desktop}`;
    const postGridBorderRadiusTabletWidth = `${postGridBorderRadiusTablet?.top}${postGridBorderRadiusUnits?.Tablet} ${postGridBorderRadiusTablet?.right}${postGridBorderRadiusUnits?.Tablet} ${postGridBorderRadiusTablet?.bottom}${postGridBorderRadiusUnits?.Tablet} ${postGridBorderRadiusTablet?.left}${postGridBorderRadiusUnits?.Tablet}`;
    const postGridBorderRadiusMobileWidth = `${postGridBorderRadiusMobile?.top}${postGridBorderRadiusUnits?.Mobile} ${postGridBorderRadiusMobile?.right}${postGridBorderRadiusUnits?.Mobile} ${postGridBorderRadiusMobile?.bottom}${postGridBorderRadiusUnits?.Mobile} ${postGridBorderRadiusMobile?.left}${postGridBorderRadiusUnits?.Mobile}`;

    const postImageDesktopBorderWidth = `${postImageDesktopBorder?.top}${postImageBorderUnits?.Desktop} ${postImageDesktopBorder?.right}${postImageBorderUnits?.Desktop} ${postImageDesktopBorder?.bottom}${postImageBorderUnits?.Desktop} ${postImageDesktopBorder?.left}${postImageBorderUnits?.Desktop}`;
    const postImageTabletBorderWidth = `${postImageTabletBorder?.top}${postImageBorderUnits?.Tablet} ${postImageTabletBorder?.right}${postImageBorderUnits?.Tablet} ${postImageTabletBorder?.bottom}${postImageBorderUnits?.Tablet} ${postImageTabletBorder?.left}${postImageBorderUnits?.Tablet}`;
    const postImageMobileBorderWidth = `${postImageMobileBorder?.top}${postImageBorderUnits?.Mobile} ${postImageMobileBorder?.right}${postImageBorderUnits?.Mobile} ${postImageMobileBorder?.bottom}${postImageBorderUnits?.Mobile} ${postImageMobileBorder?.left}${postImageBorderUnits?.Mobile}`;

    const postImageDesktopBorderRadiusWidth = `${postImageDesktopBorderRadius?.top}${postImageBorderRadiusUnits?.Desktop} ${postImageDesktopBorderRadius?.right}${postImageBorderRadiusUnits?.Desktop} ${postImageDesktopBorderRadius?.bottom}${postImageBorderRadiusUnits?.Desktop} ${postImageDesktopBorderRadius?.left}${postImageBorderRadiusUnits?.Desktop}`;
    const postImageTabletBorderRadiusWidth = `${postImageTabletBorderRadius?.top}${postImageBorderRadiusUnits?.Tablet} ${postImageTabletBorderRadius?.right}${postImageBorderRadiusUnits?.Tablet} ${postImageTabletBorderRadius?.bottom}${postImageBorderRadiusUnits?.Tablet} ${postImageTabletBorderRadius?.left}${postImageBorderRadiusUnits?.Tablet}`;
    const postImageMobileBorderRadiusWidth = `${postImageMobileBorderRadius?.top}${postImageBorderRadiusUnits?.Mobile} ${postImageMobileBorderRadius?.right}${postImageBorderRadiusUnits?.Mobile} ${postImageMobileBorderRadius?.bottom}${postImageBorderRadiusUnits?.Mobile} ${postImageMobileBorderRadius?.left}${postImageBorderRadiusUnits?.Mobile}`;

    const postImageMarginDesktopWidth = `${postImageMarginDesktop?.top}${postImageMarginUnits?.Desktop} ${postImageMarginDesktop?.right}${postImageMarginUnits?.Desktop} ${postImageMarginDesktop?.bottom}${postImageMarginUnits?.Desktop} ${postImageMarginDesktop?.left}${postImageMarginUnits?.Desktop}`;
    const postImageMarginTabletWidth = `${postImageMarginTablet?.top}${postImageMarginUnits?.Tablet} ${postImageMarginTablet?.right}${postImageMarginUnits?.Tablet} ${postImageMarginTablet?.bottom}${postImageMarginUnits?.Tablet} ${postImageMarginTablet?.left}${postImageMarginUnits?.Tablet}`;
    const postImageMarginMobileWidth = `${postImageMarginMobile?.top}${postImageMarginUnits?.Mobile} ${postImageMarginMobile?.right}${postImageMarginUnits?.Mobile} ${postImageMarginMobile?.bottom}${postImageMarginUnits?.Mobile} ${postImageMarginMobile?.left}${postImageMarginUnits?.Mobile}`;

    const postTitleMarginDesktopWidth = `${postTitleMarginDesktop?.top}${postTitleMarginUnits?.Desktop} ${postTitleMarginDesktop?.right}${postTitleMarginUnits?.Desktop} ${postTitleMarginDesktop?.bottom}${postTitleMarginUnits?.Desktop} ${postTitleMarginDesktop?.left}${postTitleMarginUnits?.Desktop}`;
    const postTitleMarginTabletWidth = `${postTitleMarginTablet?.top}${postTitleMarginUnits?.Tablet} ${postTitleMarginTablet?.right}${postTitleMarginUnits?.Tablet} ${postTitleMarginTablet?.bottom}${postTitleMarginUnits?.Tablet} ${postTitleMarginTablet?.left}${postTitleMarginUnits?.Tablet}`;
    const postTitleMarginMobileWidth = `${postTitleMarginMobile?.top}${postTitleMarginUnits?.Mobile} ${postTitleMarginMobile?.right}${postTitleMarginUnits?.Mobile} ${postTitleMarginMobile?.bottom}${postTitleMarginUnits?.Mobile} ${postTitleMarginMobile?.left}${postTitleMarginUnits?.Mobile}`;

    const postDescriptionMarginDesktopWidth = `${postDescriptionMarginDesktop?.top}${postDescriptionMarginUnits?.Desktop} ${postDescriptionMarginDesktop?.right}${postDescriptionMarginUnits?.Desktop} ${postDescriptionMarginDesktop?.bottom}${postDescriptionMarginUnits?.Desktop} ${postDescriptionMarginDesktop?.left}${postDescriptionMarginUnits?.Desktop}`;
    const postDescriptionMarginTabletWidth = `${postDescriptionMarginTablet?.top}${postDescriptionMarginUnits?.Tablet} ${postDescriptionMarginTablet?.right}${postDescriptionMarginUnits?.Tablet} ${postDescriptionMarginTablet?.bottom}${postDescriptionMarginUnits?.Tablet} ${postDescriptionMarginTablet?.left}${postDescriptionMarginUnits?.Tablet}`;
    const postDescriptionMarginMobileWidth = `${postDescriptionMarginMobile?.top}${postDescriptionMarginUnits?.Mobile} ${postDescriptionMarginMobile?.right}${postDescriptionMarginUnits?.Mobile} ${postDescriptionMarginMobile?.bottom}${postDescriptionMarginUnits?.Mobile} ${postDescriptionMarginMobile?.left}${postDescriptionMarginUnits?.Mobile}`;

    const postCategoryPaddingDesktopWidth = `${postCategoryPaddingDesktop?.top}${postCategoryPaddingUnits?.Desktop} ${postCategoryPaddingDesktop?.right}${postCategoryPaddingUnits?.Desktop} ${postCategoryPaddingDesktop?.bottom}${postCategoryPaddingUnits?.Desktop} ${postCategoryPaddingDesktop?.left}${postCategoryPaddingUnits?.Desktop}`;
    const postCategoryPaddingTabletWidth = `${postCategoryPaddingTablet?.top}${postCategoryPaddingUnits?.Tablet} ${postCategoryPaddingTablet?.right}${postCategoryPaddingUnits?.Tablet} ${postCategoryPaddingTablet?.bottom}${postCategoryPaddingUnits?.Tablet} ${postCategoryPaddingTablet?.left}${postCategoryPaddingUnits?.Tablet}`;
    const postCategoryPaddingMobileWidth = `${postCategoryPaddingMobile?.top}${postCategoryPaddingUnits?.Mobile} ${postCategoryPaddingMobile?.right}${postCategoryPaddingUnits?.Mobile} ${postCategoryPaddingMobile?.bottom}${postCategoryPaddingUnits?.Mobile} ${postCategoryPaddingMobile?.left}${postCategoryPaddingUnits?.Mobile}`;

    const postCategoryMarginDesktopWidth = `${postCategoryMarginDesktop?.top}${postCategoryMarginUnits?.Desktop} ${postCategoryMarginDesktop?.right}${postCategoryMarginUnits?.Desktop} ${postCategoryMarginDesktop?.bottom}${postCategoryMarginUnits?.Desktop} ${postCategoryMarginDesktop?.left}${postCategoryMarginUnits?.Desktop}`;
    const postCategoryMarginTabletWidth = `${postCategoryMarginTablet?.top}${postCategoryMarginUnits?.Tablet} ${postCategoryMarginTablet?.right}${postCategoryMarginUnits?.Tablet} ${postCategoryMarginTablet?.bottom}${postCategoryMarginUnits?.Tablet} ${postCategoryMarginTablet?.left}${postCategoryMarginUnits?.Tablet}`;
    const postCategoryMarginMobileWidth = `${postCategoryMarginMobile?.top}${postCategoryMarginUnits?.Mobile} ${postCategoryMarginMobile?.right}${postCategoryMarginUnits?.Mobile} ${postCategoryMarginMobile?.bottom}${postCategoryMarginUnits?.Mobile} ${postCategoryMarginMobile?.left}${postCategoryMarginUnits?.Mobile}`;

    const postCategoryBorderDesktopWidth = `${postCategoryDesktopBorder?.top}${postCategoryBorderUnits?.Desktop} ${postCategoryDesktopBorder?.right}${postCategoryBorderUnits?.Desktop} ${postCategoryDesktopBorder?.bottom}${postCategoryBorderUnits?.Desktop} ${postCategoryDesktopBorder?.left}${postCategoryBorderUnits?.Desktop}`; 
    const postCategoryBorderTabletWidth = `${postCategoryTabletBorder?.top}${postCategoryBorderUnits?.Tablet} ${postCategoryTabletBorder?.right}${postCategoryBorderUnits?.Tablet} ${postCategoryTabletBorder?.bottom}${postCategoryBorderUnits?.Tablet} ${postCategoryTabletBorder?.left}${postCategoryBorderUnits?.Tablet}`; 
    const postCategoryBorderMobileWidth = `${postCategoryMobileBorder?.top}${postCategoryBorderUnits?.Mobile} ${postCategoryMobileBorder?.right}${postCategoryBorderUnits?.Mobile} ${postCategoryMobileBorder?.bottom}${postCategoryBorderUnits?.Mobile} ${postCategoryMobileBorder?.left}${postCategoryBorderUnits?.Mobile}`;

    const postCategoryBorderRadiusDesktopWidth = `${postCategoryDesktopBorderRadius?.top}${postCategoryBorderRadiusUnits?.Desktop} ${postCategoryDesktopBorderRadius?.right}${postCategoryBorderRadiusUnits?.Desktop} ${postCategoryDesktopBorderRadius?.bottom}${postCategoryBorderRadiusUnits?.Desktop} ${postCategoryDesktopBorderRadius?.left}${postCategoryBorderRadiusUnits?.Desktop}`; 
    const postCategoryBorderRadiusTabletWidth = `${postCategoryTabletBorderRadius?.top}${postCategoryBorderRadiusUnits?.Tablet} ${postCategoryTabletBorderRadius?.right}${postCategoryBorderRadiusUnits?.Tablet} ${postCategoryTabletBorderRadius?.bottom}${postCategoryBorderRadiusUnits?.Tablet} ${postCategoryTabletBorderRadius?.left}${postCategoryBorderRadiusUnits?.Tablet}`; 
    const postCategoryBorderRadiusMobileWidth = `${postCategoryMobileBorderRadius?.top}${postCategoryBorderRadiusUnits?.Mobile} ${postCategoryMobileBorderRadius?.right}${postCategoryBorderRadiusUnits?.Mobile} ${postCategoryMobileBorderRadius?.bottom}${postCategoryBorderRadiusUnits?.Mobile} ${postCategoryMobileBorderRadius?.left}${postCategoryBorderRadiusUnits?.Mobile}`; 

    const postTagPaddingDesktopWidth = `${postTagPaddingDesktop?.top}${postTagPaddingUnits?.Desktop} ${postTagPaddingDesktop?.right}${postTagPaddingUnits?.Desktop} ${postTagPaddingDesktop?.bottom}${postTagPaddingUnits?.Desktop} ${postTagPaddingDesktop?.left}${postTagPaddingUnits?.Desktop}`;
    const postTagPaddingTabletWidth = `${postTagPaddingTablet?.top}${postTagPaddingUnits?.Tablet} ${postTagPaddingTablet?.right}${postTagPaddingUnits?.Tablet} ${postTagPaddingTablet?.bottom}${postTagPaddingUnits?.Tablet} ${postTagPaddingTablet?.left}${postTagPaddingUnits?.Tablet}`;
    const postTagPaddingMobileWidth = `${postTagPaddingMobile?.top}${postTagPaddingUnits?.Mobile} ${postTagPaddingMobile?.right}${postTagPaddingUnits?.Mobile} ${postTagPaddingMobile?.bottom}${postTagPaddingUnits?.Mobile} ${postTagPaddingMobile?.left}${postTagPaddingUnits?.Mobile}`;

    const postTagMarginDesktopWidth = `${postTagMarginDesktop?.top}${postTagMarginUnits?.Desktop} ${postTagMarginDesktop?.right}${postTagMarginUnits?.Desktop} ${postTagMarginDesktop?.bottom}${postTagMarginUnits?.Desktop} ${postTagMarginDesktop?.left}${postTagMarginUnits?.Desktop}`;
    const postTagMarginTabletWidth = `${postTagMarginTablet?.top}${postTagMarginUnits?.Tablet} ${postTagMarginTablet?.right}${postTagMarginUnits?.Tablet} ${postTagMarginTablet?.bottom}${postTagMarginUnits?.Tablet} ${postTagMarginTablet?.left}${postTagMarginUnits?.Tablet}`;
    const postTagMarginMobileWidth = `${postTagMarginMobile?.top}${postTagMarginUnits?.Mobile} ${postTagMarginMobile?.right}${postTagMarginUnits?.Mobile} ${postTagMarginMobile?.bottom}${postTagMarginUnits?.Mobile} ${postTagMarginMobile?.left}${postTagMarginUnits?.Mobile}`;

    const postTagBorderDesktopWidth = `${postTagDesktopBorder?.top}${postTagBorderUnits?.Desktop} ${postTagDesktopBorder?.right}${postTagBorderUnits?.Desktop} ${postTagDesktopBorder?.bottom}${postTagBorderUnits?.Desktop} ${postTagDesktopBorder?.left}${postTagBorderUnits?.Desktop}`; 
    const postTagBorderTabletWidth = `${postTagTabletBorder?.top}${postTagBorderUnits?.Tablet} ${postTagTabletBorder?.right}${postTagBorderUnits?.Tablet} ${postTagTabletBorder?.bottom}${postTagBorderUnits?.Tablet} ${postTagTabletBorder?.left}${postTagBorderUnits?.Tablet}`; 
    const postTagBorderMobileWidth = `${postTagMobileBorder?.top}${postTagBorderUnits?.Mobile} ${postTagMobileBorder?.right}${postTagBorderUnits?.Mobile} ${postTagMobileBorder?.bottom}${postTagBorderUnits?.Mobile} ${postTagMobileBorder?.left}${postTagBorderUnits?.Mobile}`; 

    const postTagBorderRadiusDesktopWidth = `${postTagDesktopBorderRadius?.top}${postTagBorderRadiusUnits?.Desktop} ${postTagDesktopBorderRadius?.right}${postTagBorderRadiusUnits?.Desktop} ${postTagDesktopBorderRadius?.bottom}${postTagBorderRadiusUnits?.Desktop} ${postTagDesktopBorderRadius?.left}${postTagBorderRadiusUnits?.Desktop}`; 
    const postTagBorderRadiusTabletWidth = `${postTagTabletBorderRadius?.top}${postTagBorderRadiusUnits?.Tablet} ${postTagTabletBorderRadius?.right}${postTagBorderRadiusUnits?.Tablet} ${postTagTabletBorderRadius?.bottom}${postTagBorderRadiusUnits?.Tablet} ${postTagTabletBorderRadius?.left}${postTagBorderRadiusUnits?.Tablet}`; 
    const postTagBorderRadiusMobileWidth = `${postTagMobileBorderRadius?.top}${postTagBorderRadiusUnits?.Mobile} ${postTagMobileBorderRadius?.right}${postTagBorderRadiusUnits?.Mobile} ${postTagMobileBorderRadius?.bottom}${postTagBorderRadiusUnits?.Mobile} ${postTagMobileBorderRadius?.left}${postTagBorderRadiusUnits?.Mobile}`; 

     const postAuthorAvatarBorderDesktopWidth = `${postAuthorAvatarDesktopBorder?.top}${postAuthorAvatarBorderUnits?.Desktop} ${postAuthorAvatarDesktopBorder?.right}${postAuthorAvatarBorderUnits?.Desktop} ${postAuthorAvatarDesktopBorder?.bottom}${postAuthorAvatarBorderUnits?.Desktop} ${postAuthorAvatarDesktopBorder?.left}${postAuthorAvatarBorderUnits?.Desktop}`; 
    const postAuthorAvatarBorderTabletWidth = `${postAuthorAvatarTabletBorder?.top}${postAuthorAvatarBorderUnits?.Tablet} ${postAuthorAvatarTabletBorder?.right}${postAuthorAvatarBorderUnits?.Tablet} ${postAuthorAvatarTabletBorder?.bottom}${postAuthorAvatarBorderUnits?.Tablet} ${postAuthorAvatarTabletBorder?.left}${postAuthorAvatarBorderUnits?.Tablet}`; 
    const postAuthorAvatarBorderMobileWidth = `${postAuthorAvatarMobileBorder?.top}${postAuthorAvatarBorderUnits?.Mobile} ${postAuthorAvatarMobileBorder?.right}${postAuthorAvatarBorderUnits?.Mobile} ${postAuthorAvatarMobileBorder?.bottom}${postAuthorAvatarBorderUnits?.Mobile} ${postAuthorAvatarMobileBorder?.left}${postAuthorAvatarBorderUnits?.Mobile}`; 

    const postAuthorAvatarBorderRadiusDesktopWidth = `${postAuthorAvatarDesktopBorderRadius?.top}${postAuthorAvatarBorderRadiusUnits?.Desktop} ${postAuthorAvatarDesktopBorderRadius?.right}${postAuthorAvatarBorderRadiusUnits?.Desktop} ${postAuthorAvatarDesktopBorderRadius?.bottom}${postAuthorAvatarBorderRadiusUnits?.Desktop} ${postAuthorAvatarDesktopBorderRadius?.left}${postAuthorAvatarBorderRadiusUnits?.Desktop}`; 
    const postAuthorAvatarBorderRadiusTabletWidth = `${postAuthorAvatarTabletBorderRadius?.top}${postAuthorAvatarBorderRadiusUnits?.Tablet} ${postAuthorAvatarTabletBorderRadius?.right}${postAuthorAvatarBorderRadiusUnits?.Tablet} ${postAuthorAvatarTabletBorderRadius?.bottom}${postAuthorAvatarBorderRadiusUnits?.Tablet} ${postAuthorAvatarTabletBorderRadius?.left}${postAuthorAvatarBorderRadiusUnits?.Tablet}`; 
    const postAuthorAvatarBorderRadiusMobileWidth = `${postAuthorAvatarMobileBorderRadius?.top}${postAuthorAvatarBorderRadiusUnits?.Mobile} ${postAuthorAvatarMobileBorderRadius?.right}${postAuthorAvatarBorderRadiusUnits?.Mobile} ${postAuthorAvatarMobileBorderRadius?.bottom}${postAuthorAvatarBorderRadiusUnits?.Mobile} ${postAuthorAvatarMobileBorderRadius?.left}${postAuthorAvatarBorderRadiusUnits?.Mobile}`; 

    const postAuthorMarginDesktopWidth = `${postAuthorMarginDesktop?.top}${postAuthorMarginUnits?.Desktop} ${postAuthorMarginDesktop?.right}${postAuthorMarginUnits?.Desktop} ${postAuthorMarginDesktop?.bottom}${postAuthorMarginUnits?.Desktop} ${postAuthorMarginDesktop?.left}${postAuthorMarginUnits?.Desktop}`; 
    const postAuthorMarginTabletWidth = `${postAuthorMarginTablet?.top}${postAuthorMarginUnits?.Tablet} ${postAuthorMarginTablet?.right}${postAuthorMarginUnits?.Tablet} ${postAuthorMarginTablet?.bottom}${postAuthorMarginUnits?.Tablet} ${postAuthorMarginTablet?.left}${postAuthorMarginUnits?.Tablet}`; 
    const postAuthorMarginMobileWidth = `${postAuthorMarginMobile?.top}${postAuthorMarginUnits?.Mobile} ${postAuthorMarginMobile?.right}${postAuthorMarginUnits?.Mobile} ${postAuthorMarginMobile?.bottom}${postAuthorMarginUnits?.Mobile} ${postAuthorMarginMobile?.left}${postAuthorMarginUnits?.Mobile}`; 

    const postGlobalDesktopPaddingWidth    = `${postGlobalPaddingDesktop?.top}${postGlobalPaddingUnits?.Desktop} ${postGlobalPaddingDesktop?.right}${postGlobalPaddingUnits?.Desktop} ${postGlobalPaddingDesktop?.bottom}${postGlobalPaddingUnits?.Desktop} ${postGlobalPaddingDesktop?.left}${postGlobalPaddingUnits?.Desktop}`;
    const postGlobalTabletPaddingWidth     = `${postGlobalPaddingTablet?.top}${postGlobalPaddingUnits?.Tablet} ${postGlobalPaddingTablet?.right}${postGlobalPaddingUnits?.Tablet} ${postGlobalPaddingTablet?.bottom}${postGlobalPaddingUnits?.Tablet} ${postGlobalPaddingTablet?.left}${postGlobalPaddingUnits?.Tablet}`;
    const postGlobalMobilePaddingWidth     = `${postGlobalPaddingMobile?.top}${postGlobalPaddingUnits?.Mobile} ${postGlobalPaddingMobile?.right}${postGlobalPaddingUnits?.Mobile} ${postGlobalPaddingMobile?.bottom}${postGlobalPaddingUnits?.Mobile} ${postGlobalPaddingMobile?.left}${postGlobalPaddingUnits?.Mobile}`;

    const postGlobalDesktopMarginWidth = `${postGlobalMarginDesktop?.top}${postGlobalMarginUnits?.Desktop} ${postGlobalMarginDesktop?.right}${postGlobalMarginUnits?.Desktop} ${postGlobalMarginDesktop?.bottom}${postGlobalMarginUnits?.Desktop} ${postGlobalMarginDesktop?.left}${postGlobalMarginUnits?.Desktop}`;
    const postGlobalTabletMarginWidth = `${postGlobalMarginTablet?.top}${postGlobalMarginUnits?.Tablet} ${postGlobalMarginTablet?.right}${postGlobalMarginUnits?.Tablet} ${postGlobalMarginTablet?.bottom}${postGlobalMarginUnits?.Tablet} ${postGlobalMarginTablet?.left}${postGlobalMarginUnits?.Tablet}`;
    const postGlobalMobileMarginWidth = `${postGlobalMarginMobile?.top}${postGlobalMarginUnits?.Mobile} ${postGlobalMarginMobile?.right}${postGlobalMarginUnits?.Mobile} ${postGlobalMarginMobile?.bottom}${postGlobalMarginUnits?.Mobile} ${postGlobalMarginMobile?.left}${postGlobalMarginUnits?.Mobile}`;

    const postGlobalDesktopBorderWidth = `${postGlobalBorderDesktop?.top}${postGlobalBorderUnits?.Desktop} ${postGlobalBorderDesktop?.right}${postGlobalBorderUnits?.Desktop} ${postGlobalBorderDesktop?.bottom}${postGlobalBorderUnits?.Desktop} ${postGlobalBorderDesktop?.left}${postGlobalBorderUnits?.Desktop}`;
    const postGlobalTabletBorderWidth = `${postGlobalBorderTablet?.top}${postGlobalBorderUnits?.Tablet} ${postGlobalBorderTablet?.right}${postGlobalBorderUnits?.Tablet} ${postGlobalBorderTablet?.bottom}${postGlobalBorderUnits?.Tablet} ${postGlobalBorderTablet?.left}${postGlobalBorderUnits?.Tablet}`;
    const postGlobalMobileBorderWidth = `${postGlobalBorderMobile?.top}${postGlobalBorderUnits?.Mobile} ${postGlobalBorderMobile?.right}${postGlobalBorderUnits?.Mobile} ${postGlobalBorderMobile?.bottom}${postGlobalBorderUnits?.Mobile} ${postGlobalBorderMobile?.left}${postGlobalBorderUnits?.Mobile}`;

    const postGlobalDesktopBorderRadiusWidth = `${postGlobalBorderRadiusDesktop?.top}${postGlobalBorderRadiusUnits?.Desktop} ${postGlobalBorderRadiusDesktop?.right}${postGlobalBorderRadiusUnits?.Desktop} ${postGlobalBorderRadiusDesktop?.bottom}${postGlobalBorderRadiusUnits?.Desktop} ${postGlobalBorderRadiusDesktop?.left}${postGlobalBorderRadiusUnits?.Desktop}`;
	const postGlobalTabletBorderRadiusWidth = `${postGlobalBorderRadiusTablet?.top}${postGlobalBorderRadiusUnits?.Tablet} ${postGlobalBorderRadiusTablet?.right}${postGlobalBorderRadiusUnits?.Tablet} ${postGlobalBorderRadiusTablet?.bottom}${postGlobalBorderRadiusUnits?.Tablet} ${postGlobalBorderRadiusTablet?.left}${postGlobalBorderRadiusUnits?.Tablet}`;
	const postGlobalMobileBorderRadiusWidth = `${postGlobalBorderRadiusMobile?.top}${postGlobalBorderRadiusUnits?.Mobile} ${postGlobalBorderRadiusMobile?.right}${postGlobalBorderRadiusUnits?.Mobile} ${postGlobalBorderRadiusMobile?.bottom}${postGlobalBorderRadiusUnits?.Mobile} ${postGlobalBorderRadiusMobile?.left}${postGlobalBorderRadiusUnits?.Mobile}`;
    
    const loadMoreButtonDesktopPaddingWidth    = `${loadMoreButtonDesktopPadding?.top}${loadMoreButtonPaddingUnits?.Desktop} ${loadMoreButtonDesktopPadding?.right}${loadMoreButtonPaddingUnits?.Desktop} ${loadMoreButtonDesktopPadding?.bottom}${loadMoreButtonPaddingUnits?.Desktop} ${loadMoreButtonDesktopPadding?.left}${loadMoreButtonPaddingUnits?.Desktop}`;
	const loadMoreButtonTabletPaddingWidth     = `${loadMoreButtonTabletPadding?.top}${loadMoreButtonPaddingUnits?.Tablet} ${loadMoreButtonTabletPadding?.right}${loadMoreButtonPaddingUnits?.Tablet} ${loadMoreButtonTabletPadding?.bottom}${loadMoreButtonPaddingUnits?.Tablet} ${loadMoreButtonTabletPadding?.left}${loadMoreButtonPaddingUnits?.Tablet}`;
	const loadMoreButtonMobilePaddingWidth     = `${loadMoreButtonMobilePadding?.top}${loadMoreButtonPaddingUnits?.Mobile} ${loadMoreButtonMobilePadding?.right}${loadMoreButtonPaddingUnits?.Mobile} ${loadMoreButtonMobilePadding?.bottom}${loadMoreButtonPaddingUnits?.Mobile} ${loadMoreButtonMobilePadding?.left}${loadMoreButtonPaddingUnits?.Mobile}`;

    const loadMoreButtonDesktopBorderWidth = `${loadMoreButtonDesktopBorder?.top}${loadMoreButtonBorderUnits?.Desktop} ${loadMoreButtonDesktopBorder?.right}${loadMoreButtonBorderUnits?.Desktop} ${loadMoreButtonDesktopBorder?.bottom}${loadMoreButtonBorderUnits?.Desktop} ${loadMoreButtonDesktopBorder?.left}${loadMoreButtonBorderUnits?.Desktop}`;
    const loadMoreButtonTabletBorderWidth = `${loadMoreButtonTabletBorder?.top}${loadMoreButtonBorderUnits?.Tablet} ${loadMoreButtonTabletBorder?.right}${loadMoreButtonBorderUnits?.Tablet} ${loadMoreButtonTabletBorder?.bottom}${loadMoreButtonBorderUnits?.Tablet} ${loadMoreButtonTabletBorder?.left}${loadMoreButtonBorderUnits?.Tablet}`;
    const loadMoreButtonMobileBorderWidth = `${loadMoreButtonMobileBorder?.top}${loadMoreButtonBorderUnits?.Mobile} ${loadMoreButtonMobileBorder?.right}${loadMoreButtonBorderUnits?.Mobile} ${loadMoreButtonMobileBorder?.bottom}${loadMoreButtonBorderUnits?.Mobile} ${loadMoreButtonMobileBorder?.left}${loadMoreButtonBorderUnits?.Mobile}`;

    const loadMoreButtonDesktopBorderRadiusWidth = `${loadMoreButtonDesktopBorderRadius?.top}${loadMoreButtonBorderRadiusUnits?.Desktop} ${loadMoreButtonDesktopBorderRadius?.right}${loadMoreButtonBorderRadiusUnits?.Desktop} ${loadMoreButtonDesktopBorderRadius?.bottom}${loadMoreButtonBorderRadiusUnits?.Desktop} ${loadMoreButtonDesktopBorderRadius?.left}${loadMoreButtonBorderRadiusUnits?.Desktop}`;
	const loadMoreButtonTabletBorderRadiusWidth = `${loadMoreButtonTabletBorderRadius?.top}${loadMoreButtonBorderRadiusUnits?.Tablet} ${loadMoreButtonTabletBorderRadius?.right}${loadMoreButtonBorderRadiusUnits?.Tablet} ${loadMoreButtonTabletBorderRadius?.bottom}${loadMoreButtonBorderRadiusUnits?.Tablet} ${loadMoreButtonTabletBorderRadius?.left}${loadMoreButtonBorderRadiusUnits?.Tablet}`;
	const loadMoreButtonMobileBorderRadiusWidth = `${loadMoreButtonMobileBorderRadius?.top}${loadMoreButtonBorderRadiusUnits?.Mobile} ${loadMoreButtonMobileBorderRadius?.right}${loadMoreButtonBorderRadiusUnits?.Mobile} ${loadMoreButtonMobileBorderRadius?.bottom}${loadMoreButtonBorderRadiusUnits?.Mobile} ${loadMoreButtonMobileBorderRadius?.left}${loadMoreButtonBorderRadiusUnits?.Mobile}`;

    const loadMoreIconDesktopMarginWidth    = `${loadMoreIconDesktopMargin?.top}${loadMoreIconMarginUnits?.Desktop} ${loadMoreIconDesktopMargin?.right}${loadMoreIconMarginUnits?.Desktop} ${loadMoreIconDesktopMargin?.bottom}${loadMoreIconMarginUnits?.Desktop} ${loadMoreIconDesktopMargin?.left}${loadMoreIconMarginUnits?.Desktop}`;
    const loadMoreIconTabletMarginWidth     = `${loadMoreIconTabletMargin?.top}${loadMoreIconMarginUnits?.Tablet} ${loadMoreIconTabletMargin?.right}${loadMoreIconMarginUnits?.Tablet} ${loadMoreIconTabletMargin?.bottom}${loadMoreIconMarginUnits?.Tablet} ${loadMoreIconTabletMargin?.left}${loadMoreIconMarginUnits?.Tablet}`;
    const loadMoreIconMobileMarginWidth     = `${loadMoreIconMobileMargin?.top}${loadMoreIconMarginUnits?.Mobile} ${loadMoreIconMobileMargin?.right}${loadMoreIconMarginUnits?.Mobile} ${loadMoreIconMobileMargin?.bottom}${loadMoreIconMarginUnits?.Mobile} ${loadMoreIconMobileMargin?.left}${loadMoreIconMarginUnits?.Mobile}`;

    const buttonIconBorderDesktopWidth = `${buttonIconBorderDesktop?.top}${buttonIconBorderUnits?.Desktop} ${buttonIconBorderDesktop?.right}${buttonIconBorderUnits?.Desktop} ${buttonIconBorderDesktop?.bottom}${buttonIconBorderUnits?.Desktop} ${buttonIconBorderDesktop?.left}${buttonIconBorderUnits?.Desktop}`;
    const buttonIconBorderTabletWidth = `${buttonIconBorderTablet?.top}${buttonIconBorderUnits?.Tablet} ${buttonIconBorderTablet?.right}${buttonIconBorderUnits?.Tablet} ${buttonIconBorderTablet?.bottom}${buttonIconBorderUnits?.Tablet} ${buttonIconBorderTablet?.left}${buttonIconBorderUnits?.Tablet}`;
    const buttonIconBorderMobileWidth = `${buttonIconBorderMobile?.top}${buttonIconBorderUnits?.Mobile} ${buttonIconBorderMobile?.right}${buttonIconBorderUnits?.Mobile} ${buttonIconBorderMobile?.bottom}${buttonIconBorderUnits?.Mobile} ${buttonIconBorderMobile?.left}${buttonIconBorderUnits?.Mobile}`;

    const buttonIconBorderRadiusDesktopWidth = `${buttonIconBorderRadiusDesktop?.top}${buttonIconBorderRadiusUnits?.Desktop} ${buttonIconBorderRadiusDesktop?.right}${buttonIconBorderRadiusUnits?.Desktop} ${buttonIconBorderRadiusDesktop?.bottom}${buttonIconBorderRadiusUnits?.Desktop} ${buttonIconBorderRadiusDesktop?.left}${buttonIconBorderRadiusUnits?.Desktop}`;
    const buttonIconBorderRadiusTabletWidth = `${buttonIconBorderRadiusTablet?.top}${buttonIconBorderRadiusUnits?.Tablet} ${buttonIconBorderRadiusTablet?.right}${buttonIconBorderRadiusUnits?.Tablet} ${buttonIconBorderRadiusTablet?.bottom}${buttonIconBorderRadiusUnits?.Tablet} ${buttonIconBorderRadiusTablet?.left}${buttonIconBorderRadiusUnits?.Tablet}`;
    const buttonIconBorderRadiusMobileWidth = `${buttonIconBorderRadiusMobile?.top}${buttonIconBorderRadiusUnits?.Mobile} ${buttonIconBorderRadiusMobile?.right}${buttonIconBorderRadiusUnits?.Mobile} ${buttonIconBorderRadiusMobile?.bottom}${buttonIconBorderRadiusUnits?.Mobile} ${buttonIconBorderRadiusMobile?.left}${buttonIconBorderRadiusUnits?.Mobile}`;

    const buttonDesktopPaddingStr = `${buttonDesktopPadding?.top}${buttonPaddingUnits?.Desktop} ${buttonDesktopPadding?.right}${buttonPaddingUnits?.Desktop} ${buttonDesktopPadding?.bottom}${buttonPaddingUnits?.Desktop} ${buttonDesktopPadding?.left}${buttonPaddingUnits?.Desktop}`;
	const buttonTabletPaddingStr = `${buttonTabPadding?.top}${buttonPaddingUnits?.Tablet} ${buttonTabPadding?.right}${buttonPaddingUnits?.Tablet} ${buttonTabPadding?.bottom}${buttonPaddingUnits?.Tablet} ${buttonTabPadding?.left}${buttonPaddingUnits?.Tablet}`;
	const buttonMobilePaddingStr = `${buttonMobilePadding?.top}${buttonPaddingUnits?.Mobile} ${buttonMobilePadding?.right}${buttonPaddingUnits?.Mobile} ${buttonMobilePadding?.bottom}${buttonPaddingUnits?.Mobile} ${buttonMobilePadding?.left}${buttonPaddingUnits?.Mobile}`;

    const buttonDesktopMarginStr = `${buttonDesktopMargin?.top}${buttonMarginUnits?.Desktop} ${buttonDesktopMargin?.right}${buttonMarginUnits?.Desktop} ${buttonDesktopMargin?.bottom}${buttonMarginUnits?.Desktop} ${buttonDesktopMargin?.left}${buttonMarginUnits?.Desktop}`;
	const buttonTabletMarginStr = `${buttonTabMargin?.top}${buttonMarginUnits?.Tablet} ${buttonTabMargin?.right}${buttonMarginUnits?.Tablet} ${buttonTabMargin?.bottom}${buttonMarginUnits?.Tablet} ${buttonTabMargin?.left}${buttonMarginUnits?.Tablet}`;
	const buttonMobileMarginStr = `${buttonMobileMargin?.top}${buttonMarginUnits?.Mobile} ${buttonMobileMargin?.right}${buttonMarginUnits?.Mobile} ${buttonMobileMargin?.bottom}${buttonMarginUnits?.Mobile} ${buttonMobileMargin?.left}${buttonMarginUnits?.Mobile}`;

    const buttonDesktopBorderWidthStr = `${buttonDesktopBorderWidth?.top}${buttonBorderUnits?.Desktop} ${buttonDesktopBorderWidth?.right}${buttonBorderUnits?.Desktop} ${buttonDesktopBorderWidth?.bottom}${buttonBorderUnits?.Desktop} ${buttonDesktopBorderWidth?.left}${buttonBorderUnits?.Desktop}`;
	const buttonTabletBorderWidthStr = `${buttonTabBorderWidth?.top}${buttonBorderUnits?.Tablet} ${buttonTabBorderWidth?.right}${buttonBorderUnits?.Tablet} ${buttonTabBorderWidth?.bottom}${buttonBorderUnits?.Tablet} ${buttonTabBorderWidth?.left}${buttonBorderUnits?.Tablet}`;
	const buttonMobileBorderWidthStr = `${buttonMobileBorderWidth?.top}${buttonBorderUnits?.Mobile} ${buttonMobileBorderWidth?.right}${buttonBorderUnits?.Mobile} ${buttonMobileBorderWidth?.bottom}${buttonBorderUnits?.Mobile} ${buttonMobileBorderWidth?.left}${buttonBorderUnits?.Mobile}`;

    const buttonDesktopBorderRadiusStr = `${buttonDesktopBorderRadiusWidth?.top}${buttonBorderRadiusUnits?.Desktop} ${buttonDesktopBorderRadiusWidth?.right}${buttonBorderRadiusUnits?.Desktop} ${buttonDesktopBorderRadiusWidth?.bottom}${buttonBorderRadiusUnits?.Desktop} ${buttonDesktopBorderRadiusWidth?.left}${buttonBorderRadiusUnits?.Desktop}`;
	const buttonTabletBorderRadiusStr = `${buttonTabBorderRadiusWidth?.top}${buttonBorderRadiusUnits?.Tablet} ${buttonTabBorderRadiusWidth?.right}${buttonBorderRadiusUnits?.Tablet} ${buttonTabBorderRadiusWidth?.bottom}${buttonBorderRadiusUnits?.Tablet} ${buttonTabBorderRadiusWidth?.left}${buttonBorderRadiusUnits?.Tablet}`;
	const buttonMobileBorderRadiusStr = `${buttonMobileBorderRadiusWidth?.top}${buttonBorderRadiusUnits?.Mobile} ${buttonMobileBorderRadiusWidth?.right}${buttonBorderRadiusUnits?.Mobile} ${buttonMobileBorderRadiusWidth?.bottom}${buttonBorderRadiusUnits?.Mobile} ${buttonMobileBorderRadiusWidth?.left}${buttonBorderRadiusUnits?.Mobile}`;

    const paginationArrowDesktopBorderWidth = `${paginationArrowDesktopBorder?.top}${paginationArrowBorderUnits?.Desktop} ${paginationArrowDesktopBorder?.right}${paginationArrowBorderUnits?.Desktop} ${paginationArrowDesktopBorder?.bottom}${paginationArrowBorderUnits?.Desktop} ${paginationArrowDesktopBorder?.left}${paginationArrowBorderUnits?.Desktop}`;
    const paginationArrowTabletBorderWidth = `${paginationArrowTabletBorder?.top}${paginationArrowBorderUnits?.Tablet} ${paginationArrowTabletBorder?.right}${paginationArrowBorderUnits?.Tablet} ${paginationArrowTabletBorder?.bottom}${paginationArrowBorderUnits?.Tablet} ${paginationArrowTabletBorder?.left}${paginationArrowBorderUnits?.Tablet}`;
    const paginationArrowMobileBorderWidth = `${paginationArrowMobileBorder?.top}${paginationArrowBorderUnits?.Mobile} ${paginationArrowMobileBorder?.right}${paginationArrowBorderUnits?.Mobile} ${paginationArrowMobileBorder?.bottom}${paginationArrowBorderUnits?.Mobile} ${paginationArrowMobileBorder?.left}${paginationArrowBorderUnits?.Mobile}`;

    const paginationArrowDesktopBorderRadiusWidth = `${paginationArrowDesktopBorderRadius?.top}${paginationArrowBorderRadiusUnits?.Desktop} ${paginationArrowDesktopBorderRadius?.right}${paginationArrowBorderRadiusUnits?.Desktop} ${paginationArrowDesktopBorderRadius?.bottom}${paginationArrowBorderRadiusUnits?.Desktop} ${paginationArrowDesktopBorderRadius?.left}${paginationArrowBorderRadiusUnits?.Desktop}`;
    const paginationArrowTabletBorderRadiusWidth = `${paginationArrowTabletBorderRadius?.top}${paginationArrowBorderRadiusUnits?.Tablet} ${paginationArrowTabletBorderRadius?.right}${paginationArrowBorderRadiusUnits?.Tablet} ${paginationArrowTabletBorderRadius?.bottom}${paginationArrowBorderRadiusUnits?.Tablet} ${paginationArrowTabletBorderRadius?.left}${paginationArrowBorderRadiusUnits?.Tablet}`;
    const paginationArrowMobileBorderRadiusWidth = `${paginationArrowMobileBorderRadius?.top}${paginationArrowBorderRadiusUnits?.Mobile} ${paginationArrowMobileBorderRadius?.right}${paginationArrowBorderRadiusUnits?.Mobile} ${paginationArrowMobileBorderRadius?.bottom}${paginationArrowBorderRadiusUnits?.Mobile} ${paginationArrowMobileBorderRadius?.left}${paginationArrowBorderRadiusUnits?.Mobile}`;

    const paginationBtnDesktopBorderWidth = `${paginationBtnDesktopBorder?.top}${paginationBtnBorderUnits?.Desktop} ${paginationBtnDesktopBorder?.right}${paginationBtnBorderUnits?.Desktop} ${paginationBtnDesktopBorder?.bottom}${paginationBtnBorderUnits?.Desktop} ${paginationBtnDesktopBorder?.left}${paginationBtnBorderUnits?.Desktop}`;
    const paginationBtnTabletBorderWidth = `${paginationBtnTabletBorder?.top}${paginationBtnBorderUnits?.Tablet} ${paginationBtnTabletBorder?.right}${paginationBtnBorderUnits?.Tablet} ${paginationBtnTabletBorder?.bottom}${paginationBtnBorderUnits?.Tablet} ${paginationBtnTabletBorder?.left}${paginationBtnBorderUnits?.Tablet}`;
    const paginationBtnMobileBorderWidth = `${paginationBtnMobileBorder?.top}${paginationBtnBorderUnits?.Mobile} ${paginationBtnMobileBorder?.right}${paginationBtnBorderUnits?.Mobile} ${paginationBtnMobileBorder?.bottom}${paginationBtnBorderUnits?.Mobile} ${paginationBtnMobileBorder?.left}${paginationBtnBorderUnits?.Mobile}`;

    const paginationBtnDesktopBorderRadiusWidth = `${paginationBtnDesktopBorderRadius?.top}${paginationBtnBorderRadiusUnits?.Desktop} ${paginationBtnDesktopBorderRadius?.right}${paginationBtnBorderRadiusUnits?.Desktop} ${paginationBtnDesktopBorderRadius?.bottom}${paginationBtnBorderRadiusUnits?.Desktop} ${paginationBtnDesktopBorderRadius?.left}${paginationBtnBorderRadiusUnits?.Desktop}`;
    const paginationBtnTabletBorderRadiusWidth = `${paginationBtnTabletBorderRadius?.top}${paginationBtnBorderRadiusUnits?.Tablet} ${paginationBtnTabletBorderRadius?.right}${paginationBtnBorderRadiusUnits?.Tablet} ${paginationBtnTabletBorderRadius?.bottom}${paginationBtnBorderRadiusUnits?.Tablet} ${paginationBtnTabletBorderRadius?.left}${paginationBtnBorderRadiusUnits?.Tablet}`;
    const paginationBtnMobileBorderRadiusWidth = `${paginationBtnMobileBorderRadius?.top}${paginationBtnBorderRadiusUnits?.Mobile} ${paginationBtnMobileBorderRadius?.right}${paginationBtnBorderRadiusUnits?.Mobile} ${paginationBtnMobileBorderRadius?.bottom}${paginationBtnBorderRadiusUnits?.Mobile} ${paginationBtnMobileBorderRadius?.left}${paginationBtnBorderRadiusUnits?.Mobile}`;

    // all block style
    const postGridBlockStyle = `

        .${blockID}.fb-post-grid-area {
            ${postGridPositionType === 'default' ? `position: relative;` : ''}
            ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' ? `width: 100%;` : ''}
            ${postGridPositionType !== 'default' ? `position: ${postGridPositionType};` : ''}
            ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridHZOrientationType === 'left' && postGridHZLeftOffset?.Desktop !== undefined ? `left: ${postGridHZLeftOffset?.Desktop}${postGridHZLeftOffsetUnits?.Desktop};` : ''}
            ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridHZOrientationType === 'right' && postGridHZRightOffset?.Desktop !== undefined ? `right: ${postGridHZRightOffset?.Desktop}${postGridHZRightOffsetUnits?.Desktop};` : ''}
            ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridVROrientationType === 'top' && postGridVRTopOffset?.Desktop !== undefined ? `top: ${postGridVRTopOffset?.Desktop}${postGridVRTopOffsetUnits?.Desktop};` : ''}
            ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridVROrientationType === 'bottom' && postGridVRBottomOffset?.Desktop !== undefined ? `bottom: ${postGridVRBottomOffset?.Desktop}${postGridVRBottomOffsetUnits?.Desktop};` : ''}
            ${postGlobalZIndex?.Desktop ? `z-index: ${postGlobalZIndex?.Desktop};` : ''}
            ${postGridOverflow !== 'default' ? `overflow: ${postGridOverflow};` : ''}
        }
        .${blockID}.fb_post_grid_container {
            ${postGlobalDesktopPaddingWidth && postGlobalPaddingDesktop?.top? `padding: ${postGlobalDesktopPaddingWidth};` : ''}
            ${postGlobalDesktopMarginWidth && postGlobalMarginDesktop?.top? `margin: ${postGlobalDesktopMarginWidth};` : ''} 
            ${postGlobalBorder ? `border: ${postGlobalBorder};` : ''} 
            ${postGlobalDesktopBorderWidth && postGlobalBorderDesktop?.top? `border-width: ${postGlobalDesktopBorderWidth};` : ''}
            ${postGlobalDesktopBorderRadiusWidth && postGlobalBorderRadiusDesktop?.top? `border-radius: ${postGlobalDesktopBorderRadiusWidth};` : ''}
            ${postGlobalBorderColor ? `border-color: ${postGlobalBorderColor};` : ''}
            ${postGlobalBoxShadowCssValue ? `box-shadow: ${postGlobalBoxShadowCssValue};` : ''}
            ${postGlobalNormalBackgroundType === 'gradient' ? `  
                ${postGlobalNormalCustomGradientSwitcher && postGlobalNormalCustomGradientInputValue ? `background: ${postGlobalNormalCustomGradientInputValue};` : `background: ${postGlobalNormalGradientColor};`}
            `: `
                ${postGlobalNormalClassicColor ? `background: ${postGlobalNormalClassicColor};` : ''}
            `}
            transition: all .3s ease-in-out;
            position: relative;
        }
        .${blockID}.fb_post_grid_container:hover {
            ${postGlobalHoverBackgroundType === 'gradient' ? `  
                ${postGlobalHoverCustomGradientSwitcher && postGlobalHoverCustomGradientInputValue ? `background: ${postGlobalHoverCustomGradientInputValue};` : `background: ${postGlobalHoverGradientColor};`}
            `: `
                ${postGlobalHoverClassicColor ? `background: ${postGlobalHoverClassicColor};` : ''}
            `}
            ${postGlobalBorderHoverColor ? `border-color: ${postGlobalBorderHoverColor};` : ''}
            ${postGlobalBoxShadowHoverCssValue ? `box-shadow: ${postGlobalBoxShadowHoverCssValue};` : ''}
        }
        .${blockID}.fb_post_grid_container.grid-layout {
            display: grid; 
            grid-template-columns: repeat(${gridColumnsPerSection?.Desktop}, 1fr) !important;
            row-gap: ${gridRowGap?.Desktop}${gridGapUnits?.Desktop};  
            column-gap: ${gridColumnGap?.Desktop}${gridGapUnits?.Desktop}; 
        }

        .${blockID}.fb_post_grid_container.grid-layout .fb_load_more_wrapper {
            grid-column: span ${gridColumnsPerSection?.Desktop};
        }

        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_load_more {
            ${loadMoreTextGlobalTypoSwitcher?.fontFamily === true && loadMoreTextGlobalTypographyData?.fontFamily ? `font-family: ${loadMoreTextGlobalTypographyData?.fontFamily};` : ''}
            ${loadMoreTextGlobalTypoSwitcher?.fontSize === true && loadMoreTextGlobalTypographyData?.fontSize ? `font-size: ${loadMoreTextGlobalTypographyData?.fontSize};` : ''}
            ${loadMoreTextGlobalTypoSwitcher?.fontWeight === true && loadMoreTextGlobalTypographyData?.fontWeight ? `font-weight: ${loadMoreTextGlobalTypographyData?.fontWeight};` : ''}
            ${loadMoreTextGlobalTypoSwitcher?.fontStyle === true && loadMoreTextGlobalTypographyData?.fontStyle ? `font-style: ${loadMoreTextGlobalTypographyData?.fontStyle};` : ''}
            ${loadMoreTextGlobalTypoSwitcher?.textTransform === true && loadMoreTextGlobalTypographyData?.textTransform ? `text-transform: ${loadMoreTextGlobalTypographyData?.textTransform};` : ''}
            ${loadMoreTextGlobalTypoSwitcher?.textDecoration === true && loadMoreTextGlobalTypographyData?.textDecoration ? `text-decoration: ${loadMoreTextGlobalTypographyData?.textDecoration};` : ''}
            ${loadMoreTextGlobalTypoSwitcher?.letterSpacing === true && loadMoreTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${loadMoreTextGlobalTypographyData?.letterSpacing};` : ''}
            ${loadMoreTextGlobalTypoSwitcher?.lineHeight === true && loadMoreTextGlobalTypographyData?.lineHeight ? `line-height: ${loadMoreTextGlobalTypographyData?.lineHeight};` : ''}
            
            ${loadMoreTextGlobalTypoSwitcher?.fontFamily === false && loadMoreTextFontFamily && loadMoreTextFontFamily !== 'Default' ? `font-family: ${loadMoreTextFontFamily};` : ''}
            ${loadMoreTextGlobalTypoSwitcher?.fontSize === false && loadMoreTextFontSize?.Desktop ? `font-size: ${loadMoreTextFontSize?.Desktop}${loadMoreTextFontSizeUnits?.Desktop};` : ''} 
            ${loadMoreTextGlobalTypoSwitcher?.fontWeight === false && loadMoreTextFontWeight ? `font-weight: ${loadMoreTextFontWeight};` : ''}
            ${loadMoreTextGlobalTypoSwitcher?.fontStyle === false && loadMoreTextFontStyle ? `font-style: ${loadMoreTextFontStyle};` : ''} 
            ${loadMoreTextGlobalTypoSwitcher?.textTransform === false && loadMoreTextTransform ? `text-transform: ${loadMoreTextTransform};` : ''}
            ${loadMoreTextGlobalTypoSwitcher?.textDecoration === false && loadMoreTextDecoration ? `text-decoration: ${loadMoreTextDecoration};` : ''} 
            ${loadMoreTextGlobalTypoSwitcher?.letterSpacing === false && loadMoreTextLetterSpacing?.Desktop ? `letter-spacing: ${loadMoreTextLetterSpacing?.Desktop}${loadMoreTextLetterSpacingUnits?.Desktop};` : ''}
            ${loadMoreTextGlobalTypoSwitcher?.lineHeight === false && loadMoreTextLineHeight?.Desktop ? `line-height: ${loadMoreTextLineHeight?.Desktop}${loadMoreTextLineHeightUnits?.Desktop};` : ''}
            ${loadMoreButtonDesktopPaddingWidth && loadMoreButtonDesktopPadding?.top ? `padding: ${loadMoreButtonDesktopPaddingWidth};` : ''}
            ${loadMoreButtonBorder ? `border: ${loadMoreButtonBorder};` : ''} 
            ${loadMoreButtonDesktopBorderWidth && loadMoreButtonDesktopBorder?.top ? `border-width: ${loadMoreButtonDesktopBorderWidth};` : ''}
            ${loadMoreButtonDesktopBorderRadiusWidth && loadMoreButtonDesktopBorderRadius?.top? `border-radius: ${loadMoreButtonDesktopBorderRadiusWidth};` : ''}
            ${loadMoreButtonBorderColor ? `border-color: ${loadMoreButtonBorderColor};` : ''}
            ${loadMoreTextColor ? `color: ${loadMoreTextColor};` : ''}
            ${loadMoreButtonNormalBackgroundType === 'gradient' ? `   
                ${loadMoreButtonNormalCustomGradientSwitcher && loadMoreButtonNormalCustomGradientInputValue ? `background: ${loadMoreButtonNormalCustomGradientInputValue};` : `background: ${loadMoreButtonNormalGradientColor};`}
            `: `
                ${loadMoreButtonNormalClassicColor ? `background: ${loadMoreButtonNormalClassicColor};` : ''}
            `}

        }

        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_load_more:hover {
            ${loadMoreButtonHoverBackgroundType === 'gradient' ? `   
                ${loadMoreButtonHoverCustomGradientSwitcher && loadMoreButtonHoverCustomGradientInputValue ? `background: ${loadMoreButtonHoverCustomGradientInputValue};` : `background: ${loadMoreButtonHoverGradientColor};`}
            `: `
                ${loadMoreButtonHoverClassicColor ? `background: ${loadMoreButtonHoverClassicColor};` : ''}
            `}
            ${loadMoreTextHoverColor ? `color: ${loadMoreTextHoverColor};` : ''} 
            ${loadMoreButtonBorderHoverColor ? `border-color: ${loadMoreButtonBorderHoverColor};` : ''}
        }
        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_load_more .load_more_button_icon svg {
            ${loadMoreIconSize?.Desktop ? `width: ${loadMoreIconSize?.Desktop}${loadMoreIconSizeUnits?.Desktop};` : ''}
            ${loadMoreIconSize?.Desktop ? `height: ${loadMoreIconSize?.Desktop}${loadMoreIconSizeUnits?.Desktop};` : ''}
            ${loadMoreIconColor ? `fill: ${loadMoreIconColor};` : ''}
            ${loadMoreIconDesktopMarginWidth && loadMoreIconDesktopMargin?.top ? `margin: ${loadMoreIconDesktopMarginWidth};` : ''}
        }

        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_load_more:hover .load_more_button_icon svg{
            ${loadMoreIconHoverColor ? `fill: ${loadMoreIconHoverColor};` : ''}
        }

        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_load_more_loader {
            border-top: 2px solid ${loadMoreloaderColor ? loadMoreloaderColor : '#FFFFFF'};
            border-right: 2px solid ${loadMoreloaderColor ? loadMoreloaderColor : '#FFFFFF'};
            border-bottom: 2px solid ${loadMoreloaderColor ? loadMoreloaderColor : '#FFFFFF'};
            border-left: 2px solid transparent;
            border-radius: 50%;
            display: inline-block;
            box-sizing: border-box;
            transition: all .3s ease-in-out;
            animation: loader 1s linear infinite;
        }
        .${blockID}.fb_post_grid_container .fb_load_more_wrapper:hover .fb_load_more_loader {
            border-top: 2px solid ${loadMoreloaderHoverColor ? loadMoreloaderHoverColor : '#FFFFFF'};
            border-right: 2px solid ${loadMoreloaderHoverColor ? loadMoreloaderHoverColor : '#FFFFFF'};
            border-bottom: 2px solid ${loadMoreloaderHoverColor ? loadMoreloaderHoverColor : '#FFFFFF'};
            transition: all .3s ease-in-out;
        }


        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous,
        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next{
            ${paginationPrevNextWidth?.Desktop ? `width: ${paginationPrevNextWidth?.Desktop}${paginationPrevNextWidthUnits?.Desktop};` : ''}
            ${paginationPrevNextWidth?.Desktop ? `height: ${paginationPrevNextWidth?.Desktop}${paginationPrevNextWidthUnits?.Desktop};` : ''}

            ${paginationArrowBorder ? `border: ${paginationArrowBorder};` : ''} 
            ${paginationArrowBorderColor ? `border-color: ${paginationArrowBorderColor};` : ''}
            ${paginationArrowDesktopBorderWidth && paginationArrowDesktopBorder?.top ? `border-width: ${paginationArrowDesktopBorderWidth};` : ''}
            ${paginationArrowDesktopBorderRadiusWidth && paginationArrowDesktopBorderRadius?.top? `border-radius: ${paginationArrowDesktopBorderRadiusWidth};` : ''}

            ${paginationArrowNormalBackgroundType === 'gradient' ? `   
                ${paginationArrowNormalCustomGradientSwitcher && paginationArrowNormalCustomGradientInputValue ? `background: ${paginationArrowNormalCustomGradientInputValue};` : `background: ${paginationArrowNormalGradientColor};`}
            `: `
                ${paginationArrowNormalClassicColor ? `background: ${paginationArrowNormalClassicColor};` : ''}
            `}
        }

        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous:hover,
        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next:hover{
            ${paginationArrowBorderHoverColor ? `border-color: ${paginationArrowBorderHoverColor};` : ''}

            ${paginationArrowHoverBackgroundType === 'gradient' ? `    
                ${paginationArrowHoverCustomGradientSwitcher && paginationArrowHoverCustomGradientInputValue ? `background: ${paginationArrowHoverCustomGradientInputValue};` : `background: ${paginationArrowHoverGradientColor};`}
            `: `
                ${paginationArrowHoverClassicColor ? `background: ${paginationArrowHoverClassicColor};` : ''}
            `}
        }

        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous .fb_pagination_previous_icon_Wrapper .fb_pagination_previous_icon,
        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next .fb_pagination_next_icon_Wrapper .fb_pagination_next_icon{
            ${paginationArrowSize?.Desktop ? `width: ${paginationArrowSize?.Desktop}${paginationArrowSizeUnits?.Desktop};` : ''}
            ${paginationArrowSize?.Desktop ? `height: ${paginationArrowSize?.Desktop}${paginationArrowSizeUnits?.Desktop};` : ''}
        }

        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous .fb_pagination_previous_icon_Wrapper .fb_pagination_previous_icon svg,
        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next .fb_pagination_next_icon_Wrapper .fb_pagination_next_icon svg{
            ${paginationArrowIconColor ? `fill: ${paginationArrowIconColor};` : ''}
        }

        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous:hover .fb_pagination_previous_icon_Wrapper .fb_pagination_previous_icon svg,
        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next:hover .fb_pagination_next_icon_Wrapper .fb_pagination_next_icon svg{
            ${paginationArrowIconHoverColor ? `fill: ${paginationArrowIconHoverColor};` : ''}
        }

        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous .fb_pagination_previous_text,
        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next .fb_pagination_next_text{
            ${paginationArrowTextGlobalTypoSwitcher?.fontFamily === true && paginationArrowTextGlobalTypographyData?.fontFamily ? `font-family: ${paginationArrowTextGlobalTypographyData?.fontFamily};` : ''}  
            ${paginationArrowTextGlobalTypoSwitcher?.fontSize === true && paginationArrowTextGlobalTypographyData?.fontSize ? `font-size: ${paginationArrowTextGlobalTypographyData?.fontSize};` : ''}
            ${paginationArrowTextGlobalTypoSwitcher?.fontWeight === true && paginationArrowTextGlobalTypographyData?.fontWeight ? `font-weight: ${paginationArrowTextGlobalTypographyData?.fontWeight};` : ''}
            ${paginationArrowTextGlobalTypoSwitcher?.fontStyle === true && paginationArrowTextGlobalTypographyData?.fontStyle ? `font-style: ${paginationArrowTextGlobalTypographyData?.fontStyle};` : ''}
            ${paginationArrowTextGlobalTypoSwitcher?.textTransform === true && paginationArrowTextGlobalTypographyData?.textTransform ? `text-transform: ${paginationArrowTextGlobalTypographyData?.textTransform};` : ''} 
            ${paginationArrowTextGlobalTypoSwitcher?.textDecoration === true && paginationArrowTextGlobalTypographyData?.textDecoration ? `text-decoration: ${paginationArrowTextGlobalTypographyData?.textDecoration};` : ''}
            ${paginationArrowTextGlobalTypoSwitcher?.letterSpacing === true && paginationArrowTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${paginationArrowTextGlobalTypographyData?.letterSpacing};` : ''}
            ${paginationArrowTextGlobalTypoSwitcher?.lineHeight === true && paginationArrowTextGlobalTypographyData?.lineHeight ? `line-height: ${paginationArrowTextGlobalTypographyData?.lineHeight};` : ''}
            
            ${paginationArrowTextGlobalTypoSwitcher?.fontFamily === false && paginationArrowTextFontFamily && paginationArrowTextFontFamily !== 'Default' ? `font-family: ${paginationArrowTextFontFamily};` : ''}
            ${paginationArrowTextGlobalTypoSwitcher?.fontSize === false && paginationArrowTextFontSize?.Desktop ? `font-size: ${paginationArrowTextFontSize?.Desktop}${paginationArrowTextFontSizeUnits?.Desktop};` : ''} 
            ${paginationArrowTextGlobalTypoSwitcher?.fontWeight === false && paginationArrowTextFontWeight ? `font-weight: ${paginationArrowTextFontWeight};` : ''}
            ${paginationArrowTextGlobalTypoSwitcher?.fontStyle === false && paginationArrowTextFontStyle ? `font-style: ${paginationArrowTextFontStyle};` : ''}  
            ${paginationArrowTextGlobalTypoSwitcher?.textTransform === false && paginationArrowTextTransform ? `text-transform: ${paginationArrowTextTransform};` : ''}
            ${paginationArrowTextGlobalTypoSwitcher?.textDecoration === false && paginationArrowTextDecoration ? `text-decoration: ${paginationArrowTextDecoration};` : ''} 
            ${paginationArrowTextGlobalTypoSwitcher?.letterSpacing === false && paginationArrowTextLetterSpacing?.Desktop ? `letter-spacing: ${paginationArrowTextLetterSpacing?.Desktop}${paginationArrowTextLetterSpacingUnits?.Desktop};` : ''}
            ${paginationArrowTextGlobalTypoSwitcher?.lineHeight === false && paginationArrowTextLineHeight?.Desktop ? `line-height: ${paginationArrowTextLineHeight?.Desktop}${paginationArrowTextLineHeightUnits?.Desktop};` : ''}

            ${paginationArrowTextColor ? `color: ${paginationArrowTextColor};` : ''}
        }
        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous:hover .fb_pagination_previous_text,
        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next:hover .fb_pagination_next_text{ 
            ${paginationArrowTextHoverColor ? `color: ${paginationArrowTextHoverColor};` : ''}
        }

        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination {
            ${paginationBtnGap?.Desktop ? `gap: ${paginationBtnGap?.Desktop}${paginationBtnGapUnits?.Desktop};` : ''}
        }
                
        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination .fb_pagination_item {
            ${paginationBtnSize?.Desktop ? `width: ${paginationBtnSize?.Desktop}${paginationBtnSizeUnits?.Desktop};` : ''}  
            ${paginationBtnSize?.Desktop ? `height: ${paginationBtnSize?.Desktop}${paginationBtnSizeUnits?.Desktop};` : ''}

            ${paginationBtnTextGlobalTypoSwitcher?.fontFamily === true && paginationBtnTextGlobalTypographyData?.fontFamily ? `font-family: ${paginationBtnTextGlobalTypographyData?.fontFamily};` : ''}  
            ${paginationBtnTextGlobalTypoSwitcher?.fontSize === true && paginationBtnTextGlobalTypographyData?.fontSize ? `font-size: ${paginationBtnTextGlobalTypographyData?.fontSize};` : ''}
            ${paginationBtnTextGlobalTypoSwitcher?.fontWeight === true && paginationBtnTextGlobalTypographyData?.fontWeight ? `font-weight: ${paginationBtnTextGlobalTypographyData?.fontWeight};` : ''}
            ${paginationBtnTextGlobalTypoSwitcher?.fontStyle === true && paginationBtnTextGlobalTypographyData?.fontStyle ? `font-style: ${paginationBtnTextGlobalTypographyData?.fontStyle};` : ''}
            ${paginationBtnTextGlobalTypoSwitcher?.textTransform === true && paginationBtnTextGlobalTypographyData?.textTransform ? `text-transform: ${paginationBtnTextGlobalTypographyData?.textTransform};` : ''} 
            ${paginationBtnTextGlobalTypoSwitcher?.textDecoration === true && paginationBtnTextGlobalTypographyData?.textDecoration ? `text-decoration: ${paginationBtnTextGlobalTypographyData?.textDecoration};` : ''}
            ${paginationBtnTextGlobalTypoSwitcher?.letterSpacing === true && paginationBtnTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${paginationBtnTextGlobalTypographyData?.letterSpacing};` : ''}
            ${paginationBtnTextGlobalTypoSwitcher?.lineHeight === true && paginationBtnTextGlobalTypographyData?.lineHeight ? `line-height: ${paginationBtnTextGlobalTypographyData?.lineHeight};` : ''}
            
            ${paginationBtnTextGlobalTypoSwitcher?.fontFamily === false && paginationBtnTextFontFamily && paginationBtnTextFontFamily !== 'Default' ? `font-family: ${paginationBtnTextFontFamily};` : ''}
            ${paginationBtnTextGlobalTypoSwitcher?.fontSize === false && paginationBtnTextFontSize?.Desktop ? `font-size: ${paginationBtnTextFontSize?.Desktop}${paginationBtnTextFontSizeUnits?.Desktop};` : ''} 
            ${paginationBtnTextGlobalTypoSwitcher?.fontWeight === false && paginationBtnTextFontWeight ? `font-weight: ${paginationBtnTextFontWeight};` : ''}
            ${paginationBtnTextGlobalTypoSwitcher?.fontStyle === false && paginationBtnTextFontStyle ? `font-style: ${paginationBtnTextFontStyle};` : ''}  
            ${paginationBtnTextGlobalTypoSwitcher?.textTransform === false && paginationBtnTextTransform ? `text-transform: ${paginationBtnTextTransform};` : ''}
            ${paginationBtnTextGlobalTypoSwitcher?.textDecoration === false && paginationBtnTextDecoration ? `text-decoration: ${paginationBtnTextDecoration};` : ''} 
            ${paginationBtnTextGlobalTypoSwitcher?.letterSpacing === false && paginationBtnTextLetterSpacing?.Desktop ? `letter-spacing: ${paginationBtnTextLetterSpacing?.Desktop}${paginationBtnTextLetterSpacingUnits?.Desktop};` : ''}
            ${paginationBtnTextGlobalTypoSwitcher?.lineHeight === false && paginationBtnTextLineHeight?.Desktop ? `line-height: ${paginationBtnTextLineHeight?.Desktop}${paginationBtnTextLineHeightUnits?.Desktop};` : ''}

            ${paginationBtnTextColor ? `color: ${paginationBtnTextColor};` : ''}

            ${paginationBtnBorder ? `border: ${paginationBtnBorder};` : ''} 
            ${paginationBtnBorderColor ? `border-color: ${paginationBtnBorderColor};` : ''}
            ${paginationBtnDesktopBorderWidth && paginationBtnDesktopBorder?.top ? `border-width: ${paginationBtnDesktopBorderWidth};` : ''}
            ${paginationBtnDesktopBorderRadiusWidth && paginationBtnDesktopBorderRadius?.top? `border-radius: ${paginationBtnDesktopBorderRadiusWidth};` : ''}

            ${paginationBtnNormalBackgroundType === 'gradient' ? `   
                ${paginationBtnNormalCustomGradientSwitcher && paginationBtnNormalCustomGradientInputValue ? `background: ${paginationBtnNormalCustomGradientInputValue};` : `background: ${paginationBtnNormalGradientColor};`}
            `: `
                ${paginationBtnNormalClassicColor ? `background: ${paginationBtnNormalClassicColor};` : ''}
            `}
        }

        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination .fb_pagination_item:hover {
            ${paginationBtnTextHoverColor ? `color: ${paginationBtnTextHoverColor};` : ''}
            ${paginationBtnHoverBackgroundType === 'gradient' ? `    
                ${paginationBtnHoverCustomGradientSwitcher && paginationBtnHoverCustomGradientInputValue ? `background: ${paginationBtnHoverCustomGradientInputValue};` : `background: ${paginationBtnHoverGradientColor};`}
            `: `
                ${paginationBtnHoverClassicColor ? `background: ${paginationBtnHoverClassicColor};` : ''}
            `}
        }

        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination .fb_pagination_item.active { 
            ${paginationActiveBtnTextColor ? `color: ${paginationActiveBtnTextColor};` : ''} 
            ${paginationActiveBtnNormalBackgroundType === 'gradient' ? `      
                ${paginationActiveBtnNormalCustomGradientSwitcher && paginationActiveBtnNormalCustomGradientInputValue ? `background: ${paginationActiveBtnNormalCustomGradientInputValue};` : `background: ${paginationActiveBtnNormalGradientColor};`}
            `: `
                ${paginationActiveBtnNormalClassicColor ? `background: ${paginationActiveBtnNormalClassicColor};` : ''} 
            `}
        }
        .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination .fb_pagination_item.active:hover { 
            ${paginationActiveBtnTextHoverColor ? `color: ${paginationActiveBtnTextHoverColor};` : ''} 
            ${paginationActiveBtnHoverBackgroundType === 'gradient' ? `    
                ${paginationActiveBtnHoverCustomGradientSwitcher && paginationActiveBtnHoverCustomGradientInputValue ? `background: ${paginationActiveBtnHoverCustomGradientInputValue};` : `background: ${paginationActiveBtnHoverGradientColor};`}
            `: `
                ${paginationActiveBtnHoverClassicColor ? `background: ${paginationActiveBtnHoverClassicColor};` : ''} 
            `}
        }


        .${blockID}.fb_post_grid_container.list-layout {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: ${listRowGap?.Desktop}${listGapUnits?.Desktop}; 
        }
        .${blockID}.fb_post_grid_container.list-layout .fb_post_grid_wrapper {
            display: flex;
            width: 100% !important;
            height: 100% !important;
            overflow: hidden;
            text-decoration: none;
        }
        .${blockID}.fb_post_grid_container.list-layout .fb_post_grid_wrapper .fb_post_grid_image_wrapper {
            margin-right: ${listImageSpacing?.Desktop}${listGapUnits?.Desktop};
            max-width: 50%;
            height: fit-content;
            overflow: hidden;
            display: inline-block;
            position: relative;
        }

        .${blockID}.fb_post_grid_container.list-layout .fb_post_grid_wrapper .fb_post_grid_image_wrapper img {
            max-width: 100% ;
            object-fit: cover;
        }
        .${blockID}.fb_post_grid_container.list-layout .fb_post_grid_content_wrapper {
            flex: 1;
            align-self: center;
            display: block;
            text-align: left;
        }
        .${blockID} .loading.post {
            display: grid;
            grid-template-columns: repeat(${gridColumnsPerSection?.Desktop}, 1fr);
            row-gap: ${gridRowGap?.Desktop}${gridGapUnits?.Desktop}; 
            column-gap: ${gridColumnGap?.Desktop}${gridGapUnits?.Desktop};
            width: 100%;
            height: auto;
        }

        .${blockID} .post-card.skeleton .loading:before {
            background: -webkit-gradient(linear, left top, right top, color-stop(8%, ${postGridSkeletonBgColor}), color-stop(30%, ${postGridSkeletonHighlightBgColor}), color-stop(51%, ${postGridSkeletonBgColor}));
            background: -o-linear-gradient(to right, ${postGridSkeletonBgColor} 8%, ${postGridSkeletonHighlightBgColor} 30%, ${postGridSkeletonBgColor} 51%);
            background: linear-gradient(to right, ${postGridSkeletonBgColor} 8%, ${postGridSkeletonHighlightBgColor} 30%, ${postGridSkeletonBgColor} 51%);
        }

        .${blockID}.fb_post_grid_container .fb_post_grid_wrapper {
            ${postGridNormalBackgroundType === 'gradient' ? `  
                ${postGridNormalCustomGradientSwitcher && postGridNormalCustomGradientInputValue ? `background: ${postGridNormalCustomGradientInputValue};` : `background: ${postGridNormalGradientColor};`}
            `: `
                ${postGridNormalClassicColor ? `background: ${postGridNormalClassicColor};` : ''}
            `}
            ${postGridPaddingDesktopWidth && postGridPaddingDesktop?.top ? `padding: ${postGridPaddingDesktopWidth};` : ''}
            ${postGridMarginDesktopWidth && postGridMarginDesktop?.top ? `margin: ${postGridMarginDesktopWidth};` : ''}
            ${postGridBorder ? `border: ${postGridBorder};` : ''}
            ${postGridBorderDesktopWidth && postGridBorderDesktop?.top? `border-width: ${postGridBorderDesktopWidth};` : ''}
            ${postGridBorderRadiusDesktopWidth && postGridBorderRadiusDesktop?.top? `border-radius: ${postGridBorderRadiusDesktopWidth};` : ''}
            ${postGridBorderColor ? `border-color: ${postGridBorderColor};` : ''}
            ${postGridBoxShadowCssValue ? `box-shadow: ${postGridBoxShadowCssValue};` : ''}
            transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        .${blockID}.fb_post_grid_container .fb_post_grid_wrapper:hover {
            ${postGridHoverBackgroundType === 'gradient' ? `  
                ${postGridHoverCustomGradientSwitcher && postGridHoverCustomGradientInputValue ? `background: ${postGridHoverCustomGradientInputValue};` : `background: ${postGridHoverGradientColor};`}
            `: `
                ${postGridHoverClassicColor ? `background: ${postGridHoverClassicColor};` : ''}
            `}
            ${postGridBorderHoverColor ? `border-color: ${postGridBorderHoverColor};` : ''}
            ${postGridBoxShadowHoverCssValue ? `box-shadow: ${postGridBoxShadowHoverCssValue};` : ''}
        }

        .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image a {
            display: flex;
            ${postImageMarginDesktopWidth && postImageMarginDesktop?.top? `margin: ${postImageMarginDesktopWidth};` : ''}
        }
        .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image img {
            ${postImageBorder ? `border: ${postImageBorder};` : ''}
            ${postImageDesktopBorderWidth && postImageDesktopBorder?.top? `border-width: ${postImageDesktopBorderWidth};` : ''}
            ${postImageBorderColor ? `border-color: ${postImageBorderColor};` : ''}
            ${postImageDesktopBorderRadiusWidth && postImageDesktopBorderRadius?.top? `border-radius: ${postImageDesktopBorderRadiusWidth};` : ''}
            ${postImageWidth?.Desktop ? `width: ${postImageWidth?.Desktop}${postImageWidthUnits?.Desktop};` : ''}
            height: clamp(
                ${postImageHeight?.Desktop ? `${postImageHeight?.Desktop - 3}${postImageHeightUnits?.Desktop}` : '18.75rem'}, 
                ${postImageHeight?.Desktop ? `calc(${postImageHeight?.Desktop}${postImageHeightUnits?.Desktop} + 5vw)` : '25vw'}, 
                ${postImageHeight?.Desktop ? `${postImageHeight?.Desktop}${postImageHeightUnits?.Desktop}` : '21.875rem'}
            );
        }

        .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image:hover img {
            ${postImageBorderHoverColor ? `border-color: ${postImageBorderHoverColor};` : ''}
        }

        .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_title {
            ${postTitleMarginDesktopWidth && postTitleMarginDesktop?.top? `margin: ${postTitleMarginDesktopWidth};` : ''}
            ${postTitleColor ? `color: ${postTitleColor};` : ''}

            ${postTitleGlobalTypoSwitcher?.fontFamily === true && postTitleGlobalTypographyData?.fontFamily ? `font-family: ${postTitleGlobalTypographyData?.fontFamily};` : ''}
            ${postTitleGlobalTypoSwitcher?.fontSize === true && postTitleGlobalTypographyData?.fontSize ? `font-size: ${postTitleGlobalTypographyData?.fontSize};` : ''}
            ${postTitleGlobalTypoSwitcher?.fontWeight === true && postTitleGlobalTypographyData?.fontWeight ? `font-weight: ${postTitleGlobalTypographyData?.fontWeight};` : ''}
            ${postTitleGlobalTypoSwitcher?.fontStyle === true && postTitleGlobalTypographyData?.fontStyle ? `font-style: ${postTitleGlobalTypographyData?.fontStyle};` : ''}
            ${postTitleGlobalTypoSwitcher?.textTransform === true && postTitleGlobalTypographyData?.textTransform ? `text-transform: ${postTitleGlobalTypographyData?.textTransform};` : ''}
            ${postTitleGlobalTypoSwitcher?.textDecoration === true && postTitleGlobalTypographyData?.textDecoration ? `text-decoration: ${postTitleGlobalTypographyData?.textDecoration};` : ''}
            ${postTitleGlobalTypoSwitcher?.letterSpacing === true && postTitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${postTitleGlobalTypographyData?.letterSpacing};` : ''}
            ${postTitleGlobalTypoSwitcher?.lineHeight === true && postTitleGlobalTypographyData?.lineHeight ? `line-height: ${postTitleGlobalTypographyData?.lineHeight};` : ''}

            ${postTitleGlobalTypoSwitcher?.fontFamily === false && postTitleFontFamily ? `font-family: ${postTitleFontFamily};` : ''}
            ${postTitleGlobalTypoSwitcher?.fontSize === false && postTitleFontSize?.Desktop ? `font-size: ${postTitleFontSize?.Desktop}${postTitleFontSizeUnits?.Desktop};` : ''}
            ${postTitleGlobalTypoSwitcher?.fontWeight === false && postTitleFontWeight ? `font-weight: ${postTitleFontWeight};` : ''}
            ${postTitleGlobalTypoSwitcher?.fontStyle === false && postTitleFontStyle ? `font-style: ${postTitleFontStyle};` : ''}
            ${postTitleGlobalTypoSwitcher?.textTransform === false && postTitleTextTransform ? `text-transform: ${postTitleTextTransform};` : ''}
            ${postTitleGlobalTypoSwitcher?.textDecoration === false && postTitleTextDecoration ? `text-decoration: ${postTitleTextDecoration};` : ''}
            ${postTitleGlobalTypoSwitcher?.letterSpacing === false && postTitleLetterSpacing?.Desktop ? `letter-spacing: ${postTitleLetterSpacing?.Desktop}${postTitleLetterSpacingUnits?.Desktop};` : ''}
            ${postTitleGlobalTypoSwitcher?.lineHeight === false && postTitleLineHeight?.Desktop ? `line-height: ${postTitleLineHeight?.Desktop}${postTitleLineHeightUnits?.Desktop};` : ''}
        }

        .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_title:hover {
            ${postTitleHoverColor ? `color: ${postTitleHoverColor};` : ''}
        }

        .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content a {
            ${postTitleColor ? `color: ${postTitleColor};` : ''}
            ${postTitleMarginDesktopWidth && postTitleMarginDesktop?.top? `margin: ${postTitleMarginDesktopWidth};` : ''}

            ${postTitleGlobalTypoSwitcher?.fontFamily === true && postTitleGlobalTypographyData?.fontFamily ? `font-family: ${postTitleGlobalTypographyData?.fontFamily};` : ''}
            ${postTitleGlobalTypoSwitcher?.fontSize === true && postTitleGlobalTypographyData?.fontSize ? `font-size: ${postTitleGlobalTypographyData?.fontSize};` : ''}
            ${postTitleGlobalTypoSwitcher?.fontWeight === true && postTitleGlobalTypographyData?.fontWeight ? `font-weight: ${postTitleGlobalTypographyData?.fontWeight};` : ''}
            ${postTitleGlobalTypoSwitcher?.fontStyle === true && postTitleGlobalTypographyData?.fontStyle ? `font-style: ${postTitleGlobalTypographyData?.fontStyle};` : ''}
            ${postTitleGlobalTypoSwitcher?.textTransform === true && postTitleGlobalTypographyData?.textTransform ? `text-transform: ${postTitleGlobalTypographyData?.textTransform};` : ''}
            ${postTitleGlobalTypoSwitcher?.textDecoration === true && postTitleGlobalTypographyData?.textDecoration ? `text-decoration: ${postTitleGlobalTypographyData?.textDecoration};` : ''}
            ${postTitleGlobalTypoSwitcher?.letterSpacing === true && postTitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${postTitleGlobalTypographyData?.letterSpacing};` : ''}
            ${postTitleGlobalTypoSwitcher?.lineHeight === true && postTitleGlobalTypographyData?.lineHeight ? `line-height: ${postTitleGlobalTypographyData?.lineHeight};` : ''}

            ${postTitleGlobalTypoSwitcher?.fontFamily === false && postTitleFontFamily ? `font-family: ${postTitleFontFamily};` : ''}
            ${postTitleGlobalTypoSwitcher?.fontSize === false && postTitleFontSize?.Desktop ? `font-size: ${postTitleFontSize?.Desktop}${postTitleFontSizeUnits?.Desktop};` : ''}
            ${postTitleGlobalTypoSwitcher?.fontWeight === false && postTitleFontWeight ? `font-weight: ${postTitleFontWeight};` : ''}
            ${postTitleGlobalTypoSwitcher?.fontStyle === false && postTitleFontStyle ? `font-style: ${postTitleFontStyle};` : ''}
            ${postTitleGlobalTypoSwitcher?.textTransform === false && postTitleTextTransform ? `text-transform: ${postTitleTextTransform};` : ''}
            ${postTitleGlobalTypoSwitcher?.textDecoration === false && postTitleTextDecoration ? `text-decoration: ${postTitleTextDecoration};` : ''}
            ${postTitleGlobalTypoSwitcher?.letterSpacing === false && postTitleLetterSpacing?.Desktop ? `letter-spacing: ${postTitleLetterSpacing?.Desktop}${postTitleLetterSpacingUnits?.Desktop};` : ''}
            ${postTitleGlobalTypoSwitcher?.lineHeight === false && postTitleLineHeight?.Desktop ? `line-height: ${postTitleLineHeight?.Desktop}${postTitleLineHeightUnits?.Desktop};` : ''}
        }
        .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content a:hover {
            ${postTitleHoverColor ? `color: ${postTitleHoverColor};` : ''}
        }

        .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_desc {
            ${postDescriptionColor ? `color: ${postDescriptionColor};` : ''}

            ${postDescriptionGlobalTypoSwitcher?.fontFamily === true && postDescriptionGlobalTypographyData?.fontFamily ? `font-family: ${postDescriptionGlobalTypographyData?.fontFamily};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.fontSize === true && postDescriptionGlobalTypographyData?.fontSize ? `font-size: ${postDescriptionGlobalTypographyData?.fontSize};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.fontWeight === true && postDescriptionGlobalTypographyData?.fontWeight ? `font-weight: ${postDescriptionGlobalTypographyData?.fontWeight};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.fontStyle === true && postDescriptionGlobalTypographyData?.fontStyle ? `font-style: ${postDescriptionGlobalTypographyData?.fontStyle};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.textTransform === true && postDescriptionGlobalTypographyData?.textTransform ? `text-transform: ${postDescriptionGlobalTypographyData?.textTransform};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.textDecoration === true && postDescriptionGlobalTypographyData?.textDecoration ? `text-decoration: ${postDescriptionGlobalTypographyData?.textDecoration};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.letterSpacing === true && postDescriptionGlobalTypographyData?.letterSpacing ? `letter-spacing: ${postDescriptionGlobalTypographyData?.letterSpacing};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.lineHeight === true && postDescriptionGlobalTypographyData?.lineHeight ? `line-height: ${postDescriptionGlobalTypographyData?.lineHeight};` : ''}

            ${postDescriptionGlobalTypoSwitcher?.fontFamily === false && postDescriptionFontFamily ? `font-family: ${postDescriptionFontFamily};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.fontSize === false && postDescriptionFontSize?.Desktop ? `font-size: ${postDescriptionFontSize?.Desktop}${postDescriptionFontSizeUnits?.Desktop};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.fontWeight === false && postDescriptionFontWeight ? `font-weight: ${postDescriptionFontWeight};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.fontStyle === false && postDescriptionFontStyle ? `font-style: ${postDescriptionFontStyle};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.textTransform === false && postDescriptionTextTransform ? `text-transform: ${postDescriptionTextTransform};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.textDecoration === false && postDescriptionTextDecoration ? `text-decoration: ${postDescriptionTextDecoration};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.letterSpacing === false && postDescriptionLetterSpacing?.Desktop ? `letter-spacing: ${postDescriptionLetterSpacing?.Desktop}${postDescriptionLetterSpacingUnits?.Desktop};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.lineHeight === false && postDescriptionLineHeight?.Desktop ? `line-height: ${postDescriptionLineHeight?.Desktop}${postDescriptionLineHeightUnits?.Desktop};` : ''}
            ${postDescriptionMarginDesktopWidth && postDescriptionMarginDesktop?.top? `margin: ${postDescriptionMarginDesktopWidth};` : ''}
        }
        .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_desc:hover {
            ${postDescriptionHoverColor ? `color: ${postDescriptionHoverColor};` : ''}
        }

        .${blockID}.fb_post_grid_container .fb_post_grid_categories {
            ${postCategoryMarginDesktopWidth && postCategoryMarginDesktop?.top? `margin: ${postCategoryMarginDesktopWidth};` : ''}
            ${postCategoryGap?.Desktop ? `gap: ${postCategoryGap?.Desktop}${postCategoryGapUnits?.Desktop};` : ''}
        }

        .${blockID}.fb_post_grid_container .fb_post_grid_categories a,
        .${blockID}.fb_post_grid_container .fb_post_grid_categories .fb_post_grid_category_name {
            ${postCategoryColor ? `color: ${postCategoryColor};` : ''}
            ${postCategoryBgColor ? `background-color: ${postCategoryBgColor};` : ''}

            ${postCategoryGlobalTypoSwitcher?.fontFamily === true && postCategoryGlobalTypographyData?.fontFamily ? `font-family: ${postCategoryGlobalTypographyData?.fontFamily};` : ''}
            ${postCategoryGlobalTypoSwitcher?.fontSize === true && postCategoryGlobalTypographyData?.fontSize ? `font-size: ${postCategoryGlobalTypographyData?.fontSize};` : ''}
            ${postCategoryGlobalTypoSwitcher?.fontWeight === true && postCategoryGlobalTypographyData?.fontWeight ? `font-weight: ${postCategoryGlobalTypographyData?.fontWeight};` : ''}
            ${postCategoryGlobalTypoSwitcher?.fontStyle === true && postCategoryGlobalTypographyData?.fontStyle ? `font-style: ${postCategoryGlobalTypographyData?.fontStyle};` : ''}
            ${postCategoryGlobalTypoSwitcher?.textTransform === true && postCategoryGlobalTypographyData?.textTransform ? `text-transform: ${postCategoryGlobalTypographyData?.textTransform};` : ''}
            ${postCategoryGlobalTypoSwitcher?.textDecoration === true && postCategoryGlobalTypographyData?.textDecoration ? `text-decoration: ${postCategoryGlobalTypographyData?.textDecoration};` : ''}
            ${postCategoryGlobalTypoSwitcher?.letterSpacing === true && postCategoryGlobalTypographyData?.letterSpacing ? `letter-spacing: ${postCategoryGlobalTypographyData?.letterSpacing};` : ''}
            ${postCategoryGlobalTypoSwitcher?.lineHeight === true && postCategoryGlobalTypographyData?.lineHeight ? `line-height: ${postCategoryGlobalTypographyData?.lineHeight};` : ''}

            ${postCategoryGlobalTypoSwitcher?.fontFamily === false && postCategoryFontFamily ? `font-family: ${postCategoryFontFamily};` : ''}
            ${postCategoryGlobalTypoSwitcher?.fontSize === false && postCategoryFontSize?.Desktop ? `font-size: ${postCategoryFontSize?.Desktop}${postCategoryFontSizeUnits?.Desktop};` : ''}
            ${postCategoryGlobalTypoSwitcher?.fontWeight === false && postCategoryFontWeight ? `font-weight: ${postCategoryFontWeight};` : ''}
            ${postCategoryGlobalTypoSwitcher?.fontStyle === false && postCategoryFontStyle ? `font-style: ${postCategoryFontStyle};` : ''}
            ${postCategoryGlobalTypoSwitcher?.textTransform === false && postCategoryTextTransform ? `text-transform: ${postCategoryTextTransform};` : ''}
            ${postCategoryGlobalTypoSwitcher?.textDecoration === false && postCategoryTextDecoration ? `text-decoration: ${postCategoryTextDecoration};` : ''}
            ${postCategoryGlobalTypoSwitcher?.letterSpacing === false && postCategoryLetterSpacing?.Desktop ? `letter-spacing: ${postCategoryLetterSpacing?.Desktop}${postCategoryLetterSpacingUnits?.Desktop};` : ''}
            ${postCategoryGlobalTypoSwitcher?.lineHeight === false && postCategoryLineHeight?.Desktop ? `line-height: ${postCategoryLineHeight?.Desktop}${postCategoryLineHeightUnits?.Desktop};` : ''}
            ${postCategoryPaddingDesktopWidth && postCategoryPaddingDesktop?.top? `padding: ${postCategoryPaddingDesktopWidth};` : ''}
            ${postCategoryBorder ? `border: ${postCategoryBorder};` : ''}
            ${postCategoryBorderColor ? `border-color: ${postCategoryBorderColor};` : ''}
            ${postCategoryBorderDesktopWidth && postCategoryDesktopBorder?.top? `border-width: ${postCategoryBorderDesktopWidth};` : ''}
            ${postCategoryBorderRadiusDesktopWidth && postCategoryDesktopBorderRadius?.top? `border-radius: ${postCategoryBorderRadiusDesktopWidth};` : ''}
            transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        .${blockID}.fb_post_grid_container .fb_post_grid_categories a:hover,
        .${blockID}.fb_post_grid_container .fb_post_grid_categories .fb_post_grid_category_name:hover {
            ${postCategoryHoverColor ? `color: ${postCategoryHoverColor};` : ''}
            ${postCategoryBgHoverColor ? `background-color: ${postCategoryBgHoverColor};` : ''}
            ${postCategoryBorderHoverColor ? `border-color: ${postCategoryBorderHoverColor};` : ''}
        }


        .${blockID}.fb_post_grid_container .fb_post_grid_tags {
            ${postTagMarginDesktopWidth && postTagMarginDesktop?.top ? `margin: ${postTagMarginDesktopWidth};` : ''}
            ${postTagGap?.Desktop ? `gap: ${postTagGap?.Desktop}${postTagGapUnits?.Desktop};` : ''}
        }

        .${blockID}.fb_post_grid_container .fb_post_grid_tags a,
        .${blockID}.fb_post_grid_container .fb_post_grid_tags .fb_post_grid_tag_name {
            ${postTagColor ? `color: ${postTagColor};` : ''}
            ${postTagBgColor ? `background-color: ${postTagBgColor};` : ''}

            ${postTagGlobalTypoSwitcher?.fontFamily === true && postTagGlobalTypographyData?.fontFamily ? `font-family: ${postTagGlobalTypographyData?.fontFamily};` : ''}
            ${postTagGlobalTypoSwitcher?.fontSize === true && postTagGlobalTypographyData?.fontSize ? `font-size: ${postTagGlobalTypographyData?.fontSize};` : ''}
            ${postTagGlobalTypoSwitcher?.fontWeight === true && postTagGlobalTypographyData?.fontWeight ? `font-weight: ${postTagGlobalTypographyData?.fontWeight};` : ''}
            ${postTagGlobalTypoSwitcher?.fontStyle === true && postTagGlobalTypographyData?.fontStyle ? `font-style: ${postTagGlobalTypographyData?.fontStyle};` : ''}
            ${postTagGlobalTypoSwitcher?.textTransform === true && postTagGlobalTypographyData?.textTransform ? `text-transform: ${postTagGlobalTypographyData?.textTransform};` : ''}
            ${postTagGlobalTypoSwitcher?.textDecoration === true && postTagGlobalTypographyData?.textDecoration ? `text-decoration: ${postTagGlobalTypographyData?.textDecoration};` : ''}
            ${postTagGlobalTypoSwitcher?.letterSpacing === true && postTagGlobalTypographyData?.letterSpacing ? `letter-spacing: ${postTagGlobalTypographyData?.letterSpacing};` : ''}
            ${postTagGlobalTypoSwitcher?.lineHeight === true && postTagGlobalTypographyData?.lineHeight ? `line-height: ${postTagGlobalTypographyData?.lineHeight};` : ''}

            ${postTagGlobalTypoSwitcher?.fontFamily === false && postTagFontFamily ? `font-family: ${postTagFontFamily};` : ''}
            ${postTagGlobalTypoSwitcher?.fontSize === false && postTagFontSize?.Desktop ? `font-size: ${postTagFontSize?.Desktop}${postTagFontSizeUnits?.Desktop};` : ''}
            ${postTagGlobalTypoSwitcher?.fontWeight === false && postTagFontWeight ? `font-weight: ${postTagFontWeight};` : ''}
            ${postTagGlobalTypoSwitcher?.fontStyle === false && postTagFontStyle ? `font-style: ${postTagFontStyle};` : ''}
            ${postTagGlobalTypoSwitcher?.textTransform === false && postTagTextTransform ? `text-transform: ${postTagTextTransform};` : ''}
            ${postTagGlobalTypoSwitcher?.textDecoration === false && postTagTextDecoration ? `text-decoration: ${postTagTextDecoration};` : ''}
            ${postTagGlobalTypoSwitcher?.letterSpacing === false && postTagLetterSpacing?.Desktop ? `letter-spacing: ${postTagLetterSpacing?.Desktop}${postTagLetterSpacingUnits?.Desktop};` : ''}
            ${postTagGlobalTypoSwitcher?.lineHeight === false && postTagLineHeight?.Desktop ? `line-height: ${postTagLineHeight?.Desktop}${postTagLineHeightUnits?.Desktop};` : ''}
            ${postTagPaddingDesktopWidth && postTagPaddingDesktop?.top ? `padding: ${postTagPaddingDesktopWidth};` : ''}
            ${postTagBorder ? `border: ${postTagBorder};` : ''}
            ${postTagBorderColor ? `border-color: ${postTagBorderColor};` : ''}
            ${postTagBorderDesktopWidth && postTagDesktopBorder?.top ? `border-width: ${postTagBorderDesktopWidth};` : ''}
            ${postTagBorderRadiusDesktopWidth && postTagDesktopBorderRadius?.top ? `border-radius: ${postTagBorderRadiusDesktopWidth};` : ''}
            transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        .${blockID}.fb_post_grid_container .fb_post_grid_tags a:hover,
        .${blockID}.fb_post_grid_container .fb_post_grid_tags .fb_post_grid_tag_name:hover {
            ${postTagHoverColor ? `color: ${postTagHoverColor};` : ''}
            ${postTagBgHoverColor ? `background-color: ${postTagBgHoverColor};` : ''}
            ${postTagBorderHoverColor ? `border-color: ${postTagBorderHoverColor};` : ''}
        }

        .${blockID}.fb_post_grid_container .fb_post_grid_author {
            ${postAuthorMarginDesktopWidth && postAuthorMarginDesktop?.top ? `margin: ${postAuthorMarginDesktopWidth};` : ''}
        }
        .${blockID} .fb_post_grid_author_wrapper {
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }

        .${blockID}.fb_post_grid_container .fb_post_grid_author,
        .${blockID}.fb_post_grid_container .fb_post_grid_author .fb_post_grid_author_info,
        .${blockID}.fb_post_grid_container .fb_post_grid_author .fb_post_grid_author_info_name,
        .${blockID} .fb_post_grid_author_wrapper {
            ${postAuthorGap?.Desktop ? `gap: ${postAuthorGap?.Desktop}${postAuthorGapUnits?.Desktop};` : ''}
        }

        .${blockID}.fb_post_grid_container .fb_post_grid_author .fb_post_grid_author_avatar {
            ${postAuthorAvatarWidth?.Desktop ? `width: ${postAuthorAvatarWidth?.Desktop}${postAuthorAvatarWidthUnits?.Desktop};` : ''}
            ${postAuthorAvatarWidth?.Desktop ? `height: ${postAuthorAvatarWidth?.Desktop}${postAuthorAvatarWidthUnits?.Desktop};` : ''}
            ${postAuthorAvatarBorder ? `border: ${postAuthorAvatarBorder};` : ''}
            ${postAuthorAvatarBorderColor ? `border-color: ${postAuthorAvatarBorderColor};` : ''}
            ${postAuthorAvatarBorderDesktopWidth && postAuthorAvatarDesktopBorder?.top? `border-width: ${postAuthorAvatarBorderDesktopWidth};` : ''}
            ${postAuthorAvatarBorderRadiusDesktopWidth && postAuthorAvatarDesktopBorderRadius?.top ? `border-radius: ${postAuthorAvatarBorderRadiusDesktopWidth};` : ''}
        }
        .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_posted_by,
        .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name,
        .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name a {
            ${postAuthorGlobalTypoSwitcher?.fontFamily === true && postAuthorGlobalTypographyData?.fontFamily ? `font-family: ${postAuthorGlobalTypographyData?.fontFamily};` : ''}
            ${postAuthorGlobalTypoSwitcher?.fontSize === true && postAuthorGlobalTypographyData?.fontSize ? `font-size: ${postAuthorGlobalTypographyData?.fontSize};` : ''}
            ${postAuthorGlobalTypoSwitcher?.fontWeight === true && postAuthorGlobalTypographyData?.fontWeight ? `font-weight: ${postAuthorGlobalTypographyData?.fontWeight};` : ''}
            ${postAuthorGlobalTypoSwitcher?.fontStyle === true && postAuthorGlobalTypographyData?.fontStyle ? `font-style: ${postAuthorGlobalTypographyData?.fontStyle};` : ''}
            ${postAuthorGlobalTypoSwitcher?.textTransform === true && postAuthorGlobalTypographyData?.textTransform ? `text-transform: ${postAuthorGlobalTypographyData?.textTransform};` : ''}
            ${postAuthorGlobalTypoSwitcher?.textDecoration === true && postAuthorGlobalTypographyData?.textDecoration ? `text-decoration: ${postAuthorGlobalTypographyData?.textDecoration};` : ''}
            ${postAuthorGlobalTypoSwitcher?.letterSpacing === true && postAuthorGlobalTypographyData?.letterSpacing ? `letter-spacing: ${postAuthorGlobalTypographyData?.letterSpacing};` : ''}
            ${postAuthorGlobalTypoSwitcher?.lineHeight === true && postAuthorGlobalTypographyData?.lineHeight ? `line-height: ${postAuthorGlobalTypographyData?.lineHeight};` : ''}

            ${postAuthorGlobalTypoSwitcher?.fontFamily === false && postAuthorFontFamily ? `font-family: ${postAuthorFontFamily};` : ''}
            ${postAuthorGlobalTypoSwitcher?.fontSize === false && postAuthorFontSize?.Desktop ? `font-size: ${postAuthorFontSize?.Desktop}${postAuthorFontSizeUnits?.Desktop};` : ''} 
            ${postAuthorGlobalTypoSwitcher?.fontWeight === false && postAuthorFontWeight ? `font-weight: ${postAuthorFontWeight};` : ''}
            ${postAuthorGlobalTypoSwitcher?.fontStyle === false && postAuthorFontStyle ? `font-style: ${postAuthorFontStyle};` : ''}
            ${postAuthorGlobalTypoSwitcher?.textTransform === false && postAuthorTextTransform ? `text-transform: ${postAuthorTextTransform};` : ''}
            ${postAuthorGlobalTypoSwitcher?.textDecoration === false && postAuthorTextDecoration ? `text-decoration: ${postAuthorTextDecoration};` : ''}
            ${postAuthorGlobalTypoSwitcher?.letterSpacing === false && postAuthorLetterSpacing?.Desktop ? `letter-spacing: ${postAuthorLetterSpacing?.Desktop}${postAuthorLetterSpacingUnits?.Desktop};` : ''}
            ${postAuthorGlobalTypoSwitcher?.lineHeight === false && postAuthorLineHeight?.Desktop ? `line-height: ${postAuthorLineHeight?.Desktop}${postAuthorLineHeightUnits?.Desktop};` : ''}
        }

        .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_posted_by {
            ${postAuthorPrefixColorSwitcher ? `color: ${postAuthorPrefixColor};` : ''}
        }

        .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_posted_by:hover {
            ${postAuthorPrefixHoverColor ? `color: ${postAuthorPrefixHoverColor};` : ''}
        }
        .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name,
        .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name a {
            ${postAuthorColor ? `color: ${postAuthorColor};` : ''}
        }
        .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name:hover,
        .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name a:hover {
            ${postAuthorHoverColor ? `color: ${postAuthorHoverColor};` : ''}
        }

        .${blockID}.fb_post_grid_container .fb_post_grid_date {
            ${postDateColor ? `color: ${postDateColor};` : ''}

            ${postDateGlobalTypoSwitcher?.fontFamily === true && postDateGlobalTypographyData?.fontFamily ? `font-family: ${postDateGlobalTypographyData?.fontFamily};` : ''}
            ${postDateGlobalTypoSwitcher?.fontSize === true && postDateGlobalTypographyData?.fontSize ? `font-size: ${postDateGlobalTypographyData?.fontSize};` : ''}
            ${postDateGlobalTypoSwitcher?.fontWeight === true && postDateGlobalTypographyData?.fontWeight ? `font-weight: ${postDateGlobalTypographyData?.fontWeight};` : ''}
            ${postDateGlobalTypoSwitcher?.fontStyle === true && postDateGlobalTypographyData?.fontStyle ? `font-style: ${postDateGlobalTypographyData?.fontStyle};` : ''}
            ${postDateGlobalTypoSwitcher?.textTransform === true && postDateGlobalTypographyData?.textTransform ? `text-transform: ${postDateGlobalTypographyData?.textTransform};` : ''}
            ${postDateGlobalTypoSwitcher?.textDecoration === true && postDateGlobalTypographyData?.textDecoration ? `text-decoration: ${postDateGlobalTypographyData?.textDecoration};` : ''}
            ${postDateGlobalTypoSwitcher?.letterSpacing === true && postDateGlobalTypographyData?.letterSpacing ? `letter-spacing: ${postDateGlobalTypographyData?.letterSpacing};` : ''}
            ${postDateGlobalTypoSwitcher?.lineHeight === true && postDateGlobalTypographyData?.lineHeight ? `line-height: ${postDateGlobalTypographyData?.lineHeight};` : ''}

            ${postDateGlobalTypoSwitcher?.fontFamily === false && postDateFontFamily ? `font-family: ${postDateFontFamily};` : ''}
            ${postDateGlobalTypoSwitcher?.fontSize === false && postDateFontSize?.Desktop ? `font-size: ${postDateFontSize?.Desktop}${postDateFontSizeUnits?.Desktop};` : ''} 
            ${postDateGlobalTypoSwitcher?.fontWeight === false && postDateFontWeight ? `font-weight: ${postDateFontWeight};` : ''}
            ${postDateGlobalTypoSwitcher?.fontStyle === false && postDateFontStyle ? `font-style: ${postDateFontStyle};` : ''}
            ${postDateGlobalTypoSwitcher?.textTransform === false && postDateTextTransform ? `text-transform: ${postDateTextTransform};` : ''}
            ${postDateGlobalTypoSwitcher?.textDecoration === false && postDateTextDecoration ? `text-decoration: ${postDateTextDecoration};` : ''}
            ${postDateGlobalTypoSwitcher?.letterSpacing === false && postDateLetterSpacing?.Desktop ? `letter-spacing: ${postDateLetterSpacing?.Desktop}${postDateLetterSpacingUnits?.Desktop};` : ''}
            ${postDateGlobalTypoSwitcher?.lineHeight === false && postDateLineHeight?.Desktop ? `line-height: ${postDateLineHeight?.Desktop}${postDateLineHeightUnits?.Desktop};` : ''}
        }
        .${blockID}.fb_post_grid_container .fb_post_grid_date:hover {
            ${postDateHoverColor ? `color: ${postDateHoverColor};` : ''}
        }

        .${blockID} .fb_post_grid_read_more_button {
            ${buttonGlobalTypoSwitcher?.fontFamily === true && buttonGlobalTypographyData?.fontFamily ? `font-family: ${buttonGlobalTypographyData?.fontFamily};` : ''}
            ${buttonGlobalTypoSwitcher?.fontSize === true && buttonGlobalTypographyData?.fontSize ? `font-size: ${buttonGlobalTypographyData?.fontSize};` : ''}
            ${buttonGlobalTypoSwitcher?.fontWeight === true && buttonGlobalTypographyData?.fontWeight ? `font-weight: ${buttonGlobalTypographyData?.fontWeight};` : ''}
            ${buttonGlobalTypoSwitcher?.fontStyle === true && buttonGlobalTypographyData?.fontStyle ? `font-style: ${buttonGlobalTypographyData?.fontStyle};` : ''}
            ${buttonGlobalTypoSwitcher?.textTransform === true && buttonGlobalTypographyData?.textTransform ? `text-transform: ${buttonGlobalTypographyData?.textTransform};` : ''}
            ${buttonGlobalTypoSwitcher?.textDecoration === true && buttonGlobalTypographyData?.textDecoration ? `text-decoration: ${buttonGlobalTypographyData?.textDecoration};` : ''}
            ${buttonGlobalTypoSwitcher?.letterSpacing === true && buttonGlobalTypographyData?.letterSpacing ? `letter-spacing: ${buttonGlobalTypographyData?.letterSpacing};` : ''}
            ${buttonGlobalTypoSwitcher?.lineHeight === true && buttonGlobalTypographyData?.lineHeight ? `line-height: ${buttonGlobalTypographyData?.lineHeight};` : ''}
            
            ${buttonGlobalTypoSwitcher?.fontFamily === false && buttonFontFamily && buttonFontFamily !== 'Default' ? `font-family: ${buttonFontFamily};` : ''}
            ${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Desktop && buttonFontSizeUnits?.Desktop ? `font-size: ${buttonFontSize?.Desktop}${buttonFontSizeUnits?.Desktop};` : ''}
            ${buttonGlobalTypoSwitcher?.fontWeight === false && buttonFontWeight ? `font-weight: ${buttonFontWeight};` : ''}
            ${buttonGlobalTypoSwitcher?.fontStyle === false && buttonFontStyle ? `font-style: ${buttonFontStyle};` : ''}
            ${buttonGlobalTypoSwitcher?.textTransform === false && buttonTextTransform ? `text-transform: ${buttonTextTransform};` : ''}
            ${buttonGlobalTypoSwitcher?.textDecoration === false && buttonTextDecoration ? `text-decoration: ${buttonTextDecoration};` : ''}
            ${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Desktop && buttonLetterSpacingUnits?.Desktop ? `letter-spacing: ${buttonLetterSpacing?.Desktop}${buttonLetterSpacingUnits?.Desktop};` : ''}
            ${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Desktop && buttonLineHeightUnits?.Desktop ? `line-height: ${buttonLineHeight?.Desktop}${buttonLineHeightUnits?.Desktop};` : ''}
            
            ${buttonBgColor ? `background-color: ${buttonBgColor};` : ''}
            ${buttonDesktopPaddingStr && buttonDesktopPadding?.top ? `padding: ${buttonDesktopPaddingStr};` : ''}
            ${buttonDesktopMarginStr && buttonDesktopMargin?.top ? `margin: ${buttonDesktopMarginStr};` : ''}
            ${buttonBorder ? `border: ${buttonBorder};` : ''}
            ${buttonDesktopBorderWidthStr && buttonDesktopBorderWidth?.top ? `border-width: ${buttonDesktopBorderWidthStr};` : ''}
            ${buttonDesktopBorderRadiusStr && buttonDesktopBorderRadiusWidth?.top ? `border-radius: ${buttonDesktopBorderRadiusStr};` : ''}
            ${buttonBorderColor ? `border-color: ${buttonBorderColor};` : ''}
            ${buttonBoxShadowCssValue ? `box-shadow: ${buttonBoxShadowCssValue};` : ''} 
            ${buttonWidth?.Desktop && buttonWidthUnits?.Desktop ? `width: ${buttonWidth?.Desktop}${buttonWidthUnits?.Desktop};` : ''}
            ${buttonIconGapSize?.Desktop ? `gap: ${buttonIconGapSize?.Desktop}px;` : ''}
            transition: all 0.3s ease;
        }

        .${blockID} .fb_post_grid_read_more_button:hover {
            ${buttonBorderHoverColor ? `border-color: ${buttonBorderHoverColor};` : ''}
            ${buttonBgHoverColor ? `background-color: ${buttonBgHoverColor};` : ''}
            ${buttonBoxShadowHoverCssValue ? `box-shadow: ${buttonBoxShadowHoverCssValue};` : ''} 
        }

        .${blockID} .fb_post_grid_read_more_button .fb_post_grid_read_more_text {
            ${buttonColor ? `color: ${buttonColor};` : ''}  
        }
        .${blockID} .fb_post_grid_read_more_button:hover .fb_post_grid_read_more_text {
            ${buttonHoverColor ? `color: ${buttonHoverColor};` : ''}
        }
        
        .${blockID} .fb_post_grid_read_more_button .fb_post_grid_read_more_icon_wrapper {
            ${buttonIconBgColor ? `background-color: ${buttonIconBgColor};` : ''}
            ${buttonIconBorder ? `border: ${buttonIconBorder};` : ''}
            ${buttonIconBorderColor ? `border-color: ${buttonIconBorderColor};` : ''}
            ${buttonIconBorderDesktopWidth !== buttonIconBorderDesktop?.top ? `border-width: ${buttonIconBorderDesktop?.top};` : ''}
            ${buttonIconBorderRadiusDesktopWidth !== buttonIconBorderRadiusDesktop?.top ? `border-radius: ${buttonIconBorderRadiusDesktop?.top};` : ''}
        }
        .${blockID} .fb_post_grid_read_more_button:hover .fb_post_grid_read_more_icon_wrapper {
            ${buttonIconBgHoverColor ? `background-color: ${buttonIconBgHoverColor};` : ''}
            ${buttonIconBorderHoverColor ? `border-color: ${buttonIconBorderHoverColor};` : ''}
        }
        .${blockID} .fb_post_grid_read_more_button .fb_post_grid_read_more_icon_wrapper svg {
            ${buttonIconSize?.Desktop && buttonIconSizeUnits?.Desktop ? `width: ${buttonIconSize?.Desktop}${buttonIconSizeUnits?.Desktop};` : ''}
            ${buttonIconSize?.Desktop && buttonIconSizeUnits?.Desktop ? `height: ${buttonIconSize?.Desktop}${buttonIconSizeUnits?.Desktop};` : ''}
            ${buttonIconColor ? `fill: ${buttonIconColor};` : ''}
            transform: rotate(${buttonIconRotate?.Desktop}deg);
            transition: all .3s ease-in-out;
            
        }
        .${blockID} .fb_post_grid_read_more_button:hover .fb_post_grid_read_more_icon_wrapper svg {
            ${buttonIconHoverColor ? `fill: ${buttonIconHoverColor};` : ''}
            transform: rotate(${buttonIconRotateHover?.Desktop}deg); 
        }

        .${blockID} .fb_post_grid_read_more_button .fb_post_grid_read_more_icon_wrapper .fb_post_grid_read_more_icon_image {
            ${buttonIconImageWidth ? `width: ${buttonIconImageWidth?.Desktop}${buttonIconImageWidthUnits?.Desktop};` : ''}
            ${buttonIconImageHeight ? `height: ${buttonIconImageHeight?.Desktop}${buttonIconImageHeightUnits?.Desktop};` : ''}
            object-fit: cover;
            transform: rotate(${buttonImageRotate?.Desktop}deg);
            transition: all .3s ease-in-out;
        }
        .${blockID} .fb_post_grid_read_more_button:hover .fb_post_grid_read_more_icon_wrapper .fb_post_grid_read_more_icon_image {
            transform: rotate(${buttonImageRotateHover?.Desktop}deg);
        }

        .${blockID} .fb_post_grid_style-2 .fb_post_grid_image {
            position: relative;
        }
        
        .${blockID} .fb_post_grid_style-2 .fb_post_grid_categories {
            position: absolute;
            top: 10px;
            left: 10px;
        }
        .${blockID} .fb_post_grid_style-2 .fb_post_grid_tags {
            position: absolute;
            bottom: 10px;
            left: 10px;
        }


        @media only screen and (max-width: 1024px) {

            .${blockID}.fb-post-grid-area {
                ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridHZOrientationType === 'left' && postGridHZLeftOffset?.Tablet !== undefined ? `left: ${postGridHZLeftOffset?.Tablet}${postGridHZLeftOffsetUnits?.Tablet};` : ''}
                ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridHZOrientationType === 'right' && postGridHZRightOffset?.Tablet !== undefined ? `right: ${postGridHZRightOffset?.Tablet}${postGridHZRightOffsetUnits?.Tablet};` : ''}
                ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridVROrientationType === 'top' && postGridVRTopOffset?.Tablet !== undefined ? `top: ${postGridVRTopOffset?.Tablet}${postGridVRTopOffsetUnits?.Tablet};` : ''}
                ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridVROrientationType === 'bottom' && postGridVRBottomOffset?.Tablet !== undefined ? `bottom: ${postGridVRBottomOffset?.Tablet}${postGridVRBottomOffsetUnits?.Tablet};` : ''}
                ${postGlobalZIndex?.Tablet ? `z-index: ${postGlobalZIndex?.Tablet};` : ''}
            }
            .${blockID}.fb_post_grid_container {
                ${postGlobalTabletPaddingWidth && postGlobalPaddingTablet?.top ? `padding: ${postGlobalTabletPaddingWidth};` : ''} 
                ${postGlobalTabletMarginWidth && postGlobalMarginTablet?.top ? `margin: ${postGlobalTabletMarginWidth};` : ''}  
                ${postGlobalBorder ? `border: ${postGlobalBorder};` : ''} 
                ${postGlobalTabletBorderWidth && postGlobalBorderTablet?.top ? `border-width: ${postGlobalTabletBorderWidth};` : ''}
                ${postGlobalTabletBorderRadiusWidth && postGlobalBorderRadiusTablet?.top ? `border-radius: ${postGlobalTabletBorderRadiusWidth};` : ''}
                ${postGlobalBorderColor ? `border-color: ${postGlobalBorderColor};` : ''}
                ${postGlobalBoxShadowCssValue ? `box-shadow: ${postGlobalBoxShadowCssValue};` : ''}
                ${postGlobalNormalBackgroundType === 'gradient' ? `  
                    ${postGlobalNormalCustomGradientSwitcher && postGlobalNormalCustomGradientInputValue ? `background: ${postGlobalNormalCustomGradientInputValue};` : `background: ${postGlobalNormalGradientColor};`}
                `: `
                    ${postGlobalNormalClassicColor ? `background: ${postGlobalNormalClassicColor};` : ''}
                `}
                transition: all .3s ease-in-out;
                position: relative;
            }
            .${blockID}.fb_post_grid_container:hover {
                ${postGlobalHoverBackgroundType === 'gradient' ? `  
                    ${postGlobalHoverCustomGradientSwitcher && postGlobalHoverCustomGradientInputValue ? `background: ${postGlobalHoverCustomGradientInputValue};` : `background: ${postGlobalHoverGradientColor};`}
                `: `
                    ${postGlobalHoverClassicColor ? `background: ${postGlobalHoverClassicColor};` : ''}
                `}
                ${postGlobalBorderHoverColor ? `border-color: ${postGlobalBorderHoverColor};` : ''}
                ${postGlobalBoxShadowHoverCssValue ? `box-shadow: ${postGlobalBoxShadowHoverCssValue};` : ''}
            }
            .${blockID}.fb_post_grid_container.grid-layout {
                display: grid; 
                grid-template-columns: repeat(${gridColumnsPerSection?.Tablet}, 1fr) !important;
                row-gap: ${gridRowGap?.Tablet}${gridGapUnits?.Tablet};  
                column-gap: ${gridColumnGap?.Tablet}${gridGapUnits?.Tablet}; 
            }

            .${blockID}.fb_post_grid_container.grid-layout .fb_load_more_wrapper {
                grid-column: span ${gridColumnsPerSection?.Tablet};
            }

            .${blockID}.fb_post_grid_container.list-layout {
                display: grid; 
                row-gap: ${listRowGap?.Tablet}${listGapUnits?.Tablet};
            }

            .${blockID}.fb_post_grid_container.list-layout .fb_post_grid_wrapper .fb_post_grid_image_wrapper {
                margin-right: ${listImageSpacing?.Tablet}${listGapUnits?.Tablet};  
            }

            .${blockID} .loading.post {
                display: grid;
                grid-template-columns: repeat(${gridColumnsPerSection?.Tablet}, 1fr);
                row-gap: ${gridRowGap?.Tablet}${gridGapUnits?.Tablet};
                column-gap: ${gridColumnGap?.Tablet}${gridGapUnits?.Tablet};
                width: 100%;
                height: auto;
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper {
                ${postGridNormalBackgroundType === 'gradient' ? `  
                    ${postGridNormalCustomGradientSwitcher && postGridNormalCustomGradientInputValue ? `background: ${postGridNormalCustomGradientInputValue};` : `background: ${postGridNormalGradientColor};`}
                `: `
                    ${postGridNormalClassicColor ? `background: ${postGridNormalClassicColor};` : ''}   
                `}
                ${postGridPaddingTabletWidth && postGridPaddingTablet?.top? `padding: ${postGridPaddingTabletWidth};` : ''}
                ${postGridMarginTabletWidth && postGridMarginTablet?.top? `margin: ${postGridMarginTabletWidth};` : ''}
                ${postGridBorder ? `border: ${postGridBorder};` : ''}
                ${postGridBorderTabletWidth && postGridBorderTablet?.top? `border-width: ${postGridBorderTabletWidth};` : ''}
                ${postGridBorderRadiusTabletWidth && postGridBorderRadiusTablet?.top? `border-radius: ${postGridBorderRadiusTabletWidth};` : ''}
                ${postGridBorderColor ? `border-color: ${postGridBorderColor};` : ''}
                ${postGridBoxShadowCssValue ? `box-shadow: ${postGridBoxShadowCssValue};` : ''}
                transition: background-color 0.3s ease, border-color 0.3s ease;
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper:hover {
                ${postGridHoverBackgroundType === 'gradient' ? `  
                    ${postGridHoverCustomGradientSwitcher && postGridHoverCustomGradientInputValue ? `background: ${postGridHoverCustomGradientInputValue};` : `background: ${postGridHoverGradientColor};`}
                `: `
                    ${postGridHoverClassicColor ? `background: ${postGridHoverClassicColor};` : ''}
                `}
                ${postGridBorderHoverColor ? `border-color: ${postGridBorderHoverColor};` : ''}
                ${postGridBoxShadowHoverCssValue ? `box-shadow: ${postGridBoxShadowHoverCssValue};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image a {
                ${postImageMarginTabletWidth && postImageMarginTablet?.top? `margin: ${postImageMarginTabletWidth};` : ''}
            }
            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image img {
                ${postImageBorder ? `border: ${postImageBorder};` : ''}
                ${postImageTabletBorderWidth && postImageTabletBorder?.top? `border-width: ${postImageTabletBorderWidth};` : ''}
                ${postImageBorderColor ? `border-color: ${postImageBorderColor};` : ''}
                ${postImageTabletBorderRadiusWidth && postImageTabletBorderRadius?.top? `border-radius: ${postImageTabletBorderRadiusWidth};` : ''}
                ${postImageWidth?.Tablet ? `width: ${postImageWidth?.Tablet}${postImageWidthUnits?.Tablet};` : ''}

                height: clamp(
                    ${postImageHeight?.Tablet ? `${postImageHeight?.Tablet - 3}${postImageHeightUnits?.Tablet}` : '14rem'}, 
                    ${postImageHeight?.Tablet ? `calc(${postImageHeight?.Tablet}${postImageHeightUnits?.Tablet} + 4vw)` : '20vw'}, 
                    ${postImageHeight?.Tablet ? `${postImageHeight?.Tablet}${postImageHeightUnits?.Tablet}` : '16rem'}
                );
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image:hover img {
                ${postImageBorderHoverColor ? `border-color: ${postImageBorderHoverColor};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_title {
                ${postTitleGlobalTypoSwitcher?.fontSize === false && postTitleFontSize?.Tablet ? `font-size: ${postTitleFontSize?.Tablet}${postTitleFontSizeUnits?.Tablet};` : ''}
                ${postTitleGlobalTypoSwitcher?.letterSpacing === false && postTitleLetterSpacing?.Tablet ? `letter-spacing: ${postTitleLetterSpacing?.Tablet}${postTitleLetterSpacingUnits?.Tablet};` : ''}
                ${postTitleGlobalTypoSwitcher?.lineHeight === false && postTitleLineHeight?.Tablet ? `line-height: ${postTitleLineHeight?.Tablet}${postTitleLineHeightUnits?.Tablet};` : ''}
                ${postTitleMarginTabletWidth && postTitleMarginTablet?.top? `margin: ${postTitleMarginTabletWidth};` : ''}
            }
            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_title:hover {
                ${postTitleHoverColor ? `color: ${postTitleHoverColor};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content a {
                ${postTitleGlobalTypoSwitcher?.fontSize === false && postTitleFontSize?.Tablet ? `font-size: ${postTitleFontSize?.Tablet}${postTitleFontSizeUnits?.Tablet};` : ''}
                ${postTitleGlobalTypoSwitcher?.letterSpacing === false && postTitleLetterSpacing?.Tablet ? `letter-spacing: ${postTitleLetterSpacing?.Tablet}${postTitleLetterSpacingUnits?.Tablet};` : ''}
                ${postTitleGlobalTypoSwitcher?.lineHeight === false && postTitleLineHeight?.Tablet ? `line-height: ${postTitleLineHeight?.Tablet}${postTitleLineHeightUnits?.Tablet};` : ''}
                ${postTitleMarginTabletWidth && postTitleMarginTablet?.top? `margin: ${postTitleMarginTabletWidth};` : ''}
            }
            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content a:hover {
                ${postTitleHoverColor ? `color: ${postTitleHoverColor};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_desc {
                ${postDescriptionGlobalTypoSwitcher?.fontSize === false && postDescriptionFontSize?.Tablet ? `font-size: ${postDescriptionFontSize?.Tablet}${postDescriptionFontSizeUnits?.Tablet};` : ''}
                ${postDescriptionGlobalTypoSwitcher?.letterSpacing === false && postDescriptionLetterSpacing?.Tablet ? `letter-spacing: ${postDescriptionLetterSpacing?.Tablet}${postDescriptionLetterSpacingUnits?.Tablet};` : ''}
                ${postDescriptionGlobalTypoSwitcher?.lineHeight === false && postDescriptionLineHeight?.Tablet ? `line-height: ${postDescriptionLineHeight?.Tablet}${postDescriptionLineHeightUnits?.Tablet};` : ''}
                ${postDescriptionMarginTabletWidth && postDescriptionMarginTablet?.top? `margin: ${postDescriptionMarginTabletWidth};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_categories {
                ${postCategoryMarginTabletWidth && postCategoryMarginTablet?.top? `margin: ${postCategoryMarginTabletWidth};` : ''}  
                ${postCategoryGap?.Tablet ? `gap: ${postCategoryGap?.Tablet}${postCategoryGapUnits?.Tablet};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_categories a {
                ${postCategoryGlobalTypoSwitcher?.fontSize === false && postCategoryFontSize?.Tablet ? `font-size: ${postCategoryFontSize?.Tablet}${postCategoryFontSizeUnits?.Tablet};` : ''}
                ${postCategoryGlobalTypoSwitcher?.letterSpacing === false && postCategoryLetterSpacing?.Tablet ? `letter-spacing: ${postCategoryLetterSpacing?.Tablet}${postCategoryLetterSpacingUnits?.Tablet};` : ''}
                ${postCategoryGlobalTypoSwitcher?.lineHeight === false && postCategoryLineHeight?.Tablet ? `line-height: ${postCategoryLineHeight?.Tablet}${postCategoryLineHeightUnits?.Tablet};` : ''}
                ${postCategoryPaddingTabletWidth && postCategoryPaddingTablet?.top? `padding: ${postCategoryPaddingTabletWidth};` : ''}
                ${postCategoryBorderTabletWidth && postCategoryTabletBorder?.top? `border-width: ${postCategoryBorderTabletWidth};` : ''}
                ${postCategoryBorderRadiusTabletWidth && postCategoryTabletBorderRadius?.top? `border-radius: ${postCategoryBorderRadiusTabletWidth};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_categories a:hover  {
                ${postCategoryHoverColor ? `color: ${postCategoryHoverColor};` : ''}
                ${postCategoryBgHoverColor ? `background-color: ${postCategoryBgHoverColor};` : ''}
                ${postCategoryBorderHoverColor ? `border-color: ${postCategoryBorderHoverColor};` : ''}
            }


            .${blockID}.fb_post_grid_container .fb_post_grid_tags {
                ${postTagMarginTabletWidth && postTagMarginTablet?.top ? `margin: ${postTagMarginTabletWidth};` : ''}
                ${postTagGap?.Tablet ? `gap: ${postTagGap?.Tablet}${postTagGapUnits?.Tablet};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_tags a {
                ${postTagGlobalTypoSwitcher?.fontSize === false && postTagFontSize?.Tablet ? `font-size: ${postTagFontSize?.Tablet}${postTagFontSizeUnits?.Tablet};` : ''}
                ${postTagGlobalTypoSwitcher?.letterSpacing === false && postTagLetterSpacing?.Tablet ? `letter-spacing: ${postTagLetterSpacing?.Tablet}${postTagLetterSpacingUnits?.Tablet};` : ''}
                ${postTagGlobalTypoSwitcher?.lineHeight === false && postTagLineHeight?.Tablet ? `line-height: ${postTagLineHeight?.Tablet}${postTagLineHeightUnits?.Tablet};` : ''}
                ${postTagPaddingTabletWidth && postTagPaddingTablet?.top ? `padding: ${postTagPaddingTabletWidth};` : ''}
                ${postTagBorderTabletWidth && postTagTabletBorder?.top ? `border-width: ${postTagBorderTabletWidth};` : ''}
                ${postTagBorderRadiusTabletWidth && postTagTabletBorderRadius?.top ? `border-radius: ${postTagBorderRadiusTabletWidth};` : ''}
                transition: background-color 0.3s ease, border-color 0.3s ease;
            }


            .${blockID}.fb_post_grid_container .fb_post_grid_author {
                ${postAuthorMarginTabletWidth && postAuthorMarginTablet?.top ? `margin: ${postAuthorMarginTabletWidth};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_author,
            .${blockID}.fb_post_grid_container .fb_post_grid_author .fb_post_grid_author_info,
            .${blockID}.fb_post_grid_container .fb_post_grid_author .fb_post_grid_author_info_name,
            .${blockID} .fb_post_grid_author_wrapper {
                ${postAuthorGap?.Tablet ? `gap: ${postAuthorGap?.Tablet}${postAuthorGapUnits?.Tablet};` : ''} 
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_author .fb_post_grid_author_avatar {
                ${postAuthorAvatarWidth?.Tablet ? `width: ${postAuthorAvatarWidth?.Tablet}${postAuthorAvatarWidthUnits?.Tablet};` : ''}
                ${postAuthorAvatarWidth?.Tablet ? `height: ${postAuthorAvatarWidth?.Tablet}${postAuthorAvatarWidthUnits?.Tablet};` : ''}
                ${postAuthorAvatarBorder ? `border: ${postAuthorAvatarBorder};` : ''}
                ${postAuthorAvatarBorderColor ? `border-color: ${postAuthorAvatarBorderColor};` : ''}
                ${postAuthorAvatarBorderTabletWidth && postAuthorAvatarTabletBorder?.top ? `border-width: ${postAuthorAvatarBorderTabletWidth};` : ''}
                ${postAuthorAvatarBorderRadiusTabletWidth && postAuthorAvatarTabletBorderRadius?.top ? `border-radius: ${postAuthorAvatarBorderRadiusTabletWidth};` : ''}
            }
            .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_posted_by,
            .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name,
            .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name a {
                ${postAuthorGlobalTypoSwitcher?.fontSize === false && postAuthorFontSize?.Tablet ? `font-size: ${postAuthorFontSize?.Tablet}${postAuthorFontSizeUnits?.Tablet};` : ''} 
                ${postAuthorGlobalTypoSwitcher?.letterSpacing === false && postAuthorLetterSpacing?.Tablet ? `letter-spacing: ${postAuthorLetterSpacing?.Tablet}${postAuthorLetterSpacingUnits?.Tablet};` : ''}
                ${postAuthorGlobalTypoSwitcher?.lineHeight === false && postAuthorLineHeight?.Tablet ? `line-height: ${postAuthorLineHeight?.Tablet}${postAuthorLineHeightUnits?.Tablet};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_posted_by {
                ${postAuthorPrefixColorSwitcher ? `color: ${postAuthorPrefixColor};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_posted_by:hover {
                ${postAuthorPrefixHoverColor ? `color: ${postAuthorPrefixHoverColor};` : ''}
            }
            .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name,
            .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name a {
                ${postAuthorColor ? `color: ${postAuthorColor};` : ''}
            }
            .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name:hover,
            .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name a:hover {
                ${postAuthorHoverColor ? `color: ${postAuthorHoverColor};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_date {
                ${postDateGlobalTypoSwitcher?.fontSize === false && postDateFontSize?.Tablet ? `font-size: ${postDateFontSize?.Tablet}${postDateFontSizeUnits?.Tablet};` : ''} 
                ${postDateGlobalTypoSwitcher?.letterSpacing === false && postDateLetterSpacing?.Tablet ? `letter-spacing: ${postDateLetterSpacing?.Tablet}${postDateLetterSpacingUnits?.Tablet};` : ''}
                ${postDateGlobalTypoSwitcher?.lineHeight === false && postDateLineHeight?.Tablet ? `line-height: ${postDateLineHeight?.Tablet}${postDateLineHeightUnits?.Tablet};` : ''}
            }

            .${blockID}.fb_post_grid_container.grid-layout .fb_load_more_wrapper .fb_load_more {
                ${loadMoreTextGlobalTypoSwitcher?.fontSize === false && loadMoreTextFontSize?.Tablet ? `font-size: ${loadMoreTextFontSize?.Tablet}${loadMoreTextFontSizeUnits?.Tablet};` : ''}  
                ${loadMoreTextGlobalTypoSwitcher?.letterSpacing === false && loadMoreTextLetterSpacing?.Tablet ? `letter-spacing: ${loadMoreTextLetterSpacing?.Tablet}${loadMoreTextLetterSpacingUnits?.Tablet};` : ''}
                ${loadMoreTextGlobalTypoSwitcher?.lineHeight === false && loadMoreTextLineHeight?.Tablet ? `line-height: ${loadMoreTextLineHeight?.Tablet}${loadMoreTextLineHeightUnits?.Tablet};` : ''}
                ${loadMoreButtonTabletPaddingWidth && loadMoreButtonTabletPadding?.top ? `padding: ${loadMoreButtonTabletPaddingWidth};` : ''}
                ${loadMoreButtonTabletBorderWidth && loadMoreButtonTabletBorder?.top ? `border-width: ${loadMoreButtonTabletBorderWidth};` : ''}
                ${loadMoreButtonTabletBorderRadiusWidth && loadMoreButtonTabletBorderRadius?.top ? `border-radius: ${loadMoreButtonTabletBorderRadiusWidth};` : ''}
            }

            .${blockID}.fb_post_grid_container.grid-layout .fb_load_more_wrapper .fb_load_more .load_more_button_icon svg {
                ${loadMoreIconSize?.Tablet ? `width: ${loadMoreIconSize?.Tablet}${loadMoreIconSizeUnits?.Tablet};` : ''} 
                ${loadMoreIconSize?.Tablet ? `height: ${loadMoreIconSize?.Tablet}${loadMoreIconSizeUnits?.Tablet};` : ''}
                ${loadMoreIconColor ? `fill: ${loadMoreIconColor};` : ''}
                ${loadMoreIconTabletMarginWidth && loadMoreIconTabletMargin?.top ? `margin: ${loadMoreIconTabletMarginWidth};` : ''}
            }

            .${blockID}.fb_post_grid_container.grid-layout .fb_load_more_wrapper .fb_load_more:hover .load_more_button_icon svg{
                ${loadMoreIconHoverColor ? `fill: ${loadMoreIconHoverColor};` : ''}
            }

            .${blockID} .fb_post_grid_read_more_button {
                ${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Tablet && buttonFontSizeUnits?.Tablet ? `font-size: ${buttonFontSize?.Tablet}${buttonFontSizeUnits?.Tablet};` : ''}
                ${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Tablet && buttonLetterSpacingUnits?.Tablet ? `letter-spacing: ${buttonLetterSpacing?.Tablet}${buttonLetterSpacingUnits?.Tablet};` : ''}
                ${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Tablet && buttonLineHeightUnits?.Tablet ? `line-height: ${buttonLineHeight?.Tablet}${buttonLineHeightUnits?.Tablet};` : ''}
                
                ${buttonTabletPaddingStr && buttonTabPadding?.top ? `padding: ${buttonTabletPaddingStr};` : ''}  
                ${buttonTabletMarginStr && buttonTabMargin?.top ? `margin: ${buttonTabletMarginStr};` : ''} 
                ${buttonTabletBorderWidthStr && buttonTabBorderWidth?.top ? `border-width: ${buttonTabletBorderWidthStr};` : ''}
                ${buttonTabletBorderRadiusStr && buttonTabBorderRadiusWidth?.top ? `border-radius: ${buttonTabletBorderRadiusStr};` : ''}
                ${buttonWidth?.Tablet && buttonWidthUnits?.Tablet ? `width: ${buttonWidth?.Tablet}${buttonWidthUnits?.Tablet};` : ''}
                ${buttonIconGapSize?.Tablet ? `gap: ${buttonIconGapSize?.Tablet}px;` : ''}
            }
            
            .${blockID} .fb_post_grid_read_more_button .fb_post_grid_read_more_icon_wrapper {
                ${buttonIconBorderTabletWidth !== buttonIconBorderTablet?.top ? `border-width: ${buttonIconBorderTablet?.top};` : ''}
                ${buttonIconBorderRadiusTabletWidth !== buttonIconBorderRadiusTablet?.top ? `border-radius: ${buttonIconBorderRadiusTablet?.top};` : ''}
            }

            .${blockID} .fb_post_grid_read_more_button .fb_post_grid_read_more_icon_wrapper svg {
                ${buttonIconSize?.Tablet && buttonIconSizeUnits?.Tablet ? `width: ${buttonIconSize?.Tablet}${buttonIconSizeUnits?.Tablet};` : ''}
                ${buttonIconSize?.Tablet && buttonIconSizeUnits?.Tablet ? `height: ${buttonIconSize?.Tablet}${buttonIconSizeUnits?.Tablet};` : ''}
                transform: rotate(${buttonIconRotate?.Tablet}deg);
            }
            .${blockID} .fb_post_grid_read_more_button:hover .fb_post_grid_read_more_icon_wrapper svg {
                transform: rotate(${buttonIconRotateHover?.Tablet}deg); 
            }

            .${blockID} .fb_post_grid_read_more_button .fb_post_grid_read_more_icon_wrapper .fb_post_grid_read_more_icon_image {
                ${buttonIconImageWidth ? `width: ${buttonIconImageWidth?.Tablet}${buttonIconImageWidthUnits?.Tablet};` : ''}
                ${buttonIconImageHeight ? `height: ${buttonIconImageHeight?.Tablet}${buttonIconImageHeightUnits?.Tablet};` : ''}
                transform: rotate(${buttonImageRotate?.Tablet}deg);
            }
            .${blockID} .fb_post_grid_read_more_button:hover .fb_post_grid_read_more_icon_wrapper .fb_post_grid_read_more_icon_image {
                transform: rotate(${buttonImageRotateHover?.Tablet}deg);
            }

            .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous,
            .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next{
                ${paginationPrevNextWidth?.Tablet ? `width: ${paginationPrevNextWidth?.Tablet}${paginationPrevNextWidthUnits?.Tablet};` : ''} 
                ${paginationPrevNextWidth?.Tablet ? `height: ${paginationPrevNextWidth?.Tablet}${paginationPrevNextWidthUnits?.Tablet};` : ''}

                ${paginationArrowTabletBorderWidth && paginationArrowTabletBorder?.top ? `border-width: ${paginationArrowTabletBorderWidth};` : ''}
                ${paginationArrowTabletBorderRadiusWidth && paginationArrowTabletBorderRadius?.top? `border-radius: ${paginationArrowTabletBorderRadiusWidth};` : ''}

            }

            .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous .fb_pagination_previous_icon_Wrapper .fb_pagination_previous_icon,
            .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next .fb_pagination_next_icon_Wrapper .fb_pagination_next_icon{
                ${paginationArrowSize?.Tablet ? `width: ${paginationArrowSize?.Tablet}${paginationArrowSizeUnits?.Tablet};` : ''}
                ${paginationArrowSize?.Tablet ? `height: ${paginationArrowSize?.Tablet}${paginationArrowSizeUnits?.Tablet};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous .fb_pagination_previous_text,
            .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next .fb_pagination_next_text{
                ${paginationArrowTextGlobalTypoSwitcher?.fontSize === false && paginationArrowTextFontSize?.Tablet ? `font-size: ${paginationArrowTextFontSize?.Tablet}${paginationArrowTextFontSizeUnits?.Tablet};` : ''} 
                ${paginationArrowTextGlobalTypoSwitcher?.letterSpacing === false && paginationArrowTextLetterSpacing?.Tablet ? `letter-spacing: ${paginationArrowTextLetterSpacing?.Tablet}${paginationArrowTextLetterSpacingUnits?.Tablet};` : ''}
                ${paginationArrowTextGlobalTypoSwitcher?.lineHeight === false && paginationArrowTextLineHeight?.Tablet ? `line-height: ${paginationArrowTextLineHeight?.Tablet}${paginationArrowTextLineHeightUnits?.Tablet};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination {
                ${paginationBtnGap?.Tablet ? `gap: ${paginationBtnGap?.Tablet}${paginationBtnGapUnits?.Tablet};` : ''}
            }
                    
            .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination .fb_pagination_item {
                ${paginationBtnSize?.Tablet ? `width: ${paginationBtnSize?.Tablet}${paginationBtnSizeUnits?.Tablet};` : ''}  
                ${paginationBtnSize?.Tablet ? `height: ${paginationBtnSize?.Tablet}${paginationBtnSizeUnits?.Tablet};` : ''}

                ${paginationBtnTextGlobalTypoSwitcher?.fontSize === false && paginationBtnTextFontSize?.Tablet ? `font-size: ${paginationBtnTextFontSize?.Tablet}${paginationBtnTextFontSizeUnits?.Tablet};` : ''} 
                ${paginationBtnTextGlobalTypoSwitcher?.letterSpacing === false && paginationBtnTextLetterSpacing?.Tablet ? `letter-spacing: ${paginationBtnTextLetterSpacing?.Tablet}${paginationBtnTextLetterSpacingUnits?.Tablet};` : ''}
                ${paginationBtnTextGlobalTypoSwitcher?.lineHeight === false && paginationBtnTextLineHeight?.Tablet ? `line-height: ${paginationBtnTextLineHeight?.Tablet}${paginationBtnTextLineHeightUnits?.Tablet};` : ''}

                ${paginationBtnTabletBorderWidth && paginationBtnTabletBorder?.top ? `border-width: ${paginationBtnTabletBorderWidth};` : ''}
                ${paginationBtnTabletBorderRadiusWidth && paginationBtnTabletBorderRadius?.top? `border-radius: ${paginationBtnTabletBorderRadiusWidth};` : ''}
            }

        }

        @media only screen and (max-width: 767px) {


            .${blockID}.fb-post-grid-area {
                ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridHZOrientationType === 'left' && postGridHZLeftOffset?.Mobile !== undefined ? `left: ${postGridHZLeftOffset?.Mobile}${postGridHZLeftOffsetUnits?.Mobile};` : ''}
                ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridHZOrientationType === 'right' && postGridHZRightOffset?.Mobile !== undefined ? `right: ${postGridHZRightOffset?.Mobile}${postGridHZRightOffsetUnits?.Mobile};` : ''}
                ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridVROrientationType === 'top' && postGridVRTopOffset?.Mobile !== undefined ? `top: ${postGridVRTopOffset?.Mobile}${postGridVRTopOffsetUnits?.Mobile};` : ''}
                ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridVROrientationType === 'bottom' && postGridVRBottomOffset?.Mobile !== undefined ? `bottom: ${postGridVRBottomOffset?.Mobile}${postGridVRBottomOffsetUnits?.Mobile};` : ''} 
                ${postGlobalZIndex?.Mobile ? `z-index: ${postGlobalZIndex?.Mobile};` : ''}
            }
            .${blockID}.fb_post_grid_container {
                ${postGlobalMobilePaddingWidth && postGlobalPaddingMobile?.top ? `padding: ${postGlobalMobilePaddingWidth};` : ''} 
                ${postGlobalMobileMarginWidth && postGlobalMarginMobile?.top ? `margin: ${postGlobalMobileMarginWidth};` : ''}  
                ${postGlobalBorder ? `border: ${postGlobalBorder};` : ''} 
                ${postGlobalMobileBorderWidth && postGlobalBorderMobile?.top ? `border-width: ${postGlobalMobileBorderWidth};` : ''}
                ${postGlobalMobileBorderRadiusWidth && postGlobalBorderRadiusMobile?.top ? `border-radius: ${postGlobalMobileBorderRadiusWidth};` : ''}
                ${postGlobalBorderColor ? `border-color: ${postGlobalBorderColor};` : ''}
                ${postGlobalBoxShadowCssValue ? `box-shadow: ${postGlobalBoxShadowCssValue};` : ''}
                ${postGlobalNormalBackgroundType === 'gradient' ? `  
                    ${postGlobalNormalCustomGradientSwitcher && postGlobalNormalCustomGradientInputValue ? `background: ${postGlobalNormalCustomGradientInputValue};` : `background: ${postGlobalNormalGradientColor};`}
                `: `
                    ${postGlobalNormalClassicColor ? `background: ${postGlobalNormalClassicColor};` : ''}
                `}
                transition: all .3s ease-in-out;
                position: relative;
            }
            .${blockID}.fb_post_grid_container:hover {
                ${postGlobalHoverBackgroundType === 'gradient' ? `  
                    ${postGlobalHoverCustomGradientSwitcher && postGlobalHoverCustomGradientInputValue ? `background: ${postGlobalHoverCustomGradientInputValue};` : `background: ${postGlobalHoverGradientColor};`}
                `: `
                    ${postGlobalHoverClassicColor ? `background: ${postGlobalHoverClassicColor};` : ''}
                `}
                ${postGlobalBorderHoverColor ? `border-color: ${postGlobalBorderHoverColor};` : ''}
                ${postGlobalBoxShadowHoverCssValue ? `box-shadow: ${postGlobalBoxShadowHoverCssValue};` : ''}
            }
            .${blockID}.fb_post_grid_container.grid-layout {
                display: grid; 
                grid-template-columns: repeat(${gridColumnsPerSection?.Mobile}, 1fr) !important;
                row-gap: ${gridRowGap?.Mobile}${gridGapUnits?.Mobile};  
                column-gap: ${gridColumnGap?.Mobile}${gridGapUnits?.Mobile}; 
            }

            .${blockID}.fb_post_grid_container.grid-layout .fb_load_more_wrapper {
                grid-column: span ${gridColumnsPerSection?.Mobile};
            }

            .${blockID}.fb_post_grid_container.list-layout .fb_post_grid_wrapper {
                display: block;
            }
            .${blockID}.fb_post_grid_container.list-layout .fb_post_grid_wrapper .fb_post_grid_image_wrapper {
                max-width: 100%;
                margin-right: 0px;
            }

            .${blockID}.fb_post_grid_container.list-layout .fb_post_grid_wrapper .fb_post_grid_image_wrapper {
                margin-right: ${listImageSpacing?.Mobile}${listGapUnits?.Mobile};
                max-width: 100%;
                height: fit-content;
                overflow: hidden;
                display: inline-block;
                position: relative;
            }

            .${blockID}.fb_post_grid_container.list-layout .fb_post_grid_wrapper .fb_post_grid_image_wrapper img {
                max-width: 100% ;
                object-fit: cover;
                display: block;
            }
            .${blockID}.fb_post_grid_container.list-layout .fb_post_grid_content_wrapper {
                flex: 1;
                align-self: center;
                display: block;
                text-align: left;
            }
            .${blockID} .loading.post {
                display: grid;
                grid-template-columns: repeat(${gridColumnsPerSection?.Mobile}, 1fr);
                row-gap: ${gridRowGap?.Mobile}${gridGapUnits?.Mobile}; 
                column-gap: ${gridColumnGap?.Mobile}${gridGapUnits?.Mobile};
                width: 100%;
                height: auto;
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper {
                ${postGridNormalBackgroundType === 'gradient' ? `  
                    ${postGridNormalCustomGradientSwitcher && postGridNormalCustomGradientInputValue ? `background: ${postGridNormalCustomGradientInputValue};` : `background: ${postGridNormalGradientColor};`}
                `: `
                    ${postGridNormalClassicColor ? `background: ${postGridNormalClassicColor};` : ''}
                `}
                ${postGridPaddingMobileWidth && postGridPaddingMobile?.top? `padding: ${postGridPaddingMobileWidth};` : ''}
                ${postGridMarginMobileWidth && postGridMarginMobile?.top? `margin: ${postGridMarginMobileWidth};` : ''}
                ${postGridBorder ? `border: ${postGridBorder};` : ''}
                ${postGridBorderMobileWidth && postGridBorderMobile?.top? `border-width: ${postGridBorderMobileWidth};` : ''}
                ${postGridBorderRadiusMobileWidth && postGridBorderRadiusMobile?.top? `border-radius: ${postGridBorderRadiusMobileWidth};` : ''}
                ${postGridBorderColor ? `border-color: ${postGridBorderColor};` : ''}
                ${postGridBoxShadowCssValue ? `box-shadow: ${postGridBoxShadowCssValue};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper:hover {
                ${postGridHoverBackgroundType === 'gradient' ? `  
                    ${postGridHoverCustomGradientSwitcher && postGridHoverCustomGradientInputValue ? `background: ${postGridHoverCustomGradientInputValue};` : `background: ${postGridHoverGradientColor};`}
                `: `
                    ${postGridHoverClassicColor ? `background: ${postGridHoverClassicColor};` : ''}
                `}
                ${postGridBorderHoverColor ? `border-color: ${postGridBorderHoverColor};` : ''}
                ${postGridBoxShadowHoverCssValue ? `box-shadow: ${postGridBoxShadowHoverCssValue};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image a {
                ${postImageMarginMobileWidth && postImageMarginMobile?.top? `margin: ${postImageMarginMobileWidth};` : ''}
            }
            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image img {
                ${postImageBorder ? `border: ${postImageBorder};` : ''}
                ${postImageMobileBorderWidth && postImageMobileBorder?.top? `border-width: ${postImageMobileBorderWidth};` : ''}
                ${postImageBorderColor ? `border-color: ${postImageBorderColor};` : ''}
                ${postImageMobileBorderRadiusWidth && postImageMobileBorderRadius?.top? `border-radius: ${postImageMobileBorderRadiusWidth};` : ''}
                ${postImageWidth?.Mobile ? `width: ${postImageWidth?.Mobile}${postImageWidthUnits?.Mobile};` : ''}
                height: clamp(
                    ${postImageHeight?.Mobile ? `${postImageHeight?.Mobile - 3}${postImageHeightUnits?.Mobile}` : '10rem'}, 
                    ${postImageHeight?.Mobile ? `calc(${postImageHeight?.Mobile}${postImageHeightUnits?.Mobile} + 3vw)` : '15vw'}, 
                    ${postImageHeight?.Mobile ? `${postImageHeight?.Mobile}${postImageHeightUnits?.Mobile}` : '12rem'}
                );
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image:hover img {
                ${postImageBorderHoverColor ? `border-color: ${postImageBorderHoverColor};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_title {
                ${postTitleGlobalTypoSwitcher?.fontSize === false && postTitleFontSize?.Mobile ? `font-size: ${postTitleFontSize?.Mobile}${postTitleFontSizeUnits?.Mobile};` : ''}
                ${postTitleGlobalTypoSwitcher?.letterSpacing === false && postTitleLetterSpacing?.Mobile ? `letter-spacing: ${postTitleLetterSpacing?.Mobile}${postTitleLetterSpacingUnits?.Mobile};` : ''}
                ${postTitleGlobalTypoSwitcher?.lineHeight === false && postTitleLineHeight?.Mobile ? `line-height: ${postTitleLineHeight?.Mobile}${postTitleLineHeightUnits?.Mobile};` : ''}
                ${postTitleMarginMobileWidth && postTitleMarginMobile?.top? `margin: ${postTitleMarginMobileWidth};` : ''}
            }
            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_title:hover {
                ${postTitleHoverColor ? `color: ${postTitleHoverColor};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content a {
                ${postTitleFontSize?.Mobile ? `font-size: ${postTitleFontSize?.Mobile}${postTitleFontSizeUnits?.Mobile};` : ''}
                ${postTitleLetterSpacing?.Mobile ? `letter-spacing: ${postTitleLetterSpacing?.Mobile}${postTitleLetterSpacingUnits?.Mobile};` : ''}
                ${postTitleLineHeight?.Mobile ? `line-height: ${postTitleLineHeight?.Mobile}${postTitleLineHeightUnits?.Mobile};` : ''}
                ${postTitleMarginMobileWidth && postTitleMarginMobile?.top? `margin: ${postTitleMarginMobileWidth};` : ''}
            }
            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content a:hover {
                ${postTitleHoverColor ? `color: ${postTitleHoverColor};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_desc {
                ${postDescriptionGlobalTypoSwitcher?.fontSize === false && postDescriptionFontSize?.Mobile ? `font-size: ${postDescriptionFontSize?.Mobile}${postDescriptionFontSizeUnits?.Mobile};` : ''}
                ${postDescriptionGlobalTypoSwitcher?.letterSpacing === false && postDescriptionLetterSpacing?.Mobile ? `letter-spacing: ${postDescriptionLetterSpacing?.Mobile}${postDescriptionLetterSpacingUnits?.Mobile};` : ''}
                ${postDescriptionGlobalTypoSwitcher?.lineHeight === false && postDescriptionLineHeight?.Mobile ? `line-height: ${postDescriptionLineHeight?.Mobile}${postDescriptionLineHeightUnits?.Mobile};` : ''}
                ${postDescriptionMarginMobileWidth && postDescriptionMarginMobile?.top? `margin: ${postDescriptionMarginMobileWidth};` : ''}
            }
            .${blockID}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_desc:hover {
                ${postDescriptionHoverColor ? `color: ${postDescriptionHoverColor};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_categories {
                ${postCategoryMarginMobileWidth && postCategoryMarginMobile?.top? `margin: ${postCategoryMarginMobileWidth};` : ''}  
                ${postCategoryGap?.Mobile ? `gap: ${postCategoryGap?.Mobile}${postCategoryGapUnits?.Mobile};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_categories a {
                ${postCategoryGlobalTypoSwitcher?.fontSize === false && postCategoryFontSize?.Mobile ? `font-size: ${postCategoryFontSize?.Mobile}${postCategoryFontSizeUnits?.Mobile};` : ''}
                ${postCategoryGlobalTypoSwitcher?.letterSpacing === false && postCategoryLetterSpacing?.Mobile ? `letter-spacing: ${postCategoryLetterSpacing?.Mobile}${postCategoryLetterSpacingUnits?.Mobile};` : ''}
                ${postCategoryGlobalTypoSwitcher?.lineHeight === false && postCategoryLineHeight?.Mobile ? `line-height: ${postCategoryLineHeight?.Mobile}${postCategoryLineHeightUnits?.Mobile};` : ''}
                ${postCategoryPaddingMobileWidth && postCategoryPaddingMobile?.top? `padding: ${postCategoryPaddingMobileWidth};` : ''}
                ${postCategoryBorderMobileWidth && postCategoryMobileBorder?.top? `border-width: ${postCategoryBorderMobileWidth};` : ''}
                ${postCategoryBorderRadiusMobileWidth && postCategoryMobileBorderRadius?.top? `border-radius: ${postCategoryBorderRadiusMobileWidth};` : ''}
            }


            .${blockID}.fb_post_grid_container .fb_post_grid_tags {
                ${postTagMarginMobileWidth && postTagMarginMobile?.top? `margin: ${postTagMarginMobileWidth};` : ''}
                ${postTagGap?.Mobile ? `gap: ${postTagGap?.Mobile}${postTagGapUnits?.Mobile};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_tags a {
                ${postTagGlobalTypoSwitcher?.fontSize === false && postTagFontSize?.Mobile ? `font-size: ${postTagFontSize?.Mobile}${postTagFontSizeUnits?.Mobile};` : ''}
                ${postTagGlobalTypoSwitcher?.letterSpacing === false && postTagLetterSpacing?.Mobile ? `letter-spacing: ${postTagLetterSpacing?.Mobile}${postTagLetterSpacingUnits?.Mobile};` : ''}
                ${postTagGlobalTypoSwitcher?.lineHeight === false && postTagLineHeight?.Mobile ? `line-height: ${postTagLineHeight?.Mobile}${postTagLineHeightUnits?.Mobile};` : ''}
                ${postTagPaddingMobileWidth && postTagPaddingMobile?.top? `padding: ${postTagPaddingMobileWidth};` : ''}
                ${postTagBorderMobileWidth && postTagMobileBorder?.top? `border-width: ${postTagBorderMobileWidth};` : ''}
                ${postTagBorderRadiusMobileWidth && postTagMobileBorderRadius.top? `border-radius: ${postTagBorderRadiusMobileWidth};` : ''}
                transition: background-color 0.3s ease, border-color 0.3s ease;
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_author {
                ${postAuthorMarginMobileWidth && postAuthorMarginMobile?.top? `margin: ${postAuthorMarginMobileWidth};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_author,
            .${blockID}.fb_post_grid_container .fb_post_grid_author .fb_post_grid_author_info,
            .${blockID}.fb_post_grid_container .fb_post_grid_author .fb_post_grid_author_info_name,
            .${blockID} .fb_post_grid_author_wrapper {
                ${postAuthorGap?.Mobile ? `gap: ${postAuthorGap?.Mobile}${postAuthorGapUnits?.Mobile};` : ''} 
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_author .fb_post_grid_author_avatar {
                ${postAuthorAvatarWidth?.Mobile ? `width: ${postAuthorAvatarWidth?.Mobile}${postAuthorAvatarWidthUnits?.Mobile};` : ''}
                ${postAuthorAvatarWidth?.Mobile ? `height: ${postAuthorAvatarWidth?.Mobile}${postAuthorAvatarWidthUnits?.Mobile};` : ''}
                ${postAuthorAvatarBorder ? `border: ${postAuthorAvatarBorder};` : ''}
                ${postAuthorAvatarBorderColor ? `border-color: ${postAuthorAvatarBorderColor};` : ''}
                ${postAuthorAvatarBorderMobileWidth && postAuthorAvatarMobileBorder?.top ? `border-width: ${postAuthorAvatarBorderMobileWidth};` : ''}
                ${postAuthorAvatarBorderRadiusMobileWidth && postAuthorAvatarMobileBorderRadius?.top? `border-radius: ${postAuthorAvatarBorderRadiusMobileWidth};` : ''}
            }
            .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_posted_by,
            .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name,
            .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name a {
                ${postAuthorGlobalTypoSwitcher?.fontSize === false && postAuthorFontSize?.Mobile ? `font-size: ${postAuthorFontSize?.Mobile}${postAuthorFontSizeUnits?.Mobile};` : ''} 
                ${postAuthorGlobalTypoSwitcher?.letterSpacing === false && postAuthorLetterSpacing?.Mobile ? `letter-spacing: ${postAuthorLetterSpacing?.Mobile}${postAuthorLetterSpacingUnits?.Mobile};` : ''}
                ${postAuthorGlobalTypoSwitcher?.lineHeight === false && postAuthorLineHeight?.Mobile ? `line-height: ${postAuthorLineHeight?.Mobile}${postAuthorLineHeightUnits?.Mobile};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_posted_by {
                ${postAuthorPrefixColorSwitcher ? `color: ${postAuthorPrefixColor};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_posted_by:hover {
                ${postAuthorPrefixHoverColor ? `color: ${postAuthorPrefixHoverColor};` : ''}
            }
            .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name,
            .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name a {
                ${postAuthorColor ? `color: ${postAuthorColor};` : ''}
            }
            .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name:hover,
            .${blockID}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name a:hover {
                ${postAuthorHoverColor ? `color: ${postAuthorHoverColor};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_post_grid_date {
                ${postDateGlobalTypoSwitcher?.fontSize === false && postDateFontSize?.Mobile ? `font-size: ${postDateFontSize?.Mobile}${postDateFontSizeUnits?.Mobile};` : ''} 
                ${postDateGlobalTypoSwitcher?.letterSpacing === false && postDateLetterSpacing?.Mobile ? `letter-spacing: ${postDateLetterSpacing?.Mobile}${postDateLetterSpacingUnits?.Mobile};` : ''}
                ${postDateGlobalTypoSwitcher?.lineHeight === false && postDateLineHeight?.Mobile ? `line-height: ${postDateLineHeight?.Mobile}${postDateLineHeightUnits?.Mobile};` : ''}
            }


            .${blockID}.fb_post_grid_container.grid-layout .fb_load_more_wrapper .fb_load_more {
                ${loadMoreTextGlobalTypoSwitcher?.fontSize === false && loadMoreTextFontSize?.Mobile ? `font-size: ${loadMoreTextFontSize?.Mobile}${loadMoreTextFontSizeUnits?.Mobile};` : ''}  
                ${loadMoreTextGlobalTypoSwitcher?.letterSpacing === false && loadMoreTextLetterSpacing?.Mobile ? `letter-spacing: ${loadMoreTextLetterSpacing?.Mobile}${loadMoreTextLetterSpacingUnits?.Mobile};` : ''}
                ${loadMoreTextGlobalTypoSwitcher?.lineHeight === false && loadMoreTextLineHeight?.Mobile ? `line-height: ${loadMoreTextLineHeight?.Mobile}${loadMoreTextLineHeightUnits?.Mobile};` : ''}
                ${loadMoreButtonMobilePaddingWidth && loadMoreButtonMobilePadding?.top? `padding: ${loadMoreButtonMobilePaddingWidth};` : ''}
                ${loadMoreButtonMobileBorderWidth && loadMoreButtonMobileBorder?.top? `border-width: ${loadMoreButtonMobileBorderWidth};` : ''}
                ${loadMoreButtonMobileBorderRadiusWidth && loadMoreButtonMobileBorderRadius?.top? `border-radius: ${loadMoreButtonMobileBorderRadiusWidth};` : ''}
            }

            .${blockID}.fb_post_grid_container.grid-layout .fb_load_more_wrapper .fb_load_more .load_more_button_icon svg {
                ${loadMoreIconSize?.Mobile ? `width: ${loadMoreIconSize?.Mobile}${loadMoreIconSizeUnits?.Mobile};` : ''}
                ${loadMoreIconSize?.Mobile ? `height: ${loadMoreIconSize?.Mobile}${loadMoreIconSizeUnits?.Mobile};` : ''}
                ${loadMoreIconColor ? `fill: ${loadMoreIconColor};` : ''}
                ${loadMoreIconMobileMarginWidth && loadMoreIconMobileMargin?.top? `margin: ${loadMoreIconMobileMarginWidth};` : ''}
            }

            .${blockID}.fb_post_grid_container.grid-layout .fb_load_more_wrapper .fb_load_more:hover .load_more_button_icon svg{
                ${loadMoreIconHoverColor ? `fill: ${loadMoreIconHoverColor};` : ''}
            }


            .${blockID} .fb_post_grid_read_more_button {
                ${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Mobile && buttonFontSizeUnits?.Mobile ? `font-size: ${buttonFontSize?.Mobile}${buttonFontSizeUnits?.Mobile};` : ''}
                ${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Mobile && buttonLetterSpacingUnits?.Mobile ? `letter-spacing: ${buttonLetterSpacing?.Mobile}${buttonLetterSpacingUnits?.Mobile};` : ''}
                ${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Mobile && buttonLineHeightUnits?.Mobile ? `line-height: ${buttonLineHeight?.Mobile}${buttonLineHeightUnits?.Mobile};` : ''}
                
                ${buttonMobilePaddingStr && buttonMobilePadding?.top ? `padding: ${buttonMobilePaddingStr};` : ''}  
                ${buttonMobileMarginStr && buttonMobileMargin?.top ? `margin: ${buttonMobileMarginStr};` : ''} 
                ${buttonMobileBorderWidthStr && buttonMobileBorderWidth?.top ? `border-width: ${buttonMobileBorderWidthStr};` : ''}
                ${buttonMobileBorderRadiusStr && buttonMobileBorderRadiusWidth?.top ? `border-radius: ${buttonMobileBorderRadiusStr};` : ''}
                ${buttonWidth?.Mobile && buttonWidthUnits?.Mobile ? `width: ${buttonWidth?.Mobile}${buttonWidthUnits?.Mobile};` : ''}
                ${buttonIconGapSize?.Mobile ? `gap: ${buttonIconGapSize?.Mobile}px;` : ''}
            }
            
            .${blockID} .fb_post_grid_read_more_button .fb_post_grid_read_more_icon_wrapper {
                ${buttonIconBorderMobileWidth !== buttonIconBorderMobile?.top ? `border-width: ${buttonIconBorderMobile?.top};` : ''} 
                ${buttonIconBorderRadiusMobileWidth !== buttonIconBorderRadiusMobile?.top ? `border-radius: ${buttonIconBorderRadiusMobile?.top};` : ''}
            }

            .${blockID} .fb_post_grid_read_more_button .fb_post_grid_read_more_icon_wrapper svg {
                ${buttonIconSize?.Mobile && buttonIconSizeUnits?.Mobile ? `width: ${buttonIconSize?.Mobile}${buttonIconSizeUnits?.Mobile};` : ''}
                ${buttonIconSize?.Mobile && buttonIconSizeUnits?.Mobile ? `height: ${buttonIconSize?.Mobile}${buttonIconSizeUnits?.Mobile};` : ''}
                transform: rotate(${buttonIconRotate?.Mobile}deg);
            }
            .${blockID} .fb_post_grid_read_more_button:hover .fb_post_grid_read_more_icon_wrapper svg {
                transform: rotate(${buttonIconRotateHover?.Mobile}deg); 
            }

            .${blockID} .fb_post_grid_read_more_button .fb_post_grid_read_more_icon_wrapper .fb_post_grid_read_more_icon_image {
                ${buttonIconImageWidth ? `width: ${buttonIconImageWidth?.Mobile}${buttonIconImageWidthUnits?.Mobile};` : ''}
                ${buttonIconImageHeight ? `height: ${buttonIconImageHeight?.Mobile}${buttonIconImageHeightUnits?.Mobile};` : ''}
                transform: rotate(${buttonImageRotate?.Mobile}deg);
            }
            .${blockID} .fb_post_grid_read_more_button:hover .fb_post_grid_read_more_icon_wrapper .fb_post_grid_read_more_icon_image {
                transform: rotate(${buttonImageRotateHover?.Mobile}deg);
            }

            .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous,
            .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next{
                ${paginationPrevNextWidth?.Mobile ? `width: ${paginationPrevNextWidth?.Mobile}${paginationPrevNextWidthUnits?.Mobile};` : ''} 
                ${paginationPrevNextWidth?.Mobile ? `height: ${paginationPrevNextWidth?.Mobile}${paginationPrevNextWidthUnits?.Mobile};` : ''}

                ${paginationArrowMobileBorderWidth && paginationArrowMobileBorder?.top ? `border-width: ${paginationArrowMobileBorderWidth};` : ''}
                ${paginationArrowMobileBorderRadiusWidth && paginationArrowMobileBorderRadius?.top? `border-radius: ${paginationArrowMobileBorderRadiusWidth};` : ''}

            }

            .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous .fb_pagination_previous_icon_Wrapper .fb_pagination_previous_icon,
            .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next .fb_pagination_next_icon_Wrapper .fb_pagination_next_icon{
                ${paginationArrowSize?.Mobile ? `width: ${paginationArrowSize?.Mobile}${paginationArrowSizeUnits?.Mobile};` : ''}
                ${paginationArrowSize?.Mobile ? `height: ${paginationArrowSize?.Mobile}${paginationArrowSizeUnits?.Mobile};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous .fb_pagination_previous_text,
            .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next .fb_pagination_next_text{ 
                ${paginationArrowTextGlobalTypoSwitcher?.fontSize === false && paginationArrowTextFontSize?.Mobile ? `font-size: ${paginationArrowTextFontSize?.Mobile}${paginationArrowTextFontSizeUnits?.Mobile};` : ''} 
                ${paginationArrowTextGlobalTypoSwitcher?.letterSpacing === false && paginationArrowTextLetterSpacing?.Mobile ? `letter-spacing: ${paginationArrowTextLetterSpacing?.Mobile}${paginationArrowTextLetterSpacingUnits?.Mobile};` : ''}
                ${paginationArrowTextGlobalTypoSwitcher?.lineHeight === false && paginationArrowTextLineHeight?.Mobile ? `line-height: ${paginationArrowTextLineHeight?.Mobile}${paginationArrowTextLineHeightUnits?.Mobile};` : ''}
            }

            .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination {
                ${paginationBtnGap?.Mobile ? `gap: ${paginationBtnGap?.Mobile}${paginationBtnGapUnits?.Mobile};` : ''}
            }
                    
            .${blockID}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination .fb_pagination_item {
                ${paginationBtnSize?.Mobile ? `width: ${paginationBtnSize?.Mobile}${paginationBtnSizeUnits?.Mobile};` : ''}  
                ${paginationBtnSize?.Mobile ? `height: ${paginationBtnSize?.Mobile}${paginationBtnSizeUnits?.Mobile};` : ''}

                ${paginationBtnTextGlobalTypoSwitcher?.fontSize === false && paginationBtnTextFontSize?.Mobile ? `font-size: ${paginationBtnTextFontSize?.Mobile}${paginationBtnTextFontSizeUnits?.Mobile};` : ''} 
                ${paginationBtnTextGlobalTypoSwitcher?.letterSpacing === false && paginationBtnTextLetterSpacing?.Mobile ? `letter-spacing: ${paginationBtnTextLetterSpacing?.Mobile}${paginationBtnTextLetterSpacingUnits?.Mobile};` : ''}
                ${paginationBtnTextGlobalTypoSwitcher?.lineHeight === false && paginationBtnTextLineHeight?.Mobile ? `line-height: ${paginationBtnTextLineHeight?.Mobile}${paginationBtnTextLineHeightUnits?.Mobile};` : ''}

                ${paginationBtnMobileBorderWidth && paginationBtnMobileBorder?.top ? `border-width: ${paginationBtnMobileBorderWidth};` : ''}
                ${paginationBtnMobileBorderRadiusWidth && paginationBtnMobileBorderRadius?.top? `border-radius: ${paginationBtnMobileBorderRadiusWidth};` : ''}
            }
        }

    `;
 
    const customCss = getCustomCss(postGridGlobalCustomCSS, `.${blockID} `);
    return `${postGridBlockStyle} ${customCss} `.replace(/\s+/g, ' ').trim();
}
export default generatePostGridStyle;