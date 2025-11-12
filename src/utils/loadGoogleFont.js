// const loadGoogleFont = (font) => {
//     if (font !== 'Default') {
//         const fontUrl = `https://fonts.googleapis.com/css?family=${font.replace(' ', '+')}:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic`;

//         // Add font to the main document
//         const linkElement = document.createElement('link');
//         linkElement.rel = 'stylesheet';
//         linkElement.href = fontUrl;
//         document.head.appendChild(linkElement);

//         // If an iframe is provided, add the font to its head
//         const iframe = document.querySelector('iframe[name="editor-canvas"]');
//         if (iframe) {
//             try {
//                 const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
//                 if (iframeDoc) {
//                     const iframeLinkElement = iframeDoc.createElement('link');
//                     iframeLinkElement.rel = 'stylesheet';
//                     iframeLinkElement.href = fontUrl;
//                     iframeDoc.head.appendChild(iframeLinkElement);
//                 }
//             } catch (error) {
//                 console.error('Failed to access iframe document:', error);
//             }
//         }
//     }
// };

// export default loadGoogleFont;

// loadGoogleFont.js

const FontTracker = (() => {
    const usedFonts = new Set(); // Tracks currently used fonts

    const getDocuments = () => {
        const docs = [document];
        const iframe = document.querySelector('iframe[name="editor-canvas"]');
        if (iframe && iframe.contentDocument) {
            try {
                docs.push(iframe.contentDocument);
            } catch (e) {
                console.warn('Cannot access iframe:', e);
            }
        }
        return docs;
    };

    const getLinkId = (font) => `fb-font-load-${font.replace(/[^a-zA-Z0-9]/g, '')}`;

    const addFontLink = (doc, font) => {
        const linkId = getLinkId(font);
        if (doc.getElementById(linkId)) return; // Already exists

        const safeFont = font.replace(/ /g, '+');
        const fontUrl = `https://fonts.googleapis.com/css?family=${safeFont}:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&display=swap`;

        const link = doc.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = fontUrl;
        doc.head.appendChild(link);
    };

    const updateAllLinks = () => {
        const docs = getDocuments();
        const currentFonts = Array.from(usedFonts);

        docs.forEach(doc => {
            // Remove all old fb-font-load-* links
            const allLinks = doc.querySelectorAll('link[id^="fb-font-load-"]');
            allLinks.forEach(link => link.remove());

            // Add only currently used fonts
            currentFonts.forEach(font => addFontLink(doc, font));
        });
    };

    return {
        // Call this to add/update font
        load(font) {
            if (!font || font === 'Default') return;

            const changed = !usedFonts.has(font);
            usedFonts.add(font);

            if (changed) {
                updateAllLinks();
            }
        },

        // Optional: force refresh (rarely needed)
        refresh() {
            updateAllLinks();
        },

        getAll() {
            return Array.from(usedFonts);
        }
    };
})();

// Main function - only this is exported
const loadGoogleFont = (font) => {
    FontTracker.load(font);
};

export default loadGoogleFont;