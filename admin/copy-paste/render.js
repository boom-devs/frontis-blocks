// render.js
import { createHigherOrderComponent } from '@wordpress/compose';
import ToolBar from './toolbar';

export default createHigherOrderComponent((BlockEdit) => {
    return (props) => {

        const { isSelected } = props;
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