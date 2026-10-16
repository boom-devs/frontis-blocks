# 🤖 AI Agent & Contributor Handbook: Frontis Blocks

Welcome to **Frontis Blocks**! This document serves as the master operational handbook for autonomous AI coding agents (Gemini, Claude, Antigravity) and human contributors collaborating on this repository.

---

## 🧠 Agent & Developer Skills

| Skill | Purpose |
| :--- | :--- |
| **[`frontis-contribution-workflow`](.agents/skills/frontis-contribution-workflow/SKILL.md)** | Standardized international open-source workflow: Issue-first policy, Conventional Commits, `src/components/` strict lock policy, and PR template standards. |

---

## 🏗️ Repository Architecture

Frontis Blocks is a high-performance, modular WordPress Gutenberg plugin powering 30,000+ live websites.

```text
frontis-blocks/
├── admin/                    # Admin dashboard, template library & settings
│   ├── components/           # Admin-specific React components
│   ├── dashboard/            # Plugin dashboard & settings UI
│   ├── scss/                 # Admin styles & design tokens
│   └── template-library/     # Cloud template library importer
├── assets/                   # Public assets (icons, fonts, vendor libraries)
├── build/                    # Compiled distribution assets (Webpack output)
├── includes/                 # PHP Backend Architecture
│   ├── Activator/            # Activation & migration hooks
│   ├── Admin/                # WordPress admin menu & settings handlers
│   ├── Core/                 # Core block registration & asset enqueueing
│   ├── Forms/                # Form builder backend & submissions
│   ├── RestApi/              # Custom WP REST API endpoints
│   └── Plugin.php            # Main plugin singleton orchestrator
├── languages/                # Translation POT & PO files
├── src/                      # Source Code
│   ├── blocks/               # 70+ Gutenberg Blocks (accordion, slider, grid, etc.)
│   ├── components/           # 35+ Core Design System Controls (@Components/*)
│   ├── config/               # Block configuration & presets
│   └── utils/                # React hooks, helpers & color utilities
├── .github/
│   ├── workflows/            # GitHub Actions (CI/CD, PR & Issue triage, Gemini review)
│   └── labeler.yml           # Automated path-based component labeling
├── frontis-blocks.php        # WordPress plugin bootstrap header
├── package.json              # NPM dependencies and build scripts
└── webpack.config.js         # Production Webpack bundler for blocks
```

---

## ⚡ Development & Build Workflows

### Essential NPM Scripts
- `npm run start` : Watch mode for block development (`wp-scripts start`)
- `npm run build` : Production build of blocks (`wp-scripts build --config webpack.config.js`)
- `npm run admin` : Watch mode for admin assets (`wp-scripts start --webpack-src-dir=admin`)
- `npm run admin:build` : Production build of admin assets
- `npm run format` : Format code according to WordPress coding standards
- `npm run lint:js` : Lint JavaScript code with ESLint
- `npm run lint:css` : Lint CSS/SCSS code with Stylelint
- `npm run zip` : Generate distributable plugin zip archive (`webpack.zip.js`)

---

## 📐 Golden Architectural Rules

### 1. Strict Block Directory Structure
Every block in `src/blocks/<slug>/` MUST contain:
- `block.json`: Block metadata, attributes schema, supports, and API version 2/3.
- `index.js`: Block registration entrypoint with `registerBlockType`.
- `attributes.js`: Attribute defaults, responsive settings, and schema definitions.
- `edit.js`: Gutenberg editor view with React state and inspector panels.
- `save.js`: Static HTML output for frontend server rendering.
- `styling.js`: Dynamic CSS generator compiling block attributes into inline/head CSS.
- `view.js`: Optional frontend interactive script (for carousels, tabs, accordions, modals).
- `style.scss` & `editor.scss`: Clean scoped styling.

### 2. Standardized Attribute Schemas
Attribute definitions in `attributes.js` must strictly follow Frontis Blocks patterns:
- **Spacing Pattern**: Unit selection (`px`, `em`, `rem`, `%`), desktop, tablet, and mobile values with linkable sides.
- **Typography Pattern**: Font family, font size, weight, text transform, line height, letter spacing, word spacing with responsive breakpoints.
- **Color Switching**: Support for normal, hover, active color swatches and gradient values.
- **Mandatory Attributes**: Every block must maintain `blockId`, `blockStyle`, `globalID`, and `globalClass`.

### 3. Dynamic CSS Generation Engine
- Never write hardcoded inline CSS directly in `save.js`.
- All custom spacing, typography, colors, and layout rules must be compiled dynamically in `styling.js` and loaded through Frontis Blocks dynamic CSS queue for optimal Core Web Vitals (zero unused CSS).

### 4. WordPress Security & Data Integrity
In all PHP backend code:
- **Input Sanitization**: Always sanitize input before processing (`sanitize_text_field()`, `sanitize_key()`, `wp_unslash()`).
- **Output Escaping**: Always escape variables in HTML output (`esc_html__()`, `esc_attr__()`, `esc_url()`).
- **Authorization & Nonces**: Verify nonces (`check_ajax_referer()`, `wp_verify_nonce()`) and capabilities (`current_user_can('manage_options')`) on all REST/AJAX endpoints.
- **File System**: Use `WP_Filesystem` abstraction instead of raw `file_put_contents()` or `unlink()`.

### 5. Strict Component Lock Policy (`src/components/`)
- `src/components/` contains 35+ core design system controls (e.g. `responsive-alignment-control`, `color-control`, `typography-control`, `icon-picker`).
- These components are shared across all 70+ blocks and 30,000+ live sites.
- **🛑 STRICT LOCK: NO ONE EXCEPT REPOSITORY MAINTAINERS (`@noruzzamans`, `@boom-devs`) IS AUTHORIZED TO MODIFY, REFACTOR, OR ADD FILES IN `src/components/`.**
- External contributors and autonomous AI coding agents are **strictly forbidden** from modifying `src/components/`. Any pull request or automated commit touching this directory will be flagged with `needs: changes` and rejected by CI guards.
- Blocks must strictly consume existing `@Components/*` controls without altering component internals.

### 6. Surgical & Atomic Diffs
- Maintain surgical precision in code changes.
- Do not introduce unrelated refactoring, unprompted boilerplate, or speculative abstractions.
- Preserve all existing comments, license headers, and documentation integrity.

---

## 🏷️ Issue & PR Triage Standards

Frontis Blocks follows an automated Issue-Driven Development lifecycle:
- **Conventional Commits**: PR and issue titles should follow Conventional Commits:
  - `fix:` -> Automatically labeled `type: bug`
  - `feat:` -> Automatically labeled `type: enhancement`
  - `refactor:` -> Automatically labeled `type: architecture`
  - `perf:` -> Automatically labeled `type: performance`
  - `sec:` -> Automatically labeled `type: security`
  - `docs:` -> Automatically labeled `type: documentation`
  - `ci:` / `chore:` -> Automatically labeled `focus: ci-cd`
- **Path Labeler**: Modifying `src/blocks/` adds `focus: blocks`, modifying `includes/` adds `focus: php-backend`, etc.
- **Automated AI Review**: Native Gemini 3.8 Flash automatically performs code reviews on pull requests.
