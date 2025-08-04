/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, PlainText } from '@wordpress/block-editor';

const arrowMap = {
	none: '',
	arrow: '←',
	chevron: '«',
};



export default function Edit({ attributes, setAttributes, clientId, context }) {
	
	const {
		blockId,
		blockStyle,
		label,
	} = attributes;

	const { 
		paginationArrow,
		showLabel 
	} = context;

	const displayArrow = arrowMap[ paginationArrow ];
	return (
		<a
			href="#pagination-previous-pseudo-link"
			onClick={ ( event ) => event.preventDefault() }
			{ ...useBlockProps() }
		>
			{ displayArrow && (
				<span
					className={ `wp-block-query-pagination-previous-arrow fb-page-prev is-arrow-${ paginationArrow }` }
					aria-hidden
				>
					{ displayArrow }
				</span>
			) }
			{ showLabel && (
				<PlainText
					__experimentalVersion={ 2 }
					tagName="span"
					aria-label={ __( 'Previous page link' ) }
					placeholder={ __( 'Previous Page' ) }
					value={ label }
					onChange={ ( newLabel ) =>
						setAttributes( { label: newLabel } )
					}
				/>
			) }
		</a>
	);
}
