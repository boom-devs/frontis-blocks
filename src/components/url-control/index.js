import { __ } from '@wordpress/i18n';
import {
    BaseControl,
    TextControl,
    Dropdown,
    Button,
    Dashicon,
    ToggleControl
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import './editor.lazy.scss';

const FB_UrlControl = ({ label, url, onChangeUrl, openInNewTab, onChangeOpenInNewTab, context }) => {
    // Track if we're using a dynamic link
    const [useDynamicLink, setUseDynamicLink] = useState(false);

    // Get the current post URL - handling both regular context and query loop context
    const currentPostUrl = useSelect((select) => {
        // First check if we're in a Query Loop by checking for context.queryId and context.postId
        if (context?.queryId && context?.postId) {
            // We're in a Query Loop, get the post URL from the entity record
            return select('core').getEntityRecord('postType', 'post', context.postId)?.link || '';
        } 
        // Check if we're in a regular post editing context
        else {
            const editor = select('core/editor');
            if (editor) {
                return editor.getPermalink();
            }
            return '';
        }
    }, [context?.queryId, context?.postId]);

    const handleUrlChange = (newUrl) => {
        onChangeUrl(newUrl);
    };

    const handleDynamicToggleChange = (isChecked) => {
        setUseDynamicLink(isChecked);
        if (isChecked && currentPostUrl) {
            // Apply current post URL when dynamic link is enabled
            onChangeUrl(currentPostUrl);
        }
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
                    disabled={useDynamicLink}
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
                            aria-label={__('Toggle URL Settings', 'frontis-blocks')}
                            className="fb-url-control-dropdown-btn"
                        >
                            <Dashicon icon="admin-links" className="fb-url-control-dropdown-icon" />
                        </Button>
                    )}
                    renderContent={() => (
                        <div className="fb-url-control-dropdown-popup">
                            <BaseControl className="fb-url-control-dropdown-popup-inner">
                                <ToggleControl
                                    label={__('Open in new tab', 'frontis-blocks')}
                                    checked={openInNewTab}
                                    onChange={handleOpenInNewTabChange}
                                />
                                {currentPostUrl && (
                                    <ToggleControl
                                        label={__('Use Current Post URL', 'frontis-blocks')}
                                        checked={useDynamicLink}
                                        onChange={handleDynamicToggleChange}
                                        help={__('Links to: ', 'frontis-blocks') + currentPostUrl}
                                    />
                                )}
                                {!currentPostUrl && context?.queryId && (
                                    <div className="fb-url-control-info">
                                        {__('Post URL will be used automatically in the Query Loop.', 'frontis-blocks')}
                                    </div>
                                )}
                            </BaseControl>
                        </div>
                    )}
                />
            </div>
        </BaseControl>
    );
};

export default FB_UrlControl;