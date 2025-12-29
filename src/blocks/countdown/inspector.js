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
	TabPanel,
	SelectControl,
	BaseControl
} from '@wordpress/components';
import { useEffect, useState, useMemo } from '@wordpress/element';

import {
	BORDER_STYLES,
	LAYOUT_ALIGNMENT,
	LAYOUT_TYPE,
	OVERFLOW_OP,
	PRESETS,
} from "./constants/constants";

import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_BackgroundColorControl from "@Components/background-color-control";
import {SELECT_SEPARATOR_TYPE} from "@Blocks/countdown/constants/constants";
import {useDeviceType} from "@Config/displayType";
import './editor.scss';
import { ButtonGroup } from '@wordpress/components';
import { Button } from '@wordpress/components';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_Presets from '@Components/presets';


export default function Inspector({ attributes, setAttributes, clientId }) {
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

	const deviceType= useDeviceType();
	
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

	// Generate unique block ID if not set
	useEffect(() => {
		if (clientId && typeof clientId === 'string') {
			setAttributes({
				blockID: "countdown-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

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


	{/* Inspector Controls */}
	const handleCountdownItemBorderUnitHandler = ( event, position ) => {
		const value = event.target.value;
		if ( countDownItemBorderTypeLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						countDownItemBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						countDownItemBorderTypeTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						countDownItemBorderTypeMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {countDownItemBorderTypeDesktop: {...countDownItemBorderTypeDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {countDownItemBorderTypeTablet: {...countDownItemBorderTypeTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {countDownItemBorderTypeMobile: {...countDownItemBorderTypeMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const countdownItemBorderCombineBtnHandler = () => {
		setAttributes( {countDownItemBorderTypeLink: !countDownItemBorderTypeLink} );
	}

	const countDownItemBorderUnitsHandler = (unit) => {
		setAttributes( {
			countDownItemBorderTypeUnits: {
				...countDownItemBorderTypeUnits,
				[deviceType]: unit
			}
		})
	}

	const handleCountDownItemBorderRadiusUnitHandler = ( event, position ) => {
		const value = event.target.value;
		if ( countDownItemBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						countDownItemBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						countDownItemBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						countDownItemBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {countDownItemBorderRadiusDesktop: {...countDownItemBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {countDownItemBorderRadiusTablet: {...countDownItemBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {countDownItemBorderRadiusMobile: {...countDownItemBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const countDownItemBorderRadiusCombineBtnHandler = () => {
		setAttributes( {countDownItemBorderRadiusLink: !countDownItemBorderRadiusLink} );
	}

	const countDownItemBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			countDownItemBorderRadiusUnits: {
				...countDownItemBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}

	/** Start Border Type*/
	const handleCountDownItemWrapperBorderUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( countDownItemWrapperBorderTypeLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						countDownItemWrapperBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						countDownItemWrapperBorderTypeTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						countDownItemWrapperBorderTypeMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {countDownItemWrapperBorderTypeDesktop: {...countDownItemWrapperBorderTypeDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {countDownItemWrapperBorderTypeTablet: {...countDownItemWrapperBorderTypeTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {countDownItemWrapperBorderTypeMobile: {...countDownItemWrapperBorderTypeMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const countDownItemWrapperBorderCombineBtnHandlerFn = () => {
		setAttributes( {countDownItemWrapperBorderTypeLink: !countDownItemWrapperBorderTypeLink} );
	}

	const countDownItemWrapperBorderTypeUnitsHandler = (unit) => {
		setAttributes( {
			countDownItemWrapperBorderTypeUnits: {
				...countDownItemWrapperBorderTypeUnits,
				[deviceType]: unit
			}
		})
	}

	/** Start Border Type*/

	/** Start Border Radius*/
	const countDownItemWrapperHandleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( countDownItemWrapperBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						countDownItemWrapperBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						countDownItemWrapperBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						countDownItemWrapperBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {countDownItemWrapperBorderRadiusDesktop: {...countDownItemWrapperBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {countDownItemWrapperBorderRadiusTablet: {...countDownItemWrapperBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {countDownItemWrapperBorderRadiusMobile: {...countDownItemWrapperBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const countDownItemWrapperCombineBtnHandlerFn = () => {
		setAttributes( {countDownItemWrapperBorderRadiusLink: !countDownItemWrapperBorderRadiusLink} );
	}

	const countDownItemWrapperBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			countDownItemWrapperBorderRadiusUnits: {
				...countDownItemWrapperBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}

	/** Start Padding */
	const countDownItemWrapperPaddingHandleSpacingUnitHandler = ( event, position ) => {
		const value = event.target.value;
		if ( countDownItemWrapperPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						countDownItemWrapperPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						countDownItemWrapperPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						countDownItemWrapperPaddingMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {countDownItemWrapperPaddingDesktop: {...countDownItemWrapperPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {countDownItemWrapperPaddingTablet: {...countDownItemWrapperPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {countDownItemWrapperPaddingMobile: {...countDownItemWrapperPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const countDownItemWrapperPaddingSpacingCombineBtnHandlerFn = () => {
		setAttributes( {countDownItemWrapperPaddingLink: !countDownItemWrapperPaddingLink} );
	}

	const countDownItemWrapperPaddingSpacingUnitsHandler = (unit) => {
		setAttributes( {
			countDownItemWrapperPaddingUnits: {
				...countDownItemWrapperPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Padding */

	/** Start Margin */
	const countDownItemWrapperMarginHandleSpacingUnitHandler = ( event, position ) => {
		const value = event.target.value;
		if ( countDownItemWrapperMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						countDownItemWrapperMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						countDownItemWrapperMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						countDownItemWrapperMarginMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {countDownItemWrapperMarginDesktop: {...countDownItemWrapperMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {countDownItemWrapperMarginTablet: {...countDownItemWrapperMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {countDownItemWrapperMarginMobile: {...countDownItemWrapperMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const countDownItemWrapperMarginSpacingCombineBtnHandlerFn = () => {
		setAttributes( {countDownItemWrapperMarginLink: !countDownItemWrapperMarginLink} );
	}

	const countDownItemWrapperMarginSpacingUnitsHandler = (unit) => {
		setAttributes( {
			countDownItemWrapperMarginUnits: {
				...countDownItemWrapperMarginUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Margin */
	{/* Countdown Item Wrapper Control */}
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


	{/* Countdown Item Control */}
	const countDownItemBorderTypeGetDesktop = `${countDownItemBorderTypeDesktop?.top}${countDownItemBorderTypeUnits?.Desktop} ${countDownItemBorderTypeDesktop?.right}${countDownItemBorderTypeUnits?.Desktop} ${countDownItemBorderTypeDesktop?.bottom}${countDownItemBorderTypeUnits?.Desktop} ${countDownItemBorderTypeDesktop?.left}${countDownItemBorderTypeUnits?.Desktop}`;
	const countDownItemBorderTypeGetTablet = `${countDownItemBorderTypeTablet?.top}${countDownItemBorderTypeUnits?.Tablet} ${countDownItemBorderTypeTablet?.right}${countDownItemBorderTypeUnits?.Tablet} ${countDownItemBorderTypeTablet?.bottom}${countDownItemBorderTypeUnits?.Tablet} ${countDownItemBorderTypeTablet?.left}${countDownItemBorderTypeUnits?.Tablet}`;
	const countDownItemBorderTypeGetMobile = `${countDownItemBorderTypeMobile?.top}${countDownItemBorderTypeUnits?.Mobile} ${countDownItemBorderTypeMobile?.right}${countDownItemBorderTypeUnits?.Mobile} ${countDownItemBorderTypeMobile?.bottom}${countDownItemBorderTypeUnits?.Mobile} ${countDownItemBorderTypeMobile?.left}${countDownItemBorderTypeUnits?.Mobile}`;


	const countDownItemBorderRadiusGetDesktop = `${countDownItemBorderRadiusDesktop?.top}${countDownItemBorderRadiusUnits?.Desktop} ${countDownItemBorderRadiusDesktop?.right}${countDownItemBorderRadiusUnits?.Desktop} ${countDownItemBorderRadiusDesktop?.bottom}${countDownItemBorderRadiusUnits?.Desktop} ${countDownItemBorderRadiusDesktop?.left}${countDownItemBorderRadiusUnits?.Desktop}`;
	const countDownItemBorderRadiusGetTablet = `${countDownItemBorderRadiusTablet?.top}${countDownItemBorderRadiusUnits?.Tablet} ${countDownItemBorderRadiusTablet?.right}${countDownItemBorderRadiusUnits?.Tablet} ${countDownItemBorderRadiusTablet?.bottom}${countDownItemBorderRadiusUnits?.Tablet} ${countDownItemBorderRadiusTablet?.left}${countDownItemBorderRadiusUnits?.Tablet}`;
	const countDownItemBorderRadiusGetMobile = `${countDownItemBorderRadiusMobile?.top}${countDownItemBorderRadiusUnits?.Mobile} ${countDownItemBorderRadiusMobile?.right}${countDownItemBorderRadiusUnits?.Mobile} ${countDownItemBorderRadiusMobile?.bottom}${countDownItemBorderRadiusUnits?.Mobile} ${countDownItemBorderRadiusMobile?.left}${countDownItemBorderRadiusUnits?.Mobile}`;



	/** Label Start Border Type*/
	const handleCountDownLabelBorderUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( countDownLabelBorderTypeLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						countDownLabelBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						countDownLabelBorderTypeTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						countDownLabelBorderTypeMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {countDownLabelBorderTypeDesktop: {...countDownLabelBorderTypeDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {countDownLabelBorderTypeTablet: {...countDownLabelBorderTypeTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {countDownLabelBorderTypeMobile: {...countDownLabelBorderTypeMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const countDownLabelBorderCombineBtnHandlerFn = () => {
		setAttributes( {countDownLabelBorderTypeLink: !countDownLabelBorderTypeLink} );
	}

	const countDownLabelBorderTypeUnitsHandler = (unit) => {
		setAttributes( {
			countDownLabelBorderTypeUnits: {
				...countDownLabelBorderTypeUnits,
				[deviceType]: unit
			}
		})
	}

	/** Label Start Border Type*/

	/** Label Start Border Radius*/
	const countDownLabelHandleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( countDownLabelBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						countDownLabelBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						countDownLabelBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						countDownLabelBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {countDownLabelBorderRadiusDesktop: {...countDownLabelBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {countDownLabelBorderRadiusTablet: {...countDownLabelBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {countDownLabelBorderRadiusMobile: {...countDownLabelBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const countDownLabelCombineBtnHandlerFn = () => {
		setAttributes( {countDownLabelBorderRadiusLink: !countDownLabelBorderRadiusLink} );
	}

	const countDownLabelBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			countDownLabelBorderRadiusUnits: {
				...countDownLabelBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}

	// Label Margin
	const countDownLabelHandleMarginUnit = ( event, position ) => {
		const value = event.target.value;
		if ( countDownLabelMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						countDownLabelMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						countDownLabelMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						countDownLabelMarginMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {countDownLabelMarginDesktop: {...countDownLabelMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {countDownLabelMarginTablet: {...countDownLabelMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {countDownLabelMarginMobile: {...countDownLabelMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const countDownLabelMarginCombineBtnHandle = () => {
		setAttributes( {countDownLabelMarginLink: !countDownLabelMarginLink} );
	}

	const countDownLabelMarginUnitsHandler = (unit) => {
		setAttributes( {
			countDownLabelMarginUnits: {
				...countDownLabelMarginUnits,
				[deviceType]: unit
			}
		})
	}

	{/* Countdown Item Label Control */}
	const countDownLabelBorderTypeGetDesktop = `${countDownLabelBorderTypeDesktop?.top}${countDownLabelBorderTypeUnits?.Desktop} ${countDownLabelBorderTypeDesktop?.right}${countDownLabelBorderTypeUnits?.Desktop} ${countDownLabelBorderTypeDesktop?.bottom}${countDownLabelBorderTypeUnits?.Desktop} ${countDownLabelBorderTypeDesktop?.left}${countDownLabelBorderTypeUnits?.Desktop}`;
	const countDownLabelBorderTypeGetTablet = `${countDownLabelBorderTypeTablet?.top}${countDownLabelBorderTypeUnits?.Tablet} ${countDownLabelBorderTypeTablet?.right}${countDownLabelBorderTypeUnits?.Tablet} ${countDownLabelBorderTypeTablet?.bottom}${countDownLabelBorderTypeUnits?.Tablet} ${countDownLabelBorderTypeTablet?.left}${countDownLabelBorderTypeUnits?.Tablet}`;
	const countDownLabelBorderTypeGetMobile = `${countDownLabelBorderTypeMobile?.top}${countDownLabelBorderTypeUnits?.Mobile} ${countDownLabelBorderTypeMobile?.right}${countDownLabelBorderTypeUnits?.Mobile} ${countDownLabelBorderTypeMobile?.bottom}${countDownLabelBorderTypeUnits?.Mobile} ${countDownLabelBorderTypeMobile?.left}${countDownLabelBorderTypeUnits?.Mobile}`;

	const countDownLabelBorderRadiusGetDesktop = `${countDownLabelBorderRadiusDesktop?.top}${countDownLabelBorderRadiusUnits?.Desktop} ${countDownLabelBorderRadiusDesktop?.right}${countDownLabelBorderRadiusUnits?.Desktop} ${countDownLabelBorderRadiusDesktop?.bottom}${countDownLabelBorderRadiusUnits?.Desktop} ${countDownLabelBorderRadiusDesktop?.left}${countDownLabelBorderRadiusUnits?.Desktop}`;
	const countDownLabelBorderRadiusGetTablet = `${countDownLabelBorderRadiusTablet?.top}${countDownLabelBorderRadiusUnits?.Tablet} ${countDownLabelBorderRadiusTablet?.right}${countDownLabelBorderRadiusUnits?.Tablet} ${countDownLabelBorderRadiusTablet?.bottom}${countDownLabelBorderRadiusUnits?.Tablet} ${countDownLabelBorderRadiusTablet?.left}${countDownLabelBorderRadiusUnits?.Tablet}`;
	const countDownLabelBorderRadiusGetMobile = `${countDownLabelBorderRadiusMobile?.top}${countDownLabelBorderRadiusUnits?.Mobile} ${countDownLabelBorderRadiusMobile?.right}${countDownLabelBorderRadiusUnits?.Mobile} ${countDownLabelBorderRadiusMobile?.bottom}${countDownLabelBorderRadiusUnits?.Mobile} ${countDownLabelBorderRadiusMobile?.left}${countDownLabelBorderRadiusUnits?.Mobile}`;

	const countDownLabelMarginGetDesktop = `${countDownLabelMarginDesktop?.top}${countDownLabelMarginUnits?.Desktop} ${countDownLabelMarginDesktop?.right}${countDownLabelMarginUnits?.Desktop} ${countDownLabelMarginDesktop?.bottom}${countDownLabelMarginUnits?.Desktop} ${countDownLabelMarginDesktop?.left}${countDownLabelMarginUnits?.Desktop}`;
	const countDownLabelMarginGetTablet = `${countDownLabelMarginTablet?.top}${countDownLabelMarginUnits?.Tablet} ${countDownLabelMarginTablet?.right}${countDownLabelMarginUnits?.Tablet} ${countDownLabelMarginTablet?.bottom}${countDownLabelMarginUnits?.Tablet} ${countDownLabelMarginTablet?.left}${countDownLabelMarginUnits?.Tablet}`;
	const countDownLabelMarginGetMobile = `${countDownLabelMarginMobile?.top}${countDownLabelMarginUnits?.Mobile} ${countDownLabelMarginMobile?.right}${countDownLabelMarginUnits?.Mobile} ${countDownLabelMarginMobile?.bottom}${countDownLabelMarginUnits?.Mobile} ${countDownLabelMarginMobile?.left}${countDownLabelMarginUnits?.Mobile}`;



	/** Digit Start Border Type*/
	const handleCountDownDigitBorderUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( countDownDigitBorderTypeLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						countDownDigitBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						countDownDigitBorderTypeTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						countDownDigitBorderTypeMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {countDownDigitBorderTypeDesktop: {...countDownDigitBorderTypeDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {countDownDigitBorderTypeTablet: {...countDownDigitBorderTypeTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {countDownDigitBorderTypeMobile: {...countDownDigitBorderTypeMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const countDownDigitBorderCombineBtnHandlerFn = () => {
		setAttributes( {countDownDigitBorderTypeLink: !countDownDigitBorderTypeLink} );
	}

	const countDownDigitBorderTypeUnitsHandler = (unit) => {
		setAttributes( {
			countDownDigitBorderTypeUnits: {
				...countDownDigitBorderTypeUnits,
				[deviceType]: unit
			}
		})
	}

	/** Digit Start Border Type*/

	/** Digit Start Border Radius*/
	const countDownDigitHandleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( countDownDigitBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						countDownDigitBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						countDownDigitBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						countDownDigitBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {countDownDigitBorderRadiusDesktop: {...countDownDigitBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {countDownDigitBorderRadiusTablet: {...countDownDigitBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {countDownDigitBorderRadiusMobile: {...countDownDigitBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const countDownDigitCombineBtnHandlerFn = () => {
		setAttributes( {countDownDigitBorderRadiusLink: !countDownDigitBorderRadiusLink} );
	}

	const countDownDigitBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			countDownDigitBorderRadiusUnits: {
				...countDownDigitBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}

	// Digit Margin
	const countDownDigitHandleMarginUnit = ( event, position ) => {
		const value = event.target.value;
		if ( countDownDigitMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						countDownDigitMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						countDownDigitMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						countDownDigitMarginMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {countDownDigitMarginDesktop: {...countDownDigitMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {countDownDigitMarginTablet: {...countDownDigitMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {countDownDigitMarginMobile: {...countDownDigitMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const countDownDigitMarginCombineBtnHandle = () => {
		setAttributes( {countDownDigitMarginLink: !countDownDigitMarginLink} );
	}

	const countDownDigitMarginUnitsHandler = (unit) => {
		setAttributes( {
			countDownDigitMarginUnits: {
				...countDownDigitMarginUnits,
				[deviceType]: unit
			}
		})
	}


	{/* Countdown Item Digit Control */}
	const countDownDigitBorderTypeGetDesktop = `${countDownDigitBorderTypeDesktop?.top}${countDownDigitBorderTypeUnits?.Desktop} ${countDownDigitBorderTypeDesktop?.right}${countDownDigitBorderTypeUnits?.Desktop} ${countDownDigitBorderTypeDesktop?.bottom}${countDownDigitBorderTypeUnits?.Desktop} ${countDownDigitBorderTypeDesktop?.left}${countDownDigitBorderTypeUnits?.Desktop}`;
	const countDownDigitBorderTypeGetTablet = `${countDownDigitBorderTypeTablet?.top}${countDownDigitBorderTypeUnits?.Tablet} ${countDownDigitBorderTypeTablet?.right}${countDownDigitBorderTypeUnits?.Tablet} ${countDownDigitBorderTypeTablet?.bottom}${countDownDigitBorderTypeUnits?.Tablet} ${countDownDigitBorderTypeTablet?.left}${countDownDigitBorderTypeUnits?.Tablet}`;
	const countDownDigitBorderTypeGetMobile = `${countDownDigitBorderTypeMobile?.top}${countDownDigitBorderTypeUnits?.Mobile} ${countDownDigitBorderTypeMobile?.right}${countDownDigitBorderTypeUnits?.Mobile} ${countDownDigitBorderTypeMobile?.bottom}${countDownDigitBorderTypeUnits?.Mobile} ${countDownDigitBorderTypeMobile?.left}${countDownDigitBorderTypeUnits?.Mobile}`;

	const countDownDigitBorderRadiusGetDesktop = `${countDownDigitBorderRadiusDesktop?.top}${countDownDigitBorderRadiusUnits?.Desktop} ${countDownDigitBorderRadiusDesktop?.right}${countDownDigitBorderRadiusUnits?.Desktop} ${countDownDigitBorderRadiusDesktop?.bottom}${countDownDigitBorderRadiusUnits?.Desktop} ${countDownDigitBorderRadiusDesktop?.left}${countDownDigitBorderRadiusUnits?.Desktop}`;
	const countDownDigitBorderRadiusGetTablet = `${countDownDigitBorderRadiusTablet?.top}${countDownDigitBorderRadiusUnits?.Tablet} ${countDownDigitBorderRadiusTablet?.right}${countDownDigitBorderRadiusUnits?.Tablet} ${countDownDigitBorderRadiusTablet?.bottom}${countDownDigitBorderRadiusUnits?.Tablet} ${countDownDigitBorderRadiusTablet?.left}${countDownDigitBorderRadiusUnits?.Tablet}`;
	const countDownDigitBorderRadiusGetMobile = `${countDownDigitBorderRadiusMobile?.top}${countDownDigitBorderRadiusUnits?.Mobile} ${countDownDigitBorderRadiusMobile?.right}${countDownDigitBorderRadiusUnits?.Mobile} ${countDownDigitBorderRadiusMobile?.bottom}${countDownDigitBorderRadiusUnits?.Mobile} ${countDownDigitBorderRadiusMobile?.left}${countDownDigitBorderRadiusUnits?.Mobile}`;

	const countDownDigitMarginGetDesktop = `${countDownDigitMarginDesktop?.top}${countDownDigitMarginUnits?.Desktop} ${countDownDigitMarginDesktop?.right}${countDownDigitMarginUnits?.Desktop} ${countDownDigitMarginDesktop?.bottom}${countDownDigitMarginUnits?.Desktop} ${countDownDigitMarginDesktop?.left}${countDownDigitMarginUnits?.Desktop}`;
	const countDownDigitMarginGetTablet = `${countDownDigitMarginTablet?.top}${countDownDigitMarginUnits?.Tablet} ${countDownDigitMarginTablet?.right}${countDownDigitMarginUnits?.Tablet} ${countDownDigitMarginTablet?.bottom}${countDownDigitMarginUnits?.Tablet} ${countDownDigitMarginTablet?.left}${countDownDigitMarginUnits?.Tablet}`;
	const countDownDigitMarginGetMobile = `${countDownDigitMarginMobile?.top}${countDownDigitMarginUnits?.Mobile} ${countDownDigitMarginMobile?.right}${countDownDigitMarginUnits?.Mobile} ${countDownDigitMarginMobile?.bottom}${countDownDigitMarginUnits?.Mobile} ${countDownDigitMarginMobile?.left}${countDownDigitMarginUnits?.Mobile}`;



	/** Start Preset Style */
	const changeCountDownPreset = (selectedPreset) => {
        const presetConfigurations = {
            "default": {
				"countDownFlexWrap": true,
				"countDownLayoutType": "flex",
				"countDownLayoutAlignment": "center",
				"countDownItemGap": {
					"Desktop": "104",
					"Tablet": "104",
					"Mobile": "60"
				},
				"countDownItemWrapperBorderRadiusDesktop": {
					"top": "14",
					"bottom": "14",
					"left": "14",
					"right": "14"
				},
				"countDownItemWrapperBorderRadiusTablet": {
					"top": "14",
					"bottom": "14",
					"left": "14",
					"right": "14"
				},
				"countDownItemWrapperBorderRadiusMobile": {
					"top": "14",
					"bottom": "14",
					"left": "14",
					"right": "14"
				},
				"countDownItemWrapperPaddingDesktop": {
					"top": "24",
					"bottom": "24",
					"left": "42",
					"right": "42"
				},
				"countDownItemWrapperPaddingTablet": {
					"top": "24",
					"bottom": "24",
					"left": "42",
					"right": "42"
				},
				"countDownItemWrapperPaddingMobile": {
					"top": "24",
					"bottom": "24",
					"left": "42",
					"right": "42"
				},
				"countDownLabelMarginDesktop": {
					"top": "10",
					"bottom": "0",
					"left": "0",
					"right": "0"
				},
				"countDownLabelMarginTablet": {
					"top": "10",
					"bottom": "0",
					"left": "0",
					"right": "0"
				},
				"countDownLabelMarginMobile": {
					"top": "10",
					"bottom": "0",
					"left": "0",
					"right": "0"
				},
				"singleDigitFontColorSwitcher": false,
				"digitFontColor": "#FFFFFF",
				"digitFontHoverColor": "#FFFFFF",
				"digitFontSize": {
					"Desktop": "62",
					"Tablet": "48",
					"Mobile": "32"
				},
				"digitFontWeight": "500",
				"digitLineHeight": {
					"Desktop": "80",
					"Tablet": "60",
					"Mobile": "42"
				},
				"labelFontColor": "#FFFFFF",
				"labelFontHoverColor": "#FFFFFF",
				"labelFontSize": {
					"Desktop": "18",
					"Tablet": "",
					"Mobile": ""
				},
				"labelFontWeight": "",
				"labelLineHeight": {
					"Desktop": "25",
					"Tablet": "",
					"Mobile": ""
				},
				"countDownSeparatorEnabled": true,
				"countDownSeparatorType": "colon",
				"countDownSeparatorFontColor": "#ffffff",
				"countDownSeparatorFontHoverColor": "#ffffff",
				"countDownSeparatorFontSize": {
					"Desktop": "48",
					"Tablet": "42",
					"Mobile": "38"
				},
				"countDownSeparatorFontWeight": "",
				"countDownSeparatorHorizontalGap": {
					"Desktop": "60",
					"Tablet": "60",
					"Mobile": "60"
				},
				"countDownSeparatorVerticalGap": {
					"Desktop": "40",
					"Tablet": "40",
					"Mobile": "40"
				},
				"globalClassicColor": "#399CFF",
				"labelBgColor": "",
				"labelBgHoverColor": "",
				"countDownLabelBorderColor": "",
					"countDownLabelBorder": "none",
					"countDownLabelBorderTypeDesktop": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownLabelBorderTypeTablet": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownLabelBorderTypeMobile": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownLabelBorderTypeLink": true,
					"countDownLabelBorderRadiusUnits": {
						"Desktop": "px",
						"Tablet": "px",
						"Mobile": "px"
					},
					"countDownLabelBorderRadiusDesktop": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownLabelBorderRadiusTablet": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownLabelBorderRadiusMobile": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
				"countDownLabelHeight": {
						"Desktop": "",
						"Tablet": "",
						"Mobile": ""
					},
					"countDownDigitBorderColor": "",
					"countDownDigitBorder": "none",
					"countDownDigitBorderTypeDesktop": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownDigitBorderTypeTablet": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownDigitBorderTypeMobile": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownDigitBorderRadiusDesktop": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownDigitBorderRadiusTablet": {
						"top": "",
						"bottom": "",
						"left": "",
						"right": ""
					},
					"countDownDigitBorderRadiusMobile": {
						"top": "",
						"bottom": "",
						"left": "",
						"right": ""
					},
					"countDownDigitHeight": {
						"Desktop": "",
						"Tablet": "",
						"Mobile": ""
					},
			},
            "preset-1": {
				"countDownFlexWrap": true,
				"countDownLayoutType": "flex",
				"countDownLayoutAlignment": "center",
				"countDownItemGap": {
					"Desktop": "68",
					"Tablet": "68",
					"Mobile": "40"
				},
				"countDownItemWrapperBorderRadiusDesktop": {
					"top": "10",
					"bottom": "10",
					"left": "10",
					"right": "10"
				},
				"countDownItemWrapperBorderRadiusTablet": {
					"top": "10",
					"bottom": "10",
					"left": "10",
					"right": "10"
				},
				"countDownItemWrapperBorderRadiusMobile": {
					"top": "10",
					"bottom": "10",
					"left": "10",
					"right": "10"
				},
				"countDownItemWrapperPaddingDesktop": {
					"top": "32",
					"bottom": "32",
					"left": "42",
					"right": "42"
				},
				"countDownItemWrapperPaddingTablet": {
					"top": "24",
					"bottom": "24",
					"left": "42",
					"right": "42"
				},
				"countDownItemWrapperPaddingMobile": {
					"top": "24",
					"bottom": "24",
					"left": "42",
					"right": "42"
				},
				"countDownLabelMarginDesktop": {
					"top": "0",
					"bottom": "0",
					"left": "0",
					"right": "0"
				},
				"countDownLabelMarginTablet": {
					"top": "0",
					"bottom": "0",
					"left": "0",
					"right": "0"
				},
				"countDownLabelMarginMobile": {
					"top": "0",
					"bottom": "0",
					"left": "0",
					"right": "0"
				},
				"singleDigitFontColorSwitcher": true,
				"daysDigitFontColorSwitcher": "normal",
				"daysDigitFontColor": "#e43242",
				"daysDigitFontHoverColor": "",
				"hoursDigitFontColorSwitcher": "normal",
				"hoursDigitFontColor": "#4caf50",
				"hoursDigitFontHoverColor": "",
				"minutesDigitFontColorSwitcher": "normal",
				"minutesDigitFontColor": "#f89b2e",
				"minutesDigitFontHoverColor": "",
				"secondsDigitFontColorSwitcher": "normal",
				"secondsDigitFontColor": "#399cff",
				"secondsDigitFontHoverColor": "",
				"digitFontSize": {
					"Desktop": "62",
					"Tablet": "48",
					"Mobile": "32"
				},
				"digitFontWeight": "500",
				"digitLineHeight": {
					"Desktop": "80",
					"Tablet": "60",
					"Mobile": "42"
				},
				"labelFontColor": "#8891a5",
				"labelFontHoverColor": "#8891a5",
				"labelFontSize": {
					"Desktop": "18",
					"Tablet": "",
					"Mobile": ""
				},
				"labelFontWeight": "400",
				"labelLineHeight": {
					"Desktop": "25",
					"Tablet": "",
					"Mobile": ""
				},
				"countDownSeparatorEnabled": true,
				"countDownSeparatorType": "line",
				"countDownSeparatorFontColor": "#e1e3e8",
				"countDownSeparatorFontHoverColor": "#e1e3e8",
				"countDownSeparatorFontSize": {
					"Desktop": "100",
					"Tablet": "42",
					"Mobile": "38"
				},
				"countDownSeparatorFontWeight": "100",
				"countDownSeparatorHorizontalGap": {
					"Desktop": "45",
					"Tablet": "60",
					"Mobile": "60"
				},
				"countDownSeparatorVerticalGap": {
					"Desktop": "51",
					"Tablet": "40",
					"Mobile": "40"
				},
				"globalClassicColor": "#f7f7f7",
				"labelBgColor": "",
				"labelBgHoverColor": "",
				"countDownLabelBorderColor": "",
					"countDownLabelBorder": "none",
					"countDownLabelBorderTypeDesktop": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownLabelBorderTypeTablet": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownLabelBorderTypeMobile": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownLabelBorderTypeLink": true,
					"countDownLabelBorderRadiusUnits": {
						"Desktop": "px",
						"Tablet": "px",
						"Mobile": "px"
					},
					"countDownLabelBorderRadiusDesktop": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownLabelBorderRadiusTablet": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownLabelBorderRadiusMobile": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
				"countDownLabelHeight": {
						"Desktop": "",
						"Tablet": "",
						"Mobile": ""
					},
					"countDownDigitBorderColor": "",
					"countDownDigitBorder": "none",
					"countDownDigitBorderTypeDesktop": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownDigitBorderTypeTablet": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownDigitBorderTypeMobile": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownDigitBorderRadiusDesktop": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownDigitBorderRadiusTablet": {
						"top": "",
						"bottom": "",
						"left": "",
						"right": ""
					},
					"countDownDigitBorderRadiusMobile": {
						"top": "",
						"bottom": "",
						"left": "",
						"right": ""
					},
					"countDownDigitHeight": {
						"Desktop": "",
						"Tablet": "",
						"Mobile": ""
					},
			},
            "preset-2": {
                "countDownFlexWrap": true,
				"countDownLayoutType": "flex",
				"countDownLayoutAlignment": "center",
				"countDownItemGap": {
					"Desktop": "104",
					"Tablet": "104",
					"Mobile": "60"
				},
				"countDownItemWrapperBorderRadiusDesktop": {
					"top": "14",
					"bottom": "14",
					"left": "14",
					"right": "14"
				},
				"countDownItemWrapperBorderRadiusTablet": {
					"top": "14",
					"bottom": "14",
					"left": "14",
					"right": "14"
				},
				"countDownItemWrapperBorderRadiusMobile": {
					"top": "14",
					"bottom": "14",
					"left": "14",
					"right": "14"
				},
				"countDownItemWrapperPaddingDesktop": {
					"top": "0",
					"bottom": "0",
					"left": "0",
					"right": "0"
				},
				"countDownItemWrapperPaddingTablet": {
					"top": "0",
					"bottom": "0",
					"left": "0",
					"right": "0"
				},
				"countDownItemWrapperPaddingMobile": {
					"top": "0",
					"bottom": "0",
					"left": "0",
					"right": "0"
				},
				"countDownLabelMarginDesktop": {
					"top": "0",
					"bottom": "0",
					"left": "0",
					"right": "0"
				},
				"countDownLabelMarginTablet": {
					"top": "0",
					"bottom": "0",
					"left": "0",
					"right": "0"
				},
				"countDownLabelMarginMobile": {
					"top": "0",
					"bottom": "0",
					"left": "0",
					"right": "0"
				},
				"singleDigitFontColorSwitcher": false,
				"digitFontColor": "#15171C",
				"digitFontHoverColor": "#15171C",
				"digitFontSize": {
					"Desktop": "62",
					"Tablet": "48",
					"Mobile": "32"
				},
				"digitFontWeight": "500",
				"digitLineHeight": {
					"Desktop": "80",
					"Tablet": "60",
					"Mobile": "42"
				},
				"labelFontColor": "#6A758E",
				"labelFontHoverColor": "#6A758E",
				"labelFontSize": {
					"Desktop": "18",
					"Tablet": "",
					"Mobile": ""
				},
				"labelFontWeight": "",
				"labelLineHeight": {
					"Desktop": "25",
					"Tablet": "",
					"Mobile": ""
				},
				"countDownSeparatorEnabled": true,
				"countDownSeparatorType": "colon",
				"countDownSeparatorFontColor": "#15171C",
				"countDownSeparatorFontHoverColor": "#15171C",
				"countDownSeparatorFontSize": {
					"Desktop": "48",
					"Tablet": "42",
					"Mobile": "38"
				},
				"countDownSeparatorFontWeight": "",
				"countDownSeparatorHorizontalGap": {
					"Desktop": "60",
					"Tablet": "60",
					"Mobile": "60"
				},
				"countDownSeparatorVerticalGap": {
					"Desktop": "40",
					"Tablet": "40",
					"Mobile": "40"
				},
				"globalClassicColor": "",
				"labelBgColor": "",
				"labelBgHoverColor": "",
				"countDownLabelBorderColor": "",
					"countDownLabelBorder": "none",
					"countDownLabelBorderTypeDesktop": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownLabelBorderTypeTablet": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownLabelBorderTypeMobile": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownLabelBorderTypeLink": true,
					"countDownLabelBorderRadiusUnits": {
						"Desktop": "px",
						"Tablet": "px",
						"Mobile": "px"
					},
					"countDownLabelBorderRadiusDesktop": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownLabelBorderRadiusTablet": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownLabelBorderRadiusMobile": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
				"countDownLabelHeight": {
						"Desktop": "",
						"Tablet": "",
						"Mobile": ""
					},
					"countDownDigitBorderColor": "",
					"countDownDigitBorder": "none",
					"countDownDigitBorderTypeDesktop": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownDigitBorderTypeTablet": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownDigitBorderTypeMobile": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownDigitBorderRadiusDesktop": {
						"top": "",
						"right": "",
						"bottom": "",
						"left": ""
					},
					"countDownDigitBorderRadiusTablet": {
						"top": "",
						"bottom": "",
						"left": "",
						"right": ""
					},
					"countDownDigitBorderRadiusMobile": {
						"top": "",
						"bottom": "",
						"left": "",
						"right": ""
					},
					"countDownDigitHeight": {
						"Desktop": "",
						"Tablet": "",
						"Mobile": ""
					},
            },
            "preset-3": {
					"countDownLayoutType": "grid",
					"countDownLayoutAlignment": "center",
					"countDownGrid": {
						"Desktop": "4",
						"Tablet": "3",
						"Mobile": "2"
					},
					"countDownItemGap": {
						"Desktop": "120",
						"Tablet": "80",
						"Mobile": "50"
					},
					"countDownItemWrapperBorderRadiusUnits": {
						"Desktop": "px",
						"Tablet": "px",
						"Mobile": "px"
					},
					"countDownItemWrapperBorderRadiusDesktop": {
						"top": "14",
						"bottom": "14",
						"left": "14",
						"right": "14"
					},
					"countDownItemWrapperBorderRadiusTablet": {
						"top": "14",
						"bottom": "14",
						"left": "14",
						"right": "14"
					},
					"countDownItemWrapperBorderRadiusMobile": {
						"top": "14",
						"bottom": "14",
						"left": "14",
						"right": "14"
					},
					"countDownItemWrapperPaddingDesktop": {
						"top": "42",
						"right": "42",
						"bottom": "42",
						"left": "42"
					},
					"countDownItemWrapperPaddingTablet": {
						"top": "24",
						"bottom": "24",
						"left": "42",
						"right": "42"
					},
					"countDownItemWrapperPaddingMobile": {
						"top": "24",
						"bottom": "24",
						"left": "42",
						"right": "42"
					},
					"singleDigitFontColorSwitcher": false,
					"digitFontColor": "#ffffff",
					"digitFontHoverColor": "#ffffff",
					"digitFontSize": {
						"Desktop": "62",
						"Tablet": "48",
						"Mobile": "32"
					},
					"digitFontWeight": "500",
					"digitLineHeight": {
						"Desktop": "80",
						"Tablet": "60",
						"Mobile": "42"
					},
					"labelFontColor": "#FFFFFF",
					"labelFontHoverColor": "#FFFFFF",
					"labelBgColor": "#5d98ff",
					"labelBgHoverColor": "",
					"labelFontSize": {
						"Desktop": "18",
						"Tablet": "",
						"Mobile": ""
					},
					"labelLineHeight": {
						"Desktop": "25",
						"Tablet": "",
						"Mobile": ""
					},
					"countDownSeparatorEnabled": true,
					"countDownSeparatorType": "colon",
					"countDownSeparatorCustom": "",
					"countDownSeparatorFontColorSwitcher": "normal",
					"countDownSeparatorFontColor": "#ffffff",
					"countDownSeparatorFontHoverColor": "#ffffff",
					"countDownSeparatorFontSize": {
						"Desktop": "62",
						"Tablet": "42",
						"Mobile": "38"
					},
					"countDownSeparatorFontSizeUnits": {
						"Desktop": "px",
						"Tablet": "px",
						"Mobile": "px"
					},
					"countDownSeparatorFontWeight": "500",
					"countDownSeparatorLineHeight": {
						"Desktop": "80",
						"Tablet": "",
						"Mobile": ""
					},
					"countDownSeparatorHorizontalGap": {
						"Desktop": "70",
						"Tablet": "60",
						"Mobile": "60"
					},
					"countDownSeparatorHorizontalGapUnits": {
						"Desktop": "px",
						"Tablet": "px",
						"Mobile": "px"
					},
					"countDownSeparatorVerticalGap": {
						"Desktop": "82",
						"Tablet": "40",
						"Mobile": "40"
					},
					"countDownSeparatorVerticalGapUnits": {
						"Desktop": "px",
						"Tablet": "px",
						"Mobile": "px"
					},
					"globalBackgroundType": "classic",
					"globalClassicColor": "#5b0ac6",
					"countDownLabelBorderColor": "#5d98ff",
					"countDownLabelBorder": "solid",
					"countDownLabelBorderTypeUnits": {
						"Desktop": "px",
						"Tablet": "px",
						"Mobile": "px"
					},
					"countDownLabelBorderTypeDesktop": {
						"top": "1",
						"right": "1",
						"bottom": "1",
						"left": "1"
					},
					"countDownLabelBorderTypeTablet": {
						"top": "1",
						"right": "1",
						"bottom": "1",
						"left": "1"
					},
					"countDownLabelBorderTypeMobile": {
						"top": "1",
						"right": "1",
						"bottom": "1",
						"left": "1"
					},
					"countDownLabelBorderTypeLink": true,
					"countDownLabelBorderRadiusUnits": {
						"Desktop": "px",
						"Tablet": "px",
						"Mobile": "px"
					},
					"countDownLabelBorderRadiusDesktop": {
						"top": "0",
						"right": "0",
						"bottom": "10",
						"left": "10"
					},
					"countDownLabelBorderRadiusTablet": {
						"top": "0",
						"right": "0",
						"bottom": "10",
						"left": "10"
					},
					"countDownLabelBorderRadiusMobile": {
						"top": "0",
						"right": "0",
						"bottom": "10",
						"left": "10"
					},
					"countDownLabelBorderRadiusLink": false,
					"countDownLabelMarginUnits": {
						"Desktop": "px",
						"Tablet": "px",
						"Mobile": "px"
					},
					"countDownLabelMarginDesktop": {
						"top": "0",
						"right": "0",
						"bottom": "0",
						"left": "0"
					},
					"countDownLabelMarginTablet": {
						"top": "0",
						"bottom": "0",
						"left": "0",
						"right": "0"
					},
					"countDownLabelMarginMobile": {
						"top": "0",
						"bottom": "0",
						"left": "0",
						"right": "0"
					},
					"countDownLabelHeight": {
						"Desktop": "50",
						"Tablet": "",
						"Mobile": ""
					},
					"countDownDigitBorderColor": "#5d98ff80",
					"countDownDigitBorder": "solid",
					"countDownDigitBorderTypeDesktop": {
						"top": "1",
						"right": "1",
						"bottom": "0",
						"left": "1"
					},
					"countDownDigitBorderTypeTablet": {
						"top": "1",
						"right": "1",
						"bottom": "0",
						"left": "1"
					},
					"countDownDigitBorderTypeMobile": {
						"top": "1",
						"right": "1",
						"bottom": "0",
						"left": "1"
					},
					"countDownDigitBorderRadiusDesktop": {
						"top": "10",
						"right": "10",
						"bottom": "0",
						"left": "0"
					},
					"countDownDigitBorderRadiusTablet": {
						"top": "10",
						"bottom": "10",
						"left": "",
						"right": ""
					},
					"countDownDigitBorderRadiusMobile": {
						"top": "10",
						"bottom": "10",
						"left": "",
						"right": ""
					},
					"countDownDigitHeight": {
						"Desktop": "130",
						"Tablet": "",
						"Mobile": ""
					},
            },
        };

        const selectedPresetConfig = presetConfigurations[selectedPreset];

        if (selectedPresetConfig) {
            setAttributes({
                countDownPresetStyle: selectedPreset,
                ...selectedPresetConfig,
            });
        } else {
            console.warn(`Countdown: Preset "${selectedPreset}" not found.`);
        }
    };
    /** End Preset Style */

	/**
	 * Preset Styles Data Object
	*/
	const presetStyles = {
		"preset-1": {
			"countDownFlexWrap": true,
			"countDownLayoutType": "flex",
			"countDownLayoutAlignment": "center",
			"countDownItemGap": {
				"Desktop": "72",
				"Tablet": "72",
				"Mobile": "60"
			},
			"countDownItemWrapperBorderRadiusDesktop": {
				"top": "14",
				"bottom": "14",
				"left": "14",
				"right": "14"
			},
			"countDownItemWrapperBorderRadiusTablet": {
				"top": "14",
				"bottom": "14",
				"left": "14",
				"right": "14"
			},
			"countDownItemWrapperBorderRadiusMobile": {
				"top": "14",
				"bottom": "14",
				"left": "14",
				"right": "14"
			},
			"countDownItemWrapperPaddingDesktop": {
				"top": "24",
				"bottom": "24",
				"left": "42",
				"right": "42"
			},
			"countDownItemWrapperPaddingTablet": {
				"top": "24",
				"bottom": "24",
				"left": "42",
				"right": "42"
			},
			"countDownItemWrapperPaddingMobile": {
				"top": "24",
				"bottom": "24",
				"left": "42",
				"right": "42"
			},
			"countDownLabelMarginDesktop": {
				"top": "10",
				"bottom": "0",
				"left": "0",
				"right": "0"
			},
			"countDownLabelMarginTablet": {
				"top": "10",
				"bottom": "0",
				"left": "0",
				"right": "0"
			},
			"countDownLabelMarginMobile": {
				"top": "10",
				"bottom": "0",
				"left": "0",
				"right": "0"
			},
			"singleDigitFontColorSwitcher": false,
			"digitFontColor": "#FFFFFF",
			"digitFontHoverColor": "#FFFFFF",
			"digitFontSize": {
				"Desktop": "62",
				"Tablet": "48",
				"Mobile": "32"
			},
			"digitFontWeight": "500",
			"digitLineHeight": {
				"Desktop": "80",
				"Tablet": "60",
				"Mobile": "42"
			},
			"labelFontColor": "#FFFFFF",
			"labelFontHoverColor": "#FFFFFF",
			"labelFontSize": {
				"Desktop": "18",
				"Tablet": "",
				"Mobile": ""
			},
			"labelFontWeight": "",
			"labelLineHeight": {
				"Desktop": "25",
				"Tablet": "",
				"Mobile": ""
			},
			"countDownSeparatorEnabled": true,
			"countDownSeparatorType": "colon",
			"countDownSeparatorFontColor": "#ffffff",
			"countDownSeparatorFontHoverColor": "#ffffff",
			"countDownSeparatorFontSize": {
				"Desktop": "48",
				"Tablet": "42",
				"Mobile": "38"
			},
			"countDownSeparatorFontWeight": "",
			"countDownSeparatorHorizontalGap": {
				"Desktop": "40",
				"Tablet": "40",
				"Mobile": "40"
			},
			"countDownSeparatorVerticalGap": {
				"Desktop": "40",
				"Tablet": "40",
				"Mobile": "40"
			},
			"globalClassicColor": "#399CFF",
			"labelBgColor": "",
			"labelBgHoverColor": "",
			"countDownLabelBorderColor": "",
			"countDownLabelBorder": "none",
			"countDownLabelBorderTypeDesktop": {
				"top": "",
				"right": "",
				"bottom": "",
				"left": ""
			},
			"countDownLabelBorderTypeTablet": {
				"top": "",
				"right": "",
				"bottom": "",
				"left": ""
			},
			"countDownLabelBorderTypeMobile": {
				"top": "",
				"right": "",
				"bottom": "",
				"left": ""
			},
			"countDownLabelBorderTypeLink": true,
			"countDownLabelBorderRadiusUnits": {
				"Desktop": "px",
				"Tablet": "px",
				"Mobile": "px"
			},
			"countDownLabelBorderRadiusDesktop": {
				"top": "",
				"right": "",
				"bottom": "",
				"left": ""
			},
			"countDownLabelBorderRadiusTablet": {
				"top": "",
				"right": "",
				"bottom": "",
				"left": ""
			},
			"countDownLabelBorderRadiusMobile": {
				"top": "",
				"right": "",
				"bottom": "",
				"left": ""
			},
			"countDownLabelHeight": {
				"Desktop": "",
				"Tablet": "",
				"Mobile": ""
			},
			"countDownDigitBorderColor": "",
			"countDownDigitBorder": "none",
			"countDownDigitBorderTypeDesktop": {
				"top": "",
				"right": "",
				"bottom": "",
				"left": ""
			},
			"countDownDigitBorderTypeTablet": {
				"top": "",
				"right": "",
				"bottom": "",
				"left": ""
			},
			"countDownDigitBorderTypeMobile": {
				"top": "",
				"right": "",
				"bottom": "",
				"left": ""
			},
			"countDownDigitBorderRadiusDesktop": {
				"top": "",
				"right": "",
				"bottom": "",
				"left": ""
			},
			"countDownDigitBorderRadiusTablet": {
				"top": "",
				"bottom": "",
				"left": "",
				"right": ""
			},
			"countDownDigitBorderRadiusMobile": {
				"top": "",
				"bottom": "",
				"left": "",
				"right": ""
			},
			"countDownDigitHeight": {
				"Desktop": "",
				"Tablet": "",
				"Mobile": ""
			},
		},
		"preset-2": {
			"countDownFlexWrap": true,
			"countDownLayoutType": "flex",
			"countDownLayoutAlignment": "center",
			"countDownItemGap": {
				"Desktop": "68",
				"Tablet": "68",
				"Mobile": "40"
			},
			"countDownItemWrapperBorderRadiusDesktop": {
				"top": "10",
				"bottom": "10",
				"left": "10",
				"right": "10"
			},
			"countDownItemWrapperBorderRadiusTablet": {
				"top": "10",
				"bottom": "10",
				"left": "10",
				"right": "10"
			},
			"countDownItemWrapperBorderRadiusMobile": {
				"top": "10",
				"bottom": "10",
				"left": "10",
				"right": "10"
			},
			"countDownItemWrapperPaddingDesktop": {
				"top": "32",
				"bottom": "32",
				"left": "42",
				"right": "42"
			},
			"countDownItemWrapperPaddingTablet": {
				"top": "24",
				"bottom": "24",
				"left": "42",
				"right": "42"
			},
			"countDownItemWrapperPaddingMobile": {
				"top": "24",
				"bottom": "24",
				"left": "42",
				"right": "42"
			},
			"countDownLabelMarginDesktop": {
				"top": "0",
				"bottom": "0",
				"left": "0",
				"right": "0"
			},
			"countDownLabelMarginTablet": {
				"top": "0",
				"bottom": "0",
				"left": "0",
				"right": "0"
			},
			"countDownLabelMarginMobile": {
				"top": "0",
				"bottom": "0",
				"left": "0",
				"right": "0"
			},
			"singleDigitFontColorSwitcher": true,
			"daysDigitFontColorSwitcher": "normal",
			"daysDigitFontColor": "#e43242",
			"daysDigitFontHoverColor": "",
			"hoursDigitFontColorSwitcher": "normal",
			"hoursDigitFontColor": "#4caf50",
			"hoursDigitFontHoverColor": "",
			"minutesDigitFontColorSwitcher": "normal",
			"minutesDigitFontColor": "#f89b2e",
			"minutesDigitFontHoverColor": "",
			"secondsDigitFontColorSwitcher": "normal",
			"secondsDigitFontColor": "#399cff",
			"secondsDigitFontHoverColor": "",
			"digitFontSize": {
				"Desktop": "62",
				"Tablet": "48",
				"Mobile": "32"
			},
			"digitFontWeight": "500",
			"digitLineHeight": {
				"Desktop": "80",
				"Tablet": "60",
				"Mobile": "42"
			},
			"labelFontColor": "#8891a5",
			"labelFontHoverColor": "#8891a5",
			"labelFontSize": {
				"Desktop": "18",
				"Tablet": "",
				"Mobile": ""
			},
			"labelFontWeight": "400",
			"labelLineHeight": {
				"Desktop": "25",
				"Tablet": "",
				"Mobile": ""
			},
			"countDownSeparatorEnabled": true,
			"countDownSeparatorType": "line",
			"countDownSeparatorFontColor": "#e1e3e8",
			"countDownSeparatorFontHoverColor": "#e1e3e8",
			"countDownSeparatorFontSize": {
				"Desktop": "100",
				"Tablet": "42",
				"Mobile": "38"
			},
			"countDownSeparatorFontWeight": "100",
			"countDownSeparatorHorizontalGap": {
				"Desktop": "45",
				"Tablet": "60",
				"Mobile": "60"
			},
			"countDownSeparatorVerticalGap": {
				"Desktop": "51",
				"Tablet": "40",
				"Mobile": "40"
			},
			"globalClassicColor": "#f7f7f7",
			"labelBgColor": "",
			"labelBgHoverColor": "",
			"countDownLabelBorderColor": "",
				"countDownLabelBorder": "none",
				"countDownLabelBorderTypeDesktop": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
				"countDownLabelBorderTypeTablet": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
				"countDownLabelBorderTypeMobile": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
				"countDownLabelBorderTypeLink": true,
				"countDownLabelBorderRadiusUnits": {
					"Desktop": "px",
					"Tablet": "px",
					"Mobile": "px"
				},
				"countDownLabelBorderRadiusDesktop": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
				"countDownLabelBorderRadiusTablet": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
				"countDownLabelBorderRadiusMobile": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
			"countDownLabelHeight": {
					"Desktop": "",
					"Tablet": "",
					"Mobile": ""
				},
				"countDownDigitBorderColor": "",
				"countDownDigitBorder": "none",
				"countDownDigitBorderTypeDesktop": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
				"countDownDigitBorderTypeTablet": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
				"countDownDigitBorderTypeMobile": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
				"countDownDigitBorderRadiusDesktop": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
				"countDownDigitBorderRadiusTablet": {
					"top": "",
					"bottom": "",
					"left": "",
					"right": ""
				},
				"countDownDigitBorderRadiusMobile": {
					"top": "",
					"bottom": "",
					"left": "",
					"right": ""
				},
				"countDownDigitHeight": {
					"Desktop": "",
					"Tablet": "",
					"Mobile": ""
				},
		},
		"preset-3": {
			"countDownFlexWrap": true,
			"countDownLayoutType": "flex",
			"countDownLayoutAlignment": "center",
			"countDownItemGap": {
				"Desktop": "72",
				"Tablet": "72",
				"Mobile": "60"
			},
			"countDownItemWrapperBorderRadiusDesktop": {
				"top": "14",
				"bottom": "14",
				"left": "14",
				"right": "14"
			},
			"countDownItemWrapperBorderRadiusTablet": {
				"top": "14",
				"bottom": "14",
				"left": "14",
				"right": "14"
			},
			"countDownItemWrapperBorderRadiusMobile": {
				"top": "14",
				"bottom": "14",
				"left": "14",
				"right": "14"
			},
			"countDownItemWrapperPaddingDesktop": {
				"top": "0",
				"bottom": "0",
				"left": "0",
				"right": "0"
			},
			"countDownItemWrapperPaddingTablet": {
				"top": "0",
				"bottom": "0",
				"left": "0",
				"right": "0"
			},
			"countDownItemWrapperPaddingMobile": {
				"top": "0",
				"bottom": "0",
				"left": "0",
				"right": "0"
			},
			"countDownLabelMarginDesktop": {
				"top": "0",
				"bottom": "0",
				"left": "0",
				"right": "0"
			},
			"countDownLabelMarginTablet": {
				"top": "0",
				"bottom": "0",
				"left": "0",
				"right": "0"
			},
			"countDownLabelMarginMobile": {
				"top": "0",
				"bottom": "0",
				"left": "0",
				"right": "0"
			},
			"singleDigitFontColorSwitcher": false,
			"digitFontColor": "#15171C",
			"digitFontHoverColor": "#15171C",
			"digitFontSize": {
				"Desktop": "62",
				"Tablet": "48",
				"Mobile": "32"
			},
			"digitFontWeight": "500",
			"digitLineHeight": {
				"Desktop": "80",
				"Tablet": "60",
				"Mobile": "42"
			},
			"labelFontColor": "#6A758E",
			"labelFontHoverColor": "#6A758E",
			"labelFontSize": {
				"Desktop": "18",
				"Tablet": "",
				"Mobile": ""
			},
			"labelFontWeight": "",
			"labelLineHeight": {
				"Desktop": "25",
				"Tablet": "",
				"Mobile": ""
			},
			"countDownSeparatorEnabled": true,
			"countDownSeparatorType": "colon",
			"countDownSeparatorFontColor": "#15171C",
			"countDownSeparatorFontHoverColor": "#15171C",
			"countDownSeparatorFontSize": {
				"Desktop": "48",
				"Tablet": "42",
				"Mobile": "38"
			},
			"countDownSeparatorFontWeight": "",
			"countDownSeparatorHorizontalGap": {
				"Desktop": "40",
				"Tablet": "40",
				"Mobile": "40"
			},
			"countDownSeparatorVerticalGap": {
				"Desktop": "40",
				"Tablet": "40",
				"Mobile": "40"
			},
			"globalClassicColor": "",
			"labelBgColor": "",
			"labelBgHoverColor": "",
			"countDownLabelBorderColor": "",
				"countDownLabelBorder": "none",
				"countDownLabelBorderTypeDesktop": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
				"countDownLabelBorderTypeTablet": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
				"countDownLabelBorderTypeMobile": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
				"countDownLabelBorderTypeLink": true,
				"countDownLabelBorderRadiusUnits": {
					"Desktop": "px",
					"Tablet": "px",
					"Mobile": "px"
				},
				"countDownLabelBorderRadiusDesktop": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
				"countDownLabelBorderRadiusTablet": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
				"countDownLabelBorderRadiusMobile": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
			"countDownLabelHeight": {
					"Desktop": "",
					"Tablet": "",
					"Mobile": ""
				},
				"countDownDigitBorderColor": "",
				"countDownDigitBorder": "none",
				"countDownDigitBorderTypeDesktop": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
				"countDownDigitBorderTypeTablet": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
				"countDownDigitBorderTypeMobile": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
				"countDownDigitBorderRadiusDesktop": {
					"top": "",
					"right": "",
					"bottom": "",
					"left": ""
				},
				"countDownDigitBorderRadiusTablet": {
					"top": "",
					"bottom": "",
					"left": "",
					"right": ""
				},
				"countDownDigitBorderRadiusMobile": {
					"top": "",
					"bottom": "",
					"left": "",
					"right": ""
				},
				"countDownDigitHeight": {
					"Desktop": "",
					"Tablet": "",
					"Mobile": ""
				},
		},
		"preset-4": {
			"countDownLayoutType": "grid",
			"countDownLayoutAlignment": "center",
			"countDownGrid": {
				"Desktop": "4",
				"Tablet": "3",
				"Mobile": "2"
			},
			"countDownItemGap": {
				"Desktop": "72",
				"Tablet": "80",
				"Mobile": "50"
			},
			"countDownItemWrapperBorderRadiusUnits": {
				"Desktop": "px",
				"Tablet": "px",
				"Mobile": "px"
			},
			"countDownItemWrapperBorderRadiusDesktop": {
				"top": "14",
				"bottom": "14",
				"left": "14",
				"right": "14"
			},
			"countDownItemWrapperBorderRadiusTablet": {
				"top": "14",
				"bottom": "14",
				"left": "14",
				"right": "14"
			},
			"countDownItemWrapperBorderRadiusMobile": {
				"top": "14",
				"bottom": "14",
				"left": "14",
				"right": "14"
			},
			"countDownItemWrapperPaddingDesktop": {
				"top": "42",
				"right": "42",
				"bottom": "42",
				"left": "42"
			},
			"countDownItemWrapperPaddingTablet": {
				"top": "24",
				"bottom": "24",
				"left": "42",
				"right": "42"
			},
			"countDownItemWrapperPaddingMobile": {
				"top": "24",
				"bottom": "24",
				"left": "42",
				"right": "42"
			},
			"singleDigitFontColorSwitcher": false,
			"digitFontColor": "#ffffff",
			"digitFontHoverColor": "#ffffff",
			"digitFontSize": {
				"Desktop": "62",
				"Tablet": "48",
				"Mobile": "32"
			},
			"digitFontWeight": "500",
			"digitLineHeight": {
				"Desktop": "80",
				"Tablet": "60",
				"Mobile": "42"
			},
			"labelFontColor": "#FFFFFF",
			"labelFontHoverColor": "#FFFFFF",
			"labelBgColor": "#5d98ff",
			"labelBgHoverColor": "",
			"labelFontSize": {
				"Desktop": "18",
				"Tablet": "",
				"Mobile": ""
			},
			"labelLineHeight": {
				"Desktop": "25",
				"Tablet": "",
				"Mobile": ""
			},
			"countDownSeparatorEnabled": true,
			"countDownSeparatorType": "colon",
			"countDownSeparatorCustom": "",
			"countDownSeparatorFontColorSwitcher": "normal",
			"countDownSeparatorFontColor": "#ffffff",
			"countDownSeparatorFontHoverColor": "#ffffff",
			"countDownSeparatorFontSize": {
				"Desktop": "62",
				"Tablet": "42",
				"Mobile": "38"
			},
			"countDownSeparatorFontSizeUnits": {
				"Desktop": "px",
				"Tablet": "px",
				"Mobile": "px"
			},
			"countDownSeparatorFontWeight": "500",
			"countDownSeparatorLineHeight": {
				"Desktop": "80",
				"Tablet": "",
				"Mobile": ""
			},
			"countDownSeparatorHorizontalGap": {
				"Desktop": "40",
				"Tablet": "40",
				"Mobile": "40"
			},
			"countDownSeparatorHorizontalGapUnits": {
				"Desktop": "px",
				"Tablet": "px",
				"Mobile": "px"
			},
			"countDownSeparatorVerticalGap": {
				"Desktop": "80",
				"Tablet": "40",
				"Mobile": "40"
			},
			"countDownSeparatorVerticalGapUnits": {
				"Desktop": "px",
				"Tablet": "px",
				"Mobile": "px"
			},
			"globalBackgroundType": "classic",
			"globalClassicColor": "#5b0ac6",
			"countDownLabelBorderColor": "#5d98ff",
			"countDownLabelBorder": "solid",
			"countDownLabelBorderTypeUnits": {
				"Desktop": "px",
				"Tablet": "px",
				"Mobile": "px"
			},
			"countDownLabelBorderTypeDesktop": {
				"top": "1",
				"right": "1",
				"bottom": "1",
				"left": "1"
			},
			"countDownLabelBorderTypeTablet": {
				"top": "1",
				"right": "1",
				"bottom": "1",
				"left": "1"
			},
			"countDownLabelBorderTypeMobile": {
				"top": "1",
				"right": "1",
				"bottom": "1",
				"left": "1"
			},
			"countDownLabelBorderTypeLink": true,
			"countDownLabelBorderRadiusUnits": {
				"Desktop": "px",
				"Tablet": "px",
				"Mobile": "px"
			},
			"countDownLabelBorderRadiusDesktop": {
				"top": "0",
				"right": "0",
				"bottom": "10",
				"left": "10"
			},
			"countDownLabelBorderRadiusTablet": {
				"top": "0",
				"right": "0",
				"bottom": "10",
				"left": "10"
			},
			"countDownLabelBorderRadiusMobile": {
				"top": "0",
				"right": "0",
				"bottom": "10",
				"left": "10"
			},
			"countDownLabelBorderRadiusLink": false,
			"countDownLabelMarginUnits": {
				"Desktop": "px",
				"Tablet": "px",
				"Mobile": "px"
			},
			"countDownLabelMarginDesktop": {
				"top": "0",
				"right": "0",
				"bottom": "0",
				"left": "0"
			},
			"countDownLabelMarginTablet": {
				"top": "0",
				"bottom": "0",
				"left": "0",
				"right": "0"
			},
			"countDownLabelMarginMobile": {
				"top": "0",
				"bottom": "0",
				"left": "0",
				"right": "0"
			},
			"countDownLabelHeight": {
				"Desktop": "50",
				"Tablet": "",
				"Mobile": ""
			},
			"countDownDigitBorderColor": "#5d98ff80",
			"countDownDigitBorder": "solid",
			"countDownDigitBorderTypeDesktop": {
				"top": "1",
				"right": "1",
				"bottom": "0",
				"left": "1"
			},
			"countDownDigitBorderTypeTablet": {
				"top": "1",
				"right": "1",
				"bottom": "0",
				"left": "1"
			},
			"countDownDigitBorderTypeMobile": {
				"top": "1",
				"right": "1",
				"bottom": "0",
				"left": "1"
			},
			"countDownDigitBorderRadiusDesktop": {
				"top": "10",
				"right": "10",
				"bottom": "0",
				"left": "0"
			},
			"countDownDigitBorderRadiusTablet": {
				"top": "10",
				"bottom": "10",
				"left": "",
				"right": ""
			},
			"countDownDigitBorderRadiusMobile": {
				"top": "10",
				"bottom": "10",
				"left": "",
				"right": ""
			},
			"countDownDigitHeight": {
				"Desktop": "130",
				"Tablet": "",
				"Mobile": ""
			},
		},
	};
		
	const countdownPresets = [
		{
			value: 'preset-1',
			label: __('Preset 1', 'frontis-blocks'),
			attributes: Object.entries(presetStyles['preset-1']).map(([label, value]) => ({ label, value })),
			icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
						<path d="M24 108C24 100.268 30.268 94 38 94H310C317.732 94 324 100.268 324 108V168C324 175.732 317.732 182 310 182H38C30.268 182 24 175.732 24 168V108Z" fill="white" fill-opacity="0.4"/>
						<g filter="url(#filter0_d_16980_15039)">
						<path d="M64.4984 110.666C71.8624 110.666 77.8317 116.635 77.8317 123.999C77.8317 131.363 71.8624 137.333 64.4984 137.333C57.1344 137.333 51.165 131.363 51.165 123.999C51.165 116.635 57.1344 110.666 64.4984 110.666ZM64.4984 115.999C64.1447 115.999 63.8056 116.14 63.5556 116.39C63.3055 116.64 63.165 116.979 63.165 117.333V123.999C63.1651 124.353 63.3056 124.692 63.5557 124.942L67.5557 128.942C67.8072 129.185 68.144 129.319 68.4936 129.316C68.8432 129.313 69.1776 129.173 69.4248 128.926C69.672 128.679 69.8122 128.344 69.8153 127.995C69.8183 127.645 69.6839 127.308 69.441 127.057L65.8317 123.447V117.333C65.8317 116.979 65.6912 116.64 65.4412 116.39C65.1911 116.14 64.852 115.999 64.4984 115.999Z" fill="#404655"/>
						<rect x="43.5" y="156" width="42" height="12" rx="6" fill="white"/>
						</g>
						<circle cx="101" cy="129" r="2" fill="#404655"/>
						<circle cx="101" cy="147" r="2" fill="#404655"/>
						<g filter="url(#filter1_d_16980_15039)">
						<path d="M137.498 110.666C144.862 110.666 150.832 116.635 150.832 123.999C150.832 131.363 144.862 137.333 137.498 137.333C130.134 137.333 124.165 131.363 124.165 123.999C124.165 116.635 130.134 110.666 137.498 110.666ZM137.498 115.999C137.145 115.999 136.806 116.14 136.556 116.39C136.306 116.64 136.165 116.979 136.165 117.333V123.999C136.165 124.353 136.306 124.692 136.556 124.942L140.556 128.942C140.807 129.185 141.144 129.319 141.494 129.316C141.843 129.313 142.178 129.173 142.425 128.926C142.672 128.679 142.812 128.344 142.815 127.995C142.818 127.645 142.684 127.308 142.441 127.057L138.832 123.447V117.333C138.832 116.979 138.691 116.64 138.441 116.39C138.191 116.14 137.852 115.999 137.498 115.999Z" fill="#404655"/>
						<rect x="116.5" y="156" width="42" height="12" rx="6" fill="white"/>
						</g>
						<circle cx="174" cy="129" r="2" fill="#404655"/>
						<circle cx="174" cy="147" r="2" fill="#404655"/>
						<g filter="url(#filter2_d_16980_15039)">
						<path d="M210.498 110.666C217.862 110.666 223.832 116.635 223.832 123.999C223.832 131.363 217.862 137.333 210.498 137.333C203.134 137.333 197.165 131.363 197.165 123.999C197.165 116.635 203.134 110.666 210.498 110.666ZM210.498 115.999C210.145 115.999 209.806 116.14 209.556 116.39C209.306 116.64 209.165 116.979 209.165 117.333V123.999C209.165 124.353 209.306 124.692 209.556 124.942L213.556 128.942C213.807 129.185 214.144 129.319 214.494 129.316C214.843 129.313 215.178 129.173 215.425 128.926C215.672 128.679 215.812 128.344 215.815 127.995C215.818 127.645 215.684 127.308 215.441 127.057L211.832 123.447V117.333C211.832 116.979 211.691 116.64 211.441 116.39C211.191 116.14 210.852 115.999 210.498 115.999Z" fill="#404655"/>
						<rect x="189.5" y="156" width="42" height="12" rx="6" fill="white"/>
						</g>
						<circle cx="247" cy="129" r="2" fill="#404655"/>
						<circle cx="247" cy="147" r="2" fill="#404655"/>
						<g filter="url(#filter3_d_16980_15039)">
						<path d="M283.498 110.666C290.862 110.666 296.832 116.635 296.832 123.999C296.832 131.363 290.862 137.333 283.498 137.333C276.134 137.333 270.165 131.363 270.165 123.999C270.165 116.635 276.134 110.666 283.498 110.666ZM283.498 115.999C283.145 115.999 282.806 116.14 282.556 116.39C282.306 116.64 282.165 116.979 282.165 117.333V123.999C282.165 124.353 282.306 124.692 282.556 124.942L286.556 128.942C286.807 129.185 287.144 129.319 287.494 129.316C287.843 129.313 288.178 129.173 288.425 128.926C288.672 128.679 288.812 128.344 288.815 127.995C288.818 127.645 288.684 127.308 288.441 127.057L284.832 123.447V117.333C284.832 116.979 284.691 116.64 284.441 116.39C284.191 116.14 283.852 115.999 283.498 115.999Z" fill="#404655"/>
						<rect x="262.5" y="156" width="42" height="12" rx="6" fill="white"/>
						</g>
						<defs>
						<filter id="filter0_d_16980_15039" x="37.1471" y="108" width="54.7059" height="62.5588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1.70588"/>
						<feGaussianBlur stdDeviation="0.426471"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_15039"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_15039" result="shape"/>
						</filter>
						<filter id="filter1_d_16980_15039" x="110.147" y="108" width="54.7059" height="62.5588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1.70588"/>
						<feGaussianBlur stdDeviation="0.426471"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_15039"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_15039" result="shape"/>
						</filter>
						<filter id="filter2_d_16980_15039" x="183.147" y="108" width="54.7059" height="62.5588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1.70588"/>
						<feGaussianBlur stdDeviation="0.426471"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_15039"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_15039" result="shape"/>
						</filter>
						<filter id="filter3_d_16980_15039" x="256.147" y="108" width="54.7059" height="62.5588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1.70588"/>
						<feGaussianBlur stdDeviation="0.426471"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_15039"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_15039" result="shape"/>
						</filter>
						</defs>
					</svg>`,
		},
		{
			value: 'preset-2',
			label: __('Preset 2', 'frontis-blocks'),
			attributes: Object.entries(presetStyles['preset-2']).map(([label, value]) => ({ label, value })),
			icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
						<g filter="url(#filter0_d_16980_15074)">
						<path d="M55.4984 110.666C62.8624 110.666 68.8317 116.635 68.8317 123.999C68.8317 131.363 62.8624 137.333 55.4984 137.333C48.1344 137.333 42.165 131.363 42.165 123.999C42.165 116.635 48.1344 110.666 55.4984 110.666ZM55.4984 115.999C55.1447 115.999 54.8056 116.14 54.5556 116.39C54.3055 116.64 54.165 116.979 54.165 117.333V123.999C54.1651 124.353 54.3056 124.692 54.5557 124.942L58.5557 128.942C58.8072 129.185 59.144 129.319 59.4936 129.316C59.8432 129.313 60.1776 129.173 60.4248 128.926C60.672 128.679 60.8122 128.344 60.8153 127.995C60.8183 127.645 60.6839 127.308 60.441 127.057L56.8317 123.447V117.333C56.8317 116.979 56.6912 116.64 56.4412 116.39C56.1911 116.14 55.852 115.999 55.4984 115.999Z" fill="#404655"/>
						<rect x="34.5" y="156" width="42" height="12" rx="6" fill="white"/>
						</g>
						<line x1="94.5" y1="168" x2="94.5" y2="108" stroke="#C3C8D2"/>
						<g filter="url(#filter1_d_16980_15074)">
						<path d="M134.498 110.666C141.862 110.666 147.832 116.635 147.832 123.999C147.832 131.363 141.862 137.333 134.498 137.333C127.134 137.333 121.165 131.363 121.165 123.999C121.165 116.635 127.134 110.666 134.498 110.666ZM134.498 115.999C134.145 115.999 133.806 116.14 133.556 116.39C133.306 116.64 133.165 116.979 133.165 117.333V123.999C133.165 124.353 133.306 124.692 133.556 124.942L137.556 128.942C137.807 129.185 138.144 129.319 138.494 129.316C138.843 129.313 139.178 129.173 139.425 128.926C139.672 128.679 139.812 128.344 139.815 127.995C139.818 127.645 139.684 127.308 139.441 127.057L135.832 123.447V117.333C135.832 116.979 135.691 116.64 135.441 116.39C135.191 116.14 134.852 115.999 134.498 115.999Z" fill="#404655"/>
						<rect x="113.5" y="156" width="42" height="12" rx="6" fill="white"/>
						</g>
						<line x1="173.5" y1="168" x2="173.5" y2="108" stroke="#C3C8D2"/>
						<g filter="url(#filter2_d_16980_15074)">
						<path d="M213.498 110.666C220.862 110.666 226.832 116.635 226.832 123.999C226.832 131.363 220.862 137.333 213.498 137.333C206.134 137.333 200.165 131.363 200.165 123.999C200.165 116.635 206.134 110.666 213.498 110.666ZM213.498 115.999C213.145 115.999 212.806 116.14 212.556 116.39C212.306 116.64 212.165 116.979 212.165 117.333V123.999C212.165 124.353 212.306 124.692 212.556 124.942L216.556 128.942C216.807 129.185 217.144 129.319 217.494 129.316C217.843 129.313 218.178 129.173 218.425 128.926C218.672 128.679 218.812 128.344 218.815 127.995C218.818 127.645 218.684 127.308 218.441 127.057L214.832 123.447V117.333C214.832 116.979 214.691 116.64 214.441 116.39C214.191 116.14 213.852 115.999 213.498 115.999Z" fill="#404655"/>
						<rect x="192.5" y="156" width="42" height="12" rx="6" fill="white"/>
						</g>
						<line x1="252.5" y1="168" x2="252.5" y2="108" stroke="#C3C8D2"/>
						<g filter="url(#filter3_d_16980_15074)">
						<path d="M292.498 110.666C299.862 110.666 305.832 116.635 305.832 123.999C305.832 131.363 299.862 137.333 292.498 137.333C285.134 137.333 279.165 131.363 279.165 123.999C279.165 116.635 285.134 110.666 292.498 110.666ZM292.498 115.999C292.145 115.999 291.806 116.14 291.556 116.39C291.306 116.64 291.165 116.979 291.165 117.333V123.999C291.165 124.353 291.306 124.692 291.556 124.942L295.556 128.942C295.807 129.185 296.144 129.319 296.494 129.316C296.843 129.313 297.178 129.173 297.425 128.926C297.672 128.679 297.812 128.344 297.815 127.995C297.818 127.645 297.684 127.308 297.441 127.057L293.832 123.447V117.333C293.832 116.979 293.691 116.64 293.441 116.39C293.191 116.14 292.852 115.999 292.498 115.999Z" fill="#404655"/>
						<rect x="271.5" y="156" width="42" height="12" rx="6" fill="white"/>
						</g>
						<defs>
						<filter id="filter0_d_16980_15074" x="23.1471" y="108" width="64.7059" height="62.5588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1.70588"/>
						<feGaussianBlur stdDeviation="0.426471"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_15074"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_15074" result="shape"/>
						</filter>
						<filter id="filter1_d_16980_15074" x="102.147" y="108" width="64.7059" height="62.5588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1.70588"/>
						<feGaussianBlur stdDeviation="0.426471"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_15074"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_15074" result="shape"/>
						</filter>
						<filter id="filter2_d_16980_15074" x="181.147" y="108" width="64.7059" height="62.5588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1.70588"/>
						<feGaussianBlur stdDeviation="0.426471"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_15074"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_15074" result="shape"/>
						</filter>
						<filter id="filter3_d_16980_15074" x="260.147" y="108" width="64.7059" height="62.5588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1.70588"/>
						<feGaussianBlur stdDeviation="0.426471"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_15074"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_15074" result="shape"/>
						</filter>
						</defs>
					</svg>`,
		},
		{
			value: 'preset-3',
			label: __('Preset 3', 'frontis-blocks'),
			attributes: Object.entries(presetStyles['preset-3']).map(([label, value]) => ({ label, value })),
			icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
						<g filter="url(#filter0_d_16980_15103)">
						<path d="M53.9984 110.666C61.3624 110.666 67.3317 116.635 67.3317 123.999C67.3317 131.363 61.3624 137.333 53.9984 137.333C46.6344 137.333 40.665 131.363 40.665 123.999C40.665 116.635 46.6344 110.666 53.9984 110.666ZM53.9984 115.999C53.6447 115.999 53.3056 116.14 53.0556 116.39C52.8055 116.64 52.665 116.979 52.665 117.333V123.999C52.6651 124.353 52.8056 124.692 53.0557 124.942L57.0557 128.942C57.3072 129.185 57.644 129.319 57.9936 129.316C58.3432 129.313 58.6776 129.173 58.9248 128.926C59.172 128.679 59.3122 128.344 59.3153 127.995C59.3183 127.645 59.1839 127.308 58.941 127.057L55.3317 123.447V117.333C55.3317 116.979 55.1912 116.64 54.9412 116.39C54.6911 116.14 54.352 115.999 53.9984 115.999Z" fill="#404655"/>
						<rect x="33" y="156" width="42" height="12" rx="6" fill="white"/>
						</g>
						<circle cx="94" cy="129" r="2" fill="#404655"/>
						<circle cx="94" cy="147" r="2" fill="#404655"/>
						<g filter="url(#filter1_d_16980_15103)">
						<path d="M133.998 110.666C141.362 110.666 147.332 116.635 147.332 123.999C147.332 131.363 141.362 137.333 133.998 137.333C126.634 137.333 120.665 131.363 120.665 123.999C120.665 116.635 126.634 110.666 133.998 110.666ZM133.998 115.999C133.645 115.999 133.306 116.14 133.056 116.39C132.806 116.64 132.665 116.979 132.665 117.333V123.999C132.665 124.353 132.806 124.692 133.056 124.942L137.056 128.942C137.307 129.185 137.644 129.319 137.994 129.316C138.343 129.313 138.678 129.173 138.925 128.926C139.172 128.679 139.312 128.344 139.315 127.995C139.318 127.645 139.184 127.308 138.941 127.057L135.332 123.447V117.333C135.332 116.979 135.191 116.64 134.941 116.39C134.691 116.14 134.352 115.999 133.998 115.999Z" fill="#404655"/>
						<rect x="113" y="156" width="42" height="12" rx="6" fill="white"/>
						</g>
						<circle cx="174" cy="129" r="2" fill="#404655"/>
						<circle cx="174" cy="147" r="2" fill="#404655"/>
						<g filter="url(#filter2_d_16980_15103)">
						<path d="M213.998 110.666C221.362 110.666 227.332 116.635 227.332 123.999C227.332 131.363 221.362 137.333 213.998 137.333C206.634 137.333 200.665 131.363 200.665 123.999C200.665 116.635 206.634 110.666 213.998 110.666ZM213.998 115.999C213.645 115.999 213.306 116.14 213.056 116.39C212.806 116.64 212.665 116.979 212.665 117.333V123.999C212.665 124.353 212.806 124.692 213.056 124.942L217.056 128.942C217.307 129.185 217.644 129.319 217.994 129.316C218.343 129.313 218.678 129.173 218.925 128.926C219.172 128.679 219.312 128.344 219.315 127.995C219.318 127.645 219.184 127.308 218.941 127.057L215.332 123.447V117.333C215.332 116.979 215.191 116.64 214.941 116.39C214.691 116.14 214.352 115.999 213.998 115.999Z" fill="#404655"/>
						<rect x="193" y="156" width="42" height="12" rx="6" fill="white"/>
						</g>
						<circle cx="254" cy="129" r="2" fill="#404655"/>
						<circle cx="254" cy="147" r="2" fill="#404655"/>
						<g filter="url(#filter3_d_16980_15103)">
						<path d="M293.998 110.666C301.362 110.666 307.332 116.635 307.332 123.999C307.332 131.363 301.362 137.333 293.998 137.333C286.634 137.333 280.665 131.363 280.665 123.999C280.665 116.635 286.634 110.666 293.998 110.666ZM293.998 115.999C293.645 115.999 293.306 116.14 293.056 116.39C292.806 116.64 292.665 116.979 292.665 117.333V123.999C292.665 124.353 292.806 124.692 293.056 124.942L297.056 128.942C297.307 129.185 297.644 129.319 297.994 129.316C298.343 129.313 298.678 129.173 298.925 128.926C299.172 128.679 299.312 128.344 299.315 127.995C299.318 127.645 299.184 127.308 298.941 127.057L295.332 123.447V117.333C295.332 116.979 295.191 116.64 294.941 116.39C294.691 116.14 294.352 115.999 293.998 115.999Z" fill="#404655"/>
						<rect x="273" y="156" width="42" height="12" rx="6" fill="white"/>
						</g>
						<defs>
						<filter id="filter0_d_16980_15103" x="23.1471" y="108" width="61.7059" height="62.5588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1.70588"/>
						<feGaussianBlur stdDeviation="0.426471"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_15103"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_15103" result="shape"/>
						</filter>
						<filter id="filter1_d_16980_15103" x="103.147" y="108" width="61.7059" height="62.5588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1.70588"/>
						<feGaussianBlur stdDeviation="0.426471"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_15103"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_15103" result="shape"/>
						</filter>
						<filter id="filter2_d_16980_15103" x="183.147" y="108" width="61.7059" height="62.5588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1.70588"/>
						<feGaussianBlur stdDeviation="0.426471"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_15103"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_15103" result="shape"/>
						</filter>
						<filter id="filter3_d_16980_15103" x="263.147" y="108" width="61.7059" height="62.5588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1.70588"/>
						<feGaussianBlur stdDeviation="0.426471"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_15103"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_15103" result="shape"/>
						</filter>
						</defs>
					</svg>`,
		},
		{
			value: 'preset-4',
			label: __('Preset 4', 'frontis-blocks'),
			attributes: Object.entries(presetStyles['preset-4']).map(([label, value]) => ({ label, value })),
			icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
						<path d="M24 98C24 90.268 30.268 84 38 84H310C317.732 84 324 90.268 324 98V178C324 185.732 317.732 192 310 192H38C30.268 192 24 185.732 24 178V98Z" fill="white" fill-opacity="0.4"/>
						<g filter="url(#filter0_d_16980_15000)">
						<rect x="38.7326" y="98.7326" width="51.5347" height="78.5347" rx="3.26737" stroke="white" stroke-width="1.46526" shape-rendering="crispEdges"/>
						<path d="M64.4984 110.666C71.8624 110.666 77.8317 116.635 77.8317 123.999C77.8317 131.363 71.8624 137.333 64.4984 137.333C57.1344 137.333 51.165 131.363 51.165 123.999C51.165 116.635 57.1344 110.666 64.4984 110.666ZM64.4984 115.999C64.1448 115.999 63.8056 116.14 63.5556 116.39C63.3055 116.64 63.165 116.979 63.165 117.333V123.999C63.1651 124.353 63.3056 124.692 63.5557 124.942L67.5557 128.942C67.8072 129.185 68.144 129.319 68.4936 129.316C68.8432 129.313 69.1776 129.173 69.4248 128.926C69.672 128.679 69.8122 128.344 69.8153 127.995C69.8183 127.645 69.6839 127.308 69.441 127.057L65.8317 123.447V117.333C65.8317 116.979 65.6912 116.64 65.4412 116.39C65.1911 116.14 64.852 115.999 64.4984 115.999Z" fill="#404655"/>
						<rect width="53" height="28" transform="translate(38 150)" fill="white"/>
						<rect x="48" y="160" width="33" height="8" rx="4" fill="#E1E3E8"/>
						</g>
						<circle cx="101" cy="129" r="2" fill="#404655"/>
						<circle cx="101" cy="147" r="2" fill="#404655"/>
						<g filter="url(#filter1_d_16980_15000)">
						<rect x="111.733" y="98.7326" width="51.5347" height="78.5347" rx="3.26737" stroke="white" stroke-width="1.46526" shape-rendering="crispEdges"/>
						<path d="M137.498 110.666C144.862 110.666 150.832 116.635 150.832 123.999C150.832 131.363 144.862 137.333 137.498 137.333C130.134 137.333 124.165 131.363 124.165 123.999C124.165 116.635 130.134 110.666 137.498 110.666ZM137.498 115.999C137.145 115.999 136.806 116.14 136.556 116.39C136.306 116.64 136.165 116.979 136.165 117.333V123.999C136.165 124.353 136.306 124.692 136.556 124.942L140.556 128.942C140.807 129.185 141.144 129.319 141.494 129.316C141.843 129.313 142.178 129.173 142.425 128.926C142.672 128.679 142.812 128.344 142.815 127.995C142.818 127.645 142.684 127.308 142.441 127.057L138.832 123.447V117.333C138.832 116.979 138.691 116.64 138.441 116.39C138.191 116.14 137.852 115.999 137.498 115.999Z" fill="#404655"/>
						<rect width="53" height="28" transform="translate(111 150)" fill="white"/>
						<rect x="121" y="160" width="33" height="8" rx="4" fill="#E1E3E8"/>
						</g>
						<circle cx="174" cy="129" r="2" fill="#404655"/>
						<circle cx="174" cy="147" r="2" fill="#404655"/>
						<g filter="url(#filter2_d_16980_15000)">
						<rect x="184.733" y="98.7326" width="51.5347" height="78.5347" rx="3.26737" stroke="white" stroke-width="1.46526" shape-rendering="crispEdges"/>
						<path d="M210.498 110.666C217.862 110.666 223.832 116.635 223.832 123.999C223.832 131.363 217.862 137.333 210.498 137.333C203.134 137.333 197.165 131.363 197.165 123.999C197.165 116.635 203.134 110.666 210.498 110.666ZM210.498 115.999C210.145 115.999 209.806 116.14 209.556 116.39C209.306 116.64 209.165 116.979 209.165 117.333V123.999C209.165 124.353 209.306 124.692 209.556 124.942L213.556 128.942C213.807 129.185 214.144 129.319 214.494 129.316C214.843 129.313 215.178 129.173 215.425 128.926C215.672 128.679 215.812 128.344 215.815 127.995C215.818 127.645 215.684 127.308 215.441 127.057L211.832 123.447V117.333C211.832 116.979 211.691 116.64 211.441 116.39C211.191 116.14 210.852 115.999 210.498 115.999Z" fill="#404655"/>
						<rect width="53" height="28" transform="translate(184 150)" fill="white"/>
						<rect x="194" y="160" width="33" height="8" rx="4" fill="#E1E3E8"/>
						</g>
						<circle cx="247" cy="129" r="2" fill="#404655"/>
						<circle cx="247" cy="147" r="2" fill="#404655"/>
						<g filter="url(#filter3_d_16980_15000)">
						<rect x="257.733" y="98.7326" width="51.5347" height="78.5347" rx="3.26737" stroke="white" stroke-width="1.46526" shape-rendering="crispEdges"/>
						<path d="M283.498 110.666C290.862 110.666 296.832 116.635 296.832 123.999C296.832 131.363 290.862 137.333 283.498 137.333C276.134 137.333 270.165 131.363 270.165 123.999C270.165 116.635 276.134 110.666 283.498 110.666ZM283.498 115.999C283.145 115.999 282.806 116.14 282.556 116.39C282.306 116.64 282.165 116.979 282.165 117.333V123.999C282.165 124.353 282.306 124.692 282.556 124.942L286.556 128.942C286.807 129.185 287.144 129.319 287.494 129.316C287.843 129.313 288.178 129.173 288.425 128.926C288.672 128.679 288.812 128.344 288.815 127.995C288.818 127.645 288.684 127.308 288.441 127.057L284.832 123.447V117.333C284.832 116.979 284.691 116.64 284.441 116.39C284.191 116.14 283.852 115.999 283.498 115.999Z" fill="#404655"/>
						<rect width="53" height="28" transform="translate(257 150)" fill="white"/>
						<rect x="267" y="160" width="33" height="8" rx="4" fill="#E1E3E8"/>
						</g>
						<defs>
						<filter id="filter0_d_16980_15000" x="37.1471" y="98" width="54.7059" height="82.5588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1.70588"/>
						<feGaussianBlur stdDeviation="0.426471"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_15000"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_15000" result="shape"/>
						</filter>
						<filter id="filter1_d_16980_15000" x="110.147" y="98" width="54.7059" height="82.5588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1.70588"/>
						<feGaussianBlur stdDeviation="0.426471"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_15000"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_15000" result="shape"/>
						</filter>
						<filter id="filter2_d_16980_15000" x="183.147" y="98" width="54.7059" height="82.5588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1.70588"/>
						<feGaussianBlur stdDeviation="0.426471"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_15000"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_15000" result="shape"/>
						</filter>
						<filter id="filter3_d_16980_15000" x="256.147" y="98" width="54.7059" height="82.5588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1.70588"/>
						<feGaussianBlur stdDeviation="0.426471"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_15000"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_15000" result="shape"/>
						</filter>
						</defs>
					</svg>`,
		},
	];

	const countDownStyle = useMemo(
		() => `
			.fb-count-down-main-wrapper.${blockID} {
				${countDownPositionType === 'default' ? `position: relative;` : ''}
				${countDownPositionType !== 'default' && countDownPositionType !== 'relative' ? `width: 100%;` : ''}
				${countDownPositionType !== 'default' ? `position: ${countDownPositionType};` : ''}
				${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownHZOrientationType === 'left' && countDownHZLeftOffset?.Desktop ? `left: ${countDownHZLeftOffset?.Desktop}${countDownHZLeftOffsetUnits?.Desktop};` : ''}
				${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownHZOrientationType === 'right' && countDownHZRightOffset?.Desktop ? `right: ${countDownHZRightOffset?.Desktop}${countDownHZRightOffsetUnits?.Desktop};` : ''}
				${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownVROrientationType === 'top' && countDownVRTopOffset?.Desktop ? `top: ${countDownVRTopOffset?.Desktop}${countDownVRTopOffsetUnits?.Desktop};` : ''}
				${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownVROrientationType === 'bottom' && countDownVRBottomOffset?.Desktop ? `bottom: ${countDownVRBottomOffset?.Desktop}${countDownVRBottomOffsetUnits?.Desktop};` : ''}
        		${countDownZIndex?.Desktop ? `z-index: ${countDownZIndex?.Desktop};` : ''}
				${countDownOverflow !== 'default' ? `overflow: ${countDownOverflow};` : ''}
			}
			.fb-count-down-wrapper.${blockID} {
				${countDownLayoutType === 'flex' ? `display: flex;` : ''}
				${countDownLayoutType === 'flex' && countDownFlexWrap === true ? `flex-wrap: wrap;` : ''}
				${countDownLayoutType === 'grid' ? `display: grid;` : ''}
				${countDownLayoutType === 'grid' ? `grid-template-columns: repeat(${countDownGrid?.Desktop}, 1fr);` : ''}
				${countDownItemGap?.Desktop ? `gap: ${countDownItemGap?.Desktop}${countDownItemGapUnits?.Desktop};` : ''}
				${countDownLayoutAlignment ? `justify-content: ${countDownLayoutAlignment};` : ''}
				${countDownItemWrapperBorder ? `border: ${countDownItemWrapperBorder};` : ''}
				${countDownItemWrapperBorderTypeGetDesktop && countDownItemWrapperBorderTypeDesktop?.top ? `border-width: ${countDownItemWrapperBorderTypeGetDesktop};` : ''}
				${countDownItemWrapperBorderRadiusGetDesktop && countDownItemWrapperBorderRadiusDesktop?.top ? `border-radius: ${countDownItemWrapperBorderRadiusGetDesktop};` : ''}
				${countDownItemWrapperBorderColor ? `border-color: ${countDownItemWrapperBorderColor};` : ''}
				
				${globalBackgroundType === "gradient" 
					? (globalCustomGradientSwitcher && globalCustomGradientInputValue 
						? `background: ${globalCustomGradientInputValue};` 
						: (globalGradientColor 
							? `background: ${globalGradientColor};` 
							: `background: ${globalClassicColor};`))
					: (globalBackgroundImageUrl && globalBackgroundImageUrl !== "null" 
						? `
							${globalBackgroundImageUrl ? `background-image: url(${globalBackgroundImageUrl});` : "" }
							${globalBackgroundImagePosition ? `background-position: ${globalBackgroundImagePosition};` : "" }
							${globalBackgroundImageAttachment ? `background-attachment: ${globalBackgroundImageAttachment};` : "" }
							${globalBackgroundImageRepeat ? `background-repeat: ${globalBackgroundImageRepeat};` : "" }
							${globalBackgroundImageSize ? `background-size: ${globalBackgroundImageSize};` : "" } 
						`
						: globalClassicColor ? `background: ${globalClassicColor};` : '')
				}
				${countDownItemWrapperPaddingGetDesktop && countDownItemWrapperPaddingDesktop?.top ? `padding: ${countDownItemWrapperPaddingGetDesktop};` : ''}
				${countDownItemWrapperMarginGetDesktop && countDownItemWrapperMarginDesktop?.top ? `margin: ${countDownItemWrapperMarginGetDesktop};` : ''}
				transition: all .3s ease-in-out;
			}
	
			.fb-count-down-wrapper.${blockID}:hover{
				${hoverBackgroundType === "gradient" 
					? (hoverCustomGradientSwitcher && hoverCustomGradientInputValue 
						? `background: ${hoverCustomGradientInputValue};` 
						: (hoverGradientColor 
							? `background: ${hoverGradientColor};` 
							: `background: ${hoverClassicColor};`))
					: (hoverBackgroundImageUrl && hoverBackgroundImageUrl !== "null" 
						? `
							${hoverBackgroundImageUrl ? `background-image: url(${hoverBackgroundImageUrl});` : "" }
							${hoverBackgroundImagePosition ? `background-position: ${hoverBackgroundImagePosition};` : "" }
							${hoverBackgroundImageAttachment ? `background-attachment: ${hoverBackgroundImageAttachment};` : "" }
							${hoverBackgroundImageRepeat ? `background-repeat: ${hoverBackgroundImageRepeat};` : "" }
							${hoverBackgroundImageSize ? `background-size: ${hoverBackgroundImageSize};` : "" } 
						`
						: hoverClassicColor ? `background: ${hoverClassicColor};` : '')
				}
				${countDownItemWrapperBorderHoverColor ? `border-color: ${countDownItemWrapperBorderHoverColor};` : ''}
				transition: all .3s ease-in-out;
			}
			.fb-count-down-wrapper.${blockID} .fb-count-down-item {
				${countDownItemBgColor ? `background: ${countDownItemBgColor};` : ''}
				${countDownItemSize?.Desktop ? `width: ${countDownItemSize?.Desktop}${countDownItemSizeUnits?.Desktop};` : ''}
				${countDownItemSizeHeight === true && countDownItemSize?.Desktop ? `height: ${countDownItemSize?.Desktop}${countDownItemSizeUnits?.Desktop};` : ''}
				${countDownItemBorder ? `border-style: ${countDownItemBorder};` : ''}
				${countDownItemBorderTypeGetDesktop && countDownItemBorderTypeDesktop?.top ? `border-width: ${countDownItemBorderTypeGetDesktop};` : ''}
				${countDownItemBorderColor ? `border-color: ${countDownItemBorderColor};` : ''}
				${countDownItemBorderRadiusGetDesktop && countDownItemBorderRadiusDesktop?.top ? `border-radius: ${countDownItemBorderRadiusGetDesktop};` : ''}
				transition: all .3s ease-in-out;
			}
			.fb-count-down-wrapper.${blockID} .fb-count-down-item:hover {
				${countDownItemBgHoverColor ? `background: ${countDownItemBgHoverColor};` : ''}
				${countDownItemBorderHoverColor ? `border-color: ${countDownItemBorderHoverColor};` : ''}
				transition: all .3s ease-in-out;
			}
			.fb-count-down-wrapper.${blockID} .fb-count-down-item::before {
				position: absolute;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
				${ countDownSeparatorEnabled ? `
					${countDownSeparatorType === 'colon' ? `content: ':';` : ''}
					${countDownSeparatorType === 'line' ? `content: '|';` : ''}
					${countDownSeparatorType === 'slash' ? `content: '/';` : ''}
					${countDownSeparatorType === 'custom' ? `content: '${countDownSeparatorCustom}';` : ''}
					${countDownSeparatorVerticalGap?.Desktop ? `top: ${countDownSeparatorVerticalGap?.Desktop}${countDownSeparatorVerticalGapUnits?.Desktop};` : ''}
					${countDownSeparatorHorizontalGap?.Desktop ? `right: -${countDownSeparatorHorizontalGap?.Desktop}${countDownSeparatorHorizontalGapUnits?.Desktop};` : ''}
					${countDownSeparatorFontColor ? `color: ${countDownSeparatorFontColor};` : ''}

					${countDownSeparatorGlobalTypoSwitcher?.fontFamily === true && countDownSeparatorGlobalTypographyData?.fontFamily ? `font-family: ${countDownSeparatorGlobalTypographyData?.fontFamily};` : ''}
					${countDownSeparatorGlobalTypoSwitcher?.fontSize === true && countDownSeparatorGlobalTypographyData?.fontSize ? `font-size: ${countDownSeparatorGlobalTypographyData?.fontSize};` : ''}
					${countDownSeparatorGlobalTypoSwitcher?.fontWeight === true && countDownSeparatorGlobalTypographyData?.fontWeight ? `font-weight: ${countDownSeparatorGlobalTypographyData?.fontWeight};` : ''}
					${countDownSeparatorGlobalTypoSwitcher?.fontStyle === true && countDownSeparatorGlobalTypographyData?.fontStyle ? `font-style: ${countDownSeparatorGlobalTypographyData?.fontStyle};` : ''}
					${countDownSeparatorGlobalTypoSwitcher?.textTransform === true && countDownSeparatorGlobalTypographyData?.textTransform ? `text-transform: ${countDownSeparatorGlobalTypographyData?.textTransform};` : ''}
					${countDownSeparatorGlobalTypoSwitcher?.textDecoration === true && countDownSeparatorGlobalTypographyData?.textDecoration ? `text-decoration: ${countDownSeparatorGlobalTypographyData?.textDecoration};` : ''}
					${countDownSeparatorGlobalTypoSwitcher?.letterSpacing === true && countDownSeparatorGlobalTypographyData?.letterSpacing ? `letter-spacing: ${countDownSeparatorGlobalTypographyData?.letterSpacing};` : ''}
					${countDownSeparatorGlobalTypoSwitcher?.lineHeight === true && countDownSeparatorGlobalTypographyData?.lineHeight ? `line-height: ${countDownSeparatorGlobalTypographyData?.lineHeight};` : ''}

					${countDownSeparatorGlobalTypoSwitcher?.fontFamily === false && countDownSeparatorFontFamily ? `font-family: ${countDownSeparatorFontFamily};` : ''}
					${countDownSeparatorGlobalTypoSwitcher?.fontSize === false && countDownSeparatorFontSize?.Desktop ? `font-size: ${countDownSeparatorFontSize?.Desktop}${countDownSeparatorFontSizeUnits?.Desktop};` : ''}
					${countDownSeparatorGlobalTypoSwitcher?.fontWeight === false && countDownSeparatorFontWeight ? `font-weight: ${countDownSeparatorFontWeight};` : ''}
					${countDownSeparatorGlobalTypoSwitcher?.fontStyle === false && countDownSeparatorFontStyle ? `font-style: ${countDownSeparatorFontStyle};` : ''}
					${countDownSeparatorGlobalTypoSwitcher?.textTransform === false && countDownSeparatorTextTransform ? `text-transform: ${countDownSeparatorTextTransform};` : ''}
					${countDownSeparatorGlobalTypoSwitcher?.textDecoration === false && countDownSeparatorTextDecoration ? `text-decoration: ${countDownSeparatorTextDecoration};` : ''}
					${countDownSeparatorGlobalTypoSwitcher?.letterSpacing === false && countDownSeparatorLetterSpacing?.Desktop ? `letter-spacing: ${countDownSeparatorLetterSpacing?.Desktop}${countDownSeparatorLetterSpacingUnits?.Desktop};` : ''}
					${countDownSeparatorGlobalTypoSwitcher?.lineHeight === false && countDownSeparatorLineHeight?.Desktop ? `line-height: ${countDownSeparatorLineHeight?.Desktop}${countDownSeparatorLineHeightUnits?.Desktop};` : ''}
					` 
					: ''
				}
				transition: all .3s ease-in-out;
			}
			.fb-count-down-wrapper.${blockID} .fb-count-down-item:hover::before {
				${countDownSeparatorFontHoverColor ? `color: ${countDownSeparatorFontHoverColor};` : ''}
				transition: all .3s ease-in-out;
			}
			.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time {
				display: flex;
				justify-content: center;
				align-items: center;
				${countDownDigitAlignmentHz === 'left' ? `justify-content: start;` : ""}
				${countDownDigitAlignmentHz === 'center' ? `justify-content: center;` : ""}
				${countDownDigitAlignmentHz === 'right' ? `justify-content: end;` : ""}
				${countDownDigitAlignmentVr === 'left' ? `align-items: start;` : ""}
				${countDownDigitAlignmentVr === 'center' ? `align-items: center;` : ""}
				${countDownDigitAlignmentVr === 'right' ? `align-items: end;` : ""}
				${countDownDigitBgColor ? `background-color: ${countDownDigitBgColor};` : ""}
				${digitFontColor ? `color: ${digitFontColor};` : ""}

				${digitGlobalTypoSwitcher?.fontFamily === true && digitGlobalTypographyData?.fontFamily ? `font-family: ${digitGlobalTypographyData?.fontFamily};` : ''}
				${digitGlobalTypoSwitcher?.fontSize === true && digitGlobalTypographyData?.fontSize ? `font-size: ${digitGlobalTypographyData?.fontSize};` : ''}
				${digitGlobalTypoSwitcher?.fontWeight === true && digitGlobalTypographyData?.fontWeight ? `font-weight: ${digitGlobalTypographyData?.fontWeight};` : ''}
				${digitGlobalTypoSwitcher?.fontStyle === true && digitGlobalTypographyData?.fontStyle ? `font-style: ${digitGlobalTypographyData?.fontStyle};` : ''}
				${digitGlobalTypoSwitcher?.textTransform === true && digitGlobalTypographyData?.textTransform ? `text-transform: ${digitGlobalTypographyData?.textTransform};` : ''}
				${digitGlobalTypoSwitcher?.textDecoration === true && digitGlobalTypographyData?.textDecoration ? `text-decoration: ${digitGlobalTypographyData?.textDecoration};` : ''}
				${digitGlobalTypoSwitcher?.letterSpacing === true && digitGlobalTypographyData?.letterSpacing ? `letter-spacing: ${digitGlobalTypographyData?.letterSpacing};` : ''}
				${digitGlobalTypoSwitcher?.lineHeight === true && digitGlobalTypographyData?.lineHeight ? `line-height: ${digitGlobalTypographyData?.lineHeight};` : ''}

				${digitGlobalTypoSwitcher?.fontFamily === false && digitFontFamily ? `font-family: ${digitFontFamily};` : ""}
				${digitGlobalTypoSwitcher?.fontSize === false && digitFontSize?.Desktop ? `font-size: ${digitFontSize?.Desktop}${digitFontSizeUnits?.Desktop};` : ""}
				${digitGlobalTypoSwitcher?.fontWeight === false && digitFontWeight ? `font-weight: ${digitFontWeight};` : ""}
				${digitGlobalTypoSwitcher?.fontStyle === false && digitFontStyle ? `font-style: ${digitFontStyle};` : ""}
				${digitGlobalTypoSwitcher?.textTransform === false && digitTextTransform ? `text-transform: ${digitTextTransform};` : ""}
				${digitGlobalTypoSwitcher?.textDecoration === false && digitTextDecoration ? `text-decoration: ${digitTextDecoration};` : ""}
				${digitGlobalTypoSwitcher?.letterSpacing === false && digitLetterSpacing?.Desktop ? `letter-spacing: ${digitLetterSpacing?.Desktop}${digitLetterSpacingUnits?.Desktop};` : ""}
				${digitGlobalTypoSwitcher?.lineHeight === false && digitLineHeight?.Desktop ? `line-height: ${digitLineHeight?.Desktop}${digitLineHeightUnits?.Desktop};` : ""}
				${countDownDigitBorder ? `border-style: ${countDownDigitBorder};` : ''}
				${countDownDigitMarginGetDesktop && countDownDigitMarginDesktop?.top ? `margin: ${countDownDigitMarginGetDesktop};` : ''}
				${countDownDigitBorderTypeGetDesktop && countDownDigitBorderTypeDesktop?.top ? `border-width: ${countDownDigitBorderTypeGetDesktop};` : ''}
				${countDownDigitBorderColor ? `border-color: ${countDownDigitBorderColor};` : ''}
				${countDownDigitBorderRadiusGetDesktop && countDownDigitBorderRadiusDesktop?.top ? `border-radius: ${countDownDigitBorderRadiusGetDesktop};` : ''}
				${countDownDigitWidth?.Desktop ? `width: ${countDownDigitWidth?.Desktop}${countDownDigitWidthUnits?.Desktop};` : ''}
				${countDownDigitHeight?.Desktop ? `height: ${countDownDigitHeight?.Desktop}${countDownDigitHeightUnits?.Desktop};` : ''}
				transition: all .3s ease-in-out;
			}
			.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time:hover {
				${countDownDigitBgHoverColor ? `background-color: ${countDownDigitBgHoverColor};` : ""}
				${digitFontHoverColor ? `color: ${digitFontHoverColor};` : ""}
				${countDownDigitBorderHoverColor ? `border-color: ${countDownDigitBorderHoverColor};` : ''}
				transition: all .3s ease-in-out;
			}
			.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
			    display: flex;
				${countDownLabelAlignmentHz === 'left' ? `justify-content: start;` : ""}
				${countDownLabelAlignmentHz === 'center' ? `justify-content: center;` : ""}
				${countDownLabelAlignmentHz === 'right' ? `justify-content: end;` : ""}
				${countDownLabelAlignmentVr === 'left' ? `align-items: start;` : ""}
				${countDownLabelAlignmentVr === 'center' ? `align-items: center;` : ""}
				${countDownLabelAlignmentVr === 'right' ? `align-items: end;` : ""}
				${labelBgColor ? `background-color: ${labelBgColor};` : ""}
				${labelFontColor ? `color: ${labelFontColor};` : ""}

				${labelGlobalTypoSwitcher?.fontFamily === true && labelGlobalTypographyData?.fontFamily ? `font-family: ${labelGlobalTypographyData?.fontFamily};` : ''}
				${labelGlobalTypoSwitcher?.fontSize === true && labelGlobalTypographyData?.fontSize ? `font-size: ${labelGlobalTypographyData?.fontSize};` : ''}
				${labelGlobalTypoSwitcher?.fontWeight === true && labelGlobalTypographyData?.fontWeight ? `font-weight: ${labelGlobalTypographyData?.fontWeight};` : ''}
				${labelGlobalTypoSwitcher?.fontStyle === true && labelGlobalTypographyData?.fontStyle ? `font-style: ${labelGlobalTypographyData?.fontStyle};` : ''}
				${labelGlobalTypoSwitcher?.textTransform === true && labelGlobalTypographyData?.textTransform ? `text-transform: ${labelGlobalTypographyData?.textTransform};` : ''}
				${labelGlobalTypoSwitcher?.textDecoration === true && labelGlobalTypographyData?.textDecoration ? `text-decoration: ${labelGlobalTypographyData?.textDecoration};` : ''}
				${labelGlobalTypoSwitcher?.letterSpacing === true && labelGlobalTypographyData?.letterSpacing ? `letter-spacing: ${labelGlobalTypographyData?.letterSpacing};` : ''}
				${labelGlobalTypoSwitcher?.lineHeight === true && labelGlobalTypographyData?.lineHeight ? `line-height: ${labelGlobalTypographyData?.lineHeight};` : ''}

				${labelGlobalTypoSwitcher?.fontFamily === false && labelFontFamily && labelFontFamily !== 'Default' ? `font-family: ${labelFontFamily};` : ""}
				${labelGlobalTypoSwitcher?.fontSize === false && labelFontSize?.Desktop ? `font-size: ${labelFontSize?.Desktop}${labelFontSizeUnits?.Desktop};` : ""}
				${labelGlobalTypoSwitcher?.fontWeight === false && labelFontWeight ? `font-weight: ${labelFontWeight};` : ""}
				${labelGlobalTypoSwitcher?.fontStyle === false && labelFontStyle ? `font-style: ${labelFontStyle};` : ""}
				${labelGlobalTypoSwitcher?.textTransform === false && labelTextTransform ? `text-transform: ${labelTextTransform};` : ""}
				${labelGlobalTypoSwitcher?.textDecoration === false && labelTextDecoration ? `text-decoration: ${labelTextDecoration};` : ""}
				${labelGlobalTypoSwitcher?.letterSpacing === false && labelLetterSpacing?.Desktop ? `letter-spacing: ${labelLetterSpacing?.Desktop}${labelLetterSpacingUnits?.Desktop};` : ""}
				${labelGlobalTypoSwitcher?.lineHeight === false && labelLineHeight?.Desktop ? `line-height: ${labelLineHeight?.Desktop}${labelLineHeightUnits?.Desktop};` : ""}
				${countDownLabelBorder ? `border-style: ${countDownLabelBorder};` : ''}
				${countDownLabelBorderTypeGetDesktop && countDownLabelBorderTypeDesktop?.top ? `border-width: ${countDownLabelBorderTypeGetDesktop};` : ''}
				${countDownLabelBorderColor ? `border-color: ${countDownLabelBorderColor};` : ''}
				${countDownLabelBorderRadiusGetDesktop && countDownLabelBorderRadiusDesktop?.top ? `border-radius: ${countDownLabelBorderRadiusGetDesktop};` : ''}
				${countDownLabelMarginGetDesktop && countDownLabelMarginDesktop?.top ? `margin: ${countDownLabelMarginGetDesktop};` : ''}
				${countDownLabelWidth?.Desktop ? `width: ${countDownLabelWidth?.Desktop}${countDownLabelWidthUnits?.Desktop};` : ''}
				${countDownLabelHeight?.Desktop ? `height: ${countDownLabelHeight?.Desktop}${countDownLabelHeightUnits?.Desktop};` : ''}
				transition: all .3s ease-in-out;
			}
			.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label:hover{
				${labelBgHoverColor ? `background-color: ${labelBgHoverColor};` : ""}
				${labelFontHoverColor ? `color: ${labelFontHoverColor};` : ""}
				${countDownLabelBorderHoverColor ? `border-color: ${countDownLabelBorderHoverColor};` : ''}
				transition: all .3s ease-in-out;
			}

			${ singleDigitFontColorSwitcher === true ? `
				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.days {
					${daysDigitFontColor ? `color: ${daysDigitFontColor};` : ""}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.days:hover {
					${daysDigitFontHoverColor ? `color: ${daysDigitFontHoverColor};` : ""}
				}

				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.hours {
					${hoursDigitFontColor ? `color: ${hoursDigitFontColor};` : ""}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.hours:hover {
					${hoursDigitFontHoverColor ? `color: ${hoursDigitFontHoverColor};` : ""}
				}

				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.minutes {
					${minutesDigitFontColor ? `color: ${minutesDigitFontColor};` : ""}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.minutes:hover {
					${minutesDigitFontHoverColor ? `color: ${minutesDigitFontHoverColor};` : ""}
				}

				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.seconds {
					${secondsDigitFontColor ? `color: ${secondsDigitFontColor};` : ""}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.seconds:hover {
					${secondsDigitFontHoverColor ? `color: ${secondsDigitFontHoverColor};` : ""}
				}
			` : ''}

			@media only screen and (max-width: 1024px) {
				.fb-count-down-main-wrapper.${blockID} {
					${countDownPositionType !== 'default' ? `position: ${countDownPositionType};` : ''}
					${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownHZOrientationType === 'left' && countDownHZLeftOffset?.Tablet ? `left: ${countDownHZLeftOffset?.Tablet}${countDownHZLeftOffsetUnits?.Tablet};` : ''}
					${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownHZOrientationType === 'right' && countDownHZRightOffset?.Tablet ? `right: ${countDownHZRightOffset?.Tablet}${countDownHZRightOffsetUnits?.Tablet};` : ''}
					${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownVROrientationType === 'top' && countDownVRTopOffset?.Tablet ? `top: ${countDownVRTopOffset?.Tablet}${countDownVRTopOffsetUnits?.Tablet};` : ''}
					${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownVROrientationType === 'bottom' && countDownVRBottomOffset?.Tablet ? `bottom: ${countDownVRBottomOffset?.Tablet}${countDownVRBottomOffsetUnits?.Tablet};` : ''}
					${countDownZIndex?.Tablet ? `z-index: ${countDownZIndex?.Tablet};` : ''}
				}
				.fb-count-down-wrapper.${blockID} {
					${countDownLayoutType === 'grid' ? `grid-template-columns: repeat(${countDownGrid?.Tablet}, 1fr);` : ''}
					${countDownItemGap?.Tablet ? `gap: ${countDownItemGap?.Tablet}${countDownItemGapUnits?.Tablet};` : ""}
					${countDownItemWrapperBorderTypeGetTablet && countDownItemWrapperBorderTypeTablet?.top ? `border-width: ${countDownItemWrapperBorderTypeGetTablet};` : ""}
					${countDownItemWrapperBorderRadiusGetTablet && countDownItemWrapperBorderRadiusTablet?.top ? `border-radius: ${countDownItemWrapperBorderRadiusGetTablet};` : ""}
					${countDownItemWrapperPaddingGetTablet && countDownItemWrapperPaddingTablet?.top ? `padding: ${countDownItemWrapperPaddingGetTablet};` : ""}
					${countDownItemWrapperMarginGetTablet && countDownItemWrapperMarginTablet?.top ? `margin: ${countDownItemWrapperMarginGetTablet};` : ""}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item {
					${countDownItemSize?.Tablet ? `width: ${countDownItemSize?.Tablet}${countDownItemSizeUnits?.Tablet};` : ""}
					${countDownItemSizeHeight === true && countDownItemSize?.Tablet ? `height: ${countDownItemSize?.Tablet}${countDownItemSizeUnits?.Tablet};` : ""}
					${countDownItemBorderTypeGetTablet && countDownItemBorderTypeTablet?.top ? `border-width: ${countDownItemBorderTypeGetTablet};` : ""}
					${countDownItemBorderRadiusGetTablet && countDownItemBorderRadiusTablet?.top ? `border-radius: ${countDownItemBorderRadiusGetTablet};` : ""}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item:before {
					${
						countDownSeparatorEnabled && countDownSeparatorType && countDownSeparatorType !== "null"
							? `
								${countDownSeparatorVerticalGap?.Tablet ? `top: ${countDownSeparatorVerticalGap?.Tablet}${countDownSeparatorVerticalGapUnits?.Tablet};` : ""}
								${countDownSeparatorHorizontalGap?.Tablet ? `right: -${countDownSeparatorHorizontalGap?.Tablet}${countDownSeparatorHorizontalGapUnits?.Tablet};` : ""}
								${countDownSeparatorGlobalTypoSwitcher?.fontSize === false && countDownSeparatorFontSize?.Tablet ? `font-size: ${countDownSeparatorFontSize?.Tablet}${countDownSeparatorFontSizeUnits?.Tablet};` : ""}
								${countDownSeparatorGlobalTypoSwitcher?.letterSpacing === false && countDownSeparatorLetterSpacing?.Tablet ? `letter-spacing: ${countDownSeparatorLetterSpacing?.Tablet}${countDownSeparatorLetterSpacingUnits?.Tablet};` : ""}
								${countDownSeparatorGlobalTypoSwitcher?.lineHeight === false && countDownSeparatorLineHeight?.Tablet ? `line-height: ${countDownSeparatorLineHeight?.Tablet}${countDownSeparatorLineHeightUnits?.Tablet};` : ""}
							`
							: ""
					}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time {
					${digitGlobalTypoSwitcher?.fontSize === false && digitFontSize?.Tablet ? `font-size: ${digitFontSize?.Tablet}${digitFontSizeUnits?.Tablet};` : ""}
					${digitGlobalTypoSwitcher?.letterSpacing === false && digitLetterSpacing?.Tablet ? `letter-spacing: ${digitLetterSpacing?.Tablet}${digitLetterSpacingUnits?.Tablet};` : ""}
					${digitGlobalTypoSwitcher?.lineHeight === false && digitLineHeight?.Tablet ? `line-height: ${digitLineHeight?.Tablet}${digitLineHeightUnits?.Tablet};` : ""}
					${countDownDigitMarginGetTablet && countDownDigitMarginTablet?.top ? `margin: ${countDownDigitMarginGetTablet};` : ''}
					${countDownDigitBorderTypeGetTablet && countDownDigitBorderTypeTablet?.top ? `border-width: ${countDownDigitBorderTypeGetTablet};` : ''}
					${countDownDigitBorderRadiusGetTablet && countDownDigitBorderRadiusTablet?.top ? `border-radius: ${countDownDigitBorderRadiusGetTablet};` : ''}
					${countDownDigitWidth?.Tablet ? `width: ${countDownDigitWidth?.Tablet}${countDownDigitWidthUnits?.Tablet};` : ''}
					${countDownDigitHeight?.Tablet ? `height: ${countDownDigitHeight?.Tablet}${countDownDigitHeightUnits?.Tablet};` : ''}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
					${labelGlobalTypoSwitcher?.fontSize === false && labelFontSize?.Tablet ? `font-size: ${labelFontSize?.Tablet}${labelFontSizeUnits?.Tablet};` : ""}
					${labelGlobalTypoSwitcher?.letterSpacing === false && labelLetterSpacing?.Tablet ? `letter-spacing: ${labelLetterSpacing?.Tablet}${labelLetterSpacingUnits?.Tablet};` : ""}
					${labelGlobalTypoSwitcher?.lineHeight === false && labelLineHeight?.Tablet ? `line-height: ${labelLineHeight?.Tablet}${labelLineHeightUnits?.Tablet};` : ""}
					${countDownLabelBorderTypeGetTablet && countDownLabelBorderTypeTablet?.top ? `border-width: ${countDownLabelBorderTypeGetTablet};` : ''}
					${countDownLabelBorderRadiusGetTablet && countDownLabelBorderRadiusTablet?.top ? `border-radius: ${countDownLabelBorderRadiusGetTablet};` : ''}
					${countDownLabelMarginGetTablet && countDownLabelMarginTablet?.top ? `margin: ${countDownLabelMarginGetTablet};` : ''}
					${countDownLabelWidth?.Tablet ? `width: ${countDownLabelWidth?.Tablet}${countDownLabelWidthUnits?.Tablet};` : ''}
					${countDownLabelHeight?.Tablet ? `height: ${countDownLabelHeight?.Tablet}${countDownLabelHeightUnits?.Tablet};` : ''}
				}
			}

			@media only screen and (max-width: 767px) {
					.fb-count-down-main-wrapper.${blockID} {
						${countDownPositionType !== 'default' ? `position: ${countDownPositionType};` : ''}
						${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownHZOrientationType === 'left' && countDownHZLeftOffset?.Mobile ? `left: ${countDownHZLeftOffset?.Mobile}${countDownHZLeftOffsetUnits?.Mobile};` : ''}
						${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownHZOrientationType === 'right' && countDownHZRightOffset?.Mobile ? `right: ${countDownHZRightOffset?.Mobile}${countDownHZRightOffsetUnits?.Mobile};` : ''}
						${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownVROrientationType === 'top' && countDownVRTopOffset?.Mobile ? `top: ${countDownVRTopOffset?.Mobile}${countDownVRTopOffsetUnits?.Mobile};` : ''}
						${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownVROrientationType === 'bottom' && countDownVRBottomOffset?.Mobile ? `bottom: ${countDownVRBottomOffset?.Mobile}${countDownVRBottomOffsetUnits?.Mobile};` : ''}
						${countDownZIndex?.Mobile ? `z-index: ${countDownZIndex?.Mobile};` : ''}
					}
				.fb-count-down-wrapper.${blockID} {
					${countDownLayoutType === 'grid' ? `grid-template-columns: repeat(${countDownGrid?.Mobile}, 1fr);` : ''}
					${countDownItemGap?.Mobile ? `gap: ${countDownItemGap?.Mobile}${countDownItemGapUnits?.Mobile};` : ""}
					${countDownItemWrapperBorderTypeGetMobile && countDownItemWrapperBorderTypeMobile?.top ? `border-width: ${countDownItemWrapperBorderTypeGetMobile};` : ""}
					${countDownItemWrapperBorderRadiusGetMobile && countDownItemWrapperBorderRadiusMobile?.top ? `border-radius: ${countDownItemWrapperBorderRadiusGetMobile};` : ""}
					${countDownItemWrapperPaddingGetMobile && countDownItemWrapperPaddingMobile?.top ? `padding: ${countDownItemWrapperPaddingGetMobile};` : ""}
					${countDownItemWrapperMarginGetMobile && countDownItemWrapperMarginMobile?.top ? `margin: ${countDownItemWrapperMarginGetMobile};` : ""}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item {
					${countDownItemSize?.Mobile ? `width: ${countDownItemSize?.Mobile}${countDownItemSizeUnits?.Mobile};` : ""}
					${countDownItemSizeHeight === true && countDownItemSize?.Mobile ? `height: ${countDownItemSize?.Mobile}${countDownItemSizeUnits?.Mobile};` : ""}
					${countDownItemBorderTypeGetMobile && countDownItemBorderTypeMobile?.top ? `border-width: ${countDownItemBorderTypeGetMobile};` : ""}
					${countDownItemBorderRadiusGetMobile && countDownItemBorderRadiusMobile?.top ? `border-radius: ${countDownItemBorderRadiusGetMobile};` : ""}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item:before {
					${
						countDownSeparatorEnabled && countDownSeparatorType && countDownSeparatorType !== "null"
							? `
								${countDownSeparatorVerticalGap?.Mobile ? `top: ${countDownSeparatorVerticalGap?.Mobile}${countDownSeparatorVerticalGapUnits?.Mobile};` : ""}
								${countDownSeparatorHorizontalGap?.Mobile ? `right: -${countDownSeparatorHorizontalGap?.Mobile}${countDownSeparatorHorizontalGapUnits?.Mobile};` : ""}
								${countDownSeparatorGlobalTypoSwitcher?.fontSize === false && countDownSeparatorFontSize?.Mobile ? `font-size: ${countDownSeparatorFontSize?.Mobile}${countDownSeparatorFontSizeUnits?.Mobile};` : ""}
								${countDownSeparatorGlobalTypoSwitcher?.letterSpacing === false && countDownSeparatorLetterSpacing?.Mobile ? `letter-spacing: ${countDownSeparatorLetterSpacing?.Mobile}${countDownSeparatorLetterSpacingUnits?.Mobile};` : ""}
								${countDownSeparatorGlobalTypoSwitcher?.lineHeight === false && countDownSeparatorLineHeight?.Mobile ? `line-height: ${countDownSeparatorLineHeight?.Mobile}${countDownSeparatorLineHeightUnits?.Mobile};` : ""}
							`
							: ""
					}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time {
					${digitGlobalTypoSwitcher?.fontSize === false && digitFontSize?.Mobile ? `font-size: ${digitFontSize?.Mobile}${digitFontSizeUnits?.Mobile};` : ""}
					${digitGlobalTypoSwitcher?.letterSpacing === false && digitLetterSpacing?.Mobile ? `letter-spacing: ${digitLetterSpacing?.Mobile}${digitLetterSpacingUnits?.Mobile};` : ""}
					${digitGlobalTypoSwitcher?.lineHeight === false && digitLineHeight?.Mobile ? `line-height: ${digitLineHeight?.Mobile}${digitLineHeightUnits?.Mobile};` : ""}
					${countDownDigitMarginGetMobile && countDownDigitMarginMobile?.top ? `margin: ${countDownDigitMarginGetMobile};` : ''}
					${countDownDigitBorderTypeGetMobile && countDownDigitBorderTypeMobile?.top ? `border-width: ${countDownDigitBorderTypeGetMobile};` : ''}
					${countDownDigitBorderRadiusGetMobile && countDownDigitBorderRadiusMobile?.top ? `border-radius: ${countDownDigitBorderRadiusGetMobile};` : ''}
					${countDownDigitWidth?.Mobile ? `width: ${countDownDigitWidth?.Mobile}${countDownDigitWidthUnits?.Mobile};` : ''}
					${countDownDigitHeight?.Mobile ? `height: ${countDownDigitHeight?.Mobile}${countDownDigitHeightUnits?.Mobile};` : ''}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
					${labelGlobalTypoSwitcher?.fontSize === false && labelFontSize?.Mobile ? `font-size: ${labelFontSize?.Mobile}${labelFontSizeUnits?.Mobile};` : ""}
					${labelGlobalTypoSwitcher?.letterSpacing === false && labelLetterSpacing?.Mobile ? `letter-spacing: ${labelLetterSpacing?.Mobile}${labelLetterSpacingUnits?.Mobile};` : ""}
					${labelGlobalTypoSwitcher?.lineHeight === false && labelLineHeight?.Mobile ? `line-height: ${labelLineHeight?.Mobile}${labelLineHeightUnits?.Mobile};` : ""}
					${countDownLabelBorderTypeGetMobile && countDownLabelBorderTypeMobile?.top ? `border-width: ${countDownLabelBorderTypeGetMobile};` : ''}
					${countDownLabelBorderRadiusGetMobile && countDownLabelBorderRadiusMobile?.top ? `border-radius: ${countDownLabelBorderRadiusGetMobile};` : ''}
					${countDownLabelMarginGetMobile && countDownLabelMarginMobile?.top ? `margin: ${countDownLabelMarginGetMobile};` : ''}
					${countDownLabelWidth?.Mobile ? `width: ${countDownLabelWidth?.Mobile}${countDownLabelWidthUnits?.Mobile};` : ''}
					${countDownLabelHeight?.Mobile ? `height: ${countDownLabelHeight?.Mobile}${countDownLabelHeightUnits?.Mobile};` : ''}
				}
			}
	
		`,
		[
			blockID,
			countDownItemGap,
			countDownItemWrapperBorder,
			countDownItemWrapperBorderTypeGetDesktop,
			countDownItemWrapperBorderRadiusGetDesktop,
			countDownItemWrapperBorderColor,
			countDownItemWrapperBorderHoverColor,
			countDownItemWrapperBackgroundImageEnabled,
			countDownItemWrapperBackgroundImageUrl,
			countDownItemWrapperBgImagePositionType,
			countDownItemWrapperBgImageRepeatType,
			countDownItemWrapperBgImageSizeType,
			countDownItemWrapperPaddingGetDesktop,
			countDownItemWrapperMarginGetDesktop,
			countDownItemBgColor,
			countDownItemSize,
			countDownItemSizeHeight,
			countDownItemBorder,
			countDownItemBorderTypeGetDesktop,
			countDownItemBorderRadiusGetDesktop,
			countDownItemBorderColor,
			countDownItemBgImageEnabled,
			countDownItemBgImageUrl,
			countDownItemBgImagePositionType,
			countDownItemBgImageRepeatType,
			countDownItemBgImageSizeType,
			countDownSeparatorEnabled,
			countDownSeparatorType,
			countDownSeparatorCustom,
			countDownSeparatorHorizontalGap,
			countDownSeparatorVerticalGap,
			countDownSeparatorFontColor,
			countDownSeparatorFontHoverColor,
			countDownSeparatorGlobalTypoSwitcher,
			countDownSeparatorGlobalTypographyData,
			countDownSeparatorGlobalTypoType,
			countDownSeparatorFontFamily,
			countDownSeparatorFontSize,
			countDownSeparatorFontWeight,
			countDownSeparatorFontStyle,
			countDownSeparatorTextTransform,
			countDownSeparatorTextDecoration,
			countDownSeparatorLetterSpacing,
			countDownSeparatorLineHeight,
			digitFontColor,
			digitFontHoverColor,
			digitGlobalTypoSwitcher,
			digitGlobalTypographyData,
			digitGlobalTypoType,
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
			labelFontColor,
			labelFontHoverColor,
			labelBgColor,
			labelBgHoverColor,
			labelGlobalTypoSwitcher,
			labelGlobalTypographyData,
			labelGlobalTypoType,
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
			countDownItemGapUnits,
			countDownItemWrapperBorderTypeGetTablet,
			countDownItemWrapperBorderRadiusGetTablet,
			countDownItemWrapperPaddingGetTablet,
			countDownItemWrapperMarginGetTablet,
			countDownItemSizeUnits,
			countDownItemBorderTypeGetTablet,
			countDownItemBorderRadiusGetTablet,
			countDownSeparatorHorizontalGapUnits,
			countDownSeparatorVerticalGapUnits,
			countDownSeparatorFontSizeUnits,
			countDownSeparatorLetterSpacingUnits,
			countDownSeparatorLineHeightUnits,
			countDownItemWrapperBorderTypeGetMobile,
			countDownItemWrapperBorderRadiusGetMobile,
			countDownItemWrapperPaddingGetMobile,
			countDownItemWrapperMarginGetMobile,
			countDownItemBorderTypeGetMobile,
			countDownItemBorderRadiusGetMobile,
			globalBackgroundType,
			globalCustomGradientSwitcher,
			globalCustomGradientInputValue,
			globalGradientColor,
			globalClassicColor,
			globalBackgroundImageUrl,
			globalBackgroundImagePosition,
			globalBackgroundImageAttachment,
			globalBackgroundImageRepeat,
			globalBackgroundImageSize,
			hoverBackgroundType,
			hoverCustomGradientSwitcher,
			hoverCustomGradientInputValue,
			hoverGradientColor,
			hoverClassicColor,
			hoverBackgroundImageUrl,
			hoverBackgroundImagePosition,
			hoverBackgroundImageAttachment,
			hoverBackgroundImageRepeat,
			hoverBackgroundImageSize,

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

			countDownLayoutType,
			countDownFlexWrap,
			countDownLayoutAlignment,
			countDownGrid,
			countDownItemGap,
			countDownItemGapUnits,

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
		]
	);

	const customCss = getCustomCss(countDownGlobalWraperCustomCSS, `.${blockID}`);
	
	useEffect(() => {
		setAttributes({
			blockStyle: `${countDownStyle} ${customCss}`.replace(/\s+/g, " ").trim(),
		});
	}, [countDownStyle, customCss]);
	
	const editorStyle = `${countDownStyle} ${customCss}`.replace(/\s+/g, " ").trim();

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
				{/* <SelectControl
					label={__("Preset Style", "frontis-blocks")}
					value={countDownPresetStyle}
					options={PRESETS}
					onChange={(selected) => changeCountDownPreset(selected)}
				/> */}
				<FB_Presets
					className="fb-countdown-presets"
					label={__('Select Preset', 'frontis-blocks')}
					presets={countdownPresets}
					value = {countDownPresetStyle}
					onChangeValue = 'countDownPresetStyle'
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
								onChange={(value) => setAttributes({ countDownSeparatorCustom: value })}
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
					label={ 'Border Width' }
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
					label={ 'Border Radius' }
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
							digitGlobalTypoSwitcher: value === 'default' ? {...digitGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...digitGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
						})
					}}

					globalTypoOption={digitGlobalTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ digitGlobalTypoOption: value })}

					fontFamily={digitFontFamily}
					onChangeFontFamily={(value) => setAttributes({ digitFontFamily: value, digitGlobalTypoSwitcher: {...digitGlobalTypoSwitcher, fontFamily: value && false} })}

					fontSize={digitFontSize}
					onChangeFontSize={(value) => setAttributes({ digitFontSize: value, digitGlobalTypoSwitcher: {...digitGlobalTypoSwitcher, fontSize: value && false} })}

					fontSizeUnits={digitFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ digitFontSizeUnits: value })}

					fontWeight={digitFontWeight}
					onChangeFontWeight={(value) => setAttributes({ digitFontWeight: value, digitGlobalTypoSwitcher: {...digitGlobalTypoSwitcher, fontWeight: value && false} })}

					fontStyle={digitFontStyle}
					onChangeFontStyle={(value) => setAttributes({ digitFontStyle: value, digitGlobalTypoSwitcher: {...digitGlobalTypoSwitcher, fontStyle: value && false} })}

					textTransform={digitTextTransform}
					onChangeTextTransform={(value) => setAttributes({ digitTextTransform: value, digitGlobalTypoSwitcher: {...digitGlobalTypoSwitcher, textTransform: value && false} })}

					textDecoration={digitTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ digitTextDecoration: value, digitGlobalTypoSwitcher: {...digitGlobalTypoSwitcher, textDecoration: value && false} })}

					letterSpacing={digitLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ digitLetterSpacing: value, digitGlobalTypoSwitcher: {...digitGlobalTypoSwitcher, letterSpacing: value && false} })}

					letterSpacingUnits={digitLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ digitLetterSpacingUnits: value })}

					lineHeight={digitLineHeight}
					onChangeLineHeight={(value) => setAttributes({ digitLineHeight: value, digitGlobalTypoSwitcher: {...digitGlobalTypoSwitcher, lineHeight: value && false} })}

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

				{ singleDigitFontColorSwitcher === true && (
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
					label={ 'Margin' }
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
					label={ 'Border Width' }
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
					label={ 'Border Radius' }
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
							labelGlobalTypoSwitcher: value === 'default' ? {...labelGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...labelGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
						})
					}}

					globalTypoOption={labelGlobalTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ labelGlobalTypoOption: value })}

					fontFamily={labelFontFamily}
					onChangeFontFamily={(value) => setAttributes({ labelFontFamily: value, labelGlobalTypoSwitcher: {...labelGlobalTypoSwitcher, fontFamily: value && false} })}

					fontSize={labelFontSize}
					onChangeFontSize={(value) => setAttributes({ labelFontSize: value, labelGlobalTypoSwitcher: {...labelGlobalTypoSwitcher, fontSize: value && false} })}

					fontSizeUnits={labelFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ labelFontSizeUnits: value })}

					fontWeight={labelFontWeight}
					onChangeFontWeight={(value) => setAttributes({ labelFontWeight: value, labelGlobalTypoSwitcher: {...labelGlobalTypoSwitcher, fontWeight: value && false} })}

					fontStyle={labelFontStyle}
					onChangeFontStyle={(value) => setAttributes({ labelFontStyle: value, labelGlobalTypoSwitcher: {...labelGlobalTypoSwitcher, fontStyle: value && false} })}

					textTransform={labelTextTransform}
					onChangeTextTransform={(value) => setAttributes({ labelTextTransform: value, labelGlobalTypoSwitcher: {...labelGlobalTypoSwitcher, textTransform: value && false} })}

					textDecoration={labelTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ labelTextDecoration: value, labelGlobalTypoSwitcher: {...labelGlobalTypoSwitcher, textDecoration: value && false} })}

					letterSpacing={labelLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ labelLetterSpacing: value, labelGlobalTypoSwitcher: {...labelGlobalTypoSwitcher, letterSpacing: value && false} })}

					letterSpacingUnits={labelLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ labelLetterSpacingUnits: value })}

					lineHeight={labelLineHeight}
					onChangeLineHeight={(value) => setAttributes({ labelLineHeight: value, labelGlobalTypoSwitcher: {...labelGlobalTypoSwitcher, lineHeight: value && false} })}

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
				label={ 'Margin' }
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
				label={ 'Border Width' }
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
				label={ 'Border Radius' }
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
							countDownSeparatorGlobalTypoSwitcher: value === 'default' ? {...countDownSeparatorGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...countDownSeparatorGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
						})
					}}

					globalTypoOption={countDownSeparatorGlobalTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ countDownSeparatorGlobalTypoOption: value })}

					fontFamily={countDownSeparatorFontFamily}
					onChangeFontFamily={(value) => setAttributes({ countDownSeparatorFontFamily: value, countDownSeparatorGlobalTypoSwitcher: {...countDownSeparatorGlobalTypoSwitcher, fontFamily: value && false} })}

					fontSize={countDownSeparatorFontSize}
					onChangeFontSize={(value) => setAttributes({ countDownSeparatorFontSize: value, countDownSeparatorGlobalTypoSwitcher: {...countDownSeparatorGlobalTypoSwitcher, fontSize: value && false} })}

					fontSizeUnits={countDownSeparatorFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ countDownSeparatorFontSizeUnits: value })}

					fontWeight={countDownSeparatorFontWeight}
					onChangeFontWeight={(value) => setAttributes({ countDownSeparatorFontWeight: value, countDownSeparatorGlobalTypoSwitcher: {...countDownSeparatorGlobalTypoSwitcher, fontWeight: value && false} })}

					fontStyle={countDownSeparatorFontStyle}
					onChangeFontStyle={(value) => setAttributes({ countDownSeparatorFontStyle: value, countDownSeparatorGlobalTypoSwitcher: {...countDownSeparatorGlobalTypoSwitcher, fontStyle: value && false} })}

					textTransform={countDownSeparatorTextTransform}
					onChangeTextTransform={(value) => setAttributes({ countDownSeparatorTextTransform: value, countDownSeparatorGlobalTypoSwitcher: {...countDownSeparatorGlobalTypoSwitcher, textTransform: value && false} })}

					textDecoration={countDownSeparatorTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ countDownSeparatorTextDecoration: value, countDownSeparatorGlobalTypoSwitcher: {...countDownSeparatorGlobalTypoSwitcher, textDecoration: value && false} })}

					letterSpacing={countDownSeparatorLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ countDownSeparatorLetterSpacing: value, countDownSeparatorGlobalTypoSwitcher: {...countDownSeparatorGlobalTypoSwitcher, letterSpacing: value && false} })}

					letterSpacingUnits={countDownSeparatorLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ countDownSeparatorLetterSpacingUnits: value })}

					lineHeight={countDownSeparatorLineHeight}
					onChangeLineHeight={(value) => setAttributes({ countDownSeparatorLineHeight: value, countDownSeparatorGlobalTypoSwitcher: {...countDownSeparatorGlobalTypoSwitcher, lineHeight: value && false} })}

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
					setBgColorSwitcher={(value) => setAttributes({ globalBgColorSwitcher: value }) }
					normalBackgroundType={globalBackgroundType}
					setNormalBackgroundType={(value) => setAttributes({ globalBackgroundType: value }) }
					normalClassicColor={globalClassicColor}
					setNormalClassicColor={(value) => setAttributes({ globalClassicColor: value === undefined ? '' : value }) }
					normalGradientColor={globalGradientColor}
					setNormalGradientColor={(value) => setAttributes({ globalGradientColor: value === undefined ? null : value }) }
					normalCustomGradientSwitcher={ globalCustomGradientSwitcher }
					setNormalCustomGradientSwitcher={(value) => setAttributes({ globalCustomGradientSwitcher: value, }) }
					normalCustomGradientInputValue={ globalCustomGradientInputValue }
					setNormalCustomGradientInputValue={(value) => setAttributes({ globalCustomGradientInputValue: value, }) }
					normalBackgroundImageUrl={globalBackgroundImageUrl}
					setNormalBackgroundImageUrl={(value) => setAttributes({ globalBackgroundImageUrl: value }) }
					normalBackgroundImageAlt={globalBackgroundImageAlt}
					setNormalBackgroundImageAlt={(value) => setAttributes({ globalBackgroundImageAlt: value }) }
					normalBackgroundImageID={globalBackgroundImageID}
					setNormalBackgroundImageID={(value) => setAttributes({ globalBackgroundImageID: value }) }
					normalBackgroundImagePosition={ globalBackgroundImagePosition }
					setNormalBackgroundImagePosition={(value) => setAttributes({ globalBackgroundImagePosition: value, }) }
					normalBackgroundImageAttachment={ globalBackgroundImageAttachment }
					setNormalBackgroundImageAttachment={(value) => setAttributes({ globalBackgroundImageAttachment: value, }) }
					normalBackgroundImageRepeat={ globalBackgroundImageRepeat }
					setNormalBackgroundImageRepeat={(value) => setAttributes({ globalBackgroundImageRepeat: value, }) }
					normalBackgroundImageSize={globalBackgroundImageSize}
					setNormalBackgroundImageSize={(value) => setAttributes({ globalBackgroundImageSize: value }) }
					hoverBackgroundType={hoverBackgroundType}
					setHoverBackgroundType={(value) => setAttributes({ hoverBackgroundType: value }) }
					hoverClassicColor={hoverClassicColor}
					setHoverClassicColor={(value) => setAttributes({ hoverClassicColor: value === undefined ? '' : value }) }
					hoverGradientColor={hoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ hoverGradientColor: value === undefined ? null : value }) }
					hoverCustomGradientSwitcher={ hoverCustomGradientSwitcher }
					setHoverCustomGradientSwitcher={(value) => setAttributes({ hoverCustomGradientSwitcher: value, }) }
					hoverCustomGradientInputValue={ hoverCustomGradientInputValue }
					setHoverCustomGradientInputValue={(value) => setAttributes({ hoverCustomGradientInputValue: value, }) }
					hoverBackgroundImageUrl={hoverBackgroundImageUrl}
					setHoverBackgroundImageUrl={(value) => setAttributes({ hoverBackgroundImageUrl: value }) }
					hoverBackgroundImageAlt={hoverBackgroundImageAlt}
					setHoverBackgroundImageAlt={(value) => setAttributes({ hoverBackgroundImageAlt: value }) }
					hoverBackgroundImageID={hoverBackgroundImageID}
					setHoverBackgroundImageID={(value) => setAttributes({ hoverBackgroundImageID: value }) }
					hoverBackgroundImagePosition={ hoverBackgroundImagePosition }
					setHoverBackgroundImagePosition={(value) => setAttributes({ hoverBackgroundImagePosition: value, }) }
					hoverBackgroundImageAttachment={ hoverBackgroundImageAttachment }
					setHoverBackgroundImageAttachment={(value) => setAttributes({ hoverBackgroundImageAttachment: value, }) }
					hoverBackgroundImageRepeat={ hoverBackgroundImageRepeat }
					setHoverBackgroundImageRepeat={(value) => setAttributes({ hoverBackgroundImageRepeat: value, }) }
					hoverBackgroundImageSize={hoverBackgroundImageSize}
					setHoverBackgroundImageSize={(value) => setAttributes({ hoverBackgroundImageSize: value }) }
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
					label={ 'Border Width' }
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
					label={ 'Border Radius' }
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
				label={ 'Padding' }
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
				label={ 'Margin' }
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

			<style>
				{editorStyle}
			</style>

			<FB_InspectorControls
				generalControls={generalControls}
				styleControls={styleControls}
				advancedControls={advancedControls}
			/>
		</>
	);
}