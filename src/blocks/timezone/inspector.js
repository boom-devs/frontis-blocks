import { __ } from '@wordpress/i18n';

import { InspectorControls } from '@wordpress/block-editor';

import {
	PanelBody,
	TabPanel,
	TextControl,
	SelectControl,
	ToggleControl, 
	DatePicker,
	Button,
	BaseControl,
	TextareaControl
} from '@wordpress/components';

import { useEffect, useState, useMemo, useCallback } from '@wordpress/element';
import { TIMEZONE, WEEKENDDAY, BORDER_STYLES } from '@Constants/fbConstants';
import Select2 from "react-select";
import FB_InspectorControls from '@Components/InspectorControls';
import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_Range from '@Components/range';
import {useDeviceType} from "@Config/displayType";
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_ColorControl from '@Components/color-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import FB_SwitcherControl from '@Components/switcher-control';


import './editor.scss';



export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		location,        
		timezone,        
		timezones,       
		startTime,
		endTime,
		officeHours,
		officeStatus,
		weekendDays,
		holidays,
		useMonthlySchedule,
		monthlySchedules,
		timezoneMode,
		closedMessage,
		completionMessage,
		weekendMessage,
		holidayMessage,
		useUTCTimezoneFormat,

		separator,
		showSeparatorSwitcher,
		separatorColorSwitcher,
		separatorColor,
		separatorHoverColor,
		separatorSize,
		separatorFontUnits,
		openStatusText,
		closedStatusText,
		beforeTimeText,
		afterTimeText,
		
		timezoneLocationTextGlobalTypoSwitcher,
		timezoneLocationTextGlobalTypographyData,
		timezoneLocationTextGlobalTypoType,
		timezoneLocationTextGlobalTypoOption,
		timezoneLocationTextFontFamily,
		timezoneLocationTextFontSize,
		timezoneLocationTextFontSizeUnits,
		timezoneLocationTextFontWeight,
		timezoneLocationTextFontStyle,
		timezoneLocationTextTransform,
		timezoneLocationTextDecoration,
		timezoneLocationTextLetterSpacing,
		timezoneLocationTextLetterSpacingUnits,
		timezoneLocationTextLineHeight,
		timezoneLocationTextLineHeightUnits,
		
		timezoneTimeTextGlobalTypoSwitcher,
		timezoneTimeTextGlobalTypographyData,
		timezoneTimeTextGlobalTypoType,
		timezoneTimeTextGlobalTypoOption,
		timezoneTimeTextFontFamily,
		timezoneTimeTextFontSize,
		timezoneTimeTextFontSizeUnits,
		timezoneTimeTextFontWeight,
		timezoneTimeTextFontStyle,
		timezoneTimeTextTransform,
		timezoneTimeTextDecoration,
		timezoneTimeTextLetterSpacing,
		timezoneTimeTextLetterSpacingUnits,
		timezoneTimeTextLineHeight,
		timezoneTimeTextLineHeightUnits,
		
		timezoneTextGlobalTypoSwitcher,
		timezoneTextGlobalTypographyData,
		timezoneTextGlobalTypoType,
		timezoneTextGlobalTypoOption,
		timezoneTextFontFamily,
		timezoneTextFontSize,
		timezoneTextFontSizeUnits,
		timezoneTextFontWeight,
		timezoneTextFontStyle,
		timezoneTextTransform,
		timezoneTextDecoration,
		timezoneTextLetterSpacing,
		timezoneTextLetterSpacingUnits,
		timezoneTextLineHeight,
		timezoneTextLineHeightUnits,

		locationNameTextColorTypeSwitcher,
        locationNameTextColorType,
        locationNameTextHoverColorType,
        locationNameTextColor,
        locationNameTextHoverColor,
        locationNameTextGradientColor,
        locationNameTextHoverGradientColor,
        locationNameTextCustomGradientColorSwitcher,
        locationNameTextCustomGradientColor,
        locationNameTextHoverCustomGradientColorSwitcher,
        locationNameTextHoverCustomGradientColor,
		
		timezoneTimeTextColorTypeSwitcher,
        timezoneTimeTextColorType,
        timezoneTimeTextHoverColorType,
        timezoneTimeTextColor,
        timezoneTimeTextHoverColor,
        timezoneTimeTextGradientColor,
        timezoneTimeTextHoverGradientColor,
        timezoneTimeTextCustomGradientColorSwitcher,
        timezoneTimeTextCustomGradientColor,
        timezoneTimeTextHoverCustomGradientColorSwitcher,
        timezoneTimeTextHoverCustomGradientColor,

		timezoneTextColorTypeSwitcher,
        timezoneTextColorType,
        timezoneTextHoverColorType,
        timezoneTextColor,
        timezoneTextHoverColor,
        timezoneTextGradientColor,
        timezoneTextHoverGradientColor,
        timezoneTextCustomGradientColorSwitcher,
        timezoneTextCustomGradientColor,
        timezoneTextHoverCustomGradientColorSwitcher,
        timezoneTextHoverCustomGradientColor,

		timezoneTextAlignment,
		timezoneLocationTextSpacing,
		timezoneLocationTextSpacingUnits,

		locationTimezoneBgColorTypeSwitcher,
        locationTimezoneBgColorType,
        locationTimezoneBgHoverColorType,
        locationTimezoneBgColor,
        locationTimezoneBgHoverColor,
        locationTimezoneBgGradientColor,
        locationTimezoneBgHoverGradientColor,
        locationTimezoneBgCustomGradientColorSwitcher,
        locationTimezoneBgCustomGradientColor,
        locationTimezoneBgHoverCustomGradientColorSwitcher,
        locationTimezoneBgHoverCustomGradientColor,

		locationTimezoneBorder,
        locationTimezoneBorderColor,
        locationTimezoneBorderHoverColor,
        locationTimezoneBorderColorSwitcher,

        locationTimezoneBorderUnits,
        locationTimezoneDesktopBorder,
        locationTimezoneTabletBorder,
        locationTimezoneMobileBorder,
        locationTimezoneBorderLink,

        locationTimezoneBorderRadiusUnits,
        locationTimezoneDesktopBorderRadius,
        locationTimezoneTabBorderRadius,
        locationTimezoneMobileBorderRadius,
        locationTimezoneBorderRadiusLink,
        locationTimezoneBoxShadowValues,
        locationTimezoneBoxShadowCssValue,

		locationTimezonePaddingUnits,
        locationTimezoneDesktopPadding,
        locationTimezoneTabPadding,
        locationTimezoneMobilePadding,
        locationTimezonePaddingLink,
        locationTimezoneMarginUnits,
        locationTimezoneDesktopMargin,
        locationTimezoneTabMargin,
        locationTimezoneMobileMargin,
        locationTimezoneMarginLink,

		infoBoxBgColorTypeSwitcher,
        infoBoxBgColorType,
        infoBoxBgHoverColorType,
        infoBoxBgColor,
        infoBoxBgHoverColor,
        infoBoxBgGradientColor,
        infoBoxBgHoverGradientColor,
        infoBoxBgCustomGradientColorSwitcher,
        infoBoxBgCustomGradientColor,
        infoBoxBgHoverCustomGradientColorSwitcher,
        infoBoxBgHoverCustomGradientColor,

		infoBoxBorder,
        infoBoxBorderColor,
        infoBoxBorderHoverColor,
        infoBoxBorderColorSwitcher,

        infoBoxBorderUnits,
        infoBoxDesktopBorder,
        infoBoxTabletBorder,
        infoBoxMobileBorder,
        infoBoxBorderLink,

        infoBoxBorderRadiusUnits,
        infoBoxDesktopBorderRadius,
        infoBoxTabBorderRadius,
        infoBoxMobileBorderRadius,
        infoBoxBorderRadiusLink,
        infoBoxBoxShadowValues,
        infoBoxBoxShadowCssValue,

		infoBoxPaddingUnits,
        infoBoxDesktopPadding,
        infoBoxTabPadding,
        infoBoxMobilePadding,
        infoBoxPaddingLink,
        infoBoxMarginUnits,
        infoBoxDesktopMargin,
        infoBoxTabMargin,
        infoBoxMobileMargin,
        infoBoxMarginLink,

		statusTextGlobalTypoSwitcher,
		statusTextGlobalTypographyData,
		statusTextGlobalTypoType,
		statusTextGlobalTypoOption,
		statusTextFontFamily,
		statusTextFontSize,
		statusTextFontSizeUnits,
		statusTextFontWeight,
		statusTextFontStyle,
		statusTextTransform,
		statusTextDecoration,
		statusTextLetterSpacing,
		statusTextLetterSpacingUnits,
		statusTextLineHeight,
		statusTextLineHeightUnits,

		statusColorSwitcher,
		statusColor,
		statusHoverColor,

	} = attributes;

	const deviceType= useDeviceType();

	useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-timezone-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

	// locatoin timezone margin and padding style start
	//padding
	const locationTimezonePaddingUnitsHandler = (unit) => {
        setAttributes({
            locationTimezonePaddingUnits: {
                ...locationTimezonePaddingUnits,
                [deviceType]: unit
            }
        });
    };

	const locationTimezonePaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (locationTimezonePaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        locationTimezoneDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        locationTimezoneTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        locationTimezoneMobilePadding: {
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
                    setAttributes({ locationTimezoneDesktopPadding: { ...locationTimezoneDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ locationTimezoneTabPadding: { ...locationTimezoneTabPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ locationTimezoneMobilePadding: { ...locationTimezoneMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

	const locationTimezonePaddingLinkBtn = () => {
        setAttributes({
            locationTimezonePaddingLink: !locationTimezonePaddingLink
        });
    };
	const locationTimezoneDesktopPaddingWidth = `${locationTimezoneDesktopPadding?.top}${locationTimezonePaddingUnits?.Desktop} ${locationTimezoneDesktopPadding?.right}${locationTimezonePaddingUnits?.Desktop} ${locationTimezoneDesktopPadding?.bottom}${locationTimezonePaddingUnits?.Desktop} ${locationTimezoneDesktopPadding?.left}${locationTimezonePaddingUnits?.Desktop}`;
    const locationTimezoneTabletPaddingWidth = `${locationTimezoneTabPadding?.top}${locationTimezonePaddingUnits?.Tablet} ${locationTimezoneTabPadding?.right}${locationTimezonePaddingUnits?.Tablet} ${locationTimezoneTabPadding?.bottom}${locationTimezonePaddingUnits?.Tablet} ${locationTimezoneTabPadding?.left}${locationTimezonePaddingUnits?.Tablet}`;
    const locationTimezoneMobilePaddingWidth = `${locationTimezoneMobilePadding?.top}${locationTimezonePaddingUnits?.Mobile} ${locationTimezoneMobilePadding?.right}${locationTimezonePaddingUnits?.Mobile} ${locationTimezoneMobilePadding?.bottom}${locationTimezonePaddingUnits?.Mobile} ${locationTimezoneMobilePadding?.left}${locationTimezonePaddingUnits?.Mobile}`;
	
	//margin
	const locationTimezoneMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (locationTimezoneMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        locationTimezoneDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        locationTimezoneTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        locationTimezoneMobileMargin: {
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
                    setAttributes({ locationTimezoneDesktopMargin: { ...locationTimezoneDesktopMargin, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ locationTimezoneTabMargin: { ...locationTimezoneTabMargin, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ locationTimezoneMobileMargin: { ...locationTimezoneMobileMargin, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };
	const locationTimezoneMarginLinkBtn = () => {
        setAttributes({
            locationTimezoneMarginLink: !locationTimezoneMarginLink
        });
    };
	const locationTimezoneMarginUnitsHandler = (unit) => {
        setAttributes({
            locationTimezoneMarginUnits: {
                ...locationTimezoneMarginUnits,
                [deviceType]: unit
            }
        });
    };
	const locationTimezoneDesktopMarginWidth = `${locationTimezoneDesktopMargin?.top}${locationTimezoneMarginUnits?.Desktop} ${locationTimezoneDesktopMargin?.right}${locationTimezoneMarginUnits?.Desktop} ${locationTimezoneDesktopMargin?.bottom}${locationTimezoneMarginUnits?.Desktop} ${locationTimezoneDesktopMargin?.left}${locationTimezoneMarginUnits?.Desktop}`;
    const locationTimezoneTabletMarginWidth = `${locationTimezoneTabMargin?.top}${locationTimezoneMarginUnits?.Tablet} ${locationTimezoneTabMargin?.right}${locationTimezoneMarginUnits?.Tablet} ${locationTimezoneTabMargin?.bottom}${locationTimezoneMarginUnits?.Tablet} ${locationTimezoneTabMargin?.left}${locationTimezoneMarginUnits?.Tablet}`;
    const locationTimezoneMobileMarginWidth = `${locationTimezoneMobileMargin?.top}${locationTimezoneMarginUnits?.Mobile} ${locationTimezoneMobileMargin?.right}${locationTimezoneMarginUnits?.Mobile} ${locationTimezoneMobileMargin?.bottom}${locationTimezoneMarginUnits?.Mobile} ${locationTimezoneMobileMargin?.left}${locationTimezoneMarginUnits?.Mobile}`;
	// locatoin timezone margin and padding style end

	// info box margin and padding style start
	//padding
	const infoBoxPaddingUnitsHandler = (unit) => {
        setAttributes({
            infoBoxPaddingUnits: {
                ...infoBoxPaddingUnits,
                [deviceType]: unit
            }
        });
    };

	const infoBoxPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (infoBoxPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        infoBoxDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        infoBoxTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        infoBoxMobilePadding: {
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
                    setAttributes({ infoBoxDesktopPadding: { ...infoBoxDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ infoBoxTabPadding: { ...infoBoxTabPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ infoBoxMobilePadding: { ...infoBoxMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

	const infoBoxPaddingLinkBtn = () => {
        setAttributes({
            infoBoxPaddingLink: !infoBoxPaddingLink
        });
    };
	const infoBoxDesktopPaddingWidth = `${infoBoxDesktopPadding?.top}${infoBoxPaddingUnits?.Desktop} ${infoBoxDesktopPadding?.right}${infoBoxPaddingUnits?.Desktop} ${infoBoxDesktopPadding?.bottom}${infoBoxPaddingUnits?.Desktop} ${infoBoxDesktopPadding?.left}${infoBoxPaddingUnits?.Desktop}`;
    const infoBoxTabletPaddingWidth = `${infoBoxTabPadding?.top}${infoBoxPaddingUnits?.Tablet} ${infoBoxTabPadding?.right}${infoBoxPaddingUnits?.Tablet} ${infoBoxTabPadding?.bottom}${infoBoxPaddingUnits?.Tablet} ${infoBoxTabPadding?.left}${infoBoxPaddingUnits?.Tablet}`;
    const infoBoxMobilePaddingWidth = `${infoBoxMobilePadding?.top}${infoBoxPaddingUnits?.Mobile} ${infoBoxMobilePadding?.right}${infoBoxPaddingUnits?.Mobile} ${infoBoxMobilePadding?.bottom}${infoBoxPaddingUnits?.Mobile} ${infoBoxMobilePadding?.left}${infoBoxPaddingUnits?.Mobile}`;
	
	//margin
	const infoBoxMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (infoBoxMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        infoBoxDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        infoBoxTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        infoBoxMobileMargin: {
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
                    setAttributes({ infoBoxDesktopMargin: { ...infoBoxDesktopMargin, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ infoBoxTabMargin: { ...infoBoxTabMargin, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ infoBoxMobileMargin: { ...infoBoxMobileMargin, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };
	const infoBoxMarginLinkBtn = () => {
        setAttributes({
            infoBoxMarginLink: !infoBoxMarginLink
        });
    };
	const infoBoxMarginUnitsHandler = (unit) => {
        setAttributes({
            infoBoxMarginUnits: {
                ...infoBoxMarginUnits,
                [deviceType]: unit
            }
        });
    };
	const infoBoxDesktopMarginWidth = `${infoBoxDesktopMargin?.top}${infoBoxMarginUnits?.Desktop} ${infoBoxDesktopMargin?.right}${infoBoxMarginUnits?.Desktop} ${infoBoxDesktopMargin?.bottom}${infoBoxMarginUnits?.Desktop} ${infoBoxDesktopMargin?.left}${infoBoxMarginUnits?.Desktop}`;

    const infoBoxTabletMarginWidth = `${infoBoxTabMargin?.top}${infoBoxMarginUnits?.Tablet} ${infoBoxTabMargin?.right}${infoBoxMarginUnits?.Tablet} ${infoBoxTabMargin?.bottom}${infoBoxMarginUnits?.Tablet} ${infoBoxTabMargin?.left}${infoBoxMarginUnits?.Tablet}`;

    const infoBoxMobileMarginWidth = `${infoBoxMobileMargin?.top}${infoBoxMarginUnits?.Mobile} ${infoBoxMobileMargin?.right}${infoBoxMarginUnits?.Mobile} ${infoBoxMobileMargin?.bottom}${infoBoxMarginUnits?.Mobile} ${infoBoxMobileMargin?.left}${infoBoxMarginUnits?.Mobile}`;
	// info box margin and padding style end

	// Start locatoin timezone Border, radius, box-shadow style
	const locationTimezoneBorderUnitsHandler = (unit) => {
        setAttributes({
            locationTimezoneBorderUnits: {
                ...locationTimezoneBorderUnits,
                [deviceType]: unit
            }
        });
    };

	const locationTimezoneBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            locationTimezoneBorderRadiusUnits: {
                ...locationTimezoneBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };

	const locationTimezoneDesktopBorderRadiusWidth = `${locationTimezoneDesktopBorderRadius?.top}${locationTimezoneBorderRadiusUnits?.Desktop} ${locationTimezoneDesktopBorderRadius?.right}${locationTimezoneBorderRadiusUnits?.Desktop} ${locationTimezoneDesktopBorderRadius?.bottom}${locationTimezoneBorderRadiusUnits?.Desktop} ${locationTimezoneDesktopBorderRadius?.left}${locationTimezoneBorderRadiusUnits?.Desktop}`;

    const locationTimezoneTabletBorderRadiusWidth = `${locationTimezoneTabBorderRadius?.top}${locationTimezoneBorderRadiusUnits?.Tablet} ${locationTimezoneTabBorderRadius?.right}${locationTimezoneBorderRadiusUnits?.Tablet} ${locationTimezoneTabBorderRadius?.bottom}${locationTimezoneBorderRadiusUnits?.Tablet} ${locationTimezoneTabBorderRadius?.left}${locationTimezoneBorderRadiusUnits?.Tablet}`;
	
    const locationTimezoneMobileBorderRadiusWidth = `${locationTimezoneMobileBorderRadius?.top}${locationTimezoneBorderRadiusUnits?.Mobile} ${locationTimezoneMobileBorderRadius?.right}${locationTimezoneBorderRadiusUnits?.Mobile} ${locationTimezoneMobileBorderRadius?.bottom}${locationTimezoneBorderRadiusUnits?.Mobile} ${locationTimezoneMobileBorderRadius?.left}${locationTimezoneBorderRadiusUnits?.Mobile}`;

	const locationTimezoneBorderLinkBtn = () => {
        setAttributes({
            locationTimezoneBorderLink: !locationTimezoneBorderLink
        });
    };

	const locationTimezoneDesktopBorderWidth = `${locationTimezoneDesktopBorder?.top}${locationTimezoneBorderUnits?.Desktop} ${locationTimezoneDesktopBorder?.right}${locationTimezoneBorderUnits?.Desktop} ${locationTimezoneDesktopBorder?.bottom}${locationTimezoneBorderUnits?.Desktop} ${locationTimezoneDesktopBorder?.left}${locationTimezoneBorderUnits?.Desktop}`;
    
	const locationTimezoneTabletBorderWidth = `${locationTimezoneTabletBorder?.top}${locationTimezoneBorderUnits?.Tablet} ${locationTimezoneTabletBorder?.right}${locationTimezoneBorderUnits?.Tablet} ${locationTimezoneTabletBorder?.bottom}${locationTimezoneBorderUnits?.Tablet} ${locationTimezoneTabletBorder?.left}${locationTimezoneBorderUnits?.Tablet}`;
    
	const locationTimezoneMobileBorderWidth = `${locationTimezoneMobileBorder?.top}${locationTimezoneBorderUnits?.Mobile} ${locationTimezoneMobileBorder?.right}${locationTimezoneBorderUnits?.Mobile} ${locationTimezoneMobileBorder?.bottom}${locationTimezoneBorderUnits?.Mobile} ${locationTimezoneMobileBorder?.left}${locationTimezoneBorderUnits?.Mobile}`;

	const locationTimezoneBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (locationTimezoneBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        locationTimezoneDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        locationTimezoneTabletBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        locationTimezoneMobileBorder: {
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
                    setAttributes({ locationTimezoneDesktopBorder: { ...locationTimezoneDesktopBorder, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ locationTimezoneTabletBorder: { ...locationTimezoneTabletBorder, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ locationTimezoneMobileBorder: { ...locationTimezoneMobileBorder, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

	const locationTimezoneBorderRadiusLinkBtn = () => {
        setAttributes({
            locationTimezoneBorderRadiusLink: !locationTimezoneBorderRadiusLink
        });
    };

	const locationTimezoneBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (locationTimezoneBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        locationTimezoneDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        locationTimezoneTabBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        locationTimezoneMobileBorderRadius: {
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
                    setAttributes({ locationTimezoneDesktopBorderRadius: { ...locationTimezoneDesktopBorderRadius, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ locationTimezoneTabBorderRadius: { ...locationTimezoneTabBorderRadius, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ locationTimezoneMobileBorderRadius: { ...locationTimezoneMobileBorderRadius, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };
	// End locatoin timezone Border, radius, box-shadow style

	// Start office info Box Border, radius, box-shadow style
	const infoBoxBorderUnitsHandler = (unit) => {
        setAttributes({
            infoBoxBorderUnits: {
                ...infoBoxBorderUnits,
                [deviceType]: unit
            }
        });
    };

	const infoBoxBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            infoBoxBorderRadiusUnits: {
                ...infoBoxBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };

	const infoBoxDesktopBorderRadiusWidth = `${infoBoxDesktopBorderRadius?.top}${infoBoxBorderRadiusUnits?.Desktop} ${infoBoxDesktopBorderRadius?.right}${infoBoxBorderRadiusUnits?.Desktop} ${infoBoxDesktopBorderRadius?.bottom}${infoBoxBorderRadiusUnits?.Desktop} ${infoBoxDesktopBorderRadius?.left}${infoBoxBorderRadiusUnits?.Desktop}`;

    const infoBoxTabletBorderRadiusWidth = `${infoBoxTabBorderRadius?.top}${infoBoxBorderRadiusUnits?.Tablet} ${infoBoxTabBorderRadius?.right}${infoBoxBorderRadiusUnits?.Tablet} ${infoBoxTabBorderRadius?.bottom}${infoBoxBorderRadiusUnits?.Tablet} ${infoBoxTabBorderRadius?.left}${infoBoxBorderRadiusUnits?.Tablet}`;

    const infoBoxMobileBorderRadiusWidth = `${infoBoxMobileBorderRadius?.top}${infoBoxBorderRadiusUnits?.Mobile} ${infoBoxMobileBorderRadius?.right}${infoBoxBorderRadiusUnits?.Mobile} ${infoBoxMobileBorderRadius?.bottom}${infoBoxBorderRadiusUnits?.Mobile} ${infoBoxMobileBorderRadius?.left}${infoBoxBorderRadiusUnits?.Mobile}`;

	const infoBoxBorderLinkBtn = () => {
        setAttributes({
            infoBoxBorderLink: !infoBoxBorderLink
        });
    };

	const infoBoxDesktopBorderWidth = `${infoBoxDesktopBorder?.top}${infoBoxBorderUnits?.Desktop} ${infoBoxDesktopBorder?.right}${infoBoxBorderUnits?.Desktop} ${infoBoxDesktopBorder?.bottom}${infoBoxBorderUnits?.Desktop} ${infoBoxDesktopBorder?.left}${infoBoxBorderUnits?.Desktop}`;
    
	const infoBoxTabletBorderWidth = `${infoBoxTabletBorder?.top}${infoBoxBorderUnits?.Tablet} ${infoBoxTabletBorder?.right}${infoBoxBorderUnits?.Tablet} ${infoBoxTabletBorder?.bottom}${infoBoxBorderUnits?.Tablet} ${infoBoxTabletBorder?.left}${infoBoxBorderUnits?.Tablet}`;
    
	const infoBoxMobileBorderWidth = `${infoBoxMobileBorder?.top}${infoBoxBorderUnits?.Mobile} ${infoBoxMobileBorder?.right}${infoBoxBorderUnits?.Mobile} ${infoBoxMobileBorder?.bottom}${infoBoxBorderUnits?.Mobile} ${infoBoxMobileBorder?.left}${infoBoxBorderUnits?.Mobile}`;

	const infoBoxBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (infoBoxBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        infoBoxDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        infoBoxTabletBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        infoBoxMobileBorder: {
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
                    setAttributes({ infoBoxDesktopBorder: { ...infoBoxDesktopBorder, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ infoBoxTabletBorder: { ...infoBoxTabletBorder, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ infoBoxMobileBorder: { ...infoBoxMobileBorder, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

	const infoBoxBorderRadiusLinkBtn = () => {
        setAttributes({
            infoBoxBorderRadiusLink: !infoBoxBorderRadiusLink
        });
    };

	const infoBoxBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (infoBoxBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        infoBoxDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        infoBoxTabBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        infoBoxMobileBorderRadius: {
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
                    setAttributes({ infoBoxDesktopBorderRadius: { ...infoBoxDesktopBorderRadius, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ infoBoxTabBorderRadius: { ...infoBoxTabBorderRadius, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ infoBoxMobileBorderRadius: { ...infoBoxMobileBorderRadius, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };
	// End locatoin office info box Border, radius, box-shadow style

	// State variables
	const [selectedDate, setSelectedDate] = useState('');
	const [currentTime, setCurrentTime] = useState('');
	const [selectedMonth, setSelectedMonth] = useState('');

	// Initialize attributes with proper default values
	useEffect(() => {
		const updates = {};
		
		if (!timezones || timezones.length === 0) {
			updates.timezones = getAllTimezones();
			updates.timezone = timezone || 'Asia/Dhaka';
			updates.timezoneMode = timezoneMode || 'auto';
		}

		// Set proper default time values
		if (!startTime || !startTime.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
			updates.startTime = '09:00';
		}
		if (!endTime || !endTime.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
			updates.endTime = '17:00';
		}

		if (!weekendDays) {
			updates.weekendDays = ['0', '6'];
		}

		if (useMonthlySchedule === undefined) {
			updates.useMonthlySchedule = false;
		}
		
		if (useUTCTimezoneFormat === undefined) {
			updates.useUTCTimezoneFormat = false;
		}

		// Initialize default messages
		if (!closedMessage) {
			updates.closedMessage = 'Office is closed';
		}
		if (!completionMessage) {
			updates.completionMessage = 'Office is open';
		}
		if (!weekendMessage) {
			updates.weekendMessage = 'Closed for weekend';
		}
		if (!holidayMessage) {
			updates.holidayMessage = 'Closed for holiday';
		}

		// Initialize separator
		if (!separator) {
			updates.separator = ' | ';
		}

		// Initialize status texts
		if (!openStatusText) {
			updates.openStatusText = 'Open';
		}
		if (!closedStatusText) {
			updates.closedStatusText = 'Closed';
		}

		// Initialize time texts
		if (!beforeTimeText) {
			updates.beforeTimeText = 'Office will start at';
		}
		if (!afterTimeText) {
			updates.afterTimeText = 'Office will close at';
		}

		if (Object.keys(updates).length > 0) {
			setAttributes(updates);
		}
	}, []);

	// Helper functions
	const getWeekdayName = useCallback((dayNumber) => {
		const days = { 
			'0': 'Sunday', 
			'1': 'Monday', 
			'2': 'Tuesday', 
			'3': 'Wednesday', 
			'4': 'Thursday', 
			'5': 'Friday', 
			'6': 'Saturday' 
		};
		return days[dayNumber] || '';
	}, []);

	const getAutoTimezone = useCallback(() => {
		try { return Intl.DateTimeFormat().resolvedOptions().timeZone; } 
		catch (error) { return 'Asia/Dhaka'; }
	}, []);

	//Show timezone name when auto mode
	const getFormattedTimezone = useCallback((timezone) => {
		try {
			const now = new Date();
			
			if (useUTCTimezoneFormat) {
				// UTC format - show timezone name with offset
				const formatter = new Intl.DateTimeFormat('en-US', {
					timeZone: timezone,
					timeZoneName: 'longOffset'
				});
				const parts = formatter.formatToParts(now);
				const offsetPart = parts.find(part => part.type === 'timeZoneName');
				
				if (offsetPart && offsetPart.value.startsWith('GMT')) {
					const offset = offsetPart.value.replace('GMT', '').replace('UTC', '');
					const timezoneName = timezone.split('/').pop().replace(/_/g, ' ');
					return `${timezoneName} (UTC${offset})`;
				}
			} else {
				// GMT format (default) - show timezone name with offset
				const offset = now.toLocaleString('en-US', { 
					timeZone: timezone, 
					timeZoneName: 'shortOffset' 
				}).split(' ').pop();
				const timezoneName = timezone.split('/').pop().replace(/_/g, ' ');
				return `${timezoneName} (${offset})`;
			}
		} catch (error) {
			const timezoneName = timezone?.split('/').pop()?.replace(/_/g, ' ') || 'Local Time';
			return useUTCTimezoneFormat ? `${timezoneName} (UTC+06:00)` : `${timezoneName} (GMT+6)`;
		}
	}, [useUTCTimezoneFormat]);

	const getAllTimezones = useCallback(() => {
		try {
			const timezoneList = Intl.supportedValuesOf('timeZone');
			const options = timezoneList.map(tz => {
				try {
					const now = new Date();
					
					if (useUTCTimezoneFormat) {
						const formatter = new Intl.DateTimeFormat('en-US', {
							timeZone: tz,
							timeZoneName: 'longOffset'
						});
						const parts = formatter.formatToParts(now);
						const offsetPart = parts.find(part => part.type === 'timeZoneName');
						
						let offsetString = '';
						if (offsetPart && offsetPart.value.startsWith('GMT')) {
							offsetString = offsetPart.value.replace('GMT', '').replace('UTC', '');
						}
						
						const timezoneName = tz.split('/').map(part => part.replace(/_/g, ' ')).join(' - ');
						return { label: `${timezoneName} (UTC${offsetString})`, value: tz };
					} else {
						const offset = now.toLocaleString('en-US', { 
							timeZone: tz, 
							timeZoneName: 'shortOffset' 
						}).split(' ').pop();
						
						const timezoneName = tz.split('/').map(part => part.replace(/_/g, ' ')).join(' - ');
						return { label: `${timezoneName} (${offset})`, value: tz };
					}
				} catch (e) {
					const timezoneName = tz.split('/').map(part => part.replace(/_/g, ' ')).join(' - ');
					return { label: timezoneName, value: tz };
				}
			});
			return options.sort((a, b) => a.label.localeCompare(b.label));
		} catch (error) {
			const fallbackTimezones = [
				{ label: 'Asia - Dhaka (GMT+6)', value: 'Asia/Dhaka' }, 
				{ label: 'UTC (GMT+0)', value: 'UTC' },
				{ label: 'America - New York (GMT-5)', value: 'America/New_York' }, 
				{ label: 'America - Los Angeles (GMT-8)', value: 'America/Los_Angeles' },
				{ label: 'Europe - London (GMT+0)', value: 'Europe/London' }, 
				{ label: 'Asia - Kolkata (GMT+5:30)', value: 'Asia/Kolkata' },
				{ label: 'Asia - Singapore (GMT+8)', value: 'Asia/Singapore' }, 
				{ label: 'Asia - Tokyo (GMT+9)', value: 'Asia/Tokyo' }
			];
			
			if (useUTCTimezoneFormat) {
				return fallbackTimezones.map(tz => ({
					...tz,
					label: tz.label.replace(/GMT([+-]\d+(?::\d+)?)/g, (match, offset) => {
						if (offset.includes(':')) return `UTC${offset}`;
						const hours = parseInt(offset);
						return `UTC${offset}:00`;
					})
				})).sort((a, b) => a.label.localeCompare(b.label));
			}
			
			return fallbackTimezones.sort((a, b) => a.label.localeCompare(b.label));
		}
	}, [useUTCTimezoneFormat]);

	// Core business logic
	const getEffectiveTimezone = useCallback(() => {
		return timezoneMode === 'auto' ? getAutoTimezone() : timezone;
	}, [timezoneMode, timezone, getAutoTimezone]);

	const getCurrentTimeInTimezone = useCallback((timezoneToUse = null) => {
		const effectiveTimezone = timezoneToUse || getEffectiveTimezone();
		if (!effectiveTimezone) return '';
		try {
			return new Date().toLocaleTimeString('en-US', {
				timeZone: effectiveTimezone,
				hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
			});
		} catch (error) {
			return 'Time Unavailable';
		}
	}, [getEffectiveTimezone]);

	const getCurrentMonthSchedule = useCallback(() => {
		if (!useMonthlySchedule || !monthlySchedules || monthlySchedules.length === 0) return null;
		const currentMonth = new Date().getMonth().toString();
		return monthlySchedules.find(schedule => schedule.month === currentMonth);
	}, [useMonthlySchedule, monthlySchedules]);

	const getEffectiveOfficeHours = useCallback(() => {
		if (useMonthlySchedule) {
			const currentSchedule = getCurrentMonthSchedule();
			if (currentSchedule) return { startTime: currentSchedule.startTime, endTime: currentSchedule.endTime };
		}
		return { startTime, endTime };
	}, [useMonthlySchedule, getCurrentMonthSchedule, startTime, endTime]);

	// Calculate remaining time when open
	const getRemainingTime = useCallback(() => {
		const effectiveTimezone = getEffectiveTimezone();
		const effectiveHours = getEffectiveOfficeHours();
		const { endTime: effectiveEndTime } = effectiveHours;

		const isValidTime = (time) => {
			if (!time) return false;
			const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
			return timeRegex.test(time);
		};

		if (!effectiveTimezone || !isValidTime(effectiveEndTime)) {
			return '';
		}

		try {
			const now = new Date();
			const currentTimeStr = now.toLocaleTimeString('en-US', {
				timeZone: effectiveTimezone,
				hour: '2-digit', minute: '2-digit', hour12: false
			});

			const [currentHours, currentMinutes] = currentTimeStr.split(':').map(Number);
			const [endHours, endMinutes] = effectiveEndTime.split(':').map(Number);

			let currentTotal = currentHours * 60 + currentMinutes;
			let endTotal = endHours * 60 + endMinutes;

			if (endTotal < currentTotal) {
				endTotal += 24 * 60;
			}

			const remainingMinutes = endTotal - currentTotal;
			
			if (remainingMinutes <= 0) return '';

			const hours = Math.floor(remainingMinutes / 60);
			const minutes = remainingMinutes % 60;

			if (hours > 0 && minutes > 0) {
				return `${hours} hour${hours !== 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}`;
			} else if (hours > 0) {
				return `${hours} hour${hours !== 1 ? 's' : ''}`;
			} else {
				return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
			}
		} catch (error) {
			return '';
		}
	}, [getEffectiveTimezone, getEffectiveOfficeHours]);

	// Status calculation functions
	const isWeekendOrHoliday = useCallback((dayOfWeek, todayDate) => {
		const weekendDaysArray = weekendDays || [];
		if (weekendDaysArray.includes(dayOfWeek.toString())) return 'Weekend';
		if (holidays && holidays.includes(todayDate)) return 'Holiday';
		return null;
	}, [weekendDays, holidays]);

	const calculateTimeStatus = useCallback((currentTimeStr, startTime, endTime) => {
		const [currentHours, currentMinutes] = currentTimeStr.split(':').map(Number);
		const [startHours, startMinutes] = startTime.split(':').map(Number);
		const [endHours, endMinutes] = endTime.split(':').map(Number);

		let currentTotal = currentHours * 60 + currentMinutes;
		let startTotal = startHours * 60 + startMinutes;
		let endTotal = endHours * 60 + endMinutes;

		if (endTotal < startTotal) {
			endTotal += 24 * 60;
			if (currentTotal < startTotal) currentTotal += 24 * 60;
		}

		return currentTotal >= startTotal && currentTotal <= endTotal ? 'Open' : 'Closed';
	}, []);

	const getCurrentOfficeStatus = useCallback(() => {
		const effectiveTimezone = getEffectiveTimezone();
		if (!effectiveTimezone) return 'Closed';

		const effectiveHours = getEffectiveOfficeHours();
		const { startTime: effectiveStartTime, endTime: effectiveEndTime } = effectiveHours;
		
		const isValidTime = (time) => {
			if (!time) return false;
			const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
			return timeRegex.test(time);
		};

		if (!isValidTime(effectiveStartTime) || !isValidTime(effectiveEndTime)) {
			return 'Closed';
		}

		try {
			const now = new Date();
			const dayOfWeek = now.getDay();
			const todayDate = now.toISOString().split('T')[0];

			const closedReason = isWeekendOrHoliday(dayOfWeek, todayDate);
			if (closedReason) return closedReason;

			const currentTimeStr = now.toLocaleTimeString('en-US', {
				timeZone: effectiveTimezone, hour: '2-digit', minute: '2-digit', hour12: false
			});

			return calculateTimeStatus(currentTimeStr, effectiveStartTime, effectiveEndTime);
		} catch (error) {
			console.error('Error calculating office status:', error);
			return 'Closed';
		}
	}, [getEffectiveTimezone, getEffectiveOfficeHours, isWeekendOrHoliday, calculateTimeStatus]);

	// TimePicker Component
	const TimePickerField = useCallback(({ label, value, onChange }) => {
		const formatTimeForInput = (time) => {
			if (!time) return '09:00';
			if (time.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
				return time;
			}
			return '09:00';
		};

		const [timeValue, setTimeValue] = useState(formatTimeForInput(value));

		const handleTimeChange = (newValue) => {
			setTimeValue(newValue);
			if (newValue.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
				onChange(newValue);
			}
		};

		useEffect(() => {
			setTimeValue(formatTimeForInput(value));
		}, [value]);

		return (
			<BaseControl label={label}>
				<div style={{ display: 'grid', gap: '8px' }}>
					<TextControl
						type="time"
						value={timeValue}
						onChange={handleTimeChange}
						step="300"
					/>
				</div>
			</BaseControl>
		);
	}, []);

	// Action handlers
	const addHoliday = useCallback((date) => {
		if (!date) return;
		const holidayDate = new Date(date).toISOString().split('T')[0];
		if (holidays && holidays.includes(holidayDate)) return;
		const updatedHolidays = [...(holidays || []), holidayDate];
		setAttributes({ holidays: updatedHolidays });
		setSelectedDate('');
	}, [holidays, setAttributes]);

	const removeHoliday = useCallback((dateToRemove) => {
		const updatedHolidays = (holidays || []).filter(date => date !== dateToRemove);
		setAttributes({ holidays: updatedHolidays });
	}, [holidays, setAttributes]);

	const addMonthlySchedule = useCallback(() => {
		if (!selectedMonth) return;
		const existingMonth = (monthlySchedules || []).find(schedule => schedule.month === selectedMonth);
		if (existingMonth) {
			alert('This month already has a schedule!');
			return;
		}
		const monthlySchedule = { month: selectedMonth, startTime: startTime || '09:00', endTime: endTime || '17:00' };
		const updatedSchedules = [...(monthlySchedules || []), monthlySchedule];
		setAttributes({ monthlySchedules: updatedSchedules });
		setSelectedMonth('');
	}, [selectedMonth, monthlySchedules, startTime, endTime, setAttributes]);

	const removeMonthlySchedule = useCallback((monthToRemove) => {
		const updatedSchedules = (monthlySchedules || []).filter(schedule => schedule.month !== monthToRemove);
		setAttributes({ monthlySchedules: updatedSchedules });
	}, [monthlySchedules, setAttributes]);

	const updateMonthlySchedule = useCallback((month, field, value) => {
		const updatedSchedules = (monthlySchedules || []).map(schedule => 
			schedule.month === month ? { ...schedule, [field]: value } : schedule
		);
		setAttributes({ monthlySchedules: updatedSchedules });
	}, [monthlySchedules, setAttributes]);

	// Helper function for Select2
	const getSelectedOption = useCallback((options, value) => {
		return options?.find(opt => opt.value === value) || null;
	}, []);

	// Update current time and status
	useEffect(() => {
		const updateTimeAndStatus = () => {
			setCurrentTime(getCurrentTimeInTimezone());
			const currentStatus = getCurrentOfficeStatus();
			setAttributes({ officeStatus: currentStatus });
		};

		updateTimeAndStatus();
		const interval = setInterval(updateTimeAndStatus, 1000);
		return () => clearInterval(interval);
	}, [getCurrentTimeInTimezone, getCurrentOfficeStatus, setAttributes]);

	// Update timezones when UTC format changes
	useEffect(() => {
		if (timezones && timezones.length > 0) {
			const updatedTimezones = getAllTimezones();
			setAttributes({ timezones: updatedTimezones });
		}
	}, [useUTCTimezoneFormat, getAllTimezones, setAttributes]);

	// Calculated values
	const remainingTime = getRemainingTime();
	const currentStatus = getCurrentOfficeStatus();
	const effectiveTimezone = getEffectiveTimezone();
	const displayTimezone = timezoneMode === 'auto' ? getFormattedTimezone(getAutoTimezone()) : getFormattedTimezone(timezone);

	// Month options for React Select
	const monthOptions = useMemo(() => [
		{ label: 'January', value: '0' }, { label: 'February', value: '1' }, { label: 'March', value: '2' },
		{ label: 'April', value: '3' }, { label: 'May', value: '4' }, { label: 'June', value: '5' },
		{ label: 'July', value: '6' }, { label: 'August', value: '7' }, { label: 'September', value: '8' },
		{ label: 'October', value: '9' }, { label: 'November', value: '10' }, { label: 'December', value: '11' }
	], []);

	const allBlockStyle = useMemo(() => `

		.${blockID} .fb-timezone-container .fb-location-timezone{
			position: relative;
			width: max-content;
			display: flex;
			${timezoneTextAlignment?.Desktop ? `justify-content: ${timezoneTextAlignment?.Desktop};` : ''}
			align-items: center;
			gap: ${timezoneLocationTextSpacing?.Desktop}${timezoneLocationTextSpacingUnits?.Desktop};
			
			${ locationTimezoneBgColorType === "gradient" ? `background: ${ locationTimezoneBgCustomGradientColorSwitcher && locationTimezoneBgCustomGradientColor ? locationTimezoneBgCustomGradientColor : locationTimezoneBgGradientColor };` : locationTimezoneBgColor ?`background: ${locationTimezoneBgColor};` : '' }
			
			${locationTimezoneBorder ? `border: ${locationTimezoneBorder};` : ''}
            ${locationTimezoneDesktopBorderWidth && locationTimezoneDesktopBorder?.top ? `border-width: ${locationTimezoneDesktopBorderWidth};` : ''}
            ${locationTimezoneDesktopBorderRadiusWidth && locationTimezoneDesktopBorderRadius?.top ? `border-radius: ${locationTimezoneDesktopBorderRadiusWidth};` : ''}
            ${locationTimezoneBorderColor ? `border-color: ${locationTimezoneBorderColor};` : ''}
			${locationTimezoneBoxShadowCssValue ? `box-shadow: ${locationTimezoneBoxShadowCssValue};` : ''}

			${locationTimezoneDesktopPaddingWidth && locationTimezoneDesktopPadding?.top ? `padding: ${locationTimezoneDesktopPaddingWidth};` : ''}
            ${locationTimezoneDesktopMarginWidth && locationTimezoneDesktopMargin?.top ? `margin: ${locationTimezoneDesktopMarginWidth};` : ''}

			transition: all .3s ease-in-out;
		}
		.${blockID} .fb-timezone-container .fb-location-timezone:hover{
			${ locationTimezoneBgHoverColorType === "gradient" ? `background: ${ locationTimezoneBgHoverCustomGradientColorSwitcher && locationTimezoneBgHoverCustomGradientColor ? locationTimezoneBgHoverCustomGradientColor : locationTimezoneBgHoverGradientColor };` : locationTimezoneBgHoverColor ? `background: ${locationTimezoneBgHoverColor};` : '' }

			${locationTimezoneBorderHoverColor ? `border-color: ${locationTimezoneBorderHoverColor};` : ''}

			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-location-timezone .fb-location-name{
			${timezoneLocationTextGlobalTypoSwitcher?.fontFamily === true && timezoneLocationTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneLocationTextGlobalTypographyData?.fontFamily};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.fontSize === true && timezoneLocationTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneLocationTextGlobalTypographyData?.fontSize};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.fontWeight === true && timezoneLocationTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneLocationTextGlobalTypographyData?.fontWeight};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.fontStyle === true && timezoneLocationTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneLocationTextGlobalTypographyData?.fontStyle};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.textTransform === true && timezoneLocationTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneLocationTextGlobalTypographyData?.textTransform};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.textDecoration === true && timezoneLocationTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneLocationTextGlobalTypographyData?.textDecoration};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.letterSpacing === true && timezoneLocationTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneLocationTextGlobalTypographyData?.letterSpacing};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.lineHeight === true && timezoneLocationTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneLocationTextGlobalTypographyData?.lineHeight};` : ''}

            ${timezoneLocationTextGlobalTypoSwitcher?.fontFamily === false && timezoneLocationTextFontFamily && timezoneLocationTextFontFamily !== 'Default' ? `font-family: ${timezoneLocationTextFontFamily};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.fontSize === false && timezoneLocationTextFontSize?.Desktop && timezoneLocationTextFontSizeUnits?.Desktop ? `font-size: ${timezoneLocationTextFontSize?.Desktop}${timezoneLocationTextFontSizeUnits?.Desktop};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.fontWeight === false && timezoneLocationTextFontWeight ? `font-weight: ${timezoneLocationTextFontWeight};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.fontStyle === false && timezoneLocationTextFontStyle ? `font-style: ${timezoneLocationTextFontStyle};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.textTransform === false && timezoneLocationTextTransform ? `text-transform: ${timezoneLocationTextTransform};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.textDecoration === false && timezoneLocationTextDecoration ? `text-decoration: ${timezoneLocationTextDecoration};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.letterSpacing === false && timezoneLocationTextLetterSpacing?.Desktop && timezoneLocationTextLetterSpacingUnits?.Desktop ? `letter-spacing: ${timezoneLocationTextLetterSpacing?.Desktop}${timezoneLocationTextLetterSpacingUnits?.Desktop};` : ''}
            ${timezoneLocationTextGlobalTypoSwitcher?.lineHeight === false && timezoneLocationTextLineHeight?.Desktop && timezoneLocationTextLineHeightUnits?.Desktop ? `line-height: ${timezoneLocationTextLineHeight?.Desktop}${timezoneLocationTextLineHeightUnits?.Desktop};` : ''}

			${locationNameTextColor ? `color: ${locationNameTextColor};` : ''}

            ${locationNameTextColorType === 'gradient' ? `
                background: ${locationNameTextCustomGradientColorSwitcher && locationNameTextCustomGradientColor ? locationNameTextCustomGradientColor : locationNameTextGradientColor};
                ${locationNameTextCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${locationNameTextGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}

			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-location-name{

			${locationNameTextHoverColor ? `color: ${locationNameTextHoverColor};` : ''}
			${locationNameTextHoverColorType === 'gradient' ? `
				background: ${locationNameTextHoverCustomGradientColorSwitcher && locationNameTextHoverCustomGradientColor ? locationNameTextHoverCustomGradientColor : locationNameTextHoverGradientColor};
				${locationNameTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
				${locationNameTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
			` : ''}
			
			transition: all .3s ease-in-out;
		}
		
		.${blockID} .fb-timezone-container .fb-timezone-separator {
			font-size: ${separatorSize?.Desktop}${separatorFontUnits?.Desktop};
			line-height: 100%;
			${separatorColor ? `color: ${separatorColor};` : ''}
			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-timezone-separator {
			${separatorHoverColor ? `color: ${separatorHoverColor};` : ''}
			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-location-timezone .fb-current-time{
			${timezoneTimeTextGlobalTypoSwitcher?.fontFamily === true && timezoneTimeTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneTimeTextGlobalTypographyData?.fontFamily};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.fontSize === true && timezoneTimeTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneTimeTextGlobalTypographyData?.fontSize};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.fontWeight === true && timezoneTimeTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneTimeTextGlobalTypographyData?.fontWeight};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.fontStyle === true && timezoneTimeTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneTimeTextGlobalTypographyData?.fontStyle};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.textTransform === true && timezoneTimeTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneTimeTextGlobalTypographyData?.textTransform};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.textDecoration === true && timezoneTimeTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneTimeTextGlobalTypographyData?.textDecoration};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.letterSpacing === true && timezoneTimeTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneTimeTextGlobalTypographyData?.letterSpacing};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.lineHeight === true && timezoneTimeTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneTimeTextGlobalTypographyData?.lineHeight};` : ''}

            ${timezoneTimeTextGlobalTypoSwitcher?.fontFamily === false && timezoneTimeTextFontFamily && timezoneTimeTextFontFamily !== 'Default' ? `font-family: ${timezoneTimeTextFontFamily};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.fontSize === false && timezoneTimeTextFontSize?.Desktop && timezoneTimeTextFontSizeUnits?.Desktop ? `font-size: ${timezoneTimeTextFontSize?.Desktop}${timezoneTimeTextFontSizeUnits?.Desktop};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.fontWeight === false && timezoneTimeTextFontWeight ? `font-weight: ${timezoneTimeTextFontWeight};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.fontStyle === false && timezoneTimeTextFontStyle ? `font-style: ${timezoneTimeTextFontStyle};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.textTransform === false && timezoneTimeTextTransform ? `text-transform: ${timezoneTimeTextTransform};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.textDecoration === false && timezoneTimeTextDecoration ? `text-decoration: ${timezoneTimeTextDecoration};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.letterSpacing === false && timezoneTimeTextLetterSpacing?.Desktop && timezoneTimeTextLetterSpacingUnits?.Desktop ? `letter-spacing: ${timezoneTimeTextLetterSpacing?.Desktop}${timezoneTimeTextLetterSpacingUnits?.Desktop};` : ''}
            ${timezoneTimeTextGlobalTypoSwitcher?.lineHeight === false && timezoneTimeTextLineHeight?.Desktop && timezoneTimeTextLineHeightUnits?.Desktop ? `line-height: ${timezoneTimeTextLineHeight?.Desktop}${timezoneTimeTextLineHeightUnits?.Desktop};` : ''}

			${timezoneTimeTextColor ? `color: ${timezoneTimeTextColor};` : ''}

			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-current-time{
			${timezoneTimeTextHoverColor ? `color: ${timezoneTimeTextHoverColor};` : ''}

			${timezoneTimeTextHoverColorType === 'gradient' ? `
				background: ${timezoneTimeTextHoverCustomGradientColorSwitcher && timezoneTimeTextHoverCustomGradientColor ? timezoneTimeTextHoverCustomGradientColor : timezoneTimeTextHoverGradientColor};
				${timezoneTimeTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
				${timezoneTimeTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
			` : ''}
			
			transition: all .3s ease-in-out;
		}
		
		.${blockID} .fb-timezone-container .fb-location-timezone .fb-current-timezone{
			${timezoneTextGlobalTypoSwitcher?.fontFamily === true && timezoneTextGlobalTypographyData?.fontFamily ? `font-family: ${timezoneTextGlobalTypographyData?.fontFamily};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.fontSize === true && timezoneTextGlobalTypographyData?.fontSize ? `font-size: ${timezoneTextGlobalTypographyData?.fontSize};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.fontWeight === true && timezoneTextGlobalTypographyData?.fontWeight ? `font-weight: ${timezoneTextGlobalTypographyData?.fontWeight};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.fontStyle === true && timezoneTextGlobalTypographyData?.fontStyle ? `font-style: ${timezoneTextGlobalTypographyData?.fontStyle};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.textTransform === true && timezoneTextGlobalTypographyData?.textTransform ? `text-transform: ${timezoneTextGlobalTypographyData?.textTransform};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.textDecoration === true && timezoneTextGlobalTypographyData?.textDecoration ? `text-decoration: ${timezoneTextGlobalTypographyData?.textDecoration};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.letterSpacing === true && timezoneTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${timezoneTextGlobalTypographyData?.letterSpacing};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.lineHeight === true && timezoneTextGlobalTypographyData?.lineHeight ? `line-height: ${timezoneTextGlobalTypographyData?.lineHeight};` : ''}

            ${timezoneTextGlobalTypoSwitcher?.fontFamily === false && timezoneTextFontFamily && timezoneTextFontFamily !== 'Default' ? `font-family: ${timezoneTextFontFamily};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.fontSize === false && timezoneTextFontSize?.Desktop && timezoneTextFontSizeUnits?.Desktop ? `font-size: ${timezoneTextFontSize?.Desktop}${timezoneTextFontSizeUnits?.Desktop};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.fontWeight === false && timezoneTextFontWeight ? `font-weight: ${timezoneTextFontWeight};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.fontStyle === false && timezoneTextFontStyle ? `font-style: ${timezoneTextFontStyle};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.textTransform === false && timezoneTextTransform ? `text-transform: ${timezoneTextTransform};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.textDecoration === false && timezoneTextDecoration ? `text-decoration: ${timezoneTextDecoration};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.letterSpacing === false && timezoneTextLetterSpacing?.Desktop && timezoneTextLetterSpacingUnits?.Desktop ? `letter-spacing: ${timezoneTextLetterSpacing?.Desktop}${timezoneTextLetterSpacingUnits?.Desktop};` : ''}
            ${timezoneTextGlobalTypoSwitcher?.lineHeight === false && timezoneTextLineHeight?.Desktop && timezoneTextLineHeightUnits?.Desktop ? `line-height: ${timezoneTextLineHeight?.Desktop}${timezoneTextLineHeightUnits?.Desktop};` : ''}

			${timezoneTextColor ? `color: ${timezoneTextColor};` : ''}

			transition: all .3s ease-in-out;
		}
		
		.${blockID} .fb-timezone-container .fb-timezone-wrapper .fb-location-timezone:hover .fb-current-timezone{
			${timezoneTextHoverColor ? `color: ${timezoneTextHoverColor};` : ''}

			${timezoneTextHoverColorType === 'gradient' ? `
				background: ${timezoneTextHoverCustomGradientColorSwitcher && timezoneTextHoverCustomGradientColor ? timezoneTextHoverCustomGradientColor : timezoneTextHoverGradientColor};
				${timezoneTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
				${timezoneTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
			` : ''}
			
			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box{
			${ infoBoxBgColorType === "gradient" ? `background: ${ infoBoxBgCustomGradientColorSwitcher && infoBoxBgCustomGradientColor ? infoBoxBgCustomGradientColor : infoBoxBgGradientColor };` : infoBoxBgColor ?`background: ${infoBoxBgColor};` : '' }

			${infoBoxBorder ? `border: ${infoBoxBorder};` : ''}
            ${infoBoxDesktopBorderWidth && infoBoxDesktopBorder?.top ? `border-width: ${infoBoxDesktopBorderWidth};` : ''}
            ${infoBoxDesktopBorderRadiusWidth && infoBoxDesktopBorderRadius?.top ? `border-radius: ${infoBoxDesktopBorderRadiusWidth};` : ''}
            ${infoBoxBorderColor ? `border-color: ${infoBoxBorderColor};` : ''}
			${infoBoxBoxShadowCssValue ? `box-shadow: ${infoBoxBoxShadowCssValue};` : ''}

			${infoBoxDesktopPaddingWidth && infoBoxDesktopPadding?.top ? `padding: ${infoBoxDesktopPaddingWidth};` : ''}
            ${infoBoxDesktopMarginWidth && infoBoxDesktopMargin?.top ? `margin: ${infoBoxDesktopMarginWidth};` : ''}
		}

		.${blockID} .fb-timezone-container .fb-timezone-status-wrapper .fb-timezone-status-info-box:hover{
			${ infoBoxBgHoverColorType === "gradient" ? `background: ${ infoBoxBgHoverCustomGradientColorSwitcher && infoBoxBgHoverCustomGradientColor ? infoBoxBgHoverCustomGradientColor : infoBoxBgHoverGradientColor };` : infoBoxBgHoverColor ? `background: ${infoBoxBgHoverColor};` : '' }

			${infoBoxBorderHoverColor ? `border-color: ${infoBoxBorderHoverColor};` : ''}

			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-time-pulse-open .fb-timezone-status, 
		.${blockID} .fb-timezone-container .fb-time-pulse-close .fb-timezone-status {
			${statusTextGlobalTypoSwitcher?.fontFamily === true && statusTextGlobalTypographyData?.fontFamily ? `font-family: ${statusTextGlobalTypographyData?.fontFamily};` : ''}
            ${statusTextGlobalTypoSwitcher?.fontSize === true && statusTextGlobalTypographyData?.fontSize ? `font-size: ${statusTextGlobalTypographyData?.fontSize};` : ''}
            ${statusTextGlobalTypoSwitcher?.fontWeight === true && statusTextGlobalTypographyData?.fontWeight ? `font-weight: ${statusTextGlobalTypographyData?.fontWeight};` : ''}
            ${statusTextGlobalTypoSwitcher?.fontStyle === true && statusTextGlobalTypographyData?.fontStyle ? `font-style: ${statusTextGlobalTypographyData?.fontStyle};` : ''}
            ${statusTextGlobalTypoSwitcher?.textTransform === true && statusTextGlobalTypographyData?.textTransform ? `text-transform: ${statusTextGlobalTypographyData?.textTransform};` : ''}
            ${statusTextGlobalTypoSwitcher?.textDecoration === true && statusTextGlobalTypographyData?.textDecoration ? `text-decoration: ${statusTextGlobalTypographyData?.textDecoration};` : ''}
            ${statusTextGlobalTypoSwitcher?.letterSpacing === true && statusTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${statusTextGlobalTypographyData?.letterSpacing};` : ''}
            ${statusTextGlobalTypoSwitcher?.lineHeight === true && statusTextGlobalTypographyData?.lineHeight ? `line-height: ${statusTextGlobalTypographyData?.lineHeight};` : ''}

            ${statusTextGlobalTypoSwitcher?.fontFamily === false && statusTextFontFamily && statusTextFontFamily !== 'Default' ? `font-family: ${statusTextFontFamily};` : ''}
            ${statusTextGlobalTypoSwitcher?.fontSize === false && statusTextFontSize?.Desktop && statusTextFontSizeUnits?.Desktop ? `font-size: ${statusTextFontSize?.Desktop}${statusTextFontSizeUnits?.Desktop};` : ''}
            ${statusTextGlobalTypoSwitcher?.fontWeight === false && statusTextFontWeight ? `font-weight: ${statusTextFontWeight};` : ''}
            ${statusTextGlobalTypoSwitcher?.fontStyle === false && statusTextFontStyle ? `font-style: ${statusTextFontStyle};` : ''}
            ${statusTextGlobalTypoSwitcher?.textTransform === false && statusTextTransform ? `text-transform: ${statusTextTransform};` : ''}
            ${statusTextGlobalTypoSwitcher?.textDecoration === false && statusTextDecoration ? `text-decoration: ${statusTextDecoration};` : ''}
            ${statusTextGlobalTypoSwitcher?.letterSpacing === false && statusTextLetterSpacing?.Desktop && statusTextLetterSpacingUnits?.Desktop ? `letter-spacing: ${statusTextLetterSpacing?.Desktop}${statusTextLetterSpacingUnits?.Desktop};` : ''}
            ${statusTextGlobalTypoSwitcher?.lineHeight === false && statusTextLineHeight?.Desktop && statusTextLineHeightUnits?.Desktop ? `line-height: ${timezoneLocationTextLineHeight?.Desktop}${statusTextLineHeightUnits?.Desktop};` : ''}
		
			${statusColor ? `color: ${statusColor};` : ''}

			transition: all .3s ease-in-out;
		}

		.${blockID} .fb-timezone-container .fb-time-pulse-open .fb-timezone-status:hover, 
		.${blockID} .fb-timezone-container .fb-time-pulse-close .fb-timezone-status:hover {

			${statusHoverColor ? `color: ${statusHoverColor};` : ''}

			transition: all .3s ease-in-out;
		}
		
	
	`, [

		blockID,
		location,        
		timezone,        
		timezones,       
		startTime,
		endTime,
		officeHours,
		officeStatus,
		weekendDays,
		holidays,
		useMonthlySchedule,
		monthlySchedules,
		timezoneMode,
		closedMessage,
		completionMessage,
		weekendMessage,
		holidayMessage,
		useUTCTimezoneFormat,
		separator,
		showSeparatorSwitcher,
		separatorColorSwitcher,
		separatorColor,
		separatorHoverColor,
		separatorSize,
		separatorFontUnits,
		openStatusText,
		closedStatusText,
		beforeTimeText,
		afterTimeText,

		timezoneLocationTextGlobalTypoSwitcher,
		timezoneLocationTextGlobalTypographyData,
		timezoneLocationTextGlobalTypoType,
		timezoneLocationTextGlobalTypoOption,
		timezoneLocationTextFontFamily,
		timezoneLocationTextFontSize,
		timezoneLocationTextFontSizeUnits,
		timezoneLocationTextFontWeight,
		timezoneLocationTextFontStyle,
		timezoneLocationTextTransform,
		timezoneLocationTextDecoration,
		timezoneLocationTextLetterSpacing,
		timezoneLocationTextLetterSpacingUnits,
		timezoneLocationTextLineHeight,
		timezoneLocationTextLineHeightUnits,

		timezoneTimeTextGlobalTypoSwitcher,
		timezoneTimeTextGlobalTypographyData,
		timezoneTimeTextGlobalTypoType,
		timezoneTimeTextGlobalTypoOption,
		timezoneTimeTextFontFamily,
		timezoneTimeTextFontSize,
		timezoneTimeTextFontSizeUnits,
		timezoneTimeTextFontWeight,
		timezoneTimeTextFontStyle,
		timezoneTimeTextTransform,
		timezoneTimeTextDecoration,
		timezoneTimeTextLetterSpacing,
		timezoneTimeTextLetterSpacingUnits,
		timezoneTimeTextLineHeight,
		timezoneTimeTextLineHeightUnits,

		timezoneTextGlobalTypoSwitcher,
		timezoneTextGlobalTypographyData,
		timezoneTextGlobalTypoType,
		timezoneTextGlobalTypoOption,
		timezoneTextFontFamily,
		timezoneTextFontSize,
		timezoneTextFontSizeUnits,
		timezoneTextFontWeight,
		timezoneTextFontStyle,
		timezoneTextTransform,
		timezoneTextDecoration,
		timezoneTextLetterSpacing,
		timezoneTextLetterSpacingUnits,
		timezoneTextLineHeight,
		timezoneTextLineHeightUnits,

		locationNameTextColorTypeSwitcher,
        locationNameTextColorType,
        locationNameTextHoverColorType,
        locationNameTextColor,
        locationNameTextHoverColor,
        locationNameTextGradientColor,
        locationNameTextHoverGradientColor,
        locationNameTextCustomGradientColorSwitcher,
        locationNameTextCustomGradientColor,
        locationNameTextHoverCustomGradientColorSwitcher,
        locationNameTextHoverCustomGradientColor,

		timezoneTimeTextColorTypeSwitcher,
        timezoneTimeTextColorType,
        timezoneTimeTextHoverColorType,
        timezoneTimeTextColor,
        timezoneTimeTextHoverColor,
        timezoneTimeTextGradientColor,
        timezoneTimeTextHoverGradientColor,
        timezoneTimeTextCustomGradientColorSwitcher,
        timezoneTimeTextCustomGradientColor,
        timezoneTimeTextHoverCustomGradientColorSwitcher,
        timezoneTimeTextHoverCustomGradientColor,

		timezoneTextColorTypeSwitcher,
        timezoneTextColorType,
        timezoneTextHoverColorType,
        timezoneTextColor,
        timezoneTextHoverColor,
        timezoneTextGradientColor,
        timezoneTextHoverGradientColor,
        timezoneTextCustomGradientColorSwitcher,
        timezoneTextCustomGradientColor,
        timezoneTextHoverCustomGradientColorSwitcher,
        timezoneTextHoverCustomGradientColor,

		timezoneTextAlignment,
		timezoneLocationTextSpacing,
		timezoneLocationTextSpacingUnits,

		locationTimezoneBgColorTypeSwitcher,
        locationTimezoneBgColorType,
        locationTimezoneBgHoverColorType,
        locationTimezoneBgColor,
        locationTimezoneBgHoverColor,
        locationTimezoneBgGradientColor,
        locationTimezoneBgHoverGradientColor,
        locationTimezoneBgCustomGradientColorSwitcher,
        locationTimezoneBgCustomGradientColor,
        locationTimezoneBgHoverCustomGradientColorSwitcher,
        locationTimezoneBgHoverCustomGradientColor,

		locationTimezoneBorder,
        locationTimezoneBorderColor,
        locationTimezoneBorderHoverColor,
        locationTimezoneBorderColorSwitcher,

        locationTimezoneBorderUnits,
        locationTimezoneDesktopBorder,
        locationTimezoneTabletBorder,
        locationTimezoneMobileBorder,
        locationTimezoneBorderLink,

        locationTimezoneBorderRadiusUnits,
        locationTimezoneDesktopBorderRadius,
        locationTimezoneTabBorderRadius,
        locationTimezoneMobileBorderRadius,
        locationTimezoneBorderRadiusLink,
        locationTimezoneBoxShadowValues,
        locationTimezoneBoxShadowCssValue,

		locationTimezonePaddingUnits,
        locationTimezoneDesktopPadding,
        locationTimezoneTabPadding,
        locationTimezoneMobilePadding,
        locationTimezonePaddingLink,
        locationTimezoneMarginUnits,
        locationTimezoneDesktopMargin,
        locationTimezoneTabMargin,
        locationTimezoneMobileMargin,
        locationTimezoneMarginLink,

		infoBoxBgColorTypeSwitcher,
        infoBoxBgColorType,
        infoBoxBgHoverColorType,
        infoBoxBgColor,
        infoBoxBgHoverColor,
        infoBoxBgGradientColor,
        infoBoxBgHoverGradientColor,
        infoBoxBgCustomGradientColorSwitcher,
        infoBoxBgCustomGradientColor,
        infoBoxBgHoverCustomGradientColorSwitcher,
        infoBoxBgHoverCustomGradientColor,

		infoBoxBorder,
        infoBoxBorderColor,
        infoBoxBorderHoverColor,
        infoBoxBorderColorSwitcher,

        infoBoxBorderUnits,
        infoBoxDesktopBorder,
        infoBoxTabletBorder,
        infoBoxMobileBorder,
        infoBoxBorderLink,

        infoBoxBorderRadiusUnits,
        infoBoxDesktopBorderRadius,
        infoBoxTabBorderRadius,
        infoBoxMobileBorderRadius,
        infoBoxBorderRadiusLink,
        infoBoxBoxShadowValues,
        infoBoxBoxShadowCssValue,

		infoBoxPaddingUnits,
        infoBoxDesktopPadding,
        infoBoxTabPadding,
        infoBoxMobilePadding,
        infoBoxPaddingLink,
        infoBoxMarginUnits,
        infoBoxDesktopMargin,
        infoBoxTabMargin,
        infoBoxMobileMargin,
        infoBoxMarginLink,

		statusTextGlobalTypoSwitcher,
		statusTextGlobalTypographyData,
		statusTextGlobalTypoType,
		statusTextGlobalTypoOption,
		statusTextFontFamily,
		statusTextFontSize,
		statusTextFontSizeUnits,
		statusTextFontWeight,
		statusTextFontStyle,
		statusTextTransform,
		statusTextDecoration,
		statusTextLetterSpacing,
		statusTextLetterSpacingUnits,
		statusTextLineHeight,
		statusTextLineHeightUnits,

		statusColorSwitcher,
		statusColor,
		statusHoverColor,

	]);

	useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle] );

    const editorStyle = `${allBlockStyle}`.replace(/\s+/g, ' ').trim();

	 /**
	 * Inspector General Controls
	 */
    const generalControls = (
		<>
			{/* Location & Basic Settings */}
			<PanelBody title="Location & Basic Settings" initialOpen={true}>
				<BaseControl>
					<ToggleControl
						label="Use UTC Timezone Format"
						checked={!!useUTCTimezoneFormat}
						onChange={(value) => setAttributes({ useUTCTimezoneFormat: value })}
					/>
				</BaseControl>
				<TextControl
					label="Location Name"
					value={location || ''}
					onChange={(value) => setAttributes({ location: value })}
					placeholder="e.g., Dhaka, Bangladesh"
					className="fb-custom-location"
				/>

				<ToggleControl
					label={__("Show Separator", "frontis-blocks")}
					checked={showSeparatorSwitcher}
					onChange={(value) => setAttributes({ showSeparatorSwitcher: value })}
				/>

				{showSeparatorSwitcher && (
					<TextControl
						label="Separator"
						value={separator || ''}
						onChange={(value) => {
							const hasInvalidChars = /[a-zA-Z0-9]/.test(value);
							
							if (hasInvalidChars) {
								const cleanedValue = value.replace(/[a-zA-Z0-9]/g, '');
								setAttributes({ separator: cleanedValue });
							} else {
								setAttributes({ separator: value });
							}
						}}
						placeholder="e.g., | , - , • , etc."
						help="Allowed symbols only."
					/>
				)}
				
				<BaseControl label="Timezone Setting">
					<SelectControl
						options={TIMEZONE}
						value={timezoneMode}
						onChange={(value) => setAttributes({ timezoneMode: value })}
					/>
				</BaseControl>
				
				{timezoneMode === 'auto' ? (
					<TextControl 
						label="Current Timezone" 
						value={displayTimezone || 'Detecting...'} 
						readOnly 
					/>
				) : (
					<BaseControl label="Select Timezone">
						<Select2
							options={timezones || []}
							value={getSelectedOption(timezones, timezone)}
							onChange={(opt) => setAttributes({ timezone: opt?.value })}
							isClearable={false}
							className="fb-select2-control"
						/>
					</BaseControl>
				)}
				
				{effectiveTimezone && (
					<TextControl
						label="Current Time"
						value={currentTime || 'Loading...'}
						readOnly
					/>
				)}

				<TextControl
					label="Current Status"
					value={currentStatus}
					readOnly
				/>
			</PanelBody>

			{/* Status Text Settings */}
			<PanelBody title="Status Text Settings" initialOpen={true}>
				<TextControl
					label="Open Status Text"
					value={openStatusText || ''}
					onChange={(value) => setAttributes({ openStatusText: value })}
					placeholder="e.g., Open, Available, etc."
				/>
				
				<TextControl
					label="Closed Status Text"
					value={closedStatusText || ''}
					onChange={(value) => setAttributes({ closedStatusText: value })}
					placeholder="e.g., Closed, Unavailable, etc."
				/>
			</PanelBody>

			{/* Time Text Settings */}
			<PanelBody title="Time Display Text" initialOpen={true}>
				<TextControl
					label="Before Time Text"
					value={beforeTimeText || ''}
					onChange={(value) => setAttributes({ beforeTimeText: value })}
					placeholder="e.g., Office will start at, Opens at, etc."
				/>
				
				<TextControl
					label="After Time Text"
					value={afterTimeText || ''}
					onChange={(value) => setAttributes({ afterTimeText: value })}
					placeholder="e.g., Office will close at, Closes at, etc."
				/>
			</PanelBody>

			{/* Office Hours Schedule */}
			<PanelBody title="Office Hours Schedule" initialOpen={true}>
				<BaseControl>
					<ToggleControl
						label="Use Monthly Schedule"
						checked={!!useMonthlySchedule}
						onChange={(value) => setAttributes({ useMonthlySchedule: value })}
					/>
				</BaseControl>

				{!useMonthlySchedule && (
					<>
						<TimePickerField
							label="Start Time"
							value={startTime}
							onChange={(value) => setAttributes({ startTime: value })}
						/>
						<TimePickerField
							label="End Time"
							value={endTime}
							onChange={(value) => setAttributes({ endTime: value })}
						/>
					</>
				)}
			</PanelBody>

			{/* Monthly Schedule */}
			{useMonthlySchedule && (
				<PanelBody title="Monthly Schedule" initialOpen={true}>
					<div style={{ marginBottom: '15px', padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
						<BaseControl label="Add Month Schedule">
							<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
								<div style={{ flex: 1 }}>
									<Select2
										options={[{ label: 'Choose Month', value: '' }, ...monthOptions]}
										value={getSelectedOption([{ label: 'Choose Month', value: '' }, ...monthOptions], selectedMonth)}
										onChange={(opt) => setSelectedMonth(opt?.value || '')}
										isClearable={false}
										className="fb-select2-control"
									/>
								</div>
								<Button onClick={addMonthlySchedule} disabled={!selectedMonth}>
									Add Schedule
								</Button>
							</div>
						</BaseControl>
					</div>
					{monthlySchedules && monthlySchedules.length > 0 ? (
						<div>
							<strong>Monthly Schedules ({monthlySchedules.length}/12):</strong>
							<div style={{ marginTop: '10px', borderRadius: '4px' }}>
								{monthlySchedules.map(schedule => (
									<div key={schedule.month} style={{ padding: '4px', margin: '5px 0', border: '1px solid #e0e0e0', backgroundColor: '#fff' }}>
										<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
											<strong style={{ fontSize: '1em', color: '#1e1e1e' }}>
												{monthOptions.find(m => m.value === schedule.month)?.label}
											</strong>
											<Button isDestructive onClick={() => removeMonthlySchedule(schedule.month)}>
												Remove
											</Button>
										</div>
										<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
											<BaseControl label="Start Time">
												<TimePickerField
													value={schedule.startTime}
													onChange={(value) => updateMonthlySchedule(schedule.month, 'startTime', value)}
												/>
											</BaseControl>
											<BaseControl label="End Time">
												<TimePickerField
													value={schedule.endTime}
													onChange={(value) => updateMonthlySchedule(schedule.month, 'endTime', value)}
												/>
											</BaseControl>
										</div>
									</div>
								))}
							</div>
						</div>
					) : (
						<div style={{ padding: '30px 20px', textAlign: 'center', border: '2px dashed #ddd', borderRadius: '4px', backgroundColor: 'rgb(248, 249, 250)' }}>
							<p style={{ marginBottom: '10px' }}>No monthly schedules added yet</p>
							<p style={{ fontSize: '0.9em', color: '#666' }}>Add months above to set custom hours for each month</p>
						</div>
					)}
				</PanelBody>
			)}

			{/* Off Day Settings */}
			<PanelBody title="Off Day Settings" initialOpen={false}>
				<BaseControl label="Add Weekend Day">
					<Select2
						options={WEEKENDDAY}
						value={weekendDays ? weekendDays.map(day => ({ label: getWeekdayName(day), value: day })) : []}
						onChange={(selectedOptions) => {
							const daysArray = Array.isArray(selectedOptions) ? selectedOptions.map(opt => opt.value) : [];
							setAttributes({ weekendDays: daysArray });
						}}
						isMulti={true}
						isClearable={true}
						className="fb-select2-control"
					/>
				</BaseControl>
				<BaseControl label="Add Holiday Date">
					<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
						<DatePicker 
							currentDate={selectedDate} 
							onChange={setSelectedDate}
							__nextRemoveHelpButton
							__nextRemoveResetButton
						/>
						<Button onClick={() => addHoliday(selectedDate)} disabled={!selectedDate}>
							Add Holiday
						</Button>
					</div>
				</BaseControl>

				{holidays && holidays.length > 0 && (
					<div style={{ marginTop: '15px' }}>
						<strong>Holidays ({holidays.length}):</strong>
						<div style={{ maxHeight: '150px', overflowY: 'auto', marginTop: '10px', border: '1px solid #ddd', padding: '10px', borderRadius: '4px' }}>
							{holidays.map(holiday => (
								<div key={holiday} style={{ 
									display: 'flex', 
									justifyContent: 'space-between', 
									alignItems: 'center', 
									padding: '8px',
									borderBottom: '1px solid #f0f0f0',
									backgroundColor: '#fff'
								}}>
									<div>
										<span style={{ fontWeight: '600', display: 'block' }}>
											{new Date(holiday).toLocaleDateString('en-US', { 
												weekday: 'long', 
												year: 'numeric', 
												month: 'long', 
												day: 'numeric' 
											})}
										</span>
										<span style={{ fontSize: '0.8em', color: '#666' }}>
											{new Date(holiday).toLocaleDateString()}
										</span>
									</div>
									<Button 
										isDestructive
										onClick={() => removeHoliday(holiday)}
									>
										Remove
									</Button>
								</div>
							))}
						</div>
					</div>
				)}
			</PanelBody>

			{/* Timezone info */}
			<PanelBody title="Office Notice" initialOpen={false}>
				<TextareaControl
					label="Set Closed Info"
					value={closedMessage || ''}
					onChange={(value) => setAttributes({ closedMessage: value })}
					placeholder="Office is closed"
				/>
				
				<TextareaControl
					label="Set Open Info"
					value={completionMessage || ''}
					onChange={(value) => setAttributes({ completionMessage: value })}
					placeholder="Office is open"
				/>
				
				<TextareaControl
					label="Set Weekend Info"
					value={weekendMessage || ''}
					onChange={(value) => setAttributes({ weekendMessage: value })}
					placeholder="Closed for weekend"
				/>
				
				<TextareaControl
					label="Set Holiday Info"
					value={holidayMessage || ''}
					onChange={(value) => setAttributes({ holidayMessage: value })}
					placeholder="Closed for holiday"
				/>
			</PanelBody>
		</>
    );

	 /**
	 * Inspector Style Controls
	 */
    const styleControls = (
        <>
			{/* Style settings will go here */}
			<PanelBody initialOpen={true}>
				<FB_ResponsiveAlignmentControl
					label={__("Alignment", "frontis-blocks")}
					globalAlignment={timezoneTextAlignment}
					setGlobalAlignment={(value) => setAttributes({ timezoneTextAlignment: value })}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>
				<FB_Range
					min={0}
					max={timezoneLocationTextSpacingUnits === '%' ? 100 : 200}
					label={__("Gap", "frontis-blocks")}
					rangeValue={timezoneLocationTextSpacing}
					onChangeHandler={(value) => setAttributes({ timezoneLocationTextSpacing: value })}
					rangeUnitHandler={(value) => setAttributes({ timezoneLocationTextSpacingUnits: value })}
					deviceType={deviceType}
					units={timezoneLocationTextSpacingUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={''}
				/>
			</PanelBody>

			<PanelBody 
				title={__("Location", "frontis-blocks")} 
				initialOpen={false}
			>
				<FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={timezoneLocationTextGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ timezoneLocationTextGlobalTypographyData: value })}

                    globalTypoType={timezoneLocationTextGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            timezoneLocationTextGlobalTypoType: value,
                            timezoneLocationTextGlobalTypoSwitcher: value === 'default' ? {...timezoneLocationTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...timezoneLocationTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={timezoneLocationTextGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ timezoneLocationTextGlobalTypoOption: value })}

                    fontFamily={timezoneLocationTextFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ timezoneLocationTextFontFamily: value, timezoneLocationTextGlobalTypoSwitcher: {...timezoneLocationTextGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={timezoneLocationTextFontSize}
                    onChangeFontSize={(value) => setAttributes({ timezoneLocationTextFontSize: value, timezoneLocationTextGlobalTypoSwitcher: {...timezoneLocationTextGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={timezoneLocationTextFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ timezoneLocationTextFontSizeUnits: value })}

                    fontWeight={timezoneLocationTextFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ timezoneLocationTextFontWeight: value, timezoneLocationTextGlobalTypoSwitcher: {...timezoneLocationTextGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={timezoneLocationTextFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ timezoneLocationTextFontStyle: value, timezoneLocationTextGlobalTypoSwitcher: {...timezoneLocationTextGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={timezoneLocationTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ timezoneLocationTextTransform: value, timezoneLocationTextGlobalTypoSwitcher: {...timezoneLocationTextGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={timezoneLocationTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ timezoneLocationTextDecoration: value, timezoneLocationTextGlobalTypoSwitcher: {...timezoneLocationTextGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={timezoneLocationTextLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ timezoneLocationTextLetterSpacing: value, timezoneLocationTextGlobalTypoSwitcher: {...timezoneLocationTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={timezoneLocationTextLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ timezoneLocationTextLetterSpacingUnits: value })}

                    lineHeight={timezoneLocationTextLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ timezoneLocationTextLineHeight: value, timezoneLocationTextGlobalTypoSwitcher: {...timezoneLocationTextGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={timezoneLocationTextLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ timezoneLocationTextLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

				<FB_BackgroundColorControl
					label={__("Text Color", "frontis-blocks")}
					bgColorSwitcher={locationNameTextColorTypeSwitcher}
					setBgColorSwitcher={(value) => setAttributes({ locationNameTextColorTypeSwitcher: value })}

                    normalLabel={__("Text Color Type", "frontis-blocks")}
					normalBackgroundType={locationNameTextColorType}
					setNormalBackgroundType={(value) => setAttributes({ locationNameTextColorType: value })}
					normalClassicColor={locationNameTextColor}
					setNormalClassicColor={(value) => setAttributes({ locationNameTextColor: value === undefined ? '' : value })}
					normalGradientColor={locationNameTextGradientColor}
					setNormalGradientColor={(value) => setAttributes({ locationNameTextGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={locationNameTextCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ locationNameTextCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={locationNameTextCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ locationNameTextCustomGradientColor: value === undefined ? null : value })}

                    hoverLabel={__("Text Color Type", "frontis-blocks")}
					hoverBackgroundType={locationNameTextHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ locationNameTextHoverColorType: value })}
					hoverClassicColor={locationNameTextHoverColor}
					setHoverClassicColor={(value) => setAttributes({ locationNameTextHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={locationNameTextHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ locationNameTextHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={locationNameTextHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ locationNameTextHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={locationNameTextHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ locationNameTextHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}

				/>

			</PanelBody>

			
			{showSeparatorSwitcher && (
				<PanelBody title={__("Separator", "frontis-blocks")} initialOpen={false}>
					<FB_Range
						min={0}
						max={separatorFontUnits === '%' ? 100 : 200}
						label={__("Size", "frontis-blocks")}
						rangeValue={separatorSize}
						onChangeHandler={(value) => setAttributes({ separatorSize: value })}
						rangeUnitHandler={(value) => setAttributes({ separatorFontUnits: value })}
						deviceType={deviceType}
						units={separatorFontUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={''}
					/>
					<FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        globalSwitcher={separatorColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ separatorColorSwitcher: value })}
                    />
					{separatorColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={separatorColor}
                            setGlobalColor={(value) => setAttributes({ separatorColor: value === undefined ? '' : value })}
                        />
                    )}

                    {separatorColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={separatorHoverColor}
                            setGlobalColor={(value) => setAttributes({ separatorHoverColor: value === undefined ? '' : value })}
                        />
                    )}
				</PanelBody>
			)}

			<PanelBody 
				title={__("Time", "frontis-blocks")} 
				initialOpen={false}
			>
				<FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={timezoneTimeTextGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ timezoneTimeTextGlobalTypographyData: value })}

                    globalTypoType={timezoneTimeTextGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            timezoneTimeTextGlobalTypoType: value,
                            timezoneTimeTextGlobalTypoSwitcher: value === 'default' ? {...timezoneTimeTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...timezoneTimeTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={timezoneTimeTextGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ timezoneTimeTextGlobalTypoOption: value })}

                    fontFamily={timezoneTimeTextFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ timezoneTimeTextFontFamily: value, timezoneTimeTextGlobalTypoSwitcher: {...timezoneTimeTextGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={timezoneTimeTextFontSize}
                    onChangeFontSize={(value) => setAttributes({ timezoneTimeTextFontSize: value, timezoneTimeTextGlobalTypoSwitcher: {...timezoneTimeTextGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={timezoneTimeTextFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ timezoneTimeTextFontSizeUnits: value })}

                    fontWeight={timezoneTimeTextFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ timezoneTimeTextFontWeight: value, timezoneTimeTextGlobalTypoSwitcher: {...timezoneTimeTextGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={timezoneTimeTextFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ timezoneTimeTextFontStyle: value, timezoneTimeTextGlobalTypoSwitcher: {...timezoneTimeTextGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={timezoneTimeTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ timezoneTimeTextTransform: value, timezoneTimeTextGlobalTypoSwitcher: {...timezoneTimeTextGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={timezoneTimeTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ timezoneTimeTextDecoration: value, timezoneTimeTextGlobalTypoSwitcher: {...timezoneTimeTextGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={timezoneTimeTextLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ timezoneTimeTextLetterSpacing: value, timezoneTimeTextGlobalTypoSwitcher: {...timezoneTimeTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={timezoneTimeTextLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ timezoneTimeTextLetterSpacingUnits: value })}

                    lineHeight={timezoneTimeTextLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ timezoneTimeTextLineHeight: value, timezoneTimeTextGlobalTypoSwitcher: {...timezoneTimeTextGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={timezoneTimeTextLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ timezoneTimeTextLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

				<FB_BackgroundColorControl
					label={__("Color", "frontis-blocks")}
					bgColorSwitcher={timezoneTimeTextColorTypeSwitcher}
					setBgColorSwitcher={(value) => setAttributes({ timezoneTimeTextColorTypeSwitcher: value })}

                    normalLabel={__("Color Type", "frontis-blocks")}
					normalBackgroundType={timezoneTimeTextColorType}
					setNormalBackgroundType={(value) => setAttributes({ timezoneTimeTextColorType: value })}
					normalClassicColor={timezoneTimeTextColor}
					setNormalClassicColor={(value) => setAttributes({ timezoneTimeTextColor: value === undefined ? '' : value })}
					normalGradientColor={timezoneTimeTextGradientColor}
					setNormalGradientColor={(value) => setAttributes({ timezoneTimeTextGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={timezoneTimeTextCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ timezoneTimeTextCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={timezoneTimeTextCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ timezoneTimeTextCustomGradientColor: value === undefined ? null : value })}

                    hoverLabel={__("Color Type", "frontis-blocks")}
					hoverBackgroundType={timezoneTimeTextHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ timezoneTimeTextHoverColorType: value })}
					hoverClassicColor={timezoneTimeTextHoverColor}
					setHoverClassicColor={(value) => setAttributes({ timezoneTimeTextHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={timezoneTimeTextHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ timezoneTimeTextHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={timezoneTimeTextHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ timezoneTimeTextHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={timezoneTimeTextHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ timezoneTimeTextHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}
				/> 
			</PanelBody>

			<PanelBody 
				title={__("Timezone", "frontis-blocks")} 
				initialOpen={false}
			>
				<FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={timezoneTextGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ timezoneTextGlobalTypographyData: value })}

                    globalTypoType={timezoneTextGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            timezoneTextGlobalTypoType: value,
                            timezoneTimeTextGlobalTypoSwitcher: value === 'default' ? {...timezoneTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...timezoneTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={timezoneTextGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ timezoneTextGlobalTypoOption: value })}

                    fontFamily={timezoneTextFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ timezoneTextFontFamily: value, timezoneTextGlobalTypoSwitcher: {...timezoneTextGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={timezoneTextFontSize}
                    onChangeFontSize={(value) => setAttributes({ timezoneTextFontSize: value, timezoneTextGlobalTypoSwitcher: {...timezoneTextGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={timezoneTextFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ timezoneTextFontSizeUnits: value })}

                    fontWeight={timezoneTextFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ timezoneTextFontWeight: value, timezoneTextGlobalTypoSwitcher: {...timezoneTextGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={timezoneTimeTextFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ timezoneTextFontStyle: value, timezoneTextGlobalTypoSwitcher: {...timezoneTextGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={timezoneTimeTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ timezoneTextTransform: value, timezoneTextGlobalTypoSwitcher: {...timezoneTextGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={timezoneTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ timezoneTextDecoration: value, timezoneTextGlobalTypoSwitcher: {...timezoneTextGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={timezoneTextLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ timezoneTextLetterSpacing: value, timezoneTextGlobalTypoSwitcher: {...timezoneTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={timezoneTextLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ timezoneTextLetterSpacingUnits: value })}

                    lineHeight={timezoneTextLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ timezoneTextLineHeight: value, timezoneTextGlobalTypoSwitcher: {...timezoneTextGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={timezoneTextLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ timezoneTextLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

				<FB_BackgroundColorControl
					label={__("Color", "frontis-blocks")}
					bgColorSwitcher={timezoneTextColorTypeSwitcher}
					setBgColorSwitcher={(value) => setAttributes({ timezoneTextColorTypeSwitcher: value })}

                    normalLabel={__("Color Type", "frontis-blocks")}
					normalBackgroundType={timezoneTextColorType}
					setNormalBackgroundType={(value) => setAttributes({ timezoneTextColorType: value })}
					normalClassicColor={timezoneTextColor}
					setNormalClassicColor={(value) => setAttributes({ timezoneTextColor: value === undefined ? '' : value })}
					normalGradientColor={timezoneTextGradientColor}
					setNormalGradientColor={(value) => setAttributes({ timezoneTextGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={timezoneTextCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ timezoneTextCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={timezoneTextCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ timezoneTextCustomGradientColor: value === undefined ? null : value })}

                    hoverLabel={__("Color Type", "frontis-blocks")}
					hoverBackgroundType={timezoneTextHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ timezoneTextHoverColorType: value })}
					hoverClassicColor={timezoneTextHoverColor}
					setHoverClassicColor={(value) => setAttributes({ timezoneTextHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={timezoneTextHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ timezoneTextHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={timezoneTextHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ timezoneTextHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={timezoneTextHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ timezoneTextHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}

				/> 
			</PanelBody>

			<PanelBody title={__("Time Card", "frontis-blocks")} initialOpen={false}>
				<FB_BackgroundColorControl
					label={__("Background", "frontis-blocks")}
					bgColorSwitcher={locationTimezoneBgColorTypeSwitcher}
					setBgColorSwitcher={(value) => setAttributes({ locationTimezoneBgColorTypeSwitcher: value })}

					normalBackgroundType={locationTimezoneBgColorType}
					setNormalBackgroundType={(value) => setAttributes({ locationTimezoneBgColorType: value })}
					normalClassicColor={locationTimezoneBgColor}
					setNormalClassicColor={(value) => setAttributes({ locationTimezoneBgColor: value === undefined ? '' : value })}
					normalGradientColor={locationTimezoneBgGradientColor}
					setNormalGradientColor={(value) => setAttributes({ locationTimezoneBgGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={locationTimezoneBgCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ locationTimezoneBgCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={locationTimezoneBgCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ locationTimezoneBgCustomGradientColor: value === undefined ? null : value })}

					hoverBackgroundType={locationTimezoneBgHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ locationTimezoneBgHoverColorType: value })}
					hoverClassicColor={locationTimezoneBgHoverColor}
					setHoverClassicColor={(value) => setAttributes({ locationTimezoneBgHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={locationTimezoneBgHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ locationTimezoneBgHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={locationTimezoneBgHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ locationTimezoneBgHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={locationTimezoneBgHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ locationTimezoneBgHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}
				/>

				<FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={locationTimezonePaddingUnitsHandler}
                    spacingUnits={locationTimezonePaddingUnits}
                    spacingDesktop={locationTimezoneDesktopPadding}
                    spacingTablet={locationTimezoneTabPadding}
                    spacingMobile={locationTimezoneMobilePadding}
                    handleSpacingUnitHandler={locationTimezonePaddingUnitsChange}
                    spacingCombineBtn={locationTimezonePaddingLink}
                    spacingCombineBtnHandler={locationTimezonePaddingLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={locationTimezoneMarginUnitsHandler}
                    spacingUnits={locationTimezoneMarginUnits}
                    spacingDesktop={locationTimezoneDesktopMargin}
                    spacingTablet={locationTimezoneTabMargin}
                    spacingMobile={locationTimezoneMobileMargin}
                    handleSpacingUnitHandler={locationTimezoneMarginUnitsChange}
                    spacingCombineBtn={locationTimezoneMarginLink}
                    spacingCombineBtnHandler={locationTimezoneMarginLinkBtn}
                    setAttributes={setAttributes}
                />

				<SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={locationTimezoneBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ locationTimezoneBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={locationTimezoneBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ locationTimezoneBorderColorSwitcher: value })}
                />

                {locationTimezoneBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={locationTimezoneBorderColor}
                        setGlobalColor={(value) => setAttributes({ locationTimezoneBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {locationTimezoneBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={locationTimezoneBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ locationTimezoneBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={locationTimezoneBorderUnitsHandler}
                    spacingUnits={locationTimezoneBorderUnits}
                    spacingDesktop={locationTimezoneDesktopBorder}
                    spacingTablet={locationTimezoneTabletBorder}
                    spacingMobile={locationTimezoneMobileBorder}
                    handleSpacingUnitHandler={locationTimezoneBorderUnitsChange}
                    spacingCombineBtn={locationTimezoneBorderLink}
                    spacingCombineBtnHandler={locationTimezoneBorderLinkBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={locationTimezoneBorderRadiusUnitsHandler}
                    spacingUnits={locationTimezoneBorderRadiusUnits}
                    spacingDesktop={locationTimezoneDesktopBorderRadius}
                    spacingTablet={locationTimezoneTabBorderRadius}
                    spacingMobile={locationTimezoneMobileBorderRadius}
                    handleSpacingUnitHandler={locationTimezoneBorderRadiusUnitsChange}
                    spacingCombineBtn={locationTimezoneBorderRadiusLink}
                    spacingCombineBtnHandler={locationTimezoneBorderRadiusLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_BoxShadowControl
                    label={__("Box Shadow", "frontis-blocks")}
                    onBoxShadowChange={(value) => setAttributes({ locationTimezoneBoxShadowValues: value })}
                    initialShadowValue={locationTimezoneBoxShadowValues}
                    onBoxShadowStyleChange={(value) => setAttributes({ locationTimezoneBoxShadowCssValue: value })}
                />
			</PanelBody>

			<PanelBody title={__("Status Open/Close", "frontis-blocks")} initialOpen={false}>
				<FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={statusTextGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ statusTextGlobalTypographyData: value })}

                    globalTypoType={statusTextGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            statusTextGlobalTypoType: value,
                            statusTextGlobalTypoSwitcher: value === 'default' ? {...statusTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...statusTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={statusTextGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ statusTextGlobalTypoOption: value })}

                    fontFamily={statusTextFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ statusTextFontFamily: value, statusTextGlobalTypoSwitcher: {...statusTextGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={timezoneLocationTextFontSize}
                    onChangeFontSize={(value) => setAttributes({ statusTextFontSize: value, statusTextGlobalTypoSwitcher: {...statusTextGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={statusTextFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ statusTextFontSizeUnits: value })}

                    fontWeight={statusTextFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ statusTextFontWeight: value, statusTextGlobalTypoSwitcher: {...statusTextGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={statusTextFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ statusTextFontStyle: value, statusTextGlobalTypoSwitcher: {...statusTextGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={statusTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ statusTextTransform: value, statusTextGlobalTypoSwitcher: {...statusTextGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={statusTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ statusTextDecoration: value, statusTextGlobalTypoSwitcher: {...statusTextGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={statusTextLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ statusTextLetterSpacing: value, statusTextGlobalTypoSwitcher: {...statusTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={statusTextLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ statusTextLetterSpacingUnits: value })}

                    lineHeight={statusTextLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ statusTextLineHeight: value, statusTextGlobalTypoSwitcher: {...statusTextGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={statusTextLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ statusTextLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={statusColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ statusColorSwitcher: value })}
				/>
				{statusColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={statusColor}
						setGlobalColor={(value) => setAttributes({ statusColor: value === undefined ? '' : value })}
					/>
				)}

				{statusColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={statusHoverColor}
						setGlobalColor={(value) => setAttributes({ statusHoverColor: value === undefined ? '' : value })}
					/>
				)}

			</PanelBody>
			
			<PanelBody title={__("Office Info", "frontis-blocks")} initialOpen={false}>
				<FB_BackgroundColorControl
					label={__("Background", "frontis-blocks")}
					bgColorSwitcher={infoBoxBgColorTypeSwitcher}
					setBgColorSwitcher={(value) => setAttributes({ infoBoxBgColorTypeSwitcher: value })}

					normalBackgroundType={infoBoxBgColorType}
					setNormalBackgroundType={(value) => setAttributes({ infoBoxBgColorType: value })}
					normalClassicColor={infoBoxBgColor}
					setNormalClassicColor={(value) => setAttributes({ infoBoxBgColor: value === undefined ? '' : value })}
					normalGradientColor={infoBoxBgGradientColor}
					setNormalGradientColor={(value) => setAttributes({ infoBoxBgGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={infoBoxBgCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ infoBoxBgCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={infoBoxBgCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ infoBoxBgCustomGradientColor: value === undefined ? null : value })}

					hoverBackgroundType={infoBoxBgHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ infoBoxBgHoverColorType: value })}
					hoverClassicColor={infoBoxBgHoverColor}
					setHoverClassicColor={(value) => setAttributes({ infoBoxBgHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={infoBoxBgHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ infoBoxBgHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={infoBoxBgHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ infoBoxBgHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={infoBoxBgHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ infoBoxBgHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}
				/>

				<FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={infoBoxPaddingUnitsHandler}
                    spacingUnits={infoBoxPaddingUnits}
                    spacingDesktop={infoBoxDesktopPadding}
                    spacingTablet={infoBoxTabPadding}
                    spacingMobile={infoBoxMobilePadding}
                    handleSpacingUnitHandler={infoBoxPaddingUnitsChange}
                    spacingCombineBtn={infoBoxPaddingLink}
                    spacingCombineBtnHandler={infoBoxPaddingLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={infoBoxMarginUnitsHandler}
                    spacingUnits={infoBoxMarginUnits}
                    spacingDesktop={infoBoxDesktopMargin}
                    spacingTablet={infoBoxTabMargin}
                    spacingMobile={infoBoxMobileMargin}
                    handleSpacingUnitHandler={infoBoxMarginUnitsChange}
                    spacingCombineBtn={infoBoxMarginLink}
                    spacingCombineBtnHandler={infoBoxMarginLinkBtn}
                    setAttributes={setAttributes}
                />

				<SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={infoBoxBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ infoBoxBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={infoBoxBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ infoBoxBorderColorSwitcher: value })}
                />

                {infoBoxBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={infoBoxBorderColor}
                        setGlobalColor={(value) => setAttributes({ infoBoxBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {infoBoxBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={infoBoxBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ infoBoxBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={infoBoxBorderUnitsHandler}
                    spacingUnits={infoBoxBorderUnits}
                    spacingDesktop={infoBoxDesktopBorder}
                    spacingTablet={infoBoxTabletBorder}
                    spacingMobile={infoBoxMobileBorder}
                    handleSpacingUnitHandler={infoBoxBorderUnitsChange}
                    spacingCombineBtn={infoBoxBorderLink}
                    spacingCombineBtnHandler={infoBoxBorderLinkBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={infoBoxBorderRadiusUnitsHandler}
                    spacingUnits={infoBoxBorderRadiusUnits}
                    spacingDesktop={infoBoxDesktopBorderRadius}
                    spacingTablet={infoBoxTabBorderRadius}
                    spacingMobile={infoBoxMobileBorderRadius}
                    handleSpacingUnitHandler={infoBoxBorderRadiusUnitsChange}
                    spacingCombineBtn={infoBoxBorderRadiusLink}
                    spacingCombineBtnHandler={infoBoxBorderRadiusLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_BoxShadowControl
                    label={__("Box Shadow", "frontis-blocks")}
                    onBoxShadowChange={(value) => setAttributes({ infoBoxBoxShadowValues: value })}
                    initialShadowValue={infoBoxBoxShadowValues}
                    onBoxShadowStyleChange={(value) => setAttributes({ infoBoxBoxShadowCssValue: value })}
                />
			</PanelBody>
			
        </>
    );

	/**
	 * Inspector Advanced Controls
	 */
    const advancedControls = (
        <>

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