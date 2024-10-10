import { useBlockProps } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
    const {
        blockID,
        socialItems,
        socialIconUrl,
        socialIconTargetUrl,

        deviceType,
        socialAlignment,
        socialIconZIndex,
        socialIconSize,
        socialIconSizeUnits,

        socialIconColor,
        socialIconHoverColor,

        socialBgColor,
        socialBgHoverColor,

        socialIconBorder,
        socialIconBorderColor,
        socialIconBorderHoverColor,

        socialIconBorderUnits,
        socialIconBorderDesktop,
        socialIconBorderTablet,
        socialIconBorderMobile,

        socialIconBorderRadiusUnits,
        socialIconBorderRadiusDesktop,
        socialIconBorderRadiusTablet,
        socialIconBorderRadiusMobile,

        socialIconGapSize,
        socialIconGapUnits,

        socialIconPaddingUnits,
        socialIconPaddingDesktop,
        socialIconPaddingTablet,
        socialIconPaddingMobile,

        socialPaddingUnits,
        socialPaddingDesktop,
        socialPaddingTablet,
        socialPaddingMobile,

        socialMarginUnits,
        socialMarginDesktop,
        socialMarginTablet,
        socialMarginMobile,

        socialGlobalBgColor,
        socialGlobalBgHoverColor,

        socialBorder,
        socialBorderColor,
        socialBorderHoverColor,

        socialBorderUnits,
        socialBorderDesktop,
        socialBorderTablet,
        socialBorderMobile,

        socialBorderRadiusUnits,
        socialBorderRadiusDesktop,
        socialBorderRadiusTablet,
        socialBorderRadiusMobile,


    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-social-main-wrapper ${blockID}`,
    });
    
    /** Start Icon border */
    const IconBorderDesktopWidth = `${socialIconBorderDesktop.top}${socialIconBorderUnits[deviceType]} ${socialIconBorderDesktop.right}${socialIconBorderUnits[deviceType]} ${socialIconBorderDesktop.bottom}${socialIconBorderUnits[deviceType]} ${socialIconBorderDesktop.left}${socialIconBorderUnits[deviceType]}`;
    const IconBorderTabletWidth = `${socialIconBorderTablet.top}${socialIconBorderUnits[deviceType]} ${socialIconBorderTablet.right}${socialIconBorderUnits[deviceType]} ${socialIconBorderTablet.bottom}${socialIconBorderUnits[deviceType]} ${socialIconBorderTablet.left}${socialIconBorderUnits[deviceType]}`;
    const IconBorderMobileWidth = `${socialIconBorderMobile.top}${socialIconBorderUnits[deviceType]} ${socialIconBorderMobile.right}${socialIconBorderUnits[deviceType]} ${socialIconBorderMobile.bottom}${socialIconBorderUnits[deviceType]} ${socialIconBorderMobile.left}${socialIconBorderUnits[deviceType]}`;
    /** End Icon Border */

    /** Start Border Radius */
    const IconBorderRadiusDesktopWidth = `${socialIconBorderRadiusDesktop.top}${socialIconBorderRadiusUnits[deviceType]} ${socialIconBorderRadiusDesktop.right}${socialIconBorderRadiusUnits[deviceType]} ${socialIconBorderRadiusDesktop.bottom}${socialIconBorderRadiusUnits[deviceType]} ${socialIconBorderRadiusDesktop.left}${socialIconBorderRadiusUnits[deviceType]}`;
    const IconBorderRadiusTabletWidth = `${socialIconBorderRadiusTablet.top}${socialIconBorderRadiusUnits[deviceType]} ${socialIconBorderRadiusTablet.right}${socialIconBorderRadiusUnits[deviceType]} ${socialIconBorderRadiusTablet.bottom}${socialIconBorderRadiusUnits[deviceType]} ${socialIconBorderRadiusTablet.left}${socialIconBorderRadiusUnits[deviceType]}`;
    const IconBorderRadiusMobileWidth = `${socialIconBorderRadiusMobile.top}${socialIconBorderRadiusUnits[deviceType]} ${socialIconBorderRadiusMobile.right}${socialIconBorderRadiusUnits[deviceType]} ${socialIconBorderRadiusMobile.bottom}${socialIconBorderRadiusUnits[deviceType]} ${socialIconBorderRadiusUnits[deviceType]} ${socialIconBorderRadiusMobile.left}${socialIconBorderRadiusUnits[deviceType]}`;
    /** End Border Radius */

    /** Start Icon Padding */
    const IconPaddingDesktop    = `${socialIconPaddingDesktop.top}${socialIconPaddingUnits[deviceType]} ${socialIconPaddingDesktop.right}${socialIconPaddingUnits[deviceType]} ${socialIconPaddingDesktop.bottom}${socialIconPaddingUnits[deviceType]} ${socialIconPaddingDesktop.left}${socialIconPaddingUnits[deviceType]}`;
    const IconPaddingTablet        = `${socialIconPaddingTablet.top}${socialIconPaddingUnits[deviceType]} ${socialIconPaddingTablet.right}${socialIconPaddingUnits[deviceType]} ${socialIconPaddingTablet.bottom}${socialIconPaddingUnits[deviceType]} ${socialIconPaddingTablet.left}${socialIconPaddingUnits[deviceType]}`;
    const IconPaddingMobile     = `${socialIconPaddingMobile.top}${socialIconPaddingUnits[deviceType]} ${socialIconPaddingMobile.right}${socialIconPaddingUnits[deviceType]} ${socialIconPaddingMobile.bottom}${socialIconPaddingUnits[deviceType]} ${socialIconPaddingMobile.left}${socialIconPaddingUnits[deviceType]}`;
    /** End Icon Padding */

    /** Start Global Padding */
    const DesktopPadding    = `${socialPaddingDesktop.top}${socialPaddingUnits[deviceType]} ${socialPaddingDesktop.right}${socialPaddingUnits[deviceType]} ${socialPaddingDesktop.bottom}${socialPaddingUnits[deviceType]} ${socialPaddingDesktop.left}${socialPaddingUnits[deviceType]}`;
    const TabletPadding = `${socialPaddingTablet.top}${socialPaddingUnits[deviceType]} ${socialPaddingTablet.right}${socialPaddingUnits[deviceType]} ${socialPaddingTablet.bottom}${socialPaddingUnits[deviceType]} ${socialPaddingTablet.left}${socialPaddingUnits[deviceType]}`;
    const MobilePadding = `${socialPaddingMobile.top}${socialPaddingUnits[deviceType]} ${socialPaddingMobile.right}${socialPaddingUnits[deviceType]} ${socialPaddingMobile.bottom}${socialPaddingUnits[deviceType]} ${socialPaddingMobile.left}${socialPaddingUnits[deviceType]}`;
    /** End Global Padding */

    /** Start Global Margin */
    const DesktopMargin = `${socialMarginDesktop.top}${socialMarginUnits[deviceType]} ${socialMarginDesktop.right}${socialMarginUnits[deviceType]} ${socialMarginDesktop.bottom}${socialMarginUnits[deviceType]} ${socialMarginDesktop.left}${socialMarginUnits[deviceType]}`;
    const TabletMargin = `${socialMarginTablet.top}${socialMarginUnits[deviceType]} ${socialMarginTablet.right}${socialMarginUnits[deviceType]} ${socialMarginTablet.bottom}${socialMarginUnits[deviceType]} ${socialMarginTablet.left}${socialMarginUnits[deviceType]}`;
    const MobileMargin = `${socialMarginMobile.top}${socialMarginUnits[deviceType]} ${socialMarginMobile.right}${socialMarginUnits[deviceType]} ${socialMarginMobile.bottom}${socialMarginUnits[deviceType]} ${socialMarginMobile.left}${socialMarginUnits[deviceType]}`;
    /** End Global Margin */
 
     /** Start Global border */
     const BorderDesktopWidth = `${socialBorderDesktop.top}${socialBorderUnits[deviceType]} ${socialBorderDesktop.right}${socialBorderUnits[deviceType]} ${socialBorderDesktop.bottom}${socialBorderUnits[deviceType]} ${socialBorderDesktop.left}${socialBorderUnits[deviceType]}`;
     const BorderTabletWidth = `${socialBorderTablet.top}${socialBorderUnits[deviceType]} ${socialBorderTablet.right}${socialBorderUnits[deviceType]} ${socialBorderTablet.bottom}${socialBorderUnits[deviceType]} ${socialBorderTablet.left}${socialBorderUnits[deviceType]}`;
     const BorderMobileWidth = `${socialBorderMobile.top}${socialBorderUnits[deviceType]} ${socialBorderMobile.right}${socialBorderUnits[deviceType]} ${socialBorderMobile.bottom}${socialBorderUnits[deviceType]} ${socialBorderMobile.left}${socialBorderUnits[deviceType]}`;
     /** End Global Border */

    /** Start Global Border Radius */
     const BorderRadiusDesktopWidth = `${socialBorderRadiusDesktop.top}${socialBorderRadiusUnits[deviceType]} ${socialBorderRadiusDesktop.right}${socialBorderRadiusUnits[deviceType]} ${socialBorderRadiusDesktop.bottom}${socialBorderRadiusUnits[deviceType]} ${socialBorderRadiusDesktop.left}${socialBorderRadiusUnits[deviceType]}`;
     const BorderRadiusTabletWidth = `${socialBorderRadiusTablet.top}${socialBorderRadiusUnits[deviceType]} ${socialBorderRadiusTablet.right}${socialBorderRadiusUnits[deviceType]} ${socialBorderRadiusTablet.bottom}${socialBorderRadiusUnits[deviceType]} ${socialBorderRadiusTablet.left}${socialBorderRadiusUnits[deviceType]}`;
     const BorderRadiusMobileWidth = `${socialBorderRadiusMobile.top}${socialBorderRadiusUnits[deviceType]} ${socialBorderRadiusMobile.right}${socialBorderRadiusUnits[deviceType]} ${socialBorderRadiusMobile.bottom}${socialBorderRadiusUnits[deviceType]} ${socialBorderRadiusUnits[deviceType]} ${socialBorderRadiusMobile.left}${socialBorderRadiusUnits[deviceType]}`;
     /** End Global Border Radius */

    return (
        <>
            <style>
            {`
                .fb-social-main-wrapper.${blockID} {
                    z-index: ${socialIconZIndex !== undefined ? socialIconZIndex : ''};
                }
                .fb-social-wrapper {
                    ${socialGlobalBgColor !== undefined ? `background-color: ${socialGlobalBgColor};` : ''};
                    padding: ${DesktopPadding};
                    margin: ${DesktopMargin};
                    border: ${socialBorder};
                    border-width: ${BorderDesktopWidth};
                    border-radius: ${BorderRadiusDesktopWidth} !important;
                    ${socialBorderColor !== undefined ? `border-color: ${socialBorderColor};` : ''};
                    transition: all .3s ease-in-out;
                }
                .fb-social-wrapper:hover {
                    ${socialGlobalBgHoverColor !== undefined ? `background-color: ${socialGlobalBgHoverColor};` : ''};
                    ${socialBorderHoverColor !== undefined ? `border-color: ${socialBorderHoverColor};` : ''};
                }
                .fb-socials {
                    column-gap: ${socialIconGapSize.Desktop}${socialIconGapUnits.Desktop};
                    justify-content: ${socialAlignment};
                }
                .fb-social-list-item a {
                    width: ${socialIconSize.Desktop}${socialIconSizeUnits.Desktop};
                    height: ${socialIconSize.Desktop}${socialIconSizeUnits.Desktop};
                    padding: ${IconPaddingDesktop};
                    background-color: ${socialBgColor};
                    border: ${socialIconBorder};
                    border-width: ${IconBorderDesktopWidth};
                    border-radius: ${IconBorderRadiusDesktopWidth} !important;
                    ${socialIconBorderColor !== undefined ? `border-color: ${socialIconBorderColor};` : ''};
                }
                .fb-social-list-item a:hover {
                    background-color: ${socialBgHoverColor};
                    ${socialIconBorderHoverColor !== undefined ? `border-color: ${socialIconBorderHoverColor};` : ''};
                }
                .fb-social-list-item a svg{
                    fill: ${socialIconColor};
                }
                .fb-social-list-item a:hover svg{
                    fill: ${socialIconHoverColor};
                }

                @media only screen and (max-width: 1024px) {

                    .fb-social-wrapper {
                        padding: ${TabletPadding};
                        margin: ${TabletMargin};
                        border-width: ${BorderTabletWidth};
                        border-radius: ${BorderRadiusTabletWidth} !important;
                    }
                    .fb-socials {
                        column-gap: ${socialIconGapSize.Tablet}${socialIconGapUnits.Tablet};
                    }
                    .fb-social-list-item a {
                        width: ${socialIconSize.Tablet}${socialIconSizeUnits.Tablet};
                        height: ${socialIconSize.Tablet}${socialIconSizeUnits.Tablet};
                        padding: ${IconPaddingTablet};
                        border-width: ${IconBorderTabletWidth};
                        border-radius: ${IconBorderRadiusTabletWidth} !important;
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-social-wrapper {
                        padding: ${MobilePadding};
                        margin: ${MobileMargin};
                        border-width: ${BorderMobileWidth};
                        border-radius: ${BorderRadiusMobileWidth} !important;
                    }
                    .fb-socials {
                        column-gap: ${socialIconGapSize.Mobile}${socialIconGapUnits.Mobile};
                    }
                    .fb-social-list-item a {
                        width: ${socialIconSize.Mobile}${socialIconSizeUnits.Mobile};
                        height: ${socialIconSize.Mobile}${socialIconSizeUnits.Mobile};
                        padding: ${IconPaddingMobile};
                        border-width: ${IconBorderMobileWidth};
                        border-radius: ${IconBorderRadiusMobileWidth} !important;
                    }
                }

            `}
            </style>
            <div {...blockProps}>
                <div className="fb-social-wrapper">
                    <div className="fb-social-links-wrapper">
                        <ul className="fb-socials">
                            {socialItems.map(item => (
                                <li key={item.id} className="fb-social-list-item">
                                    <a
                                        className="fb-advanced-button"
                                        href={socialIconUrl}
                                        target={socialIconTargetUrl ? '_blank' : undefined}
                                        rel={socialIconTargetUrl ? 'noopener noreferrer' : undefined}
                                    >
                                        {item.socialIcon ? renderSVG(item.socialIcon) : ''}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
