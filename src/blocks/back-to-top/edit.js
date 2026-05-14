import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import {
    useBlockProps,
} from '@wordpress/block-editor';

/**
* Internal dependencies
*/
import './editor.scss';

import Inspector from "./inspector";
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import backToTopStyle from "./styling";

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
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

    // Handle block ID generation (handles duplication and initial ID)
    useBlockIdGenerator({
        clientId,
        blockID,
        blockPrefix: 'fb-back-to-top',
        isSelected,
        attributes,
        setAttributes,
    });

    /** Start Generate Block Style */
    useEffect(() => {
        if (blockID) {
            const css = backToTopStyle(attributes);
            setAttributes({ blockStyle: css });
        }
    }, [attributes, blockID]);
    /** End Generate Block Style */

    const blockProps = useBlockProps({
        className: `fb-back-to-top-main-wrapper ${blockID} fb-position-${backToTopPosition} fb-animation-${backToTopEntranceAnimation} is-editor fb-show`,
    });


    return (
        <>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <div {...blockProps}>
                <div className='fb-back-to-top-wrapper'>
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
            </div>
            <style>{blockStyle}</style>
        </>
    );

}