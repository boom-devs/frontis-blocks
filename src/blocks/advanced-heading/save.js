import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { 
        blockId,
        deviceType,
        headingText, 
        headingTag,
        headingBackgroundColor,
        headingAlignment,
        separator,
        subHeadingSwitcher,
        showSeparatorSwitcher,
        subHeadingText,
        subHeadingTag,
        separatorPosition,
        subHeadingPosition,
        headingFontFamily,
        headingFontSize,
        headingFontSizeUnits,
        headingFontWeight,
        headingFontStyle,
        headingTextTransform,
        headingTextDecoration,
        headingLetterSpacing,
        headingLineHeight,
        headingLetterSpacingUnits,
        headingLineHeightUnits,
        headingColor,
        headingHoverColor,
        headingBorder,
        headingBorderColor,
        headingBorderHoverColor,
        headingBorderUnits,
        headingDesktopBorder,
        headingTabBorder,
        headingMobileBorder,
        headingBorderRadiusUnits,
        headingDesktopBorderRadius,
        headingTabBorderRadius,
        headingMobileBorderRadius,
        headingPaddingUnits,
        headingDesktopPadding,
        headingTabPadding,
        headingMobilePadding,
        headingMarginUnits,
        headingDesktopMargin,
        headingTabMargin,
        headingMobileMargin,
        headingZIndex,
        headingZIndexUnits,

    } = attributes;

    const blockProps = useBlockProps.save({
        id: blockId,
    });

    /** Default padding for Heading */
    const headingDesktopPaddingWidth = `${headingDesktopPadding.top}${headingPaddingUnits.Desktop} ${headingDesktopPadding.right}${headingPaddingUnits.Desktop} ${headingDesktopPadding.bottom}${headingPaddingUnits.Desktop} ${headingDesktopPadding.left}${headingPaddingUnits.Desktop}`;
    const headingTabletPaddingWidth = `${headingTabPadding.top}${headingPaddingUnits.Tablet} ${headingTabPadding.right}${headingPaddingUnits.Tablet} ${headingTabPadding.bottom}${headingPaddingUnits.Tablet} ${headingTabPadding.left}${headingPaddingUnits.Tablet}`;
    const headingMobilePaddingWidth = `${headingMobilePadding.top}${headingPaddingUnits.Mobile} ${headingMobilePadding.right}${headingPaddingUnits.Mobile} ${headingMobilePadding.bottom}${headingPaddingUnits.Mobile} ${headingMobilePadding.left}${headingPaddingUnits.Mobile}`;
    /** End Heading Padding */

    /** Default margin for Heading */
    const headingDesktopMarginWidth = `${headingDesktopMargin.top}${headingMarginUnits.Desktop} ${headingDesktopMargin.right}${headingMarginUnits.Desktop} ${headingDesktopMargin.bottom}${headingMarginUnits.Desktop} ${headingDesktopMargin.left}${headingMarginUnits.Desktop}`;
    const headingTabletMarginWidth = `${headingTabMargin.top}${headingMarginUnits.Tablet} ${headingTabMargin.right}${headingMarginUnits.Tablet} ${headingTabMargin.bottom}${headingMarginUnits.Tablet} ${headingTabMargin.left}${headingMarginUnits.Tablet}`;
    const headingMobileMarginWidth = `${headingMobileMargin.top}${headingMarginUnits.Mobile} ${headingMobileMargin.right}${headingMarginUnits.Mobile} ${headingMobileMargin.bottom}${headingMarginUnits.Mobile} ${headingMobileMargin.left}${headingMarginUnits.Mobile}`;
    /** End Heading Margin */

    /** Default border for Heading */
    const headingDesktopBorderWidth = `${headingDesktopBorder.top}${headingBorderUnits.Desktop} ${headingDesktopBorder.right}${headingBorderUnits.Desktop} ${headingDesktopBorder.bottom}${headingBorderUnits.Desktop} ${headingDesktopBorder.left}${headingBorderUnits.Desktop}`;
    const headingTabletBorderWidth = `${headingTabBorder.top}${headingBorderUnits.Tablet} ${headingTabBorder.right}${headingBorderUnits.Tablet} ${headingTabBorder.bottom}${headingBorderUnits.Tablet} ${headingTabBorder.left}${headingBorderUnits.Tablet}`;
    const headingMobileBorderWidth = `${headingMobileBorder.top}${headingBorderUnits.Mobile} ${headingMobileBorder.right}${headingBorderUnits.Mobile} ${headingMobileBorder.bottom}${headingBorderUnits.Mobile} ${headingMobileBorder.left}${headingBorderUnits.Mobile}`;
    /** End Heading Border */

    /** Default border radius for Heading */
    const headingDesktopBorderRadiusWidth = `${headingDesktopBorderRadius.top}${headingBorderRadiusUnits.Desktop} ${headingDesktopBorderRadius.right}${headingBorderRadiusUnits.Desktop} ${headingDesktopBorderRadius.bottom}${headingBorderRadiusUnits.Desktop} ${headingDesktopBorderRadius.left}${headingBorderRadiusUnits.Desktop}`;
    const headingTabletBorderRadiusWidth = `${headingTabBorderRadius.top}${headingBorderRadiusUnits.Tablet} ${headingTabBorderRadius.right}${headingBorderRadiusUnits.Tablet} ${headingTabBorderRadius.bottom}${headingBorderRadiusUnits.Tablet} ${headingTabBorderRadius.left}${headingBorderRadiusUnits.Tablet}`;
    const headingMobileBorderRadiusWidth = `${headingMobileBorderRadius.top}${headingBorderRadiusUnits.Mobile} ${headingMobileBorderRadius.right}${headingBorderRadiusUnits.Mobile} ${headingMobileBorderRadius.bottom}${headingBorderRadiusUnits.Mobile} ${headingMobileBorderRadius.left}${headingBorderRadiusUnits.Mobile}`;
    /** End Heading Border Radius */


    return (
        <>
            <style>
            {`
                .fb-advanced-wrapper.${blockId} .fb-advanced {
                    ${headingColor ? `color: ${headingColor};` : ''}
                    ${headingBackgroundColor ? `background-color: ${headingBackgroundColor};` : ''}
                    ${headingFontFamily ? `font-family: ${headingFontFamily};` : ''}
                    ${headingFontSize.Desktop && headingFontSizeUnits.Desktop ? `font-size: ${headingFontSize.Desktop}${headingFontSizeUnits.Desktop};` : ''}
                    ${headingFontWeight ? `font-weight: ${headingFontWeight};` : ''}
                    ${headingFontStyle ? `font-style: ${headingFontStyle};` : ''}
                    ${headingTextTransform ? `text-transform: ${headingTextTransform};` : ''}
                    ${headingTextDecoration ? `text-decoration: ${headingTextDecoration};` : ''}
                    ${headingLetterSpacing.Desktop && headingLetterSpacingUnits.Desktop ? `letter-spacing: ${headingLetterSpacing.Desktop}${headingLetterSpacingUnits.Desktop};` : ''}
                    ${headingLineHeight.Desktop && headingLineHeightUnits.Desktop ? `line-height: ${headingLineHeight.Desktop}${headingLineHeightUnits.Desktop};` : ''}
                    ${headingDesktopPaddingWidth ? `padding: ${headingDesktopPaddingWidth};` : ''}
                    ${headingDesktopMarginWidth ? `margin: ${headingDesktopMarginWidth};` : ''}
                    ${headingBorder ? `border: ${headingBorder};` : ''} 
                    ${headingDesktopBorderWidth ? `border-width: ${headingDesktopBorderWidth};` : ''}
                    ${headingDesktopBorderRadiusWidth ? `border-radius: ${headingDesktopBorderRadiusWidth};` : ''}
                    ${headingBorderColor ? `border-color: ${headingBorderColor};` : ''}
                     transition: all .3s ease-in-out;
                    ${headingZIndex.Desktop && headingZIndexUnits.Desktop  ? `z-index: ${headingZIndex.Desktop}${headingZIndexUnits.Desktop};` : ''}
                }
                .fb-advanced-wrapper.${blockId} .fb-advanced:hover {
                    ${headingHoverColor !== undefined ? `color: ${headingHoverColor};` : ''}
                    ${headingBorderHoverColor !== undefined ? `border-color: ${headingBorderHoverColor};` : ''}
                }

                .fb-advanced-wrapper.${blockId} .fb-advanced-title-separator {
                    display: inline-block;
                    margin: 0 0 10px 0;
                    width: 12%;
                    margin-bottom: 15px;
                    border-top: 2px ${separator} #0170b9;
                }

                @media only screen and (max-width: 1024px) {
                    .fb-advanced-wrapper.${blockId} .fb-advanced {
                        ${headingTabletPaddingWidth ? `padding: ${headingTabletPaddingWidth};` : ''}
                        ${headingTabletMarginWidth ? `margin: ${headingTabletMarginWidth};` : ''}
                        ${headingTabletBorderWidth ? `border-width: ${headingTabletBorderWidth};` : ''}
                        ${headingTabletBorderRadiusWidth ? `border-radius: ${headingTabletBorderRadiusWidth};` : ''}
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-advanced-wrapper.${blockId} .fb-advanced {
                        ${headingMobilePaddingWidth ? `padding: ${headingMobilePaddingWidth};` : ''}
                        ${headingMobileMarginWidth ? `margin: ${headingMobileMarginWidth};` : ''}
                        ${headingMobileBorderWidth ? `border-width: ${headingMobileBorderWidth};` : ''}
                        ${headingMobileBorderRadiusWidth ? `border-radius: ${headingMobileBorderRadiusWidth};` : ''}
                    }
                }
            `}
            </style>

            <div {...blockProps}>
                <div className={`fb-advanced-wrapper ${blockId}`} style={{textAlign: headingAlignment}}>
                    {showSeparatorSwitcher && separatorPosition === "top" && (
                        <div className='fb-advanced-title-separator'></div>
                    )}

                    {subHeadingSwitcher && subHeadingPosition === 'top' && ( 
                        <RichText.Content
                            tagName={subHeadingTag}
                            value={subHeadingText}
                        />
                    )}
                    
                    <RichText.Content
                        tagName={headingTag}
                        value={headingText}
                        className="fb-advanced"
                    />

                    {subHeadingSwitcher && subHeadingPosition === 'bottom' && ( 
                        <RichText.Content
                            tagName={subHeadingTag}
                            value={subHeadingText}
                        />
                    )}
                    
                    {showSeparatorSwitcher && separatorPosition === "bottom" && (
                        <div className='fb-advanced-title-separator'></div>
                    )}
                </div>
            </div>
        </>
    );
}
