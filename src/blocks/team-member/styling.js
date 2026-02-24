/**
 * Team Member Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateTeamMemberStyle = (attributes) => {

    const {
		blockID,
		blockStyle,
		// deviceType,

		// Photo
		teamMemberImageAlignment,
		teamMemberImageUrl,
		teamMemberImageAlt,
		teamMemberImageID,
		teamMemberImagePosition,
		teamMemberImageAttachment,
		teamMemberImageRepeat,
		teamMemberImageSize,

		teamMemberImageWidthUnits,
		teamMemberImageWidth,

		teamMemberImageHeightUnits,
		teamMemberImageHeight,

		// Team Image Margin
		teamMemberImageMarginUnits,
		teamMemberImageMarginDesktop,
		teamMemberImageMarginTab,
		teamMemberImageMarginMobile,
		teamMemberImageMarginLink,

		// Team Image Border Type
		teamMemberImageBorder,
		teamMemberImageBorderColorSwitcher,
		teamMemberImageBorderColor,
		teamMemberImageBorderHoverColor,
		teamMemberImageBGColor,
		teamMemberImageBGHoverColor,
		teamMemberImageOverlayOpacity,

		//overlay color
		teamMemberImageOverlaySwitcher,
		teamMemberImageBGColorSwitcher,
		teamMemberImageBgType,
		teamMemberImageBgClassicColor,
		teamMemberImageBgGradientColor,
		teamMemberImageBgCustomGradientSwitcher,
		teamMemberImageBgCustomGradientInputValue,
		teamMemberImageBgHoverType,
		teamMemberImageBgHoverClassicColor,
		teamMemberImageBgHoverGradientColor,
		teamMemberImageBgHoverCustomGradientSwitcher,
		teamMemberImageBgHoverCustomGradientInputValue,

		teamMemberImageBorderUnits,
		teamMemberImageBorderDesktop,
		teamMemberImageBorderTab,
		teamMemberImageBorderMobile,
		teamMemberImageBorderLink,

		// Team Image Border Radius
		teamMemberImageBorderRadiusUnits,
		teamMemberImageBorderRadiusDesktop,
		teamMemberImageBorderRadiusTab,
		teamMemberImageBorderRadiusMobile,
		teamMemberImageBorderRadiusLink,

		// Content
		teamMemberContentPosition,
		teamMemberCardAlignment,

		// Badge
		teamMemberBadgeSwitcher,
		teamMemberBadge,
		teamMemberBadgePosition,
		teamMemberBadgeAlignment,

		teamMemberBadgeColorSwitcher,
		teamMemberBadgeColor,
		teamMemberBadgeHoverColor,
		teamMemberBadgeBgColorSwitcher,
		teamMemberBadgeBgColor,
		teamMemberBadgeBgHoverColor,

		teamMemberBadgeTypographyData,
		teamMemberBadgeTypoSwitcher,
		teamMemberBadgeTypoType,
		teamMemberBadgeTypoOption,
		teamMemberBadgeFontFamily,
		teamMemberBadgeFontSize,
		teamMemberBadgeFontSizeUnits,
		teamMemberBadgeFontWeight,
		teamMemberBadgeFontStyle,
		teamMemberBadgeTextTransform,
		teamMemberBadgeTextDecoration,
		teamMemberBadgeLetterSpacing,
		teamMemberBadgeLetterSpacingUnits,
		teamMemberBadgeLineHeight,
		teamMemberBadgeLineHeightUnits,
		teamMemberBadgeLoadGoogleFonts,

		teamMemberBadgeMarginUnits,
		teamMemberBadgeMarginDesktop,
		teamMemberBadgeMarginTablet,
		teamMemberBadgeMarginMobile,
		teamMemberBadgeMarginLink,

		teamMemberBadgePaddingUnits,
		teamMemberBadgePaddingDesktop,
		teamMemberBadgePaddingTablet,
		teamMemberBadgePaddingMobile,
		teamMemberBadgePaddingLink,

		teamMemberBadgeBorder,
		teamMemberBadgeBorderColorSwitcher,
		teamMemberBadgeBorderColor,
		teamMemberBadgeBorderHoverColor,

		teamMemberBadgeBorderUnits,
		teamMemberBadgeBorderDesktop,
		teamMemberBadgeBorderTablet,
		teamMemberBadgeBorderMobile,
		teamMemberBadgeBorderLink,

		teamMemberBadgeBorderRadiusUnits,
		teamMemberBadgeBorderRadiusDesktop,
		teamMemberBadgeBorderRadiusTablet,
		teamMemberBadgeBorderRadiusMobile,
		teamMemberBadgeBorderRadiusLink,		
		



		// Team Name
		teamMemberName,
		teamMemberNameHeadingTag,

		teamMemberNameColorSwitcher,
		teamMemberNameColor,
		teamMemberNameHoverColor,

		teamMemberNameGlobalTypoSwitcher,
		teamMemberNameGlobalTypographyData,
		teamMemberNameGlobalTypoType,
		teamMemberNameGlobalTypoOption,
		teamMemberNameFontFamily,
        teamMemberNameFontSize,
        teamMemberNameFontSizeUnits,
        teamMemberNameFontWeight,
        teamMemberNameFontStyle,
        teamMemberNameTextTransform,
        teamMemberNameTextDecoration,
        teamMemberNameLetterSpacing,
        teamMemberNameLetterSpacingUnits,
        teamMemberNameLineHeight,
        teamMemberNameLineHeightUnits,
		teamMemberNameLoadGoogleFonts,

		// Team Name Margin
		teamMemberNameMarginUnits,
		teamMemberNameMarginDesktop,
		teamMemberNameMarginTab,
		teamMemberNameMarginMobile,
		teamMemberNameMarginLink,

		// Team Designation Typography
		teamMemberDesignation,
		teamMemberDesignationHeadingTag,
		teamMemberDesignationColorSwitcher,
		teamMemberDesignationColor,
		teamMemberDesignationHoverColor,
		teamMemberDesignationLoadGoogleFonts,
		teamMemberDesignationGlobalTypoSwitcher,
		teamMemberDesignationGlobalTypographyData,
		teamMemberDesignationGlobalTypoType,
		teamMemberDesignationGlobalTypoOption,
		teamMemberDesignationFontFamily,
        teamMemberDesignationFontSize,
        teamMemberDesignationFontSizeUnits,
        teamMemberDesignationFontWeight,
        teamMemberDesignationFontStyle,
        teamMemberDesignationTextTransform,
        teamMemberDesignationTextDecoration,
        teamMemberDesignationLetterSpacing,
        teamMemberDesignationLetterSpacingUnits,
        teamMemberDesignationLineHeight,
        teamMemberDesignationLineHeightUnits,

		// Team Designation Margin
		teamMemberDesignationMarginUnits,
		teamMemberDesignationMarginDesktop,
		teamMemberDesignationMarginTab,
		teamMemberDesignationMarginMobile,
		teamMemberDesignationMarginLink,
		

		// Team Desc
		teamMemberDescSwitcher,
		teamMemberDesc,
		teamMemberDescColorSwitcher,
		teamMemberDescColor,
		teamMemberDescHoverColor,
		teamMemberDescLoadGoogleFonts,
		teamMemberDescGlobalTypoSwitcher,
		teamMemberDescGlobalTypographyData,
		teamMemberDescGlobalTypoType,
		teamMemberDescGlobalTypoOption,
		teamMemberDescFontFamily,
        teamMemberDescFontSize,
        teamMemberDescFontSizeUnits,
        teamMemberDescFontWeight,
        teamMemberDescFontStyle,
        teamMemberDescTextTransform,
        teamMemberDescTextDecoration,
        teamMemberDescLetterSpacing,
        teamMemberDescLetterSpacingUnits,
        teamMemberDescLineHeight,
        teamMemberDescLineHeightUnits,

		// Team Desc Margin
		teamMemberDescMarginUnits,
		teamMemberDescMarginDesktop,
		teamMemberDescMarginTab,
		teamMemberDescMarginMobile,
		teamMemberDescMarginLink,

		// Team Content
		teamMemberContentAlignment,

		// Team Content Padding
		teamMemberContentPaddingUnits,
		teamMemberContentPaddingDesktop,
		teamMemberContentPaddingTab,
		teamMemberContentPaddingMobile,
		teamMemberContentPaddingLink,

		// Team Content Margin
		teamMemberContentMarginUnits,
		teamMemberContentMarginDesktop,
		teamMemberContentMarginTab,
		teamMemberContentMarginMobile,
		teamMemberContentMarginLink,

		// Team Content Border
		teamMemberContentBorder,
		teamMemberContentBorderColorSwitcher,
		teamMemberContentBorderColor,
		teamMemberContentBorderHoverColor,
		teamMemberContentBorderUnits,
		teamMemberContentBorderDesktop,
		teamMemberContentBorderTab,
		teamMemberContentBorderMobile,
		teamMemberContentBorderLink,

		// Team Content Border Radius
		teamMemberContentBorderRadiusUnits,
		teamMemberContentBorderRadiusDesktop,
		teamMemberContentBorderRadiusTab,
		teamMemberContentBorderRadiusMobile,
		teamMemberContentBorderRadiusLink,

		// Social Icons
		teamMemberSocialProfileSwitcher,
		teamMemberIconsAlignment,
		teamMemberIconStyleSwitcher,
        teamMemberIconsSize,
        teamMemberIconsSizeUnits,
        teamMemberIconsSpacing,
        teamMemberIconsSpacingUnits,
		teamMemberIconsColorSwitcher,
		teamMemberIconsColor,
		teamMemberIconsHoverColor,
		teamMemberIconsBGColorSwitcher,
		teamMemberIconsBGColor,
		teamMemberIconsBGHoverColor,
		teamMemberIconsBorder,
		teamMemberIconsBorderColor,
		teamMemberIconsBorderHoverColor,
		teamMemberIconsBorderColorSwitcher,
		teamMemberSocialProfileBorder,
		teamMemberSocialProfileBorderColor,
		teamMemberSocialProfileBorderHoverColor,
		teamMemberSocialProfileBorderColorSwitcher,
		teamMemberIconsPaddingUnits,
		teamMemberIconsDesktopPadding,
		teamMemberIconsTabPadding,
		teamMemberIconsMobilePadding,
		teamMemberIconsPaddingLink,
		teamMemberIconsMarginUnits,
		teamMemberIconsDesktopMargin,
		teamMemberIconsTabMargin,
		teamMemberIconsMobileMargin,
		teamMemberIconsMarginLink,
		teamMemberIconsBorderUnits,
		teamMemberIconsDesktopBorderWidth,
		teamMemberIconsTabBorderWidth,
		teamMemberIconsMobileBorderWidth,
		teamMemberIconsBorderLink,
		teamMemberIconsBorderRadiusUnits,
		teamMemberIconsDesktopBorderRadiusWidth,
		teamMemberIconsTabBorderRadiusWidth,
		teamMemberIconsMobileBorderRadiusWidth,
		teamMemberIconsBorderRadiusLink,
		teamMemberSocialProfileBorderUnits,
		teamMemberSocialProfileDesktopBorderWidth,
		teamMemberSocialProfileTabBorderWidth,
		teamMemberSocialProfileMobileBorderWidth,
		teamMemberSocialProfileBorderLink,

		// Team Member
		teamMemberZIndex,
		teamMemberOverflow,
		teamMemberPaddingUnits,
		teamMemberDesktopPadding,
		teamMemberTabPadding,
		teamMemberMobilePadding,
		teamMemberPaddingLink,
		teamMemberMarginUnits,
		teamMemberDesktopMargin,
		teamMemberTabMargin,
		teamMemberMobileMargin,
		teamMemberMarginLink,
		teamMemberBorder,
		teamMemberBorderColor,
		teamMemberBorderHoverColor,
		teamMemberBorderColorSwitcher,
		teamMemberBorderUnits,
		teamMemberDesktopBorderWidth,
		teamMemberTabBorderWidth,
		teamMemberMobileBorderWidth,
		teamMemberBorderLink,
		teamMemberBorderRadiusUnits,
		teamMemberDesktopBorderRadiusWidth,
		teamMemberTabBorderRadiusWidth,
		teamMemberMobileBorderRadiusWidth,
		teamMemberBorderRadiusLink,
		teamMemberDesktopSwitcher,
		teamMemberTabletSwitcher,
		teamMemberMobileSwitcher,

		// Social Profile
		teamMemberSocialItems,
		frontendTeamMemberSocialItems,
		teamMemberSocialType,
		teamMemberSocialPosition,
		teamMemberSocialAlignment,
		socialIconBtnSwitcher,
		teamMemberSocialIconAnimationType,

		// Social Icon Wrapper Btn
		socialIconBtnIcon,
		frontendSocialIconBtnIcon,
		socialIconBtnIconSize,
		socialIconBtnIconSizeUnits,
		socialIconBtnColorSwitcher,
		socialIconBtnColor,
		socialIconBtnHoverColor,
		socialIconBtnBGColorSwitcher,
		socialIconBtnBGColor,
		socialIconBtnBGHoverColor,
		socialIconBtnBorder,
		socialIconBtnBorderColor,
		socialIconBtnBorderHoverColor,
		socialIconBtnBorderColorSwitcher,
		socialIconBtnPaddingUnits,
		socialIconBtnDesktopPadding,
		socialIconBtnTabPadding,
		socialIconBtnMobilePadding,
		socialIconBtnPaddingLink,
		socialIconBtnMarginUnits,
		socialIconBtnDesktopMargin,
		socialIconBtnTabMargin,
		socialIconBtnMobileMargin,
		socialIconBtnMarginLink,
		socialIconBtnBorderUnits,
		socialIconBtnDesktopBorderWidth,
		socialIconBtnTabBorderWidth,
		socialIconBtnMobileBorderWidth,
		socialIconBtnBorderLink,
		socialIconBtnBorderRadiusUnits,
		socialIconBtnDesktopBorderRadiusWidth,
		socialIconBtnTabBorderRadiusWidth,
		socialIconBtnMobileBorderRadiusWidth,
		socialIconBtnBorderRadiusLink,

		// Advance Backgorund
		teamMemberBgColorSwitcher,
		teamMemberBgType,
		teamMemberBgClassicColor,
		teamMemberBgGradientColor,
		teamMemberBgCustomGradientSwitcher,
		teamMemberBgCustomGradientInputValue,
		teamMemberBgImageUrl,
		teamMemberBgImageAlt,
		teamMemberBgImageID,
		teamMemberBgImagePosition,
		teamMemberBgImageAttachment,
		teamMemberBgImageRepeat,
		teamMemberBgImageSize,
		teamMemberBgHoverType,
		teamMemberBgHoverClassicColor,
		teamMemberBgHoverGradientColor,
		teamMemberBgHoverCustomGradientSwitcher,
		teamMemberBgHoverCustomGradientInputValue,
		teamMemberBgHoverImageUrl,
		teamMemberBgHoverImageAlt,
		teamMemberBgHoverImageID,
		teamMemberBgHoverImagePosition,
		teamMemberBgHoverImageAttachment,
		teamMemberBgHoverImageRepeat,
		teamMemberBgHoverImageSize,

		// Content Backgorund
		teamMemberContentBgColorSwitcher,
		teamMemberContentBgType,
		teamMemberContentBgClassicColor,
		teamMemberContentBgGradientColor,
		teamMemberContentBgCustomGradientSwitcher,
		teamMemberContentBgCustomGradientInputValue,
		teamMemberContentBgImageUrl,
		teamMemberContentBgImageAlt,
		teamMemberContentBgImageID,
		teamMemberContentBgImagePosition,
		teamMemberContentBgImageAttachment,
		teamMemberContentBgImageRepeat,
		teamMemberContentBgImageSize,
		teamMemberContentBgHoverType,
		teamMemberContentBgHoverClassicColor,
		teamMemberContentBgHoverGradientColor,
		teamMemberContentBgHoverCustomGradientSwitcher,
		teamMemberContentBgHoverCustomGradientInputValue,
		teamMemberContentBgHoverImageUrl,
		teamMemberContentBgHoverImageAlt,
		teamMemberContentBgHoverImageID,
		teamMemberContentBgHoverImagePosition,
		teamMemberContentBgHoverImageAttachment,
		teamMemberContentBgHoverImageRepeat,
		teamMemberContentBgHoverImageSize,
		
		// Social profile Separator
		teamMemberSocialProfileSeparator,
		teamMemberSocialProfileSeparatorPosition,
		socialProfileSeparatorAlignment,
		socialProfileSeparatorWidth,
		socialProfileSeparatorWidthUnits,
		socialProfileSeparatorHeight,
		socialProfileSeparatorHeightUnits,
		socialProfileSeparatorColorSwitcher,
		socialProfileSeparatorColor,
		socialProfileSeparatorHoverColor,
		socialProfileSeparatorMarginUnits,
		socialProfileSeparatorMarginDesktop,
		socialProfileSeparatorMarginTab,
		socialProfileSeparatorMarginMobile,
		socialProfileSeparatorMarginLink,

		// Position
		teamMemberPositionType,
		teamMemberHZOrientationType,
		teamMemberVROrientationType,
		teamMemberHZLeftOffset,
		teamMemberHZLeftOffsetUnits,
		teamMemberHZRightOffset,
		teamMemberHZRightOffsetUnits,
		teamMemberVRTopOffset,
		teamMemberVRTopOffsetUnits,
		teamMemberVRBottomOffset,
		teamMemberVRBottomOffsetUnits,

		// Global Setting
		teamMemberCustomCSS,
		teamMemberGlobalWraperID,
		teamMemberGlobalWraperClass,

		/** Start Dynamic Description Text */
		dynamicDescriptionEnabled,
		dynamicDescriptionSource,
		dynamicDescriptionPostId,
		dynamicDescriptionPostType,
		dynamicDescriptionPostLabel,
		dynamicDescriptionField,
		dynamicDescriptionFeaturedImageField,

		dynamicDescriptionDateType,
		dynamicDescriptionDateFormat,

		dynamicDescriptionTimeType,
		dynamicDescriptionTimeFormat,

		dynamicDescriptionCommentsZeroText,
		dynamicDescriptionCommentsOneText,
		dynamicDescriptionCommentsManyText,

		dynamicDescriptionTermsTaxonomy,
		dynamicDescriptionTermsSeparator,
		dynamicDescriptionEnableLink,
		dynamicDescriptionLinkSource,
		/** End Dynamic Description Text */

	/** Start Dynamic Team Member Name Text */
		dynamicTeamMemberNameEnabled,
		dynamicTeamMemberNameSource,
		dynamicTeamMemberNamePostId,
		dynamicTeamMemberNamePostType,
		dynamicTeamMemberNamePostLabel,
		dynamicTeamMemberNameField,
		dynamicTeamMemberNameFeaturedImageField,

		dynamicTeamMemberNameDateType,
		dynamicTeamMemberNameDateFormat,

		dynamicTeamMemberNameTimeType,
		dynamicTeamMemberNameTimeFormat,

		dynamicTeamMemberNameCommentsZeroText,
		dynamicTeamMemberNameCommentsOneText,
		dynamicTeamMemberNameCommentsManyText,

		dynamicTeamMemberNameTermsTaxonomy,
		dynamicTeamMemberNameTermsSeparator,
		dynamicTeamMemberNameEnableLink,
		dynamicTeamMemberNameLinkSource,
		/** End Dynamic Team Member Name Text */

		/** Start Dynamic Team Member Designation Text */
		dynamicTeamMemberDesignationEnabled,
		dynamicTeamMemberDesignationSource,
		dynamicTeamMemberDesignationPostId,
		dynamicTeamMemberDesignationPostType,
		dynamicTeamMemberDesignationPostLabel,
		dynamicTeamMemberDesignationField,
		dynamicTeamMemberDesignationFeaturedImageField,

		dynamicTeamMemberDesignationDateType,
		dynamicTeamMemberDesignationDateFormat,

		dynamicTeamMemberDesignationTimeType,
		dynamicTeamMemberDesignationTimeFormat,

		dynamicTeamMemberDesignationCommentsZeroText,
		dynamicTeamMemberDesignationCommentsOneText,
		dynamicTeamMemberDesignationCommentsManyText,

		dynamicTeamMemberDesignationTermsTaxonomy,
		dynamicTeamMemberDesignationTermsSeparator,
		dynamicTeamMemberDesignationEnableLink,
		dynamicTeamMemberDesignationLinkSource,
		/** End Dynamic Team Member Designation Text */

	} = attributes;

    const teamMemberMarginDesktopWidth = `${teamMemberDesktopMargin?.top}${teamMemberMarginUnits?.Desktop} ${teamMemberDesktopMargin?.right}${teamMemberMarginUnits?.Desktop} ${teamMemberDesktopMargin?.bottom}${teamMemberMarginUnits?.Desktop} ${teamMemberDesktopMargin?.left}${teamMemberMarginUnits?.Desktop}`;
	const teamMemberMarginTabletWidth = `${teamMemberTabMargin?.top}${teamMemberMarginUnits?.Tablet} ${teamMemberTabMargin?.right}${teamMemberMarginUnits?.Tablet} ${teamMemberTabMargin?.bottom}${teamMemberMarginUnits?.Tablet} ${teamMemberTabMargin?.left}${teamMemberMarginUnits?.Tablet}`;
	const teamMemberMarginMobileWidth = `${teamMemberMobileMargin?.top}${teamMemberMarginUnits?.Mobile} ${teamMemberMobileMargin?.right}${teamMemberMarginUnits?.Mobile} ${teamMemberMobileMargin?.bottom}${teamMemberMarginUnits?.Mobile} ${teamMemberMobileMargin?.left}${teamMemberMarginUnits?.Mobile}`;

    const teamMemberPaddingDesktopWidth = `${teamMemberDesktopPadding?.top}${teamMemberPaddingUnits?.Desktop} ${teamMemberDesktopPadding?.right}${teamMemberPaddingUnits?.Desktop} ${teamMemberDesktopPadding?.bottom}${teamMemberPaddingUnits?.Desktop} ${teamMemberDesktopPadding?.left}${teamMemberPaddingUnits?.Desktop}`;
	const teamMemberPaddingTabletWidth = `${teamMemberTabPadding?.top}${teamMemberPaddingUnits?.Tablet} ${teamMemberTabPadding?.right}${teamMemberPaddingUnits?.Tablet} ${teamMemberTabPadding?.bottom}${teamMemberPaddingUnits?.Tablet} ${teamMemberTabPadding?.left}${teamMemberPaddingUnits?.Tablet}`;
	const teamMemberPaddingMobileWidth = `${teamMemberMobilePadding?.top}${teamMemberPaddingUnits?.Mobile} ${teamMemberMobilePadding?.right}${teamMemberPaddingUnits?.Mobile} ${teamMemberMobilePadding?.bottom}${teamMemberPaddingUnits?.Mobile} ${teamMemberMobilePadding?.left}${teamMemberPaddingUnits?.Mobile}`;

    const teamMemberBorderDesktopWidth = `${teamMemberDesktopBorderWidth?.top}${teamMemberBorderUnits?.Desktop} ${teamMemberDesktopBorderWidth?.right}${teamMemberBorderUnits?.Desktop} ${teamMemberDesktopBorderWidth?.bottom}${teamMemberBorderUnits?.Desktop} ${teamMemberDesktopBorderWidth?.left}${teamMemberBorderUnits?.Desktop}`;
	const teamMemberBorderTabletWidth = `${teamMemberTabBorderWidth?.top}${teamMemberBorderUnits?.Tablet} ${teamMemberTabBorderWidth?.right}${teamMemberBorderUnits?.Tablet} ${teamMemberTabBorderWidth?.bottom}${teamMemberBorderUnits?.Tablet} ${teamMemberTabBorderWidth?.left}${teamMemberBorderUnits?.Tablet}`;
	const teamMemberBorderMobileWidth = `${teamMemberMobileBorderWidth?.top}${teamMemberBorderUnits?.Mobile} ${teamMemberMobileBorderWidth?.right}${teamMemberBorderUnits?.Mobile} ${teamMemberMobileBorderWidth?.bottom}${teamMemberBorderUnits?.Mobile} ${teamMemberMobileBorderWidth?.left}${teamMemberBorderUnits?.Mobile}`;
	
    const teamMemberBorderRadiusDesktopWidth = `${teamMemberDesktopBorderRadiusWidth?.top}${teamMemberBorderRadiusUnits?.Desktop} ${teamMemberDesktopBorderRadiusWidth?.right}${teamMemberBorderRadiusUnits?.Desktop} ${teamMemberDesktopBorderRadiusWidth?.bottom}${teamMemberBorderRadiusUnits?.Desktop} ${teamMemberDesktopBorderRadiusWidth?.left}${teamMemberBorderRadiusUnits?.Desktop}`;
	const teamMemberBorderRadiusTabletWidth = `${teamMemberTabBorderRadiusWidth?.top}${teamMemberBorderRadiusUnits?.Tablet} ${teamMemberTabBorderRadiusWidth?.right}${teamMemberBorderRadiusUnits?.Tablet} ${teamMemberTabBorderRadiusWidth?.bottom}${teamMemberBorderRadiusUnits?.Tablet} ${teamMemberTabBorderRadiusWidth?.left}${teamMemberBorderRadiusUnits?.Tablet}`;
	const teamMemberBorderRadiusMobileWidth = `${teamMemberMobileBorderRadiusWidth?.top}${teamMemberBorderRadiusUnits?.Mobile} ${teamMemberMobileBorderRadiusWidth?.right}${teamMemberBorderRadiusUnits?.Mobile} ${teamMemberMobileBorderRadiusWidth?.bottom}${teamMemberBorderRadiusUnits?.Mobile} ${teamMemberMobileBorderRadiusWidth?.left}${teamMemberBorderRadiusUnits?.Mobile}`;
	
	{/* Team Member Content Control */}
	const teamMemberContentBorderTypeGetDesktop = `${teamMemberContentBorderDesktop?.top}${teamMemberContentBorderUnits?.Desktop} ${teamMemberContentBorderDesktop?.right}${teamMemberContentBorderUnits?.Desktop} ${teamMemberContentBorderDesktop?.bottom}${teamMemberContentBorderUnits?.Desktop} ${teamMemberContentBorderDesktop?.left}${teamMemberContentBorderUnits?.Desktop}`;
	const teamMemberContentBorderTypeGetTab = `${teamMemberContentBorderTab?.top}${teamMemberContentBorderUnits?.Tablet} ${teamMemberContentBorderTab?.right}${teamMemberContentBorderUnits?.Tablet} ${teamMemberContentBorderTab?.bottom}${teamMemberContentBorderUnits?.Tablet} ${teamMemberContentBorderTab?.left}${teamMemberContentBorderUnits?.Tablet}`;
	const teamMemberContentBorderTypeGetMobile = `${teamMemberContentBorderMobile?.top}${teamMemberContentBorderUnits?.Mobile} ${teamMemberContentBorderMobile?.right}${teamMemberContentBorderUnits?.Mobile} ${teamMemberContentBorderMobile?.bottom}${teamMemberContentBorderUnits?.Mobile} ${teamMemberContentBorderMobile?.left}${teamMemberContentBorderUnits?.Mobile}`;


	const teamMemberContentBorderRadiusGetDesktop = `${teamMemberContentBorderRadiusDesktop?.top}${teamMemberContentBorderRadiusUnits?.Desktop} ${teamMemberContentBorderRadiusDesktop?.right}${teamMemberContentBorderRadiusUnits?.Desktop} ${teamMemberContentBorderRadiusDesktop?.bottom}${teamMemberContentBorderRadiusUnits?.Desktop} ${teamMemberContentBorderRadiusDesktop?.left}${teamMemberContentBorderRadiusUnits?.Desktop}`;
	const teamMemberContentBorderRadiusGetTab = `${teamMemberContentBorderRadiusTab?.top}${teamMemberContentBorderRadiusUnits?.Tablet} ${teamMemberContentBorderRadiusTab?.right}${teamMemberContentBorderRadiusUnits?.Tablet} ${teamMemberContentBorderRadiusTab?.bottom}${teamMemberContentBorderRadiusUnits?.Tablet} ${teamMemberContentBorderRadiusTab?.left}${teamMemberContentBorderRadiusUnits?.Tablet}`;
	const teamMemberContentBorderRadiusGetMobile = `${teamMemberContentBorderRadiusMobile?.top}${teamMemberContentBorderRadiusUnits?.Mobile} ${teamMemberContentBorderRadiusMobile?.right}${teamMemberContentBorderRadiusUnits?.Mobile} ${teamMemberContentBorderRadiusMobile?.bottom}${teamMemberContentBorderRadiusUnits?.Mobile} ${teamMemberContentBorderRadiusMobile?.left}${teamMemberContentBorderRadiusUnits?.Mobile}`;


	const teamMemberContentMarginGetDesktop = `${teamMemberContentMarginDesktop?.top}${teamMemberContentMarginUnits?.Desktop} ${teamMemberContentMarginDesktop?.right}${teamMemberContentMarginUnits?.Desktop} ${teamMemberContentMarginDesktop?.bottom}${teamMemberContentMarginUnits?.Desktop} ${teamMemberContentMarginDesktop?.left}${teamMemberContentMarginUnits?.Desktop}`;
	const teamMemberContentMarginGetTab = `${teamMemberContentMarginTab?.top}${teamMemberContentMarginUnits?.Tablet} ${teamMemberContentMarginTab?.right}${teamMemberContentMarginUnits?.Tablet} ${teamMemberContentMarginTab?.bottom}${teamMemberContentMarginUnits?.Tablet} ${teamMemberContentMarginTab?.left}${teamMemberContentMarginUnits?.Tablet}`;
	const teamMemberContentMarginGetMobile = `${teamMemberContentMarginMobile?.top}${teamMemberContentMarginUnits?.Mobile} ${teamMemberContentMarginMobile?.right}${teamMemberContentMarginUnits?.Mobile} ${teamMemberContentMarginMobile?.bottom}${teamMemberContentMarginUnits?.Mobile} ${teamMemberContentMarginMobile?.left}${teamMemberContentMarginUnits?.Mobile}`;


	const teamMemberContentPaddingGetDesktop = `${teamMemberContentPaddingDesktop?.top}${teamMemberContentPaddingUnits?.Desktop} ${teamMemberContentPaddingDesktop?.right}${teamMemberContentPaddingUnits?.Desktop} ${teamMemberContentPaddingDesktop?.bottom}${teamMemberContentPaddingUnits?.Desktop} ${teamMemberContentPaddingDesktop?.left}${teamMemberContentPaddingUnits?.Desktop}`;
	const teamMemberContentPaddingGetTab = `${teamMemberContentPaddingTab?.top}${teamMemberContentPaddingUnits?.Tablet} ${teamMemberContentPaddingTab?.right}${teamMemberContentPaddingUnits?.Tablet} ${teamMemberContentPaddingTab?.bottom}${teamMemberContentPaddingUnits?.Tablet} ${teamMemberContentPaddingTab?.left}${teamMemberContentPaddingUnits?.Tablet}`;
	const teamMemberContentPaddingGetMobile = `${teamMemberContentPaddingMobile?.top}${teamMemberContentPaddingUnits?.Mobile} ${teamMemberContentPaddingMobile?.right}${teamMemberContentPaddingUnits?.Mobile} ${teamMemberContentPaddingMobile?.bottom}${teamMemberContentPaddingUnits?.Mobile} ${teamMemberContentPaddingMobile?.left}${teamMemberContentPaddingUnits?.Mobile}`;


	{/* Team Member Image Control */}
	const teamMemberImageBorderTypeGetDesktop = `${teamMemberImageBorderDesktop?.top}${teamMemberImageBorderUnits?.Desktop} ${teamMemberImageBorderDesktop?.right}${teamMemberImageBorderUnits?.Desktop} ${teamMemberImageBorderDesktop?.bottom}${teamMemberImageBorderUnits?.Desktop} ${teamMemberImageBorderDesktop?.left}${teamMemberImageBorderUnits?.Desktop}`;
	const teamMemberImageBorderTypeGetTab = `${teamMemberImageBorderTab?.top}${teamMemberImageBorderUnits?.Tablet} ${teamMemberImageBorderTab?.right}${teamMemberImageBorderUnits?.Tablet} ${teamMemberImageBorderTab?.bottom}${teamMemberImageBorderUnits?.Tablet} ${teamMemberImageBorderTab?.left}${teamMemberImageBorderUnits?.Tablet}`;
	const teamMemberImageBorderTypeGetMobile = `${teamMemberImageBorderMobile?.top}${teamMemberImageBorderUnits?.Mobile} ${teamMemberImageBorderMobile?.right}${teamMemberImageBorderUnits?.Mobile} ${teamMemberImageBorderMobile?.bottom}${teamMemberImageBorderUnits?.Mobile} ${teamMemberImageBorderMobile?.left}${teamMemberImageBorderUnits?.Mobile}`;


	const teamMemberImageBorderRadiusGetDesktop = `${teamMemberImageBorderRadiusDesktop?.top}${teamMemberImageBorderRadiusUnits?.Desktop} ${teamMemberImageBorderRadiusDesktop?.right}${teamMemberImageBorderRadiusUnits?.Desktop} ${teamMemberImageBorderRadiusDesktop?.bottom}${teamMemberImageBorderRadiusUnits?.Desktop} ${teamMemberImageBorderRadiusDesktop?.left}${teamMemberImageBorderRadiusUnits?.Desktop}`;
	const teamMemberImageBorderRadiusGetTab = `${teamMemberImageBorderRadiusTab?.top}${teamMemberImageBorderRadiusUnits?.Tablet} ${teamMemberImageBorderRadiusTab?.right}${teamMemberImageBorderRadiusUnits?.Tablet} ${teamMemberImageBorderRadiusTab?.bottom}${teamMemberImageBorderRadiusUnits?.Tablet} ${teamMemberImageBorderRadiusTab?.left}${teamMemberImageBorderRadiusUnits?.Tablet}`;
	const teamMemberImageBorderRadiusGetMobile = `${teamMemberImageBorderRadiusMobile?.top}${teamMemberImageBorderRadiusUnits?.Mobile} ${teamMemberImageBorderRadiusMobile?.right}${teamMemberImageBorderRadiusUnits?.Mobile} ${teamMemberImageBorderRadiusMobile?.bottom}${teamMemberImageBorderRadiusUnits?.Mobile} ${teamMemberImageBorderRadiusMobile?.left}${teamMemberImageBorderRadiusUnits?.Mobile}`;


	const teamMemberImageMarginGetDesktop = `${teamMemberImageMarginDesktop?.top}${teamMemberImageMarginUnits?.Desktop} ${teamMemberImageMarginDesktop?.right}${teamMemberImageMarginUnits?.Desktop} ${teamMemberImageMarginDesktop?.bottom}${teamMemberImageMarginUnits?.Desktop} ${teamMemberImageMarginDesktop?.left}${teamMemberImageMarginUnits?.Desktop}`;
	const teamMemberImageMarginGetTab = `${teamMemberImageMarginTab?.top}${teamMemberImageMarginUnits?.Tablet} ${teamMemberImageMarginTab?.right}${teamMemberImageMarginUnits?.Tablet} ${teamMemberImageMarginTab?.bottom}${teamMemberImageMarginUnits?.Tablet} ${teamMemberImageMarginTab?.left}${teamMemberImageMarginUnits?.Tablet}`;
	const teamMemberImageMarginGetMobile = `${teamMemberImageMarginMobile?.top}${teamMemberImageMarginUnits?.Mobile} ${teamMemberImageMarginMobile?.right}${teamMemberImageMarginUnits?.Mobile} ${teamMemberImageMarginMobile?.bottom}${teamMemberImageMarginUnits?.Mobile} ${teamMemberImageMarginMobile?.left}${teamMemberImageMarginUnits?.Mobile}`;


	{/* Team Member Name Control */}
	const teamMemberNameMarginGetDesktop = `${teamMemberNameMarginDesktop?.top}${teamMemberNameMarginUnits?.Desktop} ${teamMemberNameMarginDesktop?.right}${teamMemberNameMarginUnits?.Desktop} ${teamMemberNameMarginDesktop?.bottom}${teamMemberNameMarginUnits?.Desktop} ${teamMemberNameMarginDesktop?.left}${teamMemberNameMarginUnits?.Desktop}`;
	const teamMemberNameMarginGetTab = `${teamMemberNameMarginTab?.top}${teamMemberNameMarginUnits?.Tablet} ${teamMemberNameMarginTab?.right}${teamMemberNameMarginUnits?.Tablet} ${teamMemberNameMarginTab?.bottom}${teamMemberNameMarginUnits?.Tablet} ${teamMemberNameMarginTab?.left}${teamMemberNameMarginUnits?.Tablet}`;
	const teamMemberNameMarginGetMobile = `${teamMemberNameMarginMobile?.top}${teamMemberNameMarginUnits?.Mobile} ${teamMemberNameMarginMobile?.right}${teamMemberNameMarginUnits?.Mobile} ${teamMemberNameMarginMobile?.bottom}${teamMemberNameMarginUnits?.Mobile} ${teamMemberNameMarginMobile?.left}${teamMemberNameMarginUnits?.Mobile}`;


	{/* Team Member Designation Control */}
	const teamMemberDesignationMarginGetDesktop = `${teamMemberDesignationMarginDesktop?.top}${teamMemberDesignationMarginUnits?.Desktop} ${teamMemberDesignationMarginDesktop?.right}${teamMemberDesignationMarginUnits?.Desktop} ${teamMemberDesignationMarginDesktop?.bottom}${teamMemberDesignationMarginUnits?.Desktop} ${teamMemberDesignationMarginDesktop?.left}${teamMemberDesignationMarginUnits?.Desktop}`;
	const teamMemberDesignationMarginGetTab = `${teamMemberDesignationMarginTab?.top}${teamMemberDesignationMarginUnits?.Tablet} ${teamMemberDesignationMarginTab?.right}${teamMemberDesignationMarginUnits?.Tablet} ${teamMemberDesignationMarginTab?.bottom}${teamMemberDesignationMarginUnits?.Tablet} ${teamMemberDesignationMarginTab?.left}${teamMemberDesignationMarginUnits?.Tablet}`;
	const teamMemberDesignationMarginGetMobile = `${teamMemberDesignationMarginMobile?.top}${teamMemberDesignationMarginUnits?.Mobile} ${teamMemberDesignationMarginMobile?.right}${teamMemberDesignationMarginUnits?.Mobile} ${teamMemberDesignationMarginMobile?.bottom}${teamMemberDesignationMarginUnits?.Mobile} ${teamMemberDesignationMarginMobile?.left}${teamMemberDesignationMarginUnits?.Mobile}`;

    const teamMemberDescMarginGetDesktop = `${teamMemberDescMarginDesktop?.top}${teamMemberDescMarginUnits?.Desktop} ${teamMemberDescMarginDesktop?.right}${teamMemberDescMarginUnits?.Desktop} ${teamMemberDescMarginDesktop?.bottom}${teamMemberDescMarginUnits?.Desktop} ${teamMemberDescMarginDesktop?.left}${teamMemberDescMarginUnits?.Desktop}`;
	const teamMemberDescMarginGetTab = `${teamMemberDescMarginTab?.top}${teamMemberDescMarginUnits?.Tablet} ${teamMemberDescMarginTab?.right}${teamMemberDescMarginUnits?.Tablet} ${teamMemberDescMarginTab?.bottom}${teamMemberDescMarginUnits?.Tablet} ${teamMemberDescMarginTab?.left}${teamMemberDescMarginUnits?.Tablet}`;
	const teamMemberDescMarginGetMobile = `${teamMemberDescMarginMobile?.top}${teamMemberDescMarginUnits?.Mobile} ${teamMemberDescMarginMobile?.right}${teamMemberDescMarginUnits?.Mobile} ${teamMemberDescMarginMobile?.bottom}${teamMemberDescMarginUnits?.Mobile} ${teamMemberDescMarginMobile?.left}${teamMemberDescMarginUnits?.Mobile}`;

    const socialIconBtnDesktopPaddingWidth = `${socialIconBtnDesktopPadding?.top}${socialIconBtnPaddingUnits?.Desktop} ${socialIconBtnDesktopPadding?.right}${socialIconBtnPaddingUnits?.Desktop} ${socialIconBtnDesktopPadding?.bottom}${socialIconBtnPaddingUnits?.Desktop} ${socialIconBtnDesktopPadding?.left}${socialIconBtnPaddingUnits?.Desktop}`;
	const socialIconBtnTabPaddingWidth = `${socialIconBtnTabPadding?.top}${socialIconBtnPaddingUnits?.Tablet} ${socialIconBtnTabPadding?.right}${socialIconBtnPaddingUnits?.Tablet} ${socialIconBtnTabPadding?.bottom}${socialIconBtnPaddingUnits?.Tablet} ${socialIconBtnTabPadding?.left}${socialIconBtnPaddingUnits?.Tablet}`;
	const socialIconBtnMobilePaddingWidth = `${socialIconBtnMobilePadding?.top}${socialIconBtnPaddingUnits?.Mobile} ${socialIconBtnMobilePadding?.right}${socialIconBtnPaddingUnits?.Mobile} ${socialIconBtnMobilePadding?.bottom}${socialIconBtnPaddingUnits?.Mobile} ${socialIconBtnMobilePadding?.left}${socialIconBtnPaddingUnits?.Mobile}`;

    const socialIconBtnDesktopMarginWidth = `${socialIconBtnDesktopMargin?.top}${socialIconBtnMarginUnits?.Desktop} ${socialIconBtnDesktopMargin?.right}${socialIconBtnMarginUnits?.Desktop} ${socialIconBtnDesktopMargin?.bottom}${socialIconBtnMarginUnits?.Desktop} ${socialIconBtnDesktopMargin?.left}${socialIconBtnMarginUnits?.Desktop}`;
	const socialIconBtnTabMarginWidth = `${socialIconBtnTabMargin?.top}${socialIconBtnMarginUnits?.Tablet} ${socialIconBtnTabMargin?.right}${socialIconBtnMarginUnits?.Tablet} ${socialIconBtnTabMargin?.bottom}${socialIconBtnMarginUnits?.Tablet} ${socialIconBtnTabMargin?.left}${socialIconBtnMarginUnits?.Tablet}`;
	const socialIconBtnMobileMarginWidth = `${socialIconBtnMobileMargin?.top}${socialIconBtnMarginUnits?.Mobile} ${socialIconBtnMobileMargin?.right}${socialIconBtnMarginUnits?.Mobile} ${socialIconBtnMobileMargin?.bottom}${socialIconBtnMarginUnits?.Mobile} ${socialIconBtnMobileMargin?.left}${socialIconBtnMarginUnits?.Mobile}`;

    const socialIconBtnDesktopBorder = `${socialIconBtnDesktopBorderWidth?.top}${socialIconBtnBorderUnits?.Desktop} ${socialIconBtnDesktopBorderWidth?.right}${socialIconBtnBorderUnits?.Desktop} ${socialIconBtnDesktopBorderWidth?.bottom}${socialIconBtnBorderUnits?.Desktop} ${socialIconBtnDesktopBorderWidth?.left}${socialIconBtnBorderUnits?.Desktop}`;
	const socialIconBtnTabBorder = `${socialIconBtnTabBorderWidth?.top}${socialIconBtnBorderUnits?.Tablet} ${socialIconBtnTabBorderWidth?.right}${socialIconBtnBorderUnits?.Tablet} ${socialIconBtnTabBorderWidth?.bottom}${socialIconBtnBorderUnits?.Tablet} ${socialIconBtnTabBorderWidth?.left}${socialIconBtnBorderUnits?.Tablet}`;
	const socialIconBtnMobileBorder = `${socialIconBtnMobileBorderWidth?.top}${socialIconBtnBorderUnits?.Mobile} ${socialIconBtnMobileBorderWidth?.right}${socialIconBtnBorderUnits?.Mobile} ${socialIconBtnMobileBorderWidth?.bottom}${socialIconBtnBorderUnits?.Mobile} ${socialIconBtnMobileBorderWidth?.left}${socialIconBtnBorderUnits?.Mobile}`;

    const socialIconBtnDesktopBorderRadius = `${socialIconBtnDesktopBorderRadiusWidth?.top}${socialIconBtnBorderRadiusUnits?.Desktop} ${socialIconBtnDesktopBorderRadiusWidth?.right}${socialIconBtnBorderRadiusUnits?.Desktop} ${socialIconBtnDesktopBorderRadiusWidth?.bottom}${socialIconBtnBorderRadiusUnits?.Desktop} ${socialIconBtnDesktopBorderRadiusWidth?.left}${socialIconBtnBorderRadiusUnits?.Desktop}`;
	const socialIconBtnTabBorderRadius = `${socialIconBtnTabBorderRadiusWidth?.top}${socialIconBtnBorderRadiusUnits?.Tablet} ${socialIconBtnTabBorderRadiusWidth?.right}${socialIconBtnBorderRadiusUnits?.Tablet} ${socialIconBtnTabBorderRadiusWidth?.bottom}${socialIconBtnBorderRadiusUnits?.Tablet} ${socialIconBtnTabBorderRadiusWidth?.left}${socialIconBtnBorderRadiusUnits?.Tablet}`;
	const socialIconBtnMobileBorderRadius = `${socialIconBtnMobileBorderRadiusWidth?.top}${socialIconBtnBorderRadiusUnits?.Mobile} ${socialIconBtnMobileBorderRadiusWidth?.right}${socialIconBtnBorderRadiusUnits?.Mobile} ${socialIconBtnMobileBorderRadiusWidth?.bottom}${socialIconBtnBorderRadiusUnits?.Mobile} ${socialIconBtnMobileBorderRadiusWidth?.left}${socialIconBtnBorderRadiusUnits?.Mobile}`;

    const teamMemberIconsDesktopPaddingWidth = `${teamMemberIconsDesktopPadding?.top}${teamMemberIconsPaddingUnits?.Desktop} ${teamMemberIconsDesktopPadding?.right}${teamMemberIconsPaddingUnits?.Desktop} ${teamMemberIconsDesktopPadding?.bottom}${teamMemberIconsPaddingUnits?.Desktop} ${teamMemberIconsDesktopPadding?.left}${teamMemberIconsPaddingUnits?.Desktop}`;
	const teamMemberIconsTabPaddingWidth = `${teamMemberIconsTabPadding?.top}${teamMemberIconsPaddingUnits?.Tablet} ${teamMemberIconsTabPadding?.right}${teamMemberIconsPaddingUnits?.Tablet} ${teamMemberIconsTabPadding?.bottom}${teamMemberIconsPaddingUnits?.Tablet} ${teamMemberIconsTabPadding?.left}${teamMemberIconsPaddingUnits?.Tablet}`;
	const teamMemberIconsMobilePaddingWidth = `${teamMemberIconsMobilePadding?.top}${teamMemberIconsPaddingUnits?.Mobile} ${teamMemberIconsMobilePadding?.right}${teamMemberIconsPaddingUnits?.Mobile} ${teamMemberIconsMobilePadding?.bottom}${teamMemberIconsPaddingUnits?.Mobile} ${teamMemberIconsMobilePadding?.left}${teamMemberIconsPaddingUnits?.Mobile}`;

    const teamMemberIconsDesktopMarginWidth = `${teamMemberIconsDesktopMargin?.top}${teamMemberIconsMarginUnits?.Desktop} ${teamMemberIconsDesktopMargin?.right}${teamMemberIconsMarginUnits?.Desktop} ${teamMemberIconsDesktopMargin?.bottom}${teamMemberIconsMarginUnits?.Desktop} ${teamMemberIconsDesktopMargin?.left}${teamMemberIconsMarginUnits?.Desktop}`;
	const teamMemberIconsTabMarginWidth = `${teamMemberIconsTabMargin?.top}${teamMemberIconsMarginUnits?.Tablet} ${teamMemberIconsTabMargin?.right}${teamMemberIconsMarginUnits?.Tablet} ${teamMemberIconsTabMargin?.bottom}${teamMemberIconsMarginUnits?.Tablet} ${teamMemberIconsTabMargin?.left}${teamMemberIconsMarginUnits?.Tablet}`;
	const teamMemberIconsMobileMarginWidth = `${teamMemberIconsMobileMargin?.top}${teamMemberIconsMarginUnits?.Mobile} ${teamMemberIconsMobileMargin?.right}${teamMemberIconsMarginUnits?.Mobile} ${teamMemberIconsMobileMargin?.bottom}${teamMemberIconsMarginUnits?.Mobile} ${teamMemberIconsMobileMargin?.left}${teamMemberIconsMarginUnits?.Mobile}`;

    const teamMemberIconsDesktopBorder = `${teamMemberIconsDesktopBorderWidth?.top}${teamMemberIconsBorderUnits?.Desktop} ${teamMemberIconsDesktopBorderWidth?.right}${teamMemberIconsBorderUnits?.Desktop} ${teamMemberIconsDesktopBorderWidth?.bottom}${teamMemberIconsBorderUnits?.Desktop} ${teamMemberIconsDesktopBorderWidth?.left}${teamMemberIconsBorderUnits?.Desktop}`;
	const teamMemberIconsTabBorder = `${teamMemberIconsTabBorderWidth?.top}${teamMemberIconsBorderUnits?.Tablet} ${teamMemberIconsTabBorderWidth?.right}${teamMemberIconsBorderUnits?.Tablet} ${teamMemberIconsTabBorderWidth?.bottom}${teamMemberIconsBorderUnits?.Tablet} ${teamMemberIconsTabBorderWidth?.left}${teamMemberIconsBorderUnits?.Tablet}`;
	const teamMemberIconsMobileBorder = `${teamMemberIconsMobileBorderWidth?.top}${teamMemberIconsBorderUnits?.Mobile} ${teamMemberIconsMobileBorderWidth?.right}${teamMemberIconsBorderUnits?.Mobile} ${teamMemberIconsMobileBorderWidth?.bottom}${teamMemberIconsBorderUnits?.Mobile} ${teamMemberIconsMobileBorderWidth?.left}${teamMemberIconsBorderUnits?.Mobile}`;

    const teamMemberIconsDesktopBorderRadius = `${teamMemberIconsDesktopBorderRadiusWidth?.top}${teamMemberIconsBorderRadiusUnits?.Desktop} ${teamMemberIconsDesktopBorderRadiusWidth?.right}${teamMemberIconsBorderRadiusUnits?.Desktop} ${teamMemberIconsDesktopBorderRadiusWidth?.bottom}${teamMemberIconsBorderRadiusUnits?.Desktop} ${teamMemberIconsDesktopBorderRadiusWidth?.left}${teamMemberIconsBorderRadiusUnits?.Desktop}`;
	const teamMemberIconsTabBorderRadius = `${teamMemberIconsTabBorderRadiusWidth?.top}${teamMemberIconsBorderRadiusUnits?.Tablet} ${teamMemberIconsTabBorderRadiusWidth?.right}${teamMemberIconsBorderRadiusUnits?.Tablet} ${teamMemberIconsTabBorderRadiusWidth?.bottom}${teamMemberIconsBorderRadiusUnits?.Tablet} ${teamMemberIconsTabBorderRadiusWidth?.left}${teamMemberIconsBorderRadiusUnits?.Tablet}`;
	const teamMemberIconsMobileBorderRadius = `${teamMemberIconsMobileBorderRadiusWidth?.top}${teamMemberIconsBorderRadiusUnits?.Mobile} ${teamMemberIconsMobileBorderRadiusWidth?.right}${teamMemberIconsBorderRadiusUnits?.Mobile} ${teamMemberIconsMobileBorderRadiusWidth?.bottom}${teamMemberIconsBorderRadiusUnits?.Mobile} ${teamMemberIconsMobileBorderRadiusWidth?.left}${teamMemberIconsBorderRadiusUnits?.Mobile}`;

    const teamMemberSocialProfileDesktopBorder = `${teamMemberSocialProfileDesktopBorderWidth?.top}${teamMemberSocialProfileBorderUnits?.Desktop} ${teamMemberSocialProfileDesktopBorderWidth?.right}${teamMemberSocialProfileBorderUnits?.Desktop} ${teamMemberSocialProfileDesktopBorderWidth?.bottom}${teamMemberSocialProfileBorderUnits?.Desktop} ${teamMemberSocialProfileDesktopBorderWidth?.left}${teamMemberSocialProfileBorderUnits?.Desktop}`;
	const teamMemberSocialProfileTabBorder = `${teamMemberSocialProfileTabBorderWidth?.top}${teamMemberSocialProfileBorderUnits?.Tablet} ${teamMemberSocialProfileTabBorderWidth?.right}${teamMemberSocialProfileBorderUnits?.Tablet} ${teamMemberSocialProfileTabBorderWidth?.bottom}${teamMemberSocialProfileBorderUnits?.Tablet} ${teamMemberSocialProfileTabBorderWidth?.left}${teamMemberSocialProfileBorderUnits?.Tablet}`;
	const teamMemberSocialProfileMobileBorder = `${teamMemberSocialProfileMobileBorderWidth?.top}${teamMemberSocialProfileBorderUnits?.Mobile} ${teamMemberSocialProfileMobileBorderWidth?.right}${teamMemberSocialProfileBorderUnits?.Mobile} ${teamMemberSocialProfileMobileBorderWidth?.bottom}${teamMemberSocialProfileBorderUnits?.Mobile} ${teamMemberSocialProfileMobileBorderWidth?.left}${teamMemberSocialProfileBorderUnits?.Mobile}`;

    const socialProfileSeparatorMarginDesktopWidth = `${socialProfileSeparatorMarginDesktop?.top}${socialProfileSeparatorMarginUnits?.Desktop} ${socialProfileSeparatorMarginDesktop?.right}${socialProfileSeparatorMarginUnits?.Desktop} ${socialProfileSeparatorMarginDesktop?.bottom}${socialProfileSeparatorMarginUnits?.Desktop} ${socialProfileSeparatorMarginDesktop?.left}${socialProfileSeparatorMarginUnits?.Desktop}`;
	const socialProfileSeparatorMarginTabWidth = `${socialProfileSeparatorMarginTab?.top}${socialProfileSeparatorMarginUnits?.Tablet} ${socialProfileSeparatorMarginTab?.right}${socialProfileSeparatorMarginUnits?.Tablet} ${socialProfileSeparatorMarginTab?.bottom}${socialProfileSeparatorMarginUnits?.Tablet} ${socialProfileSeparatorMarginTab?.left}${socialProfileSeparatorMarginUnits?.Tablet}`;
	const socialProfileSeparatorMarginMobileWidth = `${socialProfileSeparatorMarginMobile?.top}${socialProfileSeparatorMarginUnits?.Mobile} ${socialProfileSeparatorMarginMobile?.right}${socialProfileSeparatorMarginUnits?.Mobile} ${socialProfileSeparatorMarginMobile?.bottom}${socialProfileSeparatorMarginUnits?.Mobile} ${socialProfileSeparatorMarginMobile?.left}${socialProfileSeparatorMarginUnits?.Mobile}`;

    const teamMemberBadgeMarginDesktopWidth = `${teamMemberBadgeMarginDesktop?.top}${teamMemberBadgeMarginUnits?.Desktop} ${teamMemberBadgeMarginDesktop?.right}${teamMemberBadgeMarginUnits?.Desktop} ${teamMemberBadgeMarginDesktop?.bottom}${teamMemberBadgeMarginUnits?.Desktop} ${teamMemberBadgeMarginDesktop?.left}${teamMemberBadgeMarginUnits?.Desktop}`;
	const teamMemberBadgeMarginTabletWidth = `${teamMemberBadgeMarginTablet?.top}${teamMemberBadgeMarginUnits?.Tablet} ${teamMemberBadgeMarginTablet?.right}${teamMemberBadgeMarginUnits?.Tablet} ${teamMemberBadgeMarginTablet?.bottom}${teamMemberBadgeMarginUnits?.Tablet} ${teamMemberBadgeMarginTablet?.left}${teamMemberBadgeMarginUnits?.Tablet}`;
	const teamMemberBadgeMarginMobileWidth = `${teamMemberBadgeMarginMobile?.top}${teamMemberBadgeMarginUnits?.Mobile} ${teamMemberBadgeMarginMobile?.right}${teamMemberBadgeMarginUnits?.Mobile} ${teamMemberBadgeMarginMobile?.bottom}${teamMemberBadgeMarginUnits?.Mobile} ${teamMemberBadgeMarginMobile?.left}${teamMemberBadgeMarginUnits?.Mobile}`;

    const teamMemberBadgePaddingDesktopWidth = `${teamMemberBadgePaddingDesktop?.top}${teamMemberBadgePaddingUnits?.Desktop} ${teamMemberBadgePaddingDesktop?.right}${teamMemberBadgePaddingUnits?.Desktop} ${teamMemberBadgePaddingDesktop?.bottom}${teamMemberBadgePaddingUnits?.Desktop} ${teamMemberBadgePaddingDesktop?.left}${teamMemberBadgePaddingUnits?.Desktop}`;
	const teamMemberBadgePaddingTabletWidth = `${teamMemberBadgePaddingTablet?.top}${teamMemberBadgePaddingUnits?.Tablet} ${teamMemberBadgePaddingTablet?.right}${teamMemberBadgePaddingUnits?.Tablet} ${teamMemberBadgePaddingTablet?.bottom}${teamMemberBadgePaddingUnits?.Tablet} ${teamMemberBadgePaddingTablet?.left}${teamMemberBadgePaddingUnits?.Tablet}`;
	const teamMemberBadgePaddingMobileWidth = `${teamMemberBadgePaddingMobile?.top}${teamMemberBadgePaddingUnits?.Mobile} ${teamMemberBadgePaddingMobile?.right}${teamMemberBadgePaddingUnits?.Mobile} ${teamMemberBadgePaddingMobile?.bottom}${teamMemberBadgePaddingUnits?.Mobile} ${teamMemberBadgePaddingMobile?.left}${teamMemberBadgePaddingUnits?.Mobile}`;

    const teamMemberBadgeBorderDesktopWidth = `${teamMemberBadgeBorderDesktop?.top}${teamMemberBadgeBorderUnits?.Desktop} ${teamMemberBadgeBorderDesktop?.right}${teamMemberBadgeBorderUnits?.Desktop} ${teamMemberBadgeBorderDesktop?.bottom}${teamMemberBadgeBorderUnits?.Desktop} ${teamMemberBadgeBorderDesktop?.left}${teamMemberBadgeBorderUnits?.Desktop}`;
	const teamMemberBadgeBorderTabletWidth = `${teamMemberBadgeBorderTablet?.top}${teamMemberBadgeBorderUnits?.Tablet} ${teamMemberBadgeBorderTablet?.right}${teamMemberBadgeBorderUnits?.Tablet} ${teamMemberBadgeBorderTablet?.bottom}${teamMemberBadgeBorderUnits?.Tablet} ${teamMemberBadgeBorderTablet?.left}${teamMemberBadgeBorderUnits?.Tablet}`;
	const teamMemberBadgeBorderMobileWidth = `${teamMemberBadgeBorderMobile?.top}${teamMemberBadgeBorderUnits?.Mobile} ${teamMemberBadgeBorderMobile?.right}${teamMemberBadgeBorderUnits?.Mobile} ${teamMemberBadgeBorderMobile?.bottom}${teamMemberBadgeBorderUnits?.Mobile} ${teamMemberBadgeBorderMobile?.left}${teamMemberBadgeBorderUnits?.Mobile}`;

    const teamMemberBadgeBorderRadiusDesktopWidth = `${teamMemberBadgeBorderRadiusDesktop?.top}${teamMemberBadgeBorderRadiusUnits?.Desktop} ${teamMemberBadgeBorderRadiusDesktop?.right}${teamMemberBadgeBorderRadiusUnits?.Desktop} ${teamMemberBadgeBorderRadiusDesktop?.bottom}${teamMemberBadgeBorderRadiusUnits?.Desktop} ${teamMemberBadgeBorderRadiusDesktop?.left}${teamMemberBadgeBorderRadiusUnits?.Desktop}`;
    const teamMemberBadgeBorderRadiusTabletWidth = `${teamMemberBadgeBorderRadiusTablet?.top}${teamMemberBadgeBorderRadiusUnits?.Tablet} ${teamMemberBadgeBorderRadiusTablet?.right}${teamMemberBadgeBorderRadiusUnits?.Tablet} ${teamMemberBadgeBorderRadiusTablet?.bottom}${teamMemberBadgeBorderRadiusUnits?.Tablet} ${teamMemberBadgeBorderRadiusTablet?.left}${teamMemberBadgeBorderRadiusUnits?.Tablet}`;
    const teamMemberBadgeBorderRadiusMobileWidth = `${teamMemberBadgeBorderRadiusMobile?.top}${teamMemberBadgeBorderRadiusUnits?.Mobile} ${teamMemberBadgeBorderRadiusMobile?.right}${teamMemberBadgeBorderRadiusUnits?.Mobile} ${teamMemberBadgeBorderRadiusMobile?.bottom}${teamMemberBadgeBorderRadiusUnits?.Mobile} ${teamMemberBadgeBorderRadiusMobile?.left}${teamMemberBadgeBorderRadiusUnits?.Mobile}`;

    const fbTeamMemberStyle = `

        .fb-team-member-main-wrapper.${blockID} {
            ${teamMemberPositionType === 'default' ? `position: relative;` : ''}
            ${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' ? `width: 100%;` : ''}
            ${teamMemberPositionType !== 'default' ? `position: ${teamMemberPositionType};` : ''}
            ${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberHZOrientationType === 'left' && teamMemberHZLeftOffset?.Desktop ? `left: ${teamMemberHZLeftOffset?.Desktop}${teamMemberHZLeftOffsetUnits?.Desktop};` : ''}
            ${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberHZOrientationType === 'right' && teamMemberHZRightOffset?.Desktop ? `right: ${teamMemberHZRightOffset?.Desktop}${teamMemberHZRightOffsetUnits?.Desktop};` : ''}
            ${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberVROrientationType === 'top' && teamMemberVRTopOffset?.Desktop ? `top: ${teamMemberVRTopOffset?.Desktop}${teamMemberVRTopOffsetUnits?.Desktop};` : ''}
            ${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberVROrientationType === 'bottom' && teamMemberVRBottomOffset?.Desktop ? `bottom: ${teamMemberVRBottomOffset?.Desktop}${teamMemberVRBottomOffsetUnits?.Desktop};` : ''}
            ${teamMemberZIndex?.Desktop ? `z-index: ${teamMemberZIndex?.Desktop};` : ''}
            ${teamMemberOverflow !== 'default' ? `overflow: ${teamMemberOverflow};` : ''}
        }
        .fb-team-member-main-wrapper.${blockID} .fb-team-member-wrapper {
            position: relative;
            ${
                teamMemberBgType === "gradient"
                    ? `background: ${
                        teamMemberBgCustomGradientSwitcher && teamMemberBgCustomGradientInputValue
                        ? teamMemberBgCustomGradientInputValue
                        : teamMemberBgGradientColor
                    };`
                    : teamMemberBgImageUrl && teamMemberBgImageUrl !== null && teamMemberBgImageUrl !== ""
                    ? `
                    ${teamMemberBgImageUrl ? `background-image: url(${teamMemberBgImageUrl});` : ''}
                    ${teamMemberBgImagePosition ? `background-position: ${teamMemberBgImagePosition};` : ''}
                    ${teamMemberBgImageAttachment ? `background-attachment: ${teamMemberBgImageAttachment};` : ''}
                    ${teamMemberBgImageRepeat ? `background-repeat: ${teamMemberBgImageRepeat};` : ''}
                    ${teamMemberBgImageSize ? `background-size: ${teamMemberBgImageSize};` : ''}
                    `
                    : teamMemberBgClassicColor ? `background: ${teamMemberBgClassicColor};` : ''
            }
            ${teamMemberPaddingDesktopWidth && teamMemberDesktopPadding?.top ? `padding: ${teamMemberPaddingDesktopWidth};` : ''}
            ${teamMemberMarginDesktopWidth && teamMemberDesktopMargin?.top ? `margin: ${teamMemberMarginDesktopWidth};` : ''}
            ${teamMemberBorder ? `border-style: ${teamMemberBorder};` : ''}
            ${teamMemberBorderDesktopWidth && teamMemberDesktopBorderWidth?.top ? `border-width: ${teamMemberBorderDesktopWidth};` : ''}
            ${teamMemberBorderColor ? `border-color: ${teamMemberBorderColor};` : ''}
            ${teamMemberBorderRadiusDesktopWidth && teamMemberDesktopBorderRadiusWidth?.top ? `border-radius: ${teamMemberBorderRadiusDesktopWidth};` : ''}
            transition: all 0.3s ease-in-out;
        }
        .fb-team-member-main-wrapper.${blockID} .fb-team-member-wrapper:hover {
            ${
                teamMemberBgHoverType === "gradient"
                    ? `background: ${
                        teamMemberBgHoverCustomGradientSwitcher && teamMemberBgHoverCustomGradientInputValue
                        ? teamMemberBgHoverCustomGradientInputValue
                        : teamMemberBgHoverGradientColor
                    };`
                    : teamMemberBgHoverImageUrl && teamMemberBgHoverImageUrl !== null && teamMemberBgHoverImageUrl !== ""
                    ? `
                    ${teamMemberBgHoverImageUrl ? `background-image: url(${teamMemberBgHoverImageUrl});` : ''}
                    ${teamMemberBgHoverImagePosition ? `background-position: ${teamMemberBgHoverImagePosition};` : ''}
                    ${teamMemberBgHoverImageAttachment ? `background-attachment: ${teamMemberBgHoverImageAttachment};` : ''}
                    ${teamMemberBgHoverImageRepeat ? `background-repeat: ${teamMemberBgHoverImageRepeat};` : ''}
                    ${teamMemberBgHoverImageSize ? `background-size: ${teamMemberBgHoverImageSize};` : ''}
                    `
                    : teamMemberBgHoverClassicColor ? `background: ${teamMemberBgHoverClassicColor};` : ''
            }
            ${teamMemberBorderHoverColor ? `border-color: ${teamMemberBorderHoverColor};` : ''}
            transition: all 0.3s ease-in-out;
        }
        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image-wrapper {
            position: relative;
            display: flex;
            ${teamMemberContentPosition !== 'left' && teamMemberContentPosition !== 'right' && teamMemberContentPosition !== 'image' ? 'width: 100%;' : ''}
            ${teamMemberImageWidthUnits?.Desktop === '%' ? 'width: 100%;' : ''}
            ${teamMemberImageAlignment?.Desktop === 'left' ? 'justify-content: start' : ''}
            ${teamMemberImageAlignment?.Desktop === 'center' ? 'justify-content: center' : ''}
            ${teamMemberImageAlignment?.Desktop === 'right' ? 'justify-content: end' : ''}
        }
        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image img {
            ${teamMemberImagePosition ? `object-position: ${teamMemberImagePosition};` : ''}
            ${teamMemberImageSize ? `object-fit: ${teamMemberImageSize};` : ''}
        }
        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image {
            position: relative;
            z-index: 2;
            overflow: hidden;
            ${teamMemberImageWidth?.Desktop ? `width: ${teamMemberImageWidth?.Desktop}${teamMemberImageWidthUnits?.Desktop};` : ''}
            ${teamMemberImageHeight?.Desktop ? `height: ${teamMemberImageHeight?.Desktop}${teamMemberImageHeightUnits?.Desktop};` : ''}
            ${teamMemberImageBorder ? `border: ${teamMemberImageBorder};` : ''}
            ${teamMemberImageBorderColor ? `border-color: ${teamMemberImageBorderColor};` : ''}
            ${teamMemberImageBorderTypeGetDesktop && teamMemberImageBorderDesktop?.top ? `border-width: ${teamMemberImageBorderTypeGetDesktop};` : ''}
            ${teamMemberImageBorderRadiusGetDesktop && teamMemberImageBorderRadiusDesktop?.top ? `border-radius: ${teamMemberImageBorderRadiusGetDesktop};` : ''}
            ${teamMemberImageMarginGetDesktop && teamMemberImageMarginDesktop?.top ? `margin: ${teamMemberImageMarginGetDesktop};` : ''}
            transition: all 0.3s ease-in-out;
        }
        .fb-team-member-wrapper.${blockID}:hover .fb-team-member-item .fb-team-member-image {
            ${teamMemberImageBorderHoverColor ? `border-color: ${teamMemberImageBorderHoverColor};` : ''}
            transition: all 0.3s ease-in-out;
        }

        .fb-team-member-wrapper.${blockID} .fb-team-member-item {
            position: relative;
            overflow: hidden;
            display: flex;
            ${teamMemberContentPosition === 'top' ? 'flex-direction: column-reverse;' : ''}
            ${teamMemberContentPosition === 'bottom' ? 'flex-direction: column;' : ''}
            ${teamMemberContentPosition === 'left' ? 'flex-direction: row-reverse;' : ''}
            ${teamMemberContentPosition === 'right' ? 'flex-direction: row;' : ''}
            ${teamMemberContentPosition !== 'top' && teamMemberContentPosition !== 'bottom' && teamMemberContentPosition !== 'image' && teamMemberContentAlignment === 'left' ? 'align-items: start;' : ''}
            ${teamMemberContentPosition !== 'top' && teamMemberContentPosition !== 'bottom' && teamMemberContentPosition !== 'image' && teamMemberContentAlignment === 'center' ? 'align-items: center;' : ''}
            ${teamMemberContentPosition !== 'top' && teamMemberContentPosition !== 'bottom' && teamMemberContentPosition !== 'image' && teamMemberContentAlignment === 'right' ? 'align-items: end;' : ''}
            ${teamMemberContentPosition !== 'top' && teamMemberContentPosition !== 'bottom' && teamMemberContentPosition !== 'image' ? `justify-content: ${teamMemberCardAlignment};` : ''}
        }

        ${teamMemberSocialType === 'image' && `
            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image-wrapper .fb-team-member-social-profile-wrapper {
                position: absolute;
                ${teamMemberSocialPosition === 'top_left' ? 'top: 0; left: 0;' : ''}
                ${teamMemberSocialPosition === 'top_center' ? 'top: 0; left: 50%; transform: translateX(-50%);' : ''}
                ${teamMemberSocialPosition === 'top_right' ? 'top: 0; right: 0;' : ''}
                ${teamMemberSocialPosition === 'center_left' ? 'top: 50%; transform: translateY(-50%); left: 0;' : ''}
                ${teamMemberSocialPosition === 'center_center' ? 'top: 50%; left: 50%; transform: translate(-50%, -50%);' : ''}
                ${teamMemberSocialPosition === 'center_right' ? 'top: 50%; transform: translateY(-50%); right: 0;' : ''}
                ${teamMemberSocialPosition === 'bottom_left' ? 'bottom: 0; left: 0;' : ''}
                ${teamMemberSocialPosition === 'bottom_center' ? 'bottom: 0; left: 50%; transform: translateX(-50%);' : ''}
                ${teamMemberSocialPosition === 'bottom_right' ? 'bottom: 0; right: 0;' : ''}
                z-index: 5;
            }
        `}
        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-content-wrapper {
            
        }
        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-content-wrapper {
            ${ teamMemberContentPosition === 'image' ? `
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                z-index: 5;
            ` : `
                position: relative;
            ` }
            height: fit-content;
            display: flex;
            ${teamMemberSocialType === 'content' && teamMemberSocialPosition === 'top' ? 'flex-direction: column-reverse;' : ''}
            ${teamMemberSocialType === 'content' && teamMemberSocialPosition === 'bottom' ? 'flex-direction: column;' : ''}
            ${teamMemberSocialType === 'content' && teamMemberSocialPosition === 'left' ? 'flex-direction: row-reverse;' : ''}
            ${teamMemberSocialType === 'content' && teamMemberSocialPosition === 'right' ? 'flex-direction: row;' : ''}
            ${(teamMemberSocialPosition === 'left' || teamMemberSocialPosition === 'right') && teamMemberSocialAlignment ? `justify-content: ${teamMemberSocialAlignment};` : ''}

            ${teamMemberContentBorder ? `border: ${teamMemberContentBorder};` : ''}
            ${teamMemberContentBorderColor ? `border-color: ${teamMemberContentBorderColor};` : ''}
            ${teamMemberContentBorderTypeGetDesktop && teamMemberContentBorderDesktop?.top ? `border-width: ${teamMemberContentBorderTypeGetDesktop};` : ''}
            ${teamMemberContentBorderRadiusGetDesktop && teamMemberContentBorderRadiusDesktop?.top ? `border-radius: ${teamMemberContentBorderRadiusGetDesktop};` : ''}
            ${teamMemberContentMarginGetDesktop && teamMemberContentMarginDesktop?.top ? `margin: ${teamMemberContentMarginGetDesktop};` : ''}
            ${teamMemberContentPaddingGetDesktop && teamMemberContentPaddingDesktop?.top ? `padding: ${teamMemberContentPaddingGetDesktop};` : ''}
            ${teamMemberContentBgClassicColor ? `background: ${teamMemberContentBgClassicColor};` : ''}
            ${
                teamMemberContentBgType === "gradient"
                    ? `background: ${
                        teamMemberContentBgCustomGradientSwitcher && teamMemberContentBgCustomGradientInputValue
                        ? teamMemberContentBgCustomGradientInputValue
                        : teamMemberContentBgGradientColor
                    };`
                    : teamMemberContentBgImageUrl && teamMemberContentBgImageUrl !== null && teamMemberContentBgImageUrl !== ""
                    ? `
                    ${teamMemberContentBgImageUrl ? `background-image: url(${teamMemberContentBgImageUrl});` : ''}
                    ${teamMemberContentBgImagePosition ? `background-position: ${teamMemberContentBgImagePosition};` : ''}
                    ${teamMemberContentBgImageAttachment ? `background-attachment: ${teamMemberContentBgImageAttachment};` : ''}
                    ${teamMemberContentBgImageRepeat ? `background-repeat: ${teamMemberContentBgImageRepeat};` : ''}
                    ${teamMemberContentBgImageSize ? `background-size: ${teamMemberContentBgImageSize};` : ''}
                    `
                    : teamMemberContentBgClassicColor ? `background: ${teamMemberContentBgClassicColor};` : ''
            }
            transition: all 0.3s ease-in-out;
        }
        .fb-team-member-wrapper.${blockID}:hover .fb-team-member-item .fb-team-member-content-wrapper {
            ${
                teamMemberContentBgHoverType === "gradient"
                    ? `background: ${
                        teamMemberContentBgHoverCustomGradientSwitcher && teamMemberContentBgHoverCustomGradientInputValue
                        ? teamMemberContentBgHoverCustomGradientInputValue
                        : teamMemberContentBgHoverGradientColor
                    };`
                    : teamMemberContentBgHoverImageUrl && teamMemberContentBgHoverImageUrl !== null && teamMemberContentBgHoverImageUrl !== ""
                    ? `
                    ${teamMemberContentBgHoverImageUrl ? `background-image: url(${teamMemberContentBgHoverImageUrl});` : ''}
                    ${teamMemberContentBgHoverImagePosition ? `background-position: ${teamMemberContentBgHoverImagePosition};` : ''}
                    ${teamMemberContentBgHoverImageAttachment ? `background-attachment: ${teamMemberContentBgHoverImageAttachment};` : ''}
                    ${teamMemberContentBgHoverImageRepeat ? `background-repeat: ${teamMemberContentBgHoverImageRepeat};` : ''}
                    ${teamMemberContentBgHoverImageSize ? `background-size: ${teamMemberContentBgHoverImageSize};` : ''}
                    `
                    : teamMemberContentBgHoverClassicColor ? `background: ${teamMemberContentBgHoverClassicColor};` : ''
            }
            ${teamMemberContentBorderHoverColor ? `border-color: ${teamMemberContentBorderHoverColor};` : ''}
            transition: all 0.3s ease-in-out;
        }

        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-content-wrapper .fb-team-member-content {
            ${teamMemberContentPosition !== 'left' && teamMemberContentPosition !== 'right' && teamMemberContentAlignment?.Desktop === 'left' ? 'text-align: left;' : ''}
            ${teamMemberContentPosition !== 'left' && teamMemberContentPosition !== 'right' && teamMemberContentAlignment?.Desktop === 'center' ? 'text-align: center;' : ''}
            ${teamMemberContentPosition !== 'left' && teamMemberContentPosition !== 'right' && teamMemberContentAlignment?.Desktop === 'right' ? 'text-align: right;' : ''}
        }
        
        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image-wrapper .fb-team-member-image-overlay {
            ${
                teamMemberImageBgType === "gradient"
                    ? `background: ${
                        teamMemberImageBgCustomGradientSwitcher && teamMemberImageBgCustomGradientInputValue
                        ? teamMemberImageBgCustomGradientInputValue
                        : teamMemberImageBgGradientColor
                    };` : teamMemberImageBgClassicColor ? `background: ${teamMemberImageBgClassicColor};` : ''
            }
            ${teamMemberImageOverlayOpacity?.Desktop ? `opacity: ${teamMemberImageOverlayOpacity?.Desktop};` : ''}
            transition: all 0.3s ease-in-out;
        }
        .fb-team-member-wrapper.${blockID}:hover .fb-team-member-item .fb-team-member-image-wrapper .fb-team-member-image-overlay {
            ${
                teamMemberImageBgHoverType === "gradient"
                    ? `background: ${
                        teamMemberImageBgHoverCustomGradientSwitcher && teamMemberImageBgHoverCustomGradientInputValue
                        ? teamMemberImageBgHoverCustomGradientInputValue
                        : teamMemberImageBgHoverGradientColor
                    };` : teamMemberImageBgHoverClassicColor ? `background: ${teamMemberImageBgHoverClassicColor};` : ''
            }
            transition: all 0.3s ease-in-out;
        }

        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-name,
        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-name a {
            ${teamMemberNameGlobalTypoSwitcher?.fontFamily === true && teamMemberNameGlobalTypographyData?.fontFamily ? `font-family: ${teamMemberNameGlobalTypographyData?.fontFamily};` : ''}
            ${teamMemberNameGlobalTypoSwitcher?.fontSize === true && teamMemberNameGlobalTypographyData?.fontSize ? `font-size: ${teamMemberNameGlobalTypographyData?.fontSize};` : ''}
            ${teamMemberNameGlobalTypoSwitcher?.fontWeight === true && teamMemberNameGlobalTypographyData?.fontWeight ? `font-weight: ${teamMemberNameGlobalTypographyData?.fontWeight};` : ''}
            ${teamMemberNameGlobalTypoSwitcher?.fontStyle === true && teamMemberNameGlobalTypographyData?.fontStyle ? `font-style: ${teamMemberNameGlobalTypographyData?.fontStyle};` : ''}
            ${teamMemberNameGlobalTypoSwitcher?.textTransform === true && teamMemberNameGlobalTypographyData?.textTransform ? `text-transform: ${teamMemberNameGlobalTypographyData?.textTransform};` : ''}
            ${teamMemberNameGlobalTypoSwitcher?.textDecoration === true && teamMemberNameGlobalTypographyData?.textDecoration ? `text-decoration: ${teamMemberNameGlobalTypographyData?.textDecoration};` : ''}
            ${teamMemberNameGlobalTypoSwitcher?.letterSpacing === true && teamMemberNameGlobalTypographyData?.letterSpacing ? `letter-spacing: ${teamMemberNameGlobalTypographyData?.letterSpacing};` : ''}
            ${teamMemberNameGlobalTypoSwitcher?.lineHeight === true && teamMemberNameGlobalTypographyData?.lineHeight ? `line-height: ${teamMemberNameGlobalTypographyData?.lineHeight};` : ''}
            
            ${teamMemberNameGlobalTypoSwitcher?.fontFamily === false && teamMemberNameFontFamily && teamMemberNameFontFamily !== 'Default' ? `font-family: ${teamMemberNameFontFamily};` : ''}
            ${teamMemberNameGlobalTypoSwitcher?.fontSize === false && teamMemberNameFontSize?.Desktop ? `font-size: ${teamMemberNameFontSize?.Desktop}${teamMemberNameFontSizeUnits?.Desktop};` : ''}
            ${teamMemberNameGlobalTypoSwitcher?.fontWeight === false && teamMemberNameFontWeight ? `font-weight: ${teamMemberNameFontWeight};` : ''}
            ${teamMemberNameGlobalTypoSwitcher?.fontStyle === false && teamMemberNameFontStyle ? `font-style: ${teamMemberNameFontStyle};` : ''}
            ${teamMemberNameGlobalTypoSwitcher?.textTransform === false && teamMemberNameTextTransform ? `text-transform: ${teamMemberNameTextTransform};` : ''}
            ${teamMemberNameGlobalTypoSwitcher?.textDecoration === false && teamMemberNameTextDecoration ? `text-decoration: ${teamMemberNameTextDecoration};` : ''}
            ${teamMemberNameGlobalTypoSwitcher?.letterSpacing === false && teamMemberNameLetterSpacing?.Desktop ? `letter-spacing: ${teamMemberNameLetterSpacing?.Desktop}${teamMemberNameLetterSpacingUnits?.Desktop};` : ''}
            ${teamMemberNameGlobalTypoSwitcher?.lineHeight === false && teamMemberNameLineHeight?.Desktop ? `line-height: ${teamMemberNameLineHeight?.Desktop}${teamMemberNameLineHeightUnits?.Desktop};` : ''}
            ${teamMemberNameColor ? `color: ${teamMemberNameColor};` : ''}
            ${teamMemberNameMarginGetDesktop && teamMemberNameMarginDesktop?.top ? `margin: ${teamMemberNameMarginGetDesktop};` : ''}
            transition: all 0.3s ease-in-out;
        }
        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-name:hover,
        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-name a:hover {
            ${teamMemberNameHoverColor ? `color: ${teamMemberNameHoverColor};` : ''}
            transition: all 0.3s ease-in-out;
        }
        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-designation,
            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-designation a {
            ${teamMemberDesignationGlobalTypoSwitcher?.fontFamily === true && teamMemberDesignationGlobalTypographyData?.fontFamily ? `font-family: ${teamMemberDesignationGlobalTypographyData?.fontFamily};` : ''}
            ${teamMemberDesignationGlobalTypoSwitcher?.fontSize === true && teamMemberDesignationGlobalTypographyData?.fontSize ? `font-size: ${teamMemberDesignationGlobalTypographyData?.fontSize};` : ''}
            ${teamMemberDesignationGlobalTypoSwitcher?.fontWeight === true && teamMemberDesignationGlobalTypographyData?.fontWeight ? `font-weight: ${teamMemberDesignationGlobalTypographyData?.fontWeight};` : ''}
            ${teamMemberDesignationGlobalTypoSwitcher?.fontStyle === true && teamMemberDesignationGlobalTypographyData?.fontStyle ? `font-style: ${teamMemberDesignationGlobalTypographyData?.fontStyle};` : ''}
            ${teamMemberDesignationGlobalTypoSwitcher?.textTransform === true && teamMemberDesignationGlobalTypographyData?.textTransform ? `text-transform: ${teamMemberDesignationGlobalTypographyData?.textTransform};` : ''}
            ${teamMemberDesignationGlobalTypoSwitcher?.textDecoration === true && teamMemberDesignationGlobalTypographyData?.textDecoration ? `text-decoration: ${teamMemberDesignationGlobalTypographyData?.textDecoration};` : ''}
            ${teamMemberDesignationGlobalTypoSwitcher?.letterSpacing === true && teamMemberDesignationGlobalTypographyData?.letterSpacing ? `letter-spacing: ${teamMemberDesignationGlobalTypographyData?.letterSpacing};` : ''}
            ${teamMemberDesignationGlobalTypoSwitcher?.lineHeight === true && teamMemberDesignationGlobalTypographyData?.lineHeight ? `line-height: ${teamMemberDesignationGlobalTypographyData?.lineHeight};` : ''}
            
            ${teamMemberDesignationGlobalTypoSwitcher?.fontFamily === false && teamMemberDesignationFontFamily && teamMemberDesignationFontFamily !== 'Default' ? `font-family: ${teamMemberDesignationFontFamily};` : ''}
            ${teamMemberDesignationGlobalTypoSwitcher?.fontSize === false && teamMemberDesignationFontSize?.Desktop ? `font-size: ${teamMemberDesignationFontSize?.Desktop}${teamMemberDesignationFontSizeUnits?.Desktop};` : ''}
            ${teamMemberDesignationGlobalTypoSwitcher?.fontWeight === false && teamMemberDesignationFontWeight ? `font-weight: ${teamMemberDesignationFontWeight};` : ''}
            ${teamMemberDesignationGlobalTypoSwitcher?.fontStyle === false && teamMemberDesignationFontStyle ? `font-style: ${teamMemberDesignationFontStyle};` : ''}
            ${teamMemberDesignationGlobalTypoSwitcher?.textTransform === false && teamMemberDesignationTextTransform ? `text-transform: ${teamMemberDesignationTextTransform};` : ''}
            ${teamMemberDesignationGlobalTypoSwitcher?.textDecoration === false && teamMemberDesignationTextDecoration ? `text-decoration: ${teamMemberDesignationTextDecoration};` : ''}
            ${teamMemberDesignationGlobalTypoSwitcher?.letterSpacing === false && teamMemberDesignationLetterSpacing?.Desktop ? `letter-spacing: ${teamMemberDesignationLetterSpacing?.Desktop}${teamMemberDesignationLetterSpacingUnits?.Desktop};` : ''}
            ${teamMemberDesignationGlobalTypoSwitcher?.lineHeight === false && teamMemberDesignationLineHeight?.Desktop ? `line-height: ${teamMemberDesignationLineHeight?.Desktop}${teamMemberDesignationLineHeightUnits?.Desktop};` : ''}
            ${teamMemberDesignationColor ? `color: ${teamMemberDesignationColor};` : ''}
            ${teamMemberDesignationMarginGetDesktop && teamMemberDesignationMarginDesktop?.top ? `margin: ${teamMemberDesignationMarginGetDesktop};` : ''}
            transition: all 0.3s ease-in-out;
        }
        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-designation:hover,
        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-designation a:hover {
            ${teamMemberDesignationHoverColor ? `color: ${teamMemberDesignationHoverColor};` : ''}
            transition: all 0.3s ease-in-out;
        }

        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-desc,
        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-desc a {
            ${teamMemberDescGlobalTypoSwitcher?.fontFamily === true && teamMemberDescGlobalTypographyData?.fontFamily ? `font-family: ${teamMemberDescGlobalTypographyData?.fontFamily};` : ''}
            ${teamMemberDescGlobalTypoSwitcher?.fontSize === true && teamMemberDescGlobalTypographyData?.fontSize ? `font-size: ${teamMemberDescGlobalTypographyData?.fontSize};` : ''}
            ${teamMemberDescGlobalTypoSwitcher?.fontWeight === true && teamMemberDescGlobalTypographyData?.fontWeight ? `font-weight: ${teamMemberDescGlobalTypographyData?.fontWeight};` : ''}
            ${teamMemberDescGlobalTypoSwitcher?.fontStyle === true && teamMemberDescGlobalTypographyData?.fontStyle ? `font-style: ${teamMemberDescGlobalTypographyData?.fontStyle};` : ''}
            ${teamMemberDescGlobalTypoSwitcher?.textTransform === true && teamMemberDescGlobalTypographyData?.textTransform ? `text-transform: ${teamMemberDescGlobalTypographyData?.textTransform};` : ''}
            ${teamMemberDescGlobalTypoSwitcher?.textDecoration === true && teamMemberDescGlobalTypographyData?.textDecoration ? `text-decoration: ${teamMemberDescGlobalTypographyData?.textDecoration};` : ''}
            ${teamMemberDescGlobalTypoSwitcher?.letterSpacing === true && teamMemberDescGlobalTypographyData?.letterSpacing ? `letter-spacing: ${teamMemberDescGlobalTypographyData?.letterSpacing};` : ''}
            ${teamMemberDescGlobalTypoSwitcher?.lineHeight === true && teamMemberDescGlobalTypographyData?.lineHeight ? `line-height: ${teamMemberDescGlobalTypographyData?.lineHeight};` : ''}
            
            ${teamMemberDescGlobalTypoSwitcher?.fontFamily === false && teamMemberDescFontFamily && teamMemberDescFontFamily !== 'Default' ? `font-family: ${teamMemberDescFontFamily};` : ''}
            ${teamMemberDescGlobalTypoSwitcher?.fontSize === false && teamMemberDescFontSize?.Desktop ? `font-size: ${teamMemberDescFontSize?.Desktop}${teamMemberDescFontSizeUnits?.Desktop};` : ''}
            ${teamMemberDescGlobalTypoSwitcher?.fontWeight === false && teamMemberDescFontWeight ? `font-weight: ${teamMemberDescFontWeight};` : ''}
            ${teamMemberDescGlobalTypoSwitcher?.fontStyle === false && teamMemberDescFontStyle ? `font-style: ${teamMemberDescFontStyle};` : ''}
            ${teamMemberDescGlobalTypoSwitcher?.textTransform === false && teamMemberDescTextTransform ? `text-transform: ${teamMemberDescTextTransform};` : ''}
            ${teamMemberDescGlobalTypoSwitcher?.textDecoration === false && teamMemberDescTextDecoration ? `text-decoration: ${teamMemberDescTextDecoration};` : ''}
            ${teamMemberDescGlobalTypoSwitcher?.letterSpacing === false && teamMemberDescLetterSpacing?.Desktop ? `letter-spacing: ${teamMemberDescLetterSpacing?.Desktop}${teamMemberDescLetterSpacingUnits?.Desktop};` : ''}
            ${teamMemberDescGlobalTypoSwitcher?.lineHeight === false && teamMemberDescLineHeight?.Desktop ? `line-height: ${teamMemberDescLineHeight?.Desktop}${teamMemberDescLineHeightUnits?.Desktop};` : ''}
            ${teamMemberDescColor ? `color: ${teamMemberDescColor};` : ''}
            ${teamMemberDescMarginGetDesktop && teamMemberDescMarginDesktop?.top ? `margin: ${teamMemberDescMarginGetDesktop};` : ''}
            transition: all 0.3s ease-in-out;
        }
        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-desc:hover,
            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-desc a:hover {
            ${teamMemberDescHoverColor ? `color: ${teamMemberDescHoverColor};` : ''}
            transition: all 0.3s ease-in-out;
        }
            
        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-separator {
            display: flex;
            width: 100%;
            ${socialProfileSeparatorAlignment?.Desktop === 'left' ? 'justify-content: start;' : ''}
            ${socialProfileSeparatorAlignment?.Desktop === 'center' ? 'justify-content: center;' : ''}
            ${socialProfileSeparatorAlignment?.Desktop === 'right' ? 'justify-content: end;' : ''}
        }
        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-separator hr {
            border: none;
            border-top-style: solid;
            ${socialProfileSeparatorHeight?.Desktop ? `border-top-width: ${socialProfileSeparatorHeight?.Desktop}${socialProfileSeparatorHeightUnits?.Desktop};` : ''}
            ${socialProfileSeparatorColor ? `border-top-color: ${socialProfileSeparatorColor};` : ''}
            ${socialProfileSeparatorWidth?.Desktop ? `width: ${socialProfileSeparatorWidth?.Desktop}${socialProfileSeparatorWidthUnits?.Desktop};` : ''}
            ${socialProfileSeparatorMarginDesktopWidth && socialProfileSeparatorMarginDesktop?.top ? `margin: ${socialProfileSeparatorMarginDesktopWidth};` : ''}
            transition: all 0.3s ease-in-out;
        }
        .fb-team-member-wrapper.${blockID}:hover .fb-team-member-item .fb-team-member-social-profile-separator hr {
            ${socialProfileSeparatorHoverColor ? `border-top-color: ${socialProfileSeparatorHoverColor};` : ''}
            transition: all 0.3s ease-in-out;
        }

        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper {
            display: flex;
            align-items: center;
            ${teamMemberSocialIconAnimationType === 'left' ? 'flex-direction: row-reverse;' : ''}
            ${teamMemberSocialIconAnimationType === 'top' ? 'flex-direction: column-reverse;' : ''}
            ${teamMemberSocialIconAnimationType === 'bottom' ? 'flex-direction: column;' : ''}
            ${teamMemberIconsAlignment?.Desktop === 'left' ? 'justify-content: start;' : ''}
            ${teamMemberIconsAlignment?.Desktop === 'center' ? 'justify-content: center;' : ''}
            ${teamMemberIconsAlignment?.Desktop === 'right' ? 'justify-content: end;' : ''}
            ${teamMemberIconsDesktopMarginWidth && teamMemberIconsDesktopMargin?.top ? `margin: ${teamMemberIconsDesktopMarginWidth};` : ''}
            ${teamMemberSocialProfileBorder ? `border-style: ${teamMemberSocialProfileBorder};` : ''}
            ${teamMemberSocialProfileDesktopBorder && teamMemberSocialProfileDesktopBorderWidth?.top ? `border-width: ${teamMemberSocialProfileDesktopBorder};` : ''}
            ${teamMemberSocialProfileBorderColor ? `border-color: ${teamMemberSocialProfileBorderColor};` : ''}
            overflow: hidden;
            transition: all 0.3s ease-in-out;
        }
        .fb-team-member-wrapper.${blockID}:hover .fb-team-member-item .fb-team-member-social-profile-wrapper {
            ${teamMemberSocialProfileBorderHoverColor ? `border-color: ${teamMemberSocialProfileBorderHoverColor};` : ''}
            transition: all 0.3s ease-in-out;
        }

        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile {
            display: flex;
            align-items: center;
            ${teamMemberIconsSpacing?.Desktop ? `gap: ${teamMemberIconsSpacing?.Desktop}${teamMemberIconsSpacingUnits?.Desktop};` : ''}
            ${teamMemberSocialIconAnimationType === 'top' ? 'flex-direction: column;' : ''}
            ${teamMemberSocialIconAnimationType === 'bottom' ? 'flex-direction: column;' : ''}
            ${teamMemberSocialIconAnimationType !== 'default' ? 'visibility: hidden; opacity: 0;' : ''}
            ${teamMemberSocialIconAnimationType === 'top' ? 'transform: translateY(100px);' : ''}
            ${teamMemberSocialIconAnimationType === 'right' ? 'transform: translateX(-100px);' : ''}
            ${teamMemberSocialIconAnimationType === 'bottom' ? 'transform: translateY(-100px);' : ''}
            ${teamMemberSocialIconAnimationType === 'left' ? 'transform: translateX(100px);' : ''}
            transition: all 0.5s ease-in-out;
        }
        .fb-team-member-wrapper.${blockID}:hover .fb-team-member-item .fb-team-member-social-profile {
            ${teamMemberSocialIconAnimationType !== 'default' ? 'visibility: visible; opacity: 1; transform: translate(0);' : ''}
            transition: all 0.5s ease-in-out;
        }
        
        ${teamMemberIconStyleSwitcher === false ? `
            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile {
                ${teamMemberIconsDesktopPaddingWidth && teamMemberIconsDesktopPadding?.top ? `padding: ${teamMemberIconsDesktopPaddingWidth};` : ''}
                ${teamMemberIconsBGColor ? `background-color: ${teamMemberIconsBGColor};` : ''}
                ${teamMemberIconsBorder ? `border-style: ${teamMemberIconsBorder};` : ''}
                ${teamMemberIconsDesktopBorder && teamMemberIconsDesktopBorderWidth?.top ? `border-width: ${teamMemberIconsDesktopBorder};` : ''}
                ${teamMemberIconsBorderColor ? `border-color: ${teamMemberIconsBorderColor};` : ''}
                ${teamMemberIconsDesktopBorderRadius && teamMemberIconsDesktopBorderRadiusWidth?.top ? `border-radius: ${teamMemberIconsDesktopBorderRadius};` : ''}
                transition: all 0.3s ease-in-out;
            }
            .fb-team-member-wrapper.${blockID}:hover .fb-team-member-item .fb-team-member-social-profile {
                ${teamMemberIconsBGHoverColor ? `background-color: ${teamMemberIconsBGHoverColor};` : ''}
                ${teamMemberIconsBorderHoverColor ? `border-color: ${teamMemberIconsBorderHoverColor};` : ''}
                transition: all 0.3s ease-in-out;
            }

            @media only screen and (max-width: 1024px) {
                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile {
                    ${teamMemberIconsTabPaddingWidth && teamMemberIconsTabPadding?.top ? `padding: ${teamMemberIconsTabPaddingWidth};` : ''}
                    ${teamMemberIconsTabBorder && teamMemberIconsTabBorderWidth?.top ? `border-width: ${teamMemberIconsTabBorder};` : ''}
                    ${teamMemberIconsTabBorderRadius && teamMemberIconsTabBorderRadiusWidth?.top ? `border-radius: ${teamMemberIconsTabBorderRadius};` : ''}
                }
            }
            @media only screen and (max-width: 767px) {
                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile {
                    ${teamMemberIconsMobilePaddingWidth && teamMemberIconsMobilePadding?.top ? `padding: ${teamMemberIconsMobilePaddingWidth};` : ''}
                    ${teamMemberIconsMobileBorder && teamMemberIconsMobileBorderWidth?.top ? `border-width: ${teamMemberIconsMobileBorder};` : ''}
                    ${teamMemberIconsMobileBorderRadius && teamMemberIconsMobileBorderRadiusWidth?.top ? `border-radius: ${teamMemberIconsMobileBorderRadius};` : ''}
                }
            }
        ` : ''}
        ${teamMemberIconStyleSwitcher === true ? `
            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon {
                ${teamMemberIconsDesktopPaddingWidth && teamMemberIconsDesktopPadding?.top ? `padding: ${teamMemberIconsDesktopPaddingWidth};` : ''}
                ${teamMemberIconsBGColor ? `background-color: ${teamMemberIconsBGColor};` : ''}
                ${teamMemberIconsBorder ? `border-style: ${teamMemberIconsBorder};` : ''}
                ${teamMemberIconsDesktopBorder && teamMemberIconsDesktopBorderWidth?.top ? `border-width: ${teamMemberIconsDesktopBorder};` : ''}
                ${teamMemberIconsBorderColor ? `border-color: ${teamMemberIconsBorderColor};` : ''}
                ${teamMemberIconsDesktopBorderRadius && teamMemberIconsDesktopBorderRadiusWidth?.top ? `border-radius: ${teamMemberIconsDesktopBorderRadius};` : ''}
                transition: all 0.3s ease-in-out;
            }
            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon:hover {
                ${teamMemberIconsBGHoverColor ? `background-color: ${teamMemberIconsBGHoverColor};` : ''}
                ${teamMemberIconsBorderHoverColor ? `border-color: ${teamMemberIconsBorderHoverColor};` : ''}
                transition: all 0.3s ease-in-out;
            }

            @media only screen and (max-width: 1024px) {
                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon {
                    ${teamMemberIconsTabPaddingWidth && teamMemberIconsTabPadding?.top ? `padding: ${teamMemberIconsTabPaddingWidth};` : ''}
                    ${teamMemberIconsTabBorder && teamMemberIconsTabBorderWidth?.top ? `border-width: ${teamMemberIconsTabBorder};` : ''}
                    ${teamMemberIconsTabBorderRadius && teamMemberIconsTabBorderRadiusWidth?.top ? `border-radius: ${teamMemberIconsTabBorderRadius};` : ''}
                }
            }
            @media only screen and (max-width: 767px) {
                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon {
                    ${teamMemberIconsMobilePaddingWidth && teamMemberIconsMobilePadding?.top ? `padding: ${teamMemberIconsMobilePaddingWidth};` : ''}
                    ${teamMemberIconsMobileBorder && teamMemberIconsMobileBorderWidth?.top ? `border-width: ${teamMemberIconsMobileBorder};` : ''}
                    ${teamMemberIconsMobileBorderRadius && teamMemberIconsMobileBorderRadiusWidth?.top ? `border-radius: ${teamMemberIconsMobileBorderRadius};` : ''}
                }
            }
        ` : ''}
        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon svg {
            ${teamMemberIconsSize?.Desktop ? `width: ${teamMemberIconsSize?.Desktop}${teamMemberIconsSizeUnits?.Desktop};` : ''}
            ${teamMemberIconsSize?.Desktop ? `height: ${teamMemberIconsSize?.Desktop}${teamMemberIconsSizeUnits?.Desktop};` : ''}
            ${teamMemberIconsColor ? `fill: ${teamMemberIconsColor};` : ''}
            transition: all 0.3s ease-in-out;
        }
        .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon:hover svg {
            ${teamMemberIconsHoverColor ? `fill: ${teamMemberIconsHoverColor};` : ''}
            transition: all 0.3s ease-in-out;
        }


        ${teamMemberBadgeSwitcher === true ? `
            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-badge-wrapper {
                display: flex;
                position: absolute;
                width: max-content;
                ${teamMemberBadgeAlignment === 'top_left' ? 'top: 0; left: 0;' : ''}
                ${teamMemberBadgeAlignment === 'top_center' ? 'top: 0; left: 50%; transform: translateX(-50%);' : ''}
                ${teamMemberBadgeAlignment === 'top_right' ? 'top: 0; right: 0;' : ''}
                ${teamMemberBadgeAlignment === 'center_left' ? 'top: 50%; transform: translateY(-50%); left: 0;' : ''}
                ${teamMemberBadgeAlignment === 'center_center' ? 'top: 50%; left: 50%; transform: translate(-50%, -50%);' : ''}
                ${teamMemberBadgeAlignment === 'center_right' ? 'top: 50%; transform: translateY(-50%); right: 0;' : ''}
                ${teamMemberBadgeAlignment === 'bottom_left' ? 'bottom: 0; left: 0;' : ''}
                ${teamMemberBadgeAlignment === 'bottom_center' ? 'bottom: 0; left: 50%; transform: translateX(-50%);' : ''}
                ${teamMemberBadgeAlignment === 'bottom_right' ? 'bottom: 0; right: 0;' : ''}
                z-index: 5;
            }
            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-badge {
                ${teamMemberBadgeTypoSwitcher?.fontFamily === true && teamMemberBadgeTypographyData?.fontFamily ? `font-family: ${teamMemberBadgeTypographyData?.fontFamily};` : ''}
                ${teamMemberBadgeTypoSwitcher?.fontSize === true && teamMemberBadgeTypographyData?.fontSize ? `font-size: ${teamMemberBadgeTypographyData?.fontSize};` : ''}
                ${teamMemberBadgeTypoSwitcher?.fontWeight === true && teamMemberBadgeTypographyData?.fontWeight ? `font-weight: ${teamMemberBadgeTypographyData?.fontWeight};` : ''}
                ${teamMemberBadgeTypoSwitcher?.fontStyle === true && teamMemberBadgeTypographyData?.fontStyle ? `font-style: ${teamMemberBadgeTypographyData?.fontStyle};` : ''}
                ${teamMemberBadgeTypoSwitcher?.textTransform === true && teamMemberBadgeTypographyData?.textTransform ? `text-transform: ${teamMemberBadgeTypographyData?.textTransform};` : ''}
                ${teamMemberBadgeTypoSwitcher?.textDecoration === true && teamMemberBadgeTypographyData?.textDecoration ? `text-decoration: ${teamMemberBadgeTypographyData?.textDecoration};` : ''}
                ${teamMemberBadgeTypoSwitcher?.letterSpacing === true && teamMemberBadgeTypographyData?.letterSpacing ? `letter-spacing: ${teamMemberBadgeTypographyData?.letterSpacing};` : ''}
                ${teamMemberBadgeTypoSwitcher?.lineHeight === true && teamMemberBadgeTypographyData?.lineHeight ? `line-height: ${teamMemberBadgeTypographyData?.lineHeight};` : ''}
                
                ${teamMemberBadgeTypoSwitcher?.fontFamily === false && teamMemberBadgeFontFamily && teamMemberBadgeFontFamily !== 'Default' ? `font-family: ${teamMemberBadgeFontFamily};` : ''}
                ${teamMemberBadgeTypoSwitcher?.fontSize === false && teamMemberBadgeFontSize?.Desktop ? `font-size: ${teamMemberBadgeFontSize?.Desktop}${teamMemberBadgeFontSizeUnits?.Desktop};` : ''}
                ${teamMemberBadgeTypoSwitcher?.fontWeight === false && teamMemberBadgeFontWeight ? `font-weight: ${teamMemberBadgeFontWeight};` : ''}
                ${teamMemberBadgeTypoSwitcher?.fontStyle === false && teamMemberBadgeFontStyle ? `font-style: ${teamMemberBadgeFontStyle};` : ''}
                ${teamMemberBadgeTypoSwitcher?.textTransform === false && teamMemberBadgeTextTransform ? `text-transform: ${teamMemberBadgeTextTransform};` : ''}
                ${teamMemberBadgeTypoSwitcher?.textDecoration === false && teamMemberBadgeTextDecoration ? `text-decoration: ${teamMemberBadgeTextDecoration};` : ''}
                ${teamMemberBadgeTypoSwitcher?.letterSpacing === false && teamMemberBadgeLetterSpacing?.Desktop ? `letter-spacing: ${teamMemberBadgeLetterSpacing?.Desktop}${teamMemberBadgeLetterSpacingUnits?.Desktop};` : ''}
                ${teamMemberBadgeTypoSwitcher?.lineHeight === false && teamMemberBadgeLineHeight?.Desktop ? `line-height: ${teamMemberBadgeLineHeight?.Desktop}${teamMemberBadgeLineHeightUnits?.Desktop};` : ''}
                
                ${teamMemberBadgeColor ? `color: ${teamMemberBadgeColor};` : ''}
                ${teamMemberBadgeBgColor ? `background-color: ${teamMemberBadgeBgColor};` : ''}
                ${teamMemberBadgeBorder ? `border-style: ${teamMemberBadgeBorder};` : ''}
                ${teamMemberBadgeBorderColor ? `border-color: ${teamMemberBadgeBorderColor};` : ''}
                ${teamMemberBadgeBorderDesktopWidth && teamMemberBadgeBorderDesktop?.top ? `border-width: ${teamMemberBadgeBorderDesktopWidth};` : ''}
                ${teamMemberBadgeBorderRadiusDesktopWidth && teamMemberBadgeBorderRadiusDesktop?.top ? `border-radius: ${teamMemberBadgeBorderRadiusDesktopWidth};` : ''}
                ${teamMemberBadgeMarginDesktopWidth && teamMemberBadgeMarginDesktop?.top ? `margin: ${teamMemberBadgeMarginDesktopWidth};` : ''}
                ${teamMemberBadgePaddingDesktopWidth && teamMemberBadgePaddingDesktop?.top ? `padding: ${teamMemberBadgePaddingDesktopWidth};` : ''}
                transition: all 0.3s ease-in-out;
            }
            .fb-team-member-wrapper.${blockID} .fb-team-member-item:hover .fb-team-member-badge {
                ${teamMemberBadgeHoverColor ? `color: ${teamMemberBadgeHoverColor};` : ''}
                ${teamMemberBadgeBgHoverColor ? `background-color: ${teamMemberBadgeBgHoverColor};` : ''}
                ${teamMemberBadgeBorderHoverColor ? `border-color: ${teamMemberBadgeBorderHoverColor};` : ''}
                transition: all 0.3s ease-in-out;
            }

            @media only screen and (max-width: 1024px) {
                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-badge {
                    ${teamMemberBadgeTypoSwitcher?.fontSize === false && teamMemberBadgeFontSize?.Tablet ? `font-size: ${teamMemberBadgeFontSize?.Tablet}${teamMemberBadgeFontSizeUnits?.Tablet};` : ''}
                    ${teamMemberBadgeTypoSwitcher?.letterSpacing === false && teamMemberBadgeLetterSpacing?.Tablet ? `letter-spacing: ${teamMemberBadgeLetterSpacing?.Tablet}${teamMemberBadgeLetterSpacingUnits?.Tablet};` : ''}
                    ${teamMemberBadgeTypoSwitcher?.lineHeight === false && teamMemberBadgeLineHeight?.Tablet ? `line-height: ${teamMemberBadgeLineHeight?.Tablet}${teamMemberBadgeLineHeightUnits?.Tablet};` : ''}
                    
                    ${teamMemberBadgeBorderTabletWidth && teamMemberBadgeBorderTablet?.top ? `border-width: ${teamMemberBadgeBorderTabletWidth};` : ''}
                    ${teamMemberBadgeBorderRadiusTabletWidth && teamMemberBadgeBorderRadiusTablet?.top ? `border-radius: ${teamMemberBadgeBorderRadiusTabletWidth};` : ''}
                    ${teamMemberBadgeMarginTabletWidth && teamMemberBadgeMarginTablet?.top ? `margin: ${teamMemberBadgeMarginTabletWidth};` : ''}
                    ${teamMemberBadgePaddingTabletWidth && teamMemberBadgePaddingTablet?.top ? `padding: ${teamMemberBadgePaddingTabletWidth};` : ''}
                }
            }
            @media only screen and (max-width: 767px) {
                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-badge {
                    ${teamMemberBadgeTypoSwitcher?.fontSize === false && teamMemberBadgeFontSize?.Mobile ? `font-size: ${teamMemberBadgeFontSize?.Mobile}${teamMemberBadgeFontSizeUnits?.Mobile};` : ''}
                    ${teamMemberBadgeTypoSwitcher?.letterSpacing === false && teamMemberBadgeLetterSpacing?.Mobile ? `letter-spacing: ${teamMemberBadgeLetterSpacing?.Mobile}${teamMemberBadgeLetterSpacingUnits?.Mobile};` : ''}
                    ${teamMemberBadgeTypoSwitcher?.lineHeight === false && teamMemberBadgeLineHeight?.Mobile ? `line-height: ${teamMemberBadgeLineHeight?.Mobile}${teamMemberBadgeLineHeightUnits?.Mobile};` : ''}
                    
                    ${teamMemberBadgeBorderMobileWidth && teamMemberBadgeBorderMobile?.top ? `border-width: ${teamMemberBadgeBorderMobileWidth};` : ''}
                    ${teamMemberBadgeBorderRadiusMobileWidth && teamMemberBadgeBorderRadiusMobile?.top ? `border-radius: ${teamMemberBadgeBorderRadiusMobileWidth};` : ''}
                    ${teamMemberBadgeMarginMobileWidth && teamMemberBadgeMarginMobile?.top ? `margin: ${teamMemberBadgeMarginMobileWidth};` : ''}
                    ${teamMemberBadgePaddingMobileWidth && teamMemberBadgePaddingMobile?.top ? `padding: ${teamMemberBadgePaddingMobileWidth};` : ''}
                }
            }
        ` : ''}
        ${socialIconBtnSwitcher === true ? `
            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn {
                display: flex;
                justify-content: center;
                align-items: center;
                ${socialIconBtnDesktopMarginWidth && socialIconBtnDesktopMargin?.top ? `margin: ${socialIconBtnDesktopMarginWidth};` : ''}
                ${socialIconBtnDesktopPaddingWidth && socialIconBtnDesktopPadding?.top ? `padding: ${socialIconBtnDesktopPaddingWidth};` : ''}
                ${socialIconBtnBGColor ? `background-color: ${socialIconBtnBGColor};` : ''}
                ${socialIconBtnBorder ? `border-style: ${socialIconBtnBorder};` : ''}
                ${socialIconBtnDesktopBorder && socialIconBtnDesktopBorderWidth?.top ? `border-width: ${socialIconBtnDesktopBorder};` : ''}
                ${socialIconBtnBorderColor ? `border-color: ${socialIconBtnBorderColor};` : ''}
                ${socialIconBtnDesktopBorderRadius && socialIconBtnDesktopBorderRadiusWidth?.top ? `border-radius: ${socialIconBtnDesktopBorderRadius};` : ''}
                transition: all 0.3s ease-in-out;
            }
            .fb-team-member-wrapper.${blockID}:hover .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn {
                ${socialIconBtnBGHoverColor ? `background-color: ${socialIconBtnBGHoverColor};` : ''}
                ${socialIconBtnBorderHoverColor ? `border-color: ${socialIconBtnBorderHoverColor};` : ''}
                transition: all 0.3s ease-in-out;
            }
            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn svg {
                ${socialIconBtnColor ? `fill: ${socialIconBtnColor};` : ''}
                ${socialIconBtnIconSize?.Desktop ? `width: ${socialIconBtnIconSize?.Desktop}${socialIconBtnIconSizeUnits?.Desktop};` : ''}
                ${socialIconBtnIconSize?.Desktop ? `height: ${socialIconBtnIconSize?.Desktop}${socialIconBtnIconSizeUnits?.Desktop};` : ''}
                transition: all 0.3s ease-in-out;
            }
            .fb-team-member-wrapper.${blockID}:hover .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn svg {
                ${socialIconBtnHoverColor ? `fill: ${socialIconBtnHoverColor};` : ''}
                transition: all 0.3s ease-in-out;
            }
            
            @media only screen and (max-width: 1024px) {
                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn {
                    ${socialIconBtnTabMarginWidth && socialIconBtnTabMargin?.top ? `margin: ${socialIconBtnTabMarginWidth};` : ''}
                    ${socialIconBtnTabPaddingWidth && socialIconBtnTabPadding?.top ? `padding: ${socialIconBtnTabPaddingWidth};` : ''}
                    ${socialIconBtnTabBorder && socialIconBtnTabBorderWidth?.top ? `border-width: ${socialIconBtnTabBorder};` : ''}
                    ${socialIconBtnTabBorderRadius && socialIconBtnTabBorderRadiusWidth?.top ? `border-radius: ${socialIconBtnTabBorderRadius};` : ''}
                }
                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn svg {
                    ${socialIconBtnIconSize?.Tablet ? `width: ${socialIconBtnIconSize?.Tablet}${socialIconBtnIconSizeUnits?.Tablet};` : ''}
                    ${socialIconBtnIconSize?.Tablet ? `height: ${socialIconBtnIconSize?.Tablet}${socialIconBtnIconSizeUnits?.Tablet};` : ''}
                }
            }
            @media only screen and (max-width: 767px) {
                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn {
                    ${socialIconBtnMobileMarginWidth && socialIconBtnMobileMargin?.top ? `margin: ${socialIconBtnMobileMarginWidth};` : ''}
                    ${socialIconBtnMobilePaddingWidth && socialIconBtnMobilePadding?.top ? `padding: ${socialIconBtnMobilePaddingWidth};` : ''}
                    ${socialIconBtnMobileBorder && socialIconBtnMobileBorderWidth?.top ? `border-width: ${socialIconBtnMobileBorder};` : ''}
                    ${socialIconBtnMobileBorderRadius && socialIconBtnMobileBorderRadiusWidth?.top ? `border-radius: ${socialIconBtnMobileBorderRadius};` : ''}
                }
                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn svg {
                    ${socialIconBtnIconSize?.Mobile ? `width: ${socialIconBtnIconSize?.Mobile}${socialIconBtnIconSizeUnits?.Mobile};` : ''}
                    ${socialIconBtnIconSize?.Mobile ? `height: ${socialIconBtnIconSize?.Mobile}${socialIconBtnIconSizeUnits?.Mobile};` : ''}
                }
            }
        ` : ''}


        @media only screen and (max-width: 1024px) {
            .fb-team-member-main-wrapper.${blockID} {
                ${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberHZOrientationType === 'left' && teamMemberHZLeftOffset?.Tablet ? `left: ${teamMemberHZLeftOffset?.Tablet}${teamMemberHZLeftOffsetUnits?.Tablet};` : ''}
                ${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberHZOrientationType === 'right' && teamMemberHZRightOffset?.Tablet ? `right: ${teamMemberHZRightOffset?.Tablet}${teamMemberHZRightOffsetUnits?.Tablet};` : ''}
                ${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberVROrientationType === 'top' && teamMemberVRTopOffset?.Tablet ? `top: ${teamMemberVRTopOffset?.Tablet}${teamMemberVRTopOffsetUnits?.Tablet};` : ''}
                ${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberVROrientationType === 'bottom' && teamMemberVRBottomOffset?.Tablet ? `bottom: ${teamMemberVRBottomOffset?.Tablet}${teamMemberVRBottomOffsetUnits?.Tablet};` : ''}
                ${teamMemberZIndex?.Tablet ? `z-index: ${teamMemberZIndex?.Tablet};` : ''}
            }
            .fb-team-member-main-wrapper.${blockID} .fb-team-member-wrapper {
                ${teamMemberPaddingTabletWidth && teamMemberTabPadding?.top ? `padding: ${teamMemberPaddingTabletWidth};` : ''}
                ${teamMemberMarginTabletWidth && teamMemberTabMargin?.top ? `margin: ${teamMemberMarginTabletWidth};` : ''}
                ${teamMemberBorderTabletWidth && teamMemberTabBorderWidth?.top ? `border-width: ${teamMemberBorderTabletWidth};` : ''}
                ${teamMemberBorderRadiusTabletWidth && teamMemberTabBorderRadiusWidth?.top ? `border-radius: ${teamMemberBorderRadiusTabletWidth};` : ''}
            }

            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-content-wrapper .fb-team-member-content {
                ${teamMemberContentPosition !== 'left' && teamMemberContentPosition !== 'right' && teamMemberContentAlignment?.Tablet === 'left' ? 'text-align: left;' : ''}
                ${teamMemberContentPosition !== 'left' && teamMemberContentPosition !== 'right' && teamMemberContentAlignment?.Tablet === 'center' ? 'text-align: center;' : ''}
                ${teamMemberContentPosition !== 'left' && teamMemberContentPosition !== 'right' && teamMemberContentAlignment?.Tablet === 'right' ? 'text-align: right;' : ''}
            }

            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image-wrapper {
                ${teamMemberImageWidthUnits?.Tablet === '%' ? 'width: 100%;' : ''}
                ${teamMemberImageAlignment?.Tablet === 'left' ? 'justify-content: start' : ''}
                ${teamMemberImageAlignment?.Tablet === 'center' ? 'justify-content: center' : ''}
                ${teamMemberImageAlignment?.Tablet === 'right' ? 'justify-content: end' : ''}
            }
            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image {
                ${teamMemberImageWidth?.Tablet ? `width: ${teamMemberImageWidth?.Tablet}${teamMemberImageWidthUnits?.Tablet};` : ''}
                ${teamMemberImageHeight?.Tablet ? `height: ${teamMemberImageHeight?.Tablet}${teamMemberImageHeightUnits?.Tablet};` : ''}
                ${teamMemberImageBorderTypeGetTab && teamMemberImageBorderTab?.top ? `border-width: ${teamMemberImageBorderTypeGetTab};` : ''}
                ${teamMemberImageBorderRadiusGetTab && teamMemberImageBorderRadiusTab?.top ? `border-radius: ${teamMemberImageBorderRadiusGetTab};` : ''}
                ${teamMemberImageMarginGetTab && teamMemberImageMarginTab?.top ? `margin: ${teamMemberImageMarginGetTab};` : ''}
            }

            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-content-wrapper {
                ${teamMemberContentBorderTypeGetTab && teamMemberContentBorderTab?.top ? `border-width: ${teamMemberContentBorderTypeGetTab};` : ''}
                ${teamMemberContentBorderRadiusGetTab && teamMemberContentBorderRadiusTab?.top ? `border-radius: ${teamMemberContentBorderRadiusGetTab};` : ''}
                ${teamMemberContentMarginGetTab && teamMemberContentMarginTab?.top ? `margin: ${teamMemberContentMarginGetTab};` : ''}
                ${teamMemberContentPaddingGetTab && teamMemberContentPaddingTab?.top ? `padding: ${teamMemberContentPaddingGetTab};` : ''}
            }
            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-name,
            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-name a {
                ${teamMemberNameGlobalTypoSwitcher?.fontSize === false && teamMemberNameFontSize?.Tablet ? `font-size: ${teamMemberNameFontSize?.Tablet}${teamMemberNameFontSizeUnits?.Tablet};` : ''}
                ${teamMemberNameGlobalTypoSwitcher?.letterSpacing === false && teamMemberNameLetterSpacing?.Tablet ? `letter-spacing: ${teamMemberNameLetterSpacing?.Tablet}${teamMemberNameLetterSpacingUnits?.Tablet};` : ''}
                ${teamMemberNameGlobalTypoSwitcher?.lineHeight === false && teamMemberNameLineHeight?.Tablet ? `line-height: ${teamMemberNameLineHeight?.Tablet}${teamMemberNameLineHeightUnits?.Tablet};` : ''}
                ${teamMemberNameMarginGetTab && teamMemberNameMarginTab?.top ? `margin: ${teamMemberNameMarginGetTab};` : ''}
            }
            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-designation,
            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-designation a {
                ${teamMemberDesignationGlobalTypoSwitcher?.fontSize === false && teamMemberDesignationFontSize?.Tablet ? `font-size: ${teamMemberDesignationFontSize?.Tablet}${teamMemberDesignationFontSizeUnits?.Tablet};` : ''}
                ${teamMemberDesignationGlobalTypoSwitcher?.letterSpacing === false && teamMemberDesignationLetterSpacing?.Tablet ? `letter-spacing: ${teamMemberDesignationLetterSpacing?.Tablet}${teamMemberDesignationLetterSpacingUnits?.Tablet};` : ''}
                ${teamMemberDesignationGlobalTypoSwitcher?.lineHeight === false && teamMemberDesignationLineHeight?.Tablet ? `line-height: ${teamMemberDesignationLineHeight?.Tablet}${teamMemberDesignationLineHeightUnits?.Tablet};` : ''}
                ${teamMemberDesignationMarginGetTab && teamMemberDesignationMarginTab?.top ? `margin: ${teamMemberDesignationMarginGetTab};` : ''}
            }
            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-desc,
            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-desc a {
                ${teamMemberDescGlobalTypoSwitcher?.fontSize === false && teamMemberDescFontSize?.Tablet ? `font-size: ${teamMemberDescFontSize?.Tablet}${teamMemberDescFontSizeUnits?.Tablet};` : ''}
                ${teamMemberDescGlobalTypoSwitcher?.letterSpacing === false && teamMemberDescLetterSpacing?.Tablet ? `letter-spacing: ${teamMemberDescLetterSpacing?.Tablet}${teamMemberDescLetterSpacingUnits?.Tablet};` : ''}
                ${teamMemberDescGlobalTypoSwitcher?.lineHeight === false && teamMemberDescLineHeight?.Tablet ? `line-height: ${teamMemberDescLineHeight?.Tablet}${teamMemberDescLineHeightUnits?.Tablet};` : ''}
                ${teamMemberDescMarginGetTab && teamMemberDescMarginTab?.top ? `margin: ${teamMemberDescMarginGetTab};` : ''}
            }

            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-separator {
                ${socialProfileSeparatorAlignment?.Tablet === 'left' ? 'justify-content: start;' : ''}
                ${socialProfileSeparatorAlignment?.Tablet === 'center' ? 'justify-content: center;' : ''}
                ${socialProfileSeparatorAlignment?.Tablet === 'right' ? 'justify-content: end;' : ''}
            }

            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-separator hr {
                ${socialProfileSeparatorHeight?.Tablet ? `border-top-width: ${socialProfileSeparatorHeight?.Tablet}${socialProfileSeparatorHeightUnits?.Tablet};` : ''}
                ${socialProfileSeparatorWidth?.Tablet ? `width: ${socialProfileSeparatorWidth?.Tablet}${socialProfileSeparatorWidthUnits?.Tablet};` : ''}
                ${socialProfileSeparatorMarginTabWidth && socialProfileSeparatorMarginTab?.top ? `margin: ${socialProfileSeparatorMarginTabWidth};` : ''}
            }

            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper {
                ${teamMemberIconsTabMarginWidth && teamMemberIconsTabMargin?.top ? `margin: ${teamMemberIconsTabMarginWidth};` : ''}
                ${teamMemberSocialProfileTabBorder && teamMemberSocialProfileTabBorderWidth?.top ? `border-width: ${teamMemberSocialProfileTabBorder};` : ''}
                ${teamMemberIconsAlignment?.Tablet === 'left' ? 'justify-content: start;' : ''}
                ${teamMemberIconsAlignment?.Tablet === 'center' ? 'justify-content: center;' : ''}
                ${teamMemberIconsAlignment?.Tablet === 'right' ? 'justify-content: end;' : ''}
            }

            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile {
                ${teamMemberIconsSpacing?.Tablet ? `gap: ${teamMemberIconsSpacing?.Tablet}${teamMemberIconsSpacingUnits?.Tablet};` : ''}
            }

            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon svg {
                ${teamMemberIconsSize?.Tablet ? `width: ${teamMemberIconsSize?.Tablet}${teamMemberIconsSizeUnits?.Tablet};` : ''}
                ${teamMemberIconsSize?.Tablet ? `height: ${teamMemberIconsSize?.Tablet}${teamMemberIconsSizeUnits?.Tablet};` : ''}
            }

            .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image-wrapper .fb-team-member-image-overlay {
                ${teamMemberImageBGColor ? `background: ${teamMemberImageBGColor};` : ''}
                ${teamMemberImageOverlayOpacity?.Tablet ? `opacity: ${teamMemberImageOverlayOpacity?.Tablet};` : ''}
                transition: all 0.3s ease-in-out;
            }
        }

            @media only screen and (max-width: 767px) {
                .fb-team-member-main-wrapper.${blockID} {
                    ${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberHZOrientationType === 'left' && teamMemberHZLeftOffset?.Mobile ? `left: ${teamMemberHZLeftOffset?.Mobile}${teamMemberHZLeftOffsetUnits?.Mobile};` : ''}
                    ${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberHZOrientationType === 'right' && teamMemberHZRightOffset?.Mobile ? `right: ${teamMemberHZRightOffset?.Mobile}${teamMemberHZRightOffsetUnits?.Mobile};` : ''}
                    ${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberVROrientationType === 'top' && teamMemberVRTopOffset?.Mobile ? `top: ${teamMemberVRTopOffset?.Mobile}${teamMemberVRTopOffsetUnits?.Mobile};` : ''}
                    ${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberVROrientationType === 'bottom' && teamMemberVRBottomOffset?.Mobile ? `bottom: ${teamMemberVRBottomOffset?.Mobile}${teamMemberVRBottomOffsetUnits?.Mobile};` : ''}
                    ${teamMemberZIndex?.Mobile ? `z-index: ${teamMemberZIndex?.Mobile};` : ''}
                }
                .fb-team-member-main-wrapper.${blockID} .fb-team-member-wrapper {
                    ${teamMemberPaddingMobileWidth && teamMemberMobilePadding?.top ? `padding: ${teamMemberPaddingMobileWidth};` : ''}
                    ${teamMemberMarginMobileWidth && teamMemberMobileMargin?.top ? `margin: ${teamMemberMarginMobileWidth};` : ''}
                    ${teamMemberBorderMobileWidth && teamMemberMobileBorderWidth?.top ? `border-width: ${teamMemberBorderMobileWidth};` : ''}
                    ${teamMemberBorderRadiusMobileWidth && teamMemberMobileBorderRadiusWidth?.top ? `border-radius: ${teamMemberBorderRadiusMobileWidth};` : ''}
                }

                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-content-wrapper .fb-team-member-content {
                    ${teamMemberContentPosition !== 'left' && teamMemberContentPosition !== 'right' && teamMemberContentAlignment?.Mobile === 'left' ? 'text-align: left;' : ''}
                    ${teamMemberContentPosition !== 'left' && teamMemberContentPosition !== 'right' && teamMemberContentAlignment?.Mobile === 'center' ? 'text-align: center;' : ''}
                    ${teamMemberContentPosition !== 'left' && teamMemberContentPosition !== 'right' && teamMemberContentAlignment?.Mobile === 'right' ? 'text-align: right;' : ''}
                }

                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image-wrapper {
                    ${teamMemberImageWidthUnits?.Mobile === '%' ? 'width: 100%;' : ''}
                    ${teamMemberImageAlignment?.Mobile === 'left' ? 'justify-content: start' : ''}
                    ${teamMemberImageAlignment?.Mobile === 'center' ? 'justify-content: center' : ''}
                    ${teamMemberImageAlignment?.Mobile === 'right' ? 'justify-content: end' : ''}
                }
                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image {
                    ${teamMemberImageWidth?.Mobile ? `width: ${teamMemberImageWidth?.Mobile}${teamMemberImageWidthUnits?.Mobile};` : ''}
                    ${teamMemberImageHeight?.Mobile ? `height: ${teamMemberImageHeight?.Mobile}${teamMemberImageHeightUnits?.Mobile};` : ''}
                    ${teamMemberImageBorderTypeGetMobile && teamMemberImageBorderMobile?.top ? `border-width: ${teamMemberImageBorderTypeGetMobile};` : ''}
                    ${teamMemberImageBorderRadiusGetMobile && teamMemberImageBorderRadiusMobile?.top ? `border-radius: ${teamMemberImageBorderRadiusGetMobile};` : ''}
                    ${teamMemberImageMarginGetMobile && teamMemberImageMarginMobile?.top ? `margin: ${teamMemberImageMarginGetMobile};` : ''}
                }

                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-content-wrapper {
                    ${teamMemberContentBorderTypeGetMobile && teamMemberContentBorderMobile?.top ? `border-width: ${teamMemberContentBorderTypeGetMobile};` : ''}
                    ${teamMemberContentBorderRadiusGetMobile && teamMemberContentBorderRadiusMobile?.top ? `border-radius: ${teamMemberContentBorderRadiusGetMobile};` : ''}
                    ${teamMemberContentMarginGetMobile && teamMemberContentMarginMobile?.top ? `margin: ${teamMemberContentMarginGetMobile};` : ''}
                    ${teamMemberContentPaddingGetMobile && teamMemberContentPaddingMobile?.top ? `padding: ${teamMemberContentPaddingGetMobile};` : ''}
                }
                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-name,
                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-name a {
                    ${teamMemberNameGlobalTypoSwitcher?.fontSize === false && teamMemberNameFontSize?.Mobile ? `font-size: ${teamMemberNameFontSize?.Mobile}${teamMemberNameFontSizeUnits?.Mobile};` : ''}
                    ${teamMemberNameGlobalTypoSwitcher?.letterSpacing === false && teamMemberNameLetterSpacing?.Mobile ? `letter-spacing: ${teamMemberNameLetterSpacing?.Mobile}${teamMemberNameLetterSpacingUnits?.Mobile};` : ''}
                    ${teamMemberNameGlobalTypoSwitcher?.lineHeight === false && teamMemberNameLineHeight?.Mobile ? `line-height: ${teamMemberNameLineHeight?.Mobile}${teamMemberNameLineHeightUnits?.Mobile};` : ''}
                    ${teamMemberNameMarginGetMobile && teamMemberNameMarginMobile?.top ? `margin: ${teamMemberNameMarginGetMobile};` : ''}
                }
                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-designation,
                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-designation a {
                    ${teamMemberDesignationGlobalTypoSwitcher?.fontSize === false && teamMemberDesignationFontSize?.Mobile ? `font-size: ${teamMemberDesignationFontSize?.Mobile}${teamMemberDesignationFontSizeUnits?.Mobile};` : ''}
                    ${teamMemberDesignationGlobalTypoSwitcher?.letterSpacing === false && teamMemberDesignationLetterSpacing?.Mobile ? `letter-spacing: ${teamMemberDesignationLetterSpacing?.Mobile}${teamMemberDesignationLetterSpacingUnits?.Mobile};` : ''}
                    ${teamMemberDesignationGlobalTypoSwitcher?.lineHeight === false && teamMemberDesignationLineHeight?.Mobile ? `line-height: ${teamMemberDesignationLineHeight?.Mobile}${teamMemberDesignationLineHeightUnits?.Mobile};` : ''}
                    ${teamMemberDesignationMarginGetMobile && teamMemberDesignationMarginMobile?.top ? `margin: ${teamMemberDesignationMarginGetMobile};` : ''}
                }
                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-desc,
                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-desc a {
                    ${teamMemberDescGlobalTypoSwitcher?.fontSize === false && teamMemberDescFontSize?.Mobile ? `font-size: ${teamMemberDescFontSize?.Mobile}${teamMemberDescFontSizeUnits?.Mobile};` : ''}
                    ${teamMemberDescGlobalTypoSwitcher?.letterSpacing === false && teamMemberDescLetterSpacing?.Mobile ? `letter-spacing: ${teamMemberDescLetterSpacing?.Mobile}${teamMemberDescLetterSpacingUnits?.Mobile};` : ''}
                    ${teamMemberDescGlobalTypoSwitcher?.lineHeight === false && teamMemberDescLineHeight?.Mobile ? `line-height: ${teamMemberDescLineHeight?.Mobile}${teamMemberDescLineHeightUnits?.Mobile};` : ''}
                    ${teamMemberDescMarginGetMobile && teamMemberDescMarginMobile?.top ? `margin: ${teamMemberDescMarginGetMobile};` : ''}
                }
                
                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-separator {
                    ${socialProfileSeparatorAlignment?.Mobile === 'left' ? 'justify-content: start;' : ''}
                    ${socialProfileSeparatorAlignment?.Mobile === 'center' ? 'justify-content: center;' : ''}
                    ${socialProfileSeparatorAlignment?.Mobile === 'right' ? 'justify-content: end;' : ''}
                }

                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-separator hr {
                    ${socialProfileSeparatorHeight?.Mobile ? `border-top-width: ${socialProfileSeparatorHeight?.Mobile}${socialProfileSeparatorHeightUnits?.Mobile};` : ''}
                    ${socialProfileSeparatorWidth?.Mobile ? `width: ${socialProfileSeparatorWidth?.Mobile}${socialProfileSeparatorWidthUnits?.Mobile};` : ''}
                    ${socialProfileSeparatorMarginMobileWidth && socialProfileSeparatorMarginMobile?.top ? `margin: ${socialProfileSeparatorMarginMobileWidth};` : ''}
                }

                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper {
                    ${teamMemberIconsMobileMarginWidth && teamMemberIconsMobileMargin?.top ? `margin: ${teamMemberIconsMobileMarginWidth};` : ''}
                    ${teamMemberSocialProfileMobileBorder && teamMemberSocialProfileMobileBorderWidth?.top ? `border-width: ${teamMemberSocialProfileMobileBorder};` : ''}
                    ${teamMemberIconsAlignment?.Mobile === 'left' ? 'justify-content: start;' : ''}
                    ${teamMemberIconsAlignment?.Mobile === 'center' ? 'justify-content: center;' : ''}
                    ${teamMemberIconsAlignment?.Mobile === 'right' ? 'justify-content: end;' : ''}
                }

                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile {
                    ${teamMemberIconsSpacing?.Mobile ? `gap: ${teamMemberIconsSpacing?.Mobile}${teamMemberIconsSpacingUnits?.Mobile};` : ''}
                }

                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon svg {
                    ${teamMemberIconsSize?.Mobile ? `width: ${teamMemberIconsSize?.Mobile}${teamMemberIconsSizeUnits?.Mobile};` : ''}
                    ${teamMemberIconsSize?.Mobile ? `height: ${teamMemberIconsSize?.Mobile}${teamMemberIconsSizeUnits?.Mobile};` : ''}
                }

                .fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image-wrapper .fb-team-member-image-overlay {
                    ${teamMemberImageBGColor ? `background: ${teamMemberImageBGColor};` : ''}
                    ${teamMemberImageOverlayOpacity?.Mobile ? `opacity: ${teamMemberImageOverlayOpacity?.Mobile};` : ''}
                    transition: all 0.3s ease-in-out;
                }
            }
    `;

    const customCss = getCustomCss(teamMemberCustomCSS, `.${blockID}`);
    return `${fbTeamMemberStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateTeamMemberStyle;