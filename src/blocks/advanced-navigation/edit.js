import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
    InnerBlocks,
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { useSelect, useDispatch } from "@wordpress/data";
import { select, dispatch, subscribe } from "@wordpress/data";

import { createHigherOrderComponent } from "@wordpress/compose";
import { overlayText } from "@wordpress/icons";

import Inspector from "./inspector";
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import generateAdvancedNavigationStyle from "./styling";

const getComparableUrlMeta = (url = "") => {
    try {
        const parsed = new URL(url, window.location.origin);
        const pathname = parsed.pathname.replace(/\/+$/, "");
        return {
            origin: parsed.origin,
            path: pathname || "/",
        };
    } catch (error) {
        return null;
    }
};

const addCurrentMenuItemClassFallback = (navigationRoot) => {
    if (!navigationRoot) {
        return;
    }

    // If WordPress already set active class, do not override.
    const hasWpCurrentClass = navigationRoot.querySelector(".wp-block-navigation-item.current-menu-item");
    if (hasWpCurrentClass) {
        return;
    }

    const currentPageMeta = getComparableUrlMeta(window.location.href);
    if (!currentPageMeta) {
        return;
    }

    const menuLinks = navigationRoot.querySelectorAll(".wp-block-navigation-item .wp-block-navigation-item__content[href]");
    menuLinks.forEach((link) => {
        const rawHref = (link.getAttribute("href") || "").trim();
        if (!rawHref || rawHref.startsWith("#")) {
            return;
        }

        const menuLinkMeta = getComparableUrlMeta(rawHref);
        const isActiveByAria = link.getAttribute("aria-current") === "page";
        const isActiveByPath = !!menuLinkMeta
            && menuLinkMeta.origin === currentPageMeta.origin
            && menuLinkMeta.path === currentPageMeta.path;

        if (isActiveByAria || isActiveByPath) {
            const menuItem = link.closest(".wp-block-navigation-item");
            if (menuItem && !menuItem.classList.contains("current-menu-item")) {
                menuItem.classList.add("current-menu-item");
            }
        }
    });
};

const CustomInspectorControls = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const { name, clientId, isSelected } = props;

        const targetBlocks = [
            "core/navigation",
            "core/navigation-submenu",
            "core/navigation-link",
        ];

        if (!targetBlocks.includes(name)) {
            return <BlockEdit {...props} />;
        }

        const parentBlock = select("core/block-editor").getBlockParents(clientId);
        let isParentBlockNavigation = false;

        parentBlock.map((block) => {
            const thisProps = select("core/block-editor").getBlock(block);
            if (thisProps && thisProps.name == "frontis-blocks/advanced-navigation") {
                isParentBlockNavigation = true;
            }
        });

        if (isParentBlockNavigation && isSelected) {
            setTimeout(() => {
                const inspector = document.querySelector(".block-editor-block-inspector");

                if (inspector) {
                    const tabsContainer = inspector.querySelector(".block-editor-block-inspector__tabs");
                    if (tabsContainer) {
                        const settingsButton = tabsContainer.querySelector('[aria-label="Settings"]');
                        const stylesButton = tabsContainer.querySelector('[aria-label="Styles"]');

                        if (name === "core/navigation") {
                            // Hide only Styles tab
                            stylesButton && (stylesButton.style.display = "none");
                        } else if (
                            name === "core/navigation-submenu" ||
                            name === "core/navigation-link"
                        ) {
                            // Hide both Settings and Styles tabs
                            // settingsButton && (settingsButton.style.display = "none");
                            stylesButton && (stylesButton.style.display = "none");
                        }
                    }
                }
            }, 200);
        }

        return <BlockEdit {...props} />;
    };
}, "withInspectorControls");

wp.hooks.addFilter(
    "editor.BlockEdit",
    "frontis-blocks/advanced-navigation",
    CustomInspectorControls
);


