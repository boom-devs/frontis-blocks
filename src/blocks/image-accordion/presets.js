import { __ } from "@wordpress/i18n";

/**
 * Preset Styles Data Object
 * Each preset defines a distinct visual style for the image-accordion block.
 */
export const presetStyles = {
	"preset-1": {
		// Classic – light blue header, white content bg, rounded corners, right icon
		titleBgClassicColor: "#EBF5FF",
		titleBgHoverClassicColor: "#399CFF",
		titleColor: "#15171C",
		titleHoverColor: "#FFFFFF",
		titleIconColor: "#399CFF",
		titleIconHoverColor: "#FFFFFF",
		contentColor: "#555E72",
		iconPosition: "right",
		titleAlignment: "between",
		contentAlign: "left",
		imageAccordionBgClassicColor: "#FFFFFF",
		imageAccordionItemsBorder: "solid",
		imageAccordionItemsBorderColor: "#E0EEFF",
		imageAccordionItemsDesktopBorderWidth: {
			top: "1",
			bottom: "1",
			left: "1",
			right: "1",
		},
		imageAccordionItemsDesktopBorderRadiusWidth: {
			top: "12",
			bottom: "12",
			left: "12",
			right: "12",
		},
		imageAccordionItemsDesktopPadding: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
		imageAccordionItemGap: { Desktop: "12", Tablet: "", Mobile: "" },
		highlightColor: "#399CFF",
	},

	"preset-2": {
		// Bold Dark – dark header, accent hover, left icon, solid card
		titleBgClassicColor: "#15171C",
		titleBgHoverClassicColor: "#399CFF",
		titleColor: "#FFFFFF",
		titleHoverColor: "#FFFFFF",
		titleIconColor: "#FFFFFF",
		titleIconHoverColor: "#FFFFFF",
		contentColor: "#555E72",
		iconPosition: "left",
		titleAlignment: "between",
		contentAlign: "left",
		imageAccordionBgClassicColor: "#F7F7F7",
		imageAccordionItemsBorder: "none",
		imageAccordionItemsDesktopBorderWidth: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
		imageAccordionItemsDesktopBorderRadiusWidth: {
			top: "8",
			bottom: "8",
			left: "8",
			right: "8",
		},
		imageAccordionItemsDesktopPadding: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
		imageAccordionItemGap: { Desktop: "8", Tablet: "", Mobile: "" },
		highlightColor: "#15171C",
	},

	"preset-3": {
		// Minimal – no bg, bottom-border separator, icon right, open/clean feel
		titleBgClassicColor: "#FFFFFF",
		titleBgHoverClassicColor: "#F0F7FF",
		titleColor: "#15171C",
		titleHoverColor: "#399CFF",
		titleIconColor: "#555E72",
		titleIconHoverColor: "#399CFF",
		contentColor: "#555E72",
		iconPosition: "right",
		titleAlignment: "between",
		contentAlign: "left",
		imageAccordionBgClassicColor: "transparent",
		imageAccordionItemsBorder: "solid",
		imageAccordionItemsBorderColor: "#E5E7EB",
		imageAccordionItemsDesktopBorderWidth: {
			top: "0",
			bottom: "1",
			left: "0",
			right: "0",
		},
		imageAccordionItemsDesktopBorderRadiusWidth: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
		imageAccordionItemsDesktopPadding: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
		imageAccordionItemGap: { Desktop: "0", Tablet: "", Mobile: "" },
		highlightColor: "#399CFF",
	},

	"preset-4": {
		// Warm Accent – orange/warm brand colour, left border highlight, card style
		titleBgClassicColor: "#FFFBF5",
		titleBgHoverClassicColor: "#F89B2E",
		titleColor: "#15171C",
		titleHoverColor: "#FFFFFF",
		titleIconColor: "#F89B2E",
		titleIconHoverColor: "#FFFFFF",
		contentColor: "#555E72",
		iconPosition: "right",
		titleAlignment: "between",
		contentAlign: "left",
		imageAccordionBgClassicColor: "#FFFFFF",
		imageAccordionItemsBorder: "solid",
		imageAccordionItemsBorderColor: "#FFE8C7",
		imageAccordionItemsDesktopBorderWidth: {
			top: "1",
			bottom: "1",
			left: "4",
			right: "1",
		},
		imageAccordionItemsDesktopBorderRadiusWidth: {
			top: "8",
			bottom: "8",
			left: "0",
			right: "8",
		},
		imageAccordionItemsDesktopPadding: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
		imageAccordionItemGap: { Desktop: "16", Tablet: "", Mobile: "" },
		highlightColor: "#F89B2E",
	},
};

