import { useEffect } from 'react';
import Editor from '@monaco-editor/react';

const FB_CustomCSSEditor = ({ customCSS, setCustomCSS, blockId }) => {
    // Function to prefix CSS selectors with a given block ID
    const prefixSelectors = (css, prefix) => {
        return css
            .split('}') // Split CSS rules
            .map(rule => {
                const [selectors, properties] = rule.split('{'); // Separate selectors and properties
                if (!selectors || !properties) return ''; // Skip if invalid

                // Prefix each selector with a space separator
                const prefixedSelectors = selectors
                    .split(',')
                    .map(selector => `${prefix} ${selector.trim()}`) // Ensure a space separator
                    .join(', '); // Keep selectors properly formatted

                return `${prefixedSelectors} {${properties}}`; // Add closing bracket properly
            })
            .join('\n'); // Add new line between each rule
    };

    // Apply prefix to the provided CSS
    const addCustomCSS = prefixSelectors(customCSS, `.${blockId}`);

    useEffect(() => {
        if (setCustomCSS) {
            setCustomCSS(addCustomCSS);
        }
    }, [customCSS, blockId, setCustomCSS]);

    return (
        <div className="fb-advanced-heading-custom-css-editor-wrapper" style={{ height: '250px' }}>
            <Editor
                height="100%"
                defaultLanguage="css"
                theme="vs-dark"
                className="fb-advanced-heading-custom-css-editor"
                value={customCSS}
                onChange={(value) => setCustomCSS(value)}
                options={{
                    automaticLayout: true,
                    minimap: { enabled: false },
                    padding: { top: 10, bottom: 10 },
                    lineNumbers: 'on',
                    lineNumbersMinChars: 2, // Reduce line number spacing
                    fontSize: 14,
                    fontFamily: 'Fira Code, monospace',
                    scrollBeyondLastLine: true,
                    wordWrap: 'off',
                    tabSize: 4,
                    insertSpaces: true,
                    renderWhitespace: 'boundary',
                    cursorBlinking: 'smooth',
                    readOnly: false,
                    autoClosingBrackets: 'always',
                    formatOnPaste: true,
                    formatOnType: true,
                    quickSuggestions: true,
                    bracketPairColorization: true,
                    scrollBeyondLastColumn: 10,
                    horizontalScrollbarSize: 10,
                    verticalScrollbarSize: 10,
                    smoothScrolling: true,
                    cursorStyle: 'line',
                    cursorWidth: 2
                }}
            />
        </div>
    );
};

export default FB_CustomCSSEditor;