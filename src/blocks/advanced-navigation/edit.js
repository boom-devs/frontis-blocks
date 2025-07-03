import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
    InnerBlocks,
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { useSelect, useDispatch } from "@wordpress/data";

import Inspector from "./inspector";

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
                        className={`${blockId} advanced-navigation-inner-wrapper ${navigationLayout} ${
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