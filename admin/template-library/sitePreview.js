import { useState, useEffect, useRef } from "@wordpress/element";

const SitePreview = () => {
	const [previewUrl, setPreviewUrl] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const iframeRef = useRef(null);

	useEffect(() => {
		const currentOrigin = window.location.origin; // dynamic origin
		const remoteUrl = encodeURIComponent('https://yakutansi.boomdevshub.com/?hide_admin_bar=true&preview=true');

		let siteUrl = `${currentOrigin}/template-proxy/?url=${remoteUrl}`;

		if (window?.wpApiSettings?.permalink_structure === '' || window.location.href.includes('index.php')) {
			siteUrl = `${currentOrigin}/?template_proxy=1&url=${remoteUrl}`;
		}

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
