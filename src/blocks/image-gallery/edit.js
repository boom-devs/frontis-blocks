import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaPlaceholder } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import Inspector from "./inspector";
import './editor.scss';
import { useRef } from '@wordpress/element';
import SwitchToBlockSettings  from '@Utils/SwitchToBlockSettings';


export default function Edit({ attributes, setAttributes, clientId }) {
    const { 
        blockID,
        GalleryItems,
        deviceType,
        GalleryType,

        ImageOverlayStyle,

        GalleryButtonSwitcher,
        GalleryButtonText,
        GalleryButtonLink,

        lightboxIconSwitcher,
        lightboxIcon,

     } = attributes;

    const blockProps = useBlockProps({
        className: `fb-gallery-main-wrapper ${blockID}`,
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
                clientId={clientId}
            />
            
            <div {...blockProps}>
                <div className="fb-parent-wrapper fb-image-gallery-wrapper" ref={panelRef}>
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
                                        >
                                            <img className="fb-image-gallery-image" src={item.image.url} alt={item.image.alt}></img>
                                            {ImageOverlayStyle === 'overlay' && <span className="fb-image-overlay"></span>}
                                            { lightboxIconSwitcher === true && 
                                                <div className="fb-lightbox-icon-wrapper">
                                                    <div className="fb-lightbox-icon">{renderSVG(lightboxIcon)}</div>
                                                </div>
                                            }
                                        </a>
                                    </>
                                ) : (
                                    <MediaPlaceholder
                                        onSelect={(media) => handleChangeItem(item.id, 'image' , {id: media.id, url: media.url, alt: media.alt, width: media.width, height: media.height}) }
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
        </>
    );
}
