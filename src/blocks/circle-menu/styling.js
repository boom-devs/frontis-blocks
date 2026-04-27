/**
 * Circle Menu Block - Style Generation
 */

import getCustomCss from "@Utils/getCustomCss";

/**
 * Get value from a responsive object or direct value
 * @param {Object|number|string} attr
 * @param {string} device
 * @param {any} fallback
 * @returns {any}
 */
// ==========================================
// 1. Device Prefix Helpers (For Responsive Data)
// ==========================================
const getV = (v, device, fallback) => {
	return v?.[device] !== undefined && v?.[device] !== "" ? v[device] : fallback;
};

const getU = (u, device, fallback = "px") => {
	return u?.[device] || fallback;
};

const getSpacing = (attr, unitsAttr, device = "Desktop") => {
	const unit = unitsAttr?.[device] || unitsAttr?.Desktop || "px";
	if (!attr) return "";
	const { top, right, bottom, left } = attr;
	return `${top !== "" ? top + unit : "0"} ${
		right !== "" ? right + unit : "0"
	} ${bottom !== "" ? bottom + unit : "0"} ${left !== "" ? left + unit : "0"}`;
};

const generateCircleMenuStyle = (attributes) => {
	const getBackgroundStyle = (
		type,
		color,
		gradient,
		customSwitcher,
		customValue,
		imageUrl,
		imagePosition,
		imageAttachment,
		imageRepeat,
		imageSize,
		otherType = "classic",
	) => {
		const finalColor = color || "transparent";
		if (type === "classic") {
			let style = "";
			if (otherType === "gradient") {
				style = `background-image: linear-gradient(${finalColor}, ${finalColor});`;
			} else {
				style = `background-color: ${finalColor};`;
			}

			if (imageUrl) {
				style += ` background-image: ${
					otherType === "gradient"
						? `linear-gradient(${finalColor}, ${finalColor}), `
						: ""
				}url(${imageUrl});`;
				if (imagePosition) style += ` background-position: ${imagePosition};`;
				if (imageAttachment)
					style += ` background-attachment: ${imageAttachment};`;
				if (imageRepeat) style += ` background-repeat: ${imageRepeat};`;
				if (imageSize) style += ` background-size: ${imageSize};`;
			}
			// ==========================================
			// 11. Custom CSS & Return
			// ==========================================
			return style || "background: transparent;";
		} else {
			const gradientVal = customSwitcher ? customValue : gradient;
			return gradientVal
				? `background: ${gradientVal};`
				: `background: ${finalColor};`;
		}
	};

	const getLastColorFromGradient = (gradientVal, fallback) => {
		if (!gradientVal || !gradientVal.includes("gradient")) return fallback;
		const colors = gradientVal.match(/(rgba?\(.*?\)|#[0-9a-fA-F]{3,8})/g);
		if (colors && colors.length > 0) {
			return colors[colors.length - 1];
		}
		return fallback;
	};

	const {
		blockID,
		offsetH,
		offsetV,
		activeOffsetH,
		activeOffsetV,
		mainMenuSize,
		mainMenuBgColor,
		mainMenuBgHoverColor,
		mainMenuTextColor,
		mainMenuTextHoverColor,
		mainMenuIconSize,
		submenuSize,
		submenuBgColor,
		submenuBgHoverColor,
		submenuIconSize,
		submenuIconColor,
		submenuIconHoverColor,
		submenuSpace,
		submenuHorizontalSpace,
		menuPreset,
		mainMenuImageSize,
		mainMenuCloseImageSize,
		// Border Radius
		mainMenuBorderRadiusUnits,
		mainMenuBorderRadiusDesktop,
		mainMenuBorderRadiusTablet,
		mainMenuBorderRadiusMobile,
		submenuBorderRadiusUnits,
		submenuBorderRadiusDesktop,
		submenuBorderRadiusTablet,
		submenuBorderRadiusMobile,
		// Border
		mainMenuBorder,
		mainMenuBorderColor,
		mainMenuBorderHoverColor,
		mainMenuBorderUnits,
		mainMenuBorderDesktop,
		mainMenuBorderTablet,
		mainMenuBorderMobile,
		submenuBorder,
		submenuBorderColor,
		submenuBorderHoverColor,
		submenuBorderUnits,
		submenuBorderDesktop,
		submenuBorderTablet,
		submenuBorderMobile,
		// ==========================================
		// 5. Box Shadow Handlers (Main & Sub Menu)
		// ==========================================
		// Main Menu Shadows
		mainMenuBoxShadowCssValue,
		mainMenuBoxShadowHoverCssValue,
		submenuBoxShadowCssValue,
		submenuBoxShadowHoverCssValue,
		// Text Typography
		mainMenuTextFontFamily,
		mainMenuTextFontSize,
		mainMenuTextFontSizeUnits,
		mainMenuTextFontWeight,
		mainMenuTextFontStyle,
		mainMenuTextTransform,
		mainMenuTextDecoration,
		mainMenuTextLetterSpacing,
		mainMenuTextLetterSpacingUnits,
		mainMenuTextLineHeight,
		mainMenuTextLineHeightUnits,
		// Sub Menu Text Typography
		submenuTextFontFamily,
		submenuTextFontSize,
		submenuTextFontSizeUnits,
		submenuTextFontWeight,
		submenuTextFontStyle,
		submenuTextTransform,
		submenuTextDecoration,
		submenuTextLetterSpacing,
		submenuTextLetterSpacingUnits,
		submenuTextLineHeight,
		submenuTextLineHeightUnits,
		// Sub Menu Title
		submenuTitleColor,
		submenuTitleBgColor,
		submenuTitleBgGradientColor,
		submenuTitleBgColorType,
		submenuTitleBgCustomGradientSwitcher,
		submenuTitleBgCustomGradientInputValue,
		submenuTitlePosition,
		// Background Type
		mainMenuNormalBackgroundType,
		mainMenuNormalGradientColor,
		mainMenuNormalCustomGradientSwitcher,
		mainMenuNormalCustomGradientInputValue,
		mainMenuHoverBackgroundType,
		mainMenuHoverGradientColor,
		mainMenuHoverCustomGradientSwitcher,
		mainMenuHoverCustomGradientInputValue,
		submenuNormalBackgroundType,
		submenuNormalGradientColor,
		submenuNormalCustomGradientSwitcher,
		submenuNormalCustomGradientInputValue,
		submenuHoverBackgroundType,
		submenuHoverGradientColor,
		submenuHoverCustomGradientSwitcher,
		submenuHoverCustomGradientInputValue,
		// Global Setting
		circleMenuGlobalZIndex,
		circleMenuOverflow,
		circleMenuPositionType,
		circleMenuHZOrientationType,
		circleMenuVROrientationType,
		circleMenuHZLeftOffset,
		circleMenuHZLeftOffsetUnits,
		circleMenuHZRightOffset,
		circleMenuHZRightOffsetUnits,
		circleMenuVRTopOffset,
		circleMenuVRTopOffsetUnits,
		circleMenuVRBottomOffset,
		circleMenuVRBottomOffsetUnits,
		circleMenuGlobalPaddingUnits,
		circleMenuGlobalPaddingDesktop,
		circleMenuGlobalPaddingTablet,
		circleMenuGlobalPaddingMobile,
		circleMenuGlobalMarginUnits,
		circleMenuGlobalMarginDesktop,
		circleMenuGlobalMarginTablet,
		circleMenuGlobalMarginMobile,
		circleMenuGlobalBgColorSwitcher,
		circleMenuGlobalBgColor,
		circleMenuGlobalBgHoverColor,
		circleMenuGlobalNormalBackgroundType,
		circleMenuGlobalNormalGradientColor,
		circleMenuGlobalNormalCustomGradientSwitcher,
		circleMenuGlobalNormalCustomGradientInputValue,
		circleMenuGlobalHoverBackgroundType,
		circleMenuGlobalHoverGradientColor,
		circleMenuGlobalHoverCustomGradientSwitcher,
		circleMenuGlobalHoverCustomGradientInputValue,
		circleMenuGlobalBorder,
		circleMenuGlobalBorderColor,
		circleMenuGlobalBorderHoverColor,
		circleMenuGlobalBorderUnits,
		circleMenuGlobalBorderDesktop,
		circleMenuGlobalBorderTablet,
		circleMenuGlobalBorderMobile,
		circleMenuGlobalBorderRadiusUnits,
		circleMenuGlobalBorderRadiusDesktop,
		circleMenuGlobalBorderRadiusTablet,
		circleMenuGlobalBorderRadiusMobile,
		circleMenuGlobalBoxShadowCssValue,
		circleMenuGlobalBoxShadowHoverCssValue,
		circleMenuGlobalCustomCSS,
		// Background Image
		circleMenuGlobalBgImageUrl,
		circleMenuGlobalBgImagePosition,
		circleMenuGlobalBgImageAttachment,
		circleMenuGlobalBgImageRepeat,
		circleMenuGlobalBgImageSize,
		circleMenuGlobalBgHoverImageUrl,
		circleMenuGlobalBgHoverImagePosition,
		circleMenuGlobalBgHoverImageAttachment,
		circleMenuGlobalBgHoverImageRepeat,
		circleMenuGlobalBgHoverImageSize,
		// Responsive switcher
		circleMenuDesktopSwitcher,
		circleMenuTabletSwitcher,
		circleMenuMobileSwitcher,
	} = attributes;

	const generateDeviceStyle = (device) => {
		// ==========================================
		// 2. Main Menu Size & Offsets Calculation
		// ==========================================
		const h = getV(offsetH, device, 40);
		const v = getV(offsetV, device, 40);
		const activeH = getV(activeOffsetH, device, h);
		const activeV = getV(activeOffsetV, device, v);
		const size = getV(mainMenuSize, device, 72);
		const mSize = parseFloat(getV(mainMenuSize, device, 72)) || 72;
		const mIconSize = parseFloat(getV(mainMenuIconSize, device, 32)) || 32;
		const sSize = parseFloat(getV(submenuSize, device, 62)) || 62;
		const sIconSize = parseFloat(getV(submenuIconSize, device, 24)) || 24;
		const mainMenuImgSize = getV(mainMenuImageSize, device, "cover");
		const mainMenuCloseImgSize = getV(mainMenuCloseImageSize, device, "cover");

		// ==========================================
		// 3. CSS Variable Construction Start
		// ==========================================
		let customStyle = "";
		// Border Radius
		const mRadius = getSpacing(
			attributes[`mainMenuBorderRadius${device}`],
			mainMenuBorderRadiusUnits,
			device,
		);
		const sRadius = getSpacing(
			attributes[`submenuBorderRadius${device}`],
			submenuBorderRadiusUnits,
			device,
		);

		// Border Width
		const mBorderWidth = getSpacing(
			attributes[`mainMenuBorder${device}`],
			mainMenuBorderUnits,
			device,
		);
		const sBorderWidth = getSpacing(
			attributes[`submenuBorder${device}`],
			submenuBorderUnits,
			device,
		);

		// Dynamic size calculation for editor
		let rawRGap = parseInt(getV(submenuSpace, device, 0), 10);
		const rGap = isNaN(rawRGap) ? 0 : rawRGap;

		let rawHGap = parseInt(getV(submenuHorizontalSpace, device, 10), 10);
		const hGap = isNaN(rawHGap) ? 10 : rawHGap;
		const radius = 100 + rGap;
		let editorWrapperSize = mSize + 40; // Default

		if (menuPreset === "horizontal-menu") {
			const pos = attributes.menuPosition;
			const align = attributes.submenuHorizontalAlign;
			let direction = "right";

			if (pos === "bottom-right")
				direction = align === "vertical" ? "top" : "left";
			else if (pos === "bottom-left")
				direction = align === "vertical" ? "top" : "right";
			else if (pos === "top-center")
				direction = align === "vertical" ? "bottom" : "left";
			else if (pos === "bottom-center")
				direction = align === "vertical" ? "top" : "left";
			else if (pos === "center-right")
				direction = align === "vertical" ? "left" : "bottom";
			else if (pos === "center-left")
				direction = align === "vertical" ? "top" : "right";
			else if (pos === "top-right")
				direction = align === "vertical" ? "bottom" : "left";
			else if (pos === "top-left")
				direction = align === "vertical" ? "bottom" : "right";

			const isVerticalFly = direction === "top" || direction === "bottom";

			if (isVerticalFly) {
				editorWrapperSize = Math.max(mSize + 40, (sSize + hGap) * 4);
			} else {
				editorWrapperSize = mSize + 40;
			}
		} else {
			editorWrapperSize = (radius + sSize / 2) * 2 + 20;
		}

		// Global Styling
		const gPadding = getSpacing(
			attributes[`circleMenuGlobalPadding${device}`],
			circleMenuGlobalPaddingUnits,
			device,
		);
		const gMargin = getSpacing(
			attributes[`circleMenuGlobalMargin${device}`],
			circleMenuGlobalMarginUnits,
			device,
		);
		const gBorderWidth = getSpacing(
			attributes[`circleMenuGlobalBorder${device}`],
			circleMenuGlobalBorderUnits,
			device,
		);
		const gBorderRadius = getSpacing(
			attributes[`circleMenuGlobalBorderRadius${device}`],
			circleMenuGlobalBorderRadiusUnits,
			device,
		);

		const zIndex = getV(circleMenuGlobalZIndex, device, "");
		const hzLeft = getV(circleMenuHZLeftOffset, device, "");
		const hzRight = getV(circleMenuHZRightOffset, device, "");
		const vrTop = getV(circleMenuVRTopOffset, device, "");
		const vrBottom = getV(circleMenuVRBottomOffset, device, "");

		// Positioning logic for menu items
		let itemStyles = "";
		const total = attributes.menuItems.length;

		attributes.menuItems.forEach((item, i) => {
			let x = 0,
				y = 0;
			let direction = "right";
			let startAngle = 0;
			let spreadAngle = 360;

			// ==========================================
			// 10. Global Position & Alignment Handlers
			// ==========================================
			if (menuPreset === "circular-menu") {
				startAngle = -90;
				spreadAngle = 360;
			} else if (menuPreset === "horizontal-menu") {
				startAngle = 180;
				spreadAngle = 0;

				const pos = attributes.menuPosition;
				const align = attributes.submenuHorizontalAlign;

				if (pos === "bottom-right")
					direction = align === "vertical" ? "top" : "left";
				else if (pos === "bottom-left")
					direction = align === "vertical" ? "top" : "right";
				else if (pos === "top-center")
					direction = align === "vertical" ? "bottom" : "left";
				else if (pos === "bottom-center")
					direction = align === "vertical" ? "top" : "left";
				else if (pos === "center-right")
					direction = align === "vertical" ? "left" : "bottom";
				else if (pos === "center-left")
					direction = align === "vertical" ? "top" : "right";
				else if (pos === "top-right")
					direction = align === "vertical" ? "bottom" : "left";
				else if (pos === "top-left")
					direction = align === "vertical" ? "bottom" : "right";
			} else {
				// half-circular
				const pos = attributes.menuPosition;
				if (pos === "bottom-right") {
					startAngle = 180;
					spreadAngle = 90;
				} else if (pos === "bottom-left") {
					startAngle = 270;
					spreadAngle = 90;
				} else if (pos === "top-right") {
					startAngle = 90;
					spreadAngle = 90;
				} else if (pos === "top-left") {
					startAngle = 0;
					spreadAngle = 90;
				} else if (pos === "top-center") {
					startAngle = 0;
					spreadAngle = 180;
				} else if (pos === "bottom-center") {
					startAngle = 180;
					spreadAngle = 180;
				} else if (pos === "center-right") {
					startAngle = 90;
					spreadAngle = 180;
				} else if (pos === "center-left") {
					startAngle = 270;
					spreadAngle = 180;
				}
			}

			if (menuPreset === "horizontal-menu") {
				const gap = sSize + hGap;
				if (direction === "left") x = -(i + 1) * gap;
				if (direction === "right") x = (i + 1) * gap;
				if (direction === "top") y = -(i + 1) * gap;
				if (direction === "bottom") y = (i + 1) * gap;
			} else {
				let angle;
				if (total === 1) {
					angle = startAngle + spreadAngle / 2;
				} else {
					angle =
						menuPreset === "circular-menu"
							? startAngle + (spreadAngle / total) * i
							: startAngle + (spreadAngle / (total - 1)) * i;
				}
				const rad = angle * (Math.PI / 180);
				x = Math.cos(rad) * radius;
				y = Math.sin(rad) * radius;
			}

			const openDelay = i * 0.1;
			const closeDelay = (total - 1 - i) * 0.05;

			itemStyles += `
                .${blockID} .fb-circle-menu-item:nth-child(${i + 1}) {
                    transition-delay: ${closeDelay}s;
                    transform: translate(-50%, -50%) scale(0);
                    opacity: 0;
                }
                .${blockID}.is-active .fb-circle-menu-item:nth-child(${i + 1}),
                .${blockID} .fb-parent-wrapper.is-active .fb-circle-menu-item:nth-child(${
									i + 1
								}),
                .${blockID} .fb-circle-menu.is-active .fb-circle-menu-item:nth-child(${
									i + 1
								}) {
                    transition-delay: ${openDelay}s;
                    transform: translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1);
                    opacity: 1;
                    pointer-events: auto;
                }
                .${blockID} .fb-circle-menu-item:nth-child(${i + 1}):hover {
                    transition-delay: 0s !important;
                }
            `;
		});

		// Typography responsive values
		const tFontSize = getV(mainMenuTextFontSize, device, 16);
		const tFontSizeUnit =
			mainMenuTextFontSizeUnits?.[device] ||
			mainMenuTextFontSizeUnits?.Desktop ||
			"px";
		const tLetterSpacing = getV(mainMenuTextLetterSpacing, device, "");
		const tLetterSpacingUnit =
			mainMenuTextLetterSpacingUnits?.[device] ||
			mainMenuTextLetterSpacingUnits?.Desktop ||
			"px";
		const tLineHeight = getV(mainMenuTextLineHeight, device, "");
		const tLineHeightUnit =
			mainMenuTextLineHeightUnits?.[device] ||
			mainMenuTextLineHeightUnits?.Desktop ||
			"px";

		// Sub Menu Typography
		const stFontSize = getV(submenuTextFontSize, device, 14);
		const stFontSizeUnit =
			submenuTextFontSizeUnits?.[device] ||
			submenuTextFontSizeUnits?.Desktop ||
			"px";
		const stLetterSpacing = getV(submenuTextLetterSpacing, device, "");
		const stLetterSpacingUnit =
			submenuTextLetterSpacingUnits?.[device] ||
			submenuTextLetterSpacingUnits?.Desktop ||
			"px";
		const stLineHeight = getV(submenuTextLineHeight, device, "");
		const stLineHeightUnit =
			submenuTextLineHeightUnits?.[device] ||
			submenuTextLineHeightUnits?.Desktop ||
			"px";

		const menuWrapperSelector = `.${blockID}.fb-circle-menu-main-wrapper`;

		// ==========================================
		// 4. Global Wrappers Styling
		// ==========================================
		return `
            ${menuWrapperSelector} {
                --fb-cm-offset-h: ${h}px;
                --fb-cm-offset-v: ${v}px;
                --fb-cm-wrapper-size: ${editorWrapperSize}px;
                ${gPadding ? `padding: ${gPadding};` : ""}
                ${gMargin ? `margin: ${gMargin};` : ""}
                ${gBorderWidth ? `border-width: ${gBorderWidth};` : ""}
                ${gBorderRadius ? `border-radius: ${gBorderRadius};` : ""}
                ${
									circleMenuGlobalBorder !== "none"
										? `border-style: ${circleMenuGlobalBorder};`
										: ""
								}
                ${zIndex ? `z-index: ${zIndex};` : ""}
                ${
									circleMenuOverflow !== "default"
										? `overflow: ${circleMenuOverflow};`
										: ""
								}
                
                ${
									circleMenuPositionType !== "default"
										? `position: ${circleMenuPositionType};`
										: ""
								}
                ${
									circleMenuPositionType !== "default" &&
									circleMenuPositionType !== "relative" &&
									circleMenuHZOrientationType === "left" &&
									circleMenuHZLeftOffset?.[device] !== undefined
										? `left: ${circleMenuHZLeftOffset?.[device]}${circleMenuHZLeftOffsetUnits?.[device]};`
										: ""
								}
                ${
									circleMenuPositionType !== "default" &&
									circleMenuPositionType !== "relative" &&
									circleMenuHZOrientationType === "right" &&
									circleMenuHZRightOffset?.[device] !== undefined
										? `right: ${circleMenuHZRightOffset?.[device]}${circleMenuHZRightOffsetUnits?.[device]};`
										: ""
								}
                ${
									circleMenuPositionType !== "default" &&
									circleMenuPositionType !== "relative" &&
									circleMenuVROrientationType === "top" &&
									circleMenuVRTopOffset?.[device] !== undefined
										? `top: ${circleMenuVRTopOffset?.[device]}${circleMenuVRTopOffsetUnits?.[device]};`
										: ""
								}
                ${vrBottom ? `bottom: ${vrBottom}${vrBottomUnits};` : ""}
                --fb-cm-main-radius: ${mRadius || "50%"};
                --fb-cm-main-border-width: ${mBorderWidth || "0"};
                --fb-cm-sub-radius: ${sRadius || "50%"};
                --fb-cm-sub-border-width: ${sBorderWidth || "0"};
            }
            .${blockID}.fb-circle-menu-main-wrapper.is-active {
                --fb-cm-offset-h: ${activeH}px;
                --fb-cm-offset-v: ${activeV}px;
            }

            /* ==========================================
             * 6. Base CSS Generation (Assigning Variables)
             * ========================================== */
            .${blockID} .fb-circle-menu {
                --fb-cm-main-size: ${size}px;
                --fb-cm-sub-size: ${sSize}px;
                --fb-cm-main-icon-size: ${mSize}px;
                --fb-cm-sub-icon-size: ${sSize}px;
            }

            .${blockID} .fb-circle-menu-toggle svg,
            .${blockID} .fb-circle-menu-toggle i,
            .${blockID} .fb-circle-menu-toggle img {
                width: ${mIconSize}px;
                height: ${mIconSize}px;
                object-fit: ${mainMenuImgSize};
            }

            .${blockID} .fb-circle-menu-toggle .fb-circle-menu-close-icon img {
                object-fit: ${mainMenuCloseImgSize};
            }

            .${blockID} .fb-circle-menu-icon svg,
            .${blockID} .fb-circle-menu-icon i,
            .${blockID} .fb-circle-menu-icon img {
                width: ${sIconSize}px;
                height: ${sIconSize}px;
            }

            ${
							tFontSize !== ""
								? `.${blockID} .fb-circle-menu-toggle .fb-circle-menu-text { font-size: ${tFontSize}${tFontSizeUnit}; }`
								: ""
						}
            ${
							tLetterSpacing !== ""
								? `.${blockID} .fb-circle-menu-toggle .fb-circle-menu-text { letter-spacing: ${tLetterSpacing}${tLetterSpacingUnit}; }`
								: ""
						}
            ${
							tLineHeight !== ""
								? `.${blockID} .fb-circle-menu-toggle .fb-circle-menu-text { line-height: ${tLineHeight}${tLineHeightUnit}; }`
								: ""
						}

            /* Sub Menu Tooltip Typography */
            ${
							stFontSize !== ""
								? `.${blockID} .fb-circle-menu-tooltip { font-size: ${stFontSize}${stFontSizeUnit}; }`
								: ""
						}
            ${
							stLetterSpacing !== ""
								? `.${blockID} .fb-circle-menu-tooltip { letter-spacing: ${stLetterSpacing}${stLetterSpacingUnit}; }`
								: ""
						}
            ${
							stLineHeight !== ""
								? `.${blockID} .fb-circle-menu-tooltip { line-height: ${stLineHeight}${stLineHeightUnit}; }`
								: ""
						}
            
            ${itemStyles}
        `;
	};

	const desktopStyle = generateDeviceStyle("Desktop");
	const tabletStyle = generateDeviceStyle("Tablet");
	const mobileStyle = generateDeviceStyle("Mobile");

	const circleMenuBlockStyle = `
        ${desktopStyle}

        .${blockID} .fb-circle-menu {
            --fb-cm-main-bg: ${
							mainMenuNormalBackgroundType === "classic"
								? mainMenuHoverBackgroundType === "gradient"
									? `linear-gradient(${mainMenuBgColor || "#399CFF"}, ${
											mainMenuBgColor || "#399CFF"
									  })`
									: mainMenuBgColor || "#399CFF"
								: (mainMenuNormalCustomGradientSwitcher
										? mainMenuNormalCustomGradientInputValue
										: mainMenuNormalGradientColor) ||
								  mainMenuBgColor ||
								  "#399CFF"
						};
            --fb-cm-main-bg-hover: ${
							// ==========================================
							// 7. Hover States CSS Generation
							// ==========================================
							mainMenuHoverBackgroundType === "classic"
								? mainMenuNormalBackgroundType === "gradient"
									? `linear-gradient(${
											mainMenuBgHoverColor || mainMenuBgColor || "#399CFF"
									  }, ${mainMenuBgHoverColor || mainMenuBgColor || "#399CFF"})`
									: mainMenuBgHoverColor || mainMenuBgColor || "#399CFF"
								: (mainMenuHoverCustomGradientSwitcher
										? mainMenuHoverCustomGradientInputValue
										: mainMenuHoverGradientColor) ||
								  mainMenuBgHoverColor ||
								  mainMenuBgColor ||
								  "#399CFF"
						};
            --fb-cm-main-color: ${mainMenuTextColor || "#FFFFFF"};
            --fb-cm-main-color-hover: ${
							mainMenuTextHoverColor || mainMenuTextColor || "#FFFFFF"
						};
            --fb-cm-sub-bg: ${
							submenuNormalBackgroundType === "classic"
								? submenuHoverBackgroundType === "gradient"
									? `linear-gradient(${submenuBgColor || "#D7EBFF"}, ${
											submenuBgColor || "#D7EBFF"
									  })`
									: submenuBgColor || "#D7EBFF"
								: (submenuNormalCustomGradientSwitcher
										? submenuNormalCustomGradientInputValue
										: submenuNormalGradientColor) ||
								  submenuBgColor ||
								  "#D7EBFF"
						};
            --fb-cm-sub-bg-hover: ${
							submenuHoverBackgroundType === "classic"
								? submenuNormalBackgroundType === "gradient"
									? `linear-gradient(${
											submenuBgHoverColor || submenuBgColor || "#D7EBFF"
									  }, ${submenuBgHoverColor || submenuBgColor || "#D7EBFF"})`
									: submenuBgHoverColor || submenuBgColor || "#D7EBFF"
								: (submenuHoverCustomGradientSwitcher
										? submenuHoverCustomGradientInputValue
										: submenuHoverGradientColor) ||
								  submenuBgHoverColor ||
								  submenuBgColor ||
								  "#D7EBFF"
						};
            --fb-cm-sub-color: ${submenuIconColor || "#15171C"};
            --fb-cm-sub-color-hover: ${
							submenuIconHoverColor || submenuIconColor || "#15171C"
						};
            
            --fb-cm-main-border-style: ${mainMenuBorder || "none"};
            --fb-cm-main-border-color: ${mainMenuBorderColor || "transparent"};
            --fb-cm-main-border-hover-color: ${
							mainMenuBorderHoverColor || mainMenuBorderColor || "transparent"
						};
            --fb-cm-sub-border-style: ${submenuBorder || "none"};
            --fb-cm-sub-border-color: ${submenuBorderColor || "transparent"};
            --fb-cm-sub-border-hover-color: ${
							submenuBorderHoverColor || submenuBorderColor || "transparent"
						};
        }

        /* Normal State */
        .${blockID} .fb-circle-menu-center {
            background: var(--fb-cm-main-bg);
            border-style: var(--fb-cm-main-border-style);
            border-color: var(--fb-cm-main-border-color);
            box-shadow: ${mainMenuBoxShadowCssValue || "none"};
        }
        .${blockID} .fb-circle-menu-center .fb-circle-menu-toggle svg,
        .${blockID} .fb-circle-menu-center .fb-circle-menu-toggle i,
        .${blockID} .fb-circle-menu-center .fb-circle-menu-toggle p {
            color: var(--fb-cm-main-color);
            fill: var(--fb-cm-main-color);
        }
        .${blockID} .fb-circle-menu-center .fb-circle-menu-toggle .fb-circle-menu-text {
            color: var(--fb-cm-main-color);
        }

        /* Text Typography (non-responsive) */
        .${blockID} .fb-circle-menu-toggle .fb-circle-menu-text {
            ${
							mainMenuTextFontFamily && mainMenuTextFontFamily !== "Default"
								? `font-family: '${mainMenuTextFontFamily}', sans-serif;`
								: ""
						}
            ${
							mainMenuTextFontWeight
								? `font-weight: ${mainMenuTextFontWeight};`
								: ""
						}
            ${
							mainMenuTextFontStyle
								? `font-style: ${mainMenuTextFontStyle};`
								: ""
						}
            ${
							mainMenuTextTransform
								? `text-transform: ${mainMenuTextTransform};`
								: ""
						}
            ${
							mainMenuTextDecoration
								? `text-decoration: ${mainMenuTextDecoration};`
								: ""
						}
        }

        /* Sub Menu Tooltip Styles */
        .${blockID} .fb-circle-menu-tooltip {
            ${getBackgroundStyle(
							submenuTitleBgColorType,
							submenuTitleBgColor,
							submenuTitleBgGradientColor,
							submenuTitleBgCustomGradientSwitcher,
							submenuTitleBgCustomGradientInputValue,
						)}
            color: ${submenuTitleColor || "#FFFFFF"};
            ${
							submenuTextFontFamily && submenuTextFontFamily !== "Default"
								? `font-family: '${submenuTextFontFamily}', sans-serif;`
								: ""
						}
            ${
							submenuTextFontWeight
								? `font-weight: ${submenuTextFontWeight};`
								: ""
						}
            ${
							submenuTextFontStyle ? `font-style: ${submenuTextFontStyle};` : ""
						}
            ${
							submenuTextTransform
								? `text-transform: ${submenuTextTransform};`
								: ""
						}
            ${
							submenuTextDecoration
								? `text-decoration: ${submenuTextDecoration};`
								: ""
						}

            /* Tooltip Position */
            ${
							submenuTitlePosition === "top"
								? `
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%) translateY(0) scale(0.8);
                margin-bottom: 10px;
                margin-top: 0;
                margin-left: 0;
                margin-right: 0;
                top: auto;
                right: auto;
            `
								: ""
						}
            ${
							submenuTitlePosition === "bottom"
								? `
                top: 100%;
                bottom: auto;
                left: 50%;
                transform: translateX(-50%) translateY(0) scale(0.8);
                margin-top: 10px;
                margin-bottom: 0;
                margin-left: 0;
                margin-right: 0;
                right: auto;
            `
								: ""
						}
            ${
							submenuTitlePosition === "left"
								? `
                right: 100%;
                left: auto;
                top: 50%;
                transform: translateY(-50%) scale(0.8);
                margin-right: 10px;
                margin-top: 0;
                margin-bottom: 0;
                margin-left: 0;
                bottom: auto;
            `
								: ""
						}
            ${
							submenuTitlePosition === "right"
								? `
                left: 100%;
                right: auto;
                top: 50%;
                transform: translateY(-50%) scale(0.8);
                margin-left: 10px;
                margin-top: 0;
                margin-bottom: 0;
                margin-right: 0;
                bottom: auto;
            `
								: ""
						}
        }

        /* Tooltip Arrow Color and Position */
        .${blockID} .fb-circle-menu-tooltip::after {
            ${(() => {
							const currentGradient = submenuTitleBgCustomGradientSwitcher
								? submenuTitleBgCustomGradientInputValue
								: submenuTitleBgGradientColor;
							const arrowColor =
								submenuTitleBgColorType === "classic"
									? submenuTitleBgColor || "#15171C"
									: getLastColorFromGradient(
											currentGradient,
											submenuTitleBgColor || "#15171C",
									  );

							if (submenuTitlePosition === "top") {
								return `
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    border-color: ${arrowColor} transparent transparent transparent;
                    bottom: auto;
                    right: auto;
                `;
							}
							if (submenuTitlePosition === "bottom") {
								return `
                    bottom: 100%;
                    top: auto;
                    left: 50%;
                    transform: translateX(-50%);
                    border-color: transparent transparent ${arrowColor} transparent;
                    right: auto;
                `;
							}
							if (submenuTitlePosition === "left") {
								return `
                    left: 100%;
                    top: 50%;
                    transform: translateY(-50%);
                    border-color: transparent transparent transparent ${arrowColor};
                    bottom: auto;
                    right: auto;
                `;
							}
							if (submenuTitlePosition === "right") {
								return `
                    right: 100%;
                    left: auto;
                    top: 50%;
                    transform: translateY(-50%);
                    border-color: transparent ${arrowColor} transparent transparent;
                    bottom: auto;
                `;
							}
							return "";
						})()}
        }

        /* Hover transform for tooltip */
        .${blockID} .fb-circle-menu-item:hover .fb-circle-menu-tooltip {
            ${
							submenuTitlePosition === "top"
								? "transform: translateX(-50%) translateY(-5px) scale(1);"
								: ""
						}
            ${
							submenuTitlePosition === "bottom"
								? "transform: translateX(-50%) translateY(5px) scale(1);"
								: ""
						}
            ${
							submenuTitlePosition === "left"
								? "transform: translateY(-50%) translateX(-5px) scale(1);"
								: ""
						}
            ${
							submenuTitlePosition === "right"
								? "transform: translateY(-50%) translateX(5px) scale(1);"
								: ""
						}
        }

        /* Hover State - Triggers when parent container is hovered */
        .${blockID} .fb-circle-menu:hover .fb-circle-menu-center,
        .${blockID} .fb-circle-menu-center.is-active {
            background: var(--fb-cm-main-bg-hover);
            border-color: var(--fb-cm-main-border-hover-color);
            box-shadow: ${
							mainMenuBoxShadowHoverCssValue ||
							mainMenuBoxShadowCssValue ||
							"none"
						};
        }

        .${blockID} .fb-circle-menu:hover .fb-circle-menu-center .fb-circle-menu-toggle svg,
        .${blockID} .fb-circle-menu:hover .fb-circle-menu-center .fb-circle-menu-toggle i,
        .${blockID} .fb-circle-menu:hover .fb-circle-menu-center .fb-circle-menu-toggle p,
        .${blockID} .fb-circle-menu:hover .fb-circle-menu-center .fb-circle-menu-toggle .fb-circle-menu-text,
        .${blockID} .fb-circle-menu-center.is-active .fb-circle-menu-toggle svg,
        .${blockID} .fb-circle-menu-center.is-active .fb-circle-menu-toggle i,
        .${blockID} .fb-circle-menu-center.is-active .fb-circle-menu-toggle p,
        .${blockID} .fb-circle-menu-center.is-active .fb-circle-menu-toggle .fb-circle-menu-text {
            color: var(--fb-cm-main-color-hover);
            fill: var(--fb-cm-main-color-hover);
        }

        /* Sub Menu Normal State */
        .${blockID} .fb-circle-menu-item {
            background: var(--fb-cm-sub-bg);
            border-style: var(--fb-cm-sub-border-style);
            border-color: var(--fb-cm-sub-border-color);
            box-shadow: ${submenuBoxShadowCssValue || "none"};
        }
        .${blockID} .fb-circle-menu-item .fb-circle-menu-icon svg,
        .${blockID} .fb-circle-menu-item .fb-circle-menu-icon i {
            color: var(--fb-cm-sub-color);
            fill: var(--fb-cm-sub-color);
        }

        /* Sub Menu Hover State */
        .${blockID} .fb-circle-menu-item:hover {
            background: var(--fb-cm-sub-bg-hover);
            border-color: var(--fb-cm-sub-border-hover-color);
            box-shadow: ${
							submenuBoxShadowHoverCssValue ||
							submenuBoxShadowCssValue ||
							"none"
						};
        }
        .${blockID} .fb-circle-menu-item:hover .fb-circle-menu-icon svg,
        .${blockID} .fb-circle-menu-item:hover .fb-circle-menu-icon i {
            color: var(--fb-cm-sub-color-hover);
            fill: var(--fb-cm-sub-color-hover);
        }

        /* Global Decoration Styles */
        .${blockID}.fb-circle-menu-main-wrapper {
            ${getBackgroundStyle(
							circleMenuGlobalNormalBackgroundType,
							circleMenuGlobalBgColor,
							circleMenuGlobalNormalGradientColor,
							circleMenuGlobalNormalCustomGradientSwitcher,
							circleMenuGlobalNormalCustomGradientInputValue,
							circleMenuGlobalBgImageUrl,
							circleMenuGlobalBgImagePosition,
							circleMenuGlobalBgImageAttachment,
							circleMenuGlobalBgImageRepeat,
							circleMenuGlobalBgImageSize,
							circleMenuGlobalHoverBackgroundType,
						)}
            border-color: ${circleMenuGlobalBorderColor || "transparent"};
            box-shadow: ${circleMenuGlobalBoxShadowCssValue || "none"};
            transition: all 0.3s ease;
        }
        
        .${blockID}.fb-circle-menu-main-wrapper:hover {
            ${getBackgroundStyle(
							circleMenuGlobalHoverBackgroundType,
							circleMenuGlobalBgHoverColor,
							circleMenuGlobalHoverGradientColor,
							circleMenuGlobalHoverCustomGradientSwitcher,
							circleMenuGlobalHoverCustomGradientInputValue,
							circleMenuGlobalBgHoverImageUrl,
							circleMenuGlobalBgHoverImagePosition,
							circleMenuGlobalBgHoverImageAttachment,
							circleMenuGlobalBgHoverImageRepeat,
							circleMenuGlobalBgHoverImageSize,
							circleMenuGlobalNormalBackgroundType,
						)}
            border-color: ${
							circleMenuGlobalBorderHoverColor ||
							circleMenuGlobalBorderColor ||
							"transparent"
						};
            box-shadow: ${
							circleMenuGlobalBoxShadowHoverCssValue ||
							circleMenuGlobalBoxShadowCssValue ||
							"none"
						};
        }

        @media only screen and (max-width: 1024px) {
            ${tabletStyle}
        }

        @media only screen and (max-width: 767px) {
            ${mobileStyle}
        }
    `;

	const customCss = getCustomCss(circleMenuGlobalCustomCSS, `.${blockID}`);
	return `${circleMenuBlockStyle} ${customCss}`.replace(/\s+/g, " ").trim();
};

export default generateCircleMenuStyle;
