import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const { blockId } = props.attributes;

	const blockProps = useBlockProps.save( {
		className: classnames( 'marquee-carousel-item', `fb-block-${ blockId }` ),
	} );

	return (
		<>
			<div { ...blockProps } key={ blockId }>
				<div className="marquee-carousel-item-content">
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
}