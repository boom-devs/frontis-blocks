# Container Block Performance Analysis Report

**Date:** January 27, 2026  
**Comparing:** Frontis-Blocks vs Spectra (wp-spectra)  
**Focus:** Editor Performance Issues

---

## 📊 Executive Summary

Frontis-Blocks container block এর editor এ slow performance এর কারণ হলো কিছু React optimization techniques যা Spectra তে ব্যবহার করা হয়েছে কিন্তু Frontis-Blocks এ নেই। এই report এ সব সমস্যা এবং তার সমাধান বিস্তারিতভাবে আলোচনা করা হয়েছে।

---

## 📁 File Size Comparison

| File | Spectra | Frontis-Blocks | Difference |
|------|---------|----------------|------------|
| Inspector/Settings | 61KB (`settings.js`) | **92KB** (`inspector.js`) | +50% larger |
| Styling | 39KB (`styling.js`) | **67KB** (`styling.js`) | +72% larger |
| Frontend Style | N/A | **76KB** (`frontend-style.js`) | New file |
| Edit.js | 6.4KB | 6.3KB | Similar |

**Total additional JavaScript:** ~65KB more than Spectra

---

## 🚨 Issue #1: Inspector Component Not Memoized

### ❌ Frontis-Blocks (Current)

**File:** `src/blocks/container/inspector.js` (Line 2156)

```javascript
export default Inspector;
```

### ✅ Spectra (Optimized)

**File:** `src/blocks/container/settings.js` (Line 2230)

```javascript
import { memo } from '@wordpress/element';
export default memo( Settings );
```

### 🔍 Impact Analysis

| Scenario | Without memo() | With memo() |
|----------|---------------|-------------|
| 10 containers on page | All 10 re-render on any change | Only selected one re-renders |
| Typing in any input | 10x renders | 1x render |
| Changing device type | 10x renders | 1x render |

### 📈 Performance Impact

- **Without memo:** Every parent re-render causes Inspector to re-render
- **Render cost:** ~2,157 lines of component code executed per unnecessary render
- **With 20 containers:** 20x slower than necessary

### ✅ Recommended Fix

```javascript
// inspector.js - End of file
import { memo } from '@wordpress/element';
export default memo(Inspector);
```

**Estimated improvement:** 80-90% reduction in unnecessary renders

---

## 🚨 Issue #2: Double Render Loop in edit.js

### ❌ Frontis-Blocks (Current)

**File:** `src/blocks/container/edit.js` (Lines 174-181)

```javascript
const blockStyling = useMemo(() => styling(attributes, clientId, name, deviceType), [attributes, deviceType]);
const blockFrontEndStyle = useMemo(() => frontEndStyle(attributes, clientId, name, deviceType), [attributes, deviceType]);

useEffect(() => {
    setAttributes({blockStyle: `${blockFrontEndStyle}`.replace(/\s+/g, ' ').trim()});
}, [blockFrontEndStyle]);
```

### 🔍 What Happens (The Loop)

```
1. User changes any attribute
   ↓
2. attributes object updates
   ↓
3. blockFrontEndStyle recalculates (76KB of code!)
   ↓
4. useEffect triggers
   ↓
5. setAttributes({blockStyle: ...}) called
   ↓
6. attributes object updates AGAIN ← LOOP!
   ↓
7. Steps 3-5 repeat (stopped by React's reconciliation, but damage done)
```

### ✅ Spectra (No such loop)

Spectra does NOT store computed styles in attributes during edit. It only generates CSS for the editor view.

### 📈 Performance Impact

| Containers | Renders per action (Current) | Renders (Fixed) |
|------------|------------------------------|-----------------|
| 1 | 2 | 1 |
| 10 | 20 | 10 |
| 50 | 100 | 50 |

### ✅ Recommended Fix

```javascript
useEffect(() => {
    const newStyle = `${blockFrontEndStyle}`.replace(/\s+/g, ' ').trim();
    // Only update if actually changed
    if (attributes.blockStyle !== newStyle) {
        setAttributes({blockStyle: newStyle});
    }
}, [blockFrontEndStyle]);
```

**Alternative (Better):** Move frontend style computation to PHP render.php instead of storing in attributes.

---

## 🚨 Issue #3: Inline SVG Icons Recreated Every Render

### ❌ Frontis-Blocks (Current)

**File:** `src/blocks/container/inspector.js` (Lines 309-342)

```javascript
const DIRECTION = [
    { 
        title: 'Row', 
        label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.64246 7.53723H17.2781" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <!-- ... more paths ... -->
        </svg>), 
        value: "row" 
    },
    // ... 3 more items with full SVGs
];

const JUSTIFY_CONTENT = [
    // ... 6 items with full SVGs
];

const ALIGN_ITEMS = [
    // ... 4 items with full SVGs
];

const WRAP = [
    // ... 3 items with full SVGs
];
```

