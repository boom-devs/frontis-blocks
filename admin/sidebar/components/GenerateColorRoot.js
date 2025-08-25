const generateColorsVariables = (colors, deviceType) => {
    if (!colors.length) {
        return false;
    }

	const cssVariables = `:root {
   		${colors.map(color => `--wp--frontis--color--${color.slug}: ${color.gradient || color.color};`).join('\n    ')}
	}`;

    let iframe = document.querySelector("iframe.edit-site-visual-editor__editor-canvas");
    let iframeDocument = iframe?.contentDocument || iframe?.contentWindow?.document || document;
    let styleTag = iframeDocument.getElementById("global-colors");

    const path = window.location.pathname;
    const fileName = path.substring(path.lastIndexOf('/') + 1);

    if (fileName === 'post.php') {
        if(deviceType !== 'Desktop') {
            iframe = document.querySelector('iframe[name="editor-canvas"]');
            iframeDocument = iframe?.contentDocument || iframe?.contentWindow?.document || document;
            styleTag = iframeDocument.getElementById("global-colors");
        } else {
            iframe = document.querySelector('iframe[name="editor-canvas"]');
            iframeDocument = iframe?.contentDocument || iframe?.contentWindow?.document || document;
            styleTag = iframeDocument.getElementById("global-colors");
        }
    }

    if (!styleTag) {
        styleTag = iframeDocument.createElement("style");
        styleTag.id = "global-colors";
        iframeDocument.head.appendChild(styleTag);
    }


	// ⬇️ Add or update <style> in the main document as well
	let mainStyleTag = document.getElementById("global-colors");
	if (!mainStyleTag) {
		mainStyleTag = document.createElement("style");
		mainStyleTag.id = "global-colors";
		document.head.appendChild(mainStyleTag);
	}
	mainStyleTag.textContent = cssVariables;

    // Instead of appending, we replace the content
    styleTag.textContent = cssVariables;

    return cssVariables;
};

export default generateColorsVariables;
