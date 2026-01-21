import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import { useRef, useEffect } from '@wordpress/element';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import loadGoogleFont from '@Utils/loadGoogleFont';
import './editor.scss';

import Inspector from "./inspector";

const loadedFonts = new Set();

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        blockStyle,
        FeatureItems,
        FeatureTag,
        FeatureIconShape,
        FeatureAlignment,
        FeatureIconAlignment,

        featuresListGlobalWraperID,
        featuresListGlobalWraperClass,

        featuresListDesktopSwitcher,
        featuresListTabletSwitcher,
        featuresListMobileSwitcher,
        FeatureTitleFontFamily,
        FeatureDescFontFamily,
    } = attributes;

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-feature-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    /** Start Load Google Font */
    useEffect(() => {
        if (FeatureTitleFontFamily && !loadedFonts.has(FeatureTitleFontFamily)) {
            loadGoogleFont(FeatureTitleFontFamily);
            loadedFonts.add(FeatureTitleFontFamily);
        }
    }, [FeatureTitleFontFamily]);

    useEffect(() => {
        if (FeatureDescFontFamily && !loadedFonts.has(FeatureDescFontFamily)) {
            loadGoogleFont(FeatureDescFontFamily);
            loadedFonts.add(FeatureDescFontFamily);
        }
    }, [FeatureDescFontFamily]);
    /** End Load Google Font */

    const blockProps = useBlockProps({
        className: `fb-feature-main-wrapper ${blockID} ${featuresListDesktopSwitcher && 'fb-desktop-responsive'} ${featuresListTabletSwitcher && 'fb-tablet-responsive'} ${featuresListMobileSwitcher && 'fb-mobile-responsive'}`,
    });

    /**
    * Manages tab button settings and switches to block settings on click
    */
    const panelRef = useRef(null);
    SwitchToBlockSettings(panelRef);

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
            />

            <div {...blockProps}>
                <div className={`fb-parent-wrapper fb-feature-wrapper ${featuresListGlobalWraperClass}`} id={featuresListGlobalWraperID} ref={panelRef}>
                    <div className={`fb-feature-list-wrapper fb-feature-list-${FeatureAlignment} fb-icon-position-${FeatureIconAlignment} `}>
                        <ul className="fb-feature-list-items">
                            {FeatureItems.map(item => (

                                <li key={item.id} className={`fb-feature-list-item single-item-${item.id}`}>

                                    {item.FeatureIconAlign !== 'none' && (
                                        <div className="fb-feature-list-icon-box">
                                            <div className={`fb-feature-list-icon-inner ${FeatureIconShape}`}>
                                                {item.FeatureIconAlign === 'icon' || item.FeatureIconAlign === undefined ? (
                                                    <span className="fb-feature-list-icon">
                                                        {item.FeatureIcon ? renderSVG(item.FeatureIcon) : ''}
                                                    </span>

                                                ) : item.FeatureIconAlign === 'image' && item.FeatureIconImageUrl ? (
                                                    <div className={`fb-feature-icon-image-wrapper ${FeatureIconShape}`}>

                                                        <img
                                                            src={item.FeatureIconImageUrl}
                                                            alt={item.FeatureIconImageAlt || 'Feature Image'}
                                                            className="fb-feature-icon-image"
                                                        />

                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    )}

                                    {(item.Title || item.Description) && (
                                        <div className="fb-feature-list-content">
                                            {item.Title && (
                                                <RichText
                                                    tagName={FeatureTag}
                                                    className="fb-feature-list-title"
                                                    value={item.Title}
                                                    onChange={(value) => {
                                                        const updatedItems = FeatureItems.map(i =>
                                                            i.id === item.id ? { ...i, Title: value } : i
                                                        );
                                                        setAttributes({ FeatureItems: updatedItems });
                                                    }}
                                                    placeholder={__('Feature Title', 'frontis-blocks')}
                                                />
                                            )}
                                            {item.Description && (
                                                <RichText
                                                    tagName="p"
                                                    className="fb-feature-list-text"
                                                    value={item.Description}
                                                    onChange={(value) => {
                                                        const updatedItems = FeatureItems.map(i =>
                                                            i.id === item.id ? { ...i, Description: value } : i
                                                        );
                                                        setAttributes({ FeatureItems: updatedItems });
                                                    }}
                                                    placeholder={__('Feature Description', 'frontis-blocks')}
                                                />
                                            )}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <style>{blockStyle}</style>
        </>
    );
}
