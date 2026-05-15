import { useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import './editor.scss';
import DynamicCSSLoader from '../../components/dynamic-css-loader/dynamic-css-loader.js';
import generateImageHotspotStyle from './styling';

function Edit({ attributes, setAttributes }) {
  const { imageUrl, imageAlt, imageSize, hotspots, selectedHotspotId, deviceType = 'Desktop' } = attributes;

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
      <DynamicCSSLoader blockStyling={blockStyling} />
    
      <Inspector 
        attributes={attributes}
        setAttributes={setAttributes}
      />
      
      <div {...useBlockProps()}>
        {!imageUrl ? (
          <div className="fb-hotspot-placeholder">
            <p>Select an image from the sidebar inspector</p>
          </div>
        ) : (
          <div className="fb-hotspot-editor-container">
            <img 
              src={imageUrl} 
              alt={imageAlt || 'Hotspot base'}
              className="fb-hotspot-base-image"
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
                  setAttributes({ selectedHotspotId: hotspot.id });
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