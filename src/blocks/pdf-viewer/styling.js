/**
 * PDF Viewer Block - Style Generation
 * Returns Dynamic Generated CSS
 */

// import getCustomCss from '@Utils/getCustomCss'; // Assuming this utility exists

const generatePdfViewerStyle = (attributes) => {
	const {
		blockID,
		height,
		// Add other attributes if they influence styling
	} = attributes;

	const pdfViewerStyle = `
        .fb-pdf-viewer-main-wrapper.${blockID} {
            /* Add any main wrapper styles here if needed */
        }
        .fb-pdf-viewer-wrapper.${blockID} {
            /* Add any inner wrapper styles here if needed */
        }
        .fb-pdf-viewer-iframe.${blockID} {
            height: ${height}px;
            width: 100%;
            border: none;
        }
    `;

	// const customCss = getCustomCss(countDownGlobalWraperCustomCSS, `.${blockID}`); // Example from context
	// return `${pdfViewerStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
	return pdfViewerStyle.replace(/\s+/g, " ").trim();
};

export default generatePdfViewerStyle;
