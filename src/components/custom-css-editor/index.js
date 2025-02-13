import Editor from '@monaco-editor/react';
import './editor.lazy.scss';

const FB_CustomCSSEditor = ({ value, onChangeValue}) => {
    return (
        <div className="fb-custom-css-editor-wrapper" style={{ height: '250px' }}>
            <Editor
                height="100%"
                defaultLanguage="css"
                value={value}
                onChange={(value) => onChangeValue(value)}
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

