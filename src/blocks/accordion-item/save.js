
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import './style.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import { useState } from "@wordpress/element";

const save = ({ attributes }) => {

    const {
        blockID,
        clickable,
        parentBlockID,

        inheritedTagName,
        inheritedDisplayIcon,
        inheritedTabIconSwitcher,
        inheritedTabImageUrl,
        inheritedTabImageAlt,
        inheritedTabIcon,
        inheritedExpandedIconSwitcher,
        inheritedExpandedImageUrl,
        inheritedExpandedImageAlt,
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
                <div className={`fb-accordion-item-wrapper ${accordionItemGlobalWraperClass}`} id={accordionItemGlobalWraperID} data-id={parentBlockID}>
                    <div className={`fb-accordion-item-title-wrapper ${parentBlockID} ${clickable === true ? 'active' : ''}`}>
                        <div className={`fb-accordion-title-inner`}>
                            {titlePrefixType !== 'none' && (
                                <div className="fb-accordion-title-prefix">
                                    {titlePrefixType === 'icon' && titlePrefixIcon && (
                                        renderSVG(titlePrefixIcon)
                                    )}

                                    {titlePrefixType === 'image' && titlePrefixImgUrl && (
                                        <img
                                            src={titlePrefixImgUrl}
                                            alt={titlePrefixImgAlt}
                                        />
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
                                        <img
                                            src={titleSuffixImgUrl}
                                            alt={titleSuffixImgAlt}
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                        {inheritedDisplayIcon &&
                            <div className="fb-accordion-tab-icon">
                                {inheritedTabIconSwitcher === 'icon' && inheritedTabIcon && renderSVG(inheritedTabIcon)}
                                {inheritedTabIconSwitcher === 'image' && inheritedTabImageUrl && <img src={inheritedTabImageUrl} alt={inheritedTabImageAlt} />}
                            </div>
                        }
                        {inheritedDisplayIcon &&
                            <div className="fb-accordion-expanded-icon">
                                {inheritedExpandedIconSwitcher === 'icon' && inheritedExpandedIcon && renderSVG(inheritedExpandedIcon)}
                                {inheritedExpandedIconSwitcher === 'image' && inheritedExpandedImageUrl && <img src={inheritedExpandedImageUrl} alt={inheritedExpandedImageAlt} />}
                            </div>
                        }
                    </div>
                    <div
                        className={`fb-accordion-content-wrapper ${parentBlockID} ${clickable === true ? 'active' : ''}`}
                    >
                        <div className="fb-accordion-content">
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default save;


