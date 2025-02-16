/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps, MediaUpload, RichText, } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { useRef, memo , useEffect, useMemo} from "@wordpress/element";
import Inspector from "./inspector";
import './editor.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";


const Edit = (props) => {
    const { attributes, setAttributes, isSelected, clientId, context } = props;

    const {
        parentBlockID ,
        blockID,
		blockStyle,
        deviceType,
        clickable,

        title,
        titlePrefixType,
        titlePrefixIcon,
        titlePrefixImgUrl,
        titlePrefixImgId,

        titleSuffixType,
        titleSuffixIcon,
        titleSuffixImgUrl,
        titleSuffixImgId,

        toggleClick,
        inheritedTagName,
        inheritedTabIconSwitcher,
        inheritedDisplayIcon,
        inheritedAccordionType,
        inheritedTabIcon,
        inheritedTabImageUrl,
        inheritedExpandedIconSwitcher,
        inheritedExpandedIcon,
        inheritedExpandedImageUrl,

        accordionItemGlobalWraperID,
        accordionItemGlobalWraperClass,

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



    return (
        <>
            {isSelected && <Inspector {...props} />}

            <div {...blockProps}>
                <div className={`fb-accordion-item-wrapper for_edit_page ${accordionItemGlobalWraperClass}`} id={accordionItemGlobalWraperID} ref={accordionTitle} data-id={parentBlockID}>
                    <div className={`fb-accordion-item-title-wrapper ${parentBlockID} ${clickable === true ? 'active' : ''}`} onClick={handleSlidingOfAccordion}>
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
                        className={`fb-accordion-content-wrapper ${blockID} ${parentBlockID} ${clickable === true ? 'active' : ''}`}
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
