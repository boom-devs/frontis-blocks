# Changelog - Version 1.2.5-beta1 (31 August 2026)

- **New**: Added self-hosted automatic updater with secure Cloudflare Gateway proxy support.
- **Improved**: Architectural refactoring of update system into clean PSR-4 compliant Singleton facade (`FrontisBlocks\Updater\Updater`).
- **Improved**: Automatic cache invalidation upon update completion and on-demand force update checking.
- **Improved**: Hardened ZIP archive packaging with normalized `frontis-blocks/` root directory structure.
- **Improved**: Automated GitHub Actions CI/CD release workflow for build artifact generation.