export default function Edit({ attributes, setAttributes, clientId, context, isSelected }) {
    const {
        blockID,
        blockStyle,
        navigationLayout,
        navigationHorizontalAlign,
        dropdownOpenOnClick,
        showDropdownIcon,
        navigationFlexWrapSwitcher,
        navigationVerticalAlign,
        hamburgerMenuIconType,
        hamburgerMenuSwitcher,

        navigationGlobalWraperClass,
        navigationGlobalWraperID,

        navigationDesktopSwitcher,
        navigationTabletSwitcher,
        navigationMobileSwitcher,
    } = attributes;

    // Handle block ID generation (handles duplication and initial ID)
    useBlockIdGenerator({
        clientId,
        blockID,
        blockPrefix: 'fb-advanced-navigation',
        isSelected,
        attributes,
        setAttributes,
    });

    /** Start Generate Block Style */
    useEffect(() => {
        if (blockID) {
            const css = generateAdvancedNavigationStyle(attributes);
            if (blockStyle !== css) {
                setAttributes({ blockStyle: css });
            }
        }
    }, [attributes, blockID]);
    /** End Generate Block Style */

    const { updateBlockAttributes } = useDispatch("core/block-editor");

    const innerBlocks = useSelect(
        (select) => select("core/block-editor").getBlocks(clientId),
        [clientId]
    );

    useEffect(() => {
        if (innerBlocks.length > 0) {
            innerBlocks.forEach((block) => {
                updateBlockAttributes(block.clientId, {
                    className: `${navigationLayout} ${navigationLayout === "is-horizontal" ? navigationHorizontalAlign : navigationVerticalAlign} ${navigationFlexWrapSwitcher ? "no-wrap" : ""}`,
                    openSubmenusOnClick: dropdownOpenOnClick,
                    showSubmenuIcon: showDropdownIcon,
                    hasIcon: hamburgerMenuIconType === "icon" ? true : false,
                    overlayMenu: hamburgerMenuSwitcher,
                });
            });
        }
    }, [navigationLayout, navigationHorizontalAlign, navigationFlexWrapSwitcher, navigationVerticalAlign, dropdownOpenOnClick, showDropdownIcon, hamburgerMenuIconType, hamburgerMenuSwitcher]);

    useEffect(() => {
        if (!blockID || typeof window === "undefined") {
            return;
        }

        const navigationWrapperSelector = `.${blockID} .advanced-navigation-wrapper`;
        const syncCurrentMenuClass = () => {
            const navigationWrappers = document.querySelectorAll(navigationWrapperSelector);
            navigationWrappers.forEach((wrapper) => addCurrentMenuItemClassFallback(wrapper));
        };

        syncCurrentMenuClass();

        const observer = new MutationObserver(() => {
            syncCurrentMenuClass();
        });

        const navigationWrappers = document.querySelectorAll(navigationWrapperSelector);
        navigationWrappers.forEach((wrapper) => {
            observer.observe(wrapper, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ["href", "class", "aria-current"],
            });
        });

        window.addEventListener("popstate", syncCurrentMenuClass);
        window.addEventListener("hashchange", syncCurrentMenuClass);

        return () => {
            observer.disconnect();
            window.removeEventListener("popstate", syncCurrentMenuClass);
            window.removeEventListener("hashchange", syncCurrentMenuClass);
        };
    }, [blockID]);


    const blockProps = useBlockProps({
        className: `frontis-block fb-advanced-navigation-main-wrapper ${blockID} ${navigationDesktopSwitcher && 'fb-desktop-responsive'} ${navigationTabletSwitcher && 'fb-tablet-responsive'} ${navigationMobileSwitcher && 'fb-mobile-responsive'}`,
    });


    return (
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}

            <div {...blockProps}>
                <div className={`advanced-navigation-wrapper ${navigationGlobalWraperClass}`} id={navigationGlobalWraperID}>
                    <div
                        className={`advanced-navigation-inner-wrapper ${navigationLayout} ${navigationLayout === "is-horizontal" ? navigationHorizontalAlign : navigationVerticalAlign
                            } ${showDropdownIcon ? "" : "remove-dropdown-icon"} ${hamburgerMenuIconType === "icon" ? "responsive-icon" : "responsive-text"
                            }`}
                    >
                        <div className="advanced-navigation-contents">
                            <InnerBlocks
                                templateLock={false}
                                template={[
                                    [
                                        "core/navigation",
                                        { className: `${navigationLayout} ${navigationHorizontalAlign}` },
                                    ],
                                ]}
                                allowedBlocks={["core/navigation"]}
                                renderAppender={
                                    innerBlocks.length < 1
                                        ? InnerBlocks.ButtonBlockAppender
                                        : false
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
            <style>{blockStyle}</style>
        </>
    );
}