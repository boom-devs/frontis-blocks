/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps, MediaUpload, RichText, } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { useRef, memo , useEffect} from "@wordpress/element";
import Inspector from "./inspector";
import './editor.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";


const Edit = (props) => {
    const { attributes, setAttributes, isSelected, clientId, context } = props;

    const {
        blockID,
        deviceType,
        clickable,
        toggleClick,
        parentBlockID,

        inheritedTagName,
        inheritedDisplayIcon,
        inheritedTabIconSwitcher,
        inheritedTabImageUrl,
        inheritedTabIcon,
        inheritedExpandedIconSwitcher,
        inheritedExpandedImageUrl,
        inheritedExpandedIcon,

        title,
        titlePrefixType,
        titlePrefixIcon,
        titlePrefixImgUrl,
        titlePrefixImgId,

        titleSuffixType,
        titleSuffixIcon,
        titleSuffixImgUrl,
        titleSuffixImgId,

        titlePrefixColor,
        titlePrefixHoverColor,

        titleSuffixColor,
        titleSuffixHoverColor,

        // Accordion Item Advance
        accordionItemZIndex,
        accordionItemPaddingUnits,
        accordionItemDesktopPadding,
        accordionItemTabPadding,
        accordionItemMobilePadding,
        accordionItemMarginUnits,
        accordionItemDesktopMargin,
        accordionItemTabMargin,
        accordionItemMobileMargin,
        accordionItemBgColor,
        accordionItemBgHoverColor,
        accordionItemBorder,
        accordionItemBorderColor,
        accordionItemBorderHoverColor,
        accordionItemBorderUnits,
        accordionItemDesktopBorderWidth,
        accordionItemTabBorderWidth,
        accordionItemMobileBorderWidth,
        accordionItemBorderRadiusUnits,
        accordionItemDesktopBorderRadiusWidth,
        accordionItemTabBorderRadiusWidth,
        accordionItemMobileBorderRadiusWidth,
        accordionItemDesktopSwitcher,
        accordionItemTabletSwitcher,
        accordionItemMobileSwitcher,
    } = attributes;


    useEffect(() => {
        setAttributes({
            parentBlockID:  context["fb/accordionparentBlockID"],
            inheritedAccordionType:  context["fb/accordionInheritedAccordionType"],
            inheritedDisplayIcon: context["fb/accordionInheritedDisplayIcon"],
            inheritedTabIconSwitcher: context["fb/accordionInheritedTabIconSwitcher"],
            inheritedTabIcon: context["fb/accordionInheritedTabIcon"],
            inheritedTabImageUrl: context["fb/accordionInheritedTabImageUrl"],
            inheritedExpandedIconSwitcher: context["fb/accordionInheritedExpandedIconSwitcher"],
            inheritedExpandedIcon: context["fb/accordionInheritedExpandedIcon"],
            inheritedExpandedImageUrl: context["fb/accordionInheritedExpandedImageUrl"],
            inheritedTagName: context["fb/accordionInheritedTagName"],
            faqSchema: context["fb/accordionFaqSchema"],
        })
    }, [
        context["fb/accordionparentBlockID"],
        context["fb/accordionInheritedAccordionType"],
        context["fb/accordionInheritedDisplayIcon"],
        context["fb/accordionInheritedTabIconSwitcher"],
        context["fb/accordionInheritedTabIcon"],
        context["fb/accordionInheritedTabImageUrl"],
        context["fb/accordionInheritedExpandedIconSwitcher"],
        context["fb/accordionInheritedExpandedIcon"],
        context["fb/accordionInheritedExpandedImageUrl"],
        context["fb/accordionInheritedTagName"],
        context["fb/accordionFaqSchema"]
    ])

    const blockProps = useBlockProps({
        className: `fb-accordion-item-main-wrapper ${parentBlockID} ${blockID}`,
    });

    const accordionTitle = useRef(null);

    const handleSlidingOfAccordion = () => {
        let contentWrapper = accordionTitle.current.parentNode.querySelector(`.fb-accordion-content-wrapper.${blockID}`);

        if (contentWrapper.style.display === "block") {
            contentWrapper.style.display = "none";
            setAttributes({toggleClick: false});
        } else {
            contentWrapper.style.display = "block";
            contentWrapper.style.opacity = "1";
            setAttributes({toggleClick: true});
        }
    };

    const accordionItemMarginDesktopWidth = `${accordionItemDesktopMargin.top}${accordionItemMarginUnits[deviceType]} ${accordionItemDesktopMargin.right}${accordionItemMarginUnits[deviceType]} ${accordionItemDesktopMargin.bottom}${accordionItemMarginUnits[deviceType]} ${accordionItemDesktopMargin.left}${accordionItemMarginUnits[deviceType]}`;
	const accordionItemMarginTabletWidth = `${accordionItemTabMargin.top}${accordionItemMarginUnits[deviceType]} ${accordionItemTabMargin.right}${accordionItemMarginUnits[deviceType]} ${accordionItemTabMargin.bottom}${accordionItemMarginUnits[deviceType]} ${accordionItemTabMargin.left}${accordionItemMarginUnits[deviceType]}`;
	const accordionItemMarginMobileWidth = `${accordionItemMobileMargin.top}${accordionItemMarginUnits[deviceType]} ${accordionItemMobileMargin.right}${accordionItemMarginUnits[deviceType]} ${accordionItemMobileMargin.bottom}${accordionItemMarginUnits[deviceType]} ${accordionItemMobileMargin.left}${accordionItemMarginUnits[deviceType]}`;
	
    const accordionItemPaddingDesktopWidth = `${accordionItemDesktopPadding.top}${accordionItemPaddingUnits[deviceType]} ${accordionItemDesktopPadding.right}${accordionItemPaddingUnits[deviceType]} ${accordionItemDesktopPadding.bottom}${accordionItemPaddingUnits[deviceType]} ${accordionItemDesktopPadding.left}${accordionItemPaddingUnits[deviceType]}`;
	const accordionItemPaddingTabletWidth = `${accordionItemTabPadding.top}${accordionItemPaddingUnits[deviceType]} ${accordionItemTabPadding.right}${accordionItemPaddingUnits[deviceType]} ${accordionItemTabPadding.bottom}${accordionItemPaddingUnits[deviceType]} ${accordionItemTabPadding.left}${accordionItemPaddingUnits[deviceType]}`;
	const accordionItemPaddingMobileWidth = `${accordionItemMobilePadding.top}${accordionItemPaddingUnits[deviceType]} ${accordionItemMobilePadding.right}${accordionItemPaddingUnits[deviceType]} ${accordionItemMobilePadding.bottom}${accordionItemPaddingUnits[deviceType]} ${accordionItemMobilePadding.left}${accordionItemPaddingUnits[deviceType]}`;
	
    const accordionItemBorderDesktopWidth = `${accordionItemDesktopBorderWidth.top}${accordionItemBorderUnits[deviceType]} ${accordionItemDesktopBorderWidth.right}${accordionItemBorderUnits[deviceType]} ${accordionItemDesktopBorderWidth.bottom}${accordionItemBorderUnits[deviceType]} ${accordionItemDesktopBorderWidth.left}${accordionItemBorderUnits[deviceType]}`;
	const accordionItemBorderTabletWidth = `${accordionItemTabBorderWidth.top}${accordionItemBorderUnits[deviceType]} ${accordionItemTabBorderWidth.right}${accordionItemBorderUnits[deviceType]} ${accordionItemTabBorderWidth.bottom}${accordionItemBorderUnits[deviceType]} ${accordionItemTabBorderWidth.left}${accordionItemBorderUnits[deviceType]}`;
	const accordionItemBorderMobileWidth = `${accordionItemMobileBorderWidth.top}${accordionItemBorderUnits[deviceType]} ${accordionItemMobileBorderWidth.right}${accordionItemBorderUnits[deviceType]} ${accordionItemMobileBorderWidth.bottom}${accordionItemBorderUnits[deviceType]} ${accordionItemMobileBorderWidth.left}${accordionItemBorderUnits[deviceType]}`;
	
    const accordionItemBorderRadiusDesktopWidth = `${accordionItemDesktopBorderRadiusWidth.top}${accordionItemBorderRadiusUnits[deviceType]} ${accordionItemDesktopBorderRadiusWidth.right}${accordionItemBorderRadiusUnits[deviceType]} ${accordionItemDesktopBorderRadiusWidth.bottom}${accordionItemBorderRadiusUnits[deviceType]} ${accordionItemDesktopBorderRadiusWidth.left}${accordionItemBorderRadiusUnits[deviceType]}`;
	const accordionItemBorderRadiusTabletWidth = `${accordionItemTabBorderRadiusWidth.top}${accordionItemBorderRadiusUnits[deviceType]} ${accordionItemTabBorderRadiusWidth.right}${accordionItemBorderRadiusUnits[deviceType]} ${accordionItemTabBorderRadiusWidth.bottom}${accordionItemBorderRadiusUnits[deviceType]} ${accordionItemTabBorderRadiusWidth.left}${accordionItemBorderRadiusUnits[deviceType]}`;
	const accordionItemBorderRadiusMobileWidth = `${accordionItemMobileBorderRadiusWidth.top}${accordionItemBorderRadiusUnits[deviceType]} ${accordionItemMobileBorderRadiusWidth.right}${accordionItemBorderRadiusUnits[deviceType]} ${accordionItemMobileBorderRadiusWidth.bottom}${accordionItemBorderRadiusUnits[deviceType]} ${accordionItemMobileBorderRadiusWidth.left}${accordionItemBorderRadiusUnits[deviceType]}`;
	

    return (
        <>
            {isSelected && <Inspector {...props} />}

            {/* <style>
                {`
                    .fb-accordion-item-main-wrapper.${blockID} {
                        position: relative;
                        ${accordionItemZIndex && `z-index: ${accordionItemZIndex}`};
                    }

                    .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper {
                        ${accordionItemBgColor !== undefined ? `background-color: ${accordionItemBgColor};` : ''};
                        ${
                            accordionBgType === "gradient"
                                ? `background: ${
                                        testCustomGradientSwitcher && testCustomGradientInputValue
                                            ? testCustomGradientInputValue
                                            : testGradientColor
                                  };`
                                : accordionBgImageUrl && accordionBgImageUrl !== "null"
                                ? `
                              ${
                                    accordionBgImageUrl
                                        ? `background-image: url(${accordionBgImageUrl});`
                                        : ""
                                }
                              ${
                                    accordionBgImagePosition
                                        ? `background-position: ${accordionBgImagePosition};`
                                        : ""
                                }
                              ${
                                    accordionBgImageAttachment
                                        ? `background-attachment: ${accordionBgImageAttachment};`
                                        : ""
                                }
                              ${
                                    accordionBgImageRepeat
                                        ? `background-repeat: ${accordionBgImageRepeat};`
                                        : ""
                                }
                              ${
                                    accordionBgImageSize
                                        ? `background-size: ${accordionBgImageSize};`
                                        : ""
                                }
                            `
                                : `background: ${testClassicColor};`
                        }
                        padding: ${accordionItemPaddingDesktopWidth};
                        margin: ${accordionItemMarginDesktopWidth};
                        border-style: ${accordionItemBorder};
                        border-width: ${accordionItemBorderDesktopWidth};
                        ${accordionItemBorderColor !== undefined ? `border-color: ${accordionItemBorderColor};` : ''};
                        border-radius: ${accordionItemBorderRadiusDesktopWidth};
                        transition: all .3s ease-in-out;
                    }
                    .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper:hover {
                        ${accordionItemBgHoverColor !== undefined ? `background-color: ${accordionItemBgHoverColor};` : ''};
                        ${accordionItemBorderHoverColor !== undefined ? `border-color: ${accordionItemBorderHoverColor};` : ''};
                        transition: all .3s ease-in-out;
                    }
                    .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .block-editor-block-list__layout {
                        display: block;
                    }
                    .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .block-editor-block-list__layout p {
                        margin: 0;
                    }

                    .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix {
                        fill: ${titlePrefixColor};
                    }
                    .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix {
                        fill: ${titleSuffixColor};
                    }
                    .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-title-inner .fb-accordion-title-prefix {
                        fill: ${titlePrefixHoverColor};
                    }
                    .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-title-inner .fb-accordion-title-suffix {
                        fill: ${titleSuffixHoverColor};
                    }

                    @media only screen and (max-width: 1024px) {
                        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper {
                            padding: ${accordionItemPaddingTabletWidth};
                            margin: ${accordionItemMarginTabletWidth};
                            border-radius: ${accordionItemBorderRadiusTabletWidth};
                        }
                    }
                    @media only screen and (max-width: 767px) {
                        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper {
                            padding: ${accordionItemPaddingMobileWidth};
                            margin: ${accordionItemMarginMobileWidth};
                            border-radius: ${accordionItemBorderRadiusMobileWidth};
                        }
                    }
                `}
            </style> */}

            <div {...blockProps}>
                <div className={`fb-accordion-item-wrapper for_edit_page`} ref={accordionTitle}>
                    <div className={`fb-accordion-item-title-wrapper`} onClick={handleSlidingOfAccordion}>
                        <div className={`fb-accordion-title-inner`}>
                            {titlePrefixType !== 'none' && (
                                <div className="fb-accordion-title-prefix">
                                    {titlePrefixType === 'icon' && titlePrefixIcon && (
                                           renderSVG(titlePrefixIcon)
                                    )}

                                    {titlePrefixType === "image" ? (
                                        <MediaUpload
                                            onSelect={(media) =>
                                                setAttributes({
                                                    titlePrefixImgUrl: media.url,
                                                    titlePrefixImgId: media.id,
                                                    titlePrefixImgAlt: media.alt,
                                                })
                                            }
                                            type="image"
                                            value={titlePrefixImgId}
                                            render={({ open }) => {
                                                if (!titlePrefixImgUrl) {
                                                    return (
                                                        <Button
                                                            label={__(
                                                                "Upload Image",
                                                                "frontis-blocks"
                                                            )}
                                                            icon="format-image"
                                                            onClick={open}
                                                        />
                                                    );
                                                } else {
                                                    return (
                                                        <img src={titlePrefixImgUrl} />
                                                    );
                                                }
                                            }}
                                        />
                                    ) : null}
                                </div>
                            )}

                            <RichText
                                value={title}
                                tagName={inheritedTagName}
                                className="fb-accordion-title"
                                onChange={ (value) => setAttributes({ title: value }) }
                            />

                            {titleSuffixType !== 'none' && (
                                <div className="fb-accordion-title-suffix">

                                    {titleSuffixType === 'icon' && titleSuffixIcon && (
                                        renderSVG(titleSuffixIcon)
                                    )}

                                    {titleSuffixType === "image" ? (
                                        <MediaUpload
                                            onSelect={(media) =>
                                                setAttributes({
                                                    titleSuffixImgUrl: media.url,
                                                    titleSuffixImgId: media.id,
                                                    titleSuffixImgAlt: media.alt,
                                                })
                                            }
                                            type="image"
                                            value={titleSuffixImgId}
                                            render={({ open }) => {
                                                if (!titleSuffixImgUrl) {
                                                    return (
                                                        <Button
                                                            label={__(
                                                                "Upload Image",
                                                                "frontis-blocks"
                                                            )}
                                                            icon="format-image"
                                                            onClick={open}
                                                        />
                                                    );
                                                } else {
                                                    return (
                                                        <img src={titleSuffixImgUrl} />
                                                    );
                                                }
                                            }}
                                        />
                                    ) : null}
                                </div>
                            )}
                        </div>
                        <div className="fb-accordion-icon">
                            {inheritedTabIconSwitcher === 'icon' && inheritedDisplayIcon && toggleClick === false && renderSVG(inheritedTabIcon)}
                            {inheritedTabIconSwitcher === 'image' && inheritedDisplayIcon && toggleClick === false && <img src={inheritedTabImageUrl}/>}
                            {inheritedExpandedIconSwitcher === 'icon' && inheritedDisplayIcon && toggleClick === true && renderSVG(inheritedExpandedIcon)}
                            {inheritedExpandedIconSwitcher === 'image' && inheritedDisplayIcon && toggleClick === true && <img src={inheritedExpandedImageUrl}/>}
                        </div>
                    </div>
                    <div
                        className={`fb-accordion-content-wrapper ${blockID}`}
                        style={{display: "none"}}
                    >
                        <div className="fb-accordion-content">
                            <InnerBlocks templateLock={false} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(Edit);
