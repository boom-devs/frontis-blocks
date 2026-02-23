# Slider Block Performance Analysis

**Created:** January 27, 2026  
**Comparison:** Frontis-Blocks Slider vs Spectra Slider

---

## 📊 File Size Comparison

### Slider (Parent Block)

| File | Frontis | Spectra | Difference |
|------|---------|---------|------------|
| `inspector.js` / `settings.js` | **171KB** (3166 lines) | 31KB (1151 lines) | **5.5x larger** ❌ |
| `edit.js` | **22KB** (584 lines) | 3.6KB (115 lines) | **6x larger** ❌ |
| `attributes.js` | 21KB | 16KB | 1.3x larger |
| `styling.js` | N/A | 16KB | Spectra has it |
| `save.js` | 7KB | 0.7KB | 10x larger |

### Slider-Item (Child Block)

| File | Frontis | Spectra |
|------|---------|---------|
| `inspector.js` / `settings.js` | 1.7KB | 13KB |
| `edit.js` | 2.2KB | 1.7KB |
| `attributes.js` | 0.3KB | 9.7KB |

---

## 🏆 Winner: **Spectra is more optimized**

---

## 🔴 Frontis Slider Performance Issues

### Issue #1: Giant Inspector Component (171KB)

**File:** `src/blocks/slider/inspector.js`  
**Lines:** 3166  
**Functions:** 39 inside one component

```
Inspector.sliderArrowsIconLeftHandler
Inspector.sliderArrowsIconRightHandler
Inspector.handleArrowsBorderUnitChange       ← 50+ lines
Inspector.handleArrowsBorderCombineBtn
Inspector.handleArrowsBorderUnitsHandler
Inspector.handleArrowsBorderRadiusUnitChange ← Similar pattern
Inspector.handleArrowsBorderRadiusCombineBtn
Inspector.handleArrowsBorderRadiusUnitsHandler
Inspector.handleDotsMarginUnitChange         ← Same pattern again
Inspector.handleDotsMarginCombineBtn
... (30+ more similar handlers)
```

**Problem:** Same border/margin/padding handler pattern repeated 10+ times with slight variations.

---

### Issue #2: No memo() on Inspector

```javascript
// Frontis - NO memoization
const Inspector = ({ attributes, setAttributes, clientId }) => {
    // 3166 lines...
};

export default Inspector;
```

```javascript
// Spectra - HAS memoization
const Settings = ({ props }) => {
    // 1151 lines...
};

export default memo(Settings); // ✅
```

---

### Issue #3: Large edit.js (584 lines)

Frontis `edit.js` contains:
- Swiper initialization logic
- Mouse hover handlers
- Block controls
- All inline, not separated

Spectra `edit.js`:
- Only 115 lines
- Delegates to `<Render />` component
- Uses HOCs: `addInitialAttr`, `AddStaticStyles`

---

### Issue #4: Duplicate Handler Pattern

These functions follow identical pattern but are duplicated:

| Handler Type | Count | Lines Each | Total Lines |
|--------------|-------|------------|-------------|
| Border handlers | 3 sets | ~60 lines | ~180 lines |
| Border radius handlers | 3 sets | ~60 lines | ~180 lines |
| Margin handlers | 2 sets | ~60 lines | ~120 lines |
| Padding handlers | 2 sets | ~60 lines | ~120 lines |

**Total duplicated code:** ~600+ lines that could be 1 reusable function.

---

## 🟢 What Spectra Does Better

### 1. Memoized Settings Component
```javascript
export default memo(Settings);
```

### 2. Organized Render Methods
```javascript
Settings.generalSettings()      // Lines 206-375
Settings.contentSettings()      // Lines 377-398
Settings.backgroundSettings()   // Lines 400-628
Settings.borderSettings()       // Lines 630-643
Settings.boxShadowSettings()    // Lines 645-816
Settings.spacingSettings()      // Lines 818-963
Settings.navigationSettings()   // Lines 965-1092
```

### 3. HOC Pattern for Reusability
```javascript
export default compose(
    addInitialAttr,      // Shared initialization
    applyWithSelect,     // Data selection
    AddStaticStyles,     // Style handling
)(UAGBSlider);
```

### 4. Separate Render Component
```javascript
// edit.js is clean - only 56 lines for main component
<Render {...props} />  // Rendering delegated
```

---

## 📋 Recommended Optimizations for Frontis Slider

### Phase 1: Quick Wins (100% Safe)

- [ ] Add `memo()` to Inspector component
- [ ] Move Swiper imports to dynamic import or lazy load

### Phase 2: Handler Consolidation (95% Safe)

- [ ] Create generic `handleBorderUnitChange(type, event, position)` function
- [ ] Replace 10+ duplicate handlers with single reusable function
- [ ] Create `handleRadiusUnitChange(type, event, position)`
- [ ] Create `handleSpacingUnitChange(type, event, position)`

### Phase 3: Code Organization (90% Safe)

- [ ] Split Inspector into organized methods: `generalSettings()`, `arrowSettings()`, `dotsSettings()`
- [ ] Create separate `Render.js` component
- [ ] Use HOCs for shared functionality

### Phase 4: Architecture (Needs Testing)

- [ ] Consider splitting into smaller sub-components
- [ ] Create `ArrowsInspector.js`, `DotsInspector.js` as separate files

---

## 🎯 Expected Performance Improvement

| Metric | Current | After Optimization |
|--------|---------|-------------------|
| Inspector re-renders | Every change | Skipped when props same |
| Handler function creation | 39 functions per render | 1 reusable + memoized |
| Bundle size (inspector) | 171KB | ~50KB (estimated) |
| Editor responsiveness | Sluggish with many slides | Noticeably faster |

---

## 📁 Files to Modify

| File | Priority | Change |
|------|----------|--------|
| `inspector.js` | High | Add memo(), consolidate handlers |
| `edit.js` | Medium | Extract Render component |
| `constants/constants.js` | Low | Review for optimization |

---

**Last Updated:** January 27, 2026
