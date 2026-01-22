# Subject: Security Fixes Applied for Frontis Blocks (Version 1.1.7)

Dear WordPress Plugin Review Team,

I have addressed the security vulnerability (CVE-2026-0807) and performed a comprehensive security review as requested.

## Actions Taken:

### 1. Remediated SSRF
- Secured `template_proxy` and `/proxy-image` endpoints.
- Added `current_user_can('manage_options')` checks.
- Implemented `wp_safe_remote_get()` to block private network access.
- **Domain Allowlist**: Restricted the proxy to only allow requests to our trusted API domains (`PORTAL_API` and `WORDPRESS_SYNC_API`).

### 2. Plugin Check & Security Hardening
- Fixed raw SQL queries in `Settings.php` using `$wpdb->prepare()`.
- Enforced strict sanitization for all settings options.
- Added `wp_unslash()` for JSON handling in the importer.

### 3. Documentation
- Updated `readme.txt` with a detailed changelog and incremented version to **1.1.7**.

The updated code has been committed to the repository. Please review the plugin for reinstatement.

Thank you.
