/**
 * Frontend script for code block syntax highlighting
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get all code blocks
    const codeBlocks = document.querySelectorAll('.fb-code-block');
    
    // Define syntax highlighting patterns
    const SYNTAX_PATTERNS = {
        html: {
            tag: /<\/?[\w\s="/.':;#-\/\?]+>/g,
            attribute: /(\s+[\w-]+=)/g,
            string: /(["'])((?:\\1|(?:(?!\1)).)*)(\1)/g,
            comment: /<!--[\s\S]*?-->/g
        },
        css: {
            selector: /([.#][\w-]+|[\w-]+)?(?=\s*\{)/g,
            property: /([\w-]+)(?=\s*:)/g,
            value: /(:.*?)(;|$)/g,
            comment: /\/\*[\s\S]*?\*\//g,
            bracket: /[{}]/g
        },
        javascript: {
            keyword: /\b(var|let|const|function|class|extends|return|if|else|for|while|switch|case|break|continue|try|catch|finally|new|this|typeof|instanceof|import|export|from|default|async|await|static|null|undefined|true|false)\b/g,
            string: /(["'`])((?:\\1|(?:(?!\1)).)*)(\1)/g,
            number: /\b(\d+\.?\d*|0x[a-f0-9]+)\b/g,
            function: /(\w+)(?=\s*\()/g,
            comment: /\/\/.*$|\/\*[\s\S]*?\*\//gm,
            bracket: /[{}\[\]()]/g,
            operator: /[+\-*/%=<>!&|^~?:]/g
        },
        php: {
            keyword: /\b(if|else|while|do|for|foreach|as|return|function|class|extends|new|try|catch|throw|finally|switch|case|break|continue|public|private|protected|static|echo|print|include|require|namespace|use)\b/g,
            variable: /\$\w+\b/g,
            string: /(["'])((?:\\1|(?:(?!\1)).)*)(\1)/g,
            comment: /\/\/.*$|\/\*[\s\S]*?\*\//gm,
            phpTag: /<\?php|\?>/g,
            function: /(\w+)(?=\s*\()/g
        },
        python: {
            keyword: /\b(def|class|if|elif|else|for|while|try|except|finally|with|import|from|as|return|pass|break|continue|global|nonlocal|lambda|True|False|None)\b/g,
            string: /(["'])((?:\\1|(?:(?!\1)).)*)(\1)|([fru]?"""[\s\S]*?""")|([fru]?'''[\s\S]*?''')/g,
            number: /\b(\d+\.?\d*)\b/g,
            function: /(\w+)(?=\s*\()/g,
            comment: /#.*$/gm
        },
        plain: {
            // No highlighting for plain text
        }
        // Add patterns for other languages as needed
    };

    // Theme colors
    const CODE_THEMES = {
        default: {
            background: '#f5f5f5',
            text: '#333333',
            keyword: '#0033b3',
            string: '#067d17',
            number: '#1750eb',
            comment: '#8c8c8c',
            tag: '#0033b3',
            attribute: '#7d5c00',
            function: '#6f42c1',
            property: '#e36209',
            bracket: '#24292e',
            operator: '#d73a49',
            variable: '#e36209',
            selector: '#0033b3',
            value: '#067d17'
        },
        dark: {
            background: '#282c34',
            text: '#abb2bf',
            keyword: '#c678dd',
            string: '#98c379',
            number: '#d19a66',
            comment: '#5c6370',
            tag: '#e06c75',
            attribute: '#d19a66',
            function: '#61afef',
            property: '#e06c75',
            bracket: '#abb2bf',
            operator: '#56b6c2',
            variable: '#e06c75',
            selector: '#c678dd',
            value: '#98c379'
        },
        light: {
            background: '#fafafa',
            text: '#383a42',
            keyword: '#a626a4',
            string: '#50a14f',
            number: '#986801',
            comment: '#a0a1a7',
            tag: '#e45649',
            attribute: '#986801',
            function: '#4078f2',
            property: '#e45649',
            bracket: '#383a42',
            operator: '#0184bc',
            variable: '#e45649',
            selector: '#a626a4',
            value: '#50a14f'
        }
    };

    /**
     * Escape HTML to prevent XSS attacks
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
     */
    function generateLineNumbers(code) {
        const lines = code.split('\n');
        let lineNumbersHtml = '';
        
        for (let i = 0; i < lines.length; i++) {
            lineNumbersHtml += `<span class="line-number" data-line="${i + 1}"></span>`;
        }
        
        return `<div class="line-numbers-wrapper">${lineNumbersHtml}</div>`;
    }

    /**
     * Highlights code based on language
     */
    function highlightCode(code, language = 'plain', theme = 'default') {
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
     */
    function renderCode(code, language, showLineNumbers, theme) {
        const highlightedCode = highlightCode(code, language, theme);
        const codeHtml = `<code class="language-${language}">${highlightedCode}</code>`;
        
        if (showLineNumbers) {
            const lineNumbersHtml = generateLineNumbers(code);
            return `<div class="code-container with-line-numbers">${lineNumbersHtml}<pre>${codeHtml}</pre></div>`;
        }
        
        return `<div class="code-container"><pre>${codeHtml}</pre></div>`;
    }

    // Process each code block
    codeBlocks.forEach(block => {
        try {
            // Get attributes from data-* attributes
            const language = block.getAttribute('data-language') || 'plain';
            const theme = block.getAttribute('data-theme') || 'default';
            const showLineNumbers = block.getAttribute('data-line-numbers') === 'true';
            
            // Get code text
            const codeElement = block.querySelector('code');
            if (!codeElement) return;
            
            const code = codeElement.textContent;
            
            // Generate highlighted HTML
            const codeHtml = renderCode(code, language, showLineNumbers, theme);
            
            // Replace the content
            block.innerHTML = codeHtml;
        } catch (error) {
            console.error('Error highlighting code block:', error);
        }
    });
});