import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { CODE_THEMES } from './constants/constants';
import { renderCode } from './utils/syntax-highlighter';

export default function save({ attributes }) {
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
    
    // Get theme colors
    const themeColors = CODE_THEMES[theme || 'default'] || CODE_THEMES.default;
    
    // Calculate background and text colors (custom colors override theme)
    const backgroundColor = customBackgroundColor || themeColors.background;
    const textColor = customTextColor || themeColors.text;
    
    const blockProps = useBlockProps.save({
        className: `fb-code-block ${blockID} theme-${theme || 'default'}`,
        style: {
            backgroundColor,
            color: textColor,
            fontSize: fontSize ? `${fontSize}px` : '14px',
            lineHeight: lineHeight || 1.5,
        }
    });
    
    // Generate the HTML for the code with highlighting
    const codeHtml = renderCode(code, language, showLineNumbers, theme);
    
    return (
        <div {...blockProps} data-language={language} data-theme={theme} data-line-numbers={showLineNumbers.toString()}>
            <div dangerouslySetInnerHTML={{ __html: codeHtml }}></div>
        </div>
    );
}