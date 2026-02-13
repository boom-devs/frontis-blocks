# Container Block Performance Implementation Tasks

**Created:** January 27, 2026  
**Status:** In Progress  
**Related Analysis:** [CONTAINER_PERFORMANCE_ANALYSIS.md](./CONTAINER_PERFORMANCE_ANALYSIS.md)

---

## 📋 Task Overview

এই file এ Container block এর editor performance improve করার জন্য সব implementation tasks step-by-step দেওয়া আছে। প্রতিটা task manually implement করার জন্য exact file paths, line numbers, এবং code changes দেওয়া হয়েছে।

---

## ✅ Task Checklist

### Phase 1: Critical Fixes (90% improvement expected)

- [x] **Task 1.1:** Add `memo()` to Inspector component ✅ (Completed: 2026-01-27)
- [x] **Task 1.2:** Fix double render loop in edit.js ✅ (Completed: 2026-01-27)

### Phase 2: Medium Priority (Additional 5-8% improvement)

- [x] **Task 2.1:** Move SVG icons outside component ✅ (Completed: 2026-01-27)
- [x] **Task 2.2:** Combine multiple useEffect calls into one ✅ (Completed: 2026-01-27)

### Phase 3: Low Priority (Code quality + minor improvement)

- [ ] **Task 3.1:** Remove duplicate useState (use attributes directly)
- [ ] **Task 3.2:** Add useCallback to frequently used handlers

---

## 📝 Task 1.1: Add `memo()` to Inspector Component

### 🎯 Goal
Inspector component কে memoize করা যাতে parent re-render এ unnecessary re-render না হয়।

### 📁 File to Modify
```
src/blocks/container/inspector.js
```

### 🔧 Step-by-Step Implementation

#### Step 1: Import memo (Line 11)

**Find this line:**
```javascript
import {useEffect, useState, useRef, useMemo } from "@wordpress/element";
```

**Replace with:**
```javascript
import {useEffect, useState, useRef, useMemo, memo } from "@wordpress/element";
```

#### Step 2: Export with memo (Line 2156 - last line)

**Find this line:**
```javascript
export default Inspector;
```

**Replace with:**
```javascript
export default memo(Inspector);
```

### ✅ Verification
- [ ] File saves without errors
- [ ] No console errors in browser
- [ ] Editor still works normally
- [ ] Inspector panel opens correctly

---

## 📝 Task 1.2: Fix Double Render Loop in edit.js

### 🎯 Goal
`setAttributes` শুধু তখনই call করা যখন actually value change হয়েছে।

### 📁 File to Modify
```
src/blocks/container/edit.js
```

### 🔧 Step-by-Step Implementation

#### Find this code block (Lines 179-181):

```javascript
useEffect(() => {
    setAttributes({blockStyle: `${blockFrontEndStyle}`.replace(/\s+/g, ' ').trim()});
}, [blockFrontEndStyle] );
```

#### Replace with:

```javascript
useEffect(() => {
    const newStyle = `${blockFrontEndStyle}`.replace(/\s+/g, ' ').trim();
    // Only update if the style actually changed
    if (attributes.blockStyle !== newStyle) {
        setAttributes({blockStyle: newStyle});
    }
}, [blockFrontEndStyle]);
```

### ⚠️ Note
Make sure `attributes` is already destructured from props at the top of the component. It should be available as:
```javascript
const { attributes, setAttributes, ... } = props;
```

### ✅ Verification
- [ ] File saves without errors
- [ ] No console errors in browser
- [ ] Editor loads properly
- [ ] Container block still works

---

## 📝 Task 2.1: Move SVG Icons Outside Component

### 🎯 Goal
SVG icons কে component এর বাইরে move করা যাতে প্রতি render এ recreate না হয়।

### 📁 File to Modify
```
src/blocks/container/inspector.js
```

### 🔧 Step-by-Step Implementation

#### Step 1: Find these constant arrays INSIDE the Inspector function (Lines ~268-355):

```javascript
const Inspector = (props) => {
    // ... other code ...
    
    const CONTAINER_TYPE = [
        // ...
    ];
    
    const DIRECTION = [
        { title: 'Row', label: __(<svg>...</svg>), value: "row" },
        // ...
    ];
    
    const JUSTIFY_CONTENT = [
        // ...
    ];
    
    const ALIGN_ITEMS = [
        // ...
    ];
    
    const WRAP = [
        // ...
    ];
    
    // ... rest of component
};
```

#### Step 2: Move ALL these constants BEFORE the Inspector function

Cut the following arrays and paste them BEFORE `const Inspector = (props) => {`:

