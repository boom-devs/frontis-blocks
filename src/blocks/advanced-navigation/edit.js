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
        navBtnType,
        showDropdownIcon,
        flexWrap,
        navigationVerticalAlign,
        hamburgerMenu,
        hamburgerCloseIconAlign,
        classHook,
    } = attributes;

    const { updateBlockAttributes } = useDispatch("core/block-editor");

    const innerBlocks = useSelect(
        (select) => select("core/block-editor").getBlocks(clientId),
        [clientId]
    );

    useEffect(() => {
        if (!blockId) {
            setAttributes({ blockId: clientId });
        }
    }, []);

    useEffect(() => {
        if (innerBlocks.length > 0) {
            innerBlocks.forEach((block) => {
                updateBlockAttributes(block.clientId, {
                    className: `${navigationLayout} ${navigationLayout === "is-horizontal" ? navigationHorizontalAlign : navigationVerticalAlign} ${flexWrap ? "no-wrap" : ""}`, 
                    openSubmenusOnClick: dropdownOpenOnClick,
                    showSubmenuIcon: showDropdownIcon,
                    hasIcon: navBtnType,
                    overlayMenu: hamburgerMenu,
                });
            });
        }
    }, [navigationLayout, navigationHorizontalAlign, flexWrap, navigationVerticalAlign, dropdownOpenOnClick, showDropdownIcon, navBtnType, hamburgerMenu]);

    const blockProps = useBlockProps({
        className: `frontis-block fb-advanced-navigation-main-wrapper ${blockId}`,
    });

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
            <div {...blockProps}>
                <div className={`advanced-navigation-wrapper ${classHook}`}>
                    <div
                        className={`${blockId} advanced-navigation-inner-wrapper ${navigationLayout} ${
                            navigationLayout === "is-horizontal" ? navigationHorizontalAlign : navigationVerticalAlign
                        } ${showDropdownIcon ? "" : "remove-dropdown-icon"} ${
                            navBtnType ? "responsive-icon" : "responsive-text"
                        } ${hamburgerCloseIconAlign}`}
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