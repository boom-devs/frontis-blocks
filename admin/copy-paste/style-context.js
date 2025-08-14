import { createContext, useContext, useState } from '@wordpress/element';

const StyleContext = createContext();

export const StyleProvider = ({ children }) => {
    const [copyStyleState, setCopyStyle] = useState(null);
    const [copiedBlockName, setCopiedBlockName] = useState(null);

    return (
        <StyleContext.Provider value={{ copyStyleState, setCopyStyle, copiedBlockName, setCopiedBlockName }}>
            {children}
        </StyleContext.Provider>
    );
};

export const useStyleContext = () => useContext(StyleContext);