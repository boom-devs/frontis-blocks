import { __ } from '@wordpress/i18n';
import { useEffect, useState, useRef } from '@wordpress/element';
import { useBlockProps, MediaPlaceholder } from '@wordpress/block-editor';
import Inspector from './inspector';
import './editor.scss';
import generateImageHotspotStyle from './styling';
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import { useDeviceType } from '@Config/displayType';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import { markerSvgs } from './preset';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';

function Edit({ attributes, setAttributes, clientId, isSelected }) {
  const {
    imageHotspotImageUrl,
    imageHotspotImageAlt,
    imageHotspotImageSize,
    imageHotspotHotspots,
    imageHotspotSelectedHotspotId,
    imageHotspotMarkerSvg,
    imageHotspotMarkerColor,
    imageHotspotMarkerHoverColor,
    imageHotspotShowPopoverImage,
    blockID,
    blockStyle,
    imageHotspotGlobalWraperClass,
    imageHotspotGlobalWraperID
  } = attributes;

  const deviceType = useDeviceType();

  // Handle block ID generation
  useBlockIdGenerator({
    clientId,
    blockID,
    blockPrefix: 'fb-image-hotspot',
    isSelected,
    attributes,
    setAttributes,
  });

  // Generate and store block style
  useEffect(() => {
    if (blockID) {
      const css = generateImageHotspotStyle(attributes);
      setAttributes({ blockStyle: css });
    }
  }, [attributes, blockID, setAttributes]);

  const isHidden = (hotspot) => {
    if (deviceType === 'Desktop' && hotspot.hideDesktop) return true;
    if (deviceType === 'Tablet' && hotspot.hideTablet) return true;
    if (deviceType === 'Mobile' && hotspot.hideMobile) return true;
    return false;
  };

  const blockProps = useBlockProps({
    className: `fb-hotspot-main-wrapper ${blockID}`,
  });

  /**
    * Manages tab button settings and switches to block settings on click
    */
  const panelRef = useRef(null);
  SwitchToBlockSettings(panelRef);

  return (
    <>
      {isSelected && (
        <Inspector
          attributes={attributes}
          setAttributes={setAttributes}
        />
      )}

      <div {...blockProps}>
        {!imageHotspotImageUrl ? (
          <MediaPlaceholder
            icon="format-image"
            labels={{
              title: __('Image Hotspot', 'frontis-blocks'),
              instructions: __('Select an image to add hotspots to.', 'frontis-blocks'),
            }}
            onSelect={(media) => {
              setAttributes({
                imageHotspotImageUrl: media.url,
                imageHotspotImageAlt: media.alt,
                imageHotspot_imageId: media.id,
              });
            }}
            accept="image/*"
            allowedTypes={['image']}
          />
        ) : (
          <div className={`fb-parent-wrapper fb-image-hotspot-wrapper ${blockID} ${imageHotspotGlobalWraperClass}`} id={imageHotspotGlobalWraperID} ref={panelRef}>
            <img
              src={imageHotspotImageUrl}
              alt={imageHotspotImageAlt || __('Hotspot base', 'frontis-blocks')}
              className="fb-hotspot-base-image"
            />

            {imageHotspotHotspots?.map((hotspot) => !isHidden(hotspot) && (
              <div
                key={hotspot.id}
                className={`fb-hotspot-marker ${imageHotspotSelectedHotspotId === hotspot.id ? 'selected' : ''} animation-${hotspot.autoplay === false ? 'none' : hotspot.animation || 'none'}`}
                style={{
                  left: `${hotspot.x ?? hotspot.left ?? 25}%`,
                  top: `${hotspot.y ?? hotspot.top ?? 25}%`,
                }}
                data-hotspot-id={hotspot.id}
                data-popover-position={hotspot.popoverPosition || 'top'}
                onClick={(e) => {
                  e.stopPropagation();
                  setAttributes({ imageHotspotSelectedHotspotId: hotspot.id });
                }}
              >
                <div className="fb-hotspot-trigger">
                  {imageHotspotMarkerSvg && markerSvgs[imageHotspotMarkerSvg] && (
                    <span className="fb-hotspot-marker-svg">
                      {markerSvgs[imageHotspotMarkerSvg](hotspot.markerColor || imageHotspotMarkerColor)}
                    </span>
                  )}
                  <span className="fb-hotspot-icon">
                    {renderSVG(hotspot.icon || 'plus')}
                  </span>
                </div>

                <div className="fb-hotspot-popover">
                  {imageHotspotShowPopoverImage && hotspot.popoverImageUrl && (
                    <img
                      src={hotspot.popoverImageUrl}
                      alt={hotspot.popoverImageAlt || ''}
                      className="fb-hotspot-popover-image"
                    />
                  )}
                  {hotspot.category && <div className="fb-hotspot-popover-category">{hotspot.category}</div>}
                  {hotspot.title && (
                    <h4 className="fb-hotspot-popover-title">
                      {hotspot.titleLink ? (
                        <a
                          href={hotspot.titleLink}
                          target={hotspot.titleLinkOpenInNewTab ? '_blank' : undefined}
                          rel={hotspot.titleLinkOpenInNewTab ? 'noopener noreferrer' : undefined}
                          onClick={(event) => event.preventDefault()}
                        >
                          {hotspot.title}
                        </a>
                      ) : (
                        hotspot.title
                      )}
                    </h4>
                  )}
                  {hotspot.description && <p className="fb-hotspot-popover-description">{hotspot.description}</p>}
                  {hotspot.price && <div className="fb-hotspot-popover-price">{hotspot.price}</div>}
                  {hotspot.showSocialLinks && (hotspot.socialLinks || []).length > 0 && (
                    <div className="fb-hotspot-social-links">
                      {(hotspot.socialLinks || []).map((socialLink, i) => (
                          <a
                          key={i}
                          href={socialLink.url || '#'}
                          target={socialLink.openInNewTab ? '_blank' : undefined}
                          rel={socialLink.openInNewTab ? 'noopener noreferrer' : undefined}
                          className="fb-hotspot-social-link"
                          data-social-link-id={socialLink.id}
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="fb-hotspot-social-icon">
                            {renderSVG(socialLink.icon || 'facebook')}
                          </span>
                        </a>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        )}
      </div >

      <style>{blockStyle}</style>
    </>
  );
}

export default Edit;
