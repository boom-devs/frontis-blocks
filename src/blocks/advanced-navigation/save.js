import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockId,
        navigationLayout,
        navigationHorizontalAlign,
        showDropdownIcon,
        navBtnType,
        navigationVerticalAlign,
        hamburgerCloseIconAlign,
        classHook,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `frontis-block fb-advanced-navigation-main-wrapper ${blockId}`,
    });

    return (
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
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        </div>
    );
}