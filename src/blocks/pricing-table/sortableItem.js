import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TextControl, TextareaControl, Button, ButtonGroup, BaseControl } from '@wordpress/components';
import FBIconPicker from "../../components/icon-picker";

import {
    ICON_ALIGN,
} from "./constants/constants";

export default function SortableItem({ id, item, handleChangeItem, handleDeleteItem }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const [isOpen, setIsOpen] = useState(false);
    const [FeatureIconAlign, setFeatureIconAlign] = useState( ICON_ALIGN[1].value );

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const toggleOpen = () => setIsOpen(!isOpen);

    const iconHandler = (IconName) => {
        handleChangeItem(item.id, 'FeatureIcon', IconName);
    };

    const handleAlignmentChange = (newAlignment) => {
        setFeatureIconAlign(newAlignment);
        handleChangeItem(item.id, 'FeatureIconAlign', newAlignment);
    };
    
    return (
        <li className="sortable-item" ref={setNodeRef} {...attributes} style={style}>
            <div className="sortable-header">
                {/* Title toggle */}
                <span className="sortable-title" onClick={toggleOpen}>
                    {item.Title || __("Default Title", "frontis-blocks")}
                </span>

                {/* Sort button */}
                <span className="sortable-sort" {...listeners} style={{ cursor: 'grab' }}>
                    <Button icon="move" label={__("Sort", "frontis-blocks")} />
                </span>

                {/* Delete button */}
                <span className="sortable-delete">
                    <Button 
                        icon="trash" 
                        label={__("Delete", "frontis-blocks")} 
                        onClick={() => handleDeleteItem(item.id)} 
                    />
                </span>
            </div>

            {isOpen && (
                <div className="sortable-item-content">

                    <TextControl
                        label={__("Title", "frontis-blocks")}
                        value={item.Title}
                        onChange={(value) => handleChangeItem(item.id, 'Title', value)}
                    />

                    <div className='fb-feature-icon-wrapper'>
                        <BaseControl
                            label={__("Icon", "frontis-blocks")}
                            className="fb-feature-icon"
                        >
                            <ButtonGroup className="fb-feature-icon-group-btn">
                                {ICON_ALIGN.map((alignItem, key) => (
                                    <Button
                                        key={key}
                                        onClick={() => handleAlignmentChange(alignItem.value)}
                                        className={`fb-feature-icon-single-btn ${FeatureIconAlign === alignItem.value ? 'active' : ''}`}
                                    >
                                        {alignItem.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                            { FeatureIconAlign === 'icon' && (
                                <FBIconPicker value={item.FeatureIcon} setIconHandler={iconHandler} />
                            )}
                        </BaseControl>
                    </div>
                </div>
            )}
        </li>
    );
}
