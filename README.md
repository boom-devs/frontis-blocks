<p align="center">
  <a href="https://github.com/boom-devs/frontis-blocks">
    <img src="assets/images/banner.png" alt="Frontis Blocks Banner" width="100%">
  </a>
</p>

<h1 align="center">Frontis Blocks</h1>

<p align="center">
  <strong>⚡ The Enterprise Modular Gutenberg Block Suite & Design System for WordPress</strong><br>
  Supercharge the WordPress Block Editor with 74+ production-ready blocks, 38 design system controls, dynamic zero-unused CSS engine, visual form builder, and cloud template library.
</p>

<p align="center">
  <a href="https://github.com/boom-devs/frontis-blocks/actions/workflows/ci.yml">
    <img src="https://github.com/boom-devs/frontis-blocks/actions/workflows/ci.yml/badge.svg" alt="CI Build Status">
  </a>
  <a href="https://github.com/boom-devs/frontis-blocks/releases">
    <img src="https://img.shields.io/github/v/release/boom-devs/frontis-blocks?color=orange&label=Version" alt="Latest Release">
  </a>
  <a href="https://github.com/boom-devs/frontis-blocks/stargazers">
    <img src="https://img.shields.io/github/stars/boom-devs/frontis-blocks?color=ffb800&label=Stars&logo=github" alt="GitHub Stars">
  </a>
  <a href="https://github.com/boom-devs/frontis-blocks/network/members">
    <img src="https://img.shields.io/github/forks/boom-devs/frontis-blocks?color=blue&label=Forks&logo=github" alt="GitHub Forks">
  </a>
  <a href="https://github.com/boom-devs/frontis-blocks/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome">
  </a>
  <a href="https://wordpress.org/">
    <img src="https://img.shields.io/badge/WordPress-6.0+-blue.svg?logo=wordpress" alt="WordPress 6.0+">
  </a>
  <a href="https://php.net/">
    <img src="https://img.shields.io/badge/PHP-7.4--8.4-purple.svg?logo=php" alt="PHP 7.4-8.4">
  </a>
  <a href="https://github.com/boom-devs/frontis-blocks/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-GPLv2+-green.svg" alt="License: GPL-2.0-or-later">
  </a>
</p>

<p align="center">
  <a href="#-about--value-proposition">About</a> •
  <a href="#-why-frontis-blocks-comparison">Why Frontis?</a> •
  <a href="#-key-architectural-highlights">Architecture</a> •
  <a href="#-complete-block-catalog-74-blocks">Block Catalog</a> •
  <a href="#-local-development-setup">Setup</a> •
  <a href="#-essential-npm-scripts">Scripts</a> •
  <a href="#-contributing--governance">Contributing</a> •
  <a href="#-support-the-project">Support ⭐</a> •
  <a href="#-contributors">Contributors</a> •
  <a href="#-maintainer--credits">Credits</a> •
  <a href="#-license">License</a>
</p>

---

## 📖 About & Value Proposition

**Frontis Blocks** is a high-performance, modular WordPress Gutenberg plugin and design system. It transforms the core WordPress Block Editor into an intuitive, visual website builder—eliminating the severe performance overhead, code bloat, and proprietary vendor lock-in of traditional page builders like Elementor and Divi.

Every layout, spacing, typography, and responsive decision is compiled dynamically into scoped inline CSS via Frontis Blocks' custom dynamic styling engine. The result: **zero unused CSS**, blazingly fast load times, and flawless Google Core Web Vitals scores right out of the box.

---

## ⚖️ Why Frontis Blocks? (Comparison)

| Feature | Frontis Blocks | Generic Block Addons (Spectra / Kadence) | Traditional Builders (Elementor / Divi) |
| :--- | :---: | :---: | :---: |
| **Gutenberg Native** | ✅ 100% Native Block Canvas | ⚠️ Often bloated wrapper blocks | ❌ Completely proprietary builder iframe |
| **Block Diversity** | ✅ **74+ Blocks** (All Free) | ⚠️ 20–30 Free, rest paywalled behind Pro | ❌ Requires costly annual Pro subscriptions |
| **Design Controls** | ✅ **38 Core Controls** (`@Components/*`) | ⚠️ Fragmented, block-specific settings | ❌ Monolithic proprietary inspector |
| **CSS Delivery Engine** | ✅ **Zero Unused CSS** via dynamic queue | ⚠️ Monolithic global CSS stylesheets | ❌ Heavy CSS/JS runtime loaded sitewide |
| **Form Builder** | ✅ Built-in visual form builder + stylers | ⚠️ Basic contact forms or external plugins | ❌ Bloated form widgets |
| **Core Web Vitals** | ✅ 95+ PageSpeed Scores out-of-the-box | ⚠️ Average (60–80) without optimization | ❌ Poor (DOM inflation, heavy JS payloads) |
| **Licensing & Freedom** | ✅ **GPL-2.0-or-later** (100% Open Source) | ⚠️ Freemium with feature gates | ❌ Strict SaaS licenses & renewal lock-in |