/**
 * imageAccordion Presets Array
 * Used by FB_Presets component in inspector.js
 */
export const imageAccordionPresets = [
	{
		value: "preset-1",
		isDefault: true,
		label: __("Preset 1", "frontis-blocks"),
		attributes: Object.entries(presetStyles["preset-1"]).map(
			([label, value]) => ({ label, value }),
		),
		icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#F0F7FF"/>
            <rect x="32" y="32" width="284" height="44" rx="12" fill="#EBF5FF"/>
            <rect x="48" y="46" width="180" height="12" rx="6" fill="#B3D4F7"/>
            <circle cx="296" cy="54" r="10" fill="#399CFF" fill-opacity="0.15"/>
            <path d="M292 54L296 58L300 54" stroke="#399CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="32" y="84" width="284" height="44" rx="12" fill="#EBF5FF"/>
            <rect x="48" y="98" width="140" height="12" rx="6" fill="#B3D4F7"/>
            <circle cx="296" cy="106" r="10" fill="#399CFF" fill-opacity="0.15"/>
            <path d="M292 106L296 110L300 106" stroke="#399CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="32" y="136" width="284" height="88" rx="12" fill="#FFFFFF" stroke="#E0EEFF" stroke-width="1"/>
            <rect x="32" y="136" width="284" height="44" rx="12" fill="#399CFF"/>
            <rect x="32" y="156" width="284" height="24" rx="0" fill="#399CFF"/>
            <rect x="48" y="150" width="180" height="12" rx="6" fill="white" fill-opacity="0.8"/>
            <rect x="48" y="172" width="240" height="8" rx="4" fill="#D1E9FF"/>
            <rect x="48" y="186" width="200" height="8" rx="4" fill="#D1E9FF"/>
            <circle cx="296" cy="158" r="10" fill="white" fill-opacity="0.2"/>
            <path d="M292 158L296 154L300 158" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="32" y="232" width="284" height="44" rx="12" fill="#EBF5FF"/>
            <rect x="48" y="246" width="160" height="12" rx="6" fill="#B3D4F7"/>
            <circle cx="296" cy="254" r="10" fill="#399CFF" fill-opacity="0.15"/>
            <path d="M292 254L296 258L300 254" stroke="#399CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
	},
	{
		value: "preset-2",
		label: __("Preset 2", "frontis-blocks"),
		attributes: Object.entries(presetStyles["preset-2"]).map(
			([label, value]) => ({ label, value }),
		),
		icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#F7F7F7"/>
            <rect x="32" y="32" width="284" height="44" rx="8" fill="#15171C"/>
            <circle cx="56" cy="54" r="10" fill="white" fill-opacity="0.15"/>
            <path d="M52 54L56 50L60 54" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="72" y="46" width="180" height="12" rx="6" fill="white" fill-opacity="0.6"/>
            <rect x="32" y="84" width="284" height="44" rx="8" fill="#15171C"/>
            <circle cx="56" cy="106" r="10" fill="white" fill-opacity="0.15"/>
            <path d="M52 106L56 102L60 106" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="72" y="98" width="140" height="12" rx="6" fill="white" fill-opacity="0.6"/>
            <rect x="32" y="136" width="284" height="88" rx="8" fill="#FFFFFF"/>
            <rect x="32" y="136" width="284" height="44" rx="8" fill="#399CFF"/>
            <rect x="32" y="156" width="284" height="24" rx="0" fill="#399CFF"/>
            <circle cx="56" cy="158" r="10" fill="white" fill-opacity="0.2"/>
            <path d="M52 162L56 158L60 162" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="72" y="150" width="180" height="12" rx="6" fill="white" fill-opacity="0.8"/>
            <rect x="48" y="172" width="240" height="8" rx="4" fill="#D1E9FF"/>
            <rect x="48" y="186" width="200" height="8" rx="4" fill="#D1E9FF"/>
            <rect x="32" y="232" width="284" height="44" rx="8" fill="#15171C"/>
            <circle cx="56" cy="254" r="10" fill="white" fill-opacity="0.15"/>
            <path d="M52 254L56 250L60 254" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="72" y="246" width="160" height="12" rx="6" fill="white" fill-opacity="0.6"/>
        </svg>`,
	},
	{
		value: "preset-3",
		label: __("Preset 3", "frontis-blocks"),
		attributes: Object.entries(presetStyles["preset-3"]).map(
			([label, value]) => ({ label, value }),
		),
		icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#FFFFFF"/>
            <rect x="32" y="48" width="248" height="14" rx="7" fill="#E5E7EB"/>
            <circle cx="296" cy="55" r="10" fill="#F3F4F6"/>
            <path d="M292 55L296 59L300 55" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="32" y1="76" x2="316" y2="76" stroke="#E5E7EB" stroke-width="1"/>
            <rect x="32" y="90" width="200" height="14" rx="7" fill="#E5E7EB"/>
            <circle cx="296" cy="97" r="10" fill="#F3F4F6"/>
            <path d="M292 97L296 101L300 97" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="32" y1="118" x2="316" y2="118" stroke="#E5E7EB" stroke-width="1"/>
            <rect x="32" y="132" width="220" height="14" rx="7" fill="#15171C"/>
            <circle cx="296" cy="139" r="10" fill="#EBF5FF"/>
            <path d="M292 135L296 139L300 135" stroke="#399CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="32" y="155" width="260" height="8" rx="4" fill="#E5E7EB"/>
            <rect x="32" y="169" width="220" height="8" rx="4" fill="#E5E7EB"/>
            <rect x="32" y="183" width="240" height="8" rx="4" fill="#E5E7EB"/>
            <line x1="32" y1="202" x2="316" y2="202" stroke="#E5E7EB" stroke-width="1"/>
            <rect x="32" y="216" width="180" height="14" rx="7" fill="#E5E7EB"/>
            <circle cx="296" cy="223" r="10" fill="#F3F4F6"/>
            <path d="M292 223L296 227L300 223" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="32" y1="244" x2="316" y2="244" stroke="#E5E7EB" stroke-width="1"/>
        </svg>`,
	},
	{
		value: "preset-4",
		label: __("Preset 4", "frontis-blocks"),
		attributes: Object.entries(presetStyles["preset-4"]).map(
			([label, value]) => ({ label, value }),
		),
		icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#FFF9F0"/>
            <rect x="32" y="32" width="284" height="44" rx="8" fill="#FFFBF5" stroke="#FFE8C7" stroke-width="1"/>
            <rect x="32" y="32" width="4" height="44" rx="2" fill="#F89B2E"/>
            <rect x="44" y="46" width="200" height="12" rx="6" fill="#FFD49B"/>
            <circle cx="296" cy="54" r="10" fill="#FFF3E0"/>
            <path d="M292 54L296 58L300 54" stroke="#F89B2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="32" y="88" width="284" height="44" rx="8" fill="#FFFBF5" stroke="#FFE8C7" stroke-width="1"/>
            <rect x="32" y="88" width="4" height="44" rx="2" fill="#F89B2E"/>
            <rect x="44" y="102" width="160" height="12" rx="6" fill="#FFD49B"/>
            <circle cx="296" cy="110" r="10" fill="#FFF3E0"/>
            <path d="M292 110L296 114L300 110" stroke="#F89B2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="32" y="144" width="284" height="100" rx="8" fill="#FFFFFF" stroke="#FFE8C7" stroke-width="1"/>
            <rect x="32" y="144" width="284" height="44" rx="8" fill="#F89B2E"/>
            <rect x="32" y="164" width="284" height="24" rx="0" fill="#F89B2E"/>
            <rect x="32" y="144" width="4" height="100" rx="0" fill="#E0891A"/>
            <rect x="44" y="158" width="200" height="12" rx="6" fill="white" fill-opacity="0.85"/>
            <circle cx="296" cy="166" r="10" fill="white" fill-opacity="0.2"/>
            <path d="M292 162L296 166L300 162" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="44" y="180" width="240" height="8" rx="4" fill="#FFE8C7"/>
            <rect x="44" y="194" width="200" height="8" rx="4" fill="#FFE8C7"/>
            <rect x="44" y="208" width="220" height="8" rx="4" fill="#FFE8C7"/>
            <rect x="32" y="256" width="284" height="44" rx="8" fill="#FFFBF5" stroke="#FFE8C7" stroke-width="1"/>
            <rect x="32" y="256" width="4" height="44" rx="2" fill="#F89B2E"/>
            <rect x="44" y="270" width="180" height="12" rx="6" fill="#FFD49B"/>
            <circle cx="296" cy="278" r="10" fill="#FFF3E0"/>
            <path d="M292 278L296 282L300 278" stroke="#F89B2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
	},
];
