import {
    closestCenter,
    defaultDropAnimationSideEffects,
    DndContext,
    DragOverlay,
    getFirstCollision,
    KeyboardSensor,
    MouseSensor,
    pointerWithin,
    rectIntersection,
    TouchSensor,
    useDroppable,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import {
    arrayMove,
    defaultAnimateLayoutChanges,
    SortableContext,
    useSortable,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { coordinateGetter as multipleContainersCoordinateGetter } from "../Utilities/multipleContainersKeyboardCoordinates";

import { Container } from "../Components/Container";
import { Item } from "../Components/Item";
import { createRange } from "../Utilities/createRange";

const animateLayoutChanges = (args) =>
  defaultAnimateLayoutChanges({ ...args, wasDragging: true });

function DroppableContainer({
  children,
  columns = 1,
  disabled,
  id,
  items,
  style,
  ...props
}) {
  const {
    active,
    attributes,
    isDragging,
    listeners,
    over,
    setNodeRef,
    transition,
    transform
  } = useSortable({
    id,
    data: {
      type: "container",
      children: items
    },
    animateLayoutChanges
  });
  const isOverContainer = over
    ? (id === over.id && active?.data.current?.type !== "container") ||
      items.includes(over.id)
    : false;

  return (
    <Container
      ref={disabled ? undefined : setNodeRef}
      style={{
        ...style,
        transition,
        transform: CSS.Translate.toString(transform),
        opacity: isDragging ? 0.5 : undefined
      }}
      hover={isOverContainer}
      handleProps={{
        ...attributes,
        ...listeners
      }}
      columns={columns}
      {...props}
    >
      {children}
    </Container>
  );
}

const dropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.5"
      }
    }
  })
};

const TRASH_ID = "void";
const PLACEHOLDER_ID = "placeholder";
const empty = [];

function getColor(id) {
  switch (String(id)[0]) {
    case "A":
      return "#7193f1";
    case "B":
      return "#ffda6c";
    case "C":
      return "#00bcd4";
    case "D":
      return "#ef769f";
  }
  return undefined;
}

function Trash({ id }) {
  const { setNodeRef, isOver } = useDroppable({
    id
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        left: "50%",
        marginLeft: -150,
        bottom: 20,
        width: 300,
        height: 60,
        borderRadius: 5,
        border: "1px solid",
        borderColor: isOver ? "red" : "#DDD"
      }}
    >
      Drop here to delete
    </div>
  );
}

function SortableItem({
  disabled,
  id,
  index,
  handle,
  renderItem,
  style,
  containerId,
  getIndex,
  wrapperStyle
}) {
  const {
    setNodeRef,
    setActivatorNodeRef,
    listeners,
    isDragging,
    isSorting,
    over,
    overIndex,
    transform,
    transition
  } = useSortable({
    id
  });

  function useMountStatus() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => setIsMounted(true), 500);
      return () => clearTimeout(timeout);
    }, []);

    return isMounted;
  }

  const mounted = useMountStatus();
  const mountedWhileDragging = isDragging && !mounted;

  return (
    <Item
      ref={disabled ? undefined : setNodeRef}
      value={id}
      dragging={isDragging}
      sorting={isSorting}
      handle={handle}
      handleProps={handle ? { ref: setActivatorNodeRef } : undefined}
      index={index}
      wrapperStyle={wrapperStyle({ index })}
      style={style({
        index,
        value: id,
        isDragging,
        isSorting,
        overIndex: over ? getIndex(over.id) : overIndex,
        containerId
      })}
      color={getColor(id)}
      transition={transition}
      transform={transform}
      fadeIn={mountedWhileDragging}
      listeners={listeners}
      renderItem={renderItem}
    />
  );
}

