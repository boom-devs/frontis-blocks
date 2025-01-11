import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import classnames from 'classnames';

export default function save( props ) {
	const { attributes } = props;

    const {
        blockId,
        slideContent,
        slideItem,
        transitionSpeed,
        displayArrows,
		displayDots,
    } = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div
			key={ blockId }
			className={ classnames( blockProps.className, `fb-block-${ blockId }`, 'fb-slider-container' ) }
		>
			<div className="fb-slides fb-swiper">
				<div className="swiper-wrapper">
					<InnerBlocks.Content />
				</div>
			</div>
			{ displayDots && <div className="swiper-pagination"></div> }

			{ displayArrows && (
				<>
					<div className="swiper-button-prev"></div>
					<div className="swiper-button-next"></div>
				</>
			) }
		</div>
	);
}
