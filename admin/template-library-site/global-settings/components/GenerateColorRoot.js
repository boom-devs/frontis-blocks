const generateColorsVariables = (colors = [], deviceType, previewType) => {
    if (!colors.length) return false;

    // Generate CSS variables
    const cssVariables = `:root {
        ${colors
            .map(
                (color) =>
                    `--wp--frontis--color--${color.slug}: ${color.gradient || color.color};`
            )
            .join("\n    ")}
    }`;

    // Determine iframe based on previewType
    let iframe;
    if (previewType === "preview") {
        iframe = document.querySelector("iframe.fb-preview-frame");
    } else {
        iframe = document.querySelector("iframe.edit-site-visual-editor__editor-canvas") || 
                 document.querySelector('iframe[name="editor-canvas"]');
    }

    // Fallback to main document if iframe not found
    const iframeDocument = iframe?.contentDocument || iframe?.contentWindow?.document || document;

    // Style ID
    const styleId = "global-colors-preview";

    // Check if style tag exists inside iframe head
    let styleTag = iframeDocument.getElementById(styleId);

    // Create style tag inside iframe head if it doesn't exist
    if (!styleTag) {
        styleTag = iframeDocument.createElement("style");
        styleTag.id = styleId;
        iframeDocument.head.appendChild(styleTag);
    }

    // Always update content of iframe style tag
    styleTag.textContent = cssVariables;

    // Optional: update main document style if previewType !== "preview"
    if (previewType !== "preview") {
        let mainStyleTag = document.getElementById(styleId);
        if (!mainStyleTag) {
            mainStyleTag = document.createElement("style");
            mainStyleTag.id = styleId;
            document.head.appendChild(mainStyleTag);
        }
        mainStyleTag.textContent = cssVariables;
    }

    return cssVariables;
};

export default generateColorsVariables;
