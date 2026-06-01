import { __ } from '@wordpress/i18n';

/**
* Preset Styles Data Object
*/
export const presetStyles = {
    "preset-1": {
        buttonIconSwitcher: true,
        iconBoxIconPosition: 'top',
        wrapperAlignment: 'center',
        Alignment: 'center',
        descAlignment: 'center',
        buttonAlignment: 'center',
        mediaClassicColor: '#D7EBFF',
        mediaHoverClassicColor: '#D7EBFF',
        globalBgColor: '',
        globalBgHoverColor: '',
        mediaIconColor: '#399CFF',
        mediaIconHoverColor: '#399CFF',
        Heading_Color: '#15171C',
        Heading_Hover_Color: '#15171C',
        SubHeadingColor: '#555E72',
        SubHeadingHoverColor: '#555E72',
        buttonTextColor: '#399CFF',
        btnIconColor: '#15171C',
        mediaSize: {
            Desktop: '25',
            Tablet: '',
            Mobile: ''
        },
        globalBorderRadiusDesktop: {
            top: "14",
            bottom: "14",
            left: "14",
            right: "14",
        },
        mediaBorderRadiusDesktop: {
            top: "24",
            bottom: "24",
            left: "24",
            right: "24",
        },
        mediaMarginDesktop: {
            top: '0',
            bottom: '32',
            left: '12',
            right: '12',
        },
    },
    "preset-2": {
        buttonIconSwitcher: true,
        iconBoxIconPosition: 'left',
        wrapperAlignment: 'left',
        Alignment: 'left',
        descAlignment: 'left',
        buttonAlignment: 'left',
        mediaClassicColor: '',
        mediaHoverClassicColor: '',
        globalBgColor: '#ffffff',
        globalBgHoverColor: '#ffffff',
        mediaIconColor: '#399CFF',
        mediaIconHoverColor: '#399CFF',
        Heading_Color: '#15171C',
        Heading_Hover_Color: '#15171C',
        SubHeadingColor: '#555E72',
        SubHeadingHoverColor: '#555E72',
        buttonTextColor: '#15171C',
        btnIconColor: '#15171C',
        mediaSize: {
            Desktop: '68',
            Tablet: '',
            Mobile: ''
        },
        globalBorderRadiusDesktop: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
        mediaBorderRadiusDesktop: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
        mediaMarginDesktop: {
            top: '0',
            bottom: '32',
            left: '12',
            right: '12',
        },
    },
    "preset-3": {
        buttonIconSwitcher: true,
        iconBoxIconPosition: 'top',
        wrapperAlignment: 'center',
        Alignment: 'center',
        descAlignment: 'center',
        buttonAlignment: 'center',
        mediaClassicColor: '#F89B2E',
        mediaHoverClassicColor: '#F89B2E',
        globalBgColor: '#FFFBF5',
        globalBgHoverColor: '#FFFBF5',
        mediaIconColor: '#ffffff',
        mediaIconHoverColor: '#ffffff',
        Heading_Color: '#15171C',
        Heading_Hover_Color: '#15171C',
        SubHeadingColor: '#555E72',
        SubHeadingHoverColor: '#555E72',
        buttonTextColor: '#F89B2E',
        btnIconColor: '#F89B2E',
        mediaSize: {
            Desktop: '25',
            Tablet: '',
            Mobile: ''
        },
        globalBorderRadiusDesktop: {
            top: "6",
            bottom: "6",
            left: "6",
            right: "6",
        },
        mediaBorderRadiusDesktop: {
            top: "14",
            bottom: "14",
            left: "14",
            right: "14",
        },
        mediaMarginDesktop: {
            top: '-64',
            bottom: '32',
            left: '12',
            right: '12',
        },
    },
    "preset-4": {
        buttonIconSwitcher: true,
        iconBoxIconPosition: 'top',
        wrapperAlignment: 'left',
        Alignment: 'left',
        descAlignment: 'left',
        buttonAlignment: 'left',
        mediaClassicColor: '#F89B2E',
        mediaHoverClassicColor: '#F89B2E',
        globalBgColor: '',
        globalBgHoverColor: '',
        mediaIconColor: '#ffffff',
        mediaIconHoverColor: '#ffffff',
        Heading_Color: '#15171C',
        Heading_Hover_Color: '#15171C',
        SubHeadingColor: '#555E72',
        SubHeadingHoverColor: '#555E72',
        buttonTextColor: '#F89B2E',
        btnIconColor: '#F89B2E',
        mediaSize: {
            Desktop: '25',
            Tablet: '',
            Mobile: ''
        },
        globalBorderRadiusDesktop: {
            top: "6",
            bottom: "6",
            left: "6",
            right: "6",
        },
        mediaBorderRadiusDesktop: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
        mediaMarginDesktop: {
            top: '0',
            bottom: '32',
            left: '12',
            right: '12',
        },
    },
    "preset-5": {
        buttonIconSwitcher: true,
        iconBoxIconPosition: 'top',
        wrapperAlignment: 'left',
        Alignment: 'left',
        descAlignment: 'left',
        buttonAlignment: 'left',
        mediaClassicColor: '#15171C',
        mediaHoverClassicColor: '#15171C',
        globalBgColor: '#F7F7F7',
        globalBgHoverColor: '#F7F7F7',
        mediaIconColor: '#ffffff',
        mediaIconHoverColor: '#ffffff',
        Heading_Color: '#15171C',
        Heading_Hover_Color: '#15171C',
        SubHeadingColor: '#555E72',
        SubHeadingHoverColor: '#555E72',
        buttonTextColor: '#15171C',
        btnIconColor: '#15171C',
        mediaSize: {
            Desktop: '25',
            Tablet: '',
            Mobile: ''
        },
        globalBorderRadiusDesktop: {
            top: "6",
            bottom: "6",
            left: "6",
            right: "6",
        },
        mediaBorderRadiusDesktop: {
            top: "14",
            bottom: "14",
            left: "14",
            right: "14",
        },
        mediaMarginDesktop: {
            top: '0',
            bottom: '32',
            left: '12',
            right: '12',
        },
    },
};

