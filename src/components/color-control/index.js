import { __ } from '@wordpress/i18n';
import { Button, BaseControl, Dropdown, ColorPicker, ColorPalette, Dashicon, } from '@wordpress/components';
import './editor.lazy.scss';


const FB_ColorControl = ({
    label, 
    globalColor,
    setGlobalColor,
}) => {

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
                            <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
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
                                        onChange={setGlobalColor}
                                    />
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
