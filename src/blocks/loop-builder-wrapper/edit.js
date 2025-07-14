// import { __ } from '@wordpress/i18n';
// import { RichText, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
// import { useEffect, useMemo } from '@wordpress/element';
// import Inspector from './inspector';
// import { withSelect } from '@wordpress/data';
// import { compose } from '@wordpress/compose';

// const Edit = (props) => {
//     const { attributes, setAttributes, clientId, context, slideIndex } = props;

//     const { blockId } = attributes;


//     const parentBlocks = wp.blocks.getBlockTypes().filter( function ( item ) {
// 		return ! item.parent;
// 	} );

//     const TEMPLATE = [
//         [
//             'frontis-blocks/container',
//             {},
//             [
//                 [ 'frontis-blocks/testimonial' ],
//             ]
//         ]
//     ];

//     // Hide slider block.
// 	const ALLOWED_BLOCKS = parentBlocks
//     .map( ( block ) => block.name )
//     .filter(
//         ( blockName ) => [ 'frontis-blocks/slider', ].indexOf( blockName ) === -1
//     );

//     const innerBlockOptions = {
//         allowedBlocks: ALLOWED_BLOCKS,
//         template: TEMPLATE,
//     };

//     const innerBlocksProps = useInnerBlocksProps(
//         {
//             className: `swiper-content`,
//             slot: 'container-start',
//         },
//         innerBlockOptions
//     );

//     const blockProps = useBlockProps({
//         className: `fb-slide-main-wrapper ${blockId || 'default-id'} swiper-slide`,
//     });

//     return (
//         <>
//             <div {...blockProps}>
//                 <div {...innerBlocksProps} />
//             </div>
//         </>
//     );
// };

// const applyWithSelect = withSelect((select, props) => {
//     const deviceType = select('core/editor')?.getDeviceType ? select('core/editor').getDeviceType() : null;
//     const { getBlocks, getBlockIndex } = select('core/block-editor');
//     const innerBlocks = getBlocks(props.clientId);
//     const slideIndex = getBlockIndex(props.clientId);

//     return {
//         innerBlocks,
//         deviceType,
//         isParentOfSelectedBlock: select('core/block-editor').hasSelectedInnerBlock(props.clientId, true),
//         slideIndex,
//     };
// });

// export default compose(applyWithSelect)(Edit);

import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import './editor.scss';

const ALLOWED_BLOCKS = ['frontis-blocks/container'];

const TEMPLATE = [['frontis-blocks/container', {}, [['frontis-blocks/advanced-heading']]]];

export default function Edit({ attributes }) {
	const { blockId } = attributes;

	const blockProps = useBlockProps({
		className: `frontis-loop-wrapper uagb-loop-container fb-wrapper-block ${blockId || ''}`,
	});

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'uagb-loop-post',
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: TEMPLATE,
			templateLock: false,
		}
	);

	return (
		<div {...blockProps}>
			<div {...innerBlocksProps} />
		</div>
	);
}

