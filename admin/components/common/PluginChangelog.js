// src/admin/components/common/PluginChangelog.js
import { useState, useEffect } from '@wordpress/element';
import { Modal, Spinner } from '@wordpress/components';

const PluginChangelog = ({ isOpen, onClose }) => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

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
        <Modal
            title="Frontis Blocks – Changelog"
            onRequestClose={onClose}
            className="fb-changelog-modal"
            shouldCloseOnClickOutside={true}
            style={{ maxWidth: '800px' }}
        >
            <div className="fb-changelog-content">
                {loading && (
                    <div className="fb-changelog-loading" style={{ textAlign: 'center', padding: '40px' }}>
                        <Spinner />
                        <p>Loading changelog...</p>
                    </div>
                )}

                {error && (
                    <div className="fb-changelog-error" style={{ color: 'red', padding: '20px' }}>
                        {error}
                    </div>
                )}

                {content && !loading && (
                    <div
                        className="fb-changelog-html"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                )}
            </div>

            <div className="fb-changelog-footer" style={{
                textAlign: 'right',
                padding: '15px 20px',
                borderTop: '1px solid #ddd',
                background: '#f9f9f9'
            }}>
                <button className="button" onClick={onClose}>Close</button>
            </div>
        </Modal>
    );
};

export default PluginChangelog;