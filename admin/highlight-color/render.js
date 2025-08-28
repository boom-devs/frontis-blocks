import { createHigherOrderComponent } from '@wordpress/compose';
import HighlightToolbar from './highlight-toolbar';

export default createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const { isSelected } = props;

        if(isSelected) {
            return (
                <>
                    <BlockEdit {...props} />
                    <HighlightToolbar {...props} />
                </>
            );
        }
        return <BlockEdit {...props} />;
    };
}, 'withHighlightToolbar');
