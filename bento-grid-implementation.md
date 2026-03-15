# 🧱 Bento Grid — Detailed Implementation Plan

> **Status:** Planning Phase  
> **Date:** 2026-03-15  
> **Blocks:** `frontis-blocks/grid-layout` + `frontis-blocks/grid-item`  
> **Key Dependency:** `react-grid-layout` v2.2.2

---

## 📌 Current State Analysis

### What Exists Already ✅

| Area | Status | Notes |
|------|--------|-------|
| Block Registration | ✅ Done | Both blocks registered in `BlockList.php` |
| `react-grid-layout` | ✅ Installed | v2.2.2 in `package.json` |
| Dual-mode Editor | ✅ Basic | Layout Mode (RGL) + Content Mode (CSS Grid) |
| Grid Item Attributes | ✅ Standardized | `gridColumnStart`, `gridRowStart`, `gridColumnSpan`, `gridRowSpan` |
| `gridArea` based positioning | ✅ Working | Both edit.js and save.js use `gridArea` CSS |
| Inspector Controls | ✅ Basic | Columns, Row Height, Gutter, Compaction, Overlap |
| Add Grid Item | ✅ Working | Toolbar button + Inspector button + Empty state button |
| Editor Styling | ✅ Basic | Layout mode with grid overlay, item boxes with drag handles |

### What's Missing / Needs Work ❌

| Area | Priority | Description |
|------|----------|-------------|
| Responsive Layout | 🔴 Critical | No Tablet/Mobile layout support at all |
| Grid Item Inspector | 🔴 Critical | No inspector controls for individual grid items |
| Preset Templates | 🟡 Important | No pre-built Bento Grid templates to start from |
| Grid Item Styling | 🟡 Important | No background, border, padding controls for items |
| Frontend Responsiveness | 🔴 Critical | Frontend only renders desktop layout |
| Dynamic CSS | 🔴 Critical | No `frontend-style.js` for dynamic CSS generation |
| Delete Grid Item | 🟡 Important | No easy way to delete items from layout mode |
| Grid Item Minimum Size | 🟢 Nice | No min width/height constraints on items |
| Drag Preview Enhancement | 🟢 Nice | Basic drag preview, could be improved |
| Grid Lines Visualization | 🟢 Nice | Grid background doesn't match actual grid |
| Animation & Transitions | 🟢 Nice | No hover/entrance animations for items |
| Block Icon | 🟢 Nice | Using `post_grid` icon, needs custom Bento Grid icon |

---

## 🏗️ Implementation Phases

### Phase 1: Grid Item Inspector Controls (Foundation)
> **Goal:** User can select a grid item and manually adjust its position/size from the sidebar

#### 1.1 Create `inspector.js` for `grid-item` block

**File:** `src/blocks/grid-item/inspector.js` `[NEW]`

```
Controls to add:
├── PanelBody: "Grid Position"
│   ├── RangeControl: "Column Start" (gridColumnStart) — min: 0, max: cols-1
│   ├── RangeControl: "Row Start" (gridRowStart) — min: 0, max: 50
│   ├── RangeControl: "Column Span" (gridColumnSpan) — min: 1, max: cols
│   └── RangeControl: "Row Span" (gridRowSpan) — min: 1, max: 20
│
├── PanelBody: "Item Styling"
│   ├── Background Color (ColorPalette or custom component)
│   ├── Border Radius (RangeControl or BoxControl)
│   ├── Padding (BoxControl — top/right/bottom/left)
│   └── Min Height (UnitControl — px, vh)
│
└── PanelBody: "Advanced"
    ├── Custom CSS Class
    └── Z-Index (NumberControl)
```

#### 1.2 Add new attributes to `grid-item/attributes.js`

**File:** `src/blocks/grid-item/attributes.js` `[MODIFY]`

