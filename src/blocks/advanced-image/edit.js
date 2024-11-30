import {__} from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar, MediaReplaceFlow, MediaPlaceholder,
	MediaUpload, MediaUploadCheck
} from '@wordpress/block-editor';
import {upload} from '@wordpress/icons';

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import './editor.scss';
import {Button, ToolbarButton, ToolbarGroup} from "@wordpress/components";

export default function Edit({attributes, setAttributes, clientId}) {
	const {
		blockID,
		image,
		imageId,
		imageLink,
		imageAlt,
		imageCaption,
		imageWidth,
		imageUrl,
		imgRounded,
		imgSquare,
		imgCircle,
		imageStyle,
		displayCaption,
		captionAlignment,
		imageSize,
		linkSwitch,
		linkTargetUrl,
		linkUrl,
		imageHover,
		imageFit,
		displayTitle,
		titleText,
		titleTag,
		titlePosition
	} = attributes;

	const blockProps = useBlockProps();

	const handleLinkClick = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>
			<BlockControls>
				{imageUrl && (
					<ToolbarGroup>
						<ToolbarButton
							onClick={() => setAttributes({
								imageId: '',
								imageUrl: '',
								imageAlt: '',
							})}
							icon="trash"
						/>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) => setAttributes({
									imageId: media.id,
									imageUrl: media.url,
									imageAlt: media.alt,
								})}
								allowedTypes={['image']}
								value={imageId}
								render={({open}) => (
									<ToolbarButton
										onClick={open}
										icon="edit"
									/>
								)}
							/>
						</MediaUploadCheck>
					</ToolbarGroup>
				)}
			</BlockControls>

			<div {...blockProps} id={blockID}>
				<div className={`fb-advanced-image-wrapper ${blockID}`}>
					<div className={`fb-advanced-image ${imageStyle} ${imageSize} ${imageHover} ${imageFit} ${titlePosition}`}>
						<div className="fb-advanced-image-inner">
							{imageUrl ? (
									<img src={imageUrl} alt={imageAlt}/>
								) : (
									<MediaPlaceholder
										onSelect={(media) => setAttributes({
											imageId: media.id,
											imageUrl: media.url,
											imageAlt: media.alt,
										})}
										allowedTypes={['image']}
										multiple={false}
										labels={{title: 'Add Author Image'}}
									/>
								)}

						</div>
						{displayTitle && (
							<div className="fb-advanced-image-title">
								<div className="fb-advanced-image-title-inner">
									<RichText
										tagName={titleTag}
										value={titleText}
										onChange={(value) => setAttributes({titleText: value})}
										placeholder="Add your title here..."
										className="fb-advanced-title"
									/>
								</div>
							</div>
						)
						}
						{displayCaption && (
							<div className="fb-advanced-image-caption">
								<RichText
									tagName='figcaption'
									value={imageCaption}
									onChange={(value) => setAttributes({imageCaption: value})}
									placeholder="Add your caption here..."
								/>
							</div>
						)
						}
					</div>
				</div>
			</div>
		</>
	);
}
