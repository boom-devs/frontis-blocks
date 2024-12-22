import { __ } from '@wordpress/i18n';
import { Button, BaseControl, Dropdown, ColorPicker, ColorPalette, Dashicon, } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import './editor.lazy.scss';


const FB_ColorControl = ({
    label, 
    globalColor,
    setGlobalColor,
}) => {

    const themeColors = useSelect((select) => {
		return select("core/editor").getEditorSettings().colors;
	}, []);

    const defaultColors = [
        { color: '#F72585' },
        { color: '#7209B7' },
        { color: '#3A0CA3' },
        { color: '#4361EE' },
        { color: '#4CC9F0' },
    ];

    const [globalColors, setGlobalColors] = useState(defaultColors);

    useEffect(() => {
        // Retrieve colors from local storage
        const storedColors = localStorage.getItem('fb_global_colors');
        const storedCustomColors = localStorage.getItem('fb_custom_colors');

        let combinedColors = [];

        if (storedColors) {
            try {
                const parsedColors = JSON.parse(storedColors);
                if (Array.isArray(parsedColors)) {
                    combinedColors = [...parsedColors];
                } else {
                    console.warn('Global colors is not an array:', parsedColors);
                }
            } catch (error) {
                console.error('Error parsing global colors:', error);
            }
        }

        if (storedCustomColors) {
            try {
                const parsedCustomColors = JSON.parse(storedCustomColors);
                if (Array.isArray(parsedCustomColors)) {
                    combinedColors = [...combinedColors, ...parsedCustomColors];
                } else {
                    console.warn('Custom colors is not an array:', parsedCustomColors);
                }
            } catch (error) {
                console.error('Error parsing custom colors:', error);
            }
        }
        setGlobalColors(combinedColors);
    }, []);

    return (
        <div className="fb-setting-color-container">
            <BaseControl 
                label={label}
                className="fb-setting-color-setting-wrapper"
            >
                <Dropdown
                    className="fb-setting-color-setting-icon-dropdown"
                    contentClassName="fb-setting-color-setting-icon-dropdown-content"
                    popoverProps={{ placement: 'bottom-start' }}
                    renderToggle={({ isOpen, onToggle }) => (
                        <Button
                            variant="primary"
                            onClick={onToggle}
                            aria-expanded={isOpen}
                            className="fb-setting-color-setting-icon-btn"
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span className="fb-setting-color-hex">
                                    {globalColor || ''} 
                                </span>
                                <div
                                    className="fb-setting-color-display"
                                    style={{
                                        background: globalColor
                                            ? globalColor
                                            : 'linear-gradient(45deg,#e9e9e9 25%,transparent 0),linear-gradient(-45deg,#e9e9e9 25%,transparent 0),linear-gradient(45deg,transparent 75%,#e9e9e9 0),linear-gradient(-45deg,transparent 75%,#e9e9e9 0)',
                                        backgroundSize: '10px 10px', 
                                        backgroundPosition: '0 0, 0 5px, 5px -5px, -5px 0',
                                        border: '1px solid #e9e9e9 !important',
                                        padding: '0',
                                        backgroundColor: globalColor || undefined
                                    }}
                                />
                            </div>
                        </Button>
                    )}
                    renderContent={() => (
                        <div className="fb-setting-color-setting-icon-popup">
                            <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                <div className="fb-setting-normal-color">
                                    <ColorPicker
                                        color={globalColor}
                                        onChange={setGlobalColor}
                                        enableAlpha={true}
                                    />
                                    <div className="fb-setting-color-label">{__("Global Colors", "frontis-blocks")}</div>
                                    <ColorPalette
                                        colors={globalColors}
                                        disableCustomColors={true}
                                        value={globalColor}
                                        onChange={setGlobalColor}
                                    />
                                    {themeColors.length > 0 && (
                                        <>
                                            <div className="fb-setting-color-label">{__("Theme Colors", "frontis-blocks")}</div>
                                            <ColorPalette
                                                colors={themeColors}
                                                disableCustomColors={true}
                                                value={globalColor}
                                                onChange={setGlobalColor}
                                            />
                                        </>
                                    )}
                                </div>
                            </BaseControl>
                        </div>
                    )}
                />
            </BaseControl>
        </div>
    );
};

export default FB_ColorControl;
