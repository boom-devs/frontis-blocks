import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
	DateTimePicker,
	TextControl,
	ColorPicker,
	BaseControl,
	RangeControl,
	ToggleControl,
	TabPanel,
	ColorPalette, Dropdown, Button, Dashicon, SelectControl, ButtonGroup
} from '@wordpress/components';

import { useEffect, useState } from '@wordpress/element';

import './editor.scss';
import {BORDER_STYLES, FONT_FAMILYS, NORMAL_HOVER, UNIT_TYPES} from "../advanced-heading/constants/constants";
import ResponsiveControl from "../../components/responsivecontrol";

import CountDownItemWrapperBgColorControl from "./style-control/countdown-item-wrapper-bg-color-control";
import CountDownItemWrapperBorderControl from "./style-control/countdown-item-wrapper-border-control";
import CountDownItemWrapperPaddingMarginControl from "./style-control/countdown-item-wrapper-padding-margin-control";
import CountDownItemSizeControl from "./style-control/countdown-item-size-control";
import CountDownItemGapControl from "./style-control/countdown-item-gap-control";
import CountDownItemBorderTypeControl from "./style-control/countdown-item-border-type-control";
import CountDownItemBorderRadiusControl from "./style-control/countdown-item-border-radius-control";
import CountDownDigitTypographyControl from "./style-control/countdown-digit-typograpy-control";
import CountDownLabelTypographyControl from "./style-control/countdown-label-typograpy-control";
import CountDownItemBgColorControl from "./style-control/countdown-item-bg-color-control";
import CountDownSeparatorControl from "./style-control/countdown-separator-control";
import {SELECT_SEPARATOR_TYPE} from "@Blocks/countdown/constants/constants";



