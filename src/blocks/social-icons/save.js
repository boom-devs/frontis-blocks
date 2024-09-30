import { useBlockProps } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
    const {
        blockID,
        socialItems,
        socialIconUrl,
        socialIconTargetUrl,

        DeviceType,
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
    const IconBorderDesktopWidth = `${socialIconBorderDesktop.top}${socialIconBorderUnits[DeviceType]} ${socialIconBorderDesktop.right}${socialIconBorderUnits[DeviceType]} ${socialIconBorderDesktop.bottom}${socialIconBorderUnits[DeviceType]} ${socialIconBorderDesktop.left}${socialIconBorderUnits[DeviceType]}`;
    const IconBorderTabletWidth = `${socialIconBorderTablet.top}${socialIconBorderUnits[DeviceType]} ${socialIconBorderTablet.right}${socialIconBorderUnits[DeviceType]} ${socialIconBorderTablet.bottom}${socialIconBorderUnits[DeviceType]} ${socialIconBorderTablet.left}${socialIconBorderUnits[DeviceType]}`;
    const IconBorderMobileWidth = `${socialIconBorderMobile.top}${socialIconBorderUnits[DeviceType]} ${socialIconBorderMobile.right}${socialIconBorderUnits[DeviceType]} ${socialIconBorderMobile.bottom}${socialIconBorderUnits[DeviceType]} ${socialIconBorderMobile.left}${socialIconBorderUnits[DeviceType]}`;
    /** End Icon Border */

    /** Start Border Radius */
    const IconBorderRadiusDesktopWidth = `${socialIconBorderRadiusDesktop.top}${socialIconBorderRadiusUnits[DeviceType]} ${socialIconBorderRadiusDesktop.right}${socialIconBorderRadiusUnits[DeviceType]} ${socialIconBorderRadiusDesktop.bottom}${socialIconBorderRadiusUnits[DeviceType]} ${socialIconBorderRadiusDesktop.left}${socialIconBorderRadiusUnits[DeviceType]}`;
    const IconBorderRadiusTabletWidth = `${socialIconBorderRadiusTablet.top}${socialIconBorderRadiusUnits[DeviceType]} ${socialIconBorderRadiusTablet.right}${socialIconBorderRadiusUnits[DeviceType]} ${socialIconBorderRadiusTablet.bottom}${socialIconBorderRadiusUnits[DeviceType]} ${socialIconBorderRadiusTablet.left}${socialIconBorderRadiusUnits[DeviceType]}`;
    const IconBorderRadiusMobileWidth = `${socialIconBorderRadiusMobile.top}${socialIconBorderRadiusUnits[DeviceType]} ${socialIconBorderRadiusMobile.right}${socialIconBorderRadiusUnits[DeviceType]} ${socialIconBorderRadiusMobile.bottom}${socialIconBorderRadiusUnits[DeviceType]} ${socialIconBorderRadiusUnits[DeviceType]} ${socialIconBorderRadiusMobile.left}${socialIconBorderRadiusUnits[DeviceType]}`;
    /** End Border Radius */

    /** Start Icon Padding */
    const IconPaddingDesktop    = `${socialIconPaddingDesktop.top}${socialIconPaddingUnits[DeviceType]} ${socialIconPaddingDesktop.right}${socialIconPaddingUnits[DeviceType]} ${socialIconPaddingDesktop.bottom}${socialIconPaddingUnits[DeviceType]} ${socialIconPaddingDesktop.left}${socialIconPaddingUnits[DeviceType]}`;
    const IconPaddingTablet        = `${socialIconPaddingTablet.top}${socialIconPaddingUnits[DeviceType]} ${socialIconPaddingTablet.right}${socialIconPaddingUnits[DeviceType]} ${socialIconPaddingTablet.bottom}${socialIconPaddingUnits[DeviceType]} ${socialIconPaddingTablet.left}${socialIconPaddingUnits[DeviceType]}`;
    const IconPaddingMobile     = `${socialIconPaddingMobile.top}${socialIconPaddingUnits[DeviceType]} ${socialIconPaddingMobile.right}${socialIconPaddingUnits[DeviceType]} ${socialIconPaddingMobile.bottom}${socialIconPaddingUnits[DeviceType]} ${socialIconPaddingMobile.left}${socialIconPaddingUnits[DeviceType]}`;
    /** End Icon Padding */

    /** Start Global Padding */
    const DesktopPadding    = `${socialPaddingDesktop.top}${socialPaddingUnits[DeviceType]} ${socialPaddingDesktop.right}${socialPaddingUnits[DeviceType]} ${socialPaddingDesktop.bottom}${socialPaddingUnits[DeviceType]} ${socialPaddingDesktop.left}${socialPaddingUnits[DeviceType]}`;
    const TabletPadding = `${socialPaddingTablet.top}${socialPaddingUnits[DeviceType]} ${socialPaddingTablet.right}${socialPaddingUnits[DeviceType]} ${socialPaddingTablet.bottom}${socialPaddingUnits[DeviceType]} ${socialPaddingTablet.left}${socialPaddingUnits[DeviceType]}`;
    const MobilePadding = `${socialPaddingMobile.top}${socialPaddingUnits[DeviceType]} ${socialPaddingMobile.right}${socialPaddingUnits[DeviceType]} ${socialPaddingMobile.bottom}${socialPaddingUnits[DeviceType]} ${socialPaddingMobile.left}${socialPaddingUnits[DeviceType]}`;
    /** End Global Padding */

    /** Start Global Margin */
    const DesktopMargin = `${socialMarginDesktop.top}${socialMarginUnits[DeviceType]} ${socialMarginDesktop.right}${socialMarginUnits[DeviceType]} ${socialMarginDesktop.bottom}${socialMarginUnits[DeviceType]} ${socialMarginDesktop.left}${socialMarginUnits[DeviceType]}`;
    const TabletMargin = `${socialMarginTablet.top}${socialMarginUnits[DeviceType]} ${socialMarginTablet.right}${socialMarginUnits[DeviceType]} ${socialMarginTablet.bottom}${socialMarginUnits[DeviceType]} ${socialMarginTablet.left}${socialMarginUnits[DeviceType]}`;
    const MobileMargin = `${socialMarginMobile.top}${socialMarginUnits[DeviceType]} ${socialMarginMobile.right}${socialMarginUnits[DeviceType]} ${socialMarginMobile.bottom}${socialMarginUnits[DeviceType]} ${socialMarginMobile.left}${socialMarginUnits[DeviceType]}`;
    /** End Global Margin */
 
     /** Start Global border */
     const BorderDesktopWidth = `${socialBorderDesktop.top}${socialBorderUnits[DeviceType]} ${socialBorderDesktop.right}${socialBorderUnits[DeviceType]} ${socialBorderDesktop.bottom}${socialBorderUnits[DeviceType]} ${socialBorderDesktop.left}${socialBorderUnits[DeviceType]}`;
     const BorderTabletWidth = `${socialBorderTablet.top}${socialBorderUnits[DeviceType]} ${socialBorderTablet.right}${socialBorderUnits[DeviceType]} ${socialBorderTablet.bottom}${socialBorderUnits[DeviceType]} ${socialBorderTablet.left}${socialBorderUnits[DeviceType]}`;
     const BorderMobileWidth = `${socialBorderMobile.top}${socialBorderUnits[DeviceType]} ${socialBorderMobile.right}${socialBorderUnits[DeviceType]} ${socialBorderMobile.bottom}${socialBorderUnits[DeviceType]} ${socialBorderMobile.left}${socialBorderUnits[DeviceType]}`;
     /** End Global Border */

    /** Start Global Border Radius */
     const BorderRadiusDesktopWidth = `${socialBorderRadiusDesktop.top}${socialBorderRadiusUnits[DeviceType]} ${socialBorderRadiusDesktop.right}${socialBorderRadiusUnits[DeviceType]} ${socialBorderRadiusDesktop.bottom}${socialBorderRadiusUnits[DeviceType]} ${socialBorderRadiusDesktop.left}${socialBorderRadiusUnits[DeviceType]}`;
     const BorderRadiusTabletWidth = `${socialBorderRadiusTablet.top}${socialBorderRadiusUnits[DeviceType]} ${socialBorderRadiusTablet.right}${socialBorderRadiusUnits[DeviceType]} ${socialBorderRadiusTablet.bottom}${socialBorderRadiusUnits[DeviceType]} ${socialBorderRadiusTablet.left}${socialBorderRadiusUnits[DeviceType]}`;
     const BorderRadiusMobileWidth = `${socialBorderRadiusMobile.top}${socialBorderRadiusUnits[DeviceType]} ${socialBorderRadiusMobile.right}${socialBorderRadiusUnits[DeviceType]} ${socialBorderRadiusMobile.bottom}${socialBorderRadiusUnits[DeviceType]} ${socialBorderRadiusUnits[DeviceType]} ${socialBorderRadiusMobile.left}${socialBorderRadiusUnits[DeviceType]}`;
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
