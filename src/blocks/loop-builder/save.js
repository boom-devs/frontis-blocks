import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockID,
        displayLayout = { type: 'flex', columns: 3 },
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-loop-builder-block ${blockID || ''}`,
    });

    const innerBlocksProps = useInnerBlocksProps.save({
        className: 'fb-loop-builder-inner',
    });

    return (
        <div {...blockProps}>
            <div className={`fb-loop-content layout-${displayLayout.type}`}>
                <div {...innerBlocksProps} />
            </div>
        </div>
    );
}