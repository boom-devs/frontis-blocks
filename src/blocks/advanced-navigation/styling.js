/**
 * Advanced Navigation Block - Style Generation
 * Returns Dynamic Generated CSS
 */
import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateAdvancedNavigationStyle = (attributes) => {
     const {
        blockID,
        blockStyle,
        // deviceType,
        navigationLayout,
        navigationHorizontalAlign, 
        dropdownOpenOnClick,
        showDropdownIcon,
        navigationFlexWrapSwitcher,
        navigationVerticalAlign, 
        hamburgerMenuIconType,
        hamburgerMenuSwitcher,

        /** Start Navigation Typography */
        navigationGap,
        navigationGapUnits,
        navigationGlobalTypographyData,
        navigationGlobalTypoSwitcher,
        navigationGlobalTypoType,
        navigationGlobalTypoOption,
        navigationFontFamily,
        navigationFontSize,
        navigationFontSizeUnits,
        navigationFontWeight,
        navigationFontStyle,
        navigationTextTransform,
        navigationTextDecoration,
        navigationLetterSpacing,
        navigationLetterSpacingUnits,
        navigationLineHeight,
        navigationLineHeightUnits,
        /** End Navigation Typography */

        /** Start Navigation Color and active color */
        navigationColorSwitcher,
        navigationColor,
        navigationHoverColor,
        navigationActiveColorSwitcher,
        navigationActiveColor,
        navigationActiveHoverColor,
        /** End Navigation Color and active color */

        /** Start Navigation Background */
        navigationBgColorSwitcher,
        navigationNormalBackgroundType,
        navigationNormalClassicColor,
        navigationNormalGradientColor,
        navigationNormalCustomGradientSwitcher,
        navigationNormalCustomGradientInputValue,

        navigationHoverBackgroundType,
        navigationHoverClassicColor,
        navigationHoverGradientColor,
        navigationHoverCustomGradientSwitcher,
        navigationHoverCustomGradientInputValue,
        /** End Navigation Background */

        /** Start Navigation item active Background */
        navigationItemActiveBgColorSwitcher,
        navigationItemActiveNormalBackgroundType,
        navigationItemActiveNormalClassicColor,
        navigationItemActiveNormalGradientColor,
        navigationItemActiveNormalCustomGradientSwitcher,
        navigationItemActiveNormalCustomGradientInputValue,

        navigationItemActiveHoverBackgroundType,
        navigationItemActiveHoverClassicColor,
        navigationItemActiveHoverGradientColor,
        navigationItemActiveHoverCustomGradientSwitcher,
        navigationItemActiveHoverCustomGradientInputValue,
        /** End Navigation item active Background */

        /** Start Navigation Padding and Margin */
        navigationPaddingUnits,
        navigationDesktopPadding,
        navigationTabletPadding,
        navigationMobilePadding,
        navigationPaddingLink,

        navigationMarginUnits,
        navigationDesktopMargin,
        navigationTabletMargin,
        navigationMobileMargin,
        navigationMarginLink,
        /** End Navigation Padding and Margin */

        /** Start Navigation Border and Border Radius */
        navigationBorder,
        navigationBorderColorSwitcher,
        navigationBorderColor,
        navigationBorderHoverColor,

        navigationBorderUnits,
        navigationDesktopBorder,
        navigationTabletBorder,
        navigationMobileBorder,
        navigationBorderLink,

        navigationBorderRadiusUnits,
        navigationDesktopBorderRadius,
        navigationTabletBorderRadius,
        navigationMobileBorderRadius,
        navigationBorderRadiusLink,
        /** End Navigation Border and Border Radius */

        /** Start Navigation Box Shadow */
        navigationBoxShadowSwitcher,
        navigationBoxShadowValues,
        navigationBoxShadowCssValue,
        navigationBoxShadowHoverValues,
        navigationBoxShadowHoverCssValue,
        /** End Navigation Box Shadow */

        /** Start Dropdown Menu */
        dropDownWrapperMinWidth,
        dropDownWrapperMinWidthUnits,
        /** End Dropdown Menu */

        /** Start Dropdown Menu Background */
        dropDownBgColorSwitcher,
        dropDownNormalBackgroundType,
        dropDownNormalClassicColor,
        dropDownNormalGradientColor,
        dropDownNormalCustomGradientSwitcher,
        dropDownNormalCustomGradientInputValue,

        dropDownHoverBackgroundType,
        dropDownHoverClassicColor,
        dropDownHoverGradientColor,
        dropDownHoverCustomGradientSwitcher,
        dropDownHoverCustomGradientInputValue,
        /** End Dropdown Menu Background */

        /** Start Dropdown Menu Padding and Margin */
        dropDownPaddingUnits, 
        dropDownDesktopPadding,
        dropDownTabletPadding,
        dropDownMobilePadding,
        dropDownPaddingLink,

        dropDownMarginUnits,
        dropDownDesktopMargin,
        dropDownTabletMargin,
        dropDownMobileMargin,
        dropDownMarginLink,
        /** End Dropdown Menu Padding and Margin */

        /** Start Dropdown Menu Border and Border Radius */
        dropDownBorder,
        dropDownBorderColorSwitcher,
        dropDownBorderColor,
        dropDownBorderHoverColor,

        dropDownBorderUnits,
        dropDownDesktopBorder,
        dropDownTabletBorder,
        dropDownMobileBorder,
        dropDownBorderLink,

        dropDownBorderRadiusUnits,  
        dropDownDesktopBorderRadius,
        dropDownTabletBorderRadius,
        dropDownMobileBorderRadius,
        dropDownBorderRadiusLink,
        /** End Dropdown Menu Border and Border Radius */

        /** Start Dropdown Menu Box Shadow */
        dropDownBoxShadowSwitcher,
        dropDownBoxShadowValues,
        dropDownBoxShadowCssValue,
        dropDownBoxShadowHoverValues,
        dropDownBoxShadowHoverCssValue,
        /** End Dropdown Menu Box Shadow */

        /** Start Dropdown Menu Typography */
        dropDownItemTypographyData,
        dropDownItemTypoSwitcher,
        dropDownItemTypoType,
        dropDownItemTypoOption,
        dropDownItemFontFamily,
        dropDownItemFontSize,
        dropDownItemFontSizeUnits,
        dropDownItemFontWeight,
        dropDownItemFontStyle,
        dropDownItemTextTransform,
        dropDownItemTextDecoration,
        dropDownItemLetterSpacing,
        dropDownItemLetterSpacingUnits,
        dropDownItemLineHeight,
        dropDownItemLineHeightUnits,
        /** End Dropdown Menu Item Typography */ 

        /** Start Dropdown Menu Color and active color */
        dropDownItemColorSwitcher,
        dropDownItemColor,
        dropDownItemHoverColor,

        dropDownItemActiveColorSwitcher,
        dropDownItemActiveColor,
        dropDownItemActiveHoverColor,
        /** End Dropdown Menu Color and active color */

        /** Start Dropdown Menu Item Padding */
        dropDownItemPaddingUnits,
        dropDownItemDesktopPadding,
        dropDownItemTabletPadding,
        dropDownItemMobilePadding,
        dropDownItemPaddingLink,
        /** End Dropdown Menu Item Padding */

        /** Start Dropdown Menu Item Margin */
        dropDownItemMarginUnits,
        dropDownItemDesktopMargin,
        dropDownItemTabletMargin,
        dropDownItemMobileMargin,
        dropDownItemMarginLink,
        /** End Dropdown Menu Item Margin */

        /** Start Dropdown Menu Item Border */
        dropDownItemBorder,
        dropDownItemBorderColorSwitcher,
        dropDownItemBorderColor,
        dropDownItemBorderHoverColor,

        dropDownItemBorderUnits,
        dropDownItemDesktopBorder,
        dropDownItemTabletBorder,
        dropDownItemMobileBorder,
        dropDownItemBorderLink,

        dropDownItemBorderRadiusUnits,
        dropDownItemDesktopBorderRadius,
        dropDownItemTabletBorderRadius,
        dropDownItemMobileBorderRadius,
        dropDownItemBorderRadiusLink,
        /** End Dropdown Menu Item Border */

        /** Start Dropdown Menu Icon */
        dropDownIconSize,
        dropDownIconSizeUnits,
        dropDownIconColorSwitcher,
        dropDownIconColor,
        dropDownIconHoverColor,

        dropDownIconMarginUnits,
        dropDownIconDesktopMargin,
        dropDownIconTabletMargin,
        dropDownIconMobileMargin,
        dropDownIconMarginLink,
        /** End Dropdown Menu Icon */

        /** Start Hamburger Menu */
        hamburgerMenuIconSize,
        hamburgerMenuIconSizeUnits,
        hamburgerMenuIconColorSwitcher,
        hamburgerMenuIconColor,
        hamburgerMenuIconHoverColor,

        hamburgerMenuIconPaddingUnits,
        hamburgerMenuIconDesktopPadding,
        hamburgerMenuIconTabletPadding,
        hamburgerMenuIconMobilePadding,
        hamburgerMenuIconPaddingLink,
        /** End Hamburger Menu */

        /** Start Hamburger Menu Background */
        hamburgerMenuPopupBgColorSwitcher,
        hamburgerMenuPopupNormalBackgroundType,
        hamburgerMenuPopupNormalClassicColor,
        hamburgerMenuPopupNormalGradientColor,
        hamburgerMenuPopupNormalCustomGradientSwitcher,
        hamburgerMenuPopupNormalCustomGradientInputValue,

        hamburgerMenuPopupHoverBackgroundType,
        hamburgerMenuPopupHoverClassicColor,
        hamburgerMenuPopupHoverGradientColor,
        hamburgerMenuPopupHoverCustomGradientSwitcher,
        hamburgerMenuPopupHoverCustomGradientInputValue,

        /** End Hamburger Menu Background */

        /** Start Hamburger Menu Padding */
        hamburgerMenuPopupPaddingUnits,
        hamburgerMenuPopupDesktopPadding,
        hamburgerMenuPopupTabletPadding,
        hamburgerMenuPopupMobilePadding,
        hamburgerMenuPopupPaddingLink,
        /** End Hamburger Menu Padding */

        /** Start Hamburger Menu Typography */
        hamburgerMenuPopupGlobalTypographyData,
        hamburgerMenuPopupGlobalTypoSwitcher,
        hamburgerMenuPopupGlobalTypoType,
        hamburgerMenuPopupGlobalTypoOption,
        hamburgerMenuPopupFontFamily,
        hamburgerMenuPopupFontSize,
        hamburgerMenuPopupFontSizeUnits,
        hamburgerMenuPopupFontWeight,
        hamburgerMenuPopupFontStyle,
        hamburgerMenuPopupTextTransform,
        hamburgerMenuPopupTextDecoration,
        hamburgerMenuPopupLetterSpacing,
        hamburgerMenuPopupLetterSpacingUnits,
        hamburgerMenuPopupLineHeight,
        hamburgerMenuPopupLineHeightUnits,
        /** End Hamburger Menu Typography */
        
        /** Start Hamburger Menu Color */
        hamburgerMenuPopupColorSwitcher,
        hamburgerMenuPopupColor,
        hamburgerMenuPopupHoverColor,
        /** End Hamburger Menu Color */

        /** Start Hamburger Menu close icon color */
        hamburgerMenuCloseIconSize,
        hamburgerMenuCloseIconSizeUnits,
        hamburgerMenuCloseIconColorSwitcher,
        hamburgerMenuCloseIconColor,
        hamburgerMenuCloseIconHoverColor,
        /** End Hamburger Menu close icon color */

        /** Start Global Setting */
        navigationGlobalZIndex,

        navigationOverflow,
        navigationPositionType,
        navigationHZOrientationType,
        navigationVROrientationType,
        navigationHZLeftOffset,
        navigationHZLeftOffsetUnits,
        navigationHZRightOffset,
        navigationHZRightOffsetUnits,
        navigationVRTopOffset,
        navigationVRTopOffsetUnits,
        navigationVRBottomOffset,
        navigationVRBottomOffsetUnits,

        navigationGlobalPaddingUnits,
        navigationGlobalPaddingDesktop,
        navigationGlobalPaddingTablet,
        navigationGlobalPaddingMobile,
        navigationGlobalPaddingLink,

        navigationGlobalMarginUnits,
        navigationGlobalMarginDesktop,
        navigationGlobalMarginTablet,
        navigationGlobalMarginMobile,
        navigationGlobalMarginLink,

        navigationGlobalBgColorSwitcher, 
        navigationGlobalNormalBackgroundType,
        navigationGlobalNormalClassicColor,
        navigationGlobalNormalGradientColor,
        navigationGlobalNormalCustomGradientSwitcher,
        navigationGlobalNormalCustomGradientInputValue,

        navigationGlobalHoverBackgroundType,
        navigationGlobalHoverClassicColor,
        navigationGlobalHoverGradientColor,
        navigationGlobalHoverCustomGradientSwitcher,
        navigationGlobalHoverCustomGradientInputValue,
        
        navigationGlobalBorder, 
        navigationGlobalBorderColorSwitcher,
        navigationGlobalBorderColor,
        navigationGlobalBorderHoverColor,

        navigationGlobalBorderUnits,
        navigationGlobalBorderDesktop,
        navigationGlobalBorderTablet,
        navigationGlobalBorderMobile,
        navigationGlobalBorderLink,

        navigationGlobalBorderRadiusUnits,
        navigationGlobalBorderRadiusDesktop,
        navigationGlobalBorderRadiusTablet,
        navigationGlobalBorderRadiusMobile,
        navigationGlobalBorderRadiusLink,

        navigationGlobalBoxShadowSwitcher,
        navigationGlobalBoxShadowValues,
        navigationGlobalBoxShadowCssValue,
        navigationGlobalBoxShadowHoverValues,
        navigationGlobalBoxShadowHoverCssValue,

        navigationDesktopSwitcher,
        navigationTabletSwitcher,
        navigationMobileSwitcher,

        navigationGlobalCustomCSS,
        navigationGlobalWraperID,
        navigationGlobalWraperClass,


        
        /** End Global Setting */
    } = attributes;

    const navigationDesktopPaddingWidth    = `${navigationDesktopPadding?.top}${navigationPaddingUnits?.Desktop} ${navigationDesktopPadding?.right}${navigationPaddingUnits?.Desktop} ${navigationDesktopPadding?.bottom}${navigationPaddingUnits?.Desktop} ${navigationDesktopPadding?.left}${navigationPaddingUnits?.Desktop}`;
	const navigationTabletPaddingWidth     = `${navigationTabletPadding?.top}${navigationPaddingUnits?.Tablet} ${navigationTabletPadding?.right}${navigationPaddingUnits?.Tablet} ${navigationTabletPadding?.bottom}${navigationPaddingUnits?.Tablet} ${navigationTabletPadding?.left}${navigationPaddingUnits?.Tablet}`;
	const navigationMobilePaddingWidth     = `${navigationMobilePadding?.top}${navigationPaddingUnits?.Mobile} ${navigationMobilePadding?.right}${navigationPaddingUnits?.Mobile} ${navigationMobilePadding?.bottom}${navigationPaddingUnits?.Mobile} ${navigationMobilePadding?.left}${navigationPaddingUnits?.Mobile}`;

    const navigationDesktopMarginWidth = `${navigationDesktopMargin?.top}${navigationMarginUnits?.Desktop} ${navigationDesktopMargin?.right}${navigationMarginUnits?.Desktop} ${navigationDesktopMargin?.bottom}${navigationMarginUnits?.Desktop} ${navigationDesktopMargin?.left}${navigationMarginUnits?.Desktop}`;
	const navigationTabletMarginWidth = `${navigationTabletMargin?.top}${navigationMarginUnits?.Tablet} ${navigationTabletMargin?.right}${navigationMarginUnits?.Tablet} ${navigationTabletMargin?.bottom}${navigationMarginUnits?.Tablet} ${navigationTabletMargin?.left}${navigationMarginUnits?.Tablet}`;
	const navigationMobileMarginWidth = `${navigationMobileMargin?.top}${navigationMarginUnits?.Mobile} ${navigationMobileMargin?.right}${navigationMarginUnits?.Mobile} ${navigationMobileMargin?.bottom}${navigationMarginUnits?.Mobile} ${navigationMobileMargin?.left}${navigationMarginUnits?.Mobile}`;

    const navigationDesktopBorderWidth = `${navigationDesktopBorder?.top}${navigationBorderUnits?.Desktop} ${navigationDesktopBorder?.right}${navigationBorderUnits?.Desktop} ${navigationDesktopBorder?.bottom}${navigationBorderUnits?.Desktop} ${navigationDesktopBorder?.left}${navigationBorderUnits?.Desktop}`;
	const navigationTabletBorderWidth = `${navigationTabletBorder?.top}${navigationBorderUnits?.Tablet} ${navigationTabletBorder?.right}${navigationBorderUnits?.Tablet} ${navigationTabletBorder?.bottom}${navigationBorderUnits?.Tablet} ${navigationTabletBorder?.left}${navigationBorderUnits?.Tablet}`;
	const navigationMobileBorderWidth = `${navigationMobileBorder?.top}${navigationBorderUnits?.Mobile} ${navigationMobileBorder?.right}${navigationBorderUnits?.Mobile} ${navigationMobileBorder?.bottom}${navigationBorderUnits?.Mobile} ${navigationMobileBorder?.left}${navigationBorderUnits?.Mobile}`;

    const navigationDesktopBorderRadiusWidth = `${navigationDesktopBorderRadius?.top}${navigationBorderRadiusUnits?.Desktop} ${navigationDesktopBorderRadius?.right}${navigationBorderRadiusUnits?.Desktop} ${navigationDesktopBorderRadius?.bottom}${navigationBorderRadiusUnits?.Desktop} ${navigationDesktopBorderRadius?.left}${navigationBorderRadiusUnits?.Desktop}`;
	const navigationTabletBorderRadiusWidth = `${navigationTabletBorderRadius?.top}${navigationBorderRadiusUnits?.Tablet} ${navigationTabletBorderRadius?.right}${navigationBorderRadiusUnits?.Tablet} ${navigationTabletBorderRadius?.bottom}${navigationBorderRadiusUnits?.Tablet} ${navigationTabletBorderRadius?.left}${navigationBorderRadiusUnits?.Tablet}`;
	const navigationMobileBorderRadiusWidth = `${navigationMobileBorderRadius?.top}${navigationBorderRadiusUnits?.Mobile} ${navigationMobileBorderRadius?.right}${navigationBorderRadiusUnits?.Mobile} ${navigationMobileBorderRadius?.bottom}${navigationBorderRadiusUnits?.Mobile} ${navigationMobileBorderRadius?.left}${navigationBorderRadiusUnits?.Mobile}`;

    const dropDownDesktopPaddingWidth    = `${dropDownDesktopPadding?.top}${dropDownPaddingUnits?.Desktop} ${dropDownDesktopPadding?.right}${dropDownPaddingUnits?.Desktop} ${dropDownDesktopPadding?.bottom}${dropDownPaddingUnits?.Desktop} ${dropDownDesktopPadding?.left}${dropDownPaddingUnits?.Desktop}`;
	const dropDownTabletPaddingWidth     = `${dropDownTabletPadding?.top}${dropDownPaddingUnits?.Tablet} ${dropDownTabletPadding?.right}${dropDownPaddingUnits?.Tablet} ${dropDownTabletPadding?.bottom}${dropDownPaddingUnits?.Tablet} ${dropDownTabletPadding?.left}${dropDownPaddingUnits?.Tablet}`;
	const dropDownMobilePaddingWidth     = `${dropDownMobilePadding?.top}${dropDownPaddingUnits?.Mobile} ${dropDownMobilePadding?.right}${dropDownPaddingUnits?.Mobile} ${dropDownMobilePadding?.bottom}${dropDownPaddingUnits?.Mobile} ${dropDownMobilePadding?.left}${dropDownPaddingUnits?.Mobile}`;

    const dropDownDesktopMarginWidth = `${dropDownDesktopMargin?.top}${dropDownMarginUnits?.Desktop} ${dropDownDesktopMargin?.right}${dropDownMarginUnits?.Desktop} ${dropDownDesktopMargin?.bottom}${dropDownMarginUnits?.Desktop} ${dropDownDesktopMargin?.left}${dropDownMarginUnits?.Desktop}`;
	const dropDownTabletMarginWidth = `${dropDownTabletMargin?.top}${dropDownMarginUnits?.Tablet} ${dropDownTabletMargin?.right}${dropDownMarginUnits?.Tablet} ${dropDownTabletMargin?.bottom}${dropDownMarginUnits?.Tablet} ${dropDownTabletMargin?.left}${dropDownMarginUnits?.Tablet}`;
	const dropDownMobileMarginWidth = `${dropDownMobileMargin?.top}${dropDownMarginUnits?.Mobile} ${dropDownMobileMargin?.right}${dropDownMarginUnits?.Mobile} ${dropDownMobileMargin?.bottom}${dropDownMarginUnits?.Mobile} ${dropDownMobileMargin?.left}${dropDownMarginUnits?.Mobile}`;

    const dropDownDesktopBorderWidth = `${dropDownDesktopBorder?.top}${dropDownBorderUnits?.Desktop} ${dropDownDesktopBorder?.right}${dropDownBorderUnits?.Desktop} ${dropDownDesktopBorder?.bottom}${dropDownBorderUnits?.Desktop} ${dropDownDesktopBorder?.left}${dropDownBorderUnits?.Desktop}`;
	const dropDownTabletBorderWidth = `${dropDownTabletBorder?.top}${dropDownBorderUnits?.Tablet} ${dropDownTabletBorder?.right}${dropDownBorderUnits?.Tablet} ${dropDownTabletBorder?.bottom}${dropDownBorderUnits?.Tablet} ${dropDownTabletBorder?.left}${dropDownBorderUnits?.Tablet}`;
	const dropDownMobileBorderWidth = `${dropDownMobileBorder?.top}${dropDownBorderUnits?.Mobile} ${dropDownMobileBorder?.right}${dropDownBorderUnits?.Mobile} ${dropDownMobileBorder?.bottom}${dropDownBorderUnits?.Mobile} ${dropDownMobileBorder?.left}${dropDownBorderUnits?.Mobile}`;

    const dropDownDesktopBorderRadiusWidth = `${dropDownDesktopBorderRadius?.top}${dropDownBorderRadiusUnits?.Desktop} ${dropDownDesktopBorderRadius?.right}${dropDownBorderRadiusUnits?.Desktop} ${dropDownDesktopBorderRadius?.bottom}${dropDownBorderRadiusUnits?.Desktop} ${dropDownDesktopBorderRadius?.left}${dropDownBorderRadiusUnits?.Desktop}`;
	const dropDownTabletBorderRadiusWidth = `${dropDownTabletBorderRadius?.top}${dropDownBorderRadiusUnits?.Tablet} ${dropDownTabletBorderRadius?.right}${dropDownBorderRadiusUnits?.Tablet} ${dropDownTabletBorderRadius?.bottom}${dropDownBorderRadiusUnits?.Tablet} ${dropDownTabletBorderRadius?.left}${dropDownBorderRadiusUnits?.Tablet}`;
	const dropDownMobileBorderRadiusWidth = `${dropDownMobileBorderRadius?.top}${dropDownBorderRadiusUnits?.Mobile} ${dropDownMobileBorderRadius?.right}${dropDownBorderRadiusUnits?.Mobile} ${dropDownMobileBorderRadius?.bottom}${dropDownBorderRadiusUnits?.Mobile} ${dropDownMobileBorderRadius?.left}${dropDownBorderRadiusUnits?.Mobile}`;

    const dropDownItemDesktopPaddingWidth    = `${dropDownItemDesktopPadding?.top}${dropDownItemPaddingUnits?.Desktop} ${dropDownItemDesktopPadding?.right}${dropDownItemPaddingUnits?.Desktop} ${dropDownItemDesktopPadding?.bottom}${dropDownItemPaddingUnits?.Desktop} ${dropDownItemDesktopPadding?.left}${dropDownItemPaddingUnits?.Desktop}`;
	const dropDownItemTabletPaddingWidth     = `${dropDownItemTabletPadding?.top}${dropDownItemPaddingUnits?.Tablet} ${dropDownItemTabletPadding?.right}${dropDownItemPaddingUnits?.Tablet} ${dropDownItemTabletPadding?.bottom}${dropDownItemPaddingUnits?.Tablet} ${dropDownItemTabletPadding?.left}${dropDownItemPaddingUnits?.Tablet}`;
	const dropDownItemMobilePaddingWidth     = `${dropDownItemMobilePadding?.top}${dropDownItemPaddingUnits?.Mobile} ${dropDownItemMobilePadding?.right}${dropDownItemPaddingUnits?.Mobile} ${dropDownItemMobilePadding?.bottom}${dropDownItemPaddingUnits?.Mobile} ${dropDownItemMobilePadding?.left}${dropDownItemPaddingUnits?.Mobile}`;

    const dropDownItemDesktopMarginWidth = `${dropDownItemDesktopMargin?.top}${dropDownItemMarginUnits?.Desktop} ${dropDownItemDesktopMargin?.right}${dropDownItemMarginUnits?.Desktop} ${dropDownItemDesktopMargin?.bottom}${dropDownItemMarginUnits?.Desktop} ${dropDownItemDesktopMargin?.left}${dropDownItemMarginUnits?.Desktop}`;
	const dropDownItemTabletMarginWidth = `${dropDownItemTabletMargin?.top}${dropDownItemMarginUnits?.Tablet} ${dropDownItemTabletMargin?.right}${dropDownItemMarginUnits?.Tablet} ${dropDownItemTabletMargin?.bottom}${dropDownItemMarginUnits?.Tablet} ${dropDownItemTabletMargin?.left}${dropDownItemMarginUnits?.Tablet}`;
	const dropDownItemMobileMarginWidth = `${dropDownItemMobileMargin?.top}${dropDownItemMarginUnits?.Mobile} ${dropDownItemMobileMargin?.right}${dropDownItemMarginUnits?.Mobile} ${dropDownItemMobileMargin?.bottom}${dropDownItemMarginUnits?.Mobile} ${dropDownItemMobileMargin?.left}${dropDownItemMarginUnits?.Mobile}`;

    const dropDownItemDesktopBorderWidth = `${dropDownItemDesktopBorder?.top}${dropDownItemBorderUnits?.Desktop} ${dropDownItemDesktopBorder?.right}${dropDownItemBorderUnits?.Desktop} ${dropDownItemDesktopBorder?.bottom}${dropDownItemBorderUnits?.Desktop} ${dropDownItemDesktopBorder?.left}${dropDownItemBorderUnits?.Desktop}`;
	const dropDownItemTabletBorderWidth = `${dropDownItemTabletBorder?.top}${dropDownItemBorderUnits?.Tablet} ${dropDownItemTabletBorder?.right}${dropDownItemBorderUnits?.Tablet} ${dropDownItemTabletBorder?.bottom}${dropDownItemBorderUnits?.Tablet} ${dropDownItemTabletBorder?.left}${dropDownItemBorderUnits?.Tablet}`;
	const dropDownItemMobileBorderWidth = `${dropDownItemMobileBorder?.top}${dropDownItemBorderUnits?.Mobile} ${dropDownItemMobileBorder?.right}${dropDownItemBorderUnits?.Mobile} ${dropDownItemMobileBorder?.bottom}${dropDownItemBorderUnits?.Mobile} ${dropDownItemMobileBorder?.left}${dropDownItemBorderUnits?.Mobile}`;

    const dropDownItemDesktopBorderRadiusWidth = `${dropDownItemDesktopBorderRadius?.top}${dropDownItemBorderRadiusUnits?.Desktop} ${dropDownItemDesktopBorderRadius?.right}${dropDownItemBorderRadiusUnits?.Desktop} ${dropDownItemDesktopBorderRadius?.bottom}${dropDownItemBorderRadiusUnits?.Desktop} ${dropDownItemDesktopBorderRadius?.left}${dropDownItemBorderRadiusUnits?.Desktop}`;
	const dropDownItemTabletBorderRadiusWidth = `${dropDownItemTabletBorderRadius?.top}${dropDownItemBorderRadiusUnits?.Tablet} ${dropDownItemTabletBorderRadius?.right}${dropDownItemBorderRadiusUnits?.Tablet} ${dropDownItemTabletBorderRadius?.bottom}${dropDownItemBorderRadiusUnits?.Tablet} ${dropDownItemTabletBorderRadius?.left}${dropDownItemBorderRadiusUnits?.Tablet}`;
	const dropDownItemMobileBorderRadiusWidth = `${dropDownItemMobileBorderRadius?.top}${dropDownItemBorderRadiusUnits?.Mobile} ${dropDownItemMobileBorderRadius?.right}${dropDownItemBorderRadiusUnits?.Mobile} ${dropDownItemMobileBorderRadius?.bottom}${dropDownItemBorderRadiusUnits?.Mobile} ${dropDownItemMobileBorderRadius?.left}${dropDownItemBorderRadiusUnits?.Mobile}`;

    const dropDownIconDesktopMarginWidth = `${dropDownIconDesktopMargin?.top}${dropDownIconMarginUnits?.Desktop} ${dropDownIconDesktopMargin?.right}${dropDownIconMarginUnits?.Desktop} ${dropDownIconDesktopMargin?.bottom}${dropDownIconMarginUnits?.Desktop} ${dropDownIconDesktopMargin?.left}${dropDownIconMarginUnits?.Desktop}`;
	const dropDownIconTabletMarginWidth = `${dropDownIconTabletMargin?.top}${dropDownIconMarginUnits?.Tablet} ${dropDownIconTabletMargin?.right}${dropDownIconMarginUnits?.Tablet} ${dropDownIconTabletMargin?.bottom}${dropDownIconMarginUnits?.Tablet} ${dropDownIconTabletMargin?.left}${dropDownIconMarginUnits?.Tablet}`;
	const dropDownIconMobileMarginWidth = `${dropDownIconMobileMargin?.top}${dropDownIconMarginUnits?.Mobile} ${dropDownIconMobileMargin?.right}${dropDownIconMarginUnits?.Mobile} ${dropDownIconMobileMargin?.bottom}${dropDownIconMarginUnits?.Mobile} ${dropDownIconMobileMargin?.left}${dropDownIconMarginUnits?.Mobile}`;

    const hamburgerMenuIconDesktopPaddingWidth    = `${hamburgerMenuIconDesktopPadding?.top}${hamburgerMenuIconPaddingUnits?.Desktop} ${hamburgerMenuIconDesktopPadding?.right}${hamburgerMenuIconPaddingUnits?.Desktop} ${hamburgerMenuIconDesktopPadding?.bottom}${hamburgerMenuIconPaddingUnits?.Desktop} ${hamburgerMenuIconDesktopPadding?.left}${hamburgerMenuIconPaddingUnits?.Desktop}`;
	const hamburgerMenuIconTabletPaddingWidth     = `${hamburgerMenuIconTabletPadding?.top}${hamburgerMenuIconPaddingUnits?.Tablet} ${hamburgerMenuIconTabletPadding?.right}${hamburgerMenuIconPaddingUnits?.Tablet} ${hamburgerMenuIconTabletPadding?.bottom}${hamburgerMenuIconPaddingUnits?.Tablet} ${hamburgerMenuIconTabletPadding?.left}${hamburgerMenuIconPaddingUnits?.Tablet}`;
	const hamburgerMenuIconMobilePaddingWidth     = `${hamburgerMenuIconMobilePadding?.top}${hamburgerMenuIconPaddingUnits?.Mobile} ${hamburgerMenuIconMobilePadding?.right}${hamburgerMenuIconPaddingUnits?.Mobile} ${hamburgerMenuIconMobilePadding?.bottom}${hamburgerMenuIconPaddingUnits?.Mobile} ${hamburgerMenuIconMobilePadding?.left}${hamburgerMenuIconPaddingUnits?.Mobile}`;

    const hamburgerMenuPopupDesktopPaddingWidth    = `${hamburgerMenuPopupDesktopPadding?.top}${hamburgerMenuPopupPaddingUnits?.Desktop} ${hamburgerMenuPopupDesktopPadding?.right}${hamburgerMenuPopupPaddingUnits?.Desktop} ${hamburgerMenuPopupDesktopPadding?.bottom}${hamburgerMenuPopupPaddingUnits?.Desktop} ${hamburgerMenuPopupDesktopPadding?.left}${hamburgerMenuPopupPaddingUnits?.Desktop}`;
	const hamburgerMenuPopupTabletPaddingWidth     = `${hamburgerMenuPopupTabletPadding?.top}${hamburgerMenuPopupPaddingUnits?.Tablet} ${hamburgerMenuPopupTabletPadding?.right}${hamburgerMenuPopupPaddingUnits?.Tablet} ${hamburgerMenuPopupTabletPadding?.bottom}${hamburgerMenuPopupPaddingUnits?.Tablet} ${hamburgerMenuPopupTabletPadding?.left}${hamburgerMenuPopupPaddingUnits?.Tablet}`;
	const hamburgerMenuPopupMobilePaddingWidth     = `${hamburgerMenuPopupMobilePadding?.top}${hamburgerMenuPopupPaddingUnits?.Mobile} ${hamburgerMenuPopupMobilePadding?.right}${hamburgerMenuPopupPaddingUnits?.Mobile} ${hamburgerMenuPopupMobilePadding?.bottom}${hamburgerMenuPopupPaddingUnits?.Mobile} ${hamburgerMenuPopupMobilePadding?.left}${hamburgerMenuPopupPaddingUnits?.Mobile}`;

    const navigationGlobalDesktopPaddingWidth    = `${navigationGlobalPaddingDesktop?.top}${navigationGlobalPaddingUnits?.Desktop} ${navigationGlobalPaddingDesktop?.right}${navigationGlobalPaddingUnits?.Desktop} ${navigationGlobalPaddingDesktop?.bottom}${navigationGlobalPaddingUnits?.Desktop} ${navigationGlobalPaddingDesktop?.left}${navigationGlobalPaddingUnits?.Desktop}`;
	const navigationGlobalTabletPaddingWidth     = `${navigationGlobalPaddingTablet?.top}${navigationGlobalPaddingUnits?.Tablet} ${navigationGlobalPaddingTablet?.right}${navigationGlobalPaddingUnits?.Tablet} ${navigationGlobalPaddingTablet?.bottom}${navigationGlobalPaddingUnits?.Tablet} ${navigationGlobalPaddingTablet?.left}${navigationGlobalPaddingUnits?.Tablet}`;
	const navigationGlobalMobilePaddingWidth     = `${navigationGlobalPaddingMobile?.top}${navigationGlobalPaddingUnits?.Mobile} ${navigationGlobalPaddingMobile?.right}${navigationGlobalPaddingUnits?.Mobile} ${navigationGlobalPaddingMobile?.bottom}${navigationGlobalPaddingUnits?.Mobile} ${navigationGlobalPaddingMobile?.left}${navigationGlobalPaddingUnits?.Mobile}`;

    const navigationGlobalDesktopMarginWidth = `${navigationGlobalMarginDesktop?.top}${navigationGlobalMarginUnits?.Desktop} ${navigationGlobalMarginDesktop?.right}${navigationGlobalMarginUnits?.Desktop} ${navigationGlobalMarginDesktop?.bottom}${navigationGlobalMarginUnits?.Desktop} ${navigationGlobalMarginDesktop?.left}${navigationGlobalMarginUnits?.Desktop}`;
	const navigationGlobalTabletMarginWidth = `${navigationGlobalMarginTablet?.top}${navigationGlobalMarginUnits?.Tablet} ${navigationGlobalMarginTablet?.right}${navigationGlobalMarginUnits?.Tablet} ${navigationGlobalMarginTablet?.bottom}${navigationGlobalMarginUnits?.Tablet} ${navigationGlobalMarginTablet?.left}${navigationGlobalMarginUnits?.Tablet}`;
	const navigationGlobalMobileMarginWidth = `${navigationGlobalMarginMobile?.top}${navigationGlobalMarginUnits?.Mobile} ${navigationGlobalMarginMobile?.right}${navigationGlobalMarginUnits?.Mobile} ${navigationGlobalMarginMobile?.bottom}${navigationGlobalMarginUnits?.Mobile} ${navigationGlobalMarginMobile?.left}${navigationGlobalMarginUnits?.Mobile}`;

    const navigationGlobalDesktopBorderWidth = `${navigationGlobalBorderDesktop?.top}${navigationGlobalBorderUnits?.Desktop} ${navigationGlobalBorderDesktop?.right}${navigationGlobalBorderUnits?.Desktop} ${navigationGlobalBorderDesktop?.bottom}${navigationGlobalBorderUnits?.Desktop} ${navigationGlobalBorderDesktop?.left}${navigationGlobalBorderUnits?.Desktop}`;
	const navigationGlobalTabletBorderWidth = `${navigationGlobalBorderTablet?.top}${navigationGlobalBorderUnits?.Tablet} ${navigationGlobalBorderTablet?.right}${navigationGlobalBorderUnits?.Tablet} ${navigationGlobalBorderTablet?.bottom}${navigationGlobalBorderUnits?.Tablet} ${navigationGlobalBorderTablet?.left}${navigationGlobalBorderUnits?.Tablet}`;
	const navigationGlobalMobileBorderWidth = `${navigationGlobalBorderMobile?.top}${navigationGlobalBorderUnits?.Mobile} ${navigationGlobalBorderMobile?.right}${navigationGlobalBorderUnits?.Mobile} ${navigationGlobalBorderMobile?.bottom}${navigationGlobalBorderUnits?.Mobile} ${navigationGlobalBorderMobile?.left}${navigationGlobalBorderUnits?.Mobile}`;

    const navigationGlobalDesktopBorderRadiusWidth = `${navigationGlobalBorderRadiusDesktop?.top}${navigationGlobalBorderRadiusUnits?.Desktop} ${navigationGlobalBorderRadiusDesktop?.right}${navigationGlobalBorderRadiusUnits?.Desktop} ${navigationGlobalBorderRadiusDesktop?.bottom}${navigationGlobalBorderRadiusUnits?.Desktop} ${navigationGlobalBorderRadiusDesktop?.left}${navigationGlobalBorderRadiusUnits?.Desktop}`;
    const navigationGlobalTabletBorderRadiusWidth = `${navigationGlobalBorderRadiusTablet?.top}${navigationGlobalBorderRadiusUnits?.Tablet} ${navigationGlobalBorderRadiusTablet?.right}${navigationGlobalBorderRadiusUnits?.Tablet} ${navigationGlobalBorderRadiusTablet?.bottom}${navigationGlobalBorderRadiusUnits?.Tablet} ${navigationGlobalBorderRadiusTablet?.left}${navigationGlobalBorderRadiusUnits?.Tablet}`;
    const navigationGlobalMobileBorderRadiusWidth = `${navigationGlobalBorderRadiusMobile?.top}${navigationGlobalBorderRadiusUnits?.Mobile} ${navigationGlobalBorderRadiusMobile?.right}${navigationGlobalBorderRadiusUnits?.Mobile} ${navigationGlobalBorderRadiusMobile?.bottom}${navigationGlobalBorderRadiusUnits?.Mobile} ${navigationGlobalBorderRadiusMobile?.left}${navigationGlobalBorderRadiusUnits?.Mobile}`;

    const advancedNavigationBlockStyle = `
    
        .${blockID}.fb-advanced-navigation-main-wrapper {
            ${navigationPositionType === 'default' ? `position: relative;` : ''}  
            ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' ? `width: 100%;` : ''}
            ${navigationPositionType !== 'default' ? `position: ${navigationPositionType};` : ''}
            ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationHZOrientationType === 'left' && navigationHZLeftOffset?.Desktop !== undefined ? `left: ${navigationHZLeftOffset?.Desktop}${navigationHZLeftOffsetUnits?.Desktop};` : ''}
            ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationVROrientationType === 'top' && navigationVRTopOffset?.Desktop !== undefined ? `top: ${navigationVRTopOffset?.Desktop}${navigationVRTopOffsetUnits?.Desktop};` : ''}
            ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationVROrientationType === 'bottom' && navigationVRBottomOffset?.Desktop !== undefined ? `bottom: ${navigationVRBottomOffset?.Desktop}${navigationVRBottomOffsetUnits?.Desktop};` : ''}
            ${navigationGlobalZIndex.Desktop ? `z-index: ${navigationGlobalZIndex.Desktop};` : ''}
            ${navigationOverflow !== 'default' ? `overflow: ${navigationOverflow};` : ''}
        }
        .${blockID} .advanced-navigation-wrapper {
            ${navigationGlobalDesktopPaddingWidth && navigationGlobalPaddingDesktop?.top? `padding: ${navigationGlobalDesktopPaddingWidth};` : ''}
            ${navigationGlobalDesktopMarginWidth && navigationGlobalMarginDesktop?.top? `margin: ${navigationGlobalDesktopMarginWidth};` : ''} 
            ${navigationGlobalBorder ? `border: ${navigationGlobalBorder};` : ''} 
            ${navigationGlobalDesktopBorderWidth && navigationGlobalBorderDesktop?.top? `border-width: ${navigationGlobalDesktopBorderWidth};` : ''}
            ${navigationGlobalDesktopBorderRadiusWidth && navigationGlobalBorderRadiusDesktop?.top? `border-radius: ${navigationGlobalDesktopBorderRadiusWidth};` : ''}
            ${navigationGlobalBorderColor ? `border-color: ${navigationGlobalBorderColor};` : ''}
            ${navigationGlobalBoxShadowCssValue ? `box-shadow: ${navigationGlobalBoxShadowCssValue};` : ''}
            ${navigationGlobalNormalBackgroundType === 'gradient' ? `  
                ${navigationGlobalNormalCustomGradientSwitcher && navigationGlobalNormalCustomGradientInputValue ? `background: ${navigationGlobalNormalCustomGradientInputValue};` : `background: ${navigationGlobalNormalGradientColor};`}
            `: `
                ${navigationGlobalNormalClassicColor ? `background: ${navigationGlobalNormalClassicColor};` : ''}
            `}
            transition: all .3s ease-in-out;
            position: relative;
        }
        .${blockID} .advanced-navigation-wrapper:hover {
            ${navigationGlobalHoverBackgroundType === 'gradient' ? `  
                ${navigationGlobalHoverCustomGradientSwitcher && navigationGlobalHoverCustomGradientInputValue ? `background: ${navigationGlobalHoverCustomGradientInputValue};` : `background: ${navigationGlobalHoverGradientColor};`}
            `: `
                ${navigationGlobalHoverClassicColor ? `background: ${navigationGlobalHoverClassicColor};` : ''}
            `}
            ${navigationGlobalBorderHoverColor ? `border-color: ${navigationGlobalBorderHoverColor};` : ''}
            ${navigationGlobalBoxShadowHoverCssValue ? `box-shadow: ${navigationGlobalBoxShadowHoverCssValue};` : ''}
        }

        .${blockID} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item {
            ${navigationDesktopMarginWidth && navigationDesktopMargin?.top? `margin: ${navigationDesktopMarginWidth};` : ''} 
            ${navigationBorder ? `border: ${navigationBorder};` : ''} 
            ${navigationBorderColor ? `border-color: ${navigationBorderColor};` : ''}
            ${navigationDesktopBorderWidth && navigationDesktopBorder?.top? `border-width: ${navigationDesktopBorderWidth};` : ''}
            ${navigationDesktopBorderRadiusWidth && navigationDesktopBorderRadius?.top? `border-radius: ${navigationDesktopBorderRadiusWidth};` : ''}
            ${navigationBoxShadowCssValue ? `box-shadow: ${navigationBoxShadowCssValue};` : ''}
        }

        .${blockID} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item:hover {
            ${navigationBorderHoverColor ? `border-color: ${navigationBorderHoverColor};` : ''}
            ${navigationBoxShadowHoverCssValue ? `box-shadow: ${navigationBoxShadowHoverCssValue};` : ''}
        }

        .${blockID} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation__container {
            ${navigationGap?.Desktop ? `gap: ${navigationGap?.Desktop}${navigationGapUnits?.Desktop};` : ''}	
        }
        .${blockID} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item .wp-block-navigation-item__content {
            ${navigationGlobalTypoSwitcher?.fontFamily === true && navigationGlobalTypographyData?.fontFamily ? `font-family: ${navigationGlobalTypographyData?.fontFamily};` : ''}
            ${navigationGlobalTypoSwitcher?.fontSize === true && navigationGlobalTypographyData?.fontSize ? `font-size: ${navigationGlobalTypographyData?.fontSize};` : ''}
            ${navigationGlobalTypoSwitcher?.fontWeight === true && navigationGlobalTypographyData?.fontWeight ? `font-weight: ${navigationGlobalTypographyData?.fontWeight};` : ''}
            ${navigationGlobalTypoSwitcher?.fontStyle === true && navigationGlobalTypographyData?.fontStyle ? `font-style: ${navigationGlobalTypographyData?.fontStyle};` : ''}
            ${navigationGlobalTypoSwitcher?.textTransform === true && navigationGlobalTypographyData?.textTransform ? `text-transform: ${navigationGlobalTypographyData?.textTransform};` : ''}
            ${navigationGlobalTypoSwitcher?.textDecoration === true && navigationGlobalTypographyData?.textDecoration ? `text-decoration: ${navigationGlobalTypographyData?.textDecoration};` : ''}
            ${navigationGlobalTypoSwitcher?.letterSpacing === true && navigationGlobalTypographyData?.letterSpacing ? `letter-spacing: ${navigationGlobalTypographyData?.letterSpacing};` : ''}
            ${navigationGlobalTypoSwitcher?.lineHeight === true && navigationGlobalTypographyData?.lineHeight ? `line-height: ${navigationGlobalTypographyData?.lineHeight};` : ''}
                
            ${navigationGlobalTypoSwitcher?.fontFamily === false && navigationFontFamily && navigationFontFamily !== 'Default' ? `font-family: ${navigationFontFamily};` : ''}
            ${navigationGlobalTypoSwitcher?.fontSize === false && navigationFontSize?.Desktop && navigationFontSizeUnits?.Desktop ? `font-size: ${navigationFontSize?.Desktop}${navigationFontSizeUnits?.Desktop};` : ''}
            ${navigationGlobalTypoSwitcher?.fontWeight === false && navigationFontWeight ? `font-weight: ${navigationFontWeight};` : ''}
            ${navigationGlobalTypoSwitcher?.fontStyle === false && navigationFontStyle ? `font-style: ${navigationFontStyle};` : ''}
            ${navigationGlobalTypoSwitcher?.textTransform === false && navigationTextTransform ? `text-transform: ${navigationTextTransform};` : ''}
            ${navigationGlobalTypoSwitcher?.textDecoration === false && navigationTextDecoration ? `text-decoration: ${navigationTextDecoration};` : ''}
            ${navigationGlobalTypoSwitcher?.letterSpacing === false && navigationLetterSpacing?.Desktop && navigationLetterSpacingUnits?.Desktop ? `letter-spacing: ${navigationLetterSpacing?.Desktop}${navigationLetterSpacingUnits?.Desktop};` : ''}
            ${navigationGlobalTypoSwitcher?.lineHeight === false && navigationLineHeight?.Desktop && navigationLineHeightUnits?.Desktop ? `line-height: ${navigationLineHeight?.Desktop}${navigationLineHeightUnits?.Desktop};` : ''}
            
            ${navigationNormalBackgroundType === 'gradient' ? `  
                ${navigationNormalCustomGradientSwitcher && navigationNormalCustomGradientInputValue ? `background: ${navigationNormalCustomGradientInputValue};` : `background: ${navigationNormalGradientColor};`}
            `: `
                ${navigationNormalClassicColor ? `background: ${navigationNormalClassicColor};` : ''}
            `}
            
            ${navigationColor ? `color: ${navigationColor};` : ''}
            ${navigationDesktopPaddingWidth && navigationDesktopPadding?.top? `padding: ${navigationDesktopPaddingWidth};` : ''} 
            outline: none !important;
            box-shadow: none !important;
            transition: all .3s ease-in-out;
        }
        .${blockID} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item .wp-block-navigation-item__content:hover {
            ${navigationHoverColor ? `color: ${navigationHoverColor};` : ''}
            
            ${navigationHoverBackgroundType === 'gradient' ? `  
                ${navigationHoverCustomGradientSwitcher && navigationHoverCustomGradientInputValue ? `background: ${navigationHoverCustomGradientInputValue};` : `background: ${navigationHoverGradientColor};`}
            `: `
                ${navigationHoverClassicColor ? `background: ${navigationHoverClassicColor};` : ''}
            `}
            text-decoration: none !important;
        }

        .${blockID} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item.current-menu-item .wp-block-navigation-item__content {
            ${navigationActiveColor ? `color: ${navigationActiveColor};` : ''}
            ${navigationItemActiveNormalBackgroundType === 'gradient' ? `  
                ${navigationItemActiveNormalCustomGradientSwitcher && navigationItemActiveNormalCustomGradientInputValue ? `background: ${navigationItemActiveNormalCustomGradientInputValue};` : `background: ${navigationItemActiveNormalGradientColor};`}
            `: `
                ${navigationItemActiveNormalClassicColor ? `background: ${navigationItemActiveNormalClassicColor};` : ''}
            `}
            transition: all .3s ease-in-out;
        }

        .${blockID} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item.current-menu-item .wp-block-navigation-item__content:hover {
            ${navigationActiveHoverColor ? `color: ${navigationActiveHoverColor};` : `color: ${navigationHoverColor};`}
            ${navigationHoverBackgroundType === 'gradient' ? `  
                ${navigationHoverCustomGradientSwitcher && navigationHoverCustomGradientInputValue ? `background: ${navigationHoverCustomGradientInputValue};` : `background: ${navigationHoverGradientColor};`}
            `: `
                ${navigationHoverClassicColor ? `background: ${navigationHoverClassicColor};` : ''}
            `}
            transition: all .3s ease-in-out;
        }

        .${blockID} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container {
            ${dropDownWrapperMinWidth?.Desktop ? `min-width: ${dropDownWrapperMinWidth?.Desktop}${dropDownWrapperMinWidthUnits?.Desktop} !important;` : ''}

            ${dropDownDesktopPaddingWidth && dropDownDesktopPadding?.top? `padding: ${dropDownDesktopPaddingWidth};` : ''}
            ${dropDownDesktopMarginWidth && dropDownDesktopMargin?.top? `margin: ${dropDownDesktopMarginWidth};` : ''} 
            ${dropDownBorder ? `border: ${dropDownBorder};` : ''} 
            ${dropDownBorderColor ? `border-color: ${dropDownBorderColor};` : ''}
            ${dropDownDesktopBorderWidth && dropDownDesktopBorder?.top? `border-width: ${dropDownDesktopBorderWidth};` : ''}
            ${dropDownDesktopBorderRadiusWidth && dropDownDesktopBorderRadius?.top? `border-radius: ${dropDownDesktopBorderRadiusWidth};` : ''}
            ${dropDownBoxShadowCssValue ? `box-shadow: ${dropDownBoxShadowCssValue};` : ''}

            ${dropDownNormalBackgroundType === 'gradient' ? `  
                ${dropDownNormalCustomGradientSwitcher && dropDownNormalCustomGradientInputValue ? `background: ${dropDownNormalCustomGradientInputValue};` : `background: ${dropDownNormalGradientColor};`}
            `: `
                ${dropDownNormalClassicColor ? `background: ${dropDownNormalClassicColor};` : ''}
            `}
        }

        .${blockID} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container:hover {
            ${dropDownBoxShadowHoverCssValue ? `box-shadow: ${dropDownBoxShadowHoverCssValue};` : ''}
            ${dropDownHoverBackgroundType === 'gradient' ? `  
                ${dropDownHoverCustomGradientSwitcher && dropDownHoverCustomGradientInputValue ? `background: ${dropDownHoverCustomGradientInputValue};` : `background: ${dropDownHoverGradientColor};`}
            `: `
                ${dropDownHoverClassicColor ? `background: ${dropDownHoverClassicColor};` : ''}
            `}
        }

        .${blockID} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container .wp-block-navigation-item__content {
            ${dropDownItemTypoSwitcher?.fontFamily === true && dropDownItemTypographyData?.fontFamily ? `font-family: ${dropDownItemTypographyData?.fontFamily};` : ''}
            ${dropDownItemTypoSwitcher?.fontSize === true && dropDownItemTypographyData?.fontSize ? `font-size: ${dropDownItemTypographyData?.fontSize};` : ''}
            ${dropDownItemTypoSwitcher?.fontWeight === true && dropDownItemTypographyData?.fontWeight ? `font-weight: ${dropDownItemTypographyData?.fontWeight};` : ''}
            ${dropDownItemTypoSwitcher?.fontStyle === true && dropDownItemTypographyData?.fontStyle ? `font-style: ${dropDownItemTypographyData?.fontStyle};` : ''}
            ${dropDownItemTypoSwitcher?.textTransform === true && dropDownItemTypographyData?.textTransform ? `text-transform: ${dropDownItemTypographyData?.textTransform};` : ''}
            ${dropDownItemTypoSwitcher?.textDecoration === true && dropDownItemTypographyData?.textDecoration ? `text-decoration: ${dropDownItemTypographyData?.textDecoration};` : ''}
            ${dropDownItemTypoSwitcher?.letterSpacing === true && dropDownItemTypographyData?.letterSpacing ? `letter-spacing: ${dropDownItemTypographyData?.letterSpacing};` : ''}
            ${dropDownItemTypoSwitcher?.lineHeight === true && dropDownItemTypographyData?.lineHeight ? `line-height: ${dropDownItemTypographyData?.lineHeight};` : ''}
                
            ${dropDownItemTypoSwitcher?.fontFamily === false && dropDownItemFontFamily && dropDownItemFontFamily !== 'Default' ? `font-family: ${dropDownItemFontFamily};` : ''}
            ${dropDownItemTypoSwitcher?.fontSize === false && dropDownItemFontSize?.Desktop && dropDownItemFontSizeUnits?.Desktop ? `font-size: ${dropDownItemFontSize?.Desktop}${dropDownItemFontSizeUnits?.Desktop};` : ''}
            ${dropDownItemTypoSwitcher?.fontWeight === false && dropDownItemFontWeight ? `font-weight: ${dropDownItemFontWeight};` : ''}
            ${dropDownItemTypoSwitcher?.fontStyle === false && dropDownItemFontStyle ? `font-style: ${dropDownItemFontStyle};` : ''}
            ${dropDownItemTypoSwitcher?.textTransform === false && dropDownItemTextTransform ? `text-transform: ${dropDownItemTextTransform};` : ''}
            ${dropDownItemTypoSwitcher?.textDecoration === false && dropDownItemTextDecoration ? `text-decoration: ${dropDownItemTextDecoration};` : ''}
            ${dropDownItemTypoSwitcher?.letterSpacing === false && dropDownItemLetterSpacing.Desktop && dropDownItemLetterSpacingUnits.Desktop ? `letter-spacing: ${dropDownItemLetterSpacing.Desktop}${dropDownItemLetterSpacingUnits.Desktop};` : ''}
            ${dropDownItemTypoSwitcher?.lineHeight === false && dropDownItemLineHeight.Desktop && dropDownItemLineHeightUnits.Desktop ? `line-height: ${dropDownItemLineHeight.Desktop}${dropDownItemLineHeightUnits.Desktop};` : ''}
            
            ${dropDownItemColor ? `color: ${dropDownItemColor};` : ''}
            ${dropDownItemDesktopPaddingWidth && dropDownItemDesktopPadding?.top? `padding: ${dropDownItemDesktopPaddingWidth};` : ''}
            ${dropDownItemDesktopMarginWidth && dropDownItemDesktopMargin?.top? `margin: ${dropDownItemDesktopMarginWidth};` : ''} 
            ${dropDownItemBorder ? `border: ${dropDownItemBorder};` : ''} 
            ${dropDownItemBorderColor ? `border-color: ${dropDownItemBorderColor};` : ''}
            ${dropDownItemDesktopBorderWidth && dropDownItemDesktopBorder?.top? `border-width: ${dropDownItemDesktopBorderWidth};` : ''}
            ${dropDownItemDesktopBorderRadiusWidth && dropDownItemDesktopBorderRadius?.top? `border-radius: ${dropDownItemDesktopBorderRadiusWidth};` : ''}
            outline: none !important;
            box-shadow: none !important;
            transition: all .3s ease-in-out;
        }
        .${blockID} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container .wp-block-navigation-item__content:hover {
            ${dropDownItemHoverColor ? `color: ${dropDownItemHoverColor};` : ''}
        }

        .${blockID} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container .wp-block-navigation-item.current-menu-item .wp-block-navigation-item__content {
            ${dropDownItemActiveColor ? `color: ${dropDownItemActiveColor};` : ''}
        }

        .${blockID} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container .wp-block-navigation-item.current-menu-item .wp-block-navigation-item__content:hover {
            ${dropDownItemActiveHoverColor ? `color: ${dropDownItemActiveHoverColor};` : ''}
        }


        .${blockID} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-icon {
            ${dropDownIconSize?.Desktop ? `width: ${dropDownIconSize?.Desktop}${dropDownIconSizeUnits?.Desktop};` : ''}
            ${dropDownIconSize?.Desktop ? `height: ${dropDownIconSize?.Desktop}${dropDownIconSizeUnits?.Desktop};` : ''}
            ${dropDownIconColor ? `color: ${dropDownIconColor};` : ''}
            ${dropDownIconDesktopMarginWidth && dropDownIconDesktopMargin?.top? `margin: ${dropDownIconDesktopMarginWidth};` : ''}
        }

        .${blockID} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-icon:hover {
            ${dropDownIconHoverColor ? `color: ${dropDownIconHoverColor};` : ''}
        }

        .${blockID} .advanced-navigation-wrapper .wp-block-navigation__responsive-container-open {
            ${hamburgerMenuIconColor ? `color: ${hamburgerMenuIconColor};` : ''}
            ${hamburgerMenuIconDesktopPaddingWidth && hamburgerMenuIconDesktopPadding?.top? `padding: ${hamburgerMenuIconDesktopPaddingWidth};` : ''}
        }
        .${blockID} .advanced-navigation-wrapper .wp-block-navigation__responsive-container-open svg {
            ${hamburgerMenuIconSize?.Desktop ? `width: ${hamburgerMenuIconSize?.Desktop}${hamburgerMenuIconSizeUnits?.Desktop};` : ''}
            ${hamburgerMenuIconSize?.Desktop ? `height: ${hamburgerMenuIconSize?.Desktop}${hamburgerMenuIconSizeUnits?.Desktop};` : ''}
        }

        .${blockID} .advanced-navigation-wrapper .wp-block-navigation__responsive-container-open:hover {
            ${hamburgerMenuIconHoverColor ? `color: ${hamburgerMenuIconHoverColor};` : ''}
        }

        .${blockID} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open {
            ${hamburgerMenuPopupNormalBackgroundType === 'gradient' ? `  
                ${hamburgerMenuPopupNormalCustomGradientSwitcher && hamburgerMenuPopupNormalCustomGradientInputValue ? `background: ${hamburgerMenuPopupNormalCustomGradientInputValue};` : `background: ${hamburgerMenuPopupNormalGradientColor};`}
            `: `
                ${hamburgerMenuPopupNormalClassicColor ? `background: ${hamburgerMenuPopupNormalClassicColor};` : ''}
            `}
            ${hamburgerMenuPopupDesktopPaddingWidth && hamburgerMenuPopupDesktopPadding?.top? `padding: ${hamburgerMenuPopupDesktopPaddingWidth};` : ''}
        }

        .${blockID} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open:hover {
            ${hamburgerMenuPopupHoverBackgroundType === 'gradient' ? `  
                ${hamburgerMenuPopupHoverCustomGradientSwitcher && hamburgerMenuPopupHoverCustomGradientInputValue ? `background: ${hamburgerMenuPopupHoverCustomGradientInputValue};` : `background: ${hamburgerMenuPopupHoverGradientColor};`}
            `: `
                ${hamburgerMenuPopupHoverClassicColor ? `background: ${hamburgerMenuPopupHoverClassicColor};` : ''}
            `}
        }

            .${blockID} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item__content {
            ${hamburgerMenuPopupGlobalTypoSwitcher?.fontFamily === true && hamburgerMenuPopupGlobalTypographyData?.fontFamily ? `font-family: ${hamburgerMenuPopupGlobalTypographyData?.fontFamily};` : ''} 
            ${hamburgerMenuPopupGlobalTypoSwitcher?.fontSize === true && hamburgerMenuPopupGlobalTypographyData?.fontSize ? `font-size: ${hamburgerMenuPopupGlobalTypographyData?.fontSize};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.fontWeight === true && hamburgerMenuPopupGlobalTypographyData?.fontWeight ? `font-weight: ${hamburgerMenuPopupGlobalTypographyData?.fontWeight};` : ''} 
            ${hamburgerMenuPopupGlobalTypoSwitcher?.fontStyle === true && hamburgerMenuPopupGlobalTypographyData?.fontStyle ? `font-style: ${hamburgerMenuPopupGlobalTypographyData?.fontStyle};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.textTransform === true && hamburgerMenuPopupGlobalTypographyData?.textTransform ? `text-transform: ${hamburgerMenuPopupGlobalTypographyData?.textTransform};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.textDecoration === true && hamburgerMenuPopupGlobalTypographyData?.textDecoration ? `text-decoration: ${hamburgerMenuPopupGlobalTypographyData?.textDecoration};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.letterSpacing === true && hamburgerMenuPopupGlobalTypographyData?.letterSpacing ? `letter-spacing: ${hamburgerMenuPopupGlobalTypographyData?.letterSpacing};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.lineHeight === true && hamburgerMenuPopupGlobalTypographyData?.lineHeight ? `line-height: ${hamburgerMenuPopupGlobalTypographyData?.lineHeight};` : ''}
                
            ${hamburgerMenuPopupGlobalTypoSwitcher?.fontFamily === false && hamburgerMenuPopupFontFamily && hamburgerMenuPopupFontFamily !== 'Default' ? `font-family: ${hamburgerMenuPopupFontFamily};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.fontSize === false && hamburgerMenuPopupFontSize?.Desktop && hamburgerMenuPopupFontSizeUnits?.Desktop ? `font-size: ${hamburgerMenuPopupFontSize?.Desktop}${hamburgerMenuPopupFontSizeUnits?.Desktop};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.fontWeight === false && hamburgerMenuPopupFontWeight ? `font-weight: ${hamburgerMenuPopupFontWeight};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.fontStyle === false && hamburgerMenuPopupFontStyle ? `font-style: ${hamburgerMenuPopupFontStyle};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.textTransform === false && hamburgerMenuPopupTextTransform ? `text-transform: ${hamburgerMenuPopupTextTransform};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.textDecoration === false && hamburgerMenuPopupTextDecoration ? `text-decoration: ${hamburgerMenuPopupTextDecoration};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.letterSpacing === false && hamburgerMenuPopupLetterSpacing?.Desktop && hamburgerMenuPopupLetterSpacingUnits?.Desktop ? `letter-spacing: ${hamburgerMenuPopupLetterSpacing?.Desktop}${hamburgerMenuPopupLetterSpacingUnits?.Desktop};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.lineHeight === false && hamburgerMenuPopupLineHeight?.Desktop && hamburgerMenuPopupLineHeightUnits?.Desktop ? `line-height: ${hamburgerMenuPopupLineHeight?.Desktop}${hamburgerMenuPopupLineHeightUnits?.Desktop};` : ''}
            
            ${hamburgerMenuPopupColor ? `color: ${hamburgerMenuPopupColor};` : ''}
            
            }

        .${blockID} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item__content:hover {
            ${hamburgerMenuPopupHoverColor ? `color: ${hamburgerMenuPopupHoverColor};` : ''}
        }

        .${blockID} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-close svg {
            ${hamburgerMenuCloseIconColor ? `fill: ${hamburgerMenuCloseIconColor};` : ''}
            ${hamburgerMenuCloseIconSize?.Desktop ? `width: ${hamburgerMenuCloseIconSize?.Desktop}${hamburgerMenuCloseIconSizeUnits?.Desktop};` : ''} 
            ${hamburgerMenuCloseIconSize?.Desktop ? `height: ${hamburgerMenuCloseIconSize?.Desktop}${hamburgerMenuCloseIconSizeUnits?.Desktop};` : ''}
        }

        .${blockID} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-close svg:hover {
            ${hamburgerMenuCloseIconHoverColor ? `fill: ${hamburgerMenuCloseIconHoverColor};` : ''}
        }

        @media only screen and (max-width: 1024px) {

            .${blockID}.fb-advanced-navigation-main-wrapper {
                ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationHZOrientationType === 'left' && navigationHZLeftOffset?.Tablet !== undefined ? `left: ${navigationHZLeftOffset?.Tablet}${navigationHZLeftOffsetUnits?.Tablet};` : ''}
                ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationVROrientationType === 'top' && navigationVRTopOffset?.Tablet !== undefined ? `top: ${navigationVRTopOffset?.Tablet}${navigationVRTopOffsetUnits?.Tablet};` : ''}
                ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationVROrientationType === 'bottom' && navigationVRBottomOffset?.Tablet !== undefined ? `bottom: ${navigationVRBottomOffset?.Tablet}${navigationVRBottomOffsetUnits?.Tablet};` : ''}
                ${navigationGlobalZIndex?.Tablet ? `z-index: ${navigationGlobalZIndex?.Tablet};` : ''}
            }
            .${blockID} .advanced-navigation-wrapper {
                ${navigationGlobalTabletPaddingWidth && navigationGlobalPaddingTablet?.top? `padding: ${navigationGlobalTabletPaddingWidth};` : ''}
                ${navigationGlobalTabletMarginWidth && navigationGlobalMarginTablet?.top? `margin: ${navigationGlobalTabletMarginWidth};` : ''} 
                ${navigationGlobalTabletBorderWidth && navigationGlobalBorderTablet?.top? `border-width: ${navigationGlobalTabletBorderWidth};` : ''}
                ${navigationGlobalTabletBorderRadiusWidth && navigationGlobalBorderRadiusTablet?.top? `border-radius: ${navigationGlobalTabletBorderRadiusWidth};` : ''}
            }

            .${blockID} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item {
                ${navigationTabletPaddingWidth && navigationTabletPadding?.top? `padding: ${navigationTabletPaddingWidth};` : ''}
                ${navigationTabletMarginWidth && navigationTabletMargin?.top? `margin: ${navigationTabletMarginWidth};` : ''} 
                ${navigationTabletBorderWidth && navigationTabletBorder?.top? `border-width: ${navigationTabletBorderWidth};` : ''}
                ${navigationTabletBorderRadiusWidth && navigationTabletBorderRadius?.top? `border-radius: ${navigationTabletBorderRadiusWidth};` : ''}
            }

            .${blockID} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation__container {
                ${navigationGap?.Tablet ? `gap: ${navigationGap?.Tablet}${navigationGapUnits?.Tablet};` : ''}	
            }
            .${blockID} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item .wp-block-navigation-item__content {
                ${navigationGlobalTypoSwitcher?.fontSize === false && navigationFontSize?.Tablet && navigationFontSizeUnits?.Tablet ? `font-size: ${navigationFontSize?.Tablet}${navigationFontSizeUnits?.Tablet};` : ''}
                ${navigationGlobalTypoSwitcher?.letterSpacing === false && navigationLetterSpacing?.Tablet && navigationLetterSpacingUnits?.Tablet ? `letter-spacing: ${navigationLetterSpacing?.Tablet}${navigationLetterSpacingUnits?.Tablet};` : ''}
                ${navigationGlobalTypoSwitcher?.lineHeight === false && navigationLineHeight?.Tablet && navigationLineHeightUnits?.Tablet ? `line-height: ${navigationLineHeight?.Tablet}${navigationLineHeightUnits?.Tablet};` : ''}
            }

            .${blockID} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container {
                ${dropDownWrapperMinWidth?.Tablet ? `min-width: ${dropDownWrapperMinWidth?.Tablet}${dropDownWrapperMinWidthUnits?.Tablet} !important;` : ''}

                ${dropDownTabletPaddingWidth && dropDownTabletPadding?.top? `padding: ${dropDownTabletPaddingWidth};` : ''}
                ${dropDownTabletMarginWidth && dropDownTabletMargin?.top? `margin: ${dropDownTabletMarginWidth};` : ''} 
                ${dropDownTabletBorderWidth && dropDownTabletBorder?.top? `border-width: ${dropDownTabletBorderWidth};` : ''}
                ${dropDownTabletBorderRadiusWidth && dropDownTabletBorderRadius?.top? `border-radius: ${dropDownTabletBorderRadiusWidth};` : ''}
            }

            .${blockID} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container .wp-block-navigation-item__content {
                ${dropDownItemTypoSwitcher?.fontSize === false && dropDownItemFontSize?.Tablet && dropDownItemFontSizeUnits?.Tablet ? `font-size: ${dropDownItemFontSize?.Tablet}${dropDownItemFontSizeUnits?.Tablet};` : ''}
                ${dropDownItemTypoSwitcher?.letterSpacing === false && dropDownItemLetterSpacing?.Tablet && dropDownItemLetterSpacingUnits?.Tablet ? `letter-spacing: ${dropDownItemLetterSpacing?.Tablet}${dropDownItemLetterSpacingUnits?.Tablet};` : ''}
                ${dropDownItemTypoSwitcher?.lineHeight === false && dropDownItemLineHeight?.Tablet && dropDownItemLineHeightUnits?.Tablet ? `line-height: ${dropDownItemLineHeight?.Tablet}${dropDownItemLineHeightUnits?.Tablet};` : ''}
                
                ${dropDownItemTabletPaddingWidth && dropDownItemTabletPadding?.top? `padding: ${dropDownItemTabletPaddingWidth};` : ''}
                ${dropDownItemTabletMarginWidth && dropDownItemTabletMargin?.top? `margin: ${dropDownItemTabletMarginWidth};` : ''} 
                ${dropDownItemTabletBorderWidth && dropDownItemTabletBorder?.top? `border-width: ${dropDownItemTabletBorderWidth};` : ''}
                ${dropDownItemTabletBorderRadiusWidth && dropDownItemTabletBorderRadius?.top? `border-radius: ${dropDownItemTabletBorderRadiusWidth};` : ''}
            }

            .${blockID} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-icon {
                ${dropDownIconSize?.Tablet ? `width: ${dropDownIconSize?.Tablet}${dropDownIconSizeUnits?.Tablet};` : ''}
                ${dropDownIconSize?.Tablet ? `height: ${dropDownIconSize?.Tablet}${dropDownIconSizeUnits?.Tablet};` : ''}
                ${dropDownIconTabletMarginWidth && dropDownIconTabletMargin?.top? `margin: ${dropDownIconTabletMarginWidth};` : ''}
            }

            .${blockID} .advanced-navigation-wrapper .wp-block-navigation__responsive-container-open {
                ${hamburgerMenuIconTabletPaddingWidth && hamburgerMenuIconTabletPadding?.top? `padding: ${hamburgerMenuIconTabletPaddingWidth};` : ''}
            }
            .${blockID} .advanced-navigation-wrapper .wp-block-navigation__responsive-container-open svg {
                ${hamburgerMenuIconSize?.Tablet ? `width: ${hamburgerMenuIconSize?.Tablet}${hamburgerMenuIconSizeUnits?.Tablet};` : ''}
                ${hamburgerMenuIconSize?.Tablet ? `height: ${hamburgerMenuIconSize?.Tablet}${hamburgerMenuIconSizeUnits?.Tablet};` : ''}
            }

            .${blockID} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open {
                ${hamburgerMenuPopupTabletPaddingWidth && hamburgerMenuPopupTabletPadding?.top? `padding: ${hamburgerMenuPopupTabletPaddingWidth};` : ''}
            }

            .${blockID} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item__content {
                ${hamburgerMenuPopupGlobalTypoSwitcher?.fontSize === false && hamburgerMenuPopupFontSize?.Tablet && hamburgerMenuPopupFontSizeUnits?.Tablet ? `font-size: ${hamburgerMenuPopupFontSize?.Tablet}${hamburgerMenuPopupFontSizeUnits?.Tablet};` : ''}
                ${hamburgerMenuPopupGlobalTypoSwitcher?.letterSpacing === false && hamburgerMenuPopupLetterSpacing?.Tablet && hamburgerMenuPopupLetterSpacingUnits?.Tablet ? `letter-spacing: ${hamburgerMenuPopupLetterSpacing?.Tablet}${hamburgerMenuPopupLetterSpacingUnits?.Tablet};` : ''}
                ${hamburgerMenuPopupGlobalTypoSwitcher?.lineHeight === false && hamburgerMenuPopupLineHeight?.Tablet && hamburgerMenuPopupLineHeightUnits?.Tablet ? `line-height: ${hamburgerMenuPopupLineHeight?.Tablet}${hamburgerMenuPopupLineHeightUnits?.Tablet};` : ''}
            }
            .${blockID} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-close svg {
                ${hamburgerMenuCloseIconSize?.Tablet ? `width: ${hamburgerMenuCloseIconSize?.Tablet}${hamburgerMenuCloseIconSizeUnits?.Tablet};` : ''}
                ${hamburgerMenuCloseIconSize?.Tablet ? `height: ${hamburgerMenuCloseIconSize?.Tablet}${hamburgerMenuCloseIconSizeUnits?.Tablet};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .${blockID}.fb-advanced-navigation-main-wrapper {
                ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationHZOrientationType === 'left' && navigationHZLeftOffset?.Mobile !== undefined ? `left: ${navigationHZLeftOffset?.Mobile}${navigationHZLeftOffsetUnits?.Mobile};` : ''}
                ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationVROrientationType === 'top' && navigationVRTopOffset?.Mobile !== undefined ? `top: ${navigationVRTopOffset?.Mobile}${navigationVRTopOffsetUnits?.Mobile};` : ''}
                ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationVROrientationType === 'bottom' && navigationVRBottomOffset?.Mobile !== undefined ? `bottom: ${navigationVRBottomOffset?.Mobile}${navigationVRBottomOffsetUnits?.Mobile};` : ''}
                ${navigationGlobalZIndex.Mobile ? `z-index: ${navigationGlobalZIndex.Mobile};` : ''}
            }

            .${blockID} .advanced-navigation-wrapper {
                ${navigationGlobalMobilePaddingWidth && navigationGlobalPaddingMobile?.top? `padding: ${navigationGlobalMobilePaddingWidth};` : ''} 
                ${navigationGlobalMobileMarginWidth && navigationGlobalMarginMobile?.top? `margin: ${navigationGlobalMobileMarginWidth};` : ''} 
                ${navigationGlobalMobileBorderWidth && navigationGlobalBorderMobile?.top? `border-width: ${navigationGlobalMobileBorderWidth};` : ''}
                ${navigationGlobalMobileBorderRadiusWidth && navigationGlobalBorderRadiusMobile?.top? `border-radius: ${navigationGlobalMobileBorderRadiusWidth};` : ''}
            }

            .${blockID} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item {
                ${navigationMobilePaddingWidth && navigationMobilePadding?.top? `padding: ${navigationMobilePaddingWidth};` : ''}
                ${navigationMobileMarginWidth && navigationMobileMargin?.top? `margin: ${navigationMobileMarginWidth};` : ''} 
                ${navigationMobileBorderWidth && navigationMobileBorder?.top? `border-width: ${navigationMobileBorderWidth};` : ''}
                ${navigationMobileBorderRadiusWidth && navigationMobileBorderRadius?.top? `border-radius: ${navigationMobileBorderRadiusWidth};` : ''}
            }

            .${blockID} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation__container {
                ${navigationGap?.Mobile ? `gap: ${navigationGap?.Mobile}${navigationGapUnits?.Mobile};` : ''}	
            }
            .${blockID} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item .wp-block-navigation-item__content {
                ${navigationGlobalTypoSwitcher?.fontSize === false && navigationFontSize?.Mobile && navigationFontSizeUnits?.Mobile ? `font-size: ${navigationFontSize?.Mobile}${navigationFontSizeUnits?.Mobile};` : ''}
                ${navigationGlobalTypoSwitcher?.letterSpacing === false && navigationLetterSpacing?.Mobile && navigationLetterSpacingUnits?.Mobile ? `letter-spacing: ${navigationLetterSpacing?.Mobile}${navigationLetterSpacingUnits?.Mobile};` : ''}
                ${navigationGlobalTypoSwitcher?.lineHeight === false && navigationLineHeight?.Mobile && navigationLineHeightUnits?.Mobile ? `line-height: ${navigationLineHeight?.Mobile}${navigationLineHeightUnits?.Mobile};` : ''}
            }

            .${blockID} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container {
                ${dropDownWrapperMinWidth?.Mobile ? `min-width: ${dropDownWrapperMinWidth?.Mobile}${dropDownWrapperMinWidthUnits?.Mobile} !important;` : ''}

                ${dropDownMobilePaddingWidth && dropDownMobilePadding?.top? `padding: ${dropDownMobilePaddingWidth};` : ''}
                ${dropDownMobileMarginWidth && dropDownMobileMargin?.top? `margin: ${dropDownMobileMarginWidth};` : ''} 
                ${dropDownMobileBorderWidth && dropDownMobileBorder?.top? `border-width: ${dropDownMobileBorderWidth};` : ''}
                ${dropDownMobileBorderRadiusWidth && dropDownMobileBorderRadius?.top? `border-radius: ${dropDownMobileBorderRadiusWidth};` : ''}
            }

            .${blockID} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container .wp-block-navigation-item__content {
                ${dropDownItemTypoSwitcher?.fontSize === false && dropDownItemFontSize?.Mobile && dropDownItemFontSizeUnits?.Mobile ? `font-size: ${dropDownItemFontSize?.Mobile}${dropDownItemFontSizeUnits?.Mobile};` : ''}
                ${dropDownItemTypoSwitcher?.letterSpacing === false && dropDownItemLetterSpacing?.Mobile && dropDownItemLetterSpacingUnits?.Mobile ? `letter-spacing: ${dropDownItemLetterSpacing?.Mobile}${dropDownItemLetterSpacingUnits?.Mobile};` : ''}
                ${dropDownItemTypoSwitcher?.lineHeight === false && dropDownItemLineHeight?.Mobile && dropDownItemLineHeightUnits?.Mobile ? `line-height: ${dropDownItemLineHeight?.Mobile}${dropDownItemLineHeightUnits?.Mobile};` : ''}
                
                ${dropDownItemMobilePaddingWidth && dropDownItemMobilePadding?.top? `padding: ${dropDownItemMobilePaddingWidth};` : ''}
                ${dropDownItemMobileMarginWidth && dropDownItemMobileMargin?.top? `margin: ${dropDownItemMobileMarginWidth};` : ''} 
                ${dropDownItemMobileBorderWidth && dropDownItemMobileBorder?.top? `border-width: ${dropDownItemMobileBorderWidth};` : ''}
                ${dropDownItemMobileBorderRadiusWidth && dropDownItemMobileBorderRadius?.top? `border-radius: ${dropDownItemMobileBorderRadiusWidth};` : ''}
            }
            .${blockID} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-icon {
                ${dropDownIconSize?.Mobile ? `width: ${dropDownIconSize?.Mobile}${dropDownIconSizeUnits?.Mobile};` : ''}
                ${dropDownIconSize?.Mobile ? `height: ${dropDownIconSize?.Mobile}${dropDownIconSizeUnits?.Mobile};` : ''}
                ${dropDownIconMobileMarginWidth && dropDownIconMobileMargin?.top? `margin: ${dropDownIconMobileMarginWidth};` : ''}
            }

            .${blockID} .advanced-navigation-wrapper .wp-block-navigation__responsive-container-open {
                ${hamburgerMenuIconMobilePaddingWidth && hamburgerMenuIconMobilePadding?.top? `padding: ${hamburgerMenuIconMobilePaddingWidth};` : ''}
            }
            .${blockID} .advanced-navigation-wrapper .wp-block-navigation__responsive-container-open svg {
                ${hamburgerMenuIconSize?.Mobile ? `width: ${hamburgerMenuIconSize?.Mobile}${hamburgerMenuIconSizeUnits?.Mobile};` : ''}
                ${hamburgerMenuIconSize?.Mobile ? `height: ${hamburgerMenuIconSize?.Mobile}${hamburgerMenuIconSizeUnits?.Mobile};` : ''}
            }

            .${blockID} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open {
                ${hamburgerMenuPopupMobilePaddingWidth && hamburgerMenuPopupMobilePadding?.top? `padding: ${hamburgerMenuPopupMobilePaddingWidth};` : ''}
            }
            .${blockID} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item__content {
                ${hamburgerMenuPopupGlobalTypoSwitcher?.fontSize === false && hamburgerMenuPopupFontSize?.Mobile && hamburgerMenuPopupFontSizeUnits?.Mobile ? `font-size: ${hamburgerMenuPopupFontSize?.Mobile}${hamburgerMenuPopupFontSizeUnits?.Mobile};` : ''}
                ${hamburgerMenuPopupGlobalTypoSwitcher?.letterSpacing === false && hamburgerMenuPopupLetterSpacing?.Mobile && hamburgerMenuPopupLetterSpacingUnits?.Mobile ? `letter-spacing: ${hamburgerMenuPopupLetterSpacing?.Mobile}${hamburgerMenuPopupLetterSpacingUnits?.Mobile};` : ''}
                ${hamburgerMenuPopupGlobalTypoSwitcher?.lineHeight === false && hamburgerMenuPopupLineHeight?.Mobile && hamburgerMenuPopupLineHeightUnits?.Mobile ? `line-height: ${hamburgerMenuPopupLineHeight?.Mobile}${hamburgerMenuPopupLineHeightUnits?.Mobile};` : ''}
            }
            .${blockID} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-close svg {
                ${hamburgerMenuCloseIconSize?.Mobile ? `width: ${hamburgerMenuCloseIconSize?.Mobile}${hamburgerMenuCloseIconSizeUnits?.Mobile};` : ''}
                ${hamburgerMenuCloseIconSize?.Mobile ? `height: ${hamburgerMenuCloseIconSize?.Mobile}${hamburgerMenuCloseIconSizeUnits?.Mobile};` : ''}
            }

        }

    `;

    const customCss = getCustomCss(navigationGlobalCustomCSS, `.${blockID}`);
    return `${advancedNavigationBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateAdvancedNavigationStyle;