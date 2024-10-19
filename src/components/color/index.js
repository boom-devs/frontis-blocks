import { __ } from '@wordpress/i18n';
import { Button, ButtonGroup, BaseControl, Dropdown, ColorPicker, ColorPalette, Dashicon, } from '@wordpress/components';
import './editor.lazy.scss';


const FB_Color = ({label, globalColorSwitcher, globalColor, globalHoverColor, handleColorSwitcherChange, handleGlobalColorChange, handleGlobalHoverColorChange }) => {

    const NORMAL_HOVER = [
        { label: __('Normal', 'frontis-blocks'), value: 'normal' },
        { label: __('Hover', 'frontis-blocks'), value: 'hover' },
    ];

    const setHandleColorSwitcherChange = (value) => {
        handleColorSwitcherChange(value);
    };

    const setHandleGlobalColorChange = (value) => {
        handleGlobalColorChange(value);
    };

    const setHandleGlobalHoverColorChange = (value) => {
        handleGlobalHoverColorChange(value);
    };

    return (
        <div className="fb-setting-color-container">
            <BaseControl
                label={__(label, "frontis-blocks")}
                className="fb-setting-color-panel-wrapper"
            >
                <ButtonGroup className="fb-setting-color-panel-btn">
                    {NORMAL_HOVER.map((item, key) => (
                        <Button
                            key={key}
                            onClick={() => setHandleColorSwitcherChange(item.value)}
                            className={`fb-setting-color-panel-btn-switcher ${globalColorSwitcher === item.value ? 'active' : ''}`}
                        >
                            {item.label}
                        </Button>
                    ))}
                </ButtonGroup>
            </BaseControl>

            {globalColorSwitcher === 'normal' && (
                <BaseControl 
                    label={__("Normal Color", "frontis-blocks")}
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
                                <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                            </Button>
                        )}
                        renderContent={() => (
                            <div className="fb-setting-color-setting-icon-popup">
                                <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                    <div className="fb-setting-normal-color">
                                        <ColorPicker
                                            color={globalColor}
                                            onChange={setHandleGlobalColorChange}
                                            enableAlpha={true}
                                        />
                                        <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                        <ColorPalette
                                            colors={[
                                                { color: '#F72585' },
                                                { color: '#7209B7' },
                                                { color: '#3A0CA3' },
                                                { color: '#4361EE' },
                                                { color: '#4CC9F0' },
                                            ]}
                                            disableCustomColors={true}
                                            value={globalColor}
                                            onChange={setHandleGlobalColorChange}
                                        />
                                    </div>
                                </BaseControl>
                            </div>
                        )}
                    />
                </BaseControl>
            )}

            {globalColorSwitcher === 'hover' && (
                <BaseControl 
                    label={__("Hover Color", "frontis-blocks")}
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
                                <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                            </Button>
                        )}
                        renderContent={() => (
                            <div className="fb-setting-color-setting-icon-popup">
                                <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                    <div className="fb-setting-hover-color">
                                        <ColorPicker
                                            color={globalHoverColor}
                                            onChange={setHandleGlobalHoverColorChange}
                                            enableAlpha={true}
                                        />
                                        <div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                        <ColorPalette
                                            colors={[
                                                { color: '#F72585' },
                                                { color: '#7209B7' },
                                                { color: '#3A0CA3' },
                                                { color: '#4361EE' },
                                                { color: '#4CC9F0' },
                                            ]}
                                            disableCustomColors={true}
                                            value={globalHoverColor}
                                            onChange={setHandleGlobalHoverColorChange}
                                        />
                                    </div>
                                </BaseControl>
                            </div>
                        )}
                    />
                </BaseControl>
            )}
        </div>
    );
};

export default FB_Color;
