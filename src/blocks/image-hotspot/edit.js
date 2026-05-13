import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUpload } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { Button } from '@wordpress/components';

import Inspector from './inspector';
import hotspotStyling from './styling';

function Edit({ attributes, setAttributes }) {
	const {
		imageUrl,
		hotspots
	} = attributes;

	return (
		<div {...useBlockProps()}>
		{!imageUrl ? (
			<MediaUpload
			onSelect={(media) => setAttributes({ imageUrl: media.url })}
			allowedTypes={['image']}
			render={({ open }) => (
				<Button onClick={open} variant="primary">
				Select Image
				</Button>
			)}
			/>
		) : (
			<div className="image-hotspot-container">
			<img src={imageUrl} alt="Hotspot base" />
			<p>Hotspots will go here: {hotspots.length} added</p>
			</div>
		)}
		</div>
	);
}

export default Edit;
