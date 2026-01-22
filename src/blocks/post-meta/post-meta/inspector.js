import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { PanelBody, BaseControl, Button, ButtonGroup, SelectControl } from '@wordpress/components';

import SortableItem from './sortableItem';
import FB_InspectorControls from '@Components/InspectorControls';
import { TEXT_ALIGN, PRESETS } from './constants/constants';
import { useDeviceType } from '@Config/displayType';
import generateSvgIcon from "@Utils/generateSvgIcon";

export default function Inspector({ attributes, setAttributes, clientId }) {
    const { blockID, metaIconFrontEnd, metaIcon, postMetaterms } = attributes;
    const deviceType = useDeviceType();

	/**
	 * Generate SVG Icons for Icon
	 */
	useEffect(() => {
		const updatedItems = postMetaterms.map(item => {
			// If front-end icon is empty, generate it from metaIcon
			if (!item.metaIconFrontEnd && item.metaIcon) {
				return {
					...item,
					metaIconFrontEnd: generateSvgIcon(item.metaIcon),
				};
			}
			return item;
		});

		setAttributes({ postMetaterms: updatedItems });
	}, []); // run once on block mount

    // Set blockID based on clientId
    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({ blockID: "fb-post-meta-" + clientId.slice(0, 8) });
        }
    }, [clientId]);

    // Drag & drop sorting
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = postMetaterms.findIndex(item => item.id === active.id);
            const newIndex = postMetaterms.findIndex(item => item.id === over.id);
            setAttributes({ postMetaterms: arrayMove(postMetaterms, oldIndex, newIndex) });
        }
    };

// Add new meta item
	const handleAddItem = () => {
		const newItem = {
			id: `item-${postMetaterms.length + 1}`,
			metaIcon: 'behance',
			metaIconFrontEnd: generateSvgIcon('behance'), // generate immediately
			metaType: 'author',
			metaLabel: 'Author',
		};

		setAttributes({ postMetaterms: [...postMetaterms, newItem] });
	};

    // Update item
	const handleChangeItem = (id, key, value) => {
		const updatedItems = postMetaterms.map(item => {
			if (item.id === id) {
				const updated = { ...item, [key]: value };

				if (key === 'metaIcon') {
					updated.metaIconFrontEnd = generateSvgIcon(value);
				}

				return updated;
			}
			return item;
		});

		setAttributes({ postMetaterms: updatedItems });
	};

    // Delete item
    const handleDeleteItem = (id) => {
        setAttributes({ postMetaterms: postMetaterms.filter(item => item.id !== id) });
    };

    // Duplicate item
    const handleDuplicateItem = (id) => {
        const itemToDuplicate = postMetaterms.find(item => item.id === id);
        if (itemToDuplicate) {
            const newItem = { ...itemToDuplicate, id: `item-${postMetaterms.length + 1}` };
            setAttributes({ postMetaterms: [...postMetaterms, newItem] });
        }
    };

    // General controls
    const generalControls = (
        <PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
            <BaseControl label={__("Post Meta Items", "frontis-blocks")}>
                <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={postMetaterms.map(item => item.id)}>
                        <ul className='dnd-items-wrapper'>
                            {postMetaterms.map((item, index) => (
                                <SortableItem
                                    key={item.id}
                                    id={item.id}
                                    item={item}
                                    index={index}
                                    handleChangeItem={handleChangeItem}
                                    handleDeleteItem={handleDeleteItem}
                                    handleDuplicateItem={handleDuplicateItem}
                                />
                            ))}
                        </ul>
                    </SortableContext>
                </DndContext>
                <Button isPrimary onClick={handleAddItem}>
                    {__("Add Meta Item", "frontis-blocks")}
                </Button>
            </BaseControl>
        </PanelBody>
    );

    return <FB_InspectorControls generalControls={generalControls} />;
}
