.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.icon{
						${offCanvasCloseIconBgWidth?.Mobile ? `width: ${offCanvasCloseIconBgWidth?.Mobile}${offCanvasCloseIconBgWidthUnits?.Mobile};` : ''}
						${offCanvasCloseIconBgWidth?.Mobile ? `height: ${offCanvasCloseIconBgWidth?.Mobile}${offCanvasCloseIconBgWidthUnits?.Mobile};` : ''}
						${offCanvasCloseIconMobilePaddingWidth && offCanvasCloseIconMobilePadding?.top ? `padding: ${offCanvasCloseIconMobilePaddingWidth};` : ''}
						${offCanvasCloseIconMobileMarginWidth && offCanvasCloseIconMobileMargin?.top ? `margin: ${offCanvasCloseIconMobileMarginWidth};` : ''}
						${offCanvasCloseIconMobileBorderWidthStr && offCanvasCloseIconTabBorderWidth?.top ? `border-width: ${offCanvasCloseIconMobileBorderWidthStr};` : ''}
						${offCanvasCloseIconMobileBorderRadiusStr && offCanvasCloseIconTabBorderRadiusWidth?.top ? `border-radius: ${offCanvasCloseIconMobileBorderRadiusStr};` : ''}
					}