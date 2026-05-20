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
    imageHotspotDesktopSwitcher,
    imageHotspotTabletSwitcher,
    imageHotspotMobileSwitcher,
  } = attributes;

  const blockStyling = generateImageHotspotStyle(attributes);

  if (!imageUrl) {
    return null;
  }

  return (
    <>
      <div {...useBlockProps.save({ className: `${blockID} ${imageHotspotDesktopSwitcher && 'fb-desktop-responsive'} ${imageHotspotTabletSwitcher && 'fb-tablet-responsive'} ${imageHotspotMobileSwitcher && 'fb-mobile-responsive'}` })}>
        <div className="fb-hotspot-container">
            <img 
              src={imageUrl} 
              alt={imageAlt || __('Hotspot Image', 'frontis-blocks')}
              className="fb-hotspot-base-image"
            />
            
            {hotspots?.map((hotspot) => {
              return (
                <div 
                  key={hotspot.id}
                  className={`fb-hotspot-marker animation-${hotspot.autoplay === false ? 'none' : hotspot.animation || 'none'}`}
                  data-hotspot-id={hotspot.id}
                  data-popover-position={hotspot.popoverPosition || 'top'}
                >
                  <div className="fb-hotspot-trigger">
                    <span className="fb-hotspot-icon">
                        {renderSVG(hotspot.icon || 'plus')}
                    </span>
                  </div>
                  
                  <div className="fb-hotspot-popover">
                    {hotspot.popoverImageUrl && (
                        <img 
                            src={hotspot.popoverImageUrl}
                            alt={hotspot.popoverImageAlt || ''}
                            className="fb-hotspot-popover-image"
                        />
                    )}
                    {hotspot.title && <h4 className="fb-hotspot-popover-title">{hotspot.title}</h4>}
                    {hotspot.description && <p className="fb-hotspot-popover-description">{hotspot.description}</p>}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
