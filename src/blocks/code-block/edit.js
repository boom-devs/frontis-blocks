import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    PlainText,
} from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import Inspector from './inspector';
import { highlightCode } from './utils/syntax-highlighter';
import { CODE_THEMES } from './constants/constants';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        code,
        language,
        showLineNumbers,
        theme,
        fontSize,
        lineHeight,
        customBackgroundColor,
        customTextColor,
    } = attributes;

    // State for highlighted code
    const [highlightedCode, setHighlightedCode] = useState('');

    // Update highlighted code when code or language changes
    useEffect(() => {
        if (code) {
            const highlighted = highlightCode(code, language, theme);
            setHighlightedCode(highlighted);
        }
    }, [code, language, theme]);

    // Get theme colors
    const themeColors = CODE_THEMES[theme || 'default'] || CODE_THEMES.default;
    
    // Calculate background and text colors (custom colors override theme)
    const backgroundColor = customBackgroundColor || themeColors.background;
    const textColor = customTextColor || themeColors.text;

    // Generate line numbers
    const renderLineNumbers = () => {
        if (!code || !showLineNumbers) return null;
        
        const lines = code.split('\n');
        return (
            <div className="line-numbers-wrapper">
                {lines.map((_, index) => (
                    <span 
                        key={index} 
                        className="line-number" 
                        data-line={index + 1}
                    ></span>
                ))}
            </div>
        );
    };

    const blockProps = useBlockProps({
        className: `fb-code-block ${blockID}`,
        style: {
            backgroundColor,
            color: textColor,
            fontSize: fontSize ? `${fontSize}px` : '14px',
            lineHeight: lineHeight || 1.5,
        }
    });

    return (
        <div {...blockProps}>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
            <div className={`code-container ${showLineNumbers ? 'with-line-numbers' : ''}`}>
                {showLineNumbers && renderLineNumbers()}
                <div className="code-editor-wrapper">
                    <PlainText
                        className="code-editor"
                        value={code || ''}
                        onChange={(content) => setAttributes({ code: content })}
                        placeholder={__("Write your code here...", "frontis-blocks")}
                        aria-label={__("Code content", "frontis-blocks")}
                    />
                </div>
                
                {/* Preview mode with syntax highlighting */}
                <div className="code-preview">
                    <pre className={`language-${language || 'javascript'}`}>
                        <code 
                            className={`language-${language || 'javascript'}`}
                            dangerouslySetInnerHTML={{ __html: highlightedCode }}
                        ></code>
                    </pre>
                </div>
            </div>
        </div>
    );
}