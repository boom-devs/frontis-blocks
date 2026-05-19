import { __ } from '@wordpress/i18n';
import { 
  PanelBody, 
  PanelRow, 
  Button, 
  TextareaControl, 
  SelectControl 
} from '@wordpress/components';

import FB_InspectorControls from '../../components/InspectorControls';
import FB_ImageControl from '../../components/image-control';
import FB_ColorControl from '../../components/color-control';
import FBIconPicker from '../../components/icon-picker';
import FB_Range from '../../components/range';
import FB_TypographyControl from '../../components/typography-control';
import FB_InputControl from '../../components/input-control';
import { useDeviceType } from '@Config/displayType';

export default function Inspector({ attributes, setAttributes }) {
  const { 
    imageHotspot_imageUrl: imageUrl, 
    imageHotspot_imageId: imageId, 
    imageHotspot_imageAlt: imageAlt, 
    imageHotspot_imageSize: imageSize,
    imageHotspot_imageHeight: imageHeight,
    imageHotspot_imageHeightUnits: imageHeightUnits,
    imageHotspot_hotspots: hotspots, 
    imageHotspot_selectedHotspotId: selectedHotspotId,
    imageHotspot_markerSize,
    imageHotspot_markerSizeUnits,
    imageHotspot_markerHoverSize,
    imageHotspot_markerHoverSizeUnits,
    imageHotspotPaddingUnits,
    imageHotspotPaddingDesktop,
    imageHotspotPaddingTablet,
    imageHotspotPaddingMobile,
    imageHotspotPaddingLink,
    imageHotspotMarginUnits,
    imageHotspotMarginDesktop,
    imageHotspotMarginTablet,
    imageHotspotMarginMobile,
    imageHotspotMarginLink,
    imageHotspotBorderUnits,
    imageHotspotBorderDesktop,
    imageHotspotBorderTablet,
    imageHotspotBorderMobile,
    imageHotspotBorderLink,
    imageHotspotBorderRadiusUnits,
    imageHotspotBorderRadiusDesktop,
    imageHotspotBorderRadiusTablet,
    imageHotspotBorderRadiusMobile,
    imageHotspotBorderRadiusLink,
  } = attributes;

  const deviceType = useDeviceType();

  // Image Hotspot Padding (skeleton converted)
  const imageHotspotPaddingUnitsChange = (event, position) => {
    // Convert from Google Map to Image Hotspot
    const value = event.target.value;
    if (imageHotspotPaddingLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            imageHotspotPaddingDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotPaddingTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotPaddingMobile: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
      }
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({ imageHotspotPaddingDesktop: { ...imageHotspotPaddingDesktop, [position]: value } });
          break;
        case 'Tablet':
          setAttributes({ imageHotspotPaddingTablet: { ...imageHotspotPaddingTablet, [position]: value } });
          break;
        case 'Mobile':
          setAttributes({ imageHotspotPaddingMobile: { ...imageHotspotPaddingMobile, [position]: value } });
          break;
      }
    }
  };

  const imageHotspotPaddingLinkBtn = () => {
    setAttributes({
      imageHotspotPaddingLink: !imageHotspotPaddingLink
    });
  };

  const imageHotspotPaddingUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotPaddingUnits: {
        ...imageHotspotPaddingUnits,
        [deviceType]: unit
      }
    });
  };

  // Image Hotspot Margin (skeleton converted)
  const imageHotspotMarginUnitsChange = (event, position) => {
    const value = event.target.value;
    if (imageHotspotMarginLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            imageHotspotMarginDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotMarginTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotMarginMobile: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
      }
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({ imageHotspotMarginDesktop: { ...imageHotspotMarginDesktop, [position]: value } });
          break;
        case 'Tablet':
          setAttributes({ imageHotspotMarginTablet: { ...imageHotspotMarginTablet, [position]: value } });
          break;
        case 'Mobile':
          setAttributes({ imageHotspotMarginMobile: { ...imageHotspotMarginMobile, [position]: value } });
          break;
      }
    }
  };

  const imageHotspotMarginLinkBtn = () => {
    setAttributes({
      imageHotspotMarginLink: !imageHotspotMarginLink
    });
  };

  const imageHotspotMarginUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotMarginUnits: {
        ...imageHotspotMarginUnits,
        [deviceType]: unit
      }
    });
  };

  // Image Hotspot Border Radius
  const imageHotspotBorderUnitsChange = (event, position) => {
    const value = event.target.value;
    if (imageHotspotBorderLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({    
            imageHotspotBorderDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotBorderTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotBorderMobile: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
      }
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({ imageHotspotBorderDesktop: { ...imageHotspotBorderDesktop, [position]: value } });
          break;
        case 'Tablet':
          setAttributes({ imageHotspotBorderTablet: { ...imageHotspotBorderTablet, [position]: value } });
          break;
        case 'Mobile':
          setAttributes({ imageHotspotBorderMobile: { ...imageHotspotBorderMobile, [position]: value } });
          break;
      }
    }
  };

  const imageHotspotBorderLinkBtn = () => {
    setAttributes({
      imageHotspotBorderLink: !imageHotspotBorderLink
    });
  };

  const imageHotspotBorderUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotBorderUnits: {
        ...imageHotspotBorderUnits,
        [deviceType]: unit
      }
    });
  };

  // Image Hotspot Border Radius (for the container)
  const imageHotspotBorderRadiusUnitsChange = (event, position) => {
    const value = event.target.value;
    if (imageHotspotBorderRadiusLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            imageHotspotBorderRadiusDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotBorderRadiusTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotBorderRadiusMobile: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
      }
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({ imageHotspotBorderRadiusDesktop: { ...imageHotspotBorderRadiusDesktop, [position]: value } });
          break;
        case 'Tablet':
          setAttributes({ imageHotspotBorderRadiusTablet: { ...imageHotspotBorderRadiusTablet, [position]: value } });
          break;
        case 'Mobile':
          setAttributes({ imageHotspotBorderRadiusMobile: { ...imageHotspotBorderRadiusMobile, [position]: value } });
          break;
      }
    }
  };

  const imageHotspotBorderRadiusLinkBtn = () => {
    setAttributes({
      imageHotspotBorderRadiusLink: !imageHotspotBorderRadiusLink
    });
  };

  const imageHotspotBorderRadiusUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotBorderRadiusUnits: {
        ...imageHotspotBorderRadiusUnits,
        [deviceType]: unit
      }
    });
  };
  
  const selectedHotspot = hotspots?.find(h => h.id === selectedHotspotId);

  const addHotspot = () => {
    const hotspotNumber = (hotspots?.length || 0) + 1;
    const newHotspot = {
      id: Date.now().toString(),
      x: 50,
      y: 50,
      title: `${__('Hotspot', 'frontis-blocks')} ${hotspotNumber}`    ,
      description: '',
      backgroundColor: '#011f4b',
      icon: '',
      link: '',
      openInNewTab: false,
      popoverImageUrl: '',
      popoverImageAlt: '',
      popoverImageId: 0,
      animation: 'none'
    };
    setAttributes({ 
      imageHotspot_hotspots: [...(hotspots || []), newHotspot],
      imageHotspot_selectedHotspotId: newHotspot.id
    });
  };

  const updateHotspot = (field, value) => {
    const updated = hotspots.map(h => 
      h.id === selectedHotspotId ? { ...h, [field]: value } : h
    );
    setAttributes({ imageHotspot_hotspots: updated });
  };

  const deleteHotspot = () => {
    const filtered = hotspots.filter(h => h.id !== selectedHotspotId);
    setAttributes({ 
      imageHotspot_hotspots: filtered,
      imageHotspot_selectedHotspotId: filtered[0]?.id || null
    });
  };

  const generalControls = (
    <>
      <PanelBody title={__("Image", "frontis-blocks")} initialOpen={true}>
        <FB_ImageControl
          label={__("Select Image", "frontis-blocks")}
          globalImageUrl={imageUrl}
          setglobalImageUrl={(url) => setAttributes({ imageHotspot_imageUrl: url })}
          globalImageAlt={imageAlt}
          setglobalImageAlt={(alt) => setAttributes({ imageHotspot_imageAlt: alt })}
          globalImageID={imageId}
          setglobalImageID={(id) => setAttributes({ imageHotspot_imageId: id })}
          globalImageSize={imageSize}
          setglobalImageSize={(size) => setAttributes({ imageHotspot_imageSize: size })}
          isImageSize={true}
        />
        <FB_Range
          label={__("Image Height", "frontis-blocks")}
          rangeValue={imageHeight}
          onChangeHandler={(value) => setAttributes({ imageHotspot_imageHeight: value })}
          rangeUnitHandler={(unit) => setAttributes({ 
            imageHotspot_imageHeightUnits: { 
              ...imageHeightUnits, 
              [deviceType]: unit 
            } 
          })}
          deviceType={deviceType}
          units={imageHeightUnits}
          min={100}
          max={2000}
          rangeStep={1}
          resetFallbackValue={500}
        />
      </PanelBody>

      <PanelBody title={__("Hotspots", "frontis-blocks")} initialOpen={true}>
        <Button variant="primary" onClick={addHotspot} className='fb-hotspot-full-btn'>
          {__('Add a new Hotspot', 'frontis-blocks')}
        </Button>
        
        <SelectControl
          label={__("Select Hotspot", "frontis-blocks")}
          value={selectedHotspotId || ''}
          options={[
            { label: __('Select a hotspot', 'frontis-blocks'), value: '' },
            ...hotspots.map((h, index) => ({
              label: h.title || `Hotspot ${index + 1} (${h.x}%, ${h.y}%)`,
              value: h.id
            }))
          ]}
          onChange={(value) => setAttributes({ imageHotspot_selectedHotspotId: value })}
        />
        
        {hotspots?.length > 0 && (
          <PanelRow>
            <small>
              {__('Total hotspots: ', 'frontis-blocks')}{hotspots.length} | 
              {__(' Click any dot on image to select', 'frontis-blocks')}
            </small>
          </PanelRow>
        )}

        {selectedHotspot && (
          <div className="fb-hotspot-selected-wrapper">
            <div>
              <h3 className="fb-hotspot-section-heading">
                {__('Content', 'frontis-blocks')}
              </h3>
              <FB_InputControl
                label={__("Hotspot Title", "frontis-blocks")}
                value={selectedHotspot.title || ''}
                onChangeValue={(value) => updateHotspot('title', value)}
                placeholder={__("Enter title", "frontis-blocks")}
              />
              
              <TextareaControl
                label={__("Hotspot Description", "frontis-blocks")}
                value={selectedHotspot.description || ''}
                onChange={(value) => updateHotspot('description', value)}
                placeholder={__("Enter description that will appear in popup", "frontis-blocks")}
                rows={4}
              />

              <FB_ImageControl
                  label={__("Popover Image", "frontis-blocks")}
                  globalImageUrl={selectedHotspot.popoverImageUrl || ''}
                  setglobalImageUrl={(url) => updateHotspot('popoverImageUrl', url)}
                  globalImageAlt={selectedHotspot.popoverImageAlt || ''}
                  setglobalImageAlt={(alt) => updateHotspot('popoverImageAlt', alt)}
                  globalImageID={selectedHotspot.popoverImageId || 0}
                  setglobalImageID={(id) => updateHotspot('popoverImageId', id)}
                  isImageSize={false}
              />
              
              <FBIconPicker
                label={__("Marker Icon", "frontis-blocks")}
                value={selectedHotspot.icon}
                setIconHandler={(icon) => updateHotspot('icon', icon)}
              />
            </div>

            <div>
              <SelectControl
                  label={__("Marker Animation", "frontis-blocks")}
                  value={selectedHotspot.animation || 'none'}
                  options={[
                      { label: __('None', 'frontis-blocks'), value: 'none' },
                      { label: __('Pulse', 'frontis-blocks'), value: 'pulse' },
                      { label: __('Glow', 'frontis-blocks'), value: 'glow' },
                      { label: __('Bounce', 'frontis-blocks'), value: 'bounce' },
                      { label: __('Float', 'frontis-blocks'), value: 'float' },
                  ]}
                  onChange={(value) => updateHotspot('animation', value)}
              />
            </div>

            <div>
              <h3 className="fb-hotspot-section-heading">
                {__('Position', 'frontis-blocks')}
              </h3>
              <FB_Range
                label={__("X Position (%)", "frontis-blocks")}
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
                label={__("Y Position (%)", "frontis-blocks")}
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
              <h3 className="fb-hotspot-section-heading">
                {__('Styling', 'frontis-blocks')}
              </h3>
              <FB_ColorControl
                label={__("Marker Color", "frontis-blocks")}
                globalColor={selectedHotspot.backgroundColor}
                setGlobalColor={(color) => updateHotspot('backgroundColor', color)}
              />
            </div>

            <Button isDestructive onClick={deleteHotspot} className="fb-hotspot-full-btn">
              {__('Delete Hotspot', 'frontis-blocks')}
            </Button>
          </div>
        )}
      </PanelBody>
    </>
  );

  const styleControls = (
    <>
      <PanelBody title={__("Marker Size", "frontis-blocks")} initialOpen={false}>
          <p className="fb-hotspot-label-normal">{__('Normal', 'frontis-blocks')}</p>
          <FB_Range
              label={__("Size", "frontis-blocks")}
              rangeValue={attributes.imageHotspot_markerSize}
              onChangeHandler={(value) => setAttributes({ imageHotspot_markerSize: value })}
              rangeUnitHandler={(unit) => setAttributes({
                  imageHotspot_markerSizeUnits: {
                      ...attributes.imageHotspot_markerSizeUnits,
                      [deviceType]: unit
                  }
              })}
              deviceType={deviceType}
              units={attributes.imageHotspot_markerSizeUnits}
              min={10}
              max={100}
              rangeStep={1}
              resetFallbackValue={40}
          />

          <p className="fb-hotspot-label-hover">{__('Hover', 'frontis-blocks')}</p>
          <FB_Range
              label={__("Size", "frontis-blocks")}
              rangeValue={attributes.imageHotspot_markerHoverSize}
              onChangeHandler={(value) => setAttributes({ imageHotspot_markerHoverSize: value })}
              rangeUnitHandler={(unit) => setAttributes({
                  imageHotspot_markerHoverSizeUnits: {
                      ...attributes.imageHotspot_markerHoverSizeUnits,
                      [deviceType]: unit
                  }
              })}
              deviceType={deviceType}
              units={attributes.imageHotspot_markerHoverSizeUnits}
              min={10}
              max={100}
              rangeStep={1}
              resetFallbackValue={40}
          />
      </PanelBody>
      <PanelBody title={__("Popover Typography", "frontis-blocks")} initialOpen={true}>
        <FB_TypographyControl
          label={__("Popover Typography", "frontis-blocks")}
          deviceType={deviceType}
          setAttributes={setAttributes}
        />
      </PanelBody>

      <PanelBody title={__("Padding", "frontis-blocks")} initialOpen={false}>
        {/* Padding controls skeleton - can be expanded */}
        <p>{__('Padding settings will appear here', 'frontis-blocks')}</p>
      </PanelBody>

      <PanelBody title={__("Margin", "frontis-blocks")} initialOpen={false}>
        <p>{__('Margin settings will appear here', 'frontis-blocks')}</p>
      </PanelBody>

      <PanelBody title={__("Border", "frontis-blocks")} initialOpen={false}>
        <p>{__('Border settings will appear here', 'frontis-blocks')}</p>
      </PanelBody>
    </>
  );

  const advancedControls = (
    <PanelBody title={__("Advanced", "frontis-blocks")} initialOpen={true}>
      <p>{__('Advanced settings coming soon', 'frontis-blocks')}</p>
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