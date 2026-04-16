# Grid Layout Settings Backlog

Status: Draft
Date: 2026-04-16
Block: `frontis-blocks/grid-layout`
Companion block: `frontis-blocks/grid-item`

## Goal

Maintain a clear backlog of settings that should exist in the Grid Layout Builder so they can be implemented one by one without guessing scope each time.

This file is not for the already-implemented base layout engine. It is for settings polish, editor UX improvements, and per-item controls that should be added in later passes.

## Current Settings Already In Place

These settings already exist and should remain:

- `Columns` responsive
- `Row Height` responsive
- `Gap` responsive
- `Compaction Type`
- `Allow Overlap`
- `Add New Item`

## Recommended Default Values

These defaults should stay unless there is a product decision to change them:

- `Compaction Type: Vertical`
- `Allow Overlap: false`
- `Columns: Desktop 12, Tablet 8, Mobile 4`
- `Row Height: Desktop 40, Tablet 35, Mobile 30`
- `Gap: Desktop 10, Tablet 8, Mobile 6`

## File Targets

Most settings in this backlog will touch some combination of these files:

- `src/blocks/grid-layout/attributes.js`
- `src/blocks/grid-layout/inspector.js`
- `src/blocks/grid-layout/edit.js`
- `src/blocks/grid-layout/styling.js`
- `src/blocks/grid-layout/save.js`
- `src/blocks/grid-item/attributes.js`
- `src/blocks/grid-item/inspector.js`
- `src/blocks/grid-item/edit.js`
- `src/blocks/grid-item/save.js`

## Component Reuse Rule

Future settings work should prefer the existing shared inspector and control components already used in this codebase.

Use these first where they fit:

- `@Components/InspectorControls` as the main inspector wrapper
- `@Components/range` for responsive or unit-aware range inputs
- `@Components/responsive-control` when the UI needs explicit device switching
- `@Components/unit-control` for unit selection
- `@Components/select-control` or `@Components/gb-select-control` for select-based settings when shared behavior is useful
- `@Components/spacing` for spacing-style controls
- `@Components/visibility-control` for hide/show per-device controls

Use native WordPress controls directly only when a shared local component does not fit well:

- `PanelBody`
- `ToggleControl`
- `SelectControl`
- `Button`
- other standard `@wordpress/components` controls

Working preference:

1. reuse an existing local shared component if it already matches the setting
2. extend an existing shared component if the gap is small and the change is broadly useful
3. use a native WordPress control if a shared wrapper adds no value
4. create a brand-new custom component only if the setting cannot be implemented cleanly with the existing shared pieces

Important note:

- Do not introduce one-off inspector UI for Grid Layout if an existing shared component can handle the job.
- Keep new settings visually consistent with the rest of the plugin inspector experience.

## Priority Order

Recommended implementation order:

1. `Container Padding`
2. `Default New Item Width`
3. `Default New Item Height`
4. `Reset Current Breakpoint Layout`
5. `Reset All Layouts`
6. `Repack Layout`
7. `Copy Desktop Layout to Tablet`
8. `Copy Desktop Layout to Mobile`
9. `Show Grid Guides`
10. `Open Layout Mode After Add`
11. `Insert New Item After Selected`
12. `Auto Place New Item`
13. `Keep Items Inside Grid`
14. `Max Rows`
15. `Layout Preset`
16. Per-item size constraints
17. Per-item drag and resize restrictions
18. Per-item `Z-Index`

## Settings Spec

### 1. Container Padding

Priority: High
Placement: Parent inspector, `Grid Settings`
Type: Responsive range control

Purpose:

- Add inner spacing between the grid container edge and the first/last items.

Why it matters:

- Right now the user only controls column count, row height, and gap.
- Without container padding, the layout can feel visually tight against the block edge.

Recommended data model:

```js
containerPadding: {
	Desktop: "20",
	Tablet: "16",
	Mobile: "12",
}
containerPaddingUnits: {
	Desktop: "px",
	Tablet: "px",
	Mobile: "px",
}
```

Implementation notes:

- Apply to content mode generated CSS.
- Apply to layout mode canvas config so editor and content view stay aligned.
- Avoid using different math between editor preview and saved frontend CSS.

Acceptance criteria:

- Changing padding updates layout mode and content mode consistently.
- Saved output keeps the same visual spacing as editor.

### 2. Default New Item Width

Priority: High
Placement: Parent inspector, `Grid Settings` or `Layout Behavior`
Type: Responsive or global numeric control

Purpose:

- Control how many columns a newly added grid item spans by default.

Why it matters:

- Current item creation uses hardcoded defaults.
- Different users may want `3`, `4`, `6`, or full-width item creation.

Recommended data model:

```js
defaultItemWidth: {
	Desktop: "3",
	Tablet: "4",
	Mobile: "4",
}
```

Implementation notes:

- Use this in the `addGridItem()` creation flow.
- Clamp value against the current breakpoint column count.

Acceptance criteria:

