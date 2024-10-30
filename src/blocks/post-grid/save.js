import { useBlockProps } from '@wordpress/block-editor';
    
export default function save({ attributes }) {
    const {
        blockId,

    } = attributes;

    const blockProps = useBlockProps.save();


    return (
        <>
            <div {...blockProps} id={blockId}>
                <h1>Post Grid</h1>
            </div>
        </>
    );
}
