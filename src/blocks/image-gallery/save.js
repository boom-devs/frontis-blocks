import { useBlockProps } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import './style.scss'; // Ensure you have styles for the front end if needed

export default function Save({ attributes }) {

    const { 
        blockID,
        DeviceType,

        GalleryType,
        GalleryItems,
        lightboxIconSwitcher,
        lightboxIcon,
        ImageOverlayStyle,

        GalleryButtonSwitcher,
        GalleryButtonText,
        GalleryButtonLink,

    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-gallery-main-wrapper ${blockID}`,
    });


    return (
        <>
            <div {...blockProps}>
                <div className="fb-image-gallery-wrapper">
                    <div className="fb-image-gallery-items" data-id={blockID}>
                        {GalleryItems.map(item => 
                            item?.image?.url && (
                                    <a href={item.image.url} key={item.id} 
                                        className={`fb-image-gallery-item ${blockID}`}
                                        style={{
                                            ...(GalleryType === 'mesonry' && {
                                            gridRow: DeviceType === 'Desktop'
                                                ? item.row?.desktop > 1
                                                ? `span ${item.row?.desktop}`
                                                : 'unset'
                                                : DeviceType === 'Tablet'
                                                ? item.row?.tablet > 1
                                                ? `span ${item.row?.tablet}`
                                                : 'unset'
                                                : item.row?.mobile > 1
                                                ? `span ${item.row?.mobile}`
                                                : 'unset',
                                        
                                            gridColumn: DeviceType === 'Desktop'
                                                ? item.column?.desktop > 1
                                                ? `span ${item.column?.desktop}`
                                                : 'unset'
                                                : DeviceType === 'Tablet'
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
                            )
                        )}
                    </div>
                    {GalleryButtonSwitcher && <div className="fb-image-gallery-btn-wrapper"><a href={GalleryButtonLink} className="fb-image-gallery-btn">{GalleryButtonText}</a></div>}
                </div>
            </div>
    </>
    );
}

