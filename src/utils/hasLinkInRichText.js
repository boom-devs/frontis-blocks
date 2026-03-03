/**
 * Detect <a> tags inside the HTML content
 * 
 * @param {string} htmlContent - The HTML content to check
 * @returns {boolean} - Returns true if <a> tags are present, otherwise false
 */
const hasLinkInRichText = (htmlContent) => {
    if (!htmlContent) return false;

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const aTags = doc.querySelectorAll("a");

    return aTags.length > 0;
};

export default hasLinkInRichText;
