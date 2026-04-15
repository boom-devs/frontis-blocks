# Grid Layout Builder Roadmap

Status: In Progress
Date: 2026-04-15
Blocks: `frontis-blocks/grid-layout` and `frontis-blocks/grid-item`
Goal: Build an editor-only drag/resize grid builder where each grid item can contain any Gutenberg blocks, while the frontend renders from stored layout data using CSS Grid.

## Progress Snapshot

Completed on 2026-04-15:

- `Item 1` solved
- `Item 2` solved
- `Item 3` solved
- `Item 4` solved
- `Item 5` solved
- `Item 6` solved

Current focus:

- `Item 7: Refine two-mode editor UX`

## Product Direction

The target UX is:

1. User inserts one `Grid Layout` block.
2. User adds multiple `Grid Item` blocks inside it.
3. In `Layout Mode`, user can move, resize, and rearrange items visually like the React Grid Layout showcase.
4. In `Content Mode`, user can click inside each grid item and design it with any allowed inner blocks.
5. On the frontend, no drag-and-drop runtime is needed. Stored layout data is converted into CSS Grid rules.

Core decision:

- Parent block owns all layout data.
- Child block owns content only.
- Editor uses two modes: `Layout Mode` and `Content Mode`.
- Frontend uses generated CSS, not `react-grid-layout`.

## Current Reality

The current implementation already has a basic parent/child block structure, but it is not stable enough for the intended builder experience.

Known blockers:

- two-mode editor UX still feels rough
- content mode still needs cleaner authoring polish
- migration compatibility should be validated against older saved blocks
- item-level controls are not added yet

## Final Architecture

### Parent block responsibilities

File targets:

- `src/blocks/grid-layout/attributes.js`
- `src/blocks/grid-layout/edit.js`
- `src/blocks/grid-layout/inspector.js`
- `src/blocks/grid-layout/styling.js`
- `src/blocks/grid-layout/save.js`

Parent owns:

- breakpoint layouts
- grid configuration per breakpoint
- layout mode state in editor
- add/remove/sync of grid items
- generated frontend CSS

### Child block responsibilities

File targets:

- `src/blocks/grid-item/attributes.js`
- `src/blocks/grid-item/edit.js`
- `src/blocks/grid-item/save.js`
- `src/blocks/grid-item/block.json`

Child owns:

- stable item identity
- inner block content
- optional item-level presentation settings in later phases

Child should not be the source of truth for position and size after the refactor.

## Data Model

### Parent attributes

Keep and standardize:

- `blockID`
- `blockStyle`
- `cols`
- `rowHeight`
- `rowHeightUnits`
- `gutter`
- `gutterUnits`
- `compactType`
- `allowOverlap`
- `layouts`

`layouts` shape:

```js
{
	Desktop: [{ i: 'item-1', x: 0, y: 0, w: 4, h: 4 }],
	Tablet: [{ i: 'item-1', x: 0, y: 0, w: 4, h: 4 }],
	Mobile: [{ i: 'item-1', x: 0, y: 0, w: 4, h: 4 }],
}
```

### Child attributes

Keep only what is still needed for migration and identity:

- `blockID`
- `id`

Position attributes to phase out from active editor logic:

- `gridColumnStart`
- `gridRowStart`
- `gridColumnSpan`
- `gridRowSpan`

These can stay temporarily for migration compatibility, but parent `layouts` must become the canonical source.

## Editor UX Model

### Mode 1: Layout Mode

Purpose:

- visual drag and resize
- breakpoint switching
- layout operations only

Behavior:

- show overlay boxes only
- disable direct inner block editing
- use `react-grid-layout`
- update parent `layouts`

### Mode 2: Content Mode

Purpose:

- insert and edit any Gutenberg blocks inside each grid item

Behavior:

- render normal `InnerBlocks`
- no draggable overlay
- same stored layout is previewed through CSS Grid

## Execution Order

This is the order to implement and verify items one by one.

### Item 1: Fix width measurement and RGL mounting
Status: Solved on 2026-04-15

Files:

- `src/blocks/grid-layout/edit.js`

Tasks:

- replace incorrect `ref` usage with `containerRef`
- use the hook return shape correctly
- only render layout canvas after width is ready
- remove accidental dependence on fallback width behavior

Done when:

- layout canvas tracks editor container width correctly

Completed notes:

- `useContainerWidth()` now uses `containerRef`
- layout canvas waits for measured width before rendering
- layout mode no longer depends on accidental fallback width behavior

### Item 2: Make parent layout the real source of truth
Status: Solved on 2026-04-15

Files:

- `src/blocks/grid-layout/edit.js`
- `src/blocks/grid-item/edit.js`
- `src/blocks/grid-item/save.js`

Tasks:

- stop relying on child inline `gridArea` in editor
- derive content-mode placement from parent-generated CSS
- keep child block focused on identity and content

Done when:

- desktop, tablet, and mobile preview all come from parent layout data

Completed notes:

- child inline `gridArea` dependency removed from active editor flow
- parent-generated CSS drives content-mode preview
- child block is now focused on identity and content

