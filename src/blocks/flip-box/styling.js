/**
 * Flip Box Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateFlipBoxStyle = (attributes) => {
    const {
		blockID,
		flipBoxPresetStyle,
		Heading_Text,
		headingTag,
		Heading_Background_Color,
		Alignment,
		descSwitcher,
		titleSwitcher,
		Sub_Heading_Text,
		headingGlobalTypoSwitcher,
		headingGlobalTypographyData,
		headingGlobalTypoType,
		headingGlobalTypoOption,
		headingFontFamily,
		headingFontSize,
		headingFontSizeUnits,
		headingFontWeight,
		headingFontStyle,
		headingTextTransform,
		headingTextDecoration,
		headingLetterSpacing,
		headingLetterSpacingUnits,
		headingLineHeight,
		headingLineHeightUnits,
		Heading_Color_Switcher,
		Heading_Color,
		Heading_Hover_Color,
		Heading_Border,
		Heading_Border_Color,
		Heading_Border_Hover_Color,
		Heading_Border_Color_Switcher,
		Heading_Border_units,
		Heading_Border_radius_units,
		Heading_Desktop_Border_Width,
		Heading_Tab_Border_Width,
		Heading_Mobile_Border_Width,
		Heading_Desktop_Border_radius_Width,
		Heading_Tab_Border_radius_Width,
		Heading_Mobile_Border_radius_Width,
		activeBorderRadiusDevice,
		borderRadiusLink,
		Heading_padding_units,
		Heading_Desktop_padding,
		Heading_Tab_padding,
		Heading_Mobile_padding,
		// deviceType,
		paddingLink,
		borderLink,

		Heading_Margin_Units,
		Heading_Desktop_Margin,
		Heading_Tab_Margin,
		Heading_Mobile_Margin,
		Heading_Margin_Link,

		flip_Button_Switcher,
		flip_Button_Text,
		flip_Button_Link,
		mediaAlignmentFront,
		mediaAlignmentBack,
		descAlignment,
		buttonAlignment,
		buttonAlignmentBack,
		flipBoxBg,

		SubHeadingPaddingUnits,
		SubHeadingDesktopPadding,
		SubHeadingTabPadding,
		SubHeadingMobilePadding,
		SubHeadingPaddingLink,
		subHeadingGlobalTypoSwitcher,
		subHeadingGlobalTypographyData,
		subHeadingGlobalTypoType,
		subHeadingGlobalTypoOption,
		subHeadingFontFamily,
		subHeadingFontSize,
		subHeadingFontSizeUnits,
		subHeadingFontWeight,
		subHeadingFontStyle,
		subHeadingTextTransform,
		subHeadingTextDecoration,
		subHeadingLetterSpacing,
		subHeadingLetterSpacingUnits,
		subHeadingLineHeight,
		subHeadingLineHeightUnits,
		SubHeadingColor,
		SubHeadingColorSwitcher,
		SubHeadingHoverColor,

		descMarginUnits,
		descDesktopMargin,
		descTabMargin,
		descMobileMargin,
		descActiveMarginDevice,
		descMarginLink,

		flipBoxPaddingUnits,
		flipBoxDesktopPadding,
		flipBoxTabPadding,
		flipBoxMobilePadding,
		flipBoxBorderUnits,
		flipBoxDesktopBorderWidth,
		flipBoxTabBorderWidth,
		flipBoxMobileBorderWidth,

		flipBoxBorderRadiusUnits,
		flipBoxDesktopBorderRadiusWidth,
		flipBoxTabBorderRadiusWidth,
		flipBoxMobileBorderRadiusWidth,

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
		buttonTextColor,
		buttonTextHoverColor,
		buttonBgColorSwitcher,
		buttonBgColor,
		buttonBgHoverColor,
		buttonBorderRadiusWidth,
		btnBorderRadiusLink,

		flipButtonMarginLink,
		flipButtonMarginUnits,
		flipButtonDesktopMargin,
		flipButtonTabMargin,
		flipButtonMobileMargin,
		flipButtonActiveMarginDevice,

		flipButtonPaddingUnits,
		flipButtonDesktopPadding,
		flipButtonTabPadding,
		flipButtonMobilePadding,
		flipButtonPaddingLink,
		flipButtonLink,
		flipbtnTargetUrl,
		icon,
		frontendIcon,
		btnIcon,
		frontendBtnIcon,
		width,
		mediaSwitcher,
		flipModeSwitcher,
		contentAlignment,

		flipButtonBorder,
		flipBoxMarginUnits,
		flipBoxDesktopMargin,
		flipBoxTabMargin,
		flipBoxMobileMargin,
		flipBoxMarginLink,
		flipButtonBorderUnits,
		flipButtonDesktopBorderWidth,
		flipButtonTabBorderWidth,
		flipButtonMobileBorderWidth,
		flipBtnBorderradiusUnits,
		flipBtnDesktopBorderradiusWidth,
		flipBtnTabBorderradiusWidth,
		flipBtnMobileBorderradiusWidth,
		flipButtonBorderColorSwitcher,
		flipButtonBorderColor,
		flipButtonHoverBorderColor,
		boxBgColor,
		boxBgColorSwitcher,
		boxBgHoverColor,
		mediaSize,
		mediaSizeUnits,
		globalZIndex,
		flipBoxOverflow,
		globalPaddingUnits,
		globalPaddingDesktop,
		globalPaddingTablet,
		globalPaddingMobile,
		globalPaddingLink,

		globalMarginUnits,
		globalMarginDesktop,
		globalMarginTablet,
		globalMarginMobile,
		globalMarginLink,

		globalBgColorSwitcher,
		globalBgColor,
		globalBgHoverColor,

		globalBorder,
		globalBorderColorSwitcher,
		globalBorderColor,
		globalBorderHoverColor,
		globalBorderUnits,
		globalBorderDesktop,
		globalBorderTablet,
		globalBorderMobile,
		globalBorderLink,

		globalBorderRadiusUnits,
		globalBorderRadiusDesktop,
		globalBorderRadiusTablet,
		globalBorderRadiusMobile,
		globalBorderRadiusLink,

		mediaBgWidth,
		mediaBgWidthUnits,
		mediaBgHeight,
		mediaBgHeightUnits,

		mediaPaddingUnits,
		mediaPaddingDesktop,
		mediaPaddingTablet,
		mediaPaddingMobile,
		mediaPaddingLink,

		mediaMarginUnits,
		mediaMarginDesktop,
		mediaMarginTablet,
		mediaMarginMobile,
		mediaMarginLink,

		mediaBgColorSwitcher,
		mediaBgColor,
		mediaBgHoverColor,

		mediaBorder,
		mediaBorderColorSwitcher,
		mediaBorderColor,
		mediaBorderHoverColor,
		mediaBorderUnits,
		mediaBorderDesktop,
		mediaBorderTablet,
		mediaBorderMobile,
		mediaBorderLink,

		mediaBorderRadiusUnits,
		mediaBorderRadiusDesktop,
		mediaBorderRadiusTablet,
		mediaBorderRadiusMobile,
		mediaBorderRadiusLink,

		btnIconSize,
		btnIconSizeUnits,
		buttonIconSwitcher,
		btnIconColor,
		btnIconHoverColor,
		btnIconColorSwitcher,
		btnIconPosition,
		flipIconPosition,

		mediaIconColor,
		mediaIconHoverColor,
		mediaIconColorSwitcher,
		boxGlobalBoxShadowSwitcher,
		boxGlobalBoxShadowValues,
		boxGlobalBoxShadowCssValue,
		boxGlobalHoverBoxShadowValues,
		boxGlobalHoverBoxShadowCssValue,
		mediaBgTypeImage,
		bgType,
		flipMediaID,
		flipMediaAlt,
		flipMediaUrl,
		mediaBackColorSwitcher,
		mediaBackgroundType,
		mediaClassicColor,
		mediaGradientColor,
		mediaCustomGradientSwitcher,
		mediaCustomGradientInputValue,
		mediaBackgroundColorStyle,
		mediaBackgroundImageUrl,
		mediaBackgroundImageAlt,
		mediaBackgroundImageID,
		mediaBackgroundImagePosition,
		mediaBackgroundImageAttachment,
		mediaBackgroundImageSize,
		mediaBackgroundImageRepeat,
		mediaHoverBackgroundType,
		mediaHoverClassicColor,
		mediaHoverGradientColor,
		mediaHoverCustomGradientSwitcher,
		mediaHoverCustomGradientInputValue,
		mediaHoverBackgroundColorStyle,
		mediaHoverBackgroundImageUrl,
		mediaHoverBackgroundImageAlt,
		mediaHoverBackgroundImageID,
		mediaHoverBackgroundImagePosition,
		mediaHoverBackgroundImageAttachment,
		mediaHoverBackgroundImageSize,
		mediaHoverBackgroundImageRepeat,
		blockStyle,
		flipButtonBorderLink,
		flipIconVerticalPosition,
		flipCardAlignment,

		flipBoxDesktopSwitcher,
		flipBoxTabletSwitcher,
		flipBoxMobileSwitcher,

		flipBoxGlobalCustomCSS,
		flipBoxGlobalWraperID,
		flipBoxGlobalWraperClass,

		// Position
		flipBoxPositionType,
		flipBoxHZOrientationType,
		flipBoxVROrientationType,
		flipBoxHZLeftOffset,
		flipBoxHZLeftOffsetUnits,
		flipBoxHZRightOffset,
		flipBoxHZRightOffsetUnits,
		flipBoxVRTopOffset,
		flipBoxVRTopOffsetUnits,
		flipBoxVRBottomOffset,
		flipBoxVRBottomOffsetUnits,
		flipSelectedSide,
		isHover,
		// Flip box front
		flipBoxFrontHeight,
		flipBoxFrontHeightUnits,
		flipBoxFrontWidth,
		flipBoxFrontWidthUnits,
		flipBoxFrontBackColorSwitcher,
		flipBoxFrontBackgroundType,
		flipBoxFrontClassicColor,
		flipBoxFrontGradientColor,
		flipBoxFrontCustomGradientSwitcher,
		flipBoxFrontCustomGradientInputValue,
		flipBoxFrontBackgroundColorStyle,
		flipBoxFrontBackgroundImageUrl,
		flipBoxFrontBackgroundImageAlt,
		flipBoxFrontBackgroundImageID,
		flipBoxFrontBackgroundImagePosition,
		flipBoxFrontBackgroundImageAttachment,
		flipBoxFrontBackgroundImageSize,
		flipBoxFrontBackgroundImageRepeat,
		flipBoxFrontHoverBackgroundType,
		flipBoxFrontHoverClassicColor,
		flipBoxFrontHoverGradientColor,
		flipBoxFrontHoverCustomGradientSwitcher,
		flipBoxFrontHoverCustomGradientInputValue,
		flipBoxFrontHoverBackgroundColorStyle,
		flipBoxFrontHoverBackgroundImageUrl,
		flipBoxFrontHoverBackgroundImageAlt,
		flipBoxFrontHoverBackgroundImageID,
		flipBoxFrontHoverBackgroundImagePosition,
		flipBoxFrontHoverBackgroundImageAttachment,
		flipBoxFrontHoverBackgroundImageSize,
		flipBoxFrontHoverBackgroundImageRepeat,
		//Flip Back
		flipBackBoxPresetStyle,
		flipBack_Button_Switcher,
		flipBack_Button_Text,
		flipBack_Button_Link,
		flipBackBoxPaddingUnits,
		flipBackBoxDesktopPadding,
		flipBackBoxTabPadding,
		flipBackBoxMobilePadding,
		flipBackBoxBorderUnits,
		flipBackBoxDesktopBorderWidth,
		flipBackBoxTabBorderWidth,
		flipBackBoxMobileBorderWidth,

		flipBackBoxBorderRadiusUnits,
		flipBackBoxDesktopBorderRadiusWidth,
		flipBackBoxTabBorderRadiusWidth,
		flipBackBoxMobileBorderRadiusWidth,
		flipBackButtonMarginLink,
		flipBackButtonMarginUnits,
		flipBackButtonDesktopMargin,
		flipBackButtonTabMargin,
		flipBackButtonMobileMargin,
		flipBackButtonActiveMarginDevice,

		flipBackButtonPaddingUnits,
		flipBackButtonDesktopPadding,
		flipBackButtonTabPadding,
		flipBackButtonMobilePadding,
		flipBackButtonPaddingLink,
		buttonIconSwitcherBack,
		flipBackButtonLink,
		flipBackbtnTargetUrl,
		flipBackButtonBorder,
		flipBackBoxMarginUnits,
		flipBackBoxDesktopMargin,
		flipBackBoxTabMargin,
		flipBackBoxMobileMargin,
		flipBackBoxMarginLink,
		flipBackButtonBorderUnits,
		flipBackButtonDesktopBorderWidth,
		flipBackButtonTabBorderWidth,
		flipBackButtonMobileBorderWidth,
		flipBackBtnBorderradiusUnits,
		flipBackBtnDesktopBorderradiusWidth,
		flipBackBtnTabBorderradiusWidth,
		flipBackBtnMobileBorderradiusWidth,
		flipBackButtonBorderColorSwitcher,
		flipBackButtonBorderColor,
		flipBackButtonHoverBorderColor,
		flipBackIconPosition,
		flipBackMediaID,
		flipBackMediaAlt,
		flipBackMediaUrl,
		flipBackButtonBorderLink,
		flipBackIconVerticalPosition,
		flipBackCardAlignment,

		flipBackBoxDesktopSwitcher,
		flipBackBoxTabletSwitcher,
		flipBackBoxMobileSwitcher,

		flipBackBoxGlobalCustomCSS,
		flipBackBoxGlobalWraperID,
		flipBackBoxGlobalWraperClass,

		// Position
		flipBackBoxPositionType,
		flipBackBoxHZOrientationType,
		flipBackBoxVROrientationType,
		flipBackBoxHZLeftOffset,
		flipBackBoxHZLeftOffsetUnits,
		flipBackBoxHZRightOffset,
		flipBackBoxHZRightOffsetUnits,
		flipBackBoxVRTopOffset,
		flipBackBoxVRTopOffsetUnits,
		flipBackBoxVRBottomOffset,
		flipBackBoxVRBottomOffsetUnits,
		flipBackSelectedSide,
		headingTagBack,
		headingTextBack,
		flipBackContent,
		flipBackContentTag,
		descSwitcherBack,
		titleSwitcherBack,
		descAlignmentBack,
		mediaSwitcherBack,
		iconBack,
		frontendIconBack,
		flipAnimationType,
		titleAlignmentBack,
		headingBackColorSwitcher,
		headingBackColor,
		headingBackHoverColor,
		headingBackGlobalTypographyData,
		headingBackGlobalTypoSwitcher,
		headingBackGlobalTypoType,
		headingBackGlobalTypoOption,
		headingBackFontFamily,
		headingBackFontSize,
		headingBackFontSizeUnits,
		headingBackFontWeight,
		headingBackFontStyle,
		headingBackTextTransform,
		headingBackTextDecoration,
		headingBackLetterSpacing,
		headingBackLetterSpacingUnits,
		headingBackLineHeight,
		headingBackLineHeightUnits,

		headingBack_padding_units,
		headingBack_Desktop_padding,
		headingBack_Tab_padding,
		headingBack_Mobile_padding,

		headingBack_Margin_Units,
		headingBack_Desktop_Margin,
		headingBack_Tab_Margin,
		headingBack_Mobile_Margin,
		headingBack_Margin_Link,

		headingBack_Border,
		headingBack_Border_Color_Switcher,
		headingBack_Border_Color,
		headingBack_Border_Hover_Color,

		headingBack_Border_units,
		headingBack_Desktop_Border_Width,
		headingBack_Tab_Border_Width,
		headingBack_Mobile_Border_Width,

		headingBack_Border_radius_units,
		headingBack_Desktop_Border_radius_Width,
		headingBack_Tab_Border_radius_Width,
		headingBack_Mobile_Border_radius_Width,
		subHeadingBackGlobalTypographyData,
		subHeadingBackGlobalTypoSwitcher,
		subHeadingBackGlobalTypoType,
		subHeadingBackGlobalTypoOption,
		subHeadingBackFontFamily,
		subHeadingBackFontSize,
		subHeadingBackFontSizeUnits,
		subHeadingBackFontWeight,
		subHeadingBackFontStyle,
		subHeadingBackTextTransform,
		subHeadingBackTextDecoration,
		subHeadingBackLetterSpacing,
		subHeadingBackLetterSpacingUnits,
		subHeadingBackLineHeight,
		subHeadingBackLineHeightUnits,
		subHeadingBackColorSwitcher,
		subHeadingBackColor,
		subHeadingBackHoverColor,
		subHeadingBack_Text,
		subHeadingBack_Tag,
		subHeadingBack_Position,

		subHeadingBackPaddingUnits,
		subHeadingBackDesktopPadding,
		subHeadingBackTabPadding,
		subHeadingBackMobilePadding,
		subHeadingBackPaddingLink,

		descBackMarginUnits,
		descBackDesktopMargin,
		descBackTabMargin,
		descBackMobileMargin,
		descBackMarginLink,

		buttonBackGlobalTypographyData,
		buttonBackGlobalTypoSwitcher,
		buttonBackGlobalTypoType,
		buttonBackGlobalTypoOption,
		buttonBackFontFamily,
		buttonBackFontSize,
		buttonBackFontSizeUnits,
		buttonBackFontWeight,
		buttonBackFontStyle,
		buttonBackTextTransform,
		buttonBackTextDecoration,
		buttonBackLetterSpacing,
		buttonBackLetterSpacingUnits,
		buttonBackLineHeight,
		buttonBackLineHeightUnits,
		buttonBackColorSwitcher,
		buttonBackTextColor,
		buttonBackTextHoverColor,
		buttonBackBgColorSwitcher,
		buttonBackBgColor,
		buttonBackBgHoverColor,

		// Padding
		flipButtonBackPaddingUnits,
		flipButtonBackDesktopPadding,
		flipButtonBackTabPadding,
		flipButtonBackMobilePadding,
		flipButtonBackPaddingLink,

		// Margin
		flipButtonBackMarginUnits,
		flipButtonBackDesktopMargin,
		flipButtonBackTabMargin,
		flipButtonBackMobileMargin,
		flipButtonBackMarginLink,

		// Border
		flipButtonBackBorderColorSwitcher,
		flipButtonBackBorder,
		flipButtonBackBorderColor,
		flipButtonBackHoverBorderColor,
		flipButtonBackBorderUnits,
		flipButtonBackDesktopBorderWidth,
		flipButtonBackTabBorderWidth,
		flipButtonBackMobileBorderWidth,
		flipButtonBackBorderLink,

		// Border Radius
		flipBtnBackBorderradiusUnits,
		flipBtnBackDesktopBorderradiusWidth,
		flipBtnBackTabBorderradiusWidth,
		flipBtnBackMobileBorderradiusWidth,
		btnBackBorderRadiusLink,

		// Padding
		mediaBackPaddingUnits,
		mediaBackPaddingDesktop,
		mediaBackPaddingTablet,
		mediaBackPaddingMobile,
		mediaBackPaddingLink,

		// Margin
		mediaBackMarginUnits,
		mediaBackMarginDesktop,
		mediaBackMarginTablet,
		mediaBackMarginMobile,
		mediaBackMarginLink,

		// Background
		mediaBackBgColorSwitcher,
		mediaBackBgColor,
		bgBackType,
		mediaBackBgHoverColor,

		// Border
		mediaBackBorder,
		mediaBackBorderColorSwitcher,
		mediaBackBorderColor,
		mediaBackBorderHoverColor,
		mediaBackBorderUnits,
		mediaBackBorderDesktop,
		mediaBackBorderTablet,
		mediaBackBorderMobile,
		mediaBackBorderLink,

		// Border Radius
		mediaBackBorderRadiusUnits,
		mediaBackBorderRadiusDesktop,
		mediaBackBorderRadiusTablet,
		mediaBackBorderRadiusMobile,
		mediaBackBorderRadiusLink,

		// Normal Background
		mediaBackBackgroundType,
		mediaBackClassicColor,
		mediaBackGradientColor,
		mediaBackCustomGradientSwitcher,
		mediaBackCustomGradientInputValue,
		mediaBackBackgroundColorStyle,
		mediaBackBackgroundImageUrl,
		mediaBackBackgroundImageAlt,
		mediaBackBackgroundImageID,
		mediaBackBackgroundImagePosition,
		mediaBackBackgroundImageAttachment,
		mediaBackBackgroundImageSize,
		mediaBackBackgroundImageRepeat,

		// Hover Background
		mediaBackHoverBackgroundType,
		mediaBackHoverClassicColor,
		mediaBackHoverGradientColor,
		mediaBackHoverCustomGradientSwitcher,
		mediaBackHoverCustomGradientInputValue,
		mediaBackHoverBackgroundColorStyle,
		mediaBackHoverBackgroundImageUrl,
		mediaBackHoverBackgroundImageAlt,
		mediaBackHoverBackgroundImageID,
		mediaBackHoverBackgroundImagePosition,
		mediaBackHoverBackgroundImageAttachment,
		mediaBackHoverBackgroundImageSize,
		mediaBackHoverBackgroundImageRepeat,

		mediaBackBgWidth,
		mediaBackBgHeight,
		mediaBackBgWidthUnits,
		mediaBackBgHeightUnits,

		mediaBackSize,
		mediaBackSizeDesktop,
		mediaBackSizeSizeTablet,
		mediaBackSizeSizeMobile,
		mediaBackSizeUnitsSave,
		mediaBackSizeUnits,
		mediaBackBgTypeImage,
		mediaBackIconColorSwitcher,
		mediaBackIconColor,
		mediaBackIconHoverColor,

		flipBoxBackWidth,
		flipBoxBackWidthUnits,
		flipBoxBackHeight,
		flipBoxBackHeightUnits,
		flipBoxBackColorSwitcher,
		flipBoxBackBackgroundType,
		flipBoxBackClassicColor,
		flipBoxBackGradientColor,
		flipBoxBackCustomGradientSwitcher,
		flipBoxBackCustomGradientInputValue,
		flipBoxBackBackgroundColorStyle,
		flipBoxBackBackgroundImageUrl,
		flipBoxBackBackgroundImageAlt,
		flipBoxBackBackgroundImageID,
		flipBoxBackBackgroundImagePosition,
		flipBoxBackBackgroundImageAttachment,
		flipBoxBackBackgroundImageSize,
		flipBoxBackBackgroundImageRepeat,
		flipBoxBackHoverBackgroundType,
		flipBoxBackHoverClassicColor,
		flipBoxBackHoverGradientColor,
		flipBoxBackHoverCustomGradientSwitcher,
		flipBoxBackHoverCustomGradientInputValue,
		flipBoxBackHoverBackgroundColorStyle,
		flipBoxBackHoverBackgroundImageUrl,
		flipBoxBackHoverBackgroundImageAlt,
		flipBoxBackHoverBackgroundImageID,
		flipBoxBackHoverBackgroundImagePosition,
		flipBoxBackHoverBackgroundImageAttachment,
		flipBoxBackHoverBackgroundImageSize,
		flipBoxBackHoverBackgroundImageRepeat,
		btnIconBack,
		frontendBtnIconBack,
		// Padding
		flipBoxFrontPaddingUnits,
		flipBoxFrontPaddingDesktop,
		flipBoxFrontPaddingTablet,
		flipBoxFrontPaddingMobile,
		flipBoxFrontPaddingLink,

		// Margin
		flipBoxFrontMarginUnits,
		flipBoxFrontMarginDesktop,
		flipBoxFrontMarginTablet,
		flipBoxFrontMarginMobile,
		flipBoxFrontMarginLink,

		// Border
		flipBoxFrontBorder,
		flipBoxFrontBorderColorSwitcher,
		flipBoxFrontBorderColor,
		flipBoxFrontBorderHoverColor,
		flipBoxFrontBorderUnits,
		flipBoxFrontBorderDesktop,
		flipBoxFrontBorderTablet,
		flipBoxFrontBorderMobile,
		flipBoxFrontBorderLink,

		// Border Radius
		flipBoxFrontBorderRadiusUnits,
		flipBoxFrontBorderRadiusDesktop,
		flipBoxFrontBorderRadiusTablet,
		flipBoxFrontBorderRadiusMobile,
		flipBoxFrontBorderRadiusLink,

		// Padding
		flipBoxBackPaddingUnits,
		flipBoxBackPaddingDesktop,
		flipBoxBackPaddingTablet,
		flipBoxBackPaddingMobile,
		flipBoxBackPaddingLink,

		// Margin
		flipBoxBackMarginUnits,
		flipBoxBackMarginDesktop,
		flipBoxBackMarginTablet,
		flipBoxBackMarginMobile,
		flipBoxBackMarginLink,

		// Border
		flipBoxBackBorder,
		flipBoxBackBorderColorSwitcher,
		flipBoxBackBorderColor,
		flipBoxBackBorderHoverColor,
		flipBoxBackBorderUnits,
		flipBoxBackBorderDesktop,
		flipBoxBackBorderTablet,
		flipBoxBackBorderMobile,
		flipBoxBackBorderLink,

		// Border Radius
		flipBoxBackBorderRadiusUnits,
		flipBoxBackBorderRadiusDesktop,
		flipBoxBackBorderRadiusTablet,
		flipBoxBackBorderRadiusMobile,
		flipBoxBackBorderRadiusLink,
		btnBackIconColor,
		btnBackIconSize,
		btnBackIconSizeUnits,
		btnBackIconHoverColor,
		buttonBackIconSwitcher,
		btnBackIconColorSwitcher,
		buttonBackIconRotateSwitcher,
		buttonBackIconRotate,
		buttonBackIconRotateHover,
		buttonIconRotateSwitcher,
		buttonIconRotate,
		buttonIconRotateHover,
		btnIconGap,
		btnIconGapUnits,
		btnBackIconGap,
		btnBackIconGapUnits,
		flipBoxAlignment,

		/** Start Dynamic Title Text */
		dynamicTitleEnabled,
		dynamicTitleSource,
		dynamicTitlePostId,
		dynamicTitlePostType,
		dynamicTitlePostLabel,
		dynamicTitleField,
		dynamicTitleFeaturedImageField,

		dynamicTitleDateType,
		dynamicTitleDateFormat,

		dynamicTitleTimeType,
		dynamicTitleTimeFormat,

		dynamicTitleCommentsZeroText,
		dynamicTitleCommentsOneText,
		dynamicTitleCommentsManyText,

		dynamicTitleTermsTaxonomy,
		dynamicTitleTermsSeparator,
		dynamicTitleEnableLink,
		dynamicTitleLinkSource,
		/** End Dynamic Title Text */

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

		/** Start Dynamic Btn One Text */
		dynamicBtnEnabled,
		dynamicBtnSource,
		dynamicBtnPostId,
		dynamicBtnPostType,
		dynamicBtnPostLabel,
		dynamicBtnField,
		dynamicBtnFeaturedImageField,

		dynamicBtnDateType,
		dynamicBtnDateFormat,

		dynamicBtnTimeType,
		dynamicBtnTimeFormat,

		dynamicBtnCommentsZeroText,
		dynamicBtnCommentsOneText,
		dynamicBtnCommentsManyText,

		dynamicBtnTermsTaxonomy,
		dynamicBtnTermsSeparator,
		dynamicBtnEnableLink,	
		dynamicBtnLinkSource,
		/** End Dynamic Btn Text */

		/** Start Dynamic Back Title Text */
		dynamicBackTitleEnabled,
		dynamicBackTitleSource,
		dynamicBackTitlePostId,
		dynamicBackTitlePostType,
		dynamicBackTitlePostLabel,
		dynamicBackTitleField,
		dynamicBackTitleFeaturedImageField,

		dynamicBackTitleDateType,
		dynamicBackTitleDateFormat,

		dynamicBackTitleTimeType,
		dynamicBackTitleTimeFormat,

		dynamicBackTitleCommentsZeroText,
		dynamicBackTitleCommentsOneText,
		dynamicBackTitleCommentsManyText,

		dynamicBackTitleTermsTaxonomy,
		dynamicBackTitleTermsSeparator,
		dynamicBackTitleEnableLink,
		dynamicBackTitleLinkSource,
		/** End Dynamic Back Title Text */

		/** Start Dynamic Back Description Text */
		dynamicBackDescriptionEnabled,
		dynamicBackDescriptionSource,
		dynamicBackDescriptionPostId,
		dynamicBackDescriptionPostType,
		dynamicBackDescriptionPostLabel,
		dynamicBackDescriptionField,
		dynamicBackDescriptionFeaturedImageField,

		dynamicBackDescriptionDateType,
		dynamicBackDescriptionDateFormat,

		dynamicBackDescriptionTimeType,
		dynamicBackDescriptionTimeFormat,

		dynamicBackDescriptionCommentsZeroText,
		dynamicBackDescriptionCommentsOneText,
		dynamicBackDescriptionCommentsManyText,

		dynamicBackDescriptionTermsTaxonomy,
		dynamicBackDescriptionTermsSeparator,
		dynamicBackDescriptionEnableLink,
		dynamicBackDescriptionLinkSource,
		/** End Dynamic Back Description Text */

		/** Start Dynamic Back btn Text */
		dynamicBackBtnEnabled,
		dynamicBackBtnSource,
		dynamicBackBtnPostId,
		dynamicBackBtnPostType,
		dynamicBackBtnPostLabel,
		dynamicBackBtnField,
		dynamicBackBtnFeaturedImageField,

		dynamicBackBtnDateType,
		dynamicBackBtnDateFormat,

		dynamicBackBtnTimeType,
		dynamicBackBtnTimeFormat,

		dynamicBackBtnCommentsZeroText,
		dynamicBackBtnCommentsOneText,
		dynamicBackBtnCommentsManyText,

		dynamicBackBtnTermsTaxonomy,
		dynamicBackBtnTermsSeparator,
		dynamicBackBtnEnableLink,	
		dynamicBackBtnLinkSource,
		/** End Dynamic Back btn Text */
	} = attributes;

    const getFlipTransform = (flipAnimationType) => {
		switch (flipAnimationType) {
			case "flip-left":
				return "rotateY(-180deg)";
			case "flip-right":
				return "rotateY(180deg)";
			case "flip-up":
				return "rotateX(180deg)";
			case "flip-down":
				return "rotateX(-180deg)";
			case "zoom-in":
				return "scale(1.1)";
			case "zoom-out":
				return "scale(0.8)";
			default:
				return "none";
		}
	};

    const headingPaddingDesktopWidthValue = `${Heading_Desktop_padding?.top}${Heading_padding_units?.Desktop} ${Heading_Desktop_padding?.right}${Heading_padding_units?.Desktop} ${Heading_Desktop_padding?.bottom}${Heading_padding_units?.Desktop} ${Heading_Desktop_padding?.left}${Heading_padding_units?.Desktop}`;
    const headingPaddingTabWidthValue = `${Heading_Tab_padding?.top}${Heading_padding_units?.Tablet} ${Heading_Tab_padding?.right}${Heading_padding_units?.Tablet} ${Heading_Tab_padding?.bottom}${Heading_padding_units?.Tablet} ${Heading_Tab_padding?.left}${Heading_padding_units?.Tablet}`;
    const headingPaddingMobileWidthValue = `${Heading_Mobile_padding?.top}${Heading_padding_units?.Mobile} ${Heading_Mobile_padding?.right}${Heading_padding_units?.Mobile} ${Heading_Mobile_padding?.bottom}${Heading_padding_units?.Mobile} ${Heading_Mobile_padding?.left}${Heading_padding_units?.Mobile}`;

    const headingMarginDesktopWidthValue = `${Heading_Desktop_Margin?.top}${Heading_Margin_Units?.Desktop} ${Heading_Desktop_Margin?.right}${Heading_Margin_Units?.Desktop} ${Heading_Desktop_Margin?.bottom}${Heading_Margin_Units?.Desktop} ${Heading_Desktop_Margin?.left}${Heading_Margin_Units?.Desktop}`;
	const headingMarginTabWidthValue = `${Heading_Tab_Margin?.top}${Heading_Margin_Units?.Tablet} ${Heading_Tab_Margin?.right}${Heading_Margin_Units?.Tablet} ${Heading_Tab_Margin?.bottom}${Heading_Margin_Units?.Tablet} ${Heading_Tab_Margin?.left}${Heading_Margin_Units?.Tablet}`;
	const headingMarginMobileWidthValue = `${Heading_Mobile_Margin?.top}${Heading_Margin_Units?.Mobile} ${Heading_Mobile_Margin?.right}${Heading_Margin_Units?.Mobile} ${Heading_Mobile_Margin?.bottom}${Heading_Margin_Units?.Mobile} ${Heading_Mobile_Margin?.left}${Heading_Margin_Units?.Mobile}`;

    const headingBorderDesktopWidthValue = `${Heading_Desktop_Border_Width?.top}${Heading_Border_units?.Desktop} ${Heading_Desktop_Border_Width?.right}${Heading_Border_units?.Desktop} ${Heading_Desktop_Border_Width?.bottom}${Heading_Border_units?.Desktop} ${Heading_Desktop_Border_Width?.left}${Heading_Border_units?.Desktop}`;
	const headingBorderTabWidthValue = `${Heading_Tab_Border_Width?.top}${Heading_Border_units?.Tablet} ${Heading_Tab_Border_Width?.right}${Heading_Border_units?.Tablet} ${Heading_Tab_Border_Width?.bottom}${Heading_Border_units?.Tablet} ${Heading_Tab_Border_Width?.left}${Heading_Border_units?.Tablet}`;
	const headingBorderMobileWidthValue = `${Heading_Mobile_Border_Width?.top}${Heading_Border_units?.Mobile} ${Heading_Mobile_Border_Width?.right}${Heading_Border_units?.Mobile} ${Heading_Mobile_Border_Width?.bottom}${Heading_Border_units?.Mobile} ${Heading_Mobile_Border_Width?.left}${Heading_Border_units?.Mobile}`;

    const headingBorderRadiusDesktopWidthValue = `${Heading_Desktop_Border_radius_Width?.top}${Heading_Border_radius_units?.Desktop} ${Heading_Desktop_Border_radius_Width?.right}${Heading_Border_radius_units?.Desktop} ${Heading_Desktop_Border_radius_Width?.bottom}${Heading_Border_radius_units?.Desktop} ${Heading_Desktop_Border_radius_Width?.left}${Heading_Border_radius_units?.Desktop}`;
    const headingBorderRadiusTabWidthValue = `${Heading_Tab_Border_radius_Width?.top}${Heading_Border_radius_units?.Tablet} ${Heading_Tab_Border_radius_Width?.right}${Heading_Border_radius_units?.Tablet} ${Heading_Tab_Border_radius_Width?.bottom}${Heading_Border_radius_units?.Tablet} ${Heading_Tab_Border_radius_Width?.left}${Heading_Border_radius_units?.Tablet}`;
    const headingBorderRadiusMobileWidthValue = `${Heading_Mobile_Border_radius_Width?.top}${Heading_Border_radius_units?.Mobile} ${Heading_Mobile_Border_radius_Width?.right}${Heading_Border_radius_units?.Mobile} ${Heading_Mobile_Border_radius_Width?.bottom}${Heading_Border_radius_units?.Mobile} ${Heading_Mobile_Border_radius_Width?.left}${Heading_Border_radius_units?.Mobile}`;

    const headingBackPaddingDesktopWidthValue = `${headingBack_Desktop_padding?.top}${headingBack_padding_units?.Desktop} ${headingBack_Desktop_padding?.right}${headingBack_padding_units?.Desktop} ${headingBack_Desktop_padding?.bottom}${headingBack_padding_units?.Desktop} ${headingBack_Desktop_padding?.left}${headingBack_padding_units?.Desktop}`;
    const headingBackPaddingTabWidthValue = `${headingBack_Tab_padding?.top}${headingBack_padding_units?.Tablet} ${headingBack_Tab_padding?.right}${headingBack_padding_units?.Tablet} ${headingBack_Tab_padding?.bottom}${headingBack_padding_units?.Tablet} ${headingBack_Tab_padding?.left}${headingBack_padding_units?.Tablet}`;
    const headingBackPaddingMobileWidthValue = `${headingBack_Mobile_padding?.top}${headingBack_padding_units?.Mobile} ${headingBack_Mobile_padding?.right}${headingBack_padding_units?.Mobile} ${headingBack_Mobile_padding?.bottom}${headingBack_padding_units?.Mobile} ${headingBack_Mobile_padding?.left}${headingBack_padding_units?.Mobile}`;

    const headingBackMarginDesktopWidthValue = `${headingBack_Desktop_Margin?.top}${headingBack_Margin_Units?.Desktop} ${headingBack_Desktop_Margin?.right}${headingBack_Margin_Units?.Desktop} ${headingBack_Desktop_Margin?.bottom}${headingBack_Margin_Units?.Desktop} ${headingBack_Desktop_Margin?.left}${headingBack_Margin_Units?.Desktop}`;
	const headingBackMarginTabWidthValue = `${headingBack_Tab_Margin?.top}${headingBack_Margin_Units?.Tablet} ${headingBack_Tab_Margin?.right}${headingBack_Margin_Units?.Tablet} ${headingBack_Tab_Margin?.bottom}${headingBack_Margin_Units?.Tablet} ${headingBack_Tab_Margin?.left}${headingBack_Margin_Units?.Tablet}`;
	const headingBackMarginMobileWidthValue = `${headingBack_Mobile_Margin?.top}${headingBack_Margin_Units?.Mobile} ${headingBack_Mobile_Margin?.right}${headingBack_Margin_Units?.Mobile} ${headingBack_Mobile_Margin?.bottom}${headingBack_Margin_Units?.Mobile} ${headingBack_Mobile_Margin?.left}${headingBack_Margin_Units?.Mobile}`;

    const headingBackBorderDesktopWidthValue = `${headingBack_Desktop_Border_Width?.top}${headingBack_Border_units?.Desktop} ${headingBack_Desktop_Border_Width?.right}${headingBack_Border_units?.Desktop} ${headingBack_Desktop_Border_Width?.bottom}${headingBack_Border_units?.Desktop} ${headingBack_Desktop_Border_Width?.left}${headingBack_Border_units?.Desktop}`;
    const headingBackBorderTabWidthValue = `${headingBack_Tab_Border_Width?.top}${headingBack_Border_units?.Tablet} ${headingBack_Tab_Border_Width?.right}${headingBack_Border_units?.Tablet} ${headingBack_Tab_Border_Width?.bottom}${headingBack_Border_units?.Tablet} ${headingBack_Tab_Border_Width?.left}${headingBack_Border_units?.Tablet}`;
    const headingBackBorderMobileWidthValue = `${headingBack_Mobile_Border_Width?.top}${headingBack_Border_units?.Mobile} ${headingBack_Mobile_Border_Width?.right}${headingBack_Border_units?.Mobile} ${headingBack_Mobile_Border_Width?.bottom}${headingBack_Border_units?.Mobile} ${headingBack_Mobile_Border_Width?.left}${headingBack_Border_units?.Mobile}`;

    const headingBackBorderRadiusDesktopWidthValue = `${headingBack_Desktop_Border_radius_Width?.top}${headingBack_Border_radius_units?.Desktop} ${headingBack_Desktop_Border_radius_Width?.right}${headingBack_Border_radius_units?.Desktop} ${headingBack_Desktop_Border_radius_Width?.bottom}${headingBack_Border_radius_units?.Desktop} ${headingBack_Desktop_Border_radius_Width?.left}${headingBack_Border_radius_units?.Desktop}`;
	const headingBackBorderRadiusTabWidthValue = `${headingBack_Tab_Border_radius_Width?.top}${headingBack_Border_radius_units?.Tablet} ${headingBack_Tab_Border_radius_Width?.right}${headingBack_Border_radius_units?.Tablet} ${headingBack_Tab_Border_radius_Width?.bottom}${headingBack_Border_radius_units?.Tablet} ${headingBack_Tab_Border_radius_Width?.left}${headingBack_Border_radius_units?.Tablet}`;
	const headingBackBorderRadiusMobileWidthValue = `${headingBack_Mobile_Border_radius_Width?.top}${headingBack_Border_radius_units?.Mobile} ${headingBack_Mobile_Border_radius_Width?.right}${headingBack_Border_radius_units?.Mobile} ${headingBack_Mobile_Border_radius_Width?.bottom}${headingBack_Border_radius_units?.Mobile} ${headingBack_Mobile_Border_radius_Width?.left}${headingBack_Border_radius_units?.Mobile}`;

    const subHeadingDesktopPaddingValue = `${SubHeadingDesktopPadding?.top}${SubHeadingPaddingUnits?.Desktop} ${SubHeadingDesktopPadding?.right}${SubHeadingPaddingUnits?.Desktop} ${SubHeadingDesktopPadding?.bottom}${SubHeadingPaddingUnits?.Desktop} ${SubHeadingDesktopPadding?.left}${SubHeadingPaddingUnits?.Desktop}`;
	const subHeadingTabPaddingValue = `${SubHeadingTabPadding?.top}${SubHeadingPaddingUnits?.Tablet} ${SubHeadingTabPadding?.right}${SubHeadingPaddingUnits?.Tablet} ${SubHeadingTabPadding?.bottom}${SubHeadingPaddingUnits?.Tablet} ${SubHeadingTabPadding?.left}${SubHeadingPaddingUnits?.Tablet}`;
	const subHeadingMobilePaddingValue = `${SubHeadingMobilePadding?.top}${SubHeadingPaddingUnits?.Mobile} ${SubHeadingMobilePadding?.right}${SubHeadingPaddingUnits?.Mobile} ${SubHeadingMobilePadding?.bottom}${SubHeadingPaddingUnits?.Mobile} ${SubHeadingMobilePadding?.left}${SubHeadingPaddingUnits?.Mobile}`;

    const descDesktopMarginValue = `${descDesktopMargin?.top}${descMarginUnits?.Desktop} ${descDesktopMargin?.right}${descMarginUnits?.Desktop} ${descDesktopMargin?.bottom}${descMarginUnits?.Desktop} ${descDesktopMargin?.left}${descMarginUnits?.Desktop}`;
	const descTabMarginValue = `${descTabMargin?.top}${descMarginUnits?.Tablet} ${descTabMargin?.right}${descMarginUnits?.Tablet} ${descTabMargin?.bottom}${descMarginUnits?.Tablet} ${descTabMargin?.left}${descMarginUnits?.Tablet}`;
	const descMobileMarginValue = `${descMobileMargin?.top}${descMarginUnits?.Mobile} ${descMobileMargin?.right}${descMarginUnits?.Mobile} ${descMobileMargin?.bottom}${descMarginUnits?.Mobile} ${descMobileMargin?.left}${descMarginUnits?.Mobile}`;

    const subHeadingBackDesktopPaddingValue = `${subHeadingBackDesktopPadding?.top}${subHeadingBackPaddingUnits?.Desktop} ${subHeadingBackDesktopPadding?.right}${subHeadingBackPaddingUnits?.Desktop} ${subHeadingBackDesktopPadding?.bottom}${subHeadingBackPaddingUnits?.Desktop} ${subHeadingBackDesktopPadding?.left}${subHeadingBackPaddingUnits?.Desktop}`;
	const subHeadingBackTabPaddingValue = `${subHeadingBackTabPadding?.top}${subHeadingBackPaddingUnits?.Tablet} ${subHeadingBackTabPadding?.right}${subHeadingBackPaddingUnits?.Tablet} ${subHeadingBackTabPadding?.bottom}${subHeadingBackPaddingUnits?.Tablet} ${subHeadingBackTabPadding?.left}${subHeadingBackPaddingUnits?.Tablet}`;
	const subHeadingBackMobilePaddingValue = `${subHeadingBackMobilePadding?.top}${subHeadingBackPaddingUnits?.Mobile} ${subHeadingBackMobilePadding?.right}${subHeadingBackPaddingUnits?.Mobile} ${subHeadingBackMobilePadding?.bottom}${subHeadingBackPaddingUnits?.Mobile} ${subHeadingBackMobilePadding?.left}${subHeadingBackPaddingUnits?.Mobile}`;

    const descBackDesktopMarginValue = `${descBackDesktopMargin?.top}${descBackMarginUnits?.Desktop} ${descBackDesktopMargin?.right}${descBackMarginUnits?.Desktop} ${descBackDesktopMargin?.bottom}${descBackMarginUnits?.Desktop} ${descBackDesktopMargin?.left}${descBackMarginUnits?.Desktop}`;
	const descBackTabMarginValue = `${descBackTabMargin?.top}${descBackMarginUnits?.Tablet} ${descBackTabMargin?.right}${descBackMarginUnits?.Tablet} ${descBackTabMargin?.bottom}${descBackMarginUnits?.Tablet} ${descBackTabMargin?.left}${descBackMarginUnits?.Tablet}`;
	const descBackMobileMarginValue = `${descBackMobileMargin?.top}${descBackMarginUnits?.Mobile} ${descBackMobileMargin?.right}${descBackMarginUnits?.Mobile} ${descBackMobileMargin?.bottom}${descBackMarginUnits?.Mobile} ${descBackMobileMargin?.left}${descBackMarginUnits?.Mobile}`;

    const buttonDesktopPaddingValue = `${flipButtonDesktopPadding?.top}${flipButtonPaddingUnits?.Desktop} ${flipButtonDesktopPadding?.right}${flipButtonPaddingUnits?.Desktop} ${flipButtonDesktopPadding?.bottom}${flipButtonPaddingUnits?.Desktop} ${flipButtonDesktopPadding?.left}${flipButtonPaddingUnits?.Desktop}`;
	const buttonTabPaddingValue = `${flipButtonTabPadding?.top}${flipButtonPaddingUnits?.Tablet} ${flipButtonTabPadding?.right}${flipButtonPaddingUnits?.Tablet} ${flipButtonTabPadding?.bottom}${flipButtonPaddingUnits?.Tablet} ${flipButtonTabPadding?.left}${flipButtonPaddingUnits?.Tablet}`;
	const buttonMobilePaddingValue = `${flipButtonMobilePadding?.top}${flipButtonPaddingUnits?.Mobile} ${flipButtonMobilePadding?.right}${flipButtonPaddingUnits?.Mobile} ${flipButtonMobilePadding?.bottom}${flipButtonPaddingUnits?.Mobile} ${flipButtonMobilePadding?.left}${flipButtonPaddingUnits?.Mobile}`;

    const buttonDesktopMarginValue = `${flipButtonDesktopMargin?.top}${flipButtonMarginUnits?.Desktop} ${flipButtonDesktopMargin?.right}${flipButtonMarginUnits?.Desktop} ${flipButtonDesktopMargin?.bottom}${flipButtonMarginUnits?.Desktop} ${flipButtonDesktopMargin?.left}${flipButtonMarginUnits?.Desktop}`;
	const buttonTabMarginValue = `${flipButtonTabMargin?.top}${flipButtonMarginUnits?.Tablet} ${flipButtonTabMargin?.right}${flipButtonMarginUnits?.Tablet} ${flipButtonTabMargin?.bottom}${flipButtonMarginUnits?.Tablet} ${flipButtonTabMargin?.left}${flipButtonMarginUnits?.Tablet}`;
	const buttonMobileMarginValue = `${flipButtonMobileMargin?.top}${flipButtonMarginUnits?.Mobile} ${flipButtonMobileMargin?.right}${flipButtonMarginUnits?.Mobile} ${flipButtonMobileMargin?.bottom}${flipButtonMarginUnits?.Mobile} ${flipButtonMobileMargin?.left}${flipButtonMarginUnits?.Mobile}`;

    const buttonDesktopBorderValue = `${flipButtonDesktopBorderWidth?.top}${flipButtonBorderUnits?.Desktop} ${flipButtonDesktopBorderWidth?.right}${flipButtonBorderUnits?.Desktop} ${flipButtonDesktopBorderWidth?.bottom}${flipButtonBorderUnits?.Desktop} ${flipButtonDesktopBorderWidth?.left}${flipButtonBorderUnits?.Desktop}`;
	const buttonTabBorderValue = `${flipButtonTabBorderWidth?.top}${flipButtonBorderUnits?.Tablet} ${flipButtonTabBorderWidth?.right}${flipButtonBorderUnits?.Tablet} ${flipButtonTabBorderWidth?.bottom}${flipButtonBorderUnits?.Tablet} ${flipButtonTabBorderWidth?.left}${flipButtonBorderUnits?.Tablet}`;
	const buttonMobileBorderValue = `${flipButtonMobileBorderWidth?.top}${flipButtonBorderUnits?.Mobile} ${flipButtonMobileBorderWidth?.right}${flipButtonBorderUnits?.Mobile} ${flipButtonMobileBorderWidth?.bottom}${flipButtonBorderUnits?.Mobile} ${flipButtonMobileBorderWidth?.left}${flipButtonBorderUnits?.Mobile}`;

    const buttonDesktopBorderRadiusValue = `${flipBtnDesktopBorderradiusWidth?.top}${flipBtnBorderradiusUnits?.Desktop} ${flipBtnDesktopBorderradiusWidth?.right}${flipBtnBorderradiusUnits?.Desktop} ${flipBtnDesktopBorderradiusWidth?.bottom}${flipBtnBorderradiusUnits?.Desktop} ${flipBtnDesktopBorderradiusWidth?.left}${flipBtnBorderradiusUnits?.Desktop}`;
	const buttonTabBorderRadiusValue = `${flipBtnTabBorderradiusWidth?.top}${flipBtnBorderradiusUnits?.Tablet} ${flipBtnTabBorderradiusWidth?.right}${flipBtnBorderradiusUnits?.Tablet} ${flipBtnTabBorderradiusWidth?.bottom}${flipBtnBorderradiusUnits?.Tablet} ${flipBtnTabBorderradiusWidth?.left}${flipBtnBorderradiusUnits?.Tablet}`;
	const buttonMobileBorderRadiusValue = `${flipBtnMobileBorderradiusWidth?.top}${flipBtnBorderradiusUnits?.Mobile} ${flipBtnMobileBorderradiusWidth?.right}${flipBtnBorderradiusUnits?.Mobile} ${flipBtnMobileBorderradiusWidth?.bottom}${flipBtnBorderradiusUnits?.Mobile} ${flipBtnMobileBorderradiusWidth?.left}${flipBtnBorderradiusUnits?.Mobile}`;

    const buttonBackDesktopPaddingValue = `${flipButtonBackDesktopPadding?.top}${flipButtonBackPaddingUnits?.Desktop} ${flipButtonBackDesktopPadding?.right}${flipButtonBackPaddingUnits?.Desktop} ${flipButtonBackDesktopPadding?.bottom}${flipButtonBackPaddingUnits?.Desktop} ${flipButtonBackDesktopPadding?.left}${flipButtonBackPaddingUnits?.Desktop}`;
	const buttonBackTabPaddingValue = `${flipButtonBackTabPadding?.top}${flipButtonBackPaddingUnits?.Tablet} ${flipButtonBackTabPadding?.right}${flipButtonBackPaddingUnits?.Tablet} ${flipButtonBackTabPadding?.bottom}${flipButtonBackPaddingUnits?.Tablet} ${flipButtonBackTabPadding?.left}${flipButtonBackPaddingUnits?.Tablet}`;
	const buttonBackMobilePaddingValue = `${flipButtonBackMobilePadding?.top}${flipButtonBackPaddingUnits?.Mobile} ${flipButtonBackMobilePadding?.right}${flipButtonBackPaddingUnits?.Mobile} ${flipButtonBackMobilePadding?.bottom}${flipButtonBackPaddingUnits?.Mobile} ${flipButtonBackMobilePadding?.left}${flipButtonBackPaddingUnits?.Mobile}`;

    const buttonBackDesktopMarginValue = `${flipButtonBackDesktopMargin?.top}${flipButtonBackMarginUnits?.Desktop} ${flipButtonBackDesktopMargin?.right}${flipButtonBackMarginUnits?.Desktop} ${flipButtonBackDesktopMargin?.bottom}${flipButtonBackMarginUnits?.Desktop} ${flipButtonBackDesktopMargin?.left}${flipButtonBackMarginUnits?.Desktop}`;
	const buttonBackTabMarginValue = `${flipButtonBackTabMargin?.top}${flipButtonBackMarginUnits?.Tablet} ${flipButtonBackTabMargin?.right}${flipButtonBackMarginUnits?.Tablet} ${flipButtonBackTabMargin?.bottom}${flipButtonBackMarginUnits?.Tablet} ${flipButtonBackTabMargin?.left}${flipButtonBackMarginUnits?.Tablet}`;
	const buttonBackMobileMarginValue = `${flipButtonBackMobileMargin?.top}${flipButtonBackMarginUnits?.Mobile} ${flipButtonBackMobileMargin?.right}${flipButtonBackMarginUnits?.Mobile} ${flipButtonBackMobileMargin?.bottom}${flipButtonBackMarginUnits?.Mobile} ${flipButtonBackMobileMargin?.left}${flipButtonBackMarginUnits?.Mobile}`;

    const buttonBackDesktopBorderValue = `${flipButtonBackDesktopBorderWidth?.top}${flipButtonBackBorderUnits?.Desktop} ${flipButtonBackDesktopBorderWidth?.right}${flipButtonBackBorderUnits?.Desktop} ${flipButtonBackDesktopBorderWidth?.bottom}${flipButtonBackBorderUnits?.Desktop} ${flipButtonBackDesktopBorderWidth?.left}${flipButtonBackBorderUnits?.Desktop}`;
	const buttonBackTabBorderValue = `${flipButtonBackTabBorderWidth?.top}${flipButtonBackBorderUnits?.Tablet} ${flipButtonBackTabBorderWidth?.right}${flipButtonBackBorderUnits?.Tablet} ${flipButtonBackTabBorderWidth?.bottom}${flipButtonBackBorderUnits?.Tablet} ${flipButtonBackTabBorderWidth?.left}${flipButtonBackBorderUnits?.Tablet}`;
	const buttonBackMobileBorderValue = `${flipButtonBackMobileBorderWidth?.top}${flipButtonBackBorderUnits?.Mobile} ${flipButtonBackMobileBorderWidth?.right}${flipButtonBackBorderUnits?.Mobile} ${flipButtonBackMobileBorderWidth?.bottom}${flipButtonBackBorderUnits?.Mobile} ${flipButtonBackMobileBorderWidth?.left}${flipButtonBackBorderUnits?.Mobile}`;

    const buttonBackDesktopBorderRadiusValue = `${flipBtnBackDesktopBorderradiusWidth?.top}${flipBtnBackBorderradiusUnits?.Desktop} ${flipBtnBackDesktopBorderradiusWidth?.right}${flipBtnBackBorderradiusUnits?.Desktop} ${flipBtnBackDesktopBorderradiusWidth?.bottom}${flipBtnBackBorderradiusUnits?.Desktop} ${flipBtnBackDesktopBorderradiusWidth?.left}${flipBtnBackBorderradiusUnits?.Desktop}`;
	const buttonBackTabBorderRadiusValue = `${flipBtnBackTabBorderradiusWidth?.top}${flipBtnBackBorderradiusUnits?.Tablet} ${flipBtnBackTabBorderradiusWidth?.right}${flipBtnBackBorderradiusUnits?.Tablet} ${flipBtnBackTabBorderradiusWidth?.bottom}${flipBtnBackBorderradiusUnits?.Tablet} ${flipBtnBackTabBorderradiusWidth?.left}${flipBtnBackBorderradiusUnits?.Tablet}`;
	const buttonBackMobileBorderRadiusValue = `${flipBtnBackMobileBorderradiusWidth?.top}${flipBtnBackBorderradiusUnits?.Mobile} ${flipBtnBackMobileBorderradiusWidth?.right}${flipBtnBackBorderradiusUnits?.Mobile} ${flipBtnBackMobileBorderradiusWidth?.bottom}${flipBtnBackBorderradiusUnits?.Mobile} ${flipBtnBackMobileBorderradiusWidth?.left}${flipBtnBackBorderradiusUnits?.Mobile}`;

    const DesktopPadding = `${globalPaddingDesktop?.top}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.right}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.bottom}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.left}${globalPaddingUnits?.Desktop}`;
	const TabletPadding = `${globalPaddingTablet?.top}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.right}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.bottom}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.left}${globalPaddingUnits?.Tablet}`;
	const MobilePadding = `${globalPaddingMobile?.top}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.right}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.bottom}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.left}${globalPaddingUnits?.Mobile}`;

    const DesktopMargin = `${globalMarginDesktop?.top}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.right}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.bottom}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.left}${globalMarginUnits?.Desktop}`;
	const TabletMargin = `${globalMarginTablet?.top}${globalMarginUnits?.Tablet} ${globalMarginTablet?.right}${globalMarginUnits?.Tablet} ${globalMarginTablet?.bottom}${globalMarginUnits?.Tablet} ${globalMarginTablet?.left}${globalMarginUnits?.Tablet}`;
	const MobileMargin = `${globalMarginMobile?.top}${globalMarginUnits?.Mobile} ${globalMarginMobile?.right}${globalMarginUnits?.Mobile} ${globalMarginMobile?.bottom}${globalMarginUnits?.Mobile} ${globalMarginMobile?.left}${globalMarginUnits?.Mobile}`;

    const BorderDesktopWidth = `${globalBorderDesktop?.top}${globalBorderUnits?.Desktop} ${globalBorderDesktop?.right}${globalBorderUnits?.Desktop} ${globalBorderDesktop?.bottom}${globalBorderUnits?.Desktop} ${globalBorderDesktop?.left}${globalBorderUnits?.Desktop}`;
	const BorderTabletWidth = `${globalBorderTablet?.top}${globalBorderUnits?.Tablet} ${globalBorderTablet?.right}${globalBorderUnits?.Tablet} ${globalBorderTablet?.bottom}${globalBorderUnits?.Tablet} ${globalBorderTablet?.left}${globalBorderUnits?.Tablet}`;
	const BorderMobileWidth = `${globalBorderMobile?.top}${globalBorderUnits?.Mobile} ${globalBorderMobile?.right}${globalBorderUnits?.Mobile} ${globalBorderMobile?.bottom}${globalBorderUnits?.Mobile} ${globalBorderMobile?.left}${globalBorderUnits?.Mobile}`;

    const BorderRadiusDesktopWidth = `${globalBorderRadiusDesktop?.top}${globalBorderRadiusUnits?.Desktop} ${globalBorderRadiusDesktop?.right}${globalBorderRadiusUnits?.Desktop} ${globalBorderRadiusDesktop?.bottom}${globalBorderRadiusUnits?.Desktop} ${globalBorderRadiusDesktop?.left}${globalBorderRadiusUnits?.Desktop}`;
	const BorderRadiusTabletWidth = `${globalBorderRadiusTablet?.top}${globalBorderRadiusUnits?.Tablet} ${globalBorderRadiusTablet?.right}${globalBorderRadiusUnits?.Tablet} ${globalBorderRadiusTablet?.bottom}${globalBorderRadiusUnits?.Tablet} ${globalBorderRadiusTablet?.left}${globalBorderRadiusUnits?.Tablet}`;
	const BorderRadiusMobileWidth = `${globalBorderRadiusMobile?.top}${globalBorderRadiusUnits?.Mobile} ${globalBorderRadiusMobile?.right}${globalBorderRadiusUnits?.Mobile} ${globalBorderRadiusMobile?.bottom}${globalBorderRadiusUnits?.Mobile} ${globalBorderRadiusMobile?.left}${globalBorderRadiusUnits?.Mobile}`;

    const mediaDesktopPadding = `${mediaPaddingDesktop?.top}${mediaPaddingUnits?.Desktop} ${mediaPaddingDesktop?.right}${mediaPaddingUnits?.Desktop} ${mediaPaddingDesktop?.bottom}${mediaPaddingUnits?.Desktop} ${mediaPaddingDesktop?.left}${mediaPaddingUnits?.Desktop}`;
	const mediaTabletPadding = `${mediaPaddingTablet?.top}${mediaPaddingUnits?.Tablet} ${mediaPaddingTablet?.right}${mediaPaddingUnits?.Tablet} ${mediaPaddingTablet?.bottom}${mediaPaddingUnits?.Tablet} ${mediaPaddingTablet?.left}${mediaPaddingUnits?.Tablet}`;
	const mediaMobilePadding = `${mediaPaddingMobile?.top}${mediaPaddingUnits?.Mobile} ${mediaPaddingMobile?.right}${mediaPaddingUnits?.Mobile} ${mediaPaddingMobile?.bottom}${mediaPaddingUnits?.Mobile} ${mediaPaddingMobile?.left}${mediaPaddingUnits?.Mobile}`;

    const mediaDesktopMargin = `${mediaMarginDesktop?.top}${mediaMarginUnits?.Desktop} ${mediaMarginDesktop?.right}${mediaMarginUnits?.Desktop} ${mediaMarginDesktop?.bottom}${mediaMarginUnits?.Desktop} ${mediaMarginDesktop?.left}${mediaMarginUnits?.Desktop}`;
	const mediaTabletMargin = `${mediaMarginTablet?.top}${mediaMarginUnits?.Tablet} ${mediaMarginTablet?.right}${mediaMarginUnits?.Tablet} ${mediaMarginTablet?.bottom}${mediaMarginUnits?.Tablet} ${mediaMarginTablet?.left}${mediaMarginUnits?.Tablet}`;
	const mediaMobileMargin = `${mediaMarginMobile?.top}${mediaMarginUnits?.Mobile} ${mediaMarginMobile?.right}${mediaMarginUnits?.Mobile} ${mediaMarginMobile?.bottom}${mediaMarginUnits?.Mobile} ${mediaMarginMobile?.left}${mediaMarginUnits?.Mobile}`;

    const mediaBorderDesktopWidth = `${mediaBorderDesktop?.top}${mediaBorderUnits?.Desktop} ${mediaBorderDesktop?.right}${mediaBorderUnits?.Desktop} ${mediaBorderDesktop?.bottom}${mediaBorderUnits?.Desktop} ${mediaBorderDesktop?.left}${mediaBorderUnits?.Desktop}`;
	const mediaBorderTabletWidth = `${mediaBorderTablet?.top}${mediaBorderUnits?.Tablet} ${mediaBorderTablet?.right}${mediaBorderUnits?.Tablet} ${mediaBorderTablet?.bottom}${mediaBorderUnits?.Tablet} ${mediaBorderTablet?.left}${mediaBorderUnits?.Tablet}`;
	const mediaBorderMobileWidth = `${mediaBorderMobile?.top}${mediaBorderUnits?.Mobile} ${mediaBorderMobile?.right}${mediaBorderUnits?.Mobile} ${mediaBorderMobile?.bottom}${mediaBorderUnits?.Mobile} ${mediaBorderMobile?.left}${mediaBorderUnits?.Mobile}`;

    const mediaBorderRadiusDesktopWidth = `${mediaBorderRadiusDesktop?.top}${mediaBorderRadiusUnits?.Desktop} ${mediaBorderRadiusDesktop?.right}${mediaBorderRadiusUnits?.Desktop} ${mediaBorderRadiusDesktop?.bottom}${mediaBorderRadiusUnits?.Desktop} ${mediaBorderRadiusDesktop?.left}${mediaBorderRadiusUnits?.Desktop}`;
	const mediaBorderRadiusTabletWidth = `${mediaBorderRadiusTablet?.top}${mediaBorderRadiusUnits?.Tablet} ${mediaBorderRadiusTablet?.right}${mediaBorderRadiusUnits?.Tablet} ${mediaBorderRadiusTablet?.bottom}${mediaBorderRadiusUnits?.Tablet} ${mediaBorderRadiusTablet?.left}${mediaBorderRadiusUnits?.Tablet}`;
	const mediaBorderRadiusMobileWidth = `${mediaBorderRadiusMobile?.top}${mediaBorderRadiusUnits?.Mobile} ${mediaBorderRadiusMobile?.right}${mediaBorderRadiusUnits?.Mobile} ${mediaBorderRadiusMobile?.bottom}${mediaBorderRadiusUnits?.Mobile} ${mediaBorderRadiusMobile?.left}${mediaBorderRadiusUnits?.Mobile}`;

    const mediaBackDesktopPadding = `${mediaBackPaddingDesktop?.top}${mediaBackPaddingUnits?.Desktop} ${mediaBackPaddingDesktop?.right}${mediaBackPaddingUnits?.Desktop} ${mediaBackPaddingDesktop?.bottom}${mediaBackPaddingUnits?.Desktop} ${mediaBackPaddingDesktop?.left}${mediaBackPaddingUnits?.Desktop}`;
	const mediaBackTabletPadding = `${mediaBackPaddingTablet?.top}${mediaBackPaddingUnits?.Tablet} ${mediaBackPaddingTablet?.right}${mediaBackPaddingUnits?.Tablet} ${mediaBackPaddingTablet?.bottom}${mediaBackPaddingUnits?.Tablet} ${mediaBackPaddingTablet?.left}${mediaBackPaddingUnits?.Tablet}`;
	const mediaBackMobilePadding = `${mediaBackPaddingMobile?.top}${mediaBackPaddingUnits?.Mobile} ${mediaBackPaddingMobile?.right}${mediaBackPaddingUnits?.Mobile} ${mediaBackPaddingMobile?.bottom}${mediaBackPaddingUnits?.Mobile} ${mediaBackPaddingMobile?.left}${mediaBackPaddingUnits?.Mobile}`;

    const mediaBackDesktopMargin = `${mediaBackMarginDesktop?.top}${mediaBackMarginUnits?.Desktop} ${mediaBackMarginDesktop?.right}${mediaBackMarginUnits?.Desktop} ${mediaBackMarginDesktop?.bottom}${mediaBackMarginUnits?.Desktop} ${mediaBackMarginDesktop?.left}${mediaBackMarginUnits?.Desktop}`;
	const mediaBackTabletMargin = `${mediaBackMarginTablet?.top}${mediaBackMarginUnits?.Tablet} ${mediaBackMarginTablet?.right}${mediaBackMarginUnits?.Tablet} ${mediaBackMarginTablet?.bottom}${mediaBackMarginUnits?.Tablet} ${mediaBackMarginTablet?.left}${mediaBackMarginUnits?.Tablet}`;
	const mediaBackMobileMargin = `${mediaBackMarginMobile?.top}${mediaBackMarginUnits?.Mobile} ${mediaBackMarginMobile?.right}${mediaBackMarginUnits?.Mobile} ${mediaBackMarginMobile?.bottom}${mediaBackMarginUnits?.Mobile} ${mediaBackMarginMobile?.left}${mediaBackMarginUnits?.Mobile}`;

    const mediaBackBorderDesktopWidth = `${mediaBackBorderDesktop?.top}${mediaBackBorderUnits?.Desktop} ${mediaBackBorderDesktop?.right}${mediaBackBorderUnits?.Desktop} ${mediaBackBorderDesktop?.bottom}${mediaBackBorderUnits?.Desktop} ${mediaBackBorderDesktop?.left}${mediaBackBorderUnits?.Desktop}`;
	const mediaBackBorderTabletWidth = `${mediaBackBorderTablet?.top}${mediaBackBorderUnits?.Tablet} ${mediaBackBorderTablet?.right}${mediaBackBorderUnits?.Tablet} ${mediaBackBorderTablet?.bottom}${mediaBackBorderUnits?.Tablet} ${mediaBackBorderTablet?.left}${mediaBackBorderUnits?.Tablet}`;
	const mediaBackBorderMobileWidth = `${mediaBackBorderMobile?.top}${mediaBackBorderUnits?.Mobile} ${mediaBackBorderMobile?.right}${mediaBackBorderUnits?.Mobile} ${mediaBackBorderMobile?.bottom}${mediaBackBorderUnits?.Mobile} ${mediaBackBorderMobile?.left}${mediaBackBorderUnits?.Mobile}`;

    const mediaBackBorderRadiusDesktopWidth = `${mediaBackBorderRadiusDesktop?.top}${mediaBackBorderRadiusUnits?.Desktop} ${mediaBackBorderRadiusDesktop?.right}${mediaBackBorderRadiusUnits?.Desktop} ${mediaBackBorderRadiusDesktop?.bottom}${mediaBackBorderRadiusUnits?.Desktop} ${mediaBackBorderRadiusDesktop?.left}${mediaBackBorderRadiusUnits?.Desktop}`;
	const mediaBackBorderRadiusTabletWidth = `${mediaBackBorderRadiusTablet?.top}${mediaBackBorderRadiusUnits?.Tablet} ${mediaBackBorderRadiusTablet?.right}${mediaBackBorderRadiusUnits?.Tablet} ${mediaBackBorderRadiusTablet?.bottom}${mediaBackBorderRadiusUnits?.Tablet} ${mediaBackBorderRadiusTablet?.left}${mediaBackBorderRadiusUnits?.Tablet}`;
	const mediaBackBorderRadiusMobileWidth = `${mediaBackBorderRadiusMobile?.top}${mediaBackBorderRadiusUnits?.Mobile} ${mediaBackBorderRadiusMobile?.right}${mediaBackBorderRadiusUnits?.Mobile} ${mediaBackBorderRadiusMobile?.bottom}${mediaBackBorderRadiusUnits?.Mobile} ${mediaBackBorderRadiusMobile?.left}${mediaBackBorderRadiusUnits?.Mobile}`;

    const flipBoxFrontDesktopPadding = `${flipBoxFrontPaddingDesktop?.top}${flipBoxFrontPaddingUnits?.Desktop} ${flipBoxFrontPaddingDesktop?.right}${flipBoxFrontPaddingUnits?.Desktop} ${flipBoxFrontPaddingDesktop?.bottom}${flipBoxFrontPaddingUnits?.Desktop} ${flipBoxFrontPaddingDesktop?.left}${flipBoxFrontPaddingUnits?.Desktop}`;
	const flipBoxFrontTabletPadding = `${flipBoxFrontPaddingTablet?.top}${flipBoxFrontPaddingUnits?.Tablet} ${flipBoxFrontPaddingTablet?.right}${flipBoxFrontPaddingUnits?.Tablet} ${flipBoxFrontPaddingTablet?.bottom}${flipBoxFrontPaddingUnits?.Tablet} ${flipBoxFrontPaddingTablet?.left}${flipBoxFrontPaddingUnits?.Tablet}`;
	const flipBoxFrontMobilePadding = `${flipBoxFrontPaddingMobile?.top}${flipBoxFrontPaddingUnits?.Mobile} ${flipBoxFrontPaddingMobile?.right}${flipBoxFrontPaddingUnits?.Mobile} ${flipBoxFrontPaddingMobile?.bottom}${flipBoxFrontPaddingUnits?.Mobile} ${flipBoxFrontPaddingMobile?.left}${flipBoxFrontPaddingUnits?.Mobile}`;

    const flipBoxFrontDesktopMargin = `${flipBoxFrontMarginDesktop?.top}${flipBoxFrontMarginUnits?.Desktop} ${flipBoxFrontMarginDesktop?.right}${flipBoxFrontMarginUnits?.Desktop} ${flipBoxFrontMarginDesktop?.bottom}${flipBoxFrontMarginUnits?.Desktop} ${flipBoxFrontMarginDesktop?.left}${flipBoxFrontMarginUnits?.Desktop}`;
	const flipBoxFrontTabletMargin = `${flipBoxFrontMarginTablet?.top}${flipBoxFrontMarginUnits?.Tablet} ${flipBoxFrontMarginTablet?.right}${flipBoxFrontMarginUnits?.Tablet} ${flipBoxFrontMarginTablet?.bottom}${flipBoxFrontMarginUnits?.Tablet} ${flipBoxFrontMarginTablet?.left}${flipBoxFrontMarginUnits?.Tablet}`;
	const flipBoxFrontMobileMargin = `${flipBoxFrontMarginMobile?.top}${flipBoxFrontMarginUnits?.Mobile} ${flipBoxFrontMarginMobile?.right}${flipBoxFrontMarginUnits?.Mobile} ${flipBoxFrontMarginMobile?.bottom}${flipBoxFrontMarginUnits?.Mobile} ${flipBoxFrontMarginMobile?.left}${flipBoxFrontMarginUnits?.Mobile}`;

    const flipBoxFrontBorderDesktopWidth = `${flipBoxFrontBorderDesktop?.top}${flipBoxFrontBorderUnits?.Desktop} ${flipBoxFrontBorderDesktop?.right}${flipBoxFrontBorderUnits?.Desktop} ${flipBoxFrontBorderDesktop?.bottom}${flipBoxFrontBorderUnits?.Desktop} ${flipBoxFrontBorderDesktop?.left}${flipBoxFrontBorderUnits?.Desktop}`;
	const flipBoxFrontBorderTabletWidth = `${flipBoxFrontBorderTablet?.top}${flipBoxFrontBorderUnits?.Tablet} ${flipBoxFrontBorderTablet?.right}${flipBoxFrontBorderUnits?.Tablet} ${flipBoxFrontBorderTablet?.bottom}${flipBoxFrontBorderUnits?.Tablet} ${flipBoxFrontBorderTablet?.left}${flipBoxFrontBorderUnits?.Tablet}`;
	const flipBoxFrontBorderMobileWidth = `${flipBoxFrontBorderMobile?.top}${flipBoxFrontBorderUnits?.Mobile} ${flipBoxFrontBorderMobile?.right}${flipBoxFrontBorderUnits?.Mobile} ${flipBoxFrontBorderMobile?.bottom}${flipBoxFrontBorderUnits?.Mobile} ${flipBoxFrontBorderMobile?.left}${flipBoxFrontBorderUnits?.Mobile}`;

    const flipBoxFrontBorderRadiusDesktopWidth = `${flipBoxFrontBorderRadiusDesktop?.top}${flipBoxFrontBorderRadiusUnits?.Desktop} ${flipBoxFrontBorderRadiusDesktop?.right}${flipBoxFrontBorderRadiusUnits?.Desktop} ${flipBoxFrontBorderRadiusDesktop?.bottom}${flipBoxFrontBorderRadiusUnits?.Desktop} ${flipBoxFrontBorderRadiusDesktop?.left}${flipBoxFrontBorderRadiusUnits?.Desktop}`;
	const flipBoxFrontBorderRadiusTabletWidth = `${flipBoxFrontBorderRadiusTablet?.top}${flipBoxFrontBorderRadiusUnits?.Tablet} ${flipBoxFrontBorderRadiusTablet?.right}${flipBoxFrontBorderRadiusUnits?.Tablet} ${flipBoxFrontBorderRadiusTablet?.bottom}${flipBoxFrontBorderRadiusUnits?.Tablet} ${flipBoxFrontBorderRadiusTablet?.left}${flipBoxFrontBorderRadiusUnits?.Tablet}`;
	const flipBoxFrontBorderRadiusMobileWidth = `${flipBoxFrontBorderRadiusMobile?.top}${flipBoxFrontBorderRadiusUnits?.Mobile} ${flipBoxFrontBorderRadiusMobile?.right}${flipBoxFrontBorderRadiusUnits?.Mobile} ${flipBoxFrontBorderRadiusMobile?.bottom}${flipBoxFrontBorderRadiusUnits?.Mobile} ${flipBoxFrontBorderRadiusMobile?.left}${flipBoxFrontBorderRadiusUnits?.Mobile}`;

    const flipBoxBackDesktopPadding = `${flipBoxBackPaddingDesktop?.top}${flipBoxBackPaddingUnits?.Desktop} ${flipBoxBackPaddingDesktop?.right}${flipBoxBackPaddingUnits?.Desktop} ${flipBoxBackPaddingDesktop?.bottom}${flipBoxBackPaddingUnits?.Desktop} ${flipBoxBackPaddingDesktop?.left}${flipBoxBackPaddingUnits?.Desktop}`;
	const flipBoxBackTabletPadding = `${flipBoxBackPaddingTablet?.top}${flipBoxBackPaddingUnits?.Tablet} ${flipBoxBackPaddingTablet?.right}${flipBoxBackPaddingUnits?.Tablet} ${flipBoxBackPaddingTablet?.bottom}${flipBoxBackPaddingUnits?.Tablet} ${flipBoxBackPaddingTablet?.left}${flipBoxBackPaddingUnits?.Tablet}`;
	const flipBoxBackMobilePadding = `${flipBoxBackPaddingMobile?.top}${flipBoxBackPaddingUnits?.Mobile} ${flipBoxBackPaddingMobile?.right}${flipBoxBackPaddingUnits?.Mobile} ${flipBoxBackPaddingMobile?.bottom}${flipBoxBackPaddingUnits?.Mobile} ${flipBoxBackPaddingMobile?.left}${flipBoxBackPaddingUnits?.Mobile}`;

    const flipBoxBackDesktopMargin = `${flipBoxBackMarginDesktop?.top}${flipBoxBackMarginUnits?.Desktop} ${flipBoxBackMarginDesktop?.right}${flipBoxBackMarginUnits?.Desktop} ${flipBoxBackMarginDesktop?.bottom}${flipBoxBackMarginUnits?.Desktop} ${flipBoxBackMarginDesktop?.left}${flipBoxBackMarginUnits?.Desktop}`;
	const flipBoxBackTabletMargin = `${flipBoxBackMarginTablet?.top}${flipBoxBackMarginUnits?.Tablet} ${flipBoxBackMarginTablet?.right}${flipBoxBackMarginUnits?.Tablet} ${flipBoxBackMarginTablet?.bottom}${flipBoxBackMarginUnits?.Tablet} ${flipBoxBackMarginTablet?.left}${flipBoxBackMarginUnits?.Tablet}`;
	const flipBoxBackMobileMargin = `${flipBoxBackMarginMobile?.top}${flipBoxBackMarginUnits?.Mobile} ${flipBoxBackMarginMobile?.right}${flipBoxBackMarginUnits?.Mobile} ${flipBoxBackMarginMobile?.bottom}${flipBoxBackMarginUnits?.Mobile} ${flipBoxBackMarginMobile?.left}${flipBoxBackMarginUnits?.Mobile}`;

    const flipBoxBackBorderDesktopWidth = `${flipBoxBackBorderDesktop?.top}${flipBoxBackBorderUnits?.Desktop} ${flipBoxBackBorderDesktop?.right}${flipBoxBackBorderUnits?.Desktop} ${flipBoxBackBorderDesktop?.bottom}${flipBoxBackBorderUnits?.Desktop} ${flipBoxBackBorderDesktop?.left}${flipBoxBackBorderUnits?.Desktop}`;
	const flipBoxBackBorderTabletWidth = `${flipBoxBackBorderTablet?.top}${flipBoxBackBorderUnits?.Tablet} ${flipBoxBackBorderTablet?.right}${flipBoxBackBorderUnits?.Tablet} ${flipBoxBackBorderTablet?.bottom}${flipBoxBackBorderUnits?.Tablet} ${flipBoxBackBorderTablet?.left}${flipBoxBackBorderUnits?.Tablet}`;
	const flipBoxBackBorderMobileWidth = `${flipBoxBackBorderMobile?.top}${flipBoxBackBorderUnits?.Mobile} ${flipBoxBackBorderMobile?.right}${flipBoxBackBorderUnits?.Mobile} ${flipBoxBackBorderMobile?.bottom}${flipBoxBackBorderUnits?.Mobile} ${flipBoxBackBorderMobile?.left}${flipBoxBackBorderUnits?.Mobile}`;

    const flipBoxBackBorderRadiusDesktopWidth = `${flipBoxBackBorderRadiusDesktop?.top}${flipBoxBackBorderRadiusUnits?.Desktop} ${flipBoxBackBorderRadiusDesktop?.right}${flipBoxBackBorderRadiusUnits?.Desktop} ${flipBoxBackBorderRadiusDesktop?.bottom}${flipBoxBackBorderRadiusUnits?.Desktop} ${flipBoxBackBorderRadiusDesktop?.left}${flipBoxBackBorderRadiusUnits?.Desktop}`;
    const flipBoxBackBorderRadiusTabletWidth = `${flipBoxBackBorderRadiusTablet?.top}${flipBoxBackBorderRadiusUnits?.Tablet} ${flipBoxBackBorderRadiusTablet?.right}${flipBoxBackBorderRadiusUnits?.Tablet} ${flipBoxBackBorderRadiusTablet?.bottom}${flipBoxBackBorderRadiusUnits?.Tablet} ${flipBoxBackBorderRadiusTablet?.left}${flipBoxBackBorderRadiusUnits?.Tablet}`;
    const flipBoxBackBorderRadiusMobileWidth = `${flipBoxBackBorderRadiusMobile?.top}${flipBoxBackBorderRadiusUnits?.Mobile} ${flipBoxBackBorderRadiusMobile?.right}${flipBoxBackBorderRadiusUnits?.Mobile} ${flipBoxBackBorderRadiusMobile?.bottom}${flipBoxBackBorderRadiusUnits?.Mobile} ${flipBoxBackBorderRadiusMobile?.left}${flipBoxBackBorderRadiusUnits?.Mobile}`;

    const fbflipBoxStyle = `
        .fb-flip-box-main-wrapper.${blockID} {
            width: 100%;
        }

        .fb-flip-box-main-wrapper.${blockID} .fb-flip-box-wrapper{
            ${flipBoxPositionType === 'default' ? `position: relative;` : ''}
            ${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' ? `width: 100%;` : ''}
            ${flipBoxPositionType !== 'default' ? `position: ${flipBoxPositionType};` : ''}
            ${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxHZOrientationType === 'left' && flipBoxHZLeftOffset?.Desktop ? `left: ${flipBoxHZLeftOffset?.Desktop}${flipBoxHZLeftOffsetUnits?.Desktop};` : ''}
            ${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxHZOrientationType === 'right' && flipBoxHZRightOffset?.Desktop ? `right: ${flipBoxHZRightOffset?.Desktop}${flipBoxHZRightOffsetUnits?.Desktop};` : ''}
            ${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxVROrientationType === 'top' && flipBoxVRTopOffset?.Desktop ? `top: ${flipBoxVRTopOffset?.Desktop}${flipBoxVRTopOffsetUnits?.Desktop};` : ''}
            ${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxVROrientationType === 'bottom' && flipBoxVRBottomOffset?.Desktop ? `bottom: ${flipBoxVRBottomOffset?.Desktop}${flipBoxVRBottomOffsetUnits?.Desktop};` : ''}
            ${globalZIndex?.Desktop ? `z-index: ${globalZIndex?.Desktop};` : ""}
            ${flipBoxOverflow !== 'default' ? `overflow: ${flipBoxOverflow};` : ''}
            ${globalBgColor ? `background-color: ${globalBgColor};` : ""}
            ${DesktopPadding && globalPaddingDesktop?.top ? `padding: ${DesktopPadding};` : ""}
            ${DesktopMargin && globalMarginDesktop?.top ? `margin: ${DesktopMargin};` : ""}
            ${globalBorder ? `border: ${globalBorder};` : ""}
            ${BorderDesktopWidth && globalBorderDesktop?.top ? `border-width: ${BorderDesktopWidth};` : ""}
            ${BorderRadiusDesktopWidth && globalBorderRadiusDesktop?.top ? `border-radius: ${BorderRadiusDesktopWidth};` : ""}
            ${globalBorderColor ? `border-color: ${globalBorderColor};` : ""}
            ${boxGlobalBoxShadowCssValue ? `box-shadow: ${boxGlobalBoxShadowCssValue};` : ""}
            display: flex;
            align-items: center;
            ${flipBoxAlignment?.Desktop ? `justify-content: ${flipBoxAlignment?.Desktop};` : ''}
        }
    
        .fb-flip-box-wrapper.${blockID}:hover .fb-flip-box-wrapper {
            ${globalBgHoverColor ? `background-color: ${globalBgHoverColor};` : ""}
            ${globalBorderHoverColor ? `border-color: ${globalBorderHoverColor};` : ""}
            ${boxGlobalHoverBoxShadowCssValue ? `box-shadow: ${boxGlobalHoverBoxShadowCssValue};` : ""}
            transition: all .3s ease-in-out;
        }

		.fb-flip-box-main-wrapper.${blockID} .fb-flip-box-wrapper .fb-flipbox-content-wrapper{
			${flipBoxAlignment?.Desktop ? `align-items: ${flipBoxAlignment?.Desktop};` : ''}
		}
    
        @media only screen and (max-width: 1024px) {
            .fb-flip-box-main-wrapper.${blockID} .fb-flip-box-wrapper{
				${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxHZOrientationType === 'left' && flipBoxHZLeftOffset?.Tablet ? `left: ${flipBoxHZLeftOffset?.Tablet}${flipBoxHZLeftOffsetUnits?.Tablet};` : ''}
				${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxHZOrientationType === 'right' && flipBoxHZRightOffset?.Tablet ? `right: ${flipBoxHZRightOffset?.Tablet}${flipBoxHZRightOffsetUnits?.Tablet};` : ''}
				${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxVROrientationType === 'top' && flipBoxVRTopOffset?.Tablet ? `top: ${flipBoxVRTopOffset?.Tablet}${flipBoxVRTopOffsetUnits?.Tablet};` : ''}
				${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxVROrientationType === 'bottom' && flipBoxVRBottomOffset?.Tablet ? `bottom: ${flipBoxVRBottomOffset?.Tablet}${flipBoxVRBottomOffsetUnits?.Tablet};` : ''}
				${globalZIndex?.Tablet ? `z-index: ${globalZIndex?.Tablet};` : ""}
				${flipBoxAlignment?.Tablet ? `justify-content: ${flipBoxAlignment?.Tablet};` : ''}
				${TabletPadding && globalPaddingTablet?.top ? `padding: ${TabletPadding};` : ""}
				${TabletMargin && globalMarginTablet?.top ? `margin: ${TabletMargin};` : ""}
				${BorderTabletWidth && globalBorderTablet?.top ? `border-width: ${BorderTabletWidth};` : ""}
				${BorderRadiusTabletWidth && globalBorderRadiusTablet?.top ? `border-radius: ${BorderRadiusTabletWidth};` : ""}
            }
			.fb-flip-box-main-wrapper.${blockID} .fb-flip-box-wrapper .fb-flipbox-content-wrapper{
				${flipBoxAlignment?.Tablet ? `align-items: ${flipBoxAlignment?.Tablet};` : ''}
			}
            
        }
    
        @media only screen and (max-width: 767px) {
            .fb-flip-box-main-wrapper.${blockID} {
            ${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxHZOrientationType === 'left' && flipBoxHZLeftOffset?.Mobile ? `left: ${flipBoxHZLeftOffset?.Mobile}${flipBoxHZLeftOffsetUnits?.Mobile};` : ''}
            ${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxHZOrientationType === 'right' && flipBoxHZRightOffset?.Mobile ? `right: ${flipBoxHZRightOffset?.Mobile}${flipBoxHZRightOffsetUnits?.Mobile};` : ''}
            ${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxVROrientationType === 'top' && flipBoxVRTopOffset?.Mobile ? `top: ${flipBoxVRTopOffset?.Mobile}${flipBoxVRTopOffsetUnits?.Mobile};` : ''}
            ${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxVROrientationType === 'bottom' && flipBoxVRBottomOffset?.Mobile ? `bottom: ${flipBoxVRBottomOffset?.Mobile}${flipBoxVRBottomOffsetUnits?.Mobile};` : ''} 
            ${globalZIndex?.Mobile ? `z-index: ${globalZIndex?.Mobile};` : ""}
            ${MobilePadding && globalPaddingMobile?.top ? `padding: ${MobilePadding};` : ""}
            ${MobileMargin && globalMarginMobile?.top ? `margin: ${MobileMargin};` : ""}
            ${BorderMobileWidth && globalBorderMobile?.top ? `border-width: ${BorderMobileWidth};` : ""}
            ${BorderRadiusMobileWidth && globalBorderRadiusMobile?.top ? `border-radius: ${BorderRadiusMobileWidth};` : ""}
            ${flipBoxAlignment?.Mobile ? `justify-content: ${flipBoxAlignment?.Mobile};` : ''}
            }
            
        }

        .fb-flip-box-main-wrapper.${blockID} .fb-flipper-wrapper{
            ${flipBoxFrontWidth?.Desktop ? `width: ${flipBoxFrontWidth?.Desktop}${flipBoxFrontWidthUnits?.Desktop};` : ''}
            ${flipBoxFrontHeight?.Desktop ? `min-height: ${flipBoxFrontHeight?.Desktop}${flipBoxFrontHeightUnits?.Desktop};` : ''}
            height: fit-content;
        }
        .fb-flip-box-main-wrapper.${blockID} .fb-flipper-wrapper.fb-show-back {
            transform:
                ${isHover || flipSelectedSide === "back" ? getFlipTransform(flipAnimationType) : "none"};
        }
        .fb-flip-box-wrapper.${blockID} .fb-flipbox-front {
            display: flex;
            align-items: center;
            ${flipBoxFrontWidth?.Desktop ? `min-width: ${flipBoxFrontWidth?.Desktop}${flipBoxFrontWidthUnits?.Desktop};` : ''}
            ${flipBoxFrontHeight?.Desktop ? `min-height: ${flipBoxFrontHeight?.Desktop}${flipBoxFrontHeightUnits?.Desktop};` : ''}
            height: auto;
            ${flipBoxFrontBackgroundType === "gradient" ? `
            background: ${flipBoxFrontCustomGradientSwitcher && flipBoxFrontCustomGradientInputValue ? flipBoxFrontCustomGradientInputValue : flipBoxFrontGradientColor};
            `
            : flipBoxFrontBackgroundImageUrl && flipBoxFrontBackgroundImageUrl !== "null" ? `
            ${flipBoxFrontBackgroundImageUrl ? `background: url(${flipBoxFrontBackgroundImageUrl});` : ""}
            ${flipBoxFrontBackgroundImagePosition ? `background-position: ${flipBoxFrontBackgroundImagePosition};` : ""}
            ${flipBoxFrontBackgroundImageAttachment ? `background-attachment: ${flipBoxFrontBackgroundImageAttachment};` : ""}
            ${flipBoxFrontBackgroundImageRepeat ? `background-repeat: ${flipBoxFrontBackgroundImageRepeat};` : ""}
            ${flipBoxFrontBackgroundImageSize ? `background-size: ${flipBoxFrontBackgroundImageSize};` : ""}`
                : flipBoxFrontClassicColor ? `background: ${flipBoxFrontClassicColor}; ` : ""}
            ${flipBoxFrontDesktopPadding && flipBoxFrontPaddingDesktop?.top ? `padding: ${flipBoxFrontDesktopPadding};` : ''}
            ${flipBoxFrontDesktopMargin && flipBoxFrontMarginDesktop?.top ? `margin: ${flipBoxFrontDesktopMargin};` : ''}
            ${flipBoxFrontBorder ? `border-style: ${flipBoxFrontBorder};` : ''}
            ${flipBoxFrontBorderDesktopWidth && flipBoxFrontBorderDesktop?.top ? `border-width: ${flipBoxFrontBorderDesktopWidth};` : ''}
            ${flipBoxFrontBorderColor ? `border-color: ${flipBoxFrontBorderColor};` : ''}
            ${flipBoxFrontBorderRadiusDesktop && flipBoxFrontBorderRadiusDesktop?.top ? `border-radius: ${flipBoxFrontBorderRadiusDesktopWidth};` : ''}
            background-repeat: none;
            background-size: cover;
            transition: all .3s ease-in-out; 
        }

        .fb-flip-box-wrapper.${blockID}:hover .fb-flipbox-front{
            ${flipBoxFrontHoverBackgroundType === "gradient" ? `
            background: ${flipBoxFrontHoverCustomGradientSwitcher && flipBoxFrontHoverCustomGradientInputValue ? flipBoxFrontHoverCustomGradientInputValue : flipBoxFrontHoverGradientColor};
            `
            : flipBoxFrontHoverBackgroundImageUrl && flipBoxFrontHoverBackgroundImageUrl !== "null" ? `
            ${flipBoxFrontHoverBackgroundImageUrl ? `background: url(${flipBoxFrontHoverBackgroundImageUrl});` : ""}
            ${flipBoxFrontHoverBackgroundImagePosition ? `background-position: ${flipBoxFrontHoverBackgroundImagePosition};` : ""}
            ${flipBoxFrontHoverBackgroundImageAttachment ? `background-attachment: ${flipBoxFrontHoverBackgroundImageAttachment};` : ""}
            ${flipBoxFrontHoverBackgroundImageRepeat ? `background-repeat: ${flipBoxFrontHoverBackgroundImageRepeat};` : ""}
            ${flipBoxFrontHoverBackgroundImageSize ? `background-size: ${flipBoxFrontHoverBackgroundImageSize};` : ""}`
                : flipBoxFrontHoverClassicColor ? `background: ${flipBoxFrontHoverClassicColor}; ` : ""}
            ${flipBoxFrontBorderHoverColor ? `border-color: ${flipBoxFrontBorderHoverColor};` : ''}
        }
        .fb-flip-box-wrapper.${blockID} .fb-flipbox-back {
        display: flex;
        align-items: center;
        ${flipBoxFrontWidth?.Desktop ? `width: ${flipBoxFrontWidth?.Desktop}${flipBoxFrontWidthUnits?.Desktop};` : ''}
        ${flipBoxFrontHeight?.Desktop ? `min-height: ${flipBoxFrontHeight?.Desktop}${flipBoxFrontHeightUnits?.Desktop};` : ''}
        height: auto;
        ${flipBoxBackBackgroundType === "gradient" ? `
        background: ${flipBoxBackCustomGradientSwitcher && flipBoxBackCustomGradientInputValue ? flipBoxBackCustomGradientInputValue : flipBoxBackGradientColor};
        `
            : flipBoxBackBackgroundImageUrl && flipBoxBackBackgroundImageUrl !== "null" ? `
        ${flipBoxBackBackgroundImageUrl ? `background: url(${flipBoxBackBackgroundImageUrl});` : ""}
        ${flipBoxBackBackgroundImagePosition ? `background-position: ${flipBoxBackBackgroundImagePosition};` : ""}
        ${flipBoxBackBackgroundImageAttachment ? `background-attachment: ${flipBoxBackBackgroundImageAttachment};` : ""}
        ${flipBoxBackBackgroundImageRepeat ? `background-repeat: ${flipBoxBackBackgroundImageRepeat};` : ""}
        ${flipBoxBackBackgroundImageSize ? `background-size: ${flipBoxBackBackgroundImageSize};` : ""}`
                : flipBoxBackClassicColor ? `background: ${flipBoxBackClassicColor}; ` : ""}
        ${flipBoxBackDesktopPadding && flipBoxBackPaddingDesktop?.top ? `padding: ${flipBoxBackDesktopPadding};` : ''}
        ${flipBoxBackDesktopMargin && flipBoxBackMarginDesktop?.top ? `margin: ${flipBoxBackDesktopMargin};` : ''}
        ${flipBoxBackBorder ? `border-style: ${flipBoxBackBorder};` : ''}
        ${flipBoxBackBorderDesktopWidth && flipBoxBackBorderDesktop?.top ? `border-width: ${flipBoxBackBorderDesktopWidth};` : ''}
        ${flipBoxBackBorderColor ? `border-color: ${flipBoxBackBorderColor};` : ''}
        ${flipBoxBackBorderRadiusDesktop && flipBoxBackBorderRadiusDesktop?.top ? `border-radius: ${flipBoxBackBorderRadiusDesktopWidth};` : ''}
        background-repeat: none;
        background-size: cover;
        transform:  ${(flipAnimationType === "flip-up" && "rotateX(-180deg)") ||
        (flipAnimationType === "flip-down" && "rotateX(180deg)") ||
        ((flipAnimationType === "zoom-in" ||
            flipAnimationType === "zoom-out" ||
            flipAnimationType === "fade") &&
            "none")
        };
        ${isHover && (flipAnimationType === "zoom-in" || flipAnimationType === "zoom-out")
            ? "z-index: 5;"
            : ""
        }
        transition: all .3s ease-in-out; 
        }
    
        ${(isHover || flipSelectedSide === "front") && flipAnimationType === "fade"
            ? `
        .fb-flip-box-wrapper.${blockID} .fb-flipper-wrapper.fb-show-back .fb-flipbox-front {
            opacity: 0;
        }
        `
            : ""
        }
        ${(isHover || flipSelectedSide === "back") && flipAnimationType === "fade"
            ? `
        .fb-flip-box-wrapper.${blockID} .fb-flipper-wrapper.fb-show-back .fb-flipbox-back {
            opacity: 1;
        }
        `
            : ""
        }
        .fb-flip-box-wrapper.${blockID} .fb-flip-box-wrapper-inner {
			${flipIconPosition === 'top' ? 'flex-direction: column;' : ''}
			${flipIconPosition === 'bottom' ? 'flex-direction: column-reverse;' : ''}
			${flipIconPosition === 'left' ? 'flex-direction: row;' : ''}
			${flipIconPosition === 'right' ? 'flex-direction: row-reverse;' : ''}
			${flipIconPosition !== 'top' || flipIconPosition !== 'bottom' ? `justify-content: ${flipCardAlignment};` : ''}
        }
        .fb-flip-box-wrapper.${blockID} .fb-flipbox-content-wrapper .fb-flip-media-container {
        	${mediaAlignmentFront ? `justify-content: ${mediaAlignmentFront};` : ''}
        }
        .fb-flip-box-wrapper.${blockID} .fb-flipbox-content-wrapper .fb-flip-back-media-container {
        	${mediaAlignmentBack ? `justify-content: ${mediaAlignmentBack};` : ''}
        }
    
        .fb-flip-box-wrapper.${blockID} .fb-flip-box-content-wrapper .fb-heading {
            ${Heading_Color ? `color: ${Heading_Color};` : ""}
            ${Heading_Background_Color ? `background-color: ${Heading_Background_Color};` : ""}

            ${headingGlobalTypoSwitcher?.fontFamily === true && headingGlobalTypographyData?.fontFamily ? `font-family: ${headingGlobalTypographyData?.fontFamily};` : ''}
            ${headingGlobalTypoSwitcher?.fontSize === true && headingGlobalTypographyData?.fontSize ? `font-size: ${headingGlobalTypographyData?.fontSize};` : ''}
            ${headingGlobalTypoSwitcher?.fontWeight === true && headingGlobalTypographyData?.fontWeight ? `font-weight: ${headingGlobalTypographyData?.fontWeight};` : ''}
            ${headingGlobalTypoSwitcher?.fontStyle === true && headingGlobalTypographyData?.fontStyle ? `font-style: ${headingGlobalTypographyData?.fontStyle};` : ''}
            ${headingGlobalTypoSwitcher?.textTransform === true && headingGlobalTypographyData?.textTransform ? `text-transform: ${headingGlobalTypographyData?.textTransform};` : ''}
            ${headingGlobalTypoSwitcher?.textDecoration === true && headingGlobalTypographyData?.textDecoration ? `text-decoration: ${headingGlobalTypographyData?.textDecoration};` : ''}
            ${headingGlobalTypoSwitcher?.letterSpacing === true && headingGlobalTypographyData?.letterSpacing ? `letter-spacing: ${headingGlobalTypographyData?.letterSpacing};` : ''}
            ${headingGlobalTypoSwitcher?.lineHeight === true && headingGlobalTypographyData?.lineHeight ? `line-height: ${headingGlobalTypographyData?.lineHeight};` : ''}

            ${headingGlobalTypoSwitcher?.fontFamily === false && headingFontFamily && headingFontFamily !== "Default" ? `font-family: ${headingFontFamily};` : ''}
            ${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Desktop && headingFontSizeUnits?.Desktop ? `font-size: ${headingFontSize?.Desktop}${headingFontSizeUnits?.Desktop};` : ''}
            ${headingGlobalTypoSwitcher?.fontWeight === false && headingFontWeight ? `font-weight: ${headingFontWeight};` : ''}
            ${headingGlobalTypoSwitcher?.fontStyle === false && headingFontStyle ? `font-style: ${headingFontStyle};` : ''}
            ${headingGlobalTypoSwitcher?.textTransform === false && headingTextTransform ? `text-transform: ${headingTextTransform};` : ''}
            ${headingGlobalTypoSwitcher?.textDecoration === false && headingTextDecoration ? `text-decoration: ${headingTextDecoration};` : ''}
            ${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Desktop && headingLetterSpacingUnits?.Desktop ? `letter-spacing: ${headingLetterSpacing?.Desktop}${headingLetterSpacingUnits?.Desktop};` : ''}
            ${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Desktop && headingLineHeightUnits?.Desktop ? `line-height: ${headingLineHeight?.Desktop}${headingLineHeightUnits?.Desktop};` : ''}
            ${headingPaddingDesktopWidthValue && Heading_Desktop_padding?.top ? `padding: ${headingPaddingDesktopWidthValue};` : ''}
            ${headingMarginDesktopWidthValue && Heading_Desktop_Margin?.top ? `margin: ${headingMarginDesktopWidthValue};` : ''}
            ${Heading_Border ? `border-style: ${Heading_Border};` : ''}
            ${headingBorderDesktopWidthValue && Heading_Desktop_Border_Width?.top ? `border-width: ${headingBorderDesktopWidthValue};` : ''}
            ${Heading_Border_Color ? `border-color: ${Heading_Border_Color};` : ''}
            ${headingBorderRadiusDesktopWidthValue && Heading_Desktop_Border_radius_Width?.top ? `border-radius: ${headingBorderRadiusDesktopWidthValue};` : ''}
            ${Alignment ? `text-align: ${Alignment};` : ''}
            transition: all .3s ease-in-out;
        }
    
        .fb-flip-box-wrapper.${blockID}:hover .fb-flip-box-content-wrapper .fb-heading {
            ${Heading_Hover_Color ? `color: ${Heading_Hover_Color};` : ""}
            ${Heading_Border_Hover_Color ? `border-color: ${Heading_Border_Hover_Color};` : ""}
            transition: all .3s ease-in-out;
        }
    
        .fb-flip-box-wrapper.${blockID} .fb-flip-back-box-content-wrapper .fb-heading {
        ${titleAlignmentBack ? `text-align: ${titleAlignmentBack};` : ''}
        ${headingBackColor ? `color: ${headingBackColor};` : ""}

        ${headingBackGlobalTypoSwitcher?.fontFamily === true && headingBackGlobalTypographyData?.fontFamily ? `font-family: ${headingBackGlobalTypographyData?.fontFamily};` : ''}
        ${headingBackGlobalTypoSwitcher?.fontSize === true && headingBackGlobalTypographyData?.fontSize ? `font-size: ${headingBackGlobalTypographyData?.fontSize};` : ''}
        ${headingBackGlobalTypoSwitcher?.fontWeight === true && headingBackGlobalTypographyData?.fontWeight ? `font-weight: ${headingBackGlobalTypographyData?.fontWeight};` : ''}
        ${headingBackGlobalTypoSwitcher?.fontStyle === true && headingBackGlobalTypographyData?.fontStyle ? `font-style: ${headingBackGlobalTypographyData?.fontStyle};` : ''}
        ${headingBackGlobalTypoSwitcher?.textTransform === true && headingBackGlobalTypographyData?.textTransform ? `text-transform: ${headingBackGlobalTypographyData?.textTransform};` : ''}
        ${headingBackGlobalTypoSwitcher?.textDecoration === true && headingBackGlobalTypographyData?.textDecoration ? `text-decoration: ${headingBackGlobalTypographyData?.textDecoration};` : ''}
        ${headingBackGlobalTypoSwitcher?.letterSpacing === true && headingBackGlobalTypographyData?.letterSpacing ? `letter-spacing: ${headingBackGlobalTypographyData?.letterSpacing};` : ''}
        ${headingBackGlobalTypoSwitcher?.lineHeight === true && headingBackGlobalTypographyData?.lineHeight ? `line-height: ${headingBackGlobalTypographyData?.lineHeight};` : ''}

        ${headingBackGlobalTypoSwitcher?.fontFamily === false && headingBackFontFamily && headingBackFontFamily !== "Default" ? `font-family: ${headingBackFontFamily};` : ''}
        ${headingBackGlobalTypoSwitcher?.fontSize === false && headingBackFontSize?.Desktop && headingBackFontSizeUnits?.Desktop ? `font-size: ${headingBackFontSize?.Desktop}${headingBackFontSizeUnits?.Desktop};` : ''}
        ${headingBackGlobalTypoSwitcher?.fontWeight === false && headingBackFontWeight ? `font-weight: ${headingBackFontWeight};` : ''}
        ${headingBackGlobalTypoSwitcher?.fontStyle === false && headingBackFontStyle ? `font-style: ${headingBackFontStyle};` : ''}
        ${headingBackGlobalTypoSwitcher?.textTransform === false && headingBackTextTransform ? `text-transform: ${headingBackTextTransform};` : ''}
        ${headingBackGlobalTypoSwitcher?.textDecoration === false && headingBackTextDecoration ? `text-decoration: ${headingBackTextDecoration};` : ''}
        ${headingBackGlobalTypoSwitcher?.letterSpacing === false && headingBackLetterSpacing?.Desktop && headingBackLetterSpacingUnits?.Desktop ? `letter-spacing: ${headingBackLetterSpacing?.Desktop}${headingBackLetterSpacingUnits?.Desktop};` : ''}
        ${headingBackGlobalTypoSwitcher?.lineHeight === false && headingBackLineHeight?.Desktop && headingBackLineHeightUnits?.Desktop ? `line-height: ${headingBackLineHeight?.Desktop}${headingBackLineHeightUnits?.Desktop};` : ''}

        ${headingBackPaddingDesktopWidthValue && headingBack_Desktop_padding?.top ? `padding: ${headingBackPaddingDesktopWidthValue};` : ''}
        ${headingBackMarginDesktopWidthValue && headingBack_Desktop_Margin?.top ? `margin: ${headingBackMarginDesktopWidthValue};` : ''}
        ${headingBack_Border ? `border-style: ${headingBack_Border};` : ''}
        ${headingBackBorderDesktopWidthValue && headingBack_Desktop_Border_Width?.top ? `border-width: ${headingBackBorderDesktopWidthValue};` : ''}
        ${headingBack_Border_Color ? `border-color: ${headingBack_Border_Color};` : ''}
        ${headingBackBorderRadiusDesktopWidthValue && headingBack_Desktop_Border_radius_Width?.top ? `border-radius: ${headingBackBorderRadiusDesktopWidthValue};` : ''}
        }

        .fb-flip-box-wrapper.${blockID}:hover .fb-flip-back-box-content-wrapper .fb-heading{
        ${headingBackHoverColor ? `color: ${headingBackHoverColor};` : ""}
        ${headingBack_Border_Hover_Color ? `border-color: ${headingBack_Border_Hover_Color};` : ''}
        }
    @media only screen and (max-width: 1024px) {
        .fb-flip-box-wrapper.${blockID} .fb-flip-box-content-wrapper .fb-heading {
            ${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Tablet && headingFontSizeUnits?.Tablet ? `font-size: ${headingFontSize?.Tablet}${headingFontSizeUnits?.Tablet};` : ''}
            ${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Tablet && headingLetterSpacingUnits?.Tablet ? `letter-spacing: ${headingLetterSpacing?.Tablet}${headingLetterSpacingUnits?.Tablet};` : ''}
            ${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Tablet && headingLineHeightUnits?.Tablet ? `line-height: ${headingLineHeight?.Tablet}${headingLineHeightUnits?.Tablet};` : ''}
            ${headingPaddingTabWidthValue && Heading_Tab_padding?.top ? `padding: ${headingPaddingTabWidthValue};` : ''}
            ${headingMarginTabWidthValue && Heading_Tab_Margin?.top ? `margin: ${headingMarginTabWidthValue};` : ''}
            ${headingBorderTabWidthValue && Heading_Tab_Border_Width?.top ? `border-width: ${headingBorderTabWidthValue};` : ''}
            ${headingBorderRadiusTabWidthValue && Heading_Tab_Border_radius_Width?.top ? `border-radius: ${headingBorderRadiusTabWidthValue};` : ''}
        }
        .fb-flip-box-wrapper.${blockID} .fb-flip-back-box-content-wrapper .fb-heading{
            ${headingBackGlobalTypoSwitcher?.fontSize === false && headingBackFontSize?.Tablet && headingBackFontSizeUnits?.Tablet ? `font-size: ${headingBackFontSize?.Tablet}${headingBackFontSizeUnits?.Tablet};` : ''}
            ${headingBackGlobalTypoSwitcher?.letterSpacing === false && headingBackLetterSpacing?.Tablet && headingBackLetterSpacingUnits?.Tablet ? `letter-spacing: ${headingBackLetterSpacing?.Tablet}${headingBackLetterSpacingUnits?.Tablet};` : ''}
            ${headingBackGlobalTypoSwitcher?.lineHeight === false && headingBackLineHeight?.Tablet && headingBackLineHeightUnits?.Tablet ? `line-height: ${headingBackLineHeight?.Tablet}${headingBackLineHeightUnits?.Tablet};` : ''}
            ${headingBackPaddingTabWidthValue && headingBack_Tab_padding?.top ? `padding: ${headingBackPaddingTabWidthValue};` : ''}
            ${headingBackMarginTabWidthValue && headingBack_Tab_Margin?.top ? `margin: ${headingBackMarginTabWidthValue};` : ''}
            ${headingBackBorderTabWidthValue && headingBack_Tab_Border_Width?.top ? `border-width: ${headingBackBorderTabWidthValue};` : ''}
            ${headingBackBorderRadiusTabWidthValue && headingBack_Tab_Border_radius_Width?.top ? `border-radius: ${headingBackBorderRadiusTabWidthValue};` : ''}
        }

        .fb-flip-box-main-wrapper.${blockID} .fb-flipper-wrapper{
            ${flipBoxFrontWidth?.Tablet ? `width: ${flipBoxFrontWidth?.Tablet}${flipBoxFrontWidthUnits?.Tablet};` : ''}
            ${flipBoxFrontHeight?.Tablet ? `min-height: ${flipBoxFrontHeight?.Tablet}${flipBoxFrontHeightUnits?.Tablet};` : ''}
            height: fit-content;
        }

        .fb-flip-box-wrapper.${blockID} .fb-flipbox-front {
            display: flex;
            align-items: center;
            ${flipBoxFrontWidth?.Tablet ? `width: ${flipBoxFrontWidth?.Tablet}${flipBoxFrontWidthUnits?.Tablet};` : ''}
            ${flipBoxFrontHeight?.Tablet ? `min-height: ${flipBoxFrontHeight?.Tablet}${flipBoxFrontHeightUnits?.Tablet};` : ''}
            ${flipBoxFrontTabletPadding && flipBoxFrontPaddingTablet?.top ? `padding: ${flipBoxFrontTabletPadding};` : ''}
            ${flipBoxFrontTabletMargin && flipBoxFrontMarginTablet?.top ? `margin: ${flipBoxFrontTabletMargin};` : ''}
            ${flipBoxFrontBorderTabletWidth && flipBoxFrontBorderTablet?.top ? `border-width: ${flipBoxFrontBorderTabletWidth};` : ''}
            ${flipBoxFrontBorderRadiusTablet && flipBoxFrontBorderRadiusTablet?.top ? `border-radius: ${flipBoxFrontBorderRadiusTabletWidth};` : ''}
        }

        .fb-flip-box-wrapper.${blockID} .fb-flipbox-back {
            display: flex;
            align-items: center;
            ${flipBoxFrontWidth?.Tablet ? `width: ${flipBoxFrontWidth?.Tablet}${flipBoxFrontWidthUnits?.Tablet};` : ''}
            ${flipBoxFrontHeight?.Tablet ? `min-height: ${flipBoxFrontHeight?.Tablet}${flipBoxFrontHeightUnits?.Tablet};` : ''}
            ${flipBoxBackTabletPadding && flipBoxBackPaddingTablet?.top ? `padding: ${flipBoxBackTabletPadding};` : ''}
            ${flipBoxBackTabletMargin && flipBoxBackMarginTablet?.top ? `margin: ${flipBoxBackTabletMargin};` : ''}
            ${flipBoxBackBorderTabletWidth && flipBoxBackBorderTablet?.top ? `border-width: ${flipBoxBackBorderTabletWidth};` : ''}
            ${flipBoxBackBorderRadiusTablet && flipBoxBackBorderRadiusTablet?.top ? `border-radius: ${flipBoxBackBorderRadiusTabletWidth};` : ''}		
        }
    }
    @media only screen and (max-width: 724px) {
        .fb-flip-box-wrapper.${blockID} .fb-flip-box-content-wrapper .fb-heading {
            ${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Mobile && headingFontSizeUnits?.Mobile ? `font-size: ${headingFontSize?.Mobile}${headingFontSizeUnits?.Mobile};` : ''}
            ${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Mobile && headingLetterSpacingUnits?.Mobile ? `letter-spacing: ${headingLetterSpacing?.Mobile}${headingLetterSpacingUnits?.Mobile};` : ''}
            ${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Mobile && headingLineHeightUnits?.Mobile ? `line-height: ${headingLineHeight?.Mobile}${headingLineHeightUnits?.Mobile};` : ''}
            ${headingPaddingMobileWidthValue && Heading_Mobile_padding?.top ? `padding: ${headingPaddingMobileWidthValue};` : ''}
            ${headingMarginMobileWidthValue && Heading_Mobile_Margin?.top ? `margin: ${headingMarginMobileWidthValue};` : ''}
            ${headingBorderMobileWidthValue && Heading_Mobile_Border_Width?.top ? `border-width: ${headingBorderMobileWidthValue};` : ''}
            ${headingBorderRadiusMobileWidthValue && Heading_Mobile_Border_radius_Width?.top ? `border-radius: ${headingBorderRadiusMobileWidthValue};` : ''}
        }
        
        .fb-flip-box-wrapper.${blockID} .fb-flip-back-box-content-wrapper .fb-heading{
            ${headingBackGlobalTypoSwitcher?.fontSize === false && headingBackFontSize?.Mobile && headingBackFontSizeUnits?.Mobile ? `font-size: ${headingBackFontSize?.Mobile}${headingBackFontSizeUnits?.Mobile};` : ''}
            ${headingBackGlobalTypoSwitcher?.letterSpacing === false && headingBackLetterSpacing?.Mobile && headingBackLetterSpacingUnits?.Mobile ? `letter-spacing: ${headingBackLetterSpacing?.Mobile}${headingBackLetterSpacingUnits?.Mobile};` : ''}
            ${headingBackGlobalTypoSwitcher?.lineHeight === false && headingBackLineHeight?.Mobile && headingBackLineHeightUnits?.Mobile ? `line-height: ${headingBackLineHeight?.Mobile}${headingBackLineHeightUnits?.Mobile};` : ''}
            ${headingBackPaddingMobileWidthValue && headingBack_Mobile_padding?.top ? `padding: ${headingBackPaddingMobileWidthValue};` : ''}
            ${headingBackMarginMobileWidthValue && headingBack_Mobile_Margin?.top ? `margin: ${headingBackMarginMobileWidthValue};` : ''}
            ${headingBackBorderMobileWidthValue && headingBack_Mobile_Border_Width?.top ? `border-width: ${headingBackBorderMobileWidthValue};` : ''}
            ${headingBackBorderRadiusMobileWidthValue && headingBack_Mobile_Border_radius_Width?.top ? `border-radius: ${headingBackBorderRadiusMobileWidthValue};` : ''}
        }

        .fb-flip-box-main-wrapper.${blockID} .fb-flipper-wrapper{
            ${flipBoxFrontWidth?.Mobile ? `width: ${flipBoxFrontWidth?.Mobile}${flipBoxFrontWidthUnits?.Mobile};` : ''}
            ${flipBoxFrontHeight?.Mobile ? `min-height: ${flipBoxFrontHeight?.Mobile}${flipBoxFrontHeightUnits?.Mobile};` : ''}
            height: fit-content;
        }

        .fb-flip-box-wrapper.${blockID} .fb-flipbox-front {
            display: flex;
            align-items: center;
            ${flipBoxFrontWidth?.Mobile ? `width: ${flipBoxFrontWidth?.Mobile}${flipBoxFrontWidthUnits?.Mobile};` : ''}
            ${flipBoxFrontHeight?.Mobile ? `min-height: ${flipBoxFrontHeight?.Mobile}${flipBoxFrontHeightUnits?.Mobile};` : ''}
            ${flipBoxFrontMobilePadding && flipBoxFrontPaddingMobile?.top ? `padding: ${flipBoxFrontMobilePadding};` : ''}
            ${flipBoxFrontMobileMargin && flipBoxFrontMarginMobile?.top ? `margin: ${flipBoxFrontMobileMargin};` : ''}
            ${flipBoxFrontBorderMobileWidth && flipBoxFrontBorderMobile?.top ? `border-width: ${flipBoxFrontBorderMobileWidth};` : ''}
            ${flipBoxFrontBorderRadiusMobile && flipBoxFrontBorderRadiusMobile?.top ? `border-radius: ${flipBoxFrontBorderRadiusMobileWidth};` : ''}
        }

        .fb-flip-box-wrapper.${blockID} .fb-flipbox-back {
            display: flex;
            align-items: center;
            ${flipBoxFrontWidth?.Mobile ? `width: ${flipBoxFrontWidth?.Mobile}${flipBoxFrontWidthUnits?.Mobile};` : ''}
            ${flipBoxFrontHeight?.Mobile ? `min-height: ${flipBoxFrontHeight?.Mobile}${flipBoxFrontHeightUnits?.Mobile};` : ''}
            ${flipBoxBackMobilePadding && flipBoxBackPaddingMobile?.top ? `padding: ${flipBoxBackMobilePadding};` : ''}
            ${flipBoxBackMobileMargin && flipBoxBackMarginMobile?.top ? `margin: ${flipBoxBackMobileMargin};` : ''}
            ${flipBoxBackBorderMobileWidth && flipBoxBackBorderMobile?.top ? `border-width: ${flipBoxBackBorderMobileWidth};` : ''}
            ${flipBoxBackBorderRadiusMobile && flipBoxBackBorderRadiusMobile?.top ? `border-radius: ${flipBoxBackBorderRadiusMobileWidth};` : ''}		
        }
    }
    
    .fb-flip-box-wrapper.${blockID} .fb-description {
        ${SubHeadingColor ? `color: ${SubHeadingColor};` : ""}
        ${subHeadingGlobalTypoSwitcher?.fontFamily === true && subHeadingGlobalTypographyData?.fontFamily ? `font-family: ${subHeadingGlobalTypographyData?.fontFamily};` : ''}
        ${subHeadingGlobalTypoSwitcher?.fontSize === true && subHeadingGlobalTypographyData?.fontSize ? `font-size: ${subHeadingGlobalTypographyData?.fontSize};` : ''}
        ${subHeadingGlobalTypoSwitcher?.fontWeight === true && subHeadingGlobalTypographyData?.fontWeight ? `font-weight: ${subHeadingGlobalTypographyData?.fontWeight};` : ''}
        ${subHeadingGlobalTypoSwitcher?.fontStyle === true && subHeadingGlobalTypographyData?.fontStyle ? `font-style: ${subHeadingGlobalTypographyData?.fontStyle};` : ''}
        ${subHeadingGlobalTypoSwitcher?.textTransform === true && subHeadingGlobalTypographyData?.textTransform ? `text-transform: ${subHeadingGlobalTypographyData?.textTransform};` : ''}
        ${subHeadingGlobalTypoSwitcher?.textDecoration === true && subHeadingGlobalTypographyData?.textDecoration ? `text-decoration: ${subHeadingGlobalTypographyData?.textDecoration};` : ''}
        ${subHeadingGlobalTypoSwitcher?.letterSpacing === true && subHeadingGlobalTypographyData?.letterSpacing ? `letter-spacing: ${subHeadingGlobalTypographyData?.letterSpacing};` : ''}
        ${subHeadingGlobalTypoSwitcher?.lineHeight === true && subHeadingGlobalTypographyData?.lineHeight ? `line-height: ${subHeadingGlobalTypographyData?.lineHeight};` : ''}
        ${subHeadingGlobalTypoSwitcher?.fontFamily === false && subHeadingFontFamily && subHeadingFontFamily !== "Default" ? `font-family: ${subHeadingFontFamily};` : ''}
        ${subHeadingGlobalTypoSwitcher?.fontSize === false && subHeadingFontSize?.Desktop && subHeadingFontSizeUnits?.Desktop ? `font-size: ${subHeadingFontSize?.Desktop}${subHeadingFontSizeUnits?.Desktop};` : ''}
        ${subHeadingGlobalTypoSwitcher?.fontWeight === false && subHeadingFontWeight ? `font-weight: ${subHeadingFontWeight};` : ''}
        ${subHeadingGlobalTypoSwitcher?.fontStyle === false && subHeadingFontStyle ? `font-style: ${subHeadingFontStyle};` : ''}
        ${subHeadingGlobalTypoSwitcher?.textTransform === false && subHeadingTextTransform ? `text-transform: ${subHeadingTextTransform};` : ''}
        ${subHeadingGlobalTypoSwitcher?.textDecoration === false && subHeadingTextDecoration ? `text-decoration: ${subHeadingTextDecoration};` : ''}
        ${subHeadingGlobalTypoSwitcher?.letterSpacing === false && subHeadingLetterSpacing?.Desktop && subHeadingLetterSpacingUnits?.Desktop ? `letter-spacing: ${subHeadingLetterSpacing?.Desktop}${subHeadingLetterSpacingUnits?.Desktop};` : ''}
        ${subHeadingGlobalTypoSwitcher?.lineHeight === false && subHeadingLineHeight?.Desktop && subHeadingLineHeightUnits?.Desktop ? `line-height: ${subHeadingLineHeight?.Desktop}${subHeadingLineHeightUnits?.Desktop};` : ''}
        ${subHeadingDesktopPaddingValue && SubHeadingDesktopPadding?.top ? `padding: ${subHeadingDesktopPaddingValue};` : ""}
        ${descDesktopMarginValue && descDesktopMargin?.top ? `margin: ${descDesktopMarginValue};` : ""}
        ${descAlignment ? `text-align: ${descAlignment};` : ''}
        transition: all .3s ease-in-out;
    }

    .fb-flip-box-wrapper.${blockID}:hover .fb-description {
        ${SubHeadingHoverColor ? `color: ${SubHeadingHoverColor};` : ""}
    }

    .fb-flip-box-wrapper.${blockID} .fb-flip-back-box-content-wrapper .fb-description {
        ${subHeadingBackColor ? `color: ${subHeadingBackColor};` : ""}
        ${subHeadingBackGlobalTypoSwitcher?.fontFamily === true && subHeadingBackGlobalTypographyData?.fontFamily ? `font-family: ${subHeadingBackGlobalTypographyData?.fontFamily};` : ''}
        ${subHeadingBackGlobalTypoSwitcher?.fontSize === true && subHeadingBackGlobalTypographyData?.fontSize ? `font-size: ${subHeadingBackGlobalTypographyData?.fontSize};` : ''}
        ${subHeadingBackGlobalTypoSwitcher?.fontWeight === true && subHeadingBackGlobalTypographyData?.fontWeight ? `font-weight: ${subHeadingBackGlobalTypographyData?.fontWeight};` : ''}
        ${subHeadingBackGlobalTypoSwitcher?.fontStyle === true && subHeadingBackGlobalTypographyData?.fontStyle ? `font-style: ${subHeadingBackGlobalTypographyData?.fontStyle};` : ''}
        ${subHeadingBackGlobalTypoSwitcher?.textTransform === true && subHeadingBackGlobalTypographyData?.textTransform ? `text-transform: ${subHeadingBackGlobalTypographyData?.textTransform};` : ''}
        ${subHeadingBackGlobalTypoSwitcher?.textDecoration === true && subHeadingBackGlobalTypographyData?.textDecoration ? `text-decoration: ${subHeadingBackGlobalTypographyData?.textDecoration};` : ''}
        ${subHeadingBackGlobalTypoSwitcher?.letterSpacing === true && subHeadingBackGlobalTypographyData?.letterSpacing ? `letter-spacing: ${subHeadingBackGlobalTypographyData?.letterSpacing};` : ''}
        ${subHeadingBackGlobalTypoSwitcher?.lineHeight === true && subHeadingBackGlobalTypographyData?.lineHeight ? `line-height: ${subHeadingBackGlobalTypographyData?.lineHeight};` : ''}
        ${subHeadingBackGlobalTypoSwitcher?.fontFamily === false && subHeadingBackFontFamily && subHeadingBackFontFamily !== "Default" ? `font-family: ${subHeadingBackFontFamily};` : ''}
        ${subHeadingBackGlobalTypoSwitcher?.fontSize === false && subHeadingBackFontSize?.Desktop && subHeadingBackFontSizeUnits?.Desktop ? `font-size: ${subHeadingBackFontSize?.Desktop}${subHeadingBackFontSizeUnits?.Desktop};` : ''}
        ${subHeadingBackGlobalTypoSwitcher?.fontWeight === false && subHeadingBackFontWeight ? `font-weight: ${subHeadingBackFontWeight};` : ''}
        ${subHeadingBackGlobalTypoSwitcher?.fontStyle === false && subHeadingBackFontStyle ? `font-style: ${subHeadingBackFontStyle};` : ''}
        ${subHeadingBackGlobalTypoSwitcher?.textTransform === false && subHeadingBackTextTransform ? `text-transform: ${subHeadingBackTextTransform};` : ''}
        ${subHeadingBackGlobalTypoSwitcher?.textDecoration === false && subHeadingBackTextDecoration ? `text-decoration: ${subHeadingBackTextDecoration};` : ''}
        ${subHeadingBackGlobalTypoSwitcher?.letterSpacing === false && subHeadingBackLetterSpacing?.Desktop && subHeadingBackLetterSpacingUnits?.Desktop ? `letter-spacing: ${subHeadingBackLetterSpacing?.Desktop}${subHeadingBackLetterSpacingUnits?.Desktop};` : ''}
        ${subHeadingBackGlobalTypoSwitcher?.lineHeight === false && subHeadingBackLineHeight?.Desktop && subHeadingBackLineHeightUnits?.Desktop ? `line-height: ${subHeadingBackLineHeight?.Desktop}${subHeadingBackLineHeightUnits?.Desktop};` : ''}
        ${subHeadingBackDesktopPaddingValue && subHeadingBackDesktopPadding?.top ? `padding: ${subHeadingBackDesktopPaddingValue};` : ""}
        ${descBackDesktopMarginValue && descBackDesktopMargin?.top ? `margin: ${descBackDesktopMarginValue};` : ""}
        ${descAlignmentBack ? `text-align: ${descAlignmentBack};` : ''}
    }

    .fb-flip-box-wrapper.${blockID} .fb-flip-back-box-content-wrapper .fb-description {
        ${subHeadingBackHoverColor ? `color: ${subHeadingBackHoverColor};` : ""}
    }
    @media only screen and (max-width: 1024px) {
        .fb-flip-box-wrapper.${blockID} .fb-description {
            ${subHeadingTabPaddingValue && SubHeadingTabPadding?.top ? `padding: ${subHeadingTabPaddingValue};` : ""}
            ${descTabMarginValue && descTabMargin?.top ? `margin: ${descTabMarginValue};` : ""}
            ${subHeadingGlobalTypoSwitcher?.fontSize === false && subHeadingFontSize?.Tablet && subHeadingFontSizeUnits?.Tablet ? `font-size: ${subHeadingFontSize?.Tablet}${subHeadingFontSizeUnits?.Tablet};` : ''}
            ${subHeadingGlobalTypoSwitcher?.letterSpacing === false && subHeadingLetterSpacing?.Tablet && subHeadingLetterSpacingUnits?.Tablet ? `letter-spacing: ${subHeadingLetterSpacing?.Tablet}${subHeadingLetterSpacingUnits?.Tablet};` : ''}
            ${subHeadingGlobalTypoSwitcher?.lineHeight === false && subHeadingLineHeight?.Tablet && subHeadingLineHeightUnits?.Tablet ? `line-height: ${subHeadingLineHeight?.Tablet}${subHeadingLineHeightUnits?.Tablet};` : ''}
        }

        .fb-flip-box-wrapper.${blockID} .fb-flip-back-box-content-wrapper .fb-description {
            ${subHeadingBackGlobalTypoSwitcher?.fontSize === false && subHeadingBackFontSize?.Tablet && subHeadingBackFontSizeUnits?.Tablet ? `font-size: ${subHeadingBackFontSize?.Tablet}${subHeadingBackFontSizeUnits?.Tablet};` : ''}
            ${subHeadingBackGlobalTypoSwitcher?.letterSpacing === false && subHeadingBackLetterSpacing?.Tablet && subHeadingBackLetterSpacingUnits?.Tablet ? `letter-spacing: ${subHeadingBackLetterSpacing?.Tablet}${subHeadingBackLetterSpacingUnits?.Tablet};` : ''}
            ${subHeadingBackGlobalTypoSwitcher?.lineHeight === false && subHeadingBackLineHeight?.Tablet && subHeadingBackLineHeightUnits?.Tablet ? `line-height: ${subHeadingBackLineHeight?.Tablet}${subHeadingBackLineHeightUnits?.Tablet};` : ''}
            ${subHeadingBackTabPaddingValue && subHeadingBackTabPadding?.top ? `padding: ${subHeadingBackTabPaddingValue};` : ""}
            ${descBackTabMarginValue && descBackTabMargin?.top ? `margin: ${descBackTabMarginValue};` : ""}
        }
    }

    @media only screen and (max-width: 757px) {
        .fb-flip-box-wrapper.${blockID} .fb-description {
            ${subHeadingMobilePaddingValue && SubHeadingMobilePadding?.top ? `padding: ${subHeadingMobilePaddingValue};` : ""}
            ${descMobileMarginValue && descMobileMargin?.top ? `margin: ${descMobileMarginValue};` : ""}
            ${subHeadingGlobalTypoSwitcher?.fontSize === false && subHeadingFontSize?.Mobile && subHeadingFontSizeUnits?.Mobile ? `font-size: ${subHeadingFontSize?.Mobile}${subHeadingFontSizeUnits?.Mobile};` : ''}
            ${subHeadingGlobalTypoSwitcher?.letterSpacing === false && subHeadingLetterSpacing?.Mobile && subHeadingLetterSpacingUnits?.Mobile ? `letter-spacing: ${subHeadingLetterSpacing?.Mobile}${subHeadingLetterSpacingUnits?.Mobile};` : ''}
            ${subHeadingGlobalTypoSwitcher?.lineHeight === false && subHeadingLineHeight?.Mobile && subHeadingLineHeightUnits?.Mobile ? `line-height: ${subHeadingLineHeight?.Mobile}${subHeadingLineHeightUnits?.Mobile};` : ''}
        }

        .fb-flip-box-wrapper.${blockID} .fb-flip-back-box-content-wrapper .fb-description {
            ${subHeadingBackGlobalTypoSwitcher?.fontSize === false && subHeadingBackFontSize?.Mobile && subHeadingBackFontSizeUnits?.Mobile ? `font-size: ${subHeadingBackFontSize?.Mobile}${subHeadingBackFontSizeUnits?.Mobile};` : ''}
            ${subHeadingBackGlobalTypoSwitcher?.letterSpacing === false && subHeadingBackLetterSpacing?.Mobile && subHeadingBackLetterSpacingUnits?.Mobile ? `letter-spacing: ${subHeadingBackLetterSpacing?.Mobile}${subHeadingBackLetterSpacingUnits?.Mobile};` : ''}
            ${subHeadingBackGlobalTypoSwitcher?.lineHeight === false && subHeadingBackLineHeight?.Mobile && subHeadingBackLineHeightUnits?.Mobile ? `line-height: ${subHeadingBackLineHeight?.Mobile}${subHeadingBackLineHeightUnits?.Mobile};` : ''}
            ${subHeadingBackMobilePaddingValue && subHeadingBackMobilePadding?.top ? `padding: ${subHeadingBackMobilePaddingValue};` : ""}
            ${descBackMobileMarginValue && descBackMobileMargin?.top ? `margin: ${descBackMobileMarginValue};` : ""}
        }
    }
    .fb-flip-box-wrapper.${blockID} .fb-flip-btn-container {
        ${buttonAlignment ? `text-align: ${buttonAlignment};` : ''}
    }
    .fb-flip-box-wrapper.${blockID} .fb-flipbox-back .fb-flip-back-btn-container {
        ${buttonAlignmentBack ? `text-align: ${buttonAlignmentBack};` : ''}
    }
    .fb-flip-box-wrapper.${blockID} .fb-flip-btn-wrapper {
        flex-direction: ${btnIconPosition === "left" ? "row-reverse" : "row"};
        ${buttonTextColor ? `color: ${buttonTextColor};` : ""}
        ${buttonBgColor ? `background-color: ${buttonBgColor};` : ""}

        ${buttonGlobalTypoSwitcher?.fontFamily === true && buttonGlobalTypographyData?.fontFamily ? `font-family: ${buttonGlobalTypographyData?.fontFamily};` : ''}
        ${buttonGlobalTypoSwitcher?.fontSize === true && buttonGlobalTypographyData?.fontSize ? `font-size: ${buttonGlobalTypographyData?.fontSize};` : ''}
        ${buttonGlobalTypoSwitcher?.fontWeight === true && buttonGlobalTypographyData?.fontWeight ? `font-weight: ${buttonGlobalTypographyData?.fontWeight};` : ''}
        ${buttonGlobalTypoSwitcher?.fontStyle === true && buttonGlobalTypographyData?.fontStyle ? `font-style: ${buttonGlobalTypographyData?.fontStyle};` : ''}
        ${buttonGlobalTypoSwitcher?.textTransform === true && buttonGlobalTypographyData?.textTransform ? `text-transform: ${buttonGlobalTypographyData?.textTransform};` : ''}
        ${buttonGlobalTypoSwitcher?.textDecoration === true && buttonGlobalTypographyData?.textDecoration ? `text-decoration: ${buttonGlobalTypographyData?.textDecoration};` : ''}
        ${buttonGlobalTypoSwitcher?.letterSpacing === true && buttonGlobalTypographyData?.letterSpacing ? `letter-spacing: ${buttonGlobalTypographyData?.letterSpacing};` : ''}
        ${buttonGlobalTypoSwitcher?.lineHeight === true && buttonGlobalTypographyData?.lineHeight ? `line-height: ${buttonGlobalTypographyData?.lineHeight};` : ''}

        ${buttonGlobalTypoSwitcher?.fontFamily === false && buttonFontFamily && buttonFontFamily !== "Default" ? `font-family: ${buttonFontFamily}` : ""};
        ${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Desktop ? `font-size: ${buttonFontSize?.Desktop}${buttonFontSizeUnits?.Desktop};` : ''}
        ${buttonGlobalTypoSwitcher?.fontWeight === false && buttonFontWeight ? `font-weight: ${buttonFontWeight}` : ""};
        ${buttonGlobalTypoSwitcher?.fontStyle === false && buttonFontStyle ? `font-style: ${buttonFontStyle}` : ""};
        ${buttonGlobalTypoSwitcher?.textTransform === false && buttonTextTransform ? `text-transform: ${buttonTextTransform}` : ""};
        ${buttonGlobalTypoSwitcher?.textDecoration === false && buttonTextDecoration ? `text-decoration: ${buttonTextDecoration}` : ""};
        ${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Desktop ? `letter-spacing: ${buttonLetterSpacing?.Desktop}${buttonLetterSpacingUnits?.Desktop};` : ''}
        ${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Desktop ? `line-height: ${buttonLineHeight?.Desktop}${buttonLineHeightUnits?.Desktop};` : ''}
        
        ${buttonDesktopPaddingValue && flipButtonDesktopPadding?.top ? `padding: ${buttonDesktopPaddingValue};` : ''}	
        ${buttonDesktopMarginValue && flipButtonDesktopMargin?.top ? `margin: ${buttonDesktopMarginValue};` : ''}
        ${flipButtonBorder ? `border-style: ${flipButtonBorder};` : ''}
        ${buttonDesktopBorderValue && flipButtonDesktopBorderWidth?.top ? `border-width: ${buttonDesktopBorderValue};` : ''}
        ${flipButtonBorderColor ? `border-color: ${flipButtonBorderColor};` : ''}
        ${buttonDesktopBorderRadiusValue && flipBtnDesktopBorderradiusWidth?.top ? `border-radius: ${buttonDesktopBorderRadiusValue};` : ''}
        ${btnIconGap?.Desktop && btnIconGapUnits?.Desktop ? `gap: ${btnIconGap?.Desktop}${btnIconGapUnits?.Desktop};` : ''}
        transition: all .3s ease-in-out;
    }

    .fb-flip-box-wrapper.${blockID} .fb-flip-btn-wrapper:hover {
        ${buttonTextHoverColor ? `color: ${buttonTextHoverColor};` : ""}
        ${buttonBgHoverColor ? `background-color: ${buttonBgHoverColor};` : ""}
        ${flipButtonHoverBorderColor ? `border-color: ${flipButtonHoverBorderColor};` : ''}
    }

    .fb-flip-box-wrapper.${blockID} .fb-flip-back-btn-wrapper {
        flex-direction: ${btnIconPosition === "left" ? "row-reverse" : "row"};
        ${buttonBackTextColor ? `color: ${buttonBackTextColor};` : ""}
        ${buttonBackBgColor ? `background-color: ${buttonBackBgColor};` : ""}

        ${buttonBackGlobalTypoSwitcher?.fontFamily === true && buttonBackGlobalTypographyData?.fontFamily ? `font-family: ${buttonBackGlobalTypographyData?.fontFamily};` : ''}
        ${buttonBackGlobalTypoSwitcher?.fontSize === true && buttonBackGlobalTypographyData?.fontSize ? `font-size: ${buttonBackGlobalTypographyData?.fontSize};` : ''}
        ${buttonBackGlobalTypoSwitcher?.fontWeight === true && buttonBackGlobalTypographyData?.fontWeight ? `font-weight: ${buttonBackGlobalTypographyData?.fontWeight};` : ''}
        ${buttonBackGlobalTypoSwitcher?.fontStyle === true && buttonBackGlobalTypographyData?.fontStyle ? `font-style: ${buttonBackGlobalTypographyData?.fontStyle};` : ''}
        ${buttonBackGlobalTypoSwitcher?.textTransform === true && buttonBackGlobalTypographyData?.textTransform ? `text-transform: ${buttonBackGlobalTypographyData?.textTransform};` : ''}
        ${buttonBackGlobalTypoSwitcher?.textDecoration === true && buttonBackGlobalTypographyData?.textDecoration ? `text-decoration: ${buttonBackGlobalTypographyData?.textDecoration};` : ''}
        ${buttonBackGlobalTypoSwitcher?.letterSpacing === true && buttonBackGlobalTypographyData?.letterSpacing ? `letter-spacing: ${buttonBackGlobalTypographyData?.letterSpacing};` : ''}
        ${buttonBackGlobalTypoSwitcher?.lineHeight === true && buttonBackGlobalTypographyData?.lineHeight ? `line-height: ${buttonBackGlobalTypographyData?.lineHeight};` : ''}

        ${buttonBackGlobalTypoSwitcher?.fontFamily === false && buttonBackFontFamily && buttonBackFontFamily !== "Default" ? `font-family: ${buttonBackFontFamily}` : ""};
        ${buttonBackGlobalTypoSwitcher?.fontSize === false && buttonBackFontSize?.Desktop ? `font-size: ${buttonBackFontSize?.Desktop}${buttonBackFontSizeUnits?.Desktop};` : ''}
        ${buttonBackGlobalTypoSwitcher?.fontWeight === false && buttonBackFontWeight ? `font-weight: ${buttonBackFontWeight}` : ""};
        ${buttonBackGlobalTypoSwitcher?.fontStyle === false && buttonBackFontStyle ? `font-style: ${buttonBackFontStyle}` : ""};
        ${buttonBackGlobalTypoSwitcher?.textTransform === false && buttonBackTextTransform ? `text-transform: ${buttonBackTextTransform}` : ""};
        ${buttonBackGlobalTypoSwitcher?.textDecoration === false && buttonBackTextDecoration ? `text-decoration: ${buttonBackTextDecoration}` : ""};
        ${buttonBackGlobalTypoSwitcher?.letterSpacing === false && buttonBackLetterSpacing?.Desktop ? `letter-spacing: ${buttonBackLetterSpacing?.Desktop}${buttonBackLetterSpacingUnits?.Desktop};` : ''}
        ${buttonBackGlobalTypoSwitcher?.lineHeight === false && buttonBackLineHeight?.Desktop ? `line-height: ${buttonBackLineHeight?.Desktop}${buttonBackLineHeightUnits?.Desktop};` : ''}
        
        ${buttonBackDesktopPaddingValue && flipButtonBackDesktopPadding?.top ? `padding: ${buttonBackDesktopPaddingValue};` : ''}	
        ${buttonBackDesktopMarginValue && flipButtonBackDesktopMargin?.top ? `margin: ${buttonBackDesktopMarginValue};` : ''}
        ${flipButtonBackBorder ? `border-style: ${flipButtonBackBorder};` : ''}
        ${buttonBackDesktopBorderValue && flipButtonBackDesktopBorderWidth?.top ? `border-width: ${buttonBackDesktopBorderValue};` : ''}
        ${flipButtonBackBorderColor ? `border-color: ${flipButtonBackBorderColor};` : ''}
        ${buttonBackDesktopBorderRadiusValue && flipBtnBackDesktopBorderradiusWidth?.top ? `border-radius: ${buttonBackDesktopBorderRadiusValue};` : ''}
        ${btnBackIconGap?.Desktop && btnBackIconGapUnits?.Desktop ? `gap: ${btnBackIconGap?.Desktop}${btnBackIconGapUnits?.Desktop};` : ''}
        transition: all .3s ease-in-out;
    }
    .fb-flip-box-wrapper.${blockID} .fb-flip-back-btn-wrapper:hover{
        ${buttonBackTextHoverColor ? `color: ${buttonBackTextHoverColor};` : ""}
        ${buttonBackBgHoverColor ? `background-color: ${buttonBackBgHoverColor};` : ""}
        ${flipButtonBackHoverBorderColor ? `border-color: ${flipButtonBackHoverBorderColor};` : ''}
    }
    @media only screen and (max-width: 1024px) {
        .fb-flip-box-wrapper.${blockID} .fb-flip-btn-wrapper {
            ${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Tablet ? `font-size: ${buttonFontSize?.Tablet}${buttonFontSizeUnits?.Tablet};` : ''}
            ${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Tablet ? `letter-spacing: ${buttonLetterSpacing?.Tablet}${buttonLetterSpacingUnits?.Tablet};` : ''}
            ${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Tablet ? `line-height: ${buttonLineHeight?.Tablet}${buttonLineHeightUnits?.Tablet};` : ''}
            ${buttonTabPaddingValue && flipButtonTabPadding?.top ? `padding: ${buttonTabPaddingValue};` : ''}
            ${buttonTabMarginValue && flipButtonTabMargin?.top ? `margin: ${buttonTabMarginValue};` : ''}
            ${buttonTabBorderValue && flipButtonTabBorderWidth?.top ? `border-width: ${buttonTabBorderValue};` : ''}
            ${buttonTabBorderRadiusValue && flipBtnTabBorderradiusWidth?.top ? `border-radius: ${buttonTabBorderRadiusValue};` : ''}
        }
    }

    @media only screen and (max-width: 767px) {
        .fb-flip-box-wrapper.${blockID} .fb-flip-btn-wrapper {
            ${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Mobile ? `font-size: ${buttonFontSize?.Mobile}${buttonFontSizeUnits?.Mobile};` : ''}
            ${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Mobile ? `letter-spacing: ${buttonLetterSpacing?.Mobile}${buttonLetterSpacingUnits?.Mobile};` : ''}
            ${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Mobile ? `line-height: ${buttonLineHeight?.Mobile}${buttonLineHeightUnits?.Mobile};` : ''}
            ${buttonMobilePaddingValue && flipButtonMobilePadding?.top ? `padding: ${buttonMobilePaddingValue};` : ''}
            ${buttonMobileMarginValue && flipButtonMobileMargin?.top ? `margin: ${buttonMobileMarginValue};` : ''}
            ${buttonMobileBorderValue && flipButtonMobileBorderWidth?.top ? `border-width: ${buttonMobileBorderValue};` : ''}
            ${buttonMobileBorderRadiusValue && flipBtnMobileBorderradiusWidth?.top ? `border-radius: ${buttonMobileBorderRadiusValue};` : ''}
        }
		.fb-flip-box-main-wrapper.${blockID} .fb-flip-box-wrapper .fb-flipbox-content-wrapper{
			${flipBoxAlignment?.Mobile ? `align-items: ${flipBoxAlignment?.Mobile};` : ''}
		}
    }
    .fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper {
        ${mediaBackgroundType === "gradient" ? `
        background: ${mediaCustomGradientSwitcher && mediaCustomGradientInputValue ? mediaCustomGradientInputValue : mediaGradientColor};
        `
            : mediaBackgroundImageUrl && mediaBackgroundImageUrl !== "null" ? `
        ${mediaBackgroundImageUrl ? `background-image: url(${mediaBackgroundImageUrl});` : ""}
        ${mediaBackgroundImagePosition ? `background-position: ${mediaBackgroundImagePosition};` : ""}
        ${mediaBackgroundImageAttachment ? `background-attachment: ${mediaBackgroundImageAttachment};` : ""}
        ${mediaBackgroundImageRepeat ? `background-repeat: ${mediaBackgroundImageRepeat};` : ""}
        ${mediaBackgroundImageSize ? `background-size: ${mediaBackgroundImageSize};` : ""}`
                : mediaClassicColor ? `background: ${mediaClassicColor}; ` : ""
        }
        ${mediaBgWidth?.Desktop ? `width: ${mediaBgWidth?.Desktop}${mediaBgWidthUnits?.Desktop};` : ''}
        ${mediaBgHeight?.Desktop ? `height: ${mediaBgHeight?.Desktop}${mediaBgHeightUnits?.Desktop};` : ''}
        ${mediaDesktopPadding && mediaPaddingDesktop?.top ? `padding: ${mediaDesktopPadding};` : ''}
        ${mediaDesktopMargin && mediaMarginDesktop?.top ? `margin: ${mediaDesktopMargin};` : ''}
        ${mediaBorder ? `border-style: ${mediaBorder};` : ''}
        ${mediaBorderDesktopWidth && mediaBorderDesktop?.top ? `border-width: ${mediaBorderDesktopWidth};` : ''}
        ${mediaBorderColor ? `border-color: ${mediaBorderColor};` : ''}
        ${mediaBorderRadiusDesktop && mediaBorderRadiusDesktop?.top ? `border-radius: ${mediaBorderRadiusDesktopWidth};` : ''}
        background-repeat: none;
        background-size: cover;
		display: flex;
		align-items: center;
        ${mediaClassicColor ? `justify-content: center; ` : ''}
        transition: all .3s ease-in-out;
    }
    
    .fb-flip-box-wrapper.${blockID}:hover .fb-flip-media-wrapper {
        ${mediaHoverBackgroundType === "gradient" ? ` background: ${mediaHoverCustomGradientSwitcher && mediaHoverCustomGradientInputValue ? mediaHoverCustomGradientInputValue : mediaHoverGradientColor
            };
        `: mediaHoverBackgroundImageUrl && mediaHoverBackgroundImageUrl !== "null" ? `
        ${mediaHoverBackgroundImageUrl ? `background-image: url(${mediaHoverBackgroundImageUrl});` : ""}
        ${mediaHoverBackgroundImagePosition ? `background-position: ${mediaHoverBackgroundImagePosition};` : ""}
        ${mediaHoverBackgroundImageAttachment ? `background-attachment: ${mediaHoverBackgroundImageAttachment};` : ""}
        ${mediaHoverBackgroundImageRepeat ? `background-repeat: ${mediaHoverBackgroundImageRepeat};` : ""}
        ${mediaHoverBackgroundImageSize ? `background-size: ${mediaHoverBackgroundImageSize};` : ""} `
            : mediaHoverClassicColor ? `background: ${mediaHoverClassicColor}; ` : ""
        }
        ${mediaBorderHoverColor ? `border-color: ${mediaBorderHoverColor};` : ''}
    }

    .fb-flip-box-wrapper.${blockID} .fb-flip-back-media-wrapper {
        ${mediaBackBackgroundType === "gradient" ? `
        background: ${mediaBackCustomGradientSwitcher && mediaBackCustomGradientInputValue ? mediaBackCustomGradientInputValue : mediaBackGradientColor};
        `
            : mediaBackBackgroundImageUrl && mediaBackBackgroundImageUrl !== "null" ? `
        ${mediaBackBackgroundImageUrl ? `background-image: url(${mediaBackBackgroundImageUrl});` : ""}
        ${mediaBackBackgroundImagePosition ? `background-position: ${mediaBackBackgroundImagePosition};` : ""}
        ${mediaBackBackgroundImageAttachment ? `background-attachment: ${mediaBackBackgroundImageAttachment};` : ""}
        ${mediaBackBackgroundImageRepeat ? `background-repeat: ${mediaBackBackgroundImageRepeat};` : ""}
        ${mediaBackBackgroundImageSize ? `background-size: ${mediaBackBackgroundImageSize};` : ""}`
                : mediaBackClassicColor ? `background: ${mediaBackClassicColor}; ` : ""
        }
        ${mediaBackBgWidth?.Desktop ? `width: ${mediaBackBgWidth?.Desktop}${mediaBackBgWidthUnits?.Desktop};` : ''}
        ${mediaBackBgHeight?.Desktop ? `height: ${mediaBackBgHeight?.Desktop}${mediaBackBgHeightUnits?.Desktop};` : ''}
        ${mediaBackDesktopPadding && mediaBackPaddingDesktop?.top ? `padding: ${mediaBackDesktopPadding};` : ''}
        ${mediaBackDesktopMargin && mediaBackMarginDesktop?.top ? `margin: ${mediaBackDesktopMargin};` : ''}
        ${mediaBackBorder ? `border-style: ${mediaBackBorder};` : ''}
        ${mediaBackBorderDesktopWidth && mediaBackBorderDesktop?.top ? `border-width: ${mediaBackBorderDesktopWidth};` : ''}
        ${mediaBackBorderColor ? `border-color: ${mediaBackBorderColor};` : ''}
        ${mediaBackBorderRadiusDesktop && mediaBackBorderRadiusDesktop?.top ? `border-radius: ${mediaBackBorderRadiusDesktopWidth};` : ''}
        background-repeat: none;
        background-size: cover;
		display: flex;
		align-items: center;
        ${mediaBackClassicColor ? `justify-content: center; ` : ''}
        transition: all .3s ease-in-out;
    }
    
    .fb-flip-box-wrapper.${blockID} .fb-flip-back-media-wrapper:hover{
        ${mediaBackHoverBackgroundType === "gradient" ? ` background: ${mediaBackHoverCustomGradientSwitcher && mediaBackHoverCustomGradientInputValue ? mediaBackHoverCustomGradientInputValue : mediaBackHoverGradientColor
            };
        `: mediaBackHoverBackgroundImageUrl && mediaBackHoverBackgroundImageUrl !== "null" ? `
        ${mediaBackHoverBackgroundImageUrl ? `background-image: url(${mediaBackHoverBackgroundImageUrl});` : ""}
        ${mediaBackHoverBackgroundImagePosition ? `background-position: ${mediaBackHoverBackgroundImagePosition};` : ""}
        ${mediaBackHoverBackgroundImageAttachment ? `background-attachment: ${mediaBackHoverBackgroundImageAttachment};` : ""}
        ${mediaBackHoverBackgroundImageRepeat ? `background-repeat: ${mediaBackHoverBackgroundImageRepeat};` : ""}
        ${mediaBackHoverBackgroundImageSize ? `background-size: ${mediaBackHoverBackgroundImageSize};` : ""} `
            : mediaBackHoverClassicColor ? `background: ${mediaBackHoverClassicColor}; ` : ""
        }
        ${mediaBackBorderHoverColor ? `border-color: ${mediaBackBorderHoverColor};` : ''}
    }
    @media only screen and (max-width: 1024px) {
        .fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper {
            ${mediaTabletPadding && mediaPaddingTablet?.top ? `padding: ${mediaTabletPadding};` : ''}
            ${mediaTabletMargin && mediaMarginTablet?.top ? `margin: ${mediaTabletMargin};` : ''}
            ${mediaBorderTabletWidth && mediaBorderTablet?.top ? `border-width: ${mediaBorderTabletWidth};` : ''}
            ${mediaBorderRadiusTabletWidth && mediaBorderRadiusTablet?.top ? `border-radius: ${mediaBorderRadiusTabletWidth};` : ''}
            ${mediaBgWidth?.Tablet ? `width: ${mediaBgWidth?.Tablet}${mediaBgWidthUnits?.Tablet};` : ''}
            ${mediaBgHeight?.Tablet ? `height: ${mediaBgHeight?.Tablet}${mediaBgHeightUnits?.Tablet};` : ''}
        }
    }

    @media only screen and (max-width: 767px) {
        .fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper {
            ${mediaMobilePadding && mediaPaddingMobile?.top ? `padding: ${mediaMobilePadding};` : ''}
            ${mediaMobileMargin && mediaMarginMobile?.top ? `margin: ${mediaMobileMargin};` : ''}
            ${mediaBorderMobileWidth && mediaBorderMobile?.top ? `border-width: ${mediaBorderMobileWidth};` : ''}
            ${mediaBorderRadiusMobileWidth && mediaBorderRadiusMobile?.top ? `border-radius: ${mediaBorderRadiusMobileWidth};` : ''}
            ${mediaBgWidth?.Mobile ? `width: ${mediaBgWidth?.Mobile}${mediaBgWidthUnits?.Mobile};` : ''}
            ${mediaBgHeight?.Mobile ? `height: ${mediaBgHeight?.Mobile}${mediaBgHeightUnits?.Mobile};` : ''}
        }
    }
	.fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper .fb-icon-wrapper{
		display: flex;
		align-items: center;
	}
    .fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper .fb-icon-wrapper svg,
    .fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper img {
        ${mediaSize?.Desktop ? `width: ${mediaSize?.Desktop}${mediaSizeUnits?.Desktop};` : ''}
        ${mediaSize?.Desktop ? `height: ${mediaSize?.Desktop}${mediaSizeUnits?.Desktop};` : ''}
        ${mediaIconColor ? `fill: ${mediaIconColor};` : ""}
    }

    .fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper .fb-icon-wrapper:hover svg {
        ${mediaIconHoverColor ? `fill: ${mediaIconHoverColor};` : "#ffffff"}
        transition: all .3s ease-in-out;
    }
	.fb-flip-box-wrapper.${blockID} .fb-flip-back-media-wrapper .fb-icon-wrapper{
		display: flex;
		align-items: center;
	}
    .fb-flip-box-wrapper.${blockID} .fb-flip-back-media-wrapper .fb-icon-wrapper svg,
    .fb-flip-box-wrapper.${blockID} .fb-flip-back-media-wrapper img {
        ${mediaBackSize?.Desktop ? `width: ${mediaBackSize?.Desktop}${mediaBackSizeUnits?.Desktop};` : ''}
        ${mediaBackSize?.Desktop ? `height: ${mediaBackSize?.Desktop}${mediaBackSizeUnits?.Desktop};` : ''}
        ${mediaBackIconColor ? `fill: ${mediaBackIconColor};` : ""}
    }
    .fb-flip-box-wrapper.${blockID} .fb-flip-back-media-wrapper .fb-icon-wrapper:hover svg{
        ${mediaBackIconHoverColor ? `fill: ${mediaBackIconHoverColor};` : ""}
    }
    @media only screen and (max-width: 1024px) {
        .fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper .fb-icon-wrapper svg,
        .fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper img {
            ${mediaSize?.Tablet ? `width: ${mediaSize?.Tablet}${mediaSizeUnits?.Tablet};` : ''}
            ${mediaSize?.Tablet ? `height: ${mediaSize?.Tablet}${mediaSizeUnits?.Tablet};` : ''}
        }

        .fb-flip-box-wrapper.${blockID} .fb-flip-back-media-wrapper .fb-icon-wrapper svg,
        .fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper img {
            ${mediaSize?.Tablet ? `width: ${mediaSize?.Tablet}${mediaSizeUnits?.Tablet};` : ''}
            ${mediaSize?.Tablet ? `height: ${mediaSize?.Tablet}${mediaSizeUnits?.Tablet};` : ''}
        }
    }

    @media only screen and (max-width: 767px) {
        .fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper .fb-icon-wrapper svg,
        .fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper img {
            ${mediaSize?.Mobile ? `width: ${mediaSize?.Mobile}${mediaSizeUnits?.Mobile};` : ''}
            ${mediaSize?.Mobile ? `height: ${mediaSize?.Mobile}${mediaSizeUnits?.Mobile};` : ''}
        }

        .fb-flip-box-wrapper.${blockID} .fb-flip-back-media-wrapper .fb-icon-wrapper svg,
        .fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper img {
            ${mediaSize?.Mobile ? `width: ${mediaSize?.Mobile}${mediaSizeUnits?.Mobile};` : ''}
            ${mediaSize?.Mobile ? `height: ${mediaSize?.Mobile}${mediaSizeUnits?.Mobile};` : ''}
        }
    }

    .fb-flip-box-wrapper.${blockID} .fb-btn-icon-wrapper svg {
        ${btnIconSize?.Desktop ? `width: ${btnIconSize?.Desktop}${btnIconSizeUnits?.Desktop};` : ''}
        ${btnIconColor ? `fill: ${btnIconColor};` : "#ffffff"}
        transform: rotate(${buttonIconRotate?.Desktop}deg);
        transition: all .3s ease-in-out;
    }

    .fb-flip-box-wrapper.${blockID}:hover .fb-btn-icon-wrapper svg {
        ${btnIconHoverColor ? `fill: ${btnIconHoverColor};` : "#ffffff"}
        transform: rotate(${buttonIconRotateHover?.Desktop}deg);
    }

    @media only screen and (max-width: 1024px) {
        .fb-flip-box-wrapper.${blockID} .fb-btn-icon-wrapper svg {
            ${btnIconSize?.Tablet ? `width: ${btnIconSize?.Tablet}${btnIconSizeUnits?.Tablet};` : ''}
            transform: rotate(${buttonIconRotate?.Tablet}deg);
        }
    }

    @media only screen and (max-width: 767px) {
        .fb-flip-box-wrapper.${blockID} .fb-btn-icon-wrapper svg {
            ${btnIconSize?.Mobile ? `width: ${btnIconSize?.Mobile}${btnIconSizeUnits?.Mobile};` : ''}
            transform: rotate(${buttonIconRotate?.Mobile}deg);
        }
    }
    .fb-flip-box-wrapper.${blockID} .fb-flip-back-btn-wrapper .fb-btn-icon-wrapper svg{
        ${btnBackIconSize?.Desktop ? `width: ${btnBackIconSize?.Desktop}${btnBackIconSizeUnits?.Desktop};` : ''}
        ${btnBackIconColor ? `fill: ${btnBackIconColor};` : "#ffffff"}
        transition: all .3s ease-in-out;
        transform: rotate(${buttonBackIconRotate?.Desktop}deg);
    }

    .fb-flip-box-wrapper.${blockID} .fb-flip-back-btn-wrapper:hover .fb-btn-icon-wrapper svg{
        ${btnBackIconHoverColor ? `fill: ${btnBackIconHoverColor};` : "#ffffff"}
        transform: rotate(${buttonBackIconRotateHover?.Desktop}deg);
    }
    @media only screen and (max-width: 1024px) {
        .fb-flip-box-wrapper.${blockID} .fb-flip-back-btn-wrapper .fb-btn-icon-wrapper svg{
            ${btnBackIconSize?.Tablet ? `width: ${btnBackIconSize?.Tablet}${btnBackIconSizeUnits?.Tablet};` : ''}
            transform: rotate(${buttonBackIconRotate?.Tablet}deg);
        }
    }

    @media only screen and (max-width: 767px) {
        .fb-flip-box-wrapper.${blockID} .fb-flip-back-btn-wrapper .fb-btn-icon-wrapper svg{
            ${btnBackIconSize?.Mobile ? `width: ${btnBackIconSize?.Mobile}${btnBackIconSizeUnits?.Mobile};` : ''}
            transform: rotate(${buttonBackIconRotate?.Mobile}deg);
        }
    }
        
    `;

    const customCss = getCustomCss(flipBoxGlobalCustomCSS, `.${blockID}`);
    return `${fbflipBoxStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateFlipBoxStyle;