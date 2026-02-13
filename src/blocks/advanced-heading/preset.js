import { __ } from '@wordpress/i18n';

/**
* Preset Styles Data Object
*/
export const presetStyles = {
    "preset-1": {
        headingIconSwitcher: false,
        subHeadingSwitcher: false,
        showSeparatorSwitcher: false,
        activeLineSwitcher: false,
        separator: "solid",
        separatorColor: "#399CFF",
        headingBackgroundImageEnabled: false,
        subHeadingSwitcher: false,
        showSeparatorSwitcher: false,
        headingBackgroundImageEnabled: false,
        headingIconSwitcher: false,
        headingTextShadowCssValue: "none",
        headingColor: "",
        headingTextStroke: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        },
        headingTextStrokeColor: "",
        headingTextStrokeHoverColor: "",
        headingAlignment: {
            Desktop: "left"
        },
        headingDesktopPadding: {
            bottom: '24',
        },
        headingDesktopPadding: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    "preset-2": {
        headingIconSwitcher: false,
        subHeadingSwitcher: true,
        showSeparatorSwitcher: false,
        activeLineSwitcher: false,
        separator: "solid",
        separatorColor: "#399CFF",
        headingBackgroundImageEnabled: false,
        headingTextShadowCssValue: "",
        headingColor: "#000000",
        headingTextStroke: "",
        headingDesktopPadding: ""
    },
    "preset-3": {
        subHeadingSwitcher: true,
        showSeparatorSwitcher: false,
        headingBackgroundImageEnabled: false,
        headingIconSwitcher: false,
        headingTextShadowCssValue: "0px 18px 0px #399cff1a;",
        headingColor: "transparent",
        headingTextStroke: {
            Desktop: "2",
            Tablet: "2",
            Mobile: "2",
        },
        headingTextStrokeColor: "#399CFF",
        headingTextStrokeHoverColor: "#399CFF",
        headingAlignment: {
            Desktop: "left"
        },
        headingDesktopPadding: {
            top: '0',
            bottom: '24',
            left: '0',
            right: '0',
        },
    },
    "preset-4": {
        subHeadingSwitcher: true,
        subHeadingPosition: "bottom",
        showSeparatorSwitcher: false,
        separator: "solid",
        separatorColor: "#399CFF",
        separatorPosition: "bottom",
        headingBackgroundImageEnabled: true,
        headingIconSwitcher: false,
        headingTextShadowCssValue: "none",
        headingColor: "",
        headingTextStroke: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        },
        headingTextStrokeColor: "",
        headingTextStrokeHoverColor: "",
        headingAlignment: {
            Desktop: "left"
        },
        headingDesktopPadding: {
            top: '0',
            bottom: '24',
            left: '0',
            right: '0',
        },
    },
    "preset-5": {
        headingIconSwitcher: false,
        subHeadingSwitcher: false,
        subHeadingPosition: "bottom",
        activeLineSwitcher: false,
        showSeparatorSwitcher: true,
        separator: "dashed",
        separatorWidth: {
            Desktop: '270',
        },
        separatorColor: "#F89B2E",
        separatorPosition: "bottom",
        headingBackgroundImageEnabled: false,
        headingTextShadowCssValue: "none",
        headingColor: "#F89B2E",
        headingTextStroke: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        },
        headingTextStrokeColor: "",
        headingTextStrokeHoverColor: "",
        headingAlignment: {
            Desktop: "left"
        },
        headingDesktopPadding: {
            top: '0',
            bottom: '24',
            left: '0',
            right: '0',
        },
    },
    "preset-6": {
        headingIconSwitcher: false,
        subHeadingSwitcher: false,
        subHeadingPosition: "bottom",
        activeLineSwitcher: true,
        activeLineBeforeWidth: {
            Desktop: '42',
        },
        activeLineAfterWidth: {
            Desktop: '100',
        },
        activeLineBeforeColor: "#399CFF",
        activeLineAfterColor: "#B0D7FF",
        showSeparatorSwitcher: false,
        separator: "",
        separatorColor: "",
        separatorPosition: "bottom",
        headingBackgroundImageEnabled: false,
        headingTextShadowCssValue: "none",
        headingColor: "#399CFF",
        headingTextStroke: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        },
        headingTextStrokeColor: "",
        headingTextStrokeHoverColor: "",
        headingAlignment: {
            Desktop: "left"
        },
        headingDesktopPadding: {
            top: '0',
            bottom: '24',
            left: '0',
            right: '0',
        },
    },
    "preset-7": {
        headingIconSwitcher: true,
        subHeadingSwitcher: false,
        subHeadingPosition: "bottom",
        activeLineSwitcher: false,
        activeLineBeforeWidth: {
            Desktop: '42',
        },
        activeLineAfterWidth: {
            Desktop: '100',
        },
        activeLineBeforeColor: "#E95B68",
        activeLineAfterColor: "#e7adadff",
        showSeparatorSwitcher: true,
        separator: "solid",
        separatorWidth: {
            Desktop: '150',
        },
        separatorColor: "#E95B68",
        separatorPosition: "top",
        headingBackgroundImageEnabled: false,
        headingTextShadowCssValue: "none",
        headingColor: "#E95B68",
        headingTextStroke: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        },
        headingTextStrokeColor: "",
        headingTextStrokeHoverColor: "",
        headingAlignment: {
            Desktop: "left"
        },
        headingDesktopPadding: {
            top: '24',
            bottom: '0',
            left: '0',
            right: '0',
        },
        headingIconColor: "#E95B68",
        headingIconDesktopPadding: {
            top: '0',
            bottom: '24',
            left: '0',
            right: '0',
        }
    },
}

