import { useState, useEffect, useRef } from "@wordpress/element";
import { TemplateContentLoader } from "./template-loader";
import { useDispatch, useSelector } from "react-redux";
import { setAttribute } from "./store/attributesSlice";

const SitePreview = ({ preview_url }) => {
	const [previewUrl, setPreviewUrl] = useState('');
	const iframeRef = useRef(null);

	const {
		sitePreviewLoading
	} = useSelector((state) => state.attributes);

	const dispatch = useDispatch();

	useEffect(() => {
		const currentOrigin = window.location.origin;
		const remoteUrl = encodeURIComponent(preview_url);

		let siteUrl = `${currentOrigin}/template-proxy/?template_proxy=1&url=${remoteUrl}`;

		if (window?.wpApiSettings?.permalink_structure === '' || window.location.href.includes('index.php')) {
			siteUrl = `${currentOrigin}/?template_proxy=1&url=${remoteUrl}`;
		}

		setPreviewUrl(siteUrl);
	}, [preview_url]);


	return (
		<div className="fb-site-preview-container">
			{sitePreviewLoading && (
				<TemplateContentLoader />
			)}
			<iframe
				ref={iframeRef}
				style={{ width: '100%', height: '100vh' }}
				src={previewUrl}
				className="fb-preview-frame"
				title="Site Preview"
				onLoad={() => dispatch(setAttribute({ sitePreviewLoading: false }))}
				scrolling="yes"
			/>
		</div>
	);
};

export default SitePreview;
