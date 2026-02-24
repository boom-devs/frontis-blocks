/**
 * Business Hours Block - Style Generation
 * Returns Dynamic Generated CSS
 */
import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateBusinessHoursBlockStyle = (attributes) => {
    const {
		blockID,
        countries,
        selectedCountry,
        useCustomLocation,
		location,
        showTimezoneOffset,   
        showRemainingTime,
        remainingTimeLabel,
        remainingTimeFormat,     
		timezone,        
		timezones,       
		startTime,
		endTime,
		officeHours,
		officeStatus,
        timeFormat,
		weekendDays,
		holidays,
		useMonthlySchedule,
		monthlySchedules,
		timezoneMode,
		closedMessage,
		completionMessage,
		weekendMessage,
		holidayMessage,
		useUTCTimezoneFormat,

        showStatusSwitcher,

		separator,
		showSeparatorSwitcher,
		separatorColorSwitcher,
		separatorColor,
		separatorHoverColor,
		separatorSize,
		separatorFontUnits,
		openStatusText,
		closedStatusText,
		beforeTimeText,
		afterTimeText,
		
		timezoneLocationTextGlobalTypoSwitcher,
		timezoneLocationTextGlobalTypographyData,
		timezoneLocationTextGlobalTypoType,
		timezoneLocationTextGlobalTypoOption,
		timezoneLocationTextFontFamily,
		timezoneLocationTextFontSize,
		timezoneLocationTextFontSizeUnits,
		timezoneLocationTextFontWeight,
		timezoneLocationTextFontStyle,
		timezoneLocationTextTransform,
		timezoneLocationTextDecoration,
		timezoneLocationTextLetterSpacing,
		timezoneLocationTextLetterSpacingUnits,
		timezoneLocationTextLineHeight,
		timezoneLocationTextLineHeightUnits,
		
		timezoneTimeTextGlobalTypoSwitcher,
		timezoneTimeTextGlobalTypographyData,
		timezoneTimeTextGlobalTypoType,
		timezoneTimeTextGlobalTypoOption,
		timezoneTimeTextFontFamily,
		timezoneTimeTextFontSize,
		timezoneTimeTextFontSizeUnits,
		timezoneTimeTextFontWeight,
		timezoneTimeTextFontStyle,
		timezoneTimeTextTransform,
		timezoneTimeTextDecoration,
		timezoneTimeTextLetterSpacing,
		timezoneTimeTextLetterSpacingUnits,
		timezoneTimeTextLineHeight,
		timezoneTimeTextLineHeightUnits,
		
		timezoneTextGlobalTypoSwitcher,
		timezoneTextGlobalTypographyData,
		timezoneTextGlobalTypoType,
		timezoneTextGlobalTypoOption,
		timezoneTextFontFamily,
		timezoneTextFontSize,
		timezoneTextFontSizeUnits,
		timezoneTextFontWeight,
		timezoneTextFontStyle,
		timezoneTextTransform,
		timezoneTextDecoration,
		timezoneTextLetterSpacing,
		timezoneTextLetterSpacingUnits,
		timezoneTextLineHeight,
		timezoneTextLineHeightUnits,

		locationNameTextColorTypeSwitcher,
        locationNameTextColorType,
        locationNameTextHoverColorType,
        locationNameTextColor,
        locationNameTextHoverColor,
        locationNameTextGradientColor,
        locationNameTextHoverGradientColor,
        locationNameTextCustomGradientColorSwitcher,
        locationNameTextCustomGradientColor,
        locationNameTextHoverCustomGradientColorSwitcher,
        locationNameTextHoverCustomGradientColor,
		
		timezoneTimeTextColorTypeSwitcher,
        timezoneTimeTextColorType,
        timezoneTimeTextHoverColorType,
        timezoneTimeTextColor,
        timezoneTimeTextHoverColor,
        timezoneTimeTextGradientColor,
        timezoneTimeTextHoverGradientColor,
        timezoneTimeTextCustomGradientColorSwitcher,
        timezoneTimeTextCustomGradientColor,
        timezoneTimeTextHoverCustomGradientColorSwitcher,
        timezoneTimeTextHoverCustomGradientColor,

		timezoneTextColorTypeSwitcher,
        timezoneTextColorType,
        timezoneTextHoverColorType,
        timezoneTextColor,
        timezoneTextHoverColor,
        timezoneTextGradientColor,
        timezoneTextHoverGradientColor,
        timezoneTextCustomGradientColorSwitcher,
        timezoneTextCustomGradientColor,
        timezoneTextHoverCustomGradientColorSwitcher,
        timezoneTextHoverCustomGradientColor,

		alignment,
		spacing,
		spacingUnits,

		timezoneTextAlignment,
		timezoneLocationTextSpacing,
		timezoneLocationTextSpacingUnits,
		timezoneCardAlignment,
		timezoneCardSpacing,
		timezoneCardSpacingUnits,

		locationTimezoneBgColorTypeSwitcher,
        locationTimezoneBgColorType,
        locationTimezoneBgHoverColorType,
        locationTimezoneBgColor,
        locationTimezoneBgHoverColor,
        locationTimezoneBgGradientColor,
        locationTimezoneBgHoverGradientColor,
        locationTimezoneBgCustomGradientColorSwitcher,
        locationTimezoneBgCustomGradientColor,
        locationTimezoneBgHoverCustomGradientColorSwitcher,
        locationTimezoneBgHoverCustomGradientColor,

		locationTimezoneBorder,
        locationTimezoneBorderColor,
        locationTimezoneBorderHoverColor,
        locationTimezoneBorderColorSwitcher,

        locationTimezoneBorderUnits,
        locationTimezoneDesktopBorder,
        locationTimezoneTabletBorder,
        locationTimezoneMobileBorder,
        locationTimezoneBorderLink,

        locationTimezoneBorderRadiusUnits,
        locationTimezoneDesktopBorderRadius,
        locationTimezoneTabBorderRadius,
        locationTimezoneMobileBorderRadius,
        locationTimezoneBorderRadiusLink,
        locationTimezoneBoxShadowValues,
        locationTimezoneBoxShadowCssValue,

		locationTimezonePaddingUnits,
        locationTimezoneDesktopPadding,
        locationTimezoneTabPadding,
        locationTimezoneMobilePadding,
        locationTimezonePaddingLink,
        locationTimezoneMarginUnits,
        locationTimezoneDesktopMargin,
        locationTimezoneTabMargin,
        locationTimezoneMobileMargin,
        locationTimezoneMarginLink,

		infoBoxBgColorTypeSwitcher,
        infoBoxBgColorType,
        infoBoxBgHoverColorType,
        infoBoxBgColor,
        infoBoxBgHoverColor,
        infoBoxBgGradientColor,
        infoBoxBgHoverGradientColor,
        infoBoxBgCustomGradientColorSwitcher,
        infoBoxBgCustomGradientColor,
        infoBoxBgHoverCustomGradientColorSwitcher,
        infoBoxBgHoverCustomGradientColor,

		infoBoxOffStatusBgColorTypeSwitcher,
        infoBoxOffStatusBgColorType,
        infoBoxOffStatusBgHoverColorType,
        infoBoxOffStatusBgColor,
        infoBoxOffStatusBgHoverColor,
        infoBoxOffStatusBgGradientColor,
        infoBoxOffStatusBgHoverGradientColor,
        infoBoxOffStatusBgCustomGradientColorSwitcher,
        infoBoxOffStatusBgCustomGradientColor,
        infoBoxOffStatusBgHoverCustomGradientColorSwitcher,
        infoBoxOffStatusBgHoverCustomGradientColor,

		infoBoxBorder,
        infoBoxBorderColor,
        infoBoxBorderHoverColor,
        infoBoxBorderColorSwitcher,
        infoBoxOffStatusBorderColor,
        infoBoxOffStatusBorderHoverColor,
        infoBoxOffStatusBorderColorSwitcher,

        infoBoxBorderUnits,
        infoBoxDesktopBorder,
        infoBoxTabletBorder,
        infoBoxMobileBorder,
        infoBoxBorderLink,

        infoBoxBorderRadiusUnits,
        infoBoxDesktopBorderRadius,
        infoBoxTabBorderRadius,
        infoBoxMobileBorderRadius,
        infoBoxBorderRadiusLink,
        infoBoxBoxShadowValues,
        infoBoxBoxShadowCssValue,
        infoBoxOffStatusBoxShadowValues,
        infoBoxOffStatusBoxShadowCssValue,

		infoBoxPaddingUnits,
        infoBoxDesktopPadding,
        infoBoxTabPadding,
        infoBoxMobilePadding,
        infoBoxPaddingLink,
        infoBoxMarginUnits,
        infoBoxDesktopMargin,
        infoBoxTabMargin,
        infoBoxMobileMargin,
        infoBoxMarginLink,

		statusTextGlobalTypoSwitcher,
		statusTextGlobalTypographyData,
		statusTextGlobalTypoType,
		statusTextGlobalTypoOption,
		statusTextFontFamily,
		statusTextFontSize,
		statusTextFontSizeUnits,
		statusTextFontWeight,
		statusTextFontStyle,
		statusTextTransform,
		statusTextDecoration,
		statusTextLetterSpacing,
		statusTextLetterSpacingUnits,
		statusTextLineHeight,
		statusTextLineHeightUnits,

		statusPaddingUnits,
        statusDesktopPadding,
        statusTabPadding,
        statusMobilePadding,
        statusPaddingLink,

		statusOpenColorSwitcher,
		statusOpenColor,
		statusOpenHoverColor,
		statusCloseColorSwitcher,
		statusCloseColor,
		statusCloseHoverColor,
		
		statusOpenBgColorSwitcher,
		statusOpenBgColor,
		statusOpenHoverBgColor,
		statusCloseBgColorSwitcher,
		statusCloseBgColor,
		statusCloseHoverBgColor,

		statusOpenBorder,
        statusOpenBorderColor,
        statusOpenBorderHoverColor,
        statusOpenBorderColorSwitcher,

        statusOpenBorderUnits,
        statusOpenDesktopBorder,
        statusOpenTabletBorder,
        statusOpenMobileBorder,
        statusOpenBorderLink,

        statusOpenBorderRadiusUnits,
        statusOpenDesktopBorderRadius,
        statusOpenTabBorderRadius,
        statusOpenMobileBorderRadius,
        statusOpenBorderRadiusLink,

		statusCloseBorder,
        statusCloseBorderColor,
        statusCloseBorderHoverColor,
        statusCloseBorderColorSwitcher,

        statusCloseBorderUnits,
        statusCloseDesktopBorder,
        statusCloseTabletBorder,
        statusCloseMobileBorder,
        statusCloseBorderLink,

        statusCloseBorderRadiusUnits,
        statusCloseDesktopBorderRadius,
        statusCloseTabBorderRadius,
        statusCloseMobileBorderRadius,
        statusCloseBorderRadiusLink,

		noticeTextGlobalTypoSwitcher,
		noticeTextGlobalTypographyData,
		noticeTextGlobalTypoType,
		noticeTextGlobalTypoOption,
		noticeTextFontFamily,
		noticeTextFontSize,
		noticeTextFontSizeUnits,
		noticeTextFontWeight,
		noticeTextFontStyle,
		noticeTextTransform,
		noticeTextDecoration,
		noticeTextLetterSpacing,
		noticeTextLetterSpacingUnits,
		noticeTextLineHeight,
		noticeTextLineHeightUnits,
        
        noticeTextColorSwitcher,
		noticeTextColor,
		noticeTextHoverColor,
        statusOffNoticeTextColorSwitcher,
		statusOffNoticeTextColor,
		statusOffNoticeTextHoverColor,

        timezoneGlobalZIndex,
        timezoneOverflow,

        // Position
        timezonePositionType,
        timezoneHZOrientationType,
        timezoneVROrientationType,
        timezoneHZLeftOffset,
        timezoneHZLeftOffsetUnits,
        timezoneHZRightOffset,
        timezoneHZRightOffsetUnits,
        timezoneVRTopOffset,
        timezoneVRTopOffsetUnits,
        timezoneVRBottomOffset,
        timezoneVRBottomOffsetUnits,

        timezoneGlobalWraperClass,
        timezoneGlobalWraperID,

        timezonePaddingUnits,
        timezoneDesktopPadding,
        timezoneTabPadding,
        timezoneMobilePadding,
        timezonePaddingLink,
        timezoneMarginUnits,
        timezoneDesktopMargin,
        timezoneTabMargin,
        timezoneMobileMargin,
        timezoneMarginLink,

        /** Start Background */
        timezoneGlobalBgColorSwitcher,
        timezoneGlobalBgNormalBackgroundType,
        timezoneGlobalBgNormalClassicColor,
        timezoneGlobalBgNormalGradientColor,
        timezoneGlobalBgNormalCustomGradientSwitcher,
        timezoneGlobalBgNormalCustomGradientInputValue,
        timezoneGlobalBgNormalBackgroundImageUrl,
        timezoneGlobalBgNormalBackgroundImagePosition,
        timezoneGlobalBgNormalBackgroundImageAttachment,
        timezoneGlobalBgNormalBackgroundImageRepeat,
        timezoneGlobalBgNormalBackgroundImageSize,

        timezoneGlobalBgHoverBackgroundType,
        timezoneGlobalBgHoverClassicColor,
        timezoneGlobalBgHoverGradientColor,
        timezoneGlobalBgHoverCustomGradientSwitcher,
        timezoneGlobalBgHoverCustomGradientInputValue,
        timezoneGlobalBgHoverBackgroundImageUrl,
        timezoneGlobalBgHoverBackgroundImagePosition,
        timezoneGlobalBgHoverBackgroundImageAttachment,
        timezoneGlobalBgHoverBackgroundImageRepeat,
        timezoneGlobalBgHoverBackgroundImageSize,

        timezoneGlobalBorder,
        timezoneGlobalBorderColorSwitcher,
        timezoneGlobalBorderColor,
        timezoneGlobalBorderHoverColor,
        timezoneGlobalBorderUnits,
        timezoneGlobalBorderDesktop,
        timezoneGlobalBorderTablet,
        timezoneGlobalBorderMobile,
        timezoneGlobalBorderLink,

        timezoneGlobalBorderRadiusUnits,
        timezoneGlobalBorderRadiusDesktop,
        timezoneGlobalBorderRadiusTablet,
        timezoneGlobalBorderRadiusMobile,
        timezoneGlobalBorderRadiusLink,

        timezoneGlobalBoxShadowSwitcher,
        timezoneGlobalBoxShadowValues,
        timezoneGlobalBoxShadowCssValue,
        timezoneGlobalBoxShadowHoverValues,
        timezoneGlobalBoxShadowHoverCssValue,

        timezoneDesktopSwitcher,
		timezoneTabletSwitcher,
		timezoneMobileSwitcher,

        timezoneCustomCSS,
        blockStyle
        /** End Global Style */

	} = attributes;

    const locationTimezoneDesktopMarginWidth = `${locationTimezoneDesktopMargin?.top}${locationTimezoneMarginUnits?.Desktop} ${locationTimezoneDesktopMargin?.right}${locationTimezoneMarginUnits?.Desktop} ${locationTimezoneDesktopMargin?.bottom}${locationTimezoneMarginUnits?.Desktop} ${locationTimezoneDesktopMargin?.left}${locationTimezoneMarginUnits?.Desktop}`;
    const locationTimezoneTabletMarginWidth = `${locationTimezoneTabMargin?.top}${locationTimezoneMarginUnits?.Tablet} ${locationTimezoneTabMargin?.right}${locationTimezoneMarginUnits?.Tablet} ${locationTimezoneTabMargin?.bottom}${locationTimezoneMarginUnits?.Tablet} ${locationTimezoneTabMargin?.left}${locationTimezoneMarginUnits?.Tablet}`;
    const locationTimezoneMobileMarginWidth = `${locationTimezoneMobileMargin?.top}${locationTimezoneMarginUnits?.Mobile} ${locationTimezoneMobileMargin?.right}${locationTimezoneMarginUnits?.Mobile} ${locationTimezoneMobileMargin?.bottom}${locationTimezoneMarginUnits?.Mobile} ${locationTimezoneMobileMargin?.left}${locationTimezoneMarginUnits?.Mobile}`;

    const locationTimezoneDesktopPaddingWidth = `${locationTimezoneDesktopPadding?.top}${locationTimezonePaddingUnits?.Desktop} ${locationTimezoneDesktopPadding?.right}${locationTimezonePaddingUnits?.Desktop} ${locationTimezoneDesktopPadding?.bottom}${locationTimezonePaddingUnits?.Desktop} ${locationTimezoneDesktopPadding?.left}${locationTimezonePaddingUnits?.Desktop}`;
    const locationTimezoneTabletPaddingWidth = `${locationTimezoneTabPadding?.top}${locationTimezonePaddingUnits?.Tablet} ${locationTimezoneTabPadding?.right}${locationTimezonePaddingUnits?.Tablet} ${locationTimezoneTabPadding?.bottom}${locationTimezonePaddingUnits?.Tablet} ${locationTimezoneTabPadding?.left}${locationTimezonePaddingUnits?.Tablet}`;
    const locationTimezoneMobilePaddingWidth = `${locationTimezoneMobilePadding?.top}${locationTimezonePaddingUnits?.Mobile} ${locationTimezoneMobilePadding?.right}${locationTimezonePaddingUnits?.Mobile} ${locationTimezoneMobilePadding?.bottom}${locationTimezonePaddingUnits?.Mobile} ${locationTimezoneMobilePadding?.left}${locationTimezonePaddingUnits?.Mobile}`;

    const infoBoxDesktopPaddingWidth = `${infoBoxDesktopPadding?.top}${infoBoxPaddingUnits?.Desktop} ${infoBoxDesktopPadding?.right}${infoBoxPaddingUnits?.Desktop} ${infoBoxDesktopPadding?.bottom}${infoBoxPaddingUnits?.Desktop} ${infoBoxDesktopPadding?.left}${infoBoxPaddingUnits?.Desktop}`;
    const infoBoxTabletPaddingWidth = `${infoBoxTabPadding?.top}${infoBoxPaddingUnits?.Tablet} ${infoBoxTabPadding?.right}${infoBoxPaddingUnits?.Tablet} ${infoBoxTabPadding?.bottom}${infoBoxPaddingUnits?.Tablet} ${infoBoxTabPadding?.left}${infoBoxPaddingUnits?.Tablet}`;
    const infoBoxMobilePaddingWidth = `${infoBoxMobilePadding?.top}${infoBoxPaddingUnits?.Mobile} ${infoBoxMobilePadding?.right}${infoBoxPaddingUnits?.Mobile} ${infoBoxMobilePadding?.bottom}${infoBoxPaddingUnits?.Mobile} ${infoBoxMobilePadding?.left}${infoBoxPaddingUnits?.Mobile}`;

    const infoBoxDesktopMarginWidth = `${infoBoxDesktopMargin?.top}${infoBoxMarginUnits?.Desktop} ${infoBoxDesktopMargin?.right}${infoBoxMarginUnits?.Desktop} ${infoBoxDesktopMargin?.bottom}${infoBoxMarginUnits?.Desktop} ${infoBoxDesktopMargin?.left}${infoBoxMarginUnits?.Desktop}`;
    const infoBoxTabletMarginWidth = `${infoBoxTabMargin?.top}${infoBoxMarginUnits?.Tablet} ${infoBoxTabMargin?.right}${infoBoxMarginUnits?.Tablet} ${infoBoxTabMargin?.bottom}${infoBoxMarginUnits?.Tablet} ${infoBoxTabMargin?.left}${infoBoxMarginUnits?.Tablet}`;
    const infoBoxMobileMarginWidth = `${infoBoxMobileMargin?.top}${infoBoxMarginUnits?.Mobile} ${infoBoxMobileMargin?.right}${infoBoxMarginUnits?.Mobile} ${infoBoxMobileMargin?.bottom}${infoBoxMarginUnits?.Mobile} ${infoBoxMobileMargin?.left}${infoBoxMarginUnits?.Mobile}`;

    const locationTimezoneDesktopBorderRadiusWidth = `${locationTimezoneDesktopBorderRadius?.top}${locationTimezoneBorderRadiusUnits?.Desktop} ${locationTimezoneDesktopBorderRadius?.right}${locationTimezoneBorderRadiusUnits?.Desktop} ${locationTimezoneDesktopBorderRadius?.bottom}${locationTimezoneBorderRadiusUnits?.Desktop} ${locationTimezoneDesktopBorderRadius?.left}${locationTimezoneBorderRadiusUnits?.Desktop}`;
    const locationTimezoneTabletBorderRadiusWidth = `${locationTimezoneTabBorderRadius?.top}${locationTimezoneBorderRadiusUnits?.Tablet} ${locationTimezoneTabBorderRadius?.right}${locationTimezoneBorderRadiusUnits?.Tablet} ${locationTimezoneTabBorderRadius?.bottom}${locationTimezoneBorderRadiusUnits?.Tablet} ${locationTimezoneTabBorderRadius?.left}${locationTimezoneBorderRadiusUnits?.Tablet}`;
    const locationTimezoneMobileBorderRadiusWidth = `${locationTimezoneMobileBorderRadius?.top}${locationTimezoneBorderRadiusUnits?.Mobile} ${locationTimezoneMobileBorderRadius?.right}${locationTimezoneBorderRadiusUnits?.Mobile} ${locationTimezoneMobileBorderRadius?.bottom}${locationTimezoneBorderRadiusUnits?.Mobile} ${locationTimezoneMobileBorderRadius?.left}${locationTimezoneBorderRadiusUnits?.Mobile}`;

    const locationTimezoneDesktopBorderWidth = `${locationTimezoneDesktopBorder?.top}${locationTimezoneBorderUnits?.Desktop} ${locationTimezoneDesktopBorder?.right}${locationTimezoneBorderUnits?.Desktop} ${locationTimezoneDesktopBorder?.bottom}${locationTimezoneBorderUnits?.Desktop} ${locationTimezoneDesktopBorder?.left}${locationTimezoneBorderUnits?.Desktop}`;
	const locationTimezoneTabletBorderWidth = `${locationTimezoneTabletBorder?.top}${locationTimezoneBorderUnits?.Tablet} ${locationTimezoneTabletBorder?.right}${locationTimezoneBorderUnits?.Tablet} ${locationTimezoneTabletBorder?.bottom}${locationTimezoneBorderUnits?.Tablet} ${locationTimezoneTabletBorder?.left}${locationTimezoneBorderUnits?.Tablet}`;
	const locationTimezoneMobileBorderWidth = `${locationTimezoneMobileBorder?.top}${locationTimezoneBorderUnits?.Mobile} ${locationTimezoneMobileBorder?.right}${locationTimezoneBorderUnits?.Mobile} ${locationTimezoneMobileBorder?.bottom}${locationTimezoneBorderUnits?.Mobile} ${locationTimezoneMobileBorder?.left}${locationTimezoneBorderUnits?.Mobile}`;

    const infoBoxDesktopBorderRadiusWidth = `${infoBoxDesktopBorderRadius?.top}${infoBoxBorderRadiusUnits?.Desktop} ${infoBoxDesktopBorderRadius?.right}${infoBoxBorderRadiusUnits?.Desktop} ${infoBoxDesktopBorderRadius?.bottom}${infoBoxBorderRadiusUnits?.Desktop} ${infoBoxDesktopBorderRadius?.left}${infoBoxBorderRadiusUnits?.Desktop}`;
    const infoBoxTabletBorderRadiusWidth = `${infoBoxTabBorderRadius?.top}${infoBoxBorderRadiusUnits?.Tablet} ${infoBoxTabBorderRadius?.right}${infoBoxBorderRadiusUnits?.Tablet} ${infoBoxTabBorderRadius?.bottom}${infoBoxBorderRadiusUnits?.Tablet} ${infoBoxTabBorderRadius?.left}${infoBoxBorderRadiusUnits?.Tablet}`;
    const infoBoxMobileBorderRadiusWidth = `${infoBoxMobileBorderRadius?.top}${infoBoxBorderRadiusUnits?.Mobile} ${infoBoxMobileBorderRadius?.right}${infoBoxBorderRadiusUnits?.Mobile} ${infoBoxMobileBorderRadius?.bottom}${infoBoxBorderRadiusUnits?.Mobile} ${infoBoxMobileBorderRadius?.left}${infoBoxBorderRadiusUnits?.Mobile}`;

    const infoBoxDesktopBorderWidth = `${infoBoxDesktopBorder?.top}${infoBoxBorderUnits?.Desktop} ${infoBoxDesktopBorder?.right}${infoBoxBorderUnits?.Desktop} ${infoBoxDesktopBorder?.bottom}${infoBoxBorderUnits?.Desktop} ${infoBoxDesktopBorder?.left}${infoBoxBorderUnits?.Desktop}`;
	const infoBoxTabletBorderWidth = `${infoBoxTabletBorder?.top}${infoBoxBorderUnits?.Tablet} ${infoBoxTabletBorder?.right}${infoBoxBorderUnits?.Tablet} ${infoBoxTabletBorder?.bottom}${infoBoxBorderUnits?.Tablet} ${infoBoxTabletBorder?.left}${infoBoxBorderUnits?.Tablet}`;
	const infoBoxMobileBorderWidth = `${infoBoxMobileBorder?.top}${infoBoxBorderUnits?.Mobile} ${infoBoxMobileBorder?.right}${infoBoxBorderUnits?.Mobile} ${infoBoxMobileBorder?.bottom}${infoBoxBorderUnits?.Mobile} ${infoBoxMobileBorder?.left}${infoBoxBorderUnits?.Mobile}`;

    const statusDesktopPaddingWidth = `${statusDesktopPadding?.top}${statusPaddingUnits?.Desktop} ${statusDesktopPadding?.right}${statusPaddingUnits?.Desktop} ${statusDesktopPadding?.bottom}${statusPaddingUnits?.Desktop} ${statusDesktopPadding?.left}${statusPaddingUnits?.Desktop}`;
    const statusTabletPaddingWidth = `${statusTabPadding?.top}${statusPaddingUnits?.Tablet} ${statusTabPadding?.right}${statusPaddingUnits?.Tablet} ${statusTabPadding?.bottom}${statusPaddingUnits?.Tablet} ${statusTabPadding?.left}${locationTimezonePaddingUnits?.Tablet}`;
    const statusMobilePaddingWidth = `${statusMobilePadding?.top}${statusPaddingUnits?.Mobile} ${statusMobilePadding?.right}${statusPaddingUnits?.Mobile} ${statusMobilePadding?.bottom}${statusPaddingUnits?.Mobile} ${statusMobilePadding?.left}${statusPaddingUnits?.Mobile}`;

    const statusOpenDesktopBorderRadiusWidth = `${statusOpenDesktopBorderRadius?.top}${statusOpenBorderRadiusUnits?.Desktop} ${statusOpenDesktopBorderRadius?.right}${statusOpenBorderRadiusUnits?.Desktop} ${statusOpenDesktopBorderRadius?.bottom}${statusOpenBorderRadiusUnits?.Desktop} ${statusOpenDesktopBorderRadius?.left}${statusOpenBorderRadiusUnits?.Desktop}`;
    const statusOpenTabletBorderRadiusWidth = `${statusOpenTabBorderRadius?.top}${statusOpenBorderRadiusUnits?.Tablet} ${statusOpenTabBorderRadius?.right}${statusOpenBorderRadiusUnits?.Tablet} ${statusOpenTabBorderRadius?.bottom}${statusOpenBorderRadiusUnits?.Tablet} ${statusOpenTabBorderRadius?.left}${statusOpenBorderRadiusUnits?.Tablet}`;
    const statusOpenMobileBorderRadiusWidth = `${statusOpenMobileBorderRadius?.top}${statusOpenBorderRadiusUnits?.Mobile} ${statusOpenMobileBorderRadius?.right}${statusOpenBorderRadiusUnits?.Mobile} ${statusOpenMobileBorderRadius?.bottom}${statusOpenBorderRadiusUnits?.Mobile} ${statusOpenMobileBorderRadius?.left}${statusOpenBorderRadiusUnits?.Mobile}`;

    const statusOpenDesktopBorderWidth = `${statusOpenDesktopBorder?.top}${statusOpenBorderUnits?.Desktop} ${statusOpenDesktopBorder?.right}${statusOpenBorderUnits?.Desktop} ${statusOpenDesktopBorder?.bottom}${statusOpenBorderUnits?.Desktop} ${statusOpenDesktopBorder?.left}${statusOpenBorderUnits?.Desktop}`;
	const statusOpenTabletBorderWidth = `${statusOpenTabletBorder?.top}${statusOpenBorderUnits?.Tablet} ${statusOpenTabletBorder?.right}${statusOpenBorderUnits?.Tablet} ${statusOpenTabletBorder?.bottom}${statusOpenBorderUnits?.Tablet} ${statusOpenTabletBorder?.left}${statusOpenBorderUnits?.Tablet}`;
	const statusOpenMobileBorderWidth = `${statusOpenMobileBorder?.top}${statusOpenBorderUnits?.Mobile} ${statusOpenMobileBorder?.right}${statusOpenBorderUnits?.Mobile} ${statusOpenMobileBorder?.bottom}${statusOpenBorderUnits?.Mobile} ${statusOpenMobileBorder?.left}${statusOpenBorderUnits?.Mobile}`;

    const statusCloseDesktopBorderRadiusWidth = `${statusCloseDesktopBorderRadius?.top}${statusCloseBorderRadiusUnits?.Desktop} ${statusCloseDesktopBorderRadius?.right}${statusCloseBorderRadiusUnits?.Desktop} ${statusCloseDesktopBorderRadius?.bottom}${statusCloseBorderRadiusUnits?.Desktop} ${statusCloseDesktopBorderRadius?.left}${statusCloseBorderRadiusUnits?.Desktop}`;
    const statusCloseTabletBorderRadiusWidth = `${statusCloseTabBorderRadius?.top}${statusCloseBorderRadiusUnits?.Tablet} ${statusCloseTabBorderRadius?.right}${statusCloseBorderRadiusUnits?.Tablet} ${statusCloseTabBorderRadius?.bottom}${statusCloseBorderRadiusUnits?.Tablet} ${statusCloseTabBorderRadius?.left}${statusCloseBorderRadiusUnits?.Tablet}`;
    const statusCloseMobileBorderRadiusWidth = `${statusCloseMobileBorderRadius?.top}${statusCloseBorderRadiusUnits?.Mobile} ${statusCloseMobileBorderRadius?.right}${statusCloseBorderRadiusUnits?.Mobile} ${statusCloseMobileBorderRadius?.bottom}${statusCloseBorderRadiusUnits?.Mobile} ${statusCloseMobileBorderRadius?.left}${statusCloseBorderRadiusUnits?.Mobile}`;

    const statusCloseDesktopBorderWidth = `${statusCloseDesktopBorder?.top}${statusCloseBorderUnits?.Desktop} ${statusCloseDesktopBorder?.right}${statusCloseBorderUnits?.Desktop} ${statusCloseDesktopBorder?.bottom}${statusCloseBorderUnits?.Desktop} ${statusCloseDesktopBorder?.left}${statusCloseBorderUnits?.Desktop}`;
	const statusCloseTabletBorderWidth = `${statusCloseTabletBorder?.top}${statusCloseBorderUnits?.Tablet} ${statusCloseTabletBorder?.right}${statusCloseBorderUnits?.Tablet} ${statusCloseTabletBorder?.bottom}${statusCloseBorderUnits?.Tablet} ${statusCloseTabletBorder?.left}${statusCloseBorderUnits?.Tablet}`;
	const statusCloseMobileBorderWidth = `${statusCloseMobileBorder?.top}${statusCloseBorderUnits?.Mobile} ${statusCloseMobileBorder?.right}${statusCloseBorderUnits?.Mobile} ${statusCloseMobileBorder?.bottom}${statusCloseBorderUnits?.Mobile} ${statusCloseMobileBorder?.left}${statusCloseBorderUnits?.Mobile}`;

    const timezoneDesktopPaddingWidth = `${timezoneDesktopPadding?.top}${timezonePaddingUnits?.Desktop} ${timezoneDesktopPadding?.right}${timezonePaddingUnits?.Desktop} ${timezoneDesktopPadding?.bottom}${timezonePaddingUnits?.Desktop} ${timezoneDesktopPadding?.left}${timezonePaddingUnits?.Desktop}`;
    const timezoneTabletPaddingWidth = `${timezoneTabPadding?.top}${timezonePaddingUnits?.Tablet} ${timezoneTabPadding?.right}${timezonePaddingUnits?.Tablet} ${timezoneTabPadding?.bottom}${timezonePaddingUnits?.Tablet} ${timezoneTabPadding?.left}${timezonePaddingUnits?.Tablet}`;
    const timezoneMobilePaddingWidth = `${timezoneMobilePadding?.top}${timezonePaddingUnits?.Mobile} ${timezoneMobilePadding?.right}${timezonePaddingUnits?.Mobile} ${timezoneMobilePadding?.bottom}${timezonePaddingUnits?.Mobile} ${timezoneMobilePadding?.left}${timezonePaddingUnits?.Mobile}`;

    const timezoneDesktopMarginWidth = `${timezoneDesktopMargin?.top}${timezoneMarginUnits?.Desktop} ${timezoneDesktopMargin?.right}${timezoneMarginUnits?.Desktop} ${timezoneDesktopMargin?.bottom}${timezoneMarginUnits?.Desktop} ${timezoneDesktopMargin?.left}${timezoneMarginUnits?.Desktop}`;
    const timezoneTabletMarginWidth = `${timezoneTabMargin?.top}${timezoneMarginUnits?.Tablet} ${timezoneTabMargin?.right}${timezoneMarginUnits?.Tablet} ${timezoneTabMargin?.bottom}${timezoneMarginUnits?.Tablet} ${timezoneTabMargin?.left}${timezoneMarginUnits?.Tablet}`;
    const timezoneMobileMarginWidth = `${timezoneMobileMargin?.top}${timezoneMarginUnits?.Mobile} ${timezoneMobileMargin?.right}${timezoneMarginUnits?.Mobile} ${timezoneMobileMargin?.bottom}${timezoneMarginUnits?.Mobile} ${timezoneMobileMargin?.left}${timezoneMarginUnits?.Mobile}`;

    const globalDesktopBorderWidth = `${timezoneGlobalBorderDesktop?.top}${timezoneGlobalBorderUnits?.Desktop} ${timezoneGlobalBorderDesktop?.right}${timezoneGlobalBorderUnits?.Desktop} ${timezoneGlobalBorderDesktop?.bottom}${timezoneGlobalBorderUnits?.Desktop} ${timezoneGlobalBorderDesktop?.left}${timezoneGlobalBorderUnits?.Desktop}`;
	const globalTabletBorderWidth = `${timezoneGlobalBorderTablet?.top}${timezoneGlobalBorderUnits?.Tablet} ${timezoneGlobalBorderTablet?.right}${timezoneGlobalBorderUnits?.Tablet} ${timezoneGlobalBorderTablet?.bottom}${timezoneGlobalBorderUnits?.Tablet} ${timezoneGlobalBorderTablet?.left}${timezoneGlobalBorderUnits?.Tablet}`;
	const globalMobileBorderWidth = `${timezoneGlobalBorderMobile?.top}${timezoneGlobalBorderUnits?.Mobile} ${timezoneGlobalBorderMobile?.right}${timezoneGlobalBorderUnits?.Mobile} ${timezoneGlobalBorderMobile?.bottom}${timezoneGlobalBorderUnits?.Mobile} ${timezoneGlobalBorderMobile?.left}${timezoneGlobalBorderUnits?.Mobile}`;

    const globalDesktopBorderRadiusWidth = `${timezoneGlobalBorderRadiusDesktop?.top}${timezoneGlobalBorderRadiusUnits?.Desktop} ${timezoneGlobalBorderRadiusDesktop?.right}${timezoneGlobalBorderRadiusUnits?.Desktop} ${timezoneGlobalBorderRadiusDesktop?.bottom}${timezoneGlobalBorderRadiusUnits?.Desktop} ${timezoneGlobalBorderRadiusDesktop?.left}${timezoneGlobalBorderRadiusUnits?.Desktop}`;
	const globalTabletBorderRadiusWidth = `${timezoneGlobalBorderRadiusTablet?.top}${timezoneGlobalBorderRadiusUnits?.Tablet} ${timezoneGlobalBorderRadiusTablet?.right}${timezoneGlobalBorderRadiusUnits?.Tablet} ${timezoneGlobalBorderRadiusTablet?.bottom}${timezoneGlobalBorderRadiusUnits?.Tablet} ${timezoneGlobalBorderRadiusTablet?.left}${timezoneGlobalBorderRadiusUnits?.Tablet}`;
	const globalMobileBorderRadiusWidth = `${timezoneGlobalBorderRadiusMobile?.top}${timezoneGlobalBorderRadiusUnits?.Mobile} ${timezoneGlobalBorderRadiusMobile?.right}${timezoneGlobalBorderRadiusUnits?.Mobile} ${timezoneGlobalBorderRadiusMobile?.bottom}${timezoneGlobalBorderRadiusUnits?.Mobile} ${timezoneGlobalBorderRadiusMobile?.left}${timezoneGlobalBorderRadiusUnits?.Mobile}`;

    /**
    * Get background normal styles
    */
    const getBackgroundNormalStyles = (device) => {
        const bgType = timezoneGlobalBgNormalBackgroundType;
        const bgColor = timezoneGlobalBgNormalClassicColor;
        const bgGradient = timezoneGlobalBgNormalGradientColor;
        const customGradient =timezoneGlobalBgNormalCustomGradientInputValue;
        const customGradientEnabled = timezoneGlobalBgNormalCustomGradientSwitcher;

        const bgImageUrl = timezoneGlobalBgNormalBackgroundImageUrl?.[device];
        const bgImagePosition = timezoneGlobalBgNormalBackgroundImagePosition?.[device];
        const bgAttachment = timezoneGlobalBgNormalBackgroundImageAttachment?.[device];
        const bgRepeat = timezoneGlobalBgNormalBackgroundImageRepeat?.[device];
        const bgSize = timezoneGlobalBgNormalBackgroundImageSize?.[device];  

        if (bgType === 'gradient') {
            return {
                background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
            };
        }

        let styles = { background: bgColor };

        if (bgType !== 'gradient' && bgImageUrl) {
            styles = {
                ...styles,
                'background-image': `url(${bgImageUrl})`,
                'background-position': bgImagePosition
                    ? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
                    : "50% 50%",
                'background-attachment': bgAttachment || undefined,
                'background-repeat': bgRepeat || undefined,
                'background-size': bgSize || undefined,
            };
        }

        return styles;
    };

    /**
     * Get background hover styles
     */
    const getBackgroundHoverStyles = (device) => {
        const bgType = timezoneGlobalBgHoverBackgroundType;
        const bgColor = timezoneGlobalBgHoverClassicColor;
        const bgGradient = timezoneGlobalBgHoverGradientColor;
        const customGradient = timezoneGlobalBgHoverCustomGradientInputValue;
        const customGradientEnabled = timezoneGlobalBgHoverCustomGradientSwitcher;

        const bgImageUrl = timezoneGlobalBgHoverBackgroundImageUrl?.[device];
        const bgImagePosition = timezoneGlobalBgHoverBackgroundImagePosition?.[device];
        const bgAttachment = timezoneGlobalBgHoverBackgroundImageAttachment?.[device];
        const bgRepeat = timezoneGlobalBgHoverBackgroundImageRepeat?.[device];
        const bgSize = timezoneGlobalBgHoverBackgroundImageSize?.[device];

        if (bgType === 'gradient') {
            return {
                background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
            };
        }

        let styles = { background: bgColor };

        if (bgType !== 'gradient' && bgImageUrl) {
            styles = {
                ...styles,
                'background-image': `url(${bgImageUrl})`,
                'background-position': bgImagePosition
                    ? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
                    : "50% 50%",
                'background-attachment': bgAttachment || undefined,
                'background-repeat': bgRepeat || undefined,
                'background-size': bgSize || undefined,
            };
        }

        return styles;
    };

    /**
     * Convert object to string
     */
    const backgroundStyleObjectToString = (styleObj) =>
        Object.entries(styleObj)
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ');


    const desktopBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Desktop'));
    const desktopBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Desktop'));
    const tabletBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Tablet'));
    const tabletBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Tablet'));
    const mobileBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Mobile'));
    const mobileBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Mobile'));

    /**
     * Convert object to string
    */
    const timezoneBlockStyle = `
        .${blockID}.fb-timezone-main-wrapper {
            ${timezonePositionType === 'default' ? `position: relative !important;` : ''}
            ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' ? `width: 100%;` : ''}
            ${timezonePositionType !== 'default' ? `position: ${timezonePositionType} !important;` : ''}
            ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneHZOrientationType === 'left' && timezoneHZLeftOffset?.Desktop ? `left: ${timezoneHZLeftOffset?.Desktop}${timezoneHZLeftOffsetUnits?.Desktop};` : ''} 
            ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneHZOrientationType === 'right' && timezoneHZRightOffset?.Desktop ? `right: ${timezoneHZRightOffset?.Desktop}${timezoneHZRightOffsetUnits?.Desktop};` : ''}
            ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneVROrientationType === 'top' && timezoneVRTopOffset?.Desktop ? `top: ${timezoneVRTopOffset?.Desktop}${timezoneVRTopOffsetUnits?.Desktop};` : ''}
            ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneVROrientationType === 'bottom' && timezoneVRBottomOffset?.Desktop ? `bottom: ${timezoneVRBottomOffset?.Desktop}${timezoneVRBottomOffsetUnits?.Desktop};` : ''}

            ${timezoneGlobalZIndex?.Desktop ? `z-index: ${timezoneGlobalZIndex?.Desktop};` : ''}
            ${timezoneOverflow !== 'default' ? `overflow: ${timezoneOverflow};` : ''}
        }
        
        .${blockID}.fb-timezone-main-wrapper .fb-timezone-container {
            gap: ${timezoneCardSpacing?.Desktop}${timezoneCardSpacingUnits?.Desktop};
            ${timezoneCardAlignment ? `justify-content: ${timezoneCardAlignment};` : ''}
            ${desktopBackgroundNormalStyles}
            ${timezoneDesktopPaddingWidth && timezoneDesktopPadding?.top ? `padding: ${timezoneDesktopPaddingWidth};` : ''}
            ${timezoneDesktopMarginWidth && timezoneDesktopMargin?.top ? `margin: ${timezoneDesktopMarginWidth};` : ''}
            ${timezoneGlobalBorder ? `border: ${timezoneGlobalBorder};` : ''}
            ${globalDesktopBorderWidth && timezoneGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && timezoneGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${timezoneGlobalBorderColor ? `border-color: ${timezoneGlobalBorderColor};` : ''}
            ${timezoneGlobalBoxShadowCssValue ? `box-shadow: ${timezoneGlobalBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID}.fb-timezone-main-wrapper .fb-timezone-container:hover {
            ${desktopBackgroundHoverStyles}
            ${timezoneGlobalBorderHoverColor ? `border-color: ${timezoneGlobalBorderHoverColor};` : ''}
            ${timezoneGlobalBoxShadowHoverCssValue ? `box-shadow: ${timezoneGlobalBoxShadowHoverCssValue};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone{
            position: relative;
            display: flex;
            align-items: center;
            gap: ${timezoneLocationTextSpacing?.Desktop}${timezoneLocationTextSpacingUnits?.Desktop};
            
            ${ locationTimezoneBgColorType === "gradient" ? `background: ${ locationTimezoneBgCustomGradientColorSwitcher && locationTimezoneBgCustomGradientColor ? locationTimezoneBgCustomGradientColor : locationTimezoneBgGradientColor };` : locationTimezoneBgColor ?`background: ${locationTimezoneBgColor};` : '' }
            
            ${locationTimezoneBorder ? `border: ${locationTimezoneBorder};` : ''}
            ${locationTimezoneDesktopBorderWidth && locationTimezoneDesktopBorder?.top ? `border-width: ${locationTimezoneDesktopBorderWidth};` : ''}
            ${locationTimezoneDesktopBorderRadiusWidth && locationTimezoneDesktopBorderRadius?.top ? `border-radius: ${locationTimezoneDesktopBorderRadiusWidth};` : ''}
            ${locationTimezoneBorderColor ? `border-color: ${locationTimezoneBorderColor};` : ''}
            ${locationTimezoneBoxShadowCssValue ? `box-shadow: ${locationTimezoneBoxShadowCssValue};` : ''}

            ${locationTimezoneDesktopPaddingWidth && locationTimezoneDesktopPadding?.top ? `padding: ${locationTimezoneDesktopPaddingWidth};` : ''}
            ${locationTimezoneDesktopMarginWidth && locationTimezoneDesktopMargin?.top ? `margin: ${locationTimezoneDesktopMarginWidth};` : ''}

            transition: all .3s ease-in-out;
        }
        .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover{
            ${ locationTimezoneBgHoverColorType === "gradient" ? `background: ${ locationTimezoneBgHoverCustomGradientColorSwitcher && locationTimezoneBgHoverCustomGradientColor ? locationTimezoneBgHoverCustomGradientColor : locationTimezoneBgHoverGradientColor };` : locationTimezoneBgHoverColor ? `background: ${locationTimezoneBgHoverColor};` : '' }

            ${locationTimezoneBorderHoverColor ? `border-color: ${locationTimezoneBorderHoverColor};` : ''}

            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-location-name{
            ${timezoneLocationTextGlobalTypoSwitcher?.fontFamily === true && timezoneLocationTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneLocationTextGlobalTypographyData?.fontFamily};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.fontSize === true && timezoneLocationTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneLocationTextGlobalTypographyData?.fontSize};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.fontWeight === true && timezoneLocationTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneLocationTextGlobalTypographyData?.fontWeight};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.fontStyle === true && timezoneLocationTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneLocationTextGlobalTypographyData?.fontStyle};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.textTransform === true && timezoneLocationTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneLocationTextGlobalTypographyData?.textTransform};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.textDecoration === true && timezoneLocationTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneLocationTextGlobalTypographyData?.textDecoration};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.letterSpacing === true && timezoneLocationTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneLocationTextGlobalTypographyData?.letterSpacing};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.lineHeight === true && timezoneLocationTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneLocationTextGlobalTypographyData?.lineHeight};` : ''}

            ${timezoneLocationTextGlobalTypoSwitcher?.fontFamily === false && timezoneLocationTextFontFamily && timezoneLocationTextFontFamily !== 'Default' ? `font-family: ${timezoneLocationTextFontFamily};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.fontSize === false && timezoneLocationTextFontSize?.Desktop && timezoneLocationTextFontSizeUnits?.Desktop ? `font-size: ${timezoneLocationTextFontSize?.Desktop}${timezoneLocationTextFontSizeUnits?.Desktop};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.fontWeight === false && timezoneLocationTextFontWeight ? `font-weight: ${timezoneLocationTextFontWeight};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.fontStyle === false && timezoneLocationTextFontStyle ? `font-style: ${timezoneLocationTextFontStyle};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.textTransform === false && timezoneLocationTextTransform ? `text-transform: ${timezoneLocationTextTransform};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.textDecoration === false && timezoneLocationTextDecoration ? `text-decoration: ${timezoneLocationTextDecoration};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.letterSpacing === false && timezoneLocationTextLetterSpacing?.Desktop && timezoneLocationTextLetterSpacingUnits?.Desktop ? `letter-spacing: ${timezoneLocationTextLetterSpacing?.Desktop}${timezoneLocationTextLetterSpacingUnits?.Desktop};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.lineHeight === false && timezoneLocationTextLineHeight?.Desktop && timezoneLocationTextLineHeightUnits?.Desktop ? `line-height: ${timezoneLocationTextLineHeight?.Desktop}${timezoneLocationTextLineHeightUnits?.Desktop};` : ''}

            ${locationNameTextColor ? `color: ${locationNameTextColor};` : ''}

            ${locationNameTextColorType === 'gradient' ? `
                background: ${locationNameTextCustomGradientColorSwitcher && locationNameTextCustomGradientColor ? locationNameTextCustomGradientColor : locationNameTextGradientColor};
                ${locationNameTextCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${locationNameTextGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}

            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-location-name{

            ${locationNameTextHoverColor ? `color: ${locationNameTextHoverColor};` : ''}
            ${locationNameTextHoverColorType === 'gradient' ? `
                background: ${locationNameTextHoverCustomGradientColorSwitcher && locationNameTextHoverCustomGradientColor ? locationNameTextHoverCustomGradientColor : locationNameTextHoverGradientColor};
                ${locationNameTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${locationNameTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}
            
            transition: all .3s ease-in-out;
        }
        
        .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-timezone-separator {
            font-size: ${separatorSize?.Desktop}${separatorFontUnits?.Desktop};
            line-height: 100%;
            ${separatorColor ? `color: ${separatorColor};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-timezone-separator {
            ${separatorHoverColor ? `color: ${separatorHoverColor};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-current-time {
            ${timezoneTimeTextGlobalTypoSwitcher?.fontFamily === true && timezoneTimeTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneTimeTextGlobalTypographyData?.fontFamily};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.fontSize === true && timezoneTimeTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneTimeTextGlobalTypographyData?.fontSize};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.fontWeight === true && timezoneTimeTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneTimeTextGlobalTypographyData?.fontWeight};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.fontStyle === true && timezoneTimeTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneTimeTextGlobalTypographyData?.fontStyle};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.textTransform === true && timezoneTimeTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneTimeTextGlobalTypographyData?.textTransform};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.textDecoration === true && timezoneTimeTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneTimeTextGlobalTypographyData?.textDecoration};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.letterSpacing === true && timezoneTimeTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneTimeTextGlobalTypographyData?.letterSpacing};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.lineHeight === true && timezoneTimeTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneTimeTextGlobalTypographyData?.lineHeight};` : ''}

            ${timezoneTimeTextGlobalTypoSwitcher?.fontFamily === false && timezoneTimeTextFontFamily && timezoneTimeTextFontFamily !== 'Default' ? `font-family: ${timezoneTimeTextFontFamily};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.fontSize === false && timezoneTimeTextFontSize?.Desktop && timezoneTimeTextFontSizeUnits?.Desktop ? `font-size: ${timezoneTimeTextFontSize?.Desktop}${timezoneTimeTextFontSizeUnits?.Desktop};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.fontWeight === false && timezoneTimeTextFontWeight ? `font-weight: ${timezoneTimeTextFontWeight};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.fontStyle === false && timezoneTimeTextFontStyle ? `font-style: ${timezoneTimeTextFontStyle};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.textTransform === false && timezoneTimeTextTransform ? `text-transform: ${timezoneTimeTextTransform};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.textDecoration === false && timezoneTimeTextDecoration ? `text-decoration: ${timezoneTimeTextDecoration};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.letterSpacing === false && timezoneTimeTextLetterSpacing?.Desktop && timezoneTimeTextLetterSpacingUnits?.Desktop ? `letter-spacing: ${timezoneTimeTextLetterSpacing?.Desktop}${timezoneTimeTextLetterSpacingUnits?.Desktop};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.lineHeight === false && timezoneTimeTextLineHeight?.Desktop && timezoneTimeTextLineHeightUnits?.Desktop ? `line-height: ${timezoneTimeTextLineHeight?.Desktop}${timezoneTimeTextLineHeightUnits?.Desktop};` : ''}

            ${timezoneTimeTextColor ? `color: ${timezoneTimeTextColor};` : ''}

            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-current-time{
            ${timezoneTimeTextHoverColor ? `color: ${timezoneTimeTextHoverColor};` : ''}

            ${timezoneTimeTextHoverColorType === 'gradient' ? `
                background: ${timezoneTimeTextHoverCustomGradientColorSwitcher && timezoneTimeTextHoverCustomGradientColor ? timezoneTimeTextHoverCustomGradientColor : timezoneTimeTextHoverGradientColor};
                ${timezoneTimeTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${timezoneTimeTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}
            
            transition: all .3s ease-in-out;
        }
        
        .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-timezone-offset {
            ${timezoneTextGlobalTypoSwitcher?.fontFamily === true && timezoneTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneTextGlobalTypographyData?.fontFamily};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.fontSize === true && timezoneTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneTextGlobalTypographyData?.fontSize};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.fontWeight === true && timezoneTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneTextGlobalTypographyData?.fontWeight};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.fontStyle === true && timezoneTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneTextGlobalTypographyData?.fontStyle};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.textTransform === true && timezoneTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneTextGlobalTypographyData?.textTransform};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.textDecoration === true && timezoneTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneTextGlobalTypographyData?.textDecoration};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.letterSpacing === true && timezoneTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneTextGlobalTypographyData?.letterSpacing};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.lineHeight === true && timezoneTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneTextGlobalTypographyData?.lineHeight};` : ''}

            ${timezoneTextGlobalTypoSwitcher?.fontFamily === false && timezoneTextFontFamily && timezoneTextFontFamily !== 'Default' ? `font-family: ${timezoneTextFontFamily};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.fontSize === false && timezoneTextFontSize?.Desktop && timezoneTextFontSizeUnits?.Desktop ? `font-size: ${timezoneTextFontSize?.Desktop}${timezoneTextFontSizeUnits?.Desktop};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.fontWeight === false && timezoneTextFontWeight ? `font-weight: ${timezoneTextFontWeight};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.fontStyle === false && timezoneTextFontStyle ? `font-style: ${timezoneTextFontStyle};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.textTransform === false && timezoneTextTransform ? `text-transform: ${timezoneTextTransform};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.textDecoration === false && timezoneTextDecoration ? `text-decoration: ${timezoneTextDecoration};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.letterSpacing === false && timezoneTextLetterSpacing?.Desktop && timezoneTextLetterSpacingUnits?.Desktop ? `letter-spacing: ${timezoneTextLetterSpacing?.Desktop}${timezoneTextLetterSpacingUnits?.Desktop};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.lineHeight === false && timezoneTextLineHeight?.Desktop && timezoneTextLineHeightUnits?.Desktop ? `line-height: ${timezoneTextLineHeight?.Desktop}${timezoneTextLineHeightUnits?.Desktop};` : ''}

            ${timezoneTextColor ? `color: ${timezoneTextColor};` : ''}

            transition: all .3s ease-in-out;
        }
        
        .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-timezone-offset{
            ${timezoneTextHoverColor ? `color: ${timezoneTextHoverColor};` : ''}
            ${timezoneTextHoverColorType === 'gradient' ? `
                background: ${timezoneTextHoverCustomGradientColorSwitcher && timezoneTextHoverCustomGradientColor ? timezoneTextHoverCustomGradientColor : timezoneTextHoverGradientColor};
                ${timezoneTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${timezoneTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box {
            overflow: hidden;
            ${infoBoxBorder ? `border: ${infoBoxBorder};` : ''}
            ${infoBoxDesktopBorderWidth && infoBoxDesktopBorder?.top ? `border-width: ${infoBoxDesktopBorderWidth};` : ''}
            ${infoBoxDesktopBorderRadiusWidth && infoBoxDesktopBorderRadius?.top ? `border-radius: ${infoBoxDesktopBorderRadiusWidth};` : ''}
            ${infoBoxDesktopPaddingWidth && infoBoxDesktopPadding?.top ? `padding: ${infoBoxDesktopPaddingWidth};` : ''}
        }

        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open {
            ${ infoBoxBgColorType === "gradient" ? `background: ${ infoBoxBgCustomGradientColorSwitcher && infoBoxBgCustomGradientColor ? infoBoxBgCustomGradientColor : infoBoxBgGradientColor };` : infoBoxBgColor ?`background: ${infoBoxBgColor};` : '' }
            ${infoBoxBorderColor ? `border-color: ${infoBoxBorderColor};` : ''}
            ${infoBoxBoxShadowCssValue ? `box-shadow: ${infoBoxBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open:hover{
            ${ infoBoxBgHoverColorType === "gradient" ? `background: ${ infoBoxBgHoverCustomGradientColorSwitcher && infoBoxBgHoverCustomGradientColor ? infoBoxBgHoverCustomGradientColor : infoBoxBgHoverGradientColor };` : infoBoxBgHoverColor ? `background: ${infoBoxBgHoverColor};` : '' }

            ${infoBoxBorderHoverColor ? `border-color: ${infoBoxBorderHoverColor};` : ''}

            transition: all .3s ease-in-out;
        }
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed {
            ${ infoBoxOffStatusBgColorType === "gradient" ? `background: ${ infoBoxOffStatusBgCustomGradientColorSwitcher && infoBoxOffStatusBgCustomGradientColor ? infoBoxOffStatusBgCustomGradientColor : infoBoxOffStatusBgGradientColor };` : infoBoxOffStatusBgColor ?`background: ${infoBoxOffStatusBgColor};` : '' }
            ${infoBoxOffStatusBorderColor ? `border-color: ${infoBoxOffStatusBorderColor};` : ''}
            ${infoBoxOffStatusBoxShadowCssValue ? `box-shadow: ${infoBoxOffStatusBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed:hover{
            ${ infoBoxOffStatusBgHoverColorType === "gradient" ? `background: ${ infoBoxOffStatusBgHoverCustomGradientColorSwitcher && infoBoxOffStatusBgHoverCustomGradientColor ? infoBoxOffStatusBgHoverCustomGradientColor : infoBoxOffStatusBgHoverGradientColor };` : infoBoxOffStatusBgHoverColor ? `background: ${infoBoxOffStatusBgHoverColor};` : '' }

            ${infoBoxOffStatusBorderHoverColor ? `border-color: ${infoBoxOffStatusBorderHoverColor};` : ''}

            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-open .fb-timezone-status, 
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-weekend .fb-timezone-status, 
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-holiday .fb-timezone-status, 
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-closed .fb-timezone-status {
            ${statusTextGlobalTypoSwitcher?.fontFamily === true && statusTextGlobalTypographyData?.fontFamily ? `font-family: ${statusTextGlobalTypographyData?.fontFamily};` : ''}
            ${statusTextGlobalTypoSwitcher?.fontSize === true && statusTextGlobalTypographyData?.fontSize ? `font-size: ${statusTextGlobalTypographyData?.fontSize};` : ''}
            ${statusTextGlobalTypoSwitcher?.fontWeight === true && statusTextGlobalTypographyData?.fontWeight ? `font-weight: ${statusTextGlobalTypographyData?.fontWeight};` : ''}
            ${statusTextGlobalTypoSwitcher?.fontStyle === true && statusTextGlobalTypographyData?.fontStyle ? `font-style: ${statusTextGlobalTypographyData?.fontStyle};` : ''}
            ${statusTextGlobalTypoSwitcher?.textTransform === true && statusTextGlobalTypographyData?.textTransform ? `text-transform: ${statusTextGlobalTypographyData?.textTransform};` : ''}
            ${statusTextGlobalTypoSwitcher?.textDecoration === true && statusTextGlobalTypographyData?.textDecoration ? `text-decoration: ${statusTextGlobalTypographyData?.textDecoration};` : ''}
            ${statusTextGlobalTypoSwitcher?.letterSpacing === true && statusTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${statusTextGlobalTypographyData?.letterSpacing};` : ''}
            ${statusTextGlobalTypoSwitcher?.lineHeight === true && statusTextGlobalTypographyData?.lineHeight ? `line-height: ${statusTextGlobalTypographyData?.lineHeight};` : ''}

            ${statusTextGlobalTypoSwitcher?.fontFamily === false && statusTextFontFamily && statusTextFontFamily !== 'Default' ? `font-family: ${statusTextFontFamily};` : ''}
            ${statusTextGlobalTypoSwitcher?.fontSize === false && statusTextFontSize?.Desktop && statusTextFontSizeUnits?.Desktop ? `font-size: ${statusTextFontSize?.Desktop}${statusTextFontSizeUnits?.Desktop};` : ''}
            ${statusTextGlobalTypoSwitcher?.fontWeight === false && statusTextFontWeight ? `font-weight: ${statusTextFontWeight};` : ''}
            ${statusTextGlobalTypoSwitcher?.fontStyle === false && statusTextFontStyle ? `font-style: ${statusTextFontStyle};` : ''}
            ${statusTextGlobalTypoSwitcher?.textTransform === false && statusTextTransform ? `text-transform: ${statusTextTransform};` : ''}
            ${statusTextGlobalTypoSwitcher?.textDecoration === false && statusTextDecoration ? `text-decoration: ${statusTextDecoration};` : ''}
            ${statusTextGlobalTypoSwitcher?.letterSpacing === false && statusTextLetterSpacing?.Desktop && statusTextLetterSpacingUnits?.Desktop ? `letter-spacing: ${statusTextLetterSpacing?.Desktop}${statusTextLetterSpacingUnits?.Desktop};` : ''}
            ${statusTextGlobalTypoSwitcher?.lineHeight === false && statusTextLineHeight?.Desktop && statusTextLineHeightUnits?.Desktop ? `line-height: ${statusTextLineHeight?.Desktop}${statusTextLineHeightUnits?.Desktop};` : ''}

            ${statusDesktopPaddingWidth && statusDesktopPadding?.top ? `padding: ${statusDesktopPaddingWidth};` : ''}

            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-open .fb-timezone-status{
            ${statusOpenColor ? `color: ${statusOpenColor};` : ''}
            ${statusOpenBgColor ? `background-color: ${statusOpenBgColor};` : ''}
            ${statusOpenBorder ? `border: ${statusOpenBorder};` : ''}
            ${statusOpenDesktopBorderWidth && statusOpenDesktopBorder?.top ? `border-width: ${statusOpenDesktopBorderWidth};` : ''}
            ${statusOpenDesktopBorderRadiusWidth && statusOpenDesktopBorderRadius?.top ? `border-radius: ${statusOpenDesktopBorderRadiusWidth};` : ''}
            ${statusOpenBorderColor ? `border-color: ${statusOpenBorderColor};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-open .fb-timezone-status:hover{
            ${statusOpenHoverColor ? `color: ${statusOpenHoverColor};` : ''}
            ${statusOpenHoverBgColor ? `background-color: ${statusOpenHoverBgColor};` : ''}
            ${statusOpenBorderHoverColor ? `border-color: ${statusOpenBorderHoverColor};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-closed .fb-timezone-status,
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-weekend .fb-timezone-status,
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-holiday .fb-timezone-status{
            ${statusCloseColor ? `color: ${statusCloseColor};` : ''}
            ${statusCloseBgColor ? `background-color: ${statusCloseBgColor};` : ''}
            ${statusCloseBorder ? `border: ${statusCloseBorder};` : ''}
            ${statusCloseDesktopBorderWidth && statusCloseDesktopBorder?.top ? `border-width: ${statusCloseDesktopBorderWidth};` : ''}
            ${statusCloseDesktopBorderRadiusWidth && statusCloseDesktopBorderRadius?.top ? `border-radius: ${statusCloseDesktopBorderRadiusWidth};` : ''}
            ${statusCloseBorderColor ? `border-color: ${statusCloseBorderColor};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-closed .fb-timezone-status:hover,
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-weekend .fb-timezone-status:hover,
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-holiday .fb-timezone-status:hover{
            ${statusCloseHoverColor ? `color: ${statusCloseHoverColor};` : ''}
            ${statusCloseHoverBgColor ? `background-color: ${statusCloseHoverBgColor};` : ''}
            ${statusCloseBorderHoverColor ? `border-color: ${statusCloseBorderHoverColor};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-timezone-status-info .fb-timezone-info-noted{
            ${noticeTextGlobalTypoSwitcher?.fontFamily === true && noticeTextGlobalTypographyData?.fontFamily ? `font-family: ${noticeTextGlobalTypographyData?.fontFamily};` : ''}
            ${noticeTextGlobalTypoSwitcher?.fontSize === true && noticeTextGlobalTypographyData?.fontSize ? `font-size: ${noticeTextGlobalTypographyData?.fontSize};` : ''}
            ${noticeTextGlobalTypoSwitcher?.fontWeight === true && noticeTextGlobalTypographyData?.fontWeight ? `font-weight: ${noticeTextGlobalTypographyData?.fontWeight};` : ''}
            ${noticeTextGlobalTypoSwitcher?.fontStyle === true && noticeTextGlobalTypographyData?.fontStyle ? `font-style: ${noticeTextGlobalTypographyData?.fontStyle};` : ''}
            ${noticeTextGlobalTypoSwitcher?.textTransform === true && noticeTextGlobalTypographyData?.textTransform ? `text-transform: ${noticeTextGlobalTypographyData?.textTransform};` : ''}
            ${noticeTextGlobalTypoSwitcher?.textDecoration === true && noticeTextGlobalTypographyData?.textDecoration ? `text-decoration: ${noticeTextGlobalTypographyData?.textDecoration};` : ''}
            ${noticeTextGlobalTypoSwitcher?.letterSpacing === true && noticeTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${noticeTextGlobalTypographyData?.letterSpacing};` : ''}
            ${noticeTextGlobalTypoSwitcher?.lineHeight === true && noticeTextGlobalTypographyData?.lineHeight ? `line-height: ${noticeTextGlobalTypographyData?.lineHeight};` : ''}

            ${noticeTextGlobalTypoSwitcher?.fontFamily === false && noticeTextFontFamily && noticeTextFontFamily !== 'Default' ? `font-family: ${noticeTextFontFamily};` : ''}
            ${noticeTextGlobalTypoSwitcher?.fontSize === false && noticeTextFontSize?.Desktop && noticeTextFontSizeUnits?.Desktop ? `font-size: ${noticeTextFontSize?.Desktop}${noticeTextFontSizeUnits?.Desktop};` : ''}
            ${noticeTextGlobalTypoSwitcher?.fontWeight === false && noticeTextFontWeight ? `font-weight: ${noticeTextFontWeight};` : ''}
            ${noticeTextGlobalTypoSwitcher?.fontStyle === false && noticeTextFontStyle ? `font-style: ${noticeTextFontStyle};` : ''}
            ${noticeTextGlobalTypoSwitcher?.textTransform === false && noticeTextTransform ? `text-transform: ${noticeTextTransform};` : ''}
            ${noticeTextGlobalTypoSwitcher?.textDecoration === false && noticeTextDecoration ? `text-decoration: ${noticeTextDecoration};` : ''}
            ${noticeTextGlobalTypoSwitcher?.letterSpacing === false && noticeTextLetterSpacing?.Desktop && noticeTextLetterSpacingUnits?.Desktop ? `letter-spacing: ${noticeTextLetterSpacing?.Desktop}${noticeTextLetterSpacingUnits?.Desktop};` : ''}
            ${noticeTextGlobalTypoSwitcher?.lineHeight === false && noticeTextLineHeight?.Desktop && noticeTextLineHeightUnits?.Desktop ? `line-height: ${noticeTextLineHeight?.Desktop}${noticeTextLineHeightUnits?.Desktop};` : ''}
            
            ${infoBoxDesktopMarginWidth && infoBoxDesktopMargin?.top ? `margin: ${infoBoxDesktopMarginWidth};` : ''}

            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open .fb-timezone-status-info .fb-timezone-info-noted{
            ${noticeTextColor ? `color: ${noticeTextColor};` : ''}
        }
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open .fb-timezone-status-info .fb-timezone-info-noted:hover{
            ${noticeTextHoverColor ? `color: ${noticeTextHoverColor};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed .fb-timezone-status-info .fb-timezone-info-noted,
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.holiday .fb-timezone-status-info .fb-timezone-info-noted,
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.weekend .fb-timezone-status-info .fb-timezone-info-noted{
            ${statusOffNoticeTextColor ? `color: ${statusOffNoticeTextColor};` : ''}
        }
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed .fb-timezone-status-info .fb-timezone-info-noted:hover,
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.holiday .fb-timezone-status-info .fb-timezone-info-noted:hover,
        .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.weekend .fb-timezone-status-info .fb-timezone-info-noted:hover{
            ${statusOffNoticeTextHoverColor ? `color: ${statusOffNoticeTextHoverColor};` : ''}
            transition: all .3s ease-in-out;
        }

        @media only screen and (max-width: 1024px) {
            .${blockID}.fb-timezone-main-wrapper {
                ${timezonePositionType === 'default' ? `position: relative !important;` : ''}
                ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' ? `width: 100%;` : ''}
                ${timezonePositionType !== 'default' ? `position: ${timezonePositionType} !important;` : ''}
                ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneHZOrientationType === 'left' && timezoneHZLeftOffset?.Tablet ? `left: ${timezoneHZLeftOffset?.Tablet}${timezoneHZLeftOffsetUnits?.Tablet};` : ''} 
                ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneHZOrientationType === 'right' && timezoneHZRightOffset?.Tablet ? `right: ${timezoneHZRightOffset?.Tablet}${timezoneHZRightOffsetUnits?.Tablet};` : ''}
                ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneVROrientationType === 'top' && timezoneVRTopOffset?.Tablet ? `top: ${timezoneVRTopOffset?.Tablet}${timezoneVRTopOffsetUnits?.Tablet};` : ''}
                ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneVROrientationType === 'bottom' && timezoneVRBottomOffset?.Tablet ? `bottom: ${timezoneVRBottomOffset?.Tablet}${timezoneVRBottomOffsetUnits?.Tablet};` : ''}

                ${timezoneGlobalZIndex?.Tablet ? `z-index: ${timezoneGlobalZIndex?.Tablet};` : ''}
                ${timezoneOverflow !== 'default' ? `overflow: ${timezoneOverflow};` : ''}
            }
            
            .${blockID}.fb-timezone-main-wrapper .fb-timezone-container {
                gap: ${timezoneCardSpacing?.Tablet}${timezoneCardSpacingUnits?.Tablet};
                ${timezoneCardAlignment ? `justify-content: ${timezoneCardAlignment};` : ''}
                ${tabletBackgroundNormalStyles}
                ${timezoneTabletPaddingWidth && timezoneTabPadding?.top ? `padding: ${timezoneTabletPaddingWidth};` : ''}
                ${timezoneTabletMarginWidth && timezoneTabMargin?.top ? `margin: ${timezoneTabletMarginWidth};` : ''}
                ${timezoneGlobalBorder ? `border: ${timezoneGlobalBorder};` : ''}
                ${globalTabletBorderWidth && timezoneGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && timezoneGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
                ${timezoneGlobalBorderColor ? `border-color: ${timezoneGlobalBorderColor};` : ''}
                ${timezoneGlobalBoxShadowCssValue ? `box-shadow: ${timezoneGlobalBoxShadowCssValue};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID}.fb-timezone-main-wrapper .fb-timezone-container:hover {
                ${tabletBackgroundHoverStyles}
                ${timezoneGlobalBorderHoverColor ? `border-color: ${timezoneGlobalBorderHoverColor};` : ''}
                ${timezoneGlobalBoxShadowHoverCssValue ? `box-shadow: ${timezoneGlobalBoxShadowHoverCssValue};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone{
                position: relative;
                display: flex;
                align-items: center;
                gap: ${timezoneLocationTextSpacing?.Tablet}${timezoneLocationTextSpacingUnits?.Tablet};
                
                ${ locationTimezoneBgColorType === "gradient" ? `background: ${ locationTimezoneBgCustomGradientColorSwitcher && locationTimezoneBgCustomGradientColor ? locationTimezoneBgCustomGradientColor : locationTimezoneBgGradientColor };` : locationTimezoneBgColor ?`background: ${locationTimezoneBgColor};` : '' }
                
                ${locationTimezoneBorder ? `border: ${locationTimezoneBorder};` : ''}
                ${locationTimezoneTabletBorderWidth && locationTimezoneTabletBorder?.top ? `border-width: ${locationTimezoneTabletBorderWidth};` : ''}
                ${locationTimezoneTabletBorderRadiusWidth && locationTimezoneTabBorderRadius?.top ? `border-radius: ${locationTimezoneTabletBorderRadiusWidth};` : ''}
                ${locationTimezoneBorderColor ? `border-color: ${locationTimezoneBorderColor};` : ''}
                ${locationTimezoneBoxShadowCssValue ? `box-shadow: ${locationTimezoneBoxShadowCssValue};` : ''}

                ${locationTimezoneTabletPaddingWidth && locationTimezoneTabPadding?.top ? `padding: ${locationTimezoneTabletPaddingWidth};` : ''}
                ${locationTimezoneTabletMarginWidth && locationTimezoneTabMargin?.top ? `margin: ${locationTimezoneTabletMarginWidth};` : ''}

                transition: all .3s ease-in-out;
            }
            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover{
                ${ locationTimezoneBgHoverColorType === "gradient" ? `background: ${ locationTimezoneBgHoverCustomGradientColorSwitcher && locationTimezoneBgHoverCustomGradientColor ? locationTimezoneBgHoverCustomGradientColor : locationTimezoneBgHoverGradientColor };` : locationTimezoneBgHoverColor ? `background: ${locationTimezoneBgHoverColor};` : '' }

                ${locationTimezoneBorderHoverColor ? `border-color: ${locationTimezoneBorderHoverColor};` : ''}

                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-location-name{
                ${timezoneLocationTextGlobalTypoSwitcher?.fontFamily === true && timezoneLocationTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneLocationTextGlobalTypographyData?.fontFamily};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.fontSize === true && timezoneLocationTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneLocationTextGlobalTypographyData?.fontSize};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.fontWeight === true && timezoneLocationTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneLocationTextGlobalTypographyData?.fontWeight};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.fontStyle === true && timezoneLocationTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneLocationTextGlobalTypographyData?.fontStyle};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.textTransform === true && timezoneLocationTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneLocationTextGlobalTypographyData?.textTransform};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.textDecoration === true && timezoneLocationTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneLocationTextGlobalTypographyData?.textDecoration};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.letterSpacing === true && timezoneLocationTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneLocationTextGlobalTypographyData?.letterSpacing};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.lineHeight === true && timezoneLocationTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneLocationTextGlobalTypographyData?.lineHeight};` : ''}

                ${timezoneLocationTextGlobalTypoSwitcher?.fontFamily === false && timezoneLocationTextFontFamily && timezoneLocationTextFontFamily !== 'Default' ? `font-family: ${timezoneLocationTextFontFamily};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.fontSize === false && timezoneLocationTextFontSize?.Tablet && timezoneLocationTextFontSizeUnits?.Tablet ? `font-size: ${timezoneLocationTextFontSize?.Tablet}${timezoneLocationTextFontSizeUnits?.Tablet};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.fontWeight === false && timezoneLocationTextFontWeight ? `font-weight: ${timezoneLocationTextFontWeight};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.fontStyle === false && timezoneLocationTextFontStyle ? `font-style: ${timezoneLocationTextFontStyle};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.textTransform === false && timezoneLocationTextTransform ? `text-transform: ${timezoneLocationTextTransform};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.textDecoration === false && timezoneLocationTextDecoration ? `text-decoration: ${timezoneLocationTextDecoration};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.letterSpacing === false && timezoneLocationTextLetterSpacing?.Tablet && timezoneLocationTextLetterSpacingUnits?.Tablet ? `letter-spacing: ${timezoneLocationTextLetterSpacing?.Tablet}${timezoneLocationTextLetterSpacingUnits?.Tablet};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.lineHeight === false && timezoneLocationTextLineHeight?.Tablet && timezoneLocationTextLineHeightUnits?.Tablet ? `line-height: ${timezoneLocationTextLineHeight?.Tablet}${timezoneLocationTextLineHeightUnits?.Tablet};` : ''}

                ${locationNameTextColor ? `color: ${locationNameTextColor};` : ''}

                ${locationNameTextColorType === 'gradient' ? `
                    background: ${locationNameTextCustomGradientColorSwitcher && locationNameTextCustomGradientColor ? locationNameTextCustomGradientColor : locationNameTextGradientColor};
                    ${locationNameTextCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                    ${locationNameTextGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ` : ''}

                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-location-name{

                ${locationNameTextHoverColor ? `color: ${locationNameTextHoverColor};` : ''}
                ${locationNameTextHoverColorType === 'gradient' ? `
                    background: ${locationNameTextHoverCustomGradientColorSwitcher && locationNameTextHoverCustomGradientColor ? locationNameTextHoverCustomGradientColor : locationNameTextHoverGradientColor};
                    ${locationNameTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                    ${locationNameTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ` : ''}
                
                transition: all .3s ease-in-out;
            }
            
            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-timezone-separator {
                font-size: ${separatorSize?.Tablet}${separatorFontUnits?.Tablet};
                line-height: 100%;
                ${separatorColor ? `color: ${separatorColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-timezone-separator {
                ${separatorHoverColor ? `color: ${separatorHoverColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-current-time {
                ${timezoneTimeTextGlobalTypoSwitcher?.fontFamily === true && timezoneTimeTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneTimeTextGlobalTypographyData?.fontFamily};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.fontSize === true && timezoneTimeTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneTimeTextGlobalTypographyData?.fontSize};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.fontWeight === true && timezoneTimeTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneTimeTextGlobalTypographyData?.fontWeight};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.fontStyle === true && timezoneTimeTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneTimeTextGlobalTypographyData?.fontStyle};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.textTransform === true && timezoneTimeTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneTimeTextGlobalTypographyData?.textTransform};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.textDecoration === true && timezoneTimeTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneTimeTextGlobalTypographyData?.textDecoration};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.letterSpacing === true && timezoneTimeTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneTimeTextGlobalTypographyData?.letterSpacing};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.lineHeight === true && timezoneTimeTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneTimeTextGlobalTypographyData?.lineHeight};` : ''}

                ${timezoneTimeTextGlobalTypoSwitcher?.fontFamily === false && timezoneTimeTextFontFamily && timezoneTimeTextFontFamily !== 'Default' ? `font-family: ${timezoneTimeTextFontFamily};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.fontSize === false && timezoneTimeTextFontSize?.Tablet && timezoneTimeTextFontSizeUnits?.Tablet ? `font-size: ${timezoneTimeTextFontSize?.Tablet}${timezoneTimeTextFontSizeUnits?.Tablet};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.fontWeight === false && timezoneTimeTextFontWeight ? `font-weight: ${timezoneTimeTextFontWeight};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.fontStyle === false && timezoneTimeTextFontStyle ? `font-style: ${timezoneTimeTextFontStyle};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.textTransform === false && timezoneTimeTextTransform ? `text-transform: ${timezoneTimeTextTransform};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.textDecoration === false && timezoneTimeTextDecoration ? `text-decoration: ${timezoneTimeTextDecoration};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.letterSpacing === false && timezoneTimeTextLetterSpacing?.Tablet && timezoneTimeTextLetterSpacingUnits?.Tablet ? `letter-spacing: ${timezoneTimeTextLetterSpacing?.Tablet}${timezoneTimeTextLetterSpacingUnits?.Tablet};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.lineHeight === false && timezoneTimeTextLineHeight?.Tablet && timezoneTimeTextLineHeightUnits?.Tablet ? `line-height: ${timezoneTimeTextLineHeight?.Tablet}${timezoneTimeTextLineHeightUnits?.Tablet};` : ''}

                ${timezoneTimeTextColor ? `color: ${timezoneTimeTextColor};` : ''}

                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-current-time{
                ${timezoneTimeTextHoverColor ? `color: ${timezoneTimeTextHoverColor};` : ''}

                ${timezoneTimeTextHoverColorType === 'gradient' ? `
                    background: ${timezoneTimeTextHoverCustomGradientColorSwitcher && timezoneTimeTextHoverCustomGradientColor ? timezoneTimeTextHoverCustomGradientColor : timezoneTimeTextHoverGradientColor};
                    ${timezoneTimeTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                    ${timezoneTimeTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ` : ''}
                
                transition: all .3s ease-in-out;
            }
            
            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-timezone-offset {
                ${timezoneTextGlobalTypoSwitcher?.fontFamily === true && timezoneTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneTextGlobalTypographyData?.fontFamily};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.fontSize === true && timezoneTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneTextGlobalTypographyData?.fontSize};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.fontWeight === true && timezoneTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneTextGlobalTypographyData?.fontWeight};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.fontStyle === true && timezoneTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneTextGlobalTypographyData?.fontStyle};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.textTransform === true && timezoneTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneTextGlobalTypographyData?.textTransform};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.textDecoration === true && timezoneTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneTextGlobalTypographyData?.textDecoration};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.letterSpacing === true && timezoneTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneTextGlobalTypographyData?.letterSpacing};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.lineHeight === true && timezoneTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneTextGlobalTypographyData?.lineHeight};` : ''}

                ${timezoneTextGlobalTypoSwitcher?.fontFamily === false && timezoneTextFontFamily && timezoneTextFontFamily !== 'Default' ? `font-family: ${timezoneTextFontFamily};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.fontSize === false && timezoneTextFontSize?.Tablet && timezoneTextFontSizeUnits?.Tablet ? `font-size: ${timezoneTextFontSize?.Tablet}${timezoneTextFontSizeUnits?.Tablet};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.fontWeight === false && timezoneTextFontWeight ? `font-weight: ${timezoneTextFontWeight};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.fontStyle === false && timezoneTextFontStyle ? `font-style: ${timezoneTextFontStyle};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.textTransform === false && timezoneTextTransform ? `text-transform: ${timezoneTextTransform};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.textDecoration === false && timezoneTextDecoration ? `text-decoration: ${timezoneTextDecoration};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.letterSpacing === false && timezoneTextLetterSpacing?.Tablet && timezoneTextLetterSpacingUnits?.Tablet ? `letter-spacing: ${timezoneTextLetterSpacing?.Tablet}${timezoneTextLetterSpacingUnits?.Tablet};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.lineHeight === false && timezoneTextLineHeight?.Tablet && timezoneTextLineHeightUnits?.Tablet ? `line-height: ${timezoneTextLineHeight?.Tablet}${timezoneTextLineHeightUnits?.Tablet};` : ''}

                ${timezoneTextColor ? `color: ${timezoneTextColor};` : ''}

                transition: all .3s ease-in-out;
            }
            
            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-timezone-offset{
                ${timezoneTextHoverColor ? `color: ${timezoneTextHoverColor};` : ''}
                ${timezoneTextHoverColorType === 'gradient' ? `
                    background: ${timezoneTextHoverCustomGradientColorSwitcher && timezoneTextHoverCustomGradientColor ? timezoneTextHoverCustomGradientColor : timezoneTextHoverGradientColor};
                    ${timezoneTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                    ${timezoneTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box {
                overflow: hidden;
                ${infoBoxBorder ? `border: ${infoBoxBorder};` : ''}
                ${infoBoxTabletBorderWidth && infoBoxTabletBorder?.top ? `border-width: ${infoBoxTabletBorderWidth};` : ''}
                ${infoBoxTabletBorderRadiusWidth && infoBoxTabBorderRadius?.top ? `border-radius: ${infoBoxTabletBorderRadiusWidth};` : ''}
                ${infoBoxTabletPaddingWidth && infoBoxTabPadding?.top ? `padding: ${infoBoxTabletPaddingWidth};` : ''}
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open {
                ${ infoBoxBgColorType === "gradient" ? `background: ${ infoBoxBgCustomGradientColorSwitcher && infoBoxBgCustomGradientColor ? infoBoxBgCustomGradientColor : infoBoxBgGradientColor };` : infoBoxBgColor ?`background: ${infoBoxBgColor};` : '' }
                ${infoBoxBorderColor ? `border-color: ${infoBoxBorderColor};` : ''}
                ${infoBoxBoxShadowCssValue ? `box-shadow: ${infoBoxBoxShadowCssValue};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open:hover{
                ${ infoBoxBgHoverColorType === "gradient" ? `background: ${ infoBoxBgHoverCustomGradientColorSwitcher && infoBoxBgHoverCustomGradientColor ? infoBoxBgHoverCustomGradientColor : infoBoxBgHoverGradientColor };` : infoBoxBgHoverColor ? `background: ${infoBoxBgHoverColor};` : '' }

                ${infoBoxBorderHoverColor ? `border-color: ${infoBoxBorderHoverColor};` : ''}

                transition: all .3s ease-in-out;
            }
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed {
                ${ infoBoxOffStatusBgColorType === "gradient" ? `background: ${ infoBoxOffStatusBgCustomGradientColorSwitcher && infoBoxOffStatusBgCustomGradientColor ? infoBoxOffStatusBgCustomGradientColor : infoBoxOffStatusBgGradientColor };` : infoBoxOffStatusBgColor ?`background: ${infoBoxOffStatusBgColor};` : '' }
                ${infoBoxOffStatusBorderColor ? `border-color: ${infoBoxOffStatusBorderColor};` : ''}
                ${infoBoxOffStatusBoxShadowCssValue ? `box-shadow: ${infoBoxOffStatusBoxShadowCssValue};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed:hover{
                ${ infoBoxOffStatusBgHoverColorType === "gradient" ? `background: ${ infoBoxOffStatusBgHoverCustomGradientColorSwitcher && infoBoxOffStatusBgHoverCustomGradientColor ? infoBoxOffStatusBgHoverCustomGradientColor : infoBoxOffStatusBgHoverGradientColor };` : infoBoxOffStatusBgHoverColor ? `background: ${infoBoxOffStatusBgHoverColor};` : '' }

                ${infoBoxOffStatusBorderHoverColor ? `border-color: ${infoBoxOffStatusBorderHoverColor};` : ''}

                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-open .fb-timezone-status, 
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-weekend .fb-timezone-status, 
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-holiday .fb-timezone-status, 
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-closed .fb-timezone-status {
                ${statusTextGlobalTypoSwitcher?.fontFamily === true && statusTextGlobalTypographyData?.fontFamily ? `font-family: ${statusTextGlobalTypographyData?.fontFamily};` : ''}
                ${statusTextGlobalTypoSwitcher?.fontSize === true && statusTextGlobalTypographyData?.fontSize ? `font-size: ${statusTextGlobalTypographyData?.fontSize};` : ''}
                ${statusTextGlobalTypoSwitcher?.fontWeight === true && statusTextGlobalTypographyData?.fontWeight ? `font-weight: ${statusTextGlobalTypographyData?.fontWeight};` : ''}
                ${statusTextGlobalTypoSwitcher?.fontStyle === true && statusTextGlobalTypographyData?.fontStyle ? `font-style: ${statusTextGlobalTypographyData?.fontStyle};` : ''}
                ${statusTextGlobalTypoSwitcher?.textTransform === true && statusTextGlobalTypographyData?.textTransform ? `text-transform: ${statusTextGlobalTypographyData?.textTransform};` : ''}
                ${statusTextGlobalTypoSwitcher?.textDecoration === true && statusTextGlobalTypographyData?.textDecoration ? `text-decoration: ${statusTextGlobalTypographyData?.textDecoration};` : ''}
                ${statusTextGlobalTypoSwitcher?.letterSpacing === true && statusTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${statusTextGlobalTypographyData?.letterSpacing};` : ''}
                ${statusTextGlobalTypoSwitcher?.lineHeight === true && statusTextGlobalTypographyData?.lineHeight ? `line-height: ${statusTextGlobalTypographyData?.lineHeight};` : ''}

                ${statusTextGlobalTypoSwitcher?.fontFamily === false && statusTextFontFamily && statusTextFontFamily !== 'Default' ? `font-family: ${statusTextFontFamily};` : ''}
                ${statusTextGlobalTypoSwitcher?.fontSize === false && statusTextFontSize?.Tablet && statusTextFontSizeUnits?.Tablet ? `font-size: ${statusTextFontSize?.Tablet}${statusTextFontSizeUnits?.Tablet};` : ''}
                ${statusTextGlobalTypoSwitcher?.fontWeight === false && statusTextFontWeight ? `font-weight: ${statusTextFontWeight};` : ''}
                ${statusTextGlobalTypoSwitcher?.fontStyle === false && statusTextFontStyle ? `font-style: ${statusTextFontStyle};` : ''}
                ${statusTextGlobalTypoSwitcher?.textTransform === false && statusTextTransform ? `text-transform: ${statusTextTransform};` : ''}
                ${statusTextGlobalTypoSwitcher?.textDecoration === false && statusTextDecoration ? `text-decoration: ${statusTextDecoration};` : ''}
                ${statusTextGlobalTypoSwitcher?.letterSpacing === false && statusTextLetterSpacing?.Tablet && statusTextLetterSpacingUnits?.Tablet ? `letter-spacing: ${statusTextLetterSpacing?.Tablet}${statusTextLetterSpacingUnits?.Tablet};` : ''}
                ${statusTextGlobalTypoSwitcher?.lineHeight === false && statusTextLineHeight?.Tablet && statusTextLineHeightUnits?.Tablet ? `line-height: ${statusTextLineHeight?.Tablet}${statusTextLineHeightUnits?.Tablet};` : ''}

                ${statusTabletPaddingWidth && statusTabPadding?.top ? `padding: ${statusTabletPaddingWidth};` : ''}

                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-open .fb-timezone-status{
                ${statusOpenColor ? `color: ${statusOpenColor};` : ''}
                ${statusOpenBgColor ? `background-color: ${statusOpenBgColor};` : ''}
                ${statusOpenBorder ? `border: ${statusOpenBorder};` : ''}
                ${statusOpenTabletBorderWidth && statusOpenTabletBorder?.top ? `border-width: ${statusOpenTabletBorderWidth};` : ''}
                ${statusOpenTabletBorderRadiusWidth && statusOpenTabBorderRadius?.top ? `border-radius: ${statusOpenTabletBorderRadiusWidth};` : ''}
                ${statusOpenBorderColor ? `border-color: ${statusOpenBorderColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-open .fb-timezone-status:hover{
                ${statusOpenHoverColor ? `color: ${statusOpenHoverColor};` : ''}
                ${statusOpenHoverBgColor ? `background-color: ${statusOpenHoverBgColor};` : ''}
                ${statusOpenBorderHoverColor ? `border-color: ${statusOpenBorderHoverColor};` : ''}
                transition: all .3s ease-in-out;
            }
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-closed .fb-timezone-status,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-weekend .fb-timezone-status,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-holiday .fb-timezone-status{
                ${statusCloseColor ? `color: ${statusCloseColor};` : ''}
                ${statusCloseBgColor ? `background-color: ${statusCloseBgColor};` : ''}
                ${statusCloseBorder ? `border: ${statusCloseBorder};` : ''}
                ${statusCloseTabletBorderWidth && statusCloseTabletBorder?.top ? `border-width: ${statusCloseTabletBorderWidth};` : ''}
                ${statusCloseTabletBorderRadiusWidth && statusCloseTabBorderRadius?.top ? `border-radius: ${statusCloseTabletBorderRadiusWidth};` : ''}
                ${statusCloseBorderColor ? `border-color: ${statusCloseBorderColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-closed .fb-timezone-status:hover
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-weekend .fb-timezone-status:hover,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-holiday .fb-timezone-status:hover{
                ${statusCloseHoverColor ? `color: ${statusCloseHoverColor};` : ''}
                ${statusCloseHoverBgColor ? `background-color: ${statusCloseHoverBgColor};` : ''}
                ${statusCloseBorderHoverColor ? `border-color: ${statusCloseBorderHoverColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-timezone-status-info .fb-timezone-info-noted{
                ${noticeTextGlobalTypoSwitcher?.fontFamily === true && noticeTextGlobalTypographyData?.fontFamily ? `font-family: ${noticeTextGlobalTypographyData?.fontFamily};` : ''}
                ${noticeTextGlobalTypoSwitcher?.fontSize === true && noticeTextGlobalTypographyData?.fontSize ? `font-size: ${noticeTextGlobalTypographyData?.fontSize};` : ''}
                ${noticeTextGlobalTypoSwitcher?.fontWeight === true && noticeTextGlobalTypographyData?.fontWeight ? `font-weight: ${noticeTextGlobalTypographyData?.fontWeight};` : ''}
                ${noticeTextGlobalTypoSwitcher?.fontStyle === true && noticeTextGlobalTypographyData?.fontStyle ? `font-style: ${noticeTextGlobalTypographyData?.fontStyle};` : ''}
                ${noticeTextGlobalTypoSwitcher?.textTransform === true && noticeTextGlobalTypographyData?.textTransform ? `text-transform: ${noticeTextGlobalTypographyData?.textTransform};` : ''}
                ${noticeTextGlobalTypoSwitcher?.textDecoration === true && noticeTextGlobalTypographyData?.textDecoration ? `text-decoration: ${noticeTextGlobalTypographyData?.textDecoration};` : ''}
                ${noticeTextGlobalTypoSwitcher?.letterSpacing === true && noticeTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${noticeTextGlobalTypographyData?.letterSpacing};` : ''}
                ${noticeTextGlobalTypoSwitcher?.lineHeight === true && noticeTextGlobalTypographyData?.lineHeight ? `line-height: ${noticeTextGlobalTypographyData?.lineHeight};` : ''}

                ${noticeTextGlobalTypoSwitcher?.fontFamily === false && noticeTextFontFamily && noticeTextFontFamily !== 'Default' ? `font-family: ${noticeTextFontFamily};` : ''}
                ${noticeTextGlobalTypoSwitcher?.fontSize === false && noticeTextFontSize?.Tablet && noticeTextFontSizeUnits?.Tablet ? `font-size: ${noticeTextFontSize?.Tablet}${noticeTextFontSizeUnits?.Tablet};` : ''}
                ${noticeTextGlobalTypoSwitcher?.fontWeight === false && noticeTextFontWeight ? `font-weight: ${noticeTextFontWeight};` : ''}
                ${noticeTextGlobalTypoSwitcher?.fontStyle === false && noticeTextFontStyle ? `font-style: ${noticeTextFontStyle};` : ''}
                ${noticeTextGlobalTypoSwitcher?.textTransform === false && noticeTextTransform ? `text-transform: ${noticeTextTransform};` : ''}
                ${noticeTextGlobalTypoSwitcher?.textDecoration === false && noticeTextDecoration ? `text-decoration: ${noticeTextDecoration};` : ''}
                ${noticeTextGlobalTypoSwitcher?.letterSpacing === false && noticeTextLetterSpacing?.Tablet && noticeTextLetterSpacingUnits?.Tablet ? `letter-spacing: ${noticeTextLetterSpacing?.Tablet}${noticeTextLetterSpacingUnits?.Tablet};` : ''}
                ${noticeTextGlobalTypoSwitcher?.lineHeight === false && noticeTextLineHeight?.Tablet && noticeTextLineHeightUnits?.Tablet ? `line-height: ${noticeTextLineHeight?.Tablet}${noticeTextLineHeightUnits?.Tablet};` : ''}
                
                ${infoBoxTabletMarginWidth && infoBoxTabMargin?.top ? `margin: ${infoBoxTabletMarginWidth};` : ''}

                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open .fb-timezone-status-info .fb-timezone-info-noted{
                ${noticeTextColor ? `color: ${noticeTextColor};` : ''}
            }
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open .fb-timezone-status-info .fb-timezone-info-noted:hover{
                ${noticeTextHoverColor ? `color: ${noticeTextHoverColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed .fb-timezone-status-info .fb-timezone-info-noted,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.holiday .fb-timezone-status-info .fb-timezone-info-noted,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.weekend .fb-timezone-status-info .fb-timezone-info-noted{
                ${statusOffNoticeTextColor ? `color: ${statusOffNoticeTextColor};` : ''}
            }
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed .fb-timezone-status-info .fb-timezone-info-noted:hover,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.holiday .fb-timezone-status-info .fb-timezone-info-noted:hover,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.weekend .fb-timezone-status-info .fb-timezone-info-noted:hover{
                ${statusOffNoticeTextHoverColor ? `color: ${statusOffNoticeTextHoverColor};` : ''}
                transition: all .3s ease-in-out;
            }
        
        }

        @media only screen and (max-width: 767px) {
            .${blockID}.fb-timezone-main-wrapper {
                ${timezonePositionType === 'default' ? `position: relative !important;` : ''}
                ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' ? `width: 100%;` : ''}
                ${timezonePositionType !== 'default' ? `position: ${timezonePositionType} !important;` : ''}
                ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneHZOrientationType === 'left' && timezoneHZLeftOffset?.Mobile ? `left: ${timezoneHZLeftOffset?.Mobile}${timezoneHZLeftOffsetUnits?.Mobile};` : ''} 
                ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneHZOrientationType === 'right' && timezoneHZRightOffset?.Mobile ? `right: ${timezoneHZRightOffset?.Mobile}${timezoneHZRightOffsetUnits?.Mobile};` : ''}
                ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneVROrientationType === 'top' && timezoneVRTopOffset?.Mobile ? `top: ${timezoneVRTopOffset?.Mobile}${timezoneVRTopOffsetUnits?.Mobile};` : ''}
                ${timezonePositionType !== 'default' && timezonePositionType !== 'relative' && timezoneVROrientationType === 'bottom' && timezoneVRBottomOffset?.Mobile ? `bottom: ${timezoneVRBottomOffset?.Mobile}${timezoneVRBottomOffsetUnits?.Mobile};` : ''}

                ${timezoneGlobalZIndex?.Mobile ? `z-index: ${timezoneGlobalZIndex?.Mobile};` : ''}
                ${timezoneOverflow !== 'default' ? `overflow: ${timezoneOverflow};` : ''}
            }
            
            .${blockID}.fb-timezone-main-wrapper .fb-timezone-container {
                gap: ${timezoneCardSpacing?.Mobile}${timezoneCardSpacingUnits?.Mobile};
                ${timezoneCardAlignment ? `justify-content: ${timezoneCardAlignment};` : ''}
                ${mobileBackgroundNormalStyles}
                ${timezoneMobilePaddingWidth && timezoneMobilePadding?.top ? `padding: ${timezoneMobilePaddingWidth};` : ''}
                ${timezoneMobileMarginWidth && timezoneMobileMargin?.top ? `margin: ${timezoneMobileMarginWidth};` : ''}
                ${timezoneGlobalBorder ? `border: ${timezoneGlobalBorder};` : ''}
                ${globalMobileBorderWidth && timezoneGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && timezoneGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
                ${timezoneGlobalBorderColor ? `border-color: ${timezoneGlobalBorderColor};` : ''}
                ${timezoneGlobalBoxShadowCssValue ? `box-shadow: ${timezoneGlobalBoxShadowCssValue};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID}.fb-timezone-main-wrapper .fb-timezone-container:hover {
                ${mobileBackgroundHoverStyles}
                ${timezoneGlobalBorderHoverColor ? `border-color: ${timezoneGlobalBorderHoverColor};` : ''}
                ${timezoneGlobalBoxShadowHoverCssValue ? `box-shadow: ${timezoneGlobalBoxShadowHoverCssValue};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone{
                position: relative;
                display: flex;
                align-items: center;
                gap: ${timezoneLocationTextSpacing?.Mobile}${timezoneLocationTextSpacingUnits?.Mobile};
                
                ${ locationTimezoneBgColorType === "gradient" ? `background: ${ locationTimezoneBgCustomGradientColorSwitcher && locationTimezoneBgCustomGradientColor ? locationTimezoneBgCustomGradientColor : locationTimezoneBgGradientColor };` : locationTimezoneBgColor ?`background: ${locationTimezoneBgColor};` : '' }
                
                ${locationTimezoneBorder ? `border: ${locationTimezoneBorder};` : ''}
                ${locationTimezoneMobileBorderWidth && locationTimezoneMobileBorder?.top ? `border-width: ${locationTimezoneMobileBorderWidth};` : ''}
                ${locationTimezoneMobileBorderRadiusWidth && locationTimezoneMobileBorderRadius?.top ? `border-radius: ${locationTimezoneMobileBorderRadiusWidth};` : ''}
                ${locationTimezoneBorderColor ? `border-color: ${locationTimezoneBorderColor};` : ''}
                ${locationTimezoneBoxShadowCssValue ? `box-shadow: ${locationTimezoneBoxShadowCssValue};` : ''}

                ${locationTimezoneMobilePaddingWidth && locationTimezoneMobilePadding?.top ? `padding: ${locationTimezoneMobilePaddingWidth};` : ''}
                ${locationTimezoneMobileMarginWidth && locationTimezoneMobileMargin?.top ? `margin: ${locationTimezoneMobileMarginWidth};` : ''}

                transition: all .3s ease-in-out;
            }
            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover{
                ${ locationTimezoneBgHoverColorType === "gradient" ? `background: ${ locationTimezoneBgHoverCustomGradientColorSwitcher && locationTimezoneBgHoverCustomGradientColor ? locationTimezoneBgHoverCustomGradientColor : locationTimezoneBgHoverGradientColor };` : locationTimezoneBgHoverColor ? `background: ${locationTimezoneBgHoverColor};` : '' }

                ${locationTimezoneBorderHoverColor ? `border-color: ${locationTimezoneBorderHoverColor};` : ''}

                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-location-name{
                ${timezoneLocationTextGlobalTypoSwitcher?.fontFamily === true && timezoneLocationTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneLocationTextGlobalTypographyData?.fontFamily};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.fontSize === true && timezoneLocationTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneLocationTextGlobalTypographyData?.fontSize};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.fontWeight === true && timezoneLocationTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneLocationTextGlobalTypographyData?.fontWeight};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.fontStyle === true && timezoneLocationTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneLocationTextGlobalTypographyData?.fontStyle};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.textTransform === true && timezoneLocationTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneLocationTextGlobalTypographyData?.textTransform};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.textDecoration === true && timezoneLocationTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneLocationTextGlobalTypographyData?.textDecoration};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.letterSpacing === true && timezoneLocationTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneLocationTextGlobalTypographyData?.letterSpacing};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.lineHeight === true && timezoneLocationTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneLocationTextGlobalTypographyData?.lineHeight};` : ''}

                ${timezoneLocationTextGlobalTypoSwitcher?.fontFamily === false && timezoneLocationTextFontFamily && timezoneLocationTextFontFamily !== 'Default' ? `font-family: ${timezoneLocationTextFontFamily};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.fontSize === false && timezoneLocationTextFontSize?.Mobile && timezoneLocationTextFontSizeUnits?.Mobile ? `font-size: ${timezoneLocationTextFontSize?.Mobile}${timezoneLocationTextFontSizeUnits?.Mobile};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.fontWeight === false && timezoneLocationTextFontWeight ? `font-weight: ${timezoneLocationTextFontWeight};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.fontStyle === false && timezoneLocationTextFontStyle ? `font-style: ${timezoneLocationTextFontStyle};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.textTransform === false && timezoneLocationTextTransform ? `text-transform: ${timezoneLocationTextTransform};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.textDecoration === false && timezoneLocationTextDecoration ? `text-decoration: ${timezoneLocationTextDecoration};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.letterSpacing === false && timezoneLocationTextLetterSpacing?.Mobile && timezoneLocationTextLetterSpacingUnits?.Mobile ? `letter-spacing: ${timezoneLocationTextLetterSpacing?.Mobile}${timezoneLocationTextLetterSpacingUnits?.Mobile};` : ''}
                ${timezoneLocationTextGlobalTypoSwitcher?.lineHeight === false && timezoneLocationTextLineHeight?.Mobile && timezoneLocationTextLineHeightUnits?.Mobile ? `line-height: ${timezoneLocationTextLineHeight?.Mobile}${timezoneLocationTextLineHeightUnits?.Mobile};` : ''}

                ${locationNameTextColor ? `color: ${locationNameTextColor};` : ''}

                ${locationNameTextColorType === 'gradient' ? `
                    background: ${locationNameTextCustomGradientColorSwitcher && locationNameTextCustomGradientColor ? locationNameTextCustomGradientColor : locationNameTextGradientColor};
                    ${locationNameTextCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                    ${locationNameTextGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ` : ''}

                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-location-name{

                ${locationNameTextHoverColor ? `color: ${locationNameTextHoverColor};` : ''}
                ${locationNameTextHoverColorType === 'gradient' ? `
                    background: ${locationNameTextHoverCustomGradientColorSwitcher && locationNameTextHoverCustomGradientColor ? locationNameTextHoverCustomGradientColor : locationNameTextHoverGradientColor};
                    ${locationNameTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                    ${locationNameTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ` : ''}
                
                transition: all .3s ease-in-out;
            }
            
            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-timezone-separator {
                font-size: ${separatorSize?.Mobile}${separatorFontUnits?.Mobile};
                line-height: 100%;
                ${separatorColor ? `color: ${separatorColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-timezone-separator {
                ${separatorHoverColor ? `color: ${separatorHoverColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-current-time {
                ${timezoneTimeTextGlobalTypoSwitcher?.fontFamily === true && timezoneTimeTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneTimeTextGlobalTypographyData?.fontFamily};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.fontSize === true && timezoneTimeTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneTimeTextGlobalTypographyData?.fontSize};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.fontWeight === true && timezoneTimeTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneTimeTextGlobalTypographyData?.fontWeight};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.fontStyle === true && timezoneTimeTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneTimeTextGlobalTypographyData?.fontStyle};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.textTransform === true && timezoneTimeTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneTimeTextGlobalTypographyData?.textTransform};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.textDecoration === true && timezoneTimeTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneTimeTextGlobalTypographyData?.textDecoration};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.letterSpacing === true && timezoneTimeTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneTimeTextGlobalTypographyData?.letterSpacing};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.lineHeight === true && timezoneTimeTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneTimeTextGlobalTypographyData?.lineHeight};` : ''}

                ${timezoneTimeTextGlobalTypoSwitcher?.fontFamily === false && timezoneTimeTextFontFamily && timezoneTimeTextFontFamily !== 'Default' ? `font-family: ${timezoneTimeTextFontFamily};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.fontSize === false && timezoneTimeTextFontSize?.Mobile && timezoneTimeTextFontSizeUnits?.Mobile ? `font-size: ${timezoneTimeTextFontSize?.Mobile}${timezoneTimeTextFontSizeUnits?.Mobile};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.fontWeight === false && timezoneTimeTextFontWeight ? `font-weight: ${timezoneTimeTextFontWeight};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.fontStyle === false && timezoneTimeTextFontStyle ? `font-style: ${timezoneTimeTextFontStyle};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.textTransform === false && timezoneTimeTextTransform ? `text-transform: ${timezoneTimeTextTransform};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.textDecoration === false && timezoneTimeTextDecoration ? `text-decoration: ${timezoneTimeTextDecoration};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.letterSpacing === false && timezoneTimeTextLetterSpacing?.Mobile && timezoneTimeTextLetterSpacingUnits?.Mobile ? `letter-spacing: ${timezoneTimeTextLetterSpacing?.Mobile}${timezoneTimeTextLetterSpacingUnits?.Mobile};` : ''}
                ${timezoneTimeTextGlobalTypoSwitcher?.lineHeight === false && timezoneTimeTextLineHeight?.Mobile && timezoneTimeTextLineHeightUnits?.Mobile ? `line-height: ${timezoneTimeTextLineHeight?.Mobile}${timezoneTimeTextLineHeightUnits?.Mobile};` : ''}

                ${timezoneTimeTextColor ? `color: ${timezoneTimeTextColor};` : ''}

                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-current-time{
                ${timezoneTimeTextHoverColor ? `color: ${timezoneTimeTextHoverColor};` : ''}

                ${timezoneTimeTextHoverColorType === 'gradient' ? `
                    background: ${timezoneTimeTextHoverCustomGradientColorSwitcher && timezoneTimeTextHoverCustomGradientColor ? timezoneTimeTextHoverCustomGradientColor : timezoneTimeTextHoverGradientColor};
                    ${timezoneTimeTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                    ${timezoneTimeTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ` : ''}
                
                transition: all .3s ease-in-out;
            }
            
            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone .fb-timezone-offset {
                ${timezoneTextGlobalTypoSwitcher?.fontFamily === true && timezoneTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneTextGlobalTypographyData?.fontFamily};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.fontSize === true && timezoneTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneTextGlobalTypographyData?.fontSize};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.fontWeight === true && timezoneTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneTextGlobalTypographyData?.fontWeight};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.fontStyle === true && timezoneTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneTextGlobalTypographyData?.fontStyle};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.textTransform === true && timezoneTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneTextGlobalTypographyData?.textTransform};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.textDecoration === true && timezoneTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneTextGlobalTypographyData?.textDecoration};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.letterSpacing === true && timezoneTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneTextGlobalTypographyData?.letterSpacing};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.lineHeight === true && timezoneTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneTextGlobalTypographyData?.lineHeight};` : ''}

                ${timezoneTextGlobalTypoSwitcher?.fontFamily === false && timezoneTextFontFamily && timezoneTextFontFamily !== 'Default' ? `font-family: ${timezoneTextFontFamily};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.fontSize === false && timezoneTextFontSize?.Mobile && timezoneTextFontSizeUnits?.Mobile ? `font-size: ${timezoneTextFontSize?.Mobile}${timezoneTextFontSizeUnits?.Mobile};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.fontWeight === false && timezoneTextFontWeight ? `font-weight: ${timezoneTextFontWeight};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.fontStyle === false && timezoneTextFontStyle ? `font-style: ${timezoneTextFontStyle};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.textTransform === false && timezoneTextTransform ? `text-transform: ${timezoneTextTransform};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.textDecoration === false && timezoneTextDecoration ? `text-decoration: ${timezoneTextDecoration};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.letterSpacing === false && timezoneTextLetterSpacing?.Mobile && timezoneTextLetterSpacingUnits?.Mobile ? `letter-spacing: ${timezoneTextLetterSpacing?.Mobile}${timezoneTextLetterSpacingUnits?.Mobile};` : ''}
                ${timezoneTextGlobalTypoSwitcher?.lineHeight === false && timezoneTextLineHeight?.Mobile && timezoneTextLineHeightUnits?.Mobile ? `line-height: ${timezoneTextLineHeight?.Mobile}${timezoneTextLineHeightUnits?.Mobile};` : ''}

                ${timezoneTextColor ? `color: ${timezoneTextColor};` : ''}

                transition: all .3s ease-in-out;
            }
            
            .${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-timezone-offset{
                ${timezoneTextHoverColor ? `color: ${timezoneTextHoverColor};` : ''}
                ${timezoneTextHoverColorType === 'gradient' ? `
                    background: ${timezoneTextHoverCustomGradientColorSwitcher && timezoneTextHoverCustomGradientColor ? timezoneTextHoverCustomGradientColor : timezoneTextHoverGradientColor};
                    ${timezoneTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                    ${timezoneTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box {
                overflow: hidden;
                ${infoBoxBorder ? `border: ${infoBoxBorder};` : ''}
                ${infoBoxMobileBorderWidth && infoBoxMobileBorder?.top ? `border-width: ${infoBoxMobileBorderWidth};` : ''}
                ${infoBoxMobileBorderRadiusWidth && infoBoxMobileBorderRadius?.top ? `border-radius: ${infoBoxMobileBorderRadiusWidth};` : ''}
                ${infoBoxMobilePaddingWidth && infoBoxMobilePadding?.top ? `padding: ${infoBoxMobilePaddingWidth};` : ''}
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open {
                ${ infoBoxBgColorType === "gradient" ? `background: ${ infoBoxBgCustomGradientColorSwitcher && infoBoxBgCustomGradientColor ? infoBoxBgCustomGradientColor : infoBoxBgGradientColor };` : infoBoxBgColor ?`background: ${infoBoxBgColor};` : '' }
                ${infoBoxBorderColor ? `border-color: ${infoBoxBorderColor};` : ''}
                ${infoBoxBoxShadowCssValue ? `box-shadow: ${infoBoxBoxShadowCssValue};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open:hover{
                ${ infoBoxBgHoverColorType === "gradient" ? `background: ${ infoBoxBgHoverCustomGradientColorSwitcher && infoBoxBgHoverCustomGradientColor ? infoBoxBgHoverCustomGradientColor : infoBoxBgHoverGradientColor };` : infoBoxBgHoverColor ? `background: ${infoBoxBgHoverColor};` : '' }

                ${infoBoxBorderHoverColor ? `border-color: ${infoBoxBorderHoverColor};` : ''}

                transition: all .3s ease-in-out;
            }
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed {
                ${ infoBoxOffStatusBgColorType === "gradient" ? `background: ${ infoBoxOffStatusBgCustomGradientColorSwitcher && infoBoxOffStatusBgCustomGradientColor ? infoBoxOffStatusBgCustomGradientColor : infoBoxOffStatusBgGradientColor };` : infoBoxOffStatusBgColor ?`background: ${infoBoxOffStatusBgColor};` : '' }
                ${infoBoxOffStatusBorderColor ? `border-color: ${infoBoxOffStatusBorderColor};` : ''}
                ${infoBoxOffStatusBoxShadowCssValue ? `box-shadow: ${infoBoxOffStatusBoxShadowCssValue};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed:hover{
                ${ infoBoxOffStatusBgHoverColorType === "gradient" ? `background: ${ infoBoxOffStatusBgHoverCustomGradientColorSwitcher && infoBoxOffStatusBgHoverCustomGradientColor ? infoBoxOffStatusBgHoverCustomGradientColor : infoBoxOffStatusBgHoverGradientColor };` : infoBoxOffStatusBgHoverColor ? `background: ${infoBoxOffStatusBgHoverColor};` : '' }

                ${infoBoxOffStatusBorderHoverColor ? `border-color: ${infoBoxOffStatusBorderHoverColor};` : ''}

                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-open .fb-timezone-status, 
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-weekend .fb-timezone-status, 
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-holiday .fb-timezone-status, 
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-closed .fb-timezone-status {
                ${statusTextGlobalTypoSwitcher?.fontFamily === true && statusTextGlobalTypographyData?.fontFamily ? `font-family: ${statusTextGlobalTypographyData?.fontFamily};` : ''}
                ${statusTextGlobalTypoSwitcher?.fontSize === true && statusTextGlobalTypographyData?.fontSize ? `font-size: ${statusTextGlobalTypographyData?.fontSize};` : ''}
                ${statusTextGlobalTypoSwitcher?.fontWeight === true && statusTextGlobalTypographyData?.fontWeight ? `font-weight: ${statusTextGlobalTypographyData?.fontWeight};` : ''}
                ${statusTextGlobalTypoSwitcher?.fontStyle === true && statusTextGlobalTypographyData?.fontStyle ? `font-style: ${statusTextGlobalTypographyData?.fontStyle};` : ''}
                ${statusTextGlobalTypoSwitcher?.textTransform === true && statusTextGlobalTypographyData?.textTransform ? `text-transform: ${statusTextGlobalTypographyData?.textTransform};` : ''}
                ${statusTextGlobalTypoSwitcher?.textDecoration === true && statusTextGlobalTypographyData?.textDecoration ? `text-decoration: ${statusTextGlobalTypographyData?.textDecoration};` : ''}
                ${statusTextGlobalTypoSwitcher?.letterSpacing === true && statusTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${statusTextGlobalTypographyData?.letterSpacing};` : ''}
                ${statusTextGlobalTypoSwitcher?.lineHeight === true && statusTextGlobalTypographyData?.lineHeight ? `line-height: ${statusTextGlobalTypographyData?.lineHeight};` : ''}

                ${statusTextGlobalTypoSwitcher?.fontFamily === false && statusTextFontFamily && statusTextFontFamily !== 'Default' ? `font-family: ${statusTextFontFamily};` : ''}
                ${statusTextGlobalTypoSwitcher?.fontSize === false && statusTextFontSize?.Mobile && statusTextFontSizeUnits?.Mobile ? `font-size: ${statusTextFontSize?.Mobile}${statusTextFontSizeUnits?.Mobile};` : ''}
                ${statusTextGlobalTypoSwitcher?.fontWeight === false && statusTextFontWeight ? `font-weight: ${statusTextFontWeight};` : ''}
                ${statusTextGlobalTypoSwitcher?.fontStyle === false && statusTextFontStyle ? `font-style: ${statusTextFontStyle};` : ''}
                ${statusTextGlobalTypoSwitcher?.textTransform === false && statusTextTransform ? `text-transform: ${statusTextTransform};` : ''}
                ${statusTextGlobalTypoSwitcher?.textDecoration === false && statusTextDecoration ? `text-decoration: ${statusTextDecoration};` : ''}
                ${statusTextGlobalTypoSwitcher?.letterSpacing === false && statusTextLetterSpacing?.Mobile && statusTextLetterSpacingUnits?.Mobile ? `letter-spacing: ${statusTextLetterSpacing?.Mobile}${statusTextLetterSpacingUnits?.Mobile};` : ''}
                ${statusTextGlobalTypoSwitcher?.lineHeight === false && statusTextLineHeight?.Mobile && statusTextLineHeightUnits?.Mobile ? `line-height: ${statusTextLineHeight?.Mobile}${statusTextLineHeightUnits?.Mobile};` : ''}

                ${statusMobilePaddingWidth && statusMobilePadding?.top ? `padding: ${statusMobilePaddingWidth};` : ''}

                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-open .fb-timezone-status{
                ${statusOpenColor ? `color: ${statusOpenColor};` : ''}
                ${statusOpenBgColor ? `background-color: ${statusOpenBgColor};` : ''}
                ${statusOpenBorder ? `border: ${statusOpenBorder};` : ''}
                ${statusOpenMobileBorderWidth && statusOpenMobileBorder?.top ? `border-width: ${statusOpenMobileBorderWidth};` : ''}
                ${statusOpenMobileBorderRadiusWidth && statusOpenMobileBorderRadius?.top ? `border-radius: ${statusOpenMobileBorderRadiusWidth};` : ''}
                ${statusOpenBorderColor ? `border-color: ${statusOpenBorderColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-open .fb-timezone-status:hover{
                ${statusOpenHoverColor ? `color: ${statusOpenHoverColor};` : ''}
                ${statusOpenHoverBgColor ? `background-color: ${statusOpenHoverBgColor};` : ''}
                ${statusOpenBorderHoverColor ? `border-color: ${statusOpenBorderHoverColor};` : ''}
                transition: all .3s ease-in-out;
            }
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-closed .fb-timezone-status,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-weekend .fb-timezone-status,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-holiday .fb-timezone-status{
                ${statusCloseColor ? `color: ${statusCloseColor};` : ''}
                ${statusCloseBgColor ? `background-color: ${statusCloseBgColor};` : ''}
                ${statusCloseBorder ? `border: ${statusCloseBorder};` : ''}
                ${statusCloseMobileBorderWidth && statusCloseMobileBorder?.top ? `border-width: ${statusCloseMobileBorderWidth};` : ''}
                ${statusCloseMobileBorderRadiusWidth && statusCloseMobileBorderRadius?.top ? `border-radius: ${statusCloseMobileBorderRadiusWidth};` : ''}
                ${statusCloseBorderColor ? `border-color: ${statusCloseBorderColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-closed .fb-timezone-status:hover
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-weekend .fb-timezone-status:hover,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-time-pulse-holiday .fb-timezone-status:hover{
                ${statusCloseHoverColor ? `color: ${statusCloseHoverColor};` : ''}
                ${statusCloseHoverBgColor ? `background-color: ${statusCloseHoverBgColor};` : ''}
                ${statusCloseBorderHoverColor ? `border-color: ${statusCloseBorderHoverColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box .fb-timezone-status-info .fb-timezone-info-noted{
                ${noticeTextGlobalTypoSwitcher?.fontFamily === true && noticeTextGlobalTypographyData?.fontFamily ? `font-family: ${noticeTextGlobalTypographyData?.fontFamily};` : ''}
                ${noticeTextGlobalTypoSwitcher?.fontSize === true && noticeTextGlobalTypographyData?.fontSize ? `font-size: ${noticeTextGlobalTypographyData?.fontSize};` : ''}
                ${noticeTextGlobalTypoSwitcher?.fontWeight === true && noticeTextGlobalTypographyData?.fontWeight ? `font-weight: ${noticeTextGlobalTypographyData?.fontWeight};` : ''}
                ${noticeTextGlobalTypoSwitcher?.fontStyle === true && noticeTextGlobalTypographyData?.fontStyle ? `font-style: ${noticeTextGlobalTypographyData?.fontStyle};` : ''}
                ${noticeTextGlobalTypoSwitcher?.textTransform === true && noticeTextGlobalTypographyData?.textTransform ? `text-transform: ${noticeTextGlobalTypographyData?.textTransform};` : ''}
                ${noticeTextGlobalTypoSwitcher?.textDecoration === true && noticeTextGlobalTypographyData?.textDecoration ? `text-decoration: ${noticeTextGlobalTypographyData?.textDecoration};` : ''}
                ${noticeTextGlobalTypoSwitcher?.letterSpacing === true && noticeTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${noticeTextGlobalTypographyData?.letterSpacing};` : ''}
                ${noticeTextGlobalTypoSwitcher?.lineHeight === true && noticeTextGlobalTypographyData?.lineHeight ? `line-height: ${noticeTextGlobalTypographyData?.lineHeight};` : ''}

                ${noticeTextGlobalTypoSwitcher?.fontFamily === false && noticeTextFontFamily && noticeTextFontFamily !== 'Default' ? `font-family: ${noticeTextFontFamily};` : ''}
                ${noticeTextGlobalTypoSwitcher?.fontSize === false && noticeTextFontSize?.Mobile && noticeTextFontSizeUnits?.Mobile ? `font-size: ${noticeTextFontSize?.Mobile}${noticeTextFontSizeUnits?.Mobile};` : ''}
                ${noticeTextGlobalTypoSwitcher?.fontWeight === false && noticeTextFontWeight ? `font-weight: ${noticeTextFontWeight};` : ''}
                ${noticeTextGlobalTypoSwitcher?.fontStyle === false && noticeTextFontStyle ? `font-style: ${noticeTextFontStyle};` : ''}
                ${noticeTextGlobalTypoSwitcher?.textTransform === false && noticeTextTransform ? `text-transform: ${noticeTextTransform};` : ''}
                ${noticeTextGlobalTypoSwitcher?.textDecoration === false && noticeTextDecoration ? `text-decoration: ${noticeTextDecoration};` : ''}
                ${noticeTextGlobalTypoSwitcher?.letterSpacing === false && noticeTextLetterSpacing?.Mobile && noticeTextLetterSpacingUnits?.Mobile ? `letter-spacing: ${noticeTextLetterSpacing?.Mobile}${noticeTextLetterSpacingUnits?.Mobile};` : ''}
                ${noticeTextGlobalTypoSwitcher?.lineHeight === false && noticeTextLineHeight?.Mobile && noticeTextLineHeightUnits?.Mobile ? `line-height: ${noticeTextLineHeight?.Mobile}${noticeTextLineHeightUnits?.Mobile};` : ''}
                
                ${infoBoxMobileMarginWidth && infoBoxMobileMargin?.top ? `margin: ${infoBoxMobileMarginWidth};` : ''}

                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open .fb-timezone-status-info .fb-timezone-info-noted{
                ${noticeTextColor ? `color: ${noticeTextColor};` : ''}
            }
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.open .fb-timezone-status-info .fb-timezone-info-noted:hover{
                ${noticeTextHoverColor ? `color: ${noticeTextHoverColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed .fb-timezone-status-info .fb-timezone-info-noted,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.holiday .fb-timezone-status-info .fb-timezone-info-noted,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.weekend .fb-timezone-status-info .fb-timezone-info-noted{
                ${statusOffNoticeTextColor ? `color: ${statusOffNoticeTextColor};` : ''}
            }
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.closed .fb-timezone-status-info .fb-timezone-info-noted:hover,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.holiday .fb-timezone-status-info .fb-timezone-info-noted:hover,
            .${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box.weekend .fb-timezone-status-info .fb-timezone-info-noted:hover{
                ${statusOffNoticeTextHoverColor ? `color: ${statusOffNoticeTextHoverColor};` : ''}
                transition: all .3s ease-in-out;
            }
        }
    
    `;

    const customCss = getCustomCss(timezoneCustomCSS, `.${blockID}`);
    return `${timezoneBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateBusinessHoursBlockStyle;