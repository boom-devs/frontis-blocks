<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;


// Extract the block attributes
$block_attributes = $block['attrs'];
$blockID          = isset( $block_attributes['blockID'] ) ? sanitize_text_field( $block_attributes['blockID'] ) : '';
$deviceType       = isset( $block_attributes['DeviceType'] ) ? sanitize_text_field( $block_attributes['DeviceType'] ) : 'Desktop';







// Gallery Grid
$GalleryColumnNumberDesktop       = isset( $block_attributes['GalleryColumnNumberDesktop'] ) ? $block_attributes['GalleryColumnNumberDesktop'] : 3;
$GalleryColumnNumberTablet       = isset( $block_attributes['GalleryColumnNumberTablet'] ) ? $block_attributes['GalleryColumnNumberTablet'] : 2;
$GalleryColumnNumberMobile       = isset( $block_attributes['GalleryColumnNumberMobile'] ) ? $block_attributes['GalleryColumnNumberMobile'] : 1;

$GalleryImageGap       = isset( $block_attributes['GalleryImageGap'] ) ? $block_attributes['GalleryImageGap'] : ['Desktop' => 20, 'Tablet' => 20, 'Mobile' => 20];
$GalleryImageGapUnits = isset( $block_attributes['GalleryImageGapUnits'] ) ? $block_attributes['GalleryImageGapUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];

$GalleryItemHeight       = isset( $block_attributes['GalleryItemHeight'] ) ? $block_attributes['GalleryItemHeight'] : ['Desktop' => 200, 'Tablet' => 200, 'Mobile' => 200];
$GalleryItemHeightUnits = isset( $block_attributes['GalleryItemHeightUnits'] ) ? $block_attributes['GalleryItemHeightUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];

// Gallery Items


// Gallery Button
$GalleryButtonAlignment = isset( $block_attributes['GalleryButtonAlignment'] ) ? sanitize_text_field( $block_attributes['GalleryButtonAlignment'] ) : 'center';
$GalleryButtonSwitcher     = isset( $block_attributes['GalleryButtonSwitcher'] ) ? $block_attributes['GalleryButtonSwitcher'] : false;

// margin
$ButtonMarginUnits   = isset( $block_attributes['ButtonMarginUnits'] ) ? $block_attributes['ButtonMarginUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$ButtonDesktopMargin = isset( $block_attributes['ButtonDesktopMargin'] ) ? $block_attributes['ButtonDesktopMargin'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$ButtonTabMargin     = isset( $block_attributes['ButtonTabMargin'] ) ? $block_attributes['ButtonTabMargin'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$ButtonMobileMargin  = isset( $block_attributes['ButtonMobileMargin'] ) ? $block_attributes['ButtonMobileMargin'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$ButtonDesktopMarginWidth = $ButtonDesktopMargin['top'] . $ButtonMarginUnits['Desktop'] . ' ' . $ButtonDesktopMargin['right'] . $ButtonMarginUnits['Desktop'] . ' ' . $ButtonDesktopMargin['bottom'] . $ButtonMarginUnits['Desktop'] . ' ' . $ButtonDesktopMargin['left'] . $ButtonMarginUnits['Desktop'];
$ButtonTabMarginWidth     = $ButtonTabMargin['top'] . $ButtonMarginUnits['Tablet'] . ' ' . $ButtonTabMargin['right'] . $ButtonMarginUnits['Tablet'] . ' ' . $ButtonTabMargin['bottom'] . $ButtonMarginUnits['Tablet'] . ' ' . $ButtonTabMargin['left'] . $ButtonMarginUnits['Tablet'];
$ButtonMobileMarginWidth  = $ButtonMobileMargin['top'] . $ButtonMarginUnits['Mobile'] . ' ' . $ButtonMobileMargin['right'] . $ButtonMarginUnits['Mobile'] . ' ' . $ButtonMobileMargin['bottom'] . $ButtonMarginUnits['Mobile'] . ' ' . $ButtonMobileMargin['left'] . $ButtonMarginUnits['Mobile'];

// Padding
$ButtonPaddingUnits   = isset( $block_attributes['ButtonPaddingUnits'] ) ? $block_attributes['ButtonPaddingUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$ButtonDesktopPadding = isset( $block_attributes['ButtonDesktopPadding'] ) ? $block_attributes['ButtonDesktopPadding'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$ButtonTabPadding     = isset( $block_attributes['ButtonTabPadding'] ) ? $block_attributes['ButtonTabPadding'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$ButtonMobilePadding  = isset( $block_attributes['ButtonMobilePadding'] ) ? $block_attributes['ButtonMobilePadding'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$ButtonDesktopPaddingWidth = $ButtonDesktopPadding['top'] . $ButtonPaddingUnits['Desktop'] . ' ' . $ButtonDesktopPadding['right'] . $ButtonPaddingUnits['Desktop'] . ' ' . $ButtonDesktopPadding['bottom'] . $ButtonPaddingUnits['Desktop'] . ' ' . $ButtonDesktopPadding['left'] . $ButtonPaddingUnits['Desktop'];
$ButtonTabPaddingWidth     = $ButtonTabPadding['top'] . $ButtonPaddingUnits['Tablet'] . ' ' . $ButtonTabPadding['right'] . $ButtonPaddingUnits['Tablet'] . ' ' . $ButtonTabPadding['bottom'] . $ButtonPaddingUnits['Tablet'] . ' ' . $ButtonTabPadding['left'] . $ButtonPaddingUnits['Tablet'];
$ButtonMobilePaddingWidth  = $ButtonMobilePadding['top'] . $ButtonPaddingUnits['Mobile'] . ' ' . $ButtonMobilePadding['right'] . $ButtonPaddingUnits['Mobile'] . ' ' . $ButtonMobilePadding['bottom'] . $ButtonPaddingUnits['Mobile'] . ' ' . $ButtonMobilePadding['left'] . $ButtonPaddingUnits['Mobile'];

// border
$ButtonBorder           = isset( $block_attributes['ButtonBorder'] ) ? sanitize_text_field( $block_attributes['ButtonBorder'] ) : 'none';
$ButtonBorderColor      = isset( $block_attributes['ButtonBorderColor'] ) ? $block_attributes['ButtonBorderColor'] : '#000';
$ButtonBorderHoverColor = isset( $block_attributes['ButtonBorderHoverColor'] ) ? $block_attributes['ButtonBorderHoverColor'] : '#000';

$ButtonBorderUnits        = isset( $block_attributes['ButtonBorderUnits'] ) ? $block_attributes['ButtonBorderUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$ButtonDesktopBorderWidth = isset( $block_attributes['ButtonDesktopBorderWidth'] ) ? $block_attributes['ButtonDesktopBorderWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$ButtonTabBorderWidth     = isset( $block_attributes['ButtonTabBorderWidth'] ) ? $block_attributes['ButtonTabBorderWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$ButtonMobileBorderWidth  = isset( $block_attributes['ButtonMobileBorderWidth'] ) ? $block_attributes['ButtonMobileBorderWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$ButtonDesktopBorder = $ButtonDesktopBorderWidth['top'] . $ButtonBorderUnits['Desktop'] . ' ' . $ButtonDesktopBorderWidth['right'] . $ButtonBorderUnits['Desktop'] . ' ' . $ButtonDesktopBorderWidth['bottom'] . $ButtonBorderUnits['Desktop'] . ' ' . $ButtonDesktopBorderWidth['left'] . $ButtonBorderUnits['Desktop'];
$ButtonTabBorder     = $ButtonTabBorderWidth['top'] . $ButtonBorderUnits['Tablet'] . ' ' . $ButtonTabBorderWidth['right'] . $ButtonBorderUnits['Tablet'] . ' ' . $ButtonTabBorderWidth['bottom'] . $ButtonBorderUnits['Tablet'] . ' ' . $ButtonTabBorderWidth['left'] . $ButtonBorderUnits['Tablet'];
$ButtonMobileBorder  = $ButtonMobileBorderWidth['top'] . $ButtonBorderUnits['Mobile'] . ' ' . $ButtonMobileBorderWidth['right'] . $ButtonBorderUnits['Mobile'] . ' ' . $ButtonMobileBorderWidth['bottom'] . $ButtonBorderUnits['Mobile'] . ' ' . $ButtonMobileBorderWidth['left'] . $ButtonBorderUnits['Mobile'];

// border radius
$ButtonBorderRadiusUnits        = isset( $block_attributes['ButtonBorderRadiusUnits'] ) ? $block_attributes['ButtonBorderRadiusUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$ButtonDesktopBorderRadiusWidth = isset( $block_attributes['ButtonDesktopBorderRadiusWidth'] ) ? $block_attributes['ButtonDesktopBorderRadiusWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$ButtonTabBorderRadiusWidth     = isset( $block_attributes['ButtonTabBorderRadiusWidth'] ) ? $block_attributes['ButtonTabBorderRadiusWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$ButtonMobileBorderRadiusWidth  = isset( $block_attributes['ButtonMobileBorderRadiusWidth'] ) ? $block_attributes['ButtonMobileBorderRadiusWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$ButtonDesktopBorderRadius = $ButtonDesktopBorderRadiusWidth['top'] . $ButtonBorderRadiusUnits['Desktop'] . ' ' . $ButtonDesktopBorderRadiusWidth['right'] . $ButtonBorderRadiusUnits['Desktop'] . ' ' . $ButtonDesktopBorderRadiusWidth['bottom'] . $ButtonBorderRadiusUnits['Desktop'] . ' ' . $ButtonDesktopBorderRadiusWidth['left'] . $ButtonBorderRadiusUnits['Desktop'];
$ButtonTabBorderRadius     = $ButtonTabBorderRadiusWidth['top'] . $ButtonBorderRadiusUnits['Tablet'] . ' ' . $ButtonTabBorderRadiusWidth['right'] . $ButtonBorderRadiusUnits['Tablet'] . ' ' . $ButtonTabBorderRadiusWidth['bottom'] . $ButtonBorderRadiusUnits['Tablet'] . ' ' . $ButtonTabBorderRadiusWidth['left'] . $ButtonBorderRadiusUnits['Tablet'];
$ButtonMobileBorderRadius  = $ButtonMobileBorderRadiusWidth['top'] . $ButtonBorderRadiusUnits['Mobile'] . ' ' . $ButtonMobileBorderRadiusWidth['right'] . $ButtonBorderRadiusUnits['Mobile'] . ' ' . $ButtonMobileBorderRadiusWidth['bottom'] . $ButtonBorderRadiusUnits['Mobile'] . ' ' . $ButtonMobileBorderRadiusWidth['left'] . $ButtonBorderRadiusUnits['Mobile'];

// typography
$GalleryButtonFontFamily         = isset( $block_attributes['GalleryButtonFontFamily'] ) ? sanitize_text_field( $block_attributes['GalleryButtonFontFamily'] ) : 'inherit';
$GalleryButtonFontSize           = isset( $block_attributes['GalleryButtonFontSize'] ) ? $block_attributes['GalleryButtonFontSize'] : array( 'Desktop' => '', 'Tablet' => '', 'Mobile' => '' );
$GalleryButtonFontSizeUnits      = isset( $block_attributes['GalleryButtonFontSizeUnits'] ) ? $block_attributes['GalleryButtonFontSizeUnits'] : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$GalleryButtonFontWeight         = isset( $block_attributes['GalleryButtonFontWeight'] ) ? sanitize_text_field( $block_attributes['GalleryButtonFontWeight'] ) : 'normal';
$GalleryButtonFontStyle          = isset( $block_attributes['GalleryButtonFontStyle'] ) ? sanitize_text_field( $block_attributes['GalleryButtonFontStyle'] ) : 'normal';
$GalleryButtonTextTransform      = isset( $block_attributes['GalleryButtonTextTransform'] ) ? sanitize_text_field( $block_attributes['GalleryButtonTextTransform'] ) : 'none';
$GalleryButtonTextDecoration     = isset( $block_attributes['GalleryButtonTextDecoration'] ) ? sanitize_text_field( $block_attributes['GalleryButtonTextDecoration'] ) : 'none';
$GalleryButtonLetterSpacing      = isset( $block_attributes['GalleryButtonLetterSpacing'] ) ? $block_attributes['GalleryButtonLetterSpacing'] : array( 'Desktop' => '0', 'Tablet' => '0', 'Mobile' => '0' );
$GalleryButtonLineHeight         = isset( $block_attributes['GalleryButtonLineHeight'] ) ? $block_attributes['GalleryButtonLineHeight'] : array( 'Desktop' => '1.5', 'Tablet' => '1.4', 'Mobile' => '1.3' );
$GalleryButtonLetterSpacingUnits = isset( $block_attributes['GalleryButtonLetterSpacingUnits'] ) ? $block_attributes['GalleryButtonLetterSpacingUnits'] : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$GalleryButtonLineHeightUnits    = isset( $block_attributes['GalleryButtonLineHeightUnits'] ) ? $block_attributes['GalleryButtonLineHeightUnits'] : array( 'Desktop' => 'em', 'Tablet' => 'em', 'Mobile' => 'em' );

$GalleryButtonColor      = isset( $block_attributes['GalleryButtonColor'] ) ? $block_attributes['GalleryButtonColor'] : '#000000';
$GalleryButtonHoverColor = isset( $block_attributes['GalleryButtonHoverColor'] ) ? $block_attributes['GalleryButtonHoverColor'] : '#000000';
$GalleryButtonBGColor      = isset( $block_attributes['GalleryButtonBGColor'] ) ? $block_attributes['GalleryButtonBGColor'] : 'transparent';
$GalleryButtonBGHoverColor = isset( $block_attributes['GalleryButtonBGHoverColor'] ) ? $block_attributes['GalleryButtonBGHoverColor'] : 'transparent';

// Gallery Button


// Gallery Item Start
$ImageAlignment = isset( $block_attributes['ImageAlignment'] ) ? sanitize_text_field( $block_attributes['ImageAlignment'] ) : 'left';
$ImageWidth      = isset( $block_attributes['ImageWidth'] ) ? $block_attributes['ImageWidth'] : ['Desktop' => 100, 'Tablet' => 100, 'Mobile' => 100];
$ImageWidthUnits     = isset( $block_attributes['ImageWidthUnits'] ) ? $block_attributes['ImageWidthUnits'] : ['Desktop' => '%', 'Tablet' => '%', 'Mobile' => '%'];
$ImageHeight      = isset( $block_attributes['ImageHeight'] ) ? $block_attributes['ImageHeight'] : ['Desktop' => 100, 'Tablet' => 100, 'Mobile' => 100];
$ImageHeightUnits     = isset( $block_attributes['ImageHeightUnits'] ) ? $block_attributes['ImageHeightUnits'] : ['Desktop' => '%', 'Tablet' => '%', 'Mobile' => '%'];
$ImageFitCover     = isset( $block_attributes['ImageFitCover'] ) ? $block_attributes['ImageFitCover'] : true;


// Image Overlay
$ImageOverlayStyle = isset( $block_attributes['ImageOverlayStyle'] ) ? sanitize_text_field( $block_attributes['ImageOverlayStyle'] ) : 'none';
$ImageOverlayStyleType = isset( $block_attributes['ImageOverlayStyleType'] ) ? sanitize_text_field( $block_attributes['ImageOverlayStyleType'] ) : 'top';
$ImageOverlayColor = isset( $block_attributes['ImageOverlayColor'] ) ? sanitize_text_field( $block_attributes['ImageOverlayColor'] ) : 'rgba(0 0 0 / 0.7)';

// border
$imageBorder           = isset( $block_attributes['imageBorder'] ) ? $block_attributes['imageBorder'] : 'none';
$imageBorderColor      = isset( $block_attributes['imageBorderColor'] ) ? $block_attributes['imageBorderColor'] : '#000';
$imageBorderHoverColor = isset( $block_attributes['imageBorderHoverColor'] ) ? $block_attributes['imageBorderHoverColor'] : '#000';

$imageBorderUnits        = isset( $block_attributes['imageBorderUnits'] ) ? $block_attributes['imageBorderUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$imageDesktopBorderWidth = isset( $block_attributes['imageDesktopBorderWidth'] ) ? $block_attributes['imageDesktopBorderWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$imageTabBorderWidth     = isset( $block_attributes['imageTabBorderWidth'] ) ? $block_attributes['imageTabBorderWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$imageMobileBorderWidth  = isset( $block_attributes['imageMobileBorderWidth'] ) ? $block_attributes['imageMobileBorderWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$imageDesktopBorder = $imageDesktopBorderWidth['top'] . $imageBorderUnits['Desktop'] . ' ' . $imageDesktopBorderWidth['right'] . $imageBorderUnits['Desktop'] . ' ' . $imageDesktopBorderWidth['bottom'] . $imageBorderUnits['Desktop'] . ' ' . $imageDesktopBorderWidth['left'] . $imageBorderUnits['Desktop'];
$imageTabBorder     = $imageTabBorderWidth['top'] . $imageBorderUnits['Tablet'] . ' ' . $imageTabBorderWidth['right'] . $imageBorderUnits['Tablet'] . ' ' . $imageTabBorderWidth['bottom'] . $imageBorderUnits['Tablet'] . ' ' . $imageTabBorderWidth['left'] . $imageBorderUnits['Tablet'];
$imageMobileBorder  = $imageMobileBorderWidth['top'] . $imageBorderUnits['Mobile'] . ' ' . $imageMobileBorderWidth['right'] . $imageBorderUnits['Mobile'] . ' ' . $imageMobileBorderWidth['bottom'] . $imageBorderUnits['Mobile'] . ' ' . $imageMobileBorderWidth['left'] . $imageBorderUnits['Mobile'];

// border radius
$imageBorderRadiusUnits        = isset( $block_attributes['imageBorderRadiusUnits'] ) ? $block_attributes['imageBorderRadiusUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$imageDesktopBorderRadiusWidth = isset( $block_attributes['imageDesktopBorderRadiusWidth'] ) ? $block_attributes['imageDesktopBorderRadiusWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$imageTabBorderRadiusWidth     = isset( $block_attributes['imageTabBorderRadiusWidth'] ) ? $block_attributes['imageTabBorderRadiusWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$imageMobileBorderRadiusWidth  = isset( $block_attributes['imageMobileBorderRadiusWidth'] ) ? $block_attributes['imageMobileBorderRadiusWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$imageDesktopBorderRadius = $imageDesktopBorderRadiusWidth['top'] . $imageBorderRadiusUnits['Desktop'] . ' ' . $imageDesktopBorderRadiusWidth['right'] . $imageBorderRadiusUnits['Desktop'] . ' ' . $imageDesktopBorderRadiusWidth['bottom'] . $imageBorderRadiusUnits['Desktop'] . ' ' . $imageDesktopBorderRadiusWidth['left'] . $imageBorderRadiusUnits['Desktop'];
$imageTabBorderRadius     = $imageTabBorderRadiusWidth['top'] . $imageBorderRadiusUnits['Tablet'] . ' ' . $imageTabBorderRadiusWidth['right'] . $imageBorderRadiusUnits['Tablet'] . ' ' . $imageTabBorderRadiusWidth['bottom'] . $imageBorderRadiusUnits['Tablet'] . ' ' . $imageTabBorderRadiusWidth['left'] . $imageBorderRadiusUnits['Tablet'];
$imageMobileBorderRadius  = $imageMobileBorderRadiusWidth['top'] . $imageBorderRadiusUnits['Mobile'] . ' ' . $imageMobileBorderRadiusWidth['right'] . $imageBorderRadiusUnits['Mobile'] . ' ' . $imageMobileBorderRadiusWidth['bottom'] . $imageBorderRadiusUnits['Mobile'] . ' ' . $imageMobileBorderRadiusWidth['left'] . $imageBorderRadiusUnits['Mobile'];
// Gallery Item End


// Gallery Main Start
$GalleryZIndex = isset( $block_attributes['GalleryZIndex'] ) ? $block_attributes['GalleryZIndex'] : '1';
$GalleryBgColor      = isset( $block_attributes['GalleryBgColor'] ) ? $block_attributes['GalleryBgColor'] : 'transparent';
$GalleryBgHoverColor = isset( $block_attributes['GalleryBgHoverColor'] ) ? $block_attributes['GalleryBgHoverColor'] : 'transparent';

// margin
$GalleryMarginUnits   = isset( $block_attributes['GalleryMarginUnits'] ) ? $block_attributes['GalleryMarginUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$GalleryDesktopMargin = isset( $block_attributes['GalleryDesktopMargin'] ) ? $block_attributes['GalleryDesktopMargin'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$GalleryTabMargin     = isset( $block_attributes['GalleryTabMargin'] ) ? $block_attributes['GalleryTabMargin'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$GalleryMobileMargin  = isset( $block_attributes['GalleryMobileMargin'] ) ? $block_attributes['GalleryMobileMargin'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$GalleryDesktopMarginWidth = $GalleryDesktopMargin['top'] . $GalleryMarginUnits['Desktop'] . ' ' . $GalleryDesktopMargin['right'] . $GalleryMarginUnits['Desktop'] . ' ' . $GalleryDesktopMargin['bottom'] . $GalleryMarginUnits['Desktop'] . ' ' . $GalleryDesktopMargin['left'] . $GalleryMarginUnits['Desktop'];
$GalleryTabMarginWidth     = $GalleryTabMargin['top'] . $GalleryMarginUnits['Tablet'] . ' ' . $GalleryTabMargin['right'] . $GalleryMarginUnits['Tablet'] . ' ' . $GalleryTabMargin['bottom'] . $GalleryMarginUnits['Tablet'] . ' ' . $GalleryTabMargin['left'] . $GalleryMarginUnits['Tablet'];
$GalleryMobileMarginWidth  = $GalleryMobileMargin['top'] . $GalleryMarginUnits['Mobile'] . ' ' . $GalleryMobileMargin['right'] . $GalleryMarginUnits['Mobile'] . ' ' . $GalleryMobileMargin['bottom'] . $GalleryMarginUnits['Mobile'] . ' ' . $GalleryMobileMargin['left'] . $GalleryMarginUnits['Mobile'];

// Padding
$GalleryPaddingUnits   = isset( $block_attributes['GalleryPaddingUnits'] ) ? $block_attributes['GalleryPaddingUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$GalleryDesktopPadding = isset( $block_attributes['GalleryDesktopPadding'] ) ? $block_attributes['GalleryDesktopPadding'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$GalleryTabPadding     = isset( $block_attributes['GalleryTabPadding'] ) ? $block_attributes['GalleryTabPadding'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$GalleryMobilePadding  = isset( $block_attributes['GalleryMobilePadding'] ) ? $block_attributes['GalleryMobilePadding'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$GalleryDesktopPaddingWidth = $GalleryDesktopPadding['top'] . $GalleryPaddingUnits['Desktop'] . ' ' . $GalleryDesktopPadding['right'] . $GalleryPaddingUnits['Desktop'] . ' ' . $GalleryDesktopPadding['bottom'] . $GalleryPaddingUnits['Desktop'] . ' ' . $GalleryDesktopPadding['left'] . $GalleryPaddingUnits['Desktop'];
$GalleryTabPaddingWidth     = $GalleryTabPadding['top'] . $GalleryPaddingUnits['Tablet'] . ' ' . $GalleryTabPadding['right'] . $GalleryPaddingUnits['Tablet'] . ' ' . $GalleryTabPadding['bottom'] . $GalleryPaddingUnits['Tablet'] . ' ' . $GalleryTabPadding['left'] . $GalleryPaddingUnits['Tablet'];
$GalleryMobilePaddingWidth  = $GalleryMobilePadding['top'] . $GalleryPaddingUnits['Mobile'] . ' ' . $GalleryMobilePadding['right'] . $GalleryPaddingUnits['Mobile'] . ' ' . $GalleryMobilePadding['bottom'] . $GalleryPaddingUnits['Mobile'] . ' ' . $GalleryMobilePadding['left'] . $GalleryPaddingUnits['Mobile'];

// Border
$GalleryBorder           = isset( $block_attributes['GalleryBorder'] ) ? sanitize_text_field( $block_attributes['GalleryBorder'] ) : 'solid';
$GalleryBorderColor      = isset( $block_attributes['GalleryBorderColor'] ) ? $block_attributes['GalleryBorderColor'] : '#cccccc';
$GalleryBorderHoverColor = isset( $block_attributes['GalleryBorderHoverColor'] ) ? $block_attributes['GalleryBorderHoverColor'] : '#aaaaaa';

$GalleryBorderUnits   = isset( $block_attributes['GalleryBorderUnits'] ) ? $block_attributes['GalleryBorderUnits'] : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$GalleryDesktopBorderWidth = isset( $block_attributes['GalleryDesktopBorderWidth'] ) ? $block_attributes['GalleryDesktopBorderWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$GalleryTabBorderWidth  = isset( $block_attributes['GalleryTabBorderWidth'] ) ? $block_attributes['GalleryTabBorderWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$GalleryMobileBorderWidth  = isset( $block_attributes['GalleryMobileBorderWidth'] ) ? $block_attributes['GalleryMobileBorderWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$GalleryDesktopBorder = $GalleryDesktopBorderWidth['top'] . $GalleryBorderUnits['Desktop'] . ' ' . $GalleryDesktopBorderWidth['right'] . $GalleryBorderUnits['Desktop'] . ' ' . $GalleryDesktopBorderWidth['bottom'] . $GalleryBorderUnits['Desktop'] . ' ' . $GalleryDesktopBorderWidth['left'] . $GalleryBorderUnits['Desktop'];
$GalleryTabBorder  = $GalleryTabBorderWidth['top'] . $GalleryBorderUnits['Tablet'] . ' ' . $GalleryTabBorderWidth['right'] . $GalleryBorderUnits['Tablet'] . ' ' . $GalleryTabBorderWidth['bottom'] . $GalleryBorderUnits['Tablet'] . ' ' . $GalleryTabBorderWidth['left'] . $GalleryBorderUnits['Tablet'];
$GalleryMobileBorder  = $GalleryMobileBorderWidth['top'] . $GalleryBorderUnits['Mobile'] . ' ' . $GalleryMobileBorderWidth['right'] . $GalleryBorderUnits['Mobile'] . ' ' . $GalleryMobileBorderWidth['bottom'] . $GalleryBorderUnits['Mobile'] . ' ' . $GalleryMobileBorderWidth['left'] . $GalleryBorderUnits['Mobile'];

// Border Radius
$GalleryBorderRadiusUnits   = isset( $block_attributes['GalleryBorderRadiusUnits'] ) ? $block_attributes['GalleryBorderRadiusUnits'] : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$GalleryBorderRadiusDesktop = isset( $block_attributes['GalleryBorderRadiusDesktop'] ) ? $block_attributes['GalleryBorderRadiusDesktop'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$GalleryBorderRadiusTablet  = isset( $block_attributes['GalleryBorderRadiusTablet'] ) ? $block_attributes['GalleryBorderRadiusTablet'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$GalleryBorderRadiusMobile  = isset( $block_attributes['GalleryBorderRadiusMobile'] ) ? $block_attributes['GalleryBorderRadiusMobile'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$GalleryBorderRadiusDesktopWidth = $GalleryBorderRadiusDesktop['top'] . $GalleryBorderRadiusUnits['Desktop'] . ' ' . $GalleryBorderRadiusDesktop['right'] . $GalleryBorderRadiusUnits['Desktop'] . ' ' . $GalleryBorderRadiusDesktop['bottom'] . $GalleryBorderRadiusUnits['Desktop'] . ' ' . $GalleryBorderRadiusDesktop['left'] . $GalleryBorderRadiusUnits['Desktop'];
$GalleryBorderRadiusTabletWidth  = $GalleryBorderRadiusTablet['top'] . $GalleryBorderRadiusUnits['Tablet'] . ' ' . $GalleryBorderRadiusTablet['right'] . $GalleryBorderRadiusUnits['Tablet'] . ' ' . $GalleryBorderRadiusTablet['bottom'] . $GalleryBorderRadiusUnits['Tablet'] . ' ' . $GalleryBorderRadiusTablet['left'] . $GalleryBorderRadiusUnits['Tablet'];
$GalleryBorderRadiusMobileWidth  = $GalleryBorderRadiusMobile['top'] . $GalleryBorderRadiusUnits['Mobile'] . ' ' . $GalleryBorderRadiusMobile['right'] . $GalleryBorderRadiusUnits['Mobile'] . ' ' . $GalleryBorderRadiusMobile['bottom'] . $GalleryBorderRadiusUnits['Mobile'] . ' ' . $GalleryBorderRadiusMobile['left'] . $GalleryBorderRadiusUnits['Mobile'];
// Gallery Main End

// lightbox Start
$lightboxIconSwitcher     = isset( $block_attributes['lightboxIconSwitcher'] ) ? $block_attributes['lightboxIconSwitcher'] : true;
$lightboxIconSize      = isset( $block_attributes['lightboxIconSize'] ) ? $block_attributes['lightboxIconSize'] : ['Desktop' => 24, 'Tablet' => 24, 'Mobile' => 24];
$lightboxIconSizeUnits     = isset( $block_attributes['lightboxIconSizeUnits'] ) ? $block_attributes['lightboxIconSizeUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];

$lightboxColor      = isset( $block_attributes['lightboxColor'] ) ? $block_attributes['lightboxColor'] : '#000';
$lightboxHoverColor = isset( $block_attributes['lightboxHoverColor'] ) ? $block_attributes['lightboxHoverColor'] : '#000';
$lightboxBGColor      = isset( $block_attributes['lightboxBGColor'] ) ? $block_attributes['lightboxBGColor'] : '#fff';
$lightboxBGHoverColor = isset( $block_attributes['lightboxBGHoverColor'] ) ? $block_attributes['lightboxBGHoverColor'] : '#fff';

// Padding
$lightboxPaddingUnits   = isset( $block_attributes['lightboxPaddingUnits'] ) ? $block_attributes['lightboxPaddingUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$lightboxDesktopPadding = isset( $block_attributes['lightboxDesktopPadding'] ) ? $block_attributes['lightboxDesktopPadding'] : ['top' => 20, 'bottom' => 20, 'left' => 20, 'right' => 20];
$lightboxTabPadding     = isset( $block_attributes['lightboxTabPadding'] ) ? $block_attributes['lightboxTabPadding'] : ['top' => 20, 'bottom' => 20, 'left' => 20, 'right' => 20];
$lightboxMobilePadding  = isset( $block_attributes['lightboxMobilePadding'] ) ? $block_attributes['lightboxMobilePadding'] : ['top' => 20, 'bottom' => 20, 'left' => 20, 'right' => 20];

$lightboxDesktopPaddingWidth = $lightboxDesktopPadding['top'] . $lightboxPaddingUnits['Desktop'] . ' ' . $lightboxDesktopPadding['right'] . $lightboxPaddingUnits['Desktop'] . ' ' . $lightboxDesktopPadding['bottom'] . $lightboxPaddingUnits['Desktop'] . ' ' . $lightboxDesktopPadding['left'] . $lightboxPaddingUnits['Desktop'];
$lightboxTabPaddingWidth     = $lightboxTabPadding['top'] . $lightboxPaddingUnits['Tablet'] . ' ' . $lightboxTabPadding['right'] . $lightboxPaddingUnits['Tablet'] . ' ' . $lightboxTabPadding['bottom'] . $lightboxPaddingUnits['Tablet'] . ' ' . $lightboxTabPadding['left'] . $lightboxPaddingUnits['Tablet'];
$lightboxMobilePaddingWidth  = $lightboxMobilePadding['top'] . $lightboxPaddingUnits['Mobile'] . ' ' . $lightboxMobilePadding['right'] . $lightboxPaddingUnits['Mobile'] . ' ' . $lightboxMobilePadding['bottom'] . $lightboxPaddingUnits['Mobile'] . ' ' . $lightboxMobilePadding['left'] . $lightboxPaddingUnits['Mobile'];

// Border
$lightboxBorder           = isset( $block_attributes['lightboxBorder'] ) ? sanitize_text_field( $block_attributes['lightboxBorder'] ) : 'none';
$lightboxBorderColor      = isset( $block_attributes['lightboxBorderColor'] ) ? $block_attributes['lightboxBorderColor'] : '#000';
$lightboxBorderHoverColor = isset( $block_attributes['lightboxBorderHoverColor'] ) ? $block_attributes['lightboxBorderHoverColor'] : '#000';

$lightboxBorderUnits   = isset( $block_attributes['lightboxBorderUnits'] ) ? $block_attributes['lightboxBorderUnits'] : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$lightboxDesktopBorderWidth = isset( $block_attributes['lightboxDesktopBorderWidth'] ) ? $block_attributes['lightboxDesktopBorderWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$lightboxTabBorderWidth  = isset( $block_attributes['lightboxTabBorderWidth'] ) ? $block_attributes['lightboxTabBorderWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$lightboxMobileBorderWidth  = isset( $block_attributes['lightboxMobileBorderWidth'] ) ? $block_attributes['lightboxMobileBorderWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$lightboxDesktopBorder = $lightboxDesktopBorderWidth['top'] . $lightboxBorderUnits['Desktop'] . ' ' . $lightboxDesktopBorderWidth['right'] . $lightboxBorderUnits['Desktop'] . ' ' . $lightboxDesktopBorderWidth['bottom'] . $lightboxBorderUnits['Desktop'] . ' ' . $lightboxDesktopBorderWidth['left'] . $lightboxBorderUnits['Desktop'];
$lightboxTabBorder  = $lightboxTabBorderWidth['top'] . $lightboxBorderUnits['Tablet'] . ' ' . $lightboxTabBorderWidth['right'] . $lightboxBorderUnits['Tablet'] . ' ' . $lightboxTabBorderWidth['bottom'] . $lightboxBorderUnits['Tablet'] . ' ' . $lightboxTabBorderWidth['left'] . $lightboxBorderUnits['Tablet'];
$lightboxMobileBorder  = $lightboxMobileBorderWidth['top'] . $lightboxBorderUnits['Mobile'] . ' ' . $lightboxMobileBorderWidth['right'] . $lightboxBorderUnits['Mobile'] . ' ' . $lightboxMobileBorderWidth['bottom'] . $lightboxBorderUnits['Mobile'] . ' ' . $lightboxMobileBorderWidth['left'] . $lightboxBorderUnits['Mobile'];

// Border Radius
$lightboxBorderRadiusUnits   = isset( $block_attributes['lightboxBorderRadiusUnits'] ) ? $block_attributes['lightboxBorderRadiusUnits'] : array( 'Desktop' => '%', 'Tablet' => '%', 'Mobile' => '%' );
$lightboxDesktopBorderRadiusWidth = isset( $block_attributes['lightboxDesktopBorderRadiusWidth'] ) ? $block_attributes['lightboxDesktopBorderRadiusWidth'] : ['top' => 50, 'bottom' => 50, 'left' => 50, 'right' => 50];
$lightboxTabBorderRadiusWidth  = isset( $block_attributes['lightboxTabBorderRadiusWidth'] ) ? $block_attributes['lightboxTabBorderRadiusWidth'] : ['top' => 50, 'bottom' => 50, 'left' => 50, 'right' => 50];
$lightboxMobileBorderRadiusWidth  = isset( $block_attributes['lightboxMobileBorderRadiusWidth'] ) ? $block_attributes['lightboxMobileBorderRadiusWidth'] : ['top' => 50, 'bottom' => 50, 'left' => 50, 'right' => 50];

$lightboxDesktopBorderRadius = $lightboxDesktopBorderRadiusWidth['top'] . $lightboxBorderRadiusUnits['Desktop'] . ' ' . $lightboxDesktopBorderRadiusWidth['right'] . $lightboxBorderRadiusUnits['Desktop'] . ' ' . $lightboxDesktopBorderRadiusWidth['bottom'] . $lightboxBorderRadiusUnits['Desktop'] . ' ' . $lightboxDesktopBorderRadiusWidth['left'] . $lightboxBorderRadiusUnits['Desktop'];
$lightboxTabBorderRadius  = $lightboxTabBorderRadiusWidth['top'] . $lightboxBorderRadiusUnits['Tablet'] . ' ' . $lightboxTabBorderRadiusWidth['right'] . $lightboxBorderRadiusUnits['Tablet'] . ' ' . $lightboxTabBorderRadiusWidth['bottom'] . $lightboxBorderRadiusUnits['Tablet'] . ' ' . $lightboxTabBorderRadiusWidth['left'] . $lightboxBorderRadiusUnits['Tablet'];
$lightboxMobileBorderRadius  = $lightboxMobileBorderRadiusWidth['top'] . $lightboxBorderRadiusUnits['Mobile'] . ' ' . $lightboxMobileBorderRadiusWidth['right'] . $lightboxBorderRadiusUnits['Mobile'] . ' ' . $lightboxMobileBorderRadiusWidth['bottom'] . $lightboxBorderRadiusUnits['Mobile'] . ' ' . $lightboxMobileBorderRadiusWidth['left'] . $lightboxBorderRadiusUnits['Mobile'];
// lightbox End


	
	



/** Start CSS Content */
$css_content = "
    .$blockID.fb-gallery-main-wrapper {
        position: relative;
        overflow: hidden;
        " . ($GalleryBgColor ? "background-color: $GalleryBgColor;" : "") . "
        " . ($GalleryDesktopPaddingWidth ? "padding: $GalleryDesktopPaddingWidth;" : "") . "
        " . ($GalleryDesktopMarginWidth ? "margin: $GalleryDesktopMarginWidth;" : "") . "
        " . ($GalleryBorder ? "border-style: $GalleryBorder;" : "") . "
        " . ($GalleryDesktopBorder ? "border-width: $GalleryDesktopBorder;" : "") . "
        " . ($GalleryBorderColor ? "border-color: $GalleryBorderColor;" : "") . "
        " . ($GalleryBorderRadiusDesktopWidth ? "border-radius: $GalleryBorderRadiusDesktopWidth;" : "") . "
        " . ($GalleryZIndex ? "z-index: $GalleryZIndex;" : "") . "
        transition: background-color 0.3s ease, border-color 0.3s ease;
    }
    
    .$blockID.fb-gallery-main-wrapper:hover {
        " . ($GalleryBorderHoverColor ? "border-color: $GalleryBorderHoverColor;" : "") . "
        " . ($GalleryBgHoverColor ? "background-color: $GalleryBgHoverColor;" : "") . "
        transition: background-color 0.3s ease, border-color 0.3s ease;
    }
    
    .$blockID.fb-gallery-main-wrapper .fb-image-gallery-items {
        display: grid;
        " . ($GalleryColumnNumberDesktop ? "grid-template-columns: repeat($GalleryColumnNumberDesktop, 1fr);" : "") . "
        " . (isset($GalleryImageGap['Desktop'], $GalleryImageGapUnits['Desktop']) ? "gap: {$GalleryImageGap['Desktop']}{$GalleryImageGapUnits['Desktop']};" : "") . "
        " . (isset($GalleryItemHeight['Desktop'], $GalleryItemHeightUnits['Desktop']) ? "grid-auto-rows: {$GalleryItemHeight['Desktop']}{$GalleryItemHeightUnits['Desktop']};" : "") . "
    }
    
    .$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        " . ($imageBorder ? "border-style: $imageBorder;" : "") . "
        " . ($imageDesktopBorder ? "border-width: $imageDesktopBorder;" : "") . "
        " . ($imageBorderColor ? "border-color: $imageBorderColor;" : "") . "
        " . ($imageDesktopBorderRadius ? "border-radius: $imageDesktopBorderRadius;" : "") . "
    }
    
    .$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {
        position: absolute;
        top: 0;
        " . ($ImageAlignment === 'left' ? "left: 0;" : "") . "
        " . ($ImageAlignment === 'right' ? "right: 0; left: unset;" : "") . "
        " . ($ImageAlignment === 'center' ? "left: 50%; transform: translateX(-50%);" : "") . "
        " . (isset($ImageWidth['Desktop'], $ImageWidthUnits['Desktop']) ? "width: {$ImageWidth['Desktop']}{$ImageWidthUnits['Desktop']};" : "") . "
        " . (isset($ImageHeight['Desktop'], $ImageHeightUnits['Desktop']) ? "height: {$ImageHeight['Desktop']}{$ImageHeightUnits['Desktop']};" : "") . "
        " . ($ImageFitCover ? "object-fit: cover;" : "") . "
        " . ($ImageOverlayStyle === 'black_white' ? "filter: grayscale(100%);" : "") . "
        transition: all 0.3s ease-in-out;
    }
    
    .$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-gallery-image {
        " . ($ImageOverlayStyle === 'black_white' ? "filter: grayscale(0);" : "") . "
        transition: all 0.3s ease-in-out;
    }
    
    @media only screen and (max-width: 1024px) {
		.$blockID.fb-gallery-main-wrapper {
			" . ($GalleryTabPaddingWidth ? "padding: $GalleryTabPaddingWidth;" : "") . "
			" . ($GalleryTabMarginWidth ? "margin: $GalleryTabMarginWidth;" : "") . "
			" . ($GalleryTabBorder ? "border-width: $GalleryTabBorder;" : "") . "
			" . ($GalleryBorderRadiusTabletWidth ? "border-radius: $GalleryBorderRadiusTabletWidth;" : "") . "
		}
		
		.$blockID.fb-gallery-main-wrapper .fb-image-gallery-items {
			display: grid;
			" . ($GalleryColumnNumberTablet ? "grid-template-columns: repeat($GalleryColumnNumberTablet, 1fr);" : "") . "
			" . (isset($GalleryImageGap['Tablet'], $GalleryImageGapUnits['Tablet']) ? "gap: {$GalleryImageGap['Tablet']}{$GalleryImageGapUnits['Tablet']};" : "") . "
			" . (isset($GalleryItemHeight['Tablet'], $GalleryItemHeightUnits['Tablet']) ? "grid-auto-rows: {$GalleryItemHeight['Tablet']}{$GalleryItemHeightUnits['Tablet']};" : "") . "
		}
		
		.$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item {
			" . ($imageTabBorder ? "border-width: $imageTabBorder;" : "") . "
			" . ($imageTabBorderRadius ? "border-radius: $imageTabBorderRadius;" : "") . "
		}
		
		.$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {
			" . (isset($ImageWidth['Tablet'], $ImageWidthUnits['Tablet']) ? "width: {$ImageWidth['Tablet']}{$ImageWidthUnits['Tablet']};" : "") . "
			" . (isset($ImageHeight['Tablet'], $ImageHeightUnits['Tablet']) ? "height: {$ImageHeight['Tablet']}{$ImageHeightUnits['Tablet']};" : "") . "
		}
	}
    
    @media only screen and (max-width: 767px) {
        .$blockID.fb-gallery-main-wrapper {
			" . ($GalleryMobilePaddingWidth ? "padding: $GalleryMobilePaddingWidth;" : "") . "
			" . ($GalleryMobileMarginWidth ? "margin: $GalleryMobileMarginWidth;" : "") . "
			" . ($GalleryMobileBorder ? "border-width: $GalleryMobileBorder;" : "") . "
			" . ($GalleryBorderRadiusMobileWidth ? "border-radius: $GalleryBorderRadiusMobileWidth;" : "") . "
		}
		
		.$blockID.fb-gallery-main-wrapper .fb-image-gallery-items {
			display: grid;
			" . ($GalleryColumnNumberMobile ? "grid-template-columns: repeat($GalleryColumnNumberMobile, 1fr);" : "") . "
			" . (isset($GalleryImageGap['Mobile'], $GalleryImageGapUnits['Mobile']) ? "gap: {$GalleryImageGap['Mobile']}{$GalleryImageGapUnits['Mobile']};" : "") . "
			" . (isset($GalleryItemHeight['Mobile'], $GalleryItemHeightUnits['Mobile']) ? "grid-auto-rows: {$GalleryItemHeight['Mobile']}{$GalleryItemHeightUnits['Mobile']};" : "") . "
		}
		
		.$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item {
			" . ($imageMobileBorder ? "border-width: $imageMobileBorder;" : "") . "
			" . ($imageMobileBorderRadius ? "border-radius: $imageMobileBorderRadius;" : "") . "
		}
		
		.$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {
			" . (isset($ImageWidth['Mobile'], $ImageWidthUnits['Mobile']) ? "width: {$ImageWidth['Mobile']}{$ImageWidthUnits['Mobile']};" : "") . "
			" . (isset($ImageHeight['Mobile'], $ImageHeightUnits['Mobile']) ? "height: {$ImageHeight['Mobile']}{$ImageHeightUnits['Mobile']};" : "") . "
		}
    }

    " . ($ImageOverlayStyle === 'overlay' ? "
        .$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {
            " . ($ImageOverlayStyleType === 'zoominout' ? "transform: scale(1.001);" : "") . "
            transition: all 0.3s ease-in-out;
        }
        .$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-gallery-image {
            " . ($ImageOverlayStyleType === 'zoominout' ? "transform: scale(1.05);" : "") . "
            transition: all 0.3s ease-in-out;
        }
        
        .$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item .fb-image-overlay {
            position: absolute;
            content: '';
            " . ( $ImageOverlayStyleType === 'top' ? "top: -100%;" : "") . "
			" . ( $ImageOverlayStyleType === 'top' ? "left: 0;" : "") . "
			" . ( $ImageOverlayStyleType === 'bottom' ? "top: 100%;" : "") . "
			" . ( $ImageOverlayStyleType === 'bottom' ? "left: 0;" : "") . "
			" . ( $ImageOverlayStyleType === 'left' ? "top: 0;" : "") . "
			" . ( $ImageOverlayStyleType === 'left' ? "left: -100%;" : "") . "
			" . ( $ImageOverlayStyleType === 'right' ? "top: 0;" : "") . "
			" . ( $ImageOverlayStyleType === 'right' ? "left: 100%;" : "") . "
			" . ( $ImageOverlayColor ? "background-color: $ImageOverlayColor;" : "") . "
            width: 100%;
            height: 100%;
            visibility: hidden;
            opacity: 0;
            transition: all 0.3s ease-in-out;
        }
        
        .$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-overlay {
			" . ( $ImageOverlayStyleType === 'top' ? "top: 0;": "") . "
			" . ( $ImageOverlayStyleType === 'bottom' ? "top: 0;": "") . "
			" . ( $ImageOverlayStyleType === 'left' ? "left: 0;": "") . "
			" . ( $ImageOverlayStyleType === 'right' ? "left: 0;": "") . "
            visibility: visible;
            opacity: 1;
            transition: all 0.3s ease-in-out;
        }

    " : "") . "

	" . ($GalleryButtonSwitcher === true ? "
        .$blockID.fb-gallery-main-wrapper .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper {
            display: flex;
            " . ($GalleryButtonAlignment ? "justify-content: $GalleryButtonAlignment;" : "") . "
        }
        .$blockID.fb-gallery-main-wrapper .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {
            " . ($ButtonDesktopPaddingWidth ? "padding: $ButtonDesktopPaddingWidth;" : "") . "
            " . ($ButtonDesktopMarginWidth ? "margin: $ButtonDesktopMarginWidth;" : "") . "
            " . ($ButtonBorder ? "border-style: $ButtonBorder;" : "") . "
            " . ($ButtonDesktopBorder ? "border-width: $ButtonDesktopBorder;" : "") . "
            " . ($ButtonBorderColor ? "border-color: $ButtonBorderColor;" : "") . "
            " . ($ButtonDesktopBorderRadius ? "border-radius: $ButtonDesktopBorderRadius;" : "") . "
            " . ($GalleryButtonFontFamily ? "font-family: $GalleryButtonFontFamily;" : "") . "
            " . ($GalleryButtonFontSize['Desktop'] && $GalleryButtonFontSizeUnits['Desktop'] ? "font-size: {$GalleryButtonFontSize['Desktop']}{$GalleryButtonFontSizeUnits['Desktop']};" : "") . "
            " . ($GalleryButtonFontWeight ? "font-weight: $GalleryButtonFontWeight;" : "") . "
            " . ($GalleryButtonFontStyle ? "font-style: $GalleryButtonFontStyle;" : "") . "
            " . ($GalleryButtonTextTransform ? "text-transform: $GalleryButtonTextTransform;" : "") . "
            " . ($GalleryButtonTextDecoration ? "text-decoration: $GalleryButtonTextDecoration;" : "") . "
            " . ($GalleryButtonLetterSpacing['Desktop'] && $GalleryButtonLetterSpacingUnits['Desktop'] ? "letter-spacing: {$GalleryButtonLetterSpacing['Desktop']}{$GalleryButtonLetterSpacingUnits['Desktop']};" : "") . "
            " . ($GalleryButtonLineHeight['Desktop'] && $GalleryButtonLineHeightUnits['Desktop'] ? "line-height: {$GalleryButtonLineHeight['Desktop']}{$GalleryButtonLineHeightUnits['Desktop']};" : "") . "
            " . ($GalleryButtonColor ? "color: $GalleryButtonColor;" : "") . "
            " . ($GalleryButtonBGColor ? "background-color: $GalleryButtonBGColor;" : "") . "
            transition: all .3s ease-in-out;
        }
        .$blockID.fb-gallery-main-wrapper .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn:hover {
            " . ($ButtonBorderHoverColor ? "border-color: $ButtonBorderHoverColor;" : "") . "
            " . ($GalleryButtonHoverColor ? "color: $GalleryButtonHoverColor;" : "") . "
            " . ($GalleryButtonBGHoverColor ? "background-color: $GalleryButtonBGHoverColor;" : "") . "
            transition: all .3s ease-in-out;
        }
			
		@media only screen and (max-width: 1024px) {
			.$blockID.fb-gallery-main-wrapper .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {
				" . ($ButtonTabPaddingWidth ? "padding: $ButtonTabPaddingWidth;" : "") . "
				" . ($ButtonTabMarginWidth ? "margin: $ButtonTabMarginWidth;" : "") . "
				" . ($ButtonTabBorder ? "border-width: $ButtonTabBorder;" : "") . "
				" . ($ButtonTabBorderRadius ? "border-radius: $ButtonTabBorderRadius;" : "") . "
				" . ($GalleryButtonFontSize['Tablet'] && $GalleryButtonFontSizeUnits['Tablet'] ? "font-size: {$GalleryButtonFontSize['Tablet']}{$GalleryButtonFontSizeUnits['Tablet']};" : "") . "
				" . ($GalleryButtonLetterSpacing['Tablet'] && $GalleryButtonLetterSpacingUnits['Tablet'] ? "letter-spacing: {$GalleryButtonLetterSpacing['Tablet']}{$GalleryButtonLetterSpacingUnits['Tablet']};" : "") . "
				" . ($GalleryButtonLineHeight['Tablet'] && $GalleryButtonLineHeightUnits['Tablet'] ? "line-height: {$GalleryButtonLineHeight['Tablet']}{$GalleryButtonLineHeightUnits['Tablet']};" : "") . "
			}
		}
		@media only screen and (max-width: 767px) {
			.$blockID.fb-gallery-main-wrapper .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {
				" . ($ButtonMobilePaddingWidth ? "padding: $ButtonMobilePaddingWidth;" : "") . "
				" . ($ButtonMobileMarginWidth ? "margin: $ButtonMobileMarginWidth;" : "") . "
				" . ($ButtonMobileBorder ? "border-width: $ButtonMobileBorder;" : "") . "
				" . ($ButtonMobileBorderRadius ? "border-radius: $ButtonMobileBorderRadius;" : "") . "
				" . ($GalleryButtonFontSize['Mobile'] && $GalleryButtonFontSizeUnits['Mobile'] ? "font-size: {$GalleryButtonFontSize['Mobile']}{$GalleryButtonFontSizeUnits['Mobile']};" : "") . "
				" . ($GalleryButtonLetterSpacing['Mobile'] && $GalleryButtonLetterSpacingUnits['Mobile'] ? "letter-spacing: {$GalleryButtonLetterSpacing['Mobile']}{$GalleryButtonLetterSpacingUnits['Mobile']};" : "") . "
				" . ($GalleryButtonLineHeight['Mobile'] && $GalleryButtonLineHeightUnits['Mobile'] ? "line-height: {$GalleryButtonLineHeight['Mobile']}{$GalleryButtonLineHeightUnits['Mobile']};" : "") . "
			}
		}
    " : "") . "

	" . ($lightboxIconSwitcher === true ? "
        .$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            " . ($lightboxDesktopPaddingWidth ? "padding: $lightboxDesktopPaddingWidth;" : "") . "
            " . ($lightboxBorder ? "border-style: $lightboxBorder;" : "") . "
            " . ($lightboxDesktopBorder ? "border-width: $lightboxDesktopBorder;" : "") . "
            " . ($lightboxBorderColor ? "border-color: $lightboxBorderColor;" : "") . "
            " . ($lightboxDesktopBorderRadius ? "border-radius: $lightboxDesktopBorderRadius;" : "") . "
            " . ($lightboxBGColor ? "background-color: $lightboxBGColor;" : "") . "
            visibility: hidden;
            opacity: 0;
            transition: all 0.3s ease-in-out;
        }
        .$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item:hover .fb-lightbox-icon-wrapper {
            visibility: visible;
            opacity: 1;
            transition: all 0.3s ease-in-out;
        }
        .$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item:hover .fb-lightbox-icon-wrapper:hover {
            " . ($lightboxBorderHoverColor ? "border-color: $lightboxBorderHoverColor;" : "") . "
            " . ($lightboxBGHoverColor ? "background-color: $lightboxBGHoverColor;" : "") . "
            transition: all 0.3s ease-in-out;
        }
        .$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper .fb-lightbox-icon {
            " . (isset($lightboxIconSize['Desktop'], $lightboxIconSizeUnits['Desktop']) ? "width: {$lightboxIconSize['Desktop']}{$lightboxIconSizeUnits['Desktop']};" : "") . "
			" . (isset($lightboxIconSize['Desktop'], $lightboxIconSizeUnits['Desktop']) ? "height: {$lightboxIconSize['Desktop']}{$lightboxIconSizeUnits['Desktop']};" : "") . "
            " . ($lightboxColor ? "fill: $lightboxColor;" : "") . "
            transition: all 0.3s ease-in-out;
        }
        .$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper:hover .fb-lightbox-icon {
            " . ($lightboxColor ? "fill: $lightboxHoverColor;" : "") . "
            transition: all 0.3s ease-in-out;
        }
        .$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper .fb-lightbox-icon svg {
            width: 100%;
            height: 100%;
        }
			
		@media only screen and (max-width: 1024px) {
            .$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper {
                " . ($lightboxTabPaddingWidth ? "padding: $lightboxTabPaddingWidth;" : "") . "
                " . ($lightboxTabBorder ? "border-width: $lightboxTabBorder;" : "") . "
                " . ($lightboxTabBorderRadius ? "border-radius: $lightboxTabBorderRadius;" : "") . "
            }
            .$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper .fb-lightbox-icon {
                " . (isset($lightboxIconSize['Tablet'], $lightboxIconSizeUnits['Tablet']) ? "width: {$lightboxIconSize['Tablet']}{$lightboxIconSizeUnits['Tablet']};" : "") . "
                " . (isset($lightboxIconSize['Tablet'], $lightboxIconSizeUnits['Tablet']) ? "height: {$lightboxIconSize['Tablet']}{$lightboxIconSizeUnits['Tablet']};" : "") . "
                transition: all 0.3s ease-in-out;
            }
		}
		@media only screen and (max-width: 767px) {
            .$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper {
                " . ($lightboxMobilePaddingWidth ? "padding: $lightboxMobilePaddingWidth;" : "") . "
                " . ($lightboxMobileBorder ? "border-width: $lightboxMobileBorder;" : "") . "
                " . ($lightboxMobileBorderRadius ? "border-radius: $lightboxMobileBorderRadius;" : "") . "
            }
            .$blockID.fb-gallery-main-wrapper .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper .fb-lightbox-icon {
                " . (isset($lightboxIconSize['Mobile'], $lightboxIconSizeUnits['Mobile']) ? "width: {$lightboxIconSize['Mobile']}{$lightboxIconSizeUnits['Mobile']};" : "") . "
			    " . (isset($lightboxIconSize['Mobile'], $lightboxIconSizeUnits['Mobile']) ? "height: {$lightboxIconSize['Mobile']}{$lightboxIconSizeUnits['Mobile']};" : "") . "
                transition: all 0.3s ease-in-out;
            }
		}
    " : "") . "
";


/** End CSS Content */

/** Enqueue style for frontend */
EnqueueBlocksCss::enqueue_block_asset( $css_content, $single_block['slug'], $blockID );
/** End Enqueue style for frontend */
