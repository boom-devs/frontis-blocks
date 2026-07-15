import { __ } from '@wordpress/i18n';

export const markerSvgs = {
    'preset-1': () => (
        <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="currentColor" fill="none"/>
            <circle cx="10" cy="10" r="5" fill="currentColor"/>
        </svg>
    ),
};

const presetStyles = {
    "preset-1": {
        imageHotspotMarkerColor: "#ffffff",
        imageHotspotIconColor: "#000000",
        imageHotspotPopoverBgColor: "#ffffff",
        imageHotspotTitleColor: "#333333",
        imageHotspotDescColor: "#666666",
        imageHotspotMarkerSvg: "preset-1",
        imageHotspotCategoryColor: '#333333',
        imageHotspotPriceColor: '#333333',
    },
    "preset-2": {
        imageHotspotMarkerColor: "#011f4b",
        imageHotspotIconColor: "#ffffff",
        imageHotspotPopoverBgColor: "#011f4b",
        imageHotspotTitleColor: "#ffffff",
        imageHotspotDescColor: "#aaaaaa",
        imageHotspotMarkerSvg: "",
        imageHotspotCategoryColor: '#ffffff',
        imageHotspotPriceColor: '#ffffff',
    },
};

export const imageHotspotPresets = [
    {
        value: 'preset-1',
        isDefault: true,
        label: __('Preset 1', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['preset-1']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
            <rect x="60" y="88" width="228" height="100" rx="8" fill="white"/>
            <circle cx="100" cy="138" r="14" fill="#ff0000"/>
            <rect x="124" y="126" width="96" height="8" rx="4" fill="#333333"/>
            <rect x="124" y="142" width="120" height="6" rx="3" fill="#666666"/>
            <rect x="124" y="154" width="80" height="6" rx="3" fill="#666666"/>
        </svg>`,
    },
    {
        value: 'preset-2',
        label: __('Preset 2', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['preset-2']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
            <rect x="60" y="88" width="228" height="100" rx="8" fill="#1a1a2e"/>
            <circle cx="100" cy="138" r="14" fill="#1a1a2e" stroke="#e0e0e0" stroke-width="2"/>
            <rect x="124" y="126" width="96" height="8" rx="4" fill="#ffffff"/>
            <rect x="124" y="142" width="120" height="6" rx="3" fill="#aaaaaa"/>
            <rect x="124" y="154" width="80" height="6" rx="3" fill="#aaaaaa"/>
        </svg>`,
    },
];