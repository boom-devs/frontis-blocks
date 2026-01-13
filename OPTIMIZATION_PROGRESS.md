# Optimization Checklist: Implementing React.memo

This document tracks the progress of performance optimization (React.memo) for Frontis Blocks.

## 🛠 How to Optimize

For each block in `src/blocks/`, verify its `edit.js` file matches this pattern:

### ❌ Before (Unoptimized)
```javascript
export default function Edit({ attributes, setAttributes }) {
    // ... heavy logic
    return <div>...</div>;
}
```

### ✅ After (Optimized)
```javascript
import { memo } from '@wordpress/element';

function Edit({ attributes, setAttributes }) {
    // ... heavy logic
    return <div>...</div>;
}

export default memo(Edit);
```

> [!TIP]
> **Why?** This prevents the block from re-rendering when parent components update but the block's props haven't changed.

---

## 📋 Block Status List

### Core Blocks
- [x] accordion
- [x] accordion-item
- [x] advanced-button (Fixed)
- [x] advanced-heading
- [x] advanced-image
- [x] advanced-megamenu
- [x] advanced-navigation
- [x] advanced-paragraph
- [x] advanced-video
- [x] animated-heading
- [x] breadcrumb
- [x] business-hours
- [x] call-to-action
- [x] contact-form-7
- [x] container
- [x] countdown
- [x] counter-number
- [x] critical-css
- [x] dual-button
- [x] features-list
- [x] flip-box
- [x] fluent-form
- [x] google-map
- [x] icon-box
- [x] image-gallery
- [x] info-box
- [x] loop-builder
- [x] loop-builder-wrapper
- [x] lottie-animation
- [x] marquee-carousel
- [x] marquee-carousel-item
- [x] news-ticker
- [x] off-canvas-menu
- [x] post-category
- [x] post-comment-form
- [x] post-featured-image
- [x] post-grid
- [x] post-meta
- [x] post-title
- [x] pricing-table
- [x] progressbar
- [x] query-pagination
- [x] query-pagination-next
- [x] query-pagination-numbers
- [x] query-pagination-previous
- [x] rive-animation
- [x] search
- [x] slider
- [x] slider-item
- [x] social-icons
- [x] social-share
- [x] social-share-child
- [x] stack
- [x] tabs
- [x] tabs-item
- [x] team-member
- [x] testimonial
