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

// Safe helper to apply style element to any document
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

let lastColorStyles = '';

const syncColorStylesToAll = (cssContent) => {
    const finalStyles = cssContent || lastColorStyles;
    if (!finalStyles) return;

    // 1. Main window document
    applyStyleToDocument(document, 'global-colors', finalStyles);

    // 2. All editor iframes
    const iframes = getEditorIframes();
    iframes.forEach((iframe) => {
        attachIframeListener(iframe, (iframeDoc) => {
            applyStyleToDocument(iframeDoc, 'global-colors', finalStyles);
        });

        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
            if (iframeDoc) {
                applyStyleToDocument(iframeDoc, 'global-colors', finalStyles);
            }
        } catch (e) {}
    });
};

let colorObserverStarted = false;

const startColorObserver = () => {
    if (typeof window === 'undefined' || colorObserverStarted) return;
    colorObserverStarted = true;

    const onCheck = () => {
        if (lastColorStyles) {
            syncColorStylesToAll(lastColorStyles);
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

const generateColorsVariables = (colors, deviceType) => {
    startColorObserver();

    if (!colors || !colors.length) {
        colors = window.frontisBlocksAdmin?.global_colors || 
                 window.frontisBlocksAdmin?.theme_colors || 
                 (() => {
                     try {
                         const stored = localStorage.getItem("fb_global_colors");
                         return stored && stored !== "null" ? JSON.parse(stored) : [];
                     } catch (e) {
                         return [];
                     }
                 })();
    }

    if (!colors || !colors.length) {
        return false;
    }

    // Deduplicate colors by slug, keeping the last occurrence (most specific)
    const uniqueColorsMap = new Map();
    colors.forEach(color => {
        if (color && color.slug) {
            uniqueColorsMap.set(color.slug, color);
        }
    });
    const uniqueColors = Array.from(uniqueColorsMap.values());

    const cssVariables = `:root, .wp-site-blocks, .is-root-container, .editor-styles-wrapper {
        ${uniqueColors.map(color => `--wp--frontis--color--${color.slug}: ${color.gradient || color.color};`).join('\n        ')}
    }`;

    lastColorStyles = cssVariables;

    syncColorStylesToAll(cssVariables);

    return cssVariables;
};

// Auto-initialize if data exists in localized script or localStorage
if (typeof window !== 'undefined') {
    startColorObserver();
    setTimeout(() => {
        const autoInitColors = window.frontisBlocksAdmin?.global_colors || 
            window.frontisBlocksAdmin?.theme_colors || 
            (() => {
                try {
                    const stored = localStorage.getItem("fb_global_colors");
                    return stored && stored !== "null" ? JSON.parse(stored) : [];
                } catch (e) {
                    return [];
                }
            })();

        if (autoInitColors && autoInitColors.length) {
            generateColorsVariables(autoInitColors);
        }
    }, 0);
}

export default generateColorsVariables;
