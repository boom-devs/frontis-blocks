import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockId,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-critical-css-area ${blockId}`,
    });

    return (
        <>
            <div {...blockProps}>
                <div className={`fb-critical-css-wrapper`}>

                </div>
            </div>
        </>
    );
}
