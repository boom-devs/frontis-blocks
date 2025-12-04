.${blockId} .fb-advanced-mega-menu-wrapper .fb-advanced-mega-menu-toggle .close-icon svg{
            ${megaMenuCloseIconColor ? `stroke: ${megaMenuCloseIconColor};` : ''}
            transform: rotate(${megaMenuCloseIconRotation?.Desktop}deg);
            width: ${megaMenuCloseIconSize?.Desktop}${megaMenuCloseIconSizeUnits?.Desktop};
            height: ${megaMenuCloseIconSize?.Desktop}${megaMenuCloseIconSizeUnits?.Desktop};
        }
        .${blockId} .fb-advanced-mega-menu-wrapper .fb-advanced-mega-menu-toggle:hover .close-icon svg{
            ${megaMenuCloseIconHoverColor ? `stroke: ${megaMenuCloseIconHoverColor};` : ''}
            transform: rotate(${megaMenuCloseIconRotateHover?.Desktop}deg);
        }