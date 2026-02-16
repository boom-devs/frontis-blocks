import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { useEffect, useState, useMemo, memo } from "@wordpress/element";
import {
	PanelBody,
	BaseControl,
	TabPanel,
	Button,
	ButtonGroup,
	Dropdown,
	RangeControl,
	SelectControl,
	Dashicon,
	ColorPicker,
	TextControl,
	TextareaControl,
	ToggleControl,
} from "@wordpress/components";

import {
	BORDER_STYLES,
	WIDTH_STYLES,
	OVERFLOW_OP,
} from '@Constants/fbConstants';

import FB_Spacing from "@Components/spacing";
import FB_Range from "@Components/range";

import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_TypographyControl from '@Components/typography-control';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';

import "./editor.scss";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		blockID,
		// deviceType,
		contactFormGlobalZIndex,
		contactFormOverflow,
		formId,
		showPlaceholder,
		showErrorMessage,

		contactFormLabelColorSwitcher,
		contactFormLabelColor,
		contactFormLabelHoverColor,
		contactFormLabelGlobalTypoSwitcher,
		contactFormLabelGlobalTypographyData,
		contactFormLabelGlobalTypoType,
		contactFormLabelGlobalTypoOption,
		contactFormLabelFontFamily,
		contactFormLabelFontSize,
		contactFormLabelFontSizeUnits,
		contactFormLabelFontWeight,
		contactFormLabelFontStyle,
		contactFormLabelTextTransform,
		contactFormLabelTextDecoration,
		contactFormLabelLetterSpacing,
		contactFormLabelLineHeight,
		contactFormLabelLetterSpacingUnits,
		contactFormLabelLineHeightUnits,

		contactFormInputBgColor,
		contactFormInputColor,
		contactFormInputFocusColor,
		contactFormInputGlobalTypoSwitcher,
		contactFormInputGlobalTypographyData,
		contactFormInputGlobalTypoType,
		contactFormInputGlobalTypoOption,
		contactFormInputFontFamily,
		contactFormInputFontSize,
		contactFormInputFontSizeUnits,
		contactFormInputFontWeight,
		contactFormInputFontStyle,
		contactFormInputTextTransform,
		contactFormInputTextDecoration,
		contactFormInputLetterSpacing,
		contactFormInputLineHeight,
		contactFormInputLetterSpacingUnits,
		contactFormInputLineHeightUnits,

		contactFormTextIndentSize,
		contactFormTextIndentSizeUnits,
		contactFormInputWidthSize,
		contactFormInputWidthSizeUnits,
		contactFormInputHeightSize,
		contactFormInputHeightSizeUnits,
		contactFormTextareaWidthSize,
		contactFormTextareaWidthSizeUnits,
		contactFormTextareaHeightSize,
		contactFormTextareaHeightSizeUnits,
		contactFormSpacingSize,
		contactFormSpacingUnits,

		contactFormPaddingUnits,
		contactFormPaddingDesktop,
		contactFormPaddingTablet,
		contactFormPaddingMobile,
		contactFormPaddingLink,

		contactFormMarginUnits,
		contactFormMarginDesktop,
		contactFormMarginTablet,
		contactFormMarginMobile,
		contactFormMarginLink,

		contactFormBorder,
		contactFormBorderColorSwitcher,
		contactFormBorderColor,
		contactFormBorderHoverColor,
		contactFormBorderUnits,
		contactFormBorderDesktop,
		contactFormBorderTablet,
		contactFormBorderMobile,
		contactFormBorderLink,
		contactFormBorderRadiusUnits,
		contactFormBorderRadiusDesktop,
		contactFormBorderRadiusTablet,
		contactFormBorderRadiusMobile,
		contactFormBorderRadiusLink,

		contactFormFocusBorder,
		contactFormFocusBorderUnits,
		contactFormFocusBorderDesktop,
		contactFormFocusBorderTablet,
		contactFormFocusBorderMobile,
		contactFormFocusBorderLink,
		contactFormFocusBorderRadiusUnits,
		contactFormFocusBorderRadiusDesktop,
		contactFormFocusBorderRadiusTablet,
		contactFormFocusBorderRadiusMobile,
		contactFormFocusBorderRadiusLink,

		contactFormPlaceholderColor,

		contactFormSubmitAlignment,
		contactFormSubmitHeight,
		contactFormSubmitHeightUnits,
		contactFormSubmitWidthSelect,
		contactFormSubmitWidth,
		contactFormSubmitWidthUnits,
		contactFormSubmitColorSwitcher,
		contactFormSubmitColor,
		contactFormSubmitHoverColor,
		contactFormSubmitBgColorSwitcher,
		contactFormSubmitBgColor,
		contactFormSubmitBgHoverColor,
		contactFormSubmitGlobalTypoSwitcher,
		contactFormSubmitGlobalTypographyData,
		contactFormSubmitGlobalTypoType,
		contactFormSubmitGlobalTypoOption,
		contactFormSubmitFontFamily,
		contactFormSubmitFontSize,
		contactFormSubmitFontSizeUnits,
		contactFormSubmitFontWeight,
		contactFormSubmitFontStyle,
		contactFormSubmitTextTransform,
		contactFormSubmitTextDecoration,
		contactFormSubmitLetterSpacing,
		contactFormSubmitLetterSpacingUnits,
		contactFormSubmitLineHeight,
		contactFormSubmitLineHeightUnits,
		contactFormSubmitPaddingUnits,
		contactFormSubmitPaddingDesktop,
		contactFormSubmitPaddingTablet,
		contactFormSubmitPaddingMobile,
		contactFormSubmitPaddingLink,
		contactFormSubmitMarginUnits,
		contactFormSubmitMarginDesktop,
		contactFormSubmitMarginTablet,
		contactFormSubmitMarginMobile,
		contactFormSubmitMarginLink,
		contactFormSubmitBorder,
		contactFormSubmitBorderColorSwitcher,
		contactFormSubmitBorderColor,
		contactFormSubmitBorderHoverColor,
		contactFormSubmitBorderUnits,
		contactFormSubmitBorderDesktop,
		contactFormSubmitBorderTablet,
		contactFormSubmitBorderMobile,
		contactFormSubmitBorderLink,
		contactFormSubmitBorderRadiusUnits,
		contactFormSubmitBorderRadiusDesktop,
		contactFormSubmitBorderRadiusTablet,
		contactFormSubmitBorderRadiusMobile,
		contactFormSubmitBorderRadiusLink,

		contactFormSuccessColor,
		contactFormSuccessBgColor,
		contactFormSuccessGlobalTypoSwitcher,
		contactFormSuccessGlobalTypographyData,
		contactFormSuccessGlobalTypoType,
		contactFormSuccessGlobalTypoOption,
		contactFormSuccessFontFamily,
		contactFormSuccessFontSize,
		contactFormSuccessFontSizeUnits,
		contactFormSuccessFontWeight,
		contactFormSuccessFontStyle,
		contactFormSuccessTextTransform,
		contactFormSuccessTextDecoration,
		contactFormSuccessLetterSpacing,
		contactFormSuccessLetterSpacingUnits,
		contactFormSuccessLineHeight,
		contactFormSuccessLineHeightUnits,
		contactFormSuccessBorder,
		contactFormSuccessBorderColorSwitcher,
		contactFormSuccessBorderColor,
		contactFormSuccessBorderHoverColor,
		contactFormSuccessBorderUnits,
		contactFormSuccessBorderDesktop,
		contactFormSuccessBorderTablet,
		contactFormSuccessBorderMobile,
		contactFormSuccessBorderLink,
		contactFormSuccessBorderRadiusUnits,
		contactFormSuccessBorderRadiusDesktop,
		contactFormSuccessBorderRadiusTablet,
		contactFormSuccessBorderRadiusMobile,
		contactFormSuccessBorderRadiusLink,

		contactFormErrorColor,
		contactFormErrorGlobalTypoSwitcher,
		contactFormErrorGlobalTypographyData,
		contactFormErrorGlobalTypoType,
		contactFormErrorGlobalTypoOption,
		contactFormErrorFontFamily,
		contactFormErrorFontSize,
		contactFormErrorFontSizeUnits,
		contactFormErrorFontWeight,
		contactFormErrorFontStyle,
		contactFormErrorTextTransform,
		contactFormErrorTextDecoration,
		contactFormErrorLetterSpacing,
		contactFormErrorLetterSpacingUnits,
		contactFormErrorLineHeight,
		contactFormErrorLineHeightUnits,
		contactFormErrorPaddingUnits,
		contactFormErrorPaddingDesktop,
		contactFormErrorPaddingTablet,
		contactFormErrorPaddingMobile,
		contactFormErrorPaddingLink,
		contactFormErrorMarginUnits,
		contactFormErrorMarginDesktop,
		contactFormErrorMarginTablet,
		contactFormErrorMarginMobile,
		contactFormErrorMarginLink,

		contactFormGlobalPaddingUnits,
		contactFormGlobalPaddingDesktop,
		contactFormGlobalPaddingTablet,
		contactFormGlobalPaddingMobile,
		contactFormGlobalPaddingLink,
		contactFormGlobalMarginUnits,
		contactFormGlobalMarginDesktop,
		contactFormGlobalMarginTablet,
		contactFormGlobalMarginMobile,
		contactFormGlobalMarginLink,
		contactFormGlobalBgColorSwitcher,
		contactFormGlobalBgColor,
		contactFormGlobalBgHoverColor,
		contactFormGlobalBorder,
		contactFormGlobalBorderColorSwitcher,
		contactFormGlobalBorderColor,
		contactFormGlobalBorderHoverColor,
		contactFormGlobalBorderUnits,
		contactFormGlobalBorderDesktop,
		contactFormGlobalBorderTablet,
		contactFormGlobalBorderMobile,
		contactFormGlobalBorderLink,
		contactFormGlobalBorderRadiusUnits,
		contactFormGlobalBorderRadiusDesktop,
		contactFormGlobalBorderRadiusTablet,
		contactFormGlobalBorderRadiusMobile,
		contactFormGlobalBorderRadiusLink,

		contactFormGlobalBoxShadowSwitcher,
		contactFormGlobalBoxShadowValues,
		contactFormGlobalBoxShadowCssValue,
		contactFormGlobalBoxShadowHoverValues,
		contactFormGlobalBoxShadowHoverCssValue,
		blockStyle,

		contactFormDesktopSwitcher,
		contactFormTabletSwitcher,
		contactFormMobileSwitcher,

		contactFormCustomCSS,
		contactFormGlobalWraperID,
		contactFormGlobalWraperClass,

		// Position
		contactFormPositionType,
		contactFormHZOrientationType,
		contactFormVROrientationType,
		contactFormHZLeftOffset,
		contactFormHZLeftOffsetUnits,
		contactFormHZRightOffset,
		contactFormHZRightOffsetUnits,
		contactFormVRTopOffset,
		contactFormVRTopOffsetUnits,
		contactFormVRBottomOffset,
		contactFormVRBottomOffsetUnits,
	} = attributes;

	const deviceType = useDeviceType();

	const [wpCf7Form, setWpCf7Forms] = useState(
		FrontisBlocksData.contact_form7_html,
	);
	const [selectedForm, setSelectedForm] = useState();

	const modifiedFormLists = FrontisBlocksData.contact_form7_lists.map(
		(obj, i) => {
			return {
				label: obj.label,
				value: obj.value,
			};
		},
	);

	const selectWcf7Form = (wpcf7Id) => {
		setAttributes({ formId: wpcf7Id });
		setSelectedForm(wpCf7Form[formId]);
	};

	useEffect(() => {
		setSelectedForm(wpCf7Form[formId]);
	}, [formId]);

	/** Start  padding */
	const handlePaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (contactFormPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contactFormPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormPaddingMobile: {
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
						contactFormPaddingDesktop: {
							...contactFormPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormPaddingTablet: {
							...contactFormPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormPaddingMobile: {
							...contactFormPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handlePaddingCombineBtn = () => {
		setAttributes({ contactFormPaddingLink: !contactFormPaddingLink });
	};

	const handlePaddingUnitsHandler = (unit) => {
		setAttributes({
			contactFormPaddingUnits: {
				...contactFormPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	/** end  padding */
	/** End Padding */

	/** Start  margin */
	const handleMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (contactFormMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contactFormMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormMarginMobile: {
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
						contactFormMarginDesktop: {
							...contactFormMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormMarginTablet: {
							...contactFormMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormMarginMobile: {
							...contactFormMarginMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleMarginCombineBtn = () => {
		setAttributes({ contactFormMarginLink: !contactFormMarginLink });
	};

	const handleMarginUnitsHandler = (unit) => {
		setAttributes({
			contactFormMarginUnits: {
				...contactFormMarginUnits,
				[deviceType]: unit,
			},
		});
	};
	/** end  margin */
	/** End Margin */

	/** Start  border */
	const handleBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (contactFormBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contactFormBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormBorderMobile: {
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
						contactFormBorderDesktop: {
							...contactFormBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormBorderTablet: {
							...contactFormBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormBorderMobile: {
							...contactFormBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleBorderCombineBtn = () => {
		setAttributes({ contactFormBorderLink: !contactFormBorderLink });
	};

	const handleBorderUnitsHandler = (unit) => {
		setAttributes({
			contactFormBorderUnits: {
				...contactFormBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End  border */
	/** End Border */

	/** Start  border radius*/
	const handleBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (contactFormBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contactFormBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormBorderRadiusMobile: {
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
						contactFormBorderRadiusDesktop: {
							...contactFormBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormBorderRadiusTablet: {
							...contactFormBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormBorderRadiusMobile: {
							...contactFormBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleBorderRadiusCombineBtn = () => {
		setAttributes({ contactFormBorderRadiusLink: !contactFormBorderRadiusLink });
	};

	const handleBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			contactFormBorderRadiusUnits: {
				...contactFormBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** end  border */
	/** End  Border Radius */
	/** End Border Radius */

	/** Start  Focus Border */
	const handleFocusBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (contactFormFocusBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						contactFormFocusBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						contactFormFocusBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						contactFormFocusBorderMobile: {
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
					setAttributes({ contactFormFocusBorderDesktop: { ...contactFormFocusBorderDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ contactFormFocusBorderTablet: { ...contactFormFocusBorderTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ contactFormFocusBorderMobile: { ...contactFormFocusBorderMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleFocusBorderCombineBtn = () => {
		setAttributes({ contactFormFocusBorderLink: !contactFormFocusBorderLink });
	}

	const handleFocusBorderUnitsHandler = (unit) => {
		setAttributes({
			contactFormFocusBorderUnits: {
				...contactFormFocusBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End  border */
	/** End Border */

	/** Start  border radius*/
	const handleFocusBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (contactFormFocusBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						contactFormFocusBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						contactFormFocusBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						contactFormFocusBorderRadiusMobile: {
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
					setAttributes({ contactFormFocusBorderRadiusDesktop: { ...contactFormFocusBorderRadiusDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ contactFormFocusBorderRadiusTablet: { ...contactFormFocusBorderRadiusTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ contactFormFocusBorderRadiusMobile: { ...contactFormFocusBorderRadiusMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleFocusBorderRadiusCombineBtn = () => {
		setAttributes({ contactFormFocusBorderRadiusLink: !contactFormFocusBorderRadiusLink });
	}

	const handleFocusBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			contactFormFocusBorderRadiusUnits: {
				...contactFormFocusBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Focus Border */
	/** End Focus Border Radius */
	/** End Focus Border Radius */

	/** Start Submit Padding */
	const contactFormSubmitPaddingUnitsChange = (event, position) => {
		const value = event.target.value;
		if (contactFormSubmitPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contactFormSubmitPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormSubmitPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormSubmitPaddingMobile: {
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
						contactFormSubmitPaddingDesktop: {
							...contactFormSubmitPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormSubmitPaddingTablet: {
							...contactFormSubmitPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormSubmitPaddingMobile: {
							...contactFormSubmitPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const contactFormSubmitPaddingLinkBtn = () => {
		setAttributes({
			contactFormSubmitPaddingLink: !contactFormSubmitPaddingLink,
		});
	};

	const contactFormSubmitPaddingUnitsHandler = (unit) => {
		setAttributes({
			contactFormSubmitPaddingUnits: {
				...contactFormSubmitPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Submit Padding */

	/** Start Margin */
	const contactFormSubmitMarginUnitsChange = (event, position) => {
		const value = event.target.value;
		if (contactFormSubmitMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contactFormSubmitMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormSubmitMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormSubmitMarginMobile: {
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
						contactFormSubmitMarginDesktop: {
							...contactFormSubmitMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormSubmitMarginTablet: {
							...contactFormSubmitMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormSubmitMarginMobile: {
							...contactFormSubmitMarginMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const contactFormSubmitMarginLinkBtn = () => {
		setAttributes({
			contactFormSubmitMarginLink: !contactFormSubmitMarginLink,
		});
	};

	const contactFormSubmitMarginUnitsHandler = (unit) => {
		setAttributes({
			contactFormSubmitMarginUnits: {
				...contactFormSubmitMarginUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Submit Margin */

	/** Start Submit Border */
	const contactFormSubmitBorderUnitsChange = (event, position) => {
		const value = event.target.value;
		if (contactFormSubmitBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contactFormSubmitBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormSubmitBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormSubmitBorderMobile: {
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
						contactFormSubmitBorderDesktop: {
							...contactFormSubmitBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormSubmitBorderTablet: {
							...contactFormSubmitBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormSubmitBorderMobile: {
							...contactFormSubmitBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const contactFormSubmitBorderLinkBtn = () => {
		setAttributes({
			contactFormSubmitBorderLink: !contactFormSubmitBorderLink,
		});
	};

	const contactFormSubmitBorderUnitsHandler = (unit) => {
		setAttributes({
			contactFormSubmitBorderUnits: {
				...contactFormSubmitBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Submit Border */

	/** Start Submit Border Radius */
	const contactFormSubmitBorderRadiusUnitsChange = (event, position) => {
		const value = event.target.value;
		if (contactFormSubmitBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contactFormSubmitBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormSubmitBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormSubmitBorderRadiusMobile: {
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
						contactFormSubmitBorderRadiusDesktop: {
							...contactFormSubmitBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormSubmitBorderRadiusTablet: {
							...contactFormSubmitBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormSubmitBorderRadiusMobile: {
							...contactFormSubmitBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const contactFormSubmitBorderRadiusLinkBtn = () => {
		setAttributes({
			contactFormSubmitBorderRadiusLink: !contactFormSubmitBorderRadiusLink,
		});
	};

	const contactFormSubmitBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			contactFormSubmitBorderRadiusUnits: {
				...contactFormSubmitBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Submit Border Radius */

	/** Start Success Border */
	const contactFormSuccessBorderUnitsChange = (event, position) => {
		const value = event.target.value;
		if (contactFormSuccessBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contactFormSuccessBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormSuccessBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormSuccessBorderMobile: {
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
						contactFormSuccessBorderDesktop: {
							...contactFormSuccessBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormSuccessBorderTablet: {
							...contactFormSuccessBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormSuccessBorderMobile: {
							...contactFormSuccessBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const contactFormSuccessBorderLinkBtn = () => {
		setAttributes({
			contactFormSuccessBorderLink: !contactFormSuccessBorderLink,
		});
	};

	const contactFormSuccessBorderUnitsHandler = (unit) => {
		setAttributes({
			contactFormSuccessBorderUnits: {
				...contactFormSuccessBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Success Border */

	/** Start Success Border Radius */
	const contactFormSuccessBorderRadiusUnitsChange = (event, position) => {
		const value = event.target.value;
		if (contactFormSuccessBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contactFormSuccessBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormSuccessBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormSuccessBorderRadiusMobile: {
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
						contactFormSuccessBorderRadiusDesktop: {
							...contactFormSuccessBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormSuccessBorderRadiusTablet: {
							...contactFormSuccessBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormSuccessBorderRadiusMobile: {
							...contactFormSuccessBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const contactFormSuccessBorderRadiusLinkBtn = () => {
		setAttributes({
			contactFormSuccessBorderRadiusLink: !contactFormSuccessBorderRadiusLink,
		});
	};

	const contactFormSuccessBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			contactFormSuccessBorderRadiusUnits: {
				...contactFormSuccessBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Success Border Radius */

	/** Start Error Padding */
	const contactFormErrorPaddingUnitsChange = (event, position) => {
		const value = event.target.value;
		if (contactFormErrorPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contactFormErrorPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormErrorPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormErrorPaddingMobile: {
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
						contactFormErrorPaddingDesktop: {
							...contactFormErrorPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormErrorPaddingTablet: {
							...contactFormErrorPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormErrorPaddingMobile: {
							...contactFormErrorPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const contactFormErrorPaddingLinkBtn = () => {
		setAttributes({
			contactFormErrorPaddingLink: !contactFormErrorPaddingLink,
		});
	};

	const contactFormErrorPaddingUnitsHandler = (unit) => {
		setAttributes({
			contactFormErrorPaddingUnits: {
				...contactFormErrorPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Error Padding */

	/** Start Error Margin */
	const contactFormErrorMarginUnitsChange = (event, position) => {
		const value = event.target.value;
		if (contactFormErrorMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contactFormErrorMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormErrorMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormErrorMarginMobile: {
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
						contactFormErrorMarginDesktop: {
							...contactFormErrorMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormErrorMarginTablet: {
							...contactFormErrorMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormErrorMarginMobile: {
							...contactFormErrorMarginMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const contactFormErrorMarginLinkBtn = () => {
		setAttributes({
			contactFormErrorMarginLink: !contactFormErrorMarginLink,
		});
	};

	const contactFormErrorMarginUnitsHandler = (unit) => {
		setAttributes({
			contactFormErrorMarginUnits: {
				...contactFormErrorMarginUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Error Margin */

	/** Start Global padding */
	const handleGlobalPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (contactFormGlobalPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contactFormGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormGlobalPaddingMobile: {
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
						contactFormGlobalPaddingDesktop: {
							...contactFormGlobalPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormGlobalPaddingTablet: {
							...contactFormGlobalPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormGlobalPaddingMobile: {
							...contactFormGlobalPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes({
			contactFormGlobalPaddingLink: !contactFormGlobalPaddingLink,
		});
	};

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes({
			contactFormGlobalPaddingUnits: {
				...contactFormGlobalPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	/** end Global padding */
	/** End Padding */

	/** Start Global margin */
	const handleGlobalMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (contactFormGlobalMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contactFormGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormGlobalMarginMobile: {
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
						contactFormGlobalMarginDesktop: {
							...contactFormGlobalMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormGlobalMarginTablet: {
							...contactFormGlobalMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormGlobalMarginMobile: {
							...contactFormGlobalMarginMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalMarginCombineBtn = () => {
		setAttributes({ contactFormGlobalMarginLink: !contactFormGlobalMarginLink });
	};

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes({
			contactFormGlobalMarginUnits: {
				...contactFormGlobalMarginUnits,
				[deviceType]: unit,
			},
		});
	};
	/** end Global margin */
	/** End Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (contactFormGlobalBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contactFormGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormGlobalBorderMobile: {
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
						contactFormGlobalBorderDesktop: {
							...contactFormGlobalBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormGlobalBorderTablet: {
							...contactFormGlobalBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormGlobalBorderMobile: {
							...contactFormGlobalBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalBorderCombineBtn = () => {
		setAttributes({ contactFormGlobalBorderLink: !contactFormGlobalBorderLink });
	};

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes({
			contactFormGlobalBorderUnits: {
				...contactFormGlobalBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Global border */
	/** End Border */

	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (contactFormGlobalBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contactFormGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormGlobalBorderRadiusMobile: {
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
						contactFormGlobalBorderRadiusDesktop: {
							...contactFormGlobalBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contactFormGlobalBorderRadiusTablet: {
							...contactFormGlobalBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contactFormGlobalBorderRadiusMobile: {
							...contactFormGlobalBorderRadiusMobile,
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
		setAttributes({
			contactFormGlobalBorderRadiusLink: !contactFormGlobalBorderRadiusLink,
		});
	};

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			contactFormGlobalBorderRadiusUnits: {
				...contactFormGlobalBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** end Global border */
	/** End Global Border Radius */
	/** End Border Radius */

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<PanelBody
				title={__("Contact Form", "frontis-blocks")}
				initialOpen={true}
			>
				<BaseControl className="fb-fluent-from">
					<SelectControl
						label={__("Select Form", "frontis-blocks")}
						value={formId}
						options={modifiedFormLists}
						onChange={(newSelectedForm) =>
							selectWcf7Form(newSelectedForm)
						}
					/>

					<ToggleControl
						label={__("Show Placeholder", "frontis-blocks")}
						checked={showPlaceholder}
						onChange={(showPlaceholder) =>
							setAttributes({
								showPlaceholder,
							})
						}
					/>
					<ToggleControl
						label={__("Show Error Message", "frontis-blocks")}
						checked={showErrorMessage}
						onChange={(showErrorMessage) =>
							setAttributes({
								showErrorMessage,
							})
						}
					/>
				</BaseControl>
			</PanelBody>
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
			<PanelBody title={__("Label", "frontis-blocks")} initialOpen={true}>


				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={contactFormLabelColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ contactFormLabelColorSwitcher: value })}
				/>

				{contactFormLabelColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={contactFormLabelColor}
						setGlobalColor={(value) => setAttributes({ contactFormLabelColor: value === undefined ? '' : value })}
					/>
				)}

				{contactFormLabelColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={contactFormLabelHoverColor}
						setGlobalColor={(value) => setAttributes({ contactFormLabelHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={contactFormLabelGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) => setAttributes({ contactFormLabelGlobalTypographyData: value })}

					globalTypoType={contactFormLabelGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							contactFormLabelGlobalTypoType: value,
							contactFormLabelGlobalTypoSwitcher: value === 'default' ? { ...contactFormLabelGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...contactFormLabelGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
						})
					}}

					globalTypoOption={contactFormLabelGlobalTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ contactFormLabelGlobalTypoOption: value })}

					fontFamily={contactFormLabelFontFamily}
					onChangeFontFamily={(value) => setAttributes({ contactFormLabelFontFamily: value, contactFormLabelGlobalTypoSwitcher: { ...contactFormLabelGlobalTypoSwitcher, fontFamily: value && false } })}

					fontSize={contactFormLabelFontSize}
					onChangeFontSize={(value) => setAttributes({ contactFormLabelFontSize: value, contactFormLabelGlobalTypoSwitcher: { ...contactFormLabelGlobalTypoSwitcher, fontSize: value && false } })}

					fontSizeUnits={contactFormLabelFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ contactFormLabelFontSizeUnits: value })}

					fontWeight={contactFormLabelFontWeight}
					onChangeFontWeight={(value) => setAttributes({ contactFormLabelFontWeight: value, contactFormLabelGlobalTypoSwitcher: { ...contactFormLabelGlobalTypoSwitcher, fontWeight: value && false } })}

					fontStyle={contactFormLabelFontStyle}
					onChangeFontStyle={(value) => setAttributes({ contactFormLabelFontStyle: value, contactFormLabelGlobalTypoSwitcher: { ...contactFormLabelGlobalTypoSwitcher, fontStyle: value && false } })}

					textTransform={contactFormLabelTextTransform}
					onChangeTextTransform={(value) => setAttributes({ contactFormLabelTextTransform: value, contactFormLabelGlobalTypoSwitcher: { ...contactFormLabelGlobalTypoSwitcher, textTransform: value && false } })}

					textDecoration={contactFormLabelTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ contactFormLabelTextDecoration: value, contactFormLabelGlobalTypoSwitcher: { ...contactFormLabelGlobalTypoSwitcher, textDecoration: value && false } })}

					letterSpacing={contactFormLabelLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ contactFormLabelLetterSpacing: value, contactFormLabelGlobalTypoSwitcher: { ...contactFormLabelGlobalTypoSwitcher, letterSpacing: value && false } })}

					letterSpacingUnits={contactFormLabelLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ contactFormLabelLetterSpacingUnits: value })}

					lineHeight={contactFormLabelLineHeight}
					onChangeLineHeight={(value) => setAttributes({ contactFormLabelLineHeight: value, contactFormLabelGlobalTypoSwitcher: { ...contactFormLabelGlobalTypoSwitcher, lineHeight: value && false } })}

					lineHeightUnits={contactFormLabelLineHeightUnits}
					onChangeLineHeightUnit={(value) => setAttributes({ contactFormLabelLineHeightUnits: value })}

					deviceType={deviceType}
					setAttributes={setAttributes}
				/>
			</PanelBody>
			<PanelBody title={__("Input & Textarea", "frontis-blocks")} initialOpen={false}>

				<FB_ColorControl
					label={__("Background Color", "frontis-blocks")}
					globalColor={contactFormInputBgColor}
					setGlobalColor={(value) => setAttributes({ contactFormInputBgColor: value === undefined ? '' : value })}
				/>

				<FB_ColorControl
					label={__("Color", "frontis-blocks")}
					globalColor={contactFormInputColor}
					setGlobalColor={(value) => setAttributes({ contactFormInputColor: value === undefined ? '' : value })}
				/>


				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={contactFormInputGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) => setAttributes({ contactFormInputGlobalTypographyData: value })}

					globalTypoType={contactFormInputGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							contactFormInputGlobalTypoType: value,
							contactFormInputGlobalTypoSwitcher: value === 'default' ? { ...contactFormInputGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...contactFormInputGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
						})
					}}

					globalTypoOption={contactFormInputGlobalTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ contactFormInputGlobalTypoOption: value })}

					fontFamily={contactFormInputFontFamily}
					onChangeFontFamily={(value) => setAttributes({ contactFormInputFontFamily: value, contactFormInputGlobalTypoSwitcher: { ...contactFormInputGlobalTypoSwitcher, fontFamily: value && false } })}

					fontSize={contactFormInputFontSize}
					onChangeFontSize={(value) => setAttributes({ contactFormInputFontSize: value, contactFormInputGlobalTypoSwitcher: { ...contactFormInputGlobalTypoSwitcher, fontSize: value && false } })}

					fontSizeUnits={contactFormInputFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ contactFormInputFontSizeUnits: value })}

					fontWeight={contactFormInputFontWeight}
					onChangeFontWeight={(value) => setAttributes({ contactFormInputFontWeight: value, contactFormInputGlobalTypoSwitcher: { ...contactFormInputGlobalTypoSwitcher, fontWeight: value && false } })}

					fontStyle={contactFormInputFontStyle}
					onChangeFontStyle={(value) => setAttributes({ contactFormInputFontStyle: value, contactFormInputGlobalTypoSwitcher: { ...contactFormInputGlobalTypoSwitcher, fontStyle: value && false } })}

					textTransform={contactFormInputTextTransform}
					onChangeTextTransform={(value) => setAttributes({ contactFormInputTextTransform: value, contactFormInputGlobalTypoSwitcher: { ...contactFormInputGlobalTypoSwitcher, textTransform: value && false } })}

					textDecoration={contactFormInputTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ contactFormInputTextDecoration: value, contactFormInputGlobalTypoSwitcher: { ...contactFormInputGlobalTypoSwitcher, textDecoration: value && false } })}

					letterSpacing={contactFormInputLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ contactFormInputLetterSpacing: value, contactFormInputGlobalTypoSwitcher: { ...contactFormInputGlobalTypoSwitcher, letterSpacing: value && false } })}

					letterSpacingUnits={contactFormInputLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ contactFormInputLetterSpacingUnits: value })}

					lineHeight={contactFormInputLineHeight}
					onChangeLineHeight={(value) => setAttributes({ contactFormInputLineHeight: value, contactFormInputGlobalTypoSwitcher: { ...contactFormInputGlobalTypoSwitcher, lineHeight: value && false } })}

					lineHeightUnits={contactFormInputLineHeightUnits}
					onChangeLineHeightUnit={(value) => setAttributes({ contactFormInputLineHeightUnits: value })}

					deviceType={deviceType}
					setAttributes={setAttributes}
				/>
				<FB_Range
					min={1}
					max={100}
					label={__("Text Indent", "frontis-blocks")}
					rangeValue={contactFormTextIndentSize}
					onChangeHandler={(value) => setAttributes({ contactFormTextIndentSize: value })}
					rangeUnitHandler={(value) => setAttributes({ contactFormTextIndentSizeUnits: value })}
					deviceType={deviceType}
					units={contactFormTextIndentSizeUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
				<FB_Range
					min={1}
					max={2000}
					label={__("Input Width", "frontis-blocks")}
					rangeValue={contactFormInputWidthSize}
					onChangeHandler={(value) => setAttributes({ contactFormInputWidthSize: value })}
					rangeUnitHandler={(value) => setAttributes({ contactFormInputWidthSizeUnits: value })}
					deviceType={deviceType}
					units={contactFormInputWidthSizeUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
				<FB_Range
					min={1}
					max={2000}
					label={__("Input Height", "frontis-blocks")}
					rangeValue={contactFormInputHeightSize}
					onChangeHandler={(value) => setAttributes({ contactFormInputHeightSize: value })}
					rangeUnitHandler={(value) => setAttributes({ contactFormInputHeightSizeUnits: value })}
					deviceType={deviceType}
					units={contactFormInputHeightSizeUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
				<FB_Range
					min={1}
					max={2000}
					label={__("Textarea Width", "frontis-blocks")}
					rangeValue={contactFormTextareaWidthSize}
					onChangeHandler={(value) => setAttributes({ contactFormTextareaWidthSize: value })}
					rangeUnitHandler={(value) => setAttributes({ contactFormTextareaWidthSizeUnits: value })}
					deviceType={deviceType}
					units={contactFormTextareaWidthSizeUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
				<FB_Range
					min={1}
					max={2000}
					label={__("Textarea Height", "frontis-blocks")}
					rangeValue={contactFormTextareaHeightSize}
					onChangeHandler={(value) => setAttributes({ contactFormTextareaHeightSize: value })}
					rangeUnitHandler={(value) => setAttributes({ contactFormTextareaHeightSizeUnits: value })}
					deviceType={deviceType}
					units={contactFormTextareaHeightSizeUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
				<FB_Range
					min={1}
					max={1000}
					label={__("Spacing", "frontis-blocks")}
					rangeValue={contactFormSpacingSize}
					onChangeHandler={(value) => setAttributes({ contactFormSpacingSize: value })}
					rangeUnitHandler={(value) => setAttributes({ contactFormSpacingUnits: value })}
					deviceType={deviceType}
					units={contactFormSpacingUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>

				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handlePaddingUnitsHandler}
					spacingUnits={contactFormPaddingUnits}
					spacingDesktop={contactFormPaddingDesktop}
					spacingTablet={contactFormPaddingTablet}
					spacingMobile={contactFormPaddingMobile}
					handleSpacingUnitHandler={handlePaddingUnitChange}
					spacingCombineBtn={contactFormPaddingLink}
					spacingCombineBtnHandler={handlePaddingCombineBtn}
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleMarginUnitsHandler}
					spacingUnits={contactFormMarginUnits}
					spacingDesktop={contactFormMarginDesktop}
					spacingTablet={contactFormMarginTablet}
					spacingMobile={contactFormMarginMobile}
					handleSpacingUnitHandler={handleMarginUnitChange}
					spacingCombineBtn={contactFormMarginLink}
					spacingCombineBtnHandler={handleMarginCombineBtn}
					setAttributes={setAttributes}
				/>

				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={contactFormBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ contactFormBorder: value })}
				/>

				<FB_ColorControl
					label={__("Border Color", "frontis-blocks")}
					globalColor={contactFormBorderColor}
					setGlobalColor={(value) => setAttributes({ contactFormBorderColor: value === undefined ? '' : value })}
				/>

				<FB_Spacing
					label={__("Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleBorderUnitsHandler}
					spacingUnits={contactFormBorderUnits}
					spacingDesktop={contactFormBorderDesktop}
					spacingTablet={contactFormBorderTablet}
					spacingMobile={contactFormBorderMobile}
					handleSpacingUnitHandler={handleBorderUnitChange}
					spacingCombineBtn={contactFormBorderLink}
					spacingCombineBtnHandler={handleBorderCombineBtn}
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={__("Radius Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleBorderRadiusUnitsHandler}
					spacingUnits={contactFormBorderRadiusUnits}
					spacingDesktop={contactFormBorderRadiusDesktop}
					spacingTablet={contactFormBorderRadiusTablet}
					spacingMobile={contactFormBorderRadiusMobile}
					handleSpacingUnitHandler={handleBorderRadiusUnitChange}
					spacingCombineBtn={contactFormBorderRadiusLink}
					spacingCombineBtnHandler={handleBorderRadiusCombineBtn}
					setAttributes={setAttributes}
				/>

				<SelectControl
					label={__("Focus Border Style", "frontis-blocks")}
					value={contactFormFocusBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ contactFormFocusBorder: value })}
				/>

				<FB_ColorControl
					label={__("Focus Color", "frontis-blocks")}
					globalColor={contactFormInputFocusColor}
					setGlobalColor={(value) => setAttributes({ contactFormInputFocusColor: value === undefined ? '' : value })}
				/>

				<FB_Spacing
					label={__("Focus Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleFocusBorderUnitsHandler}
					spacingUnits={contactFormFocusBorderUnits}
					spacingDesktop={contactFormFocusBorderDesktop}
					spacingTablet={contactFormFocusBorderTablet}
					spacingMobile={contactFormFocusBorderMobile}
					handleSpacingUnitHandler={handleFocusBorderUnitChange}
					spacingCombineBtn={contactFormFocusBorderLink}
					spacingCombineBtnHandler={handleFocusBorderCombineBtn}
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={__("Focus Radius Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleFocusBorderRadiusUnitsHandler}
					spacingUnits={contactFormFocusBorderRadiusUnits}
					spacingDesktop={contactFormFocusBorderRadiusDesktop}
					spacingTablet={contactFormFocusBorderRadiusTablet}
					spacingMobile={contactFormFocusBorderRadiusMobile}
					handleSpacingUnitHandler={handleFocusBorderRadiusUnitChange}
					spacingCombineBtn={contactFormFocusBorderRadiusLink}
					spacingCombineBtnHandler={handleFocusBorderRadiusCombineBtn}
					setAttributes={setAttributes}
				/>


			</PanelBody>
			<PanelBody title={__("Placeholder", "frontis-blocks")} initialOpen={false}>
				<FB_ColorControl
					label={__("Color", "frontis-blocks")}
					globalColor={contactFormPlaceholderColor}
					setGlobalColor={(value) => setAttributes({ contactFormPlaceholderColor: value === undefined ? '' : value })}
				/>
			</PanelBody>

			<PanelBody title={__("Submit", "frontis-blocks")} initialOpen={false}>

				<FB_AlignmentControl
					label={__("Alignment", "frontis-blocks")}
					globalAlignment={contactFormSubmitAlignment}
					setGlobalAlignment={(value) => setAttributes({ contactFormSubmitAlignment: value })}
				/>

				<FB_Range
					min={1}
					max={2000}
					label={__("Height", "frontis-blocks")}
					rangeValue={contactFormSubmitHeight}
					onChangeHandler={(value) => setAttributes({ contactFormSubmitHeight: value })}
					rangeUnitHandler={(value) => setAttributes({ contactFormSubmitHeightUnits: value })}
					deviceType={deviceType}
					units={contactFormSubmitHeightUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={''}
				/>

				<SelectControl
					label={__("Width", "frontis-blocks")}
					value={contactFormSubmitWidthSelect}
					options={WIDTH_STYLES}
					onChange={(value) => setAttributes({ contactFormSubmitWidthSelect: value })}
				/>
				{contactFormSubmitWidthSelect === 'custom' && (
					<FB_Range
						min={1}
						max={2000}
						label={__("Width", "frontis-blocks")}
						rangeValue={contactFormSubmitWidth}
						onChangeHandler={(value) => setAttributes({ contactFormSubmitWidth: value })}
						rangeUnitHandler={(value) => setAttributes({ contactFormSubmitWidthUnits: value })}
						deviceType={deviceType}
						units={contactFormSubmitWidthUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={''}
					/>
				)}


				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={contactFormSubmitGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) => setAttributes({ contactFormSubmitGlobalTypographyData: value })}

					globalTypoType={contactFormSubmitGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							contactFormSubmitGlobalTypoType: value,
							contactFormSubmitGlobalTypoSwitcher: value === 'default' ? { ...contactFormSubmitGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...contactFormSubmitGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
						})
					}}

					globalTypoOption={contactFormSubmitGlobalTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ contactFormSubmitGlobalTypoOption: value })}

					fontFamily={contactFormSubmitFontFamily}
					onChangeFontFamily={(value) => setAttributes({ contactFormSubmitFontFamily: value, contactFormSubmitGlobalTypoSwitcher: { ...contactFormSubmitGlobalTypoSwitcher, fontFamily: value && false } })}

					fontSize={contactFormSubmitFontSize}
					onChangeFontSize={(value) => setAttributes({ contactFormSubmitFontSize: value, contactFormSubmitGlobalTypoSwitcher: { ...contactFormSubmitGlobalTypoSwitcher, fontSize: value && false } })}

					fontSizeUnits={contactFormSubmitFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ contactFormSubmitFontSizeUnits: value })}

					fontWeight={contactFormSubmitFontWeight}
					onChangeFontWeight={(value) => setAttributes({ contactFormSubmitFontWeight: value, contactFormSubmitGlobalTypoSwitcher: { ...contactFormSubmitGlobalTypoSwitcher, fontWeight: value && false } })}

					fontStyle={contactFormSubmitFontStyle}
					onChangeFontStyle={(value) => setAttributes({ contactFormSubmitFontStyle: value, contactFormSubmitGlobalTypoSwitcher: { ...contactFormSubmitGlobalTypoSwitcher, fontStyle: value && false } })}

					textTransform={contactFormSubmitTextTransform}
					onChangeTextTransform={(value) => setAttributes({ contactFormSubmitTextTransform: value, contactFormSubmitGlobalTypoSwitcher: { ...contactFormSubmitGlobalTypoSwitcher, textTransform: value && false } })}

					textDecoration={contactFormSubmitTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ contactFormSubmitTextDecoration: value, contactFormSubmitGlobalTypoSwitcher: { ...contactFormSubmitGlobalTypoSwitcher, textDecoration: value && false } })}

					letterSpacing={contactFormSubmitLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ contactFormSubmitLetterSpacing: value, contactFormSubmitGlobalTypoSwitcher: { ...contactFormSubmitGlobalTypoSwitcher, letterSpacing: value && false } })}

					letterSpacingUnits={contactFormSubmitLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ contactFormSubmitLetterSpacingUnits: value })}

					lineHeight={contactFormSubmitLineHeight}
					onChangeLineHeight={(value) => setAttributes({ contactFormSubmitLineHeight: value, contactFormSubmitGlobalTypoSwitcher: { ...contactFormSubmitGlobalTypoSwitcher, lineHeight: value && false } })}

					lineHeightUnits={contactFormSubmitLineHeightUnits}
					onChangeLineHeightUnit={(value) => setAttributes({ contactFormSubmitLineHeightUnits: value })}

					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={contactFormSubmitColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ contactFormSubmitColorSwitcher: value })}
				/>

				{contactFormSubmitColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={contactFormSubmitColor}
						setGlobalColor={(value) => setAttributes({ contactFormSubmitColor: value === undefined ? '' : value })}
					/>
				)}

				{contactFormSubmitColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={contactFormSubmitHoverColor}
						setGlobalColor={(value) => setAttributes({ contactFormSubmitHoverColor: value === undefined ? '' : value })}
					/>
				)}


				<FB_SwitcherControl
					label={__("Background Color", "frontis-blocks")}
					globalSwitcher={contactFormSubmitBgColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ contactFormSubmitBgColorSwitcher: value })}
				/>

				{contactFormSubmitBgColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={contactFormSubmitBgColor}
						setGlobalColor={(value) => setAttributes({ contactFormSubmitBgColor: value === undefined ? '' : value })}
					/>
				)}

				{contactFormSubmitBgColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={contactFormSubmitBgHoverColor}
						setGlobalColor={(value) => setAttributes({ contactFormSubmitBgHoverColor: value === undefined ? '' : value })}
					/>
				)}
				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={contactFormSubmitPaddingUnitsHandler}
					spacingUnits={contactFormSubmitPaddingUnits}
					spacingDesktop={contactFormSubmitPaddingDesktop}
					spacingTablet={contactFormSubmitPaddingTablet}
					spacingMobile={contactFormSubmitPaddingMobile}
					handleSpacingUnitHandler={contactFormSubmitPaddingUnitsChange}
					spacingCombineBtn={contactFormSubmitPaddingLink}
					spacingCombineBtnHandler={contactFormSubmitPaddingLinkBtn}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={contactFormSubmitMarginUnitsHandler}
					spacingUnits={contactFormSubmitMarginUnits}
					spacingDesktop={contactFormSubmitMarginDesktop}
					spacingTablet={contactFormSubmitMarginTablet}
					spacingMobile={contactFormSubmitMarginMobile}
					handleSpacingUnitHandler={contactFormSubmitMarginUnitsChange}
					spacingCombineBtn={contactFormSubmitMarginLink}
					spacingCombineBtnHandler={contactFormSubmitMarginLinkBtn}
					setAttributes={setAttributes}
				/>
				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={contactFormSubmitBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ contactFormSubmitBorder: value })}
				/>

				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={contactFormSubmitBorderColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ contactFormSubmitBorderColorSwitcher: value })}
				/>

				{contactFormSubmitBorderColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={contactFormSubmitBorderColor}
						setGlobalColor={(value) => setAttributes({ contactFormSubmitBorderColor: value === undefined ? '' : value })}
					/>
				)}

				{contactFormSubmitBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={contactFormSubmitBorderHoverColor}
						setGlobalColor={(value) => setAttributes({ contactFormSubmitBorderHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_Spacing
					label={__("Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={contactFormSubmitBorderUnitsHandler}
					spacingUnits={contactFormSubmitBorderUnits}
					spacingDesktop={contactFormSubmitBorderDesktop}
					spacingTablet={contactFormSubmitBorderTablet}
					spacingMobile={contactFormSubmitBorderMobile}
					handleSpacingUnitHandler={contactFormSubmitBorderUnitsChange}
					spacingCombineBtn={contactFormSubmitBorderLink}
					spacingCombineBtnHandler={contactFormSubmitBorderLinkBtn}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={contactFormSubmitBorderRadiusUnitsHandler}
					spacingUnits={contactFormSubmitBorderRadiusUnits}
					spacingDesktop={contactFormSubmitBorderRadiusDesktop}
					spacingTablet={contactFormSubmitBorderRadiusTablet}
					spacingMobile={contactFormSubmitBorderRadiusMobile}
					handleSpacingUnitHandler={contactFormSubmitBorderRadiusUnitsChange}
					spacingCombineBtn={contactFormSubmitBorderRadiusLink}
					spacingCombineBtnHandler={contactFormSubmitBorderRadiusLinkBtn}
					setAttributes={setAttributes}
				/>


			</PanelBody>
			<PanelBody title={__("Success Message", "frontis-blocks")} initialOpen={false}>


				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={contactFormSuccessGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) => setAttributes({ contactFormSuccessGlobalTypographyData: value })}

					globalTypoType={contactFormSuccessGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							contactFormSuccessGlobalTypoType: value,
							contactFormSuccessGlobalTypoSwitcher: value === 'default' ? { ...contactFormSuccessGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...contactFormSuccessGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
						})
					}}

					globalTypoOption={contactFormSuccessGlobalTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ contactFormSuccessGlobalTypoOption: value })}

					fontFamily={contactFormSuccessFontFamily}
					onChangeFontFamily={(value) => setAttributes({ contactFormSuccessFontFamily: value, contactFormSuccessGlobalTypoSwitcher: { ...contactFormSuccessGlobalTypoSwitcher, fontFamily: value && false } })}

					fontSize={contactFormSuccessFontSize}
					onChangeFontSize={(value) => setAttributes({ contactFormSuccessFontSize: value, contactFormSuccessGlobalTypoSwitcher: { ...contactFormSuccessGlobalTypoSwitcher, fontSize: value && false } })}

					fontSizeUnits={contactFormSuccessFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ contactFormSuccessFontSizeUnits: value })}

					fontWeight={contactFormSuccessFontWeight}
					onChangeFontWeight={(value) => setAttributes({ contactFormSuccessFontWeight: value, contactFormSuccessGlobalTypoSwitcher: { ...contactFormSuccessGlobalTypoSwitcher, fontWeight: value && false } })}

					fontStyle={contactFormSuccessFontStyle}
					onChangeFontStyle={(value) => setAttributes({ contactFormSuccessFontStyle: value, contactFormSuccessGlobalTypoSwitcher: { ...contactFormSuccessGlobalTypoSwitcher, fontStyle: value && false } })}

					textTransform={contactFormSuccessTextTransform}
					onChangeTextTransform={(value) => setAttributes({ contactFormSuccessTextTransform: value, contactFormSuccessGlobalTypoSwitcher: { ...contactFormSuccessGlobalTypoSwitcher, textTransform: value && false } })}

					textDecoration={contactFormSuccessTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ contactFormSuccessTextDecoration: value, contactFormSuccessGlobalTypoSwitcher: { ...contactFormSuccessGlobalTypoSwitcher, textDecoration: value && false } })}

					letterSpacing={contactFormSuccessLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ contactFormSuccessLetterSpacing: value, contactFormSuccessGlobalTypoSwitcher: { ...contactFormSuccessGlobalTypoSwitcher, letterSpacing: value && false } })}

					letterSpacingUnits={contactFormSuccessLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ contactFormSuccessLetterSpacingUnits: value })}

					lineHeight={contactFormSuccessLineHeight}
					onChangeLineHeight={(value) => setAttributes({ contactFormSuccessLineHeight: value, contactFormSuccessGlobalTypoSwitcher: { ...contactFormSuccessGlobalTypoSwitcher, lineHeight: value && false } })}

					lineHeightUnits={contactFormSuccessLineHeightUnits}
					onChangeLineHeightUnit={(value) => setAttributes({ contactFormSuccessLineHeightUnits: value })}

					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_ColorControl
					label={__("Color", "frontis-blocks")}
					globalColor={contactFormSuccessColor}
					setGlobalColor={(value) => setAttributes({ contactFormSuccessColor: value === undefined ? '' : value })}
				/>

				<FB_ColorControl
					label={__("Background Color", "frontis-blocks")}
					globalColor={contactFormSuccessBgColor}
					setGlobalColor={(value) => setAttributes({ contactFormSuccessBgColor: value === undefined ? '' : value })}
				/>

				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={contactFormSuccessBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ contactFormSuccessBorder: value })}
				/>

				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={contactFormSuccessBorderColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ contactFormSuccessBorderColorSwitcher: value })}
				/>

				{contactFormSuccessBorderColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={contactFormSuccessBorderColor}
						setGlobalColor={(value) => setAttributes({ contactFormSuccessBorderColor: value === undefined ? '' : value })}
					/>
				)}

				{contactFormSuccessBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={contactFormSuccessBorderHoverColor}
						setGlobalColor={(value) => setAttributes({ contactFormSuccessBorderHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_Spacing
					label={__("Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={contactFormSuccessBorderUnitsHandler}
					spacingUnits={contactFormSuccessBorderUnits}
					spacingDesktop={contactFormSuccessBorderDesktop}
					spacingTablet={contactFormSuccessBorderTablet}
					spacingMobile={contactFormSuccessBorderMobile}
					handleSpacingUnitHandler={contactFormSuccessBorderUnitsChange}
					spacingCombineBtn={contactFormSuccessBorderLink}
					spacingCombineBtnHandler={contactFormSuccessBorderLinkBtn}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={contactFormSuccessBorderRadiusUnitsHandler}
					spacingUnits={contactFormSuccessBorderRadiusUnits}
					spacingDesktop={contactFormSuccessBorderRadiusDesktop}
					spacingTablet={contactFormSuccessBorderRadiusTablet}
					spacingMobile={contactFormSuccessBorderRadiusMobile}
					handleSpacingUnitHandler={contactFormSuccessBorderRadiusUnitsChange}
					spacingCombineBtn={contactFormSuccessBorderRadiusLink}
					spacingCombineBtnHandler={contactFormSuccessBorderRadiusLinkBtn}
					setAttributes={setAttributes}
				/>
			</PanelBody>
			<PanelBody title={__("Error Message", "frontis-blocks")} initialOpen={false}>


				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={contactFormErrorGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) => setAttributes({ contactFormErrorGlobalTypographyData: value })}

					globalTypoType={contactFormErrorGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							contactFormErrorGlobalTypoType: value,
							contactFormErrorGlobalTypoSwitcher: value === 'default' ? { ...contactFormErrorGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...contactFormErrorGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
						})
					}}

					globalTypoOption={contactFormErrorGlobalTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ contactFormErrorGlobalTypoOption: value })}

					fontFamily={contactFormErrorFontFamily}
					onChangeFontFamily={(value) => setAttributes({ contactFormErrorFontFamily: value, contactFormErrorGlobalTypoSwitcher: { ...contactFormErrorGlobalTypoSwitcher, fontFamily: value && false } })}

					fontSize={contactFormErrorFontSize}
					onChangeFontSize={(value) => setAttributes({ contactFormErrorFontSize: value, contactFormErrorGlobalTypoSwitcher: { ...contactFormErrorGlobalTypoSwitcher, fontSize: value && false } })}

					fontSizeUnits={contactFormErrorFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ contactFormErrorFontSizeUnits: value })}

					fontWeight={contactFormErrorFontWeight}
					onChangeFontWeight={(value) => setAttributes({ contactFormErrorFontWeight: value, contactFormErrorGlobalTypoSwitcher: { ...contactFormErrorGlobalTypoSwitcher, fontWeight: value && false } })}

					fontStyle={contactFormErrorFontStyle}
					onChangeFontStyle={(value) => setAttributes({ contactFormErrorFontStyle: value, contactFormErrorGlobalTypoSwitcher: { ...contactFormErrorGlobalTypoSwitcher, fontStyle: value && false } })}

					textTransform={contactFormErrorTextTransform}
					onChangeTextTransform={(value) => setAttributes({ contactFormErrorTextTransform: value, contactFormErrorGlobalTypoSwitcher: { ...contactFormErrorGlobalTypoSwitcher, textTransform: value && false } })}

					textDecoration={contactFormErrorTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ contactFormErrorTextDecoration: value, contactFormErrorGlobalTypoSwitcher: { ...contactFormErrorGlobalTypoSwitcher, textDecoration: value && false } })}

					letterSpacing={contactFormErrorLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ contactFormErrorLetterSpacing: value, contactFormErrorGlobalTypoSwitcher: { ...contactFormErrorGlobalTypoSwitcher, letterSpacing: value && false } })}

					letterSpacingUnits={contactFormErrorLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ contactFormErrorLetterSpacingUnits: value })}

					lineHeight={contactFormErrorLineHeight}
					onChangeLineHeight={(value) => setAttributes({ contactFormErrorLineHeight: value, contactFormErrorGlobalTypoSwitcher: { ...contactFormErrorGlobalTypoSwitcher, lineHeight: value && false } })}

					lineHeightUnits={contactFormErrorLineHeightUnits}
					onChangeLineHeightUnit={(value) => setAttributes({ contactFormErrorLineHeightUnits: value })}

					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_ColorControl
					label={__("Color", "frontis-blocks")}
					globalColor={contactFormErrorColor}
					setGlobalColor={(value) => setAttributes({ contactFormErrorColor: value === undefined ? '' : value })}
				/>

				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={contactFormErrorPaddingUnitsHandler}
					spacingUnits={contactFormErrorPaddingUnits}
					spacingDesktop={contactFormErrorPaddingDesktop}
					spacingTablet={contactFormErrorPaddingTablet}
					spacingMobile={contactFormErrorPaddingMobile}
					handleSpacingUnitHandler={contactFormErrorPaddingUnitsChange}
					spacingCombineBtn={contactFormErrorPaddingLink}
					spacingCombineBtnHandler={contactFormErrorPaddingLinkBtn}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={contactFormErrorMarginUnitsHandler}
					spacingUnits={contactFormErrorMarginUnits}
					spacingDesktop={contactFormErrorMarginDesktop}
					spacingTablet={contactFormErrorMarginTablet}
					spacingMobile={contactFormErrorMarginMobile}
					handleSpacingUnitHandler={contactFormErrorMarginUnitsChange}
					spacingCombineBtn={contactFormErrorMarginLink}
					spacingCombineBtnHandler={contactFormErrorMarginLinkBtn}
					setAttributes={setAttributes}
				/>
			</PanelBody>
		</>
	);

	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
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
							rangeValue={contactFormGlobalZIndex}
							onChangeHandler={(value) => setAttributes({ contactFormGlobalZIndex: value === 0 ? undefined : value })}
							deviceType={deviceType}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
							isRangeUnit={false}

						/>

						<SelectControl
							label={__("Overflow", "frontis-blocks")}
							value={contactFormOverflow}
							options={OVERFLOW_OP}
							onChange={(value) => setAttributes({ contactFormOverflow: value })}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={contactFormPositionType}
							setPositionType={(value) => setAttributes({ contactFormPositionType: value })}

							HZOrientationType={contactFormHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ contactFormHZOrientationType: value })
							}
							VROrientationType={contactFormVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ contactFormVROrientationType: value })
							}

							HZLeftOffset={contactFormHZLeftOffset}
							setHZLeftOffset={(value) => setAttributes({ contactFormHZLeftOffset: value })}
							HZLeftOffsetUnits={contactFormHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) => setAttributes({ contactFormHZLeftOffsetUnits: value })}
							HZRightOffset={contactFormHZRightOffset}
							setHZRightOffset={(value) => setAttributes({ contactFormHZRightOffset: value })}
							HZRightOffsetUnits={contactFormHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) => setAttributes({ contactFormHZRightOffsetUnits: value })}

							VRTopOffset={contactFormVRTopOffset}
							setVRTopOffset={(value) => setAttributes({ contactFormVRTopOffset: value })}
							VRTopOffsetUnits={contactFormVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) => setAttributes({ contactFormVRTopOffsetUnits: value })}
							VRBottomOffset={contactFormVRBottomOffset}
							setVRBottomOffset={(value) => setAttributes({ contactFormVRBottomOffset: value })}
							VRBottomOffsetUnits={contactFormVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) => setAttributes({ contactFormVRBottomOffsetUnits: value })}

							setAttributes={setAttributes}
						/>

						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={contactFormGlobalWraperID}
							onChangeValue={(value) => setAttributes({ contactFormGlobalWraperID: value })}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={contactFormGlobalWraperClass}
							onChangeValue={(value) => setAttributes({ contactFormGlobalWraperClass: value })}
							helpText={__("Separate with spaces key.", "frontis-blocks")}
						/>

					</PanelBody>

					<PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
						<FB_Spacing
							label={__("Padding", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
							spacingUnits={contactFormGlobalPaddingUnits}
							spacingDesktop={contactFormGlobalPaddingDesktop}
							spacingTablet={contactFormGlobalPaddingTablet}
							spacingMobile={contactFormGlobalPaddingMobile}
							handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
							spacingCombineBtn={contactFormGlobalPaddingLink}
							spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={__("Margin", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalMarginUnitsHandler}
							spacingUnits={contactFormGlobalMarginUnits}
							spacingDesktop={contactFormGlobalMarginDesktop}
							spacingTablet={contactFormGlobalMarginTablet}
							spacingMobile={contactFormGlobalMarginMobile}
							handleSpacingUnitHandler={handleGlobalMarginUnitChange}
							spacingCombineBtn={contactFormGlobalMarginLink}
							spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
							setAttributes={setAttributes}
						/>
					</PanelBody>

					<PanelBody title="Background Color" initialOpen={false} >
						<FB_SwitcherControl
							label={__("Background Color", "frontis-blocks")}
							globalSwitcher={contactFormGlobalBgColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ contactFormGlobalBgColorSwitcher: value })}
						/>

						{contactFormGlobalBgColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={contactFormGlobalBgColor}
								setGlobalColor={(value) => setAttributes({ contactFormGlobalBgColor: value === undefined ? '' : value })}
							/>
						)}

						{contactFormGlobalBgColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={contactFormGlobalBgHoverColor}
								setGlobalColor={(value) => setAttributes({ contactFormGlobalBgHoverColor: value === undefined ? '' : value })}
							/>
						)}
					</PanelBody>
					<PanelBody title={__("Border and Shadow", "frontis-blocks")} initialOpen={false}>

						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={contactFormGlobalBorder}
							options={BORDER_STYLES}
							onChange={(value) => setAttributes({ contactFormGlobalBorder: value })}
						/>


						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={contactFormGlobalBorderColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ contactFormGlobalBorderColorSwitcher: value })}
						/>

						{contactFormGlobalBorderColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={contactFormGlobalBorderColor}
								setGlobalColor={(value) => setAttributes({ contactFormGlobalBorderColor: value === undefined ? '' : value })}
							/>
						)}

						{contactFormGlobalBorderColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={contactFormGlobalBorderHoverColor}
								setGlobalColor={(value) => setAttributes({ contactFormGlobalBorderHoverColor: value === undefined ? '' : value })}
							/>
						)}

						<FB_Spacing
							label={__("Border", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderUnitsHandler}
							spacingUnits={contactFormGlobalBorderUnits}
							spacingDesktop={contactFormGlobalBorderDesktop}
							spacingTablet={contactFormGlobalBorderTablet}
							spacingMobile={contactFormGlobalBorderMobile}
							handleSpacingUnitHandler={handleGlobalBorderUnitChange}
							spacingCombineBtn={contactFormGlobalBorderLink}
							spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_Spacing
							label={__("Border Radius", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
							spacingUnits={contactFormGlobalBorderRadiusUnits}
							spacingDesktop={contactFormGlobalBorderRadiusDesktop}
							spacingTablet={contactFormGlobalBorderRadiusTablet}
							spacingMobile={contactFormGlobalBorderRadiusMobile}
							handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
							spacingCombineBtn={contactFormGlobalBorderRadiusLink}
							spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_SwitcherControl
							label={__("Box Shadow", "frontis-blocks")}
							globalSwitcher={contactFormGlobalBoxShadowSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ contactFormGlobalBoxShadowSwitcher: value })}
						/>

						{contactFormGlobalBoxShadowSwitcher === 'normal' && (
							<FB_BoxShadowControl
								label={__("Normal Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) => setAttributes({ contactFormGlobalBoxShadowValues: value })}
								initialShadowValue={contactFormGlobalBoxShadowValues}
								onBoxShadowStyleChange={(value) => setAttributes({ contactFormGlobalBoxShadowCssValue: value })}
							/>
						)}

						{contactFormGlobalBoxShadowSwitcher === 'hover' && (
							<FB_BoxShadowControl
								label={__("Hover Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) => setAttributes({ contactFormGlobalBoxShadowHoverValues: value })}
								initialShadowValue={contactFormGlobalBoxShadowHoverValues}
								onBoxShadowStyleChange={(value) => setAttributes({ contactFormGlobalBoxShadowHoverCssValue: value })}
							/>
						)}
					</PanelBody>

					<PanelBody
						title={__("Responsive Control", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-responsive-control-wrapper"
					>
						<FB_VisibilityControl
							desktopValue={contactFormDesktopSwitcher}
							setDesktopValue={(value) => setAttributes({ contactFormDesktopSwitcher: value })}

							tabletValue={contactFormTabletSwitcher}
							setTabletValue={(value) => setAttributes({ contactFormTabletSwitcher: value })}

							mobileValue={contactFormMobileSwitcher}
							setMobileValue={(value) => setAttributes({ contactFormMobileSwitcher: value })}
						/>
					</PanelBody>
					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor
							value={contactFormCustomCSS}
							onChangeValue={(value) => setAttributes({ contactFormCustomCSS: value })}
						/>
					</PanelBody>
				</div>
			</div>
		</>
	);

	return (
		<>
			<FB_InspectorControls
				generalControls={generalControls}
				styleControls={styleControls}
				advancedControls={advancedControls}
			/>
		</>
	);
}
export default memo(Inspector);