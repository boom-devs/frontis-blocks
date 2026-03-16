import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
    const { 
        blockID,
        blockStyle,
        id,
        gridColumnStart,
        gridRowStart,
        gridColumnSpan,
        gridRowSpan,
        
    } = attributes;

    // Handle block ID generation
    useBlockIdGenerator({
        clientId,
        blockID,
        blockPrefix: 'fb-grid-item',
        isSelected,
        attributes,
        setAttributes,
    });

    // Inline gridArea for editor content mode positioning
    const style = {
        gridArea: `${(gridRowStart || 0) + 1} / ${(gridColumnStart || 0) + 1} / ${(gridRowStart || 0) + (gridRowSpan || 4) + 1} / ${(gridColumnStart || 0) + (gridColumnSpan || 4) + 1}`,
    };

    const blockProps = useBlockProps({
        className: `grid-item-rendered ${blockID}`,
        style,
        'data-grid-id': id,
    });

    return (
        <div {...blockProps}>
            <InnerBlocks />
        </div>
    );
}
