// Export functions
export const frontisExtractTypoValue = (cssVar) => {
    if (typeof cssVar !== "string") {
        return null;
    }

    let match;
    let cssVarValue = '';

    // Remove 'var(...)' if present
    if (cssVar.startsWith("var(") && cssVar.endsWith(")")) {
        cssVar = cssVar.slice(4, -1).trim();
        cssVarValue = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
    }

    // Check if the input is a clamp() function
    if (cssVarValue.includes("clamp(")) {
        match = cssVarValue.match(/clamp\([^,]+,\s*[^,]+,\s*([\d.]+)([a-z%]+)\)/);
    } else {
        match = cssVarValue.match(/([\d.]+)([a-z%]+)/);
    }

    if (match) {
        return {
            value: parseFloat(match[1]), // Extracts the number
            unit: match[2] // Extracts the unit (px, rem, em, etc.)
        };
    }
    return null;
}

export const getFontFamily = (cssVariable) => {
    // Check if input is empty or not a string
    if (!cssVariable || typeof cssVariable !== 'string') {
        return null;
    }

    try {
        // If it's already a CSS variable name without var()
        if (cssVariable.startsWith('--')) {
            const value = getComputedStyle(document.documentElement)
                .getPropertyValue(cssVariable)
                .trim();
            return value || null;
        }

        // If it's a CSS variable with var()
        if (cssVariable.startsWith('var(')) {
            const variableName = cssVariable
                .replace('var(', '')
                .replace(')', '')
                .trim();
            
            const value = getComputedStyle(document.documentElement)
                .getPropertyValue(variableName)
                .trim();
            return value || null;
        }

        return null;
    } catch (error) {
        return null;
    }
}
