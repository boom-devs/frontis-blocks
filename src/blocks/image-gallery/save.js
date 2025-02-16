import { useBlockProps } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import './style.scss'; // Ensure you have styles for the front end if needed
import { useEffect, useState } from '@wordpress/element';

export default function Save({ attributes }) {

    const { 
        blockID,

        GalleryType,
        GalleryItems,
        lightboxIconSwitcher,
        lightboxIcon,
        ImageOverlayStyle,

        GalleryButtonSwitcher,
        GalleryButtonText,
        GalleryButtonLink,

        imageGalleryGlobalWraperID,
        imageGalleryGlobalWraperClass,

    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-gallery-main-wrapper ${blockID}`,
    });
    

    return (
        <>
            <div {...blockProps}>
                <div className={`fb-parent-wrapper fb-image-gallery-wrapper ${imageGalleryGlobalWraperClass}`} id={imageGalleryGlobalWraperID}>
                    <div className="fb-image-gallery-items" data-id={blockID}>
                        {GalleryItems.map(item => 
                            item?.image?.url && (
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
                                    
                                    <a href={item.image.url} key={item.id} 
                                        className={`fb-image-gallery-item ${blockID} ${item.id}`}
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
                            )
                        )}
                    </div>
                    {GalleryButtonSwitcher && <div className="fb-image-gallery-btn-wrapper"><a href={GalleryButtonLink} className="fb-image-gallery-btn">{GalleryButtonText}</a></div>}
                </div>
            </div>
    </>
    );
}

