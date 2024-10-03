import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

export default function save({ attributes }) {
	const {
		blockID,
		DeviceType,
		countDownLabelDay,
		countDownLabelHour,
		countDownLabelMinute,
		countDownLabelSecond,

		targetDate,
		showDays,
		showHours,
		showMinutes,
		showSeconds,


		// Countdown item

		countDownItemSize,
		countDownItemSizeUnits,

		countDownItemGap,
		countDownItemGapUnits,

		countDownItemBgColor,

		// Team Image Border Type
		countDownItemBorder,
		countDownItemBorderColor,
		countDownItemBackgroundColor,

		countDownItemBorderTypeUnits,
		countDownItemBorderTypeDesktop,
		countDownItemBorderTypeTab,
		countDownItemBorderTypeMobile,
		countDownItemBorderTypeLink,

		// Team Image Border Radius
		countDownItemBorderRadiusUnits,
		countDownItemBorderRadiusDesktop,
		countDownItemBorderRadiusTab,
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
	} = attributes;

	const blockProps = useBlockProps.save({ id: blockID });

	{/* Inspector Controls */}

	{/* Countdown Item Control */}
	const countDownItemBorderTypeGetDesktop = `${countDownItemBorderTypeDesktop.top}${countDownItemBorderTypeUnits[DeviceType]} ${countDownItemBorderTypeDesktop.right}${countDownItemBorderTypeUnits[DeviceType]} ${countDownItemBorderTypeDesktop.bottom}${countDownItemBorderTypeUnits[DeviceType]} ${countDownItemBorderTypeDesktop.left}${countDownItemBorderTypeUnits[DeviceType]}`;
	const countDownItemBorderTypeGetTab = `${countDownItemBorderTypeTab.top}${countDownItemBorderTypeUnits[DeviceType]} ${countDownItemBorderTypeTab.right}${countDownItemBorderTypeUnits[DeviceType]} ${countDownItemBorderTypeTab.bottom}${countDownItemBorderTypeUnits[DeviceType]} ${countDownItemBorderTypeTab.left}${countDownItemBorderTypeUnits[DeviceType]}`;
	const countDownItemBorderTypeGetMobile = `${countDownItemBorderTypeMobile.top}${countDownItemBorderTypeUnits[DeviceType]} ${countDownItemBorderTypeMobile.right}${countDownItemBorderTypeUnits[DeviceType]} ${countDownItemBorderTypeMobile.bottom}${countDownItemBorderTypeUnits[DeviceType]} ${countDownItemBorderTypeMobile.left}${countDownItemBorderTypeUnits[DeviceType]}`;


	const countDownItemBorderRadiusGetDesktop = `${countDownItemBorderRadiusDesktop.top}${countDownItemBorderRadiusUnits[DeviceType]} ${countDownItemBorderRadiusDesktop.right}${countDownItemBorderRadiusUnits[DeviceType]} ${countDownItemBorderRadiusDesktop.bottom}${countDownItemBorderRadiusUnits[DeviceType]} ${countDownItemBorderRadiusDesktop.left}${countDownItemBorderRadiusUnits[DeviceType]}`;
	const countDownItemBorderRadiusGetTab = `${countDownItemBorderRadiusTab.top}${countDownItemBorderRadiusUnits[DeviceType]} ${countDownItemBorderRadiusTab.right}${countDownItemBorderRadiusUnits[DeviceType]} ${countDownItemBorderRadiusTab.bottom}${countDownItemBorderRadiusUnits[DeviceType]} ${countDownItemBorderRadiusTab.left}${countDownItemBorderRadiusUnits[DeviceType]}`;
	const countDownItemBorderRadiusGetMobile = `${countDownItemBorderRadiusMobile.top}${countDownItemBorderRadiusUnits[DeviceType]} ${countDownItemBorderRadiusMobile.right}${countDownItemBorderRadiusUnits[DeviceType]} ${countDownItemBorderRadiusMobile.bottom}${countDownItemBorderRadiusUnits[DeviceType]} ${countDownItemBorderRadiusMobile.left}${countDownItemBorderRadiusUnits[DeviceType]}`;

	return (
		<>

			<style>
				{`
                .fb-count-down-wrapper.${blockID}{
           			gap: ${countDownItemGap.Desktop}${countDownItemGapUnits.Desktop};
                }
                .fb-count-down-wrapper.${blockID} .fb-count-down-item {
                	background: ${countDownItemBgColor};
					width: ${countDownItemSize.Desktop}${countDownItemSizeUnits.Desktop};
					height: ${countDownItemSize.Desktop}${countDownItemSizeUnits.Desktop};
					border: ${countDownItemBorder};
                    border-color: ${countDownItemBorderColor};
                    border-width: ${countDownItemBorderTypeGetDesktop};
                    border-radius: ${countDownItemBorderRadiusGetDesktop};
                }
                .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time{
                	color: ${digitFontColor};
               		font-family: ${digitFontFamily !== 'default' ? digitFontFamily : digitFontFamily};
                    font-size: ${digitFontSize !== undefined ? `${digitFontSize}${digitFontSizeUnits}` : ''};
                    font-weight: ${digitFontWeight};
                    font-style: ${digitFontStyle};
                    text-transform: ${digitTextTransform};
                    text-decoration: ${digitTextDecoration};
                    ${digitLetterSpacing !== undefined ? `letter-spacing: ${digitLetterSpacing}${digitLetterSpacing};` : ''}
                    ${digitLineHeight !== undefined ? `line-height: ${digitLineHeight}${digitLineHeightUnits};` : ''}
                }
                .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label{
                	color: ${labelFontColor};
               		font-family: ${labelFontFamily !== 'default' ? labelFontFamily : labelFontFamily};
                    font-size: ${labelFontSize !== undefined ? `${labelFontSize}${labelFontSizeUnits}` : ''};
                    font-weight: ${labelFontWeight};
                    font-style: ${labelFontStyle};
                    text-transform: ${labelTextTransform};
                    text-decoration: ${labelTextDecoration};
                    ${labelLetterSpacing !== undefined ? `letter-spacing: ${labelLetterSpacing}${labelLetterSpacing};` : ''}
                    ${labelLineHeight !== undefined ? `line-height: ${labelLineHeight}${labelLineHeightUnits};` : ''}
                }


                @media only screen and (max-width: 1024px) {
				   .fb-count-down-wrapper.${blockID}{
						gap: ${countDownItemGap.Tablet}${countDownItemGapUnits.Tablet};
					}
					 .fb-count-down-wrapper.${blockID} .fb-count-down-item {
							width: ${countDownItemSize.Tablet}${countDownItemSizeUnits.Tablet};
							height: ${countDownItemSize.Tablet}${countDownItemSizeUnits.Tablet};
							border-width: ${countDownItemBorderTypeGetTab};
							border-radius: ${countDownItemBorderRadiusGetTab};
						}
                }

                @media only screen and (max-width: 767px) {
                	.fb-count-down-wrapper.${blockID}{
						gap: ${countDownItemGap.Mobile}${countDownItemGapUnits.Mobile};
					}
					 .fb-count-down-wrapper.${blockID} .fb-count-down-item {
							width: ${countDownItemSize.Mobile}${countDownItemSizeUnits.Mobile};
							height: ${countDownItemSize.Mobile}${countDownItemSizeUnits.Mobile};
							border-width: ${countDownItemBorderTypeGetMobile};
							border-radius: ${countDownItemBorderRadiusGetMobile};
						}
                }

            `}
			</style>

			<div {...blockProps} data-target-date={targetDate}>
				<div className={`fb-count-down-wrapper ${blockID}`}>
					<div className={`fb-count-down-item`}>
						<span className={`fb-count-down-time days`}>0</span>
						<span className={`fb-count-down-label`}>
						{countDownLabelDay || __('Days', 'frontis-blocks')}
						</span>
					</div>
					<div className={`fb-count-down-item`}>
						<span className={`fb-count-down-time hours`}>0</span>
						<span className={`fb-count-down-label`}>
						{countDownLabelHour || __('Hours', 'frontis-blocks')}
						</span>
					</div>
					<div className={`fb-count-down-item`}>
						<span className={`fb-count-down-time minutes`}>0</span>
						<span className={`fb-count-down-label`}>
						{countDownLabelMinute || __('Minutes', 'frontis-blocks')}
					</span>
					</div>
					<div className={`fb-count-down-item`}>
						<span className={`fb-count-down-time seconds`}>0</span>
						<span className={`fb-count-down-label`}>
						{countDownLabelSecond || __('Seconds', 'frontis-blocks')}
					</span>
					</div>
				</div>
			</div>
		</>
	);
}
