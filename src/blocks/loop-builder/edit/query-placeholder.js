/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import {
	createBlocksFromInnerBlocksTemplate,
	store as blocksStore,
} from '@wordpress/blocks';
import {
	useBlockProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { Button, Placeholder } from '@wordpress/components';

/**
 * Internal dependencies
 */
import variations from '@Blocks/loop-builder/variations';
import '../editor.scss';

export default function QueryPlaceholder( {
	attributes,
	clientId,
	name,
} ) {
	const blockProps = useBlockProps();

	const { blockType, activeBlockVariation } = useSelect(
		( select ) => {
			const { getActiveBlockVariation, getBlockType } =
				select( blocksStore );
			return {
				blockType: getBlockType( name ),
				activeBlockVariation: getActiveBlockVariation( name, attributes ),
			};
		},
		[ name, attributes ]
	);

	const icon =
		activeBlockVariation?.icon?.src ||
		activeBlockVariation?.icon ||
		blockType?.icon?.src;

	const label = activeBlockVariation?.title || blockType?.title;

	return (
		<div
			{ ...blockProps }
			className={ `${ blockProps.className } fb-loop-builder-variation-picker fb-loop-builder-variation-picker--empty` }
			data-fb-component="fb-loop-builder-variation-picker"
		>
			<div className="fb-loop-builder-variation-picker__inner">
				<QueryVariationPicker
					clientId={ clientId }
					icon={ icon }
					label={ label }
				/>
			</div>
		</div>
	);
}

function QueryVariationPicker( { clientId, icon, label } ) {
	const { replaceInnerBlocks, updateBlockAttributes } = useDispatch( blockEditorStore );
	const blockProps = useBlockProps();

	const handleSelect = ( variation ) => {
		if ( variation?.attributes ) {
			updateBlockAttributes( clientId, variation.attributes );
		}
		if ( variation?.innerBlocks?.length ) {
			replaceInnerBlocks(
				clientId,
				createBlocksFromInnerBlocksTemplate( variation.innerBlocks ),
				false
			);
		}
	};

	return (
		<div
			{ ...blockProps }
			className={ `${ blockProps.className } fb-loop-builder-variation-picker__picker` }
			data-fb-subcomponent="fb-loop-builder-variation-picker__picker"
		>
			<Placeholder
				className="fb-loop-builder-variation-picker__placeholder"
				icon={ icon }
				label={ label }
				instructions={ __( 'Select a variation to start with:' ) }
			>
				<div className="fb-loop-builder-variation-picker__placeholder-content">
					<ul
						className="fb-loop-builder-variation-picker__variations-list"
						role="list"
					>
						{ variations.map( ( variation ) => (
							<li
								key={ variation.name }
								className="fb-loop-builder-variation-picker__variation-item"
								data-fb-variation={ variation.name }
							>
								<Button
									className="fb-loop-builder-variation-picker__variation-button"
									onClick={ () => handleSelect( variation ) }
									label={
										variation.description ||
										variation.title ||
										variation.name
									}
									showTooltip
								>
									{ variation.icon }
								</Button>
							</li>
						) ) }
					</ul>
				</div>
			</Placeholder>
		</div>
	);
}
