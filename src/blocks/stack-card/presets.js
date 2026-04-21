import { __ } from '@wordpress/i18n';

/**
* Preset Styles Data Object
*/
export const presetStyles = {
    "stack-top": {
        
    },
    "stack-left": {
       
    },
    "stack-right": {
        
    },
    "stack-over": {
        
    },
}

export const stackedCardPresets = [
    {
        value: 'stack-top',
        label: __('Stacked Top', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['stack-top']).map(([label, value]) => ({ label, value })),
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
        value: 'stack-left',
        label: __('Stacked Left', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['stack-left']).map(([label, value]) => ({ label, value })),
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
        value: 'stack-right',
        label: __('Stacked Right', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['stack-right']).map(([label, value]) => ({ label, value })),
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
        value: 'stack-over',
        label: __('Stacked Over', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['stack-over']).map(([label, value]) => ({ label, value })),
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
    
];