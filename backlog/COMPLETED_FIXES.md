# Completed Fixes — March 4, 2026

---

## 1. AJAX Security: Nonce & Capability Checks on Getter Endpoints

**File:** `includes/Admin/Ajax/GlobalSettings.php`

Previously, all getter AJAX endpoints had **no nonce verification or capability checks**, allowing any logged-in user (even Subscriber role) to retrieve settings data.

**Fix:** Added `$this->validate_nonce()` and `$this->validate_permissions()` at the start of each method.

| Method                       | Status  |
|------------------------------|---------|
| `get_global_colors()`        | ✅ Fixed |
| `get_gradient_colors()`      | ✅ Fixed |
| `get_custom_colors()`        | ✅ Fixed |
| `get_custom_gradient_colors()` | ✅ Fixed |
| `get_typography()`           | ✅ Fixed |
| `get_custom_typography()`    | ✅ Fixed |
| `get_globaltypo()`           | ✅ Fixed |
| `get_fontfamilies()`         | ✅ Fixed |
| `get_custom_css()`           | ✅ Fixed |

> Validation uses `check_ajax_referer('fb_sidebar_nonce', 'nonce')` for nonce and `current_user_can('manage_options')` for capability — matching the existing pattern from `handle_option_update()`.

---

## 2. Frontend SVG Icon Rendering Standardization

Replaced deprecated `Helper::renderSVG` and incorrect `Heroicons::render` calls with the standardized `Helper::render_icon` method across all dynamic block `render.php` files. Added **fallback support** so icons display correctly even if the primary slug lookup fails.

### Blocks Updated

| Block               | File                                     | Change Summary                                                        |
|----------------------|------------------------------------------|-----------------------------------------------------------------------|
| **Advanced Button**  | `src/blocks/advanced-button/render.php`  | Used `fallback` param in `Helper::render_icon`; simplified HTML output |
| **Advanced Heading** | `src/blocks/advanced-heading/render.php` | Used `fallback` param; removed manual if/else for icon output          |
| **Icon Box**         | `src/blocks/icon-box/render.php`         | Replaced `Helper::renderSVG` → `Helper::render_icon` (main + button)  |
| **Info Box**         | `src/blocks/info-box/render.php`         | Replaced `Helper::renderSVG` → `Helper::render_icon` (main + button)  |
| **Flip Box**         | `src/blocks/flip-box/render.php`         | Replaced `Helper::renderSVG` → `Helper::render_icon` (front/back/btn) |
| **Post Category**    | `src/blocks/post-category/render.php`    | Added missing `use Helper` import; fixed `read_more_icon_html` key     |
| **Dual Button**      | `src/blocks/dual-button/render.php`      | Replaced `Heroicons::render` → `Helper::render_icon` with fallback    |
| **Call to Action**   | `src/blocks/call-to-action/render.php`   | Replaced `Heroicons::render` → `Helper::render_icon` with fallback    |
| **Testimonial**      | `src/blocks/testimonial/render.php`      | Updated rating + quote icons with `Helper::render_icon` + fallback     |
| **Team Member**      | `src/blocks/team-member/render.php`      | Updated social icon buttons with `Helper::render_icon` + fallback      |

### How `Helper::render_icon` Fallback Works

```php
// Tries to render icon by slug from FontAwesome library.
// If slug not found, falls back to the provided HTML string.
$icon_html = Helper::render_icon($iconSlug, ['fallback' => $iconFrontendHtml]);
```

### Issues Resolved

- **Fatal errors** in `icon-box`, `info-box`, `flip-box`, `post-category` (calling non-existent `renderSVG`)
- **Missing icons** in `dual-button`, `call-to-action` (calling non-existent `Heroicons::render`)
- **Corrupted SVGs** after site import (attribute-stored SVGs broken by `decode_content`)
