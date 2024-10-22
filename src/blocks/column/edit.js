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
import { VariationPicker } from './variationPicker';

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
        innerBlocks: [['frontis-blocks/column', { width: 100 }]],
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
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        blockId,
        blockMeta,
        resOption,
        [`${wrapperWidth}Range`]: desktopRange,
        [`TAB${wrapperWidth}Range`]: tabWidthRange,
        [`MOB${wrapperWidth}Range`]: mobileWidthRange,
        [`${columnOrderPrefix}Range`]: columnOrderDesktop,
        [`TAB${columnOrderPrefix}Range`]: columnOrderTab,
        [`MOB${columnOrderPrefix}Range`]: columnOrderMobile,
        colAli,
        rowOverFlow,
        classHook,
    } = attributes;

    const [showWidthTooltip, setShowWidthTooltip] = useState(false);
    const [nextColWDhByUseState, setNextColWDhByUseState] = useState(0);

    const [
        initBlockInsertionPointIndex,
        setInitBlockInsertionPointIndex,
    ] = useState(0);
    const [initColWidth, setInitColWidth] = useState(0);
    const [initNextColWidth, setInitNextColWidth] = useState(0);
    const [initPrevColWidth, setInitPrevColWidth] = useState(0);
    const [nextBlockClientId, setNextBlockClientId] = useState(false);
    const [prevBlockClientId, setPrevBlockClientId] = useState(false);

    const colWrap = useRef(null);
    const draggerRef = useRef(null);

    const hasInnerBlocks = useSelect(
        (select) => select("core/block-editor").getBlocks(clientId).length > 0,
        [clientId]
    );

    const isParentColumn = useSelect((select) => {
        const { getBlockParents, getBlockName } = select("core/block-editor");
        const parents = getBlockParents(clientId);
        return !parents.some(parentId => getBlockName(parentId) === 'frontis-blocks/column');
    }, [clientId]);

    useEffect(() => {
        const nextColClientId =
            select("core/block-editor").getAdjacentBlockClientId(clientId) || false;

        const nextColumnDesktopWidth = nextColClientId
            ? select("core/block-editor").getBlockAttributes(nextColClientId).cw_Range
            : 0;

        const prevColClientId =
            select("core/block-editor").getPreviousBlockClientId(clientId) || false;

        const prevColumnDesktopWidth = prevColClientId
            ? select("core/block-editor").getBlockAttributes(prevColClientId).cw_Range
            : 0;

        const blockInsertionPoint = select(
            "core/block-editor"
        ).getBlockInsertionPoint(clientId);

        const insertionIndex = blockInsertionPoint.index;

        setNextColWDhByUseState(nextColumnDesktopWidth);
        setInitBlockInsertionPointIndex(insertionIndex);
        setInitColWidth(desktopRange);
        setNextBlockClientId(nextColClientId);
        setPrevBlockClientId(prevColClientId);
        setInitNextColWidth(nextColumnDesktopWidth);
        setInitPrevColWidth(prevColumnDesktopWidth);
    }, [initBlockInsertionPointIndex]);

    const blockInsertionIndex = select(
        "core/block-editor"
    ).getBlockInsertionPoint(clientId).index;

    if (blockInsertionIndex !== initBlockInsertionPointIndex) {
        setInitBlockInsertionPointIndex(blockInsertionIndex);
    }

    const [isColumnOrder_Custom_Desktop, setIsParentColumnOrderDesktop] = useState(false);
    const [isColumnOrder_Custom_Tab, setIsParentColumnOrderTab] = useState(false);
    const [isColumnOrder_Custom_Mobile, setIsParentColumnOrderMobile] = useState(false);

    const [columnGap, setColumnGap] = useState({
        desktop: 0,
        tab: 0,
        mobile: 0,
    });

    const [columnNumber, setColumnNumber] = useState({
        desktop: 1,
        tab: 1,
        mobile: 1,
    });

    const parentBlocks = select("core/block-editor").getBlockParents(clientId);
    const parentBlockData = useSelect((select) => select("core/block-editor").getBlock(parentBlocks[parentBlocks.length - 1]));

    useEffect(() => {
        if (!parentBlockData || !parentBlockData.attributes) {
            return false;
        }
        const {
            colOrder_Option,
            TABcolOrder_Option,
            MOBcolOrder_Option,
            clGp_Range,
            TABclGp_Range,
            MOBclGp_Range,
            clNum_Range,
            TABclNum_Range,
            MOBclNum_Range,
        } = parentBlockData.attributes;

        setIsParentColumnOrderDesktop(colOrder_Option === 'custom' ? true : false);
        setIsParentColumnOrderTab(TABcolOrder_Option === 'custom' ? true : false);
        setIsParentColumnOrderMobile(MOBcolOrder_Option === 'custom' ? true : false);

        setColumnGap({
            desktop: clGp_Range,
            tab: TABclGp_Range,
            mobile: MOBclGp_Range,
        });

        setColumnNumber({
            desktop: clNum_Range,
            tab: TABclNum_Range || 2,
            mobile: MOBclNum_Range || 1,
        });
    }, [parentBlockData]);

    useEffect(() => {
        const BLOCK_PREFIX = "frontis-column";
        const uniqueId = clientId.slice(0, 8);
        if (!blockId) {
            setAttributes({ blockId: uniqueId });
        } else if (blockId !== uniqueId) {
            const uniqueBlocks = select("core/block-editor")
                .getBlocks()
                .filter(
                    (block) =>
                        block.name === "frontis-blocks/column" &&
                        block.attributes.blockId === blockId
                );
            if (uniqueBlocks.length > 1) {
                setAttributes({ blockId: uniqueId });
            }
        }
    }, []);

    const selectVariation = (variation) => {
        const { innerBlocks } = variation;
        const newBlocks = innerBlocks.map(([name, attributes]) => 
            wp.blocks.createBlock(name, attributes)
        );
        dispatch("core/block-editor").replaceInnerBlocks(clientId, newBlocks, false);
    };

    const blockProps = useBlockProps({
        className: classnames(
            className,
            `frontis-block-main-parent-wrapper frontis-column-editor-wrap frontis-column-editor-wrap-${blockId}`
        ),
    });

    if (isParentColumn && !hasInnerBlocks) {
        return <VariationPicker {...props} variations={variations} onSelect={selectVariation} />;
    }

    return (
        <>
            {isSelected && (
                <Inspector
                    {...props}
                    colWrap={colWrap}
                    initColWidth={initColWidth}
                    initNextColWidth={initNextColWidth}
                    initPrevColWidth={initPrevColWidth}
                    nextBlockClientId={nextBlockClientId}
                    prevBlockClientId={prevBlockClientId}
                    setInitColWidth={setInitColWidth}
                    setInitNextColWidth={setInitNextColWidth}
                    setInitPrevColWidth={setInitPrevColWidth}
                />
            )}

            <div {...blockProps}>

                {nextBlockClientId && (
                    <div className="width-dragger-change" ref={draggerRef}>
                        <div className="dragger-inner">
                            {showWidthTooltip ? (
                                <div className="cols-width-tooltip">
                                    <span>{Math.round(desktopRange * 100) / 100}</span>
                                    <span className="dashicons dashicons-leftright"></span>
                                    <span>{Math.round(nextColWDhByUseState * 100) / 100}</span>
                                </div>
                            ) : (
                                <span className="dashicons dashicons-leftright"></span>
                            )}
                        </div>
                    </div>
                )}

                <div className={`frontis-parent-wrapper frontis-parent-${blockId} ${classHook}`}>
                    <div className={`frontis-column-wrapper ${blockId}`} ref={colWrap}>
                        <div className="frontis-column-inner">
                            <InnerBlocks
                                orientation="vertical"
                                templateLock={false}
                                renderAppender={
                                    hasInnerBlocks
                                        ? undefined
                                        : InnerBlocks.ButtonBlockAppender
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
