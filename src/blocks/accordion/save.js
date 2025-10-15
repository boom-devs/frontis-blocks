import { useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {

    const { 
        blockID,
        classHook,
        accordionGlobalWraperID,
        accordionGlobalWraperClass,

        accordionDesktopSwitcher,
        accordionTabletSwitcher,
        accordionMobileSwitcher,
    } = attributes;


    const blockProps = useBlockProps.save({
        className: `fb-accordion-main-wrapper ${blockID} ${accordionDesktopSwitcher && 'fb-desktop-responsive'} ${accordionTabletSwitcher && 'fb-tablet-responsive'} ${accordionMobileSwitcher && 'fb-mobile-responsive'}`,
    });


    return (
        <>
            <div {...blockProps}>
                <div
                    className={`fb-parent-wrapper fb-accordion-wrapper fb-parent-${blockID} ${classHook} ${accordionGlobalWraperClass}`} id={accordionGlobalWraperID}
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