1. `CONTAINER_TYPE` (Lines ~268-272)
2. `CONTAINER_TYPE_FULL` (Lines ~274-277)
3. `BORDER_STYLES` (Lines ~279-288)
4. `HTML_TAG` (Lines ~290-299)
5. `LAYOUT_TYPE` (Lines ~300-303)
6. `CHILDREN_WIDTH` (Lines ~304-308)
7. `DIRECTION` (Lines ~309-314)
8. `JUSTIFY_CONTENT` (Lines ~315-322)
9. `JUSTIFY_ITEMS` (Lines ~324-329)
10. `ALIGN_ITEMS` (Lines ~331-336)
11. `WRAP` (Lines ~338-342)
12. `BACKGROUND_TYPES` (Lines ~344-347)
13. `OVERFLOW_OP` (Lines ~349-355)

#### Step 3: Final structure should look like:

```javascript
import { __ } from "@wordpress/i18n";
// ... other imports ...

// ============ CONSTANTS (OUTSIDE COMPONENT) ============
const CONTAINER_TYPE = [
    { label: __('Full Width', 'frontis-blocks'), value: "full-width" },
    // ...
];

const DIRECTION = [
    { title: 'Row', label: __(<svg>...</svg>), value: "row" },
    // ...
];

// ... all other constants ...

// ============ COMPONENT ============
const Inspector = (props) => {
    // Now these constants are NOT recreated on every render
    // ... rest of component code
};

export default memo(Inspector);
```

### ✅ Verification
- [ ] File saves without errors
- [ ] No console errors about undefined constants
- [ ] All dropdowns/buttons show correct icons
- [ ] Inspector panel works correctly

---

## 📝 Task 2.2: Combine Multiple useEffect Calls

### 🎯 Goal
4টা আলাদা useEffect কে একটা তে merge করা।

### 📁 File to Modify
```
src/blocks/container/inspector.js
```

### 🔧 Step-by-Step Implementation

#### Find these 4 separate useEffect blocks (Lines ~226-266):

```javascript
useEffect(() => {
    setAttributes({
        globalFullWidthContentBoxedWidth: {
            Desktop: formatted_desktop_breakpoint || "1200",
            Tablet: formatted_tablet_breakpoint || "1024",
            Mobile: formatted_mobile_breakpoint || "767",
        },
    });
}, [formatted_desktop_breakpoint, formatted_tablet_breakpoint, formatted_mobile_breakpoint]);


useEffect(() => {
    setAttributes({
        globalColumnGap: {
            Desktop: formatted_container_column_gap.Desktop || "",
            Tablet: formatted_container_column_gap.Tablet || "",
            Mobile: formatted_container_column_gap.Mobile || "",
        },
    });
}, [formatted_container_column_gap]);


useEffect(() => {
    setAttributes({
        globalRowGap: {
            Desktop: formatted_container_row_gap.Desktop || "",
            Tablet: formatted_container_row_gap.Tablet || "",
            Mobile: formatted_container_row_gap.Mobile || "",
        },
    });
}, [formatted_container_row_gap]);

useEffect(() => {
    setAttributes({
        containerGlobalPadding: {
            Desktop: formatted_container_padding.Desktop || "",
            Tablet: formatted_container_padding.Tablet || "",
            Mobile: formatted_container_padding.Mobile || "",
        },
    });
}, [formatted_container_padding]);
```

#### Replace ALL 4 with this single useEffect:

```javascript
useEffect(() => {
    setAttributes({
        globalFullWidthContentBoxedWidth: {
            Desktop: formatted_desktop_breakpoint || "1200",
            Tablet: formatted_tablet_breakpoint || "1024",
            Mobile: formatted_mobile_breakpoint || "767",
        },
        globalColumnGap: {
            Desktop: formatted_container_column_gap.Desktop || "",
            Tablet: formatted_container_column_gap.Tablet || "",
            Mobile: formatted_container_column_gap.Mobile || "",
        },
        globalRowGap: {
            Desktop: formatted_container_row_gap.Desktop || "",
            Tablet: formatted_container_row_gap.Tablet || "",
            Mobile: formatted_container_row_gap.Mobile || "",
        },
        containerGlobalPadding: {
            Desktop: formatted_container_padding.Desktop || "",
            Tablet: formatted_container_padding.Tablet || "",
            Mobile: formatted_container_padding.Mobile || "",
        },
    });
}, [
    formatted_desktop_breakpoint, 
    formatted_tablet_breakpoint, 
    formatted_mobile_breakpoint,
    formatted_container_column_gap,
    formatted_container_row_gap,
    formatted_container_padding
]);
```

### ✅ Verification
- [ ] File saves without errors
- [ ] Global settings still apply correctly
- [ ] Container padding/gap defaults work
- [ ] Responsive values work

---

## 📝 Task 3.1: Remove Duplicate useState

### 🎯 Goal
Duplicate local state remove করে শুধু attributes use করা।

### 📁 File to Modify
```
src/blocks/container/inspector.js
```

### 🔧 Step-by-Step Implementation

#### Step 1: Find these useState declarations (Lines ~357-359):

