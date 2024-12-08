import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { useEffect, useState, useMemo } from "@wordpress/element";
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
	FORM_LISTS,
	NORMAL_HOVER,
	UNIT_TYPES,
	ICON_ALIGN,
	TEXT_ALIGN,
	BORDER_STYLES,
	FONT_FAMILYS,
	WIDTH_STYLES,
} from "./constants/constants";

import FB_Spacing from "@Components/spacing";
import FB_Range from "@Components/range";

import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_TypographyControl from '@Components/typography-control';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_BoxShadowControl from '@Components/box-shadow';

import "./editor.scss";

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		deviceType,
		contactFormGlobalZIndex,
		formId,
		showPlaceholder,
		showErrorMessage,

		contactFormLabelColorSwitcher,
		contactFormLabelColor,
		contactFormLabelHoverColor,
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
		blockStyle,

	} = attributes;
	const [wpCf7Form, setWpCf7Forms] = useState(
		FrontisBlocksData.contact_form7_html,
	);
	const [selectedForm, setSelectedForm] = useState();

	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-contact-form-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

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

	/** Default padding for desktop (using desktop_padding) */
	const contactFormDesktopPadding = `${contactFormPaddingDesktop.top}${contactFormPaddingUnits.Desktop} ${contactFormPaddingDesktop.right}${contactFormPaddingUnits.Desktop} ${contactFormPaddingDesktop.bottom}${contactFormPaddingUnits.Desktop} ${contactFormPaddingDesktop.left}${contactFormPaddingUnits.Desktop}`;
	const contactFormTabletPadding = `${contactFormPaddingTablet.top}${contactFormPaddingUnits.Tablet} ${contactFormPaddingTablet.right}${contactFormPaddingUnits.Tablet} ${contactFormPaddingTablet.bottom}${contactFormPaddingUnits.Tablet} ${contactFormPaddingTablet.left}${contactFormPaddingUnits.Tablet}`;
	const contactFormMobilePadding = `${contactFormPaddingMobile.top}${contactFormPaddingUnits.Mobile} ${contactFormPaddingMobile.right}${contactFormPaddingUnits.Mobile} ${contactFormPaddingMobile.bottom}${contactFormPaddingUnits.Mobile} ${contactFormPaddingMobile.left}${contactFormPaddingUnits.Mobile}`;
	/** End Padding */

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
	const contactFormBorderDesktopWidth = `${contactFormBorderDesktop.top}${contactFormBorderUnits.Desktop} ${contactFormBorderDesktop.right}${contactFormBorderUnits.Desktop} ${contactFormBorderDesktop.bottom}${contactFormBorderUnits.Desktop} ${contactFormBorderDesktop.left}${contactFormBorderUnits.Desktop}`;
	const contactFormBorderTabletWidth = `${contactFormBorderTablet.top}${contactFormBorderUnits.Tablet} ${contactFormBorderTablet.right}${contactFormBorderUnits.Tablet} ${contactFormBorderTablet.bottom}${contactFormBorderUnits.Tablet} ${contactFormBorderTablet.left}${contactFormBorderUnits.Tablet}`;
	const contactFormBorderMobileWidth = `${contactFormBorderMobile.top}${contactFormBorderUnits.Mobile} ${contactFormBorderMobile.right}${contactFormBorderUnits.Mobile} ${contactFormBorderMobile.bottom}${contactFormBorderUnits.Mobile} ${contactFormBorderMobile.left}${contactFormBorderUnits.Mobile}`;
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
	const contactFormBorderRadiusDesktopWidth = `${contactFormBorderRadiusDesktop.top}${contactFormBorderRadiusUnits.Desktop} ${contactFormBorderRadiusDesktop.right}${contactFormBorderRadiusUnits.Desktop} ${contactFormBorderRadiusDesktop.bottom}${contactFormBorderRadiusUnits.Desktop} ${contactFormBorderRadiusDesktop.left}${contactFormBorderRadiusUnits.Desktop}`;
	const contactFormBorderRadiusTabletWidth = `${contactFormBorderRadiusTablet.top}${contactFormBorderRadiusUnits.Tablet} ${contactFormBorderRadiusTablet.right}${contactFormBorderRadiusUnits.Tablet} ${contactFormBorderRadiusTablet.bottom}${contactFormBorderRadiusUnits.Tablet} ${contactFormBorderRadiusTablet.left}${contactFormBorderRadiusUnits.Tablet}`;
	const contactFormBorderRadiusMobileWidth = `${contactFormBorderRadiusMobile.top}${contactFormBorderRadiusUnits.Mobile} ${contactFormBorderRadiusMobile.right}${contactFormBorderRadiusUnits.Mobile} ${contactFormBorderRadiusMobile.bottom}${contactFormBorderRadiusUnits.Mobile} ${contactFormBorderRadiusMobile.left}${contactFormBorderRadiusUnits.Mobile}`;
	/** End Border Radius */



	/** Start  Focus Border */
	const handleFocusBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( contactFormFocusBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						contactFormFocusBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						contactFormFocusBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						contactFormFocusBorderMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {contactFormFocusBorderDesktop: {...contactFormFocusBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {contactFormFocusBorderTablet: {...contactFormFocusBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {contactFormFocusBorderMobile: {...contactFormFocusBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleFocusBorderCombineBtn = () => {
		setAttributes( {contactFormFocusBorderLink: !contactFormFocusBorderLink} );
	}

	const handleFocusBorderUnitsHandler = (unit) => { 
		setAttributes( {
			contactFormFocusBorderUnits: {
				...contactFormFocusBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End  border */
	const contactFormFocusBorderDesktopWidth = `${contactFormFocusBorderDesktop.top}${contactFormFocusBorderUnits.Desktop} ${contactFormFocusBorderDesktop.right}${contactFormFocusBorderUnits.Desktop} ${contactFormFocusBorderDesktop.bottom}${contactFormFocusBorderUnits.Desktop} ${contactFormFocusBorderDesktop.left}${contactFormFocusBorderUnits.Desktop}`;
	const contactFormFocusBorderTabletWidth = `${contactFormFocusBorderTablet.top}${contactFormFocusBorderUnits.Tablet} ${contactFormFocusBorderTablet.right}${contactFormFocusBorderUnits.Tablet} ${contactFormFocusBorderTablet.bottom}${contactFormFocusBorderUnits.Tablet} ${contactFormFocusBorderTablet.left}${contactFormFocusBorderUnits.Tablet}`;
	const contactFormFocusBorderMobileWidth = `${contactFormFocusBorderMobile.top}${contactFormFocusBorderUnits.Mobile} ${contactFormFocusBorderMobile.right}${contactFormFocusBorderUnits.Mobile} ${contactFormFocusBorderMobile.bottom}${contactFormFocusBorderUnits.Mobile} ${contactFormFocusBorderMobile.left}${contactFormFocusBorderUnits.Mobile}`;
	/** End Border */


	/** Start  border radius*/
	const handleFocusBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( contactFormFocusBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						contactFormFocusBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						contactFormFocusBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						contactFormFocusBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {contactFormFocusBorderRadiusDesktop: {...contactFormFocusBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {contactFormFocusBorderRadiusTablet: {...contactFormFocusBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {contactFormFocusBorderRadiusMobile: {...contactFormFocusBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleFocusBorderRadiusCombineBtn = () => {
		setAttributes( {contactFormFocusBorderRadiusLink: !contactFormFocusBorderRadiusLink} );
	}

	const handleFocusBorderRadiusUnitsHandler = (unit) => { 
		setAttributes( {
			contactFormFocusBorderRadiusUnits: {
				...contactFormFocusBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Focus Border */

	/** End Focus Border Radius */
	const contactFormFocusBorderRadiusDesktopWidth = `${contactFormFocusBorderRadiusDesktop.top}${contactFormFocusBorderRadiusUnits.Desktop} ${contactFormFocusBorderRadiusDesktop.right}${contactFormFocusBorderRadiusUnits.Desktop} ${contactFormFocusBorderRadiusDesktop.bottom}${contactFormFocusBorderRadiusUnits.Desktop} ${contactFormFocusBorderRadiusDesktop.left}${contactFormFocusBorderRadiusUnits.Desktop}`;
	const contactFormFocusBorderRadiusTabletWidth = `${contactFormFocusBorderRadiusTablet.top}${contactFormFocusBorderRadiusUnits.Tablet} ${contactFormFocusBorderRadiusTablet.right}${contactFormFocusBorderRadiusUnits.Tablet} ${contactFormFocusBorderRadiusTablet.bottom}${contactFormFocusBorderRadiusUnits.Tablet} ${contactFormFocusBorderRadiusTablet.left}${contactFormFocusBorderRadiusUnits.Tablet}`;
	const contactFormFocusBorderRadiusMobileWidth = `${contactFormFocusBorderRadiusMobile.top}${contactFormFocusBorderRadiusUnits.Mobile} ${contactFormFocusBorderRadiusMobile.right}${contactFormFocusBorderRadiusUnits.Mobile} ${contactFormFocusBorderRadiusMobile.bottom}${contactFormFocusBorderRadiusUnits.Mobile} ${contactFormFocusBorderRadiusMobile.left}${contactFormFocusBorderRadiusUnits.Mobile}`;
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

	/** Default padding for Submit */
	const contactFormSubmitDesktopPadding = `${contactFormSubmitPaddingDesktop.top}${contactFormSubmitPaddingUnits.Desktop} ${contactFormSubmitPaddingDesktop.right}${contactFormSubmitPaddingUnits.Desktop} ${contactFormSubmitPaddingDesktop.bottom}${contactFormSubmitPaddingUnits.Desktop} ${contactFormSubmitPaddingDesktop.left}${contactFormSubmitPaddingUnits.Desktop}`;
	const contactFormSubmitTabletPadding = `${contactFormSubmitPaddingTablet.top}${contactFormSubmitPaddingUnits.Tablet} ${contactFormSubmitPaddingTablet.right}${contactFormSubmitPaddingUnits.Tablet} ${contactFormSubmitPaddingTablet.bottom}${contactFormSubmitPaddingUnits.Tablet} ${contactFormSubmitPaddingTablet.left}${contactFormSubmitPaddingUnits.Tablet}`;
	const contactFormSubmitMobilePadding = `${contactFormSubmitPaddingMobile.top}${contactFormSubmitPaddingUnits.Mobile} ${contactFormSubmitPaddingMobile.right}${contactFormSubmitPaddingUnits.Mobile} ${contactFormSubmitPaddingMobile.bottom}${contactFormSubmitPaddingUnits.Mobile} ${contactFormSubmitPaddingMobile.left}${contactFormSubmitPaddingUnits.Mobile}`;
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

	const contactFormSubmitDesktopMargin = `${contactFormSubmitMarginDesktop.top}${contactFormSubmitMarginUnits.Desktop} ${contactFormSubmitMarginDesktop.right}${contactFormSubmitMarginUnits.Desktop} ${contactFormSubmitMarginDesktop.bottom}${contactFormSubmitMarginUnits.Desktop} ${contactFormSubmitMarginDesktop.left}${contactFormSubmitMarginUnits.Desktop}`;
	const contactFormSubmitTabletMargin = `${contactFormSubmitMarginTablet.top}${contactFormSubmitMarginUnits.Tablet} ${contactFormSubmitMarginTablet.right}${contactFormSubmitMarginUnits.Tablet} ${contactFormSubmitMarginTablet.bottom}${contactFormSubmitMarginUnits.Tablet} ${contactFormSubmitMarginTablet.left}${contactFormSubmitMarginUnits.Tablet}`;
	const contactFormSubmitMobileMargin = `${contactFormSubmitMarginMobile.top}${contactFormSubmitMarginUnits.Mobile} ${contactFormSubmitMarginMobile.right}${contactFormSubmitMarginUnits.Mobile} ${contactFormSubmitMarginMobile.bottom}${contactFormSubmitMarginUnits.Mobile} ${contactFormSubmitMarginMobile.left}${contactFormSubmitMarginUnits.Mobile}`;
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

	/** Default border for Submit */
	const contactFormSubmitDesktopBorderWidth = `${contactFormSubmitBorderDesktop.top}${contactFormSubmitBorderUnits.Desktop} ${contactFormSubmitBorderDesktop.right}${contactFormSubmitBorderUnits.Desktop} ${contactFormSubmitBorderDesktop.bottom}${contactFormSubmitBorderUnits.Desktop} ${contactFormSubmitBorderDesktop.left}${contactFormSubmitBorderUnits.Desktop}`;
	const contactFormSubmitTabletBorderWidth = `${contactFormSubmitBorderTablet.top}${contactFormSubmitBorderUnits.Tablet} ${contactFormSubmitBorderTablet.right}${contactFormSubmitBorderUnits.Tablet} ${contactFormSubmitBorderTablet.bottom}${contactFormSubmitBorderUnits.Tablet} ${contactFormSubmitBorderTablet.left}${contactFormSubmitBorderUnits.Tablet}`;
	const contactFormSubmitMobileBorderWidth = `${contactFormSubmitBorderMobile.top}${contactFormSubmitBorderUnits.Mobile} ${contactFormSubmitBorderMobile.right}${contactFormSubmitBorderUnits.Mobile} ${contactFormSubmitBorderMobile.bottom}${contactFormSubmitBorderUnits.Mobile} ${contactFormSubmitBorderMobile.left}${contactFormSubmitBorderUnits.Mobile}`;
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

	/** Default border radius for Submit */
	const contactFormSubmitDesktopBorderRadiusWidth = `${contactFormSubmitBorderRadiusDesktop.top}${contactFormSubmitBorderRadiusUnits.Desktop} ${contactFormSubmitBorderRadiusDesktop.right}${contactFormSubmitBorderRadiusUnits.Desktop} ${contactFormSubmitBorderRadiusDesktop.bottom}${contactFormSubmitBorderRadiusUnits.Desktop} ${contactFormSubmitBorderRadiusDesktop.left}${contactFormSubmitBorderRadiusUnits.Desktop}`;
	const contactFormSubmitTabletBorderRadiusWidth = `${contactFormSubmitBorderRadiusTablet.top}${contactFormSubmitBorderRadiusUnits.Tablet} ${contactFormSubmitBorderRadiusTablet.right}${contactFormSubmitBorderRadiusUnits.Tablet} ${contactFormSubmitBorderRadiusTablet.bottom}${contactFormSubmitBorderRadiusUnits.Tablet} ${contactFormSubmitBorderRadiusTablet.left}${contactFormSubmitBorderRadiusUnits.Tablet}`;
	const contactFormSubmitMobileBorderRadiusWidth = `${contactFormSubmitBorderRadiusMobile.top}${contactFormSubmitBorderRadiusUnits.Mobile} ${contactFormSubmitBorderRadiusUnits.Mobile} ${contactFormSubmitBorderRadiusDesktop.bottom}${contactFormSubmitBorderRadiusUnits.Mobile} ${contactFormSubmitBorderRadiusDesktop.left}${contactFormSubmitBorderRadiusUnits.Mobile}`;

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

	/** Default border for Success */
	const contactFormSuccessDesktopBorderWidth = `${contactFormSuccessBorderDesktop.top}${contactFormSuccessBorderUnits.Desktop} ${contactFormSuccessBorderDesktop.right}${contactFormSuccessBorderUnits.Desktop} ${contactFormSuccessBorderDesktop.bottom}${contactFormSuccessBorderUnits.Desktop} ${contactFormSuccessBorderDesktop.left}${contactFormSuccessBorderUnits.Desktop}`;
	const contactFormSuccessTabletBorderWidth = `${contactFormSuccessBorderTablet.top}${contactFormSuccessBorderUnits.Tablet} ${contactFormSuccessBorderTablet.right}${contactFormSuccessBorderUnits.Tablet} ${contactFormSuccessBorderTablet.bottom}${contactFormSuccessBorderUnits.Tablet} ${contactFormSuccessBorderTablet.left}${contactFormSuccessBorderUnits.Tablet}`;
	const contactFormSuccessMobileBorderWidth = `${contactFormSuccessBorderMobile.top}${contactFormSuccessBorderUnits.Mobile} ${contactFormSuccessBorderMobile.right}${contactFormSuccessBorderUnits.Mobile} ${contactFormSuccessBorderMobile.bottom}${contactFormSuccessBorderUnits.Mobile} ${contactFormSuccessBorderMobile.left}${contactFormSuccessBorderUnits.Mobile}`;
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

	/** Default border radius for Success */
	const contactFormSuccessDesktopBorderRadiusWidth = `${contactFormSuccessBorderRadiusDesktop.top}${contactFormSuccessBorderRadiusUnits.Desktop} ${contactFormSuccessBorderRadiusDesktop.right}${contactFormSuccessBorderRadiusUnits.Desktop} ${contactFormSuccessBorderRadiusDesktop.bottom}${contactFormSuccessBorderRadiusUnits.Desktop} ${contactFormSuccessBorderRadiusDesktop.left}${contactFormSuccessBorderRadiusUnits.Desktop}`;
	const contactFormSuccessTabletBorderRadiusWidth = `${contactFormSuccessBorderRadiusTablet.top}${contactFormSuccessBorderRadiusUnits.Tablet} ${contactFormSuccessBorderRadiusTablet.right}${contactFormSuccessBorderRadiusUnits.Tablet} ${contactFormSuccessBorderRadiusTablet.bottom}${contactFormSuccessBorderRadiusUnits.Tablet} ${contactFormSuccessBorderRadiusTablet.left}${contactFormSuccessBorderRadiusUnits.Tablet}`;
	const contactFormSuccessMobileBorderRadiusWidth = `${contactFormSuccessBorderRadiusMobile.top}${contactFormSuccessBorderRadiusUnits.Mobile} ${contactFormSuccessBorderRadiusUnits.Mobile} ${contactFormSuccessBorderRadiusDesktop.bottom}${contactFormSuccessBorderRadiusUnits.Mobile} ${contactFormSuccessBorderRadiusDesktop.left}${contactFormSuccessBorderRadiusUnits.Mobile}`;
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

	/** Default padding for Error */
	const contactFormErrorDesktopPadding = `${contactFormErrorPaddingDesktop.top}${contactFormErrorPaddingUnits.Desktop} ${contactFormErrorPaddingDesktop.right}${contactFormErrorPaddingUnits.Desktop} ${contactFormErrorPaddingDesktop.bottom}${contactFormErrorPaddingUnits.Desktop} ${contactFormErrorPaddingDesktop.left}${contactFormErrorPaddingUnits.Desktop}`;
	const contactFormErrorTabletPadding = `${contactFormErrorPaddingTablet.top}${contactFormErrorPaddingUnits.Tablet} ${contactFormErrorPaddingTablet.right}${contactFormErrorPaddingUnits.Tablet} ${contactFormErrorPaddingTablet.bottom}${contactFormErrorPaddingUnits.Tablet} ${contactFormErrorPaddingTablet.left}${contactFormErrorPaddingUnits.Tablet}`;
	const contactFormErrorMobilePadding = `${contactFormErrorPaddingMobile.top}${contactFormErrorPaddingUnits.Mobile} ${contactFormErrorPaddingMobile.right}${contactFormErrorPaddingUnits.Mobile} ${contactFormErrorPaddingMobile.bottom}${contactFormErrorPaddingUnits.Mobile} ${contactFormErrorPaddingMobile.left}${contactFormErrorPaddingUnits.Mobile}`;
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

	/** Default margin for Error */
	const contactFormErrorDesktopMargin = `${contactFormErrorMarginDesktop.top}${contactFormErrorMarginUnits.Desktop} ${contactFormErrorMarginDesktop.right}${contactFormErrorMarginUnits.Desktop} ${contactFormErrorMarginDesktop.bottom}${contactFormErrorMarginUnits.Desktop} ${contactFormErrorMarginDesktop.left}${contactFormErrorMarginUnits.Desktop}`;
	const contactFormErrorTabletMargin = `${contactFormErrorMarginTablet.top}${contactFormErrorMarginUnits.Tablet} ${contactFormErrorMarginTablet.right}${contactFormErrorMarginUnits.Tablet} ${contactFormErrorMarginTablet.bottom}${contactFormErrorMarginUnits.Tablet} ${contactFormErrorMarginTablet.left}${contactFormErrorMarginUnits.Tablet}`;
	const contactFormErrorMobileMargin = `${contactFormErrorMarginMobile.top}${contactFormErrorMarginUnits.Mobile} ${contactFormErrorMarginMobile.right}${contactFormErrorMarginUnits.Mobile} ${contactFormErrorMarginMobile.bottom}${contactFormErrorMarginUnits.Mobile} ${contactFormErrorMarginMobile.left}${contactFormErrorMarginUnits.Mobile}`;
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

	/** Default padding for desktop (using desktop_padding) */
	const DesktopPadding = `${contactFormGlobalPaddingDesktop.top}${contactFormGlobalPaddingUnits.Desktop} ${contactFormGlobalPaddingDesktop.right}${contactFormGlobalPaddingUnits.Desktop} ${contactFormGlobalPaddingDesktop.bottom}${contactFormGlobalPaddingUnits.Desktop} ${contactFormGlobalPaddingDesktop.left}${contactFormGlobalPaddingUnits.Desktop}`;
	const TabletPadding = `${contactFormGlobalPaddingTablet.top}${contactFormGlobalPaddingUnits.Tablet} ${contactFormGlobalPaddingTablet.right}${contactFormGlobalPaddingUnits.Tablet} ${contactFormGlobalPaddingTablet.bottom}${contactFormGlobalPaddingUnits.Tablet} ${contactFormGlobalPaddingTablet.left}${contactFormGlobalPaddingUnits.Tablet}`;
	const MobilePadding = `${contactFormGlobalPaddingMobile.top}${contactFormGlobalPaddingUnits.Mobile} ${contactFormGlobalPaddingMobile.right}${contactFormGlobalPaddingUnits.Mobile} ${contactFormGlobalPaddingMobile.bottom}${contactFormGlobalPaddingUnits.Mobile} ${contactFormGlobalPaddingMobile.left}${contactFormGlobalPaddingUnits.Mobile}`;
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

	const DesktopMargin = `${contactFormGlobalMarginDesktop.top}${contactFormGlobalMarginUnits.Desktop} ${contactFormGlobalMarginDesktop.right}${contactFormGlobalMarginUnits.Desktop} ${contactFormGlobalMarginDesktop.bottom}${contactFormGlobalMarginUnits.Desktop} ${contactFormGlobalMarginDesktop.left}${contactFormGlobalMarginUnits.Desktop}`;
	const TabletMargin = `${contactFormGlobalMarginTablet.top}${contactFormGlobalMarginUnits.Tablet} ${contactFormGlobalMarginTablet.right}${contactFormGlobalMarginUnits.Tablet} ${contactFormGlobalMarginTablet.bottom}${contactFormGlobalMarginUnits.Tablet} ${contactFormGlobalMarginTablet.left}${contactFormGlobalMarginUnits.Tablet}`;
	const MobileMargin = `${contactFormGlobalMarginMobile.top}${contactFormGlobalMarginUnits.Mobile} ${contactFormGlobalMarginMobile.right}${contactFormGlobalMarginUnits.Mobile} ${contactFormGlobalMarginMobile.bottom}${contactFormGlobalMarginUnits.Mobile} ${contactFormGlobalMarginMobile.left}${contactFormGlobalMarginUnits.Mobile}`;
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
	const BorderDesktopWidth = `${contactFormGlobalBorderDesktop.top}${contactFormGlobalBorderUnits.Desktop} ${contactFormGlobalBorderDesktop.right}${contactFormGlobalBorderUnits.Desktop} ${contactFormGlobalBorderDesktop.bottom}${contactFormGlobalBorderUnits.Desktop} ${contactFormGlobalBorderDesktop.left}${contactFormGlobalBorderUnits.Desktop}`;
	const BorderTabletWidth = `${contactFormGlobalBorderTablet.top}${contactFormGlobalBorderUnits.Tablet} ${contactFormGlobalBorderTablet.right}${contactFormGlobalBorderUnits.Tablet} ${contactFormGlobalBorderTablet.bottom}${contactFormGlobalBorderUnits.Tablet} ${contactFormGlobalBorderTablet.left}${contactFormGlobalBorderUnits.Tablet}`;
	const BorderMobileWidth = `${contactFormGlobalBorderMobile.top}${contactFormGlobalBorderUnits.Mobile} ${contactFormGlobalBorderMobile.right}${contactFormGlobalBorderUnits.Mobile} ${contactFormGlobalBorderMobile.bottom}${contactFormGlobalBorderUnits.Mobile} ${contactFormGlobalBorderMobile.left}${contactFormGlobalBorderUnits.Mobile}`;
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
	const BorderRadiusDesktopWidth = `${contactFormGlobalBorderRadiusDesktop.top}${contactFormGlobalBorderRadiusUnits.Desktop} ${contactFormGlobalBorderRadiusDesktop.right}${contactFormGlobalBorderRadiusUnits.Desktop} ${contactFormGlobalBorderRadiusDesktop.bottom}${contactFormGlobalBorderRadiusUnits.Desktop} ${contactFormGlobalBorderRadiusDesktop.left}${contactFormGlobalBorderRadiusUnits.Desktop}`;
	const BorderRadiusTabletWidth = `${contactFormGlobalBorderRadiusTablet.top}${contactFormGlobalBorderRadiusUnits.Tablet} ${contactFormGlobalBorderRadiusTablet.right}${contactFormGlobalBorderRadiusUnits.Tablet} ${contactFormGlobalBorderRadiusTablet.bottom}${contactFormGlobalBorderRadiusUnits.Tablet} ${contactFormGlobalBorderRadiusTablet.left}${contactFormGlobalBorderRadiusUnits.Tablet}`;
	const BorderRadiusMobileWidth = `${contactFormGlobalBorderRadiusMobile.top}${contactFormGlobalBorderRadiusUnits.Mobile} ${contactFormGlobalBorderRadiusMobile.right}${contactFormGlobalBorderRadiusUnits.Mobile} ${contactFormGlobalBorderRadiusMobile.bottom}${contactFormGlobalBorderRadiusUnits.Mobile} ${contactFormGlobalBorderRadiusMobile.left}${contactFormGlobalBorderRadiusUnits.Mobile}`;
	/** End Border Radius */


	// Helper function to load fonts
	const loadFont = (fontFamily) => {
		if (fontFamily) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${fontFamily.replace(
				" ",
				"+",
			)}`;
			const linkElement = document.createElement("link");
			linkElement.rel = "stylesheet";
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	};

	// Apply font family styles using useEffect
	useEffect(() => {
		loadFont(contactFormLabelFontFamily);
	}, [contactFormLabelFontFamily]);

	useEffect(() => {
		loadFont(contactFormInputFontFamily);
	}, [contactFormInputFontFamily]);

	useEffect(() => {
		loadFont(contactFormSubmitFontFamily);
	}, [contactFormSubmitFontFamily]);

	useEffect(() => {
		loadFont(contactFormSuccessFontFamily);
	}, [contactFormSuccessFontFamily]);

	useEffect(() => {
		loadFont(contactFormErrorFontFamily);
	}, [contactFormErrorFontFamily]);



    const allBlockStyle = useMemo(() => `
	
        .${blockID}.fb-contact-form-wrapper {
			${contactFormGlobalZIndex.Desktop ? `z-index: ${contactFormGlobalZIndex.Desktop};` : ''}
            position: relative;
        }

		.${blockID}.fb-contact-form-wrapper {
            ${contactFormGlobalBgColor ? `background-color: ${contactFormGlobalBgColor};` : ''};
            ${DesktopPadding != "" ? `padding: ${DesktopPadding};` : ""}
            ${DesktopMargin != "" ? `margin: ${DesktopMargin};` : ""}
            ${contactFormGlobalBorder != "" ? `border: ${contactFormGlobalBorder};` : ""}
            ${BorderDesktopWidth != "" ? `border-width: ${BorderDesktopWidth};` : ""}
            ${BorderRadiusDesktopWidth != "" ? `border-radius: ${BorderRadiusDesktopWidth} !important;` : ""}
            ${contactFormGlobalBorderColor ? `border-color: ${contactFormGlobalBorderColor};` : ''};
            transition: all .3s ease-in-out;
        }
        .${blockID}.fb-contact-form-wrapper:hover {
            ${contactFormGlobalBgHoverColor ? `background-color: ${contactFormGlobalBgHoverColor};` : ''};
            ${contactFormGlobalBorderHoverColor ? `border-color: ${contactFormGlobalBorderHoverColor};` : ''};
        }

		.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-error-message .wpcf7-not-valid-tip {
            display: none;
        }

		.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input::-webkit-input-placeholder,
        .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea::-webkit-input-placeholder {
            opacity: 0;
            visibility: hidden;
        }

        .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input::-moz-placeholder,
        .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea::-moz-placeholder {
            opacity: 0;
            visibility: hidden;
        }

        .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input:-ms-input-placeholder,
        .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea:-ms-input-placeholder {
            opacity: 0;
            visibility: hidden;
        }

        .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input:-moz-placeholder,
        .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea:-moz-placeholder {
            opacity: 0;
            visibility: hidden;
        }

		.${blockID}.fb-contact-form-wrapper .wpcf7-form label {
            ${contactFormLabelColor ? `color: ${contactFormLabelColor};` : ''};
			${contactFormLabelFontFamily ? `font-family: ${contactFormLabelFontFamily};` : ""}
            ${contactFormLabelFontSize.Desktop != "" ? `font-size: ${contactFormLabelFontSize.Desktop}${contactFormLabelFontSizeUnits.Desktop};` : ''}
            ${contactFormLabelFontWeight ? `font-weight: ${contactFormLabelFontWeight};` : ""}
            ${contactFormLabelFontStyle ? `font-style: ${contactFormLabelFontStyle};` : ""}
            ${contactFormLabelTextTransform ? `text-transform: ${contactFormLabelTextTransform};` : ""}
            ${contactFormLabelTextDecoration ? `text-decoration: ${contactFormLabelTextDecoration};` : ""}
            ${contactFormLabelLetterSpacing.Desktop && contactFormLabelLetterSpacingUnits.Desktop ? `letter-spacing: ${contactFormLabelLetterSpacing.Desktop}${contactFormLabelLetterSpacingUnits.Desktop};` : ''}
            ${contactFormLabelLineHeight.Desktop && contactFormLabelLineHeightUnits.Desktop ? `line-height: ${contactFormLabelLineHeight.Desktop}${contactFormLabelLineHeightUnits.Desktop};` : ''}
        }
		.${blockID}.fb-contact-form-wrapper .wpcf7-form label:hover {
            ${contactFormLabelHoverColor ? `color: ${contactFormLabelHoverColor};` : ''};
        }


		.${blockID}.fb-contact-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
        .${blockID}.fb-contact-form-wrapper textarea, 
        .${blockID}.fb-contact-form-wrapper select {
            ${contactFormInputBgColor ? `background-color: ${contactFormInputBgColor};` : ""}
            ${contactFormInputColor ? `color: ${contactFormInputColor};` : ""}
            ${contactFormInputFontFamily ? `font-family: ${contactFormInputFontFamily};` : ""}
            ${contactFormInputFontSize.Desktop != "" ? `font-size: ${contactFormInputFontSize.Desktop}${contactFormInputFontSizeUnits.Desktop};` : ''}
            ${contactFormInputFontWeight ? `font-weight: ${contactFormInputFontWeight};` : ""}
            ${contactFormInputFontStyle ? `font-style: ${contactFormInputFontStyle};` : ""}
            ${contactFormInputTextTransform ? `text-transform: ${contactFormInputTextTransform};` : ""}
            ${contactFormInputTextDecoration ? `text-decoration: ${contactFormInputTextDecoration};` : ""}
            ${contactFormInputLetterSpacing.Desktop != "" ? `letter-spacing: ${contactFormInputLetterSpacing.Desktop}${contactFormInputLetterSpacingUnits.Desktop};` : ''}
            ${contactFormInputLineHeight.Desktop != "" ? `line-height: ${contactFormInputLineHeight.Desktop}${contactFormInputLineHeightUnits.Desktop};` : ''}
            ${contactFormTextIndentSize.Desktop != "" ? `text-indent: ${contactFormTextIndentSize.Desktop}${contactFormTextIndentSizeUnits.Desktop};` : ""}
            ${contactFormInputWidthSize.Desktop != "" ? `width: ${contactFormInputWidthSize.Desktop}${contactFormInputWidthSizeUnits.Desktop};` : ""}
            ${contactFormInputHeightSize.Desktop != "" ? `height: ${contactFormInputHeightSize.Desktop}${contactFormInputHeightSizeUnits.Desktop};` : ""}
            ${contactFormDesktopPadding != "" ? `padding: ${contactFormDesktopPadding};` : ""}
            ${contactFormBorder ? `border: ${contactFormBorder};` : ""}
            ${contactFormBorderDesktopWidth != "" ? `border-width: ${contactFormBorderDesktopWidth};` : ""}
            ${contactFormBorderColor ? `border-color: ${contactFormBorderColor};` : ""}
            ${contactFormBorderRadiusDesktopWidth != "" ? `border-radius: ${contactFormBorderRadiusDesktopWidth};` : ""}
            transition: all .3s ease-in-out;
        }

		.${blockID}.fb-contact-form-wrapper input:focus:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
        .${blockID}.fb-contact-form-wrapper textarea:focus, 
        .${blockID}.fb-contact-form-wrapper select:focus {
            ${contactFormFocusBorder ? `border: ${contactFormFocusBorder};` : ""}
            ${contactFormFocusBorderDesktopWidth != "" ? `border-width: ${contactFormFocusBorderDesktopWidth};` : ""}
            ${contactFormFocusBorderRadiusDesktopWidth != "" ? `border-radius: ${contactFormFocusBorderRadiusDesktopWidth};` : ""}
            ${contactFormInputFocusColor ? `border-color: ${contactFormInputFocusColor};` : ""}
            box-shadow: none;
			outline: none;
        }

		.${blockID}.fb-contact-form-wrapper textarea {
            ${contactFormTextareaWidthSize.Desktop != "" ? `width: ${contactFormTextareaWidthSize.Desktop}${contactFormTextareaWidthSizeUnits.Desktop};` : ""}
            ${contactFormTextareaHeightSize.Desktop != "" ? `height: ${contactFormTextareaHeightSize.Desktop}${contactFormTextareaHeightSizeUnits.Desktop};` : ""}
        }

		.${blockID}.fb-contact-form-wrapper .wpcf7-form p {
            ${contactFormSpacingSize.Desktop != "" ? `margin: ${contactFormSpacingSize.Desktop}${contactFormSpacingUnits.Desktop} 0;` : ""} 
        }

        .${blockID}.fb-contact-form-wrapper input::-webkit-input-placeholder,
        .${blockID}.fb-contact-form-wrapper textarea::-webkit-input-placeholder {
            ${contactFormPlaceholderColor ? `color: ${contactFormPlaceholderColor};` : ""}
			font-weight: 300;
        }

        .${blockID}.fb-contact-form-wrapper input::-moz-placeholder,
        .${blockID}.fb-contact-form-wrapper textarea::-moz-placeholder {
            ${contactFormPlaceholderColor ? `color: ${contactFormPlaceholderColor};` : ""}
			font-weight: 300;
        }

        .${blockID}.fb-contact-form-wrapper input:-ms-input-placeholder,
        .${blockID}.fb-contact-form-wrapper textarea:-ms-input-placeholder {
            ${contactFormPlaceholderColor ? `color: ${contactFormPlaceholderColor};` : ""}
			font-weight: 300;
        }

        .${blockID}.fb-contact-form-wrapper input:-moz-placeholder,
        .${blockID}.fb-contact-form-wrapper textarea:-moz-placeholder {
            ${contactFormPlaceholderColor ? `color: ${contactFormPlaceholderColor};` : ""}
			font-weight: 300;
        }

		.${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit {
			${contactFormSubmitAlignment === 'center' ? 'margin: 0 auto; display: block;' : ''}
			${contactFormSubmitAlignment === 'right' ? 'margin-left: auto; display: block;' : ''}
			${contactFormSubmitAlignment === 'left' ? 'margin-right: auto; display: block;' : ''}
		}

		.${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit { 
            ${contactFormSubmitHeight.Desktop ? `height: ${contactFormSubmitHeight.Desktop}${contactFormSubmitHeightUnits.Desktop};` : ""}
            ${contactFormSubmitColor ? `color: ${contactFormSubmitColor};` : ""}
            ${contactFormSubmitBgColor ? `background: ${contactFormSubmitBgColor};` : ""}
            ${contactFormSubmitFontFamily ? `font-family: ${contactFormSubmitFontFamily};` : ""}
            ${contactFormSubmitFontSize.Desktop && contactFormSubmitFontSizeUnits.Desktop ? `font-size: ${contactFormSubmitFontSize.Desktop}${contactFormSubmitFontSizeUnits.Desktop};` : ''} 
            ${contactFormSubmitFontWeight ? `font-weight: ${contactFormSubmitFontWeight};` : ""}
            ${contactFormSubmitFontStyle ? `font-style: ${contactFormSubmitFontStyle};` : ""}
            ${contactFormSubmitTextTransform ? `text-transform: ${contactFormSubmitTextTransform};` : ""}
            ${contactFormSubmitTextDecoration ? `text-decoration: ${contactFormSubmitTextDecoration};` : ""}
            ${contactFormSubmitLetterSpacing.Desktop && contactFormSubmitLetterSpacingUnits.Desktop ? `letter-spacing: ${contactFormSubmitLetterSpacing.Desktop}${contactFormSubmitLetterSpacingUnits.Desktop};` : ''}
            ${contactFormSubmitLineHeight.Desktop && contactFormSubmitLineHeightUnits.Desktop ? `line-height: ${contactFormSubmitLineHeight.Desktop}${contactFormSubmitLineHeightUnits.Desktop};` : ''} 
            ${contactFormSubmitDesktopPadding ? `padding: ${contactFormSubmitDesktopPadding};` : ""}
            ${contactFormSubmitDesktopMargin ? `margin: ${contactFormSubmitDesktopMargin};` : ""}

            ${contactFormSubmitBorder ? `border: ${contactFormSubmitBorder};` : ""}
            ${contactFormSubmitDesktopBorderWidth ? `border-width: ${contactFormSubmitDesktopBorderWidth};` : ""}
            ${contactFormSubmitBorderColor ? `border-color: ${contactFormSubmitBorderColor};` : ""}
            ${contactFormSubmitDesktopBorderRadiusWidth ? `border-radius: ${contactFormSubmitDesktopBorderRadiusWidth};` : ""}
			cursor: pointer;
        }
        .${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit:hover {
            ${contactFormSubmitHoverColor ? `color: ${contactFormSubmitHoverColor};` : ""}
            ${contactFormSubmitBgHoverColor ? `background: ${contactFormSubmitBgHoverColor};` : ""}
            ${contactFormSubmitBorderHoverColor ? `border-color: ${contactFormSubmitBorderHoverColor};` : ""}
			opacity: 0.8;
        }
        .${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit {
            ${contactFormSubmitWidthSelect === 'full-width' ? 'width: 100%;' : ''}
            ${contactFormSubmitWidthSelect === 'custom' && contactFormSubmitWidth.Desktop 
            ? `width: ${contactFormSubmitWidth.Desktop}${contactFormSubmitWidthUnits.Desktop};` 
            : ''}
        }

		.${blockID}.fb-contact-form-wrapper .wpcf7-not-valid-tip {
            ${contactFormErrorColor ? `color: ${contactFormErrorColor};` : ""}
            ${contactFormErrorFontFamily ? `font-family: ${contactFormErrorFontFamily};` : ""}
            ${contactFormErrorFontSize.Desktop && contactFormErrorFontSizeUnits.Desktop ? `font-size: ${contactFormErrorFontSize.Desktop}${contactFormErrorFontSizeUnits.Desktop};` : ''} 
            ${contactFormErrorFontWeight ? `font-weight: ${contactFormErrorFontWeight};` : ""}
            ${contactFormErrorFontStyle ? `font-style: ${contactFormErrorFontStyle};` : ""}
            ${contactFormErrorTextTransform ? `text-transform: ${contactFormErrorTextTransform};` : ""}
            ${contactFormErrorTextDecoration ? `text-decoration: ${contactFormErrorTextDecoration};` : ""}
            ${contactFormErrorLetterSpacing.Desktop && contactFormErrorLetterSpacingUnits.Desktop ? `letter-spacing: ${contactFormErrorLetterSpacing.Desktop}${contactFormErrorLetterSpacingUnits.Desktop};` : ''}
            ${contactFormErrorLineHeight.Desktop && contactFormErrorLineHeightUnits.Desktop ? `line-height: ${contactFormErrorLineHeight.Desktop}${contactFormErrorLineHeightUnits.Desktop};` : ''} 
            ${contactFormErrorDesktopPadding ? `padding: ${contactFormErrorDesktopPadding};` : ""}
            ${contactFormErrorDesktopMargin ? `margin: ${contactFormErrorDesktopMargin};` : ""}
			margin-top: 4px;
        }
		.${blockID}.fb-contact-form-wrapper .wpcf7-response-output {
            ${contactFormSuccessColor ? `color: ${contactFormSuccessColor};` : ""}
            ${contactFormSuccessBgColor ? `background: ${contactFormSuccessBgColor};` : ""}
            ${contactFormSuccessFontFamily ? `font-family: ${contactFormSuccessFontFamily};` : ""}
            ${contactFormSuccessFontSize.Desktop && contactFormSuccessFontSizeUnits.Desktop ? `font-size: ${contactFormSuccessFontSize.Desktop}${contactFormSuccessFontSizeUnits.Desktop};` : ''} 
            ${contactFormSuccessFontWeight ? `font-weight: ${contactFormSuccessFontWeight};` : ""}
            ${contactFormSuccessFontStyle ? `font-style: ${contactFormSuccessFontStyle};` : ""}
            ${contactFormSuccessTextTransform ? `text-transform: ${contactFormSuccessTextTransform};` : ""}
            ${contactFormSuccessTextDecoration ? `text-decoration: ${contactFormSuccessTextDecoration};` : ""}
            ${contactFormSuccessLetterSpacing.Desktop && contactFormSuccessLetterSpacingUnits.Desktop ? `letter-spacing: ${contactFormSuccessLetterSpacing.Desktop}${contactFormSuccessLetterSpacingUnits.Desktop};` : ''}
            ${contactFormSuccessLineHeight.Desktop && contactFormSuccessLineHeightUnits.Desktop ? `line-height: ${contactFormSuccessLineHeight.Desktop}${contactFormSuccessLineHeightUnits.Desktop};` : ''}
            ${contactFormSuccessBorder ? `border: ${contactFormSuccessBorder};` : ""}
            ${contactFormSuccessDesktopBorderWidth ? `border-width: ${contactFormSuccessDesktopBorderWidth};` : ""}
            ${contactFormSuccessBorderColor ? `border-color: ${contactFormSuccessBorderColor};` : ""}
            ${contactFormSuccessDesktopBorderRadiusWidth ? `border-radius: ${contactFormSuccessDesktopBorderRadiusWidth};` : ""}
			box-shadow: 0 1px 5px rgba(0, 0, 0, .1);
			padding: 10px 15px;
		}
		.${blockID}.fb-contact-form-wrapper .wpcf7-response-output:hover {
            ${contactFormSuccessBorderHoverColor ? `border-color: ${contactFormSuccessBorderHoverColor};` : ""}
        }

        @media only screen and (max-width: 1024px) {

			.${blockID}.fb-contact-form-wrapper {
				${contactFormGlobalZIndex.Tablet ? `z-index: ${contactFormGlobalZIndex.Tablet};` : ''}
				position: relative;
			}

			.${blockID}.fb-contact-form-wrapper {
				${contactFormGlobalBgColor ? `background-color: ${contactFormGlobalBgColor};` : ''};
				${TabletPadding != "" ? `padding: ${TabletPadding};` : ""}
				${TabletMargin != "" ? `margin: ${TabletMargin};` : ""}
				${contactFormGlobalBorder != "" ? `border: ${contactFormGlobalBorder};` : ""}
				${BorderTabletWidth != "" ? `border-width: ${BorderTabletWidth};` : ""}
				${BorderRadiusTabletWidth != "" ? `border-radius: ${BorderRadiusTabletWidth} !important;` : ""}
				${contactFormGlobalBorderColor ? `border-color: ${contactFormGlobalBorderColor};` : ''};
				transition: all .3s ease-in-out;
			}
			.${blockID}.fb-contact-form-wrapper:hover {
				${contactFormGlobalBgHoverColor ? `background-color: ${contactFormGlobalBgHoverColor};` : ''};
				${contactFormGlobalBorderHoverColor ? `border-color: ${contactFormGlobalBorderHoverColor};` : ''};
			}

			.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-error-message .wpcf7-not-valid-tip {
				display: none;
			}

			.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input::-webkit-input-placeholder,
			.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea::-webkit-input-placeholder {
				opacity: 0;
				visibility: hidden;
			}

			.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input::-moz-placeholder,
			.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea::-moz-placeholder {
				opacity: 0;
				visibility: hidden;
			}

			.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input:-ms-input-placeholder,
			.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea:-ms-input-placeholder {
				opacity: 0;
				visibility: hidden;
			}

			.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input:-moz-placeholder,
			.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea:-moz-placeholder {
				opacity: 0;
				visibility: hidden;
			}

			.${blockID}.fb-contact-form-wrapper .wpcf7-form label {
				${contactFormLabelColor ? `color: ${contactFormLabelColor};` : ''};
				${contactFormLabelFontFamily ? `font-family: ${contactFormLabelFontFamily};` : ""}
				${contactFormLabelFontSize.Tablet != "" ? `font-size: ${contactFormLabelFontSize.Tablet}${contactFormLabelFontSizeUnits.Tablet};` : ''}
				${contactFormLabelFontWeight ? `font-weight: ${contactFormLabelFontWeight};` : ""}
				${contactFormLabelFontStyle ? `font-style: ${contactFormLabelFontStyle};` : ""}
				${contactFormLabelTextTransform ? `text-transform: ${contactFormLabelTextTransform};` : ""}
				${contactFormLabelTextDecoration ? `text-decoration: ${contactFormLabelTextDecoration};` : ""}
				${contactFormLabelLetterSpacing.Tablet && contactFormLabelLetterSpacingUnits.Tablet ? `letter-spacing: ${contactFormLabelLetterSpacing.Tablet}${contactFormLabelLetterSpacingUnits.Tablet};` : ''}
				${contactFormLabelLineHeight.Tablet && contactFormLabelLineHeightUnits.Tablet ? `line-height: ${contactFormLabelLineHeight.Tablet}${contactFormLabelLineHeightUnits.Tablet};` : ''}
			}
			.${blockID}.fb-contact-form-wrapper .wpcf7-form label:hover {
				${contactFormLabelHoverColor ? `color: ${contactFormLabelHoverColor};` : ''};
			}


			.${blockID}.fb-contact-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
			.${blockID}.fb-contact-form-wrapper textarea, 
			.${blockID}.fb-contact-form-wrapper select {
				${contactFormInputBgColor ? `background-color: ${contactFormInputBgColor};` : ""}
				${contactFormInputColor ? `color: ${contactFormInputColor};` : ""}
				${contactFormInputFontFamily ? `font-family: ${contactFormInputFontFamily};` : ""}
				${contactFormInputFontSize.Tablet != "" ? `font-size: ${contactFormInputFontSize.Tablet}${contactFormInputFontSizeUnits.Tablet};` : ''}
				${contactFormInputFontWeight ? `font-weight: ${contactFormInputFontWeight};` : ""}
				${contactFormInputFontStyle ? `font-style: ${contactFormInputFontStyle};` : ""}
				${contactFormInputTextTransform ? `text-transform: ${contactFormInputTextTransform};` : ""}
				${contactFormInputTextDecoration ? `text-decoration: ${contactFormInputTextDecoration};` : ""}
				${contactFormInputLetterSpacing.Tablet != "" ? `letter-spacing: ${contactFormInputLetterSpacing.Tablet}${contactFormInputLetterSpacingUnits.Tablet};` : ''}
				${contactFormInputLineHeight.Tablet != "" ? `line-height: ${contactFormInputLineHeight.Tablet}${contactFormInputLineHeightUnits.Tablet};` : ''}
				${contactFormTextIndentSize.Tablet != "" ? `text-indent: ${contactFormTextIndentSize.Tablet}${contactFormTextIndentSizeUnits.Tablet};` : ""}
				${contactFormInputWidthSize.Tablet != "" ? `width: ${contactFormInputWidthSize.Tablet}${contactFormInputWidthSizeUnits.Tablet};` : ""}
				${contactFormInputHeightSize.Tablet != "" ? `height: ${contactFormInputHeightSize.Tablet}${contactFormInputHeightSizeUnits.Tablet};` : ""}
				${contactFormTabletPadding != "" ? `padding: ${contactFormTabletPadding};` : ""}
				${contactFormBorder ? `border: ${contactFormBorder};` : ""}
				${contactFormBorderTabletWidth != "" ? `border-width: ${contactFormBorderTabletWidth};` : ""}
				${contactFormBorderColor ? `border-color: ${contactFormBorderColor};` : ""}
				${contactFormBorderRadiusTabletWidth != "" ? `border-radius: ${contactFormBorderRadiusTabletWidth};` : ""}
				transition: all .3s ease-in-out;
			}

			.${blockID}.fb-contact-form-wrapper input:focus:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
			.${blockID}.fb-contact-form-wrapper textarea:focus, 
			.${blockID}.fb-contact-form-wrapper select:focus {
				${contactFormFocusBorder ? `border: ${contactFormFocusBorder};` : ""}
				${contactFormFocusBorderTabletWidth != "" ? `border-width: ${contactFormFocusBorderTabletWidth};` : ""}
				${contactFormFocusBorderRadiusTabletWidth != "" ? `border-radius: ${contactFormFocusBorderRadiusTabletWidth};` : ""}
				${contactFormInputFocusColor ? `border-color: ${contactFormInputFocusColor};` : ""}
				box-shadow: none;
				outline: none;
			}

			.${blockID}.fb-contact-form-wrapper textarea {
				${contactFormTextareaWidthSize.Tablet != "" ? `width: ${contactFormTextareaWidthSize.Tablet}${contactFormTextareaWidthSizeUnits.Tablet};` : ""}
				${contactFormTextareaHeightSize.Tablet != "" ? `height: ${contactFormTextareaHeightSize.Tablet}${contactFormTextareaHeightSizeUnits.Tablet};` : ""}
			}

			.${blockID}.fb-contact-form-wrapper .wpcf7-form p {
				${contactFormSpacingSize.Tablet != "" ? `margin: ${contactFormSpacingSize.Tablet}${contactFormSpacingUnits.Tablet} 0;` : ""} 
			}

			.${blockID}.fb-contact-form-wrapper input::-webkit-input-placeholder,
			.${blockID}.fb-contact-form-wrapper textarea::-webkit-input-placeholder {
				${contactFormPlaceholderColor ? `color: ${contactFormPlaceholderColor};` : ""}
				font-weight: 300;
			}

			.${blockID}.fb-contact-form-wrapper input::-moz-placeholder,
			.${blockID}.fb-contact-form-wrapper textarea::-moz-placeholder {
				${contactFormPlaceholderColor ? `color: ${contactFormPlaceholderColor};` : ""}
				font-weight: 300;
			}

			.${blockID}.fb-contact-form-wrapper input:-ms-input-placeholder,
			.${blockID}.fb-contact-form-wrapper textarea:-ms-input-placeholder {
				${contactFormPlaceholderColor ? `color: ${contactFormPlaceholderColor};` : ""}
				font-weight: 300;
			}

			.${blockID}.fb-contact-form-wrapper input:-moz-placeholder,
			.${blockID}.fb-contact-form-wrapper textarea:-moz-placeholder {
				${contactFormPlaceholderColor ? `color: ${contactFormPlaceholderColor};` : ""}
				font-weight: 300;
			}

			.${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit {
				${contactFormSubmitAlignment === 'center' ? 'margin: 0 auto; display: block;' : ''}
				${contactFormSubmitAlignment === 'right' ? 'margin-left: auto; display: block;' : ''}
				${contactFormSubmitAlignment === 'left' ? 'margin-right: auto; display: block;' : ''}
			}

			.${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit { 
				${contactFormSubmitHeight.Tablet ? `height: ${contactFormSubmitHeight.Tablet}${contactFormSubmitHeightUnits.Tablet};` : ""}
				${contactFormSubmitColor ? `color: ${contactFormSubmitColor};` : ""}
				${contactFormSubmitBgColor ? `background: ${contactFormSubmitBgColor};` : ""}
				${contactFormSubmitFontFamily ? `font-family: ${contactFormSubmitFontFamily};` : ""}
				${contactFormSubmitFontSize.Tablet && contactFormSubmitFontSizeUnits.Tablet ? `font-size: ${contactFormSubmitFontSize.Tablet}${contactFormSubmitFontSizeUnits.Tablet};` : ''} 
				${contactFormSubmitFontWeight ? `font-weight: ${contactFormSubmitFontWeight};` : ""}
				${contactFormSubmitFontStyle ? `font-style: ${contactFormSubmitFontStyle};` : ""}
				${contactFormSubmitTextTransform ? `text-transform: ${contactFormSubmitTextTransform};` : ""}
				${contactFormSubmitTextDecoration ? `text-decoration: ${contactFormSubmitTextDecoration};` : ""}
				${contactFormSubmitLetterSpacing.Tablet && contactFormSubmitLetterSpacingUnits.Tablet ? `letter-spacing: ${contactFormSubmitLetterSpacing.Tablet}${contactFormSubmitLetterSpacingUnits.Tablet};` : ''}
				${contactFormSubmitLineHeight.Tablet && contactFormSubmitLineHeightUnits.Tablet ? `line-height: ${contactFormSubmitLineHeight.Tablet}${contactFormSubmitLineHeightUnits.Tablet};` : ''} 
				${contactFormSubmitTabletPadding ? `padding: ${contactFormSubmitTabletPadding};` : ""}
				${contactFormSubmitTabletMargin ? `margin: ${contactFormSubmitTabletMargin};` : ""}

				${contactFormSubmitBorder ? `border: ${contactFormSubmitBorder};` : ""}
				${contactFormSubmitTabletBorderWidth ? `border-width: ${contactFormSubmitTabletBorderWidth};` : ""}
				${contactFormSubmitBorderColor ? `border-color: ${contactFormSubmitBorderColor};` : ""}
				${contactFormSubmitTabletBorderRadiusWidth ? `border-radius: ${contactFormSubmitTabletBorderRadiusWidth};` : ""}
				cursor: pointer;
			}
			.${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit:hover {
				${contactFormSubmitHoverColor ? `color: ${contactFormSubmitHoverColor};` : ""}
				${contactFormSubmitBgHoverColor ? `background: ${contactFormSubmitBgHoverColor};` : ""}
				${contactFormSubmitBorderHoverColor ? `border-color: ${contactFormSubmitBorderHoverColor};` : ""}
				opacity: 0.8;
			}
			.${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit {
				${contactFormSubmitWidthSelect === 'full-width' ? 'width: 100%;' : ''}
				${contactFormSubmitWidthSelect === 'custom' && contactFormSubmitWidth.Tablet 
				? `width: ${contactFormSubmitWidth.Tablet}${contactFormSubmitWidthUnits.Tablet};` 
				: ''}
			}

			.${blockID}.fb-contact-form-wrapper .wpcf7-not-valid-tip {
				${contactFormErrorColor ? `color: ${contactFormErrorColor};` : ""}
				${contactFormErrorFontFamily ? `font-family: ${contactFormErrorFontFamily};` : ""}
				${contactFormErrorFontSize.Tablet && contactFormErrorFontSizeUnits.Tablet ? `font-size: ${contactFormErrorFontSize.Tablet}${contactFormErrorFontSizeUnits.Tablet};` : ''} 
				${contactFormErrorFontWeight ? `font-weight: ${contactFormErrorFontWeight};` : ""}
				${contactFormErrorFontStyle ? `font-style: ${contactFormErrorFontStyle};` : ""}
				${contactFormErrorTextTransform ? `text-transform: ${contactFormErrorTextTransform};` : ""}
				${contactFormErrorTextDecoration ? `text-decoration: ${contactFormErrorTextDecoration};` : ""}
				${contactFormErrorLetterSpacing.Tablet && contactFormErrorLetterSpacingUnits.Tablet ? `letter-spacing: ${contactFormErrorLetterSpacing.Tablet}${contactFormErrorLetterSpacingUnits.Tablet};` : ''}
				${contactFormErrorLineHeight.Tablet && contactFormErrorLineHeightUnits.Tablet ? `line-height: ${contactFormErrorLineHeight.Tablet}${contactFormErrorLineHeightUnits.Tablet};` : ''} 
				${contactFormErrorTabletPadding ? `padding: ${contactFormErrorTabletPadding};` : ""}
				${contactFormErrorTabletMargin ? `margin: ${contactFormErrorTabletMargin};` : ""}
				margin-top: 4px;
			}
			.${blockID}.fb-contact-form-wrapper .wpcf7-response-output {
				${contactFormSuccessColor ? `color: ${contactFormSuccessColor};` : ""}
				${contactFormSuccessBgColor ? `background: ${contactFormSuccessBgColor};` : ""}
				${contactFormSuccessFontFamily ? `font-family: ${contactFormSuccessFontFamily};` : ""}
				${contactFormSuccessFontSize.Tablet && contactFormSuccessFontSizeUnits.Tablet ? `font-size: ${contactFormSuccessFontSize.Tablet}${contactFormSuccessFontSizeUnits.Tablet};` : ''} 
				${contactFormSuccessFontWeight ? `font-weight: ${contactFormSuccessFontWeight};` : ""}
				${contactFormSuccessFontStyle ? `font-style: ${contactFormSuccessFontStyle};` : ""}
				${contactFormSuccessTextTransform ? `text-transform: ${contactFormSuccessTextTransform};` : ""}
				${contactFormSuccessTextDecoration ? `text-decoration: ${contactFormSuccessTextDecoration};` : ""}
				${contactFormSuccessLetterSpacing.Tablet && contactFormSuccessLetterSpacingUnits.Tablet ? `letter-spacing: ${contactFormSuccessLetterSpacing.Tablet}${contactFormSuccessLetterSpacingUnits.Tablet};` : ''}
				${contactFormSuccessLineHeight.Tablet && contactFormSuccessLineHeightUnits.Tablet ? `line-height: ${contactFormSuccessLineHeight.Tablet}${contactFormSuccessLineHeightUnits.Tablet};` : ''}
				${contactFormSuccessBorder ? `border: ${contactFormSuccessBorder};` : ""}
				${contactFormSuccessTabletBorderWidth ? `border-width: ${contactFormSuccessTabletBorderWidth};` : ""}
				${contactFormSuccessBorderColor ? `border-color: ${contactFormSuccessBorderColor};` : ""}
				${contactFormSuccessTabletBorderRadiusWidth ? `border-radius: ${contactFormSuccessTabletBorderRadiusWidth};` : ""}
				box-shadow: 0 1px 5px rgba(0, 0, 0, .1);
				padding: 10px 15px;
			}
			.${blockID}.fb-contact-form-wrapper .wpcf7-response-output:hover {
				${contactFormSuccessBorderHoverColor ? `border-color: ${contactFormSuccessBorderHoverColor};` : ""}
			}
			
		}

		@media only screen and (max-width: 767px) {
				.${blockID}.fb-contact-form-wrapper {
				${contactFormGlobalZIndex.Tablet ? `z-index: ${contactFormGlobalZIndex.Tablet};` : ''}
				position: relative;
			}

			.${blockID}.fb-contact-form-wrapper {
				${contactFormGlobalBgColor ? `background-color: ${contactFormGlobalBgColor};` : ''};
				${MobilePadding != "" ? `padding: ${MobilePadding};` : ""} 
				${MobileMargin != "" ? `margin: ${MobileMargin};` : ""}
				${contactFormGlobalBorder != "" ? `border: ${contactFormGlobalBorder};` : ""}
				${BorderMobileWidth != "" ? `border-width: ${BorderMobileWidth};` : ""}
				${BorderRadiusMobileWidth != "" ? `border-radius: ${BorderRadiusMobileWidth} !important;` : ""}
				${contactFormGlobalBorderColor ? `border-color: ${contactFormGlobalBorderColor};` : ''};
				transition: all .3s ease-in-out;
			}
			.${blockID}.fb-contact-form-wrapper:hover {
				${contactFormGlobalBgHoverColor ? `background-color: ${contactFormGlobalBgHoverColor};` : ''};
				${contactFormGlobalBorderHoverColor ? `border-color: ${contactFormGlobalBorderHoverColor};` : ''};
			}

			.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-error-message .wpcf7-not-valid-tip {
				display: none;
			}

			.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input::-webkit-input-placeholder,
			.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea::-webkit-input-placeholder {
				opacity: 0;
				visibility: hidden;
			}

			.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input::-moz-placeholder,
			.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea::-moz-placeholder {
				opacity: 0;
				visibility: hidden;
			}

			.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input:-ms-input-placeholder,
			.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea:-ms-input-placeholder {
				opacity: 0;
				visibility: hidden;
			}

			.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input:-moz-placeholder,
			.${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea:-moz-placeholder {
				opacity: 0;
				visibility: hidden;
			}

			.${blockID}.fb-contact-form-wrapper .wpcf7-form label {
				${contactFormLabelColor ? `color: ${contactFormLabelColor};` : ''};
				${contactFormLabelFontFamily ? `font-family: ${contactFormLabelFontFamily};` : ""}
				${contactFormLabelFontSize.Mobile != "" ? `font-size: ${contactFormLabelFontSize.Mobile}${contactFormLabelFontSizeUnits.Mobile};` : ''}
				${contactFormLabelFontWeight ? `font-weight: ${contactFormLabelFontWeight};` : ""}
				${contactFormLabelFontStyle ? `font-style: ${contactFormLabelFontStyle};` : ""}
				${contactFormLabelTextTransform ? `text-transform: ${contactFormLabelTextTransform};` : ""}
				${contactFormLabelTextDecoration ? `text-decoration: ${contactFormLabelTextDecoration};` : ""}
				${contactFormLabelLetterSpacing.Mobile && contactFormLabelLetterSpacingUnits.Mobile ? `letter-spacing: ${contactFormLabelLetterSpacing.Mobile}${contactFormLabelLetterSpacingUnits.Mobile};` : ''}
				${contactFormLabelLineHeight.Mobile && contactFormLabelLineHeightUnits.Mobile ? `line-height: ${contactFormLabelLineHeight.Mobile}${contactFormLabelLineHeightUnits.Mobile};` : ''}
			}
			.${blockID}.fb-contact-form-wrapper .wpcf7-form label:hover {
				${contactFormLabelHoverColor ? `color: ${contactFormLabelHoverColor};` : ''};
			}


			.${blockID}.fb-contact-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
			.${blockID}.fb-contact-form-wrapper textarea, 
			.${blockID}.fb-contact-form-wrapper select {
				${contactFormInputBgColor ? `background-color: ${contactFormInputBgColor};` : ""}
				${contactFormInputColor ? `color: ${contactFormInputColor};` : ""}
				${contactFormInputFontFamily ? `font-family: ${contactFormInputFontFamily};` : ""}
				${contactFormInputFontSize.Mobile != "" ? `font-size: ${contactFormInputFontSize.Mobile}${contactFormInputFontSizeUnits.Mobile};` : ''}
				${contactFormInputFontWeight ? `font-weight: ${contactFormInputFontWeight};` : ""}
				${contactFormInputFontStyle ? `font-style: ${contactFormInputFontStyle};` : ""}
				${contactFormInputTextTransform ? `text-transform: ${contactFormInputTextTransform};` : ""}
				${contactFormInputTextDecoration ? `text-decoration: ${contactFormInputTextDecoration};` : ""}
				${contactFormInputLetterSpacing.Mobile != "" ? `letter-spacing: ${contactFormInputLetterSpacing.Mobile}${contactFormInputLetterSpacingUnits.Mobile};` : ''}
				${contactFormInputLineHeight.Mobile != "" ? `line-height: ${contactFormInputLineHeight.Mobile}${contactFormInputLineHeightUnits.Mobile};` : ''}
				${contactFormTextIndentSize.Mobile != "" ? `text-indent: ${contactFormTextIndentSize.Mobile}${contactFormTextIndentSizeUnits.Mobile};` : ""}
				${contactFormInputWidthSize.Mobile != "" ? `width: ${contactFormInputWidthSize.Mobile}${contactFormInputWidthSizeUnits.Mobile};` : ""}
				${contactFormInputHeightSize.Mobile != "" ? `height: ${contactFormInputHeightSize.Mobile}${contactFormInputHeightSizeUnits.Mobile};` : ""}
				${contactFormMobilePadding != "" ? `padding: ${contactFormMobilePadding};` : ""}
				${contactFormBorder ? `border: ${contactFormBorder};` : ""}
				${contactFormBorderMobileWidth != "" ? `border-width: ${contactFormBorderMobileWidth};` : ""}
				${contactFormBorderColor ? `border-color: ${contactFormBorderColor};` : ""}
				${contactFormBorderRadiusMobileWidth != "" ? `border-radius: ${contactFormBorderRadiusMobileWidth};` : ""}
				transition: all .3s ease-in-out;
			}

			.${blockID}.fb-contact-form-wrapper input:focus:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
			.${blockID}.fb-contact-form-wrapper textarea:focus, 
			.${blockID}.fb-contact-form-wrapper select:focus {
				${contactFormFocusBorder ? `border: ${contactFormFocusBorder};` : ""}
				${contactFormFocusBorderMobileWidth != "" ? `border-width: ${contactFormFocusBorderMobileWidth};` : ""}
				${contactFormFocusBorderRadiusMobileWidth != "" ? `border-radius: ${contactFormFocusBorderRadiusMobileWidth};` : ""}
				${contactFormInputFocusColor ? `border-color: ${contactFormInputFocusColor};` : ""}
				box-shadow: none;
				outline: none;
			}

			.${blockID}.fb-contact-form-wrapper textarea {
				${contactFormTextareaWidthSize.Mobile != "" ? `width: ${contactFormTextareaWidthSize.Mobile}${contactFormTextareaWidthSizeUnits.Mobile};` : ""}
				${contactFormTextareaHeightSize.Mobile != "" ? `height: ${contactFormTextareaHeightSize.Mobile}${contactFormTextareaHeightSizeUnits.Mobile};` : ""}
			}

			.${blockID}.fb-contact-form-wrapper .wpcf7-form p {
				${contactFormSpacingSize.Tablet != "" ? `margin: ${contactFormSpacingSize.Tablet}${contactFormSpacingUnits.Tablet} 0;` : ""} 
			}

			.${blockID}.fb-contact-form-wrapper input::-webkit-input-placeholder,
			.${blockID}.fb-contact-form-wrapper textarea::-webkit-input-placeholder {
				${contactFormPlaceholderColor ? `color: ${contactFormPlaceholderColor};` : ""}
				font-weight: 300;
			}

			.${blockID}.fb-contact-form-wrapper input::-moz-placeholder,
			.${blockID}.fb-contact-form-wrapper textarea::-moz-placeholder {
				${contactFormPlaceholderColor ? `color: ${contactFormPlaceholderColor};` : ""}
				font-weight: 300;
			}

			.${blockID}.fb-contact-form-wrapper input:-ms-input-placeholder,
			.${blockID}.fb-contact-form-wrapper textarea:-ms-input-placeholder {
				${contactFormPlaceholderColor ? `color: ${contactFormPlaceholderColor};` : ""}
				font-weight: 300;
			}

			.${blockID}.fb-contact-form-wrapper input:-moz-placeholder,
			.${blockID}.fb-contact-form-wrapper textarea:-moz-placeholder {
				${contactFormPlaceholderColor ? `color: ${contactFormPlaceholderColor};` : ""}
				font-weight: 300;
			}

			.${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit {
				${contactFormSubmitAlignment === 'center' ? 'margin: 0 auto; display: block;' : ''}
				${contactFormSubmitAlignment === 'right' ? 'margin-left: auto; display: block;' : ''}
				${contactFormSubmitAlignment === 'left' ? 'margin-right: auto; display: block;' : ''}
			}

			.${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit { 
				${contactFormSubmitHeight.Mobile ? `height: ${contactFormSubmitHeight.Mobile}${contactFormSubmitHeightUnits.Mobile};` : ""}
				${contactFormSubmitColor ? `color: ${contactFormSubmitColor};` : ""}
				${contactFormSubmitBgColor ? `background: ${contactFormSubmitBgColor};` : ""}
				${contactFormSubmitFontFamily ? `font-family: ${contactFormSubmitFontFamily};` : ""}
				${contactFormSubmitFontSize.Mobile && contactFormSubmitFontSizeUnits.Mobile ? `font-size: ${contactFormSubmitFontSize.Mobile}${contactFormSubmitFontSizeUnits.Mobile};` : ''} 
				${contactFormSubmitFontWeight ? `font-weight: ${contactFormSubmitFontWeight};` : ""}
				${contactFormSubmitFontStyle ? `font-style: ${contactFormSubmitFontStyle};` : ""}
				${contactFormSubmitTextTransform ? `text-transform: ${contactFormSubmitTextTransform};` : ""}
				${contactFormSubmitTextDecoration ? `text-decoration: ${contactFormSubmitTextDecoration};` : ""}
				${contactFormSubmitLetterSpacing.Mobile && contactFormSubmitLetterSpacingUnits.Mobile ? `letter-spacing: ${contactFormSubmitLetterSpacing.Mobile}${contactFormSubmitLetterSpacingUnits.Mobile};` : ''}
				${contactFormSubmitLineHeight.Mobile && contactFormSubmitLineHeightUnits.Mobile ? `line-height: ${contactFormSubmitLineHeight.Mobile}${contactFormSubmitLineHeightUnits.Mobile};` : ''} 
				${contactFormSubmitMobilePadding ? `padding: ${contactFormSubmitMobilePadding};` : ""}
				${contactFormSubmitMobileMargin ? `margin: ${contactFormSubmitMobileMargin};` : ""}

				${contactFormSubmitBorder ? `border: ${contactFormSubmitBorder};` : ""}
				${contactFormSubmitMobileBorderWidth ? `border-width: ${contactFormSubmitMobileBorderWidth};` : ""}
				${contactFormSubmitBorderColor ? `border-color: ${contactFormSubmitBorderColor};` : ""}
				${contactFormSubmitMobileBorderRadiusWidth ? `border-radius: ${contactFormSubmitMobileBorderRadiusWidth};` : ""}
				cursor: pointer;
			}
			.${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit:hover {
				${contactFormSubmitHoverColor ? `color: ${contactFormSubmitHoverColor};` : ""}
				${contactFormSubmitBgHoverColor ? `background: ${contactFormSubmitBgHoverColor};` : ""}
				${contactFormSubmitBorderHoverColor ? `border-color: ${contactFormSubmitBorderHoverColor};` : ""}
				opacity: 0.8;
			}
			.${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit {
				${contactFormSubmitWidthSelect === 'full-width' ? 'width: 100%;' : ''}
				${contactFormSubmitWidthSelect === 'custom' && contactFormSubmitWidth.Mobile 
				? `width: ${contactFormSubmitWidth.Mobile}${contactFormSubmitWidthUnits.Mobile};` 
				: ''}
			}

			.${blockID}.fb-contact-form-wrapper .wpcf7-not-valid-tip {
				${contactFormErrorColor ? `color: ${contactFormErrorColor};` : ""}
				${contactFormErrorFontFamily ? `font-family: ${contactFormErrorFontFamily};` : ""}
				${contactFormErrorFontSize.Mobile && contactFormErrorFontSizeUnits.Mobile ? `font-size: ${contactFormErrorFontSize.Mobile}${contactFormErrorFontSizeUnits.Mobile};` : ''} 
				${contactFormErrorFontWeight ? `font-weight: ${contactFormErrorFontWeight};` : ""}
				${contactFormErrorFontStyle ? `font-style: ${contactFormErrorFontStyle};` : ""}
				${contactFormErrorTextTransform ? `text-transform: ${contactFormErrorTextTransform};` : ""}
				${contactFormErrorTextDecoration ? `text-decoration: ${contactFormErrorTextDecoration};` : ""}
				${contactFormErrorLetterSpacing.Mobile && contactFormErrorLetterSpacingUnits.Mobile ? `letter-spacing: ${contactFormErrorLetterSpacing.Mobile}${contactFormErrorLetterSpacingUnits.Mobile};` : ''}
				${contactFormErrorLineHeight.Mobile && contactFormErrorLineHeightUnits.Mobile ? `line-height: ${contactFormErrorLineHeight.Mobile}${contactFormErrorLineHeightUnits.Mobile};` : ''} 
				${contactFormErrorMobilePadding ? `padding: ${contactFormErrorMobilePadding};` : ""}
				${contactFormErrorMobileMargin ? `margin: ${contactFormErrorMobileMargin};` : ""}
				margin-top: 4px;
			}
			.${blockID}.fb-contact-form-wrapper .wpcf7-response-output {
				${contactFormSuccessColor ? `color: ${contactFormSuccessColor};` : ""}
				${contactFormSuccessBgColor ? `background: ${contactFormSuccessBgColor};` : ""}
				${contactFormSuccessFontFamily ? `font-family: ${contactFormSuccessFontFamily};` : ""}
				${contactFormSuccessFontSize.Mobile && contactFormSuccessFontSizeUnits.Mobile ? `font-size: ${contactFormSuccessFontSize.Mobile}${contactFormSuccessFontSizeUnits.Mobile};` : ''} 
				${contactFormSuccessFontWeight ? `font-weight: ${contactFormSuccessFontWeight};` : ""}
				${contactFormSuccessFontStyle ? `font-style: ${contactFormSuccessFontStyle};` : ""}
				${contactFormSuccessTextTransform ? `text-transform: ${contactFormSuccessTextTransform};` : ""}
				${contactFormSuccessTextDecoration ? `text-decoration: ${contactFormSuccessTextDecoration};` : ""}
				${contactFormSuccessLetterSpacing.Mobile && contactFormSuccessLetterSpacingUnits.Mobile ? `letter-spacing: ${contactFormSuccessLetterSpacing.Mobile}${contactFormSuccessLetterSpacingUnits.Mobile};` : ''}
				${contactFormSuccessLineHeight.Mobile && contactFormSuccessLineHeightUnits.Mobile ? `line-height: ${contactFormSuccessLineHeight.Mobile}${contactFormSuccessLineHeightUnits.Mobile};` : ''}
				${contactFormSuccessBorder ? `border: ${contactFormSuccessBorder};` : ""}
				${contactFormSuccessMobileBorderWidth ? `border-width: ${contactFormSuccessMobileBorderWidth};` : ""}
				${contactFormSuccessBorderColor ? `border-color: ${contactFormSuccessBorderColor};` : ""}
				${contactFormSuccessMobileBorderRadiusWidth ? `border-radius: ${contactFormSuccessMobileBorderRadiusWidth};` : ""}
				box-shadow: 0 1px 5px rgba(0, 0, 0, .1);
				padding: 10px 15px;
			}
			.${blockID}.fb-contact-form-wrapper .wpcf7-response-output:hover {
				${contactFormSuccessBorderHoverColor ? `border-color: ${contactFormSuccessBorderHoverColor};` : ""}
			}
		}

    `, [
		blockID,
		deviceType,
		contactFormGlobalZIndex,
		formId,
		showPlaceholder,
		showErrorMessage,

		contactFormLabelColorSwitcher,
		contactFormLabelColor,
		contactFormLabelHoverColor,
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
		contactFormFocusBorderDesktopWidth,
		contactFormFocusBorderTabletWidth,
		contactFormFocusBorderMobileWidth,

		contactFormFocusBorderRadiusUnits,
		contactFormFocusBorderRadiusDesktop,
		contactFormFocusBorderRadiusTablet,
		contactFormFocusBorderRadiusMobile,
		contactFormFocusBorderRadiusLink,
		contactFormFocusBorderRadiusDesktopWidth,
		contactFormFocusBorderRadiusTabletWidth,
		contactFormFocusBorderRadiusMobileWidth,

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

        contactFormDesktopPadding,
        contactFormTabletPadding,
        contactFormMobilePadding,

        contactFormBorderDesktopWidth,
        contactFormBorderTabletWidth,
        contactFormBorderMobileWidth,

        contactFormBorderRadiusDesktopWidth,
        contactFormBorderRadiusTabletWidth,
        contactFormBorderRadiusMobileWidth,


        contactFormSubmitDesktopPadding,
        contactFormSubmitTabletPadding,
        contactFormSubmitMobilePadding,

        contactFormSubmitDesktopMargin,
        contactFormSubmitTabletMargin,
        contactFormSubmitMobileMargin,

        contactFormSubmitDesktopBorderWidth,
        contactFormSubmitTabletBorderWidth,
        contactFormSubmitMobileBorderWidth,

        contactFormSubmitDesktopBorderRadiusWidth,
        contactFormSubmitTabletBorderRadiusWidth,
        contactFormSubmitMobileBorderRadiusWidth,

        contactFormSuccessDesktopBorderWidth,
        contactFormSuccessTabletBorderWidth,
        contactFormSuccessMobileBorderWidth,

        contactFormSuccessDesktopBorderRadiusWidth,
        contactFormSuccessTabletBorderRadiusWidth,
        contactFormSuccessMobileBorderRadiusWidth,

        contactFormErrorDesktopPadding,
        contactFormErrorTabletPadding,
        contactFormErrorMobilePadding,

        contactFormErrorDesktopMargin,
        contactFormErrorTabletMargin,
        contactFormErrorMobileMargin,

        DesktopPadding,
        TabletPadding,
        MobilePadding,

        DesktopMargin,
        TabletMargin,
        MobileMargin,

        BorderDesktopWidth,
        BorderTabletWidth,
        BorderMobileWidth,

        BorderRadiusDesktopWidth,
        BorderRadiusTabletWidth,
        BorderRadiusMobileWidth,




    ]);

    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle]);


    const editorStyle = allBlockStyle.replace(/\s+/g, ' ').trim();

	return (
		<>
			<style>
				{`
				${editorStyle}
                
            `}
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
								className: "fb-tab advanced",
							},
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls" + tab.name}>
								{tab.name === "general" && (
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
								)}
                                {tab.name === "styles" && (
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
                                                    setGlobalColor={(value) => setAttributes({ contactFormLabelColor: value })}
                                                />
                                            )}

                                            {contactFormLabelColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={contactFormLabelHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ contactFormLabelHoverColor: value })}
                                                />
                                            )}


                                            <FB_TypographyControl
                                                fontFamily={contactFormLabelFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ contactFormLabelFontFamily: value })}

                                                fontSize={contactFormLabelFontSize}
                                                onChangeFontSize={(value) => setAttributes({ contactFormLabelFontSize: value })}

                                                fontSizeUnits={contactFormLabelFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ contactFormLabelFontSizeUnits: value })}

                                                fontWeight={contactFormLabelFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ contactFormLabelFontWeight: value })}

                                                fontStyle={contactFormLabelFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ contactFormLabelFontStyle: value })}

                                                textTransform={contactFormLabelTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ contactFormLabelTextTransform: value })}

                                                textDecoration={contactFormLabelTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ contactFormLabelTextDecoration: value })}

                                                letterSpacing={contactFormLabelLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ contactFormLabelLetterSpacing: value })}

                                                letterSpacingUnits={contactFormLabelLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ contactFormLabelLetterSpacingUnits: value })}

                                                lineHeight={contactFormLabelLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ contactFormLabelLineHeight: value })}

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
                                                setGlobalColor={(value) => setAttributes({ contactFormInputBgColor: value })}
                                            />

                                            <FB_ColorControl
                                                label={__("Color", "frontis-blocks")}
                                                globalColor={contactFormInputColor}
                                                setGlobalColor={(value) => setAttributes({ contactFormInputColor: value })}
                                            />


                                            <FB_TypographyControl
                                                fontFamily={contactFormInputFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ contactFormInputFontFamily: value })}

                                                fontSize={contactFormInputFontSize}
                                                onChangeFontSize={(value) => setAttributes({ contactFormInputFontSize: value })}

                                                fontSizeUnits={contactFormInputFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ contactFormInputFontSizeUnits: value })}

                                                fontWeight={contactFormInputFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ contactFormInputFontWeight: value })}

                                                fontStyle={contactFormInputFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ contactFormInputFontStyle: value })}

                                                textTransform={contactFormInputTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ contactFormInputTextTransform: value })}

                                                textDecoration={contactFormInputTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ contactFormInputTextDecoration: value })}

                                                letterSpacing={contactFormInputLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ contactFormInputLetterSpacing: value })}

                                                letterSpacingUnits={contactFormInputLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ contactFormInputLetterSpacingUnits: value })}

                                                lineHeight={contactFormInputLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ contactFormInputLineHeight: value })}

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

                                            <SelectControl
                                                    label={__("Border Style", "frontis-blocks")}
                                                    value={contactFormBorder}
                                                    options={BORDER_STYLES}
                                                    onChange={(value) => setAttributes({ contactFormBorder: value })}
                                            />

                                            <FB_ColorControl
                                                label={__("Border Color", "frontis-blocks")}
                                                globalColor={contactFormBorderColor}
                                                setGlobalColor={(value) => setAttributes({ contactFormBorderColor: value })}
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
                                                setGlobalColor={(value) => setAttributes({ contactFormInputFocusColor: value })}
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
                                                setGlobalColor={(value) => setAttributes({ contactFormPlaceholderColor: value })}
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
                                                fontFamily={contactFormSubmitFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ contactFormSubmitFontFamily: value })}

                                                fontSize={contactFormSubmitFontSize}
                                                onChangeFontSize={(value) => setAttributes({ contactFormSubmitFontSize: value })}

                                                fontSizeUnits={contactFormSubmitFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ contactFormSubmitFontSizeUnits: value })}

                                                fontWeight={contactFormSubmitFontWeight} 
                                                onChangeFontWeight={(value) => setAttributes({ contactFormSubmitFontWeight: value })}

                                                fontStyle={contactFormSubmitFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ contactFormSubmitFontStyle: value })}

                                                textTransform={contactFormSubmitTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ contactFormSubmitTextTransform: value })}

                                                textDecoration={contactFormSubmitTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ contactFormSubmitTextDecoration: value })}

                                                letterSpacing={contactFormSubmitLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ contactFormSubmitLetterSpacing: value })}

                                                letterSpacingUnits={contactFormSubmitLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ contactFormSubmitLetterSpacingUnits: value })}

                                                lineHeight={contactFormSubmitLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ contactFormSubmitLineHeight: value })}

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
                                                    setGlobalColor={(value) => setAttributes({ contactFormSubmitColor: value })}
                                                />
                                            )}

                                            {contactFormSubmitColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={contactFormSubmitHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ contactFormSubmitHoverColor: value })}
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
                                                    setGlobalColor={(value) => setAttributes({ contactFormSubmitBgColor: value })}
                                                />
                                            )}

                                            {contactFormSubmitBgColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={contactFormSubmitBgHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ contactFormSubmitBgHoverColor: value })}
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
                                                    setGlobalColor={(value) => setAttributes({ contactFormSubmitBorderColor: value })}
                                                />
                                            )}

                                            {contactFormSubmitBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={contactFormSubmitBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ contactFormSubmitBorderHoverColor: value })}
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
                                                fontFamily={contactFormSuccessFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ contactFormSuccessFontFamily: value })}

                                                fontSize={contactFormSuccessFontSize}
                                                onChangeFontSize={(value) => setAttributes({ contactFormSuccessFontSize: value })}

                                                fontSizeUnits={contactFormSuccessFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ contactFormSuccessFontSizeUnits: value })}

                                                fontWeight={contactFormSuccessFontWeight} 
                                                onChangeFontWeight={(value) => setAttributes({ contactFormSuccessFontWeight: value })}

                                                fontStyle={contactFormSuccessFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ contactFormSuccessFontStyle: value })}

                                                textTransform={contactFormSuccessTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ contactFormSuccessTextTransform: value })}

                                                textDecoration={contactFormSuccessTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ contactFormSuccessTextDecoration: value })}

                                                letterSpacing={contactFormSuccessLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ contactFormSuccessLetterSpacing: value })}

                                                letterSpacingUnits={contactFormSuccessLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ contactFormSuccessLetterSpacingUnits: value })}

                                                lineHeight={contactFormSuccessLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ contactFormSuccessLineHeight: value })}

                                                lineHeightUnits={contactFormSuccessLineHeightUnits}
                                                onChangeLineHeightUnit={(value) => setAttributes({ contactFormSuccessLineHeightUnits: value })}

                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_ColorControl
                                                label={__("Color", "frontis-blocks")}
                                                globalColor={contactFormSuccessColor}
                                                setGlobalColor={(value) => setAttributes({ contactFormSuccessColor: value })}
                                            />

                                            <FB_ColorControl
                                                label={__("Background Color", "frontis-blocks")}
                                                globalColor={contactFormSuccessBgColor}
                                                setGlobalColor={(value) => setAttributes({ contactFormSuccessBgColor: value })}
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
                                                    setGlobalColor={(value) => setAttributes({ contactFormSuccessBorderColor: value })}
                                                />
                                            )}

                                            {contactFormSuccessBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={contactFormSuccessBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ contactFormSuccessBorderHoverColor: value })}
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
                                                fontFamily={contactFormErrorFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ contactFormErrorFontFamily: value })}

                                                fontSize={contactFormErrorFontSize}
                                                onChangeFontSize={(value) => setAttributes({ contactFormErrorFontSize: value })}

                                                fontSizeUnits={contactFormErrorFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ contactFormErrorFontSizeUnits: value })}

                                                fontWeight={contactFormErrorFontWeight} 
                                                onChangeFontWeight={(value) => setAttributes({ contactFormErrorFontWeight: value })}

                                                fontStyle={contactFormErrorFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ contactFormErrorFontStyle: value })}

                                                textTransform={contactFormErrorTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ contactFormErrorTextTransform: value })}

                                                textDecoration={contactFormErrorTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ contactFormErrorTextDecoration: value })}

                                                letterSpacing={contactFormErrorLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ contactFormErrorLetterSpacing: value })}

                                                letterSpacingUnits={contactFormErrorLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ contactFormErrorLetterSpacingUnits: value })}

                                                lineHeight={contactFormErrorLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ contactFormErrorLineHeight: value })}

                                                lineHeightUnits={contactFormErrorLineHeightUnits}
                                                onChangeLineHeightUnit={(value) => setAttributes({ contactFormErrorLineHeightUnits: value })}

                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_ColorControl
                                                label={__("Color", "frontis-blocks")}
                                                globalColor={contactFormErrorColor}
                                                setGlobalColor={(value) => setAttributes({ contactFormErrorColor: value })}
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
                                )}

								{tab.name === "advanced" && (
                                    <>
                                        <div className="fb-setting-advanced-tab-wrapper">
                                            <div className="fb-setting-inner-wrapper">
                                                <PanelBody
                                                    title={__("Advanced", "frontis-blocks")}
                                                    initialOpen={true}
                                                    className='fb-setting-z-index-header'
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
                                                            setGlobalColor={(value) => setAttributes({ contactFormGlobalBgColor: value })}
                                                        />
                                                    )}

                                                    {contactFormGlobalBgColorSwitcher === 'hover' && (
                                                        <FB_ColorControl
                                                            label={__("Hover Color", "frontis-blocks")}
                                                            globalColor={contactFormGlobalBgHoverColor}
                                                            setGlobalColor={(value) => setAttributes({ contactFormGlobalBgHoverColor: value })}
                                                        />
                                                    )}
                                                </PanelBody>
                                                <PanelBody title={__("Border and Radius", "frontis-blocks")} initialOpen={false}>

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
                                                            setGlobalColor={(value) => setAttributes({ contactFormGlobalBorderColor: value })}
                                                        />
                                                    )}

                                                    {contactFormGlobalBorderColorSwitcher === 'hover' && (
                                                        <FB_ColorControl
                                                            label={__("Hover Color", "frontis-blocks")}
                                                            globalColor={contactFormGlobalBorderHoverColor}
                                                            setGlobalColor={(value) => setAttributes({ contactFormGlobalBorderHoverColor: value })}
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
