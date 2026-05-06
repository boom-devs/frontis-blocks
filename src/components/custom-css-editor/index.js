import Editor from '@monaco-editor/react';

const FB_CustomCSSEditor = ({ value, onChangeValue}) => {
    
    /**
     * Decodes escaped characters in the CSS string.
     * Handles Unicode escapes (\uXXXX), standard sequences (\r, \n, \t),
     * and corrupted 'rn' sequences from double-unslashing.
     */
    const decodeCSS = (str) => {
        if (!str || typeof str !== 'string') return str;
        
        try {
            return str
                // 1. Decode Unicode escapes: \u003e -> >
                .replace(/\\u([0-9a-fA-F]{4})/g, (match, grp) => String.fromCharCode(parseInt(grp, 16)))
                // 2. Decode standard backslash escapes: \n -> newline
                .replace(/\\r/g, '\r')
                .replace(/\\n/g, '\n')
                .replace(/\\t/g, '\t')
                // 3. Fix corrupted 'rn' from PHP double-unslash bug
                // Only replace 'rn' if it follows a CSS delimiter or precedes indentation to avoid breaking words
                .replace(/([;{}])rn/g, '$1\n')
                .replace(/rn(\s{2,})/g, '\n$1');
        } catch (e) {
            console.error('FB Custom CSS Editor: Error decoding CSS value', e);
            return str;
        }
    };

    const decodedValue = decodeCSS(value);

    return (
        <div className="fb-custom-css-editor-wrapper" style={{ height: '250px' }}>
            <Editor
                height="100%"
                defaultLanguage="css"
                value={decodedValue}
                onChange={(newValue) => onChangeValue(newValue)}
                options={{
                    automaticLayout: true,
                    minimap: { enabled: false },
                    padding: { top: 10, bottom: 10 },
                    lineNumbers: 'on',
                    lineNumbersMinChars: 2,
                    quickSuggestions: true,
                }}
            />
        </div>
    );
};

export default FB_CustomCSSEditor;