export const advancedHeadingPresets = [
    {
        value: 'preset-1',
        label: __('Preset 1', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['preset-1']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                    <g opacity="0.4" filter="url(#filter0_d_16980_14955)">
                    <path d="M64 105C64 97.8203 69.8203 92 77 92H183C190.18 92 196 97.8203 196 105C196 112.18 190.18 118 183 118H77C69.8203 118 64 112.18 64 105Z" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14955)">
                    <path d="M64 147C64 139.82 69.8203 134 77 134H271C278.18 134 284 139.82 284 147C284 154.18 278.18 160 271 160H77C69.8203 160 64 154.18 64 147Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14955" x="63" y="92" width="134" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14955"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14955" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14955" x="63" y="134" width="222" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14955"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14955" result="shape"/>
                    </filter>
                    </defs>
                </svg>`,
    },
    {
        value: 'preset-2',
        label: __('Preset 2', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['preset-2']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                    <g filter="url(#filter0_d_16980_14926)">
                    <path d="M64 108C64 100.82 69.8203 95 77 95H271C278.18 95 284 100.82 284 108C284 115.18 278.18 121 271 121H77C69.8203 121 64 115.18 64 108Z" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14926)">
                    <rect x="64" y="141" width="162" height="16" rx="8" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14926" x="63" y="95" width="222" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14926"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14926" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14926" x="63" y="141" width="164" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14926"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14926" result="shape"/>
                    </filter>
                    </defs>
                </svg>`,
    },
    {
        value: 'preset-3',
        label: __('Preset 3', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['preset-3']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                    <g filter="url(#filter0_d_16980_14951)">
                    <path d="M64 118C64 110.82 69.8203 105 77 105H271C278.18 105 284 110.82 284 118C284 125.18 278.18 131 271 131H77C69.8203 131 64 125.18 64 118Z" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14951)">
                    <rect x="64" y="155" width="162" height="16" rx="8" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14951" x="64" y="105" width="220" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="10"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.827186 0 0 0 0 0.827186 0 0 0 0 0.827186 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14951"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14951" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14951" x="63" y="155" width="164" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14951"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14951" result="shape"/>
                    </filter>
                    </defs>
            </svg>`,
    },
    {
        value: 'preset-4',
        label: __('Preset 4', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['preset-4']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                    <g filter="url(#filter0_d_16980_14926)">
                    <path d="M64 108C64 100.82 69.8203 95 77 95H271C278.18 95 284 100.82 284 108C284 115.18 278.18 121 271 121H77C69.8203 121 64 115.18 64 108Z" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14926)">
                    <rect x="64" y="141" width="162" height="16" rx="8" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14926" x="63" y="95" width="222" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14926"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14926" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14926" x="63" y="141" width="164" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14926"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14926" result="shape"/>
                    </filter>
                    </defs>
                </svg>`,
    },
    {
        value: 'preset-5',
        label: __('Preset 5', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['preset-5']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                    <g filter="url(#filter0_d_16980_14930)">
                    <path d="M64 98C64 90.8203 69.8203 85 77 85H271C278.18 85 284 90.8203 284 98C284 105.18 278.18 111 271 111H77C69.8203 111 64 105.18 64 98Z" fill="white"/>
                    </g>
                    <line x1="64" y1="130.25" x2="284" y2="130.25" stroke="#6A758E" stroke-width="1.5" stroke-dasharray="8 8"/>
                    <g filter="url(#filter1_d_16980_14930)">
                    <rect x="64" y="151" width="162" height="16" rx="8" fill="white"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14930)">
                    <rect x="64" y="175" width="100" height="16" rx="8" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14930" x="63" y="85" width="222" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14930"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14930" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14930" x="63" y="151" width="164" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14930"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14930" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14930" x="63" y="175" width="102" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14930"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14930" result="shape"/>
                    </filter>
                    </defs>
                </svg>`,
    },
    {
        value: 'preset-6',
        label: __('Preset 6', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['preset-6']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                    <g filter="url(#filter0_d_16980_14937)">
                    <path d="M64 97.25C64 90.0703 69.8203 84.25 77 84.25H271C278.18 84.25 284 90.0703 284 97.25C284 104.43 278.18 110.25 271 110.25H77C69.8203 110.25 64 104.43 64 97.25Z" fill="white"/>
                    </g>
                    <rect width="220" height="1.50001" transform="translate(64 130.25)" fill="#C3C8D2"/>
                    <path d="M144 130.25L144 131.75L64 131.75L64 130.25L144 130.25Z" fill="#6A758E"/>
                    <g filter="url(#filter1_d_16980_14937)">
                    <rect x="64" y="151.75" width="162" height="16" rx="8" fill="white"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14937)">
                    <rect x="64" y="175.75" width="100" height="16" rx="8" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14937" x="63" y="84.25" width="222" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14937"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14937" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14937" x="63" y="151.75" width="164" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14937"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14937" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14937" x="63" y="175.75" width="102" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14937"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14937" result="shape"/>
                    </filter>
                    </defs>
                </svg>`,
    },
    {
        value: 'preset-7',
        label: __('Preset 7', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['preset-7']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                    <mask id="path-2-inside-1_16980_14959" fill="white">
                    <path d="M64 84H284V146H64V84Z"/>
                    </mask>
                    <path d="M284 146V144.5H64V146V147.5H284V146Z" fill="#C3C8D2" mask="url(#path-2-inside-1_16980_14959)"/>
                    <path d="M84.6749 90.8908C84.7211 90.8909 84.7673 90.891 84.8149 90.8912C85.4886 90.8939 86.1276 90.922 86.7821 91.0946C86.8636 91.1136 86.945 91.1326 87.0265 91.1516C88.484 91.5149 89.7364 92.318 90.8427 93.3095C90.8913 93.3528 90.9399 93.3962 90.99 93.4409C91.6687 94.083 92.1985 94.8838 92.6268 95.7089C92.664 95.7793 92.7012 95.8497 92.7395 95.9223C92.9632 96.3624 93.124 96.8115 93.2613 97.2854C93.2762 97.3367 93.2911 97.388 93.3065 97.4409C93.5174 98.2074 93.5729 98.9632 93.5689 99.754C93.5687 99.8233 93.5687 99.8233 93.5686 99.894C93.5658 100.566 93.5425 101.209 93.3651 101.861C93.3483 101.923 93.3483 101.923 93.3311 101.986C92.6998 104.259 91.3282 106.169 89.3046 107.398C89.2651 107.422 89.2256 107.446 89.185 107.471C87.3531 108.564 84.9662 108.979 82.8694 108.516C81.0908 108.066 79.5932 107.273 78.2919 105.983C78.2123 105.905 78.2123 105.905 78.1311 105.825C76.5827 104.212 75.8173 102.016 75.8156 99.8079C75.8155 99.7372 75.8155 99.7372 75.8154 99.6651C75.8164 98.9838 75.8409 98.3397 76.0155 97.6776C76.0345 97.5962 76.0535 97.5147 76.0725 97.4332C76.4358 95.9758 77.2389 94.7233 78.2304 93.6171C78.2737 93.5685 78.3171 93.5198 78.3618 93.4698C79.0039 92.791 79.8046 92.2613 80.6298 91.8329C80.7354 91.7771 80.7354 91.7771 80.8432 91.7202C81.2833 91.4965 81.7323 91.3358 82.2063 91.1984C82.2576 91.1835 82.3089 91.1686 82.3618 91.1532C83.1283 90.9424 83.8841 90.8868 84.6749 90.8908Z" fill="#404655"/>
                    <path d="M95.093 102.723C95.4277 102.817 95.6453 103.045 95.8928 103.276C95.9308 103.31 95.9688 103.344 96.0079 103.379C97.6207 104.892 98.3765 107.095 98.5539 109.249C98.5578 109.413 98.5504 109.572 98.5383 109.736C98.5357 109.778 98.5331 109.82 98.5304 109.863C98.3819 112.115 97.5724 114.121 96.0159 115.766C95.9623 115.824 95.9088 115.882 95.8536 115.942C94.4268 117.459 92.3111 118.414 90.2331 118.49C89.3229 118.516 88.4115 118.521 87.5256 118.288C87.4842 118.278 87.4428 118.268 87.4002 118.257C85.4835 117.779 83.7433 116.661 82.5422 115.089C82.5012 115.037 82.4602 114.984 82.418 114.93C81.4464 113.65 80.7374 112.014 80.7542 110.39C80.7545 110.339 80.7548 110.288 80.755 110.235C80.7558 110.11 80.7569 109.985 80.758 109.859C81.0752 109.926 81.387 110.001 81.6978 110.093C84.4258 110.895 87.3335 110.558 89.8402 109.229C90.7653 108.722 91.556 108.106 92.2999 107.361C92.3857 107.276 92.4724 107.191 92.5614 107.109C93.7102 106.031 94.5206 104.439 94.9776 102.951C95.0315 102.784 95.0315 102.784 95.093 102.723Z" fill="#404655"/>
                    <path d="M74.1784 102.723C74.2393 102.743 74.3002 102.763 74.363 102.784C74.4306 102.961 74.4884 103.134 74.5437 103.315C74.9879 104.661 75.726 105.928 76.7006 106.96C76.8167 107.083 76.9239 107.21 77.0316 107.341C77.4711 107.844 78.0445 108.227 78.574 108.631C78.7311 108.752 78.7311 108.752 78.7927 108.813C78.8046 108.941 78.8126 109.068 78.8191 109.196C78.8235 109.275 78.8279 109.355 78.8324 109.438C78.8358 109.501 78.8358 109.501 78.8393 109.566C79.0171 112.799 80.1776 115.498 82.5456 117.734C82.6065 117.775 82.6674 117.816 82.7302 117.857C82.7099 117.918 82.6896 117.979 82.6686 118.042C82.4135 118.158 82.1397 118.219 81.8688 118.288C81.7981 118.307 81.7274 118.326 81.6545 118.345C80.4405 118.612 78.9478 118.61 77.7468 118.288C77.6867 118.272 77.6867 118.272 77.6254 118.256C75.2881 117.626 73.3145 116.128 72.0866 114.043C71.6752 113.302 71.3803 112.524 71.1638 111.705C71.1324 111.59 71.1324 111.59 71.1003 111.473C70.8072 110.158 70.8561 108.566 71.2253 107.275C71.2398 107.225 71.2543 107.174 71.2693 107.121C71.7876 105.38 72.7868 103.886 74.1784 102.723Z" fill="#404655"/>
                    <g filter="url(#filter0_d_16980_14959)">
                    <path d="M64 179C64 171.82 69.8203 166 77 166H271C278.18 166 284 171.82 284 179C284 186.18 278.18 192 271 192H77C69.8203 192 64 186.18 64 179Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14959" x="63" y="166" width="222" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14959"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14959" result="shape"/>
                    </filter>
                    </defs>
                </svg>`,
    },
];