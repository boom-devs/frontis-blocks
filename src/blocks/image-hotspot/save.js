import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';
import generateImageHotspotStyle from './styling';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function Save({ attributes }) {
  const { 
    imageHotspot_imageUrl: imageUrl, 
    imageHotspot_imageAlt: imageAlt, 
    imageHotspot_imageSize: imageSize, 
    imageHotspot_hotspots: hotspots,
    blockID,
  } = attributes;

  const blockStyling = generateImageHotspotStyle(attributes);

  if (!imageUrl) {
    return null;
  }

  return (
    <>
      <style>{blockStyling}</style>
      <div {...useBlockProps.save({ className: blockID })}>
        <div className="fb-image-hotspot-wrapper">
          <div className="fb-hotspot-container">
            <img 
              src={imageUrl} 
              alt={imageAlt || __('Hotspot Image', 'frontis-blocks')}
              className="fb-hotspot-base-image"
              style={{ objectFit: imageSize || 'cover' }}
            />
            
            {hotspots?.map((hotspot) => {
              return (
                <div 
                  key={hotspot.id}
                  className="fb-hotspot-marker"
                  data-hotspot-id={hotspot.id}
                  style={{
                    left: `${hotspot.x}%`,
                    top: `${hotspot.y}%`
                  }}
                >
                  <div 
                    className="fb-hotspot-trigger"
                    style={{ backgroundColor: hotspot.backgroundColor || '#ff0000' }}
                  >
                    <span className="fb-hotspot-icon">{renderSVG(hotspot.icon)}</span>
                  </div>
                  
                  <div className="fb-hotspot-popover">
                    {hotspot.title && <h4 className="fb-hotspot-popover-title">{hotspot.title}</h4>}
                    {hotspot.description && <p className="fb-hotspot-popover-description">{hotspot.description}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}