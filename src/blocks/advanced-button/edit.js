import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    RichText,
    BlockControls,
    AlignmentToolbar,
    MediaPlaceholder,
} from '@wordpress/block-editor';

import { useRef, lazy, Suspense } from '@wordpress/element';

/**
 * Internal dependencies
 */
const Inspector = lazy(() => import('./inspector'));
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import DynamicTextValue from '@Components/dynamic-text-value';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId, context }) {
    const {
        blockId,
        blockStyle,
        buttonAlignment,
        buttonTextSwitcher,
        buttonText,
        buttonUrl,
        buttonTargetUrl,
        buttonIcon,
        buttonIconAlign,
        buttonIconPosition,

        buttonIconImageUrl,
        buttonIconImageAlt,

        buttonGlobalWraperID,
        buttonGlobalWraperClass,

        advancedBtnDesktopSwitcher,
        advancedBtnTabletSwitcher,
        advancedBtnMobileSwitcher,

        dynamicTextEnabled,
        dynamicTextSource,
        dynamicTextPostId,
        dynamicTextPostType,
        dynamicTextPostLabel,
        dynamicTextField,
        dynamicFeaturedImageField,

        dynamicTextDateType,
        dynamicTextDateFormat,

        dynamicTextTimeType,
        dynamicTextTimeFormat,

        dynamicTextCommentsZeroText,
        dynamicTextCommentsOneText,
        dynamicTextCommentsManyText,

        dynamicTextTermsTaxonomy,
        dynamicTextTermsSeparator,
        dynamicTextEnableLink,
        dynamicTextLinkSource,
    } = attributes;

    const blockProps = useBlockProps({
        className: `frontis-block fb-advanced-button-main-wrapper ${blockId} ${advancedBtnDesktopSwitcher && 'fb-desktop-responsive'} ${advancedBtnTabletSwitcher && 'fb-tablet-responsive'} ${advancedBtnMobileSwitcher && 'fb-mobile-responsive'}`,
    });


    /**
     * Manages tab button settings and switches to block settings on click
     */
    const panelRef = useRef(null);
    SwitchToBlockSettings(panelRef);

    /**
     * Prevent link navigation in the editor and focus on text
     */
    const handleButtonClick = (event) => {
        event.preventDefault();
    };

    /**
     * Dynamic Text Value for Title
     */
    const { dynamicDisplayValue, dynamicDisplayLink } = DynamicTextValue({
        textEnabled: dynamicTextEnabled,
        textSource: dynamicTextSource,
        textField: dynamicTextField,

        textPostId: dynamicTextPostId,
        textPostType: dynamicTextPostType,
        textPostLabel: dynamicTextPostLabel,

        textFeaturedImageField: dynamicFeaturedImageField,

        textDateType: dynamicTextDateType,
        textDateFormat: dynamicTextDateFormat,
        textTimeType: dynamicTextTimeType,
        textTimeFormat: dynamicTextTimeFormat,

        textCommentsZeroText: dynamicTextCommentsZeroText,
        textCommentsOneText: dynamicTextCommentsOneText,
        textCommentsManyText: dynamicTextCommentsManyText,

        textTermsTaxonomy: dynamicTextTermsTaxonomy,
        textTermsSeparator: dynamicTextTermsSeparator,

        textLinkEnabled: dynamicTextEnableLink,
        textLinkSource: dynamicTextLinkSource,

        context,
    });

    return (
        <>
            <Suspense fallback={null}>
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                    clientId={clientId}
                />
            </Suspense>

            <BlockControls>
                <AlignmentToolbar
                    value={buttonAlignment}
                    onChange={(value) => setAttributes({ buttonAlignment: value })}
                    controls={['left', 'center', 'right', 'justify']}
                />
            </BlockControls>

            <div {...blockProps}>
                <div className={`fb-parent-wrapper fb-advanced-button-wrapper ${buttonGlobalWraperClass}`} id={buttonGlobalWraperID} style={{ textAlign: buttonAlignment }} ref={panelRef}>
                    <a
                        className="fb-advanced-button"
                        rel={buttonTargetUrl ? 'noopener noreferrer' : undefined}
                        onClick={handleButtonClick}
                    >
                        {buttonIconPosition === 'left' && buttonIconAlign === 'icon-text' && (
                            <div className={`fb-advanced-button-icon-wrapper ${buttonIconPosition}`}>
                                <div className="fb-advanced-button-icon">{renderSVG(buttonIcon)}</div>
                            </div>
                        )}

                        {buttonIconPosition === 'left' && buttonIconAlign === 'image' && buttonIconImageUrl && (
                            <div className={`fb-advanced-button-icon-wrapper ${buttonIconPosition}`}>
                                <div className="fb-advanced-button-icon-image">
                                    {buttonIconImageUrl ? (
                                        <img src={buttonIconImageUrl} alt={buttonIconImageAlt} />
                                    ) : (
                                        <MediaPlaceholder
                                            onSelect={(media) =>
                                                setAttributes({
                                                    buttonIconImageID: media.id,
                                                    buttonIconImageUrl: media.url,
                                                    buttonIconImageAlt: media.alt,
                                                })
                                            }
                                            allowedTypes={['image']}
                                            multiple={false}
                                            labels={{ title: 'Add Image' }}
                                        />
                                    )}
                                </div>
                            </div>
                        )}

                        {buttonTextSwitcher && (
                            <RichText
                                tagName="span"
                                value={dynamicTextEnabled ? dynamicDisplayValue : buttonText}
                                onChange={(value) => {
                                    if (!dynamicTextEnabled) setAttributes({ buttonText: value });
                                }}
                                placeholder={__('Enter button text...', 'frontis-blocks')}
                                className="fb-advanced-button-text"
                            />
                        )}

                        {buttonIconPosition === 'right' && buttonIconAlign === 'icon-text' && (
                            <div className={`fb-advanced-button-icon-wrapper ${buttonIconPosition}`}>
                                <div className="fb-advanced-button-icon">{renderSVG(buttonIcon)}</div>
                            </div>
                        )}

                        {buttonIconPosition === 'right' && buttonIconAlign === 'image' && buttonIconImageUrl && (
                            <div className={`fb-advanced-button-icon-wrapper ${buttonIconPosition}`}>
                                <div className="fb-advanced-button-icon-image">
                                    {buttonIconImageUrl ? (
                                        <img src={buttonIconImageUrl} alt={buttonIconImageAlt} />
                                    ) : (
                                        <MediaPlaceholder
                                            onSelect={(media) =>
                                                setAttributes({
                                                    buttonIconImageID: media.id,
                                                    buttonIconImageUrl: media.url,
                                                    buttonIconImageAlt: media.alt,
                                                })
                                            }
                                            allowedTypes={['image']}
                                            multiple={false}
                                            labels={{ title: 'Add Image' }}
                                        />
                                    )}
                                </div>
                            </div>
                        )}
                    </a>
                </div>
            </div>
            <style>{blockStyle}</style>
        </>
    );
}
