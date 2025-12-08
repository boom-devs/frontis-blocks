import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, useInnerBlocksProps, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useEffect, useMemo, useRef } from "@wordpress/element";
import { select, dispatch, useSelect } from "@wordpress/data";
import { times } from 'lodash';
import { createBlock } from "@wordpress/blocks";
import './editor.scss';
import Inspector from './inspector';
import SwitchToBlockSettings  from '@Utils/SwitchToBlockSettings';


const ALLOWED_BLOCKS = [
    "frontis-blocks/container",
    "frontis-blocks/field-text",
    "frontis-blocks/field-textarea",
    "frontis-blocks/field-radio",
    "frontis-blocks/field-select",
    "frontis-blocks/field-checkbox"
];


export default function Edit({ attributes, setAttributes, clientId, isSelected }) {

    const { 
        blockID,
        
        classHook,
        formBuilderType,
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
        formBuilderChildCount,

        formBuilderGlobalWraperID,
        formBuilderGlobalWraperClass,

        formBuilderDesktopSwitcher,
        formBuilderTabletSwitcher,
        formBuilderMobileSwitcher,
    } = attributes;

    const blockProps = useBlockProps({
        className: `fb-accordion-main-wrapper ${blockID} ${formBuilderDesktopSwitcher && 'fb-desktop-responsive'} ${formBuilderTabletSwitcher && 'fb-tablet-responsive'} ${formBuilderMobileSwitcher && 'fb-mobile-responsive'}`,
    });

    /**
    * Manages tab button settings and switches to block settings on click
    */
    const panelRef = useRef(null);
    SwitchToBlockSettings(panelRef);

    const hasInnerBlocks = useSelect(
        (select) => select('core/block-editor').getBlocks(clientId).length > 0,
        [clientId]
    );

    const defaultTemplate = [
        ['frontis-blocks/text-field', {
            label: __('Name', 'frontis-blocks'),
            name: 'user_name',
            placeholder: __('Enter your name', 'frontis-blocks'),
            required: true
        }],
        ['frontis-blocks/text-field', {
            label: __('Email', 'frontis-blocks'),
            name: 'user_email',
            type: 'email',
            placeholder: __('Enter your email', 'frontis-blocks'),
            required: true
        }],
        ['frontis-blocks/textarea-field', {
            label: __('Message', 'frontis-blocks'),
            name: 'user_message',
            placeholder: __('Write your message here...', 'frontis-blocks'),
            required: true
        }],
        ['frontis-blocks/checkbox-field', {
            label: __('I agree to the terms and conditions', 'frontis-blocks'),
            name: 'agree_terms',
            required: true
        }],
    ];


    // const addAccordion = () => {
    //     const innerBlocks = [
    //         ...select("core/block-editor").getBlocks(clientId),
    //     ];
    //     let count = innerBlocks ? innerBlocks.length : 3;

    //     const newBlock = createBlock("frontis-blocks/accordion-item", {
    //         itemId: count + 1,
    //         title: __(`Accordion title ${count + 1}`, "frontis-blocks"),
    //         inheritedAccordionType: accordionType,
    //         inheritedTagName: tagName,
    //         inheritedDisplayIcon: displayIcon,
    //         inheritedTabIconSwitcher: tabIconSwitcher,
    //         inheritedTabIcon: tabIcon,
    //         inheritedTabImageUrl: tabImageUrl,
    //         inheritedTabImageAlt: tabImageAlt,
    //         inheritedExpandedIconSwitcher: tabIconSwitcher,
    //         inheritedExpandedIcon: expandedIcon,
    //         inheritedExpandedImageUrl: expandedImageUrl,
    //         inheritedExpandedImageAlt: expandedImageAlt,
    //         parentBlockID: blockID,
    //     });
    //     innerBlocks.splice(innerBlocks.length, 0, newBlock);
    //     dispatch("core/block-editor")
    //         .replaceInnerBlocks(clientId, innerBlocks)
    //         .then(() => {
    //             setAttributes({ accordionChildCount: count + 1 });
    //         });
    // };

    

    // useEffect(() => {
    //     if (!tabIcon) {
    //         setAttributes({ tabIcon: "fas fa-angle-right" });
    //     }
    //     if (!expandedIcon) {
    //         setAttributes({ expandedIcon: "fas fa-angle-down" });
    //     }
    // }, []);
    
    // const insertAccodionItem = (accordionChildCount) => {
    //     return times(accordionChildCount, (n) => [
    //         "frontis-blocks/accordion-item",
    //         {
    //             itemId: n + 1,
    //             title: __(`Accordion title ${n + 1}`, "frontis-blocks"),
    //             inheritedAccordionType: accordionType,
    //             inheritedDisplayIcon: displayIcon,
    //             inheritedTabIcon: "fas fa-angle-right",
    //             inheritedExpandedIcon: "fas fa-angle-down",
    //             inheritedTagName: tagName,
    //             faqSchema: faqSchema,
    //             parentBlockID: blockID,
    //         },
    //     ]);
    // };


    

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />

            <div {...blockProps}>
                <form
                    className={`fb-parent-wrapper fb-form-builder-wrapper fb-parent-${blockID} ${classHook} ${formBuilderGlobalWraperClass}`} id={formBuilderGlobalWraperID} ref={panelRef}
                >
                    <InnerBlocks
                        allowedBlocks={ALLOWED_BLOCKS}
                        template={hasInnerBlocks ? undefined : defaultTemplate}
                        templateLock={false}
                    />

                    {/* Submit Button */}
                    <div className="fb-field-item fb-form-builder-submit-wrapper">
                        <Button isPrimary className="fb-submit-button">
                            <span className="fb-submit-button-label">{__('Submit', 'form-builder')}</span>
                            <span className="fb-submit-button-icon"></span>
                        </Button>
                    </div>

                    <div className="fb-form-builder-add-button-wrapper">
                        <InnerBlocks.ButtonBlockAppender />
                    </div>
                </form>
            </div>
        </>
    );
}