export default function Edit({ attributes, setAttributes, clientId }) {
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

		countDownItemBgColor,

		/** Background Image */
		countDownItemBgImageEnabled,
		countDownItemBgImageUrl,
		countDownItemBgImageAlt,
		countDownItemBgImageID,

		countDownItemBgImagePositionType,
		countDownItemBgImageAttachmentType,
		countDownItemBgImageRepeatType,
		countDownItemBgImageSizeType,

		// Border Type
		countDownItemBorder,
		countDownItemBorderColor,
		countDownItemBackgroundColor,

		countDownItemBorderTypeUnits,
		countDownItemBorderTypeDesktop,
		countDownItemBorderTypeTablet,
		countDownItemBorderTypeMobile,
		countDownItemBorderTypeLink,

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





	return (
		<>

			<style>
				{`
             	.fb-count-down-wrapper.${blockID} {
					${countDownItemGap.Desktop ? `gap: ${countDownItemGap.Desktop}${countDownItemGapUnits.Desktop};` : ''}
					${countDownItemWrapperBgFontColor ? `background: ${countDownItemWrapperBgFontColor};` : ''}
					${countDownItemWrapperBorder ? `border: ${countDownItemWrapperBorder};` : ''}
					${countDownItemWrapperBorderTypeGetDesktop ? `border-width: ${countDownItemWrapperBorderTypeGetDesktop};` : ''}
					${countDownItemWrapperBorderRadiusGetDesktop ? `border-radius: ${countDownItemWrapperBorderRadiusGetDesktop};` : ''}
					${countDownItemWrapperBorderColor ? `border-color: ${countDownItemWrapperBorderColor};` : ''}

					${countDownItemWrapperBackgroundImageEnabled && countDownItemWrapperBackgroundImageUrl && countDownItemWrapperBackgroundImageUrl !== 'null' ? `
                        background-image: url(${countDownItemWrapperBackgroundImageUrl});
                        background-position: ${countDownItemWrapperBgImagePositionType};
                        background-repeat: ${countDownItemWrapperBgImageRepeatType};
                        background-size: ${countDownItemWrapperBgImageSizeType};
                    ` : ''}
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

					${countDownItemBgImageEnabled && countDownItemBgImageUrl && countDownItemBgImageUrl !== 'null' ? `
                        background-image: url(${countDownItemBgImageUrl});
                        background-position: ${countDownItemBgImagePositionType};
                        background-repeat: ${countDownItemBgImageRepeatType};
                        background-size: ${countDownItemBgImageSizeType};
                    ` : ''}
				}
				.fb-count-down-wrapper.${blockID} .fb-count-down-item:before {
						${countDownSeparatorEnabled && countDownSeparatorType && countDownSeparatorType !== 'null' ? `
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

                    ` : ''}
				}


				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time {
					${digitFontColor ? `color: ${digitFontColor};` : ''}
					${digitFontFamily ? `font-family: ${digitFontFamily};` : ''}
					${digitFontSize.Desktop ? `font-size: ${digitFontSize.Desktop}${digitFontSizeUnits.Desktop};` : ''}
					${digitFontWeight ? `font-weight: ${digitFontWeight};` : ''}
					${digitFontStyle ? `font-style: ${digitFontStyle};` : ''}
					${digitTextTransform ? `text-transform: ${digitTextTransform};` : ''}
					${digitTextDecoration ? `text-decoration: ${digitTextDecoration};` : ''}
					${digitLetterSpacing.Desktop ? `letter-spacing: ${digitLetterSpacing.Desktop}${digitLetterSpacingUnits.Desktop};` : ''}
					${digitLineHeight.Desktop ? `line-height: ${digitLineHeight.Desktop}${digitLineHeightUnits.Desktop};` : ''}
				}

				.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
					${labelFontColor ? `color: ${labelFontColor};` : ''}
					${labelFontFamily ? `font-family: ${labelFontFamily};` : ''}
					${labelFontSize.Desktop ? `font-size: ${labelFontSize.Desktop}${labelFontSizeUnits.Desktop};` : ''}
					${labelFontWeight ? `font-weight: ${labelFontWeight};` : ''}
					${labelFontStyle ? `font-style: ${labelFontStyle};` : ''}
					${labelTextTransform ? `text-transform: ${labelTextTransform};` : ''}
					${labelTextDecoration ? `text-decoration: ${labelTextDecoration};` : ''}
					${labelLetterSpacing.Desktop ? `letter-spacing: ${labelLetterSpacing.Desktop}${labelLetterSpacingUnits.Desktop};` : ''}
					${labelLineHeight.Desktop ? `line-height: ${labelLineHeight.Desktop}${labelLineHeightUnits.Desktop};` : ''}
				}

				@media only screen and (max-width: 1024px) {
					.fb-count-down-wrapper.${blockID} {
						${countDownItemGap.Tablet ? `gap: ${countDownItemGap.Tablet}${countDownItemGapUnits.Tablet};` : ''}
						${countDownItemWrapperBorderTypeGetTablet ? `border-width: ${countDownItemWrapperBorderTypeGetTablet};` : ''}
						${countDownItemWrapperBorderRadiusGetTablet ? `border-radius: ${countDownItemWrapperBorderRadiusGetTablet};` : ''}
						${countDownItemWrapperPaddingGetTablet ? `padding: ${countDownItemWrapperPaddingGetTablet};` : ''}
						${countDownItemWrapperMarginGetTablet ? `margin: ${countDownItemWrapperMarginGetTablet};` : ''}
					}
					.fb-count-down-wrapper.${blockID} .fb-count-down-item {
						${countDownItemSize.Tablet ? `width: ${countDownItemSize.Tablet}${countDownItemSizeUnits.Tablet};` : ''}
						${countDownItemSize.Tablet ? `height: ${countDownItemSize.Tablet}${countDownItemSizeUnits.Tablet};` : ''}
						${countDownItemBorderTypeGetTablet ? `border-width: ${countDownItemBorderTypeGetTablet};` : ''}
						${countDownItemBorderRadiusGetTablet ? `border-radius: ${countDownItemBorderRadiusGetTablet};` : ''}
					}
					.fb-count-down-wrapper.${blockID} .fb-count-down-item:before {
						${countDownSeparatorEnabled && countDownSeparatorType && countDownSeparatorType !== 'null' ? `
						${countDownSeparatorHorizontalGap.Tablet ? `top: ${countDownSeparatorHorizontalGap.Tablet}${countDownSeparatorHorizontalGapUnits.Tablet};` : ''}
						${countDownSeparatorVerticalGap.Tablet ? `right: -${countDownSeparatorVerticalGap.Tablet}${countDownSeparatorVerticalGapUnits.Tablet};` : ''}
						${countDownSeparatorFontSize.Tablet ? `font-size: ${countDownSeparatorFontSize.Tablet}${countDownSeparatorFontSizeUnits.Tablet};` : ''}
						${countDownSeparatorLetterSpacing.Tablet ? `letter-spacing: ${countDownSeparatorLetterSpacing.Tablet}${countDownSeparatorLetterSpacingUnits.Tablet};` : ''}
						${countDownSeparatorLineHeight.Tablet ? `line-height: ${countDownSeparatorLineHeight.Tablet}${countDownSeparatorLineHeightUnits.Tablet};` : ''}

                    ` : ''}
					}
					.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time {
						${digitFontSize.Tablet ? `font-size: ${digitFontSize.Tablet}${digitFontSizeUnits.Tablet};` : ''}
						${digitLetterSpacing.Tablet ? `letter-spacing: ${digitLetterSpacing.Tablet}${digitLetterSpacingUnits.Tablet};` : ''}
						${digitLineHeight.Tablet ? `line-height: ${digitLineHeight.Tablet}${digitLineHeightUnits.Tablet};` : ''}
					}
					.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
						${labelFontSize.Tablet ? `font-size: ${labelFontSize.Tablet}${labelFontSizeUnits.Tablet};` : ''}
						${labelLetterSpacing.Tablet ? `letter-spacing: ${labelLetterSpacing.Tablet}${labelLetterSpacingUnits.Tablet};` : ''}
						${labelLineHeight.Tablet ? `line-height: ${labelLineHeight.Tablet}${labelLineHeightUnits.Tablet};` : ''}
					}
				}

				@media only screen and (max-width: 767px) {
					.fb-count-down-wrapper.${blockID} {
						${countDownItemGap.Mobile ? `gap: ${countDownItemGap.Mobile}${countDownItemGapUnits.Mobile};` : ''}
						${countDownItemWrapperBorderTypeGetMobile ? `border-width: ${countDownItemWrapperBorderTypeGetMobile};` : ''}
						${countDownItemWrapperBorderRadiusGetMobile ? `border-radius: ${countDownItemWrapperBorderRadiusGetMobile};` : ''}
						${countDownItemWrapperPaddingGetMobile ? `padding: ${countDownItemWrapperPaddingGetMobile};` : ''}
						${countDownItemWrapperMarginGetMobile ? `margin: ${countDownItemWrapperMarginGetMobile};` : ''}
					}
					.fb-count-down-wrapper.${blockID} .fb-count-down-item {
						${countDownItemSize.Mobile ? `width: ${countDownItemSize.Mobile}${countDownItemSizeUnits.Mobile};` : ''}
						${countDownItemSize.Mobile ? `height: ${countDownItemSize.Mobile}${countDownItemSizeUnits.Mobile};` : ''}
						${countDownItemBorderTypeGetMobile ? `border-width: ${countDownItemBorderTypeGetMobile};` : ''}
						${countDownItemBorderRadiusGetMobile ? `border-radius: ${countDownItemBorderRadiusGetMobile};` : ''}
					}
					.fb-count-down-wrapper.${blockID} .fb-count-down-item:before {
						${countDownSeparatorEnabled && countDownSeparatorType && countDownSeparatorType !== 'null' ? `
						${countDownSeparatorHorizontalGap.Mobile ? `top: ${countDownSeparatorHorizontalGap.Mobile}${countDownSeparatorHorizontalGapUnits.Mobile};` : ''}
						${countDownSeparatorVerticalGap.Mobile ? `right: -${countDownSeparatorVerticalGap.Mobile}${countDownSeparatorVerticalGapUnits.Mobile};` : ''}
						${countDownSeparatorFontSize.Mobile ? `font-size: ${countDownSeparatorFontSize.Mobile}${countDownSeparatorFontSizeUnits.Mobile};` : ''}
						${countDownSeparatorLetterSpacing.Mobile ? `letter-spacing: ${countDownSeparatorLetterSpacing.Mobile}${countDownSeparatorLetterSpacingUnits.Mobile};` : ''}
						${countDownSeparatorLineHeight.Mobile ? `line-height: ${countDownSeparatorLineHeight.Mobile}${countDownSeparatorLineHeightUnits.Mobile};` : ''}

                    ` : ''}
					}
					.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time {
						${digitFontSize.Mobile ? `font-size: ${digitFontSize.Mobile}${digitFontSizeUnits.Mobile};` : ''}
						${digitLetterSpacing.Mobile ? `letter-spacing: ${digitLetterSpacing.Mobile}${digitLetterSpacingUnits.Mobile};` : ''}
						${digitLineHeight.Mobile ? `line-height: ${digitLineHeight.Mobile}${digitLineHeightUnits.Mobile};` : ''}
					}
					.fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
						${labelFontSize.Mobile ? `font-size: ${labelFontSize.Mobile}${labelFontSizeUnits.Mobile};` : ''}
						${labelLetterSpacing.Mobile ? `letter-spacing: ${labelLetterSpacing.Mobile}${labelLetterSpacingUnits.Mobile};` : ''}
						${labelLineHeight.Mobile ? `line-height: ${labelLineHeight.Mobile}${labelLineHeightUnits.Mobile};` : ''}
					}
				}

            `}
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
											<CountDownItemSizeControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<CountDownItemGapControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<CountDownItemBgColorControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<CountDownItemBorderTypeControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<CountDownItemBorderRadiusControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
										</PanelBody>

										<PanelBody
											title={__("Digit", "frontis-blocks")}
											initialOpen={false}
										>
											<CountDownDigitTypographyControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
										</PanelBody>

										<PanelBody
											title={__("Label", "frontis-blocks")}
											initialOpen={false}
										>
											<CountDownLabelTypographyControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
										</PanelBody>
										{countDownSeparatorEnabled && (
										<PanelBody title={__("Separator", "frontis-blocks")} initialOpen={false}>
											<CountDownSeparatorControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
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


			<div {...blockProps} id={blockID}>
				<div className={`fb-count-down-wrapper ${blockID}`}>
					{showDays && (
						<div className={`fb-count-down-item`}>
							<span className={`fb-count-down-time`}>{timeRemaining.days || 0}</span>
							<span className={`fb-count-down-label`}>{countDownLabelDay || __('Days', 'frontis-blocks')}</span>
						</div>
					)}

					{showHours && (
						<div className={`fb-count-down-item`}>
							<span className={`fb-count-down-time`}>{timeRemaining.hours || 0}</span>
							<span className={`fb-count-down-label`}>{countDownLabelHour || __('Hours', 'frontis-blocks')}</span>
						</div>
					)}

					{showMinutes && (
						<div className={`fb-count-down-item`}>
							<span className={`fb-count-down-time`}>{timeRemaining.minutes || 0}</span>
							<span className={`fb-count-down-label`}>{countDownLabelMinute || __('Minutes', 'frontis-blocks')}</span>
						</div>
					)}

					{showSeconds && (
						<div className={`fb-count-down-item`}>
							<span className={`fb-count-down-time`}>{timeRemaining.seconds || 0}</span>
							<span className={`fb-count-down-label`}>{countDownLabelSecond || __('Seconds', 'frontis-blocks')}</span>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
