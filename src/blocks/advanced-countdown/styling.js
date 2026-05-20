const generateStyling = (attributes) => {
	const {
		blockID,
		presetStyle,
		containerBgColor,
		containerBgImage,
		containerBorderRadius,
		containerBorderType,
		containerBorderWidth,
		containerBorderColor,
		containerPadding,
		containerMargin,
		containerSize,
		countdownColor,
		countdownFontSize,
		countdownFontWeight,
		countdownLineHeight,
		countdownLetterSpacing,
		labelColor,
		labelFontSize,
		labelFontWeight,
		separatorColor,
		separatorFontSize,
		separatorFontWeight,
		separatorGap,
		footerColor,
		footerFontSize,
		footerFontWeight,
		footerBgColor,
		footerBorderRadius,
		footerPaddingY,
		footerPaddingX,
		iconSize,
		iconColor,
		iconBgColor,
		// P1/P2 SVG
		svgActiveColor,
		svgInactiveColor,
		// P2
		p2DashActiveColor,
		p2DashInactiveColor,
		p2SvgActiveColor,
		p2SvgInactiveColor,
		// P3
		p3BarBgColor,
		p3BarBorderRadius,
		p3IndicatorBgColor,
		p3IndicatorBorderRadius,
		p3TimeFontSize,
		p3TimeFontWeight,
		p3TimeColor,
		p3CountdownFontSize,
		p3CountdownFontWeight,
		p3CountdownColor,
		// P4
		p4TileBgColor,
		p4TileBorderRadius,
		p4NumberFontSize,
		p4NumberFontWeight,
		p4NumberColor,
		p4LabelFontSize,
		p4LabelFontWeight,
		p4LabelColor,
		p4TileGap,
		// P5
		p5DotActiveColor,
		p5DotInactiveColor,
		p5NumberFontSize,
		p5NumberFontWeight,
		p5NumberColor,
		p5LabelFontSize,
		p5LabelColor,
		p5Gap,
	} = attributes;

	const selector = `.${blockID}`;

	let styles = `
		${selector} .acd-container {
			background: ${
				containerBgImage
					? `url(${containerBgImage}) center/cover no-repeat, ${containerBgColor}`
					: containerBgColor
			};
			border-radius: ${containerBorderRadius.top || 12}px ${
				containerBorderRadius.right || 12
			}px ${containerBorderRadius.bottom || 12}px ${
				containerBorderRadius.left || 12
			}px;
			margin: ${containerMargin.top || 0}px ${containerMargin.right || 0}px ${
				containerMargin.bottom || 0
			}px ${containerMargin.left || 0}px;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: ${containerPadding.top || 0}px ${containerPadding.right || 0}px ${
				containerPadding.bottom || 0
			}px ${containerPadding.left || 0}px;
			width: ${presetStyle === "preset-1" ? `${containerSize}%` : "100%"};
			box-sizing: border-box;
		}
	`;

	if (containerBorderType !== "none") {
		styles += `
			${selector} .acd-container {
				border-style: ${containerBorderType};
				border-width: ${containerBorderWidth.top || 0}px ${
					containerBorderWidth.right || 0
				}px ${containerBorderWidth.bottom || 0}px ${
					containerBorderWidth.left || 0
				}px;
				border-color: ${containerBorderColor};
			}
		`;
	}

	// Common Typography
	styles += `
		${selector} .acd-num {
			color: ${countdownColor};
			font-size: ${countdownFontSize}px;
			font-weight: ${countdownFontWeight};
			letter-spacing: ${countdownLetterSpacing}px;
			line-height: ${countdownLineHeight || 1};
		}
		${selector} .acd-label {
			color: ${labelColor};
			font-size: ${labelFontSize}px;
			font-weight: ${labelFontWeight};
		}
		${selector} .acd-unit {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		${selector} .acd-time-wrap {
			display: flex;
			align-items: center;
		}
		${selector} .acd-inner-content {
			position: absolute;
			inset: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 16px;
		}
		${selector} .acd-sep {
			color: ${separatorColor};
			font-size: ${separatorFontSize}px;
			font-weight: ${separatorFontWeight};
			margin: 0 ${separatorGap}px;
		}
	`;

	// Preset Specifics
	if (presetStyle === "preset-1") {
		styles += `
			${selector} .acd-icon-wrap {
				color: ${iconColor};
				background: ${iconBgColor};
				display: flex;
				align-items: center;
				justify-content: center;
			}
			${selector} .acd-icon-wrap img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
			${selector} .acd-svg-canvas {
				position: absolute;
				top: 0;
				left: 0;
			}
			${selector} .acd-svg-progress {
				transform: rotate(-90deg);
				transform-origin: 50% 50%;
				transition: stroke-dashoffset 1s linear;
			}
		`;
	}

	if (presetStyle === "preset-2") {
		styles += `
			${selector} .acd-p2-wrap {
				position: relative;
				margin: 0 auto;
			}
			${selector} .acd-num {
				font-size: ${countdownFontSize * 0.6}px;
			}
		`;
	}

	if (presetStyle === "preset-3") {
		styles += `
			${selector} .acd-p3-bar {
				background: ${p3BarBgColor};
				border-radius: ${p3BarBorderRadius}px;
			}
			${selector} .acd-p3-badge {
				background: ${p3IndicatorBgColor};
				border-radius: ${p3IndicatorBorderRadius}px;
			}
			${selector} .acd-p3-time {
				color: ${p3TimeColor};
				font-size: ${p3TimeFontSize}px;
				font-weight: ${p3TimeFontWeight};
			}
			${selector} .acd-p3-countdown {
				color: ${p3CountdownColor};
				font-size: ${p3CountdownFontSize}px;
				font-weight: ${p3CountdownFontWeight};
			}
		`;
	}

	if (presetStyle === "preset-4") {
		styles += `
			${selector} .acd-p4-tile {
				background: ${p4TileBgColor};
				border-radius: ${p4TileBorderRadius}px;
			}
			${selector} .acd-p4-num {
				color: ${p4NumberColor};
				font-size: ${p4NumberFontSize}px;
				font-weight: ${p4NumberFontWeight};
			}
			${selector} .acd-p4-label {
				color: ${p4LabelColor};
				font-size: ${p4LabelFontSize}px;
				font-weight: ${p4LabelFontWeight};
			}
		`;
	}

	if (presetStyle === "preset-5") {
		styles += `
			${selector} .acd-p5-num {
				color: ${p5NumberColor};
				font-size: ${p5NumberFontSize}px;
				font-weight: ${p5NumberFontWeight};
			}
			${selector} .acd-p5-label {
				color: ${p5LabelColor};
				font-size: ${p5LabelFontSize}px;
			}
			${selector} .acd-preset5-wrap {
				gap: ${p5Gap}px;
			}
		`;
	}

	// Footer
	styles += `
		${selector} .acd-footer {
			color: ${footerColor};
			font-size: ${footerFontSize}px;
			font-weight: ${footerFontWeight};
			background: ${footerBgColor};
			border-radius: ${footerBorderRadius}px;
			padding: ${footerPaddingY}px ${footerPaddingX}px;
		}
	`;

	return styles;
};

export default generateStyling;
