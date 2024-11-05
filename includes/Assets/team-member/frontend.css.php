<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;


// Extract the block attributes
$block_attributes = $block['attrs'];
$blockID          = isset( $block_attributes['blockID'] ) ? sanitize_text_field( $block_attributes['blockID'] ) : '';
$deviceType       = isset( $block_attributes['deviceType'] ) ? sanitize_text_field( $block_attributes['deviceType'] ) : 'Desktop';


// teamMember Main Start
$teamMemberZIndex = isset( $block_attributes['teamMemberZIndex'] ) ? $block_attributes['teamMemberZIndex'] : '1';
$teamMemberBgColor      = isset( $block_attributes['teamMemberBgColor'] ) ? $block_attributes['teamMemberBgColor'] : 'transparent';
$teamMemberBgHoverColor = isset( $block_attributes['teamMemberBgHoverColor'] ) ? $block_attributes['teamMemberBgHoverColor'] : 'transparent';

// margin
$teamMemberMarginUnits   = isset( $block_attributes['teamMemberMarginUnits'] ) ? $block_attributes['teamMemberMarginUnits'] : 'px';
$teamMemberDesktopMargin = isset( $block_attributes['teamMemberDesktopMargin'] ) ? $block_attributes['teamMemberDesktopMargin'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberTabMargin     = isset( $block_attributes['teamMemberTabMargin'] ) ? $block_attributes['teamMemberTabMargin'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberMobileMargin  = isset( $block_attributes['teamMemberMobileMargin'] ) ? $block_attributes['teamMemberMobileMargin'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$teamMemberDesktopMarginWidth = $teamMemberDesktopMargin['top'] . $teamMemberMarginUnits . ' ' . $teamMemberDesktopMargin['right'] . $teamMemberMarginUnits . ' ' . $teamMemberDesktopMargin['bottom'] . $teamMemberMarginUnits . ' ' . $teamMemberDesktopMargin['left'] . $teamMemberMarginUnits;
$teamMemberTabMarginWidth     = $teamMemberTabMargin['top'] . $teamMemberMarginUnits . ' ' . $teamMemberTabMargin['right'] . $teamMemberMarginUnits . ' ' . $teamMemberTabMargin['bottom'] . $teamMemberMarginUnits . ' ' . $teamMemberTabMargin['left'] . $teamMemberMarginUnits;
$teamMemberMobileMarginWidth  = $teamMemberMobileMargin['top'] . $teamMemberMarginUnits . ' ' . $teamMemberMobileMargin['right'] . $teamMemberMarginUnits . ' ' . $teamMemberMobileMargin['bottom'] . $teamMemberMarginUnits . ' ' . $teamMemberMobileMargin['left'] . $teamMemberMarginUnits;

// Padding
$teamMemberPaddingUnits   = isset( $block_attributes['teamMemberPaddingUnits'] ) ? $block_attributes['teamMemberPaddingUnits'] : 'px';
$teamMemberDesktopPadding = isset( $block_attributes['teamMemberDesktopPadding'] ) ? $block_attributes['teamMemberDesktopPadding'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberTabPadding     = isset( $block_attributes['teamMemberTabPadding'] ) ? $block_attributes['teamMemberTabPadding'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberMobilePadding  = isset( $block_attributes['teamMemberMobilePadding'] ) ? $block_attributes['teamMemberMobilePadding'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$teamMemberDesktopPaddingWidth = $teamMemberDesktopPadding['top'] . $teamMemberPaddingUnits . ' ' . $teamMemberDesktopPadding['right'] . $teamMemberPaddingUnits . ' ' . $teamMemberDesktopPadding['bottom'] . $teamMemberPaddingUnits . ' ' . $teamMemberDesktopPadding['left'] . $teamMemberPaddingUnits;
$teamMemberTabPaddingWidth     = $teamMemberTabPadding['top'] . $teamMemberPaddingUnits . ' ' . $teamMemberTabPadding['right'] . $teamMemberPaddingUnits . ' ' . $teamMemberTabPadding['bottom'] . $teamMemberPaddingUnits . ' ' . $teamMemberTabPadding['left'] . $teamMemberPaddingUnits;
$teamMemberMobilePaddingWidth  = $teamMemberMobilePadding['top'] . $teamMemberPaddingUnits . ' ' . $teamMemberMobilePadding['right'] . $teamMemberPaddingUnits . ' ' . $teamMemberMobilePadding['bottom'] . $teamMemberPaddingUnits . ' ' . $teamMemberMobilePadding['left'] . $teamMemberPaddingUnits;

// Border
$teamMemberBorder           = isset( $block_attributes['teamMemberBorder'] ) ? sanitize_text_field( $block_attributes['teamMemberBorder'] ) : 'solid';
$teamMemberBorderColor      = isset( $block_attributes['teamMemberBorderColor'] ) ? $block_attributes['teamMemberBorderColor'] : '#cccccc';
$teamMemberBorderHoverColor = isset( $block_attributes['teamMemberBorderHoverColor'] ) ? $block_attributes['teamMemberBorderHoverColor'] : '#aaaaaa';

$teamMemberBorderUnits   = isset( $block_attributes['teamMemberBorderUnits'] ) ? $block_attributes['teamMemberBorderUnits'] : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$teamMemberDesktopBorderWidth = isset( $block_attributes['teamMemberDesktopBorderWidth'] ) ? $block_attributes['teamMemberDesktopBorderWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberTabBorderWidth  = isset( $block_attributes['teamMemberTabBorderWidth'] ) ? $block_attributes['teamMemberTabBorderWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberMobileBorderWidth  = isset( $block_attributes['teamMemberMobileBorderWidth'] ) ? $block_attributes['teamMemberMobileBorderWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$teamMemberDesktopBorder = $teamMemberDesktopBorderWidth['top'] . $teamMemberBorderUnits['Desktop'] . ' ' . $teamMemberDesktopBorderWidth['right'] . $teamMemberBorderUnits['Desktop'] . ' ' . $teamMemberDesktopBorderWidth['bottom'] . $teamMemberBorderUnits['Desktop'] . ' ' . $teamMemberDesktopBorderWidth['left'] . $teamMemberBorderUnits['Desktop'];
$teamMemberTabBorder  = $teamMemberTabBorderWidth['top'] . $teamMemberBorderUnits['Tablet'] . ' ' . $teamMemberTabBorderWidth['right'] . $teamMemberBorderUnits['Tablet'] . ' ' . $teamMemberTabBorderWidth['bottom'] . $teamMemberBorderUnits['Tablet'] . ' ' . $teamMemberTabBorderWidth['left'] . $teamMemberBorderUnits['Tablet'];
$teamMemberMobileBorder  = $teamMemberMobileBorderWidth['top'] . $teamMemberBorderUnits['Mobile'] . ' ' . $teamMemberMobileBorderWidth['right'] . $teamMemberBorderUnits['Mobile'] . ' ' . $teamMemberMobileBorderWidth['bottom'] . $teamMemberBorderUnits['Mobile'] . ' ' . $teamMemberMobileBorderWidth['left'] . $teamMemberBorderUnits['Mobile'];

// Border Radius
$teamMemberBorderRadiusUnits   = isset( $block_attributes['teamMemberBorderRadiusUnits'] ) ? $block_attributes['teamMemberBorderRadiusUnits'] : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$teamMemberDesktopBorderRadiusWidth = isset( $block_attributes['teamMemberDesktopBorderRadiusWidth'] ) ? $block_attributes['teamMemberDesktopBorderRadiusWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberTabBorderRadiusWidth  = isset( $block_attributes['teamMemberTabBorderRadiusWidth'] ) ? $block_attributes['teamMemberTabBorderRadiusWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberMobileBorderRadiusWidth  = isset( $block_attributes['teamMemberMobileBorderRadiusWidth'] ) ? $block_attributes['teamMemberMobileBorderRadiusWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$teamMemberDesktopBorderRadius = $teamMemberDesktopBorderRadiusWidth['top'] . $teamMemberBorderRadiusUnits['Desktop'] . ' ' . $teamMemberDesktopBorderRadiusWidth['right'] . $teamMemberBorderRadiusUnits['Desktop'] . ' ' . $teamMemberDesktopBorderRadiusWidth['bottom'] . $teamMemberBorderRadiusUnits['Desktop'] . ' ' . $teamMemberDesktopBorderRadiusWidth['left'] . $teamMemberBorderRadiusUnits['Desktop'];
$teamMemberTabBorderRadius  = $teamMemberTabBorderRadiusWidth['top'] . $teamMemberBorderRadiusUnits['Tablet'] . ' ' . $teamMemberTabBorderRadiusWidth['right'] . $teamMemberBorderRadiusUnits['Tablet'] . ' ' . $teamMemberTabBorderRadiusWidth['bottom'] . $teamMemberBorderRadiusUnits['Tablet'] . ' ' . $teamMemberTabBorderRadiusWidth['left'] . $teamMemberBorderRadiusUnits['Tablet'];
$teamMemberMobileBorderRadius  = $teamMemberMobileBorderRadiusWidth['top'] . $teamMemberBorderRadiusUnits['Mobile'] . ' ' . $teamMemberMobileBorderRadiusWidth['right'] . $teamMemberBorderRadiusUnits['Mobile'] . ' ' . $teamMemberMobileBorderRadiusWidth['bottom'] . $teamMemberBorderRadiusUnits['Mobile'] . ' ' . $teamMemberMobileBorderRadiusWidth['left'] . $teamMemberBorderRadiusUnits['Mobile'];
// teamMember Main End

// teamMember Image Start
$teamMemberImageWidth      = isset( $block_attributes['teamMemberImageWidth'] ) ? $block_attributes['teamMemberImageWidth'] : ['Desktop' => 100, 'Tablet' => 100, 'Mobile' => 100];
$teamMemberImageWidthUnits     = isset( $block_attributes['teamMemberImageWidthUnits'] ) ? $block_attributes['teamMemberImageWidthUnits'] : ['Desktop' => '%', 'Tablet' => '%', 'Mobile' => '%'];
$teamMemberImageHeight      = isset( $block_attributes['teamMemberImageHeight'] ) ? $block_attributes['teamMemberImageHeight'] : ['Desktop' => 410, 'Tablet' => 410, 'Mobile' => 410];
$teamMemberImageHeightUnits     = isset( $block_attributes['teamMemberImageHeightUnits'] ) ? $block_attributes['teamMemberImageHeightUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$teamMemberImageBGColor      = isset( $block_attributes['teamMemberImageBGColor'] ) ? $block_attributes['teamMemberImageBGColor'] : '#0000005e';
$teamMemberImageBGHoverColor = isset( $block_attributes['teamMemberImageBGHoverColor'] ) ? $block_attributes['teamMemberImageBGHoverColor'] : '#0000005e';


// margin
$teamMemberImageMarginUnits   = isset( $block_attributes['teamMemberImageMarginUnits'] ) ? $block_attributes['teamMemberImageMarginUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$teamMemberImageMarginDesktop = isset( $block_attributes['teamMemberImageMarginDesktop'] ) ? $block_attributes['teamMemberImageMarginDesktop'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberImageMarginTab     = isset( $block_attributes['teamMemberImageMarginTab'] ) ? $block_attributes['teamMemberImageMarginTab'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberImageMarginMobile  = isset( $block_attributes['teamMemberImageMarginMobile'] ) ? $block_attributes['teamMemberImageMarginMobile'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$teamMemberImageMarginDesktopWidth = $teamMemberImageMarginDesktop['top'] . $teamMemberImageMarginUnits['Desktop'] . ' ' . $teamMemberImageMarginDesktop['right'] . $teamMemberImageMarginUnits['Desktop'] . ' ' . $teamMemberImageMarginDesktop['bottom'] . $teamMemberImageMarginUnits['Desktop'] . ' ' . $teamMemberImageMarginDesktop['left'] . $teamMemberImageMarginUnits['Desktop'];
$teamMemberImageMarginTabWidth     = $teamMemberImageMarginTab['top'] . $teamMemberImageMarginUnits['Tablet'] . ' ' . $teamMemberImageMarginTab['right'] . $teamMemberImageMarginUnits['Tablet'] . ' ' . $teamMemberImageMarginTab['bottom'] . $teamMemberImageMarginUnits['Tablet'] . ' ' . $teamMemberImageMarginTab['left'] . $teamMemberImageMarginUnits['Tablet'];
$teamMemberImageMarginMobileWidth  = $teamMemberImageMarginMobile['top'] . $teamMemberImageMarginUnits['Mobile'] . ' ' . $teamMemberImageMarginMobile['right'] . $teamMemberImageMarginUnits['Mobile'] . ' ' . $teamMemberImageMarginMobile['bottom'] . $teamMemberImageMarginUnits['Mobile'] . ' ' . $teamMemberImageMarginMobile['left'] . $teamMemberImageMarginUnits['Mobile'];


// border
$teamMemberImageBorder           = isset( $block_attributes['teamMemberImageBorder'] ) ? $block_attributes['teamMemberImageBorder'] : 'none';
$teamMemberImageBorderColor      = isset( $block_attributes['teamMemberImageBorderColor'] ) ? $block_attributes['teamMemberImageBorderColor'] : '#000';
$teamMemberImageBorderHoverColor = isset( $block_attributes['teamMemberImageBorderHoverColor'] ) ? $block_attributes['teamMemberImageBorderHoverColor'] : '#000';

$teamMemberImageBorderUnits        = isset( $block_attributes['teamMemberImageBorderUnits'] ) ? $block_attributes['teamMemberImageBorderUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$teamMemberImageBorderDesktop = isset( $block_attributes['teamMemberImageBorderDesktop'] ) ? $block_attributes['teamMemberImageBorderDesktop'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberImageBorderTab     = isset( $block_attributes['teamMemberImageBorderTab'] ) ? $block_attributes['teamMemberImageBorderTab'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberImageBorderMobile  = isset( $block_attributes['teamMemberImageBorderMobile'] ) ? $block_attributes['teamMemberImageBorderMobile'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$teamMemberImageBorderDesktopWidth = $teamMemberImageBorderDesktop['top'] . $teamMemberImageBorderUnits['Desktop'] . ' ' . $teamMemberImageBorderDesktop['right'] . $teamMemberImageBorderUnits['Desktop'] . ' ' . $teamMemberImageBorderDesktop['bottom'] . $teamMemberImageBorderUnits['Desktop'] . ' ' . $teamMemberImageBorderDesktop['left'] . $teamMemberImageBorderUnits['Desktop'];
$teamMemberImageBorderTabWidth     = $teamMemberImageBorderTab['top'] . $teamMemberImageBorderUnits['Tablet'] . ' ' . $teamMemberImageBorderTab['right'] . $teamMemberImageBorderUnits['Tablet'] . ' ' . $teamMemberImageBorderTab['bottom'] . $teamMemberImageBorderUnits['Tablet'] . ' ' . $teamMemberImageBorderTab['left'] . $teamMemberImageBorderUnits['Tablet'];
$teamMemberImageBorderMobileWidth  = $teamMemberImageBorderMobile['top'] . $teamMemberImageBorderUnits['Mobile'] . ' ' . $teamMemberImageBorderMobile['right'] . $teamMemberImageBorderUnits['Mobile'] . ' ' . $teamMemberImageBorderMobile['bottom'] . $teamMemberImageBorderUnits['Mobile'] . ' ' . $teamMemberImageBorderMobile['left'] . $teamMemberImageBorderUnits['Mobile'];

// border radius
$teamMemberImageBorderRadiusUnits        = isset( $block_attributes['teamMemberImageBorderRadiusUnits'] ) ? $block_attributes['teamMemberImageBorderRadiusUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$teamMemberImageBorderRadiusDesktop = isset( $block_attributes['teamMemberImageBorderRadiusDesktop'] ) ? $block_attributes['teamMemberImageBorderRadiusDesktop'] : ['top' => 8, 'bottom' => 8, 'left' => 8, 'right' => 8];
$teamMemberImageBorderRadiusTab     = isset( $block_attributes['teamMemberImageBorderRadiusTab'] ) ? $block_attributes['teamMemberImageBorderRadiusTab'] : ['top' => 8, 'bottom' => 8, 'left' => 8, 'right' => 8];
$teamMemberImageBorderRadiusMobile  = isset( $block_attributes['teamMemberImageBorderRadiusMobile'] ) ? $block_attributes['teamMemberImageBorderRadiusMobile'] : ['top' => 8, 'bottom' => 8, 'left' => 8, 'right' => 8];

$teamMemberImageBorderRadiusDesktopWidth = $teamMemberImageBorderRadiusDesktop['top'] . $teamMemberImageBorderRadiusUnits['Desktop'] . ' ' . $teamMemberImageBorderRadiusDesktop['right'] . $teamMemberImageBorderRadiusUnits['Desktop'] . ' ' . $teamMemberImageBorderRadiusDesktop['bottom'] . $teamMemberImageBorderRadiusUnits['Desktop'] . ' ' . $teamMemberImageBorderRadiusDesktop['left'] . $teamMemberImageBorderRadiusUnits['Desktop'];
$teamMemberImageBorderRadiusTabWidth     = $teamMemberImageBorderRadiusTab['top'] . $teamMemberImageBorderRadiusUnits['Tablet'] . ' ' . $teamMemberImageBorderRadiusTab['right'] . $teamMemberImageBorderRadiusUnits['Tablet'] . ' ' . $teamMemberImageBorderRadiusTab['bottom'] . $teamMemberImageBorderRadiusUnits['Tablet'] . ' ' . $teamMemberImageBorderRadiusTab['left'] . $teamMemberImageBorderRadiusUnits['Tablet'];
$teamMemberImageBorderRadiusMobileWidth  = $teamMemberImageBorderRadiusMobile['top'] . $teamMemberImageBorderRadiusUnits['Mobile'] . ' ' . $teamMemberImageBorderRadiusMobile['right'] . $teamMemberImageBorderRadiusUnits['Mobile'] . ' ' . $teamMemberImageBorderRadiusMobile['bottom'] . $teamMemberImageBorderRadiusUnits['Mobile'] . ' ' . $teamMemberImageBorderRadiusMobile['left'] . $teamMemberImageBorderRadiusUnits['Mobile'];
// teamMember Image End


// teamMember Content Start
$teamMemberContentAlignment = isset( $block_attributes['teamMemberContentAlignment'] ) ? sanitize_text_field( $block_attributes['teamMemberContentAlignment'] ) : 'left';
$teamMemberContentBGColor      = isset( $block_attributes['teamMemberContentBGColor'] ) ? $block_attributes['teamMemberContentBGColor'] : 'transparent';
$teamMemberContentBGHoverColor = isset( $block_attributes['teamMemberContentBGHoverColor'] ) ? $block_attributes['teamMemberContentBGHoverColor'] : 'transparent';

// margin
$teamMemberContentMarginUnits   = isset( $block_attributes['teamMemberContentMarginUnits'] ) ? $block_attributes['teamMemberContentMarginUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$teamMemberContentMarginDesktop = isset( $block_attributes['teamMemberContentMarginDesktop'] ) ? $block_attributes['teamMemberContentMarginDesktop'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberContentMarginTab     = isset( $block_attributes['teamMemberContentMarginTab'] ) ? $block_attributes['teamMemberContentMarginTab'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberContentMarginMobile  = isset( $block_attributes['teamMemberContentMarginMobile'] ) ? $block_attributes['teamMemberContentMarginMobile'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$teamMemberContentMarginDesktopWidth = $teamMemberContentMarginDesktop['top'] . $teamMemberContentMarginUnits['Desktop'] . ' ' . $teamMemberContentMarginDesktop['right'] . $teamMemberContentMarginUnits['Desktop'] . ' ' . $teamMemberContentMarginDesktop['bottom'] . $teamMemberContentMarginUnits['Desktop'] . ' ' . $teamMemberContentMarginDesktop['left'] . $teamMemberContentMarginUnits['Desktop'];
$teamMemberContentMarginTabWidth     = $teamMemberContentMarginTab['top'] . $teamMemberContentMarginUnits['Tablet'] . ' ' . $teamMemberContentMarginTab['right'] . $teamMemberContentMarginUnits['Tablet'] . ' ' . $teamMemberContentMarginTab['bottom'] . $teamMemberContentMarginUnits['Tablet'] . ' ' . $teamMemberContentMarginTab['left'] . $teamMemberContentMarginUnits['Tablet'];
$teamMemberContentMarginMobileWidth  = $teamMemberContentMarginMobile['top'] . $teamMemberContentMarginUnits['Mobile'] . ' ' . $teamMemberContentMarginMobile['right'] . $teamMemberContentMarginUnits['Mobile'] . ' ' . $teamMemberContentMarginMobile['bottom'] . $teamMemberContentMarginUnits['Mobile'] . ' ' . $teamMemberContentMarginMobile['left'] . $teamMemberContentMarginUnits['Mobile'];

// Padding
$teamMemberContentPaddingUnits   = isset( $block_attributes['teamMemberContentPaddingUnits'] ) ? $block_attributes['teamMemberContentPaddingUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$teamMemberContentPaddingDesktop = isset( $block_attributes['teamMemberContentPaddingDesktop'] ) ? $block_attributes['teamMemberContentPaddingDesktop'] : ['top' => 30, 'bottom' => 30, 'left' => 30, 'right' => 30];
$teamMemberContentPaddingTab     = isset( $block_attributes['teamMemberContentPaddingTab'] ) ? $block_attributes['teamMemberContentPaddingTab'] : ['top' => 30, 'bottom' => 30, 'left' => 30, 'right' => 30];
$teamMemberContentPaddingMobile  = isset( $block_attributes['teamMemberContentPaddingMobile'] ) ? $block_attributes['teamMemberContentPaddingMobile'] : ['top' => 30, 'bottom' => 30, 'left' => 30, 'right' => 30];

$teamMemberContentPaddingDesktopWidth = $teamMemberContentPaddingDesktop['top'] . $teamMemberContentPaddingUnits['Desktop'] . ' ' . $teamMemberContentPaddingDesktop['right'] . $teamMemberContentPaddingUnits['Desktop'] . ' ' . $teamMemberContentPaddingDesktop['bottom'] . $teamMemberContentPaddingUnits['Desktop'] . ' ' . $teamMemberContentPaddingDesktop['left'] . $teamMemberContentPaddingUnits['Desktop'];
$teamMemberContentPaddingTabWidth     = $teamMemberContentPaddingTab['top'] . $teamMemberContentPaddingUnits['Tablet'] . ' ' . $teamMemberContentPaddingTab['right'] . $teamMemberContentPaddingUnits['Tablet'] . ' ' . $teamMemberContentPaddingTab['bottom'] . $teamMemberContentPaddingUnits['Tablet'] . ' ' . $teamMemberContentPaddingTab['left'] . $teamMemberContentPaddingUnits['Tablet'];
$teamMemberContentPaddingMobileWidth  = $teamMemberContentPaddingMobile['top'] . $teamMemberContentPaddingUnits['Mobile'] . ' ' . $teamMemberContentPaddingMobile['right'] . $teamMemberContentPaddingUnits['Mobile'] . ' ' . $teamMemberContentPaddingMobile['bottom'] . $teamMemberContentPaddingUnits['Mobile'] . ' ' . $teamMemberContentPaddingMobile['left'] . $teamMemberContentPaddingUnits['Mobile'];


// border
$teamMemberContentBorder           = isset( $block_attributes['teamMemberContentBorder'] ) ? $block_attributes['teamMemberContentBorder'] : 'none';
$teamMemberContentBorderColor      = isset( $block_attributes['teamMemberContentBorderColor'] ) ? $block_attributes['teamMemberContentBorderColor'] : '#000';
$teamMemberContentBorderHoverColor = isset( $block_attributes['teamMemberContentBorderHoverColor'] ) ? $block_attributes['teamMemberContentBorderHoverColor'] : '#000';

$teamMemberContentBorderUnits        = isset( $block_attributes['teamMemberContentBorderUnits'] ) ? $block_attributes['teamMemberContentBorderUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$teamMemberContentBorderDesktop = isset( $block_attributes['teamMemberContentBorderDesktop'] ) ? $block_attributes['teamMemberContentBorderDesktop'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberContentBorderTab     = isset( $block_attributes['teamMemberContentBorderTab'] ) ? $block_attributes['teamMemberContentBorderTab'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberContentBorderMobile  = isset( $block_attributes['teamMemberContentBorderMobile'] ) ? $block_attributes['teamMemberContentBorderMobile'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$teamMemberContentBorderDesktopWidth = $teamMemberContentBorderDesktop['top'] . $teamMemberContentBorderUnits['Desktop'] . ' ' . $teamMemberContentBorderDesktop['right'] . $teamMemberContentBorderUnits['Desktop'] . ' ' . $teamMemberContentBorderDesktop['bottom'] . $teamMemberContentBorderUnits['Desktop'] . ' ' . $teamMemberContentBorderDesktop['left'] . $teamMemberContentBorderUnits['Desktop'];
$teamMemberContentBorderTabWidth     = $teamMemberContentBorderTab['top'] . $teamMemberContentBorderUnits['Tablet'] . ' ' . $teamMemberContentBorderTab['right'] . $teamMemberContentBorderUnits['Tablet'] . ' ' . $teamMemberContentBorderTab['bottom'] . $teamMemberContentBorderUnits['Tablet'] . ' ' . $teamMemberContentBorderTab['left'] . $teamMemberContentBorderUnits['Tablet'];
$teamMemberContentBorderMobileWidth  = $teamMemberContentBorderMobile['top'] . $teamMemberContentBorderUnits['Mobile'] . ' ' . $teamMemberContentBorderMobile['right'] . $teamMemberContentBorderUnits['Mobile'] . ' ' . $teamMemberContentBorderMobile['bottom'] . $teamMemberContentBorderUnits['Mobile'] . ' ' . $teamMemberContentBorderMobile['left'] . $teamMemberContentBorderUnits['Mobile'];

// border radius
$teamMemberContentBorderRadiusUnits        = isset( $block_attributes['teamMemberContentBorderRadiusUnits'] ) ? $block_attributes['teamMemberContentBorderRadiusUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$teamMemberContentBorderRadiusDesktop = isset( $block_attributes['teamMemberContentBorderRadiusDesktop'] ) ? $block_attributes['teamMemberContentBorderRadiusDesktop'] : ['top' => 8, 'bottom' => 8, 'left' => 8, 'right' => 8];
$teamMemberContentBorderRadiusTab     = isset( $block_attributes['teamMemberContentBorderRadiusTab'] ) ? $block_attributes['teamMemberContentBorderRadiusTab'] : ['top' => 8, 'bottom' => 8, 'left' => 8, 'right' => 8];
$teamMemberContentBorderRadiusMobile  = isset( $block_attributes['teamMemberContentBorderRadiusMobile'] ) ? $block_attributes['teamMemberContentBorderRadiusMobile'] : ['top' => 8, 'bottom' => 8, 'left' => 8, 'right' => 8];

$teamMemberContentBorderRadiusDesktopWidth = $teamMemberContentBorderRadiusDesktop['top'] . $teamMemberContentBorderRadiusUnits['Desktop'] . ' ' . $teamMemberContentBorderRadiusDesktop['right'] . $teamMemberContentBorderRadiusUnits['Desktop'] . ' ' . $teamMemberContentBorderRadiusDesktop['bottom'] . $teamMemberContentBorderRadiusUnits['Desktop'] . ' ' . $teamMemberContentBorderRadiusDesktop['left'] . $teamMemberContentBorderRadiusUnits['Desktop'];
$teamMemberContentBorderRadiusTabWidth     = $teamMemberContentBorderRadiusTab['top'] . $teamMemberContentBorderRadiusUnits['Tablet'] . ' ' . $teamMemberContentBorderRadiusTab['right'] . $teamMemberContentBorderRadiusUnits['Tablet'] . ' ' . $teamMemberContentBorderRadiusTab['bottom'] . $teamMemberContentBorderRadiusUnits['Tablet'] . ' ' . $teamMemberContentBorderRadiusTab['left'] . $teamMemberContentBorderRadiusUnits['Tablet'];
$teamMemberContentBorderRadiusMobileWidth  = $teamMemberContentBorderRadiusMobile['top'] . $teamMemberContentBorderRadiusUnits['Mobile'] . ' ' . $teamMemberContentBorderRadiusMobile['right'] . $teamMemberContentBorderRadiusUnits['Mobile'] . ' ' . $teamMemberContentBorderRadiusMobile['bottom'] . $teamMemberContentBorderRadiusUnits['Mobile'] . ' ' . $teamMemberContentBorderRadiusMobile['left'] . $teamMemberContentBorderRadiusUnits['Mobile'];
// teamMember Content End

// Name Start

// typo
$teamMemberNameFontFamily         = isset( $block_attributes['teamMemberNameFontFamily'] ) ? sanitize_text_field( $block_attributes['teamMemberNameFontFamily'] ) : 'inherit';
$teamMemberNameFontSize           = isset( $block_attributes['teamMemberNameFontSize'] ) ? $block_attributes['teamMemberNameFontSize'] : array( 'Desktop' => '', 'Tablet' => '', 'Mobile' => '' );
$teamMemberNameFontSizeUnits      = isset( $block_attributes['teamMemberNameFontSizeUnits'] ) ? $block_attributes['teamMemberNameFontSizeUnits'] : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$teamMemberNameFontWeight         = isset( $block_attributes['teamMemberNameFontWeight'] ) ? sanitize_text_field( $block_attributes['teamMemberNameFontWeight'] ) : 'normal';
$teamMemberNameFontStyle          = isset( $block_attributes['teamMemberNameFontStyle'] ) ? sanitize_text_field( $block_attributes['teamMemberNameFontStyle'] ) : 'normal';
$teamMemberNameTextTransform      = isset( $block_attributes['teamMemberNameTextTransform'] ) ? sanitize_text_field( $block_attributes['teamMemberNameTextTransform'] ) : 'none';
$teamMemberNameTextDecoration     = isset( $block_attributes['teamMemberNameTextDecoration'] ) ? sanitize_text_field( $block_attributes['teamMemberNameTextDecoration'] ) : 'none';
$teamMemberNameLetterSpacing      = isset( $block_attributes['teamMemberNameLetterSpacing'] ) ? $block_attributes['teamMemberNameLetterSpacing'] : array( 'Desktop' => '0', 'Tablet' => '0', 'Mobile' => '0' );
$teamMemberNameLineHeight         = isset( $block_attributes['teamMemberNameLineHeight'] ) ? $block_attributes['teamMemberNameLineHeight'] : array( 'Desktop' => '1.5', 'Tablet' => '1.4', 'Mobile' => '1.3' );
$teamMemberNameLetterSpacingUnits = isset( $block_attributes['teamMemberNameLetterSpacingUnits'] ) ? $block_attributes['teamMemberNameLetterSpacingUnits'] : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$teamMemberNameLineHeightUnits    = isset( $block_attributes['teamMemberNameLineHeightUnits'] ) ? $block_attributes['teamMemberNameLineHeightUnits'] : array( 'Desktop' => 'em', 'Tablet' => 'em', 'Mobile' => 'em' );

$teamMemberNameColor      = isset( $block_attributes['teamMemberNameColor'] ) ? $block_attributes['teamMemberNameColor'] : '#fff';
$teamMemberNameHoverColor = isset( $block_attributes['teamMemberNameHoverColor'] ) ? $block_attributes['teamMemberNameHoverColor'] : '#fff';

// margin
$teamMemberNameMarginUnits   = isset( $block_attributes['teamMemberNameMarginUnits'] ) ? $block_attributes['teamMemberNameMarginUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$teamMemberNameMarginDesktop = isset( $block_attributes['teamMemberNameMarginDesktop'] ) ? $block_attributes['teamMemberNameMarginDesktop'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberNameMarginTab     = isset( $block_attributes['teamMemberNameMarginTab'] ) ? $block_attributes['teamMemberNameMarginTab'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberNameMarginMobile  = isset( $block_attributes['teamMemberNameMarginMobile'] ) ? $block_attributes['teamMemberNameMarginMobile'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$teamMemberNameMarginDesktopWidth = $teamMemberNameMarginDesktop['top'] . $teamMemberNameMarginUnits['Desktop'] . ' ' . $teamMemberNameMarginDesktop['right'] . $teamMemberNameMarginUnits['Desktop'] . ' ' . $teamMemberNameMarginDesktop['bottom'] . $teamMemberNameMarginUnits['Desktop'] . ' ' . $teamMemberNameMarginDesktop['left'] . $teamMemberNameMarginUnits['Desktop'];
$teamMemberNameMarginTabWidth     = $teamMemberNameMarginTab['top'] . $teamMemberNameMarginUnits['Tablet'] . ' ' . $teamMemberNameMarginTab['right'] . $teamMemberNameMarginUnits['Tablet'] . ' ' . $teamMemberNameMarginTab['bottom'] . $teamMemberNameMarginUnits['Tablet'] . ' ' . $teamMemberNameMarginTab['left'] . $teamMemberNameMarginUnits['Tablet'];
$teamMemberNameMarginMobileWidth  = $teamMemberNameMarginMobile['top'] . $teamMemberNameMarginUnits['Mobile'] . ' ' . $teamMemberNameMarginMobile['right'] . $teamMemberNameMarginUnits['Mobile'] . ' ' . $teamMemberNameMarginMobile['bottom'] . $teamMemberNameMarginUnits['Mobile'] . ' ' . $teamMemberNameMarginMobile['left'] . $teamMemberNameMarginUnits['Mobile'];

// Name End

// Designation Start

// typo
$teamMemberDesignationFontFamily         = isset( $block_attributes['teamMemberDesignationFontFamily'] ) ? sanitize_text_field( $block_attributes['teamMemberDesignationFontFamily'] ) : 'inherit';
$teamMemberDesignationFontSize           = isset( $block_attributes['teamMemberDesignationFontSize'] ) ? $block_attributes['teamMemberDesignationFontSize'] : array( 'Desktop' => '', 'Tablet' => '', 'Mobile' => '' );
$teamMemberDesignationFontSizeUnits      = isset( $block_attributes['teamMemberDesignationFontSizeUnits'] ) ? $block_attributes['teamMemberDesignationFontSizeUnits'] : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$teamMemberDesignationFontWeight         = isset( $block_attributes['teamMemberDesignationFontWeight'] ) ? sanitize_text_field( $block_attributes['teamMemberDesignationFontWeight'] ) : 'normal';
$teamMemberDesignationFontStyle          = isset( $block_attributes['teamMemberDesignationFontStyle'] ) ? sanitize_text_field( $block_attributes['teamMemberDesignationFontStyle'] ) : 'normal';
$teamMemberDesignationTextTransform      = isset( $block_attributes['teamMemberDesignationTextTransform'] ) ? sanitize_text_field( $block_attributes['teamMemberDesignationTextTransform'] ) : 'none';
$teamMemberDesignationTextDecoration     = isset( $block_attributes['teamMemberDesignationTextDecoration'] ) ? sanitize_text_field( $block_attributes['teamMemberDesignationTextDecoration'] ) : 'none';
$teamMemberDesignationLetterSpacing      = isset( $block_attributes['teamMemberDesignationLetterSpacing'] ) ? $block_attributes['teamMemberDesignationLetterSpacing'] : array( 'Desktop' => '0', 'Tablet' => '0', 'Mobile' => '0' );
$teamMemberDesignationLineHeight         = isset( $block_attributes['teamMemberDesignationLineHeight'] ) ? $block_attributes['teamMemberDesignationLineHeight'] : array( 'Desktop' => '1.5', 'Tablet' => '1.4', 'Mobile' => '1.3' );
$teamMemberDesignationLetterSpacingUnits = isset( $block_attributes['teamMemberDesignationLetterSpacingUnits'] ) ? $block_attributes['teamMemberDesignationLetterSpacingUnits'] : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$teamMemberDesignationLineHeightUnits    = isset( $block_attributes['teamMemberDesignationLineHeightUnits'] ) ? $block_attributes['teamMemberDesignationLineHeightUnits'] : array( 'Desktop' => 'em', 'Tablet' => 'em', 'Mobile' => 'em' );

$teamMemberDesignationColor      = isset( $block_attributes['teamMemberDesignationColor'] ) ? $block_attributes['teamMemberDesignationColor'] : '#fff';
$teamMemberDesignationHoverColor = isset( $block_attributes['teamMemberDesignationHoverColor'] ) ? $block_attributes['teamMemberDesignationHoverColor'] : '#fff';

// margin
$teamMemberDesignationMarginUnits   = isset( $block_attributes['teamMemberDesignationMarginUnits'] ) ? $block_attributes['teamMemberDesignationMarginUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$teamMemberDesignationMarginDesktop = isset( $block_attributes['teamMemberDesignationMarginDesktop'] ) ? $block_attributes['teamMemberDesignationMarginDesktop'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberDesignationMarginTab     = isset( $block_attributes['teamMemberDesignationMarginTab'] ) ? $block_attributes['teamMemberDesignationMarginTab'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$teamMemberDesignationMarginMobile  = isset( $block_attributes['teamMemberDesignationMarginMobile'] ) ? $block_attributes['teamMemberDesignationMarginMobile'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$teamMemberDesignationMarginDesktopWidth = $teamMemberDesignationMarginDesktop['top'] . $teamMemberDesignationMarginUnits['Desktop'] . ' ' . $teamMemberDesignationMarginDesktop['right'] . $teamMemberDesignationMarginUnits['Desktop'] . ' ' . $teamMemberDesignationMarginDesktop['bottom'] . $teamMemberDesignationMarginUnits['Desktop'] . ' ' . $teamMemberDesignationMarginDesktop['left'] . $teamMemberDesignationMarginUnits['Desktop'];
$teamMemberDesignationMarginTabWidth     = $teamMemberDesignationMarginTab['top'] . $teamMemberDesignationMarginUnits['Tablet'] . ' ' . $teamMemberDesignationMarginTab['right'] . $teamMemberDesignationMarginUnits['Tablet'] . ' ' . $teamMemberDesignationMarginTab['bottom'] . $teamMemberDesignationMarginUnits['Tablet'] . ' ' . $teamMemberDesignationMarginTab['left'] . $teamMemberDesignationMarginUnits['Tablet'];
$teamMemberDesignationMarginMobileWidth  = $teamMemberDesignationMarginMobile['top'] . $teamMemberDesignationMarginUnits['Mobile'] . ' ' . $teamMemberDesignationMarginMobile['right'] . $teamMemberDesignationMarginUnits['Mobile'] . ' ' . $teamMemberDesignationMarginMobile['bottom'] . $teamMemberDesignationMarginUnits['Mobile'] . ' ' . $teamMemberDesignationMarginMobile['left'] . $teamMemberDesignationMarginUnits['Mobile'];

// Designation End

// Social Icon Start
$teamMemberIconsSize      = isset( $block_attributes['teamMemberIconsSize'] ) ? $block_attributes['teamMemberIconsSize'] : ['Desktop' => 22, 'Tablet' => 22, 'Mobile' => 22];
$teamMemberIconsSizeUnits     = isset( $block_attributes['teamMemberIconsSizeUnits'] ) ? $block_attributes['teamMemberIconsSizeUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$teamMemberIconsSpacing       = isset( $block_attributes['teamMemberIconsSpacing'] ) ? $block_attributes['teamMemberIconsSpacing'] : ['Desktop' => 20, 'Tablet' => 20, 'Mobile' => 20];
$teamMemberIconsSpacingUnits = isset( $block_attributes['teamMemberIconsSpacingUnits'] ) ? $block_attributes['teamMemberIconsSpacingUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$teamMemberIconsColor      = isset( $block_attributes['teamMemberIconsColor'] ) ? $block_attributes['teamMemberIconsColor'] : '#000000';
$teamMemberIconsHoverColor = isset( $block_attributes['teamMemberIconsHoverColor'] ) ? $block_attributes['teamMemberIconsHoverColor'] : '#333333';
// Social Icon End


/** Start CSS Content */
$css_content = "

	.$blockID.fb-team-member-main-wrapper {
		position: relative;
		" . ( $teamMemberBgColor ? "background-color: $teamMemberBgColor;" : "" ) . "
		" . ( $teamMemberDesktopPaddingWidth ? "padding: $teamMemberDesktopPaddingWidth;" : "" ) . "
		" . ( $teamMemberDesktopMarginWidth ? "margin: $teamMemberDesktopMarginWidth;" : "" ) . "
		" . ( $teamMemberBorder ? "border-style: $teamMemberBorder;" : "" ) . "
		" . ( $teamMemberDesktopBorder ? "border-width: $teamMemberDesktopBorder;" : "" ) . "
		" . ( $teamMemberBorderColor ? "border-color: $teamMemberBorderColor;" : "" ) . "
		" . ( $teamMemberDesktopBorderRadius ? "border-radius: $teamMemberDesktopBorderRadius;" : "" ) . "
		" . ( $teamMemberZIndex ? "z-index: $teamMemberZIndex;" : "" ) . "
		transition: background-color 0.3s ease, border-color 0.3s ease;
	}
	.$blockID.fb-team-member-main-wrapper:hover {
		" . ( $teamMemberBorderHoverColor ? "border-color: $teamMemberBorderHoverColor;" : "" ) . "
		" . ( $teamMemberBgHoverColor ? "background-color: $teamMemberBgHoverColor;" : "" ) . "
		transition: background-color 0.3s ease, border-color 0.3s ease;
	}


	.$blockID.fb-team-member-main-wrapper .fb-team-member-image-wrapper {
		" . (isset($teamMemberImageWidth['Desktop'], $teamMemberImageWidthUnits['Desktop']) ? "width: {$teamMemberImageWidth['Desktop']}{$teamMemberImageWidthUnits['Desktop']};" : "") . "
		" . (isset($teamMemberImageHeight['Desktop'], $teamMemberImageHeightUnits['Desktop']) ? "height: {$teamMemberImageHeight['Desktop']}{$teamMemberImageHeightUnits['Desktop']};" : "") . "
        " . ( $teamMemberImageMarginDesktopWidth ? "margin: $teamMemberImageMarginDesktopWidth;" : "" ) . "
		" . ( $teamMemberImageBorder ? "border-style: $teamMemberImageBorder;" : "" ) . "
		" . ( $teamMemberImageBorderDesktopWidth ? "border-width: $teamMemberImageBorderDesktopWidth;" : "" ) . "
		" . ( $teamMemberImageBorderColor ? "border-color: $teamMemberImageBorderColor;" : "" ) . "
		" . ( $teamMemberImageBorderRadiusDesktopWidth ? "border-radius: $teamMemberImageBorderRadiusDesktopWidth;" : "" ) . "
		transition: all 0.3s ease-in-out;
	}
	.$blockID.fb-team-member-main-wrapper:hover .fb-team-member-image-wrapper {
		" . ( $teamMemberImageBorderColor ? "border-color: $teamMemberImageBorderColor;" : "" ) . "
		transition: all 0.3s ease-in-out;
	}
	
	.$blockID.fb-team-member-main-wrapper .fb-team-member-content {
		position: relative;
		display: flex;
		flex-direction: column;
		" . ($teamMemberContentAlignment === "left" ? "align-items: start;" : "") . "
		" . ($teamMemberContentAlignment === "center" ? "align-items: center;" : "") . "
		" . ($teamMemberContentAlignment === "right" ? "align-items: end;" : "") . "
        " . ( $teamMemberContentMarginDesktopWidth ? "margin: $teamMemberContentMarginDesktopWidth;" : "" ) . "
        " . ( $teamMemberContentPaddingDesktopWidth ? "padding: $teamMemberContentPaddingDesktopWidth;" : "" ) . "
		" . ( $teamMemberContentBorder ? "border-style: $teamMemberContentBorder;" : "" ) . "
		" . ( $teamMemberContentBorderDesktopWidth ? "border-width: $teamMemberContentBorderDesktopWidth;" : "" ) . "
		" . ( $teamMemberContentBorderColor ? "border-color: $teamMemberContentBorderColor;" : "" ) . "
		" . ( $teamMemberContentBorderRadiusDesktopWidth ? "border-radius: $teamMemberContentBorderRadiusDesktopWidth;" : "" ) . "
		" . ( $teamMemberContentBGColor ? "background-color: $teamMemberContentBGColor;" : "" ) . "
		transition: all 0.3s ease-in-out;
	}
	.$blockID.fb-team-member-main-wrapper:hover .fb-team-member-content {
		" . ( $teamMemberContentBorderHoverColor ? "border-color: $teamMemberContentBorderHoverColor;" : "" ) . "
		" . ( $teamMemberContentBGHoverColor ? "background-color: $teamMemberContentBGHoverColor;" : "" ) . "
		transition: all 0.3s ease-in-out;
	}

	.$blockID.fb-team-member-main-wrapper .fb-team-member-image-wrapper .fb-team-member-image-overlay {
		" . ( $teamMemberImageBGColor ? "background-color: $teamMemberImageBGColor;" : "" ) . "
		transition: all 0.3s ease-in-out;
	}
	.$blockID.fb-team-member-main-wrapper:hover .fb-team-member-image-wrapper .fb-team-member-image-overlay {
		" . ( $teamMemberImageBGHoverColor ? "background-color: $teamMemberImageBGHoverColor;" : "" ) . "
		transition: all 0.3s ease-in-out;
	}


	.$blockID.fb-team-member-main-wrapper .fb-team-member-name {
		" . ( $teamMemberNameFontFamily ? "font-family: $teamMemberNameFontFamily;" : "" ) . "
		" . ( $teamMemberNameFontSize['Desktop'] && $teamMemberNameFontSizeUnits['Desktop'] ? "font-size: {$teamMemberNameFontSize['Desktop']}{$teamMemberNameFontSizeUnits['Desktop']};" : "" ) . "
		" . ( $teamMemberNameFontWeight ? "font-weight: $teamMemberNameFontWeight;" : "" ) . "
		" . ( $teamMemberNameFontStyle ? "font-style: $teamMemberNameFontStyle;" : "" ) . "
		" . ( $teamMemberNameTextTransform ? "text-transform: $teamMemberNameTextTransform;" : "" ) . "
		" . ( $teamMemberNameTextDecoration ? "text-decoration: $teamMemberNameTextDecoration;" : "" ) . "
		" . ( $teamMemberNameLetterSpacing['Desktop'] && $teamMemberNameLetterSpacingUnits['Desktop'] ? "letter-spacing: {$teamMemberNameLetterSpacing['Desktop']}{$teamMemberNameLetterSpacingUnits['Desktop']};" : "" ) . "
		" . ( $teamMemberNameLineHeight['Desktop'] && $teamMemberNameLineHeightUnits['Desktop'] ? "line-height: {$teamMemberNameLineHeight['Desktop']}{$teamMemberNameLineHeightUnits['Desktop']};" : "" ) . "
		" . ( $teamMemberNameColor ? "color: $teamMemberNameColor;" : "" ) . "
		" . ( $teamMemberNameMarginDesktopWidth ? "margin: $teamMemberNameMarginDesktopWidth;" : "" ) . "
		transition: all .3s ease-in-out;
	}
	.$blockID.fb-team-member-main-wrapper .fb-team-member-name:hover {
		" . ( $teamMemberNameHoverColor ? "color: $teamMemberNameHoverColor;" : "" ) . "
		transition: all .3s ease-in-out;
	}

	.$blockID.fb-team-member-main-wrapper .fb-team-member-designation {
		" . ( $teamMemberDesignationFontFamily ? "font-family: $teamMemberDesignationFontFamily;" : "" ) . "
		" . ( $teamMemberDesignationFontSize['Desktop'] && $teamMemberDesignationFontSizeUnits['Desktop'] ? "font-size: {$teamMemberDesignationFontSize['Desktop']}{$teamMemberDesignationFontSizeUnits['Desktop']};" : "" ) . "
		" . ( $teamMemberDesignationFontWeight ? "font-weight: $teamMemberDesignationFontWeight;" : "" ) . "
		" . ( $teamMemberDesignationFontStyle ? "font-style: $teamMemberDesignationFontStyle;" : "" ) . "
		" . ( $teamMemberDesignationTextTransform ? "text-transform: $teamMemberDesignationTextTransform;" : "" ) . "
		" . ( $teamMemberDesignationTextDecoration ? "text-decoration: $teamMemberDesignationTextDecoration;" : "" ) . "
		" . ( $teamMemberDesignationLetterSpacing['Desktop'] && $teamMemberDesignationLetterSpacingUnits['Desktop'] ? "letter-spacing: {$teamMemberDesignationLetterSpacing['Desktop']}{$teamMemberDesignationLetterSpacingUnits['Desktop']};" : "" ) . "
		" . ( $teamMemberDesignationLineHeight['Desktop'] && $teamMemberDesignationLineHeightUnits['Desktop'] ? "line-height: {$teamMemberDesignationLineHeight['Desktop']}{$teamMemberDesignationLineHeightUnits['Desktop']};" : "" ) . "
		" . ( $teamMemberDesignationColor ? "color: $teamMemberDesignationColor;" : "" ) . "
		" . ( $teamMemberDesignationMarginDesktopWidth ? "margin: $teamMemberDesignationMarginDesktopWidth;" : "" ) . "
		transition: all .3s ease-in-out;
	}
	
	.$blockID.fb-team-member-main-wrapper .fb-team-member-social-profile {
		display: flex;
		align-items: center;
		" . (isset($teamMemberIconsSpacing['Desktop'], $teamMemberIconsSpacingUnits['Desktop']) ? "gap: {$teamMemberIconsSpacing['Desktop']}{$teamMemberIconsSpacingUnits['Desktop']};" : "") . "
	}
	.$blockID.fb-team-member-main-wrapper .fb-team-member-social-profile .fb-team-member-social-icon {
		" . (isset($teamMemberIconsSize['Desktop'], $teamMemberIconsSizeUnits['Desktop']) ? "width: {$teamMemberIconsSize['Desktop']}{$teamMemberIconsSizeUnits['Desktop']};" : "") . "
		" . (isset($teamMemberIconsSize['Desktop'], $teamMemberIconsSizeUnits['Desktop']) ? "height: {$teamMemberIconsSize['Desktop']}{$teamMemberIconsSizeUnits['Desktop']};" : "") . "
		" . ( $teamMemberIconsColor ? "fill: $teamMemberIconsColor;" : "" ) . "
		transition: all 0.3s ease-in-out;
	}
	.$blockID.fb-team-member-main-wrapper .fb-team-member-social-profile .fb-team-member-social-icon:hover {
		" . ( $teamMemberIconsHoverColor ? "fill: $teamMemberIconsHoverColor;" : "" ) . "
		transition: all 0.3s ease-in-out;
	}

	@media only screen and (max-width: 1024px) {
		.$blockID.fb-team-member-main-wrapper {
			" . ( $teamMemberTabPaddingWidth ? "padding: $teamMemberTabPaddingWidth;" : "" ) . "
			" . ( $teamMemberTabMarginWidth ? "margin: $teamMemberTabMarginWidth;" : "" ) . "
			" . ( $teamMemberTabBorder ? "border-width: $teamMemberTabBorder;" : "" ) . "
			" . ( $teamMemberTabBorderRadius ? "border-radius: $teamMemberTabBorderRadius;" : "" ) . "
		}

		.$blockID.fb-team-member-main-wrapper .fb-team-member-image-wrapper {
			" . (isset($teamMemberImageWidth['Tablet'], $teamMemberImageWidthUnits['Tablet']) ? "width: {$teamMemberImageWidth['Tablet']}{$teamMemberImageWidthUnits['Tablet']};" : "") . "
			" . (isset($teamMemberImageHeight['Tablet'], $teamMemberImageHeightUnits['Tablet']) ? "height: {$teamMemberImageHeight['Tablet']}{$teamMemberImageHeightUnits['Tablet']};" : "") . "
			" . ( $teamMemberImageMarginTabWidth ? "margin: $teamMemberImageMarginTabWidth;" : "" ) . "
			" . ( $teamMemberImageBorderTabWidth ? "border-width: $teamMemberImageBorderTabWidth;" : "" ) . "
			" . ( $teamMemberImageBorderRadiusTabWidth ? "border-radius: $teamMemberImageBorderRadiusTabWidth;" : "" ) . "
			transition: all 0.3s ease-in-out;
		}

		.$blockID.fb-team-member-main-wrapper .fb-team-member-content {
			" . ( $teamMemberContentMarginTabWidth ? "margin: $teamMemberContentMarginTabWidth;" : "" ) . "
			" . ( $teamMemberContentPaddingTabWidth ? "padding: $teamMemberContentPaddingTabWidth;" : "" ) . "
			" . ( $teamMemberContentBorderTabWidth ? "border-width: $teamMemberContentBorderTabWidth;" : "" ) . "
			" . ( $teamMemberContentBorderRadiusTabWidth ? "border-radius: $teamMemberContentBorderRadiusTabWidth;" : "" ) . "
		}

		.$blockID.fb-team-member-main-wrapper .fb-team-member-name {
			" . ( $teamMemberNameFontSize['Tablet'] && $teamMemberNameFontSizeUnits['Tablet'] ? "font-size: {$teamMemberNameFontSize['Tablet']}{$teamMemberNameFontSizeUnits['Tablet']};" : "" ) . "
			" . ( $teamMemberNameLetterSpacing['Tablet'] && $teamMemberNameLetterSpacingUnits['Tablet'] ? "letter-spacing: {$teamMemberNameLetterSpacing['Tablet']}{$teamMemberNameLetterSpacingUnits['Tablet']};" : "" ) . "
			" . ( $teamMemberNameLineHeight['Tablet'] && $teamMemberNameLineHeightUnits['Tablet'] ? "line-height: {$teamMemberNameLineHeight['Tablet']}{$teamMemberNameLineHeightUnits['Tablet']};" : "" ) . "
			" . ( $teamMemberNameMarginTabWidth ? "margin: $teamMemberNameMarginTabWidth;" : "" ) . "
		}

		.$blockID.fb-team-member-main-wrapper .fb-team-member-designation {
			" . ( $teamMemberDesignationFontSize['Tablet'] && $teamMemberDesignationFontSizeUnits['Tablet'] ? "font-size: {$teamMemberDesignationFontSize['Tablet']}{$teamMemberDesignationFontSizeUnits['Tablet']};" : "" ) . "
			" . ( $teamMemberDesignationLetterSpacing['Tablet'] && $teamMemberDesignationLetterSpacingUnits['Tablet'] ? "letter-spacing: {$teamMemberDesignationLetterSpacing['Tablet']}{$teamMemberDesignationLetterSpacingUnits['Tablet']};" : "" ) . "
			" . ( $teamMemberDesignationLineHeight['Tablet'] && $teamMemberDesignationLineHeightUnits['Tablet'] ? "line-height: {$teamMemberDesignationLineHeight['Tablet']}{$teamMemberDesignationLineHeightUnits['Tablet']};" : "" ) . "
			" . ( $teamMemberDesignationMarginTabWidth ? "margin: $teamMemberDesignationMarginTabWidth;" : "" ) . "
		}

		.$blockID.fb-team-member-main-wrapper .fb-team-member-social-profile {
			" . (isset($teamMemberIconsSpacing['Tablet'], $teamMemberIconsSpacingUnits['Tablet']) ? "gap: {$teamMemberIconsSpacing['Tablet']}{$teamMemberIconsSpacingUnits['Tablet']};" : "") . "
		}
		.$blockID.fb-team-member-main-wrapper .fb-team-member-social-profile .fb-team-member-social-icon {
			" . (isset($teamMemberIconsSize['Tablet'], $teamMemberIconsSizeUnits['Tablet']) ? "width: {$teamMemberIconsSize['Tablet']}{$teamMemberIconsSizeUnits['Tablet']};" : "") . "
			" . (isset($teamMemberIconsSize['Tablet'], $teamMemberIconsSizeUnits['Tablet']) ? "height: {$teamMemberIconsSize['Tablet']}{$teamMemberIconsSizeUnits['Tablet']};" : "") . "
		}
	}

	@media only screen and (max-width: 767px) {
		.$blockID.fb-team-member-main-wrapper {
			" . ( $teamMemberMobilePaddingWidth ? "padding: $teamMemberMobilePaddingWidth;" : "" ) . "
			" . ( $teamMemberMobileMarginWidth ? "margin: $teamMemberMobileMarginWidth;" : "" ) . "
			" . ( $teamMemberMobileBorder ? "border-width: $teamMemberMobileBorder;" : "" ) . "
			" . ( $teamMemberMobileBorderRadius ? "border-radius: $teamMemberMobileBorderRadius;" : "" ) . "
		}

		.$blockID.fb-team-member-main-wrapper .fb-team-member-image-wrapper {
			" . (isset($teamMemberImageWidth['Mobile'], $teamMemberImageWidthUnits['Mobile']) ? "width: {$teamMemberImageWidth['Mobile']}{$teamMemberImageWidthUnits['Mobile']};" : "") . "
			" . (isset($teamMemberImageHeight['Mobile'], $teamMemberImageHeightUnits['Mobile']) ? "height: {$teamMemberImageHeight['Mobile']}{$teamMemberImageHeightUnits['Mobile']};" : "") . "
			" . ( $teamMemberImageMarginMobileWidth ? "margin: $teamMemberImageMarginMobileWidth;" : "" ) . "
			" . ( $teamMemberImageBorderMobileWidth ? "border-width: $teamMemberImageBorderMobileWidth;" : "" ) . "
			" . ( $teamMemberImageBorderRadiusMobileWidth ? "border-radius: $teamMemberImageBorderRadiusMobileWidth;" : "" ) . "
			transition: all 0.3s ease-in-out;
		}

		.$blockID.fb-team-member-main-wrapper .fb-team-member-content {
			" . ( $teamMemberContentMarginMobileWidth ? "margin: $teamMemberContentMarginMobileWidth;" : "" ) . "
			" . ( $teamMemberContentPaddingMobileWidth ? "padding: $teamMemberContentPaddingMobileWidth;" : "" ) . "
			" . ( $teamMemberContentBorderMobileWidth ? "border-width: $teamMemberContentBorderMobileWidth;" : "" ) . "
			" . ( $teamMemberContentBorderRadiusMobileWidth ? "border-radius: $teamMemberContentBorderRadiusMobileWidth;" : "" ) . "
		}

		.$blockID.fb-team-member-main-wrapper .fb-team-member-name {
			" . ( $teamMemberNameFontSize['Mobile'] && $teamMemberNameFontSizeUnits['Mobile'] ? "font-size: {$teamMemberNameFontSize['Mobile']}{$teamMemberNameFontSizeUnits['Mobile']};" : "" ) . "
			" . ( $teamMemberNameLetterSpacing['Mobile'] && $teamMemberNameLetterSpacingUnits['Mobile'] ? "letter-spacing: {$teamMemberNameLetterSpacing['Mobile']}{$teamMemberNameLetterSpacingUnits['Mobile']};" : "" ) . "
			" . ( $teamMemberNameLineHeight['Mobile'] && $teamMemberNameLineHeightUnits['Mobile'] ? "line-height: {$teamMemberNameLineHeight['Mobile']}{$teamMemberNameLineHeightUnits['Mobile']};" : "" ) . "
			" . ( $teamMemberNameMarginMobileWidth ? "margin: $teamMemberNameMarginMobileWidth;" : "" ) . "
		}

		.$blockID.fb-team-member-main-wrapper .fb-team-member-designation {
			" . ( $teamMemberDesignationFontSize['Mobile'] && $teamMemberDesignationFontSizeUnits['Mobile'] ? "font-size: {$teamMemberDesignationFontSize['Mobile']}{$teamMemberDesignationFontSizeUnits['Mobile']};" : "" ) . "
			" . ( $teamMemberDesignationLetterSpacing['Mobile'] && $teamMemberDesignationLetterSpacingUnits['Mobile'] ? "letter-spacing: {$teamMemberDesignationLetterSpacing['Mobile']}{$teamMemberDesignationLetterSpacingUnits['Mobile']};" : "" ) . "
			" . ( $teamMemberDesignationLineHeight['Mobile'] && $teamMemberDesignationLineHeightUnits['Mobile'] ? "line-height: {$teamMemberDesignationLineHeight['Mobile']}{$teamMemberDesignationLineHeightUnits['Mobile']};" : "" ) . "
			" . ( $teamMemberDesignationMarginMobileWidth ? "margin: $teamMemberDesignationMarginMobileWidth;" : "" ) . "
		}

		.$blockID.fb-team-member-main-wrapper .fb-team-member-social-profile {
			" . (isset($teamMemberIconsSpacing['Mobile'], $teamMemberIconsSpacingUnits['Mobile']) ? "gap: {$teamMemberIconsSpacing['Mobile']}{$teamMemberIconsSpacingUnits['Mobile']};" : "") . "
		}
		.$blockID.fb-team-member-main-wrapper .fb-team-member-social-profile .fb-team-member-social-icon {
			" . (isset($teamMemberIconsSize['Mobile'], $teamMemberIconsSizeUnits['Mobile']) ? "width: {$teamMemberIconsSize['Mobile']}{$teamMemberIconsSizeUnits['Mobile']};" : "") . "
			" . (isset($teamMemberIconsSize['Mobile'], $teamMemberIconsSizeUnits['Mobile']) ? "height: {$teamMemberIconsSize['Mobile']}{$teamMemberIconsSizeUnits['Mobile']};" : "") . "
		}
	}
";
/** End CSS Content */

/** Enqueue style for frontend */
EnqueueBlocksCss::enqueue_block_asset( $css_content, $single_block['slug'], $blockID );
/** End Enqueue style for frontend */
