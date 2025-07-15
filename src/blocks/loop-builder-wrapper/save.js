// import classnames from 'classnames';
// import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

// export default function save( props ) {
// 	const { blockId } = props.attributes;

// 	const blockProps = useBlockProps.save( {
// 		className: classnames( 'fb-slider-child-wrap', 'swiper-slide', `fb-block-${ blockId }` ),
// 	} );

// 	return (
// 		<>
// 			<div { ...blockProps } key={ blockId }>
// 				<div className="swiper-content">
// 					<InnerBlocks.Content />
// 				</div>
// 			</div>
// 		</>
// 	);
// }

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
	return (
		<div {...useBlockProps.save({ className: 'frontis-loop-wrapper uagb-loop-container fb-wrapper-block' })}>
			<InnerBlocks.Content />
		</div>
	);
}
