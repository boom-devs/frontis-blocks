const generatePdfViewerStyle = (attributes) => {
	const { blockID, height } = attributes;

	const pdfViewerStyle = `
        .fb-pdf-viewer-main-wrapper.${blockID} {
           
        }
        .fb-pdf-viewer-wrapper.${blockID} {
           
        }
        .fb-pdf-viewer-iframe.${blockID} {
            height: ${height}px;
            width: 100%;
            border: none;
        }
    `;

	return pdfViewerStyle.replace(/\s+/g, " ").trim();
};

export default generatePdfViewerStyle;
