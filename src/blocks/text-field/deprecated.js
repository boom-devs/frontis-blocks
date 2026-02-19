import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import attributes from './attributes.js';

const v1_0_3 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
        const {
            blockID,
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
            className: `frontis-forms-accordion-item-main-wrapper ${parentBlockID} ${blockID}`,
        });

        return (
            <>
                <div {...blockProps}>
                    <div className={`frontis-forms-accordion-item-wrapper ${accordionItemGlobalWraperClass}`} id={accordionItemGlobalWraperID} data-id={parentBlockID}>
                        <div className={`frontis-forms-accordion-item-title-wrapper ${parentBlockID}`}>
                            <div className={`frontis-forms-accordion-title-inner`}>
                                {titlePrefixType !== 'none' && (
                                    <div className="frontis-forms-accordion-title-prefix">
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
                                    className="frontis-forms-accordion-title"
                                />

                                {titleSuffixType !== 'none' && (
                                    <div className="frontis-forms-accordion-title-suffix">

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
                                <div className="frontis-forms-accordion-tab-icon">
                                    {inheritedTabIconSwitcher === 'icon' && inheritedTabIcon && renderSVG(inheritedTabIcon)}
                                    {inheritedTabIconSwitcher === 'image' && inheritedTabIcon && <img src={inheritedTabImageUrl}/>}
                                </div>
                            }
                            {inheritedDisplayIcon && 
                                <div className="frontis-forms-accordion-expanded-icon">
                                    {inheritedExpandedIconSwitcher === 'icon' && inheritedExpandedIcon && renderSVG(inheritedExpandedIcon)}
                                    {inheritedExpandedIconSwitcher === 'image' && inheritedExpandedIcon && <img src={inheritedExpandedImageUrl}/>}
                                </div>
                            }
                        </div>
                        <div
                            className={`frontis-forms-accordion-content-wrapper ${parentBlockID}`}
                        >
                            <div className="frontis-forms-accordion-content">
                                <InnerBlocks.Content />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    },
};

export default [v1_0_3];