### Item 3: Fix stable item identity and duplication safety
Status: Solved on 2026-04-15

Files:

- `src/blocks/grid-item/attributes.js`
- `src/blocks/grid-item/edit.js`
- `src/utils/useBlockIdGenerator.js`
- `src/blocks/grid-layout/edit.js`

Tasks:

- guarantee every `grid-item` has a unique `id`
- detect duplicated child items and regenerate ID safely
- ensure parent `layouts` keys always map to the correct child block

Done when:

- duplicating an item does not produce selector collision or layout corruption

Completed notes:

- each `grid-item` now self-heals its `id` from `clientId`
- parent layout sync keys against the resolved child item ID

### Item 4: Harden add/remove/sync flow
Status: Solved on 2026-04-15

Files:

- `src/blocks/grid-layout/edit.js`

Tasks:

- clean layout entries when items are removed
- handle empty state without leaving stale layout data
- ensure newly added items get sane defaults for all breakpoints

Done when:

- add, duplicate, remove, and delete-all flows all leave valid layout state

Completed notes:

- parent layouts now normalize from actual inner blocks
- removed items are dropped from stored layouts
- new items receive sane defaults per breakpoint

### Item 5: Revalidate layout when grid config changes
Status: Solved on 2026-04-15

Files:

- `src/blocks/grid-layout/edit.js`
- `src/blocks/grid-layout/styling.js`

Tasks:

- clamp item `x` and `w` when `cols` changes
- normalize layout per breakpoint
- prevent generated CSS from producing overflow-only broken placements

Done when:

- lowering columns does not break existing items

Completed notes:

- layout items are clamped and normalized against the current column count
- generated CSS now uses normalized parent layout values

### Item 6: Simplify and correct unit handling
Status: Solved on 2026-04-15

Files:

- `src/blocks/grid-layout/inspector.js`
- `src/blocks/grid-layout/edit.js`
- `src/blocks/grid-layout/styling.js`

Tasks:

- decide whether editor RGL should support only pixel-based `rowHeight` and `gutter`
- if yes, restrict UI to `px`
- if no, add a proper conversion strategy for editor runtime

Recommended for v1:

- `rowHeight` and `gutter` use `px` only

Done when:

- inspector, info bar, RGL runtime, and generated CSS all agree on units

Completed notes:

- v1 decision applied: `rowHeight` and `gutter` are treated as `px`
- inspector and runtime behavior now match that decision

### Item 7: Refine two-mode editor UX
Status: Completed

Files:

- `src/blocks/grid-layout/edit.js`
- `src/blocks/grid-layout/editor.scss`

Tasks:

- make mode switching explicit
- improve layout overlay readability
- keep content mode easy to edit
- show clear empty state and add-item action

Done when:

- mode switching feels intentional and does not interfere with normal block editing

Planned sub-focus:

- reduce visual friction in content mode
- make layout mode actions more obvious
- improve the editor feel shown in the current screenshot
- decide whether layout mode should expose quick item delete/select actions

Subtask progress:

- `7.1` solved on 2026-04-15: empty `grid-item` appender cleanup
- `7.2` solved on 2026-04-15: content mode spacing and visual polish for populated items
- `7.3` solved on 2026-04-15: layout mode header and action clarity
- `7.4` solved on 2026-04-15: quick item select/edit/delete actions reviewed and added

### Item 8: Add migration compatibility layer
Status: Completed

Files:

- `src/blocks/grid-layout/edit.js`
- `src/blocks/grid-layout/styling.js`

Tasks:

- map old child position attributes into parent layouts if needed
- avoid breaking already saved content during transition

Done when:

- existing saved blocks can still open without losing layout

Completed notes:

- legacy child position attributes now hydrate parent `layouts` in-memory before sync
- generated CSS uses resolved fallback layouts during editor recovery

### Item 9: Add item-level controls after foundation is stable
Status: Pending

Files:

- `src/blocks/grid-item/inspector.js` `[new]`
- `src/blocks/grid-item/attributes.js`
- `src/blocks/grid-item/edit.js`
- `src/blocks/grid-item/save.js`

Later-phase features:

- background
- border radius
- padding
- min height
- z-index
- item lock or static mode

Done when:

- individual grid items can be styled without weakening layout integrity

## V1 Scope

Must ship in v1:

- parent-driven layout state
- layout mode and content mode
- add, move, resize, remove items
- desktop, tablet, mobile layouts
- frontend CSS Grid output
- duplicate-safe item IDs
- stable editor preview

Do not force into v1:

- preset templates
- fancy animations
- drag from outside
- advanced constraints UI
- custom resize handles per item
- overlap-heavy design tooling

## Validation Checklist

Each implementation item should be verified against this list:

- block inserts without console errors
- item add works
- item duplicate works
- item delete works
- layout survives save and reload
- desktop, tablet, and mobile all persist separately
- content mode remains editable
- frontend output matches saved layout closely

## Next Action

Start with `Item 7: Refine two-mode editor UX`.

This is the next blocker because the foundation is now stable, but the editing experience still needs to feel cleaner and more intentional before adding more features.