```javascript
const [containerColumnsItem, setContainerColumnsItem] = useState(containerColumnsItemList);
const [containerRowsItem, setContainerRowsItem] = useState(containerRowsItemList);
const [containerLocalDesktopPadding, setContainerLocalDesktopPadding] = useState(containerDesktopPadding);
```

#### Step 2: Remove these lines and replace with direct references:

```javascript
// Use attributes directly - no local state needed
const containerColumnsItem = containerColumnsItemList;
const containerRowsItem = containerRowsItemList;
```

#### Step 3: Update all `setContainerColumnsItem` calls

Find all occurrences of `setContainerColumnsItem` and remove them. Keep only the `setAttributes` call.

**Example - Before:**
```javascript
setContainerColumnsItem({ ...containerColumnsItem, [deviceType]: updatedItems });
setAttributes({ containerColumnsItemList: {...containerColumnsItemList, [deviceType]: updatedItems} });
```

**After:**
```javascript
setAttributes({ containerColumnsItemList: {...containerColumnsItemList, [deviceType]: updatedItems} });
```

#### Step 4: Do the same for `setContainerRowsItem`

Remove all `setContainerRowsItem` calls, keep only `setAttributes`.

### ⚠️ Warning
This is a larger change. Test each handler function after modification:
- handleColumnAddItem
- handleColumnChangeItem
- handleColumnDeleteItem
- handleColumnDuplicateItem
- handleRowAddItem
- handleRowChangeItem
- handleRowDeleteItem
- handleRowDuplicateItem

### ✅ Verification
- [ ] Grid layout column/row adding works
- [ ] Grid layout column/row editing works
- [ ] Grid layout column/row deleting works
- [ ] Grid layout column/row duplicating works

---

## 📝 Task 3.2: Add useCallback to Handlers (Optional)

### 🎯 Goal
useCallback দিয়ে handlers কে memoize করা।

### 📁 File to Modify
```
src/blocks/container/inspector.js
```

### 🔧 Step-by-Step Implementation

#### Step 1: Import useCallback

Update the import line:
```javascript
import {useEffect, useState, useRef, useMemo, memo, useCallback } from "@wordpress/element";
```

#### Step 2: Wrap frequently used handlers with useCallback

**Example - Before:**
```javascript
const handleColumnAddItem = () => {
    const newItem = {
        id: `column-${containerColumnsItem[deviceType].length + 1}`,
        // ...
    };
    setAttributes({ containerColumnsItemList: {...} });
};
```

**After:**
```javascript
const handleColumnAddItem = useCallback(() => {
    const newItem = {
        id: `column-${containerColumnsItemList[deviceType].length + 1}`,
        // ...
    };
    setAttributes({ containerColumnsItemList: {...} });
}, [containerColumnsItemList, deviceType, setAttributes]);
```

### ⚠️ Note
This task is optional because `memo()` on Inspector already provides significant optimization. useCallback is most beneficial when handlers are passed to child components.

### ✅ Verification
- [ ] All handlers still work correctly
- [ ] No stale closure issues (old values)

---

## 🧪 Final Testing Checklist

After all implementations, test the following:

### Basic Functionality
- [ ] Container block can be added to page
- [ ] Container settings panel works
- [ ] Layout (Flex/Grid) switching works
- [ ] Direction, justify, align options work
- [ ] Background settings work
- [ ] Border settings work
- [ ] Spacing (padding/margin) works
- [ ] Responsive settings work

### Performance Testing
- [ ] Add 10+ containers to a page
- [ ] Select different containers - should feel snappy
- [ ] Change settings - should respond quickly
- [ ] Switch device types - should be smooth
- [ ] No visible lag when typing in inputs

### Console Check
- [ ] No JavaScript errors in console
- [ ] No React warnings about props/state

---

## 📊 Expected Results After Implementation

| Metric | Before | After |
|--------|--------|-------|
| Renders per container selection | 10-20 | 1-2 |
| Time to respond to input | 200-500ms | 20-50ms |
| Memory per container | High | Low |
| Editor feel | Laggy | Smooth |

---

## 🔄 Rollback Instructions

If something breaks, you can rollback specific changes:

```bash
# View recent commits
git log --oneline -10

# Rollback last commit (keep changes)
git reset --soft HEAD~1

# Rollback last commit (discard changes)
git reset --hard HEAD~1

# Rollback specific file
git checkout HEAD -- src/blocks/container/inspector.js
```

---

## 📝 Notes for Future Reference

1. **Why memo():** Every React component re-renders when parent re-renders. `memo()` prevents this if props haven't changed.

2. **Why combine useEffect:** Each `setAttributes` call triggers a state update and re-render. Batching them reduces renders.

3. **Why move constants outside:** Objects/arrays defined inside component are recreated every render, breaking shallow equality checks.

4. **Spectra reference:** See `wp-spectra/src/blocks/container/settings.js` for how they optimized their container block.

---

**Last Updated:** January 27, 2026
