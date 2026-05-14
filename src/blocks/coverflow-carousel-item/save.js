import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const { blockID } = props.attributes;

	const blockProps = useBlockProps.save( {
		className: classnames( 'fb-coverflow-carousel-child-wrap', 'fb-coverflow-carousel-slide', `fb-block-${ blockID }` ),
	} );

	return (
		<>
			<div { ...blockProps } key={ blockID }>
				<div className="fb-coverflow-carousel-content">
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
}