- New items respect the chosen default width.
- Mobile width never exceeds mobile column count.

### 3. Default New Item Height

Priority: High
Placement: Parent inspector, `Grid Settings` or `Layout Behavior`
Type: Responsive or global numeric control

Purpose:

- Control how many grid rows a newly added item takes by default.

Why it matters:

- A heading-only card and a complex content card do not need the same starting height.

Recommended data model:

```js
defaultItemHeight: {
	Desktop: "4",
	Tablet: "4",
	Mobile: "4",
}
```

Implementation notes:

- Use this in the `addGridItem()` creation flow.
- Keep minimum valid value at `1`.

Acceptance criteria:

- New items open at the configured default height.

### 4. Reset Current Breakpoint Layout

Priority: High
Placement: Parent inspector, `Layout Behavior`
Type: Action button

Purpose:

- Reset only the active breakpoint layout without destroying other breakpoints.

Why it matters:

- Users often break one breakpoint while the others are still good.
- Resetting everything is too destructive.

Behavior:

- Rebuild the current breakpoint from the latest item list using default placement logic.

Implementation notes:

- Only replace `layouts[activeBreakpoint]`.
- Leave the other breakpoint layouts untouched.

Acceptance criteria:

- Desktop reset does not wipe Tablet or Mobile.
- Content mode updates immediately after reset.

### 5. Reset All Layouts

Priority: High
Placement: Parent inspector, `Layout Behavior`
Type: Destructive action button with confirmation

Purpose:

- Fully restore all breakpoint layouts to a clean generated state.

Why it matters:

- Needed when a layout becomes too messy to recover manually.

Behavior:

- Rebuild `Desktop`, `Tablet`, and `Mobile` layout arrays from current items.

Acceptance criteria:

- All breakpoints reset in one action.
- Confirmation is required before resetting.

### 6. Repack Layout

Priority: High
Placement: Parent inspector, `Layout Behavior`
Type: Action button

Purpose:

- Re-apply the current compaction logic to clean gaps without changing settings.

Why it matters:

- Users may want to tidy a layout after multiple manual moves.

Behavior:

- Run the current `Compaction Type` on the current breakpoint layout and persist the result.

Acceptance criteria:

- `Vertical` moves items upward to fill gaps.
- `Horizontal` packs left-to-right.
- `None` should leave the layout unchanged.

### 7. Copy Desktop Layout to Tablet

Priority: High
Placement: Parent inspector, `Layout Behavior`
Type: Action button

Purpose:

- Quickly seed the Tablet layout from Desktop instead of rebuilding from scratch.

Why it matters:

- Most users start with Desktop first.

Behavior:

- Copy Desktop item positions into Tablet layout.
- Clamp item width and x-position to Tablet column count.

Acceptance criteria:

- Tablet gets a usable starting point.
- Items remain inside Tablet bounds.

### 8. Copy Desktop Layout to Mobile

Priority: High
Placement: Parent inspector, `Layout Behavior`
Type: Action button

Purpose:

- Quickly seed the Mobile layout from Desktop.

Behavior:

- Copy Desktop item positions into Mobile layout.
- Clamp each item to Mobile columns.
- If needed, stack items downward safely.

Acceptance criteria:

- Mobile layout stays valid after copy.

### 9. Show Grid Guides

Priority: Medium
Placement: Parent inspector, `Layout Behavior`
Type: Toggle

Purpose:

- Let users show or hide the layout grid background in layout mode.

Why it matters:

- Some users want visual guides.
- Others want a cleaner editing surface.

Acceptance criteria:

- Toggle only affects layout mode visuals.
- No effect on saved frontend output.

### 10. Grid Overlay Opacity

Priority: Medium
Placement: Parent inspector, `Style` or `Layout Behavior`
Type: Range control

Purpose:

- Control how strong the layout guide pattern appears in layout mode.

Why it matters:

- Makes the editor more comfortable for different visual preferences.

Acceptance criteria:

- Only changes editor preview.
- Works together with `Show Grid Guides`.

### 11. Open Layout Mode After Add

Priority: Medium
Placement: Parent inspector, `Layout Behavior`
Type: Toggle

Purpose:

- Decide whether adding a new item automatically takes the user to layout mode.

Why it matters:

- Some users want immediate placement control.
- Others want to stay in content editing flow.

Recommended default:

- `true`

Acceptance criteria:

- New item behavior matches the toggle consistently.

### 12. Insert New Item After Selected

Priority: Medium
Placement: Parent inspector, `Layout Behavior`
Type: Toggle

Purpose:

- When adding a new item, prefer insertion near the selected item instead of always appending.

Why it matters:

- Faster authoring in larger grids.

Behavior:

- If an item is selected, the new item should be inserted after it in block order.
- If no item is selected, fall back to append behavior.

Acceptance criteria:

- Block order and layout insertion behavior stay predictable.

### 13. Auto Place New Item

Priority: Medium
Placement: Parent inspector, `Layout Behavior`
Type: Toggle

