import { useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {

    const { 
        blockID,
        deviceType,
        
        classHook,
        accordionType,
        displayIcon,
        tabIcon,
        expandedIcon,
        tagName,
        faqSchema,
        accordionChildCount,

        titleFontFamily,
        titleFontSize,
        titleFontSizeUnits,
        titleFontWeight,
        titleFontStyle,
        titleTextTransform,
        titleTextDecoration,
        titleLetterSpacing,
        titleLetterSpacingUnits,
        titleLineHeight,
        titleLineHeightUnits,

        iconPosition,
        titleAlignment,

        titleColor,
        titleHoverColor,

        accordionItemGap,
        accordionItemGapUnits,

        titleSpacing,
        titleSpacingUnits,

        prefixSuffixSpacing,
        prefixSuffixSpacingUnits,

        titleIconSize,
        titleIconSizeUnits,

        titlePrefixIconSize,
        titlePrefixIconSizeUnits,
        
        titleSuffixIconSize,
        titleSuffixIconSizeUnits,

        titleBGColor,
        titleBGHoverColor,

        titleIconColor,
        titleIconHoverColor,

        // Accordion Items
        accordionItemsPaddingUnits,
        accordionItemsDesktopPadding,
        accordionItemsTabPadding,
        accordionItemsMobilePadding,

        accordionItemsBorder,
        accordionItemsBorderColor,
        accordionItemsBorderHoverColor,
        
        accordionItemsBorderUnits,
        accordionItemsDesktopBorderWidth,
        accordionItemsTabBorderWidth,
        accordionItemsMobileBorderWidth,

        accordionItemsBorderRadiusUnits,
        accordionItemsDesktopBorderRadiusWidth,
        accordionItemsTabBorderRadiusWidth,
        accordionItemsMobileBorderRadiusWidth,

        // Accordion Advance
        accordionZIndex,
        accordionPaddingUnits,
        accordionDesktopPadding,
        accordionTabPadding,
        accordionMobilePadding,

        accordionMarginUnits,
        accordionDesktopMargin,
        accordionTabMargin,
        accordionMobileMargin,

        accordionBgColor,
        accordionBgHoverColor,
        accordionBorder,
        accordionBorderColor,
        accordionBorderHoverColor,

        accordionBorderUnits,
        accordionDesktopBorderWidth,
        accordionTabBorderWidth,
        accordionMobileBorderWidth,

        accordionBorderRadiusUnits,
        accordionDesktopBorderRadiusWidth,
        accordionTabBorderRadiusWidth,
        accordionMobileBorderRadiusWidth,

        accordionDesktopSwitcher,
        accordionTabletSwitcher,
        accordionMobileSwitcher,

    } = attributes;


    const blockProps = useBlockProps.save({
        className: `fb-accordion-main-wrapper ${blockID}`,
    });


    return (
        <>
            <div {...blockProps}>
                <div
                    className={`fb-parent-wrapper fb-parent-${blockID} ${classHook}`}
                >
                    <div className={`fb-accordion-container`}>
                        <div className="fb-accordion-inner">
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
