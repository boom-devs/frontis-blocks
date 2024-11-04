import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
    InnerBlocks,
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { useSelect, useDispatch } from "@wordpress/data";
import classnames from "classnames";

import Inspector from "./inspector";

export default function Edit({ attributes, setAttributes, className, clientId, isSelected }) {
    const {
        blockId,
        layout,
        navAlign,
        preset,
        verticalPreset,
        dropdownOpenOnClick,
        navBtnType,
        showDropdownIcon,
        flexWrap,
        navVerticalAlign,
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
                    className: `${layout} ${layout === "is-horizontal" ? navAlign : navVerticalAlign} ${flexWrap ? "no-wrap" : ""}`,
                    openSubmenusOnClick: dropdownOpenOnClick,
                    showSubmenuIcon: showDropdownIcon,
                    hasIcon: navBtnType,
                    overlayMenu: hamburgerMenu,
                });
            });
        }
    }, [layout, navAlign, flexWrap, navVerticalAlign, dropdownOpenOnClick, showDropdownIcon, navBtnType, hamburgerMenu]);

    const blockProps = useBlockProps({
        className: classnames(className, `frontis-guten-block-main-parent-wrapper`),
    });

    const layoutPreset = layout === "is-horizontal" ? preset : verticalPreset;

    return (
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}
            <div {...blockProps}>
                <div className={`frontis-parent-wrapper frontis-parent-${blockId} ${classHook}`}>
                    <div
                        className={`${blockId} frontis-advanced-navigation-wrapper ${layout} ${layoutPreset} ${
                            layout === "is-horizontal" ? navAlign : navVerticalAlign
                        } ${showDropdownIcon ? "" : "remove-dropdown-icon"} ${
                            navBtnType ? "responsive-icon" : "responsive-text"
                        } ${hamburgerCloseIconAlign}`}
                    >
                        <div className="frontis-nav-contents">
                            <InnerBlocks
                                templateLock={false}
                                template={[
                                    [
                                        "core/navigation",
                                        { className: `${layout} ${navAlign}` },
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