import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TabPanel,
	SelectControl,
	BaseControl,
	ButtonGroup,
	Button,
	ToggleControl,
	TextareaControl
} from '@wordpress/components';

/**
 * Internal depencencies
 */
import {
	BORDER_STYLES,
	SEARCH_ICON_ALIGN,
	SEARCH_APPEARANCE
} from '@Constants/fbConstants';
import Select2 from "react-select";

import { memo } from '@wordpress/element';
import FB_Range from '@Components/range';
import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_ImageControl from '@Components/image-control';
import FB_InputControl from '@Components/input-control';
import FBIconPicker from "../../components/icon-picker";
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import { useDeviceType } from "@Config/displayType";
import './editor.scss';

const Inspector = ({ attributes, setAttributes }) => {
	const {
		blockID,
		searchButtonWidth,
		searchButtonWidthUnits,
		searchButtonInputFieldWidth,
		searchButtonInputFieldWidthUnits,
		searchIconGap,
		searchIconGapUnits,
		showPlaceholderSwitcher,
		placeholderText,
		showButtonSwitcher,
		searchButtonText,
		searchAppearance,
		buttonTextGlobalTypographyData,
		buttonTextGlobalTypoSwitcher,
		buttonTextGlobalTypoType,
		buttonTextGlobalTypoOption,
		buttonTextFontFamily,
		buttonTextFontSize,
		buttonTextFontSizeUnits,
		buttonTextFontWeight,
		buttonTextFontStyle,
		buttonTextTransform,
		buttonTextDecoration,
		buttonTextLetterSpacing,
		buttonTextLetterSpacingUnits,
		buttonTextLineHeight,
		buttonTextLineHeightUnits,

		buttonTextColorSwitcher,
		buttonTextColor,
		buttonTextColorHover,

		buttonBorder,
		buttonBorderColorSwitcher,
		buttonBorderColor,
		buttonBorderColorHover,

		buttonBorderUnits,
		buttonBorderDesktop,
		buttonBorderTablet,
		buttonBorderMobile,
		buttonBorderLink,

		buttonBorderRadiusUnits,
		buttonBorderRadiusDesktop,
		buttonBorderRadiusTablet,
		buttonBorderRadiusMobile,
		buttonBorderRadiusLink,

		buttonPaddingUnits,
		buttonPaddingDesktop,
		buttonPaddingTablet,
		buttonPaddingMobile,
		buttonPaddingLink,

		searchIconAlign,
		searchIcon,
		searchIconImageUrl,
		searchIconImageAlt,
		searchIconImageID,
		searchIconImageWidth,
		searchIconImageWidthUnits,
		searchIconImageHeight,
		searchIconImageHeightUnits,
		searchIconImageDisplay,

		/** Start Icon Styles */
		searchIconSize,
		searchIconSizeUnits,
		searchIconColorSwitcher,
		searchIconColor,
		searchIconHoverColor,

		searchIconRotateSwitcher,
		searchIconRotate,
		searchIconRotateHover,
		searchIconImageRotateSwitcher,
		searchIconImageRotate,
		searchIconImageRotateHover,
		/** End Icon Styles */

		/** Start Input Field Typography */
		inputFieldTextGlobalTypographyData,
		inputFieldTextGlobalTypoSwitcher,
		inputFieldTextGlobalTypoType,
		inputFieldTextGlobalTypoOption,
		inputFieldTextFontFamily,
		inputFieldTextFontSize,
		inputFieldTextFontSizeUnits,
		inputFieldTextFontWeight,
		inputFieldTextFontStyle,
		inputFieldTextTransform,
		inputFieldTextDecoration,
		inputFieldTextLetterSpacing,
		inputFieldTextLetterSpacingUnits,
		inputFieldTextLineHeight,
		inputFieldTextLineHeightUnits,

		inputFieldTextColorSwitcher,
		inputFieldTextColor,
		inputFieldTextColorHover,

		inputFieldBorder,
		inputFieldBorderColorSwitcher,
		inputFieldBorderColor,
		inputFieldBorderColorHover,

		inputFieldBorderUnits,
		inputFieldBorderDesktop,
		inputFieldBorderTablet,
		inputFieldBorderMobile,
		inputFieldBorderLink,

		inputFieldBorderRadiusUnits,
		inputFieldBorderRadiusDesktop,
		inputFieldBorderRadiusTablet,
		inputFieldBorderRadiusMobile,
		inputFieldBorderRadiusLink,

		inputFieldPaddingUnits,
		inputFieldPaddingDesktop,
		inputFieldPaddingTablet,
		inputFieldPaddingMobile,
		inputFieldPaddingLink,
		searchFieldTextGlobalTypographyData,
		searchFieldTextGlobalTypoSwitcher,
		searchFieldTextGlobalTypoType,
		searchFieldTextGlobalTypoOption,
		searchFieldTextFontFamily,
		searchFieldTextFontSize,
		searchFieldTextFontSizeUnits,
		searchFieldTextFontWeight,
		searchFieldTextFontStyle,
		searchFieldTextTransform,
		searchFieldTextDecoration,
		searchFieldTextLetterSpacing,
		searchFieldTextLetterSpacingUnits,
		searchFieldTextLineHeight,
		searchFieldTextLineHeightUnits,

		searchFieldBgColorSwitcher,
		searchFieldBgColor,
		searchFieldBgColorHover,
		searchFieldTextColorSwitcher,
		searchFieldTextColor,
		searchFieldTextColorHover,

		searchFieldBorder,
		searchFieldBorderColorSwitcher,
		searchFieldBorderColor,
		searchFieldBorderColorHover,
		searchFieldBorderUnits,
		searchFieldBorderDesktop,
		searchFieldBorderTablet,
		searchFieldBorderMobile,
		searchFieldBorderLink,

		searchFieldBorderRadiusUnits,
		searchFieldBorderRadiusDesktop,
		searchFieldBorderRadiusTablet,
		searchFieldBorderRadiusMobile,
		searchFieldBorderRadiusLink,

		searchFieldPaddingUnits,
		searchFieldPaddingDesktop,
		searchFieldPaddingTablet,
		searchFieldPaddingMobile,
		searchFieldPaddingLink,

		searchFieldItemBorder,
		searchFieldItemBorderColorSwitcher,
		searchFieldItemBorderColor,
		searchFieldItemBorderColorHover,
		searchFieldItemBorderUnits,
		searchFieldItemBorderDesktop,
		searchFieldItemBorderTablet,
		searchFieldItemBorderMobile,
		searchFieldItemBorderLink,

		searchFieldItemBorderRadiusUnits,
		searchFieldItemBorderRadiusDesktop,
		searchFieldItemBorderRadiusTablet,
		searchFieldItemBorderRadiusMobile,
		searchFieldItemBorderRadiusLink,

		searchFieldItemPaddingUnits,
		searchFieldItemPaddingDesktop,
		searchFieldItemPaddingTablet,
		searchFieldItemPaddingMobile,
		searchFieldItemPaddingLink,
		searchFieldItemColorSwitcher,
		searchFieldItemColor,
		searchFieldItemColorHover,

		searchFieldItemTitleGlobalTypographyData,
		searchFieldItemTitleGlobalTypoSwitcher,
		searchFieldItemTitleGlobalTypoType,
		searchFieldItemTitleGlobalTypoOption,

		searchFieldItemTitleFontFamily,
		searchFieldItemTitleFontSize,
		searchFieldItemTitleFontSizeUnits,
		searchFieldItemTitleFontWeight,
		searchFieldItemTitleFontStyle,
		searchFieldItemTitleTransform,
		searchFieldItemTitleDecoration,

		searchFieldItemTitleLetterSpacing,
		searchFieldItemTitleLetterSpacingUnits,

		searchFieldItemTitleLineHeight,
		searchFieldItemTitleLineHeightUnits,

		searchFieldItemTitleColorSwitcher,
		searchFieldItemTitleColor,
		searchFieldItemTitleColorHover,

		searchFieldItemTitleBorder,
		searchFieldItemTitleBorderColorSwitcher,
		searchFieldItemTitleBorderColor,
		searchFieldItemTitleBorderColorHover,
		searchFieldItemTitleBorderUnits,
		searchFieldItemTitleBorderDesktop,
		searchFieldItemTitleBorderTablet,
		searchFieldItemTitleBorderMobile,
		searchFieldItemTitleBorderLink,

		searchFieldItemTitleBorderRadiusUnits,
		searchFieldItemTitleBorderRadiusDesktop,
		searchFieldItemTitleBorderRadiusTablet,
		searchFieldItemTitleBorderRadiusMobile,
		searchFieldItemTitleBorderRadiusLink,

		searchFieldItemTitlePaddingUnits,
		searchFieldItemTitlePaddingDesktop,
		searchFieldItemTitlePaddingTablet,
		searchFieldItemTitlePaddingMobile,
		searchFieldItemTitlePaddingLink,

		// Typography
		searchFieldItemMetaGlobalTypographyData,
		searchFieldItemMetaGlobalTypoSwitcher,
		searchFieldItemMetaGlobalTypoType,
		searchFieldItemMetaGlobalTypoOption,

		searchFieldItemMetaFontFamily,
		searchFieldItemMetaFontSize,
		searchFieldItemMetaFontSizeUnits,
		searchFieldItemMetaFontWeight,
		searchFieldItemMetaFontStyle,
		searchFieldItemMetaTransform,
		searchFieldItemMetaDecoration,

		searchFieldItemMetaLetterSpacing,
		searchFieldItemMetaLetterSpacingUnits,

		searchFieldItemMetaLineHeight,
		searchFieldItemMetaLineHeightUnits,

		// Color
		searchFieldItemMetaColorSwitcher,
		searchFieldItemMetaColor,
		searchFieldItemMetaColorHover,

		// Border
		searchFieldItemMetaBorder,
		searchFieldItemMetaBorderColorSwitcher,
		searchFieldItemMetaBorderColor,
		searchFieldItemMetaBorderColorHover,
		searchFieldItemMetaBorderUnits,
		searchFieldItemMetaBorderDesktop,
		searchFieldItemMetaBorderTablet,
		searchFieldItemMetaBorderMobile,
		searchFieldItemMetaBorderLink,

		// Border Radius
		searchFieldItemMetaBorderRadiusUnits,
		searchFieldItemMetaBorderRadiusDesktop,
		searchFieldItemMetaBorderRadiusTablet,
		searchFieldItemMetaBorderRadiusMobile,
		searchFieldItemMetaBorderRadiusLink,

		// Padding
		searchFieldItemMetaPaddingUnits,
		searchFieldItemMetaPaddingDesktop,
		searchFieldItemMetaPaddingTablet,
		searchFieldItemMetaPaddingMobile,
		searchFieldItemMetaPaddingLink,

		resultMetaGap,
		resultMetaGapUnits,
		metaDividerSize,
		metaDividerSizeUnits,
		metaDividerColorSwitcher,
		metaDividerColor,
		metaDividerColorHover,

		// Typography
		SearchViewAllResultsGlobalTypographyData,
		SearchViewAllResultsGlobalTypoSwitcher,
		SearchViewAllResultsGlobalTypoType,
		SearchViewAllResultsGlobalTypoOption,

		SearchViewAllResultsFontFamily,
		SearchViewAllResultsFontSize,
		SearchViewAllResultsFontSizeUnits,
		SearchViewAllResultsFontWeight,
		SearchViewAllResultsFontStyle,
		SearchViewAllResultsTransform,
		SearchViewAllResultsDecoration,

		SearchViewAllResultsLetterSpacing,
		SearchViewAllResultsLetterSpacingUnits,

		SearchViewAllResultsLineHeight,
		SearchViewAllResultsLineHeightUnits,

		// Color
		SearchViewAllResultsColorSwitcher,
		SearchViewAllResultsColor,
		SearchViewAllResultsColorHover,
		SearchViewAllResultsBgColorSwitcher,
		SearchViewAllResultsBgColor,
		SearchViewAllResultsBgColorHover,

		// Border
		SearchViewAllResultsBorder,
		SearchViewAllResultsBorderColorSwitcher,
		SearchViewAllResultsBorderColor,
		SearchViewAllResultsBorderColorHover,
		SearchViewAllResultsBorderUnits,
		SearchViewAllResultsBorderDesktop,
		SearchViewAllResultsBorderTablet,
		SearchViewAllResultsBorderMobile,
		SearchViewAllResultsBorderLink,

		// Border Radius
		SearchViewAllResultsBorderRadiusUnits,
		SearchViewAllResultsBorderRadiusDesktop,
		SearchViewAllResultsBorderRadiusTablet,
		SearchViewAllResultsBorderRadiusMobile,
		SearchViewAllResultsBorderRadiusLink,

		// Padding
		SearchViewAllResultsPaddingUnits,
		SearchViewAllResultsPaddingDesktop,
		SearchViewAllResultsPaddingTablet,
		SearchViewAllResultsPaddingMobile,
		SearchViewAllResultsPaddingLink,

		searchIconZIndex,
		searchGlobalWraperID,
		searchGlobalWraperClass,
		searchCustomCSS,
	} = attributes;

	const deviceType = useDeviceType();

	/** Start Button Border */
	const handleButtonBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonBorderMobile: {
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
					setAttributes({ buttonBorderDesktop: { ...buttonBorderDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ buttonBorderTablet: { ...buttonBorderTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ buttonBorderMobile: { ...buttonBorderMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleButtonBorderCombineBtn = () => {
		setAttributes({ buttonBorderLink: !buttonBorderLink });
	}

	const handleButtonBorderUnitsHandler = (unit) => {
		setAttributes({
			buttonBorderUnits: {
				...buttonBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Border */

	/** Start Button Border Radius*/
	const handleButtonBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonBorderRadiusMobile: {
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
					setAttributes({ buttonBorderRadiusDesktop: { ...buttonBorderRadiusDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ buttonBorderRadiusTablet: { ...buttonBorderRadiusTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ buttonBorderRadiusMobile: { ...buttonBorderRadiusMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleButtonBorderRadiusCombineBtn = () => {
		setAttributes({ buttonBorderRadiusLink: !buttonBorderRadiusLink });
	}

	const handleButtonBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			buttonBorderRadiusUnits: {
				...buttonBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Button Border Radius */

	/** Start Button Padding*/
	const handleButtonPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonPaddingMobile: {
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
					setAttributes({ buttonPaddingDesktop: { ...buttonPaddingDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ buttonPaddingTablet: { ...buttonPaddingTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ buttonPaddingMobile: { ...buttonPaddingMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleButtonPaddingCombineBtn = () => {
		setAttributes({ buttonPaddingLink: !buttonPaddingLink });
	}

	const handleButtonPaddingUnitsHandler = (unit) => {
		setAttributes({
			buttonPaddingUnits: {
				...buttonPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Button Padding */

	/** Start Input Field Border */
	const handleInputFieldBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (inputFieldBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						inputFieldBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						inputFieldBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						inputFieldBorderMobile: {
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
					setAttributes({ inputFieldBorderDesktop: { ...inputFieldBorderDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ inputFieldBorderTablet: { ...inputFieldBorderTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ inputFieldBorderMobile: { ...inputFieldBorderMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleInputFieldBorderCombineBtn = () => {
		setAttributes({ inputFieldBorderLink: !inputFieldBorderLink });
	}

	const handleInputFieldBorderUnitsHandler = (unit) => {
		setAttributes({
			inputFieldBorderUnits: {
				...inputFieldBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Input Field Border */

	/** Start Input Field Border Radius*/
	const handleInputFieldBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (inputFieldBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						inputFieldBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						inputFieldBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						inputFieldBorderRadiusMobile: {
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
					setAttributes({ inputFieldBorderRadiusDesktop: { ...inputFieldBorderRadiusDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ inputFieldBorderRadiusTablet: { ...inputFieldBorderRadiusTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ inputFieldBorderRadiusMobile: { ...inputFieldBorderRadiusMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleInputFieldBorderRadiusCombineBtn = () => {
		setAttributes({ inputFieldBorderRadiusLink: !inputFieldBorderRadiusLink });
	}

	const handleInputFieldBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			inputFieldBorderRadiusUnits: {
				...inputFieldBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Input Field Border Radius */

	/** Start Input Field Padding*/
	const handleInputFieldPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (inputFieldPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						inputFieldPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						inputFieldPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						inputFieldPaddingMobile: {
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
					setAttributes({ inputFieldPaddingDesktop: { ...inputFieldPaddingDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ inputFieldPaddingTablet: { ...inputFieldPaddingTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ inputFieldPaddingMobile: { ...inputFieldPaddingMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleInputFieldPaddingCombineBtn = () => {
		setAttributes({ inputFieldPaddingLink: !inputFieldPaddingLink });
	}

	const handleInputFieldPaddingUnitsHandler = (unit) => {
		setAttributes({
			inputFieldPaddingUnits: {
				...inputFieldPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Input Field Padding */

	/** Start Input Field Border */
	const handlesearchFieldBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (searchFieldBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						searchFieldBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						searchFieldBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						searchFieldBorderMobile: {
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
					setAttributes({ searchFieldBorderDesktop: { ...searchFieldBorderDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ searchFieldBorderTablet: { ...searchFieldBorderTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ searchFieldBorderMobile: { ...searchFieldBorderMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handlesearchFieldBorderCombineBtn = () => {
		setAttributes({ searchFieldBorderLink: !searchFieldBorderLink });
	}

	const handlesearchFieldBorderUnitsHandler = (unit) => {
		setAttributes({
			searchFieldBorderUnits: {
				...searchFieldBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Input Field Border */

	/** Start Input Field Border Radius*/
	const handlesearchFieldBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (searchFieldBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						searchFieldBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						searchFieldBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						searchFieldBorderRadiusMobile: {
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
					setAttributes({ searchFieldBorderRadiusDesktop: { ...searchFieldBorderRadiusDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ searchFieldBorderRadiusTablet: { ...searchFieldBorderRadiusTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ searchFieldBorderRadiusMobile: { ...searchFieldBorderRadiusMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handlesearchFieldBorderRadiusCombineBtn = () => {
		setAttributes({ searchFieldBorderRadiusLink: !searchFieldBorderRadiusLink });
	}

	const handlesearchFieldBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			searchFieldBorderRadiusUnits: {
				...searchFieldBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Input Field Border Radius */

	/** Start Input Field Padding*/
	const handlesearchFieldPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (searchFieldPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						searchFieldPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						searchFieldPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						searchFieldPaddingMobile: {
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
					setAttributes({ searchFieldPaddingDesktop: { ...searchFieldPaddingDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ searchFieldPaddingTablet: { ...searchFieldPaddingTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ searchFieldPaddingMobile: { ...searchFieldPaddingMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handlesearchFieldPaddingCombineBtn = () => {
		setAttributes({ searchFieldPaddingLink: !searchFieldPaddingLink });
	}

	const handlesearchFieldPaddingUnitsHandler = (unit) => {
		setAttributes({
			searchFieldPaddingUnits: {
				...searchFieldPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Search Field Padding */

	/** Start Input Field Border */
	const handlesearchFieldItemBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (searchFieldItemBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						searchFieldItemBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						searchFieldItemBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						searchFieldItemBorderMobile: {
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
					setAttributes({ searchFieldItemBorderDesktop: { ...searchFieldItemBorderDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ searchFieldItemBorderTablet: { ...searchFieldItemBorderTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ searchFieldItemBorderMobile: { ...searchFieldItemBorderMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handlesearchFieldItemBorderCombineBtn = () => {
		setAttributes({ searchFieldItemBorderLink: !searchFieldItemBorderLink });
	}

	const handlesearchFieldItemBorderUnitsHandler = (unit) => {
		setAttributes({
			searchFieldItemBorderUnits: {
				...searchFieldItemBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Input Field Border */

	/** Start Input Field Border Radius*/
	const handlesearchFieldItemBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (searchFieldItemBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						searchFieldItemBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						searchFieldItemBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						searchFieldItemBorderRadiusMobile: {
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
					setAttributes({ searchFieldItemBorderRadiusDesktop: { ...searchFieldItemBorderRadiusDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ searchFieldItemBorderRadiusTablet: { ...searchFieldItemBorderRadiusTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ searchFieldItemBorderRadiusMobile: { ...searchFieldItemBorderRadiusMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handlesearchFieldItemBorderRadiusCombineBtn = () => {
		setAttributes({ searchFieldItemBorderRadiusLink: !searchFieldItemBorderRadiusLink });
	}

	const handlesearchFieldItemBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			searchFieldItemBorderRadiusUnits: {
				...searchFieldItemBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Input Field Border Radius */

	/** Start Input Field Padding*/
	const handlesearchFieldItemPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (searchFieldItemPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						searchFieldItemPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						searchFieldItemPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						searchFieldItemPaddingMobile: {
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
					setAttributes({ searchFieldItemPaddingDesktop: { ...searchFieldItemPaddingDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ searchFieldItemPaddingTablet: { ...searchFieldItemPaddingTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ searchFieldItemPaddingMobile: { ...searchFieldItemPaddingMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handlesearchFieldItemPaddingCombineBtn = () => {
		setAttributes({ searchFieldItemPaddingLink: !searchFieldItemPaddingLink });
	}

	const handlesearchFieldItemPaddingUnitsHandler = (unit) => {
		setAttributes({
			searchFieldItemPaddingUnits: {
				...searchFieldItemPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Search Field Padding */

	/** Start Input Field Border */
	const handlesearchFieldItemTitleBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (searchFieldItemTitleBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						searchFieldItemTitleBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						searchFieldItemTitleBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						searchFieldItemTitleBorderMobile: {
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
					setAttributes({ searchFieldItemTitleBorderDesktop: { ...searchFieldItemTitleBorderDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ searchFieldItemTitleBorderTablet: { ...searchFieldItemTitleBorderTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ searchFieldItemTitleBorderMobile: { ...searchFieldItemTitleBorderMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handlesearchFieldItemTitleBorderCombineBtn = () => {
		setAttributes({ searchFieldItemTitleBorderLink: !searchFieldItemTitleBorderLink });
	}

	const handlesearchFieldItemTitleBorderUnitsHandler = (unit) => {
		setAttributes({
			searchFieldItemTitleBorderUnits: {
				...searchFieldItemTitleBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Input Field Border */

	/** Start Input Field Border Radius*/
	const handlesearchFieldItemTitleBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (searchFieldItemTitleBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						searchFieldItemTitleBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						searchFieldItemTitleBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						searchFieldItemTitleBorderRadiusMobile: {
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
					setAttributes({ searchFieldItemTitleBorderRadiusDesktop: { ...searchFieldItemTitleBorderRadiusDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ searchFieldItemTitleBorderRadiusTablet: { ...searchFieldItemTitleBorderRadiusTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ searchFieldItemTitleBorderRadiusMobile: { ...searchFieldItemTitleBorderRadiusMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handlesearchFieldItemTitleBorderRadiusCombineBtn = () => {
		setAttributes({ searchFieldItemTitleBorderRadiusLink: !searchFieldItemTitleBorderRadiusLink });
	}

	const handlesearchFieldItemTitleBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			searchFieldItemTitleBorderRadiusUnits: {
				...searchFieldItemTitleBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Input Field Border Radius */

	/** Start Input Field Padding*/
	const handlesearchFieldItemTitlePaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (searchFieldItemTitlePaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						searchFieldItemTitlePaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						searchFieldItemTitlePaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						searchFieldItemTitlePaddingMobile: {
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
					setAttributes({ searchFieldItemTitlePaddingDesktop: { ...searchFieldItemTitlePaddingDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ searchFieldItemTitlePaddingTablet: { ...searchFieldItemTitlePaddingTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ searchFieldItemTitlePaddingMobile: { ...searchFieldItemTitlePaddingMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handlesearchFieldItemTitlePaddingCombineBtn = () => {
		setAttributes({ searchFieldItemTitlePaddingLink: !searchFieldItemTitlePaddingLink });
	}

	const handlesearchFieldItemTitlePaddingUnitsHandler = (unit) => {
		setAttributes({
			searchFieldItemTitlePaddingUnits: {
				...searchFieldItemTitlePaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Search Field Padding */

	/** Start Input Field Border */
	const handlesearchFieldItemMetaBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (searchFieldItemMetaBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						searchFieldItemMetaBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						searchFieldItemMetaBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						searchFieldItemMetaBorderMobile: {
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
					setAttributes({ searchFieldItemMetaBorderDesktop: { ...searchFieldItemMetaBorderDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ searchFieldItemMetaBorderTablet: { ...searchFieldItemMetaBorderTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ searchFieldItemMetaBorderMobile: { ...searchFieldItemMetaBorderMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handlesearchFieldItemMetaBorderCombineBtn = () => {
		setAttributes({ searchFieldItemMetaBorderLink: !searchFieldItemMetaBorderLink });
	}

	const handlesearchFieldItemMetaBorderUnitsHandler = (unit) => {
		setAttributes({
			searchFieldItemMetaBorderUnits: {
				...searchFieldItemMetaBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Input Field Border */

	/** Start Input Field Border Radius*/
	const handlesearchFieldItemMetaBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (searchFieldItemMetaBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						searchFieldItemMetaBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						searchFieldItemMetaBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						searchFieldItemMetaBorderRadiusMobile: {
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
					setAttributes({ searchFieldItemMetaBorderRadiusDesktop: { ...searchFieldItemMetaBorderRadiusDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ searchFieldItemMetaBorderRadiusTablet: { ...searchFieldItemMetaBorderRadiusTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ searchFieldItemMetaBorderRadiusMobile: { ...searchFieldItemMetaBorderRadiusMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handlesearchFieldItemMetaBorderRadiusCombineBtn = () => {
		setAttributes({ searchFieldItemMetaBorderRadiusLink: !searchFieldItemMetaBorderRadiusLink });
	}

	const handlesearchFieldItemMetaBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			searchFieldItemMetaBorderRadiusUnits: {
				...searchFieldItemMetaBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Input Field Border Radius */

	/** Start Input Field Padding*/
	const handlesearchFieldItemMetaPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (searchFieldItemMetaPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						searchFieldItemMetaPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						searchFieldItemMetaPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						searchFieldItemMetaPaddingMobile: {
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
					setAttributes({ searchFieldItemMetaPaddingDesktop: { ...searchFieldItemMetaPaddingDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ searchFieldItemMetaPaddingTablet: { ...searchFieldItemMetaPaddingTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ searchFieldItemMetaPaddingMobile: { ...searchFieldItemMetaPaddingMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handlesearchFieldItemMetaPaddingCombineBtn = () => {
		setAttributes({ searchFieldItemMetaPaddingLink: !searchFieldItemMetaPaddingLink });
	}

	const handlesearchFieldItemMetaPaddingUnitsHandler = (unit) => {
		setAttributes({
			searchFieldItemMetaPaddingUnits: {
				...searchFieldItemMetaPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Search Field Padding */

	/** Start Input Field Border */
	const handleSearchViewAllResultsBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (SearchViewAllResultsBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						SearchViewAllResultsBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						SearchViewAllResultsBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						SearchViewAllResultsBorderMobile: {
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
					setAttributes({ SearchViewAllResultsBorderDesktop: { ...SearchViewAllResultsBorderDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ SearchViewAllResultsBorderTablet: { ...SearchViewAllResultsBorderTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ SearchViewAllResultsBorderMobile: { ...SearchViewAllResultsBorderMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleSearchViewAllResultsBorderCombineBtn = () => {
		setAttributes({ SearchViewAllResultsBorderLink: !SearchViewAllResultsBorderLink });
	}

	const handleSearchViewAllResultsBorderUnitsHandler = (unit) => {
		setAttributes({
			SearchViewAllResultsBorderUnits: {
				...SearchViewAllResultsBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Input Field Border */

	/** Start Input Field Border Radius*/
	const handleSearchViewAllResultsBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (SearchViewAllResultsBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						SearchViewAllResultsBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						SearchViewAllResultsBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						SearchViewAllResultsBorderRadiusMobile: {
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
					setAttributes({ SearchViewAllResultsBorderRadiusDesktop: { ...SearchViewAllResultsBorderRadiusDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ SearchViewAllResultsBorderRadiusTablet: { ...SearchViewAllResultsBorderRadiusTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ SearchViewAllResultsBorderRadiusMobile: { ...SearchViewAllResultsBorderRadiusMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleSearchViewAllResultsBorderRadiusCombineBtn = () => {
		setAttributes({ SearchViewAllResultsBorderRadiusLink: !SearchViewAllResultsBorderRadiusLink });
	}

	const handleSearchViewAllResultsBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			SearchViewAllResultsBorderRadiusUnits: {
				...SearchViewAllResultsBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Input Field Border Radius */

	/** Start Input Field Padding*/
	const handleSearchViewAllResultsPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (SearchViewAllResultsPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						SearchViewAllResultsPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						SearchViewAllResultsPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						SearchViewAllResultsPaddingMobile: {
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
					setAttributes({ SearchViewAllResultsPaddingDesktop: { ...SearchViewAllResultsPaddingDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ SearchViewAllResultsPaddingTablet: { ...SearchViewAllResultsPaddingTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ SearchViewAllResultsPaddingMobile: { ...SearchViewAllResultsPaddingMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleSearchViewAllResultsPaddingCombineBtn = () => {
		setAttributes({ SearchViewAllResultsPaddingLink: !SearchViewAllResultsPaddingLink });
	}

	const handleSearchViewAllResultsPaddingUnitsHandler = (unit) => {
		setAttributes({
			SearchViewAllResultsPaddingUnits: {
				...SearchViewAllResultsPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Search Field Padding */

	/** Start Icon Handler */
	const iconHandler = (IconName) => {
		setAttributes({ searchIcon: IconName })
	}
	/** End Icon Handler */

	return (
		<>
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
										<PanelBody title={__("General Settings", "frontis-blocks")} initialOpen={true}>
											<SelectControl
												label={__("Appearance", "frontis-blocks")}
												value={searchAppearance}
												options={SEARCH_APPEARANCE}
												onChange={(value) => setAttributes({ searchAppearance: value })}
											/>
											{(searchAppearance === 'button-and-search') && (
												<ToggleControl
													label={__("Show Button Text", "frontis-blocks")}
													checked={showButtonSwitcher}
													onChange={(value) => setAttributes({ showButtonSwitcher: value })}
												/>
											)}
											{(showButtonSwitcher && searchAppearance === 'button-and-search') && (
												<TextareaControl
													label={__("Button Text", "frontis-blocks")}
													value={searchButtonText}
													onChange={(value) => setAttributes({ searchButtonText: value })}
													className="fb-advanced-text"
												/>
											)}
											{(searchAppearance === 'button-and-search') && (

												<FB_Range
													min={1}
													max={1000}
													label={__("Button Width", "frontis-blocks")}
													rangeValue={searchButtonWidth}
													onChangeHandler={(value) => setAttributes({ searchButtonWidth: value })}
													rangeUnitHandler={(value) => setAttributes({ searchButtonWidthUnits: value })}
													deviceType={deviceType}
													units={searchButtonWidthUnits}
													setAttributes={setAttributes}
													rangeStep={1}
													resetFallbackValue={"88"}
												/>
											)}

											<FB_Range
												min={1}
												max={1500}
												label={__("Search Field Width", "frontis-blocks")}
												rangeValue={searchButtonInputFieldWidth}
												onChangeHandler={(value) => setAttributes({ searchButtonInputFieldWidth: value })}
												rangeUnitHandler={(value) => setAttributes({ searchButtonInputFieldWidthUnits: value })}
												deviceType={deviceType}
												units={searchButtonInputFieldWidthUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={"1080"}
											/>
											{(searchAppearance === 'button-and-search') && (
												<>
													<FB_Range
														min={1}
														max={100}
														label={__("Icon Gap", "frontis-blocks")}
														rangeValue={searchIconGap}
														onChangeHandler={(value) => setAttributes({ searchIconGap: value })}
														rangeUnitHandler={(value) => setAttributes({ searchIconGapUnits: value })}
														deviceType={deviceType}
														units={searchIconGapUnits}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={"5"}
													/>


													<BaseControl
														label={__("Icon", "frontis-blocks")}
														id="fb-setting-text-alignment"
														className="fb-setting-text-alignment"
													>
														<ButtonGroup
															className="fb-setting-text-alignment-group-btn"
														>
															{SEARCH_ICON_ALIGN.map((item, key) => (
																<Button
																	key={key}
																	onClick={() => setAttributes({ searchIconAlign: item.value })}
																	className={`fb-setting-text-alignment-single-btn ${searchIconAlign === item.value ? 'active' : ''}`}
																>
																	{item.label}
																</Button>
															))}
														</ButtonGroup>
														{(searchIconAlign === 'icon-text') && (
															<FBIconPicker value={searchIcon} setIconHandler={iconHandler} />
														)}

														{(searchIconAlign === 'image') && (
															<FB_ImageControl
																globalImageUrl={searchIconImageUrl}
																setglobalImageUrl={(value) => setAttributes({ searchIconImageUrl: value })}
																globalImageAlt={searchIconImageAlt}
																setglobalImageAlt={(value) => setAttributes({ searchIconImageAlt: value })}
																globalImageID={searchIconImageID}
																setglobalImageID={(value) => setAttributes({ searchIconImageID: value })}
																globalImageSize={searchIconImageDisplay}
																setglobalImageSize={(value) => setAttributes({ searchIconImageDisplay: value })}
															/>
														)}

													</BaseControl>
												</>
											)}

											<ToggleControl
												label={__("Show Placeholder", "frontis-blocks")}
												checked={showPlaceholderSwitcher}
												onChange={(value) => setAttributes({ showPlaceholderSwitcher: value })}
											/>
											{showPlaceholderSwitcher && (
												<TextareaControl
													label={__("Placeholder Text", "frontis-blocks")}
													value={placeholderText}
													onChange={(value) => setAttributes({ placeholderText: value })}
													className="fb-advanced-text"
												/>
											)}
										</PanelBody>
									</>
								)}
								{tab.name === "styles" && (
									<>
										<PanelBody title={__("Search Button", "frontis-blocks")} initialOpen={true}>
											<FB_TypographyControl
												globalTypoControlActive={true}
												globalTypoSwitcher={buttonTextGlobalTypoSwitcher}
												storeGlobalTypographyData={(value) => setAttributes({ buttonTextGlobalTypographyData: value })}

												globalTypoType={buttonTextGlobalTypoType}
												onChangeGlobalTypoType={(value) => {
													setAttributes({
														buttonTextGlobalTypoType: value,
														buttonTextGlobalTypoSwitcher: value === 'default' ? { ...buttonTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...buttonTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
													})
												}}

												globalTypoOption={buttonTextGlobalTypoOption}
												onChangeGlobalTypoOption={(value) => setAttributes({ buttonTextGlobalTypoOption: value })}

												fontFamily={buttonTextFontFamily}
												onChangeFontFamily={(value) => setAttributes({ buttonTextFontFamily: value, buttonTextGlobalTypoSwitcher: { ...buttonTextGlobalTypoSwitcher, fontFamily: value && false } })}

												fontSize={buttonTextFontSize}
												onChangeFontSize={(value) => setAttributes({ buttonTextFontSize: value, buttonTextGlobalTypoSwitcher: { ...buttonTextGlobalTypoSwitcher, fontSize: value && false } })}

												fontSizeUnits={buttonTextFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ buttonTextFontSizeUnits: value })}

												fontWeight={buttonTextFontWeight}
												onChangeFontWeight={(value) => setAttributes({ buttonTextFontWeight: value, buttonTextGlobalTypoSwitcher: { ...buttonTextGlobalTypoSwitcher, fontWeight: value && false } })}

												fontStyle={buttonTextFontStyle}
												onChangeFontStyle={(value) => setAttributes({ buttonTextFontStyle: value, buttonTextGlobalTypoSwitcher: { ...buttonTextGlobalTypoSwitcher, fontStyle: value && false } })}

												textTransform={buttonTextTransform}
												onChangeTextTransform={(value) => setAttributes({ buttonTextTransform: value, buttonTextGlobalTypoSwitcher: { ...buttonTextGlobalTypoSwitcher, textTransform: value && false } })}

												textDecoration={buttonTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ buttonTextDecoration: value, buttonTextGlobalTypoSwitcher: { ...buttonTextGlobalTypoSwitcher, textDecoration: value && false } })}

												letterSpacing={buttonTextLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ buttonTextLetterSpacing: value, buttonTextGlobalTypoSwitcher: { ...buttonTextGlobalTypoSwitcher, letterSpacing: value && false } })}

												letterSpacingUnits={buttonTextLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ buttonTextLetterSpacingUnits: value })}

												lineHeight={buttonTextLineHeight}
												onChangeLineHeight={(value) => setAttributes({ buttonTextLineHeight: value, buttonTextGlobalTypoSwitcher: { ...buttonTextGlobalTypoSwitcher, lineHeight: value && false } })}

												lineHeightUnits={buttonTextLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ buttonTextLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>

											<FB_SwitcherControl
												label={__("Text Color", "frontis-blocks")}
												globalSwitcher={buttonTextColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ buttonTextColorSwitcher: value })}
											/>

											{buttonTextColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={buttonTextColor}
													setGlobalColor={(value) => setAttributes({ buttonTextColor: value === undefined ? '' : value })}
												/>
											)}

											{buttonTextColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={buttonTextColorHover}
													setGlobalColor={(value) => setAttributes({ buttonTextColorHover: value })}
												/>
											)}

											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={buttonBorder}
												options={BORDER_STYLES}
												onChange={(value) => setAttributes({ buttonBorder: value })}
											/>

											<FB_SwitcherControl
												label={__("Border Color", "frontis-blocks")}
												globalSwitcher={buttonBorderColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ buttonBorderColorSwitcher: value })}
											/>

											{buttonBorderColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={buttonBorderColor}
													setGlobalColor={(value) => setAttributes({ buttonBorderColor: value === undefined ? '' : value })}
												/>
											)}

											{buttonBorderColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={buttonBorderColorHover}
													setGlobalColor={(value) => setAttributes({ buttonBorderColorHover: value })}
												/>
											)}

											<FB_Spacing
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleButtonBorderUnitsHandler}
												spacingUnits={buttonBorderUnits}
												spacingDesktop={buttonBorderDesktop}
												spacingTablet={buttonBorderTablet}
												spacingMobile={buttonBorderMobile}
												handleSpacingUnitHandler={handleButtonBorderUnitChange}
												spacingCombineBtn={buttonBorderLink}
												spacingCombineBtnHandler={handleButtonBorderCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleButtonBorderRadiusUnitsHandler}
												spacingUnits={buttonBorderRadiusUnits}
												spacingDesktop={buttonBorderRadiusDesktop}
												spacingTablet={buttonBorderRadiusTablet}
												spacingMobile={buttonBorderRadiusMobile}
												handleSpacingUnitHandler={handleButtonBorderRadiusUnitChange}
												spacingCombineBtn={buttonBorderRadiusLink}
												spacingCombineBtnHandler={handleButtonBorderRadiusCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleButtonPaddingUnitsHandler}
												spacingUnits={buttonPaddingUnits}
												spacingDesktop={buttonPaddingDesktop}
												spacingTablet={buttonPaddingTablet}
												spacingMobile={buttonPaddingMobile}
												handleSpacingUnitHandler={handleButtonPaddingUnitChange}
												spacingCombineBtn={buttonPaddingLink}
												spacingCombineBtnHandler={handleButtonPaddingCombineBtn}
												setAttributes={setAttributes}
											/>
										</PanelBody>

										{(searchIconAlign === 'icon-text') && (
											<PanelBody
												title={__("Icon Styles", "frontis-blocks")}
												initialOpen={true}
											>
												<FB_Range
													min={1}
													max={200}
													label={__("Icon Size", "frontis-blocks")}
													rangeValue={searchIconSize}
													onChangeHandler={(value) => setAttributes({ searchIconSize: value })}
													rangeUnitHandler={(value) => setAttributes({ searchIconSizeUnits: value })}
													deviceType={deviceType}
													units={searchIconSizeUnits}
													setAttributes={setAttributes}
													rangeStep={1}
													resetFallbackValue={25}
												/>

												<FB_SwitcherControl
													label={__("Icon Color", "frontis-blocks")}
													globalSwitcher={searchIconColorSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ searchIconColorSwitcher: value })}
												/>

												{searchIconColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={searchIconColor}
														setGlobalColor={(value) => setAttributes({ searchIconColor: value === undefined ? '' : value })}
													/>
												)}

												{searchIconColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={searchIconHoverColor}
														setGlobalColor={(value) => setAttributes({ searchIconHoverColor: value === undefined ? '' : value })}
													/>
												)}

												<FB_SwitcherControl
													label={__("Icon Rotation", "frontis-blocks")}
													globalSwitcher={searchIconRotateSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ searchIconRotateSwitcher: value })}
												/>

												{searchIconRotateSwitcher === 'normal' && (
													<FB_Range
														min={-360}
														max={360}
														label={__("Icon Rotation", "frontis-blocks")}
														rangeValue={searchIconRotate}
														onChangeHandler={(value) => setAttributes({ searchIconRotate: value === 0 ? undefined : value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														isRangeUnit={false}

													/>
												)}

												{searchIconRotateSwitcher === 'hover' && (
													<FB_Range
														min={-360}
														max={360}
														label={__("Icon Rotation", "frontis-blocks")}
														rangeValue={searchIconRotateHover}
														onChangeHandler={(value) => setAttributes({ searchIconRotateHover: value === 0 ? undefined : value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														isRangeUnit={false}
													/>
												)}

											</PanelBody>
										)}
										{(searchIconAlign === 'image') && (
											<PanelBody
												title={__("Image Styles", "frontis-blocks")}
												initialOpen={true}
											>
												<FB_Range
													min={1}
													max={200}
													label={__("Image Width", "frontis-blocks")}
													rangeValue={searchIconImageWidth}
													onChangeHandler={(value) => setAttributes({ searchIconImageWidth: value })}
													rangeUnitHandler={(value) => setAttributes({ searchIconImageWidthUnits: value })}
													deviceType={deviceType}
													units={searchIconImageWidthUnits}
													setAttributes={setAttributes}
													rangeStep={1}
													resetFallbackValue={20}
												/>

												<FB_Range
													min={1}
													max={200}
													label={__("Image Height", "frontis-blocks")}
													rangeValue={searchIconImageHeight}
													onChangeHandler={(value) => setAttributes({ searchIconImageHeight: value })}
													rangeUnitHandler={(value) => setAttributes({ searchIconImageHeightUnits: value })}
													deviceType={deviceType}
													units={searchIconImageHeightUnits}
													setAttributes={setAttributes}
													rangeStep={1}
													resetFallbackValue={20}
												/>

												<FB_SwitcherControl
													label={__("Image Rotation", "frontis-blocks")}
													globalSwitcher={searchIconImageRotateSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ searchIconImageRotateSwitcher: value })}
												/>

												{searchIconImageRotateSwitcher === 'normal' && (
													<FB_Range
														min={-360}
														max={360}
														label={__("Image Rotation", "frontis-blocks")}
														rangeValue={searchIconImageRotate}
														onChangeHandler={(value) => setAttributes({ searchIconImageRotate: value === 0 ? undefined : value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														isRangeUnit={false}

													/>
												)}

												{searchIconImageRotateSwitcher === 'hover' && (
													<FB_Range
														min={-360}
														max={360}
														label={__("Image Rotation", "frontis-blocks")}
														rangeValue={searchIconImageRotateHover}
														onChangeHandler={(value) => setAttributes({ searchIconImageRotateHover: value === 0 ? undefined : value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														isRangeUnit={false}
													/>
												)}
											</PanelBody>
										)}

										<PanelBody title={__("Search Field", "frontis-blocks")} initialOpen={false}>

											<FB_TypographyControl
												globalTypoControlActive={true}
												globalTypoSwitcher={inputFieldTextGlobalTypoSwitcher}
												storeGlobalTypographyData={(value) => setAttributes({ inputFieldTextGlobalTypographyData: value })}

												globalTypoType={inputFieldTextGlobalTypoType}
												onChangeGlobalTypoType={(value) => {
													setAttributes({
														inputFieldTextGlobalTypoType: value,
														inputFieldTextGlobalTypoSwitcher: value === 'default' ? { ...inputFieldTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...inputFieldTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
													})
												}}

												globalTypoOption={inputFieldTextGlobalTypoOption}
												onChangeGlobalTypoOption={(value) => setAttributes({ inputFieldTextGlobalTypoOption: value })}

												fontFamily={inputFieldTextFontFamily}
												onChangeFontFamily={(value) => setAttributes({ inputFieldTextFontFamily: value, inputFieldTextGlobalTypoSwitcher: { ...inputFieldTextGlobalTypoSwitcher, fontFamily: value && false } })}

												fontSize={inputFieldTextFontSize}
												onChangeFontSize={(value) => setAttributes({ inputFieldTextFontSize: value, inputFieldTextGlobalTypoSwitcher: { ...inputFieldTextGlobalTypoSwitcher, fontSize: value && false } })}

												fontSizeUnits={inputFieldTextFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ inputFieldTextFontSizeUnits: value })}

												fontWeight={inputFieldTextFontWeight}
												onChangeFontWeight={(value) => setAttributes({ inputFieldTextFontWeight: value, inputFieldTextGlobalTypoSwitcher: { ...inputFieldTextGlobalTypoSwitcher, fontWeight: value && false } })}

												fontStyle={inputFieldTextFontStyle}
												onChangeFontStyle={(value) => setAttributes({ inputFieldTextFontStyle: value, inputFieldTextGlobalTypoSwitcher: { ...inputFieldTextGlobalTypoSwitcher, fontStyle: value && false } })}

												textTransform={inputFieldTextTransform}
												onChangeTextTransform={(value) => setAttributes({ inputFieldTextTransform: value, inputFieldTextGlobalTypoSwitcher: { ...inputFieldTextGlobalTypoSwitcher, textTransform: value && false } })}

												textDecoration={inputFieldTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ inputFieldTextDecoration: value, inputFieldTextGlobalTypoSwitcher: { ...inputFieldTextGlobalTypoSwitcher, textDecoration: value && false } })}

												letterSpacing={inputFieldTextLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ inputFieldTextLetterSpacing: value, inputFieldTextGlobalTypoSwitcher: { ...inputFieldTextGlobalTypoSwitcher, letterSpacing: value && false } })}

												letterSpacingUnits={inputFieldTextLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ inputFieldTextLetterSpacingUnits: value })}

												lineHeight={inputFieldTextLineHeight}
												onChangeLineHeight={(value) => setAttributes({ inputFieldTextLineHeight: value, inputFieldTextGlobalTypoSwitcher: { ...inputFieldTextGlobalTypoSwitcher, lineHeight: value && false } })}

												lineHeightUnits={inputFieldTextLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ inputFieldTextLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>

											<FB_SwitcherControl
												label={__("Text Color", "frontis-blocks")}
												globalSwitcher={inputFieldTextColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ inputFieldTextColorSwitcher: value })}
											/>

											{inputFieldTextColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={inputFieldTextColor}
													setGlobalColor={(value) => setAttributes({ inputFieldTextColor: value === undefined ? '' : value })}
												/>
											)}

											{inputFieldTextColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={inputFieldTextColorHover}
													setGlobalColor={(value) => setAttributes({ inputFieldTextColorHover: value })}
												/>
											)}

											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={inputFieldBorder}
												options={BORDER_STYLES}
												onChange={(value) => setAttributes({ inputFieldBorder: value })}
											/>

											<FB_SwitcherControl
												label={__("Border Color", "frontis-blocks")}
												globalSwitcher={inputFieldBorderColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ inputFieldBorderColorSwitcher: value })}
											/>

											{inputFieldBorderColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={inputFieldBorderColor}
													setGlobalColor={(value) => setAttributes({ inputFieldBorderColor: value === undefined ? '' : value })}
												/>
											)}

											{inputFieldBorderColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={inputFieldBorderColorHover}
													setGlobalColor={(value) => setAttributes({ inputFieldBorderColorHover: value })}
												/>
											)}

											<FB_Spacing
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleInputFieldBorderUnitsHandler}
												spacingUnits={inputFieldBorderUnits}
												spacingDesktop={inputFieldBorderDesktop}
												spacingTablet={inputFieldBorderTablet}
												spacingMobile={inputFieldBorderMobile}
												handleSpacingUnitHandler={handleInputFieldBorderUnitChange}
												spacingCombineBtn={inputFieldBorderLink}
												spacingCombineBtnHandler={handleInputFieldBorderCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleInputFieldBorderRadiusUnitsHandler}
												spacingUnits={inputFieldBorderRadiusUnits}
												spacingDesktop={inputFieldBorderRadiusDesktop}
												spacingTablet={inputFieldBorderRadiusTablet}
												spacingMobile={inputFieldBorderRadiusMobile}
												handleSpacingUnitHandler={handleInputFieldBorderRadiusUnitChange}
												spacingCombineBtn={inputFieldBorderRadiusLink}
												spacingCombineBtnHandler={handleInputFieldBorderRadiusCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleInputFieldPaddingUnitsHandler}
												spacingUnits={inputFieldPaddingUnits}
												spacingDesktop={inputFieldPaddingDesktop}
												spacingTablet={inputFieldPaddingTablet}
												spacingMobile={inputFieldPaddingMobile}
												handleSpacingUnitHandler={handleInputFieldPaddingUnitChange}
												spacingCombineBtn={inputFieldPaddingLink}
												spacingCombineBtnHandler={handleInputFieldPaddingCombineBtn}
												setAttributes={setAttributes}
											/>
										</PanelBody>

										<PanelBody title={__("Search Result", "frontis-blocks")} initialOpen={false}>
											<FB_SwitcherControl
												label={__("Background Color", "frontis-blocks")}
												globalSwitcher={searchFieldBgColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ searchFieldBgColorSwitcher: value })}
											/>

											{
												searchFieldBgColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={searchFieldBgColor}
														setGlobalColor={(value) => setAttributes({ searchFieldBgColor: value === undefined ? '' : value })}
													/>
												)
											}

											{
												searchFieldBgColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={searchFieldBgColorHover}
														setGlobalColor={(value) => setAttributes({ searchFieldBgColorHover: value })}
													/>
												)
											}

											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={searchFieldBorder}
												options={BORDER_STYLES}
												onChange={(value) => setAttributes({ searchFieldBorder: value })}
											/>

											<FB_SwitcherControl
												label={__("Border Color", "frontis-blocks")}
												globalSwitcher={searchFieldBorderColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ searchFieldBorderColorSwitcher: value })}
											/>

											{
												searchFieldBorderColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={searchFieldBorderColor}
														setGlobalColor={(value) => setAttributes({ searchFieldBorderColor: value === undefined ? '' : value })}
													/>
												)
											}

											{
												searchFieldBorderColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={searchFieldBorderColorHover}
														setGlobalColor={(value) => setAttributes({ searchFieldBorderColorHover: value })}
													/>
												)
											}

											<FB_Spacing
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handlesearchFieldBorderUnitsHandler}
												spacingUnits={searchFieldBorderUnits}
												spacingDesktop={searchFieldBorderDesktop}
												spacingTablet={searchFieldBorderTablet}
												spacingMobile={searchFieldBorderMobile}
												handleSpacingUnitHandler={handlesearchFieldBorderUnitChange}
												spacingCombineBtn={searchFieldBorderLink}
												spacingCombineBtnHandler={handlesearchFieldBorderCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handlesearchFieldBorderRadiusUnitsHandler}
												spacingUnits={searchFieldBorderRadiusUnits}
												spacingDesktop={searchFieldBorderRadiusDesktop}
												spacingTablet={searchFieldBorderRadiusTablet}
												spacingMobile={searchFieldBorderRadiusMobile}
												handleSpacingUnitHandler={handlesearchFieldBorderRadiusUnitChange}
												spacingCombineBtn={searchFieldBorderRadiusLink}
												spacingCombineBtnHandler={handlesearchFieldBorderRadiusCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handlesearchFieldPaddingUnitsHandler}
												spacingUnits={searchFieldPaddingUnits}
												spacingDesktop={searchFieldPaddingDesktop}
												spacingTablet={searchFieldPaddingTablet}
												spacingMobile={searchFieldPaddingMobile}
												handleSpacingUnitHandler={handlesearchFieldPaddingUnitChange}
												spacingCombineBtn={searchFieldPaddingLink}
												spacingCombineBtnHandler={handlesearchFieldPaddingCombineBtn}
												setAttributes={setAttributes}
											/>
										</PanelBody>

										<PanelBody title={__("Result Item", "frontis-blocks")} initialOpen={false}>
											<FB_SwitcherControl
												label={__("Background Color", "frontis-blocks")}
												globalSwitcher={searchFieldItemColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ searchFieldItemColorSwitcher: value })}
											/>

											{
												searchFieldItemColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={searchFieldItemColor}
														setGlobalColor={(value) => setAttributes({ searchFieldItemColor: value === undefined ? '' : value })}
													/>
												)
											}

											{
												searchFieldItemColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={searchFieldItemColorHover}
														setGlobalColor={(value) => setAttributes({ searchFieldItemColorHover: value })}
													/>
												)
											}

											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={searchFieldItemBorder}
												options={BORDER_STYLES}
												onChange={(value) => setAttributes({ searchFieldItemBorder: value })}
											/>

											<FB_SwitcherControl
												label={__("Border Color", "frontis-blocks")}
												globalSwitcher={searchFieldItemBorderColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ searchFieldItemBorderColorSwitcher: value })}
											/>

											{
												searchFieldItemBorderColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={searchFieldItemBorderColor}
														setGlobalColor={(value) => setAttributes({ searchFieldItemBorderColor: value === undefined ? '' : value })}
													/>
												)
											}

											{
												searchFieldItemBorderColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={searchFieldItemBorderColorHover}
														setGlobalColor={(value) => setAttributes({ searchFieldItemBorderColorHover: value })}
													/>
												)
											}

											<FB_Spacing
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handlesearchFieldItemBorderUnitsHandler}
												spacingUnits={searchFieldItemBorderUnits}
												spacingDesktop={searchFieldItemBorderDesktop}
												spacingTablet={searchFieldItemBorderTablet}
												spacingMobile={searchFieldItemBorderMobile}
												handleSpacingUnitHandler={handlesearchFieldItemBorderUnitChange}
												spacingCombineBtn={searchFieldItemBorderLink}
												spacingCombineBtnHandler={handlesearchFieldItemBorderCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handlesearchFieldItemBorderRadiusUnitsHandler}
												spacingUnits={searchFieldItemBorderRadiusUnits}
												spacingDesktop={searchFieldItemBorderRadiusDesktop}
												spacingTablet={searchFieldItemBorderRadiusTablet}
												spacingMobile={searchFieldItemBorderRadiusMobile}
												handleSpacingUnitHandler={handlesearchFieldItemBorderRadiusUnitChange}
												spacingCombineBtn={searchFieldItemBorderRadiusLink}
												spacingCombineBtnHandler={handlesearchFieldItemBorderRadiusCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handlesearchFieldItemPaddingUnitsHandler}
												spacingUnits={searchFieldItemPaddingUnits}
												spacingDesktop={searchFieldItemPaddingDesktop}
												spacingTablet={searchFieldItemPaddingTablet}
												spacingMobile={searchFieldItemPaddingMobile}
												handleSpacingUnitHandler={handlesearchFieldItemPaddingUnitChange}
												spacingCombineBtn={searchFieldItemPaddingLink}
												spacingCombineBtnHandler={handlesearchFieldItemPaddingCombineBtn}
												setAttributes={setAttributes}
											/>
										</PanelBody>

										<PanelBody title={__("Item Title", "frontis-blocks")} initialOpen={false}>
											<FB_TypographyControl
												globalTypoControlActive={true}
												globalTypoSwitcher={searchFieldItemTitleGlobalTypoSwitcher}
												storeGlobalTypographyData={(value) => setAttributes({ searchFieldItemTitleGlobalTypographyData: value })}

												globalTypoType={searchFieldItemTitleGlobalTypoType}
												onChangeGlobalTypoType={(value) => {
													setAttributes({
														searchFieldItemTitleGlobalTypoType: value,
														searchFieldItemTitleGlobalTypoSwitcher: value === 'default' ? { ...searchFieldItemTitleGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...searchFieldItemTitleGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
													})
												}}

												globalTypoOption={searchFieldItemTitleGlobalTypoOption}
												onChangeGlobalTypoOption={(value) => setAttributes({ searchFieldItemTitleGlobalTypoOption: value })}

												fontFamily={searchFieldItemTitleFontFamily}
												onChangeFontFamily={(value) => setAttributes({ searchFieldItemTitleFontFamily: value, searchFieldItemTitleGlobalTypoSwitcher: { ...searchFieldItemTitleGlobalTypoSwitcher, fontFamily: value && false } })}

												fontSize={searchFieldItemTitleFontSize}
												onChangeFontSize={(value) => setAttributes({ searchFieldItemTitleFontSize: value, searchFieldItemTitleGlobalTypoSwitcher: { ...searchFieldItemTitleGlobalTypoSwitcher, fontSize: value && false } })}

												fontSizeUnits={searchFieldItemTitleFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ searchFieldItemTitleFontSizeUnits: value })}

												fontWeight={searchFieldItemTitleFontWeight}
												onChangeFontWeight={(value) => setAttributes({ searchFieldItemTitleFontWeight: value, searchFieldItemTitleGlobalTypoSwitcher: { ...searchFieldItemTitleGlobalTypoSwitcher, fontWeight: value && false } })}

												fontStyle={searchFieldItemTitleFontStyle}
												onChangeFontStyle={(value) => setAttributes({ searchFieldItemTitleFontStyle: value, searchFieldItemTitleGlobalTypoSwitcher: { ...searchFieldItemTitleGlobalTypoSwitcher, fontStyle: value && false } })}

												textTransform={searchFieldItemTitleTransform}
												onChangeTextTransform={(value) => setAttributes({ searchFieldItemTitleTransform: value, searchFieldItemTitleGlobalTypoSwitcher: { ...searchFieldItemTitleGlobalTypoSwitcher, textTransform: value && false } })}

												textDecoration={searchFieldItemTitleDecoration}
												onChangeTextDecoration={(value) => setAttributes({ searchFieldItemTitleDecoration: value, searchFieldItemTitleGlobalTypoSwitcher: { ...searchFieldItemTitleGlobalTypoSwitcher, textDecoration: value && false } })}

												letterSpacing={searchFieldItemTitleLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ searchFieldItemTitleLetterSpacing: value, searchFieldItemTitleGlobalTypoSwitcher: { ...searchFieldItemTitleGlobalTypoSwitcher, letterSpacing: value && false } })}

												letterSpacingUnits={searchFieldItemTitleLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ searchFieldItemTitleLetterSpacingUnits: value })}

												lineHeight={searchFieldItemTitleLineHeight}
												onChangeLineHeight={(value) => setAttributes({ searchFieldItemTitleLineHeight: value, searchFieldItemTitleGlobalTypoSwitcher: { ...searchFieldItemTitleGlobalTypoSwitcher, lineHeight: value && false } })}

												lineHeightUnits={searchFieldItemTitleLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ searchFieldItemTitleLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>
											<FB_SwitcherControl
												label={__("Title Color", "frontis-blocks")}
												globalSwitcher={searchFieldItemTitleColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ searchFieldItemTitleColorSwitcher: value })}
											/>

											{
												searchFieldItemTitleColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={searchFieldItemTitleColor}
														setGlobalColor={(value) => setAttributes({ searchFieldItemTitleColor: value === undefined ? '' : value })}
													/>
												)
											}

											{
												searchFieldItemTitleColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={searchFieldItemTitleColorHover}
														setGlobalColor={(value) => setAttributes({ searchFieldItemTitleColorHover: value })}
													/>
												)
											}

											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={searchFieldItemTitleBorder}
												options={BORDER_STYLES}
												onChange={(value) => setAttributes({ searchFieldItemTitleBorder: value })}
											/>

											<FB_SwitcherControl
												label={__("Border Color", "frontis-blocks")}
												globalSwitcher={searchFieldItemTitleBorderColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ searchFieldItemTitleBorderColorSwitcher: value })}
											/>

											{
												searchFieldItemTitleBorderColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={searchFieldItemTitleBorderColor}
														setGlobalColor={(value) => setAttributes({ searchFieldItemTitleBorderColor: value === undefined ? '' : value })}
													/>
												)
											}

											{
												searchFieldItemTitleBorderColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={searchFieldItemTitleBorderColorHover}
														setGlobalColor={(value) => setAttributes({ searchFieldItemTitleBorderColorHover: value })}
													/>
												)
											}

											<FB_Spacing
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handlesearchFieldItemTitleBorderUnitsHandler}
												spacingUnits={searchFieldItemTitleBorderUnits}
												spacingDesktop={searchFieldItemTitleBorderDesktop}
												spacingTablet={searchFieldItemTitleBorderTablet}
												spacingMobile={searchFieldItemTitleBorderMobile}
												handleSpacingUnitHandler={handlesearchFieldItemTitleBorderUnitChange}
												spacingCombineBtn={searchFieldItemTitleBorderLink}
												spacingCombineBtnHandler={handlesearchFieldItemTitleBorderCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handlesearchFieldItemTitleBorderRadiusUnitsHandler}
												spacingUnits={searchFieldItemTitleBorderRadiusUnits}
												spacingDesktop={searchFieldItemTitleBorderRadiusDesktop}
												spacingTablet={searchFieldItemTitleBorderRadiusTablet}
												spacingMobile={searchFieldItemTitleBorderRadiusMobile}
												handleSpacingUnitHandler={handlesearchFieldItemTitleBorderRadiusUnitChange}
												spacingCombineBtn={searchFieldItemTitleBorderRadiusLink}
												spacingCombineBtnHandler={handlesearchFieldItemTitleBorderRadiusCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handlesearchFieldItemTitlePaddingUnitsHandler}
												spacingUnits={searchFieldItemTitlePaddingUnits}
												spacingDesktop={searchFieldItemTitlePaddingDesktop}
												spacingTablet={searchFieldItemTitlePaddingTablet}
												spacingMobile={searchFieldItemTitlePaddingMobile}
												handleSpacingUnitHandler={handlesearchFieldItemTitlePaddingUnitChange}
												spacingCombineBtn={searchFieldItemTitlePaddingLink}
												spacingCombineBtnHandler={handlesearchFieldItemTitlePaddingCombineBtn}
												setAttributes={setAttributes}
											/>
										</PanelBody>

										<PanelBody title={__("Item Meta", "frontis-blocks")} initialOpen={false}>
											<FB_TypographyControl
												globalTypoControlActive={true}
												globalTypoSwitcher={searchFieldItemMetaGlobalTypoSwitcher}
												storeGlobalTypographyData={(value) => setAttributes({ searchFieldItemMetaGlobalTypographyData: value })}

												globalTypoType={searchFieldItemMetaGlobalTypoType}
												onChangeGlobalTypoType={(value) => {
													setAttributes({
														searchFieldItemMetaGlobalTypoType: value,
														searchFieldItemMetaGlobalTypoSwitcher: value === 'default' ? { ...searchFieldItemMetaGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...searchFieldItemMetaGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
													})
												}}

												globalTypoOption={searchFieldItemMetaGlobalTypoOption}
												onChangeGlobalTypoOption={(value) => setAttributes({ searchFieldItemMetaGlobalTypoOption: value })}

												fontFamily={searchFieldItemMetaFontFamily}
												onChangeFontFamily={(value) => setAttributes({ searchFieldItemMetaFontFamily: value, searchFieldItemMetaGlobalTypoSwitcher: { ...searchFieldItemMetaGlobalTypoSwitcher, fontFamily: value && false } })}

												fontSize={searchFieldItemMetaFontSize}
												onChangeFontSize={(value) => setAttributes({ searchFieldItemMetaFontSize: value, searchFieldItemMetaGlobalTypoSwitcher: { ...searchFieldItemMetaGlobalTypoSwitcher, fontSize: value && false } })}

												fontSizeUnits={searchFieldItemMetaFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ searchFieldItemMetaFontSizeUnits: value })}

												fontWeight={searchFieldItemMetaFontWeight}
												onChangeFontWeight={(value) => setAttributes({ searchFieldItemMetaFontWeight: value, searchFieldItemMetaGlobalTypoSwitcher: { ...searchFieldItemMetaGlobalTypoSwitcher, fontWeight: value && false } })}

												fontStyle={searchFieldItemMetaFontStyle}
												onChangeFontStyle={(value) => setAttributes({ searchFieldItemMetaFontStyle: value, searchFieldItemMetaGlobalTypoSwitcher: { ...searchFieldItemMetaGlobalTypoSwitcher, fontStyle: value && false } })}

												textTransform={searchFieldItemMetaTransform}
												onChangeTextTransform={(value) => setAttributes({ searchFieldItemMetaTransform: value, searchFieldItemMetaGlobalTypoSwitcher: { ...searchFieldItemMetaGlobalTypoSwitcher, textTransform: value && false } })}

												textDecoration={searchFieldItemMetaDecoration}
												onChangeTextDecoration={(value) => setAttributes({ searchFieldItemMetaDecoration: value, searchFieldItemMetaGlobalTypoSwitcher: { ...searchFieldItemMetaGlobalTypoSwitcher, textDecoration: value && false } })}

												letterSpacing={searchFieldItemMetaLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ searchFieldItemMetaLetterSpacing: value, searchFieldItemMetaGlobalTypoSwitcher: { ...searchFieldItemMetaGlobalTypoSwitcher, letterSpacing: value && false } })}

												letterSpacingUnits={searchFieldItemMetaLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ searchFieldItemMetaLetterSpacingUnits: value })}

												lineHeight={searchFieldItemMetaLineHeight}
												onChangeLineHeight={(value) => setAttributes({ searchFieldItemMetaLineHeight: value, searchFieldItemMetaGlobalTypoSwitcher: { ...searchFieldItemMetaGlobalTypoSwitcher, lineHeight: value && false } })}

												lineHeightUnits={searchFieldItemMetaLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ searchFieldItemMetaLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>
											<FB_SwitcherControl
												label={__("Meta Color", "frontis-blocks")}
												globalSwitcher={searchFieldItemMetaColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ searchFieldItemMetaColorSwitcher: value })}
											/>

											{
												searchFieldItemMetaColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={searchFieldItemMetaColor}
														setGlobalColor={(value) => setAttributes({ searchFieldItemMetaColor: value === undefined ? '' : value })}
													/>
												)
											}

											{
												searchFieldItemMetaColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={searchFieldItemMetaColorHover}
														setGlobalColor={(value) => setAttributes({ searchFieldItemMetaColorHover: value })}
													/>
												)
											}

											<FB_Range
												min={0}
												max={resultMetaGapUnits === '%' ? 100 : 1000}
												label={__("Gap", "frontis-blocks")}
												rangeValue={resultMetaGap}
												onChangeHandler={(value) =>
													setAttributes({ resultMetaGap: value })
												}
												rangeUnitHandler={(value) =>
													setAttributes({ resultMetaGapUnits: value })
												}
												deviceType={deviceType}
												units={resultMetaGapUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={""}
											/>

											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={searchFieldItemMetaBorder}
												options={BORDER_STYLES}
												onChange={(value) => setAttributes({ searchFieldItemMetaBorder: value })}
											/>

											<FB_SwitcherControl
												label={__("Border Color", "frontis-blocks")}
												globalSwitcher={searchFieldItemMetaBorderColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ searchFieldItemMetaBorderColorSwitcher: value })}
											/>

											{
												searchFieldItemMetaBorderColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={searchFieldItemMetaBorderColor}
														setGlobalColor={(value) => setAttributes({ searchFieldItemMetaBorderColor: value === undefined ? '' : value })}
													/>
												)
											}

											{
												searchFieldItemMetaBorderColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={searchFieldItemMetaBorderColorHover}
														setGlobalColor={(value) => setAttributes({ searchFieldItemMetaBorderColorHover: value })}
													/>
												)
											}

											<FB_Spacing
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handlesearchFieldItemMetaBorderUnitsHandler}
												spacingUnits={searchFieldItemMetaBorderUnits}
												spacingDesktop={searchFieldItemMetaBorderDesktop}
												spacingTablet={searchFieldItemMetaBorderTablet}
												spacingMobile={searchFieldItemMetaBorderMobile}
												handleSpacingUnitHandler={handlesearchFieldItemMetaBorderUnitChange}
												spacingCombineBtn={searchFieldItemMetaBorderLink}
												spacingCombineBtnHandler={handlesearchFieldItemMetaBorderCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handlesearchFieldItemMetaBorderRadiusUnitsHandler}
												spacingUnits={searchFieldItemMetaBorderRadiusUnits}
												spacingDesktop={searchFieldItemMetaBorderRadiusDesktop}
												spacingTablet={searchFieldItemMetaBorderRadiusTablet}
												spacingMobile={searchFieldItemMetaBorderRadiusMobile}
												handleSpacingUnitHandler={handlesearchFieldItemMetaBorderRadiusUnitChange}
												spacingCombineBtn={searchFieldItemMetaBorderRadiusLink}
												spacingCombineBtnHandler={handlesearchFieldItemMetaBorderRadiusCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handlesearchFieldItemMetaPaddingUnitsHandler}
												spacingUnits={searchFieldItemMetaPaddingUnits}
												spacingDesktop={searchFieldItemMetaPaddingDesktop}
												spacingTablet={searchFieldItemMetaPaddingTablet}
												spacingMobile={searchFieldItemMetaPaddingMobile}
												handleSpacingUnitHandler={handlesearchFieldItemMetaPaddingUnitChange}
												spacingCombineBtn={searchFieldItemMetaPaddingLink}
												spacingCombineBtnHandler={handlesearchFieldItemMetaPaddingCombineBtn}
												setAttributes={setAttributes}
											/>
										</PanelBody>

										<PanelBody title={__("Meta Divider", "frontis-blocks")} initialOpen={false}>
											<FB_SwitcherControl
												label={__("Color", "frontis-blocks")}
												globalSwitcher={metaDividerColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ metaDividerColorSwitcher: value })}
											/>

											{
												metaDividerColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={metaDividerColor}
														setGlobalColor={(value) => setAttributes({ metaDividerColor: value === undefined ? '' : value })}
													/>
												)
											}

											{
												metaDividerColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={metaDividerColorHover}
														setGlobalColor={(value) => setAttributes({ metaDividerColorHover: value })}
													/>
												)
											}

											<FB_Range
												min={0}
												max={metaDividerSizeUnits === '%' ? 100 : 1000}
												label={__("Size", "frontis-blocks")}
												rangeValue={metaDividerSize}
												onChangeHandler={(value) =>
													setAttributes({ metaDividerSize: value })
												}
												rangeUnitHandler={(value) =>
													setAttributes({ metaDividerSizeUnits: value })
												}
												deviceType={deviceType}
												units={metaDividerSizeUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={""}
											/>
										</PanelBody>

										<PanelBody title={__("View All", "frontis-blocks")} initialOpen={false}>
											<FB_TypographyControl
												globalTypoControlActive={true}
												globalTypoSwitcher={SearchViewAllResultsGlobalTypoSwitcher}
												storeGlobalTypographyData={(value) => setAttributes({ SearchViewAllResultsGlobalTypographyData: value })}

												globalTypoType={SearchViewAllResultsGlobalTypoType}
												onChangeGlobalTypoType={(value) => {
													setAttributes({
														SearchViewAllResultsGlobalTypoType: value,
														SearchViewAllResultsGlobalTypoSwitcher: value === 'default' ? { ...SearchViewAllResultsGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...SearchViewAllResultsGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
													})
												}}

												globalTypoOption={SearchViewAllResultsGlobalTypoOption}
												onChangeGlobalTypoOption={(value) => setAttributes({ SearchViewAllResultsGlobalTypoOption: value })}

												fontFamily={SearchViewAllResultsFontFamily}
												onChangeFontFamily={(value) => setAttributes({ SearchViewAllResultsFontFamily: value, SearchViewAllResultsGlobalTypoSwitcher: { ...SearchViewAllResultsGlobalTypoSwitcher, fontFamily: value && false } })}

												fontSize={SearchViewAllResultsFontSize}
												onChangeFontSize={(value) => setAttributes({ SearchViewAllResultsFontSize: value, SearchViewAllResultsGlobalTypoSwitcher: { ...SearchViewAllResultsGlobalTypoSwitcher, fontSize: value && false } })}

												fontSizeUnits={SearchViewAllResultsFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ SearchViewAllResultsFontSizeUnits: value })}

												fontWeight={SearchViewAllResultsFontWeight}
												onChangeFontWeight={(value) => setAttributes({ SearchViewAllResultsFontWeight: value, SearchViewAllResultsGlobalTypoSwitcher: { ...SearchViewAllResultsGlobalTypoSwitcher, fontWeight: value && false } })}

												fontStyle={SearchViewAllResultsFontStyle}
												onChangeFontStyle={(value) => setAttributes({ SearchViewAllResultsFontStyle: value, SearchViewAllResultsGlobalTypoSwitcher: { ...SearchViewAllResultsGlobalTypoSwitcher, fontStyle: value && false } })}

												textTransform={SearchViewAllResultsTransform}
												onChangeTextTransform={(value) => setAttributes({ SearchViewAllResultsTransform: value, SearchViewAllResultsGlobalTypoSwitcher: { ...SearchViewAllResultsGlobalTypoSwitcher, textTransform: value && false } })}

												textDecoration={SearchViewAllResultsDecoration}
												onChangeTextDecoration={(value) => setAttributes({ SearchViewAllResultsDecoration: value, SearchViewAllResultsGlobalTypoSwitcher: { ...SearchViewAllResultsGlobalTypoSwitcher, textDecoration: value && false } })}

												letterSpacing={SearchViewAllResultsLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ SearchViewAllResultsLetterSpacing: value, SearchViewAllResultsGlobalTypoSwitcher: { ...SearchViewAllResultsGlobalTypoSwitcher, letterSpacing: value && false } })}

												letterSpacingUnits={SearchViewAllResultsLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ SearchViewAllResultsLetterSpacingUnits: value })}

												lineHeight={SearchViewAllResultsLineHeight}
												onChangeLineHeight={(value) => setAttributes({ SearchViewAllResultsLineHeight: value, SearchViewAllResultsGlobalTypoSwitcher: { ...SearchViewAllResultsGlobalTypoSwitcher, lineHeight: value && false } })}

												lineHeightUnits={SearchViewAllResultsLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ SearchViewAllResultsLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>
											<FB_SwitcherControl
                                                label={__("Background Color", "frontis-blocks")}
                                                globalSwitcher={SearchViewAllResultsBgColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ SearchViewAllResultsBgColorSwitcher: value })}
                                            />

                                            {
                                                SearchViewAllResultsBgColorSwitcher === 'normal' && (
                                                    <FB_ColorControl
                                                        label={__("Normal Color", "frontis-blocks")}
                                                        globalColor={SearchViewAllResultsBgColor}
                                                        setGlobalColor={(value) => setAttributes({ SearchViewAllResultsBgColor: value === undefined ? '' : value })}
                                                    />
                                                )
                                            }

                                            {
                                                SearchViewAllResultsBgColorSwitcher === 'hover' && (
                                                    <FB_ColorControl
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        globalColor={SearchViewAllResultsBgColorHover}
                                                        setGlobalColor={(value) => setAttributes({ SearchViewAllResultsBgColorHover: value })}
                                                    />
                                                )
                                            }
											<FB_SwitcherControl
												label={__("Color", "frontis-blocks")}
												globalSwitcher={SearchViewAllResultsColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ SearchViewAllResultsColorSwitcher: value })}
											/>

											{
												SearchViewAllResultsColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={SearchViewAllResultsColor}
														setGlobalColor={(value) => setAttributes({ SearchViewAllResultsColor: value === undefined ? '' : value })}
													/>
												)
											}

											{
												SearchViewAllResultsColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={SearchViewAllResultsColorHover}
														setGlobalColor={(value) => setAttributes({ SearchViewAllResultsColorHover: value })}
													/>
												)
											}

											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={SearchViewAllResultsBorder}
												options={BORDER_STYLES}
												onChange={(value) => setAttributes({ SearchViewAllResultsBorder: value })}
											/>

											<FB_SwitcherControl
												label={__("Border Color", "frontis-blocks")}
												globalSwitcher={SearchViewAllResultsBorderColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ SearchViewAllResultsBorderColorSwitcher: value })}
											/>

											{
												SearchViewAllResultsBorderColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={SearchViewAllResultsBorderColor}
														setGlobalColor={(value) => setAttributes({ SearchViewAllResultsBorderColor: value === undefined ? '' : value })}
													/>
												)
											}

											{
												SearchViewAllResultsBorderColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={SearchViewAllResultsBorderColorHover}
														setGlobalColor={(value) => setAttributes({ SearchViewAllResultsBorderColorHover: value })}
													/>
												)
											}

											<FB_Spacing
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleSearchViewAllResultsBorderUnitsHandler}
												spacingUnits={SearchViewAllResultsBorderUnits}
												spacingDesktop={SearchViewAllResultsBorderDesktop}
												spacingTablet={SearchViewAllResultsBorderTablet}
												spacingMobile={SearchViewAllResultsBorderMobile}
												handleSpacingUnitHandler={handleSearchViewAllResultsBorderUnitChange}
												spacingCombineBtn={SearchViewAllResultsBorderLink}
												spacingCombineBtnHandler={handleSearchViewAllResultsBorderCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleSearchViewAllResultsBorderRadiusUnitsHandler}
												spacingUnits={SearchViewAllResultsBorderRadiusUnits}
												spacingDesktop={SearchViewAllResultsBorderRadiusDesktop}
												spacingTablet={SearchViewAllResultsBorderRadiusTablet}
												spacingMobile={SearchViewAllResultsBorderRadiusMobile}
												handleSpacingUnitHandler={handleSearchViewAllResultsBorderRadiusUnitChange}
												spacingCombineBtn={SearchViewAllResultsBorderRadiusLink}
												spacingCombineBtnHandler={handleSearchViewAllResultsBorderRadiusCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleSearchViewAllResultsPaddingUnitsHandler}
												spacingUnits={SearchViewAllResultsPaddingUnits}
												spacingDesktop={SearchViewAllResultsPaddingDesktop}
												spacingTablet={SearchViewAllResultsPaddingTablet}
												spacingMobile={SearchViewAllResultsPaddingMobile}
												handleSpacingUnitHandler={handleSearchViewAllResultsPaddingUnitChange}
												spacingCombineBtn={SearchViewAllResultsPaddingLink}
												spacingCombineBtnHandler={handleSearchViewAllResultsPaddingCombineBtn}
												setAttributes={setAttributes}
											/>
										</PanelBody>
									</>
								)}
								{tab.name === "advanced" && (
									<>
										<div className="fb-setting-advanced-tab-wrapper">
											<div className="fb-setting-inner-wrapper">
												<PanelBody
													title={__("Layout", "frontis-blocks")}
													initialOpen={true}
													className='fb-setting-layout-header'
												>
													<FB_Range
														min={0}
														max={10000000}
														label={__("Z Index", "frontis-blocks")}
														rangeValue={searchIconZIndex}
														onChangeHandler={(value) => setAttributes({ searchIconZIndex: value === 0 ? undefined : value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														isRangeUnit={false}

													/>
													<FB_InputControl
														label={__("CSS ID", "frontis-blocks")}
														value={searchGlobalWraperID}
														onChangeValue={(value) => setAttributes({ searchGlobalWraperID: value })}
														helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
													/>

													<FB_InputControl
														label={__("CSS Class", "frontis-blocks")}
														value={searchGlobalWraperClass}
														onChangeValue={(value) => setAttributes({ searchGlobalWraperClass: value })}
														helpText={__("Separate with spaces key.", "frontis-blocks")}
													/>
												</PanelBody>
												<PanelBody
													title={__("Custom CSS", "frontis-blocks")}
													initialOpen={false}
												>
													<FB_CustomCSSEditor
														value={searchCustomCSS}
														onChangeValue={(value) => setAttributes({ searchCustomCSS: value })}
													/>
												</PanelBody>
											</div>
										</div>
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
export default memo(Inspector);