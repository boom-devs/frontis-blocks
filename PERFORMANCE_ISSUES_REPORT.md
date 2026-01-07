# Performance Issues Report - Frontis Blocks Plugin

## Executive Summary
The Gutenberg editor is experiencing 1.5-2 minute load times due to expensive database queries being executed on EVERY block registration. With 50+ blocks, this creates a massive performance bottleneck.

## Critical Issues Found

### 1. **Expensive Operations in Block Registration** (CRITICAL)
**Location:** `includes/Core/Blocks.php` lines 91-111

**Problem:** Every time a block is registered (50+ times), the following expensive operations are executed:

```php
'fluent_form_lists' => json_encode(FluentForms::form_list()),
'contact_form7_lists' => ContactForms7::form_list(),
'contact_form7_html' => ContactForms7::wf7_form_html(),
'post_types' => Helper::get_post_types(),
'all_cats' => Helper::get_related_taxonomy(),  // EXTREMELY EXPENSIVE
'all_authors' => Helper::get_all_authors_with_posts(),
```

**Impact:**
- `Helper::get_related_taxonomy()` alone can query thousands of database records
- Multiplied by 50+ blocks = 50,000+ database queries
- No caching whatsoever

### 2. **get_related_taxonomy() is a Performance Killer**
**Location:** `includes/Utils/Helper.php` lines 139-175

**Problem:** This function:
1. Gets all post types
2. For EACH post type, gets all taxonomies
3. For EACH taxonomy, gets ALL terms (can be thousands)
4. For EACH term, gets child terms
5. Returns massive nested array

**Example:** With 5 post types, 3 taxonomies each, 100 terms per taxonomy:
- 5 × 3 × 100 = 1,500 database queries
- Multiplied by 50 blocks = 75,000 queries!

### 3. **Duplicate Block List Loading**
**Location:** `includes/Plugin.php` lines 137-140

```php
//load blocks
self::$blocks = BlockList::get_instance()->get_blocks();

//load blocks
self::$blocks = BlockList::get_instance()->get_blocks();
```

**Impact:** Blocks loaded twice for no reason

### 4. **No Transient Caching**
None of these expensive operations use WordPress transients or object caching.

### 5. **Unnecessary Data Loading**
Most blocks don't need:
- ALL form lists
- ALL taxonomies and terms
- ALL authors
- ALL post types

This data should be loaded on-demand via REST API when needed.

## Performance Impact

**Current State:**
- Editor load time: 1.5-2 minutes
- Database queries: 50,000+ on editor load
- Memory usage: Very high due to massive arrays

**Expected After Fix:**
- Editor load time: 2-5 seconds
- Database queries: <100 on editor load
- Memory usage: Minimal

## Recommended Fixes

### Priority 1: Add Transient Caching
Cache expensive operations for 12 hours:
- `get_related_taxonomy()` → Cache per post type
- `get_all_authors_with_posts()` → Cache globally
- `FluentForms::form_list()` → Cache globally
- `ContactForms7::form_list()` → Cache globally

### Priority 2: Lazy Load Data
Move data loading from block registration to REST API endpoints:
- Load taxonomies only when block inspector is opened
- Load forms only for form blocks
- Load authors only for author-related blocks

### Priority 3: Optimize Queries
- Use `'fields' => 'ids'` where possible
- Limit term queries with `'number' => 100`
- Add pagination for large datasets

### Priority 4: Remove Duplicate Code
- Fix duplicate block list loading in Plugin.php

## Files Requiring Changes

1. `includes/Core/Blocks.php` - Add caching, remove unnecessary data
2. `includes/Utils/Helper.php` - Add caching to expensive functions
3. `includes/Plugin.php` - Remove duplicate block loading
4. `includes/RestApi/` - Create endpoints for lazy-loaded data

## Testing Recommendations

1. Test with Query Monitor plugin to verify query reduction
2. Test editor load time before/after
3. Clear transients and verify cache regeneration
4. Test with large sites (1000+ posts, 500+ terms)

---

**Date:** 2025-12-26
**Severity:** CRITICAL
**Estimated Fix Time:** 2-4 hours
