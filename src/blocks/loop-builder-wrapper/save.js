/**
 * WordPress dependencies
 */
// import { InnerBlocks } from '@wordpress/block-editor';

// export default function Save( {	
// 	attributes: {
// 		blockId,
// 	},
// } ) {
// 	console.log(blockId);
// 	return (
// 		<div className={blockId}>
// 			<InnerBlocks.Content />
// 		</div>
// 	);
// }


import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
export default function save({ attributes }) {
    const {
        blockId,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `${blockId} fb-loop-builder-wrapper-main-container`,
    });

    return (

        <>
            <div {...blockProps}>
				<InnerBlocks.Content />
            </div>
        </>
    );
}