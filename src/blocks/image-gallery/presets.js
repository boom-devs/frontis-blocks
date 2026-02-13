import { __ } from '@wordpress/i18n';

let defaultImageUrl = '';
if (typeof FrontisBlocksData !== 'undefined') {
    defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/preset-bg.jpg';
}

/**
* Preset Styles Data Object
*/
export const presetStyles = {
    "preset-1": {
        deviceType: "Desktop",
        GalleryType: "grid",
        GalleryItems: [
            {
                id: "image-1",
                title: "Image 1",
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-2",
                title: "Image 2",
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-3",
                title: "Image 3",
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
        ],
        GalleryPresetStyle: "preset-1",
        GalleryItemHeight: {
            Desktop: 300,
            Tablet: 300,
            Mobile: 250
        },
        ImageOverlayStyle: "none",
        lightboxIconSwitcher: true,
        lightboxIcon: "plus",
        lightboxIconSize: {
            Desktop: 24,
            Tablet: 24,
            Mobile: 24
        },
        lightboxColor: "#000",
        lightboxHoverColor: "#000",
        lightboxBGColor: "#fff",
        lightboxBorder: "none",
        lightboxBorderColor: "#000",
        lightboxDesktopPadding: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        },
        lightboxDesktopBorderWidth: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
        },
        lightboxDesktopBorderRadiusWidth: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
        },
        GalleryColumnNumber: {
            Desktop: 3,
            Tablet: 2,
            Mobile: 1
        },
        GalleryImageGap: {
            Desktop: 30,
            Tablet: 15,
            Mobile: 10
        },
        imageDesktopBorderRadiusWidth: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        }
    },
    "preset-2": {
        deviceType: "Desktop",
        GalleryType: "grid",
        GalleryItems: [
            {
                id: "image-1",
                title: "Image 1",
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-2",
                title: "Image 2",
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-3",
                title: "Image 3",
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-4",
                title: "Image 4",
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-5",
                title: "Image 5",
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-6",
                title: "Image 6",
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            }
        ],
        GalleryPresetStyle: "preset-2",
        GalleryItemHeight: {
            Desktop: 410,
            Tablet: 300,
            Mobile: 200
        },
        ImageOverlayStyle: "none",
        lightboxIconSwitcher: true,
        lightboxIcon: "plus",
        lightboxIconSize: {
            Desktop: 24,
            Tablet: 24,
            Mobile: 24
        },
        lightboxColor: "#000",
        lightboxHoverColor: "#000",
        lightboxBGColor: "#fff",
        lightboxBorder: "solid",
        lightboxBorderColor: "#399cff",
        lightboxDesktopPadding: {
            top: 16,
            right: 16,
            bottom: 16,
            left: 16
        },
        lightboxDesktopBorderWidth: {
            top: 3,
            right: 3,
            bottom: 3,
            left: 3
        },
        lightboxDesktopBorderRadiusWidth: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        },
        GalleryColumnNumber: {
            Desktop: 3,
            Tablet: 2,
            Mobile: 1
        },
        GalleryImageGap: {
            Desktop: 30,
            Tablet: 15,
            Mobile: 10
        },
        imageDesktopBorderRadiusWidth: {
            top: 32,
            bottom: 32,
            left: 32,
            right: 32,
        }
    },
    "preset-3": {
        deviceType: "Desktop",
        GalleryType: "grid",
        GalleryItems: [
            {
                id: "image-1",
                title: "Image 1",
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-2",
                title: "Image 2",
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-3",
                title: "Image 3",
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-4",
                title: "Image 4",
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-5",
                title: "Image 5",
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-6",
                title: "Image 6",
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            }
        ],
        GalleryPresetStyle: "preset-3",
        GalleryItemHeight: {
            Desktop: 411,
            Tablet: 300,
            Mobile: 200
        },
        ImageOverlayStyle: "black_white",
        lightboxIconSwitcher: true,
        lightboxIcon: "plus",
        lightboxIconSize: {
            Desktop: 24,
            Tablet: 24,
            Mobile: 24
        },
        lightboxColorSwitcher: "normal",
        lightboxColor: "#000",
        lightboxHoverColor: "#000",
        lightboxBGColorSwitcher: "normal",
        lightboxBGColor: "#fff",
        lightboxBGHoverColor: "#fff",
        lightboxBorder: "solid",
        lightboxBorderColor: "#f89b2e",
        lightboxDesktopPadding: {
            top: 16,
            right: 16,
            bottom: 16,
            left: 16
        },
        lightboxDesktopBorderWidth: {
            top: 2,
            right: 2,
            bottom: 2,
            left: 2
        },
        lightboxBorderRadiusUnits: {
            Desktop: "px",
            Tablet: "px",
            Mobile: "px"
        },
        lightboxDesktopBorderRadiusWidth: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        },
        GalleryColumnNumber: {
            Desktop: 3,
            Tablet: 2,
            Mobile: 1
        },
        GalleryImageGap: {
            Desktop: 6,
            Tablet: 15,
            Mobile: 10
        },
        ImageFitCover: true,
        imageBorder: "none",
        imageDesktopBorderRadiusWidth: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }
    },
    "preset-4": {
        deviceType: "Desktop",
        GalleryType: "mesonry",
        GalleryItems: [
            {
                id: "image-1",
                title: "Image 1",
                column: {
                    desktop: 2,
                    tablet: 0,
                    mobile: 0
                },
                row: {
                    desktop: 2,
                    tablet: 0,
                    mobile: 0
                },
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-2",
                title: "Image 2",
                column: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                },
                row: {
                    desktop: 2,
                    tablet: 0,
                    mobile: 0
                },
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-3",
                title: "Image 3",
                column: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                },
                row: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                },
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-4",
                title: "Image 4",
                column: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                },
                row: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                },
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            }
        ],
        GalleryPresetStyle: "preset-4",
        ImageOverlayStyle: "overlay",
        ImageOverlayStyleType: "bottom",
        lightboxIconSwitcher: false,
        GalleryItemHeight: {
            Desktop: 410,
            Tablet: 410,
            Mobile: 410
        },
        GalleryColumnNumber: {
            Desktop: 4,
        },
        GalleryImageGap: {
            Desktop: 30,
            Tablet: 30,
            Mobile: 30
        },
        GalleryImageGapUnits: {
            Desktop: "px",
            Tablet: "px",
            Mobile: "px"
        },
        imageDesktopBorderRadiusWidth: {
            top: 24,
            bottom: 24,
            left: 24,
            right: 24,
        },
    },
    "preset-5": {
        deviceType: "Desktop",
        GalleryType: "mesonry",
        GalleryItems: [
            {
                id: "image-1",
                title: "Image 1",
                column: {
                    desktop: 2,
                    tablet: 0,
                    mobile: 0
                },
                row: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                },
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-2",
                title: "Image 2",
                column: {
                    desktop: 1,
                    tablet: 0,
                    mobile: 0
                },
                row: {
                    desktop: 2,
                    tablet: 0,
                    mobile: 0
                },
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-3",
                title: "Image 3",
                desc: "",
                column: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                },
                row: {
                    desktop: 1,
                    tablet: 0,
                    mobile: 0
                },
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-4",
                title: "Image 4",
                desc: "",
                column: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                },
                row: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                },
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-5",
                title: "Image 5",
                column: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                },
                row: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                },
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-6",
                title: "Image 6",
                column: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                },
                row: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                },
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            }
        ],
        GalleryPresetStyle: "preset-5",
        lightboxIconSwitcher: false,
        GalleryItemHeight: {
            Desktop: 410,
            Tablet: 410,
            Mobile: 410
        },
        ImageOverlayStyle: "overlay",
        ImageOverlayStyleType: "top",
        ImageOverlayColor: "rgba(0 0 0 / 0.7)",
        GalleryColumnNumber: {
            Desktop: 4,
        },
        GalleryImageGap: {
            Desktop: 30,
            Tablet: 30,
            Mobile: 30
        },
        GalleryImageGapUnits: {
            Desktop: "px",
            Tablet: "px",
            Mobile: "px"
        },
        imageDesktopBorderRadiusWidth: {
            top: 24,
            bottom: 24,
            left: 24,
            right: 24,
        },
    },
    "preset-6": {
        deviceType: "Desktop",
        GalleryType: "mesonry",
        GalleryItems: [
            {
                id: "image-1",
                title: "Image 1",
                column: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                },
                row: {
                    desktop: 2,
                    tablet: 0,
                    mobile: 0
                },
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-2",
                title: "Image 2",
                column: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                },
                row: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                },
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-3",
                title: "Image 3",
                column: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                },
                row: {
                    desktop: 2,
                    tablet: 0,
                    mobile: 0
                },
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
            {
                id: "image-4",
                title: "Image 4",
                column: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                },
                row: {
                    desktop: 0,
                    tablet: 0,
                    mobile: 0
                },
                image: {
                    id: 0,
                    url: defaultImageUrl,
                    width: 0,
                    height: 0
                }
            },
        ],
        GalleryPresetStyle: "preset-6",
        lightboxIconSwitcher: false,
        GalleryItemHeight: {
            Desktop: 410,
            Tablet: 410,
            Mobile: 410
        },
        GalleryItemHeightUnits: {
            Desktop: "px",
            Tablet: "px",
            Mobile: "px"
        },
        ImageOverlayStyle: "overlay",
        ImageOverlayStyleType: "bottom",
        ImageOverlayColor: "rgba(0 0 0 / 0.7)",
        GalleryColumnNumber: {
            Desktop: 3,
            Tablet: 2,
            Mobile: 1
        },
        GalleryImageGap: {
            Desktop: 30,
            Tablet: 30,
            Mobile: 30
        },
        GalleryImageGapUnits: {
            Desktop: "px",
            Tablet: "px",
            Mobile: "px"
        },
        imageDesktopBorderRadiusWidth: {
            top: 24,
            bottom: 24,
            left: 24,
            right: 24,
        },
    },
};

