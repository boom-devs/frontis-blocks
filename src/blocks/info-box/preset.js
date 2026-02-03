import { __ } from '@wordpress/i18n';

/**
* Preset Styles Data Object
*/
export const presetStyles = {
    'preset-1': {
        info_Button_Switcher: true,
        info_Button_Text: 'Learn more',
        mediaClassicColor: '#399CFF',
        mediaHoverClassicColor: '#ffffff',
        globalBgColor: '#EBF5FF',
        globalBgHoverColor: '#399CFF',
        mediaIconColor: '#ffffff',
        mediaIconHoverColor: '#399CFF',
        Heading_Color: '#15171C',
        Heading_Hover_Color: '#ffffff',
        SubHeadingColor: '#555E72',
        SubHeadingHoverColor: '#ffffff',
        buttonTextColor: '#399CFF',
        buttonTextHoverColor: '#ffffff',
        btnIconColor: '#399CFF',
        btnIconHoverColor: '#ffffff',
        buttonBgColor: '',
        buttonBgHoverColor: '',
        btnIcon: 'arrow-left',
        buttonIconRotate: {
            Desktop: "145",
            Tablet: "145",
            Mobile: "145",
        },
        btnIconPosition: 'right',
        infoButtonDesktopMargin: {
            top: "0",
            bottom: "0",
            left: "16",
            right: "16",
        },
        infoButtonDesktopPadding: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
        infoBtnDesktopBorderradiusWidth: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
        mediaBorderRadiusDesktop: {
            top: "50",
            bottom: "50",
            left: "50",
            right: "50",
        },
    },
    
    'preset-2': {
        info_Button_Switcher: false,
        info_Button_Text: 'Learn more',
        mediaClassicColor: '',
        mediaHoverClassicColor: '',
        globalBgColor: '#399CFF',
        globalBgHoverColor: '',
        mediaIconColor: '#ffffff',
        mediaIconHoverColor: '#ffffff',
        Heading_Color: '#ffffff',
        Heading_Hover_Color: '#ffffff',
        SubHeadingColor: '#ffffff',
        SubHeadingHoverColor: '#ffffff',
        globalBorderRadiusDesktop: {
            top: "24",
            bottom: "24",
            left: "24",
            right: "24",
        },
        mediaBorderRadiusDesktop: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    "preset-3": {
        info_Button_Switcher: false,
        info_Button_Text: 'Learn more',
        mediaClassicColor: '#399CFF',
        mediaHoverClassicColor: '399CFF',
        globalBgColor: '',
        globalBgHoverColor: '',
        mediaIconColor: '#ffffff',
        mediaIconHoverColor: '#ffffff',
        Heading_Color: '#15171C',
        Heading_Hover_Color: '#15171C',
        SubHeadingColor: '#555E72',
        SubHeadingHoverColor: '#555E72',
        globalBorderRadiusDesktop: {
            top: "24",
            bottom: "24",
            left: "24",
            right: "24",
        },
        mediaBorderRadiusDesktop: {
            top: "24",
            bottom: "24",
            left: "24",
            right: "24",
        },
    },
    "preset-4": {
        info_Button_Switcher: true,
        info_Button_Text: 'Learn more',
        mediaClassicColor: '#399CFF',
        mediaHoverClassicColor: '#ffffff',
        globalBgColor: '#FFFBF5',
        globalBgHoverColor: '#399CFF',
        mediaIconColor: '#ffffff',
        mediaIconHoverColor: '#399CFF',
        Heading_Color: '#15171C',
        Heading_Hover_Color: '#ffffff',
        SubHeadingColor: '#555E72',
        SubHeadingHoverColor: '#ffffff',
        buttonTextColor: '#F89B2E',
        buttonTextHoverColor: '#ffffff',
        btnIconColor: '#F89B2E',
        btnIconHoverColor: '#ffffff',
        buttonBgColor: '',
        buttonBgHoverColor: '',
        btnIcon: 'arrow-left',
        buttonIconRotate: {
            Desktop: "145",
            Tablet: "145",
            Mobile: "145",
        },
        btnIconPosition: 'right',
        globalBorderRadiusDesktop: {
            top: "6",
            bottom: "6",
            left: "6",
            right: "6",
        },
        mediaBorderRadiusDesktop: {
            top: "24",
            bottom: "24",
            left: "24",
            right: "24",
        },
    },
    "preset-5": {
        info_Button_Switcher: true,
        info_Button_Text: 'Learn more',
        mediaClassicColor: '#399CFF',
        mediaHoverClassicColor: '399CFF',
        globalBgColor: '',
        globalBgHoverColor: '',
        mediaIconColor: '#ffffff',
        mediaIconHoverColor: '#ffffff',
        Heading_Color: '#15171C',
        Heading_Hover_Color: '#15171C',
        SubHeadingColor: '#555E72',
        SubHeadingHoverColor: '#555E72',
        buttonTextColor: '#399CFF',
        buttonTextHoverColor: '#399CFF',
        btnIconColor: '#399CFF',
        btnIconHoverColor: '#399CFF',
        buttonBgColor: '',
        buttonBgHoverColor: '',
        btnIcon: 'arrow-left',
        buttonIconRotate: {
            Desktop: "145",
            Tablet: "145",
            Mobile: "145",
        },
        btnIconPosition: 'right',
        infoButtonDesktopMargin: {
            top: "0",
            bottom: "0",
            left: "16",
            right: "16",
        },
        infoButtonDesktopPadding: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
        infoBtnDesktopBorderradiusWidth: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
        globalBorderRadiusDesktop: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
};
    
export const infoBoxPresets = [
    {
        value: 'preset-1',
        label: __('Preset 1', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['preset-1']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                    <rect x="24" y="23" width="300" height="230" rx="14" fill="white" fill-opacity="0.4"/>
                    <rect x="44" y="43" width="44" height="44" rx="22" fill="white"/>
                    <g clip-path="url(#clip0_16980_14882)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M58.3881 54.8457C57.7148 54.8457 57.0692 55.1131 56.5931 55.5892C56.1171 56.0653 55.8496 56.7109 55.8496 57.3842V71.3457C55.8496 72.3556 56.2508 73.3241 56.9649 74.0381C57.6789 74.7522 58.6474 75.1534 59.6573 75.1534C60.6672 75.1534 61.6357 74.7522 62.3497 74.0381C63.0638 73.3241 63.465 72.3556 63.465 71.3457V57.3842C63.465 56.7109 63.1975 56.0653 62.7215 55.5892C62.2454 55.1131 61.5998 54.8457 60.9265 54.8457H58.3881ZM59.6573 72.6149C59.9939 72.6149 60.3168 72.4812 60.5548 72.2432C60.7928 72.0052 60.9265 71.6823 60.9265 71.3457C60.9265 71.0091 60.7928 70.6862 60.5548 70.4482C60.3168 70.2102 59.9939 70.0765 59.6573 70.0765C59.3207 70.0765 58.9978 70.2102 58.7598 70.4482C58.5218 70.6862 58.3881 71.0091 58.3881 71.3457C58.3881 71.6823 58.5218 72.0052 58.7598 72.2432C58.9978 72.4812 59.3207 72.6149 59.6573 72.6149ZM66.0035 70.3849L72.2227 64.1657C72.6986 63.6896 72.9659 63.0441 72.9659 62.371C72.9659 61.6979 72.6986 61.0523 72.2227 60.5763L70.4267 58.7803C69.9507 58.3044 69.3051 58.0371 68.632 58.0371C67.9589 58.0371 67.3134 58.3044 66.8373 58.7803L66.0035 59.6142V70.3849ZM73.6188 75.1534H64.8243L72.4397 67.538H73.6188C74.2921 67.538 74.9377 67.8055 75.4138 68.2815C75.8899 68.7576 76.1573 69.4032 76.1573 70.0765V72.6149C76.1573 73.2882 75.8899 73.9338 75.4138 74.4099C74.9377 74.886 74.2921 75.1534 73.6188 75.1534Z" fill="#404655"/>
                    </g>
                    <g filter="url(#filter0_d_16980_14882)">
                    <path d="M44 120C44 112.82 49.8203 107 57 107H149C156.18 107 162 112.82 162 120C162 127.18 156.18 133 149 133H57C49.8203 133 44 127.18 44 120Z" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14882)">
                    <rect x="44" y="149" width="260" height="16" rx="8" fill="white"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14882)">
                    <rect x="44" y="185" width="104" height="48" rx="24" fill="white" shape-rendering="crispEdges"/>
                    <rect x="60" y="201" width="72" height="16" rx="8" fill="#EBEBEB"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14882" x="43" y="107" width="120" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14882"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14882" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14882" x="43" y="149" width="262" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14882"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14882" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14882" x="43" y="185" width="106" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14882"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14882" result="shape"/>
                    </filter>
                    <clipPath id="clip0_16980_14882">
                    <rect width="22" height="22" fill="white" transform="translate(55 54)"/>
                    </clipPath>
                    </defs>
            </svg>`,
    },
    {
        value: 'preset-2',
        label: __('Preset 2', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['preset-2']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                    <rect x="24" y="23" width="300" height="230" rx="14" fill="white" fill-opacity="0.4"/>
                    <g clip-path="url(#clip0_16980_14915)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M58.3881 54.8457C57.7148 54.8457 57.0692 55.1131 56.5931 55.5892C56.1171 56.0653 55.8496 56.7109 55.8496 57.3842V71.3457C55.8496 72.3556 56.2508 73.3241 56.9649 74.0381C57.6789 74.7522 58.6474 75.1534 59.6573 75.1534C60.6672 75.1534 61.6357 74.7522 62.3497 74.0381C63.0638 73.3241 63.465 72.3556 63.465 71.3457V57.3842C63.465 56.7109 63.1975 56.0653 62.7215 55.5892C62.2454 55.1131 61.5998 54.8457 60.9265 54.8457H58.3881ZM59.6573 72.6149C59.9939 72.6149 60.3168 72.4812 60.5548 72.2432C60.7928 72.0052 60.9265 71.6823 60.9265 71.3457C60.9265 71.0091 60.7928 70.6862 60.5548 70.4482C60.3168 70.2102 59.9939 70.0765 59.6573 70.0765C59.3207 70.0765 58.9978 70.2102 58.7598 70.4482C58.5218 70.6862 58.3881 71.0091 58.3881 71.3457C58.3881 71.6823 58.5218 72.0052 58.7598 72.2432C58.9978 72.4812 59.3207 72.6149 59.6573 72.6149ZM66.0035 70.3849L72.2227 64.1657C72.6986 63.6896 72.9659 63.0441 72.9659 62.371C72.9659 61.6979 72.6986 61.0523 72.2227 60.5763L70.4267 58.7803C69.9507 58.3044 69.3051 58.0371 68.632 58.0371C67.9589 58.0371 67.3134 58.3044 66.8373 58.7803L66.0035 59.6142V70.3849ZM73.6188 75.1534H64.8243L72.4397 67.538H73.6188C74.2921 67.538 74.9377 67.8055 75.4138 68.2815C75.8899 68.7576 76.1573 69.4032 76.1573 70.0765V72.6149C76.1573 73.2882 75.8899 73.9338 75.4138 74.4099C74.9377 74.886 74.2921 75.1534 73.6188 75.1534Z" fill="#404655"/>
                    </g>
                    <g filter="url(#filter0_d_16980_14915)">
                    <path d="M44 120C44 112.82 49.8203 107 57 107H149C156.18 107 162 112.82 162 120C162 127.18 156.18 133 149 133H57C49.8203 133 44 127.18 44 120Z" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14915)">
                    <rect x="44" y="149" width="260" height="16" rx="8" fill="white"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14915)">
                    <rect x="44" y="185" width="104" height="48" rx="24" fill="white" shape-rendering="crispEdges"/>
                    <rect x="60" y="201" width="72" height="16" rx="8" fill="#EBEBEB"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14915" x="43" y="107" width="120" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14915"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14915" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14915" x="43" y="149" width="262" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14915"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14915" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14915" x="43" y="185" width="106" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14915"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14915" result="shape"/>
                    </filter>
                    <clipPath id="clip0_16980_14915">
                    <rect width="22" height="22" fill="white" transform="translate(55 54)"/>
                    </clipPath>
                    </defs>
            </svg>`,
    },
    {
        value: 'preset-3',
        label: __('Preset 3', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['preset-3']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                    <rect x="44" y="43" width="44" height="44" rx="14" fill="white"/>
                    <g clip-path="url(#clip0_16980_14402)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M58.3881 54.8457C57.7148 54.8457 57.0692 55.1131 56.5931 55.5892C56.1171 56.0653 55.8496 56.7109 55.8496 57.3842V71.3457C55.8496 72.3556 56.2508 73.3241 56.9649 74.0381C57.6789 74.7522 58.6474 75.1534 59.6573 75.1534C60.6672 75.1534 61.6357 74.7522 62.3497 74.0381C63.0638 73.3241 63.465 72.3556 63.465 71.3457V57.3842C63.465 56.7109 63.1975 56.0653 62.7215 55.5892C62.2454 55.1131 61.5998 54.8457 60.9265 54.8457H58.3881ZM59.6573 72.6149C59.9939 72.6149 60.3168 72.4812 60.5548 72.2432C60.7928 72.0052 60.9265 71.6823 60.9265 71.3457C60.9265 71.0091 60.7928 70.6862 60.5548 70.4482C60.3168 70.2102 59.9939 70.0765 59.6573 70.0765C59.3207 70.0765 58.9978 70.2102 58.7598 70.4482C58.5218 70.6862 58.3881 71.0091 58.3881 71.3457C58.3881 71.6823 58.5218 72.0052 58.7598 72.2432C58.9978 72.4812 59.3207 72.6149 59.6573 72.6149ZM66.0035 70.3849L72.2227 64.1657C72.6986 63.6896 72.9659 63.0441 72.9659 62.371C72.9659 61.6979 72.6986 61.0523 72.2227 60.5763L70.4267 58.7803C69.9507 58.3044 69.3051 58.0371 68.632 58.0371C67.9589 58.0371 67.3134 58.3044 66.8373 58.7803L66.0035 59.6142V70.3849ZM73.6188 75.1534H64.8243L72.4397 67.538H73.6188C74.2921 67.538 74.9377 67.8055 75.4138 68.2815C75.8899 68.7576 76.1573 69.4032 76.1573 70.0765V72.6149C76.1573 73.2882 75.8899 73.9338 75.4138 74.4099C74.9377 74.886 74.2921 75.1534 73.6188 75.1534Z" fill="#404655"/>
                    </g>
                    <g filter="url(#filter0_d_16980_14402)">
                    <path d="M44 120C44 112.82 49.8203 107 57 107H149C156.18 107 162 112.82 162 120C162 127.18 156.18 133 149 133H57C49.8203 133 44 127.18 44 120Z" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14402)">
                    <rect x="44" y="149" width="260" height="16" rx="8" fill="white"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14402)">
                    <rect x="44" y="185" width="104" height="48" rx="24" fill="white" shape-rendering="crispEdges"/>
                    <rect x="60" y="201" width="72" height="16" rx="8" fill="#EBEBEB"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14402" x="43" y="107" width="120" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14402"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14402" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14402" x="43" y="149" width="262" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14402"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14402" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14402" x="43" y="185" width="106" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14402"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14402" result="shape"/>
                    </filter>
                    <clipPath id="clip0_16980_14402">
                    <rect width="22" height="22" fill="white" transform="translate(55 54)"/>
                    </clipPath>
                    </defs>
            </svg>`,
    },
    {
        value: 'preset-4',
        label: __('Preset 4', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['preset-4']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                    <rect x="24" y="22" width="300" height="232" rx="14" fill="white" fill-opacity="0.4"/>
                    <rect x="44" y="42" width="44" height="44" rx="14" fill="white"/>
                    <g clip-path="url(#clip0_16980_14893)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M58.3881 53.8457C57.7148 53.8457 57.0692 54.1131 56.5931 54.5892C56.1171 55.0653 55.8496 55.7109 55.8496 56.3842V70.3457C55.8496 71.3556 56.2508 72.3241 56.9649 73.0381C57.6789 73.7522 58.6474 74.1534 59.6573 74.1534C60.6672 74.1534 61.6357 73.7522 62.3497 73.0381C63.0638 72.3241 63.465 71.3556 63.465 70.3457V56.3842C63.465 55.7109 63.1975 55.0653 62.7215 54.5892C62.2454 54.1131 61.5998 53.8457 60.9265 53.8457H58.3881ZM59.6573 71.6149C59.9939 71.6149 60.3168 71.4812 60.5548 71.2432C60.7928 71.0052 60.9265 70.6823 60.9265 70.3457C60.9265 70.0091 60.7928 69.6862 60.5548 69.4482C60.3168 69.2102 59.9939 69.0765 59.6573 69.0765C59.3207 69.0765 58.9978 69.2102 58.7598 69.4482C58.5218 69.6862 58.3881 70.0091 58.3881 70.3457C58.3881 70.6823 58.5218 71.0052 58.7598 71.2432C58.9978 71.4812 59.3207 71.6149 59.6573 71.6149ZM66.0035 69.3849L72.2227 63.1657C72.6986 62.6896 72.9659 62.0441 72.9659 61.371C72.9659 60.6979 72.6986 60.0523 72.2227 59.5763L70.4267 57.7803C69.9507 57.3044 69.3051 57.0371 68.632 57.0371C67.9589 57.0371 67.3134 57.3044 66.8373 57.7803L66.0035 58.6142V69.3849ZM73.6188 74.1534H64.8243L72.4397 66.538H73.6188C74.2921 66.538 74.9377 66.8055 75.4138 67.2815C75.8899 67.7576 76.1573 68.4032 76.1573 69.0765V71.6149C76.1573 72.2882 75.8899 72.9338 75.4138 73.4099C74.9377 73.886 74.2921 74.1534 73.6188 74.1534Z" fill="#404655"/>
                    </g>
                    <g filter="url(#filter0_d_16980_14893)">
                    <path d="M44 120C44 112.82 49.8203 107 57 107H149C156.18 107 162 112.82 162 120C162 127.18 156.18 133 149 133H57C49.8203 133 44 127.18 44 120Z" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14893)">
                    <rect x="44" y="149" width="260" height="16" rx="8" fill="white"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14893)">
                    <rect x="44" y="186" width="104" height="48" rx="24" fill="white" shape-rendering="crispEdges"/>
                    <rect x="60" y="202" width="72" height="16" rx="8" fill="#EBEBEB"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14893" x="43" y="107" width="120" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14893"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14893" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14893" x="43" y="149" width="262" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14893"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14893" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14893" x="43" y="186" width="106" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14893"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14893" result="shape"/>
                    </filter>
                    <clipPath id="clip0_16980_14893">
                    <rect width="22" height="22" fill="white" transform="translate(55 53)"/>
                    </clipPath>
                    </defs>
                </svg>`,
    },
    {
        value: 'preset-5',
        label: __('Preset 5', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['preset-5']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                    <path d="M87.7318 67.9185C86.0779 90.7749 74.8911 87.6456 65.3042 85.5691C48.2608 81.416 44 78.2401 44 67.9185C44 57.5969 57.8477 42.9999 74.8911 43C87.7318 43.4572 88.6747 54.8875 87.7318 67.9185Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M61.4021 57.1992C60.8187 57.1992 60.2591 57.431 59.8465 57.8436C59.4339 58.2562 59.2021 58.8157 59.2021 59.3992V71.4992C59.2021 72.3744 59.5498 73.2138 60.1687 73.8327C60.7876 74.4515 61.6269 74.7992 62.5021 74.7992C63.3774 74.7992 64.2167 74.4515 64.8356 73.8327C65.4545 73.2138 65.8021 72.3744 65.8021 71.4992V59.3992C65.8021 58.8157 65.5704 58.2562 65.1578 57.8436C64.7452 57.431 64.1856 57.1992 63.6021 57.1992H61.4021ZM62.5021 72.5992C62.7939 72.5992 63.0737 72.4833 63.28 72.277C63.4863 72.0707 63.6021 71.791 63.6021 71.4992C63.6021 71.2075 63.4863 70.9277 63.28 70.7214C63.0737 70.5151 62.7939 70.3992 62.5021 70.3992C62.2104 70.3992 61.9306 70.5151 61.7243 70.7214C61.518 70.9277 61.4021 71.2075 61.4021 71.4992C61.4021 71.791 61.518 72.0707 61.7243 72.277C61.9306 72.4833 62.2104 72.5992 62.5021 72.5992ZM68.0021 70.6665L73.3921 65.2765C73.8046 64.864 74.0363 64.3045 74.0363 63.7211C74.0363 63.1378 73.8046 62.5783 73.3921 62.1657L71.8356 60.6092C71.4231 60.1968 70.8636 59.9651 70.2802 59.9651C69.6969 59.9651 69.1374 60.1968 68.7248 60.6092L68.0021 61.3319V70.6665ZM74.6021 74.7992H66.9802L73.5802 68.1992H74.6021C75.1856 68.1992 75.7452 68.431 76.1578 68.8436C76.5704 69.2562 76.8021 69.8157 76.8021 70.3992V72.5992C76.8021 73.1827 76.5704 73.7423 76.1578 74.1549C75.7452 74.5674 75.1856 74.7992 74.6021 74.7992Z" fill="#404655"/>
                    <g filter="url(#filter0_d_16980_14904)">
                    <path d="M44 120C44 112.82 49.8203 107 57 107H149C156.18 107 162 112.82 162 120C162 127.18 156.18 133 149 133H57C49.8203 133 44 127.18 44 120Z" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14904)">
                    <rect x="44" y="149" width="260" height="16" rx="8" fill="white"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14904)">
                    <rect x="44" y="185" width="104" height="48" rx="24" fill="white" shape-rendering="crispEdges"/>
                    <rect x="60" y="201" width="72" height="16" rx="8" fill="#EBEBEB"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14904" x="43" y="107" width="120" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14904"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14904" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14904" x="43" y="149" width="262" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14904"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14904" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14904" x="43" y="185" width="106" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14904"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14904" result="shape"/>
                    </filter>
                    </defs>
                </svg>`,
    },
];