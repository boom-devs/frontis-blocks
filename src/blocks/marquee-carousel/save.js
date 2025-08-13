import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {

	const {
        blockId,
    } = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-marquee-slider-container ${blockId}`,
	});

	return (
		<div {...blockProps}>
			<div className="swiper-wrapper">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
