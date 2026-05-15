import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import './editor.scss';
import generateImageHotspotStyle from './styling';
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import { useDeviceType } from '@Config/displayType';

function Edit({ attributes, setAttributes, clientId, isSelected }) {
  const { 
    imageHotspot_imageUrl: imageUrl, 
    imageHotspot_imageAlt: imageAlt, 
    imageHotspot_imageSize: imageSize, 
    imageHotspot_hotspots: hotspots, 
    imageHotspot_selectedHotspotId: selectedHotspotId,
    imageHotspot_blockID: blockID,
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
      
      <div className={blockID} {...useBlockProps()}>
        {!imageUrl ? (
          <div className="fb-hotspot-placeholder">
            <p>{__('Select an image from the sidebar inspector', 'frontis-blocks')}</p>
          </div>
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
                className={`fb-hotspot-marker ${selectedHotspotId === hotspot.id ? 'selected' : ''}`}
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
                {hotspot.link ? (
                  <a 
                    href={hotspot.link} 
                    target={hotspot.openInNewTab ? '_blank' : '_self'}
                    rel={hotspot.openInNewTab ? 'noopener noreferrer' : ''}
                    className="fb-hotspot-link"
                  >
                    <div 
                      className="fb-hotspot-trigger"
                      style={{ backgroundColor: hotspot.backgroundColor || '#ff0000' }}
                    >
                      <span className="fb-hotspot-icon">{hotspot.icon || 'plus'}</span>
                    </div>
                  </a>
                ) : (
                  <div 
                    className="fb-hotspot-trigger"
                    style={{ backgroundColor: hotspot.backgroundColor || '#ff0000' }}
                  >
                    <span className="fb-hotspot-icon">{hotspot.icon || 'plus'}</span>
                  </div>
                )}
                
                <div className="fb-hotspot-popover">
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