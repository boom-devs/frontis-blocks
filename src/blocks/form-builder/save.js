import { RichText, useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';
import renderSVG from '../../components/icon-picker/components/icon-picker/controls/renderIcon';

export default function save({ attributes }) {

    const { 
        blockID,
        
        classHook,
        formType,

        submiteBtnLabel,
        submiteBtnIconSwitcher,
        submiteBtnIcon,

        formGlobalWraperID,
        formGlobalWraperClass,

        formDesktopSwitcher,
        formTabletSwitcher,
        formMobileSwitcher,
    } = attributes;


    const blockProps = useBlockProps.save({
        className: `fb-form-builder-main-wrapper ${blockID} ${formDesktopSwitcher && 'fb-desktop-responsive'} ${formTabletSwitcher && 'fb-tablet-responsive'} ${formMobileSwitcher && 'fb-mobile-responsive'}`,
    });



    return (
        <>
            <div {...blockProps}>
                <form
                    className={`fb-parent-wrapper fb-form-builder-wrapper fb-parent-${blockID} ${classHook} ${formGlobalWraperClass}`} id={formGlobalWraperID}
                >
                    <InnerBlocks.Content />

                    {/* Submit Button */}
                    <div className="fb-field-item fb-form-builder-submit-wrapper">
                        <button id="fb-form-submit" className="fb-submit-button">
                            <RichText.Content
                                tagName="span"
                                className="fb-submit-button-label"
                                value={submiteBtnLabel}
                            />
                            {submiteBtnIconSwitcher && (
                                <span className="fb-submit-button-icon">
                                    {renderSVG(submiteBtnIcon)}
                                </span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
