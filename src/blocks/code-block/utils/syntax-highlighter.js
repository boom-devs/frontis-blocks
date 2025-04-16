import { SYNTAX_PATTERNS, CODE_THEMES } from '../constants/constants';

/**
 * Escape HTML to prevent XSS attacks
 * @param {string} html - The HTML string to escape
 * @return {string} - The escaped HTML string
 */
function escapeHtml(html) {
    return html
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/**
 * Generate line numbers for code
 * @param {string} code - The code to generate line numbers for
 * @return {string} - The HTML for line numbers
 */
// function generateLineNumbers(code) {
//     const lines = code.split('\n');
//     let lineNumbersHtml = '';
    
//     for (let i = 0; i < lines.length; i++) {
//         lineNumbersHtml += `<span class="line-number" data-line="${i + 1}"></span>`;
//     }
    
//     return `<div class="line-numbers-wrapper">${lineNumbersHtml}</div>`;
// }

/**
 * Highlights code based on language
 * @param {string} code - The code to highlight
 * @param {string} language - The programming language
 * @param {string} theme - The color theme to use
 * @return {string} - The highlighted HTML
 */
export function highlightCode(code, language = 'plain', theme = 'default') {
    if (!code) return '';
    
    // Escape HTML first
    let escapedCode = escapeHtml(code);
    
    // Get language patterns and theme colors
    const patterns = SYNTAX_PATTERNS[language] || SYNTAX_PATTERNS.plain;
    const colors = CODE_THEMES[theme] || CODE_THEMES.default;
    
    // Apply syntax highlighting if patterns exist for this language
    if (Object.keys(patterns).length > 0) {
        // Save original code before replacement
        const codeLines = escapedCode.split('\n');
        let highlightedLines = [];
        
        for (let line of codeLines) {
            // Apply patterns to each line
            for (let type in patterns) {
                const regex = patterns[type];
                // Need to reset regex for each line
                regex.lastIndex = 0;
                
                if (type === 'comment') {
                    // Handle comments differently as they might span multiple lines
                    line = line.replace(regex, match => 
                        `<span class="token comment" style="color: ${colors.comment}">${match}</span>`
                    );
                } else {
                    // Apply other patterns
                    line = line.replace(regex, match => {
                        const tokenColor = colors[type] || colors.text;
                        return `<span class="token ${type}" style="color: ${tokenColor}">${match}</span>`;
                    });
                }
            }
            highlightedLines.push(line);
        }
        
        // Join lines back together
        escapedCode = highlightedLines.join('\n');
    }
    
    return escapedCode;
}

/**
 * Renders code with optional line numbers
 * @param {string} code - The code to render
 * @param {string} language - The programming language
 * @param {boolean} showLineNumbers - Whether to show line numbers
 * @param {string} theme - The color theme
 * @return {string} - The rendered HTML
 */
export function renderCode(code, language, showLineNumbers, theme) {
    const highlightedCode = highlightCode(code, language, theme);
    const codeHtml = `<code class="language-${language}">${highlightedCode}</code>`;
    
    // if (showLineNumbers) {
    //     // const lineNumbersHtml = generateLineNumbers(code);
    //     return `<div class="code-container with-line-numbers">${lineNumbersHtml}<pre>${codeHtml}</pre></div>`;
    // }
    
    return `<div class="code-container"><pre>${codeHtml}</pre></div>`;
}