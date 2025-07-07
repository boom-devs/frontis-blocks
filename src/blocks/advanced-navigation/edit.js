import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
    InnerBlocks,
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { useSelect, useDispatch } from "@wordpress/data";

import Inspector from "./inspector";
import { select, dispatch, subscribe } from "@wordpress/data";

import { createHigherOrderComponent } from "@wordpress/compose";


const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const { attributes, name, clientId, isSelected, setAttributes } = props;

        const targetBlocks = [
            "core/navigation",
            "core/navigation-submenu",
            "core/navigation-link",
        ];

        if (!targetBlocks.includes(name)) {
            return <BlockEdit {...props} />;
        }

        const parentBlock = select("core/block-editor").getBlockParents(
            clientId
        );
        let isParentBlockNavigation = false;
        let parentAttributes = {};
        parentBlock.map((block) => {
            const thisProps = select("core/block-editor").getBlock(block);
            if (
                thisProps &&
                thisProps.name == "frontis-blocks/advanced-navigation"
            ) {
                isParentBlockNavigation = true;
                parentAttributes = { ...thisProps.attributes };
            }
        });

        let inspector;
        if (isParentBlockNavigation && isSelected) {
            setTimeout(() => {
                inspector = document.querySelector(
                    ".block-editor-block-inspector"
                );

                if (inspector) {
                    let buttonSelector = inspector.querySelector(".block-editor-block-inspector__tabs")
                    if (buttonSelector) {
                        let tabButtons = buttonSelector.querySelectorAll('[aria-label="Settings"], [aria-label="Styles"]');
                        tabButtons && tabButtons.forEach((element) => {
                            element.style.display = "none";
                        });
                    }
                }
            }, 200);

            if (inspector) {
                setTimeout(() => {

                    let nodes = inspector.children;

                    let tabButtons = inspector
                        .querySelector(".block-editor-block-inspector__tabs")
                        .querySelectorAll(
                            '[aria-label="Settings"], [aria-label="Styles"]'
                        );

                    tabButtons.forEach((element) => {
                        element.style.display = "none";
                    });

                    for (let i = 0; i <= nodes.length - 1; i++) {
                        let card = nodes[i].classList.contains(
                            "block-editor-block-card"
                        );
                        let tab = nodes[i].classList.contains(
                            "block-editor-block-inspector__tabs"
                        );

                        let childen = nodes[i].children;

                        if (!card && !tab) {
                            for (let x = 0; x <= childen.length - 1; x++) {
                                const hasNavigation = childen[x].querySelector(
                                    ".wp-block-navigation__navigation-selector"
                                );

                                if (!hasNavigation) {
                                    childen[x].style.display = "none";
                                }
                            }
                        }
                    }
                }, 200);

                return (
                    <Fragment>
                        <BlockEdit {...props} />
                    </Fragment>
                );
            } else {
                return <BlockEdit {...props} />;
            }
        } else {
            inspector = document.querySelector(".block-editor-block-inspector");

            if (inspector) {
                setTimeout(() => {
                    inspector.querySelector(
                        ".block-editor-block-card"
                    ).style.display = "block";

                    let nodes = inspector.children;
                    for (let i = 0; i <= nodes.length - 1; i++) {
                        let childen = nodes[i].children;

                        for (let x = 0; x <= childen.length - 1; x++) {
                            childen[x].style.display = "block";
                        }
                    }
                }, 200);
            }
            return <BlockEdit {...props} />;
        }
    };
}, "withInspectorControl");

wp.hooks.addFilter(
    "editor.BlockEdit",
    "frontis-blocks/advanced-navigation",
    withInspectorControls
);

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockId,
        navigationLayout,
        navigationHorizontalAlign,
        dropdownOpenOnClick,
        showDropdownIcon,
        navigationFlexWrapSwitcher,
        navigationVerticalAlign,
        hamburgerMenuIconType,

        navigationGlobalWraperClass,
        navigationGlobalWraperID,

        navigationDesktopSwitcher,
        navigationTabletSwitcher,
        navigationMobileSwitcher,
    } = attributes;

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
                });
            });
        }
    }, [navigationLayout, navigationHorizontalAlign, navigationFlexWrapSwitcher, navigationVerticalAlign, dropdownOpenOnClick, showDropdownIcon, hamburgerMenuIconType]);

    const blockProps = useBlockProps({
        className: `frontis-block fb-advanced-navigation-main-wrapper ${blockId} ${navigationDesktopSwitcher && 'fb-desktop-responsive'} ${navigationTabletSwitcher && 'fb-tablet-responsive'} ${navigationMobileSwitcher && 'fb-mobile-responsive'}`,
    });

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
            <div {...blockProps}>
                <div className={`advanced-navigation-wrapper ${navigationGlobalWraperClass}`} id={navigationGlobalWraperID}>
                    <div
                        className={`advanced-navigation-inner-wrapper ${navigationLayout} ${
                            navigationLayout === "is-horizontal" ? navigationHorizontalAlign : navigationVerticalAlign
                        } ${showDropdownIcon ? "" : "remove-dropdown-icon"} ${
                            hamburgerMenuIconType === "icon" ? "responsive-icon" : "responsive-text"
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
        </>
    );
}