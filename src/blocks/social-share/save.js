import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { blockID } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-social-share ${blockID}`,
    });

    return (
        <div {...blockProps}>
            <div className="social-share-parent-container">
                <InnerBlocks.Content />
            </div>
        </div>
    );
}