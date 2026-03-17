# Changelog - Version 1.2.0 (17 March 2026)

### 🚀 New Features & Improvements

#### ✨ New Features
- **Google Fonts Preload Toggle**: Added a toggle switch in Performance settings to enable Google Fonts preloading for better page speed.
- **Font Loading Logic**: Optimized Google Fonts loading with high-performance `rel="preload"` support and best-practice `<noscript>` fallback.
- **Rive Animation Block Render Type Switch**: Added render type switch for Rive Animation block with improved speed optimization.

#### 🛠️ Bug Fixes
- **Google Fonts**: Resolved Google Fonts URL sanitization issues, fixed loading issues in the editor, and fixed frontend Google Fonts loading.
- **Full Site Import**: Resolved SVG rendering and menu URL update issues during the import process.
- **UI & Icons**: Improved frontend icon rendering and import modal logic.
- **Global Colors Panel**: Resolved issues where adding many custom colors or custom gradients could stop updating correctly, fail to persist, or disappear after save.
- **Global Colors UI**: Restored and stabilized the original Global Colors editor UI, including proper add action alignment for empty Custom and Custom Gradient states.
- **Global Colors Overflow**: Resolved overflow issues by improving scroll behavior for long solid, custom color, and custom gradient palettes.
- **Post Category Block**: Resolved title, count, and "View All" button styling issues, along with style-3 default image fallback.
- **Post Grid Block**: Resolved Element Visibility issues for style-2 — categories toggle now auto-enables for style-2 and disables for style-1, and empty category/tag wrappers are no longer rendered.
- **Team Member & Testimonial Blocks**: Resolved icon rendering issues on the frontend.
- **Rive Animation Block**: Resolved autoplay feature and resize issues on device change.
- **Global Typography**: Fixed global typography to apply by default, block-level font overrides work when explicitly set, and clearing a block font correctly falls back to the global font on the frontend.

#### 📈 Improvements
- **Security**: Added nonce validation in Global Settings AJAX and standardized nonces for better security.
- **Code Quality**: Refactored Global Settings to remove dead code and improve maintainability.
- **Global Colors Sync**: Added safe theme palette auto-sync so default theme colors update automatically after theme switches while manually customized palettes remain unchanged.
- **Global Colors Cache**: Added theme-aware cache invalidation for global color and gradient settings to prevent stale palette data after changing themes.
- **Global Typography**: Refactored and reviewed global typography settings for better maintainability.

#### 📁 Refactor & Maintenance
- **Build System**: Consolidated build system by removing redundant Grunt dependencies and pinning Composer dependencies.
- **Version Management**: Updated plugin version to 1.2.0 across the codebase.
- **Dependencies**: Removed unused `@rive-app/react-webgl2` dependency.
