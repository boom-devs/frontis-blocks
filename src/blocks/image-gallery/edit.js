import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaPlaceholder } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import Inspector from "./inspector";
import './editor.scss';

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
                <div className="fb-parent-wrapper fb-image-gallery-wrapper">
                        <div className="fb-image-gallery-items">
                            {GalleryItems.map(item => 
                                item?.image?.url ? (
                                        <a key={item.id} 
                                            className={`fb-image-gallery-item ${item.id}`} 
                                            style={{
                                                ...(GalleryType === 'mesonry' && {
                                                  gridRow: deviceType === 'Desktop'
                                                    ? item.row?.desktop > 1
                                                      ? `span ${item.row?.desktop}`
                                                      : 'unset'
                                                    : deviceType === 'Tablet'
                                                    ? item.row?.tablet > 1
                                                      ? `span ${item.row?.tablet}`
                                                      : 'unset'
                                                    : item.row?.mobile > 1
                                                    ? `span ${item.row?.mobile}`
                                                    : 'unset',
                                              
                                                  gridColumn: deviceType === 'Desktop'
                                                    ? item.column?.desktop > 1
                                                      ? `span ${item.column?.desktop}`
                                                      : 'unset'
                                                    : deviceType === 'Tablet'
                                                    ? item.column?.tablet > 1
                                                      ? `span ${item.column?.tablet}`
                                                      : 'unset'
                                                    : item.column?.mobile > 1
                                                    ? `span ${item.column?.mobile}`
                                                    : 'unset'
                                                })
                                              }}
                                            
                                        >
                                            <img className="fb-image-gallery-image" src={item.image.url} alt={item.image.alt}></img>
                                            {ImageOverlayStyle === 'overlay' && <span className="fb-image-overlay"></span>}
                                            { lightboxIconSwitcher === true && 
                                                <div className="fb-lightbox-icon-wrapper">
                                                    <div className="fb-lightbox-icon">{renderSVG(lightboxIcon)}</div>
                                                </div>
                                            }
                                        </a>
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
