import { __ } from '@wordpress/i18n';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { 
  PanelBody, 
  PanelRow, 
  Button, 
  TextareaControl, 
  SelectControl,
  ToggleControl
} from '@wordpress/components';

import FB_InspectorControls from '../../components/InspectorControls';
import FB_ImageControl from '../../components/image-control';
import FB_ColorControl from '../../components/color-control';
import FBIconPicker from '../../components/icon-picker';
import FB_Range from '../../components/range';
import FB_TypographyControl from '../../components/typography-control';
import FB_InputControl from '../../components/input-control';
import FB_SwitcherControl from '../../components/switcher-control';
import FB_Spacing from '../../components/spacing';
import FB_VisibilityControl from '../../components/visibility-control';
import FB_CustomCSSEditor from '../../components/custom-css-editor';
import FB_BoxShadowControl from '../../components/box-shadow';
import { useDeviceType } from '@Config/displayType';
import SortableItem from './sortableItem';

export default function Inspector({ attributes, setAttributes }) {
  const {
    // Image
    imageHotspot_imageUrl,
    imageHotspot_imageId,
    imageHotspot_imageAlt,
    imageHotspot_imageSize,
    imageHotspot_imageHeight,
    imageHotspot_imageHeightUnits,

    // Hotspots
    imageHotspot_hotspots,
    imageHotspot_selectedHotspotId,

    // Marker styles
    imageHotspot_markerSize,
    imageHotspot_markerSizeUnits,
    imageHotspot_markerHoverSize,
    imageHotspot_markerHoverSizeUnits,
    imageHotspot_markerColorSwitcher,
    imageHotspot_markerSizeSwitcher,
    imageHotspot_containerShadowCssValue,

    // Icon styles
    imageHotspot_iconColorSwitcher,

    // Title typography
    imageHotspot_titleFontFamily,
    imageHotspot_titleFontSize,
    imageHotspot_titleFontSizeUnits,
    imageHotspot_titleFontWeight,
    imageHotspot_titleFontStyle,
    imageHotspot_titleTextTransform,
    imageHotspot_titleTextDecoration,
    imageHotspot_titleLetterSpacing,
    imageHotspot_titleLetterSpacingUnits,
    imageHotspot_titleLineHeight,
    imageHotspot_titleLineHeightUnits,

    // Description typography
    imageHotspot_descFontFamily,
    imageHotspot_descFontSize,
    imageHotspot_descFontSizeUnits,
    imageHotspot_descFontWeight,
    imageHotspot_descFontStyle,
    imageHotspot_descTextTransform,
    imageHotspot_descTextDecoration,
    imageHotspot_descLetterSpacing,
    imageHotspot_descLetterSpacingUnits,
    imageHotspot_descLineHeight,
    imageHotspot_descLineHeightUnits,

    // Padding
    imageHotspotPaddingUnits,
    imageHotspotPaddingDesktop,
    imageHotspotPaddingTablet,
    imageHotspotPaddingMobile,
    imageHotspotPaddingLink,
    imageHotspot_popoverPaddingUnits,
    imageHotspot_popoverPaddingDesktop,
    imageHotspot_popoverPaddingTablet,
    imageHotspot_popoverPaddingMobile,
    imageHotspot_popoverPaddingLink,

    // Margin
    imageHotspotMarginUnits,
    imageHotspotMarginDesktop,
    imageHotspotMarginTablet,
    imageHotspotMarginMobile,
    imageHotspotMarginLink,

    // Border
    imageHotspotBorderUnits,
    imageHotspotBorderDesktop,
    imageHotspotBorderTablet,
    imageHotspotBorderMobile,
    imageHotspotBorderLink,

    // Border Radius
    imageHotspotBorderRadiusUnits,
    imageHotspotBorderRadiusDesktop,
    imageHotspotBorderRadiusTablet,
    imageHotspotBorderRadiusMobile,
    imageHotspotBorderRadiusLink,

    // Responsive
    imageHotspotDesktopSwitcher,
    imageHotspotTabletSwitcher,
    imageHotspotMobileSwitcher,

    // Custom CSS
    imageHotspot_customCSS,

    imageHotspot_containerShadowValues,
    imageHotspot_popoverShadowValues
  } = attributes;

  const deviceType = useDeviceType();

  // Padding handlers
  const imageHotspotPaddingUnitsChange = (event, position) => {
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
    setAttributes({ imageHotspotPaddingLink: !imageHotspotPaddingLink });
  };

  const imageHotspotPaddingUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotPaddingUnits: {
        ...imageHotspotPaddingUnits,
        [deviceType]: unit
      }
    });
  };

  const imageHotspot_popoverPaddingUnitsChange = (event, position) => {
    const value = event.target.value;
    if (imageHotspot_popoverPaddingLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            imageHotspot_popoverPaddingDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspot_popoverPaddingTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspot_popoverPaddingMobile: {
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
          setAttributes({
            imageHotspot_popoverPaddingDesktop: {
              ...imageHotspot_popoverPaddingDesktop,
              [position]: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspot_popoverPaddingTablet: {
              ...imageHotspot_popoverPaddingTablet,
              [position]: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspot_popoverPaddingMobile: {
              ...imageHotspot_popoverPaddingMobile,
              [position]: value
            }
          });
          break;
      }
    }
  };

  const imageHotspot_popoverPaddingLinkBtn = () => {
    setAttributes({ imageHotspot_popoverPaddingLink: !imageHotspot_popoverPaddingLink });
  };

  // Margin handlers
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
    setAttributes({ imageHotspotMarginLink: !imageHotspotMarginLink });
  };

  const imageHotspotMarginUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotMarginUnits: {
        ...imageHotspotMarginUnits,
        [deviceType]: unit
      }
    });
  };

  // Border handlers
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
    setAttributes({ imageHotspotBorderLink: !imageHotspotBorderLink });
  };

  const imageHotspotBorderUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotBorderUnits: {
        ...imageHotspotBorderUnits,
        [deviceType]: unit
      }
    });
  };

  // Border Radius handlers
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
    setAttributes({ imageHotspotBorderRadiusLink: !imageHotspotBorderRadiusLink });
  };

  const imageHotspotBorderRadiusUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotBorderRadiusUnits: {
        ...imageHotspotBorderRadiusUnits,
        [deviceType]: unit
      }
    });
  };

  let latestHotspots = imageHotspot_hotspots || [];

  const addHotspot = () => {
    const hotspotNumber = (imageHotspot_hotspots?.length || 0) + 1;
    const newHotspot = {
      id: Date.now().toString(),
      x: 50,
      y: 50,
      title: `${__('Hotspot', 'frontis-blocks')} ${hotspotNumber}`,
      description: '',
      backgroundColor: '#011f4b',
      icon: 'plus',
      popoverImageUrl: '',
      popoverImageAlt: '',
      popoverImageId: 0,
      animation: 'none',
      autoplay: true,
      animationInterval: 0,
      iconColor: '#ffffff',
      hoverBackgroundColor: '',
      markerSize: imageHotspot_markerSize,
      markerSizeUnits: imageHotspot_markerSizeUnits,
      markerHoverSize: imageHotspot_markerHoverSize,
      markerHoverSizeUnits: imageHotspot_markerHoverSizeUnits,
      popoverPosition: 'top',
    };
    setAttributes({ 
      imageHotspot_hotspots: [...(imageHotspot_hotspots || []), newHotspot],
      imageHotspot_selectedHotspotId: newHotspot.id
    });
  };

  const updateHotspot = (id, field, value) => {
    const updated = latestHotspots.map(h =>
      h.id === id ? { ...h, [field]: value } : h
    );
    latestHotspots = updated;
    setAttributes({ imageHotspot_hotspots: updated });
  };

  const deleteHotspot = (id) => {
    const filtered = latestHotspots.filter(h => h.id !== id);
    setAttributes({ 
      imageHotspot_hotspots: filtered,
      imageHotspot_selectedHotspotId: imageHotspot_selectedHotspotId === id ? filtered[0]?.id || null : imageHotspot_selectedHotspotId
    });
  };

  const duplicateHotspot = (id) => {
    const hotspotIndex = latestHotspots.findIndex(h => h.id === id);

    if (hotspotIndex === -1) {
      return;
    }

    const sourceHotspot = latestHotspots[hotspotIndex];
    const duplicatedHotspot = {
      ...sourceHotspot,
      id: Date.now().toString(),
      title: `${sourceHotspot.title || __('Hotspot', 'frontis-blocks')} ${__('Copy', 'frontis-blocks')}`,
      x: Math.min((Number(sourceHotspot.x) || 50) + 5, 100),
      y: Math.min((Number(sourceHotspot.y) || 50) + 5, 100),
    };
    const updated = [
      ...latestHotspots.slice(0, hotspotIndex + 1),
      duplicatedHotspot,
      ...latestHotspots.slice(hotspotIndex + 1),
    ];

    setAttributes({
      imageHotspot_hotspots: updated,
      imageHotspot_selectedHotspotId: duplicatedHotspot.id,
    });
  };

  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) {
      return;
    }

    const oldIndex = latestHotspots.findIndex(hotspot => hotspot.id === active.id);
    const newIndex = latestHotspots.findIndex(hotspot => hotspot.id === over.id);

    if (oldIndex === -1 || newIndex === -1) {
      return;
    }

    setAttributes({ imageHotspot_hotspots: arrayMove(latestHotspots, oldIndex, newIndex) });
  };

  const generalControls = (
    <>
      <PanelBody title={__("Image", "frontis-blocks")} initialOpen={true}>
        <FB_ImageControl
          label={__("Select Image", "frontis-blocks")}
          globalImageUrl={imageHotspot_imageUrl}
          setglobalImageUrl={(url) => setAttributes({ imageHotspot_imageUrl: url })}
          globalImageAlt={imageHotspot_imageAlt}
          setglobalImageAlt={(alt) => setAttributes({ imageHotspot_imageAlt: alt })}
          globalImageID={imageHotspot_imageId}
          setglobalImageID={(id) => setAttributes({ imageHotspot_imageId: id })}
          globalImageSize={imageHotspot_imageSize}
          setglobalImageSize={(size) => setAttributes({ imageHotspot_imageSize: size })}
          isImageSize={true}
        />
        <FB_Range
          label={__("Image Height", "frontis-blocks")}
          rangeValue={imageHotspot_imageHeight}
          onChangeHandler={(value) => setAttributes({ imageHotspot_imageHeight: value })}
          rangeUnitHandler={(unit) => setAttributes({ 
            imageHotspot_imageHeightUnits: { 
              ...imageHotspot_imageHeightUnits, 
              [deviceType]: unit 
            } 
          })}
          deviceType={deviceType}
          units={imageHotspot_imageHeightUnits}
          min={100}
          max={2000}
          rangeStep={1}
          resetFallbackValue={500}
        />
      </PanelBody>

      <PanelBody title={__("Hotspots", "frontis-blocks")} initialOpen={true}>
        {imageHotspot_hotspots?.length > 0 && (
          <PanelRow>
            <small>
              {__('Total hotspots: ', 'frontis-blocks')}{imageHotspot_hotspots.length}
            </small>
          </PanelRow>
        )}

        {imageHotspot_hotspots?.length > 0 && (
          <div className="fb-hotspot-repeater-wrapper">
            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext items={imageHotspot_hotspots.map((hotspot) => hotspot.id)}>
                <ul className="dnd-items-wrapper">
                  {imageHotspot_hotspots.map((hotspot, index) => (
                    <SortableItem
                      key={hotspot.id}
                      id={hotspot.id}
                      item={hotspot}
                      index={index}
                      handleDeleteItem={deleteHotspot}
                      handleDuplicateItem={duplicateHotspot}
                    >
                    <div className="fb-hotspot-selected-wrapper">
                      <div>
                        <h3 className="fb-hotspot-section-heading">
                          {__('Content', 'frontis-blocks')}
                        </h3>
                        <FB_InputControl
                          label={__("Hotspot Title", "frontis-blocks")}
                          value={hotspot.title || ''}
                          onChangeValue={(value) => updateHotspot(hotspot.id, 'title', value)}
                          placeholder={__("Enter title", "frontis-blocks")}
                        />
                        
                        <TextareaControl
                          label={__("Hotspot Description", "frontis-blocks")}
                          value={hotspot.description || ''}
                          onChange={(value) => updateHotspot(hotspot.id, 'description', value)}
                          placeholder={__("Enter description that will appear in popup", "frontis-blocks")}
                          rows={4}
                        />

                        <FB_ImageControl
                            label={__("Popover Image", "frontis-blocks")}
                            globalImageUrl={hotspot.popoverImageUrl || ''}
                            setglobalImageUrl={(url) => updateHotspot(hotspot.id, 'popoverImageUrl', url)}
                            globalImageAlt={hotspot.popoverImageAlt || ''}
                            setglobalImageAlt={(alt) => updateHotspot(hotspot.id, 'popoverImageAlt', alt)}
                            globalImageID={hotspot.popoverImageId || 0}
                            setglobalImageID={(id) => updateHotspot(hotspot.id, 'popoverImageId', id)}
                            isImageSize={false}
                        />

                        <SelectControl
                            label={__("Popover Position", "frontis-blocks")}
                            value={hotspot.popoverPosition || 'top'}
                            options={[
                                { label: __('Top', 'frontis-blocks'), value: 'top' },
                                { label: __('Bottom', 'frontis-blocks'), value: 'bottom' },
                                { label: __('Left', 'frontis-blocks'), value: 'left' },
                                { label: __('Right', 'frontis-blocks'), value: 'right' },
                                { label: __('Top Left', 'frontis-blocks'), value: 'top-left' },
                                { label: __('Top Right', 'frontis-blocks'), value: 'top-right' },
                                { label: __('Bottom Left', 'frontis-blocks'), value: 'bottom-left' },
                                { label: __('Bottom Right', 'frontis-blocks'), value: 'bottom-right' },
                            ]}
                            onChange={(value) => updateHotspot(hotspot.id, 'popoverPosition', value)}
                        />
                        
                        <p className="fb-hotspot-control-label">{__("Marker Icon", "frontis-blocks")}</p>
                        <FBIconPicker
                          value={hotspot.icon || 'plus'}
                          setIconHandler={(icon) => updateHotspot(hotspot.id, 'icon', icon)}
                        />
                      </div>

                      <div>
                        <SelectControl
                            label={__("Marker Animation", "frontis-blocks")}
                            value={hotspot.animation || 'none'}
                            options={[
                                { label: __('None', 'frontis-blocks'), value: 'none' },
                                { label: __('Pulse', 'frontis-blocks'), value: 'pulse' },
                                { label: __('Glow', 'frontis-blocks'), value: 'glow' },
                                { label: __('Float', 'frontis-blocks'), value: 'float' },
                            ]}
                            onChange={(value) => updateHotspot(hotspot.id, 'animation', value)}
                        />
                        {(hotspot.animation || 'none') !== 'none' && (
                          <>
                            <ToggleControl
                              label={__("Autoplay", "frontis-blocks")}
                              checked={hotspot.autoplay !== false}
                              onChange={(value) => updateHotspot(hotspot.id, 'autoplay', value)}
                            />

                            {hotspot.autoplay !== false && (
                              <FB_Range
                                label={__("Animation Interval (s)", "frontis-blocks")}
                                rangeValue={{ [deviceType]: hotspot.animationInterval || 0 }}
                                onChangeHandler={(value) => updateHotspot(hotspot.id, 'animationInterval', value[deviceType])}
                                deviceType={deviceType}
                                min={0}
                                max={10}
                                rangeStep={0.1}
                                isRangeUnit={false}
                                resetFallbackValue={0}
                              />
                            )}
                          </>
                        )}
                      </div>

                      <div>
                        <h3 className="fb-hotspot-section-heading">
                          {__('Position', 'frontis-blocks')}
                        </h3>
                        <FB_Range
                          label={__("X Position (%)", "frontis-blocks")}
                          rangeValue={{ [deviceType]: hotspot.x }}
                          onChangeHandler={(value) => updateHotspot(hotspot.id, 'x', value[deviceType])}
                          deviceType={deviceType}
                          min={0}
                          max={100}
                          rangeStep={1}
                          isRangeUnit={false}
                          resetFallbackValue={50}
                        />
                        
                        <FB_Range
                          label={__("Y Position (%)", "frontis-blocks")}
                          rangeValue={{ [deviceType]: hotspot.y }}
                          onChangeHandler={(value) => updateHotspot(hotspot.id, 'y', value[deviceType])}
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
                        <FB_SwitcherControl
                            label={__("Marker Size", "frontis-blocks")}
                            globalSwitcher={imageHotspot_markerSizeSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ imageHotspot_markerSizeSwitcher: value })}
                        />

                        {imageHotspot_markerSizeSwitcher === 'normal' && (
                            <FB_Range
                                label={__("Size", "frontis-blocks")}
                                rangeValue={hotspot.markerSize || imageHotspot_markerSize}
                                onChangeHandler={(value) => updateHotspot(hotspot.id, 'markerSize', value)}
                                rangeUnitHandler={(unit) => updateHotspot(hotspot.id, 'markerSizeUnits', {
                                    ...(hotspot.markerSizeUnits || imageHotspot_markerSizeUnits),
                                    [deviceType]: unit
                                })}
                                deviceType={deviceType}
                                units={hotspot.markerSizeUnits || imageHotspot_markerSizeUnits}
                                min={10}
                                max={100}
                                rangeStep={1}
                                resetFallbackValue={35}
                            />
                        )}

                        {imageHotspot_markerSizeSwitcher === 'hover' && (
                            <FB_Range
                                label={__("Hover Size", "frontis-blocks")}
                                rangeValue={hotspot.markerHoverSize || imageHotspot_markerHoverSize}
                                onChangeHandler={(value) => updateHotspot(hotspot.id, 'markerHoverSize', value)}
                                rangeUnitHandler={(unit) => updateHotspot(hotspot.id, 'markerHoverSizeUnits', {
                                    ...(hotspot.markerHoverSizeUnits || imageHotspot_markerHoverSizeUnits),
                                    [deviceType]: unit
                                })}
                                deviceType={deviceType}
                                units={hotspot.markerHoverSizeUnits || imageHotspot_markerHoverSizeUnits}
                                min={10}
                                max={100}
                                rangeStep={1}
                                resetFallbackValue={40}
                            />
                        )}

                        <FB_SwitcherControl
                            label={__("Marker Color", "frontis-blocks")}
                            globalSwitcher={imageHotspot_markerColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ imageHotspot_markerColorSwitcher: value })}
                        />

                        {imageHotspot_markerColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Color", "frontis-blocks")}
                                globalColor={hotspot.backgroundColor || '#011f4b'}
                                setGlobalColor={(color) => updateHotspot(hotspot.id, 'backgroundColor', color)}
                            />
                        )}

                        {imageHotspot_markerColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={hotspot.hoverBackgroundColor || ''}
                                setGlobalColor={(color) => updateHotspot(hotspot.id, 'hoverBackgroundColor', color)}
                            />
                        )}
                        <FB_SwitcherControl
                            label={__("Marker Icon Color", "frontis-blocks")}
                            globalSwitcher={imageHotspot_iconColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ imageHotspot_iconColorSwitcher: value })}
                        />

                        {imageHotspot_iconColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Icon Color", "frontis-blocks")}
                                globalColor={hotspot.iconColor || '#ffffff'}
                                setGlobalColor={(color) => updateHotspot(hotspot.id, 'iconColor', color)}
                            />
                        )}

                        {imageHotspot_iconColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Icon Hover Color", "frontis-blocks")}
                                globalColor={hotspot.iconHoverColor || ''}
                                setGlobalColor={(color) => updateHotspot(hotspot.id, 'iconHoverColor', color)}
                            />
                        )}
                      </div>
                    </div>
                    </SortableItem>
                  ))}
                </ul>
              </SortableContext>
            </DndContext>
          </div>
        )}
        <Button variant="primary" onClick={addHotspot} className='fb-hotspot-full-btn'>
          {__('Add Hotspot', 'frontis-blocks')}
        </Button>
      </PanelBody>
    </>
  );

  const styleControls = (
    <>
      <PanelBody title={__("Typography", "frontis-blocks")} initialOpen={true}>
        <FB_TypographyControl
          label={__("Title Typography", "frontis-blocks")}
          deviceType={deviceType}
          setAttributes={setAttributes}
          
          fontFamily={imageHotspot_titleFontFamily}
          onChangeFontFamily={(value) => setAttributes({ imageHotspot_titleFontFamily: value })}
          
          fontSize={imageHotspot_titleFontSize}
          onChangeFontSize={(value) => setAttributes({ imageHotspot_titleFontSize: value })}
          fontSizeUnits={imageHotspot_titleFontSizeUnits}
          onChangeFontSizeUnit={(value) => setAttributes({ imageHotspot_titleFontSizeUnits: value })}
          
          fontWeight={imageHotspot_titleFontWeight}
          onChangeFontWeight={(value) => setAttributes({ imageHotspot_titleFontWeight: value })}
          
          fontStyle={imageHotspot_titleFontStyle}
          onChangeFontStyle={(value) => setAttributes({ imageHotspot_titleFontStyle: value })}
          
          textTransform={imageHotspot_titleTextTransform}
          onChangeTextTransform={(value) => setAttributes({ imageHotspot_titleTextTransform: value })}
          
          textDecoration={imageHotspot_titleTextDecoration}
          onChangeTextDecoration={(value) => setAttributes({ imageHotspot_titleTextDecoration: value })}
          
          letterSpacing={imageHotspot_titleLetterSpacing}
          onChangeLetterSpacing={(value) => setAttributes({ imageHotspot_titleLetterSpacing: value })}
          letterSpacingUnits={imageHotspot_titleLetterSpacingUnits}
          onChangeLetterSpacingUnit={(value) => setAttributes({ imageHotspot_titleLetterSpacingUnits: value })}
          
          lineHeight={imageHotspot_titleLineHeight}
          onChangeLineHeight={(value) => setAttributes({ imageHotspot_titleLineHeight: value })}
          lineHeightUnits={imageHotspot_titleLineHeightUnits}
          onChangeLineHeightUnit={(value) => setAttributes({ imageHotspot_titleLineHeightUnits: value })}
        />
        <FB_TypographyControl
          label={__("Description Typography", "frontis-blocks")}
          deviceType={deviceType}
          setAttributes={setAttributes}
          
          fontFamily={imageHotspot_descFontFamily}
          onChangeFontFamily={(value) => setAttributes({ imageHotspot_descFontFamily: value })}
          
          fontSize={imageHotspot_descFontSize}
          onChangeFontSize={(value) => setAttributes({ imageHotspot_descFontSize: value })}
          fontSizeUnits={imageHotspot_descFontSizeUnits}
          onChangeFontSizeUnit={(value) => setAttributes({ imageHotspot_descFontSizeUnits: value })}
          
          fontWeight={imageHotspot_descFontWeight}
          onChangeFontWeight={(value) => setAttributes({ imageHotspot_descFontWeight: value })}
          
          fontStyle={imageHotspot_descFontStyle}
          onChangeFontStyle={(value) => setAttributes({ imageHotspot_descFontStyle: value })}
          
          textTransform={imageHotspot_descTextTransform}
          onChangeTextTransform={(value) => setAttributes({ imageHotspot_descTextTransform: value })}
          
          textDecoration={imageHotspot_descTextDecoration}
          onChangeTextDecoration={(value) => setAttributes({ imageHotspot_descTextDecoration: value })}
          
          letterSpacing={imageHotspot_descLetterSpacing}
          onChangeLetterSpacing={(value) => setAttributes({ imageHotspot_descLetterSpacing: value })}
          letterSpacingUnits={imageHotspot_descLetterSpacingUnits}
          onChangeLetterSpacingUnit={(value) => setAttributes({ imageHotspot_descLetterSpacingUnits: value })}
          
          lineHeight={imageHotspot_descLineHeight}
          onChangeLineHeight={(value) => setAttributes({ imageHotspot_descLineHeight: value })}
          lineHeightUnits={imageHotspot_descLineHeightUnits}
          onChangeLineHeightUnit={(value) => setAttributes({ imageHotspot_descLineHeightUnits: value })}
        />
      </PanelBody>

      <PanelBody title={__("Padding & Margin", "frontis-blocks")} initialOpen={false}>
        <FB_Spacing
          label={__("Padding", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={imageHotspotPaddingUnitsHandler}
          spacingUnits={imageHotspotPaddingUnits}
          spacingDesktop={imageHotspotPaddingDesktop}
          spacingTablet={imageHotspotPaddingTablet}
          spacingMobile={imageHotspotPaddingMobile}
          handleSpacingUnitHandler={imageHotspotPaddingUnitsChange}
          spacingCombineBtn={imageHotspotPaddingLink}
          spacingCombineBtnHandler={imageHotspotPaddingLinkBtn}
          setAttributes={setAttributes}
        />
        <FB_Spacing
          label={__("Popover Padding", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={(unit) => setAttributes({
            imageHotspot_popoverPaddingUnits: {
              ...imageHotspot_popoverPaddingUnits,
              [deviceType]: unit
            }
          })}
          spacingUnits={imageHotspot_popoverPaddingUnits}
          spacingDesktop={imageHotspot_popoverPaddingDesktop}
          spacingTablet={imageHotspot_popoverPaddingTablet}
          spacingMobile={imageHotspot_popoverPaddingMobile}
          handleSpacingUnitHandler={imageHotspot_popoverPaddingUnitsChange}
          spacingCombineBtn={imageHotspot_popoverPaddingLink}
          spacingCombineBtnHandler={() => setAttributes({
            imageHotspot_popoverPaddingLink: !imageHotspot_popoverPaddingLink
          })}
          setAttributes={setAttributes}
        />
        <FB_Spacing
          label={__("Margin", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={imageHotspotMarginUnitsHandler}
          spacingUnits={imageHotspotMarginUnits}
          spacingDesktop={imageHotspotMarginDesktop}
          spacingTablet={imageHotspotMarginTablet}
          spacingMobile={imageHotspotMarginMobile}
          handleSpacingUnitHandler={imageHotspotMarginUnitsChange}
          spacingCombineBtn={imageHotspotMarginLink}
          spacingCombineBtnHandler={imageHotspotMarginLinkBtn}
          setAttributes={setAttributes}
        />
      </PanelBody>

      <PanelBody title={__("Border & Box Shadow", "frontis-blocks")} initialOpen={false}>
        <FB_Spacing
          label={__("Border", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={imageHotspotBorderUnitsHandler}
          spacingUnits={imageHotspotBorderUnits}
          spacingDesktop={imageHotspotBorderDesktop}
          spacingTablet={imageHotspotBorderTablet}
          spacingMobile={imageHotspotBorderMobile}
          handleSpacingUnitHandler={imageHotspotBorderUnitsChange}
          spacingCombineBtn={imageHotspotBorderLink}
          spacingCombineBtnHandler={imageHotspotBorderLinkBtn}
          setAttributes={setAttributes}
        />

        <FB_Spacing
          label={__("Border Radius", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={imageHotspotBorderRadiusUnitsHandler}
          spacingUnits={imageHotspotBorderRadiusUnits}
          spacingDesktop={imageHotspotBorderRadiusDesktop}
          spacingTablet={imageHotspotBorderRadiusTablet}
          spacingMobile={imageHotspotBorderRadiusMobile}
          handleSpacingUnitHandler={imageHotspotBorderRadiusUnitsChange}
          spacingCombineBtn={imageHotspotBorderRadiusLink}
          spacingCombineBtnHandler={imageHotspotBorderRadiusLinkBtn}
          setAttributes={setAttributes}
        />

        <FB_BoxShadowControl
            label={__("Box Shadow", "frontis-blocks")}
            onBoxShadowChange={(value) => setAttributes({ imageHotspot_containerShadowValues: value })}
            initialShadowValue={imageHotspot_containerShadowValues}
            onBoxShadowStyleChange={(value) => setAttributes({ imageHotspot_containerShadowCssValue: value })}
        />
        <FB_BoxShadowControl
          label={__("Popover Shadow", "frontis-blocks")}
          onBoxShadowChange={(value) => setAttributes({ imageHotspot_popoverShadowValues: value })}
          initialShadowValue={imageHotspot_popoverShadowValues}
          onBoxShadowStyleChange={(value) =>
            setAttributes({
              imageHotspot_popoverShadowCssValue: value,
              imageHotspot_popoverShadow: value
            })
          }
        />
      </PanelBody>
    </>
  );

  const advancedControls = (
    <>
      <PanelBody title={__("Responsive Control", "frontis-blocks")} initialOpen={false}>
        <FB_VisibilityControl
          desktopValue={imageHotspotDesktopSwitcher}
          setDesktopValue={(value) => setAttributes({ imageHotspotDesktopSwitcher: value })}
          tabletValue={imageHotspotTabletSwitcher}
          setTabletValue={(value) => setAttributes({ imageHotspotTabletSwitcher: value })}
          mobileValue={imageHotspotMobileSwitcher}
          setMobileValue={(value) => setAttributes({ imageHotspotMobileSwitcher: value })}
        />
      </PanelBody>

      <PanelBody title={__("Custom CSS", "frontis-blocks")} initialOpen={false}>
        <FB_CustomCSSEditor
          value={imageHotspot_customCSS}
          onChangeValue={(value) => setAttributes({ imageHotspot_customCSS: value })}
        />
      </PanelBody>
    </>
  );

  return (
    <FB_InspectorControls
      generalControls={generalControls}
      styleControls={styleControls}
      advancedControls={advancedControls}
    />
  );
}
