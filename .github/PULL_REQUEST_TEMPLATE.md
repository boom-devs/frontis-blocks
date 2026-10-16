### 🔗 Related Issue
Closes #
<!-- NOTE: Frontis Blocks enforces an Issue-First Policy. Every PR MUST link to an approved issue. Orphan PRs without an issue will be closed. -->

### 📝 Summary of Changes
<!-- Describe the problem solved and the specific changes proposed in this Pull Request -->

### 🧪 Testing Instructions
<!-- Provide clear, step-by-step instructions to verify and validate this change in the WordPress block editor -->
1. Open the WordPress Block Editor (Gutenberg).
2. Insert or inspect the affected Frontis block/component.
3. Verify behavior matches expectations across Desktop, Tablet, and Mobile.

### 🛡️ Pre-Flight Quality & Safety Checklist
- [ ] **Issue Linked:** PR references an approved GitHub Issue via `Closes #<issue_number>`.
- [ ] **Zero Block Invalidation:** Verified existing blocks load with 0 block invalidation errors.
- [ ] **Deprecation Migrations:** If block `save.js` markup or attribute schema changed, registered a migration in `deprecated.js`.
- [ ] **Security Standards:** Complies with WordPress PHP Coding Standards (sanitization, escaping, nonces, permissions).
- [ ] **Build Verification:** Ran `npm run build` and `npm run admin:build` locally without syntax or webpack compilation errors.
- [ ] **Clean Git Tree:** No temporary files, debug code, or extraneous changes included.
