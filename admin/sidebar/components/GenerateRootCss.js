// Helper to find all current editor iframes in the DOM across Post Editor, Site Editor, and Template Editor
const getEditorIframes = () => {
    const iframes = [];
    const selectors = [
        'iframe[name="editor-canvas"]',
        'iframe.edit-site-visual-editor__editor-canvas',
        '.edit-site-visual-editor iframe',
        '.editor-canvas-container iframe',
        '.edit-post-visual-editor iframe',
        'iframe[title*="canvas" i]',
        'iframe[title*="editor" i]',
    ];

    selectors.forEach((sel) => {
        try {
            document.querySelectorAll(sel).forEach((el) => {
                if (el && !iframes.includes(el)) iframes.push(el);
            });
        } catch (e) {}
    });

    try {
        document.querySelectorAll('iframe').forEach((iframe) => {
            try {
                const name = iframe.getAttribute('name') || '';
                const className = iframe.className || '';
                if (
                    name.toLowerCase().includes('canvas') ||
                    name.toLowerCase().includes('editor') ||
                    (typeof className === 'string' && (className.includes('canvas') || className.includes('editor')))
                ) {
                    if (!iframes.includes(iframe)) iframes.push(iframe);
                }
            } catch (e) {}
        });
    } catch (e) {}

    return iframes;
};

// Safe helper to apply a style element to any document
const applyStyleToDocument = (doc, styleId, cssContent) => {
    if (!doc || !cssContent) return false;
    try {
        const head = doc.head || doc.getElementsByTagName('head')?.[0] || doc.body;
        if (!head) return false;

        let styleTag = doc.getElementById(styleId);
        if (!styleTag) {
            styleTag = doc.createElement('style');
            styleTag.id = styleId;
            head.appendChild(styleTag);
        }
        if (styleTag.textContent !== cssContent) {
            styleTag.textContent = cssContent;
        }
        return true;
    } catch (e) {
        return false;
    }
};

// Safe helper to apply Google Fonts link tag to any document
const applyFontLinkToDocument = (doc, fontUrl) => {
    if (!doc || !fontUrl) return false;
    try {
        const head = doc.head || doc.getElementsByTagName('head')?.[0] || doc.body;
        if (!head) return false;

        let linkElement = doc.getElementById('frontis-blocks-google-fonts');
        if (!linkElement) {
            linkElement = doc.createElement('link');
            linkElement.id = 'frontis-blocks-google-fonts';
            linkElement.rel = 'stylesheet';
            head.appendChild(linkElement);
        }
        if (linkElement.href !== fontUrl) {
            linkElement.href = fontUrl;
        }
        return true;
    } catch (e) {
        return false;
    }
};

const listenedIframes = new WeakSet();

const attachIframeListener = (iframe, onReady) => {
    if (!iframe || listenedIframes.has(iframe)) return;
    listenedIframes.add(iframe);

    try {
        iframe.addEventListener('load', () => {
            try {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
                if (iframeDoc) {
                    onReady(iframeDoc);
                }
            } catch (e) {}
        });
    } catch (e) {}
};

let lastTypoStyles = '';
let lastFontUrl = '';

const syncTypoStylesToAll = (styles, fontUrl) => {
    const finalStyles = styles || lastTypoStyles;
    const finalFontUrl = fontUrl !== undefined ? fontUrl : lastFontUrl;
    if (!finalStyles) return;

    // 1. Main window document
    applyStyleToDocument(document, 'global-typo', finalStyles);
    if (finalFontUrl) applyFontLinkToDocument(document, finalFontUrl);

    // 2. All editor iframes
    const iframes = getEditorIframes();
    iframes.forEach((iframe) => {
        attachIframeListener(iframe, (iframeDoc) => {
            applyStyleToDocument(iframeDoc, 'global-typo', finalStyles);
            if (finalFontUrl) applyFontLinkToDocument(iframeDoc, finalFontUrl);
        });

        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
            if (iframeDoc) {
                applyStyleToDocument(iframeDoc, 'global-typo', finalStyles);
                if (finalFontUrl) applyFontLinkToDocument(iframeDoc, finalFontUrl);
            }
        } catch (e) {}
    });
};

let typoObserverStarted = false;

