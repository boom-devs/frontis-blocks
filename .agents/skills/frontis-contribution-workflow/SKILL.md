---
name: frontis-contribution-workflow
description: >-
  Standardized international open-source workflow for Frontis Blocks: Issue-first policy,
  PR title & description standards (Closes #<issue>), Conventional Commits, locked core components
  policy (src/components/), Use of AI guidelines, and maintainer review flow.
---

# Frontis Contribution & Workflow Standards

This skill documents the complete open-source workflow, issue/PR conventions, AI usage policies, and directory protections for **Frontis Blocks**.

---

> [!CAUTION]
> ## 🔒 PROTECTED CORE DIRECTORY: `src/components/` (Maintainer-Only)
> **The 35+ UI controls in `src/components/` form the foundational Design System of Frontis Blocks.**
> All 70+ Gutenberg blocks depend directly on these shared components. Any unauthorized modification can cause catastrophic cascading regressions across **30,000+ live websites**.
>
> 1. **Modification Lock:** **NO ONE EXCEPT REPOSITORY MAINTAINERS (`@noruzzamans`, `@boom-devs`) IS PERMITTED TO EDIT, REFACTOR, OR ADD CODE TO `src/components/`.**
> 2. **Automatic Rejection:** Any external PR or autonomous AI contribution that touches files in `src/components/` **WILL BE AUTOMATICALLY FLAGGED WITH `needs: changes` AND REJECTED** by GitHub Actions automated triage.
> 3. **Usage Only:** Contributors and AI agents may **USE** these controls in blocks via `@Components/...`, but must **NEVER ALTER** their internal implementation.
> 4. **Feature Requests:** If a block requires a new control or an enhancement to an existing control, open an Issue for maintainers to evaluate and implement.

---

## 🏷️ 1. Pull Request Title Convention (Conventional Commits)

All PR and Issue titles must strictly follow the **Conventional Commits** specification:

```text
<type>(<scope>): <short description in present tense>
```

### Approved Types
| Type | Purpose | Example |
| :--- | :--- | :--- |
| `feat` | New block, component capability, or feature | `feat(blocks): add coverflow carousel transition controls` |
| `fix` | Bug fix, CSS regression, or compatibility patch | `fix(accordion): resolve keyboard accessibility toggle` |
| `refactor` | Architecture overhaul with zero behavior change | `refactor(core): streamline dynamic CSS queue generator` |
| `docs` | Documentation, skills, rules, or changelog updates | `docs(readme): modernize badges and architecture guide` |
| `ci` | GitHub Actions workflows and automation | `ci: add multi-PHP compatibility matrix` |
| `test` | PHP syntax verification or unit tests | `test(php): validate PHP 8.4 compatibility` |
| `chore` | Build config, dependency updates, or zip scripts | `chore(deps): update webpack bundler dependencies` |

### Approved Scopes
`blocks` · `design-system` · `admin` · `forms` · `core` · `php-backend` · `ci-cd` · `a11y` · `i18n`

### Title Formatting Rules
1. Always start with a lowercase letter after the colon.
2. Use imperative present tense (`add`, `fix`, `refactor` — NEVER `added`, `fixes`, `refactoring`).
3. NEVER end the title with a period (`.`).

---

## 🎯 2. Issue-First Policy (Zero Orphan PRs & Automated Labeling)

> [!IMPORTANT]
> **No Pull Request without an approved issue:**
> Frontis Blocks strictly enforces an **Issue-First Policy**. Every pull request **MUST** link to an open, approved GitHub Issue. Unsolicited or "orphan" PRs submitted without an existing issue will be rejected and closed.
>
> **The 3-Step Flow:**
> 1. **Open an Issue First:** Always supply appropriate labels during `gh issue create`.
>    Example:
>    ```bash
>    gh issue create --title "feat(blocks): add responsive padding to container" --body "..." --label "type: enhancement,focus: blocks"
>    ```
> 2. **Discuss & Get Assigned:** Maintainers review and assign the issue.
> 3. **Open the PR with `Closes #<issue_number>`:** Always link the issue in the PR description so merging the PR automatically closes the issue.
>
> **Automated Issue Labeler:**
> GitHub Actions automatically runs `.github/workflows/issue-automation.yml` on every opened/edited issue, parsing Conventional Commits prefixes and scopes to guarantee consistent labels across all issues.

---

## 📝 3. Pull Request Description Standard

Every PR must strictly follow `.github/PULL_REQUEST_TEMPLATE.md`:

```markdown
### 🔗 Related Issue
Closes #<issue_number>

### Changes proposed in this Pull Request:
- Concise, bulleted list of specific changes made.

### Testing instructions:
1. Open the WordPress Block Editor (Gutenberg).
2. Insert the affected block.
3. Verify behavior matches expectations.

### 🛡️ Frontis Quality & Safety Checklist:
- [x] **Protected Directory:** Did NOT modify `src/components/` (maintained exclusively by @noruzzamans, @boom-devs).
- [x] **Strict Design System:** Uses ONLY approved `@Components/*` controls without altering internals.
- [x] **Zero Regressions:** Existing blocks load with 0 block invalidation errors.
- [x] **PHP Standards:** Sanitization, escaping, and nonces are 100% compliant.
- [x] **30,000+ Sites Protection:** Zero breaking changes to attributes or saved markup.
```

---

## 🤖 4. Use of AI Policy (AI-Assisted Contributions)

Frontis Blocks welcomes contributions assisted by modern AI tooling (Claude, Cursor, Copilot, Antigravity, Gemini, etc.) subject to non-negotiable enterprise quality standards:

1. **Human Ownership:** AI is an accelerator, but the committer takes 100% responsibility for the code. Blind copy-pasting of AI output without manual verification is strictly forbidden.
2. **Zero Hallucinations:** Every function, filter, hook, and npm/composer package must exist and be legitimate. Never introduce imaginary dependencies.
3. **Zero Block Invalidation:** AI agents must never modify `save.js` markup or attribute schemas of existing blocks without backward-compatible deprecation migrations.
4. **Authentic Senior Engineer Tone (Zero Chatbot Fluff):** PR descriptions and comments must be concise and technical. Speak directly about technical trade-offs.
5. **100% Local Validation:** Before opening a PR, the contributor must run and pass:
   ```bash
   npm run build
   npm run admin:build
   ```
6. **Codebase-First Rule (Zero Redundancy):** Always inspect related traits, interfaces, and classes before writing code.
7. **Surgical Minimal Diffs:** PRs must only change lines strictly necessary for the assigned issue. Never inject unprompted methods, speculative boilerplate, or unrelated reformatting.
8. **Git Cleanliness:** Never stage untracked files (`vendor/`, dev dependencies, logs, caches). Keep PR diffs 100% atomic and focused.

---

## 👥 5. Assignees and Code Review Flow

1. **Assignees:** When working on an issue, assign yourself to signal active development and avoid duplicate work.
2. **Reviewers:** Code ownership is universal (`* @noruzzamans @boom-devs`). All PRs require review and approval from repository maintainers before merging into `main`.
