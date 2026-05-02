const generateColorsVariables = (colors, deviceType) => {
    if (!colors || !colors.length) {
        return false;
    }

    // Deduplicate colors by slug, keeping the last occurrence (most specific)
    const uniqueColorsMap = new Map();
    colors.forEach(color => {
        if (color.slug) {
            uniqueColorsMap.set(color.slug, color);
        }
    });
    const uniqueColors = Array.from(uniqueColorsMap.values());

    const cssVariables = `:root {
        ${uniqueColors.map(color => `--wp--frontis--color--${color.slug}: ${color.gradient || color.color};`).join('\n        ')}
    }`;

    // Helper to find the correct editor document
    const getEditorDocument = () => {
        const path = window.location.pathname;
        const fileName = path.substring(path.lastIndexOf('/') + 1);
        const isPostEditor = fileName === 'post.php' || fileName === 'post-new.php';

        let iframe = null;
        if (isPostEditor) {
            iframe = document.querySelector('iframe[name="editor-canvas"]');
        } else {
            // Site Editor
            iframe = document.querySelector("iframe.edit-site-visual-editor__editor-canvas");
        }

        return iframe?.contentDocument || iframe?.contentWindow?.document || document;
    };

    const targetDocument = getEditorDocument();
    
    // Update or create style tag in the target document (Iframe or Main)
    let styleTag = targetDocument.getElementById("global-colors");
    if (!styleTag) {
        styleTag = targetDocument.createElement("style");
        styleTag.id = "global-colors";
        targetDocument.head.appendChild(styleTag);
    }
    styleTag.textContent = cssVariables;

    // Also update main document if the target was an iframe (to ensure sidebar consistency)
    if (targetDocument !== document) {
        let mainStyleTag = document.getElementById("global-colors");
        if (!mainStyleTag) {
            mainStyleTag = document.createElement("style");
            mainStyleTag.id = "global-colors";
            document.head.appendChild(mainStyleTag);
        }
        mainStyleTag.textContent = cssVariables;
    }

    return cssVariables;
};

export default generateColorsVariables;
