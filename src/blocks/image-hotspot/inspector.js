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
    imageHotspotTitleBorderWidthDesktop,
    imageHotspotTitleBorderWidthTablet,
    imageHotspotTitleBorderWidthMobile,
    imageHotspotTitleBorderWidthUnits,
    imageHotspotTitleBorderWidthLink,
    imageHotspotTitleBorderRadiusDesktop,
    imageHotspotTitleBorderRadiusTablet,
    imageHotspotTitleBorderRadiusMobile,
    imageHotspotTitleBorderRadiusUnits,
    imageHotspotTitleBorderRadiusLink,

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
    imageHotspotDescBorderWidthDesktop,
    imageHotspotDescBorderWidthTablet,
    imageHotspotDescBorderWidthMobile,
    imageHotspotDescBorderWidthUnits,
    imageHotspotDescBorderWidthLink,
    imageHotspotDescBorderColor,
    imageHotspotDescBorderRadiusDesktop,
    imageHotspotDescBorderRadiusTablet,
    imageHotspotDescBorderRadiusMobile,
    imageHotspotDescBorderRadiusUnits,
    imageHotspotDescBorderRadiusLink,

    // Padding
    imageHotspotPaddingUnits,
    imageHotspotPaddingDesktop,
    imageHotspotPaddingTablet,
    imageHotspotPaddingMobile,
    imageHotspotPaddingLink,
    // imageHotspotPopoverPaddingUnits,
    imageHotspotPopoverPaddingDesktop,
    imageHotspotPopoverPaddingTablet,
    imageHotspotPopoverPaddingMobile,
    imageHotspotPopoverPaddingLink,
    // imageHotspotPopoverMarginUnits,
    imageHotspotPopoverMarginDesktop,
    imageHotspotPopoverMarginTablet,
    imageHotspotPopoverMarginMobile,
    imageHotspotPopoverMarginLink,
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
    imageHotspotPopoverBgColorSwitcher,
    imageHotspotPopoverBgHoverColor,
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

    /** Start Hotspot Title Border */
    imageHotspotTitleBorder,
    imageHotspotTitleBorderColorSwitcher,
    imageHotspotTitleBorderColor,
    imageHotspotTitleBorderHoverColor,
    /** End Hotspot Title Border */

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

    /** Start Hotspot Popover Background */
    imageHotspotsPopoverBgColorSwitcher,
    imageHotspotsPopoverNormalBackgroundType,
    imageHotspotsPopoverNormalClassicColor,
    imageHotspotsPopoverNormalGradientColor,
    imageHotspotsPopoverNormalCustomGradientSwitcher,
    imageHotspotsPopoverNormalCustomGradientInputValue,
    imageHotspotsPopoverHoverBackgroundType,
    imageHotspotsPopoverHoverClassicColor,
    imageHotspotsPopoverHoverGradientColor,
    imageHotspotsPopoverHoverCustomGradientSwitcher,
    imageHotspotsPopoverHoverCustomGradientInputValue,
    /** End Hotspot Popover Background */

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
    imageHotspotsPopoverGlobalZIndex,
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

  } = attributes;

  const deviceType = useDeviceType();

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

  const handleSocialLinkDragEnd = (hotspotId, { active, over }) => {
    if (!over || active.id === over.id) {
      return;
    }

    const hotspot = (imageHotspotHotspots || []).find((h) => h.id === hotspotId);
    if (!hotspot) {
      return;
    }

    const socialLinks = hotspot.socialLinks || [];
    const oldIndex = socialLinks.findIndex((link) => link.id === active.id);
    const newIndex = socialLinks.findIndex((link) => link.id === over.id);

    if (oldIndex === -1 || newIndex === -1) {
      return;
    }

    const updatedLinks = arrayMove(socialLinks, oldIndex, newIndex);
    updateHotspot(hotspotId, 'socialLinks', updatedLinks);
  };

  const deleteSocialLink = (hotspotId, socialLinkId) => {
    const hotspot = (imageHotspotHotspots || []).find((h) => h.id === hotspotId);
    if (!hotspot) {
      return;
    }
    const socialLinks = hotspot.socialLinks || [];
    const updatedLinks = socialLinks.filter((link) => link.id !== socialLinkId);
    updateHotspot(hotspotId, 'socialLinks', updatedLinks);
  };

  const duplicateSocialLink = (hotspotId, socialLinkId) => {
    const hotspot = (imageHotspotHotspots || []).find((h) => h.id === hotspotId);
    if (!hotspot) {
      return;
    }
    const socialLinks = hotspot.socialLinks || [];
    const linkIndex = socialLinks.findIndex((link) => link.id === socialLinkId);
    if (linkIndex === -1) {
      return;
    }

    const sourceLink = socialLinks[linkIndex];
    const duplicatedLink = {
      ...sourceLink,
      id: `social-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    };

    const updatedLinks = [
      ...socialLinks.slice(0, linkIndex + 1),
      duplicatedLink,
      ...socialLinks.slice(linkIndex + 1),
    ];
    updateHotspot(hotspotId, 'socialLinks', updatedLinks);
  };

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

  /** Start Back To Top Padding */
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
  /** End Back To Top Padding */

  /** Start Image Hotspots Popover Margin */
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

                          <ToggleControl
                            label={__("Show Popover Image", "frontis-blocks")}
                            checked={hotspot.showImage !== false}
                            onChange={(value) => updateHotspot(hotspot.id, 'showImage', value)}
                          />

                          {hotspot.showImage && (
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
                          )}

                          <ToggleControl
                            label={__('Show Social Links', 'frontis-blocks')}
                            checked={hotspot.showSocialLinks || false}
                            onChange={(value) => updateHotspot(hotspot.id, 'showSocialLinks', value)}
                          />

                          {hotspot.showSocialLinks && (
                            <div className="fb-hotspot-social-links-repeater">
                              <p className="fb-hotspot-control-label">{__('Social Links', 'frontis-blocks')}</p>

                              {(hotspot.socialLinks || []).length > 0 && (
                                <div className="fb-hotspot-repeater-wrapper">
                                  <DndContext
                                    collisionDetection={closestCenter}
                                    onDragEnd={(event) => handleSocialLinkDragEnd(hotspot.id, event)}
                                  >
                                    <SortableContext items={(hotspot.socialLinks || []).map((link) => link.id)}>
                                      <ul className="dnd-items-wrapper">
                                        {(hotspot.socialLinks || []).map((socialLink, socialIndex) => {
                                          const iconName = socialLink.icon
                                            ? socialLink.icon.charAt(0).toUpperCase() + socialLink.icon.slice(1)
                                            : 'Facebook';
                                          const itemTitle = `${iconName} (${socialIndex + 1})`;

                                          return (
                                            <SortableItem
                                              key={socialLink.id}
                                              id={socialLink.id}
                                              item={socialLink}
                                              index={socialIndex}
                                              title={itemTitle}
                                              duplicateLabel={__('Duplicate Social Link', 'frontis-blocks')}
                                              deleteLabel={__('Delete Social Link', 'frontis-blocks')}
                                              handleDeleteItem={(id) => deleteSocialLink(hotspot.id, id)}
                                              handleDuplicateItem={(id) => duplicateSocialLink(hotspot.id, id)}
                                            >
                                              <div className="fb-hotspot-social-link-fields">
                                                <p className="fb-hotspot-control-label">{__('Icon', 'frontis-blocks')}</p>
                                                <FBIconPicker
                                                  value={socialLink.icon || 'facebook'}
                                                  setIconHandler={(icon) => {
                                                    const updatedLinks = [...(hotspot.socialLinks || [])];
                                                    const idx = updatedLinks.findIndex((l) => l.id === socialLink.id);
                                                    if (idx !== -1) {
                                                      updatedLinks[idx] = { ...updatedLinks[idx], icon };
                                                      updateHotspot(hotspot.id, 'socialLinks', updatedLinks);
                                                    }
                                                  }}
                                                />

                                                <FB_UrlControl
                                                  label={__('URL', 'frontis-blocks')}
                                                  url={socialLink.url || ''}
                                                  onChangeUrl={(value) => {
                                                    const updatedLinks = [...(hotspot.socialLinks || [])];
                                                    const idx = updatedLinks.findIndex((l) => l.id === socialLink.id);
                                                    if (idx !== -1) {
                                                      updatedLinks[idx] = { ...updatedLinks[idx], url: value };
                                                      updateHotspot(hotspot.id, 'socialLinks', updatedLinks);
                                                    }
                                                  }}
                                                  openInNewTab={!!socialLink.openInNewTab}
                                                  onChangeOpenInNewTab={(value) => {
                                                    const updatedLinks = [...(hotspot.socialLinks || [])];
                                                    const idx = updatedLinks.findIndex((l) => l.id === socialLink.id);
                                                    if (idx !== -1) {
                                                      updatedLinks[idx] = { ...updatedLinks[idx], openInNewTab: value };
                                                      updateHotspot(hotspot.id, 'socialLinks', updatedLinks);
                                                    }
                                                  }}
                                                />

                                                <FB_SwitcherControl
                                                  label={__("Icon Color", "frontis-blocks")}
                                                  globalSwitcher={imageHotspotSocialLinkIconColorSwitcher}
                                                  setGlobalSwitcher={(value) => setAttributes({ imageHotspotSocialLinkIconColorSwitcher: value })}
                                                />

                                                {imageHotspotSocialLinkIconColorSwitcher === 'normal' && (
                                                  <FB_ColorControl
                                                    label={__("Icon Color", "frontis-blocks")}
                                                    globalColor={socialLink.socialLinkIconColor}
                                                    setGlobalColor={(color) => {
                                                      const updatedLinks = [...(hotspot.socialLinks || [])];
                                                      const idx = updatedLinks.findIndex((l) => l.id === socialLink.id);
                                                      if (idx !== -1) {
                                                        updatedLinks[idx] = { ...updatedLinks[idx], socialLinkIconColor: color };
                                                        updateHotspot(hotspot.id, 'socialLinks', updatedLinks);
                                                      }
                                                    }}
                                                  />
                                                )}

                                                {imageHotspotSocialLinkIconColorSwitcher === 'hover' && (
                                                  <FB_ColorControl
                                                    label={__("Icon Hover Color", "frontis-blocks")}
                                                    globalColor={socialLink.socialLinkIconHoverColor}
                                                    setGlobalColor={(color) => {
                                                      const updatedLinks = [...(hotspot.socialLinks || [])];
                                                      const idx = updatedLinks.findIndex((l) => l.id === socialLink.id);
                                                      if (idx !== -1) {
                                                        updatedLinks[idx] = { ...updatedLinks[idx], socialLinkIconHoverColor: color };
                                                        updateHotspot(hotspot.id, 'socialLinks', updatedLinks);
                                                      }
                                                    }}
                                                  />
                                                )}

                                              </div>
                                            </SortableItem>
                                          );
                                        })}
                                      </ul>
                                    </SortableContext>
                                  </DndContext>
                                </div>
                              )}

                              <Button
                                variant="secondary"
                                onClick={() => {
                                  const currentLinks = hotspot.socialLinks || [];
                                  const newLink = {
                                    id: `social-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                                    icon: 'facebook',
                                    url: '',
                                    openInNewTab: false,
                                  };
                                  updateHotspot(hotspot.id, 'socialLinks', [...currentLinks, newLink]);
                                }}
                                className="fb-hotspot-full-btn"
                              >
                                {__('+ Add Social Link', 'frontis-blocks')}
                              </Button>
                            </div>
                          )}

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
          options={[
            { label: __('Normal', 'frontis-blocks'), value: 'normal' },
            { label: __('Hover', 'frontis-blocks'), value: 'hover' },
          ]}
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

      </PanelBody>

      <PanelBody title={__("Title", "frontis-blocks")} initialOpen={false}>

        <FB_Spacing
          label={__("Padding", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={(unit) => setAttributes({
            imageHotspotTitlePaddingUnits: {
              ...imageHotspotTitlePaddingUnits,
              [deviceType]: unit
            }
          })}
          spacingUnits={imageHotspotTitlePaddingUnits}
          spacingDesktop={imageHotspotTitlePaddingDesktop}
          spacingTablet={imageHotspotTitlePaddingTablet}
          spacingMobile={imageHotspotTitlePaddingMobile}
          handleSpacingUnitHandler={imageHotspotTitlePaddingUnitsChange}
          spacingCombineBtn={imageHotspotTitlePaddingLink}
          spacingCombineBtnHandler={() => setAttributes({
            imageHotspotTitlePaddingLink: !imageHotspotTitlePaddingLink
          })}
          setAttributes={setAttributes}
        />

        <FB_Spacing
          label={__("Margin", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={(unit) => setAttributes({
            imageHotspotTitleMarginUnits: {
              ...imageHotspotTitleMarginUnits,
              [deviceType]: unit
            }
          })}
          spacingUnits={imageHotspotTitleMarginUnits}
          spacingDesktop={imageHotspotTitleMarginDesktop}
          spacingTablet={imageHotspotTitleMarginTablet}
          spacingMobile={imageHotspotTitleMarginMobile}
          handleSpacingUnitHandler={imageHotspotTitleMarginUnitsChange}
          spacingCombineBtn={imageHotspotTitleMarginLink}
          spacingCombineBtnHandler={() => setAttributes({
            imageHotspotTitleMarginLink: !imageHotspotTitleMarginLink
          })}
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
          spacingUnitsHandler={(unit) => setAttributes({ imageHotspotCategoryPaddingUnits: { ...imageHotspotCategoryPaddingUnits, [deviceType]: unit } })}
          spacingUnits={imageHotspotCategoryPaddingUnits}
          spacingDesktop={imageHotspotCategoryPaddingDesktop}
          spacingTablet={imageHotspotCategoryPaddingTablet}
          spacingMobile={imageHotspotCategoryPaddingMobile}
          handleSpacingUnitHandler={imageHotspotCategoryPaddingUnitsChange}
          spacingCombineBtn={imageHotspotCategoryPaddingLink}
          spacingCombineBtnHandler={() => setAttributes({ imageHotspotCategoryPaddingLink: !imageHotspotCategoryPaddingLink })}
          setAttributes={setAttributes}
        />

        <FB_Spacing
          label={__("Margin", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={(unit) => setAttributes({ imageHotspotCategoryMarginUnits: { ...imageHotspotCategoryMarginUnits, [deviceType]: unit } })}
          spacingUnits={imageHotspotCategoryMarginUnits}
          spacingDesktop={imageHotspotCategoryMarginDesktop}
          spacingTablet={imageHotspotCategoryMarginTablet}
          spacingMobile={imageHotspotCategoryMarginMobile}
          handleSpacingUnitHandler={imageHotspotCategoryMarginUnitsChange}
          spacingCombineBtn={imageHotspotCategoryMarginLink}
          spacingCombineBtnHandler={() => setAttributes({ imageHotspotCategoryMarginLink: !imageHotspotCategoryMarginLink })}
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
          spacingUnitsHandler={(unit) => setAttributes({
            imageHotspotDescPaddingUnits: {
              ...imageHotspotDescPaddingUnits,
              [deviceType]: unit
            }
          })}
          spacingUnits={imageHotspotDescPaddingUnits}
          spacingDesktop={imageHotspotDescPaddingDesktop}
          spacingTablet={imageHotspotDescPaddingTablet}
          spacingMobile={imageHotspotDescPaddingMobile}
          handleSpacingUnitHandler={imageHotspotDescPaddingUnitsChange}
          spacingCombineBtn={imageHotspotDescPaddingLink}
          spacingCombineBtnHandler={() => setAttributes({
            imageHotspotDescPaddingLink: !imageHotspotDescPaddingLink
          })}
          setAttributes={setAttributes}
        />

        <FB_Spacing
          label={__("Margin", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={(unit) => setAttributes({
            imageHotspotDescMarginUnits: {
              ...imageHotspotDescMarginUnits,
              [deviceType]: unit
            }
          })}
          spacingUnits={imageHotspotDescMarginUnits}
          spacingDesktop={imageHotspotDescMarginDesktop}
          spacingTablet={imageHotspotDescMarginTablet}
          spacingMobile={imageHotspotDescMarginMobile}
          handleSpacingUnitHandler={imageHotspotDescMarginUnitsChange}
          spacingCombineBtn={imageHotspotDescMarginLink}
          spacingCombineBtnHandler={() => setAttributes({
            imageHotspotDescMarginLink: !imageHotspotDescMarginLink
          })}
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
          spacingUnitsHandler={(unit) => setAttributes({
            imageHotspotPricePaddingUnits: {
              ...imageHotspotPricePaddingUnits,
              [deviceType]: unit
            }
          })}
          spacingUnits={imageHotspotPricePaddingUnits}
          spacingDesktop={imageHotspotPricePaddingDesktop}
          spacingTablet={imageHotspotPricePaddingTablet}
          spacingMobile={imageHotspotPricePaddingMobile}
          handleSpacingUnitHandler={imageHotspotPricePaddingUnitsChange}
          spacingCombineBtn={imageHotspotPricePaddingLink}
          spacingCombineBtnHandler={() => setAttributes({
            imageHotspotPricePaddingLink: !imageHotspotPricePaddingLink
          })}
          setAttributes={setAttributes}
        />

        <FB_Spacing
          label={__("Margin", "frontis-blocks")}
          deviceType={deviceType}
          spacingUnitsHandler={(unit) => setAttributes({
            imageHotspotPriceMarginUnits: {
              ...imageHotspotPriceMarginUnits,
              [deviceType]: unit
            }
          })}
          spacingUnits={imageHotspotPriceMarginUnits}
          spacingDesktop={imageHotspotPriceMarginDesktop}
          spacingTablet={imageHotspotPriceMarginTablet}
          spacingMobile={imageHotspotPriceMarginMobile}
          handleSpacingUnitHandler={imageHotspotPriceMarginUnitsChange}
          spacingCombineBtn={imageHotspotPriceMarginLink}
          spacingCombineBtnHandler={() => setAttributes({
            imageHotspotPriceMarginLink: !imageHotspotPriceMarginLink
          })}
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