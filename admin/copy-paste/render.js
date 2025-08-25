// render.js
import { createHigherOrderComponent } from '@wordpress/compose';
import ToolBar from './toolbar';

const FRONTIS_BLOCKS_PREFIX = 'frontis-blocks/';

export default createHigherOrderComponent((BlockEdit) => {
    return (props) => {

        const { isSelected, name } = props;

        if (!name?.startsWith(FRONTIS_BLOCKS_PREFIX)) {  
            return <BlockEdit {...props} />;
        }

        if(isSelected) {
            return (
                <>
                    <BlockEdit {...props} />
                    <ToolBar />
                </>
            );
        }
        return <BlockEdit {...props} />;
    };
}, 'renderFrontisCopyPaste');