```js
// New attributes to add:
backgroundColor: { type: 'string', default: '' },
borderRadius: { type: 'object', default: { top: '', right: '', bottom: '', left: '' } },
borderRadiusUnits: { type: 'string', default: 'px' },
padding: { type: 'object', default: { top: '', right: '', bottom: '', left: '' } },
paddingUnits: { type: 'string', default: 'px' },
minHeight: { type: 'string', default: '' },
minHeightUnit: { type: 'string', default: 'px' },
zIndex: { type: 'number', default: 0 },
customClassName: { type: 'string', default: '' },
```

#### 1.3 Update `grid-item/edit.js` to include Inspector

**File:** `src/blocks/grid-item/edit.js` `[MODIFY]`

- Import and render `<Inspector />` component
- Apply new style attributes (backgroundColor, borderRadius, padding, minHeight) to blockProps

#### 1.4 Update `grid-item/save.js` with new styles

**File:** `src/blocks/grid-item/save.js` `[MODIFY]`

- Apply all styling attributes to saved output

---

### Phase 2: Responsive Layout System (Core Feature)
> **Goal:** User can define different grid layouts for Desktop, Tablet, and Mobile

#### 2.1 Architecture Decision: How to Handle Responsive

**Option A: Separate layout arrays per breakpoint (RECOMMENDED ✅)**
```
grid-layout attributes:
├── layouts: {
│   Desktop: [{ i: "item-1", x: 0, y: 0, w: 6, h: 4 }, ...],
│   Tablet: [{ i: "item-1", x: 0, y: 0, w: 6, h: 3 }, ...],
│   Mobile: [{ i: "item-1", x: 0, y: 0, w: 12, h: 2 }, ...]
│ }
├── colsDesktop: 12 (default)
├── colsTablet: 8 (default)
├── colsMobile: 4 (default)
```

**Why Option A?**
- User drags items in Layout Mode per breakpoint
- No guessing — full control over Tablet/Mobile layouts
- `react-grid-layout` already supports `ResponsiveGridLayout` component with breakpoint layouts
- We store each breakpoint's layout in the parent (grid-layout) rather than individual items
- This way grid-item doesn't need separate Tablet/Mobile position attributes — the parent manages it all

**Option B: Per-item responsive attributes (NOT recommended ❌)**
```
// Each grid-item would need:
gridColumnStartTablet, gridColumnStartMobile,
gridRowStartTablet, gridRowStartMobile,
gridColumnSpanTablet, gridColumnSpanMobile,
gridRowSpanTablet, gridRowSpanMobile
```
*Too many attributes, harder to sync with RGL drag, more complex*

#### 2.2 Add responsive attributes to `grid-layout`

**File:** `src/blocks/grid-layout/attributes.js` `[MODIFY]`

```js
// Replace single 'cols' with per-breakpoint:
colsDesktop: { type: 'number', default: 12 },
colsTablet: { type: 'number', default: 8 },
colsMobile: { type: 'number', default: 4 },

// Master layout store (serialized JSON of all breakpoints):
layouts: {
  type: 'object',
  default: {
    Desktop: [],
    Tablet: [],
    Mobile: []
  }
},

// Row height per breakpoint (optional, can keep single):
rowHeightDesktop: { type: 'number', default: 40 },
rowHeightTablet: { type: 'number', default: 35 },
rowHeightMobile: { type: 'number', default: 30 },

// Gutter per breakpoint:
gutterDesktop: { type: 'number', default: 10 },
gutterTablet: { type: 'number', default: 8 },
gutterMobile: { type: 'number', default: 6 },
```

#### 2.3 Update `grid-layout/edit.js` for Responsive mode

**File:** `src/blocks/grid-layout/edit.js` `[MODIFY]`

**Key changes:**
1. Import `useDeviceType` hook (or use `@wordpress/data` to read `__experimentalGetPreviewDeviceType`)
2. Show breakpoint tabs/selector in Layout Mode header (Desktop / Tablet / Mobile)
3. When user switches breakpoint:
   - Load the corresponding layout from `layouts.Desktop`, `layouts.Tablet`, or `layouts.Mobile`
   - Use corresponding `cols` value for that breakpoint
   - Use corresponding `rowHeight` and `gutter`
