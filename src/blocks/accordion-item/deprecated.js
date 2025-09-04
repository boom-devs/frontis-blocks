// deprecated/versions.js
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import { cloneElement } from "@wordpress/element";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import attributes from "./attributes";

// --- Helper for v1_0_4 ---
const normalizeSvg = (node) => {
    if (!node) return node;
    if (typeof node === "string") {
        return node.replace(
            /https:\/\/www\.w3\.org\/2000\/svg/g,
            "https://www.w3.org/2000/svg"
        );
    }
    if (node.type === "svg") {
        return cloneElement(node, { xmlns: "https://www.w3.org/2000/svg" });
    }
    return node;
};

// --- v1_0_3 (original deprecated) ---
const v1_0_3 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
        const {
            blockID,
            clickable,
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

            accordionItemGlobalWraperID,
            accordionItemGlobalWraperClass,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-accordion-item-main-wrapper ${parentBlockID} ${blockID}`,
        });

        return (
            <>
                <div {...blockProps}>
                    <div className={`fb-accordion-item-wrapper ${accordionItemGlobalWraperClass}`} id={accordionItemGlobalWraperID} data-id={parentBlockID}>
                        <div className={`fb-accordion-item-title-wrapper ${parentBlockID} ${clickable === true ? 'active' : ''}`}>
                            <div className={`fb-accordion-title-inner`}>
                                {titlePrefixType !== 'none' && (
                                    <div className="fb-accordion-title-prefix">
                                        {titlePrefixType === 'icon' && titlePrefixIcon && (
                                            renderSVG(titlePrefixIcon)
                                        )}
                                        {titlePrefixType === 'image' && titlePrefixImgUrl && (
                                            <img src={titlePrefixImgUrl} alt="" />
                                        )}
                                    </div>
                                )}

                                <RichText.Content
                                    value={title}
                                    tagName={inheritedTagName}
                                    className="fb-accordion-title"
                                />

                                {titleSuffixType !== 'none' && (
                                    <div className="fb-accordion-title-suffix">
                                        {titleSuffixType === 'icon' && titleSuffixIcon && (
                                            renderSVG(titleSuffixIcon)
                                        )}
                                        {titleSuffixType === 'image' && titleSuffixImgUrl && (
                                            <img src={titleSuffixImgUrl} alt="" />
                                        )}
                                    </div>
                                )}
                            </div>
                            {inheritedDisplayIcon && 
                                <div className="fb-accordion-tab-icon">
                                    {inheritedTabIconSwitcher === 'icon' && inheritedTabIcon && renderSVG(inheritedTabIcon)}
                                    {inheritedTabIconSwitcher === 'image' && inheritedTabIcon && <img src={inheritedTabImageUrl}/>}
                                </div>
                            }
                            {inheritedDisplayIcon && 
                                <div className="fb-accordion-expanded-icon">
                                    {inheritedExpandedIconSwitcher === 'icon' && inheritedExpandedIcon && renderSVG(inheritedExpandedIcon)}
                                    {inheritedExpandedIconSwitcher === 'image' && inheritedExpandedImageUrl && <img src={inheritedExpandedImageUrl}/>}
                                </div>
                            }
                        </div>
                        <div className={`fb-accordion-content-wrapper ${parentBlockID} ${clickable === true ? 'active' : ''}`}>
                            <div className="fb-accordion-content">
                                <InnerBlocks.Content />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    },
};

// --- v1_0_8 (fixed version with svg + alt fixes) ---
const v1_0_8 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
        const {
            blockID,
            clickable,
            parentBlockID,

            inheritedTagName,
            inheritedDisplayIcon,
            inheritedTabIconSwitcher,
            inheritedTabImageUrl,
            inheritedTabImgAlt,
            inheritedTabIcon,
            inheritedExpandedIconSwitcher,
            inheritedExpandedImageUrl,
            inheritedExpandedImgAlt,
            inheritedExpandedIcon,

            title,
            titlePrefixType,
            titlePrefixIcon,
            titlePrefixImgUrl,
            titlePrefixImgAlt,
            titlePrefixImgId,

            titleSuffixType,
            titleSuffixIcon,
            titleSuffixImgUrl,
            titleSuffixImgAlt,
            titleSuffixImgId,

            accordionItemGlobalWraperID,
            accordionItemGlobalWraperClass,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-accordion-item-main-wrapper ${parentBlockID} ${blockID}`,
        });

        return (
            <>
                <div {...blockProps}>
                    <div
                        className={`fb-accordion-item-wrapper ${accordionItemGlobalWraperClass}`}
                        id={accordionItemGlobalWraperID}
                        data-id={parentBlockID}
                    >
                        <div
                            className={`fb-accordion-item-title-wrapper ${parentBlockID} ${
                                clickable === true ? "active" : ""
                            }`}
                        >
                            <div className={`fb-accordion-title-inner`}>
                                {titlePrefixType !== "none" && (
                                    <div className="fb-accordion-title-prefix">
                                        {titlePrefixType === "icon" && titlePrefixIcon && normalizeSvg(renderSVG(titlePrefixIcon))}
                                        {titlePrefixType === "image" && titlePrefixImgUrl && (
                                            <img src={titlePrefixImgUrl} alt={titlePrefixImgAlt || ""} />
                                        )}
                                    </div>
                                )}

                                <RichText.Content
                                    value={title}
                                    tagName={inheritedTagName}
                                    className="fb-accordion-title"
                                />

                                {titleSuffixType !== "none" && (
                                    <div className="fb-accordion-title-suffix">
                                        {titleSuffixType === "icon" && titleSuffixIcon && normalizeSvg(renderSVG(titleSuffixIcon))}
                                        {titleSuffixType === "image" && titleSuffixImgUrl && (
                                            <img src={titleSuffixImgUrl} alt={titleSuffixImgAlt || ""} />
                                        )}
                                    </div>
                                )}
                            </div>

                            {inheritedDisplayIcon && (
                                <div className="fb-accordion-tab-icon">
                                    {inheritedTabIconSwitcher === "icon" && inheritedTabIcon && normalizeSvg(renderSVG(inheritedTabIcon))}
                                    {inheritedTabIconSwitcher === "image" && inheritedTabImageUrl && (
                                        <img src={inheritedTabImageUrl} alt={inheritedTabImgAlt || ""} />
                                    )}
                                </div>
                            )}

                            {inheritedDisplayIcon && (
                                <div className="fb-accordion-expanded-icon">
                                    {inheritedExpandedIconSwitcher === "icon" && inheritedExpandedIcon && normalizeSvg(renderSVG(inheritedExpandedIcon))}
                                    {inheritedExpandedIconSwitcher === "image" && inheritedExpandedImageUrl && (
                                        <img src={inheritedExpandedImageUrl} alt={inheritedExpandedImgAlt || ""} />
                                    )}
                                </div>
                            )}
                        </div>

                        <div className={`fb-accordion-content-wrapper ${parentBlockID} ${clickable === true ? "active" : ""}`}>
                            <div className="fb-accordion-content">
                                <InnerBlocks.Content />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    },
};

// --- Export both versions together ---
export default [v1_0_8, v1_0_3];