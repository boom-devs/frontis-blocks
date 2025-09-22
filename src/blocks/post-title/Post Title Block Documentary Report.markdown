# Post Title Block Documentation

## Overview
The **Post Title Block** displays the current post, page, or custom post type title dynamically. It supports server-side rendering, ensuring accurate output on the frontend. Designed for flexibility, it includes controls for linking, word limits, typography, and advanced styling.

---

## Features
- Dynamic rendering of post/page/custom post type title.
- Title linking with advanced options.
- Full control over title HTML tag.
- Word limit to shorten titles as needed.
- Typography and styling options.
- Advanced layout and customization controls.

---

## Controls

### 🔹 Basic Tab
1. **Make Title a Link** – Toggle to wrap the title in an `<a>` tag.  
   - **Open in New Tab** – Conditional toggle, works only if linking is enabled.  
   - **Link Rel** – Input for setting rel attributes (e.g., `nofollow`, `noopener`).  
2. **Title Tag** – Choose from H1–H6, P, or Span.  
3. **Title Word Limit** – Limit the number of words displayed (0 = show full title).  
4. **Alignment** – Left, Center, Right alignment options.

---

### 🔹 Style Tab
- **Typography** – Font family, size, weight, style, line height, letter spacing.  
- **Text Color & Hover Color** – Color customization for normal and hover states.  
- **Text Shadow** – Add shadow effects with full controls.  
- **Text Stroke** – Outline text with adjustable color and thickness.

---

### 🔹 Extra Tab
- **Layout** – Z-index, Overflow, Position.  
- **CSS ID / Class** – Add custom identifiers and classes.  
- **Spacing** – Padding and Margin controls.  
- **Background** – Solid and gradient background support.  
- **Border & Shadow** – Customize border styles and shadows.  
- **Responsive Control** – Device-based responsive settings.  
- **Custom CSS** – Add advanced custom CSS directly.

---

## Rendering
- **Editor** – Displays live preview of title with applied settings.  
- **Frontend** – Server-side rendering ensures correct and optimized output.  

---

## Use Cases
- Blog post titles with custom styling.  
- Portfolio or custom post type titles.  
- Page titles styled to match branding.  
- SEO-friendly linked titles.

---

## Notes
- Server-side rendering ensures compatibility with WordPress themes.  
- If "Word Limit" is set to 0, full title will be displayed.  
- Linking controls only appear if "Make Title a Link" is enabled.
