import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
    const {
        blockID,
        blockStyle,
        backToTopPresetType,
        backToTopPosition,
        backToTopEntranceAnimation,
        backToTopContentType,
        backToTopIcon,
        backToTopIconType,
        backToTopImage,
        backToTopImageAlt,
        backToTopText,
        backToTopImageID
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-back-to-top-main-wrapper ${blockID} fb-position-${backToTopPosition} fb-animation-${backToTopEntranceAnimation}`,
    });

    return (
        <>
            <div {...blockProps}>
                <div className=" fb-back-to-top-inner-wrapper ">
                    <div className=" fb-back-to-top-content-wrapper " >
                        {(backToTopContentType === "icon" || backToTopContentType === "text-icon") && (
                            <div className="fb-back-to-top-image-wrapper">
                                {backToTopIconType === "icon" && renderSVG(backToTopIcon)}
                                {backToTopIconType === "image" && backToTopImage && (
                                    <img src={backToTopImage} alt={backToTopImageAlt} />
                                )}
                            </div>
                        )}
                        {(backToTopContentType === "text" || backToTopContentType === "text-icon") && (
                            <span>{backToTopText}</span>
                        )}
                    </div>
                </div>
            </div>
            <style>{blockStyle}</style>
        </>
    );
}
