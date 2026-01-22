import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaPlaceholder } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import './editor.scss';
import { useRef, useEffect } from '@wordpress/element';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import loadGoogleFont from '@Utils/loadGoogleFont';

import Inspector from "./inspector";

const loadedFonts = new Set();

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        blockStyle,
        GalleryItems,
        GalleryType,

        ImageOverlayStyle,

        GalleryButtonSwitcher,
        GalleryButtonText,
        GalleryButtonLink,

        lightboxIconSwitcher,
        lightboxIcon,

        imageGalleryGlobalWraperID,
        imageGalleryGlobalWraperClass,

        GalleryDesktopSwitcher,
        GalleryTabletSwitcher,
        GalleryMobileSwitcher,

        GalleryButtonFontFamily,
    } = attributes;

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-gallery-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    /** Start load font */
    useEffect(() => {
        [GalleryButtonFontFamily].forEach(font => {
            if (font && !loadedFonts.has(font)) {
                loadGoogleFont(font);
                loadedFonts.add(font);
            }
        });
    }, [GalleryButtonFontFamily]);
    /** End load font */
    

    const blockProps = useBlockProps({
        className: `fb-gallery-main-wrapper ${blockID} ${GalleryDesktopSwitcher && 'fb-desktop-responsive'} ${GalleryTabletSwitcher && 'fb-tablet-responsive'} ${GalleryMobileSwitcher && 'fb-mobile-responsive'}`,
    });

    /**
    * Manages tab button settings and switches to block settings on click
    */
    const panelRef = useRef(null);
    SwitchToBlockSettings(panelRef);


    const handleChangeItem = (id, key, value) => {
        const updatedItems = GalleryItems.map(item =>
            item.id === id ? { ...item, [key]: value } : item
        );
        setAttributes({ GalleryItems: updatedItems });
    };


    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
            />

            <div {...blockProps}>
                <div className={`fb-parent-wrapper fb-image-gallery-wrapper ${imageGalleryGlobalWraperClass}`} id={imageGalleryGlobalWraperID} ref={panelRef}>
                    <div className="fb-image-gallery-items">
                        {GalleryItems.map(item =>
                            item?.image?.url ? (
                                <>
                                    {GalleryType === 'mesonry' && <style>
                                        {`
                                            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item.${item.id} {
                                                    grid-column: ${item.column?.desktop > 1 ? `span ${item.column?.desktop}` : 'unset'};
                                                    grid-row: ${item.row?.desktop > 1 ? `span ${item.row?.desktop}` : 'unset'};
                                                }
                                                @media only screen and (max-width: 1024px) {
                                                    .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item.${item.id} {
                                                        grid-column: ${item.column?.tablet > 1 ? `span ${item.column?.tablet}` : 'unset'};
                                                        grid-row: ${item.row?.tablet > 1 ? `span ${item.row?.tablet}` : 'unset'};
                                                    }
                                                }
                                                @media only screen and (max-width: 767px) {
                                                    .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item.${item.id} {
                                                        grid-column: ${item.column?.mobile > 1 ? `span ${item.column?.mobile}` : 'unset'};
                                                        grid-row: ${item.row?.mobile > 1 ? `span ${item.row?.mobile}` : 'unset'};
                                                    }
                                                } 
                                            `}
                                    </style>}

                                    <a key={item.id}
                                        className={`fb-image-gallery-item ${item.id}`}
                                        aria-label={item.image.alt || __("Image", "frontis-blocks")}
                                    >
                                        <img className="fb-image-gallery-image" src={item.image.url} alt={item.image.alt} aria-hidden="true"></img>
                                        {ImageOverlayStyle === 'overlay' && <span className="fb-image-overlay"></span>}
                                        {lightboxIconSwitcher === true &&
                                            <div className="fb-lightbox-icon-wrapper">
                                                <div className="fb-lightbox-icon">{renderSVG(lightboxIcon)}</div>
                                            </div>
                                        }
                                    </a>
                                </>
                            ) : (
                                <MediaPlaceholder
                                    onSelect={(media) => handleChangeItem(item.id, 'image', { id: media.id, url: media.url, alt: media.alt, width: media.width, height: media.height })}
                                    allowedTypes={['image']}
                                    multiple={false}
                                    labels={{ title: 'Add Author Image' }}
                                />
                            )
                        )}
                    </div>
                    {GalleryButtonSwitcher && <div className="fb-image-gallery-btn-wrapper"><a href={GalleryButtonLink} className="fb-image-gallery-btn">{GalleryButtonText}</a>
                    </div>}
                </div>
            </div>
            <style>{blockStyle}</style>
        </>
    );
}
