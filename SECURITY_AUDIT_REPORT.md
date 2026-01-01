# Frontis Blocks - Security & Code Quality Audit Report

> **Date**: 2026-01-01  
> **Plugin Version**: 1.1.6

---

## Table of Contents
1. [Security Issues](#security-issues)
2. [Performance Issues](#performance-issues)
3. [Code Quality Issues](#code-quality-issues)
4. [Recommendations Summary](#recommendations-summary)

---

## 📊 Resolution Status

| # | Issue | Severity | Status |
|---|-------|----------|--------|
| 1 | Missing Data Sanitization in `GlobalSettings.php` | 🔴 Critical | ⏳ Pending |
| 2 | Missing Sanitization in `TemplateLibrary.php` | 🔴 Critical | ✅ **RESOLVED** (2026-01-01) |
| 3 | Missing Sanitization in `Settings.php` | 🔴 Critical | ✅ **RESOLVED** (2026-01-01) |
| 4 | Open REST API Endpoint | 🟠 High | ⏳ Pending |
| 5 | Potential Path Traversal in Icon Upload | 🟠 High | ⏳ Pending |
| 6 | Debug Logging in Production | 🟡 Medium | ⏳ Pending |
| 7 | `flush_rewrite_rules()` on Every Load | 🔴 Critical | ⏳ Pending |
| 8 | No Caching for Google Fonts API | 🟠 High | ⏳ Pending |
| 9 | Multiple Database Queries | 🟠 High | ⏳ Pending |
| 10 | auth_callback Returns True | 🟠 High | ⏳ Pending |
| 11 | Unused Variable `$suffix` | 🟡 Medium | ⏳ Pending |
| 12 | Commented-Out Code Blocks | 🟡 Medium | ⏳ Pending |
| 13 | Missing Return Statement | 🟡 Medium | ⏳ Pending |
| 14 | Inconsistent Nonce Naming | 🟡 Medium | ⏳ Pending |

**Progress: 2/14 issues resolved (14%)**

---

## Security Issues

### 🔴 CRITICAL

#### 1. Missing Data Sanitization in `GlobalSettings.php`
**File**: [GlobalSettings.php](file:///Users/noruzzamanrubel/Local Sites/test/app/public/wp-content/plugins/frontis-blocks/includes/Admin/Ajax/GlobalSettings.php)  
**Lines**: 247, 221

```php
// Line 247 - Unsanitized data directly stored in database
$updated = update_option($option_name, isset($_POST['data']) ? $_POST['data'] : [], true);

// Line 221 - Nonce key accessed without isset check
if (!wp_verify_nonce($_POST['nonce'], 'fb_sidebar_nonce')) {
```

**Issue**: `$_POST['data']` is stored directly in the database without any sanitization. This could allow stored XSS or SQL injection attacks.

**Fix**: Use `sanitize_text_field()`, `wp_kses_post()`, or recursive sanitization for arrays.

---

#### 2. ~~Missing Sanitization in `TemplateLibrary.php`~~ ✅ SOLVED
**File**: [TemplateLibrary.php](file:///Users/noruzzamanrubel/Local Sites/test/app/public/wp-content/plugins/frontis-blocks/includes/Admin/Ajax/TemplateLibrary.php)  
**Lines**: 70-71, 338  
**Status**: ✅ Fixed on 2026-01-01

**Applied Fix**:
```php
// Lines 70-71 - Now sanitized
$option_name = isset($_POST['option_name']) ? sanitize_key($_POST['option_name']) : '';
$value = isset($_POST['value']) ? sanitize_text_field($_POST['value']) : '';

// Line 338 - Content now sanitized with wp_kses_post()
$content = isset($_POST['content']) ? wp_kses_post($_POST['content']) : '';
```

---

#### 3. ~~Missing Sanitization in `Settings.php`~~ ✅ SOLVED
**File**: [Settings.php](file:///Users/noruzzamanrubel/Local Sites/test/app/public/wp-content/plugins/frontis-blocks/includes/Admin/Ajax/Settings.php)  
**Lines**: 80, 368  
**Status**: ✅ Fixed on 2026-01-01

**Original Code (Vulnerable)**:
```php
// Line 80 - Array keys not sanitized
$keys = isset($_POST['keys']) ? $_POST['keys'] : [];

// Line 368 - Data stored without sanitization
$allowed_blocks = isset($_POST['data']) ? ($_POST['data']) : [];
```

**Applied Fix**:
```php
// Line 80 - Array keys now sanitized
$keys = isset($_POST['keys']) ? array_map('sanitize_key', (array) $_POST['keys']) : [];

// Line 368 - Data now sanitized
$allowed_blocks = isset($_POST['data']) ? array_map('sanitize_text_field', (array) $_POST['data']) : [];
```

---

### 🟠 HIGH

#### 4. Open REST API Endpoint
**File**: [Admin.php](file:///Users/noruzzamanrubel/Local Sites/test/app/public/wp-content/plugins/frontis-blocks/includes/Admin/Admin.php)  
**Lines**: 465-471, 486-491, 507-511

```php
// Lines 465-471 - Icons endpoint open to anyone
register_rest_route('wp/v2/frontis-blocks', '/icons', [
    'methods' => 'GET',
    'callback' => [$this, 'get_icons'],
    'permission_callback' => function () {
        return true; // ⚠️ No authentication required
    },
]);

// Lines 486-491, 507-511 - Global settings readable by anyone
'permission_callback' => function () {
    return true; // ⚠️ Exposes settings to unauthenticated users
},
```

**Issue**: Multiple REST API endpoints are accessible without authentication, potentially exposing sensitive configuration data.

**Fix**: Add proper capability checks:
```php
'permission_callback' => function () {
    return current_user_can('edit_posts');
},
```

---

#### 5. Potential Path Traversal in Icon Upload
**File**: [Settings.php](file:///Users/noruzzamanrubel/Local Sites/test/app/public/wp-content/plugins/frontis-blocks/includes/Admin/Ajax/Settings.php)  
**Lines**: 668-669

```php
$fileName = pathinfo(basename($icon_url), PATHINFO_FILENAME);
$upload_directory = WP_CONTENT_DIR . '/uploads/frontis-custom-icons/' . $fileName;
```

**Issue**: While `basename()` is used, the filename could still contain malicious characters. Should use `sanitize_file_name()`.

---

### 🟡 MEDIUM

#### 6. Debug Logging in Production
**File**: [GlobalSettings.php](file:///Users/noruzzamanrubel/Local Sites/test/app/public/wp-content/plugins/frontis-blocks/includes/Admin/Ajax/GlobalSettings.php)  
**Line**: 517

```php
error_log('AJAX Data Received: ' . print_r($_POST, true));
```

**Issue**: Sensitive user data is being logged, which could expose information in server logs.

**Fix**: Remove or wrap in `WP_DEBUG` check:
```php
if (defined('WP_DEBUG') && WP_DEBUG) {
    error_log('AJAX Data Received: ' . print_r($_POST, true));
}
```

---

## Performance Issues

### 🔴 CRITICAL

#### 1. `flush_rewrite_rules()` Called on Every Page Load
**File**: [Admin.php](file:///Users/noruzzamanrubel/Local Sites/test/app/public/wp-content/plugins/frontis-blocks/includes/Admin/Admin.php)  
**Lines**: 91-92

```php
add_rewrite_rule('^template-proxy/?$', 'index.php?template_proxy=1', 'top');
flush_rewrite_rules(false); // ⚠️ Called on EVERY init
```

**Issue**: `flush_rewrite_rules()` is an expensive operation that rewrites the `.htaccess` file. Calling it on every page load significantly impacts performance.

**Fix**: Only flush on plugin activation:
```php
// In register_meta_settings() - remove flush_rewrite_rules()
add_rewrite_rule('^template-proxy/?$', 'index.php?template_proxy=1', 'top');
// Don't call flush_rewrite_rules() here!

// Create separate activation hook
register_activation_hook(__FILE__, function() {
    add_rewrite_rule('^template-proxy/?$', 'index.php?template_proxy=1', 'top');
    flush_rewrite_rules();
});
```

---

### 🟠 HIGH

#### 2. No Caching for Google Fonts API Request
**File**: [Admin.php](file:///Users/noruzzamanrubel/Local Sites/test/app/public/wp-content/plugins/frontis-blocks/includes/Admin/Admin.php)  
**Lines**: 329-375

```php
public function store_google_fonts()
{
    // This is called in constructor, potentially on every page load
    // Before checking transient...
```

**Issue**: The `store_google_fonts()` method is called in the constructor. While it does check for a transient, the method is still invoked unnecessarily.

**Fix**: Lazy-load this method only when fonts are actually needed.

---

#### 3. Multiple Database Queries in `enqueue_scripts()`
**File**: [Admin.php](file:///Users/noruzzamanrubel/Local Sites/test/app/public/wp-content/plugins/frontis-blocks/includes/Admin/Admin.php)  
**Lines**: 169-176, 206-236

```php
$automatic_block_recovery = get_option('fb_automatic_block_recovery');
$enable_quick_action_bar = get_option('fb_enable_quick_action_bar');
$copy_paste_style = get_option('fb_copy_paste_style');
// ... many more get_option() calls
```

**Issue**: Multiple individual `get_option()` calls instead of batching. Each call is a database query.

**Fix**: Store all settings in a single option as an array:
```php
$fb_settings = get_option('fb_settings', []);
$automatic_block_recovery = $fb_settings['automatic_block_recovery'] ?? '';
```

---

## Code Quality Issues

### 🟠 HIGH

#### 1. auth_callback Returns True for All Users
**File**: [Admin.php](file:///Users/noruzzamanrubel/Local Sites/test/app/public/wp-content/plugins/frontis-blocks/includes/Admin/Admin.php)  
**Lines**: 64, 75, 86

```php
'auth_callback' => '__return_true',
```

**Issue**: Post meta is editable by anyone who can edit the post. This should be restricted.

**Fix**:
```php
'auth_callback' => function() {
    return current_user_can('edit_posts');
},
```

---

#### 2. Unused Variable `$suffix`
**File**: [Admin.php](file:///Users/noruzzamanrubel/Local Sites/test/app/public/wp-content/plugins/frontis-blocks/includes/Admin/Admin.php)  
**Lines**: 137, 284

```php
$suffix = defined('SCRIPT_DEBUG') && SCRIPT_DEBUG ? '' : '';
```

**Issue**: The ternary returns the same empty string in both cases, making `$suffix` always empty and useless.

---

#### 3. Commented-Out Code Blocks
**File**: [GlobalSettings.php](file:///Users/noruzzamanrubel/Local Sites/test/app/public/wp-content/plugins/frontis-blocks/includes/Admin/Ajax/GlobalSettings.php)  
**Lines**: 351-511

Large blocks of commented-out code should be removed. Version control exists for a reason.

---

#### 4. Missing Return Statement After Error
**File**: [Settings.php](file:///Users/noruzzamanrubel/Local Sites/test/app/public/wp-content/plugins/frontis-blocks/includes/Admin/Ajax/Settings.php)  
**Line**: 134

```php
if (!current_user_can('manage_options')) {
    wp_send_json_error(['message' => 'Insufficient permissions'], 403);
    // ⚠️ Missing return; - code continues to execute
}
```

---

#### 5. Inconsistent Nonce Naming
**Files**: Multiple  
Different nonce names are used across the plugin:
- `fb_settings_nonce`
- `fb_sidebar_nonce`
- `fb_block_nonce`
- `fb_post_like_nonce`
- `fb_import_demo_data`

**Issue**: Makes the codebase harder to maintain and could lead to confusion.

---

## Recommendations Summary

### Priority 1 (Critical - Fix Immediately)
| Issue | File | Action |
|-------|------|--------|
| Unsanitized `$_POST['data']` storage | GlobalSettings.php | Add recursive sanitization |
| `flush_rewrite_rules()` on every load | Admin.php | Move to activation hook only |
| Missing sanitization in update_option | TemplateLibrary.php | Add `sanitize_key()` |

### Priority 2 (High - Fix Soon)
| Issue | File | Action |
|-------|------|--------|
| Open REST API endpoints | Admin.php | Add capability checks |
| Debug logging in production | GlobalSettings.php | Remove or wrap in WP_DEBUG |
| Path traversal risk | Settings.php | Use `sanitize_file_name()` |

### Priority 3 (Medium - Plan to Fix)
| Issue | File | Action |
|-------|------|--------|
| Multiple `get_option()` calls | Admin.php | Consolidate into single option |
| Unused `$suffix` variable | Admin.php | Remove or implement properly |
| Commented code blocks | GlobalSettings.php | Remove entirely |

---

## Quick Verification Checklist

- [ ] Run PHPCS with WordPress-Extra ruleset
- [ ] Test all AJAX endpoints with invalid/malicious input
- [ ] Verify REST API endpoints don't expose sensitive data
- [ ] Confirm `flush_rewrite_rules()` only runs on activation
- [ ] Test file upload functionality with malicious filenames
