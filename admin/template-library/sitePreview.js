import { useState, useEffect } from "@wordpress/element";

const SitePreview = () => {
    const [previewUrl, setPreviewUrl] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const siteUrl = window.location.origin + window.location.pathname.replace(/wp-admin.*/, '') + 'home/?hide_admin_bar=true&preview=true';
        setPreviewUrl(siteUrl);
    }, []);

    return (
        <div className="fb-site-preview-container">
            {isLoading && (
                <div className="fb-preview-loader">
                    <div className="fb-loader-spinner"></div>
                    <span>Loading preview...</span>
                </div>
            )}
            <iframe
                src={previewUrl}
                className="fb-preview-frame edit-site-visual-editor__editor-canvas"
                title="Site Preview"
                onLoad={() => setIsLoading(false)}
                scrolling="yes"
            />
        </div>
    );
};

export default SitePreview;