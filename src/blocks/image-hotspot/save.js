import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';
import generateImageHotspotStyle from './styling';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import { markerSvgs } from './preset';

export default function Save({ attributes }) {
  const {
    imageHotspotImageUrl,
    imageHotspotImageAlt,
    imageHotspotImageSize,
    imageHotspotHotspots,
    blockID,
    imageHotspotDesktopSwitcher,
    imageHotspotTabletSwitcher,
    imageHotspotMobileSwitcher,
    imageHotspotMarkerSvg,
    imageHotspotMarkerColor,
    imageHotspotShowPopoverImage,
  } = attributes;

  if (!imageHotspotImageUrl) {
    return null;
  }

  const responsiveClasses = [
    imageHotspotDesktopSwitcher && 'fb-desktop-responsive',
    imageHotspotTabletSwitcher && 'fb-tablet-responsive',
    imageHotspotMobileSwitcher && 'fb-mobile-responsive'
  ].filter(Boolean).join(' ');

  const blockProps = useBlockProps.save({
    className: `fb-hotspot-main-wrapper ${blockID}`,
  });

  return (
    <>
      <div {...blockProps}>
        <div className={`fb-hotspot-responsive-wrapper ${responsiveClasses}`}>
          <div className="fb-hotspot-container">
            <img
              src={imageHotspotImageUrl}
              alt={imageHotspotImageAlt || __('Hotspot Image', 'frontis-blocks')}
              className="fb-hotspot-base-image"
            />

            {imageHotspotHotspots?.map((hotspot) => {
              return (
                <div
                  key={hotspot.id}
                  className={`fb-hotspot-marker animation-${hotspot.autoplay === false ? 'none' : hotspot.animation || 'none'}`}
                  style={{
                    left: `${hotspot.x ?? hotspot.left ?? 25}%`,
                    top: `${hotspot.y ?? hotspot.top ?? 25}%`,
                  }}
                  data-hotspot-id={hotspot.id}
                  data-popover-position={hotspot.popoverPosition || 'top'}
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

                    {/* {hotspot.showSocialLinks && (
                      <div className="fb-hotspot-social-links">
                        Social Links
                      </div>
                    )} */}

                    {hotspot.showSocialLinks && (hotspot.socialLinks || []).length > 0 && (
                      <div className="fb-hotspot-social-links">
                        {(hotspot.socialLinks || []).map((socialLink, i) => (
                          <a
                            key={i}
                            href={socialLink.url || '#'}
                            target={socialLink.openInNewTab ? '_blank' : undefined}
                            rel={socialLink.openInNewTab ? 'noopener noreferrer' : undefined}
                            className="fb-hotspot-social-link"
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
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
