import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TabPanel,
	SelectControl,
	BaseControl,
	Button,
	ButtonGroup,
	ToggleControl,
	TextControl,
	TextareaControl,
	Dropdown
} from '@wordpress/components';
import { useEffect, useState, useMemo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { store as editorStore } from '@wordpress/editor';
import {
	ANIMATION,
	MENU_TYPE,
	BORDER_STYLES,
	BACKGROUND_TYPES
} from "@Constants/fbConstants";
import FBIconPicker from "../../components/icon-picker";
import "./editor.scss";
import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import getProToggleControls from '@Utils/getProToggleControls';
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import generateSvgIcon from '@Utils/generateSvgIcon';
import getProActive from '@Utils/getProActive';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		blockStyle,
		selectedTemplate,
		menuPosition,
		offCanvasPanelWidth,
		offCanvasPanelWidthUnits,
		offCanvasPanelHeight,
		offCanvasPanelHeightUnits,
		offCanvasCustomCSS,
		menuType,
		hamburgerIcon,
		hamburgerText,
		closeMenuType,
		closeMenuIcon,
		closeMenuText,
		offCanvasPanelPaddingUnits,
		offCanvasPanelDesktopPadding,
		offCanvasPanelTabPadding,
		offCanvasPanelMobilePadding,
		offCanvasPanelPaddingLink,
		offCanvasPanelMarginUnits,
		offCanvasPanelDesktopMargin,
		offCanvasPanelTabMargin,
		offCanvasPanelMobileMargin,
		offCanvasPanelMarginLink,
		offCanvasPanelBorder,
		offCanvasPanelBorderColorSwitcher,
		offCanvasPanelBorderColor,
		offCanvasPanelBorderHoverColor,
		offCanvasPanelBorderUnits,
		offCanvasPanelDesktopBorderWidth,
		offCanvasPanelTabBorderWidth,
		offCanvasPanelMobileBorderWidth,
		offCanvasPanelBorderLink,
		offCanvasPanelBorderRadiusUnits,
		offCanvasPanelDesktopBorderRadiusWidth,
		offCanvasPanelTabBorderRadiusWidth,
		offCanvasPanelMobileBorderRadiusWidth,
		offCanvasPanelBorderRadiusLink,
		offCanvasPanelBoxShadowSwitcher,
		offCanvasPanelBoxShadowValues,
		offCanvasPanelBoxShadowCssValue,
		offCanvasPanelBoxShadowHoverValues,
		offCanvasPanelBoxShadowHoverCssValue,
		offCanvasPanelBgColorSwitcher,
		offCanvasPanelBgNormalBackgroundType,
		offCanvasPanelBgNormalClassicColor,
		offCanvasPanelBgNormalGradientColor,
		offCanvasPanelBgNormalCustomGradientSwitcher,
		offCanvasPanelBgNormalCustomGradientInputValue,
		offCanvasPanelBgNormalBackgroundImageUrl,
		offCanvasPanelBgNormalBackgroundImagePosition,
		offCanvasPanelBgNormalBackgroundImageAttachment,
		offCanvasPanelBgNormalBackgroundImageRepeat,
		offCanvasPanelBgNormalBackgroundImageSize,

		offCanvasPanelBgHoverBackgroundType,
		offCanvasPanelBgHoverClassicColor,
		offCanvasPanelBgHoverGradientColor,
		offCanvasPanelBgHoverCustomGradientSwitcher,
		offCanvasPanelBgHoverCustomGradientInputValue,
		offCanvasPanelBgHoverBackgroundImageUrl,
		offCanvasPanelBgHoverBackgroundImagePosition,
		offCanvasPanelBgHoverBackgroundImageAttachment,
		offCanvasPanelBgHoverBackgroundImageRepeat,
		offCanvasPanelBgHoverBackgroundImageSize,

		//Icon
		menuIconTypeSwitcher,
		offCanvasHamburgerIconWidth,
		offCanvasHamburgerIconWidthUnits,
		offCanvasHamburgerIconBgWidth,
		offCanvasHamburgerIconBgWidthUnits,
		offCanvashamburgerIconColorSwitcher,
		offCanvashamburgerIconColor,
		offCanvashamburgerIconHoverColor,
		offCanvashamburgerIconBgColorSwitcher,
		offCanvashamburgerIconBgColor,
		offCanvashamburgerIconBgHoverColor,
		offCanvashamburgerIconBorder,
		offCanvashamburgerIconBorderColorSwitcher,
		offCanvashamburgerIconBorderColor,
		offCanvashamburgerIconBorderHoverColor,
		offCanvashamburgerIconBorderUnits,
		offCanvashamburgerIconDesktopBorderWidth,
		offCanvashamburgerIconTabBorderWidth,
		offCanvashamburgerIconMobileBorderWidth,
		offCanvashamburgerIconBorderLink,
		offCanvashamburgerIconBorderRadiusUnits,
		offCanvashamburgerIconDesktopBorderRadiusWidth,
		offCanvashamburgerIconTabBorderRadiusWidth,
		offCanvashamburgerIconMobileBorderRadiusWidth,
		offCanvashamburgerIconBorderRadiusLink,
		offCanvasHamburgerIconPaddingUnits,
		offCanvasHamburgerIconDesktopPadding,
		offCanvasHamburgerIconTabletPadding,
		offCanvasHamburgerIconMobilePadding,
		offCanvasHamburgerIconPaddingLink,

		offCanvasHamburgerIconMarginUnits,
		offCanvasHamburgerIconDesktopMargin,
		offCanvasHamburgerIconTabletMargin,
		offCanvasHamburgerIconMobileMargin,
		offCanvasHamburgerIconMarginLink,
		offCanvasCloseIconWidth,
		offCanvasCloseIconWidthUnits,
		offCanvasCloseIconBgWidth,
		offCanvasCloseIconBgWidthUnits,
		offCanvasCloseIconColorSwitcher,
		offCanvasCloseIconColor,
		offCanvasCloseIconHoverColor,
		offCanvasCloseIconBgColorSwitcher,
		offCanvasCloseIconBgColor,
		offCanvasCloseIconBgHoverColor,
		offCanvasCloseIconBorder,
		offCanvasCloseIconBorderColorSwitcher,
		offCanvasCloseIconBorderColor,
		offCanvasCloseIconBorderHoverColor,
		offCanvasCloseIconBorderUnits,
		offCanvasCloseIconDesktopBorderWidth,
		offCanvasCloseIconTabBorderWidth,
		offCanvasCloseIconMobileBorderWidth,
		offCanvasCloseIconBorderLink,
		offCanvasCloseIconBorderRadiusUnits,
		offCanvasCloseIconDesktopBorderRadiusWidth,
		offCanvasCloseIconTabBorderRadiusWidth,
		offCanvasCloseIconMobileBorderRadiusWidth,
		offCanvasCloseIconBorderRadiusLink,
		offCanvasCloseIconPaddingUnits,
		offCanvasCloseIconDesktopPadding,
		offCanvasCloseIconTabletPadding,
		offCanvasCloseIconMobilePadding,
		offCanvasCloseIconPaddingLink,

		offCanvasCloseIconMarginUnits,
		offCanvasCloseIconDesktopMargin,
		offCanvasCloseIconTabletMargin,
		offCanvasCloseIconMobileMargin,
		offCanvasCloseIconMarginLink,
	} = attributes;

	const deviceType = useDeviceType();

	const [patterns, setPatterns] = useState([]);

	const patternData = useSelect(select => {
		const allPatterns = select(coreStore) ? select(coreStore).getBlockPatterns() || [] : [];

		let userPatterns = [];
		try {
			if (select('core')) {
				userPatterns = select('core').getEntityRecords('postType', 'wp_block') || [];
			}
		} catch (error) {
			console.log('Error getting user patterns:', error);
		}

		return { allPatterns, userPatterns };
	}, []);

	useEffect(() => {
		const patternOptions = [
			{ value: '', label: __('Select a pattern', 'frontis-blocks') }
		];

		// Add all patterns
		if (patternData.allPatterns && patternData.allPatterns.length > 0) {
			patternOptions.push(
				{ value: 'core-separator', label: __('--- Theme Patterns ---', 'frontis-blocks'), disabled: true },
				...patternData.allPatterns.map(pattern => ({
					value: pattern.name,
					label: pattern.title
				}))
			);
		}

		// Add user patterns if any were found
		if (patternData.userPatterns && patternData.userPatterns.length > 0) {
			patternOptions.push(
				{ value: 'user-separator', label: __('--- User Patterns ---', 'frontis-blocks'), disabled: true },
				...patternData.userPatterns.map(pattern => ({
					value: 'user-' + pattern.id,
					label: pattern.title && pattern.title.raw ? pattern.title.raw : `Pattern ${pattern.id}`
				}))
			);

			console.log('User patterns found:', patternData.userPatterns);
		}
		setPatterns(patternOptions);
	}, [patternData]);

	// Handle pattern selection
	const getSelectedPatternContent = (patternId) => {
		if (!patternId) return '';

		try {
			// Check if it's a user pattern
			if (patternId.startsWith('user-')) {
				const id = parseInt(patternId.replace('user-', ''), 10);
				const userPattern = patternData.userPatterns.find(p => p.id === id);
				if (!userPattern) {
					console.warn(`User pattern with ID ${id} not found`);
					return '';
				}
				return userPattern?.content?.raw || '';
			} else {
				// Core pattern
				const corePattern = patternData.allPatterns.find(p => p.name === patternId);
				if (!corePattern) {
					console.warn(`Core pattern with name ${patternId} not found`);
					return '';
				}
				return corePattern?.content || '';
			}
		} catch (error) {
			console.error('Error retrieving pattern content:', error);
			return '';
		}
	};
	// Generate unique block ID if not set
	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "off-canvas-menu-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	const hamburgerIconHandler = (IconName) => {
		setAttributes({ hamburgerIcon: IconName })
	}
	const closeMenuIconHandler = (IconName) => {
		setAttributes({ closeMenuIcon: IconName })
	}

	/** Start padding */
	const handleoffCanvasPanelPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasPanelPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasPanelDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasPanelTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasPanelMobilePadding: {
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
					setAttributes({ offCanvasPanelDesktopPadding: { ...offCanvasPanelDesktopPadding, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ offCanvasPanelTabPadding: { ...offCanvasPanelTabPadding, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ offCanvasPanelMobilePadding: { ...offCanvasPanelMobilePadding, [position]: value } });
					break;
				default:
					break;
			}
		}
	}

	const handleoffCanvasPanelPaddingCombineBtn = () => {
		setAttributes({ offCanvasPanelPaddingLink: !offCanvasPanelPaddingLink });
	}

	const handleoffCanvasPanelPaddingUnitsHandler = (unit) => {
		setAttributes({
			offCanvasPanelPaddingUnits: {
				...offCanvasPanelPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** end padding */

	/** Default padding for each device */
	const offCanvasPanelDesktopPaddingStr = `${offCanvasPanelDesktopPadding?.top}${offCanvasPanelPaddingUnits?.Desktop} ${offCanvasPanelDesktopPadding?.right}${offCanvasPanelPaddingUnits?.Desktop} ${offCanvasPanelDesktopPadding?.bottom}${offCanvasPanelPaddingUnits?.Desktop} ${offCanvasPanelDesktopPadding?.left}${offCanvasPanelPaddingUnits?.Desktop}`;
	const offCanvasPanelTabletPaddingStr = `${offCanvasPanelTabPadding?.top}${offCanvasPanelPaddingUnits?.Tablet} ${offCanvasPanelTabPadding?.right}${offCanvasPanelPaddingUnits?.Tablet} ${offCanvasPanelTabPadding?.bottom}${offCanvasPanelPaddingUnits?.Tablet} ${offCanvasPanelTabPadding?.left}${offCanvasPanelPaddingUnits?.Tablet}`;
	const offCanvasPanelMobilePaddingStr = `${offCanvasPanelMobilePadding?.top}${offCanvasPanelPaddingUnits?.Mobile} ${offCanvasPanelMobilePadding?.right}${offCanvasPanelPaddingUnits?.Mobile} ${offCanvasPanelMobilePadding?.bottom}${offCanvasPanelPaddingUnits?.Mobile} ${offCanvasPanelMobilePadding?.left}${offCanvasPanelPaddingUnits?.Mobile}`;
	/** End Padding */

	/** Start Margin */
	const handleoffCanvasPanelMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasPanelMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasPanelDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasPanelTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasPanelMobileMargin: {
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
					setAttributes({ offCanvasPanelDesktopMargin: { ...offCanvasPanelDesktopMargin, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ offCanvasPanelTabMargin: { ...offCanvasPanelTabMargin, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ offCanvasPanelMobileMargin: { ...offCanvasPanelMobileMargin, [position]: value } });
					break;
				default:
					break;
			}
		}
	}

	const handleoffCanvasPanelMarginCombineBtn = () => {
		setAttributes({ offCanvasPanelMarginLink: !offCanvasPanelMarginLink });
	}

	const handleoffCanvasPanelMarginUnitsHandler = (unit) => {
		setAttributes({
			offCanvasPanelMarginUnits: {
				...offCanvasPanelMarginUnits,
				[deviceType]: unit
			}
		});
	}

	/** Default margin for each device */
	const offCanvasPanelDesktopMarginStr = `${offCanvasPanelDesktopMargin?.top}${offCanvasPanelMarginUnits?.Desktop} ${offCanvasPanelDesktopMargin?.right}${offCanvasPanelMarginUnits?.Desktop} ${offCanvasPanelDesktopMargin?.bottom}${offCanvasPanelMarginUnits?.Desktop} ${offCanvasPanelDesktopMargin?.left}${offCanvasPanelMarginUnits?.Desktop}`;
	const offCanvasPanelTabletMarginStr = `${offCanvasPanelTabMargin?.top}${offCanvasPanelMarginUnits?.Tablet} ${offCanvasPanelTabMargin?.right}${offCanvasPanelMarginUnits?.Tablet} ${offCanvasPanelTabMargin?.bottom}${offCanvasPanelMarginUnits?.Tablet} ${offCanvasPanelTabMargin?.left}${offCanvasPanelMarginUnits?.Tablet}`;
	const offCanvasPanelMobileMarginStr = `${offCanvasPanelMobileMargin?.top}${offCanvasPanelMarginUnits?.Mobile} ${offCanvasPanelMobileMargin?.right}${offCanvasPanelMarginUnits?.Mobile} ${offCanvasPanelMobileMargin?.bottom}${offCanvasPanelMarginUnits?.Mobile} ${offCanvasPanelMobileMargin?.left}${offCanvasPanelMarginUnits?.Mobile}`;
	/** End margin */

	/** Start border width */
	const handleoffCanvasPanelBorderWidthChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasPanelBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasPanelDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasPanelTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasPanelMobileBorderWidth: {
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
					setAttributes({
						offCanvasPanelDesktopBorderWidth: {
							...offCanvasPanelDesktopBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasPanelTabBorderWidth: {
							...offCanvasPanelTabBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasPanelMobileBorderWidth: {
							...offCanvasPanelMobileBorderWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleoffCanvasPanelBorderLinkToggle = () => {
		setAttributes({ offCanvasPanelBorderLink: !offCanvasPanelBorderLink });
	};

	const handleoffCanvasPanelBorderUnitsChange = (unit) => {
		setAttributes({
			offCanvasPanelBorderUnits: {
				...offCanvasPanelBorderUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border width */

	/** Default border width for different devices */
	const offCanvasPanelDesktopBorderWidthStr = `${offCanvasPanelDesktopBorderWidth?.top}${offCanvasPanelBorderUnits?.Desktop} ${offCanvasPanelDesktopBorderWidth?.right}${offCanvasPanelBorderUnits?.Desktop} ${offCanvasPanelDesktopBorderWidth?.bottom}${offCanvasPanelBorderUnits?.Desktop} ${offCanvasPanelDesktopBorderWidth?.left}${offCanvasPanelBorderUnits?.Desktop}`;
	const offCanvasPanelTabletBorderWidthStr = `${offCanvasPanelTabBorderWidth?.top}${offCanvasPanelBorderUnits?.Tablet} ${offCanvasPanelTabBorderWidth?.right}${offCanvasPanelBorderUnits?.Tablet} ${offCanvasPanelTabBorderWidth?.bottom}${offCanvasPanelBorderUnits?.Tablet} ${offCanvasPanelTabBorderWidth?.left}${offCanvasPanelBorderUnits?.Tablet}`;
	const offCanvasPanelMobileBorderWidthStr = `${offCanvasPanelMobileBorderWidth?.top}${offCanvasPanelBorderUnits?.Mobile} ${offCanvasPanelMobileBorderWidth?.right}${offCanvasPanelBorderUnits?.Mobile} ${offCanvasPanelMobileBorderWidth?.bottom}${offCanvasPanelBorderUnits?.Mobile} ${offCanvasPanelMobileBorderWidth?.left}${offCanvasPanelBorderUnits?.Mobile}`;
	/** End border width */

	/** Start border radius */
	const handleoffCanvasPanelBorderRadiusChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasPanelBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasPanelDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasPanelTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasPanelMobileBorderRadiusWidth: {
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
					setAttributes({
						offCanvasPanelDesktopBorderRadiusWidth: {
							...offCanvasPanelDesktopBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasPanelTabBorderRadiusWidth: {
							...offCanvasPanelTabBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasPanelMobileBorderRadiusWidth: {
							...offCanvasPanelMobileBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleoffCanvasPanelBorderRadiusLinkToggle = () => {
		setAttributes({ offCanvasPanelBorderRadiusLink: !offCanvasPanelBorderRadiusLink });
	};

	const handleoffCanvasPanelBorderRadiusUnitsChange = (unit) => {
		setAttributes({
			offCanvasPanelBorderRadiusUnits: {
				...offCanvasPanelBorderRadiusUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border radius */

	/** Default border radius for different devices */
	const offCanvasPanelDesktopBorderRadiusStr = `${offCanvasPanelDesktopBorderRadiusWidth?.top}${offCanvasPanelBorderRadiusUnits?.Desktop} ${offCanvasPanelDesktopBorderRadiusWidth?.right}${offCanvasPanelBorderRadiusUnits?.Desktop} ${offCanvasPanelDesktopBorderRadiusWidth?.bottom}${offCanvasPanelBorderRadiusUnits?.Desktop} ${offCanvasPanelDesktopBorderRadiusWidth?.left}${offCanvasPanelBorderRadiusUnits?.Desktop}`;
	const offCanvasPanelTabletBorderRadiusStr = `${offCanvasPanelTabBorderRadiusWidth?.top}${offCanvasPanelBorderRadiusUnits?.Tablet} ${offCanvasPanelTabBorderRadiusWidth?.right}${offCanvasPanelBorderRadiusUnits?.Tablet} ${offCanvasPanelTabBorderRadiusWidth?.bottom}${offCanvasPanelBorderRadiusUnits?.Tablet} ${offCanvasPanelTabBorderRadiusWidth?.left}${offCanvasPanelBorderRadiusUnits?.Tablet}`;
	const offCanvasPanelMobileBorderRadiusStr = `${offCanvasPanelMobileBorderRadiusWidth?.top}${offCanvasPanelBorderRadiusUnits?.Mobile} ${offCanvasPanelMobileBorderRadiusWidth?.right}${offCanvasPanelBorderRadiusUnits?.Mobile} ${offCanvasPanelMobileBorderRadiusWidth?.bottom}${offCanvasPanelBorderRadiusUnits?.Mobile} ${offCanvasPanelMobileBorderRadiusWidth?.left}${offCanvasPanelBorderRadiusUnits?.Mobile}`;
	/** End Border Radius */

	/** Hamburger icon border */
	/** Start border width */
	const handleoffCanvashamburgerIconBorderWidthChange = (event, position) => {
		const value = event.target.value;
		if (offCanvashamburgerIconBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvashamburgerIconDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvashamburgerIconTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvashamburgerIconMobileBorderWidth: {
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
					setAttributes({
						offCanvashamburgerIconDesktopBorderWidth: {
							...offCanvashamburgerIconDesktopBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvashamburgerIconTabBorderWidth: {
							...offCanvashamburgerIconTabBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvashamburgerIconMobileBorderWidth: {
							...offCanvashamburgerIconMobileBorderWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleoffCanvashamburgerIconBorderLinkToggle = () => {
		setAttributes({ offCanvashamburgerIconBorderLink: !offCanvashamburgerIconBorderLink });
	};

	const handleoffCanvashamburgerIconBorderUnitsChange = (unit) => {
		setAttributes({
			offCanvashamburgerIconBorderUnits: {
				...offCanvashamburgerIconBorderUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border width */

	/** Default border width for different devices */
	const offCanvashamburgerIconDesktopBorderWidthStr = `${offCanvashamburgerIconDesktopBorderWidth?.top}${offCanvashamburgerIconBorderUnits?.Desktop} ${offCanvashamburgerIconDesktopBorderWidth?.right}${offCanvashamburgerIconBorderUnits?.Desktop} ${offCanvashamburgerIconDesktopBorderWidth?.bottom}${offCanvashamburgerIconBorderUnits?.Desktop} ${offCanvashamburgerIconDesktopBorderWidth?.left}${offCanvashamburgerIconBorderUnits?.Desktop}`;
	const offCanvashamburgerIconTabletBorderWidthStr = `${offCanvashamburgerIconTabBorderWidth?.top}${offCanvashamburgerIconBorderUnits?.Tablet} ${offCanvashamburgerIconTabBorderWidth?.right}${offCanvashamburgerIconBorderUnits?.Tablet} ${offCanvashamburgerIconTabBorderWidth?.bottom}${offCanvashamburgerIconBorderUnits?.Tablet} ${offCanvashamburgerIconTabBorderWidth?.left}${offCanvashamburgerIconBorderUnits?.Tablet}`;
	const offCanvashamburgerIconMobileBorderWidthStr = `${offCanvashamburgerIconMobileBorderWidth?.top}${offCanvashamburgerIconBorderUnits?.Mobile} ${offCanvashamburgerIconMobileBorderWidth?.right}${offCanvashamburgerIconBorderUnits?.Mobile} ${offCanvashamburgerIconMobileBorderWidth?.bottom}${offCanvashamburgerIconBorderUnits?.Mobile} ${offCanvashamburgerIconMobileBorderWidth?.left}${offCanvashamburgerIconBorderUnits?.Mobile}`;
	/** End border width */

	/** Start border radius */
	const handleoffCanvashamburgerIconBorderRadiusChange = (event, position) => {
		const value = event.target.value;
		if (offCanvashamburgerIconBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvashamburgerIconDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvashamburgerIconTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvashamburgerIconMobileBorderRadiusWidth: {
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
					setAttributes({
						offCanvashamburgerIconDesktopBorderRadiusWidth: {
							...offCanvashamburgerIconDesktopBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvashamburgerIconTabBorderRadiusWidth: {
							...offCanvashamburgerIconTabBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvashamburgerIconMobileBorderRadiusWidth: {
							...offCanvashamburgerIconMobileBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleoffCanvashamburgerIconBorderRadiusLinkToggle = () => {
		setAttributes({ offCanvashamburgerIconBorderRadiusLink: !offCanvashamburgerIconBorderRadiusLink });
	};

	const handleoffCanvashamburgerIconBorderRadiusUnitsChange = (unit) => {
		setAttributes({
			offCanvashamburgerIconBorderRadiusUnits: {
				...offCanvashamburgerIconBorderRadiusUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border radius */

	/** Default border radius for different devices */
	const offCanvashamburgerIconDesktopBorderRadiusStr = `${offCanvashamburgerIconDesktopBorderRadiusWidth?.top}${offCanvashamburgerIconBorderRadiusUnits?.Desktop} ${offCanvashamburgerIconDesktopBorderRadiusWidth?.right}${offCanvashamburgerIconBorderRadiusUnits?.Desktop} ${offCanvashamburgerIconDesktopBorderRadiusWidth?.bottom}${offCanvashamburgerIconBorderRadiusUnits?.Desktop} ${offCanvashamburgerIconDesktopBorderRadiusWidth?.left}${offCanvashamburgerIconBorderRadiusUnits?.Desktop}`;
	const offCanvashamburgerIconTabletBorderRadiusStr = `${offCanvashamburgerIconTabBorderRadiusWidth?.top}${offCanvashamburgerIconBorderRadiusUnits?.Tablet} ${offCanvashamburgerIconTabBorderRadiusWidth?.right}${offCanvashamburgerIconBorderRadiusUnits?.Tablet} ${offCanvashamburgerIconTabBorderRadiusWidth?.bottom}${offCanvashamburgerIconBorderRadiusUnits?.Tablet} ${offCanvashamburgerIconTabBorderRadiusWidth?.left}${offCanvashamburgerIconBorderRadiusUnits?.Tablet}`;
	const offCanvashamburgerIconMobileBorderRadiusStr = `${offCanvashamburgerIconMobileBorderRadiusWidth?.top}${offCanvashamburgerIconBorderRadiusUnits?.Mobile} ${offCanvashamburgerIconMobileBorderRadiusWidth?.right}${offCanvashamburgerIconBorderRadiusUnits?.Mobile} ${offCanvashamburgerIconMobileBorderRadiusWidth?.bottom}${offCanvashamburgerIconBorderRadiusUnits?.Mobile} ${offCanvashamburgerIconMobileBorderRadiusWidth?.left}${offCanvashamburgerIconBorderRadiusUnits?.Mobile}`;
	/** End Border Radius */

	/** Start Close Icon Padding */
    const offCanvasHamburgerIconPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (offCanvasHamburgerIconPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        offCanvasHamburgerIconDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        offCanvasHamburgerIconTabletPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        offCanvasHamburgerIconMobilePadding: {
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
                    setAttributes({ offCanvasHamburgerIconDesktopPadding: { ...offCanvasHamburgerIconDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ offCanvasHamburgerIconTabletPadding: { ...offCanvasHamburgerIconTabletPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ offCanvasHamburgerIconMobilePadding: { ...offCanvasHamburgerIconMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const offCanvasHamburgerIconPaddingLinkBtn = () => {
        setAttributes({
            offCanvasHamburgerIconPaddingLink: !offCanvasHamburgerIconPaddingLink
        });
    };

    const offCanvasHamburgerIconPaddingUnitsHandler = (unit) => {
        setAttributes({
            offCanvasHamburgerIconPaddingUnits: {
                ...offCanvasHamburgerIconPaddingUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default padding for offCanvasHamburgerIcon */
    const offCanvasHamburgerIconDesktopPaddingWidth = `${offCanvasHamburgerIconDesktopPadding?.top}${offCanvasHamburgerIconPaddingUnits?.Desktop} ${offCanvasHamburgerIconDesktopPadding?.right}${offCanvasHamburgerIconPaddingUnits?.Desktop} ${offCanvasHamburgerIconDesktopPadding?.bottom}${offCanvasHamburgerIconPaddingUnits?.Desktop} ${offCanvasHamburgerIconDesktopPadding?.left}${offCanvasHamburgerIconPaddingUnits?.Desktop}`;
    const offCanvasHamburgerIconTabletPaddingWidth = `${offCanvasHamburgerIconTabletPadding?.top}${offCanvasHamburgerIconPaddingUnits?.Tablet} ${offCanvasHamburgerIconTabletPadding?.right}${offCanvasHamburgerIconPaddingUnits?.Tablet} ${offCanvasHamburgerIconTabletPadding?.bottom}${offCanvasHamburgerIconPaddingUnits?.Tablet} ${offCanvasHamburgerIconTabletPadding?.left}${offCanvasHamburgerIconPaddingUnits?.Tablet}`;
    const offCanvasHamburgerIconMobilePaddingWidth = `${offCanvasHamburgerIconMobilePadding?.top}${offCanvasHamburgerIconPaddingUnits?.Mobile} ${offCanvasHamburgerIconMobilePadding?.right}${offCanvasHamburgerIconPaddingUnits?.Mobile} ${offCanvasHamburgerIconMobilePadding?.bottom}${offCanvasHamburgerIconPaddingUnits?.Mobile} ${offCanvasHamburgerIconMobilePadding?.left}${offCanvasHamburgerIconPaddingUnits?.Mobile}`;
    /** End offCanvasHamburgerIcon Padding */

    /** Start offCanvasHamburgerIcon Margin */
    const offCanvasHamburgerIconMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (offCanvasHamburgerIconMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        offCanvasHamburgerIconDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        offCanvasHamburgerIconTabletMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        offCanvasHamburgerIconMobileMargin: {
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
                    setAttributes({ offCanvasHamburgerIconDesktopMargin: { ...offCanvasHamburgerIconDesktopMargin, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ offCanvasHamburgerIconTabletMargin: { ...offCanvasHamburgerIconTabletMargin, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ offCanvasHamburgerIconMobileMargin: { ...offCanvasHamburgerIconMobileMargin, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const offCanvasHamburgerIconMarginLinkBtn = () => {
        setAttributes({
            offCanvasHamburgerIconMarginLink: !offCanvasHamburgerIconMarginLink
        });
    };

    const offCanvasHamburgerIconMarginUnitsHandler = (unit) => {
        setAttributes({
            offCanvasHamburgerIconMarginUnits: {
                ...offCanvasHamburgerIconMarginUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default margin for offCanvasHamburgerIcon */
    const offCanvasHamburgerIconDesktopMarginWidth = `${offCanvasHamburgerIconDesktopMargin?.top}${offCanvasHamburgerIconMarginUnits?.Desktop} ${offCanvasHamburgerIconDesktopMargin?.right}${offCanvasHamburgerIconMarginUnits?.Desktop} ${offCanvasHamburgerIconDesktopMargin?.bottom}${offCanvasHamburgerIconMarginUnits?.Desktop} ${offCanvasHamburgerIconDesktopMargin?.left}${offCanvasHamburgerIconMarginUnits?.Desktop}`;
    const offCanvasHamburgerIconTabletMarginWidth = `${offCanvasHamburgerIconTabletMargin?.top}${offCanvasHamburgerIconMarginUnits?.Tablet} ${offCanvasHamburgerIconTabletMargin?.right}${offCanvasHamburgerIconMarginUnits?.Tablet} ${offCanvasHamburgerIconTabletMargin?.bottom}${offCanvasHamburgerIconMarginUnits?.Tablet} ${offCanvasHamburgerIconTabletMargin?.left}${offCanvasHamburgerIconMarginUnits?.Tablet}`;
    const offCanvasHamburgerIconMobileMarginWidth = `${offCanvasHamburgerIconMobileMargin?.top}${offCanvasHamburgerIconMarginUnits?.Mobile} ${offCanvasHamburgerIconMobileMargin?.right}${offCanvasHamburgerIconMarginUnits?.Mobile} ${offCanvasHamburgerIconMobileMargin?.bottom}${offCanvasHamburgerIconMarginUnits?.Mobile} ${offCanvasHamburgerIconMobileMargin?.left}${offCanvasHamburgerIconMarginUnits?.Mobile}`;
    /** End offCanvasHamburgerIcon Margin */

	/** Start border width */
	const handleoffCanvasCloseIconBorderWidthChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasCloseIconBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasCloseIconDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasCloseIconTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasCloseIconMobileBorderWidth: {
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
					setAttributes({
						offCanvasCloseIconDesktopBorderWidth: {
							...offCanvasCloseIconDesktopBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasCloseIconTabBorderWidth: {
							...offCanvasCloseIconTabBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasCloseIconMobileBorderWidth: {
							...offCanvasCloseIconMobileBorderWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleoffCanvasCloseIconBorderLinkToggle = () => {
		setAttributes({ offCanvasCloseIconBorderLink: !offCanvasCloseIconBorderLink });
	};

	const handleoffCanvasCloseIconBorderUnitsChange = (unit) => {
		setAttributes({
			offCanvasCloseIconBorderUnits: {
				...offCanvasCloseIconBorderUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border width */

	/** Default border width for different devices */
	const offCanvasCloseIconDesktopBorderWidthStr = `${offCanvasCloseIconDesktopBorderWidth?.top}${offCanvasCloseIconBorderUnits?.Desktop} ${offCanvasCloseIconDesktopBorderWidth?.right}${offCanvasCloseIconBorderUnits?.Desktop} ${offCanvasCloseIconDesktopBorderWidth?.bottom}${offCanvasCloseIconBorderUnits?.Desktop} ${offCanvasCloseIconDesktopBorderWidth?.left}${offCanvasCloseIconBorderUnits?.Desktop}`;
	const offCanvasCloseIconTabletBorderWidthStr = `${offCanvasCloseIconTabBorderWidth?.top}${offCanvasCloseIconBorderUnits?.Tablet} ${offCanvasCloseIconTabBorderWidth?.right}${offCanvasCloseIconBorderUnits?.Tablet} ${offCanvasCloseIconTabBorderWidth?.bottom}${offCanvasCloseIconBorderUnits?.Tablet} ${offCanvasCloseIconTabBorderWidth?.left}${offCanvasCloseIconBorderUnits?.Tablet}`;
	const offCanvasCloseIconMobileBorderWidthStr = `${offCanvasCloseIconMobileBorderWidth?.top}${offCanvasCloseIconBorderUnits?.Mobile} ${offCanvasCloseIconMobileBorderWidth?.right}${offCanvasCloseIconBorderUnits?.Mobile} ${offCanvasCloseIconMobileBorderWidth?.bottom}${offCanvasCloseIconBorderUnits?.Mobile} ${offCanvasCloseIconMobileBorderWidth?.left}${offCanvasCloseIconBorderUnits?.Mobile}`;
	/** End border width */

	/** Start border radius */
	const handleoffCanvasCloseIconBorderRadiusChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasCloseIconBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasCloseIconDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasCloseIconTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasCloseIconMobileBorderRadiusWidth: {
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
					setAttributes({
						offCanvasCloseIconDesktopBorderRadiusWidth: {
							...offCanvasCloseIconDesktopBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasCloseIconTabBorderRadiusWidth: {
							...offCanvasCloseIconTabBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasCloseIconMobileBorderRadiusWidth: {
							...offCanvasCloseIconMobileBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleoffCanvasCloseIconBorderRadiusLinkToggle = () => {
		setAttributes({ offCanvasCloseIconBorderRadiusLink: !offCanvasCloseIconBorderRadiusLink });
	};

	const handleoffCanvasCloseIconBorderRadiusUnitsChange = (unit) => {
		setAttributes({
			offCanvasCloseIconBorderRadiusUnits: {
				...offCanvasCloseIconBorderRadiusUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border radius */

	/** Default border radius for different devices */
	const offCanvasCloseIconDesktopBorderRadiusStr = `${offCanvasCloseIconDesktopBorderRadiusWidth?.top}${offCanvasCloseIconBorderRadiusUnits?.Desktop} ${offCanvasCloseIconDesktopBorderRadiusWidth?.right}${offCanvasCloseIconBorderRadiusUnits?.Desktop} ${offCanvasCloseIconDesktopBorderRadiusWidth?.bottom}${offCanvasCloseIconBorderRadiusUnits?.Desktop} ${offCanvasCloseIconDesktopBorderRadiusWidth?.left}${offCanvasCloseIconBorderRadiusUnits?.Desktop}`;
	const offCanvasCloseIconTabletBorderRadiusStr = `${offCanvasCloseIconTabBorderRadiusWidth?.top}${offCanvasCloseIconBorderRadiusUnits?.Tablet} ${offCanvasCloseIconTabBorderRadiusWidth?.right}${offCanvasCloseIconBorderRadiusUnits?.Tablet} ${offCanvasCloseIconTabBorderRadiusWidth?.bottom}${offCanvasCloseIconBorderRadiusUnits?.Tablet} ${offCanvasCloseIconTabBorderRadiusWidth?.left}${offCanvasCloseIconBorderRadiusUnits?.Tablet}`;
	const offCanvasCloseIconMobileBorderRadiusStr = `${offCanvasCloseIconMobileBorderRadiusWidth?.top}${offCanvasCloseIconBorderRadiusUnits?.Mobile} ${offCanvasCloseIconMobileBorderRadiusWidth?.right}${offCanvasCloseIconBorderRadiusUnits?.Mobile} ${offCanvasCloseIconMobileBorderRadiusWidth?.bottom}${offCanvasCloseIconBorderRadiusUnits?.Mobile} ${offCanvasCloseIconMobileBorderRadiusWidth?.left}${offCanvasCloseIconBorderRadiusUnits?.Mobile}`;
	/** End Border Radius */

	/** Start offCanvasCloseIcon Padding */
    const offCanvasCloseIconPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (offCanvasCloseIconPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        offCanvasCloseIconDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        offCanvasCloseIconTabletPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        offCanvasCloseIconMobilePadding: {
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
                    setAttributes({ offCanvasCloseIconDesktopPadding: { ...offCanvasCloseIconDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ offCanvasCloseIconTabletPadding: { ...offCanvasCloseIconTabletPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ offCanvasCloseIconMobilePadding: { ...offCanvasCloseIconMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const offCanvasCloseIconPaddingLinkBtn = () => {
        setAttributes({
            offCanvasCloseIconPaddingLink: !offCanvasCloseIconPaddingLink
        });
    };

    const offCanvasCloseIconPaddingUnitsHandler = (unit) => {
        setAttributes({
            offCanvasCloseIconPaddingUnits: {
                ...offCanvasCloseIconPaddingUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default padding for offCanvasCloseIcon */
    const offCanvasCloseIconDesktopPaddingWidth = `${offCanvasCloseIconDesktopPadding?.top}${offCanvasCloseIconPaddingUnits?.Desktop} ${offCanvasCloseIconDesktopPadding?.right}${offCanvasCloseIconPaddingUnits?.Desktop} ${offCanvasCloseIconDesktopPadding?.bottom}${offCanvasCloseIconPaddingUnits?.Desktop} ${offCanvasCloseIconDesktopPadding?.left}${offCanvasCloseIconPaddingUnits?.Desktop}`;
    const offCanvasCloseIconTabletPaddingWidth = `${offCanvasCloseIconTabletPadding?.top}${offCanvasCloseIconPaddingUnits?.Tablet} ${offCanvasCloseIconTabletPadding?.right}${offCanvasCloseIconPaddingUnits?.Tablet} ${offCanvasCloseIconTabletPadding?.bottom}${offCanvasCloseIconPaddingUnits?.Tablet} ${offCanvasCloseIconTabletPadding?.left}${offCanvasCloseIconPaddingUnits?.Tablet}`;
    const offCanvasCloseIconMobilePaddingWidth = `${offCanvasCloseIconMobilePadding?.top}${offCanvasCloseIconPaddingUnits?.Mobile} ${offCanvasCloseIconMobilePadding?.right}${offCanvasCloseIconPaddingUnits?.Mobile} ${offCanvasCloseIconMobilePadding?.bottom}${offCanvasCloseIconPaddingUnits?.Mobile} ${offCanvasCloseIconMobilePadding?.left}${offCanvasCloseIconPaddingUnits?.Mobile}`;
    /** End offCanvasCloseIcon Padding */

    /** Start offCanvasCloseIcon Margin */
    const offCanvasCloseIconMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (offCanvasCloseIconMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        offCanvasCloseIconDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        offCanvasCloseIconTabletMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        offCanvasCloseIconMobileMargin: {
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
                    setAttributes({ offCanvasCloseIconDesktopMargin: { ...offCanvasCloseIconDesktopMargin, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ offCanvasCloseIconTabletMargin: { ...offCanvasCloseIconTabletMargin, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ offCanvasCloseIconMobileMargin: { ...offCanvasCloseIconMobileMargin, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const offCanvasCloseIconMarginLinkBtn = () => {
        setAttributes({
            offCanvasCloseIconMarginLink: !offCanvasCloseIconMarginLink
        });
    };

    const offCanvasCloseIconMarginUnitsHandler = (unit) => {
        setAttributes({
            offCanvasCloseIconMarginUnits: {
                ...offCanvasCloseIconMarginUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default margin for offCanvasCloseIcon */
    const offCanvasCloseIconDesktopMarginWidth = `${offCanvasCloseIconDesktopMargin?.top}${offCanvasCloseIconMarginUnits?.Desktop} ${offCanvasCloseIconDesktopMargin?.right}${offCanvasCloseIconMarginUnits?.Desktop} ${offCanvasCloseIconDesktopMargin?.bottom}${offCanvasCloseIconMarginUnits?.Desktop} ${offCanvasCloseIconDesktopMargin?.left}${offCanvasCloseIconMarginUnits?.Desktop}`;
    const offCanvasCloseIconTabletMarginWidth = `${offCanvasCloseIconTabletMargin?.top}${offCanvasCloseIconMarginUnits?.Tablet} ${offCanvasCloseIconTabletMargin?.right}${offCanvasCloseIconMarginUnits?.Tablet} ${offCanvasCloseIconTabletMargin?.bottom}${offCanvasCloseIconMarginUnits?.Tablet} ${offCanvasCloseIconTabletMargin?.left}${offCanvasCloseIconMarginUnits?.Tablet}`;
    const offCanvasCloseIconMobileMarginWidth = `${offCanvasCloseIconMobileMargin?.top}${offCanvasCloseIconMarginUnits?.Mobile} ${offCanvasCloseIconMobileMargin?.right}${offCanvasCloseIconMarginUnits?.Mobile} ${offCanvasCloseIconMobileMargin?.bottom}${offCanvasCloseIconMarginUnits?.Mobile} ${offCanvasCloseIconMobileMargin?.left}${offCanvasCloseIconMarginUnits?.Mobile}`;
    /** End offCanvasCloseIcon Margin */

	const getBackgroundNormalStyles = (device) => {
		const bgType = offCanvasPanelBgNormalBackgroundType;
		const bgColor = offCanvasPanelBgNormalClassicColor;
		const bgGradient = offCanvasPanelBgNormalGradientColor;
		const customGradient = offCanvasPanelBgNormalCustomGradientInputValue;
		const customGradientEnabled = offCanvasPanelBgNormalCustomGradientSwitcher;

		const bgImageUrl = offCanvasPanelBgNormalBackgroundImageUrl?.[device];
		const bgImagePosition = offCanvasPanelBgNormalBackgroundImagePosition?.[device];
		const bgAttachment = offCanvasPanelBgNormalBackgroundImageAttachment?.[device];
		const bgRepeat = offCanvasPanelBgNormalBackgroundImageRepeat?.[device];
		const bgSize = offCanvasPanelBgNormalBackgroundImageSize?.[device];

		if (bgType === 'gradient') {
			return {
				background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
			};
		}

		let styles = { background: bgColor };

		if (bgType !== 'gradient' && bgImageUrl) {
			styles = {
				...styles,
				'background-image': `url(${bgImageUrl})`,
				'background-position': bgImagePosition
					? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
					: "50% 50%",
				'background-attachment': bgAttachment || undefined,
				'background-repeat': bgRepeat || undefined,
				'background-size': bgSize || undefined,
			};
		}

		return styles;
	};

	/**
	 * Get background hover styles
	 */
	const getBackgroundHoverStyles = (device) => {
		const bgType = offCanvasPanelBgHoverBackgroundType;
		const bgColor = offCanvasPanelBgHoverClassicColor;
		const bgGradient = offCanvasPanelBgHoverGradientColor;
		const customGradient = offCanvasPanelBgHoverCustomGradientInputValue;
		const customGradientEnabled = offCanvasPanelBgHoverCustomGradientSwitcher;

		const bgImageUrl = offCanvasPanelBgHoverBackgroundImageUrl?.[device];
		const bgImagePosition = offCanvasPanelBgHoverBackgroundImagePosition?.[device];
		const bgAttachment = offCanvasPanelBgHoverBackgroundImageAttachment?.[device];
		const bgRepeat = offCanvasPanelBgHoverBackgroundImageRepeat?.[device];
		const bgSize = offCanvasPanelBgHoverBackgroundImageSize?.[device];

		if (bgType === 'gradient') {
			return {
				background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
			};
		}

		let styles = { background: bgColor };

		if (bgType !== 'gradient' && bgImageUrl) {
			styles = {
				...styles,
				'background-image': `url(${bgImageUrl})`,
				'background-position': bgImagePosition
					? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
					: "50% 50%",
				'background-attachment': bgAttachment || undefined,
				'background-repeat': bgRepeat || undefined,
				'background-size': bgSize || undefined,
			};
		}

		return styles;
	};

	/**
	 * Convert object to string
	 */
	const backgroundStyleObjectToString = (styleObj) =>
		Object.entries(styleObj)
			.map(([key, value]) => `${key}: ${value};`)
			.join(' ');


	const desktopBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Desktop'));
	const desktopBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Desktop'));
	const tabletBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Tablet'));
	const tabletBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Tablet'));
	const mobileBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Mobile'));
	const mobileBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Mobile'));

	const offCanvasStyle = useMemo(
		() => `
				.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu{
					${offCanvasPanelWidth?.Desktop ? `width: ${offCanvasPanelWidth?.Desktop}${offCanvasPanelWidthUnits?.Desktop};` : ''}
					${offCanvasPanelHeight?.Desktop ? `height: ${offCanvasPanelHeight?.Desktop}${offCanvasPanelHeightUnits?.Desktop};` : ''}
					${offCanvasPanelDesktopPaddingStr && offCanvasPanelDesktopPadding?.top ? `padding: ${offCanvasPanelDesktopPaddingStr};` : ''}
					${offCanvasPanelDesktopMarginStr && offCanvasPanelDesktopMargin?.top ? `margin: ${offCanvasPanelDesktopMarginStr};` : ''}
					${offCanvasPanelBorder ? `border: ${offCanvasPanelBorder};` : ''}
					${offCanvasPanelBorderColor ? `border-color: ${offCanvasPanelBorderColor};` : ''}
					${offCanvasPanelDesktopBorderWidthStr && offCanvasPanelDesktopBorderWidth?.top ? `border-width: ${offCanvasPanelDesktopBorderWidthStr};` : ''}
					${offCanvasPanelDesktopBorderRadiusStr && offCanvasPanelDesktopBorderRadiusWidth?.top ? `border-radius: ${offCanvasPanelDesktopBorderRadiusStr};` : ''}
					${offCanvasPanelBoxShadowCssValue ? `box-shadow: ${offCanvasPanelBoxShadowCssValue};` : ''} 
					${desktopBackgroundNormalStyles}
				}

				.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu:hover{
					${offCanvasPanelBoxShadowHoverCssValue ? `box-shadow: ${offCanvasPanelBoxShadowHoverCssValue};` : ''}
					${offCanvasPanelBorderHoverColor ? `border-color: ${offCanvasPanelBorderHoverColor};` : ''}
					${desktopBackgroundHoverStyles}
				}

				.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon{
					${offCanvasHamburgerIconBgWidth?.Desktop ? `width: ${offCanvasHamburgerIconBgWidth?.Desktop}${offCanvasHamburgerIconBgWidthUnits?.Desktop};` : ''}
					${offCanvasHamburgerIconBgWidth?.Desktop ? `height: ${offCanvasHamburgerIconBgWidth?.Desktop}${offCanvasHamburgerIconBgWidthUnits?.Desktop};` : ''}
					${offCanvashamburgerIconBgColor ? `background: ${offCanvashamburgerIconBgColor};` : ''}
					${offCanvashamburgerIconBorder ? `border: ${offCanvashamburgerIconBorder};` : ''}
					${offCanvashamburgerIconBorderColor ? `border-color: ${offCanvashamburgerIconBorderColor};` : ''}
					${offCanvashamburgerIconDesktopBorderWidthStr && offCanvashamburgerIconDesktopBorderWidth?.top ? `border-width: ${offCanvashamburgerIconDesktopBorderWidthStr};` : ''}
					${offCanvashamburgerIconDesktopBorderRadiusStr && offCanvashamburgerIconDesktopBorderRadiusWidth?.top ? `border-radius: ${offCanvashamburgerIconDesktopBorderRadiusStr};` : ''}
					${offCanvasHamburgerIconDesktopMarginWidth && offCanvasHamburgerIconDesktopMargin?.top ? `margin: ${offCanvasHamburgerIconDesktopMarginWidth};` : ''}
					${offCanvasHamburgerIconDesktopPaddingWidth && offCanvasHamburgerIconDesktopPadding?.top ? `padding: ${offCanvasHamburgerIconDesktopPaddingWidth};` : ''}
					transition: 0.3s all ease;
				}

				.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon:hover{
					${offCanvashamburgerIconBgHoverColor ? `background: ${offCanvashamburgerIconBgHoverColor};` : ''}
					${offCanvashamburgerIconBorderHoverColor ? `border-color: ${offCanvashamburgerIconBorderHoverColor};` : ''}
				}

				.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon svg{
					${offCanvasHamburgerIconWidth?.Desktop ? `width: ${offCanvasHamburgerIconWidth?.Desktop}${offCanvasHamburgerIconWidthUnits?.Desktop};` : ''}
					${offCanvasHamburgerIconWidth?.Desktop ? `height: ${offCanvasHamburgerIconWidth?.Desktop}${offCanvasHamburgerIconWidthUnits?.Desktop};` : ''}
					${offCanvashamburgerIconColor ? `fill: ${offCanvashamburgerIconColor};` : ''}
					transition: 0.3s all ease;
				}
				.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon:hover svg{
					${offCanvashamburgerIconHoverColor ? `fill: ${offCanvashamburgerIconHoverColor};` : ''}
				}
				@media only screen and (max-width: 1024px) {
					.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu{
						${offCanvasPanelWidth?.Tablet ? `width: ${offCanvasPanelWidth?.Tablet}${offCanvasPanelWidthUnits?.Tablet};` : ''}
						${offCanvasPanelHeight?.Tablet ? `height: ${offCanvasPanelHeight?.Tablet}${offCanvasPanelHeightUnits?.Tablet};` : ''}
						${offCanvasPanelTabletPaddingStr && offCanvasPanelTabPadding?.top ? `padding: ${offCanvasPanelTabletPaddingStr};` : ''}
						${offCanvasPanelTabletMarginStr && offCanvasPanelTabMargin?.top ? `margin: ${offCanvasPanelTabletMarginStr};` : ''}
						${offCanvasPanelTabletBorderWidthStr && offCanvasPanelTabBorderWidth?.top ? `border-width: ${offCanvasPanelTabletBorderWidthStr};` : ''}
						${offCanvasPanelTabletBorderRadiusStr && offCanvasPanelTabBorderRadiusWidth?.top ? `border-radius: ${offCanvasPanelTabletBorderRadiusStr};` : ''}
						${tabletBackgroundNormalStyles}
					}
					.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu:hover{
						${tabletBackgroundHoverStyles}
					}
					.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon{
						${offCanvasHamburgerIconBgWidth?.Tablet ? `width: ${offCanvasHamburgerIconBgWidth?.Tablet}${offCanvasHamburgerIconBgWidthUnits?.Tablet};` : ''}
						${offCanvasHamburgerIconBgWidth?.Tablet ? `height: ${offCanvasHamburgerIconBgWidth?.Tablet}${offCanvasHamburgerIconBgWidthUnits?.Tablet};` : ''}
						${offCanvashamburgerIconTabletBorderWidthStr && offCanvashamburgerIconTabBorderWidth?.top ? `border-width: ${offCanvashamburgerIconTabletBorderWidthStr};` : ''}
						${offCanvashamburgerIconTabletBorderRadiusStr && offCanvashamburgerIconTabBorderRadiusWidth?.top ? `border-radius: ${offCanvashamburgerIconTabletBorderRadiusStr};` : ''}
						${offCanvasHamburgerIconTabletMarginWidth && offCanvasHamburgerIconTabletMargin?.top ? `margin: ${offCanvasHamburgerIconTabletMarginWidth};` : ''}
						${offCanvasHamburgerIconTabletPaddingWidth && offCanvasHamburgerIconTabletPadding?.top ? `padding: ${offCanvasHamburgerIconTabletPaddingWidth};` : ''}
					}
					.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon svg{
						${offCanvasHamburgerIconWidth?.Tablet ? `width: ${offCanvasHamburgerIconWidth?.Tablet}${offCanvasHamburgerIconWidthUnits?.Tablet};` : ''}
						${offCanvasHamburgerIconWidth?.Tablet ? `height: ${offCanvasHamburgerIconWidth?.Tablet}${offCanvasHamburgerIconWidthUnits?.Tablet};` : ''}
					}
				}
	
				@media only screen and (max-width: 768px) {
					.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu{
						${offCanvasPanelWidth?.Mobile ? `width: ${offCanvasPanelWidth?.Mobile}${offCanvasPanelWidthUnits?.Mobile};` : ''}
						${offCanvasPanelHeight?.Mobile ? `height: ${offCanvasPanelHeight?.Mobile}${offCanvasPanelHeightUnits?.Mobile};` : ''}
						${offCanvasPanelMobilePaddingStr && offCanvasPanelMobilePadding?.top ? `padding: ${offCanvasPanelMobilePaddingStr};` : ''}
						${offCanvasPanelMobileMarginStr && offCanvasPanelMobileMargin?.top ? `margin: ${offCanvasPanelMobileMarginStr};` : ''}
						${offCanvasPanelMobileBorderWidthStr && offCanvasPanelMobileBorderWidth?.top ? `border-width: ${offCanvasPanelMobileBorderWidthStr};` : ''}
						${offCanvasPanelMobileBorderRadiusStr && offCanvasPanelMobileBorderRadiusWidth?.top ? `border-radius: ${offCanvasPanelMobileBorderRadiusStr};` : ''}
						${mobileBackgroundNormalStyles}

					}
					.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu:hover{
						${mobileBackgroundHoverStyles}
					}
					.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon{
						${offCanvasHamburgerIconBgWidth?.Mobile ? `width: ${offCanvasHamburgerIconBgWidth?.Mobile}${offCanvasHamburgerIconBgWidthUnits?.Mobile};` : ''}
						${offCanvasHamburgerIconBgWidth?.Mobile ? `height: ${offCanvasHamburgerIconBgWidth?.Mobile}${offCanvasHamburgerIconBgWidthUnits?.Mobile};` : ''}
						${offCanvashamburgerIconMobileBorderWidthStr && offCanvashamburgerIconMobileBorderWidth?.top ? `border-width: ${offCanvashamburgerIconMobileBorderWidthStr};` : ''}
						${offCanvashamburgerIconMobileBorderRadiusStr && offCanvashamburgerIconMobileBorderRadiusWidth?.top ? `border-radius: ${offCanvashamburgerIconMobileBorderRadiusStr};` : ''}
						${offCanvasHamburgerIconMobileMarginWidth && offCanvasHamburgerIconMobileMargin?.top ? `margin: ${offCanvasHamburgerIconMobileMarginWidth};` : ''}
						${offCanvasHamburgerIconMobilePaddingWidth && offCanvasHamburgerIconMobilePadding?.top ? `padding: ${offCanvasHamburgerIconMobilePaddingWidth};` : ''}
					}
					.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon svg{
						${offCanvasHamburgerIconWidth?.Mobile ? `width: ${offCanvasHamburgerIconWidth?.Mobile}${offCanvasHamburgerIconWidthUnits?.Mobile};` : ''}
						${offCanvasHamburgerIconWidth?.Mobile ? `height: ${offCanvasHamburgerIconWidth?.Mobile}${offCanvasHamburgerIconWidthUnits?.Mobile};` : ''}
					}
				}
			`,
		[
			attributes
		],
	);

	const customCss = getCustomCss(offCanvasCustomCSS, `.${blockID}`);

	useEffect(() => {
		setAttributes({
			blockStyle: `${offCanvasStyle} ${customCss}`.replace(/\s+/g, " ").trim(),
		});
	}, [offCanvasStyle, customCss]);

	const editorStyle = `${offCanvasStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

	const generalControls = (
		<>
			<PanelBody title={__("Menu Opener", "frontis-blocks")} initialOpen={true}>
				<SelectControl
					label={__("Menu Type", "frontis-blocks")}
					value={menuType}
					options={MENU_TYPE}
					onChange={(value) => {
						setAttributes({
							menuType: value,
						});
					}}
				/>
				{(menuType === 'icon' || menuType === 'icon-text') && (
					<FBIconPicker
						value={hamburgerIcon}
						setIconHandler={hamburgerIconHandler}
					/>
				)}
				{(menuType === 'text' || menuType === 'icon-text') && (
					<TextControl
						label={__("Text", "frontis-blocks")}
						value={hamburgerText}
						onChange={(value) => setAttributes({ hamburgerText: value })}
					/>
				)}
				<SelectControl
					label={__("Select Pattern", "frontis-blocks")}
					value={selectedTemplate}
					options={patterns}
					onChange={(value) => {
						const content = getSelectedPatternContent(value);
						setAttributes({
							selectedTemplate: value,
							patternContent: content
						});
					}}
					help={__("Choose a block pattern to use as the content of your off-canvas menu", "frontis-blocks")}
				/>

				<SelectControl
					label={__("Animation", "frontis-blocks")}
					value={menuPosition}
					options={ANIMATION}
					onChange={(value) => setAttributes({ menuPosition: value })}
				/>
			</PanelBody>
			<PanelBody title={__("Closed Menu", "frontis-blocks")} initialOpen={false}>
				<SelectControl
					label={__("Menu Type", "frontis-blocks")}
					value={closeMenuType}
					options={MENU_TYPE}
					onChange={(value) => {
						setAttributes({
							closeMenuType: value,
						});
					}}
				/>
				{(menuType === 'icon' || menuType === 'icon-text') && (
					<FBIconPicker
						value={closeMenuIcon}
						setIconHandler={closeMenuIconHandler}
					/>
				)}
				{(menuType === 'text' || menuType === 'icon-text') && (
					<TextControl
						label={__("Text", "frontis-blocks")}
						value={closeMenuText}
						onChange={(value) => setAttributes({ closeMenuText: value })}
					/>
				)}
			</PanelBody>
		</>
	);

	const styleControls = (
		<>
			<PanelBody title={__("Off Canvas", "frontis-blocks")} initialOpen={true}>
				<FB_Range
					min={1}
					max={offCanvasPanelWidthUnits === '%' ? 100 : 2000}
					label={__("Panel Width", "frontis-blocks")}
					rangeValue={offCanvasPanelWidth}
					onChangeHandler={(value) => setAttributes({ offCanvasPanelWidth: value })}
					rangeUnitHandler={(value) => setAttributes({ offCanvasPanelWidthUnits: value })}
					deviceType={deviceType}
					units={offCanvasPanelWidthUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
				<FB_Range
					min={1}
					max={offCanvasPanelHeightUnits === '%' ? 100 : 2000}
					label={__("Panel Height", "frontis-blocks")}
					rangeValue={offCanvasPanelHeight}
					onChangeHandler={(value) => setAttributes({ offCanvasPanelHeight: value })}
					rangeUnitHandler={(value) => setAttributes({ offCanvasPanelHeightUnits: value })}
					deviceType={deviceType}
					units={offCanvasPanelHeightUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>

				<FB_SwitcherControl
					label={__("Background Type", "frontis-blocks")}
					globalSwitcher={offCanvasPanelBgColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ offCanvasPanelBgColorSwitcher: value })}
				/>

				{offCanvasPanelBgColorSwitcher === 'normal' && (
					<BaseControl
						className="fb-setting-background-color-setting-wrapper"
						label={__("Normal Background Type", "frontis-blocks")}
					>
						<Dropdown
							className="fb-setting-background-color-setting-icon-dropdown"
							contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
							popoverProps={{ placement: 'bottom-start' }}
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									variant="primary"
									onClick={onToggle}
									aria-expanded={isOpen}
									className="fb-setting-background-color-setting-icon-btn"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
										<path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
									</svg>
								</Button>
							)}
							renderContent={() => (
								<div className="fb-setting-background-color-popup-wrapper">
									<BaseControl
										className="fb-setting-background-color-popup-inner-wrapper"
									>
										<ButtonGroup className="fb-setting-background-color-panel-btn">
											{BACKGROUND_TYPES.map((item) => (
												<Button
													key={item.value}
													onClick={() => setAttributes({ offCanvasPanelBgNormalBackgroundType: item.value })}
													className={`fb-setting-background-color-panel-btn-switcher ${offCanvasPanelBgNormalBackgroundType === item.value ? 'active' : ''}`}
												>
													{item.label}
												</Button>
											))}
										</ButtonGroup>
									</BaseControl>

									{offCanvasPanelBgNormalBackgroundType === 'classic' && (

										<>
											<FB_ColorControl
												label={__("Color", "frontis-blocks")}
												globalColor={offCanvasPanelBgNormalClassicColor}
												setGlobalColor={(value) => setAttributes({ offCanvasPanelBgNormalClassicColor: value === undefined ? '' : value })}
											/>

											<FB_ResponsiveBackgroundImageControl
												deviceType={deviceType}
												globalBackgroundImageUrl={offCanvasPanelBgNormalBackgroundImageUrl}
												setGlobalBackgroundImageUrl={(value) => setAttributes({ offCanvasPanelBgNormalBackgroundImageUrl: value })}
												globalBackgroundImagePosition={offCanvasPanelBgNormalBackgroundImagePosition}
												setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ offCanvasPanelBgNormalBackgroundImagePosition: newPosition })}
												globalBackgroundImageAttachment={offCanvasPanelBgNormalBackgroundImageAttachment}
												setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ offCanvasPanelBgNormalBackgroundImageAttachment: newAttachment })}
												globalBackgroundImageRepeat={offCanvasPanelBgNormalBackgroundImageRepeat}
												setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ offCanvasPanelBgNormalBackgroundImageRepeat: newRepeat })}
												globalBackgroundImageSize={offCanvasPanelBgNormalBackgroundImageSize}
												setGlobalBackgroundImageSize={(newSize) => setAttributes({ offCanvasPanelBgNormalBackgroundImageSize: newSize })}
												setAttributes={setAttributes}
											/>

										</>
									)}

									{offCanvasPanelBgNormalBackgroundType === 'gradient' && (
										<FB_GradientColorControl
											globalCustomGradientSwitcher={offCanvasPanelBgNormalCustomGradientSwitcher}
											setGlobalCustomGradientSwitcher={(value) => setAttributes({ offCanvasPanelBgNormalCustomGradientSwitcher: value })}
											globalCustomGradientInputValue={offCanvasPanelBgNormalCustomGradientInputValue}
											setGlobalCustomGradientInputValue={(value) => setAttributes({ offCanvasPanelBgNormalCustomGradientInputValue: value })}
											globalGradientColor={offCanvasPanelBgNormalGradientColor}
											setGlobalGradientColor={(value) => setAttributes({ offCanvasPanelBgNormalGradientColor: value === undefined ? null : value })}
										/>
									)}
								</div>
							)}
						/>
					</BaseControl>

				)}

				{offCanvasPanelBgColorSwitcher === 'hover' && (
					<BaseControl
						className="fb-setting-background-color-setting-wrapper"
						label={__("Hover Background Type", "frontis-blocks")}
					>
						<Dropdown
							className="fb-setting-background-color-setting-icon-dropdown"
							contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
							popoverProps={{ placement: 'bottom-start' }}
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									variant="primary"
									onClick={onToggle}
									aria-expanded={isOpen}
									className="fb-setting-background-color-setting-icon-btn"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
										<path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
									</svg>
								</Button>
							)}
							renderContent={() => (
								<div className="fb-setting-background-color-popup-wrapper">
									<BaseControl
										className="fb-setting-background-color-popup-inner-wrapper"
									>
										<ButtonGroup className="fb-setting-background-color-panel-btn">
											{BACKGROUND_TYPES.map((item) => (
												<Button
													key={item.value}
													onClick={() => setAttributes({ offCanvasPanelBgHoverBackgroundType: item.value })}
													className={`fb-setting-background-color-panel-btn-switcher ${offCanvasPanelBgHoverBackgroundType === item.value ? 'active' : ''}`}
												>
													{item.label}
												</Button>
											))}
										</ButtonGroup>
									</BaseControl>

									{offCanvasPanelBgHoverBackgroundType === 'classic' && (

										<>
											<FB_ColorControl
												label={__("Color", "frontis-blocks")}
												globalColor={offCanvasPanelBgHoverClassicColor}
												setGlobalColor={(value) => setAttributes({ offCanvasPanelBgHoverClassicColor: value === undefined ? '' : value })}
											/>

											<FB_ResponsiveBackgroundImageControl
												deviceType={deviceType}
												globalBackgroundImageUrl={offCanvasPanelBgHoverBackgroundImageUrl}
												setGlobalBackgroundImageUrl={(value) => setAttributes({ offCanvasPanelBgHoverBackgroundImageUrl: value })}
												globalBackgroundImagePosition={offCanvasPanelBgHoverBackgroundImagePosition}
												setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ offCanvasPanelBgHoverBackgroundImagePosition: newPosition })}
												globalBackgroundImageAttachment={offCanvasPanelBgHoverBackgroundImageAttachment}
												setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ offCanvasPanelBgHoverBackgroundImageAttachment: newAttachment })}
												globalBackgroundImageRepeat={offCanvasPanelBgHoverBackgroundImageRepeat}
												setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ offCanvasPanelBgHoverBackgroundImageRepeat: newRepeat })}
												globalBackgroundImageSize={offCanvasPanelBgHoverBackgroundImageSize}
												setGlobalBackgroundImageSize={(newSize) => setAttributes({ offCanvasPanelBgHoverBackgroundImageSize: newSize })}
												setAttributes={setAttributes}
											/>

										</>
									)}

									{offCanvasPanelBgHoverBackgroundType === 'gradient' && (
										<FB_GradientColorControl
											globalCustomGradientSwitcher={offCanvasPanelBgHoverCustomGradientSwitcher}
											setGlobalCustomGradientSwitcher={(value) => setAttributes({ offCanvasPanelBgHoverCustomGradientSwitcher: value })}
											globalCustomGradientInputValue={offCanvasPanelBgHoverCustomGradientInputValue}
											setGlobalCustomGradientInputValue={(value) => setAttributes({ offCanvasPanelBgHoverCustomGradientInputValue: value })}
											globalGradientColor={offCanvasPanelBgHoverGradientColor}
											setGlobalGradientColor={(value) => setAttributes({ offCanvasPanelBgHoverGradientColor: value === undefined ? null : value })}
										/>
									)}
								</div>
							)}
						/>
					</BaseControl>
				)}
				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleoffCanvasPanelPaddingUnitsHandler}
					spacingUnits={offCanvasPanelPaddingUnits}
					spacingDesktop={offCanvasPanelDesktopPadding}
					spacingTablet={offCanvasPanelTabPadding}
					spacingMobile={offCanvasPanelMobilePadding}
					handleSpacingUnitHandler={handleoffCanvasPanelPaddingUnitChange}
					spacingCombineBtn={offCanvasPanelPaddingLink}
					spacingCombineBtnHandler={handleoffCanvasPanelPaddingCombineBtn}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleoffCanvasPanelMarginUnitsHandler}
					spacingUnits={offCanvasPanelMarginUnits}
					spacingDesktop={offCanvasPanelDesktopMargin}
					spacingTablet={offCanvasPanelTabMargin}
					spacingMobile={offCanvasPanelMobileMargin}
					handleSpacingUnitHandler={handleoffCanvasPanelMarginUnitChange}
					spacingCombineBtn={offCanvasPanelMarginLink}
					spacingCombineBtnHandler={handleoffCanvasPanelMarginCombineBtn}
					setAttributes={setAttributes}
				/>
				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={offCanvasPanelBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ offCanvasPanelBorder: value })}
				/>


				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={offCanvasPanelBorderColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ offCanvasPanelBorderColorSwitcher: value })}
				/>

				{offCanvasPanelBorderColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={offCanvasPanelBorderColor}
						setGlobalColor={(value) => setAttributes({ offCanvasPanelBorderColor: value === undefined ? '' : value })}
					/>
				)}

				{offCanvasPanelBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={offCanvasPanelBorderHoverColor}
						setGlobalColor={(value) => setAttributes({ offCanvasPanelBorderHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_Spacing
					label={__("Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleoffCanvasPanelBorderUnitsChange}
					spacingUnits={offCanvasPanelBorderUnits}
					spacingDesktop={offCanvasPanelDesktopBorderWidth}
					spacingTablet={offCanvasPanelTabBorderWidth}
					spacingMobile={offCanvasPanelMobileBorderWidth}
					handleSpacingUnitHandler={handleoffCanvasPanelBorderWidthChange}
					spacingCombineBtn={offCanvasPanelBorderLink}
					spacingCombineBtnHandler={handleoffCanvasPanelBorderLinkToggle}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleoffCanvasPanelBorderRadiusUnitsChange}
					spacingUnits={offCanvasPanelBorderRadiusUnits}
					spacingDesktop={offCanvasPanelDesktopBorderRadiusWidth}
					spacingTablet={offCanvasPanelTabBorderRadiusWidth}
					spacingMobile={offCanvasPanelMobileBorderRadiusWidth}
					handleSpacingUnitHandler={handleoffCanvasPanelBorderRadiusChange}
					spacingCombineBtn={offCanvasPanelBorderRadiusLink}
					spacingCombineBtnHandler={handleoffCanvasPanelBorderRadiusLinkToggle}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Box Shadow", "frontis-blocks")}
					globalSwitcher={offCanvasPanelBoxShadowSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ offCanvasPanelBoxShadowSwitcher: value })}
				/>

				{offCanvasPanelBoxShadowSwitcher === 'normal' && (
					<FB_BoxShadowControl
						label={__("Normal Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) => setAttributes({ offCanvasPanelBoxShadowValues: value })}
						initialShadowValue={offCanvasPanelBoxShadowValues}
						onBoxShadowStyleChange={(value) => setAttributes({ offCanvasPanelBoxShadowCssValue: value })}
					/>
				)}

				{offCanvasPanelBoxShadowSwitcher === 'hover' && (
					<FB_BoxShadowControl
						label={__("Hover Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) => setAttributes({ offCanvasPanelBoxShadowHoverValues: value })}
						initialShadowValue={offCanvasPanelBoxShadowHoverValues}
						onBoxShadowStyleChange={(value) => setAttributes({ offCanvasPanelBoxShadowHoverCssValue: value })}
					/>
				)}
			</PanelBody>

			<PanelBody title={__("Icon", "frontis-blocks")} initialOpen={true}>
				<FB_SwitcherControl
					label={__("Icon Type", "frontis-blocks")}
					globalSwitcher={menuIconTypeSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ menuIconTypeSwitcher: value })}
					options={[
						{ label: __('Opener', 'frontis-blocks'), value: 'opener' },
						{ label: __('Closer', 'frontis-blocks'), value: 'closer' },
					]
					}
				/>

				{menuIconTypeSwitcher === 'opener' && (
					<>
						<FB_Range
							min={1}
							max={offCanvasHamburgerIconWidthUnits === '%' ? 100 : 500}
							label={__("Icon Size", "frontis-blocks")}
							rangeValue={offCanvasHamburgerIconWidth}
							onChangeHandler={(value) => setAttributes({ offCanvasHamburgerIconWidth: value })}
							rangeUnitHandler={(value) => setAttributes({ offCanvasHamburgerIconWidthUnits: value })}
							deviceType={deviceType}
							units={offCanvasHamburgerIconWidthUnits}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
						/>

						<FB_Range
							min={1}
							max={offCanvasHamburgerIconBgWidthUnits === '%' ? 100 : 500}
							label={__("Background Size", "frontis-blocks")}
							rangeValue={offCanvasHamburgerIconBgWidth}
							onChangeHandler={(value) => setAttributes({ offCanvasHamburgerIconBgWidth: value })}
							rangeUnitHandler={(value) => setAttributes({ offCanvasHamburgerIconBgWidthUnits: value })}
							deviceType={deviceType}
							units={offCanvasHamburgerIconBgWidthUnits}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
						/>

						<FB_SwitcherControl
							label={__("Icon Color", "frontis-blocks")}
							globalSwitcher={offCanvashamburgerIconColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ offCanvashamburgerIconColorSwitcher: value })}
						/>

						{offCanvashamburgerIconColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={offCanvashamburgerIconColor}
								setGlobalColor={(value) => setAttributes({ offCanvashamburgerIconColor: value === undefined ? '' : value })}
							/>
						)}

						{offCanvashamburgerIconColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={offCanvashamburgerIconHoverColor}
								setGlobalColor={(value) => setAttributes({ offCanvashamburgerIconHoverColor: value === undefined ? '' : value })}
							/>
						)}

						<FB_SwitcherControl
							label={__("Background Color", "frontis-blocks")}
							globalSwitcher={offCanvashamburgerIconBgColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ offCanvashamburgerIconBgColorSwitcher: value })}
						/>

						{offCanvashamburgerIconBgColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={offCanvashamburgerIconBgColor}
								setGlobalColor={(value) => setAttributes({ offCanvashamburgerIconBgColor: value === undefined ? '' : value })}
							/>
						)}

						{offCanvashamburgerIconBgColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={offCanvashamburgerIconBgHoverColor}
								setGlobalColor={(value) => setAttributes({ offCanvashamburgerIconBgHoverColor: value === undefined ? '' : value })}
							/>
						)}

						<FB_Spacing
							label={__("Padding", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={offCanvasHamburgerIconPaddingUnitsHandler}
							spacingUnits={offCanvasHamburgerIconPaddingUnits}
							spacingDesktop={offCanvasHamburgerIconDesktopPadding}
							spacingTablet={offCanvasHamburgerIconTabletPadding}
							spacingMobile={offCanvasHamburgerIconMobilePadding}
							handleSpacingUnitHandler={offCanvasHamburgerIconPaddingUnitsChange}
							spacingCombineBtn={offCanvasHamburgerIconPaddingLink}
							spacingCombineBtnHandler={offCanvasHamburgerIconPaddingLinkBtn}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={__("Margin", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={offCanvasHamburgerIconMarginUnitsHandler}
							spacingUnits={offCanvasHamburgerIconMarginUnits}
							spacingDesktop={offCanvasHamburgerIconDesktopMargin}
							spacingTablet={offCanvasHamburgerIconTabletMargin}
							spacingMobile={offCanvasHamburgerIconMobileMargin}
							handleSpacingUnitHandler={offCanvasHamburgerIconMarginUnitsChange}
							spacingCombineBtn={offCanvasHamburgerIconMarginLink}
							spacingCombineBtnHandler={offCanvasHamburgerIconMarginLinkBtn}
							setAttributes={setAttributes}
						/>
						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={offCanvashamburgerIconBorder}
							options={BORDER_STYLES}
							onChange={(value) => setAttributes({ offCanvashamburgerIconBorder: value })}
						/>

						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={offCanvashamburgerIconBorderColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ offCanvashamburgerIconBorderColorSwitcher: value })}
						/>

						{offCanvashamburgerIconBorderColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={offCanvashamburgerIconBorderColor}
								setGlobalColor={(value) => setAttributes({ offCanvashamburgerIconBorderColor: value === undefined ? '' : value })}
							/>
						)}

						{offCanvashamburgerIconBorderColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={offCanvashamburgerIconBorderHoverColor}
								setGlobalColor={(value) => setAttributes({ offCanvashamburgerIconBorderHoverColor: value === undefined ? '' : value })}
							/>
						)}

						<FB_Spacing
							label={__("Border", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleoffCanvashamburgerIconBorderUnitsChange}
							spacingUnits={offCanvashamburgerIconBorderUnits}
							spacingDesktop={offCanvashamburgerIconDesktopBorderWidth}
							spacingTablet={offCanvashamburgerIconTabBorderWidth}
							spacingMobile={offCanvashamburgerIconMobileBorderWidth}
							handleSpacingUnitHandler={handleoffCanvashamburgerIconBorderWidthChange}
							spacingCombineBtn={offCanvashamburgerIconBorderLink}
							spacingCombineBtnHandler={handleoffCanvashamburgerIconBorderLinkToggle}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={__("Border Radius", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleoffCanvashamburgerIconBorderRadiusUnitsChange}
							spacingUnits={offCanvashamburgerIconBorderRadiusUnits}
							spacingDesktop={offCanvashamburgerIconDesktopBorderRadiusWidth}
							spacingTablet={offCanvashamburgerIconTabBorderRadiusWidth}
							spacingMobile={offCanvashamburgerIconMobileBorderRadiusWidth}
							handleSpacingUnitHandler={handleoffCanvashamburgerIconBorderRadiusChange}
							spacingCombineBtn={offCanvashamburgerIconBorderRadiusLink}
							spacingCombineBtnHandler={handleoffCanvashamburgerIconBorderRadiusLinkToggle}
							setAttributes={setAttributes}
						/>
					</>
				)}

				{menuIconTypeSwitcher === 'closer' && (
					<>
						<FB_Range
							min={1}
							max={offCanvasCloseIconWidthUnits === '%' ? 100 : 500}
							label={__("Icon Size", "frontis-blocks")}
							rangeValue={offCanvasCloseIconWidth}
							onChangeHandler={(value) => setAttributes({ offCanvasCloseIconWidth: value })}
							rangeUnitHandler={(value) => setAttributes({ offCanvasCloseIconWidthUnits: value })}
							deviceType={deviceType}
							units={offCanvasCloseIconWidthUnits}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
						/>

						<FB_Range
							min={1}
							max={offCanvasCloseIconBgWidthUnits === '%' ? 100 : 500}
							label={__("Background Size", "frontis-blocks")}
							rangeValue={offCanvasCloseIconBgWidth}
							onChangeHandler={(value) => setAttributes({ offCanvasCloseIconBgWidth: value })}
							rangeUnitHandler={(value) => setAttributes({ offCanvasCloseIconBgWidthUnits: value })}
							deviceType={deviceType}
							units={offCanvasCloseIconBgWidthUnits}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
						/>

						<FB_SwitcherControl
							label={__("Icon Color", "frontis-blocks")}
							globalSwitcher={offCanvasCloseIconColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ offCanvasCloseIconColorSwitcher: value })}
						/>

						{offCanvasCloseIconColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={offCanvasCloseIconColor}
								setGlobalColor={(value) => setAttributes({ offCanvasCloseIconColor: value === undefined ? '' : value })}
							/>
						)}

						{offCanvasCloseIconColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={offCanvasCloseIconHoverColor}
								setGlobalColor={(value) => setAttributes({ offCanvasCloseIconHoverColor: value === undefined ? '' : value })}
							/>
						)}

						<FB_SwitcherControl
							label={__("Background Color", "frontis-blocks")}
							globalSwitcher={offCanvasCloseIconBgColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ offCanvasCloseIconBgColorSwitcher: value })}
						/>

						{offCanvasCloseIconBgColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={offCanvasCloseIconBgColor}
								setGlobalColor={(value) => setAttributes({ offCanvasCloseIconBgColor: value === undefined ? '' : value })}
							/>
						)}

						{offCanvasCloseIconBgColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={offCanvasCloseIconBgHoverColor}
								setGlobalColor={(value) => setAttributes({ offCanvasCloseIconBgHoverColor: value === undefined ? '' : value })}
							/>
						)}

						<FB_Spacing
							label={__("Padding", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={offCanvasCloseIconPaddingUnitsHandler}
							spacingUnits={offCanvasCloseIconPaddingUnits}
							spacingDesktop={offCanvasCloseIconDesktopPadding}
							spacingTablet={offCanvasCloseIconTabletPadding}
							spacingMobile={offCanvasCloseIconMobilePadding}
							handleSpacingUnitHandler={offCanvasCloseIconPaddingUnitsChange}
							spacingCombineBtn={offCanvasCloseIconPaddingLink}
							spacingCombineBtnHandler={offCanvasCloseIconPaddingLinkBtn}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={__("Margin", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={offCanvasCloseIconMarginUnitsHandler}
							spacingUnits={offCanvasCloseIconMarginUnits}
							spacingDesktop={offCanvasCloseIconDesktopMargin}
							spacingTablet={offCanvasCloseIconTabletMargin}
							spacingMobile={offCanvasCloseIconMobileMargin}
							handleSpacingUnitHandler={offCanvasCloseIconMarginUnitsChange}
							spacingCombineBtn={offCanvasCloseIconMarginLink}
							spacingCombineBtnHandler={offCanvasCloseIconMarginLinkBtn}
							setAttributes={setAttributes}
						/>
						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={offCanvasCloseIconBorder}
							options={BORDER_STYLES}
							onChange={(value) => setAttributes({ offCanvasCloseIconBorder: value })}
						/>

						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={offCanvasCloseIconBorderColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ offCanvasCloseIconBorderColorSwitcher: value })}
						/>

						{offCanvasCloseIconBorderColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={offCanvasCloseIconBorderColor}
								setGlobalColor={(value) => setAttributes({ offCanvasCloseIconBorderColor: value === undefined ? '' : value })}
							/>
						)}

						{offCanvasCloseIconBorderColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={offCanvasCloseIconBorderHoverColor}
								setGlobalColor={(value) => setAttributes({ offCanvasCloseIconBorderHoverColor: value === undefined ? '' : value })}
							/>
						)}

						<FB_Spacing
							label={__("Border", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleoffCanvasCloseIconBorderUnitsChange}
							spacingUnits={offCanvasCloseIconBorderUnits}
							spacingDesktop={offCanvasCloseIconDesktopBorderWidth}
							spacingTablet={offCanvasCloseIconTabBorderWidth}
							spacingMobile={offCanvasCloseIconMobileBorderWidth}
							handleSpacingUnitHandler={handleoffCanvasCloseIconBorderWidthChange}
							spacingCombineBtn={offCanvasCloseIconBorderLink}
							spacingCombineBtnHandler={handleoffCanvasCloseIconBorderLinkToggle}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={__("Border Radius", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleoffCanvasCloseIconBorderRadiusUnitsChange}
							spacingUnits={offCanvasCloseIconBorderRadiusUnits}
							spacingDesktop={offCanvasCloseIconDesktopBorderRadiusWidth}
							spacingTablet={offCanvasCloseIconTabBorderRadiusWidth}
							spacingMobile={offCanvasCloseIconMobileBorderRadiusWidth}
							handleSpacingUnitHandler={handleoffCanvasCloseIconBorderRadiusChange}
							spacingCombineBtn={offCanvasCloseIconBorderRadiusLink}
							spacingCombineBtnHandler={handleoffCanvasCloseIconBorderRadiusLinkToggle}
							setAttributes={setAttributes}
						/>
					</>
				)}
			</PanelBody>
		</>
	);
	const advancedControls = (
		<>
			<PanelBody title={__("Advanced Settings", "frontis-blocks")} initialOpen={true}>
				<PanelBody
					title={__("Custom CSS", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_CustomCSSEditor
						value={offCanvasCustomCSS}
						onChangeValue={(value) => setAttributes({ offCanvasCustomCSS: value })}
					/>
				</PanelBody>
			</PanelBody>
		</>
	);

	return (
		<>
			<style>
				{editorStyle}
			</style>
			<FB_InspectorControls
				generalControls={generalControls}
				styleControls={styleControls}
				advancedControls={advancedControls}
			/>
		</>
	);
}