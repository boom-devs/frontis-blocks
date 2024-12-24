import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, useInnerBlocksProps, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useEffect, useMemo } from "@wordpress/element";
import { select, dispatch } from "@wordpress/data";
import { times } from 'lodash';
import { createBlock } from "@wordpress/blocks";
import './editor.scss';
import Inspector from './inspector';


const ALLOWED_BLOCKS = ["frontis-blocks/accordion-item"]; 


export default function Edit({ attributes, setAttributes, clientId, isSelected }) {

    const { 
        blockID,
        blockStyle,
        deviceType,
        
        classHook,
        accordionType,
        displayIcon,
        tabIconSwitcher,
        tabIcon,
        tabImageUrl,
        tabImageAlt,
        tabImageID,
        tabImagePosition,
        tabImageAttachment,
        tabImageRepeat,
        tabImageSize,
        expandedIconSwitcher,
        expandedIcon,
        expandedImageUrl,
        expandedImageAlt,
        expandedImageID,
        expandedImagePosition,
        expandedImageAttachment,
        expandedImageRepeat,
        expandedImageSize,
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

        // Boxshadow
        accordionGlobalBoxShadowValues,
        accordionGlobalBoxShadowCssValue,

        // Backgorund
        accordionBgColorSwitcher,
        accordionBgType,
        accordionBgClassicColor,
        accordionBgGradientColor,
        accordionBgCustomGradientSwitcher,
        accordionBgCustomGradientInputValue,
        accordionBgImageUrl,
        accordionBgImageAlt,
        accordionBgImageID,
        accordionBgImagePosition,
        accordionBgImageAttachment,
        accordionBgImageRepeat,
        accordionBgImageSize,
        accordionBgHoverType,
        accordionBgHoverClassicColor,
        accordionBgHoverGradientColor,
        accordionBgHoverCustomGradientSwitcher,
        accordionBgHoverCustomGradientInputValue,
        accordionBgHoverImageUrl,
        accordionBgHoverImageAlt,
        accordionBgHoverImageID,
        accordionBgHoverImagePosition,
        accordionBgHoverImageAttachment,
        accordionBgHoverImageRepeat,
        accordionBgHoverImageSize,

        // Item Box Shadow
        accordionItemBoxShadowValues,
        accordionItemBoxShadowCssValue,

        // Item Backgorund
        titleBgColorSwitcher,
        titleBgType,
        titleBgClassicColor,
        titleBgGradientColor,
        titleBgCustomGradientSwitcher,
        titleBgCustomGradientInputValue,
        titleBgImageUrl,
        titleBgImageAlt,
        titleBgImageID,
        titleBgImagePosition,
        titleBgImageAttachment,
        titleBgImageRepeat,
        titleBgImageSize,
        titleBgHoverType,
        titleBgHoverClassicColor,
        titleBgHoverGradientColor,
        titleBgHoverCustomGradientSwitcher,
        titleBgHoverCustomGradientInputValue,
        titleBgHoverImageUrl,
        titleBgHoverImageAlt,
        titleBgHoverImageID,
        titleBgHoverImagePosition,
        titleBgHoverImageAttachment,
        titleBgHoverImageRepeat,
        titleBgHoverImageSize,

        // Accordion Item Content
        contentBorder,
        contentBorderColor,
        contentBorderHoverColor,
        contentBorderColorSwitcher,
        contentBorderUnits,
        contentDesktopBorderWidth,
        contentTabBorderWidth,
        contentMobileBorderWidth,
        contentBorderLink,
        contentBorderRadiusUnits,
        contentDesktopBorderRadiusWidth,
        contentTabBorderRadiusWidth,
        contentMobileBorderRadiusWidth,
        contentBorderRadiusLink,
        contentDesktopSwitcher,
        contentTabletSwitcher,
        contentMobileSwitcher,

        // Item Box Shadow
        contentBoxShadowValues,
        contentBoxShadowCssValue,

        // Item Backgorund
        contentBgColorSwitcher,
        contentBgType,
        contentBgClassicColor,
        contentBgGradientColor,
        contentBgCustomGradientSwitcher,
        contentBgCustomGradientInputValue,
        contentBgImageUrl,
        contentBgImageAlt,
        contentBgImageID,
        contentBgImagePosition,
        contentBgImageAttachment,
        contentBgImageRepeat,
        contentBgImageSize,
        contentBgHoverType,
        contentBgHoverClassicColor,
        contentBgHoverGradientColor,
        contentBgHoverCustomGradientSwitcher,
        contentBgHoverCustomGradientInputValue,
        contentBgHoverImageUrl,
        contentBgHoverImageAlt,
        contentBgHoverImageID,
        contentBgHoverImagePosition,
        contentBgHoverImageAttachment,
        contentBgHoverImageRepeat,
        contentBgHoverImageSize,
    } = attributes;

    const blockProps = useBlockProps({
        className: `fb-accordion-main-wrapper ${blockID}`,
    });


    const addAccordion = () => {
        const innerBlocks = [
            ...select("core/block-editor").getBlocks(clientId),
        ];
        let count = innerBlocks ? innerBlocks.length : 3;

        const newBlock = createBlock("frontis-blocks/accordion-item", {
            itemId: count + 1,
            title: __(`Accordion title ${count + 1}`, "frontis-blocks"),
            inheritedAccordionType: accordionType,
            inheritedTagName: tagName,
            inheritedDisplayIcon: displayIcon,
            inheritedTabIconSwitcher: tabIconSwitcher,
            inheritedTabIcon: tabIcon,
            inheritedTabImageUrl: tabImageUrl,
            inheritedExpandedIconSwitcher: tabIconSwitcher,
            inheritedExpandedIcon: expandedIcon,
            inheritedExpandedImageUrl: expandedImageUrl,
            parentBlockID: blockID,
        });
        innerBlocks.splice(innerBlocks.length, 0, newBlock);
        dispatch("core/block-editor")
            .replaceInnerBlocks(clientId, innerBlocks)
            .then(() => {
                setAttributes({ accordionChildCount: count + 1 });
            });
    };

    

    useEffect(() => {
        if (!tabIcon) {
            setAttributes({ tabIcon: "fas fa-angle-right" });
        }
        if (!expandedIcon) {
            setAttributes({ expandedIcon: "fas fa-angle-down" });
        }
    }, []);
    
    const insertAccodionItem = (accordionChildCount) => {
        return times(accordionChildCount, (n) => [
            "frontis-blocks/accordion-item",
            {
                itemId: n + 1,
                title: __(`Accordion title ${n + 1}`, "frontis-blocks"),
                inheritedAccordionType: accordionType,
                inheritedDisplayIcon: displayIcon,
                inheritedTabIcon: "fas fa-angle-right",
                inheritedExpandedIcon: "fas fa-angle-down",
                inheritedTagName: tagName,
                faqSchema: faqSchema,
                parentBlockID: blockID,
            },
        ]);
    };


    const accordionItemsPaddingDesktopWidth = `${accordionItemsDesktopPadding.top}${accordionItemsPaddingUnits[deviceType]} ${accordionItemsDesktopPadding.right}${accordionItemsPaddingUnits[deviceType]} ${accordionItemsDesktopPadding.bottom}${accordionItemsPaddingUnits[deviceType]} ${accordionItemsDesktopPadding.left}${accordionItemsPaddingUnits[deviceType]}`;
    const accordionItemsPaddingTabletWidth = `${accordionItemsTabPadding.top}${accordionItemsPaddingUnits[deviceType]} ${accordionItemsTabPadding.right}${accordionItemsPaddingUnits[deviceType]} ${accordionItemsTabPadding.bottom}${accordionItemsPaddingUnits[deviceType]} ${accordionItemsTabPadding.left}${accordionItemsPaddingUnits[deviceType]}`;
    const accordionItemsPaddingMobileWidth = `${accordionItemsMobilePadding.top}${accordionItemsPaddingUnits[deviceType]} ${accordionItemsMobilePadding.right}${accordionItemsPaddingUnits[deviceType]} ${accordionItemsMobilePadding.bottom}${accordionItemsPaddingUnits[deviceType]} ${accordionItemsMobilePadding.left}${accordionItemsPaddingUnits[deviceType]}`;

    const accordionItemsBorderDesktopWidth = `${accordionItemsDesktopBorderWidth.top}${accordionItemsBorderUnits[deviceType]} ${accordionItemsDesktopBorderWidth.right}${accordionItemsBorderUnits[deviceType]} ${accordionItemsDesktopBorderWidth.bottom}${accordionItemsBorderUnits[deviceType]} ${accordionItemsDesktopBorderWidth.left}${accordionItemsBorderUnits[deviceType]}`;
    const accordionItemsBorderTabletWidth = `${accordionItemsTabBorderWidth.top}${accordionItemsBorderUnits[deviceType]} ${accordionItemsTabBorderWidth.right}${accordionItemsBorderUnits[deviceType]} ${accordionItemsTabBorderWidth.bottom}${accordionItemsBorderUnits[deviceType]} ${accordionItemsTabBorderWidth.left}${accordionItemsBorderUnits[deviceType]}`;
    const accordionItemsBorderMobileWidth = `${accordionItemsMobileBorderWidth.top}${accordionItemsBorderUnits[deviceType]} ${accordionItemsMobileBorderWidth.right}${accordionItemsBorderUnits[deviceType]} ${accordionItemsMobileBorderWidth.bottom}${accordionItemsBorderUnits[deviceType]} ${accordionItemsMobileBorderWidth.left}${accordionItemsBorderUnits[deviceType]}`;

    const accordionItemsBorderRadiusDesktopWidth = `${accordionItemsDesktopBorderRadiusWidth.top}${accordionItemsBorderRadiusUnits[deviceType]} ${accordionItemsDesktopBorderRadiusWidth.right}${accordionItemsBorderRadiusUnits[deviceType]} ${accordionItemsDesktopBorderRadiusWidth.bottom}${accordionItemsBorderRadiusUnits[deviceType]} ${accordionItemsDesktopBorderRadiusWidth.left}${accordionItemsBorderRadiusUnits[deviceType]}`;
    const accordionItemsBorderRadiusTabletWidth = `${accordionItemsTabBorderRadiusWidth.top}${accordionItemsBorderRadiusUnits[deviceType]} ${accordionItemsTabBorderRadiusWidth.right}${accordionItemsBorderRadiusUnits[deviceType]} ${accordionItemsTabBorderRadiusWidth.bottom}${accordionItemsBorderRadiusUnits[deviceType]} ${accordionItemsTabBorderRadiusWidth.left}${accordionItemsBorderRadiusUnits[deviceType]}`;
    const accordionItemsBorderRadiusMobileWidth = `${accordionItemsMobileBorderRadiusWidth.top}${accordionItemsBorderRadiusUnits[deviceType]} ${accordionItemsMobileBorderRadiusWidth.right}${accordionItemsBorderRadiusUnits[deviceType]} ${accordionItemsMobileBorderRadiusWidth.bottom}${accordionItemsBorderRadiusUnits[deviceType]} ${accordionItemsMobileBorderRadiusWidth.left}${accordionItemsBorderRadiusUnits[deviceType]}`;
      
    const accordionMarginDesktopWidth = `${accordionDesktopMargin.top}${accordionMarginUnits[deviceType]} ${accordionDesktopMargin.right}${accordionMarginUnits[deviceType]} ${accordionDesktopMargin.bottom}${accordionMarginUnits[deviceType]} ${accordionDesktopMargin.left}${accordionMarginUnits[deviceType]}`;
    const accordionMarginTabletWidth = `${accordionTabMargin.top}${accordionMarginUnits[deviceType]} ${accordionTabMargin.right}${accordionMarginUnits[deviceType]} ${accordionTabMargin.bottom}${accordionMarginUnits[deviceType]} ${accordionTabMargin.left}${accordionMarginUnits[deviceType]}`;
    const accordionMarginMobileWidth = `${accordionMobileMargin.top}${accordionMarginUnits[deviceType]} ${accordionMobileMargin.right}${accordionMarginUnits[deviceType]} ${accordionMobileMargin.bottom}${accordionMarginUnits[deviceType]} ${accordionMobileMargin.left}${accordionMarginUnits[deviceType]}`;

    const accordionPaddingDesktopWidth = `${accordionDesktopPadding.top}${accordionPaddingUnits[deviceType]} ${accordionDesktopPadding.right}${accordionPaddingUnits[deviceType]} ${accordionDesktopPadding.bottom}${accordionPaddingUnits[deviceType]} ${accordionDesktopPadding.left}${accordionPaddingUnits[deviceType]}`;
    const accordionPaddingTabletWidth = `${accordionTabPadding.top}${accordionPaddingUnits[deviceType]} ${accordionTabPadding.right}${accordionPaddingUnits[deviceType]} ${accordionTabPadding.bottom}${accordionPaddingUnits[deviceType]} ${accordionTabPadding.left}${accordionPaddingUnits[deviceType]}`;
    const accordionPaddingMobileWidth = `${accordionMobilePadding.top}${accordionPaddingUnits[deviceType]} ${accordionMobilePadding.right}${accordionPaddingUnits[deviceType]} ${accordionMobilePadding.bottom}${accordionPaddingUnits[deviceType]} ${accordionMobilePadding.left}${accordionPaddingUnits[deviceType]}`;

    const accordionBorderDesktopWidth = `${accordionDesktopBorderWidth.top}${accordionBorderUnits[deviceType]} ${accordionDesktopBorderWidth.right}${accordionBorderUnits[deviceType]} ${accordionDesktopBorderWidth.bottom}${accordionBorderUnits[deviceType]} ${accordionDesktopBorderWidth.left}${accordionBorderUnits[deviceType]}`;
    const accordionBorderTabletWidth = `${accordionTabBorderWidth.top}${accordionBorderUnits[deviceType]} ${accordionTabBorderWidth.right}${accordionBorderUnits[deviceType]} ${accordionTabBorderWidth.bottom}${accordionBorderUnits[deviceType]} ${accordionTabBorderWidth.left}${accordionBorderUnits[deviceType]}`;
    const accordionBorderMobileWidth = `${accordionMobileBorderWidth.top}${accordionBorderUnits[deviceType]} ${accordionMobileBorderWidth.right}${accordionBorderUnits[deviceType]} ${accordionMobileBorderWidth.bottom}${accordionBorderUnits[deviceType]} ${accordionMobileBorderWidth.left}${accordionBorderUnits[deviceType]}`;

    const accordionBorderRadiusDesktopWidth = `${accordionDesktopBorderRadiusWidth.top}${accordionBorderRadiusUnits[deviceType]} ${accordionDesktopBorderRadiusWidth.right}${accordionBorderRadiusUnits[deviceType]} ${accordionDesktopBorderRadiusWidth.bottom}${accordionBorderRadiusUnits[deviceType]} ${accordionDesktopBorderRadiusWidth.left}${accordionBorderRadiusUnits[deviceType]}`;
    const accordionBorderRadiusTabletWidth = `${accordionTabBorderRadiusWidth.top}${accordionBorderRadiusUnits[deviceType]} ${accordionTabBorderRadiusWidth.right}${accordionBorderRadiusUnits[deviceType]} ${accordionTabBorderRadiusWidth.bottom}${accordionBorderRadiusUnits[deviceType]} ${accordionTabBorderRadiusWidth.left}${accordionBorderRadiusUnits[deviceType]}`;
    const accordionBorderRadiusMobileWidth = `${accordionMobileBorderRadiusWidth.top}${accordionBorderRadiusUnits[deviceType]} ${accordionMobileBorderRadiusWidth.right}${accordionBorderRadiusUnits[deviceType]} ${accordionMobileBorderRadiusWidth.bottom}${accordionBorderRadiusUnits[deviceType]} ${accordionMobileBorderRadiusWidth.left}${accordionBorderRadiusUnits[deviceType]}`;

    const contentBorderDesktopWidth = `${contentDesktopBorderWidth.top}${contentBorderUnits[deviceType]} ${contentDesktopBorderWidth.right}${contentBorderUnits[deviceType]} ${contentDesktopBorderWidth.bottom}${contentBorderUnits[deviceType]} ${contentDesktopBorderWidth.left}${contentBorderUnits[deviceType]}`;
    const contentBorderTabletWidth = `${contentTabBorderWidth.top}${contentBorderUnits[deviceType]} ${contentTabBorderWidth.right}${contentBorderUnits[deviceType]} ${contentTabBorderWidth.bottom}${contentBorderUnits[deviceType]} ${contentTabBorderWidth.left}${contentBorderUnits[deviceType]}`;
    const contentBorderMobileWidth = `${contentMobileBorderWidth.top}${contentBorderUnits[deviceType]} ${contentMobileBorderWidth.right}${contentBorderUnits[deviceType]} ${contentMobileBorderWidth.bottom}${contentBorderUnits[deviceType]} ${contentMobileBorderWidth.left}${contentBorderUnits[deviceType]}`;

    const contentBorderRadiusDesktopWidth = `${contentDesktopBorderRadiusWidth.top}${contentBorderRadiusUnits[deviceType]} ${contentDesktopBorderRadiusWidth.right}${contentBorderRadiusUnits[deviceType]} ${contentDesktopBorderRadiusWidth.bottom}${contentBorderRadiusUnits[deviceType]} ${contentDesktopBorderRadiusWidth.left}${contentBorderRadiusUnits[deviceType]}`;
    const contentBorderRadiusTabletWidth = `${contentTabBorderRadiusWidth.top}${contentBorderRadiusUnits[deviceType]} ${contentTabBorderRadiusWidth.right}${contentBorderRadiusUnits[deviceType]} ${contentTabBorderRadiusWidth.bottom}${contentBorderRadiusUnits[deviceType]} ${contentTabBorderRadiusWidth.left}${contentBorderRadiusUnits[deviceType]}`;
    const contentBorderRadiusMobileWidth = `${contentMobileBorderRadiusWidth.top}${contentBorderRadiusUnits[deviceType]} ${contentMobileBorderRadiusWidth.right}${contentBorderRadiusUnits[deviceType]} ${contentMobileBorderRadiusWidth.bottom}${contentBorderRadiusUnits[deviceType]} ${contentMobileBorderRadiusWidth.left}${contentBorderRadiusUnits[deviceType]}`;

    

    const fbaccordionItemstyle = useMemo(() => {
        let styles = `
          .fb-accordion-main-wrapper.${blockID} .fb-parent-wrapper {
                position: relative;
                ${accordionZIndex.Desktop !== undefined ? `z-index: ${accordionZIndex.Desktop};` : ''}
                ${accordionPaddingDesktopWidth !== undefined ? `padding: ${accordionPaddingDesktopWidth};` : ''}
                ${accordionMarginDesktopWidth !== undefined ? `margin: ${accordionMarginDesktopWidth};` : ''}
                ${accordionBorder !== undefined ? `border-style: ${accordionBorder};` : ''}
                ${accordionBorderDesktopWidth !== undefined ? `border-width: ${accordionBorderDesktopWidth};` : ''}
                ${accordionBorderColor !== undefined ? `border-color: ${accordionBorderColor};` : ''}
                ${accordionBorderRadiusDesktopWidth !== undefined ? `border-radius: ${accordionBorderRadiusDesktopWidth};` : ''}
                ${
                    accordionBgType === "gradient"
                      ? `background: ${
                          accordionBgCustomGradientSwitcher && accordionBgCustomGradientInputValue
                            ? accordionBgCustomGradientInputValue
                            : accordionBgGradientColor
                        };`
                      : accordionBgImageUrl !== undefined && accordionBgImageUrl !== null && accordionBgImageUrl !== ""
                      ? `
                        ${accordionBgImageUrl !== undefined ? `background-image: url(${accordionBgImageUrl});` : ''}
                        ${accordionBgImagePosition !== undefined ? `background-position: ${accordionBgImagePosition};` : ''}
                        ${accordionBgImageAttachment !== undefined ? `background-attachment: ${accordionBgImageAttachment};` : ''}
                        ${accordionBgImageRepeat !== undefined ? `background-repeat: ${accordionBgImageRepeat};` : ''}
                        ${accordionBgImageSize !== undefined ? `background-size: ${accordionBgImageSize};` : ''}
                      `
                      : `background: ${accordionBgClassicColor};`
                }
                ${accordionGlobalBoxShadowCssValue ? `box-shadow: ${accordionGlobalBoxShadowCssValue};` : ''}
                overflow: hidden;
                transition: all .3s ease-in-out;
            }
        
            .fb-accordion-main-wrapper.${blockID} .fb-parent-wrapper:hover {
                ${
                    accordionBgHoverType === "gradient"
                      ? `background: ${
                          accordionBgHoverCustomGradientSwitcher && accordionBgHoverCustomGradientInputValue
                            ? accordionBgHoverCustomGradientInputValue
                            : accordionBgHoverGradientColor
                        };`
                      : accordionBgHoverImageUrl !== undefined && accordionBgHoverImageUrl !== null && accordionBgHoverImageUrl !== ""
                      ? `
                        ${accordionBgHoverImageUrl !== undefined ? `background-image: url(${accordionBgHoverImageUrl});` : ''}
                        ${accordionBgHoverImagePosition !== undefined ? `background-position: ${accordionBgHoverImagePosition};` : ''}
                        ${accordionBgHoverImageAttachment !== undefined ? `background-attachment: ${accordionBgHoverImageAttachment};` : ''}
                        ${accordionBgHoverImageRepeat !== undefined ? `background-repeat: ${accordionBgHoverImageRepeat};` : ''}
                        ${accordionBgHoverImageSize !== undefined ? `background-size: ${accordionBgHoverImageSize};` : ''}
                      `
                      : `background: ${accordionBgHoverClassicColor};`
                }
                ${accordionBorderHoverColor !== undefined ? `border-color: ${accordionBorderHoverColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper {
                ${
                    titleBgType === "gradient"
                      ? `background: ${
                          titleBgCustomGradientSwitcher && titleBgCustomGradientInputValue
                            ? titleBgCustomGradientInputValue
                            : titleBgGradientColor
                        };`
                      : titleBgImageUrl !== undefined && titleBgImageUrl !== null && titleBgImageUrl !== ""
                      ? `
                        ${titleBgImageUrl !== undefined ? `background-image: url(${titleBgImageUrl});` : ''}
                        ${titleBgImagePosition !== undefined ? `background-position: ${titleBgImagePosition};` : ''}
                        ${titleBgImageAttachment !== undefined ? `background-attachment: ${titleBgImageAttachment};` : ''}
                        ${titleBgImageRepeat !== undefined ? `background-repeat: ${titleBgImageRepeat};` : ''}
                        ${titleBgImageSize !== undefined ? `background-size: ${titleBgImageSize};` : ''}
                      `
                      : `background: ${titleBgClassicColor};`
                }
                display: flex;
                align-items: center;
                ${titleSpacing?.Desktop !== undefined ? `gap: ${titleSpacing.Desktop}${titleSpacingUnits.Desktop};` : ''}
                ${titleAlignment !== undefined ? `justify-content: ${titleAlignment};` : ''}
                ${accordionItemsPaddingDesktopWidth !== undefined ? `padding: ${accordionItemsPaddingDesktopWidth};` : ''}
                ${accordionItemsBorder !== undefined ? `border-style: ${accordionItemsBorder};` : ''}
                ${accordionItemsBorderDesktopWidth !== undefined ? `border-width: ${accordionItemsBorderDesktopWidth};` : ''}
                ${accordionItemsBorderColor !== undefined ? `border-color: ${accordionItemsBorderColor};` : ''}
                ${accordionItemBoxShadowCssValue ? `box-shadow: ${accordionItemBoxShadowCssValue};` : ''}
                transition: all .3s ease-in-out;
            }
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover {
                ${
                    titleBgHoverType === "gradient"
                      ? `background: ${
                          titleBgHoverCustomGradientSwitcher && titleBgHoverCustomGradientInputValue
                            ? titleBgHoverCustomGradientInputValue
                            : titleBgHoverGradientColor
                        };`
                      : titleBgHoverImageUrl !== undefined && titleBgHoverImageUrl !== null && titleBgHoverImageUrl !== ""
                      ? `
                        ${titleBgHoverImageUrl !== undefined ? `background-image: url(${titleBgHoverImageUrl});` : ''}
                        ${titleBgHoverImagePosition !== undefined ? `background-position: ${titleBgHoverImagePosition};` : ''}
                        ${titleBgHoverImageAttachment !== undefined ? `background-attachment: ${titleBgHoverImageAttachment};` : ''}
                        ${titleBgHoverImageRepeat !== undefined ? `background-repeat: ${titleBgHoverImageRepeat};` : ''}
                        ${titleBgHoverImageSize !== undefined ? `background-size: ${titleBgHoverImageSize};` : ''}
                      `
                      : `background: ${titleBgHoverClassicColor};`
                }
                transition: all .3s ease-in-out;
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title {
                ${titleColor !== undefined ? `color: ${titleColor};` : ''}
                ${titleFontFamily !== 'default' ? `font-family: ${titleFontFamily};` : ''}
                ${titleFontSize?.Desktop !== undefined ? `font-size: ${titleFontSize.Desktop}${titleFontSizeUnits.Desktop};` : ''}
                ${titleFontWeight !== undefined ? `font-weight: ${titleFontWeight};` : ''}
                ${titleFontStyle !== undefined ? `font-style: ${titleFontStyle};` : ''}
                ${titleLetterSpacing?.Desktop !== undefined ? `letter-spacing: ${titleLetterSpacing.Desktop}${titleLetterSpacingUnits.Desktop};` : ''}
                ${titleLineHeight?.Desktop !== undefined ? `line-height: ${titleLineHeight.Desktop}${titleLineHeightUnits.Desktop};` : ''}
            }
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-title {
                ${titleHoverColor !== undefined ? `color: ${titleHoverColor};` : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-tab-icon svg,
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-tab-icon img,
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-expanded-icon svg,
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-expanded-icon img,
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-icon svg,
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-icon img {
                width: 100%;
                height: 100%;
            }
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-tab-icon,
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-expanded-icon,
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-icon {
                ${titleIconColor !== undefined ? `fill: ${titleIconColor};` : ''}
                ${titleIconSize?.Desktop !== undefined ? `
                    width: ${titleIconSize.Desktop}${titleIconSizeUnits.Desktop}; 
                    height: ${titleIconSize.Desktop}${titleIconSizeUnits.Desktop};` 
                    : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-tab-icon,
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-expanded-icon,
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-icon {
                ${titleIconHoverColor !== undefined ? `fill: ${titleIconHoverColor};` : ''}
            }

            .fb-accordion-main-wrapper.${blockID} .fb-accordion-inner,
            .fb-accordion-main-wrapper.${blockID} .fb-accordion-inner .block-editor-block-list__layout {
                display: flex;
                flex-direction: column;
                ${accordionItemGap?.Desktop !== undefined ? `gap: ${accordionItemGap.Desktop}${accordionItemGapUnits.Desktop};` : ''}
                padding: 0;
                margin: 0;
            }

            .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper {
                display: flex;
                align-items: center;
                ${titleSpacing?.Desktop !== undefined ? `gap: ${titleSpacing.Desktop}${titleSpacingUnits.Desktop};` : ''}
                ${titleAlignment === 'left' ? 'justify-content: left;' : ''}
                ${titleAlignment === 'center' ? 'justify-content: center;' : ''}
                ${titleAlignment === 'right' ? 'justify-content: right;' : ''}
                ${titleAlignment === 'between' ? 'justify-content: space-between;' : ''}
                ${iconPosition === 'left' ? 'flex-direction: row-reverse;' : ''}
                ${iconPosition === 'right' ? 'flex-direction: row;' : ''}
                ${accordionItemsPaddingDesktopWidth !== undefined ? `padding: ${accordionItemsPaddingDesktopWidth};` : ''}
                ${accordionItemsBorder !== undefined ? `border-style: ${accordionItemsBorder};` : ''}
                ${accordionItemsBorderDesktopWidth !== undefined ? `border-width: ${accordionItemsBorderDesktopWidth};` : ''}
                ${accordionItemsBorderColor !== undefined ? `border-color: ${accordionItemsBorderColor};` : ''}
                ${accordionItemsBorderRadiusDesktopWidth !== undefined ? `border-radius: ${accordionItemsBorderRadiusDesktopWidth};` : ''}
            }

            .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper:hover {
                ${accordionItemsBorderHoverColor !== undefined ? `border-color: ${accordionItemsBorderHoverColor};` : ''}
            }

            .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner {
                display: inline-flex;
                align-items: center;
                ${prefixSuffixSpacing?.Desktop !== undefined ? `gap: ${prefixSuffixSpacing.Desktop}${prefixSuffixSpacingUnits.Desktop};` : ''}
            }

            .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix {
                ${titlePrefixIconSize?.Desktop !== undefined ? `width: ${titlePrefixIconSize.Desktop}${titlePrefixIconSizeUnits.Desktop}; height: ${titlePrefixIconSize.Desktop}${titlePrefixIconSizeUnits.Desktop};` : ''}
                display: flex;
            }

            .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix {
                ${titleSuffixIconSize?.Desktop !== undefined ? `width: ${titleSuffixIconSize.Desktop}${titleSuffixIconSizeUnits.Desktop}; height: ${titleSuffixIconSize.Desktop}${titleSuffixIconSizeUnits.Desktop};` : ''}
                display: flex;
            }

            .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix img,
            .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix svg,
            .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix img,
            .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix svg {
                margin: 0;
                padding: 0;
                min-width: 100%;
                width: 100%;
                height: 100%;
            }

            .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix img,
            .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix .components-button,
            .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix img,
            .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix .components-button {
                margin: 0 !important;
                padding: 0 !important;
                min-width: 100% !important;
                width: 100% !important;
                height: 100% !important;
                object-fit: cover !important;
            }

        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-wrapper {
            ${
            contentBgType === "gradient"
                ? `background: ${
                    contentBgCustomGradientSwitcher && contentBgCustomGradientInputValue
                    ? contentBgCustomGradientInputValue
                    : contentBgGradientColor
                };`
                : contentBgImageUrl !== undefined && contentBgImageUrl !== null && contentBgImageUrl !== ""
                ? `
                ${contentBgImageUrl !== undefined ? `background-image: url(${contentBgImageUrl});` : ''}
                ${contentBgImagePosition !== undefined ? `background-position: ${contentBgImagePosition};` : ''}
                ${contentBgImageAttachment !== undefined ? `background-attachment: ${contentBgImageAttachment};` : ''}
                ${contentBgImageRepeat !== undefined ? `background-repeat: ${contentBgImageRepeat};` : ''}
                ${contentBgImageSize !== undefined ? `background-size: ${contentBgImageSize};` : ''}
                `
                : `background: ${contentBgClassicColor};`
            }
            ${contentBoxShadowCssValue ? `box-shadow: ${contentBoxShadowCssValue};` : ''}
            ${contentBorder !== undefined ? `border-style: ${contentBorder};` : ''}
            ${contentBorderDesktopWidth !== undefined ? `border-width: ${contentBorderDesktopWidth};` : ''}
            ${contentBorderColor !== undefined ? `border-color: ${contentBorderColor};` : ''}
            ${contentBorderRadiusDesktopWidth !== undefined ? `border-radius: ${contentBorderRadiusDesktopWidth};` : ''}
            overflow: hidden;
            transition: all 0.3s ease-in-out;
        }
        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-wrapper:hover {
            ${
                contentBgHoverType === "gradient"
                ? `background: ${
                    contentBgHoverCustomGradientSwitcher && contentBgHoverCustomGradientInputValue
                        ? contentBgHoverCustomGradientInputValue
                        : contentBgHoverGradientColor
                    };`
                : contentBgHoverImageUrl !== undefined && contentBgHoverImageUrl !== null && contentBgHoverImageUrl !== ""
                ? `
                    ${contentBgHoverImageUrl !== undefined ? `background-image: url(${contentBgHoverImageUrl});` : ''}
                    ${contentBgHoverImagePosition !== undefined ? `background-position: ${contentBgHoverImagePosition};` : ''}
                    ${contentBgHoverImageAttachment !== undefined ? `background-attachment: ${contentBgHoverImageAttachment};` : ''}
                    ${contentBgHoverImageRepeat !== undefined ? `background-repeat: ${contentBgHoverImageRepeat};` : ''}
                    ${contentBgHoverImageSize !== undefined ? `background-size: ${contentBgHoverImageSize};` : ''}
                `
                : `background: ${contentBgHoverClassicColor};`
            }
            ${contentBorderHoverColor !== undefined ? `border-color: ${contentBorderHoverColor};` : ''}
            transition: all 0.3s ease-in-out;
        }

      
        @media only screen and (max-width: 1024px) {
            .fb-accordion-main-wrapper.${blockID} .fb-parent-wrapper {
                ${accordionZIndex.Tablet !== undefined ? `z-index: ${accordionZIndex.Tablet};` : ''}
                ${accordionPaddingTabletWidth !== undefined ? `padding: ${accordionPaddingTabletWidth};` : ''}
                ${accordionMarginTabletWidth !== undefined ? `margin: ${accordionMarginTabletWidth};` : ''}
                ${accordionBorderRadiusTabletWidth !== undefined ? `border-radius: ${accordionBorderRadiusTabletWidth};` : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-tab-icon,
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-expanded-icon,
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-icon {
                ${titleIconSize?.Tablet !== undefined ? `
                    width: ${titleIconSize.Tablet}${titleIconSizeUnits.Tablet}; 
                    height: ${titleIconSize.Tablet}${titleIconSizeUnits.Tablet};` 
                    : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title {
                ${titleFontSize?.Tablet !== undefined 
                    ? `font-size: ${titleFontSize.Tablet}${titleFontSizeUnits.Tablet};` 
                    : ''}
                ${titleLetterSpacing?.Tablet !== undefined 
                    ? `letter-spacing: ${titleLetterSpacing.Tablet}${titleLetterSpacingUnits.Tablet};` 
                    : ''}
                ${titleLineHeight?.Tablet !== undefined 
                    ? `line-height: ${titleLineHeight.Tablet}${titleLineHeightUnits.Tablet};` 
                    : ''}
            }

            .fb-accordion-main-wrapper.${blockID} .fb-accordion-inner .block-editor-block-list__layout {
                ${accordionItemGap?.Tablet !== undefined 
                    ? `gap: ${accordionItemGap.Tablet}${accordionItemGapUnits.Tablet};` 
                    : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper {
                ${titleSpacing?.Tablet !== undefined 
                    ? `gap: ${titleSpacing.Tablet}${titleSpacingUnits.Tablet};` 
                    : ''}
                ${accordionItemsPaddingTabletWidth !== undefined 
                    ? `padding: ${accordionItemsPaddingTabletWidth};` 
                    : ''}
                ${accordionItemsBorderTabletWidth !== undefined 
                    ? `border-width: ${accordionItemsBorderTabletWidth};` 
                    : ''}
                ${accordionItemsBorderRadiusTabletWidth !== undefined 
                    ? `border-radius: ${accordionItemsBorderRadiusTabletWidth};` 
                    : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title-inner {
                ${prefixSuffixSpacing?.Tablet !== undefined 
                    ? `gap: ${prefixSuffixSpacing.Tablet}${prefixSuffixSpacingUnits.Tablet};` 
                    : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-title-inner .fb-accordion-title-prefix {
                ${titlePrefixIconSize?.Tablet !== undefined 
                    ? `width: ${titlePrefixIconSize.Tablet}${titlePrefixIconSizeUnits.Tablet}; height: ${titlePrefixIconSize.Tablet}${titlePrefixIconSizeUnits.Tablet};` 
                    : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-title-inner .fb-accordion-title-suffix {
                ${titleSuffixIconSize?.Tablet !== undefined 
                    ? `width: ${titleSuffixIconSize.Tablet}${titleSuffixIconSizeUnits.Tablet}; height: ${titleSuffixIconSize.Tablet}${titleSuffixIconSizeUnits.Tablet};` 
                    : ''}
            }
            
            .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-wrapper {
                ${contentBorderTabletWidth !== undefined ? `border-width: ${contentBorderTabletWidth};` : ''}
                ${contentBorderRadiusTabletWidth !== undefined ? `border-radius: ${contentBorderRadiusTabletWidth};` : ''}
            }
        }
      
        @media only screen and (max-width: 767px) {
            .fb-accordion-main-wrapper.${blockID} .fb-parent-wrapper {
                ${accordionZIndex.Mobile !== undefined ? `z-index: ${accordionZIndex.Mobile};` : ''}
                ${accordionPaddingMobileWidth !== undefined ? `padding: ${accordionPaddingMobileWidth};` : ''}
                ${accordionMarginMobileWidth !== undefined ? `margin: ${accordionMarginMobileWidth};` : ''}
                ${accordionBorderRadiusMobileWidth !== undefined ? `border-radius: ${accordionBorderRadiusMobileWidth};` : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-tab-icon,
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-expanded-icon,
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-icon {
                ${titleIconSize?.Mobile !== undefined 
                    ? `width: ${titleIconSize.Mobile}${titleIconSizeUnits.Mobile}; height: ${titleIconSize.Mobile}${titleIconSizeUnits.Mobile};` 
                    : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title {
                ${titleFontSize?.Mobile !== undefined 
                    ? `font-size: ${titleFontSize.Mobile}${titleFontSizeUnits.Mobile};` 
                    : ''}
                ${titleLetterSpacing?.Mobile !== undefined 
                    ? `letter-spacing: ${titleLetterSpacing.Mobile}${titleLetterSpacingUnits.Mobile};` 
                    : ''}
                ${titleLineHeight?.Mobile !== undefined 
                    ? `line-height: ${titleLineHeight.Mobile}${titleLineHeightUnits.Mobile};` 
                    : ''}
            }

            .fb-accordion-main-wrapper.${blockID} .fb-accordion-inner .block-editor-block-list__layout {
                ${accordionItemGap?.Mobile !== undefined 
                    ? `gap: ${accordionItemGap.Mobile}${accordionItemGapUnits.Mobile};` 
                    : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper {
                ${titleSpacing?.Mobile !== undefined 
                    ? `gap: ${titleSpacing.Mobile}${titleSpacingUnits.Mobile};` 
                    : ''}
                ${accordionItemsPaddingMobileWidth !== undefined 
                    ? `padding: ${accordionItemsPaddingMobileWidth};` 
                    : ''}
                ${accordionItemsBorderMobileWidth !== undefined 
                    ? `border-width: ${accordionItemsBorderMobileWidth};` 
                    : ''}
                ${accordionItemsBorderRadiusMobileWidth !== undefined 
                    ? `border-radius: ${accordionItemsBorderRadiusMobileWidth};` 
                    : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title-inner {
                ${prefixSuffixSpacing?.Mobile !== undefined 
                    ? `gap: ${prefixSuffixSpacing.Mobile}${prefixSuffixSpacingUnits.Mobile};` 
                    : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-title-inner .fb-accordion-title-prefix {
                ${titlePrefixIconSize?.Mobile !== undefined 
                    ? `width: ${titlePrefixIconSize.Mobile}${titlePrefixIconSizeUnits.Mobile}; height: ${titlePrefixIconSize.Mobile}${titlePrefixIconSizeUnits.Mobile};` 
                    : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-title-inner .fb-accordion-title-suffix {
                ${titleSuffixIconSize?.Mobile !== undefined 
                    ? `width: ${titleSuffixIconSize.Mobile}${titleSuffixIconSizeUnits.Mobile}; height: ${titleSuffixIconSize.Mobile}${titleSuffixIconSizeUnits.Mobile};` 
                    : ''}
            }
            
            .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-wrapper {
                ${contentBorderMobileWidth !== undefined ? `border-width: ${contentBorderMobileWidth};` : ''}
                ${contentBorderRadiusMobileWidth !== undefined ? `border-radius: ${contentBorderRadiusMobileWidth};` : ''}
            }
        }

        `;
        return styles.replace(/\s+/g, ' ').trim();
      }, [
        blockID,
        blockStyle,
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

        // Boxshadow
        accordionGlobalBoxShadowValues,
        accordionGlobalBoxShadowCssValue,

        // Backgorund
        accordionBgColorSwitcher,
        accordionBgType,
        accordionBgClassicColor,
        accordionBgGradientColor,
        accordionBgCustomGradientSwitcher,
        accordionBgCustomGradientInputValue,
        accordionBgImageUrl,
        accordionBgImageAlt,
        accordionBgImageID,
        accordionBgImagePosition,
        accordionBgImageAttachment,
        accordionBgImageRepeat,
        accordionBgImageSize,
        accordionBgHoverType,
        accordionBgHoverClassicColor,
        accordionBgHoverGradientColor,
        accordionBgHoverCustomGradientSwitcher,
        accordionBgHoverCustomGradientInputValue,
        accordionBgHoverImageUrl,
        accordionBgHoverImageAlt,
        accordionBgHoverImageID,
        accordionBgHoverImagePosition,
        accordionBgHoverImageAttachment,
        accordionBgHoverImageRepeat,
        accordionBgHoverImageSize,

        // Item Box Shadow
        accordionItemBoxShadowValues,
        accordionItemBoxShadowCssValue,

        // Item Backgorund
        titleBgColorSwitcher,
        titleBgType,
        titleBgClassicColor,
        titleBgGradientColor,
        titleBgCustomGradientSwitcher,
        titleBgCustomGradientInputValue,
        titleBgImageUrl,
        titleBgImageAlt,
        titleBgImageID,
        titleBgImagePosition,
        titleBgImageAttachment,
        titleBgImageRepeat,
        titleBgImageSize,
        titleBgHoverType,
        titleBgHoverClassicColor,
        titleBgHoverGradientColor,
        titleBgHoverCustomGradientSwitcher,
        titleBgHoverCustomGradientInputValue,
        titleBgHoverImageUrl,
        titleBgHoverImageAlt,
        titleBgHoverImageID,
        titleBgHoverImagePosition,
        titleBgHoverImageAttachment,
        titleBgHoverImageRepeat,
        titleBgHoverImageSize,

        // Accordion Item Content
        contentBorder,
        contentBorderColor,
        contentBorderHoverColor,
        contentBorderColorSwitcher,
        contentBorderUnits,
        contentDesktopBorderWidth,
        contentTabBorderWidth,
        contentMobileBorderWidth,
        contentBorderLink,
        contentBorderRadiusUnits,
        contentDesktopBorderRadiusWidth,
        contentTabBorderRadiusWidth,
        contentMobileBorderRadiusWidth,
        contentBorderRadiusLink,
        contentDesktopSwitcher,
        contentTabletSwitcher,
        contentMobileSwitcher,

        // Item Box Shadow
        contentBoxShadowValues,
        contentBoxShadowCssValue,

        // Item Backgorund
        contentBgColorSwitcher,
        contentBgType,
        contentBgClassicColor,
        contentBgGradientColor,
        contentBgCustomGradientSwitcher,
        contentBgCustomGradientInputValue,
        contentBgImageUrl,
        contentBgImageAlt,
        contentBgImageID,
        contentBgImagePosition,
        contentBgImageAttachment,
        contentBgImageRepeat,
        contentBgImageSize,
        contentBgHoverType,
        contentBgHoverClassicColor,
        contentBgHoverGradientColor,
        contentBgHoverCustomGradientSwitcher,
        contentBgHoverCustomGradientInputValue,
        contentBgHoverImageUrl,
        contentBgHoverImageAlt,
        contentBgHoverImageID,
        contentBgHoverImagePosition,
        contentBgHoverImageAttachment,
        contentBgHoverImageRepeat,
        contentBgHoverImageSize,
      ]);
      
      useEffect(() => {
        setAttributes({
          blockStyle: fbaccordionItemstyle.replace(/\s+/g, ' ').trim(),
        });
      }, [fbaccordionItemstyle]);

      const editorStyle = fbaccordionItemstyle.replace(/\s+/g, ' ').trim();
      

    return (
        <>
            <style>
			{`
				${editorStyle}
            `}
			</style>

            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} clientId={clientId} />}

            <div {...blockProps}>
                <div
                    className={`fb-parent-wrapper fb-parent-${blockID} ${classHook}`}
                >
                    <div className={`fb-accordion-container`}>
                        <div className="fb-accordion-inner">
                            <InnerBlocks
                                template={insertAccodionItem(
                                    accordionChildCount
                                )}
                                templateLock={false}
                                allowedBlocks={ALLOWED_BLOCKS}
                            />
                        </div>
                    </div>
                    <div className="fb-accordion-add-button-wrapper">
                        <Button
                            className="fb-accordion-add-button"
                            label={__("Add Item", "frontis-blocks")}
                            icon="plus"
                            onClick={addAccordion}
                        >
                            <span className="fb-accordion-add-button-label">
                                {__("Add Item", "frontis-blocks")}
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