---

## ✨ Key Architectural Highlights

```mermaid
flowchart LR
    Editor["WordPress Block Editor (Gutenberg)"] --> Components["38 Core Design Controls (@Components/*)"]
    Components --> Blocks["74+ Custom Blocks (src/blocks/*)"]
    Blocks --> Engine["Dynamic CSS Compiler (styling.js)"]
    Engine --> Frontend["Zero-Unused-CSS Frontend Render"]
    Blocks --> Cloud["Template Cloud Importer (admin/template-library)"]
```

* **74+ Production-Grade Gutenberg Blocks:** Comprehensive coverage spanning containers, sliders, accordions, dynamic query loop builders, multi-column pricing, interactive modals, and forms.
* **38 Unified Core Design System Controls:** Shared React controls located in `src/components/` ensuring 100% consistent typography, responsive spacing, color swatches, box shadows, and icon selectors across all blocks.
* **Zero-Unused-CSS Style Engine:** Dynamic CSS rules are compiled on-demand in `styling.js` and injected directly into the page header. No massive sitewide stylesheets are ever enqueued.
* **Integrated Form Builder:** Design custom interactive lead generation forms with text, textarea, and select dropdown fields, alongside visual stylers for Fluent Forms and Contact Form 7.
* **Cloud Template Library & Full-Site Import:** Instantly import professionally designed block patterns, landing pages, and full website templates directly from the block editor.
* **Certified Multi-PHP CI Matrix:** Every commit is continuously validated against **PHP 7.4, 8.0, 8.1, 8.2, 8.3, and 8.4** in automated GitHub Actions.

---

## 📦 Complete Block Catalog (74+ Blocks)

Frontis Blocks provides a comprehensive block ecosystem organized into 8 functional categories:

### 1. 🏗️ Layout & Containers
| Block | Slug | Description | Status |
| :--- | :--- | :--- | :---: |
| **Container** | `container` | Flexbox and responsive container with nested row/column layouts | ✅ Production |
| **Grid Layout** | `grid-layout` | CSS Grid powered multi-column responsive layout engine | ✅ Production |
| **Grid Item** | `grid-item` | Individual child block for precise CSS grid column placement | ✅ Production |
| **Stack Card** | `stack-card` | Layered stacking card container with smooth scroll effects | ✅ Production |
| **Stack Card Item** | `stack-card-item` | Individual card item within the stack container | ✅ Production |

### 2. ✍️ Typography & Content
| Block | Slug | Description | Status |
| :--- | :--- | :--- | :---: |
| **Advanced Heading** | `advanced-heading` | Multi-tag heading with dual color text, highlights, and icons | ✅ Production |
| **Animated Heading** | `animated-heading` | Eye-catching typewriter, rotating, and GSAP animated headings | ✅ Production |
| **Advanced Paragraph** | `advanced-paragraph` | Rich text paragraph with drop caps, link styling, and custom line heights | ✅ Production |
| **Advanced Video** | `advanced-video` | Responsive video embed supporting YouTube, Vimeo, and self-hosted MP4 | ✅ Production |
| **Advanced Button** | `advanced-button` | High-conversion CTA button with hover effects, icons, and gradients | ✅ Production |
| **Dual Button** | `dual-button` | Paired primary/secondary buttons with custom gap and alignment | ✅ Production |
| **Info Box** | `info-box` | Content box with icon/image, heading, description, and link | ✅ Production |
| **Icon Box** | `icon-box` | Standalone icon with decorative badges and background effects | ✅ Production |
| **Features List** | `features-list` | Feature checklist with SVG icons, bullet styling, and badges | ✅ Production |
| **Business Hours** | `business-hours` | Styled weekly opening/closing schedule table | ✅ Production |
| **Google Map** | `google-map` | Interactive responsive Google Maps embed with custom zoom | ✅ Production |

