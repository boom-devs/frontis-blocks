import getCustomCss from "@Utils/getCustomCss";

const generateCountdownStyle = (attributes) => {
	const {
		blockID,
		countDownPresetStyle,

		countDownLabelDay,
		countDownLabelHour,
		countDownLabelMinute,
		countDownLabelSecond,

		targetDate,
		showDays,
		showHours,
		showMinutes,
		showSeconds,

		// Countdown Separator
		countDownSeparatorEnabled,
		countDownSeparatorType,
		countDownSeparatorCustom,

		countDownSeparatorFontColorSwitcher,
		countDownSeparatorFontColor,
		countDownSeparatorFontHoverColor,

		countDownSeparatorGlobalTypoSwitcher,
		countDownSeparatorGlobalTypographyData,
		countDownSeparatorGlobalTypoType,
		countDownSeparatorGlobalTypoOption,
		countDownSeparatorFontFamily,
		countDownSeparatorFontSize,
		countDownSeparatorFontSizeUnits,
		countDownSeparatorFontWeight,
		countDownSeparatorFontStyle,
		countDownSeparatorTextTransform,
		countDownSeparatorTextDecoration,
		countDownSeparatorLetterSpacing,
		countDownSeparatorLetterSpacingUnits,
		countDownSeparatorLineHeight,
		countDownSeparatorLineHeightUnits,

		countDownSeparatorHorizontalGap,
		countDownSeparatorHorizontalGapUnits,
		countDownSeparatorVerticalGap,
		countDownSeparatorVerticalGapUnits,

		// Countdown item
		countDownItemSize,
		countDownItemSizeUnits,
		countDownItemSizeHeight,

		countDownLayoutType,
		countDownFlexWrap,
		countDownLayoutAlignment,
		countDownGrid,
		countDownItemGap,
		countDownItemGapUnits,

		/** Background Image */
		countDownItemBgImageEnabled,
		countDownItemBgImageUrl,
		countDownItemBgImageAlt,
		countDownItemBgImageID,

		countDownItemBgImagePositionType,
		countDownItemBgImageAttachmentType,
		countDownItemBgImageRepeatType,
		countDownItemBgImageSizeType,
		countDownItemBgColorSwitcher,
		countDownItemBgColor,
		countDownItemBgHoverColor,

		/** Background Image */
		// Border Type
		countDownItemBorder,
		countDownItemBorderColor,
		countDownItemBackgroundColor,

		countDownItemBorderTypeUnits,
		countDownItemBorderTypeDesktop,
		countDownItemBorderTypeTablet,
		countDownItemBorderTypeMobile,
		countDownItemBorderTypeLink,
		countDownItemBorderColorSwitcher,
		countDownItemBorderHoverColor,

		// Border Radius
		countDownItemBorderRadiusUnits,
		countDownItemBorderRadiusDesktop,
		countDownItemBorderRadiusTablet,
		countDownItemBorderRadiusMobile,
		countDownItemBorderRadiusLink,

		digitFontColor,
		digitFontHoverColor,
		digitGlobalTypoSwitcher,
		digitGlobalTypographyData,
		digitGlobalTypoType,
		digitGlobalTypoOption,
		digitFontFamily,
		digitFontSize,
		digitFontSizeUnits,
		digitFontWeight,
		digitFontStyle,
		digitTextTransform,
		digitTextDecoration,
		digitLetterSpacing,
		digitLetterSpacingUnits,
		digitLineHeight,
		digitLineHeightUnits,
		digitFontColorSwitcher,

		labelFontColorSwitcher,
		labelFontColor,
		labelFontHoverColor,
		labelBgColorSwitcher,
		labelBgColor,
		labelBgHoverColor,
		labelGlobalTypoSwitcher,
		labelGlobalTypographyData,
		labelGlobalTypoType,
		labelGlobalTypoOption,
		labelFontFamily,
		labelFontSize,
		labelFontSizeUnits,
		labelFontWeight,
		labelFontStyle,
		labelTextTransform,
		labelTextDecoration,
		labelLetterSpacing,
		labelLetterSpacingUnits,
		labelLineHeight,
		labelLineHeightUnits,

		/** Start Item Wrapper */
		countDownItemWrapperBgFontHoverColor,

		countDownItemWrapperBoxShadowValues,
		countDownItemWrapperBoxShadowCssValue,

		/** Start Background Image */
		countDownItemWrapperBackgroundImageEnabled,
		countDownItemWrapperBackgroundImageUrl,
		countDownItemWrapperBackgroundImageAlt,
		countDownItemWrapperBackgroundImageID,

		countDownItemWrapperBgImagePositionType,
		countDownItemWrapperBgImageAttachmentType,
		countDownItemWrapperBgImageRepeatType,
		countDownItemWrapperBgImageSizeType,
		/** End Background Image */

		countDownItemWrapperBorderTypeUnits,
		countDownItemWrapperBorderTypeDesktop,
		countDownItemWrapperBorderTypeTablet,
		countDownItemWrapperBorderTypeMobile,
		countDownItemWrapperBorderTypeLink,
		countDownItemWrapperBorder,
		countDownItemWrapperBorderColorSwitcher,
		countDownItemWrapperBorderColor,
		countDownItemWrapperBorderHoverColor,
		countDownItemWrapperBorderRadiusUnits,
		countDownItemWrapperBorderRadiusDesktop,
		countDownItemWrapperBorderRadiusTablet,
		countDownItemWrapperBorderRadiusMobile,
		countDownItemWrapperBorderRadiusLink,

		countDownItemWrapperPaddingUnits,
		countDownItemWrapperPaddingDesktop,
		countDownItemWrapperPaddingTablet,
		countDownItemWrapperPaddingMobile,
		countDownItemWrapperPaddingLink,

		countDownItemWrapperMarginUnits,
		countDownItemWrapperMarginDesktop,
		countDownItemWrapperMarginTablet,
		countDownItemWrapperMarginMobile,
		countDownItemWrapperMarginLink,
		/** End Item Wrapper */
		globalBgColorSwitcher,
		globalBackgroundType,
		globalClassicColor,
		globalGradientColor,
		globalCustomGradientSwitcher,
		globalCustomGradientInputValue,
		globalBackgroundColorStyle,
		globalBackgroundImageUrl,
		globalBackgroundImageAlt,
		globalBackgroundImageID,
		globalBackgroundImagePosition,
		globalBackgroundImageAttachment,
		globalBackgroundImageSize,
		globalBackgroundImageRepeat,
		hoverBackgroundType,
		hoverClassicColor,
		hoverGradientColor,
		hoverCustomGradientSwitcher,
		hoverCustomGradientInputValue,
		hoverBackgroundImageUrl,
		hoverBackgroundImageAlt,
		hoverBackgroundImageID,
		hoverBackgroundImagePosition,
		hoverBackgroundImageAttachment,
		hoverBackgroundImageSize,
		hoverBackgroundImageRepeat,

		// Label
		countDownLabelBorderTypeUnits,
		countDownLabelBorderTypeDesktop,
		countDownLabelBorderTypeTablet,
		countDownLabelBorderTypeMobile,
		countDownLabelBorderTypeLink,
		countDownLabelBorder,
		countDownLabelBorderColorSwitcher,
		countDownLabelBorderColor,
		countDownLabelBorderHoverColor,
		countDownLabelBorderRadiusUnits,
		countDownLabelBorderRadiusDesktop,
		countDownLabelBorderRadiusTablet,
		countDownLabelBorderRadiusMobile,
		countDownLabelBorderRadiusLink,
		countDownLabelMarginUnits,
		countDownLabelMarginDesktop,
		countDownLabelMarginTablet,
		countDownLabelMarginMobile,
		countDownLabelMarginLink,
		countDownLabelWidth,
		countDownLabelWidthUnits,
		countDownLabelHeight,
		countDownLabelHeightUnits,
		countDownLabelAlignmentHz,
		countDownLabelAlignmentVr,

		// Digit
		countDownDigitBgColorSwitcher,
		countDownDigitBgColor,
		countDownDigitBgHoverColor,
		countDownDigitBorderTypeUnits,
		countDownDigitBorderTypeDesktop,
		countDownDigitBorderTypeTablet,
		countDownDigitBorderTypeMobile,
		countDownDigitBorderTypeLink,
		countDownDigitBorder,
		countDownDigitBorderColorSwitcher,
		countDownDigitBorderColor,
		countDownDigitBorderHoverColor,
		countDownDigitBorderRadiusUnits,
		countDownDigitBorderRadiusDesktop,
		countDownDigitBorderRadiusTablet,
		countDownDigitBorderRadiusMobile,
		countDownDigitBorderRadiusLink,
		countDownDigitMarginUnits,
		countDownDigitMarginDesktop,
		countDownDigitMarginTablet,
		countDownDigitMarginMobile,
		countDownDigitMarginLink,
		countDownDigitWidth,
		countDownDigitWidthUnits,
		countDownDigitHeight,
		countDownDigitHeightUnits,
		countDownDigitAlignmentHz,
		countDownDigitAlignmentVr,

		// single digit color
		singleDigitFontColorSwitcher,
		daysDigitFontColorSwitcher,
		daysDigitFontColor,
		daysDigitFontHoverColor,
		hoursDigitFontColorSwitcher,
		hoursDigitFontColor,
		hoursDigitFontHoverColor,
		minutesDigitFontColorSwitcher,
		minutesDigitFontColor,
		minutesDigitFontHoverColor,
		secondsDigitFontColorSwitcher,
		secondsDigitFontColor,
		secondsDigitFontHoverColor,

		countDownDesktopSwitcher,
		countDownTabletSwitcher,
		countDownMobileSwitcher,

		countDownGlobalWraperCustomCSS,
		countDownGlobalWraperID,
		countDownGlobalWraperClass,

		// Position
		countDownZIndex,
		countDownOverflow,
		countDownPositionType,
		countDownHZOrientationType,
		countDownVROrientationType,
		countDownHZLeftOffset,
		countDownHZLeftOffsetUnits,
		countDownHZRightOffset,
		countDownHZRightOffsetUnits,
		countDownVRTopOffset,
		countDownVRTopOffsetUnits,
		countDownVRBottomOffset,
		countDownVRBottomOffsetUnits,

		// New attributes from Elementor controls
		advancedCountdownStartDate,
		advancedCountdownUntilText,
		advancedCountdownShowSunIcon,
		advancedCountdownSunIcon,
		advancedCountdownContainerSize,
		advancedCountdownSvgProgressSize,
		advancedCountdownStyle2ProgressBarSize,
		advancedCountdownContainerSizeStyle3,
		advancedCountdownContainerSizeStyle3Container,
		advancedCountdownContainerSizeStyle5,
		advancedCountdownContainerHoverTransition,
		advancedCountdownBorderHoverColor,
		advancedCountdownBorderHoverTransition,
		advancedCountdownBorderRadius,
		advancedCountdownPreset5DashGap,
		advancedCountdownPreset4DashGap,
		advancedCountdownContainerAlignment,
		advancedCountdownStyle2ProgressBarColor,
		advancedCountdownStyle2DashCount,
		advancedCountdownDaysTotalDots,
		advancedCountdownHoursTotalDots,
		advancedCountdownMinutesTotalDots,
		advancedCountdownStyle3ContainerBg,
		advancedCountdownStyle3TimeboxBg,
		advancedCountdownStyle3IndicatorColor,
		advancedCountdownStyle3IndicatorTextColor,
		advancedCountdownStyle3TimeGap,
		advancedCountdownStyle3DashHighlight,
		advancedCountdownStyle3TextGlobalTypoSwitcher,
		advancedCountdownStyle3TextGlobalTypographyData,
		advancedCountdownStyle3TextGlobalTypoType,
		advancedCountdownStyle3TextGlobalTypoOption,
		advancedCountdownStyle3TextFontFamily,
		advancedCountdownStyle3TextFontSize,
		advancedCountdownStyle3TextFontSizeUnits,
		advancedCountdownStyle3TextFontWeight,
		advancedCountdownStyle3TextFontStyle,
		advancedCountdownStyle3TextTextTransform,
		advancedCountdownStyle3TextTextDecoration,
		advancedCountdownStyle3TextLetterSpacing,
		advancedCountdownStyle3TextLetterSpacingUnits,
		advancedCountdownStyle3TextLineHeight,
		advancedCountdownStyle3TextLineHeightUnits,
		advancedCountdownActiveDotColor,
		advancedCountdownInactiveDotColor,
		advancedCountdownDotsThickness,
		advancedCountdownDotsGap,
		advancedCountdownDotsGlowEffect,
		advancedCountdownGlowIntensity,
		advancedCountdownGlowColor,
		advancedCountdownDashColor,
		advancedCountdownDashSize,
		advancedCountdownLabelAlignmentStyle4,
		advancedCountdownLabelTypographyStyle4GlobalTypoSwitcher,
		advancedCountdownLabelTypographyStyle4GlobalTypographyData,
		advancedCountdownLabelTypographyStyle4GlobalTypoType,
		advancedCountdownLabelTypographyStyle4GlobalTypoOption,
		advancedCountdownLabelTypographyStyle4FontFamily,
		advancedCountdownLabelTypographyStyle4FontSize,
		advancedCountdownLabelTypographyStyle4FontSizeUnits,
		advancedCountdownLabelTypographyStyle4FontWeight,
		advancedCountdownLabelTypographyStyle4FontStyle,
		advancedCountdownLabelTypographyStyle4TextTransform,
		advancedCountdownLabelTypographyStyle4TextDecoration,
		advancedCountdownLabelTypographyStyle4LetterSpacing,
		advancedCountdownLabelTypographyStyle4LetterSpacingUnits,
		advancedCountdownLabelTypographyStyle4LineHeight,
		advancedCountdownLabelTypographyStyle4LineHeightUnits,
		advancedCountdownLabelColorStyle4,
		advancedCountdownIconSize,
		advancedCountdownIconColorNormal,
		advancedCountdownIconBgColorNormal,
		advancedCountdownIconColorHover,
		advancedCountdownIconBgColorHover,
		advancedCountdownLabelDays,
		advancedCountdownLabelHours,
		advancedCountdownLabelMinutes,
		advancedCountdownCountdownTypographyGlobalTypoSwitcher,
		advancedCountdownCountdownTypographyGlobalTypographyData,
		advancedCountdownCountdownTypographyGlobalTypoType,
		advancedCountdownCountdownTypographyGlobalTypoOption,
		advancedCountdownCountdownTypographyFontFamily,
		advancedCountdownCountdownTypographyFontSize,
		advancedCountdownCountdownTypographyFontSizeUnits,
		advancedCountdownCountdownTypographyFontWeight,
		advancedCountdownCountdownTypographyFontStyle,
		advancedCountdownCountdownTypographyTextTransform,
		advancedCountdownCountdownTypographyTextDecoration,
		advancedCountdownCountdownTypographyLetterSpacing,
		advancedCountdownCountdownTypographyLetterSpacingUnits,
		advancedCountdownCountdownTypographyLineHeight,
		advancedCountdownCountdownTypographyLineHeightUnits,
		advancedCountdownLabelColorStyleMultiple,
		advancedCountdownTimeValTypographyGlobalTypoSwitcher,
		advancedCountdownTimeValTypographyGlobalTypographyData,
		advancedCountdownTimeValTypographyGlobalTypoType,
		advancedCountdownTimeValTypographyGlobalTypoOption,
		advancedCountdownTimeValTypographyFontFamily,
		advancedCountdownTimeValTypographyFontSize,
		advancedCountdownTimeValTypographyFontSizeUnits,
		advancedCountdownTimeValTypographyFontWeight,
		advancedCountdownTimeValTypographyFontStyle,
		advancedCountdownTimeValTypographyTextTransform,
		advancedCountdownTimeValTypographyTextDecoration,
		advancedCountdownTimeValTypographyLetterSpacing,
		advancedCountdownTimeValTypographyLetterSpacingUnits,
		advancedCountdownTimeValTypographyLineHeight,
		advancedCountdownTimeValTypographyLineHeightUnits,
		advancedCountdownTimeValLabelColor,
		advancedCountdownLabelColorStyle4Digit,
		advancedCountdownTextColorStyle2,
		advancedCountdownTextColorStyle3,
		advancedCountdownSeparatorTypographyGlobalTypoSwitcher,
		advancedCountdownSeparatorTypographyGlobalTypographyData,
		advancedCountdownSeparatorTypographyGlobalTypoType,
		advancedCountdownSeparatorTypographyGlobalTypoOption,
		advancedCountdownSeparatorTypographyFontFamily,
		advancedCountdownSeparatorTypographyFontSize,
		advancedCountdownSeparatorTypographyFontSizeUnits,
		advancedCountdownSeparatorTypographyFontWeight,
		advancedCountdownSeparatorTypographyFontStyle,
		advancedCountdownSeparatorTypographyTextTransform,
		advancedCountdownSeparatorTypographyTextDecoration,
		advancedCountdownSeparatorTypographyLetterSpacing,
		advancedCountdownSeparatorTypographyLetterSpacingUnits,
		advancedCountdownSeparatorTypographyLineHeight,
		advancedCountdownSeparatorTypographyLineHeightUnits,
		advancedCountdownSeparatorColor,
		advancedCountdownSeparatorHoverColor,
		advancedCountdownSeparatorSpacing,
		advancedCountdownSvgBgOverlayColor,
		advancedCountdownSvgBgOverlayOpacity,
		advancedCountdownProgressCircleActiveColor,
		advancedCountdownProgressCircleInactiveColor,
		advancedCountdownSvgStrokeWidth,
		advancedCountdownProgressColorStyle2,
		advancedCountdownSvgStrokeWidthStyle2,
		advancedCountdownFooterTypographyGlobalTypoSwitcher,
		advancedCountdownFooterTypographyGlobalTypographyData,
		advancedCountdownFooterTypographyGlobalTypoType,
		advancedCountdownFooterTypographyGlobalTypoOption,
		advancedCountdownFooterTypographyFontFamily,
		advancedCountdownFooterTypographyFontSize,
		advancedCountdownFooterTypographyFontSizeUnits,
		advancedCountdownFooterTypographyFontWeight,
		advancedCountdownFooterTypographyFontStyle,
		advancedCountdownFooterTypographyTextTransform,
		advancedCountdownFooterTypographyTextDecoration,
		advancedCountdownFooterTypographyLetterSpacing,
		advancedCountdownFooterTypographyLetterSpacingUnits,
		advancedCountdownFooterTypographyLineHeight,
		advancedCountdownFooterTypographyLineHeightUnits,
		advancedCountdownFooterTextColor,
		advancedCountdownFooterBgColor,
		advancedCountdownFooterTextColorHover,
		advancedCountdownFooterBgColorHover,
		advancedCountdownFooterBgCustomStyle2,
		advancedCountdownFooterPadding,
		advancedCountdownFooterMargin,
	} = attributes;

	{
		/* Countdown Item Wrapper Control */
	}
	const countDownItemWrapperBorderTypeGetDesktop = `${countDownItemWrapperBorderTypeDesktop?.top}${countDownItemWrapperBorderTypeUnits?.Desktop} ${countDownItemWrapperBorderTypeDesktop?.right}${countDownItemWrapperBorderTypeUnits?.Desktop} ${countDownItemWrapperBorderTypeDesktop?.bottom}${countDownItemWrapperBorderTypeUnits?.Desktop} ${countDownItemWrapperBorderTypeDesktop?.left}${countDownItemWrapperBorderTypeUnits?.Desktop}`;
	const countDownItemWrapperBorderTypeGetTablet = `${countDownItemWrapperBorderTypeTablet?.top}${countDownItemWrapperBorderTypeUnits?.Tablet} ${countDownItemWrapperBorderTypeTablet?.right}${countDownItemWrapperBorderTypeUnits?.Tablet} ${countDownItemWrapperBorderTypeTablet?.bottom}${countDownItemWrapperBorderTypeUnits?.Tablet} ${countDownItemWrapperBorderTypeTablet?.left}${countDownItemWrapperBorderTypeUnits?.Tablet}`;
	const countDownItemWrapperBorderTypeGetMobile = `${countDownItemWrapperBorderTypeMobile?.top}${countDownItemWrapperBorderTypeUnits?.Mobile} ${countDownItemWrapperBorderTypeMobile?.right}${countDownItemWrapperBorderTypeUnits?.Mobile} ${countDownItemWrapperBorderTypeMobile?.bottom}${countDownItemWrapperBorderTypeUnits?.Mobile} ${countDownItemWrapperBorderTypeMobile?.left}${countDownItemWrapperBorderTypeUnits?.Mobile}`;

	const countDownItemWrapperBorderRadiusGetDesktop = `${countDownItemWrapperBorderRadiusDesktop?.top}${countDownItemWrapperBorderRadiusUnits?.Desktop} ${countDownItemWrapperBorderRadiusDesktop?.right}${countDownItemWrapperBorderRadiusUnits?.Desktop} ${countDownItemWrapperBorderRadiusDesktop?.bottom}${countDownItemWrapperBorderRadiusUnits?.Desktop} ${countDownItemWrapperBorderRadiusDesktop?.left}${countDownItemWrapperBorderRadiusUnits?.Desktop}`;
	const countDownItemWrapperBorderRadiusGetTablet = `${countDownItemWrapperBorderRadiusTablet?.top}${countDownItemWrapperBorderRadiusUnits?.Tablet} ${countDownItemWrapperBorderRadiusTablet?.right}${countDownItemWrapperBorderRadiusUnits?.Tablet} ${countDownItemWrapperBorderRadiusTablet?.bottom}${countDownItemWrapperBorderRadiusUnits?.Tablet} ${countDownItemWrapperBorderRadiusTablet?.left}${countDownItemWrapperBorderRadiusUnits?.Tablet}`;
	const countDownItemWrapperBorderRadiusGetMobile = `${countDownItemWrapperBorderRadiusMobile?.top}${countDownItemWrapperBorderRadiusUnits?.Mobile} ${countDownItemWrapperBorderRadiusMobile?.right}${countDownItemWrapperBorderRadiusUnits?.Mobile} ${countDownItemWrapperBorderRadiusMobile?.bottom}${countDownItemWrapperBorderRadiusUnits?.Mobile} ${countDownItemWrapperBorderRadiusMobile?.left}${countDownItemWrapperBorderRadiusUnits?.Mobile}`;

	const countDownItemWrapperPaddingGetDesktop = `${countDownItemWrapperPaddingDesktop?.top}${countDownItemWrapperPaddingUnits?.Desktop} ${countDownItemWrapperPaddingDesktop?.right}${countDownItemWrapperPaddingUnits?.Desktop} ${countDownItemWrapperPaddingDesktop?.bottom}${countDownItemWrapperPaddingUnits?.Desktop} ${countDownItemWrapperPaddingDesktop?.left}${countDownItemWrapperPaddingUnits?.Desktop}`;
	const countDownItemWrapperPaddingGetTablet = `${countDownItemWrapperPaddingTablet?.top}${countDownItemWrapperPaddingUnits?.Tablet} ${countDownItemWrapperPaddingTablet?.right}${countDownItemWrapperPaddingUnits?.Tablet} ${countDownItemWrapperPaddingTablet?.bottom}${countDownItemWrapperPaddingUnits?.Tablet} ${countDownItemWrapperPaddingTablet?.left}${countDownItemWrapperPaddingUnits?.Tablet}`;
	const countDownItemWrapperPaddingGetMobile = `${countDownItemWrapperPaddingMobile?.top}${countDownItemWrapperPaddingUnits?.Mobile} ${countDownItemWrapperPaddingMobile?.right}${countDownItemWrapperPaddingUnits?.Mobile} ${countDownItemWrapperPaddingMobile?.bottom}${countDownItemWrapperPaddingUnits?.Mobile} ${countDownItemWrapperPaddingMobile?.left}${countDownItemWrapperPaddingUnits?.Mobile}`;

	const countDownItemWrapperMarginGetDesktop = `${countDownItemWrapperMarginDesktop?.top}${countDownItemWrapperMarginUnits?.Desktop} ${countDownItemWrapperMarginDesktop?.right}${countDownItemWrapperMarginUnits?.Desktop} ${countDownItemWrapperMarginDesktop?.bottom}${countDownItemWrapperMarginUnits?.Desktop} ${countDownItemWrapperMarginDesktop?.left}${countDownItemWrapperMarginUnits?.Desktop}`;
	const countDownItemWrapperMarginGetTablet = `${countDownItemWrapperMarginTablet?.top}${countDownItemWrapperMarginUnits?.Tablet} ${countDownItemWrapperMarginTablet?.right}${countDownItemWrapperMarginUnits?.Tablet} ${countDownItemWrapperMarginTablet?.bottom}${countDownItemWrapperMarginUnits?.Tablet} ${countDownItemWrapperMarginTablet?.left}${countDownItemWrapperMarginUnits?.Tablet}`;
	const countDownItemWrapperMarginGetMobile = `${countDownItemWrapperMarginMobile?.top}${countDownItemWrapperMarginUnits?.Mobile} ${countDownItemWrapperMarginMobile?.right}${countDownItemWrapperMarginUnits?.Mobile} ${countDownItemWrapperMarginMobile?.bottom}${countDownItemWrapperMarginUnits?.Mobile} ${countDownItemWrapperMarginMobile?.left}${countDownItemWrapperMarginUnits?.Mobile}`;

	{
		/* Countdown Item Control */
	}
	const countDownItemBorderTypeGetDesktop = `${countDownItemBorderTypeDesktop?.top}${countDownItemBorderTypeUnits?.Desktop} ${countDownItemBorderTypeDesktop?.right}${countDownItemBorderTypeUnits?.Desktop} ${countDownItemBorderTypeDesktop?.bottom}${countDownItemBorderTypeUnits?.Desktop} ${countDownItemBorderTypeDesktop?.left}${countDownItemBorderTypeUnits?.Desktop}`;
	const countDownItemBorderTypeGetTablet = `${countDownItemBorderTypeTablet?.top}${countDownItemBorderTypeUnits?.Tablet} ${countDownItemBorderTypeTablet?.right}${countDownItemBorderTypeUnits?.Tablet} ${countDownItemBorderTypeTablet?.bottom}${countDownItemBorderTypeUnits?.Tablet} ${countDownItemBorderTypeTablet?.left}${countDownItemBorderTypeUnits?.Tablet}`;
	const countDownItemBorderTypeGetMobile = `${countDownItemBorderTypeMobile?.top}${countDownItemBorderTypeUnits?.Mobile} ${countDownItemBorderTypeMobile?.right}${countDownItemBorderTypeUnits?.Mobile} ${countDownItemBorderTypeMobile?.bottom}${countDownItemBorderTypeUnits?.Mobile} ${countDownItemBorderTypeMobile?.left}${countDownItemBorderTypeUnits?.Mobile}`;

	const countDownItemBorderRadiusGetDesktop = `${countDownItemBorderRadiusDesktop?.top}${countDownItemBorderRadiusUnits?.Desktop} ${countDownItemBorderRadiusDesktop?.right}${countDownItemBorderRadiusUnits?.Desktop} ${countDownItemBorderRadiusDesktop?.bottom}${countDownItemBorderRadiusUnits?.Desktop} ${countDownItemBorderRadiusDesktop?.left}${countDownItemBorderRadiusUnits?.Desktop}`;
	const countDownItemBorderRadiusGetTablet = `${countDownItemBorderRadiusTablet?.top}${countDownItemBorderRadiusUnits?.Tablet} ${countDownItemBorderRadiusTablet?.right}${countDownItemBorderRadiusUnits?.Tablet} ${countDownItemBorderRadiusTablet?.bottom}${countDownItemBorderRadiusUnits?.Tablet} ${countDownItemBorderRadiusTablet?.left}${countDownItemBorderRadiusUnits?.Tablet}`;
	const countDownItemBorderRadiusGetMobile = `${countDownItemBorderRadiusMobile?.top}${countDownItemBorderRadiusUnits?.Mobile} ${countDownItemBorderRadiusMobile?.right}${countDownItemBorderRadiusUnits?.Mobile} ${countDownItemBorderRadiusMobile?.bottom}${countDownItemBorderRadiusUnits?.Mobile} ${countDownItemBorderRadiusMobile?.left}${countDownItemBorderRadiusUnits?.Mobile}`;

	{
		/* Countdown Item Label Control */
	}
	const countDownLabelBorderTypeGetDesktop = `${countDownLabelBorderTypeDesktop?.top}${countDownLabelBorderTypeUnits?.Desktop} ${countDownLabelBorderTypeDesktop?.right}${countDownLabelBorderTypeUnits?.Desktop} ${countDownLabelBorderTypeDesktop?.bottom}${countDownLabelBorderTypeUnits?.Desktop} ${countDownLabelBorderTypeDesktop?.left}${countDownLabelBorderTypeUnits?.Desktop}`;
	const countDownLabelBorderTypeGetTablet = `${countDownLabelBorderTypeTablet?.top}${countDownLabelBorderTypeUnits?.Tablet} ${countDownLabelBorderTypeTablet?.right}${countDownLabelBorderTypeUnits?.Tablet} ${countDownLabelBorderTypeTablet?.bottom}${countDownLabelBorderTypeUnits?.Tablet} ${countDownLabelBorderTypeTablet?.left}${countDownLabelBorderTypeUnits?.Tablet}`;
	const countDownLabelBorderTypeGetMobile = `${countDownLabelBorderTypeMobile?.top}${countDownLabelBorderTypeUnits?.Mobile} ${countDownLabelBorderTypeMobile?.right}${countDownLabelBorderTypeUnits?.Mobile} ${countDownLabelBorderTypeMobile?.bottom}${countDownLabelBorderTypeUnits?.Mobile} ${countDownLabelBorderTypeMobile?.left}${countDownLabelBorderTypeUnits?.Mobile}`;

	const countDownLabelBorderRadiusGetDesktop = `${countDownLabelBorderRadiusDesktop?.top}${countDownLabelBorderRadiusUnits?.Desktop} ${countDownLabelBorderRadiusDesktop?.right}${countDownLabelBorderRadiusUnits?.Desktop} ${countDownLabelBorderRadiusDesktop?.bottom}${countDownLabelBorderRadiusUnits?.Desktop} ${countDownLabelBorderRadiusDesktop?.left}${countDownLabelBorderRadiusUnits?.Desktop}`;
	const countDownLabelBorderRadiusGetTablet = `${countDownLabelBorderRadiusTablet?.top}${countDownLabelBorderRadiusUnits?.Tablet} ${countDownLabelBorderRadiusTablet?.right}${countDownLabelBorderRadiusUnits?.Tablet} ${countDownLabelBorderRadiusTablet?.bottom}${countDownLabelBorderRadiusUnits?.Tablet} ${countDownLabelBorderRadiusTablet?.left}${countDownLabelBorderRadiusUnits?.Tablet}`;
	const countDownLabelBorderRadiusGetMobile = `${countDownLabelBorderRadiusMobile?.top}${countDownLabelBorderRadiusUnits?.Mobile} ${countDownLabelBorderRadiusMobile?.right}${countDownLabelBorderRadiusUnits?.Mobile} ${countDownLabelBorderRadiusMobile?.bottom}${countDownLabelBorderRadiusUnits?.Mobile} ${countDownLabelBorderRadiusMobile?.left}${countDownLabelBorderRadiusUnits?.Mobile}`;

	const countDownLabelMarginGetDesktop = `${countDownLabelMarginDesktop?.top}${countDownLabelMarginUnits?.Desktop} ${countDownLabelMarginDesktop?.right}${countDownLabelMarginUnits?.Desktop} ${countDownLabelMarginDesktop?.bottom}${countDownLabelMarginUnits?.Desktop} ${countDownLabelMarginDesktop?.left}${countDownLabelMarginUnits?.Desktop}`;
	const countDownLabelMarginGetTablet = `${countDownLabelMarginTablet?.top}${countDownLabelMarginUnits?.Tablet} ${countDownLabelMarginTablet?.right}${countDownLabelMarginUnits?.Tablet} ${countDownLabelMarginTablet?.bottom}${countDownLabelMarginUnits?.Tablet} ${countDownLabelMarginTablet?.left}${countDownLabelMarginUnits?.Tablet}`;
	const countDownLabelMarginGetMobile = `${countDownLabelMarginMobile?.top}${countDownLabelMarginUnits?.Mobile} ${countDownLabelMarginMobile?.right}${countDownLabelMarginUnits?.Mobile} ${countDownLabelMarginMobile?.bottom}${countDownLabelMarginUnits?.Mobile} ${countDownLabelMarginMobile?.left}${countDownLabelMarginUnits?.Mobile}`;

	{
		/* Countdown Item Digit Control */
	}
	const countDownDigitBorderTypeGetDesktop = `${countDownDigitBorderTypeDesktop?.top}${countDownDigitBorderTypeUnits?.Desktop} ${countDownDigitBorderTypeDesktop?.right}${countDownDigitBorderTypeUnits?.Desktop} ${countDownDigitBorderTypeDesktop?.bottom}${countDownDigitBorderTypeUnits?.Desktop} ${countDownDigitBorderTypeDesktop?.left}${countDownDigitBorderTypeUnits?.Desktop}`;
	const countDownDigitBorderTypeGetTablet = `${countDownDigitBorderTypeTablet?.top}${countDownDigitBorderTypeUnits?.Tablet} ${countDownDigitBorderTypeTablet?.right}${countDownDigitBorderTypeUnits?.Tablet} ${countDownDigitBorderTypeTablet?.bottom}${countDownDigitBorderTypeUnits?.Tablet} ${countDownDigitBorderTypeTablet?.left}${countDownDigitBorderTypeUnits?.Tablet}`;
	const countDownDigitBorderTypeGetMobile = `${countDownDigitBorderTypeMobile?.top}${countDownDigitBorderTypeUnits?.Mobile} ${countDownDigitBorderTypeMobile?.right}${countDownDigitBorderTypeUnits?.Mobile} ${countDownDigitBorderTypeMobile?.bottom}${countDownDigitBorderTypeUnits?.Mobile} ${countDownDigitBorderTypeMobile?.left}${countDownDigitBorderTypeUnits?.Mobile}`;

	const countDownDigitBorderRadiusGetDesktop = `${countDownDigitBorderRadiusDesktop?.top}${countDownDigitBorderRadiusUnits?.Desktop} ${countDownDigitBorderRadiusDesktop?.right}${countDownDigitBorderRadiusUnits?.Desktop} ${countDownDigitBorderRadiusDesktop?.bottom}${countDownDigitBorderRadiusUnits?.Desktop} ${countDownDigitBorderRadiusDesktop?.left}${countDownDigitBorderRadiusUnits?.Desktop}`;
	const countDownDigitBorderRadiusGetTablet = `${countDownDigitBorderRadiusTablet?.top}${countDownDigitBorderRadiusUnits?.Tablet} ${countDownDigitBorderRadiusTablet?.right}${countDownDigitBorderRadiusUnits?.Tablet} ${countDownDigitBorderRadiusTablet?.bottom}${countDownDigitBorderRadiusUnits?.Tablet} ${countDownDigitBorderRadiusTablet?.left}${countDownDigitBorderRadiusUnits?.Tablet}`;
	const countDownDigitBorderRadiusGetMobile = `${countDownDigitBorderRadiusMobile?.top}${countDownDigitBorderRadiusUnits?.Mobile} ${countDownDigitBorderRadiusMobile?.right}${countDownDigitBorderRadiusUnits?.Mobile} ${countDownDigitBorderRadiusMobile?.bottom}${countDownDigitBorderRadiusUnits?.Mobile} ${countDownDigitBorderRadiusMobile?.left}${countDownDigitBorderRadiusUnits?.Mobile}`;

	const countDownDigitMarginGetDesktop = `${countDownDigitMarginDesktop?.top}${countDownDigitMarginUnits?.Desktop} ${countDownDigitMarginDesktop?.right}${countDownDigitMarginUnits?.Desktop} ${countDownDigitMarginDesktop?.bottom}${countDownDigitMarginUnits?.Desktop} ${countDownDigitMarginDesktop?.left}${countDownDigitMarginUnits?.Desktop}`;
	const countDownDigitMarginGetTablet = `${countDownDigitMarginTablet?.top}${countDownDigitMarginUnits?.Tablet} ${countDownDigitMarginTablet?.right}${countDownDigitMarginUnits?.Tablet} ${countDownDigitMarginTablet?.bottom}${countDownDigitMarginUnits?.Tablet} ${countDownDigitMarginTablet?.left}${countDownDigitMarginUnits?.Tablet}`;
	const countDownDigitMarginGetMobile = `${countDownDigitMarginMobile?.top}${countDownDigitMarginUnits?.Mobile} ${countDownDigitMarginMobile?.right}${countDownDigitMarginUnits?.Mobile} ${countDownDigitMarginMobile?.bottom}${countDownDigitMarginUnits?.Mobile} ${countDownDigitMarginMobile?.left}${countDownDigitMarginUnits?.Mobile}`;

	const countDownStyle = `
          .fb-count-down-main-wrapper.${blockID} {
               ${
									countDownPositionType === "default"
										? `position: relative;`
										: ""
								}
               ${
									countDownPositionType !== "default" &&
									countDownPositionType !== "relative"
										? `width: 100%;`
										: ""
								}
               ${
									countDownPositionType !== "default"
										? `position: ${countDownPositionType};`
										: ""
								}
               ${
									countDownPositionType !== "default" &&
									countDownPositionType !== "relative" &&
									countDownHZOrientationType === "left" &&
									countDownHZLeftOffset?.Desktop
										? `left: ${countDownHZLeftOffset?.Desktop}${countDownHZLeftOffsetUnits?.Desktop};`
										: ""
								}
               ${
									countDownPositionType !== "default" &&
									countDownPositionType !== "relative" &&
									countDownHZOrientationType === "right" &&
									countDownHZRightOffset?.Desktop
										? `right: ${countDownHZRightOffset?.Desktop}${countDownHZRightOffsetUnits?.Desktop};`
										: ""
								}
               ${
									countDownPositionType !== "default" &&
									countDownPositionType !== "relative" &&
									countDownVROrientationType === "top" &&
									countDownVRTopOffset?.Desktop
										? `top: ${countDownVRTopOffset?.Desktop}${countDownVRTopOffsetUnits?.Desktop};`
										: ""
								}
               ${
									countDownPositionType !== "default" &&
									countDownPositionType !== "relative" &&
									countDownVROrientationType === "bottom" &&
									countDownVRBottomOffset?.Desktop
										? `bottom: ${countDownVRBottomOffset?.Desktop}${countDownVRBottomOffsetUnits?.Desktop};`
										: ""
								}
               ${
									countDownZIndex?.Desktop
										? `z-index: ${countDownZIndex?.Desktop};`
										: ""
								}
               ${
									countDownOverflow !== "default"
										? `overflow: ${countDownOverflow};`
										: ""
								}
          }

          .fb-count-down-wrapper.${blockID} {
               ${countDownLayoutType === "flex" ? `display: flex;` : ""}
               ${
									countDownLayoutType === "flex" && countDownFlexWrap === true
										? `flex-wrap: wrap;`
										: ""
								}
               ${countDownLayoutType === "grid" ? `display: grid;` : ""}
               ${
									countDownLayoutType === "grid"
										? `grid-template-columns: repeat(${countDownGrid?.Desktop}, 1fr);`
										: ""
								}
               ${
									countDownItemGap?.Desktop
										? `gap: ${countDownItemGap?.Desktop}${countDownItemGapUnits?.Desktop};`
										: ""
								}
               ${
									countDownLayoutAlignment
										? `justify-content: ${countDownLayoutAlignment};`
										: ""
								}

               ${
									(countDownPresetStyle === "style-1" ||
										countDownPresetStyle === "style-2" ||
										countDownPresetStyle === "style-4") &&
									advancedCountdownContainerSize?.Desktop
										? `width: ${advancedCountdownContainerSize?.Desktop}${advancedCountdownContainerSize?.unit};`
										: ""
								}
               ${
									countDownPresetStyle === "style-3" &&
									advancedCountdownContainerSizeStyle3?.Desktop
										? `width: ${advancedCountdownContainerSizeStyle3?.Desktop}${advancedCountdownContainerSizeStyle3?.unit}; height: ${advancedCountdownContainerSizeStyle3?.Desktop}${advancedCountdownContainerSizeStyle3?.unit};`
										: ""
								}
               ${
									countDownPresetStyle === "style-5" &&
									advancedCountdownContainerSizeStyle5?.Desktop
										? `width: ${advancedCountdownContainerSizeStyle5?.Desktop}${advancedCountdownContainerSizeStyle5?.unit}; height: ${advancedCountdownContainerSizeStyle5?.Desktop}${advancedCountdownContainerSizeStyle5?.unit} !important;`
										: ""
								}
               ${
									countDownItemWrapperBorder
										? `border: ${countDownItemWrapperBorder};`
										: ""
								}
               ${
									countDownItemWrapperBorderTypeGetDesktop &&
									countDownItemWrapperBorderTypeDesktop?.top
										? `border-width: ${countDownItemWrapperBorderTypeGetDesktop};`
										: ""
								}
               ${
									countDownItemWrapperBorderRadiusGetDesktop &&
									countDownItemWrapperBorderRadiusDesktop?.top
										? `border-radius: ${countDownItemWrapperBorderRadiusGetDesktop};`
										: ""
								}
               ${
									countDownItemWrapperBorderColor
										? `border-color: ${countDownItemWrapperBorderColor};`
										: ""
								}
            
               ${
									globalBackgroundType === "gradient"
										? globalCustomGradientSwitcher &&
										  globalCustomGradientInputValue
											? `background: ${globalCustomGradientInputValue};`
											: globalGradientColor
											? `background: ${globalGradientColor};`
											: `background: ${globalClassicColor};`
										: globalBackgroundImageUrl &&
										  globalBackgroundImageUrl !== "null"
										? `
                   ${
											globalBackgroundImageUrl
												? `background-image: url(${globalBackgroundImageUrl});`
												: ""
										}
                   ${
											globalBackgroundImagePosition
												? `background-position: ${globalBackgroundImagePosition};`
												: ""
										}
                   ${
											globalBackgroundImageAttachment
												? `background-attachment: ${globalBackgroundImageAttachment};`
												: ""
										}
                   ${
											globalBackgroundImageRepeat
												? `background-repeat: ${globalBackgroundImageRepeat};`
												: ""
										}
                   ${
											globalBackgroundImageSize
												? `background-size: ${globalBackgroundImageSize};`
												: ""
										} 
                    `
										: globalClassicColor
										? `background: ${globalClassicColor};`
										: ""
								}

               ${
									countDownItemWrapperPaddingGetDesktop &&
									countDownItemWrapperPaddingDesktop?.top
										? `padding: ${countDownItemWrapperPaddingGetDesktop};`
										: ""
								} 
               ${
									advancedCountdownFooterPadding?.Desktop
										? `padding: ${advancedCountdownFooterPadding?.top}${advancedCountdownFooterPadding?.unit} ${advancedCountdownFooterPadding?.right}${advancedCountdownFooterPadding?.unit} ${advancedCountdownFooterPadding?.bottom}${advancedCountdownFooterPadding?.unit} ${advancedCountdownFooterPadding?.left}${advancedCountdownFooterPadding?.unit};`
										: ""
								}
${
	advancedCountdownFooterMargin?.Desktop
		? `margin: ${advancedCountdownFooterMargin?.top}${advancedCountdownFooterMargin?.unit} ${advancedCountdownFooterMargin?.right}${advancedCountdownFooterMargin?.unit} ${advancedCountdownFooterMargin?.bottom}${advancedCountdownFooterMargin?.unit} ${advancedCountdownFooterMargin?.left}${advancedCountdownFooterMargin?.unit};`
		: ""
}
${
	countDownItemWrapperMarginGetDesktop && countDownItemWrapperMarginDesktop?.top
		? `margin: ${countDownItemWrapperMarginGetDesktop};`
		: ""
}
               transition: all .3s ease-in-out;
          }

          .fb-count-down-wrapper.${blockID}:hover{
               ${
									hoverBackgroundType === "gradient"
										? hoverCustomGradientSwitcher &&
										  hoverCustomGradientInputValue
											? `background: ${hoverCustomGradientInputValue};`
											: hoverGradientColor
											? `background: ${hoverGradientColor};`
											: `background: ${hoverClassicColor};`
										: hoverBackgroundImageUrl &&
										  hoverBackgroundImageUrl !== "null"
										? `
                    ${
											hoverBackgroundImageUrl
												? `background-image: url(${hoverBackgroundImageUrl});`
												: ""
										}
                    ${
											hoverBackgroundImagePosition
												? `background-position: ${hoverBackgroundImagePosition};`
												: ""
										}
                    ${
											hoverBackgroundImageAttachment
												? `background-attachment: ${hoverBackgroundImageAttachment};`
												: ""
										}
                    ${
											hoverBackgroundImageRepeat
												? `background-repeat: ${hoverBackgroundImageRepeat};`
												: ""
										}
                    ${
											hoverBackgroundImageSize
												? `background-size: ${hoverBackgroundImageSize};`
												: ""
										} 
                    `
										: hoverClassicColor
										? `background: ${hoverClassicColor};`
										: ""
								}
               ${
									countDownItemWrapperBorderHoverColor
										? `border-color: ${countDownItemWrapperBorderHoverColor};`
										: ""
								} 
               ${
									advancedCountdownBorderHoverColor
										? `border-color: ${advancedCountdownBorderHoverColor} !important;`
										: ""
								}
               transition: all .3s ease-in-out;
          }

          .fb-count-down-wrapper.${blockID} .fb-count-down-item {
               ${
									countDownItemBgColor
										? `background: ${countDownItemBgColor};`
										: ""
								}
               ${
									countDownItemSize?.Desktop
										? `width: ${countDownItemSize?.Desktop}${countDownItemSizeUnits?.Desktop};`
										: ""
								}
               ${
									countDownItemSizeHeight === true && countDownItemSize?.Desktop
										? `height: ${countDownItemSize?.Desktop}${countDownItemSizeUnits?.Desktop};`
										: ""
								}
               ${
									countDownItemBorder
										? `border-style: ${countDownItemBorder};`
										: ""
								}
               ${
									countDownItemBorderTypeGetDesktop &&
									countDownItemBorderTypeDesktop?.top
										? `border-width: ${countDownItemBorderTypeGetDesktop};`
										: ""
								}
               ${
									countDownItemBorderColor
										? `border-color: ${countDownItemBorderColor};`
										: ""
								}
               ${
									advancedCountdownBorderRadius?.Desktop
										? `border-radius: ${advancedCountdownBorderRadius?.top}${advancedCountdownBorderRadius?.unit} ${advancedCountdownBorderRadius?.right}${advancedCountdownBorderRadius?.unit} ${advancedCountdownBorderRadius?.bottom}${advancedCountdownBorderRadius?.unit} ${advancedCountdownBorderRadius?.left}${advancedCountdownBorderRadius?.unit};`
										: ""
								}
               ${
									countDownItemBorderRadiusGetDesktop &&
									countDownItemBorderRadiusDesktop?.top
										? `border-radius: ${countDownItemBorderRadiusGetDesktop};`
										: ""
								}
               transition: all .3s ease-in-out;
          }
          .fb-count-down-wrapper.${blockID} .fb-count-down-item:hover {
               ${
									countDownItemBgHoverColor
										? `background: ${countDownItemBgHoverColor};`
										: ""
								}
               ${
									countDownItemBorderHoverColor
										? `border-color: ${countDownItemBorderHoverColor};`
										: ""
								}
               transition: all .3s ease-in-out;
          }
          ${
						countDownPresetStyle === "style-1" ||
						countDownPresetStyle === "style-2"
							? `
               .fb-count-down-wrapper.${blockID} { transition: all ${advancedCountdownContainerHoverTransition?.Desktop}s ease; }
               .fb-count-down-wrapper.${blockID} { transition: border-color ${advancedCountdownBorderHoverTransition?.Desktop}s ease, border-width ${advancedCountdownBorderHoverTransition?.Desktop}s ease; }
               }:     `
							: ""
					}
          .fb-count-down-wrapper.${blockID} .fb-count-down-item::before {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            ${
							countDownSeparatorEnabled
								? `
                ${countDownSeparatorType === "colon" ? `content: ':';` : ""}
                ${countDownSeparatorType === "line" ? `content: '|';` : ""}
                ${countDownSeparatorType === "slash" ? `content: '/';` : ""}
                ${
									countDownSeparatorType === "custom"
										? `content: '${countDownSeparatorCustom}';`
										: ""
								}
               ${
									countDownSeparatorVerticalGap?.Desktop
										? `top: ${countDownSeparatorVerticalGap?.Desktop}${countDownSeparatorVerticalGapUnits?.Desktop};`
										: ""
								}
               ${
									countDownSeparatorHorizontalGap?.Desktop
										? `right: -${countDownSeparatorHorizontalGap?.Desktop}${countDownSeparatorHorizontalGapUnits?.Desktop};`
										: ""
								}
               ${
									countDownSeparatorFontColor
										? `color: ${countDownSeparatorFontColor};`
										: ""
								}

               ${
									countDownSeparatorGlobalTypoSwitcher?.fontFamily === true &&
									countDownSeparatorGlobalTypographyData?.fontFamily
										? `font-family: ${countDownSeparatorGlobalTypographyData?.fontFamily};`
										: ""
								}
               ${
									countDownSeparatorGlobalTypoSwitcher?.fontSize === true &&
									countDownSeparatorGlobalTypographyData?.fontSize
										? `font-size: ${countDownSeparatorGlobalTypographyData?.fontSize};`
										: ""
								}
               ${
									countDownSeparatorGlobalTypoSwitcher?.fontWeight === true &&
									countDownSeparatorGlobalTypographyData?.fontWeight
										? `font-weight: ${countDownSeparatorGlobalTypographyData?.fontWeight};`
										: ""
								}
               ${
									countDownSeparatorGlobalTypoSwitcher?.fontStyle === true &&
									countDownSeparatorGlobalTypographyData?.fontStyle
										? `font-style: ${countDownSeparatorGlobalTypographyData?.fontStyle};`
										: ""
								}
               ${
									countDownSeparatorGlobalTypoSwitcher?.textTransform ===
										true &&
									countDownSeparatorGlobalTypographyData?.textTransform
										? `text-transform: ${countDownSeparatorGlobalTypographyData?.textTransform};`
										: ""
								}
               ${
									countDownSeparatorGlobalTypoSwitcher?.textDecoration ===
										true &&
									countDownSeparatorGlobalTypographyData?.textDecoration
										? `text-decoration: ${countDownSeparatorGlobalTypographyData?.textDecoration};`
										: ""
								}
               ${
									countDownSeparatorGlobalTypoSwitcher?.letterSpacing ===
										true &&
									countDownSeparatorGlobalTypographyData?.letterSpacing
										? `letter-spacing: ${countDownSeparatorGlobalTypographyData?.letterSpacing};`
										: ""
								}
               ${
									countDownSeparatorGlobalTypoSwitcher?.lineHeight === true &&
									countDownSeparatorGlobalTypographyData?.lineHeight
										? `line-height: ${countDownSeparatorGlobalTypographyData?.lineHeight};`
										: ""
								}

               ${
									countDownSeparatorGlobalTypoSwitcher?.fontFamily === false &&
									countDownSeparatorFontFamily
										? `font-family: ${countDownSeparatorFontFamily};`
										: ""
								}
               ${
									countDownSeparatorGlobalTypoSwitcher?.fontSize === false &&
									countDownSeparatorFontSize?.Desktop
										? `font-size: ${countDownSeparatorFontSize?.Desktop}${countDownSeparatorFontSizeUnits?.Desktop};`
										: ""
								}
               ${
									countDownSeparatorGlobalTypoSwitcher?.fontWeight === false &&
									countDownSeparatorFontWeight
										? `font-weight: ${countDownSeparatorFontWeight};`
										: ""
								}
               ${
									countDownSeparatorGlobalTypoSwitcher?.fontStyle === false &&
									countDownSeparatorFontStyle
										? `font-style: ${countDownSeparatorFontStyle};`
										: ""
								}
               ${
									countDownSeparatorGlobalTypoSwitcher?.textTransform ===
										false && countDownSeparatorTextTransform
										? `text-transform: ${countDownSeparatorTextTransform};`
										: ""
								}
               ${
									countDownSeparatorGlobalTypoSwitcher?.textDecoration ===
										false && countDownSeparatorTextDecoration
										? `text-decoration: ${countDownSeparatorTextDecoration};`
										: ""
								}
               ${
									countDownSeparatorGlobalTypoSwitcher?.letterSpacing ===
										false && countDownSeparatorLetterSpacing?.Desktop
										? `letter-spacing: ${countDownSeparatorLetterSpacing?.Desktop}${countDownSeparatorLetterSpacingUnits?.Desktop};`
										: ""
								}
               ${
									countDownSeparatorGlobalTypoSwitcher?.lineHeight === false &&
									countDownSeparatorLineHeight?.Desktop
										? `line-height: ${countDownSeparatorLineHeight?.Desktop}${countDownSeparatorLineHeightUnits?.Desktop};`
										: ""
								}
                `
								: ""
						}
          ${
						(countDownPresetStyle === "style-1" ||
							countDownPresetStyle === "style-2") &&
						advancedCountdownSeparatorColor
							? `color: ${advancedCountdownSeparatorColor} !important;`
							: ""
					}
               transition: all .3s ease-in-out;
        }
        .fb-count-down-wrapper.${blockID} .fb-count-down-item:hover::before {
            ${
							countDownSeparatorFontHoverColor
								? `color: ${countDownSeparatorFontHoverColor};`
								: ""
						}
            transition: all .3s ease-in-out;
        }
        .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time {
            display: flex;
            justify-content: center;
            align-items: center;
            ${
							countDownDigitAlignmentHz === "left"
								? `justify-content: start;`
								: ""
						}
            ${
							countDownDigitAlignmentHz === "center"
								? `justify-content: center;`
								: ""
						}
            ${
							countDownDigitAlignmentHz === "right"
								? `justify-content: end;`
								: ""
						}
            ${countDownDigitAlignmentVr === "left" ? `align-items: start;` : ""}
            ${
							countDownDigitAlignmentVr === "center"
								? `align-items: center;`
								: ""
						}
            ${countDownDigitAlignmentVr === "right" ? `align-items: end;` : ""}
            ${
							countDownDigitBgColor
								? `background-color: ${countDownDigitBgColor};`
								: ""
						}
            ${digitFontColor ? `color: ${digitFontColor};` : ""}

            ${
							digitGlobalTypoSwitcher?.fontFamily === true &&
							digitGlobalTypographyData?.fontFamily
								? `font-family: ${digitGlobalTypographyData?.fontFamily};`
								: ""
						}
            ${
							digitGlobalTypoSwitcher?.fontSize === true &&
							digitGlobalTypographyData?.fontSize
								? `font-size: ${digitGlobalTypographyData?.fontSize};`
								: ""
						}
            ${
							digitGlobalTypoSwitcher?.fontWeight === true &&
							digitGlobalTypographyData?.fontWeight
								? `font-weight: ${digitGlobalTypographyData?.fontWeight};`
								: ""
						}
            ${
							digitGlobalTypoSwitcher?.fontStyle === true &&
							digitGlobalTypographyData?.fontStyle
								? `font-style: ${digitGlobalTypographyData?.fontStyle};`
								: ""
						}
            ${
							digitGlobalTypoSwitcher?.textTransform === true &&
							digitGlobalTypographyData?.textTransform
								? `text-transform: ${digitGlobalTypographyData?.textTransform};`
								: ""
						}
            ${
							digitGlobalTypoSwitcher?.textDecoration === true &&
							digitGlobalTypographyData?.textDecoration
								? `text-decoration: ${digitGlobalTypographyData?.textDecoration};`
								: ""
						}
            ${
							digitGlobalTypoSwitcher?.letterSpacing === true &&
							digitGlobalTypographyData?.letterSpacing
								? `letter-spacing: ${digitGlobalTypographyData?.letterSpacing};`
								: ""
						}
            ${
							digitGlobalTypoSwitcher?.lineHeight === true &&
							digitGlobalTypographyData?.lineHeight
								? `line-height: ${digitGlobalTypographyData?.lineHeight};`
								: ""
						}

            ${
							digitGlobalTypoSwitcher?.fontFamily === false && digitFontFamily
								? `font-family: ${digitFontFamily};`
								: ""
						}
            ${
							digitGlobalTypoSwitcher?.fontSize === false &&
							digitFontSize?.Desktop
								? `font-size: ${digitFontSize?.Desktop}${digitFontSizeUnits?.Desktop};`
								: ""
						}
            ${
							digitGlobalTypoSwitcher?.fontWeight === false && digitFontWeight
								? `font-weight: ${digitFontWeight};`
								: ""
						}
            ${
							digitGlobalTypoSwitcher?.fontStyle === false && digitFontStyle
								? `font-style: ${digitFontStyle};`
								: ""
						}
            ${
							digitGlobalTypoSwitcher?.textTransform === false &&
							digitTextTransform
								? `text-transform: ${digitTextTransform};`
								: ""
						}
            ${
							digitGlobalTypoSwitcher?.textDecoration === false &&
							digitTextDecoration
								? `text-decoration: ${digitTextDecoration};`
								: ""
						}
            ${
							digitGlobalTypoSwitcher?.letterSpacing === false &&
							digitLetterSpacing?.Desktop
								? `letter-spacing: ${digitLetterSpacing?.Desktop}${digitLetterSpacingUnits?.Desktop};`
								: ""
						}
            ${
							digitGlobalTypoSwitcher?.lineHeight === false &&
							digitLineHeight?.Desktop
								? `line-height: ${digitLineHeight?.Desktop}${digitLineHeightUnits?.Desktop};`
								: ""
						}
            ${
							countDownDigitBorder
								? `border-style: ${countDownDigitBorder};`
								: ""
						}
            ${
							countDownDigitMarginGetDesktop && countDownDigitMarginDesktop?.top
								? `margin: ${countDownDigitMarginGetDesktop};`
								: ""
						}
            ${
							countDownDigitBorderTypeGetDesktop &&
							countDownDigitBorderTypeDesktop?.top
								? `border-width: ${countDownDigitBorderTypeGetDesktop};`
								: ""
						}
            ${
							countDownDigitBorderColor
								? `border-color: ${countDownDigitBorderColor};`
								: ""
						}
            ${
							countDownDigitBorderRadiusGetDesktop &&
							countDownDigitBorderRadiusDesktop?.top
								? `border-radius: ${countDownDigitBorderRadiusGetDesktop};`
								: ""
						}
            ${
							countDownDigitWidth?.Desktop
								? `width: ${countDownDigitWidth?.Desktop}${countDownDigitWidthUnits?.Desktop};`
								: ""
						}
            ${
							countDownDigitHeight?.Desktop
								? `height: ${countDownDigitHeight?.Desktop}${countDownDigitHeightUnits?.Desktop};`
								: ""
						}
            transition: all .3s ease-in-out;
        }
        .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time:hover {
            ${
							countDownDigitBgHoverColor
								? `background-color: ${countDownDigitBgHoverColor};`
								: ""
						}
            ${digitFontHoverColor ? `color: ${digitFontHoverColor};` : ""}
            ${
							countDownDigitBorderHoverColor
								? `border-color: ${countDownDigitBorderHoverColor};`
								: ""
						}
            transition: all .3s ease-in-out;
        }
        .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
            display: flex;
            ${
							countDownLabelAlignmentHz === "left"
								? `justify-content: start;`
								: ""
						}
            ${
							countDownLabelAlignmentHz === "center"
								? `justify-content: center;`
								: ""
						}
            ${
							countDownLabelAlignmentHz === "right"
								? `justify-content: end;`
								: ""
						}
            ${countDownLabelAlignmentVr === "left" ? `align-items: start;` : ""}
            ${
							countDownLabelAlignmentVr === "center"
								? `align-items: center;`
								: ""
						}
            ${countDownLabelAlignmentVr === "right" ? `align-items: end;` : ""}
            ${labelBgColor ? `background-color: ${labelBgColor};` : ""}
            ${labelFontColor ? `color: ${labelFontColor};` : ""}

            ${
							labelGlobalTypoSwitcher?.fontFamily === true &&
							labelGlobalTypographyData?.fontFamily
								? `font-family: ${labelGlobalTypographyData?.fontFamily};`
								: ""
						}
            ${
							labelGlobalTypoSwitcher?.fontSize === true &&
							labelGlobalTypographyData?.fontSize
								? `font-size: ${labelGlobalTypographyData?.fontSize};`
								: ""
						}
            ${
							labelGlobalTypoSwitcher?.fontWeight === true &&
							labelGlobalTypographyData?.fontWeight
								? `font-weight: ${labelGlobalTypographyData?.fontWeight};`
								: ""
						}
            ${
							labelGlobalTypoSwitcher?.fontStyle === true &&
							labelGlobalTypographyData?.fontStyle
								? `font-style: ${labelGlobalTypographyData?.fontStyle};`
								: ""
						}
            ${
							labelGlobalTypoSwitcher?.textTransform === true &&
							labelGlobalTypographyData?.textTransform
								? `text-transform: ${labelGlobalTypographyData?.textTransform};`
								: ""
						}
            ${
							labelGlobalTypoSwitcher?.textDecoration === true &&
							labelGlobalTypographyData?.textDecoration
								? `text-decoration: ${labelGlobalTypographyData?.textDecoration};`
								: ""
						}
            ${
							labelGlobalTypoSwitcher?.letterSpacing === true &&
							labelGlobalTypographyData?.letterSpacing
								? `letter-spacing: ${labelGlobalTypographyData?.letterSpacing};`
								: ""
						}
            ${
							labelGlobalTypoSwitcher?.lineHeight === true &&
							labelGlobalTypographyData?.lineHeight
								? `line-height: ${labelGlobalTypographyData?.lineHeight};`
								: ""
						}

            ${
							labelGlobalTypoSwitcher?.fontFamily === false &&
							labelFontFamily &&
							labelFontFamily !== "Default"
								? `font-family: ${labelFontFamily};`
								: ""
						}
            ${
							labelGlobalTypoSwitcher?.fontSize === false &&
							labelFontSize?.Desktop
								? `font-size: ${labelFontSize?.Desktop}${labelFontSizeUnits?.Desktop};`
								: ""
						}
            ${
							labelGlobalTypoSwitcher?.fontWeight === false && labelFontWeight
								? `font-weight: ${labelFontWeight};`
								: ""
						}
            ${
							labelGlobalTypoSwitcher?.fontStyle === false && labelFontStyle
								? `font-style: ${labelFontStyle};`
								: ""
						}
            ${
							labelGlobalTypoSwitcher?.textTransform === false &&
							labelTextTransform
								? `text-transform: ${labelTextTransform};`
								: ""
						}
            ${
							labelGlobalTypoSwitcher?.textDecoration === false &&
							labelTextDecoration
								? `text-decoration: ${labelTextDecoration};`
								: ""
						}
            ${
							labelGlobalTypoSwitcher?.letterSpacing === false &&
							labelLetterSpacing?.Desktop
								? `letter-spacing: ${labelLetterSpacing?.Desktop}${labelLetterSpacingUnits?.Desktop};`
								: ""
						}
            ${
							labelGlobalTypoSwitcher?.lineHeight === false &&
							labelLineHeight?.Desktop
								? `line-height: ${labelLineHeight?.Desktop}${labelLineHeightUnits?.Desktop};`
								: ""
						}
            ${
							countDownLabelBorder
								? `border-style: ${countDownLabelBorder};`
								: ""
						}
            ${
							countDownLabelBorderTypeGetDesktop &&
							countDownLabelBorderTypeDesktop?.top
								? `border-width: ${countDownLabelBorderTypeGetDesktop};`
								: ""
						}
            ${
							countDownLabelBorderColor
								? `border-color: ${countDownLabelBorderColor};`
								: ""
						}
            ${
							countDownLabelBorderRadiusGetDesktop &&
							countDownLabelBorderRadiusDesktop?.top
								? `border-radius: ${countDownLabelBorderRadiusGetDesktop};`
								: ""
						}
            ${
							countDownLabelMarginGetDesktop && countDownLabelMarginDesktop?.top
								? `margin: ${countDownLabelMarginGetDesktop};`
								: ""
						}
            ${
							countDownLabelWidth?.Desktop
								? `width: ${countDownLabelWidth?.Desktop}${countDownLabelWidthUnits?.Desktop};`
								: ""
						}
            ${
							countDownLabelHeight?.Desktop
								? `height: ${countDownLabelHeight?.Desktop}${countDownLabelHeightUnits?.Desktop};`
								: ""
						}
            transition: all .3s ease-in-out;
        }
          .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label:hover{
            ${
							labelBgHoverColor ? `background-color: ${labelBgHoverColor};` : ""
						}
            ${labelFontHoverColor ? `color: ${labelFontHoverColor};` : ""}
            ${
							countDownLabelBorderHoverColor
								? `border-color: ${countDownLabelBorderHoverColor};`
								: ""
						}
            transition: all .3s ease-in-out;
          }

          ${
						singleDigitFontColorSwitcher === true
							? `
            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.days {
                ${daysDigitFontColor ? `color: ${daysDigitFontColor};` : ""}
            }
            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.days:hover {
                ${
									daysDigitFontHoverColor
										? `color: ${daysDigitFontHoverColor};`
										: ""
								}
            }

            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.hours {
                ${hoursDigitFontColor ? `color: ${hoursDigitFontColor};` : ""}
            }
            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.hours:hover {
                ${
									hoursDigitFontHoverColor
										? `color: ${hoursDigitFontHoverColor};`
										: ""
								}
            }

            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.minutes {
                ${
									minutesDigitFontColor
										? `color: ${minutesDigitFontColor};`
										: ""
								}
            }
            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.minutes:hover {
                ${
									minutesDigitFontHoverColor
										? `color: ${minutesDigitFontHoverColor};`
										: ""
								}
            }

            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.seconds {
                ${
									secondsDigitFontColor
										? `color: ${secondsDigitFontColor};`
										: ""
								}
            }
            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.seconds:hover {
                ${
									secondsDigitFontHoverColor
										? `color: ${secondsDigitFontHoverColor};`
										: ""
								}
            }
          `
							: ""
					}

          @media only screen and (max-width: 1024px) {
               .fb-count-down-main-wrapper.${blockID} {
                    ${
											countDownPositionType !== "default"
												? `position: ${countDownPositionType};`
												: ""
										}
                    ${
											countDownPositionType !== "default" &&
											countDownPositionType !== "relative" &&
											countDownHZOrientationType === "left" &&
											countDownHZLeftOffset?.Tablet
												? `left: ${countDownHZLeftOffset?.Tablet}${countDownHZLeftOffsetUnits?.Tablet};`
												: ""
										}
                    ${
											countDownPositionType !== "default" &&
											countDownPositionType !== "relative" &&
											countDownHZOrientationType === "right" &&
											countDownHZRightOffset?.Tablet
												? `right: ${countDownHZRightOffset?.Tablet}${countDownHZRightOffsetUnits?.Tablet};`
												: ""
										}
                    ${
											countDownPositionType !== "default" &&
											countDownPositionType !== "relative" &&
											countDownVROrientationType === "top" &&
											countDownVRTopOffset?.Tablet
												? `top: ${countDownVRTopOffset?.Tablet}${countDownVRTopOffsetUnits?.Tablet};`
												: ""
										}
                    ${
											countDownPositionType !== "default" &&
											countDownPositionType !== "relative" &&
											countDownVROrientationType === "bottom" &&
											countDownVRBottomOffset?.Tablet
												? `bottom: ${countDownVRBottomOffset?.Tablet}${countDownVRBottomOffsetUnits?.Tablet};`
												: ""
										}
                    ${
											countDownZIndex?.Tablet
												? `z-index: ${countDownZIndex?.Tablet};`
												: ""
										}
               }
               .fb-count-down-wrapper.${blockID} {
                    ${
											countDownLayoutType === "grid"
												? `grid-template-columns: repeat(${countDownGrid?.Tablet}, 1fr);`
												: ""
										}
                    ${
											countDownItemGap?.Tablet
												? `gap: ${countDownItemGap?.Tablet}${countDownItemGapUnits?.Tablet};`
												: ""
										}
                    ${
											countDownItemWrapperBorderTypeGetTablet &&
											countDownItemWrapperBorderTypeTablet?.top
												? `border-width: ${countDownItemWrapperBorderTypeGetTablet};`
												: ""
										}
                    ${
											(countDownPresetStyle === "style-1" ||
												countDownPresetStyle === "style-2" ||
												countDownPresetStyle === "style-4") &&
											advancedCountdownContainerSize?.Tablet
												? `width: ${advancedCountdownContainerSize?.Tablet}${advancedCountdownContainerSize?.unit};`
												: ""
										}
                    ${
											countDownPresetStyle === "style-3" &&
											advancedCountdownContainerSizeStyle3?.Tablet
												? `width: ${advancedCountdownContainerSizeStyle3?.Tablet}${advancedCountdownContainerSizeStyle3?.unit}; height: ${advancedCountdownContainerSizeStyle3?.Tablet}${advancedCountdownContainerSizeStyle3?.unit};`
												: ""
										}
                    ${
											countDownPresetStyle === "style-5" &&
											advancedCountdownContainerSizeStyle5?.Tablet
												? `width: ${advancedCountdownContainerSizeStyle5?.Tablet}${advancedCountdownContainerSizeStyle5?.unit}; height: ${advancedCountdownContainerSizeStyle5?.Tablet}${advancedCountdownContainerSizeStyle5?.unit} !important;`
												: ""
										}
                    ${
											advancedCountdownBorderRadius?.Tablet
												? `border-radius: ${advancedCountdownBorderRadius?.top}${advancedCountdownBorderRadius?.unit} ${advancedCountdownBorderRadius?.right}${advancedCountdownBorderRadius?.unit} ${advancedCountdownBorderRadius?.bottom}${advancedCountdownBorderRadius?.unit} ${advancedCountdownBorderRadius?.left}${advancedCountdownBorderRadius?.unit};`
												: ""
										}
                    ${
											countDownItemWrapperBorderRadiusGetTablet &&
											countDownItemWrapperBorderRadiusTablet?.top
												? `border-radius: ${countDownItemWrapperBorderRadiusGetTablet};`
												: ""
										}
                    ${
											countDownItemWrapperPaddingGetTablet &&
											countDownItemWrapperPaddingTablet?.top
												? `padding: ${countDownItemWrapperPaddingGetTablet};`
												: ""
										}
                    ${
											countDownItemWrapperMarginGetTablet &&
											countDownItemWrapperMarginTablet?.top
												? `margin: ${countDownItemWrapperMarginGetTablet};`
												: ""
										}
               }
               .fb-count-down-wrapper.${blockID} .fb-count-down-item {
                    ${
											countDownItemSize?.Tablet
												? `width: ${countDownItemSize?.Tablet}${countDownItemSizeUnits?.Tablet};`
												: ""
										}
                    ${
											countDownItemSizeHeight === true &&
											countDownItemSize?.Tablet
												? `height: ${countDownItemSize?.Tablet}${countDownItemSizeUnits?.Tablet};`
												: ""
										}
                    ${
											countDownItemBorderTypeGetTablet &&
											countDownItemBorderTypeTablet?.top
												? `border-width: ${countDownItemBorderTypeGetTablet};`
												: ""
										}
                    ${
											countDownPresetStyle === "style-1" &&
											advancedCountdownSvgProgressSize?.Tablet
												? `width: ${advancedCountdownSvgProgressSize?.Tablet}${advancedCountdownSvgProgressSize?.unit}; height: ${advancedCountdownSvgProgressSize?.Tablet}${advancedCountdownSvgProgressSize?.unit};`
												: ""
										}
                    ${
											countDownPresetStyle === "style-2" &&
											advancedCountdownStyle2ProgressBarSize?.Tablet
												? `width: ${advancedCountdownStyle2ProgressBarSize?.Tablet}${advancedCountdownStyle2ProgressBarSize?.unit}; height: ${advancedCountdownStyle2ProgressBarSize?.Tablet}${advancedCountdownStyle2ProgressBarSize?.unit};`
												: ""
										}
                    ${
											countDownPresetStyle === "style-3" &&
											advancedCountdownContainerSizeStyle3Container?.Tablet
												? `width: ${advancedCountdownContainerSizeStyle3Container?.Tablet}${advancedCountdownContainerSizeStyle3Container?.unit};`
												: ""
										}
                    ${
											countDownPresetStyle === "style-5" &&
											advancedCountdownPreset5DashGap?.Tablet
												? `gap: ${advancedCountdownPreset5DashGap?.Tablet}${advancedCountdownPreset5DashGap?.unit};`
												: ""
										}
                    ${
											countDownItemBorderRadiusGetTablet &&
											countDownItemBorderRadiusTablet?.top
												? `border-radius: ${countDownItemBorderRadiusGetTablet};`
												: ""
										}
               }
                
               .fb-count-down-wrapper.${blockID} .fb-count-down-item:before {
                    ${
											countDownSeparatorEnabled &&
											countDownSeparatorType &&
											countDownSeparatorType !== "null"
												? `
                         ${
														countDownSeparatorVerticalGap?.Tablet
															? `top: ${countDownSeparatorVerticalGap?.Tablet}${countDownSeparatorVerticalGapUnits?.Tablet};`
															: ""
													}
                         ${
														countDownSeparatorHorizontalGap?.Tablet
															? `right: -${countDownSeparatorHorizontalGap?.Tablet}${countDownSeparatorHorizontalGapUnits?.Tablet};`
															: ""
													}
                         ${
														countDownSeparatorGlobalTypoSwitcher?.fontSize ===
															false && countDownSeparatorFontSize?.Tablet
															? `font-size: ${countDownSeparatorFontSize?.Tablet}${countDownSeparatorFontSizeUnits?.Tablet};`
															: ""
													}
                         ${
														advancedCountdownSeparatorTypographyFontSize?.Tablet
															? `font-size: ${advancedCountdownSeparatorTypographyFontSize?.Tablet}${advancedCountdownSeparatorTypographyFontSizeUnits?.Tablet};`
															: ""
													}
                         ${
														countDownSeparatorGlobalTypoSwitcher?.letterSpacing ===
															false && countDownSeparatorLetterSpacing?.Tablet
															? `letter-spacing: ${countDownSeparatorLetterSpacing?.Tablet}${countDownSeparatorLetterSpacingUnits?.Tablet};`
															: ""
													}
                         ${
														countDownSeparatorGlobalTypoSwitcher?.lineHeight ===
															false && countDownSeparatorLineHeight?.Tablet
															? `line-height: ${countDownSeparatorLineHeight?.Tablet}${countDownSeparatorLineHeightUnits?.Tablet};`
															: ""
													}
                    `
												: ""
										}
               }
               .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time {
                    ${
											digitGlobalTypoSwitcher?.fontSize === false &&
											digitFontSize?.Tablet
												? `font-size: ${digitFontSize?.Tablet}${digitFontSizeUnits?.Tablet};`
												: ""
										}
                    ${
											digitGlobalTypoSwitcher?.letterSpacing === false &&
											digitLetterSpacing?.Tablet
												? `letter-spacing: ${digitLetterSpacing?.Tablet}${digitLetterSpacingUnits?.Tablet};`
												: ""
										}
                    ${
											advancedCountdownCountdownTypographyFontSize?.Tablet
												? `font-size: ${advancedCountdownCountdownTypographyFontSize?.Tablet}${advancedCountdownCountdownTypographyFontSizeUnits?.Tablet};`
												: ""
										}
                    ${
											digitGlobalTypoSwitcher?.lineHeight === false &&
											digitLineHeight?.Tablet
												? `line-height: ${digitLineHeight?.Tablet}${digitLineHeightUnits?.Tablet};`
												: ""
										}
                    ${
											countDownDigitMarginGetTablet &&
											countDownDigitMarginTablet?.top
												? `margin: ${countDownDigitMarginGetTablet};`
												: ""
										}
                    ${
											countDownDigitBorderTypeGetTablet &&
											countDownDigitBorderTypeTablet?.top
												? `border-width: ${countDownDigitBorderTypeGetTablet};`
												: ""
										}
                    ${
											countDownDigitBorderRadiusGetTablet &&
											countDownDigitBorderRadiusTablet?.top
												? `border-radius: ${countDownDigitBorderRadiusGetTablet};`
												: ""
										}
                    ${
											countDownDigitWidth?.Tablet
												? `width: ${countDownDigitWidth?.Tablet}${countDownDigitWidthUnits?.Tablet};`
												: ""
										}
                    ${
											countDownDigitHeight?.Tablet
												? `height: ${countDownDigitHeight?.Tablet}${countDownDigitHeightUnits?.Tablet};`
												: ""
										}
               }

               .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
                    ${
											labelGlobalTypoSwitcher?.fontSize === false &&
											labelFontSize?.Tablet
												? `font-size: ${labelFontSize?.Tablet}${labelFontSizeUnits?.Tablet};`
												: ""
										}
                    ${
											labelGlobalTypoSwitcher?.letterSpacing === false &&
											labelLetterSpacing?.Tablet
												? `letter-spacing: ${labelLetterSpacing?.Tablet}${labelLetterSpacingUnits?.Tablet};`
												: ""
										}
                    ${
											advancedCountdownLabelTypographyStyle4FontSize?.Tablet
												? `font-size: ${advancedCountdownLabelTypographyStyle4FontSize?.Tablet}${advancedCountdownLabelTypographyStyle4FontSizeUnits?.Tablet};`
												: ""
										}
                    ${
											labelGlobalTypoSwitcher?.lineHeight === false &&
											labelLineHeight?.Tablet
												? `line-height: ${labelLineHeight?.Tablet}${labelLineHeightUnits?.Tablet};`
												: ""
										}
                    ${
											countDownLabelBorderTypeGetTablet &&
											countDownLabelBorderTypeTablet?.top
												? `border-width: ${countDownLabelBorderTypeGetTablet};`
												: ""
										}
                    ${
											countDownLabelBorderRadiusGetTablet &&
											countDownLabelBorderRadiusTablet?.top
												? `border-radius: ${countDownLabelBorderRadiusGetTablet};`
												: ""
										}
                    ${
											countDownLabelMarginGetTablet &&
											countDownLabelMarginTablet?.top
												? `margin: ${countDownLabelMarginGetTablet};`
												: ""
										}
                    ${
											countDownLabelWidth?.Tablet
												? `width: ${countDownLabelWidth?.Tablet}${countDownLabelWidthUnits?.Tablet};`
												: ""
										}
                    ${
											countDownLabelHeight?.Tablet
												? `height: ${countDownLabelHeight?.Tablet}${countDownLabelHeightUnits?.Tablet};`
												: ""
										}
               }
          }

          @media only screen and (max-width: 767px) {
               .fb-count-down-main-wrapper.${blockID} {
                    ${
											countDownPositionType !== "default"
												? `position: ${countDownPositionType};`
												: ""
										}
                    ${
											countDownPositionType !== "default" &&
											countDownPositionType !== "relative" &&
											countDownHZOrientationType === "left" &&
											countDownHZLeftOffset?.Mobile
												? `left: ${countDownHZLeftOffset?.Mobile}${countDownHZLeftOffsetUnits?.Mobile};`
												: ""
										}
               
                    ${
											countDownPresetStyle === "style-1" &&
											advancedCountdownIconSize?.Mobile
												? `
                         .fb-count-down-wrapper.${blockID} .countdown-icon i { font-size: ${advancedCountdownIconSize?.Mobile}${advancedCountdownIconSize?.unit}; }
                         .fb-count-down-wrapper.${blockID} .countdown-icon svg { width: ${advancedCountdownIconSize?.Mobile}${advancedCountdownIconSize?.unit}; height: auto; }
                         `
												: ""
										}
                    ${
											countDownPositionType !== "default" &&
											countDownPositionType !== "relative" &&
											countDownHZOrientationType === "right" &&
											countDownHZRightOffset?.Mobile
												? `right: ${countDownHZRightOffset?.Mobile}${countDownHZRightOffsetUnits?.Mobile};`
												: ""
										}
                    ${
											countDownPositionType !== "default" &&
											countDownPositionType !== "relative" &&
											countDownVROrientationType === "top" &&
											countDownVRTopOffset?.Mobile
												? `top: ${countDownVRTopOffset?.Mobile}${countDownVRTopOffsetUnits?.Mobile};`
												: ""
										}
                    ${
											countDownPositionType !== "default" &&
											countDownPositionType !== "relative" &&
											countDownVROrientationType === "bottom" &&
											countDownVRBottomOffset?.Mobile
												? `bottom: ${countDownVRBottomOffset?.Mobile}${countDownVRBottomOffsetUnits?.Mobile};`
												: ""
										}
                    ${
											countDownZIndex?.Mobile
												? `z-index: ${countDownZIndex?.Mobile};`
												: ""
										}
               }
               .fb-count-down-wrapper.${blockID} {
                    ${
											countDownLayoutType === "grid"
												? `grid-template-columns: repeat(${countDownGrid?.Mobile}, 1fr);`
												: ""
										}
                    ${
											countDownItemGap?.Mobile
												? `gap: ${countDownItemGap?.Mobile}${countDownItemGapUnits?.Mobile};`
												: ""
										}
                    ${
											countDownItemWrapperBorderTypeGetMobile &&
											countDownItemWrapperBorderTypeMobile?.top
												? `border-width: ${countDownItemWrapperBorderTypeGetMobile};`
												: ""
										}
                    ${
											(countDownPresetStyle === "style-1" ||
												countDownPresetStyle === "style-2" ||
												countDownPresetStyle === "style-4") &&
											advancedCountdownContainerSize?.Mobile
												? `width: ${advancedCountdownContainerSize?.Mobile}${advancedCountdownContainerSize?.unit};`
												: ""
										}
                    ${
											countDownPresetStyle === "style-3" &&
											advancedCountdownContainerSizeStyle3?.Mobile
												? `width: ${advancedCountdownContainerSizeStyle3?.Mobile}${advancedCountdownContainerSizeStyle3?.unit}; height: ${advancedCountdownContainerSizeStyle3?.Mobile}${advancedCountdownContainerSizeStyle3?.unit};`
												: ""
										}
                    ${
											countDownPresetStyle === "style-5" &&
											advancedCountdownContainerSizeStyle5?.Mobile
												? `width: ${advancedCountdownContainerSizeStyle5?.Mobile}${advancedCountdownContainerSizeStyle5?.unit}; height: ${advancedCountdownContainerSizeStyle5?.Mobile}${advancedCountdownContainerSizeStyle5?.unit} !important;`
												: ""
										}
                    ${
											advancedCountdownBorderRadius?.Mobile
												? `border-radius: ${advancedCountdownBorderRadius?.top}${advancedCountdownBorderRadius?.unit} ${advancedCountdownBorderRadius?.right}${advancedCountdownBorderRadius?.unit} ${advancedCountdownBorderRadius?.bottom}${advancedCountdownBorderRadius?.unit} ${advancedCountdownBorderRadius?.left}${advancedCountdownBorderRadius?.unit};`
												: ""
										}
                    ${
											countDownItemWrapperBorderRadiusGetMobile &&
											countDownItemWrapperBorderRadiusMobile?.top
												? `border-radius: ${countDownItemWrapperBorderRadiusGetMobile};`
												: ""
										}
                    ${
											countDownItemWrapperPaddingGetMobile &&
											countDownItemWrapperPaddingMobile?.top
												? `padding: ${countDownItemWrapperPaddingGetMobile};`
												: ""
										}
                    ${
											countDownItemWrapperMarginGetMobile &&
											countDownItemWrapperMarginMobile?.top
												? `margin: ${countDownItemWrapperMarginGetMobile};`
												: ""
										}
               }
               .fb-count-down-wrapper.${blockID} .fb-count-down-item {
                    ${
											countDownItemSize?.Mobile
												? `width: ${countDownItemSize?.Mobile}${countDownItemSizeUnits?.Mobile};`
												: ""
										}
                    ${
											countDownItemSizeHeight === true &&
											countDownItemSize?.Mobile
												? `height: ${countDownItemSize?.Mobile}${countDownItemSizeUnits?.Mobile};`
												: ""
										}
                    ${
											countDownItemBorderTypeGetMobile &&
											countDownItemBorderTypeMobile?.top
												? `border-width: ${countDownItemBorderTypeGetMobile};`
												: ""
										}
                    ${
											countDownPresetStyle === "style-1" &&
											advancedCountdownSvgProgressSize?.Mobile
												? `width: ${advancedCountdownSvgProgressSize?.Mobile}${advancedCountdownSvgProgressSize?.unit}; height: ${advancedCountdownSvgProgressSize?.Mobile}${advancedCountdownSvgProgressSize?.unit};`
												: ""
										}
                    ${
											countDownPresetStyle === "style-2" &&
											advancedCountdownStyle2ProgressBarSize?.Mobile
												? `width: ${advancedCountdownStyle2ProgressBarSize?.Mobile}${advancedCountdownStyle2ProgressBarSize?.unit}; height: ${advancedCountdownStyle2ProgressBarSize?.Mobile}${advancedCountdownStyle2ProgressBarSize?.unit};`
												: ""
										}
                    ${
											countDownPresetStyle === "style-3" &&
											advancedCountdownContainerSizeStyle3Container?.Mobile
												? `width: ${advancedCountdownContainerSizeStyle3Container?.Mobile}${advancedCountdownContainerSizeStyle3Container?.unit};`
												: ""
										}
                    ${
											countDownPresetStyle === "style-5" &&
											advancedCountdownPreset5DashGap?.Mobile
												? `gap: ${advancedCountdownPreset5DashGap?.Mobile}${advancedCountdownPreset5DashGap?.unit};`
												: ""
										}
                    ${
											countDownItemBorderRadiusGetMobile &&
											countDownItemBorderRadiusMobile?.top
												? `border-radius: ${countDownItemBorderRadiusGetMobile};`
												: ""
										}
               }
               .fb-count-down-wrapper.${blockID} .fb-count-down-item:before {
                    ${
											countDownSeparatorEnabled &&
											countDownSeparatorType &&
											countDownSeparatorType !== "null"
												? `
                         ${
														countDownSeparatorVerticalGap?.Mobile
															? `top: ${countDownSeparatorVerticalGap?.Mobile}${countDownSeparatorVerticalGapUnits?.Mobile};`
															: ""
													}
                         ${
														countDownSeparatorHorizontalGap?.Mobile
															? `right: -${countDownSeparatorHorizontalGap?.Mobile}${countDownSeparatorHorizontalGapUnits?.Mobile};`
															: ""
													}
                         ${
														countDownSeparatorGlobalTypoSwitcher?.fontSize ===
															false && countDownSeparatorFontSize?.Mobile
															? `font-size: ${countDownSeparatorFontSize?.Mobile}${countDownSeparatorFontSizeUnits?.Mobile};`
															: ""
													}
                         ${
														advancedCountdownSeparatorTypographyFontSize?.Mobile
															? `font-size: ${advancedCountdownSeparatorTypographyFontSize?.Mobile}${advancedCountdownSeparatorTypographyFontSizeUnits?.Mobile};`
															: ""
													}
                         ${
														countDownSeparatorGlobalTypoSwitcher?.letterSpacing ===
															false && countDownSeparatorLetterSpacing?.Mobile
															? `letter-spacing: ${countDownSeparatorLetterSpacing?.Mobile}${countDownSeparatorLetterSpacingUnits?.Mobile};`
															: ""
													}
                         ${
														countDownSeparatorGlobalTypoSwitcher?.lineHeight ===
															false && countDownSeparatorLineHeight?.Mobile
															? `line-height: ${countDownSeparatorLineHeight?.Mobile}${countDownSeparatorLineHeightUnits?.Mobile};`
															: ""
													}
                         `
												: ""
										}
               }
               .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time {
                    ${
											digitGlobalTypoSwitcher?.fontSize === false &&
											digitFontSize?.Mobile
												? `font-size: ${digitFontSize?.Mobile}${digitFontSizeUnits?.Mobile};`
												: ""
										}
                    ${
											digitGlobalTypoSwitcher?.letterSpacing === false &&
											digitLetterSpacing?.Mobile
												? `letter-spacing: ${digitLetterSpacing?.Mobile}${digitLetterSpacingUnits?.Mobile};`
												: ""
										}
                    ${
											advancedCountdownCountdownTypographyFontSize?.Mobile
												? `font-size: ${advancedCountdownCountdownTypographyFontSize?.Mobile}${advancedCountdownCountdownTypographyFontSizeUnits?.Mobile};`
												: ""
										}
                    ${
											digitGlobalTypoSwitcher?.lineHeight === false &&
											digitLineHeight?.Mobile
												? `line-height: ${digitLineHeight?.Mobile}${digitLineHeightUnits?.Mobile};`
												: ""
										}
                    ${
											countDownDigitMarginGetMobile &&
											countDownDigitMarginMobile?.top
												? `margin: ${countDownDigitMarginGetMobile};`
												: ""
										}
                    ${
											countDownDigitBorderTypeGetMobile &&
											countDownDigitBorderTypeMobile?.top
												? `border-width: ${countDownDigitBorderTypeGetMobile};`
												: ""
										}
                    ${
											countDownDigitBorderRadiusGetMobile &&
											countDownDigitBorderRadiusMobile?.top
												? `border-radius: ${countDownDigitBorderRadiusGetMobile};`
												: ""
										}
                    ${
											countDownDigitWidth?.Mobile
												? `width: ${countDownDigitWidth?.Mobile}${countDownDigitWidthUnits?.Mobile};`
												: ""
										}
                    ${
											countDownDigitHeight?.Mobile
												? `height: ${countDownDigitHeight?.Mobile}${countDownDigitHeightUnits?.Mobile};`
												: ""
										}
               }
               .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
                    ${
											labelGlobalTypoSwitcher?.fontSize === false &&
											labelFontSize?.Mobile
												? `font-size: ${labelFontSize?.Mobile}${labelFontSizeUnits?.Mobile};`
												: ""
										}
                    ${
											labelGlobalTypoSwitcher?.letterSpacing === false &&
											labelLetterSpacing?.Mobile
												? `letter-spacing: ${labelLetterSpacing?.Mobile}${labelLetterSpacingUnits?.Mobile};`
												: ""
										}
                    ${
											advancedCountdownLabelTypographyStyle4FontSize?.Mobile
												? `font-size: ${advancedCountdownLabelTypographyStyle4FontSize?.Mobile}${advancedCountdownLabelTypographyStyle4FontSizeUnits?.Mobile};`
												: ""
										}
                    ${
											labelGlobalTypoSwitcher?.lineHeight === false &&
											labelLineHeight?.Mobile
												? `line-height: ${labelLineHeight?.Mobile}${labelLineHeightUnits?.Mobile};`
												: ""
										}
                    ${
											countDownLabelBorderTypeGetMobile &&
											countDownLabelBorderTypeMobile?.top
												? `border-width: ${countDownLabelBorderTypeGetMobile};`
												: ""
										}
                    ${
											countDownLabelBorderRadiusGetMobile &&
											countDownLabelBorderRadiusMobile?.top
												? `border-radius: ${countDownLabelBorderRadiusGetMobile};`
												: ""
										}
                    ${
											countDownLabelMarginGetMobile &&
											countDownLabelMarginMobile?.top
												? `margin: ${countDownLabelMarginGetMobile};`
												: ""
										}
                    ${
											countDownLabelWidth?.Mobile
												? `width: ${countDownLabelWidth?.Mobile}${countDownLabelWidthUnits?.Mobile};`
												: ""
										}
                    ${
											countDownLabelHeight?.Mobile
												? `height: ${countDownLabelHeight?.Mobile}${countDownLabelHeightUnits?.Mobile};`
												: ""
										}
               }
          }
     }`;

	const customCss = getCustomCss(countDownGlobalWraperCustomCSS, `.${blockID}`);
	return `${countDownStyle} ${customCss}`.replace(/\s+/g, " ").trim();
};
export default generateCountdownStyle;
