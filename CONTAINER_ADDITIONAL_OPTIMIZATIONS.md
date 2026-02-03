# Container Block - Additional Performance Optimization Tasks

**Created:** January 27, 2026  
**Based on:** File-by-file comparison of Spectra vs Frontis container blocks  
**Prerequisite:** Complete Phase 1 & 2 from `CONTAINER_PERFORMANCE_IMPLEMENTATION_TASKS.md`

---

## 📊 File Size Comparison Summary

| File | Spectra | Frontis | Issue |
|------|---------|---------|-------|
| `settings.js` / `inspector.js` | 61KB (2231 lines) | **74KB** (2073 lines) | +21% larger |
| `styling.js` | 39KB (1084 lines) | **67KB** (1599 lines) | +72% larger |
| `frontend-style.js` | N/A | **76KB** (1767 lines) | Unique to Frontis |
| `variationPicker.js` | 7KB (239 lines) | **13KB** (698 lines) | +74% larger |
| `components.js` | 25KB (597 lines) | N/A | Spectra has separate file |
| `columnSortableItem.js` | N/A | **13KB** (228 lines) | Unique to Frontis |
| `rowSortableItem.js` | N/A | **13KB** (227 lines) | Unique to Frontis |

---

## ✅ Issue #1: SortableItem Components Have Inline SVGs - RESOLVED

### ❌ Previous Problem (Now Fixed)

**Files:** 
- `src/blocks/container/columnSortableItem.js` (Lines 20-34)
- `src/blocks/container/rowSortableItem.js` (Lines 20-34)

```javascript
export default function ColumnSortableItem({ ... }) {
    // SVGs recreated on EVERY render
    const TrashIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" ...>
            <path d="M9.82692 6L9.59615 12M6.40385..." />
        </svg>
    );

    const DuplicateIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" ...>
            <g id="duplicate">
                <path id="Combined Shape" fill-rule="evenodd" ... />
            </g>
        </svg>
    );
    
    // Also inside the component:
    const COLUMN_TYPE = [
        { title: 'Auto', label: __('Auto', 'frontis-blocks'), value: "auto" },
        // ...
    ];
}
```

### ✅ Resolution Applied

**Changes Made:**
1. Added `TrashIcon`, `DuplicateIcon`, `ResetIcon` to `icons.js`
2. Moved `GRID_COLUMN_TYPE`, `GRID_UNIT_TYPES` to `fbConstants.js`
3. Updated both SortableItem files to import icons and constants

### 📝 Implementation Checklist

- [x] Add `TrashIcon`, `DuplicateIcon`, `ResetIcon` to `icons.js`
- [x] Move `COLUMN_TYPE`, `UNIT_TYPES` to `fbConstants.js` as `GRID_COLUMN_TYPE`, `GRID_UNIT_TYPES`
- [x] Update imports in `columnSortableItem.js`
- [x] Update imports in `rowSortableItem.js`
- [x] Replace inline ResetIcon SVGs with imported `ResetIcon` in `columnSortableItem.js`
- [x] Replace inline ResetIcon SVGs with imported `ResetIcon` in `rowSortableItem.js`
- [x] Build verification passed

---

## 🚨 Issue #2: frontend-style.js is Redundant with styling.js

### ❌ Current Problem

**Files:**
- `styling.js`: 67KB, 1599 lines - CSS for editor
- `frontend-style.js`: 76KB, 1767 lines - CSS for frontend (stored in attributes)

Both files contain almost **identical logic** - the frontend-style.js generates CSS that gets stored in the `blockStyle` attribute and written to the page.

### 🔍 Why This is Problems

1. **143KB of style generation** code instead of ~67KB
2. **Synchronization issues** - both must be updated when adding features
3. **Double computation** - both run in editor (see edit.js lines 180-185)
4. **Attribute bloat** - storing generated CSS in post content

### ✅ How Spectra Handles This

Spectra generates CSS on the **PHP side** during render, NOT in the editor. They only use `styling.js` for editor preview.

### 📝 Long-term Fix (Phase 4 - Major Refactor)

1. **Move frontend style generation to PHP** (in `render.php`)
2. **Remove `frontend-style.js` entirely**
3. **Remove `blockStyle` attribute storage**
4. **Update `styling.js` to only generate editor-needed CSS**

### 📝 Short-term Fix (Immediate - Reduce edit.js overhead)

Currently in `edit.js`:
```javascript
const blockFrontEndStyle = useMemo(() => frontEndStyle(attributes, clientId, name, deviceType), [attributes, deviceType]);

useEffect(() => {
    const newStyle = `${blockFrontEndStyle}`.replace(/\s+/g, ' ').trim();
    if (attributes.blockStyle !== newStyle) {
        setAttributes({blockStyle: newStyle});
    }
}, [blockFrontEndStyle]);
```