export const imageGalleryPresets = [
    {
        value: 'preset-1',
        label: __('Preset 1', 'frontis-blocks'),
        attributes: Object.entries(presetStyles['preset-1']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                    <g filter="url(#filter0_d_16980_14429)">
                    <rect x="69" y="94" width="66" height="88" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14429)">
                    <rect x="141" y="94" width="66" height="88" fill="white"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14429)">
                    <rect x="213" y="94" width="66" height="88" fill="white"/>
                    </g>
                    <g filter="url(#filter3_i_16980_14429)">
                    <path d="M171.393 199.01C171.304 198.626 171.325 198.224 171.452 197.85C171.58 197.477 171.809 197.146 172.113 196.895C172.418 196.645 172.786 196.483 173.177 196.43C173.568 196.377 173.967 196.434 174.327 196.594L193.742 205.232C195.606 206.06 195.341 208.789 193.353 209.245L185.177 211.117C184.86 211.19 184.563 211.334 184.31 211.54C184.058 211.745 183.856 212.006 183.72 212.302L180.137 220.131C179.293 221.977 176.588 221.7 176.134 219.72L171.393 199.01Z" fill="#404655"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14429" x="68" y="94" width="68" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14429"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14429" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14429" x="140" y="94" width="68" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14429"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14429" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14429" x="212" y="94" width="68" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14429"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14429" result="shape"/>
                    </filter>
                    <filter id="filter3_i_16980_14429" x="171.339" y="196.41" width="23.6631" height="25.2443" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="0.283333"/>
                    <feGaussianBlur stdDeviation="0.708333"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_16980_14429"/>
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
                    <g filter="url(#filter0_d_16980_14752)">
                    <rect x="93" y="57" width="50" height="78" rx="8" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14752)">
                    <rect x="93" y="141" width="50" height="78" rx="8" fill="white"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14752)">
                    <rect x="149" y="57" width="50" height="78" rx="8" fill="white"/>
                    </g>
                    <g filter="url(#filter3_d_16980_14752)">
                    <rect x="149" y="141" width="50" height="78" rx="8" fill="white"/>
                    </g>
                    <g filter="url(#filter4_d_16980_14752)">
                    <rect x="205" y="57" width="50" height="78" rx="8" fill="white"/>
                    </g>
                    <g filter="url(#filter5_d_16980_14752)">
                    <rect x="205" y="141" width="50" height="78" rx="8" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14752" x="92" y="57" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14752"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14752" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14752" x="92" y="141" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14752"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14752" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14752" x="148" y="57" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14752"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14752" result="shape"/>
                    </filter>
                    <filter id="filter3_d_16980_14752" x="148" y="141" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14752"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14752" result="shape"/>
                    </filter>
                    <filter id="filter4_d_16980_14752" x="204" y="57" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14752"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14752" result="shape"/>
                    </filter>
                    <filter id="filter5_d_16980_14752" x="204" y="141" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14752"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14752" result="shape"/>
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
                    <g filter="url(#filter0_d_16980_14763)">
                    <rect x="96" y="59" width="50" height="78" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14763)">
                    <rect x="149" y="59" width="50" height="78" fill="white"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14763)">
                    <rect x="202" y="59" width="50" height="78" fill="white"/>
                    </g>
                    <g filter="url(#filter3_d_16980_14763)">
                    <rect x="96" y="140" width="50" height="78" fill="white"/>
                    </g>
                    <g filter="url(#filter4_d_16980_14763)">
                    <rect x="149" y="140" width="50" height="78" fill="white"/>
                    </g>
                    <g filter="url(#filter5_d_16980_14763)">
                    <rect x="202" y="140" width="50" height="78" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14763" x="95" y="59" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14763"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14763" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14763" x="148" y="59" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14763"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14763" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14763" x="201" y="59" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14763"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14763" result="shape"/>
                    </filter>
                    <filter id="filter3_d_16980_14763" x="95" y="140" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14763"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14763" result="shape"/>
                    </filter>
                    <filter id="filter4_d_16980_14763" x="148" y="140" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14763"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14763" result="shape"/>
                    </filter>
                    <filter id="filter5_d_16980_14763" x="201" y="140" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14763"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14763" result="shape"/>
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
                    <g filter="url(#filter0_d_16980_14771)">
                    <rect x="96" y="59" width="80" height="159" rx="6" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14771)">
                    <rect x="182" y="59" width="32" height="159" rx="6" fill="white"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14771)">
                    <rect x="220" y="59" width="32" height="76.5" rx="6" fill="white"/>
                    </g>
                    <g filter="url(#filter3_d_16980_14771)">
                    <rect x="220" y="141.5" width="32" height="76.5" rx="6" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14771" x="95" y="59" width="82" height="162" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14771"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14771" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14771" x="181" y="59" width="34" height="162" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14771"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14771" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14771" x="219" y="59" width="34" height="79.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14771"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14771" result="shape"/>
                    </filter>
                    <filter id="filter3_d_16980_14771" x="219" y="141.5" width="34" height="79.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14771"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14771" result="shape"/>
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
                    <g filter="url(#filter0_d_16980_14778)">
                    <rect x="96" y="57" width="80" height="78" rx="6" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14778)">
                    <rect x="96" y="142" width="37" height="76" rx="6" fill="white"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14778)">
                    <rect x="139" y="142" width="37" height="76" rx="6" fill="white"/>
                    </g>
                    <g filter="url(#filter3_d_16980_14778)">
                    <rect x="182" y="57" width="32" height="162" rx="6" fill="white"/>
                    </g>
                    <g filter="url(#filter4_d_16980_14778)">
                    <rect x="220" y="57" width="32" height="78" rx="6" fill="white"/>
                    </g>
                    <g filter="url(#filter5_d_16980_14778)">
                    <rect x="220" y="141" width="32" height="78" rx="6" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14778" x="95" y="57" width="82" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14778"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14778" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14778" x="95" y="142" width="39" height="79" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14778"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14778" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14778" x="138" y="142" width="39" height="79" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14778"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14778" result="shape"/>
                    </filter>
                    <filter id="filter3_d_16980_14778" x="181" y="57" width="34" height="165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14778"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14778" result="shape"/>
                    </filter>
                    <filter id="filter4_d_16980_14778" x="219" y="57" width="34" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14778"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14778" result="shape"/>
                    </filter>
                    <filter id="filter5_d_16980_14778" x="219" y="141" width="34" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14778"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14778" result="shape"/>
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
                    <g filter="url(#filter0_d_16980_14789)">
                    <rect x="96" y="57" width="48" height="162" rx="6" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14789)">
                    <rect x="150" y="57" width="48" height="78" rx="6" fill="white"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14789)">
                    <rect x="150" y="141" width="48" height="78" rx="6" fill="white"/>
                    </g>
                    <g filter="url(#filter3_d_16980_14789)">
                    <rect x="204" y="57" width="48" height="162" rx="6" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14789" x="95" y="57" width="50" height="165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14789"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14789" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14789" x="149" y="57" width="50" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14789"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14789" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14789" x="149" y="141" width="50" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14789"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14789" result="shape"/>
                    </filter>
                    <filter id="filter3_d_16980_14789" x="203" y="57" width="50" height="165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14789"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14789" result="shape"/>
                    </filter>
                    </defs>
                </svg>`,
    },
];