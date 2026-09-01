# Changelog - Version 1.2.5-beta4 (01 September 2026)

- **Improved**: Production hardened updater architecture with complete PSR-4 compliance.
- **Improved**: Added failure negative caching (15-minute cooldown) to protect client sites from external API timeouts.
- **Improved**: In-memory request deduplication within single execution lifecycles.
- **Improved**: XSS defense-in-depth sanitization on changelog and description sections.
- **Improved**: WordPress filesystem initialization guards for zip directory extraction.
- **Improved**: Native WordPress 5.5+ `no_update` state support on successful version checks.