4. On layout change → update only the active breakpoint's layout
5. Auto-populate: When user hasn't set Tablet/Mobile layout yet, auto-generate from Desktop layout with smart fallback (e.g., increase row spans, stack items)

**Breakpoint Tab UI in Layout Mode:**
```
┌─────────────────────────────────────────────────┐
│ LAYOUT MODE   [Desktop] [Tablet] [Mobile]  [Done]│
│ Drag and resize boxes to define your grid...     │
│ ┌───────────────────────────────────────────────┐│
│ │  ReactGridLayout (changes per active breakpoint│
│ │                                                │
│ └───────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘
```

#### 2.4 Update `grid-layout/inspector.js` for responsive controls

**File:** `src/blocks/grid-layout/inspector.js` `[MODIFY]`

```
Controls update:
├── PanelBody: "Grid Settings"
│   ├── (Show device-specific controls using responsive-control component)
│   ├── Desktop Columns / Tablet Columns / Mobile Columns
│   ├── Desktop Row Height / Tablet Row Height / Mobile Row Height
│   └── Desktop Gutter / Tablet Gutter / Mobile Gutter
│
├── PanelBody: "Layout Behavior"
│   ├── Compaction Type
│   ├── Allow Overlap
│   └── Auto-generate Tablet/Mobile toggle
│
└── PanelBody: "Items"
    └── Add New Item button
```

#### 2.5 Sync layouts with inner block changes

**Critical Logic:**
- When a new grid-item is added → add it to ALL breakpoint layouts
- When a grid-item is removed → remove from ALL breakpoint layouts
- When grid-item `id` changes → update in ALL layouts
- Use `useEffect` to watch `innerBlocks` changes and sync

```js
// Pseudocode for sync logic:
useEffect(() => {
  const currentItemIds = innerBlocks.map(b => b.attributes.id);
  const updatedLayouts = { ...layouts };
  
  ['Desktop', 'Tablet', 'Mobile'].forEach(bp => {
    // Remove layouts for deleted items
    updatedLayouts[bp] = updatedLayouts[bp].filter(l => currentItemIds.includes(l.i));
    
    // Add layouts for new items
    currentItemIds.forEach(id => {
      if (!updatedLayouts[bp].find(l => l.i === id)) {
        updatedLayouts[bp].push({
          i: id,
          x: 0, y: Infinity,
          w: bp === 'Mobile' ? colsMobile : bp === 'Tablet' ? Math.min(4, colsTablet) : 3,
          h: 4
        });
      }
    });
  });
  
  setAttributes({ layouts: updatedLayouts });
}, [innerBlocks.length]);
```

---

### Phase 3: Frontend Rendering with Responsive CSS
> **Goal:** The saved output renders correctly on all screen sizes

#### 3.1 Create `frontend-style.js` for `grid-layout`

**File:** `src/blocks/grid-layout/frontend-style.js` `[NEW]`

Following the same pattern as `container/frontend-style.js`:

```js
function frontEndStyle(attributes, clientId, name, deviceType) {
  const { blockID, layouts, colsDesktop, colsTablet, colsMobile, 
          gutterDesktop, gutterTablet, gutterMobile,
          rowHeightDesktop, rowHeightTablet, rowHeightMobile } = attributes;

  // Desktop selectors
  const desktopSelectors = {
    '': {
      'display': 'grid',
      'grid-template-columns': `repeat(${colsDesktop}, 1fr)`,
      'grid-auto-rows': `${rowHeightDesktop}px`,
      'gap': `${gutterDesktop}px`,
    }
  };

  // Generate per-item grid-area for each breakpoint
  layouts.Desktop.forEach(item => {
    desktopSelectors[` > .grid-item-${item.i}`] = {
      'grid-column': `${item.x + 1} / span ${item.w}`,
      'grid-row': `${item.y + 1} / span ${item.h}`,
    };
  });

  // Similar for Tablet and Mobile...
  
  // Use generateCSS utility to output CSS strings
  // Return { desktop, tablet, mobile } CSS objects
}
```

