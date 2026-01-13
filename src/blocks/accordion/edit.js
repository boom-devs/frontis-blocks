import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, useInnerBlocksProps, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useEffect, useMemo, useRef, lazy, Suspense, memo } from "@wordpress/element";
import { select, dispatch } from "@wordpress/data";
import { times } from 'lodash';
import { createBlock } from "@wordpress/blocks";
import './editor.scss';
const Inspector = lazy(() => import('./inspector'));
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';


const ALLOWED_BLOCKS = ["frontis-blocks/accordion-item"];


function Edit({ attributes, setAttributes, clientId, isSelected }) {

    const {
        blockID,
        blockStyle,

        classHook,
        accordionType,
        displayIcon,
        tabIconSwitcher,
        tabIcon,
        tabImageUrl,
        tabImageAlt,
        expandedIcon,
        expandedImageUrl,
        expandedImageAlt,
        tagName,
        faqSchema,
        accordionChildCount,

        accordionGlobalWraperID,
        accordionGlobalWraperClass,

        accordionDesktopSwitcher,
        accordionTabletSwitcher,
        accordionMobileSwitcher,
    } = attributes;

    const blockProps = useBlockProps({
        className: `fb-accordion-main-wrapper ${blockID} ${accordionDesktopSwitcher && 'fb-desktop-responsive'} ${accordionTabletSwitcher && 'fb-tablet-responsive'} ${accordionMobileSwitcher && 'fb-mobile-responsive'}`,
    });

    /**
    * Manages tab button settings and switches to block settings on click
    */
    const panelRef = useRef(null);
    SwitchToBlockSettings(panelRef);


    const addAccordion = () => {
        const innerBlocks = [
            ...select("core/block-editor").getBlocks(clientId),
        ];
        let count = innerBlocks ? innerBlocks.length : 3;

        const newBlock = createBlock("frontis-blocks/accordion-item", {
            itemId: count + 1,
            title: __(`Accordion title ${count + 1}`, "frontis-blocks"),
            inheritedAccordionType: accordionType,
            inheritedTagName: tagName,
            inheritedDisplayIcon: displayIcon,
            inheritedTabIconSwitcher: tabIconSwitcher,
            inheritedTabIcon: tabIcon,
            inheritedTabImageUrl: tabImageUrl,
            inheritedTabImageAlt: tabImageAlt,
            inheritedExpandedIconSwitcher: tabIconSwitcher,
            inheritedExpandedIcon: expandedIcon,
            inheritedExpandedImageUrl: expandedImageUrl,
            inheritedExpandedImageAlt: expandedImageAlt,
            parentBlockID: blockID,
        });
        innerBlocks.splice(innerBlocks.length, 0, newBlock);
        dispatch("core/block-editor")
            .replaceInnerBlocks(clientId, innerBlocks)
            .then(() => {
                setAttributes({ accordionChildCount: count + 1 });
            });
    };



    useEffect(() => {
        if (!tabIcon) {
            setAttributes({ tabIcon: "fas fa-angle-right" });
        }
        if (!expandedIcon) {
            setAttributes({ expandedIcon: "fas fa-angle-down" });
        }
    }, []);

    const insertAccodionItem = (accordionChildCount) => {
        return times(accordionChildCount, (n) => [
            "frontis-blocks/accordion-item",
            {
                itemId: n + 1,
                title: __(`Accordion title ${n + 1}`, "frontis-blocks"),
                inheritedAccordionType: accordionType,
                inheritedDisplayIcon: displayIcon,
                inheritedTabIcon: "fas fa-angle-right",
                inheritedExpandedIcon: "fas fa-angle-down",
                inheritedTagName: tagName,
                faqSchema: faqSchema,
                parentBlockID: blockID,
            },
        ]);
    };




    return (
        <>
            <Suspense fallback={null}>
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                    clientId={clientId}
                />
            </Suspense>

            <div {...blockProps}>
                <div
                    className={`fb-parent-wrapper fb-accordion-wrapper fb-parent-${blockID} ${classHook} ${accordionGlobalWraperClass}`} id={accordionGlobalWraperID} ref={panelRef}
                >
                    <div className={`fb-accordion-container`}>
                        <div className="fb-accordion-inner">
                            <InnerBlocks
                                template={insertAccodionItem(
                                    accordionChildCount
                                )}
                                templateLock={false}
                                allowedBlocks={ALLOWED_BLOCKS}
                            />
                        </div>
                    </div>
                    <div className="fb-accordion-add-button-wrapper">
                        <Button
                            className="fb-accordion-add-button"
                            label={__("Add Item", "frontis-blocks")}
                            icon="plus"
                            onClick={addAccordion}
                        >
                            <span className="fb-accordion-add-button-label">
                                {__("Add Item", "frontis-blocks")}
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
            <style>{blockStyle}</style>
        </>
    );
}

export default memo(Edit);
