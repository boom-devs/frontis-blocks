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

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		// deviceType,
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

		countDownItemBorderTypeTab,
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
		countDownItemBorderRadiusTab,
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
						countDownItemBorderTypeTab: {
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
					setAttributes( {countDownItemBorderTypeTab: {...countDownItemBorderTypeTab, [position]: value}} );
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
						countDownItemBorderRadiusTab: {
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
					setAttributes( {countDownItemBorderRadiusTab: {...countDownItemBorderRadiusTab, [position]: value}} );
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
	const countDownItemWrapperBorderTypeGetDesktop = `${countDownItemWrapperBorderTypeDesktop.top}${countDownItemWrapperBorderTypeUnits[deviceType]} ${countDownItemWrapperBorderTypeDesktop.right}${countDownItemWrapperBorderTypeUnits[deviceType]} ${countDownItemWrapperBorderTypeDesktop.bottom}${countDownItemWrapperBorderTypeUnits[deviceType]} ${countDownItemWrapperBorderTypeDesktop.left}${countDownItemWrapperBorderTypeUnits[deviceType]}`;
	const countDownItemWrapperBorderTypeGetTablet = `${countDownItemWrapperBorderTypeTablet.top}${countDownItemWrapperBorderTypeUnits[deviceType]} ${countDownItemWrapperBorderTypeTablet.right}${countDownItemWrapperBorderTypeUnits[deviceType]} ${countDownItemWrapperBorderTypeTablet.bottom}${countDownItemWrapperBorderTypeUnits[deviceType]} ${countDownItemWrapperBorderTypeTablet.left}${countDownItemWrapperBorderTypeUnits[deviceType]}`;
	const countDownItemWrapperBorderTypeGetMobile = `${countDownItemWrapperBorderTypeMobile.top}${countDownItemWrapperBorderTypeUnits[deviceType]} ${countDownItemWrapperBorderTypeMobile.right}${countDownItemWrapperBorderTypeUnits[deviceType]} ${countDownItemWrapperBorderTypeMobile.bottom}${countDownItemWrapperBorderTypeUnits[deviceType]} ${countDownItemWrapperBorderTypeMobile.left}${countDownItemWrapperBorderTypeUnits[deviceType]}`;


	const countDownItemWrapperBorderRadiusGetDesktop = `${countDownItemWrapperBorderRadiusDesktop.top}${countDownItemWrapperBorderRadiusUnits[deviceType]} ${countDownItemWrapperBorderRadiusDesktop.right}${countDownItemWrapperBorderRadiusUnits[deviceType]} ${countDownItemWrapperBorderRadiusDesktop.bottom}${countDownItemWrapperBorderRadiusUnits[deviceType]} ${countDownItemWrapperBorderRadiusDesktop.left}${countDownItemWrapperBorderRadiusUnits[deviceType]}`;
	const countDownItemWrapperBorderRadiusGetTablet = `${countDownItemWrapperBorderRadiusTablet.top}${countDownItemWrapperBorderRadiusUnits[deviceType]} ${countDownItemWrapperBorderRadiusTablet.right}${countDownItemWrapperBorderRadiusUnits[deviceType]} ${countDownItemWrapperBorderRadiusTablet.bottom}${countDownItemWrapperBorderRadiusUnits[deviceType]} ${countDownItemWrapperBorderRadiusTablet.left}${countDownItemWrapperBorderRadiusUnits[deviceType]}`;
	const countDownItemWrapperBorderRadiusGetMobile = `${countDownItemWrapperBorderRadiusMobile.top}${countDownItemWrapperBorderRadiusUnits[deviceType]} ${countDownItemWrapperBorderRadiusMobile.right}${countDownItemWrapperBorderRadiusUnits[deviceType]} ${countDownItemWrapperBorderRadiusMobile.bottom}${countDownItemWrapperBorderRadiusUnits[deviceType]} ${countDownItemWrapperBorderRadiusMobile.left}${countDownItemWrapperBorderRadiusUnits[deviceType]}`;

	const countDownItemWrapperPaddingGetDesktop = `${countDownItemWrapperPaddingDesktop.top}${countDownItemWrapperPaddingUnits[deviceType]} ${countDownItemWrapperPaddingDesktop.right}${countDownItemWrapperPaddingUnits[deviceType]} ${countDownItemWrapperPaddingDesktop.bottom}${countDownItemWrapperPaddingUnits[deviceType]} ${countDownItemWrapperPaddingDesktop.left}${countDownItemWrapperPaddingUnits[deviceType]}`;
	const countDownItemWrapperPaddingGetTablet = `${countDownItemWrapperPaddingTablet.top}${countDownItemWrapperPaddingUnits[deviceType]} ${countDownItemWrapperPaddingTablet.right}${countDownItemWrapperPaddingUnits[deviceType]} ${countDownItemWrapperPaddingTablet.bottom}${countDownItemWrapperPaddingUnits[deviceType]} ${countDownItemWrapperPaddingTablet.left}${countDownItemWrapperPaddingUnits[deviceType]}`;
	const countDownItemWrapperPaddingGetMobile = `${countDownItemWrapperPaddingMobile.top}${countDownItemWrapperPaddingUnits[deviceType]} ${countDownItemWrapperPaddingMobile.right}${countDownItemWrapperPaddingUnits[deviceType]} ${countDownItemWrapperPaddingMobile.bottom}${countDownItemWrapperPaddingUnits[deviceType]} ${countDownItemWrapperPaddingMobile.left}${countDownItemWrapperPaddingUnits[deviceType]}`;

	const countDownItemWrapperMarginGetDesktop = `${countDownItemWrapperMarginDesktop.top}${countDownItemWrapperMarginUnits[deviceType]} ${countDownItemWrapperMarginDesktop.right}${countDownItemWrapperMarginUnits[deviceType]} ${countDownItemWrapperMarginDesktop.bottom}${countDownItemWrapperMarginUnits[deviceType]} ${countDownItemWrapperMarginDesktop.left}${countDownItemWrapperMarginUnits[deviceType]}`;
	const countDownItemWrapperMarginGetTablet = `${countDownItemWrapperMarginTablet.top}${countDownItemWrapperMarginUnits[deviceType]} ${countDownItemWrapperMarginTablet.right}${countDownItemWrapperMarginUnits[deviceType]} ${countDownItemWrapperMarginTablet.bottom}${countDownItemWrapperMarginUnits[deviceType]} ${countDownItemWrapperMarginTablet.left}${countDownItemWrapperMarginUnits[deviceType]}`;
	const countDownItemWrapperMarginGetMobile = `${countDownItemWrapperMarginMobile.top}${countDownItemWrapperMarginUnits[deviceType]} ${countDownItemWrapperMarginMobile.right}${countDownItemWrapperMarginUnits[deviceType]} ${countDownItemWrapperMarginMobile.bottom}${countDownItemWrapperMarginUnits[deviceType]} ${countDownItemWrapperMarginMobile.left}${countDownItemWrapperMarginUnits[deviceType]}`;


	{/* Countdown Item Control */}
	const countDownItemBorderTypeGetDesktop = `${countDownItemBorderTypeDesktop.top}${countDownItemBorderTypeUnits[deviceType]} ${countDownItemBorderTypeDesktop.right}${countDownItemBorderTypeUnits[deviceType]} ${countDownItemBorderTypeDesktop.bottom}${countDownItemBorderTypeUnits[deviceType]} ${countDownItemBorderTypeDesktop.left}${countDownItemBorderTypeUnits[deviceType]}`;
	const countDownItemBorderTypeGetTablet = `${countDownItemBorderTypeTablet.top}${countDownItemBorderTypeUnits[deviceType]} ${countDownItemBorderTypeTablet.right}${countDownItemBorderTypeUnits[deviceType]} ${countDownItemBorderTypeTablet.bottom}${countDownItemBorderTypeUnits[deviceType]} ${countDownItemBorderTypeTablet.left}${countDownItemBorderTypeUnits[deviceType]}`;
	const countDownItemBorderTypeGetMobile = `${countDownItemBorderTypeMobile.top}${countDownItemBorderTypeUnits[deviceType]} ${countDownItemBorderTypeMobile.right}${countDownItemBorderTypeUnits[deviceType]} ${countDownItemBorderTypeMobile.bottom}${countDownItemBorderTypeUnits[deviceType]} ${countDownItemBorderTypeMobile.left}${countDownItemBorderTypeUnits[deviceType]}`;


	const countDownItemBorderRadiusGetDesktop = `${countDownItemBorderRadiusDesktop.top}${countDownItemBorderRadiusUnits[deviceType]} ${countDownItemBorderRadiusDesktop.right}${countDownItemBorderRadiusUnits[deviceType]} ${countDownItemBorderRadiusDesktop.bottom}${countDownItemBorderRadiusUnits[deviceType]} ${countDownItemBorderRadiusDesktop.left}${countDownItemBorderRadiusUnits[deviceType]}`;
	const countDownItemBorderRadiusGetTablet = `${countDownItemBorderRadiusTablet.top}${countDownItemBorderRadiusUnits[deviceType]} ${countDownItemBorderRadiusTablet.right}${countDownItemBorderRadiusUnits[deviceType]} ${countDownItemBorderRadiusTablet.bottom}${countDownItemBorderRadiusUnits[deviceType]} ${countDownItemBorderRadiusTablet.left}${countDownItemBorderRadiusUnits[deviceType]}`;
	const countDownItemBorderRadiusGetMobile = `${countDownItemBorderRadiusMobile.top}${countDownItemBorderRadiusUnits[deviceType]} ${countDownItemBorderRadiusMobile.right}${countDownItemBorderRadiusUnits[deviceType]} ${countDownItemBorderRadiusMobile.bottom}${countDownItemBorderRadiusUnits[deviceType]} ${countDownItemBorderRadiusMobile.left}${countDownItemBorderRadiusUnits[deviceType]}`;


	const countDownStyle = useMemo(
		() => `
			.fb-count-down-wrapper.${blockID} {
				${countDownItemGap.Desktop ? `gap: ${countDownItemGap.Desktop}${countDownItemGapUnits.Desktop};` : ''}
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
			}
	
			.fb-count-down-wrapper.${blockID}:hover{
				${hoverBackgroundType === "gradient" ? `background: ${hoverCustomGradientSwitcher && hoverCustomGradientInputValue ? hoverCustomGradientInputValue : hoverGradientColor };` : hoverBackgroundImageUrl && hoverBackgroundImageUrl !== "null" ? `
				${hoverBackgroundImageUrl ? `background-image: url(${hoverBackgroundImageUrl});` : "" }
				${hoverBackgroundImagePosition ? `background-position: ${hoverBackgroundImagePosition};` : "" }
				${hoverBackgroundImageAttachment ? `background-attachment: ${hoverBackgroundImageAttachment};` : "" }
				${hoverBackgroundImageRepeat ? `background-repeat: ${hoverBackgroundImageRepeat};` : "" }
				${hoverBackgroundImageSize ? `background-size: ${hoverBackgroundImageSize};` : "" } ` : `background: ${hoverClassicColor};` }
			}
			.fb-count-down-wrapper.${blockID} .fb-count-down-item {
				${countDownItemBgColor ? `background: ${countDownItemBgColor};` : ''}
				${countDownItemSize.Desktop ? `width: ${countDownItemSize.Desktop}${countDownItemSizeUnits.Desktop};` : ''}
				${countDownItemSize.Desktop ? `height: ${countDownItemSize.Desktop}${countDownItemSizeUnits.Desktop};` : ''}
				${countDownItemBorder ? `border: ${countDownItemBorder};` : ''}
				${countDownItemBorderTypeGetDesktop ? `border-width: ${countDownItemBorderTypeGetDesktop};` : ''}
				${countDownItemBorderRadiusGetDesktop ? `border-radius: ${countDownItemBorderRadiusGetDesktop};` : ''}
				${countDownItemBorderColor ? `border-color: ${countDownItemBorderColor};` : ''}
				
			}
			.fb-count-down-wrapper.${blockID} .fb-count-down-item:hover {
				${countDownItemBgHoverColor ? `background: ${countDownItemBgHoverColor};` : ''}
			}
			.fb-count-down-wrapper.${blockID} .fb-count-down-item:before {
				${
					countDownSeparatorEnabled && 
					countDownSeparatorType && 
					countDownSeparatorType !== 'null' 
					? `
					content: '${countDownSeparatorType}';
					${countDownSeparatorHorizontalGap.Desktop ? `top: ${countDownSeparatorHorizontalGap.Desktop}${countDownSeparatorHorizontalGapUnits.Desktop};` : ''}
					${countDownSeparatorVerticalGap.Desktop ? `right: -${countDownSeparatorVerticalGap.Desktop}${countDownSeparatorVerticalGapUnits.Desktop};` : ''}
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
			}
			.fb-count-down-wrapper.${blockID} .fb-count-down-item:hover:before {
				${countDownSeparatorFontHoverColor ? `color: ${countDownSeparatorFontHoverColor};` : ''}
			}
			.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time {
				${digitFontColor ? `color: ${digitFontColor};` : ""}
				${digitFontFamily ? `font-family: ${digitFontFamily};` : ""}
				${digitFontSize.Desktop ? `font-size: ${digitFontSize.Desktop}${digitFontSizeUnits.Desktop};` : ""}
				${digitFontWeight ? `font-weight: ${digitFontWeight};` : ""}
				${digitFontStyle ? `font-style: ${digitFontStyle};` : ""}
				${digitTextTransform ? `text-transform: ${digitTextTransform};` : ""}
				${digitTextDecoration ? `text-decoration: ${digitTextDecoration};` : ""}
				${digitLetterSpacing.Desktop ? `letter-spacing: ${digitLetterSpacing.Desktop}${digitLetterSpacingUnits.Desktop};` : ""}
				${digitLineHeight.Desktop ? `line-height: ${digitLineHeight.Desktop}${digitLineHeightUnits.Desktop};` : ""}
			}
			.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time:hover {
				${digitFontHoverColor ? `color: ${digitFontHoverColor};` : ""}
			}
			.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
				${labelFontColor ? `color: ${labelFontColor};` : ""}
				${labelFontFamily ? `font-family: ${labelFontFamily};` : ""}
				${labelFontSize.Desktop ? `font-size: ${labelFontSize.Desktop}${labelFontSizeUnits.Desktop};` : ""}
				${labelFontWeight ? `font-weight: ${labelFontWeight};` : ""}
				${labelFontStyle ? `font-style: ${labelFontStyle};` : ""}
				${labelTextTransform ? `text-transform: ${labelTextTransform};` : ""}
				${labelTextDecoration ? `text-decoration: ${labelTextDecoration};` : ""}
				${labelLetterSpacing.Desktop ? `letter-spacing: ${labelLetterSpacing.Desktop}${labelLetterSpacingUnits.Desktop};` : ""}
				${labelLineHeight.Desktop ? `line-height: ${labelLineHeight.Desktop}${labelLineHeightUnits.Desktop};` : ""}
			}
			.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label:hover{
				${labelFontHoverColor ? `color: ${labelFontHoverColor};` : ""}
			}

			@media only screen and (max-width: 1024px) {
				.fb-count-down-wrapper.${blockID} {
					${countDownItemGap.Tablet ? `gap: ${countDownItemGap.Tablet}${countDownItemGapUnits.Tablet};` : ""}
					${countDownItemWrapperBorderTypeGetTablet ? `border-width: ${countDownItemWrapperBorderTypeGetTablet};` : ""}
					${countDownItemWrapperBorderRadiusGetTablet ? `border-radius: ${countDownItemWrapperBorderRadiusGetTablet};` : ""}
					${countDownItemWrapperPaddingGetTablet ? `padding: ${countDownItemWrapperPaddingGetTablet};` : ""}
					${countDownItemWrapperMarginGetTablet ? `margin: ${countDownItemWrapperMarginGetTablet};` : ""}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item {
					${countDownItemSize.Tablet ? `width: ${countDownItemSize.Tablet}${countDownItemSizeUnits.Tablet};` : ""}
					${countDownItemSize.Tablet ? `height: ${countDownItemSize.Tablet}${countDownItemSizeUnits.Tablet};` : ""}
					${countDownItemBorderTypeGetTablet ? `border-width: ${countDownItemBorderTypeGetTablet};` : ""}
					${countDownItemBorderRadiusGetTablet ? `border-radius: ${countDownItemBorderRadiusGetTablet};` : ""}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item:before {
					${
						countDownSeparatorEnabled && countDownSeparatorType && countDownSeparatorType !== "null"
							? `
								${countDownSeparatorHorizontalGap.Tablet ? `top: ${countDownSeparatorHorizontalGap.Tablet}${countDownSeparatorHorizontalGapUnits.Tablet};` : ""}
								${countDownSeparatorVerticalGap.Tablet ? `right: -${countDownSeparatorVerticalGap.Tablet}${countDownSeparatorVerticalGapUnits.Tablet};` : ""}
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
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
					${labelFontSize.Tablet ? `font-size: ${labelFontSize.Tablet}${labelFontSizeUnits.Tablet};` : ""}
					${labelLetterSpacing.Tablet ? `letter-spacing: ${labelLetterSpacing.Tablet}${labelLetterSpacingUnits.Tablet};` : ""}
					${labelLineHeight.Tablet ? `line-height: ${labelLineHeight.Tablet}${labelLineHeightUnits.Tablet};` : ""}
				}
			}

			@media only screen and (max-width: 767px) {
				.fb-count-down-wrapper.${blockID} {
					${countDownItemGap.Mobile ? `gap: ${countDownItemGap.Mobile}${countDownItemGapUnits.Mobile};` : ""}
					${countDownItemWrapperBorderTypeGetMobile ? `border-width: ${countDownItemWrapperBorderTypeGetMobile};` : ""}
					${countDownItemWrapperBorderRadiusGetMobile ? `border-radius: ${countDownItemWrapperBorderRadiusGetMobile};` : ""}
					${countDownItemWrapperPaddingGetMobile ? `padding: ${countDownItemWrapperPaddingGetMobile};` : ""}
					${countDownItemWrapperMarginGetMobile ? `margin: ${countDownItemWrapperMarginGetMobile};` : ""}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item {
					${countDownItemSize.Mobile ? `width: ${countDownItemSize.Mobile}${countDownItemSizeUnits.Mobile};` : ""}
					${countDownItemSize.Mobile ? `height: ${countDownItemSize.Mobile}${countDownItemSizeUnits.Mobile};` : ""}
					${countDownItemBorderTypeGetMobile ? `border-width: ${countDownItemBorderTypeGetMobile};` : ""}
					${countDownItemBorderRadiusGetMobile ? `border-radius: ${countDownItemBorderRadiusGetMobile};` : ""}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item:before {
					${
						countDownSeparatorEnabled && countDownSeparatorType && countDownSeparatorType !== "null"
							? `
								${countDownSeparatorHorizontalGap.Mobile ? `top: ${countDownSeparatorHorizontalGap.Mobile}${countDownSeparatorHorizontalGapUnits.Mobile};` : ""}
								${countDownSeparatorVerticalGap.Mobile ? `right: -${countDownSeparatorVerticalGap.Mobile}${countDownSeparatorVerticalGapUnits.Mobile};` : ""}
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
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
					${labelFontSize.Mobile ? `font-size: ${labelFontSize.Mobile}${labelFontSizeUnits.Mobile};` : ""}
					${labelLetterSpacing.Mobile ? `letter-spacing: ${labelLetterSpacing.Mobile}${labelLetterSpacingUnits.Mobile};` : ""}
					${labelLineHeight.Mobile ? `line-height: ${labelLineHeight.Mobile}${labelLineHeightUnits.Mobile};` : ""}
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
			countDownSeparatorHorizontalGap,
			countDownSeparatorVerticalGap,
			countDownSeparatorFontColor,
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
			countDownItemSizeUnits,
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
			globalBackgroundImageSize
		]
	);
	
	useEffect(() => {
		setAttributes({
			blockStyle: `${countDownStyle}`.replace(/\s+/g, " ").trim(),
		});
	}, [countDownStyle]);
	
	const editorStyle = countDownStyle.replace(/\s+/g, " ").trim();
	
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
												<SelectControl
													label={__("Separator Type", "frontis-blocks")}
													value={countDownSeparatorType}
													options={SELECT_SEPARATOR_TYPE}
													onChange={(value) => setAttributes({ countDownSeparatorType: value })}
												/>
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
												max={1400}
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

											<FB_Range
												min={1}
												max={1400}
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
												spacingTablet={countDownItemBorderTypeTab}
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
												spacingTablet={countDownItemBorderRadiusTab}
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
										</PanelBody>

										<PanelBody
											title={__("Label", "frontis-blocks")}
											initialOpen={false}
										>
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
												max={100}
												label={__("Horizontal Spacing", "frontis-blocks")}
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
												max={100}
												label={__("Vertical Spacing", "frontis-blocks")}
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
