import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, useInnerBlocksProps, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useEffect } from "@wordpress/element";
import { select, dispatch } from "@wordpress/data";
import { times } from 'lodash';
import { createBlock } from "@wordpress/blocks";
import './editor.scss';
import Inspector from './inspector';


const ALLOWED_BLOCKS = ["frontis-blocks/accordion-item"]; 


export default function Edit({ attributes, setAttributes, clientId, isSelected }) {

    const { 
        blockID,
        DeviceType,
        
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
            inheritedTabIcon: tabIcon,
            inheritedExpandedIcon: expandedIcon,
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


    const accordionItemsPaddingDesktopWidth = `${accordionItemsDesktopPadding.top}${accordionItemsPaddingUnits[DeviceType]} ${accordionItemsDesktopPadding.right}${accordionItemsPaddingUnits[DeviceType]} ${accordionItemsDesktopPadding.bottom}${accordionItemsPaddingUnits[DeviceType]} ${accordionItemsDesktopPadding.left}${accordionItemsPaddingUnits[DeviceType]}`;
    const accordionItemsPaddingTabletWidth = `${accordionItemsTabPadding.top}${accordionItemsPaddingUnits[DeviceType]} ${accordionItemsTabPadding.right}${accordionItemsPaddingUnits[DeviceType]} ${accordionItemsTabPadding.bottom}${accordionItemsPaddingUnits[DeviceType]} ${accordionItemsTabPadding.left}${accordionItemsPaddingUnits[DeviceType]}`;
    const accordionItemsPaddingMobileWidth = `${accordionItemsMobilePadding.top}${accordionItemsPaddingUnits[DeviceType]} ${accordionItemsMobilePadding.right}${accordionItemsPaddingUnits[DeviceType]} ${accordionItemsMobilePadding.bottom}${accordionItemsPaddingUnits[DeviceType]} ${accordionItemsMobilePadding.left}${accordionItemsPaddingUnits[DeviceType]}`;

    const accordionItemsBorderDesktopWidth = `${accordionItemsDesktopBorderWidth.top}${accordionItemsBorderUnits[DeviceType]} ${accordionItemsDesktopBorderWidth.right}${accordionItemsBorderUnits[DeviceType]} ${accordionItemsDesktopBorderWidth.bottom}${accordionItemsBorderUnits[DeviceType]} ${accordionItemsDesktopBorderWidth.left}${accordionItemsBorderUnits[DeviceType]}`;
    const accordionItemsBorderTabletWidth = `${accordionItemsTabBorderWidth.top}${accordionItemsBorderUnits[DeviceType]} ${accordionItemsTabBorderWidth.right}${accordionItemsBorderUnits[DeviceType]} ${accordionItemsTabBorderWidth.bottom}${accordionItemsBorderUnits[DeviceType]} ${accordionItemsTabBorderWidth.left}${accordionItemsBorderUnits[DeviceType]}`;
    const accordionItemsBorderMobileWidth = `${accordionItemsMobileBorderWidth.top}${accordionItemsBorderUnits[DeviceType]} ${accordionItemsMobileBorderWidth.right}${accordionItemsBorderUnits[DeviceType]} ${accordionItemsMobileBorderWidth.bottom}${accordionItemsBorderUnits[DeviceType]} ${accordionItemsMobileBorderWidth.left}${accordionItemsBorderUnits[DeviceType]}`;

    const accordionItemsBorderRadiusDesktopWidth = `${accordionItemsDesktopBorderRadiusWidth.top}${accordionItemsBorderRadiusUnits[DeviceType]} ${accordionItemsDesktopBorderRadiusWidth.right}${accordionItemsBorderRadiusUnits[DeviceType]} ${accordionItemsDesktopBorderRadiusWidth.bottom}${accordionItemsBorderRadiusUnits[DeviceType]} ${accordionItemsDesktopBorderRadiusWidth.left}${accordionItemsBorderRadiusUnits[DeviceType]}`;
    const accordionItemsBorderRadiusTabletWidth = `${accordionItemsTabBorderRadiusWidth.top}${accordionItemsBorderRadiusUnits[DeviceType]} ${accordionItemsTabBorderRadiusWidth.right}${accordionItemsBorderRadiusUnits[DeviceType]} ${accordionItemsTabBorderRadiusWidth.bottom}${accordionItemsBorderRadiusUnits[DeviceType]} ${accordionItemsTabBorderRadiusWidth.left}${accordionItemsBorderRadiusUnits[DeviceType]}`;
    const accordionItemsBorderRadiusMobileWidth = `${accordionItemsMobileBorderRadiusWidth.top}${accordionItemsBorderRadiusUnits[DeviceType]} ${accordionItemsMobileBorderRadiusWidth.right}${accordionItemsBorderRadiusUnits[DeviceType]} ${accordionItemsMobileBorderRadiusWidth.bottom}${accordionItemsBorderRadiusUnits[DeviceType]} ${accordionItemsMobileBorderRadiusWidth.left}${accordionItemsBorderRadiusUnits[DeviceType]}`;
      
    const accordionMarginDesktopWidth = `${accordionDesktopMargin.top}${accordionMarginUnits[DeviceType]} ${accordionDesktopMargin.right}${accordionMarginUnits[DeviceType]} ${accordionDesktopMargin.bottom}${accordionMarginUnits[DeviceType]} ${accordionDesktopMargin.left}${accordionMarginUnits[DeviceType]}`;
    const accordionMarginTabletWidth = `${accordionTabMargin.top}${accordionMarginUnits[DeviceType]} ${accordionTabMargin.right}${accordionMarginUnits[DeviceType]} ${accordionTabMargin.bottom}${accordionMarginUnits[DeviceType]} ${accordionTabMargin.left}${accordionMarginUnits[DeviceType]}`;
    const accordionMarginMobileWidth = `${accordionMobileMargin.top}${accordionMarginUnits[DeviceType]} ${accordionMobileMargin.right}${accordionMarginUnits[DeviceType]} ${accordionMobileMargin.bottom}${accordionMarginUnits[DeviceType]} ${accordionMobileMargin.left}${accordionMarginUnits[DeviceType]}`;

    const accordionPaddingDesktopWidth = `${accordionDesktopPadding.top}${accordionPaddingUnits[DeviceType]} ${accordionDesktopPadding.right}${accordionPaddingUnits[DeviceType]} ${accordionDesktopPadding.bottom}${accordionPaddingUnits[DeviceType]} ${accordionDesktopPadding.left}${accordionPaddingUnits[DeviceType]}`;
    const accordionPaddingTabletWidth = `${accordionTabPadding.top}${accordionPaddingUnits[DeviceType]} ${accordionTabPadding.right}${accordionPaddingUnits[DeviceType]} ${accordionTabPadding.bottom}${accordionPaddingUnits[DeviceType]} ${accordionTabPadding.left}${accordionPaddingUnits[DeviceType]}`;
    const accordionPaddingMobileWidth = `${accordionMobilePadding.top}${accordionPaddingUnits[DeviceType]} ${accordionMobilePadding.right}${accordionPaddingUnits[DeviceType]} ${accordionMobilePadding.bottom}${accordionPaddingUnits[DeviceType]} ${accordionMobilePadding.left}${accordionPaddingUnits[DeviceType]}`;

    const accordionBorderDesktopWidth = `${accordionDesktopBorderWidth.top}${accordionBorderUnits[DeviceType]} ${accordionDesktopBorderWidth.right}${accordionBorderUnits[DeviceType]} ${accordionDesktopBorderWidth.bottom}${accordionBorderUnits[DeviceType]} ${accordionDesktopBorderWidth.left}${accordionBorderUnits[DeviceType]}`;
    const accordionBorderTabletWidth = `${accordionTabBorderWidth.top}${accordionBorderUnits[DeviceType]} ${accordionTabBorderWidth.right}${accordionBorderUnits[DeviceType]} ${accordionTabBorderWidth.bottom}${accordionBorderUnits[DeviceType]} ${accordionTabBorderWidth.left}${accordionBorderUnits[DeviceType]}`;
    const accordionBorderMobileWidth = `${accordionMobileBorderWidth.top}${accordionBorderUnits[DeviceType]} ${accordionMobileBorderWidth.right}${accordionBorderUnits[DeviceType]} ${accordionMobileBorderWidth.bottom}${accordionBorderUnits[DeviceType]} ${accordionMobileBorderWidth.left}${accordionBorderUnits[DeviceType]}`;

    const accordionBorderRadiusDesktopWidth = `${accordionDesktopBorderRadiusWidth.top}${accordionBorderRadiusUnits[DeviceType]} ${accordionDesktopBorderRadiusWidth.right}${accordionBorderRadiusUnits[DeviceType]} ${accordionDesktopBorderRadiusWidth.bottom}${accordionBorderRadiusUnits[DeviceType]} ${accordionDesktopBorderRadiusWidth.left}${accordionBorderRadiusUnits[DeviceType]}`;
    const accordionBorderRadiusTabletWidth = `${accordionTabBorderRadiusWidth.top}${accordionBorderRadiusUnits[DeviceType]} ${accordionTabBorderRadiusWidth.right}${accordionBorderRadiusUnits[DeviceType]} ${accordionTabBorderRadiusWidth.bottom}${accordionBorderRadiusUnits[DeviceType]} ${accordionTabBorderRadiusWidth.left}${accordionBorderRadiusUnits[DeviceType]}`;
    const accordionBorderRadiusMobileWidth = `${accordionMobileBorderRadiusWidth.top}${accordionBorderRadiusUnits[DeviceType]} ${accordionMobileBorderRadiusWidth.right}${accordionBorderRadiusUnits[DeviceType]} ${accordionMobileBorderRadiusWidth.bottom}${accordionBorderRadiusUnits[DeviceType]} ${accordionMobileBorderRadiusWidth.left}${accordionBorderRadiusUnits[DeviceType]}`;

    console.log(attributes);

    return (
        <>
            <style>
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
