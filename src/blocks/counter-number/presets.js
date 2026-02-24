import { __ } from '@wordpress/i18n';

/**
 * Preset Styles Data Object
 */
export const presetStyles = {
    "preset-1": {
        counterItemBgColor: '#FFFBF5',
        iconPosition: 'left',
        counterNumberEnd: 250,
        counterSuffixSwitch: true,
        counterPrefixSwitch: true,
        counterSuffix: "M",
        mediaSwitcher: 'image',
        counterItemBorder: "none",
        counterItemBorderRadiusMobile: {
            top: '24', bottom: '24', left: '24', right: '24'
        },
        counterItemBorderRadiusTablet: {
            top: '24', bottom: '24', left: '24', right: '24'
        },
        counterItemBorderRadiusUnits: {
            Desktop: 'px', Tablet: 'px', Mobile: 'px'
        },
        counterItemPaddingDesktop: { top: '42', right: '32', bottom: '42', left: '32' },
        counterItemPaddingMobile: { top: '32', bottom: '32', left: '32', right: '32' },
        counterItemPaddingTablet: { top: '24', bottom: '24', left: '24', right: '24' },
        counterItemSize: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        },
        counterItemHeight: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        },
    },
    "preset-2": {
        counterItemBgColor: '#F7F7F7',
        iconPosition: 'top',
        counterNumberEnd: 250,
        counterSuffixSwitch: true,
        counterPrefixSwitch: true,
        mediaSwitcher: 'image',
        counterItemBorder: "none",
        counterItemBorderRadiusMobile: {
            top: '24', bottom: '24', left: '24', right: '24'
        },
        counterItemBorderRadiusTablet: {
            top: '24', bottom: '24', left: '24', right: '24'
        },
        counterItemBorderRadiusUnits: {
            Desktop: 'px', Tablet: 'px', Mobile: 'px'
        },
        counterItemPaddingDesktop: { top: '42', right: '32', bottom: '42', left: '32' },
        counterItemPaddingMobile: { top: '32', bottom: '32', left: '32', right: '32' },
        counterItemPaddingTablet: { top: '24', bottom: '24', left: '24', right: '24' },
        counterItemSize: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        },
        counterItemHeight: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        },
    },
    "preset-3": {
        iconPosition: 'top',
        counterItemBgColor: '#EBF5FF',
        counterAlignment: {
            Desktop: 'left',
            Tablet: 'left',
            Mobile: 'left'
        },
        counterCardAlignment: {
            Desktop: 'center',
            Tablet: 'center',
            Mobile: 'center'
        },
        counterNumberEnd: 32,
        counterSuffixSwitch: false,
        counterPrefixSwitch: false,
        mediaSwitcher: 'icon',
        icon: 'bolt',
        counterItemBorder: "none",
        counterItemBorderRadiusDesktop: {
            top: '24',
            right: '24',
            bottom: '24',
            left: '24'
        },
        counterItemBorderRadiusMobile: {
            top: '24', bottom: '24', left: '24', right: '24'
        },
        counterItemBorderRadiusTablet: {
            top: '24', bottom: '24', left: '24', right: '24'
        },
        counterItemBorderRadiusUnits: {
            Desktop: 'px', Tablet: 'px', Mobile: 'px'
        },
        counterItemPaddingDesktop: { top: '42', right: '32', bottom: '42', left: '32' },
        counterItemPaddingMobile: { top: '32', bottom: '32', left: '32', right: '32' },
        counterItemPaddingTablet: { top: '24', bottom: '24', left: '24', right: '24' },
        counterItemSize: {
            Desktop: '200',
            Tablet: '200',
            Mobile: '200'
        },
        counterItemHeight: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        },
    },
    "preset-4": {
        counterItemBgColor: 'EBF5FF00',
        counterAlignment: {
            Desktop: 'center',
            Tablet: 'center',
            Mobile: 'center'
        },
        counterCardAlignment: {
            Desktop: 'center',
            Tablet: 'center',
            Mobile: 'center'
        },
        counterNumberEnd: 80,
        counterSuffixSwitch: true,
        counterPrefixSwitch: false,
        counterSuffix: "%",
        mediaSwitcher: 'icon',
        icon: 'trophy',
        counterItemBorder: "solid",
        counterItemBorderColor: "#399cff",
        counterItemBorderRadiusDesktop: {
            top: '50',
            right: '50',
            bottom: '50',
            left: '50'
        },
        counterItemBorderRadiusMobile: {
            top: '50', bottom: '50', left: '50', right: '50'
        },
        counterItemBorderRadiusTablet: {
            top: '50', bottom: '50', left: '50', right: '50'
        },
        counterItemBorder: "solid",
        counterItemBorderRadiusUnits: {
            Desktop: '%', Tablet: '%', Mobile: '%'
        },
        counterItemPaddingDesktop: { top: '0', right: '0', bottom: '0', left: '0' },
        counterItemPaddingMobile: { top: '0', bottom: '0', left: '0', right: '0' },
        counterItemPaddingTablet: { top: '0', bottom: '0', left: '0', right: '0' },
        counterItemSize: {
            Desktop: '306',
            Tablet: '306',
            Mobile: '306'
        },
        counterItemHeight: {
            Desktop: '306',
            Tablet: '306',
            Mobile: '306'
        },
        iconPosition: {
            default: 'center'
        }
    },
};
    
