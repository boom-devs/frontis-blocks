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

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { blockId } = attributes;

	const blockProps = useBlockProps.save({
		className: `frontis-loop-wrapper uagb-loop-container fb-wrapper-block ${blockId || ''}`,
	});

	return (
		<div {...blockProps}>
			<div className="uagb-loop-post">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
