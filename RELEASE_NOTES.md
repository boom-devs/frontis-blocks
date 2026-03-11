# Changelog - Version 1.2.0 (09 March 2026)

### 🚀 New Features & Improvements

#### ✨ New Features
- **Google Fonts Preload Toggle**: Added a toggle switch in Performance settings to enable Google Fonts preloading for better page speed.
- **Font Loading Logic**: Optimized Google Fonts loading with high-performance `rel="preload"` support and best-practice `<noscript>` fallback.

#### 🛠️ Bug Fixes
- **Google Fonts**: Resolved Google Fonts URL sanitization issues and fixed loading issues in the editor.
- **Full Site Import**: Resolved SVG rendering and menu URL update issues during the import process.
- **UI & Icons**: Improved frontend icon rendering and import modal logic.

#### 📈 Improvements
- **Security**: Added nonce validation in Global Settings AJAX and standardized nonces for better security.
- **Code Quality**: Refactored Global Settings to remove dead code and improve maintainability.

#### 📁 Refactor & Maintenance
- **Build System**: Consolidated build system by removing redundant Grunt dependencies and pinning Composer dependencies.
- **Version Management**: Updated plugin version to 1.2.0 across the codebase.