export const iconBoxPresets = [
    {
        value: 'preset-1',
        label: __('Preset 1', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['preset-1']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                    <g filter="url(#filter0_d_16980_14436)">
                    <rect x="40" y="33" width="268" height="210" rx="14" fill="#EBEBEB" shape-rendering="crispEdges"/>
                    <rect x="40.5" y="33.5" width="267" height="209" rx="13.5" stroke="white" shape-rendering="crispEdges"/>
                    <g filter="url(#filter1_d_16980_14436)">
                    <rect x="150" y="57" width="48" height="48" rx="14" fill="white" shape-rendering="crispEdges"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M164.254 68C163.392 68 162.565 68.3424 161.956 68.9519C161.346 69.5614 161.004 70.388 161.004 71.25V89.125C161.004 90.4179 161.518 91.6579 162.432 92.5721C163.346 93.4864 164.586 94 165.879 94C167.172 94 168.412 93.4864 169.326 92.5721C170.24 91.6579 170.754 90.4179 170.754 89.125V71.25C170.754 70.388 170.411 69.5614 169.802 68.9519C169.193 68.3424 168.366 68 167.504 68H164.254ZM165.879 90.75C166.31 90.75 166.723 90.5788 167.028 90.274C167.333 89.9693 167.504 89.556 167.504 89.125C167.504 88.694 167.333 88.2807 167.028 87.976C166.723 87.6712 166.31 87.5 165.879 87.5C165.448 87.5 165.035 87.6712 164.73 87.976C164.425 88.2807 164.254 88.694 164.254 89.125C164.254 89.556 164.425 89.9693 164.73 90.274C165.035 90.5788 165.448 90.75 165.879 90.75ZM174.004 87.8949L181.966 79.9324C182.576 79.3229 182.918 78.4964 182.918 77.6346C182.918 76.7728 182.576 75.9463 181.966 75.3369L179.667 73.0375C179.058 72.4282 178.231 72.0859 177.369 72.0859C176.507 72.0859 175.681 72.4282 175.072 73.0375L174.004 74.1051V87.8949ZM183.754 94H172.494L182.244 84.25H183.754C184.616 84.25 185.443 84.5924 186.052 85.2019C186.661 85.8114 187.004 86.638 187.004 87.5V90.75C187.004 91.612 186.661 92.4386 186.052 93.0481C185.443 93.6576 184.616 94 183.754 94Z" fill="#404655"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14436)">
                    <path d="M93 135C93 129.477 97.4772 125 103 125H245C250.523 125 255 129.477 255 135C255 140.523 250.523 145 245 145H103C97.4772 145 93 140.523 93 135Z" fill="white"/>
                    </g>
                    <g filter="url(#filter3_d_16980_14436)">
                    <rect x="64" y="163" width="220" height="14" rx="7" fill="white"/>
                    </g>
                    <g filter="url(#filter4_d_16980_14436)">
                    <rect x="130" y="197" width="66" height="22" rx="11" fill="white" shape-rendering="crispEdges"/>
                    <rect x="138" y="205" width="50" height="6" rx="3" fill="#EBEBEB"/>
                    </g>
                    <g clip-path="url(#clip0_16980_14436)">
                    <circle cx="210" cy="208.001" r="6.66667" stroke="#404655" strokeWidth="1.6"/>
                    <path d="M208 210L212 206M212 206V208.667M212 206H209.333" stroke="#404655" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14436" x="39" y="33" width="270" height="213" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14436"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14436" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14436" x="149" y="57" width="50" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14436"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14436" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14436" x="92" y="125" width="164" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14436"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14436" result="shape"/>
                    </filter>
                    <filter id="filter3_d_16980_14436" x="63" y="163" width="222" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14436"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14436" result="shape"/>
                    </filter>
                    <filter id="filter4_d_16980_14436" x="129" y="197" width="68" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14436"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14436" result="shape"/>
                    </filter>
                    <clipPath id="clip0_16980_14436">
                    <rect width="16" height="16" fill="white" transform="translate(202 200)"/>
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
                    <g filter="url(#filter0_d_16980_14736)">
                    <rect x="40" y="67" width="268" height="142" rx="14" fill="#EBEBEB" shape-rendering="crispEdges"/>
                    <rect x="40.5" y="67.5" width="267" height="141" rx="13.5" stroke="white" shape-rendering="crispEdges"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M70.8007 94.4004C69.8989 94.4004 69.034 94.7586 68.3963 95.3963C67.7586 96.034 67.4004 96.8989 67.4004 97.8007V116.503C67.4004 117.855 67.9378 119.153 68.8943 120.109C69.8508 121.066 71.1482 121.603 72.5009 121.603C73.8537 121.603 75.151 121.066 76.1075 120.109C77.0641 119.153 77.6015 117.855 77.6015 116.503V97.8007C77.6015 96.8989 77.2432 96.034 76.6055 95.3963C75.9678 94.7586 75.1029 94.4004 74.2011 94.4004H70.8007ZM72.5009 118.203C72.9518 118.203 73.3843 118.024 73.7031 117.705C74.022 117.386 74.2011 116.954 74.2011 116.503C74.2011 116.052 74.022 115.619 73.7031 115.3C73.3843 114.982 72.9518 114.803 72.5009 114.803C72.05 114.803 71.6176 114.982 71.2987 115.3C70.9799 115.619 70.8007 116.052 70.8007 116.503C70.8007 116.954 70.9799 117.386 71.2987 117.705C71.6176 118.024 72.05 118.203 72.5009 118.203ZM81.0018 115.216L89.3327 106.885C89.9701 106.247 90.3283 105.382 90.3283 104.481C90.3283 103.579 89.9701 102.714 89.3327 102.077L86.9269 99.6709C86.2893 99.0335 85.4245 98.6754 84.5229 98.6754C83.6212 98.6754 82.7565 99.0335 82.1188 99.6709L81.0018 100.788V115.216ZM91.2029 121.603H79.4223L89.6234 111.402H91.2029C92.1047 111.402 92.9696 111.76 93.6073 112.398C94.245 113.036 94.6032 113.901 94.6032 114.803V118.203C94.6032 119.105 94.245 119.97 93.6073 120.607C92.9696 121.245 92.1047 121.603 91.2029 121.603Z" fill="#404655"/>
                    <g filter="url(#filter1_d_16980_14736)">
                    <path d="M118.004 101C118.004 95.4772 122.481 91 128.004 91H270.004C275.527 91 280.004 95.4772 280.004 101C280.004 106.523 275.527 111 270.004 111H128.004C122.481 111 118.004 106.523 118.004 101Z" fill="white"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14736)">
                    <rect x="118.004" y="129" width="165.996" height="14" rx="7" fill="white"/>
                    </g>
                    <g filter="url(#filter3_d_16980_14736)">
                    <rect x="118.004" y="163" width="66" height="22" rx="11" fill="white" shape-rendering="crispEdges"/>
                    <rect x="126.004" y="171" width="50" height="6" rx="3" fill="#EBEBEB"/>
                    </g>
                    <g clip-path="url(#clip0_16980_14736)">
                    <circle cx="198.004" cy="174.001" r="6.66667" stroke="#404655" strokeWidth="1.6"/>
                    <path d="M196.004 176L200.004 172M200.004 172V174.667M200.004 172H197.337" stroke="#404655" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14736" x="39" y="67" width="270" height="145" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14736"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14736" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14736" x="117.004" y="91" width="164" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14736"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14736" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14736" x="117.004" y="129" width="167.996" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14736"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14736" result="shape"/>
                    </filter>
                    <filter id="filter3_d_16980_14736" x="117.004" y="163" width="68" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14736"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14736" result="shape"/>
                    </filter>
                    <clipPath id="clip0_16980_14736">
                    <rect width="16" height="16" fill="white" transform="translate(190.004 166)"/>
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
                    <g filter="url(#filter0_d_16980_14724)">
                    <rect x="40" y="67" width="268" height="169" rx="14" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14724)">
                    <rect x="150" y="45" width="48" height="48" rx="10" fill="white" shape-rendering="crispEdges"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M164.254 56C163.392 56 162.565 56.3424 161.956 56.9519C161.346 57.5614 161.004 58.388 161.004 59.25V77.125C161.004 78.4179 161.518 79.6579 162.432 80.5721C163.346 81.4864 164.586 82 165.879 82C167.172 82 168.412 81.4864 169.326 80.5721C170.24 79.6579 170.754 78.4179 170.754 77.125V59.25C170.754 58.388 170.411 57.5614 169.802 56.9519C169.193 56.3424 168.366 56 167.504 56H164.254ZM165.879 78.75C166.31 78.75 166.723 78.5788 167.028 78.274C167.333 77.9693 167.504 77.556 167.504 77.125C167.504 76.694 167.333 76.2807 167.028 75.976C166.723 75.6712 166.31 75.5 165.879 75.5C165.448 75.5 165.035 75.6712 164.73 75.976C164.425 76.2807 164.254 76.694 164.254 77.125C164.254 77.556 164.425 77.9693 164.73 78.274C165.035 78.5788 165.448 78.75 165.879 78.75ZM174.004 75.8949L181.966 67.9324C182.576 67.3229 182.918 66.4964 182.918 65.6346C182.918 64.7728 182.576 63.9463 181.966 63.3369L179.667 61.0375C179.058 60.4282 178.231 60.0859 177.369 60.0859C176.507 60.0859 175.681 60.4282 175.072 61.0375L174.004 62.1051V75.8949ZM183.754 82H172.494L182.244 72.25H183.754C184.616 72.25 185.443 72.5924 186.052 73.2019C186.661 73.8114 187.004 74.638 187.004 75.5V78.75C187.004 79.612 186.661 80.4386 186.052 81.0481C185.443 81.6576 184.616 82 183.754 82Z" fill="#404655"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14724)">
                    <path d="M101 123C101 117.477 105.477 113 111 113H237C242.523 113 247 117.477 247 123C247 128.523 242.523 133 237 133H111C105.477 133 101 128.523 101 123Z" fill="#E1E3E8"/>
                    </g>
                    <g filter="url(#filter3_d_16980_14724)">
                    <rect x="64" y="151" width="220" height="14" rx="7" fill="#F3F3F3"/>
                    </g>
                    <g filter="url(#filter4_d_16980_14724)">
                    <rect x="141" y="185" width="66" height="22" rx="11" fill="#E1E3E8" shape-rendering="crispEdges"/>
                    <rect x="149" y="193" width="50" height="6" rx="3" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14724" x="39" y="67" width="270" height="172" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14724"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14724" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14724" x="149" y="45" width="50" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14724"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14724" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14724" x="100" y="113" width="148" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14724"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14724" result="shape"/>
                    </filter>
                    <filter id="filter3_d_16980_14724" x="63" y="151" width="222" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14724"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14724" result="shape"/>
                    </filter>
                    <filter id="filter4_d_16980_14724" x="140" y="185" width="68" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14724"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14724" result="shape"/>
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
                    <g filter="url(#filter0_d_16980_14691)">
                    <rect x="40" y="33" width="268" height="210" rx="14" fill="#EBEBEB" shape-rendering="crispEdges"/>
                    <rect x="40.5" y="33.5" width="267" height="209" rx="13.5" stroke="white" shape-rendering="crispEdges"/>
                    <g filter="url(#filter1_d_16980_14691)">
                    <path d="M110.379 84.2505C108.625 109.246 96.761 105.824 86.5938 103.553C68.5188 99.0112 64 95.538 64 84.2505C64 72.963 78.6859 56.9999 96.761 57C110.379 57.5 111.379 70 110.379 84.2505Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M82.6912 71.4043C82.0533 71.4043 81.4416 71.6577 80.9906 72.1087C80.5395 72.5598 80.2861 73.1715 80.2861 73.8093V87.0371C80.2861 87.9939 80.6662 88.9115 81.3428 89.588C82.0193 90.2646 82.9369 90.6446 83.8937 90.6446C84.8505 90.6446 85.7681 90.2646 86.4446 89.588C87.1212 88.9115 87.5013 87.9939 87.5013 87.0371V73.8093C87.5013 73.1715 87.2479 72.5598 86.7968 72.1087C86.3458 71.6577 85.7341 71.4043 85.0962 71.4043H82.6912ZM83.8937 88.2396C84.2126 88.2396 84.5185 88.1129 84.744 87.8874C84.9695 87.6619 85.0962 87.356 85.0962 87.0371C85.0962 86.7181 84.9695 86.4123 84.744 86.1868C84.5185 85.9612 84.2126 85.8345 83.8937 85.8345C83.5748 85.8345 83.2689 85.9612 83.0434 86.1868C82.8179 86.4123 82.6912 86.7181 82.6912 87.0371C82.6912 87.356 82.8179 87.6619 83.0434 87.8874C83.2689 88.1129 83.5748 88.2396 83.8937 88.2396ZM89.9063 86.1268L95.7987 80.2344C96.2495 79.7834 96.5028 79.1718 96.5028 78.534C96.5028 77.8963 96.2495 77.2847 95.7987 76.8337L94.0971 75.1321C93.6461 74.6812 93.0345 74.4279 92.3967 74.4279C91.759 74.4279 91.1474 74.6812 90.6964 75.1321L89.9063 75.9222V86.1268ZM97.1214 90.6446H88.7892L96.0043 83.4295H97.1214C97.7593 83.4295 98.371 83.6829 98.822 84.1339C99.2731 84.585 99.5265 85.1967 99.5265 85.8345V88.2396C99.5265 88.8774 99.2731 89.4892 98.822 89.9402C98.371 90.3912 97.7593 90.6446 97.1214 90.6446Z" fill="#404655"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14691)">
                    <path d="M64 135C64 129.477 68.4772 125 74 125H216C221.523 125 226 129.477 226 135C226 140.523 221.523 145 216 145H74C68.4772 145 64 140.523 64 135Z" fill="white"/>
                    </g>
                    <g filter="url(#filter3_d_16980_14691)">
                    <rect x="64" y="163" width="220" height="14" rx="7" fill="white"/>
                    </g>
                    <g filter="url(#filter4_d_16980_14691)">
                    <rect x="64" y="197" width="66" height="22" rx="11" fill="white" shape-rendering="crispEdges"/>
                    <rect x="72" y="205" width="50" height="6" rx="3" fill="#EBEBEB"/>
                    </g>
                    <g clip-path="url(#clip0_16980_14691)">
                    <circle cx="144" cy="208.001" r="6.66667" stroke="#404655" strokeWidth="1.6"/>
                    <path d="M142 210L146 206M146 206V208.667M146 206H143.333" stroke="#404655" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14691" x="39" y="33" width="270" height="213" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14691"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14691" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14691" x="63" y="57" width="50" height="51.1172" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14691"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14691" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14691" x="63" y="125" width="164" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14691"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14691" result="shape"/>
                    </filter>
                    <filter id="filter3_d_16980_14691" x="63" y="163" width="222" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14691"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14691" result="shape"/>
                    </filter>
                    <filter id="filter4_d_16980_14691" x="63" y="197" width="68" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14691"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14691" result="shape"/>
                    </filter>
                    <clipPath id="clip0_16980_14691">
                    <rect width="16" height="16" fill="white" transform="translate(136 200)"/>
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
                    <g filter="url(#filter0_d_16980_14708)">
                    <rect x="40" y="33" width="268" height="210" rx="14" fill="white" fill-opacity="0.4" shape-rendering="crispEdges"/>
                    <g filter="url(#filter1_d_16980_14708)">
                    <rect x="64" y="57" width="48" height="48" rx="10" fill="white" shape-rendering="crispEdges"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M78.2539 68C77.392 68 76.5653 68.3424 75.9558 68.9519C75.3463 69.5614 75.0039 70.388 75.0039 71.25V89.125C75.0039 90.4179 75.5175 91.6579 76.4318 92.5721C77.346 93.4864 78.586 94 79.8789 94C81.1718 94 82.4118 93.4864 83.3261 92.5721C84.2403 91.6579 84.7539 90.4179 84.7539 89.125V71.25C84.7539 70.388 84.4115 69.5614 83.802 68.9519C83.1925 68.3424 82.3659 68 81.5039 68H78.2539ZM79.8789 90.75C80.3099 90.75 80.7232 90.5788 81.028 90.274C81.3327 89.9693 81.5039 89.556 81.5039 89.125C81.5039 88.694 81.3327 88.2807 81.028 87.976C80.7232 87.6712 80.3099 87.5 79.8789 87.5C79.4479 87.5 79.0346 87.6712 78.7299 87.976C78.4251 88.2807 78.2539 88.694 78.2539 89.125C78.2539 89.556 78.4251 89.9693 78.7299 90.274C79.0346 90.5788 79.4479 90.75 79.8789 90.75ZM88.0039 87.8949L95.9664 79.9324C96.5757 79.3229 96.918 78.4964 96.918 77.6346C96.918 76.7728 96.5757 75.9463 95.9664 75.3369L93.667 73.0375C93.0576 72.4282 92.2311 72.0859 91.3693 72.0859C90.5075 72.0859 89.681 72.4282 89.0715 73.0375L88.0039 74.1051V87.8949ZM97.7539 94H86.4943L96.2443 84.25H97.7539C98.6159 84.25 99.4425 84.5924 100.052 85.2019C100.661 85.8114 101.004 86.638 101.004 87.5V90.75C101.004 91.612 100.661 92.4386 100.052 93.0481C99.4425 93.6576 98.6159 94 97.7539 94Z" fill="#404655"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14708)">
                    <path d="M64 135C64 129.477 68.4772 125 74 125H216C221.523 125 226 129.477 226 135C226 140.523 221.523 145 216 145H74C68.4772 145 64 140.523 64 135Z" fill="white"/>
                    </g>
                    <g filter="url(#filter3_d_16980_14708)">
                    <rect x="64" y="163" width="220" height="14" rx="7" fill="white"/>
                    </g>
                    <g filter="url(#filter4_d_16980_14708)">
                    <rect x="64" y="197" width="66" height="22" rx="11" fill="white" shape-rendering="crispEdges"/>
                    <rect x="72" y="205" width="50" height="6" rx="3" fill="#EBEBEB"/>
                    </g>
                    <g clip-path="url(#clip0_16980_14708)">
                    <circle cx="144" cy="208.001" r="6.66667" stroke="#404655" strokeWidth="1.6"/>
                    <path d="M142 210L146 206M146 206V208.667M146 206H143.333" stroke="#404655" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14708" x="39" y="33" width="270" height="213" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14708"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14708" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14708" x="63" y="57" width="50" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14708"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14708" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14708" x="63" y="125" width="164" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14708"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14708" result="shape"/>
                    </filter>
                    <filter id="filter3_d_16980_14708" x="63" y="163" width="222" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14708"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14708" result="shape"/>
                    </filter>
                    <filter id="filter4_d_16980_14708" x="63" y="197" width="68" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14708"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14708" result="shape"/>
                    </filter>
                    <clipPath id="clip0_16980_14708">
                    <rect width="16" height="16" fill="white" transform="translate(136 200)"/>
                    </clipPath>
                    </defs>
                </svg>`,
    },
];