const startTypoObserver = () => {
    if (typeof window === 'undefined' || typoObserverStarted) return;
    typoObserverStarted = true;

    const onCheck = () => {
        if (lastTypoStyles) {
            syncTypoStylesToAll(lastTypoStyles, lastFontUrl);
        }
    };

    // 1. Observe DOM changes for added template iframes
    try {
        const observer = new MutationObserver((mutations) => {
            let hasNewNode = false;
            for (const m of mutations) {
                if (m.addedNodes && m.addedNodes.length > 0) {
                    hasNewNode = true;
                    break;
                }
            }
            if (hasNewNode) {
                onCheck();
            }
        });

        const root = document.documentElement || document.body;
        if (root) {
            observer.observe(root, { childList: true, subtree: true });
        }
    } catch (e) {}

    // 2. WordPress Gutenberg store subscription
    if (window.wp?.data?.subscribe) {
        let prevCanvas = null;
        let prevPostId = null;
        window.wp.data.subscribe(() => {
            try {
                const editSite = window.wp.data.select('core/edit-site');
                const canvas = editSite?.getCanvasMode?.();
                const postId = editSite?.getEditedPostId?.() || window.wp.data.select('core/editor')?.getCurrentPostId?.();
                if (canvas !== prevCanvas || postId !== prevPostId) {
                    prevCanvas = canvas;
                    prevPostId = postId;
                    onCheck();
                }
            } catch (e) {}
        });
    }

    // 3. Periodic fallback poll for initial loading transitions
    let counter = 0;
    const interval = setInterval(() => {
        counter++;
        onCheck();
        if (counter >= 30) {
            clearInterval(interval);
        }
    }, 1000);
};

