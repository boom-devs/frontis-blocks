# Changelog - Version 1.2.5 (01 September 2026)

- **New**: Enterprise-grade self-hosted automatic updater architecture powered by secure Cloudflare Gateway proxy (`https://wpmessiah.com/api/updates/*`).
- **New**: PSR-4 compliant Singleton facade (`FrontisBlocks\Updater\Updater`) with flexible Adapter pattern (`JsonAdapter` & `GitHubAdapter`).
- **Security**: Complete protection of private GitHub credentials — zero repository tokens or secret URLs exposed to client installations.
- **Security**: Built-in XSS defense-in-depth HTML sanitization using WordPress standard `wp_kses_post` on release notes and descriptions.
- **Performance**: High-efficiency caching system featuring 12-hour transient expiration, in-memory runtime request deduplication, and 15-minute negative caching for upstream network failure resiliency.
- **Improved**: Full compatibility with WordPress 5.5+ update lifecycle and native `no_update` state recognition.
- **Improved**: Robust filesystem initialization guards and automatic package directory normalization (`frontis-blocks/`).
- **DevOps**: Fully automated GitHub Actions CI/CD pipeline building production artifacts and attaching `.zip` packages on release publish.