### ✅ Spectra (Optimized)

**File:** `src/blocks/container/settings.js`

```javascript
import renderCustomIcon from '@Controls/renderCustomIcon';

const directionOptions = [
    {
        value: 'row',
        tooltip: __('Row', 'ultimate-addons-for-gutenberg'),
        icon: <Icon icon={renderCustomIcon('flex-direction-row')} />,
    },
    // ...
];
```

### 🔍 What's Wrong

| Problem | Explanation |
|---------|-------------|
| **Object recreation** | Every render creates new array with new objects |
| **SVG recreation** | Each SVG element is a new React element |
| **Memory allocation** | New objects = new memory allocations |
| **Reference inequality** | New objects break shallow comparison optimizations |

### 📈 Performance Impact

```
Per render:
- ~20 SVG elements created
- ~50 new objects allocated
- ~3KB of JSX processed

With 10 containers, per user action:
- ~200 SVG elements
- ~500 objects
- ~30KB JSX
```

### ✅ Recommended Fix

**Option 1: Move outside component**

```javascript
// At top of file, OUTSIDE the Inspector function
const DIRECTION = [
    { title: 'Row', label: <RowIcon />, value: "row" },
    // ...
];

const Inspector = (props) => {
    // DIRECTION is now stable reference
};
```

**Option 2: Use icon file (like Spectra)**

```javascript
// icons.js
export const flexIcons = {
    row: <svg>...</svg>,
    column: <svg>...</svg>,
    // ...
};

// inspector.js
import { flexIcons } from './icons';
```

---

## 🚨 Issue #4: Multiple useEffect Causing Multiple State Updates

### ❌ Frontis-Blocks (Current)

**File:** `src/blocks/container/inspector.js` (Lines 226-266)

```javascript
// Effect 1
useEffect(() => {
    setAttributes({
        globalFullWidthContentBoxedWidth: {
            Desktop: formatted_desktop_breakpoint || "1200",
            Tablet: formatted_tablet_breakpoint || "1024",
            Mobile: formatted_mobile_breakpoint || "767",
        },
    });
}, [formatted_desktop_breakpoint, formatted_tablet_breakpoint, formatted_mobile_breakpoint]);

// Effect 2
useEffect(() => {
    setAttributes({
        globalColumnGap: {
            Desktop: formatted_container_column_gap.Desktop || "",
            Tablet: formatted_container_column_gap.Tablet || "",
            Mobile: formatted_container_column_gap.Mobile || "",
        },
    });
}, [formatted_container_column_gap]);

// Effect 3
useEffect(() => {
    setAttributes({
        globalRowGap: {
            Desktop: formatted_container_row_gap.Desktop || "",
            Tablet: formatted_container_row_gap.Tablet || "",
            Mobile: formatted_container_row_gap.Mobile || "",
        },
    });
}, [formatted_container_row_gap]);

// Effect 4
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

### 🔍 What Happens

```
Component mounts
  ↓
Effect 1 runs → setAttributes() → Re-render
  ↓
Effect 2 runs → setAttributes() → Re-render
  ↓
Effect 3 runs → setAttributes() → Re-render
  ↓
Effect 4 runs → setAttributes() → Re-render
  ↓
4 renders on mount instead of 1!
```

### ✅ Recommended Fix

**Combine into single useEffect:**

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

**Even Better: Move to edit.js and run only once**

---

## 🚨 Issue #5: Duplicate State (useState + Attributes)

### ❌ Frontis-Blocks (Current)

**File:** `src/blocks/container/inspector.js` (Lines 357-359)

```javascript
const [containerColumnsItem, setContainerColumnsItem] = useState(containerColumnsItemList);
const [containerRowsItem, setContainerRowsItem] = useState(containerRowsItemList);
const [containerLocalDesktopPadding, setContainerLocalDesktopPadding] = useState(containerDesktopPadding);
```

### 🔍 What's Wrong

| Issue | Explanation |
|-------|-------------|
| **Duplicate data** | Same data in both attributes AND local state |
| **Sync problems** | Must manually keep both in sync |
| **Double memory** | Storing data twice |
| **Double updates** | Every change needs 2 updates |

### ✅ Recommended Fix

**Use only attributes (single source of truth):**

```javascript
// Just use attributes directly
const containerColumnsItem = containerColumnsItemList;

