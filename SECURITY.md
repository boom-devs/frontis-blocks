# Security Policy

## Supported Versions

We release security updates and patches for the current major/minor release cycle. We encourage all users and administrators to run the latest version of Frontis Blocks.

| Version | Supported          | Security Status |
| :------ | :----------------- | :-------------- |
| 1.2.x   | :white_check_mark: | Actively supported (Current Stable) |
| < 1.2.0 | :x:                | End of Life (Upgrade strongly recommended) |

---

## Reporting a Vulnerability

The Frontis Blocks team takes the security of our plugin, users, and all WordPress sites running our code seriously.

If you believe you have discovered a security vulnerability in Frontis Blocks, please report it to us responsibly. **Do NOT report security vulnerabilities via public GitHub issues, discussions, or pull requests.**

### How to Report

1. **Email Disclosure (Preferred):**
   Send a detailed vulnerability report to **[support@boomdevs.com](mailto:support@boomdevs.com)** with the subject line `[SECURITY] Frontis Blocks Vulnerability Report`.
2. **GitHub Security Advisory:**
   Alternatively, you may submit a confidential advisory directly via [GitHub Private Vulnerability Reporting](https://github.com/boom-devs/frontis-blocks/security/advisories/new).

### What to Include in Your Report

To help us triage and resolve the issue quickly, please include:
- A clear description of the vulnerability and its potential impact.
- Step-by-step reproduction instructions or a Proof of Concept (PoC) script/payload.
- The version(s) of Frontis Blocks and WordPress tested.
- Suggested mitigations or patches (if available).

### Response Timeline & Coordinated Disclosure

- **Acknowledgment:** We will acknowledge receipt of your vulnerability report within **48 hours**.
- **Assessment:** We will confirm the vulnerability, determine its severity, and provide a remediation timeline within **5 business days**.
- **Patch & Release:** A fix will be developed, tested, and deployed to WordPress.org SVN and GitHub Releases.
- **Credit:** We will publicly credit your contribution in the release notes and advisory (unless you prefer to remain anonymous).

---

## Built-In Security Architecture

Frontis Blocks follows strict WordPress Core Security Guidelines:
- **Block Markup:** Frontend block HTML is the static output of each block's `save.js`, stored in post content and rendered securely by WordPress. Server-side rendered dynamic blocks escape all printed strings (`esc_html__`, `esc_attr__`, `esc_url`).
- **REST API Endpoints:** All custom REST endpoints enforce permission callbacks (`permission_callback => function() { return current_user_can( 'edit_posts' ); }`), request nonce validation, and payload sanitization (`sanitize_text_field`, `esc_url_raw`, `wp_kses_post`).
- **SVG Upload Hardening:** SVG icons and media are sanitized to prevent Stored XSS, stripping script elements, entity declarations, and dangerous attributes.
- **Zero Third-Party Tracking:** The codebase contains zero hidden trackers or covert analytics.
