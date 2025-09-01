"use strict";

import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import HighlightToolbar from './toolbar';

const renderFrontisHighlightColor = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const { attributes, setAttributes } = props;

        return (
            <Fragment>
                <BlockEdit {...props} />
                <HighlightToolbar
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            </Fragment>
        );
    };
}, 'renderFrontisHighlightColor');

export default renderFrontisHighlightColor;