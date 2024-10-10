import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
    const {
        blockId,
        deviceType,
        buttonAlignment,
        buttonText,
        buttonUrl,
        buttonTargetUrl,
        buttonWidth,
        buttonWidthUnits,

        buttonFontFamily,
        buttonFontSize,
        buttonFontSizeUnits,
        buttonFontWeight,
        buttonFontStyle,
        buttonTextTransform,
        buttonTextDecoration,
        buttonLetterSpacing,
        buttonLetterSpacingUnits,
        buttonLineHeight,
        buttonLineHeightUnits,

        buttonColorSwitcher,
        buttonColor,
        buttonHoverColor,
        buttonBgColorSwitcher,
        buttonBgColor,
        buttonBgHoverColor,
        buttonBorder,
        buttonBorderColorSwitcher,
        buttonBorderColor,
        buttonBorderHoverColor,

        buttonBorderUnits,
        buttonDesktopBorderWidth,
        buttonTabBorderWidth,
        buttonMobileBorderWidth,
        buttonBorderLink,

        buttonBorderRadiusUnits,
        buttonDesktopBorderRadiusWidth,
        buttonTabBorderRadiusWidth,
        buttonMobileBorderRadiusWidth,
        buttonBorderRadiusLink,

        buttonboxShadowValues,
        buttonboxShadowCssValue,

        buttonPaddingUnits,
        buttonDesktopPadding,
        buttonTabPadding,
        buttonMobilePadding,
        buttonPaddingLink,

        buttonMarginUnits,
        buttonDesktopMargin,
        buttonTabMargin,
        buttonMobileMargin,
        buttonMarginLink,

        buttonIconAlign,
        buttonIcon,
        buttonZIndex,
        buttonZIndexUnits,
    } = attributes;

    const blockProps = useBlockProps.save();

    /** Default padding for each device */
    const buttonDesktopPaddingValue = `${buttonDesktopPadding.top}${buttonPaddingUnits.Desktop} ${buttonDesktopPadding.right}${buttonPaddingUnits.Desktop} ${buttonDesktopPadding.bottom}${buttonPaddingUnits.Desktop} ${buttonDesktopPadding.left}${buttonPaddingUnits.Desktop}`;
    const buttonTabletPaddingValue = `${buttonTabPadding.top}${buttonPaddingUnits.Tablet} ${buttonTabPadding.right}${buttonPaddingUnits.Tablet} ${buttonTabPadding.bottom}${buttonPaddingUnits.Tablet} ${buttonTabPadding.left}${buttonPaddingUnits.Tablet}`;
    const buttonMobilePaddingValue = `${buttonMobilePadding.top}${buttonPaddingUnits.Mobile} ${buttonMobilePadding.right}${buttonPaddingUnits.Mobile} ${buttonMobilePadding.bottom}${buttonPaddingUnits.Mobile} ${buttonMobilePadding.left}${buttonPaddingUnits.Mobile}`;
    /** End Padding */


    /** Default margin for each device */
    const buttonDesktopMarginValue = `${buttonDesktopMargin.top}${buttonMarginUnits.Desktop} ${buttonDesktopMargin.right}${buttonMarginUnits.Desktop} ${buttonDesktopMargin.bottom}${buttonMarginUnits.Desktop} ${buttonDesktopMargin.left}${buttonMarginUnits.Desktop}`;
    const buttonTabletMarginValue = `${buttonTabMargin.top}${buttonMarginUnits.Tablet} ${buttonTabMargin.right}${buttonMarginUnits.Tablet} ${buttonTabMargin.bottom}${buttonMarginUnits.Tablet} ${buttonTabMargin.left}${buttonMarginUnits.Tablet}`;
    const buttonMobileMarginValue = `${buttonMobileMargin.top}${buttonMarginUnits.Mobile} ${buttonMobileMargin.right}${buttonMarginUnits.Mobile} ${buttonMobileMargin.bottom}${buttonMarginUnits.Mobile} ${buttonMobileMargin.left}${buttonMarginUnits.Mobile}`;
    /** End margin */

    /** Default border width for different devices */
    const buttonDesktopBorderWidthValue = `${buttonDesktopBorderWidth.top}${buttonBorderUnits.Desktop} ${buttonDesktopBorderWidth.right}${buttonBorderUnits.Desktop} ${buttonDesktopBorderWidth.bottom}${buttonBorderUnits.Desktop} ${buttonDesktopBorderWidth.left}${buttonBorderUnits.Desktop}`;
    const buttonTabletBorderWidthValue = `${buttonTabBorderWidth.top}${buttonBorderUnits.Tablet} ${buttonTabBorderWidth.right}${buttonBorderUnits.Tablet} ${buttonTabBorderWidth.bottom}${buttonBorderUnits.Tablet} ${buttonTabBorderWidth.left}${buttonBorderUnits.Tablet}`;
    const buttonMobileBorderWidthValue = `${buttonMobileBorderWidth.top}${buttonBorderUnits.Mobile} ${buttonMobileBorderWidth.right}${buttonBorderUnits.Mobile} ${buttonMobileBorderWidth.bottom}${buttonBorderUnits.Mobile} ${buttonMobileBorderWidth.left}${buttonBorderUnits.Mobile}`;
    /** End border width */

    /** Default border radius for different devices */
    const buttonDesktopBorderRadiusValue = `${buttonDesktopBorderRadiusWidth.top}${buttonBorderRadiusUnits.Desktop} ${buttonDesktopBorderRadiusWidth.right}${buttonBorderRadiusUnits.Desktop} ${buttonDesktopBorderRadiusWidth.bottom}${buttonBorderRadiusUnits.Desktop} ${buttonDesktopBorderRadiusWidth.left}${buttonBorderRadiusUnits.Desktop}`;
    const buttonTabletBorderRadiusValue = `${buttonTabBorderRadiusWidth.top}${buttonBorderRadiusUnits.Tablet} ${buttonTabBorderRadiusWidth.right}${buttonBorderRadiusUnits.Tablet} ${buttonTabBorderRadiusWidth.bottom}${buttonBorderRadiusUnits.Tablet} ${buttonTabBorderRadiusWidth.left}${buttonBorderRadiusUnits.Tablet}`;
    const buttonMobileBorderRadiusValue = `${buttonMobileBorderRadiusWidth.top}${buttonBorderRadiusUnits.Mobile} ${buttonMobileBorderRadiusWidth.right}${buttonBorderRadiusUnits.Mobile} ${buttonMobileBorderRadiusWidth.bottom}${buttonBorderRadiusUnits.Mobile} ${buttonMobileBorderRadiusWidth.left}${buttonBorderRadiusUnits.Mobile}`;
    /** End border radius */

    return (
        <>

        <style>
            {`
                .fb-advanced-button-wrapper.${blockId} .fb-advanced-button {
                    ${buttonBgColor ? `background-color: ${buttonBgColor};` : ''}
                    ${buttonFontFamily ? `font-family: ${buttonFontFamily};` : ''}
                    ${buttonFontSize.Desktop && buttonFontSizeUnits.Desktop ? `font-size: ${buttonFontSize.Desktop}${buttonFontSizeUnits.Desktop};` : ''}
                    ${buttonFontWeight ? `font-weight: ${buttonFontWeight};` : ''}
                    ${buttonFontStyle ? `font-style: ${buttonFontStyle};` : ''}
                    ${buttonTextTransform ? `text-transform: ${buttonTextTransform};` : ''}
                    ${buttonTextDecoration ? `text-decoration: ${buttonTextDecoration};` : ''}
                    ${buttonLetterSpacing.Desktop && buttonLetterSpacingUnits.Desktop ? `letter-spacing: ${buttonLetterSpacing.Desktop}${buttonLetterSpacingUnits.Desktop};` : ''}
                    ${buttonLineHeight.Desktop && buttonLineHeightUnits.Desktop ? `line-height: ${buttonLineHeight.Desktop}${buttonLineHeightUnits.Desktop};` : ''}
                    ${buttonDesktopPaddingValue ? `padding: ${buttonDesktopPaddingValue};` : ''}
                    ${buttonDesktopMarginValue ? `margin: ${buttonDesktopMarginValue};` : ''}
                    ${buttonBorder ? `border: ${buttonBorder};` : ''}
                    ${buttonDesktopBorderWidthValue ? `border-width: ${buttonDesktopBorderWidthValue};` : ''}
                    ${buttonDesktopBorderRadiusValue ? `border-radius: ${buttonDesktopBorderRadiusValue};` : ''}
                    ${buttonBorderColor ? `border-color: ${buttonBorderColor};` : ''}
                    ${buttonboxShadowCssValue ? `box-shadow: ${buttonboxShadowCssValue};` : ''}
                    ${buttonZIndex.Desktop && buttonZIndexUnits.Desktop ? `z-index: ${buttonZIndex.Desktop}${buttonZIndexUnits.Desktop};` : ''}
                    ${buttonWidth.Desktop && buttonWidthUnits.Desktop ? `width: ${buttonWidth.Desktop}${buttonWidthUnits.Desktop};` : ''}
                    display: ${buttonAlignment === 'justify' ? 'flex' : 'inline-flex'};
                }
                .fb-advanced-button-wrapper.${blockId} .fb-advanced-button .fb-advanced-button-text {
                    ${buttonColor !== undefined ? `color: ${buttonColor};` : ''}
                }
                .fb-advanced-button-wrapper.${blockId} .fb-advanced-button:hover .fb-advanced-button-text {
                    ${buttonHoverColor !== undefined ? `color: ${buttonHoverColor};` : ''}
                }

                .fb-advanced-button-wrapper.${blockId} .fb-advanced-button:hover {
                    ${buttonBgHoverColor !== undefined ? `background-color: ${buttonBgHoverColor};` : ''}
                }
                @media only screen and (max-width: 1024px) {
                    .fb-advanced-button-wrapper.${blockId} .fb-advanced-button {
                        ${buttonTabletPaddingValue ? `padding: ${buttonTabletPaddingValue};` : ''}
                        ${buttonTabletMarginValue ? `margin: ${buttonTabletMarginValue};` : ''}
                        ${buttonBorder ? `border: ${buttonBorder};` : ''}
                        ${buttonTabletBorderWidthValue ? `border-width: ${buttonTabletBorderWidthValue};` : ''}
                        ${buttonTabletBorderRadiusValue ? `border-radius: ${buttonTabletBorderRadiusValue};` : ''}
                        ${buttonWidth.Tablet && buttonWidthUnits.Tablet ? `width: ${buttonWidth.Tablet}${buttonWidthUnits.Tablet};` : ''}
                        ${buttonFontSize.Tablet && buttonFontSizeUnits.Tablet ? `font-size: ${buttonFontSize.Tablet}${buttonFontSizeUnits.Tablet};` : ''}
                        ${buttonLetterSpacing.Tablet && buttonLetterSpacingUnits.Tablet ? `letter-spacing: ${buttonLetterSpacing.Tablet}${buttonLetterSpacingUnits.Tablet};` : ''}
                        ${buttonLineHeight.Tablet && buttonLineHeightUnits.Tablet ? `line-height: ${buttonLineHeight.Tablet}${buttonLineHeightUnits.Tablet};` : ''}
                        ${buttonZIndex.Tablet && buttonZIndexUnits.Tablet ? `z-index: ${buttonZIndex.Tablet}${buttonZIndexUnits.Tablet};` : ''}
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-advanced-button-wrapper.${blockId} .fb-advanced-button {
                        ${buttonMobilePaddingValue ? `padding: ${buttonMobilePaddingValue};` : ''}
                        ${buttonMobileMarginValue ? `margin: ${buttonMobileMarginValue};` : ''}
                        ${buttonBorder ? `border: ${buttonBorder};` : ''}
                        ${buttonMobileBorderWidthValue ? `border-width: ${buttonMobileBorderWidthValue};` : ''}
                        ${buttonMobileBorderRadiusValue ? `border-radius: ${buttonMobileBorderRadiusValue};` : ''}
                        ${buttonWidth.Mobile && buttonWidthUnits.Mobile ? `width: ${buttonWidth.Mobile}${buttonWidthUnits.Mobile};` : ''}
                        ${buttonFontSize.Mobile && buttonFontSizeUnits.Mobile ? `font-size: ${buttonFontSize.Mobile}${buttonFontSizeUnits.Mobile};` : ''}
                        ${buttonLetterSpacing.Mobile && buttonLetterSpacingUnits.Mobile ? `letter-spacing: ${buttonLetterSpacing.Mobile}${buttonLetterSpacingUnits.Mobile};` : ''}
                        ${buttonLineHeight.Mobile && buttonLineHeightUnits.Mobile ? `line-height: ${buttonLineHeight.Mobile}${buttonLineHeightUnits.Mobile};` : ''}
                        ${buttonZIndex.Mobile && buttonZIndexUnits.Mobile ? `z-index: ${buttonZIndex.Mobile}${buttonZIndexUnits.Mobile};` : ''}
                }
            `}
            </style>

            <div {...blockProps} id={blockId}>
                <div className={`fb-advanced-button-wrapper ${blockId}`} style={{ textAlign: buttonAlignment }}>
                    <a 
                        className="fb-advanced-button" 
                        href={buttonUrl} 
                        target={buttonTargetUrl ? '_blank' : undefined}
                        rel={buttonTargetUrl ? 'noopener noreferrer' : undefined}
                    >
                        <RichText.Content
                            tagName="span"
                            value={buttonText}
                            className="fb-advanced-button-text"
                        />
                        {buttonIcon && buttonIconAlign === 'icon' && (
                            <div className="fb-advanced-button-icon">{renderSVG(buttonIcon)}</div>
                        )}
                    </a>
                </div>
            </div>
        </>
    );
}