#### 3.2 Update `grid-layout/save.js` for responsive frontend

**File:** `src/blocks/grid-layout/save.js` `[MODIFY]`

**Key changes:**
- Remove inline `style` from the wrapper (CSS will be generated dynamically)
- Add data attributes for identifying items: `data-grid-id` on each child
- Save block with only the className for CSS targeting

**OR** keep inline styles for desktop and use `<style>` tag for responsive overrides:

```jsx
// Option: Inline desktop + embedded responsive styles
<div {...useBlockProps.save({ className: blockID })}>
  <style>{`
    @media (max-width: 1024px) {
      .${blockID} { grid-template-columns: repeat(${colsTablet}, 1fr); }
      ${tabletItemStyles}
    }
    @media (max-width: 767px) {
      .${blockID} { grid-template-columns: repeat(${colsMobile}, 1fr); }
      ${mobileItemStyles}
    }
  `}</style>
  <InnerBlocks.Content />
</div>
```

#### 3.3 Update `grid-item/save.js` for responsive positioning

**File:** `src/blocks/grid-item/save.js` `[MODIFY]`

**Decision needed:** Since layouts are stored in the parent, the parent's save.js needs to pass position data to items. Two approaches:

1. **CSS Class approach (RECOMMENDED):** Each grid-item gets a unique class/data-attribute, parent generates CSS rules
2. **Inline style approach:** Keep gridArea as inline style (desktop only), responsive handled by parent's `<style>` tag

**Recommended: Use the item `id` attribute as a CSS hook:**
```jsx
<div {...useBlockProps.save({ 
  className: `${blockID} grid-item-${id}`,
  style: desktopStyle  // gridArea for desktop
})}>
```

---

### Phase 4: Preset Templates / Patterns
> **Goal:** User can pick from ready-made Bento Grid layouts to start quickly

#### 4.1 Create Template Selector component

**File:** `src/blocks/grid-layout/components/TemplatePicker.js` `[NEW]`

Show when:
- Block is first inserted (no inner blocks yet)
- User clicks "Choose Template" from toolbar/inspector

**Pre-built templates:**

```
Template 1: "Classic Bento" (4 items)
┌──────────┬─────┐
│          │     │
│  Large   │ Sm  │
│          │     │
├────┬─────┴─────┤
│ Sm │   Medium   │
└────┴───────────┘

Template 2: "Magazine" (5 items)
┌──────┬──────┬──────┐
│      │  B   │  C   │
│  A   ├──────┴──────┤
│      │      D      │
├──────┤             │
│  E   │             │
└──────┴─────────────┘

Template 3: "Dashboard" (6 items)
┌────┬────┬────┬────┐
│ A  │ B  │ C  │ D  │
├────┴────┼────┴────┤
│    E    │    F    │
└─────────┴─────────┘

Template 4: "Portfolio" (3 items)
┌────────────────────┐
│      Hero          │
├─────────┬──────────┤
│  Left   │  Right   │
└─────────┴──────────┘

Template 5: "Blank" — Start empty
```

Each template is a data object:
```js
{
  name: "Classic Bento",
  icon: <svg>...</svg>,
  preview: <PreviewComponent>,
  items: 4,
  layouts: {
    Desktop: [
      { i: 'item-1', x: 0, y: 0, w: 8, h: 6 },
      { i: 'item-2', x: 8, y: 0, w: 4, h: 6 },
      { i: 'item-3', x: 0, y: 6, w: 4, h: 4 },
      { i: 'item-4', x: 4, y: 6, w: 8, h: 4 },
    ],
    Tablet: [...],
    Mobile: [...]
  }
}
```

#### 4.2 Update `grid-layout/edit.js` to show TemplatePicker

**File:** `src/blocks/grid-layout/edit.js` `[MODIFY]`

