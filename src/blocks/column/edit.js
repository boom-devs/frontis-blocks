/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { useEffect, useRef, useState } from "@wordpress/element";
import { select, useSelect, dispatch } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { Placeholder, Button } from "@wordpress/components";
import { columns as columnsIcon } from "@wordpress/icons";

/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";

import {
    wrapperWidth,
    columnOrderPrefix,
} from "./constants";

// Define column variations
const variations = [
    {
        name: 'single-column',
        title: __('Single Column', 'frontis-blocks'),
        icon: <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path fillRule="evenodd" clipRule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H9V34H39Z" /></svg>,
        innerBlocks: [['frontis-blocks/column', {}]],
    },
    {
        name: 'two-columns',
        title: __('Two Columns', 'frontis-blocks'),
        icon: <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path fillRule="evenodd" clipRule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z" /></svg>,
        innerBlocks: [
            ['frontis-blocks/column', { width: 50 }],
            ['frontis-blocks/column', { width: 50 }],
        ],
    },
    {
        name: 'three-columns',
        title: __('Three Columns', 'frontis-blocks'),
        icon: <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path fillRule="evenodd" clipRule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H20V14H28V34ZM18 34H9V14H18V34Z" /></svg>,
        innerBlocks: [
            ['frontis-blocks/column', { width: 33.33 }],
            ['frontis-blocks/column', { width: 33.33 }],
            ['frontis-blocks/column', { width: 33.33 }],
        ],
    },
];

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId } = props;
    const {
        blockId,
        columns,
        columnWidths,
        // ... other attributes
    } = attributes;

    const hasInnerBlocks = useSelect(
        (select) => select("core/block-editor").getBlocks(clientId).length > 0,
        [clientId]
    );

    const blockProps = useBlockProps({
        className: classnames(
            className,
            `frontis-guten-block-main-parent-wrapper frontis-column-editor-wrap frontis-column-editor-wrap-${blockId}`
        ),
    });

    useEffect(() => {
        if (!hasInnerBlocks && !columns) {
            setAttributes({ columns: 2, columnWidths: [50, 50] });
            const newBlocks = variations[1].innerBlocks.map(([name, attributes]) => 
                wp.blocks.createBlock(name, attributes)
            );
            dispatch("core/block-editor").replaceInnerBlocks(clientId, newBlocks, false);
        }
    }, []);

    const selectVariation = (variation) => {
        const { innerBlocks } = variation;
        setAttributes({ 
            columns: innerBlocks.length, 
            columnWidths: innerBlocks.map(block => block[1].width || 100 / innerBlocks.length)
        });
        const newBlocks = innerBlocks.map(([name, attributes]) => 
            wp.blocks.createBlock(name, attributes)
        );
        dispatch("core/block-editor").replaceInnerBlocks(clientId, newBlocks, false);
    };

    if (!hasInnerBlocks && !columns) {
        return (
            <div {...blockProps}>
                <Placeholder
                    icon={columnsIcon}
                    label={__('Column Layout', 'frontis-blocks')}
                    instructions={__('Select a column layout to start with.', 'frontis-blocks')}
                >
                    <div className="fb-column-variation-picker">
                        {variations.map((variation) => (
                            <Button
                                key={variation.name}
                                icon={variation.icon}
                                onClick={() => selectVariation(variation)}
                                variant="secondary"
                            >
                                {variation.title}
                            </Button>
                        ))}
                    </div>
                </Placeholder>
            </div>
        );
    }

    return (
        <div {...blockProps}>
            <Inspector
                {...props}
                variations={variations}
                onSelectVariation={selectVariation}
            />
            <div className={`frontis-parent-wrapper frontis-parent-${blockId}`}>
                <div className={`frontis-column-wrapper ${blockId}`}>
                    <div className="frontis-column-inner">
                        <InnerBlocks
                            orientation="horizontal"
                            allowedBlocks={['frontis-blocks/column']}
                            renderAppender={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}