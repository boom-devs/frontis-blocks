import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, Button, TextareaControl, SelectControl } from '@wordpress/components';
import FB_InspectorControls from '../../components/InspectorControls';
import FB_ImageControl from '../../components/image-control';
import FB_ColorControl from '../../components/color-control';
import FBIconPicker from '../../components/icon-picker';
import FB_Range from '../../components/range';
import FB_UrlControl from '../../components/url-control';
import FB_TypographyControl from '../../components/typography-control';
import FB_InputControl from '../../components/input-control';

export default function Inspector({ attributes, setAttributes }) {
  const { 
    imageUrl, imageId, imageAlt, imageSize, 
    hotspots, selectedHotspotId,
    deviceType = 'Desktop'
  } = attributes;
  
  const selectedHotspot = hotspots?.find(h => h.id === selectedHotspotId);

  // Add new hotspot
  const addHotspot = () => {
    const newHotspot = {
      id: Date.now().toString(),
      x: 50,
      y: 50,
      title: 'New Hotspot',
      description: '',
      backgroundColor: '#ff0000',
      icon: '',
      link: '',
      openInNewTab: false
    };
    setAttributes({ 
      hotspots: [...(hotspots || []), newHotspot],
      selectedHotspotId: newHotspot.id
    });
  };

  // Update current hotspot
  const updateHotspot = (field, value) => {
    const updated = hotspots.map(h => 
      h.id === selectedHotspotId ? { ...h, [field]: value } : h
    );
    setAttributes({ hotspots: updated });
  };

  // Delete hotspot
  const deleteHotspot = () => {
    const filtered = hotspots.filter(h => h.id !== selectedHotspotId);
    setAttributes({ 
      hotspots: filtered,
      selectedHotspotId: filtered[0]?.id || null
    });
  };

  const generalControls = (
	<>
		<PanelBody title="Image" initialOpen={true}>
		<FB_ImageControl
			label="Select Image"
			globalImageUrl={imageUrl}
			setglobalImageUrl={(url) => setAttributes({ imageUrl: url })}
			globalImageAlt={imageAlt}
			setglobalImageAlt={(alt) => setAttributes({ imageAlt: alt })}
			globalImageID={imageId}
			setglobalImageID={(id) => setAttributes({ imageId: id })}
			globalImageSize={imageSize}
			setglobalImageSize={(size) => setAttributes({ imageSize: size })}
			isImageSize={true}
		/>
		</PanelBody>

		<PanelBody title="Hotspots" initialOpen={true}>
		<Button variant="primary" onClick={addHotspot} style={{ width: '100%' }}>
			+ Add New Hotspot
		</Button>
		
		<SelectControl
			label="Select Hotspot"
			value={selectedHotspotId || ''}
			options={[
				{ label: '— Select a hotspot —', value: '' },
				...hotspots.map((h, index) => ({
				label: h.title || `Hotspot ${index + 1} (${h.x}%, ${h.y}%)`,
				value: h.id
				}))
			]}
			onChange={(value) => setAttributes({ selectedHotspotId: value })}
		/>
		
		{hotspots?.length > 0 && (
			<PanelRow>
			<small>Total hotspots: {hotspots.length} | Click any dot on image to select</small>
			</PanelRow>
		)}

		{/* Nested hotspot settings - these hide when Hotspots panel collapses */}
		{selectedHotspot && (
			<div style={{ 
			marginTop: '16px', 
			borderTop: '1px solid #e0e0e0', 
			paddingTop: '16px',
			display: 'flex',
			flexDirection: 'column',
			gap: '16px'
			}}>
			<div>
				<h3 style={{ margin: '0 0 12px 0', fontSize: '13px', fontWeight: 500 }}>Content</h3>
				<FB_InputControl
				label="Hotspot Title"
				value={selectedHotspot.title || ''}
				onChangeValue={(value) => updateHotspot('title', value)}
				placeholder="Enter title"
				/>
				
				<TextareaControl
				label="Hotspot Description"
				value={selectedHotspot.description || ''}
				onChange={(value) => updateHotspot('description', value)}
				placeholder="Enter description that will appear in popup"
				rows={4}
				/>
				
				<FBIconPicker
				value={selectedHotspot.icon}
				setIconHandler={(icon) => updateHotspot('icon', icon)}
				/>
				
				<FB_UrlControl
				label="Link URL"
				url={selectedHotspot.link || ''}
				onChangeUrl={(url) => updateHotspot('link', url)}
				openInNewTab={selectedHotspot.openInNewTab || false}
				onChangeOpenInNewTab={(value) => updateHotspot('openInNewTab', value)}
				/>
			</div>

			<div>
				<h3 style={{ margin: '0 0 12px 0', fontSize: '13px', fontWeight: 500 }}>Position</h3>
				<FB_Range
				label="X Position (%)"
				rangeValue={{ [deviceType]: selectedHotspot.x }}
				onChangeHandler={(value) => updateHotspot('x', value[deviceType])}
				deviceType={deviceType}
				min={0}
				max={100}
				rangeStep={1}
				isRangeUnit={false}
				resetFallbackValue={50}
				/>
				
				<FB_Range
				label="Y Position (%)"
				rangeValue={{ [deviceType]: selectedHotspot.y }}
				onChangeHandler={(value) => updateHotspot('y', value[deviceType])}
				deviceType={deviceType}
				min={0}
				max={100}
				rangeStep={1}
				isRangeUnit={false}
				resetFallbackValue={50}
				/>
			</div>

			<div>
				<h3 style={{ margin: '0 0 12px 0', fontSize: '13px', fontWeight: 500 }}>Styling</h3>
				<FB_ColorControl
				label="Marker Color"
				globalColor={selectedHotspot.backgroundColor}
				setGlobalColor={(color) => updateHotspot('backgroundColor', color)}
				/>
			</div>

			<Button isDestructive onClick={deleteHotspot} style={{ width: '100%' }}>
				Delete Hotspot
			</Button>
			</div>
		)}
		</PanelBody>
	</>
	);

  // Style tab
  const styleControls = (
    <PanelBody title="Global Styles" initialOpen={true}>
      <FB_TypographyControl
        label="Popover Typography"
        deviceType={deviceType}
        setAttributes={setAttributes}
      />
    </PanelBody>
  );

  // Advanced tab
  const advancedControls = (
    <PanelBody title="Advanced" initialOpen={true}>
      <p>Advanced settings coming soon</p>
    </PanelBody>
  );

  return (
    <FB_InspectorControls
      generalControls={generalControls}
      styleControls={styleControls}
      advancedControls={advancedControls}
    />
  );
}