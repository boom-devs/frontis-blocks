import {RichText, useBlockProps} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {useRef} from "@wordpress/element";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
	const {
		blockID,
		pricingTableHeaderName,
		pricingTableHeaderNameHeadingTag,
		pricingTableHeaderNameFontFamily,
		pricingTableHeaderNameFontSize,
		pricingTableHeaderNameFontSizeUnits,
		pricingTableHeaderNameFontWeight,
		pricingTableHeaderNameFontStyle,
		pricingTableHeaderNameTextTransform,
		pricingTableHeaderNameTextDecoration,
		pricingTableHeaderNameLetterSpacing,
		pricingTableHeaderNameLetterSpacingUnits,
		pricingTableHeaderNameLineHeight,
		pricingTableHeaderNameLineHeightUnits,
		pricingTableHeaderNameColor,

		pricingTableHeaderNameMarginUnits,
		desktoppricingTableHeaderNameMargin,
		pricingTableHeaderNameDesktopMargin,
		pricingTableHeaderNameTabMargin,
		pricingTableHeaderNameMobileMargin,
		pricingTableHeaderNameMarginLink,


		pricingTableHeaderContent,
		pricingTableHeaderContentFontFamily,
		pricingTableHeaderContentFontSize,
		pricingTableHeaderContentFontSizeUnits,
		pricingTableHeaderContentFontWeight,
		pricingTableHeaderContentFontStyle,
		pricingTableHeaderContentTextTransform,
		pricingTableHeaderContentTextDecoration,
		pricingTableHeaderContentLetterSpacing,
		pricingTableHeaderContentLetterSpacingUnits,
		pricingTableHeaderContentLineHeight,
		pricingTableHeaderContentLineHeightUnits,
		pricingTableHeaderContentColor,
		pricingTableHeaderContentMarginUnits,
		desktoppricingTableHeaderContentMargin,
		pricingTableHeaderContentDesktopMargin,
		pricingTableHeaderContentTabMargin,
		pricingTableHeaderContentMobileMargin,
		pricingTableHeaderContentMarginLink,

		pricingTablePricePrefix,
		pricingTablePricePrefixFontFamily,
		pricingTablePricePrefixFontSize,
		pricingTablePricePrefixFontSizeUnits,
		pricingTablePricePrefixFontWeight,
		pricingTablePricePrefixFontStyle,
		pricingTablePricePrefixTextTransform,
		pricingTablePricePrefixTextDecoration,
		pricingTablePricePrefixLetterSpacing,
		pricingTablePricePrefixLetterSpacingUnits,
		pricingTablePricePrefixLineHeight,
		pricingTablePricePrefixLineHeightUnits,
		pricingTablePricePrefixColor,

		// price prefix margin
		pricingTablePricePrefixMarginUnits,
		desktoppricingTablePricePrefixMargin,
		pricingTablePricePrefixDesktopMargin,
		pricingTablePricePrefixTabMargin,
		pricingTablePricePrefixMobileMargin,
		pricingTablePricePrefixMarginLink,

		// price amount
		pricingTablePriceAmount,
		pricingTablePriceAmountFontFamily,
		pricingTablePriceAmountFontSize,
		pricingTablePriceAmountFontSizeUnits,
		pricingTablePriceAmountFontWeight,
		pricingTablePriceAmountFontStyle,
		pricingTablePriceAmountTextTransform,
		pricingTablePriceAmountTextDecoration,
		pricingTablePriceAmountLetterSpacing,
		pricingTablePriceAmountLetterSpacingUnits,
		pricingTablePriceAmountLineHeight,
		pricingTablePriceAmountLineHeightUnits,
		pricingTablePriceAmountColor,

		// price amount margin
		pricingTablePriceAmountMarginUnits,
		desktoppricingTablePriceAmountMargin,
		pricingTablePriceAmountDesktopMargin,
		pricingTablePriceAmountTabMargin,
		pricingTablePriceAmountMobileMargin,
		pricingTablePriceAmountMarginLink,

		// price period
		pricingTablePricePeriod,
		pricingTablePricePeriodFontFamily,
		pricingTablePricePeriodFontSize,
		pricingTablePricePeriodFontSizeUnits,
		pricingTablePricePeriodFontWeight,
		pricingTablePricePeriodFontStyle,
		pricingTablePricePeriodTextTransform,
		pricingTablePricePeriodTextDecoration,
		pricingTablePricePeriodLetterSpacing,
		pricingTablePricePeriodLetterSpacingUnits,
		pricingTablePricePeriodLineHeight,
		pricingTablePricePeriodLineHeightUnits,
		pricingTablePricePeriodColor,
		pricingTablePricePeriodMarginUnits,
		desktoppricingTablePricePeriodMargin,
		pricingTablePricePeriodDesktopMargin,
		pricingTablePricePeriodTabMargin,
		pricingTablePricePeriodMobileMargin,
		pricingTablePricePeriodMarginLink,

		// Features
		DeviceType,
		FeatureItems,
		FeatureTag,
		FeatureIconShape,
		FeatureAlignment,
		FeatureIconAlignment,
		FeatureListGapDesktop,
		FeatureListGapTablet,
		FeatureListGapMobile,
		FeatureListGapUnits,
		FeatureIconColorSwitcher,
		FeatureIconColor,
		FeatureIconHoverColor,
		FeatureIconBgColorSwitcher,
		FeatureIconBgColor,
		FeatureIconBgHoverColor,
		FeatureIconSizeDesktop,
		FeatureIconSizeTablet,
		FeatureIconSizeMobile,
		FeatureIconSizeUnits,
		FeatureIconBgSizeDesktop,
		FeatureIconBgSizeTablet,
		FeatureIconBgSizeMobile,
		FeatureIconBgSizeUnits,
		FeatureIconSpacingDesktop,
		FeatureIconSpacingTablet,
		FeatureIconSpacingMobile,
		FeatureIconSpacingUnits,
		FeatureTitleFontFamily,
		FeatureTitleFontSizeDesktop,
		FeatureTitleFontSizeTablet,
		FeatureTitleFontSizeMobile,
		FeatureTitleFontSizeUnits,
		FeatureTitleFontWeight,
		FeatureTitleFontStyle,
		FeatureTitleTextTransform,
		FeatureTitleTextDecoration,
		FeatureTitleLetterSpacingDesktop,
		FeatureTitleLetterSpacingTablet,
		FeatureTitleLetterSpacingMobile,
		FeatureTitleLetterSpacingUnits,
		FeatureTitleLineHeightDesktop,
		FeatureTitleLineHeightTablet,
		FeatureTitleLineHeightMobile,
		FeatureTitleLineHeightUnits,
		FeatureTitleColorSwitcher,
		FeatureTitleColor,
		FeatureTitleHoverColor,
		FeatureDescFontFamily,
		FeatureDescFontSizeDesktop,
		FeatureDescFontSizeTablet,
		FeatureDescFontSizeMobile,
		FeatureDescFontSizeUnits,
		FeatureDescFontWeight,
		FeatureDescFontStyle,
		FeatureDescTextTransform,
		FeatureDescTextDecoration,
		FeatureDescLetterSpacingDesktop,
		FeatureDescLetterSpacingTablet,
		FeatureDescLetterSpacingMobile,
		FeatureDescLetterSpacingUnits,
		FeatureDescLineHeightDesktop,
		FeatureDescLineHeightTablet,
		FeatureDescLineHeightMobile,
		FeatureDescLineHeightUnits,
		FeatureDescColorSwitcher,
		FeatureDescColor,
		FeatureDescHoverColor,
		FeatureZIndex,
		FeaturePaddingUnits,
		FeatureDesktopPadding,
		FeatureTabPadding,
		FeatureMobilePadding,
		FeaturePaddingLink,
		FeatureMarginUnits,
		FeatureDesktopMargin,
		FeatureTabMargin,
		FeatureMobileMargin,
		FeatureMarginLink,
		FeatureBgColorSwitcher,
		FeatureBgColor,
		FeatureBgHoverColor,
		FeatureBorder,
		FeatureBorderColor,
		FeatureBorderHoverColor,
		FeatureBorderColorSwitcher,
		FeatureBorderUnits,
		FeatureDesktopBorderWidth,
		FeatureTabBorderWidth,
		FeatureMobileBorderWidth,
		FeatureBorderLink,
		FeatureBorderRadiusUnits,
		FeatureDesktopBorderRadiusWidth,
		FeatureTabBorderRadiusWidth,
		FeatureMobileBorderRadiusWidth,
		FeatureBorderRadiusLink,
		FeatureDesktopSwitcher,
		FeatureTabletSwitcher,
		FeatureMobileSwitcher,

	} = attributes;

	const blockProps = useBlockProps.save({});

	/** Default padding for desktop (using desktop_padding) */
	const DesktopPadding    = `${FeatureDesktopPadding.top}${FeaturePaddingUnits} ${FeatureDesktopPadding.right}${FeaturePaddingUnits} ${FeatureDesktopPadding.bottom}${FeaturePaddingUnits} ${FeatureDesktopPadding.left}${FeaturePaddingUnits}`;
	const TabPadding        = `${FeatureTabPadding.top}${FeaturePaddingUnits} ${FeatureTabPadding.right}${FeaturePaddingUnits} ${FeatureTabPadding.bottom}${FeaturePaddingUnits} ${FeatureTabPadding.left}${FeaturePaddingUnits}`;
	const MobilePadding     = `${FeatureMobilePadding.top}${FeaturePaddingUnits} ${FeatureMobilePadding.right}${FeaturePaddingUnits} ${FeatureMobilePadding.bottom}${FeaturePaddingUnits} ${FeatureMobilePadding.left}${FeaturePaddingUnits}`;
	/** End Padding */

	/** Default margin for desktop (using desktop_margin) */
	const DesktopMargin     = `${FeatureDesktopMargin.top}${FeatureMarginUnits} ${FeatureDesktopMargin.right}${FeatureMarginUnits} ${FeatureDesktopMargin.bottom}${FeatureMarginUnits} ${FeatureDesktopMargin.left}${FeatureMarginUnits}`;
	const TabMargin         = `${FeatureTabMargin.top}${FeatureMarginUnits} ${FeatureTabMargin.right}${FeatureMarginUnits} ${FeatureTabMargin.bottom}${FeatureMarginUnits} ${FeatureTabMargin.left}${FeatureMarginUnits}`;
	const MobileMargin      = `${FeatureMobileMargin.top}${FeatureMarginUnits} ${FeatureMobileMargin.right}${FeatureMarginUnits} ${FeatureMobileMargin.bottom}${FeatureMarginUnits} ${FeatureMobileMargin.left}${FeatureMarginUnits}`;
	/** End Margin */

	/** Default Border Width for desktop (using FeatureDesktopBorderWidth) */
	const DesktopBorderWidth    = `${FeatureDesktopBorderWidth.top}${FeatureBorderUnits} ${FeatureDesktopBorderWidth.right}${FeatureBorderUnits} ${FeatureDesktopBorderWidth.bottom}${FeatureBorderUnits} ${FeatureDesktopBorderWidth.left}${FeatureBorderUnits}`;
	const TabBorderWidth        = `${FeatureTabBorderWidth.top}${FeatureBorderUnits} ${FeatureTabBorderWidth.right}${FeatureBorderUnits} ${FeatureTabBorderWidth.bottom}${FeatureBorderUnits} ${FeatureTabBorderWidth.left}${FeatureBorderUnits}`;
	const MobileBorderWidth     = `${FeatureMobileBorderWidth.top}${FeatureBorderUnits} ${FeatureMobileBorderWidth.right}${FeatureBorderUnits} ${FeatureMobileBorderWidth.bottom}${FeatureBorderUnits} ${FeatureMobileBorderWidth.left}${FeatureBorderUnits}`;
	/** End Border Width */

	/** Default Border Width for desktop (using FeatureDesktopBorderWidth) */
	const DesktopBorderRadiusWidth = `${FeatureDesktopBorderRadiusWidth.top}${FeatureBorderRadiusUnits} ${FeatureDesktopBorderRadiusWidth.right}${FeatureBorderRadiusUnits} ${FeatureDesktopBorderRadiusWidth.bottom}${FeatureBorderRadiusUnits} ${FeatureDesktopBorderRadiusWidth.left}${FeatureBorderRadiusUnits}`;
	const TabBorderRadiusWidth = `${FeatureTabBorderRadiusWidth.top}${FeatureBorderRadiusUnits} ${FeatureTabBorderRadiusWidth.right}${FeatureBorderRadiusUnits} ${FeatureTabBorderRadiusWidth.bottom}${FeatureBorderRadiusUnits} ${FeatureTabBorderRadiusWidth.left}${FeatureBorderRadiusUnits}`;
	const MobileBorderRadiusWidth = `${FeatureMobileBorderRadiusWidth.top}${FeatureBorderRadiusUnits} ${FeatureMobileBorderRadiusWidth.right}${FeatureBorderRadiusUnits} ${FeatureMobileBorderRadiusWidth.bottom}${FeatureBorderRadiusUnits} ${FeatureMobileBorderRadiusWidth.left}${FeatureBorderRadiusUnits}`;
	/** End Border Radius Width */


	return (
		<>
			<style>
				{`
                .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper {
                    z-index: ${FeatureZIndex !== undefined ? FeatureZIndex : ''};
                }
                .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper {
                    ${FeatureBgColor !== undefined ? `background-color: ${FeatureBgColor};` : ''};
                    padding: ${DesktopPadding};
                    margin: ${DesktopMargin};
                    border: ${FeatureBorder};
                    border-width: ${DesktopBorderWidth};
                    border-radius: ${DesktopBorderRadiusWidth} !important;
                    ${FeatureBorderColor !== undefined ? `border-color: ${FeatureBorderColor};` : ''};
                    transition: all .3s ease-in-out;
                }

                .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-item:not(:last-child) {
                    padding-bottom: calc(${FeatureListGapDesktop}${FeatureListGapUnits} / 2);
                }
                .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-item:not(:first-child) {
                    padding-top: calc(${FeatureListGapDesktop}${FeatureListGapUnits} / 2);
                }
                .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon svg {
                    fill: ${FeatureIconColor};
                    height: ${FeatureIconSizeDesktop}${FeatureIconSizeUnits};
                    width: ${FeatureIconSizeDesktop}${FeatureIconSizeUnits};
                }
                .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon-box {
                    margin-right: ${FeatureIconSpacingDesktop}${FeatureIconSpacingUnits}!important;
                }
                .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon-inner {
                    background-color: ${FeatureIconBgColor};
                    border-color: ${FeatureIconBgColor};
                }

                .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon {
                    width: ${FeatureIconBgSizeDesktop}${FeatureIconBgSizeUnits};
                    height: ${FeatureIconBgSizeDesktop}${FeatureIconBgSizeUnits};
                }

                 .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-content ${FeatureTag} {
                    font-family: ${FeatureTitleFontFamily};
                    font-size: ${FeatureTitleFontSizeDesktop}${FeatureTitleFontSizeUnits};
                    font-weight: ${FeatureTitleFontWeight};
                    font-style: ${FeatureTitleFontStyle};
                    text-transform: ${FeatureTitleTextTransform};
                    text-decoration: ${FeatureTitleTextDecoration};
                    letter-spacing: ${FeatureTitleLetterSpacingDesktop}${FeatureTitleLetterSpacingUnits};
                    line-height: ${FeatureTitleLineHeightDesktop}${FeatureTitleLineHeightUnits};
                    color: ${FeatureTitleColor};
                }

                .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-content .fb-feature-list-text {
                    font-family: ${FeatureDescFontFamily};
                    font-size: ${FeatureDescFontSizeDesktop}${FeatureDescFontSizeUnits};
                    font-weight: ${FeatureDescFontWeight};
                    font-style: ${FeatureDescFontStyle};
                    text-transform: ${FeatureDescTextTransform};
                    text-decoration: ${FeatureDescTextDecoration};
                    letter-spacing: ${FeatureDescLetterSpacingDesktop}${FeatureDescLetterSpacingUnits};
                    line-height: ${FeatureDescLineHeightDesktop}${FeatureDescLineHeightUnits};
                    color: ${FeatureDescColor};
                }

                @media only screen and (max-width: 1024px) {

                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper {
                        padding: ${TabPadding};
                        margin: ${TabMargin};
                        border-width: ${TabBorderWidth};
                        border-radius: ${TabBorderRadiusWidth} !important;
                    }

                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-item:not(:last-child) {
                        padding-bottom: calc(${FeatureListGapTablet}${FeatureListGapUnits} / 2);
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-item:not(:first-child) {
                        padding-top: calc(${FeatureListGapTablet}${FeatureListGapUnits} / 2);
                    }

                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon svg {
                        height: ${FeatureIconSizeTablet}${FeatureIconSizeUnits};
                        width: ${FeatureIconSizeTablet}${FeatureIconSizeUnits};
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon {
                        width: ${FeatureIconBgSizeTablet}${FeatureIconBgSizeUnits};
                        height: ${FeatureIconBgSizeTablet}${FeatureIconBgSizeUnits};
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon-box {
                        margin-right: ${FeatureIconSpacingTablet}${FeatureIconSpacingUnits}!important;
                    }

                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-content ${FeatureTag} {
                        font-size: ${FeatureTitleFontSizeTablet}${FeatureTitleFontSizeUnits};
                        letter-spacing: ${FeatureTitleLetterSpacingTablet}${FeatureTitleLetterSpacingUnits};
                        line-height: ${FeatureTitleLineHeightTablet}${FeatureTitleLineHeightUnits};
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-content .fb-feature-list-text {
                        font-size: ${FeatureDescFontSizeTablet}${FeatureDescFontSizeUnits};
                        letter-spacing: ${FeatureDescLetterSpacingTablet}${FeatureDescLetterSpacingUnits};
                        line-height: ${FeatureDescLineHeightTablet}${FeatureDescLineHeightUnits};
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper {
                        padding: ${MobilePadding};
                        margin: ${MobileMargin};
                        border-width: ${MobileBorderWidth};
                        border-radius: ${MobileBorderRadiusWidth} !important;
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-item:not(:last-child) {
                        padding-bottom: calc(${FeatureListGapMobile}${FeatureListGapUnits} / 2);
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-item:not(:first-child) {
                        padding-top: calc(${FeatureListGapMobile}${FeatureListGapUnits} / 2);
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon svg {
                        height: ${FeatureIconSizeMobile}${FeatureIconSizeUnits};
                        width: ${FeatureIconSizeMobile}${FeatureIconSizeUnits};
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon {
                        width: ${FeatureIconBgSizeMobile}${FeatureIconBgSizeUnits};
                        height: ${FeatureIconBgSizeMobile}${FeatureIconBgSizeUnits};
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon-box {
                        margin-right: ${FeatureIconSpacingMobile}${FeatureIconSpacingUnits}!important;
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-content ${FeatureTag} {
                        font-size: ${FeatureTitleFontSizeMobile}${FeatureTitleFontSizeUnits};
                        letter-spacing: ${FeatureTitleLetterSpacingMobile}${FeatureTitleLetterSpacingUnits};
                        line-height: ${FeatureTitleLineHeightMobile}${FeatureTitleLineHeightUnits};
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-content .fb-feature-list-text {
                        font-size: ${FeatureDescFontSizeMobile}${FeatureDescFontSizeUnits};
                        letter-spacing: ${FeatureDescLetterSpacingMobile}${FeatureDescLetterSpacingUnits};
                        line-height: ${FeatureDescLineHeightMobile}${FeatureDescLineHeightUnits};
                    }
                }

            `}
			</style>

			<div {...blockProps} id={blockID}>
				<div className={`fb-pricing-table-wrapper ${blockID}`}>
					<div className={`fb-pricing-table-item`}>
						<div className={`fb-pricing-table-icon`}>

						</div>
						<div className={`fb-pricing-table-header`}>
							{pricingTableHeaderName}
							{pricingTableHeaderContent}
						</div>
						<div className={`fb-pricing-table-price-wrapper`}>
							<div className={`fb-pricing-table-price`}>
								{pricingTablePricePrefix}
								{pricingTablePriceAmount}
							</div>
							{pricingTablePricePeriod}
						</div>
						<div className={`fb-feature-main-wrapper`}>
							<div className="fb-feature-wrapper">
								<div className="fb-feature-list-wrapper">
									<div className="fb-feature-list-items">
										{FeatureItems.map(item => (
											<div key={item.id} className="fb-feature-list-item">
												<div className="fb-feature-list-icon-box">
													<span className="fb-feature-list-icon">
														{renderSVG(item.FeatureIcon)}
													</span>
												</div>
												<div className="fb-feature-list-content">
													<RichText.Content
														tagName={'span'}
														className="fb-feature-list-title"
														value={item.Title}
													/>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