Purpose:

- Automatically place new items in the next valid open space.

Why it matters:

- Reduces manual cleanup for larger grids.

Recommended default:

- `true`

Acceptance criteria:

- New item starts in a non-colliding valid position.

### 14. Keep Items Inside Grid

Priority: Medium
Placement: Parent inspector, `Layout Behavior`
Type: Toggle

Purpose:

- Prevent drag or resize actions from producing invalid out-of-bounds positions.

Why it matters:

- Especially helpful when users work fast in layout mode.

Acceptance criteria:

- Items cannot be placed outside the allowed columns.
- Resize cannot exceed valid layout width.

### 15. Max Rows

Priority: Medium
Placement: Parent inspector, `Layout Behavior`
Type: Numeric control

Purpose:

- Limit the total vertical grid depth.

Why it matters:

- Useful for fixed-height sections or strict design systems.

Acceptance criteria:

- Drag and resize stop at the row limit.
- No invalid saved layout values are produced.

### 16. Start In Layout Mode

Priority: Low
Placement: Parent inspector, `Layout Behavior`
Type: Toggle

Purpose:

- Allow a block to open in layout mode by default when selected.

Why it matters:

- Some power users work mostly on placement first.

Risk:

- Can feel intrusive for content-first users.

Recommendation:

- Low priority.

### 17. Layout Preset

Priority: Medium
Placement: Parent inspector, `Layout Behavior`
Type: Select or preset buttons

Purpose:

- Apply starter arrangements such as `2-column`, `3-column`, `hero + sidebar`, or `masonry starter`.

Why it matters:

- Speeds up initial layout creation.

Acceptance criteria:

- Preset creates valid layouts for the current item count.
- Preset does not delete existing items.

## Per-Item Settings Spec

These settings belong to `grid-item`, not the parent grid block.

### 18. Disable Drag

Priority: Medium
Placement: Child inspector
Type: Toggle

Purpose:

- Prevent a specific item from being moved in layout mode.

Why it matters:

- Some anchor items should stay fixed while the rest of the layout changes.

Acceptance criteria:

- Dragging that item does nothing.
- Other items still remain editable.

### 19. Disable Resize

Priority: Medium
Placement: Child inspector
Type: Toggle

Purpose:

- Prevent a specific item from being resized.

Acceptance criteria:

- Resize handles are hidden or inactive for that item.

### 20. Min Width

Priority: Medium
Placement: Child inspector
Type: Numeric control

Purpose:

- Limit how small a grid item can become horizontally.

Acceptance criteria:

- Resize cannot go below the minimum width.

### 21. Min Height

Priority: Medium
Placement: Child inspector
Type: Numeric control

Purpose:

- Limit how small a grid item can become vertically.

Acceptance criteria:

- Resize cannot go below the minimum height.

### 22. Max Width

Priority: Medium
Placement: Child inspector
Type: Numeric control

Purpose:

- Limit how wide a grid item can become.

Acceptance criteria:

- Resize cannot exceed the maximum width.

### 23. Max Height

Priority: Medium
Placement: Child inspector
Type: Numeric control

Purpose:

- Limit how tall a grid item can become.

Acceptance criteria:

- Resize cannot exceed the maximum height.

### 24. Z-Index

Priority: Low
Placement: Child inspector
Type: Numeric control

Purpose:

- Control stacking order when overlap is enabled.

Why it matters:

- Only meaningful when `Allow Overlap` is on.

Acceptance criteria:

- Higher `z-index` item renders above lower ones in content mode and frontend.

### 25. Hide On Tablet

Priority: Low
Placement: Child inspector
Type: Toggle

Purpose:

- Hide an item on Tablet layout without deleting content.

Acceptance criteria:

- Tablet output hides the item.
- Desktop and Mobile remain unaffected.

### 26. Hide On Mobile

Priority: Low
Placement: Child inspector
Type: Toggle

Purpose:

- Hide an item on Mobile layout without deleting content.

Acceptance criteria:

- Mobile output hides the item.
- Desktop and Tablet remain unaffected.

## Not Recommended Right Now

These are possible later, but should not be prioritized now:

- custom drag handle selector
- custom resize handle visuals per block
- freeform absolute positioning
- per-breakpoint overlap toggle per item
- nested grid builder inside grid item as a formal feature

## Recommended Next 5 To Build

If implementation starts from this file, the best next five are:

1. `Container Padding`
2. `Default New Item Width`
3. `Default New Item Height`
4. `Reset Current Breakpoint Layout`
5. `Reset All Layouts`

## Working Rule For Future Implementation

When implementing any setting from this file:

1. keep layout mode and content mode visually aligned
2. avoid editor-only state that does not persist into saved `layouts`
3. update inspector copy so behavior is obvious to the user
4. prefer responsive parent settings where layout structure depends on breakpoint
5. prefer child settings only for item-specific behavior
6. prefer existing shared local components before creating new inspector UI
