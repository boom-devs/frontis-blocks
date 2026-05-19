import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { useBlockProps, MediaPlaceholder } from '@wordpress/block-editor';
import Inspector from './inspector';
import './editor.scss';
import generateImageHotspotStyle from './styling';
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import { useDeviceType } from '@Config/displayType';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

function Edit({ attributes, setAttributes, clientId, isSelected }) {
  const { 
    imageHotspot_imageUrl: imageUrl, 
    imageHotspot_imageAlt: imageAlt, 
    imageHotspot_imageSize: imageSize, 
    imageHotspot_hotspots: hotspots, 
    imageHotspot_selectedHotspotId: selectedHotspotId,
    blockID,
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

  const blockStyling = generateImageHotspotStyle(attributes);

  const selectedHotspot = hotspots?.find(h => h.id === selectedHotspotId);

  const isHidden = (hotspot) => {
    if (deviceType === 'Desktop' && hotspot.hideDesktop) return true;
    if (deviceType === 'Tablet' && hotspot.hideTablet) return true;
    if (deviceType === 'Mobile' && hotspot.hideMobile) return true;
    return false;
  };

  return (
    <>
      <style>{blockStyling}</style>
    
      {isSelected && (
        <Inspector 
          attributes={attributes}
          setAttributes={setAttributes}
        />
      )}
      
      <div {...useBlockProps({ className: blockID })}>
        {!imageUrl ? (
          <MediaPlaceholder
            icon="format-image"
            labels={{
              title: __('Image Hotspot', 'frontis-blocks'),
              instructions: __('Select an image to add hotspots to.', 'frontis-blocks'),
            }}
            onSelect={(media) => {
              setAttributes({
                imageHotspot_imageUrl: media.url,
                imageHotspot_imageAlt: media.alt,
                imageHotspot_imageId: media.id,
              });
            }}
            accept="image/*"
            allowedTypes={['image']}
          />
        ) : (
          <div className="fb-hotspot-editor-container">
            <img 
              src={imageUrl} 
              alt={imageAlt || __('Hotspot base', 'frontis-blocks')}
              className="fb-hotspot-base-image"
              style={{ objectFit: imageSize }}
            />
            
            {hotspots?.map((hotspot) => !isHidden(hotspot) && (
              <div
                key={hotspot.id}
                className={`fb-hotspot-marker ${selectedHotspotId === hotspot.id ? 'selected' : ''} animation-${hotspot.animation || 'none'}`}
                data-hotspot-id={hotspot.id}
                style={{
                  left: `${hotspot.x}%`,
                  top: `${hotspot.y}%`
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setAttributes({ imageHotspot_selectedHotspotId: hotspot.id });
                }}
              >
                <div 
                  className="fb-hotspot-trigger"
                  style={{ backgroundColor: hotspot.backgroundColor || '#ff0000' }}
                >
                  <span className="fb-hotspot-icon">{renderSVG(hotspot.icon)}</span>
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
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Edit;