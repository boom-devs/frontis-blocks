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
import FB_AlignmentControl from '../../components/alignment-control';
import FB_PositionControl from '../../components/position-control/index.js';


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
	const countDownItemWrapperBorderTypeGetDesktop = `${countDownItemWrapperBorderTypeDesktop.top}${countDownItemWrapperBorderTypeUnits.Desktop} ${countDownItemWrapperBorderTypeDesktop.right}${countDownItemWrapperBorderTypeUnits.Desktop} ${countDownItemWrapperBorderTypeDesktop.bottom}${countDownItemWrapperBorderTypeUnits.Desktop} ${countDownItemWrapperBorderTypeDesktop.left}${countDownItemWrapperBorderTypeUnits.Desktop}`;
	const countDownItemWrapperBorderTypeGetTablet = `${countDownItemWrapperBorderTypeTablet.top}${countDownItemWrapperBorderTypeUnits.Tablet} ${countDownItemWrapperBorderTypeTablet.right}${countDownItemWrapperBorderTypeUnits.Tablet} ${countDownItemWrapperBorderTypeTablet.bottom}${countDownItemWrapperBorderTypeUnits.Tablet} ${countDownItemWrapperBorderTypeTablet.left}${countDownItemWrapperBorderTypeUnits.Tablet}`;
	const countDownItemWrapperBorderTypeGetMobile = `${countDownItemWrapperBorderTypeMobile.top}${countDownItemWrapperBorderTypeUnits.Mobile} ${countDownItemWrapperBorderTypeMobile.right}${countDownItemWrapperBorderTypeUnits.Mobile} ${countDownItemWrapperBorderTypeMobile.bottom}${countDownItemWrapperBorderTypeUnits.Mobile} ${countDownItemWrapperBorderTypeMobile.left}${countDownItemWrapperBorderTypeUnits.Mobile}`;


	const countDownItemWrapperBorderRadiusGetDesktop = `${countDownItemWrapperBorderRadiusDesktop.top}${countDownItemWrapperBorderRadiusUnits.Desktop} ${countDownItemWrapperBorderRadiusDesktop.right}${countDownItemWrapperBorderRadiusUnits.Desktop} ${countDownItemWrapperBorderRadiusDesktop.bottom}${countDownItemWrapperBorderRadiusUnits.Desktop} ${countDownItemWrapperBorderRadiusDesktop.left}${countDownItemWrapperBorderRadiusUnits.Desktop}`;
	const countDownItemWrapperBorderRadiusGetTablet = `${countDownItemWrapperBorderRadiusTablet.top}${countDownItemWrapperBorderRadiusUnits.Tablet} ${countDownItemWrapperBorderRadiusTablet.right}${countDownItemWrapperBorderRadiusUnits.Tablet} ${countDownItemWrapperBorderRadiusTablet.bottom}${countDownItemWrapperBorderRadiusUnits.Tablet} ${countDownItemWrapperBorderRadiusTablet.left}${countDownItemWrapperBorderRadiusUnits.Tablet}`;
	const countDownItemWrapperBorderRadiusGetMobile = `${countDownItemWrapperBorderRadiusMobile.top}${countDownItemWrapperBorderRadiusUnits.Mobile} ${countDownItemWrapperBorderRadiusMobile.right}${countDownItemWrapperBorderRadiusUnits.Mobile} ${countDownItemWrapperBorderRadiusMobile.bottom}${countDownItemWrapperBorderRadiusUnits.Mobile} ${countDownItemWrapperBorderRadiusMobile.left}${countDownItemWrapperBorderRadiusUnits.Mobile}`;

	const countDownItemWrapperPaddingGetDesktop = `${countDownItemWrapperPaddingDesktop.top}${countDownItemWrapperPaddingUnits.Desktop} ${countDownItemWrapperPaddingDesktop.right}${countDownItemWrapperPaddingUnits.Desktop} ${countDownItemWrapperPaddingDesktop.bottom}${countDownItemWrapperPaddingUnits.Desktop} ${countDownItemWrapperPaddingDesktop.left}${countDownItemWrapperPaddingUnits.Desktop}`;
	const countDownItemWrapperPaddingGetTablet = `${countDownItemWrapperPaddingTablet.top}${countDownItemWrapperPaddingUnits.Tablet} ${countDownItemWrapperPaddingTablet.right}${countDownItemWrapperPaddingUnits.Tablet} ${countDownItemWrapperPaddingTablet.bottom}${countDownItemWrapperPaddingUnits.Tablet} ${countDownItemWrapperPaddingTablet.left}${countDownItemWrapperPaddingUnits.Tablet}`;
	const countDownItemWrapperPaddingGetMobile = `${countDownItemWrapperPaddingMobile.top}${countDownItemWrapperPaddingUnits.Mobile} ${countDownItemWrapperPaddingMobile.right}${countDownItemWrapperPaddingUnits.Mobile} ${countDownItemWrapperPaddingMobile.bottom}${countDownItemWrapperPaddingUnits.Mobile} ${countDownItemWrapperPaddingMobile.left}${countDownItemWrapperPaddingUnits.Mobile}`;

	const countDownItemWrapperMarginGetDesktop = `${countDownItemWrapperMarginDesktop.top}${countDownItemWrapperMarginUnits.Desktop} ${countDownItemWrapperMarginDesktop.right}${countDownItemWrapperMarginUnits.Desktop} ${countDownItemWrapperMarginDesktop.bottom}${countDownItemWrapperMarginUnits.Desktop} ${countDownItemWrapperMarginDesktop.left}${countDownItemWrapperMarginUnits.Desktop}`;
	const countDownItemWrapperMarginGetTablet = `${countDownItemWrapperMarginTablet.top}${countDownItemWrapperMarginUnits.Tablet} ${countDownItemWrapperMarginTablet.right}${countDownItemWrapperMarginUnits.Tablet} ${countDownItemWrapperMarginTablet.bottom}${countDownItemWrapperMarginUnits.Tablet} ${countDownItemWrapperMarginTablet.left}${countDownItemWrapperMarginUnits.Tablet}`;
	const countDownItemWrapperMarginGetMobile = `${countDownItemWrapperMarginMobile.top}${countDownItemWrapperMarginUnits.Mobile} ${countDownItemWrapperMarginMobile.right}${countDownItemWrapperMarginUnits.Mobile} ${countDownItemWrapperMarginMobile.bottom}${countDownItemWrapperMarginUnits.Mobile} ${countDownItemWrapperMarginMobile.left}${countDownItemWrapperMarginUnits.Mobile}`;


	{/* Countdown Item Control */}
	const countDownItemBorderTypeGetDesktop = `${countDownItemBorderTypeDesktop.top}${countDownItemBorderTypeUnits.Desktop} ${countDownItemBorderTypeDesktop.right}${countDownItemBorderTypeUnits.Desktop} ${countDownItemBorderTypeDesktop.bottom}${countDownItemBorderTypeUnits.Desktop} ${countDownItemBorderTypeDesktop.left}${countDownItemBorderTypeUnits.Desktop}`;
	const countDownItemBorderTypeGetTablet = `${countDownItemBorderTypeTablet.top}${countDownItemBorderTypeUnits.Tablet} ${countDownItemBorderTypeTablet.right}${countDownItemBorderTypeUnits.Tablet} ${countDownItemBorderTypeTablet.bottom}${countDownItemBorderTypeUnits.Tablet} ${countDownItemBorderTypeTablet.left}${countDownItemBorderTypeUnits.Tablet}`;
	const countDownItemBorderTypeGetMobile = `${countDownItemBorderTypeMobile.top}${countDownItemBorderTypeUnits.Mobile} ${countDownItemBorderTypeMobile.right}${countDownItemBorderTypeUnits.Mobile} ${countDownItemBorderTypeMobile.bottom}${countDownItemBorderTypeUnits.Mobile} ${countDownItemBorderTypeMobile.left}${countDownItemBorderTypeUnits.Mobile}`;


	const countDownItemBorderRadiusGetDesktop = `${countDownItemBorderRadiusDesktop.top}${countDownItemBorderRadiusUnits.Desktop} ${countDownItemBorderRadiusDesktop.right}${countDownItemBorderRadiusUnits.Desktop} ${countDownItemBorderRadiusDesktop.bottom}${countDownItemBorderRadiusUnits.Desktop} ${countDownItemBorderRadiusDesktop.left}${countDownItemBorderRadiusUnits.Desktop}`;
	const countDownItemBorderRadiusGetTablet = `${countDownItemBorderRadiusTablet.top}${countDownItemBorderRadiusUnits.Tablet} ${countDownItemBorderRadiusTablet.right}${countDownItemBorderRadiusUnits.Tablet} ${countDownItemBorderRadiusTablet.bottom}${countDownItemBorderRadiusUnits.Tablet} ${countDownItemBorderRadiusTablet.left}${countDownItemBorderRadiusUnits.Tablet}`;
	const countDownItemBorderRadiusGetMobile = `${countDownItemBorderRadiusMobile.top}${countDownItemBorderRadiusUnits.Mobile} ${countDownItemBorderRadiusMobile.right}${countDownItemBorderRadiusUnits.Mobile} ${countDownItemBorderRadiusMobile.bottom}${countDownItemBorderRadiusUnits.Mobile} ${countDownItemBorderRadiusMobile.left}${countDownItemBorderRadiusUnits.Mobile}`;



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
	const countDownLabelBorderTypeGetDesktop = `${countDownLabelBorderTypeDesktop.top}${countDownLabelBorderTypeUnits.Desktop} ${countDownLabelBorderTypeDesktop.right}${countDownLabelBorderTypeUnits.Desktop} ${countDownLabelBorderTypeDesktop.bottom}${countDownLabelBorderTypeUnits.Desktop} ${countDownLabelBorderTypeDesktop.left}${countDownLabelBorderTypeUnits.Desktop}`;
	const countDownLabelBorderTypeGetTablet = `${countDownLabelBorderTypeTablet.top}${countDownLabelBorderTypeUnits.Tablet} ${countDownLabelBorderTypeTablet.right}${countDownLabelBorderTypeUnits.Tablet} ${countDownLabelBorderTypeTablet.bottom}${countDownLabelBorderTypeUnits.Tablet} ${countDownLabelBorderTypeTablet.left}${countDownLabelBorderTypeUnits.Tablet}`;
	const countDownLabelBorderTypeGetMobile = `${countDownLabelBorderTypeMobile.top}${countDownLabelBorderTypeUnits.Mobile} ${countDownLabelBorderTypeMobile.right}${countDownLabelBorderTypeUnits.Mobile} ${countDownLabelBorderTypeMobile.bottom}${countDownLabelBorderTypeUnits.Mobile} ${countDownLabelBorderTypeMobile.left}${countDownLabelBorderTypeUnits.Mobile}`;

	const countDownLabelBorderRadiusGetDesktop = `${countDownLabelBorderRadiusDesktop.top}${countDownLabelBorderRadiusUnits.Desktop} ${countDownLabelBorderRadiusDesktop.right}${countDownLabelBorderRadiusUnits.Desktop} ${countDownLabelBorderRadiusDesktop.bottom}${countDownLabelBorderRadiusUnits.Desktop} ${countDownLabelBorderRadiusDesktop.left}${countDownLabelBorderRadiusUnits.Desktop}`;
	const countDownLabelBorderRadiusGetTablet = `${countDownLabelBorderRadiusTablet.top}${countDownLabelBorderRadiusUnits.Tablet} ${countDownLabelBorderRadiusTablet.right}${countDownLabelBorderRadiusUnits.Tablet} ${countDownLabelBorderRadiusTablet.bottom}${countDownLabelBorderRadiusUnits.Tablet} ${countDownLabelBorderRadiusTablet.left}${countDownLabelBorderRadiusUnits.Tablet}`;
	const countDownLabelBorderRadiusGetMobile = `${countDownLabelBorderRadiusMobile.top}${countDownLabelBorderRadiusUnits.Mobile} ${countDownLabelBorderRadiusMobile.right}${countDownLabelBorderRadiusUnits.Mobile} ${countDownLabelBorderRadiusMobile.bottom}${countDownLabelBorderRadiusUnits.Mobile} ${countDownLabelBorderRadiusMobile.left}${countDownLabelBorderRadiusUnits.Mobile}`;

	const countDownLabelMarginGetDesktop = `${countDownLabelMarginDesktop.top}${countDownLabelMarginUnits.Desktop} ${countDownLabelMarginDesktop.right}${countDownLabelMarginUnits.Desktop} ${countDownLabelMarginDesktop.bottom}${countDownLabelMarginUnits.Desktop} ${countDownLabelMarginDesktop.left}${countDownLabelMarginUnits.Desktop}`;
	const countDownLabelMarginGetTablet = `${countDownLabelMarginTablet.top}${countDownLabelMarginUnits.Tablet} ${countDownLabelMarginTablet.right}${countDownLabelMarginUnits.Tablet} ${countDownLabelMarginTablet.bottom}${countDownLabelMarginUnits.Tablet} ${countDownLabelMarginTablet.left}${countDownLabelMarginUnits.Tablet}`;
	const countDownLabelMarginGetMobile = `${countDownLabelMarginMobile.top}${countDownLabelMarginUnits.Mobile} ${countDownLabelMarginMobile.right}${countDownLabelMarginUnits.Mobile} ${countDownLabelMarginMobile.bottom}${countDownLabelMarginUnits.Mobile} ${countDownLabelMarginMobile.left}${countDownLabelMarginUnits.Mobile}`;



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
	const countDownDigitBorderTypeGetDesktop = `${countDownDigitBorderTypeDesktop.top}${countDownDigitBorderTypeUnits.Desktop} ${countDownDigitBorderTypeDesktop.right}${countDownDigitBorderTypeUnits.Desktop} ${countDownDigitBorderTypeDesktop.bottom}${countDownDigitBorderTypeUnits.Desktop} ${countDownDigitBorderTypeDesktop.left}${countDownDigitBorderTypeUnits.Desktop}`;
	const countDownDigitBorderTypeGetTablet = `${countDownDigitBorderTypeTablet.top}${countDownDigitBorderTypeUnits.Tablet} ${countDownDigitBorderTypeTablet.right}${countDownDigitBorderTypeUnits.Tablet} ${countDownDigitBorderTypeTablet.bottom}${countDownDigitBorderTypeUnits.Tablet} ${countDownDigitBorderTypeTablet.left}${countDownDigitBorderTypeUnits.Tablet}`;
	const countDownDigitBorderTypeGetMobile = `${countDownDigitBorderTypeMobile.top}${countDownDigitBorderTypeUnits.Mobile} ${countDownDigitBorderTypeMobile.right}${countDownDigitBorderTypeUnits.Mobile} ${countDownDigitBorderTypeMobile.bottom}${countDownDigitBorderTypeUnits.Mobile} ${countDownDigitBorderTypeMobile.left}${countDownDigitBorderTypeUnits.Mobile}`;

	const countDownDigitBorderRadiusGetDesktop = `${countDownDigitBorderRadiusDesktop.top}${countDownDigitBorderRadiusUnits.Desktop} ${countDownDigitBorderRadiusDesktop.right}${countDownDigitBorderRadiusUnits.Desktop} ${countDownDigitBorderRadiusDesktop.bottom}${countDownDigitBorderRadiusUnits.Desktop} ${countDownDigitBorderRadiusDesktop.left}${countDownDigitBorderRadiusUnits.Desktop}`;
	const countDownDigitBorderRadiusGetTablet = `${countDownDigitBorderRadiusTablet.top}${countDownDigitBorderRadiusUnits.Tablet} ${countDownDigitBorderRadiusTablet.right}${countDownDigitBorderRadiusUnits.Tablet} ${countDownDigitBorderRadiusTablet.bottom}${countDownDigitBorderRadiusUnits.Tablet} ${countDownDigitBorderRadiusTablet.left}${countDownDigitBorderRadiusUnits.Tablet}`;
	const countDownDigitBorderRadiusGetMobile = `${countDownDigitBorderRadiusMobile.top}${countDownDigitBorderRadiusUnits.Mobile} ${countDownDigitBorderRadiusMobile.right}${countDownDigitBorderRadiusUnits.Mobile} ${countDownDigitBorderRadiusMobile.bottom}${countDownDigitBorderRadiusUnits.Mobile} ${countDownDigitBorderRadiusMobile.left}${countDownDigitBorderRadiusUnits.Mobile}`;

	const countDownDigitMarginGetDesktop = `${countDownDigitMarginDesktop.top}${countDownDigitMarginUnits.Desktop} ${countDownDigitMarginDesktop.right}${countDownDigitMarginUnits.Desktop} ${countDownDigitMarginDesktop.bottom}${countDownDigitMarginUnits.Desktop} ${countDownDigitMarginDesktop.left}${countDownDigitMarginUnits.Desktop}`;
	const countDownDigitMarginGetTablet = `${countDownDigitMarginTablet.top}${countDownDigitMarginUnits.Tablet} ${countDownDigitMarginTablet.right}${countDownDigitMarginUnits.Tablet} ${countDownDigitMarginTablet.bottom}${countDownDigitMarginUnits.Tablet} ${countDownDigitMarginTablet.left}${countDownDigitMarginUnits.Tablet}`;
	const countDownDigitMarginGetMobile = `${countDownDigitMarginMobile.top}${countDownDigitMarginUnits.Mobile} ${countDownDigitMarginMobile.right}${countDownDigitMarginUnits.Mobile} ${countDownDigitMarginMobile.bottom}${countDownDigitMarginUnits.Mobile} ${countDownDigitMarginMobile.left}${countDownDigitMarginUnits.Mobile}`;



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

	const countDownStyle = useMemo(
		() => `
			.fb-count-down-main-wrapper.${blockID} {
				${countDownPositionType === 'default' ? `position: relative;` : ''}
				${countDownPositionType !== 'default' && countDownPositionType !== 'relative' ? `width: 100%;` : ''}
				${countDownPositionType !== 'default' ? `position: ${countDownPositionType};` : ''}
				${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownHZOrientationType === 'left' && countDownHZLeftOffset.Desktop !== undefined ? `left: ${countDownHZLeftOffset.Desktop}${countDownHZLeftOffsetUnits.Desktop};` : ''}
				${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownHZOrientationType === 'right' && countDownHZRightOffset.Desktop !== undefined ? `right: ${countDownHZRightOffset.Desktop}${countDownHZRightOffsetUnits.Desktop};` : ''}
				${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownVROrientationType === 'top' && countDownVRTopOffset.Desktop !== undefined ? `top: ${countDownVRTopOffset.Desktop}${countDownVRTopOffsetUnits.Desktop};` : ''}
				${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownVROrientationType === 'bottom' && countDownVRBottomOffset.Desktop !== undefined ? `bottom: ${countDownVRBottomOffset.Desktop}${countDownVRBottomOffsetUnits.Desktop};` : ''}
        		${countDownZIndex.Desktop ? `z-index: ${countDownZIndex.Desktop};` : ''}
				${countDownOverflow !== 'default' ? `overflow: ${countDownOverflow};` : ''}
			}
			.fb-count-down-wrapper.${blockID} {
				${countDownLayoutType === 'flex' ? `display: flex;` : ''}
				${countDownLayoutType === 'flex' && countDownFlexWrap === true ? `flex-wrap: wrap;` : ''}
				${countDownLayoutType === 'grid' ? `display: grid;` : ''}
				${countDownLayoutType === 'grid' ? `grid-template-columns: repeat(${countDownGrid.Desktop}, 1fr);` : ''}
				${countDownItemGap.Desktop ? `gap: ${countDownItemGap.Desktop}${countDownItemGapUnits.Desktop};` : ''}
				${countDownLayoutAlignment ? `justify-content: ${countDownLayoutAlignment};` : ''}
				${countDownItemWrapperBorder ? `border: ${countDownItemWrapperBorder};` : ''}
				${countDownItemWrapperBorderTypeGetDesktop ? `border-width: ${countDownItemWrapperBorderTypeGetDesktop};` : ''}
				${countDownItemWrapperBorderRadiusGetDesktop ? `border-radius: ${countDownItemWrapperBorderRadiusGetDesktop};` : ''}
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
						: `background: ${globalClassicColor};`)
				}
				${countDownItemWrapperPaddingGetDesktop ? `padding: ${countDownItemWrapperPaddingGetDesktop};` : ''}
				${countDownItemWrapperMarginGetDesktop ? `margin: ${countDownItemWrapperMarginGetDesktop};` : ''}
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
						: `background: ${hoverClassicColor};`)
				}
				transition: all .3s ease-in-out;
			}
			.fb-count-down-wrapper.${blockID} .fb-count-down-item {
				${countDownItemBgColor ? `background: ${countDownItemBgColor};` : ''}
				${countDownItemSize.Desktop ? `width: ${countDownItemSize.Desktop}${countDownItemSizeUnits.Desktop};` : ''}
				${countDownItemSizeHeight === true && countDownItemSize.Desktop ? `height: ${countDownItemSize.Desktop}${countDownItemSizeUnits.Desktop};` : ''}
				${countDownItemBorder ? `border-style: ${countDownItemBorder};` : ''}
				${countDownItemBorderTypeGetDesktop ? `border-width: ${countDownItemBorderTypeGetDesktop};` : ''}
				${countDownItemBorderColor ? `border-color: ${countDownItemBorderColor};` : ''}
				${countDownItemBorderRadiusGetDesktop ? `border-radius: ${countDownItemBorderRadiusGetDesktop};` : ''}
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
					${countDownSeparatorVerticalGap.Desktop ? `top: ${countDownSeparatorVerticalGap.Desktop}${countDownSeparatorVerticalGapUnits.Desktop};` : ''}
					${countDownSeparatorHorizontalGap.Desktop ? `right: -${countDownSeparatorHorizontalGap.Desktop}${countDownSeparatorHorizontalGapUnits.Desktop};` : ''}
					${countDownSeparatorFontColor ? `color: ${countDownSeparatorFontColor};` : ''}
					${countDownSeparatorFontFamily ? `font-family: ${countDownSeparatorFontFamily};` : ''}
					${countDownSeparatorFontSize.Desktop ? `font-size: ${countDownSeparatorFontSize.Desktop}${countDownSeparatorFontSizeUnits.Desktop};` : ''}
					${countDownSeparatorFontWeight ? `font-weight: ${countDownSeparatorFontWeight};` : ''}
					${countDownSeparatorFontStyle ? `font-style: ${countDownSeparatorFontStyle};` : ''}
					${countDownSeparatorTextTransform ? `text-transform: ${countDownSeparatorTextTransform};` : ''}
					${countDownSeparatorTextDecoration ? `text-decoration: ${countDownSeparatorTextDecoration};` : ''}
					${countDownSeparatorLetterSpacing.Desktop ? `letter-spacing: ${countDownSeparatorLetterSpacing.Desktop}${countDownSeparatorLetterSpacingUnits.Desktop};` : ''}
					${countDownSeparatorLineHeight.Desktop ? `line-height: ${countDownSeparatorLineHeight.Desktop}${countDownSeparatorLineHeightUnits.Desktop};` : ''}
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
				${digitFontFamily ? `font-family: ${digitFontFamily};` : ""}
				${digitFontSize.Desktop ? `font-size: ${digitFontSize.Desktop}${digitFontSizeUnits.Desktop};` : ""}
				${digitFontWeight ? `font-weight: ${digitFontWeight};` : ""}
				${digitFontStyle ? `font-style: ${digitFontStyle};` : ""}
				${digitTextTransform ? `text-transform: ${digitTextTransform};` : ""}
				${digitTextDecoration ? `text-decoration: ${digitTextDecoration};` : ""}
				${digitLetterSpacing.Desktop ? `letter-spacing: ${digitLetterSpacing.Desktop}${digitLetterSpacingUnits.Desktop};` : ""}
				${digitLineHeight.Desktop ? `line-height: ${digitLineHeight.Desktop}${digitLineHeightUnits.Desktop};` : ""}
				${countDownDigitBorder ? `border-style: ${countDownDigitBorder};` : ''}
				${countDownDigitMarginGetDesktop ? `margin: ${countDownDigitMarginGetDesktop};` : ''}
				${countDownDigitBorderTypeGetDesktop ? `border-width: ${countDownDigitBorderTypeGetDesktop};` : ''}
				${countDownDigitBorderColor ? `border-color: ${countDownDigitBorderColor};` : ''}
				${countDownDigitBorderRadiusGetDesktop ? `border-radius: ${countDownDigitBorderRadiusGetDesktop};` : ''}
				${countDownDigitWidth.Desktop ? `width: ${countDownDigitWidth.Desktop}${countDownDigitWidthUnits.Desktop};` : ''}
				${countDownDigitHeight.Desktop ? `height: ${countDownDigitHeight.Desktop}${countDownDigitHeightUnits.Desktop};` : ''}
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
				${labelFontFamily ? `font-family: ${labelFontFamily};` : ""}
				${labelFontSize.Desktop ? `font-size: ${labelFontSize.Desktop}${labelFontSizeUnits.Desktop};` : ""}
				${labelFontWeight ? `font-weight: ${labelFontWeight};` : ""}
				${labelFontStyle ? `font-style: ${labelFontStyle};` : ""}
				${labelTextTransform ? `text-transform: ${labelTextTransform};` : ""}
				${labelTextDecoration ? `text-decoration: ${labelTextDecoration};` : ""}
				${labelLetterSpacing.Desktop ? `letter-spacing: ${labelLetterSpacing.Desktop}${labelLetterSpacingUnits.Desktop};` : ""}
				${labelLineHeight.Desktop ? `line-height: ${labelLineHeight.Desktop}${labelLineHeightUnits.Desktop};` : ""}
				${countDownLabelBorder ? `border-style: ${countDownLabelBorder};` : ''}
				${countDownLabelBorderTypeGetDesktop ? `border-width: ${countDownLabelBorderTypeGetDesktop};` : ''}
				${countDownLabelBorderColor ? `border-color: ${countDownLabelBorderColor};` : ''}
				${countDownLabelBorderRadiusGetDesktop ? `border-radius: ${countDownLabelBorderRadiusGetDesktop};` : ''}
				${countDownLabelMarginGetDesktop ? `margin: ${countDownLabelMarginGetDesktop};` : ''}
				${countDownLabelWidth.Desktop ? `width: ${countDownLabelWidth.Desktop}${countDownLabelWidthUnits.Desktop};` : ''}
				${countDownLabelHeight.Desktop ? `height: ${countDownLabelHeight.Desktop}${countDownLabelHeightUnits.Desktop};` : ''}
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
					${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownHZOrientationType === 'left' && countDownHZLeftOffset.Tablet !== undefined ? `left: ${countDownHZLeftOffset.Tablet}${countDownHZLeftOffsetUnits.Tablet};` : ''}
					${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownHZOrientationType === 'right' && countDownHZRightOffset.Tablet !== undefined ? `right: ${countDownHZRightOffset.Tablet}${countDownHZRightOffsetUnits.Tablet};` : ''}
					${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownVROrientationType === 'top' && countDownVRTopOffset.Tablet !== undefined ? `top: ${countDownVRTopOffset.Tablet}${countDownVRTopOffsetUnits.Tablet};` : ''}
					${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownVROrientationType === 'bottom' && countDownVRBottomOffset.Tablet !== undefined ? `bottom: ${countDownVRBottomOffset.Tablet}${countDownVRBottomOffsetUnits.Tablet};` : ''}
					${countDownZIndex.Tablet ? `z-index: ${countDownZIndex.Tablet};` : ''}
				}
				.fb-count-down-wrapper.${blockID} {
					${countDownLayoutType === 'grid' ? `grid-template-columns: repeat(${countDownGrid.Tablet}, 1fr);` : ''}
					${countDownItemGap.Tablet ? `gap: ${countDownItemGap.Tablet}${countDownItemGapUnits.Tablet};` : ""}
					${countDownItemWrapperBorderTypeGetTablet ? `border-width: ${countDownItemWrapperBorderTypeGetTablet};` : ""}
					${countDownItemWrapperBorderRadiusGetTablet ? `border-radius: ${countDownItemWrapperBorderRadiusGetTablet};` : ""}
					${countDownItemWrapperPaddingGetTablet ? `padding: ${countDownItemWrapperPaddingGetTablet};` : ""}
					${countDownItemWrapperMarginGetTablet ? `margin: ${countDownItemWrapperMarginGetTablet};` : ""}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item {
					${countDownItemSize.Tablet ? `width: ${countDownItemSize.Tablet}${countDownItemSizeUnits.Tablet};` : ""}
					${countDownItemSizeHeight === true && countDownItemSize.Tablet ? `height: ${countDownItemSize.Tablet}${countDownItemSizeUnits.Tablet};` : ""}
					${countDownItemBorderTypeGetTablet ? `border-width: ${countDownItemBorderTypeGetTablet};` : ""}
					${countDownItemBorderRadiusGetTablet ? `border-radius: ${countDownItemBorderRadiusGetTablet};` : ""}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item:before {
					${
						countDownSeparatorEnabled && countDownSeparatorType && countDownSeparatorType !== "null"
							? `
								${countDownSeparatorVerticalGap.Tablet ? `top: ${countDownSeparatorVerticalGap.Tablet}${countDownSeparatorVerticalGapUnits.Tablet};` : ""}
								${countDownSeparatorHorizontalGap.Tablet ? `right: -${countDownSeparatorHorizontalGap.Tablet}${countDownSeparatorHorizontalGapUnits.Tablet};` : ""}
								${countDownSeparatorFontSize.Tablet ? `font-size: ${countDownSeparatorFontSize.Tablet}${countDownSeparatorFontSizeUnits.Tablet};` : ""}
								${countDownSeparatorLetterSpacing.Tablet ? `letter-spacing: ${countDownSeparatorLetterSpacing.Tablet}${countDownSeparatorLetterSpacingUnits.Tablet};` : ""}
								${countDownSeparatorLineHeight.Tablet ? `line-height: ${countDownSeparatorLineHeight.Tablet}${countDownSeparatorLineHeightUnits.Tablet};` : ""}
							`
							: ""
					}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time {
					${digitFontSize.Tablet ? `font-size: ${digitFontSize.Tablet}${digitFontSizeUnits.Tablet};` : ""}
					${digitLetterSpacing.Tablet ? `letter-spacing: ${digitLetterSpacing.Tablet}${digitLetterSpacingUnits.Tablet};` : ""}
					${digitLineHeight.Tablet ? `line-height: ${digitLineHeight.Tablet}${digitLineHeightUnits.Tablet};` : ""}
					${countDownDigitMarginGetTablet ? `margin: ${countDownDigitMarginGetTablet};` : ''}
					${countDownDigitBorderTypeGetTablet ? `border-width: ${countDownDigitBorderTypeGetTablet};` : ''}
					${countDownDigitBorderRadiusGetTablet ? `border-radius: ${countDownDigitBorderRadiusGetTablet};` : ''}
					${countDownDigitWidth.Tablet ? `width: ${countDownDigitWidth.Tablet}${countDownDigitWidthUnits.Tablet};` : ''}
					${countDownDigitHeight.Tablet ? `height: ${countDownDigitHeight.Tablet}${countDownDigitHeightUnits.Tablet};` : ''}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
					${labelFontSize.Tablet ? `font-size: ${labelFontSize.Tablet}${labelFontSizeUnits.Tablet};` : ""}
					${labelLetterSpacing.Tablet ? `letter-spacing: ${labelLetterSpacing.Tablet}${labelLetterSpacingUnits.Tablet};` : ""}
					${labelLineHeight.Tablet ? `line-height: ${labelLineHeight.Tablet}${labelLineHeightUnits.Tablet};` : ""}
					${countDownLabelBorderTypeGetTablet ? `border-width: ${countDownLabelBorderTypeGetTablet};` : ''}
					${countDownLabelBorderRadiusGetTablet ? `border-radius: ${countDownLabelBorderRadiusGetTablet};` : ''}
					${countDownLabelMarginGetTablet ? `margin: ${countDownLabelMarginGetTablet};` : ''}
					${countDownLabelWidth.Tablet ? `width: ${countDownLabelWidth.Tablet}${countDownLabelWidthUnits.Tablet};` : ''}
					${countDownLabelHeight.Tablet ? `height: ${countDownLabelHeight.Tablet}${countDownLabelHeightUnits.Tablet};` : ''}
				}
			}

			@media only screen and (max-width: 767px) {
					.fb-count-down-main-wrapper.${blockID} {
						${countDownPositionType !== 'default' ? `position: ${countDownPositionType};` : ''}
						${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownHZOrientationType === 'left' && countDownHZLeftOffset.Mobile !== undefined ? `left: ${countDownHZLeftOffset.Mobile}${countDownHZLeftOffsetUnits.Mobile};` : ''}
						${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownHZOrientationType === 'right' && countDownHZRightOffset.Mobile !== undefined ? `right: ${countDownHZRightOffset.Mobile}${countDownHZRightOffsetUnits.Mobile};` : ''}
						${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownVROrientationType === 'top' && countDownVRTopOffset.Mobile !== undefined ? `top: ${countDownVRTopOffset.Mobile}${countDownVRTopOffsetUnits.Mobile};` : ''}
						${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownVROrientationType === 'bottom' && countDownVRBottomOffset.Mobile !== undefined ? `bottom: ${countDownVRBottomOffset.Mobile}${countDownVRBottomOffsetUnits.Mobile};` : ''}
						${countDownZIndex.Mobile ? `z-index: ${countDownZIndex.Mobile};` : ''}
					}
				.fb-count-down-wrapper.${blockID} {
					${countDownLayoutType === 'grid' ? `grid-template-columns: repeat(${countDownGrid.Mobile}, 1fr);` : ''}
					${countDownItemGap.Mobile ? `gap: ${countDownItemGap.Mobile}${countDownItemGapUnits.Mobile};` : ""}
					${countDownItemWrapperBorderTypeGetMobile ? `border-width: ${countDownItemWrapperBorderTypeGetMobile};` : ""}
					${countDownItemWrapperBorderRadiusGetMobile ? `border-radius: ${countDownItemWrapperBorderRadiusGetMobile};` : ""}
					${countDownItemWrapperPaddingGetMobile ? `padding: ${countDownItemWrapperPaddingGetMobile};` : ""}
					${countDownItemWrapperMarginGetMobile ? `margin: ${countDownItemWrapperMarginGetMobile};` : ""}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item {
					${countDownItemSize.Mobile ? `width: ${countDownItemSize.Mobile}${countDownItemSizeUnits.Mobile};` : ""}
					${countDownItemSizeHeight === true && countDownItemSize.Mobile ? `height: ${countDownItemSize.Mobile}${countDownItemSizeUnits.Mobile};` : ""}
					${countDownItemBorderTypeGetMobile ? `border-width: ${countDownItemBorderTypeGetMobile};` : ""}
					${countDownItemBorderRadiusGetMobile ? `border-radius: ${countDownItemBorderRadiusGetMobile};` : ""}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item:before {
					${
						countDownSeparatorEnabled && countDownSeparatorType && countDownSeparatorType !== "null"
							? `
								${countDownSeparatorVerticalGap.Mobile ? `top: ${countDownSeparatorVerticalGap.Mobile}${countDownSeparatorVerticalGapUnits.Mobile};` : ""}
								${countDownSeparatorHorizontalGap.Mobile ? `right: -${countDownSeparatorHorizontalGap.Mobile}${countDownSeparatorHorizontalGapUnits.Mobile};` : ""}
								${countDownSeparatorFontSize.Mobile ? `font-size: ${countDownSeparatorFontSize.Mobile}${countDownSeparatorFontSizeUnits.Mobile};` : ""}
								${countDownSeparatorLetterSpacing.Mobile ? `letter-spacing: ${countDownSeparatorLetterSpacing.Mobile}${countDownSeparatorLetterSpacingUnits.Mobile};` : ""}
								${countDownSeparatorLineHeight.Mobile ? `line-height: ${countDownSeparatorLineHeight.Mobile}${countDownSeparatorLineHeightUnits.Mobile};` : ""}
							`
							: ""
					}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time {
					${digitFontSize.Mobile ? `font-size: ${digitFontSize.Mobile}${digitFontSizeUnits.Mobile};` : ""}
					${digitLetterSpacing.Mobile ? `letter-spacing: ${digitLetterSpacing.Mobile}${digitLetterSpacingUnits.Mobile};` : ""}
					${digitLineHeight.Mobile ? `line-height: ${digitLineHeight.Mobile}${digitLineHeightUnits.Mobile};` : ""}
					${countDownDigitMarginGetMobile ? `margin: ${countDownDigitMarginGetMobile};` : ''}
					${countDownDigitBorderTypeGetMobile ? `border-width: ${countDownDigitBorderTypeGetMobile};` : ''}
					${countDownDigitBorderRadiusGetMobile ? `border-radius: ${countDownDigitBorderRadiusGetMobile};` : ''}
					${countDownDigitWidth.Mobile ? `width: ${countDownDigitWidth.Mobile}${countDownDigitWidthUnits.Mobile};` : ''}
					${countDownDigitHeight.Mobile ? `height: ${countDownDigitHeight.Mobile}${countDownDigitHeightUnits.Mobile};` : ''}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
					${labelFontSize.Mobile ? `font-size: ${labelFontSize.Mobile}${labelFontSizeUnits.Mobile};` : ""}
					${labelLetterSpacing.Mobile ? `letter-spacing: ${labelLetterSpacing.Mobile}${labelLetterSpacingUnits.Mobile};` : ""}
					${labelLineHeight.Mobile ? `line-height: ${labelLineHeight.Mobile}${labelLineHeightUnits.Mobile};` : ""}
					${countDownLabelBorderTypeGetMobile ? `border-width: ${countDownLabelBorderTypeGetMobile};` : ''}
					${countDownLabelBorderRadiusGetMobile ? `border-radius: ${countDownLabelBorderRadiusGetMobile};` : ''}
					${countDownLabelMarginGetMobile ? `margin: ${countDownLabelMarginGetMobile};` : ''}
					${countDownLabelWidth.Mobile ? `width: ${countDownLabelWidth.Mobile}${countDownLabelWidthUnits.Mobile};` : ''}
					${countDownLabelHeight.Mobile ? `height: ${countDownLabelHeight.Mobile}${countDownLabelHeightUnits.Mobile};` : ''}
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
	
	return (
		<>

			<style>
				{editorStyle}
			</style>

			<InspectorControls key="controls">
				<div className="fb-inspector-control">
					<TabPanel
						className="fb-parent-tab-panel"
						activeClass="active-tab"
						tabs={[
							{
								name: "general",
								title: "General",
								className: "fb-tab general",
							},
							{
								name:
									"styles",
								title: "Style",
								className: "fb-tab styles",
							},
							{
								name: "advanced",
								title: "Advanced",
								className: "fb-tab advance",
							},
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls" + tab.name}>
								{tab.name === 'general' && (
									<>
										<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
											<SelectControl
												label={__("Preset Style", "frontis-blocks")}
												value={countDownPresetStyle}
												options={PRESETS}
												onChange={(selected) => changeCountDownPreset(selected)}
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
													label={__("Item Gap", "frontis-blocks")}
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
								)}

								{tab.name === "styles" && (
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
                                                    setGlobalColor={(value) => setAttributes({ countDownItemBgColor: value })}
                                                />
                                            )}

                                            {countDownItemBgColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={countDownItemBgHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ countDownItemBgHoverColor: value })}
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
													setGlobalColor={(value) => setAttributes({ countDownItemBorderColor: value })}
												/>
											)}
									
											{countDownItemBorderColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={countDownItemBorderHoverColor}
													setGlobalColor={(value) => setAttributes({ countDownItemBorderHoverColor: value })}
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
												fontFamily={digitFontFamily}
												onChangeFontFamily={(value) => setAttributes({ digitFontFamily: value })}

												fontSize={digitFontSize}
												onChangeFontSize={(value) => setAttributes({ digitFontSize: value })}

												fontSizeUnits={digitFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ digitFontSizeUnits: value })}

												fontWeight={digitFontWeight}
												onChangeFontWeight={(value) => setAttributes({ digitFontWeight: value })}

												fontStyle={digitFontStyle}
												onChangeFontStyle={(value) => setAttributes({ digitFontStyle: value })}

												textTransform={digitTextTransform}
												onChangeTextTransform={(value) => setAttributes({ digitTextTransform: value })}

												textDecoration={digitTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ digitTextDecoration: value })}

												letterSpacing={digitLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ digitLetterSpacing: value })}

												letterSpacingUnits={digitLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ digitLetterSpacingUnits: value })}

												lineHeight={digitLineHeight}
												onChangeLineHeight={(value) => setAttributes({ digitLineHeight: value })}

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
													setGlobalColor={(value) => setAttributes({ countDownDigitBgColor: value })}
												/>
											)}
																			
											{countDownDigitBgColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={countDownDigitBgHoverColor}
													setGlobalColor={(value) => setAttributes({ countDownDigitBgHoverColor: value })}
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
													setGlobalColor={(value) => setAttributes({ digitFontColor: value })}
												/>
											)}

											{digitFontColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={digitFontHoverColor}
													setGlobalColor={(value) => setAttributes({ digitFontHoverColor: value })}
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
															setGlobalColor={(value) => setAttributes({ daysDigitFontColor: value })}
														/>
													)}

													{daysDigitFontColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={daysDigitFontHoverColor}
															setGlobalColor={(value) => setAttributes({ daysDigitFontHoverColor: value })}
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
															setGlobalColor={(value) => setAttributes({ hoursDigitFontColor: value })}
														/>
													)}

													{hoursDigitFontColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={hoursDigitFontHoverColor}
															setGlobalColor={(value) => setAttributes({ hoursDigitFontHoverColor: value })}
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
															setGlobalColor={(value) => setAttributes({ minutesDigitFontColor: value })}
														/>
													)}

													{minutesDigitFontColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={minutesDigitFontHoverColor}
															setGlobalColor={(value) => setAttributes({ minutesDigitFontHoverColor: value })}
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
															setGlobalColor={(value) => setAttributes({ secondsDigitFontColor: value })}
														/>
													)}

													{secondsDigitFontColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={secondsDigitFontHoverColor}
															setGlobalColor={(value) => setAttributes({ secondsDigitFontHoverColor: value })}
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
													setGlobalColor={(value) => setAttributes({ countDownDigitBorderColor: value })}
												/>
											)}
																			
											{countDownDigitBorderColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={countDownDigitBorderHoverColor}
													setGlobalColor={(value) => setAttributes({ countDownDigitBorderHoverColor: value })}
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
												fontFamily={labelFontFamily}
												onChangeFontFamily={(value) => setAttributes({ labelFontFamily: value })}

												fontSize={labelFontSize}
												onChangeFontSize={(value) => setAttributes({ labelFontSize: value })}

												fontSizeUnits={labelFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ labelFontSizeUnits: value })}

												fontWeight={labelFontWeight}
												onChangeFontWeight={(value) => setAttributes({ labelFontWeight: value })}

												fontStyle={labelFontStyle}
												onChangeFontStyle={(value) => setAttributes({ labelFontStyle: value })}

												textTransform={labelTextTransform}
												onChangeTextTransform={(value) => setAttributes({ labelTextTransform: value })}

												textDecoration={labelTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ labelTextDecoration: value })}

												letterSpacing={labelLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ labelLetterSpacing: value })}

												letterSpacingUnits={labelLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ labelLetterSpacingUnits: value })}

												lineHeight={labelLineHeight}
												onChangeLineHeight={(value) => setAttributes({ labelLineHeight: value })}

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
													setGlobalColor={(value) => setAttributes({ labelFontColor: value })}
												/>
											)}

											{labelFontColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={labelFontHoverColor}
													setGlobalColor={(value) => setAttributes({ labelFontHoverColor: value })}
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
													setGlobalColor={(value) => setAttributes({ labelBgColor: value })}
												/>
											)}

											{labelBgColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={labelBgHoverColor}
													setGlobalColor={(value) => setAttributes({ labelBgHoverColor: value })}
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
																							setGlobalColor={(value) => setAttributes({ countDownLabelBorderColor: value })}
																						/>
																					)}
																			
																					{countDownLabelBorderColorSwitcher === 'hover' && (
																						<FB_ColorControl
																							label={__("Hover Color", "frontis-blocks")}
																							globalColor={countDownLabelBorderHoverColor}
																							setGlobalColor={(value) => setAttributes({ countDownLabelBorderHoverColor: value })}
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
													setGlobalColor={(value) => setAttributes({ countDownSeparatorFontColor: value })}
												/>
											)}

											{countDownSeparatorFontColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={countDownSeparatorFontHoverColor}
													setGlobalColor={(value) => setAttributes({ countDownSeparatorFontHoverColor: value })}
												/>
											)}

											<FB_TypographyControl
												fontFamily={countDownSeparatorFontFamily}
												onChangeFontFamily={(value) => setAttributes({ countDownSeparatorFontFamily: value })}

												fontSize={countDownSeparatorFontSize}
												onChangeFontSize={(value) => setAttributes({ countDownSeparatorFontSize: value })}

												fontSizeUnits={countDownSeparatorFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ countDownSeparatorFontSizeUnits: value })}

												fontWeight={countDownSeparatorFontWeight}
												onChangeFontWeight={(value) => setAttributes({ countDownSeparatorFontWeight: value })}

												fontStyle={countDownSeparatorFontStyle}
												onChangeFontStyle={(value) => setAttributes({ countDownSeparatorFontStyle: value })}

												textTransform={countDownSeparatorTextTransform}
												onChangeTextTransform={(value) => setAttributes({ countDownSeparatorTextTransform: value })}

												textDecoration={countDownSeparatorTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ countDownSeparatorTextDecoration: value })}

												letterSpacing={countDownSeparatorLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ countDownSeparatorLetterSpacing: value })}

												letterSpacingUnits={countDownSeparatorLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ countDownSeparatorLetterSpacingUnits: value })}

												lineHeight={countDownSeparatorLineHeight}
												onChangeLineHeight={(value) => setAttributes({ countDownSeparatorLineHeight: value })}

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
								)}

								{tab.name === "advanced" && (
									<>

										<PanelBody
											title={__("Advanced", "frontis-blocks")}
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
												setNormalClassicColor={(value) => setAttributes({ globalClassicColor: value }) }
												normalGradientColor={globalGradientColor}
												setNormalGradientColor={(value) => setAttributes({ globalGradientColor: value }) }
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
												setHoverClassicColor={(value) => setAttributes({ hoverClassicColor: value }) }
												hoverGradientColor={hoverGradientColor}
												setHoverGradientColor={(value) => setAttributes({ hoverGradientColor: value }) }
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
													setGlobalColor={(value) => setAttributes({ countDownItemWrapperBorderColor: value })}
												/>
											)}
									
											{countDownItemWrapperBorderColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={countDownItemWrapperBorderHoverColor}
													setGlobalColor={(value) => setAttributes({ countDownItemWrapperBorderHoverColor: value })}
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
													<ToggleControl
														label={__("Hide on Desktop", "frontis-blocks")}
														className="fb-setting-responsive-control"
														checked={countDownDesktopSwitcher}
														onChange={(value) => setAttributes({ countDownDesktopSwitcher: value })}
													/>
													<ToggleControl
														label={__("Hide on Tablet", "frontis-blocks")}
														className="fb-setting-responsive-control"
														checked={countDownTabletSwitcher}
														onChange={(value) => setAttributes({ countDownTabletSwitcher: value })}
													/>
													<ToggleControl
														label={__("Hide on Mobile", "frontis-blocks")}
														className="fb-setting-responsive-control"
														checked={countDownMobileSwitcher}
														onChange={(value) => setAttributes({ countDownMobileSwitcher: value })}
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
								)}
							</div>
						)}
					</TabPanel>
				</div>
			</InspectorControls>
		</>
	);
}