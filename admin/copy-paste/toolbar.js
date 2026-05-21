import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { useDispatch, dispatch } from '@wordpress/data';
import { copy } from "@wordpress/icons";
import styleExclusions from './styleExclusions';


function copyPasteStyle(copyStyle) {
    // Store copy style inside localstorage
    if (copyStyle) {
        localStorage.setItem('copyStyle', JSON.stringify(copyStyle));
    }

    return JSON.parse(localStorage.getItem('copyStyle'));
}

export default function ToolBar() {

    const { createNotice } = useDispatch('core/notices');

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

        if (selectedBlock.name === parsedCopyStyle.name) {
            let attributesToApply = { ...parsedCopyStyle.attributes };

            const blockConfig = styleExclusions.find(
                block => block.name === selectedBlock.name
            );

            if (blockConfig) {
                blockConfig.skipAttrs?.forEach(attr => {
                    delete attributesToApply[attr];
                });

                // Nested skip (preserve values from selectedBlock)
                if (blockConfig.skipNestedAttrs) {
                    Object.keys(blockConfig.skipNestedAttrs).forEach(nestedAttr => {
                        if (Array.isArray(attributesToApply[nestedAttr]) && Array.isArray(selectedBlock.attributes[nestedAttr])) {
                            attributesToApply[nestedAttr] = attributesToApply[nestedAttr].map((item, index) => {
                                let newItem = { ...item };

                                blockConfig.skipNestedAttrs[nestedAttr].forEach(skipKey => {
                                    if (selectedBlock.attributes[nestedAttr][index]) {
                                        newItem[skipKey] = selectedBlock.attributes[nestedAttr][index][skipKey];
                                    }
                                });

                                return newItem;
                            });
                        }
                    });
                }
            }

            const isBlockDisabled = (
                selectedBlock.name !== "frontis-blocks/countdown" &&
                selectedBlock.name !== "frontis-blocks/social-icons"
            );

            Object.keys(attributesToApply).forEach(attr => {
                if (
                    typeof attributesToApply[attr] === "boolean" &&
                    attributesToApply[attr] === true &&
                    isBlockDisabled
                ) {
                    if (selectedBlock.attributes[attr] !== true) {
                        delete attributesToApply[attr];
                    }
                }
            });

            // Block attributes update
            wp.data.dispatch("core/block-editor").updateBlockAttributes(
                selectedBlock.clientId,
                attributesToApply
            );
        } else {
            // আলাদা block হলে নোটিফিকেশন
            createNotice(
                "success",
                sprintf(
                    __(
                        "Your copied blocks is not same to your selected block.",
                        "frontis-blocks"
                    ),
                    selectedBlock.title
                ),
                {
                    type: "snackbar",
                    id: "testing_id",
                    isDismissible: true,
                }
            );
        }


    }


    const copyIcon = () => {
        return (
            <svg style={{ fill: '#fff' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 17H5C3.89543 17 3 16.1046 3 15V5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V9M9 17V19C9 20.1046 9.89543 21 11 21H19C20.1046 21 21 20.1046 21 19V11C21 9.89543 20.1046 9 19 9H17M9 17V11C9 9.89543 9.89543 9 11 9H17" stroke="#0B0C0E" strokeWidth="1.4" />
            </svg>
        )
    }

    const pasteIcon = () => {

        return (
            <svg style={{ fill: '#fff' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 15V5C19 3.89543 18.1046 3 17 3H12M19 15L13 21M19 15H14C13.4477 15 13 15.4477 13 16V21M13 21H7C5.89543 21 5 20.1046 5 19V10M5 5H10C11.1046 5 12 5.89543 12 7V8M5 5L7 7M5 5L7 3" stroke="#0B0C0E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }


    // subHeadingText, headingText, headingIcon

    return (
        <BlockControls group="block">
            <ToolbarGroup>
                <ToolbarButton
                    label={__('Copy style', 'frontis-blocks')}
                    icon={copyIcon()}
                    onClick={() => copyStyle()}
                />
                <ToolbarButton
                    label={__('Paste style', 'frontis-blocks')}
                    icon={pasteIcon()}
                    onClick={() => pasteStyle()}
                />
            </ToolbarGroup>
        </BlockControls>
    )
}
