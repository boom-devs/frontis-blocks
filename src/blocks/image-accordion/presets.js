import { __ } from "@wordpress/i18n";

/**
 * Preset Styles Data Object
 */
export const presetStyles = {
	"preset-1": {
		imageAccordionGap: { Desktop: "12", Tablet: "12", Mobile: "8" },
		imageAccordionGapUnits: { Desktop: "px", Tablet: "px", Mobile: "px" },
		imageAccordionItemBorderRadiusDesktop: {
			top: "50",
			bottom: "50",
			left: "50",
			right: "50",
		},
		imageAccordionItemBorderRadiusTablet: {
			top: "50",
			bottom: "50",
			left: "50",
			right: "50",
		},
		imageAccordionItemBorderRadiusMobile: {
			top: "16",
			bottom: "16",
			left: "16",
			right: "16",
		},
		imageAccordionItemActiveBorderRadiusDesktop: {
			top: "25",
			bottom: "25",
			left: "25",
			right: "25",
		},
		imageAccordionOverlayColor: "rgba(0,0,0,0.55)",
		imageAccordionShowDots: false,
		imageAccordionShowNumber: false,
		imageAccordionTitleColor: "#ffffff",
		imageAccordionSubtitleColor: "rgba(255,255,255,0.8)",
		imageAccordionTitleFontSize: { Desktop: "18", Tablet: "", Mobile: "" },
		imageAccordionTitleFontWeight: "600",
		imageAccordionSubtitleFontSize: { Desktop: "13", Tablet: "", Mobile: "" },
		imageAccordionIconColor: "#0875FF",
		imageAccordionIconCircleBgColor: "#ffffff",
	},
	"preset-2": {
		imageAccordionGap: { Desktop: "0", Tablet: "0", Mobile: "0" },
		imageAccordionGapUnits: { Desktop: "px", Tablet: "px", Mobile: "px" },
		imageAccordionItemBorderRadiusDesktop: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
		imageAccordionItemBorderRadiusTablet: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
		imageAccordionItemBorderRadiusMobile: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
		imageAccordionItemActiveBorderRadiusDesktop: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
		imageAccordionOverlayColor: "rgba(0,0,0,0.45)",
		imageAccordionShowDots: true,
		imageAccordionDotColor: "#ffffff",
		imageAccordionDotSize: { Desktop: "16", Tablet: "14", Mobile: "12" },
		imageAccordionShowNumber: true,
		imageAccordionNumberColor: "#ffffff",
		imageAccordionTitleColor: "#ffffff",
		imageAccordionSubtitleColor: "rgba(255,255,255,0.75)",
		imageAccordionTitleFontSize: { Desktop: "20", Tablet: "", Mobile: "" },
		imageAccordionTitleFontWeight: "600",
		imageAccordionSubtitleFontSize: { Desktop: "13", Tablet: "", Mobile: "" },
	},
	"preset-3": {
		imageAccordionGap: { Desktop: "10", Tablet: "10", Mobile: "8" },
		imageAccordionGapUnits: { Desktop: "px", Tablet: "px", Mobile: "px" },
		imageAccordionItemBorderRadiusDesktop: {
			top: "12",
			bottom: "12",
			left: "12",
			right: "12",
		},
		imageAccordionItemBorderRadiusTablet: {
			top: "12",
			bottom: "12",
			left: "12",
			right: "12",
		},
		imageAccordionItemBorderRadiusMobile: {
			top: "12",
			bottom: "12",
			left: "12",
			right: "12",
		},
		imageAccordionItemActiveBorderRadiusDesktop: {
			top: "12",
			bottom: "12",
			left: "12",
			right: "12",
		},
		imageAccordionOverlayColor: "rgba(0,0,0,0.55)",
		imageAccordionShowDots: false,
		imageAccordionShowNumber: false,
		imageAccordionTitleColor: "#ffffff",
		imageAccordionSubtitleColor: "rgba(255,255,255,0.8)",
		imageAccordionTitleFontSize: { Desktop: "18", Tablet: "", Mobile: "" },
		imageAccordionTitleFontWeight: "600",
		imageAccordionSubtitleFontSize: { Desktop: "13", Tablet: "", Mobile: "" },
		imageAccordionBtnTextColor: "#ffffff",
		imageAccordionBtnBgColor: "rgba(255,255,255,0.18)",
		imageAccordionBtnBorderColor: "rgba(255,255,255,0.35)",
		imageAccordionBtnBorder: "solid",
	},
	"preset-4": {
		imageAccordionGap: { Desktop: "0", Tablet: "0", Mobile: "0" },
		imageAccordionGapUnits: { Desktop: "px", Tablet: "px", Mobile: "px" },
		imageAccordionItemBorderRadiusDesktop: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
		imageAccordionItemBorderRadiusTablet: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
		imageAccordionItemBorderRadiusMobile: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
		imageAccordionItemActiveBorderRadiusDesktop: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
		imageAccordionOverlayColor: "rgba(0,0,0,0.48)",
		imageAccordionShowDots: false,
		imageAccordionShowNumber: true,
		imageAccordionNumberColor: "rgba(255,255,255,0.75)",
		imageAccordionTitleColor: "#ffffff",
		imageAccordionSubtitleColor: "rgba(255,255,255,0.78)",
		imageAccordionTitleFontSize: { Desktop: "18", Tablet: "", Mobile: "" },
		imageAccordionTitleFontWeight: "600",
		imageAccordionSubtitleFontSize: { Desktop: "12", Tablet: "", Mobile: "" },
	},
};

