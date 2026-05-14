import { useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import FB_VisibilityControl from '../../components/visibility-control';

function Edit({ attributes, setAttributes }) {
  const { imageUrl, hotspots, selectedHotspotId, deviceType = 'Desktop' } = attributes;

  const selectedHotspot = hotspots?.find(h => h.id === selectedHotspotId);

  const isHidden = (hotspot) => {
    if (deviceType === 'Desktop' && hotspot.hideDesktop) return true;
    if (deviceType === 'Tablet' && hotspot.hideTablet) return true;
    if (deviceType === 'Mobile' && hotspot.hideMobile) return true;
    return false;
  };

  return (
    <>
      <Inspector 
        attributes={attributes}
        setAttributes={setAttributes}
      />
      
      <div {...useBlockProps()}>
        {!imageUrl ? (
          <div style={{ padding: '40px', textAlign: 'center', background: '#f0f0f0', borderRadius: '8px' }}>
            <p>Select an image from the sidebar inspector</p>
          </div>
        ) : (
          <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
            <img 
              src={imageUrl} 
              alt="Hotspot base"
              style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
            />
            
            {hotspots?.map((hotspot) => !isHidden(hotspot) && (
              <div
                key={hotspot.id}
                style={{
                  position: 'absolute',
                  left: `${hotspot.x}%`,
                  top: `${hotspot.y}%`,
                  width: selectedHotspotId === hotspot.id ? '32px' : '24px',
                  height: selectedHotspotId === hotspot.id ? '32px' : '24px',
                  backgroundColor: hotspot.backgroundColor || '#ff0000',
                  borderRadius: '50%',
                  transform: 'translate(-50%, -50%)',
                  cursor: 'pointer',
                  border: selectedHotspotId === hotspot.id ? '3px solid #fff' : '2px solid #fff',
                  boxShadow: selectedHotspotId === hotspot.id ? '0 0 0 2px #007cba' : '0 2px 4px rgba(0,0,0,0.2)',
                  transition: 'all 0.2s ease',
                  zIndex: selectedHotspotId === hotspot.id ? 10 : 1
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setAttributes({ selectedHotspotId: hotspot.id });
                }}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Edit;