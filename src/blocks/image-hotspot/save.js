import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';
import DynamicCSSLoader from '../../components/dynamic-css-loader/dynamic-css-loader.js';
import generateImageHotspotStyle from './styling';

export default function Save({ attributes }) {
  const { imageUrl, imageAlt, imageSize, hotspots } = attributes;

  const blockStyling = generateImageHotspotStyle(attributes);

  if (!imageUrl) {
    return null;
  }

  return (
    <>
      <DynamicCSSLoader blockStyling={blockStyling} />

      <div {...useBlockProps.save()}>
        <div className="fb-image-hotspot-wrapper">
          <div className="fb-hotspot-container">
            <img 
              src={imageUrl} 
              alt={imageAlt || 'Hotspot Image'}
              className="fb-hotspot-base-image"
              style={{ objectFit: imageSize || 'cover' }}
            />
            
            {hotspots?.map((hotspot) => {
              const visibilityClass = [
                hotspot.hideDesktop && 'hide-desktop',
                hotspot.hideTablet && 'hide-tablet',
                hotspot.hideMobile && 'hide-mobile'
              ].filter(Boolean).join(' ');
              
              return (
                <div 
                  key={hotspot.id}
                  className={`fb-hotspot-marker ${visibilityClass}`}
                  data-hotspot-id={hotspot.id}
                  style={{
                    left: `${hotspot.x}%`,
                    top: `${hotspot.y}%`
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
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}