### 3. 🖼️ Media & Carousels
| Block | Slug | Description | Status |
| :--- | :--- | :--- | :---: |
| **Slider** | `slider` | Touch-enabled responsive carousel slider | ✅ Production |
| **Slider Item** | `slider-item` | Slide canvas accepting any nested Gutenberg blocks | ✅ Production |
| **Coverflow Carousel** | `coverflow-carousel` | 3D coverflow carousel with depth perspective | ✅ Production |
| **Coverflow Item** | `coverflow-carousel-item` | Slide item for 3D coverflow showcases | ✅ Production |
| **Marquee Carousel** | `marquee-carousel` | Continuous infinite smooth marquee slider | ✅ Production |
| **Marquee Item** | `marquee-carousel-item` | Individual content item within the continuous marquee | ✅ Production |
| **Advanced Image** | `advanced-image` | Responsive image with mask overlays, filters, and hover zoom | ✅ Production |
| **Image Gallery** | `image-gallery` | Masonry and tiled responsive image gallery with lightbox | ✅ Production |
| **Image Comparison** | `image-comparison` | Interactive before/after image comparison slider | ✅ Production |
| **Image Hotspot** | `image-hotspot` | Interactive pinpoint hotspots with informative tooltips | ✅ Production |
| **Lottie Animation** | `lottie-animation` | High-performance JSON vector animations with playback controls | ✅ Production |
| **Rive Animation** | `rive-animation` | Next-generation interactive vector animations powered by Rive runtime | ✅ Production |

### 4. 🎯 Marketing & Conversion
| Block | Slug | Description | Status |
| :--- | :--- | :--- | :---: |
| **Call To Action** | `call-to-action` | High-impact conversion banner with headings, buttons, and backgrounds | ✅ Production |
| **Flip Box** | `flip-box` | 3D interactive flip box revealing content on hover/click | ✅ Production |
| **Pricing Table** | `pricing-table` | Single pricing card with feature list, badge, and CTA | ✅ Production |
| **Multi Pricing Table**| `multi-column-pricing-table` | Comparative multi-tier pricing table with toggleable billing cycles | ✅ Production |
| **Countdown** | `countdown` | Urgency countdown timer for sales, events, and product launches | ✅ Production |
| **Counter Number** | `counter-number` | Animated numerical milestone counter with prefix and suffix | ✅ Production |
| **Progressbar** | `progressbar` | Animated linear and circular skill progress bars | ✅ Production |

### 5. 📋 Forms & User Input
| Block | Slug | Description | Status |
| :--- | :--- | :--- | :---: |
| **Form Builder** | `form-builder` | Visual form container with built-in submission handler | ✅ Production |
| **Text Field** | `text-field` | Text, email, and phone input control with validation | ✅ Production |
| **Textarea Field** | `textarea-field` | Multi-line message input control | ✅ Production |
| **Select Field** | `select-field` | Customizable dropdown selection field | ✅ Production |
| **Contact Form 7** | `contact-form-7` | Visual designer and styler for Contact Form 7 shortcodes | ✅ Production |
| **Fluent Forms** | `fluent-form` | Visual designer and styler for Fluent Forms | ✅ Production |

### 6. 🧭 Navigation & Interactive Overlays
| Block | Slug | Description | Status |
| :--- | :--- | :--- | :---: |
| **Advanced Navigation**| `advanced-navigation` | Accessible responsive site header navigation menu | ✅ Production |
| **Advanced Megamenu** | `advanced-megamenu` | Multi-column rich mega menu supporting nested Gutenberg blocks | ✅ Production |
| **Off-Canvas Menu** | `off-canvas-menu` | Slide-in off-canvas drawer for mobile menus and sidebars | ✅ Production |
| **Modal Popup** | `advanced-modal-popup` | Lightbox modal dialog triggered by click, scroll, or delay | ✅ Production |
| **Circle Menu** | `circle-menu` | Radial floating circular menu with animated expanding actions | ✅ Production |
| **Back To Top** | `back-to-top` | Floating smooth-scroll return-to-top button | ✅ Production |
| **Breadcrumb** | `breadcrumb` | Accessible SEO breadcrumb trail navigation | ✅ Production |
| **Advanced Search** | `advanced-search` | Live AJAX search bar with custom icon and dropdown results | ✅ Production |
| **News Ticker** | `news-ticker` | Scrolling news headline ticker with pause-on-hover | ✅ Production |

