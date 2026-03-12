# Changelog - Version 1.2.0 (12 March 2026)

### 🚀 New Features & Improvements

#### ✨ New Features
- **Google Fonts Preload Toggle**: Added a toggle switch in Performance settings to enable Google Fonts preloading for better page speed.
- **Font Loading Logic**: Optimized Google Fonts loading with high-performance `rel="preload"` support and best-practice `<noscript>` fallback.

#### 🛠️ Bug Fixes
- **Google Fonts**: Resolved Google Fonts URL sanitization issues and fixed loading issues in the editor.
- **Full Site Import**: Resolved SVG rendering and menu URL update issues during the import process.
- **UI & Icons**: Improved frontend icon rendering and import modal logic.
- **Post Category Block**: Resolved title, count, and "View All" button styling issues, along with style-3 default image fallback.
- **Post Grid Block**: Resolved Element Visibility issues for style-2 — categories toggle now auto-enables for style-2 and disables for style-1, and empty category/tag wrappers are no longer rendered.
- **Team Member & Testimonial Blocks**: Resolved icon rendering issues on the frontend.

#### 📈 Improvements
- **Security**: Added nonce validation in Global Settings AJAX and standardized nonces for better security.
- **Code Quality**: Refactored Global Settings to remove dead code and improve maintainability.

#### 📁 Refactor & Maintenance
- **Build System**: Consolidated build system by removing redundant Grunt dependencies and pinning Composer dependencies.
- **Version Management**: Updated plugin version to 1.2.0 across the codebase.
