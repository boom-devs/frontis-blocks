/**
 * Dual Button Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateDualButtonStyle = (attributes) => {
    const {
		blockID,
		// deviceType,
		dualButtonPresetStyle,
		ButtonText,
		ButtonUrl,
		ButtonTargetUrl,
		ButtonWidth,
		ButtonWidthWidthUnits,
		ButtonGlobalTypoSwitcher,
		ButtonGlobalTypographyData,
		ButtonGlobalTypoType,
		ButtonGlobalTypoOption,
		ButtonFontFamily,
		ButtonFontSize,
		ButtonFontSizeUnits,
		ButtonFontWeight,
		ButtonFontStyle,
		ButtonTextTransform,
		ButtonTextDecoration,
		ButtonLetterSpacing,
		ButtonLetterSpacingUnits,
		ButtonLineHeight,
		ButtonLineHeightUnits,
		ButtonColorSwitcher,
		ButtonColor,
		ButtonHoverColor,
		ButtonBgColorSwitcher,
		ButtonBgColor,
		ButtonBgHoverColor,
		ButtonBorder,
		ButtonBorderColor,
		ButtonBorderHoverColor,
		ButtonBorderColorSwitcher,
		ButtonBorderUnits,
		ButtonDesktopBorderWidth,
		ButtonTabBorderWidth,
		ButtonMobileBorderWidth,
		ButtonBorderLink,
		ButtonBorderRadiusUnits,
		ButtonDesktopBorderRadiusWidth,
		ButtonTabBorderRadiusWidth,
		ButtonMobileBorderRadiusWidth,
		ButtonBorderRadiusLink,
		ButtonPaddingUnits,
		ButtonDesktopPadding,
		ButtonTabPadding,
		ButtonMobilePadding,
		ButtonPaddingLink,
		ButtonIconAlign,
		ButtonIcon,
		frontendButtonIcon,
		frontendButtonTwoIcon,
		ButtonZIndex,
		ButtonTwoText,
		ButtonTwoUrl,
		ButtonTwoTargetUrl,
		ButtonTwoBorder,
		ButtonTwoBorderColor,
		ButtonTwoBorderHoverColor,
		ButtonTwoBorderColorSwitcher,
		ButtonTwoBorderUnits,
		ButtonTwoDesktopBorderWidth,
		ButtonTwoTabBorderWidth,
		ButtonTwoMobileBorderWidth,
		ButtonTwoBorderLink,
		ButtonTwoBorderRadiusUnits,
		ButtonTwoDesktopBorderRadiusWidth,
		ButtonTwoTabBorderRadiusWidth,
		ButtonTwoMobileBorderRadiusWidth,
		ButtonTwoBorderRadiusLink,
		ButtonTwoMarginUnits,
		ButtonTwoIconAlign,
		ButtonTwoIcon,
		ButtonMarginUnits,
		ButtonDesktopMargin,
		ButtonTabMargin,
		ButtonMobileMargin,
		ButtonMarginLink,
		buttonIconAlign,
		buttonTwoIconAlign,

		ButtonTwoColorSwitcher,
		ButtonTwoColor,
		ButtonTwoHoverColor,
		ButtonTwoBgColorSwitcher,
		ButtonTwoBgColor,
		ButtonTwoBgHoverColor,

		btnIconColorSwitcher,
		btnIconColor,
		btnIconHoverColor,
		btnIconBgColorSwitcher,
		btnIconBgColor,
		btnIconBgHoverColor,
		buttonIconRotateSwitcher,
		buttonIconRotate,
		buttonIconRotateHover,


		btnTwoIconColorSwitcher,
		btnTwoIconColor,
		btnTwoIconHoverColor,
		btnTwoIconSize,
		btnTwoIconSizeUnits,
		btnIconTwoBgColorSwitcher,
		btnTwoIconBgColor,
		btnTwoIconBgHoverColor,
		buttonTwoIconRotateSwitcher,
		buttonTwoIconRotate,
		buttonTwoIconRotateHover,

		iconBorder,
		iconBorderColorSwitcher,
		iconBorderColor,
		iconBorderHoverColor,
		iconBorderUnits,
		iconBorderDesktop,
		iconBorderTablet,
		iconBorderMobile,
		iconBorderLink,
		iconBorderRadiusUnits,
		iconBorderRadiusDesktop,
		iconBorderRadiusTablet,
		iconBorderRadiusMobile,
		iconBorderRadiusLink,

		iconTwoBorder,
		iconTwoBorderColorSwitcher,
		iconTwoBorderColor,
		iconTwoBorderHoverColor,
		iconTwoBorderUnits,
		iconTwoBorderDesktop,
		iconTwoBorderTablet,
		iconTwoBorderMobile,
		iconTwoBorderLink,
		iconTwoBorderRadiusUnits,
		iconTwoBorderRadiusDesktop,
		iconTwoBorderRadiusTablet,
		iconTwoBorderRadiusMobile,
		iconTwoBorderRadiusLink,
		connectorSwitcher,
		connectorText,
		connectorGlobalTypoSwitcher,
		connectorGlobalTypographyData,
		connectorGlobalTypoType,
		connectorGlobalTypoOption,
		connectorFontFamily,
		connectorFontSize,
		connectorFontSizeUnits,
		connectorFontWeight,
		connectorFontStyle,
		connectorTextTransform,
		connectorTextDecoration,
		connectorLetterSpacing,
		connectorLetterSpacingUnits,
		connectorLineHeight,
		connectorLineHeightUnits,
		connectorColorSwitcher,
		connectorColor,
		connectorHoverColor,
		connectorBgColorSwitcher,
		connectorBgColor,
		connectorBgHoverColor,
		connectorSize,
		connectorSizeUnits,
		btnIconSize,
		btnIconSizeUnits,
		btnIconSpacing,
		btnIconSpacingUnits,
		btnTwoIconSpacing,
		btnTwoIconSpacingUnits,
		btnIconPosition,
		btnTwoIconPosition,
		buttonsGap,
		buttonsGapUnits,
		buttonsDirection,
		blockStyle,
		connectorBorder,
		connectorBorderColorSwitcher,
		connectorBorderColor,
		connectorBorderHoverColor,
		connectorBorderUnits,
		connectorBorderDesktop,
		connectorBorderTablet,
		connectorBorderMobile,
		connectorBorderLink,
		connectorBorderRadiusUnits,
		connectorBorderRadiusDesktop,
		connectorBorderRadiusTablet,
		connectorBorderRadiusMobile,
		connectorBorderRadiusLink,
		dualButtonGlobalZIndex,
		dualBtnOverflow,
		dualButtonGlobalPaddingUnits,
		dualButtonGlobalPaddingDesktop,
		dualButtonGlobalPaddingTablet,
		dualButtonGlobalPaddingMobile,
		dualButtonGlobalPaddingLink,
		dualButtonGlobalMarginUnits,
		dualButtonGlobalMarginDesktop,
		dualButtonGlobalMarginTablet,
		dualButtonGlobalMarginMobile,
		dualButtonGlobalMarginLink,
		dualButtonGlobalBgColorSwitcher,
		dualButtonGlobalBgColor,
		dualButtonGlobalBgHoverColor,
		dualButtonGlobalBorder,
		dualButtonGlobalBorderColorSwitcher,
		dualButtonGlobalBorderColor,
		dualButtonGlobalBorderHoverColor,
		dualButtonGlobalBorderUnits,
		dualButtonGlobalBorderDesktop,
		dualButtonGlobalBorderTablet,
		dualButtonGlobalBorderMobile,
		dualButtonGlobalBorderLink,
		dualButtonGlobalBorderRadiusUnits,
		dualButtonGlobalBorderRadiusDesktop,
		dualButtonGlobalBorderRadiusTablet,
		dualButtonGlobalBorderRadiusMobile,
		dualButtonGlobalBorderRadiusLink,
		dualButtonGlobalBoxShadowValues,
		dualButtonGlobalBoxShadowCssValue,
		globalBoxShadowSwitcher,
		globalBoxShadowValues,
		globalBoxShadowHoverValues,
		globalBoxShadowCssValue,
		globalHoverBoxShadowCssValue,

		dualBtnDesktopSwitcher,
		dualBtnTabletSwitcher,
		dualBtnMobileSwitcher,

		dualButtonGlobalWraperCustomCSS,
		dualButtonGlobalWraperID,
		dualButtonGlobalWraperClass,

		// Position
		dualBtnPositionType,
		dualBtnHZOrientationType,
		dualBtnVROrientationType,
		dualBtnHZLeftOffset,
		dualBtnHZLeftOffsetUnits,
		dualBtnHZRightOffset,
		dualBtnHZRightOffsetUnits,
		dualBtnVRTopOffset,
		dualBtnVRTopOffsetUnits,
		dualBtnVRBottomOffset,
		dualBtnVRBottomOffsetUnits,

		/** Start Dynamic Btn One Text */
		dynamicBtnOneEnabled,
		dynamicBtnOneSource,
		dynamicBtnOnePostId,
		dynamicBtnOnePostType,
		dynamicBtnOnePostLabel,
		dynamicBtnOneField,
		dynamicBtnOneFeaturedImageField,

		dynamicBtnOneDateType,
		dynamicBtnOneDateFormat,

		dynamicBtnOneTimeType,
		dynamicBtnOneTimeFormat,

		dynamicBtnOneCommentsZeroText,
		dynamicBtnOneCommentsOneText,
		dynamicBtnOneCommentsManyText,

		dynamicBtnOneTermsTaxonomy,
		dynamicBtnOneTermsSeparator,
		dynamicBtnOneEnableLink,	
		dynamicBtnOneLinkSource,
		/** End Dynamic Btn One Text */

		/** Start Dynamic Btn Two Text */
		dynamicBtnTwoEnabled,
		dynamicBtnTwoSource,
		dynamicBtnTwoPostId,
		dynamicBtnTwoPostType,
		dynamicBtnTwoPostLabel,
		dynamicBtnTwoField,
		dynamicBtnTwoFeaturedImageField,

		dynamicBtnTwoDateType,
		dynamicBtnTwoDateFormat,

		dynamicBtnTwoTimeType,
		dynamicBtnTwoTimeFormat,

		dynamicBtnTwoCommentsZeroText,
		dynamicBtnTwoCommentsOneText,
		dynamicBtnTwoCommentsManyText,

		dynamicBtnTwoTermsTaxonomy,
		dynamicBtnTwoTermsSeparator,
		dynamicBtnTwoEnableLink,
		dynamicBtnTwoLinkSource,
		/** End Dynamic Btn Two Text */
	} = attributes;

    const buttonOneBorderDesktopWidth = `${ButtonDesktopBorderWidth?.top}${ButtonBorderUnits?.Desktop} ${ButtonDesktopBorderWidth?.right}${ButtonBorderUnits?.Desktop} ${ButtonDesktopBorderWidth?.bottom}${ButtonBorderUnits?.Desktop} ${ButtonDesktopBorderWidth?.left}${ButtonBorderUnits?.Desktop}`;
	const buttonOneBorderTabletWidth = `${ButtonTabBorderWidth?.top}${ButtonBorderUnits?.Tablet} ${ButtonTabBorderWidth?.right}${ButtonBorderUnits?.Tablet} ${ButtonTabBorderWidth?.bottom}${ButtonBorderUnits?.Tablet} ${ButtonTabBorderWidth?.left}${ButtonBorderUnits?.Tablet}`;
	const buttonOneBorderMobileWidth = `${ButtonMobileBorderWidth?.top}${ButtonBorderUnits?.Mobile} ${ButtonMobileBorderWidth?.right}${ButtonBorderUnits?.Mobile} ${ButtonMobileBorderWidth?.bottom}${ButtonBorderUnits?.Mobile} ${ButtonMobileBorderWidth?.left}${ButtonBorderUnits?.Mobile}`;

    const buttonOneBorderRadiusDesktopWidth = `${ButtonDesktopBorderRadiusWidth?.top}${ButtonBorderRadiusUnits?.Desktop} ${ButtonDesktopBorderRadiusWidth?.right}${ButtonBorderRadiusUnits?.Desktop} ${ButtonDesktopBorderRadiusWidth?.bottom}${ButtonBorderRadiusUnits?.Desktop} ${ButtonDesktopBorderRadiusWidth?.left}${ButtonBorderRadiusUnits?.Desktop}`;
	const buttonOneBorderRadiusTabletWidth = `${ButtonTabBorderRadiusWidth?.top}${ButtonBorderRadiusUnits?.Tablet} ${ButtonTabBorderRadiusWidth?.right}${ButtonBorderRadiusUnits?.Tablet} ${ButtonTabBorderRadiusWidth?.bottom}${ButtonBorderRadiusUnits?.Tablet} ${ButtonTabBorderRadiusWidth?.left}${ButtonBorderRadiusUnits?.Tablet}`;
	const buttonOneBorderRadiusMobileWidth = `${ButtonMobileBorderRadiusWidth?.top}${ButtonBorderRadiusUnits?.Mobile} ${ButtonMobileBorderRadiusWidth?.right}${ButtonBorderRadiusUnits?.Mobile} ${ButtonMobileBorderRadiusWidth?.bottom}${ButtonBorderRadiusUnits?.Mobile} ${ButtonMobileBorderRadiusWidth?.left}${ButtonBorderRadiusUnits?.Mobile}`;

    const buttonBorderDesktopWidth = `${ButtonTwoDesktopBorderWidth?.top}${ButtonTwoBorderUnits?.Desktop} ${ButtonTwoDesktopBorderWidth?.right}${ButtonTwoBorderUnits?.Desktop} ${ButtonTwoDesktopBorderWidth?.bottom}${ButtonTwoBorderUnits?.Desktop} ${ButtonTwoDesktopBorderWidth?.left}${ButtonTwoBorderUnits?.Desktop}`;
	const buttonBorderTabletWidth = `${ButtonTwoTabBorderWidth?.top}${ButtonTwoBorderUnits?.Tablet} ${ButtonTwoTabBorderWidth?.right}${ButtonTwoBorderUnits?.Tablet} ${ButtonTwoTabBorderWidth?.bottom}${ButtonTwoBorderUnits?.Tablet} ${ButtonTwoTabBorderWidth?.left}${ButtonTwoBorderUnits?.Tablet}`;
	const buttonBorderMobileWidth = `${ButtonTwoMobileBorderWidth?.top}${ButtonTwoBorderUnits?.Mobile} ${ButtonTwoMobileBorderWidth?.right}${ButtonTwoBorderUnits?.Mobile} ${ButtonTwoMobileBorderWidth?.bottom}${ButtonTwoBorderUnits?.Mobile} ${ButtonTwoMobileBorderWidth?.left}${ButtonTwoBorderUnits?.Mobile}`;

    const buttonBorderRadiusDesktopWidth = `${ButtonTwoDesktopBorderRadiusWidth?.top}${ButtonTwoBorderRadiusUnits?.Desktop} ${ButtonTwoDesktopBorderRadiusWidth?.right}${ButtonTwoBorderRadiusUnits?.Desktop} ${ButtonTwoDesktopBorderRadiusWidth?.bottom}${ButtonTwoBorderRadiusUnits?.Desktop} ${ButtonTwoDesktopBorderRadiusWidth?.left}${ButtonTwoBorderRadiusUnits?.Desktop}`;
	const buttonBorderRadiusTabletWidth = `${ButtonTwoTabBorderRadiusWidth?.top}${ButtonTwoBorderRadiusUnits?.Tablet} ${ButtonTwoTabBorderRadiusWidth?.right}${ButtonTwoBorderRadiusUnits?.Tablet} ${ButtonTwoTabBorderRadiusWidth?.bottom}${ButtonTwoBorderRadiusUnits?.Tablet} ${ButtonTwoTabBorderRadiusWidth?.left}${ButtonTwoBorderRadiusUnits?.Tablet}`;
	const buttonBorderRadiusMobileWidth = `${ButtonTwoMobileBorderRadiusWidth?.top}${ButtonTwoBorderRadiusUnits?.Mobile} ${ButtonTwoMobileBorderRadiusWidth?.right}${ButtonTwoBorderRadiusUnits?.Mobile} ${ButtonTwoMobileBorderRadiusWidth?.bottom}${ButtonTwoBorderRadiusUnits?.Mobile} ${ButtonTwoMobileBorderRadiusWidth?.left}${ButtonTwoBorderRadiusUnits?.Mobile}`;

    const buttonDesktopPadding = `${ButtonDesktopPadding?.top}${ButtonPaddingUnits?.Desktop} ${ButtonDesktopPadding?.right}${ButtonPaddingUnits?.Desktop} ${ButtonDesktopPadding?.bottom}${ButtonPaddingUnits?.Desktop} ${ButtonDesktopPadding?.left}${ButtonPaddingUnits?.Desktop}`;
	const buttonTabPadding = `${ButtonTabPadding?.top}${ButtonPaddingUnits?.Tablet} ${ButtonTabPadding?.right}${ButtonPaddingUnits?.Tablet} ${ButtonTabPadding?.bottom}${ButtonPaddingUnits?.Tablet} ${ButtonTabPadding?.left}${ButtonPaddingUnits?.Tablet}`;
	const buttonMobilePadding = `${ButtonMobilePadding?.top}${ButtonPaddingUnits?.Mobile} ${ButtonMobilePadding?.right}${ButtonPaddingUnits?.Mobile} ${ButtonMobilePadding?.bottom}${ButtonPaddingUnits?.Mobile} ${ButtonMobilePadding?.left}${ButtonPaddingUnits?.Mobile}`;

    const buttonDesktopMargin = `${ButtonDesktopMargin?.top}${ButtonTwoMarginUnits?.Desktop} ${ButtonDesktopMargin?.right}${ButtonTwoMarginUnits?.Desktop} ${ButtonDesktopMargin?.bottom}${ButtonTwoMarginUnits?.Desktop} ${ButtonDesktopMargin?.left}${ButtonTwoMarginUnits?.Desktop}`;
	const buttonTabMargin = `${ButtonTabMargin?.top}${ButtonTwoMarginUnits?.Tablet} ${ButtonTabMargin?.right}${ButtonTwoMarginUnits?.Tablet} ${ButtonTabMargin?.bottom}${ButtonTwoMarginUnits?.Tablet} ${ButtonTabMargin?.left}${ButtonTwoMarginUnits?.Tablet}`;
	const buttonMobileMargin = `${ButtonMobileMargin?.top}${ButtonTwoMarginUnits?.Mobile} ${ButtonMobileMargin?.right}${ButtonTwoMarginUnits?.Mobile} ${ButtonMobileMargin?.bottom}${ButtonTwoMarginUnits?.Mobile} ${ButtonMobileMargin?.left}${ButtonTwoMarginUnits?.Mobile}`;

    const connectorDesktopBorderWidth = `${connectorBorderDesktop?.top}${connectorBorderUnits?.Desktop} ${connectorBorderDesktop?.right}${connectorBorderUnits?.Desktop} ${connectorBorderDesktop?.bottom}${connectorBorderUnits?.Desktop} ${connectorBorderDesktop?.left}${connectorBorderUnits?.Desktop}`;
	const connectorTabletBorderWidth = `${connectorBorderTablet?.top}${connectorBorderUnits?.Tablet} ${connectorBorderTablet?.right}${connectorBorderUnits?.Tablet} ${connectorBorderTablet?.bottom}${connectorBorderUnits?.Tablet} ${connectorBorderTablet?.left}${connectorBorderUnits?.Tablet}`;
	const connectorMobileBorderWidth = `${connectorBorderMobile?.top}${connectorBorderUnits?.Mobile} ${connectorBorderMobile?.right}${connectorBorderUnits?.Mobile} ${connectorBorderMobile?.bottom}${connectorBorderUnits?.Mobile} ${connectorBorderMobile?.left}${connectorBorderUnits?.Mobile}`;

    const connectorDesktopBorderRadius = `${connectorBorderRadiusDesktop?.top}${connectorBorderRadiusUnits?.Desktop} ${connectorBorderRadiusDesktop?.right}${connectorBorderRadiusUnits?.Desktop} ${connectorBorderRadiusDesktop?.bottom}${connectorBorderRadiusUnits?.Desktop} ${connectorBorderRadiusDesktop?.left}${connectorBorderRadiusUnits?.Desktop}`;
	const connectorTabletBorderRadius = `${connectorBorderRadiusTablet?.top}${connectorBorderRadiusUnits?.Tablet} ${connectorBorderRadiusTablet?.right}${connectorBorderRadiusUnits?.Tablet} ${connectorBorderRadiusTablet?.bottom}${connectorBorderRadiusUnits?.Tablet} ${connectorBorderRadiusTablet?.left}${connectorBorderRadiusUnits?.Tablet}`;
	const connectorMobileBorderRadius = `${connectorBorderRadiusMobile?.top}${connectorBorderRadiusUnits?.Mobile} ${connectorBorderRadiusMobile?.right}${connectorBorderRadiusUnits?.Mobile} ${connectorBorderRadiusMobile?.bottom}${connectorBorderRadiusUnits?.Mobile} ${connectorBorderRadiusMobile?.left}${connectorBorderRadiusUnits?.Mobile}`;

    const iconDesktopBorderWidth = `${iconBorderDesktop?.top}${iconBorderUnits?.Desktop} ${iconBorderDesktop?.right}${iconBorderUnits?.Desktop} ${iconBorderDesktop?.bottom}${iconBorderUnits?.Desktop} ${iconBorderDesktop?.left}${iconBorderUnits?.Desktop}`;
	const iconTabletBorderWidth = `${iconBorderTablet?.top}${iconBorderUnits?.Tablet} ${iconBorderTablet?.right}${iconBorderUnits?.Tablet} ${iconBorderTablet?.bottom}${iconBorderUnits?.Tablet} ${iconBorderTablet?.left}${iconBorderUnits?.Tablet}`;
	const iconMobileBorderWidth = `${iconBorderMobile?.top}${iconBorderUnits?.Mobile} ${iconBorderMobile?.right}${iconBorderUnits?.Mobile} ${iconBorderMobile?.bottom}${iconBorderUnits?.Mobile} ${iconBorderMobile?.left}${iconBorderUnits?.Mobile}`;

    const iconDesktopBorderRadius = `${iconBorderRadiusDesktop?.top}${iconBorderRadiusUnits?.Desktop} ${iconBorderRadiusDesktop?.right}${iconBorderRadiusUnits?.Desktop} ${iconBorderRadiusDesktop?.bottom}${iconBorderRadiusUnits?.Desktop} ${iconBorderRadiusDesktop?.left}${iconBorderRadiusUnits?.Desktop}`;
	const iconTabletBorderRadius = `${iconBorderRadiusTablet?.top}${iconBorderRadiusUnits?.Tablet} ${iconBorderRadiusTablet?.right}${iconBorderRadiusUnits?.Tablet} ${iconBorderRadiusTablet?.bottom}${iconBorderRadiusUnits?.Tablet} ${iconBorderRadiusTablet?.left}${iconBorderRadiusUnits?.Tablet}`;
	const iconMobileBorderRadius = `${iconBorderRadiusMobile?.top}${iconBorderRadiusUnits?.Mobile} ${iconBorderRadiusMobile?.right}${iconBorderRadiusUnits?.Mobile} ${iconBorderRadiusMobile?.bottom}${iconBorderRadiusUnits?.Mobile} ${iconBorderRadiusMobile?.left}${iconBorderRadiusUnits?.Mobile}`;

    const iconTwoDesktopBorderWidth = `${iconTwoBorderDesktop?.top}${iconTwoBorderUnits?.Desktop} ${iconTwoBorderDesktop?.right}${iconTwoBorderUnits?.Desktop} ${iconTwoBorderDesktop?.bottom}${iconTwoBorderUnits?.Desktop} ${iconTwoBorderDesktop?.left}${iconTwoBorderUnits?.Desktop}`;
	const iconTwoTabletBorderWidth = `${iconTwoBorderTablet?.top}${iconTwoBorderUnits?.Tablet} ${iconTwoBorderTablet?.right}${iconTwoBorderUnits?.Tablet} ${iconTwoBorderTablet?.bottom}${iconTwoBorderUnits?.Tablet} ${iconTwoBorderTablet?.left}${iconTwoBorderUnits?.Tablet}`;
	const iconTwoMobileBorderWidth = `${iconTwoBorderMobile?.top}${iconTwoBorderUnits?.Mobile} ${iconTwoBorderMobile?.right}${iconTwoBorderUnits?.Mobile} ${iconTwoBorderMobile?.bottom}${iconTwoBorderUnits?.Mobile} ${iconTwoBorderMobile?.left}${iconTwoBorderUnits?.Mobile}`;

    const iconTwoDesktopBorderRadius = `${iconTwoBorderRadiusDesktop?.top}${iconTwoBorderRadiusUnits?.Desktop} ${iconTwoBorderRadiusDesktop?.right}${iconTwoBorderRadiusUnits?.Desktop} ${iconTwoBorderRadiusDesktop?.bottom}${iconTwoBorderRadiusUnits?.Desktop} ${iconTwoBorderRadiusDesktop?.left}${iconTwoBorderRadiusUnits?.Desktop}`;
	const iconTwoTabletBorderRadius = `${iconTwoBorderRadiusTablet?.top}${iconTwoBorderRadiusUnits?.Tablet} ${iconTwoBorderRadiusTablet?.right}${iconTwoBorderRadiusUnits?.Tablet} ${iconTwoBorderRadiusTablet?.bottom}${iconTwoBorderRadiusUnits?.Tablet} ${iconTwoBorderRadiusTablet?.left}${iconTwoBorderRadiusUnits?.Tablet}`;
	const iconTwoMobileBorderRadius = `${iconTwoBorderRadiusMobile?.top}${iconTwoBorderRadiusUnits?.Mobile} ${iconTwoBorderRadiusMobile?.right}${iconTwoBorderRadiusUnits?.Mobile} ${iconTwoBorderRadiusMobile?.bottom}${iconTwoBorderRadiusUnits?.Mobile} ${iconTwoBorderRadiusMobile?.left}${iconTwoBorderRadiusUnits?.Mobile}`;

    const globalDesktopPadding = `${dualButtonGlobalPaddingDesktop?.top}${dualButtonGlobalPaddingUnits?.Desktop} ${dualButtonGlobalPaddingDesktop?.right}${dualButtonGlobalPaddingUnits?.Desktop} ${dualButtonGlobalPaddingDesktop?.bottom}${dualButtonGlobalPaddingUnits?.Desktop} ${dualButtonGlobalPaddingDesktop?.left}${dualButtonGlobalPaddingUnits?.Desktop}`;
	const globalTabletPadding = `${dualButtonGlobalPaddingTablet?.top}${dualButtonGlobalPaddingUnits?.Tablet} ${dualButtonGlobalPaddingTablet?.right}${dualButtonGlobalPaddingUnits?.Tablet} ${dualButtonGlobalPaddingTablet?.bottom}${dualButtonGlobalPaddingUnits?.Tablet} ${dualButtonGlobalPaddingTablet?.left}${dualButtonGlobalPaddingUnits?.Tablet}`;
	const globalMobilePadding = `${dualButtonGlobalPaddingMobile?.top}${dualButtonGlobalPaddingUnits?.Mobile} ${dualButtonGlobalPaddingMobile?.right}${dualButtonGlobalPaddingUnits?.Mobile} ${dualButtonGlobalPaddingMobile?.bottom}${dualButtonGlobalPaddingUnits?.Mobile} ${dualButtonGlobalPaddingMobile?.left}${dualButtonGlobalPaddingUnits?.Mobile}`;

    const globalDesktopMargin = `${dualButtonGlobalMarginDesktop?.top}${dualButtonGlobalMarginUnits?.Desktop} ${dualButtonGlobalMarginDesktop?.right}${dualButtonGlobalMarginUnits?.Desktop} ${dualButtonGlobalMarginDesktop?.bottom}${dualButtonGlobalMarginUnits?.Desktop} ${dualButtonGlobalMarginDesktop?.left}${dualButtonGlobalMarginUnits?.Desktop}`;
	const globalTabletMargin = `${dualButtonGlobalMarginTablet?.top}${dualButtonGlobalMarginUnits?.Tablet} ${dualButtonGlobalMarginTablet?.right}${dualButtonGlobalMarginUnits?.Tablet} ${dualButtonGlobalMarginTablet?.bottom}${dualButtonGlobalMarginUnits?.Tablet} ${dualButtonGlobalMarginTablet?.left}${dualButtonGlobalMarginUnits?.Tablet}`;
	const globalMobileMargin = `${dualButtonGlobalMarginMobile?.top}${dualButtonGlobalMarginUnits?.Mobile} ${dualButtonGlobalMarginMobile?.right}${dualButtonGlobalMarginUnits?.Mobile} ${dualButtonGlobalMarginMobile?.bottom}${dualButtonGlobalMarginUnits?.Mobile} ${dualButtonGlobalMarginMobile?.left}${dualButtonGlobalMarginUnits?.Mobile}`;

    const globalDesktopBorderWidth = `${dualButtonGlobalBorderDesktop?.top}${dualButtonGlobalBorderUnits?.Desktop} ${dualButtonGlobalBorderDesktop?.right}${dualButtonGlobalBorderUnits?.Desktop} ${dualButtonGlobalBorderDesktop?.bottom}${dualButtonGlobalBorderUnits?.Desktop} ${dualButtonGlobalBorderDesktop?.left}${dualButtonGlobalBorderUnits?.Desktop}`;
	const globalTabletBorderWidth = `${dualButtonGlobalBorderTablet?.top}${dualButtonGlobalBorderUnits?.Tablet} ${dualButtonGlobalBorderTablet?.right}${dualButtonGlobalBorderUnits?.Tablet} ${dualButtonGlobalBorderTablet?.bottom}${dualButtonGlobalBorderUnits?.Tablet} ${dualButtonGlobalBorderTablet?.left}${dualButtonGlobalBorderUnits?.Tablet}`;
	const globalMobileBorderWidth = `${dualButtonGlobalBorderMobile?.top}${dualButtonGlobalBorderUnits?.Mobile} ${dualButtonGlobalBorderMobile?.right}${dualButtonGlobalBorderUnits?.Mobile} ${dualButtonGlobalBorderMobile?.bottom}${dualButtonGlobalBorderUnits?.Mobile} ${dualButtonGlobalBorderMobile?.left}${dualButtonGlobalBorderUnits?.Mobile}`;

    const globalDesktopBorderRadiusWidth = `${dualButtonGlobalBorderRadiusDesktop?.top}${dualButtonGlobalBorderRadiusUnits?.Desktop} ${dualButtonGlobalBorderRadiusDesktop?.right}${dualButtonGlobalBorderRadiusUnits?.Desktop} ${dualButtonGlobalBorderRadiusDesktop?.bottom}${dualButtonGlobalBorderRadiusUnits?.Desktop} ${dualButtonGlobalBorderRadiusDesktop?.left}${dualButtonGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${dualButtonGlobalBorderRadiusTablet?.top}${dualButtonGlobalBorderRadiusUnits?.Tablet} ${dualButtonGlobalBorderRadiusTablet?.right}${dualButtonGlobalBorderRadiusUnits?.Tablet} ${dualButtonGlobalBorderRadiusTablet?.bottom}${dualButtonGlobalBorderRadiusUnits?.Tablet} ${dualButtonGlobalBorderRadiusTablet?.left}${dualButtonGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${dualButtonGlobalBorderRadiusMobile?.top}${dualButtonGlobalBorderRadiusUnits?.Mobile} ${dualButtonGlobalBorderRadiusMobile?.right}${dualButtonGlobalBorderRadiusUnits?.Mobile} ${dualButtonGlobalBorderRadiusMobile?.bottom}${dualButtonGlobalBorderRadiusUnits?.Mobile} ${dualButtonGlobalBorderRadiusMobile?.left}${dualButtonGlobalBorderRadiusUnits?.Mobile}`;

    const dualButtonStyle = `
        .fb-dual-button-main-wrapper.${blockID} {
            ${dualBtnPositionType === 'default' ? `position: relative;` : ''}
            ${dualBtnPositionType !== 'default' ? `position: ${dualBtnPositionType};` : ''}
            ${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnHZOrientationType === 'left' && dualBtnHZLeftOffset?.Desktop ? `left: ${dualBtnHZLeftOffset?.Desktop}${dualBtnHZLeftOffsetUnits?.Desktop};` : ''}
            ${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnHZOrientationType === 'right' && dualBtnHZRightOffset?.Desktop ? `right: ${dualBtnHZRightOffset?.Desktop}${dualBtnHZRightOffsetUnits?.Desktop};` : ''}
            ${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnVROrientationType === 'top' && dualBtnVRTopOffset?.Desktop ? `top: ${dualBtnVRTopOffset?.Desktop}${dualBtnVRTopOffsetUnits?.Desktop};` : ''}
            ${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnVROrientationType === 'bottom' && dualBtnVRBottomOffset?.Desktop ? `bottom: ${dualBtnVRBottomOffset?.Desktop}${dualBtnVRBottomOffsetUnits?.Desktop};` : ''}
            ${dualButtonGlobalZIndex?.Desktop ? `z-index: ${dualButtonGlobalZIndex?.Desktop};` : ""}
            ${dualBtnOverflow !== 'default' ? `overflow: ${dualBtnOverflow};` : ''}
        }
        .fb-dual-button-container.${blockID} {
            ${dualButtonGlobalBgColor ? `background-color: ${dualButtonGlobalBgColor};` : ""} 
            ${globalDesktopPadding && dualButtonGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ""}
            ${globalDesktopMargin && dualButtonGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ""} 
            ${dualButtonGlobalBorder ? `border: ${dualButtonGlobalBorder};` : ""} 
            ${globalDesktopBorderWidth && dualButtonGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ""}
            ${globalDesktopBorderRadiusWidth && dualButtonGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ""}
            ${dualButtonGlobalBorderColor ? `border-color: ${dualButtonGlobalBorderColor};` : ""}
            ${globalBoxShadowCssValue ? `box-shadow: ${globalBoxShadowCssValue};` : ""}
            transition: all .3s ease-in-out;
            position: relative;
        }
        .fb-dual-button-container.${blockID}:hover {
            ${dualButtonGlobalBgHoverColor ? `background-color: ${dualButtonGlobalBgHoverColor};` : ""}
            ${dualButtonGlobalBorderHoverColor ? `border-color: ${dualButtonGlobalBorderHoverColor};` : ""}
            ${globalHoverBoxShadowCssValue ? `box-shadow: ${globalHoverBoxShadowCssValue};` : ""}
        }
        .fb-dual-button-container.${blockID} .fb-advanced-button {
            ${ButtonGlobalTypoSwitcher?.fontFamily === true && ButtonGlobalTypographyData?.fontFamily ? `font-family: ${ButtonGlobalTypographyData?.fontFamily};` : ''}
            ${ButtonGlobalTypoSwitcher?.fontSize === true && ButtonGlobalTypographyData?.fontSize ? `font-size: ${ButtonGlobalTypographyData?.fontSize};` : ''}
            ${ButtonGlobalTypoSwitcher?.fontWeight === true && ButtonGlobalTypographyData?.fontWeight ? `font-weight: ${ButtonGlobalTypographyData?.fontWeight};` : ''}
            ${ButtonGlobalTypoSwitcher?.fontStyle === true && ButtonGlobalTypographyData?.fontStyle ? `font-style: ${ButtonGlobalTypographyData?.fontStyle};` : ''}
            ${ButtonGlobalTypoSwitcher?.textTransform === true && ButtonGlobalTypographyData?.textTransform ? `text-transform: ${ButtonGlobalTypographyData?.textTransform};` : ''}
            ${ButtonGlobalTypoSwitcher?.textDecoration === true && ButtonGlobalTypographyData?.textDecoration ? `text-decoration: ${ButtonGlobalTypographyData?.textDecoration};` : ''}
            ${ButtonGlobalTypoSwitcher?.letterSpacing === true && ButtonGlobalTypographyData?.letterSpacing ? `letter-spacing: ${ButtonGlobalTypographyData?.letterSpacing};` : ''}
            ${ButtonGlobalTypoSwitcher?.lineHeight === true && ButtonGlobalTypographyData?.lineHeight ? `line-height: ${ButtonGlobalTypographyData?.lineHeight};` : ''}

            ${ButtonGlobalTypoSwitcher?.fontFamily === false && ButtonFontFamily && ButtonFontFamily !== "Default" ? `font-family: ${ButtonFontFamily};` : ""}
            ${ButtonGlobalTypoSwitcher?.fontSize === false && ButtonFontSize?.Desktop && ButtonFontSizeUnits?.Desktop ? `font-size: ${ButtonFontSize?.Desktop}${ButtonFontSizeUnits?.Desktop};` : ''}
            ${ButtonGlobalTypoSwitcher?.fontWeight === false && ButtonFontWeight ? `font-weight: ${ButtonFontWeight};` : ""}
            ${ButtonGlobalTypoSwitcher?.fontStyle === false && ButtonFontStyle ? `font-style: ${ButtonFontStyle};` : ""}
            ${ButtonGlobalTypoSwitcher?.textTransform === false && ButtonTextTransform ? `text-transform: ${ButtonTextTransform};` : ""}
            ${ButtonGlobalTypoSwitcher?.textDecoration === false && ButtonTextDecoration ? `text-decoration: ${ButtonTextDecoration};` : ""}
            ${ButtonGlobalTypoSwitcher?.letterSpacing === false && ButtonLetterSpacing?.Desktop && ButtonLetterSpacingUnits?.Desktop ? `letter-spacing: ${ButtonLetterSpacing?.Desktop}${ButtonLetterSpacingUnits?.Desktop};` : ''}
            ${ButtonGlobalTypoSwitcher?.lineHeight === false && ButtonLineHeight?.Desktop && ButtonLineHeightUnits?.Desktop ? `line-height: ${ButtonLineHeight?.Desktop}${ButtonLineHeightUnits?.Desktop};` : ''}
            
            ${buttonDesktopPadding && ButtonDesktopPadding?.top ? `padding: ${buttonDesktopPadding};` : ""}
            ${buttonDesktopMargin && ButtonDesktopMargin?.top ? `margin: ${buttonDesktopMargin};` : ""}
            ${ButtonZIndex ? `z-index: ${ButtonZIndex};` : ""}
            ${ButtonWidth?.Desktop && ButtonWidthWidthUnits?.Desktop ? `width: ${ButtonWidth?.Desktop}${ButtonWidthWidthUnits?.Desktop};` : ''}
            ${btnIconSpacing?.Desktop && btnIconSpacingUnits?.Desktop ? `gap: ${btnIconSpacing?.Desktop}${btnIconSpacingUnits?.Desktop};` : ''}	
        }
        .fb-dual-button-container.${blockID} .fb-dual-button-wrapper {
            ${buttonsGap?.Desktop && buttonsGapUnits?.Desktop ? `gap: ${buttonsGap?.Desktop}${buttonsGapUnits?.Desktop};` : ''}
        }
        .fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button {
            ${ButtonBgColor ? `background-color: ${ButtonBgColor};` : ""}
            ${ButtonBorder ? `border: ${ButtonBorder};` : ""}
            ${ButtonBorderColor ? `border-color: ${ButtonBorderColor};` : ""}
            ${buttonOneBorderDesktopWidth && ButtonDesktopBorderWidth?.top ? `border-width: ${buttonOneBorderDesktopWidth};` : ''}
            ${buttonOneBorderRadiusDesktopWidth && ButtonDesktopBorderRadiusWidth?.top ? `border-radius: ${buttonOneBorderRadiusDesktopWidth};` : ''}
        }
        .fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button:hover {
            ${ButtonBgHoverColor ? `background-color: ${ButtonBgHoverColor};` : ""}
            ${ButtonBorderHoverColor ? `border-color: ${ButtonBorderHoverColor};` : ""}
        }
        .fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button {
            ${ButtonTwoBgColor ? `background-color: ${ButtonTwoBgColor} !important;` : ""}
            ${ButtonTwoBorder ? `border: ${ButtonTwoBorder};` : ""}
            ${buttonBorderDesktopWidth && ButtonTwoDesktopBorderWidth?.top ? `border-width: ${buttonBorderDesktopWidth};` : ''}
            ${buttonBorderRadiusDesktopWidth && ButtonTwoDesktopBorderRadiusWidth?.top ? `border-radius: ${buttonBorderRadiusDesktopWidth};` : ''}
            ${ButtonTwoBorderColor ? `border-color: ${ButtonTwoBorderColor};` : ""}
        }
        .fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button:hover {
            ${ButtonTwoBgHoverColor ? `background-color: ${ButtonTwoBgHoverColor} !important;` : ""}
            ${ButtonTwoBorderHoverColor ? `border-color: ${ButtonTwoBorderHoverColor};` : ""}
        }
        
        .fb-dual-button-container.${blockID} .fb-advanced-button.fb-dual-button-one .fb-advanced-button-text {
            ${ButtonColor ? `color: ${ButtonColor};` : ""}
        }
        .fb-dual-button-container.${blockID} .fb-advanced-button.fb-dual-button-one:hover .fb-advanced-button-text {
            ${ButtonHoverColor ? `color: ${ButtonHoverColor};` : ""}
        }
        .fb-dual-button-container.${blockID} .fb-advanced-button.fb-dual-button-two .fb-advanced-button-text {
            ${ButtonTwoColor ? `color: ${ButtonTwoColor};` : ""}
        }
        .fb-dual-button-container.${blockID} .fb-advanced-button.fb-dual-button-two:hover .fb-advanced-button-text {
            ${ButtonTwoHoverColor ? `color: ${ButtonTwoHoverColor};` : ""}
        }
        
        .fb-dual-button-container.${blockID} .fb-dual-button-connector .fb-dual-button-connector-text {
            ${connectorColor ? `color: ${connectorColor};` : ""}
            ${connectorBgColor ? `background-color: ${connectorBgColor};` : ""}

            ${connectorGlobalTypoSwitcher?.fontFamily === true && connectorGlobalTypographyData?.fontFamily ? `font-family: ${connectorGlobalTypographyData?.fontFamily};` : ''}
            ${connectorGlobalTypoSwitcher?.fontSize === true && connectorGlobalTypographyData?.fontSize ? `font-size: ${connectorGlobalTypographyData?.fontSize};` : ''}
            ${connectorGlobalTypoSwitcher?.fontWeight === true && connectorGlobalTypographyData?.fontWeight ? `font-weight: ${connectorGlobalTypographyData?.fontWeight};` : ''}
            ${connectorGlobalTypoSwitcher?.fontStyle === true && connectorGlobalTypographyData?.fontStyle ? `font-style: ${connectorGlobalTypographyData?.fontStyle};` : ''}
            ${connectorGlobalTypoSwitcher?.textTransform === true && connectorGlobalTypographyData?.textTransform ? `text-transform: ${connectorGlobalTypographyData?.textTransform};` : ''}
            ${connectorGlobalTypoSwitcher?.textDecoration === true && connectorGlobalTypographyData?.textDecoration ? `text-decoration: ${connectorGlobalTypographyData?.textDecoration};` : ''}
            ${connectorGlobalTypoSwitcher?.letterSpacing === true && connectorGlobalTypographyData?.letterSpacing ? `letter-spacing: ${connectorGlobalTypographyData?.letterSpacing};` : ''}
            ${connectorGlobalTypoSwitcher?.lineHeight === true && connectorGlobalTypographyData?.lineHeight ? `line-height: ${connectorGlobalTypographyData?.lineHeight};` : ''}

            ${connectorGlobalTypoSwitcher?.fontFamily === false && connectorFontFamily && connectorFontFamily !== "Default" ? `font-family: ${connectorFontFamily};` : ""}
            ${connectorGlobalTypoSwitcher?.fontSize === false && connectorFontSize?.Desktop && connectorFontSizeUnits?.Desktop ? `font-size: ${connectorFontSize?.Desktop}${connectorFontSizeUnits?.Desktop};` : ''}
            ${connectorGlobalTypoSwitcher?.fontWeight === false && connectorFontWeight ? `font-weight: ${connectorFontWeight};` : ""}
            ${connectorGlobalTypoSwitcher?.fontStyle === false && connectorFontStyle ? `font-style: ${connectorFontStyle};` : ""}
            ${connectorGlobalTypoSwitcher?.textTransform === false && connectorTextTransform ? `text-transform: ${connectorTextTransform};` : ""}
            ${connectorGlobalTypoSwitcher?.textDecoration === false && connectorTextDecoration ? `text-decoration: ${connectorTextDecoration};` : ""}
            ${connectorGlobalTypoSwitcher?.letterSpacing === false && connectorLetterSpacing?.Desktop && connectorLetterSpacingUnits?.Desktop ? `letter-spacing: ${connectorLetterSpacing?.Desktop}${connectorLetterSpacingUnits?.Desktop};` : ''}
            ${connectorSize?.Desktop && connectorSizeUnits?.Desktop ? `line-height: ${connectorSize?.Desktop}${connectorSizeUnits?.Desktop};` : ''}
            
            ${connectorBorder ? `border: ${connectorBorder};` : ""}
            ${connectorBorderColor ? `border-color: ${connectorBorderColor};` : ""}
            ${connectorDesktopBorderWidth && connectorBorderDesktop?.top ? `border-width: ${connectorDesktopBorderWidth};` : ""}
            ${connectorDesktopBorderRadius && connectorBorderRadiusDesktop?.top ? `border-radius: ${connectorDesktopBorderRadius};` : ""}
            ${connectorSize?.Desktop && connectorSizeUnits?.Desktop ? `width: ${connectorSize?.Desktop}${connectorSizeUnits?.Desktop};` : ''}
            ${connectorSize?.Desktop && connectorSizeUnits?.Desktop ? `height: ${connectorSize?.Desktop}${connectorSizeUnits?.Desktop};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-dual-button-container.${blockID} .fb-dual-button-connector:hover .fb-dual-button-connector-text {
            ${connectorHoverColor ? `color: ${connectorHoverColor};` : ""}
            ${connectorBgHoverColor ? `background-color: ${connectorBgHoverColor};` : ""}
            ${connectorBorderHoverColor ? `border-color: ${connectorBorderHoverColor};` : ""}
        }

        .fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button-icon-wrapper{
            ${btnIconBgColor ? `background: ${btnIconBgColor};` : ""}
            ${iconBorder ? `border: ${iconBorder};` : ""} 
            ${iconBorderColor ? `border-color: ${iconBorderColor};` : ""}
            ${iconDesktopBorderWidth && iconBorderDesktop?.top ? `border-width: ${iconDesktopBorderWidth};` : ""}
            ${iconDesktopBorderRadius && iconBorderRadiusDesktop?.top ? `border-radius: ${iconDesktopBorderRadius};` : ""}
            transform: rotate(${buttonIconRotate?.Desktop}deg);
        }
        .fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper:hover .fb-advanced-button-icon-wrapper{
            ${btnIconBgHoverColor ? `background: ${btnIconBgHoverColor};` : ""}
            ${iconBorderHoverColor ? `border-color: ${iconBorderHoverColor};` : ""}
            transform: rotate(${buttonIconRotateHover?.Desktop}deg);
        }
        .fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button-icon-wrapper{
            ${btnTwoIconBgColor ? `background: ${btnTwoIconBgColor};` : ""}
            ${iconTwoBorder ? `border: ${iconTwoBorder};` : ""} 
            ${iconTwoBorderColor ? `border-color: ${iconTwoBorderColor};` : ""}
            ${iconTwoDesktopBorderWidth && iconTwoBorderDesktop?.top ? `border-width: ${iconTwoDesktopBorderWidth};` : ""}
            ${iconTwoDesktopBorderRadius && iconTwoBorderRadiusDesktop?.top ? `border-radius: ${iconTwoDesktopBorderRadius};` : ""}
            transform: rotate(${buttonTwoIconRotate?.Desktop}deg);
        }
        .fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper:hover .fb-advanced-button-icon-wrapper{
            ${btnTwoIconBgHoverColor ? `background: ${btnTwoIconBgHoverColor};` : ""}
            ${iconTwoBorderHoverColor ? `border-color: ${iconTwoBorderHoverColor};` : ""}
            transform: rotate(${buttonTwoIconRotateHover?.Desktop}deg);
        }
        .fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button-icon-wrapper svg {
            ${btnIconColor ? `fill: ${btnIconColor};` : ""}
            ${btnIconSize?.Desktop && btnIconSizeUnits?.Desktop ? `width: ${btnIconSize?.Desktop}${btnIconSizeUnits?.Desktop};` : ""}
            ${btnIconSize?.Desktop && btnIconSizeUnits?.Desktop ? `height: ${btnIconSize?.Desktop}${btnIconSizeUnits?.Desktop};` : ""}
        }

        .fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button-icon-wrapper svg {
            ${btnTwoIconColor ? `fill: ${btnTwoIconColor};` : ""}
            ${btnTwoIconSize?.Desktop && btnTwoIconSizeUnits?.Desktop ? `width: ${btnTwoIconSize?.Desktop}${btnTwoIconSizeUnits?.Desktop};` : ""}
            ${btnTwoIconSize?.Desktop && btnTwoIconSizeUnits?.Desktop ? `height: ${btnTwoIconSize?.Desktop}${btnTwoIconSizeUnits?.Desktop};` : ""}
        }
        .fb-dual-button-container.${blockID} .fb-dual-button-one:hover svg{
            ${btnIconHoverColor ? `fill: ${btnIconHoverColor};` : ""}
        }
    
        @media only screen and (max-width: 1024px) {
            .fb-dual-button-main-wrapper.${blockID} {
                ${dualBtnPositionType !== 'default' ? `position: ${dualBtnPositionType};` : ''}
                ${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnHZOrientationType === 'left' && dualBtnHZLeftOffset?.Tablet ? `left: ${dualBtnHZLeftOffset?.Tablet}${dualBtnHZLeftOffsetUnits?.Tablet};` : ''}
                ${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnHZOrientationType === 'right' && dualBtnHZRightOffset?.Tablet ? `right: ${dualBtnHZRightOffset?.Tablet}${dualBtnHZRightOffsetUnits?.Tablet};` : ''}
                ${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnVROrientationType === 'top' && dualBtnVRTopOffset?.Tablet ? `top: ${dualBtnVRTopOffset?.Tablet}${dualBtnVRTopOffsetUnits?.Tablet};` : ''}
                ${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnVROrientationType === 'bottom' && dualBtnVRBottomOffset?.Tablet ? `bottom: ${dualBtnVRBottomOffset?.Tablet}${dualBtnVRBottomOffsetUnits?.Tablet};` : ''}
                ${dualButtonGlobalZIndex?.Tablet ? `z-index: ${dualButtonGlobalZIndex?.Tablet};` : ""}
            }
            .fb-dual-button-container.${blockID} {
                ${globalTabletPadding && dualButtonGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ""}
                ${globalTabletMargin && dualButtonGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ""} 
                ${globalTabletBorderWidth && dualButtonGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ""}
                ${globalTabletBorderRadiusWidth && dualButtonGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ""}
            }
            .fb-dual-button-container.${blockID} .fb-advanced-button {
                ${ButtonWidth?.Tablet && ButtonWidthWidthUnits?.Tablet ? `width: ${ButtonWidth?.Tablet}${ButtonWidthWidthUnits?.Tablet};` : ''}
                ${ButtonGlobalTypoSwitcher?.fontSize === false && ButtonFontSize?.Tablet && ButtonFontSizeUnits?.Tablet ? `font-size: ${ButtonFontSize?.Tablet}${ButtonFontSizeUnits?.Tablet};` : ''}
                ${ButtonGlobalTypoSwitcher?.letterSpacing === false && ButtonLetterSpacing?.Tablet && ButtonLetterSpacingUnits?.Tablet ? `letter-spacing: ${ButtonLetterSpacing?.Tablet}${ButtonLetterSpacingUnits?.Tablet};` : ''}
                ${ButtonGlobalTypoSwitcher?.lineHeight === false && ButtonLineHeight?.Tablet && ButtonLineHeightUnits?.Tablet ? `line-height: ${ButtonLineHeight?.Tablet}${ButtonLineHeightUnits?.Tablet};` : ''}
            }
            .fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button {
                ${ButtonBgColor ? `background-color: ${ButtonBgColor};` : ""}
                ${buttonTabPadding && ButtonTabPadding?.top ? `padding: ${buttonTabPadding};` : ''}
                ${buttonTabMargin && ButtonTabMargin?.top ? `margin: ${buttonTabMargin};` : ''}
                ${buttonOneBorderTabletWidth && ButtonTabBorderWidth?.top ? `border-width: ${buttonOneBorderTabletWidth};` : ''}
                ${buttonOneBorderRadiusTabletWidth && ButtonTabBorderRadiusWidth?.top ? `border-radius: ${buttonOneBorderRadiusTabletWidth};` : ''}
            }
            .fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button {
                ${buttonTabPadding && ButtonTabPadding?.top ? `padding: ${buttonTabPadding};` : ''}
                ${buttonTabMargin && ButtonTabMargin?.top ? `margin: ${buttonTabMargin};` : ''}
                ${ButtonTwoBgColor ? `background-color: ${ButtonTwoBgColor} !important;` : ""}
                ${ButtonTwoBorder ? `border: ${ButtonTwoBorder};` : ''}
                ${buttonBorderTabletWidth && ButtonTwoTabBorderWidth?.top ? `border-width: ${buttonBorderTabletWidth};` : ''}
                ${buttonBorderRadiusTabletWidth && ButtonTwoTabBorderRadiusWidth?.top ? `border-radius: ${buttonBorderRadiusTabletWidth};` : ''}
                ${ButtonTwoBorderColor ? `border-color: ${ButtonTwoBorderColor};` : ""}
            }
            .fb-dual-button-container.${blockID} .fb-dual-button-connector .fb-dual-button-connector-text {
                ${connectorGlobalTypoSwitcher?.fontSize === false && connectorFontSize?.Tablet && connectorFontSizeUnits?.Tablet ? `font-size: ${connectorFontSize?.Tablet}${connectorFontSizeUnits?.Tablet};` : ''}
                ${connectorGlobalTypoSwitcher?.letterSpacing === false && connectorLetterSpacing?.Tablet && connectorLetterSpacingUnits?.Tablet ? `letter-spacing: ${connectorLetterSpacing?.Tablet}${connectorLetterSpacingUnits?.Tablet};` : ''}
                ${connectorLineHeight?.Tablet && connectorLineHeightUnits?.Tablet ? `line-height: ${connectorLineHeight?.Tablet}${connectorLineHeightUnits?.Tablet};` : ''}
                ${connectorSize?.Tablet && connectorSizeUnits?.Tablet ? `width: ${connectorSize?.Tablet}${connectorSizeUnits?.Tablet};` : ''}
                ${connectorSize?.Tablet && connectorSizeUnits?.Tablet ? `height: ${connectorSize?.Tablet}${connectorSizeUnits?.Tablet};` : ''}
                ${connectorTabletBorderWidth && connectorBorderTablet?.top ? `border-width: ${connectorTabletBorderWidth};` : ''}
                ${connectorTabletBorderRadius && connectorBorderRadiusTablet?.top ? `border-radius: ${connectorTabletBorderRadius};` : ''}
            }
            
            .fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button-icon-wrapper{
                ${iconTabletBorderWidth && iconBorderTablet?.top ? `border-width: ${iconTabletBorderWidth};` : ""}
                ${iconTabletBorderRadius && iconBorderRadiusTablet?.top ? `border-radius: ${iconTabletBorderRadius};` : ""}
                transform: rotate(${buttonIconRotate?.Tablet}deg);
            }
            .fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button-icon-wrapper{
                ${iconTwoTabletBorderWidth && iconTwoBorderTablet?.top ? `border-width: ${iconTwoTabletBorderWidth};` : ""}
                ${iconTwoTabletBorderRadius && iconTwoBorderRadiusTablet?.top ? `border-radius: ${iconTwoTabletBorderRadius};` : ""}
                transform: rotate(${buttonTwoIconRotate?.Tablet}deg);
            }
        }
        @media only screen and (max-width: 767px) {
            .fb-dual-button-main-wrapper.${blockID} {
                ${dualBtnPositionType !== 'default' ? `position: ${dualBtnPositionType};` : ''}
                ${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnHZOrientationType === 'left' && dualBtnHZLeftOffset?.Mobile ? `left: ${dualBtnHZLeftOffset?.Mobile}${dualBtnHZLeftOffsetUnits?.Mobile};` : ''}
                ${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnHZOrientationType === 'right' && dualBtnHZRightOffset?.Mobile ? `right: ${dualBtnHZRightOffset?.Mobile}${dualBtnHZRightOffsetUnits?.Mobile};` : ''}
                ${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnVROrientationType === 'top' && dualBtnVRTopOffset?.Mobile ? `top: ${dualBtnVRTopOffset?.Mobile}${dualBtnVRTopOffsetUnits?.Mobile};` : ''}
                ${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnVROrientationType === 'bottom' && dualBtnVRBottomOffset?.Mobile ? `bottom: ${dualBtnVRBottomOffset?.Mobile}${dualBtnVRBottomOffsetUnits?.Mobile};` : ''}
                ${dualButtonGlobalZIndex?.Mobile ? `z-index: ${dualButtonGlobalZIndex?.Mobile};` : ""}
            }	
            .fb-dual-button-container.${blockID} {
                ${globalMobilePadding && dualButtonGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ""}
                ${globalMobileMargin && dualButtonGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ""} 
                ${globalMobileBorderWidth && dualButtonGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ""}
                ${globalMobileBorderRadiusWidth && dualButtonGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ""}
            }
            .fb-dual-button-container.${blockID} .fb-advanced-button {
                ${ButtonWidth?.Mobile && ButtonWidthWidthUnits?.Mobile ? `width: ${ButtonWidth?.Mobile}${ButtonWidthWidthUnits?.Mobile};` : ''}
                ${ButtonGlobalTypoSwitcher?.fontSize === false && ButtonFontSize?.Mobile && ButtonFontSizeUnits?.Mobile ? `font-size: ${ButtonFontSize?.Mobile}${ButtonFontSizeUnits?.Mobile};` : ''}
                ${ButtonGlobalTypoSwitcher?.letterSpacing === false && ButtonLetterSpacing?.Mobile && ButtonLetterSpacingUnits?.Mobile ? `letter-spacing: ${ButtonLetterSpacing?.Mobile}${ButtonLetterSpacingUnits?.Mobile};` : ''}
                ${ButtonGlobalTypoSwitcher?.lineHeight === false && ButtonLineHeight?.Mobile && ButtonLineHeightUnits?.Mobile ? `line-height: ${ButtonLineHeight?.Mobile}${ButtonLineHeightUnits?.Mobile};` : ''}
            }
            .fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button {
                ${ButtonBgColor ? `background-color: ${ButtonBgColor};` : ""}
                ${buttonMobilePadding && ButtonMobilePadding?.top ? `padding: ${buttonMobilePadding};` : ''}
                ${buttonMobileMargin && ButtonMobileMargin?.top ? `margin: ${buttonMobileMargin};` : ''}
                ${buttonOneBorderMobileWidth && ButtonMobileBorderWidth?.top ? `border-width: ${buttonOneBorderMobileWidth};` : ''}
                ${buttonOneBorderRadiusMobileWidth && ButtonMobileBorderRadiusWidth?.top ? `border-radius: ${buttonOneBorderRadiusMobileWidth};` : ''}
            }
            .fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button {
                ${buttonTabPadding && ButtonTabPadding?.top ? `padding: ${buttonTabPadding};` : ''}
                ${buttonTabMargin && ButtonTabMargin?.top ? `margin: ${buttonTabMargin};` : ''}
                ${ButtonTwoBgColor ? `background-color: ${ButtonTwoBgColor} !important;` : ""}
                ${ButtonTwoBorder ? `border: ${ButtonTwoBorder};` : ''}
                ${buttonBorderMobileWidth && ButtonTwoMobileBorderWidth?.top ? `border-width: ${buttonBorderMobileWidth};` : ''}
                ${buttonBorderRadiusMobileWidth && ButtonTwoMobileBorderRadiusWidth?.top ? `border-radius: ${buttonBorderRadiusMobileWidth};` : ''}
                ${ButtonTwoBorderColor ? `border-color: ${ButtonTwoBorderColor};` : ""}
            }
            .fb-dual-button-container.${blockID} .fb-dual-button-connector .fb-dual-button-connector-text {
                ${connectorGlobalTypoSwitcher?.fontSize === false && connectorFontSize?.Mobile && connectorFontSizeUnits?.Mobile ? `font-size: ${connectorFontSize?.Mobile}${connectorFontSizeUnits?.Mobile};` : ''}
                ${connectorGlobalTypoSwitcher?.letterSpacing === false && connectorLetterSpacing?.Mobile && connectorLetterSpacingUnits?.Mobile ? `letter-spacing: ${connectorLetterSpacing?.Mobile}${connectorLetterSpacingUnits?.Mobile};` : ''}
                ${connectorLineHeight?.Mobile && connectorLineHeightUnits?.Mobile ? `line-height: ${connectorLineHeight?.Mobile}${connectorLineHeightUnits?.Mobile};` : ''}
                ${connectorSize?.Mobile && connectorSizeUnits?.Mobile ? `width: ${connectorSize?.Mobile}${connectorSizeUnits?.Mobile};` : ''}
                ${connectorSize?.Mobile && connectorSizeUnits?.Mobile ? `height: ${connectorSize?.Mobile}${connectorSizeUnits?.Mobile};` : ''}
                ${connectorMobileBorderWidth && connectorBorderMobile?.top ? `border-width: ${connectorMobileBorderWidth};` : ''}
                ${connectorMobileBorderRadius && connectorBorderRadiusMobile?.top ? `border-radius: ${connectorMobileBorderRadius};` : ''}
            }
            .fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button-icon-wrapper{
                ${iconMobileBorderWidth && iconBorderMobile?.top ? `border-width: ${iconMobileBorderWidth};` : ""}
                ${iconMobileBorderRadius && iconBorderRadiusMobile?.top ? `border-radius: ${iconMobileBorderRadius};` : ""}
                transform: rotate(${buttonIconRotate?.Mobile}deg);
            }
            .fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button-icon-wrapper{
                ${iconTwoMobileBorderWidth && iconTwoBorderMobile?.top ? `border-width: ${iconTwoMobileBorderWidth};` : ""}
                ${iconTwoMobileBorderRadius && iconTwoBorderRadiusMobile?.top ? `border-radius: ${iconTwoMobileBorderRadius};` : ""}
                transform: rotate(${buttonTwoIconRotate?.Mobile}deg);
            }
        
        }
    `;

    const customCss = getCustomCss(dualButtonGlobalWraperCustomCSS, `.${blockID}`);
    return `${dualButtonStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateDualButtonStyle;