import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
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
import FB_BackgroundColorControl from '@Components/background-color-control';

export default function Inspector({ attributes, setAttributes }) {
  const {
    imageHotspotPresetStyle,
    imageHotspotCategoryFontFamily,
    imageHotspotCategoryFontSize,
    imageHotspotCategoryFontSizeUnits,
    imageHotspotCategoryFontWeight,
    imageHotspotCategoryFontStyle,
    imageHotspotCategoryColor,
    imageHotspotCategoryHoverColor,
    imageHotspotCategoryColorSwitcher,
    imageHotspotCategoryTextTransform,
    imageHotspotCategoryTextDecoration,
    imageHotspotCategoryLetterSpacing,
    imageHotspotCategoryLetterSpacingUnits,
    imageHotspotCategoryLineHeight,
    imageHotspotCategoryLineHeightUnits,
    imageHotspotCategoryPaddingUnits,
    imageHotspotCategoryPaddingDesktop,
    imageHotspotCategoryPaddingTablet,
    imageHotspotCategoryPaddingMobile,
    imageHotspotCategoryPaddingLink,
    imageHotspotCategoryMarginUnits,
    imageHotspotCategoryMarginDesktop,
    imageHotspotCategoryMarginTablet,
    imageHotspotCategoryMarginMobile,
    imageHotspotCategoryMarginLink,
    imageHotspotPriceFontFamily,
    imageHotspotPriceFontSize,
    imageHotspotPriceFontSizeUnits,
    imageHotspotPriceFontWeight,
    imageHotspotPriceFontStyle,
    imageHotspotPriceColor,
    imageHotspotPriceHoverColor,
    imageHotspotPriceColorSwitcher,
    imageHotspotPriceTextTransform,
    imageHotspotPriceTextDecoration,
    imageHotspotPriceLetterSpacing,
    imageHotspotPriceLetterSpacingUnits,
    imageHotspotPriceLineHeight,
    imageHotspotPriceLineHeightUnits,
    imageHotspotPricePaddingUnits,
    imageHotspotPricePaddingDesktop,
    imageHotspotPricePaddingTablet,
    imageHotspotPricePaddingMobile,
    imageHotspotPricePaddingLink,
    imageHotspotPriceMarginUnits,
    imageHotspotPriceMarginDesktop,
    imageHotspotPriceMarginTablet,
    imageHotspotPriceMarginMobile,
    imageHotspotPriceMarginLink,
    // Image
    imageHotspotImageUrl,
    imageHotspotImageId,
    imageHotspotImageAlt,
    imageHotspotImageSize,
    imageHotspotImageHeight,
    imageHotspotImageHeightUnits,

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

    // Icon styles
    imageHotspotIconColorSwitcher,

    // Social link styles
    imageHotspotSocialLinkIconColorSwitcher,
    // imageHotspotSocialLinkIconHoverColorSwitcher,

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
    imageHotspotTitleMarginUnits,
    imageHotspotTitleMarginDesktop,
    imageHotspotTitleMarginTablet,
    imageHotspotTitleMarginMobile,
    imageHotspotTitleMarginLink,

    // Description typography
    imageHotspotDescFontFamily,
    imageHotspotDescFontSize,
    imageHotspotDescFontSizeUnits,
    imageHotspotDescFontWeight,
    imageHotspotDescFontStyle,
    imageHotspotDescColor,
    imageHotspotDescHoverColor,
    imageHotspotDescColorSwitcher,
    imageHotspotDescTextTransform,
    imageHotspotDescTextDecoration,
    imageHotspotDescLetterSpacing,
    imageHotspotDescLetterSpacingUnits,
    imageHotspotDescLineHeight,
    imageHotspotDescLineHeightUnits,
    imageHotspotDescPaddingUnits,
    imageHotspotDescPaddingDesktop,
    imageHotspotDescPaddingTablet,
    imageHotspotDescPaddingMobile,
    imageHotspotDescPaddingLink,
    imageHotspotDescMarginUnits,
    imageHotspotDescMarginDesktop,
    imageHotspotDescMarginTablet,
    imageHotspotDescMarginMobile,
    imageHotspotDescMarginLink,

    // Responsive
    imageHotspotDesktopSwitcher,
    imageHotspotTabletSwitcher,
    imageHotspotMobileSwitcher,

    // Custom CSS
    imageHotspotCustomCSS,
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

    /**Start imageHotspotsGlobalBg Background */
    imageHotspotsGlobalBgBgColorSwitcher,
    imageHotspotsGlobalBgBgType,
    imageHotspotsGlobalBgBgClassicColor,
    imageHotspotsGlobalBgBgGradientColor,
    imageHotspotsGlobalBgBgCustomGradientSwitcher,
    imageHotspotsGlobalBgBgCustomGradientInputValue,
    imageHotspotsGlobalBgBgImageUrl,
    imageHotspotsGlobalBgBgImageAlt,
    imageHotspotsGlobalBgBgImageID,
    imageHotspotsGlobalBgBgImagePosition,
    imageHotspotsGlobalBgBgImageAttachment,
    imageHotspotsGlobalBgBgImageRepeat,
    imageHotspotsGlobalBgBgImageSize,
    imageHotspotsGlobalBgBgHoverType,
    imageHotspotsGlobalBgBgHoverClassicColor,
    imageHotspotsGlobalBgBgHoverGradientColor,
    imageHotspotsGlobalBgBgHoverCustomGradientSwitcher,
    imageHotspotsGlobalBgBgHoverCustomGradientInputValue,
    imageHotspotsGlobalBgBgHoverImageUrl,
    imageHotspotsGlobalBgBgHoverImageAlt,
    imageHotspotsGlobalBgBgHoverImageID,
    imageHotspotsGlobalBgBgHoverImagePosition,
    imageHotspotsGlobalBgBgHoverImageAttachment,
    imageHotspotsGlobalBgBgHoverImageRepeat,
    imageHotspotsGlobalBgBgHoverImageSize,
    /**End imageHotspotsGlobalBg Background */

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

    imageHotspotHoverBoxShadowValues,

    imageHotspotSocialLinksGap,
    imageHotspotSocialLinksGapUnits,

    imageHotspotSocialLinksIconSize,
    imageHotspotSocialLinksIconSizeUnits,

    imageHotspotPopoverWidth,
    imageHotspotPopoverWidthUnits,

    /** Start Hotspot Title Padding */
    imageHotspotTitlePaddingUnits,
    imageHotspotTitlePaddingDesktop,
    imageHotspotTitlePaddingTablet,
    imageHotspotTitlePaddingMobile,
    imageHotspotTitlePaddingLink,
    /** End Hotspot Title Padding */

    /** Start Hotspot Popover Padding */
    imageHotspotsPopoverPaddingUnits,
    imageHotspotsPopoverPaddingDesktop,
    imageHotspotsPopoverPaddingTablet,
    imageHotspotsPopoverPaddingMobile,
    imageHotspotsPopoverPaddingLink,
    /** End Hotspot Popover Padding */

    /** Start Image Hotspots Popover Margin */
    imageHotspotsPopoverMarginUnits,
    imageHotspotsPopoverMarginDesktop,
    imageHotspotsPopoverMarginTablet,
    imageHotspotsPopoverMarginMobile,
    imageHotspotsPopoverMarginLink,
    /** End Image Hotspots Popover Margin */

    /** Start Hotspot Popover Border */
    imageHotspotsPopoverBorder,
    imageHotspotsPopoverBorderColorSwitcher,
    imageHotspotsPopoverBorderColor,
    imageHotspotsPopoverBorderHoverColor,
    /** End Hotspot Popover Border */

    /** Start Hotspot Popover Border Units */
    imageHotspotsPopoverBorderUnits,
    imageHotspotsPopoverBorderDesktop,
    imageHotspotsPopoverBorderTablet,
    imageHotspotsPopoverBorderMobile,
    imageHotspotsPopoverBorderLink,
    /** End Hotspot Popover Border Units */

    /** Start Hotspot Popover Border Radius */
    imageHotspotsPopoverBorderRadiusUnits,
    imageHotspotsPopoverBorderRadiusDesktop,
    imageHotspotsPopoverBorderRadiusTablet,
    imageHotspotsPopoverBorderRadiusMobile,
    imageHotspotsPopoverBorderRadiusLink,
    /** End Hotspot Popover Border Radius */

    /** Start Hotspot Popover Box Shadow */
    imageHotspotsPopoverBoxShadowSwitcher,
    imageHotspotsPopoverBoxShadowValues,
    imageHotspotsPopoverBoxShadowHoverValues,
    /** End Hotspot Popover Box Shadow */

    imgotsHpotsPopoverBgColorSwitcher,
    imgotsHpotsPopoverNormalBackgroundType,
    imgotsHpotsPopoverNormalClassicColor,
    imgotsHpotsPopoverNormalGradientColor,
    imgotsHpotsPopoverNormalCustomGradientSwitcher,
    imgotsHpotsPopoverNormalCustomGradientInputValue,
    imgotsHpotsPopoverHoverBackgroundType,
    imgotsHpotsPopoverHoverClassicColor,
    imgotsHpotsPopoverHoverGradientColor,
    imgotsHpotsPopoverHoverCustomGradientSwitcher,
    imgotsHpotsPopoverHoverCustomGradientInputValue,

    /** Start imageHotspotsGlobal Border */
    imageHotspotsGlobalBorder,
    imageHotspotsGlobalBorderColorSwitcher,
    imageHotspotsGlobalBorderColor,
    imageHotspotsGlobalBorderHoverColor,
    /** End imageHotspotsGlobal Border */

    /** Start imageHotspotsGlobal Border Units */
    imageHotspotsGlobalBorderUnits,
    imageHotspotsGlobalBorderDesktop,
    imageHotspotsGlobalBorderTablet,
    imageHotspotsGlobalBorderMobile,
    imageHotspotsGlobalBorderLink,
    /** End imageHotspotsGlobal Border Units */

    /** Start imageHotspotsGlobal Border Radius */
    imageHotspotsGlobalBorderRadiusUnits,
    imageHotspotsGlobalBorderRadiusDesktop,
    imageHotspotsGlobalBorderRadiusTablet,
    imageHotspotsGlobalBorderRadiusMobile,
    imageHotspotsGlobalBorderRadiusLink,
    /** End imageHotspotsGlobal Border Radius */

    /** Start imageHotspotsGlobal Box Shadow */
    imageHotspotsGlobalBoxShadowSwitcher,
    imageHotspotsGlobalBoxShadowValues,
    imageHotspotsGlobalBoxShadowCssValue,
    imageHotspotsGlobalBoxShadowHoverValues,
    imageHotspotsGlobalBoxShadowHoverCssValue,
    /** End imageHotspotsGlobal Box Shadow */

    /** Start Marker Border Radius */
    markerBorderRadiusUnits,
    markerBorderRadiusDesktop,
    markerBorderRadiusTablet,
    markerBorderRadiusMobile,
    markerBorderRadiusLink,
    submenuBorderRadiusUnits,
    submenuBorderRadiusDesktop,
    submenuBorderRadiusTablet,
    submenuBorderRadiusMobile,
    submenuBorderRadiusLink,
    /** End Marker Border Radius */

    /** Start Marker Border */
    markerBorder,
    markerBorderColorSwitcher,
    markerBorderColor,
    markerBorderHoverColor,

    markerBorderUnits,
    markerBorderDesktop,
    markerBorderTablet,
    markerBorderMobile,
    markerBorderLink,
    /** End Marker Border */



  } = attributes;

  const deviceType = useDeviceType();

  /** Start Image Hotspot Title Padding Units */
  const imageHotspotTitlePaddingUnitsChange = (event, position) => {
    const value = event.target.value;
    if (imageHotspotTitlePaddingLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            imageHotspotTitlePaddingDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotTitlePaddingTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotTitlePaddingMobile: {
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
            imageHotspotTitlePaddingDesktop: {
              ...imageHotspotTitlePaddingDesktop,
              [position]: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotTitlePaddingTablet: {
              ...imageHotspotTitlePaddingTablet,
              [position]: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotTitlePaddingMobile: {
              ...imageHotspotTitlePaddingMobile,
              [position]: value
            }
          });
          break;
      }
    }
  };

  const imageHotspotTitlePaddingLinkBtn = () => {
    setAttributes({
      imageHotspotTitlePaddingLink: !imageHotspotTitlePaddingLink
    })
  };

  const imageHotspotTitlePaddingUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotTitlePaddingUnits: {
        ...imageHotspotTitlePaddingUnits,
        [deviceType]: unit
      }
    });
  };
  /** End image Hotspot Title Padding Units */

  /** Start image Hotspot Title Margin Units */
  const imageHotspotTitleMarginUnitsChange = (event, position) => {
    const value = event.target.value;
    if (imageHotspotTitleMarginLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            imageHotspotTitleMarginDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotTitleMarginTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotTitleMarginMobile: {
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
            imageHotspotTitleMarginDesktop: {
              ...imageHotspotTitleMarginDesktop,
              [position]: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotTitleMarginTablet: {
              ...imageHotspotTitleMarginTablet,
              [position]: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotTitleMarginMobile: {
              ...imageHotspotTitleMarginMobile,
              [position]: value
            }
          });
          break;
      }
    }
  };

  const imageHotspotTitleMarginLinkBtn = () => {
    setAttributes({
      imageHotspotTitleMarginLink: !imageHotspotTitleMarginLink
    })
  };

  const imageHotspotTitleMarginUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotTitleMarginUnits: {
        ...imageHotspotTitleMarginUnits,
        [deviceType]: unit
      }
    })
  };
  /** End image Hotspot Title Margin Units */

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
  /** End Global padding */

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
  /** End Global margin */

  /** Start Global border */
  const imageHotspotsGlobalBorderUnitsChange = (event, position) => {
    const value = event.target.value;
    if (imageHotspotsGlobalBorderLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            imageHotspotsGlobalBorderDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotsGlobalBorderTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotsGlobalBorderMobile: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        default:
          break;
      }
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({ imageHotspotsGlobalBorderDesktop: { ...imageHotspotsGlobalBorderDesktop, [position]: value } });
          break;
        case 'Tablet':
          setAttributes({ imageHotspotsGlobalBorderTablet: { ...imageHotspotsGlobalBorderTablet, [position]: value } });
          break;
        case 'Mobile':
          setAttributes({ imageHotspotsGlobalBorderMobile: { ...imageHotspotsGlobalBorderMobile, [position]: value } });
          break;
        default:
          break;
      }
    }
  };

  const imageHotspotsGlobalBorderLinkBtn = () => {
    setAttributes({
      imageHotspotsGlobalBorderLink: !imageHotspotsGlobalBorderLink
    });
  };

  const imageHotspotsGlobalBorderUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotsGlobalBorderUnits: {
        ...imageHotspotsGlobalBorderUnits,
        [deviceType]: unit
      }
    });
  };
  /** End imageHotspotsGlobal Border */

  /** Start Marker boder Radius */
  const handlemarkerBorderRadiusUnitChange = (event, position) => {
    const value = event.target.value;
    if (markerBorderRadiusLink) {
      const newValue = { top: value, right: value, bottom: value, left: value };
      switch (deviceType) {
        case "Desktop":
          setAttributes({ markerBorderRadiusDesktop: newValue });
          break;
        case "Tablet":
          setAttributes({ markerBorderRadiusTablet: newValue });
          break;
        case "Mobile":
          setAttributes({ markerBorderRadiusMobile: newValue });
          break;
      }
    } else {
      const current =
        deviceType === "Desktop"
          ? markerBorderRadiusDesktop
          : deviceType === "Tablet"
            ? markerBorderRadiusTablet
            : markerBorderRadiusMobile || {};
      setAttributes({
        [`markerBorderRadius${deviceType}`]: {
          ...current,
          [position]: value,
        },
      });
    }
  };
  const handlemarkerBorderRadiusUnitsHandler = (unit) => {
    setAttributes({
      markerBorderRadiusUnits: {
        ...markerBorderRadiusUnits,
        [deviceType]: unit,
      },
    });
  };
  const handlemarkerBorderRadiusCombineBtn = () => {
    setAttributes({ markerBorderRadiusLink: !markerBorderRadiusLink });
  };
  /** End Marker border Radius */

  /** Start imageHotspotsGlobal Border Radius */
  const imageHotspotsGlobalBorderRadiusUnitsChange = (event, position) => {
    const value = event.target.value;
    if (imageHotspotsGlobalBorderRadiusLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            imageHotspotsGlobalBorderRadiusDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotsGlobalBorderRadiusTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotsGlobalBorderRadiusMobile: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        default:
          break;
      }
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({ imageHotspotsGlobalBorderRadiusDesktop: { ...imageHotspotsGlobalBorderRadiusDesktop, [position]: value } });
          break;
        case 'Tablet':
          setAttributes({ imageHotspotsGlobalBorderRadiusTablet: { ...imageHotspotsGlobalBorderRadiusTablet, [position]: value } });
          break;
        case 'Mobile':
          setAttributes({ imageHotspotsGlobalBorderRadiusMobile: { ...imageHotspotsGlobalBorderRadiusMobile, [position]: value } });
          break;
        default:
          break;
      }
    }
  };

  const imageHotspotsGlobalBorderRadiusLinkBtn = () => {
    setAttributes({
      imageHotspotsGlobalBorderRadiusLink: !imageHotspotsGlobalBorderRadiusLink
    });
  };

  const imageHotspotsGlobalBorderRadiusUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotsGlobalBorderRadiusUnits: {
        ...imageHotspotsGlobalBorderRadiusUnits,
        [deviceType]: unit
      }
    });
  };
  /** End Global border */
  /** End Border */

  useEffect(() => {
    let needsUpdate = false;
    const sanitizedHotspots = (imageHotspotHotspots || []).map((hotspot, idx) => {
      let hotspotUpdated = false;
      const sanitizedSocialLinks = (hotspot.socialLinks || []).map((link, sIdx) => {
        if (!link.id) {
          hotspotUpdated = true;
          needsUpdate = true;
          return {
            ...link,
            id: `social-init-${idx}-${sIdx}-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`
          };
        }
        return link;
      });

      if (hotspotUpdated) {
        return {
          ...hotspot,
          socialLinks: sanitizedSocialLinks
        };
      }
      return hotspot;
    });

    if (needsUpdate) {
      setAttributes({ imageHotspotHotspots: sanitizedHotspots });
    }
  }, [imageHotspotHotspots]);

  let latestHotspots = imageHotspotHotspots || [];

  const addHotspot = () => {
    const hotspotNumber = (imageHotspotHotspots?.length || 0) + 1;
    const offset = ((imageHotspotHotspots?.length || 0) * 8) % 40;
    const newHotspot = {
      id: Date.now().toString(),
      x: Math.min(30 + offset, 95),
      y: Math.min(30 + offset, 95),
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
      // markerSize: imageHotspotMarkerSize,
      // markerSizeUnits: imageHotspotMarkerSizeUnits,
      markerSize: imageHotspotMarkerSize || 30,
      markerSizeUnits: imageHotspotMarkerSizeUnits || 'px',
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



/** Start Image Hotspot Category Padding */
  const imageHotspotCategoryPaddingUnitsChange = (event, position) => {
    const value = event.target.value;
    if (imageHotspotCategoryPaddingLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            imageHotspotCategoryPaddingDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotCategoryPaddingTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotCategoryPaddingMobile: {
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
            imageHotspotCategoryPaddingDesktop: {
              ...imageHotspotCategoryPaddingDesktop,
              [position]: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotCategoryPaddingTablet: {
              ...imageHotspotCategoryPaddingTablet,
              [position]: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotCategoryPaddingMobile: {
              ...imageHotspotCategoryPaddingMobile,
              [position]: value
            }
          });
          break;
      }
    }
  };

  const imageHotspotCategoryPaddingLinkBtn = () => {
    setAttributes({
      imageHotspotCategoryPaddingLink: !imageHotspotCategoryPaddingLink
    })
  };

  const imageHotspotCategoryPaddingUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotCategoryPaddingUnits:
      {
        ...imageHotspotCategoryPaddingUnits,
        [deviceType]: unit
      }
    })
  };/** End Image Hotspot Category Padding */

/** Start Image Hotspot Category Margin */
  const imageHotspotCategoryMarginUnitsChange = (event, position) => {
    const value = event.target.value;
    if (imageHotspotCategoryMarginLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            imageHotspotCategoryMarginDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotCategoryMarginTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotCategoryMarginMobile: {
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
            imageHotspotCategoryMarginDesktop: {
              ...imageHotspotCategoryMarginDesktop,
              [position]: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotCategoryMarginTablet: {
              ...imageHotspotCategoryMarginTablet,
              [position]: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotCategoryMarginMobile: {
              ...imageHotspotCategoryMarginMobile,
              [position]: value
            }
          });
          break;
      }
    }
  };

  const imageHotspotCategoryMarginLinkBtn = () => {
    setAttributes({
      imageHotspotCategoryMarginLink: !imageHotspotCategoryMarginLink
    })
  };

  const imageHotspotCategoryMarginUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotCategoryMarginUnits: {
        ...imageHotspotCategoryMarginUnits,
        [deviceType]: unit
      }
    })
  };
/** End Image Hotspot Category */

/** Start Image Hotspot Description Padding */
  const imageHotspotDescPaddingUnitsChange = (event, position) => {
    const value = event.target.value;
    if (imageHotspotDescPaddingLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            imageHotspotDescPaddingDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotDescPaddingTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotDescPaddingMobile: {
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
            imageHotspotDescPaddingDesktop: {
              ...imageHotspotDescPaddingDesktop,
              [position]: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotDescPaddingTablet: {
              ...imageHotspotDescPaddingTablet,
              [position]: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotDescPaddingMobile: {
              ...imageHotspotDescPaddingMobile,
              [position]: value
            }
          });
          break;
      }
    }
  };

  const imageHotspotDescPaddingLinkBtn = () => {
    setAttributes({
      imageHotspotDescPaddingLink: !imageHotspotDescPaddingLink
    })
  };

  const imageHotspotDescPaddingHandler = (unit) => {
    setAttributes({
      imageHotspotDescPaddingUnits: {
        ...imageHotspotDescPaddingUnits,
        [deviceType]: unit
      }
    })
  };
  /** End Image Hotspot Description Padding */

  /** Start Image Hotspot Description Margin */
  const imageHotspotDescMarginUnitsChange = (event, position) => {
    const value = event.target.value;
    if (imageHotspotDescMarginLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            imageHotspotDescMarginDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotDescMarginTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotDescMarginMobile: {
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
            imageHotspotDescMarginDesktop: {
              ...imageHotspotDescMarginDesktop,
              [position]: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotDescMarginTablet: {
              ...imageHotspotDescMarginTablet,
              [position]: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotDescMarginMobile: {
              ...imageHotspotDescMarginMobile,
              [position]: value
            }
          });
          break;
      }
    }
  };

  const imageHotspotDescMarginLinkBtn = () => {
    setAttributes({
      imageHotspotDescMarginLink: !imageHotspotDescMarginLink
    })
  };

  const imageHotspotDescMarginUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotDescMarginUnits: {
        ...imageHotspotDescMarginUnits,
        [deviceType]: unit
      }
    })
  };
  /** End Image Hotspot Description Margin */

  /** Start Image Hotspot Price Padding */
  const imageHotspotPricePaddingUnitsChange = (event, position) => {
    const value = event.target.value;
    if (imageHotspotPricePaddingLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            imageHotspotPricePaddingDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotPricePaddingTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotPricePaddingMobile: {
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
            imageHotspotPricePaddingDesktop: {
              ...imageHotspotPricePaddingDesktop,
              [position]: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotPricePaddingTablet: {
              ...imageHotspotPricePaddingTablet,
              [position]: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotPricePaddingMobile: {
              ...imageHotspotPricePaddingMobile,
              [position]: value
            }
          });
          break;
      }
    }
  };

  const imageHotspotPricePaddingLinkBtn = () => {
    setAttributes({
      imageHotspotPricePaddingLink: !imageHotspotPricePaddingLink
    })
  };

  const imageHotspotPricePaddingUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotPricePaddingUnits: {
        ...imageHotspotPricePaddingUnits,
        [deviceType]: unit
      }
    })
  };
  /** End Image Hotspot Price Padding */

  /** Start Image Hotspot Price Margin */
  const imageHotspotPriceMarginUnitsChange = (event, position) => {
    const value = event.target.value;
    if (imageHotspotPriceMarginLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            imageHotspotPriceMarginDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotPriceMarginTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotPriceMarginMobile: {
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
            imageHotspotPriceMarginDesktop: {
              ...imageHotspotPriceMarginDesktop,
              [position]: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotPriceMarginTablet: {
              ...imageHotspotPriceMarginTablet,
              [position]: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotPriceMarginMobile: {
              ...imageHotspotPriceMarginMobile,
              [position]: value
            }
          });
          break;
      }
    }
  };

  const imageHotspotPriceMarginLinkBtn = () => {
    setAttributes({
      imageHotspotPriceMarginLink: !imageHotspotPriceMarginLink
    });
  };

  const imageHotspotPriceMarginUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotPriceMarginUnits: {
        ...imageHotspotPriceMarginUnits,
        [deviceType]: unit
      }
    })
  };
  /** End Image Hotspot Price Margin */

  /** Start Image Hotspot Popover Padding */
  const imageHotspotsPopoverPaddingUnitsChange = (event, position) => {
    const value = event.target.value;
    if (imageHotspotsPopoverPaddingLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({ imageHotspotsPopoverPaddingDesktop: { top: value, right: value, bottom: value, left: value } });
          break;
        case 'Tablet':
          setAttributes({ imageHotspotsPopoverPaddingTablet: { top: value, right: value, bottom: value, left: value } });
          break;
        case 'Mobile':
          setAttributes({ imageHotspotsPopoverPaddingMobile: { top: value, right: value, bottom: value, left: value } });
          break;
        default:
          break;
      }
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({ imageHotspotsPopoverPaddingDesktop: { ...imageHotspotsPopoverPaddingDesktop, [position]: value } });
          break;
        case 'Tablet':
          setAttributes({ imageHotspotsPopoverPaddingTablet: { ...imageHotspotsPopoverPaddingTablet, [position]: value } });
          break;
        case 'Mobile':
          setAttributes({ imageHotspotsPopoverPaddingMobile: { ...imageHotspotsPopoverPaddingMobile, [position]: value } });
          break;
        default:
          break;
      }
    }
  };

  const imageHotspotsPopoverPaddingLinkBtn = () => {
    setAttributes({
      imageHotspotsPopoverPaddingLink: !imageHotspotsPopoverPaddingLink
    });
  };

  const imageHotspotsPopoverPaddingUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotsPopoverPaddingUnits: {
        ...imageHotspotsPopoverPaddingUnits,
        [deviceType]: unit
      }
    });
  };
  /** End Image Hotspot Popover Padding */

  /** Start Image Hotspot Popover Margin */
  const imageHotspotsPopoverMarginUnitsChange = (event, position) => {
    const value = event.target.value;
    if (imageHotspotsPopoverMarginLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            imageHotspotsPopoverMarginDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            imageHotspotsPopoverMarginTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            imageHotspotsPopoverMarginMobile: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        default:
          break;
      }
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({ imageHotspotsPopoverMarginDesktop: { ...imageHotspotsPopoverMarginDesktop, [position]: value } });
          break;
        case 'Tablet':
          setAttributes({ imageHotspotsPopoverMarginTablet: { ...imageHotspotsPopoverMarginTablet, [position]: value } });
          break;
        case 'Mobile':
          setAttributes({ imageHotspotsPopoverMarginMobile: { ...imageHotspotsPopoverMarginMobile, [position]: value } });
          break;
        default:
          break;
      }
    }
  };

  const imageHotspotsPopoverMarginLinkBtn = () => {
    setAttributes({
      imageHotspotsPopoverMarginLink: !imageHotspotsPopoverMarginLink
    });
  };

  const imageHotspotsPopoverMarginUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotsPopoverMarginUnits: {
        ...imageHotspotsPopoverMarginUnits,
        [deviceType]: unit
      }
    });
  };
  /** End Image Hotspots Popover Margin */

  /** Start Border Controls */
  const imageHotspotsPopoverBorderUnitsChange = (event, position) => {
    const value = event.target.value;
    if (imageHotspotsPopoverBorderLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({ imageHotspotsPopoverBorderDesktop: { top: value, right: value, bottom: value, left: value } });
          break;
        case 'Tablet':
          setAttributes({ imageHotspotsPopoverBorderTablet: { top: value, right: value, bottom: value, left: value } });
          break;
        case 'Mobile':
          setAttributes({ imageHotspotsPopoverBorderMobile: { top: value, right: value, bottom: value, left: value } });
          break;
      }
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({ imageHotspotsPopoverBorderDesktop: { ...imageHotspotsPopoverBorderDesktop, [position]: value } });
          break;
        case 'Tablet':
          setAttributes({ imageHotspotsPopoverBorderTablet: { ...imageHotspotsPopoverBorderTablet, [position]: value } });
          break;
        case 'Mobile':
          setAttributes({ imageHotspotsPopoverBorderMobile: { ...imageHotspotsPopoverBorderMobile, [position]: value } });
          break;
      }
    }
  };

  const imageHotspotsPopoverBorderLinkBtn = () => {
    setAttributes({ imageHotspotsPopoverBorderLink: !imageHotspotsPopoverBorderLink });
  };

  const imageHotspotsPopoverBorderUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotsPopoverBorderUnits: {
        ...imageHotspotsPopoverBorderUnits,
        [deviceType]: unit
      }
    });
  };
  /** End Border Controls */

  /** Start Border Radius Controls */
  const imageHotspotsPopoverBorderRadiusUnitsChange = (event, position) => {
    const value = event.target.value;
    if (imageHotspotsPopoverBorderRadiusLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({ imageHotspotsPopoverBorderRadiusDesktop: { top: value, right: value, bottom: value, left: value } });
          break;
        case 'Tablet':
          setAttributes({ imageHotspotsPopoverBorderRadiusTablet: { top: value, right: value, bottom: value, left: value } });
          break;
        case 'Mobile':
          setAttributes({ imageHotspotsPopoverBorderRadiusMobile: { top: value, right: value, bottom: value, left: value } });
          break;
      }
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({ imageHotspotsPopoverBorderRadiusDesktop: { ...imageHotspotsPopoverBorderRadiusDesktop, [position]: value } });
          break;
        case 'Tablet':
          setAttributes({ imageHotspotsPopoverBorderRadiusTablet: { ...imageHotspotsPopoverBorderRadiusTablet, [position]: value } });
          break;
        case 'Mobile':
          setAttributes({ imageHotspotsPopoverBorderRadiusMobile: { ...imageHotspotsPopoverBorderRadiusMobile, [position]: value } });
          break;
      }
    }
  };

  const imageHotspotsPopoverBorderRadiusLinkBtn = () => {
    setAttributes({ imageHotspotsPopoverBorderRadiusLink: !imageHotspotsPopoverBorderRadiusLink });
  };

  const imageHotspotsPopoverBorderRadiusUnitsHandler = (unit) => {
    setAttributes({
      imageHotspotsPopoverBorderRadiusUnits: {
        ...imageHotspotsPopoverBorderRadiusUnits,
        [deviceType]: unit
      }
    });
  };
  /** End Border Radius Controls */

  const generalControls = (
    <>
      <PanelBody title={__("General", "frontis-blocks")}
        initialOpen={true}
      >
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
        />
        <FB_Range
          label={__("Image Height", "frontis-blocks")}
          rangeValue={imageHotspotImageHeight}
          onChangeHandler={(value) => setAttributes({ imageHotspotImageHeight: value })}
          rangeUnitHandler={(unit) => setAttributes({ imageHotspotImageHeightUnits: unit })}
          deviceType={deviceType}
          units={imageHotspotImageHeightUnits}
          min={100}
          max={2000}
          rangeStep={1}
          resetFallbackValue={500}
        />
      </PanelBody>

      <PanelBody title={__("Hotspots", "frontis-blocks")} initialOpen={false}>
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
                      handleChangeItem={updateHotspot}
                      deviceType={deviceType}
                      imageHotspotMarkerColor={imageHotspotMarkerColor}
                      imageHotspotMarkerColorSwitcher={imageHotspotMarkerColorSwitcher}
                      imageHotspotIconColorSwitcher={imageHotspotIconColorSwitcher}
                      imageHotspotSocialLinkIconColorSwitcher={imageHotspotSocialLinkIconColorSwitcher}
                      setAttributes={setAttributes}
                    />
                  ))}
                </ul>
              </SortableContext>
            </DndContext>
          </div>
        )}
        <Button
          variant="primary"
          onClick={addHotspot}
          className="mt-3"
        >
          {__('Add Hotspot', 'frontis-blocks')}
        </Button>
      </PanelBody>
    </>
  );

  const styleControls = (
    <>
      <PanelBody title={__("Popover", "frontis-blocks")}
        initialOpen={true}
      >

        <FB_Spacing
          label={__("Padding", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={imageHotspotsPopoverPaddingUnitsHandler}
          spacingUnits={imageHotspotsPopoverPaddingUnits}
          spacingDesktop={imageHotspotsPopoverPaddingDesktop}
          spacingTablet={imageHotspotsPopoverPaddingTablet}
          spacingMobile={imageHotspotsPopoverPaddingMobile}
          handleSpacingUnitHandler={imageHotspotsPopoverPaddingUnitsChange}
          spacingCombineBtn={imageHotspotsPopoverPaddingLink}
          spacingCombineBtnHandler={imageHotspotsPopoverPaddingLinkBtn}
          setAttributes={setAttributes}
        />

        <FB_Spacing
          label={__("Margin", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={imageHotspotsPopoverMarginUnitsHandler}
          spacingUnits={imageHotspotsPopoverMarginUnits}
          spacingDesktop={imageHotspotsPopoverMarginDesktop}
          spacingTablet={imageHotspotsPopoverMarginTablet}
          spacingMobile={imageHotspotsPopoverMarginMobile}
          handleSpacingUnitHandler={imageHotspotsPopoverMarginUnitsChange}
          spacingCombineBtn={imageHotspotsPopoverMarginLink}
          spacingCombineBtnHandler={imageHotspotsPopoverMarginLinkBtn}
          setAttributes={setAttributes}
        />

        <FB_Range
          min={0}
          max={imageHotspotPopoverWidthUnits[deviceType] === '%' ? 100 : 1000}
          label={__("Width", "frontis-blocks")}
          rangeValue={imageHotspotPopoverWidth}
          onChangeHandler={(value) => setAttributes({ imageHotspotPopoverWidth: value })}
          rangeUnitHandler={(value) => setAttributes({ imageHotspotPopoverWidthUnits: value })}
          deviceType={deviceType}
          units={imageHotspotPopoverWidthUnits}
          setAttributes={setAttributes}
          rangeStep={1}
          resetFallbackValue={""}
        />

        <FB_BackgroundColorControl
          label={__("Background Color", "frontis-blocks")}
          bgColorSwitcher={imgotsHpotsPopoverBgColorSwitcher}
          setBgColorSwitcher={(value) => setAttributes({ imgotsHpotsPopoverBgColorSwitcher: value })}

          normalBackgroundType={imgotsHpotsPopoverNormalBackgroundType}
          setNormalBackgroundType={(value) => setAttributes({ imgotsHpotsPopoverNormalBackgroundType: value })}
          normalClassicColor={imgotsHpotsPopoverNormalClassicColor}
          setNormalClassicColor={(value) => setAttributes({ imgotsHpotsPopoverNormalClassicColor: value === undefined ? '' : value })}
          normalGradientColor={imgotsHpotsPopoverNormalGradientColor}
          setNormalGradientColor={(value) => setAttributes({ imgotsHpotsPopoverNormalGradientColor: value === undefined ? null : value })}
          normalCustomGradientSwitcher={imgotsHpotsPopoverNormalCustomGradientSwitcher}
          setNormalCustomGradientSwitcher={(value) => setAttributes({ imgotsHpotsPopoverNormalCustomGradientSwitcher: value })}
          normalCustomGradientInputValue={imgotsHpotsPopoverNormalCustomGradientInputValue}
          setNormalCustomGradientInputValue={(value) => setAttributes({ imgotsHpotsPopoverNormalCustomGradientInputValue: value })}

          hoverBackgroundType={imgotsHpotsPopoverHoverBackgroundType}
          setHoverBackgroundType={(value) => setAttributes({ imgotsHpotsPopoverHoverBackgroundType: value })}
          hoverClassicColor={imgotsHpotsPopoverHoverClassicColor}
          setHoverClassicColor={(value) => setAttributes({ imgotsHpotsPopoverHoverClassicColor: value === undefined ? '' : value })}
          hoverGradientColor={imgotsHpotsPopoverHoverGradientColor}
          setHoverGradientColor={(value) => setAttributes({ imgotsHpotsPopoverHoverGradientColor: value === undefined ? null : value })}
          hoverCustomGradientSwitcher={imgotsHpotsPopoverHoverCustomGradientSwitcher}
          setHoverCustomGradientSwitcher={(value) => setAttributes({ imgotsHpotsPopoverHoverCustomGradientSwitcher: value })}
          hoverCustomGradientInputValue={imgotsHpotsPopoverHoverCustomGradientInputValue}
          setHoverCustomGradientInputValue={(value) => setAttributes({ imgotsHpotsPopoverHoverCustomGradientInputValue: value })}

          isBackgroundImage={false}
        />

        <SelectControl
          label={__("Border Style", "frontis-blocks")}
          value={imageHotspotsPopoverBorder}
          options={BORDER_STYLES}
          onChange={(value) => setAttributes({ imageHotspotsPopoverBorder: value })}
        />

        <FB_SwitcherControl
          label={__("Border Color", "frontis-blocks")}
          globalSwitcher={imageHotspotsPopoverBorderColorSwitcher}
          setGlobalSwitcher={(value) => setAttributes({ imageHotspotsPopoverBorderColorSwitcher: value })}
        />

        {imageHotspotsPopoverBorderColorSwitcher === 'normal' && (
          <FB_ColorControl
            label={__("Normal Color", "frontis-blocks")}
            globalColor={imageHotspotsPopoverBorderColor}
            setGlobalColor={(value) => setAttributes({ imageHotspotsPopoverBorderColor: value === undefined ? '' : value })}
          />
        )}

        {imageHotspotsPopoverBorderColorSwitcher === 'hover' && (
          <FB_ColorControl
            label={__("Hover Color", "frontis-blocks")}
            globalColor={imageHotspotsPopoverBorderHoverColor}
            setGlobalColor={(value) => setAttributes({ imageHotspotsPopoverBorderHoverColor: value === undefined ? '' : value })}
          />
        )}

        <FB_Spacing
          label={__("Border", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={imageHotspotsPopoverBorderUnitsHandler}
          spacingUnits={imageHotspotsPopoverBorderUnits}
          spacingDesktop={imageHotspotsPopoverBorderDesktop}
          spacingTablet={imageHotspotsPopoverBorderTablet}
          spacingMobile={imageHotspotsPopoverBorderMobile}
          handleSpacingUnitHandler={imageHotspotsPopoverBorderUnitsChange}
          spacingCombineBtn={imageHotspotsPopoverBorderLink}
          spacingCombineBtnHandler={imageHotspotsPopoverBorderLinkBtn}
          setAttributes={setAttributes}
        />

        <FB_Spacing
          label={__("Border Radius", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={imageHotspotsPopoverBorderRadiusUnitsHandler}
          spacingUnits={imageHotspotsPopoverBorderRadiusUnits}
          spacingDesktop={imageHotspotsPopoverBorderRadiusDesktop}
          spacingTablet={imageHotspotsPopoverBorderRadiusTablet}
          spacingMobile={imageHotspotsPopoverBorderRadiusMobile}
          handleSpacingUnitHandler={imageHotspotsPopoverBorderRadiusUnitsChange}
          spacingCombineBtn={imageHotspotsPopoverBorderRadiusLink}
          spacingCombineBtnHandler={imageHotspotsPopoverBorderRadiusLinkBtn}
          setAttributes={setAttributes}
        />

        <FB_SwitcherControl
          label={__("Box Shadow", "frontis-blocks")}
          globalSwitcher={imageHotspotsPopoverBoxShadowSwitcher}
          setGlobalSwitcher={(value) => setAttributes({ imageHotspotsPopoverBoxShadowSwitcher: value })}
        />

        {imageHotspotsPopoverBoxShadowSwitcher === 'normal' && (
          <FB_BoxShadowControl
            label={__("Normal Shadow", "frontis-blocks")}
            onBoxShadowChange={(value) => setAttributes({ imageHotspotsPopoverBoxShadowValues: value })}
            initialShadowValue={imageHotspotsPopoverBoxShadowValues}
            onBoxShadowStyleChange={(value) => setAttributes({ imageHotspotsPopoverBoxShadowCssValue: value })}
          />
        )}

        {imageHotspotsPopoverBoxShadowSwitcher === 'hover' && (
          <FB_BoxShadowControl
            label={__("Hover Shadow", "frontis-blocks")}
            onBoxShadowChange={(value) => setAttributes({ imageHotspotsPopoverBoxShadowHoverValues: value })}
            initialShadowValue={imageHotspotsPopoverBoxShadowHoverValues}
            onBoxShadowStyleChange={(value) => setAttributes({ imageHotspotsPopoverBoxShadowHoverCssValue: value })}
          />
        )}


      </PanelBody>

      <PanelBody title={__("Marker Style", "frontis-blocks")}
        initialOpen={false}
      >

        <FB_SwitcherControl
          label={__("Marker Size", "frontis-blocks")}
          globalSwitcher={imageHotspotMarkerSizeSwitcher}
          setGlobalSwitcher={(value) => setAttributes({ imageHotspotMarkerSizeSwitcher: value })}
        />

        {imageHotspotMarkerSizeSwitcher === 'normal' && (
          <FB_Range
            min={0}
            max={imageHotspotMarkerSizeUnits[deviceType] === '%' ? 100 : 1000}
            label={__("Size", "frontis-blocks")}
            rangeValue={imageHotspotMarkerSize}
            onChangeHandler={(value) => setAttributes({ imageHotspotMarkerSize: value })}
            rangeUnitHandler={(value) => setAttributes({ imageHotspotMarkerSizeUnits: value })}
            deviceType={deviceType}
            units={imageHotspotMarkerSizeUnits}
            setAttributes={setAttributes}
            rangeStep={1}
            resetFallbackValue={""}
          />
        )}

        {imageHotspotMarkerSizeSwitcher === 'hover' && (
          <FB_Range
            min={0}
            max={imageHotspotMarkerHoverSizeUnits[deviceType] === '%' ? 100 : 1000}
            label={__("Size", "frontis-blocks")}
            rangeValue={imageHotspotMarkerHoverSize}
            onChangeHandler={(value) => setAttributes({ imageHotspotMarkerHoverSize: value })}
            rangeUnitHandler={(value) => setAttributes({ imageHotspotMarkerHoverSizeUnits: value })}
            deviceType={deviceType}
            units={imageHotspotMarkerHoverSizeUnits}
            setAttributes={setAttributes}
            rangeStep={1}
            resetFallbackValue={""}
          />
        )}

        <SelectControl
          label={__("Border Style", "frontis-blocks")}
          value={markerBorder}
          options={BORDER_STYLES}
          onChange={(value) => setAttributes({ markerBorder: value })}
        />

        <FB_SwitcherControl
          label={__("Border Color", "frontis-blocks")}
          globalSwitcher={markerBorderColorSwitcher}
          setGlobalSwitcher={(value) => setAttributes({ markerBorderColorSwitcher: value })}
        />

        {markerBorderColorSwitcher === 'normal' && (
          <FB_ColorControl
            label={__("Normal Color", "frontis-blocks")}
            globalColor={markerBorderColor}
            setGlobalColor={(value) => setAttributes({ markerBorderColor: value === undefined ? '' : value })}
          />
        )}

        {markerBorderColorSwitcher === 'hover' && (
          <FB_ColorControl
            label={__("Hover Color", "frontis-blocks")}
            globalColor={markerBorderHoverColor}
            setGlobalColor={(value) => setAttributes({ markerBorderHoverColor: value === undefined ? '' : value })}
          />
        )}

        <FB_Spacing
          label={__("Radius Border", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={handlemarkerBorderRadiusUnitsHandler}
          spacingUnits={markerBorderRadiusUnits}
          spacingDesktop={markerBorderRadiusDesktop}
          spacingTablet={markerBorderRadiusTablet}
          spacingMobile={markerBorderRadiusMobile}
          handleSpacingUnitHandler={handlemarkerBorderRadiusUnitChange}
          spacingCombineBtn={markerBorderRadiusLink}
          spacingCombineBtnHandler={handlemarkerBorderRadiusCombineBtn}
          setAttributes={setAttributes}
        />

      </PanelBody>

      <PanelBody title={__("Title", "frontis-blocks")} initialOpen={false}>

        <FB_Spacing
          label={__("Padding", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={imageHotspotTitlePaddingUnitsHandler}
          spacingUnits={imageHotspotTitlePaddingUnits}
          spacingDesktop={imageHotspotTitlePaddingDesktop}
          spacingTablet={imageHotspotTitlePaddingTablet}
          spacingMobile={imageHotspotTitlePaddingMobile}
          handleSpacingUnitHandler={imageHotspotTitlePaddingUnitsChange}
          spacingCombineBtn={imageHotspotTitlePaddingLink}
          spacingCombineBtnHandler={imageHotspotTitlePaddingLinkBtn}
          setAttributes={setAttributes}
        />

        <FB_Spacing
          label={__("Margin", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={imageHotspotTitleMarginUnitsHandler}
          spacingUnits={imageHotspotTitleMarginUnits}
          spacingDesktop={imageHotspotTitleMarginDesktop}
          spacingTablet={imageHotspotTitleMarginTablet}
          spacingMobile={imageHotspotTitleMarginMobile}
          handleSpacingUnitHandler={imageHotspotTitleMarginUnitsChange}
          spacingCombineBtn={imageHotspotTitleMarginLink}
          spacingCombineBtnHandler={imageHotspotTitleMarginLinkBtn}
          setAttributes={setAttributes}
        />

        <FB_TypographyControl
          label={__("Typography", "frontis-blocks")}
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

        <FB_SwitcherControl
          label={__("Color", "frontis-blocks")}
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

      </PanelBody>

      <PanelBody title={__("Category", "frontis-blocks")}
        initialOpen={false}
      >

        <FB_Spacing
          label={__("Padding", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={imageHotspotCategoryPaddingUnitsHandler}
          spacingUnits={imageHotspotCategoryPaddingUnits}
          spacingDesktop={imageHotspotCategoryPaddingDesktop}
          spacingTablet={imageHotspotCategoryPaddingTablet}
          spacingMobile={imageHotspotCategoryPaddingMobile}
          handleSpacingUnitHandler={imageHotspotCategoryPaddingUnitsChange}
          spacingCombineBtn={imageHotspotCategoryPaddingLink}
          spacingCombineBtnHandler={imageHotspotCategoryPaddingLinkBtn}
          setAttributes={setAttributes}
        />

        <FB_Spacing
          label={__("Margin", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={imageHotspotCategoryMarginUnitsHandler}
          spacingUnits={imageHotspotCategoryMarginUnits}
          spacingDesktop={imageHotspotCategoryMarginDesktop}
          spacingTablet={imageHotspotCategoryMarginTablet}
          spacingMobile={imageHotspotCategoryMarginMobile}
          handleSpacingUnitHandler={imageHotspotCategoryMarginUnitsChange}
          spacingCombineBtn={imageHotspotCategoryMarginLink}
          spacingCombineBtnHandler={imageHotspotCategoryMarginLinkBtn}
          setAttributes={setAttributes}
        />

        <FB_TypographyControl
          label={__("Typography", "frontis-blocks")}
          deviceType={deviceType}
          setAttributes={setAttributes}
          fontFamily={imageHotspotCategoryFontFamily}
          onChangeFontFamily={(value) => setAttributes({ imageHotspotCategoryFontFamily: value })}
          fontSize={imageHotspotCategoryFontSize}
          onChangeFontSize={(value) => setAttributes({ imageHotspotCategoryFontSize: value })}
          fontSizeUnits={imageHotspotCategoryFontSizeUnits}
          onChangeFontSizeUnit={(value) => setAttributes({ imageHotspotCategoryFontSizeUnits: value })}
          fontWeight={imageHotspotCategoryFontWeight}
          onChangeFontWeight={(value) => setAttributes({ imageHotspotCategoryFontWeight: value })}
          fontStyle={imageHotspotCategoryFontStyle}
          onChangeFontStyle={(value) => setAttributes({ imageHotspotCategoryFontStyle: value })}
          textTransform={imageHotspotCategoryTextTransform}
          onChangeTextTransform={(value) => setAttributes({ imageHotspotCategoryTextTransform: value })}
          textDecoration={imageHotspotCategoryTextDecoration}
          onChangeTextDecoration={(value) => setAttributes({ imageHotspotCategoryTextDecoration: value })}
          letterSpacing={imageHotspotCategoryLetterSpacing}
          onChangeLetterSpacing={(value) => setAttributes({ imageHotspotCategoryLetterSpacing: value })}
          letterSpacingUnits={imageHotspotCategoryLetterSpacingUnits}
          onChangeLetterSpacingUnit={(value) => setAttributes({ imageHotspotCategoryLetterSpacingUnits: value })}
          lineHeight={imageHotspotCategoryLineHeight}
          onChangeLineHeight={(value) => setAttributes({ imageHotspotCategoryLineHeight: value })}
          lineHeightUnits={imageHotspotCategoryLineHeightUnits}
          onChangeLineHeightUnit={(value) => setAttributes({ imageHotspotCategoryLineHeightUnits: value })}
        />

        <FB_SwitcherControl
          label={__("Color", "frontis-blocks")}
          globalSwitcher={imageHotspotCategoryColorSwitcher}
          setGlobalSwitcher={(value) => setAttributes({ imageHotspotCategoryColorSwitcher: value })}
        />

        {imageHotspotCategoryColorSwitcher === 'normal' && (
          <FB_ColorControl
            label={__("Color", "frontis-blocks")}
            globalColor={imageHotspotCategoryColor}
            setGlobalColor={(value) => setAttributes({ imageHotspotCategoryColor: value })}
          />
        )}

        {imageHotspotCategoryColorSwitcher === 'hover' && (
          <FB_ColorControl
            label={__("Hover Color", "frontis-blocks")}
            globalColor={imageHotspotCategoryHoverColor}
            setGlobalColor={(value) => setAttributes({ imageHotspotCategoryHoverColor: value })}
          />
        )}

      </PanelBody>

      <PanelBody title={__("Description", "frontis-blocks")}
        initialOpen={false}
      >

        <FB_Spacing
          label={__("Padding", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={imageHotspotDescPaddingHandler}
          spacingUnits={imageHotspotDescPaddingUnits}
          spacingDesktop={imageHotspotDescPaddingDesktop}
          spacingTablet={imageHotspotDescPaddingTablet}
          spacingMobile={imageHotspotDescPaddingMobile}
          handleSpacingUnitHandler={imageHotspotDescPaddingUnitsChange}
          spacingCombineBtn={imageHotspotDescPaddingLink}
          spacingCombineBtnHandler={imageHotspotDescPaddingLinkBtn}
          setAttributes={setAttributes}
        />

        <FB_Spacing
          label={__("Margin", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={imageHotspotDescMarginUnitsHandler}
          spacingUnits={imageHotspotDescMarginUnits}
          spacingDesktop={imageHotspotDescMarginDesktop}
          spacingTablet={imageHotspotDescMarginTablet}
          spacingMobile={imageHotspotDescMarginMobile}
          handleSpacingUnitHandler={imageHotspotDescMarginUnitsChange}
          spacingCombineBtn={imageHotspotDescMarginLink}
          spacingCombineBtnHandler={imageHotspotDescMarginLinkBtn}
          setAttributes={setAttributes}
        />

        <FB_TypographyControl
          label={__("Typography", "frontis-blocks")}
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

        <FB_SwitcherControl
          label={__("Color", "frontis-blocks")}
          globalSwitcher={imageHotspotDescColorSwitcher}
          setGlobalSwitcher={(value) => setAttributes({ imageHotspotDescColorSwitcher: value })}
        />

        {imageHotspotDescColorSwitcher === 'normal' && (
          <FB_ColorControl
            label={__("Color", "frontis-blocks")}
            globalColor={imageHotspotDescColor}
            setGlobalColor={(value) => setAttributes({ imageHotspotDescColor: value })}
          />
        )}

        {imageHotspotDescColorSwitcher === 'hover' && (
          <FB_ColorControl
            label={__("Hover Color", "frontis-blocks")}
            globalColor={imageHotspotDescHoverColor}
            setGlobalColor={(value) => setAttributes({ imageHotspotDescHoverColor: value })}
          />
        )}

      </PanelBody>

      <PanelBody title={__("Price", "frontis-blocks")}
        initialOpen={false}
      >
        <FB_Spacing
          label={__("Padding", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={imageHotspotPricePaddingUnitsHandler}
          spacingUnits={imageHotspotPricePaddingUnits}
          spacingDesktop={imageHotspotPricePaddingDesktop}
          spacingTablet={imageHotspotPricePaddingTablet}
          spacingMobile={imageHotspotPricePaddingMobile}
          handleSpacingUnitHandler={imageHotspotPricePaddingUnitsChange}
          spacingCombineBtn={imageHotspotPricePaddingLink}
          spacingCombineBtnHandler={imageHotspotPricePaddingLinkBtn}
          setAttributes={setAttributes}
        />

        <FB_Spacing
          label={__("Margin", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={imageHotspotPriceMarginUnitsHandler}
          spacingUnits={imageHotspotPriceMarginUnits}
          spacingDesktop={imageHotspotPriceMarginDesktop}
          spacingTablet={imageHotspotPriceMarginTablet}
          spacingMobile={imageHotspotPriceMarginMobile}
          handleSpacingUnitHandler={imageHotspotPriceMarginUnitsChange}
          spacingCombineBtn={imageHotspotPriceMarginLink}
          spacingCombineBtnHandler={imageHotspotPriceMarginLinkBtn}
          setAttributes={setAttributes}
        />

        <FB_TypographyControl
          label={__("Typography", "frontis-blocks")}
          deviceType={deviceType}
          setAttributes={setAttributes}
          fontFamily={imageHotspotPriceFontFamily}
          onChangeFontFamily={(value) => setAttributes({ imageHotspotPriceFontFamily: value })}
          fontSize={imageHotspotPriceFontSize}
          onChangeFontSize={(value) => setAttributes({ imageHotspotPriceFontSize: value })}
          fontSizeUnits={imageHotspotPriceFontSizeUnits}
          onChangeFontSizeUnit={(value) => setAttributes({ imageHotspotPriceFontSizeUnits: value })}
          fontWeight={imageHotspotPriceFontWeight}
          onChangeFontWeight={(value) => setAttributes({ imageHotspotPriceFontWeight: value })}
          fontStyle={imageHotspotPriceFontStyle}
          onChangeFontStyle={(value) => setAttributes({ imageHotspotPriceFontStyle: value })}
          textTransform={imageHotspotPriceTextTransform}
          onChangeTextTransform={(value) => setAttributes({ imageHotspotPriceTextTransform: value })}
          textDecoration={imageHotspotPriceTextDecoration}
          onChangeTextDecoration={(value) => setAttributes({ imageHotspotPriceTextDecoration: value })}
          letterSpacing={imageHotspotPriceLetterSpacing}
          onChangeLetterSpacing={(value) => setAttributes({ imageHotspotPriceLetterSpacing: value })}
          letterSpacingUnits={imageHotspotPriceLetterSpacingUnits}
          onChangeLetterSpacingUnit={(value) => setAttributes({ imageHotspotPriceLetterSpacingUnits: value })}
          lineHeight={imageHotspotPriceLineHeight}
          onChangeLineHeight={(value) => setAttributes({ imageHotspotPriceLineHeight: value })}
          lineHeightUnits={imageHotspotPriceLineHeightUnits}
          onChangeLineHeightUnit={(value) => setAttributes({ imageHotspotPriceLineHeightUnits: value })}
        />

        <FB_SwitcherControl
          label={__("Color", "frontis-blocks")}
          globalSwitcher={imageHotspotPriceColorSwitcher}
          setGlobalSwitcher={(value) => setAttributes({ imageHotspotPriceColorSwitcher: value })}
        />

        {imageHotspotPriceColorSwitcher === 'normal' && (
          <FB_ColorControl
            label={__("Color", "frontis-blocks")}
            globalColor={imageHotspotPriceColor}
            setGlobalColor={(value) => setAttributes({ imageHotspotPriceColor: value })}
          />
        )}

        {imageHotspotPriceColorSwitcher === 'hover' && (
          <FB_ColorControl
            label={__("Hover Color", "frontis-blocks")}
            globalColor={imageHotspotPriceHoverColor}
            setGlobalColor={(value) => setAttributes({ imageHotspotPriceHoverColor: value })}
          />
        )}

      </PanelBody>

      <PanelBody
        title={__("Social Links", "frontis-blocks")}
        initialOpen={false}
        className="fb-setting-social-links-header"
      >

        <FB_Range
          min={0}
          max={50}
          label={__("Gap", "frontis-blocks")}
          rangeValue={imageHotspotSocialLinksGap}
          onChangeHandler={(value) => setAttributes({ imageHotspotSocialLinksGap: value })}
          rangeUnitHandler={(value) => setAttributes({ imageHotspotSocialLinksGapUnits: value })}
          deviceType={deviceType}
          units={imageHotspotSocialLinksGapUnits}
          setAttributes={setAttributes}
          rangeStep={1}
          resetFallbackValue={""}
          isRangeUnit={true}
        />

        <FB_Range
          min={0}
          max={50}
          label={__("Icon Size", "frontis-blocks")}
          rangeValue={imageHotspotSocialLinksIconSize}
          onChangeHandler={(value) => setAttributes({ imageHotspotSocialLinksIconSize: value })}
          rangeUnitHandler={(value) => setAttributes({ imageHotspotSocialLinksIconSizeUnits: value })}
          deviceType={deviceType}
          units={imageHotspotSocialLinksIconSizeUnits}
          setAttributes={setAttributes}
          rangeStep={1}
          resetFallbackValue={""}
          isRangeUnit={true}
        />

      </PanelBody>

    </>
  );

  const advancedControls = (
    <>
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
          setHZOrientationType={(value) => setAttributes({ imageHotspotHZOrientationType: value })}
          VROrientationType={imageHotspotVROrientationType}
          setVROrientationType={(value) => setAttributes({ imageHotspotVROrientationType: value })}
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
          spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
          spacingUnits={globalPaddingUnits}
          spacingDesktop={globalPaddingDesktop}
          spacingTablet={globalPaddingTablet}
          spacingMobile={globalPaddingMobile}
          handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
          spacingCombineBtn={globalPaddingLink}
          spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
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
          handleSpacingUnitHandler={handleGlobalMarginUnitChange}
          spacingCombineBtn={globalMarginLink}
          spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
          setAttributes={setAttributes}
        />
      </PanelBody>

      <PanelBody title="Background Color" initialOpen={false}>

        <FB_BackgroundColorControl
          bgColorSwitcher={imageHotspotsGlobalBgBgColorSwitcher} setBgColorSwitcher={(value) => setAttributes({ imageHotspotsGlobalBgBgColorSwitcher: value })}
          normalBackgroundType={imageHotspotsGlobalBgBgType}
          setNormalBackgroundType={(value) => setAttributes({ imageHotspotsGlobalBgBgType: value })}
          normalClassicColor={imageHotspotsGlobalBgBgClassicColor}
          setNormalClassicColor={(value) => setAttributes({ imageHotspotsGlobalBgBgClassicColor: value === undefined ? '' : value })}
          normalGradientColor={imageHotspotsGlobalBgBgGradientColor}
          setNormalGradientColor={(value) => setAttributes({ imageHotspotsGlobalBgBgGradientColor: value === undefined ? null : value })}
          normalCustomGradientSwitcher={imageHotspotsGlobalBgBgCustomGradientSwitcher}
          setNormalCustomGradientSwitcher={(value) => setAttributes({ imageHotspotsGlobalBgBgCustomGradientSwitcher: value, })}
          normalCustomGradientInputValue={imageHotspotsGlobalBgBgCustomGradientInputValue}
          setNormalCustomGradientInputValue={(value) => setAttributes({ imageHotspotsGlobalBgBgCustomGradientInputValue: value, })}
          normalBackgroundImageUrl={imageHotspotsGlobalBgBgImageUrl}
          setNormalBackgroundImageUrl={(value) => setAttributes({ imageHotspotsGlobalBgBgImageUrl: value })}
          normalBackgroundImageAlt={imageHotspotsGlobalBgBgImageAlt}
          setNormalBackgroundImageAlt={(value) => setAttributes({ imageHotspotsGlobalBgBgImageAlt: value })}
          normalBackgroundImageID={imageHotspotsGlobalBgBgImageID}
          setNormalBackgroundImageID={(value) => setAttributes({ imageHotspotsGlobalBgBgImageID: value })}
          normalBackgroundImagePosition={imageHotspotsGlobalBgBgImagePosition}
          setNormalBackgroundImagePosition={(value) => setAttributes({ imageHotspotsGlobalBgBgImagePosition: value })}
          normalBackgroundImageAttachment={imageHotspotsGlobalBgBgImageAttachment}
          setNormalBackgroundImageAttachment={(value) => setAttributes({ imageHotspotsGlobalBgBgImageAttachment: value })}
          normalBackgroundImageRepeat={imageHotspotsGlobalBgBgImageRepeat}
          setNormalBackgroundImageRepeat={(value) => setAttributes({ imageHotspotsGlobalBgBgImageRepeat: value, })}
          normalBackgroundImageSize={imageHotspotsGlobalBgBgImageSize}
          setNormalBackgroundImageSize={(value) => setAttributes({ imageHotspotsGlobalBgBgImageSize: value })}
          hoverBackgroundType={imageHotspotsGlobalBgBgHoverType}
          setHoverBackgroundType={(value) => setAttributes({ imageHotspotsGlobalBgBgHoverType: value })}
          hoverClassicColor={imageHotspotsGlobalBgBgHoverClassicColor}
          setHoverClassicColor={(value) => setAttributes({ imageHotspotsGlobalBgBgHoverClassicColor: value === undefined ? '' : value })}
          hoverGradientColor={imageHotspotsGlobalBgBgHoverGradientColor}
          setHoverGradientColor={(value) => setAttributes({ imageHotspotsGlobalBgBgHoverGradientColor: value === undefined ? null : value })}
          hoverCustomGradientSwitcher={imageHotspotsGlobalBgBgHoverCustomGradientSwitcher}
          setHoverCustomGradientSwitcher={(value) => setAttributes({ imageHotspotsGlobalBgBgHoverCustomGradientSwitcher: value, })}
          hoverCustomGradientInputValue={imageHotspotsGlobalBgBgHoverCustomGradientInputValue}
          setHoverCustomGradientInputValue={(value) => setAttributes({ imageHotspotsGlobalBgBgHoverCustomGradientInputValue: value, })}
          hoverBackgroundImageUrl={imageHotspotsGlobalBgBgHoverImageUrl}
          setBgHoverImageUrl={(value) => setAttributes({ imageHotspotsGlobalBgBgHoverImageUrl: value })}
          hoverBackgroundImageAlt={imageHotspotsGlobalBgBgHoverImageAlt}
          setBgHoverImageAlt={(value) => setAttributes({ imageHotspotsGlobalBgBgHoverImageAlt: value })}
          hoverBackgroundImageID={imageHotspotsGlobalBgBgHoverImageID}
          setBgHoverImageID={(value) => setAttributes({ imageHotspotsGlobalBgBgHoverImageID: value })}
          hoverBackgroundImagePosition={imageHotspotsGlobalBgBgHoverImagePosition}
          setBgHoverImagePosition={(value) => setAttributes({ imageHotspotsGlobalBgBgHoverImagePosition: value, })}
          hoverBackgroundImageAttachment={imageHotspotsGlobalBgBgHoverImageAttachment}
          setBgHoverImageAttachment={(value) => setAttributes({ imageHotspotsGlobalBgBgHoverImageAttachment: value, })}
          hoverBackgroundImageRepeat={imageHotspotsGlobalBgBgHoverImageRepeat}
          setBgHoverImageRepeat={(value) => setAttributes({ imageHotspotsGlobalBgBgHoverImageRepeat: value, })}
          hoverBackgroundImageSize={imageHotspotsGlobalBgBgHoverImageSize}
          setBgHoverImageSize={(value) => setAttributes({ imageHotspotsGlobalBgBgHoverImageSize: value })}
        />

      </PanelBody>

      <PanelBody
        title={__("Border and Shadow", "frontis-blocks")}
        initialOpen={false}
      >

        <SelectControl
          label={__("Border Style", "frontis-blocks")}
          value={imageHotspotsGlobalBorder}
          options={BORDER_STYLES}
          onChange={(value) => setAttributes({ imageHotspotsGlobalBorder: value })}
        />


        <FB_SwitcherControl
          label={__("Border Color", "frontis-blocks")}
          globalSwitcher={imageHotspotsGlobalBorderColorSwitcher}
          setGlobalSwitcher={(value) => setAttributes({ imageHotspotsGlobalBorderColorSwitcher: value })}
        />

        {imageHotspotsGlobalBorderColorSwitcher === 'normal' && (
          <FB_ColorControl
            label={__("Normal Color", "frontis-blocks")}
            globalColor={imageHotspotsGlobalBorderColor}
            setGlobalColor={(value) => setAttributes({ imageHotspotsGlobalBorderColor: value === undefined ? '' : value })}
          />
        )}

        {imageHotspotsGlobalBorderColorSwitcher === 'hover' && (
          <FB_ColorControl
            label={__("Hover Color", "frontis-blocks")}
            globalColor={imageHotspotsGlobalBorderHoverColor}
            setGlobalColor={(value) => setAttributes({ imageHotspotsGlobalBorderHoverColor: value === undefined ? '' : value })}
          />
        )}

        <FB_Spacing
          label={__("Border", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={imageHotspotsGlobalBorderUnitsHandler}
          spacingUnits={imageHotspotsGlobalBorderUnits}
          spacingDesktop={imageHotspotsGlobalBorderDesktop}
          spacingTablet={imageHotspotsGlobalBorderTablet}
          spacingMobile={imageHotspotsGlobalBorderMobile}
          handleSpacingUnitHandler={imageHotspotsGlobalBorderUnitsChange}
          spacingCombineBtn={imageHotspotsGlobalBorderLink}
          spacingCombineBtnHandler={imageHotspotsGlobalBorderLinkBtn}
          setAttributes={setAttributes}
        />

        <FB_Spacing
          label={__("Border Radius", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={imageHotspotsGlobalBorderRadiusUnitsHandler}
          spacingUnits={imageHotspotsGlobalBorderRadiusUnits}
          spacingDesktop={imageHotspotsGlobalBorderRadiusDesktop}
          spacingTablet={imageHotspotsGlobalBorderRadiusTablet}
          spacingMobile={imageHotspotsGlobalBorderRadiusMobile}
          handleSpacingUnitHandler={imageHotspotsGlobalBorderRadiusUnitsChange}
          spacingCombineBtn={imageHotspotsGlobalBorderRadiusLink}
          spacingCombineBtnHandler={imageHotspotsGlobalBorderRadiusLinkBtn}
          setAttributes={setAttributes}
        />

        <FB_SwitcherControl
          label={__("Box Shadow", "frontis-blocks")}
          globalSwitcher={imageHotspotsGlobalBoxShadowSwitcher}
          setGlobalSwitcher={(value) => setAttributes({ imageHotspotsGlobalBoxShadowSwitcher: value })}
        />

        {imageHotspotsGlobalBoxShadowSwitcher === 'normal' && (
          <FB_BoxShadowControl
            label={__("Normal Shadow", "frontis-blocks")}
            onBoxShadowChange={(value) => setAttributes({ imageHotspotsGlobalBoxShadowValues: value })}
            initialShadowValue={imageHotspotsGlobalBoxShadowValues}
            onBoxShadowStyleChange={(value) => setAttributes({ imageHotspotsGlobalBoxShadowCssValue: value })}
          />
        )}

        {imageHotspotsGlobalBoxShadowSwitcher === 'hover' && (
          <FB_BoxShadowControl
            label={__("Hover Shadow", "frontis-blocks")}
            onBoxShadowChange={(value) => setAttributes({ imageHotspotsGlobalBoxShadowHoverValues: value })}
            initialShadowValue={imageHotspotsGlobalBoxShadowHoverValues}
            onBoxShadowStyleChange={(value) => setAttributes({ imageHotspotsGlobalBoxShadowHoverCssValue: value })}
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