**Option 1: Debounce the style generation**

```javascript
import { useMemo, useEffect, useRef } from '@wordpress/element';
import { debounce } from 'lodash';

// Create debounced function outside component or use useMemo
const debouncedSetStyle = useRef(
    debounce((setAttributes, newStyle) => {
        setAttributes({ blockStyle: newStyle });
    }, 300)
).current;

useEffect(() => {
    const newStyle = `${blockFrontEndStyle}`.replace(/\s+/g, ' ').trim();
    if (attributes.blockStyle !== newStyle) {
        debouncedSetStyle(setAttributes, newStyle);
    }
}, [blockFrontEndStyle]);

// Cleanup on unmount
useEffect(() => {
    return () => debouncedSetStyle.cancel();
}, []);
```

**Option 2: Only compute on save (Best for performance)**

Move frontend style generation to a save hook instead of computing on every change.

---

## 🚨 Issue #3: variationPicker.js is Much Larger

### ❌ Current Problem

**Comparison:**
- Spectra: 239 lines, 7KB
- Frontis: 698 lines, 13KB (nearly 3x larger)

### 🔍 What's Different

1. Frontis has more variation options (good, but adds complexity)
2. Frontis variations use object-based `customWidth` (nested responsive object)
3. Spectra uses flat Desktop/Mobile/Tablet values

### ✅ This is Not a Critical Performance Issue

The variationPicker only renders **once** when inserting a block, not during editing. No immediate action needed, but the code could be simplified.

### 📝 Optional Cleanup (Low Priority)

- Review if all variations are actually used
- Consider lazy loading the variations array

---

## 🚨 Issue #4: edit.js Uses Compose Pattern Differently

### 🔍 Comparison

**Spectra `edit.js`:**
```javascript
export default compose(
    containerWrapper,
    addInitialAttr,
    AddStaticStyles,
    AddGBSStyles
)( UAGBContainer );
```

**Frontis `edit.js`:**
```javascript
export default Edit;
```

### 🔍 Impact Analysis

Spectra uses Higher-Order Components (HOCs) via `compose` which:
- Can add shared functionality across blocks
- `AddStaticStyles` - likely handles styling more efficiently
- `AddGBSStyles` - Global Block Styles system

Frontis applies same logic directly in the component, which isn't necessarily worse but means:
- Potentially more code duplication across blocks
- Harder to share optimizations

### 📝 Recommendation (Phase 5 - Architecture)

- [ ] Investigate Spectra's `AddStaticStyles` component
- [ ] Consider creating similar HOCs for Frontis
- [ ] Could centralize styling logic and reduce duplication

---

## 🚨 Issue #5: Inspector Has Too Many Handler Functions

### ❌ Current Problem

**File:** `inspector.js` has **43+ functions** defined inside the component:

```javascript
const Inspector = (props) => {
    // All these recreated on every render:
    const handleColumnAddItem = () => { ... };           // Line 277
    const handleColumnChangeItem = (id, key, value) => { ... }; // Line 293
    const reindexItems = (items, idType, titleType) => { ... }; // Line 323
    const handleColumnDeleteItem = (id) => { ... };     // Line 331
    const handleColumnDuplicateItem = (id) => { ... };  // Line 368
    const handleRowAddItem = () => { ... };             // Line 388
    const handleRowChangeItem = (id, key, value) => { ... }; // Line 404
    // ... 30+ more handlers
};
```

**Spectra's Settings component has only ~15 functions** because:
1. They separate Grid logic into `components.js`
2. They use render methods like `generalSettings()`, `backgroundSettings()`

### ✅ Recommended Fix

**Step 1:** Create `gridSortableHandlers.js` with shared handlers

```javascript
// src/blocks/container/gridSortableHandlers.js
export const createColumnHandlers = (containerColumnsItemList, deviceType, setAttributes) => ({
    handleAddItem: () => {
        // ...
    },
    handleChangeItem: (id, key, value) => {
        // ...
    },
    handleDeleteItem: (id) => {
        // ...
    },
    handleDuplicateItem: (id) => {
        // ...
    }
});

export const createRowHandlers = (containerRowsItemList, deviceType, setAttributes) => ({
    // Similar structure
});
```

**Step 2:** Use `useMemo` to memoize handlers

```javascript
const columnHandlers = useMemo(() => 
    createColumnHandlers(containerColumnsItemList, deviceType, setAttributes),
    [containerColumnsItemList, deviceType, setAttributes]
);
```

### 📝 Implementation Checklist (Phase 3 Continued)

