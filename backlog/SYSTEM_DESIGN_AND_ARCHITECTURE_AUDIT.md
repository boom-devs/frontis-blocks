# Frontis Blocks — System Design & Architecture Audit

**Date:** 2026-03-02  
**Version Audited:** 1.1.9  

---

## Executive Summary

Frontis Blocks is a **well-structured, feature-rich Gutenberg blocks plugin** with 60+ blocks, a React-based admin dashboard, REST API endpoints, background processing, and per-page CSS/JS asset generation. The architecture follows many good practices (PSR-4 autoloading, Singleton pattern, modular directory structure).

However, the audit identified **critical security vulnerabilities**, several **performance concerns**, and **code quality issues** that should be addressed before production deployment or WordPress.org review.

### Severity Summary

| Severity | Count |
|----------|-------|
| 🔴 Critical | 4 |
| 🟠 High | 5 |
| 🟡 Medium | 4 |
| 🟢 Low | 2 |

### Overall Grade

| Category | Score | Notes |
|----------|-------|-------|
| Architecture | **B+** | Good structure, proper autoloading, modular design |
| Security | **D** | Critical vulnerabilities in AJAX handlers and REST API |
| Performance | **B** | Smart asset generation, but some wasteful patterns |
| Code Quality | **C+** | Dead code, inconsistent patterns, no tests |
| Maintainability | **B** | Good separation of concerns, but some files too large |
| **Overall** | **C+** | Solid foundation, but security issues must be fixed urgently |

---

## 1. Architecture Review

### ✅ What's Good

