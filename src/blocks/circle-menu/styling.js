/**
 * Circle Menu Block - Style Generation
 */

/**
 * Get value from a responsive object or direct value
 * @param {Object|number|string} attr
 * @param {string} device
 * @param {any} fallback
 * @returns {any}
 */
const getV = (attr, device = "Desktop", fallback = "") => {
	if (typeof attr === "object" && attr !== null) {
		return attr[device] !== undefined && attr[device] !== ""
			? attr[device]
			: device === "Desktop"
			? fallback
			: getV(attr, "Desktop", fallback);
	}
	return device === "Desktop" ? (attr !== undefined ? attr : fallback) : "";
};

const generateCircleMenuStyle = (attributes) => {
	const {
		blockID,
		offsetH,
		offsetV,
		mainMenuSize,
		mainMenuBgColor,
		mainMenuBgHoverColor,
		mainMenuTextColor,
		mainMenuTextHoverColor,
		mainMenuIconSize,
		submenuSize,
		submenuBgColor,
		submenuIconSize,
		submenuIconColor,
	} = attributes;

	const generateDeviceStyle = (device) => {
		const h = getV(offsetH, device, 40);
		const v = getV(offsetV, device, 40);
		const mSize = getV(mainMenuSize, device, 72);
		const mIconSize = getV(mainMenuIconSize, device, 32);
		const sSize = getV(submenuSize, device, 62);
		const sIconSize = getV(submenuIconSize, device, 24);

		return `
            .${blockID}.fb-circle-menu-main-wrapper {
                --fb-cm-offset-h: ${h}px;
                --fb-cm-offset-v: ${v}px;
            }

            .${blockID} .fb-circle-menu {
                --fb-cm-main-size: ${mSize}px;
                --fb-cm-sub-size: ${sSize}px;
                --fb-cm-main-icon-size: ${mIconSize}px;
                --fb-cm-sub-icon-size: ${sIconSize}px;
            }

            .${blockID} .fb-circle-menu-toggle svg,
            .${blockID} .fb-circle-menu-toggle i,
            .${blockID} .fb-circle-menu-toggle img {
                width: ${mIconSize}px !important;
                height: ${mIconSize}px !important;
            }

            .${blockID} .fb-circle-menu-icon svg,
            .${blockID} .fb-circle-menu-icon i {
                width: ${sIconSize}px !important;
                height: ${sIconSize}px !important;
            }
        `;
	};

	const desktopStyle = generateDeviceStyle("Desktop");
	const tabletStyle = generateDeviceStyle("Tablet");
	const mobileStyle = generateDeviceStyle("Mobile");

	return `
        ${desktopStyle}

        .${blockID} .fb-circle-menu {
            --fb-cm-main-bg: ${mainMenuBgColor || "#CD9B44"};
            --fb-cm-main-bg-hover: ${mainMenuBgHoverColor || mainMenuBgColor || "#CD9B44"};
            --fb-cm-main-color: ${mainMenuTextColor || "#ffffff"};
            --fb-cm-main-color-hover: ${mainMenuTextHoverColor || mainMenuTextColor || "#ffffff"};
            --fb-cm-sub-bg: ${submenuBgColor || "rgba(17, 19, 22, 0.4)"};
            --fb-cm-sub-color: ${submenuIconColor || "#F9E3BC"};
        }

        /* Normal State */
        .${blockID} .fb-circle-menu-center {
            background: var(--fb-cm-main-bg) !important;
        }
        .${blockID} .fb-circle-menu-center .fb-circle-menu-toggle svg,
        .${blockID} .fb-circle-menu-center .fb-circle-menu-toggle i,
        .${blockID} .fb-circle-menu-center .fb-circle-menu-toggle p {
            color: var(--fb-cm-main-color) !important;
            fill: var(--fb-cm-main-color) !important;
        }

        /* Hover State - Triggers when parent container is hovered */
        .${blockID} .fb-circle-menu:hover .fb-circle-menu-center,
        .${blockID} .fb-circle-menu-center.is-active {
            background: var(--fb-cm-main-bg-hover) !important;
        }

        .${blockID} .fb-circle-menu:hover .fb-circle-menu-center .fb-circle-menu-toggle svg,
        .${blockID} .fb-circle-menu:hover .fb-circle-menu-center .fb-circle-menu-toggle i,
        .${blockID} .fb-circle-menu:hover .fb-circle-menu-center .fb-circle-menu-toggle p,
        .${blockID} .fb-circle-menu-center.is-active .fb-circle-menu-toggle svg,
        .${blockID} .fb-circle-menu-center.is-active .fb-circle-menu-toggle i,
        .${blockID} .fb-circle-menu-center.is-active .fb-circle-menu-toggle p {
            color: var(--fb-cm-main-color-hover) !important;
            fill: var(--fb-cm-main-color-hover) !important;
        }

        @media only screen and (max-width: 1024px) {
            ${tabletStyle}
        }

        @media only screen and (max-width: 767px) {
            ${mobileStyle}
        }
    `.replace(/\s+/g, ' ').trim();
};

export default generateCircleMenuStyle;
