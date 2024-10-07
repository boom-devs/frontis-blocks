import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

const save = ({ attributes }) => {
    const {
        blockId,
        classHook,
    } = attributes;

    const blockProps = useBlockProps.save();

    return (
        <>
            <div className={`frontis-parent-wrapper frontis-parent-${blockId} ${classHook} ${blockProps.className}`}>
                <div className={`frontis-column-wrapper ${blockId}`}>
                    <div className="frontis-column-inner">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        </>
    );
};

export default save;