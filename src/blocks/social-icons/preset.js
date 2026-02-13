import { __ } from '@wordpress/i18n';

/** Start Preset Style */
export const changeSocialIconsPreset = (selectedPreset, socialItems, setAttributes) => {
    const presetConfigurations = {
        "preset-1": {
            socialItems: socialItems.map((item, index) => {
                switch (index) {
                    case 0:
                        return {
                            ...item,
                            socialIconColor: "#1877F2",
                            socialIconHoverColor: "#1877F2",
                            socialIconBgColor: "#ffffff",
                            socialIconHoverBgColor: "#ffffff",
                            normalItemClassicColor: "",
                        };
                    case 1:
                        return {
                            ...item,
                            socialIconColor: "#1DA1F2",
                            socialIconHoverColor: "#1DA1F2",
                            socialIconBgColor: "#ffffff",
                            socialIconHoverBgColor: "#ffffff",
                            normalItemClassicColor: "",
                        };
                    case 2:
                        return {
                            ...item,
                            socialIconColor: "#E53935",
                            socialIconHoverColor: "#E53935",
                            socialIconBgColor: "#ffffff",
                            socialIconHoverBgColor: "#ffffff",
                            normalItemClassicColor: "",
                        };
                    case 3:
                        return {
                            ...item,
                            socialIconColor: "#1769FF",
                            socialIconHoverColor: "#1769FF",
                            socialIconBgColor: "#ffffff",
                            socialIconHoverBgColor: "#ffffff",
                            normalItemClassicColor: "",
                        };
                    default:
                        return item;
                }
            }),

            socialIconBorderColor: "#E1E3E8",
            socialIconBorder: "solid",
            socialGapSize: {
                Desktop: 10,
                Tablet: 10,
                Mobile: 10
            },
            socialIconPaddingDesktop: {
                top: 20,
                bottom: 20,
                left: 20,
                right: 20
            },
            socialIconPaddingTablet: {
                top: 15,
                bottom: 15,
                left: 15,
                right: 15
            },
            socialIconPaddingMobile: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10
            },
            socialIconBorderDesktop: {
                top: 1,
                bottom: 1,
                left: 1,
                right: 1,
            },
            socialIconBorderTablet: {
                top: 1,
                bottom: 1,
                left: 1,
                right: 1,
            },
            socialIconBorderMobile: {
                top: 1,
                bottom: 1,
                left: 1,
                right: 1,
            },
            socialIconBorderRadiusDesktop: {
                top: 50,
                bottom: 50,
                left: 50,
                right: 50
            },
            socialIconBorderRadiusTablet: {
                top: 50,
                bottom: 50,
                left: 50,
                right: 50
            },
            socialIconBorderRadiusMobile: {
                top: 50,
                bottom: 50,
                left: 50,
                right: 50
            },
            socialTitleSwitcher: false,
            socialBorder: "none	",
            socialBorderDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialBorderRadiusDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialBorderRadiusTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialBorderRadiusMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialPaddingDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialPaddingTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialPaddingMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialTitleColor : "#15171C",
            socialTitleFontWeight : "500",
            socialTitleFontSize : {
                Desktop: "18",
                Tablet: "18",
                Mobile: "16"
            },
            socialTitleLineHeight : {
                Desktop: "25",
                Tablet: "25",
                Mobile: "25"
            },
            socialTitlePaddingDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialTitlePaddingTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialTitlePaddingMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
        },
        "preset-2": {
            socialItems: socialItems.map((item, index) => {
                switch (index) {
                    case 0:
                        return {
                            ...item,
                            socialIconColor: "#ffffff",
                            socialIconHoverColor: "#ffffff",
                            socialIconBgColor: "#1877F2",
                            socialIconHoverBgColor: "#1877F2",
                            normalItemClassicColor: "",
                        };
                    case 1:
                        return {
                            ...item,
                            socialIconColor: "#ffffff",
                            socialIconHoverColor: "#ffffff",
                            socialIconBgColor: "#1DA1F2",
                            socialIconHoverBgColor: "#1DA1F2",
                            normalItemClassicColor: "",
                        };
                    case 2:
                        return {
                            ...item,
                            socialIconColor: "#ffffff",
                            socialIconHoverColor: "#ffffff",
                            socialIconBgColor: "#E53935",
                            socialIconHoverBgColor: "#E53935",
                            normalItemClassicColor: "",
                        };
                    case 3:
                        return {
                            ...item,
                            socialIconColor: "#ffffff",
                            socialIconHoverColor: "#ffffff",
                            socialIconBgColor: "#1769FF",
                            socialIconHoverBgColor: "#1769FF",
                            normalItemClassicColor: "",
                        };
                    default:
                        return item;
                }
            }),
            socialIconBorderColor: "",
            socialIconBorder: "none",
            socialGapSize: {
                Desktop: 10,
                Tablet: 10,
                Mobile: 10
            },
            socialIconPaddingDesktop: {
                top: 20,
                bottom: 20,
                left: 20,
                right: 20
            },
            socialIconPaddingTablet: {
                top: 15,
                bottom: 15,
                left: 15,
                right: 15
            },
            socialIconPaddingMobile: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10
            },
            socialIconBorderDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialIconBorderTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialIconBorderMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialIconBorderRadiusDesktop: {
                top: 50,
                bottom: 50,
                left: 50,
                right: 50
            },
            socialIconBorderRadiusTablet: {
                top: 50,
                bottom: 50,
                left: 50,
                right: 50
            },
            socialIconBorderRadiusMobile: {
                top: 50,
                bottom: 50,
                left: 50,
                right: 50
            },
            socialTitleSwitcher: false,
            socialBorder: "none	",
            socialBorderDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialBorderRadiusDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialBorderRadiusTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialBorderRadiusMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialPaddingDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialPaddingTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialPaddingMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialTitleColor : "#15171C",
            socialTitleFontWeight : "500",
            socialTitleFontSize : {
                Desktop: "18",
                Tablet: "18",
                Mobile: "16"
            },
            socialTitleLineHeight : {
                Desktop: "25",
                Tablet: "25",
                Mobile: "25"
            },
            socialTitlePaddingDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialTitlePaddingTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialTitlePaddingMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
        },
        "preset-3": {
            socialItems: socialItems.map((item, index) => {
                switch (index) {
                    case 0:
                        return {
                            ...item,
                            socialIconColor: "#FFFFFF",
                            socialIconHoverColor: "#FFFFFF",
                            socialIconBgColor: "",
                            socialIconHoverBgColor: "",
                            normalItemClassicColor: "#1877F2",
                        };
                    case 1:
                        return {
                            ...item,
                            socialIconColor: "#FFFFFF",
                            socialIconHoverColor: "#FFFFFF",
                            socialIconBgColor: "",
                            socialIconHoverBgColor: "",
                            normalItemClassicColor: "#1DA1F2",
                        };
                    case 2:
                        return {
                            ...item,
                            socialIconColor: "#FFFFFF",
                            socialIconHoverColor: "#FFFFFF",
                            socialIconBgColor: "",
                            socialIconHoverBgColor: "",
                            normalItemClassicColor: "#E53935",
                        };
                    case 3:
                        return {
                            ...item,
                            socialIconColor: "#FFFFFF",
                            socialIconHoverColor: "#FFFFFF",
                            socialIconBgColor: "",
                            socialIconHoverBgColor: "",
                            normalItemClassicColor: "#1769FF",
                        };
                    default:
                        return item;
                }
            }),
            socialIconBorderColor: "",
            socialIconBorder: "none",
            socialGapSize: {
                Desktop: 10,
                Tablet: 10,
                Mobile: 10
            },
            socialIconPaddingDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 10
            },
            socialIconPaddingTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 10
            },
            socialIconPaddingMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 10
            },
            socialIconBorderDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialIconBorderTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialIconBorderMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialIconBorderRadiusDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialIconBorderRadiusTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialIconBorderRadiusMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialTitleSwitcher: true,
            socialBorder: "none	",
            socialBorderDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialBorderRadiusDesktop: {
                top: 4,
                bottom: 4,
                left: 4,
                right: 4
            },
            socialBorderRadiusTablet: {
                top: 4,
                bottom: 4,
                left: 4,
                right: 4
            },
            socialBorderRadiusMobile: {
                top: 4,
                bottom: 4,
                left: 4,
                right: 4
            },
            socialPaddingDesktop: {
                top: 12,
                bottom: 12,
                left: 14,
                right: 14
            },
            socialPaddingTablet: {
                top: 12,
                bottom: 12,
                left: 14,
                right: 14
            },
            socialPaddingMobile: {
                top: 10,
                bottom: 10,
                left: 12,
                right: 12
            },
            socialTitleColor : "#FFFFFF",
            socialTitleFontWeight : "500",
            socialTitleFontSize : {
                Desktop: "18",
                Tablet: "16",
                Mobile: "14"
            },
            socialTitleLineHeight : {
                Desktop: "25",
                Tablet: "25",
                Mobile: "20"
            },
            socialTitlePaddingDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialTitlePaddingTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialTitlePaddingMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
        },
        "preset-4": {
            socialItems: socialItems.map((item, index) => {
                switch (index) {
                    case 0:
                        return {
                            ...item,
                            socialIconColor: "#FFFFFF",
                            socialIconHoverColor: "#FFFFFF",
                            socialIconBgColor: "#1877F2",
                            socialIconHoverBgColor: "#1877F2",
                            normalItemClassicColor: "",
                        };
                    case 1:
                        return {
                            ...item,
                            socialIconColor: "#FFFFFF",
                            socialIconHoverColor: "#FFFFFF",
                            socialIconBgColor: "#1DA1F2",
                            socialIconHoverBgColor: "#1DA1F2",
                            normalItemClassicColor: "",
                        };
                    case 2:
                        return {
                            ...item,
                            socialIconColor: "#FFFFFF",
                            socialIconHoverColor: "#FFFFFF",
                            socialIconBgColor: "#E53935",
                            socialIconHoverBgColor: "#E53935",
                            normalItemClassicColor: "",
                        };
                    case 3:
                        return {
                            ...item,
                            socialIconColor: "#FFFFFF",
                            socialIconHoverColor: "#FFFFFF",
                            socialIconBgColor: "#1769FF",
                            socialIconHoverBgColor: "#1769FF",
                            normalItemClassicColor: "",
                        };
                    default:
                        return item;
                }
            }),
            socialIconBorderColor: "",
            socialIconBorder: "none",
            socialGapSize: {
                Desktop: 10,
                Tablet: 10,
                Mobile: 10
            },
            socialIconPaddingDesktop: {
                top: 15,
                bottom: 15,
                left: 15,
                right: 15
            },
            socialIconPaddingTablet: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10
            },
            socialIconPaddingMobile: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10
            },
            socialIconBorderDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialIconBorderTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialIconBorderMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialIconBorderRadiusDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialIconBorderRadiusTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialIconBorderRadiusMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialTitleSwitcher: true,
            socialBorder: "solid",
            socialBorderDesktop: {
                top: 1,
                bottom: 1,
                left: 1,
                right: 1,
            },
            socialBorderRadiusDesktop: {
                top: 4,
                bottom: 4,
                left: 4,
                right: 4
            },
            socialBorderRadiusTablet: {
                top: 4,
                bottom: 4,
                left: 4,
                right: 4
            },
            socialBorderRadiusMobile: {
                top: 4,
                bottom: 4,
                left: 4,
                right: 4
            },
            socialPaddingDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialPaddingTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialPaddingMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialTitleColor : "#15171C",
            socialTitleFontWeight : "500",
            socialTitleFontSize : {
                Desktop: "18",
                Tablet: "14",
                Mobile: "14"
            },
            socialTitleLineHeight : {
                Desktop: "25",
                Tablet: "25",
                Mobile: "20"
            },
            socialTitlePaddingDesktop: {
                top: 12,
                bottom: 12,
                left: 8,
                right: 15
            },
            socialTitlePaddingTablet: {
                top: 7,
                bottom: 7,
                left: 7,
                right: 10
            },
            socialTitlePaddingMobile: {
                top: 7,
                bottom: 7,
                left: 7,
                right: 10
            },
        },
        "preset-5": {
            socialItems: socialItems.map((item, index) => {
                switch (index) {
                    case 0:
                        return {
                            ...item,
                            socialIconColor: "#1877F2",
                            socialIconHoverColor: "#1877F2",
                            socialIconBgColor: "",
                            socialIconHoverBgColor: "",
                            normalItemClassicColor: "",
                        };
                    case 1:
                        return {
                            ...item,
                            socialIconColor: "#1DA1F2",
                            socialIconHoverColor: "#1DA1F2",
                            socialIconBgColor: "",
                            socialIconHoverBgColor: "",
                            normalItemClassicColor: "",
                        };
                    case 2:
                        return {
                            ...item,
                            socialIconColor: "#E53935",
                            socialIconHoverColor: "#E53935",
                            socialIconBgColor: "",
                            socialIconHoverBgColor: "",
                            normalItemClassicColor: "",
                        };
                    case 3:
                        return {
                            ...item,
                            socialIconColor: "#1769FF",
                            socialIconHoverColor: "#1769FF",
                            socialIconBgColor: "",
                            socialIconHoverBgColor: "",
                            normalItemClassicColor: "",
                        };
                    default:
                        return item;
                }
            }),
            socialIconBorderColor: "",
            socialIconBorder: "none",
            socialGapSize: {
                Desktop: 40,
                Tablet: 30,
                Mobile: 20
            },
            socialIconPaddingDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 10
            },
            socialIconPaddingTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 10
            },
            socialIconPaddingMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 10
            },
            socialIconBorderDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialIconBorderTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialIconBorderMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialIconBorderRadiusDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialIconBorderRadiusTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialIconBorderRadiusMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialTitleSwitcher: true,
            socialBorder: "none	",
            socialBorderDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialBorderRadiusDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialBorderRadiusTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialBorderRadiusMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialPaddingDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialPaddingTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialPaddingMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialTitleColor : "#15171C",
            socialTitleColor : "#15171C",
            socialTitleFontWeight : "500",
            socialTitleFontSize : {
                Desktop: "18",
                Tablet: "16",
                Mobile: "14"
            },
            socialTitleLineHeight : {
                Desktop: "25",
                Tablet: "25",
                Mobile: "20"
            },
            socialTitlePaddingDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialTitlePaddingTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialTitlePaddingMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
        },
        "preset-6": {
            socialItems: socialItems.map((item, index) => {
                switch (index) {
                    case 0:
                        return {
                            ...item,
                            socialIconColor: "#FFFFFF",
                            socialIconHoverColor: "#FFFFFF",
                            socialIconBgColor: "#15171C",
                            socialIconHoverBgColor: "#15171C",
                            normalItemClassicColor: "",
                        };
                    case 1:
                        return {
                            ...item,
                            socialIconColor: "#FFFFFF",
                            socialIconHoverColor: "#FFFFFF",
                            socialIconBgColor: "#15171C",
                            socialIconHoverBgColor: "#15171C",
                            normalItemClassicColor: "",
                        };
                    case 2:
                        return {
                            ...item,
                            socialIconColor: "#FFFFFF", 
                            socialIconHoverColor: "#FFFFFF",
                            socialIconBgColor: "#15171C",
                            socialIconHoverBgColor: "#15171C",
                            normalItemClassicColor: "",
                        };
                    case 3:
                        return {
                            ...item,
                            socialIconColor: "#FFFFFF",
                            socialIconHoverColor: "#FFFFFF",
                            socialIconBgColor: "#15171C",
                            socialIconHoverBgColor: "#15171C",
                            normalItemClassicColor: "",
                        };
                    default:
                        return item;
                }
            }),
            socialIconBorder: "none",
            socialIconBorderColor: "",
            socialGapSize: {
                Desktop: 10,
                Tablet: 10,
                Mobile: 10
            },
            socialIconPaddingDesktop: {
                top: 20,
                bottom: 20,
                left: 30,
                right: 30
            },
            socialIconPaddingTablet: {
                top: 15,
                bottom: 15,
                left: 25,
                right: 25
            },
            socialIconPaddingMobile: {
                top: 10,
                bottom: 10,
                left: 15,
                right: 15
            },
            socialIconBorderDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialIconBorderTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialIconBorderMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialIconBorderRadiusDesktop: {
                top: 5,
                bottom: 5,
                left: 5,
                right: 5
            },
            socialIconBorderRadiusTablet: {
                top: 5,
                bottom: 5,
                left: 5,
                right: 5
            },
            socialIconBorderRadiusMobile: {
                top: 5,
                bottom: 5,
                left: 5,
                right: 5
            },
            socialTitleSwitcher: false,
            socialBorder: "none	",
            socialBorderDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            socialBorderRadiusDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialBorderRadiusTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialBorderRadiusMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialPaddingDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialPaddingTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialPaddingMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialTitleColor : "#15171C",
            socialTitleColor : "#15171C",
            socialTitleFontWeight : "500",
            socialTitleFontSize : {
                Desktop: "18",
                Tablet: "18",
                Mobile: "16"
            },
            socialTitleLineHeight : {
                Desktop: "25",
                Tablet: "25",
                Mobile: "25"
            },
            socialTitlePaddingDesktop: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialTitlePaddingTablet: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            socialTitlePaddingMobile: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
        },
    };

    const selectedPresetConfig = presetConfigurations[selectedPreset];

    if (selectedPresetConfig) {
        setAttributes({
            socialIconsPresetStyle: selectedPreset,
            ...selectedPresetConfig,
        });
    } else {
        console.warn(`Social Icons: Preset "${selectedPreset}" not found.`);
    }
};
/** End Preset Style */