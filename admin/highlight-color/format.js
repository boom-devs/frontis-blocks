import { __ } from '@wordpress/i18n';
import { 
    registerFormatType, 
    toggleFormat, 
    removeFormat 
} from '@wordpress/rich-text';
import { 
    RichTextToolbarButton, 
    ColorPalette 
} from '@wordpress/block-editor';
import { 
    ToolbarGroup, 
    Popover 
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { highlight } from '@wordpress/icons'; // WP built-in highlight icon

const FORMAT_NAME = 'frontis-blocks/highlight';

const HighlightEdit = ({ isActive, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const applyHighlight = (color) => {
        if (!color) {
            // Clear highlight
            onChange(removeFormat(value, FORMAT_NAME));
            return;
        }

        onChange(
            toggleFormat(value, {
                type: FORMAT_NAME,
                attributes: {
                    style: `background-color: ${color};`,
                },
            })
        );
        setIsOpen(false);
    };

    return (
        <ToolbarGroup>
            <RichTextToolbarButton
                icon={highlight}
                title={__('Highlight', 'frontis-blocks')}
                onClick={() => setIsOpen(!isOpen)}
                isActive={isActive}
            />

            {isOpen && (
                <Popover position="bottom center" onClose={() => setIsOpen(false)}>
                    <div style={{ padding: '10px', width: '220px' }}>
                        <ColorPalette
                            value={null}
                            onChange={applyHighlight}
                        />
                    </div>
                </Popover>
            )}
        </ToolbarGroup>
    );
};

registerFormatType(FORMAT_NAME, {
    title: __('Highlight', 'frontis-blocks'),
    tagName: 'mark',
    className: null,
    attributes: {
        style: 'style',
    },
    edit: HighlightEdit,
});
