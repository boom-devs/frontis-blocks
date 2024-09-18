import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar, MediaReplaceFlow, MediaPlaceholder,
	MediaUpload, MediaUploadCheck
} from '@wordpress/block-editor';
import { upload } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import './editor.scss';
import {Button} from "@wordpress/components";

export default function Edit({ attributes, setAttributes, clientId}) {
	const {
		blockID,
		image,
		imageId,
		imageLink,
		imageAlt,
		imageCaption,
		imageWidth
	} = attributes;


	const blockProps = useBlockProps();

	const setImageAttributes = (media) => {
		if (!media || !media.url) {
			setAttributes({
				imageLink: null,
				imageId: null,
				imageAlt: null,
			});
			return;
		}
		setAttributes({
			imageLink: media.url,
			imageId: media.id,
			imageAlt: media?.alt,
		});
	};

	const urls = image.url;

	return (
		<>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId ={clientId}
			/>

			{/*<BlockControls>*/}
			{/*	<AlignmentToolbar*/}
			{/*		value={HeadingAlignment}*/}
			{/*		onChange={(value) => setAttributes({ HeadingAlignment: value })}*/}
			{/*		controls={['left', 'center', 'right', 'justify']}*/}
			{/*	/>*/}
			{/*</BlockControls>*/}

			<div {...blockProps} id={blockID}>
				{/*<MediaPlaceholder*/}
				{/*	value={imageId}*/}
				{/*	accept="image/*"*/}
				{/*	allowedTypes={['image']}*/}
				{/*	onSelect={setImageAttributes}*/}
				{/*	multiple={false}*/}
				{/*	handleUpload={true}*/}
				{/*	labels = { { title: __("Upload image", "frontis-block") } }*/}
				{/*/>*/}

				{urls === '' ? (
					<MediaPlaceholder
						onSelect={(image) => {
							setAttributes({
								image,
								imageCaption: image.caption,
							});
						}}
						accept="image/*"
						allowedTypes={["image"]}
						mediaLibraryButton={({ open }) => {
							return (
								<Button
									icon={upload}
									variant="primary"
									label={__('Add image from media')}
									showTooltip
									tooltipPosition="top center"
									onClick={() => {
										open();
									}}
								/>
							);
						}}

						// multiple
						labels={{
							title: "Upload Image",
							instructions:
								"Drag media file, upload or select image from your library.",
						}}
					/>
				) : (
					<div
						className={`fb-image-wrapper fb-image-parent-${blockID}`}
					>
						<figure
							className={`fb-advanced-image-wrapper ${blockID}`}
							data-id={blockID}
						>
							<img src={urls} alt={image.alt}/>
						</figure>
					</div>
				)}
			</div>
		</>
	);
}
