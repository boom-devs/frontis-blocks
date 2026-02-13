/**
 * Info Box Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateInfoBoxStyle = (attributes) => {
    const {
        blockID,
        infoBoxPresetStyle,
        Heading_Background_Color,
        Alignment,
        headingGlobalTypoSwitcher,
        headingGlobalTypographyData,
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
        Heading_Color,
        Heading_Hover_Color,
        Heading_Border,
        Heading_Border_Color,
        Heading_Border_Hover_Color,
        Heading_Border_units,
        Heading_Border_radius_units,
        Heading_Desktop_Border_Width,
        Heading_Tab_Border_Width,
        Heading_Mobile_Border_Width,
        Heading_Desktop_Border_radius_Width,
        Heading_Tab_Border_radius_Width,
        Heading_Mobile_Border_radius_Width,
        Heading_padding_units,
        Heading_Desktop_padding,
        Heading_Tab_padding,
        Heading_Mobile_padding,

        Heading_Margin_Units,
        Heading_Desktop_Margin,
        Heading_Tab_Margin,
        Heading_Mobile_Margin,

        wrapperAlignment,
        descAlignment,
        buttonAlignment,

        SubHeadingPaddingUnits,
        SubHeadingDesktopPadding,
        SubHeadingTabPadding,
        SubHeadingMobilePadding,
        subHeadingGlobalTypoSwitcher,
        subHeadingGlobalTypographyData,
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
        SubHeadingHoverColor,

        descMarginUnits,
        descDesktopMargin,
        descTabMargin,
        descMobileMargin,

        buttonGlobalTypoSwitcher,
        buttonGlobalTypographyData,
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
        buttonTextColor,
        buttonTextHoverColor,
        buttonBgColor,
        buttonBgHoverColor,
        infoButtonMarginUnits,
        infoButtonDesktopMargin,
        infoButtonTabMargin,
        infoButtonMobileMargin,

        infoButtonPaddingUnits,
        infoButtonDesktopPadding,
        infoButtonTabPadding,
        infoButtonMobilePadding,
        mediaSwitcher,

        infoButtonBorder,
        infoButtonBorderUnits,
        infoButtonDesktopBorderWidth,
        infoButtonTabBorderWidth,
        infoButtonMobileBorderWidth,
        infoBtnBorderradiusUnits,
        infoBtnDesktopBorderradiusWidth,
        infoBtnTabBorderradiusWidth,
        infoBtnMobileBorderradiusWidth,
        infoButtonBorderColor,
        infoButtonHoverBorderColor,
        globalZIndex,
        infoBoxOverflow,
        globalPaddingUnits,
        globalPaddingDesktop,
        globalPaddingTablet,
        globalPaddingMobile,

        globalMarginUnits,
        globalMarginDesktop,
        globalMarginTablet,
        globalMarginMobile,
        globalBgColor,
        globalBgHoverColor,

        globalBorder,
        globalBorderColor,
        globalBorderHoverColor,
        globalBorderUnits,
        globalBorderDesktop,
        globalBorderTablet,
        globalBorderMobile,

        globalBorderRadiusUnits,
        globalBorderRadiusDesktop,
        globalBorderRadiusTablet,
        globalBorderRadiusMobile,

        mediaSize,
        mediaSizeUnits,
        mediaHeight,
        mediaHeightUnits,

        mediaPaddingUnits,
        mediaPaddingDesktop,
        mediaPaddingTablet,
        mediaPaddingMobile,

        mediaMarginUnits,
        mediaMarginDesktop,
        mediaMarginTablet,
        mediaMarginMobile,

        mediaBorder,
        mediaBorderColor,
        mediaBorderHoverColor,
        mediaBorderUnits,
        mediaBorderDesktop,
        mediaBorderTablet,
        mediaBorderMobile,

        mediaBorderRadiusUnits,
        mediaBorderRadiusDesktop,
        mediaBorderRadiusTablet,
        mediaBorderRadiusMobile,

        btnIconSize,
        btnIconSizeUnits,
        btnIconColor,
        btnIconHoverColor,
        btnIconPosition,
        buttonIconRotate,
        buttonIconRotateHover,
        infoIconPosition,

        mediaIconColor,
        mediaIconHoverColor,
        boxGlobalBoxShadowCssValue,
        boxGlobalHoverBoxShadowCssValue,
        infoMediaSize,
        mediaBackgroundType,
        mediaClassicColor,
        mediaGradientColor,
        mediaCustomGradientSwitcher,
        mediaCustomGradientInputValue,
        mediaBackgroundImageUrl,
        mediaBackgroundImagePosition,
        mediaBackgroundImageAttachment,
        mediaBackgroundImageSize,
        mediaBackgroundImageRepeat,
        mediaHoverBackgroundType,
        mediaHoverClassicColor,
        mediaHoverGradientColor,
        mediaHoverCustomGradientSwitcher,
        mediaHoverCustomGradientInputValue,
        mediaHoverBackgroundImageUrl,
        mediaHoverBackgroundImagePosition,
        mediaHoverBackgroundImageAttachment,
        mediaHoverBackgroundImageSize,
        mediaHoverBackgroundImageRepeat,
        infoIconVerticalPosition,
        infoCardAlignment,

        infoBoxCustomCSS,

        // Position
        infoBoxPositionType,
        infoBoxHZOrientationType,
        infoBoxVROrientationType,
        infoBoxHZLeftOffset,
        infoBoxHZLeftOffsetUnits,
        infoBoxHZRightOffset,
        infoBoxHZRightOffsetUnits,
        infoBoxVRTopOffset,
        infoBoxVRTopOffsetUnits,
        infoBoxVRBottomOffset,
        infoBoxVRBottomOffsetUnits,

    } = attributes;

    // Heading Padding
    const headingPaddingDesktopWidthValue = `${Heading_Desktop_padding?.top}${Heading_padding_units?.Desktop} ${Heading_Desktop_padding?.right}${Heading_padding_units?.Desktop} ${Heading_Desktop_padding?.bottom}${Heading_padding_units?.Desktop} ${Heading_Desktop_padding?.left}${Heading_padding_units?.Desktop}`;
	const headingPaddingTabWidthValue = `${Heading_Tab_padding?.top}${Heading_padding_units?.Tablet} ${Heading_Tab_padding?.right}${Heading_padding_units?.Tablet} ${Heading_Tab_padding?.bottom}${Heading_padding_units?.Tablet} ${Heading_Tab_padding?.left}${Heading_padding_units?.Tablet}`;
	const headingPaddingMobileWidthValue = `${Heading_Mobile_padding?.top}${Heading_padding_units?.Mobile} ${Heading_Mobile_padding?.right}${Heading_padding_units?.Mobile} ${Heading_Mobile_padding?.bottom}${Heading_padding_units?.Mobile} ${Heading_Mobile_padding?.left}${Heading_padding_units?.Mobile}`;

    // Heading Margin
    const headingMarginDesktopWidthValue = `${Heading_Desktop_Margin?.top}${Heading_Margin_Units?.Desktop} ${Heading_Desktop_Margin?.right}${Heading_Margin_Units?.Desktop} ${Heading_Desktop_Margin?.bottom}${Heading_Margin_Units?.Desktop} ${Heading_Desktop_Margin?.left}${Heading_Margin_Units?.Desktop}`;
	const headingMarginTabWidthValue = `${Heading_Tab_Margin?.top}${Heading_Margin_Units?.Tablet} ${Heading_Tab_Margin?.right}${Heading_Margin_Units?.Tablet} ${Heading_Tab_Margin?.bottom}${Heading_Margin_Units?.Tablet} ${Heading_Tab_Margin?.left}${Heading_Margin_Units?.Tablet}`;
	const headingMarginMobileWidthValue = `${Heading_Mobile_Margin?.top}${Heading_Margin_Units?.Mobile} ${Heading_Mobile_Margin?.right}${Heading_Margin_Units?.Mobile} ${Heading_Mobile_Margin?.bottom}${Heading_Margin_Units?.Mobile} ${Heading_Mobile_Margin?.left}${Heading_Margin_Units?.Mobile}`;

    // Heading Border
    const headingBorderDesktopWidthValue = `${Heading_Desktop_Border_Width?.top}${Heading_Border_units?.Desktop} ${Heading_Desktop_Border_Width?.right}${Heading_Border_units?.Desktop} ${Heading_Desktop_Border_Width?.bottom}${Heading_Border_units?.Desktop} ${Heading_Desktop_Border_Width?.left}${Heading_Border_units?.Desktop}`;
	const headingBorderTabWidthValue = `${Heading_Tab_Border_Width?.top}${Heading_Border_units?.Tablet} ${Heading_Tab_Border_Width?.right}${Heading_Border_units?.Tablet} ${Heading_Tab_Border_Width?.bottom}${Heading_Border_units?.Tablet} ${Heading_Tab_Border_Width?.left}${Heading_Border_units?.Tablet}`;
	const headingBorderMobileWidthValue = `${Heading_Mobile_Border_Width?.top}${Heading_Border_units?.Mobile} ${Heading_Mobile_Border_Width?.right}${Heading_Border_units?.Mobile} ${Heading_Mobile_Border_Width?.bottom}${Heading_Border_units?.Mobile} ${Heading_Mobile_Border_Width?.left}${Heading_Border_units?.Mobile}`;

    // Heading Border Radius
    const headingBorderRadiusDesktopWidthValue = `${Heading_Desktop_Border_radius_Width?.top}${Heading_Border_radius_units?.Desktop} ${Heading_Desktop_Border_radius_Width?.right}${Heading_Border_radius_units?.Desktop} ${Heading_Desktop_Border_radius_Width?.bottom}${Heading_Border_radius_units?.Desktop} ${Heading_Desktop_Border_radius_Width?.left}${Heading_Border_radius_units?.Desktop}`;
	const headingBorderRadiusTabWidthValue = `${Heading_Tab_Border_radius_Width?.top}${Heading_Border_radius_units?.Tablet} ${Heading_Tab_Border_radius_Width?.right}${Heading_Border_radius_units?.Tablet} ${Heading_Tab_Border_radius_Width?.bottom}${Heading_Border_radius_units?.Tablet} ${Heading_Tab_Border_radius_Width?.left}${Heading_Border_radius_units?.Tablet}`;
	const headingBorderRadiusMobileWidthValue = `${Heading_Mobile_Border_radius_Width?.top}${Heading_Border_radius_units?.Mobile} ${Heading_Mobile_Border_radius_Width?.right}${Heading_Border_radius_units?.Mobile} ${Heading_Mobile_Border_radius_Width?.bottom}${Heading_Border_radius_units?.Mobile} ${Heading_Mobile_Border_radius_Width?.left}${Heading_Border_radius_units?.Mobile}`;

    // Sub Heading Padding
    const subHeadingDesktopPaddingValue = `${SubHeadingDesktopPadding?.top}${SubHeadingPaddingUnits?.Desktop} ${SubHeadingDesktopPadding?.right}${SubHeadingPaddingUnits?.Desktop} ${SubHeadingDesktopPadding?.bottom}${SubHeadingPaddingUnits?.Desktop} ${SubHeadingDesktopPadding?.left}${SubHeadingPaddingUnits?.Desktop}`;
	const subHeadingTabPaddingValue = `${SubHeadingTabPadding?.top}${SubHeadingPaddingUnits?.Tablet} ${SubHeadingTabPadding?.right}${SubHeadingPaddingUnits?.Tablet} ${SubHeadingTabPadding?.bottom}${SubHeadingPaddingUnits?.Tablet} ${SubHeadingTabPadding?.left}${SubHeadingPaddingUnits?.Tablet}`;
	const subHeadingMobilePaddingValue = `${SubHeadingMobilePadding?.top}${SubHeadingPaddingUnits?.Mobile} ${SubHeadingMobilePadding?.right}${SubHeadingPaddingUnits?.Mobile} ${SubHeadingMobilePadding?.bottom}${SubHeadingPaddingUnits?.Mobile} ${SubHeadingMobilePadding?.left}${SubHeadingPaddingUnits?.Mobile}`;

    // Description Margin
    const descDesktopMarginValue = `${descDesktopMargin?.top}${descMarginUnits?.Desktop} ${descDesktopMargin?.right}${descMarginUnits?.Desktop} ${descDesktopMargin?.bottom}${descMarginUnits?.Desktop} ${descDesktopMargin?.left}${descMarginUnits?.Desktop}`;
	const descTabMarginValue = `${descTabMargin?.top}${descMarginUnits?.Tablet} ${descTabMargin?.right}${descMarginUnits?.Tablet} ${descTabMargin?.bottom}${descMarginUnits?.Tablet} ${descTabMargin?.left}${descMarginUnits?.Tablet}`;
	const descMobileMarginValue = `${descMobileMargin.top}${descMarginUnits.Mobile} ${descMobileMargin.right}${descMarginUnits.Mobile} ${descMobileMargin.bottom}${descMarginUnits.Mobile} ${descMobileMargin.left}${descMarginUnits.Mobile}`;

    // Button Padding
    const buttonDesktopPaddingValue = `${infoButtonDesktopPadding?.top}${infoButtonPaddingUnits?.Desktop} ${infoButtonDesktopPadding?.right}${infoButtonPaddingUnits?.Desktop} ${infoButtonDesktopPadding?.bottom}${infoButtonPaddingUnits?.Desktop} ${infoButtonDesktopPadding?.left}${infoButtonPaddingUnits?.Desktop}`;
	const buttonTabPaddingValue = `${infoButtonTabPadding?.top}${infoButtonPaddingUnits?.Tablet} ${infoButtonTabPadding?.right}${infoButtonPaddingUnits?.Tablet} ${infoButtonTabPadding?.bottom}${infoButtonPaddingUnits?.Tablet} ${infoButtonTabPadding?.left}${infoButtonPaddingUnits?.Tablet}`;
	const buttonMobilePaddingValue = `${infoButtonMobilePadding?.top}${infoButtonPaddingUnits?.Mobile} ${infoButtonMobilePadding?.right}${infoButtonPaddingUnits?.Mobile} ${infoButtonMobilePadding?.bottom}${infoButtonPaddingUnits?.Mobile} ${infoButtonMobilePadding?.left}${infoButtonPaddingUnits?.Mobile}`;

    // Button Margin
    const buttonDesktopMarginValue = `${infoButtonDesktopMargin?.top}${infoButtonMarginUnits?.Desktop} ${infoButtonDesktopMargin?.right}${infoButtonMarginUnits?.Desktop} ${infoButtonDesktopMargin?.bottom}${infoButtonMarginUnits?.Desktop} ${infoButtonDesktopMargin?.left}${infoButtonMarginUnits?.Desktop}`;
	const buttonTabMarginValue = `${infoButtonTabMargin?.top}${infoButtonMarginUnits?.Tablet} ${infoButtonTabMargin?.right}${infoButtonMarginUnits?.Tablet} ${infoButtonTabMargin?.bottom}${infoButtonMarginUnits?.Tablet} ${infoButtonTabMargin?.left}${infoButtonMarginUnits?.Tablet}`;
	const buttonMobileMarginValue = `${infoButtonMobileMargin?.top}${infoButtonMarginUnits?.Mobile} ${infoButtonMobileMargin?.right}${infoButtonMarginUnits?.Mobile} ${infoButtonMobileMargin?.bottom}${infoButtonMarginUnits?.Mobile} ${infoButtonMobileMargin?.left}${infoButtonMarginUnits?.Mobile}`;

    // Button Border
    const buttonDesktopBorderValue = `${infoButtonDesktopBorderWidth?.top}${infoButtonBorderUnits?.Desktop} ${infoButtonDesktopBorderWidth?.right}${infoButtonBorderUnits?.Desktop} ${infoButtonDesktopBorderWidth?.bottom}${infoButtonBorderUnits?.Desktop} ${infoButtonDesktopBorderWidth?.left}${infoButtonBorderUnits?.Desktop}`;
	const buttonTabBorderValue = `${infoButtonTabBorderWidth?.top}${infoButtonBorderUnits?.Tablet} ${infoButtonTabBorderWidth?.right}${infoButtonBorderUnits?.Tablet} ${infoButtonTabBorderWidth?.bottom}${infoButtonBorderUnits?.Tablet} ${infoButtonTabBorderWidth?.left}${infoButtonBorderUnits?.Tablet}`;
	const buttonMobileBorderValue = `${infoButtonMobileBorderWidth?.top}${infoButtonBorderUnits?.Mobile} ${infoButtonMobileBorderWidth?.right}${infoButtonBorderUnits?.Mobile} ${infoButtonMobileBorderWidth?.bottom}${infoButtonBorderUnits?.Mobile} ${infoButtonMobileBorderWidth?.left}${infoButtonBorderUnits?.Mobile}`;

    // Button Border Radius
    const buttonDesktopBorderRadiusValue = `${infoBtnDesktopBorderradiusWidth?.top}${infoBtnBorderradiusUnits?.Desktop} ${infoBtnDesktopBorderradiusWidth?.right}${infoBtnBorderradiusUnits?.Desktop} ${infoBtnDesktopBorderradiusWidth?.bottom}${infoBtnBorderradiusUnits?.Desktop} ${infoBtnDesktopBorderradiusWidth?.left}${infoBtnBorderradiusUnits?.Desktop}`;
	const buttonTabBorderRadiusValue = `${infoBtnTabBorderradiusWidth?.top}${infoBtnBorderradiusUnits?.Tablet} ${infoBtnTabBorderradiusWidth?.right}${infoBtnBorderradiusUnits?.Tablet} ${infoBtnTabBorderradiusWidth?.bottom}${infoBtnBorderradiusUnits?.Tablet} ${infoBtnTabBorderradiusWidth?.left}${infoBtnBorderradiusUnits?.Tablet}`;
	const buttonMobileBorderRadiusValue = `${infoBtnMobileBorderradiusWidth?.top}${infoBtnBorderradiusUnits?.Mobile} ${infoBtnMobileBorderradiusWidth?.right}${infoBtnBorderradiusUnits?.Mobile} ${infoBtnMobileBorderradiusWidth?.bottom}${infoBtnBorderradiusUnits?.Mobile} ${infoBtnMobileBorderradiusWidth?.left}${infoBtnBorderradiusUnits?.Mobile}`;

    // Global Padding
    const DesktopPadding = `${globalPaddingDesktop?.top}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.right}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.bottom}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.left}${globalPaddingUnits?.Desktop}`;
	const TabletPadding = `${globalPaddingTablet?.top}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.right}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.bottom}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.left}${globalPaddingUnits?.Tablet}`;
	const MobilePadding = `${globalPaddingMobile?.top}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.right}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.bottom}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.left}${globalPaddingUnits?.Mobile}`;

    // Global Margin
    const DesktopMargin = `${globalMarginDesktop?.top}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.right}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.bottom}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.left}${globalMarginUnits?.Desktop}`;
	const TabletMargin = `${globalMarginTablet?.top}${globalMarginUnits?.Tablet} ${globalMarginTablet?.right}${globalMarginUnits?.Tablet} ${globalMarginTablet?.bottom}${globalMarginUnits?.Tablet} ${globalMarginTablet?.left}${globalMarginUnits?.Tablet}`;
	const MobileMargin = `${globalMarginMobile?.top}${globalMarginUnits?.Mobile} ${globalMarginMobile?.right}${globalMarginUnits?.Mobile} ${globalMarginMobile?.bottom}${globalMarginUnits?.Mobile} ${globalMarginMobile?.left}${globalMarginUnits?.Mobile}`;

    // Global Border
    const BorderDesktopWidth = `${globalBorderDesktop?.top}${globalBorderUnits?.Desktop} ${globalBorderDesktop?.right}${globalBorderUnits?.Desktop} ${globalBorderDesktop?.bottom}${globalBorderUnits?.Desktop} ${globalBorderDesktop?.left}${globalBorderUnits?.Desktop}`;
	const BorderTabletWidth = `${globalBorderTablet?.top}${globalBorderUnits?.Tablet} ${globalBorderTablet?.right}${globalBorderUnits?.Tablet} ${globalBorderTablet?.bottom}${globalBorderUnits?.Tablet} ${globalBorderTablet?.left}${globalBorderUnits?.Tablet}`;
	const BorderMobileWidth = `${globalBorderMobile?.top}${globalBorderUnits?.Mobile} ${globalBorderMobile?.right}${globalBorderUnits?.Mobile} ${globalBorderMobile?.bottom}${globalBorderUnits?.Mobile} ${globalBorderMobile?.left}${globalBorderUnits?.Mobile}`;

    // Global Border Radius
    const BorderRadiusDesktopWidth = `${globalBorderRadiusDesktop?.top}${globalBorderRadiusUnits?.Desktop} ${globalBorderRadiusDesktop?.right}${globalBorderRadiusUnits?.Desktop} ${globalBorderRadiusDesktop?.bottom}${globalBorderRadiusUnits?.Desktop} ${globalBorderRadiusDesktop?.left}${globalBorderRadiusUnits?.Desktop}`;
	const BorderRadiusTabletWidth = `${globalBorderRadiusTablet?.top}${globalBorderRadiusUnits?.Tablet} ${globalBorderRadiusTablet?.right}${globalBorderRadiusUnits?.Tablet} ${globalBorderRadiusTablet?.bottom}${globalBorderRadiusUnits?.Tablet} ${globalBorderRadiusTablet?.left}${globalBorderRadiusUnits?.Tablet}`;
	const BorderRadiusMobileWidth = `${globalBorderRadiusMobile?.top}${globalBorderRadiusUnits?.Mobile} ${globalBorderRadiusMobile?.right}${globalBorderRadiusUnits?.Mobile} ${globalBorderRadiusMobile?.bottom}${globalBorderRadiusUnits?.Mobile} ${globalBorderRadiusMobile?.left}${globalBorderRadiusUnits?.Mobile}`;

    // Media Padding
    const mediaDesktopPadding = `${mediaPaddingDesktop?.top}${mediaPaddingUnits?.Desktop} ${mediaPaddingDesktop?.right}${mediaPaddingUnits?.Desktop} ${mediaPaddingDesktop?.bottom}${mediaPaddingUnits?.Desktop} ${mediaPaddingDesktop?.left}${mediaPaddingUnits?.Desktop}`;
	const mediaTabletPadding = `${mediaPaddingTablet?.top}${mediaPaddingUnits?.Tablet} ${mediaPaddingTablet?.right}${mediaPaddingUnits?.Tablet} ${mediaPaddingTablet?.bottom}${mediaPaddingUnits?.Tablet} ${mediaPaddingTablet?.left}${mediaPaddingUnits?.Tablet}`;
	const mediaMobilePadding = `${mediaPaddingMobile?.top}${mediaPaddingUnits?.Mobile} ${mediaPaddingMobile?.right}${mediaPaddingUnits?.Mobile} ${mediaPaddingMobile?.bottom}${mediaPaddingUnits?.Mobile} ${mediaPaddingMobile?.left}${mediaPaddingUnits?.Mobile}`;

    // Media Margin
    const mediaDesktopMargin = `${mediaMarginDesktop?.top}${mediaMarginUnits?.Desktop} ${mediaMarginDesktop?.right}${mediaMarginUnits?.Desktop} ${mediaMarginDesktop?.bottom}${mediaMarginUnits?.Desktop} ${mediaMarginDesktop?.left}${mediaMarginUnits?.Desktop}`;
	const mediaTabletMargin = `${mediaMarginTablet?.top}${mediaMarginUnits?.Tablet} ${mediaMarginTablet?.right}${mediaMarginUnits?.Tablet} ${mediaMarginTablet?.bottom}${mediaMarginUnits?.Tablet} ${mediaMarginTablet?.left}${mediaMarginUnits?.Tablet}`;
	const mediaMobileMargin = `${mediaMarginMobile?.top}${mediaMarginUnits?.Mobile} ${mediaMarginMobile?.right}${mediaMarginUnits?.Mobile} ${mediaMarginMobile?.bottom}${mediaMarginUnits?.Mobile} ${mediaMarginMobile?.left}${mediaMarginUnits?.Mobile}`;

    // Media Border
    const mediaBorderDesktopWidth = `${mediaBorderDesktop?.top}${mediaBorderUnits?.Desktop} ${mediaBorderDesktop?.right}${mediaBorderUnits?.Desktop} ${mediaBorderDesktop?.bottom}${mediaBorderUnits?.Desktop} ${mediaBorderDesktop?.left}${mediaBorderUnits?.Desktop}`;
	const mediaBorderTabletWidth = `${mediaBorderTablet?.top}${mediaBorderUnits?.Tablet} ${mediaBorderTablet?.right}${mediaBorderUnits?.Tablet} ${mediaBorderTablet?.bottom}${mediaBorderUnits?.Tablet} ${mediaBorderTablet?.left}${mediaBorderUnits?.Tablet}`;
	const mediaBorderMobileWidth = `${mediaBorderMobile?.top}${mediaBorderUnits?.Mobile} ${mediaBorderMobile?.right}${mediaBorderUnits?.Mobile} ${mediaBorderMobile?.bottom}${mediaBorderUnits?.Mobile} ${mediaBorderMobile?.left}${mediaBorderUnits?.Mobile}`;

    // Media Border Radius
    const mediaBorderRadiusDesktopWidth = `${mediaBorderRadiusDesktop?.top}${mediaBorderRadiusUnits?.Desktop} ${mediaBorderRadiusDesktop?.right}${mediaBorderRadiusUnits?.Desktop} ${mediaBorderRadiusDesktop?.bottom}${mediaBorderRadiusUnits?.Desktop} ${mediaBorderRadiusDesktop?.left}${mediaBorderRadiusUnits?.Desktop}`;
    const mediaBorderRadiusTabletWidth = `${mediaBorderRadiusTablet?.top}${mediaBorderRadiusUnits?.Tablet} ${mediaBorderRadiusTablet?.right}${mediaBorderRadiusUnits?.Tablet} ${mediaBorderRadiusTablet?.bottom}${mediaBorderRadiusUnits?.Tablet} ${mediaBorderRadiusTablet?.left}${mediaBorderRadiusUnits?.Tablet}`;
    const mediaBorderRadiusMobileWidth = `${mediaBorderRadiusMobile?.top}${mediaBorderRadiusUnits?.Mobile} ${mediaBorderRadiusMobile?.right}${mediaBorderRadiusUnits?.Mobile} ${mediaBorderRadiusMobile?.bottom}${mediaBorderRadiusUnits?.Mobile} ${mediaBorderRadiusMobile?.left}${mediaBorderRadiusUnits?.Mobile}`;

    // Start Generating CSS
    const infoBoxStyle = `
        .fb-info-box-main-wrapper.${blockID} {
            ${infoBoxPositionType === 'default' ? `position: relative;` : ''}
            ${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' ? `width: 100%;` : ''}
            ${infoBoxPositionType !== 'default' ? `position: ${infoBoxPositionType};` : ''}
            ${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxHZOrientationType === 'left' && infoBoxHZLeftOffset?.Desktop ? `left: ${infoBoxHZLeftOffset?.Desktop}${infoBoxHZLeftOffsetUnits?.Desktop};` : ''}
            ${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxHZOrientationType === 'right' && infoBoxHZRightOffset?.Desktop ? `right: ${infoBoxHZRightOffset?.Desktop}${infoBoxHZRightOffsetUnits?.Desktop};` : ''}
            ${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxVROrientationType === 'top' && infoBoxVRTopOffset?.Desktop ? `top: ${infoBoxVRTopOffset?.Desktop}${infoBoxVRTopOffsetUnits?.Desktop};` : ''}
            ${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxVROrientationType === 'bottom' && infoBoxVRBottomOffset?.Desktop ? `bottom: ${infoBoxVRBottomOffset?.Desktop}${infoBoxVRBottomOffsetUnits?.Desktop};` : ''}
            ${globalZIndex?.Desktop ? `z-index: ${globalZIndex?.Desktop};` : ""}
            ${infoBoxOverflow !== 'default' ? `overflow: ${infoBoxOverflow};` : ''}
        }
        .fb-info-box-wrapper.${blockID} {
            position: relative;
            ${globalBgColor ? `background-color: ${globalBgColor};` : ""}
            ${DesktopPadding && globalPaddingDesktop?.top ? `padding: ${DesktopPadding};` : ""}
            ${DesktopMargin && globalMarginDesktop?.top ? `margin: ${DesktopMargin};` : ""}
            ${globalBorder ? `border: ${globalBorder};` : ""}
            ${BorderDesktopWidth && globalBorderDesktop?.top ? `border-width: ${BorderDesktopWidth};` : ""}
            ${BorderRadiusDesktopWidth && globalBorderRadiusDesktop?.top ? `border-radius: ${BorderRadiusDesktopWidth};` : ""}
            ${globalBorderColor ? `border-color: ${globalBorderColor};` : ""}
            ${boxGlobalBoxShadowCssValue ? `box-shadow: ${boxGlobalBoxShadowCssValue};` : ""}
            transition: all .3s ease-in-out;
        }
    
        .fb-info-box-wrapper.${blockID}:hover {
            ${globalBgHoverColor ? `background-color: ${globalBgHoverColor};` : ""}
            ${globalBorderHoverColor ? `border-color: ${globalBorderHoverColor};` : ""}
            ${boxGlobalHoverBoxShadowCssValue ? `box-shadow: ${boxGlobalHoverBoxShadowCssValue};` : ""}
            transition: all .3s ease-in-out;
        }
    
        @media only screen and (max-width: 1024px) {
            .fb-info-box-main-wrapper.${blockID} {
            ${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxHZOrientationType === 'left' && infoBoxHZLeftOffset?.Tablet ? `left: ${infoBoxHZLeftOffset?.Tablet}${infoBoxHZLeftOffsetUnits?.Tablet};` : ''}
            ${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxHZOrientationType === 'right' && infoBoxHZRightOffset?.Tablet ? `right: ${infoBoxHZRightOffset?.Tablet}${infoBoxHZRightOffsetUnits?.Tablet};` : ''}
            ${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxVROrientationType === 'top' && infoBoxVRTopOffset?.Tablet ? `top: ${infoBoxVRTopOffset?.Tablet}${infoBoxVRTopOffsetUnits?.Tablet};` : ''}
            ${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxVROrientationType === 'bottom' && infoBoxVRBottomOffset?.Tablet ? `bottom: ${infoBoxVRBottomOffset?.Tablet}${infoBoxVRBottomOffsetUnits?.Tablet};` : ''}
            ${globalZIndex?.Tablet ? `z-index: ${globalZIndex?.Tablet};` : ""}
            }
            .fb-info-box-wrapper.${blockID} {
            ${TabletPadding && globalPaddingTablet?.top ? `padding: ${TabletPadding};` : ""}
            ${TabletMargin && globalMarginTablet?.top ? `margin: ${TabletMargin};` : ""}
            ${BorderTabletWidth && globalBorderTablet?.top ? `border-width: ${BorderTabletWidth};` : ""}
            ${BorderRadiusTabletWidth && globalBorderRadiusTablet?.top ? `border-radius: ${BorderRadiusTabletWidth};` : ""}
            }
        }
    
        @media only screen and (max-width: 767px) {
            .fb-info-box-main-wrapper.${blockID} {
            ${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxHZOrientationType === 'left' && infoBoxHZLeftOffset?.Mobile ? `left: ${infoBoxHZLeftOffset?.Mobile}${infoBoxHZLeftOffsetUnits?.Mobile};` : ''}
            ${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxHZOrientationType === 'right' && infoBoxHZRightOffset?.Mobile ? `right: ${infoBoxHZRightOffset?.Mobile}${infoBoxHZRightOffsetUnits?.Mobile};` : ''}
            ${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxVROrientationType === 'top' && infoBoxVRTopOffset?.Mobile ? `top: ${infoBoxVRTopOffset?.Mobile}${infoBoxVRTopOffsetUnits?.Mobile};` : ''}
            ${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxVROrientationType === 'bottom' && infoBoxVRBottomOffset?.Mobile ? `bottom: ${infoBoxVRBottomOffset?.Mobile}${infoBoxVRBottomOffsetUnits?.Mobile};` : ''} 
            ${globalZIndex?.Mobile ? `z-index: ${globalZIndex?.Mobile};` : ""}
            }
            .fb-info-box-wrapper.${blockID} {
            ${MobilePadding && globalPaddingMobile?.top ? `padding: ${MobilePadding};` : ""}
            ${MobileMargin && globalMarginMobile?.top ? `margin: ${MobileMargin};` : ""}
            ${BorderMobileWidth && globalBorderMobile?.top ? `border-width: ${BorderMobileWidth};` : ""}
            ${BorderRadiusMobileWidth && globalBorderRadiusMobile?.top ? `border-radius: ${BorderRadiusMobileWidth};` : ""}
            }
        }

        .fb-info-box-wrapper.${blockID} .fb-info-box-wrapper-inner {
        display: flex;
            ${infoIconPosition === 'top' ? 'flex-direction: column;' : ''}
            ${infoIconPosition === 'bottom' ? 'flex-direction: column-reverse;' : ''}
            ${infoIconPosition === 'left' ? 'flex-direction: row;' : ''}
            ${infoIconPosition === 'right' ? 'flex-direction: row-reverse;' : ''}
            ${infoIconPosition !== 'top' || infoIconPosition !== 'bottom' ? `justify-content: ${infoCardAlignment};` : ''}
        }
        .fb-info-box-wrapper.${blockID} .fb-info-box-wrapper-inner .fb-info-media-container {
            display: flex;
            ${wrapperAlignment ? `justify-content: ${wrapperAlignment};` : ''}
            align-items: ${infoIconVerticalPosition === "v-top" ? "flex-start" : infoIconVerticalPosition === "v-middle" ? "center" : infoIconVerticalPosition === "v-bottom" ? "flex-end" : "flex-start"};
        }
    
        .fb-info-box-wrapper.${blockID} .fb-heading,
        .fb-info-box-wrapper.${blockID} .fb-heading .fb-title-dynamic-link {
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
    
        .fb-info-box-wrapper.${blockID}:hover .fb-heading,
        .fb-info-box-wrapper.${blockID}:hover .fb-heading .fb-title-dynamic-link {
            ${Heading_Hover_Color ? `color: ${Heading_Hover_Color};` : ""}
            ${Heading_Border_Hover_Color ? `border-color: ${Heading_Border_Hover_Color};` : ""}
            transition: all .3s ease-in-out;
        }
    
        @media only screen and (max-width: 1024px) {
            .fb-info-box-wrapper.${blockID} .fb-heading,
            .fb-info-box-wrapper.${blockID} .fb-heading .fb-title-dynamic-link {
                ${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Tablet && headingFontSizeUnits?.Tablet ? `font-size: ${headingFontSize?.Tablet}${headingFontSizeUnits?.Tablet};` : ''}
                ${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Tablet && headingLetterSpacingUnits?.Tablet ? `letter-spacing: ${headingLetterSpacing?.Tablet}${headingLetterSpacingUnits?.Tablet};` : ''}
                ${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Tablet && headingLineHeightUnits?.Tablet ? `line-height: ${headingLineHeight?.Tablet}${headingLineHeightUnits?.Tablet};` : ''}
                ${headingPaddingTabWidthValue && Heading_Tab_padding?.top ? `padding: ${headingPaddingTabWidthValue};` : ''}
                ${headingMarginTabWidthValue && Heading_Tab_Margin?.top ? `margin: ${headingMarginTabWidthValue};` : ''}
                ${headingBorderTabWidthValue && Heading_Tab_Border_Width?.top ? `border-width: ${headingBorderTabWidthValue};` : ''}
                ${headingBorderRadiusTabWidthValue && Heading_Tab_Border_radius_Width?.top ? `border-radius: ${headingBorderRadiusTabWidthValue};` : ''}
            }
        }
        @media only screen and (max-width: 724px) {
            .fb-info-box-wrapper.${blockID} .fb-heading,
            .fb-info-box-wrapper.${blockID} .fb-heading .fb-title-dynamic-link {
                ${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Mobile && headingFontSizeUnits?.Mobile ? `font-size: ${headingFontSize?.Mobile}${headingFontSizeUnits?.Mobile};` : ''}
                ${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Mobile && headingLetterSpacingUnits?.Mobile ? `letter-spacing: ${headingLetterSpacing?.Mobile}${headingLetterSpacingUnits?.Mobile};` : ''}
                ${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Mobile && headingLineHeightUnits?.Mobile ? `line-height: ${headingLineHeight?.Mobile}${headingLineHeightUnits?.Mobile};` : ''}
                ${headingPaddingMobileWidthValue && Heading_Mobile_padding?.top ? `padding: ${headingPaddingMobileWidthValue};` : ''}
                ${headingMarginMobileWidthValue && Heading_Mobile_Margin?.top ? `margin: ${headingMarginMobileWidthValue};` : ''}
                ${headingBorderMobileWidthValue && Heading_Mobile_Border_Width?.top ? `border-width: ${headingBorderMobileWidthValue};` : ''}
                ${headingBorderRadiusMobileWidthValue && Heading_Mobile_Border_radius_Width?.top ? `border-radius: ${headingBorderRadiusMobileWidthValue};` : ''}
            }
        }
        
        .fb-info-box-wrapper.${blockID} .fb-description,
        .fb-info-box-wrapper.${blockID} .fb-description .fb-description-dynamic-link {
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

        .fb-info-box-wrapper.${blockID}:hover .fb-description,
        .fb-info-box-wrapper.${blockID}:hover .fb-description .fb-description-dynamic-link {
            ${SubHeadingHoverColor ? `color: ${SubHeadingHoverColor};` : ""}
        }

        @media only screen and (max-width: 1024px) {
            .fb-info-box-wrapper.${blockID} .fb-description,
            .fb-info-box-wrapper.${blockID} .fb-description .fb-description-dynamic-link {
                ${subHeadingTabPaddingValue && SubHeadingTabPadding?.top ? `padding: ${subHeadingTabPaddingValue};` : ""}
                ${descTabMarginValue && descTabMargin?.top ? `margin: ${descTabMarginValue};` : ""}
                ${subHeadingGlobalTypoSwitcher?.fontSize === false && subHeadingFontSize?.Tablet && subHeadingFontSizeUnits?.Tablet ? `font-size: ${subHeadingFontSize?.Tablet}${subHeadingFontSizeUnits?.Tablet};` : ''}
                ${subHeadingGlobalTypoSwitcher?.letterSpacing === false && subHeadingLetterSpacing?.Tablet && subHeadingLetterSpacingUnits?.Tablet ? `letter-spacing: ${subHeadingLetterSpacing?.Tablet}${subHeadingLetterSpacingUnits?.Tablet};` : ''}
                ${subHeadingGlobalTypoSwitcher?.lineHeight === false && subHeadingLineHeight?.Tablet && subHeadingLineHeightUnits?.Tablet ? `line-height: ${subHeadingLineHeight?.Tablet}${subHeadingLineHeightUnits?.Tablet};` : ''}
            }
        }

        @media only screen and (max-width: 757px) {
            .fb-info-box-wrapper.${blockID} .fb-description,
                .fb-info-box-wrapper.${blockID} .fb-description .fb-description-dynamic-link {
                ${subHeadingMobilePaddingValue && SubHeadingMobilePadding?.top ? `padding: ${subHeadingMobilePaddingValue};` : ""}
                ${descMobileMarginValue && descMobileMargin?.top ? `margin: ${descMobileMarginValue};` : ""}
                ${subHeadingGlobalTypoSwitcher?.fontSize === false && subHeadingFontSize?.Mobile && subHeadingFontSizeUnits?.Mobile ? `font-size: ${subHeadingFontSize?.Mobile}${subHeadingFontSizeUnits?.Mobile};` : ''}
                ${subHeadingGlobalTypoSwitcher?.letterSpacing === false && subHeadingLetterSpacing?.Mobile && subHeadingLetterSpacingUnits?.Mobile ? `letter-spacing: ${subHeadingLetterSpacing?.Mobile}${subHeadingLetterSpacingUnits?.Mobile};` : ''}
                ${subHeadingGlobalTypoSwitcher?.lineHeight === false && subHeadingLineHeight?.Mobile && subHeadingLineHeightUnits?.Mobile ? `line-height: ${subHeadingLineHeight?.Mobile}${subHeadingLineHeightUnits?.Mobile};` : ''}
            }
        }
        .fb-info-box-wrapper.${blockID}.preset-6 .fb-info-button {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 6;
        }
        .fb-info-box-wrapper.${blockID} .fb-info-btn-container {
            ${buttonAlignment ? `text-align: ${buttonAlignment};` : ''}
        }
        .fb-info-box-wrapper.${blockID} .fb-info-btn-wrapper {
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
            
            ${buttonDesktopPaddingValue && infoButtonDesktopPadding?.top ? `padding: ${buttonDesktopPaddingValue};` : ''}	
            ${buttonDesktopMarginValue && infoButtonDesktopMargin?.top ? `margin: ${buttonDesktopMarginValue};` : ''}
            ${infoButtonBorder ? `border-style: ${infoButtonBorder};` : ''}
            ${buttonDesktopBorderValue && infoButtonDesktopBorderWidth?.top ? `border-width: ${buttonDesktopBorderValue};` : ''}
            ${infoButtonBorderColor ? `border-color: ${infoButtonBorderColor};` : ''}
            ${buttonDesktopBorderRadiusValue && infoBtnDesktopBorderradiusWidth?.top ? `border-radius: ${buttonDesktopBorderRadiusValue};` : ''}
            transition: all .3s ease-in-out;
        }

        .fb-info-box-wrapper.${blockID}:hover .fb-info-btn-wrapper {
            ${buttonTextHoverColor ? `color: ${buttonTextHoverColor};` : ""}
            ${buttonBgHoverColor ? `background-color: ${buttonBgHoverColor};` : ""}
            ${infoButtonHoverBorderColor ? `border-color: ${infoButtonHoverBorderColor};` : ''}
        }

        @media only screen and (max-width: 1024px) {
            .fb-info-box-wrapper.${blockID} .fb-info-btn-wrapper {
                ${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Tablet ? `font-size: ${buttonFontSize?.Tablet}${buttonFontSizeUnits?.Tablet};` : ''}
                ${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Tablet ? `letter-spacing: ${buttonLetterSpacing?.Tablet}${buttonLetterSpacingUnits?.Tablet};` : ''}
                ${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Tablet ? `line-height: ${buttonLineHeight?.Tablet}${buttonLineHeightUnits?.Tablet};` : ''}
                ${buttonTabPaddingValue && infoButtonTabPadding?.top ? `padding: ${buttonTabPaddingValue};` : ''}
                ${buttonTabMarginValue && infoButtonTabMargin?.top ? `margin: ${buttonTabMarginValue};` : ''}
                ${buttonTabBorderValue && infoButtonTabBorderWidth?.top ? `border-width: ${buttonTabBorderValue};` : ''}
                ${buttonTabBorderRadiusValue && infoBtnTabBorderradiusWidth?.top ? `border-radius: ${buttonTabBorderRadiusValue};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .fb-info-box-wrapper.${blockID} .fb-info-btn-wrapper {
                ${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Mobile ? `font-size: ${buttonFontSize?.Mobile}${buttonFontSizeUnits?.Mobile};` : ''}
                ${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Mobile ? `letter-spacing: ${buttonLetterSpacing?.Mobile}${buttonLetterSpacingUnits?.Mobile};` : ''}
                ${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Mobile ? `line-height: ${buttonLineHeight?.Mobile}${buttonLineHeightUnits?.Mobile};` : ''}
                ${buttonMobilePaddingValue && infoButtonMobilePadding?.top ? `padding: ${buttonMobilePaddingValue};` : ''}
                ${buttonMobileMarginValue && infoButtonMobileMargin?.top ? `margin: ${buttonMobileMarginValue};` : ''}
                ${buttonMobileBorderValue && infoButtonMobileBorderWidth?.top ? `border-width: ${buttonMobileBorderValue};` : ''}
                ${buttonMobileBorderRadiusValue && infoBtnMobileBorderradiusWidth?.top ? `border-radius: ${buttonMobileBorderRadiusValue};` : ''}
            }
        }
        .fb-info-box-wrapper.${blockID} .fb-info-media-wrapper {
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
            ${mediaDesktopPadding && mediaPaddingDesktop?.top ? `padding: ${mediaDesktopPadding};` : ''}
            ${mediaDesktopMargin && mediaMarginDesktop?.top ? `margin: ${mediaDesktopMargin};` : ''}
            ${mediaBorder ? `border-style: ${mediaBorder};` : ''}
            ${mediaBorderDesktopWidth && mediaBorderDesktop?.top ? `border-width: ${mediaBorderDesktopWidth};` : ''}
            ${mediaBorderColor ? `border-color: ${mediaBorderColor};` : ''}
            ${mediaBorderRadiusDesktop && mediaBorderRadiusDesktop?.top ? `border-radius: ${mediaBorderRadiusDesktopWidth};` : ''}
            background-repeat: none;
            background-size: cover;
            ${mediaClassicColor ? `justify-content: center; ` : ''}
            overflow: hidden;
            transition: all .3s ease-in-out;
        }
        .fb-info-box-wrapper.${blockID} .fb-info-media-wrapper{
            ${infoBoxPresetStyle === "preset-5" ?
                `
                border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
                ` : ''
            }
        }
        
        .fb-info-box-wrapper.${blockID}:hover .fb-info-media-wrapper {
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
            transition: all .3s ease-in-out;
        }

        @media only screen and (max-width: 1024px) {
            .fb-info-box-wrapper.${blockID} .fb-info-media-wrapper {
                ${mediaTabletPadding && mediaPaddingTablet?.top ? `padding: ${mediaTabletPadding};` : ''}
                ${mediaTabletMargin && mediaMarginTablet?.top ? `margin: ${mediaTabletMargin};` : ''}
                ${mediaBorderTabletWidth && mediaBorderTablet?.top ? `border-width: ${mediaBorderTabletWidth};` : ''}
                ${mediaBorderRadiusTabletWidth && mediaBorderRadiusTablet?.top ? `border-radius: ${mediaBorderRadiusTabletWidth};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .fb-info-box-wrapper.${blockID} .fb-info-media-wrapper {
                ${mediaMobilePadding && mediaPaddingMobile?.top ? `padding: ${mediaMobilePadding};` : ''}
                ${mediaMobileMargin && mediaMarginMobile?.top ? `margin: ${mediaMobileMargin};` : ''}
                ${mediaBorderMobileWidth && mediaBorderMobile?.top ? `border-width: ${mediaBorderMobileWidth};` : ''}
                ${mediaBorderRadiusMobileWidth && mediaBorderRadiusMobile?.top ? `border-radius: ${mediaBorderRadiusMobileWidth};` : ''}
            }
        }

        .fb-info-box-wrapper.${blockID} .fb-icon-wrapper svg,
        .fb-info-box-wrapper.${blockID} .fb-info-media-wrapper img {
            ${mediaSize?.Desktop ? `width: ${mediaSize?.Desktop}${mediaSizeUnits?.Desktop};` : ''}
            ${mediaHeight?.Desktop ? `height: ${mediaHeight?.Desktop}${mediaHeightUnits?.Desktop};` : ''}
            ${mediaSwitcher === "icon" && mediaIconColor ? `fill: ${mediaIconColor};` : ""}
            ${mediaSwitcher === "image" && infoMediaSize ? `object-fit: ${infoMediaSize};` : ""}
        }

        .fb-info-box-wrapper.${blockID}:hover .fb-icon-wrapper svg {
            ${mediaIconHoverColor ? `fill: ${mediaIconHoverColor};` : "#ffffff"}
            transition: all .3s ease-in-out;
        }

        @media only screen and (max-width: 1024px) {
            .fb-info-box-wrapper.${blockID} .fb-icon-wrapper svg,
            .fb-info-box-wrapper.${blockID} .fb-info-media-wrapper img {
                ${mediaSize?.Tablet ? `width: ${mediaSize?.Tablet}${mediaSizeUnits?.Tablet};` : ''}
                ${mediaHeight?.Tablet ? `height: ${mediaHeight?.Tablet}${mediaHeightUnits?.Tablet};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .fb-info-box-wrapper.${blockID} .fb-icon-wrapper svg,
            .fb-info-box-wrapper.${blockID} .fb-info-media-wrapper img {
                ${mediaSize?.Mobile ? `width: ${mediaSize?.Mobile}${mediaSizeUnits?.Mobile};` : ''}
                ${mediaHeight?.Mobile ? `height: ${mediaHeight?.Mobile}${mediaHeightUnits?.Mobile};` : ''}
            }
        }

        .fb-info-box-wrapper.${blockID} .fb-btn-icon-wrapper img,
        .fb-info-box-wrapper.${blockID} .fb-btn-icon-wrapper svg {
            ${btnIconSize?.Desktop ? `width: ${btnIconSize?.Desktop}${btnIconSizeUnits?.Desktop};` : ''}
            ${btnIconColor ? `fill: ${btnIconColor};` : "#ffffff"}
            transform: rotate(${buttonIconRotate?.Desktop}deg);
            transition: all .3s ease-in-out;
        }

        .fb-info-box-wrapper.${blockID}:hover .fb-btn-icon-wrapper svg,
        .fb-info-box-wrapper.${blockID}:hover .fb-btn-icon-wrapper img {
            ${btnIconHoverColor ? `fill: ${btnIconHoverColor};` : "#ffffff"}
            transform: rotate(${buttonIconRotateHover?.Desktop}deg);
            transition: all .3s ease-in-out;
        }

        @media only screen and (max-width: 1024px) {
            .fb-info-box-wrapper.${blockID} .fb-btn-icon-wrapper svg,
            .fb-info-box-wrapper.${blockID} .fb-btn-icon-wrapper img {
                ${btnIconSize?.Tablet ? `width: ${btnIconSize?.Tablet}${btnIconSizeUnits?.Tablet};` : ''}
                transform: rotate(${buttonIconRotate?.Tablet}deg);
            }
        }

        @media only screen and (max-width: 767px) {
            .fb-info-box-wrapper.${blockID} .fb-btn-icon-wrapper svg,
            .fb-info-box-wrapper.${blockID} .fb-btn-icon-wrapper img {
                ${btnIconSize?.Mobile ? `width: ${btnIconSize?.Mobile}${btnIconSizeUnits?.Mobile};` : ''}
                transform: rotate(${buttonIconRotate?.Mobile}deg);
            }
        }
        .fb-info-box-wrapper.${blockID}.preset-6 .shape{
            position: absolute;
            top: 0;
            right: 0;
        }
    `;

    const customCss = getCustomCss(infoBoxCustomCSS, `.${blockID}`);
    
    return `${infoBoxStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateInfoBoxStyle;