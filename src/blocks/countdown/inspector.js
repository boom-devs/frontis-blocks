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
	SelectControl
} from '@wordpress/components';

import {
	BORDER_STYLES,
} from "./constants/constants";


import "./editor.scss";
import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import { useEffect, useState, useMemo } from '@wordpress/element';

import CountDownItemWrapperBgColorControl from "./style-control/countdown-item-wrapper-bg-color-control";
import CountDownItemWrapperBorderControl from "./style-control/countdown-item-wrapper-border-control";
import CountDownItemWrapperPaddingMarginControl from "./style-control/countdown-item-wrapper-padding-margin-control";
import {SELECT_SEPARATOR_TYPE} from "@Blocks/countdown/constants/constants";
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		deviceType,

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
		countDownItemWrapperBgFontColorSwitcher,
		countDownItemWrapperBgFontColor,
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

	} = attributes;

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
				${countDownItemWrapperBgFontColor ? `background: ${countDownItemWrapperBgFontColor};` : ''}
				${countDownItemWrapperBorder ? `border: ${countDownItemWrapperBorder};` : ''}
				${countDownItemWrapperBorderTypeGetDesktop ? `border-width: ${countDownItemWrapperBorderTypeGetDesktop};` : ''}
				${countDownItemWrapperBorderRadiusGetDesktop ? `border-radius: ${countDownItemWrapperBorderRadiusGetDesktop};` : ''}
				${countDownItemWrapperBorderColor ? `border-color: ${countDownItemWrapperBorderColor};` : ''}
				${
					countDownItemWrapperBackgroundImageEnabled && 
					countDownItemWrapperBackgroundImageUrl && 
					countDownItemWrapperBackgroundImageUrl !== 'null' 
					? `
					background-image: url(${countDownItemWrapperBackgroundImageUrl});
					background-position: ${countDownItemWrapperBgImagePositionType};
					background-repeat: ${countDownItemWrapperBgImageRepeatType};
					background-size: ${countDownItemWrapperBgImageSizeType};
					` 
					: ''
				}
				${countDownItemWrapperPaddingGetDesktop ? `padding: ${countDownItemWrapperPaddingGetDesktop};` : ''}
				${countDownItemWrapperMarginGetDesktop ? `margin: ${countDownItemWrapperMarginGetDesktop};` : ''}
			}
	
			.fb-count-down-wrapper.${blockID} .fb-count-down-item {
				${countDownItemBgColor ? `background: ${countDownItemBgColor};` : ''}
				${countDownItemSize.Desktop ? `width: ${countDownItemSize.Desktop}${countDownItemSizeUnits.Desktop};` : ''}
				${countDownItemSize.Desktop ? `height: ${countDownItemSize.Desktop}${countDownItemSizeUnits.Desktop};` : ''}
				${countDownItemBorder ? `border: ${countDownItemBorder};` : ''}
				${countDownItemBorderTypeGetDesktop ? `border-width: ${countDownItemBorderTypeGetDesktop};` : ''}
				${countDownItemBorderRadiusGetDesktop ? `border-radius: ${countDownItemBorderRadiusGetDesktop};` : ''}
				${countDownItemBorderColor ? `border-color: ${countDownItemBorderColor};` : ''}
				${
					countDownItemBgImageEnabled && 
					countDownItemBgImageUrl && 
					countDownItemBgImageUrl !== 'null' 
					? `
					background-image: url(${countDownItemBgImageUrl});
					background-position: ${countDownItemBgImagePositionType};
					background-repeat: ${countDownItemBgImageRepeatType};
					background-size: ${countDownItemBgImageSizeType};
					` 
					: ''
				}
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
			countDownItemWrapperBgFontColor,
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
			countDownItemBorderRadiusGetMobile
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
											
											{/** Item Background Control */}
											<FB_SwitcherControl
												label={__("Text Color", "frontis-blocks")}
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
									
											<ToggleControl
												label={__("Enable Background Image", "frontis-blocks")}
												checked={
												countDownItemBgImageEnabled}
												onChange={(value) => setAttributes({
													countDownItemBgImageEnabled: value })}
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
											<ToggleControl
												label={__("Enable Background Image", "frontis-blocks")}
												checked={
												countDownItemBgImageEnabled}
												onChange={(value) => setAttributes({
													countDownItemBgImageEnabled: value })}
											/>
											{
												countDownItemBgImageEnabled && (
												<>
													<BaseControl
														label={__("Background Image", "frontis-blocks")}
														className="fb-advanced-heading-bg-image"
													>
														{
															countDownItemBgImageUrl ? (
															<div className="fb-image-avatar-control" style={{backgroundImage: `url(${
																countDownItemBgImageUrl})`}}>
																<button
																	className='fb-image-avatar-delete'
																	onClick={() => {
																		setAttributes({
									
																			countDownItemBgImageUrl: null,
									
																			countDownItemBgImageAlt: null,
									
																			countDownItemBgImageID: null,
																		});
																	}}
																>
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 9L9 15" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 9L15 15" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
																</button>
																<button
																	className='fb-image-replace-btn'
																	onClick={() => {
																		const mediaUploader = wp.media({
																			title: __('Select or Upload Background Image', 'frontis-blocks'),
																			button: {
																				text: __('Use this image', 'frontis-blocks'),
																			},
																			multiple: false
																		});
									
																		mediaUploader.on('select', function() {
																			const attachment = mediaUploader.state().get('selection').first().toJSON();
																			setAttributes({
									
																				countDownItemBgImageUrl: attachment.url,
									
																				countDownItemBgImageAlt: attachment.alt,
									
																				countDownItemBgImageID: attachment.id,
																			});
																		});
									
																		mediaUploader.open();
																	}}
																>
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.827 16.379C9.77912 16.9085 8.60041 17.1235 7.43311 16.9979C6.2658 16.8722 5.15981 16.4115 4.24861 15.6711C3.33741 14.9308 2.65996 13.9426 2.29804 12.8257C1.93611 11.7088 1.90518 10.5111 2.20897 9.37703L7.62097 10.827C7.09144 9.77918 6.87652 8.60047 7.00213 7.43317C7.12774 6.26586 7.58853 5.15987 8.32886 4.24867C9.06919 3.33747 10.0574 2.66003 11.1743 2.2981C12.2912 1.93617 13.4889 1.90524 14.623 2.20903L13.173 7.62103C14.2208 7.0915 15.3995 6.87658 16.5668 7.00219C17.7341 7.1278 18.8401 7.58859 19.7513 8.32892C20.6625 9.06926 21.34 10.0575 21.7019 11.1744C22.0638 12.2912 22.0948 13.489 21.791 14.623L16.379 13.173C16.9085 14.2209 17.1234 15.3996 16.9978 16.5669C16.8722 17.7342 16.4114 18.8402 15.6711 19.7514C14.9307 20.6626 13.9425 21.34 12.8256 21.702C11.7088 22.0639 10.511 22.0948 9.37697 21.791L10.827 16.379Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 12V12.01" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
																	Replace
																</button>
															</div>
														) : (
															<button
																className='fb-image-upload-btn'
																onClick={() => {
																	const mediaUploader = wp.media({
																		title: __('Select or Upload Background Image', 'frontis-blocks'),
																		button: {
																			text: __('Use this image', 'frontis-blocks'),
																		},
																		multiple: false
																	});
									
																	mediaUploader.on('select', function() {
																		const attachment = mediaUploader.state().get('selection').first().toJSON();
																		setAttributes({
									
																			countDownItemBgImageUrl: attachment.url,
									
																			countDownItemBgImageAlt: attachment.alt,
									
																			countDownItemBgImageID: attachment.id,
																		});
																	});
									
																	mediaUploader.open();
																}}
															>
																<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"></path></svg>
																Upload
															</button>
														)}
													</BaseControl>
									
													<SelectControl
														label={__("Background Position", "frontis-blocks")}
														value={countDownItemBgImagePositionType}
														options={SELECT_BG_IMAGE_POSITION_TYPE}
														onChange={(value) => setAttributes({ countDownItemBgImagePositionType: value })}
													/>
									
													<SelectControl
														label={__("Background Attachment", "frontis-blocks")}
														value={countDownItemBgImageAttachmentType}
														options={SELECT_BG_IMAGE_ATTACHMENT_TYPE}
														onChange={(value) => setAttributes({ countDownItemBgImageAttachmentType: value })}
													/>
													<SelectControl
														label={__("Background Repeat", "frontis-blocks")}
														value={countDownItemBgImageRepeatType}
														options={SELECT_BG_IMAGE_REPEAT_TYPE}
														onChange={(value) => setAttributes({ countDownItemBgImageRepeatType: value })}
													/>
									
													<SelectControl
														label={__("Background Size", "frontis-blocks")}
														value={countDownItemBgImageSizeType}
														options={SELECT_BG_IMAGE_SIZE_TYPE}
														onChange={(value) => setAttributes({ countDownItemBgImageSizeType: value })}
													/>
												</>
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
												label={ 'Border' }
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
											<CountDownItemWrapperBgColorControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>

											<FB_BackgroundColorControl
												bgColorSwitcher={testBgColorSwitcher}
												setBgColorSwitcher={(value) => setAttributes({ testBgColorSwitcher: value }) }
												normalBackgroundType={testBackgroundType}
												setNormalBackgroundType={(value) => setAttributes({ testBackgroundType: value }) }
												normalClassicColor={testClassicColor}
												setNormalClassicColor={(value) => setAttributes({ testClassicColor: value }) }
												normalGradientColor={testGradientColor}
												setNormalGradientColor={(value) => setAttributes({ testGradientColor: value }) }
												normalCustomGradientSwitcher={ testCustomGradientSwitcher }
												setNormalCustomGradientSwitcher={(value) => setAttributes({ testCustomGradientSwitcher: value, }) }
												normalCustomGradientInputValue={ testCustomGradientInputValue }
												setNormalCustomGradientInputValue={(value) => setAttributes({ testCustomGradientInputValue: value, }) }
												normalBackgroundImageUrl={testBackgroundImageUrl}
												setNormalBackgroundImageUrl={(value) => setAttributes({ testBackgroundImageUrl: value }) }
												normalBackgroundImageAlt={testBackgroundImageAlt}
												setNormalBackgroundImageAlt={(value) => setAttributes({ testBackgroundImageAlt: value }) }
												normalBackgroundImageID={testBackgroundImageID}
												setNormalBackgroundImageID={(value) => setAttributes({ testBackgroundImageID: value }) }
												normalBackgroundImagePosition={ testBackgroundImagePosition }
												setNormalBackgroundImagePosition={(value) => setAttributes({ testBackgroundImagePosition: value, }) }
												normalBackgroundImageAttachment={ testBackgroundImageAttachment }
												setNormalBackgroundImageAttachment={(value) => setAttributes({ testBackgroundImageAttachment: value, }) }
												normalBackgroundImageRepeat={ testBackgroundImageRepeat }
												setNormalBackgroundImageRepeat={(value) => setAttributes({ testBackgroundImageRepeat: value, }) }
												normalBackgroundImageSize={testBackgroundImageSize}
												setNormalBackgroundImageSize={(value) => setAttributes({ testBackgroundImageSize: value }) }
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
											<CountDownItemWrapperBorderControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
										</PanelBody>
										<PanelBody title={__("Padding/Margin", "frontis-blocks")} initialOpen={false}>
											<CountDownItemWrapperPaddingMarginControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
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
