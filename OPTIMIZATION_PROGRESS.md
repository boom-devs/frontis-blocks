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
- [ ] accordion
- [ ] accordion-item
- [x] advanced-button (Fixed)
- [ ] advanced-heading
- [ ] advanced-image
- [ ] advanced-megamenu
- [ ] advanced-navigation
- [ ] advanced-paragraph
- [ ] advanced-video
- [ ] animated-heading
- [ ] breadcrumb
- [ ] business-hours
- [ ] call-to-action
- [ ] contact-form-7
- [ ] container
- [ ] countdown
- [ ] counter-number
- [ ] critical-css
- [ ] dual-button
- [ ] features-list
- [ ] flip-box
- [ ] fluent-form
- [ ] google-map
- [ ] icon-box
- [ ] image-gallery
- [ ] info-box
- [ ] loop-builder
- [ ] loop-builder-wrapper
- [ ] lottie-animation
- [ ] marquee-carousel
- [ ] marquee-carousel-item
- [ ] news-ticker
- [ ] off-canvas-menu
- [ ] post-category
- [ ] post-comment-form
- [ ] post-featured-image
- [ ] post-grid
- [ ] post-meta
- [ ] post-title
- [ ] pricing-table
- [ ] progressbar
- [ ] query-pagination
- [ ] query-pagination-next
- [ ] query-pagination-numbers
- [ ] query-pagination-previous
- [ ] rive-animation
- [ ] search
- [ ] slider
- [ ] slider-item
- [ ] social-icons
- [ ] social-share
- [ ] social-share-child
- [ ] stack
- [ ] tabs
- [ ] tabs-item
- [ ] team-member
- [ ] testimonial
- [ ] utils
