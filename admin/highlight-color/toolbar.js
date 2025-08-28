import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import {copy} from "@wordpress/icons";


function copyPasteStyle(copyStyle) {
    // Store copy style inside localstorage
    if(copyStyle) {
        localStorage.setItem('copyStyle', JSON.stringify(copyStyle));
    }

    return JSON.parse(localStorage.getItem('copyStyle'));
}

export default function ToolBar() {    

    const copyIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 17H5C3.89543 17 3 16.1046 3 15V5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V9M9 17V19C9 20.1046 9.89543 21 11 21H19C20.1046 21 21 20.1046 21 19V11C21 9.89543 20.1046 9 19 9H17M9 17V11C9 9.89543 9.89543 9 11 9H17" stroke="#0B0C0E" stroke-width="1.4"/>
            </svg>
        )
    }

    // subHeadingText, headingText, headingIcon
    
	return (
		<BlockControls group="block">
			<ToolbarGroup>
				<ToolbarButton
					label={__('Highlight color', 'frontis-blocks')}
					icon={copy}
				/>
			</ToolbarGroup>
		</BlockControls>
	)
}