- When `innerBlocks.length === 0` → show `<TemplatePicker>` instead of empty state
- On template select → create grid-items with IDs and set `layouts` attribute

---

### Phase 5: Grid Item Styling & Content Controls
> **Goal:** Each grid item looks polished with backgrounds, borders, and proper content areas

#### 5.1 Add Background controls to grid-item Inspector

Using existing project components:
- `background-color-control` component
- `background-image-control` component  
- `gradient-color-control` component

#### 5.2 Add Border & Border Radius controls

Using existing:
- Border control pattern from container block
- `spacing` component for border radius

#### 5.3 Add Padding controls

Using existing:
- `spacing` component

#### 5.4 Update grid-item `edit.js` and `save.js` to render styles

Apply all styling as inline styles or via dynamic CSS.

---

### Phase 6: Enhanced Editor UX
> **Goal:** Polished editing experience with visual feedback

#### 6.1 Grid line visualization

**File:** `src/blocks/grid-layout/editor.scss` `[MODIFY]`

- Dynamic grid background matching actual column/row settings
- Show column numbers at the top
- Show row numbers on the left

#### 6.2 Item action buttons in layout mode

Add to each RGL item box:
```
┌──────────────────────┐
│ [🗑️ Delete] [i Info] │
│                      │
│      Item Label      │
│     (3×4 cols)       │
│                      │
└──────────────────────┘
```

#### 6.3 Toolbar enhancements

- "Duplicate Item" button
- "Reset Layout" button (reset to auto-layout)
- Quick breakpoint indicator showing which breakpoints have custom layouts

#### 6.4 Lock/Unlock items

- Allow locking individual items so they can't be moved accidentally
- Add `isLocked` attribute to grid-item
- Show lock icon on locked items in layout mode

---

### Phase 7: Frontend Polish
> **Goal:** Smooth, professional frontend output

#### 7.1 Add CSS transitions for frontend

**File:** `src/blocks/grid-layout/style.scss` `[MODIFY]` and `src/blocks/grid-item/style.scss` `[MODIFY]`

```css
.wp-block-frontis-blocks-grid-layout {
  display: grid;
  /* Grid properties set via dynamic CSS */
}

.wp-block-frontis-blocks-grid-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.wp-block-frontis-blocks-grid-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}
```

#### 7.2 Responsive media queries

Generate in `save.js` or via PHP dynamic CSS:

```css
/* Desktop: 12 columns */
.fb-grid-layout-xxx {
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
}

/* Tablet: 8 columns */
@media (max-width: 1024px) {
  .fb-grid-layout-xxx {
    grid-template-columns: repeat(8, 1fr);
    gap: 8px;
  }
  .fb-grid-layout-xxx > .grid-item-item-1 {
    grid-column: 1 / span 8;
    grid-row: 1 / span 3;
  }
  /* ... more items */
}

/* Mobile: 4 columns or stack */
@media (max-width: 767px) {
  .fb-grid-layout-xxx {
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
  }
  /* Items stack or rearrange per mobile layout */
}
```

---

## 🔧 Technical Decisions Summary

| Decision | Choice | Reason |
|----------|--------|--------|
| Responsive layout storage | Parent block stores all breakpoint layouts | Simpler sync, matches RGL's native API |
| Frontend CSS approach | `<style>` tag in save.js + inline desktop styles | No PHP rendering needed, works with static blocks |
| Grid system | CSS Grid (not Flexbox) | Native grid-template-columns, grid-area support |
| Breakpoint values | Desktop: 1025px+, Tablet: 768-1024px, Mobile: <768px | Standard WP breakpoints |
| Layout mode library | Keep `react-grid-layout` v2.2.2 | Already installed, works well for drag-resize |
| Template system | JS data objects, not block patterns | More control, integrated into block UI |

---

## 📋 Implementation Order (Sprint Plan)

