import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
    const { 
        blockID,
        blockStyle,
        x,
        y,
        w,
        h
        
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

    const style = {
        gridArea: `${(y || 0) + 1} / ${(x || 0) + 1} / ${(y || 0) + (h || 4) + 1} / ${(x || 0) + (w || 4) + 1}`,
    };

    const blockProps = useBlockProps({
        className: `grid-item-rendered ${blockID}`,
        style,
    });

    return (
        <div {...blockProps}>
            <InnerBlocks />
        </div>
    );
}
