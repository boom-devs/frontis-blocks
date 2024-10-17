import React, { useState } from 'react';
import {
	DndContext,
	closestCenter,
	useSensor,
	useSensors,
	PointerSensor,
} from '@dnd-kit/core';
import {
	arrayMove,
	SortableContext,
	verticalListSortingStrategy,
	useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// SortableItem component for draggable elements
const SortableItem = ({ id }) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({ id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		padding: '10px',
		marginBottom: '10px',
		border: '1px solid black',
		backgroundColor: '#f0f0f0',
	};

	return (
		<div ref={setNodeRef} style={style} {...attributes} {...listeners}>
			{id}
		</div>
	);
};

// Component to handle each container
const Container = ({ id, items, setItems }) => {
	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (active.id !== over.id) {
			setItems((prevItems) => {
				const containerItems = prevItems[id];
				const oldIndex = containerItems.indexOf(active.id);
				const newIndex = over ? containerItems.indexOf(over.id) : 0; // Default to 0 if over is null
				return {
					...prevItems,
					[id]: arrayMove(containerItems, oldIndex, newIndex),
				};
			});
		}
	};

	return (
		<DndContext onDragEnd={handleDragEnd}>
			<h4>Container {id}</h4>
			<SortableContext items={items} strategy={verticalListSortingStrategy}>
				{items.length > 0 ? (
					items.map((itemId) => (
						<SortableItem key={itemId} id={itemId} />
					))
				) : (
					<div style={{ padding: '10px', color: '#aaa' }}>Drop items here</div>
				)}
			</SortableContext>
		</DndContext>
	);
};

// Main component for multiple containers
const MultipleContainers = () => {
	const [containers, setContainers] = useState({
		A: ['Item A1', 'Item A2'],
		B: ['Item B1', 'Item B2'],
		C: ['Item C1', 'Item C2'],
		D: ['Item D1', 'Item D2'],
	});

	const [containerCount, setContainerCount] = useState(4);

	const sensors = useSensors(useSensor(PointerSensor));

	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (!over) return;

		const [activeContainerId, activeItemId] = active.id.split('-');
		const [overContainerId] = over.id.split('-');

		if (activeContainerId !== overContainerId) {
			// Moving item between containers
			setContainers((prevContainers) => {
				const activeContainerItems = prevContainers[activeContainerId];
				const overContainerItems = prevContainers[overContainerId];
				const activeItemIndex = activeContainerItems.indexOf(activeItemId);

				const newActiveContainerItems = [...activeContainerItems];
				newActiveContainerItems.splice(activeItemIndex, 1);

				const newOverContainerItems = [...overContainerItems, activeItemId];

				return {
					...prevContainers,
					[activeContainerId]: newActiveContainerItems,
					[overContainerId]: newOverContainerItems,
				};
			});
		}
	};

	// Adding new container
	const addContainer = () => {
		const newContainerId = String.fromCharCode(65 + containerCount);
		setContainers((prev) => ({
			...prev,
			[newContainerId]: [],
		}));
		setContainerCount(containerCount + 1);
	};

	return (
		<div>
			<button onClick={addContainer}>Add Container</button>
			<DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
				<div style={{ display: 'flex', gap: '20px' }}>
					{Object.keys(containers).map((containerId) => (
						<div key={containerId} style={{ border: '1px solid gray', padding: '20px' }}>
							<SortableContext
								id={containerId}
								items={containers[containerId].map((item) => `${containerId}-${item}`)}
								strategy={verticalListSortingStrategy}
							>
								<h4>Container {containerId}</h4>
								{containers[containerId].length > 0 ? (
									containers[containerId].map((item) => (
										<SortableItem key={`${containerId}-${item}`} id={`${containerId}-${item}`} />
									))
								) : (
									<div style={{ padding: '10px', color: '#aaa' }}>Drop items here</div>
								)}
							</SortableContext>
						</div>
					))}
				</div>
			</DndContext>
		</div>
	);
};

export default MultipleContainers;