### Sprint 1: Core Foundation (Phase 1 + 2)
```
Day 1-2:
  [1.1] Create grid-item inspector.js
  [1.2] Add grid-item styling attributes
  [1.3] Update grid-item edit.js with inspector
  [1.4] Update grid-item save.js with styles

Day 3-5:
  [2.1] Refactor grid-layout attributes for responsive
  [2.2] Add breakpoint tabs to layout mode
  [2.3] Implement layout sync logic (add/remove items across breakpoints)
  [2.4] Update inspector for per-breakpoint controls
```

### Sprint 2: Frontend + Templates (Phase 3 + 4)
```
Day 6-7:
  [3.1] Create frontend-style.js OR embedded <style> approach
  [3.2] Update save.js for responsive rendering
  [3.3] Test on real frontend with different viewport sizes

Day 8-9:
  [4.1] Build TemplatePicker component with 4-5 templates
  [4.2] Integrate template selection into grid-layout edit.js
```

### Sprint 3: Polish (Phase 5 + 6 + 7)
```
Day 10-11:
  [5.1-5.4] Grid item background, border, padding controls
  [6.1] Grid line visualization
  [6.2] Item action buttons (delete, info)

Day 12:
  [7.1] Frontend transitions/animations
  [7.2] Final responsive CSS cleanup
  [6.3-6.4] Toolbar enhancements, lock feature
```

---

## ⚠️ Key Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| RGL conflicts with Gutenberg drag | 🔴 High | Keep clear mode separation (Layout vs Content mode) |
| Save validation errors on attribute changes | 🔴 High | Add deprecated.js migration files when changing save markup |
| Performance with many grid items | 🟡 Medium | Memoize layout calculations, limit max items |
| Layout data desync between parent/child | 🟡 Medium | Single source of truth in parent, never store position in child for responsive |
| CSS specificity conflicts | 🟡 Medium | Use unique blockID-based selectors |

---

## 📁 Files Overview

### New Files to Create
| File | Purpose |
|------|---------|
| `grid-item/inspector.js` | Inspector controls for grid items |
| `grid-layout/frontend-style.js` | Dynamic CSS generation for responsive layouts |
| `grid-layout/components/TemplatePicker.js` | Pre-built layout templates selector |
| `grid-layout/deprecated.js` | Migration for attribute changes |
| `grid-item/deprecated.js` | Migration for attribute changes |

### Files to Modify
| File | Changes |
|------|---------|
| `grid-layout/attributes.js` | Add responsive cols, layouts, gutter, rowHeight per breakpoint |
| `grid-layout/edit.js` | Responsive breakpoint tabs, layout sync, template picker |
| `grid-layout/save.js` | Responsive CSS output, updated markup |
| `grid-layout/inspector.js` | Per-breakpoint controls |
| `grid-layout/editor.scss` | Grid visualization, breakpoint tabs styling |
| `grid-layout/style.scss` | Frontend base styles, transitions |
| `grid-item/attributes.js` | Styling attributes (bg, border, padding, etc.) |
| `grid-item/edit.js` | Inspector integration, apply styling |
| `grid-item/save.js` | Apply styling, responsive-aware class |
| `grid-item/editor.scss` | Enhanced item editor styling |
| `grid-item/style.scss` | Frontend item styles |
| `grid-item/index.js` | Register deprecated versions |
| `grid-layout/index.js` | Register deprecated versions |

---

## ❓ Open Questions for Discussion

1. **Breakpoint Columns Default:** Should Tablet default to 8 or 6 columns? Mobile to 4 or 1 (full stack)?
2. **Auto-generate responsive layouts?** Should we auto-create Tablet/Mobile from Desktop, or require user to set each manually?
3. **Max number of grid items?** Should we limit to a max (e.g., 12 items) for performance?
4. **Frontend hover effects:** Should hover animations (translateY, shadow) be opt-in via inspector, or always on?
5. **Should we support `grid-item` as a standalone block outside of `grid-layout`?** Currently `parent: ["frontis-blocks/grid-layout"]` restricts it.
