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

import {
  BORDER_STYLES,
  OVERFLOW_OP
} from '@Constants/fbConstants';

import FB_InspectorControls from '../../components/InspectorControls';
import FB_PositionControl from '@Components/position-control';
import FB_ImageControl from '../../components/image-control';
import FB_ColorControl from '../../components/color-control';
import FBIconPicker from '../../components/icon-picker';
import FB_Range from '../../components/range';
import FB_TypographyControl from '../../components/typography-control';
import FB_InputControl from '../../components/input-control';
import FB_UrlControl from '../../components/url-control';
import FB_SwitcherControl from '../../components/switcher-control';
import FB_Spacing from '../../components/spacing';
import FB_VisibilityControl from '../../components/visibility-control';
import FB_CustomCSSEditor from '../../components/custom-css-editor';
import FB_BoxShadowControl from '../../components/box-shadow';
import FB_Presets from '@Components/presets';
import { imageHotspotPresets } from './preset';
import { useDeviceType } from '@Config/displayType';
import SortableItem from './sortableItem';

export default function Inspector({ attributes, setAttributes }) {
  const {
    imageHotspotPresetStyle,
    imageHotspotShowPopoverImage,
    imageHotspotCategoryColor,
    imageHotspotPriceColor,
    // Image
    imageHotspotImageUrl,
    imageHotspotImageId,
    imageHotspotImageAlt,
    imageHotspotImageSize,
    imageHotspotImageHeight,
    imageHotspotImageHeightUnits,
    imageHotspotImageBorderWidthDesktop,
    imageHotspotImageBorderWidthTablet,
    imageHotspotImageBorderWidthMobile,
    imageHotspotImageBorderWidthUnits,
    imageHotspotImageBorderWidthLink,
    imageHotspotImageBorderColor,
    imageHotspotImageBorderRadiusDesktop,
    imageHotspotImageBorderRadiusTablet,
    imageHotspotImageBorderRadiusMobile,
    imageHotspotImageBorderRadiusUnits,
    imageHotspotImageBorderRadiusLink,

    // Hotspots
    imageHotspotHotspots,
    imageHotspotSelectedHotspotId,

    // Marker styles
    imageHotspotMarkerColor,
    imageHotspotMarkerSize,
    imageHotspotMarkerSizeUnits,
    imageHotspotMarkerHoverSize,
    imageHotspotMarkerHoverSizeUnits,
    imageHotspotMarkerColorSwitcher,
    imageHotspotMarkerSizeSwitcher,
    imageHotspotContainerShadowCssValue,

    // Icon styles
    imageHotspotIconColorSwitcher,

    // Title typography
    imageHotspotTitleFontFamily,
    imageHotspotTitleFontSize,
    imageHotspotTitleFontSizeUnits,
    imageHotspotTitleFontWeight,
    imageHotspotTitleFontStyle,
    imageHotspotTitleColor,
    imageHotspotTitleHoverColor,
    imageHotspotTitleColorSwitcher,
    imageHotspotTitleTextTransform,
    imageHotspotTitleTextDecoration,
    imageHotspotTitleLetterSpacing,
    imageHotspotTitleLetterSpacingUnits,
    imageHotspotTitleLineHeight,
    imageHotspotTitleLineHeightUnits,

    // Description typography
    imageHotspotDescFontFamily,
    imageHotspotDescFontSize,
    imageHotspotDescFontSizeUnits,
    imageHotspotDescFontWeight,
    imageHotspotDescFontStyle,
    imageHotspotDescColor,
    imageHotspotDescTextTransform,
    imageHotspotDescTextDecoration,
    imageHotspotDescLetterSpacing,
    imageHotspotDescLetterSpacingUnits,
    imageHotspotDescLineHeight,
    imageHotspotDescLineHeightUnits,

    // Padding
    imageHotspotPaddingUnits,
    imageHotspotPaddingDesktop,
    imageHotspotPaddingTablet,
    imageHotspotPaddingMobile,
    imageHotspotPaddingLink,
    imageHotspotPopoverPaddingUnits,
    imageHotspotPopoverPaddingDesktop,
    imageHotspotPopoverPaddingTablet,
    imageHotspotPopoverPaddingMobile,
    imageHotspotPopoverPaddingLink,
    imageHotspotPopoverBorderRadiusDesktop,
    imageHotspotPopoverBorderRadiusTablet,
    imageHotspotPopoverBorderRadiusMobile,
    imageHotspotPopoverBorderRadiusUnits,
    imageHotspotPopoverBorderRadiusLink,
    imageHotspotPopoverBorderWidthDesktop,
    imageHotspotPopoverBorderWidthTablet,
    imageHotspotPopoverBorderWidthMobile,
    imageHotspotPopoverBorderWidthUnits,
    imageHotspotPopoverBorderWidthLink,
    imageHotspotPopoverBorderColor,
    imageHotspotPopoverImageBorderWidthDesktop,
    imageHotspotPopoverImageBorderWidthTablet,
    imageHotspotPopoverImageBorderWidthMobile,
    imageHotspotPopoverImageBorderWidthUnits,
    imageHotspotPopoverImageBorderWidthLink,
    imageHotspotPopoverImageBorderRadiusDesktop,
    imageHotspotPopoverImageBorderRadiusTablet,
    imageHotspotPopoverImageBorderRadiusMobile,
    imageHotspotPopoverImageBorderRadiusUnits,
    imageHotspotPopoverImageBorderRadiusLink,
    imageHotspotPopoverImageBorderColor,

    // Margin
    imageHotspotMarginUnits,
    imageHotspotMarginDesktop,
    imageHotspotMarginTablet,
    imageHotspotMarginMobile,
    imageHotspotMarginLink,

    // Responsive
    imageHotspotDesktopSwitcher,
    imageHotspotTabletSwitcher,
    imageHotspotMobileSwitcher,

    // Custom CSS
    imageHotspotCustomCSS,

    imageHotspotPopoverBgColor,
    imageHotspotContainerShadowValues,
    imageHotspotPopoverShadowValues,
    globalZIndex,
    imageHotspotOverflow,

    globalPaddingUnits,
    globalPaddingDesktop,
    globalPaddingTablet,
    globalPaddingMobile,
    globalPaddingLink,

    globalMarginUnits,
    globalMarginDesktop,
    globalMarginTablet,
    globalMarginMobile,
    globalMarginLink,

    globalBgColorSwitcher,
    globalBgColor,
    globalBgHoverColor,

    globalBorder,
    globalBorderColorSwitcher,
    globalBorderColor,
    globalBorderHoverColor,

    globalBorderUnits,
    globalBorderDesktop,
    globalBorderTablet,
    globalBorderMobile,
    globalBorderLink,

    globalBorderRadiusUnits,
    globalBorderRadiusDesktop,
    globalBorderRadiusTablet,
    globalBorderRadiusMobile,
    globalBorderRadiusLink,

    imageHotspotGlobalimageHotspotShadowSwitcher,
    imageHotspotGlobalimageHotspotShadowValues,
    imageHotspotGlobalimageHotspotShadowCssValue,

    imageHotspotGlobalHoverimageHotspotShadowValues,
    imageHotspotGlobalHoverimageHotspotShadowCssValue,
    imageHotspotPositionType,
    imageHotspotHZOrientationType,
    imageHotspotVROrientationType,

    imageHotspotHZLeftOffset,
    imageHotspotHZLeftOffsetUnits,

    imageHotspotHZRightOffset,
    imageHotspotHZRightOffsetUnits,

    imageHotspotVRTopOffset,
    imageHotspotVRTopOffsetUnits,

    imageHotspotVRBottomOffset,
    imageHotspotVRBottomOffsetUnits,
    imageHotspotGlobalWraperClass,
    imageHotspotGlobalWraperID,
    imageHotspotBoxShadowSwitcher,
    imageHotspotBoxShadowValues,
    imageHotspotBoxShadowCssValue,

    imageHotspotHoverBoxShadowValues,
    imageHotspotHoverBoxShadowCssValue,
  } = attributes;

  const deviceType = useDeviceType();

  const normalizeFourSided = (value) => {
    if (value && typeof value === 'object') {
      return {
        top: value.top || '',
        right: value.right || '',
        bottom: value.bottom || '',
        left: value.left || ''
      };
    }

    return {
      top: value || '',
      right: value || '',
      bottom: value || '',
      left: value || ''
    };
  };

  const getDeviceFourSided = (values, device) => normalizeFourSided(values?.[device]);

  const updateFourSidedAttribute = (attributeName, values, isLinked, event, position) => {
    const value = event.target.value;
    const currentDeviceValue = isLinked
      ? { top: value, right: value, bottom: value, left: value }
      : {
        ...getDeviceFourSided(values, deviceType),
        [position]: value
      };

    setAttributes({
      [attributeName]: {
        ...(values || {}),
        [deviceType]: currentDeviceValue
      }
    });
  };

  const updateFourSidedUnit = (attributeName, units, unit) => {
    setAttributes({
      [attributeName]: {
        ...(units || {}),
        [deviceType]: unit
      }
    });
  };

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

  const imageHotspotPopoverPaddingUnitsChange = (event, position) => {
    const value = event.target.value;
    if (imageHotspotPopoverPaddingLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            imageHotspotPopoverPaddingDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotPopoverPaddingTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotPopoverPaddingMobile: {
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
            imageHotspotPopoverPaddingDesktop: {
              ...imageHotspotPopoverPaddingDesktop,
              [position]: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotPopoverPaddingTablet: {
              ...imageHotspotPopoverPaddingTablet,
              [position]: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotPopoverPaddingMobile: {
              ...imageHotspotPopoverPaddingMobile,
              [position]: value
            }
          });
          break;
      }
    }
  };

  const imageHotspotPopoverPaddingLinkBtn = () => {
    setAttributes({ imageHotspotPopoverPaddingLink: !imageHotspotPopoverPaddingLink });
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

  /** Start Global padding */
  const handleGlobalPaddingUnitChange = (event, position) => {
    const value = event.target.value;
    if (globalPaddingLink) {
      switch (deviceType) {
        case "Desktop":
          setAttributes({
            globalPaddingDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value,
            },
          });
          break;
        case "Tablet":
          setAttributes({
            globalPaddingTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value,
            },
          });
          break;
        case "Mobile":
          setAttributes({
            globalPaddingMobile: {
              top: value,
              right: value,
              bottom: value,
              left: value,
            },
          });
          break;
        default:
          break;
      }
    } else {
      switch (deviceType) {
        case "Desktop":
          setAttributes({
            globalPaddingDesktop: {
              ...globalPaddingDesktop,
              [position]: value,
            },
          });
          break;
        case "Tablet":
          setAttributes({
            globalPaddingTablet: { ...globalPaddingTablet, [position]: value },
          });
          break;
        case "Mobile":
          setAttributes({
            globalPaddingMobile: { ...globalPaddingMobile, [position]: value },
          });
          break;
        default:
          break;
      }
    }
  };

  const handleGlobalPaddingCombineBtn = () => {
    setAttributes({ globalPaddingLink: !globalPaddingLink });
  };

  const handleGlobalPaddingUnitsHandler = (unit) => {
    setAttributes({
      globalPaddingUnits: {
        ...globalPaddingUnits,
        [deviceType]: unit,
      },
    });
  };

  /** Start Global margin */
  const handleGlobalMarginUnitChange = (event, position) => {
    const value = event.target.value;
    if (globalMarginLink) {
      switch (deviceType) {
        case "Desktop":
          setAttributes({
            globalMarginDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value,
            },
          });
          break;
        case "Tablet":
          setAttributes({
            globalMarginTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value,
            },
          });
          break;
        case "Mobile":
          setAttributes({
            globalMarginMobile: {
              top: value,
              right: value,
              bottom: value,
              left: value,
            },
          });
          break;
        default:
          break;
      }
    } else {
      switch (deviceType) {
        case "Desktop":
          setAttributes({
            globalMarginDesktop: { ...globalMarginDesktop, [position]: value },
          });
          break;
        case "Tablet":
          setAttributes({
            globalMarginTablet: { ...globalMarginTablet, [position]: value },
          });
          break;
        case "Mobile":
          setAttributes({
            globalMarginMobile: { ...globalMarginMobile, [position]: value },
          });
          break;
        default:
          break;
      }
    }
  };

  const handleGlobalMarginCombineBtn = () => {
    setAttributes({ globalMarginLink: !globalMarginLink });
  };

  const handleGlobalMarginUnitsHandler = (unit) => {
    setAttributes({
      globalMarginUnits: {
        ...globalMarginUnits,
        [deviceType]: unit,
      },
    });
  };

  /** Start Global border */
  const handleGlobalBorderUnitChange = (event, position) => {
    const value = event.target.value;
    if (globalBorderLink) {
      switch (deviceType) {
        case "Desktop":
          setAttributes({
            globalBorderDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value,
            },
          });
          break;
        case "Tablet":
          setAttributes({
            globalBorderTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value,
            },
          });
          break;
        case "Mobile":
          setAttributes({
            globalBorderMobile: {
              top: value,
              right: value,
              bottom: value,
              left: value,
            },
          });
          break;
        default:
          break;
      }
    } else {
      switch (deviceType) {
        case "Desktop":
          setAttributes({
            globalBorderDesktop: { ...globalBorderDesktop, [position]: value },
          });
          break;
        case "Tablet":
          setAttributes({
            globalBorderTablet: { ...globalBorderTablet, [position]: value },
          });
          break;
        case "Mobile":
          setAttributes({
            globalBorderMobile: { ...globalBorderMobile, [position]: value },
          });
          break;
        default:
          break;
      }
    }
  };

  const handleGlobalBorderCombineBtn = () => {
    setAttributes({ globalBorderLink: !globalBorderLink });
  };

  const handleGlobalBorderUnitsHandler = (unit) => {
    setAttributes({
      globalBorderUnits: {
        ...globalBorderUnits,
        [deviceType]: unit,
      },
    });
  };
  /** End Global border */
  /** End Border */

  /** Start Global border radius*/
  const handleGlobalBorderRadiusUnitChange = (event, position) => {
    const value = event.target.value;
    if (globalBorderRadiusLink) {
      switch (deviceType) {
        case "Desktop":
          setAttributes({
            globalBorderRadiusDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value,
            },
          });
          break;
        case "Tablet":
          setAttributes({
            globalBorderRadiusTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value,
            },
          });
          break;
        case "Mobile":
          setAttributes({
            globalBorderRadiusMobile: {
              top: value,
              right: value,
              bottom: value,
              left: value,
            },
          });
          break;
        default:
          break;
      }
    } else {
      switch (deviceType) {
        case "Desktop":
          setAttributes({
            globalBorderRadiusDesktop: {
              ...globalBorderRadiusDesktop,
              [position]: value,
            },
          });
          break;
        case "Tablet":
          setAttributes({
            globalBorderRadiusTablet: {
              ...globalBorderRadiusTablet,
              [position]: value,
            },
          });
          break;
        case "Mobile":
          setAttributes({
            globalBorderRadiusMobile: {
              ...globalBorderRadiusMobile,
              [position]: value,
            },
          });
          break;
        default:
          break;
      }
    }
  };

  const handleGlobalBorderRadiusCombineBtn = () => {
    setAttributes({ globalBorderRadiusLink: !globalBorderRadiusLink });
  };

  const handleGlobalBorderRadiusUnitsHandler = (unit) => {
    setAttributes({
      globalBorderRadiusUnits: {
        ...globalBorderRadiusUnits,
        [deviceType]: unit,
      },
    });
  };

  let latestHotspots = imageHotspotHotspots || [];

  const addHotspot = () => {
    const hotspotNumber = (imageHotspotHotspots?.length || 0) + 1;
    const newHotspot = {
      id: Date.now().toString(),
      x: 50,
      y: 50,
      category: '',
      title: `${__('Hotspot', 'frontis-blocks')} ${hotspotNumber}`,
      titleLink: '',
      titleLinkOpenInNewTab: false,
      description: '',
      price: '',
      markerColor: imageHotspotMarkerColor,
      backgroundColor: imageHotspotMarkerColor,
      icon: 'plus',
      popoverImageUrl: '',
      popoverImageAlt: '',
      popoverImageId: 0,
      animation: 'none',
      autoplay: true,
      animationInterval: 0,
      iconColor: '',
      hoverBackgroundColor: '',
      markerSize: imageHotspotMarkerSize,
      markerSizeUnits: imageHotspotMarkerSizeUnits,
      markerHoverSize: imageHotspotMarkerHoverSize,
      markerHoverSizeUnits: imageHotspotMarkerHoverSizeUnits,
      popoverPosition: 'top',
    };
    setAttributes({
      imageHotspotHotspots: [...(imageHotspotHotspots || []), newHotspot],
      imageHotspotSelectedHotspotId: newHotspot.id
    });
  };

  const updateHotspot = (id, field, value) => {
    const updated = latestHotspots.map(h =>
      h.id === id ? { ...h, [field]: value } : h
    );
    latestHotspots = updated;
    setAttributes({ imageHotspotHotspots: updated });
  };

  const deleteHotspot = (id) => {
    const filtered = latestHotspots.filter(h => h.id !== id);
    setAttributes({
      imageHotspotHotspots: filtered,
      imageHotspotSelectedHotspotId: imageHotspotSelectedHotspotId === id ? filtered[0]?.id || null : imageHotspotSelectedHotspotId
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
      imageHotspotHotspots: updated,
      imageHotspotSelectedHotspotId: duplicatedHotspot.id,
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

    setAttributes({ imageHotspotHotspots: arrayMove(latestHotspots, oldIndex, newIndex) });
  };

  const imageHotspotImageBorderWidthChange = (event, position) => {
    const value = event.target.value;
    const attr = `imageHotspotImageBorderWidth${deviceType}`;
    const current = attributes[attr];
    setAttributes({
      [attr]: imageHotspotImageBorderWidthLink
        ? { top: value, right: value, bottom: value, left: value }
        : { ...current, [position]: value }
    });
  };

  const imageHotspotImageBorderRadiusChange = (event, position) => {
    const value = event.target.value;
    const attr = `imageHotspotImageBorderRadius${deviceType}`;
    const current = attributes[attr];
    setAttributes({
      [attr]: imageHotspotImageBorderRadiusLink
        ? { top: value, right: value, bottom: value, left: value }
        : { ...current, [position]: value }
    });
  };

  const imageHotspotPopoverBorderWidthChange = (event, position) => {
    const value = event.target.value;
    const attr = `imageHotspotPopoverBorderWidth${deviceType}`;
    const current = attributes[attr];
    setAttributes({
      [attr]: imageHotspotPopoverBorderWidthLink
        ? { top: value, right: value, bottom: value, left: value }
        : { ...current, [position]: value }
    });
  };

  const imageHotspotPopoverBorderRadiusChange = (event, position) => {
    const value = event.target.value;
    const attr = `imageHotspotPopoverBorderRadius${deviceType}`;
    const current = attributes[attr];
    setAttributes({
      [attr]: imageHotspotPopoverBorderRadiusLink
        ? { top: value, right: value, bottom: value, left: value }
        : { ...current, [position]: value }
    });
  };

  const imageHotspotPopoverImageBorderWidthChange = (event, position) => {
    const value = event.target.value;
    const attr = `imageHotspotPopoverImageBorderWidth${deviceType}`;
    const current = attributes[attr];
    setAttributes({
      [attr]: imageHotspotPopoverImageBorderWidthLink
        ? { top: value, right: value, bottom: value, left: value }
        : { ...current, [position]: value }
    });
  };

  const imageHotspotPopoverImageBorderRadiusChange = (event, position) => {
    const value = event.target.value;
    const attr = `imageHotspotPopoverImageBorderRadius${deviceType}`;
    const current = attributes[attr];
    setAttributes({
      [attr]: imageHotspotPopoverImageBorderRadiusLink
        ? { top: value, right: value, bottom: value, left: value }
        : { ...current, [position]: value }
    });
  };

  const generalControls = (
    <>
      <PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
        <FB_Presets
          presets={imageHotspotPresets}
          value={imageHotspotPresetStyle}
          onChangeValue="imageHotspotPresetStyle"
          defaultPresetValue="preset-1"
          setAttributes={setAttributes}
        />
        <FB_ImageControl
          label={__("Select Image", "frontis-blocks")}
          globalImageUrl={imageHotspotImageUrl}
          setglobalImageUrl={(url) => setAttributes({ imageHotspotImageUrl: url })}
          globalImageAlt={imageHotspotImageAlt}
          setglobalImageAlt={(alt) => setAttributes({ imageHotspotImageAlt: alt })}
          globalImageID={imageHotspotImageId}
          setglobalImageID={(id) => setAttributes({ imageHotspotImageId: id })}
          globalImageSize={imageHotspotImageSize}
          setglobalImageSize={(size) => setAttributes({ imageHotspotImageSize: size })}
          isImageSize={true}
        />
        <FB_Range
          label={__("Image Height", "frontis-blocks")}
          rangeValue={imageHotspotImageHeight}
          onChangeHandler={(value) => setAttributes({ imageHotspotImageHeight: value })}
          rangeUnitHandler={(unit) => setAttributes({
            imageHotspotImageHeightUnits: {
              ...imageHotspotImageHeightUnits,
              [deviceType]: unit
            }
          })}
          deviceType={deviceType}
          units={imageHotspotImageHeightUnits}
          min={100}
          max={2000}
          rangeStep={1}
          resetFallbackValue={500}
        />
      </PanelBody>

      <PanelBody title={__("Hotspots", "frontis-blocks")} initialOpen={true}>
        {imageHotspotHotspots?.length > 0 && (
          <PanelRow>
            <small>
              {__('Total hotspots: ', 'frontis-blocks')}{imageHotspotHotspots.length}
            </small>
          </PanelRow>
        )}

        {imageHotspotHotspots?.length > 0 && (
          <div className="fb-hotspot-repeater-wrapper">
            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext items={imageHotspotHotspots.map((hotspot) => hotspot.id)}>
                <ul className="dnd-items-wrapper">
                  {imageHotspotHotspots.map((hotspot, index) => (
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
                            label={__("Category", "frontis-blocks")}
                            value={hotspot.category || ''}
                            onChangeValue={(value) => updateHotspot(hotspot.id, 'category', value)}
                            placeholder={__("Enter category", "frontis-blocks")}
                          />

                          <FB_InputControl
                            label={__("Hotspot Title", "frontis-blocks")}
                            value={hotspot.title || ''}
                            onChangeValue={(value) => updateHotspot(hotspot.id, 'title', value)}
                            placeholder={__("Enter title", "frontis-blocks")}
                          />

                          <FB_UrlControl
                            label={__("Title Link", "frontis-blocks")}
                            url={hotspot.titleLink || ''}
                            onChangeUrl={(value) => updateHotspot(hotspot.id, 'titleLink', value)}
                            openInNewTab={!!hotspot.titleLinkOpenInNewTab}
                            onChangeOpenInNewTab={(value) => updateHotspot(hotspot.id, 'titleLinkOpenInNewTab', value)}
                          />

                          <TextareaControl
                            label={__("Hotspot Description", "frontis-blocks")}
                            value={hotspot.description || ''}
                            onChange={(value) => updateHotspot(hotspot.id, 'description', value)}
                            placeholder={__("Enter description that will appear in popup", "frontis-blocks")}
                            rows={4}
                          />

                          <FB_InputControl
                            label={__("Price", "frontis-blocks")}
                            value={hotspot.price || ''}
                            onChangeValue={(value) => updateHotspot(hotspot.id, 'price', value)}
                            placeholder={__("Enter price", "frontis-blocks")}
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

                          <ToggleControl
                            label={__("Show Popover Image", "frontis-blocks")}
                            checked={hotspot.showImage !== false}
                            onChange={(value) => updateHotspot(hotspot.id, 'showImage', value)}
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
                            globalSwitcher={imageHotspotMarkerSizeSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ imageHotspotMarkerSizeSwitcher: value })}
                          />

                          {imageHotspotMarkerSizeSwitcher === 'normal' && (
                            <FB_Range
                              label={__("Size", "frontis-blocks")}
                              rangeValue={hotspot.markerSize || imageHotspotMarkerSize}
                              onChangeHandler={(value) => updateHotspot(hotspot.id, 'markerSize', value)}
                              rangeUnitHandler={(unit) => updateHotspot(hotspot.id, 'markerSizeUnits', {
                                ...(hotspot.markerSizeUnits || imageHotspotMarkerSizeUnits),
                                [deviceType]: unit
                              })}
                              deviceType={deviceType}
                              units={hotspot.markerSizeUnits || imageHotspotMarkerSizeUnits}
                              min={10}
                              max={100}
                              rangeStep={1}
                              resetFallbackValue={35}
                            />
                          )}

                          {imageHotspotMarkerSizeSwitcher === 'hover' && (
                            <FB_Range
                              label={__("Hover Size", "frontis-blocks")}
                              rangeValue={hotspot.markerHoverSize || imageHotspotMarkerHoverSize}
                              onChangeHandler={(value) => updateHotspot(hotspot.id, 'markerHoverSize', value)}
                              rangeUnitHandler={(unit) => updateHotspot(hotspot.id, 'markerHoverSizeUnits', {
                                ...(hotspot.markerHoverSizeUnits || imageHotspotMarkerHoverSizeUnits),
                                [deviceType]: unit
                              })}
                              deviceType={deviceType}
                              units={hotspot.markerHoverSizeUnits || imageHotspotMarkerHoverSizeUnits}
                              min={10}
                              max={100}
                              rangeStep={1}
                              resetFallbackValue={40}
                            />
                          )}

                          <FB_SwitcherControl
                            label={__("Marker Color", "frontis-blocks")}
                            globalSwitcher={imageHotspotMarkerColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ imageHotspotMarkerColorSwitcher: value })}
                          />

                          {imageHotspotMarkerColorSwitcher === 'normal' && (
                            <FB_ColorControl
                              label={__("Color", "frontis-blocks")}
                              globalColor={hotspot.markerColor || imageHotspotMarkerColor}
                              setGlobalColor={(color) => updateHotspot(hotspot.id, 'markerColor', color)}
                            />
                          )}

                          {imageHotspotMarkerColorSwitcher === 'hover' && (
                            <FB_ColorControl
                              label={__("Hover Color", "frontis-blocks")}
                              globalColor={hotspot.hoverBackgroundColor || ''}
                              setGlobalColor={(color) => updateHotspot(hotspot.id, 'hoverBackgroundColor', color)}
                            />
                          )}
                          <FB_SwitcherControl
                            label={__("Marker Icon Color", "frontis-blocks")}
                            globalSwitcher={imageHotspotIconColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ imageHotspotIconColorSwitcher: value })}
                          />

                          {imageHotspotIconColorSwitcher === 'normal' && (
                            <FB_ColorControl
                              label={__("Icon Color", "frontis-blocks")}
                              globalColor={hotspot.iconColor || '#ffffff'}
                              setGlobalColor={(color) => updateHotspot(hotspot.id, 'iconColor', color)}
                            />
                          )}

                          {imageHotspotIconColorSwitcher === 'hover' && (
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
        <Button variant="primary" onClick={addHotspot}>
          {__('Add Hotspot', 'frontis-blocks')}
        </Button>
      </PanelBody>
    </>
  );

  const styleControls = (
    <>
      <PanelBody title={__("Colors", "frontis-blocks")} initialOpen={true}>
        <FB_ColorControl
          label={__("Popover Background", "frontis-blocks")}
          globalColor={imageHotspotPopoverBgColor}
          setGlobalColor={(value) => setAttributes({ imageHotspotPopoverBgColor: value })}
        />

        <FB_SwitcherControl
          label={__("Title Color", "frontis-blocks")}
          globalSwitcher={imageHotspotTitleColorSwitcher}
          setGlobalSwitcher={(value) => setAttributes({ imageHotspotTitleColorSwitcher: value })}
        />

        {imageHotspotTitleColorSwitcher === 'normal' && (
          <FB_ColorControl
            label={__("Color", "frontis-blocks")}
            globalColor={imageHotspotTitleColor}
            setGlobalColor={(value) => setAttributes({ imageHotspotTitleColor: value })}
          />
        )}

        {imageHotspotTitleColorSwitcher === 'hover' && (
          <FB_ColorControl
            label={__("Hover Color", "frontis-blocks")}
            globalColor={imageHotspotTitleHoverColor}
            setGlobalColor={(value) => setAttributes({ imageHotspotTitleHoverColor: value })}
          />
        )}

        <FB_ColorControl
          label={__("Description Color", "frontis-blocks")}
          globalColor={imageHotspotDescColor}
          setGlobalColor={(value) => setAttributes({ imageHotspotDescColor: value })}
        />
        <FB_ColorControl
          label={__("Category Color", "frontis-blocks")}
          globalColor={imageHotspotCategoryColor}
          setGlobalColor={(value) => setAttributes({ imageHotspotCategoryColor: value })}
        />

        <FB_ColorControl
          label={__("Price Color", "frontis-blocks")}
          globalColor={imageHotspotPriceColor}
          setGlobalColor={(value) => setAttributes({ imageHotspotPriceColor: value })}
        />
      </PanelBody>

      <PanelBody title={__("Typography", "frontis-blocks")} initialOpen={true}>
        <FB_TypographyControl
          label={__("Title Typography", "frontis-blocks")}
          deviceType={deviceType}
          setAttributes={setAttributes}

          fontFamily={imageHotspotTitleFontFamily}
          onChangeFontFamily={(value) => setAttributes({ imageHotspotTitleFontFamily: value })}

          fontSize={imageHotspotTitleFontSize}
          onChangeFontSize={(value) => setAttributes({ imageHotspotTitleFontSize: value })}
          fontSizeUnits={imageHotspotTitleFontSizeUnits}
          onChangeFontSizeUnit={(value) => setAttributes({ imageHotspotTitleFontSizeUnits: value })}

          fontWeight={imageHotspotTitleFontWeight}
          onChangeFontWeight={(value) => setAttributes({ imageHotspotTitleFontWeight: value })}

          fontStyle={imageHotspotTitleFontStyle}
          onChangeFontStyle={(value) => setAttributes({ imageHotspotTitleFontStyle: value })}

          textTransform={imageHotspotTitleTextTransform}
          onChangeTextTransform={(value) => setAttributes({ imageHotspotTitleTextTransform: value })}

          textDecoration={imageHotspotTitleTextDecoration}
          onChangeTextDecoration={(value) => setAttributes({ imageHotspotTitleTextDecoration: value })}

          letterSpacing={imageHotspotTitleLetterSpacing}
          onChangeLetterSpacing={(value) => setAttributes({ imageHotspotTitleLetterSpacing: value })}
          letterSpacingUnits={imageHotspotTitleLetterSpacingUnits}
          onChangeLetterSpacingUnit={(value) => setAttributes({ imageHotspotTitleLetterSpacingUnits: value })}

          lineHeight={imageHotspotTitleLineHeight}
          onChangeLineHeight={(value) => setAttributes({ imageHotspotTitleLineHeight: value })}
          lineHeightUnits={imageHotspotTitleLineHeightUnits}
          onChangeLineHeightUnit={(value) => setAttributes({ imageHotspotTitleLineHeightUnits: value })}
        />
        <FB_TypographyControl
          label={__("Description Typography", "frontis-blocks")}
          deviceType={deviceType}
          setAttributes={setAttributes}

          fontFamily={imageHotspotDescFontFamily}
          onChangeFontFamily={(value) => setAttributes({ imageHotspotDescFontFamily: value })}

          fontSize={imageHotspotDescFontSize}
          onChangeFontSize={(value) => setAttributes({ imageHotspotDescFontSize: value })}
          fontSizeUnits={imageHotspotDescFontSizeUnits}
          onChangeFontSizeUnit={(value) => setAttributes({ imageHotspotDescFontSizeUnits: value })}

          fontWeight={imageHotspotDescFontWeight}
          onChangeFontWeight={(value) => setAttributes({ imageHotspotDescFontWeight: value })}

          fontStyle={imageHotspotDescFontStyle}
          onChangeFontStyle={(value) => setAttributes({ imageHotspotDescFontStyle: value })}

          textTransform={imageHotspotDescTextTransform}
          onChangeTextTransform={(value) => setAttributes({ imageHotspotDescTextTransform: value })}

          textDecoration={imageHotspotDescTextDecoration}
          onChangeTextDecoration={(value) => setAttributes({ imageHotspotDescTextDecoration: value })}

          letterSpacing={imageHotspotDescLetterSpacing}
          onChangeLetterSpacing={(value) => setAttributes({ imageHotspotDescLetterSpacing: value })}
          letterSpacingUnits={imageHotspotDescLetterSpacingUnits}
          onChangeLetterSpacingUnit={(value) => setAttributes({ imageHotspotDescLetterSpacingUnits: value })}

          lineHeight={imageHotspotDescLineHeight}
          onChangeLineHeight={(value) => setAttributes({ imageHotspotDescLineHeight: value })}
          lineHeightUnits={imageHotspotDescLineHeightUnits}
          onChangeLineHeightUnit={(value) => setAttributes({ imageHotspotDescLineHeightUnits: value })}
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
            imageHotspotPopoverPaddingUnits: {
              ...imageHotspotPopoverPaddingUnits,
              [deviceType]: unit
            }
          })}
          spacingUnits={imageHotspotPopoverPaddingUnits}
          spacingDesktop={imageHotspotPopoverPaddingDesktop}
          spacingTablet={imageHotspotPopoverPaddingTablet}
          spacingMobile={imageHotspotPopoverPaddingMobile}
          handleSpacingUnitHandler={imageHotspotPopoverPaddingUnitsChange}
          spacingCombineBtn={imageHotspotPopoverPaddingLink}
          spacingCombineBtnHandler={() => setAttributes({
            imageHotspotPopoverPaddingLink: !imageHotspotPopoverPaddingLink
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
          label={__("Image Border Width", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnits={imageHotspotImageBorderWidthUnits}
          spacingDesktop={imageHotspotImageBorderWidthDesktop}
          spacingTablet={imageHotspotImageBorderWidthTablet}
          spacingMobile={imageHotspotImageBorderWidthMobile}
          handleSpacingUnitHandler={imageHotspotImageBorderWidthChange}
          spacingUnitsHandler={(unit) => setAttributes({ imageHotspotImageBorderWidthUnits: { ...imageHotspotImageBorderWidthUnits, [deviceType]: unit } })}
          spacingCombineBtn={imageHotspotImageBorderWidthLink}
          spacingCombineBtnHandler={() => setAttributes({ imageHotspotImageBorderWidthLink: !imageHotspotImageBorderWidthLink })}
          setAttributes={setAttributes}
        />

        <FB_ColorControl
          label={__("Image Border Color", "frontis-blocks")}
          globalColor={imageHotspotImageBorderColor}
          setGlobalColor={(value) => setAttributes({ imageHotspotImageBorderColor: value })}
        />

        <FB_Spacing
          label={__("Image Border Radius", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnits={imageHotspotImageBorderRadiusUnits}
          spacingDesktop={imageHotspotImageBorderRadiusDesktop}
          spacingTablet={imageHotspotImageBorderRadiusTablet}
          spacingMobile={imageHotspotImageBorderRadiusMobile}
          handleSpacingUnitHandler={imageHotspotImageBorderRadiusChange}
          spacingUnitsHandler={(unit) => setAttributes({ imageHotspotImageBorderRadiusUnits: { ...imageHotspotImageBorderRadiusUnits, [deviceType]: unit } })}
          spacingCombineBtn={imageHotspotImageBorderRadiusLink}
          spacingCombineBtnHandler={() => setAttributes({ imageHotspotImageBorderRadiusLink: !imageHotspotImageBorderRadiusLink })}
          setAttributes={setAttributes}
        />

        <FB_Spacing
          label={__("Popover Border Width", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnits={imageHotspotPopoverBorderWidthUnits}
          spacingDesktop={imageHotspotPopoverBorderWidthDesktop}
          spacingTablet={imageHotspotPopoverBorderWidthTablet}
          spacingMobile={imageHotspotPopoverBorderWidthMobile}
          handleSpacingUnitHandler={imageHotspotPopoverBorderWidthChange}
          spacingUnitsHandler={(unit) => setAttributes({ imageHotspotPopoverBorderWidthUnits: { ...imageHotspotPopoverBorderWidthUnits, [deviceType]: unit } })}
          spacingCombineBtn={imageHotspotPopoverBorderWidthLink}
          spacingCombineBtnHandler={() => setAttributes({ imageHotspotPopoverBorderWidthLink: !imageHotspotPopoverBorderWidthLink })}
          setAttributes={setAttributes}
        />

        <FB_ColorControl
          label={__("Popover Border Color", "frontis-blocks")}
          globalColor={imageHotspotPopoverBorderColor}
          setGlobalColor={(value) => setAttributes({ imageHotspotPopoverBorderColor: value })}
        />

        <FB_Spacing
          label={__("Popover Border Radius", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnits={imageHotspotPopoverBorderRadiusUnits}
          spacingDesktop={imageHotspotPopoverBorderRadiusDesktop}
          spacingTablet={imageHotspotPopoverBorderRadiusTablet}
          spacingMobile={imageHotspotPopoverBorderRadiusMobile}
          handleSpacingUnitHandler={imageHotspotPopoverBorderRadiusChange}
          spacingUnitsHandler={(unit) => setAttributes({ imageHotspotPopoverBorderRadiusUnits: { ...imageHotspotPopoverBorderRadiusUnits, [deviceType]: unit } })}
          spacingCombineBtn={imageHotspotPopoverBorderRadiusLink}
          spacingCombineBtnHandler={() => setAttributes({ imageHotspotPopoverBorderRadiusLink: !imageHotspotPopoverBorderRadiusLink })}
          setAttributes={setAttributes}
        />

        <FB_Spacing
          label={__("Popover Image Border Width", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnits={imageHotspotPopoverImageBorderWidthUnits}
          spacingDesktop={imageHotspotPopoverImageBorderWidthDesktop}
          spacingTablet={imageHotspotPopoverImageBorderWidthTablet}
          spacingMobile={imageHotspotPopoverImageBorderWidthMobile}
          handleSpacingUnitHandler={imageHotspotPopoverImageBorderWidthChange}
          spacingUnitsHandler={(unit) => setAttributes({ imageHotspotPopoverImageBorderWidthUnits: { ...imageHotspotPopoverImageBorderWidthUnits, [deviceType]: unit } })}
          spacingCombineBtn={imageHotspotPopoverImageBorderWidthLink}
          spacingCombineBtnHandler={() => setAttributes({ imageHotspotPopoverImageBorderWidthLink: !imageHotspotPopoverImageBorderWidthLink })}
          setAttributes={setAttributes}
        />

        <FB_ColorControl
          label={__("Popover Image Border Color", "frontis-blocks")}
          globalColor={imageHotspotPopoverImageBorderColor}
          setGlobalColor={(value) => setAttributes({ imageHotspotPopoverImageBorderColor: value })}
        />

        <FB_Spacing
          label={__("Popover Image Border Radius", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnits={imageHotspotPopoverImageBorderRadiusUnits}
          spacingDesktop={imageHotspotPopoverImageBorderRadiusDesktop}
          spacingTablet={imageHotspotPopoverImageBorderRadiusTablet}
          spacingMobile={imageHotspotPopoverImageBorderRadiusMobile}
          handleSpacingUnitHandler={imageHotspotPopoverImageBorderRadiusChange}
          spacingUnitsHandler={(unit) => setAttributes({ imageHotspotPopoverImageBorderRadiusUnits: { ...imageHotspotPopoverImageBorderRadiusUnits, [deviceType]: unit } })}
          spacingCombineBtn={imageHotspotPopoverImageBorderRadiusLink}
          spacingCombineBtnHandler={() => setAttributes({ imageHotspotPopoverImageBorderRadiusLink: !imageHotspotPopoverImageBorderRadiusLink })}
          setAttributes={setAttributes}
        />

        <FB_BoxShadowControl
          label={__("Box Shadow", "frontis-blocks")}
          onBoxShadowChange={(value) => setAttributes({ imageHotspotContainerShadowValues: value })}
          initialShadowValue={imageHotspotContainerShadowValues}
          onBoxShadowStyleChange={(value) => setAttributes({ imageHotspotContainerShadowCssValue: value })}
        />
        <FB_BoxShadowControl
          label={__("Popover Shadow", "frontis-blocks")}
          onBoxShadowChange={(value) => setAttributes({ imageHotspotPopoverShadowValues: value })}
          initialShadowValue={imageHotspotPopoverShadowValues}
          onBoxShadowStyleChange={(value) =>
            setAttributes({
              imageHotspotPopoverShadowCssValue: value
            })
          }
        />
      </PanelBody>
    </>
  );

  const advancedControls = (
    <>
      <div className="fb-setting-advanced-tab-wrapper">
        <div className="fb-setting-inner-wrapper">
          <PanelBody
            title={__("Layout", "frontis-blocks")}
            initialOpen={true}
            className="fb-setting-layout-header"
          >
            <FB_Range
              min={0}
              max={10000000}
              label={__("Z Index", "frontis-blocks")}
              rangeValue={globalZIndex}
              onChangeHandler={(value) => setAttributes({ globalZIndex: value === 0 ? undefined : value })}
              deviceType={deviceType}
              setAttributes={setAttributes}
              rangeStep={1}
              resetFallbackValue={''}
              isRangeUnit={false}
            />

            <SelectControl
              label={__("Overflow", "frontis-blocks")}
              value={imageHotspotOverflow}
              options={OVERFLOW_OP}
              onChange={(value) => setAttributes({ imageHotspotOverflow: value })}
            />

            <FB_PositionControl
              deviceType={deviceType}
              positionType={imageHotspotPositionType}
              setPositionType={(value) => setAttributes({ imageHotspotPositionType: value })}

              HZOrientationType={imageHotspotHZOrientationType}
              setHZOrientationType={(value) =>
                setAttributes({ imageHotspotHZOrientationType: value })
              }
              VROrientationType={imageHotspotVROrientationType}
              setVROrientationType={(value) =>
                setAttributes({ imageHotspotVROrientationType: value })
              }

              HZLeftOffset={imageHotspotHZLeftOffset}
              setHZLeftOffset={(value) => setAttributes({ imageHotspotHZLeftOffset: value })}
              HZLeftOffsetUnits={imageHotspotHZLeftOffsetUnits}
              setHZLeftOffsetUnits={(value) => setAttributes({ imageHotspotHZLeftOffsetUnits: value })}
              HZRightOffset={imageHotspotHZRightOffset}
              setHZRightOffset={(value) => setAttributes({ imageHotspotHZRightOffset: value })}
              HZRightOffsetUnits={imageHotspotHZRightOffsetUnits}
              setHZRightOffsetUnits={(value) => setAttributes({ imageHotspotHZRightOffsetUnits: value })}

              VRTopOffset={imageHotspotVRTopOffset}
              setVRTopOffset={(value) => setAttributes({ imageHotspotVRTopOffset: value })}
              VRTopOffsetUnits={imageHotspotVRTopOffsetUnits}
              setVRTopOffsetUnits={(value) => setAttributes({ imageHotspotVRTopOffsetUnits: value })}
              VRBottomOffset={imageHotspotVRBottomOffset}
              setVRBottomOffset={(value) => setAttributes({ imageHotspotVRBottomOffset: value })}
              VRBottomOffsetUnits={imageHotspotVRBottomOffsetUnits}
              setVRBottomOffsetUnits={(value) => setAttributes({ imageHotspotVRBottomOffsetUnits: value })}

              setAttributes={setAttributes}
            />

            <FB_InputControl
              label={__("CSS ID", "frontis-blocks")}
              value={imageHotspotGlobalWraperID}
              onChangeValue={(value) => setAttributes({ imageHotspotGlobalWraperID: value })}
              helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
            />

            <FB_InputControl
              label={__("CSS Class", "frontis-blocks")}
              value={imageHotspotGlobalWraperClass}
              onChangeValue={(value) => setAttributes({ imageHotspotGlobalWraperClass: value })}
              helpText={__("Separate with spaces key.", "frontis-blocks")}
            />

          </PanelBody>

          <PanelBody
            title={__("Padding and Margin", "frontis-blocks")}
            initialOpen={false}
          >
            <FB_Spacing
              label={__("Padding", "frontis-blocks")}
              deviceType={deviceType}
              spacingUnitsHandler={
                handleGlobalPaddingUnitsHandler
              }
              spacingUnits={globalPaddingUnits}
              spacingDesktop={globalPaddingDesktop}
              spacingTablet={globalPaddingTablet}
              spacingMobile={globalPaddingMobile}
              handleSpacingUnitHandler={
                handleGlobalPaddingUnitChange
              }
              spacingCombineBtn={globalPaddingLink}
              spacingCombineBtnHandler={
                handleGlobalPaddingCombineBtn
              }
              setAttributes={setAttributes}
            />
            <FB_Spacing
              label={__("Margin", "frontis-blocks")}
              deviceType={deviceType}
              spacingUnitsHandler={handleGlobalMarginUnitsHandler}
              spacingUnits={globalMarginUnits}
              spacingDesktop={globalMarginDesktop}
              spacingTablet={globalMarginTablet}
              spacingMobile={globalMarginMobile}
              handleSpacingUnitHandler={
                handleGlobalMarginUnitChange
              }
              spacingCombineBtn={globalMarginLink}
              spacingCombineBtnHandler={
                handleGlobalMarginCombineBtn
              }
              setAttributes={setAttributes}
            />
          </PanelBody>

          <PanelBody title="Background Color" initialOpen={false}>
            <FB_SwitcherControl
              label={__("Background Color", "frontis-blocks")}
              globalSwitcher={globalBgColorSwitcher}
              setGlobalSwitcher={(value) => setAttributes({ globalBgColorSwitcher: value })}
            />

            {globalBgColorSwitcher === 'normal' && (
              <FB_ColorControl
                label={__("Normal Color", "frontis-blocks")}
                globalColor={globalBgColor}
                setGlobalColor={(value) => setAttributes({ globalBgColor: value === undefined ? '' : value })}
              />
            )}

            {globalBgColorSwitcher === 'hover' && (
              <FB_ColorControl
                label={__("Hover Color", "frontis-blocks")}
                globalColor={globalBgHoverColor}
                setGlobalColor={(value) => setAttributes({ globalBgHoverColor: value === undefined ? '' : value })}
              />
            )}
          </PanelBody>
          <PanelBody
            title={__("Border and Shadow", "frontis-blocks")}
            initialOpen={false}
          >
            <SelectControl
              label={__("Border Style", "frontis-blocks")}
              value={globalBorder}
              options={BORDER_STYLES}
              onChange={(value) =>
                setAttributes({ globalBorder: value })
              }
            />

            <FB_SwitcherControl
              label={__("Border Color", "frontis-blocks")}
              globalSwitcher={globalBorderColorSwitcher}
              setGlobalSwitcher={(value) => setAttributes({ globalBorderColorSwitcher: value })}
            />

            {globalBorderColorSwitcher === 'normal' && (
              <FB_ColorControl
                label={__("Normal Color", "frontis-blocks")}
                globalColor={globalBorderColor}
                setGlobalColor={(value) => setAttributes({ globalBorderColor: value === undefined ? '' : value })}
              />
            )}

            {globalBorderColorSwitcher === 'hover' && (
              <FB_ColorControl
                label={__("Hover Color", "frontis-blocks")}
                globalColor={globalBorderHoverColor}
                setGlobalColor={(value) => setAttributes({ globalBorderHoverColor: value === undefined ? '' : value })}
              />
            )}

            <FB_Spacing
              label={__("Border", "frontis-blocks")}
              deviceType={deviceType}
              spacingUnitsHandler={handleGlobalBorderUnitsHandler}
              spacingUnits={globalBorderUnits}
              spacingDesktop={globalBorderDesktop}
              spacingTablet={globalBorderTablet}
              spacingMobile={globalBorderMobile}
              handleSpacingUnitHandler={
                handleGlobalBorderUnitChange
              }
              spacingCombineBtn={globalBorderLink}
              spacingCombineBtnHandler={
                handleGlobalBorderCombineBtn
              }
              setAttributes={setAttributes}
            />

            <FB_Spacing
              label={__("Border Radius", "frontis-blocks")}
              deviceType={deviceType}
              spacingUnitsHandler={
                handleGlobalBorderRadiusUnitsHandler
              }
              spacingUnits={globalBorderRadiusUnits}
              spacingDesktop={globalBorderRadiusDesktop}
              spacingTablet={globalBorderRadiusTablet}
              spacingMobile={globalBorderRadiusMobile}
              handleSpacingUnitHandler={
                handleGlobalBorderRadiusUnitChange
              }
              spacingCombineBtn={globalBorderRadiusLink}
              spacingCombineBtnHandler={
                handleGlobalBorderRadiusCombineBtn
              }
              setAttributes={setAttributes}
            />

            <FB_SwitcherControl
              label={__("Box Shadow", "frontis-blocks")}
              globalSwitcher={imageHotspotBoxShadowSwitcher}
              setGlobalSwitcher={(value) => setAttributes({ imageHotspotBoxShadowSwitcher: value })}
            />

            {imageHotspotBoxShadowSwitcher === 'normal' && (
              <FB_BoxShadowControl
                label={__("Normal Shadow", "frontis-blocks")}
                onBoxShadowChange={(value) =>
                  setAttributes({ imageHotspotBoxShadowValues: value })
                }
                initialShadowValue={imageHotspotBoxShadowValues}
                onBoxShadowStyleChange={(value) =>
                  setAttributes({
                    imageHotspotBoxShadowCssValue: value,
                  })
                }
              />
            )}

            {imageHotspotBoxShadowSwitcher === 'hover' && (
              <FB_BoxShadowControl
                label={__("Hover Shadow", "frontis-blocks")}
                onBoxShadowChange={(value) =>
                  setAttributes({ imageHotspotHoverBoxShadowValues: value })
                }
                initialShadowValue={imageHotspotHoverBoxShadowValues}
                onBoxShadowStyleChange={(value) =>
                  setAttributes({
                    imageHotspotHoverBoxShadowCssValue: value,
                  })
                }
              />
            )}
          </PanelBody>

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
              value={imageHotspotCustomCSS}
              onChangeValue={(value) => setAttributes({ imageHotspotCustomCSS: value })}
            />
          </PanelBody>
        </div>
      </div>
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
