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
import { overlayText } from "@wordpress/icons";


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
        hamburgerMenuSwitcher,

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
                    overlayMenu: hamburgerMenuSwitcher,
                });
            });
        }
    }, [navigationLayout, navigationHorizontalAlign, navigationFlexWrapSwitcher, navigationVerticalAlign, dropdownOpenOnClick, showDropdownIcon, hamburgerMenuIconType, hamburgerMenuSwitcher]);


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