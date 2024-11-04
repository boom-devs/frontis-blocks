import { __ } from '@wordpress/i18n';
import {
    BaseControl,
    TextControl,
    Dropdown,
    Button,
    Dashicon,
    ToggleControl
} from '@wordpress/components';
import './editor.lazy.scss';

const FB_UrlControl = ({ label, url, onChangeUrl, openInNewTab, onChangeOpenInNewTab }) => {
    const handleUrlChange = (newUrl) => {
        onChangeUrl(newUrl);
    };

    const handleOpenInNewTabChange = (newOpenInNewTab) => {
        onChangeOpenInNewTab(newOpenInNewTab);
    };

    return (
        <BaseControl
            label={label}
            id="fb-setting-url" 
            className="fb-url-control-wrapper"
        >
            <div className="fb-url-control-inner-wrapper">
                <TextControl
                    value={url}
                    onChange={handleUrlChange}
                    className="fb-url-control-input"
                    placeholder={__('https://', 'frontis-blocks')}
                />
                <Dropdown
                    className="fb-url-control-dropdown-wrapper"
                    contentClassName="fb-url-control-dropdown-content"
                    popoverProps={{ placement: 'bottom-start' }}
                    renderToggle={({ isOpen, onToggle }) => (
                        <Button
                            variant="primary"
                            onClick={onToggle}
                            aria-expanded={isOpen}
                            aria-label={__("Toggle URL Settings", "frontis-blocks")}
                            className="fb-url-control-dropdown-btn"
                        >
                            <Dashicon icon="color-picker" className="fb-url-control-dropdown-icon" />
                        </Button>
                    )}
                    renderContent={() => (
                        <div className="fb-url-control-dropdown-popup">
                            <BaseControl className="fb-url-control-dropdown-popup-inner">
                                <ToggleControl
                                    label={__("Open in new tab", "frontis-blocks")}
                                    checked={openInNewTab}
                                    onChange={handleOpenInNewTabChange}
                                />
                            </BaseControl>
                        </div>
                    )}
                />
            </div>
        </BaseControl>
    );
};

export default FB_UrlControl;