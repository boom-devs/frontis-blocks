import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { useDispatch, dispatch } from '@wordpress/data';
import {copy} from "@wordpress/icons";
import styleExclusions from './styleExclusions'; 


function copyPasteStyle(copyStyle) {
    // Store copy style inside localstorage
    if(copyStyle) {
        localStorage.setItem('copyStyle', JSON.stringify(copyStyle));
    }

    return JSON.parse(localStorage.getItem('copyStyle'));
}

export default function ToolBar() {

    const { createNotice } = useDispatch( 'core/notices' );
    
    const copyStyle = () => {
        const selectedBlock = wp.data.select('core/block-editor').getSelectedBlock();
        copyPasteStyle(selectedBlock);
    }


    const pasteStyle = () => {

        // get copiedBlockName from localstorage
        const selectedBlock = wp.data.select('core/block-editor').getSelectedBlock();

        const copyStyle = localStorage.getItem('copyStyle');

        if (!copyStyle) {
            // Notify if no copied style is found
            wp.data.dispatch('core/notices').createNotice(
                'error',
                __('No copied style found.', 'frontis-blocks'),
                {
                    type: 'snackbar',
                    id: 'testing_id',
                    isDismissible: true,
                }
            );
            return;
        }

        const parsedCopyStyle = JSON.parse(copyStyle);

        if(selectedBlock.name === parsedCopyStyle.name) {

            let attributesToApply = { ...parsedCopyStyle.attributes };

            const blockConfig = styleExclusions.find(block => block.name === selectedBlock.name);

            if (blockConfig) {
                blockConfig.skipAttrs.forEach(attr => {
                    delete attributesToApply[attr];
                });
            }

            // Check boolean attributes: apply only if copied attr is true and selected block attr is also true
            Object.keys(attributesToApply).forEach(attr => {
                if (typeof attributesToApply[attr] === 'boolean' && attributesToApply[attr] === true) {
                    if (selectedBlock.attributes[attr] !== true) {
                        delete attributesToApply[attr]; // Skip if selected block's attr is not true
                    }
                }
            });

            // Update the block with the appropriate attributes
            wp.data.dispatch('core/block-editor').updateBlockAttributes(
                selectedBlock.clientId,
                attributesToApply
            );
        } else {
            // Your copied blocks is not same to your selected block set notifications using wp.data.dispatch
            createNotice( 'success',
                sprintf(__( 'Your copied blocks is not same to your selected block.', 'frontis-blocks' ), selectedBlock.title ), {
                    type: 'snackbar',
                    id: 'testing_id',
                    isDismissible: true,
                } );
        }
    }


    // subHeadingText, headingText, headingIcon
    
	return (
		<BlockControls group="block">
			<ToolbarGroup>
				<ToolbarButton
					label={__('Copy style', 'frontis-blocks')}
					icon={copy}
					onClick={() => copyStyle()}
				/>
                <ToolbarButton
					label={__('Paste style', 'frontis-blocks')}
					icon={'admin-settings'}
					onClick={() => pasteStyle()}
				/>
			</ToolbarGroup>
		</BlockControls>
	)
}
