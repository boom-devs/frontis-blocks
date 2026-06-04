# Changelog - Version 1.2.3 (15 May 2026)

- **New**: Added Stacked Card block with Pro features support.
- **Fixed**: Resolved PHP 7.4 compatibility issue in typography CSS selector logic.
- **Fixed**: Resolved asset generation issue for pages without wp:post-content block.
- **Fixed**: Ensured customized colors are persisted during full site import.
- **Fixed**: Resolved Google Fonts loading issues in typography preview iframe.
- **Fixed**: Resolved various template CSS rendering and generation issues.
- **Fixed**: Resolved navigation active menu style and logo system issues.
- **Fixed**: Resolved critical data loss in list-based blocks (Features List, Tabs, Advanced Megamenu) by removing dual-state synchronization conflicts.
- **Improved**: Implemented unique timestamp-based ID generation for list items to prevent state corruption.
- **Improved**: Updated Mega Menu icons and optimized for production release.
- **Improved**: Added automatic asset regeneration when synced patterns are updated.
- **Improved**: Enhanced child block registration for better stability.
