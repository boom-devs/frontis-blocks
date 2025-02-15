
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import './style.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import {useState } from "@wordpress/element";

const save = ({ attributes }) => {

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
        className: `fb-accordion-item-main-wrapper ${parentBlockID} ${blockID} ${accordionItemGlobalWraperClass}`,
    });


    return (
        <>
            <div {...blockProps}>
                <div className={`fb-accordion-item-wrapper`} id={accordionItemGlobalWraperID} data-id={parentBlockID}>
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
                                            alt=""
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
                                            alt=""
                                        />
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
                                {inheritedExpandedIconSwitcher === 'image' && inheritedExpandedIcon && <img src={inheritedExpandedImageUrl}/>}
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


