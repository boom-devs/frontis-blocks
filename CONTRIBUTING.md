# Contributing to Frontis Blocks

First off, thank you for considering contributing to **Frontis Blocks**! 🎉

Frontis Blocks is an advanced Gutenberg block suite built for high performance, modern site building, and clean code output in WordPress. We welcome contributions from developers, designers, translators, and documentation writers.

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your machine:
- **Node.js:** `v20.x` or higher (LTS recommended)
- **npm:** `v10.x` or higher
- **PHP:** `v7.4` to `v8.4`
- **Composer:** `v2.x`
- **Local WordPress Environment:** [LocalWP](https://localwp.com/), [wp-env](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/), or Docker.

---

## 🚀 Local Development Setup

1. **Fork and Clone the Repository:**
   ```bash
   git clone https://github.com/boom-devs/frontis-blocks.git
   cd frontis-blocks
   ```

2. **Install Node & Composer Dependencies:**
   ```bash
   npm ci
   composer install
   ```

3. **Start Watch Mode (Development):**
   ```bash
   # Watch Gutenberg blocks:
   npm run start

   # Watch Admin Dashboard & Sidebar (in another terminal):
   npm run admin
   ```

4. **Production Build:**
   ```bash
   # Build blocks:
   npm run build

   # Build admin dashboard & sidebar:
   npm run admin:build

   # Generate distribution ZIP package:
   npm run plugin-zip
   ```

---

## 🌿 Branching & Development Workflow

1. **Keep Your Fork Updated:**
   Always sync your local `main` branch before starting new work:
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Branch Naming Standard:**
   Create a dedicated branch following the convention `<type>/<issue-number>-<short-description>`:
   ```bash
   # Bug Fixes
   git checkout -b fix/123-container-padding-mobile

   # New Features
   git checkout -b feat/124-tabs-vertical-layout

   # Documentation
   git checkout -b docs/125-update-readme-badges

   # Refactoring & Performance
   git checkout -b refactor/126-global-style-generator
   ```

---

## 📋 Pull Request Title & Commit Conventions

Frontis Blocks adheres strictly to [Conventional Commits](https://www.conventionalcommits.org/):

```text
<type>(<scope>): <short description in present tense>
```

- **Types:**
  - `feat`: A new block, control, or feature
  - `fix`: A bug fix or patch
  - `refactor`: Code change that neither fixes a bug nor adds a feature
  - `perf`: A code change that improves performance
  - `docs`: Documentation-only changes
  - `style`: Changes that do not affect code logic (formatting, spacing)
  - `test`: Adding or updating tests
  - `ci` / `chore`: CI/CD workflows, build tools, dependencies
- **Scopes:**
  - `blocks`, `container`, `button`, `heading`, `slider`, `sidebar`, `template-library`, `core`, `ci-cd`
- **Examples:**
  - `feat(container): add flexible column gap controls`
  - `fix(slider): resolve autoplay pause on hover in iOS Safari`
  - `refactor(sidebar): optimize CSS variable generator performance`

---

## 🎯 Issue-First Policy (No Orphan PRs)

> [!IMPORTANT]
> **Every Pull Request must link to an approved GitHub Issue.**  
> Frontis Blocks enforces an **Issue-First Policy**. Unsolicited pull requests submitted without an open, approved GitHub issue will be politely closed.
>
> **The 3-Step Flow:**
> 1. **Open an Issue First:** Propose your feature or report your bug via [GitHub Issues](https://github.com/boom-devs/frontis-blocks/issues).
> 2. **Discuss & Get Assigned:** Discuss the solution with maintainers and confirm the approach.
> 3. **Submit PR with Issue Link:** Reference the issue in your PR description:
>    ```markdown
>    ### 🔗 Related Issue
>    Closes #<issue_number>
>    ```

---

## 🔒 Strict Component Lock Policy (`src/components/`)

> [!CAUTION]
> ### 🛑 `src/components/` IS STRICTLY LOCKED TO MAINTAINERS
> The `src/components/` directory contains 35+ core UI design system controls shared across **70+ blocks**.
> 
> - **MAINTAINERS ONLY**: Only designated repository maintainers (`@noruzzamans`, `@boom-devs`) are authorized to modify, update, or add files in `src/components/`.
> - **NO EXTERNAL EDITS**: External contributors and autonomous AI agents are **strictly forbidden** from editing, refactoring, or adding files in `src/components/`.
> - **AUTOMATED CI REJECTION**: Any external pull request touching `src/components/` will be immediately flagged with `needs: changes`, receive an automated warning comment, and will NOT be merged.
> - **REQUESTING CHANGES**: If you need a new control or a bug fix in an existing control, open a Feature Request or Bug Issue so maintainers can implement it safely.

---

## 🧩 Block Development Rules & Guidelines

1. **Zero Block Invalidation:**
   - Existing blocks rendered in published WordPress posts must NEVER crash or show the dreaded *"This block contains unexpected or invalid content"* error.
   - If you modify `save.js` markup or change block attribute defaults, you **MUST** provide a backward-compatible migration in `deprecated.js`.

2. **Security & Data Sanitization:**
   - All server-side PHP outputs must be escaped using proper WordPress helpers (`esc_html`, `esc_attr`, `esc_url`, `wp_kses_post`).
   - All database or REST API inputs must be sanitized (`sanitize_text_field`, `esc_url_raw`).
   - Check user capabilities (`current_user_can`) and nonces for all state-changing endpoints.

3. **Performance First:**
   - Generate minimal DOM elements.
   - Enqueue block frontend assets dynamically only when the block is present on the page.

---

## 🤖 AI-Assisted Contribution Policy

We welcome contributions generated with the assistance of modern AI coding tools (Claude, Cursor, Copilot, Antigravity, Gemini, etc.), provided the following guidelines are honored:
1. **Developer Ownership:** You are 100% accountable for every line of code submitted. Test your changes locally before submitting.
2. **No Hallucinations:** Verify that all functions, APIs, and libraries used actually exist in WordPress Core or this repository.
3. **High Architectural Quality:** Maintain code consistency, clean formatting, and meaningful commit messages.

---

## 🛡️ Pre-Flight Checklist Before Submitting PR

Before opening your pull request, verify:
- [ ] Ran `npm run build` and `npm run admin:build` successfully with 0 errors.
- [ ] Tested the block in the Gutenberg editor on Desktop, Tablet, and Mobile.
- [ ] Verified that existing blocks load without invalidation errors.
- [ ] All commits follow the Conventional Commits specification.
- [ ] The PR description references the related issue via `Closes #<issue_number>`.
