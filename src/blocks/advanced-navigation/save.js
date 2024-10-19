import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save({ attributes }) {
    const {
        blockId,
        layout,
        navAlign,
        preset,
        verticalPreset,
        showDropdownIcon,
        navBtnType,
        navVerticalAlign,
        hamburgerCloseIconAlign,
        classHook,
    } = attributes;

    const layoutPreset = layout === "is-horizontal" ? preset : verticalPreset;

    const blockProps = useBlockProps.save({
        className: classnames(`frontis-advanced-navigation-wrapper`),
    });

    return (
        <div {...blockProps}>
            <div className={`frontis-parent-${blockId} ${classHook}`}>
                <div
                    className={`${blockId} frontis-advanced-navigation-inner ${layout} ${layoutPreset} ${
                        layout === "is-horizontal" ? navAlign : navVerticalAlign
                    } ${showDropdownIcon ? "" : "remove-dropdown-icon"} ${
                        navBtnType ? "responsive-icon" : "responsive-text"
                    } ${hamburgerCloseIconAlign}`}
                >
                    <div className="frontis-nav-contents">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        </div>
    );
}