export const counterNumberPresets = [
    {
        value: 'preset-1',
        label: __('Preset 1', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['preset-1']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                    <g filter="url(#filter0_d_16980_14412)">
                    <rect x="64.75" y="92" width="218" height="92" rx="14" fill="white" shape-rendering="crispEdges"/>
                    <path d="M117.624 127.875C117.624 128.909 117.42 129.933 117.025 130.889C116.629 131.844 116.049 132.712 115.317 133.443C114.586 134.175 113.718 134.755 112.763 135.151C111.807 135.546 110.783 135.75 109.749 135.75C108.715 135.75 107.691 135.546 106.735 135.151C105.78 134.755 104.912 134.175 104.181 133.443C103.449 132.712 102.869 131.844 102.473 130.889C102.078 129.933 101.874 128.909 101.874 127.875C101.874 125.786 102.704 123.783 104.181 122.307C105.657 120.83 107.66 120 109.749 120C111.838 120 113.841 120.83 115.317 122.307C116.794 123.783 117.624 125.786 117.624 127.875Z" fill="#555E72"/>
                    <path opacity="0.4" d="M126.626 127.875C126.626 129.367 126.033 130.798 124.978 131.852C123.924 132.907 122.493 133.5 121.001 133.5C119.509 133.5 118.078 132.907 117.024 131.852C115.969 130.798 115.376 129.367 115.376 127.875C115.376 126.383 115.969 124.952 117.024 123.898C118.078 122.843 119.509 122.25 121.001 122.25C122.493 122.25 123.924 122.843 124.978 123.898C126.033 124.952 126.626 126.383 126.626 127.875ZM92.876 127.875C92.876 129.367 93.4686 130.798 94.5235 131.852C95.5784 132.907 97.0091 133.5 98.501 133.5C99.9928 133.5 101.424 132.907 102.478 131.852C103.533 130.798 104.126 129.367 104.126 127.875C104.126 126.383 103.533 124.952 102.478 123.898C101.424 122.843 99.9928 122.25 98.501 122.25C97.0091 122.25 95.5784 122.843 94.5235 123.898C93.4686 124.952 92.876 126.383 92.876 127.875Z" fill="#555E72"/>
                    <path d="M123.251 148.125C123.251 152.474 117.207 156 109.751 156C102.294 156 96.251 152.474 96.251 148.125C96.251 143.776 102.294 140.25 109.751 140.25C117.207 140.25 123.251 143.776 123.251 148.125Z" fill="#555E72"/>
                    <path opacity="0.4" d="M132.253 148.125C132.253 151.23 128.225 153.75 123.253 153.75C118.28 153.75 114.253 151.23 114.253 148.125C114.253 145.02 118.28 142.5 123.253 142.5C128.225 142.5 132.253 145.02 132.253 148.125ZM87.2529 148.125C87.2529 151.23 91.2804 153.75 96.2529 153.75C101.225 153.75 105.253 151.23 105.253 148.125C105.253 145.02 101.225 142.5 96.2529 142.5C91.2804 142.5 87.2529 145.02 87.2529 148.125Z" fill="#555E72"/>
                    <rect x="150.75" y="116" width="114" height="18" rx="9" fill="#E1E3E8"/>
                    <rect x="150.75" y="148" width="64" height="12" rx="6" fill="#E1E3E8"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14412" x="63.3487" y="92" width="220.803" height="96.2038" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2.80255"/>
                    <feGaussianBlur stdDeviation="0.700637"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14412"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14412" result="shape"/>
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
                    <g filter="url(#filter0_d_16980_14853)">
                    <rect x="99" y="58" width="150" height="160" rx="14" fill="white" shape-rendering="crispEdges"/>
                    <path d="M181.873 98.7949C181.873 99.8291 181.669 100.853 181.274 101.809C180.878 102.764 180.298 103.632 179.567 104.363C178.835 105.095 177.967 105.675 177.012 106.07C176.056 106.466 175.032 106.67 173.998 106.67C172.964 106.67 171.94 106.466 170.984 106.07C170.029 105.675 169.161 105.095 168.43 104.363C167.698 103.632 167.118 102.764 166.722 101.809C166.327 100.853 166.123 99.8291 166.123 98.7949C166.123 96.7063 166.953 94.7033 168.43 93.2265C169.906 91.7496 171.909 90.9199 173.998 90.9199C176.087 90.9199 178.09 91.7496 179.567 93.2265C181.043 94.7033 181.873 96.7063 181.873 98.7949Z" fill="#555E72"/>
                    <path opacity="0.4" d="M190.875 98.7949C190.875 100.287 190.282 101.718 189.227 102.772C188.173 103.827 186.742 104.42 185.25 104.42C183.758 104.42 182.327 103.827 181.273 102.772C180.218 101.718 179.625 100.287 179.625 98.7949C179.625 97.3031 180.218 95.8723 181.273 94.8174C182.327 93.7626 183.758 93.1699 185.25 93.1699C186.742 93.1699 188.173 93.7626 189.227 94.8174C190.282 95.8723 190.875 97.3031 190.875 98.7949ZM157.125 98.7949C157.125 100.287 157.718 101.718 158.773 102.772C159.827 103.827 161.258 104.42 162.75 104.42C164.242 104.42 165.673 103.827 166.727 102.772C167.782 101.718 168.375 100.287 168.375 98.7949C168.375 97.3031 167.782 95.8723 166.727 94.8174C165.673 93.7626 164.242 93.1699 162.75 93.1699C161.258 93.1699 159.827 93.7626 158.773 94.8174C157.718 95.8723 157.125 97.3031 157.125 98.7949Z" fill="#555E72"/>
                    <path d="M187.5 119.045C187.5 123.394 181.456 126.92 174 126.92C166.544 126.92 160.5 123.394 160.5 119.045C160.5 114.696 166.544 111.17 174 111.17C181.456 111.17 187.5 114.696 187.5 119.045Z" fill="#555E72"/>
                    <path opacity="0.4" d="M196.502 119.045C196.502 122.15 192.474 124.67 187.502 124.67C182.529 124.67 178.502 122.15 178.502 119.045C178.502 115.94 182.529 113.42 187.502 113.42C192.474 113.42 196.502 115.94 196.502 119.045ZM151.502 119.045C151.502 122.15 155.529 124.67 160.502 124.67C165.474 124.67 169.502 122.15 169.502 119.045C169.502 115.94 165.474 113.42 160.502 113.42C155.529 113.42 151.502 115.94 151.502 119.045Z" fill="#555E72"/>
                    <rect x="116.655" y="149.92" width="114" height="18" rx="9" fill="#E1E3E8"/>
                    <rect x="116.655" y="182.08" width="65" height="12" rx="6" fill="#E1E3E8"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14853" x="97.5841" y="58" width="152.832" height="164.248" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2.83186"/>
                    <feGaussianBlur stdDeviation="0.707965"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14853"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14853" result="shape"/>
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
                    <g filter="url(#filter0_d_16980_14863)">
                    <rect x="106" y="58" width="136" height="160" rx="14" fill="white" shape-rendering="crispEdges"/>
                    <path d="M179.059 80.0003C179.525 80.2167 179.748 80.4942 179.997 80.9378C180.033 81.1923 180.045 81.4003 180.037 81.6536C180.035 81.729 180.034 81.8044 180.033 81.8821C179.998 83.2037 179.866 84.5238 179.754 85.8405C179.719 86.2445 179.686 86.6484 179.652 87.0524C179.596 87.7288 179.539 88.4051 179.481 89.0813C179.415 89.8627 179.349 90.6441 179.284 91.4256C179.214 92.2607 179.144 93.0958 179.074 93.9308C179.054 94.1707 179.034 94.4105 179.014 94.6504C178.982 95.0263 178.95 95.4022 178.918 95.7781C178.907 95.916 178.895 96.0539 178.884 96.1917C178.868 96.3798 178.852 96.5678 178.836 96.7557C178.827 96.8609 178.818 96.9661 178.809 97.0745C178.783 97.2985 178.746 97.5029 178.684 97.7191C178.843 97.6802 178.843 97.6802 179.005 97.6406C179.711 97.4842 180.428 97.3908 181.143 97.2877C181.301 97.2648 181.458 97.242 181.616 97.2191C181.945 97.1714 182.274 97.1241 182.604 97.0768C183.022 97.0167 183.441 96.9555 183.859 96.894C184.184 96.8464 184.509 96.7996 184.835 96.7531C184.989 96.7309 185.143 96.7084 185.297 96.6856C187.685 96.3327 187.685 96.3327 188.399 96.6527C188.919 97.1728 189.04 97.5299 189.065 98.2541C188.901 98.9976 188.288 99.6043 187.807 100.174C187.691 100.314 187.574 100.454 187.458 100.594C187.401 100.663 187.344 100.731 187.285 100.802C187.052 101.085 186.826 101.373 186.6 101.662C186.233 102.134 185.859 102.6 185.481 103.063C185.102 103.528 184.726 103.996 184.356 104.469C183.936 105.007 183.507 105.538 183.075 106.066C182.748 106.468 182.425 106.873 182.106 107.282C181.686 107.82 181.257 108.35 180.825 108.879C180.498 109.281 180.175 109.686 179.856 110.094C179.436 110.632 179.007 111.163 178.575 111.691C178.248 112.093 177.925 112.498 177.606 112.907C177.186 113.445 176.757 113.975 176.325 114.504C175.998 114.906 175.675 115.311 175.356 115.719C174.936 116.257 174.507 116.788 174.075 117.316C173.748 117.718 173.425 118.123 173.106 118.532C172.68 119.078 172.246 119.617 171.807 120.153C171.518 120.507 171.235 120.865 170.956 121.227C170.615 121.646 170.357 121.962 169.794 122.035C169.344 122.054 169.018 122.039 168.606 121.848C168.252 121.512 168.02 121.229 167.951 120.736C167.951 120.607 167.953 120.477 167.957 120.347C167.958 120.272 167.959 120.196 167.961 120.119C167.996 118.797 168.127 117.477 168.24 116.16C168.274 115.756 168.308 115.352 168.341 114.948C168.398 114.272 168.455 113.596 168.512 112.919C168.579 112.138 168.644 111.357 168.71 110.575C168.779 109.74 168.849 108.905 168.92 108.07C168.94 107.83 168.96 107.59 168.98 107.35C169.011 106.974 169.043 106.598 169.075 106.223C169.087 106.085 169.099 105.947 169.11 105.809C169.126 105.621 169.142 105.433 169.158 105.245C169.167 105.14 169.176 105.035 169.185 104.926C169.21 104.702 169.247 104.498 169.309 104.282C169.201 104.31 169.092 104.339 168.98 104.368C168.598 104.464 168.214 104.53 167.824 104.585C167.72 104.6 167.72 104.6 167.614 104.616C167.387 104.648 167.16 104.681 166.933 104.713C166.773 104.736 166.613 104.759 166.453 104.782C166.119 104.829 165.785 104.877 165.451 104.924C165.026 104.984 164.601 105.045 164.176 105.107C163.846 105.154 163.516 105.201 163.186 105.248C163.03 105.27 162.873 105.292 162.717 105.315C160.304 105.666 160.304 105.666 159.594 105.348C159.074 104.828 158.954 104.471 158.929 103.747C159.093 103.003 159.705 102.396 160.186 101.826C160.303 101.687 160.419 101.547 160.536 101.407C160.621 101.304 160.621 101.304 160.709 101.199C160.942 100.916 161.168 100.628 161.393 100.338C161.761 99.8667 162.134 99.4009 162.512 98.9378C162.892 98.4726 163.268 98.0049 163.637 97.5316C164.058 96.9934 164.487 96.4631 164.918 95.9342C165.246 95.5324 165.569 95.1275 165.887 94.7191C166.308 94.1809 166.737 93.6506 167.168 93.1217C167.496 92.7199 167.819 92.315 168.137 91.9066C168.558 91.3684 168.987 90.8381 169.418 90.3092C169.746 89.9074 170.069 89.5025 170.387 89.0941C170.808 88.5559 171.237 88.0256 171.668 87.4967C171.996 87.0949 172.319 86.69 172.637 86.2816C173.058 85.7434 173.487 85.2131 173.918 84.6842C174.246 84.2824 174.569 83.8775 174.887 83.4691C175.314 82.9231 175.748 82.3839 176.187 81.8478C176.476 81.4938 176.759 81.1359 177.038 80.7738C177.629 80.0471 178.129 79.8751 179.059 80.0003Z" fill="#404655"/>
                    <rect x="152" y="157" width="44" height="18" rx="9" fill="#E1E3E8"/>
                    <rect x="123" y="187" width="102" height="12" rx="6" fill="#E1E3E8"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14863" x="104.75" y="58" width="138.5" height="163.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2.5"/>
                    <feGaussianBlur stdDeviation="0.625"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14863"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14863" result="shape"/>
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
                    <rect x="94.5128" y="58.5128" width="158.974" height="158.974" rx="79.4872" stroke="#C3C8D2" stroke-width="1.02564"/>
                    <path d="M173.557 113.91C178.803 113.91 183.057 109.532 183.057 104.13V93.3262H164.057V104.13C164.057 109.532 168.31 113.91 173.557 113.91Z" fill="#404655" stroke="#404655" stroke-width="3.24786" stroke-linejoin="round"/>
                    <path d="M164.054 106.786V98.8691H157.721C157.721 104.147 160.887 106.786 164.054 106.786ZM183.054 106.786V98.8691H189.387C189.387 104.147 186.221 106.786 183.054 106.786Z" stroke="#404655" stroke-width="3.24786" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M173.557 115.494V118.661" stroke="#404655" stroke-width="3.24786" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M166.432 123.41L169.353 118.66H177.549L180.682 123.41H166.432Z" fill="#404655" stroke="#404655" stroke-width="3.24786" stroke-linejoin="round"/>
                    <g filter="url(#filter0_d_16980_14870)">
                    <rect x="153" y="146.486" width="42" height="18" rx="9" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14870)">
                    <rect x="132" y="174.742" width="84" height="12" rx="6" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14870" x="151.974" y="146.486" width="44.0513" height="21.0769" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2.05128"/>
                    <feGaussianBlur stdDeviation="0.51282"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14870"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14870" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14870" x="130.974" y="174.742" width="86.0513" height="15.0769" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2.05128"/>
                    <feGaussianBlur stdDeviation="0.51282"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14870"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14870" result="shape"/>
                    </filter>
                    </defs>
                </svg>`,
    },
];