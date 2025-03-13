import { __ } from '@wordpress/i18n';
import {
	useBlockProps
} from '@wordpress/block-editor';
import Inspector from "./inspector";
import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";

import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockId,
		offCanvasIconAlign,
        offCanvasIcon,
		/** Start button Icon Image */
		offCanvasIconImageUrl,
		offCanvasIconImageAlt,
		offCanvasIconImageID,
		offCanvasIconImageWidth,
		offCanvasIconImageWidthUnits,
		offCanvasIconImageHeight,
		offCanvasIconImageHeightUnits,
		offCanvasIconImagedisplay,
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-off-canvas-closer-block ${blockId}`,
	});

	return (
		<>
		    <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
			<div {...blockProps}>
				<button className="fb-off-canvas-closer">

					{ offCanvasIconAlign === 'icon-text' && (
						<div className={`fb-off-canvas-closer-icon-wrapper`}>
							<div className="fb-off-canvas-closer-icon">{renderSVG(offCanvasIcon)}</div>
						</div>
					)}

					{offCanvasIconAlign === 'image' && offCanvasIconImageUrl && (
						<div className={`fb-off-canvas-closer-icon-wrapper`}>
							<div className="fb-off-canvas-closer-icon-image">
								{offCanvasIconImageUrl ? (
									<img src={offCanvasIconImageUrl} alt={offCanvasIconImageAlt} />
								) : (
									<MediaPlaceholder
										onSelect={(media) =>
											setAttributes({
												offCanvasIconImageID: media.id,
												offCanvasIconImageUrl: media.url,
												offCanvasIconImageAlt: media.alt,
											})
										}
										allowedTypes={['image']}
										multiple={false}
										labels={{ title: 'Add Image' }}
									/>
								)}
							</div>
						</div>
					)}
				</button>
			</div>
		
		</>
	);
}