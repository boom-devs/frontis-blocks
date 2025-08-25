import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const { blockId } = props.attributes;

	const blockProps = useBlockProps.save( {
		className: classnames( 'marquee-carousel-item', 'swiper-slide', `fb-block-${ blockId }` ),
	} );

	return (
		<>
			<div { ...blockProps } key={ blockId }>
				<div className="swiper-content">
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
}