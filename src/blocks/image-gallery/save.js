import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import './style.scss'; // Ensure you have styles for the front end if needed

export default function Save({ attributes }) {

    const { 
        blockID,
        DeviceType,

        GalleryType,
        GalleryItems,
        // GalleryTag,
        // GalleryAlignment,
        // GalleryIconAlignment,

        GalleryItemHeightDesktop,
        GalleryItemHeightTablet,
        GalleryItemHeightMobile,
        GalleryItemHeightUnits,

        ImageOverlayStyle,
        ImageOverlayStyleType,
        ImageOverlayColor,

        GalleryColumnNumberDesktop,
        GalleryColumnNumberTablet,
        GalleryColumnNumberMobile,

        GalleryImageGapDesktop,
        GalleryImageGapTablet,
        GalleryImageGapMobile,
        GalleryImageGapUnits,

        GalleryButtonSwitcher,
        GalleryButtonText,
        GalleryButtonLink,

        ImageAlignment,
        ImageFitCover,

        ImageWidthDesktop,
        ImageWidthTab,
        ImageWidthMobile,
        ImageWidthUnits,

        ImageHeightDesktop,
        ImageHeightTab,
        ImageHeightMobile,
        ImageHeightUnits,

        GalleryButtonAlignment,
        GalleryButtonFontFamily,
        GalleryButtonFontSizeDesktop,
        GalleryButtonFontSizeTablet,
        GalleryButtonFontSizeMobile,
        GalleryButtonFontSizeUnits,
        GalleryButtonFontWeight,
        GalleryButtonFontStyle,
        GalleryButtonTextTransform,
        GalleryButtonTextDecoration,
        GalleryButtonLetterSpacingDesktop,
        GalleryButtonLetterSpacingTablet,
        GalleryButtonLetterSpacingMobile,
        GalleryButtonLetterSpacingUnits,
        GalleryButtonLineHeightDesktop,
        GalleryButtonLineHeightTablet,
        GalleryButtonLineHeightMobile,
        GalleryButtonLineHeightUnits,
        GalleryButtonColorSwitcher,
        GalleryButtonColor,
        GalleryButtonHoverColor,
        GalleryButtonBGColorSwitcher,
        GalleryButtonBGColor,
        GalleryButtonBGHoverColor,

        ButtonBorder,
        ButtonBorderColor,
        ButtonBorderHoverColor,
        ButtonBorderColorSwitcher,

        ButtonPaddingUnits,
        ButtonDesktopPadding,
        ButtonTabPadding,
        ButtonMobilePadding,
        ButtonPaddingLink,
        ButtonMarginUnits,
        ButtonDesktopMargin,
        ButtonTabMargin,
        ButtonMobileMargin,
        ButtonMarginLink,
        ButtonBorderUnits,
        ButtonDesktopBorderWidth,
        ButtonTabBorderWidth,
        ButtonMobileBorderWidth,
        ButtonBorderLink,
        ButtonBorderRadiusUnits,
        ButtonDesktopBorderRadiusWidth,
        ButtonTabBorderRadiusWidth,
        ButtonMobileBorderRadiusWidth,
        ButtonBorderRadiusLink,
        
        GalleryZIndex,
        GalleryPaddingUnits,
        GalleryDesktopPadding,
        GalleryTabPadding,
        GalleryMobilePadding,
        GalleryPaddingLink,
        GalleryMarginUnits,
        GalleryDesktopMargin,
        GalleryTabMargin,
        GalleryMobileMargin,
        GalleryMarginLink,

        GalleryBgColorSwitcher,
        GalleryBgColor,
        GalleryBgHoverColor,

        GalleryBorder,
        GalleryBorderColor,
        GalleryBorderHoverColor,
        GalleryBorderColorSwitcher,
        GalleryBorderUnits,
        GalleryDesktopBorderWidth,
        GalleryTabBorderWidth,
        GalleryMobileBorderWidth,
        GalleryBorderLink,
        GalleryBorderRadiusUnits,
        GalleryDesktopBorderRadiusWidth,
        GalleryTabBorderRadiusWidth,
        GalleryMobileBorderRadiusWidth,
        GalleryBorderRadiusLink,

        GalleryDesktopSwitcher,
        GalleryTabletSwitcher,
        GalleryMobileSwitcher,

    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-gallery-main-wrapper ${blockID}`,
    });

    const ButtonMarginDesktopWidth = `${ButtonDesktopMargin.top}${ButtonMarginUnits[DeviceType]} ${ButtonDesktopMargin.right}${ButtonMarginUnits[DeviceType]} ${ButtonDesktopMargin.bottom}${ButtonMarginUnits[DeviceType]} ${ButtonDesktopMargin.left}${ButtonMarginUnits[DeviceType]}`;
    const ButtonMarginTabletWidth = `${ButtonTabMargin.top}${ButtonMarginUnits[DeviceType]} ${ButtonTabMargin.right}${ButtonMarginUnits[DeviceType]} ${ButtonTabMargin.bottom}${ButtonMarginUnits[DeviceType]} ${ButtonTabMargin.left}${ButtonMarginUnits[DeviceType]}`;
    const ButtonMarginMobileWidth = `${ButtonMobileMargin.top}${ButtonMarginUnits[DeviceType]} ${ButtonMobileMargin.right}${ButtonMarginUnits[DeviceType]} ${ButtonMobileMargin.bottom}${ButtonMarginUnits[DeviceType]} ${ButtonMobileMargin.left}${ButtonMarginUnits[DeviceType]}`;

    const ButtonPaddingDesktopWidth = `${ButtonDesktopPadding.top}${ButtonPaddingUnits[DeviceType]} ${ButtonDesktopPadding.right}${ButtonPaddingUnits[DeviceType]} ${ButtonDesktopPadding.bottom}${ButtonPaddingUnits[DeviceType]} ${ButtonDesktopPadding.left}${ButtonPaddingUnits[DeviceType]}`;
    const ButtonPaddingTabletWidth = `${ButtonTabPadding.top}${ButtonPaddingUnits[DeviceType]} ${ButtonTabPadding.right}${ButtonPaddingUnits[DeviceType]} ${ButtonTabPadding.bottom}${ButtonPaddingUnits[DeviceType]} ${ButtonTabPadding.left}${ButtonPaddingUnits[DeviceType]}`;
    const ButtonPaddingMobileWidth = `${ButtonMobilePadding.top}${ButtonPaddingUnits[DeviceType]} ${ButtonMobilePadding.right}${ButtonPaddingUnits[DeviceType]} ${ButtonMobilePadding.bottom}${ButtonPaddingUnits[DeviceType]} ${ButtonMobilePadding.left}${ButtonPaddingUnits[DeviceType]}`;
    
    const ButtonBorderDesktopWidth = `${ButtonDesktopBorderWidth.top}${ButtonBorderUnits[DeviceType]} ${ButtonDesktopBorderWidth.right}${ButtonBorderUnits[DeviceType]} ${ButtonDesktopBorderWidth.bottom}${ButtonBorderUnits[DeviceType]} ${ButtonDesktopBorderWidth.left}${ButtonBorderUnits[DeviceType]}`;
    const ButtonBorderTabletWidth = `${ButtonTabBorderWidth.top}${ButtonBorderUnits[DeviceType]} ${ButtonTabBorderWidth.right}${ButtonBorderUnits[DeviceType]} ${ButtonTabBorderWidth.bottom}${ButtonBorderUnits[DeviceType]} ${ButtonTabBorderWidth.left}${ButtonBorderUnits[DeviceType]}`;
    const ButtonBorderMobileWidth = `${ButtonMobileBorderWidth.top}${ButtonBorderUnits[DeviceType]} ${ButtonMobileBorderWidth.right}${ButtonBorderUnits[DeviceType]} ${ButtonMobileBorderWidth.bottom}${ButtonBorderUnits[DeviceType]} ${ButtonMobileBorderWidth.left}${ButtonBorderUnits[DeviceType]}`;

    const ButtonBorderRadiusDesktopWidth = `${ButtonDesktopBorderRadiusWidth.top}${ButtonBorderRadiusUnits[DeviceType]} ${ButtonDesktopBorderRadiusWidth.right}${ButtonBorderRadiusUnits[DeviceType]} ${ButtonDesktopBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits[DeviceType]} ${ButtonDesktopBorderRadiusWidth.left}${ButtonBorderRadiusUnits[DeviceType]}`;
    const ButtonBorderRadiusTabletWidth = `${ButtonTabBorderRadiusWidth.top}${ButtonBorderRadiusUnits[DeviceType]} ${ButtonTabBorderRadiusWidth.right}${ButtonBorderRadiusUnits[DeviceType]} ${ButtonTabBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits[DeviceType]} ${ButtonTabBorderRadiusWidth.left}${ButtonBorderRadiusUnits[DeviceType]}`;
    const ButtonBorderRadiusMobileWidth = `${ButtonMobileBorderRadiusWidth.top}${ButtonBorderRadiusUnits[DeviceType]} ${ButtonMobileBorderRadiusWidth.right}${ButtonBorderRadiusUnits[DeviceType]} ${ButtonMobileBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits[DeviceType]} ${ButtonMobileBorderRadiusWidth.left}${ButtonBorderRadiusUnits[DeviceType]}`;

    const GalleryMarginDesktopWidth = `${GalleryDesktopMargin.top}${GalleryMarginUnits[DeviceType]} ${GalleryDesktopMargin.right}${GalleryMarginUnits[DeviceType]} ${GalleryDesktopMargin.bottom}${GalleryMarginUnits[DeviceType]} ${GalleryDesktopMargin.left}${GalleryMarginUnits[DeviceType]}`;
    const GalleryMarginTabletWidth = `${GalleryTabMargin.top}${GalleryMarginUnits[DeviceType]} ${GalleryTabMargin.right}${GalleryMarginUnits[DeviceType]} ${GalleryTabMargin.bottom}${GalleryMarginUnits[DeviceType]} ${GalleryTabMargin.left}${GalleryMarginUnits[DeviceType]}`;
    const GalleryMarginMobileWidth = `${GalleryMobileMargin.top}${GalleryMarginUnits[DeviceType]} ${GalleryMobileMargin.right}${GalleryMarginUnits[DeviceType]} ${GalleryMobileMargin.bottom}${GalleryMarginUnits[DeviceType]} ${GalleryMobileMargin.left}${GalleryMarginUnits[DeviceType]}`;

    const GalleryPaddingDesktopWidth = `${GalleryDesktopPadding.top}${GalleryPaddingUnits[DeviceType]} ${GalleryDesktopPadding.right}${GalleryPaddingUnits[DeviceType]} ${GalleryDesktopPadding.bottom}${GalleryPaddingUnits[DeviceType]} ${GalleryDesktopPadding.left}${GalleryPaddingUnits[DeviceType]}`;
    const GalleryPaddingTabletWidth = `${GalleryTabPadding.top}${GalleryPaddingUnits[DeviceType]} ${GalleryTabPadding.right}${GalleryPaddingUnits[DeviceType]} ${GalleryTabPadding.bottom}${GalleryPaddingUnits[DeviceType]} ${GalleryTabPadding.left}${GalleryPaddingUnits[DeviceType]}`;
    const GalleryPaddingMobileWidth = `${GalleryMobilePadding.top}${GalleryPaddingUnits[DeviceType]} ${GalleryMobilePadding.right}${GalleryPaddingUnits[DeviceType]} ${GalleryMobilePadding.bottom}${GalleryPaddingUnits[DeviceType]} ${GalleryMobilePadding.left}${GalleryPaddingUnits[DeviceType]}`;

    const GalleryBorderDesktopWidth = `${GalleryDesktopBorderWidth.top}${GalleryBorderUnits[DeviceType]} ${GalleryDesktopBorderWidth.right}${GalleryBorderUnits[DeviceType]} ${GalleryDesktopBorderWidth.bottom}${GalleryBorderUnits[DeviceType]} ${GalleryDesktopBorderWidth.left}${GalleryBorderUnits[DeviceType]}`;
    const GalleryBorderTabletWidth = `${GalleryTabBorderWidth.top}${GalleryBorderUnits[DeviceType]} ${GalleryTabBorderWidth.right}${GalleryBorderUnits[DeviceType]} ${GalleryTabBorderWidth.bottom}${GalleryBorderUnits[DeviceType]} ${GalleryTabBorderWidth.left}${GalleryBorderUnits[DeviceType]}`;
    const GalleryBorderMobileWidth = `${GalleryMobileBorderWidth.top}${GalleryBorderUnits[DeviceType]} ${GalleryMobileBorderWidth.right}${GalleryBorderUnits[DeviceType]} ${GalleryMobileBorderWidth.bottom}${GalleryBorderUnits[DeviceType]} ${GalleryMobileBorderWidth.left}${GalleryBorderUnits[DeviceType]}`;

    const GalleryBorderRadiusDesktopWidth = `${GalleryDesktopBorderRadiusWidth.top}${GalleryBorderRadiusUnits[DeviceType]} ${GalleryDesktopBorderRadiusWidth.right}${GalleryBorderRadiusUnits[DeviceType]} ${GalleryDesktopBorderRadiusWidth.bottom}${GalleryBorderRadiusUnits[DeviceType]} ${GalleryDesktopBorderRadiusWidth.left}${GalleryBorderRadiusUnits[DeviceType]}`;
    const GalleryBorderRadiusTabletWidth = `${GalleryTabBorderRadiusWidth.top}${GalleryBorderRadiusUnits[DeviceType]} ${GalleryTabBorderRadiusWidth.right}${GalleryBorderRadiusUnits[DeviceType]} ${GalleryTabBorderRadiusWidth.bottom}${GalleryBorderRadiusUnits[DeviceType]} ${GalleryTabBorderRadiusWidth.left}${GalleryBorderRadiusUnits[DeviceType]}`;
    const GalleryBorderRadiusMobileWidth = `${GalleryMobileBorderRadiusWidth.top}${GalleryBorderRadiusUnits[DeviceType]} ${GalleryMobileBorderRadiusWidth.right}${GalleryBorderRadiusUnits[DeviceType]} ${GalleryMobileBorderRadiusWidth.bottom}${GalleryBorderRadiusUnits[DeviceType]} ${GalleryMobileBorderRadiusWidth.left}${GalleryBorderRadiusUnits[DeviceType]}`;


    return (
        <>
            <style>
            {`
                .fb-gallery-main-wrapper.${blockID} {
                    position: relative;
                    ${GalleryBgColor !== undefined ? `background-color: ${GalleryBgColor};` : ''};
                    padding: ${GalleryPaddingDesktopWidth};
                    margin: ${GalleryMarginDesktopWidth};
                    border-style: ${GalleryBorder};
                    border-width: ${GalleryBorderDesktopWidth};
                    ${GalleryBorderColor !== undefined ? `border-color: ${GalleryBorderColor};` : ''};
                    border-radius: ${GalleryBorderRadiusDesktopWidth};
                    transition: all .3s ease-in-out;
                    ${GalleryZIndex !== undefined ? `z-index: ${GalleryZIndex}` : ''};
                }
                .fb-gallery-main-wrapper.${blockID}:hover {
                    ${GalleryBgHoverColor !== undefined ? `background-color: ${GalleryBgHoverColor};` : ''};
                    ${GalleryBorderHoverColor !== undefined ? `border-color: ${GalleryBorderHoverColor};` : ''};
                }

                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items {
                    grid-template-columns: repeat(${DeviceType == 'Desktop' ? GalleryColumnNumberDesktop : DeviceType == 'Tablet' ? GalleryColumnNumberTablet : GalleryColumnNumberMobile}, 1fr);
                    grid-gap: ${DeviceType == 'Desktop' ? GalleryImageGapDesktop : DeviceType == 'Tablet' ? GalleryImageGapTablet : GalleryImageGapMobile}${GalleryImageGapUnits};
                    grid-auto-rows: ${DeviceType == 'Desktop' ? GalleryItemHeightDesktop : DeviceType == 'Tablet' ? GalleryItemHeightTablet : GalleryItemHeightMobile}${GalleryItemHeightUnits};
                }
                
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {
                    position: absolute;
                    top: 0;
                    ${ImageAlignment === 'left' && 'left: 0'};
                    ${ImageAlignment === 'right' && 'right: 0; left: unset'};
                    ${ImageAlignment === 'center' && 'left: 50%'};
                    ${ImageAlignment === 'center' && 'transform: translateX(-50%);'};
                    width: ${DeviceType == 'Desktop' ? ImageWidthDesktop : DeviceType == 'Tablet' ? ImageWidthTab : ImageWidthMobile}${ImageWidthUnits};
                    height: ${DeviceType == 'Desktop' ? ImageHeightDesktop : DeviceType == 'Tablet' ? ImageHeightTab : ImageHeightMobile}${ImageHeightUnits};
                    ${ImageFitCover === true && 'object-fit: cover'};
                    ${ImageOverlayStyle == 'black_white' && 'filter: grayscale(100%)'};
                    transition: all 0.3s ease-in-out;
                }
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-gallery-image {
                    ${ImageOverlayStyle == 'black_white' && 'filter: grayscale(0)'};
                    transition: all 0.3s ease-in-out;
                }

                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper {
                    ${GalleryButtonSwitcher == true && 'display: flex'};
                    ${GalleryButtonSwitcher == true && `justify-content: ${GalleryButtonAlignment}`};
                }
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {
                    ${GalleryButtonSwitcher == true && `border-style: ${ButtonBorder}`};
                    ${GalleryButtonSwitcher == true && ButtonBorderColorSwitcher !== undefined && `border-color: ${ButtonBorderColor}`};
                    ${GalleryButtonSwitcher == true && `border-width: ${ButtonBorderDesktopWidth}`};
                    ${GalleryButtonSwitcher == true && `border-radius: ${ButtonBorderRadiusDesktopWidth}`};
                    ${GalleryButtonSwitcher == true && `margin: ${ButtonMarginDesktopWidth}`};
                    ${GalleryButtonSwitcher == true && `padding: ${ButtonPaddingDesktopWidth}`};
                    ${GalleryButtonSwitcher == true && `font-family: ${GalleryButtonFontFamily}`};
                    ${GalleryButtonSwitcher == true && `font-size: ${DeviceType == 'Desktop' ? GalleryButtonFontSizeDesktop : DeviceType == 'Tablet' ? GalleryButtonFontSizeTablet : GalleryButtonFontSizeMobile}${GalleryButtonFontSizeUnits}`};
                    ${GalleryButtonSwitcher == true && `font-weight: ${GalleryButtonFontWeight}`};
                    ${GalleryButtonSwitcher == true && `font-style: ${GalleryButtonFontStyle}`};
                    ${GalleryButtonSwitcher == true && `text-transform: ${GalleryButtonTextTransform}`};
                    ${GalleryButtonSwitcher == true && `text-decoration: ${GalleryButtonTextDecoration}`};
                    ${GalleryButtonSwitcher == true && `letter-spacing: ${DeviceType == 'Desktop' ? GalleryButtonLetterSpacingDesktop : DeviceType == 'Tablet' ? GalleryButtonLetterSpacingTablet : GalleryButtonLetterSpacingMobile}${GalleryButtonLetterSpacingUnits}`};
                    ${GalleryButtonSwitcher == true && `line-height: ${DeviceType == 'Desktop' ? GalleryButtonLineHeightDesktop : DeviceType == 'Tablet' ? GalleryButtonLineHeightTablet : GalleryButtonLineHeightMobile}${GalleryButtonLineHeightUnits}`};
                    ${GalleryButtonSwitcher == true && ButtonBorderColorSwitcher == 'normal' && `color: ${GalleryButtonColor}`};
                    ${GalleryButtonSwitcher == true && ButtonBorderColorSwitcher == 'normal' && `background-color: ${GalleryButtonBGColor}`};
                    transition: all 0.3s ease-in-out;
                }
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn:hover {
                    ${GalleryButtonSwitcher == true && ButtonBorderColorSwitcher == 'hover' && `color: ${GalleryButtonHoverColor}`};
                    ${GalleryButtonSwitcher == true && ButtonBorderColorSwitcher == 'hover' && `background-color: ${GalleryButtonBGHoverColor}`};
                    transition: all 0.3s ease-in-out;
                }
                    
                @media only screen and (max-width: 1024px) {
                    .fb-gallery-main-wrapper.${blockID} {
                        padding: ${GalleryPaddingTabletWidth};
                        margin: ${GalleryMarginTabletWidth};
                        border-radius: ${GalleryBorderRadiusTabletWidth};
                    }

                    .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {
                        ${GalleryButtonSwitcher == true && `border-radius: ${ButtonBorderRadiusTabletWidth}`};
                        ${GalleryButtonSwitcher == true && `margin: ${ButtonMarginTabletWidth}`};
                        ${GalleryButtonSwitcher == true && `padding: ${ButtonPaddingTabletWidth}`};
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-gallery-main-wrapper.${blockID} {
                        padding: ${GalleryPaddingMobileWidth};
                        margin: ${GalleryMarginMobileWidth};
                        border-radius: ${GalleryBorderRadiusMobileWidth};
                    }

                    .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {
                        ${GalleryButtonSwitcher == true && `border-radius: ${ButtonBorderRadiusMobileWidth}`};
                        ${GalleryButtonSwitcher == true && `margin: ${ButtonMarginMobileWidth}`};
                        ${GalleryButtonSwitcher == true && `padding: ${ButtonPaddingMobileWidth}`};
                    }
                }

            `}
            { ImageOverlayStyle === 'overlay' && `
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {
                    ${ImageOverlayStyleType === 'zoominout' && 'transform: scale(1.001)'};
                    transition: all 0.3s ease-in-out;
                }
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-gallery-image {
                    ${ImageOverlayStyleType === 'zoominout' && 'transform: scale(1.05)'};
                    transition: all 0.3s ease-in-out;
                }
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-image-overlay {
                    position: absolute;
                    content: '';
                    ${ImageOverlayStyleType === 'top' && 'top: -100%'};
                    ${ImageOverlayStyleType === 'top' && 'left: 0'};
                    ${ImageOverlayStyleType === 'bottom' && 'top: 100%'};
                    ${ImageOverlayStyleType === 'bottom' && 'left: 0'};
                    ${ImageOverlayStyleType === 'left' && 'top: 0'};
                    ${ImageOverlayStyleType === 'left' && 'left: -100%'};
                    ${ImageOverlayStyleType === 'right' && 'top: 0'};
                    ${ImageOverlayStyleType === 'right' && 'left: 100%'};
                    width: 100%;
                    height: 100%;
                    background-color: ${ImageOverlayColor};
                    visibility: hidden;
                    opacity: 0;
                    transition: all 0.3s ease-in-out;
                }  
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-overlay {
                    ${ImageOverlayStyleType == 'top' && 'top: 0'};
                    ${ImageOverlayStyleType == 'bottom' && 'top: 0'};
                    ${ImageOverlayStyleType == 'left' && 'left: 0'};
                    ${ImageOverlayStyleType == 'right' && 'left: 0'};
                    visibility: visible;
                    opacity: 1;
                    transition: all 0.3s ease-in-out;
                }
            `}
            </style>
            
            <div {...blockProps}>
            <div className="fb-image-gallery-wrapper">
                <div className={`fb-image-gallery-wrapper `}>
                    <div className="fb-image-gallery-items">
                        {GalleryItems.map(item => 
                            item?.image?.url && (
                                    <a key={item.id} 
                                        className="fb-image-gallery-item" 
                                        style={{
                                            ...(GalleryType === 'mesonry' && {
                                            gridRow: DeviceType === 'Desktop'
                                                ? item.row?.desktop > 1
                                                ? `span ${item.row?.desktop}`
                                                : 'unset'
                                                : DeviceType === 'Tablet'
                                                ? item.row?.tablet > 1
                                                ? `span ${item.row?.tablet}`
                                                : 'unset'
                                                : item.row?.mobile > 1
                                                ? `span ${item.row?.mobile}`
                                                : 'unset',
                                        
                                            gridColumn: DeviceType === 'Desktop'
                                                ? item.column?.desktop > 1
                                                ? `span ${item.column?.desktop}`
                                                : 'unset'
                                                : DeviceType === 'Tablet'
                                                ? item.column?.tablet > 1
                                                ? `span ${item.column?.tablet}`
                                                : 'unset'
                                                : item.column?.mobile > 1
                                                ? `span ${item.column?.mobile}`
                                                : 'unset'
                                            })
                                        }}
                                        
                                    >
                                        <img className="fb-image-gallery-image" src={item.image.url} alt={item.image.alt}></img>
                                        {ImageOverlayStyle === 'overlay' && <span className="fb-image-overlay"></span>}
                                    </a>
                            )
                        )}
                    </div>
                    {GalleryButtonSwitcher && <div className="fb-image-gallery-btn-wrapper"><a href={GalleryButtonLink} className="fb-image-gallery-btn">{GalleryButtonText}</a></div>}
                </div>
            </div>
        </div>
    </>
    );
}