- **PSR-4 Autoloading** via Composer — clean namespace structure under `FrontisBlocks\`
- **Modular separation**: `Core/`, `Admin/Ajax/`, `RestApi/`, `Assets/`, `Config/`, `Forms/`, `Traits/`
- **Singleton pattern** via reusable trait — `includes/Traits/Singleton.php`
- **Block registration** through centralized `BlockList` config + conditional loading based on `fb_active_blocks` option
- **Save-time asset generation** — CSS/JS generated per-page and cached to filesystem
- **Background processing** via `deliciousbrains/wp-background-processing` library

### ⚠️ Issues Found

#### 🟡 1.2 — `PclZip.php` (184KB) Duplicated

A full copy of `PclZip.php` exists at `includes/Core/PclZip.php`, but WordPress core already ships with this class at `wp-admin/includes/class-pclzip.php`.

**Detailed Problem:**
*   **Unnecessary Weight:** You are adding **184KB** to your plugin's zip size for a file that is already present on every WordPress site.
*   **Maintenance & Security Risk:** If a security vulnerability is found in `PclZip`, WordPress core will update its version. However, your plugin's local copy will stay vulnerable unless you manually update it.
*   **Inconsistent Implementation:** The codebase is currently "double-minded":
    *   `Settings.php` (Line 684) **correctly** loads the WordPress core version using `ABSPATH`.
    *   `TemplateLibrary.php` (Line 12) **incorrectly** uses the redundant local copy via the `FrontisBlocks\Core\PclZip` namespace.

> **Recommendation:** Remove the bundled copy at `includes/Core/PclZip.php`. Standardize all ZIP operations to use the WordPress core version.


---

## 2. Security Audit

### 🔴 CRITICAL Issues

#### 🔴 2.1 — Unsanitized `$_POST['data']` Saved Directly to Database

**File:** `includes/Admin/Ajax/GlobalSettings.php:247`

```php
private function update_option($option_name, $type)
{
    $updated = update_option($option_name, isset($_POST['data']) ? $_POST['data'] : [], true);
```

`$_POST['data']` is saved **raw** to the database without any sanitization. The `$type` parameter exists but is **never used** in this method. The `sanitize_option_value()` method at line 268 is defined but **never called**.

> **Impact:** Stored XSS, arbitrary data injection.  
> **Fix:** Apply the existing `sanitize_option_value()` method, or use `wp_kses()`, `sanitize_text_field()`, or recursive sanitization.

#### 🔴 2.2 — Missing Nonce/Capability Checks on Getter AJAX Endpoints

**File:** `includes/Admin/Ajax/GlobalSettings.php:108-197`

The following AJAX endpoints have **NO nonce verification or capability checks**:

| Method | Line |
|--------|------|
| `get_global_colors()` | 108 |
| `get_gradient_colors()` | 119 |
| `get_custom_colors()` | 128 |
| `get_custom_gradient_colors()` | 139 |
| `get_typography()` | 149 |
| `get_custom_typography()` | 159 |
| `get_globaltypo()` | 169 |
| `get_fontfamilies()` | 179 |
| `get_custom_css()` | 189 |

Any logged-in user (even Subscriber role) can call these endpoints and retrieve settings data.

> **Fix:** Add `$this->validate_nonce()` and `$this->validate_permissions()` at the start of each getter method.

#### 🔴 2.3 — Unsanitized `$_POST` Values Used in `BlocksAjax.php`

**File:** `includes/Admin/Ajax/BlocksAjax.php:82-161`

Multiple `$_POST` values are used **without sanitization**:

```php
$_POST['data_source']   // Line 82 — no sanitize
$_POST['source_field']  // Line 83 — no sanitize
$_POST['post_id']       // Lines 86, 92, etc. — no intval()
$_POST['taxonomy']      // Line 121 — sanitized ✓
$_POST['meta_key']      // Line 105 — sanitized ✓
```

> **Fix:** Apply `sanitize_text_field()` to string values, `intval()` to numeric values.

#### 🔴 2.4 — REST API Route with `permission_callback` Always Returning `true`

**File:** `includes/RestApi/Blocks/PostGrid.php:33-39`

```php
register_rest_route('wp/v2/frontis-blocks', '/post', [
    'methods'  => 'POST',
    'callback' => [$this, 'get_posts'],
    'permission_callback' => function () {
        return true;
    },
]);
```

Any unauthenticated visitor can make POST requests to this endpoint. Combined with the 1072-line `get_posts()` method, this is a potential **DoS vector** — an attacker can craft expensive queries.

> **Fix:** At minimum use `'permission_callback' => '__return_true'` (for clarity), but ideally add rate limiting or require `current_user_can('edit_posts')` since this is for block editor use.

---

### 🟠 HIGH Issues

#### 🟠 2.5 — Nonce Accessed Without `isset()` Check

**Files:** `GlobalSettings.php:221`, `BlocksAjax.php:60`

```php
if (!wp_verify_nonce($_POST['nonce'], 'fb_sidebar_nonce')) {
```

If `$_POST['nonce']` is not set, this generates a PHP Warning/Notice. Compare with the safer pattern used in `Settings.php`:

```php
if (!check_ajax_referer('fb_settings_nonce', 'security', false)) {
```

> **Fix:** Use `check_ajax_referer()` consistently across all handlers, or add `isset()` check.

#### 🟠 2.6 — SVG Upload Validation Uses `LIBXML_NOENT`

**File:** `includes/Core/SupportSVG.php:85`

```php
$doc->loadXML($content, LIBXML_NOENT | LIBXML_DTDLOAD | ...);
```

`LIBXML_NOENT` enables XML entity expansion, which opens the door to **XXE (XML External Entity) attacks**. `LIBXML_DTDLOAD` also allows loading external DTDs.

> **Fix:** Remove `LIBXML_NOENT | LIBXML_DTDLOAD`. Use only `LIBXML_NOERROR | LIBXML_NOWARNING`. Consider using the `enshrined/svg-sanitize` library instead of custom sanitization.

#### 🟠 2.7 — `error_log()` Calls Expose Debug Data in Production

**Files:** `GlobalSettings.php:517`, `GlobalSettings.php:673`, `Settings.php:552`

```php
error_log('AJAX Data Received: ' . print_r($_POST, true));  // Logs raw POST
error_log("Processed {$element} typography: " . print_r($settings, true));
```

Raw `$_POST` data (including security tokens) is logged.

> **Fix:** Remove all `error_log()` calls or wrap them in `WP_DEBUG` checks.

#### 🟠 2.8 — Missing `return` After `wp_send_json_error()` in Some Handlers

**File:** `includes/Admin/Ajax/Settings.php:126-136`

```php
public function file_generation()
{
    if (!check_ajax_referer('fb_settings_nonce', 'security', false)) {
        wp_send_json_error(['message' => 'Invalid nonce'], 400);
        return;
    }
    if (!current_user_can('manage_options')) {
        wp_send_json_error(['message' => 'Insufficient permissions'], 403);
    }  // ← Missing return! Code below would continue executing
}
```

While `wp_send_json_error()` calls `die()` internally, relying on this is fragile. Some handlers have `return`, some don't — inconsistency makes bugs harder to catch.

> **Fix:** Always add `return` after `wp_send_json_error()` for defensive coding.

#### 🟠 2.9 — Direct `raw POST output` in Error Response

**File:** `includes/Admin/Ajax/Settings.php:762-771`

```php
header("Content-type: application/json; charset=utf-8");
http_response_code(405);
echo json_encode(array("message" => "Failed to extract ZIP file.", "status" => true));
return false;
```

Bypasses WordPress JSON response functions, doesn't set proper headers consistently.

> **Fix:** Use `wp_send_json_error()` instead.

---

## 3. Performance Audit

### ✅ What's Good

- **Per-page asset generation** — CSS/JS only for blocks used on each page
- **Critical CSS splitting** — separate critical CSS loaded in header, rest deferred to footer
- **Object cache usage** with `wp_cache_get/set` in database queries
- **Conditional script loading** via `is_admin()` checks in `Blocks.php`
- **Batch processing** for bulk asset generation (10 posts per batch)

### ⚠️ Issues Found

#### 🟡 3.1 — `wp_localize_script()` Called Inside Loop (60+ times)

**File:** `includes/Core/Blocks.php:168-170`

```php
foreach ($blocks_list as $block) {
    // ...
    wp_localize_script($editor_script_handle, 'FrontisBlocksData', $localize_array);
    wp_localize_script($view_script_handle, 'FrontisBlocksData', $localize_array);
    wp_localize_script('frontis-blocks-frontend', 'FrontisBlocksData', $localize_array);
}
```

The **same data** is localized to the same global variable 60+ times. Each call appends to WordPress's inline script queue.

> **Fix:** Move `wp_localize_script()` **outside** the loop. Call it once after registration is complete.

#### 🟡 3.2 — Google Font Loaded via `echo` Instead of `wp_enqueue_style()`

**File:** `includes/Core/Enqueues.php:210-213`

```php
echo '<link rel="preconnect" href="https://fonts.googleapis.com">';
echo '<link rel="preload" as="style" href="' . esc_url($google_font_url) . '" ...>';
```

Using raw `echo` in `wp_enqueue_scripts`:
- Skips WordPress's dependency system
- Can't be filtered/dequeued by other plugins/themes
- No duplicate detection

> **Fix:** Use `wp_enqueue_style()` for the font stylesheet. Add preconnect hints via `wp_resource_hints` filter.

#### 🟡 3.3 — Admin Data Loaded on Every Admin Request

**File:** `includes/Core/Blocks.php:75-93`

```php
if (is_admin()) {
    $admin_localize_array = [
        'fluent_form_lists' => json_encode(FluentForms::form_list()),
        'contact_form7_lists' => ContactForms7::form_list(),
        'post_types' => Helper::get_post_types(),
        'all_cats' => Helper::get_related_taxonomy(),
        'all_authors' => Helper::get_all_authors_with_posts(),
        ...
    ];
}
```

`Helper::get_all_authors_with_posts()`, `get_related_taxonomy()`, and form lists are fetched on **every admin page load**, not just the block editor.

> **Fix:** Only load this data on block editor screens (check `get_current_screen()->is_block_editor()`), or load via REST API on-demand.

#### 🟡 3.4 — Duplicate Localize Data in `Enqueues.php`

Both `Blocks.php` and `Enqueues.php` localize `FrontisBlocksData` and `SocialShareData` to scripts, potentially **overwriting** each other depending on load order.

> **Fix:** Centralize all localization in one place.

---

## 4. Code Quality

### ✅ What's Good

- Consistent namespacing and PSR-4 structure
- PHPDoc comments on most methods
- Editor configuration (`.editorconfig`) present
- PHPCS configuration (`phpcs.xml.dist`) present
- ABSPATH check at top of every PHP file

### ⚠️ Issues Found

#### 🟢 4.1 — Massive File Sizes

| File | Lines | Issue |
|------|-------|-------|
| `inspector.js` (advanced-heading) | 167K | UI inspector code |
| `styling.js` (advanced-heading) | 78K | Styling logic |
| `PostGrid.php` | 1,072 | Single method `get_posts()` is 700+ lines |
| `Admin.php` | **38K** | 38KB single admin file |
| `GlobalSettings.php` | 851 | 300+ lines of commented-out dead code |
| `TemplateLibrary.php` | **38K** | Largest AJAX handler |

> **Fix:** Break large files into smaller, focused classes. Extract `get_posts()` into a dedicated query builder class.

#### 🟢 4.2 — 300+ Lines of Commented-Out Code [RESOLVED]

#### 🟢 4.3 — Inconsistent Nonce Pattern [RESOLVED IN GLOBALSETTINGS]

#### 🟢 4.4 — Missing Tests

No unit tests, integration tests, or E2E tests exist in the project. No `tests/` directory found.

> **Recommendation:** Add at minimum PHPUnit tests for AJAX handlers and REST API endpoints, and JS tests for critical block components.

---

## 5. REST API Design

| Endpoint | Method | Auth | Issue |
|----------|--------|------|-------|
| `/wp/v2/frontis-blocks/post` | POST | ❌ **None** | Open to unauthenticated access |

**CAUTION:** The only REST route has `'permission_callback' => function() { return true; }` — this means **any unauthenticated visitor** can query posts via this endpoint with complex filter parameters, creating a potential DoS vector.

**Additional Issue:** The namespace `wp/v2/frontis-blocks` uses the `wp/v2` prefix, which is reserved for WordPress core. Custom plugins should use their own namespace prefix like `frontis-blocks/v1`.

---

## 6. Dependency Review

### PHP Dependencies (`composer.json`)

| Package | Version | Status |
|---------|---------|--------|
| `sabberworm/php-css-parser` | `^8.8` | ✅ Stable |
| `matthiasmullie/minify` | `dev-master` | 🔴 Unstable |
| `appsero/client` | `dev-develop` | 🔴 Unstable |
| `deliciousbrains/wp-background-processing` | `^1.3` | ✅ Stable |

### JS Dependencies (`package.json`)

| Concern | Details |
|---------|---------|
| **Heavy dependencies** | `@monaco-editor/react` (code editor), `@rive-app/canvas`, `lottie-web`, `react-virtualized` — large bundles |
| **Redux dual usage** | Both `@reduxjs/toolkit` + `react-redux` AND `@wordpress/data` are used — pick one |
| **Swiper version** | `swiper@11` bundled in both `node_modules` and `assets/js/backend/swiper/` — duplicate |

---

## 7. Priority Action Items

### Immediate (before next release)

1. **🔴 Sanitize `$_POST['data']` in `GlobalSettings.php`** — apply `wp_kses_post()` or recursive sanitization
2. **🔴 Add nonce/capability checks to all getter AJAX endpoints** — `get_global_colors()`, `get_typography()`, etc.
3. **🔴 Sanitize `$_POST` values in `BlocksAjax.php`** — add `sanitize_text_field()`, `intval()`
4. **🔴 Fix REST API permission callback** — add proper authentication
5. **🟠 Remove `LIBXML_NOENT | LIBXML_DTDLOAD` from SVG validation** — prevents XXE attacks
6. **🟠 Remove all `error_log()` calls** with raw POST data

### Short-term (next sprint)

11. **🟡 Fix REST namespace** from `wp/v2/frontis-blocks` to `frontis-blocks/v1`

### Medium-term (next quarter)

13. **🟢 Add automated tests** — PHPUnit for backend, Jest for blocks
14. **🟢 Centralize localization data** — single `wp_localize_script()` call
15. **🟢 Remove bundled `PclZip.php`** — use WordPress core's copy
16. **🟢 Break large files** — split `Admin.php` (38KB), `PostGrid.php:get_posts()` (700+ lines)
17. **🟢 Consolidate state management** — choose between Redux Toolkit or `@wordpress/data`
