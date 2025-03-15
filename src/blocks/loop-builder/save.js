import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockID,
        displayLayout = { type: 'flex', columns: 3 },
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-loop-builder-block ${blockID || ''}`,
        'data-layout': displayLayout.type,
        'data-columns': displayLayout.type === 'flex' ? displayLayout.columns : undefined,
    });

    // Different class structure for slider layout
    const innerBlocksClass = displayLayout.type === 'slider' 
        ? 'fb-loop-builder-inner swiper-wrapper' 
        : 'fb-loop-builder-inner';

    const innerBlocksProps = useInnerBlocksProps.save({
        className: innerBlocksClass,
    });

    // For slider layout, wrap inner blocks in swiper container
    if (displayLayout.type === 'slider') {
        return (
            <div {...blockProps}>
                <div className={`fb-loop-content layout-${displayLayout.type}`}>
                    <div className="swiper">
                        <div {...innerBlocksProps} />
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>
            </div>
        );
    }

    // Default layout
    return (
        <div {...blockProps}>
            <div className={`fb-loop-content layout-${displayLayout.type}`}>
                <div {...innerBlocksProps} />
            </div>
        </div>
    );
}