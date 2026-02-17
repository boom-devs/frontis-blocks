import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
	DateTimePicker,
	TextControl,
	ToggleControl,
	SelectControl,
	BaseControl
} from '@wordpress/components';
import { useEffect, useState, memo } from '@wordpress/element';

import {
	BORDER_STYLES,
	LAYOUT_ALIGNMENT,
	LAYOUT_TYPE,
	OVERFLOW_OP,
	SELECT_SEPARATOR_TYPE,
} from '@Constants/fbConstants';

import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_BackgroundColorControl from "@Components/background-color-control";
import { useDeviceType } from "@Config/displayType";
import './editor.scss';
import { ButtonGroup } from '@wordpress/components';
import { Button } from '@wordpress/components';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_Presets from '@Components/presets';
import { countdownPresets } from "./presets";

const Inspector = ({ attributes, setAttributes }) => {
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
	} = attributes;

	const deviceType = useDeviceType();

	const [timeRemaining, setTimeRemaining] = useState({});

	// Set default date to one week from today
	const defaultDate = new Date();
	defaultDate.setDate(defaultDate.getDate() + 7);

	const [date, setDate] = useState(targetDate ? new Date(targetDate) : defaultDate);

	// Sync date with attributes if not already set
	useEffect(() => {
		if (!targetDate) {
			setAttributes({ targetDate: defaultDate.toISOString() });
		}
	}, [targetDate, setAttributes, defaultDate]);

	// Update target date when date changes
	useEffect(() => {
		setAttributes({ targetDate: date.toISOString() });
	}, [date, setAttributes]);

	// Countdown Timer Logic
	useEffect(() => {
		// Helper function to format time with leading zero
		const formatTime = (time) => (time < 10 ? `0${time}` : time);

		if (!targetDate || isNaN(new Date(targetDate).getTime())) return;

		const intervalId = setInterval(() => {
			const now = Date.now();
			const distance = new Date(targetDate).getTime() - now;

			const days = formatTime(Math.floor(distance / (1000 * 60 * 60 * 24)));
			const hours = formatTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
			const minutes = formatTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
			const seconds = formatTime(Math.floor((distance % (1000 * 60)) / 1000));

			if (distance < 0) {
				clearInterval(intervalId);
				setTimeRemaining({ days: "00", hours: "00", minutes: "00", seconds: "00" });
			} else {
				setTimeRemaining({ days, hours, minutes, seconds });
			}
		}, 1000);

		return () => clearInterval(intervalId);
	}, [targetDate]);

	const blockProps = useBlockProps();


	{/* Inspector Controls */ }
	const handleCountdownItemBorderUnitHandler = (event, position) => {
		const value = event.target.value;
		if (countDownItemBorderTypeLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						countDownItemBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						countDownItemBorderTypeTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						countDownItemBorderTypeMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ countDownItemBorderTypeDesktop: { ...countDownItemBorderTypeDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ countDownItemBorderTypeTablet: { ...countDownItemBorderTypeTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ countDownItemBorderTypeMobile: { ...countDownItemBorderTypeMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}
	const countdownItemBorderCombineBtnHandler = () => {
		setAttributes({ countDownItemBorderTypeLink: !countDownItemBorderTypeLink });
	}

	const countDownItemBorderUnitsHandler = (unit) => {
		setAttributes({
			countDownItemBorderTypeUnits: {
				...countDownItemBorderTypeUnits,
				[deviceType]: unit
			}
		})
	}

	const handleCountDownItemBorderRadiusUnitHandler = (event, position) => {
		const value = event.target.value;
		if (countDownItemBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						countDownItemBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						countDownItemBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						countDownItemBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ countDownItemBorderRadiusDesktop: { ...countDownItemBorderRadiusDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ countDownItemBorderRadiusTablet: { ...countDownItemBorderRadiusTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ countDownItemBorderRadiusMobile: { ...countDownItemBorderRadiusMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}
	const countDownItemBorderRadiusCombineBtnHandler = () => {
		setAttributes({ countDownItemBorderRadiusLink: !countDownItemBorderRadiusLink });
	}

	const countDownItemBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			countDownItemBorderRadiusUnits: {
				...countDownItemBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}

	/** Start Border Type*/
	const handleCountDownItemWrapperBorderUnitHandlerFn = (event, position) => {
		const value = event.target.value;
		if (countDownItemWrapperBorderTypeLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						countDownItemWrapperBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						countDownItemWrapperBorderTypeTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						countDownItemWrapperBorderTypeMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ countDownItemWrapperBorderTypeDesktop: { ...countDownItemWrapperBorderTypeDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ countDownItemWrapperBorderTypeTablet: { ...countDownItemWrapperBorderTypeTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ countDownItemWrapperBorderTypeMobile: { ...countDownItemWrapperBorderTypeMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}
	const countDownItemWrapperBorderCombineBtnHandlerFn = () => {
		setAttributes({ countDownItemWrapperBorderTypeLink: !countDownItemWrapperBorderTypeLink });
	}

	const countDownItemWrapperBorderTypeUnitsHandler = (unit) => {
		setAttributes({
			countDownItemWrapperBorderTypeUnits: {
				...countDownItemWrapperBorderTypeUnits,
				[deviceType]: unit
			}
		})
	}

	/** Start Border Type*/

	/** Start Border Radius*/
	const countDownItemWrapperHandleSpacingUnitHandlerFn = (event, position) => {
		const value = event.target.value;
		if (countDownItemWrapperBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						countDownItemWrapperBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						countDownItemWrapperBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						countDownItemWrapperBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ countDownItemWrapperBorderRadiusDesktop: { ...countDownItemWrapperBorderRadiusDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ countDownItemWrapperBorderRadiusTablet: { ...countDownItemWrapperBorderRadiusTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ countDownItemWrapperBorderRadiusMobile: { ...countDownItemWrapperBorderRadiusMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}
	const countDownItemWrapperCombineBtnHandlerFn = () => {
		setAttributes({ countDownItemWrapperBorderRadiusLink: !countDownItemWrapperBorderRadiusLink });
	}

	const countDownItemWrapperBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			countDownItemWrapperBorderRadiusUnits: {
				...countDownItemWrapperBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}

	/** Start Padding */
	const countDownItemWrapperPaddingHandleSpacingUnitHandler = (event, position) => {
		const value = event.target.value;
		if (countDownItemWrapperPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						countDownItemWrapperPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						countDownItemWrapperPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						countDownItemWrapperPaddingMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ countDownItemWrapperPaddingDesktop: { ...countDownItemWrapperPaddingDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ countDownItemWrapperPaddingTablet: { ...countDownItemWrapperPaddingTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ countDownItemWrapperPaddingMobile: { ...countDownItemWrapperPaddingMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}
	const countDownItemWrapperPaddingSpacingCombineBtnHandlerFn = () => {
		setAttributes({ countDownItemWrapperPaddingLink: !countDownItemWrapperPaddingLink });
	}

	const countDownItemWrapperPaddingSpacingUnitsHandler = (unit) => {
		setAttributes({
			countDownItemWrapperPaddingUnits: {
				...countDownItemWrapperPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Padding */

	/** Start Margin */
	const countDownItemWrapperMarginHandleSpacingUnitHandler = (event, position) => {
		const value = event.target.value;
		if (countDownItemWrapperMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						countDownItemWrapperMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						countDownItemWrapperMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						countDownItemWrapperMarginMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ countDownItemWrapperMarginDesktop: { ...countDownItemWrapperMarginDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ countDownItemWrapperMarginTablet: { ...countDownItemWrapperMarginTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ countDownItemWrapperMarginMobile: { ...countDownItemWrapperMarginMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}
	const countDownItemWrapperMarginSpacingCombineBtnHandlerFn = () => {
		setAttributes({ countDownItemWrapperMarginLink: !countDownItemWrapperMarginLink });
	}

	const countDownItemWrapperMarginSpacingUnitsHandler = (unit) => {
		setAttributes({
			countDownItemWrapperMarginUnits: {
				...countDownItemWrapperMarginUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Margin */

	/** Label Start Border Type*/
	const handleCountDownLabelBorderUnitHandlerFn = (event, position) => {
		const value = event.target.value;
		if (countDownLabelBorderTypeLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						countDownLabelBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						countDownLabelBorderTypeTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						countDownLabelBorderTypeMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ countDownLabelBorderTypeDesktop: { ...countDownLabelBorderTypeDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ countDownLabelBorderTypeTablet: { ...countDownLabelBorderTypeTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ countDownLabelBorderTypeMobile: { ...countDownLabelBorderTypeMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}
	const countDownLabelBorderCombineBtnHandlerFn = () => {
		setAttributes({ countDownLabelBorderTypeLink: !countDownLabelBorderTypeLink });
	}

	const countDownLabelBorderTypeUnitsHandler = (unit) => {
		setAttributes({
			countDownLabelBorderTypeUnits: {
				...countDownLabelBorderTypeUnits,
				[deviceType]: unit
			}
		})
	}

	/** Label Start Border Type*/

	/** Label Start Border Radius*/
	const countDownLabelHandleSpacingUnitHandlerFn = (event, position) => {
		const value = event.target.value;
		if (countDownLabelBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						countDownLabelBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						countDownLabelBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						countDownLabelBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ countDownLabelBorderRadiusDesktop: { ...countDownLabelBorderRadiusDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ countDownLabelBorderRadiusTablet: { ...countDownLabelBorderRadiusTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ countDownLabelBorderRadiusMobile: { ...countDownLabelBorderRadiusMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}
	const countDownLabelCombineBtnHandlerFn = () => {
		setAttributes({ countDownLabelBorderRadiusLink: !countDownLabelBorderRadiusLink });
	}

	const countDownLabelBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			countDownLabelBorderRadiusUnits: {
				...countDownLabelBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}

	// Label Margin
	const countDownLabelHandleMarginUnit = (event, position) => {
		const value = event.target.value;
		if (countDownLabelMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						countDownLabelMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						countDownLabelMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						countDownLabelMarginMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ countDownLabelMarginDesktop: { ...countDownLabelMarginDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ countDownLabelMarginTablet: { ...countDownLabelMarginTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ countDownLabelMarginMobile: { ...countDownLabelMarginMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}
	const countDownLabelMarginCombineBtnHandle = () => {
		setAttributes({ countDownLabelMarginLink: !countDownLabelMarginLink });
	}

	const countDownLabelMarginUnitsHandler = (unit) => {
		setAttributes({
			countDownLabelMarginUnits: {
				...countDownLabelMarginUnits,
				[deviceType]: unit
			}
		})
	}

	/** Digit Start Border Type*/
	const handleCountDownDigitBorderUnitHandlerFn = (event, position) => {
		const value = event.target.value;
		if (countDownDigitBorderTypeLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						countDownDigitBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						countDownDigitBorderTypeTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						countDownDigitBorderTypeMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ countDownDigitBorderTypeDesktop: { ...countDownDigitBorderTypeDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ countDownDigitBorderTypeTablet: { ...countDownDigitBorderTypeTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ countDownDigitBorderTypeMobile: { ...countDownDigitBorderTypeMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}
	const countDownDigitBorderCombineBtnHandlerFn = () => {
		setAttributes({ countDownDigitBorderTypeLink: !countDownDigitBorderTypeLink });
	}

	const countDownDigitBorderTypeUnitsHandler = (unit) => {
		setAttributes({
			countDownDigitBorderTypeUnits: {
				...countDownDigitBorderTypeUnits,
				[deviceType]: unit
			}
		})
	}

	/** Digit Start Border Type*/

	/** Digit Start Border Radius*/
	const countDownDigitHandleSpacingUnitHandlerFn = (event, position) => {
		const value = event.target.value;
		if (countDownDigitBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						countDownDigitBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						countDownDigitBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						countDownDigitBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ countDownDigitBorderRadiusDesktop: { ...countDownDigitBorderRadiusDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ countDownDigitBorderRadiusTablet: { ...countDownDigitBorderRadiusTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ countDownDigitBorderRadiusMobile: { ...countDownDigitBorderRadiusMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}
	const countDownDigitCombineBtnHandlerFn = () => {
		setAttributes({ countDownDigitBorderRadiusLink: !countDownDigitBorderRadiusLink });
	}

	const countDownDigitBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			countDownDigitBorderRadiusUnits: {
				...countDownDigitBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}

	// Digit Margin
	const countDownDigitHandleMarginUnit = (event, position) => {
		const value = event.target.value;
		if (countDownDigitMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						countDownDigitMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						countDownDigitMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						countDownDigitMarginMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ countDownDigitMarginDesktop: { ...countDownDigitMarginDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ countDownDigitMarginTablet: { ...countDownDigitMarginTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ countDownDigitMarginMobile: { ...countDownDigitMarginMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}
	const countDownDigitMarginCombineBtnHandle = () => {
		setAttributes({ countDownDigitMarginLink: !countDownDigitMarginLink });
	}

	const countDownDigitMarginUnitsHandler = (unit) => {
		setAttributes({
			countDownDigitMarginUnits: {
				...countDownDigitMarginUnits,
				[deviceType]: unit
			}
		})
	}

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
				<FB_Presets
					className="fb-countdown-presets"
					label={__('Select Preset', 'frontis-blocks')}
					presets={countdownPresets}
					value={countDownPresetStyle}
					onChangeValue='countDownPresetStyle'
					defaultPresetValue="preset-1"
					setAttributes={setAttributes}
				/>

				<DateTimePicker
					currentDate={date}
					onChange={(newDate) => setDate(new Date(newDate))}
					is12Hour={true}
					style={{ marginBottom: '20px' }}
				/>
				<ToggleControl
					label={__("Show Days", "frontis-blocks")}
					checked={showDays}
					onChange={(value) => setAttributes({ showDays: value })}
					style={{ marginTop: '20px' }}
				/>
				<ToggleControl
					label={__("Show Hours", "frontis-blocks")}
					checked={showHours}
					onChange={(value) => setAttributes({ showHours: value })}
				/>
				<ToggleControl
					label={__("Show Minutes", "frontis-blocks")}
					checked={showMinutes}
					onChange={(value) => setAttributes({ showMinutes: value })}
				/>
				<ToggleControl
					label={__("Show Seconds", "frontis-blocks")}
					checked={showSeconds}
					onChange={(value) => setAttributes({ showSeconds: value })}
				/>
			</PanelBody>

			<PanelBody title={__("Layout", "frontis-blocks")} initialOpen={false}>
				<SelectControl
					label={__("Layout Type", "frontis-blocks")}
					value={countDownLayoutType}
					options={LAYOUT_TYPE}
					onChange={(value) => setAttributes({ countDownLayoutType: value })}
				/>
				{countDownLayoutType === 'grid' &&
					<FB_Range
						min={1}
						max={4}
						label={__("Column Number", "frontis-blocks")}
						rangeValue={countDownGrid}
						onChangeHandler={(value) => setAttributes({ countDownGrid: value })}
						deviceType={deviceType}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={1}
						isRangeUnit={false}
					/>
				}

				<FB_Range
					min={1}
					max={400}
					label={__("Item Gap", "frontis-blocks")}
					rangeValue={countDownItemGap}
					onChangeHandler={(value) => setAttributes({ countDownItemGap: value })}
					rangeUnitHandler={(value) => setAttributes({ countDownItemGapUnits: value })}
					deviceType={deviceType}
					units={countDownItemGapUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>

				{countDownLayoutType === 'flex' &&
					<>
						<ToggleControl
							label={__("Flex Wrap", "frontis-blocks")}
							checked={countDownFlexWrap}
							onChange={(value) => setAttributes({ countDownFlexWrap: value })}
						/>

						<BaseControl
							label={__(
								"Alignment",
								"frontis-blocks"
							)}
							id="fb-setting-text-alignment"
							className="fb-setting-text-alignment"
						>
							<ButtonGroup className="fb-setting-text-alignment-group-btn">
								{LAYOUT_ALIGNMENT.map((item) => (
									<Button
										key={item.value}
										onClick={() => setAttributes({ countDownLayoutAlignment: item.value })}
										className={`fb-setting-text-alignment-single-btn ${countDownLayoutAlignment === item.value ? 'active' : ''}`}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</BaseControl>
					</>
				}
			</PanelBody>

			<PanelBody title={__("Labels", "frontis-blocks")} initialOpen={false}>
				<TextControl
					label={__("Days", "frontis-blocks")}
					value={countDownLabelDay}
					onChange={(value) => setAttributes({ countDownLabelDay: value })}
				/>
				<TextControl
					label={__("Hours", "frontis-blocks")}
					value={countDownLabelHour}
					onChange={(value) => setAttributes({ countDownLabelHour: value })}
				/>
				<TextControl
					label={__("Minutes", "frontis-blocks")}
					value={countDownLabelMinute}
					onChange={(value) => setAttributes({ countDownLabelMinute: value })}
				/>
				<TextControl
					label={__("Seconds", "frontis-blocks")}
					value={countDownLabelSecond}
					onChange={(value) => setAttributes({ countDownLabelSecond: value })}
				/>
			</PanelBody>
			<PanelBody title={__("Separator", "frontis-blocks")} initialOpen={false}>
				<ToggleControl
					label={__("Show Separator", "frontis-blocks")}
					checked={countDownSeparatorEnabled}
					onChange={(value) => setAttributes({ countDownSeparatorEnabled: value })}
				/>
				{countDownSeparatorEnabled && (
					<>
						<SelectControl
							label={__("Separator Type", "frontis-blocks")}
							value={countDownSeparatorType}
							options={SELECT_SEPARATOR_TYPE}
							onChange={(value) => setAttributes({ countDownSeparatorType: value })}
						/>

						{countDownSeparatorType === 'custom' && (
							<TextControl
								label={__("Custom Separetor", "frontis-blocks")}
								value={countDownSeparatorCustom}
								onChange={(value) => setAttributes({ countDownSeparatorCustom: value.replace(/[a-zA-Z0-9]/g, '') })}
							/>
						)}
					</>
				)}
			</PanelBody>
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
			<PanelBody
				title={__("Item", "frontis-blocks")}
				initialOpen={true}
			>
				<FB_Range
					min={1}
					max={400}
					label={__("Item Size", "frontis-blocks")}
					rangeValue={countDownItemSize}
					onChangeHandler={(value) => setAttributes({ countDownItemSize: value })}
					rangeUnitHandler={(value) => setAttributes({ countDownItemSizeUnits: value })}
					deviceType={deviceType}
					units={countDownItemSizeUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>

				<ToggleControl
					label={__("Item Size With Height", "frontis-blocks")}
					checked={countDownItemSizeHeight}
					onChange={(value) => setAttributes({ countDownItemSizeHeight: value })}
				/>

				<FB_SwitcherControl
					label={__("Background Color", "frontis-blocks")}
					globalSwitcher={countDownItemBgColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ countDownItemBgColorSwitcher: value })}
				/>

				{countDownItemBgColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={countDownItemBgColor}
						setGlobalColor={(value) => setAttributes({ countDownItemBgColor: value === undefined ? '' : value })}
					/>
				)}

				{countDownItemBgColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={countDownItemBgHoverColor}
						setGlobalColor={(value) => setAttributes({ countDownItemBgHoverColor: value === undefined ? '' : value })}
					/>
				)}


				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={countDownItemBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ countDownItemBorder: value })}
				/>

				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={countDownItemBorderColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ countDownItemBorderColorSwitcher: value })}
				/>

				{countDownItemBorderColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={countDownItemBorderColor}
						setGlobalColor={(value) => setAttributes({ countDownItemBorderColor: value === undefined ? '' : value })}
					/>
				)}

				{countDownItemBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={countDownItemBorderHoverColor}
						setGlobalColor={(value) => setAttributes({ countDownItemBorderHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_Spacing
					label={'Border Width'}
					deviceType={deviceType}
					spacingUnitsHandler={countDownItemBorderUnitsHandler}
					spacingUnits={countDownItemBorderTypeUnits}
					spacingDesktop={countDownItemBorderTypeDesktop}
					spacingTablet={countDownItemBorderTypeTablet}
					spacingMobile={countDownItemBorderTypeMobile}
					handleSpacingUnitHandler={handleCountdownItemBorderUnitHandler}
					spacingCombineBtn={countDownItemBorderTypeLink}
					spacingCombineBtnHandler={countdownItemBorderCombineBtnHandler} setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={'Border Radius'}
					deviceType={deviceType}
					spacingUnitsHandler={countDownItemBorderRadiusUnitsHandler}
					spacingUnits={countDownItemBorderRadiusUnits}
					spacingDesktop={countDownItemBorderRadiusDesktop}
					spacingTablet={countDownItemBorderRadiusTablet}
					spacingMobile={countDownItemBorderRadiusMobile}
					handleSpacingUnitHandler={handleCountDownItemBorderRadiusUnitHandler}
					spacingCombineBtn={countDownItemBorderRadiusLink}
					spacingCombineBtnHandler={countDownItemBorderRadiusCombineBtnHandler} setAttributes={setAttributes}
				/>
			</PanelBody>

			<PanelBody
				title={__("Digit", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_Range
					min={1}
					max={400}
					label={__("Width", "frontis-blocks")}
					rangeValue={countDownDigitWidth}
					onChangeHandler={(value) => setAttributes({ countDownDigitWidth: value })}
					rangeUnitHandler={(value) => setAttributes({ countDownDigitWidthUnits: value })}
					deviceType={deviceType}
					units={countDownDigitWidthUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>

				<FB_Range
					min={1}
					max={400}
					label={__("Height", "frontis-blocks")}
					rangeValue={countDownDigitHeight}
					onChangeHandler={(value) => setAttributes({ countDownDigitHeight: value })}
					rangeUnitHandler={(value) => setAttributes({ countDownDigitHeightUnits: value })}
					deviceType={deviceType}
					units={countDownDigitHeightUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>

				<FB_AlignmentControl
					label={__("Horizontal Alignment", "frontis-blocks")}
					globalAlignment={countDownDigitAlignmentHz}
					setGlobalAlignment={(value) => setAttributes({ countDownDigitAlignmentHz: value })}
				/>

				<FB_AlignmentControl
					label={__("Vertical Alignment", "frontis-blocks")}
					globalAlignment={countDownDigitAlignmentVr}
					setGlobalAlignment={(value) => setAttributes({ countDownDigitAlignmentVr: value })}
				/>

				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={digitGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) => setAttributes({ digitGlobalTypographyData: value })}

					globalTypoType={digitGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							digitGlobalTypoType: value,
							digitGlobalTypoSwitcher: value === 'default' ? { ...digitGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...digitGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
						})
					}}

					globalTypoOption={digitGlobalTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ digitGlobalTypoOption: value })}

					fontFamily={digitFontFamily}
					onChangeFontFamily={(value) => setAttributes({ digitFontFamily: value, digitGlobalTypoSwitcher: { ...digitGlobalTypoSwitcher, fontFamily: value && false } })}

					fontSize={digitFontSize}
					onChangeFontSize={(value) => setAttributes({ digitFontSize: value, digitGlobalTypoSwitcher: { ...digitGlobalTypoSwitcher, fontSize: value && false } })}

					fontSizeUnits={digitFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ digitFontSizeUnits: value })}

					fontWeight={digitFontWeight}
					onChangeFontWeight={(value) => setAttributes({ digitFontWeight: value, digitGlobalTypoSwitcher: { ...digitGlobalTypoSwitcher, fontWeight: value && false } })}

					fontStyle={digitFontStyle}
					onChangeFontStyle={(value) => setAttributes({ digitFontStyle: value, digitGlobalTypoSwitcher: { ...digitGlobalTypoSwitcher, fontStyle: value && false } })}

					textTransform={digitTextTransform}
					onChangeTextTransform={(value) => setAttributes({ digitTextTransform: value, digitGlobalTypoSwitcher: { ...digitGlobalTypoSwitcher, textTransform: value && false } })}

					textDecoration={digitTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ digitTextDecoration: value, digitGlobalTypoSwitcher: { ...digitGlobalTypoSwitcher, textDecoration: value && false } })}

					letterSpacing={digitLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ digitLetterSpacing: value, digitGlobalTypoSwitcher: { ...digitGlobalTypoSwitcher, letterSpacing: value && false } })}

					letterSpacingUnits={digitLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ digitLetterSpacingUnits: value })}

					lineHeight={digitLineHeight}
					onChangeLineHeight={(value) => setAttributes({ digitLineHeight: value, digitGlobalTypoSwitcher: { ...digitGlobalTypoSwitcher, lineHeight: value && false } })}

					lineHeightUnits={digitLineHeightUnits}
					onChangeLineHeightUnit={(value) => setAttributes({ digitLineHeightUnits: value })}

					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Background Color", "frontis-blocks")}
					globalSwitcher={countDownDigitBgColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ countDownDigitBgColorSwitcher: value })}
				/>

				{countDownDigitBgColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={countDownDigitBgColor}
						setGlobalColor={(value) => setAttributes({ countDownDigitBgColor: value === undefined ? '' : value })}
					/>
				)}

				{countDownDigitBgColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={countDownDigitBgHoverColor}
						setGlobalColor={(value) => setAttributes({ countDownDigitBgHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={digitFontColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ digitFontColorSwitcher: value })}
				/>

				{digitFontColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={digitFontColor}
						setGlobalColor={(value) => setAttributes({ digitFontColor: value === undefined ? '' : value })}
					/>
				)}

				{digitFontColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={digitFontHoverColor}
						setGlobalColor={(value) => setAttributes({ digitFontHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<ToggleControl
					label={__("Enable For Single Color", "frontis-blocks")}
					checked={singleDigitFontColorSwitcher}
					onChange={(value) => setAttributes({ singleDigitFontColorSwitcher: value })}
					style={{ marginTop: '20px' }}
				/>

				{singleDigitFontColorSwitcher === true && (
					<>
						<FB_SwitcherControl
							label={__("Days Color", "frontis-blocks")}
							globalSwitcher={daysDigitFontColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ daysDigitFontColorSwitcher: value })}
						/>

						{daysDigitFontColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={daysDigitFontColor}
								setGlobalColor={(value) => setAttributes({ daysDigitFontColor: value === undefined ? '' : value })}
							/>
						)}

						{daysDigitFontColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={daysDigitFontHoverColor}
								setGlobalColor={(value) => setAttributes({ daysDigitFontHoverColor: value === undefined ? '' : value })}
							/>
						)}

						<FB_SwitcherControl
							label={__("Hours Color", "frontis-blocks")}
							globalSwitcher={hoursDigitFontColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ hoursDigitFontColorSwitcher: value })}
						/>

						{hoursDigitFontColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={hoursDigitFontColor}
								setGlobalColor={(value) => setAttributes({ hoursDigitFontColor: value === undefined ? '' : value })}
							/>
						)}

						{hoursDigitFontColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={hoursDigitFontHoverColor}
								setGlobalColor={(value) => setAttributes({ hoursDigitFontHoverColor: value === undefined ? '' : value })}
							/>
						)}

						<FB_SwitcherControl
							label={__("Minutes Color", "frontis-blocks")}
							globalSwitcher={minutesDigitFontColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ minutesDigitFontColorSwitcher: value })}
						/>

						{minutesDigitFontColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={minutesDigitFontColor}
								setGlobalColor={(value) => setAttributes({ minutesDigitFontColor: value === undefined ? '' : value })}
							/>
						)}

						{minutesDigitFontColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={minutesDigitFontHoverColor}
								setGlobalColor={(value) => setAttributes({ minutesDigitFontHoverColor: value === undefined ? '' : value })}
							/>
						)}

						<FB_SwitcherControl
							label={__("Seconds Color", "frontis-blocks")}
							globalSwitcher={secondsDigitFontColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ secondsDigitFontColorSwitcher: value })}
						/>

						{secondsDigitFontColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={secondsDigitFontColor}
								setGlobalColor={(value) => setAttributes({ secondsDigitFontColor: value === undefined ? '' : value })}
							/>
						)}

						{secondsDigitFontColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={secondsDigitFontHoverColor}
								setGlobalColor={(value) => setAttributes({ secondsDigitFontHoverColor: value === undefined ? '' : value })}
							/>
						)}
					</>
				)}

				<FB_Spacing
					label={'Margin'}
					deviceType={deviceType}
					spacingUnitsHandler={countDownDigitMarginUnitsHandler}
					spacingUnits={countDownDigitMarginUnits}
					spacingDesktop={countDownDigitMarginDesktop}
					spacingTablet={countDownDigitMarginTablet}
					spacingMobile={countDownDigitMarginMobile}
					handleSpacingUnitHandler={countDownDigitHandleMarginUnit}
					spacingCombineBtn={countDownDigitMarginLink}
					spacingCombineBtnHandler={countDownDigitMarginCombineBtnHandle} setAttributes={setAttributes}
				/>

				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={countDownDigitBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ countDownDigitBorder: value })}
				/>
				{/** Item Background Control */}
				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={countDownDigitBorderColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ countDownDigitBorderColorSwitcher: value })}
				/>

				{countDownDigitBorderColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={countDownDigitBorderColor}
						setGlobalColor={(value) => setAttributes({ countDownDigitBorderColor: value === undefined ? '' : value })}
					/>
				)}

				{countDownDigitBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={countDownDigitBorderHoverColor}
						setGlobalColor={(value) => setAttributes({ countDownDigitBorderHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_Spacing
					label={'Border Width'}
					deviceType={deviceType}
					spacingUnitsHandler={countDownDigitBorderTypeUnitsHandler}
					spacingUnits={countDownDigitBorderTypeUnits}
					spacingDesktop={countDownDigitBorderTypeDesktop}
					spacingTablet={countDownDigitBorderTypeTablet}
					spacingMobile={countDownDigitBorderTypeMobile}
					handleSpacingUnitHandler={handleCountDownDigitBorderUnitHandlerFn}
					spacingCombineBtn={countDownDigitBorderTypeLink}
					spacingCombineBtnHandler={countDownDigitBorderCombineBtnHandlerFn} setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={'Border Radius'}
					deviceType={deviceType}
					spacingUnitsHandler={countDownDigitBorderRadiusUnitsHandler}
					spacingUnits={countDownDigitBorderRadiusUnits}
					spacingDesktop={countDownDigitBorderRadiusDesktop}
					spacingTablet={countDownDigitBorderRadiusTablet}
					spacingMobile={countDownDigitBorderRadiusMobile}
					handleSpacingUnitHandler={countDownDigitHandleSpacingUnitHandlerFn}
					spacingCombineBtn={countDownDigitBorderRadiusLink}
					spacingCombineBtnHandler={countDownDigitCombineBtnHandlerFn} setAttributes={setAttributes}
				/>

			</PanelBody>

			<PanelBody
				title={__("Label", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_Range
					min={1}
					max={400}
					label={__("Width", "frontis-blocks")}
					rangeValue={countDownLabelWidth}
					onChangeHandler={(value) => setAttributes({ countDownLabelWidth: value })}
					rangeUnitHandler={(value) => setAttributes({ countDownLabelWidthUnits: value })}
					deviceType={deviceType}
					units={countDownLabelWidthUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>

				<FB_Range
					min={1}
					max={400}
					label={__("Height", "frontis-blocks")}
					rangeValue={countDownLabelHeight}
					onChangeHandler={(value) => setAttributes({ countDownLabelHeight: value })}
					rangeUnitHandler={(value) => setAttributes({ countDownLabelHeightUnits: value })}
					deviceType={deviceType}
					units={countDownLabelHeightUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>

				<FB_AlignmentControl
					label={__("Horizontal Alignment", "frontis-blocks")}
					globalAlignment={countDownLabelAlignmentHz}
					setGlobalAlignment={(value) => setAttributes({ countDownLabelAlignmentHz: value })}
				/>

				<FB_AlignmentControl
					label={__("Vertical Alignment", "frontis-blocks")}
					globalAlignment={countDownLabelAlignmentVr}
					setGlobalAlignment={(value) => setAttributes({ countDownLabelAlignmentVr: value })}
				/>

				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={labelGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) => setAttributes({ labelGlobalTypographyData: value })}

					globalTypoType={labelGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							labelGlobalTypoType: value,
							labelGlobalTypoSwitcher: value === 'default' ? { ...labelGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...labelGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
						})
					}}

					globalTypoOption={labelGlobalTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ labelGlobalTypoOption: value })}

					fontFamily={labelFontFamily}
					onChangeFontFamily={(value) => setAttributes({ labelFontFamily: value, labelGlobalTypoSwitcher: { ...labelGlobalTypoSwitcher, fontFamily: value && false } })}

					fontSize={labelFontSize}
					onChangeFontSize={(value) => setAttributes({ labelFontSize: value, labelGlobalTypoSwitcher: { ...labelGlobalTypoSwitcher, fontSize: value && false } })}

					fontSizeUnits={labelFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ labelFontSizeUnits: value })}

					fontWeight={labelFontWeight}
					onChangeFontWeight={(value) => setAttributes({ labelFontWeight: value, labelGlobalTypoSwitcher: { ...labelGlobalTypoSwitcher, fontWeight: value && false } })}

					fontStyle={labelFontStyle}
					onChangeFontStyle={(value) => setAttributes({ labelFontStyle: value, labelGlobalTypoSwitcher: { ...labelGlobalTypoSwitcher, fontStyle: value && false } })}

					textTransform={labelTextTransform}
					onChangeTextTransform={(value) => setAttributes({ labelTextTransform: value, labelGlobalTypoSwitcher: { ...labelGlobalTypoSwitcher, textTransform: value && false } })}

					textDecoration={labelTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ labelTextDecoration: value, labelGlobalTypoSwitcher: { ...labelGlobalTypoSwitcher, textDecoration: value && false } })}

					letterSpacing={labelLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ labelLetterSpacing: value, labelGlobalTypoSwitcher: { ...labelGlobalTypoSwitcher, letterSpacing: value && false } })}

					letterSpacingUnits={labelLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ labelLetterSpacingUnits: value })}

					lineHeight={labelLineHeight}
					onChangeLineHeight={(value) => setAttributes({ labelLineHeight: value, labelGlobalTypoSwitcher: { ...labelGlobalTypoSwitcher, lineHeight: value && false } })}

					lineHeightUnits={labelLineHeightUnits}
					onChangeLineHeightUnit={(value) => setAttributes({ labelLineHeightUnits: value })}

					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={labelFontColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ labelFontColorSwitcher: value })}
				/>

				{labelFontColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={labelFontColor}
						setGlobalColor={(value) => setAttributes({ labelFontColor: value === undefined ? '' : value })}
					/>
				)}

				{labelFontColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={labelFontHoverColor}
						setGlobalColor={(value) => setAttributes({ labelFontHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_SwitcherControl
					label={__("Background Color", "frontis-blocks")}
					globalSwitcher={labelBgColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ labelBgColorSwitcher: value })}
				/>

				{labelBgColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={labelBgColor}
						setGlobalColor={(value) => setAttributes({ labelBgColor: value === undefined ? '' : value })}
					/>
				)}

				{labelBgColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={labelBgHoverColor}
						setGlobalColor={(value) => setAttributes({ labelBgHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_Spacing
					label={'Margin'}
					deviceType={deviceType}
					spacingUnitsHandler={countDownLabelMarginUnitsHandler}
					spacingUnits={countDownLabelMarginUnits}
					spacingDesktop={countDownLabelMarginDesktop}
					spacingTablet={countDownLabelMarginTablet}
					spacingMobile={countDownLabelMarginMobile}
					handleSpacingUnitHandler={countDownLabelHandleMarginUnit}
					spacingCombineBtn={countDownLabelMarginLink}
					spacingCombineBtnHandler={countDownLabelMarginCombineBtnHandle} setAttributes={setAttributes}
				/>

				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={countDownLabelBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ countDownLabelBorder: value })}
				/>
				{/** Item Background Control */}
				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={countDownLabelBorderColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ countDownLabelBorderColorSwitcher: value })}
				/>

				{countDownLabelBorderColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={countDownLabelBorderColor}
						setGlobalColor={(value) => setAttributes({ countDownLabelBorderColor: value === undefined ? '' : value })}
					/>
				)}

				{countDownLabelBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={countDownLabelBorderHoverColor}
						setGlobalColor={(value) => setAttributes({ countDownLabelBorderHoverColor: value === undefined ? '' : value })}
					/>
				)}
				<FB_Spacing
					label={'Border Width'}
					deviceType={deviceType}
					spacingUnitsHandler={countDownLabelBorderTypeUnitsHandler}
					spacingUnits={countDownLabelBorderTypeUnits}
					spacingDesktop={countDownLabelBorderTypeDesktop}
					spacingTablet={countDownLabelBorderTypeTablet}
					spacingMobile={countDownLabelBorderTypeMobile}
					handleSpacingUnitHandler={handleCountDownLabelBorderUnitHandlerFn}
					spacingCombineBtn={countDownLabelBorderTypeLink}
					spacingCombineBtnHandler={countDownLabelBorderCombineBtnHandlerFn} setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={'Border Radius'}
					deviceType={deviceType}
					spacingUnitsHandler={countDownLabelBorderRadiusUnitsHandler}
					spacingUnits={countDownLabelBorderRadiusUnits}
					spacingDesktop={countDownLabelBorderRadiusDesktop}
					spacingTablet={countDownLabelBorderRadiusTablet}
					spacingMobile={countDownLabelBorderRadiusMobile}
					handleSpacingUnitHandler={countDownLabelHandleSpacingUnitHandlerFn}
					spacingCombineBtn={countDownLabelBorderRadiusLink}
					spacingCombineBtnHandler={countDownLabelCombineBtnHandlerFn} setAttributes={setAttributes}
				/>

			</PanelBody>
			{countDownSeparatorEnabled && (
				<PanelBody title={__("Separator", "frontis-blocks")} initialOpen={false}>

					<FB_SwitcherControl
						label={__("Color", "frontis-blocks")}
						globalSwitcher={countDownSeparatorFontColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ countDownSeparatorFontColorSwitcher: value })}
					/>

					{countDownSeparatorFontColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={countDownSeparatorFontColor}
							setGlobalColor={(value) => setAttributes({ countDownSeparatorFontColor: value === undefined ? '' : value })}
						/>
					)}

					{countDownSeparatorFontColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={countDownSeparatorFontHoverColor}
							setGlobalColor={(value) => setAttributes({ countDownSeparatorFontHoverColor: value === undefined ? '' : value })}
						/>
					)}

					<FB_TypographyControl
						globalTypoControlActive={true}
						globalTypoSwitcher={countDownSeparatorGlobalTypoSwitcher}
						storeGlobalTypographyData={(value) => setAttributes({ countDownSeparatorGlobalTypographyData: value })}

						globalTypoType={countDownSeparatorGlobalTypoType}
						onChangeGlobalTypoType={(value) => {
							setAttributes({
								countDownSeparatorGlobalTypoType: value,
								countDownSeparatorGlobalTypoSwitcher: value === 'default' ? { ...countDownSeparatorGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...countDownSeparatorGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
							})
						}}

						globalTypoOption={countDownSeparatorGlobalTypoOption}
						onChangeGlobalTypoOption={(value) => setAttributes({ countDownSeparatorGlobalTypoOption: value })}

						fontFamily={countDownSeparatorFontFamily}
						onChangeFontFamily={(value) => setAttributes({ countDownSeparatorFontFamily: value, countDownSeparatorGlobalTypoSwitcher: { ...countDownSeparatorGlobalTypoSwitcher, fontFamily: value && false } })}

						fontSize={countDownSeparatorFontSize}
						onChangeFontSize={(value) => setAttributes({ countDownSeparatorFontSize: value, countDownSeparatorGlobalTypoSwitcher: { ...countDownSeparatorGlobalTypoSwitcher, fontSize: value && false } })}

						fontSizeUnits={countDownSeparatorFontSizeUnits}
						onChangeFontSizeUnit={(value) => setAttributes({ countDownSeparatorFontSizeUnits: value })}

						fontWeight={countDownSeparatorFontWeight}
						onChangeFontWeight={(value) => setAttributes({ countDownSeparatorFontWeight: value, countDownSeparatorGlobalTypoSwitcher: { ...countDownSeparatorGlobalTypoSwitcher, fontWeight: value && false } })}

						fontStyle={countDownSeparatorFontStyle}
						onChangeFontStyle={(value) => setAttributes({ countDownSeparatorFontStyle: value, countDownSeparatorGlobalTypoSwitcher: { ...countDownSeparatorGlobalTypoSwitcher, fontStyle: value && false } })}

						textTransform={countDownSeparatorTextTransform}
						onChangeTextTransform={(value) => setAttributes({ countDownSeparatorTextTransform: value, countDownSeparatorGlobalTypoSwitcher: { ...countDownSeparatorGlobalTypoSwitcher, textTransform: value && false } })}

						textDecoration={countDownSeparatorTextDecoration}
						onChangeTextDecoration={(value) => setAttributes({ countDownSeparatorTextDecoration: value, countDownSeparatorGlobalTypoSwitcher: { ...countDownSeparatorGlobalTypoSwitcher, textDecoration: value && false } })}

						letterSpacing={countDownSeparatorLetterSpacing}
						onChangeLetterSpacing={(value) => setAttributes({ countDownSeparatorLetterSpacing: value, countDownSeparatorGlobalTypoSwitcher: { ...countDownSeparatorGlobalTypoSwitcher, letterSpacing: value && false } })}

						letterSpacingUnits={countDownSeparatorLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) => setAttributes({ countDownSeparatorLetterSpacingUnits: value })}

						lineHeight={countDownSeparatorLineHeight}
						onChangeLineHeight={(value) => setAttributes({ countDownSeparatorLineHeight: value, countDownSeparatorGlobalTypoSwitcher: { ...countDownSeparatorGlobalTypoSwitcher, lineHeight: value && false } })}

						lineHeightUnits={countDownSeparatorLineHeightUnits}
						onChangeLineHeightUnit={(value) => setAttributes({ countDownSeparatorLineHeightUnits: value })}

						deviceType={deviceType}
						setAttributes={setAttributes}
					/>

					<FB_Range
						min={1}
						max={400}
						label={__("Hz Spacing", "frontis-blocks")}
						rangeValue={countDownSeparatorHorizontalGap}
						onChangeHandler={(value) => setAttributes({ countDownSeparatorHorizontalGap: value })}
						rangeUnitHandler={(value) => setAttributes({ countDownSeparatorHorizontalGapUnits: value })}
						deviceType={deviceType}
						units={countDownSeparatorHorizontalGapUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={70}
					/>

					<FB_Range
						min={1}
						max={400}
						label={__("Vr Spacing", "frontis-blocks")}
						rangeValue={countDownSeparatorVerticalGap}
						onChangeHandler={(value) => setAttributes({ countDownSeparatorVerticalGap: value })}
						rangeUnitHandler={(value) => setAttributes({ countDownSeparatorVerticalGapUnits: value })}
						deviceType={deviceType}
						units={countDownSeparatorVerticalGapUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={20}
					/>
				</PanelBody>
			)}
		</>
	);

	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
		<>
			<PanelBody
				title={__("Layout", "frontis-blocks")}
				initialOpen={true}
			>
				<FB_Range
					min={0}
					max={10000000}
					label={__("Z Index", "frontis-blocks")}
					rangeValue={countDownZIndex}
					onChangeHandler={(value) => setAttributes({ countDownZIndex: value === 0 ? undefined : value })}
					deviceType={deviceType}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
					isRangeUnit={false}
				/>

				<SelectControl
					label={__("Overflow", "frontis-blocks")}
					value={countDownOverflow}
					options={OVERFLOW_OP}
					onChange={(value) => setAttributes({ countDownOverflow: value })}
				/>

				<FB_PositionControl
					deviceType={deviceType}
					positionType={countDownPositionType}
					setPositionType={(value) => setAttributes({ countDownPositionType: value })}

					HZOrientationType={countDownHZOrientationType}
					setHZOrientationType={(value) =>
						setAttributes({ countDownHZOrientationType: value })
					}
					VROrientationType={countDownVROrientationType}
					setVROrientationType={(value) =>
						setAttributes({ countDownVROrientationType: value })
					}

					HZLeftOffset={countDownHZLeftOffset}
					setHZLeftOffset={(value) => setAttributes({ countDownHZLeftOffset: value })}
					HZLeftOffsetUnits={countDownHZLeftOffsetUnits}
					setHZLeftOffsetUnits={(value) => setAttributes({ countDownHZLeftOffsetUnits: value })}
					HZRightOffset={countDownHZRightOffset}
					setHZRightOffset={(value) => setAttributes({ countDownHZRightOffset: value })}
					HZRightOffsetUnits={countDownHZRightOffsetUnits}
					setHZRightOffsetUnits={(value) => setAttributes({ countDownHZRightOffsetUnits: value })}

					VRTopOffset={countDownVRTopOffset}
					setVRTopOffset={(value) => setAttributes({ countDownVRTopOffset: value })}
					VRTopOffsetUnits={countDownVRTopOffsetUnits}
					setVRTopOffsetUnits={(value) => setAttributes({ countDownVRTopOffsetUnits: value })}
					VRBottomOffset={countDownVRBottomOffset}
					setVRBottomOffset={(value) => setAttributes({ countDownVRBottomOffset: value })}
					VRBottomOffsetUnits={countDownVRBottomOffsetUnits}
					setVRBottomOffsetUnits={(value) => setAttributes({ countDownVRBottomOffsetUnits: value })}

					setAttributes={setAttributes}
				/>

				<FB_InputControl
					label={__("CSS ID", "frontis-blocks")}
					value={countDownGlobalWraperID}
					onChangeValue={(value) => setAttributes({ countDownGlobalWraperID: value })}
					helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
				/>

				<FB_InputControl
					label={__("CSS Class", "frontis-blocks")}
					value={countDownGlobalWraperClass}
					onChangeValue={(value) => setAttributes({ countDownGlobalWraperClass: value })}
					helpText={__("Separate with spaces key.", "frontis-blocks")}
				/>

			</PanelBody>
			<PanelBody title={__("Background", "frontis-blocks")} initialOpen={false}>
				<FB_BackgroundColorControl
					bgColorSwitcher={globalBgColorSwitcher}
					setBgColorSwitcher={(value) => setAttributes({ globalBgColorSwitcher: value })}
					normalBackgroundType={globalBackgroundType}
					setNormalBackgroundType={(value) => setAttributes({ globalBackgroundType: value })}
					normalClassicColor={globalClassicColor}
					setNormalClassicColor={(value) => setAttributes({ globalClassicColor: value === undefined ? '' : value })}
					normalGradientColor={globalGradientColor}
					setNormalGradientColor={(value) => setAttributes({ globalGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={globalCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ globalCustomGradientSwitcher: value, })}
					normalCustomGradientInputValue={globalCustomGradientInputValue}
					setNormalCustomGradientInputValue={(value) => setAttributes({ globalCustomGradientInputValue: value, })}
					normalBackgroundImageUrl={globalBackgroundImageUrl}
					setNormalBackgroundImageUrl={(value) => setAttributes({ globalBackgroundImageUrl: value })}
					normalBackgroundImageAlt={globalBackgroundImageAlt}
					setNormalBackgroundImageAlt={(value) => setAttributes({ globalBackgroundImageAlt: value })}
					normalBackgroundImageID={globalBackgroundImageID}
					setNormalBackgroundImageID={(value) => setAttributes({ globalBackgroundImageID: value })}
					normalBackgroundImagePosition={globalBackgroundImagePosition}
					setNormalBackgroundImagePosition={(value) => setAttributes({ globalBackgroundImagePosition: value, })}
					normalBackgroundImageAttachment={globalBackgroundImageAttachment}
					setNormalBackgroundImageAttachment={(value) => setAttributes({ globalBackgroundImageAttachment: value, })}
					normalBackgroundImageRepeat={globalBackgroundImageRepeat}
					setNormalBackgroundImageRepeat={(value) => setAttributes({ globalBackgroundImageRepeat: value, })}
					normalBackgroundImageSize={globalBackgroundImageSize}
					setNormalBackgroundImageSize={(value) => setAttributes({ globalBackgroundImageSize: value })}
					hoverBackgroundType={hoverBackgroundType}
					setHoverBackgroundType={(value) => setAttributes({ hoverBackgroundType: value })}
					hoverClassicColor={hoverClassicColor}
					setHoverClassicColor={(value) => setAttributes({ hoverClassicColor: value === undefined ? '' : value })}
					hoverGradientColor={hoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ hoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={hoverCustomGradientSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ hoverCustomGradientSwitcher: value, })}
					hoverCustomGradientInputValue={hoverCustomGradientInputValue}
					setHoverCustomGradientInputValue={(value) => setAttributes({ hoverCustomGradientInputValue: value, })}
					hoverBackgroundImageUrl={hoverBackgroundImageUrl}
					setHoverBackgroundImageUrl={(value) => setAttributes({ hoverBackgroundImageUrl: value })}
					hoverBackgroundImageAlt={hoverBackgroundImageAlt}
					setHoverBackgroundImageAlt={(value) => setAttributes({ hoverBackgroundImageAlt: value })}
					hoverBackgroundImageID={hoverBackgroundImageID}
					setHoverBackgroundImageID={(value) => setAttributes({ hoverBackgroundImageID: value })}
					hoverBackgroundImagePosition={hoverBackgroundImagePosition}
					setHoverBackgroundImagePosition={(value) => setAttributes({ hoverBackgroundImagePosition: value, })}
					hoverBackgroundImageAttachment={hoverBackgroundImageAttachment}
					setHoverBackgroundImageAttachment={(value) => setAttributes({ hoverBackgroundImageAttachment: value, })}
					hoverBackgroundImageRepeat={hoverBackgroundImageRepeat}
					setHoverBackgroundImageRepeat={(value) => setAttributes({ hoverBackgroundImageRepeat: value, })}
					hoverBackgroundImageSize={hoverBackgroundImageSize}
					setHoverBackgroundImageSize={(value) => setAttributes({ hoverBackgroundImageSize: value })}
				/>

			</PanelBody>
			<PanelBody title={__("Border", "frontis-blocks")} initialOpen={false}>

				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={countDownItemWrapperBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ countDownItemWrapperBorder: value })}
				/>
				{/** Item Background Control */}
				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={countDownItemWrapperBorderColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ countDownItemWrapperBorderColorSwitcher: value })}
				/>

				{countDownItemWrapperBorderColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={countDownItemWrapperBorderColor}
						setGlobalColor={(value) => setAttributes({ countDownItemWrapperBorderColor: value === undefined ? '' : value })}
					/>
				)}

				{countDownItemWrapperBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={countDownItemWrapperBorderHoverColor}
						setGlobalColor={(value) => setAttributes({ countDownItemWrapperBorderHoverColor: value === undefined ? '' : value })}
					/>
				)}
				<FB_Spacing
					label={'Border Width'}
					deviceType={deviceType}
					spacingUnitsHandler={countDownItemWrapperBorderTypeUnitsHandler}
					spacingUnits={countDownItemWrapperBorderTypeUnits}
					spacingDesktop={countDownItemWrapperBorderTypeDesktop}
					spacingTablet={countDownItemWrapperBorderTypeTablet}
					spacingMobile={countDownItemWrapperBorderTypeMobile}
					handleSpacingUnitHandler={handleCountDownItemWrapperBorderUnitHandlerFn}
					spacingCombineBtn={countDownItemWrapperBorderTypeLink}
					spacingCombineBtnHandler={countDownItemWrapperBorderCombineBtnHandlerFn} setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={'Border Radius'}
					deviceType={deviceType}
					spacingUnitsHandler={countDownItemWrapperBorderRadiusUnitsHandler}
					spacingUnits={countDownItemWrapperBorderRadiusUnits}
					spacingDesktop={countDownItemWrapperBorderRadiusDesktop}
					spacingTablet={countDownItemWrapperBorderRadiusTablet}
					spacingMobile={countDownItemWrapperBorderRadiusMobile}
					handleSpacingUnitHandler={countDownItemWrapperHandleSpacingUnitHandlerFn}
					spacingCombineBtn={countDownItemWrapperBorderRadiusLink}
					spacingCombineBtnHandler={countDownItemWrapperCombineBtnHandlerFn} setAttributes={setAttributes}
				/>
			</PanelBody>
			<PanelBody title={__("Padding/Margin", "frontis-blocks")} initialOpen={false}>
				<FB_Spacing
					label={'Padding'}
					deviceType={deviceType}
					spacingUnitsHandler={countDownItemWrapperPaddingSpacingUnitsHandler}
					spacingUnits={countDownItemWrapperPaddingUnits}
					spacingDesktop={countDownItemWrapperPaddingDesktop}
					spacingTablet={countDownItemWrapperPaddingTablet}
					spacingMobile={countDownItemWrapperPaddingMobile}
					handleSpacingUnitHandler={countDownItemWrapperPaddingHandleSpacingUnitHandler}
					spacingCombineBtn={countDownItemWrapperPaddingLink}
					spacingCombineBtnHandler={countDownItemWrapperPaddingSpacingCombineBtnHandlerFn} setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={'Margin'}
					deviceType={deviceType}
					spacingUnitsHandler={countDownItemWrapperMarginSpacingUnitsHandler}
					spacingUnits={countDownItemWrapperMarginUnits}
					spacingDesktop={countDownItemWrapperMarginDesktop}
					spacingTablet={countDownItemWrapperMarginTablet}
					spacingMobile={countDownItemWrapperMarginMobile}
					handleSpacingUnitHandler={countDownItemWrapperMarginHandleSpacingUnitHandler}
					spacingCombineBtn={countDownItemWrapperMarginLink}
					spacingCombineBtnHandler={countDownItemWrapperMarginSpacingCombineBtnHandlerFn} setAttributes={setAttributes}
				/>
			</PanelBody>
			<PanelBody
				title={__("Responsive Control", "frontis-blocks")}
				initialOpen={false}
				className="fb-setting-responsive-control-wrapper"
			>
				<FB_VisibilityControl
					desktopValue={countDownDesktopSwitcher}
					setDesktopValue={(value) => setAttributes({ countDownDesktopSwitcher: value })}

					tabletValue={countDownTabletSwitcher}
					setTabletValue={(value) => setAttributes({ countDownTabletSwitcher: value })}

					mobileValue={countDownMobileSwitcher}
					setMobileValue={(value) => setAttributes({ countDownMobileSwitcher: value })}
				/>
			</PanelBody>
			<PanelBody
				title={__("Custom CSS", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_CustomCSSEditor
					value={countDownGlobalWraperCustomCSS}
					onChangeValue={(value) => setAttributes({ countDownGlobalWraperCustomCSS: value })}
				/>
			</PanelBody>
		</>
	);

	return (
		<>
			<FB_InspectorControls
				generalControls={generalControls}
				styleControls={styleControls}
				advancedControls={advancedControls}
			/>
		</>
	);
}
export default memo(Inspector);