- [ ] Create `gridSortableHandlers.js` file
- [ ] Extract column handlers to separate factory function
- [ ] Extract row handlers to separate factory function
- [ ] Use useMemo to memoize handler objects in inspector.js
- [ ] Update SortableItem components to use new handlers

---

## 🚨 Issue #6: Responsive Value Parsing Done Multiple Times

### ❌ Current Problem

In `inspector.js`, there's repeated parsing of global settings:

```javascript
// Lines 200-221 - parseResponsiveValue function
const parseResponsiveValue = (value) => {
    if (!value) return { Desktop: "", Tablet: "", Mobile: "" };
    // ... parsing logic
};

// Then called multiple times:
const formatted_container_column_gap = parseResponsiveValue(fb_container_column_gap);
const formatted_container_row_gap = parseResponsiveValue(fb_container_row_gap);
const formatted_container_padding = parseResponsiveValue(fb_container_padding);
```

### ✅ Recommended Fix

**Move parsing to a single useMemo:**

```javascript
const formattedGlobalValues = useMemo(() => ({
    columnGap: parseResponsiveValue(fb_container_column_gap),
    rowGap: parseResponsiveValue(fb_container_row_gap),
    padding: parseResponsiveValue(fb_container_padding),
    desktopBreakpoint: formatted_desktop_breakpoint,
    tabletBreakpoint: formatted_tablet_breakpoint,
    mobileBreakpoint: formatted_mobile_breakpoint,
}), [
    fb_container_column_gap, 
    fb_container_row_gap, 
    fb_container_padding,
    formatted_desktop_breakpoint,
    formatted_tablet_breakpoint,
    formatted_mobile_breakpoint
]);
```

---

## 🚨 Issue #7: Spectra Uses components.js for Grid Settings

### 🔍 Analysis

Spectra has a separate `components.js` (25KB, 597 lines) that contains:
- `GridSettings` component (memoized separately)
- All grid column/row management UI
- Isolated from main Settings component

Frontis has grid logic **inside inspector.js** making it:
- Harder to maintain
- Cannot memoize grid settings separately
- All grid code re-renders with inspector

### ✅ Recommended Fix (Phase 4)

**Create separate GridSettings component:**

```javascript
// src/blocks/container/gridSettings.js
import { memo } from '@wordpress/element';

const GridSettings = memo(({ 
    containerColumnsItem,
    containerRowsItem,
    deviceType,
    // ... other props
}) => {
    // Grid column/row management UI
    return (
        <PanelBody title={__("Grid Settings", "frontis-blocks")}>
            {/* Grid controls */}
        </PanelBody>
    );
});

export default GridSettings;
```

---

## 📋 Implementation Priority

### Phase 3A: Quick Wins (1-2 hours)
1. ✅ Add memo() to ColumnSortableItem
2. ✅ Add memo() to RowSortableItem  
3. ✅ Move SVGs to icons.js
4. ✅ Move COLUMN_TYPE/UNIT_TYPES constants outside components

### Phase 3B: Handler Optimization (2-3 hours)
5. ✅ Create gridSortableHandlers.js
6. ✅ Memoize responsive value parsing
7. ✅ Add debounce to frontend-style computation

### Phase 4: Architecture Changes (4-6 hours)
8. 🔄 Create separate GridSettings component
9. 🔄 Move frontend style to PHP render
10. 🔄 Create HOC pattern for shared block functionality

### Phase 5: Long-term (Research needed)
11. 📚 Study Spectra's AddStaticStyles HOC
12. 📚 Consider Global Block Styles implementation
13. 📚 Evaluate removing frontend-style.js entirely

---

## 🧪 How to Verify

### Before & After Testing
1. Open DevTools → Performance tab
2. Add 10-15 containers with Grid layout (6 columns × 6 rows each)
3. Record while:
   - Adding/removing grid columns
   - Changing column settings
   - Switching device types
4. Compare render times

### Expected Results After Phase 3

| Metric | Before | After Phase 3 |
|--------|--------|---------------|
| Grid item add time | 200-500ms | 50-100ms |
| Style generation | Every change | Debounced (300ms) |
| Memory per sortable item | ~2KB new objects | Minimal (shared refs) |

---

## 📚 Files to Modify

| File | Changes |
|------|---------|
| `icons.js` | Add TrashIcon, DuplicateIcon, ResetIcon |
| `columnSortableItem.js` | Import icons, move constants, add memo() |
| `rowSortableItem.js` | Import icons, move constants, add memo() |
| `inspector.js` | Memoize responsive parsing |
| `edit.js` | Add debounce to frontend style |
| `gridSortableHandlers.js` | Create new file with handlers |

---

**Last Updated:** January 27, 2026
