import { useState, useEffect, useRef } from "@wordpress/element";

const SitePreview = () => {
	const [previewUrl, setPreviewUrl] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const iframeRef = useRef(null);

	useEffect(() => {
		const currentOrigin = window.location.origin; // dynamic origin
		const remoteUrl = encodeURIComponent('https://yakutansi.boomdevshub.com/?hide_admin_bar=true&preview=true');
		const siteUrl = `${currentOrigin}/template-proxy/?url=${remoteUrl}`;
		setPreviewUrl(siteUrl);
	}, []);

	// useEffect(() => {
	// 	if (!isLoading && iframeRef.current) {
	// 		try {
	// 			const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
				
	// 			if (iframeDoc) {
	// 				let styleEl = iframeDoc.getElementById("global-colors-preview");

	// 				if (!styleEl) {
	// 					styleEl = iframeDoc.createElement("style");
	// 					styleEl.id = "global-colors-preview";
	// 					iframeDoc.head.appendChild(styleEl);
	// 				}

	// 				// Add demo CSS variables to :root
	// 				styleEl.innerHTML = `
	// 					:root {
	// 						--wp-frontis-color-primary: #FF0000;
	// 						--wp-frontis-color-secondary: #00FF00;
	// 						--wp-frontis-color-accent: #0000FF;
	// 					}
	// 				`;
	// 			}
	// 		} catch (err) {
	// 			console.warn("Cannot inject styles into iframe:", err);
	// 		}
	// 	}
	// }, [isLoading]);

	return (
		<div className="fb-site-preview-container">
			{isLoading && (
				<div className="fb-preview-loader">
					<div className="fb-loader-spinner"></div>
					<span>Loading preview...</span>
				</div>
			)}
			<iframe
				ref={iframeRef}
				style={{ width: '100%', height: '100vh' }}
				src={previewUrl}
				className="fb-preview-frame"
				title="Site Preview"
				onLoad={() => setIsLoading(false)}
				scrolling="yes"
			/>
		</div>
	);
};

export default SitePreview;
