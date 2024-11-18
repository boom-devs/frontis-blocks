import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { getBlockTypes } from '@wordpress/blocks';
import { memo } from '@wordpress/element';
import shapes from './shapes';
import { select, useSelect } from '@wordpress/data';
import backgroundCss from './backgroundCss';

const Render = ( props ) => {

	const { attributes, clientId, hasSliderParent, hasPopupParent } = props;

	const {
		block_id,
		htmlTag,
		topType,
		topFlip,
		topContentAboveShape,
		bottomType,
		bottomFlip,
		bottomContentAboveShape,
		backgroundType,
		backgroundVideo,
		topInvert,
		bottomInvert,
		isBlockRootParent,
		contentWidth,
		innerContentWidth,
	} = attributes;

	const direction = attributes[ 'direction'+attributes.deviceType ];

	const moverDirection = 'row' === direction ? 'horizontal' : 'vertical';
	const getContainerBGStyle = backgroundCss( attributes, attributes.deviceType, clientId, { hasPseudo: true, forStyleSheet: false } );

	const topDividerHtml = 'none' !== topType && (
		<div
			className={ classnames(
				'frontis-blocks-container__shape',
				'frontis-blocks-container__shape-top',
				{ 'frontis-blocks-container__shape-flip': topFlip === true },
				{
					'frontis-blocks-container__shape-above-content': topContentAboveShape === true,
				},
				{ 'frontis-blocks-container__invert': topInvert === true }
			) }
		>
			{ shapes[ topType ] }
		</div>
	);

	const bottomDividerHtml = 'none' !== bottomType && (
		<div
			className={ classnames(
				'frontis-blocks-container__shape',
				'frontis-blocks-container__shape-bottom',
				{ 'frontis-blocks-container__shape-flip': bottomFlip === true },
				{
					'frontis-blocks-container__shape-above-content': bottomContentAboveShape === true,
				},
				{ 'frontis-blocks-container__invert': bottomInvert === true }
			) }
		>
			{ shapes[ bottomType ] }
		</div>
	);

	const { getBlockOrder } = select( 'core/block-editor' );

	const hasChildBlocks = getBlockOrder( clientId ).length > 0;

	const CustomTag = 'a' === htmlTag ? 'div' : `${ htmlTag }`;

	const hasChildren = 0 !== select( 'core/block-editor' ).getBlocks( clientId ).length;
	const hasChildrenClass = hasChildren ? 'frontis-blocks-container-has-children' : '';
	const isRootContainerClass = isBlockRootParent ? `${ contentWidth } frontis-blocks-is-root-container` : '';
	const blockProps = useBlockProps( {
		className: `frontis-blocks-block-${ block_id } ${ hasChildrenClass } frontis-blocks-editor-preview-mode-${ attributes.deviceType } ${ isRootContainerClass }`,
		style: getContainerBGStyle,
	} );

	const innerBlocksParams = {
		__experimentalMoverDirection: { moverDirection },
		renderAppender: hasChildBlocks ? undefined : InnerBlocks.ButtonBlockAppender,
	};

	// If a special block is needed, run this code block.
	if ( hasSliderParent || hasPopupParent ) {

		const parentBlocks = getBlockTypes().filter( ( item ) => ( ! item.parent ) );

		let ALLOWED_BLOCKS = parentBlocks.map( ( block ) => block.name );

		// Add the Updated Block List to the Inner Block Params.
		innerBlocksParams.allowedBlocks = ALLOWED_BLOCKS;
	}

	const { getBlockParentsAll, getBlockSingle } = useSelect( ( selectStore ) => {
		const { getBlockParents, getBlock } = selectStore( 'core/block-editor' );
		return { getBlockParentsAll: getBlockParents, getBlockSingle: getBlock };
	}, [] );

	const parentBlockIds = getBlockParentsAll( clientId );
	const parentBlockNames = parentBlockIds.map( ( id ) => getBlockSingle( id ).name );

	if ( parentBlockNames.includes( 'frontis-blocks/loop-builder' ) ) {
		const allowedBlocks = [
			'frontis-blocks/advanced-heading',
			'frontis-blocks/container',
		]
		innerBlocksParams.allowedBlocks = allowedBlocks;
	}

	return (
		<>
			<CustomTag { ...blockProps } key={ block_id }>
				{/* Video Background is positioned absolutely. The place in the DOM is to render it underneath the shape dividers and content. */}
				{ 'video' === backgroundType && (
					<div className="frontis-blocks-container__video-wrap">
						{ backgroundVideo && (
							<video autoPlay loop muted playsinline>
								<source src={ backgroundVideo.url } type="video/mp4" />
							</video>
						) }
					</div>
				) }
				{/* Both the dividers are positioned absolutely. Their place in the DOM is just to determine their default Z-index. */}
				{ topDividerHtml }
				{ bottomDividerHtml }
				{/* Render the content above the Video Background if any and above the Shape Dividers. */}
				{ isBlockRootParent && 'alignfull' === contentWidth && 'alignwide' === innerContentWidth ? (
					<div className="frontis-blocks-container-inner-blocks-wrap">
						<InnerBlocks { ...innerBlocksParams } />
					</div>
				) : (
					<InnerBlocks { ...innerBlocksParams } />
				) }
			</CustomTag>
		</>
	);
};
export default memo( Render );