### 7. 👥 Social Proof, Tabs & Accordions
| Block | Slug | Description | Status |
| :--- | :--- | :--- | :---: |
| **Accordion** | `accordion` | Accessible collapsible FAQ accordion container | ✅ Production |
| **Accordion Item** | `accordion-item` | Individual collapsible panel within an accordion | ✅ Production |
| **Image Accordion** | `image-accordion` | Expanding horizontal image accordion with hover reveals | ✅ Production |
| **Tabs** | `tabs` | Horizontal and vertical responsive tabbed content switcher | ✅ Production |
| **Tabs Item** | `tabs-item` | Individual tab content panel accepting any nested blocks | ✅ Production |
| **Testimonial** | `testimonial` | Client review cards with star ratings, avatar, and quote icons | ✅ Production |
| **Team Member** | `team-member` | Staff showcase cards with bios, social links, and hover states | ✅ Production |
| **Social Icons** | `social-icons` | Responsive social media link icons with brand colors | ✅ Production |
| **Social Share** | `social-share` | Share buttons for Facebook, X (Twitter), LinkedIn, and WhatsApp | ✅ Production |
| **Vertical Timeline** | `vertical-timeline` | Interactive vertical story roadmap and company history timeline | ✅ Production |
| **Timeline Item** | `vertical-timeline-item` | Individual milestone entry within the vertical timeline | ✅ Production |

### 8. 📰 Dynamic Queries & Full-Site Loop Builder
| Block | Slug | Description | Status |
| :--- | :--- | :--- | :---: |
| **Loop Builder** | `loop-builder` | Visual query loop builder to design custom post card loops | ✅ Production |
| **Loop Builder Item**| `loop-builder-item` | Repeatable template canvas for dynamic post loops | ✅ Production |
| **Post Grid** | `post-grid` | Responsive grid displaying latest posts, pages, or custom post types | ✅ Production |
| **Post Title** | `post-title` | Dynamic post title linked to the single post | ✅ Production |
| **Post Featured Image**| `post-featured-image` | Dynamic post featured image with custom aspect ratios | ✅ Production |
| **Post Category** | `post-category` | Dynamic taxonomy terms, categories, and tags badge list | ✅ Production |
| **Post Meta** | `post-meta` | Dynamic post author, publish date, and reading time metadata | ✅ Production |
| **Post Comment Form**| `post-comment-form` | Full-site editing dynamic comment submission form | ✅ Production |
| **Query Pagination** | `query-pagination` | Numbered and next/prev AJAX pagination for query loops | ✅ Production |

---

## 🏗️ Repository Architecture

```text
frontis-blocks/
├── admin/                    # Admin dashboard, template library & settings UI
│   ├── components/           # Admin-specific React components
│   ├── dashboard/            # Plugin dashboard & settings UI
│   ├── scss/                 # Admin styles & design tokens
│   └── template-library/     # Cloud template library importer
├── assets/                   # Public assets (icons, fonts, vendor libraries)
├── build/                    # Compiled distribution assets (Webpack output)
├── includes/                 # PHP Backend Architecture (PSR-4)
│   ├── Activator/            # Activation & migration hooks
│   ├── Admin/                # WordPress admin menu & settings handlers
│   ├── Core/                 # Core block registration & asset enqueueing
│   ├── Forms/                # Form builder backend & submissions
│   ├── RestApi/              # Custom WP REST API endpoints
│   └── Plugin.php            # Main plugin singleton orchestrator
├── languages/                # Translation POT & PO files
├── src/                      # Source Code
│   ├── blocks/               # 74+ Gutenberg Blocks (accordion, slider, grid, etc.)
│   ├── components/           # 38 Core Design System Controls (@Components/*)
│   ├── config/               # Block configuration & presets
│   └── utils/                # React hooks, helpers & color utilities
├── .github/                  # GitHub Actions (CI/CD, PR & Issue triage)
├── AGENTS.md                 # Contributor & AI Agent Operational Handbook
├── CONTRIBUTING.md           # Contribution guidelines & Conventional Commits
└── LICENSE                   # GNU General Public License v2.0
```

