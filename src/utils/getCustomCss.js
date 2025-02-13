const getCustomCss = (css, prefix) => {
    if (!css || typeof css !== 'string') return ''; // Ensure css is a valid string

    return css
        .split('}') // Split CSS rules
        .map(rule => {
            const [selectors, properties] = rule.split('{').map(part => part.trim()); // Trim spaces

            if (!selectors || !properties) return ''; // Skip if invalid
            
            // Prefix each selector with a space separator
            const prefixedSelectors = selectors
                .split(',')
                .map(selector => `${prefix} ${selector.trim()}`) // Ensure a space separator
                .join(', '); // Keep selectors properly formatted

            return properties ? `${prefixedSelectors} { ${properties} }` : ''; // Add closing bracket properly
        })
        .filter(Boolean) // Remove empty entries
        .join('\n'); // Add new line between each rule
};

export default getCustomCss;