export const MultipleContainers = ({
  adjustScale = false,
  itemCount = 3,
  cancelDrop,
  columns,
  handle = false,
  items: initialItems,
  containerStyle,
  coordinateGetter = multipleContainersCoordinateGetter,
  getItemStyles = () => ({}),
  wrapperStyle = () => ({}),
  minimal = false,
  modifiers,
  renderItem,
  strategy = verticalListSortingStrategy,
  trashable = false,
  vertical = false,
  scrollable
}) => {
  const [items, setItems] = useState(
    () =>
      initialItems || {
        A: createRange(itemCount, (index) => `A${index + 1}`),
        B: createRange(itemCount, (index) => `B${index + 1}`),
        C: createRange(itemCount, (index) => `C${index + 1}`),
        D: createRange(itemCount, (index) => `D${index + 1}`)
      }
  );
  const [containers, setContainers] = useState(
    Object.keys(items)
  );
  const [activeId, setActiveId] = useState(null);
  const lastOverId = useRef(null);
  const recentlyMovedToNewContainer = useRef(false);
  const isSortingContainer = activeId ? containers.includes(activeId) : false;

  const collisionDetectionStrategy = useCallback(
    (args) => {
      if (activeId && activeId in items) {
        return closestCenter({
          ...args,
          droppableContainers: args.droppableContainers.filter(
            (container) => container.id in items
          )
        });
      }

      const pointerIntersections = pointerWithin(args);
      const intersections =
        pointerIntersections.length > 0
          ? pointerIntersections
          : rectIntersection(args);
      let overId = getFirstCollision(intersections, "id");

      if (overId != null) {
        if (overId === TRASH_ID) {
          return intersections;
        }

        if (overId in items) {
          const containerItems = items[overId];

          if (containerItems.length > 0) {
            overId = closestCenter({
              ...args,
              droppableContainers: args.droppableContainers.filter(
                (container) =>
                  container.id !== overId &&
                  containerItems.includes(container.id)
              )
            })[0]?.id;
          }
        }

        lastOverId.current = overId;

        return [{ id: overId }];
      }

      if (recentlyMovedToNewContainer.current) {
        lastOverId.current = activeId;
      }

      return lastOverId.current ? [{ id: lastOverId.current }] : [];
    },
    [activeId, items]
  );

  const [clonedItems, setClonedItems] = useState(null);
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter
    })
  );

  const findContainer = (id) => {
    if (id in items) {
      return id;
    }
    return Object.keys(items).find((key) => items[key].includes(id));
  };

  const getIndex = (id) => {
    const container = findContainer(id);
    if (!container) {
      return -1;
    }
    const index = items[container].indexOf(id);
    return index;
  };

  const onDragCancel = () => {
    if (clonedItems) {
      setItems(clonedItems);
    }
    setActiveId(null);
    setClonedItems(null);
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      recentlyMovedToNewContainer.current = false;
    });
  }, [items]);

  function renderSortableItemDragOverlay(id) {
    return (
      <Item
        value={id}
        handle={handle}
        style={getItemStyles({
          containerId: findContainer(id),
          overIndex: -1,
          index: getIndex(id),
          value: id,
          isSorting: true,
          isDragging: true,
          isDragOverlay: true
        })}
        color={getColor(id)}
        wrapperStyle={wrapperStyle({ index: 0 })}
        renderItem={renderItem}
        dragOverlay
      />
    );
  }

  function onDragEnd(event) {
    const { active, over } = event;
    const { id: activeId } = active;

    if (activeId === over?.id) {
      return;
    }

    if (over) {
      const overId = over.id;
      const overContainer = findContainer(overId);
      const activeContainer = findContainer(activeId);

      if (activeContainer === overContainer) {
        const index = getIndex(activeId);
        const newItems = arrayMove(items[overContainer], index, getIndex(overId));

        setItems((prev) => ({
          ...prev,
          [overContainer]: newItems
        }));
      } else if (overId === TRASH_ID) {
        setItems((prev) => {
          const next = { ...prev };
          const container = next[activeContainer];
          next[activeContainer] = container.filter((id) => id !== activeId);
          return next;
        });
      } else {
        setItems((prev) => {
          const next = { ...prev };
          const activeItems = next[activeContainer];
          const newActiveItems = activeItems.filter((id) => id !== activeId);
          next[activeContainer] = newActiveItems;

          const newOverItems = next[overContainer];
          next[overContainer] = [...newOverItems.slice(0, getIndex(overId)), activeId, ...newOverItems.slice(getIndex(overId))];

          return next;
        });
      }
    }

    setActiveId(null);
  }

  const onDragStart = (event) => {
    const { active } = event;
    setActiveId(active.id);
    setClonedItems(items);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={collisionDetectionStrategy}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragCancel={onDragCancel}
      modifiers={modifiers}
      dropAnimation={dropAnimation}
    >
      <SortableContext items={containers} strategy={strategy}>
      {containers.map((containerId) => (
        <DroppableContainer
            key={containerId}
            id={containerId}
            items={items[containerId]}
            style={containerStyle}
            columns={columns}
        >
            {items[containerId].map((id, index) => (
            <SortableItem
                key={id}
                id={id}
                index={index}
                containerId={containerId}
                handle={handle}
                style={getItemStyles}
                wrapperStyle={wrapperStyle}
                renderItem={renderItem}
                getIndex={getIndex}  // Pass getIndex to SortableItem
            />
            ))}
        </DroppableContainer>
        ))}
        {trashable && <Trash id={TRASH_ID} />}
      </SortableContext>
      <DragOverlay>{activeId ? renderSortableItemDragOverlay(activeId) : null}</DragOverlay>
    </DndContext>
  );
};