const generateCSSVariables = (data, deviceType) => {
    startTypoObserver();

    if (!data) {
        data = window.frontisBlocksAdmin?.global_typography || 
               (() => {
                   try {
                       const stored = localStorage.getItem("fb_globaltypo");
                       return stored && stored !== "null" ? JSON.parse(stored) : null;
                   } catch (e) {
                       return null;
                   }
               })();
    }

    if (!data) {
        return false;
    }

    const createValueWithUnit = (value, unit) => {
        if (!value || value === 'Default') return '0px';
        return `${value}${unit || ''}`;
    };

    const getValue = (obj, prop, breakpoint = null) => {
        let val = null;
        if (breakpoint) {
            val = obj?.[prop]?.value?.[breakpoint];
        } else {
            val = obj?.[prop]?.value;
        }

        // Handle nested value objects (used by fontFamily/fontWeight occasionally)
        if (typeof val === 'object' && val !== null && val.value !== undefined) {
            return val.value;
        }

        return val || null;
    };

    const getUnit = (obj, prop, breakpoint) => {
        return obj?.[prop]?.unit?.[breakpoint] || obj?.[prop]?.unit || '';
    };

    const fontFamilies = new Set(); // to track added font families

    let rootStyles = '';
    let desktopStyles = '';
    let tabletStyles = '';
    let mobileStyles = '';

    let paragraphStyles = '';
    let linkStyles = '';
    let buttonStyles = '';
    let captionStyles = '';
    let heading1Styles = '';
    let heading2Styles = '';
    let heading3Styles = '';
    let heading4Styles = '';
    let heading5Styles = '';
    let heading6Styles = '';

    let combinedHeadingStyles = ''; // Combined styles for "all" headings

    const arrayKeys = Object.keys(data);

    // Loop through the data to generate CSS for each tag
    arrayKeys.forEach((key) => {
        if (!data[key]) return;

        // Apply global properties (fontFamily, fontWeight, etc.)
        ['fontFamily', 'fontWeight', 'fontStyle', 'textTransform', 'textDecoration'].forEach((prop) => {
            const value = getValue(data[key], prop);
            let typoValue = data[key][prop];

            if (value !== null) {
                if(typoValue) {
                    rootStyles += `${typoValue.variable}: ${value};\n`;
                    
                    // Aliasing for backward compatibility
                    if (typoValue.variable.includes('--text-decoration')) {
                        rootStyles += `${typoValue.variable.replace('--text-decoration', '--font-decoration')}: ${value};\n`;
                    }
                    if (typoValue.variable.includes('--text-transform')) {
                        rootStyles += `${typoValue.variable.replace('--text-transform', '--font-transform')}: ${value};\n`;
                    }
                    if (typoValue.variable.includes('--letter-spacing')) {
                        rootStyles += `${typoValue.variable.replace('--letter-spacing', '--font-letter-spacing')}: ${value};\n`;
                    }
                    if (typoValue.variable.includes('--line-height')) {
                        rootStyles += `${typoValue.variable.replace('--line-height', '--font-line-height')}: ${value};\n`;
                    }
                }

                if (key === 'body') {
                    paragraphStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'link') {
                    linkStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'button') {
                    buttonStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'captions') {
                    captionStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'all') {
                    combinedHeadingStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'h1') {
                    heading1Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'h2') {
                    heading2Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'h3') {
                    heading3Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'h4') {
                    heading4Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'h5') {
                    heading5Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'h6') {
                    heading6Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
            }
        });

        // Apply font size, letter spacing, line height
        ['fontSize', 'letterSpacing', 'lineHeight'].forEach((prop) => {
            const desktopValue = getValue(data[key], prop, 'Desktop');
            const tabletValue = getValue(data[key], prop, 'Tablet');
            const mobileValue = getValue(data[key], prop, 'Mobile');

            const desktopUnit = getUnit(data[key], prop, 'Desktop');
            const tabletUnit = getUnit(data[key], prop, 'Tablet');
            const mobileUnit = getUnit(data[key], prop, 'Mobile');

            if (desktopValue !== null) {
                let typoValue = data[key][prop];
                const cssVar = `${typoValue.variable}`;
                desktopStyles += `${cssVar}: ${createValueWithUnit(desktopValue, desktopUnit)};\n`;

                // Aliasing for backward compatibility
                if (cssVar.includes('--letter-spacing')) {
                    desktopStyles += `${cssVar.replace('--letter-spacing', '--font-letter-spacing')}: ${createValueWithUnit(desktopValue, desktopUnit)};\n`;
                }
                if (cssVar.includes('--line-height')) {
                    desktopStyles += `${cssVar.replace('--line-height', '--font-line-height')}: ${createValueWithUnit(desktopValue, desktopUnit)};\n`;
                }

                if (key === 'body') {
                    paragraphStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'link') {
                    linkStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'button') {
                    buttonStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'captions') {
                    captionStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'all') {
                    combinedHeadingStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'h1') {
                    heading1Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'h2') {
                    heading2Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'h3') {
                    heading3Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'h4') {
                    heading4Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'h5') {
                    heading5Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'h6') {
                    heading6Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
            }

            if (tabletValue !== null) {
                let typoValue = data[key][prop];
                const cssVar = `${typoValue.variable}`;
                tabletStyles += `${cssVar}: ${createValueWithUnit(tabletValue, tabletUnit)};\n`;

                // Aliasing for backward compatibility
                if (cssVar.includes('--letter-spacing')) {
                    tabletStyles += `${cssVar.replace('--letter-spacing', '--font-letter-spacing')}: ${createValueWithUnit(tabletValue, tabletUnit)};\n`;
                }
                if (cssVar.includes('--line-height')) {
                    tabletStyles += `${cssVar.replace('--line-height', '--font-line-height')}: ${createValueWithUnit(tabletValue, tabletUnit)};\n`;
                }
            }

            if (mobileValue !== null) {
                let typoValue = data[key][prop];
                const cssVar = `${typoValue.variable}`;
                mobileStyles += `${cssVar}: ${createValueWithUnit(mobileValue, mobileUnit)};\n`;

                // Aliasing for backward compatibility
                if (cssVar.includes('--letter-spacing')) {
                    mobileStyles += `${cssVar.replace('--letter-spacing', '--font-letter-spacing')}: ${createValueWithUnit(mobileValue, mobileUnit)};\n`;
                }
                if (cssVar.includes('--line-height')) {
                    mobileStyles += `${cssVar.replace('--line-height', '--font-line-height')}: ${createValueWithUnit(mobileValue, mobileUnit)};\n`;
                }
            }
        });

        // Add fontFamily to target context if not already added
        ['fontFamily'].forEach((prop) => {
            const fontFamily = getValue(data[key], prop);
            if (fontFamily !== null && fontFamily !== 'Default' && !fontFamilies.has(fontFamily)) {
                fontFamilies.add(fontFamily);
            }
        });
    });

    let fontUrl = '';
    if(fontFamilies.size > 0) {
        const fontFamily = Array.from(fontFamilies).map(font => font.replace(' ', '+')).join('|');
        fontUrl = `https://fonts.googleapis.com/css?family=${fontFamily}:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic`;
    }

    if(rootStyles === '' && desktopStyles === '' && paragraphStyles === '') {
        return false;
    }

    // Heading styles matching both post editor (.is-root-container) and template/site editor (.wp-site-blocks, .editor-styles-wrapper)
    const headingGrouped = `
        .wp-site-blocks h1, .is-root-container h1, .editor-styles-wrapper h1 {
            ${heading1Styles}
        }
        .wp-site-blocks h2, .is-root-container h2, .editor-styles-wrapper h2 {
            ${heading2Styles}
        }
        .wp-site-blocks h3, .is-root-container h3, .editor-styles-wrapper h3 {
            ${heading3Styles}
        }
        .wp-site-blocks h4, .is-root-container h4, .editor-styles-wrapper h4 {
            ${heading4Styles}
        }
        .wp-site-blocks h5, .is-root-container h5, .editor-styles-wrapper h5 {
            ${heading5Styles}
        }
        .wp-site-blocks h6, .is-root-container h6, .editor-styles-wrapper h6 {
            ${heading6Styles}
        }
    `;

    // Styles for the "all" combined typography
    const allCombinedStyles = `
        .wp-site-blocks h1, .is-root-container h1, .editor-styles-wrapper h1,
        .wp-site-blocks h2, .is-root-container h2, .editor-styles-wrapper h2,
        .wp-site-blocks h3, .is-root-container h3, .editor-styles-wrapper h3,
        .wp-site-blocks h4, .is-root-container h4, .editor-styles-wrapper h4,
        .wp-site-blocks h5, .is-root-container h5, .editor-styles-wrapper h5,
        .wp-site-blocks h6, .is-root-container h6, .editor-styles-wrapper h6 {
            ${combinedHeadingStyles}
        }
    `;

    const styles = `
        :root, .wp-site-blocks, .is-root-container, .editor-styles-wrapper {
            ${rootStyles}
            ${desktopStyles}
        }
        @media (max-width: 1024px) {
            :root, .wp-site-blocks, .is-root-container, .editor-styles-wrapper {
                ${tabletStyles}
            }
        }
        @media (max-width: 767px) {
            :root, .wp-site-blocks, .is-root-container, .editor-styles-wrapper {
                ${mobileStyles}
            }
        }

        .wp-site-blocks p, .is-root-container p, .editor-styles-wrapper p {
            ${paragraphStyles}
        }

        .wp-site-blocks a, .is-root-container a, .editor-styles-wrapper a, .wp-site-blocks p a, .is-root-container p a, .editor-styles-wrapper p a {
            ${linkStyles}
        }

        .wp-site-blocks .wp-block-button__link, .is-root-container .wp-block-button__link, .editor-styles-wrapper .wp-block-button__link, .wp-site-blocks button, .is-root-container button, .editor-styles-wrapper button {
            ${buttonStyles}
        }
        :root :where(.wp-element-button, .wp-block-button__link), .editor-styles-wrapper :where(.wp-element-button, .wp-block-button__link) {
            ${buttonStyles}
        }

        .wp-site-blocks figcaption, .is-root-container figcaption, .editor-styles-wrapper figcaption {
            ${captionStyles}
        }
        :root :where(.wp-element-caption, .wp-block-audio figcaption, .wp-block-embed figcaption, .wp-block-gallery figcaption, .wp-block-image figcaption, .wp-block-table figcaption, .wp-block-video figcaption), .editor-styles-wrapper :where(.wp-element-caption, .wp-block-audio figcaption, .wp-block-embed figcaption, .wp-block-gallery figcaption, .wp-block-image figcaption, .wp-block-table figcaption, .wp-block-video figcaption) {
            ${captionStyles}
        }
        ${allCombinedStyles}
        ${headingGrouped}
    `;

    lastTypoStyles = styles;
    lastFontUrl = fontUrl;

    syncTypoStylesToAll(styles, fontUrl);

    return styles;
};

// Auto-initialize if data exists in localized script or localStorage
if (typeof window !== 'undefined') {
    startTypoObserver();
    setTimeout(() => {
        const autoInitData = window.frontisBlocksAdmin?.global_typography || (() => {
            try {
                const stored = localStorage.getItem("fb_globaltypo");
                return stored && stored !== "null" ? JSON.parse(stored) : null;
            } catch (e) {
                return null;
            }
        })();

        if (autoInitData) {
            generateCSSVariables(autoInitData);
        }
    }, 0);
}

export default generateCSSVariables;
