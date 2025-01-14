import { __ } from '@wordpress/i18n';
import {
    Button,
    ButtonGroup,
    BaseControl,
    Dropdown,
    ColorPicker,
    ColorPalette,
    Dashicon,
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { Globe } from '@Icons';
import './editor.lazy.scss';


const FB_Color = ({
    label,
    globalColorSwitcher,
    globalColor,
    globalHoverColor,
    handleColorSwitcherChange,
    handleGlobalColorChange,
    handleGlobalHoverColorChange,
}) => {
    const NORMAL_HOVER = [
        { label: __('Normal', 'frontis-blocks'), value: 'normal' },
        { label: __('Hover', 'frontis-blocks'), value: 'hover' },
    ];

    const themeColors = useSelect((select) => select('core/editor').getEditorSettings()?.colors || [], []);
    const savedglobalColors = useSelect((select) => select('frontis-blocks/global-styles').getColors() || [], []);

    const defaultColors = [
        { color: '#F72585' },
        { color: '#7209B7' },
        { color: '#3A0CA3' },
        { color: '#4361EE' },
        { color: '#4CC9F0' },
    ];

    const [globalColors, setGlobalColors] = useState(defaultColors);

    useEffect(() => {
        const storedColors = localStorage.getItem('fb_global_colors');
        const storedCustomColors = localStorage.getItem('fb_custom_colors');
        let combinedColors = [];

        if (storedColors) {
            try {
                combinedColors = [...combinedColors, ...JSON.parse(storedColors)];
            } catch (error) {
                console.error('Error parsing global colors:', error);
            }
        }

        if (storedCustomColors) {
            try {
                combinedColors = [...combinedColors, ...JSON.parse(storedCustomColors)];
            } catch (error) {
                console.error('Error parsing custom colors:', error);
            }
        }

        setGlobalColors(combinedColors);
    }, []);

    const renderColorPanel = (isHover = false) => {
        const color = isHover ? globalHoverColor : globalColor;
        const handleColorChange = isHover ? handleGlobalHoverColorChange : handleGlobalColorChange;

        return (
            <div className="fb-setting-color-controls">
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
                                    {color || ''}
                                </span>
                                <div
                                    className="fb-setting-color-display"
                                    style={
                                        color
                                            ? { backgroundColor: color }
                                            : {
                                                backgroundImage: 'linear-gradient(45deg, #e9e9e9 25%, transparent 0), linear-gradient(-45deg, #e9e9e9 25%, transparent 0), linear-gradient(45deg, transparent 75%, #e9e9e9 0), linear-gradient(-45deg, transparent 75%, #e9e9e9 0)',
                                                backgroundPosition: '0 0, 0 5px, 5px -5px, -5px 0',
                                                backgroundSize: '10px 10px',
                                                border: '1px solid #e9e9e9',
                                                height: '22px',
                                                width: '22px',
                                            }
                                    }
                                />
                            </div>
                        </Button>
                    )}
                    renderContent={() => (
                        <div className="fb-setting-color-setting-icon-popup">
                            <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                <ColorPicker color={color} onChange={handleColorChange} enableAlpha={true} />
                                <div className="fb-setting-color-label">{__("Global Colors", "frontis-blocks")}</div>
                                <ColorPalette
                                    colors={globalColors}
                                    disableCustomColors={true}
                                    value={color}
                                    onChange={handleColorChange}
                                />
                                {themeColors.length > 0 && (
                                    <>
                                        <div className="fb-setting-color-label">{__("Theme Colors", "frontis-blocks")}</div>
                                        <ColorPalette
                                            colors={themeColors}
                                            disableCustomColors={true}
                                            value={color}
                                            onChange={handleColorChange}
                                        />
                                    </>
                                )}
                            </BaseControl>
                        </div>
                    )}
                />

                <Dropdown
                    className="fb-setting-global-colors-dropdown"
                    contentClassName="fb-setting-global-colors-content"
                    popoverProps={{ placement: 'bottom-start' }}
                    renderToggle={({ isOpen, onToggle }) => (
                        <Button
                            icon={<Globe />}
                            variant="secondary"
                            onClick={onToggle}
                            aria-expanded={isOpen}
                            className="fb-setting-global-colors-btn"
                        />
                    )}
                    renderContent={() => (
                        <div className="fb-setting-global-colors-popup">
                            <BaseControl className="fb-setting-global-colors-inner">
                                <div className="fb-setting-color-label">{__("Saved Global Colors", "frontis-blocks")}</div>
                                <ColorPalette
                                    colors={savedglobalColors}
                                    disableCustomColors={true}
                                    value={color}
                                    onChange={handleColorChange}
                                />
                            </BaseControl>
                        </div>
                    )}
                />
            </div>
        );
    };

    return (
        <div className="fb-setting-color-container">
            <BaseControl
                label={__(label, 'frontis-blocks')}
                className="fb-setting-color-panel-wrapper"
            >
                <ButtonGroup className="fb-setting-color-panel-btn fb-btn-group-text-only">
                    {NORMAL_HOVER.map((item) => (
                        <Button
                            key={item.value}
                            onClick={() => handleColorSwitcherChange(item.value)}
                            className={`fb-setting-color-panel-btn-switcher ${
                                globalColorSwitcher === item.value ? 'active' : ''
                            }`}
                        >
                            {item.label}
                        </Button>
                    ))}
                </ButtonGroup>
            </BaseControl>

            {globalColorSwitcher === 'normal' && (
                <BaseControl
                    label={__('Normal Color', 'frontis-blocks')}
                    className="fb-setting-color-setting-wrapper"
                >
                    {renderColorPanel(false)}
                </BaseControl>
            )}

            {globalColorSwitcher === 'hover' && (
                <BaseControl
                    label={__('Hover Color', 'frontis-blocks')}
                    className="fb-setting-color-setting-wrapper"
                >
                    {renderColorPanel(true)}
                </BaseControl>
            )}
        </div>
    );
};

export default FB_Color;
