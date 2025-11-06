// src/admin/components/common/PluginChangelog.js
import { useState, useEffect } from '@wordpress/element';
import { Spinner } from '@wordpress/components';

const PluginChangelog = ({ isOpen, onClose }) => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Body scroll lock when modal is open
    useEffect(() => {
        if (isOpen) {
            // Add class to body
            document.body.classList.add('fb-changelog-modal-open');

            // Optional: Save current scroll position
            const scrollY = window.scrollY;
            document.body.style.top = `-${scrollY}px`;
        } else {
            // Remove class and restore scroll
            document.body.classList.remove('fb-changelog-modal-open');
            const scrollY = document.body.style.top;
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        // Cleanup on unmount
        return () => {
            document.body.classList.remove('fb-changelog-modal-open');
            document.body.style.top = '';
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const fetchChangelog = async () => {
            setLoading(true);
            setError('');
            setContent('');

            const formData = new FormData();
            formData.append('action', 'fb_get_plugin_changelog');
            formData.append('plugin_slug', 'frontis-blocks');
            formData.append('security', window.fb_ajax_nonce?.nonce || '');

            try {
                const response = await fetch(ajaxurl, {
                    method: 'POST',
                    body: formData,
                });

                const data = await response.json();

                if (data.success) {
                    let html = '';
                    if (data.data.version) {
                        html += `
                            <div class="changelog-current-version">
                                <strong>Current Version:</strong> ${data.data.version}
                                ${data.data.last_updated ? `
                                    <span style="margin-left:10px;color:#666;font-size:12px;">
                                        Updated: ${new Date(data.data.last_updated).toLocaleDateString()}
                                    </span>
                                ` : ''}
                            </div>`;
                    }
                    html += data.data.changelog;
                    setContent(html);
                } else {
                    setError(data.data.message || 'Failed to load changelog.');
                }
            } catch (err) {
                setError('Network error. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchChangelog();
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fb-changelog-modal">
            <div className="fb-changelog-wrapper">
                <div className="fb-changelog-header">
                    <h2 className="fb-changelog-title">System Status</h2>
                    <button className="fb-changelog-close-btn" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div className="fb-changelog-content">
                    {loading && (
                        <div className="fb-changelog-loading">
                            <Spinner />
                            <p>Loading changelog...</p>
                        </div>
                    )}

                    {error && (
                        <div className="fb-changelog-error">
                            {error}
                        </div>
                    )}

                    {content && !loading && (
                        <div className="fb-changelog-html" dangerouslySetInnerHTML={{ __html: content }} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default PluginChangelog;