import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function SortableItem({ id, item, handleChangeItem }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <PanelBody
                title={__(item.title || "Default Title", "frontis-blocks")}
                initialOpen={open}
            >
                <TextControl
                    label={__("Title", "frontis-blocks")}
                    value={item.title}
                    onChange={(value) => handleChangeItem(item.id, 'title', value)}
                />
                <TextareaControl
                    label={__("Description", "frontis-blocks")}
                    value={item.description}
                    onChange={(value) => handleChangeItem(item.id, 'description', value)}
                />
            </PanelBody>
        </div>
    );
}