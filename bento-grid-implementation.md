# Bento Grid Implementation Plan (Structured Approach)

This plan outlines a step-by-step approach to implementing the Bento Grid functionality. We will proceed one module at a time to ensure stability and precision.

## Phase 1: Foundation & Attribute Standardization
Standardize the attribute naming and structure to align with CSS Grid and Frontis responsive standards.

- **Grid Layout**: Convert `cols`, `rowHeight`, and `gutter` to responsive objects `{ Desktop, Tablet, Mobile }`.
- **Grid Item**: Rename `x, y, w, h` to `gridColumnStart, gridRowStart, gridColumnSpan, gridRowSpan`.

## Phase 2: Dynamic Styling Engine
Implement the `styling.js` pattern for real-time CSS generation.

- Create `styling.js` for both blocks that outputs pure CSS.
- Integrate `DynamicCSSLoader` in `edit.js` to render these styles in the editor.
- Store generated CSS in the `blockStyle` attribute for frontend usage.

## Phase 3: Layout Mode Refinement
Enhance the user experience for building the grid.

- **Layout Mode**: A dedicated mode for dragging and resizing items.
- **Content Mode**: A standard Gutenberg experience for adding blocks inside grid items.
- Ensure the parent block correctly updates child attributes during `onLayoutChange`.

## Phase 4: Premium Inspector Controls
Replace default Gutenberg controls with custom Frontis (`FB_`) components.

- Use `FB_Range` for all numeric sliders (with responsive support).
- Use `FB_SwitcherControl` for layout orientation and toggles.
- Use `FB_Spacing` for interior padding.
- Use `FB_BackgroundColorControl` for backgrounds.

## Phase 5: Frontend & Save Synchronization
Ensure the blocks look identical in the editor and on the live site.

- Update `save.js` to rely exclusively on the `blockID` class and `blockStyle` CSS.
- Remove all inline styles from saved HTML.

## Phase 6: Verification
- Test responsiveness across breakpoints (1024px, 767px).
- Verify that stashing/re-importing attributes works as expected.