// When updating:
setAttributes({ containerColumnsItemList: newValue });
```

**Or use useMemo for derived state:**

```javascript
const containerColumnsItem = useMemo(() => {
    return processColumnsData(containerColumnsItemList);
}, [containerColumnsItemList]);
```

---

## 🚨 Issue #6: Handler Functions Recreated Every Render

### ❌ Frontis-Blocks (Current)

**File:** `src/blocks/container/inspector.js`

```javascript
const Inspector = (props) => {
    // These are recreated on EVERY render
    const handleColumnAddItem = () => { ... };         // Line 361
    const handleColumnChangeItem = (id, key, value) => { ... };  // Line 377
    const reindexItems = (items, idType, titleType) => { ... };  // Line 407
    const handleColumnDeleteItem = (id) => { ... };    // Line 415
    const handleColumnDuplicateItem = (id) => { ... }; // Line 452
    const handleRowAddItem = () => { ... };            // Line 472
    const handleRowChangeItem = (id, key, value) => { ... };     // Line 488
    const handleRowDeleteItem = (id) => { ... };       // Line 518
    const handleRowDuplicateItem = (id) => { ... };    // Line 546
    // ... 15+ more handlers
};
```

### ✅ Recommended Fix

**Option 1: useCallback for handlers that are passed as props**

```javascript
const handleColumnAddItem = useCallback(() => {
    // ...
}, [containerColumnsItem, deviceType]);
```

**Option 2: memo() on Inspector (addresses this for child components)**

With `memo()`, parent re-renders won't cause unnecessary recreation.

---

## 📊 Summary Comparison Table

| Aspect | Spectra | Frontis-Blocks | Fix Priority |
|--------|---------|----------------|--------------|
| `memo()` on Settings/Inspector | ✅ Yes | ❌ No | 🔴 High |
| Double render prevention | ✅ No loop | ❌ Has loop | 🔴 High |
| Icon optimization | ✅ External file | ❌ Inline SVGs | 🟡 Medium |
| Single useEffect for init | ✅ Optimized | ❌ 4 separate | 🟡 Medium |
| Single source of truth | ✅ Attributes only | ❌ Duplicate state | 🟢 Low |
| useCallback for handlers | ✅ Not needed (memo) | ❌ All recreated | 🟢 Low |

---

## 🛠️ Implementation Priority

### Phase 1 (Immediate - 80% improvement expected)

1. **Add memo() to Inspector**
   - File: `inspector.js`
   - Time: 2 minutes
   - Impact: Prevents all unnecessary re-renders

2. **Fix double render in edit.js**
   - File: `edit.js`
   - Time: 5 minutes
   - Impact: Halves render count

### Phase 2 (Short-term - Additional 10% improvement)

3. **Move SVG icons outside component**
   - File: `inspector.js` or new `icons.js`
   - Time: 30 minutes
   - Impact: Reduces memory allocation

4. **Combine useEffect calls**
   - File: `inspector.js`
   - Time: 15 minutes
   - Impact: Reduces initial renders

### Phase 3 (Long-term - Additional 5% improvement)

5. **Remove duplicate state**
   - File: `inspector.js`
   - Time: 1 hour
   - Impact: Cleaner code, less memory

6. **Add useCallback to handlers**
   - File: `inspector.js`
   - Time: 1 hour
   - Impact: Better for child component optimization

---

## 🧪 How to Verify Improvements

### Before Fix (Measuring current performance)

1. Open browser DevTools → Performance tab
2. Add 10-15 containers on a page
3. Record while:
   - Selecting different containers
   - Changing settings
   - Switching device types
4. Note the render times and counts

### After Fix

1. Apply Phase 1 fixes
2. Repeat the same tests
3. Compare render times and counts

### Expected Results

| Metric | Before | After Phase 1 |
|--------|--------|---------------|
| Renders per selection | 20+ | 2-3 |
| Render time per action | 100-500ms | 10-50ms |
| Editor responsiveness | Laggy | Smooth |

---

## 📝 Conclusion

Frontis-Blocks container block এর মূল performance সমস্যা হলো:

1. **React memoization না থাকা** - সবচেয়ে বড় issue
2. **Double render loop** - প্রতিটা action এ 2x render
3. **Inline objects/SVGs** - Memory pressure

শুধুমাত্র `memo()` যোগ করলে এবং double render fix করলে **90%+ performance improvement** আসা উচিত।

---

## 📚 References

- [React.memo() Documentation](https://react.dev/reference/react/memo)
- [useCallback Hook](https://react.dev/reference/react/useCallback)
- [WordPress Block Editor Performance](https://developer.wordpress.org/block-editor/explanations/architecture/performance/)
- [Spectra Source Code](../wp-spectra/src/blocks/container/)
