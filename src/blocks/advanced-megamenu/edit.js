// mega menu ( edit.js )

import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
    InnerBlocks,
} from "@wordpress/block-editor";
import { useEffect, useState } from "@wordpress/element";
import { useSelect, useDispatch } from "@wordpress/data";
import { parse } from "@wordpress/blocks";
import { Button, Icon } from "@wordpress/components";
import Inspector from "./inspector";
import "./editor.scss";

// Define allowed blocks for menu items
const ALLOWED_BLOCKS = ['frontis-blocks/advanced-mega-menu-item'];
const TEMPLATE = [
    ['frontis-blocks/advanced-mega-menu-item', {}],
];

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockId,
        menuItems,
        navigationDesktopSwitcher,
        navigationTabletSwitcher,
        navigationMobileSwitcher,
        menuLayout
    } = attributes;

    const [activeMenuIndex, setActiveMenuIndex] = useState(null);

    // Get inner blocks
    const innerBlocks = useSelect(
        (select) => {
            return select('core/block-editor').getBlock(clientId)?.innerBlocks || [];
        },
        [clientId]
    );

    const blockProps = useBlockProps({
        className: `frontis-block fb-advanced-navigation-main-wrapper ${blockId} ${navigationDesktopSwitcher ? 'fb-desktop-responsive' : ''} ${navigationTabletSwitcher ? 'fb-tablet-responsive' : ''} ${navigationMobileSwitcher ? 'fb-mobile-responsive' : ''}`,
    });

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
            <div {...blockProps}>
                <div className={`fb-mega-menu-wrapper ${menuLayout}`}>
                    <InnerBlocks
                        allowedBlocks={ALLOWED_BLOCKS}
                        template={TEMPLATE}
                        renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
                    />
                </div>
            </div>
        </>
    );
}