# Lazy Loading Status & Plan

This document tracks the implementation status of `lazy` and `Suspense` for the `Inspector` component across all blocks.

## ✅ Implemented (Active)
These blocks have `lazy` loading working correctly.


1. `accordion`
2. `accordion-item`
3. `advanced-button`
4. `advanced-image`
5. `advanced-navigation`
6. `advanced-paragraph`
7. `advanced-video`
8. `breadcrumb`
9. `business-hours`
10. `call-to-action`
11. `contact-form-7`
12. `countdown`
13. `counter-number`
14. `dual-button`
15. `features-list`
16. `fluent-form`
17. `google-map`
18. `icon-box`
19. `image-gallery`
20. `info-box`
21. `lottie-animation`
22. `off-canvas-menu`
23. `post-category`
24. `post-comment-form`
25. `post-featured-image`
26. `post-title`
27. `pricing-table`
28. `progressbar`
29. `rive-animation`
30. `social-icons`
31. `social-share`
32. `social-share-child`
33. `tabs`
34. `team-member`
35. `testimonial`

## ❌ Not Implemented (Pending)
These blocks need `lazy` loading applied. Groups are sorted by `editor.scss` size/complexity.

### High Priority (Small & Easy)
Small `editor.scss` files mean easy CSS inlining.
- [ ] `animated-heading` (Reverted due to issues)
- [ ] `marquee-carousel` (24 lines CSS)
- [ ] `query-pagination-numbers` (6 lines CSS)
- [ ] `text-field` (61 lines CSS)
- [ ] `textarea-field` (61 lines CSS)
- [ ] `search` (78 lines CSS)
- [ ] `slider-item` (86 lines CSS)
- [ ] `news-ticker` (103 lines CSS)
- [ ] `form-builder` (113 lines CSS)
- [ ] `slider` (142 lines CSS)

### Complex / Requires Care
These have large CSS files or complex interdependencies.
- [ ] `advanced-megamenu` (Complex structure)
- [ ] `flip-box` (Complex interactions)
- [ ] `container` (Large CSS: 400+ lines)
- [ ] `stack` (Large CSS: 400+ lines)
- [ ] `post-grid` (Large CSS: 400+ lines)
- [ ] `loop-builder`
- [ ] `loop-builder-wrapper`
- [ ] `critical-css`

### Other
- [ ] `marquee-carousel-item`
- [ ] `post-meta`
- [ ] `query-pagination`
- [ ] `query-pagination-next`
- [ ] `query-pagination-previous`
- [ ] `tabs-item`

## Implementation Pattern used

**1. edit.js**
```javascript
// Change this:
// import Inspector from "./inspector";

// To this:
import { lazy, Suspense } from "@wordpress/element";
const Inspector = lazy(() => import("./inspector"));

// Wrap usage:
<Suspense fallback={null}>
    <Inspector ... />
</Suspense>
```

**2. inspector.js**
```javascript
// Remove:
// import "./editor.scss";

// Add CSS to inline styles (inside useMemo):
const blockStyle = useMemo(() => `
    .my-block-class {
        /* CSS from editor.scss */
    }
`, [...]);
```
