import { RichText, useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';
import renderSVG from '../../components/icon-picker/components/icon-picker/controls/renderIcon';

export default function save({ attributes }) {

    const { 
        blockID,
        blockStyle,
        
        classHook,
        formType,
        formTitle,

        formToEmail,
        formCCEmail,
        formBCCEmail,
        formEmailSubject,
        formSuccessType,
        formSuccessMessage,
        formSuccessRedirect,
        formFailMessage,
        formValidtionMessage,

        submitBtnLabel,
        submitBtnIconSwitcher,
        submitBtnIcon,

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
        <div {...blockProps}>
            <form
                className={`fb-parent-wrapper fb-form-builder-wrapper fb-parent-${blockID} ${classHook} ${formGlobalWraperClass}`}
                id={formGlobalWraperID}
                data-form-title={formTitle}
                data-form-to-email={formToEmail}
                data-form-cc-email={formCCEmail}
                data-form-bcc-email={formBCCEmail}
                data-form-email-subject={formEmailSubject}
                data-form-success-type={formSuccessType}
                data-form-success-message={formSuccessType === 'message' && ( formSuccessMessage ? formSuccessMessage : 'Thank you! Your form has been submitted.')}
                data-form-success-redirect={formSuccessType === 'redirect' ? formSuccessRedirect : ''}
                data-form-fail-message={formFailMessage}
                data-form-validation-message={formValidtionMessage}
            >
                <InnerBlocks.Content />

                <div className="fb-form-messages fb-hide">
                    <div className="fb-success-message fb-hide"></div>
                    <div className="fb-error-message fb-hide"></div>
                    <div className="fb-validation-message fb-hide"></div>
                </div>

                {/* Submit Button */}    
                <div className="fb-field-item fb-form-builder-submit-wrapper">
                    <button isPrimary className="fb-submit-button">
                        <RichText.Content
                            tagName="span"
                            className="fb-submit-button-label"
                            value={submitBtnLabel}
                        />
                        {submitBtnIconSwitcher && (
                            <span className="fb-submit-button-icon">
                                {renderSVG(submitBtnIcon)}
                            </span>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
