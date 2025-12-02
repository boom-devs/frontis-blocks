${offCanvasOverlayHoverColorType === 'gradient' ? `
						background: ${offCanvasOverlayHoverCustomGradientColorSwitcher && offCanvasOverlayHoverCustomGradientColor ? offCanvasOverlayHoverCustomGradientColor : offCanvasOverlayHoverGradientColor};
						${offCanvasOverlayHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
						${offCanvasOverlayHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
					` : ''}
						${offCanvasOverlayHoverBgColorType === "gradient"
					? `background: ${offCanvasOverlayHoverBackgroundCustomGradientColorSwitcher && offCanvasOverlayHoverBackgroundCustomGradientColor
						? offCanvasOverlayHoverBackgroundCustomGradientColor
						: offCanvasOverlayHoverBackgroundGradientColor
					};`
					: offCanvasOverlayHoverBackgroundColor ? `background: ${offCanvasOverlayHoverBackgroundColor};` : ''
					}