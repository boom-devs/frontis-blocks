import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		blockID, boxBgColor, borderRadius, beforeMediaUrl, width, height, titleColor, titleText
	} = attributes;

	const blockProps = useBlockProps.save({
        id: blockID,
    });

	return (
		<div id={blockID} className={`wp-block-ultimate-addons-icon-box-${blockID}`}>
			<div className={`image-compare-block ${blockID}`}>
				<div
					className="card"
					style={{backgroundColor: boxBgColor, borderRadius: `${borderRadius}px`}}
				>
					<div className="card-media">
						<img
							src={beforeMediaUrl}
							style={{width: `${width}px`, height: `${height}px`}}
							alt="Comparison Image"
						/>
					</div>
					<div className="card-body">
						<p style={{color: titleColor}}>
							{titleText}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