export const imageAccordionPresets = [
	{
		value: "preset-1",
		label: __("Preset 1", "frontis-blocks"),
		attributes: Object.entries(presetStyles["preset-1"]).map(
			([label, value]) => ({ label, value }),
		),
		icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="348" height="276" rx="12" fill="#EBEBEB"/>
            <rect x="24" y="88" width="67" height="100" rx="50" fill="#C3C8D2"/>
            <rect x="103" y="88" width="67" height="100" rx="50" fill="#C3C8D2"/>
            <rect x="182" y="88" width="67" height="100" rx="50" fill="#C3C8D2"/>
            <rect x="261" y="88" width="67" height="100" rx="50" fill="#C3C8D2"/>
            <circle cx="57" cy="138" r="10" fill="white" fill-opacity="0.6"/>
            <rect x="261" y="88" width="67" height="100" rx="25" fill="#8B8FA8"/>
            <circle cx="279" cy="116" r="10" fill="white" fill-opacity="0.8"/>
            <rect x="271" y="134" width="47" height="6" rx="3" fill="white" fill-opacity="0.8"/>
            <rect x="271" y="148" width="35" height="5" rx="2.5" fill="white" fill-opacity="0.5"/>
        </svg>`,
	},
	{
		value: "preset-2",
		label: __("Preset 2", "frontis-blocks"),
		attributes: Object.entries(presetStyles["preset-2"]).map(
			([label, value]) => ({ label, value }),
		),
		icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="348" height="276" rx="12" fill="#EBEBEB"/>
            <rect x="24" y="38" width="67" height="200" fill="#C3C8D2"/>
            <rect x="94" y="38" width="67" height="200" fill="#B8BDC9"/>
            <rect x="164" y="38" width="67" height="200" fill="#C3C8D2"/>
            <rect x="234" y="38" width="120" height="200" fill="#8B8FA8"/>
            <rect x="244" y="180" width="80" height="8" rx="4" fill="white" fill-opacity="0.9"/>
            <rect x="244" y="196" width="55" height="6" rx="3" fill="white" fill-opacity="0.6"/>
            <circle cx="57" cy="138" r="5" fill="white" fill-opacity="0.7"/>
            <circle cx="127" cy="138" r="5" fill="white" fill-opacity="0.7"/>
            <circle cx="197" cy="138" r="5" fill="white" fill-opacity="0.7"/>
        </svg>`,
	},
	{
		value: "preset-3",
		label: __("Preset 3", "frontis-blocks"),
		attributes: Object.entries(presetStyles["preset-3"]).map(
			([label, value]) => ({ label, value }),
		),
		icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="348" height="276" rx="12" fill="#EBEBEB"/>
            <rect x="24" y="50" width="300" height="36" rx="12" fill="#C3C8D2"/>
            <rect x="24" y="94" width="300" height="36" rx="12" fill="#C3C8D2"/>
            <rect x="24" y="138" width="300" height="36" rx="12" fill="#C3C8D2"/>
            <rect x="24" y="182" width="300" height="60" rx="12" fill="#8B8FA8"/>
            <rect x="34" y="204" width="120" height="8" rx="4" fill="white" fill-opacity="0.9"/>
            <rect x="34" y="220" width="80" height="6" rx="3" fill="white" fill-opacity="0.6"/>
            <rect x="254" y="204" width="60" height="24" rx="6" fill="white" fill-opacity="0.25"/>
            <rect x="263" y="212" width="42" height="8" rx="4" fill="white" fill-opacity="0.8"/>
        </svg>`,
	},
	{
		value: "preset-4",
		label: __("Preset 4", "frontis-blocks"),
		attributes: Object.entries(presetStyles["preset-4"]).map(
			([label, value]) => ({ label, value }),
		),
		icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="348" height="276" rx="12" fill="#EBEBEB"/>
            <g transform="skewX(-12)">
                <rect x="30" y="38" width="50" height="200" fill="#C3C8D2"/>
                <rect x="92" y="38" width="50" height="200" fill="#B8BDC9"/>
                <rect x="154" y="38" width="50" height="200" fill="#C3C8D2"/>
                <rect x="216" y="38" width="50" height="200" fill="#AEAFC0"/>
            </g>
            <rect x="274" y="38" width="74" height="200" fill="#8B8FA8" transform="skewX(-12)"/>
            <rect x="284" y="148" width="50" height="8" rx="4" fill="white" fill-opacity="0.9"/>
            <rect x="284" y="162" width="35" height="6" rx="3" fill="white" fill-opacity="0.5"/>
        </svg>`,
	},
];
