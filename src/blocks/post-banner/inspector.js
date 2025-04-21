import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TabPanel,
	SelectControl,
	ToggleControl
} from '@wordpress/components';
import { useEffect, useState, useMemo } from '@wordpress/element';

import {
	BORDER_STYLES
} from "./constants/constants";
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_Spacing from '@Components/spacing';

import { useDeviceType } from "@Config/displayType";
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		categorySwitcher,
		titleSwitcher,
		postMetaSwitcher,
		categoryGlobalTypographyData,
		categoryGlobalTypoSwitcher,
		categoryGlobalTypoType,
		categoryGlobalTypoOption,
		categoryFontFamily,
		categoryFontSize,
		categoryFontSizeUnits,
		categoryFontWeight,
		categoryFontStyle,
		categoryTextTransform,
		categoryTextDecoration,
		categoryLetterSpacing,
		categoryLetterSpacingUnits,
		categoryLineHeight,
		categoryLineHeightUnits,
		categoryBgColorSwitcher,
		categoryBgColor,
		categoryBgColorHover,
		categoryColorSwitcher,
		categoryColor,
		categoryHoverColor,
		categoryMarginUnits,
		categoryDesktopMargin,
		categoryTabMargin,
		categoryMobileMargin,
		categoryMarginLink,
		categoryPaddingUnits,
		categoryDesktopPadding,
		categoryTabPadding,
		categoryMobilePadding,
		categoryPaddingLink,
		categoryBorder,
		categoryBorderColorSwitcher,
		categoryBorderColor,
		categoryBorderHoverColor,
		categoryBorderUnits,
		categoryDesktopBorder,
		categoryTabBorder,
		categoryMobileBorder,
		categoryBorderLink,
		categoryBorderRadiusUnits,
		categoryDesktopBorderRadius,
		categoryTabBorderRadius,
		categoryMobileBorderRadius,
		categoryBorderRadiusLink,
		titleGlobalTypographyData,
		titleGlobalTypoSwitcher,
		titleGlobalTypoType,
		titleGlobalTypoOption,
		titleFontFamily,
		titleFontSize,
		titleFontSizeUnits,
		titleFontWeight,
		titleFontStyle,
		titleTextTransform,
		titleTextDecoration,
		titleLetterSpacing,
		titleLetterSpacingUnits,
		titleLineHeight,
		titleLineHeightUnits,
		titleBgColorSwitcher,
		titleBgColor,
		titleBgColorHover,
		titleColorSwitcher,
		titleColor,
		titleHoverColor,
		titleMarginUnits,
		titleDesktopMargin,
		titleTabMargin,
		titleMobileMargin,
		titleMarginLink,
		titlePaddingUnits,
		titleDesktopPadding,
		titleTabPadding,
		titleMobilePadding,
		titlePaddingLink,
		titleBorder,
		titleBorderColorSwitcher,
		titleBorderColor,
		titleBorderHoverColor,
		titleBorderUnits,
		titleDesktopBorder,
		titleTabBorder,
		titleMobileBorder,
		titleBorderLink,
		titleBorderRadiusUnits,
		titleDesktopBorderRadius,
		titleTabBorderRadius,
		titleMobileBorderRadius,
		titleBorderRadiusLink,
		authorGlobalTypographyData,
		authorGlobalTypoSwitcher,
		authorGlobalTypoType,
		authorGlobalTypoOption,
		authorFontFamily,
		authorFontSize,
		authorFontSizeUnits,
		authorFontWeight,
		authorFontStyle,
		authorTextTransform,
		authorTextDecoration,
		authorLetterSpacing,
		authorLetterSpacingUnits,
		authorLineHeight,
		authorLineHeightUnits,
		authorBgColorSwitcher,
		authorBgColor,
		authorBgColorHover,
		authorColorSwitcher,
		authorColor,
		authorHoverColor,
		authorMarginUnits,
		authorDesktopMargin,
		authorTabMargin,
		authorMobileMargin,
		authorMarginLink,
		authorPaddingUnits,
		authorDesktopPadding,
		authorTabPadding,
		authorMobilePadding,
		authorPaddingLink,
		authorBorder,
		authorBorderColorSwitcher,
		authorBorderColor,
		authorBorderHoverColor,
		authorBorderUnits,
		authorDesktopBorder,
		authorTabBorder,
		authorMobileBorder,
		authorBorderLink,
		authorBorderRadiusUnits,
		authorDesktopBorderRadius,
		authorTabBorderRadius,
		authorMobileBorderRadius,
		authorBorderRadiusLink,
		dateGlobalTypographyData,
		dateGlobalTypoSwitcher,
		dateGlobalTypoType,
		dateGlobalTypoOption,
		dateFontFamily,
		dateFontSize,
		dateFontSizeUnits,
		dateFontWeight,
		dateFontStyle,
		dateTextTransform,
		dateTextDecoration,
		dateLetterSpacing,
		dateLetterSpacingUnits,
		dateLineHeight,
		dateLineHeightUnits,
		dateColorSwitcher,
		dateColor,
		dateHoverColor,
		dateBgColorSwitcher,
		dateBgColor,
		dateBgColorHover,
		dateMarginUnits,
		dateDesktopMargin,
		dateTabMargin,
		dateMobileMargin,
		dateMarginLink,
		datePaddingUnits,
		dateDesktopPadding,
		dateTabPadding,
		dateMobilePadding,
		datePaddingLink,
		dateBorder,
		dateBorderColorSwitcher,
		dateBorderColor,
		dateBorderHoverColor,
		dateBorderUnits,
		dateDesktopBorder,
		dateTabBorder,
		dateMobileBorder,
		dateBorderLink,
		dateBorderRadiusUnits,
		dateDesktopBorderRadius,
		dateTabBorderRadius,
		dateMobileBorderRadius,
		dateBorderRadiusLink,
	} = attributes;

	const deviceType = useDeviceType();

	useEffect(() => {
		if (clientId && typeof clientId === 'string') {
			setAttributes({
				blockID: "fb-post-banner-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	/** Start Category Margin */
	const categoryMarginUnitsChange = (event, position) => {
		const value = event.target.value;
		if (categoryMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						categoryDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						categoryTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						categoryMobileMargin: {
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
					setAttributes({ categoryDesktopMargin: { ...categoryDesktopMargin, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ categoryTabMargin: { ...categoryTabMargin, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ categoryMobileMargin: { ...categoryMobileMargin, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const categoryMarginLinkBtn = () => {
		setAttributes({
			categoryMarginLink: !categoryMarginLink
		});
	};

	const categoryMarginUnitsHandler = (unit) => {
		setAttributes({
			categoryMarginUnits: {
				...categoryMarginUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default margin for Category */
	const categoryDesktopMarginWidth = `${categoryDesktopMargin.top}${categoryMarginUnits.Desktop} ${categoryDesktopMargin.right}${categoryMarginUnits.Desktop} ${categoryDesktopMargin.bottom}${categoryMarginUnits.Desktop} ${categoryDesktopMargin.left}${categoryMarginUnits.Desktop}`;
	const categoryTabletMarginWidth = `${categoryTabMargin.top}${categoryMarginUnits.Tablet} ${categoryTabMargin.right}${categoryMarginUnits.Tablet} ${categoryTabMargin.bottom}${categoryMarginUnits.Tablet} ${categoryTabMargin.left}${categoryMarginUnits.Tablet}`;
	const categoryMobileMarginWidth = `${categoryMobileMargin.top}${categoryMarginUnits.Mobile} ${categoryMobileMargin.right}${categoryMarginUnits.Mobile} ${categoryMobileMargin.bottom}${categoryMarginUnits.Mobile} ${categoryMobileMargin.left}${categoryMarginUnits.Mobile}`;
	/** End Category Margin */

	/** Start Category Padding */
	const categoryPaddingUnitsChange = (event, position) => {
		const value = event.target.value;
		if (categoryPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						categoryDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						categoryTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						categoryMobilePadding: {
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
					setAttributes({ categoryDesktopPadding: { ...categoryDesktopPadding, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ categoryTabPadding: { ...categoryTabPadding, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ categoryMobilePadding: { ...categoryMobilePadding, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const categoryPaddingLinkBtn = () => {
		setAttributes({
			categoryPaddingLink: !categoryPaddingLink
		});
	};

	const categoryPaddingUnitsHandler = (unit) => {
		setAttributes({
			categoryPaddingUnits: {
				...categoryPaddingUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default padding for Category */
	const categoryDesktopPaddingWidth = `${categoryDesktopPadding.top}${categoryPaddingUnits.Desktop} ${categoryDesktopPadding.right}${categoryPaddingUnits.Desktop} ${categoryDesktopPadding.bottom}${categoryPaddingUnits.Desktop} ${categoryDesktopPadding.left}${categoryPaddingUnits.Desktop}`;
	const categoryTabletPaddingWidth = `${categoryTabPadding.top}${categoryPaddingUnits.Tablet} ${categoryTabPadding.right}${categoryPaddingUnits.Tablet} ${categoryTabPadding.bottom}${categoryPaddingUnits.Tablet} ${categoryTabPadding.left}${categoryPaddingUnits.Tablet}`;
	const categoryMobilePaddingWidth = `${categoryMobilePadding.top}${categoryPaddingUnits.Mobile} ${categoryMobilePadding.right}${categoryPaddingUnits.Mobile} ${categoryMobilePadding.bottom}${categoryPaddingUnits.Mobile} ${categoryMobilePadding.left}${categoryPaddingUnits.Mobile}`;
	/** End Category Padding */

	/** Start Category Border */
	const categoryBorderUnitsChange = (event, position) => {
		const value = event.target.value;
		if (categoryBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						categoryDesktopBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						categoryTabBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						categoryMobileBorder: {
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
					setAttributes({ categoryDesktopBorder: { ...categoryDesktopBorder, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ categoryTabBorder: { ...categoryTabBorder, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ categoryMobileBorder: { ...categoryMobileBorder, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const categoryBorderLinkBtn = () => {
		setAttributes({
			categoryBorderLink: !categoryBorderLink
		});
	};

	const categoryBorderUnitsHandler = (unit) => {
		setAttributes({
			categoryBorderUnits: {
				...categoryBorderUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default border for Category */
	const categoryDesktopBorderWidth = `${categoryDesktopBorder.top}${categoryBorderUnits.Desktop} ${categoryDesktopBorder.right}${categoryBorderUnits.Desktop} ${categoryDesktopBorder.bottom}${categoryBorderUnits.Desktop} ${categoryDesktopBorder.left}${categoryBorderUnits.Desktop}`;
	const categoryTabletBorderWidth = `${categoryTabBorder.top}${categoryBorderUnits.Tablet} ${categoryTabBorder.right}${categoryBorderUnits.Tablet} ${categoryTabBorder.bottom}${categoryBorderUnits.Tablet} ${categoryTabBorder.left}${categoryBorderUnits.Tablet}`;
	const categoryMobileBorderWidth = `${categoryMobileBorder.top}${categoryBorderUnits.Mobile} ${categoryMobileBorder.right}${categoryBorderUnits.Mobile} ${categoryMobileBorder.bottom}${categoryBorderUnits.Mobile} ${categoryMobileBorder.left}${categoryBorderUnits.Mobile}`;
	/** End Category Border */

	/** Start Category Border Radius */
	const categoryBorderRadiusUnitsChange = (event, position) => {
		const value = event.target.value;
		if (categoryBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						categoryDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						categoryTabBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						categoryMobileBorderRadius: {
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
					setAttributes({ categoryDesktopBorderRadius: { ...categoryDesktopBorderRadius, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ categoryTabBorderRadius: { ...categoryTabBorderRadius, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ categoryMobileBorderRadius: { ...categoryMobileBorderRadius, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const categoryBorderRadiusLinkBtn = () => {
		setAttributes({
			categoryBorderRadiusLink: !categoryBorderRadiusLink
		});
	};

	const categoryBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			categoryBorderRadiusUnits: {
				...categoryBorderRadiusUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default border radius for Category */
	const categoryDesktopBorderRadiusWidth = `${categoryDesktopBorderRadius.top}${categoryBorderRadiusUnits.Desktop} ${categoryDesktopBorderRadius.right}${categoryBorderRadiusUnits.Desktop} ${categoryDesktopBorderRadius.bottom}${categoryBorderRadiusUnits.Desktop} ${categoryDesktopBorderRadius.left}${categoryBorderRadiusUnits.Desktop}`;
	const categoryTabletBorderRadiusWidth = `${categoryTabBorderRadius.top}${categoryBorderRadiusUnits.Tablet} ${categoryTabBorderRadius.right}${categoryBorderRadiusUnits.Tablet} ${categoryTabBorderRadius.bottom}${categoryBorderRadiusUnits.Tablet} ${categoryTabBorderRadius.left}${categoryBorderRadiusUnits.Tablet}`;
	const categoryMobileBorderRadiusWidth = `${categoryMobileBorderRadius.top}${categoryBorderRadiusUnits.Mobile} ${categoryMobileBorderRadius.right}${categoryBorderRadiusUnits.Mobile} ${categoryMobileBorderRadius.bottom}${categoryBorderRadiusUnits.Mobile} ${categoryMobileBorderRadius.left}${categoryBorderRadiusUnits.Mobile}`;
	/** End Category Border Radius */

	/** Start Title Margin */
	const titleMarginUnitsChange = (event, position) => {
		const value = event.target.value;
		if (titleMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						titleDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						titleTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						titleMobileMargin: {
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
					setAttributes({ titleDesktopMargin: { ...titleDesktopMargin, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ titleTabMargin: { ...titleTabMargin, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ titleMobileMargin: { ...titleMobileMargin, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const titleMarginLinkBtn = () => {
		setAttributes({
			titleMarginLink: !titleMarginLink
		});
	};

	const titleMarginUnitsHandler = (unit) => {
		setAttributes({
			titleMarginUnits: {
				...titleMarginUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default margin for Title */
	const titleDesktopMarginWidth = `${titleDesktopMargin.top}${titleMarginUnits.Desktop} ${titleDesktopMargin.right}${titleMarginUnits.Desktop} ${titleDesktopMargin.bottom}${titleMarginUnits.Desktop} ${titleDesktopMargin.left}${titleMarginUnits.Desktop}`;
	const titleTabletMarginWidth = `${titleTabMargin.top}${titleMarginUnits.Tablet} ${titleTabMargin.right}${titleMarginUnits.Tablet} ${titleTabMargin.bottom}${titleMarginUnits.Tablet} ${titleTabMargin.left}${titleMarginUnits.Tablet}`;
	const titleMobileMarginWidth = `${titleMobileMargin.top}${titleMarginUnits.Mobile} ${titleMobileMargin.right}${titleMarginUnits.Mobile} ${titleMobileMargin.bottom}${titleMarginUnits.Mobile} ${titleMobileMargin.left}${titleMarginUnits.Mobile}`;
	/** End Title Margin */

	/** Start Title Padding */
	const titlePaddingUnitsChange = (event, position) => {
		const value = event.target.value;
		if (titlePaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						titleDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						titleTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						titleMobilePadding: {
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
					setAttributes({ titleDesktopPadding: { ...titleDesktopPadding, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ titleTabPadding: { ...titleTabPadding, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ titleMobilePadding: { ...titleMobilePadding, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const titlePaddingLinkBtn = () => {
		setAttributes({
			titlePaddingLink: !titlePaddingLink
		});
	};

	const titlePaddingUnitsHandler = (unit) => {
		setAttributes({
			titlePaddingUnits: {
				...titlePaddingUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default padding for Title */
	const titleDesktopPaddingWidth = `${titleDesktopPadding.top}${titlePaddingUnits.Desktop} ${titleDesktopPadding.right}${titlePaddingUnits.Desktop} ${titleDesktopPadding.bottom}${titlePaddingUnits.Desktop} ${titleDesktopPadding.left}${titlePaddingUnits.Desktop}`;
	const titleTabletPaddingWidth = `${titleTabPadding.top}${titlePaddingUnits.Tablet} ${titleTabPadding.right}${titlePaddingUnits.Tablet} ${titleTabPadding.bottom}${titlePaddingUnits.Tablet} ${titleTabPadding.left}${titlePaddingUnits.Tablet}`;
	const titleMobilePaddingWidth = `${titleMobilePadding.top}${titlePaddingUnits.Mobile} ${titleMobilePadding.right}${titlePaddingUnits.Mobile} ${titleMobilePadding.bottom}${titlePaddingUnits.Mobile} ${titleMobilePadding.left}${titlePaddingUnits.Mobile}`;
	/** End Title Padding */

	/** Start Title Border */
	const titleBorderUnitsChange = (event, position) => {
		const value = event.target.value;
		if (titleBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						titleDesktopBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						titleTabBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						titleMobileBorder: {
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
					setAttributes({ titleDesktopBorder: { ...titleDesktopBorder, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ titleTabBorder: { ...titleTabBorder, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ titleMobileBorder: { ...titleMobileBorder, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const titleBorderLinkBtn = () => {
		setAttributes({
			titleBorderLink: !titleBorderLink
		});
	};

	const titleBorderUnitsHandler = (unit) => {
		setAttributes({
			titleBorderUnits: {
				...titleBorderUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default border for Title */
	const titleDesktopBorderWidth = `${titleDesktopBorder.top}${titleBorderUnits.Desktop} ${titleDesktopBorder.right}${titleBorderUnits.Desktop} ${titleDesktopBorder.bottom}${titleBorderUnits.Desktop} ${titleDesktopBorder.left}${titleBorderUnits.Desktop}`;
	const titleTabletBorderWidth = `${titleTabBorder.top}${titleBorderUnits.Tablet} ${titleTabBorder.right}${titleBorderUnits.Tablet} ${titleTabBorder.bottom}${titleBorderUnits.Tablet} ${titleTabBorder.left}${titleBorderUnits.Tablet}`;
	const titleMobileBorderWidth = `${titleMobileBorder.top}${titleBorderUnits.Mobile} ${titleMobileBorder.right}${titleBorderUnits.Mobile} ${titleMobileBorder.bottom}${titleBorderUnits.Mobile} ${titleMobileBorder.left}${titleBorderUnits.Mobile}`;
	/** End Title Border */

	/** Start Title Border Radius */
	const titleBorderRadiusUnitsChange = (event, position) => {
		const value = event.target.value;
		if (titleBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						titleDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						titleTabBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						titleMobileBorderRadius: {
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
					setAttributes({ titleDesktopBorderRadius: { ...titleDesktopBorderRadius, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ titleTabBorderRadius: { ...titleTabBorderRadius, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ titleMobileBorderRadius: { ...titleMobileBorderRadius, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const titleBorderRadiusLinkBtn = () => {
		setAttributes({
			titleBorderRadiusLink: !titleBorderRadiusLink
		});
	};

	const titleBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			titleBorderRadiusUnits: {
				...titleBorderRadiusUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default border radius for Title */
	const titleDesktopBorderRadiusWidth = `${titleDesktopBorderRadius.top}${titleBorderRadiusUnits.Desktop} ${titleDesktopBorderRadius.right}${titleBorderRadiusUnits.Desktop} ${titleDesktopBorderRadius.bottom}${titleBorderRadiusUnits.Desktop} ${titleDesktopBorderRadius.left}${titleBorderRadiusUnits.Desktop}`;
	const titleTabletBorderRadiusWidth = `${titleTabBorderRadius.top}${titleBorderRadiusUnits.Tablet} ${titleTabBorderRadius.right}${titleBorderRadiusUnits.Tablet} ${titleTabBorderRadius.bottom}${titleBorderRadiusUnits.Tablet} ${titleTabBorderRadius.left}${titleBorderRadiusUnits.Tablet}`;
	const titleMobileBorderRadiusWidth = `${titleMobileBorderRadius.top}${titleBorderRadiusUnits.Mobile} ${titleMobileBorderRadius.right}${titleBorderRadiusUnits.Mobile} ${titleMobileBorderRadius.bottom}${titleBorderRadiusUnits.Mobile} ${titleMobileBorderRadius.left}${titleBorderRadiusUnits.Mobile}`;
	/** End Title Border Radius */

	/** Start Author Margin */
	const authorMarginUnitsChange = (event, position) => {
		const value = event.target.value;
		if (authorMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						authorDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						authorTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						authorMobileMargin: {
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
					setAttributes({ authorDesktopMargin: { ...authorDesktopMargin, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ authorTabMargin: { ...authorTabMargin, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ authorMobileMargin: { ...authorMobileMargin, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const authorMarginLinkBtn = () => {
		setAttributes({
			authorMarginLink: !authorMarginLink
		});
	};

	const authorMarginUnitsHandler = (unit) => {
		setAttributes({
			authorMarginUnits: {
				...authorMarginUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default margin for Author */
	const authorDesktopMarginWidth = `${authorDesktopMargin.top}${authorMarginUnits.Desktop} ${authorDesktopMargin.right}${authorMarginUnits.Desktop} ${authorDesktopMargin.bottom}${authorMarginUnits.Desktop} ${authorDesktopMargin.left}${authorMarginUnits.Desktop}`;
	const authorTabletMarginWidth = `${authorTabMargin.top}${authorMarginUnits.Tablet} ${authorTabMargin.right}${authorMarginUnits.Tablet} ${authorTabMargin.bottom}${authorMarginUnits.Tablet} ${authorTabMargin.left}${authorMarginUnits.Tablet}`;
	const authorMobileMarginWidth = `${authorMobileMargin.top}${authorMarginUnits.Mobile} ${authorMobileMargin.right}${authorMarginUnits.Mobile} ${authorMobileMargin.bottom}${authorMarginUnits.Mobile} ${authorMobileMargin.left}${authorMarginUnits.Mobile}`;
	/** End Author Margin */

	/** Start Author Padding */
	const authorPaddingUnitsChange = (event, position) => {
		const value = event.target.value;
		if (authorPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						authorDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						authorTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						authorMobilePadding: {
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
					setAttributes({ authorDesktopPadding: { ...authorDesktopPadding, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ authorTabPadding: { ...authorTabPadding, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ authorMobilePadding: { ...authorMobilePadding, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const authorPaddingLinkBtn = () => {
		setAttributes({
			authorPaddingLink: !authorPaddingLink
		});
	};

	const authorPaddingUnitsHandler = (unit) => {
		setAttributes({
			authorPaddingUnits: {
				...authorPaddingUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default padding for Author */
	const authorDesktopPaddingWidth = `${authorDesktopPadding.top}${authorPaddingUnits.Desktop} ${authorDesktopPadding.right}${authorPaddingUnits.Desktop} ${authorDesktopPadding.bottom}${authorPaddingUnits.Desktop} ${authorDesktopPadding.left}${authorPaddingUnits.Desktop}`;
	const authorTabletPaddingWidth = `${authorTabPadding.top}${authorPaddingUnits.Tablet} ${authorTabPadding.right}${authorPaddingUnits.Tablet} ${authorTabPadding.bottom}${authorPaddingUnits.Tablet} ${authorTabPadding.left}${authorPaddingUnits.Tablet}`;
	const authorMobilePaddingWidth = `${authorMobilePadding.top}${authorPaddingUnits.Mobile} ${authorMobilePadding.right}${authorPaddingUnits.Mobile} ${authorMobilePadding.bottom}${authorPaddingUnits.Mobile} ${authorMobilePadding.left}${authorPaddingUnits.Mobile}`;
	/** End Author Padding */

	/** Start Author Border */
	const authorBorderUnitsChange = (event, position) => {
		const value = event.target.value;
		if (authorBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						authorDesktopBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						authorTabBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						authorMobileBorder: {
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
					setAttributes({ authorDesktopBorder: { ...authorDesktopBorder, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ authorTabBorder: { ...authorTabBorder, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ authorMobileBorder: { ...authorMobileBorder, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const authorBorderLinkBtn = () => {
		setAttributes({
			authorBorderLink: !authorBorderLink
		});
	};

	const authorBorderUnitsHandler = (unit) => {
		setAttributes({
			authorBorderUnits: {
				...authorBorderUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default border for Author */
	const authorDesktopBorderWidth = `${authorDesktopBorder.top}${authorBorderUnits.Desktop} ${authorDesktopBorder.right}${authorBorderUnits.Desktop} ${authorDesktopBorder.bottom}${authorBorderUnits.Desktop} ${authorDesktopBorder.left}${authorBorderUnits.Desktop}`;
	const authorTabletBorderWidth = `${authorTabBorder.top}${authorBorderUnits.Tablet} ${authorTabBorder.right}${authorBorderUnits.Tablet} ${authorTabBorder.bottom}${authorBorderUnits.Tablet} ${authorTabBorder.left}${authorBorderUnits.Tablet}`;
	const authorMobileBorderWidth = `${authorMobileBorder.top}${authorBorderUnits.Mobile} ${authorMobileBorder.right}${authorBorderUnits.Mobile} ${authorMobileBorder.bottom}${authorBorderUnits.Mobile} ${authorMobileBorder.left}${authorBorderUnits.Mobile}`;
	/** End Author Border */

	/** Start Author Border Radius */
	const authorBorderRadiusUnitsChange = (event, position) => {
		const value = event.target.value;
		if (authorBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						authorDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						authorTabBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						authorMobileBorderRadius: {
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
					setAttributes({ authorDesktopBorderRadius: { ...authorDesktopBorderRadius, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ authorTabBorderRadius: { ...authorTabBorderRadius, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ authorMobileBorderRadius: { ...authorMobileBorderRadius, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const authorBorderRadiusLinkBtn = () => {
		setAttributes({
			authorBorderRadiusLink: !authorBorderRadiusLink
		});
	};

	const authorBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			authorBorderRadiusUnits: {
				...authorBorderRadiusUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default border radius for Author */
	const authorDesktopBorderRadiusWidth = `${authorDesktopBorderRadius.top}${authorBorderRadiusUnits.Desktop} ${authorDesktopBorderRadius.right}${authorBorderRadiusUnits.Desktop} ${authorDesktopBorderRadius.bottom}${authorBorderRadiusUnits.Desktop} ${authorDesktopBorderRadius.left}${authorBorderRadiusUnits.Desktop}`;
	const authorTabletBorderRadiusWidth = `${authorTabBorderRadius.top}${authorBorderRadiusUnits.Tablet} ${authorTabBorderRadius.right}${authorBorderRadiusUnits.Tablet} ${authorTabBorderRadius.bottom}${authorBorderRadiusUnits.Tablet} ${authorTabBorderRadius.left}${authorBorderRadiusUnits.Tablet}`;
	const authorMobileBorderRadiusWidth = `${authorMobileBorderRadius.top}${authorBorderRadiusUnits.Mobile} ${authorMobileBorderRadius.right}${authorBorderRadiusUnits.Mobile} ${authorMobileBorderRadius.bottom}${authorBorderRadiusUnits.Mobile} ${authorMobileBorderRadius.left}${authorBorderRadiusUnits.Mobile}`;
	/** End Author Border Radius */

	/** Start Date Margin */
	const dateMarginUnitsChange = (event, position) => {
		const value = event.target.value;
		if (dateMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						dateDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						dateTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						dateMobileMargin: {
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
					setAttributes({ dateDesktopMargin: { ...dateDesktopMargin, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ dateTabMargin: { ...dateTabMargin, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ dateMobileMargin: { ...dateMobileMargin, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const dateMarginLinkBtn = () => {
		setAttributes({
			dateMarginLink: !dateMarginLink
		});
	};

	const dateMarginUnitsHandler = (unit) => {
		setAttributes({
			dateMarginUnits: {
				...dateMarginUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default margin for Date */
	const dateDesktopMarginWidth = `${dateDesktopMargin.top}${dateMarginUnits.Desktop} ${dateDesktopMargin.right}${dateMarginUnits.Desktop} ${dateDesktopMargin.bottom}${dateMarginUnits.Desktop} ${dateDesktopMargin.left}${dateMarginUnits.Desktop}`;
	const dateTabletMarginWidth = `${dateTabMargin.top}${dateMarginUnits.Tablet} ${dateTabMargin.right}${dateMarginUnits.Tablet} ${dateTabMargin.bottom}${dateMarginUnits.Tablet} ${dateTabMargin.left}${dateMarginUnits.Tablet}`;
	const dateMobileMarginWidth = `${dateMobileMargin.top}${dateMarginUnits.Mobile} ${dateMobileMargin.right}${dateMarginUnits.Mobile} ${dateMobileMargin.bottom}${dateMarginUnits.Mobile} ${dateMobileMargin.left}${dateMarginUnits.Mobile}`;
	/** End Date Margin */

	/** Start Date Padding */
	const datePaddingUnitsChange = (event, position) => {
		const value = event.target.value;
		if (datePaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						dateDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						dateTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						dateMobilePadding: {
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
					setAttributes({ dateDesktopPadding: { ...dateDesktopPadding, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ dateTabPadding: { ...dateTabPadding, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ dateMobilePadding: { ...dateMobilePadding, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const datePaddingLinkBtn = () => {
		setAttributes({
			datePaddingLink: !datePaddingLink
		});
	};

	const datePaddingUnitsHandler = (unit) => {
		setAttributes({
			datePaddingUnits: {
				...datePaddingUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default padding for Date */
	const dateDesktopPaddingWidth = `${dateDesktopPadding.top}${datePaddingUnits.Desktop} ${dateDesktopPadding.right}${datePaddingUnits.Desktop} ${dateDesktopPadding.bottom}${datePaddingUnits.Desktop} ${dateDesktopPadding.left}${datePaddingUnits.Desktop}`;
	const dateTabletPaddingWidth = `${dateTabPadding.top}${datePaddingUnits.Tablet} ${dateTabPadding.right}${datePaddingUnits.Tablet} ${dateTabPadding.bottom}${datePaddingUnits.Tablet} ${dateTabPadding.left}${datePaddingUnits.Tablet}`;
	const dateMobilePaddingWidth = `${dateMobilePadding.top}${datePaddingUnits.Mobile} ${dateMobilePadding.right}${datePaddingUnits.Mobile} ${dateMobilePadding.bottom}${datePaddingUnits.Mobile} ${dateMobilePadding.left}${datePaddingUnits.Mobile}`;
	/** End Date Padding */

	/** Start Date Border */
	const dateBorderUnitsChange = (event, position) => {
		const value = event.target.value;
		if (dateBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						dateDesktopBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						dateTabBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						dateMobileBorder: {
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
					setAttributes({ dateDesktopBorder: { ...dateDesktopBorder, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ dateTabBorder: { ...dateTabBorder, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ dateMobileBorder: { ...dateMobileBorder, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const dateBorderLinkBtn = () => {
		setAttributes({
			dateBorderLink: !dateBorderLink
		});
	};

	const dateBorderUnitsHandler = (unit) => {
		setAttributes({
			dateBorderUnits: {
				...dateBorderUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default border for Date */
	const dateDesktopBorderWidth = `${dateDesktopBorder.top}${dateBorderUnits.Desktop} ${dateDesktopBorder.right}${dateBorderUnits.Desktop} ${dateDesktopBorder.bottom}${dateBorderUnits.Desktop} ${dateDesktopBorder.left}${dateBorderUnits.Desktop}`;
	const dateTabletBorderWidth = `${dateTabBorder.top}${dateBorderUnits.Tablet} ${dateTabBorder.right}${dateBorderUnits.Tablet} ${dateTabBorder.bottom}${dateBorderUnits.Tablet} ${dateTabBorder.left}${dateBorderUnits.Tablet}`;
	const dateMobileBorderWidth = `${dateMobileBorder.top}${dateBorderUnits.Mobile} ${dateMobileBorder.right}${dateBorderUnits.Mobile} ${dateMobileBorder.bottom}${dateBorderUnits.Mobile} ${dateMobileBorder.left}${dateBorderUnits.Mobile}`;
	/** End Date Border */

	/** Start Date Border Radius */
	const dateBorderRadiusUnitsChange = (event, position) => {
		const value = event.target.value;
		if (dateBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						dateDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						dateTabBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						dateMobileBorderRadius: {
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
					setAttributes({ dateDesktopBorderRadius: { ...dateDesktopBorderRadius, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ dateTabBorderRadius: { ...dateTabBorderRadius, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ dateMobileBorderRadius: { ...dateMobileBorderRadius, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const dateBorderRadiusLinkBtn = () => {
		setAttributes({
			dateBorderRadiusLink: !dateBorderRadiusLink
		});
	};

	const dateBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			dateBorderRadiusUnits: {
				...dateBorderRadiusUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default border radius for Date */
	const dateDesktopBorderRadiusWidth = `${dateDesktopBorderRadius.top}${dateBorderRadiusUnits.Desktop} ${dateDesktopBorderRadius.right}${dateBorderRadiusUnits.Desktop} ${dateDesktopBorderRadius.bottom}${dateBorderRadiusUnits.Desktop} ${dateDesktopBorderRadius.left}${dateBorderRadiusUnits.Desktop}`;
	const dateTabletBorderRadiusWidth = `${dateTabBorderRadius.top}${dateBorderRadiusUnits.Tablet} ${dateTabBorderRadius.right}${dateBorderRadiusUnits.Tablet} ${dateTabBorderRadius.bottom}${dateBorderRadiusUnits.Tablet} ${dateTabBorderRadius.left}${dateBorderRadiusUnits.Tablet}`;
	const dateMobileBorderRadiusWidth = `${dateMobileBorderRadius.top}${dateBorderRadiusUnits.Mobile} ${dateMobileBorderRadius.right}${dateBorderRadiusUnits.Mobile} ${dateMobileBorderRadius.bottom}${dateBorderRadiusUnits.Mobile} ${dateMobileBorderRadius.left}${dateBorderRadiusUnits.Mobile}`;
	/** End Date Border Radius */

	const postBannerStyle = useMemo(() => `
		.${blockID} .fb-post-banner-container .fb-post-category{
			${categoryDesktopMarginWidth && categoryDesktopMargin?.top ? `margin: ${categoryDesktopMarginWidth};` : ''}
			${categoryDesktopPaddingWidth && categoryDesktopPadding?.top ? `padding: ${categoryDesktopPaddingWidth};` : ''}
		}
		.${blockID} .fb-post-banner-container .fb-post-category .fb-post-category-name {			
			${categoryGlobalTypoSwitcher.fontFamily === true && categoryGlobalTypographyData.fontFamily ? `font-family: ${categoryGlobalTypographyData.fontFamily};` : ''}
			${categoryGlobalTypoSwitcher.fontSize === true && categoryGlobalTypographyData.fontSize ? `font-size: ${categoryGlobalTypographyData.fontSize};` : ''}
			${categoryGlobalTypoSwitcher.fontWeight === true && categoryGlobalTypographyData.fontWeight ? `font-weight: ${categoryGlobalTypographyData.fontWeight};` : ''}
			${categoryGlobalTypoSwitcher.fontStyle === true && categoryGlobalTypographyData.fontStyle ? `font-style: ${categoryGlobalTypographyData.fontStyle};` : ''}
			${categoryGlobalTypoSwitcher.textTransform === true && categoryGlobalTypographyData.textTransform ? `text-transform: ${categoryGlobalTypographyData.textTransform};` : ''}
			${categoryGlobalTypoSwitcher.textDecoration === true && categoryGlobalTypographyData.textDecoration ? `text-decoration: ${categoryGlobalTypographyData.textDecoration};` : ''}
			${categoryGlobalTypoSwitcher.letterSpacing === true && categoryGlobalTypographyData.letterSpacing ? `letter-spacing: ${categoryGlobalTypographyData.letterSpacing};` : ''}
			${categoryGlobalTypoSwitcher.lineHeight === true && categoryGlobalTypographyData.lineHeight ? `line-height: ${categoryGlobalTypographyData.lineHeight};` : ''}

			${categoryGlobalTypoSwitcher.fontFamily === false && categoryFontFamily && categoryFontFamily !== 'Default' ? `font-family: ${categoryFontFamily};` : ''}
			${categoryGlobalTypoSwitcher.fontSize === false && categoryFontSize.Desktop && categoryFontSizeUnits.Desktop ? `font-size: ${categoryFontSize.Desktop}${categoryFontSizeUnits.Desktop};` : ''}
			${categoryGlobalTypoSwitcher.fontWeight === false && categoryFontWeight ? `font-weight: ${categoryFontWeight};` : ''}
			${categoryGlobalTypoSwitcher.fontStyle === false && categoryFontStyle ? `font-style: ${categoryFontStyle};` : ''}
			${categoryGlobalTypoSwitcher.textTransform === false && categoryTextTransform ? `text-transform: ${categoryTextTransform};` : ''}
			${categoryGlobalTypoSwitcher.textDecoration === false && categoryTextDecoration ? `text-decoration: ${categoryTextDecoration};` : ''}
			${categoryGlobalTypoSwitcher.letterSpacing === false && categoryLetterSpacing.Desktop && categoryLetterSpacingUnits.Desktop ? `letter-spacing: ${categoryLetterSpacing.Desktop}${categoryLetterSpacingUnits.Desktop};` : ''}
			${categoryGlobalTypoSwitcher.lineHeight === false && categoryLineHeight.Desktop && categoryLineHeightUnits.Desktop ? `line-height: ${categoryLineHeight.Desktop}${categoryLineHeightUnits.Desktop};` : ''}

			${categoryBgColor ? `background-color: ${categoryBgColor};` : ''}
			${categoryColor ? `color: ${categoryColor};` : ''}
			${categoryBorder ? `border: ${categoryBorder};` : ''}
			${categoryBorderColor ? `border-color: ${categoryBorderColor};` : ''}
			${categoryDesktopBorderWidth && categoryDesktopBorder?.top ? `border-width: ${categoryDesktopBorderWidth};` : ''}
			${categoryDesktopBorderRadiusWidth && categoryDesktopBorderRadius?.top ? `border-radius: ${categoryDesktopBorderRadiusWidth};` : ''}
			transition: all .3s ease-in-out;
		}
		.${blockID} .fb-post-banner-container .fb-post-category .fb-post-category-name:hover{
			${categoryBgColorHover ? `background-color: ${categoryBgColorHover};` : ''}
			${categoryHoverColor ? `color: ${categoryHoverColor};` : ''}
			${categoryBorderHoverColor ? `border-color: ${categoryBorderHoverColor};` : ''}
		}

		.${blockID} .fb-post-banner-container .fb-post-title .fb-post-title-name{
			${titleGlobalTypoSwitcher.fontFamily === true && titleGlobalTypographyData.fontFamily ? `font-family: ${titleGlobalTypographyData.fontFamily};` : ''}
			${titleGlobalTypoSwitcher.fontSize === true && titleGlobalTypographyData.fontSize ? `font-size: ${titleGlobalTypographyData.fontSize};` : ''}
			${titleGlobalTypoSwitcher.fontWeight === true && titleGlobalTypographyData.fontWeight ? `font-weight: ${titleGlobalTypographyData.fontWeight};` : ''}
			${titleGlobalTypoSwitcher.fontStyle === true && titleGlobalTypographyData.fontStyle ? `font-style: ${titleGlobalTypographyData.fontStyle};` : ''}
			${titleGlobalTypoSwitcher.textTransform === true && titleGlobalTypographyData.textTransform ? `text-transform: ${titleGlobalTypographyData.textTransform};` : ''}
			${titleGlobalTypoSwitcher.textDecoration === true && titleGlobalTypographyData.textDecoration ? `text-decoration: ${titleGlobalTypographyData.textDecoration};` : ''}
			${titleGlobalTypoSwitcher.letterSpacing === true && titleGlobalTypographyData.letterSpacing ? `letter-spacing: ${titleGlobalTypographyData.letterSpacing};` : ''}
			${titleGlobalTypoSwitcher.lineHeight === true && titleGlobalTypographyData.lineHeight ? `line-height: ${titleGlobalTypographyData.lineHeight};` : ''}

			${titleGlobalTypoSwitcher.fontFamily === false && titleFontFamily && titleFontFamily !== 'Default' ? `font-family: ${titleFontFamily};` : ''}
			${titleGlobalTypoSwitcher.fontSize === false && titleFontSize.Desktop && titleFontSizeUnits.Desktop ? `font-size: ${titleFontSize.Desktop}${titleFontSizeUnits.Desktop};` : ''}
			${titleGlobalTypoSwitcher.fontWeight === false && titleFontWeight ? `font-weight: ${titleFontWeight};` : ''}
			${titleGlobalTypoSwitcher.fontStyle === false && titleFontStyle ? `font-style: ${titleFontStyle};` : ''}
			${titleGlobalTypoSwitcher.textTransform === false && titleTextTransform ? `text-transform: ${titleTextTransform};` : ''}
			${titleGlobalTypoSwitcher.textDecoration === false && titleTextDecoration ? `text-decoration: ${titleTextDecoration};` : ''}
			${titleGlobalTypoSwitcher.letterSpacing === false && titleLetterSpacing.Desktop && titleLetterSpacingUnits.Desktop ? `letter-spacing: ${titleLetterSpacing.Desktop}${titleLetterSpacingUnits.Desktop};` : ''}
			${titleGlobalTypoSwitcher.lineHeight === false && titleLineHeight.Desktop && titleLineHeightUnits.Desktop ? `line-height: ${titleLineHeight.Desktop}${titleLineHeightUnits.Desktop};` : ''}

			${titleBgColor ? `background-color: ${titleBgColor};` : ''}
			${titleColor ? `color: ${titleColor};` : ''}
			${titleBorderColor ? `border-color: ${titleBorderColor};` : ''}
			${titleBorder ? `border: ${titleBorder};` : ''}
			${titleDesktopMarginWidth && titleDesktopMargin?.top ? `margin: ${titleDesktopMarginWidth};` : ''}
			${titleDesktopPaddingWidth && titleDesktopPadding?.top ? `padding: ${titleDesktopPaddingWidth};` : ''}
			${titleDesktopBorderWidth && titleDesktopBorder?.top ? `border-width: ${titleDesktopBorderWidth};` : ''}
			${titleDesktopBorderRadiusWidth && titleDesktopBorderRadius?.top ? `border-radius: ${titleDesktopBorderRadiusWidth};` : ''}
		}
		.${blockID} .fb-post-banner-container .fb-post-title .fb-post-title-name:hover{
			${titleBgColorHover ? `background-color: ${titleBgColorHover};` : ''}
			${titleHoverColor ? `color: ${titleHoverColor};` : ''}
		}
		.${blockID} .fb-post-banner-container .fb-post-author .fb-post-author-info .fb-post-author-name{
			${authorGlobalTypoSwitcher.fontFamily === true && authorGlobalTypographyData.fontFamily ? `font-family: ${authorGlobalTypographyData.fontFamily};` : ''}
			${authorGlobalTypoSwitcher.fontSize === true && authorGlobalTypographyData.fontSize ? `font-size: ${authorGlobalTypographyData.fontSize};` : ''}
			${authorGlobalTypoSwitcher.fontWeight === true && authorGlobalTypographyData.fontWeight ? `font-weight: ${authorGlobalTypographyData.fontWeight};` : ''}
			${authorGlobalTypoSwitcher.fontStyle === true && authorGlobalTypographyData.fontStyle ? `font-style: ${authorGlobalTypographyData.fontStyle};` : ''}
			${authorGlobalTypoSwitcher.textTransform === true && authorGlobalTypographyData.textTransform ? `text-transform: ${authorGlobalTypographyData.textTransform};` : ''}
			${authorGlobalTypoSwitcher.textDecoration === true && authorGlobalTypographyData.textDecoration ? `text-decoration: ${authorGlobalTypographyData.textDecoration};` : ''}
			${authorGlobalTypoSwitcher.letterSpacing === true && authorGlobalTypographyData.letterSpacing ? `letter-spacing: ${authorGlobalTypographyData.letterSpacing};` : ''}
			${authorGlobalTypoSwitcher.lineHeight === true && authorGlobalTypographyData.lineHeight ? `line-height: ${authorGlobalTypographyData.lineHeight};` : ''}

			${authorGlobalTypoSwitcher.fontFamily === false && authorFontFamily && authorFontFamily !== 'Default' ? `font-family: ${authorFontFamily};` : ''}
			${authorGlobalTypoSwitcher.fontSize === false && authorFontSize.Desktop && authorFontSizeUnits.Desktop ? `font-size: ${authorFontSize.Desktop}${authorFontSizeUnits.Desktop};` : ''}
			${authorGlobalTypoSwitcher.fontWeight === false && authorFontWeight ? `font-weight: ${authorFontWeight};` : ''}
			${authorGlobalTypoSwitcher.fontStyle === false && authorFontStyle ? `font-style: ${authorFontStyle};` : ''}
			${authorGlobalTypoSwitcher.textTransform === false && authorTextTransform ? `text-transform: ${authorTextTransform};` : ''}
			${authorGlobalTypoSwitcher.textDecoration === false && authorTextDecoration ? `text-decoration: ${authorTextDecoration};` : ''}
			${authorGlobalTypoSwitcher.letterSpacing === false && authorLetterSpacing.Desktop && authorLetterSpacingUnits.Desktop ? `letter-spacing: ${authorLetterSpacing.Desktop}${authorLetterSpacingUnits.Desktop};` : ''}
			${authorGlobalTypoSwitcher.lineHeight === false && authorLineHeight.Desktop && authorLineHeightUnits.Desktop ? `line-height: ${authorLineHeight.Desktop}${authorLineHeightUnits.Desktop};` : ''}

			${authorBgColor ? `background-color: ${authorBgColor};` : ''}
			${authorColor ? `color: ${authorColor};` : ''}
			${authorBorder ? `border: ${authorBorder};` : ''}
			${authorBorderColor ? `border-color: ${authorBorderColor};` : ''}
			${authorDesktopMarginWidth && authorDesktopMargin?.top ? `margin: ${authorDesktopMarginWidth};` : ''}
			${authorDesktopPaddingWidth && authorDesktopPadding?.top ? `padding: ${authorDesktopPaddingWidth};` : ''}
			${authorDesktopBorderWidth && authorDesktopBorder?.top ? `border-width: ${authorDesktopBorderWidth};` : ''}
			${authorDesktopBorderRadiusWidth && authorDesktopBorderRadius?.top ? `border-radius: ${authorDesktopBorderRadiusWidth};` : ''}
		}
		.${blockID} .fb-post-banner-container .fb-post-author .fb-post-author-info .fb-post-author-name:hover{
			${authorBgColorHover ? `background-color: ${authorBgColorHover};` : ''}
			${authorHoverColor ? `color: ${authorHoverColor};` : ''}
			${authorBorderHoverColor ? `border-color: ${authorBorderHoverColor};` : ''}
		}
		.${blockID} .fb-post-banner-container .fb-post-author-meta .fb-post-date{
			${dateGlobalTypoSwitcher.fontFamily === true && dateGlobalTypographyData.fontFamily ? `font-family: ${dateGlobalTypographyData.fontFamily};` : ''}
			${dateGlobalTypoSwitcher.fontSize === true && dateGlobalTypographyData.fontSize ? `font-size: ${dateGlobalTypographyData.fontSize};` : ''}
			${dateGlobalTypoSwitcher.fontWeight === true && dateGlobalTypographyData.fontWeight ? `font-weight: ${dateGlobalTypographyData.fontWeight};` : ''}
			${dateGlobalTypoSwitcher.fontStyle === true && dateGlobalTypographyData.fontStyle ? `font-style: ${dateGlobalTypographyData.fontStyle};` : ''}
			${dateGlobalTypoSwitcher.textTransform === true && dateGlobalTypographyData.textTransform ? `text-transform: ${dateGlobalTypographyData.textTransform};` : ''}
			${dateGlobalTypoSwitcher.textDecoration === true && dateGlobalTypographyData.textDecoration ? `text-decoration: ${dateGlobalTypographyData.textDecoration};` : ''}
			${dateGlobalTypoSwitcher.letterSpacing === true && dateGlobalTypographyData.letterSpacing ? `letter-spacing: ${dateGlobalTypographyData.letterSpacing};` : ''}
			${dateGlobalTypoSwitcher.lineHeight === true && dateGlobalTypographyData.lineHeight ? `line-height: ${dateGlobalTypographyData.lineHeight};` : ''}

			${dateGlobalTypoSwitcher.fontFamily === false && dateFontFamily && dateFontFamily !== 'Default' ? `font-family: ${dateFontFamily};` : ''}
			${dateGlobalTypoSwitcher.fontSize === false && dateFontSize.Desktop && dateFontSizeUnits.Desktop ? `font-size: ${dateFontSize.Desktop}${dateFontSizeUnits.Desktop};` : ''}
			${dateGlobalTypoSwitcher.fontWeight === false && dateFontWeight ? `font-weight: ${dateFontWeight};` : ''}
			${dateGlobalTypoSwitcher.fontStyle === false && dateFontStyle ? `font-style: ${dateFontStyle};` : ''}
			${dateGlobalTypoSwitcher.textTransform === false && dateTextTransform ? `text-transform: ${dateTextTransform};` : ''}
			${dateGlobalTypoSwitcher.textDecoration === false && dateTextDecoration ? `text-decoration: ${dateTextDecoration};` : ''}
			${dateGlobalTypoSwitcher.letterSpacing === false && dateLetterSpacing.Desktop && dateLetterSpacingUnits.Desktop ? `letter-spacing: ${dateLetterSpacing.Desktop}${dateLetterSpacingUnits.Desktop};` : ''}
			${dateGlobalTypoSwitcher.lineHeight === false && dateLineHeight.Desktop && dateLineHeightUnits.Desktop ? `line-height: ${dateLineHeight.Desktop}${dateLineHeightUnits.Desktop};` : ''}

			${dateBgColor ? `background-color: ${dateBgColor};` : ''}
			${dateColor ? `color: ${dateColor};` : ''}
			${dateBorder ? `border: ${dateBorder};` : ''}
			${dateBorderColor ? `border-color: ${dateBorderColor};` : ''}
			${dateDesktopMarginWidth && dateDesktopMargin?.top ? `margin: ${dateDesktopMarginWidth};` : ''}
			${dateDesktopPaddingWidth && dateDesktopPadding?.top ? `padding: ${dateDesktopPaddingWidth};` : ''}
			${dateDesktopBorderWidth && dateDesktopBorder?.top ? `border-width: ${dateDesktopBorderWidth};` : ''}
			${dateDesktopBorderRadiusWidth && dateDesktopBorderRadius?.top ? `border-radius: ${dateDesktopBorderRadiusWidth};` : ''}
		}
		.${blockID} .fb-post-banner-container .fb-post-author-meta .fb-post-date:hover{
			${dateBgColorHover ? `background-color: ${dateBgColorHover};` : ''}
			${dateHoverColor ? `color: ${dateHoverColor};` : ''}
			${dateBorderHoverColor ? `border-color: ${dateBorderHoverColor};` : ''}
		}
		@media only screen and (max-width: 1024px) {
			.${blockID} .fb-post-banner-container .fb-post-category .fb-post-category-name {
				${categoryTabletMarginWidth && categoryTabMargin?.top ? `margin: ${categoryTabletMarginWidth};` : ''}
				${categoryTabletPaddingWidth && categoryTabPadding?.top ? `padding: ${categoryTabletPaddingWidth};` : ''}
				${categoryTabletBorderWidth && categoryTabBorder?.top ? `border-width: ${categoryTabletBorderWidth};` : ''}
				${categoryTabletBorderRadiusWidth && categoryTabBorderRadius?.top ? `border-radius: ${categoryTabletBorderRadiusWidth};` : ''}
			}
			.${blockID} .fb-post-banner-container .fb-post-title .fb-post-title-name{
				${titleTabletMarginWidth && titleTabMargin?.top ? `margin: ${titleTabletMarginWidth};` : ''}
				${titleTabletPaddingWidth && titleTabPadding?.top ? `padding: ${titleTabletPaddingWidth};` : ''}
				${titleTabletBorderWidth && titleTabBorder?.top ? `border-width: ${titleTabletBorderWidth};` : ''}
				${titleTabletBorderRadiusWidth && titleTabBorderRadius?.top ? `border-radius: ${titleTabletBorderRadiusWidth};` : ''}
			}
			.${blockID} .fb-post-banner-container .fb-post-author .fb-post-author-info .fb-post-author-name{
				${authorTabletMarginWidth && authorTabMargin?.top ? `margin: ${authorTabletMarginWidth};` : ''}
				${authorTabletPaddingWidth && authorTabPadding?.top ? `padding: ${authorTabletPaddingWidth};` : ''}
				${authorTabletBorderWidth && authorTabBorder?.top ? `border-width: ${authorTabletBorderWidth};` : ''}
				${authorTabletBorderRadiusWidth && authorTabBorderRadius?.top ? `border-radius: ${authorTabletBorderRadiusWidth};` : ''}
			}
		}
		@media only screen and (max-width: 767px) {
			.${blockID} .fb-post-banner-container .fb-post-category .fb-post-category-name {
				${categoryMobileMarginWidth && categoryMobileMargin?.top ? `margin: ${categoryMobileMarginWidth};` : ''}
				${categoryMobilePaddingWidth && categoryMobilePadding?.top ? `padding: ${categoryMobilePaddingWidth};` : ''}
				${categoryMobileBorderWidth && categoryMobileBorder?.top ? `border-width: ${categoryMobileBorderWidth};` : ''}
				${categoryMobileBorderRadiusWidth && categoryMobileBorderRadius?.top ? `border-radius: ${categoryMobileBorderRadiusWidth};` : ''}
			}
			.${blockID} .fb-post-banner-container .fb-post-title .fb-post-title-name{
				${titleMobileMarginWidth && titleMobileMargin?.top ? `margin: ${titleMobileMarginWidth};` : ''}
				${titleMobilePaddingWidth && titleMobilePadding?.top ? `padding: ${titleMobilePaddingWidth};` : ''}
				${titleMobileBorderWidth && titleMobileBorder?.top ? `border-width: ${titleMobileBorderWidth};` : ''}
				${titleMobileBorderRadiusWidth && titleMobileBorderRadius?.top ? `border-radius: ${titleMobileBorderRadiusWidth};` : ''}
			}
			.${blockID} .fb-post-banner-container .fb-post-author .fb-post-author-info .fb-post-author-name{
				${authorMobileMarginWidth && authorMobileMargin?.top ? `margin: ${authorMobileMarginWidth};` : ''}
				${authorMobilePaddingWidth && authorMobilePadding?.top ? `padding: ${authorMobilePaddingWidth};` : ''}
				${authorMobileBorderWidth && authorMobileBorder?.top ? `border-width: ${authorMobileBorderWidth};` : ''}
				${authorMobileBorderRadiusWidth && authorMobileBorderRadius?.top ? `border-radius: ${authorMobileBorderRadiusWidth};` : ''}
			}
		}
	`, [
		categoryGlobalTypographyData,
		categoryGlobalTypoSwitcher,
		categoryGlobalTypoType,
		categoryGlobalTypoOption,
		categoryFontFamily,
		categoryFontSize,
		categoryFontSizeUnits,
		categoryFontWeight,
		categoryFontStyle,
		categoryTextTransform,
		categoryTextDecoration,
		categoryLetterSpacing,
		categoryLetterSpacingUnits,
		categoryLineHeight,
		categoryLineHeightUnits,
		categoryBgColor,
		categoryBgColorHover,
		categoryColorSwitcher,
		categoryColor,
		categoryHoverColor,
		categoryDesktopMarginWidth,
		categoryTabletMarginWidth,
		categoryMobileMarginWidth,
		categoryDesktopPaddingWidth,
		categoryTabletPaddingWidth,
		categoryMobilePaddingWidth,
		categoryBorderColor,
		categoryBorderHoverColor,
		categoryDesktopBorderWidth,
		categoryTabletBorderWidth,
		categoryMobileBorderWidth,
		categoryDesktopBorderRadiusWidth,
		categoryTabletBorderRadiusWidth,
		categoryMobileBorderRadiusWidth,
		titleGlobalTypographyData,
		titleGlobalTypoSwitcher,
		titleGlobalTypoType,
		titleGlobalTypoOption,
		titleFontFamily,
		titleFontSize,
		titleFontSizeUnits,
		titleFontWeight,
		titleFontStyle,
		titleTextTransform,
		titleTextDecoration,
		titleLetterSpacing,
		titleLetterSpacingUnits,
		titleLineHeight,
		titleLineHeightUnits,
		titleColor,
		titleBgColor,
		titleBgColorSwitcher,
		titleBgColorHover,
		titleColorSwitcher,
		titleHoverColor,
		titleMarginUnits,
		titleDesktopMargin,
		titleTabMargin,
		titleMobileMargin,
		titleMarginLink,
		titlePaddingUnits,
		titleDesktopPadding,
		titleTabPadding,
		titleMobilePadding,
		titlePaddingLink,
		titleBorder,
		titleBorderColorSwitcher,
		titleBorderColor,
		titleBorderHoverColor,
		titleBorderUnits,
		titleDesktopBorder,
		titleTabBorder,
		titleMobileBorder,
		titleBorderLink,
		titleBorderRadiusUnits,
		titleDesktopBorderRadius,
		titleTabBorderRadius,
		titleMobileBorderRadius,
		titleBorderRadiusLink,
		authorGlobalTypographyData,
		authorGlobalTypoSwitcher,
		authorGlobalTypoType,
		authorGlobalTypoOption,
		authorFontFamily,
		authorFontSize,
		authorFontSizeUnits,
		authorFontWeight,
		authorFontStyle,
		authorTextTransform,
		authorTextDecoration,
		authorLetterSpacing,
		authorLetterSpacingUnits,
		authorLineHeight,
		authorLineHeightUnits,
		authorBgColorSwitcher,
		authorBgColor,
		authorBgColorHover,
		authorColorSwitcher,
		authorColor,
		authorHoverColor,
		authorMarginUnits,
		authorDesktopMargin,
		authorTabMargin,
		authorMobileMargin,
		authorMarginLink,
		authorPaddingUnits,
		authorDesktopPadding,
		authorTabPadding,
		authorMobilePadding,
		authorPaddingLink,
		authorBorder,
		authorBorderColorSwitcher,
		authorBorderColor,
		authorBorderHoverColor,
		authorBorderUnits,
		authorDesktopBorder,
		authorTabBorder,
		authorMobileBorder,
		authorBorderLink,
		authorBorderRadiusUnits,
		authorDesktopBorderRadius,
		authorTabBorderRadius,
		authorMobileBorderRadius,
		authorBorderRadiusLink,
		dateGlobalTypographyData,
		dateGlobalTypoSwitcher,
		dateGlobalTypoType,
		dateGlobalTypoOption,
		dateFontFamily,
		dateFontSize,
		dateFontSizeUnits,
		dateFontWeight,
		dateFontStyle,
		dateTextTransform,
		dateTextDecoration,
		dateLetterSpacing,
		dateLetterSpacingUnits,
		dateLineHeight,
		dateLineHeightUnits,
		dateColorSwitcher,
		dateColor,
		dateHoverColor,
		dateBgColorSwitcher,
		dateBgColor,
		dateBgColorHover,
		dateMarginUnits,
		dateDesktopMargin,
		dateTabMargin,
		dateMobileMargin,
		dateMarginLink,
		datePaddingUnits,
		dateDesktopPadding,
		dateTabPadding,
		dateMobilePadding,
		datePaddingLink,
		dateBorder,
		dateBorderColorSwitcher,
		dateBorderColor,
		dateBorderHoverColor,
		dateBorderUnits,
		dateDesktopBorder,
		dateTabBorder,
		dateMobileBorder,
		dateBorderLink,
		dateBorderRadiusUnits,
		dateDesktopBorderRadius,
		dateTabBorderRadius,
		dateMobileBorderRadius,
		dateBorderRadiusLink,
	]);

	useEffect(() => {
		setAttributes({ blockStyle: `${postBannerStyle} `.replace(/\s+/g, ' ').trim() });
	}, [postBannerStyle]);

	const editorStyle = `${postBannerStyle}`.replace(/\s+/g, ' ').trim();

	return (
		<>
			<style>
				{editorStyle}
			</style>
			<InspectorControls key="controls">
				<div className="fb-inspector-control">
					<TabPanel
						className="fb-parent-tab-panel"
						activeClass="active-tab"
						tabs={[
							{
								name: "general",
								title: "General",
								className: "fb-tab general",
							},
							{
								name: "styles",
								title: "Style",
								className: "fb-tab styles",
							},
							{
								name: "advanced",
								title: "Advanced",
								className: "fb-tab advance",
							},
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls " + tab.name}>
								{tab.name === 'general' && (
									<>
										<PanelBody title={__("Post Info", "frontis-blocks")} initialOpen={true}>
											<ToggleControl
												label={__("Show Category", "frontis-blocks")}
												checked={categorySwitcher}
												onChange={(value) => setAttributes({ categorySwitcher: value })}
											/>
											<ToggleControl
												label={__("Show Title", "frontis-blocks")}
												checked={titleSwitcher}
												onChange={(value) => setAttributes({ titleSwitcher: value })}
											/>
											<ToggleControl
												label={__("Show Post Meta", "frontis-blocks")}
												checked={postMetaSwitcher}
												onChange={(value) => setAttributes({ postMetaSwitcher: value })}
											/>
										</PanelBody>
									</>
								)}
								{tab.name === "styles" && (
									<>
										<PanelBody title={__("Category", "frontis-blocks")} initialOpen={true}>
											<FB_TypographyControl
												globalTypoControlActive={true}
												globalTypoSwitcher={categoryGlobalTypoSwitcher}
												storeGlobalTypographyData={(value) => setAttributes({ categoryGlobalTypographyData: value })}

												globalTypoType={categoryGlobalTypoType}
												onChangeGlobalTypoType={(value) => {
													setAttributes({
														categoryGlobalTypoType: value,
														categoryGlobalTypoSwitcher: value === 'default'
															? { ...categoryGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false }
															: { ...categoryGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true }
													})
												}}

												globalTypoOption={categoryGlobalTypoOption}
												onChangeGlobalTypoOption={(value) => setAttributes({ categoryGlobalTypoOption: value })}

												fontFamily={categoryFontFamily}
												onChangeFontFamily={(value) => setAttributes({ categoryFontFamily: value, categoryGlobalTypoSwitcher: { ...categoryGlobalTypoSwitcher, fontFamily: value && false } })}

												fontSize={categoryFontSize}
												onChangeFontSize={(value) => setAttributes({ categoryFontSize: value, categoryGlobalTypoSwitcher: { ...categoryGlobalTypoSwitcher, fontSize: value && false } })}

												fontSizeUnits={categoryFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ categoryFontSizeUnits: value })}

												fontWeight={categoryFontWeight}
												onChangeFontWeight={(value) => setAttributes({ categoryFontWeight: value, categoryGlobalTypoSwitcher: { ...categoryGlobalTypoSwitcher, fontWeight: value && false } })}

												fontStyle={categoryFontStyle}
												onChangeFontStyle={(value) => setAttributes({ categoryFontStyle: value, categoryGlobalTypoSwitcher: { ...categoryGlobalTypoSwitcher, fontStyle: value && false } })}

												textTransform={categoryTextTransform}
												onChangeTextTransform={(value) => setAttributes({ categoryTextTransform: value, categoryGlobalTypoSwitcher: { ...categoryGlobalTypoSwitcher, textTransform: value && false } })}

												textDecoration={categoryTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ categoryTextDecoration: value, categoryGlobalTypoSwitcher: { ...categoryGlobalTypoSwitcher, textDecoration: value && false } })}

												letterSpacing={categoryLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ categoryLetterSpacing: value, categoryGlobalTypoSwitcher: { ...categoryGlobalTypoSwitcher, letterSpacing: value && false } })}

												letterSpacingUnits={categoryLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ categoryLetterSpacingUnits: value })}

												lineHeight={categoryLineHeight}
												onChangeLineHeight={(value) => setAttributes({ categoryLineHeight: value, categoryGlobalTypoSwitcher: { ...categoryGlobalTypoSwitcher, lineHeight: value && false } })}

												lineHeightUnits={categoryLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ categoryLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>
											{/* Background Color */}
											<FB_SwitcherControl
												label={__("Background Color", "frontis-blocks")}
												globalSwitcher={categoryBgColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ categoryBgColorSwitcher: value })}
											/>

											{categoryBgColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={categoryBgColor}
													setGlobalColor={(value) => setAttributes({ categoryBgColor: value })}
												/>
											)}

											{categoryBgColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={categoryBgColorHover}
													setGlobalColor={(value) => setAttributes({ categoryBgColorHover: value })}
												/>
											)}
											{/* Text Color */}
											<FB_SwitcherControl
												label={__("Text Color", "frontis-blocks")}
												globalSwitcher={categoryColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ categoryColorSwitcher: value })}
											/>

											{categoryColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={categoryColor}
													setGlobalColor={(value) => setAttributes({ categoryColor: value })}
												/>
											)}

											{categoryColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={categoryHoverColor}
													setGlobalColor={(value) => setAttributes({ categoryHoverColor: value })}
												/>
											)}

											<FB_Spacing
												label={__("Margin", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={categoryMarginUnitsHandler}
												spacingUnits={categoryMarginUnits}
												spacingDesktop={categoryDesktopMargin}
												spacingTablet={categoryTabMargin}
												spacingMobile={categoryMobileMargin}
												handleSpacingUnitHandler={categoryMarginUnitsChange}
												spacingCombineBtn={categoryMarginLink}
												spacingCombineBtnHandler={categoryMarginLinkBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={categoryPaddingUnitsHandler}
												spacingUnits={categoryPaddingUnits}
												spacingDesktop={categoryDesktopPadding}
												spacingTablet={categoryTabPadding}
												spacingMobile={categoryMobilePadding}
												handleSpacingUnitHandler={categoryPaddingUnitsChange}
												spacingCombineBtn={categoryPaddingLink}
												spacingCombineBtnHandler={categoryPaddingLinkBtn}
												setAttributes={setAttributes}
											/>

											<SelectControl
                                                label={__("Border Style", "frontis-blocks")}
                                                value={categoryBorder}
                                                options={BORDER_STYLES}
                                                onChange={(value) => setAttributes({ categoryBorder: value })}
                                            />

                                            <FB_SwitcherControl
                                                label={__("Border Color", "frontis-blocks")}
                                                globalSwitcher={categoryBorderColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ categoryBorderColorSwitcher: value })}
                                            />

                                            {categoryBorderColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={categoryBorderColor}
                                                    setGlobalColor={(value) => setAttributes({ categoryBorderColor: value })}
                                                />
                                            )}

                                            {categoryBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={categoryBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ categoryBorderHoverColor: value })}
                                                />
                                            )}

											<FB_Spacing
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={categoryBorderUnitsHandler}
												spacingUnits={categoryBorderUnits}
												spacingDesktop={categoryDesktopBorder}
												spacingTablet={categoryTabBorder}
												spacingMobile={categoryMobileBorder}
												handleSpacingUnitHandler={categoryBorderUnitsChange}
												spacingCombineBtn={categoryBorderLink}
												spacingCombineBtnHandler={categoryBorderLinkBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={categoryBorderRadiusUnitsHandler}
												spacingUnits={categoryBorderRadiusUnits}
												spacingDesktop={categoryDesktopBorderRadius}
												spacingTablet={categoryTabBorderRadius}
												spacingMobile={categoryMobileBorderRadius}
												handleSpacingUnitHandler={categoryBorderRadiusUnitsChange}
												spacingCombineBtn={categoryBorderRadiusLink}
												spacingCombineBtnHandler={categoryBorderRadiusLinkBtn}
												setAttributes={setAttributes}
											/>
										</PanelBody>

										<PanelBody title={__("Title", "frontis-blocks")} initialOpen={false}>
											<FB_TypographyControl
												globalTypoControlActive={true}
												globalTypoSwitcher={titleGlobalTypoSwitcher}
												storeGlobalTypographyData={(value) => setAttributes({ titleGlobalTypographyData: value })}

												globalTypoType={titleGlobalTypoType}
												onChangeGlobalTypoType={(value) => {
													setAttributes({
														titleGlobalTypoType: value,
														titleGlobalTypoSwitcher: value === 'default'
															? { ...titleGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false }
															: { ...titleGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true }
													})
												}}

												globalTypoOption={titleGlobalTypoOption}
												onChangeGlobalTypoOption={(value) => setAttributes({ titleGlobalTypoOption: value })}

												fontFamily={titleFontFamily}
												onChangeFontFamily={(value) => setAttributes({ titleFontFamily: value, titleGlobalTypoSwitcher: { ...titleGlobalTypoSwitcher, fontFamily: value && false } })}

												fontSize={titleFontSize}
												onChangeFontSize={(value) => setAttributes({ titleFontSize: value, titleGlobalTypoSwitcher: { ...titleGlobalTypoSwitcher, fontSize: value && false } })}

												fontSizeUnits={titleFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ titleFontSizeUnits: value })}

												fontWeight={titleFontWeight}
												onChangeFontWeight={(value) => setAttributes({ titleFontWeight: value, titleGlobalTypoSwitcher: { ...titleGlobalTypoSwitcher, fontWeight: value && false } })}

												fontStyle={titleFontStyle}
												onChangeFontStyle={(value) => setAttributes({ titleFontStyle: value, titleGlobalTypoSwitcher: { ...titleGlobalTypoSwitcher, fontStyle: value && false } })}

												textTransform={titleTextTransform}
												onChangeTextTransform={(value) => setAttributes({ titleTextTransform: value, titleGlobalTypoSwitcher: { ...titleGlobalTypoSwitcher, textTransform: value && false } })}

												textDecoration={titleTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ titleTextDecoration: value, titleGlobalTypoSwitcher: { ...titleGlobalTypoSwitcher, textDecoration: value && false } })}

												letterSpacing={titleLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ titleLetterSpacing: value, titleGlobalTypoSwitcher: { ...titleGlobalTypoSwitcher, letterSpacing: value && false } })}

												letterSpacingUnits={titleLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ titleLetterSpacingUnits: value })}

												lineHeight={titleLineHeight}
												onChangeLineHeight={(value) => setAttributes({ titleLineHeight: value, titleGlobalTypoSwitcher: { ...titleGlobalTypoSwitcher, lineHeight: value && false } })}

												lineHeightUnits={titleLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ titleLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>

											{/* Background Color */}
											<FB_SwitcherControl
												label={__("Background Color", "frontis-blocks")}
												globalSwitcher={titleBgColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ titleBgColorSwitcher: value })}
											/>

											{titleBgColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={titleBgColor}
													setGlobalColor={(value) => setAttributes({ titleBgColor: value })}
												/>
											)}

											{titleBgColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={titleBgColorHover}
													setGlobalColor={(value) => setAttributes({ titleBgColorHover: value })}
												/>
											)}
											{/* Text Color */}
											<FB_SwitcherControl
												label={__("Text Color", "frontis-blocks")}
												globalSwitcher={titleColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ titleColorSwitcher: value })}
											/>

											{titleColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={titleColor}
													setGlobalColor={(value) => setAttributes({ titleColor: value })}
												/>
											)}

											{titleColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={titleHoverColor}
													setGlobalColor={(value) => setAttributes({ titleHoverColor: value })}
												/>
											)}

											<FB_Spacing
												label={__("Margin", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={titleMarginUnitsHandler}
												spacingUnits={titleMarginUnits}
												spacingDesktop={titleDesktopMargin}
												spacingTablet={titleTabMargin}
												spacingMobile={titleMobileMargin}
												handleSpacingUnitHandler={titleMarginUnitsChange}
												spacingCombineBtn={titleMarginLink}
												spacingCombineBtnHandler={titleMarginLinkBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={titlePaddingUnitsHandler}
												spacingUnits={titlePaddingUnits}
												spacingDesktop={titleDesktopPadding}
												spacingTablet={titleTabPadding}
												spacingMobile={titleMobilePadding}
												handleSpacingUnitHandler={titlePaddingUnitsChange}
												spacingCombineBtn={titlePaddingLink}
												spacingCombineBtnHandler={titlePaddingLinkBtn}
												setAttributes={setAttributes}
											/>

											<SelectControl
                                                label={__("Border Style", "frontis-blocks")}
                                                value={titleBorder}
                                                options={BORDER_STYLES}
                                                onChange={(value) => setAttributes({ titleBorder: value })}
                                            />

                                            <FB_SwitcherControl
                                                label={__("Border Color", "frontis-blocks")}
                                                globalSwitcher={titleBorderColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ titleBorderColorSwitcher: value })}
                                            />

                                            {titleBorderColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={titleBorderColor}
                                                    setGlobalColor={(value) => setAttributes({ titleBorderColor: value })}
                                                />
                                            )}

                                            {titleBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={titleBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ titleBorderHoverColor: value })}
                                                />
                                            )}

											<FB_Spacing
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={titleBorderUnitsHandler}
												spacingUnits={titleBorderUnits}
												spacingDesktop={titleDesktopBorder}
												spacingTablet={titleTabBorder}
												spacingMobile={titleMobileBorder}
												handleSpacingUnitHandler={titleBorderUnitsChange}
												spacingCombineBtn={titleBorderLink}
												spacingCombineBtnHandler={titleBorderLinkBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={titleBorderRadiusUnitsHandler}
												spacingUnits={titleBorderRadiusUnits}
												spacingDesktop={titleDesktopBorderRadius}
												spacingTablet={titleTabBorderRadius}
												spacingMobile={titleMobileBorderRadius}
												handleSpacingUnitHandler={titleBorderRadiusUnitsChange}
												spacingCombineBtn={titleBorderRadiusLink}
												spacingCombineBtnHandler={titleBorderRadiusLinkBtn}
												setAttributes={setAttributes}
											/>
										</PanelBody>

										<PanelBody title={__("Author", "frontis-blocks")} initialOpen={false}>
											<FB_TypographyControl
												globalTypoControlActive={true}
												globalTypoSwitcher={authorGlobalTypoSwitcher}
												storeGlobalTypographyData={(value) => setAttributes({ authorGlobalTypographyData: value })}

												globalTypoType={authorGlobalTypoType}
												onChangeGlobalTypoType={(value) => {
													setAttributes({
														authorGlobalTypoType: value,
														authorGlobalTypoSwitcher: value === 'default'
															? { ...authorGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false }
															: { ...authorGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true }
													})
												}}

												globalTypoOption={authorGlobalTypoOption}
												onChangeGlobalTypoOption={(value) => setAttributes({ authorGlobalTypoOption: value })}

												fontFamily={authorFontFamily}
												onChangeFontFamily={(value) => setAttributes({ authorFontFamily: value, authorGlobalTypoSwitcher: { ...authorGlobalTypoSwitcher, fontFamily: value && false } })}

												fontSize={authorFontSize}
												onChangeFontSize={(value) => setAttributes({ authorFontSize: value, authorGlobalTypoSwitcher: { ...authorGlobalTypoSwitcher, fontSize: value && false } })}

												fontSizeUnits={authorFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ authorFontSizeUnits: value })}

												fontWeight={authorFontWeight}
												onChangeFontWeight={(value) => setAttributes({ authorFontWeight: value, authorGlobalTypoSwitcher: { ...authorGlobalTypoSwitcher, fontWeight: value && false } })}

												fontStyle={authorFontStyle}
												onChangeFontStyle={(value) => setAttributes({ authorFontStyle: value, authorGlobalTypoSwitcher: { ...authorGlobalTypoSwitcher, fontStyle: value && false } })}

												textTransform={authorTextTransform}
												onChangeTextTransform={(value) => setAttributes({ authorTextTransform: value, authorGlobalTypoSwitcher: { ...authorGlobalTypoSwitcher, textTransform: value && false } })}

												textDecoration={authorTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ authorTextDecoration: value, authorGlobalTypoSwitcher: { ...authorGlobalTypoSwitcher, textDecoration: value && false } })}

												letterSpacing={authorLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ authorLetterSpacing: value, authorGlobalTypoSwitcher: { ...authorGlobalTypoSwitcher, letterSpacing: value && false } })}

												letterSpacingUnits={authorLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ authorLetterSpacingUnits: value })}

												lineHeight={authorLineHeight}
												onChangeLineHeight={(value) => setAttributes({ authorLineHeight: value, authorGlobalTypoSwitcher: { ...authorGlobalTypoSwitcher, lineHeight: value && false } })}

												lineHeightUnits={authorLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ authorLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>

											{/* Background Color */}
											<FB_SwitcherControl
												label={__("Background Color", "frontis-blocks")}
												globalSwitcher={authorBgColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ authorBgColorSwitcher: value })}
											/>

											{authorBgColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={authorBgColor}
													setGlobalColor={(value) => setAttributes({ authorBgColor: value })}
												/>
											)}

											{authorBgColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={authorBgColorHover}
													setGlobalColor={(value) => setAttributes({ authorBgColorHover: value })}
												/>
											)}
											{/* Text Color */}
											<FB_SwitcherControl
												label={__("Text Color", "frontis-blocks")}
												globalSwitcher={authorColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ authorColorSwitcher: value })}
											/>

											{authorColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={authorColor}
													setGlobalColor={(value) => setAttributes({ authorColor: value })}
												/>
											)}

											{authorColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={authorHoverColor}
													setGlobalColor={(value) => setAttributes({ authorHoverColor: value })}
												/>
											)}

											<FB_Spacing
												label={__("Margin", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={authorMarginUnitsHandler}
												spacingUnits={authorMarginUnits}
												spacingDesktop={authorDesktopMargin}
												spacingTablet={authorTabMargin}
												spacingMobile={authorMobileMargin}
												handleSpacingUnitHandler={authorMarginUnitsChange}
												spacingCombineBtn={authorMarginLink}
												spacingCombineBtnHandler={authorMarginLinkBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={authorPaddingUnitsHandler}
												spacingUnits={authorPaddingUnits}
												spacingDesktop={authorDesktopPadding}
												spacingTablet={authorTabPadding}
												spacingMobile={authorMobilePadding}
												handleSpacingUnitHandler={authorPaddingUnitsChange}
												spacingCombineBtn={authorPaddingLink}
												spacingCombineBtnHandler={authorPaddingLinkBtn}
												setAttributes={setAttributes}
											/>

											<SelectControl
                                                label={__("Border Style", "frontis-blocks")}
                                                value={authorBorder}
                                                options={BORDER_STYLES}
                                                onChange={(value) => setAttributes({ authorBorder: value })}
                                            />

                                            <FB_SwitcherControl
                                                label={__("Border Color", "frontis-blocks")}
                                                globalSwitcher={authorBorderColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ authorBorderColorSwitcher: value })}
                                            />

                                            {authorBorderColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={authorBorderColor}
                                                    setGlobalColor={(value) => setAttributes({ authorBorderColor: value })}
                                                />
                                            )}

                                            {authorBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={authorBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ authorBorderHoverColor: value })}
                                                />
                                            )}

											<FB_Spacing
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={authorBorderUnitsHandler}
												spacingUnits={authorBorderUnits}
												spacingDesktop={authorDesktopBorder}
												spacingTablet={authorTabBorder}
												spacingMobile={authorMobileBorder}
												handleSpacingUnitHandler={authorBorderUnitsChange}
												spacingCombineBtn={authorBorderLink}
												spacingCombineBtnHandler={authorBorderLinkBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={authorBorderRadiusUnitsHandler}
												spacingUnits={authorBorderRadiusUnits}
												spacingDesktop={authorDesktopBorderRadius}
												spacingTablet={authorTabBorderRadius}
												spacingMobile={authorMobileBorderRadius}
												handleSpacingUnitHandler={authorBorderRadiusUnitsChange}
												spacingCombineBtn={authorBorderRadiusLink}
												spacingCombineBtnHandler={authorBorderRadiusLinkBtn}
												setAttributes={setAttributes}
											/>
										</PanelBody>

										<PanelBody title={__("Date", "frontis-blocks")} initialOpen={false}>
											<FB_TypographyControl
												globalTypoControlActive={true}
												globalTypoSwitcher={dateGlobalTypoSwitcher}
												storeGlobalTypographyData={(value) => setAttributes({ dateGlobalTypographyData: value })}

												globalTypoType={dateGlobalTypoType}
												onChangeGlobalTypoType={(value) => {
													setAttributes({
														dateGlobalTypoType: value,
														dateGlobalTypoSwitcher: value === 'default'
															? { ...dateGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false }
															: { ...dateGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true }
													})
												}}

												globalTypoOption={dateGlobalTypoOption}
												onChangeGlobalTypoOption={(value) => setAttributes({ dateGlobalTypoOption: value })}

												fontFamily={dateFontFamily}
												onChangeFontFamily={(value) => setAttributes({ dateFontFamily: value, dateGlobalTypoSwitcher: { ...dateGlobalTypoSwitcher, fontFamily: value && false } })}

												fontSize={dateFontSize}
												onChangeFontSize={(value) => setAttributes({ dateFontSize: value, dateGlobalTypoSwitcher: { ...dateGlobalTypoSwitcher, fontSize: value && false } })}

												fontSizeUnits={dateFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ dateFontSizeUnits: value })}

												fontWeight={dateFontWeight}
												onChangeFontWeight={(value) => setAttributes({ dateFontWeight: value, dateGlobalTypoSwitcher: { ...dateGlobalTypoSwitcher, fontWeight: value && false } })}

												fontStyle={dateFontStyle}
												onChangeFontStyle={(value) => setAttributes({ dateFontStyle: value, dateGlobalTypoSwitcher: { ...dateGlobalTypoSwitcher, fontStyle: value && false } })}

												textTransform={dateTextTransform}
												onChangeTextTransform={(value) => setAttributes({ dateTextTransform: value, dateGlobalTypoSwitcher: { ...dateGlobalTypoSwitcher, textTransform: value && false } })}

												textDecoration={dateTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ dateTextDecoration: value, dateGlobalTypoSwitcher: { ...dateGlobalTypoSwitcher, textDecoration: value && false } })}

												letterSpacing={dateLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ dateLetterSpacing: value, dateGlobalTypoSwitcher: { ...dateGlobalTypoSwitcher, letterSpacing: value && false } })}

												letterSpacingUnits={dateLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ dateLetterSpacingUnits: value })}

												lineHeight={dateLineHeight}
												onChangeLineHeight={(value) => setAttributes({ dateLineHeight: value, dateGlobalTypoSwitcher: { ...dateGlobalTypoSwitcher, lineHeight: value && false } })}

												lineHeightUnits={dateLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ dateLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>

											{/* Background Color */}
											<FB_SwitcherControl
												label={__("Background Color", "frontis-blocks")}
												globalSwitcher={dateBgColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ dateBgColorSwitcher: value })}
											/>

											{dateBgColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={dateBgColor}
													setGlobalColor={(value) => setAttributes({ dateBgColor: value })}
												/>
											)}

											{dateBgColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={dateBgColorHover}
													setGlobalColor={(value) => setAttributes({ dateBgColorHover: value })}
												/>
											)}
											{/* Text Color */}
											<FB_SwitcherControl
												label={__("Text Color", "frontis-blocks")}
												globalSwitcher={dateColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ dateColorSwitcher: value })}
											/>

											{dateColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={dateColor}
													setGlobalColor={(value) => setAttributes({ dateColor: value })}
												/>
											)}

											{dateColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={dateHoverColor}
													setGlobalColor={(value) => setAttributes({ dateHoverColor: value })}
												/>
											)}

											<FB_Spacing
												label={__("Margin", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={dateMarginUnitsHandler}
												spacingUnits={dateMarginUnits}
												spacingDesktop={dateDesktopMargin}
												spacingTablet={dateTabMargin}
												spacingMobile={dateMobileMargin}
												handleSpacingUnitHandler={dateMarginUnitsChange}
												spacingCombineBtn={dateMarginLink}
												spacingCombineBtnHandler={dateMarginLinkBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={datePaddingUnitsHandler}
												spacingUnits={datePaddingUnits}
												spacingDesktop={dateDesktopPadding}
												spacingTablet={dateTabPadding}
												spacingMobile={dateMobilePadding}
												handleSpacingUnitHandler={datePaddingUnitsChange}
												spacingCombineBtn={datePaddingLink}
												spacingCombineBtnHandler={datePaddingLinkBtn}
												setAttributes={setAttributes}
											/>

											<SelectControl
                                                label={__("Border Style", "frontis-blocks")}
                                                value={dateBorder}
                                                options={BORDER_STYLES}
                                                onChange={(value) => setAttributes({ dateBorder: value })}
                                            />

                                            <FB_SwitcherControl
                                                label={__("Border Color", "frontis-blocks")}
                                                globalSwitcher={dateBorderColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ dateBorderColorSwitcher: value })}
                                            />

                                            {dateBorderColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={dateBorderColor}
                                                    setGlobalColor={(value) => setAttributes({ dateBorderColor: value })}
                                                />
                                            )}

                                            {dateBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={dateBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ dateBorderHoverColor: value })}
                                                />
                                            )}

											<FB_Spacing
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={dateBorderUnitsHandler}
												spacingUnits={dateBorderUnits}
												spacingDesktop={dateDesktopBorder}
												spacingTablet={dateTabBorder}
												spacingMobile={dateMobileBorder}
												handleSpacingUnitHandler={dateBorderUnitsChange}
												spacingCombineBtn={dateBorderLink}
												spacingCombineBtnHandler={dateBorderLinkBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={dateBorderRadiusUnitsHandler}
												spacingUnits={dateBorderRadiusUnits}
												spacingDesktop={dateDesktopBorderRadius}
												spacingTablet={dateTabBorderRadius}
												spacingMobile={dateMobileBorderRadius}
												handleSpacingUnitHandler={dateBorderRadiusUnitsChange}
												spacingCombineBtn={dateBorderRadiusLink}
												spacingCombineBtnHandler={dateBorderRadiusLinkBtn}
												setAttributes={setAttributes}
											/>
										</PanelBody>
									</>
								)}
								{tab.name === "advanced" && (
									<>
										<PanelBody title={__("Advanced Settings", "frontis-blocks")} initialOpen={true}>
											{/* Add advanced settings here */}
										</PanelBody>
									</>
								)}
							</div>
						)}
					</TabPanel>
				</div>
			</InspectorControls>
		</>
	);
}