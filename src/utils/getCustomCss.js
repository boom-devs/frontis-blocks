/**
 * Generates prefixed CSS from a raw CSS string.
 *
 * @param {string} css         The raw CSS string to process.
 * @param {string} prefix      The selector prefix (e.g., "#block-id" or ".class-name").
 * @param {string} separator   The separator between prefix and selector. 
 *                              Defaults to ' ' (space) for descendant selectors (e.g., "#id .class").
 *                              Pass '' (empty string) for chained selectors (e.g., "#id.class").
 * @param {Array}  selfClasses Optional array of class names (without dot) that exist on the 
 *                              container element itself. When a CSS selector starts with one of 
 *                              these classes, a chained selector (no space) is used automatically
 *                              so the style targets the container itself instead of its descendants.
 * @returns {string}            The processed CSS string with prefixed selectors.
 */
const getCustomCss = (css, prefix, separator = ' ', selfClasses = []) => {
    if (!css || typeof css !== 'string') return '';

    const mediaRegex = /@media[^{]+\{([^{}]*\{[^{}]*\})+[^}]*\}/g;
    let mediaMatches = css.match(mediaRegex) || [];
    mediaMatches.forEach(mq => {
        css = css.replace(mq, '');
    });

    const normalRules = css
        .split('}')
        .map(rule => rule.trim())
        .filter(Boolean);

    const result = [];

    normalRules.forEach(rule => {
        const [selectors, properties] = rule.split('{').map(part => part.trim());
        if (!selectors || !properties) return;

        const prefixedSelectors = selectors
            .split(',')
            .map(sel => {
                const trimmed = sel.trim();

                // Auto-detect: if the selector starts with a class that exists on the
                // container element itself, use a chained selector (no space) so
                // the rule targets the container rather than its descendants.
                const isSelf = selfClasses.length > 0 && selfClasses.some(cls => {
                    const clsSel = `.${cls}`;
                    return trimmed === clsSel ||
                           trimmed.startsWith(`${clsSel} `) ||
                           trimmed.startsWith(`${clsSel}:`) ||
                           trimmed.startsWith(`${clsSel}.`) ||
                           trimmed.startsWith(`${clsSel}[`);
                });

                if (isSelf) {
                    return `${prefix}${trimmed}`;
                }

                return `${prefix}${separator}${trimmed}`;
            })
            .join(', ');
        result.push(`${prefixedSelectors} { ${properties} }`);
    });

    mediaMatches.forEach(media => {
        const openIndex = media.indexOf('{');
        const mediaQuery = media.slice(0, openIndex).trim();
        const inner = media.slice(openIndex + 1, -1).trim();

        const processedInner = getCustomCss(inner, prefix, separator, selfClasses);
        if (processedInner) {
            result.push(`${mediaQuery} {\n${processedInner}\n}`);
        }
    });

    return result.join('\n');
};

export default getCustomCss;