---

## 💻 Local Development Setup

### Prerequisites

| Requirement | Minimum Version | Recommended |
| :--- | :--- | :--- |
| **Node.js** | `>= 18.0.0` | `20.x LTS` |
| **npm** | `>= 9.0.0` | `10.x` |
| **PHP** | `>= 7.4.0` | `8.2 / 8.3` |
| **WordPress** | `>= 6.0.0` | `6.7+` |

---

### Option A: LocalWP (Recommended GUI Workflow)

1. Open [Local](https://localwp.com/) and create a fresh WordPress site.
2. Clone this repository directly into the site's plugin directory:
   ```bash
   cd ~/Local\ Sites/<site-name>/app/public/wp-content/plugins/
   git clone https://github.com/boom-devs/frontis-blocks.git
   cd frontis-blocks
   ```
3. Install dependencies and compile initial block assets:
   ```bash
   npm install
   composer install
   npm run build  # Compiles production block bundles into build/
   npm run start  # Starts development watch mode
   ```
4. Activate **Frontis Blocks** from **WP Admin → Plugins**.

---

### Option B: Docker via `@wordpress/env` (Zero-Config CLI)

```bash
# 1. Clone repository
git clone https://github.com/boom-devs/frontis-blocks.git
cd frontis-blocks

# 2. Install dependencies & build
npm install
composer install
npm run build

# 3. Start WordPress in Docker (Port 8888)
npx @wordpress/env start
```

* **Frontend:** [http://localhost:8888](http://localhost:8888)
* **WP Admin:** [http://localhost:8888/wp-admin](http://localhost:8888/wp-admin) (`Username: admin`, `Password: password`)
* **Stop Environment:** `npx @wordpress/env stop`

---

## ⚡ Essential NPM Scripts

| Command | Purpose |
| :--- | :--- |
| `npm run start` | Watch mode for block development (`wp-scripts start`) |
| `npm run build` | Compiles production block bundles into `build/` (Webpack 5 filesystem cache enabled) |
| `npm run admin` | Watch mode for admin dashboard and template library assets |
| `npm run admin:build` | Compiles admin stylesheets and React dashboard for production |
| `npm run format` | Auto-formats code according to WordPress coding standards |
| `npm run lint:js` | Runs ESLint across all JavaScript source files |
| `npm run lint:css` | Runs Stylelint across SCSS stylesheets |
| `npm run plugin-zip` | Generates a clean, production-ready distributable archive (`frontis-blocks.zip`) |

---

## 🛡️ Testing & Continuous Integration

Every pull request runs automated GitHub Actions workflows:
* **Multi-PHP Syntax & Compatibility:** Parallel linting across **PHP 7.4, 8.0, 8.1, 8.2, 8.3, and 8.4**.
* **Block & Admin Build Verification:** Compiles all 74+ block entry points and admin stylesheets with Webpack 5.
* **Webpack 5 Persistent Cache:** Fast CI builds powered by persistent filesystem caching (`.cache/webpack`).
* **Packaging & Archive Audit:** Verifies distributable zip creation (`webpack.zip.js`) with zero missing dependencies.
* **Dependency Caching:** Instant CI runs using `actions/cache@v4` for Composer and NPM modules.

---

## 🤝 Contributing & Governance

We welcome contributions from developers, designers, and documentation writers! Please review our governance guidelines before submitting pull requests:

* 📖 **[CONTRIBUTING.md](CONTRIBUTING.md)**: Contribution workflow, Conventional Commits, and PR conventions.
* 🤖 **[AGENTS.md](AGENTS.md)**: AI agent & contributor technical operational handbook.
* 📜 **[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)**: Contributor Covenant v2.1 code of conduct.
* 🛡️ **[SECURITY.md](SECURITY.md)**: Vulnerability disclosure and security reporting policy.

> [!IMPORTANT]
> **Issue-Driven Development:** All pull requests must resolve an approved [GitHub Issue](https://github.com/boom-devs/frontis-blocks/issues) using `Closes #<issue_number>`.

> [!CAUTION]
> **Strict Component Lock Policy (`src/components/`):**
> `src/components/` contains 38 core UI design system controls shared across **74+ blocks**.
> 
> * **MAINTAINERS ONLY**: Only repository maintainers (`@noruzzamans`, `@boom-devs`) are authorized to modify, refactor, or add files in `src/components/`.
> * **NO EXTERNAL EDITS**: External contributors and autonomous AI agents are **strictly forbidden** from editing `src/components/`.
> * **AUTOMATED REJECTION**: Any external pull request touching `src/components/` will be immediately flagged with `needs: changes` and rejected by CI/CD guards.

---

---

## ⭐ Support the Project

If you find **Frontis Blocks** valuable or use it in your projects, please consider giving it a star on GitHub! It takes just a second and helps the project gain visibility across the WordPress & open-source community, attract more contributors, and motivates ongoing active development.

<p align="center">
  <a href="https://github.com/boom-devs/frontis-blocks">
    <img src="https://img.shields.io/badge/⭐_Star_on_GitHub-frontis--blocks-yellow?style=for-the-badge&logo=github" alt="Star on GitHub">
  </a>
</p>

- **Star this repository** to bookmark it for future use.
- **Share it** with fellow WordPress developers, agencies, and friends.
- **Contribute** code, docs, or ideas to our open [Issues](https://github.com/boom-devs/frontis-blocks/issues).

---

<a id="contributors"></a>
## 👥 Contributors

Thank you to all the amazing people who contribute to Frontis Blocks!

<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/noruzzamans"><img src="https://avatars.githubusercontent.com/u/46926901?v=4" width="100px;" alt="Noruzzaman"/><br /><sub><b>Noruzzaman</b></sub></a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Mehedi2509"><img src="https://avatars.githubusercontent.com/u/47184759?v=4" width="100px;" alt="Mehedi2509"/><br /><sub><b>Mehedi2509</b></sub></a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ashrafulislamsaon"><img src="https://avatars.githubusercontent.com/u/70936583?v=4" width="100px;" alt="ashrafulislamsaon"/><br /><sub><b>ashrafulislamsaon</b></sub></a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/EnamulHaq"><img src="https://avatars.githubusercontent.com/u/35990207?v=4" width="100px;" alt="EnamulHaq"/><br /><sub><b>EnamulHaq</b></sub></a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/shagib"><img src="https://avatars.githubusercontent.com/u/71404750?v=4" width="100px;" alt="shagib"/><br /><sub><b>shagib</b></sub></a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/MD-ANIKS"><img src="https://avatars.githubusercontent.com/u/108365392?v=4" width="100px;" alt="MD-ANIKS"/><br /><sub><b>MD-ANIKS</b></sub></a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Shiddik"><img src="https://avatars.githubusercontent.com/u/8155560?v=4" width="100px;" alt="Shiddik"/><br /><sub><b>Shiddik</b></sub></a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/sheikhshartho"><img src="https://avatars.githubusercontent.com/u/197633041?v=4" width="100px;" alt="sheikhshartho"/><br /><sub><b>sheikhshartho</b></sub></a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ikamal7"><img src="https://avatars.githubusercontent.com/u/26425593?v=4" width="100px;" alt="ikamal7"/><br /><sub><b>ikamal7</b></sub></a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/tarekhossain0043-dot"><img src="https://avatars.githubusercontent.com/u/230377866?v=4" width="100px;" alt="tarekhossain0043-dot"/><br /><sub><b>tarekhossain0043-dot</b></sub></a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Muttakin96"><img src="https://avatars.githubusercontent.com/u/160908847?v=4" width="100px;" alt="Muttakin96"/><br /><sub><b>Muttakin96</b></sub></a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/irfat-ifti"><img src="https://avatars.githubusercontent.com/u/197045488?v=4" width="100px;" alt="irfat-ifti"/><br /><sub><b>irfat-ifti</b></sub></a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/alihasandeveloper"><img src="https://avatars.githubusercontent.com/u/138684631?v=4" width="100px;" alt="alihasandeveloper"/><br /><sub><b>alihasandeveloper</b></sub></a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Mehedi-42"><img src="https://avatars.githubusercontent.com/u/182376015?v=4" width="100px;" alt="Mehedi-42"/><br /><sub><b>Mehedi-42</b></sub></a></td>
    </tr>
  </tbody>
</table>

Contributions of any kind are welcome! See our [Contributing Guide](CONTRIBUTING.md) to get started.

---

## 👨‍💻 Maintainers & Credits

<table width="100%">
  <tbody>
    <tr>
      <td align="center" width="50%" valign="top">
        <br>
        <a href="https://github.com/EnamulHaq">
          <img src="https://avatars.githubusercontent.com/EnamulHaq" alt="Md. Enamul Haq" width="105" height="105" style="border-radius: 50%;">
        </a>
        <br><br>
        <strong>Md. Enamul Haq</strong><br>
        <sub>Core Maintainer & Backend Architect<br>WordPress & PHP Engineer</sub>
        <br><br>
        <p align="center">
          <a href="https://github.com/EnamulHaq" title="GitHub">
            <img src="https://img.shields.io/badge/--181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
          </a>
          <a href="https://profiles.wordpress.org/enamulhaq/" title="WordPress.org Profile">
            <img src="https://img.shields.io/badge/--21759B?style=for-the-badge&logo=wordpress&logoColor=white" alt="WordPress Profile">
          </a>
        </p>
      </td>
      <td align="center" width="50%" valign="top">
        <br>
        <a href="https://github.com/noruzzamans">
          <img src="https://avatars.githubusercontent.com/noruzzamans" alt="Noruzzaman" width="105" height="105" style="border-radius: 50%;">
        </a>
        <br><br>
        <strong>Noruzzaman</strong><br>
        <sub>Lead Maintainer & Main Committer<br>WordPress Core & Gutenberg Engineer</sub>
        <br><br>
        <p align="center">
          <a href="https://github.com/noruzzamans" title="GitHub">
            <img src="https://img.shields.io/badge/--181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
          </a>
          <a href="https://linkedin.com/in/noruzzaman" title="LinkedIn">
            <img src="https://img.shields.io/badge/--0A66C2?style=for-the-badge&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xOSAwaC0xNGMtMi43NjIgMC01IDIuMjM4LTUgNXYxNGMwIDIuNzYyIDIuMjM4IDUgNSA1aDE0YzIuNzYyIDAgNS0yLjIzOCA1LTV2LTE0YzAtMi43NjItMi4yMzgtNS01LTV6bS0xMSAxOWgtM3YtMTBoM3YxMHptLTEuNS0xMS4yNjhjLS45NjYgMC0xLjc1LS43OS0xLjc1LTEuNzY0cy43ODQtMS43NjQgMS43NS0xLjc2NCAxLjc1Ljc5IDEuNzUgMS43NjQtLjc4MyAxLjc2NC0xLjc1IDEuNzY0em0xMy41IDExLjI2OGgtM3YtNS42MDRjMC0zLjM2OC00LTMuMTEzLTQtMHY1LjYwNGgtM3YtMTBoM3YxLjMwOWMxLjM5Ni0yLjU4NiA3LTIuNzc3IDcgMi40NzZ2Ni4yMTV6Ii8+PC9zdmc+" alt="LinkedIn">
          </a>
          <a href="https://x.com/Noruzzamanwp" title="X (Twitter)">
            <img src="https://img.shields.io/badge/--000000?style=for-the-badge&logo=x&logoColor=white" alt="X (Twitter)">
          </a>
          <a href="https://profiles.wordpress.org/noruzzaman/" title="WordPress.org Profile">
            <img src="https://img.shields.io/badge/--21759B?style=for-the-badge&logo=wordpress&logoColor=white" alt="WordPress Profile">
          </a>
        </p>
      </td>
    </tr>
  </tbody>
</table>

<p align="center">
  <a href="https://github.com/boom-devs" title="BoomDevs Organization">
    <img src="https://img.shields.io/badge/Sponsored%20by-BoomDevs-0366d6?style=for-the-badge&logo=github&logoColor=white" alt="BoomDevs">
  </a>
</p>

### Special Credits
- [WordPress Gutenberg](https://github.com/WordPress/gutenberg) — Block editor framework.
- [React](https://reactjs.org/) — Declarative UI component engine.
- [Swiper.js](https://swiperjs.com/) — High-performance modern touch slider library.
- [Lottie](https://airbnb.io/lottie/) & [Rive](https://rive.app/) — Next-generation vector animation engines.
- [Appsero](https://appsero.com/) — Telemetry and plugin analytics.

---

## 📄 License

Frontis Blocks is open-source software licensed under the **GNU General Public License v2.0 or later (GPL-2.0-or-later)**.

```text
Frontis Blocks - Next-Generation Gutenberg Block Library for WordPress
Copyright (C) 2024-2026 BoomDevs

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.
```
