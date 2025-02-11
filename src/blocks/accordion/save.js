import { useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {

    const { 
        blockID,
        classHook,
        accordionGlobalWraperID,
        accordionGlobalWraperClass,
    } = attributes;


    const blockProps = useBlockProps.save({
        className: `fb-accordion-main-wrapper ${blockID} ${accordionGlobalWraperClass}`,
    });


    return (
        <>
            <div {...blockProps}>
                <div
                    className={`fb-parent-wrapper fb-parent-${blockID} ${classHook}`} id={accordionGlobalWraperID}
                >
                    <div className={`fb-accordion-container`}>
                        <div className="fb-accordion-inner">
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
