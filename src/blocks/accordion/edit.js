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

    console.log(attributes);

    const fbAccordionStyle = useMemo(() => {
        let styles = `
          .fb-accordion-main-wrapper.${blockID} {
                position: relative;
                ${accordionZIndex !== undefined ? `z-index: ${accordionZIndex};` : ''}
                ${accordionBgColor !== undefined ? `background-color: ${accordionBgColor};` : ''}
                ${accordionPaddingDesktopWidth !== undefined ? `padding: ${accordionPaddingDesktopWidth};` : ''}
                ${accordionMarginDesktopWidth !== undefined ? `margin: ${accordionMarginDesktopWidth};` : ''}
                ${accordionBorder !== undefined ? `border-style: ${accordionBorder};` : ''}
                ${accordionBorderDesktopWidth !== undefined ? `border-width: ${accordionBorderDesktopWidth};` : ''}
                ${accordionBorderColor !== undefined ? `border-color: ${accordionBorderColor};` : ''}
                ${accordionBorderRadiusDesktopWidth !== undefined ? `border-radius: ${accordionBorderRadiusDesktopWidth};` : ''}
                overflow: hidden;
                transition: all .3s ease-in-out;
            }
        
            .fb-accordion-main-wrapper.${blockID}:hover {
                ${accordionBgHoverColor !== undefined ? `background-color: ${accordionBgHoverColor};` : ''}
                ${accordionBorderHoverColor !== undefined ? `border-color: ${accordionBorderHoverColor};` : ''}
            }
        
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper {
                ${titleBGColor !== undefined ? `background-color: ${titleBGColor};` : ''}
                display: flex;
                align-items: center;
                ${titleSpacing?.Desktop !== undefined ? `gap: ${titleSpacing.Desktop}${titleSpacingUnits.Desktop};` : ''}
                ${titleAlignment !== undefined ? `justify-content: ${titleAlignment};` : ''}
                ${accordionItemsPaddingDesktopWidth !== undefined ? `padding: ${accordionItemsPaddingDesktopWidth};` : ''}
                ${accordionItemsBorder !== undefined ? `border-style: ${accordionItemsBorder};` : ''}
                ${accordionItemsBorderDesktopWidth !== undefined ? `border-width: ${accordionItemsBorderDesktopWidth};` : ''}
                ${accordionItemsBorderColor !== undefined ? `border-color: ${accordionItemsBorderColor};` : ''}
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

      
        @media only screen and (max-width: 1024px) {
            .fb-accordion-main-wrapper.${blockID} {
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
        
        
        }
      
        @media only screen and (max-width: 767px) {
            .fb-accordion-main-wrapper.${blockID} {
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
      ]);
      
      useEffect(() => {
        setAttributes({
          blockStyle: fbAccordionStyle,
        });
      }, [fbAccordionStyle]);
      

    return (
        <>
            <style>
			{`
				${blockStyle}
            `}
			</style>
            {/* <style>
                {`
                    .fb-accordion-main-wrapper.${blockID} {
                        position: relative;
                        ${accordionZIndex && `z-index: ${accordionZIndex}`};
                        ${accordionBgColor !== undefined ? `background-color: ${accordionBgColor};` : ''};
                        padding: ${accordionPaddingDesktopWidth};
                        margin: ${accordionMarginDesktopWidth};
                        border-style: ${accordionBorder};
                        border-width: ${accordionBorderDesktopWidth};
                        ${accordionBorderColor !== undefined ? `border-color: ${accordionBorderColor};` : ''};
                        border-radius: ${accordionBorderRadiusDesktopWidth};
                        overflow: hidden;
                        transition: all .3s ease-in-out;
                    }
                    .fb-accordion-main-wrapper.${blockID}:hover {
                        ${accordionBgHoverColor !== undefined ? `background-color: ${accordionBgHoverColor};` : ''};
                        ${accordionBorderHoverColor !== undefined ? `border-color: ${accordionBorderHoverColor};` : ''};
                        transition: all .3s ease-in-out;
                    }


                    .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper {
                        background-color: ${titleBGColor};
                    }
                    .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover {
                        background-color: ${titleBGHoverColor};
                    }

                    .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-icon {
                        width: ${titleIconSize.Desktop}${titleIconSizeUnits.Desktop};
                        height: ${titleIconSize.Desktop}${titleIconSizeUnits.Desktop};
                    }
                    .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-icon svg {
                        width: 100%;
                        height: 100%;
                    }

                    .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title {
                        color: ${titleColor};
                        font-family: ${titleFontFamily !== 'default' ? titleFontFamily : titleFontFamily};
                        font-size: ${titleFontSize !== undefined ? `${titleFontSize.Desktop}${titleFontSizeUnits.Desktop}` : ''};
                        font-weight: ${titleFontWeight};
                        font-style: ${titleFontStyle};
                        text-transform: ${titleTextTransform};
                        text-decoration: ${titleTextDecoration};
                        ${titleLetterSpacing !== undefined ? `letter-spacing: ${titleLetterSpacing.Desktop}${titleLetterSpacingUnits.Desktop};` : ''}
                        ${titleLineHeight !== undefined ? `line-height: ${titleLineHeight.Desktop}${titleLineHeightUnits.Desktop};` : ''}
                        margin: 0;
                    }
                    .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-title {
                        color: ${titleHoverColor};
                    }

                    .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-icon {
                        fill: ${titleIconColor};
                    }
                    .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-icon {
                        fill: ${titleIconHoverColor};
                    }


                    .fb-accordion-main-wrapper.${blockID} .fb-accordion-inner .block-editor-block-list__layout {
                        display: flex;
                        flex-direction: column;
                        gap: ${accordionItemGap.Desktop}${accordionItemGapUnits.Desktop};
                        padding: 0;
                        margin: 0;
                    }
                    
                    .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper {
                        display: flex;
                        align-items: center;
                        gap: ${titleSpacing.Desktop}${titleSpacingUnits.Desktop};
                        ${titleAlignment === 'left' && 'justify-content: left'};
                        ${titleAlignment === 'center' && 'justify-content: center'};
                        ${titleAlignment === 'right' && 'justify-content: right'};
                        ${titleAlignment === 'between' && 'justify-content: space-between'};
                        ${iconPosition === 'left' && 'flex-direction: row-reverse'};
                        ${iconPosition === 'right' && 'flex-direction: row'};
                        padding: ${accordionItemsPaddingDesktopWidth};
                        border-style: ${accordionItemsBorder};
                        border-width: ${accordionItemsBorderDesktopWidth};
                        ${accordionItemsBorderColor !== undefined ? `border-color: ${accordionItemsBorderColor};` : ''};
                        border-radius: ${accordionItemsBorderRadiusDesktopWidth};
                    }
                    .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper:hover {
                        ${accordionItemsBorderHoverColor !== undefined ? `border-color: ${accordionItemsBorderHoverColor};` : ''};
                    }

                    .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner {
                        display: inline-flex;
                        align-items: center;
                        gap: ${prefixSuffixSpacing.Desktop}${prefixSuffixSpacingUnits.Desktop};
                    }

                    .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix {
                        width: ${titlePrefixIconSize.Desktop}${titlePrefixIconSizeUnits.Desktop};
                        height: ${titlePrefixIconSize.Desktop}${titlePrefixIconSizeUnits.Desktop};
                    }
                    .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix {
                        width: ${titleSuffixIconSize.Desktop}${titleSuffixIconSizeUnits.Desktop};
                        height: ${titleSuffixIconSize.Desktop}${titleSuffixIconSizeUnits.Desktop};
                    }
                    .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix img,
                    .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix svg,
                    .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix img,
                    .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix svg, {
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
                        object-fix: cover !important;
                    }

                    @media only screen and (max-width: 1024px) {
                        .fb-accordion-main-wrapper.${blockID} {
                            padding: ${accordionPaddingTabletWidth};
                            margin: ${accordionMarginTabletWidth};
                            border-radius: ${accordionBorderRadiusTabletWidth};
                        }
                        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-icon {
                            width: ${titleIconSize.Tablet}${titleIconSizeUnits.Tablet};
                            height: ${titleIconSize.Tablet}${titleIconSizeUnits.Tablet};
                        }
                        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title {
                            font-size: ${titleFontSize !== undefined ? `${titleFontSize.Tablet}${titleFontSizeUnits.Tablet}` : ''};
                            ${titleLetterSpacing !== undefined ? `letter-spacing: ${titleLetterSpacing.Tablet}${titleLetterSpacingUnits.Tablet};` : ''}
                            ${titleLineHeight !== undefined ? `line-height: ${titleLineHeight.Tablet}${titleLineHeightUnits.Tablet};` : ''}
                        }
                        .fb-accordion-main-wrapper.${blockID} .fb-accordion-inner .block-editor-block-list__layout {
                            gap: ${accordionItemGap.Tablet}${accordionItemGapUnits.Tablet};
                        }
                        
                        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper {
                            gap: ${titleSpacing.Tablet}${titleSpacingUnits.Tablet};
                            padding: ${accordionItemsPaddingTabletWidth};
                            border-width: ${accordionItemsBorderTabletWidth};
                            border-radius: ${accordionItemsBorderRadiusTabletWidth};
                        }
                        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner {
                            gap: ${prefixSuffixSpacing.Tablet}${prefixSuffixSpacingUnits.Tablet};
                        }

                        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix {
                            width: ${titlePrefixIconSize.Tablet}${titlePrefixIconSizeUnits.Tablet};
                            height: ${titlePrefixIconSize.Tablet}${titlePrefixIconSizeUnits.Tablet};
                        }
                        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix {
                            width: ${titleSuffixIconSize.Tablet}${titleSuffixIconSizeUnits.Tablet};
                            height: ${titleSuffixIconSize.Tablet}${titleSuffixIconSizeUnits.Tablet};
                        }
                    }

                    @media only screen and (max-width: 767px) {
                        .fb-accordion-main-wrapper.${blockID} {
                            padding: ${accordionPaddingMobileWidth};
                            margin: ${accordionMarginMobileWidth};
                            border-radius: ${accordionBorderRadiusMobileWidth};
                        }
                        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-icon {
                            width: ${titleIconSize.Mobile}${titleIconSizeUnits.Mobile};
                            height: ${titleIconSize.Mobile}${titleIconSizeUnits.Mobile};
                        }
                        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title {
                            font-size: ${titleFontSize !== undefined ? `${titleFontSize.Mobile}${titleFontSizeUnits.Mobile}` : ''};
                            ${titleLetterSpacing !== undefined ? `letter-spacing: ${titleLetterSpacing.Mobile}${titleLetterSpacingUnits.Mobile};` : ''}
                            ${titleLineHeight !== undefined ? `line-height: ${titleLineHeight.Mobile}${titleLineHeightUnits.Mobile};` : ''}
                        }
                        .fb-accordion-main-wrapper.${blockID} .fb-accordion-inner .block-editor-block-list__layout {
                            gap: ${accordionItemGap.Mobile}${accordionItemGapUnits.Mobile};
                        }
                        
                        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper {
                            gap: ${titleSpacing.Mobile}${titleSpacingUnits.Mobile};
                            padding: ${accordionItemsPaddingMobileWidth};
                            border-width: ${accordionItemsBorderMobileWidth};
                            border-radius: ${accordionItemsBorderRadiusMobileWidth};
                        }
                        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner {
                            gap: ${prefixSuffixSpacing.Mobile}${prefixSuffixSpacingUnits.Mobile};
                        }

                        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix {
                            width: ${titlePrefixIconSize.Mobile}${titlePrefixIconSizeUnits.Mobile};
                            height: ${titlePrefixIconSize.Mobile}${titlePrefixIconSizeUnits.Mobile};
                        }
                        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix {
                            width: ${titleSuffixIconSize.Mobile}${titleSuffixIconSizeUnits.Mobile};
                            height: ${titleSuffixIconSize.Mobile}${titleSuffixIconSizeUnits.Mobile};
                        }
                    }
                `}
            </style> */}

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
